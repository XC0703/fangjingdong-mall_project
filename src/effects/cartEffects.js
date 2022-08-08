import { computed } from 'vue'
import { useStore } from 'vuex'
// 购物车相关逻辑
export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList;
  // 执行购物函数
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      shopId, productId, productInfo, num
    })
  }
  
  // 购物车数据不希望有数量为空的商品
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || {}
    const notEmptyProductList = {}
    for(let i in productList) {
      const product = productList[i]
      if(product.count > 0 ) {
        notEmptyProductList[i] = product
      }
    }
    return notEmptyProductList
  })
  // 获取商铺名称
  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || ''
    return shopName
  })
// 获取购物车商品总数量及总价
  const calculations = computed(() => {
    const productList = cartList[shopId]?.productList
    const result = { total: 0, price: 0, allChecked: true}
    if(productList) {
       for(let i in productList) {
         const product = productList[i]
         result.total += product.count
         if(product.check) {
           result.price += (product.count * product.price)
         }
         if(product.count > 0 && !product.check) {
           result.allChecked = false
         }
      }
    }
    result.price = result.price.toFixed(2)
    return result
  })

  return { cartList, shopName, productList, calculations, changeCartItemInfo }
}