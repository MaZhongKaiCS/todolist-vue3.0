<template>
  <div>
    <input
      type="text"
      placeholder="请输入任务名称"
      v-model="taskName"
      @keydown.enter="enter"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "navHeader",
  setup(props, ctx) {
    let taskName = ref("");
    // enter 方法：按下回车键 enter 完成提交
    let enter = () => {
      if (taskName.value === '') {
        alert('您还没输入任务')
      }else{
        // 把输入框输入的内容传递给父组件
      ctx.emit('add',taskName.value)
      taskName.value = ''
      }
    };
    return {
      taskName,
      enter
    };
  },
});
</script>

<style lang="scss" scoped>
div{
  margin-bottom: 10px;
}
</style>