//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    curIndex:0,
    curNav: 0,
    shows:false,
    num:1
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
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


    var sppp = wx.getStorageSync("sp1")
    var spp = wx.getStorageSync("sp2")
   
    
    if (sppp){
        this.setData({
          sppp: sppp,
          spppp: sppp,
          shows: true
        })
      }else{
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
      wx.request({
      url: 'http://localhost:3000/sppp?categoryId=' + options.categoryId + "&_page=" + this.data.num + "&_limit=10",
      data: "",
      header: {},
      method: "GET",
      dataType: "json",
      responseType: "text",
      success: (res) => {
        this.setData({
          spppp: res.data,
        })
      }
    })
    }
    
    

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  },
  clickk(e) {
    var id = e.currentTarget.dataset.index;
    this.setData({
      curNav: id,
      curIndex: id
    })
    this._handleScroll(id);

  
    var mryx = this.data.mryx
    var list = mryx[id].titlelist

    this.setData({
      list: list
    })
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
        scrollLeft: res[2].scrollLeft + res[0].left + res[0].width / 2 - res[1].width / 2
      });
    });
  },
  //加
  addCount(e) {
    var index = e.currentTarget.dataset.index;
    var spp = this.data.sppp
    
   var numm=spp[index].numm
    var a = []
    numm = numm + 1
    spp[index].numm=numm
   if(numm>0){
     this.setData({
       shows:true,
     })
   }else{
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
    var a=[]
    if (numm<=0){
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


  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.data.num++
    wx.request({
      url: 'http://localhost:3000/sppp?categoryId=' + this.data.categoryId + "&_page=" + this.data.num + "&_limit=10",
      method: "GET",
      dataType: "json",
      success: (res) => {
        if (this.data.num == 1) {
          this.setData({
            spppp: res.data
          })
        } else {
          this.setData({
            spppp: this.data.spppp.concat(res.data)
          })
        }
      }
    })
  },
  toaddress(){
    wx.navigateTo({
      url: '../location/location'
    })
  }
})
