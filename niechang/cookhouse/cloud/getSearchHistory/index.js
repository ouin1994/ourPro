// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "demo-dy06i"
})

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(666)
  return cloud.database().collection("cookhouse_historylist").get()
}