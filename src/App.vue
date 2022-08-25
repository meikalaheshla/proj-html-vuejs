<template>
  <div>
    <MainHeader />
    <TheFooter />
    <h1>
      <font-awesome-icon icon="fa-brands fa-vuejs" />

    </h1>
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
