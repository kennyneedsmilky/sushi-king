<template>
    <div>
        <hero-image :pic="this.pic" :pageTitle="this.pageTitle" :pageSubtitle="this.pageSubtitle" ></hero-image>
        <div class="page__section">
            <h1 class="display-3">About</h1>
            <p class="p">This is the about page.</p>
        </div>      
    </div>
</template>

<script>
import HeroImage from "../components/HeroImage.vue";
export default {
    name: "About",
    components: {
        HeroImage
    },
    props: {

    },
    data() {
        return {
            pic: "sushi_02.jpg",
            pageTitle: "About Sushi King",
            pageSubtitle: "The king of sushi since 1875."
        }
    },
}
</script>

<style scoped>
    
</style>