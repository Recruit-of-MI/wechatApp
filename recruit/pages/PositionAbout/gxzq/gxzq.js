// pages/PositionAbout/gxzq/gxzq.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        var xhrFile = new XMLHttpRequest();
        // 建立连接，第三个参数为同步或异步请求
        xhrFile.open("GET", 'E://test//test.csv', false);
        // method 1
        xhrFile.onload  = function() {
            console.log("success")
            const allText = xhrFile.response;
            callback(allText) 
        }
        xhrFile.send();
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