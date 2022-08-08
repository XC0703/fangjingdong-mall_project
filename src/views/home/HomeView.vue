<template>
  <div class="wrapper">
    <StaticPart />
    <NearBy />
  </div>
  <FooTer :currentIndex="0" />
</template>

<script>
    import StaticPart from './StaticPart';
    import NearBy from './NearBy';
    import FooTer from '../../components/FooTer';
    export default{
        name:'HomeView',
        components:{StaticPart,NearBy,FooTer}
    }
</script>

<style lang="scss" scoped>
.wrapper {
    // 作用是使纵向出现滚动条
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .1rem .18rem;
}
</style>
