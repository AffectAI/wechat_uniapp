<template>
  <text class="typewriter" :style="textStyle">
    <text class="text">{{ currentText }}</text>
	<image v-if="cursorImg && !typingFinished" class="cursor" :src="cursorImg" mode="heightFix" />
	<text v-if="!cursorImg && !typingFinished" class="cursortext">|</text>
  </text>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    cursorImg: {
      type: String,
      default: '', // 光标图片的默认 URL
    },
    speed: {
      type: Number,
      default: 100, // 打字速度，单位：毫秒
    },
    textStyle: {
      type: Object,
      default: () => ({}), // 文字样式对象
    },
  },
  data() {
    return {
      currentText: '', // 当前显示的文字
      currentIndex: 0, // 当前文字的索引
      typingFinished: false, // 打字完成的标志
    };
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      if (this.text) {
        const textLength = this.text.length;
        const typingInterval = setInterval(() => {
          if (this.currentIndex < textLength) {
            this.currentText += this.text[this.currentIndex];
            this.currentIndex++;
          } else {
            clearInterval(typingInterval);
            this.typingFinished = true;
			this.$emit('finished', '')
          }
        }, this.speed);
      }
    },
  },
};
</script>

<style scoped>
.cursor {
  height: 1em;
  margin-left: 5px;
  margin-bottom: -0.2em;
}
.cursortext{
   margin-left: 5px;
   color: #000;
}
</style>