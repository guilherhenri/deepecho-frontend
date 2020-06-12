<template>
    <div class="container">
      <div class="card">
        <div class="image">
          <img
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
            alt="Foto Perfil"
          >
        </div>
        <h1>{{ user.full_name }} - {{ age }} anos</h1>

        <span>{{ user.profession }}</span>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { differenceInYears, parseISO } from 'date-fns';

export default {
  data: () => ({
    age: 0,
  }),
  mounted() {
    this.age = differenceInYears(new Date(), parseISO(this.user.born_date));
  },
  computed: {
    ...mapState('auth', ['user']),
  },
};
</script>

<style lang="scss" scoped>
  @media (max-width: 399px) {
    .container {
      height: calc(100vh - 100px) !important;
    }
  }

  .container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 60px);
    padding: 20px;
    overflow-y: auto !important;

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 400px;
      max-height: 500px;
      padding: 20px;
      background: white;
      box-shadow: 1px 1px 12px black;
      border-radius: 4px;

      .image {
        width: 80%;
        height: auto;
        overflow: hidden;
        border-radius: 8px;
        margin: 28px auto;
        position: relative;

        &:hover {
          img {
            transform: scale(1.3);
          }
        }

        img {
          width: 100%;
          height: 100%;
          transition: 0.4s;
        }
      }

      h1 {
        color: #2051B9;
        margin: 20px 0 0 0;
        font-size: 22px;
        text-transform: uppercase;
      }

      span {
        margin-top: 20px;
        font-weight: 700;
      }
    }
  }

</style>
