<template>
  <div class="sign-form">
    <form @submit.prevent="submit()">
      <img :src="logo" alt="DeepEcho">

      <h1>Seja Bem-vindo</h1>

      <input
        type="text"
        v-model="form.username"
        :class="{ active: form.username !== ''}"
        placeholder="Username"
        required
      >

      <input
        type="password"
        v-model="form.password"
        :class="{ active: form.password !== ''}"
        placeholder="Senha"
        required
      >

      <button class="sign-btn">Entrar</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import logo from '../../../assets/img/deepecho-logo.png';

export default {
  data: () => ({
    logo,
    form: {
      username: '',
      password: '',
    },
  }),
  methods: {
    ...mapActions('auth', ['ActionLogin']),
    async submit() {
      try {
        await this.ActionLogin(this.form);

        this.$router.push({ name: 'dashboard' });
      } catch (err) {
        alert(err.data ? err.data.message : 'Usuario nao encontrado');
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .sign-form {
    max-width: 400px;
    min-width: 320px;
    min-height: 470px;
    padding: 20px;
    text-align: center;
    background: url('../../../assets/img/bg-form.jpg');
    background-position: center;
    border-radius: 8px;

    img {
      width: 60%;
      min-width: 170px;
    }

    h1 {
      margin-top: 100px;
      color: #fff;
      font-weight: bold;
      font-size: 30px;
    }

    input {
      display: flex;
      width: 100%;
      padding: 0 16px;
      margin: 20px 0;
      font-size: 16px;
      height: 44px;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      border: none;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.5);
      font-family: "motserrat", sans-serif;

      &:focus {
        background: rgba(255, 255, 255, 0.3);
      }

      &:focus::placeholder {
        color: #fff;
      }

      &::placeholder {
        color: #696969;
      }
    }

    .active {
      background: #fff !important;
      color: black;
      opacity: 0.8;
    }

    .sign-btn {
      width: 100%;
      margin-top: 60px;
      height: 44px;
      background: #66615B;
      border: none;
      border-radius: 44px;
      font-size: 16px;
      color: #fff;
      font-family: "motserrat", sans-serif;
      transition: 0.8s;

      &:hover {
        transform: scale(0.96);
      }
    }
  }

  @media (max-width: 340px) {
    .sign-form {
      min-width: calc(100% - 40px) !important;
    }
  }

  @media (max-height: 499px) {
    .sign-form {
      min-height: calc(100% - 40px);

      h1 {
        margin-top: 30px;
      }
    }
  }

  @media (max-height: 430px) {
    .sign-form {

      h1 {
        margin-top: 10px;
      }

      .sign-btn {
        margin-top: 0;
      }
    }
  }

  @media (max-height: 330px) {
    .sign-form {
      img {
        width: 150px;
        min-width: 150px !important;
      }

      h1 {
        font-size: 22px;
      }

      .sign-btn {
        margin-top: 0;
      }
    }
  }
</style>
