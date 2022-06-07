// pages/mineAbout/delivered/delivered.js
import request from '../../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      deliverList:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.getDeliverList()

    },

    // 前往已投递详情
    deliveredDetail(event){
      let {job} = event.currentTarget.dataset;
        wx.navigateTo({
          url: '/pages/mineAbout/deliveredDetail/deliveredDetail?jobID=' + job.job.jobID ,
        })
    },
    //获取已投递列表
    async getDeliverList(){
      let openId = wx.getStorageSync('openId')
      let deliverList = await request('/recruit/getDelivered',{userID:openId})
      this.setData({
        deliverList
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