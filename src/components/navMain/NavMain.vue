<template>
  <div>
    <div v-if="list.length > 0">
      <div v-for="(item, index) in list" :key="index">
        <div class="item">
          <input type="checkbox" v-model="item.complete" />
          {{ item.title }}
          <button class="del" @click="del(item, index)">删除</button>
        </div>
      </div>
    </div>
    <div v-else>
      暂无任务
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "navMain",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    // 删除按钮的方法 del
    let del = (item, index) => {
      // console.log(item);
      // console.log(index);
      ctx.emit("del", index);
    };
    return {
      del,
    };
  },
});
</script>

<style lang="scss" scoped>
.item {
  height: 35px;
  line-height: 35px;
  position: relative;
  width: 200px;
  cursor: pointer;
  button {
    position: absolute;
    right: 53px;
    top: 6px;
    display: none;
    z-index: 99;
  }
  &:hover {
    button {
      background-color: #ddd;
      display: block;
    }
  }
}
</style>

