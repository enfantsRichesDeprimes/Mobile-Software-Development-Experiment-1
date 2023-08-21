// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    image: "../images/20.png" ,
    nickName: "hello!" ,
  },

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res.userInfo.avatarUrl)
        console.log(res.userInfo)
        this.setData({
          image: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName
        })
      }
    })
  },

})
