const app = getApp();
var inputVal = '';
var imageScr = '';
var flag = false;
var msgList = [];
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;

import request from '../../utils/request'
import upload from '../../utils/upload'
/**
 * 初始化数据
 */
function initData(that) {
  inputVal = '',

  //  msgList = [{
  //     speaker: 'server',
  //     contentType: 'text',
  //     content: '请介绍一下你自己'
  //   },
  //   {
  //     speaker: 'customer',
  //     contentType: 'text',
  //     content: '我是张三...'
  //   },
  //   {
  //     speaker: 'server',
  //     contentType: 'image',
  //     content: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202007%2F04%2F20200704075609_ejqjf.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653358414&t=cda3c92141ea55cacab409b10a5bf09f'
  //   }
  // ]
  that.setData({
    // msgList,
    inputVal
  })
}

/**
 * 计算msg总高度
 */
// function calScrollHeight(that, keyHeight) {
//   var query = wx.createSelectorQuery();
//   query.select('.scrollMsg').boundingClientRect(function(rect) {
//   }).exec();
// }

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: '100vh',
    inputBottom: 0,
    msgList:[],
    avatarUrl:'',
    otherID:'',
    openId:'',
    otherUserList:[],
  },

    //聊天消息获取
    async getMsgList(){
      let otherId = this.data.otherID
      let openId = wx.getStorageSync('openId')
      let msgList = await request('/message/getChat',{userID: openId,otherID: otherId})
      this.setData({
        msgList
      })
    },
    //聊天消息上传
    async uploadMsg(content){
     
      let openId = wx.getStorageSync('openId')
      let userInfo = wx.getStorageSync('userinfo')
      let otherID = this.data.otherID
      let otherUserList = this.data.otherUserList
     // let 
      //对方ID
      console.log(flag)
      if(flag == false){
        await upload('/message/createChat',{userID:openId,otherID:otherID,userName:userInfo.nickName,avatarUrl:userInfo.avatarUrl,otherUserName:otherUserList.userName,otherAvatarUrl:otherUserList.avatarUrl,speaker:openId,contentType:'text',content:content})
        console.log("上传成功")
      }else if(flag == true){
        await upload('/message/createChat',{userID:openId,otherID:otherID,userName:userInfo.nickName,avatarUrl:userInfo.avatarUrl,otherUserName:otherUserList.userName,otherAvatarUrl:otherUserList.avatarUrl,speaker:openId,contentType:'image',content:imageScr})
        console.log(imageScr)
      }
      
    },

    //对方信息获取
    async getOtherUser(){
      let otherID = this.data.otherID
      let otherUserList = await request('/user/getUser',{userID:otherID})
      this.setData({
        otherUserList
      })
      wx.setNavigationBarTitle({

        title: otherUserList.userName
        
        })
    },


    // 选择图片
    selectImage(){
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          imageScr = res.tempFilePaths[0]
          flag = true;
          console.log(flag)
          console.log(imageScr)
        }
      })
    },
    //图片预览
    showPic: function (event) {
      console.log(event.currentTarget.dataset.index)
      // 预览图片，放大预览
      wx.previewImage({
          urls: [msgList[event.currentTarget.dataset.index].content],
      })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    let openId = wx.getStorageSync('openId')
    this.setData({
      openId
    })
    let otherID = options.otherID
    this.setData({
      otherID
    })
    let userInfo = wx.getStorageSync('userinfo')
    let avatarUrl = userInfo.avatarUrl
    this.setData({
      avatarUrl
    })
    initData(this);
    // this.setData({
    //   cusHeadIcon: app.globalData.userInfo.avatarUrl,
    // });
    this.getMsgList()
    this.getOtherUser()
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 获取聚焦
   */
  focus: function(e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })
    //计算msg高度
    // calScrollHeight(this, keyHeight);

  },

  //失去聚焦(软键盘消失)
  blur: function(e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })

  },

  /**
   * 发送点击监听
   */
  sendClick: function(e) {
   
    if(flag==true){
      msgList.push({
        speaker: 'customer',
        contentType: 'image',
        content: imageScr
      })
      this.setData({
        msgList,
      });
    }else{
      msgList.push({
        speaker: 'customer',
        contentType: 'text',
        content: e.detail.value
      })
      inputVal = '';
      this.setData({
        msgList,
        inputVal
      });
    }
    this.uploadMsg(e.detail.value)
    this.getMsgList()
    this.onLoad()
    flag = false
    


  },

  /**
   * 退回上一页
   */
  toBackClick: function() {
    wx.navigateBack({})
  }

})
