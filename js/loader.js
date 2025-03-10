var loadProgress = {
    progress: 0,
    isComplete: false,
    elements: {
        percentage: document.querySelectorAll(".js-update-percentage")[0],
        meter: document.querySelectorAll(".js-update-meter")[0],
        text: document.querySelectorAll(".js-update-text")[0],
    }
};
loadProgress.updateProgress = function(a){
    var parent = this,
        element = parent.elements;
    if(parent.isComplete != true) {
        parent.isComplete = a == 100 ? true : false;
        parent.progress = a;
        element.percentage.innerHTML = a;
        element.meter.style.width = a + "%";
        element.text.style.width = a + "%";
    }
};

loadProgress.updateProgress(18);

(function() {
    var e, i, n, t, o, r, c, s, d, a;
    e = window.device, window.device = {}, n = window.document.documentElement, a = window.navigator.userAgent.toLowerCase(), device.ios = function() {
        return device.iphone() || device.ipod() || device.ipad()
    }, device.iphone = function() {
        return t("iphone")
    }, device.ipod = function() {
        return t("ipod")
    }, device.ipad = function() {
        return t("ipad")
    }, device.android = function() {
        return t("android")
    }, device.androidPhone = function() {
        return device.android() && t("mobile")
    }, device.androidTablet = function() {
        return device.android() && !t("mobile")
    }, device.blackberry = function() {
        return t("blackberry") || t("bb10") || t("rim")
    }, device.blackberryPhone = function() {
        return device.blackberry() && !t("tablet")
    }, device.blackberryTablet = function() {
        return device.blackberry() && t("tablet")
    }, device.windows = function() {
        return t("windows")
    }, device.windowsPhone = function() {
        return device.windows() && t("phone")
    }, device.windowsTablet = function() {
        return device.windows() && t("touch") && !device.windowsPhone()
    }, device.fxos = function() {
        return (t("(mobile;") || t("(tablet;")) && t("; rv:")
    }, device.fxosPhone = function() {
        return device.fxos() && t("mobile")
    }, device.fxosTablet = function() {
        return device.fxos() && t("tablet")
    }, device.meego = function() {
        return t("meego")
    }, device.cordova = function() {
        return window.cordova && "file:" === location.protocol
    }, device.nodeWebkit = function() {
        return "object" == typeof window.process
    }, device.mobile = function() {
        return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego()
    }, device.tablet = function() {
        return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet()
    }, device.desktop = function() {
        return !device.tablet() && !device.mobile()
    }, device.portrait = function() {
        return window.innerHeight / window.innerWidth > 1
    }, device.landscape = function() {
        return window.innerHeight / window.innerWidth < 1
    }, device.noConflict = function() {
        return window.device = e, this
    }, t = function(e) {
        return -1 !== a.indexOf(e)
    }, r = function(e) {
        var i;
        return i = new RegExp(e, "i"), n.className.match(i)
    }, i = function(e) {
        return r(e) ? void 0 : n.className += " " + e
    }, s = function(e) {
        return r(e) ? n.className = n.className.replace(e, "") : void 0
    }, device.ios() ? device.ipad() ? i("ios ipad tablet") : device.iphone() ? i("ios iphone mobile") : device.ipod() && i("ios ipod mobile") : i(device.android() ? device.androidTablet() ? "android tablet" : "android mobile" : device.blackberry() ? device.blackberryTablet() ? "blackberry tablet" : "blackberry mobile" : device.windows() ? device.windowsTablet() ? "windows tablet" : device.windowsPhone() ? "windows mobile" : "desktop" : device.fxos() ? device.fxosTablet() ? "fxos tablet" : "fxos mobile" : device.meego() ? "meego mobile" : device.nodeWebkit() ? "node-webkit" : "desktop"), device.cordova() && i("cordova"), o = function() {
        return device.landscape() ? (s("portrait"), i("landscape")) : (s("landscape"), i("portrait"))
    }, d = "onorientationchange" in window, c = d ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(c, o, !1) : window.attachEvent ? window.attachEvent(c, o) : window[c] = o, o()
}).call(this), define("libs/device", function(e) {
    return function() {
        var i;
        return i || e.device
    }
}(this)), define("config", ["modernizr", "libs/device"], function(e, i) {
    var n = {
        SITE_URL: "http://",
        APP_URL: "https://apps.facebook.com/",
        CDN: "20150831105102_1_0_156eb23",
        ENV: "live",
        OLD_DESKTOP: !e.csstransforms,
        MOBILE: i.mobile(),
        TABLET: i.tablet(),
        IOS: i.ios(),
        ANDROID: i.android(),
        HI_DPI: window.devicePixelRatio > 1,
        FLOWS: {
            BASIC: "BASIC",
            EXTENDED: "EXTENDED",
            MOBILE: "MOBILE",
            TABLET: "TABLET"
        },
        FLOW: "none",
        FLASH_VESRION: "11.0.0",
        FLASH: null,
        FLASH_BYPASS: window.location.href.match(/bypass/),
        FACEBOOK_APP_IDS: {
            live: "",
            staging: "",
            dev: "",
            local: "205547496221381"
        },
        isSiteCompatible: function() {
            var i = !1;
            if (e.webgl === !0) {
                var n = document.createElement("canvas").getContext("webgl") || document.createElement("canvas").getContext("experimental-webgl");
                if (n)
                    for (var t = n.getSupportedExtensions(), o = 0; o < t.length; o++)
                        if ("OES_texture_float" === t[o]) {
                            i = !0;
                            break
                        }
            }
            return e.webgl === !0 && i === !0
        },
        getFBID: function() {
            return this.FACEBOOK_APP_IDS[this.ENV]
        },
        API_URL: {
            live: "",
            staging: "",
            dev: "",
            local: ""
        },
        getAPI: function() {
            return this.API_URL[this.ENV]
        }
    };
    return n.BASE_URL = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1), n
}), require.config({
    paths: {
        jquery: "libs/jquery-2.1.4",
        underscore: "libs/underscore",
        backbone: "libs/backbone",
        swfobject: "libs/swfobject",
        handlebars: "libs/handlebars-v3.0.0",
        text: "libs/text",
        TweenMax: "libs/greensock/TweenMax.min",
        TweenLite: "libs/greensock/TweenLite.min",
        TimelineLite: "libs/greensock/TimelineLite.min",
        TimelineMax: "libs/greensock/TimelineMax.min",
        console: "util/debugger",
        modernizr: "empty:",
        createjs: "shims/shim_createjs",
        "libs/createjs/preloadjs": "libs/createjs/preloadjs-0.6.0.combined",
        "libs/createjs/tweenjs": "libs/createjs/tweenjs-0.6.0.min",
        "libs/createjs/easeljs": "libs/createjs/easeljs-0.8.0.min",
        "libs/createjs/movieclip": "libs/createjs/movieclip-0.8.0.min",
        "libs/createjs/soundjs": "libs/createjs/soundjs-0.6.0.min",
        three: "libs/three.min",
        datgui: "libs/dat.gui.min"
    },
    shim: {
        datgui: {
            exports: "dat"
        },
        three: {
            exports: "THREE"
        },
        "libs/console-shim": {
            exports: "console"
        },
        jquery: {
            exports: "jQuery"
        },
        "libs/createjs/movieclip": {
            deps: ["libs/createjs/easeljs", "libs/createjs/tweenjs"]
        },
        "libs/createjs/tweenjs": {
            exports: "createjs.Tween",
            deps: ["libs/createjs/easeljs"]
        },
        "libs/device": {
            exports: "device"
        },
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        handlebars: {
            exports: "handlebars"
        },
        console: {
            exports: "console"
        },
        "libs/mocha": {
            exports: "mocha"
        },
        "libs/expect": {
            exports: "expect"
        },
        "libs/swfobject": {
            deps: ["jquery"],
            exports: "swfobject"
        },
        "libs/swffit": ["libs/swfobject"],
        "libs/swfmacmousewheel": ["libs/swfobject"],
        "libs/jquery-swfobject": ["jquery"]
    },
    waitSeconds: 0
}), define("modernizr", [], function() {
    return window.Modernizr
}), require(["config"], function(e) {
    function i(e) {
        for (var i = document.getElementsByTagName("head")[0], n = 0; n < e.length; n++) {
            var t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", e[n]), i.appendChild(t)
        }
    }
    var n = [],
        t = [],
        o = null;
    e.MOBILE ? (e.FLOW = e.FLOWS.MOBILE, n.push("backup_site_flow")) : e.OLD_DESKTOP ? (e.FLOW = e.FLOWS.BASIC, n.push("backup_site_flow")) : e.TABLET ? (e.FLOW = e.FLOWS.TABLET, n.push("backup_site_flow")) : e.isSiteCompatible() === !1 ? (e.FLOW = e.FLOWS.OLD_DESKTOP, n.push("backup_site_flow")) : (e.FLOW = e.FLOWS.EXTENDED, n.push("main_desktop_extended")), i(t);

    loadProgress.updateProgress(43);

    var r = window.location.toString();
    if (r.indexOf("?testing") > -1) {
        var c = r.match(/\?testing=([\w\/,-]+)/i);
        o = c ? c[1].split(",") : []
    }
    require(n, function(e) {
        o ? require(["../../../../new/pub/20150831105102_1_0_156eb23/js/tests/mocha"], function(i) {
            e.start(), i.run(o)
        }) : e.start()
    })
}), define("loader", function() {});

loadProgress.updateProgress(27);