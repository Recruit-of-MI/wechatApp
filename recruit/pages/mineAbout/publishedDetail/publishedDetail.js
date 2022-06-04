// pages/mineAbout/publishedDetail/publishedDetail.js
import request from '../../../utils/request'
import upgrate from '../../../utils/upgrate'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      jobID:'',
      userList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let jobID = options.jobID
      console.log(jobID)
      this.setData({
        jobID
      })
      this.getDeliveredForJob(jobID)
    },

   async getDeliveredForJob(jobID){
      let userList = await request('/recruit/getDeliveredForJob',{jobID})
      this.setData({
        userList
      })
   },

    //拒绝
    async refuse(event){
      let jobID = this.data.jobID
      let {index} = event.currentTarget.dataset;
      let userID = this.data.userList[index].user.userID
      await upgrate('/recruit/disagreeDeliver',{jobID,userID})
    },

    //接收
    async accept(event){
      let jobID = this.data.jobID
      let {index} = event.currentTarget.dataset;
      let userID = this.data.userList[index].user.userID
      await upgrate('/recruit/agreeDeliver',{jobID,userID})
    },
     // 前往聊天页面
     tojobChat(event){
      let {index} = event.currentTarget.dataset;
       let otherID = this.data.userList[index].user.userID
      wx.navigateTo({
        url: '/pages/jobChat/jobChat?otherID=' +  otherID
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