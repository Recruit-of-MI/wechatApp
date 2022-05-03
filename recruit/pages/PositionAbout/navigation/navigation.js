// pages/navigation/navigation.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentPlace:'',
        placeList1:['江干区','上城区','临安区','拱墅区','西湖区'],
        placeList2:['滨江区','萧山区','余杭区','富阳区'],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let currentPlace = wx.getStorageSync('currentPlace')
        this.setData({
            currentPlace
        })
    },

    // 选择地点
    toSelcetPlace1(event){
        let index = event.currentTarget.dataset;
        console.log(index.index)
        this.setData({
            currentPlace:this.data.placeList1[index.index]
        })
        wx.setStorageSync('currentPlace', this.data.currentPlace)
        
    },
    toSelcetPlace2(event){
        let index = event.currentTarget.dataset;
        console.log(index.index)
        this.setData({
            currentPlace:this.data.placeList2[index.index]
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