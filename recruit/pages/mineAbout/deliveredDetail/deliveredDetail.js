// pages/mineAbout/deliveredDetail/deliveredDetail.js
import request from '../../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      jobID:'',
      jobDetailList:[]
    },


    // 前往聊天页面
    tojobChat(){
        wx.navigateTo({
          url: '/pages/jobChat/jobChat',
        })
    },

      // 获取工作详情
      async getJobDetailList(JobID){
        let openId = wx.getStorageSync('openId')
        let jobDetailList = await request('/recruit/getSpecificJobOfUser',{JobID:JobID,userID:openId})
        this.setData({
          jobDetailList
        })
      },
      tojobChat(){
        let otherID = this.data.jobDetailList.job.userID
        wx.navigateTo({
          url: '/pages/jobChat/jobChat?otherID=' + otherID
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let jobID = options.jobID
      this.setData({
        jobID
      })
      this.getJobDetailList(jobID)
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