// pages/index/index.js
import request from '../../utils/request';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    recommendList: [],
    topList: [],
  },
  // 获取轮播图数据
  async getBannerList() {
    let bannerListData = await request('/banner', {type: 2});
    this.setData({
      bannerList: bannerListData.banners,
    });
    // console.log(this.data.bannerList)
  },
  // 获取推荐歌单数据
  async getRecommendList() {
    let recommendListData = await request('/personalized', {limit: 10});
    this.setData({
      recommendList: recommendListData.result,
    });
  },
  // 获取排行榜数据
  async getTopList() {
    let index = 0;
    let resultArr = [];
    while (index < 5) {
      let topListData = await request('/top/list', {idx: index++});
      let topListItem = {name: topListData.playlist.name, tracks: topListData.playlist.tracks.slice(0, 5)};
      resultArr.push(topListItem);
      this.setData({
        topList: resultArr,
      });
    }
  },
  toRecommendSong() {
    wx.navigateTo({
      url: '/songPackage/pages/recommendSong/recommendSong',
    })
  },
  toOther() {
    wx.navigateTo({
      url: '/otherPackage/pages/other/other',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBannerList();
    this.getRecommendList();
    this.getTopList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})