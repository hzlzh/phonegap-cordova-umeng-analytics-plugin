var UmengAnalyticsPlugin = function() {};

UmengAnalyticsPlugin.prototype.say = function(success, fail) {
    cordova.exec(success, fail, "UmengAnalyticsPlugin","say", []);
};

var umengAnalyticsPlugin = new UmengAnalyticsPlugin();
module.exports = umengAnalyticsPlugin;