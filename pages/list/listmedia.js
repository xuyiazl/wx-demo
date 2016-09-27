var app = getApp()
Page( {
    data: {
        list: []
    },
    onLoad: function() {
        this.setData({
            list:app.getData(10)
        });
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