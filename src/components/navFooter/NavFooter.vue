<template>
  <div class="container">
    <div>已完成{{ isComplete }} / 全部{{ list.length }}</div>
    <div v-if="isComplete > 0">
      <button class="btn" @click="clear">清除已完成任务</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  name: "navFooter",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    let isComplete = computed(() => {
      // 过滤已完成的任务
      let arr = props.list.filter((item) => {
        return item.complete;
      });
      return arr.length;
    });
    // clear：清除任务事件
    let clear = () => {
      // console.log("清除任务");
      // 未完成的任务
      let arr = props.list.filter(item => {
        return item.complete === false
      })
      // 将未完成的任务打包给 clear 事件到父组件
      ctx.emit('clear',arr)
    };
    return {
      isComplete,
      clear,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-content: center;
  .btn {
    margin-left: 10px;
  }
}
</style>