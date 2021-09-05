<template>
    <div class="page-footer">
      <p class="display-5">&copy; 2021 KenMil</p>
    </div>
</template>

<style scoped>
.page-footer {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  padding: 0.25rem;
  border-radius: 100px;
  background-color: #f5f5f5e0;
  box-shadow: 2px 2px 2px #00000080;
  margin: 0.25rem;
  height: calc(3rem - 0.5rem);
}

@media only screen and (max-width: 700px) {
  .page-footer {
    justify-content: center;
    width: calc(100% - 0.5rem);
  }
}
</style>