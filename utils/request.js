// 发送ajax请求
import config from "./config";
export default (url, data={}, method='GET') => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      header: {
        // cookie: wx.getStorageSync('cookies') ? wx.getStorageSync('cookies').find(item => item.indexOf('MUSIC_U') !== -1) : ''
        cookie: wx.getStorageSync('cookies') ? wx.getStorageSync('cookies') : ''
      },
      success: (res)=> {
        if (data.isLogin) {
          wx.setStorage({
            key: 'cookies',
            data: "MUSIC_U=bb7cb6c5b2b2d1952f27d584da8d8e5c457f971fe8577b32813dcd500edbf3e3519e07624a9f0053bba92011e82105c2eb52b2fd669fa689c6f2d7a94a52c72835a17ed1e82a40e4a0d2166338885bd7"
          })
        }
        // console.log("请求成功", res);
        resolve(res.data);
      },
      fail: (err) => {
        // console.log("请求失败", err);
        reject(err);
      }
    })
  })
}