// pages/mineAbout/published/published.js
import request from '../../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      publishList:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.getPublishList()
    },

    // 前往已发布详情页面
    publishedDetail(){
        wx.navigateTo({
          url: '/pages/mineAbout/publishedDetail/publishedDetail',
        })
    },

    //获取已发布列表
    async getPublishList(){
      let publishList = await request('/recruit/getSend',{userID:"123455a"})
      this.setData({
        publishList
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