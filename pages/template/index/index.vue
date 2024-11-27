<template>
  <view class="index-wrap32">
    <!--  {{pageIndex}} -->
    <!-- 金币 -->
    <view
      class="top13"
      v-if="
        pageIndex == '13' ||
        pageIndex == '18' ||
        pageIndex == '20' ||
        pageIndex == '22' ||
        pageIndex == 'page13_upgrade'
      "
    >
      <view class="m-a">{{ goldCoin }}</view>
      <!-- <view class="m-b">{{ playNum }}</view> -->
    </view>

    <page1
      @pageEvent="pageEvent"
      @gloAvtor="gloAvtor"
      v-if="pageIndex == '1'"
    ></page1>
    <page2 @pageEvent="pageEvent" v-if="pageIndex == '2'" />
    <page3
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '3'"
    ></page3>
    <page4
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '4'"
    />
    <page5
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '5'"
    />
    <page6
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '6'"
    />
    <page7
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      @setData="setData"
      v-if="pageIndex == '7'"
    />
    <page8
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '8'"
    />
    <page9
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '9'"
    />
    <page10
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '10'"
    ></page10>
    <page11
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '11'"
    ></page11>
    <page12
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '12'"
    ></page12>
    <page13
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      @setGoldCoin="setGoldCoin"
      @setJourney="setJourney"
      @setJourney2="setJourney2"
      @birdRm_start="birdRm_start"
      @birdRm_end="birdRm_end"
      v-if="pageIndex == '13'"
    ></page13>
    <page13_next_desc
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == 'page13_next_desc'"
    ></page13_next_desc>
    <page13_next_loading
      @pageEvent="pageEvent"
      @setGoldCoin="setGoldCoin"
      v-if="pageIndex == 'page13_next_loading'"
    />
    <page13_upgrade
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      @setJourney2="setJourney2"
      @setGoldCoin="setGoldCoin"
      @birdRm_start="birdRm_start2"
      @birdRm_end="birdRm_end2"
      v-if="pageIndex == 'page13_upgrade'"
    />
    <!-- <page14 @pageEvent="pageEvent" v-if="pageIndex == 14" /> -->
    <page15
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '15'"
    />
    <page16
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '16'"
    />
    <page17
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '17'"
    />
    <page18
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      @setRoute="setRoute"
      v-if="pageIndex == '18'"
    />
    <page19
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '19'"
    />
    <page20
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      @setHotel="setHotel"
      v-if="pageIndex == '20'"
    />
    <page21
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      :Page21Params="Page21Params"
      v-if="pageIndex == '21'"
    />
    <page22
      @pageEvent="pageEvent"
      @setAddFood="setAddFood"
      @setReceFood="setReceFood"
      @setFood="setFood"
      v-if="pageIndex == '22'"
    />
    <page23
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '23'"
    />
    <page24
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '24'"
    />
    <page24_1
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == 'page24_1'"
    />
    <page24_2 @pageEvent="pageEvent" v-if="pageIndex == 'page24_2'" />
    <page25
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '25'"
    />
    <page26
      ref="page26"
      @setRecore="setRecore"
      @record_start="record_start"
      @record_end="record_end"
      @pageEvent="pageEvent"
      :liuyanTxt="liuyanTxt"
      v-if="pageIndex == '26'"
    />
    <page27
      ref="page27"
      @pageEvent="pageEvent"
      :isSuccess="isSuccess"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '27'"
    />
    <page28
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '28'"
    />
    <page29
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '29'"
    />
    <page30
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      @tree_start="tree_start"
      @tree_end="tree_end"
      @setBirdRecore="setBirdRecore"
      v-if="pageIndex == '30'"
    />
    <page31
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '31'"
    />
    <page32
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      @setRecore="setFxRecore"
      @record_start="fx_start"
      @record_end="fx_end"
      :liuyanTxt="liuyanTxt"
      v-if="pageIndex == '32'"
    ></page32>
    <page33
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '33'"
    ></page33>
    <page34
      @pageEvent="pageEvent"
      :gloAvtorUrl="gloAvtorUrl"
      v-if="pageIndex == '34'"
    ></page34>
    <page35
      @pageEvent="pageEvent"
      :person_info="person_info"
      :scale_type_record="scale_type_record"
      v-if="pageIndex == '35'"
    ></page35>

    <u-toast ref="uToast" />
    <face-bio-assay-glo
      ref="face_glo"
      v-if="
        (pageIndex != 35 && pageIndex >= 7) ||
        pageIndex == 'page24_2' ||
        pageIndex == 'page24_1' ||
        pageIndex == 'page13_upgrade' ||
        pageIndex == 'pageIndex' ||
        pageIndex == 'page13_next_loading' ||
        pageIndex == 'page13_next_desc'
      "
      :isDev="false"
      @uploadVideo="uploadVideo"
      @setFaceStatus="setFaceStatus"
      @detectFailed="detectFailed"
    >
    </face-bio-assay-glo>
    <view
      class="tips"
      :class="[isSuccess ? '' : 'errorTips']"
      v-if="
        (pageIndex >= 7 && tipsText && !isSuccess && pageIndex != 35) ||
        pageIndex == 'page24_2' ||
        pageIndex == 'page24_1' ||
        pageIndex == 'page13_upgrade' ||
        pageIndex == 'pageIndex' ||
        pageIndex == 'page13_next_loading' ||
        pageIndex == 'page13_next_desc'
      "
    >
      <!-- <u-image src="https://dfs.affectai.cn/affect-material/images/page5/icon1.png" width="12px" height="11px" style="margin-right: 4px;"></u-image> -->
      {{ tipsText }}
    </view>
  </view>
