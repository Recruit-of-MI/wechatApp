// pages/PositionAbout/fjjz/fjjz.js
import request from '../../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 附近热招
      jobList:[],
      jobKeyWord:''
      
    },

    /**
     * 生命周期函数--监听页面加载
     */


   
    onLoad: function (options) {
        let jobKeyWord = options.jobKeyWord
        this.setData({
          jobKeyWord
        })
        this.getSearchList()
    },

    //获取搜索内容
    async getSearchList(){
      let jobKeyWord = this.data.jobKeyWord
      let jobList = await request('/recruit/searchJob',{jobKeyWord})
      this.setData({
        jobList
      })
    },

     // 前往工作详情页面
     tojobDetail(event){
      let {job} = event.currentTarget.dataset;
      console.log(job.jobID)
      wx.navigateTo({
        url: '/pages/jobDetail/jobDetail?jobID=' + job.jobID
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