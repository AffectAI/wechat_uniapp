<template>
  <view class="page26-wrap">
    <view class="models">
      <view
        style="
          background-color: #ffffff69;
          width: 100%;
          margin: 2px auto 20px auto;
          padding: 7px;
          border-radius: 5px;
        "
      >
        {{ liuyanTxt }}
      </view>

      <view v-if="isHasStr('睡眠不好')">
        <view>请您围绕这些方面，尽可能详细地进行描述：</view>
        <view>1.时间段</view>
        <view>2.是在家里还是在别的地方（酒店等）</view>
        <view>3.您认为睡眠不好的原因</view>
        <view>4.您当时的心情如何</view>
        <view>5.当天有哪些令您记忆深刻的细节影响了您的睡眠</view>
      </view>

      <view v-if="isHasStr('心情不好')">
        <view>请您围绕这些方面，尽可能详细地进行描述：</view>
        <view>1.发生时间</view>
        <view>2.发生地点</view>
        <view>3.与这件不开心事情相关的人</view>
        <view>4.您是如何走出这件不开心的事情</view>
        <view>5.有哪些与之相关的细节令您记忆深刻</view>
      </view>

      <view v-if="isHasStr('吵架')">
        <view>请您围绕这些方面，尽可能详细地进行描述：</view>
        <view>1.发生时间</view>
        <view>2.发生地点</view>
        <view>3.争吵的对象和内容</view>
        <view>4.这次争吵的原因</view>
        <view>5.这次争吵结束后的心情和感受</view>
      </view>

      <view v-if="isHasStr('挫折')">
        <view>请您围绕这些方面，尽可能详细地进行描述：</view>
        <view>1.发生时间</view>
        <view>2.挫折的具体内容</view>
        <view>3.发生挫折后的心情</view>
        <view>4.最终如何克服该挫折的</view>
        <view>5.有哪些令您记忆深刻的细节</view>
      </view>

      <view v-if="isHasStr('误解')">
        <view>请您围绕这些方面，尽可能详细地进行描述：</view>
        <view>1.误解您的人和您的关系</view>
        <view>2.误解的具体内容</view>
        <view>3.发生误解后的心情</view>
        <view>4.最终如何解开误会</view>
        <view>5.有哪些令您记忆深刻的细节</view>
      </view>
    </view>
    <view class="endSound">
      <u-button
        :custom-style="btnstyle"
        @click="endSound"
        :disabled="endSoundDisabled"
        :ripple="true"
        size="medium"
      >
        {{ endSoundSure }}
      </u-button>
    </view>
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
      btnstyle: {
        color: "#fff",
        width: "130px",
        background: "#5ea9f4",
      },
      endSoundSure: "",
      timer: 20, //按钮倒计时
      endSoundDisabled: true,
      proWdith: 0,
      time: null,
      timeCount: 0,
      ctx: null,
      recordTimeInterval: null,
      clickStatus: false,
    };
  },
  props: ["gloAvtorUrl", "liuyanTxt"],
  created() {},
  computed: {},
  beforeDestroy() {
    if (this.time) {
      clearInterval(this.time);
    }
    this.time = null;
    this.ctx && this.ctx.stop();
  },
  mounted() {
    this.startCountdown();
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
      this.initSound();
    },
    isHasStr(keyword) {
      // return this.liuyanTxt.includes(keyword);
      return false;
    },
    next() {
      this.$emit("pageEvent", { pageIndex: "27" });
    },
    initSound() {
      let startTime = this.getCurrentFormattedTime();
      // 开始录音
      this.ctx = uni.getRecorderManager();
      this.ctx.onStop((res) => {
        this.$emit("setRecore", {
          recoreTempPath: res.tempFilePath,
          audioType: "audio",
          start_time: startTime,
          times: "",
          postion: "nohapply_share",
        });
        this.ctx.stop();
      });
      this.soundEvent();
      if (this.proWdith >= 100) {
        this.proWdith = 100;

        this.ctx.stop();
        this.$emit("record_end", "");
        this.$emit("pageEvent", { pageIndex: "27" });

        clearInterval(this.time);
        this.time = null;
      }
      if (!this.time) {
        this.time = setInterval(() => {
          if (this.timeCount >= 60) {
            clearInterval(this.time);
          }
          this.timeCount++;
          this.proWdith += 1.666;
        }, 1000);
      }
    },
    endSound() {
      this.ctx.stop();
      setTimeout(() => {
        this.$emit("record_end", "");
        this.$emit("pageEvent", { pageIndex: "27" });
        clearInterval(this.time);
        this.time = null;
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
    async getCurrentFormattedTime() {
      // 通过公共资源获取服务器时间
      let serverOffset = 0,
        formattedTime = null;
      // 请求公共服务
      await uni.request({
        url: "https://pyrom.affectai.cn", // 可替换为任意项目内绑定地址
        method: "HEAD",
        success: (res) => {
          let serverDate = null;
          const date = new Date(res.header.Date);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const seconds = date.getSeconds();
          serverDate = `${year}/${month.toString().padStart(2, "0")}/${day
            .toString()
            .padStart(2, "0")} ${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
          const serverTime = new Date(serverDate).getTime(); // 服务器返回时间
          const localTime = Date.now(); // 本地时间戳
          serverOffset = serverTime - localTime; // 计算偏移量
          formattedTime = Date.now() + serverOffset;
          return formattedTime;
        },
        fail: (err) => {
          console.error("获取服务器时间失败：", err);
          // 失败情况下获取本地时间
          const now = new Date().getTime();
          // 格式化时间字符串
          formattedTime = now;
          return formattedTime;
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page26-wrap {
  min-height: 100vh;
  background-image: url("https://dfs.affectai.cn/affect-material/images/page20-1024/img35.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .models {
    position: absolute;
    width: 85%;
    height: 240px;
    left: 0;
    right: 0;
    bottom: 21%;
    top: 0;
    margin: auto;
    background-color: rgb(52, 61, 90);
    border-radius: 8px;
    border: 2px solid rgb(99, 79, 87);
    background-position: center;
    background-size: 122%;
    background-repeat: no-repeat;
    color: #fff;
    padding: 15px;
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
