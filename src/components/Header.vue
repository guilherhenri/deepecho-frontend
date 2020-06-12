<template>
    <div class="header">
      <li class="item">
        <router-link
          :to="{ name: 'dashboard' }"
          :class="{ menulink: true, active: show }"
        >
          Caixa de entrada
        </router-link>
      </li>

      <div class="content">
        <aside>
          <div class="profile">
            <div>
              <strong>{{ user.full_name }}</strong>

              <router-link
                :to="{ name: 'profile' }"
              >
                Meu perfil
              </router-link>
            </div>

            <a @click="logout" href="#">Sair</a>
          </div>
        </aside>
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('auth', ['user']),
    show() {
      return this.$route.name === 'dashboard';
    },
  },
  methods: {
    ...mapActions('auth', ['ActionSignOut']),
    logout() {
      try {
        this.ActionSignOut();

        this.$router.push({ name: 'login' });
      } catch (err) {
        alert(err.data ? err.data.message : 'Erro ao fazer logout');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @media (max-width: 700px) {
    .header {
      justify-content: space-between !important;

      .item {
        display: flex !important;
      }
    }
  }

  @media (max-width: 399px) {
    .header {
      flex-direction: column;
      justify-content: flex-start !important;
      min-height: 100px !important;
      max-height: 100px !important;

      .item {
        max-height: 42px !important;
        margin-bottom: 10px;
      }
    }
  }
  .header {
    background: #F6F7F9;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-width: 100%;
    min-height: 60px;
    max-height: 60px;
    padding: 0px 20px;
    z-index: 1;
    box-shadow: 0px 15px 10px -15px #111;

    .item {
      overflow: hidden;
      position: relative;
      cursor: pointer;
      display: none;

      .active {
        color: #2051B9 !important;
      }

      .active::after {
        opacity: 1 !important;
      }

      .menulink {
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

        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 6px;
          background: #2051B9;
          left: 0;
          top: 87%;
          transition: 0.3s;
          opacity: 0;
        }

        &:hover::after {
          opacity: 1;
        }
      }
    }
  }

  .header .content {
    height: 100%;
    max-width: 1200px;
  }

  .header nav {
    display: flex;
    align-items: center;
  }

  .header aside {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .header aside .profile {
    display: flex;
  }

  .header aside .profile div {
    text-align: right;
    padding-right: 15px;
    margin-right: 15px;
    border-right: 1px solid #999;
  }

  .header aside .profile div strong {
    display: block;
    color: #333;
  }

  .header aside .profile div a {
    display: block;
    margin-top: 2px;
    font-size: 12px;
    color: #999;
  }

  .header aside .profile div + a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    border-radius: 4px;
    text-align: center;
    background: #fff;
    border: 1px solid #2051B9;
    color: #2051B9;
    font-weight: bold;
    position: relative;
    transition: 1s all ease;
    z-index: 0;
    overflow: hidden;
  }

  .header aside .profile div + a:hover {
    color: #fff;
  }

  .header aside .profile div + a::before {
    content: "";
    width: 110%;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #2051B9;
    z-index: -1;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.6s ease;
  }

  .header aside .profile div + a:hover::before {
    height: 200%;
  }
</style>
