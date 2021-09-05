<template>
    <div class="hero-image" :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(' + require('@/assets/img/' + this.pic) + ')' }">
        <transition name="fade">
            <div v-if="display">
                <h2 class="hero-image__title" :class="[ this.window.width > 700 ? 'display-1' : 'display-3']">{{ this.pageTitle }}</h2>
                <p class="hero-image__subtitle">{{ this.pageSubtitle }}</p>
            </div>
        </transition>
        <transition name="fade2">
            <va-button v-if="this.infoBtn && display" size="large" color="danger" class="hero-image__info-btn"  @click="btnAction()"> {{ this.infoBtn }} </va-button>
        </transition>
    </div>
</template>

<script>
// 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/img/' + this.pic + ')'
export default {
    props: {
        pic: String,
        pageTitle: String,
        pageSubtitle: String,
        infoBtn: String,
    },
    data() {
        return {
            window: {
                width: 0,
                height: 0
            },
            display: false
        }
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        displayTitle() {
            setTimeout(() => {
                this.display = true;
            }, 100);
        },
        btnAction() {
            this.$emit("showModal");
        }
    },
    created() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
        this.displayTitle();
    },
    unmounted() {
        window.removeEventListener("resize", this.handleResize);
    }
}
</script>

<style scoped>
.hero-image {
    /* background-image: url("../assets/img/sushi_01.jpg"); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.hero-image__title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0.5rem;
    border-radius: 100px;
    background-color: #00000080;
    color: #f5f5f5;
}

.hero-image__subtitle {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0.25rem;
    border-radius: 100px;
    background-color: #00000080;
    margin: 0.25rem;
    color: #f5f5f5;
}

.hero-image__info-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0.25rem;
}

@media only screen and (max-width: 700px) {
    .hero-image {
        height: 250px;
    }

    .hero-image__title {
        position: absolute;
        left: 0;
        top: 0;
    }

    .hero-image__info-btn {
        position: unset;
    }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: all 1s ease 0.5s;
}

.fade2-enter-from,
.fade2-leave-to {
  opacity: 0;
  transform: translateY(-25px);
}
</style>