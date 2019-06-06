module.exports = {
  base: '/',
  title: 'vrmaxin',
  description: '这是一个属于我的一个空间',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/xin.png'
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '资源网站',
        link: '/resource-site/'
      },
      {
        text: '计算机',
        items: [
          {
            text: '编程',
            items: [
              {
                text: '前端',
                link: '/programming/font-end/'
              },
              {
                text: '后端',
                link: '/programming/back-end/'
              },
              {
                text: '移动端',
                link: '/programming/mobile/'
              }
            ]
          },
          {
            text: '设计',
            items: [
              {
                text: '原型设计',
                link: '/design/prototyping/'
              },
              {
                text: 'UI设计',
                link: '/design/ui-design/'
              }
            ]
          }
        ]
      },
      {
        text: '阿卡贝拉',
        items: [
          {
            text: '沐耳道',
            items: [
              {
                text: '简介',
                link: '/acapella/mlt/intro/'
              },
              {
                text: '视频',
                link: '/acapella/mlt/video/'
              }
            ]
          },
          {
            text: '歌谱',
            items: [
              {
                text: '歌谱',
                link: '/acapella/score/'
              }
            ]
          }
        ]
      },
      {
        text: '音视频',
        items: [
          {
            text: 'Adobe Audition',
            link: '/av/au/'
          },
          {
            text: 'Adobe Premiere',
            link: '/av/pr/'
          }
        ]
      },
      {
        text: '关于',
        link: '/about/'
      },
      {
        text: 'Github',
        link: 'https://github.com/vrmaxin'
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/acapella/song/score/': [
        {
          title: '布局类组件',
          collapsable: true,
          children: ['base/test1', 'base/test2', 'base/test3', 'base/test4']
        },
        {
          title: '可视化组件',
          collapsable: true,
          children: []
        }
      ]
    },

    lastUpdated: '日期', // string | boolean
    updatePopup: true
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@imgSrc': 'path/to/some/dir'
      }
    }
  }
}
