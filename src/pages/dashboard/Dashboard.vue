<template>
    <div class="container">
      <div class="card-sort">
        <span>Ordenar por</span>

        <select @change="changeOrder($event)">
          <option value="Subject">Assunto</option>
          <option value="Date">Data</option>
          <option value="From">Remetente</option>
        </select>
      </div>
      <div class="card-email" :key="i" v-for="(item, i) in inbox">
        <div class="info">
          <div :key="j" v-for="(info, j) in item.headers" class="span-info">
            <span v-if="info.name === 'Subject' || info.name === 'Date'">
              {{ info.name === 'Date' ? formatDate(info.value) : info.value }}
            </span>
          </div>
        </div>
        <div class="content" :key="k" v-for="(content, k) in item.body.content">
          <p v-html="content.text"></p>
        </div>

        <span class="span-email">{{ maiorQ + item.from + '>' }}</span>
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default {
  data: () => ({
    maiorQ: '<',
    index: ['Subject', 'Date', 'From'],
    order: 'Subject',
    render: true,
  }),
  async mounted() {
    await this.getData();
    this.filter();
  },
  computed: {
    ...mapState('dashboard', ['inbox']),
  },
  methods: {
    ...mapActions('dashboard', ['ActionInbox']),
    async getData() {
      try {
        await this.ActionInbox();
      } catch (err) {
        alert('Nao foi possivel carregar a pagina');
      }
    },
    async changeOrder(event) {
      this.render = false;
      this.order = event.target.value;
      await this.filter();
      this.render = true;
    },
    filter() {
      const index = this.index.findIndex(value => (
        value === this.order
      ));

      this.inbox.sort((a, b) => {
        if (a.headers[index].value > b.headers[index].value) {
          return 1;
        }
        if (a.headers[index].value < b.headers[index].value) {
          return -1;
        }
        return 0;
      });

      return this.inbox;
    },
    formatDate(date) {
      return format(parseISO(date), "d 'de' MMMM', ás 'HH'h'", { locale: pt });
    },
  },
};
</script>

<style lang="scss" scoped>
  @media (max-width: 900px) {
    .container {
      .card-email {
        flex-direction: column !important;
        height: auto !important;

        .info {
          width: 100% !important;
          margin-right: 0 !important;
          flex-direction: row !important;
          position: relative;
          margin-bottom: 10px;

          &::after {
            content: '';
            height: 1px;
            width: 100%;
            position: absolute;
            background: #999;
            margin-top: -7px;
          }
        }

        .content {
          width: 100% !important;
          margin-bottom: 20px;
        }

        .span-email {
          width: 100% !important;
          text-align: start !important;
        }
      }
    }
  }
  @media (max-width: 399px) {
    .container {
      height: calc(100vh - 100px) !important;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 60px);
    padding: 20px;
    overflow-y: auto !important;

    .card-sort {
      display: flex;
      flex-direction: column;
      align-self: flex-start;
      margin-bottom: 20px;
      width: 20%;
      max-width: 130px;

      span {
        font-weight: bold;
        color: #2051B9;
        margin-bottom: 10px;
      }

      select {
        width: 100%;
        height: 30px;
        padding: 5px;
        border-radius: 4px;
        border: none;
        background: #fff;
        font-size: 13px;
      }
    }

    .card-email {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 80px;
      padding: 15px 30px;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0px 15px 10px -15px #111;
      transition: 0.3s;

      &:hover {
        transform: scale(1.01);
      }

      & + .card-email {
        margin-top: 20px;
      }

      .info {
        width: 25%;
        margin-right: 5%;
        flex-direction: column;
        align-self: flex-start;

        .span-info span {
          color: #333;
          font-weight: bold;
        }

        .span-info + .span-info {
          margin-top: 10px;
        }

        .span-info + .span-info span {
          color: #999;
        }
      }

      .content {
        width: 40%;
        align-self: flex-start;
        line-height: 20px;
      }

      .span-email {
        width: 30%;
        text-align: end;
        align-self: center;
        font-weight: bold;
        color: #2051B9;
      }
    }
  }

</style>
