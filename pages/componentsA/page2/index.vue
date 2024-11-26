<template>
  <view class="page122-wrap" @click="next">
    <!--  传闻，心灵之山的山顶有一份宝藏-->
    <view class="content">
      <view
        style="
          font-size: 18px;
          color: #fff;
          text-align: center;
          margin-bottom: 30px;
        "
      >
        <typewriter
          text="传闻，心灵之山的山顶有一份宝藏"
          :speed="60"
          @finished="finished1"
        ></typewriter>
      </view>
      <view
        style="
          font-size: 18px;
          color: #fff;
          text-align: center;
          margin-bottom: 30px;
        "
      >
        <typewriter
          v-if="seta"
          text="但只有顺利通过重重考验"
          :speed="60"
          @finished="finished2"
        ></typewriter>
      </view>
      <view
        style="
          font-size: 18px;
          color: #fff;
          text-align: center;
          margin-bottom: 30px;
        "
      >
        <typewriter
          v-if="setb"
          text="才能深入探索自己内心中最真实的状态"
          :speed="60"
          @finished="finished3"
        ></typewriter>
      </view>
      <view style="font-size: 18px; color: #fff; text-align: center">
        <typewriter
          v-if="setc"
          text="攀登心灵之山，寻觅宝藏吧！"
          :speed="60"
          @finished="finished4"
        ></typewriter>
      </view>
    </view>
  </view>
</template>

<script>
import typewriter from "@/pages/componentsA/jp-typewriter/index.vue";

export default {
  components: { typewriter },
  data() {
    return {
      seta: false,
      setb: false,
      setc: false,
      isNext: false,
      innerAudioContext: null,
      innerAudioContextMouse: null,
    };
  },
  beforeDestroy() {
    // this.innerAudioContext && this.innerAudioContext.destroy();
  },
  mounted() {
    // todo 背景音频
  },
  methods: {
    stopAudio() {
      this.innerAudioContext && this.innerAudioContext.destroy();
    },
    stopAudioMouse() {
      this.innerAudioContextMouse && this.innerAudioContextMouse.destroy();
    },
    next() {
      if (this.isNext) {
        this.$emit("pageEvent", { pageIndex: 3 });
      }
    },
    finished1() {
      this.seta = true;
    },
    finished2() {
      this.setb = true;
    },
    finished3() {
      this.setc = true;
    },
    finished4() {
      this.setd = true;
      this.isNext = true;
    },
  },
};
</script>

<style lang="scss">
.page122-wrap {
  min-height: 100vh;
  background-image: url("https://dfs.affectai.cn/affect-material/images/page2/bg-2.png");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;

  .content {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 310px;
    height: 230px;
    text-align: center;
  }
}
</style>
