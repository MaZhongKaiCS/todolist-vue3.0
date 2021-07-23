<template>
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
  </div>
</template>

<script>
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
  emits:['del'],
  setup(props, ctx) {
    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });
    let taskName = ref("");
    // 添加任务
    let add = (val) => {
      taskName.value = val;
      let flag = true;
      list.value.map((item) => {
        if (item.title === taskName.value) {
          flag = false;
          alert("此任务已经存在，请勿重复添加");
        }
      });
      if (flag) {
        // 调用 mutation 中的 addTodo方法
        store.commit("addTodo", {
          title: taskName.value,
          complete: false,
        });
      }
    };
    // 删除任务
    let del = (val) => {
      store.commit('delTodo',val)
    }
    // 清空任务
    let clear = (val) => {
      store.commit('clearTodo',val)
    }
    return {
      list,
      taskName,
      add,
      del,
      clear,
      list,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
