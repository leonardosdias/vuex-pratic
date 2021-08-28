<template>
  <div>
    <h1>Vuex Pratic</h1>
    <h4>Simulando compra de produtos por cliente</h4>
    <p>Total de contagem de TVs: {{ totalCount }}</p>
    <p v-show="happyStaff">Equipe feliz</p>
    <p v-show="!totalCount">Nenhuma TV</p>
    <button :disabled="!totalCount" @click="buyTv">Comprar TV</button>
    <br />
    <br />
    <button :disabled="totalCount < 2" @click="buyTwoTvs">
      Comprar duas TV's
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Customer",
  computed: {
    happyStaff() {
      return this.$store.getters.happyStaff;
    },
    totalCount() {
      return this.$store.state.totalCount;
    },
  },
  methods: {
    ...mapActions(["removeTv"]),
    buyTv() {
      this.removeTv(1);
    },
    buyTwoTvs() {
      this.removeTv(2);
    },
  },
};
</script>

<style scoped>
</style>