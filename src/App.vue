<template>
  <div id="app" class="min-h-vh flex flex-column align-center bg-page h-full gap-10 pt-6">
    <MainHeader />
    <StandingTable />
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
  // can't remove this block for some reason
}
</style>
