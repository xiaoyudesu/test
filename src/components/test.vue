<template>
  <div>just a test{{ x }}</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Test extends Vue {
  x = 12
}



</script>

<style scoped>

</style>