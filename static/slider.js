! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([
    function(e, t, n) {
        "use strict";
        n(4);
        var r = function(e, t, n) {
                var r = 0,
                    o = function(e) {
                        e.preventDefault()
                    },
                    i = function(e) {
                        document.removeEventListener("touchmove", o)
                    },
                    s = function(e) {
                        return e.pageX || e.targetTouches[0].pageX ? e.pageX || e.targetTouches[0].pageX : "undefined" != typeof e.originalEvent && e.originalEvent.targetTouches[0].pageX
                    },
                    a = function(i) {
                        document.addEventListener("touchmove", o, !1);
                        var a = s(i);
                        a !== !1 && (r = 100 * (a - n.offsetLeft - 1) / n.offsetWidth + "%", e.style.left = r, t.style.width = r)
                    };
                n.addEventListener("mousemove", a), n.addEventListener("touchmove", a), n.addEventListener("touchend", i)
            },
            o = Array.prototype.slice.call(document.querySelectorAll(".slide-comparison"), 0);
        o.forEach(function(e, t, n) {
            e.querySelector(".resized img").style.width = e.offsetWidth + "px", r(e.querySelector(".divider"), e.querySelector(".resized"), e)
        }), window.onresize = function(e) {
            o.forEach(function(e, t, n) {
                e.querySelector(".resized img").style.width = e.offsetWidth + "px"
            })
        }
    },
    function(e, t, n) {
        t = e.exports = n(2)(), t.push([e.id, ".slide-comparison{width:600px;height:345px;position:relative;overflow:hidden}.slide-comparison img{display:block;width:100%;height:100%}.slide-comparison .resized{position:absolute;top:0;left:0;height:100%;width:50%;overflow:hidden}.slide-comparison .divider{position:absolute;left:50%;top:0;bottom:0;width:4px;margin-left:-2px;background:rgba(0,0,0,.5)}@media (max-width:767px){.slide-comparison{width:300px;height:200px}}", ""])
    },
    function(e, t) {
        e.exports = function() {
            var e = [];
            return e.toString = function() {
                for (var e = [], t = 0; t < this.length; t++) {
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                }
                return e.join("")
            }, e.i = function(t, n) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var s = t[o];
                    "number" == typeof s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), e.push(s))
                }
            }, e
        }
    },
    function(e, t, n) {
        function r(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    o = p[r.id];
                if (o) {
                    o.refs++;
                    for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
                    for (; i < r.parts.length; i++) o.parts.push(f(r.parts[i], t))
                } else {
                    for (var s = [], i = 0; i < r.parts.length; i++) s.push(f(r.parts[i], t));
                    p[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }

        function o(e) {
            for (var t = [], n = {}, r = 0; r < e.length; r++) {
                var o = e[r],
                    i = o[0],
                    s = o[1],
                    a = o[2],
                    u = o[3],
                    f = {
                        css: s,
                        media: a,
                        sourceMap: u
                    };
                n[i] ? n[i].parts.push(f) : t.push(n[i] = {
                    id: i,
                    parts: [f]
                })
            }
            return t
        }

        function i(e, t) {
            var n = m(),
                r = b[b.length - 1];
            if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), b.push(t);
            else {
                if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }

        function s(e) {
            e.parentNode.removeChild(e);
            var t = b.indexOf(e);
            t >= 0 && b.splice(t, 1)
        }

        function a(e) {
            var t = document.createElement("style");
            return t.type = "text/css", i(e, t), t
        }

        function u(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet", i(e, t), t
        }

        function f(e, t) {
            var n, r, o;
            if (t.singleton) {
                var i = y++;
                n = g || (g = a(t)), r = c.bind(null, n, i, !1), o = c.bind(null, n, i, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = u(t), r = l.bind(null, n), o = function() {
                s(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = a(t), r = d.bind(null, n), o = function() {
                s(n)
            });
            return r(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r(e = t)
                    } else o()
                }
        }

        function c(e, t, n, r) {
            var o = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = x(t, o);
            else {
                var i = document.createTextNode(o),
                    s = e.childNodes;
                s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(i, s[t]) : e.appendChild(i)
            }
        }

        function d(e, t) {
            var n = t.css,
                r = t.media;
            if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }

        function l(e, t) {
            var n = t.css,
                r = t.sourceMap;
            r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var o = new Blob([n], {
                    type: "text/css"
                }),
                i = e.href;
            e.href = URL.createObjectURL(o), i && URL.revokeObjectURL(i)
        }
        var p = {},
            h = function(e) {
                var t;
                return function() {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)), t
                }
            },
            v = h(function() {
                return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
            }),
            m = h(function() {
                return document.head || document.getElementsByTagName("head")[0]
            }),
            g = null,
            y = 0,
            b = [];
        e.exports = function(e, t) {
            t = t || {}, "undefined" == typeof t.singleton && (t.singleton = v()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
            var n = o(e);
            return r(n, t),
                function(e) {
                    for (var i = [], s = 0; s < n.length; s++) {
                        var a = n[s],
                            u = p[a.id];
                        u.refs--, i.push(u)
                    }
                    if (e) {
                        var f = o(e);
                        r(f, t)
                    }
                    for (var s = 0; s < i.length; s++) {
                        var u = i[s];
                        if (0 === u.refs) {
                            for (var c = 0; c < u.parts.length; c++) u.parts[c]();
                            delete p[u.id]
                        }
                    }
                }
        };
        var x = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    },
    function(e, t, n) {
        var r = n(1);
        "string" == typeof r && (r = [
            [e.id, r, ""]
        ]), n(3)(r, {}), r.locals && (e.exports = r.locals)
    }
]);