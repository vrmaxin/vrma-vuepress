<template>
  <div class="score">
    <embed src="/Hallelujah_-_Pentatonix_A_Cappella.pdf"
           type="application/pdf"
           width="100%"
           height="100%"
           internalinstanceid="81" />
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
/* 平板之类的宽度 1024 以下设备 */
@media only screen and (min-width: 321px) and (max-width: 1024px) {
  .score {
    width: 740px;
    height: calc(100vh);
    embed {
    }
  }
}

/* PC客户端或大屏幕设备: 1028px 至更大 */
@media only screen and (min-width: 1029px) {
  .score {
    width: 740px;
    height: calc(100vh);
    embed {
    }
  }
}

/* 竖屏 */
@media screen and (orientation: portrait) and (max-width: 720px) {
  .score {
    width: 100%;
    width: 100%;
    embed {
    }
  }
}
</style>
