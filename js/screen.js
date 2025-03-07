// Google Analytics
(function (i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function () {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");

ga("create", "UA-55429691-19", "auto");
ga("send", "pageview");

//Event Tracking by Tealium
(function (a, b, c, d) {
  a = "//tags.tiqcdn.com/utag/wsjdn/custom-off-network/prod/utag.js";
  b = document;
  c = "script";
  d = b.createElement(c);
  d.src = a;
  d.type = "text/java" + c;
  d.async = true;
  a = b.getElementsByTagName(c)[0];
  a.parentNode.insertBefore(d, a);
})();

//Chartbeat
var _sf_async_config = {};
//CONFIGURATION START
_sf_async_config.uid = 8900;
_sf_async_config.domain = "online.wsj.com";
_sf_async_config.useCanonical = true;
_sf_async_config.sections = "Cocainenomics";
_sf_async_config.sponsorName = "Cocainenomics";
_sf_async_config.type = "HUB";
//CONFIGURATION END
(function () {
  function loadChartbeat() {
    window._sf_endpt = new Date().getTime();
    var e = document.createElement("script");
    e.setAttribute("language", "javascript");
    e.setAttribute("type", "text/javascript");
    e.setAttribute("src", "//static.chartbeat.com/js/chartbeat_pub.js");
    document.body.appendChild(e);
  }
  var oldonload = window.onload;
  window.onload =
    typeof window.onload != "function"
      ? loadChartbeat
      : function () {
          oldonload();
          loadChartbeat();
        };
})();

/*! jQuery v1.12.1 | (c) jQuery Foundation | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "1.12.1",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function () {
        return e.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : e.call(this);
      },
      pushStack: function (a) {
        var b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a) {
        return n.each(this, a);
      },
      map: function (a) {
        return this.pushStack(
          n.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(e.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: g,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (e = arguments[h]))
            for (d in e)
              (a = g[d]),
                (c = e[d]),
                g !== c &&
                  (j && c && (n.isPlainObject(c) || (b = n.isArray(c)))
                    ? (b
                        ? ((b = !1), (f = a && n.isArray(a) ? a : []))
                        : (f = a && n.isPlainObject(a) ? a : {}),
                      (g[d] = n.extend(j, f, c)))
                    : void 0 !== c && (g[d] = c));
        return g;
      }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray:
        Array.isArray ||
        function (a) {
          return "array" === n.type(a);
        },
      isWindow: function (a) {
        return null != a && a == a.window;
      },
      isNumeric: function (a) {
        var b = a && a.toString();
        return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      isPlainObject: function (a) {
        var b;
        if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !k.call(a, "constructor") &&
            !k.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        if (!l.ownFirst) for (b in a) return k.call(a, b);
        for (b in a);
        return void 0 === b || k.call(a, b);
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? i[j.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (b) {
        b &&
          n.trim(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (s(a)) {
          for (c = a.length; c > d; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : g.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (h) return h.call(b, a, c);
          for (
            d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0;
            d > c;
            c++
          )
            if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, b) {
        var c = +b.length,
          d = 0,
          e = a.length;
        while (c > d) a[e++] = b[d++];
        if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          g = 0,
          h = [];
        if (s(a))
          for (d = a.length; d > g; g++)
            (e = b(a[g], g, c)), null != e && h.push(e);
        else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
        return f.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, f;
        return (
          "string" == typeof b && ((f = a[b]), (b = a), (a = f)),
          n.isFunction(a)
            ? ((c = e.call(arguments, 2)),
              (d = function () {
                return a.apply(b || this, c.concat(e.call(arguments)));
              }),
              (d.guid = a.guid = a.guid || n.guid++),
              d)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: l,
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a)
      ? !1
      : "array" === c ||
          0 === b ||
          ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        M +
        "))|)" +
        L +
        "*\\]",
      O =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        N +
        ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      da = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function fa(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s,
        w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== x && (o = $.exec(a)))
          if ((f = o[1])) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = o[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return H.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) (w = b), (s = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(aa, "\\$&"))
              : b.setAttribute("id", (k = u)),
              (r = g(a)),
              (h = r.length),
              (l = V.test(k) ? "#" + k : "[id='" + k + "']");
            while (h--) r[h] = l + " " + qa(r[h]);
            (s = r.join(",")), (w = (_.test(a) && oa(b.parentNode)) || b);
          }
          if (s)
            try {
              return H.apply(d, w.querySelectorAll(s)), d;
            } catch (y) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e);
    }
    function ga() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ha(a) {
      return (a[u] = !0), a;
    }
    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function ka(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function na(a) {
      return ha(function (b) {
        return (
          (b = +b),
          ha(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = fa.support = {}),
      (f = fa.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (m = fa.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = n.documentElement),
              (p = !f(n)),
              (e = n.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", da, !1)
                  : e.attachEvent && e.attachEvent("onunload", da)),
              (c.attributes = ia(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ia(function (a) {
                return (
                  a.appendChild(n.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = Z.test(n.getElementsByClassName)),
              (c.getById = ia(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !n.getElementsByName || !n.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return "undefined" != typeof b.getElementsByClassName && p
                    ? b.getElementsByClassName(a)
                    : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = Z.test(n.querySelectorAll)) &&
                (ia(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + L + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + L + "*(?:value|" + K + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ia(function (a) {
                  var b = n.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + L + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = Z.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ia(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", O);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = Z.test(o.compareDocumentPosition)),
              (t =
                b || Z.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === n || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? J(k, a) - J(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      g = [a],
                      h = [b];
                    if (!e || !f)
                      return a === n
                        ? -1
                        : b === n
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? J(k, a) - J(k, b)
                        : 0;
                    if (e === f) return ka(a, b);
                    c = a;
                    while ((c = c.parentNode)) g.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d
                      ? ka(g[d], h[d])
                      : g[d] === v
                      ? -1
                      : h[d] === v
                      ? 1
                      : 0;
                  }),
              n)
            : n;
        }),
      (fa.matches = function (a, b) {
        return fa(a, null, null, b);
      }),
      (fa.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(T, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return fa(b, n, null, [a]).length > 0;
      }),
      (fa.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (fa.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (fa.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (fa.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = fa.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = fa.selectors =
        {
          cacheLength: 50,
          createPseudo: ha,
          match: W,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ba, ca)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || fa.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && fa.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return W.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      U.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ba, ca).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = fa.attr(d, a);
                return null == e
                  ? "!=" === b
                  : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1
                      : "|=" === b
                      ? e === c || e.slice(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h,
                      t = !1;
                    if (q) {
                      if (f) {
                        while (p) {
                          m = b;
                          while ((m = m[p]))
                            if (
                              h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (m = q),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n && j[2]),
                          (m = n && q.childNodes[n]);
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (1 === m.nodeType && ++t && m === b) {
                            k[a] = [w, n, t];
                            break;
                          }
                      } else if (
                        (s &&
                          ((m = b),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n)),
                        t === !1)
                      )
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType) &&
                            ++t &&
                            (s &&
                              ((l = m[u] || (m[u] = {})),
                              (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                              (k[a] = [w, t])),
                            m === b)
                          )
                            break;
                      return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  fa.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ha(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ha(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(Q, "$1"));
              return d[u]
                ? ha(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ha(function (a) {
              return function (b) {
                return fa(a, b).length > 0;
              };
            }),
            contains: ha(function (a) {
              return (
                (a = a.replace(ba, ca)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ha(function (a) {
              return (
                V.test(a || "") || fa.error("unsupported lang: " + a),
                (a = a.replace(ba, ca).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Y.test(a.nodeName);
            },
            input: function (a) {
              return X.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: na(function () {
              return [0];
            }),
            last: na(function (a, b) {
              return [b - 1];
            }),
            eq: na(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: na(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: na(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = la(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);
    function pa() {}
    (pa.prototype = d.filters = d.pseudos),
      (d.setFilters = new pa()),
      (g = fa.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (!c || (e = R.exec(h))) &&
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = S.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(Q, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = W[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
        });
    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function ra(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j,
              k = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((j = b[u] || (b[u] = {})),
                    (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (k[2] = h[2]);
                  if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function sa(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c;
    }
    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function va(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = va(d)),
        e && !e[u] && (e = va(e, f)),
        ha(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : ua(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = ua(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = ua(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function wa(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = ra(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = ra(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ra(sa(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return va(
              i > 1 && sa(m),
              i > 1 &&
                qa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(Q, "$1"),
              c,
              e > i && wa(a.slice(i, e)),
              f > e && wa((a = a.slice(e))),
              f > e && qa(a)
            );
          }
          m.push(c);
        }
      return sa(m);
    }
    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u);
            }
            H.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ha(f) : f;
    }
    return (
      (h = fa.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = wa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, xa(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = fa.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = W.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ba, ca),
                  (_.test(j[0].type) && oa(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && qa(j)), !a))
                  return H.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(
              f,
              b,
              !p,
              e,
              !b || (_.test(a) && oa(b.parentNode)) || b
            ),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ia(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ia(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ja("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ia(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ja("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ia(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ja(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      fa
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.uniqueSort = n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    v = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;
  function z(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return n.inArray(a, b) > -1 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = [],
          d = this,
          e = d.length;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0;
            })
          );
        for (b = 0; e > b; b++) n.find(a, d[b], c);
        return (
          (c = this.pushStack(e > 1 ? n.unique(c) : c)),
          (c.selector = this.selector ? this.selector + " " + a : a),
          c
        );
      },
      filter: function (a) {
        return this.pushStack(z(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(z(this, a || [], !0));
      },
      is: function (a) {
        return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var A,
    B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = (n.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || A), "string" == typeof a)) {
        if (
          ((e =
            "<" === a.charAt(0) &&
            ">" === a.charAt(a.length - 1) &&
            a.length >= 3
              ? [null, a, null]
              : B.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(
              this,
              n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
            ),
            x.test(e[1]) && n.isPlainObject(b))
          )
            for (e in b)
              n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        if (((f = d.getElementById(e[2])), f && f.parentNode)) {
          if (f.id !== e[2]) return A.find(a);
          (this.length = 1), (this[0] = f);
        }
        return (this.context = d), (this.selector = a), this;
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
        ? "undefined" != typeof c.ready
          ? c.ready(a)
          : a(n)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          n.makeArray(a, this));
    });
  (C.prototype = n.fn), (A = n(d));
  var D = /^(?:parents|prev(?:Until|All))/,
    E = { children: !0, contents: !0, next: !0, prev: !0 };
  n.fn.extend({
    has: function (a) {
      var b,
        c = n(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0;
      });
    },
    closest: function (a, b) {
      for (
        var c,
          d = 0,
          e = this.length,
          f = [],
          g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
        e > d;
        d++
      )
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (
            c.nodeType < 11 &&
            (g
              ? g.index(c) > -1
              : 1 === c.nodeType && n.find.matchesSelector(c, a))
          ) {
            f.push(c);
            break;
          }
      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? n.inArray(this[0], n(a))
          : n.inArray(a.jquery ? a[0] : a, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  function F(a, b) {
    do a = a[b];
    while (a && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return u(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return u(a, "parentNode", c);
      },
      next: function (a) {
        return F(a, "nextSibling");
      },
      prev: function (a) {
        return F(a, "previousSibling");
      },
      nextAll: function (a) {
        return u(a, "nextSibling");
      },
      prevAll: function (a) {
        return u(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return u(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return u(a, "previousSibling", c);
      },
      siblings: function (a) {
        return v((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return v(a.firstChild);
      },
      contents: function (a) {
        return n.nodeName(a, "iframe")
          ? a.contentDocument || a.contentWindow.document
          : n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 &&
            (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())),
          this.pushStack(e)
        );
      };
    }
  );
  var G = /\S+/g;
  function H(a) {
    var b = {};
    return (
      n.each(a.match(G) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                n.each(b, function (b, c) {
                  n.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== n.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            n.each(arguments, function (a, b) {
              var c;
              while ((c = n.inArray(b, f, c)) > -1)
                f.splice(c, 1), h >= c && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = !0), c || j.disable(), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .progress(c.notify)
                            .done(c.resolve)
                            .fail(c.reject)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (d) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? e.call(arguments) : d),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (d > 1)
          for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .progress(h(b, j, i))
                  .done(h(b, k, c))
                  .fail(g.reject)
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var I;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (I.resolveWith(d, [n]),
            n.fn.triggerHandler &&
              (n(d).triggerHandler("ready"), n(d).off("ready"))));
      },
    });
  function J() {
    d.addEventListener
      ? (d.removeEventListener("DOMContentLoaded", K),
        a.removeEventListener("load", K))
      : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
  }
  function K() {
    (d.addEventListener ||
      "load" === a.event.type ||
      "complete" === d.readyState) &&
      (J(), n.ready());
  }
  (n.ready.promise = function (b) {
    if (!I)
      if (
        ((I = n.Deferred()),
        "complete" === d.readyState ||
          ("loading" !== d.readyState && !d.documentElement.doScroll))
      )
        a.setTimeout(n.ready);
      else if (d.addEventListener)
        d.addEventListener("DOMContentLoaded", K),
          a.addEventListener("load", K);
      else {
        d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
        var c = !1;
        try {
          c = null == a.frameElement && d.documentElement;
        } catch (e) {}
        c &&
          c.doScroll &&
          !(function f() {
            if (!n.isReady) {
              try {
                c.doScroll("left");
              } catch (b) {
                return a.setTimeout(f, 50);
              }
              J(), n.ready();
            }
          })();
      }
    return I.promise(b);
  }),
    n.ready.promise();
  var L;
  for (L in n(l)) break;
  (l.ownFirst = "0" === L),
    (l.inlineBlockNeedsLayout = !1),
    n(function () {
      var a, b, c, e;
      (c = d.getElementsByTagName("body")[0]),
        c &&
          c.style &&
          ((b = d.createElement("div")),
          (e = d.createElement("div")),
          (e.style.cssText =
            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
          c.appendChild(e).appendChild(b),
          "undefined" != typeof b.style.zoom &&
            ((b.style.cssText =
              "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
            (l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth),
            a && (c.style.zoom = 1)),
          c.removeChild(e));
    }),
    (function () {
      var a = d.createElement("div");
      l.deleteExpando = !0;
      try {
        delete a.test;
      } catch (b) {
        l.deleteExpando = !1;
      }
      a = null;
    })();
  var M = function (a) {
      var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c
        ? !1
        : !b || (b !== !0 && a.getAttribute("classid") === b);
    },
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();
      if (((c = a.getAttribute(d)), "string" == typeof c)) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : N.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        n.data(a, b, c);
      } else c = void 0;
    }
    return c;
  }
  function Q(a) {
    var b;
    for (b in a)
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0;
  }
  function R(a, b, d, e) {
    if (M(a)) {
      var f,
        g,
        h = n.expando,
        i = a.nodeType,
        j = i ? n.cache : a,
        k = i ? a[h] : a[h] && h;
      if (
        (k && j[k] && (e || j[k].data)) ||
        void 0 !== d ||
        "string" != typeof b
      )
        return (
          k || (k = i ? (a[h] = c.pop() || n.guid++) : h),
          j[k] || (j[k] = i ? {} : { toJSON: n.noop }),
          ("object" == typeof b || "function" == typeof b) &&
            (e
              ? (j[k] = n.extend(j[k], b))
              : (j[k].data = n.extend(j[k].data, b))),
          (g = j[k]),
          e || (g.data || (g.data = {}), (g = g.data)),
          void 0 !== d && (g[n.camelCase(b)] = d),
          "string" == typeof b
            ? ((f = g[b]), null == f && (f = g[n.camelCase(b)]))
            : (f = g),
          f
        );
    }
  }
  function S(a, b, c) {
    if (M(a)) {
      var d,
        e,
        f = a.nodeType,
        g = f ? n.cache : a,
        h = f ? a[n.expando] : n.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b)
            ? (b = b.concat(n.map(b, n.camelCase)))
            : b in d
            ? (b = [b])
            : ((b = n.camelCase(b)), (b = b in d ? [b] : b.split(" "))),
            (e = b.length);
          while (e--) delete d[b[e]];
          if (c ? !Q(d) : !n.isEmptyObject(d)) return;
        }
        (c || (delete g[h].data, Q(g[h]))) &&
          (f
            ? n.cleanData([a], !0)
            : l.deleteExpando || g != g.window
            ? delete g[h]
            : (g[h] = void 0));
      }
    }
  }
  n.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (a) {
      return (
        (a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]), !!a && !Q(a)
      );
    },
    data: function (a, b, c) {
      return R(a, b, c);
    },
    removeData: function (a, b) {
      return S(a, b);
    },
    _data: function (a, b, c) {
      return R(a, b, c, !0);
    },
    _removeData: function (a, b) {
      return S(a, b, !0);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = n.data(f)), 1 === f.nodeType && !n._data(f, "parsedAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
            n._data(f, "parsedAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              n.data(this, a);
            })
          : arguments.length > 1
          ? this.each(function () {
              n.data(this, a, b);
            })
          : f
          ? P(f, a, n.data(f, a))
          : void 0;
      },
      removeData: function (a) {
        return this.each(function () {
          n.removeData(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = n._data(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = n._data(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          n._data(a, c) ||
          n._data(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              n._removeData(a, b + "queue"), n._removeData(a, c);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = n._data(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    }),
    (function () {
      var a;
      l.shrinkWrapBlocks = function () {
        if (null != a) return a;
        a = !1;
        var b, c, e;
        return (
          (c = d.getElementsByTagName("body")[0]),
          c && c.style
            ? ((b = d.createElement("div")),
              (e = d.createElement("div")),
              (e.style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              c.appendChild(e).appendChild(b),
              "undefined" != typeof b.style.zoom &&
                ((b.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (b.appendChild(d.createElement("div")).style.width = "5px"),
                (a = 3 !== b.offsetWidth)),
              c.removeChild(e),
              a)
            : void 0
        );
      };
    })();
  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
    V = ["Top", "Right", "Bottom", "Left"],
    W = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    };
  function X(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return n.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (n.cssNumber[b] ? "" : "px"),
      k = (n.cssNumber[b] || ("px" !== j && +i)) && U.exec(n.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), n.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var Y = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) Y(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        n.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(n(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    Z = /^(?:checkbox|radio)$/i,
    $ = /<([\w:-]+)/,
    _ = /^$|\/(?:java|ecma)script/i,
    aa = /^\s+/,
    ba =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  function ca(a) {
    var b = ba.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  !(function () {
    var a = d.createElement("div"),
      b = d.createDocumentFragment(),
      c = d.createElement("input");
    (a.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (l.leadingWhitespace = 3 === a.firstChild.nodeType),
      (l.tbody = !a.getElementsByTagName("tbody").length),
      (l.htmlSerialize = !!a.getElementsByTagName("link").length),
      (l.html5Clone =
        "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML),
      (c.type = "checkbox"),
      (c.checked = !0),
      b.appendChild(c),
      (l.appendChecked = c.checked),
      (a.innerHTML = "<textarea>x</textarea>"),
      (l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue),
      b.appendChild(a),
      (c = d.createElement("input")),
      c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      a.appendChild(c),
      (l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (l.noCloneEvent = !!a.addEventListener),
      (a[n.expando] = 1),
      (l.attributes = !a.getAttribute(n.expando));
  })();
  var da = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
  };
  (da.optgroup = da.option),
    (da.tbody = da.tfoot = da.colgroup = da.caption = da.thead),
    (da.th = da.td);
  function ea(a, b) {
    var c,
      d,
      e = 0,
      f =
        "undefined" != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : "undefined" != typeof a.querySelectorAll
          ? a.querySelectorAll(b || "*")
          : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
        !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], f) : f;
  }
  function fa(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++)
      n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
  }
  var ga = /<|&#?\w+;/,
    ha = /<tbody/i;
  function ia(a) {
    Z.test(a.type) && (a.defaultChecked = a.checked);
  }
  function ja(a, b, c, d, e) {
    for (
      var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0;
      o > r;
      r++
    )
      if (((g = a[r]), g || 0 === g))
        if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
        else if (ga.test(g)) {
          (i = i || p.appendChild(b.createElement("div"))),
            (j = ($.exec(g) || ["", ""])[1].toLowerCase()),
            (m = da[j] || da._default),
            (i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2]),
            (f = m[0]);
          while (f--) i = i.lastChild;
          if (
            (!l.leadingWhitespace &&
              aa.test(g) &&
              q.push(b.createTextNode(aa.exec(g)[0])),
            !l.tbody)
          ) {
            (g =
              "table" !== j || ha.test(g)
                ? "<table>" !== m[1] || ha.test(g)
                  ? 0
                  : i
                : i.firstChild),
              (f = g && g.childNodes.length);
            while (f--)
              n.nodeName((k = g.childNodes[f]), "tbody") &&
                !k.childNodes.length &&
                g.removeChild(k);
          }
          n.merge(q, i.childNodes), (i.textContent = "");
          while (i.firstChild) i.removeChild(i.firstChild);
          i = p.lastChild;
        } else q.push(b.createTextNode(g));
    i && p.removeChild(i),
      l.appendChecked || n.grep(ea(q, "input"), ia),
      (r = 0);
    while ((g = q[r++]))
      if (d && n.inArray(g, d) > -1) e && e.push(g);
      else if (
        ((h = n.contains(g.ownerDocument, g)),
        (i = ea(p.appendChild(g), "script")),
        h && fa(i),
        c)
      ) {
        f = 0;
        while ((g = i[f++])) _.test(g.type || "") && c.push(g);
      }
    return (i = null), p;
  }
  !(function () {
    var b,
      c,
      e = d.createElement("div");
    for (b in { submit: !0, change: !0, focusin: !0 })
      (c = "on" + b),
        (l[b] = c in a) ||
          (e.setAttribute(c, "t"), (l[b] = e.attributes[c].expando === !1));
    e = null;
  })();
  var ka = /^(?:input|select|textarea)$/i,
    la = /^key/,
    ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    na = /^(?:focusinfocus|focusoutblur)$/,
    oa = /^([^.]*)(?:\.(.+)|)/;
  function pa() {
    return !0;
  }
  function qa() {
    return !1;
  }
  function ra() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function sa(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) sa(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = qa;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return n().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = n.guid++))),
      a.each(function () {
        n.event.add(this, b, e, d, c);
      })
    );
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = n._data(a);
      if (r) {
        c.handler && ((i = c), (c = i.handler), (e = i.selector)),
          c.guid || (c.guid = n.guid++),
          (g = r.events) || (g = r.events = {}),
          (k = r.handle) ||
            ((k = r.handle =
              function (a) {
                return "undefined" == typeof n ||
                  (a && n.event.triggered === a.type)
                  ? void 0
                  : n.event.dispatch.apply(k.elem, arguments);
              }),
            (k.elem = a)),
          (b = (b || "").match(G) || [""]),
          (h = b.length);
        while (h--)
          (f = oa.exec(b[h]) || []),
            (o = q = f[1]),
            (p = (f[2] || "").split(".").sort()),
            o &&
              ((j = n.event.special[o] || {}),
              (o = (e ? j.delegateType : j.bindType) || o),
              (j = n.event.special[o] || {}),
              (l = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                i
              )),
              (m = g[o]) ||
                ((m = g[o] = []),
                (m.delegateCount = 0),
                (j.setup && j.setup.call(a, d, p, k) !== !1) ||
                  (a.addEventListener
                    ? a.addEventListener(o, k, !1)
                    : a.attachEvent && a.attachEvent("on" + o, k))),
              j.add &&
                (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
              (n.event.global[o] = !0));
        a = null;
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = n.hasData(a) && n._data(a);
      if (r && (k = r.events)) {
        (b = (b || "").match(G) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = oa.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = k[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (i = f = m.length);
            while (f--)
              (g = m[f]),
                (!e && q !== g.origType) ||
                  (c && c.guid !== g.guid) ||
                  (h && !h.test(g.namespace)) ||
                  (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                  (m.splice(f, 1),
                  g.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, g));
            i &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete k[o]);
          } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
      }
    },
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        l,
        m,
        o,
        p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((i = m = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !na.test(q + n.event.triggered) &&
          (q.indexOf(".") > -1 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (h = q.indexOf(":") < 0 && "on" + q),
          (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = r.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (l = n.event.special[q] || {}),
          f || !l.trigger || l.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (
            j = l.delegateType || q, na.test(j + q) || (i = i.parentNode);
            i;
            i = i.parentNode
          )
            p.push(i), (m = i);
          m === (e.ownerDocument || d) &&
            p.push(m.defaultView || m.parentWindow || a);
        }
        o = 0;
        while ((i = p[o++]) && !b.isPropagationStopped())
          (b.type = o > 1 ? j : l.bindType || q),
            (g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle")),
            g && g.apply(i, c),
            (g = h && i[h]),
            g &&
              g.apply &&
              M(i) &&
              ((b.result = g.apply(i, c)),
              b.result === !1 && b.preventDefault());
        if (
          ((b.type = q),
          !f &&
            !b.isDefaultPrevented() &&
            (!l._default || l._default.apply(p.pop(), c) === !1) &&
            M(e) &&
            h &&
            e[q] &&
            !n.isWindow(e))
        ) {
          (m = e[h]), m && (e[h] = null), (n.event.triggered = q);
          try {
            e[q]();
          } catch (s) {}
          (n.event.triggered = void 0), m && (e[h] = m);
        }
        return b.result;
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        d,
        f,
        g,
        h = [],
        i = e.call(arguments),
        j = (n._data(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (!a.rnamespace || a.rnamespace.test(g.namespace)) &&
              ((a.handleObj = g),
              (a.data = g.data),
              (d = (
                (n.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== d &&
                (a.result = d) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (
        h &&
        i.nodeType &&
        ("click" !== a.type || isNaN(a.button) || a.button < 1)
      )
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) > -1
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        e,
        f = a.type,
        g = a,
        h = this.fixHooks[f];
      h ||
        (this.fixHooks[f] = h =
          ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}),
        (e = h.props ? this.props.concat(h.props) : this.props),
        (a = new n.Event(g)),
        (b = e.length);
      while (b--) (c = e[b]), (a[c] = g[c]);
      return (
        a.target || (a.target = g.srcElement || d),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        h.filter ? h.filter(a, g) : a
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          e,
          f,
          g = b.button,
          h = b.fromElement;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((e = a.target.ownerDocument || d),
            (f = e.documentElement),
            (c = e.body),
            (a.pageX =
              b.clientX +
              ((f && f.scrollLeft) || (c && c.scrollLeft) || 0) -
              ((f && f.clientLeft) || (c && c.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((f && f.scrollTop) || (c && c.scrollTop) || 0) -
              ((f && f.clientTop) || (c && c.clientTop) || 0))),
          !a.relatedTarget &&
            h &&
            (a.relatedTarget = h === a.target ? b.toElement : h),
          a.which ||
            void 0 === g ||
            (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
          a
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== ra() && this.focus)
            try {
              return this.focus(), !1;
            } catch (a) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === ra() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return n.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (n.removeEvent = d.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent &&
            ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
        }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? pa
                  : qa))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      constructor: n.Event,
      isDefaultPrevented: qa,
      isPropagationStopped: qa,
      isImmediatePropagationStopped: qa,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = pa),
          a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = pa),
          a &&
            !this.isSimulated &&
            (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = pa),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !n.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    l.submit ||
      (n.event.special.submit = {
        setup: function () {
          return n.nodeName(this, "form")
            ? !1
            : void n.event.add(
                this,
                "click._submit keypress._submit",
                function (a) {
                  var b = a.target,
                    c =
                      n.nodeName(b, "input") || n.nodeName(b, "button")
                        ? n.prop(b, "form")
                        : void 0;
                  c &&
                    !n._data(c, "submit") &&
                    (n.event.add(c, "submit._submit", function (a) {
                      a._submitBubble = !0;
                    }),
                    n._data(c, "submit", !0));
                }
              );
        },
        postDispatch: function (a) {
          a._submitBubble &&
            (delete a._submitBubble,
            this.parentNode &&
              !a.isTrigger &&
              n.event.simulate("submit", this.parentNode, a));
        },
        teardown: function () {
          return n.nodeName(this, "form")
            ? !1
            : void n.event.remove(this, "._submit");
        },
      }),
    l.change ||
      (n.event.special.change = {
        setup: function () {
          return ka.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (n.event.add(this, "propertychange._change", function (a) {
                  "checked" === a.originalEvent.propertyName &&
                    (this._justChanged = !0);
                }),
                n.event.add(this, "click._change", function (a) {
                  this._justChanged && !a.isTrigger && (this._justChanged = !1),
                    n.event.simulate("change", this, a);
                })),
              !1)
            : void n.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                ka.test(b.nodeName) &&
                  !n._data(b, "change") &&
                  (n.event.add(b, "change._change", function (a) {
                    !this.parentNode ||
                      a.isSimulated ||
                      a.isTrigger ||
                      n.event.simulate("change", this.parentNode, a);
                  }),
                  n._data(b, "change", !0));
              });
        },
        handle: function (a) {
          var b = a.target;
          return this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            ("radio" !== b.type && "checkbox" !== b.type)
            ? a.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return n.event.remove(this, "._change"), !ka.test(this.nodeName);
        },
      }),
    l.focusin ||
      n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a));
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = n._data(d, b);
            e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = n._data(d, b) - 1;
            e
              ? n._data(d, b, e)
              : (d.removeEventListener(a, c, !0), n._removeData(d, b));
          },
        };
      }),
    n.fn.extend({
      on: function (a, b, c, d) {
        return sa(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return sa(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
          c === !1 && (c = qa),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    });
  var ta = / jQuery\d+="(?:null|\d+)"/g,
    ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
    va =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    wa = /<script|<style|<link/i,
    xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ya = /^true\/(.*)/,
    za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Aa = ca(d),
    Ba = Aa.appendChild(d.createElement("div"));
  function Ca(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function Da(a) {
    return (a.type = (null !== n.find.attr(a, "type")) + "/" + a.type), a;
  }
  function Ea(a) {
    var b = ya.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function Fa(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c,
        d,
        e,
        f = n._data(a),
        g = n._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, (g.events = {});
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = n.extend({}, g.data));
    }
  }
  function Ga(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (((c = b.nodeName.toLowerCase()), !l.noCloneEvent && b[n.expando])) {
        e = n._data(b);
        for (d in e.events) n.removeEvent(b, d, e.handle);
        b.removeAttribute(n.expando);
      }
      "script" === c && b.text !== a.text
        ? ((Da(b).text = a.text), Ea(b))
        : "object" === c
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          l.html5Clone &&
            a.innerHTML &&
            !n.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : "input" === c && Z.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value))
        : "option" === c
        ? (b.defaultSelected = b.selected = a.defaultSelected)
        : ("input" === c || "textarea" === c) &&
          (b.defaultValue = a.defaultValue);
    }
  }
  function Ha(a, b, c, d) {
    b = f.apply([], b);
    var e,
      g,
      h,
      i,
      j,
      k,
      m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || (o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
      });
    if (
      o &&
      ((k = ja(b, a[0].ownerDocument, !1, a, d)),
      (e = k.firstChild),
      1 === k.childNodes.length && (k = e),
      e || d)
    ) {
      for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++)
        (g = k),
          m !== p &&
            ((g = n.clone(g, !0, !0)), h && n.merge(i, ea(g, "script"))),
          c.call(a[m], g, m);
      if (h)
        for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++)
          (g = i[m]),
            _.test(g.type || "") &&
              !n._data(g, "globalEval") &&
              n.contains(j, g) &&
              (g.src
                ? n._evalUrl && n._evalUrl(g.src)
                : n.globalEval(
                    (g.text || g.textContent || g.innerHTML || "").replace(
                      za,
                      ""
                    )
                  ));
      k = e = null;
    }
    return a;
  }
  function Ia(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || n.cleanData(ea(d)),
        d.parentNode &&
          (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(va, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = n.contains(a.ownerDocument, a);
      if (
        (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">")
          ? (f = a.cloneNode(!0))
          : ((Ba.innerHTML = a.outerHTML), Ba.removeChild((f = Ba.firstChild))),
        !(
          (l.noCloneEvent && l.noCloneChecked) ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        ))
      )
        for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g)
          d[g] && Ga(e, d[g]);
      if (b)
        if (c)
          for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++)
            Fa(e, d[g]);
        else Fa(a, f);
      return (
        (d = ea(f, "script")),
        d.length > 0 && fa(d, !i && ea(a, "script")),
        (d = h = e = null),
        f
      );
    },
    cleanData: function (a, b) {
      for (
        var d,
          e,
          f,
          g,
          h = 0,
          i = n.expando,
          j = n.cache,
          k = l.attributes,
          m = n.event.special;
        null != (d = a[h]);
        h++
      )
        if ((b || M(d)) && ((f = d[i]), (g = f && j[f]))) {
          if (g.events)
            for (e in g.events)
              m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          j[f] &&
            (delete j[f],
            k || "undefined" == typeof d.removeAttribute
              ? (d[i] = void 0)
              : d.removeAttribute(i),
            c.push(f));
        }
    },
  }),
    n.fn.extend({
      domManip: Ha,
      detach: function (a) {
        return Ia(this, a, !0);
      },
      remove: function (a) {
        return Ia(this, a);
      },
      text: function (a) {
        return Y(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || d).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return Ha(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ca(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return Ha(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ca(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return Ha(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return Ha(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) {
          1 === a.nodeType && n.cleanData(ea(a, !1));
          while (a.firstChild) a.removeChild(a.firstChild);
          a.options && n.nodeName(a, "select") && (a.options.length = 0);
        }
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return Y(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a)
              return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
            if (
              "string" == typeof a &&
              !wa.test(a) &&
              (l.htmlSerialize || !ua.test(a)) &&
              (l.leadingWhitespace || !aa.test(a)) &&
              !da[($.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = n.htmlPrefilter(a);
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(ea(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return Ha(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            n.inArray(this, a) < 0 &&
              (n.cleanData(ea(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++)
            (c = d === h ? this : this.clone(!0)),
              n(f[d])[b](c),
              g.apply(e, c.get());
          return this.pushStack(e);
        };
      }
    );
  var Ja,
    Ka = { HTML: "block", BODY: "block" };
  function La(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], "display");
    return c.detach(), d;
  }
  function Ma(a) {
    var b = d,
      c = Ka[a];
    return (
      c ||
        ((c = La(a, b)),
        ("none" !== c && c) ||
          ((Ja = (
            Ja || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = (Ja[0].contentWindow || Ja[0].contentDocument).document),
          b.write(),
          b.close(),
          (c = La(a, b)),
          Ja.detach()),
        (Ka[a] = c)),
      c
    );
  }
  var Na = /^margin/,
    Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Pa = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    },
    Qa = d.documentElement;
  !(function () {
    var b,
      c,
      e,
      f,
      g,
      h,
      i = d.createElement("div"),
      j = d.createElement("div");
    if (j.style) {
      (j.style.cssText = "float:left;opacity:.5"),
        (l.opacity = "0.5" === j.style.opacity),
        (l.cssFloat = !!j.style.cssFloat),
        (j.style.backgroundClip = "content-box"),
        (j.cloneNode(!0).style.backgroundClip = ""),
        (l.clearCloneStyle = "content-box" === j.style.backgroundClip),
        (i = d.createElement("div")),
        (i.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        (j.innerHTML = ""),
        i.appendChild(j),
        (l.boxSizing =
          "" === j.style.boxSizing ||
          "" === j.style.MozBoxSizing ||
          "" === j.style.WebkitBoxSizing),
        n.extend(l, {
          reliableHiddenOffsets: function () {
            return null == b && k(), f;
          },
          boxSizingReliable: function () {
            return null == b && k(), e;
          },
          pixelMarginRight: function () {
            return null == b && k(), c;
          },
          pixelPosition: function () {
            return null == b && k(), b;
          },
          reliableMarginRight: function () {
            return null == b && k(), g;
          },
          reliableMarginLeft: function () {
            return null == b && k(), h;
          },
        });
      function k() {
        var k,
          l,
          m = d.documentElement;
        m.appendChild(i),
          (j.style.cssText =
            "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (b = e = h = !1),
          (c = g = !0),
          a.getComputedStyle &&
            ((l = a.getComputedStyle(j)),
            (b = "1%" !== (l || {}).top),
            (h = "2px" === (l || {}).marginLeft),
            (e = "4px" === (l || { width: "4px" }).width),
            (j.style.marginRight = "50%"),
            (c = "4px" === (l || { marginRight: "4px" }).marginRight),
            (k = j.appendChild(d.createElement("div"))),
            (k.style.cssText = j.style.cssText =
              "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (k.style.marginRight = k.style.width = "0"),
            (j.style.width = "1px"),
            (g = !parseFloat((a.getComputedStyle(k) || {}).marginRight)),
            j.removeChild(k)),
          (j.style.display = "none"),
          (f = 0 === j.getClientRects().length),
          f &&
            ((j.style.display = ""),
            (j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (k = j.getElementsByTagName("td")),
            (k[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
            (f = 0 === k[0].offsetHeight),
            f &&
              ((k[0].style.display = ""),
              (k[1].style.display = "none"),
              (f = 0 === k[0].offsetHeight))),
          m.removeChild(i);
      }
    }
  })();
  var Ra,
    Sa,
    Ta = /^(top|right|bottom|left)$/;
  a.getComputedStyle
    ? ((Ra = function (b) {
        var c = b.ownerDocument.defaultView;
        return (c && c.opener) || (c = a), c.getComputedStyle(b);
      }),
      (Sa = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ra(a)),
          (g = c ? c.getPropertyValue(b) || c[b] : void 0),
          ("" !== g && void 0 !== g) ||
            n.contains(a.ownerDocument, a) ||
            (g = n.style(a, b)),
          c &&
            !l.pixelMarginRight() &&
            Oa.test(g) &&
            Na.test(b) &&
            ((d = h.width),
            (e = h.minWidth),
            (f = h.maxWidth),
            (h.minWidth = h.maxWidth = h.width = g),
            (g = c.width),
            (h.width = d),
            (h.minWidth = e),
            (h.maxWidth = f)),
          void 0 === g ? g : g + ""
        );
      }))
    : Qa.currentStyle &&
      ((Ra = function (a) {
        return a.currentStyle;
      }),
      (Sa = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ra(a)),
          (g = c ? c[b] : void 0),
          null == g && h && h[b] && (g = h[b]),
          Oa.test(g) &&
            !Ta.test(b) &&
            ((d = h.left),
            (e = a.runtimeStyle),
            (f = e && e.left),
            f && (e.left = a.currentStyle.left),
            (h.left = "fontSize" === b ? "1em" : g),
            (g = h.pixelLeft + "px"),
            (h.left = d),
            f && (e.left = f)),
          void 0 === g ? g : g + "" || "auto"
        );
      }));
  function Ua(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Va = /alpha\([^)]*\)/i,
    Wa = /opacity\s*=\s*([^)]*)/i,
    Xa = /^(none|table(?!-c[ea]).+)/,
    Ya = new RegExp("^(" + T + ")(.*)$", "i"),
    Za = { position: "absolute", visibility: "hidden", display: "block" },
    $a = { letterSpacing: "0", fontWeight: "400" },
    _a = ["Webkit", "O", "Moz", "ms"],
    ab = d.createElement("div").style;
  function bb(a) {
    if (a in ab) return a;
    var b = a.charAt(0).toUpperCase() + a.slice(1),
      c = _a.length;
    while (c--) if (((a = _a[c] + b), a in ab)) return a;
  }
  function cb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = n._data(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                W(d) &&
                (f[g] = n._data(d, "olddisplay", Ma(d.nodeName))))
            : ((e = W(d)),
              ((c && "none" !== c) || !e) &&
                n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function db(a, b, c) {
    var d = Ya.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function eb(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + V[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + V[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + V[f] + "Width", !0, e)));
    return g;
  }
  function fb(b, c, e) {
    var f = !0,
      g = "width" === c ? b.offsetWidth : b.offsetHeight,
      h = Ra(b),
      i = l.boxSizing && "border-box" === n.css(b, "boxSizing", !1, h);
    if (
      (d.msFullscreenElement &&
        a.top !== a &&
        b.getClientRects().length &&
        (g = Math.round(100 * b.getBoundingClientRect()[c])),
      0 >= g || null == g)
    ) {
      if (
        ((g = Sa(b, c, h)),
        (0 > g || null == g) && (g = b.style[c]),
        Oa.test(g))
      )
        return g;
      (f = i && (l.boxSizingReliable() || g === b.style[c])),
        (g = parseFloat(g) || 0);
    }
    return g + eb(b, c, e || (i ? "border" : "content"), f, h) + "px";
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Sa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: l.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        if (
          ((b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c)
        )
          return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (
          ((f = typeof c),
          "string" === f &&
            (e = U.exec(c)) &&
            e[1] &&
            ((c = X(a, b, e)), (f = "number")),
          null != c &&
            c === c &&
            ("number" === f &&
              (c += (e && e[3]) || (n.cssNumber[h] ? "" : "px")),
            l.clearCloneStyle ||
              "" !== c ||
              0 !== b.indexOf("background") ||
              (i[b] = "inherit"),
            !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
        )
          try {
            i[b] = c;
          } catch (j) {}
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (f = g.get(a, !0, c)),
        void 0 === f && (f = Sa(a, b, d)),
        "normal" === f && b in $a && (f = $a[b]),
        "" === c || c
          ? ((e = parseFloat(f)), c === !0 || isFinite(e) ? e || 0 : f)
          : f
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? Pa(a, Za, function () {
                  return fb(a, b, d);
                })
              : fb(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && Ra(a);
          return db(
            a,
            c,
            d
              ? eb(
                  a,
                  b,
                  d,
                  l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e),
                  e
                )
              : 0
          );
        },
      };
    }),
    l.opacity ||
      (n.cssHooks.opacity = {
        get: function (a, b) {
          return Wa.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = (d && d.filter) || c.filter || "";
          (c.zoom = 1),
            ((b >= 1 || "" === b) &&
              "" === n.trim(f.replace(Va, "")) &&
              c.removeAttribute &&
              (c.removeAttribute("filter"), "" === b || (d && !d.filter))) ||
              (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
        },
      }),
    (n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
      return b
        ? Pa(a, { display: "inline-block" }, Sa, [a, "marginRight"])
        : void 0;
    })),
    (n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
      return b
        ? (parseFloat(Sa(a, "marginLeft")) ||
            (n.contains(a.ownerDocument, a)
              ? a.getBoundingClientRect().left -
                Pa(a, { marginLeft: 0 }, function () {
                  return a.getBoundingClientRect().left;
                })
              : 0)) + "px"
        : void 0;
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Na.test(a) || (n.cssHooks[a + b].set = db);
    }),
    n.fn.extend({
      css: function (a, b) {
        return Y(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = Ra(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return cb(this, !0);
      },
      hide: function () {
        return cb(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              W(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function gb(a, b, c, d, e) {
    return new gb.prototype.init(a, b, c, d, e);
  }
  (n.Tween = gb),
    (gb.prototype = {
      constructor: gb,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || n.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = gb.propHooks[this.prop];
        return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = gb.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                n.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : gb.propHooks._default.set(this),
          this
        );
      },
    }),
    (gb.prototype.init.prototype = gb.prototype),
    (gb.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : n.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (gb.propHooks.scrollTop = gb.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (n.fx = gb.prototype.init),
    (n.fx.step = {});
  var hb,
    ib,
    jb = /^(?:toggle|show|hide)$/,
    kb = /queueHooks$/;
  function lb() {
    return (
      a.setTimeout(function () {
        hb = void 0;
      }),
      (hb = n.now())
    );
  }
  function mb(a, b) {
    var c,
      d = { height: a },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b)
      (c = V[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function nb(a, b, c) {
    for (
      var d,
        e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]),
        f = 0,
        g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ob(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      m = this,
      o = {},
      p = a.style,
      q = a.nodeType && W(a),
      r = n._data(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      m.always(function () {
        m.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [p.overflow, p.overflowX, p.overflowY]),
        (j = n.css(a, "display")),
        (k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j),
        "inline" === k &&
          "none" === n.css(a, "float") &&
          (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName)
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
      c.overflow &&
        ((p.overflow = "hidden"),
        l.shrinkWrapBlocks() ||
          m.always(function () {
            (p.overflow = c.overflow[0]),
              (p.overflowX = c.overflow[1]),
              (p.overflowY = c.overflow[2]);
          }));
    for (d in b)
      if (((e = b[d]), jb.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (q ? "hide" : "show"))
        ) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }
        o[d] = (r && r[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(o))
      "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
    else {
      r ? "hidden" in r && (q = r.hidden) : (r = n._data(a, "fxshow", {})),
        f && (r.hidden = !q),
        q
          ? n(a).show()
          : m.done(function () {
              n(a).hide();
            }),
        m.done(function () {
          var b;
          n._removeData(a, "fxshow");
          for (b in o) n.style(a, b, o[b]);
        });
      for (d in o)
        (g = nb(q ? r[d] : 0, d, m)),
          d in r ||
            ((r[d] = g.start),
            q &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function pb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function qb(a, b, c) {
    var d,
      e,
      f = 0,
      g = qb.prefilters.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = hb || lb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: hb || lb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for (pb(k, j.opts.specialEasing); g > f; f++)
      if ((d = qb.prefilters[f].call(j, a, k, j.opts)))
        return (
          n.isFunction(d.stop) &&
            (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
          d
        );
    return (
      n.map(k, nb, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(qb, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return X(c.elem, a, U.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(G));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]),
          (qb.tweeners[c] = qb.tweeners[c] || []),
          qb.tweeners[c].unshift(b);
    },
    prefilters: [ob],
    prefilter: function (a, b) {
      b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(W)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = qb(this, n.extend({}, a), f);
            (e || n._data(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = n._data(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = n._data(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(mb(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: mb("show"),
        slideUp: mb("hide"),
        slideToggle: mb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = n.timers,
        c = 0;
      for (hb = n.now(); c < b.length; c++)
        (a = b[c]), a() || b[c] !== a || b.splice(c--, 1);
      b.length || n.fx.stop(), (hb = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      a.clearInterval(ib), (ib = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (b, c) {
      return (
        (b = n.fx ? n.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a,
        b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));
      (c = d.createElement("div")),
        c.setAttribute("className", "t"),
        (c.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (a = c.getElementsByTagName("a")[0]),
        b.setAttribute("type", "checkbox"),
        c.appendChild(b),
        (a = c.getElementsByTagName("a")[0]),
        (a.style.cssText = "top:1px"),
        (l.getSetAttribute = "t" !== c.className),
        (l.style = /top/.test(a.getAttribute("style"))),
        (l.hrefNormalized = "/a" === a.getAttribute("href")),
        (l.checkOn = !!b.value),
        (l.optSelected = f.selected),
        (l.enctype = !!d.createElement("form").enctype),
        (e.disabled = !0),
        (l.optDisabled = !f.disabled),
        (b = d.createElement("input")),
        b.setAttribute("value", ""),
        (l.input = "" === b.getAttribute("value")),
        (b.value = "t"),
        b.setAttribute("type", "radio"),
        (l.radioValue = "t" === b.value);
    })();
  var rb = /\r/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a));
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                (c.selected || i === e) &&
                  (l.optDisabled
                    ? !c.disabled
                    : null === c.getAttribute("disabled")) &&
                  (!c.parentNode.disabled ||
                    !n.nodeName(c.parentNode, "optgroup")))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              if (((d = e[g]), n.inArray(n.valHooks.option.get(d), f) >= 0))
                try {
                  d.selected = c = !0;
                } catch (h) {
                  d.scrollHeight;
                }
              else d.selected = !1;
            return c || (a.selectedIndex = -1), e;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) > -1)
            : void 0;
        },
      }),
        l.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var sb,
    tb,
    ub = n.expr.attrHandle,
    vb = /^(?:checked|selected)$/i,
    wb = l.getSetAttribute,
    xb = l.input;
  n.fn.extend({
    attr: function (a, b) {
      return Y(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb))),
              void 0 !== c
                ? null === c
                  ? void n.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = n.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(G);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c)
                ? (xb && wb) || !vb.test(c)
                  ? (a[d] = !1)
                  : (a[n.camelCase("default-" + c)] = a[d] = !1)
                : n.attr(a, c, ""),
              a.removeAttribute(wb ? c : d);
      },
    }),
    (tb = {
      set: function (a, b, c) {
        return (
          b === !1
            ? n.removeAttr(a, c)
            : (xb && wb) || !vb.test(c)
            ? a.setAttribute((!wb && n.propFix[c]) || c, c)
            : (a[n.camelCase("default-" + c)] = a[c] = !0),
          c
        );
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = ub[b] || n.find.attr;
      (xb && wb) || !vb.test(b)
        ? (ub[b] = function (a, b, d) {
            var e, f;
            return (
              d ||
                ((f = ub[b]),
                (ub[b] = e),
                (e = null != c(a, b, d) ? b.toLowerCase() : null),
                (ub[b] = f)),
              e
            );
          })
        : (ub[b] = function (a, b, c) {
            return c
              ? void 0
              : a[n.camelCase("default-" + b)]
              ? b.toLowerCase()
              : null;
          });
    }),
    (xb && wb) ||
      (n.attrHooks.value = {
        set: function (a, b, c) {
          return n.nodeName(a, "input")
            ? void (a.defaultValue = b)
            : sb && sb.set(a, b, c);
        },
      }),
    wb ||
      ((sb = {
        set: function (a, b, c) {
          var d = a.getAttributeNode(c);
          return (
            d || a.setAttributeNode((d = a.ownerDocument.createAttribute(c))),
            (d.value = b += ""),
            "value" === c || b === a.getAttribute(c) ? b : void 0
          );
        },
      }),
      (ub.id =
        ub.name =
        ub.coords =
          function (a, b, c) {
            var d;
            return c
              ? void 0
              : (d = a.getAttributeNode(b)) && "" !== d.value
              ? d.value
              : null;
          }),
      (n.valHooks.button = {
        get: function (a, b) {
          var c = a.getAttributeNode(b);
          return c && c.specified ? c.value : void 0;
        },
        set: sb.set,
      }),
      (n.attrHooks.contenteditable = {
        set: function (a, b, c) {
          sb.set(a, "" === b ? !1 : b, c);
        },
      }),
      n.each(["width", "height"], function (a, b) {
        n.attrHooks[b] = {
          set: function (a, c) {
            return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
          },
        };
      })),
    l.style ||
      (n.attrHooks.style = {
        get: function (a) {
          return a.style.cssText || void 0;
        },
        set: function (a, b) {
          return (a.style.cssText = b + "");
        },
      });
  var yb = /^(?:input|select|textarea|button|object)$/i,
    zb = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return Y(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = n.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = void 0), delete this[a];
          } catch (b) {}
        })
      );
    },
  }),
    n.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && n.isXMLDoc(a)) ||
              ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = n.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : yb.test(a.nodeName) || (zb.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    l.hrefNormalized ||
      n.each(["href", "src"], function (a, b) {
        n.propHooks[b] = {
          get: function (a) {
            return a.getAttribute(b, 4);
          },
        };
      }),
    l.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return (
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
          );
        },
      }),
    n.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      }
    ),
    l.enctype || (n.propFix.enctype = "encoding");
  var Ab = /[\t\r\n\f]/g;
  function Bb(a) {
    return n.attr(a, "class") || "";
  }
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, Bb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = Bb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")))
          ) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = n.trim(d)), e !== h && n.attr(c, "class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, Bb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = Bb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")))
          ) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = n.trim(d)), e !== h && n.attr(c, "class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : n.isFunction(a)
        ? this.each(function (c) {
            n(this).toggleClass(a.call(this, c, Bb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = n(this)), (f = a.match(G) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 === a || "boolean" === c) && ((b = Bb(this)), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (
          1 === c.nodeType &&
          (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1
        )
          return !0;
      return !1;
    },
  }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    });
  var Cb = a.location,
    Db = n.now(),
    Eb = /\?/,
    Fb =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
      d = null,
      e = n.trim(b + "");
    return e &&
      !n.trim(
        e.replace(Fb, function (a, b, e, f) {
          return (
            c && b && (d = 0), 0 === d ? a : ((c = e || b), (d += !f - !e), "")
          );
        })
      )
      ? Function("return " + e)()
      : n.error("Invalid JSON: " + b);
  }),
    (n.parseXML = function (b) {
      var c, d;
      if (!b || "string" != typeof b) return null;
      try {
        a.DOMParser
          ? ((d = new a.DOMParser()), (c = d.parseFromString(b, "text/xml")))
          : ((c = new a.ActiveXObject("Microsoft.XMLDOM")),
            (c.async = "false"),
            c.loadXML(b));
      } catch (e) {
        c = void 0;
      }
      return (
        (c &&
          c.documentElement &&
          !c.getElementsByTagName("parsererror").length) ||
          n.error("Invalid XML: " + b),
        c
      );
    });
  var Gb = /#.*$/,
    Hb = /([?&])_=[^&]*/,
    Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Kb = /^(?:GET|HEAD)$/,
    Lb = /^\/\//,
    Mb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Nb = {},
    Ob = {},
    Pb = "*/".concat("*"),
    Qb = Cb.href,
    Rb = Mb.exec(Qb.toLowerCase()) || [];
  function Sb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d.charAt(0)
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Tb(a, b, c, d) {
    var e = {},
      f = a === Ob;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Ub(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && n.extend(!0, a, c), a;
  }
  function Vb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }
        d || (d = g);
      }
      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Wb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Qb,
      type: "GET",
      isLocal: Jb.test(Rb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Pb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a);
    },
    ajaxPrefilter: Sb(Nb),
    ajaxTransport: Sb(Ob),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = n.ajaxSetup({}, c),
        m = l.context || l,
        o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
        p = n.Deferred(),
        q = n.Callbacks("once memory"),
        r = l.statusCode || {},
        s = {},
        t = {},
        u = 0,
        v = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === u) {
              if (!k) {
                k = {};
                while ((b = Ib.exec(g))) k[b[1].toLowerCase()] = b[2];
              }
              b = k[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === u ? g : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return u || ((a = t[c] = t[c] || a), (s[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return u || (l.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > u) for (b in a) r[b] = [r[b], a[b]];
              else w.always(a[w.status]);
            return this;
          },
          abort: function (a) {
            var b = a || v;
            return j && j.abort(b), y(0, b), this;
          },
        };
      if (
        ((p.promise(w).complete = q.add),
        (w.success = w.done),
        (w.error = w.fail),
        (l.url = ((b || l.url || Qb) + "")
          .replace(Gb, "")
          .replace(Lb, Rb[1] + "//")),
        (l.type = c.method || c.type || l.method || l.type),
        (l.dataTypes = n
          .trim(l.dataType || "*")
          .toLowerCase()
          .match(G) || [""]),
        null == l.crossDomain &&
          ((d = Mb.exec(l.url.toLowerCase())),
          (l.crossDomain = !(
            !d ||
            (d[1] === Rb[1] &&
              d[2] === Rb[2] &&
              (d[3] || ("http:" === d[1] ? "80" : "443")) ===
                (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))
          ))),
        l.data &&
          l.processData &&
          "string" != typeof l.data &&
          (l.data = n.param(l.data, l.traditional)),
        Tb(Nb, l, c, w),
        2 === u)
      )
        return w;
      (i = n.event && l.global),
        i && 0 === n.active++ && n.event.trigger("ajaxStart"),
        (l.type = l.type.toUpperCase()),
        (l.hasContent = !Kb.test(l.type)),
        (f = l.url),
        l.hasContent ||
          (l.data &&
            ((f = l.url += (Eb.test(f) ? "&" : "?") + l.data), delete l.data),
          l.cache === !1 &&
            (l.url = Hb.test(f)
              ? f.replace(Hb, "$1_=" + Db++)
              : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)),
        l.ifModified &&
          (n.lastModified[f] &&
            w.setRequestHeader("If-Modified-Since", n.lastModified[f]),
          n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
        ((l.data && l.hasContent && l.contentType !== !1) || c.contentType) &&
          w.setRequestHeader("Content-Type", l.contentType),
        w.setRequestHeader(
          "Accept",
          l.dataTypes[0] && l.accepts[l.dataTypes[0]]
            ? l.accepts[l.dataTypes[0]] +
                ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "")
            : l.accepts["*"]
        );
      for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
      if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u))
        return w.abort();
      v = "abort";
      for (e in { success: 1, error: 1, complete: 1 }) w[e](l[e]);
      if ((j = Tb(Ob, l, c, w))) {
        if (((w.readyState = 1), i && o.trigger("ajaxSend", [w, l]), 2 === u))
          return w;
        l.async &&
          l.timeout > 0 &&
          (h = a.setTimeout(function () {
            w.abort("timeout");
          }, l.timeout));
        try {
          (u = 1), j.send(s, y);
        } catch (x) {
          if (!(2 > u)) throw x;
          y(-1, x);
        }
      } else y(-1, "No Transport");
      function y(b, c, d, e) {
        var k,
          s,
          t,
          v,
          x,
          y = c;
        2 !== u &&
          ((u = 2),
          h && a.clearTimeout(h),
          (j = void 0),
          (g = e || ""),
          (w.readyState = b > 0 ? 4 : 0),
          (k = (b >= 200 && 300 > b) || 304 === b),
          d && (v = Vb(l, w, d)),
          (v = Wb(l, v, w, k)),
          k
            ? (l.ifModified &&
                ((x = w.getResponseHeader("Last-Modified")),
                x && (n.lastModified[f] = x),
                (x = w.getResponseHeader("etag")),
                x && (n.etag[f] = x)),
              204 === b || "HEAD" === l.type
                ? (y = "nocontent")
                : 304 === b
                ? (y = "notmodified")
                : ((y = v.state), (s = v.data), (t = v.error), (k = !t)))
            : ((t = y), (b || !y) && ((y = "error"), 0 > b && (b = 0))),
          (w.status = b),
          (w.statusText = (c || y) + ""),
          k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]),
          w.statusCode(r),
          (r = void 0),
          i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]),
          q.fireWith(m, [w, y]),
          i &&
            (o.trigger("ajaxComplete", [w, l]),
            --n.active || n.event.trigger("ajaxStop")));
      }
      return w;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    },
  }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax(
            n.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              n.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        if (n.isFunction(a))
          return this.each(function (b) {
            n(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && 1 === a.firstChild.nodeType)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = n(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    });
  function Xb(a) {
    return (a.style && a.style.display) || n.css(a, "display");
  }
  function Yb(a) {
    while (a && 1 === a.nodeType) {
      if ("none" === Xb(a) || "hidden" === a.type) return !0;
      a = a.parentNode;
    }
    return !1;
  }
  (n.expr.filters.hidden = function (a) {
    return l.reliableHiddenOffsets()
      ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length
      : Yb(a);
  }),
    (n.expr.filters.visible = function (a) {
      return !n.expr.filters.hidden(a);
    });
  var Zb = /%20/g,
    $b = /\[\]$/,
    _b = /\r?\n/g,
    ac = /^(?:submit|button|image|reset|file)$/i,
    bc = /^(?:input|select|textarea|keygen)/i;
  function cc(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || $b.test(a)
          ? d(a, e)
          : cc(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) cc(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) cc(c, a[c], b, e);
    return d.join("&").replace(Zb, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              bc.test(this.nodeName) &&
              !ac.test(a) &&
              (this.checked || !Z.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(_b, "\r\n") };
                })
              : { name: b.name, value: c.replace(_b, "\r\n") };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr =
      void 0 !== a.ActiveXObject
        ? function () {
            return this.isLocal
              ? hc()
              : d.documentMode > 8
              ? gc()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  gc()) ||
                hc();
          }
        : gc);
  var dc = 0,
    ec = {},
    fc = n.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent("onunload", function () {
      for (var a in ec) ec[a](void 0, !0);
    }),
    (l.cors = !!fc && "withCredentials" in fc),
    (fc = l.ajax = !!fc),
    fc &&
      n.ajaxTransport(function (b) {
        if (!b.crossDomain || l.cors) {
          var c;
          return {
            send: function (d, e) {
              var f,
                g = b.xhr(),
                h = ++dc;
              if (
                (g.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
              )
                for (f in b.xhrFields) g[f] = b.xhrFields[f];
              b.mimeType &&
                g.overrideMimeType &&
                g.overrideMimeType(b.mimeType),
                b.crossDomain ||
                  d["X-Requested-With"] ||
                  (d["X-Requested-With"] = "XMLHttpRequest");
              for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
              g.send((b.hasContent && b.data) || null),
                (c = function (a, d) {
                  var f, i, j;
                  if (c && (d || 4 === g.readyState))
                    if (
                      (delete ec[h],
                      (c = void 0),
                      (g.onreadystatechange = n.noop),
                      d)
                    )
                      4 !== g.readyState && g.abort();
                    else {
                      (j = {}),
                        (f = g.status),
                        "string" == typeof g.responseText &&
                          (j.text = g.responseText);
                      try {
                        i = g.statusText;
                      } catch (k) {
                        i = "";
                      }
                      f || !b.isLocal || b.crossDomain
                        ? 1223 === f && (f = 204)
                        : (f = j.text ? 200 : 404);
                    }
                  j && e(f, i, j, g.getAllResponseHeaders());
                }),
                b.async
                  ? 4 === g.readyState
                    ? a.setTimeout(c)
                    : (g.onreadystatechange = ec[h] = c)
                  : c();
            },
            abort: function () {
              c && c(void 0, !0);
            },
          };
        }
      });
  function gc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function hc() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  n.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }),
    n.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (a) {
          return n.globalEval(a), a;
        },
      },
    }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b,
          c = d.head || n("head")[0] || d.documentElement;
        return {
          send: function (e, f) {
            (b = d.createElement("script")),
              (b.async = !0),
              a.scriptCharset && (b.charset = a.scriptCharset),
              (b.src = a.url),
              (b.onload = b.onreadystatechange =
                function (a, c) {
                  (c ||
                    !b.readyState ||
                    /loaded|complete/.test(b.readyState)) &&
                    ((b.onload = b.onreadystatechange = null),
                    b.parentNode && b.parentNode.removeChild(b),
                    (b = null),
                    c || f(200, "success"));
                }),
              c.insertBefore(b, c.firstChild);
          },
          abort: function () {
            b && b.onload(void 0, !0);
          },
        };
      }
    });
  var ic = [],
    jc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = ic.pop() || n.expando + "_" + Db++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (jc.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              jc.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            n.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(jc, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? n(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), ic.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (l.createHTMLDocument = (function () {
      if (!d.implementation.createHTMLDocument) return !1;
      var a = d.implementation.createHTMLDocument("");
      return (
        (a.body.innerHTML = "<form></form><form></form>"),
        2 === a.body.childNodes.length
      );
    })()),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)),
        (b =
          b ||
          (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d));
      var e = x.exec(a),
        f = !c && [];
      return e
        ? [b.createElement(e[1])]
        : ((e = ja([a], b, f)),
          f && f.length && n(f).remove(),
          n.merge([], e.childNodes));
    });
  var kc = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && kc) return kc.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h > -1 && ((d = n.trim(a.slice(h, a.length))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .always(
            c &&
              function (a, b) {
                g.each(function () {
                  c.apply(g, f || [a.responseText, b, a]);
                });
              }
          ),
      this
    );
  }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  function lc(a) {
    return n.isWindow(a)
      ? a
      : 9 === a.nodeType
      ? a.defaultView || a.parentWindow
      : !1;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) &&
          n.inArray("auto", [f, i]) > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, e)
              ? ("undefined" != typeof e.getBoundingClientRect &&
                  (d = e.getBoundingClientRect()),
                (c = lc(f)),
                {
                  top:
                    d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                  left:
                    d.left +
                    (c.pageXOffset || b.scrollLeft) -
                    (b.clientLeft || 0),
                })
              : d
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];
          return (
            "fixed" === n.css(d, "position")
              ? (b = d.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (c = a.offset()),
                (c.top += n.css(a[0], "borderTopWidth", !0)),
                (c.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - c.top - n.css(d, "marginTop", !0),
              left: b.left - c.left - n.css(d, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (
            a &&
            !n.nodeName(a, "html") &&
            "static" === n.css(a, "position")
          )
            a = a.offsetParent;
          return a || Qa;
        });
      },
    }),
    n.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function (d) {
          return Y(
            this,
            function (a, d, e) {
              var f = lc(a);
              return void 0 === e
                ? f
                  ? b in f
                    ? f[b]
                    : f.document.documentElement[d]
                  : a[d]
                : void (f
                    ? f.scrollTo(
                        c ? n(f).scrollLeft() : e,
                        c ? e : n(f).scrollTop()
                      )
                    : (a[d] = e));
            },
            a,
            d,
            arguments.length,
            null
          );
        };
      }
    ),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
        return c
          ? ((c = Sa(a, b)), Oa.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return Y(
              this,
              function (b, c, d) {
                var e;
                return n.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? n.css(b, c, g)
                  : n.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    n.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    }),
    (n.fn.size = function () {
      return this.length;
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      });
  var mc = a.jQuery,
    nc = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n;
    }),
    b || (a.jQuery = a.$ = n),
    n
  );
});

