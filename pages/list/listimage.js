var app = getApp()
Page( {
    data: {
        list4: [],
        list6: [],
        list8: []
    },
    onLoad: function() {
        this.setData({
            list4:app.getData(4),
            list6:app.getShortData(6),
            list8:app.getShortData(8)
        });
    }
})