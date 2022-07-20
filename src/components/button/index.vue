<template>
  <button
    @click="change"
    :disabled="disabled || loading"
    class="gan-button"
    :style="[minWidthCss]"
    :class="[theme, isRound, isBorder, isSize, blockCss]"
  >
    <span>
      <i v-if="loading" class="iconfont icon-prefix icon-loading"></i>
      <i v-if="prefix" class="iconfont icon-prefix" :class="iconPrefix"></i>
      <slot></slot>
      <i v-if="suffix" class="iconfont icon-suffix" :class="iconSuffix"></i>
    </span>
  </button>
</template>

<script>
export default {
  name: 'ganButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    minWidth: {
      type: String,
      default: '95px'
    },
    size: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    round: Boolean,
    border: Boolean,
    disabled: Boolean,
    block: Boolean,
    loading: Boolean
  },
  computed: {
    theme() {
      return this.type ? `gan-button-${this.type}` : ''
    },
    isRound() {
      return this.round ? 'is-round' : ''
    },
    isBorder() {
      return this.border ? 'is-border' : ''
    },
    isSize() {
      return this.size ? `gan-button-${this.size}` : ''
    },
    minWidthCss() {
      if (!this.minWidth) return ''
      return { 'min-width': this.minWidth }
    },
    iconPrefix() {
      return this.prefix ? `icon-${this.prefix}` : ''
    },
    iconSuffix() {
      return this.suffix ? `icon-${this.suffix}` : ''
    },
    blockCss() {
      return this.block ? 'gan-button-block' : ''
    }
  },
  methods: {
    change() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #409eff !important;
$danger: #e6a23c !important;
$success: #00d100 !important;
$warning: #f56c6c !important;

.gan-button {
  border-width: 1px;
  border-style: solid;
  border-color: #dcdfe6;
  height: 40px;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  color: #606266;
  cursor: pointer;

  + .gan-button {
    margin-left: 14px;
    margin-bottom: 10px;
  }

  > span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .icon-prefix {
    margin-right: 10px;
  }
  .icon-suffix {
    margin-left: 10px;
  }
}
.gan-button-medium {
  height: 38px;
}
.gan-button-small {
  padding: 0 15px;
  height: 32px;
  font-size: 12px;
}
.gan-button-mini {
  padding: 0 15px;
  height: 28px;
  font-size: 12px;
}
.gan-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
.gan-button-primary {
  background-color: $primary;
  border-color: $primary;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: $primary;
  }
}
.gan-button-success {
  background-color: $success;
  border-color: $success;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: $success;
  }
}
.gan-button-danger {
  background-color: $danger;
  border-color: $danger;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: $danger;
  }
}
.gan-button-warning {
  background-color: $warning;
  border-color: $warning;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: $warning;
  }
}

/*** 圆角 */
.is-round {
  border-radius: 100px;
}
/**块级按钮*/
.gan-button-block {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 0;
}
/**loading动画加载*/
.icon-loading {
  animation: loading 2s infinite linear;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