!(function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
  function e(e, s) {
    var o,
      n,
      r,
      a = e.nodeName.toLowerCase();
    return "area" === a
      ? ((o = e.parentNode),
        (n = o.name),
        e.href && n && "map" === o.nodeName.toLowerCase()
          ? ((r = t("img[usemap='#" + n + "']")[0]), !!r && i(r))
          : !1)
      : (/^(input|select|textarea|button|object)$/.test(a)
          ? !e.disabled
          : "a" === a
          ? e.href || s
          : s) && i(e);
  }
  function i(e) {
    return (
      t.expr.filters.visible(e) &&
      !t(e)
        .parents()
        .addBack()
        .filter(function () {
          return "hidden" === t.css(this, "visibility");
        }).length
    );
  }
  (t.ui = t.ui || {}),
    t.extend(t.ui, {
      version: "1.11.4",
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      },
    }),
    t.fn.extend({
      scrollParent: function (e) {
        var i = this.css("position"),
          s = "absolute" === i,
          o = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          n = this.parents()
            .filter(function () {
              var e = t(this);
              return s && "static" === e.css("position")
                ? !1
                : o.test(
                    e.css("overflow") +
                      e.css("overflow-y") +
                      e.css("overflow-x")
                  );
            })
            .eq(0);
        return "fixed" !== i && n.length
          ? n
          : t(this[0].ownerDocument || document);
      },
      uniqueId: (function () {
        var t = 0;
        return function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++t);
          });
        };
      })(),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
        });
      },
    }),
    t.extend(t.expr[":"], {
      data: t.expr.createPseudo
        ? t.expr.createPseudo(function (e) {
            return function (i) {
              return !!t.data(i, e);
            };
          })
        : function (e, i, s) {
            return !!t.data(e, s[3]);
          },
      focusable: function (i) {
        return e(i, !isNaN(t.attr(i, "tabindex")));
      },
      tabbable: function (i) {
        var s = t.attr(i, "tabindex"),
          o = isNaN(s);
        return (o || s >= 0) && e(i, !o);
      },
    }),
    t("<a>").outerWidth(1).jquery ||
      t.each(["Width", "Height"], function (e, i) {
        function s(e, i, s, n) {
          return (
            t.each(o, function () {
              (i -= parseFloat(t.css(e, "padding" + this)) || 0),
                s &&
                  (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                n && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
            }),
            i
          );
        }
        var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
          n = i.toLowerCase(),
          r = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight,
          };
        (t.fn["inner" + i] = function (e) {
          return void 0 === e
            ? r["inner" + i].call(this)
            : this.each(function () {
                t(this).css(n, s(this, e) + "px");
              });
        }),
          (t.fn["outer" + i] = function (e, o) {
            return "number" != typeof e
              ? r["outer" + i].call(this, e)
              : this.each(function () {
                  t(this).css(n, s(this, e, !0, o) + "px");
                });
          });
      }),
    t.fn.addBack ||
      (t.fn.addBack = function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      }),
    t("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
      (t.fn.removeData = (function (e) {
        return function (i) {
          return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this);
        };
      })(t.fn.removeData)),
    (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    t.fn.extend({
      focus: (function (e) {
        return function (i, s) {
          return "number" == typeof i
            ? this.each(function () {
                var e = this;
                setTimeout(function () {
                  t(e).focus(), s && s.call(e);
                }, i);
              })
            : e.apply(this, arguments);
        };
      })(t.fn.focus),
      disableSelection: (function () {
        var t =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown";
        return function () {
          return this.bind(t + ".ui-disableSelection", function (t) {
            t.preventDefault();
          });
        };
      })(),
      enableSelection: function () {
        return this.unbind(".ui-disableSelection");
      },
      zIndex: function (e) {
        if (void 0 !== e) return this.css("zIndex", e);
        if (this.length)
          for (var i, s, o = t(this[0]); o.length && o[0] !== document; ) {
            if (
              ((i = o.css("position")),
              ("absolute" === i || "relative" === i || "fixed" === i) &&
                ((s = parseInt(o.css("zIndex"), 10)), !isNaN(s) && 0 !== s))
            )
              return s;
            o = o.parent();
          }
        return 0;
      },
    }),
    (t.ui.plugin = {
      add: function (e, i, s) {
        var o,
          n = t.ui[e].prototype;
        for (o in s)
          (n.plugins[o] = n.plugins[o] || []), n.plugins[o].push([i, s[o]]);
      },
      call: function (t, e, i, s) {
        var o,
          n = t.plugins[e];
        if (
          n &&
          (s ||
            (t.element[0].parentNode &&
              11 !== t.element[0].parentNode.nodeType))
        )
          for (o = 0; n.length > o; o++)
            t.options[n[o][0]] && n[o][1].apply(t.element, i);
      },
    });
  var s = 0,
    o = Array.prototype.slice;
  (t.cleanData = (function (e) {
    return function (i) {
      var s, o, n;
      for (n = 0; null != (o = i[n]); n++)
        try {
          (s = t._data(o, "events")),
            s && s.remove && t(o).triggerHandler("remove");
        } catch (r) {}
      e(i);
    };
  })(t.cleanData)),
    (t.widget = function (e, i, s) {
      var o,
        n,
        r,
        a,
        l = {},
        h = e.split(".")[0];
      return (
        (e = e.split(".")[1]),
        (o = h + "-" + e),
        s || ((s = i), (i = t.Widget)),
        (t.expr[":"][o.toLowerCase()] = function (e) {
          return !!t.data(e, o);
        }),
        (t[h] = t[h] || {}),
        (n = t[h][e]),
        (r = t[h][e] =
          function (t, e) {
            return this._createWidget
              ? void (arguments.length && this._createWidget(t, e))
              : new r(t, e);
          }),
        t.extend(r, n, {
          version: s.version,
          _proto: t.extend({}, s),
          _childConstructors: [],
        }),
        (a = new i()),
        (a.options = t.widget.extend({}, a.options)),
        t.each(s, function (e, s) {
          return t.isFunction(s)
            ? void (l[e] = (function () {
                var t = function () {
                    return i.prototype[e].apply(this, arguments);
                  },
                  o = function (t) {
                    return i.prototype[e].apply(this, t);
                  };
                return function () {
                  var e,
                    i = this._super,
                    n = this._superApply;
                  return (
                    (this._super = t),
                    (this._superApply = o),
                    (e = s.apply(this, arguments)),
                    (this._super = i),
                    (this._superApply = n),
                    e
                  );
                };
              })())
            : void (l[e] = s);
        }),
        (r.prototype = t.widget.extend(
          a,
          { widgetEventPrefix: n ? a.widgetEventPrefix || e : e },
          l,
          { constructor: r, namespace: h, widgetName: e, widgetFullName: o }
        )),
        n
          ? (t.each(n._childConstructors, function (e, i) {
              var s = i.prototype;
              t.widget(s.namespace + "." + s.widgetName, r, i._proto);
            }),
            delete n._childConstructors)
          : i._childConstructors.push(r),
        t.widget.bridge(e, r),
        r
      );
    }),
    (t.widget.extend = function (e) {
      for (var i, s, n = o.call(arguments, 1), r = 0, a = n.length; a > r; r++)
        for (i in n[r])
          (s = n[r][i]),
            n[r].hasOwnProperty(i) &&
              void 0 !== s &&
              (e[i] = t.isPlainObject(s)
                ? t.isPlainObject(e[i])
                  ? t.widget.extend({}, e[i], s)
                  : t.widget.extend({}, s)
                : s);
      return e;
    }),
    (t.widget.bridge = function (e, i) {
      var s = i.prototype.widgetFullName || e;
      t.fn[e] = function (n) {
        var r = "string" == typeof n,
          a = o.call(arguments, 1),
          l = this;
        return (
          r
            ? this.each(function () {
                var i,
                  o = t.data(this, s);
                return "instance" === n
                  ? ((l = o), !1)
                  : o
                  ? t.isFunction(o[n]) && "_" !== n.charAt(0)
                    ? ((i = o[n].apply(o, a)),
                      i !== o && void 0 !== i
                        ? ((l = i && i.jquery ? l.pushStack(i.get()) : i), !1)
                        : void 0)
                    : t.error(
                        "no such method '" +
                          n +
                          "' for " +
                          e +
                          " widget instance"
                      )
                  : t.error(
                      "cannot call methods on " +
                        e +
                        " prior to initialization; attempted to call method '" +
                        n +
                        "'"
                    );
              })
            : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))),
              this.each(function () {
                var e = t.data(this, s);
                e
                  ? (e.option(n || {}), e._init && e._init())
                  : t.data(this, s, new i(n, this));
              })),
          l
        );
      };
    }),
    (t.Widget = function () {}),
    (t.Widget._childConstructors = []),
    (t.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { disabled: !1, create: null },
      _createWidget: function (e, i) {
        (i = t(i || this.defaultElement || this)[0]),
          (this.element = t(i)),
          (this.uuid = s++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = t()),
          (this.hoverable = t()),
          (this.focusable = t()),
          i !== this &&
            (t.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === i && this.destroy();
              },
            }),
            (this.document = t(i.style ? i.ownerDocument : i.document || i)),
            (this.window = t(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = t.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            e
          )),
          this._create(),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: t.noop,
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function () {
        this._destroy(),
          this.element
            .unbind(this.eventNamespace)
            .removeData(this.widgetFullName)
            .removeData(t.camelCase(this.widgetFullName)),
          this.widget()
            .unbind(this.eventNamespace)
            .removeAttr("aria-disabled")
            .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
          this.bindings.unbind(this.eventNamespace),
          this.hoverable.removeClass("ui-state-hover"),
          this.focusable.removeClass("ui-state-focus");
      },
      _destroy: t.noop,
      widget: function () {
        return this.element;
      },
      option: function (e, i) {
        var s,
          o,
          n,
          r = e;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ("string" == typeof e)
          if (((r = {}), (s = e.split(".")), (e = s.shift()), s.length)) {
            for (
              o = r[e] = t.widget.extend({}, this.options[e]), n = 0;
              s.length - 1 > n;
              n++
            )
              (o[s[n]] = o[s[n]] || {}), (o = o[s[n]]);
            if (((e = s.pop()), 1 === arguments.length))
              return void 0 === o[e] ? null : o[e];
            o[e] = i;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[e] ? null : this.options[e];
            r[e] = i;
          }
        return this._setOptions(r), this;
      },
      _setOptions: function (t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          (this.options[t] = e),
          "disabled" === t &&
            (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e),
            e &&
              (this.hoverable.removeClass("ui-state-hover"),
              this.focusable.removeClass("ui-state-focus"))),
          this
        );
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _on: function (e, i, s) {
        var o,
          n = this;
        "boolean" != typeof e && ((s = i), (i = e), (e = !1)),
          s
            ? ((i = o = t(i)), (this.bindings = this.bindings.add(i)))
            : ((s = i), (i = this.element), (o = this.widget())),
          t.each(s, function (s, r) {
            function a() {
              return e ||
                (n.options.disabled !== !0 &&
                  !t(this).hasClass("ui-state-disabled"))
                ? ("string" == typeof r ? n[r] : r).apply(n, arguments)
                : void 0;
            }
            "string" != typeof r &&
              (a.guid = r.guid = r.guid || a.guid || t.guid++);
            var l = s.match(/^([\w:-]*)\s*(.*)$/),
              h = l[1] + n.eventNamespace,
              c = l[2];
            c ? o.delegate(c, h, a) : i.bind(h, a);
          });
      },
      _off: function (e, i) {
        (i =
          (i || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          e.unbind(i).undelegate(i),
          (this.bindings = t(this.bindings.not(e).get())),
          (this.focusable = t(this.focusable.not(e).get())),
          (this.hoverable = t(this.hoverable.not(e).get()));
      },
      _delay: function (t, e) {
        function i() {
          return ("string" == typeof t ? s[t] : t).apply(s, arguments);
        }
        var s = this;
        return setTimeout(i, e || 0);
      },
      _hoverable: function (e) {
        (this.hoverable = this.hoverable.add(e)),
          this._on(e, {
            mouseenter: function (e) {
              t(e.currentTarget).addClass("ui-state-hover");
            },
            mouseleave: function (e) {
              t(e.currentTarget).removeClass("ui-state-hover");
            },
          });
      },
      _focusable: function (e) {
        (this.focusable = this.focusable.add(e)),
          this._on(e, {
            focusin: function (e) {
              t(e.currentTarget).addClass("ui-state-focus");
            },
            focusout: function (e) {
              t(e.currentTarget).removeClass("ui-state-focus");
            },
          });
      },
      _trigger: function (e, i, s) {
        var o,
          n,
          r = this.options[e];
        if (
          ((s = s || {}),
          (i = t.Event(i)),
          (i.type = (
            e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
          ).toLowerCase()),
          (i.target = this.element[0]),
          (n = i.originalEvent))
        )
          for (o in n) o in i || (i[o] = n[o]);
        return (
          this.element.trigger(i, s),
          !(
            (t.isFunction(r) &&
              r.apply(this.element[0], [i].concat(s)) === !1) ||
            i.isDefaultPrevented()
          )
        );
      },
    }),
    t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
      t.Widget.prototype["_" + e] = function (s, o, n) {
        "string" == typeof o && (o = { effect: o });
        var r,
          a = o ? (o === !0 || "number" == typeof o ? i : o.effect || i) : e;
        (o = o || {}),
          "number" == typeof o && (o = { duration: o }),
          (r = !t.isEmptyObject(o)),
          (o.complete = n),
          o.delay && s.delay(o.delay),
          r && t.effects && t.effects.effect[a]
            ? s[e](o)
            : a !== e && s[a]
            ? s[a](o.duration, o.easing, n)
            : s.queue(function (i) {
                t(this)[e](), n && n.call(s[0]), i();
              });
      };
    }),
    t.widget;
  var n = !1;
  t(document).mouseup(function () {
    n = !1;
  }),
    t.widget("ui.mouse", {
      version: "1.11.4",
      options: {
        cancel: "input,textarea,button,select,option",
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var e = this;
        this.element
          .bind("mousedown." + this.widgetName, function (t) {
            return e._mouseDown(t);
          })
          .bind("click." + this.widgetName, function (i) {
            return !0 === t.data(i.target, e.widgetName + ".preventClickEvent")
              ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1)
              : void 0;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (e) {
        if (!n) {
          (this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(e),
            (this._mouseDownEvent = e);
          var i = this,
            s = 1 === e.which,
            o =
              "string" == typeof this.options.cancel && e.target.nodeName
                ? t(e.target).closest(this.options.cancel).length
                : !1;
          return s && !o && this._mouseCapture(e)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  i.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(e) &&
              this._mouseDelayMet(e) &&
              ((this._mouseStarted = this._mouseStart(e) !== !1),
              !this._mouseStarted)
                ? (e.preventDefault(), !0)
                : (!0 ===
                    t.data(e.target, this.widgetName + ".preventClickEvent") &&
                    t.removeData(
                      e.target,
                      this.widgetName + ".preventClickEvent"
                    ),
                  (this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t);
                  }),
                  (this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t);
                  }),
                  this.document
                    .bind(
                      "mousemove." + this.widgetName,
                      this._mouseMoveDelegate
                    )
                    .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                  e.preventDefault(),
                  (n = !0),
                  !0))
            : !0;
        }
      },
      _mouseMove: function (e) {
        if (this._mouseMoved) {
          if (
            t.ui.ie &&
            (!document.documentMode || 9 > document.documentMode) &&
            !e.button
          )
            return this._mouseUp(e);
          if (!e.which) return this._mouseUp(e);
        }
        return (
          (e.which || e.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(e), e.preventDefault())
            : (this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, e) !== !1),
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (e) {
        return (
          this.document
            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            e.target === this._mouseDownEvent.target &&
              t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
          (n = !1),
          !1
        );
      },
      _mouseDistanceMet: function (t) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - t.pageX),
            Math.abs(this._mouseDownEvent.pageY - t.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    }),
    t.widget("ui.draggable", t.ui.mouse, {
      version: "1.11.4",
      widgetEventPrefix: "drag",
      options: {
        addClasses: !0,
        appendTo: "parent",
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: "default",
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: "both",
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null,
      },
      _create: function () {
        "original" === this.options.helper && this._setPositionRelative(),
          this.options.addClasses && this.element.addClass("ui-draggable"),
          this.options.disabled &&
            this.element.addClass("ui-draggable-disabled"),
          this._setHandleClassName(),
          this._mouseInit();
      },
      _setOption: function (t, e) {
        this._super(t, e),
          "handle" === t &&
            (this._removeHandleClassName(), this._setHandleClassName());
      },
      _destroy: function () {
        return (this.helper || this.element).is(".ui-draggable-dragging")
          ? void (this.destroyOnClear = !0)
          : (this.element.removeClass(
              "ui-draggable ui-draggable-dragging ui-draggable-disabled"
            ),
            this._removeHandleClassName(),
            void this._mouseDestroy());
      },
      _mouseCapture: function (e) {
        var i = this.options;
        return (
          this._blurActiveElement(e),
          this.helper ||
          i.disabled ||
          t(e.target).closest(".ui-resizable-handle").length > 0
            ? !1
            : ((this.handle = this._getHandle(e)),
              this.handle
                ? (this._blockFrames(
                    i.iframeFix === !0 ? "iframe" : i.iframeFix
                  ),
                  !0)
                : !1)
        );
      },
      _blockFrames: function (e) {
        this.iframeBlocks = this.document.find(e).map(function () {
          var e = t(this);
          return t("<div>")
            .css("position", "absolute")
            .appendTo(e.parent())
            .outerWidth(e.outerWidth())
            .outerHeight(e.outerHeight())
            .offset(e.offset())[0];
        });
      },
      _unblockFrames: function () {
        this.iframeBlocks &&
          (this.iframeBlocks.remove(), delete this.iframeBlocks);
      },
      _blurActiveElement: function (e) {
        var i = this.document[0];
        if (this.handleElement.is(e.target))
          try {
            i.activeElement &&
              "body" !== i.activeElement.nodeName.toLowerCase() &&
              t(i.activeElement).blur();
          } catch (s) {}
      },
      _mouseStart: function (e) {
        var i = this.options;
        return (
          (this.helper = this._createHelper(e)),
          this.helper.addClass("ui-draggable-dragging"),
          this._cacheHelperProportions(),
          t.ui.ddmanager && (t.ui.ddmanager.current = this),
          this._cacheMargins(),
          (this.cssPosition = this.helper.css("position")),
          (this.scrollParent = this.helper.scrollParent(!0)),
          (this.offsetParent = this.helper.offsetParent()),
          (this.hasFixedAncestor =
            this.helper.parents().filter(function () {
              return "fixed" === t(this).css("position");
            }).length > 0),
          (this.positionAbs = this.element.offset()),
          this._refreshOffsets(e),
          (this.originalPosition = this.position =
            this._generatePosition(e, !1)),
          (this.originalPageX = e.pageX),
          (this.originalPageY = e.pageY),
          i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
          this._setContainment(),
          this._trigger("start", e) === !1
            ? (this._clear(), !1)
            : (this._cacheHelperProportions(),
              t.ui.ddmanager &&
                !i.dropBehaviour &&
                t.ui.ddmanager.prepareOffsets(this, e),
              this._normalizeRightBottom(),
              this._mouseDrag(e, !0),
              t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
              !0)
        );
      },
      _refreshOffsets: function (t) {
        (this.offset = {
          top: this.positionAbs.top - this.margins.top,
          left: this.positionAbs.left - this.margins.left,
          scroll: !1,
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset(),
        }),
          (this.offset.click = {
            left: t.pageX - this.offset.left,
            top: t.pageY - this.offset.top,
          });
      },
      _mouseDrag: function (e, i) {
        if (
          (this.hasFixedAncestor &&
            (this.offset.parent = this._getParentOffset()),
          (this.position = this._generatePosition(e, !0)),
          (this.positionAbs = this._convertPositionTo("absolute")),
          !i)
        ) {
          var s = this._uiHash();
          if (this._trigger("drag", e, s) === !1) return this._mouseUp({}), !1;
          this.position = s.position;
        }
        return (
          (this.helper[0].style.left = this.position.left + "px"),
          (this.helper[0].style.top = this.position.top + "px"),
          t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
          !1
        );
      },
      _mouseStop: function (e) {
        var i = this,
          s = !1;
        return (
          t.ui.ddmanager &&
            !this.options.dropBehaviour &&
            (s = t.ui.ddmanager.drop(this, e)),
          this.dropped && ((s = this.dropped), (this.dropped = !1)),
          ("invalid" === this.options.revert && !s) ||
          ("valid" === this.options.revert && s) ||
          this.options.revert === !0 ||
          (t.isFunction(this.options.revert) &&
            this.options.revert.call(this.element, s))
            ? t(this.helper).animate(
                this.originalPosition,
                parseInt(this.options.revertDuration, 10),
                function () {
                  i._trigger("stop", e) !== !1 && i._clear();
                }
              )
            : this._trigger("stop", e) !== !1 && this._clear(),
          !1
        );
      },
      _mouseUp: function (e) {
        return (
          this._unblockFrames(),
          t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
          this.handleElement.is(e.target) && this.element.focus(),
          t.ui.mouse.prototype._mouseUp.call(this, e)
        );
      },
      cancel: function () {
        return (
          this.helper.is(".ui-draggable-dragging")
            ? this._mouseUp({})
            : this._clear(),
          this
        );
      },
      _getHandle: function (e) {
        return this.options.handle
          ? !!t(e.target).closest(this.element.find(this.options.handle)).length
          : !0;
      },
      _setHandleClassName: function () {
        (this.handleElement = this.options.handle
          ? this.element.find(this.options.handle)
          : this.element),
          this.handleElement.addClass("ui-draggable-handle");
      },
      _removeHandleClassName: function () {
        this.handleElement.removeClass("ui-draggable-handle");
      },
      _createHelper: function (e) {
        var i = this.options,
          s = t.isFunction(i.helper),
          o = s
            ? t(i.helper.apply(this.element[0], [e]))
            : "clone" === i.helper
            ? this.element.clone().removeAttr("id")
            : this.element;
        return (
          o.parents("body").length ||
            o.appendTo(
              "parent" === i.appendTo ? this.element[0].parentNode : i.appendTo
            ),
          s && o[0] === this.element[0] && this._setPositionRelative(),
          o[0] === this.element[0] ||
            /(fixed|absolute)/.test(o.css("position")) ||
            o.css("position", "absolute"),
          o
        );
      },
      _setPositionRelative: function () {
        /^(?:r|a|f)/.test(this.element.css("position")) ||
          (this.element[0].style.position = "relative");
      },
      _adjustOffsetFromHelper: function (e) {
        "string" == typeof e && (e = e.split(" ")),
          t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
          "left" in e && (this.offset.click.left = e.left + this.margins.left),
          "right" in e &&
            (this.offset.click.left =
              this.helperProportions.width - e.right + this.margins.left),
          "top" in e && (this.offset.click.top = e.top + this.margins.top),
          "bottom" in e &&
            (this.offset.click.top =
              this.helperProportions.height - e.bottom + this.margins.top);
      },
      _isRootNode: function (t) {
        return /(html|body)/i.test(t.tagName) || t === this.document[0];
      },
      _getParentOffset: function () {
        var e = this.offsetParent.offset(),
          i = this.document[0];
        return (
          "absolute" === this.cssPosition &&
            this.scrollParent[0] !== i &&
            t.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((e.left += this.scrollParent.scrollLeft()),
            (e.top += this.scrollParent.scrollTop())),
          this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }),
          {
            top:
              e.top +
              (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left:
              e.left +
              (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
        var t = this.element.position(),
          e = this._isRootNode(this.scrollParent[0]);
        return {
          top:
            t.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            (e ? 0 : this.scrollParent.scrollTop()),
          left:
            t.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            (e ? 0 : this.scrollParent.scrollLeft()),
        };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css("marginLeft"), 10) || 0,
          top: parseInt(this.element.css("marginTop"), 10) || 0,
          right: parseInt(this.element.css("marginRight"), 10) || 0,
          bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var e,
          i,
          s,
          o = this.options,
          n = this.document[0];
        return (
          (this.relativeContainer = null),
          o.containment
            ? "window" === o.containment
              ? void (this.containment = [
                  t(window).scrollLeft() -
                    this.offset.relative.left -
                    this.offset.parent.left,
                  t(window).scrollTop() -
                    this.offset.relative.top -
                    this.offset.parent.top,
                  t(window).scrollLeft() +
                    t(window).width() -
                    this.helperProportions.width -
                    this.margins.left,
                  t(window).scrollTop() +
                    (t(window).height() || n.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ])
              : "document" === o.containment
              ? void (this.containment = [
                  0,
                  0,
                  t(n).width() -
                    this.helperProportions.width -
                    this.margins.left,
                  (t(n).height() || n.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ])
              : o.containment.constructor === Array
              ? void (this.containment = o.containment)
              : ("parent" === o.containment &&
                  (o.containment = this.helper[0].parentNode),
                (i = t(o.containment)),
                (s = i[0]),
                void (
                  s &&
                  ((e = /(scroll|auto)/.test(i.css("overflow"))),
                  (this.containment = [
                    (parseInt(i.css("borderLeftWidth"), 10) || 0) +
                      (parseInt(i.css("paddingLeft"), 10) || 0),
                    (parseInt(i.css("borderTopWidth"), 10) || 0) +
                      (parseInt(i.css("paddingTop"), 10) || 0),
                    (e
                      ? Math.max(s.scrollWidth, s.offsetWidth)
                      : s.offsetWidth) -
                      (parseInt(i.css("borderRightWidth"), 10) || 0) -
                      (parseInt(i.css("paddingRight"), 10) || 0) -
                      this.helperProportions.width -
                      this.margins.left -
                      this.margins.right,
                    (e
                      ? Math.max(s.scrollHeight, s.offsetHeight)
                      : s.offsetHeight) -
                      (parseInt(i.css("borderBottomWidth"), 10) || 0) -
                      (parseInt(i.css("paddingBottom"), 10) || 0) -
                      this.helperProportions.height -
                      this.margins.top -
                      this.margins.bottom,
                  ]),
                  (this.relativeContainer = i))
                ))
            : void (this.containment = null)
        );
      },
      _convertPositionTo: function (t, e) {
        e || (e = this.position);
        var i = "absolute" === t ? 1 : -1,
          s = this._isRootNode(this.scrollParent[0]);
        return {
          top:
            e.top +
            this.offset.relative.top * i +
            this.offset.parent.top * i -
            ("fixed" === this.cssPosition
              ? -this.offset.scroll.top
              : s
              ? 0
              : this.offset.scroll.top) *
              i,
          left:
            e.left +
            this.offset.relative.left * i +
            this.offset.parent.left * i -
            ("fixed" === this.cssPosition
              ? -this.offset.scroll.left
              : s
              ? 0
              : this.offset.scroll.left) *
              i,
        };
      },
      _generatePosition: function (t, e) {
        var i,
          s,
          o,
          n,
          r = this.options,
          a = this._isRootNode(this.scrollParent[0]),
          l = t.pageX,
          h = t.pageY;
        return (
          (a && this.offset.scroll) ||
            (this.offset.scroll = {
              top: this.scrollParent.scrollTop(),
              left: this.scrollParent.scrollLeft(),
            }),
          e &&
            (this.containment &&
              (this.relativeContainer
                ? ((s = this.relativeContainer.offset()),
                  (i = [
                    this.containment[0] + s.left,
                    this.containment[1] + s.top,
                    this.containment[2] + s.left,
                    this.containment[3] + s.top,
                  ]))
                : (i = this.containment),
              t.pageX - this.offset.click.left < i[0] &&
                (l = i[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < i[1] &&
                (h = i[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > i[2] &&
                (l = i[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > i[3] &&
                (h = i[3] + this.offset.click.top)),
            r.grid &&
              ((o = r.grid[1]
                ? this.originalPageY +
                  Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1]
                : this.originalPageY),
              (h = i
                ? o - this.offset.click.top >= i[1] ||
                  o - this.offset.click.top > i[3]
                  ? o
                  : o - this.offset.click.top >= i[1]
                  ? o - r.grid[1]
                  : o + r.grid[1]
                : o),
              (n = r.grid[0]
                ? this.originalPageX +
                  Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0]
                : this.originalPageX),
              (l = i
                ? n - this.offset.click.left >= i[0] ||
                  n - this.offset.click.left > i[2]
                  ? n
                  : n - this.offset.click.left >= i[0]
                  ? n - r.grid[0]
                  : n + r.grid[0]
                : n)),
            "y" === r.axis && (l = this.originalPageX),
            "x" === r.axis && (h = this.originalPageY)),
          {
            top:
              h -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.top
                : a
                ? 0
                : this.offset.scroll.top),
            left:
              l -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.left
                : a
                ? 0
                : this.offset.scroll.left),
          }
        );
      },
      _clear: function () {
        this.helper.removeClass("ui-draggable-dragging"),
          this.helper[0] === this.element[0] ||
            this.cancelHelperRemoval ||
            this.helper.remove(),
          (this.helper = null),
          (this.cancelHelperRemoval = !1),
          this.destroyOnClear && this.destroy();
      },
      _normalizeRightBottom: function () {
        "y" !== this.options.axis &&
          "auto" !== this.helper.css("right") &&
          (this.helper.width(this.helper.width()),
          this.helper.css("right", "auto")),
          "x" !== this.options.axis &&
            "auto" !== this.helper.css("bottom") &&
            (this.helper.height(this.helper.height()),
            this.helper.css("bottom", "auto"));
      },
      _trigger: function (e, i, s) {
        return (
          (s = s || this._uiHash()),
          t.ui.plugin.call(this, e, [i, s, this], !0),
          /^(drag|start|stop)/.test(e) &&
            ((this.positionAbs = this._convertPositionTo("absolute")),
            (s.offset = this.positionAbs)),
          t.Widget.prototype._trigger.call(this, e, i, s)
        );
      },
      plugins: {},
      _uiHash: function () {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs,
        };
      },
    }),
    t.ui.plugin.add("draggable", "connectToSortable", {
      start: function (e, i, s) {
        var o = t.extend({}, i, { item: s.element });
        (s.sortables = []),
          t(s.options.connectToSortable).each(function () {
            var i = t(this).sortable("instance");
            i &&
              !i.options.disabled &&
              (s.sortables.push(i),
              i.refreshPositions(),
              i._trigger("activate", e, o));
          });
      },
      stop: function (e, i, s) {
        var o = t.extend({}, i, { item: s.element });
        (s.cancelHelperRemoval = !1),
          t.each(s.sortables, function () {
            var t = this;
            t.isOver
              ? ((t.isOver = 0),
                (s.cancelHelperRemoval = !0),
                (t.cancelHelperRemoval = !1),
                (t._storedCSS = {
                  position: t.placeholder.css("position"),
                  top: t.placeholder.css("top"),
                  left: t.placeholder.css("left"),
                }),
                t._mouseStop(e),
                (t.options.helper = t.options._helper))
              : ((t.cancelHelperRemoval = !0), t._trigger("deactivate", e, o));
          });
      },
      drag: function (e, i, s) {
        t.each(s.sortables, function () {
          var o = !1,
            n = this;
          (n.positionAbs = s.positionAbs),
            (n.helperProportions = s.helperProportions),
            (n.offset.click = s.offset.click),
            n._intersectsWith(n.containerCache) &&
              ((o = !0),
              t.each(s.sortables, function () {
                return (
                  (this.positionAbs = s.positionAbs),
                  (this.helperProportions = s.helperProportions),
                  (this.offset.click = s.offset.click),
                  this !== n &&
                    this._intersectsWith(this.containerCache) &&
                    t.contains(n.element[0], this.element[0]) &&
                    (o = !1),
                  o
                );
              })),
            o
              ? (n.isOver ||
                  ((n.isOver = 1),
                  (s._parent = i.helper.parent()),
                  (n.currentItem = i.helper
                    .appendTo(n.element)
                    .data("ui-sortable-item", !0)),
                  (n.options._helper = n.options.helper),
                  (n.options.helper = function () {
                    return i.helper[0];
                  }),
                  (e.target = n.currentItem[0]),
                  n._mouseCapture(e, !0),
                  n._mouseStart(e, !0, !0),
                  (n.offset.click.top = s.offset.click.top),
                  (n.offset.click.left = s.offset.click.left),
                  (n.offset.parent.left -=
                    s.offset.parent.left - n.offset.parent.left),
                  (n.offset.parent.top -=
                    s.offset.parent.top - n.offset.parent.top),
                  s._trigger("toSortable", e),
                  (s.dropped = n.element),
                  t.each(s.sortables, function () {
                    this.refreshPositions();
                  }),
                  (s.currentItem = s.element),
                  (n.fromOutside = s)),
                n.currentItem && (n._mouseDrag(e), (i.position = n.position)))
              : n.isOver &&
                ((n.isOver = 0),
                (n.cancelHelperRemoval = !0),
                (n.options._revert = n.options.revert),
                (n.options.revert = !1),
                n._trigger("out", e, n._uiHash(n)),
                n._mouseStop(e, !0),
                (n.options.revert = n.options._revert),
                (n.options.helper = n.options._helper),
                n.placeholder && n.placeholder.remove(),
                i.helper.appendTo(s._parent),
                s._refreshOffsets(e),
                (i.position = s._generatePosition(e, !0)),
                s._trigger("fromSortable", e),
                (s.dropped = !1),
                t.each(s.sortables, function () {
                  this.refreshPositions();
                }));
        });
      },
    }),
    t.ui.plugin.add("draggable", "cursor", {
      start: function (e, i, s) {
        var o = t("body"),
          n = s.options;
        o.css("cursor") && (n._cursor = o.css("cursor")),
          o.css("cursor", n.cursor);
      },
      stop: function (e, i, s) {
        var o = s.options;
        o._cursor && t("body").css("cursor", o._cursor);
      },
    }),
    t.ui.plugin.add("draggable", "opacity", {
      start: function (e, i, s) {
        var o = t(i.helper),
          n = s.options;
        o.css("opacity") && (n._opacity = o.css("opacity")),
          o.css("opacity", n.opacity);
      },
      stop: function (e, i, s) {
        var o = s.options;
        o._opacity && t(i.helper).css("opacity", o._opacity);
      },
    }),
    t.ui.plugin.add("draggable", "scroll", {
      start: function (t, e, i) {
        i.scrollParentNotHidden ||
          (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
          i.scrollParentNotHidden[0] !== i.document[0] &&
            "HTML" !== i.scrollParentNotHidden[0].tagName &&
            (i.overflowOffset = i.scrollParentNotHidden.offset());
      },
      drag: function (e, i, s) {
        var o = s.options,
          n = !1,
          r = s.scrollParentNotHidden[0],
          a = s.document[0];
        r !== a && "HTML" !== r.tagName
          ? ((o.axis && "x" === o.axis) ||
              (s.overflowOffset.top + r.offsetHeight - e.pageY <
              o.scrollSensitivity
                ? (r.scrollTop = n = r.scrollTop + o.scrollSpeed)
                : e.pageY - s.overflowOffset.top < o.scrollSensitivity &&
                  (r.scrollTop = n = r.scrollTop - o.scrollSpeed)),
            (o.axis && "y" === o.axis) ||
              (s.overflowOffset.left + r.offsetWidth - e.pageX <
              o.scrollSensitivity
                ? (r.scrollLeft = n = r.scrollLeft + o.scrollSpeed)
                : e.pageX - s.overflowOffset.left < o.scrollSensitivity &&
                  (r.scrollLeft = n = r.scrollLeft - o.scrollSpeed)))
          : ((o.axis && "x" === o.axis) ||
              (e.pageY - t(a).scrollTop() < o.scrollSensitivity
                ? (n = t(a).scrollTop(t(a).scrollTop() - o.scrollSpeed))
                : t(window).height() - (e.pageY - t(a).scrollTop()) <
                    o.scrollSensitivity &&
                  (n = t(a).scrollTop(t(a).scrollTop() + o.scrollSpeed))),
            (o.axis && "y" === o.axis) ||
              (e.pageX - t(a).scrollLeft() < o.scrollSensitivity
                ? (n = t(a).scrollLeft(t(a).scrollLeft() - o.scrollSpeed))
                : t(window).width() - (e.pageX - t(a).scrollLeft()) <
                    o.scrollSensitivity &&
                  (n = t(a).scrollLeft(t(a).scrollLeft() + o.scrollSpeed)))),
          n !== !1 &&
            t.ui.ddmanager &&
            !o.dropBehaviour &&
            t.ui.ddmanager.prepareOffsets(s, e);
      },
    }),
    t.ui.plugin.add("draggable", "snap", {
      start: function (e, i, s) {
        var o = s.options;
        (s.snapElements = []),
          t(
            o.snap.constructor !== String
              ? o.snap.items || ":data(ui-draggable)"
              : o.snap
          ).each(function () {
            var e = t(this),
              i = e.offset();
            this !== s.element[0] &&
              s.snapElements.push({
                item: this,
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: i.top,
                left: i.left,
              });
          });
      },
      drag: function (e, i, s) {
        var o,
          n,
          r,
          a,
          l,
          h,
          c,
          p,
          u,
          d,
          f = s.options,
          g = f.snapTolerance,
          m = i.offset.left,
          v = m + s.helperProportions.width,
          _ = i.offset.top,
          b = _ + s.helperProportions.height;
        for (u = s.snapElements.length - 1; u >= 0; u--)
          (l = s.snapElements[u].left - s.margins.left),
            (h = l + s.snapElements[u].width),
            (c = s.snapElements[u].top - s.margins.top),
            (p = c + s.snapElements[u].height),
            l - g > v ||
            m > h + g ||
            c - g > b ||
            _ > p + g ||
            !t.contains(
              s.snapElements[u].item.ownerDocument,
              s.snapElements[u].item
            )
              ? (s.snapElements[u].snapping &&
                  s.options.snap.release &&
                  s.options.snap.release.call(
                    s.element,
                    e,
                    t.extend(s._uiHash(), { snapItem: s.snapElements[u].item })
                  ),
                (s.snapElements[u].snapping = !1))
              : ("inner" !== f.snapMode &&
                  ((o = g >= Math.abs(c - b)),
                  (n = g >= Math.abs(p - _)),
                  (r = g >= Math.abs(l - v)),
                  (a = g >= Math.abs(h - m)),
                  o &&
                    (i.position.top = s._convertPositionTo("relative", {
                      top: c - s.helperProportions.height,
                      left: 0,
                    }).top),
                  n &&
                    (i.position.top = s._convertPositionTo("relative", {
                      top: p,
                      left: 0,
                    }).top),
                  r &&
                    (i.position.left = s._convertPositionTo("relative", {
                      top: 0,
                      left: l - s.helperProportions.width,
                    }).left),
                  a &&
                    (i.position.left = s._convertPositionTo("relative", {
                      top: 0,
                      left: h,
                    }).left)),
                (d = o || n || r || a),
                "outer" !== f.snapMode &&
                  ((o = g >= Math.abs(c - _)),
                  (n = g >= Math.abs(p - b)),
                  (r = g >= Math.abs(l - m)),
                  (a = g >= Math.abs(h - v)),
                  o &&
                    (i.position.top = s._convertPositionTo("relative", {
                      top: c,
                      left: 0,
                    }).top),
                  n &&
                    (i.position.top = s._convertPositionTo("relative", {
                      top: p - s.helperProportions.height,
                      left: 0,
                    }).top),
                  r &&
                    (i.position.left = s._convertPositionTo("relative", {
                      top: 0,
                      left: l,
                    }).left),
                  a &&
                    (i.position.left = s._convertPositionTo("relative", {
                      top: 0,
                      left: h - s.helperProportions.width,
                    }).left)),
                !s.snapElements[u].snapping &&
                  (o || n || r || a || d) &&
                  s.options.snap.snap &&
                  s.options.snap.snap.call(
                    s.element,
                    e,
                    t.extend(s._uiHash(), { snapItem: s.snapElements[u].item })
                  ),
                (s.snapElements[u].snapping = o || n || r || a || d));
      },
    }),
    t.ui.plugin.add("draggable", "stack", {
      start: function (e, i, s) {
        var o,
          n = s.options,
          r = t.makeArray(t(n.stack)).sort(function (e, i) {
            return (
              (parseInt(t(e).css("zIndex"), 10) || 0) -
              (parseInt(t(i).css("zIndex"), 10) || 0)
            );
          });
        r.length &&
          ((o = parseInt(t(r[0]).css("zIndex"), 10) || 0),
          t(r).each(function (e) {
            t(this).css("zIndex", o + e);
          }),
          this.css("zIndex", o + r.length));
      },
    }),
    t.ui.plugin.add("draggable", "zIndex", {
      start: function (e, i, s) {
        var o = t(i.helper),
          n = s.options;
        o.css("zIndex") && (n._zIndex = o.css("zIndex")),
          o.css("zIndex", n.zIndex);
      },
      stop: function (e, i, s) {
        var o = s.options;
        o._zIndex && t(i.helper).css("zIndex", o._zIndex);
      },
    }),
    t.ui.draggable;
});

/**
 * @license
 * lodash 3.10.0 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
(function () {
  function n(n, t) {
    if (n !== t) {
      var r = null === n,
        e = n === w,
        u = n === n,
        o = null === t,
        i = t === w,
        f = t === t;
      if ((n > t && !o) || !u || (r && !i && f) || (e && f)) return 1;
      if ((n < t && !r) || !f || (o && !e && u) || (i && u)) return -1;
    }
    return 0;
  }
  function t(n, t, r) {
    for (var e = n.length, u = r ? e : -1; r ? u-- : ++u < e; )
      if (t(n[u], u, n)) return u;
    return -1;
  }
  function r(n, t, r) {
    if (t !== t) return p(n, r);
    r -= 1;
    for (var e = n.length; ++r < e; ) if (n[r] === t) return r;
    return -1;
  }
  function e(n) {
    return typeof n == "function" || false;
  }
  function u(n) {
    return null == n ? "" : n + "";
  }
  function o(n, t) {
    for (var r = -1, e = n.length; ++r < e && -1 < t.indexOf(n.charAt(r)); );
    return r;
  }
  function i(n, t) {
    for (var r = n.length; r-- && -1 < t.indexOf(n.charAt(r)); );
    return r;
  }
  function f(t, r) {
    return n(t.a, r.a) || t.b - r.b;
  }
  function a(n) {
    return Nn[n];
  }
  function c(n) {
    return Tn[n];
  }
  function l(n, t, r) {
    return t ? (n = Bn[n]) : r && (n = Dn[n]), "\\" + n;
  }
  function s(n) {
    return "\\" + Dn[n];
  }
  function p(n, t, r) {
    var e = n.length;
    for (t += r ? 0 : -1; r ? t-- : ++t < e; ) {
      var u = n[t];
      if (u !== u) return t;
    }
    return -1;
  }
  function h(n) {
    return !!n && typeof n == "object";
  }
  function _(n) {
    return (
      (160 >= n && 9 <= n && 13 >= n) ||
      32 == n ||
      160 == n ||
      5760 == n ||
      6158 == n ||
      (8192 <= n &&
        (8202 >= n ||
          8232 == n ||
          8233 == n ||
          8239 == n ||
          8287 == n ||
          12288 == n ||
          65279 == n))
    );
  }
  function v(n, t) {
    for (var r = -1, e = n.length, u = -1, o = []; ++r < e; )
      n[r] === t && ((n[r] = z), (o[++u] = r));
    return o;
  }
  function g(n) {
    for (var t = -1, r = n.length; ++t < r && _(n.charCodeAt(t)); );
    return t;
  }
  function y(n) {
    for (var t = n.length; t-- && _(n.charCodeAt(t)); );
    return t;
  }
  function d(n) {
    return Ln[n];
  }
  function m(_) {
    function Nn(n) {
      if (h(n) && !(Oo(n) || n instanceof zn)) {
        if (n instanceof Ln) return n;
        if (nu.call(n, "__chain__") && nu.call(n, "__wrapped__")) return Mr(n);
      }
      return new Ln(n);
    }
    function Tn() {}
    function Ln(n, t, r) {
      (this.__wrapped__ = n),
        (this.__actions__ = r || []),
        (this.__chain__ = !!t);
    }
    function zn(n) {
      (this.__wrapped__ = n),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = false),
        (this.__iteratees__ = []),
        (this.__takeCount__ = Ru),
        (this.__views__ = []);
    }
    function Bn() {
      this.__data__ = {};
    }
    function Dn(n) {
      var t = n ? n.length : 0;
      for (this.data = { hash: gu(null), set: new lu() }; t--; )
        this.push(n[t]);
    }
    function Mn(n, t) {
      var r = n.data;
      return (typeof t == "string" || ge(t) ? r.set.has(t) : r.hash[t])
        ? 0
        : -1;
    }
    function qn(n, t) {
      var r = -1,
        e = n.length;
      for (t || (t = Be(e)); ++r < e; ) t[r] = n[r];
      return t;
    }
    function Pn(n, t) {
      for (var r = -1, e = n.length; ++r < e && false !== t(n[r], r, n); );
      return n;
    }
    function Kn(n, t) {
      for (var r = -1, e = n.length; ++r < e; )
        if (!t(n[r], r, n)) return false;
      return true;
    }
    function Vn(n, t) {
      for (var r = -1, e = n.length, u = -1, o = []; ++r < e; ) {
        var i = n[r];
        t(i, r, n) && (o[++u] = i);
      }
      return o;
    }
    function Gn(n, t) {
      for (var r = -1, e = n.length, u = Be(e); ++r < e; ) u[r] = t(n[r], r, n);
      return u;
    }
    function Jn(n, t) {
      for (var r = -1, e = t.length, u = n.length; ++r < e; ) n[u + r] = t[r];
      return n;
    }
    function Xn(n, t, r, e) {
      var u = -1,
        o = n.length;
      for (e && o && (r = n[++u]); ++u < o; ) r = t(r, n[u], u, n);
      return r;
    }
    function Hn(n, t) {
      for (var r = -1, e = n.length; ++r < e; ) if (t(n[r], r, n)) return true;
      return false;
    }
    function Qn(n, t, r, e) {
      return n !== w && nu.call(e, r) ? n : t;
    }
    function nt(n, t, r) {
      for (var e = -1, u = zo(t), o = u.length; ++e < o; ) {
        var i = u[e],
          f = n[i],
          a = r(f, t[i], i, n, t);
        ((a === a ? a === f : f !== f) && (f !== w || i in n)) || (n[i] = a);
      }
      return n;
    }
    function tt(n, t) {
      return null == t ? n : et(t, zo(t), n);
    }
    function rt(n, t) {
      for (
        var r = -1,
          e = null == n,
          u = !e && Er(n),
          o = u ? n.length : 0,
          i = t.length,
          f = Be(i);
        ++r < i;

      ) {
        var a = t[r];
        f[r] = u ? (Cr(a, o) ? n[a] : w) : e ? w : n[a];
      }
      return f;
    }
    function et(n, t, r) {
      r || (r = {});
      for (var e = -1, u = t.length; ++e < u; ) {
        var o = t[e];
        r[o] = n[o];
      }
      return r;
    }
    function ut(n, t, r) {
      var e = typeof n;
      return "function" == e
        ? t === w
          ? n
          : Bt(n, t, r)
        : null == n
        ? Fe
        : "object" == e
        ? bt(n)
        : t === w
        ? ze(n)
        : xt(n, t);
    }
    function ot(n, t, r, e, u, o, i) {
      var f;
      if ((r && (f = u ? r(n, e, u) : r(n)), f !== w)) return f;
      if (!ge(n)) return n;
      if ((e = Oo(n))) {
        if (((f = kr(n)), !t)) return qn(n, f);
      } else {
        var a = ru.call(n),
          c = a == K;
        if (a != Z && a != B && (!c || u))
          return Fn[a] ? Rr(n, a, t) : u ? n : {};
        if (((f = Ir(c ? {} : n)), !t)) return tt(f, n);
      }
      for (o || (o = []), i || (i = []), u = o.length; u--; )
        if (o[u] == n) return i[u];
      return (
        o.push(n),
        i.push(f),
        (e ? Pn : _t)(n, function (e, u) {
          f[u] = ot(e, t, r, u, n, o, i);
        }),
        f
      );
    }
    function it(n, t, r) {
      if (typeof n != "function") throw new Ge(L);
      return su(function () {
        n.apply(w, r);
      }, t);
    }
    function ft(n, t) {
      var e = n ? n.length : 0,
        u = [];
      if (!e) return u;
      var o = -1,
        i = xr(),
        f = i == r,
        a = f && t.length >= F && gu && lu ? new Dn(t) : null,
        c = t.length;
      a && ((i = Mn), (f = false), (t = a));
      n: for (; ++o < e; )
        if (((a = n[o]), f && a === a)) {
          for (var l = c; l--; ) if (t[l] === a) continue n;
          u.push(a);
        } else 0 > i(t, a, 0) && u.push(a);
      return u;
    }
    function at(n, t) {
      var r = true;
      return (
        Su(n, function (n, e, u) {
          return (r = !!t(n, e, u));
        }),
        r
      );
    }
    function ct(n, t, r, e) {
      var u = e,
        o = u;
      return (
        Su(n, function (n, i, f) {
          (i = +t(n, i, f)),
            (r(i, u) || (i === e && i === o)) && ((u = i), (o = n));
        }),
        o
      );
    }
    function lt(n, t) {
      var r = [];
      return (
        Su(n, function (n, e, u) {
          t(n, e, u) && r.push(n);
        }),
        r
      );
    }
    function st(n, t, r, e) {
      var u;
      return (
        r(n, function (n, r, o) {
          return t(n, r, o) ? ((u = e ? r : n), false) : void 0;
        }),
        u
      );
    }
    function pt(n, t, r, e) {
      e || (e = []);
      for (var u = -1, o = n.length; ++u < o; ) {
        var i = n[u];
        h(i) && Er(i) && (r || Oo(i) || pe(i))
          ? t
            ? pt(i, t, r, e)
            : Jn(e, i)
          : r || (e[e.length] = i);
      }
      return e;
    }
    function ht(n, t) {
      Nu(n, t, Re);
    }
    function _t(n, t) {
      return Nu(n, t, zo);
    }
    function vt(n, t) {
      return Tu(n, t, zo);
    }
    function gt(n, t) {
      for (var r = -1, e = t.length, u = -1, o = []; ++r < e; ) {
        var i = t[r];
        ve(n[i]) && (o[++u] = i);
      }
      return o;
    }
    function yt(n, t, r) {
      if (null != n) {
        r !== w && r in Br(n) && (t = [r]), (r = 0);
        for (var e = t.length; null != n && r < e; ) n = n[t[r++]];
        return r && r == e ? n : w;
      }
    }
    function dt(n, t, r, e, u, o) {
      if (n === t) n = true;
      else if (null == n || null == t || (!ge(n) && !h(t)))
        n = n !== n && t !== t;
      else
        n: {
          var i = dt,
            f = Oo(n),
            a = Oo(t),
            c = D,
            l = D;
          f || ((c = ru.call(n)), c == B ? (c = Z) : c != Z && (f = xe(n))),
            a || ((l = ru.call(t)), l == B ? (l = Z) : l != Z && xe(t));
          var s = c == Z,
            a = l == Z,
            l = c == l;
          if (!l || f || s) {
            if (
              !e &&
              ((c = s && nu.call(n, "__wrapped__")),
              (a = a && nu.call(t, "__wrapped__")),
              c || a)
            ) {
              n = i(c ? n.value() : n, a ? t.value() : t, r, e, u, o);
              break n;
            }
            if (l) {
              for (u || (u = []), o || (o = []), c = u.length; c--; )
                if (u[c] == n) {
                  n = o[c] == t;
                  break n;
                }
              u.push(n),
                o.push(t),
                (n = (f ? yr : mr)(n, t, i, r, e, u, o)),
                u.pop(),
                o.pop();
            } else n = false;
          } else n = dr(n, t, c);
        }
      return n;
    }
    function mt(n, t, r) {
      var e = t.length,
        u = e,
        o = !r;
      if (null == n) return !u;
      for (n = Br(n); e--; ) {
        var i = t[e];
        if (o && i[2] ? i[1] !== n[i[0]] : !(i[0] in n)) return false;
      }
      for (; ++e < u; ) {
        var i = t[e],
          f = i[0],
          a = n[f],
          c = i[1];
        if (o && i[2]) {
          if (a === w && !(f in n)) return false;
        } else if (
          ((i = r ? r(a, c, f) : w), i === w ? !dt(c, a, r, true) : !i)
        )
          return false;
      }
      return true;
    }
    function wt(n, t) {
      var r = -1,
        e = Er(n) ? Be(n.length) : [];
      return (
        Su(n, function (n, u, o) {
          e[++r] = t(n, u, o);
        }),
        e
      );
    }
    function bt(n) {
      var t = Ar(n);
      if (1 == t.length && t[0][2]) {
        var r = t[0][0],
          e = t[0][1];
        return function (n) {
          return null == n ? false : n[r] === e && (e !== w || r in Br(n));
        };
      }
      return function (n) {
        return mt(n, t);
      };
    }
    function xt(n, t) {
      var r = Oo(n),
        e = Wr(n) && t === t && !ge(t),
        u = n + "";
      return (
        (n = Dr(n)),
        function (o) {
          if (null == o) return false;
          var i = u;
          if (((o = Br(o)), !((!r && e) || i in o))) {
            if (((o = 1 == n.length ? o : yt(o, Et(n, 0, -1))), null == o))
              return false;
            (i = Zr(n)), (o = Br(o));
          }
          return o[i] === t ? t !== w || i in o : dt(t, o[i], w, true);
        }
      );
    }
    function At(n, t, r, e, u) {
      if (!ge(n)) return n;
      var o = Er(t) && (Oo(t) || xe(t)),
        i = o ? w : zo(t);
      return (
        Pn(i || t, function (f, a) {
          if ((i && ((a = f), (f = t[a])), h(f))) {
            e || (e = []), u || (u = []);
            n: {
              for (var c = a, l = e, s = u, p = l.length, _ = t[c]; p--; )
                if (l[p] == _) {
                  n[c] = s[p];
                  break n;
                }
              var p = n[c],
                v = r ? r(p, _, c, n, t) : w,
                g = v === w;
              g &&
                ((v = _),
                Er(_) && (Oo(_) || xe(_))
                  ? (v = Oo(p) ? p : Er(p) ? qn(p) : [])
                  : me(_) || pe(_)
                  ? (v = pe(p) ? ke(p) : me(p) ? p : {})
                  : (g = false)),
                l.push(_),
                s.push(v),
                g
                  ? (n[c] = At(v, _, r, l, s))
                  : (v === v ? v !== p : p === p) && (n[c] = v);
            }
          } else (c = n[a]), (l = r ? r(c, f, a, n, t) : w), (s = l === w) && (l = f), (l === w && (!o || a in n)) || (!s && (l === l ? l === c : c !== c)) || (n[a] = l);
        }),
        n
      );
    }
    function jt(n) {
      return function (t) {
        return null == t ? w : t[n];
      };
    }
    function kt(n) {
      var t = n + "";
      return (
        (n = Dr(n)),
        function (r) {
          return yt(r, n, t);
        }
      );
    }
    function It(n, t) {
      for (var r = n ? t.length : 0; r--; ) {
        var e = t[r];
        if (e != u && Cr(e)) {
          var u = e;
          pu.call(n, e, 1);
        }
      }
    }
    function Rt(n, t) {
      return n + yu(ku() * (t - n + 1));
    }
    function Ot(n, t, r, e, u) {
      return (
        u(n, function (n, u, o) {
          r = e ? ((e = false), n) : t(r, n, u, o);
        }),
        r
      );
    }
    function Et(n, t, r) {
      var e = -1,
        u = n.length;
      for (
        t = null == t ? 0 : +t || 0,
          0 > t && (t = -t > u ? 0 : u + t),
          r = r === w || r > u ? u : +r || 0,
          0 > r && (r += u),
          u = t > r ? 0 : (r - t) >>> 0,
          t >>>= 0,
          r = Be(u);
        ++e < u;

      )
        r[e] = n[e + t];
      return r;
    }
    function Ct(n, t) {
      var r;
      return (
        Su(n, function (n, e, u) {
          return (r = t(n, e, u)), !r;
        }),
        !!r
      );
    }
    function Ut(n, t) {
      var r = n.length;
      for (n.sort(t); r--; ) n[r] = n[r].c;
      return n;
    }
    function Wt(t, r, e) {
      var u = wr(),
        o = -1;
      return (
        (r = Gn(r, function (n) {
          return u(n);
        })),
        (t = wt(t, function (n) {
          return {
            a: Gn(r, function (t) {
              return t(n);
            }),
            b: ++o,
            c: n,
          };
        })),
        Ut(t, function (t, r) {
          var u;
          n: {
            for (
              var o = -1, i = t.a, f = r.a, a = i.length, c = e.length;
              ++o < a;

            )
              if ((u = n(i[o], f[o]))) {
                if (o >= c) break n;
                (o = e[o]), (u *= "asc" === o || true === o ? 1 : -1);
                break n;
              }
            u = t.b - r.b;
          }
          return u;
        })
      );
    }
    function $t(n, t) {
      var r = 0;
      return (
        Su(n, function (n, e, u) {
          r += +t(n, e, u) || 0;
        }),
        r
      );
    }
    function St(n, t) {
      var e = -1,
        u = xr(),
        o = n.length,
        i = u == r,
        f = i && o >= F,
        a = f && gu && lu ? new Dn(void 0) : null,
        c = [];
      a ? ((u = Mn), (i = false)) : ((f = false), (a = t ? [] : c));
      n: for (; ++e < o; ) {
        var l = n[e],
          s = t ? t(l, e, n) : l;
        if (i && l === l) {
          for (var p = a.length; p--; ) if (a[p] === s) continue n;
          t && a.push(s), c.push(l);
        } else 0 > u(a, s, 0) && ((t || f) && a.push(s), c.push(l));
      }
      return c;
    }
    function Ft(n, t) {
      for (var r = -1, e = t.length, u = Be(e); ++r < e; ) u[r] = n[t[r]];
      return u;
    }
    function Nt(n, t, r, e) {
      for (
        var u = n.length, o = e ? u : -1;
        (e ? o-- : ++o < u) && t(n[o], o, n);

      );
      return r
        ? Et(n, e ? 0 : o, e ? o + 1 : u)
        : Et(n, e ? o + 1 : 0, e ? u : o);
    }
    function Tt(n, t) {
      var r = n;
      r instanceof zn && (r = r.value());
      for (var e = -1, u = t.length; ++e < u; )
        var o = t[e], r = o.func.apply(o.thisArg, Jn([r], o.args));
      return r;
    }
    function Lt(n, t, r) {
      var e = 0,
        u = n ? n.length : e;
      if (typeof t == "number" && t === t && u <= Eu) {
        for (; e < u; ) {
          var o = (e + u) >>> 1,
            i = n[o];
          (r ? i <= t : i < t) && null !== i ? (e = o + 1) : (u = o);
        }
        return u;
      }
      return zt(n, t, Fe, r);
    }
    function zt(n, t, r, e) {
      t = r(t);
      for (
        var u = 0,
          o = n ? n.length : 0,
          i = t !== t,
          f = null === t,
          a = t === w;
        u < o;

      ) {
        var c = yu((u + o) / 2),
          l = r(n[c]),
          s = l !== w,
          p = l === l;
        (
          i
            ? p || e
            : f
            ? p && s && (e || null != l)
            : a
            ? p && (e || s)
            : null == l
            ? 0
            : e
            ? l <= t
            : l < t
        )
          ? (u = c + 1)
          : (o = c);
      }
      return xu(o, Ou);
    }
    function Bt(n, t, r) {
      if (typeof n != "function") return Fe;
      if (t === w) return n;
      switch (r) {
        case 1:
          return function (r) {
            return n.call(t, r);
          };
        case 3:
          return function (r, e, u) {
            return n.call(t, r, e, u);
          };
        case 4:
          return function (r, e, u, o) {
            return n.call(t, r, e, u, o);
          };
        case 5:
          return function (r, e, u, o, i) {
            return n.call(t, r, e, u, o, i);
          };
      }
      return function () {
        return n.apply(t, arguments);
      };
    }
    function Dt(n) {
      var t = new ou(n.byteLength);
      return new hu(t).set(new hu(n)), t;
    }
    function Mt(n, t, r) {
      for (
        var e = r.length,
          u = -1,
          o = bu(n.length - e, 0),
          i = -1,
          f = t.length,
          a = Be(f + o);
        ++i < f;

      )
        a[i] = t[i];
      for (; ++u < e; ) a[r[u]] = n[u];
      for (; o--; ) a[i++] = n[u++];
      return a;
    }
    function qt(n, t, r) {
      for (
        var e = -1,
          u = r.length,
          o = -1,
          i = bu(n.length - u, 0),
          f = -1,
          a = t.length,
          c = Be(i + a);
        ++o < i;

      )
        c[o] = n[o];
      for (i = o; ++f < a; ) c[i + f] = t[f];
      for (; ++e < u; ) c[i + r[e]] = n[o++];
      return c;
    }
    function Pt(n, t) {
      return function (r, e, u) {
        var o = t ? t() : {};
        if (((e = wr(e, u, 3)), Oo(r))) {
          u = -1;
          for (var i = r.length; ++u < i; ) {
            var f = r[u];
            n(o, f, e(f, u, r), r);
          }
        } else
          Su(r, function (t, r, u) {
            n(o, t, e(t, r, u), u);
          });
        return o;
      };
    }
    function Kt(n) {
      return le(function (t, r) {
        var e = -1,
          u = null == t ? 0 : r.length,
          o = 2 < u ? r[u - 2] : w,
          i = 2 < u ? r[2] : w,
          f = 1 < u ? r[u - 1] : w;
        for (
          typeof o == "function"
            ? ((o = Bt(o, f, 5)), (u -= 2))
            : ((o = typeof f == "function" ? f : w), (u -= o ? 1 : 0)),
            i && Ur(r[0], r[1], i) && ((o = 3 > u ? w : o), (u = 1));
          ++e < u;

        )
          (i = r[e]) && n(t, i, o);
        return t;
      });
    }
    function Vt(n, t) {
      return function (r, e) {
        var u = r ? Bu(r) : 0;
        if (!Sr(u)) return n(r, e);
        for (
          var o = t ? u : -1, i = Br(r);
          (t ? o-- : ++o < u) && false !== e(i[o], o, i);

        );
        return r;
      };
    }
    function Zt(n) {
      return function (t, r, e) {
        var u = Br(t);
        e = e(t);
        for (var o = e.length, i = n ? o : -1; n ? i-- : ++i < o; ) {
          var f = e[i];
          if (false === r(u[f], f, u)) break;
        }
        return t;
      };
    }
    function Yt(n, t) {
      function r() {
        return (this && this !== Zn && this instanceof r ? e : n).apply(
          t,
          arguments
        );
      }
      var e = Jt(n);
      return r;
    }
    function Gt(n) {
      return function (t) {
        var r = -1;
        t = $e(Ce(t));
        for (var e = t.length, u = ""; ++r < e; ) u = n(u, t[r], r);
        return u;
      };
    }
    function Jt(n) {
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return new n();
          case 1:
            return new n(t[0]);
          case 2:
            return new n(t[0], t[1]);
          case 3:
            return new n(t[0], t[1], t[2]);
          case 4:
            return new n(t[0], t[1], t[2], t[3]);
          case 5:
            return new n(t[0], t[1], t[2], t[3], t[4]);
          case 6:
            return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
          case 7:
            return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
        }
        var r = $u(n.prototype),
          t = n.apply(r, t);
        return ge(t) ? t : r;
      };
    }
    function Xt(n) {
      function t(r, e, u) {
        return (
          u && Ur(r, e, u) && (e = w),
          (r = gr(r, n, w, w, w, w, w, e)),
          (r.placeholder = t.placeholder),
          r
        );
      }
      return t;
    }
    function Ht(n, t) {
      return le(function (r) {
        var e = r[0];
        return null == e ? e : (r.push(t), n.apply(w, r));
      });
    }
    function Qt(n, t) {
      return function (r, e, u) {
        if ((u && Ur(r, e, u) && (e = w), (e = wr(e, u, 3)), 1 == e.length)) {
          u = r = Oo(r) ? r : zr(r);
          for (var o = e, i = -1, f = u.length, a = t, c = a; ++i < f; ) {
            var l = u[i],
              s = +o(l);
            n(s, a) && ((a = s), (c = l));
          }
          if (((u = c), !r.length || u !== t)) return u;
        }
        return ct(r, e, n, t);
      };
    }
    function nr(n, r) {
      return function (e, u, o) {
        return (
          (u = wr(u, o, 3)),
          Oo(e) ? ((u = t(e, u, r)), -1 < u ? e[u] : w) : st(e, u, n)
        );
      };
    }
    function tr(n) {
      return function (r, e, u) {
        return r && r.length ? ((e = wr(e, u, 3)), t(r, e, n)) : -1;
      };
    }
    function rr(n) {
      return function (t, r, e) {
        return (r = wr(r, e, 3)), st(t, r, n, true);
      };
    }
    function er(n) {
      return function () {
        for (
          var t, r = arguments.length, e = n ? r : -1, u = 0, o = Be(r);
          n ? e-- : ++e < r;

        ) {
          var i = (o[u++] = arguments[e]);
          if (typeof i != "function") throw new Ge(L);
          !t &&
            Ln.prototype.thru &&
            "wrapper" == br(i) &&
            (t = new Ln([], true));
        }
        for (e = t ? -1 : r; ++e < r; ) {
          var i = o[e],
            u = br(i),
            f = "wrapper" == u ? zu(i) : w;
          t =
            f &&
            $r(f[0]) &&
            f[1] == (E | k | R | C) &&
            !f[4].length &&
            1 == f[9]
              ? t[br(f[0])].apply(t, f[3])
              : 1 == i.length && $r(i)
              ? t[u]()
              : t.thru(i);
        }
        return function () {
          var n = arguments,
            e = n[0];
          if (t && 1 == n.length && Oo(e) && e.length >= F)
            return t.plant(e).value();
          for (var u = 0, n = r ? o[u].apply(this, n) : e; ++u < r; )
            n = o[u].call(this, n);
          return n;
        };
      };
    }
    function ur(n, t) {
      return function (r, e, u) {
        return typeof e == "function" && u === w && Oo(r)
          ? n(r, e)
          : t(r, Bt(e, u, 3));
      };
    }
    function or(n) {
      return function (t, r, e) {
        return (
          (typeof r != "function" || e !== w) && (r = Bt(r, e, 3)), n(t, r, Re)
        );
      };
    }
    function ir(n) {
      return function (t, r, e) {
        return (
          (typeof r != "function" || e !== w) && (r = Bt(r, e, 3)), n(t, r)
        );
      };
    }
    function fr(n) {
      return function (t, r, e) {
        var u = {};
        return (
          (r = wr(r, e, 3)),
          _t(t, function (t, e, o) {
            (o = r(t, e, o)), (e = n ? o : e), (t = n ? t : o), (u[e] = t);
          }),
          u
        );
      };
    }
    function ar(n) {
      return function (t, r, e) {
        return (t = u(t)), (n ? t : "") + pr(t, r, e) + (n ? "" : t);
      };
    }
    function cr(n) {
      var t = le(function (r, e) {
        var u = v(e, t.placeholder);
        return gr(r, n, w, e, u);
      });
      return t;
    }
    function lr(n, t) {
      return function (r, e, u, o) {
        var i = 3 > arguments.length;
        return typeof e == "function" && o === w && Oo(r)
          ? n(r, e, u, i)
          : Ot(r, wr(e, o, 4), u, i, t);
      };
    }
    function sr(n, t, r, e, u, o, i, f, a, c) {
      function l() {
        for (var m = arguments.length, b = m, j = Be(m); b--; )
          j[b] = arguments[b];
        if ((e && (j = Mt(j, e, u)), o && (j = qt(j, o, i)), _ || y)) {
          var b = l.placeholder,
            k = v(j, b),
            m = m - k.length;
          if (m < c) {
            var I = f ? qn(f) : w,
              m = bu(c - m, 0),
              E = _ ? k : w,
              k = _ ? w : k,
              C = _ ? j : w,
              j = _ ? w : j;
            return (
              (t |= _ ? R : O),
              (t &= ~(_ ? O : R)),
              g || (t &= ~(x | A)),
              (j = [n, t, r, C, E, j, k, I, a, m]),
              (I = sr.apply(w, j)),
              $r(n) && Du(I, j),
              (I.placeholder = b),
              I
            );
          }
        }
        if (((b = p ? r : this), (I = h ? b[n] : n), f))
          for (m = j.length, E = xu(f.length, m), k = qn(j); E--; )
            (C = f[E]), (j[E] = Cr(C, m) ? k[C] : w);
        return (
          s && a < j.length && (j.length = a),
          this && this !== Zn && this instanceof l && (I = d || Jt(n)),
          I.apply(b, j)
        );
      }
      var s = t & E,
        p = t & x,
        h = t & A,
        _ = t & k,
        g = t & j,
        y = t & I,
        d = h ? w : Jt(n);
      return l;
    }
    function pr(n, t, r) {
      return (
        (n = n.length),
        (t = +t),
        n < t && mu(t)
          ? ((t -= n),
            (r = null == r ? " " : r + ""),
            Ue(r, vu(t / r.length)).slice(0, t))
          : ""
      );
    }
    function hr(n, t, r, e) {
      function u() {
        for (
          var t = -1, f = arguments.length, a = -1, c = e.length, l = Be(c + f);
          ++a < c;

        )
          l[a] = e[a];
        for (; f--; ) l[a++] = arguments[++t];
        return (this && this !== Zn && this instanceof u ? i : n).apply(
          o ? r : this,
          l
        );
      }
      var o = t & x,
        i = Jt(n);
      return u;
    }
    function _r(n) {
      var t = Pe[n];
      return function (n, r) {
        return (r = r === w ? 0 : +r || 0)
          ? ((r = au(10, r)), t(n * r) / r)
          : t(n);
      };
    }
    function vr(n) {
      return function (t, r, e, u) {
        var o = wr(e);
        return null == e && o === ut ? Lt(t, r, n) : zt(t, r, o(e, u, 1), n);
      };
    }
    function gr(n, t, r, e, u, o, i, f) {
      var a = t & A;
      if (!a && typeof n != "function") throw new Ge(L);
      var c = e ? e.length : 0;
      if (
        (c || ((t &= ~(R | O)), (e = u = w)), (c -= u ? u.length : 0), t & O)
      ) {
        var l = e,
          s = u;
        e = u = w;
      }
      var p = a ? w : zu(n);
      return (
        (r = [n, t, r, e, u, l, s, o, i, f]),
        p &&
          ((e = r[1]),
          (t = p[1]),
          (f = e | t),
          (u =
            (t == E && e == k) ||
            (t == E && e == C && r[7].length <= p[8]) ||
            (t == (E | C) && e == k)),
          (f < E || u) &&
            (t & x && ((r[2] = p[2]), (f |= e & x ? 0 : j)),
            (e = p[3]) &&
              ((u = r[3]),
              (r[3] = u ? Mt(u, e, p[4]) : qn(e)),
              (r[4] = u ? v(r[3], z) : qn(p[4]))),
            (e = p[5]) &&
              ((u = r[5]),
              (r[5] = u ? qt(u, e, p[6]) : qn(e)),
              (r[6] = u ? v(r[5], z) : qn(p[6]))),
            (e = p[7]) && (r[7] = qn(e)),
            t & E && (r[8] = null == r[8] ? p[8] : xu(r[8], p[8])),
            null == r[9] && (r[9] = p[9]),
            (r[0] = p[0]),
            (r[1] = f)),
          (t = r[1]),
          (f = r[9])),
        (r[9] = null == f ? (a ? 0 : n.length) : bu(f - c, 0) || 0),
        (p ? Lu : Du)(
          t == x
            ? Yt(r[0], r[2])
            : (t != R && t != (x | R)) || r[4].length
            ? sr.apply(w, r)
            : hr.apply(w, r),
          r
        )
      );
    }
    function yr(n, t, r, e, u, o, i) {
      var f = -1,
        a = n.length,
        c = t.length;
      if (a != c && (!u || c <= a)) return false;
      for (; ++f < a; ) {
        var l = n[f],
          c = t[f],
          s = e ? e(u ? c : l, u ? l : c, f) : w;
        if (s !== w) {
          if (s) continue;
          return false;
        }
        if (u) {
          if (
            !Hn(t, function (n) {
              return l === n || r(l, n, e, u, o, i);
            })
          )
            return false;
        } else if (l !== c && !r(l, c, e, u, o, i)) return false;
      }
      return true;
    }
    function dr(n, t, r) {
      switch (r) {
        case M:
        case q:
          return +n == +t;
        case P:
          return n.name == t.name && n.message == t.message;
        case V:
          return n != +n ? t != +t : n == +t;
        case Y:
        case G:
          return n == t + "";
      }
      return false;
    }
    function mr(n, t, r, e, u, o, i) {
      var f = zo(n),
        a = f.length,
        c = zo(t).length;
      if (a != c && !u) return false;
      for (c = a; c--; ) {
        var l = f[c];
        if (!(u ? l in t : nu.call(t, l))) return false;
      }
      for (var s = u; ++c < a; ) {
        var l = f[c],
          p = n[l],
          h = t[l],
          _ = e ? e(u ? h : p, u ? p : h, l) : w;
        if (_ === w ? !r(p, h, e, u, o, i) : !_) return false;
        s || (s = "constructor" == l);
      }
      return s ||
        ((r = n.constructor),
        (e = t.constructor),
        !(r != e && "constructor" in n && "constructor" in t) ||
          (typeof r == "function" &&
            r instanceof r &&
            typeof e == "function" &&
            e instanceof e))
        ? true
        : false;
    }
    function wr(n, t, r) {
      var e = Nn.callback || Se,
        e = e === Se ? ut : e;
      return r ? e(n, t, r) : e;
    }
    function br(n) {
      for (var t = n.name, r = Wu[t], e = r ? r.length : 0; e--; ) {
        var u = r[e],
          o = u.func;
        if (null == o || o == n) return u.name;
      }
      return t;
    }
    function xr(n, t, e) {
      var u = Nn.indexOf || Vr,
        u = u === Vr ? r : u;
      return n ? u(n, t, e) : u;
    }
    function Ar(n) {
      n = Oe(n);
      for (var t = n.length; t--; ) {
        var r = n[t][1];
        n[t][2] = r === r && !ge(r);
      }
      return n;
    }
    function jr(n, t) {
      var r = null == n ? w : n[t];
      return ye(r) ? r : w;
    }
    function kr(n) {
      var t = n.length,
        r = new n.constructor(t);
      return (
        t &&
          "string" == typeof n[0] &&
          nu.call(n, "index") &&
          ((r.index = n.index), (r.input = n.input)),
        r
      );
    }
    function Ir(n) {
      return (
        (n = n.constructor),
        (typeof n == "function" && n instanceof n) || (n = Ve),
        new n()
      );
    }
    function Rr(n, t, r) {
      var e = n.constructor;
      switch (t) {
        case J:
          return Dt(n);
        case M:
        case q:
          return new e(+n);
        case X:
        case H:
        case Q:
        case nn:
        case tn:
        case rn:
        case en:
        case un:
        case on:
          return (t = n.buffer), new e(r ? Dt(t) : t, n.byteOffset, n.length);
        case V:
        case G:
          return new e(n);
        case Y:
          var u = new e(n.source, kn.exec(n));
          u.lastIndex = n.lastIndex;
      }
      return u;
    }
    function Or(n, t, r) {
      return (
        null == n ||
          Wr(t, n) ||
          ((t = Dr(t)),
          (n = 1 == t.length ? n : yt(n, Et(t, 0, -1))),
          (t = Zr(t))),
        (t = null == n ? n : n[t]),
        null == t ? w : t.apply(n, r)
      );
    }
    function Er(n) {
      return null != n && Sr(Bu(n));
    }
    function Cr(n, t) {
      return (
        (n = typeof n == "number" || On.test(n) ? +n : -1),
        (t = null == t ? Cu : t),
        -1 < n && 0 == n % 1 && n < t
      );
    }
    function Ur(n, t, r) {
      if (!ge(r)) return false;
      var e = typeof t;
      return (
        "number" == e ? Er(r) && Cr(t, r.length) : "string" == e && t in r
      )
        ? ((t = r[t]), n === n ? n === t : t !== t)
        : false;
    }
    function Wr(n, t) {
      var r = typeof n;
      return ("string" == r && dn.test(n)) || "number" == r
        ? true
        : Oo(n)
        ? false
        : !yn.test(n) || (null != t && n in Br(t));
    }
    function $r(n) {
      var t = br(n);
      return t in zn.prototype
        ? ((t = Nn[t]), n === t ? true : ((t = zu(t)), !!t && n === t[0]))
        : false;
    }
    function Sr(n) {
      return typeof n == "number" && -1 < n && 0 == n % 1 && n <= Cu;
    }
    function Fr(n, t) {
      return n === w ? t : Eo(n, t, Fr);
    }
    function Nr(n, t) {
      n = Br(n);
      for (var r = -1, e = t.length, u = {}; ++r < e; ) {
        var o = t[r];
        o in n && (u[o] = n[o]);
      }
      return u;
    }
    function Tr(n, t) {
      var r = {};
      return (
        ht(n, function (n, e, u) {
          t(n, e, u) && (r[e] = n);
        }),
        r
      );
    }
    function Lr(n) {
      for (
        var t = Re(n),
          r = t.length,
          e = r && n.length,
          u = !!e && Sr(e) && (Oo(n) || pe(n)),
          o = -1,
          i = [];
        ++o < r;

      ) {
        var f = t[o];
        ((u && Cr(f, e)) || nu.call(n, f)) && i.push(f);
      }
      return i;
    }
    function zr(n) {
      return null == n ? [] : Er(n) ? (ge(n) ? n : Ve(n)) : Ee(n);
    }
    function Br(n) {
      return ge(n) ? n : Ve(n);
    }
    function Dr(n) {
      if (Oo(n)) return n;
      var t = [];
      return (
        u(n).replace(mn, function (n, r, e, u) {
          t.push(e ? u.replace(An, "$1") : r || n);
        }),
        t
      );
    }
    function Mr(n) {
      return n instanceof zn
        ? n.clone()
        : new Ln(n.__wrapped__, n.__chain__, qn(n.__actions__));
    }
    function qr(n, t, r) {
      return n && n.length
        ? ((r ? Ur(n, t, r) : null == t) && (t = 1), Et(n, 0 > t ? 0 : t))
        : [];
    }
    function Pr(n, t, r) {
      var e = n ? n.length : 0;
      return e
        ? ((r ? Ur(n, t, r) : null == t) && (t = 1),
          (t = e - (+t || 0)),
          Et(n, 0, 0 > t ? 0 : t))
        : [];
    }
    function Kr(n) {
      return n ? n[0] : w;
    }
    function Vr(n, t, e) {
      var u = n ? n.length : 0;
      if (!u) return -1;
      if (typeof e == "number") e = 0 > e ? bu(u + e, 0) : e;
      else if (e)
        return (
          (e = Lt(n, t)),
          e < u && (t === t ? t === n[e] : n[e] !== n[e]) ? e : -1
        );
      return r(n, t, e || 0);
    }
    function Zr(n) {
      var t = n ? n.length : 0;
      return t ? n[t - 1] : w;
    }
    function Yr(n) {
      return qr(n, 1);
    }
    function Gr(n, t, e, u) {
      if (!n || !n.length) return [];
      null != t &&
        typeof t != "boolean" &&
        ((u = e), (e = Ur(n, t, u) ? w : t), (t = false));
      var o = wr();
      if (((null != e || o !== ut) && (e = o(e, u, 3)), t && xr() == r)) {
        t = e;
        var i;
        (e = -1), (u = n.length);
        for (var o = -1, f = []; ++e < u; ) {
          var a = n[e],
            c = t ? t(a, e, n) : a;
          (e && i === c) || ((i = c), (f[++o] = a));
        }
        n = f;
      } else n = St(n, e);
      return n;
    }
    function Jr(n) {
      if (!n || !n.length) return [];
      var t = -1,
        r = 0;
      n = Vn(n, function (n) {
        return Er(n) ? ((r = bu(n.length, r)), true) : void 0;
      });
      for (var e = Be(r); ++t < r; ) e[t] = Gn(n, jt(t));
      return e;
    }
    function Xr(n, t, r) {
      return n && n.length
        ? ((n = Jr(n)),
          null == t
            ? n
            : ((t = Bt(t, r, 4)),
              Gn(n, function (n) {
                return Xn(n, t, w, true);
              })))
        : [];
    }
    function Hr(n, t) {
      var r = -1,
        e = n ? n.length : 0,
        u = {};
      for (!e || t || Oo(n[0]) || (t = []); ++r < e; ) {
        var o = n[r];
        t ? (u[o] = t[r]) : o && (u[o[0]] = o[1]);
      }
      return u;
    }
    function Qr(n) {
      return (n = Nn(n)), (n.__chain__ = true), n;
    }
    function ne(n, t, r) {
      return t.call(r, n);
    }
    function te(n, t, r) {
      var e = Oo(n) ? Kn : at;
      return (
        r && Ur(n, t, r) && (t = w),
        (typeof t != "function" || r !== w) && (t = wr(t, r, 3)),
        e(n, t)
      );
    }
    function re(n, t, r) {
      var e = Oo(n) ? Vn : lt;
      return (t = wr(t, r, 3)), e(n, t);
    }
    function ee(n, t, r, e) {
      var u = n ? Bu(n) : 0;
      return (
        Sr(u) || ((n = Ee(n)), (u = n.length)),
        (r =
          typeof r != "number" || (e && Ur(t, r, e))
            ? 0
            : 0 > r
            ? bu(u + r, 0)
            : r || 0),
        typeof n == "string" || (!Oo(n) && be(n))
          ? r <= u && -1 < n.indexOf(t, r)
          : !!u && -1 < xr(n, t, r)
      );
    }
    function ue(n, t, r) {
      var e = Oo(n) ? Gn : wt;
      return (t = wr(t, r, 3)), e(n, t);
    }
    function oe(n, t, r) {
      if (r ? Ur(n, t, r) : null == t) {
        n = zr(n);
        var e = n.length;
        return 0 < e ? n[Rt(0, e - 1)] : w;
      }
      (r = -1), (n = je(n));
      var e = n.length,
        u = e - 1;
      for (t = xu(0 > t ? 0 : +t || 0, e); ++r < t; ) {
        var e = Rt(r, u),
          o = n[e];
        (n[e] = n[r]), (n[r] = o);
      }
      return (n.length = t), n;
    }
    function ie(n, t, r) {
      var e = Oo(n) ? Hn : Ct;
      return (
        r && Ur(n, t, r) && (t = w),
        (typeof t != "function" || r !== w) && (t = wr(t, r, 3)),
        e(n, t)
      );
    }
    function fe(n, t) {
      var r;
      if (typeof t != "function") {
        if (typeof n != "function") throw new Ge(L);
        var e = n;
        (n = t), (t = e);
      }
      return function () {
        return 0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = w), r;
      };
    }
    function ae(n, t, r) {
      function e(t, r) {
        r && iu(r),
          (a = p = h = w),
          t && ((_ = ho()), (c = n.apply(s, f)), p || a || (f = s = w));
      }
      function u() {
        var n = t - (ho() - l);
        0 >= n || n > t ? e(h, a) : (p = su(u, n));
      }
      function o() {
        e(g, p);
      }
      function i() {
        if (
          ((f = arguments),
          (l = ho()),
          (s = this),
          (h = g && (p || !y)),
          false === v)
        )
          var r = y && !p;
        else {
          a || y || (_ = l);
          var e = v - (l - _),
            i = 0 >= e || e > v;
          i
            ? (a && (a = iu(a)), (_ = l), (c = n.apply(s, f)))
            : a || (a = su(o, e));
        }
        return (
          i && p ? (p = iu(p)) : p || t === v || (p = su(u, t)),
          r && ((i = true), (c = n.apply(s, f))),
          !i || p || a || (f = s = w),
          c
        );
      }
      var f,
        a,
        c,
        l,
        s,
        p,
        h,
        _ = 0,
        v = false,
        g = true;
      if (typeof n != "function") throw new Ge(L);
      if (((t = 0 > t ? 0 : +t || 0), true === r))
        var y = true,
          g = false;
      else
        ge(r) &&
          ((y = !!r.leading),
          (v = "maxWait" in r && bu(+r.maxWait || 0, t)),
          (g = "trailing" in r ? !!r.trailing : g));
      return (
        (i.cancel = function () {
          p && iu(p), a && iu(a), (_ = 0), (a = p = h = w);
        }),
        i
      );
    }
    function ce(n, t) {
      function r() {
        var e = arguments,
          u = t ? t.apply(this, e) : e[0],
          o = r.cache;
        return o.has(u)
          ? o.get(u)
          : ((e = n.apply(this, e)), (r.cache = o.set(u, e)), e);
      }
      if (typeof n != "function" || (t && typeof t != "function"))
        throw new Ge(L);
      return (r.cache = new ce.Cache()), r;
    }
    function le(n, t) {
      if (typeof n != "function") throw new Ge(L);
      return (
        (t = bu(t === w ? n.length - 1 : +t || 0, 0)),
        function () {
          for (
            var r = arguments, e = -1, u = bu(r.length - t, 0), o = Be(u);
            ++e < u;

          )
            o[e] = r[t + e];
          switch (t) {
            case 0:
              return n.call(this, o);
            case 1:
              return n.call(this, r[0], o);
            case 2:
              return n.call(this, r[0], r[1], o);
          }
          for (u = Be(t + 1), e = -1; ++e < t; ) u[e] = r[e];
          return (u[t] = o), n.apply(this, u);
        }
      );
    }
    function se(n, t) {
      return n > t;
    }
    function pe(n) {
      return h(n) && Er(n) && nu.call(n, "callee") && !cu.call(n, "callee");
    }
    function he(n, t, r, e) {
      return (
        (e = (r = typeof r == "function" ? Bt(r, e, 3) : w) ? r(n, t) : w),
        e === w ? dt(n, t, r) : !!e
      );
    }
    function _e(n) {
      return h(n) && typeof n.message == "string" && ru.call(n) == P;
    }
    function ve(n) {
      return ge(n) && ru.call(n) == K;
    }
    function ge(n) {
      var t = typeof n;
      return !!n && ("object" == t || "function" == t);
    }
    function ye(n) {
      return null == n
        ? false
        : ve(n)
        ? uu.test(Qe.call(n))
        : h(n) && Rn.test(n);
    }
    function de(n) {
      return typeof n == "number" || (h(n) && ru.call(n) == V);
    }
    function me(n) {
      var t;
      if (
        !h(n) ||
        ru.call(n) != Z ||
        pe(n) ||
        !(
          nu.call(n, "constructor") ||
          ((t = n.constructor), typeof t != "function" || t instanceof t)
        )
      )
        return false;
      var r;
      return (
        ht(n, function (n, t) {
          r = t;
        }),
        r === w || nu.call(n, r)
      );
    }
    function we(n) {
      return ge(n) && ru.call(n) == Y;
    }
    function be(n) {
      return typeof n == "string" || (h(n) && ru.call(n) == G);
    }
    function xe(n) {
      return h(n) && Sr(n.length) && !!Sn[ru.call(n)];
    }
    function Ae(n, t) {
      return n < t;
    }
    function je(n) {
      var t = n ? Bu(n) : 0;
      return Sr(t) ? (t ? qn(n) : []) : Ee(n);
    }
    function ke(n) {
      return et(n, Re(n));
    }
    function Ie(n) {
      return gt(n, Re(n));
    }
    function Re(n) {
      if (null == n) return [];
      ge(n) || (n = Ve(n));
      for (
        var t = n.length,
          t = (t && Sr(t) && (Oo(n) || pe(n)) && t) || 0,
          r = n.constructor,
          e = -1,
          r = typeof r == "function" && r.prototype === n,
          u = Be(t),
          o = 0 < t;
        ++e < t;

      )
        u[e] = e + "";
      for (var i in n)
        (o && Cr(i, t)) ||
          ("constructor" == i && (r || !nu.call(n, i))) ||
          u.push(i);
      return u;
    }
    function Oe(n) {
      n = Br(n);
      for (var t = -1, r = zo(n), e = r.length, u = Be(e); ++t < e; ) {
        var o = r[t];
        u[t] = [o, n[o]];
      }
      return u;
    }
    function Ee(n) {
      return Ft(n, zo(n));
    }
    function Ce(n) {
      return (n = u(n)) && n.replace(En, a).replace(xn, "");
    }
    function Ue(n, t) {
      var r = "";
      if (((n = u(n)), (t = +t), 1 > t || !n || !mu(t))) return r;
      do t % 2 && (r += n), (t = yu(t / 2)), (n += n);
      while (t);
      return r;
    }
    function We(n, t, r) {
      var e = n;
      return (n = u(n))
        ? (r ? Ur(e, t, r) : null == t)
          ? n.slice(g(n), y(n) + 1)
          : ((t += ""), n.slice(o(n, t), i(n, t) + 1))
        : n;
    }
    function $e(n, t, r) {
      return r && Ur(n, t, r) && (t = w), (n = u(n)), n.match(t || Wn) || [];
    }
    function Se(n, t, r) {
      return r && Ur(n, t, r) && (t = w), h(n) ? Ne(n) : ut(n, t);
    }
    function Fe(n) {
      return n;
    }
    function Ne(n) {
      return bt(ot(n, true));
    }
    function Te(n, t, r) {
      if (null == r) {
        var e = ge(t),
          u = e ? zo(t) : w;
        ((u = u && u.length ? gt(t, u) : w) ? u.length : e) ||
          ((u = false), (r = t), (t = n), (n = this));
      }
      u || (u = gt(t, zo(t)));
      var o = true,
        e = -1,
        i = ve(n),
        f = u.length;
      false === r ? (o = false) : ge(r) && "chain" in r && (o = r.chain);
      for (; ++e < f; ) {
        r = u[e];
        var a = t[r];
        (n[r] = a),
          i &&
            (n.prototype[r] = (function (t) {
              return function () {
                var r = this.__chain__;
                if (o || r) {
                  var e = n(this.__wrapped__);
                  return (
                    (e.__actions__ = qn(this.__actions__)).push({
                      func: t,
                      args: arguments,
                      thisArg: n,
                    }),
                    (e.__chain__ = r),
                    e
                  );
                }
                return t.apply(n, Jn([this.value()], arguments));
              };
            })(a));
      }
      return n;
    }
    function Le() {}
    function ze(n) {
      return Wr(n) ? jt(n) : kt(n);
    }
    _ = _ ? Yn.defaults(Zn.Object(), _, Yn.pick(Zn, $n)) : Zn;
    var Be = _.Array,
      De = _.Date,
      Me = _.Error,
      qe = _.Function,
      Pe = _.Math,
      Ke = _.Number,
      Ve = _.Object,
      Ze = _.RegExp,
      Ye = _.String,
      Ge = _.TypeError,
      Je = Be.prototype,
      Xe = Ve.prototype,
      He = Ye.prototype,
      Qe = qe.prototype.toString,
      nu = Xe.hasOwnProperty,
      tu = 0,
      ru = Xe.toString,
      eu = Zn._,
      uu = Ze(
        "^" +
          Qe.call(nu)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      ),
      ou = _.ArrayBuffer,
      iu = _.clearTimeout,
      fu = _.parseFloat,
      au = Pe.pow,
      cu = Xe.propertyIsEnumerable,
      lu = jr(_, "Set"),
      su = _.setTimeout,
      pu = Je.splice,
      hu = _.Uint8Array,
      _u = jr(_, "WeakMap"),
      vu = Pe.ceil,
      gu = jr(Ve, "create"),
      yu = Pe.floor,
      du = jr(Be, "isArray"),
      mu = _.isFinite,
      wu = jr(Ve, "keys"),
      bu = Pe.max,
      xu = Pe.min,
      Au = jr(De, "now"),
      ju = _.parseInt,
      ku = Pe.random,
      Iu = Ke.NEGATIVE_INFINITY,
      Ru = Ke.POSITIVE_INFINITY,
      Ou = 4294967294,
      Eu = 2147483647,
      Cu = 9007199254740991,
      Uu = _u && new _u(),
      Wu = {};
    (Nn.support = {}),
      (Nn.templateSettings = {
        escape: _n,
        evaluate: vn,
        interpolate: gn,
        variable: "",
        imports: { _: Nn },
      });
    var $u = (function () {
        function n() {}
        return function (t) {
          if (ge(t)) {
            n.prototype = t;
            var r = new n();
            n.prototype = w;
          }
          return r || {};
        };
      })(),
      Su = Vt(_t),
      Fu = Vt(vt, true),
      Nu = Zt(),
      Tu = Zt(true),
      Lu = Uu
        ? function (n, t) {
            return Uu.set(n, t), n;
          }
        : Fe,
      zu = Uu
        ? function (n) {
            return Uu.get(n);
          }
        : Le,
      Bu = jt("length"),
      Du = (function () {
        var n = 0,
          t = 0;
        return function (r, e) {
          var u = ho(),
            o = S - (u - t);
          if (((t = u), 0 < o)) {
            if (++n >= $) return r;
          } else n = 0;
          return Lu(r, e);
        };
      })(),
      Mu = le(function (n, t) {
        return h(n) && Er(n) ? ft(n, pt(t, false, true)) : [];
      }),
      qu = tr(),
      Pu = tr(true),
      Ku = le(function (n) {
        for (
          var t = n.length, e = t, u = Be(l), o = xr(), i = o == r, f = [];
          e--;

        ) {
          var a = (n[e] = Er((a = n[e])) ? a : []);
          u[e] = i && 120 <= a.length && gu && lu ? new Dn(e && a) : null;
        }
        var i = n[0],
          c = -1,
          l = i ? i.length : 0,
          s = u[0];
        n: for (; ++c < l; )
          if (((a = i[c]), 0 > (s ? Mn(s, a) : o(f, a, 0)))) {
            for (e = t; --e; ) {
              var p = u[e];
              if (0 > (p ? Mn(p, a) : o(n[e], a, 0))) continue n;
            }
            s && s.push(a), f.push(a);
          }
        return f;
      }),
      Vu = le(function (t, r) {
        r = pt(r);
        var e = rt(t, r);
        return It(t, r.sort(n)), e;
      }),
      Zu = vr(),
      Yu = vr(true),
      Gu = le(function (n) {
        return St(pt(n, false, true));
      }),
      Ju = le(function (n, t) {
        return Er(n) ? ft(n, t) : [];
      }),
      Xu = le(Jr),
      Hu = le(function (n) {
        var t = n.length,
          r = 2 < t ? n[t - 2] : w,
          e = 1 < t ? n[t - 1] : w;
        return (
          2 < t && typeof r == "function"
            ? (t -= 2)
            : ((r = 1 < t && typeof e == "function" ? (--t, e) : w), (e = w)),
          (n.length = t),
          Xr(n, r, e)
        );
      }),
      Qu = le(function (n) {
        return (
          (n = pt(n)),
          this.thru(function (t) {
            t = Oo(t) ? t : [Br(t)];
            for (
              var r = n,
                e = -1,
                u = t.length,
                o = -1,
                i = r.length,
                f = Be(u + i);
              ++e < u;

            )
              f[e] = t[e];
            for (; ++o < i; ) f[e++] = r[o];
            return f;
          })
        );
      }),
      no = le(function (n, t) {
        return rt(n, pt(t));
      }),
      to = Pt(function (n, t, r) {
        nu.call(n, r) ? ++n[r] : (n[r] = 1);
      }),
      ro = nr(Su),
      eo = nr(Fu, true),
      uo = ur(Pn, Su),
      oo = ur(function (n, t) {
        for (var r = n.length; r-- && false !== t(n[r], r, n); );
        return n;
      }, Fu),
      io = Pt(function (n, t, r) {
        nu.call(n, r) ? n[r].push(t) : (n[r] = [t]);
      }),
      fo = Pt(function (n, t, r) {
        n[r] = t;
      }),
      ao = le(function (n, t, r) {
        var e = -1,
          u = typeof t == "function",
          o = Wr(t),
          i = Er(n) ? Be(n.length) : [];
        return (
          Su(n, function (n) {
            var f = u ? t : o && null != n ? n[t] : w;
            i[++e] = f ? f.apply(n, r) : Or(n, t, r);
          }),
          i
        );
      }),
      co = Pt(
        function (n, t, r) {
          n[r ? 0 : 1].push(t);
        },
        function () {
          return [[], []];
        }
      ),
      lo = lr(Xn, Su),
      so = lr(function (n, t, r, e) {
        var u = n.length;
        for (e && u && (r = n[--u]); u--; ) r = t(r, n[u], u, n);
        return r;
      }, Fu),
      po = le(function (n, t) {
        if (null == n) return [];
        var r = t[2];
        return r && Ur(t[0], t[1], r) && (t.length = 1), Wt(n, pt(t), []);
      }),
      ho =
        Au ||
        function () {
          return new De().getTime();
        },
      _o = le(function (n, t, r) {
        var e = x;
        if (r.length)
          var u = v(r, _o.placeholder),
            e = e | R;
        return gr(n, e, t, r, u);
      }),
      vo = le(function (n, t) {
        t = t.length ? pt(t) : Ie(n);
        for (var r = -1, e = t.length; ++r < e; ) {
          var u = t[r];
          n[u] = gr(n[u], x, n);
        }
        return n;
      }),
      go = le(function (n, t, r) {
        var e = x | A;
        if (r.length)
          var u = v(r, go.placeholder),
            e = e | R;
        return gr(t, e, n, r, u);
      }),
      yo = Xt(k),
      mo = Xt(I),
      wo = le(function (n, t) {
        return it(n, 1, t);
      }),
      bo = le(function (n, t, r) {
        return it(n, t, r);
      }),
      xo = er(),
      Ao = er(true),
      jo = le(function (n, t) {
        if (((t = pt(t)), typeof n != "function" || !Kn(t, e))) throw new Ge(L);
        var r = t.length;
        return le(function (e) {
          for (var u = xu(e.length, r); u--; ) e[u] = t[u](e[u]);
          return n.apply(this, e);
        });
      }),
      ko = cr(R),
      Io = cr(O),
      Ro = le(function (n, t) {
        return gr(n, C, w, w, w, pt(t));
      }),
      Oo =
        du ||
        function (n) {
          return h(n) && Sr(n.length) && ru.call(n) == D;
        },
      Eo = Kt(At),
      Co = Kt(function (n, t, r) {
        return r ? nt(n, t, r) : tt(n, t);
      }),
      Uo = Ht(Co, function (n, t) {
        return n === w ? t : n;
      }),
      Wo = Ht(Eo, Fr),
      $o = rr(_t),
      So = rr(vt),
      Fo = or(Nu),
      No = or(Tu),
      To = ir(_t),
      Lo = ir(vt),
      zo = wu
        ? function (n) {
            var t = null == n ? w : n.constructor;
            return (typeof t == "function" && t.prototype === n) ||
              (typeof n != "function" && Er(n))
              ? Lr(n)
              : ge(n)
              ? wu(n)
              : [];
          }
        : Lr,
      Bo = fr(true),
      Do = fr(),
      Mo = le(function (n, t) {
        if (null == n) return {};
        if ("function" != typeof t[0])
          return (t = Gn(pt(t), Ye)), Nr(n, ft(Re(n), t));
        var r = Bt(t[0], t[1], 3);
        return Tr(n, function (n, t, e) {
          return !r(n, t, e);
        });
      }),
      qo = le(function (n, t) {
        return null == n
          ? {}
          : "function" == typeof t[0]
          ? Tr(n, Bt(t[0], t[1], 3))
          : Nr(n, pt(t));
      }),
      Po = Gt(function (n, t, r) {
        return (
          (t = t.toLowerCase()),
          n + (r ? t.charAt(0).toUpperCase() + t.slice(1) : t)
        );
      }),
      Ko = Gt(function (n, t, r) {
        return n + (r ? "-" : "") + t.toLowerCase();
      }),
      Vo = ar(),
      Zo = ar(true),
      Yo = Gt(function (n, t, r) {
        return n + (r ? "_" : "") + t.toLowerCase();
      }),
      Go = Gt(function (n, t, r) {
        return n + (r ? " " : "") + (t.charAt(0).toUpperCase() + t.slice(1));
      }),
      Jo = le(function (n, t) {
        try {
          return n.apply(w, t);
        } catch (r) {
          return _e(r) ? r : new Me(r);
        }
      }),
      Xo = le(function (n, t) {
        return function (r) {
          return Or(r, n, t);
        };
      }),
      Ho = le(function (n, t) {
        return function (r) {
          return Or(n, r, t);
        };
      }),
      Qo = _r("ceil"),
      ni = _r("floor"),
      ti = Qt(se, Iu),
      ri = Qt(Ae, Ru),
      ei = _r("round");
    return (
      (Nn.prototype = Tn.prototype),
      (Ln.prototype = $u(Tn.prototype)),
      (Ln.prototype.constructor = Ln),
      (zn.prototype = $u(Tn.prototype)),
      (zn.prototype.constructor = zn),
      (Bn.prototype["delete"] = function (n) {
        return this.has(n) && delete this.__data__[n];
      }),
      (Bn.prototype.get = function (n) {
        return "__proto__" == n ? w : this.__data__[n];
      }),
      (Bn.prototype.has = function (n) {
        return "__proto__" != n && nu.call(this.__data__, n);
      }),
      (Bn.prototype.set = function (n, t) {
        return "__proto__" != n && (this.__data__[n] = t), this;
      }),
      (Dn.prototype.push = function (n) {
        var t = this.data;
        typeof n == "string" || ge(n) ? t.set.add(n) : (t.hash[n] = true);
      }),
      (ce.Cache = Bn),
      (Nn.after = function (n, t) {
        if (typeof t != "function") {
          if (typeof n != "function") throw new Ge(L);
          var r = n;
          (n = t), (t = r);
        }
        return (
          (n = mu((n = +n)) ? n : 0),
          function () {
            return 1 > --n ? t.apply(this, arguments) : void 0;
          }
        );
      }),
      (Nn.ary = function (n, t, r) {
        return (
          r && Ur(n, t, r) && (t = w),
          (t = n && null == t ? n.length : bu(+t || 0, 0)),
          gr(n, E, w, w, w, w, t)
        );
      }),
      (Nn.assign = Co),
      (Nn.at = no),
      (Nn.before = fe),
      (Nn.bind = _o),
      (Nn.bindAll = vo),
      (Nn.bindKey = go),
      (Nn.callback = Se),
      (Nn.chain = Qr),
      (Nn.chunk = function (n, t, r) {
        (t = (r ? Ur(n, t, r) : null == t) ? 1 : bu(yu(t) || 1, 1)), (r = 0);
        for (var e = n ? n.length : 0, u = -1, o = Be(vu(e / t)); r < e; )
          o[++u] = Et(n, r, (r += t));
        return o;
      }),
      (Nn.compact = function (n) {
        for (var t = -1, r = n ? n.length : 0, e = -1, u = []; ++t < r; ) {
          var o = n[t];
          o && (u[++e] = o);
        }
        return u;
      }),
      (Nn.constant = function (n) {
        return function () {
          return n;
        };
      }),
      (Nn.countBy = to),
      (Nn.create = function (n, t, r) {
        var e = $u(n);
        return r && Ur(n, t, r) && (t = w), t ? tt(e, t) : e;
      }),
      (Nn.curry = yo),
      (Nn.curryRight = mo),
      (Nn.debounce = ae),
      (Nn.defaults = Uo),
      (Nn.defaultsDeep = Wo),
      (Nn.defer = wo),
      (Nn.delay = bo),
      (Nn.difference = Mu),
      (Nn.drop = qr),
      (Nn.dropRight = Pr),
      (Nn.dropRightWhile = function (n, t, r) {
        return n && n.length ? Nt(n, wr(t, r, 3), true, true) : [];
      }),
      (Nn.dropWhile = function (n, t, r) {
        return n && n.length ? Nt(n, wr(t, r, 3), true) : [];
      }),
      (Nn.fill = function (n, t, r, e) {
        var u = n ? n.length : 0;
        if (!u) return [];
        for (
          r && typeof r != "number" && Ur(n, t, r) && ((r = 0), (e = u)),
            u = n.length,
            r = null == r ? 0 : +r || 0,
            0 > r && (r = -r > u ? 0 : u + r),
            e = e === w || e > u ? u : +e || 0,
            0 > e && (e += u),
            u = r > e ? 0 : e >>> 0,
            r >>>= 0;
          r < u;

        )
          n[r++] = t;
        return n;
      }),
      (Nn.filter = re),
      (Nn.flatten = function (n, t, r) {
        var e = n ? n.length : 0;
        return r && Ur(n, t, r) && (t = false), e ? pt(n, t) : [];
      }),
      (Nn.flattenDeep = function (n) {
        return n && n.length ? pt(n, true) : [];
      }),
      (Nn.flow = xo),
      (Nn.flowRight = Ao),
      (Nn.forEach = uo),
      (Nn.forEachRight = oo),
      (Nn.forIn = Fo),
      (Nn.forInRight = No),
      (Nn.forOwn = To),
      (Nn.forOwnRight = Lo),
      (Nn.functions = Ie),
      (Nn.groupBy = io),
      (Nn.indexBy = fo),
      (Nn.initial = function (n) {
        return Pr(n, 1);
      }),
      (Nn.intersection = Ku),
      (Nn.invert = function (n, t, r) {
        r && Ur(n, t, r) && (t = w), (r = -1);
        for (var e = zo(n), u = e.length, o = {}; ++r < u; ) {
          var i = e[r],
            f = n[i];
          t ? (nu.call(o, f) ? o[f].push(i) : (o[f] = [i])) : (o[f] = i);
        }
        return o;
      }),
      (Nn.invoke = ao),
      (Nn.keys = zo),
      (Nn.keysIn = Re),
      (Nn.map = ue),
      (Nn.mapKeys = Bo),
      (Nn.mapValues = Do),
      (Nn.matches = Ne),
      (Nn.matchesProperty = function (n, t) {
        return xt(n, ot(t, true));
      }),
      (Nn.memoize = ce),
      (Nn.merge = Eo),
      (Nn.method = Xo),
      (Nn.methodOf = Ho),
      (Nn.mixin = Te),
      (Nn.modArgs = jo),
      (Nn.negate = function (n) {
        if (typeof n != "function") throw new Ge(L);
        return function () {
          return !n.apply(this, arguments);
        };
      }),
      (Nn.omit = Mo),
      (Nn.once = function (n) {
        return fe(2, n);
      }),
      (Nn.pairs = Oe),
      (Nn.partial = ko),
      (Nn.partialRight = Io),
      (Nn.partition = co),
      (Nn.pick = qo),
      (Nn.pluck = function (n, t) {
        return ue(n, ze(t));
      }),
      (Nn.property = ze),
      (Nn.propertyOf = function (n) {
        return function (t) {
          return yt(n, Dr(t), t + "");
        };
      }),
      (Nn.pull = function () {
        var n = arguments,
          t = n[0];
        if (!t || !t.length) return t;
        for (var r = 0, e = xr(), u = n.length; ++r < u; )
          for (var o = 0, i = n[r]; -1 < (o = e(t, i, o)); ) pu.call(t, o, 1);
        return t;
      }),
      (Nn.pullAt = Vu),
      (Nn.range = function (n, t, r) {
        r && Ur(n, t, r) && (t = r = w),
          (n = +n || 0),
          (r = null == r ? 1 : +r || 0),
          null == t ? ((t = n), (n = 0)) : (t = +t || 0);
        var e = -1;
        t = bu(vu((t - n) / (r || 1)), 0);
        for (var u = Be(t); ++e < t; ) (u[e] = n), (n += r);
        return u;
      }),
      (Nn.rearg = Ro),
      (Nn.reject = function (n, t, r) {
        var e = Oo(n) ? Vn : lt;
        return (
          (t = wr(t, r, 3)),
          e(n, function (n, r, e) {
            return !t(n, r, e);
          })
        );
      }),
      (Nn.remove = function (n, t, r) {
        var e = [];
        if (!n || !n.length) return e;
        var u = -1,
          o = [],
          i = n.length;
        for (t = wr(t, r, 3); ++u < i; )
          (r = n[u]), t(r, u, n) && (e.push(r), o.push(u));
        return It(n, o), e;
      }),
      (Nn.rest = Yr),
      (Nn.restParam = le),
      (Nn.set = function (n, t, r) {
        if (null == n) return n;
        var e = t + "";
        t = null != n[e] || Wr(t, n) ? [e] : Dr(t);
        for (
          var e = -1, u = t.length, o = u - 1, i = n;
          null != i && ++e < u;

        ) {
          var f = t[e];
          ge(i) &&
            (e == o
              ? (i[f] = r)
              : null == i[f] && (i[f] = Cr(t[e + 1]) ? [] : {})),
            (i = i[f]);
        }
        return n;
      }),
      (Nn.shuffle = function (n) {
        return oe(n, Ru);
      }),
      (Nn.slice = function (n, t, r) {
        var e = n ? n.length : 0;
        return e
          ? (r && typeof r != "number" && Ur(n, t, r) && ((t = 0), (r = e)),
            Et(n, t, r))
          : [];
      }),
      (Nn.sortBy = function (n, t, r) {
        if (null == n) return [];
        r && Ur(n, t, r) && (t = w);
        var e = -1;
        return (
          (t = wr(t, r, 3)),
          (n = wt(n, function (n, r, u) {
            return { a: t(n, r, u), b: ++e, c: n };
          })),
          Ut(n, f)
        );
      }),
      (Nn.sortByAll = po),
      (Nn.sortByOrder = function (n, t, r, e) {
        return null == n
          ? []
          : (e && Ur(t, r, e) && (r = w),
            Oo(t) || (t = null == t ? [] : [t]),
            Oo(r) || (r = null == r ? [] : [r]),
            Wt(n, t, r));
      }),
      (Nn.spread = function (n) {
        if (typeof n != "function") throw new Ge(L);
        return function (t) {
          return n.apply(this, t);
        };
      }),
      (Nn.take = function (n, t, r) {
        return n && n.length
          ? ((r ? Ur(n, t, r) : null == t) && (t = 1), Et(n, 0, 0 > t ? 0 : t))
          : [];
      }),
      (Nn.takeRight = function (n, t, r) {
        var e = n ? n.length : 0;
        return e
          ? ((r ? Ur(n, t, r) : null == t) && (t = 1),
            (t = e - (+t || 0)),
            Et(n, 0 > t ? 0 : t))
          : [];
      }),
      (Nn.takeRightWhile = function (n, t, r) {
        return n && n.length ? Nt(n, wr(t, r, 3), false, true) : [];
      }),
      (Nn.takeWhile = function (n, t, r) {
        return n && n.length ? Nt(n, wr(t, r, 3)) : [];
      }),
      (Nn.tap = function (n, t, r) {
        return t.call(r, n), n;
      }),
      (Nn.throttle = function (n, t, r) {
        var e = true,
          u = true;
        if (typeof n != "function") throw new Ge(L);
        return (
          false === r
            ? (e = false)
            : ge(r) &&
              ((e = "leading" in r ? !!r.leading : e),
              (u = "trailing" in r ? !!r.trailing : u)),
          ae(n, t, { leading: e, maxWait: +t, trailing: u })
        );
      }),
      (Nn.thru = ne),
      (Nn.times = function (n, t, r) {
        if (((n = yu(n)), 1 > n || !mu(n))) return [];
        var e = -1,
          u = Be(xu(n, 4294967295));
        for (t = Bt(t, r, 1); ++e < n; ) 4294967295 > e ? (u[e] = t(e)) : t(e);
        return u;
      }),
      (Nn.toArray = je),
      (Nn.toPlainObject = ke),
      (Nn.transform = function (n, t, r, e) {
        var u = Oo(n) || xe(n);
        return (
          (t = wr(t, e, 4)),
          null == r &&
            (u || ge(n)
              ? ((e = n.constructor),
                (r = u ? (Oo(n) ? new e() : []) : $u(ve(e) ? e.prototype : w)))
              : (r = {})),
          (u ? Pn : _t)(n, function (n, e, u) {
            return t(r, n, e, u);
          }),
          r
        );
      }),
      (Nn.union = Gu),
      (Nn.uniq = Gr),
      (Nn.unzip = Jr),
      (Nn.unzipWith = Xr),
      (Nn.values = Ee),
      (Nn.valuesIn = function (n) {
        return Ft(n, Re(n));
      }),
      (Nn.where = function (n, t) {
        return re(n, bt(t));
      }),
      (Nn.without = Ju),
      (Nn.wrap = function (n, t) {
        return (t = null == t ? Fe : t), gr(t, R, w, [n], []);
      }),
      (Nn.xor = function () {
        for (var n = -1, t = arguments.length; ++n < t; ) {
          var r = arguments[n];
          if (Er(r)) var e = e ? Jn(ft(e, r), ft(r, e)) : r;
        }
        return e ? St(e) : [];
      }),
      (Nn.zip = Xu),
      (Nn.zipObject = Hr),
      (Nn.zipWith = Hu),
      (Nn.backflow = Ao),
      (Nn.collect = ue),
      (Nn.compose = Ao),
      (Nn.each = uo),
      (Nn.eachRight = oo),
      (Nn.extend = Co),
      (Nn.iteratee = Se),
      (Nn.methods = Ie),
      (Nn.object = Hr),
      (Nn.select = re),
      (Nn.tail = Yr),
      (Nn.unique = Gr),
      Te(Nn, Nn),
      (Nn.add = function (n, t) {
        return (+n || 0) + (+t || 0);
      }),
      (Nn.attempt = Jo),
      (Nn.camelCase = Po),
      (Nn.capitalize = function (n) {
        return (n = u(n)) && n.charAt(0).toUpperCase() + n.slice(1);
      }),
      (Nn.ceil = Qo),
      (Nn.clone = function (n, t, r, e) {
        return (
          t && typeof t != "boolean" && Ur(n, t, r)
            ? (t = false)
            : typeof t == "function" && ((e = r), (r = t), (t = false)),
          typeof r == "function" ? ot(n, t, Bt(r, e, 1)) : ot(n, t)
        );
      }),
      (Nn.cloneDeep = function (n, t, r) {
        return typeof t == "function" ? ot(n, true, Bt(t, r, 1)) : ot(n, true);
      }),
      (Nn.deburr = Ce),
      (Nn.endsWith = function (n, t, r) {
        (n = u(n)), (t += "");
        var e = n.length;
        return (
          (r = r === w ? e : xu(0 > r ? 0 : +r || 0, e)),
          (r -= t.length),
          0 <= r && n.indexOf(t, r) == r
        );
      }),
      (Nn.escape = function (n) {
        return (n = u(n)) && hn.test(n) ? n.replace(sn, c) : n;
      }),
      (Nn.escapeRegExp = function (n) {
        return (n = u(n)) && bn.test(n) ? n.replace(wn, l) : n || "(?:)";
      }),
      (Nn.every = te),
      (Nn.find = ro),
      (Nn.findIndex = qu),
      (Nn.findKey = $o),
      (Nn.findLast = eo),
      (Nn.findLastIndex = Pu),
      (Nn.findLastKey = So),
      (Nn.findWhere = function (n, t) {
        return ro(n, bt(t));
      }),
      (Nn.first = Kr),
      (Nn.floor = ni),
      (Nn.get = function (n, t, r) {
        return (n = null == n ? w : yt(n, Dr(t), t + "")), n === w ? r : n;
      }),
      (Nn.gt = se),
      (Nn.gte = function (n, t) {
        return n >= t;
      }),
      (Nn.has = function (n, t) {
        if (null == n) return false;
        var r = nu.call(n, t);
        if (!r && !Wr(t)) {
          if (
            ((t = Dr(t)),
            (n = 1 == t.length ? n : yt(n, Et(t, 0, -1))),
            null == n)
          )
            return false;
          (t = Zr(t)), (r = nu.call(n, t));
        }
        return r || (Sr(n.length) && Cr(t, n.length) && (Oo(n) || pe(n)));
      }),
      (Nn.identity = Fe),
      (Nn.includes = ee),
      (Nn.indexOf = Vr),
      (Nn.inRange = function (n, t, r) {
        return (
          (t = +t || 0),
          r === w ? ((r = t), (t = 0)) : (r = +r || 0),
          n >= xu(t, r) && n < bu(t, r)
        );
      }),
      (Nn.isArguments = pe),
      (Nn.isArray = Oo),
      (Nn.isBoolean = function (n) {
        return true === n || false === n || (h(n) && ru.call(n) == M);
      }),
      (Nn.isDate = function (n) {
        return h(n) && ru.call(n) == q;
      }),
      (Nn.isElement = function (n) {
        return !!n && 1 === n.nodeType && h(n) && !me(n);
      }),
      (Nn.isEmpty = function (n) {
        return null == n
          ? true
          : Er(n) && (Oo(n) || be(n) || pe(n) || (h(n) && ve(n.splice)))
          ? !n.length
          : !zo(n).length;
      }),
      (Nn.isEqual = he),
      (Nn.isError = _e),
      (Nn.isFinite = function (n) {
        return typeof n == "number" && mu(n);
      }),
      (Nn.isFunction = ve),
      (Nn.isMatch = function (n, t, r, e) {
        return (r = typeof r == "function" ? Bt(r, e, 3) : w), mt(n, Ar(t), r);
      }),
      (Nn.isNaN = function (n) {
        return de(n) && n != +n;
      }),
      (Nn.isNative = ye),
      (Nn.isNull = function (n) {
        return null === n;
      }),
      (Nn.isNumber = de),
      (Nn.isObject = ge),
      (Nn.isPlainObject = me),
      (Nn.isRegExp = we),
      (Nn.isString = be),
      (Nn.isTypedArray = xe),
      (Nn.isUndefined = function (n) {
        return n === w;
      }),
      (Nn.kebabCase = Ko),
      (Nn.last = Zr),
      (Nn.lastIndexOf = function (n, t, r) {
        var e = n ? n.length : 0;
        if (!e) return -1;
        var u = e;
        if (typeof r == "number")
          u = (0 > r ? bu(e + r, 0) : xu(r || 0, e - 1)) + 1;
        else if (r)
          return (
            (u = Lt(n, t, true) - 1),
            (n = n[u]),
            (t === t ? t === n : n !== n) ? u : -1
          );
        if (t !== t) return p(n, u, true);
        for (; u--; ) if (n[u] === t) return u;
        return -1;
      }),
      (Nn.lt = Ae),
      (Nn.lte = function (n, t) {
        return n <= t;
      }),
      (Nn.max = ti),
      (Nn.min = ri),
      (Nn.noConflict = function () {
        return (Zn._ = eu), this;
      }),
      (Nn.noop = Le),
      (Nn.now = ho),
      (Nn.pad = function (n, t, r) {
        (n = u(n)), (t = +t);
        var e = n.length;
        return e < t && mu(t)
          ? ((e = (t - e) / 2),
            (t = yu(e)),
            (e = vu(e)),
            (r = pr("", e, r)),
            r.slice(0, t) + n + r)
          : n;
      }),
      (Nn.padLeft = Vo),
      (Nn.padRight = Zo),
      (Nn.parseInt = function (n, t, r) {
        return (
          (r ? Ur(n, t, r) : null == t) ? (t = 0) : t && (t = +t),
          (n = We(n)),
          ju(n, t || (In.test(n) ? 16 : 10))
        );
      }),
      (Nn.random = function (n, t, r) {
        r && Ur(n, t, r) && (t = r = w);
        var e = null == n,
          u = null == t;
        return (
          null == r &&
            (u && typeof n == "boolean"
              ? ((r = n), (n = 1))
              : typeof t == "boolean" && ((r = t), (u = true))),
          e && u && ((t = 1), (u = false)),
          (n = +n || 0),
          u ? ((t = n), (n = 0)) : (t = +t || 0),
          r || n % 1 || t % 1
            ? ((r = ku()),
              xu(n + r * (t - n + fu("1e-" + ((r + "").length - 1))), t))
            : Rt(n, t)
        );
      }),
      (Nn.reduce = lo),
      (Nn.reduceRight = so),
      (Nn.repeat = Ue),
      (Nn.result = function (n, t, r) {
        var e = null == n ? w : n[t];
        return (
          e === w &&
            (null == n ||
              Wr(t, n) ||
              ((t = Dr(t)),
              (n = 1 == t.length ? n : yt(n, Et(t, 0, -1))),
              (e = null == n ? w : n[Zr(t)])),
            (e = e === w ? r : e)),
          ve(e) ? e.call(n) : e
        );
      }),
      (Nn.round = ei),
      (Nn.runInContext = m),
      (Nn.size = function (n) {
        var t = n ? Bu(n) : 0;
        return Sr(t) ? t : zo(n).length;
      }),
      (Nn.snakeCase = Yo),
      (Nn.some = ie),
      (Nn.sortedIndex = Zu),
      (Nn.sortedLastIndex = Yu),
      (Nn.startCase = Go),
      (Nn.startsWith = function (n, t, r) {
        return (
          (n = u(n)),
          (r = null == r ? 0 : xu(0 > r ? 0 : +r || 0, n.length)),
          n.lastIndexOf(t, r) == r
        );
      }),
      (Nn.sum = function (n, t, r) {
        if ((r && Ur(n, t, r) && (t = w), (t = wr(t, r, 3)), 1 == t.length)) {
          (n = Oo(n) ? n : zr(n)), (r = n.length);
          for (var e = 0; r--; ) e += +t(n[r]) || 0;
          n = e;
        } else n = $t(n, t);
        return n;
      }),
      (Nn.template = function (n, t, r) {
        var e = Nn.templateSettings;
        r && Ur(n, t, r) && (t = r = w),
          (n = u(n)),
          (t = nt(tt({}, r || t), e, Qn)),
          (r = nt(tt({}, t.imports), e.imports, Qn));
        var o,
          i,
          f = zo(r),
          a = Ft(r, f),
          c = 0;
        r = t.interpolate || Cn;
        var l = "__p+='";
        r = Ze(
          (t.escape || Cn).source +
            "|" +
            r.source +
            "|" +
            (r === gn ? jn : Cn).source +
            "|" +
            (t.evaluate || Cn).source +
            "|$",
          "g"
        );
        var p = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";
        if (
          (n.replace(r, function (t, r, e, u, f, a) {
            return (
              e || (e = u),
              (l += n.slice(c, a).replace(Un, s)),
              r && ((o = true), (l += "'+__e(" + r + ")+'")),
              f && ((i = true), (l += "';" + f + ";\n__p+='")),
              e && (l += "'+((__t=(" + e + "))==null?'':__t)+'"),
              (c = a + t.length),
              t
            );
          }),
          (l += "';"),
          (t = t.variable) || (l = "with(obj){" + l + "}"),
          (l = (i ? l.replace(fn, "") : l)
            .replace(an, "$1")
            .replace(cn, "$1;")),
          (l =
            "function(" +
            (t || "obj") +
            "){" +
            (t ? "" : "obj||(obj={});") +
            "var __t,__p=''" +
            (o ? ",__e=_.escape" : "") +
            (i
              ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}"
              : ";") +
            l +
            "return __p}"),
          (t = Jo(function () {
            return qe(f, p + "return " + l).apply(w, a);
          })),
          (t.source = l),
          _e(t))
        )
          throw t;
        return t;
      }),
      (Nn.trim = We),
      (Nn.trimLeft = function (n, t, r) {
        var e = n;
        return (n = u(n))
          ? n.slice((r ? Ur(e, t, r) : null == t) ? g(n) : o(n, t + ""))
          : n;
      }),
      (Nn.trimRight = function (n, t, r) {
        var e = n;
        return (n = u(n))
          ? (r ? Ur(e, t, r) : null == t)
            ? n.slice(0, y(n) + 1)
            : n.slice(0, i(n, t + "") + 1)
          : n;
      }),
      (Nn.trunc = function (n, t, r) {
        r && Ur(n, t, r) && (t = w);
        var e = U;
        if (((r = W), null != t))
          if (ge(t)) {
            var o = "separator" in t ? t.separator : o,
              e = "length" in t ? +t.length || 0 : e;
            r = "omission" in t ? u(t.omission) : r;
          } else e = +t || 0;
        if (((n = u(n)), e >= n.length)) return n;
        if (((e -= r.length), 1 > e)) return r;
        if (((t = n.slice(0, e)), null == o)) return t + r;
        if (we(o)) {
          if (n.slice(e).search(o)) {
            var i,
              f = n.slice(0, e);
            for (
              o.global || (o = Ze(o.source, (kn.exec(o) || "") + "g")),
                o.lastIndex = 0;
              (n = o.exec(f));

            )
              i = n.index;
            t = t.slice(0, null == i ? e : i);
          }
        } else
          n.indexOf(o, e) != e &&
            ((o = t.lastIndexOf(o)), -1 < o && (t = t.slice(0, o)));
        return t + r;
      }),
      (Nn.unescape = function (n) {
        return (n = u(n)) && pn.test(n) ? n.replace(ln, d) : n;
      }),
      (Nn.uniqueId = function (n) {
        var t = ++tu;
        return u(n) + t;
      }),
      (Nn.words = $e),
      (Nn.all = te),
      (Nn.any = ie),
      (Nn.contains = ee),
      (Nn.eq = he),
      (Nn.detect = ro),
      (Nn.foldl = lo),
      (Nn.foldr = so),
      (Nn.head = Kr),
      (Nn.include = ee),
      (Nn.inject = lo),
      Te(
        Nn,
        (function () {
          var n = {};
          return (
            _t(Nn, function (t, r) {
              Nn.prototype[r] || (n[r] = t);
            }),
            n
          );
        })(),
        false
      ),
      (Nn.sample = oe),
      (Nn.prototype.sample = function (n) {
        return this.__chain__ || null != n
          ? this.thru(function (t) {
              return oe(t, n);
            })
          : oe(this.value());
      }),
      (Nn.VERSION = b),
      Pn(
        "bind bindKey curry curryRight partial partialRight".split(" "),
        function (n) {
          Nn[n].placeholder = Nn;
        }
      ),
      Pn(["drop", "take"], function (n, t) {
        (zn.prototype[n] = function (r) {
          var e = this.__filtered__;
          if (e && !t) return new zn(this);
          r = null == r ? 1 : bu(yu(r) || 0, 0);
          var u = this.clone();
          return (
            e
              ? (u.__takeCount__ = xu(u.__takeCount__, r))
              : u.__views__.push({
                  size: r,
                  type: n + (0 > u.__dir__ ? "Right" : ""),
                }),
            u
          );
        }),
          (zn.prototype[n + "Right"] = function (t) {
            return this.reverse()[n](t).reverse();
          });
      }),
      Pn(["filter", "map", "takeWhile"], function (n, t) {
        var r = t + 1,
          e = r != T;
        zn.prototype[n] = function (n, t) {
          var u = this.clone();
          return (
            u.__iteratees__.push({ iteratee: wr(n, t, 1), type: r }),
            (u.__filtered__ = u.__filtered__ || e),
            u
          );
        };
      }),
      Pn(["first", "last"], function (n, t) {
        var r = "take" + (t ? "Right" : "");
        zn.prototype[n] = function () {
          return this[r](1).value()[0];
        };
      }),
      Pn(["initial", "rest"], function (n, t) {
        var r = "drop" + (t ? "" : "Right");
        zn.prototype[n] = function () {
          return this.__filtered__ ? new zn(this) : this[r](1);
        };
      }),
      Pn(["pluck", "where"], function (n, t) {
        var r = t ? "filter" : "map",
          e = t ? bt : ze;
        zn.prototype[n] = function (n) {
          return this[r](e(n));
        };
      }),
      (zn.prototype.compact = function () {
        return this.filter(Fe);
      }),
      (zn.prototype.reject = function (n, t) {
        return (
          (n = wr(n, t, 1)),
          this.filter(function (t) {
            return !n(t);
          })
        );
      }),
      (zn.prototype.slice = function (n, t) {
        n = null == n ? 0 : +n || 0;
        var r = this;
        return r.__filtered__ && (0 < n || 0 > t)
          ? new zn(r)
          : (0 > n ? (r = r.takeRight(-n)) : n && (r = r.drop(n)),
            t !== w &&
              ((t = +t || 0), (r = 0 > t ? r.dropRight(-t) : r.take(t - n))),
            r);
      }),
      (zn.prototype.takeRightWhile = function (n, t) {
        return this.reverse().takeWhile(n, t).reverse();
      }),
      (zn.prototype.toArray = function () {
        return this.take(Ru);
      }),
      _t(zn.prototype, function (n, t) {
        var r = /^(?:filter|map|reject)|While$/.test(t),
          e = /^(?:first|last)$/.test(t),
          u = Nn[e ? "take" + ("last" == t ? "Right" : "") : t];
        u &&
          (Nn.prototype[t] = function () {
            function t(n) {
              return e && i ? u(n, 1)[0] : u.apply(w, Jn([n], o));
            }
            var o = e ? [1] : arguments,
              i = this.__chain__,
              f = this.__wrapped__,
              a = !!this.__actions__.length,
              c = f instanceof zn,
              l = o[0],
              s = c || Oo(f);
            return (
              s &&
                r &&
                typeof l == "function" &&
                1 != l.length &&
                (c = s = false),
              (l = { func: ne, args: [t], thisArg: w }),
              (a = c && !a),
              e && !i
                ? a
                  ? ((f = f.clone()), f.__actions__.push(l), n.call(f))
                  : u.call(w, this.value())[0]
                : !e && s
                ? ((f = a ? f : new zn(this)),
                  (f = n.apply(f, o)),
                  f.__actions__.push(l),
                  new Ln(f, i))
                : this.thru(t)
            );
          });
      }),
      Pn(
        "join pop push replace shift sort splice split unshift".split(" "),
        function (n) {
          var t = (/^(?:replace|split)$/.test(n) ? He : Je)[n],
            r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
            e = /^(?:join|pop|replace|shift)$/.test(n);
          Nn.prototype[n] = function () {
            var n = arguments;
            return e && !this.__chain__
              ? t.apply(this.value(), n)
              : this[r](function (r) {
                  return t.apply(r, n);
                });
          };
        }
      ),
      _t(zn.prototype, function (n, t) {
        var r = Nn[t];
        if (r) {
          var e = r.name;
          (Wu[e] || (Wu[e] = [])).push({
            name: t,
            func: r,
          });
        }
      }),
      (Wu[sr(w, A).name] = [{ name: "wrapper", func: w }]),
      (zn.prototype.clone = function () {
        var n = new zn(this.__wrapped__);
        return (
          (n.__actions__ = qn(this.__actions__)),
          (n.__dir__ = this.__dir__),
          (n.__filtered__ = this.__filtered__),
          (n.__iteratees__ = qn(this.__iteratees__)),
          (n.__takeCount__ = this.__takeCount__),
          (n.__views__ = qn(this.__views__)),
          n
        );
      }),
      (zn.prototype.reverse = function () {
        if (this.__filtered__) {
          var n = new zn(this);
          (n.__dir__ = -1), (n.__filtered__ = true);
        } else (n = this.clone()), (n.__dir__ *= -1);
        return n;
      }),
      (zn.prototype.value = function () {
        var n,
          t = this.__wrapped__.value(),
          r = this.__dir__,
          e = Oo(t),
          u = 0 > r,
          o = e ? t.length : 0;
        n = o;
        for (var i = this.__views__, f = 0, a = -1, c = i.length; ++a < c; ) {
          var l = i[a],
            s = l.size;
          switch (l.type) {
            case "drop":
              f += s;
              break;
            case "dropRight":
              n -= s;
              break;
            case "take":
              n = xu(n, f + s);
              break;
            case "takeRight":
              f = bu(f, n - s);
          }
        }
        if (
          ((n = { start: f, end: n }),
          (i = n.start),
          (f = n.end),
          (n = f - i),
          (i = u ? f : i - 1),
          (f = this.__iteratees__),
          (a = f.length),
          (c = 0),
          (l = xu(n, this.__takeCount__)),
          !e || o < F || (o == n && l == n))
        )
          return Tt(u && e ? t.reverse() : t, this.__actions__);
        e = [];
        n: for (; n-- && c < l; ) {
          for (i += r, u = -1, o = t[i]; ++u < a; ) {
            var p = f[u],
              s = p.type,
              p = p.iteratee(o);
            if (s == T) o = p;
            else if (!p) {
              if (s == N) continue n;
              break n;
            }
          }
          e[c++] = o;
        }
        return e;
      }),
      (Nn.prototype.chain = function () {
        return Qr(this);
      }),
      (Nn.prototype.commit = function () {
        return new Ln(this.value(), this.__chain__);
      }),
      (Nn.prototype.concat = Qu),
      (Nn.prototype.plant = function (n) {
        for (var t, r = this; r instanceof Tn; ) {
          var e = Mr(r);
          t ? (u.__wrapped__ = e) : (t = e);
          var u = e,
            r = r.__wrapped__;
        }
        return (u.__wrapped__ = n), t;
      }),
      (Nn.prototype.reverse = function () {
        function n(n) {
          return r && 0 > r.__dir__ ? n : n.reverse();
        }
        var t = this.__wrapped__;
        if (t instanceof zn) {
          var r = t;
          return (
            this.__actions__.length && (r = new zn(this)),
            (r = r.reverse()),
            r.__actions__.push({ func: ne, args: [n], thisArg: w }),
            new Ln(r, this.__chain__)
          );
        }
        return this.thru(n);
      }),
      (Nn.prototype.toString = function () {
        return this.value() + "";
      }),
      (Nn.prototype.run =
        Nn.prototype.toJSON =
        Nn.prototype.valueOf =
        Nn.prototype.value =
          function () {
            return Tt(this.__wrapped__, this.__actions__);
          }),
      (Nn.prototype.collect = Nn.prototype.map),
      (Nn.prototype.head = Nn.prototype.first),
      (Nn.prototype.select = Nn.prototype.filter),
      (Nn.prototype.tail = Nn.prototype.rest),
      Nn
    );
  }
  var w,
    b = "3.10.0",
    x = 1,
    A = 2,
    j = 4,
    k = 8,
    I = 16,
    R = 32,
    O = 64,
    E = 128,
    C = 256,
    U = 30,
    W = "...",
    $ = 150,
    S = 16,
    F = 200,
    N = 1,
    T = 2,
    L = "Expected a function",
    z = "__lodash_placeholder__",
    B = "[object Arguments]",
    D = "[object Array]",
    M = "[object Boolean]",
    q = "[object Date]",
    P = "[object Error]",
    K = "[object Function]",
    V = "[object Number]",
    Z = "[object Object]",
    Y = "[object RegExp]",
    G = "[object String]",
    J = "[object ArrayBuffer]",
    X = "[object Float32Array]",
    H = "[object Float64Array]",
    Q = "[object Int8Array]",
    nn = "[object Int16Array]",
    tn = "[object Int32Array]",
    rn = "[object Uint8Array]",
    en = "[object Uint8ClampedArray]",
    un = "[object Uint16Array]",
    on = "[object Uint32Array]",
    fn = /\b__p\+='';/g,
    an = /\b(__p\+=)''\+/g,
    cn = /(__e\(.*?\)|\b__t\))\+'';/g,
    ln = /&(?:amp|lt|gt|quot|#39|#96);/g,
    sn = /[&<>"'`]/g,
    pn = RegExp(ln.source),
    hn = RegExp(sn.source),
    _n = /<%-([\s\S]+?)%>/g,
    vn = /<%([\s\S]+?)%>/g,
    gn = /<%=([\s\S]+?)%>/g,
    yn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
    dn = /^\w*$/,
    mn =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
    wn =
      /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
    bn = RegExp(wn.source),
    xn = /[\u0300-\u036f\ufe20-\ufe23]/g,
    An = /\\(\\)?/g,
    jn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
    kn = /\w*$/,
    In = /^0[xX]/,
    Rn = /^\[object .+?Constructor\]$/,
    On = /^\d+$/,
    En = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
    Cn = /($^)/,
    Un = /['\n\r\u2028\u2029\\]/g,
    Wn = RegExp(
      "[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+",
      "g"
    ),
    $n =
      "Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(
        " "
      ),
    Sn = {};
  (Sn[X] =
    Sn[H] =
    Sn[Q] =
    Sn[nn] =
    Sn[tn] =
    Sn[rn] =
    Sn[en] =
    Sn[un] =
    Sn[on] =
      true),
    (Sn[B] =
      Sn[D] =
      Sn[J] =
      Sn[M] =
      Sn[q] =
      Sn[P] =
      Sn[K] =
      Sn["[object Map]"] =
      Sn[V] =
      Sn[Z] =
      Sn[Y] =
      Sn["[object Set]"] =
      Sn[G] =
      Sn["[object WeakMap]"] =
        false);
  var Fn = {};
  (Fn[B] =
    Fn[D] =
    Fn[J] =
    Fn[M] =
    Fn[q] =
    Fn[X] =
    Fn[H] =
    Fn[Q] =
    Fn[nn] =
    Fn[tn] =
    Fn[V] =
    Fn[Z] =
    Fn[Y] =
    Fn[G] =
    Fn[rn] =
    Fn[en] =
    Fn[un] =
    Fn[on] =
      true),
    (Fn[P] =
      Fn[K] =
      Fn["[object Map]"] =
      Fn["[object Set]"] =
      Fn["[object WeakMap]"] =
        false);
  var Nn = {
      "\xc0": "A",
      "\xc1": "A",
      "\xc2": "A",
      "\xc3": "A",
      "\xc4": "A",
      "\xc5": "A",
      "\xe0": "a",
      "\xe1": "a",
      "\xe2": "a",
      "\xe3": "a",
      "\xe4": "a",
      "\xe5": "a",
      "\xc7": "C",
      "\xe7": "c",
      "\xd0": "D",
      "\xf0": "d",
      "\xc8": "E",
      "\xc9": "E",
      "\xca": "E",
      "\xcb": "E",
      "\xe8": "e",
      "\xe9": "e",
      "\xea": "e",
      "\xeb": "e",
      "\xcc": "I",
      "\xcd": "I",
      "\xce": "I",
      "\xcf": "I",
      "\xec": "i",
      "\xed": "i",
      "\xee": "i",
      "\xef": "i",
      "\xd1": "N",
      "\xf1": "n",
      "\xd2": "O",
      "\xd3": "O",
      "\xd4": "O",
      "\xd5": "O",
      "\xd6": "O",
      "\xd8": "O",
      "\xf2": "o",
      "\xf3": "o",
      "\xf4": "o",
      "\xf5": "o",
      "\xf6": "o",
      "\xf8": "o",
      "\xd9": "U",
      "\xda": "U",
      "\xdb": "U",
      "\xdc": "U",
      "\xf9": "u",
      "\xfa": "u",
      "\xfb": "u",
      "\xfc": "u",
      "\xdd": "Y",
      "\xfd": "y",
      "\xff": "y",
      "\xc6": "Ae",
      "\xe6": "ae",
      "\xde": "Th",
      "\xfe": "th",
      "\xdf": "ss",
    },
    Tn = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "`": "&#96;",
    },
    Ln = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'",
      "&#96;": "`",
    },
    zn = { function: true, object: true },
    Bn = {
      0: "x30",
      1: "x31",
      2: "x32",
      3: "x33",
      4: "x34",
      5: "x35",
      6: "x36",
      7: "x37",
      8: "x38",
      9: "x39",
      A: "x41",
      B: "x42",
      C: "x43",
      D: "x44",
      E: "x45",
      F: "x46",
      a: "x61",
      b: "x62",
      c: "x63",
      d: "x64",
      e: "x65",
      f: "x66",
      n: "x6e",
      r: "x72",
      t: "x74",
      u: "x75",
      v: "x76",
      x: "x78",
    },
    Dn = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029",
    },
    Mn = zn[typeof exports] && exports && !exports.nodeType && exports,
    qn = zn[typeof module] && module && !module.nodeType && module,
    Pn = zn[typeof self] && self && self.Object && self,
    Kn = zn[typeof window] && window && window.Object && window,
    Vn = qn && qn.exports === Mn && Mn,
    Zn =
      (Mn &&
        qn &&
        typeof global == "object" &&
        global &&
        global.Object &&
        global) ||
      (Kn !== (this && this.window) && Kn) ||
      Pn ||
      this,
    Yn = m();
  typeof define == "function" && typeof define.amd == "object" && define.amd
    ? ((Zn._ = Yn),
      define(function () {
        return Yn;
      }))
    : Mn && qn
    ? Vn
      ? ((qn.exports = Yn)._ = Yn)
      : (Mn._ = Yn)
    : (Zn._ = Yn);
}).call(this);
/*!
 * jQuery Cycle2; version: 2.1.6 build: 20141007
 * http://jquery.malsup.com/cycle2/
 * Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
 */
!(function (a) {
  "use strict";
  function b(a) {
    return (a || "").toLowerCase();
  }
  var c = "2.1.6";
  (a.fn.cycle = function (c) {
    var d;
    return 0 !== this.length || a.isReady
      ? this.each(function () {
          var d,
            e,
            f,
            g,
            h = a(this),
            i = a.fn.cycle.log;
          if (!h.data("cycle.opts")) {
            (h.data("cycle-log") === !1 ||
              (c && c.log === !1) ||
              (e && e.log === !1)) &&
              (i = a.noop),
              i("--c2 init--"),
              (d = h.data());
            for (var j in d)
              d.hasOwnProperty(j) &&
                /^cycle[A-Z]+/.test(j) &&
                ((g = d[j]),
                (f = j.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b)),
                i(f + ":", g, "(" + typeof g + ")"),
                (d[f] = g));
            (e = a.extend({}, a.fn.cycle.defaults, d, c || {})),
              (e.timeoutId = 0),
              (e.paused = e.paused || !1),
              (e.container = h),
              (e._maxZ = e.maxZ),
              (e.API = a.extend({ _container: h }, a.fn.cycle.API)),
              (e.API.log = i),
              (e.API.trigger = function (a, b) {
                return e.container.trigger(a, b), e.API;
              }),
              h.data("cycle.opts", e),
              h.data("cycle.API", e.API),
              e.API.trigger("cycle-bootstrap", [e, e.API]),
              e.API.addInitialSlides(),
              e.API.preInitSlideshow(),
              e.slides.length && e.API.initSlideshow();
          }
        })
      : ((d = { s: this.selector, c: this.context }),
        a.fn.cycle.log("requeuing slideshow (dom not ready)"),
        a(function () {
          a(d.s, d.c).cycle(c);
        }),
        this);
  }),
    (a.fn.cycle.API = {
      opts: function () {
        return this._container.data("cycle.opts");
      },
      addInitialSlides: function () {
        var b = this.opts(),
          c = b.slides;
        (b.slideCount = 0),
          (b.slides = a()),
          (c = c.jquery ? c : b.container.find(c)),
          b.random &&
            c.sort(function () {
              return Math.random() - 0.5;
            }),
          b.API.add(c);
      },
      preInitSlideshow: function () {
        var b = this.opts();
        b.API.trigger("cycle-pre-initialize", [b]);
        var c = a.fn.cycle.transitions[b.fx];
        c && a.isFunction(c.preInit) && c.preInit(b), (b._preInitialized = !0);
      },
      postInitSlideshow: function () {
        var b = this.opts();
        b.API.trigger("cycle-post-initialize", [b]);
        var c = a.fn.cycle.transitions[b.fx];
        c && a.isFunction(c.postInit) && c.postInit(b);
      },
      initSlideshow: function () {
        var b,
          c = this.opts(),
          d = c.container;
        c.API.calcFirstSlide(),
          "static" == c.container.css("position") &&
            c.container.css("position", "relative"),
          a(c.slides[c.currSlide]).css({
            opacity: 1,
            display: "block",
            visibility: "visible",
          }),
          c.API.stackSlides(
            c.slides[c.currSlide],
            c.slides[c.nextSlide],
            !c.reverse
          ),
          c.pauseOnHover &&
            (c.pauseOnHover !== !0 && (d = a(c.pauseOnHover)),
            d.hover(
              function () {
                c.API.pause(!0);
              },
              function () {
                c.API.resume(!0);
              }
            )),
          c.timeout &&
            ((b = c.API.getSlideOpts(c.currSlide)),
            c.API.queueTransition(b, b.timeout + c.delay)),
          (c._initialized = !0),
          c.API.updateView(!0),
          c.API.trigger("cycle-initialized", [c]),
          c.API.postInitSlideshow();
      },
      pause: function (b) {
        var c = this.opts(),
          d = c.API.getSlideOpts(),
          e = c.hoverPaused || c.paused;
        b ? (c.hoverPaused = !0) : (c.paused = !0),
          e ||
            (c.container.addClass("cycle-paused"),
            c.API.trigger("cycle-paused", [c]).log("cycle-paused"),
            d.timeout &&
              (clearTimeout(c.timeoutId),
              (c.timeoutId = 0),
              (c._remainingTimeout -= a.now() - c._lastQueue),
              (c._remainingTimeout < 0 || isNaN(c._remainingTimeout)) &&
                (c._remainingTimeout = void 0)));
      },
      resume: function (a) {
        var b = this.opts(),
          c = !b.hoverPaused && !b.paused;
        a ? (b.hoverPaused = !1) : (b.paused = !1),
          c ||
            (b.container.removeClass("cycle-paused"),
            0 === b.slides.filter(":animated").length &&
              b.API.queueTransition(b.API.getSlideOpts(), b._remainingTimeout),
            b.API.trigger("cycle-resumed", [b, b._remainingTimeout]).log(
              "cycle-resumed"
            ));
      },
      add: function (b, c) {
        var d,
          e = this.opts(),
          f = e.slideCount,
          g = !1;
        "string" == a.type(b) && (b = a.trim(b)),
          a(b).each(function () {
            var b,
              d = a(this);
            c ? e.container.prepend(d) : e.container.append(d),
              e.slideCount++,
              (b = e.API.buildSlideOpts(d)),
              (e.slides = c ? a(d).add(e.slides) : e.slides.add(d)),
              e.API.initSlide(b, d, --e._maxZ),
              d.data("cycle.opts", b),
              e.API.trigger("cycle-slide-added", [e, b, d]);
          }),
          e.API.updateView(!0),
          (g = e._preInitialized && 2 > f && e.slideCount >= 1),
          g &&
            (e._initialized
              ? e.timeout &&
                ((d = e.slides.length),
                (e.nextSlide = e.reverse ? d - 1 : 1),
                e.timeoutId || e.API.queueTransition(e))
              : e.API.initSlideshow());
      },
      calcFirstSlide: function () {
        var a,
          b = this.opts();
        (a = parseInt(b.startingSlide || 0, 10)),
          (a >= b.slides.length || 0 > a) && (a = 0),
          (b.currSlide = a),
          b.reverse
            ? ((b.nextSlide = a - 1),
              b.nextSlide < 0 && (b.nextSlide = b.slides.length - 1))
            : ((b.nextSlide = a + 1),
              b.nextSlide == b.slides.length && (b.nextSlide = 0));
      },
      calcNextSlide: function () {
        var a,
          b = this.opts();
        b.reverse
          ? ((a = b.nextSlide - 1 < 0),
            (b.nextSlide = a ? b.slideCount - 1 : b.nextSlide - 1),
            (b.currSlide = a ? 0 : b.nextSlide + 1))
          : ((a = b.nextSlide + 1 == b.slides.length),
            (b.nextSlide = a ? 0 : b.nextSlide + 1),
            (b.currSlide = a ? b.slides.length - 1 : b.nextSlide - 1));
      },
      calcTx: function (b, c) {
        var d,
          e = b;
        return (
          e._tempFx
            ? (d = a.fn.cycle.transitions[e._tempFx])
            : c && e.manualFx && (d = a.fn.cycle.transitions[e.manualFx]),
          d || (d = a.fn.cycle.transitions[e.fx]),
          (e._tempFx = null),
          (this.opts()._tempFx = null),
          d ||
            ((d = a.fn.cycle.transitions.fade),
            e.API.log('Transition "' + e.fx + '" not found.  Using fade.')),
          d
        );
      },
      prepareTx: function (a, b) {
        var c,
          d,
          e,
          f,
          g,
          h = this.opts();
        return h.slideCount < 2
          ? void (h.timeoutId = 0)
          : (!a ||
              (h.busy && !h.manualTrump) ||
              (h.API.stopTransition(),
              (h.busy = !1),
              clearTimeout(h.timeoutId),
              (h.timeoutId = 0)),
            void (
              h.busy ||
              ((0 !== h.timeoutId || a) &&
                ((d = h.slides[h.currSlide]),
                (e = h.slides[h.nextSlide]),
                (f = h.API.getSlideOpts(h.nextSlide)),
                (g = h.API.calcTx(f, a)),
                (h._tx = g),
                a && void 0 !== f.manualSpeed && (f.speed = f.manualSpeed),
                h.nextSlide != h.currSlide &&
                (a || (!h.paused && !h.hoverPaused && h.timeout))
                  ? (h.API.trigger("cycle-before", [f, d, e, b]),
                    g.before && g.before(f, d, e, b),
                    (c = function () {
                      (h.busy = !1),
                        h.container.data("cycle.opts") &&
                          (g.after && g.after(f, d, e, b),
                          h.API.trigger("cycle-after", [f, d, e, b]),
                          h.API.queueTransition(f),
                          h.API.updateView(!0));
                    }),
                    (h.busy = !0),
                    g.transition
                      ? g.transition(f, d, e, b, c)
                      : h.API.doTransition(f, d, e, b, c),
                    h.API.calcNextSlide(),
                    h.API.updateView())
                  : h.API.queueTransition(f)))
            ));
      },
      doTransition: function (b, c, d, e, f) {
        var g = b,
          h = a(c),
          i = a(d),
          j = function () {
            i.animate(
              g.animIn || { opacity: 1 },
              g.speed,
              g.easeIn || g.easing,
              f
            );
          };
        i.css(g.cssBefore || {}),
          h.animate(
            g.animOut || {},
            g.speed,
            g.easeOut || g.easing,
            function () {
              h.css(g.cssAfter || {}), g.sync || j();
            }
          ),
          g.sync && j();
      },
      queueTransition: function (b, c) {
        var d = this.opts(),
          e = void 0 !== c ? c : b.timeout;
        return 0 === d.nextSlide && 0 === --d.loop
          ? (d.API.log("terminating; loop=0"),
            (d.timeout = 0),
            e
              ? setTimeout(function () {
                  d.API.trigger("cycle-finished", [d]);
                }, e)
              : d.API.trigger("cycle-finished", [d]),
            void (d.nextSlide = d.currSlide))
          : void 0 !== d.continueAuto &&
            (d.continueAuto === !1 ||
              (a.isFunction(d.continueAuto) && d.continueAuto() === !1))
          ? (d.API.log("terminating automatic transitions"),
            (d.timeout = 0),
            void (d.timeoutId && clearTimeout(d.timeoutId)))
          : void (
              e &&
              ((d._lastQueue = a.now()),
              void 0 === c && (d._remainingTimeout = b.timeout),
              d.paused ||
                d.hoverPaused ||
                (d.timeoutId = setTimeout(function () {
                  d.API.prepareTx(!1, !d.reverse);
                }, e)))
            );
      },
      stopTransition: function () {
        var a = this.opts();
        a.slides.filter(":animated").length &&
          (a.slides.stop(!1, !0),
          a.API.trigger("cycle-transition-stopped", [a])),
          a._tx && a._tx.stopTransition && a._tx.stopTransition(a);
      },
      advanceSlide: function (a) {
        var b = this.opts();
        return (
          clearTimeout(b.timeoutId),
          (b.timeoutId = 0),
          (b.nextSlide = b.currSlide + a),
          b.nextSlide < 0
            ? (b.nextSlide = b.slides.length - 1)
            : b.nextSlide >= b.slides.length && (b.nextSlide = 0),
          b.API.prepareTx(!0, a >= 0),
          !1
        );
      },
      buildSlideOpts: function (c) {
        var d,
          e,
          f = this.opts(),
          g = c.data() || {};
        for (var h in g)
          g.hasOwnProperty(h) &&
            /^cycle[A-Z]+/.test(h) &&
            ((d = g[h]),
            (e = h.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b)),
            f.API.log(
              "[" + (f.slideCount - 1) + "]",
              e + ":",
              d,
              "(" + typeof d + ")"
            ),
            (g[e] = d));
        (g = a.extend({}, a.fn.cycle.defaults, f, g)),
          (g.slideNum = f.slideCount);
        try {
          delete g.API,
            delete g.slideCount,
            delete g.currSlide,
            delete g.nextSlide,
            delete g.slides;
        } catch (i) {}
        return g;
      },
      getSlideOpts: function (b) {
        var c = this.opts();
        void 0 === b && (b = c.currSlide);
        var d = c.slides[b],
          e = a(d).data("cycle.opts");
        return a.extend({}, c, e);
      },
      initSlide: function (b, c, d) {
        var e = this.opts();
        c.css(b.slideCss || {}),
          d > 0 && c.css("zIndex", d),
          isNaN(b.speed) &&
            (b.speed = a.fx.speeds[b.speed] || a.fx.speeds._default),
          b.sync || (b.speed = b.speed / 2),
          c.addClass(e.slideClass);
      },
      updateView: function (a, b) {
        var c = this.opts();
        if (c._initialized) {
          var d = c.API.getSlideOpts(),
            e = c.slides[c.currSlide];
          (!a &&
            b !== !0 &&
            (c.API.trigger("cycle-update-view-before", [c, d, e]),
            c.updateView < 0)) ||
            (c.slideActiveClass &&
              c.slides
                .removeClass(c.slideActiveClass)
                .eq(c.currSlide)
                .addClass(c.slideActiveClass),
            a &&
              c.hideNonActive &&
              c.slides
                .filter(":not(." + c.slideActiveClass + ")")
                .css("visibility", "hidden"),
            0 === c.updateView &&
              setTimeout(function () {
                c.API.trigger("cycle-update-view", [c, d, e, a]);
              }, d.speed / (c.sync ? 2 : 1)),
            0 !== c.updateView &&
              c.API.trigger("cycle-update-view", [c, d, e, a]),
            a && c.API.trigger("cycle-update-view-after", [c, d, e]));
        }
      },
      getComponent: function (b) {
        var c = this.opts(),
          d = c[b];
        return "string" == typeof d
          ? /^\s*[\>|\+|~]/.test(d)
            ? c.container.find(d)
            : a(d)
          : d.jquery
          ? d
          : a(d);
      },
      stackSlides: function (b, c, d) {
        var e = this.opts();
        b ||
          ((b = e.slides[e.currSlide]),
          (c = e.slides[e.nextSlide]),
          (d = !e.reverse)),
          a(b).css("zIndex", e.maxZ);
        var f,
          g = e.maxZ - 2,
          h = e.slideCount;
        if (d) {
          for (f = e.currSlide + 1; h > f; f++)
            a(e.slides[f]).css("zIndex", g--);
          for (f = 0; f < e.currSlide; f++) a(e.slides[f]).css("zIndex", g--);
        } else {
          for (f = e.currSlide - 1; f >= 0; f--)
            a(e.slides[f]).css("zIndex", g--);
          for (f = h - 1; f > e.currSlide; f--)
            a(e.slides[f]).css("zIndex", g--);
        }
        a(c).css("zIndex", e.maxZ - 1);
      },
      getSlideIndex: function (a) {
        return this.opts().slides.index(a);
      },
    }),
    (a.fn.cycle.log = function () {
      window.console &&
        console.log &&
        console.log("[cycle2] " + Array.prototype.join.call(arguments, " "));
    }),
    (a.fn.cycle.version = function () {
      return "Cycle2: " + c;
    }),
    (a.fn.cycle.transitions = {
      custom: {},
      none: {
        before: function (a, b, c, d) {
          a.API.stackSlides(c, b, d),
            (a.cssBefore = {
              opacity: 1,
              visibility: "visible",
              display: "block",
            });
        },
      },
      fade: {
        before: function (b, c, d, e) {
          var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
          b.API.stackSlides(c, d, e),
            (b.cssBefore = a.extend(f, {
              opacity: 0,
              visibility: "visible",
              display: "block",
            })),
            (b.animIn = { opacity: 1 }),
            (b.animOut = { opacity: 0 });
        },
      },
      fadeout: {
        before: function (b, c, d, e) {
          var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
          b.API.stackSlides(c, d, e),
            (b.cssBefore = a.extend(f, {
              opacity: 1,
              visibility: "visible",
              display: "block",
            })),
            (b.animOut = { opacity: 0 });
        },
      },
      scrollHorz: {
        before: function (a, b, c, d) {
          a.API.stackSlides(b, c, d);
          var e = a.container.css("overflow", "hidden").width();
          (a.cssBefore = {
            left: d ? e : -e,
            top: 0,
            opacity: 1,
            visibility: "visible",
            display: "block",
          }),
            (a.cssAfter = { zIndex: a._maxZ - 2, left: 0 }),
            (a.animIn = { left: 0 }),
            (a.animOut = { left: d ? -e : e });
        },
      },
    }),
    (a.fn.cycle.defaults = {
      allowWrap: !0,
      autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
      delay: 0,
      easing: null,
      fx: "fade",
      hideNonActive: !0,
      loop: 0,
      manualFx: void 0,
      manualSpeed: void 0,
      manualTrump: !0,
      maxZ: 100,
      pauseOnHover: !1,
      reverse: !1,
      slideActiveClass: "cycle-slide-active",
      slideClass: "cycle-slide",
      slideCss: { position: "absolute", top: 0, left: 0 },
      slides: "> img",
      speed: 500,
      startingSlide: 0,
      sync: !0,
      timeout: 4e3,
      updateView: 0,
    }),
    a(document).ready(function () {
      a(a.fn.cycle.defaults.autoSelector).cycle();
    });
})(
  jQuery
) /*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */,
  (function (a) {
    "use strict";
    function b(b, d) {
      var e,
        f,
        g,
        h = d.autoHeight;
      if ("container" == h)
        (f = a(d.slides[d.currSlide]).outerHeight()), d.container.height(f);
      else if (d._autoHeightRatio)
        d.container.height(d.container.width() / d._autoHeightRatio);
      else if ("calc" === h || ("number" == a.type(h) && h >= 0)) {
        if (
          ((g = "calc" === h ? c(b, d) : h >= d.slides.length ? 0 : h),
          g == d._sentinelIndex)
        )
          return;
        (d._sentinelIndex = g),
          d._sentinel && d._sentinel.remove(),
          (e = a(d.slides[g].cloneNode(!0))),
          e
            .removeAttr("id name rel")
            .find("[id],[name],[rel]")
            .removeAttr("id name rel"),
          e
            .css({ position: "static", visibility: "hidden", display: "block" })
            .prependTo(d.container)
            .addClass("cycle-sentinel cycle-slide")
            .removeClass("cycle-slide-active"),
          e.find("*").css("visibility", "hidden"),
          (d._sentinel = e);
      }
    }
    function c(b, c) {
      var d = 0,
        e = -1;
      return (
        c.slides.each(function (b) {
          var c = a(this).height();
          c > e && ((e = c), (d = b));
        }),
        d
      );
    }
    function d(b, c, d, e) {
      var f = a(e).outerHeight();
      c.container.animate({ height: f }, c.autoHeightSpeed, c.autoHeightEasing);
    }
    function e(c, f) {
      f._autoHeightOnResize &&
        (a(window).off("resize orientationchange", f._autoHeightOnResize),
        (f._autoHeightOnResize = null)),
        f.container.off("cycle-slide-added cycle-slide-removed", b),
        f.container.off("cycle-destroyed", e),
        f.container.off("cycle-before", d),
        f._sentinel && (f._sentinel.remove(), (f._sentinel = null));
    }
    a.extend(a.fn.cycle.defaults, {
      autoHeight: 0,
      autoHeightSpeed: 250,
      autoHeightEasing: null,
    }),
      a(document).on("cycle-initialized", function (c, f) {
        function g() {
          b(c, f);
        }
        var h,
          i = f.autoHeight,
          j = a.type(i),
          k = null;
        ("string" === j || "number" === j) &&
          (f.container.on("cycle-slide-added cycle-slide-removed", b),
          f.container.on("cycle-destroyed", e),
          "container" == i
            ? f.container.on("cycle-before", d)
            : "string" === j &&
              /\d+\:\d+/.test(i) &&
              ((h = i.match(/(\d+)\:(\d+)/)),
              (h = h[1] / h[2]),
              (f._autoHeightRatio = h)),
          "number" !== j &&
            ((f._autoHeightOnResize = function () {
              clearTimeout(k), (k = setTimeout(g, 50));
            }),
            a(window).on("resize orientationchange", f._autoHeightOnResize)),
          setTimeout(g, 30));
      });
  })(jQuery) /*! caption plugin for Cycle2;  version: 20130306 */,
  (function (a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
      caption: "> .cycle-caption",
      captionTemplate: "{{slideNum}} / {{slideCount}}",
      overlay: "> .cycle-overlay",
      overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
      captionModule: "caption",
    }),
      a(document).on("cycle-update-view", function (b, c, d, e) {
        if ("caption" === c.captionModule) {
          a.each(["caption", "overlay"], function () {
            var a = this,
              b = d[a + "Template"],
              f = c.API.getComponent(a);
            f.length && b
              ? (f.html(c.API.tmpl(b, d, c, e)), f.show())
              : f.hide();
          });
        }
      }),
      a(document).on("cycle-destroyed", function (b, c) {
        var d;
        a.each(["caption", "overlay"], function () {
          var a = this,
            b = c[a + "Template"];
          c[a] && b && ((d = c.API.getComponent("caption")), d.empty());
        });
      });
  })(jQuery) /*! command plugin for Cycle2;  version: 20140415 */,
  (function (a) {
    "use strict";
    var b = a.fn.cycle;
    (a.fn.cycle = function (c) {
      var d,
        e,
        f,
        g = a.makeArray(arguments);
      return "number" == a.type(c)
        ? this.cycle("goto", c)
        : "string" == a.type(c)
        ? this.each(function () {
            var h;
            return (
              (d = c),
              (f = a(this).data("cycle.opts")),
              void 0 === f
                ? void b.log(
                    'slideshow must be initialized before sending commands; "' +
                      d +
                      '" ignored'
                  )
                : ((d = "goto" == d ? "jump" : d),
                  (e = f.API[d]),
                  a.isFunction(e)
                    ? ((h = a.makeArray(g)), h.shift(), e.apply(f.API, h))
                    : void b.log("unknown command: ", d))
            );
          })
        : b.apply(this, arguments);
    }),
      a.extend(a.fn.cycle, b),
      a.extend(b.API, {
        next: function () {
          var a = this.opts();
          if (!a.busy || a.manualTrump) {
            var b = a.reverse ? -1 : 1;
            (a.allowWrap === !1 && a.currSlide + b >= a.slideCount) ||
              (a.API.advanceSlide(b),
              a.API.trigger("cycle-next", [a]).log("cycle-next"));
          }
        },
        prev: function () {
          var a = this.opts();
          if (!a.busy || a.manualTrump) {
            var b = a.reverse ? 1 : -1;
            (a.allowWrap === !1 && a.currSlide + b < 0) ||
              (a.API.advanceSlide(b),
              a.API.trigger("cycle-prev", [a]).log("cycle-prev"));
          }
        },
        destroy: function () {
          this.stop();
          var b = this.opts(),
            c = a.isFunction(a._data) ? a._data : a.noop;
          clearTimeout(b.timeoutId),
            (b.timeoutId = 0),
            b.API.stop(),
            b.API.trigger("cycle-destroyed", [b]).log("cycle-destroyed"),
            b.container.removeData(),
            c(b.container[0], "parsedAttrs", !1),
            b.retainStylesOnDestroy ||
              (b.container.removeAttr("style"),
              b.slides.removeAttr("style"),
              b.slides.removeClass(b.slideActiveClass)),
            b.slides.each(function () {
              var d = a(this);
              d.removeData(),
                d.removeClass(b.slideClass),
                c(this, "parsedAttrs", !1);
            });
        },
        jump: function (a, b) {
          var c,
            d = this.opts();
          if (!d.busy || d.manualTrump) {
            var e = parseInt(a, 10);
            if (isNaN(e) || 0 > e || e >= d.slides.length)
              return void d.API.log("goto: invalid slide index: " + e);
            if (e == d.currSlide)
              return void d.API.log("goto: skipping, already on slide", e);
            (d.nextSlide = e),
              clearTimeout(d.timeoutId),
              (d.timeoutId = 0),
              d.API.log("goto: ", e, " (zero-index)"),
              (c = d.currSlide < d.nextSlide),
              (d._tempFx = b),
              d.API.prepareTx(!0, c);
          }
        },
        stop: function () {
          var b = this.opts(),
            c = b.container;
          clearTimeout(b.timeoutId),
            (b.timeoutId = 0),
            b.API.stopTransition(),
            b.pauseOnHover &&
              (b.pauseOnHover !== !0 && (c = a(b.pauseOnHover)),
              c.off("mouseenter mouseleave")),
            b.API.trigger("cycle-stopped", [b]).log("cycle-stopped");
        },
        reinit: function () {
          var a = this.opts();
          a.API.destroy(), a.container.cycle();
        },
        remove: function (b) {
          for (
            var c, d, e = this.opts(), f = [], g = 1, h = 0;
            h < e.slides.length;
            h++
          )
            (c = e.slides[h]),
              h == b
                ? (d = c)
                : (f.push(c), (a(c).data("cycle.opts").slideNum = g), g++);
          d &&
            ((e.slides = a(f)),
            e.slideCount--,
            a(d).remove(),
            b == e.currSlide
              ? e.API.advanceSlide(1)
              : b < e.currSlide
              ? e.currSlide--
              : e.currSlide++,
            e.API.trigger("cycle-slide-removed", [e, b, d]).log(
              "cycle-slide-removed"
            ),
            e.API.updateView());
        },
      }),
      a(document).on("click.cycle", "[data-cycle-cmd]", function (b) {
        b.preventDefault();
        var c = a(this),
          d = c.data("cycle-cmd"),
          e = c.data("cycle-context") || ".cycle-slideshow";
        a(e).cycle(d, c.data("cycle-arg"));
      });
  })(jQuery) /*! hash plugin for Cycle2;  version: 20130905 */,
  (function (a) {
    "use strict";
    function b(b, c) {
      var d;
      return b._hashFence
        ? void (b._hashFence = !1)
        : ((d = window.location.hash.substring(1)),
          void b.slides.each(function (e) {
            if (a(this).data("cycle-hash") == d) {
              if (c === !0) b.startingSlide = e;
              else {
                var f = b.currSlide < e;
                (b.nextSlide = e), b.API.prepareTx(!0, f);
              }
              return !1;
            }
          }));
    }
    a(document).on("cycle-pre-initialize", function (c, d) {
      b(d, !0),
        (d._onHashChange = function () {
          b(d, !1);
        }),
        a(window).on("hashchange", d._onHashChange);
    }),
      a(document).on("cycle-update-view", function (a, b, c) {
        c.hash &&
          "#" + c.hash != window.location.hash &&
          ((b._hashFence = !0), (window.location.hash = c.hash));
      }),
      a(document).on("cycle-destroyed", function (b, c) {
        c._onHashChange && a(window).off("hashchange", c._onHashChange);
      });
  })(jQuery) /*! loader plugin for Cycle2;  version: 20131121 */,
  (function (a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, { loader: !1 }),
      a(document).on("cycle-bootstrap", function (b, c) {
        function d(b, d) {
          function f(b) {
            var f;
            "wait" == c.loader
              ? (h.push(b),
                0 === j &&
                  (h.sort(g),
                  e.apply(c.API, [h, d]),
                  c.container.removeClass("cycle-loading")))
              : ((f = a(c.slides[c.currSlide])),
                e.apply(c.API, [b, d]),
                f.show(),
                c.container.removeClass("cycle-loading"));
          }
          function g(a, b) {
            return a.data("index") - b.data("index");
          }
          var h = [];
          if ("string" == a.type(b)) b = a.trim(b);
          else if ("array" === a.type(b))
            for (var i = 0; i < b.length; i++) b[i] = a(b[i])[0];
          b = a(b);
          var j = b.length;
          j &&
            (b
              .css("visibility", "hidden")
              .appendTo("body")
              .each(function (b) {
                function g() {
                  0 === --i && (--j, f(k));
                }
                var i = 0,
                  k = a(this),
                  l = k.is("img") ? k : k.find("img");
                return (
                  k.data("index", b),
                  (l = l
                    .filter(":not(.cycle-loader-ignore)")
                    .filter(':not([src=""])')),
                  l.length
                    ? ((i = l.length),
                      void l.each(function () {
                        this.complete
                          ? g()
                          : a(this)
                              .load(function () {
                                g();
                              })
                              .on("error", function () {
                                0 === --i &&
                                  (c.API.log(
                                    "slide skipped; img not loaded:",
                                    this.src
                                  ),
                                  0 === --j &&
                                    "wait" == c.loader &&
                                    e.apply(c.API, [h, d]));
                              });
                      }))
                    : (--j, void h.push(k))
                );
              }),
            j && c.container.addClass("cycle-loading"));
        }
        var e;
        c.loader && ((e = c.API.add), (c.API.add = d));
      });
  })(jQuery) /*! pager plugin for Cycle2;  version: 20140415 */,
  (function (a) {
    "use strict";
    function b(b, c, d) {
      var e,
        f = b.API.getComponent("pager");
      f.each(function () {
        var f = a(this);
        if (c.pagerTemplate) {
          var g = b.API.tmpl(c.pagerTemplate, c, b, d[0]);
          e = a(g).appendTo(f);
        } else e = f.children().eq(b.slideCount - 1);
        e.on(b.pagerEvent, function (a) {
          b.pagerEventBubble || a.preventDefault(),
            b.API.page(f, a.currentTarget);
        });
      });
    }
    function c(a, b) {
      var c = this.opts();
      if (!c.busy || c.manualTrump) {
        var d = a.children().index(b),
          e = d,
          f = c.currSlide < e;
        c.currSlide != e &&
          ((c.nextSlide = e),
          (c._tempFx = c.pagerFx),
          c.API.prepareTx(!0, f),
          c.API.trigger("cycle-pager-activated", [c, a, b]));
      }
    }
    a.extend(a.fn.cycle.defaults, {
      pager: "> .cycle-pager",
      pagerActiveClass: "cycle-pager-active",
      pagerEvent: "click.cycle",
      pagerEventBubble: void 0,
      pagerTemplate: "<span>&bull;</span>",
    }),
      a(document).on("cycle-bootstrap", function (a, c, d) {
        d.buildPagerLink = b;
      }),
      a(document).on("cycle-slide-added", function (a, b, d, e) {
        b.pager && (b.API.buildPagerLink(b, d, e), (b.API.page = c));
      }),
      a(document).on("cycle-slide-removed", function (b, c, d) {
        if (c.pager) {
          var e = c.API.getComponent("pager");
          e.each(function () {
            var b = a(this);
            a(b.children()[d]).remove();
          });
        }
      }),
      a(document).on("cycle-update-view", function (b, c) {
        var d;
        c.pager &&
          ((d = c.API.getComponent("pager")),
          d.each(function () {
            a(this)
              .children()
              .removeClass(c.pagerActiveClass)
              .eq(c.currSlide)
              .addClass(c.pagerActiveClass);
          }));
      }),
      a(document).on("cycle-destroyed", function (a, b) {
        var c = b.API.getComponent("pager");
        c && (c.children().off(b.pagerEvent), b.pagerTemplate && c.empty());
      });
  })(jQuery) /*! prevnext plugin for Cycle2;  version: 20140408 */,
  (function (a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
      next: "> .cycle-next",
      nextEvent: "click.cycle",
      disabledClass: "disabled",
      prev: "> .cycle-prev",
      prevEvent: "click.cycle",
      swipe: !1,
    }),
      a(document).on("cycle-initialized", function (a, b) {
        if (
          (b.API.getComponent("next").on(b.nextEvent, function (a) {
            a.preventDefault(), b.API.next();
          }),
          b.API.getComponent("prev").on(b.prevEvent, function (a) {
            a.preventDefault(), b.API.prev();
          }),
          b.swipe)
        ) {
          var c = b.swipeVert
              ? "swipeUp.cycle"
              : "swipeLeft.cycle swipeleft.cycle",
            d = b.swipeVert
              ? "swipeDown.cycle"
              : "swipeRight.cycle swiperight.cycle";
          b.container.on(c, function () {
            (b._tempFx = b.swipeFx), b.API.next();
          }),
            b.container.on(d, function () {
              (b._tempFx = b.swipeFx), b.API.prev();
            });
        }
      }),
      a(document).on("cycle-update-view", function (a, b) {
        if (!b.allowWrap) {
          var c = b.disabledClass,
            d = b.API.getComponent("next"),
            e = b.API.getComponent("prev"),
            f = b._prevBoundry || 0,
            g = void 0 !== b._nextBoundry ? b._nextBoundry : b.slideCount - 1;
          b.currSlide == g
            ? d.addClass(c).prop("disabled", !0)
            : d.removeClass(c).prop("disabled", !1),
            b.currSlide === f
              ? e.addClass(c).prop("disabled", !0)
              : e.removeClass(c).prop("disabled", !1);
        }
      }),
      a(document).on("cycle-destroyed", function (a, b) {
        b.API.getComponent("prev").off(b.nextEvent),
          b.API.getComponent("next").off(b.prevEvent),
          b.container.off(
            "swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle"
          );
      });
  })(jQuery) /*! progressive loader plugin for Cycle2;  version: 20130315 */,
  (function (a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, { progressive: !1 }),
      a(document).on("cycle-pre-initialize", function (b, c) {
        if (c.progressive) {
          var d,
            e,
            f = c.API,
            g = f.next,
            h = f.prev,
            i = f.prepareTx,
            j = a.type(c.progressive);
          if ("array" == j) d = c.progressive;
          else if (a.isFunction(c.progressive)) d = c.progressive(c);
          else if ("string" == j) {
            if (((e = a(c.progressive)), (d = a.trim(e.html())), !d)) return;
            if (/^(\[)/.test(d))
              try {
                d = a.parseJSON(d);
              } catch (k) {
                return void f.log("error parsing progressive slides", k);
              }
            else
              (d = d.split(new RegExp(e.data("cycle-split") || "\n"))),
                d[d.length - 1] || d.pop();
          }
          i &&
            (f.prepareTx = function (a, b) {
              var e, f;
              return a || 0 === d.length
                ? void i.apply(c.API, [a, b])
                : void (b && c.currSlide == c.slideCount - 1
                    ? ((f = d[0]),
                      (d = d.slice(1)),
                      c.container.one("cycle-slide-added", function (a, b) {
                        setTimeout(function () {
                          b.API.advanceSlide(1);
                        }, 50);
                      }),
                      c.API.add(f))
                    : b || 0 !== c.currSlide
                    ? i.apply(c.API, [a, b])
                    : ((e = d.length - 1),
                      (f = d[e]),
                      (d = d.slice(0, e)),
                      c.container.one("cycle-slide-added", function (a, b) {
                        setTimeout(function () {
                          (b.currSlide = 1), b.API.advanceSlide(-1);
                        }, 50);
                      }),
                      c.API.add(f, !0)));
            }),
            g &&
              (f.next = function () {
                var a = this.opts();
                if (d.length && a.currSlide == a.slideCount - 1) {
                  var b = d[0];
                  (d = d.slice(1)),
                    a.container.one("cycle-slide-added", function (a, b) {
                      g.apply(b.API), b.container.removeClass("cycle-loading");
                    }),
                    a.container.addClass("cycle-loading"),
                    a.API.add(b);
                } else g.apply(a.API);
              }),
            h &&
              (f.prev = function () {
                var a = this.opts();
                if (d.length && 0 === a.currSlide) {
                  var b = d.length - 1,
                    c = d[b];
                  (d = d.slice(0, b)),
                    a.container.one("cycle-slide-added", function (a, b) {
                      (b.currSlide = 1),
                        b.API.advanceSlide(-1),
                        b.container.removeClass("cycle-loading");
                    }),
                    a.container.addClass("cycle-loading"),
                    a.API.add(c, !0);
                } else h.apply(a.API);
              });
        }
      });
  })(jQuery) /*! tmpl plugin for Cycle2;  version: 20121227 */,
  (function (a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, { tmplRegex: "{{((.)?.*?)}}" }),
      a.extend(a.fn.cycle.API, {
        tmpl: function (b, c) {
          var d = new RegExp(c.tmplRegex || a.fn.cycle.defaults.tmplRegex, "g"),
            e = a.makeArray(arguments);
          return (
            e.shift(),
            b.replace(d, function (b, c) {
              var d,
                f,
                g,
                h,
                i = c.split(".");
              for (d = 0; d < e.length; d++)
                if ((g = e[d])) {
                  if (i.length > 1)
                    for (h = g, f = 0; f < i.length; f++)
                      (g = h), (h = h[i[f]] || c);
                  else h = g[c];
                  if (a.isFunction(h)) return h.apply(g, e);
                  if (void 0 !== h && null !== h && h != c) return h;
                }
              return c;
            })
          );
        },
      });
  })(jQuery);

