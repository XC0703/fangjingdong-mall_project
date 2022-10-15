<template>
    <div class="order">
        <div class="order__price">实付金额￥<b>{{calculations.price}}</b></div>
        <div 
            class="order__btn"
            @click="() => handleShowConfirmChange(true)"
        >提交订单</div>
    </div>
    <div
        class="mask"
        v-show="showConfirm"
        @click="() => handleShowConfirmChange(false)"
    >
    <!-- mask__content点击事件无效 -->
        <div class="mask__content" @click.stop>
            <h3 class="mask__content__title">确认要离开收银台？</h3>
            <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
            <div class="mask__content__btns">
                <div
                    class="mask__content__btn mask__content__btn--first"
                    @click="() => handleConfirmOrder(true)"
                    >取消订单</div>
                <div
                    class="mask__content__btn mask__content__btn--last"
                    @click="() => handleHavaPayed(true,handleShowConfirmChange,handleConfirmOrder)"
                >确认支付</div>
        </div>
        </div>
    </div>
    <div
        class="mask"
        v-show="showHavaPayed"
    >
    <!-- mask__content点击事件无效 -->
        <div class="mask__content" @click.stop>
          <div 
            class="mask__content__cancelIcon iconfont"
            @click="() => handleHavaPayed(false,handleShowConfirmChange,handleConfirmOrder)"
          >&#xe628;</div>
          <div class="mask__content__succeedIcon iconfont">&#xe609;</div>
          <h3 class="mask__content__word">支付成功，等待配送</h3>
        </div>
    </div>
</template>

<script>
import { useCommonCartEffect } from '../../effects/cartEffects'
import { useRoute,useRouter } from 'vue-router';
import {post} from '../../utils/request';
import { useStore } from 'vuex';
import { ref } from 'vue';


// 蒙层展示相关的逻辑
const useShowMaskEffect = () => {
  const showConfirm = ref(false)
  const handleShowConfirmChange = (status) => {
    showConfirm.value = status
  }
  return { showConfirm, handleShowConfirmChange }
}
const useShowHavePayedEffect = () => {
  const showHavaPayed = ref(false)
  const handleHavaPayed = (status,handleShowConfirmChange,handleConfirmOrder) => {
    showHavaPayed.value = status
    if(status==true){
      handleShowConfirmChange(false)
      setTimeout(()=>{
        handleConfirmOrder(false)
      }
    , 3000)
    }else{
      handleConfirmOrder(false)
    }
  }
  return { showHavaPayed, handleHavaPayed }
}
// 确认订单按钮的响应逻辑
const useMakeOrderEffect = (productList,shopId,shopName)=>{
    const router = useRouter()
    const store = useStore()

    const handleConfirmOrder = async(isCanceled)=>{
        // 将从store获取到的数据转化为接口需要的格式
        // 因为是对象，只能循环赋值
        const products = [];
        for(let i in productList.value){
            const product = productList.value[i]
            products.push({
                id:parseInt(product._id,10),
                num:product.count
            })
        }       
        // 可以使用try/catch监听Promise 返回状态，try为成功，catch失败
        try{
            // 每遇到一个await都会先返回,再往下执行,变成了同步操作
            // 传入参数发送请求
            const result = await post('/api/order',{
                addressId:1,
                shopId,
                shopName:shopName.value,
                isCanceled,
                products,
            })
            // result?.data?.errno的意思是尝试获取result中的data中的error属性，它和result.data.errno的意思是一样的，但是比result.data.errno的容错性更高。
            // 代码会尝试查找errno，如果查找不到，会返回undefined，而不会报错
            if(result?.errno===0){
                store.commit('cleanCartProducts', { shopId })
                router.push({name:'OrderList'})
            }
            }catch(e){
                // 提示下单失败
                alert('下单失败')
            }
    }
    return {handleConfirmOrder}
}
export default ({
    name:'OrderFooter',
    setup() {
        const route = useRoute()

        // 转成数字
        const shopId = parseInt(route.params.id,10)
        const { calculations,shopName,productList } = useCommonCartEffect(shopId)
        // 蒙层弹出确认窗口
        const { showConfirm, handleShowConfirmChange } = useShowMaskEffect(); 
        const { showHavaPayed, handleHavaPayed } = useShowHavePayedEffect();

        // 下单
        const { handleConfirmOrder } = useMakeOrderEffect(productList,shopId,shopName)

        return { 
            calculations,shopName,productList,
            showConfirm, handleShowConfirmChange,
            showHavaPayed, handleHavaPayed,
            handleConfirmOrder }
    },
})
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.order{
    display: flex;
    height: .49rem;
    line-height: .49rem;
    background-color: $bgColor;
    position: absolute;
    bottom:0;
    left:0;
    right: 0;
    &__price{
        flex:1;
        text-indent: .24rem;
        font-size: .14rem;
        color:$content-fontcolor;
    }
    &__btn{
        width: .98rem;
        background: #4FB0F9;
        color:#fff;
        text-align: center;
        font-size: .14rem;
    }
}
.mask {
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 1.56rem;
    background: $bgColor;
    text-align: center;
    border-radius: .04rem;
    &__title {
      margin: .24rem 0 0 0;
      line-height: .26rem;
      font-size: .18rem;
      color: $content-fontcolor;
    }
    &__desc {
      margin: .08rem 0 0 0;
      font-size: .14rem;
      color: $medium-fontColor;
    }
    &__btns {
      display: flex;
      margin: .24rem .58rem;
    }
    &__btn {
      flex: 1;
      width: .8rem;
      line-height: .32rem;
      border-radius: .16rem;
      font-size: .14rem;
      &--first {
        margin-right: .12rem;
        border: .01rem solid $btn-bgcolor;
        color: $btn-bgcolor;
      }
      &--last {
        margin-left: .12rem;
        background: $btn-bgcolor;
        color: #fff;
      }
    }
    &__cancelIcon{
      height: .24rem;
      width: .24rem;
      position: absolute;
      top:.05rem;
      right:.07rem;
      font-size: .24rem;
      color:$medium-fontColor; 
    }
    &__succeedIcon{
      height: .33rem;
      width: .44rem;
      text-align: center;
      position: absolute;
      transform: translate(-50%);
      left:50%;
      top:.25rem;
      font-size: .64rem;
      color:$medium-fontColor;    
    }
    &__word{
      height: .25rem;
      width: 1.62rem;
      text-align: center;
      position: absolute;
      transform: translate(-50%);
      left:50%;
      bottom:.1rem;
      font-size: .18rem;
      color:$content-fontcolor;     
    }
  }
}
</style>