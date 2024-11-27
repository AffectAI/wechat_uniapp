<template>
  <view class="page32-wrap">
    <view class="models32">
      <view
        style="
          background-color: #f3dc98;
          width: 100%;
          margin: 2px auto 20px auto;
          padding: 7px;
          border-radius: 5px;
        "
      >
        {{ liuyanTxt }}
      </view>

      <view v-if="isHasStr('好朋友')">
        <view>您可以围绕这些方面，详细描述这段愉快的经历：</view>
        <view>1.时间段、地点</view>
        <view>2.好朋友和您之前是怎么认识的</view>
        <view>3.和好朋友一起做了哪些事、聊了些什么</view>
        <view>4.当时您的心情如何</view>
        <view>5.有哪些令您记忆深刻的细节</view>
      </view>

      <view v-if="isHasStr('风景')">
        <view>您可以围绕这些方面，详细描述这段愉快的经历：</view>
        <view>1.旅行时间段、旅行目的地</view>
        <view>2.和谁一起结伴出游</view>
        <view>3.旅行中经历了哪些有趣的事，或遇到了哪些特别的人</view>
        <view>4.旅行时，您的心情如何</view>
        <view>5.有哪些令您记忆深刻的旅游细节</view>
      </view>

      <view v-if="isHasStr('电影')">
        <view>您可以围绕这些方面，详细描述这段愉快的经历：</view>
        <view>1.这道美食有什么特色</view>
        <view>2.电影的剧情梗概</view>
        <view>3.您第一次看这部电影时的感受如何</view>
        <view>4.您喜欢这部电影的原因是什么</view>
        <view>5.有哪些令您记忆深刻的影片细节</view>
      </view>

      <view v-if="isHasStr('美食')">
        <view>您可以围绕这些方面，详细描述这段愉快的经历：</view>
        <view>1.这道美食有什么特色</view>
        <view>2.这道美食的色、香、味是怎样的</view>
        <view>3.您喜欢这道美食的原因</view>
        <view>4.您上一次和谁一起享用这道美食</view>
        <view>5.您享用这道美食的频率如何</view>
      </view>

      <view v-if="isHasStr('礼物')">
        <view>您可以围绕这些方面，详细描述这段愉快的经历：</view>
        <view>1.这个礼物是什么</view>
        <view>2.礼物拥有怎样的外形</view>
        <view>3.这个礼物由哪位送出</view>
        <view>4.您接受礼物时的场景是怎样的</view>
        <view>5.您当时收到礼物时有何感受</view>
      </view>
    </view>
    <view class="endSound">
      <u-button
        :custom-style="{
          color: '#fff',
          width: '130px',
          background: '#5ea9f4',
        }"
        @click="endSound"
        :disabled="endSoundDisabled"
        :ripple="true"
        size="medium"
      >
        {{ endSoundSure }}
      </u-button>
    </view>
    <!-- <view
      v-if="timeCount >= 20"
      @click="endSound"
      style="
        width: 80px;
        text-align: center;
        line-height: 45px;
        line-height: 45px;
        font-size: 17px;
        border-radius: 5px;
        background-color: #58a5f3;
        position: absolute;
        right: 0;
        left: 0;
        margin: auto;
        bottom: 25%;
      "
    >
      完成
    </view> -->

    <view class="processWrap">
      <view class="timeIcon">
        <u-image
          width="25px"
          height="25px"
          style="width: 25px; height: 25px"
          src="https://dfs.affectai.cn/affect-material/images/page21/clock.png"
        ></u-image>
      </view>
      <view class="process">
        <view class="processing" :style="{ width: proWdith + '%' }"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      endSoundSure: "",
      timer: 20, //按钮倒计时
      endSoundDisabled: true,
      proWdith: 0,
      time: null,
      timeCount: 0,
      clickStatus: false,
      ctx: null,
    };
  },
  created() {},
  beforeDestroy() {
    if (this.time) {
      clearInterval(this.time);
    }
    this.timeCount = 0;
    this.time = null;
  },
  props: ["gloAvtorUrl", "liuyanTxt"],
  mounted() {
    this.startCountdown();
    this.ctx = uni.getRecorderManager();
    this.ctx.onStop((res) => {
      this.$emit("setRecore", {
        recoreTempPath: res.tempFilePath,
        audioType: "happly_share",
      });

      this.ctx.stop();
      this.$emit("record_end", "");
      this.$emit("pageEvent", { pageIndex: "33" });
      // console.log('recorder stop tempFilePath' + JSON.stringify(res.tempFilePath));
      // this.uploadRecording(res.tempFilePath);
    });

    this.soundEvent();
    if (this.proWdith >= 100) {
      this.proWdith = 100;

      this.ctx.stop();
      this.$emit("record_end", "");
      this.$emit("pageEvent", { pageIndex: "33" });

      clearInterval(this.time);
      this.time = null;
    }
    const speed = 1000;
    if (!this.time) {
      this.time = setInterval(() => {
        if (this.timeCount >= 60) {
          clearInterval(this.time);
        }
        this.timeCount++;
        this.proWdith += 1.666;
      }, speed);
    }
  },
  methods: {
    startCountdown() {
      this.endSoundSure = `完成(${this.timer})`;
      const countdown = setInterval(() => {
        this.timer--;
        this.endSoundSure = `完成(${this.timer})`;
        if (this.timer <= 0) {
          this.endSoundSure = "完成";
          clearInterval(countdown);
          this.endSoundDisabled = false;
        }
      }, 1000);
    },
    isHasStr(keyword) {
      return this.liuyanTxt.includes(keyword);
    },
    next() {
      this.$emit("pageEvent", { pageIndex: "33" });
    },
    endSound() {
      this.ctx.stop();
      setTimeout(() => {
        this.$emit("record_end", "");
        this.$emit("pageEvent", { pageIndex: "33" });
        clearInterval(this.time);
        this.time = null;
        this.next();
      }, 300);
    },
    soundEvent() {
      this.$emit("record_start", "");
      const options = {
        duration: 1 * 30 * 1000, // 30s
        sampleRate: 44100,
        encodeBitRate: 64000,
        format: "wav",
      };
      this.ctx.start(options);
    },
  },
};
</script>

<style lang="scss" scoped>
.page32-wrap {
  min-height: 100vh;
  // background-image: url('https://dfs.affectai.cn/affect-material/images/page20-1024/flight/img25.png');
  background-image: url("https://dfs.affectai.cn/affect-material/images/page20-1024/img31.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .models32 {
    position: absolute;
    width: 85%;
    height: 290px;
    left: 0;
    right: 0;
    bottom: 21%;
    top: 0;
    margin: auto;
    background-color: #ecef3891;
    border-radius: 10px;
    // border: 2px solid rgb(99,79,87);
    // background-image: url('https://dfs.affectai.cn/affect-material/images/page21/img2.jpg');
    background-position: center;
    background-size: 122%;
    background-repeat: no-repeat;
    color: #000;
    padding: 30px;
    // filter: blur(5px);
  }
  .endSound {
    position: absolute;
    width: 100%;
    bottom: 30%;
    text-align: center;
  }
  .processWrap {
    width: 95%;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 25px;
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 7px;

    .timeIcon {
      width: 25px;
      margin-right: 5px;
    }

    .process {
      flex: 1;
      display: flex;
      background-color: #fff;
      border-radius: 25px;
      height: 26px;
      box-sizing: border-box;
      padding: 4px;

      .processing {
        // width: 100%;
        background-color: #5ea9f4;
        border-radius: 25px;
      }
    }
  }
}
</style>
