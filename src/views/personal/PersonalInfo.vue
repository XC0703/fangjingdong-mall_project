<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__info">
        <div class="header__info__user">{{userInfo.username}}</div>
        <div class="header__info__id">ID:{{userInfo._id}}</div>
        <div class="header__info__list">
          <div class="header__info__list__item">
            <div class="word">红包</div>
            <div class="number">218</div>
          </div>
          <div class="header__info__list__item">
            <div class="word">优惠券</div>
            <div class="number">12张</div>
          </div>
          <div class="header__info__list__item">
            <div class="word">鲜豆</div>
            <div class="number">88</div>
          </div>
          <div class="header__info__list__item">
            <div class="word">白条</div>
            <div class="number">1000</div>
          </div>
        </div>
      </div>
      <img
        class="header__avatar"
        src="http://www.dell-lee.com/imgs/vue3/near.png"
      />
    </div>
    <div class="list">
      <div class="list__item">
        <div class="list__item__icon iconfont icon">&#xe625;</div>
        <div class="list__item__test">我的钱包</div>
        <div class="list__item__arrow iconfont">&#xe6f2;</div>
      </div>
      <div class="list__item" @click="handleAddressClick">
        <div class="list__item__icon iconfont icon">&#xe617;</div>
        <div class="list__item__test">我的地址</div>
        <div class="list__item__arrow iconfont">&#xe6f2;</div>
      </div>
        <div class="list__item">
        <div class="list__item__icon iconfont icon">&#xe741;</div>
        <div class="list__item__test">客服与帮助</div>
        <div class="list__item__arrow iconfont">&#xe6f2;</div>
      </div>
    </div>
    <div class="logout" @click="handleLogout">退出登陆</div>
  </div>
  <FooTer :currentIndex="3"/>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { get } from '../../utils/request'
import FooTer from '../../components/FooTer'

const useUserEffect = () => {
  const userInfo = reactive({ _id: '', username: '' })
   const getUserInfo = async () => {
    const result = await get('/api/user/info')
    if(result?.errno === 0 && result?.data) {
      const { _id, username } = result.data
      userInfo._id = _id || ''
      userInfo.username = username || ''
    }
  }
  getUserInfo()
  return userInfo
}

export default {
  name: 'PersonalInfo',
  components: { FooTer },
  setup() {
    const router = useRouter()
    const handleLogout = () => {
      localStorage.removeItem('isLogin')
      router.replace({ name: 'LoginView'})
    }
    const handleAddressClick = () => {
      router.push({ name: 'AddressList'})
    }
    const userInfo = useUserEffect()
    return { handleLogout, handleAddressClick, userInfo }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: $dark-bgColor;
}
.header {
  position: relative;
  height: 1.5rem;
  background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
  padding-top: .4rem;
  &__info {
    margin: .3rem .18rem 0 .18rem;
    padding-top: .46rem;
    height: 1.2rem;
    background: #FFF;
    border-radius: .08rem;
    &__user {
      font-size: .24rem;
      color: #262628;
      text-align: center;
      line-height: .36rem;
    }
    &__id {
      margin-top: .04rem;
      font-size: .14rem;
      color: #C1C0C9;
      text-align: center;
      margin-bottom: .06rem;
    }
    &__list{
      display: flex;
      border-top: .01rem $content-bgcolor solid;
      padding:.06rem;
      &__item{
        flex:1;
        text-align: center;
        .word{
          font-size: .12rem;
          color:#C1C0C9;
          margin-bottom: .06rem;
        }
        .number{
          font-size: .2rem;
          color:#262628; 
        }
      }
    }
  }
  &__avatar {
    position: absolute;
    left: 50%;
    top: .2rem;
    transform: translateX(-50%);
    width: .94rem;
    height: .94rem;
    border-radius: 50%;
  }
}
.list {
  margin: .63rem .18rem 0 .18rem;
  background: $bgColor;
  box-shadow: 0 .08rem .16rem 0 rgba(0, 0, 0, .08);
  border-radius: .08rem;
  &__item {
    display: flex;
    padding: .2rem;
    line-height: .22rem;
    font-size: .14rem;
    color: #262626;
    &__icon {
      margin-right: .12rem;
      width: .22rem;
      height: .22rem;
      background: #32C5FF;
      border-radius: .08rem;
      text-align: center;
      font-weight: bold;
      color: $bgColor;
    }
    &__test {
      flex: 1;
    }
    &__arrow {
      width: .2rem;
      transform: rotate(180deg);
      font-weight: bold;
      color: #C2C4CA;
    }
  }
  &__item:nth-child(1){
    .icon{
      background: #ED4A47;
    }
  }
  &__item:nth-child(3){
    .icon{
      background: #9013FE;
    }
  }
}
.logout {
  margin: .4rem .7rem;
  line-height: .32rem;
  background: $btn-bgcolor;
  color: $bgColor;
  text-align: center;
  border-radius: .04rem;
}
</style>