// pages/dd/dd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total: 0,
    nuu:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  getTotalPrice() {
    var sp = this.data.jie;
console.log(sp)
    var total = 0;
    var nuu=0;
    for (let i = 0; i < sp.length; i++) {
      total = sp[i].numm * sp[i].price;
      nuu+=sp[i].numm
    }
    this.setData({
      total: total
     
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var getdid = wx.getStorageSync("did");
    var awe = getdid.reverse()
    this.setData({
      jie: awe
      
    })
    this.getTotalPrice();
  },
  delAddress: function (e) {
    var index = e.currentTarget.dataset.id
    console.log(index)
    this.data.jie.splice(index, 1);
    // 更新data数据对象  
    if (this.data.jie.length > 0) {
      this.setData({
        jie: this.data.jie
      })
      wx.setStorageSync('did', this.data.jie);
    } else {
      this.setData({
        jie: this.data.jie
      })
      wx.setStorageSync('did', []);
    }
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