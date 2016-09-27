
var app = getApp();

Page( {
    data: {
        motto: '欢迎回来',
        userInfo: null,
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
            }]
    },
    onLoad: function() {
        var that = this;
        //调用应用实例的方法获取全局数据
        app.getUserInfo( function( userInfo ) {
            //更新数据
            that.setData( {
                userInfo: userInfo
            })
        });
    }
})