/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20141007 */
!(function (a) {
  "use strict";
  (a.event.special.swipe = a.event.special.swipe || {
    scrollSupressionThreshold: 10,
    durationThreshold: 1e3,
    horizontalDistanceThreshold: 30,
    verticalDistanceThreshold: 75,
    setup: function () {
      var b = a(this);
      b.bind("touchstart", function (c) {
        function d(b) {
          if (g) {
            var c = b.originalEvent.touches ? b.originalEvent.touches[0] : b;
            (e = { time: new Date().getTime(), coords: [c.pageX, c.pageY] }),
              Math.abs(g.coords[0] - e.coords[0]) >
                a.event.special.swipe.scrollSupressionThreshold &&
                b.preventDefault();
          }
        }
        var e,
          f = c.originalEvent.touches ? c.originalEvent.touches[0] : c,
          g = {
            time: new Date().getTime(),
            coords: [f.pageX, f.pageY],
            origin: a(c.target),
          };
        b.bind("touchmove", d).one("touchend", function () {
          b.unbind("touchmove", d),
            g &&
              e &&
              e.time - g.time < a.event.special.swipe.durationThreshold &&
              Math.abs(g.coords[0] - e.coords[0]) >
                a.event.special.swipe.horizontalDistanceThreshold &&
              Math.abs(g.coords[1] - e.coords[1]) <
                a.event.special.swipe.verticalDistanceThreshold &&
              g.origin
                .trigger("swipe")
                .trigger(
                  g.coords[0] > e.coords[0] ? "swipeleft" : "swiperight"
                ),
            (g = e = void 0);
        });
      });
    },
  }),
    (a.event.special.swipeleft = a.event.special.swipeleft || {
      setup: function () {
        a(this).bind("swipe", a.noop);
      },
    }),
    (a.event.special.swiperight =
      a.event.special.swiperight || a.event.special.swipeleft);
})(jQuery);

