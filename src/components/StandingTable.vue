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
            <tr v-for="(item, index) in tableData" :key="index" class="h-7"
              :class="{ 'skeleton': isLoading, 'trophy-cursor': index === 0 && !isLoading }"
              @click="index === 0 ? $emit('onCelebrate', item) : null">
              <td class="text-center p-2">{{ item.intRank }}</td>
              <td>
                <div v-if="!isLoading" class="flex align-center p-2 w-full">
                  <img v-if="item.strTeamBadge" :src="item.strTeamBadge" alt="Team Badge" width="30px" class="mr-3" />
                  {{ item.strTeam }}
                </div>
              </td>
              <td class="text-center hide-max-md p-2">
                <div>
                  <img v-for="(form, index) in item.strForm?.split('')" :key="index" :src="getResultBadge(form)"
                    :alt="getResultBadgeAlt(form)" width="20px" class="ml-1" />
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
          <PrimaryButton :disabled="!hasMorePages || isLoadingNextPage" @click="loadNextPage">
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
import { winIcon, drawIcon, lossIcon } from '../icons/icons'

const matchResult = {
  W: { img: winIcon, alt: 'Win', },
  D: { img: drawIcon, alt: 'Draw', },
  L: { img: lossIcon, alt: 'Loss', },
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
    tableData: function () {
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
    },
    celebrate() {
      alert('You are the champion!');
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

    &:hover:not(.skeleton) {
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