</template>

<script>
import page1 from "@/pages/componentsA/page1/index.vue";
import page2 from "@/pages/componentsA/page2/index.vue";
import page3 from "@/pages/componentsA/page3/index.vue";
import page4 from "@/pages/componentsA/page4/index.vue";
import page5 from "@/pages/componentsA/page5/index.vue";
import page6 from "@/pages/componentsA/page6/index.vue";
import page7 from "@/pages/componentsA/page7/index.vue";
import page8 from "@/pages/componentsA/page8/index.vue";
import page9 from "@/pages/componentsA/page9/index.vue";
import page10 from "@/pages/componentsA/page10/index.vue";
import page11 from "@/pages/componentsA/page11/index.vue";
import page12 from "@/pages/componentsA/page12/index.vue";
import page13 from "@/pages/componentsA/page13/index.vue";
import page13_next_desc from "@/pages/componentsA/page13_next_desc/index.vue";
import page13_next_loading from "@/pages/componentsA/page13_next_loading/index.vue";
import page13_upgrade from "@/pages/componentsA/page13_upgrade/index.vue";

import page15 from "@/pages/componentsA/page15/index.vue";
import page16 from "@/pages/componentsA/page16/index.vue";
import page17 from "@/pages/componentsA/page17/index.vue";
import page18 from "@/pages/componentsA/page18/index.vue";
import page19 from "@/pages/componentsA/page19/index.vue";
import page20 from "@/pages/componentsA/page20/index.vue";
import page21 from "@/pages/componentsA/page21/index.vue";
import page22 from "@/pages/componentsA/page22/index.vue";
import page23 from "@/pages/componentsA/page23/index.vue";
import page24 from "@/pages/componentsA/page24/index.vue";
import page24_1 from "@/pages/componentsA/page24_1/index.vue";
import page24_2 from "@/pages/componentsA/page24_2/index.vue";
import page25 from "@/pages/componentsA/page25/index.vue";
import page26 from "@/pages/componentsA/page26/index.vue";
import page27 from "@/pages/componentsA/page27/index.vue";
import page28 from "@/pages/componentsA/page28/index.vue";
import page29 from "@/pages/componentsA/page29/index.vue";
import page30 from "@/pages/componentsA/page30/index.vue";
import page31 from "@/pages/componentsA/page31/index.vue";
import page32 from "@/pages/componentsA/page32/index.vue";
import page33 from "@/pages/componentsA/page33/index.vue";
import page34 from "@/pages/componentsA/page34/index.vue";
import page35 from "@/pages/componentsA/page35/index.vue";
import faceBioAssayGlo from "@/uni_modules/face-bio-assay-global/components/face-bio-assay/face-bio-assay.vue";

