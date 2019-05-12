// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:0,
    longitude:0,
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '我的主页'//导航栏 中间的标题
    },
    // height: App.globalData.height * 2 + 20 ,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        that.setData({
          latitude:res.latitude,
          longitude:res.longitude
        })
      }
    })
  },
})