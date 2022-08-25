<template>
    <nav id="navbar" class=" navbar navbar-dark ">
        <ul class="d-flex">
            <li v-for="link in links" :key="link.id" class="mx-3" :class="{ 'active': link.current }">
                <a class="navbar-link" icon="faHatWizard" :href="link.url">{{ link.text }}
                    <font-awesome-icon v-if="link.dropDown" icon="fa-solid fa-angle-down" />
                </a>




            </li>



        </ul>

    </nav>
</template>

<script>
export default {
    name: 'HeaderNavbar',
    data() {
        return {
            links: [
                {
                    text: 'Home',
                    url: '#',
                    current: false,
                    id: 1,
                    dropDown: false,

                },
                {
                    text: 'Services',
                    url: '#',
                    current: false,
                    id: 2,
                    dropDown: true,

                },
                {
                    text: 'About',
                    url: '#',
                    current: false,
                    id: 3,
                    dropDown: true,
                },
                {
                    text: 'Videos',
                    url: '#',
                    current: false,
                    id: 4,
                    dropDown: true,

                },
                {
                    text: 'Blog',
                    url: '#',
                    current: false,
                    id: 5,
                    dropDown: false,

                },
                {
                    text: 'Store',
                    url: '#',
                    current: false,
                    id: 6,
                    dropDown: true,

                },
            ]
        }
    }

}

</script>
<style scoped lang="scss">
@import '../assets/sass/_vars.scss';

.navbar-link {
    color: $navbar_links_inactive;
}
</style>