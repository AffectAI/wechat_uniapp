<template>
  <view class="page28-wrap" @click="next2">
    <!-- 心湖- 流程图1 -->
    <view class="img1"></view>

    <view class="img2"></view>

    <view class="dialogue">
      <view class="top">旅行伙伴</view>
      <view class="center">
        <view style="width: 114px">
          <u-image width="114px" height="138px" :src="gloAvtorUrl"></u-image>
        </view>
        <view style="flex: 1; margin: 0 5px">
          <typewriter
            text="早上好呀，hyp，昨天晚上休息得好吗？今天，我们将继续前进，胜利就在眼前，终于离【山顶】只差一步之遥啦！趁着时间还早，让我们一起出发，去迎接美丽的日出吧！"
            :speed="60"
          ></typewriter>
        </view>
        <view
          style="
            width: 22px;
            display: flex;
            background-image: url(https://dfs.affectai.cn/affect-material/images/page3/down.png);
            background-size: 70%;
            background-repeat: no-repeat;
            background-position: center bottom;
          "
        >
          <!-- <u-image width="15px" height="15px" style="margin: 0 auto;" src="https://dfs.affectai.cn/affect-material/images/page3/down.png"></u-image> -->
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import typewriter from "@/pages/componentsA/jp-typewriter/index.vue";
export default {
  components: {
    typewriter,
  },
  data() {
    return {};
  },
  props: ["gloAvtorUrl"],
  methods: {
    next2() {
      // uni.navigateTo({
      // 	url: '/pages/componentsA/page29/index'
      // })
      this.$emit("pageEvent", { pageIndex: "29" });
    },
  },
};
</script>

<style lang="scss">
.page28-wrap {
  min-height: 100vh;
  height: 100vh;
  background-image: url(https://dfs.affectai.cn/affect-material/images/page22/img1.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .img1 {
    width: 40%;
    height: 20%;
    margin: 0 auto;
    background-image: url(https://dfs.affectai.cn/affect-material/images/page22/img2.png);
    background-position: center;
    background-size: contain;
  }
  .img2 {
    width: 60%;
    height: 50%;
    margin: 0 auto;
    background-image: url(https://dfs.affectai.cn/affect-material/images/page22/img3.png);
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .dialogue {
    width: 96%;
    margin: auto;
    // padding-bottom: 20px;

    .top {
      width: 110px;
      height: 36px;
      line-height: 36px;
      background-color: #c8f0fa;
      color: #434343;
      font-size: 18px;
      text-align: center;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }
    .center {
      display: flex;
      background-color: #f1f1f4;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      height: auto;
      box-sizing: border-box;
      padding: 11px 21px;
    }
  }
}
</style>
