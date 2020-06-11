<template>
  <div>
    <form @submit.prevent="submit()">
      <div>Login</div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    form: {
      email: '',
      password: '',
    },
  }),
  methods: {
    ...mapActions('auth', ['ActionLogin']),
    async submit() {
      try {
        await this.ActionLogin(this.form);

        this.$router.push({ name: 'home' });
      } catch (err) {
        alert(err.data ? err.data.message : 'Usuario nao encontrado');
      }
    },
  },
};
</script>

<style scoped lang="scss">

</style>