// General variables and functions
var util = {};

util.browserInfo = {
  width: $(window).width(),
  height: $(window).height(),
};
util.browserInfo.onResize = function () {
  this.width = $(window).width();
  this.height = $(window).height();
};

/* Breakpoint Utilities
  ===================================== */
util.breakpoint = {};
util.breakpoint.active = false;
// List of breakpoints
util.breakpoint.list = [
  { name: "mobile", start: 0, end: 769 },
  { name: "tablet", start: 768, end: 1025 },
  { name: "laptop", start: 1024, end: 1200 },
  { name: "desktop", start: 1199, end: 1000000 },
];
// Get breakpoint, return and store it in util.breakpoint
util.breakpoint.get = function () {
  var width = $(window).width();
  for (var i = 0, x = util.breakpoint.list.length; i < x; i++) {
    if (
      width > util.breakpoint.list[i].start &&
      width < util.breakpoint.list[i].end
    ) {
      util.breakpoint.active = util.breakpoint.list[i].name;
      return util.breakpoint.list[i].name;
    }
  }
  console.error("No Breakpoint Found at " + width + "px.");
  return false;
};
util.breakpoint.get();

/* Full Height Utilities
  ===================================== */
util.fullHeight = {};
util.fullHeight.get = function () {
  var height = $(window).height(),
    header = $(".persistent-header"),
    nav = $(".persistent-navigation"),
    headerHeight = header.height(),
    navHeight = nav.height();
  util.fullHeight.totalHeight = height;
  util.fullHeight.active = height - (headerHeight + navHeight);
  util.fullHeight.heights = {
    large: height - headerHeight,
    small: height - (headerHeight + navHeight),
  };
  return height - headerHeight;
};
util.fullHeight.addCss = function () {
  var heights = util.fullHeight.heights;
  style = $("<style></style>");

  style.appendTo($("head"));
  style.append(
    ".banner-height{" +
      "height:" +
      heights.large +
      "px;} .full-height{" +
      "height:" +
      heights.small +
      "px;}"
  );
  util.fullHeight.styleElement = style;
  return true;
};
util.fullHeight.updateCss = function () {
  var fH = util.fullHeight,
    heights = fH.heights,
    style = fH.styleElement;
  style.html(
    ".banner-height{" +
      "height:" +
      heights.large +
      "px;} .full-height{" +
      "height:" +
      heights.small +
      "px;}"
  );
  return true;
};
util.fullHeight.init = function () {
  var fH = util.fullHeight;
  fH.get();
  fH.addCss();
};

