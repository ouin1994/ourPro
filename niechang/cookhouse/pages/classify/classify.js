// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // classifications:[]
    classifications:[
      {
        cId:1,
        title:"热门分类",
        dishes:[
          {
            name:"家常菜",
            pic:"../../images/bgi/1-first.jpg"
          },
          {
            name: "下饭菜",
            pic: "../../images/bgi/1-second.jpg"
          },
          {
            name: "烘焙",
            pic: "../../images/bgi/1-third.jpg"
          },
          {
            name: "肉类",
            pic: "../../images/bgi/1-fourth.jpg"
          },
          {
            name: "早餐",
            pic: "../../images/bgi/1-fifth.jpg"
          },
          {
            name: "蔬菜",
            pic: "../../images/bgi/1-sixth.jpg"
          },
          {
            name: "汤粥主食",
            pic: "../../images/bgi/1-seventh.jpg"
          }
        ]
      },
      {
        cId:2,
        title:"菜式",
        dishes: [
          {
            name: "快手菜",
            pic: "../../images/bgi/2-first.jpg"
          },
          {
            name: "素菜",
            pic: "../../images/bgi/2-second.jpg"
          },
          {
            name: "甜品饮品",
            pic: "../../images/bgi/2-third.jpg"
          },
          {
            name: "小吃",
            pic: "../../images/bgi/2-fourth.jpg"
          },
          {
            name: "零食",
            pic: "../../images/bgi/2-fifth.jpg"
          },
          {
            name: "懒人食谱",
            pic: "../../images/bgi/2-sixth.png"
          },
          {
            name: "下酒菜",
            pic: "../../images/bgi/2-seventh.jpg"
          },
          {
            name: "沙拉凉菜",
            pic: "../../images/bgi/2-eighth.jpg"
          }
        ]
      },
      {
        cId:3,
        title:"场景",
        dishes:[
          {
            name:"一人食",
            pic:"../../images/bgi/3-first.jpg"
          },
          {
            name: "宴客",
            pic: "../../images/bgi/3-second.jpg"
          },
          {
            name: "下午茶",
            pic: "../../images/bgi/3-third.jpg"
          },
          {
            name: "便当",
            pic: "../../images/bgi/3-fourth.jpg"
          },
          {
            name: "烹调方法",
            pic: "../../images/bgi/3-fifth.jpg"
          },
          {
            name: "宿舍",
            pic: "../../images/bgi/3-sixth.jpg"
          },
          {
            name: "宵夜",
            pic: "../../images/bgi/3-seventh.jpg"
          }
        ]
      },
      {
        cId: 4,
        title: "食材辅料",
        dishes: [
          {
            name: "鱼虾水产",
            pic: "../../images/bgi/4-first.jpg"
          },
          {
            name: "水果",
            pic: "../../images/bgi/4-second.jpg"
          },
          {
            name: "蛋类豆类",
            pic: "../../images/bgi/4-third.png"
          },
          {
            name: "奶类",
            pic: "../../images/bgi/4-fourth.jpg"
          },
          {
            name: "腌肉腌菜",
            pic: "../../images/bgi/4-fifth.png"
          },
          {
            name: "调味辅料",
            pic: "../../images/bgi/4-sixth.jpg"
          },
          {
            name: "粮油干果",
            pic: "../../images/bgi/4-seventh.jpg"
          }
        ]
      },
      {
        cId: 5,
        title: "趣味分类",
        dishes: [
          {
            name: "自制",
            pic: "../../images/bgi/5-first.jpg"
          },
          {
            name: "创意菜",
            pic: "../../images/bgi/5-second.jpg"
          },
          {
            name: "外貌协会",
            pic: "../../images/bgi/5-third.jpg"
          },
          {
            name: "厨具",
            pic: "../../images/bgi/5-fourth.jpg"
          },
          {
            name: "口味",
            pic: "../../images/bgi/5-fifth.jpg"
          },
          {
            name: "小清新",
            pic: "../../images/bgi/5-sixth.jpg"
          },
          {
            name: "野餐",
            pic: "../../images/bgi/5-seventh.jpg"
          }
        ]
      },
      {
        cId: 6,
        title: "文化地标",
        dishes: [
          {
            name: "视频菜谱",
            pic: "../../images/bgi/6-first.jpg"
          },
          {
            name: "异国风味",
            pic: "../../images/bgi/6-second.jpg"
          },
          {
            name: "大师秘方",
            pic: "../../images/bgi/6-third.jpg"
          },
          {
            name: "餐厅 Cosplay",
            pic: "../../images/bgi/6-fourth.jpg"
          },
          {
            name: "节日节气",
            pic: "../../images/bgi/6-fifth.jpg"
          },
          {
            name: "影视综艺",
            pic: "../../images/bgi/6-sixth.jpg"
          }
        ]
      }
    ]
  },

  getData(){
    wx.cloud.callFunction({
      name:"getClassify"
    }).then(res=>{
      console.log(res)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.getData())
    // wx.cloud.init()
    // wx.cloud.callFunction({
    //   name: "getClassify"
    // }).then(res => {
    //   // console.log(res.result.data)
    //   this.setData({
    //     classifications:res.result.data
    //   })
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