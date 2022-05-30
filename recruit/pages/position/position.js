// pages/position/position.js
import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      // 当前城市
      currentPlace:'',
      value: '',
      is_select1:false,
      is_select2:false,
      jobList:[],
      
      
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
      this.getJob()
      
    },

    showCurrentPlace(){
      let currentPlace = wx.getStorageSync('currentPlace')
      this.setData({
          currentPlace
      })
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
    tojobDetail(event){
      let {job} = event.currentTarget.dataset;
      console.log(job.jobID)
      wx.navigateTo({
        url: '/pages/jobDetail/jobDetail?jobID=' + job.jobID
      })
    },

    //前往附近急招页面
    toFjjz(){
      wx.navigateTo({
        url: '/pages/PositionAbout/fjjz/fjjz',
      })
    },
    //前往今日急招
    toJrjz(){
      wx.navigateTo({
        url: '/pages/PositionAbout/jrjz/jrjz',
      })
    },
    //前往司机
    toSj(){
      wx.navigateTo({
        url: '/pages/PositionAbout/sj/sj',
      })
    },
     //前往日结专区
     toRjzq(){
      wx.navigateTo({
        url: '/pages/PositionAbout/rjzq/rjzq',
      })
    },
    //前往保安
    toBa(){
      wx.navigateTo({
        url: '/pages/PositionAbout/ba/ba',
      })
    },
    //前往外卖员
    toWmy(){
      wx.navigateTo({
        url: '/pages/PositionAbout/wmy/wmy',
      })
    },
    //前往外卖员
    toJz(){
      wx.navigateTo({
        url: '/pages/PositionAbout/jz/jz',
      })
    },
    //前往食宿话补
    toSshb(){
      wx.navigateTo({
        url: '/pages/PositionAbout/sshb/sshb',
      })
    },
    //前往高薪职位
    toGxzq(){
      wx.navigateTo({
        url: '/pages/PositionAbout/gxzq/gxzq',
      })
    },

    
    // 前往名企专区
    toMqzq(){
      wx.navigateTo({
        url: '/pages/PositionAbout/mqzq/mqzq',
      })
    },

    

    // 点击最新按钮
    zuixinBind(){
      this.setData({
        is_select1:true,
        is_select2:false
      })
    },
    // 点击周边按钮
    zhoubianBind(){
      this.setData({
        is_select2:true,
        is_select1:false
      })
    },
    
    // 获取猜你喜欢页面推荐
    async getJob(){
      let jobList = await request('/recruit/getJob')
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
      this.showCurrentPlace()
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