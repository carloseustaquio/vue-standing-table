<template>
  <button class="fs-1 bg-primary c-white pt-2 pb-2 pl-4 pr-4" @click="handleClick" :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isDisabled: Boolean,
  },
  methods: {
    handleClick() {
      if (!this.isDisabled) {
        this.$emit('click'); // Emit a custom click event if not disabled
      }
    },
  },
};
</script>

<style scoped lang="scss">
button {
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: lighten($primary-color, 10%);
    transform: scale(0.98);
  }

  &:disabled {
    background-color: $grey-300;
    transform: none;
    color: $grey-600;
    cursor: initial;
  }
}
</style>
