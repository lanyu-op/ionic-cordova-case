# ionic-cordova-case

android安装方式：
1、安装Node.js
2、运行以下命令：
$ npm install -g cordova ionic
$ ionic platform add android
$ ionic build android
在以下目录生成apk安装包,在手机安装运行：
D:\ionic_jg\ionic-cordova-case\ionic-cordova-case\platforms\android\build\outputs\apk

ios安装方式：
1. 执行ionic platform add ios
2. 执行ionic build ios
3. 编译成功后，在当前目录下的platform/ios/xxx.xcodeproj，确认一下xxx的名字是什么。执行open platform/ios/xxx.xcodeproj
4. 此时xcode会打开，然后连接手机，运行项目在手机上就可以了。

---------------------------------------------------------------------
          v0.0.1：（2015-9-16）
          1、增加左侧滑动ui
          2、增加echarts案例
          3、增加highcharts案例
          4、增加弹出登录form
          5、增加国际化案例
          6、增加列表、查看列表

-----------------------------------------------------------------------
	      v0.1.1：(2015-9月18号)
	      1、引用新的架构，增加了requestjs和angularAMD，实现了控制器按需加载资源。
	      2、注意：推翻了v0.0.1版本的代码结构。俩者不兼容。
	      3、改版本适用大型应用。

-------------------------------------------------------------------------------
	      v0.021：(2015-9月27号)
	      <p>1、修正路径错误导致无法打开页面</p>
	      <p>2、增加Js和CSS混淆模块</p>
	      <p>3、main.js调整到www/app里，受全局混淆影响。</p>
-------------------------------------------------------------------------------
        v0.0211：(2015-10月08号)
        1、增加lazyload动态加载css
        2、一些卡片样式
        3、新增圈子功能，从服务器load数据。
        4、增加左右menu滑动
-------------------------------------------------------------------------------
        v0.0212：(2015-10月09号)
        1、增加afklm/ng-lazy-image,圈子中使用异步加载图片。
-------------------------------------------------------------------------------
As AngularJS itself, this module is released under the permissive MIT license.