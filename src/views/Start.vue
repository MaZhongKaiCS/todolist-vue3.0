<template>
  <button @click="goHome">任务列表</button>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
    name:'Start',
    setup(){
        let router = useRouter()
        let goHome = ()=>{
            router.push({
                path:'/home'
            })
        }
        return{
            goHome
        }
    }
})
</script>

<style lang="scss" scoped>

</style>