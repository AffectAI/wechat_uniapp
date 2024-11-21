<template>
  <view class="page20-wrap" style="padding-top: 20px">
    <!-- <view class="gold2">
			<u-image width="35px" height="35px" :src="gloAvtorUrl"></u-image> <text style="margin-left:10px ;"> 1500</text>
		</view>
		 -->
    <view class="item20 item1-20" v-if="pageIndex == 1">
      <u-image
        width="100%"
        height="200px"
        style="border-top-left-radius: 10px; border-top-right-radius: 10px"
        src="https://datastream.affectai.cn/callmaterial/images/page20-1024/img13.png"
      ></u-image>
      <view class="text">
        <view class="title"> 林间石舍 | ¥600/晚 | 赠送单人早餐券 </view>
        <view class="des">
          【碳超实型）
          拉供肪供义象：記學流莎号新群的莱沙拉游，口联挫特，整养的脚。 <br />
          •【环境特色】旅店建筑采用天然石材搭建而成，融合了现代设计与原生态风格，内部装修简约典雅，窗外是满目苍翠的森林和清澈见底的小溪。<br />
          •【独特项目】提供定制化的山地徒步路线，让客人探索周边的原生态森林、山谷景观
        </view>
      </view>
    </view>

    <view class="item20 item1-20" v-if="pageIndex == 2">
      <u-image
        width="100%"
        height="200px"
        style="border-top-left-radius: 10px; border-top-right-radius: 10px"
        src="https://datastream.affectai.cn/callmaterial/images/page20-1024/img11.png"
      ></u-image>
      <view class="text">
        <view class="title"> 清泉山庄 | ¥800/晚 | 赠送双人下午茶券 </view>
        <view class="des">
          【地理位置】位于山谷深处，被树林和溪流环绕，远离尘器。 <br />
          •【餐食类型】提供野生蘑菇炖鸡、山芋烧猪肉、竹笋炒腊肠等一系列精致的山林佳看。<br />
          •【环境特色】周围是幽静的树林和清澈见底的流，窗外是美丽的山谷风景，令人心旷神怡。<br />
          •【独特项目】提供山间瑜伽和冥想课程，让客人在大自然中找到身心平衡与内心宁静;设有山泉SPA中心，提供舒缓放松的水疗服务，让客人彻底放松身心。
        </view>
      </view>
    </view>

    <view class="item20 item1-20" v-if="pageIndex == 3">
      <u-image
        width="100%"
        height="200px"
        style="border-top-left-radius: 10px; border-top-right-radius: 10px"
        src="https://datastream.affectai.cn/callmaterial/images/page20-1024/img12.png"
      ></u-image>
      <view class="text">
        <view class="title"> 峰顶客栈 ¥1000/晚赠送晚餐八折券 </view>
        <view class="des">
          •【地理位置】坐落于山峰之巅，俯瞰壮丽景色，视野开阔。<br />
          •【餐食类型】别具一格的山顶美食，如峰顶烤野味、高山蔬菜沙拉、峰顶鱼汤等。<br />
          •【环境特色】周围是广阔的山顶草原，远处是连绵起伏的山峰，让人感受大自然的壮美和宁静。<br />
          •【独特项目】提供日出观赏活动，让客人在清晨登顶山峰，目睹壮丽的日出景象;此外，还设有天空观景平台，让客人在高空中俯瞰山脉风光，体验壮观的山顶风光。
        </view>
      </view>
    </view>

    <view class="btnBox">
      <button class="btn-button" @click="nextPage">预定</button>
      <button class="btn-button" @click="pre" v-if="pageIndex != 1">
        上一页
      </button>
      <button class="btn-button" @click="next" v-if="pageIndex != 3">
        下一页
      </button>
    </view>
  </view>
</template>

<script>
export default {
  props: ["gloAvtorUrl"],
  data() {
    return {
      pageIndex: 1,
      pagea: true,
      pageb: false,
      pagec: false,
      innerAudioContext_n: null,
    };
  },
  beforeDestroy() {
    this.innerAudioContext_n && this.innerAudioContext_n.destroy();
  },
  created() {
    // 下一步音频
    this.innerAudioContext_n = uni.createInnerAudioContext({
      useWebAudioImplement: false,
      obeyMuteSwitch: false,
    });
    this.innerAudioContext_n.src =
      "https://datastream.affectai.cn/callmaterial/images/audio/mouse_sound/a4.mp3";
  },
  methods: {
    pre() {
      this.innerAudioContext_n.play();
      if (this.pageIndex == 1) {
        return;
      }
      this.pageIndex--;
    },
    next() {
      this.innerAudioContext_n.play();
      if (this.pageIndex >= 3) {
        return;
      }
      this.pageIndex++;
    },
    nextPage() {
      // uni.navigateTo({
      // 	url: '/pages/componentsA/page21/index?index='+this.pageIndex
      // })
      let name = "";
      if (this.pageIndex == 1) {
        name = "林间石舍";
      }
      if (this.pageIndex == 2) {
        name = "清泉山庄";
      }
      if (this.pageIndex == 3) {
        name = "峰顶客栈";
      }
      this.$emit("setHotel", name);
      this.$emit("pageEvent", { pageIndex: "21", index: this.pageIndex });
    },
  },
};
</script>

<style lang="scss" scoped>
.page20-wrap {
  min-height: 100vh;
  background-image: url(https://datastream.affectai.cn/callmaterial/images/page20-1024/img10.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
// .gold2{
// 	height:40px ;
// 	width: 110px;
// 	border: 2px solid rgb(218,148,36);
// 	background-color: rgba(205,211,169,0.8);
// 	border-radius: 20px;
// 	display: flex;
// 	align-items: center;
// 	box-sizing: border-box;
// 	padding: 0 10px;
// }
// .bgtop {
// 	background-image: url(https://datastream.affectai.cn/callmaterial/images/page20-1024/img11.png);
// 	background-position: top;
// 	background-size: cover;
// 	background-repeat: no-repeat;
// 	position: relative;
// }
.item20 {
  margin: 0 auto;
  width: 85%;
  min-height: 385px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  // height: 424px;
  background-color: #fff;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  margin-top: 60px;

  .text {
    line-height: 1.5;
    padding: 8px;
    padding-bottom: 20px;
    .title {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .des {
      font-size: 12px;
    }
  }
}
// .item1-20 {
//   // background-image: url(https://datastream.affectai.cn/callmaterial/images/page20-1024/img11.png);
// }
.btnBox {
  margin-top: 50px;
  display: flex;
  .btn-button {
    padding: 5px 30px;
    background-color: rgb(101, 246, 180);
    font-size: 15px;
    border-radius: 8px;
  }
}
</style>
