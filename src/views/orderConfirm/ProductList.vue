<template>
    <div class="products">
        <div class="products__title">{{shopName}}</div>
        <div class="products__wrapper">
            <div class="products__list">
                <!-- 在商品数量为0时无需展示，因此需要用到v-if -->
                <!-- 但v-if和v-for不能同时使用，因此需要在外面包裹一个template -->
                <template                   
                    v-for="item in productList"
                    :key="item.id"
                >
                    <div class="products__item" v-if="item.count>0">
                        <img class="products__item__img" :src="item.imgUrl" />
                        <div class="products__item__detail">
                            <h4 class="products__item__title">{{item.name}}</h4>
                            <p class="products__item__price">
                                <span class="products__item__price__single">
                                    <span class="products__item__yen">&yen;</span>
                                    {{item.price}} × {{item.count}}
                                </span>
                                <span class="products__item__price__total">
                                    <span class="products__item__yen">&yen;</span>
                                    {{(item.price*item.count).toFixed(2)}}
                                </span>
                            </p>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { useCommonCartEffect } from '../../effects/cartEffects'
import { useRoute } from 'vue-router';

export default ({
    name:'ProductList',
    setup() {
        const route = useRoute()
        const shopId = route.params.id
        const { shopName,productList } = useCommonCartEffect(shopId)

        return { shopName,productList }
    },
})
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.products{
    margin: .16rem .18rem .1rem .18rem;
    background-color: $bgColor;
    &__wrapper{
        overflow-y: scroll;
        position: absolute;
        left: 0;
        right: 0;
        top:2.6rem;
        bottom: .6rem;
        margin:0 .18rem;
    }
    &__list{
        background-color: $bgColor;
    }
    &__title{
        line-height: .22rem;
        padding:.16rem;
        color:#333;
        font-size: .16rem;
    }
    &__item {
        position: relative;
        display: flex;
        padding: .16rem .16rem .16rem;
        &__img {
            width: .46rem;
            height: .46rem;
            margin-right: .16rem;
        }
        &__detail {
            overflow: hidden;
            flex:1;
        }
        &__title {
            margin: 0;
            line-height: .2rem;
            font-size: .14rem;
            color: $content-fontcolor;
            @include ellipsis;
        }
        &__price {
            display: flex;
            margin: .06rem 0 0 0;
            line-height: .2rem;
            font-size: .14rem;
            color: $hightlight-fontColor;
            &__total{
                flex:1;
                text-align: right;
                color:$dark-fontColor;
            }
        }
        &__yen {
            font-size: .12rem;
        }
    }
}
</style>