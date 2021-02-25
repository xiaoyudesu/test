<template>
  <div>
    <input type="text" v-model.number="val">

  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch, Emit} from 'vue-property-decorator';

@Component
export default class InputNumber extends Vue {
  @Prop() private value!: number;

  get val(){
    console.log(13)
    return this.value+1
  }



  @Watch('val')
  valChange(val: number) {
    this.$emit('input', val)
  }
}
</script>

<style scoped>

</style>