export default {
  components: {
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
    page10,
    page11,
    page12,
    page13,
    page13_next_desc,
    page13_next_loading,
    page13_upgrade,
    page15,
    page16,
    page17,
    page18,
    page19,
    page20,
    page21,
    page22,
    page23,
    page24,
    page24_1,
    page24_2,
    page25,
    page26,
    page27,
    page28,
    page29,
    page30,
    page31,
    page32,
    page33,
    page34,
    page35,
    faceBioAssayGlo,
  },
  data() {
    return {
      liuyanTxt: "",
      gloAvtorUrl: "",
      pageIndex: "29",
      tipsText: "请确保面部完整显示在屏幕之内",
      tipsTextCss: "tipsTextCss",
      isSuccess: false, //是否检测完成
      face: {},
      Page21Params: "",
      scale_type_record: {}, // 各量表得分
      scale_record: {}, // 4个量表结果的记录，BFI-10为page9量表，GAD-7为page34第一个量表，PHQ-9为page34第二个量表，BDRS为page34第三个量表
      person_info: { Mobile: "17855345052" }, // 个人信息
      journey_choices: {}, // 捕鸟记录、路线选择、订酒店、订餐记录
      time_slice: {},
      goldCoin: 1500, // 金币数
      // playNum: 3, // 次数
      // 页面开始时间
      page_time: {
        page2_start: null,
        page3_start: null,
        page4_start: null,
        page5_start: null,
        page6_start: null,
        page7_start: null,
        page8_start: null,
        page9_start: null,
        page10_start: null,
        page11_start: null,
        page12_start: null,
        page13_start: null,
        page14_start: null,
        page15_start: null,
        page16_start: null,
        page17_start: null,
        page18_start: null,
        page19_start: null,
        page20_start: null,
        page21_start: null,
        page22_start: null,
        page23_start: null,
        page24_start: null,
        page25_start: null,
        page26_start: null,
        page27_start: null,
        page28_start: null,
        page29_start: null,
        page30_start: null,
        page31_start: null,
        page32_start: null,
        page33_start: null,
        page34_start: null,
        page35_start: null,
      },
      recoreTempPath: "", // 音频临时路径
      // 捕鸟
      detection_module_time_slice: {
        detect_start: "", // 开始录制视频时间记录
        brid_hunt_start: "", // 开始捕鸟时间
        brid_hunt_end: "", // 结束捕鸟时间
        brid_hunt_start2: "", // 进阶
        brid_hunt_end2: "", // 进阶
        pour_out_video_start: "", // 烦恼倾诉时间记录
        pour_out_video_end: "", // 烦恼倾诉时间记录结束
        cale_video_start: "", //音阶时间纪录(小鸟飞过树木）
        cale_video_end: "", //音阶时间纪录(小鸟飞过树木）
        sunrise_feeling_video_start: "", // 快乐分享时间记录
        sunrise_feeling_video_end: "", // 快乐分享时间记录
        detect_end: "", // 开始录制视频时间记录结束
      },
      innerAudioContext: null,
      innerAudioContextMouse: null,
      innerAudioContextBird_a: null,
      innerAudioContextBird_b: null,
      innerAudioContext_n: null,
      innerAudioContext_lt: null,
      innerAudioContext_24: null,
      innerAudioContext_25: null,
      innerAudioContext_26: null,
      innerAudioContext_27: null,
      innerAudioContext_28: null,
      innerAudioContext_29: null,
      innerAudioContext_30: null,
      innerAudioContext_31: null,
      innerAudioContext_32: null,
      innerAudioContext_33: null,
      innerAudioContext_34: null,
      innerAudioContext_35: null,
    };
  },
  beforeDestroy() {
    this.innerAudioContext && this.innerAudioContext.destroy();
    this.innerAudioContextMouse && this.innerAudioContextMouse.destroy();
    this.innerAudioContextBird_a && this.innerAudioContextBird_a.destroy();
    this.innerAudioContext_n && this.innerAudioContext_n.destroy();
    this.innerAudioContext_lt && this.innerAudioContext_lt.destroy();
    this.innerAudioContext_24 && this.innerAudioContext_24.destroy();
    this.innerAudioContext_27 && this.innerAudioContext_27.destroy();
    this.innerAudioContext_35 && this.innerAudioContext_35.destroy();
  },
  created() {
    // 背景音乐 到7页stop
    this.innerAudioContext = uni.createInnerAudioContext({
      useWebAudioImplement: false,
      obeyMuteSwitch: false,
      loop: true,
    });
    this.innerAudioContext.src =
      "https://dfs.affectai.cn/affect-material/images/audio/bgm/a1.mp3";

    // 鼠标音频
    this.innerAudioContextMouse = uni.createInnerAudioContext({
      useWebAudioImplement: false,
      obeyMuteSwitch: false,
    });
    // 鼠标音效
    this.innerAudioContextMouse.src =
      "https://dfs.affectai.cn/affect-material/images/audio/mouse_sound/a2.mp3";

    // TODO  雷达图 没数据；全程视频问题；所有数据上传；
  },
  methods: {
    gloAvtor(url) {
      this.gloAvtorUrl = url;
    },
    async getCurrentFormattedTime() {
      // 通过公共资源获取服务器时间
      let serverOffset = 0,
        formattedTime = null;
      // 请求公共服务
      await uni.request({
        url: "https://pyrom.affectai.cn",
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
          const now = Date.now();
          // 格式化时间字符串
          formattedTime = now;
          return formattedTime;
        },
      });
    },
    pageEvent(params) {
      this.innerAudioContextMouse.play(); // 播放
      // console.log('=====数据scale_record', this.scale_record);
      // console.log('=====数据person_info', this.person_info);
      // console.log('=====数据journey_choices', this.journey_choices);
      // console.log('=====数据detection_module_time_slice', this.detection_module_time_slice);
      // console.log('=====音频临时路径recoreTempPath', this.recoreTempPath);

      const { pageIndex } = params;
      if (
        !this.isSuccess &&
        pageIndex != "35" &&
        (pageIndex > 7 ||
          pageIndex == "page24_2" ||
          pageIndex == "page24_1" ||
          pageIndex == "page13_upgrade" ||
          pageIndex == "pageIndex" ||
          pageIndex == "page13_next_loading" ||
          pageIndex == "page13_next_desc")
      ) {
        this.tipsText = "请确保面部完整显示在屏幕之内";
        return this.$refs.uToast.show({
          title: "请确保面部完整显示在屏幕之内",
          type: "error",
        });
      }
      this.pageIndex = pageIndex;

      switch (pageIndex) {
        case "2":
          this.innerAudioContext.play();
          break;
        case "3":
          this.page_time.page2_start = this.getCurrentFormattedTime();
          break;
        case "4":
          this.page_time.page3_start = this.getCurrentFormattedTime();
          break;
        case "5":
          this.page_time.page4_start = this.getCurrentFormattedTime();
          break;
        case "6":
          this.page_time.page5_start = this.getCurrentFormattedTime();
          break;
        case "7":
          this.page_time.page6_start = this.getCurrentFormattedTime();
          break;
        case "8":
          this.page_time.page7_start = this.getCurrentFormattedTime();
          this.destroyAudio();
          break;
        case "9":
          this.page_time.page8_start = this.getCurrentFormattedTime();
          break;
        case "10":
          this.page_time.page9_start = this.getCurrentFormattedTime();
          break;
        case "11":
          this.page_time.page10_start = this.getCurrentFormattedTime();
          break;
        case "12":
          this.page_time.page11_start = this.getCurrentFormattedTime();
          // 捕鸟音频
          this.innerAudioContextBird_a = uni.createInnerAudioContext({
            useWebAudioImplement: false,
            obeyMuteSwitch: false,
            loop: true,
          });
          this.innerAudioContextBird_a.src =
            "https://dfs.affectai.cn/affect-material/images/audio/bgm/a2.mp3";
          this.innerAudioContextBird_a.play();
          break;
        case "13":
          this.page_time.page12_start = this.getCurrentFormattedTime();
          break;
        case "page13_next_desc":
          this.innerAudioContextBird_a.stop();
          break;
        case "page13_next_loading":
          this.innerAudioContextBird_a.play();
          break;
        case "14":
          this.page_time.page13_start = this.getCurrentFormattedTime();
          this.innerAudioContextBird_a &&
            this.innerAudioContextBird_a.destroy();
          break;
        case "15":
          this.page_time.page14_start = this.getCurrentFormattedTime();
          break;
        case "16":
          this.page_time.page15_start = this.getCurrentFormattedTime();
          break;
        case "17":
          this.page_time.page16_start = this.getCurrentFormattedTime();
          break;
        case "18":
          this.page_time.page17_start = this.getCurrentFormattedTime();
          // 旅途选择音频
          this.innerAudioContext_lt = uni.createInnerAudioContext({
            useWebAudioImplement: false,
            obeyMuteSwitch: false,
            loop: true,
          });
          this.innerAudioContext_lt.src =
            "https://dfs.affectai.cn/affect-material/images/audio/bgm/a3.mp3";
          this.innerAudioContext_lt.play();
          break;
        case "19":
          this.page_time.page18_start = this.getCurrentFormattedTime();
          break;
        case "20":
          this.page_time.page19_start = this.getCurrentFormattedTime();
          break;
        case "21":
          this.page_time.page20_start = this.getCurrentFormattedTime();
          break;
        case "22":
          this.page_time.page21_start = this.getCurrentFormattedTime();
          break;
        case "23":
          this.page_time.page22_start = this.getCurrentFormattedTime();
          this.innerAudioContext_lt.destroy();
          break;
        case "24":
          this.page_time.page23_start = this.getCurrentFormattedTime();
          // 4_旅店倾诉bgm
          this.innerAudioContext_24 = uni.createInnerAudioContext({
            useWebAudioImplement: false,
            obeyMuteSwitch: false,
            loop: true,
          });
          this.innerAudioContext_24.src =
            "https://dfs.affectai.cn/affect-material/images/audio/bgm/a5.mp3";
          this.innerAudioContext_24.play();
          break;
        case "25":
          // 解忧日记
          this.page_time.page24_start = this.getCurrentFormattedTime();
          this.innerAudioContext_24.destroy();
          break;
        case "26":
          this.page_time.page25_start = this.getCurrentFormattedTime();
          break;
        case "27":
          this.page_time.page26_start = this.getCurrentFormattedTime();
          // 4_烦恼倾诉bgm
          this.innerAudioContext_27 = uni.createInnerAudioContext({
            useWebAudioImplement: false,
            obeyMuteSwitch: false,
            loop: true,
          });
          this.innerAudioContext_27.src =
            "https://dfs.affectai.cn/affect-material/images/audio/bgm/a4.mp3";
          this.innerAudioContext_27.play();
          break;
        case "28":
          this.innerAudioContext_27.destroy();
          this.page_time.page27_start = this.getCurrentFormattedTime();
          break;
        case "29":
          this.page_time.page28_start = this.getCurrentFormattedTime();
          // 5_登顶-五级音阶+快乐分享bgm
          this.innerAudioContext_29 = uni.createInnerAudioContext({
            useWebAudioImplement: false,
            obeyMuteSwitch: false,
            loop: true,
          });
          this.innerAudioContext_29.src =
            "https://dfs.affectai.cn/affect-material/images/audio/bgm/a6.mp3";
          this.innerAudioContext_29.play();
          break;
        case "30":
          this.page_time.page29_start = this.getCurrentFormattedTime();
          this.innerAudioContext_29 && this.innerAudioContext_29.stop();
          break;
        case "31":
          this.page_time.page30_start = this.getCurrentFormattedTime();
          this.innerAudioContext_29 && this.innerAudioContext_29.play();
          break;
        case "32":
          this.page_time.page31_start = this.getCurrentFormattedTime();
          this.innerAudioContext_29 && this.innerAudioContext_29.destroy();
          break;
        case "33":
          this.page_time.page32_start = this.getCurrentFormattedTime();
          break;
        case "34":
          this.page_time.page33_start = this.getCurrentFormattedTime();
          break;
        case "35":
          /**
           * 最后测评页
           *
           * y=12.5*x+50
           *
           * */
          this.$refs.face_glo && this.$refs.face_glo.stopRecord();
          this.page_time.page34_start = this.getCurrentFormattedTime();
          // 5_登顶-五级音阶+快乐分享bgm
          this.innerAudioContext_35 = uni.createInnerAudioContext({
            useWebAudioImplement: false,
            obeyMuteSwitch: false,
            loop: true,
          });
          this.innerAudioContext_35.src =
            "https://dfs.affectai.cn/affect-material/images/audio/bgm/end.mp3";
          this.innerAudioContext_35.play();
          var that = this;
          this.innerAudioContext_35.onEnded(function () {
            that.innerAudioContext_35 && that.innerAudioContext_35.destroy();
          });
          // BFI-10 心境内观自我
          if (this.scale_record) {
            let score1 =
              parseFloat(this.scale_record.BFI_10.B1_T10) -
              parseFloat(this.scale_record.BFI_10.B1_T5);
            let score2 =
              parseFloat(this.scale_record.BFI_10.B1_T8) -
              parseFloat(this.scale_record.BFI_10.B1_T3);
            let score3 =
              parseFloat(this.scale_record.BFI_10.B1_T6) -
              parseFloat(this.scale_record.BFI_10.B1_T1);
            let score4 =
              parseFloat(this.scale_record.BFI_10.B1_T2) -
              parseFloat(this.scale_record.BFI_10.B1_T7);
            let score5 =
              parseFloat(this.scale_record.BFI_10.B1_T9) -
              parseFloat(this.scale_record.BFI_10.B1_T4);
            // O 开放性	第10题减第5题得分
            this.scale_type_record.BFI_10_O = Math.floor(score1 * 12.5 + 50);
            // C 尽责性	第8题减第3题得分
            this.scale_type_record.BFI_10_C = Math.floor(score2 * 12.5 + 50);
            // E外向性	第6题减第1题得分
            this.scale_type_record.BFI_10_E = Math.floor(score3 * 12.5 + 50);
            // A宜人性	第2题减第7题得分
            this.scale_type_record.BFI_10_A = Math.floor(score4 * 12.5 + 50);
            // N神经性	第9题减第4题得分
            this.scale_type_record.BFI_10_N = Math.floor(score5 * 12.5 + 50);
          }
          break;
        case "36":
          this.page_time.page35_start = this.getCurrentFormattedTime();
          break;
        default:
          break;
      }
    },
    // 人脸检测-全局
    setFaceStatus(params) {
      const { status, msg } = params;
      // 通过检测
      if (status == true) {
        this.isSuccess = true;
      }
      // 没有通过
      if (status == false) {
        this.isSuccess = false;
        this.tipsText = msg;
        // this.$refs.uToast.show({
        // 	title: msg,
        // 	type: 'error',
        // })
      }
    },
    uploadVideo(options) {
      let { file, audioType, start_time, recordTime } = options;
      this.uploadRecord(file, audioType, start_time, recordTime);
    },
    setData(params) {
      let { pageIndex } = params;
      if (pageIndex == "7") {
        let { BFI_10 } = params;
        this.scale_record.BFI_10 = BFI_10;
      }
    },
    setGoldCoin(params) {
      let { goldCoin } = params;
      // let { goldCoin, playNum } = params;
      this.goldCoin = goldCoin;

      // if (playNum != null || playNum != "") {
      //   this.playNum = playNum;
      // }
    },
    setJourney(params) {
      let { back_game_1 } = params;
      this.journey_choices.back_game_1 = [...back_game_1];
    },
    setJourney2(params) {
      let { back_game_2 } = params;
      this.journey_choices.back_game_2 = [...back_game_2];
    },
    // 入门捕鸟开始 时间
    birdRm_start() {
      this.detection_module_time_slice.brid_hunt_start =
        this.getCurrentFormattedTime();
    },
    birdRm_end() {
      this.detection_module_time_slice.brid_hunt_end =
        this.getCurrentFormattedTime();
    },
    // 进阶捕鸟开始 时间
    birdRm_start2() {
      this.detection_module_time_slice.brid_hunt_start2 =
        this.getCurrentFormattedTime();
    },
    birdRm_end2() {
      this.detection_module_time_slice.brid_hunt_end2 =
        this.getCurrentFormattedTime();
    },
    setRoute(params) {
      this.journey_choices.route = params;
    },
    setHotel(params) {
      this.journey_choices.hotel = params;
      console.log(this.journey_choices);
    },
    setFood(params) {
      let { food } = params;
      this.journey_choices.food = params.food;
      // console.log(this.journey_choices);
    },
    setAddFood(obj) {
      let { price } = obj;
      this.goldCoin = this.goldCoin + Number(price);
    },
    setReceFood(obj) {
      let { price } = obj;
      this.goldCoin = this.goldCoin - Number(price);
    },
    // 心情不好录音- page26
    setRecore(params) {
      let { recoreTempPath, audioType, start_time, times, postion } = params;
      this.uploadRecord(recoreTempPath, audioType, start_time, times, postion);
    },
    // 录音开始时间
    record_start() {
      this.detection_module_time_slice.pour_out_video_start =
        this.getCurrentFormattedTime();
    },
    record_end() {
      this.detection_module_time_slice.pour_out_video_end =
        this.getCurrentFormattedTime();
    },
    // 音阶，飞过树
    tree_start() {
      this.detection_module_time_slice.cale_video_start =
        this.getCurrentFormattedTime();
    },
    tree_end() {
      this.detection_module_time_slice.cale_video_end =
        this.getCurrentFormattedTime();
    },
    // 小鸟飞行录音
    setBirdRecore(params) {
      //todo
      let { recoreTempPath, audioType, start_time, times, postion } = params;
      this.uploadRecord(recoreTempPath, audioType, start_time, times, postion);
    },
    // 快乐分享录音 - page32
    setFxRecore(params) {
      let { recoreTempPath, audioType, start_time, times, postion } = params;
      this.uploadRecord(recoreTempPath, audioType, start_time, times, postion);
    },
    // 快乐分享开始时间
    fx_start() {
      this.detection_module_time_slice.sunrise_feeling_video_start =
        this.getCurrentFormattedTime();
    },
    fx_end() {
      this.detection_module_time_slice.sunrise_feeling_video_end =
        this.getCurrentFormattedTime();
    },
    /**
			 * @description 音视频上传 
			 * @param {*} filePath 文件file
			 * @param {*} audioType ，类型, video视频。audio音频
			 * @param {*} start_time ，开始时间
			 * @param {*} times	视频，上传的第几个片段
			 * @param {*} postion	哪个片段 {
				 * nohapply_share 心情不好录音 录音
				 * bird_flight 小鸟飞行
			 }
			 * 
			 * 
			*/
    uploadRecord(filePath, audioType, start_time, times, postion) {
      uni.uploadFile({
        url: "http://119.45.4.159:5080/api/wechat/uploadfile/",
        filePath: filePath,
        name: "file", // 后端接收文件的参数名
        formData: {
          mobile: "123456789",
          audio_type: audioType,
          start_time,
          times,
          postion,
        },
        success: (uploadFileRes) => {
          console.log("Upload success:", uploadFileRes);
          // 处理上传成功的逻辑，比如更新UI或存储上传结果
        },
        fail: (err) => {
          console.error("Upload failed:", err);
          // 处理上传失败的逻辑
        },
      });
    },
    destroyAudio() {
      this.innerAudioContext && this.innerAudioContext.destroy();
    },
    destroyAudioMouse() {
      this.innerAudioContextMouse && this.innerAudioContextMouse.destroy();
    },
  },
};
</script>

