<template>
  <div id="mltLive">
    <div class="box">
      <section v-for="(song,index) in songs"
               :key="index">
        <CommonList>
          <template slot="title">
            <h2>{{song.name}}<a v-if="song.score"
                 :href="'/pdf/web/viewer.html?file='+song.score">歌谱</a></h2>
          </template>
          <template>
            <div class="item"
                 v-for="(item,index1) in song.list">
              <video :poster="item.poster?'/'+baseUrl+'/'+song.url+'/'+item.poster:''"
                     :key="index1"
                     controls
                     :src="getUrl(song.url,item.url)"></video>
              <p class="title"
                 :title="item.title">{{item.title}}</p>
            </div>
          </template>
        </CommonList>
      </section>
    </div>
  </div>
</template>
<script>
import CommonList from '../Common/List'
export default {
  components: { CommonList },
  data () {
    return {
      baseUrl: 'mlt',
      songs: [
        {
          name: 'Hallelujah',
          url: 'hallelujah',
          score: '/score/Hallelujah_-_Pentatonix_A_Cappella.pdf',
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
</style>
