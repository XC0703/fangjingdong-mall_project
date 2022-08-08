<template>
    <div class="position">
        <span class="iconfont position__icon">&#xe619;</span>
          北京理工大学国防科技园2号楼10层
        <span class="iconfont position__notice">&#xe60b;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe62d;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <div class="banner">
      <img
        class="banner__img"
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      />
    </div>
    <div class="icons">
      <div 
        class="icons__item"
        v-for="item in iconsList"
        :key="item.desc"
      >
      <!-- 引入图片时 -->
        <img 
          class="icons__item__img" 
          :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" 
        />
        <p class="icons__item__desc">{{item.desc}}</p>
      </div>
    </div>
    <div class="gap"></div>
</template>

<script>
    export default{
        name:"StaticPart",
        setup() {
            const iconsList = [
              { imgName: "超市", desc: "超市便利"},
              { imgName: "菜市场", desc: "菜市场"},
              { imgName: "水果店", desc: "水果店"},
              { imgName: "鲜花", desc: "鲜花绿植"},
              { imgName: "医药健康", desc: "医药健康"},
              { imgName: "家居", desc: "家居时尚"},
              { imgName: "蛋糕", desc: "烘培蛋糕"},
              { imgName: "签到", desc: "签到"},
              { imgName: "大牌免运", desc: "大牌免运"},
              { imgName: "红包", desc: "红包套餐"},
            ]
            return { iconsList }
          }
    }
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
// 直接用&优先级会被覆盖，因此用.position__icon，不用&__icon
.position{
  // 文字超出显示省略号
    @include ellipsis;
    position:relative;
    padding:.16rem 0.66rem .16rem 0.18rem;
    font-size:.16rem;
    line-height: .22rem;
    color:$content-fontcolor;
    .position__icon{
        position: relative;
        top:.01rem;
        font-size: .2rem;
    }
    .position__notice{
        position: absolute;
        right:0.26rem;
        top:.17rem;
        font-size: .2rem;
    }
}

.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background: $search-bgColor;
  color: $search-fontColor;
  border-radius: .16rem;
  .iconfont {
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
    font-size: .16rem;
  }
  &__text {
    display: inline-block;
    font-size: .14rem;
  }
}

.banner {
  height: 0;
  overflow: hidden;
  // 这里是为了图片未加载出来时，留有空位，防止下面的内容在一瞬间被图片弹到下面去
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons{
  display: flex;
  margin-top: .16rem;
  // 换行
  flex-wrap: wrap;
  &__item{
    width:20%;
    &__img{
      display: block;
      width: 0.4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc{
      margin:.06rem 0 .16rem 0;
      text-align: center;
      color:$content-fontcolor;
    }
  }
}
.gap{
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgcolor;
}
</style>