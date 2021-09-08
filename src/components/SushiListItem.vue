<template>
    <div class="sushi-item">
      <h2 class="display-5">{{ item.name_en }}</h2>
      <p class="p">{{ item.name_jp }}</p>
      <img class="sushi-item__pic" :src=" require('@/assets/img/' + item.pic)" alt="pic">
      <p class="p p-center">{{ item.info }}</p>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    .sushi-item {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 0.25rem;
        background-color: #fff8dc;
        box-shadow: 2px 2px 2px #00000080;
        margin: 0.5rem;
        width: 280px;
        height: 400px;
    }

    .sushi-item__pic {
        width: 65%;
    }

    .p-center {
        text-align: center;
    }
</style>