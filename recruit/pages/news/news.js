// pages/news/news.js
import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
   

    data:{
      isChecked1:true,
      isChecked2:false,
      //   应聘消息列表
      applyList:[],
      //   面试消息列表
      interviewList:[],
    },
    /**
     * 生命周期函数--监听页面加载
     */

    //  获取应聘消息列表
    async getApplyList(){
        let applyList = await request('/message/getApply',{userID:"deliver1"})
        this.setData({
            applyList
        })
    },
    //  获取面试消息列表
    async getInterviewList(){
        let interviewList = await request('/message/getRecruit',{userID:"123455a"})
        this.setData({
            interviewList
        })
    },



    onLoad: function (options) {
        this.getApplyList()
        this.getInterviewList()
    },
    // 前往聊天页面
    tojobChat(){
        wx.navigateTo({
          url: '/pages/jobChat/jobChat',
        })
    },

    messageBind(){
        this.setData({
            isChecked1:true,
            isChecked2:false
        })
    },
    interviewBind(){
        this.setData({
            isChecked1:false,
            isChecked2:true
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
        // 再次进入页面首选“消息”标签
        // this.setData({
        //     isChecked1:true,
        //     isChecked2:false
        // })
        this.getApplyList()
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