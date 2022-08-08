<template>
<div class="wrapper">
    <TopArea />
    <ProductList />
    <OrderFooter />
</div>
</template>

<script>
import TopArea from './TopArea';
import ProductList from './ProductList';
import OrderFooter from './OrderFooter';

export default ({
    name:'OrderConfirmation',
    components:{ TopArea,ProductList,OrderFooter },
    setup() {
    },
})
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper{
    background-color: #eee;
    position: absolute;
    left:0;
    right: 0;
    bottom: 0;
    top:0;
    overflow-y: scroll;
}
</style>