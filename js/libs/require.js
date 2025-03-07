/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.18 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

var requirejs, require, define;
!(function (global) {
  function isFunction(e) {
    return "[object Function]" === ostring.call(e);
  }
  function isArray(e) {
    return "[object Array]" === ostring.call(e);
  }
  function each(e, t) {
    if (e) {
      var i;
      for (i = 0; i < e.length && (!e[i] || !t(e[i], i, e)); i += 1);
    }
  }
  function eachReverse(e, t) {
    if (e) {
      var i;
      for (i = e.length - 1; i > -1 && (!e[i] || !t(e[i], i, e)); i -= 1);
    }
  }
  function hasProp(e, t) {
    return hasOwn.call(e, t);
  }
  function getOwn(e, t) {
    return hasProp(e, t) && e[t];
  }
  function eachProp(e, t) {
    var i;
    for (i in e) if (hasProp(e, i) && t(e[i], i)) break;
  }
  function mixin(e, t, i, r) {
    return (
      t &&
        eachProp(t, function (t, n) {
          (i || !hasProp(e, n)) &&
            (!r ||
            "object" != typeof t ||
            !t ||
            isArray(t) ||
            isFunction(t) ||
            t instanceof RegExp
              ? (e[n] = t)
              : (e[n] || (e[n] = {}), mixin(e[n], t, i, r)));
        }),
      e
    );
  }
  function bind(e, t) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  function scripts() {
    return document.getElementsByTagName("script");
  }
  function defaultOnError(e) {
    throw e;
  }
  function getGlobal(e) {
    if (!e) return e;
    var t = global;
    return (
      each(e.split("."), function (e) {
        t = t[e];
      }),
      t
    );
  }
  function makeError(e, t, i, r) {
    var n = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
    return (
      (n.requireType = e), (n.requireModules = r), i && (n.originalError = i), n
    );
  }
  function newContext(e) {
    function t(e) {
      var t, i;
      for (t = 0; t < e.length; t++)
        if (((i = e[t]), "." === i)) e.splice(t, 1), (t -= 1);
        else if (".." === i) {
          if (0 === t || (1 === t && ".." === e[2]) || ".." === e[t - 1])
            continue;
          t > 0 && (e.splice(t - 1, 2), (t -= 2));
        }
    }
    function i(e, i, r) {
      var n,
        a,
        o,
        s,
        c,
        u,
        d,
        p,
        f,
        l,
        h,
        m,
        g = i && i.split("/"),
        v = y.map,
        x = v && v["*"];
      if (
        (e &&
          ((e = e.split("/")),
          (d = e.length - 1),
          y.nodeIdCompat &&
            jsSuffixRegExp.test(e[d]) &&
            (e[d] = e[d].replace(jsSuffixRegExp, "")),
          "." === e[0].charAt(0) &&
            g &&
            ((m = g.slice(0, g.length - 1)), (e = m.concat(e))),
          t(e),
          (e = e.join("/"))),
        r && v && (g || x))
      ) {
        o = e.split("/");
        e: for (s = o.length; s > 0; s -= 1) {
          if (((u = o.slice(0, s).join("/")), g))
            for (c = g.length; c > 0; c -= 1)
              if (
                ((a = getOwn(v, g.slice(0, c).join("/"))),
                a && (a = getOwn(a, u)))
              ) {
                (p = a), (f = s);
                break e;
              }
          !l && x && getOwn(x, u) && ((l = getOwn(x, u)), (h = s));
        }
        !p && l && ((p = l), (f = h)),
          p && (o.splice(0, f, p), (e = o.join("/")));
      }
      return (n = getOwn(y.pkgs, e)), n ? n : e;
    }
    function r(e) {
      isBrowser &&
        each(scripts(), function (t) {
          return t.getAttribute("data-requiremodule") === e &&
            t.getAttribute("data-requirecontext") === q.contextName
            ? (t.parentNode.removeChild(t), !0)
            : void 0;
        });
    }
    function n(e) {
      var t = getOwn(y.paths, e);
      return t && isArray(t) && t.length > 1
        ? (t.shift(),
          q.require.undef(e),
          q.makeRequire(null, { skipMap: !0 })([e]),
          !0)
        : void 0;
    }
    function a(e) {
      var t,
        i = e ? e.indexOf("!") : -1;
      return (
        i > -1 && ((t = e.substring(0, i)), (e = e.substring(i + 1, e.length))),
        [t, e]
      );
    }
    function o(e, t, r, n) {
      var o,
        s,
        c,
        u,
        d = null,
        p = t ? t.name : null,
        f = e,
        l = !0,
        h = "";
      return (
        e || ((l = !1), (e = "_@r" + (A += 1))),
        (u = a(e)),
        (d = u[0]),
        (e = u[1]),
        d && ((d = i(d, p, n)), (s = getOwn(j, d))),
        e &&
          (d
            ? (h =
                s && s.normalize
                  ? s.normalize(e, function (e) {
                      return i(e, p, n);
                    })
                  : -1 === e.indexOf("!")
                  ? i(e, p, n)
                  : e)
            : ((h = i(e, p, n)),
              (u = a(h)),
              (d = u[0]),
              (h = u[1]),
              (r = !0),
              (o = q.nameToUrl(h)))),
        (c = !d || s || r ? "" : "_unnormalized" + (T += 1)),
        {
          prefix: d,
          name: h,
          parentMap: t,
          unnormalized: !!c,
          url: o,
          originalName: f,
          isDefine: l,
          id: (d ? d + "!" + h : h) + c,
        }
      );
    }
    function s(e) {
      var t = e.id,
        i = getOwn(S, t);
      return i || (i = S[t] = new q.Module(e)), i;
    }
    function c(e, t, i) {
      var r = e.id,
        n = getOwn(S, r);
      !hasProp(j, r) || (n && !n.defineEmitComplete)
        ? ((n = s(e)), n.error && "error" === t ? i(n.error) : n.on(t, i))
        : "defined" === t && i(j[r]);
    }
    function u(e, t) {
      var i = e.requireModules,
        r = !1;
      t
        ? t(e)
        : (each(i, function (t) {
            var i = getOwn(S, t);
            i &&
              ((i.error = e), i.events.error && ((r = !0), i.emit("error", e)));
          }),
          r || req.onError(e));
    }
    function d() {
      globalDefQueue.length &&
        (apsp.apply(M, [M.length, 0].concat(globalDefQueue)),
        (globalDefQueue = []));
    }
    function p(e) {
      delete S[e], delete k[e];
    }
    function f(e, t, i) {
      var r = e.map.id;
      e.error
        ? e.emit("error", e.error)
        : ((t[r] = !0),
          each(e.depMaps, function (r, n) {
            var a = r.id,
              o = getOwn(S, a);
            !o ||
              e.depMatched[n] ||
              i[a] ||
              (getOwn(t, a) ? (e.defineDep(n, j[a]), e.check()) : f(o, t, i));
          }),
          (i[r] = !0));
    }
    function l() {
      var e,
        t,
        i = 1e3 * y.waitSeconds,
        a = i && q.startTime + i < new Date().getTime(),
        o = [],
        s = [],
        c = !1,
        d = !0;
      if (!x) {
        if (
          ((x = !0),
          eachProp(k, function (e) {
            var i = e.map,
              u = i.id;
            if (e.enabled && (i.isDefine || s.push(e), !e.error))
              if (!e.inited && a)
                n(u) ? ((t = !0), (c = !0)) : (o.push(u), r(u));
              else if (
                !e.inited &&
                e.fetched &&
                i.isDefine &&
                ((c = !0), !i.prefix)
              )
                return (d = !1);
          }),
          a && o.length)
        )
          return (
            (e = makeError(
              "timeout",
              "Load timeout for modules: " + o,
              null,
              o
            )),
            (e.contextName = q.contextName),
            u(e)
          );
        d &&
          each(s, function (e) {
            f(e, {}, {});
          }),
          (a && !t) ||
            !c ||
            (!isBrowser && !isWebWorker) ||
            w ||
            (w = setTimeout(function () {
              (w = 0), l();
            }, 50)),
          (x = !1);
      }
    }
    function h(e) {
      hasProp(j, e[0]) || s(o(e[0], null, !0)).init(e[1], e[2]);
    }
    function m(e, t, i, r) {
      e.detachEvent && !isOpera
        ? r && e.detachEvent(r, t)
        : e.removeEventListener(i, t, !1);
    }
    function g(e) {
      var t = e.currentTarget || e.srcElement;
      return (
        m(t, q.onScriptLoad, "load", "onreadystatechange"),
        m(t, q.onScriptError, "error"),
        { node: t, id: t && t.getAttribute("data-requiremodule") }
      );
    }
    function v() {
      var e;
      for (d(); M.length; ) {
        if (((e = M.shift()), null === e[0]))
          return u(
            makeError(
              "mismatch",
              "Mismatched anonymous define() module: " + e[e.length - 1]
            )
          );
        h(e);
      }
    }
    var x,
      b,
      q,
      E,
      w,
      y = {
        waitSeconds: 7,
        baseUrl: "./",
        paths: {},
        bundles: {},
        pkgs: {},
        shim: {},
        config: {},
      },
      S = {},
      k = {},
      O = {},
      M = [],
      j = {},
      P = {},
      R = {},
      A = 1,
      T = 1;
    return (
      (E = {
        require: function (e) {
          return e.require ? e.require : (e.require = q.makeRequire(e.map));
        },
        exports: function (e) {
          return (
            (e.usingExports = !0),
            e.map.isDefine
              ? e.exports
                ? (j[e.map.id] = e.exports)
                : (e.exports = j[e.map.id] = {})
              : void 0
          );
        },
        module: function (e) {
          return e.module
            ? e.module
            : (e.module = {
                id: e.map.id,
                uri: e.map.url,
                config: function () {
                  return getOwn(y.config, e.map.id) || {};
                },
                exports: e.exports || (e.exports = {}),
              });
        },
      }),
      (b = function (e) {
        (this.events = getOwn(O, e.id) || {}),
          (this.map = e),
          (this.shim = getOwn(y.shim, e.id)),
          (this.depExports = []),
          (this.depMaps = []),
          (this.depMatched = []),
          (this.pluginMaps = {}),
          (this.depCount = 0);
      }),
      (b.prototype = {
        init: function (e, t, i, r) {
          (r = r || {}),
            this.inited ||
              ((this.factory = t),
              i
                ? this.on("error", i)
                : this.events.error &&
                  (i = bind(this, function (e) {
                    this.emit("error", e);
                  })),
              (this.depMaps = e && e.slice(0)),
              (this.errback = i),
              (this.inited = !0),
              (this.ignore = r.ignore),
              r.enabled || this.enabled ? this.enable() : this.check());
        },
        defineDep: function (e, t) {
          this.depMatched[e] ||
            ((this.depMatched[e] = !0),
            (this.depCount -= 1),
            (this.depExports[e] = t));
        },
        fetch: function () {
          if (!this.fetched) {
            (this.fetched = !0), (q.startTime = new Date().getTime());
            var e = this.map;
            return this.shim
              ? void q.makeRequire(this.map, { enableBuildCallback: !0 })(
                  this.shim.deps || [],
                  bind(this, function () {
                    return e.prefix ? this.callPlugin() : this.load();
                  })
                )
              : e.prefix
              ? this.callPlugin()
              : this.load();
          }
        },
        load: function () {
          var e = this.map.url;
          P[e] || ((P[e] = !0), q.load(this.map.id, e));
        },
        check: function () {
          if (this.enabled && !this.enabling) {
            var e,
              t,
              i = this.map.id,
              r = this.depExports,
              n = this.exports,
              a = this.factory;
            if (this.inited) {
              if (this.error) this.emit("error", this.error);
              else if (!this.defining) {
                if (
                  ((this.defining = !0), this.depCount < 1 && !this.defined)
                ) {
                  if (isFunction(a)) {
                    if (
                      (this.events.error && this.map.isDefine) ||
                      req.onError !== defaultOnError
                    )
                      try {
                        n = q.execCb(i, a, r, n);
                      } catch (o) {
                        e = o;
                      }
                    else n = q.execCb(i, a, r, n);
                    if (
                      (this.map.isDefine &&
                        void 0 === n &&
                        ((t = this.module),
                        t
                          ? (n = t.exports)
                          : this.usingExports && (n = this.exports)),
                      e)
                    )
                      return (
                        (e.requireMap = this.map),
                        (e.requireModules = this.map.isDefine
                          ? [this.map.id]
                          : null),
                        (e.requireType = this.map.isDefine
                          ? "define"
                          : "require"),
                        u((this.error = e))
                      );
                  } else n = a;
                  (this.exports = n),
                    this.map.isDefine &&
                      !this.ignore &&
                      ((j[i] = n),
                      req.onResourceLoad &&
                        req.onResourceLoad(q, this.map, this.depMaps)),
                    p(i),
                    (this.defined = !0);
                }
                (this.defining = !1),
                  this.defined &&
                    !this.defineEmitted &&
                    ((this.defineEmitted = !0),
                    this.emit("defined", this.exports),
                    (this.defineEmitComplete = !0));
              }
            } else this.fetch();
          }
        },
        callPlugin: function () {
          var e = this.map,
            t = e.id,
            r = o(e.prefix);
          this.depMaps.push(r),
            c(
              r,
              "defined",
              bind(this, function (r) {
                var n,
                  a,
                  d,
                  f = getOwn(R, this.map.id),
                  l = this.map.name,
                  h = this.map.parentMap ? this.map.parentMap.name : null,
                  m = q.makeRequire(e.parentMap, { enableBuildCallback: !0 });
                return this.map.unnormalized
                  ? (r.normalize &&
                      (l =
                        r.normalize(l, function (e) {
                          return i(e, h, !0);
                        }) || ""),
                    (a = o(e.prefix + "!" + l, this.map.parentMap)),
                    c(
                      a,
                      "defined",
                      bind(this, function (e) {
                        this.init(
                          [],
                          function () {
                            return e;
                          },
                          null,
                          { enabled: !0, ignore: !0 }
                        );
                      })
                    ),
                    (d = getOwn(S, a.id)),
                    void (
                      d &&
                      (this.depMaps.push(a),
                      this.events.error &&
                        d.on(
                          "error",
                          bind(this, function (e) {
                            this.emit("error", e);
                          })
                        ),
                      d.enable())
                    ))
                  : f
                  ? ((this.map.url = q.nameToUrl(f)), void this.load())
                  : ((n = bind(this, function (e) {
                      this.init(
                        [],
                        function () {
                          return e;
                        },
                        null,
                        { enabled: !0 }
                      );
                    })),
                    (n.error = bind(this, function (e) {
                      (this.inited = !0),
                        (this.error = e),
                        (e.requireModules = [t]),
                        eachProp(S, function (e) {
                          0 === e.map.id.indexOf(t + "_unnormalized") &&
                            p(e.map.id);
                        }),
                        u(e);
                    })),
                    (n.fromText = bind(this, function (i, r) {
                      var a = e.name,
                        c = o(a),
                        d = useInteractive;
                      r && (i = r),
                        d && (useInteractive = !1),
                        s(c),
                        hasProp(y.config, t) && (y.config[a] = y.config[t]);
                      try {
                        req.exec(i);
                      } catch (p) {
                        return u(
                          makeError(
                            "fromtexteval",
                            "fromText eval for " + t + " failed: " + p,
                            p,
                            [t]
                          )
                        );
                      }
                      d && (useInteractive = !0),
                        this.depMaps.push(c),
                        q.completeLoad(a),
                        m([a], n);
                    })),
                    void r.load(e.name, m, n, y));
              })
            ),
            q.enable(r, this),
            (this.pluginMaps[r.id] = r);
        },
        enable: function () {
          (k[this.map.id] = this),
            (this.enabled = !0),
            (this.enabling = !0),
            each(
              this.depMaps,
              bind(this, function (e, t) {
                var i, r, n;
                if ("string" == typeof e) {
                  if (
                    ((e = o(
                      e,
                      this.map.isDefine ? this.map : this.map.parentMap,
                      !1,
                      !this.skipMap
                    )),
                    (this.depMaps[t] = e),
                    (n = getOwn(E, e.id)))
                  )
                    return void (this.depExports[t] = n(this));
                  (this.depCount += 1),
                    c(
                      e,
                      "defined",
                      bind(this, function (e) {
                        this.undefed || (this.defineDep(t, e), this.check());
                      })
                    ),
                    this.errback
                      ? c(e, "error", bind(this, this.errback))
                      : this.events.error &&
                        c(
                          e,
                          "error",
                          bind(this, function (e) {
                            this.emit("error", e);
                          })
                        );
                }
                (i = e.id),
                  (r = S[i]),
                  hasProp(E, i) || !r || r.enabled || q.enable(e, this);
              })
            ),
            eachProp(
              this.pluginMaps,
              bind(this, function (e) {
                var t = getOwn(S, e.id);
                t && !t.enabled && q.enable(e, this);
              })
            ),
            (this.enabling = !1),
            this.check();
        },
        on: function (e, t) {
          var i = this.events[e];
          i || (i = this.events[e] = []), i.push(t);
        },
        emit: function (e, t) {
          each(this.events[e], function (e) {
            e(t);
          }),
            "error" === e && delete this.events[e];
        },
      }),
      (q = {
        config: y,
        contextName: e,
        registry: S,
        defined: j,
        urlFetched: P,
        defQueue: M,
        Module: b,
        makeModuleMap: o,
        nextTick: req.nextTick,
        onError: u,
        configure: function (e) {
          e.baseUrl &&
            "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) &&
            (e.baseUrl += "/");
          var t = y.shim,
            i = { paths: !0, bundles: !0, config: !0, map: !0 };
          eachProp(e, function (e, t) {
            i[t] ? (y[t] || (y[t] = {}), mixin(y[t], e, !0, !0)) : (y[t] = e);
          }),
            e.bundles &&
              eachProp(e.bundles, function (e, t) {
                each(e, function (e) {
                  e !== t && (R[e] = t);
                });
              }),
            e.shim &&
              (eachProp(e.shim, function (e, i) {
                isArray(e) && (e = { deps: e }),
                  (!e.exports && !e.init) ||
                    e.exportsFn ||
                    (e.exportsFn = q.makeShimExports(e)),
                  (t[i] = e);
              }),
              (y.shim = t)),
            e.packages &&
              each(e.packages, function (e) {
                var t, i;
                (e = "string" == typeof e ? { name: e } : e),
                  (i = e.name),
                  (t = e.location),
                  t && (y.paths[i] = e.location),
                  (y.pkgs[i] =
                    e.name +
                    "/" +
                    (e.main || "main")
                      .replace(currDirRegExp, "")
                      .replace(jsSuffixRegExp, ""));
              }),
            eachProp(S, function (e, t) {
              e.inited || e.map.unnormalized || (e.map = o(t, null, !0));
            }),
            (e.deps || e.callback) && q.require(e.deps || [], e.callback);
        },
        makeShimExports: function (e) {
          function t() {
            var t;
            return (
              e.init && (t = e.init.apply(global, arguments)),
              t || (e.exports && getGlobal(e.exports))
            );
          }
          return t;
        },
        makeRequire: function (t, n) {
          function a(i, r, c) {
            var d, p, f;
            return (
              n.enableBuildCallback &&
                r &&
                isFunction(r) &&
                (r.__requireJsBuild = !0),
              "string" == typeof i
                ? isFunction(r)
                  ? u(makeError("requireargs", "Invalid require call"), c)
                  : t && hasProp(E, i)
                  ? E[i](S[t.id])
                  : req.get
                  ? req.get(q, i, t, a)
                  : ((p = o(i, t, !1, !0)),
                    (d = p.id),
                    hasProp(j, d)
                      ? j[d]
                      : u(
                          makeError(
                            "notloaded",
                            'Module name "' +
                              d +
                              '" has not been loaded yet for context: ' +
                              e +
                              (t ? "" : ". Use require([])")
                          )
                        ))
                : (v(),
                  q.nextTick(function () {
                    v(),
                      (f = s(o(null, t))),
                      (f.skipMap = n.skipMap),
                      f.init(i, r, c, { enabled: !0 }),
                      l();
                  }),
                  a)
            );
          }
          return (
            (n = n || {}),
            mixin(a, {
              isBrowser: isBrowser,
              toUrl: function (e) {
                var r,
                  n = e.lastIndexOf("."),
                  a = e.split("/")[0],
                  o = "." === a || ".." === a;
                return (
                  -1 !== n &&
                    (!o || n > 1) &&
                    ((r = e.substring(n, e.length)), (e = e.substring(0, n))),
                  q.nameToUrl(i(e, t && t.id, !0), r, !0)
                );
              },
              defined: function (e) {
                return hasProp(j, o(e, t, !1, !0).id);
              },
              specified: function (e) {
                return (e = o(e, t, !1, !0).id), hasProp(j, e) || hasProp(S, e);
              },
            }),
            t ||
              (a.undef = function (e) {
                d();
                var i = o(e, t, !0),
                  n = getOwn(S, e);
                (n.undefed = !0),
                  r(e),
                  delete j[e],
                  delete P[i.url],
                  delete O[e],
                  eachReverse(M, function (t, i) {
                    t[0] === e && M.splice(i, 1);
                  }),
                  n && (n.events.defined && (O[e] = n.events), p(e));
              }),
            a
          );
        },
        enable: function (e) {
          var t = getOwn(S, e.id);
          t && s(e).enable();
        },
        completeLoad: function (e) {
          var t,
            i,
            r,
            a = getOwn(y.shim, e) || {},
            o = a.exports;
          for (d(); M.length; ) {
            if (((i = M.shift()), null === i[0])) {
              if (((i[0] = e), t)) break;
              t = !0;
            } else i[0] === e && (t = !0);
            h(i);
          }
          if (((r = getOwn(S, e)), !t && !hasProp(j, e) && r && !r.inited)) {
            if (!(!y.enforceDefine || (o && getGlobal(o))))
              return n(e)
                ? void 0
                : u(
                    makeError("nodefine", "No define call for " + e, null, [e])
                  );
            h([e, a.deps || [], a.exportsFn]);
          }
          l();
        },
        nameToUrl: function (e, t, i) {
          var r,
            n,
            a,
            o,
            s,
            c,
            u,
            d = getOwn(y.pkgs, e);
          if ((d && (e = d), (u = getOwn(R, e)))) return q.nameToUrl(u, t, i);
          if (req.jsExtRegExp.test(e)) s = e + (t || "");
          else {
            for (r = y.paths, n = e.split("/"), a = n.length; a > 0; a -= 1)
              if (((o = n.slice(0, a).join("/")), (c = getOwn(r, o)))) {
                isArray(c) && (c = c[0]), n.splice(0, a, c);
                break;
              }
            (s = n.join("/")),
              (s += t || (/^data\:|\?/.test(s) || i ? "" : ".js")),
              (s =
                ("/" === s.charAt(0) || s.match(/^[\w\+\.\-]+:/)
                  ? ""
                  : y.baseUrl) + s);
          }
          return y.urlArgs
            ? s + ((-1 === s.indexOf("?") ? "?" : "&") + y.urlArgs)
            : s;
        },
        load: function (e, t) {
          req.load(q, e, t);
        },
        execCb: function (e, t, i, r) {
          return t.apply(r, i);
        },
        onScriptLoad: function (e) {
          if (
            "load" === e.type ||
            readyRegExp.test((e.currentTarget || e.srcElement).readyState)
          ) {
            interactiveScript = null;
            var t = g(e);
            q.completeLoad(t.id);
          }
        },
        onScriptError: function (e) {
          var t = g(e);
          return n(t.id)
            ? void 0
            : u(
                makeError("scripterror", "Script error for: " + t.id, e, [t.id])
              );
        },
      }),
      (q.require = q.makeRequire()),
      q
    );
  }
  function getInteractiveScript() {
    return interactiveScript && "interactive" === interactiveScript.readyState
      ? interactiveScript
      : (eachReverse(scripts(), function (e) {
          return "interactive" === e.readyState
            ? (interactiveScript = e)
            : void 0;
        }),
        interactiveScript);
  }
  var req,
    s,
    head,
    baseElement,
    dataMain,
    src,
    interactiveScript,
    currentlyAddingScript,
    mainScript,
    subPath,
    version = "2.1.18",
    commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
    cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
    jsSuffixRegExp = /\.js$/,
    currDirRegExp = /^\.\//,
    op = Object.prototype,
    ostring = op.toString,
    hasOwn = op.hasOwnProperty,
    ap = Array.prototype,
    apsp = ap.splice,
    isBrowser = !(
      "undefined" == typeof window ||
      "undefined" == typeof navigator ||
      !window.document
    ),
    isWebWorker = !isBrowser && "undefined" != typeof importScripts,
    readyRegExp =
      isBrowser && "PLAYSTATION 3" === navigator.platform
        ? /^complete$/
        : /^(complete|loaded)$/,
    defContextName = "_",
    isOpera =
      "undefined" != typeof opera && "[object Opera]" === opera.toString(),
    contexts = {},
    cfg = {},
    globalDefQueue = [],
    useInteractive = !1;
  if ("undefined" == typeof define) {
    if ("undefined" != typeof requirejs) {
      if (isFunction(requirejs)) return;
      (cfg = requirejs), (requirejs = void 0);
    }
    "undefined" == typeof require ||
      isFunction(require) ||
      ((cfg = require), (require = void 0)),
      (req = requirejs =
        function (e, t, i, r) {
          var n,
            a,
            o = defContextName;
          return (
            isArray(e) ||
              "string" == typeof e ||
              ((a = e), isArray(t) ? ((e = t), (t = i), (i = r)) : (e = [])),
            a && a.context && (o = a.context),
            (n = getOwn(contexts, o)),
            n || (n = contexts[o] = req.s.newContext(o)),
            a && n.configure(a),
            n.require(e, t, i)
          );
        }),
      (req.config = function (e) {
        return req(e);
      }),
      (req.nextTick =
        "undefined" != typeof setTimeout
          ? function (e) {
              setTimeout(e, 4);
            }
          : function (e) {
              e();
            }),
      require || (require = req),
      (req.version = version),
      (req.jsExtRegExp = /^\/|:|\?|\.js$/),
      (req.isBrowser = isBrowser),
      (s = req.s = { contexts: contexts, newContext: newContext }),
      req({}),
      each(["toUrl", "undef", "defined", "specified"], function (e) {
        req[e] = function () {
          var t = contexts[defContextName];
          return t.require[e].apply(t, arguments);
        };
      }),
      isBrowser &&
        ((head = s.head = document.getElementsByTagName("head")[0]),
        (baseElement = document.getElementsByTagName("base")[0]),
        baseElement && (head = s.head = baseElement.parentNode)),
      (req.onError = defaultOnError),
      (req.createNode = function (e, t, i) {
        var r = e.xhtml
          ? document.createElementNS(
              "http://www.w3.org/1999/xhtml",
              "html:script"
            )
          : document.createElement("script");
        return (
          (r.type = e.scriptType || "text/javascript"),
          (r.charset = "utf-8"),
          (r.async = !0),
          r
        );
      }),
      (req.load = function (e, t, i) {
        var r,
          n = (e && e.config) || {};
        if (isBrowser)
          return (
            (r = req.createNode(n, t, i)),
            r.setAttribute("data-requirecontext", e.contextName),
            r.setAttribute("data-requiremodule", t),
            !r.attachEvent ||
            (r.attachEvent.toString &&
              r.attachEvent.toString().indexOf("[native code") < 0) ||
            isOpera
              ? (r.addEventListener("load", e.onScriptLoad, !1),
                r.addEventListener("error", e.onScriptError, !1))
              : ((useInteractive = !0),
                r.attachEvent("onreadystatechange", e.onScriptLoad)),
            (r.src = i),
            (currentlyAddingScript = r),
            baseElement
              ? head.insertBefore(r, baseElement)
              : head.appendChild(r),
            (currentlyAddingScript = null),
            r
          );
        if (isWebWorker)
          try {
            importScripts(i), e.completeLoad(t);
          } catch (a) {
            e.onError(
              makeError(
                "importscripts",
                "importScripts failed for " + t + " at " + i,
                a,
                [t]
              )
            );
          }
      }),
      isBrowser &&
        !cfg.skipDataMain &&
        eachReverse(scripts(), function (e) {
          return (
            head || (head = e.parentNode),
            (dataMain = e.getAttribute("data-main")),
            dataMain
              ? ((mainScript = dataMain),
                cfg.baseUrl ||
                  ((src = mainScript.split("/")),
                  (mainScript = src.pop()),
                  (subPath = src.length ? src.join("/") + "/" : "./"),
                  (cfg.baseUrl = subPath)),
                (mainScript = mainScript.replace(jsSuffixRegExp, "")),
                req.jsExtRegExp.test(mainScript) && (mainScript = dataMain),
                (cfg.deps = cfg.deps
                  ? cfg.deps.concat(mainScript)
                  : [mainScript]),
                !0)
              : void 0
          );
        }),
      (define = function (e, t, i) {
        var r, n;
        "string" != typeof e && ((i = t), (t = e), (e = null)),
          isArray(t) || ((i = t), (t = null)),
          !t &&
            isFunction(i) &&
            ((t = []),
            i.length &&
              (i
                .toString()
                .replace(commentRegExp, "")
                .replace(cjsRequireRegExp, function (e, i) {
                  t.push(i);
                }),
              (t = (
                1 === i.length ? ["require"] : ["require", "exports", "module"]
              ).concat(t)))),
          useInteractive &&
            ((r = currentlyAddingScript || getInteractiveScript()),
            r &&
              (e || (e = r.getAttribute("data-requiremodule")),
              (n = contexts[r.getAttribute("data-requirecontext")]))),
          (n ? n.defQueue : globalDefQueue).push([e, t, i]);
      }),
      (define.amd = { jQuery: !0 }),
      (req.exec = function (text) {
        return eval(text);
      }),
      req(cfg);
  }
})(this);
