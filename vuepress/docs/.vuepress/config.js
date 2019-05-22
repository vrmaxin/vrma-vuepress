// .vuepress/config.js
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
    // 导航栏
    // navbar: false, // 禁用导航栏
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
            link: '/acappella/mlt/'
          },
          {
            text: '歌曲',
            link: '/acappella/song/'
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
    // displayAllHeaders: true,
    // activeHeaderLinks: false,
    // sidebar: 'auto',
    sidebarDepth: 2,
    // sidebar: [
    //   ['/page-b/', 'Explicit link text'],
    //   {
    //     title: 'HTML',
    //     collapsable: true,
    //     children: [
    //       ['/programming/html', 'HTML'],
    //       {
    //         title: 'HTML5',
    //         collapsable: true,
    //         children: [
    //           ['/programming/html5', 'ass']
    //         ]
    //       },
    //     ]
    //   },
    //   {
    //     title: 'CSS',
    //     collapsable: true,
    //     children: [
    //       ['/programming/css', 'CSS']
    //     ]
    //   },

    //   {
    //     title: 'hahah',
    //     collapsable: false,
    //     children: [
    //       '/',
    //       ['/page-a/', 'pageA']
    //     ]
    //   }
    // ],

    // 不同的页面组来显示不同的侧边栏
    // sidebar: {
    //   '/foo/': [
    //     '' /* /foo/ */,
    //     'one' /* /foo/one.html */,
    //     'two' /* /foo/two.html */
    //   ],

    //   '/bar/': [
    //     '' /* /bar/ */,
    //     'three' /* /bar/three.html */,
    //     'four' /* /bar/four.html */
    //   ],

    //   // fallback
    //   '/': [
    //     '' /* / */,
    //     'contact' /* /contact.html */,
    //     'about' /* /about.html */
    //   ],

    //   '/mlt/': ['']
    // },

    // 搜索框
    // search: false,
    // searchMaxSuggestions: 2,

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
