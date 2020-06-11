<template>
  <div :class="{ login: !show, dashboard: show }" id="app">
    <navbar v-if="show"></navbar>

    <div v-if="show" class="main">
      <header-menu />
      <router-view />
    </div>

    <router-view v-else/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import HeaderMenu from './components/Header';

export default {
  components: {
    Navbar,
    HeaderMenu,
  },
  computed: {
    show() {
      return this.$route.name !== 'login';
    },
  },
};
</script>

<style lang="scss" scoped>
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 100vh;
    background: url('./assets/img/bg.jpg') no-repeat;
    background-size: cover;
  }

  .dashboard {
    display: flex;
    height: 100vh;
    background: rgb(212, 208, 214);

    .main {
      width: 100%;
      height: 100%;
    }
  }
</style>
