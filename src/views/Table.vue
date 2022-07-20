<template>
  <div class="home">
    <gan-table :column="column" checkbox index>
      <template v-slot:operation>
        <el-button type="primary">编辑</el-button>
        <gan-button type="danger">删除</gan-button>
      </template>
    </gan-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      column: [
        {
          label: 'URL地址',
          type: 'function',
          prop: 'date',
          callback: (data) => {
            return `<a href="https://www.baidu.com">${data.name}</a>`
          }
        },
        // { label: '日期', prop: 'date', width: 500 },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '性别', prop: 'sex' },
        {
          label: '操作',
          prop: 'operation',
          type: 'slot',
          slot_name: 'operation'
        }
      ]
    }
  },
  components: {
    ganTable: () => import('../components/table/index.vue'),
    ganButton: () => import('../components/button/index.vue')
  },
  methods: {}
}
</script>
