<template>
  <div v-if="winner" class="fixed inset-0 flex flex-column align-center justify-center">
    <div class="bg-white flex flex-column align-center justify-center animation p-3" :class="{ animate: animationOn }">
      <h1 class="text-center fs-7 fs-sm-7">🏆 Celebrate the Winner! 🏆</h1>
      <div class="flex flex-column align-center text-center mt-5">
        <img v-if="winner.strTeamBadge" :src="winner.strTeamBadge" alt="Team Badge" width="50px" height="50px" />
        <h1 class="p-2 fs-7 fs-sm-7">{{ winner.strTeam }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
const ANIMATION_TIMING = 5000;

export default {
  components: {
  },
  data() {
    return {
      animationOn: false,
    }
  },
  props: {
    winner: Object,
  },
  watch: {
    winner: {
      async handler(value) {
        if (value) {
          setTimeout(() => {
            this.animationOn = value;
          }, 100);
          setTimeout(() => {
            this.$emit('toggleCelebrate', null);
          }, ANIMATION_TIMING)
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
@keyframes celebrate-winner {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  20% {
    transform: scale(1);
    opacity: 1;
  }

  80% {
    transform: scale(1.5);
    opacity: 1;
  }

  100% {
    transform: scale(10);
    opacity: 0;
  }
}

.animation {
  width: clamp(300px, 50vw, 700px);
  height: clamp(300px, 50vw, 700px);

  border-radius: 50%;
  animation: celebrate-winner 5s linear; // 5s is the animation timing

  background: $primary-gradient;
  color: white;
}
</style>