<template>
    <nav id="navbar" class=" navbar navbar-dark ">
        <ul class="d-flex">
            <li v-for="link in links" :key="link.id" class="mx-3" :class="{ 'active': link.current }">
                <a class="navbar-link fw-semibold" icon="faHatWizard" :href="link.url">{{ link.text }}
                    <div v-if="link.new" class="new-link-label px-1 mx-2">new</div>
                    <font-awesome-icon v-if="link.dropDown" icon="fa-solid fa-angle-down" />
                </a>
            </li>
        </ul>
        <BaseButton />

    </nav>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
    name: "HeaderNavbar",
    data() {
        return {
            links: [
                {
                    text: "Home",
                    url: "#",
                    current: false,
                    id: 1,
                    dropDown: false,
                    new: false,
                },
                {
                    text: "Services",
                    url: "#",
                    current: false,
                    id: 2,
                    dropDown: true,
                    new: false,
                },
                {
                    text: "About",
                    url: "#",
                    current: false,
                    id: 3,
                    dropDown: true,
                    new: false,
                },
                {
                    text: "Videos",
                    url: "#",
                    current: false,
                    id: 4,
                    dropDown: true,
                    new: false,
                },
                {
                    text: "Blog",
                    url: "#",
                    current: false,
                    id: 5,
                    dropDown: false,
                    new: false,
                },
                {
                    text: "Store",
                    url: "#",
                    current: false,
                    id: 6,
                    dropDown: true,
                    new: true,
                },
            ]
        };
    },
    components: { BaseButton }
}

</script>
<style scoped lang="scss">
@import '../assets/sass/_vars.scss';

.navbar-link {
    color: $navbar_links_inactive;

    .new-link-label {
        border-radius: 2px;
        height: 100%;
        background-color: $new_link_label_bg_color;
        display: inline-block;
        color: $new_link_label_txt_color;
        font-size: 0.8rem;
        text-align: center;

    }
}
</style>