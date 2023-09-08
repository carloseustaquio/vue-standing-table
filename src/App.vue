<template>
  <div id="app" class="flex flex-column align-center bg-page full-height gap-10 pt-6">
    <MainHeader />
    <div class="flex-grow">
      <h1>The table will go here</h1>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
