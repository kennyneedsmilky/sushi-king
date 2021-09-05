<template>
  <page-header></page-header>
  <router-view class="router__view" />
  <page-footer></page-footer>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";
export default {
  components: {
    PageHeader, PageFooter
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

a {
  color: black;
}

a:hover {
  color: #f835ad;
}

body {
  background-color: #ffe0ce;
}

.p, .display-1, .display-2, .display-3, .display-4, .display-5, .page__section {
  padding: 0.25rem;
  margin: 0.25rem;
}

.router__view {
  padding: 3.25rem 0;
}
</style>
