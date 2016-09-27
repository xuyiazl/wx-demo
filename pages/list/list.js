var app = getApp()
Page( {
    data: {
        list: []
    },
    onLoad: function() {
        this.setData({
            list:app.getShortData(6)
        });
    }
})