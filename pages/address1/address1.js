// page/component/new-pages/user/address/address.js
var addressList = null;
Page({
  data: {

  },
  onLoad() {
  },
 
  formSubmit(e) {
    const value = e.detail.value;
    var add = value.detail
    var number = value.number
    var name = value.name
    var phone = value.phone


    if (value.name && value.phone && value.detail && value.number) {
      var arr = wx.getStorageSync('addressList') || [];
      console.log("arr,{}", arr);
      addressList = {
        add: add,
        number: number,
        name: name,
        phone: phone
      }
      arr.push(addressList);
      wx.setStorageSync('addressList', arr);
      wx.redirectTo({
        url: '/pages/spdz/spdz',
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请填写完整资料',
        showCancel: false
      })
    }
  }
})
