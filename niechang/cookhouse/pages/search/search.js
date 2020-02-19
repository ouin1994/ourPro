// pages/search/search.js
// const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // sHistoryList:[],
    // sHotList:[]
    sHistoryList: [
      {
      name: "自制",
      num: 1
      },
      {
        name: "创意菜",
        num: 1
      },
      {
        name: "家常菜",
        num: 1
      },
      {
        name: "下饭菜",
        num: 1
      }],
    sHotList: [
      {
        name: "蛋糕",
        num: 1
      },
      {
        name: "油条",
        num: 1
      },
      {
        name: "凉皮",
        num: 1
      },
      {
        name: "面包",
        num: 1
      },
      {
        name: "电饭锅做蛋糕",
        num: 1
      },
      {
        name: "包子",
        num: 1
      },
      {
        name: "馒头",
        num: 1
      },
      {
        name: "蛋挞",
        num: 1
      },
      {
        name: "茄子",
        num: 1
      },
      {
        name: "红烧肉",
        num: 1
      },
      {
        name: "奶茶",
        num: 1
      },
      {
        name: "土豆",
        num: 1
      },
      {
        name: "可乐鸡翅",
        num: 1
      },
      {
        name: "电饭煲做蛋糕",
        num: 1
      },
      {
        name: "蛋糕胚电饭锅",
        num: 1
      },
      {
        name: "豆腐",
        num: 1
      },
      {
        name: "汤圆",
        num: 1
      },
      {
        name: "葱油饼",
        num: 1
      },
      {
        name: "鸡翅",
        num: 1
      },
      {
        name: "早餐",
        num: 1
      }
    ],
    showClear:false
  },
  onCancel(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.cloud.callFunction({
    //   name:"getSearchHistory"
    // }).then(res=>{
    //   console.log(res)
    //   var data=res.result.data;
    //   data.forEach((item,i)=>{
    //     if(item.title=="搜索历史"){
    //       this.setData({
    //         sHistoryList:item.searches
    //       })
    //       if(this.data.sHistoryList[0]){
    //         this.setData({
    //           showClear:true
    //         })
    //       }else{
    //         this.setData({
    //           showClear:false
    //         })
    //       }
    //     }else if(item.title=="热门搜索"){
    //       this.setData({
    //         sHotList:item.searches
    //       })
    //     }
    //   })
    //   console.log(this.data)
    // })
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