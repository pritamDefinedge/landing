
!(function (e, n, t) {
  function o(e) {
    var n = u.className,
      t = Modernizr._config.classPrefix || "";
    if ((h && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(o, "$1" + t + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + t + e.join(" " + t)),
      h ? (u.className.baseVal = n) : (u.className = n));
  }
  function s(e, n) {
    return typeof e === n;
  }
  function a() {
    var e, n, t, o, a, i, r;
    for (var l in d) {
      if (
        ((e = []),
        (n = d[l]),
        n.name &&
          (e.push(n.name.toLowerCase()),
          n.options && n.options.aliases && n.options.aliases.length))
      )
        for (t = 0; t < n.options.aliases.length; t++)
          e.push(n.options.aliases[t].toLowerCase());
      for (o = s(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++)
        (i = e[a]),
          (r = i.split(".")),
          1 === r.length
            ? (Modernizr[r[0]] = o)
            : (!Modernizr[r[0]] ||
                Modernizr[r[0]] instanceof Boolean ||
                (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
              (Modernizr[r[0]][r[1]] = o)),
          f.push((o ? "" : "no-") + r.join("-"));
    }
  }
  function i() {
    return "function" != typeof n.createElement
      ? n.createElement(arguments[0])
      : h
      ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
      : n.createElement.apply(n, arguments);
  }
  function r() {
    var e = n.body;
    return e || ((e = i(h ? "svg" : "body")), (e.fake = !0)), e;
  }
  function l(e, t, o, s) {
    var a,
      l,
      f,
      d,
      c = "modernizr",
      p = i("div"),
      h = r();
    if (parseInt(o, 10))
      for (; o--; )
        (f = i("div")), (f.id = s ? s[o] : c + (o + 1)), p.appendChild(f);
    return (
      (a = i("style")),
      (a.type = "text/css"),
      (a.id = "s" + c),
      (h.fake ? h : p).appendChild(a),
      h.appendChild(p),
      a.styleSheet
        ? (a.styleSheet.cssText = e)
        : a.appendChild(n.createTextNode(e)),
      (p.id = c),
      h.fake &&
        ((h.style.background = ""),
        (h.style.overflow = "hidden"),
        (d = u.style.overflow),
        (u.style.overflow = "hidden"),
        u.appendChild(h)),
      (l = t(p, e)),
      h.fake
        ? (h.parentNode.removeChild(h), (u.style.overflow = d), u.offsetHeight)
        : p.parentNode.removeChild(p),
      !!l
    );
  }
  var f = [],
    d = [],
    c = {
      _version: "3.0.0-alpha.4",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, n) {
        var t = this;
        setTimeout(function () {
          n(t[e]);
        }, 0);
      },
      addTest: function (e, n, t) {
        d.push({ name: e, fn: n, options: t });
      },
      addAsyncTest: function (e) {
        d.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = c), (Modernizr = new Modernizr());
  var p = c._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
  c._prefixes = p;
  var u = n.documentElement,
    h = "svg" === u.nodeName.toLowerCase();
  Modernizr.addTest("webgl", function () {
    var n = i("canvas"),
      t =
        "probablySupportsContext" in n
          ? "probablySupportsContext"
          : "supportsContext";
    return t in n
      ? n[t]("webgl") || n[t]("experimental-webgl")
      : "WebGLRenderingContext" in e;
  });
  var m = (c.testStyles = l);
  Modernizr.addTest("touchevents", function () {
    var t;
    if ("ontouchstart" in e || (e.DocumentTouch && n instanceof DocumentTouch))
      t = !0;
    else {
      var o = [
        "@media (",
        p.join("touch-enabled),("),
        "heartz",
        ")",
        "{#modernizr{top:9px;position:absolute}}",
      ].join("");
      m(o, function (e) {
        t = 9 === e.offsetTop;
      });
    }
    return t;
  }),
    a(),
    o(f),
    delete c.addTest,
    delete c.addAsyncTest;
  for (var v = 0; v < Modernizr._q.length; v++) Modernizr._q[v]();
  e.Modernizr = Modernizr;
})(window, document);
//# sourceMappingURL=modernizr-custom.js.map
