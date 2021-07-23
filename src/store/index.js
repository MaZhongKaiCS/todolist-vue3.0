import { createStore } from 'vuex'

export default createStore({
  // 定义所需要的状态
  state: {
    list: [
      {
        title: "吃饭",
        complete: false,
      },
      {
        title: "睡觉",
        complete: false,
      },
      {
        title: "打代码",
        complete: true,
      },
    ]
  },
  // 同步修改 state    都是方法
  // 第一个参数 state，第二个参数是需要修改的值
  mutations: {
    // 添加任务
    addTodo(state,payload)
    {
      state.list.push(payload)
    },
    // 删除任务 splice(下标，个数)
    delTodo(state,payload)
    {
      state.list.splice(payload,1)
    },
    // 清除已完成任务
    clearTodo(state,payload)
    {
      // 把过滤后的数组传进来
      state.list = payload
    }
  },
  // 异步提交 mutation
  // 第一个参数是 store（vuex），第二个参数是需要修改的值
  actions: {
  },
  // 模块化
  modules: {
  }
})
