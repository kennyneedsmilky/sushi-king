<template>
    <div>
        <hero-image :pic="this.pic" :pageTitle="this.pageTitle" :pageSubtitle="this.pageSubtitle" :infoBtn="this.info" v-on:showModal="showModal = !showModal"></hero-image>
        <div class="page__section">
            <h1 class="display-3">Login or Signup</h1>
            <p class="p display-5">This is the login page. If you don't have an account you can also signup.</p>
        </div>      
        <!-- Modal -->
        <va-modal class="login-modal" v-model="showModal" hide-default-actions overlay-opacity="0.2">
            <h2 class="display-3">Login or Signup</h2>
            <va-form>
                <va-input class="mb-4" v-model="this.inputValue1" :rules="[(value) => value.length > 3 || `Email is Required.`]" label="Email" placeholder="example@example.com"/>
                <va-input class="mb-4" v-model="this.inputValue2" type="password" :rules="[(value) => value.length > 8 || `A password of 8 or more characters is required`]" label="Password" placeholder="" />
                <va-input v-if="signup" class="mb-4" v-model="this.inputValue3" type="password" :rules="[(value) => value === this.inputValue2 || `It has to be the same password!`]" label="Password Again" placeholder="Write the same password." />
                <div class="login-modal__checkbox-cont">
                    <va-checkbox class="mt-4" v-model="signup" :label="labelSignup" />
                </div>
                <div class="login-modal__btns">
                    <va-button color="primary">Login</va-button>
                    <va-button color="danger" @click="this.showModal = false">Cancel</va-button>
                </div>
            </va-form>
        </va-modal>
    </div>
</template>

<script>
import HeroImage from "../components/HeroImage.vue";
export default {
    name: "Login",
    components: {
        HeroImage
    },
    data() {
        return {
            pic: "sushi_03.jpg",
            pageTitle: "Login",
            pageSubtitle: "Login or signup for special discounts!",
            info: "Login / Signup",
            showModal: false,
            message: "Okay",
            labelSignup: "Signup",
            signup: false,
            inputValue1: '',
            inputValue2: '',
            inputValue3: '',
        }
    }
}
</script>

<style scoped>
    .login-modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .login-modal__checkbox-cont {
        display: flex;
        justify-content: flex-start;
    }

    .login-modal__btns {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.25rem;
        margin: 0.25rem;
        width: 100%;
        height: 100%;
    }
</style>