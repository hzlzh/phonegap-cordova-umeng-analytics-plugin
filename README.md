# Umeng Analytics(友盟统计SDK) PhoneGap plugin
Work with PhoneGap 2.9.*

## How To Use

#### Add Plugin

```
cordova plugin add https://github.com/hzlzh/phonegap-cordova-umeng-analytics-plugin.git
```

#### Remove Plugin
````
cordova plugin remove https://github.com/hzlzh/phonegap-cordova-umeng-analytics-plugin.git
````

## 支持已经可以使用友盟统计

详情：[http://dev.umeng.com/analytics/ios/quick-start#1](http://dev.umeng.com/analytics/ios/quick-start#1)

例：

```
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
 [MobClick startWithAppkey:@"xxxxxxxxxxxxxxx" reportPolicy:BATCH   channelId:@"Web"];
}
```