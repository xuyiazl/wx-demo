
Page({
  data:{
    title:null,
  },
  onLoad: function(options) {
    console.log(options)
    this.setData({
      title: options.title
    })
  }
});
