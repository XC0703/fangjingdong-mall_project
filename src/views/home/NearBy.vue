<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <!-- 用router-link作为跳转，则此时v-for不能写在ShopInfo上 -->
    <!-- 给子组件传数据 -->
    <router-link   
      v-for="item in nearbyList" 
      :key="item._id"
      :to="`/shop/${item._id}`" 
    >
      <ShopInfo       
        :item="item"
      />
    </router-link>

  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request';
import ShopInfo from '../../components/ShopInfo'

const useNearbyListEffect = ()=>{
    const nearbyList = ref([]);
    const getnearbyList = async()=>{
          // 每遇到一个await都会先返回,再往下执行,变成了同步操作
          const result = await get('/api/shop/hot-list')
          // result?.data?.errno的意思是尝试获取result中的data中的error属性，它和result.data.errno的意思是一样的，但是比result.data.errno的容错性更高。
          // 代码会尝试查找errno，如果查找不到，会返回undefined，而不会报错
          if(result?.errno===0&&result?.data?.length){
            nearbyList.value = result.data
          }
    }
    return {nearbyList,getnearbyList}
}

export default {
  name: 'NearBy',
  components:{ShopInfo},
  setup() {
    const { nearbyList,getnearbyList } = useNearbyListEffect();
    getnearbyList();
    return { nearbyList };
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  a{
    text-decoration: none;
  }
}
</style>