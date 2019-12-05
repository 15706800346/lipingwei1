//注册小程序的示例
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log(options);
    console.log('初始化完成：onLaunch')
},
  onShow: function (options) {
    //1。判断小程序进入的场景
    console.log('界面被显示出来：onshow');
    console.log(options);
    switch (options.scene) {
      case 1001:
        break;
      case 1005:
        break;
    }
  
 //2.获取用户信息，并且获取到用户信息之后，将用户信息传递给服务器
    wx.getUserInfo({//即将被废弃
      success:function(res){
        console.log(res)
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面被隐藏：onHide')
  },

  /*
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
   console.log('小程序发生错误')
   
  },
  globalData: {
    name: 'coderwhy',
    age: 18,
  }
})
