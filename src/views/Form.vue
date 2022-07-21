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
          prop: 'name'
        },
        {
          label: '密码',
          type: 'input',
          prop: 'password'
        }
      ],
      fieldForm: {
        name: '',
        password: ''
      }
    }
  },
  components: {
    ganForm: () => import('../components/form/index.vue')
  }
}
</script>

<style lang="scss" scoped></style>
