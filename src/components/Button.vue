<template>
  <div id="button">
    <input type="button" :value="value">
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/assets/style/components/button.scss";

</style>