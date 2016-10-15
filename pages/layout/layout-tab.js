
var app = getApp();

Page( {
    data: {
        duration: 500,
        current: 0,
        tabs: [ {
            id: 1,
            name: '标签一',
            active: true
        }, {
	        id: 2,
	        name: '标签二',
	        active: false
	    }, {
	        id: 3,
	        name: '标签三',
	        active: false
	    }],
        list1: [],
        list2: [],
        list3: []
    },
    onLoad: function() {
        this.setData( {
            list1: app.getShortData(6),
            list2: app.getData(24),
            list3: app.getShortData(24)
        });
    },
    tab: function( e ) {
        var tabs = this.data.tabs;
        var current = 0;
        for(var ndx = 0;ndx < tabs.length;ndx++ ) {
            if( e.currentTarget.id == tabs[ ndx ].id ) {
                tabs[ ndx ].active = true;
                current = ndx;
            } else {
                tabs[ ndx ].active = false;
            }
        }
        this.setData( {
            tabs: tabs,
            current: current
        })
    },
    tabchange: function( e ) {
        var tabs = this.data.tabs;
        for(var ndx = 0;ndx < tabs.length;ndx++ ) {
            tabs[ ndx ].active = e.detail.current == ndx;
        }
        this.setData( {
            tabs: tabs
        })
    },
    lower: function(e) {
        //下拉到底加载新数据
        var list = this.data.list2;
        var tmp = app.getData(10)
        for(var ndx = 0;ndx < tmp.length;ndx++){
            tmp[ndx].id = tmp[ndx].id+ndx+1;
            list.push(tmp[ndx]);
        }
        this.setData( {
            list2: list
        });
    },
    scroll: function(e) {
        //console.log('scrollTop:'+e.detail.scrollTop);
    },
    onPullDownRefresh: function() {
        console.log( 'onPullDownRefresh', new Date() )
    },
    stopPullDownRefresh: function() {
        wx.stopPullDownRefresh( {
            complete: function( res ) {
                console.log( res, new Date() )
            }
        })
    }
})