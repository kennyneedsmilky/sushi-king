<template>
    <div>
        <hero-image :pic="this.pic" :pageTitle="this.pageTitle" :pageSubtitle="this.pageSubtitle" ></hero-image>
        <div class="page__section">
            <h1 class="display-3">The Sushi Tale</h1>
            <hr>
            <h2 class="display-4 special-txt">Sugi Suzuki and Sushi</h2>
            <p class="p display-5">Once upon a time, in a land far away, lived a man named Sugi Suzuki. One day, he realized that his lifelong goal was to become the best sushi chef that ever lived. And from that day a great adventure was born. Sugi travelled all over Nippon from the highest mountains to the deepest rivers, all while being trained from all the masters of the trade. After his journey was completed, Sugi returned to his home town and shared his skills by opening up his first sushi shop. He married, had kids and live a prosperous & long life.</p>
            
            <hr>
            <h2 class="display-4 special-txt">And the Tale Continues!</h2>
            <p class="p display-5">Now it is your turn to benefit from Master Suzuki! By all means come by a Sushi King store today and see why everyone gives this brand a near perfect rating! For great sushi and customer service to match, Sushi King can't be defeated!</p>
            <hr>
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
            pageSubtitle: "The king of sushi since 1875.",
        }
    },
}
</script>

<style scoped>
    .special-txt {
        color: #f835ad;
    }
</style>