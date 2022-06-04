// pages/jobDetail/jobDetail.js
import request from '../../utils/request'
import upload from '../../utils/upload'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      jobDetailList:[],
      isagree:false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      
      let jobID = options.jobID
      this.getJobDetailList(jobID)
      this.getIsagree(jobID)

    },

    //申请聊天


    // 前往聊天页面
    async tojobChat(){
        let userID = wx.getStorageSync('openId')
        let otherID = this.data.jobDetailList.job.userID
        let otherAvatarUrl = this.data.jobDetailList.job.publisherAvatarUrl
        let otherUserName = this.data.jobDetailList.job.publisherName
        let userInfo = wx.getStorageSync('userinfo')

        await upload('/message/createApply',{userID,otherID,otherAvatarUrl,otherUserName,latestMessage:''})
        await upload('/message/createRecruit',{userID:otherID,otherID:userID,otherAvatarUrl:userInfo.avatarUrl,otherUserName:userInfo.nickName,latestMessage:''})
        wx.reLaunch({
          url: '/pages/news/news',
        })
    },

    // 获取工作详情
    async getJobDetailList(JobID){
      let jobDetailList = await request('/recruit/getSpecificJobOfUser',{JobID:JobID,userID:'123455a'})
      this.setData({
        jobDetailList
      })
    },
    //查看是否收藏
    async getIsagree(jobID){
      let agreeList = await request('/recruit/getCollect',{userID:'123456a',jobID})
      if(agreeList){
        this.setData({
          isagree:true
        })
      }
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