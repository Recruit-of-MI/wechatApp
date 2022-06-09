// pages/mineAbout/collection/collection.js
import request from '../../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      jobList:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.getJobList()

    },

    // 前往工作详情页面
    tojobDetail(event){
      let {job} = event.currentTarget.dataset;
        wx.navigateTo({
          url: '/pages/jobDetail/jobDetail?jobID=' + job.jobID ,
        })
    },
    //获取收藏工作列表
    async getJobList(){
      let openId = wx.getStorageSync('openId')
      let jobList = await request('/recruit/getCollect',{userID:openId})
      this.setData({
        jobList
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