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
  dian: function (e) {
    var that = this
    const index = e.currentTarget.dataset.index;
    var see = that.data.addressList[index]
    var address = wx.setStorageSync("address", see);
    var getadd = wx.getStorageSync("address");
    console.log(getadd)
    wx.redirectTo({
      url: '/pages/ddxq/ddxq',
    })
    // wx.reLaunch({
    //   url: '/pages/ddxq/ddxq',
    // })
  },
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad();
    const self = this;

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