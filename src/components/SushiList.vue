<template>
    <div>
        <h2 class="display-3">Sushi List</h2>
        <div v-if="this.sushiList" class="sushi-list">
            <div v-for="item in this.sushiList" :key="item.id">
                <sushi-list-item :item="item" ></sushi-list-item>
            </div>
        </div>
        <div v-else >Loading...</div>
    </div>
</template>

<script>
import { getSushiList } from "../firebase.js";
import SushiListItem from "./SushiListItem.vue";
export default {
    components: {
        SushiListItem
    },
    data() {
        return {
            db: null,
            dbRef: null,
            sushiList: null,
        }
    },
    methods: {
        setSushiList() {
            let inform;
            getSushiList().then(value => {
                inform = value;        
                this.sushiList = inform;
            });
        },
    },
    mounted() {
        this.setSushiList();
    },
}
</script>

<style scoped>
    .sushi-list {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        overflow-x: scroll;
    }

    @media only screen and (max-width: 800px) {
        .sushi-list {
            flex-wrap:wrap ;
            justify-content: center;
            overflow-x: hidden;
        }
    }
</style>