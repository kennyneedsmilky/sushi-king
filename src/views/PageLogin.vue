<template>
    <div>
        <hero-image :pic="this.pic" :pageTitle="this.pageTitle" :pageSubtitle="this.pageSubtitle" ></hero-image>
        <div class="page__section">
            <h1 class="display-3">Login</h1>
            <p class="p">This is the login page.</p>
        </div>      
    </div>
</template>

<script>
import HeroImage from "../components/HeroImage.vue";
export default {
    name: "Login",
    components: {
        HeroImage
    },
    props: {

    },
    data() {
        return {
            pic: "sushi_03.jpg",
            pageTitle: "Login",
            pageSubtitle: "Login or signup for special discounts!"
        }
    }
}
</script>

<style scoped>
    
</style>