<template>
  <div class="menu">
      <div class="div-logo">
        <img :src="logo" alt="DeepEcho logo">
      </div>

      <li class="item">
        <a class="menu-link">
          Caixa de entrada
        </a>
      </li>
    </div>
</template>

<script>
import logo from '../assets/img/deepecho-logo.png';

export default {
  data: () => ({
    logo,
  }),
};
</script>

<style lang="scss" scoped>
  .menu {
  width: 200px;
  max-height: 100vh;
  background: #F6F7F9;
  overflow-y: scroll !important;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  .div-logo {
    width: 100%;
    height: 60px;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00264d;

    img {
      width: 50%;
      min-width: 122px;
    }
  }

  .item {
    overflow: hidden;
    position: relative;
    min-height: 48px;
    cursor: pointer;

    .menu-link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      margin-top: 10px;
      color: #999;
      position: relative;
      line-height: 1.3em;
      font-size: 14px;
      font-weight: bold;
      position: relative;

      &:hover {
        color: #2051B9;
      }

      &::before {
        content: "";
        position: absolute;
        width: 6px;
        height: 100%;
        background: #2051B9;
        left: 0;
        top: 0;
        transition: 0.3s;
        opacity: 0;
      }

      &:hover::before {
        opacity: 1;
      }
    }
  }
}
</style>
