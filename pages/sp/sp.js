// pages/sp/sp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sppp:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var spi = wx.getStorageSync("sp2")
    // this.setData({
    //   spi:spi
    // })
    var id = options.id
    console.log(options.id)
    
    wx.request({
      url: 'http://localhost:3000/sppp?id=' + options.id,
      method: "GET",
      dataType: "json",
      success: (res) => {
        this.setData({
          sppp: res.data[0]
        })
      }
    })
    
  },
  jiajia(){
    var spo=this.data.sppp
    var id=spo.id
    var nuu = spo.numm
    var spe = wx.getStorageSync("sp1")
    var spi = wx.getStorageSync("sp2")
    console.log(spi)
   
    var ck=[]
    // if (spe) {
    //   for (var i = 0; i < spe.length; i++) {
    //     ck.push(spe[i].id)
    //   }
    //   if (ck.includes(id)) {
    //     for (var i = 0; i < spe.length; i++) {
    //       if (spe[i].id == id) {
    //         spe[i].numm += 1
    //         wx.setStorageSync("sp2", spe);
    //       }
    //     }
    //   } else {
    //     spe.push(spo)
    //     wx.setStorageSync("sp2", spe);
    //   }
    // } else {
    //   wx.setStorageSync("sp2", spo);
    // }

    if (spi){
      var spi = wx.getStorageSync("sp2")
      var spo = this.data.sppp
      
      var ckId = []
      for (var i = 0; i < spi.length; i++) {
        ckId.push(spi[i].id)
      }
      console.log(ckId)
      if (ckId.includes(id)){
        console.log(1)
        for (var i = 0; i < spi.length;i++){
          if (spi[i].id==id){
            spi[i].numm+=1
            this.setData({
              asd: spi[i].numm,
             spi:spi
            })
            
            wx.setStorageSync("sp2", spi);
          }
        }
        
      }else{
        spi.push(spo)
        wx.setStorageSync("sp2", spi);
      }
    }else{
      var d=[]
      d.push(spo)
      var spi = wx.setStorageSync("sp2", d);
    }
    
    wx.showToast({
      title: '加入成功',
      duration: 2000,
      icon: "none"
    });
   
  },
  js(){
    var getuser = wx.getStorageSync("user")
    if (getuser) {
      var oiu = this.data.spi
      var idd = this.data.sppp.id
      console.log(idd)
      var b = []
      for (var i = 0; i < oiu.length; i++) {
        if (oiu[i].id == idd) {
          b.push(oiu[i])
        }
      }
      wx.setStorageSync("dd", b);
      this.setData({
        asd: b.numm
      })
      wx.navigateTo({
        url: '/pages/ddxq/ddxq'
      })
    }else{
      wx.navigateTo({
        url: '/pages/dll/dll'
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