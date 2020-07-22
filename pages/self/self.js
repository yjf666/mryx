// pages/self/self.js
const app = getApp()
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
    //头像
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    var getuser = wx.getStorageSync("user")
    if (getuser) {
      var getuser = wx.getStorageSync("user")
      var rand = parseInt(Math.random() * 9);
      var rand1 = parseInt(Math.random() * 9);
      var rand2 = parseInt(Math.random() * 9);
      var rand3 = parseInt(Math.random() * 9);
      var randall = ("" + rand) + ("" + rand1) + ("" + rand2) + ("" + rand3)
      this.setData({
        phone: getuser.phone,
        aa: "mkf" + randall
      })
      console.log(this.data.phone)
    } else {
      this.setData({
        aa: "请登录、注册"
      })
    }
  },
  shouhuo(){
    var getuser = wx.getStorageSync("user")
    if (getuser){
      wx.navigateTo({
        url: '../dizhi/dizi',
      })
    }else{
      wx.navigateTo({
        url: '../dll/dll',
      })
    }
  },
  dll: function () {
    var getuser = wx.getStorageSync("user")
    if (getuser) {
      return false;
    } else {
      wx.navigateTo({
        url: '../dll/dll',
      })
    }
  },
  qb(){
    var getuser = wx.getStorageSync("user")
    if (getuser){
     wx.navigateTo({
       url: '../dd/dd',
     })
   }else{
      wx.navigateTo({
        url: '../dll/dll',
      })
   }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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