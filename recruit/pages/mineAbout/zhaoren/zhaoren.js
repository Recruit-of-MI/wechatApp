// pages/mineAbout/zhaoren/zhaoren.js
import upload from '../../../utils/upload'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value_title:'',
        value_position:'',
        value_lowsalary:'',
        value_highsalary:'',
        value_welfare1:'',
        value_welfare2:'',
        value_welfare3:'',
        value_welfare4:'',
        value_welfare5:'',
        value_label1:'',
        value_label2:'',
        value_label3:'',
        value_description:'',
        value_education:'',
        value_mode:'',
        value_region:'',
        value_place:'',
        value_corporateName:'',
        value_number:'',
    },

    onChange_title(event) {
      this.setData({
        value_title:event.detail
      })
    },
    onChange_position(event) {
        this.setData({
          value_position:event.detail
        })
      },
      onChange_lowsalary(event) {
        this.setData({
          value_lowsalary:event.detail
        })

      },
      onChange_highsalary(event) {
        this.setData({
          value_highsalary:event.detail
        })
      },
      // ----------------------------------福利
      onChange_welfare1(event) {
        this.setData({
          value_welfare1:event.detail
        })
      },
      onChange_welfare2(event) {
        this.setData({
          value_welfare2:event.detail
        })
      },
      onChange_welfare3(event) {
        this.setData({
          value_welfare3:event.detail
        })
      },
      onChange_welfare4(event) {
        this.setData({
          value_welfare4:event.detail
        })
      },
      onChange_welfare5(event) {
        this.setData({
          value_welfare5:event.detail
        })
      },
      // ----------------------------福利
      onChange_description(event) {
        this.setData({
          value_description:event.detail
        })
      },
      onChange_education(event) {
        this.setData({
          value_education:event.detail
        })
      },
      onChange_mode(event) {
        this.setData({
          value_mode:event.detail
        })
      },
      onChange_region(event) {
        this.setData({
          value_region:event.detail
        })
      },
      onChange_place(event) {
        this.setData({
          value_place:event.detail
        })
      },
      onChange_corporateName(event) {
        this.setData({
          value_corporateName:event.detail
        })
      },
      
      // 标签
      onChange_label1(event) {
        this.setData({
          value_label1:event.detail
        })
      },
      onChange_label2(event) {
        this.setData({
          value_label2:event.detail
        })
      },
      onChange_label3(event) {
        this.setData({
          value_label3:event.detail
        })
      },
      onChange_number(event) {
        this.setData({
          value_number:event.detail
        })
      },

      //完成工作创建
      async createJob(){
        let openId = wx.getStorageSync('openId')
        let userInfo = wx.getStorageSync('userinfo')
        let {value_title,value_position,value_lowsalary,value_highsalary,value_welfare1,value_welfare2,value_welfare3,value_welfare4,value_welfare5,value_label1,value_label2,value_label3, value_description, value_education,value_mode,value_region,value_place,value_corporateName,value_number} = this.data
        await upload('/recruit/createJob',{recruitPosition:value_position,jobTitle:value_title,maxWages:value_highsalary,minWages:value_lowsalary,region:value_region,specificLocation:value_place,corporateName:value_corporateName,minEducation:value_education,mode:value_mode,userID:openId,publisherName:userInfo.nickName,publisherAvatarUrl:userInfo.avatarUrl,jobDescription:value_description,recruitNum:value_number,welfare1:value_welfare1,welfare2:value_welfare2,welfare3:value_welfare3,welfare4:value_welfare4,welfare5:value_welfare5,label1:value_label1,label2:value_label2,label3:value_label3})
        wx.reLaunch({
          url: '/pages/mine/mine',
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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