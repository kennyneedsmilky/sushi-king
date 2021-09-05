<template>
    <div>
        <hero-image :pic="this.pic" :pageTitle="this.pageTitle" :pageSubtitle="this.pageSubtitle" ></hero-image>
        <div class="page__section">   
            <h1 class="display-3">Home</h1>
            <p class="p">This is the home page.</p>
        </div>      
    </div>
</template>

<script>
import HeroImage from "../components/HeroImage.vue";
export default {
    name: "home",
    components: {
        HeroImage
    },
    data() {
        return {
            pic: "sushi_01.jpg",
            pageTitle: "Welcome",
            pageSubtitle: "Your sushi adventure starts here!"
        }
    }
}
</script>

<style scoped>
    
</style>