<style lang="scss">
@keyframes fadeOut {
  to {
    opacity: 0;
    visibility: hidden; /* 使元素在透明度为0后仍然占据原来的空间 */
  }
}

.index-wrap32 {
  background-color: #fff;
  background: #fff;
}
// .readtrued {
//   background: #05dac6 !important;
// }
.tips {
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
  margin: auto;
  width: 260px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  z-index: 660;
}
.errorTips {
  background-color: #dc000059;
  color: #fff;
  // animation: fadeOut 7s forwards;
  animation: blink 7s forwards;
}
@keyframes blink {
  0%,
  40% {
    opacity: 1;
  }
  20%,
  100% {
    opacity: 0;
  }
}
.top13 {
  position: fixed;
  padding-top: 10px;
  display: flex;
  width: 90%;
  top: 0;
  left: 15px;
  margin: auto;
  z-index: 640;

  .m-a {
    width: 110px;
    height: 45px;
    background-image: url("https://dfs.affectai.cn/affect-material/images/page19-1023/m-a.png");
    background-position: center;
    background-size: 100px;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    text-align: center;
    padding-left: 55px;
  }
  .m-b {
    width: 110px;
    height: 45px;
    background-image: url("https://dfs.affectai.cn/affect-material/images/page19-1023/m-b.png");
    background-position: center;
    background-size: 100px;
    background-repeat: no-repeat;
    margin-left: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    padding-left: 55px;
  }
}
</style>
