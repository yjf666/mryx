// pages/zhuce/zhuce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phonee:""
  },
  // 获取手机号
  seavUsertell5: function (e) {
    this.setData({
      phonee: e.detail.value,
    })
    
  },
  seavUsertell6: function (e) {
    this.setData({
      yzmm: e.detail.value,
    })

  },
  // 获取验证码
  add:function(){
    var that=this
    var rand = parseInt(Math.random() * 9);
    var rand1 = parseInt(Math.random() * 9);
    var rand2 = parseInt(Math.random() * 9);
    var rand3 = parseInt(Math.random() * 9);
    var randall = ("" + rand) + ("" + rand1) + ("" + rand2) + ("" + rand3)
    wx.showModal({
      title: '验证码',
      content: randall,
      text: 'center',
    })
    that.setData({
      yzm: randall
    })
  },
  // 点击确定检测手机号
  yes:function(){
    
    var that=this
    if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(this.data.phonee))) {
      console.log(this.data.phonee)
      wx.showToast({
        title: '手机号错误',
        duration: 2000,
        icon: "none"
      });
    }else{
      if (this.data.phonee != null && this.data.yzmm == this.data.yzm && this.data.yzmm != null) {
        console.log(this.data.phonee)

        var obj={}
        obj.phone=this.data.phonee
        var setuser=wx.setStorageSync("user", obj)
        var getuser=wx.getStorageSync("user")
       wx.switchTab({
         url: '/pages/self/self',
       })
        if (this.data.phonee = null) {
          wx.showToast({
            title: '手机号不能为空',
            duration: 2000,
            icon: "none"
          });
        } 
        wx.showToast({
          title: '登录成功',
          duration: 2000,
          icon: "none"
        });
      } else {
        wx.showToast({
          title: '验证码错误',
          duration: 2000,
          icon: "none"
        });
      }
    }
   
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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