util.fullHeight.init();

function utilResize() {
  util.fullHeight.get();
  util.fullHeight.updateCss();
  util.browserInfo.onResize();
  util.breakpoint.get();
}

function ScrollTracking(element) {
  this.element = element;
  this.position = element.offset().top;
  this.offset = element.data("offset") || util.fullHeight.totalHeight / 8;
  this.triggerPos = element.data("trigger-position") || "top";
  if (this.offset == "half") {
    this.offset = element.height() / 2;
  }
  this.fromTop = element.data("from-top") || false;
  this.setPosition = element.data("position") || false;
  this.eventHappened = false;
  this.makingChange = false;
  this.changeTimer = null;
  if (this.setPosition != false) {
    this.position =
      $(this.setPosition).offset().top + $(this.setPosition).height();
  } else {
    this.position = this.position + this.offset;
  }
}
ScrollTracking.prototype = {
  onScroll: function (scrollPos) {
    // Reference back to parent
    var parent = this,
      stopPoint;
    if (parent.fromTop == true) {
      stopPoint = scrollPos;
    } else {
      stopPoint = scrollPos + util.fullHeight.totalHeight;
    }
    if (
      !parent.eventHappened &&
      parent.position < stopPoint &&
      parent.makingChange == false
    ) {
      parent.makingChange = true;
      parent.eventHappened = true;
      parent.element.addClass("active");
      parent.changeTimer = setTimeout(function () {
        parent.makingChange = false;
        clearTimeout(parent.changeTimer);
      }, 1000);
    } else if (
      parent.eventHappened &&
      parent.position > stopPoint &&
      parent.makingChange == false
    ) {
      parent.makingChange = true;
      parent.eventHappened = false;
      parent.element.removeClass("active");
      parent.changeTimer = setTimeout(function () {
        parent.makingChange = false;
        clearTimeout(parent.changeTimer);
      }, 1000);
    }
  },
  onResize: function () {
    // Reference back to parent
    var parent = this;
    parent.position = parent.element.offset().top - parent.offset;
  },
};

