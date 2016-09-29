Page({
    data: {
        list: [
            {
                id: 'block',
                name: '容器',
                open: false,
                pages: [{url:'layout/block',text:'块容器'}]
            },
            {
                id: 'listview',
                name: '列表',
                open: false,
                pages: [{url:'list/list',text:'基础列表'},{url:'list/listwechat',text:'聊天列表(仿微信)'}, {url:'list/listnavigator',text:'九宫格列表'}, {url:'list/listcontact',text:'通讯录列表'},{url:'list/listmedia',text:'媒体列表'}, {url:'list/listimage',text:'图片列表'}]
            },
            {
                id: 'layoutview',
                name: '布局',
                open: false,
                pages: [{url:'layout/layout',text:'布局插件'},{url:'layout/index',text:'首页布局'}, {url:'layout/layout-tab',text:'tab布局视图'}]
            },
            {
                id: 'animation',
                name: '动画效果',
                open: false,
                pages: [{url:'animation/roll',text:'滚动新闻'}]
            },
        ]
    },
    widgetsToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open;
            } else {
                list[i].open = false;
            }
        }
        this.setData({
            list: list
        });
    }
});
