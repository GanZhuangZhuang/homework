<template>
  <el-form ref="form" :model="field" label-width="80px">
    <el-form-item
      :rules="item.rules"
      v-for="item in formItem"
      :key="item.label"
      :label="item.label"
      :prop="item.prop"
    >
      <el-input v-model="field[item.prop]"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import createRules from '@/components/form/createRules'
export default {
  name: 'ganForm',
  props: {
    item: {
      type: Array,
      default: () => []
    },
    field: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      formItem: []
    }
  },
  methods: {},
  beforeMount() {
    this.formItem = createRules(this.item)
  }
}
</script>

<style lang="scss" scoped></style>
