<template>
  <div class="home">
    <!-- button 按钮 -->
    <ganButton>默认按钮</ganButton>
    <ganButton type="primary">成功按钮</ganButton>
    <ganButton type="danger">危险按钮</ganButton>
    <ganButton type="warning">警告按钮</ganButton>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      flag: false
    }
  },
  components: {
    ganButton: () => import('../components/button/index.vue')
  },
  methods: {
    handleSubmit() {
      this.flag = true
      setTimeout(() => {
        console.log('666')
        this.flag = false
      }, 3000)
    }
  }
}
</script>
