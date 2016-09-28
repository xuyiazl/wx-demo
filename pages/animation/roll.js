
var app = getApp();

Page( {
    data: {
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
        this.rollAnimationInterval(this.data.rollData.length,2,22,3000);
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