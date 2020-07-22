// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSelected:false,
    curIndex:0,
    curNav:0,
    cur:0,
    shows:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      categoryId: options.categoryId
    })

    wx.request({
      url: 'http://localhost:3000/mryx',
      data: "",
      header: {},
      method: "GET",
      dataType: "json",
      responseType: "text",
      success: (res) => {
        this.setData({
          mryx: res.data, 
        })
      }
      
    })
    console.log(this.data)

    var sppp = wx.getStorageSync("sp1")
    if (sppp) {
      this.setData({
        sppp: sppp,
        spppp: sppp,
        shows: true
      })
    } else {
      this.setData({
        shows: false
      })
      wx.request({
        url: 'http://localhost:3000/sppp',
        data: "",
        header: {},
        method: "GET",
        dataType: "json",
        responseType: "text",
        success: (res) => {
          this.setData({
            sppp: res.data,
          })
        }
      })
    }
    
  },
  clickk(e){
    var id = e.currentTarget.dataset.index;
      this.setData({
        curNav: id,
        curIndex: id
      })
    this._handleScroll(id);
    

    var mryx=this.data.mryx
    var list = mryx[id].titlelist
    
    this.setData({
      list: list
    })
  },
  ccc(e){
    var id = e.currentTarget.dataset.index;
    console.log(id)

  },
  //自动滚动
  _handleScroll(selectedId) {
    var _this = this;
    
    var query = wx.createSelectorQuery();//创建节点查询器
    query.select('#item-' + selectedId).boundingClientRect();//选择id='#item-' + selectedId的节点，获取节点位置信息的查询请求
    query.select('#scroll-view').boundingClientRect();//获取滑块的位置信息
    //获取滚动位置
    query.select('#scroll-view').scrollOffset();//获取页面滑动位置的查询请求
    query.exec(function (res) {
      // console.log("res:",res)
      _this.setData({
        scrollTop: res[2].scrollTop + res[0].top + res[0].height / 2 - res[1].height / 2
      });
    });
  },
  //加
  addCount(e) {
    var index = e.currentTarget.dataset.index;
    var spp = this.data.sppp

    var numm = spp[index].numm
    var a = []
    numm = numm + 1
    spp[index].numm = numm
    if (numm > 0) {
      this.setData({
        shows: true,
      })
    } else {
      this.setData({
        shows: false
      })
    }
    var setsppp = wx.setStorageSync("sp1", spp);
    var sppp = wx.getStorageSync("sp1")
    for (var e = 0; e < spp.length; e++) {
      if (spp[e].numm > 0) {
        a.push(spp[e])
      }
    }
    var sp2 = wx.setStorageSync("sp2", a);
    this.setData({
      sppp: sppp,
      spppp: sppp
    })


  },
  /**
     * 绑定减数量事件
     */
  minusCount(e) {
    var index = e.currentTarget.dataset.index;
    var spp = this.data.sppp;
    var numm = spp[index].numm
    var a = []
    if (numm <= 0) {
      return false
      this.setData({
        shows: false
      })
    }
    numm = numm - 1;
    spp[index].numm = numm
    var setsppp = wx.setStorageSync("sp1", spp);
    var sppp = wx.getStorageSync("sp1")
    for (var e = 0; e < spp.length; e++) {
      if (spp[e].numm > 0) {
        a.push(spp[e])
      }
    }
    var sp2 = wx.setStorageSync("sp2", a);
    this.setData({
      sppp: sppp,
      spppp: sppp
    })
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