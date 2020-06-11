<template>
    <div class="header">
      <div class="content">
        <aside>
          <div class="profile">
            <div>
              <strong>Guilherme Henrique</strong>

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
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('auth', ['user']),
  },
};
</script>

<style lang="scss" scoped>
</style>
