<template>
  <div id="mltLive">
    <div class="box">
      <header>
        <slot name="title"></slot>
      </header>
      <section>
        <slot></slot>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
#mltLive {
  .box {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    h2 {
      a {
        float: right;
        font-size: 14px;
        line-height: 35px;
      }
    }
  }
  /* 平板之类的宽度 1024 以下设备 */
  @media only screen and (min-width: 321px) and (max-width: 1024px) {
    .item {
      display: inline-block;
      margin-right: 10px;
      video {
        width: 200px;
      }
      .title {
        width: 200px;
        font-size: 12px;
      }
    }
  }

  /* PC客户端或大屏幕设备: 1028px 至更大 */
  @media only screen and (min-width: 1029px) {
    .item {
      display: inline-block;
      margin-right: 10px;
      video {
        width: 200px;
      }
      .title {
        width: 200px;
        font-size: 12px;
      }
    }
  }

  /* 竖屏 */
  @media screen and (orientation: portrait) and (max-width: 720px) {
    .item {
      display: block;
      margin: 10px;
      video {
        width: 100%;
      }
      .title {
        width: 100%;
        font-size: 12px;
      }
    }
  }
}
</style>
