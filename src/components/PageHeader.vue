<template>
    <div class="page-header display-4">
        <span>🍣</span>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/login">Login</router-link>
    </div>
</template>

<style scoped>
a.router-link-exact-active {
  color: #f835ad;
}

.page-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    padding: 0.25rem;
    box-shadow: 2px 2px 2px #00000080;
    margin: 0.25rem;
    width: calc(50% - 0.5rem);
    height: calc(3rem - 0.5rem);
}

@media only screen and (max-width: 700px) {
    .page-header {
        width: calc(100% - 0.5rem);
    }
}
</style>