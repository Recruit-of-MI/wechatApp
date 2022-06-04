// pages/mineAbout/resume/resume.js
//var avatarUrl = '';
import upload from '../../../utils/upload'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 输入框
        value_Avatal: '',
        value_realName: '',
        value_Phone:'',
        value_Position:'',
        value_Year: '',
        value_Education:'',
        value_Time:'',
        value_Protect:'',
        // ——————————————————————-
         // 性别选择器
         radio: '1',
         // ——————————————————————-
         is_ok:false,
         option1: [
          { text: '出生年份', value: 'a' },
          { text: '2003年', value: '2003年' },
          { text: '2002年', value: '2002年' },
          { text: '2001年', value: '2001年' },
          { text: '2000年', value: '2000年' },
          { text: '1999年', value: '1999年' },
          { text: '1998年', value: '1998年' },
          { text: '1997年', value: '1997年' },
          { text: '1996年', value: '1996年' },
          { text: '1995年', value: '1995年' },
        ],
        option2: [
          { text: '最高学历', value: 'b' },
          { text: '初中', value: '初中' },
          { text: '高中', value: '高中' },
          { text: '中专', value: '中专' },
          { text: '大专', value: '大专' },
          { text: '本科', value: '本科' },
          { text: '硕士', value: '硕士' },
          { text: '博士', value: '博士' },
        ],
        option3: [
          { text: '工作时间', value: 'c' },
          { text: '0-1年', value: '0-1年' },
          { text: '1-3年', value: '1-3年' },
          { text: '3-5年', value: '3-5年' },
          { text: '3-10年', value: '3-10年' },
          { text: '10年以上', value: '10年以上' },
        ],
        option4: [
          { text: '隐私保护', value: 'd' },
          { text: '所有招聘方', value: '1' },
          { text: '特定招聘方', value: '0' },
        ],
        value1: 'a',
        value2: 'b',
        value3: 'c',
        value4: 'd'        
    },

    // 选择头像
    
    // 出生年份
    change1(event){
      if(event.detail != 'a'){
        this.setData({
          value_Year: event.detail,
        })
      }else{
        this.setData({
          value_Year: '',
        })
      }
    },
    // 最高学历
    change2(event){
      if(event.detail != 'b'){
        this.setData({
          value_Education: event.detail,
        })
      }else{
        this.setData({
          value_Education: '',
        })
      }
    },
    // 工作时间
    change3(event){
      if(event.detail != 'c'){
        this.setData({
          value_Time: event.detail,
        })
      }else{
        this.setData({
          value_Time: '',
        })
      }
    },
    // 隐私保护
    change4(event){
      if(event.detail != 'd'){
        this.setData({
          value_Protect: event.detail,
        })
      }else{
        this.setData({
          value_Protect: '',
        })
      }
    },
    // 真实姓名
    onChange_realName(event) {
      // event.detail 为当前输入的值
      this.setData({
        value_realName:event.detail
      })
      console.log(event.detail);
    },
    // 求职意向
    onChange_Position(event){
      this.setData({
        value_Position:event.detail
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
    // 手机号验证
    checkPhone(){
      if(!phoneNum){
        //提示用户
        wx.showToast({
          title: '手机号为空',
          icon: 'error'
        })
        return;
       }
       //定义正则表达式
       let phoneNumReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
       if(!phoneNumReg.test(phoneNum)){
        wx.showToast({
          title: '手机号格式错误',
          icon: 'error'
        })
        return;
       }
    },
    
// 性别选择器
    onChange_pick(event) {
      console.log(event)
      this.setData({
        radio: event.detail,
      });
    },
   // 选择图片
   selectImage(){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        let avatarUrl = res.tempFilePaths[0]
        console.log(avatarUrl)
        that.setData({
          value_Avatal:avatarUrl
        })
      }
    })
  },
    // 申请确认
    application(){
      let {value_Avatal,value_realName,value_Phone,value_Position,radio,value_Year,value_Education,value_Time,value_Protect} = this.data
      // 手机号验证
      if(!value_Phone){
        //提示用户
        wx.showToast({
          title: '手机号为空',
          icon: 'error'
        })
        this.setData({
          is_ok:false
        })
        return;
       }
       //定义正则表达式
       let phoneNumReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
       if(!phoneNumReg.test(value_Phone)){
        wx.showToast({
          title: '手机号格式错误',
          icon: 'error'
        })
        this.setData({
          is_ok:false
        })
        return;
       }else{
         this.setData({
           is_ok:true
         })
       }
       let resumeList = [{
       avatarUrl:value_Avatal,
       realName: value_realName,
       phoneNum: value_Phone,
       position: value_Position,
       radio: radio,
       brithYear: value_Year,
       education: value_Education,
       workYear: value_Time,
       privacy: value_Protect
       }
       ]
       wx.setStorageSync('resume', resumeList)
       this.uploadResume(value_realName,value_Phone,value_Year,value_Education,value_Time, value_Position,value_Protect)
       wx.reLaunch({
         url: '/pages/mine/mine',
       })
    },
    async uploadResume(a,b,c,d,e,f,g){
      let openId = wx.getStorageSync('openId')
      await upload('/user/createResume',{userID:openId,realName:a,phoneNum:b,birthYear:c,education:d,workYear:e,intentionJob:f,privacy:g})
      console.log("简历更新成功")
    },

    // ——————————————————————————————————————
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let resumeList = wx.getStorageSync('resume')
      this.setData({
      value_Avatal:resumeList[0].avatarUrl,
      value_realName:resumeList[0].realName,
      value_Phone:resumeList[0].phoneNum,
      value_Position:resumeList[0].position,
      radio:resumeList[0].radio,
      value_Year:resumeList[0].workYear,
      value_Education:resumeList[0].education,
      value_Time:resumeList[0].birthYear,
      value_Protect:resumeList[0].privacy
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