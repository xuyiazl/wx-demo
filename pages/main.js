
var app = getApp();

Page( {
    data: {
        swiperData: [ {
            img: 'http://img3.cache.netease.com/news/2016/9/25/2016092509541181c64.jpg',
            text: '男子出狱后疑自杀 亲属抬尸砸举报者家',
            url: '/pages/layout/result?title=navigate1'
        }, {
                img: 'http://img4.cache.netease.com/news/2016/9/25/20160925091523379a4.jpg',
                text: '"超级天眼"有多厉害 月亮上打手机也看得见',
                url: '/pages/layout/result?title=navigate2'
            }, {
                img: 'http://cms-bucket.nosdn.127.net/5c9ebcc29b8d4d29b718a20b485be44b20160925085015.jpeg',
                text: '小泽玛利亚空降武汉 着比基尼玩湿身诱惑',
                url: '/pages/layout/result?title=navigate3'
            }],
        indicatorDots: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        list1: [],
        list2: [],
        navlist: [ {
            url: 'result?title=导航1',
            icon: '/image/icon_component_HL.png',
            text: '导航1'
        }, {
                url: 'result?title=导航2',
                icon: '/image/icon_component_HL.png',
                text: '导航2'
            }, {
                url: 'result?title=导航3',
                icon: '/image/icon_component_HL.png',
                text: '导航3'
            }, {
                url: 'result?title=导航4',
                icon: '/image/icon_component_HL.png',
                text: '导航4'
            }],
        rollData: [ {
            text: '男子出狱后疑自杀 亲属抬尸砸举报者家',
            url: '/pages/layout/result?title=navigate1'
        }, {
                text: '"超级天眼"有多厉害 月亮上打手机也看得见',
                url: '/pages/layout/result?title=navigate2'
            }, {
                text: '小泽玛利亚空降武汉 着比基尼玩湿身诱惑',
                url: '/pages/layout/result?title=navigate3'
            }, {
                text: '男子吃旺旺雪饼运气没变旺 向多部门举报',
                url: '/pages/layout/result?title=navigate1',
            }, {
                text: '14岁少年杀同学被判17年 检察院抗诉后改无期',
                url: '/pages/layout/result?title=navigate2',
            }, {
                text: '四川一护士拍患者妇检私密照 并传社交群"讨论"',
                url: '/pages/layout/result?title=navigate3',
            }]

    },
    onLoad: function() {
        var that = this;
        /*
        app.getUserInfo( function( userInfo ) {
            //更新数据
            that.setData( {
                userInfo: userInfo
            })
        });
        */
        this.setData( {
            list1: app.getData( 4 ),
            list2:app.getData(10)
        });
    
        this.rollAnimationInterval(this.data.rollData.length,1,24,3000);
    },
    onReady: function() {
        this.rollAnimation = wx.createAnimation();
    },
    rollAnimationInterval: function(dataCount,lineCount,lineHeight, timeout ) {
        //头条新闻往上滚动效果
        var that = this;
        var current = 0;
        //var lineCount = 2;//每次翻滚的行
        var height = lineHeight * lineCount;//设置每次翻滚的高度，无法获取适配的高度，得固定
        var total = ( dataCount / lineCount ) * height;//总高度
        setInterval( function() {
            that.rollAnimation.translate( 0, -current * height ).step()
            that.setData( { rollAnimation: that.rollAnimation.export() })
            current++;
            if( current * height >=  total)
                current = 0;
        }, timeout );
    }
})