function ParallaxElement(element) {
  var parent = this;
  this.element = element;
  this.positionSet = false;
  this.heightSet = false;
  this.eventInProgress = false;
  this.offset = 50;
  this.effect = element.data("effect") || "translate-vertical";
  this.direction = element.data("direction") || "up";
  this.speed = element.data("speed") || 0.08;
  this.modifier = element.data("modifier") || 4;
  this.onResize();
}
ParallaxElement.prototype = {
  effectFadeIn: function (scrollPos) {
    var parent = this,
      oldvalue =
        ((parent.height / (scrollPos - parent.position - parent.height)) *
          100) /
        100,
      value =
        (((scrollPos - (parent.position - parent.height / parent.modifier)) /
          parent.height) *
          100) /
        100;
    if (parent.positionSet == false) {
      parent.onResize();
    }
    if (parent.position < scrollPos + util.fullHeight.active) {
      parent.element.css({
        opacity: value,
      });
    }
  },
  effectTranslateVert: function (scrollPos) {
    var parent = this,
      value =
        (parent.position - (scrollPos + util.fullHeight.active)) * parent.speed;
    if (parent.positionSet == false) {
      parent.onResize();
    }
    if (parent.position < scrollPos + util.fullHeight.active) {
      parent.element.css({
        transform: "translate(0," + value + "px)",
      });
    }
  },
  effectTranslateHor: function (scrollPos) {
    var parent = this,
      value =
        (((parent.position - (scrollPos + util.fullHeight.active)) *
          parent.speed) /
          100) *
        util.browserInfo.width;
    if (parent.positionSet == false) {
      parent.onResize();
    }
    if (parent.position < scrollPos + util.fullHeight.active) {
      parent.element.css({
        transform: "translate(" + value + "%,0)",
      });
    }
  },
};
ParallaxElement.prototype.onScroll = function (scrollPos) {
  // Reference back to parent
  var parent = this;
  if (this.isActive === true) {
    if (parent.positionSet == false) {
      parent.onResize();
    }
    if (parent.position < scrollPos + util.fullHeight.active) {
      if (parent.effect == "translate-vertical") {
        parent.effectTranslateVert(scrollPos);
      } else if (parent.effect == "translate-horizontal") {
        parent.effectTranslateHor(scrollPos);
      } else if (parent.effect == "fade-in") {
        parent.effectFadeIn(scrollPos);
      }
    }
  } else {
    parent.element.css({
      transform: "translate(0,0px)",
    });
  }
};
ParallaxElement.prototype.onResize = function () {
  this.positionSet = true;
  this.position = this.element.offset().top - this.offset;
  this.height = this.element.height();
  this.isActive =
    util.breakpoint.active == "mobile" || util.breakpoint.active == "tablet"
      ? false
      : true;
};

