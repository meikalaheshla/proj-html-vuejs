<template>
    <header>
        <div class=" container py-4 d-flex align-items-center justify-content-between">

            <MainLogo />
            <HeaderNavbar />
        </div>
    </header>
</template>

<script>
import MainLogo from './MainLogo.vue';
import HeaderNavbar from './HeaderNavbar.vue';
export default {
    name: 'MainHeader',
    components: {
        MainLogo,
        HeaderNavbar
    }
}

</script>
<style scoped lang="scss">
@import '../assets/sass/_var.scss';

header {
    background-color: $cod_gray;

}
</style>