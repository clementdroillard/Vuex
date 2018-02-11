<template>
  <div>
    <div>Il y a {{count}} Todos</div>
  </div>
</template>


<script>
export default {
  name: `lpHeader`,
  computed: {
    count() {
      return this.$store.getters.count;
    },
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  // display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
