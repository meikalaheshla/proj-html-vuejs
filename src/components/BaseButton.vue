<template>
    <a href="" class="base-button  ">
        Schedule a workout
    </a>
</template>

<script>
export default {
    name: 'BaseButton',
    components: {

    }
}

</script>
<style scoped lang="scss">
@import '../assets/sass/_vars.scss';

.base-button {
    color: $base_btn_txt_color;
    background-color: $base_btn_bg_color;
    border-radius: 30px;
    transition: background-color, ease, 0.3s;
    font-size: 0.8rem;
    font-weight: 700;
    padding: 15px 20px;

    &:hover {
        background-color: $base_btn_bg_hover;
    }
}
</style>