//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    logo:"../../images/bgi/logo.png",
    greens:[
      {
        id:1,
        name:"照烧鸡腿饭",
        num:80,
        pic:"../../images/greens/green1.jpg"
      },
      {
        id:2,
        name:"麻辣留汁宽粉",
        num:29,
        pic:"../../images/greens/green2.jpg"
      },
      {
        id: 3,
        name: "白菜鸡蛋早餐饼",
        num: 188,
        pic: "../../images/greens/green3.jpg"
      },
      {
        id: 4,
        name: "酥脆蛋黄小饼干",
        num: 64,
        pic: "../../images/greens/green4.jpg"
      },
      {
        id: 5,
        name: "红糖发糕",
        num: 24,
        pic: "../../images/greens/green5.jpg"
      },
      {
        id: 6,
        name: "超级开胃的酸辣汤❗️10分钟搞定",
        num: 489,
        pic: "../../images/greens/green6.jpg"
      },
      {
        id: 7,
        name: "duangduang的无油舒芙蕾松饼",
        num: 771,
        pic: "../../images/greens/green7.jpg"
      }
    ]
  },
  goSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  onLoad: function () {
   
  },

})
