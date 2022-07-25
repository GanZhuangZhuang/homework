<template>
  <div>
    <ganForm :item="formItem" :field="fieldForm"></ganForm>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      formItem: [
        {
          label: '姓名',
          type: 'input',
          prop: 'name',
          required: true
        },
        {
          label: '密码',
          type: 'input',
          prop: 'password',
          required: true
        }
      ],
      fieldForm: {
        name: '玛玛哈哈',
        password: '123456'
      }
    }
  },
  components: {
    ganForm: () => import('../components/form/index.vue')
  }
}
</script>

<style lang="scss" scoped></style>
