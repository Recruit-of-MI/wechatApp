// pages/mine/mine.js
import config from '../../utils/config'
import upload from '../../utils/upload'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 获取微信用户个人信息
        userInfo: {},
        openId:'',
        hasUserInfo: false,
        canIUseGetUserProfile: false,
        // ————————————————————————————

    },
    // 前往浏览历史页面
    toHistory(){
      wx.navigateTo({
        url: '/pages/mineAbout/history/history',
      })
    },
    // 前往招人页面
    toZhaoren(){
      wx.navigateTo({
        url: '/pages/mineAbout/zhaoren/zhaoren',
      })
    },
    // 前往设置页面
    toSetting(){
      wx.navigateTo({
        url: '/pages/mineAbout/setting/setting',
      })
    },
    // 前面我的收藏页面
    toCollection(){
      wx.navigateTo({
        url: '/pages/mineAbout/collection/collection',
      })
    },
    // 前往已投递页面
    toDelivered(){
      wx.navigateTo({
        url: '/pages/mineAbout/delivered/delivered',
      })
    },
    // 前往已发布页面
    toPublished(){
      wx.navigateTo({
        url: '/pages/mineAbout/published/published',
      })
    },

    // 前往简历页面
    toResume(){
      wx.navigateTo({
        url: '/pages/mineAbout/resume/resume',
      })
    },
    // 前往消息页面
    toNews(){
      wx.reLaunch({
        url: '/pages/news/news',
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        // 获取微信用户信息
        
        if (wx.getUserProfile) {
            this.setData({
              canIUseGetUserProfile: true
            })
          }
          let userInfo = wx.getStorageSync('userinfo')
          console.log("userInfo:")
          console.log(userInfo)
          if(userInfo){
            let openId = wx.getStorageSync('openId')
            this.uploadUserInfo(openId,userInfo.nickName,userInfo.avatarUrl)
            console.log("上传成功")
            
          }
        //   ——————————————————————————————

    },

    //上传微信信息
    async uploadUserInfo(userID,userName,avatarUrl){
      await upload('/user/createUser',{userID,userName,avatarUrl})
    },

    // 获取微信用户信息
    getUserinfo(e){
      let userinfo = wx.getStorageSync('userinfo')
        if(!userinfo){
          // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
           // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
           wx.getUserProfile({
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
              wx.setStorageSync('userinfo', res.userInfo)
              this.setData({
                userInfo: res.userInfo,
                hasUserInfo: true
              })
              wx.login({
               //获取code
               success: function (res) {
                 var code = res.code; //返回code
                 wx.request({
                   url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + config.appId + '&secret=' + config.secret + '&js_code=' + code + '&grant_type=authorization_code',
                   data: {},
                   header: {
                     'content-type': 'json'
                   },
                   success: function (res) {
                     var openid = res.data.openid //返回openid
                     wx.setStorageSync('openId', openid)
                     console.log('openid为' + openid);
                   }
                 })
               }
             })
            }
          })
        }
           },
        //    ————————————————————————————————————————————————————————————————————
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      let userinfo = wx.getStorageSync('userinfo')
      if(userinfo){
        this.setData({
          userInfo:userinfo
        })
      }
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      let userInfo = wx.getStorageSync('userinfo')
      console.log("userInfo:")
      console.log(userInfo)
      if(userInfo){
        let openId = wx.getStorageSync('openId')
        this.uploadUserInfo(openId,userInfo.nickName,userInfo.avatarUrl)
        console.log("上传成功")
      }
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