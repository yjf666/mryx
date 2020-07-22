// pages/ddxq/ddxq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    hasAddress: false,
    total: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var getdd = wx.getStorageSync("dd")
   
    this.setData({
      sp: getdd
    })
    console.log(this.data.sp)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.getTotalPrice();
  },
  // 合计
  getTotalPrice() {
    var sp = this.data.sp;

    var total = 0;
    for (let i = 0; i < sp.length; i++) {
      total += sp[i].numm * sp[i].price;
    }
    this.setData({
      total: total
    })
  },
  // 支付
  toPay() {
    wx.showModal({
      title: '提示',
      content: '内侧阶段，为你买单',
      text: 'center',
      complete() {
        wx.reLaunch({
          url: '/pages/dd/dd',
        })
      }
    })
    var getdd = wx.getStorageSync("dd")
    var getddt = wx.getStorageSync("did")
  
    if (getddt){
      for (var i = 0; i < getdd.length; i++) {
        getddt.push(getdd[i])
      }
     
      var didd = wx.setStorageSync("did", getddt)
    }else{
      var didd = wx.setStorageSync("did", getdd)
    }
    
      
   
    
    wx.removeStorageSync("dd")
    wx.removeStorageSync("sp2")
    wx.removeStorageSync("sp1")
   
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const self = this;
    wx.getStorage({
      key: 'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})