function DeletePastScroll(element) {
  this.element = element;
  this.source = element.attr("src");
  this.height = element.height();
  this.position = element.offset().top;
  this.position += this.height + 300;
  this.deleted = false;
}
DeletePastScroll.prototype = {
  onScroll: function (scrollPos) {
    if (scrollPos > this.position && this.deleted == false) {
      this.deleteNode();
    } else if (scrollPos < this.position && this.deleted == true) {
      this.restoreNode();
    }
  },
  onResize: function () {},
  deleteNode: function () {
    this.deleted = true;
    this.element.attr("src", "");
  },
  restoreNode: function () {
    this.deleted = false;
    this.element.attr("src", this.source);
  },
};

function ClickScroll(element) {
  var parent = this;
  parent.element = element;
  parent.target = element.data("target") || "full height";
  parent.offset = element.data("offset") || 0;
  element.on("click", function () {
    parent.onClick(parent.target, parent.offset);
  });
}
ClickScroll.prototype = {
  onClick: function (target, offset) {
    var goTo =
      target === "full height"
        ? util.fullHeight.active + $(window).scrollTop() - offset
        : $(target).offset().top - offset;
    $("html,body").animate(
      {
        scrollTop: goTo,
      },
      600
    );
  },
};

function AppendElement(element) {
  var parent = this;
  parent.element = element;
  parent.appendPoint =
    util.fullHeight.active + parent.element.height() ||
    parent.element.offset().top;
}
AppendElement.prototype = {
  init: function () {
    var parent = this;
    parent.appended = false;
    parent.element.on("append", function () {
      parent.appended = true;
      parent.element.addClass("append");
    });
    parent.element.on("unappend", function () {
      parent.appended = false;
      parent.element.removeClass("append");
    });
  },
  onScroll: function (scroll) {
    var parent = this;
    if (scroll > parent.appendPoint && parent.appended == false) {
      parent.element.trigger("append");
    } else if (scroll < parent.appendPoint && parent.appended == true) {
      parent.element.trigger("unappend");
    }
  },
};

