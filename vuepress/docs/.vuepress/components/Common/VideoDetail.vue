<template>
  <div id="mltLive">
    <div class="
           box">
      <section v-for="(song,index) in songs"
               :key="index">

        <header>
          <h2 style="float:left;">{{song.name}}<a style="float:right;font-size:14px;line-height:35px;"
               href="./Pdf/">歌谱</a></h2>
        </header>
        <!-- 引用视频网站视频 -->
        <!-- <iframe height=184
                width=320
                src='http://player.youku.com/embed/XNDIxNTMyNDYxNg=='
                frameborder=0
                allowfullscreen></iframe> -->

        <section class='item'
                 v-for="(item,index1) in song.list">
          <!-- 引用本地视频 -->
          <div>
            <video :poster="item.poster?'/'+baseUrl+'/'+song.url+'/'+item.poster:''"
                   :key="index1"
                   controls
                   :src="getUrl(song.url,item.url)"></video>
            <p class="title"
               :title="item.title">{{item.title}}</p>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      baseUrl: 'mlt',
      songs: [
        {
          name: 'Hallelujah',
          url: 'hallelujah',
          list: [
            {
              title: '【沐耳道】Hallelujah（Cover Pentonix）：中以友谊音乐会',
              desc: '',
              url: 'Hallelujah_release.mp4',
              poster: 'cover_Hallelujah_release.png',
            },
            {
              title: '【沐耳道】Hallelujah（Cover Pentonix）：中以友谊音乐会彩排',
              desc: '',
              url: 'Hallelujah_beta.mp4',
              poster: 'cover_Hallelujah_beta.png',
            }
          ]
        },
        {
          name: '鼓舞',
          url: 'gw',
          list: [
            {
              title: '【沐耳道】鼓舞（Cover 赞美之泉）：日常练习',
              desc: '',
              url: '鼓舞_alpha.mp4',
              poster: 'cover_鼓舞_alpha.png',
            }
          ]
        }
      ]
    }
  },
  methods: {
    getUrl (songUrl, itemnUrl) {
      return '/' + this.baseUrl + '/' + songUrl + '/' + itemnUrl
    }
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
