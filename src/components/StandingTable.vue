<template>
  <div class="flex-grow w-full flex flex-column align-center">
    <div class="box-3d-shadow-default page-content-width w-full">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="bg-primary c-white">
              <th class="p-2">#</th>
              <th class="p-2 text-left max-w-full min-w-180">Club</th>
              <th class="p-2 w-200 hide-max-md">Form</th>
              <th class="p-2">GP</th>
              <th class="p-2">W</th>
              <th class="p-2">D</th>
              <th class="p-2">L</th>
              <th class="p-2">GF</th>
              <th class="p-2">GA</th>
              <th class="p-2">GD</th>
              <th class="p-2">Pts</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData" :key="index" class="h-7" :class="{'skeleton': isLoading}">
              <td class="text-center p-2">{{ item.intRank }}</td>
              <td>
                <div v-if="!isLoading" class="flex align-center p-2 w-full">
                  <img 
                    v-if="item.strTeamBadge" 
                    :src="item.strTeamBadge" 
                    alt="Team Badge" 
                    width="30px" 
                    class="mr-3"
                  /> 
                  {{ item.strTeam }}
                </div>
              </td>
              <td class="text-center hide-max-md p-2">
                <div>
                  <img
                    v-for="(form, index) in item.strForm?.split('')"
                    :key="index"
                    :src="getResultBadge(form)"
                    :alt="getResultBadgeAlt(form)"
                    width="20px"
                    class="ml-1"
                  />
                </div>
              </td>
              <td class="text-center p-2">{{ item.intPlayed }}</td>
              <td class="text-center p-2">{{ item.intWin }}</td>
              <td class="text-center p-2">{{ item.intDraw }}</td>
              <td class="text-center p-2">{{ item.intLoss }}</td>
              <td class="text-center p-2">{{ item.intGoalsFor }}</td>
              <td class="text-center p-2">{{ item.intGoalsAgainst }}</td>
              <td class="text-center p-2">{{ item.intGoalDifference }}</td>
              <td class="text-center p-2">{{ item.intPoints }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex align-center justify-center p-4">
          <PrimaryButton 
            :disabled="!hasMorePages || isLoadingNextPage" 
            @click="loadNextPage"
          >
            {{ isLoadingNextPage ? 'Loading...' : hasMorePages ? 'Load More' : 'No more items :)' }}
          </PrimaryButton>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import mockApi from '../mock-api/index.js';
import PrimaryButton from './PrimaryButton.vue'

const matchResult = {
  W: {
    img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iTG9zcyI+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiNFQTQzMzUiIGN4PSI4IiBjeT0iOCIgcj0iOCI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgOC4wMDAwMDApIHJvdGF0ZSgtMzE1LjAwMDAwMCkgdHJhbnNsYXRlKC04LjAwMDAwMCwgLTguMDAwMDAwKSAiIHBvaW50cz0iMTIgOC44IDguOCA4LjggOC44IDEyIDcuMiAxMiA3LjIgOC44IDQgOC44IDQgNy4yIDcuMiA3LjIgNy4yIDQgOC44IDQgOC44IDcuMiAxMiA3LjIiPjwvcG9seWdvbj4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=',
    alt: 'Win',
  },
  D: {
    img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRHJhdyI+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiM5QUEwQTYiIGN4PSI4IiBjeT0iOCIgcj0iOCI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjUgNyAxMSA3IDExIDkgNSA5Ij48L3BvbHlnb24+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K',
    alt: 'Draw',
  },
  L: {
    img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2luIj4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzNBQTc1NyIgY3g9IjgiIGN5PSI4IiByPSI4Ij48L2NpcmNsZT4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSI2LjQgOS43NiA0LjMyIDcuNjggMy4yIDguOCA2LjQgMTIgMTIuOCA1LjYgMTEuNjggNC40OCI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==',
    alt: 'Loss',
  },
};

export default {
  components: {
    PrimaryButton
  },
	data() {
		return {
			data: [],
      isLoading: false,
      itemsOnFirstLoad: 5,
      hasMorePages: true,
      isLoadingNextPage: false,
		};
	},
	async created() {
    this.isLoading = true;
		await this.getNextStandingData(this.itemsOnFirstLoad);
    this.isLoading = false;
	},
  computed: {
    tableData: function() {
      const skeletonData = Array(this.itemsOnFirstLoad).fill({}); 
      return this.isLoading ? skeletonData : this.data
    },
  },
  methods: {
    getResultBadge(result) {
      return matchResult[result].img;
    },
    getResultBadgeAlt(result) {
      return matchResult[result].alt;
    },
    async getNextStandingData(size) {
      const nextPageData = await mockApi(this.data.length, size);

      this.data = [...this.data, ...nextPageData.table];
      this.hasMorePages = nextPageData.hasMorePages;
    },
    async loadNextPage() {
      this.isLoadingNextPage = true;
      await this.getNextStandingData(3)
      this.isLoadingNextPage = false;
    }
  },
};
</script>

<style scoped lang="scss">
table {
  border-collapse: collapse;

  tbody tr {
    &:nth-child(even) {
      background-color: $grey-100;
    }

    &:hover:not(.skeleton)  {
      background: $primary-gradient;
      color: $white;
    }
  }

  .skeleton {
    td::after {
      content: '';
      display: block;
      animation: skeleton-loading 1s linear infinite alternate;
      width: clamp(20px, 80%, 200px);
      height: 16px;
      border-radius: 8px;
    }
  }
}
</style>