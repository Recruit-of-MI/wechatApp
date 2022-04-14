// pages/position/position.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: '',
    },
    onChange(e) {
        this.setData({
          value: e.detail,
        });
      },
      onSearch() {
        Toast('搜索' + this.data.value);
      },
      onClick() {
        Toast('搜索' + this.data.value);
      },

      
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    //前往定位导航页面
    toNavigation(){
      wx.navigateTo({
        url: '/pages/PositionAbout/navigation/navigation',
      })
    },

    //前往搜索界面
    toSearch(){
      wx.navigateTo({
        url: '/pages/PositionAbout/search/search',
      })
    },

    // 前往工作详情页面
    tojobDetail(){
      wx.navigateTo({
        url: '/pages/jobDetail/jobDetail',
      })
    },

    //前往附近急招页面
    toFjjz(){
      wx.navigateTo({
        url: '/pages/PositionAbout/fjjz/fjjz',
      })
    },
    // 前往名企专区
    toMqzq(){
      wx.navigateTo({
        url: '/pages/PositionAbout/mqzq/mqzq',
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