// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpuVal: "",//input框内值
    listarr: [],//创建数组
    keydown: 0,
    input_value:"",
    shows: false
  },
  inputvalue(e){
    this.setData({
      inputVal: e.detail.value
    })
    
  },
  seaarch(){
    // 浏览记录
    var that = this
    var arr = this.data.listarr
   
    if (this.data.input_value==""){
      let arrnum = arr.indexOf(this.data.inputVal);
      if (arrnum != -1){
        arr.splice(arrnum,1)
        arr.unshift(this.data.inputVal);
     }else{
        arr.unshift(this.data.inputVal);
    }
    }else{
      let arr_num = arr.indexOf(this.data.input_value);
      if (arr_num != -1) {
        arr.splice(arr_num, 1)
        arr.unshift(this.data.input_value);
      } else {
        arr.unshift(this.data.input_value);
      }
    }
    this.setData({
      input_value: '',
    })

    wx.setStorage({
      key: "list_arr",
      data: arr
    })

    wx.getStorage({
      key: 'list_arr',
      success: function (res) {
        that.setData({
          listarr: res.data
        })
      }
    })
    // 商品列表

    var headlist = this.data.headlist
    var inputVal = JSON.stringify(this.data.inputVal)
    var arr = inputVal.split("")
    arr.pop()
    arr.shift()
   
    var titName = []
    var asd=[]
    for (var i = 0; i < headlist.length;i++){
      titName.push(headlist[i])
      var name = titName[i].title
     for(var j=0;j<arr.length;j++){
       if (name.search(arr[j]) != -1){
         asd.push(titName[i])
       }
     }
    }
    function qc(aa) {
      var temp = []
      for (let i = 0; i < aa.length; i++) {
        if (temp.indexOf(aa[i]) == -1) {
          temp.push(aa[i]);
        }
      }
      return temp
    }
  var asa=qc(asd)
  console.log(asa)
  this.setData({
    asa:asa
  })
  },
  delete_list: function () {
    //清除当前数据
    this.setData({
      listarr: []
    });
    //清除缓存数据
    wx.removeStorage({
      key: 'list_arr'
    })
  },
  this_value(e){
    let value = e.currentTarget.dataset.text;
    this.setData({
      input_value: value,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:3000/sppp',
      data: "",
      header: {},
      method: "GET",
      dataType: "json",
      responseType: "text",
      success: (res) => {
        this.setData({
          headlist: res.data
        })
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  addCount(e) {
    console.log(1)
    var index = e.currentTarget.dataset.index;
    var spp = this.data.headlist

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
      headlist: sppp
      
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