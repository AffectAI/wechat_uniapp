<template>
  <swiper
    style="padding-top: 55px"
    class="poster_swiper"
    previous-margin="110rpx"
    :current="swiperIndex"
    next-margin="110rpx"
    @change="onSwiperChange"
  >
    <swiper-item
      class="swiper-item"
      v-for="(item, index) of dataInfo.headImgs"
      :key="index"
    >
      <view
        class="goods_info_box"
        :class="{ active: swiperIndex == index }"
        @click="next(item)"
        style="position: relative"
      >
        <image class="goods_image" :src="item.url" mode="aspectFit"></image>
        <view style="text-align: center; font-size: 22px; color: #fff">{{
          item.name
        }}</view>
        <!-- <view class="goods_info">
					<view class="goods_name">{{dataInfo.goodsName}}</view>
					<view class="price_box">
						<view class="price">{{dataInfo.goodsPrice}}</view>
						<view class="store_price">{{dataInfo.priceShop}}</view>
					</view>
					
					<view class="poster_info">
						<view class="info">
							<view>长按识别二维码访问</view>
							<text>{{"App平台"}}</text>
						</view>
						<image class="poster_code_image" :src="dataInfo.recommendCodeGoods" mode="aspectFit">
						</image>
					</view>
				</view> -->
      </view>
      <view
        style="
          position: absolute;
          bottom: -80px;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          z-index: 600;
          height: 95px;
        "
      >
        <view class="triangle"></view>
        <button class="button" style="">
          {{ item.name }}
        </button>
      </view>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  props: {
    swiperIndex: {
      type: [Number, String],
      default: 0,
    },
    // 当前选中
    dataInfo: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    onSwiperChange(e) {
      this.$emit("change", e);
    },
    next(item) {
      this.$emit("nextPage", item);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./mixin.scss";

.poster_swiper {
  height: 950rpx;
  width: 100%;

  .swiper-item {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    overflow: initial;

    .goods_info_box {
      width: 100%;
      height: 100%;
      transform: scale(0.88);
      transition: all 0.4s;
      position: relative;
      overflow: initial;
      // background-color: #FFFFFF;


      .goods_image {
        width: 100%;
        height: 100%;
        // height: calc(100vw - 220rpx);
      }

      .goods_info {
        padding: 24rpx;

        .goods_name {
          color: #333;
          font-size: 30rpx;
          @include bov(2);
        }

        .price_box {
          margin-top: 24rpx;
          display: flex;
          align-items: center;

          .price {
            font-size: 38rpx;
            color: red;
          }

          .store_price {
            margin-left: 30rpx;
            font-size: 26rpx;
            color: #999;
            text-decoration: line-through;
          }
        }

        // .poster_info {
        //   border-top: 2rpx solid #f1f1f1;
        //   padding-top: 24rpx;
        //   margin-top: 24rpx;
        //   display: flex;
        //   align-items: center;
        //   justify-content: space-between;

        //   .info {
        //     display: flex;
        //     flex-direction: column;

        //     view {
        //       color: #333;
        //       font-size: 28rpx;
        //     }

        //     text {
        //       color: #999;
        //       font-size: 24rpx;
        //       margin-top: 20rpx;
        //     }
        //   }

        //   .poster_code_image {
        //     width: 170rpx;
        //     height: 170rpx;
        //     flex-shrink: 0;
        //   }
        // }
      }
    }
  }
}

.share_save_box {
  position: fixed;
  bottom: calc((100vh - 950rpx - 240rpx) / 4);
  left: 0;
  z-index: 6;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.h5_press_save {
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 100;

  .goods_image {
    width: 100%;
  }

  .download {
    font-size: 24rpx;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    padding: 5rpx 30rpx;
    border-radius: 40rpx;
    bottom: 30rpx;
    left: 50%;
    transform: translateX(-50%);
  }
}

.triangle {
  width: 0;
  height: 0;
  border-left: 10px solid transparent; /* 左边框透明 */
  border-right: 10px solid transparent; /* 右边框透明 */
  border-top: 40px solid #fff;
  margin: 0 auto;
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
}
// button {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: transparent;

//   .goods_image {
//     width: 60rpx;
//     height: 60rpx;
//   }

//   text {
//     font-size: 24rpx;
//     color: #333333;
//   }
// }
.button {
  background-color: rgb(101, 246, 180);
  margin-top: 50px;
  font-size: 14px;
}
</style>
