<template>
  <view class="page31-wrap">
    <!-- 心湖- 流程图1 -->
    <view class="imgs img1"></view>
    <view class="imgs img2"></view>
    <view class="imgs img3"></view>
    <view class="imgs img5"></view>
    <view class="imgs img4"></view>

    <view class="dialogue">
      <view class="top">旅行伙伴</view>
      <view
        style="text-align: center; color: #fff; font-size: 20px"
        v-if="clickStatus == true"
        >{{ recordTime }}</view
      >
      <view
        @click="next"
        v-if="index > 1"
        class="liuyan"
        :class="[index || clickStatus == true ? 'liuyancorlo' : '']"
        >开始分享</view
      >
      <view class="center">
        <view style="width: 114px">
          <u-image width="114px" height="138px" :src="gloAvtorUrl"></u-image>
        </view>
        <view style="flex: 1; margin: 0 15px">
          <view @click="nextDia">
            <typewriter
              v-if="index == 1"
              text="特殊的音调已经唤起了心灵之山的回应。在这座山顶上，许多过往的旅人都在此留下了他们愉快的时刻和珍贵的回忆。您也可以畅快地与我分享令您感到愉快的事情！"
              :speed="60"
            ></typewriter>
          </view>

          <view>
            <typewriter
              v-if="index == 2"
              text="比如，您可以和我分享，最近和好朋友一起做了什么有趣的事情？"
              :speed="60"
            ></typewriter>
          </view>

          <view @click="next">
            <typewriter
              v-if="index == 3"
              text="比如，您可以和我分享，上次旅行时见到的美丽风景或有趣的事情是什么？"
              :speed="60"
            ></typewriter>
          </view>

          <view @click="next">
            <typewriter
              v-if="index == 4"
              text="比如，您可以和我分享，您最喜欢的电影是哪一部？什么情节打动了您？"
              :speed="60"
            ></typewriter>
          </view>

          <view @click="next">
            <typewriter
              v-if="index == 5"
              text="比如，您可以和我分享，您最喜欢的美食是什么？"
              :speed="60"
            ></typewriter>
          </view>

          <view @click="next">
            <typewriter
              v-if="index == 6"
              text="比如，您可以和我分享，您近期收到令您眼前一亮的礼物是什么？"
              :speed="60"
            ></typewriter>
          </view>
        </view>
        <view
          style="
            width: 22px;
            display: flex;
            align-items: flex-end;
            background-image: url(https://dfs.affectai.cn/affect-material/images/page3/down.png);
            background-size: 70%;
            background-repeat: no-repeat;
            background-position: center bottom;
          "
        >
          <u-image
            width="80px"
            height="25px"
            @click="nextAsk"
            style="
              width: 80px;
              height: 25px;
              border-radius: 5px;
              position: absolute;
              bottom: 5px;
              right: 5px;
            "
            src="https://dfs.affectai.cn/affect-material/images/page20-1024/img28.png"
          >
          </u-image>
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
    return {
      index: 1,
      ctx: null,
      recordTime: 30,
      clickStatus: false,
      recordTimeInterval: null,
      innerAudioContext: null,
      innerAudioContext2: null,
      innerAudioContext3: null,
      innerAudioContext4: null,
    };
  },
  beforeDestroy() {
    clearInterval(this.recordTimeInterval);
    this.recordTimeInterval = null;
    this.innerAudioContext.destroy();
  },
  mounted() {
    this.innerAudioContext = uni.createInnerAudioContext({
      useWebAudioImplement: false,
      obeyMuteSwitch: false,
      loop: true,
    });
  },
  props: ["gloAvtorUrl"],
  methods: {
    nextDia() {
      this.index += 1;
    },
    nextAsk() {
      if (this.index >= 6) this.index = 2;
      this.index += 1;
      switch (this.index) {
        case 2:
          this.innerAudioContext.src =
            "https://dfs.affectai.cn/affect-material/images/audio/share_questions/a6.mp3";
          this.innerAudioContext.play();
          break;
        case 3:
          this.innerAudioContext.src =
            "https://dfs.affectai.cn/affect-material/images/audio/share_questions/a7.mp3";
          this.innerAudioContext.play();
          break;
        case 4:
          this.innerAudioContext.src =
            "https://dfs.affectai.cn/affect-material/images/audio/share_questions/a8.mp3";
          this.innerAudioContext.play();
          break;
        case 5:
          this.innerAudioContext.src =
            "https://dfs.affectai.cn/affect-material/images/audio/share_questions/a9.mp3";
          this.innerAudioContext.play();
          break;
        case 6:
          this.innerAudioContext.src =
            "https://dfs.affectai.cn/affect-material/images/audio/share_questions/a10.mp3";
          this.innerAudioContext.play();
          break;

        default:
          break;
      }
    },
    next() {
      let text = "";
      switch (this.index) {
        case 2:
          text = "最近和好朋友一起做了什么有趣的事情？";
          break;
        case 3:
          text = "上次旅行时见到的美丽风景或有趣的事情是什么？";
          break;
        case 4:
          text = "您最喜欢的电影是哪一部？什么情节打动了您？";
          break;
        case 5:
          text = "您最喜欢的美食是什么？";
          break;
        case 6:
          text = "您近期收到令您眼前一亮的礼物是什么？";
          break;
        default:
          break;
      }
      this.$emit("pageEvent", { pageIndex: "32", text });
    },
  },
};
</script>

<style lang="scss" scoped>
.page31-wrap {
  min-height: 100vh;
  background-image: url("https://dfs.affectai.cn/affect-material/images/page22/img4.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .imgs {
    background-position: initial;
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
  }
  .img1 {
    width: 180px;
    height: 85px;
    background-image: url("https://dfs.affectai.cn/affect-material/images/page25/page25/img1.png");
    position: absolute;
    top: 20px;
    left: 10px;
  }
  .img2 {
    width: 180px;
    height: 85px;
    background-image: url("https://dfs.affectai.cn/affect-material/images/page25/page25/img2.png");
    position: absolute;
    top: 20px;
    right: 10px;
  }
  .img3 {
    width: 180px;
    height: 85px;
    top: 250px;
    left: 10px;
    background-image: url("https://dfs.affectai.cn/affect-material/images/page25/page25/img3.png");
  }
  .img4 {
    width: 180px;
    height: 125px;
    margin: 0 10px;
    top: 227px;
    right: 0;
    background-image: url("https://dfs.affectai.cn/affect-material/images/page25/page25/img4.png");
  }
  .img5 {
    width: 180px;
    height: 85px;
    top: 133px;
    left: 83px;
    background-image: url("https://dfs.affectai.cn/affect-material/images/page25/page25/img5.png");
  }

  .dialogue {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    width: 96%;
    margin: auto;
    // padding-bottom: 20px;

    .liuyan {
      width: 110px;
      height: 45px;
      line-height: 45px;
      background-color: #f1f1f4;
      border-radius: 5px;
      text-align: center;
      margin: 0 auto;
    }
    .liuyancorlo {
      background-color: #e5b74f;
      color: #434343;
    }

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
      // height: 202px;
      height: auto;
      box-sizing: border-box;
      padding: 11px 8px;
    }
  }
}
</style>
