// 判读是否为IE浏览器
function isIE() {
    return navigator.appName == "Microsoft Internet Explorer";
}

console.log(123);

// 判断IE版本
function IEVersion() {
    return parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""));
}

// 自定义Map对象
function Map() {

    this.keys = new Array();
    this.data = new Object();

    this.set = function(key, value) {
        if (this.data[key] == null) {
            if (this.keys.indexOf(key) == -1) {
                this.keys.push(key);
            }
        }
        this.data[key] = value;
    }

    this.get = function(key) {
        return this.data[key];
    }
}
debugger
if (!window.Map) {
    // new Map()
    debugger
    window.Map = new Map();
}

return true;