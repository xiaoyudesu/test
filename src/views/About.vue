<template>
  <div class="about">
    <h1>This is an about page</h1>
    <inputNumber v-model.number="value" @input="onInput" @change="onChange"></inputNumber>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue, Watch, Emit} from 'vue-property-decorator';
import inputNumber from "../components/inputNumber.vue";

@Component({
  components: {
    inputNumber
  }
})
export default class About extends Vue {
  value = 0

  onInput(val: any) {
    console.log(val)
  }

  onChange(val: any) {
    // console.log(val);
  }
}

</script>
