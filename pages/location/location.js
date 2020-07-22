// pages/location/location.js
var QQMapWX = require("../../map/qqmap-wx-jssdk.js")
var mappp
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    mappp = new QQMapWX({
      key: "L3MBZ-U56WS-EWOOZ-6RZB4-2GILV-5UFTJ"
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        // console.log(res);
        var latitude1 = (res.latitude).toFixed(6);
        var longitude1 = (res.longitude).toFixed(6);

        mappp.reverseGeocoder({
          location: {
            latitude: latitude1,
            longitude: longitude1
          },

          success: function (res) {
            // console.log(res);
            var add = res.result.address_component.city;
            var asd = res.result.address_component.street_number;
            console.log(typeof add)
            that.setData({
              wd: latitude1,
              jd: longitude1,
              address: add,
              asd: asd
            })

          }

        })

      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})