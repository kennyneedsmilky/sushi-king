<template>
    <div>
        <hero-image :pic="this.pic" :pageTitle="this.pageTitle" :pageSubtitle="this.pageSubtitle" :infoBtn="this.info"></hero-image>
        <div class="page__section">
            <p class="p display-5">Please take a look at our menu.</p>
        </div>
        <div class="page__section">
            <sushi-list></sushi-list>
        </div>
    </div>
</template>

<script>
import HeroImage from "../components/HeroImage.vue";
import SushiList from "../components/SushiList.vue";
export default {
    name: "home",
    components: {
        HeroImage, SushiList
    },
    data() {
        return {
            pic: "sushi_01.jpg",
            pageTitle: "Welcome",
            pageSubtitle: "Your sushi adventure starts here!",
            info: "Learn More"
        }
    }
}
</script>

<style scoped>
    
</style>