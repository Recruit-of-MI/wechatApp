// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: '',
        hotSearchList:['货车司机','销售经理','送餐员','配送员','驾驶员'],
        // 历史记录
        historyList:[],
    },
    onChange(e) {
        this.setData({
          value: e.detail,
        });
      },
      onSearch() {
        console.log('搜索1' + this.data.value)
      },
      onClick() {
        // 将搜索的关键字添加到搜索历史记录中
        let {value, historyList} = this.data;
        if(historyList.length>7){
          if(value.length>0){
            if(historyList.indexOf(value) !== -1){
              historyList.splice(historyList.indexOf(value), 1)
            }
            historyList.splice(7,1)
            historyList.unshift(value)
            this.setData({
                historyList
            })
            wx.setStorageSync('searchHistory', historyList)
          }
          
        }else{
          if(value.length>0){
            if(historyList.indexOf(value) !== -1){
              historyList.splice(historyList.indexOf(value), 1)
            }
            historyList.unshift(value)
            this.setData({
                historyList
            })
            wx.setStorageSync('searchHistory', historyList)
          }
          
        }
        wx.navigateTo({
          url: '/pages/PositionAbout/searchDetail/searchDetail',
        })
      
      },

       //获取本地历史记录
    getSearchHistory(){
      let historyList = wx.getStorageSync('searchHistory')
      if(historyList){
          this.setData({
              historyList
          })
      }
  },
  
      // 删除历史记录
      delete_history(){
        wx.showModal({
          title: '提示',
          content: '确认删除吗？',
          success: (res) =>  {
            if (res.confirm) {
              //清空data中historyList
              this.setData({
                  historyList: []
              })
              //移除本地历史记录缓存
              wx.removeStorageSync('searchHistory')
            } else if (res.cancel) {
            }
          }
        })
      },
      historyClick(event){
        let index = event.currentTarget.dataset;
        console.log(index.index)
        this.setData({
            value:this.data.historyList[index.index]
        })
      },

      hotClick(event){
        let index = event.currentTarget.dataset;
        console.log(index.index)
        this.setData({
            value:this.data.hotSearchList[index.index]
        })
      },
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
     
      this.getSearchHistory()
     
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