<template>
  <div id="app" class="flex flex-column align-center bg-page full-height gap-10 pt-6">
    <MainHeader />
    <div class="flex-grow">
      <StandingTable />
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
import StandingTable from './components/StandingTable.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
    StandingTable 
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
