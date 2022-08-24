<template>
  <div>
    <MainHeader />
    <TheFooter />
  </div>
</template>

    <script>
import MainHeader from "./components/MainHeader.vue";
import TheFooter from "./components/TheFooter.vue";


export default {
  name: 'App',
  components: {
    MainHeader,
    TheFooter,

  }
}
</script>

    <style lang="scss">
    @import "./assets/sass/style.scss";
    </style>
