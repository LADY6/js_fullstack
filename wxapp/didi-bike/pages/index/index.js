Page({
  data: {
    longitude: 115.830269, //经度
    latitude: 28.718641, //纬度
    scale: 18
  },
  onLoad() {
    //赋予小程序可以调用的API
    wx.showLoading({
      title: '获取坐标中'
    });
    //获取手机的GPS
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        //console.log(res);
        let {
          longitude,
          latitude
        } = res;
        this.tocreateMarkers(longitude, latitude)
        //console.log(longitude, latitude);
        this.setData({
          longitude,
          latitude
        }, () => {
          wx.hideLoading();
        })
      }
    })
  },
  onReady() {
    //地图上下文环境
    this.mapCtx = wx.createMapContext('myMap')
  },
  toVisit(e){
    console.log(e);
  },
  toScan() {
    return wx.scanCode({
      success: (res) => {
        wx.showModal({
          title:'scan',
          content:JSON.stringify(res)
        })
      }
    })
  },
  toUser() {},
  toMsg() {},
  toReset() {
    //当使用地图来来去去时，再回到当初的起点
    this.mapCtx.moveToLocation();
    this.setData({
      scale: 18
    })
  },
  tocreateMarkers(longitude, latitude) {
    let markers = [{
      "id": 1,
      "iconPath": "/images/map-bicycle.png",
      "longitude":longitude,
      "latitude": latitude,
      "width": 52.5,
      "height": 30,
      "callout": {}
    }]
    this.setData({
      markers
    })
  }
})