// pages/dizhi/dizi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  


    var arr = wx.getStorageSync('addressList') || [];
    
    // 更新数据  
    this.setData({
      addressList: arr
    });

  },
  // 点击
  
  // 删除
  delAddress: function (e) {
    var index = e.target.dataset.id
    console.log(index)
    this.data.addressList.splice(index, 1);
    // 更新data数据对象  
    if (this.data.addressList.length > 0) {
      this.setData({
        addressList: this.data.addressList
      })
      wx.setStorageSync('addressList', this.data.addressList);
    } else {
      this.setData({
        addressList: this.data.addressList
      })
      wx.setStorageSync('addressList', []);
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  xzz(){
    wx.redirectTo({
      url: '../address/address',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
   
    // wx.getStorage({
    //   key: 'addressList',
    //   success(res) {
    //     self.setData({
    //       addressList: res.data,
    //       hasAddress: true
    //     })
    //   }
    // })
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