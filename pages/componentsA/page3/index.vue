<template>
  <view class="page31-wrap" @click="next">
    <!-- 心湖- 流程图1 -->
    <view class="img13"></view>
    <view class="img23"></view>
    <view class="dialogue">
      <view class="top">旅行伙伴</view>
      <view class="center" style="height: auto">
        <view style="width: 114px">
          <u-image width="114px" height="125px" :src="gloAvtorUrl"></u-image>
        </view>
        <view style="flex: 1; margin: 0 5px">
          尊敬的用户，欢迎来到“心灵之山”。我是您的旅程伙伴，将陪伴您开启一段探索内心世界的旅程。此行将充满各种挑战与惊喜，让我们共同踏上这段旅途。
        </view>
        <view
          style="
            width: 22px;
            display: flex;
            background-image: url('https://dfs.affectai.cn/affect-material/images/page3/down.png');
            background-size: 70%;
            background-repeat: no-repeat;
            background-position: center bottom;
          "
        >
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      innerAudioContext: null,
    };
  },
  props: ["gloAvtorUrl"],
  beforeDestroy() {},
  mounted() {},
  methods: {
    next() {
      this.$emit("pageEvent", { pageIndex: 4 });
    },
  },
};
</script>

<style lang="scss">
.page31-wrap {
  min-height: 100vh;
  height: 100vh;
  background-image: url("https://dfs.affectai.cn/affect-material/images/page3/bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .img13 {
    width: 40%;
    height: 24vh;
    margin: 0 auto;
    background-image: url("https://dfs.affectai.cn/affect-material/images/page3/map.png");
    background-position: center;
    background-size: contain;
  }
  .img23 {
    width: 60%;
    height: 50vh;
    margin: 0 auto;
    background-image: url("https://dfs.affectai.cn/affect-material/images/page3/setp.png");
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .dialogue {
    width: 96%;
    margin: 0 auto;
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
      height: 158px;
      box-sizing: border-box;
      padding: 11px 21px;
    }
  }
}
</style>
