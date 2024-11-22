<template>
  <view class="page51-wrap">
    <!-- 心湖倒影 -->
    <face-bio-assay
      @pageEvent="pageEvent"
      :isDev="false"
      ref="faceDetect"
      @detectFailed="detectFailed"
      @photoChange="photoChange"
    >
    </face-bio-assay>
  </view>
</template>

<script>
import faceBioAssay from "@/uni_modules/face-bio-assay/components/face-bio-assay/face-bio-assay.vue";
export default {
  name: "index",
  components: {
    faceBioAssay,
  },
  props: ["gloAvtorUrl"],
  data() {
    return {
      cameraShow: false,
      tipsText: "", // 错误文案提示
      tempImg: "", // 本地图片路径
      BASE_API: "",
      cameraEngine: null, // 相机引擎
      devicePosition: false, // 摄像头朝向
      isAuthCamera: true, // 是否拥有相机权限
      // ======
      face: null,
    };
  },
  beforeDestroy() {
    console.log("onpagehide-beforeDestroy");
    this.$refs.faceDetect && this.$refs.faceDetect.close();
  },
  onLoad(options) {},
  mounted() {
    this.$refs.faceDetect.initData();
  },
  methods: {
    pageEvent(statu) {
      if (statu == true) {
        this.$refs.faceDetect && this.$refs.faceDetect.close();
        this.$emit("pageEvent", { pageIndex: 6 });
      }
    },
    detectFailed() {
      uni.showToast({
        title: "人脸核验失败~",
        icon: "none",
      });
      // uni.navigateBack()
    },

    photoChange(path) {
      uni.navigateBack();
      this.getOpenerEventChannel().emit("data", path);
    },
    chooseVideo() {
      this.cameraShow = true;
      this.$refs.faceDetect && this.$refs.faceDetect.initData();
      // setTimeout(() => {
      // 	uni.navigateTo({
      // 		url: '/pages/componentsA/page6/index'
      // 	})
      // }, 500)
    },
  },
};
</script>

<style lang="scss">
.page51-wrap {
  min-height: 100vh;
  background-image: url('https://datastream.affectai.cn/callmaterial/images/page5/bg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .start {
    position: absolute;
    width: 100px;
    height: 43px;
    left: 0;
    right: 0;
    top: 701px;
    bottom: 150px;
    margin: auto;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    line-height: 40px;
    z-index: 500;
    background-color: #6fcbeb;
    border-radius: 5px;
  }
  .tips {
    width: 289px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .dialogue {
    width: 96%;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
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
      height: 158px;
      box-sizing: border-box;
      padding: 11px 21px;
    }
  }
}
</style>
