// pages/mineAbout/resume/resume.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 输入框
        value_realName: '',
        value_Phone:'',
        // ——————————————————————-
         // 性别选择器
         radio: '1',
         // ——————————————————————-
        
    },
    // 真实姓名
    onChange_realName(event) {
      // event.detail 为当前输入的值
      this.setData({
        value_realName:event.detail
      })
      console.log(event.detail);
    },
    // 手机号
    onChange_Phone(event) {
      // event.detail 为当前输入的值
      this.setData({
        value_Phone:event.detail
      })
      console.log(event.detail);
    },
// 性别选择器
    onChange_pick(event) {
      console.log(event)
      this.setData({
        radio: event.detail,
      });
    },
  
    // ——————————————————————————————————————
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