// elements prefixed with "f_" means a vimeo thing
function ScrollPlay(element) {
  this.element = element;
  this.source = this.element.attr("src");
  this.f_Element = $f(element[0]);
  this.offset = 200;
  this.initialize();
  this.onResize();
}
ScrollPlay.prototype = {
  offset: 200,
  isActive: false,
  isPlaying: false,
  onScroll: function (scrollPos) {
    var parent = this;
    var inZone = scrollPos > parent.start && scrollPos < parent.end;
    if (parent.isActive === true) {
      if (inZone === true && parent.isPlaying === false) {
        parent.isPlaying = true;
        this.element.trigger("f_Play");
      } else if (inZone === false && parent.isPlaying === true) {
        parent.isPlaying = false;
        this.element.trigger("f_Stop");
      }
    }
  },
  onResize: function () {
    this.isActive =
      util.breakpoint.active == "mobile" || util.breakpoint.active == "tablet"
        ? false
        : true;
    this.position = this.element.offset().top;
    this.height = this.element.height();
    this.start = this.position - util.fullHeight.totalHeight - this.offset;
    this.end = this.position + this.height + this.offset;
  },
  initialize: function () {
    var parent = this;
    if (!Modernizr.touchevents) {
      parent.element.on("f_Play", function () {
        parent.f_Element.api("play");
        parent.f_Element.api("setVolume", 0);
      });
      parent.element.on("f_Stop", function () {
        parent.f_Element.api("pause");
        parent.f_Element.api("setVolume", 0);
      });
    }
  },
};

var scrollElements = [],
  parallaxElements = [],
  deleteElements = [],
  clickScrollElements = [],
  vimeoElements = [],
  appendElements = [];

function scrollElementsInitalize() {
  $(".animation-in-view").each(function () {
    scrollElements.push(new ScrollTracking($(this)));
  });
  $(".parallax-in-view").each(function () {
    parallaxElements.push(new ParallaxElement($(this)));
  });
  $(".js-delete-out-view").each(function () {
    deleteElements.push(new DeletePastScroll($(this)));
  });
  $(".js-click-scroll").each(function () {
    clickScrollElements.push(new ClickScroll($(this)));
  });
  $(".js-vimeo-autoplay").each(function () {
    vimeoElements.push(new ScrollPlay($(this)));
  });
  $(".js-append-element").each(function () {
    var element = new AppendElement($(this));
    element.init();
    appendElements.push(element);
  });
}
function scrollElementsOnScroll(scrollPos) {
  for (var i = 0, x = scrollElements.length; i < x; i++) {
    scrollElements[i].onScroll(scrollPos);
  }
  for (var i = 0, x = parallaxElements.length; i < x; i++) {
    parallaxElements[i].onScroll(scrollPos);
  }
  for (var i = 0, x = deleteElements.length; i < x; i++) {
    deleteElements[i].onScroll(scrollPos);
  }
  for (var i = 0, x = vimeoElements.length; i < x; i++) {
    vimeoElements[i].onScroll(scrollPos);
  }
  for (var i = 0, x = appendElements.length; i < x; i++) {
    appendElements[i].onScroll(scrollPos);
  }
}
function scrollElementsOnResize() {
  for (var i = 0, x = scrollElements.length; i < x; i++) {
    scrollElements[i].onResize();
  }
  for (var i = 0, x = parallaxElements.length; i < x; i++) {
    parallaxElements[i].onResize();
  }
}
// Test for WebGL first, then make sure it's not tablet or lower

function webgl_loader() {
  var $WebGLDiv = $(".page-hero").children().first();

  if (util.breakpoint.get() === "mobile") {
    // Put the mobile img in
    $WebGLDiv.replaceWith(
      '<div class="cocainenomics-hero-img"><img src="https://s3.amazonaws.com/wsjcsbucket/hubs/netflix_78528/31416/assets/cocainenomics-hero-mobile.png"/><div>'
    );
  } else if (util.breakpoint.get() === "tablet" || !Modernizr.webgl) {
    // Put the tablet img in if tablet or no WebGL
    $WebGLDiv.replaceWith(
      '<div class="cocainenomics-hero-img"><img src="https://s3.amazonaws.com/wsjcsbucket/hubs/netflix_78528/31416/assets/cocainenomics-hero-tablet.png"/><div>'
    );
  }
}
webgl_loader();
function pageLoad() {
  var pageElements = [], // Empty array for pages
    counter = 0; // When this counter = 800, the page will be ready

  /* This timer will either fill pageElements with all direct children of the body or check all 
      the heights of all elements in pageElements, incase if it changed. If an element's height has changed,
      then the counter is reset and we continue the loop. If height hasn't changed within 800MS, then the 
      timer is cleared and we run onPageReady in _operations.js */
  var elementTimer = setInterval(function () {
    if (counter < 1000) {
      checkElements();
    } else {
      onPageReady();
      clearInterval(elementTimer);
      clearInterval(counterTimer);
    }
  }, 400);
  // Add 100 to counter for every 100MS that elapses
  var counterTimer = setInterval(function () {
    counter += 100;
  }, 100);

  function checkElements() {
    if (pageElements.length < 1) {
      getElements();
    } else {
      checkElements();
    }
  }

  function getElements() {
    $("body")
      .find("> *")
      .each(function () {
        pageElements.push({ element: $(this), height: $(this).height() });
      });
  }
  function checkElements() {
    for (var i = 0, x = pageElements.length; i < x; i++) {
      var obj = pageElements[i];
      if (obj.element.height() != obj.height) {
        obj.height = obj.element.height();
        resetTimer();
      }
    }
    $("body")
      .find("> *")
      .each(function () {
        pageElements.push({ element: $(this), height: $(this).height() });
      });
  }
  function resetTimer() {
    counter = 0;
  }
}
function Menu(element) {
  this.element = element;
  this.classTarget = $("html");
}
Menu.prototype = {
  isOpen: false,
  classTarget: $("html"),
  delayAmount: 300,
};
Menu.prototype.init = function () {
  var parent = this;
  parent.element.on("change", function () {
    if (parent.isOpen === false) {
      parent.openMenu();
    } else {
      parent.closeMenu();
    }
  });
};
Menu.prototype.openMenu = function () {
  var parent = this;
  parent.isOpen = true;
  parent.classTarget.addClass("menu-opening");
  setTimeout(function () {
    parent.classTarget.addClass("menu-open");
  }, 10);
};
Menu.prototype.closeMenu = function () {
  var parent = this;
  parent.isOpen = false;
  parent.classTarget.removeClass("menu-open");
  setTimeout(function () {
    parent.classTarget.removeClass("menu-opening");
  }, parent.delayAmount);
};

var navigation = new Menu($(".article-navigation"));
navigation.init();

$(".js-menu-change").click(function () {
  navigation.element.trigger("change");
});

$(".whats-this").hover(
  function () {
    $(".whats-this-tooltip").show();
    setTimeout(function () {
      $(".whats-this-tooltip").css({
        opacity: 1,
        transform: "translateY(0)",
      });
    }, 1);
  },
  function () {
    $(".whats-this-tooltip").css({
      opacity: 0,
      transform: "translateY(0)",
    });
    setTimeout(function () {
      $(".whats-this-tooltip").hide();
    }, 200);
  }
);

$(".whats-this-close").click(function () {
  console.log("click");
  $(".whats-this-tooltip").css({
    opacity: 0,
    transform: "translateY(0)",
  });
  setTimeout(function () {
    $(".whats-this-tooltip").hide();
  }, 200);
});
function ProgressBar(element) {
  var parent = this;
  this.element = element;
  this.meter = element.find(".meter");
  this.active = false;
}
ProgressBar.prototype = {
  init: function (scroll) {
    this.getMarkers(this.element);
    this.onResize(scroll);
  },
  onScroll: function (scrollPos) {
    var ProgressBar = this;
    if (scrollPos < ProgressBar.startPos) {
      if (ProgressBar.active === true) {
        ProgressBar.active = false;
        ProgressBar.element.removeClass("active");
      }
      ProgressBar.updateProgress(0);
    } else if (scrollPos > ProgressBar.endPos) {
      if (ProgressBar.active === true) {
        ProgressBar.active = false;
        ProgressBar.element.removeClass("active");
      }
      ProgressBar.updateProgress(1);
    } else {
      if (ProgressBar.active === false) {
        ProgressBar.active = true;
        ProgressBar.element.addClass("active");
      }
      ProgressBar.updateProgress(
        (((scrollPos - ProgressBar.startPos) / ProgressBar.totalSize) * 100) /
          100
      );
    }
  },
  onResize: function (scroll) {
    this.startPos = this.startMarker.offset().top - 150;
    this.endPos = this.endMarker.offset().top - 150;
    this.totalSize = this.endPos - this.startPos;
    this.onScroll(scroll);
  },
  updateProgress: function (scale) {
    this.meter.css({
      transform: "scale(" + scale + ",1)",
      "-webkit-transform": "scale(" + scale + ",1)",
      "-moz-transform": "scale(" + scale + ",1)",
    });
  },
  getMarkers: function (element) {
    var parent = this;
    $(".js-progress-marker").each(function () {
      var marker = $(this);
      if (element.data("name") == marker.data("name")) {
        if (marker.data("type") == "start") {
          parent.startMarker = marker;
        } else if (marker.data("type") == "end") {
          parent.endMarker = marker;
        }
      }
    });
  },
};

var progressElements = [];

$(".js-progress-meter").each(function () {
  progressElements.push(new ProgressBar($(this)));
});

function progressbarInit(scroll) {
  for (var i = 0, x = progressElements.length; i < x; i++) {
    progressElements[i].init(scroll);
  }
}

function progressbarResize(scroll) {
  for (var i = 0, x = progressElements.length; i < x; i++) {
    progressElements[i].onResize(scroll);
  }
}
function progressbarScroll(scroll) {
  for (var i = 0, x = progressElements.length; i < x; i++) {
    progressElements[i].onScroll(scroll);
  }
}
// event tracking
function eventView(element) {
  this.values = {};
  this.values.element = element;
  this.values.id = element.data("utag-id");
  this.values.seen = false;
}
eventView.prototype = {
  init: function () {
    var parent = this;
    var values = parent.values;
    values.position = values.element.offset().top;
    values.height = values.element.height();
  },
  onScroll: function (scroll, maxScroll) {
    var parent = this,
      posRight =
        maxScroll > this.values.position &&
        scroll < this.values.position + this.values.height;
    if (posRight == true && this.values.seen == false) {
      this.values.seen = true;
      parent.trigger();
    } else if (posRight != true && this.values.seen != false) {
      this.values.seen = false;
    }
  },
  onResize: function () {},
  trigger: function () {
    var values = this.values;
    var link_data = utag.data;
    link_data["link_name"] = utag.data["meta.pageName"] + "_" + values.id;
    link_data["button_clicked"] = false;
    utag.link(utag.data);
  },
};

function EventClick(element) {
  this.values = {};
  this.values.element = element;
  this.values.id = element.data("utag-id");
}
EventClick.prototype = {
  init: function () {
    var parent = this,
      values = parent.values;

    values.element.on("click", function () {
      parent.trigger();
    });
  },
  trigger: function () {
    var values = this.values;
    var link_data = utag.data;
    link_data["link_name"] = utag.data["meta.pageName"] + "_" + values.id;
    link_data["button_clicked"] = true;
    utag.link(utag.data);
  },
};

var trackClickObjs = [],
  trackViewObjs = [];

function eventClickInitalize() {
  $(".js-utag-click").each(function () {
    var element = new EventClick($(this));
    element.init();
    trackClickObjs.push(element);
  });
}
function eventViewInitalize() {
  $(".js-utag-view").each(function () {
    var element = new eventView($(this));
    element.init();
    trackViewObjs.push(element);
  });
}
function eventViewOnScroll(scroll, maxScroll) {
  for (var i = 0, x = trackViewObjs.length; i < x; i++) {
    trackViewObjs[i].onScroll(scroll, maxScroll);
  }
}
function onPageReady() {
  onReady();
  $(window).on("scroll", function () {
    scroll = $(window).scrollTop();
    maxScroll = scroll + $(window).height();
    onScroll(scroll, maxScroll);
  });
  $(window).on("resize", function () {
    scroll = $(window).scrollTop();
    maxScroll = scroll + $(window).height();
    onResize(scroll, maxScroll);
  });
}
function onReady() {
  scroll = $(window).scrollTop();
  maxScroll = scroll + $(window).height();
  if (soloPage != true) {
    scrollElementsInitalize();
    progressbarInit(scroll);

    onScroll(scroll, maxScroll);

    setTimeout(function () {
      $("html").addClass("page-ready");
    }, 1000);
  }
  eventClickInitalize();
  eventViewInitalize();
}
function onScroll(scroll, maxScroll) {
  if (soloPage != true) {
    scrollElementsOnScroll(scroll);
    progressbarScroll(scroll);
  }
  eventViewOnScroll(scroll, maxScroll);
}
function onResize(scroll, maxScroll) {
  utilResize(scroll);
  if (soloPage != true) {
    scrollElementsOnResize(scroll);
    progressbarResize(scroll);
  }
}
$(function () {
  $("#SC-content-slides-ctn").cycle({
    timeout: 0,
    autoHeight: "container",
    manualSpeed: 400,
    manualFx: "scrollHorz",
    swipe: true,
    slides: "> .SC-content-slide",
    pager: "#SC-content-pagers-ctn",
    pagerTemplate:
      "" +
      '<div class="SC-content-pager js-utag-click" data-utag-id="{{id}}">' +
      '<div class="SC-content-pager-copy">' +
      '<div class="SC-content-pager-country">{{country}}</div>' +
      '<div class="SC-content-pager-city">{{city}}</div>' +
      "</div>" +
      "</div>",
    log: false,
  });

  $("#AYI-content-slides-ctn").cycle({
    timeout: 0,
    autoHeight: "container",
    manualSpeed: 400,
    swipe: true,
    manualFx: "scrollHorz",
    slides: "> .AYI-content-slide",
    next: "#AYI-content-controls-next",
    prev: "#AYI-content-controls-prev",
    log: false,
  });

  $("#AYI-content-controls-next").click(function () {
    $("#AYI-content-controls-prev").fadeIn();
  });

  function setSliderHeight(slideshow, slides) {
    var $slideshow = slideshow;
    var $slide = slides;
    var maxHeight = 0;

    $slide.each(function () {
      $(this).css("height", "auto");
    });

    $slide.each(function () {
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });
    $slide.css("height", maxHeight);
  }

  var accordionScroll = function () {
    $(".tab-content").hide().first().show(); //Hide all but the first tab

    $(".label-box").on("click", function () {
      //Scroll to top of tab
      var section = $("#SC-content-accordion"),
        $label = $(".label-box");
      (pos = section.offset().top),
        (boxIndex = $label.index(this)),
        (boxHeight = $label.height()),
        (headerHeight = $(".persistent-header").height());
      $tabs = $(".tab");

      $("html, body").animate({
        scrollTop: pos - headerHeight + boxIndex * 75 + "px",
      });
      $tabs.removeClass("open").find(".tab-content").slideUp("fast");
      $(this).next().slideDown("fast").end().parent().addClass("open");
    });
  };

  accordionScroll();

  $(document).ready(function () {
    if ($(window).width() >= 1025) {
      setSliderHeight($("#SC-content-slides-ctn"), $(".SC-content-slide"));
      setSliderHeight($("#AYI-content-slides-ctn"), $(".AYI-content-slide"));
    } else {
      $(".cycle-slide").css("height", "auto");
    }
  });
  $(window).resize(function () {
    if ($(window).width() >= 1025) {
      setSliderHeight($("#SC-content-slides-ctn"), $(".SC-content-slide"));
      setSliderHeight($("#AYI-content-slides-ctn"), $(".AYI-content-slide"));
    } else {
      $(".cycle-slide").css("height", "auto");
    }
  });

  // on click
  $("#SC-draggable-ctn").click(function () {
    $("#SC-draggable-ctn").addClass("swiped");
    $("#SC-draggable-item").animate(
      {
        left: "0",
      },
      250,
      function () {
        $("#SC-content-ctn").addClass("swipe-complete");
        $("#SC-draggable-ctn").hide();
      }
    );
  });
  $("#SC-draggable-trigger").click(function () {
    $("#SC-draggable-ctn").addClass("swiped");
    $("#SC-draggable-item").animate(
      {
        left: "0",
      },
      250,
      function () {
        $("#SC-content-ctn").addClass("swipe-complete");
        $("#SC-draggable-ctn").hide();
      }
    );
  });
  $("#SC-draggable-button").click(function () {
    $("#SC-draggable-ctn").addClass("swiped");
    $("#SC-draggable-item").animate(
      {
        left: "0",
      },
      250,
      function () {
        $("#SC-content-ctn").addClass("swipe-complete");
        $("#SC-draggable-ctn").hide();
      }
    );
  });

  $("#AYI-draggable-ctn").click(function () {
    $("#AYI-draggable-ctn").addClass("swiped");
    $("#AYI-draggable-item").animate(
      {
        top: "0",
      },
      250,
      function () {
        $("#AYI-content-ctn").addClass("swipe-complete");
        $("#AYI-draggable-ctn").hide();
      }
    );
  });
  $("#AYI-draggable-trigger").click(function () {
    $("#AYI-draggable-ctn").addClass("swiped");
    $("#AYI-draggable-item").animate(
      {
        top: "0",
      },
      250,
      function () {
        $("#AYI-content-ctn").addClass("swipe-complete");
        $("#AYI-draggable-ctn").hide();
      }
    );
  });
  $("#AYI-draggable-button").click(function () {
    $("#AYI-draggable-ctn").addClass("swiped");
    $("#AYI-draggable-item").animate(
      {
        top: "0",
      },
      250,
      function () {
        $("#AYI-content-ctn").addClass("swipe-complete");
        $("#AYI-draggable-ctn").hide();
      }
    );
  });

  // on hover
  $("#SC-draggable-ctn")
    .mouseenter(function () {
      if ($("#SC-draggable-ctn").hasClass("swiped")) {
      } else {
        $("#SC-draggable-item").addClass("hovering");
        $("#SC-draggable-item").animate(
          {
            margin: "0 0 0 -50px",
          },
          200
        );
      }
    })
    .mouseleave(function () {
      if ($("#SC-draggable-ctn").hasClass("swiped")) {
      } else {
        $("#SC-draggable-item").removeClass("hovering");
        $("#SC-draggable-item").animate(
          {
            margin: "0 0 0 0",
          },
          200
        );
      }
    });
  $("#AYI-draggable-ctn")
    .mouseenter(function () {
      if ($("#AYI-draggable-ctn").hasClass("swiped")) {
      } else {
        $("#AYI-draggable-item").addClass("hovering");
        $("#AYI-draggable-item").animate(
          {
            margin: "-50px 0 0 0",
          },
          200
        );
      }
    })
    .mouseleave(function () {
      if ($("#AYI-draggable-ctn").hasClass("swiped")) {
      } else {
        $("#AYI-draggable-item").removeClass("hovering");
        $("#AYI-draggable-item").animate(
          {
            margin: "0 0 0 0",
          },
          200
        );
      }
    });

  $("#SC-unswipe-button").click(function () {
    $("#SC-draggable-ctn").show();
    $("#SC-draggable-item").animate(
      {
        left: "50%",
      },
      250,
      function () {
        $("#SC-draggable-ctn").removeClass("swiped");
        $("#SC-content-ctn").removeClass("swipe-complete");
      }
    );
  });
  $("#AYI-unswipe-button").click(function () {
    $("#AYI-draggable-ctn").show();
    $("#AYI-draggable-item").animate(
      {
        top: "50%",
      },
      250,
      function () {
        $("#AYI-draggable-ctn").removeClass("swiped");
        $("#AYI-content-ctn").removeClass("swipe-complete");
      }
    );
  });
});
(function () {
  var ua = window.navigator.userAgent;
  var msie = window.navigator.userAgent.indexOf("MSIE ");
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    // Hover doesn't work on iframes in IE, need to permanently display
    // Netflix logo over the video.
    $(".netflix-link").css({
      top: "10px",
      left: "10px",
      opacity: "1",
      visibility: "visible",
    });
  }
  var ieVersion = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
  // console.log(ieVersion);
  if (ieVersion <= 9) {
    // Put the tablet img in if tablet or no WebGL
    var $WebGLDiv = $(".page-hero").children().first();
    $WebGLDiv.replaceWith(
      '<div class="cocainenomics-hero-img"><img src="https://s3.amazonaws.com/wsjcsbucket/hubs/netflix_78528/31416/assets/cocainenomics-hero-tablet.png"/><div>'
    );
  }
})();

if (
  util.breakpoint.active === "mobile" ||
  util.breakpoint.active === "tablet"
) {
  onPageReady();
} else {
  pageLoad();
}

if (isIE() === 9) {
  $("body").addClass("is-ie9");
}

function isIE() {
  var myNav = navigator.userAgent.toLowerCase();
  return myNav.indexOf("msie") != -1 ? parseInt(myNav.split("msie")[1]) : false;
}

//# sourceMappingURL=screen.js.map
