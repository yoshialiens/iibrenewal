! function(t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var s = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports
    }
    var i = {};
    return e.m = t, e.c = i, e.p = "", e(0)
}([function(t, e, i) {
    t.exports = i(1)
}, function(t, e, i) {
    i(2), i(3), i(4), i(5);
    var n = i(6),
        s = i(7),
        o = i(8),
        r = i(9),
        a = i(10);
    ! function() {
        "use strict";
        var t, e, i = {},
            c = {},
            h = new r,
            l = new a,
            u = !0,
            p = !0,
            d = {
                VISITED: {
                    NAME: "nhk_special_amazon_visited",
                    EXPIRES: 365,
                    PATH: "/special/amazon/"
                }
            },
            f = {
                init: function() {
                	//全体位置の取得
                    this.setUserAgent(), $(window).resize(this.resize).trigger("resize"), window.onorientationchange = this.resize, $(".maps__container").on(c.down, this.mouseDown).on(c.up, this.mouseUp).on(c.leave, this.mouseLeave), h.init(n), l.init($(".maps__mini canvas").get(0), h), this.pjax(), this.update(), this.onload(), this.audio(), $.cookie.json = !0, $('a[href^="#"]').on("click", this.anchor), (i.isiOS || i.isAndroid) && (t = new o(".menu", {
                        eventPassthrough: !0,
                        scrollX: !0,
                        scrollY: !1,
                        preventDefault: !1
                    })), this.visited(location.pathname, location.hash), NHKSNS.initSNSOnLoad()
                },
                onload: function() {
                    var t, e, i;
                    t = (new Date).getTime(), $(window).on("load", function() {
                        e = (new Date).getTime(), i = e - t, $(".operation").delay(2e3).fadeOut(500), $(".cover").stop(!0).delay(2e3).fadeOut(500)
                    })
                },
                /*
                audio: function() {
                    if (!i.isiOS && !i.isAndroid) {
                        var t = s.audiojs,
                            n = t.createAll();
                        e = n[0], i.isiOS || i.isAndroid || !p || $("body").hasClass("column") || e.play();
                        var o = $(".header__submenu__sound__btn"),
                            r = o.find("img");
                        o.on("click", function() {
                            p = !p, p ? (r.show(), e.play()) : (r.hide(), e.pause())
                        })
                    }
                },
                */
                pjax: function() {
                    $.pjax({
                        area: [".article"],
                        load: {
                            head: "base, meta, link",
                            css: !1,
                            script: !1
                        },
                        link: "a.pjax",
                        /*
                        callback: function(t) {
                            var n = location.pathname;
                            NHKSNS.initSNS(), f.visited(n, location.hash), "/special/amazon/" !== n ? (u = !1, $("body").addClass("column"), $(".article").stop(!0).css("visibility", "hidden").fadeInCss3(350, "ease-in"), $(".cover").stop(!0).css("visibility", "hidden").zoomInCss3(350, "ease-in-out")) : (u = !0, $("body").removeClass("column"), $(".article").stop(!0).fadeOutCss3(300, "ease-in-out"), $(".cover").stop(!0).zoomOutCss3(300, "ease-in-out")), "/special/amazon/series3/360/" == n && (embedpano({
                                swf: "/special/amazon/common/js/krpano.swf",
                                xml: "/special/amazon/series3/360/01.xml",
                                target: "pano",
                                html5: "prefer",
                                passQueryParameters: !0
                            }), $(".article__content__pano").height($(window).height() - 180)), i.isiOS || i.isAndroid || !p || ($("body").hasClass("column") ? e.pause() : e.play())
                        },
                        */
                        callbacks: {
                            ajax: {
                                complete: function() {}
                            }
                        },
                        wait: 0,
                        ajax: {
                            timeout: 3e3
                        }
                    })
                },
                anchor: function(t) {
                    var e = {},
                        i = $(this).attr("href").match(/^.*(#.+)/),
                        n = i[1];
                    switch (n) {
                        case "#about":
                            e = {
                                x: 0,
                                y: 0
                            };
                            break;
                        case "#series1":
                            e = {
                                x: 0,
                                y: 885
                            };
                            break;
                        case "#series2":
                            e = {
                                x: 885,
                                y: 0
                            };
                            break;
                        case "#series3":
                            e = {
                                x: -885,
                                y: 0
                            };
                            break;
                        case "#series4":
                            e = {
                                x: 0,
                                y: -885
                            };
                            break;
                        default:
                            return !1
                    }
                    return e.x *= h.scale, e.y *= h.scale, h.slide(e.x, e.y), !1
                },
                setUserAgent: function() {
                    i.name = window.navigator.userAgent.toLowerCase(), i.isIE = i.name.indexOf("msie") >= 0 || i.name.indexOf("trident") >= 0, i.isiPhone = i.name.indexOf("iphone") >= 0, i.isiPod = i.name.indexOf("ipod") >= 0, i.isiPad = i.name.indexOf("ipad") >= 0, i.isiOS = i.isiPhone || i.isiPod || i.isiPad, i.isAndroid = i.name.indexOf("android") >= 0, i.isTablet = i.isiPad || i.isAndroid && i.name.indexOf("mobile") < 0, i.isIE ? (i.verArray = /(msie|rv:?)\s?([0-9]{1,})([\.0-9]{1,})/.exec(i.name), i.verArray && (i.ver = parseInt(i.verArray[2], 10))) : i.isiOS ? (i.verArray = /(os)\s([0-9]{1,})([\_0-9]{1,})/.exec(i.name), i.verArray && (i.ver = parseInt(i.verArray[2], 10))) : i.isAndroid && (i.verArray = /(android)\s([0-9]{1,})([\.0-9]{1,})/.exec(i.name), i.verArray && (i.ver = parseInt(i.verArray[2], 10))), i.isiOS || i.isAndroid ? (c.down = "touchstart", c.up = "touchend", c.leave = "touchend", c.move = "touchmove", $("body").addClass("sp")) : (c.down = "mousedown", c.up = "mouseup", c.leave = "mouseleave", c.move = "mousemove")
                },
                update: function() {
                    return requestAnimationFrame(f.update), u ? (n.update(), h.update(), void l.update()) : !1
                },
                resize: function() {
                    var t = $(window),
                        e = (t.width(), t.height());
                    h.resize(), $(".wrap").height(e), $(".article__content__pano").height(e - 180)
                },
                mouseDown: function(t) {
                    if ($(this).on(c.move, f.mouseMove), i.isiOS || i.isAndroid) {
                        var e = f.getTouchesCenterPoint(t);
                        h.beginX = e.x, h.beginY = e.y, e.touchesCount > 1 && (h.scaleBase(e.r), h.pinchStart())
                    } else h.beginX = t.pageX, h.beginY = t.pageY;
                    h.baseX = h.x, h.baseY = h.y, h.dragStart()
                },
                mouseUp: function(t) {
                    if (i.isiOS || i.isAndroid) {
                        var e = f.getTouchesCenterPoint(t);
                        e.touchesCount < 2 && h.pinchEnd()
                    }
                    $(this).off(c.move, f.mouseMove), h.dragEnd()
                },
                mouseLeave: function(t) {
                    i.isiOS || i.isAndroid || ($(this).off(c.move, f.mouseMove), h.dragEnd())
                },
                mouseMove: function(t) {
                    var e, n, s, o, r, a;
                    if (t.preventDefault(), i.isiOS || i.isAndroid) {
                        var c = f.getTouchesCenterPoint(t);
                        s = c.x, o = c.y, c.touchesCount > 1 && !i.isAndroid && h.scaleChange(c.r, c.x, c.y)
                    } else s = t.pageX, o = t.pageY;
                    e = h.baseX + (s - h.beginX), n = h.baseY + (o - h.beginY), r = e, a = n, h.x = e, h.y = n, h.drag(e, n), f.debugCircle({
                        x: s,
                        y: o
                    })
                },
                //初期の表示位置の制御
                getTouchesCenterPoint: function(t) {
                    var e = t.originalEvent.touches,
                        i = {
                            x: 0,
                            y: 0,
                            r: 0,
                            touchesCount: 0
                        },
                        n = 0,
                        s = {
                            x: 0,
                            y: 0
                        },
                        o = 0,
                        r = 0,
                        a = 0,
                        c = 0;
                    if (!e) return i;
                    n = e.length;
                    for (var h = 0; n > h; h++) s.x += e[h].pageX, s.y += e[h].pageY;
                    for (i.touchesCount = n, i.x = s.x / n, i.y = s.y / n, h = 0; n > h; h++) r = e[h].pageX - i.x, a = e[h].pageY - i.y, c = Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2)), o = c > o ? c : o;
                    return i.r = o, i
                },
                visited: function(t, e) {
                    var i = "",
                        n = [],
                        s = "",
                        o = "/special/amazon/",
                        r = "";
                    s = t, i = $.cookie(d.VISITED.NAME) ? $.cookie(d.VISITED.NAME) : "", n = "" === i ? [] : i.split(","), r = s.replace(new RegExp(o, "g"), "");
                    var a = $('a[href *= "' + s + '"].pjax').children(".maps__container__inner__map__btn__footprint");
                    $.inArray(r, n) < 0 && "" !== r && a.length > 0 && n.push(r), n.sort(function(t, e) {
                        return e > t ? -1 : t > e ? 1 : 0
                    }), i = n.join(","), $.cookie(d.VISITED.NAME, i, {
                        expires: d.VISITED.EXPIRES,
                        path: d.VISITED.PATH
                    });
                    for (var c = 0; c < n.length; c++) s = o + n[c] + e, $('a[href *= "' + s + '"].pjax').children(".maps__container__inner__map__btn__footprint").fadeIn(500)
                },
                debugCircle: function(t) {
                    var e, i, n;
                    e = t.x ? t.x : null, i = t.y ? t.y : null, n = t.r ? t.r : null, t.x && $(".maps__drag").css("left", t.x + "px"), t.y && $(".maps__drag").css("top", t.y + "px"), t.r && $(".maps__drag__circle").css({
                        width: 2 * t.r + "px",
                        height: 2 * t.r + "px",
                        "margin-left": -t.r + "px",
                        "margin-top": -t.r + "px"
                    })
                }
            };
        $(function() {
            f.init()
        })
    }()
}, function(t, e) {
    window.requestAnimationFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t, e) {
            window.setTimeout(t, 1e3 / 60)
        }
    }()
}, function(t, e) {
    $.fn.fadeInCss3 = function(t, e) {
        var i = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";
        t || (t = 400), e || (e = "linear");
        var n = this;
        setTimeout(function() {
            return $(n).show().css({
                animation: "fadein_css3_kf 400ms linear 0s 1 normal",
                "animation-duration": t + "ms",
                "animation-timing-function": e,
                "animation-fill-mode": "forwards",
                visibility: "visible"
            }).on(i, function() {
                $(this).off(i), $(this).css({
                    visibility: "visible",
                    animation: "none"
                })
            })
        }, 0)
    }, $.fn.fadeOutCss3 = function(t, e) {
        var i = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";
        return t || (t = 400), e || (e = "linear"), $(this).each(function() {
            $(this).filter(":not(:hidden)").length && $(this).show().css({
                animation: "fadeout_css3_kf 400ms linear 0s 1 normal",
                "animation-duration": t + "ms",
                "animation-timing-function": e,
                "animation-fill-mode": "forwards",
                visibility: "visible"
            }).on(i, function() {
                $(this).off(i), $(this).css({
                    visibility: "hidden",
                    animation: "none",
                    //display: "none"
                })
            })
        }), $(this)
    }, $.fn.zoomInCss3 = function(t, e) {
        var i = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";
        t || (t = 400), e || (e = "linear");
        var n = this;
        setTimeout(function() {
            return $(n).show().css({
                animation: "zoomin_css3_kf 400ms linear 0s 1 normal",
                "animation-duration": t + "ms",
                "animation-timing-function": e,
                "animation-fill-mode": "forwards",
                visibility: "visible"
            }).on(i, function() {
                $(this).off(i), $(this).css({
                    visibility: "visible",
                    animation: "none"
                })
            })
        }, 0)
    }, $.fn.zoomOutCss3 = function(t, e) {
        var i = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";
        return t || (t = 400), e || (e = "linear"), $(this).each(function() {
            $(this).filter(":not(:hidden)").length && $(this).show().css({
                animation: "zoomout_css3_kf 400ms linear 0s 1 normal",
                "animation-duration": t + "ms",
                "animation-timing-function": e,
                "animation-fill-mode": "forwards",
                visibility: "visible"
            }).on(i, function() {
                $(this).off(i), $(this).css({
                    visibility: "hidden",
                    animation: "none",
                    //display: "none"
                })
            })
        }), $(this)
    }
}, function(module, exports) {
    !new function(window, document, undefined, $) {
        "use strict";
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                t.NAME = "pjax", t.NAMESPACE = jQuery
            }(e = t.DEF || (t.DEF = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            ! function(t) {
                t[t.blank = 0] = "blank", t[t.initiate = 1] = "initiate", t[t.open = 2] = "open", t[t.pause = 3] = "pause", t[t.lock = 4] = "lock", t[t.seal = 5] = "seal", t[t.error = 6] = "error", t[t.crash = 7] = "crash", t[t.terminate = 8] = "terminate", t[t.close = 9] = "close"
            }(t.State || (t.State = {})), t.State, t.EVENT = {
                PJAX: t.DEF.NAME.toLowerCase(),
                CLICK: "click",
                SUBMIT: "submit",
                POPSTATE: "popstate",
                SCROLL: "scroll"
            }
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {}(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                var e;
                ! function(t) {}(e = t.APP || (t.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                var e;
                ! function(t) {
                    var e;
                    ! function(t) {}(e = t.DATA || (t.DATA = {}))
                }(e = t.APP || (t.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            function e(t, e) {
                var i = t.prototype;
                e = e.reverse();
                for (var n = e.length; n--;) {
                    var s = e[n].prototype;
                    for (var o in s) "constructor" !== o && i[o] && s.hasOwnProperty(o) && (i[o] = s[o])
                }
            }

            function i() {
                function t(t) {
                    var e = 16 * Math.random() | 0,
                        i = "x" == t ? e : 3 & e | 8;
                    return i.toString(16).toUpperCase()
                }
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, t)
            }

            function n(t, e) {
                if (!Object.freeze || t === t.window || "ownerDocument" in t) return t;
                if (!Object.isFrozen(t) && Object.freeze(t), !e) return t;
                for (var i in t) {
                    var s = t[i];
                    ~"object,function".indexOf(typeof s) && s && n(s, e)
                }
                return t
            }

            function s(t, e) {
                if (!Object.seal || t === t.window || "ownerDocument" in t) return t;
                if (!Object.isSealed(t) && Object.seal(t), !e) return t;
                for (var i in t) {
                    var n = t[i];
                    ~"object,function".indexOf(typeof n) && n && s(n, e)
                }
                return t
            }
            t.MIXIN = e, t.UUID = i, t.FREEZE = n, t.SEAL = s
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {}(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i = function() {
                    function e(e) {
                        this.NAME = t.DEF.NAME, this.NAMESPACE = t.DEF.NAMESPACE, this.UUID = t.UUID(), this.state_ = t.State.blank, this.state_ = e
                    }
                    return e.prototype.MAIN = function(t) {
                        for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                        return this.main_.apply(this, [t].concat(e))
                    }, e.prototype.main_ = function(t) {
                        for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                        return t
                    }, e
                }();
                e.Template = i
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i = function() {
                    function e(e) {
                        this.UUID = t.UUID(), this.state_ = t.State.blank, this.state_ = e
                    }
                    return e
                }();
                e.Template = i
            }(e = t.VIEW || (t.VIEW = {}))
        }(MODULE || (MODULE = {}));
        var __extends = this && this.__extends || function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            },
            MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i = function(e) {
                    function i(i, n, s, o) {
                        var r = this;
                        e.call(this, t.State.initiate), this.model_ = i, this.controller_ = n, this.context_ = s, this.handlers = {
                            click: function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
                                r.controller_.click(t)
                            },
                            submit: function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
                                r.controller_.submit(t)
                            },
                            popstate: function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
                                r.controller_.popstate(t)
                            },
                            scroll: function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
                                r.controller_.scroll(t)
                            }
                        }, t.FREEZE(this), this.observe_(o)
                    }
                    return __extends(i, e), i.prototype.observe_ = function(t) {
                        return this.release_(t), t.link && this.context_.delegate(t.link, t.nss.event.click, this.handlers.click), t.form && this.context_.delegate(t.form, t.nss.event.submit, this.handlers.submit), jQuery(window).bind(t.nss.event.popstate, this.handlers.popstate), t.database.active && t.fix.scroll && jQuery(window).bind(t.nss.event.scroll, this.handlers.scroll), this
                    }, i.prototype.release_ = function(t) {
                        return t.link && this.context_.undelegate(t.link, t.nss.event.click), t.form && this.context_.undelegate(t.form, t.nss.event.submit), jQuery(window).unbind(t.nss.event.popstate), t.database.active && t.fix.scroll && jQuery(window).unbind(t.nss.event.scroll), this
                    }, i
                }(e.Template);
                e.Main = i
            }(e = t.VIEW || (t.VIEW = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            t.View = t.VIEW.Main
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i = function() {
                    function e() {
                        t.FREEZE(this)
                    }
                    return e.prototype.enable = function() {
                        return t.Model.singleton().enable(), this
                    }, e.prototype.disable = function() {
                        return t.Model.singleton().disable(), this
                    }, e.prototype.click = function(e, i) {
                        var n;
                        switch (typeof e) {
                            case "undefined":
                                n = jQuery(this).filter("a").first().clone();
                                break;
                            case "object":
                                n = jQuery(e).clone();
                                break;
                            case "string":
                                i = jQuery.extend(!0, {}, i, {
                                    href: e
                                }), n = jQuery("<a/>", i);
                                break;
                            default:
                                return this
                        }
                        var s = t.Model.singleton().configure(n[0]);
                        return s && n.first().one(s.nss.event.click, function() {
                            for (var e = [], i = 0; i < arguments.length; i++) e[i - 0] = arguments[i];
                            return t.Controller.singleton().click(e)
                        }).click(), this
                    }, e.prototype.submit = function(e, i, n) {
                        var s, o, r, a = document.createDocumentFragment();
                        switch (typeof e) {
                            case "undefined":
                                s = jQuery(this).filter("form").first().clone();
                                break;
                            case "object":
                                s = jQuery(e).clone();
                                break;
                            case "string":
                                i = jQuery.extend(!0, {}, i, {
                                    action: e
                                }), o = n instanceof Array && Array || n instanceof Object && Object || undefined;
                                for (var c in n) {
                                    switch (o) {
                                        case Object:
                                            if (!Object.prototype.hasOwnProperty.call(n, c)) continue;
                                            r = jQuery("<textarea/>", {
                                                name: c
                                            }).val(n[c]);
                                            break;
                                        case Array:
                                            n[c].attrs = n[c].attrs || {}, n[c].attrs.name = n[c].name || n[c].attrs.name, n[c].attrs.type = n[c].type || n[c].attrs.type, r = jQuery("<" + n[c].tag + "/>", n[c].attrs).val(n[c].value);
                                            break;
                                        default:
                                            continue
                                    }
                                    a.appendChild(r[0])
                                }
                                s = jQuery("<form/>", i).append(a);
                                break;
                            default:
                                return this
                        }
                        var h = t.Model.singleton().configure(s[0]);
                        return h && s.first().one(h.nss.event.submit, function() {
                            for (var e = [], i = 0; i < arguments.length; i++) e[i - 0] = arguments[i];
                            return t.Controller.singleton().submit(e)
                        }).submit(), this
                    }, e.prototype.getCache = function(e) {
                        void 0 === e && (e = window.location.href);
                        var i = t.Model.singleton().getCache(e);
                        return i && (i = {
                            data: i.data,
                            textStatus: i.textStatus,
                            jqXHR: i.jqXHR,
                            expires: i.expires
                        }), i
                    }, e.prototype.setCache = function(e, i, n, s) {
                        switch (void 0 === e && (e = window.location.href), arguments.length) {
                            case 0:
                                return this.setCache(e, document.documentElement.outerHTML);
                            case 1:
                                return this.setCache(e, null);
                            case 2:
                            case 3:
                            case 4:
                            default:
                                t.Model.singleton().setCache(e, i, n, s)
                        }
                        return this
                    }, e.prototype.removeCache = function(e) {
                        return void 0 === e && (e = window.location.href), t.Model.singleton().removeCache(e), this
                    }, e.prototype.clearCache = function() {
                        return t.Model.singleton().clearCache(), this
                    }, e.prototype.follow = function(e, i, n, s) {
                        if (!t.Model.singleton().isDeferrable) return !1;
                        var o = e.currentTarget;
                        return i.follow = !0, i.host = n || "", isFinite(e.timeStamp) && (i.timeStamp = s || e.timeStamp), t.Model.singleton().setPageXHR(i), jQuery.when(i).done(function() {
                            !t.Model.singleton().getCache(o.href) && t.Model.singleton().isOperatable(e) && t.Model.singleton().setCache(o.href, undefined, undefined, i)
                        }), jQuery[t.DEF.NAME].click(o.href), !0
                    }, e.prototype.bypass = function() {
                        return t.Model.singleton().bypass()
                    }, e.prototype.host = function() {
                        return t.Model.singleton().host()
                    }, e
                }();
                e.Functions = i
            }(e = t.CONTROLLER || (t.CONTROLLER = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i = function() {
                    function e() {
                        t.FREEZE(this)
                    }
                    return e
                }();
                e.Methods = i
            }(e = t.CONTROLLER || (t.CONTROLLER = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i = function() {
                    function e(e, i) {
                        this.UUID = t.UUID(), this.state_ = t.State.blank, this.PROPERTIES = [], this.state_ = i
                    }
                    return e.prototype.EXTEND = function(e) {
                        return e instanceof t.DEF.NAMESPACE ? (e instanceof jQuery && (e = e.add()), this.REGISTER_FUNCTION(e), this.REGISTER_METHOD(e)) : (e !== this.EXTENSION && (e = this.EXTENSION), this.REGISTER_FUNCTION(e)), this.UPDATE_PROPERTIES(e), e
                    }, e.prototype.REGISTER = function(e) {
                        var i = this;
                        this.EXTENSION = this.EXTENSION || function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n - 0] = arguments[n];
                            var s = i.EXTEND(this);
                            return t = [s].concat(t), t = i.EXEC.apply(i, t), t instanceof Array ? e.MAIN.apply(e, t) : t
                        }, this.EXTEND(this.EXTENSION), window[t.DEF.NAMESPACE] = window[t.DEF.NAMESPACE] || {}, t.DEF.NAMESPACE.prototype ? t.DEF.NAMESPACE[t.DEF.NAME] = t.DEF.NAMESPACE.prototype[t.DEF.NAME] = this.EXTENSION : t.DEF.NAMESPACE[t.DEF.NAME] = this.EXTENSION
                    }, e.prototype.EXEC = function() {
                        return this.exec_.apply(this, arguments)
                    }, e.prototype.exec_ = function(t) {
                        for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                        return [t].concat(e)
                    }, e.prototype.REGISTER_FUNCTION = function(t) {
                        var e = this.FUNCTIONS;
                        for (var i in e) "constructor" !== i && (t[i] = e[i]);
                        return t
                    }, e.prototype.REGISTER_METHOD = function(t) {
                        var e = this.METHODS;
                        for (var i in e) "constructor" !== i && (t[i] = e[i]);
                        return t
                    }, e.prototype.UPDATE_PROPERTIES = function(t) {
                        var e, i, n, s = this.PROPERTIES;
                        for (e = 0, i = s.length; i > e; e++) "constructor" !== e && (n = s[e], t[n] && (t[n] = t[n]()));
                        return t
                    }, e
                }();
                e.Template = i
            }(e = t.CONTROLLER || (t.CONTROLLER = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i = function(i) {
                    function n(n) {
                        i.call(this, n, t.State.initiate), this.model_ = n, this.FUNCTIONS = new e.Functions, this.METHODS = new e.Methods, this.REGISTER(n), t.FREEZE(this)
                    }
                    return __extends(n, i), n.prototype.exec_ = function(t) {
                        var e = [].slice.call(arguments, 1, 2),
                            i = e[0];
                        switch (typeof i) {
                            case "undefined":
                            case "object":
                                break;
                            default:
                                return t
                        }
                        return [t].concat(e)
                    }, n.prototype.view = function(e, i) {
                        return new t.View(this.model_, this, e, i)
                    }, n.prototype.click = function(t) {
                        this.model_.click.apply(this.model_, t)
                    }, n.prototype.submit = function(t) {
                        this.model_.submit.apply(this.model_, t)
                    }, n.prototype.popstate = function(t) {
                        this.model_.popstate.apply(this.model_, t)
                    }, n.prototype.scroll = function(t) {
                        this.model_.scroll.apply(this.model_, t)
                    }, n
                }(e.Template);
                e.Main = i;
                var n = function() {
                    function e(n) {
                        void 0 === n && (n = t.Model.singleton()), e.instance_ = e.instance_ || new i(n)
                    }
                    return e.singleton = function() {
                        return e.instance_
                    }, e.prototype.singleton = function() {
                        return e.singleton()
                    }, e
                }();
                e.Singleton = n
            }(e = t.CONTROLLER || (t.CONTROLLER = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            t.Controller = t.CONTROLLER.Singleton
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                var e = function() {
                    function t(t, e) {
                        void 0 === t && (t = 1), void 0 === e && (e = 0), this.list_ = [], this.config_ = {
                            mode: 1,
                            size: 0
                        }, this.table_ = {}, this.option_ = {}, this.config_.mode = t || this.config_.mode, this.config_.size = e || this.config_.size
                    }
                    return t.prototype.define = function(t, e, i) {
                        void 0 === e && (e = this.config_.mode), void 0 === i && (i = this.config_.size), this.option_[t] = {
                            mode: e,
                            size: i
                        }, this.table_[t] = []
                    }, t.prototype.reserve = function(t, e) {
                        switch (typeof t) {
                            case "string":
                                !this.option_[t] && this.define(t);
                                var i = this.option_[t],
                                    n = this.table_[t],
                                    s = [].slice.call(arguments, 2);
                                break;
                            case "function":
                                e = t, t = undefined;
                                var i = this.config_,
                                    n = this.list_,
                                    s = [].slice.call(arguments, 1);
                                break;
                            default:
                                return
                        }
                        if ("function" == typeof e) {
                            var o;
                            o = i.mode > 0 ? "push" : "unshift", n[o]([e, s.shift(), s])
                        }
                    }, t.prototype.digest = function(t, e) {
                        switch (typeof t) {
                            case "string":
                                !this.option_[t] && this.define(t), e = e || 0;
                                var i = this.option_[t],
                                    n = this.table_[t];
                                if (!n) return;
                                break;
                            case "number":
                            case "undefined":
                                e = t || 0, t = undefined;
                                var i = this.config_,
                                    n = this.list_;
                                break;
                            default:
                                return
                        }
                        n.length > i.size && i.size && (i.mode > 0 ? n.splice(0, n.length - i.size) : n.splice(n.length - i.size, n.length));
                        var s;
                        for (e = e || -1; s = e-- && n.pop();) s.shift().apply(s.shift() || window, s.shift() || []);
                        if (undefined === t) {
                            var o = this.table_;
                            for (var r in o) this.digest(r, e)
                        }
                    }, t.prototype.clear = function(t) {
                        switch (typeof t) {
                            case "string":
                                !this.option_[t] && this.define(t), this.table_[t].splice(0, this.table_[t].length);
                                break;
                            default:
                                var e = this.table_;
                                for (var i in e) this.clear(i)
                        }
                    }, t
                }();
                t.Task = e
            }(e = t.LIBRARY || (t.LIBRARY = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                var e;
                ! function(t) {
                    var e;
                    ! function(t) {
                        var e;
                        ! function(t) {
                            var e;
                            ! function(t) {
                                var e = function() {
                                    function t(t) {
                                        this.task_ = t, this.labels_ = {
                                            done: "done",
                                            fail: "fail",
                                            always: "always"
                                        }
                                    }
                                    return t.prototype.done = function(t) {
                                        return this.task_.reserve(this.labels_.done, t), this
                                    }, t.prototype.fail = function(t) {
                                        return this.task_.reserve(this.labels_.fail, t), this
                                    }, t.prototype.always = function(t) {
                                        return this.task_.reserve(this.labels_.always, t), this
                                    }, t.prototype.resolve = function() {
                                        return this.task_.clear(this.labels_.fail), this.task_.digest(this.labels_.done), this.task_.digest(this.labels_.always), this
                                    }, t.prototype.reject = function() {
                                        return this.task_.clear(this.labels_.done), this.task_.digest(this.labels_.fail), this.task_.digest(this.labels_.always), this
                                    }, t
                                }();
                                t.Task = e;
                                var i = function(t) {
                                    function e() {
                                        t.apply(this, arguments)
                                    }
                                    return __extends(e, t), e
                                }(e);
                                t.TaskUp = i;
                                var n = function(t) {
                                    function e() {
                                        t.apply(this, arguments)
                                    }
                                    return __extends(e, t), e.prototype.done = function(t) {
                                        return this
                                    }, e.prototype.fail = function(t) {
                                        return this
                                    }, e.prototype.always = function(t) {
                                        return this
                                    }, e.prototype.resolve = function() {
                                        return this
                                    }, e
                                }(e);
                                t.TaskDown = n
                            }(e = t.STATEFUL || (t.STATEFUL = {}))
                        }(e = t.DB || (t.DB = {}))
                    }(e = t.DATA || (t.DATA = {}))
                }(e = t.APP || (t.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i;
                ! function(e) {
                    var i;
                    ! function(e) {
                        var i;
                        ! function(e) {
                            var i = function() {
                                function i(e, i, n) {
                                    var s = this;
                                    this.origin_ = e, this.connect_ = i, this.extend_ = n, this.state_ = function() {
                                        return s.origin_.state()
                                    }, this.task_ = new t.LIBRARY.Task, this.cache_ = {
                                        stateful: {}
                                    }
                                }
                                return i.prototype.stateful_ = function() {
                                    var i = this,
                                        n = function(t, e) {
                                            return i.cache_.stateful[i.state_()] = i.cache_.stateful[i.state_()] || new t(i.origin_, i.connect_, i.extend_, i.task_, e)
                                        };
                                    switch (this.state_()) {
                                        case t.State.blank:
                                            return n(e.STATE.Blank, !0);
                                        case t.State.initiate:
                                            return n(e.STATE.Initiate, !0);
                                        case t.State.open:
                                            return n(e.STATE.Open, !0);
                                        case t.State.close:
                                            return n(e.STATE.Close, !0);
                                        case t.State.terminate:
                                            return n(e.STATE.Terminate, !0);
                                        case t.State.error:
                                            return n(e.STATE.Error, !1);
                                        default:
                                            return n(e.STATE.Except, !1)
                                    }
                                }, i.prototype.open = function() {
                                    return this.stateful_().open()
                                }, i.prototype.resolve = function() {
                                    return this.stateful_().resolve()
                                }, i.prototype.reject = function() {
                                    return this.stateful_().reject()
                                }, i
                            }();
                            e.Stateful = i
                        }(i = e.DB || (e.DB = {}))
                    }(i = e.DATA || (e.DATA = {}))
                }(i = e.APP || (e.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                var e;
                ! function(t) {
                    var e;
                    ! function(t) {
                        var e;
                        ! function(t) {
                            var e;
                            ! function(e) {
                                var i = function() {
                                    function e(e, i, n, s, o) {
                                        this.origin = e, this.connect = i, this.extend = n, this.task = o ? new t.STATEFUL.TaskUp(s) : new t.STATEFUL.TaskDown(s)
                                    }
                                    return e.prototype.open = function() {
                                        return this.task
                                    }, e.prototype.resolve = function() {}, e.prototype.reject = function() {
                                        this.task.reject()
                                    }, e
                                }();
                                e.Default = i;
                                var n = function(t) {
                                    function e() {
                                        t.apply(this, arguments)
                                    }
                                    return __extends(e, t), e.prototype.open = function() {
                                        return this.connect(), this.task
                                    }, e.prototype.resolve = function() {
                                        this.open()
                                    }, e.prototype.reject = function() {
                                        this.task.reject()
                                    }, e
                                }(i);
                                e.Blank = n;
                                var s = function(t) {
                                    function e() {
                                        t.apply(this, arguments)
                                    }
                                    return __extends(e, t), e.prototype.open = function() {
                                        return this.task
                                    }, e.prototype.resolve = function() {}, e.prototype.reject = function() {
                                        this.task.reject()
                                    }, e
                                }(i);
                                e.Initiate = s;
                                var o = function(t) {
                                    function e() {
                                        t.apply(this, arguments)
                                    }
                                    return __extends(e, t), e.prototype.open = function() {
                                        var t = this;
                                        return this.extend(), setTimeout(function() {
                                            return t.origin.resolve()
                                        }, 1), this.task
                                    }, e.prototype.resolve = function() {
                                        this.task.resolve()
                                    }, e.prototype.reject = function() {
                                        this.task.reject()
                                    }, e
                                }(i);
                                e.Open = o;
                                var r = function(t) {
                                    function e() {
                                        t.apply(this, arguments)
                                    }
                                    return __extends(e, t), e.prototype.open = function() {
                                        return this.connect(), this.task
                                    }, e.prototype.resolve = function() {
                                        this.open()
                                    }, e.prototype.reject = function() {
                                        this.task.reject()
                                    }, e
                                }(i);
                                e.Close = r;
                                var a = function(t) {
                                    function e() {
                                        t.apply(this, arguments)
                                    }
                                    return __extends(e, t), e
                                }(i);
                                e.Terminate = a;
                                var c = function(t) {
                                    function e() {
                                        t.apply(this, arguments)
                                    }
                                    return __extends(e, t), e
                                }(i);
                                e.Error = c;
                                var h = function(t) {
                                    function e() {
                                        t.apply(this, arguments)
                                    }
                                    return __extends(e, t), e
                                }(i);
                                e.Except = h
                            }(e = t.STATE || (t.STATE = {}))
                        }(e = t.DB || (t.DB = {}))
                    }(e = t.DATA || (t.DATA = {}))
                }(e = t.APP || (t.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                var e;
                ! function(t) {
                    var e;
                    ! function(t) {
                        var e = function() {
                            function t(t) {
                                this.DB = t, this.autoIncrement = !1, this.indexes = [], this.size = 100, this.buffer = {}, this.diff = {}
                            }
                            return t.prototype.accessStore = function(t, e) {
                                var i = this;
                                void 0 === e && (e = "readwrite");
                                try {
                                    var n = this.DB.database(),
                                        s = n && n.transaction(this.name, e).objectStore(this.name)
                                } catch (o) {}
                                s ? t(s) : this.DB.open().done(function() {
                                    return i.accessStore(t)
                                })
                            }, t.prototype.accessCount = function() {
                                var t = "string" == typeof arguments[0] && arguments[0],
                                    e = arguments[t ? 1 : 0];
                                this.accessStore(function(i) {
                                    var n = t ? i.index(t).count() : i.count();
                                    n.onsuccess = function() {
                                        e.apply(this, [].slice.call(arguments, 1).concat(this.result))
                                    }
                                })
                            }, t.prototype.accessRecord = function(t, e, i) {
                                this.accessStore(function(i) {
                                    i.get(t).onsuccess = e
                                }, i)
                            }, t.prototype.accessCursor = function(t, e, i, n) {
                                this.accessStore(function(s) {
                                    var o;
                                    o = i && e ? s.index(t).openCursor(e, i) : e ? s.index(t).openCursor(e) : s.openCursor(), o.onsuccess = n
                                })
                            }, t.prototype.accessAll = function(t, e, i, n) {
                                "function" == typeof t && (n = t, t = null, e = null, i = null), this.accessCursor(t, e, i, n)
                            }, t.prototype.get = function(t, e) {
                                var i = this;
                                this.accessRecord(t, function(t) {
                                    i.setBuffer(t.target.result), e(t)
                                })
                            }, t.prototype.set = function(t, e) {
                                var i = this;
                                t = jQuery.extend(!0, {}, t), this.setBuffer(t, e), this.accessRecord(t[this.keyPath], function(n) {
                                    n.target.source.put(e ? jQuery.extend(!0, {}, n.target.result, t) : t), i.autoIncrement || delete i.diff[t[i.keyPath]]
                                })
                            }, t.prototype.remove = function(t) {
                                this.removeBuffer(t), this.accessStore(function(e) {
                                    e["delete"](t)
                                })
                            }, t.prototype.clear = function() {
                                this.clearBuffer(), this.accessStore(function(t) {
                                    t.clear()
                                })
                            }, t.prototype.clean = function() {
                                var t = this;
                                if (this.size && this.indexes.length) {
                                    var e = this.indexes[0].name,
                                        i = this.size;
                                    this.accessCount(e, function(n) {
                                        i >= n || (i = n - i, t.accessCursor(e, t.DB.IDBKeyRange.upperBound(1 / 0), "next", function(e) {
                                            if (e.target.result && i--) {
                                                var n = e.target.result;
                                                delete t.diff[n.primaryKey], n["delete"](), n["continue"]()
                                            }
                                        }))
                                    })
                                }
                            }, t.prototype.loadBuffer = function(t) {
                                function e() {
                                    if (!this.result) return t && t();
                                    var e = this.result;
                                    i[e.primaryKey] = e.value, e["continue"]()
                                }
                                if (!this.autoIncrement) {
                                    var i = this.buffer;
                                    this.indexes.length ? this.DB.IDBKeyRange && this.accessAll(this.indexes[0].name, this.DB.IDBKeyRange.upperBound(1 / 0), "prev", e) : this.accessAll(e)
                                }
                            }, t.prototype.saveBuffer = function(t) {
                                var e = this;
                                this.autoIncrement || this.accessStore(function(i) {
                                    for (var n in e.diff) i.put(e.diff[n]);
                                    t && t()
                                })
                            }, t.prototype.getBuffers = function() {
                                return this.buffer
                            }, t.prototype.setBuffers = function(t, e) {
                                for (var i in t) this.setBuffer(t[i], e);
                                return this.buffer
                            }, t.prototype.getBuffer = function(t) {
                                return this.autoIncrement ? void 0 : this.buffer[t]
                            }, t.prototype.setBuffer = function(t, e) {
                                if (!this.autoIncrement) {
                                    if (!t) return t;
                                    var i = t[this.keyPath];
                                    return this.buffer[i] = e ? jQuery.extend(!0, {}, this.buffer[i], t) : t, this.diff[i] = this.buffer[i], this.buffer[i]
                                }
                            }, t.prototype.removeBuffer = function(t) {
                                if (!this.autoIncrement) {
                                    var e = this.buffer[t];
                                    return delete this.buffer[t], delete this.diff[t], e
                                }
                            }, t.prototype.clearBuffer = function() {
                                if (!this.autoIncrement) {
                                    for (var t in this.buffer) delete this.buffer[t];
                                    for (var t in this.diff) delete this.diff[t]
                                }
                            }, t
                        }();
                        t.Store = e
                    }(e = t.DATA || (t.DATA = {}))
                }(e = t.APP || (t.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                var e;
                ! function(t) {
                    var e;
                    ! function(t) {
                        var e;
                        ! function(e) {
                            var i = function(t) {
                                function e() {
                                    t.apply(this, arguments), this.name = "meta", this.keyPath = "key", this.autoIncrement = !1, this.size = 0
                                }
                                return __extends(e, t), e
                            }(t.Store);
                            e.Meta = i
                        }(e = t.STORE || (t.STORE = {}))
                    }(e = t.DATA || (t.DATA = {}))
                }(e = t.APP || (t.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                var e;
                ! function(t) {
                    var e;
                    ! function(t) {
                        var e;
                        ! function(e) {
                            var i = function(t) {
                                function e() {
                                    t.apply(this, arguments), this.name = "history", this.keyPath = "url", this.autoIncrement = !1, this.indexes = [{
                                        name: "date",
                                        keyPath: "date",
                                        option: {
                                            unique: !1
                                        }
                                    }], this.size = 300
                                }
                                return __extends(e, t), e
                            }(t.Store);
                            e.History = i
                        }(e = t.STORE || (t.STORE = {}))
                    }(e = t.DATA || (t.DATA = {}))
                }(e = t.APP || (t.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                var e;
                ! function(t) {
                    var e;
                    ! function(t) {
                        var e;
                        ! function(e) {
                            var i = function(t) {
                                function e() {
                                    t.apply(this, arguments), this.name = "server", this.keyPath = "host", this.autoIncrement = !1, this.indexes = [{
                                        name: "score",
                                        keyPath: "score",
                                        option: {
                                            unique: !1
                                        }
                                    }], this.size = 100
                                }
                                return __extends(e, t), e
                            }(t.Store);
                            e.Server = i
                        }(e = t.STORE || (t.STORE = {}))
                    }(e = t.DATA || (t.DATA = {}))
                }(e = t.APP || (t.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i;
                ! function(e) {
                    var i;
                    ! function(e) {
                        var i = function() {
                            function i() {
                                var i = this;
                                this.IDBFactory = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB, this.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.mozIDBKeyRange || window.msIDBKeyRange, this.name = t.DEF.NAME, this.version = 10, this.refresh = 10, this.upgrade = 0, this.revision = 0, this.state_ = t.State.blank, this.stateful = new e.DB.Stateful(this, function() {
                                    return i.connect()
                                }, function() {
                                    return i.extend()
                                }), this.age = 1e4, this.expires = 0, this.timer = 0, this.stores = {
                                    meta: new e.STORE.Meta(this),
                                    history: new e.STORE.History(this),
                                    server: new e.STORE.Server(this)
                                }, this.meta = {
                                    version: {
                                        key: "version",
                                        value: undefined
                                    },
                                    update: {
                                        key: "update",
                                        value: undefined
                                    },
                                    revision: {
                                        key: "revision",
                                        value: undefined
                                    }
                                }
                            }
                            return i.prototype.state = function() {
                                return this.state_
                            }, i.prototype.extend = function() {
                                var t = this;
                                this.expires = (new Date).getTime() + this.age, clearTimeout(this.timer), this.timer = setTimeout(function() {
                                    return t.check()
                                }, this.age)
                            }, i.prototype.check = function() {
                                !this.age || (new Date).getTime() <= this.expires || t.State.open === this.state() && this.close()
                            }, i.prototype.database = function() {
                                return this.extend(), this.database_
                            }, i.prototype.configure = function(t, e) {
                                this.revision = t, this.refresh = e
                            }, i.prototype.up = function() {
                                this.state_ = t.State.blank, this.open()
                            }, i.prototype.down = function() {
                                this.reject(), this.close(), this.state_ = t.State.error
                            }, i.prototype.open = function() {
                                return !this.IDBFactory && this.down(), this.stateful.open()
                            }, i.prototype.close = function() {
                                this.database_ && this.database_.close && this.database_.close(), this.state_ = t.State.close
                            }, i.prototype.resolve = function() {
                                this.stateful.resolve()
                            }, i.prototype.reject = function() {
                                this.stateful.reject()
                            }, i.prototype.connect = function() {
                                this.create()
                            }, i.prototype.create = function() {
                                var e = this;
                                try {
                                    this.close(), this.state_ = t.State.initiate;
                                    var i = this.IDBFactory.open(this.name, this.upgrade ? this.version : 1),
                                        n = function() {
                                            e.verify(function() {
                                                e.state_ = t.State.open, e.resolve(), e.extend()
                                            })
                                        };
                                    if ("done" === i.readyState) this.database_ = i.result, this.database() ? n() : this.format();
                                    else {
                                        var s = setTimeout(function() {
                                            return e.down()
                                        }, 3e3);
                                        i.onblocked = function() {
                                            clearTimeout(s), e.database_ = i.result, e.close(), setTimeout(function() {
                                                return e.open()
                                            }, 1e3)
                                        }, i.onupgradeneeded = function() {
                                            clearTimeout(s), e.database_ = i.result, e.createStores()
                                        }, i.onsuccess = function() {
                                            clearTimeout(s), e.database_ = i.result, n()
                                        }, i.onerror = function() {
                                            clearTimeout(s), e.database_ = i.result, e.down()
                                        }
                                    }
                                } catch (o) {
                                    this.down()
                                }
                            }, i.prototype.destroy = function(e, i) {
                                var n = this;
                                try {
                                    this.close(), this.state_ = t.State.terminate;
                                    var s = this.IDBFactory.deleteDatabase(this.name);
                                    s && (s.onsuccess = e, s.onerror = i), setTimeout(function() {
                                        return t.State.terminate === n.state() && n.down()
                                    }, 3e3)
                                } catch (o) {
                                    this.down()
                                }
                            }, i.prototype.format = function() {
                                var t = this;
                                this.destroy(function() {
                                    return t.up()
                                }, function() {
                                    return t.down()
                                })
                            }, i.prototype.verify = function(t) {
                                var e = this,
                                    i = this.database(),
                                    n = this.version,
                                    s = this.revision,
                                    o = this.meta,
                                    r = this.stores.meta,
                                    a = function() {
                                        return e.format()
                                    };
                                if (i.objectStoreNames.length !== Object.keys(this.stores).length) return void a();
                                for (var c in this.stores) {
                                    var h = i.transaction(this.stores[c].name, "readonly").objectStore(this.stores[c].name);
                                    switch (!1) {
                                        case h.keyPath === this.stores[c].keyPath:
                                        case h.indexNames.length === this.stores[c].indexes.length:
                                            return void a()
                                    }
                                }
                                var l = !1;
                                r.get(o.version.key, function(t) {
                                    if (!l) {
                                        var i = t.target.result;
                                        !i || e.upgrade ? r.set(r.setBuffer({
                                            key: o.version.key,
                                            value: n
                                        })) : i.value > n ? (l = !0, e.down()) : i.value < n && (l = !0, a())
                                    }
                                }), r.get(o.revision.key, function(t) {
                                    if (!l) {
                                        var i = t.target.result;
                                        i ? i.value > s ? (l = !0, e.down()) : i.value < s && (l = !0, a()) : r.set(r.setBuffer({
                                            key: o.revision.key,
                                            value: s
                                        }))
                                    }
                                }), r.get(o.update.key, function(i) {
                                    if (!l) {
                                        var n = i.target.result,
                                            s = Math.floor((new Date).getTime() / 864e5);
                                        n && e.refresh ? n.value > s ? t() : n.value <= s && a() : (r.set(r.setBuffer({
                                            key: o.update.key,
                                            value: s + e.refresh
                                        })), t())
                                    }
                                })
                            }, i.prototype.createStores = function() {
                                this.destroyStores();
                                var t = this.database();
                                for (var e in this.stores)
                                    for (var i, n = this.stores[e], s = t.createObjectStore(n.name, {
                                            keyPath: n.keyPath,
                                            autoIncrement: n.autoIncrement
                                        }), o = 0, r = n.indexes; i = r[o]; o++) s.createIndex(i.name, i.keyPath, i.option)
                            }, i.prototype.destroyStores = function() {
                                for (var t = this.database(), e = t.objectStoreNames ? t.objectStoreNames.length : 0; e--;) t.deleteObjectStore(t.objectStoreNames[e])
                            }, i
                        }();
                        e.Database = i
                    }(i = e.DATA || (e.DATA = {}))
                }(i = e.APP || (e.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                var e;
                ! function(t) {
                    var e;
                    ! function(t) {
                        var e = function() {
                            function t(t) {
                                this.age_ = t
                            }
                            return t.prototype.getCookie = function(t) {
                                if (t && window.navigator.cookieEnabled) {
                                    var e = new RegExp("(?:^|; )(" + encodeURIComponent(t) + "=[^;]*)"),
                                        i = (document.cookie.match(e) || []).pop();
                                    return i && decodeURIComponent(i.split("=").pop())
                                }
                            }, t.prototype.setCookie = function(t, e, i) {
                                return void 0 === i && (i = {}), t && window.navigator.cookieEnabled ? (i.age = i.age || this.age_, document.cookie = [encodeURIComponent(t) + "=" + encodeURIComponent(e), i.age ? "; expires=" + new Date((new Date).getTime() + 1e3 * i.age).toUTCString() : "", i.path ? "; path=" + i.path : "; path=/", i.secure ? "; secure" : ""].join(""), this.getCookie(t)) : void 0
                            }, t
                        }();
                        t.Cookie = e
                    }(e = t.DATA || (t.DATA = {}))
                }(e = t.APP || (t.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                var e;
                ! function(t) {
                    var e;
                    ! function(t) {
                        var e = function() {
                            function e() {
                                this.DB = new t.Database, this.Cookie = new t.Cookie(864e3)
                            }
                            return e
                        }();
                        t.Main = e
                    }(e = t.DATA || (t.DATA = {}))
                }(e = t.APP || (t.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                var e = function() {
                    function t() {}
                    return t.trim = function(t) {
                        if (t = "string" == typeof t ? t : String(0 === t && t.toString() || ""), t.trim) t = t.trim();
                        else if (t = t.replace(/^[\s\uFEFF\xA0]+/, "")) {
                            var e = /[\s\uFEFF\xA0]/,
                                i = t.length,
                                n = i % 8;
                            t: {
                                for (; n--;)
                                    if (!e.test(t.charAt(--i))) break t;for (; i;) {
                                    if (!e.test(t.charAt(--i))) break t;
                                    if (!e.test(t.charAt(--i))) break t;
                                    if (!e.test(t.charAt(--i))) break t;
                                    if (!e.test(t.charAt(--i))) break t;
                                    if (!e.test(t.charAt(--i))) break t;
                                    if (!e.test(t.charAt(--i))) break t;
                                    if (!e.test(t.charAt(--i))) break t;
                                    if (!e.test(t.charAt(--i))) break t
                                }
                            }
                            t = t.substring(0, i + 1)
                        }
                        return t
                    }, t.repeat = function(t, e) {
                        switch (t instanceof Array && "array" || typeof t) {
                            case "string":
                                var i = t;
                                return Array(e + 1).join(i);
                            case "array":
                                var n = t.length;
                                if (300 > e) {
                                    var s = Array(e);
                                    this.duff(-e, function(e) {
                                        return s[e] = t[e % n]
                                    })
                                } else {
                                    for (var s = t.slice(); 2 * s.length <= e;) s = s.concat(s);
                                    s = s.concat(s.slice(0, e - s.length))
                                }
                                return s
                        }
                    }, t.fire = function(t, e, i, n) {
                        return void 0 === e && (e = window), void 0 === i && (i = []), "function" == typeof t ? n ? setTimeout(function() {
                            t.apply(e || window, i)
                        }, 0) : t.apply(e || window, i) : t
                    }, t.duff = function(t, e) {
                        if (0 > t) {
                            for (var i = -t, n = i % 8; n--;) e(--i);
                            for (; i;) e(--i), e(--i), e(--i), e(--i), e(--i), e(--i), e(--i), e(--i)
                        } else {
                            for (var s = t, i = 0, n = s % 8, o = s / 8 ^ 0; n--;) e(i++);
                            for (; o--;) e(i++), e(i++), e(i++), e(i++), e(i++), e(i++), e(i++), e(i++)
                        }
                    }, t.duffEx = function(t, e) {
                        if (0 > t) {
                            var i = -t,
                                n = i % 8;
                            t: {
                                for (; n--;)
                                    if (!1 === e(--i)) break t;for (; i;) {
                                    if (!1 === e(--i)) break t;
                                    if (!1 === e(--i)) break t;
                                    if (!1 === e(--i)) break t;
                                    if (!1 === e(--i)) break t;
                                    if (!1 === e(--i)) break t;
                                    if (!1 === e(--i)) break t;
                                    if (!1 === e(--i)) break t;
                                    if (!1 === e(--i)) break t
                                }
                            }
                        } else {
                            var s = t,
                                i = 0,
                                n = s % 8,
                                o = s / 8 ^ 0;
                            t: {
                                for (; n--;)
                                    if (!1 === e(i++)) break t;for (; o--;) {
                                    if (!1 === e(i++)) break t;
                                    if (!1 === e(i++)) break t;
                                    if (!1 === e(i++)) break t;
                                    if (!1 === e(i++)) break t;
                                    if (!1 === e(i++)) break t;
                                    if (!1 === e(i++)) break t;
                                    if (!1 === e(i++)) break t;
                                    if (!1 === e(i++)) break t
                                }
                            }
                        }
                    }, t.normalizeUrl = function(t, e) {
                        void 0 === e && (e = !0);
                        var i;
                        return i = this.trim(t), i = /^([^:\/?#]+):\/\/[^\/?#.]+\.[^\/?#]+/i.test(i) ? i : function(t, e) {
                            return e.href = t, e.href
                        }(i, document.createElement("a")), i = encodeURI(decodeURI(i)), i = i.replace(/["`^|\\<>{}\[\]\s].*/, ""), i = e ? this.justifyPercentEncodingUrlCase_(t, i) : i
                    }, t.canonicalizeUrl = function(t) {
                        function e(t) {
                            return t.toUpperCase()
                        }
                        var i = this.normalizeUrl(t, !1);
                        return i = i.replace(/(?:%\w{2})+/g, e)
                    }, t.compareUrl = function(t, e) {
                        return t = this.canonicalizeUrl(t), e = this.canonicalizeUrl(e), t === e
                    }, t.justifyPercentEncodingUrlCase_ = function(t, e) {
                        function i(e) {
                            var i = ~t.indexOf(e.toUpperCase()) || ~t.indexOf(e.toLowerCase());
                            return i ? t.substr(~i, e.length) : e
                        }
                        return t === e ? e : e.replace(/(?:%\w{2})+/g, i)
                    }, t
                }();
                t.Utility = e
            }(e = t.LIBRARY || (t.LIBRARY = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i;
                ! function(e) {
                    var i = function() {
                        function i(i) {
                            this.model_ = i, this.data_ = new e.DATA.Main, this.stores_ = this.data_.DB.stores, this.util_ = t.LIBRARY.Utility
                        }
                        return i.prototype.getCookie = function(t) {
                            return this.data_.Cookie.getCookie(t)
                        }, i.prototype.setCookie = function(t, e, i) {
                            return this.data_.Cookie.setCookie(t, e, i)
                        }, i.prototype.connect = function(t) {
                            t.database.active ? (this.data_.DB.configure(t.database.revision, t.database.refresh), this.data_.DB.up(), this.saveTitle(), this.saveScrollPosition()) : this.data_.DB.down()
                        }, i.prototype.loadBuffers = function() {
                            for (var t in this.stores_) this.stores_[t].loadBuffer()
                        }, i.prototype.saveBuffers = function() {
                            for (var t in this.stores_) this.stores_[t].saveBuffer()
                        }, i.prototype.getHistoryBuffer = function(t) {
                            return this.stores_.history.getBuffer(this.model_.convertUrlToKey(t, !0))
                        }, i.prototype.loadTitle = function() {
                            var t = this,
                                e = this.model_.convertUrlToKey(window.location.href, !0),
                                i = this.stores_.history.getBuffer(e);
                            i && "string" == typeof i.title ? document.title = i.title : this.stores_.history.get(e, function(n) {
                                i = n.target.result, i && i.title && t.model_.compareKeyByUrl(e, t.util_.canonicalizeUrl(window.location.href)) && (document.title = i.title)
                            })
                        }, i.prototype.saveTitle = function(t, e) {
                            void 0 === t && (t = window.location.href), void 0 === e && (e = document.title);
                            var i = this.model_.convertUrlToKey(t, !0),
                                n = {
                                    url: i,
                                    title: e,
                                    date: (new Date).getTime(),
                                    scrollX: undefined,
                                    scrollY: undefined,
                                    host: undefined,
                                    expires: undefined
                                };
                            this.stores_.history.set(n, !0), this.stores_.history.clean()
                        }, i.prototype.loadScrollPosition = function() {
                            function t(t, e) {
                                "number" == typeof t && "number" == typeof e && window.scrollTo(parseInt(Number(t) + "", 10), parseInt(Number(e) + "", 10))
                            }
                            var e = this,
                                i = this.model_.convertUrlToKey(window.location.href, !0),
                                n = this.stores_.history.getBuffer(i);
                            n && "number" == typeof n.scrollX ? t(n.scrollX, n.scrollY) : this.stores_.history.get(i, function(s) {
                                n = s.target.result, n && "number" == typeof n.scrollX && e.model_.compareKeyByUrl(i, e.util_.canonicalizeUrl(window.location.href)) && t(n.scrollX, n.scrollY)
                            })
                        }, i.prototype.saveScrollPosition = function(t, e, i) {
                            void 0 === t && (t = window.location.href), void 0 === e && (e = jQuery(window).scrollLeft()), void 0 === i && (i = jQuery(window).scrollTop());
                            var n = this.model_.convertUrlToKey(t, !0),
                                s = {
                                    url: n,
                                    scrollX: e,
                                    scrollY: i,
                                    date: (new Date).getTime(),
                                    title: undefined,
                                    host: undefined,
                                    expires: undefined
                                };
                            this.stores_.history.set(s, !0)
                        }, i.prototype.loadExpires = function() {}, i.prototype.saveExpires = function(t, e, i) {
                            var n = this.model_.convertUrlToKey(t, !0),
                                s = {
                                    url: n,
                                    host: e || "",
                                    expires: i,
                                    title: undefined,
                                    scrollX: undefined,
                                    scrollY: undefined,
                                    date: undefined
                                };
                            this.stores_.history.set(s, !0)
                        }, i.prototype.getServerBuffers = function() {
                            return this.stores_.server.getBuffers()
                        }, i.prototype.getServerBuffer = function(t) {
                            var e = this.model_.convertUrlToKey(t, !0).split("//").pop().split("/").shift();
                            return e = this.model_.compareKeyByUrl("http://" + e, "http://" + window.location.host) ? "" : e, this.stores_.server.getBuffer(e)
                        }, i.prototype.loadServer = function() {}, i.prototype.saveServer = function(t, e, i, n, s) {
                            t = t.split("//").pop().split("/").shift(), t = this.model_.compareKeyByUrl("http://" + t, "http://" + window.location.host) ? "" : t;
                            var o = {
                                host: t,
                                time: Math.max(i, 1),
                                score: n,
                                state: s,
                                expires: e
                            };
                            this.stores_.server.set(o, !0), this.stores_.server.clean()
                        }, i.prototype.removeServer = function(t) {
                            this.stores_.server.remove(t), this.stores_.server.clean()
                        }, i
                    }();
                    e.Data = i
                }(i = e.APP || (e.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i;
                ! function(e) {
                    var i = function() {
                        function e(e) {
                            this.data_ = e, this.util_ = t.LIBRARY.Utility, this.force_ = !1, this._host = "", this.parallel_ = 4
                        }
                        return e.prototype.host_ = function(t, e) {
                            return e && (this._host = e.balance.active ? this.sanitize(t, e).split("//").pop().split("/").shift() || "" : ""), this._host
                        }, e.prototype.host = function() {
                            return this.host_()
                        }, e.prototype.sanitize = function(t, e) {
                            if (!e) return "";
                            var i;
                            switch (t && typeof t) {
                                case "string":
                                    i = t;
                                    break;
                                case "object":
                                    var n = t;
                                    i = 4 === n.readyState && n.getResponseHeader(e.balance.server.header) || n.host
                            }
                            return i = i || "", !/[\/?#"`^|\\<>{}\[\]\s]/.test(i) && jQuery.grep(e.balance.bounds, function(t) {
                                return "" === i || "*" === t || i === t || "." === t.charAt(0) && t === i.slice(-t.length)
                            }).length && i || ""
                        }, e.prototype.enable = function(t) {
                            return t.balance.active && t.balance.client.support.browser.test(window.navigator.userAgent) ? (this.data_.setCookie(t.balance.client.cookie.balance, "1"), void(t.balance.client.support.redirect.test(window.navigator.userAgent) && this.data_.setCookie(t.balance.client.cookie.redirect, "1"))) : void this.disable(t)
                        }, e.prototype.disable = function(t) {
                            this.data_.getCookie(t.balance.client.cookie.balance) && this.data_.setCookie(t.balance.client.cookie.balance, "0"), this.data_.getCookie(t.balance.client.cookie.redirect) && this.data_.setCookie(t.balance.client.cookie.redirect, "0"), this.changeServer("", t)
                        }, e.prototype.score = function(t, e) {
                            return Math.max(Math.round(e / t * 1e3), 0)
                        }, e.prototype.changeServer = function(t, e) {
                            return e.balance.active ? (this.host_(t, e), this.data_.setCookie(e.balance.client.cookie.host, t)) : this.host_("", e), this.host()
                        }, e.prototype.chooseServers_ = function(t) {
                            function e(t, e) {
                                return +e - +t
                            }
                            var i = this,
                                n = t.balance.server.respite,
                                s = t.balance.weight,
                                o = t.ajax.timeout,
                                r = t.balance.client.hosts.slice();
                            r = this.force_ ? jQuery.grep(r, function(t) {
                                    return !!t
                                }) : r,
                                function() {
                                    var e = i.data_.getCookie(t.balance.client.cookie.host);
                                    (!i.force_ || e) && (e === i.sanitize(e, t) ? !~jQuery.inArray(e, r) && r.unshift(e) : i.data_.setCookie(t.balance.client.cookie.host, ""))
                                }();
                            var a = this.data_.getServerBuffers(),
                                c = {};
                            jQuery.each(Object.keys(a), function(e, n) {
                                var s = a[n];
                                ~jQuery.inArray(s.host, r) && r.splice(jQuery.inArray(s.host, r), 1), (!i.force_ || s.host) && (s.host === i.sanitize(s.host, t) && s.expires > (new Date).getTime() ? c[s.score] = s : i.data_.removeServer(s.host))
                            });
                            var h, l = Object.keys(c).sort(e),
                                u = [];
                            for (jQuery.each(l, function(e) {
                                    var a = c[l[e]],
                                        p = a.host,
                                        d = a.time,
                                        f = a.score,
                                        m = a.state;
                                    if (~jQuery.inArray(p, r) && r.splice(jQuery.inArray(p, r), 1), !(m + n >= (new Date).getTime())) {
                                        switch (m && i.data_.removeServer(a.host), !0) {
                                            case u.length >= t.balance.random && 0 < u.length:
                                                return !1;
                                            case s && !p && !!Math.floor(Math.random() * s):
                                            case o && d >= o:
                                            case u.length >= Math.min(Math.floor(l.length / 2), 3) && h && d >= h.time + 500 && o && d >= 2 * o / 3:
                                            case u.length >= Math.min(Math.floor(l.length / 2), 3) && h && f <= h.score / 2:
                                                return
                                        }
                                        h = h || a, u.push(p)
                                    }
                                }); r.length;) u.push(r.splice(Math.floor(Math.random() * r.length), 1).shift());
                            return u
                        }, e.prototype.chooseServerFromCache_ = function(t) {
                            var e = this,
                                i = [],
                                n = this.data_.getHistoryBuffer(t.destLocation.href);
                            switch (!0) {
                                case !n:
                                    break;
                                case n.host !== this.sanitize(n.host, t):
                                    this.data_.saveExpires(n.url, "", 0);
                                case !n.expires:
                                case n.expires < (new Date).getTime():
                                case this.force_ && !n.host:
                                    break;
                                default:
                                    i = jQuery.map(this.data_.getServerBuffers(), function(t) {
                                        return t.host === n.host ? t.state >= (new Date).getTime() ? void e.data_.saveExpires(n.url, n.host, 0) : t.host : void 0
                                    })
                            }
                            return i.length ? i.pop() || " " : ""
                        }, e.prototype.chooseServerFromScore_ = function(t) {
                            var e = this.chooseServers_(t);
                            return e.slice(Math.floor(Math.random() * Math.min(e.length, 6))).shift() || " "
                        }, e.prototype.chooseServer = function(t) {
                            return t.balance.active ? this.util_.trim(this.chooseServerFromCache_(t) || this.chooseServerFromScore_(t)) : ""
                        }, e.prototype.bypass = function(t) {
                            var e = this;
                            this.force_ = !0;
                            var i = jQuery.Deferred();
                            if (!t || !t.balance.active) return i.reject();
                            var n = this.parallel_,
                                s = this.chooseServers_(t),
                                o = jQuery.extend({}, t.ajax, t.balance.option.ajax);
                            s = jQuery.grep(s, function(t) {
                                return !!t
                            });
                            for (var r = 0, a = s.length, c = function(n) {
                                    var h = e,
                                        l = (new Date).getTime();
                                    "pending" === i.state() && jQuery.ajax(jQuery.extend({}, o, {
                                        url: h.util_.normalizeUrl(window.location.protocol + "//" + n + window.location.pathname.replace(/^\/?/, "/") + window.location.search),
                                        xhr: t.balance.option.callbacks.ajax.xhr ? function() {
                                            var e;
                                            return e = h.util_.fire(t.balance.option.callbacks.ajax.xhr, this, [event, t]), e = "object" == typeof e ? e : jQuery.ajaxSettings.xhr()
                                        } : undefined,
                                        beforeSend: t.balance.option.callbacks.ajax.beforeSend || t.server.header ? function(e, i) {
                                            t.server.header && e.setRequestHeader(t.nss.requestHeader, "true"), "object" == typeof t.server.header && (e.setRequestHeader(t.nss.requestHeader, "true"), t.server.header.area && e.setRequestHeader(t.nss.requestHeader + "-Area", this.app_.chooseArea(t.area, document, document)), t.server.header.head && e.setRequestHeader(t.nss.requestHeader + "-Head", t.load.head), t.server.header.css && e.setRequestHeader(t.nss.requestHeader + "-CSS", t.load.css.toString()), t.server.header.script && e.setRequestHeader(t.nss.requestHeader + "-Script", t.load.script.toString())), h.util_.fire(t.balance.option.callbacks.ajax.beforeSend, this, [event, t, e, i])
                                        } : undefined,
                                        dataFilter: t.balance.option.callbacks.ajax.dataFilter ? function(e, i) {
                                            return h.util_.fire(t.balance.option.callbacks.ajax.dataFilter, this, [event, t, e, i]) || e
                                        } : undefined,
                                        success: function(e, i, s) {
                                            l = (new Date).getTime() - l;
                                            var o = h.data_.getServerBuffer(this.url),
                                                r = h.score(l, s.responseText.length);
                                            l = o && !o.state && o.time ? Math.round((o.time + l) / 2) : l, r = o && !o.state && o.score ? Math.round((o.score + r) / 2) : r, h.data_.saveServer(n, (new Date).getTime() + t.balance.server.expires, l, r, 0), n = h.sanitize(s, t) || n, h.util_.fire(t.balance.option.ajax.success, this, arguments)
                                        },
                                        error: function(e) {
                                            h.data_.saveServer(n, (new Date).getTime() + t.balance.server.expires, 0, 0, (new Date).getTime()), n = null, h.util_.fire(t.balance.option.ajax.error, this, arguments)
                                        },
                                        complete: function() {
                                            h.util_.fire(t.balance.option.ajax.complete, this, arguments), ++r, i.notify(r, a, n), n ? (h.host_(n, t), s.splice(0, s.length), i.resolve(n)) : !h.host() && s.length ? c(s.shift()) : i.reject()
                                        }
                                    }))
                                }; n-- && s.length;) c(s.shift());
                            return i
                        }, e
                    }();
                    e.Balancer = i
                }(i = e.APP || (e.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                var e;
                ! function(t) {
                    var e = function() {
                        function t(t, e, n, s, o, r) {
                            this.data_ = t ? {
                                url: t,
                                data: e,
                                textStatus: n,
                                jqXHR: s,
                                host: o,
                                bind: r
                            } : {
                                url: undefined,
                                data: undefined,
                                textStatus: undefined,
                                jqXHR: undefined,
                                host: undefined,
                                bind: undefined
                            }, this.data = new i(this.data_)
                        }
                        return t.prototype.state = function(t) {
                            var e = t ? t.cache.expires.min : undefined,
                                i = t ? t.cache.expires.max : undefined;
                            switch (!1) {
                                case this.data.jqXHR() && 200 === +this.data.jqXHR().status:
                                case this.data.expires(e, i) >= (new Date).getTime():
                                    return !1;
                                default:
                                    return !0
                            }
                        }, t
                    }();
                    t.PageRecord = e;
                    var i = function() {
                        function t(t) {
                            this.data_ = t
                        }
                        return t.prototype.url = function() {
                            return this.data_.url
                        }, t.prototype.data = function() {
                            return this.data_.data
                        }, t.prototype.textStatus = function() {
                            return this.data_.textStatus
                        }, t.prototype.jqXHR = function() {
                            return this.data_.jqXHR
                        }, t.prototype.bind = function() {
                            return this.data_.bind
                        }, t.prototype.host = function() {
                            return this.data_.host
                        }, t.prototype.expires = function(t, e) {
                            if (!this.jqXHR() && !this.data()) return 0;
                            var i, n = this.jqXHR();
                            switch (n && (n.timeStamp = n.timeStamp || new Date(n.getResponseHeader("Date")).getTime() || (new Date).getTime()), !0) {
                                case !n:
                                    i = 0;
                                    break;
                                case /no-store|no-cache/.test(n.getResponseHeader("Cache-Control")):
                                    i = 0;
                                    break;
                                case !!n.getResponseHeader("Cache-Control") && !!~n.getResponseHeader("Cache-Control").indexOf("max-age="):
                                    i = new Date(n.getResponseHeader("Date") || new Date(n.timeStamp).toString()).getTime() + 1e3 * +n.getResponseHeader("Cache-Control").match(/max-age=(\d*)/).pop();
                                    break;
                                case !!n.getResponseHeader("Expires"):
                                    i = new Date(n.getResponseHeader("Expires")).getTime();
                                    break;
                                default:
                                    i = 0
                            }
                            return (undefined !== t || undefined !== e) && (i = "number" == typeof t ? Math.max(t + (new Date).getTime(), i) : i, i = "number" == typeof e ? Math.min(e + (new Date).getTime(), i) : i), i = Math.max(i, 0) || 0
                        }, t
                    }();
                    t.PageRecordData = i
                }(e = t.APP || (t.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                var e;
                ! function(t) {
                    var e = function() {
                        function t() {}
                        return t.prototype.chooseArea = function(t, e, i, n) {
                            void 0 === n && (n = !0);
                            var s = "string" == typeof t ? [t] : t;
                            t: for (var o = 0; o < s.length; o++) {
                                for (var r = s[o], a = r.match(/(?:[^,\(\[]+|\(.*?\)|\[.*?\])+/g) || [r], c = a.length; c--;) {
                                    var h = a[c];
                                    switch (!0) {
                                        case 0 === jQuery(h, e).length:
                                        case jQuery(h, e).length !== jQuery(h, i).length:
                                            continue t
                                    }
                                }
                                return r
                            }
                            return ""
                        }, t.prototype.dispatchEvent = function(t, e, i, n) {
                            var s = document.createEvent("HTMLEvents");
                            s.initEvent(e, i, n), t.dispatchEvent(s)
                        }, t
                    }();
                    t.PageUtility = e
                }(e = t.APP || (t.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i;
                ! function(e) {
                    var i = function() {
                        function e(e, i, n, s, o, r, a) {
                            this.model_ = e, this.page_ = i, this.balancer_ = n, this.setting_ = s, this.event_ = o, this.success_ = r, this.failure_ = a, this.util_ = t.LIBRARY.Utility, this.binds_ = [], this.jsons_ = [], this.main_()
                        }
                        return e.prototype.main_ = function() {
                            function e(t, e, i) {
                                return s.call(this, [].slice.call(arguments), undefined)
                            }

                            function i(t, e, i) {
                                return o.apply(this, arguments)
                            }

                            function n(t, e) {
                                return r.apply(this, arguments)
                            }

                            function s(t, e, i) {
                                void 0 === i && (i = []), arguments.length && arguments[0] && (a.data_ = t[0], a.textStatus_ = t[1], a.jqXHR_ = t[2], a.binds_ = i.every(function(t) {
                                    return !!t && "object" == typeof t
                                }) ? i : [i[2]], a.util_.fire(c.callbacks.ajax.success, this[0] || this, [h, c, a.data_, a.textStatus_, a.jqXHR_]))
                            }

                            function o(t, e, i) {
                                arguments.length && arguments[0] && (a.jqXHR_ = t, a.textStatus_ = e, a.errorThrown_ = i, a.binds_ = [], a.util_.fire(c.callbacks.ajax.error, this[0] || this, [h, c, a.jqXHR_, a.textStatus_, a.errorThrown_]))
                            }

                            function r() {
                                arguments.length && arguments[0] && (a.util_.fire(c.callbacks.ajax.complete, this[0] || this, [h, c, a.jqXHR_, a.textStatus_]), a.model_.setPageXHR(null), a.model_.setDataXHR(null), 200 === +a.jqXHR_.status && a.binds_.every(function(t) {
                                    return 200 === +t.status
                                }) ? (a.binds_.forEach(function(t, e) {
                                    return a.binds_[e].responseJSON = a.binds_[e].responseJSON || a.jsons_[e]
                                }), a.model_.setCache(c.destLocation.href, d && d.data || null, a.textStatus_, a.jqXHR_), a.success_(c, h, a.data_, a.textStatus_, a.jqXHR_, a.host_, a.binds_)) : a.failure_(c, h, a.data_, a.textStatus_, a.jqXHR_, a.host_, a.binds_))
                            }
                            var a = this,
                                c = this.setting_,
                                h = this.event_ = jQuery.extend(!0, {}, this.event_),
                                l = this.util_.fire(c.wait, c, [h, c, c.origLocation.cloneNode(), c.destLocation.cloneNode()]),
                                u = c.speedcheck,
                                p = this.model_.speed;
                            u && (p.fire = h.timeStamp), u && p.time.splice(0, 100, 0), u && p.name.splice(0, 100, "pjax(" + p.time.slice(-1) + ")");
                            var d;
                            switch (c.cache[h.type.toLowerCase()] && h.type.toLowerCase()) {
                                case t.EVENT.CLICK:
                                    d = this.model_.getCache(c.destLocation.href);
                                    break;
                                case t.EVENT.SUBMIT:
                                    d = c.cache[h.currentTarget.method.toLowerCase()] ? this.model_.getCache(c.destLocation.href) : d;
                                    break;
                                case t.EVENT.POPSTATE:
                                    d = this.model_.getCache(c.destLocation.href)
                            }
                            var f = this.model_.getPageXHR();
                            if (!(f && f.readyState < 4 && f.location && this.model_.comparePageByUrl(f.location.href, c.destLocation.href)))
                                if (this.dispatchEvent(document, c.nss.event.pjax.fetch, !1, !1), d && d.jqXHR && 200 === +d.jqXHR.status)
                                    if (u && p.name.splice(0, 1, "cache(" + p.time.slice(-1) + ")"), this.host_ = this.model_.host(), this.model_.setDataXHR(this.bind_(this.util_.fire(c.bind, c, [h, c, c.origLocation.cloneNode(), c.destLocation.cloneNode()]))), f = d.jqXHR, f.location = f.location || c.destLocation.cloneNode(), this.model_.setPageXHR(f), this.page_.loadtime = 0, this.host_ = this.balancer_.sanitize(d.host, c), this.data_ = d.jqXHR.responseText, this.textStatus_ = d.textStatus, this.jqXHR_ = d.jqXHR, this.model_.isDeferrable) {
                                        var m = this.wait_(l);
                                        this.page_.setWait(m), jQuery.when(jQuery.Deferred().resolve(this.data_, this.textStatus_, this.jqXHR_), m, jQuery.when.apply(null, this.model_.getDataXHR())).done(s).fail(o).always(r)
                                    } else {
                                        var y = jQuery.extend({}, jQuery.ajaxSettings, c.ajax);
                                        y = y.context || y, e.call(y, this.data_, this.textStatus_, this.jqXHR_), n.call(y, this.jqXHR_, this.textStatus_)
                                    }
                            else if (f && f.follow && !~"error abort timeout parsererror".indexOf(f.statusText)) {
                                u && p.time.splice(0, 1, f.timeStamp - p.fire), u && p.name.splice(0, 1, "preload(" + p.time.slice(-1) + ")"), u && p.time.push(p.now() - p.fire), u && p.name.push("continue(" + p.time.slice(-1) + ")"), this.host_ = this.model_.host(), this.model_.setDataXHR(this.bind_(this.util_.fire(c.bind, c, [h, c, c.origLocation.cloneNode(), c.destLocation.cloneNode()]))), f.location = c.destLocation.cloneNode(), this.model_.setPageXHR(f), this.host_ = this.model_.host(), this.page_.loadtime = f.timeStamp;
                                var m = this.wait_(l);
                                this.page_.setWait(m), delete f.timeStamp, jQuery.when(f, m, jQuery.when.apply(null, this.model_.getDataXHR())).done(s).fail(o).always(r)
                            } else {
                                this.page_.loadtime = h.timeStamp;
                                var v = {};
                                this.host_ = this.model_.host(), this.model_.setDataXHR(this.bind_(this.util_.fire(c.bind, c, [h, c, c.origLocation.cloneNode(), c.destLocation.cloneNode()])));
                                var g = this.balance_(c.destLocation.href);
                                switch (v.url = c.server.query ? [g.protocol, "//", g.host, g.pathname.replace(/^\/?/, "/"), g.search.replace(/&*$/, "&" + c.server.query).replace(/^\??&/, "?").replace(/(\?|&)$/, ""), g.hash].join("") : g.href, h.type.toLowerCase()) {
                                    case t.EVENT.CLICK:
                                        v.type = "GET";
                                        break;
                                    case t.EVENT.SUBMIT:
                                        switch (v.type = h.currentTarget.method.toUpperCase(), v.type) {
                                            case "POST":
                                                jQuery(h.currentTarget).has(":file").length ? "function" == typeof FormData && (v.data = (new FormData)(h.currentTarget), v.contentType = !1, v.processData = !1) : v.data = jQuery(h.currentTarget).serializeArray();
                                                break;
                                            case "GET":
                                        }
                                        break;
                                    case t.EVENT.POPSTATE:
                                        v.type = "GET"
                                }
                                if (v = jQuery.extend({}, c.ajax, v, {
                                        xhr: c.callbacks.ajax.xhr ? function() {
                                            var t;
                                            return t = a.util_.fire(c.callbacks.ajax.xhr, this, [h, c]), t = "object" == typeof t ? t : jQuery.ajaxSettings.xhr()
                                        } : undefined,
                                        beforeSend: c.callbacks.ajax.beforeSend || c.server.header ? function(t, e) {
                                            c.server.header && t.setRequestHeader(c.nss.requestHeader, "true"), "object" == typeof c.server.header && (t.setRequestHeader(c.nss.requestHeader, "true"), c.server.header.area && t.setRequestHeader(c.nss.requestHeader + "-Area", this.app_.chooseArea(c.area, document, document)), c.server.header.head && t.setRequestHeader(c.nss.requestHeader + "-Head", c.load.head), c.server.header.css && t.setRequestHeader(c.nss.requestHeader + "-CSS", c.load.css.toString()), c.server.header.script && t.setRequestHeader(c.nss.requestHeader + "-Script", c.load.script.toString())), a.util_.fire(c.callbacks.ajax.beforeSend, this, [h, c, t, e])
                                        } : undefined,
                                        dataFilter: c.callbacks.ajax.dataFilter ? function(t, e) {
                                            return a.util_.fire(c.callbacks.ajax.dataFilter, this, [h, c, t, e]) || t
                                        } : undefined,
                                        success: this.model_.isDeferrable ? null : e,
                                        error: this.model_.isDeferrable ? null : i,
                                        complete: this.model_.isDeferrable ? null : n
                                    }), f = jQuery.ajax(v), f.location = c.destLocation.cloneNode(), this.model_.setPageXHR(f), !this.model_.isDeferrable) return;
                                var m = this.wait_(l);
                                this.page_.setWait(m), jQuery.when(this.model_.getPageXHR(), m, jQuery.when.apply(null, this.model_.getDataXHR())).done(s).fail(o).always(r)
                            }
                        }, e.prototype.balance_ = function(t) {
                            var e = (this.setting_, document.createElement("a"));
                            return e.href = t, e.host = this.host_ || e.host, e
                        }, e.prototype.bind_ = function(t) {
                            var e = this;
                            return (t || []).map(function(t) {
                                return t.url = e.util_.canonicalizeUrl(t.url), t.url.indexOf("//") > -1 ? t : (t.url = e.balance_(t.url).href, t)
                            }).map(jQuery.ajax).map(function(t, i) {
                                return t.done(function(t, n, s) {
                                    var o = t;
                                    switch (s.getResponseHeader("Content-Type").split("/").pop()) {
                                        case "json":
                                            if (s.responseJSON) break;
                                            if (e.jsons_[i])
                                                for (var r in o) e.jsons_[i][r] = o[r];
                                            else e.jsons_[i] = o
                                    }
                                })
                            })
                        }, e.prototype.wait_ = function(t) {
                            var e = jQuery.Deferred();
                            return t ? (setTimeout(function() {
                                e.resolve()
                            }, t), e) : e.resolve()
                        }, e.prototype.chooseArea = function(t, e, i) {}, e.prototype.dispatchEvent = function(t, e, i, n) {}, e
                    }();
                    e.PageFetch = i
                }(i = e.APP || (e.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                var e;
                ! function(t) {
                    var e = function() {
                        function e(e, i, n, s) {
                            this.Record_ = e, this.model_ = i, this.balancer_ = n, this.page_ = s, this.hash_ = function(t) {
                                return t.nss.url
                            }, this.table_ = {}, this.order_ = [], this.fetch_ = t.PageFetch
                        }
                        return e.prototype.fetchRecord = function(t, e, i, n) {
                            this.getRecord(t).state(t) ? this.pullRecord(t, e, i, n) : this.pullRecord(t, e, i, n)
                        }, e.prototype.pullRecord = function(t, e, i, n) {
                            var s = this;
                            new this.fetch_(this.model_, this.page_, this.balancer_, t, e, function(t, e, n, o, r, a, c) {
                                var h = s.setRecord(t, s.getRecord(t).data.data() || "", o, r, a, c);
                                i(h, t, e)
                            }, function(t, e, i, o, r, a, c) {
                                var h = s.setRecord(t, s.getRecord(t).data.data() || "", o, r, a, c);
                                n(h, t, e)
                            })
                        }, e.prototype.getRecord = function(t) {
                            return this.table_[this.hash_(t)] = this.table_[this.hash_(t)] || new this.Record_
                        }, e.prototype.setRecord = function(t, e, i, n, s, o) {
                            return this.cleanRecords_(t), this.addOrder_(t), this.table_[this.hash_(t)] = new this.Record_(t.nss.url, e, i, n, s, o)
                        }, e.prototype.removeRecord = function(t) {
                            return this.removeOrder_(t), this.table_[this.hash_(t)] = new this.Record_
                        }, e.prototype.clearRecord = function() {
                            this.order_.splice(0, this.order_.length);
                            for (var t in this.table_) delete this.table_[t]
                        }, e.prototype.cleanRecords_ = function(t) {
                            if (t.cache.limit)
                                for (; this.order_.length >= t.cache.limit;) this.removeRecord(this.order_.pop())
                        }, e.prototype.addOrder_ = function(t) {
                            this.removeOrder_(t), this.order_.unshift(t)
                        }, e.prototype.removeOrder_ = function(t) {
                            for (var e = this.order_.length; e--;) this.order_[e].nss.url === t.nss.url && this.order_.splice(e, 1)
                        }, e
                    }();
                    t.PageProvider = e
                }(e = t.APP || (t.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i;
                ! function(e) {
                    var i = function() {
                        function e(e, i, n, s, o, r, a) {
                            this.model_ = e, this.page_ = i, this.data_ = n, this.balancer_ = s, this.setting_ = o, this.event_ = r, this.record_ = a, this.util_ = t.LIBRARY.Utility, this.loadwaits_ = [], this.main_()
                        }
                        return e.prototype.main_ = function() {
                            var e = this.record_,
                                i = this.setting_,
                                n = this.event_,
                                s = i.speedcheck,
                                o = this.model_.speed;
                            if (s && o.time.push(o.now() - o.fire), s && o.name.push("fetch(" + o.time.slice(-1) + ")"), ++this.page_.count, this.page_.loadtime = this.page_.loadtime && (new Date).getTime() - this.page_.loadtime, i.cache.mix && t.EVENT.POPSTATE !== n.type.toLowerCase() && (new Date).getTime() - n.timeStamp <= i.cache.mix) return this.model_.fallback(n);
                            try {
                                if (this.page_.landing = null, !~(e.data.jqXHR().getResponseHeader("Content-Type") || "").toLowerCase().search(i.contentType)) throw new Error("throw: content-type mismatch");
                                if (this.srcTitle_ = jQuery(e.data.jqXHR().responseText.match(/<title(?:\s.*?[^\\])?>(?:.*?[^\\])?<\/title>|$/i).pop()).text(), this.dstTitle_ = document.title, this.redirect_(), this.blur_(), this.dispatchEvent(window, i.nss.event.pjax.unload, !1, !1), this.url_(), !this.model_.comparePageByUrl(i.destLocation.href, window.location.href)) throw new Error("throw: location mismatch");
                                this.document_()
                            } catch (r) {
                                if (!r) return;
                                this.model_.getCache(window.location.href) && this.model_.removeCache(i.destLocation.href), this.model_.fallback(n)
                            }
                        }, e.prototype.isRegister_ = function(e, i) {
                            if (e.destLocation.href === e.origLocation.href) return !1;
                            switch (i.type.toLowerCase()) {
                                case t.EVENT.CLICK:
                                case t.EVENT.SUBMIT:
                                    return !0;
                                case t.EVENT.POPSTATE:
                                    return !1
                            }
                        }, e.prototype.isReplace_ = function(e, i) {
                            switch (i.type.toLowerCase()) {
                                case t.EVENT.CLICK:
                                case t.EVENT.SUBMIT:
                                    return jQuery(i.currentTarget).is(e.replace);
                                case t.EVENT.POPSTATE:
                                    return !1
                            }
                        }, e.prototype.isCacheUsable_ = function(e, i) {
                            switch (!0) {
                                case !i.cache.click && !i.cache.submit && !i.cache.popstate:
                                case t.EVENT.SUBMIT === e.type.toLowerCase() && !i.cache[e.currentTarget.method.toLowerCase()]:
                                    return !1;
                                default:
                                    return !0
                            }
                        }, e.prototype.redirect_ = function() {
                            var e = this,
                                i = this.setting_,
                                n = this.event_,
                                s = (jQuery('head meta[http-equiv="Refresh"][content*="URL="]').attr("content") || "").match(/\w+:\/\/[^;\s"']+|$/i).shift();
                            if (s && !this.model_.comparePageByUrl(i.destLocation.href, s)) {
                                var o = i.destLocation.cloneNode();
                                if (o.href = s, this.util_.fire(i.callbacks.update.redirect.before, i, [n, i, o.cloneNode(), i.origLocation.cloneNode(), i.destLocation.cloneNode()]) !== !1) {
                                    switch (!0) {
                                        case !i.redirect:
                                        case o.protocol !== i.destLocation.protocol:
                                        case o.host !== i.destLocation.host:
                                        case t.EVENT.SUBMIT === n.type.toLowerCase() && "GET" !== n.currentTarget.method.toUpperCase():
                                            switch (n.type.toLowerCase()) {
                                                case t.EVENT.CLICK:
                                                case t.EVENT.SUBMIT:
                                                    window.location.assign(o.href);
                                                    break;
                                                case t.EVENT.POPSTATE:
                                                    window.location.replace(o.href)
                                            }
                                            throw !1;
                                        default:
                                            switch (jQuery[t.DEF.NAME].enable(), n.type.toLowerCase()) {
                                                case t.EVENT.CLICK:
                                                case t.EVENT.SUBMIT:
                                                    setTimeout(function() {
                                                        return jQuery[t.DEF.NAME].click(o.href)
                                                    }, 0);
                                                    break;
                                                case t.EVENT.POPSTATE:
                                                    window.history.replaceState(window.history.state, this.srcTitle_, o.href), this.isRegister_(i, n) && i.fix.location && !this.util_.compareUrl(i.destLocation.href, window.location.href) && (jQuery[t.DEF.NAME].disable(), window.history.back(), window.history.forward(), jQuery[t.DEF.NAME].enable()), setTimeout(function() {
                                                        return e.dispatchEvent(window, t.EVENT.POPSTATE, !1, !1)
                                                    }, 0)
                                            }
                                            throw !1
                                    }
                                    this.util_.fire(i.callbacks.update.redirect.after, i, [n, i, o.cloneNode(), i.origLocation.cloneNode(), i.destLocation.cloneNode()]) === !1
                                }
                            }
                        }, e.prototype.blur_ = function() {
                            var t = this.setting_,
                                e = this.event_;
                            this.util_.fire(t.callbacks.update.blur.before, t, [e, t, t.origLocation.cloneNode(), t.destLocation.cloneNode()]) !== !1 && (jQuery(document.activeElement).not("body").blur(), this.util_.fire(t.callbacks.update.blur.after, t, [e, t, t.origLocation.cloneNode(), t.destLocation.cloneNode()]) === !1)
                        }, e.prototype.url_ = function() {
                            var e = this.setting_,
                                i = this.event_;
                            this.model_.location.href = e.destLocation.href, this.util_.fire(e.callbacks.update.url.before, e, [i, e, e.origLocation.cloneNode(), e.destLocation.cloneNode()]) !== !1 && (this.isReplace_(e, i) ? (window.history.replaceState(this.util_.fire(e.state, e, [i, e, e.origLocation.cloneNode(), e.destLocation.cloneNode()]), this.srcTitle_, e.destLocation.href), e.fix.location && !this.util_.compareUrl(e.destLocation.href, window.location.href) && window.location.replace(e.destLocation.href)) : this.isRegister_(e, i) && (window.history.pushState(this.util_.fire(e.state, e, [i, e, e.origLocation.cloneNode(), e.destLocation.cloneNode()]), ~window.navigator.userAgent.toLowerCase().indexOf("opera") ? this.dstTitle_ : this.srcTitle_, e.destLocation.href), e.fix.location && !this.util_.compareUrl(e.destLocation.href, window.location.href) && (jQuery[t.DEF.NAME].disable(), window.history.back(), window.history.forward(), jQuery[t.DEF.NAME].enable())), this.util_.fire(e.callbacks.update.url.after, e, [i, e, e.origLocation.cloneNode(), e.destLocation.cloneNode()]) === !1)
                        }, e.prototype.document_ = function() {
                            var e = this,
                                i = this.setting_,
                                n = this.event_;
                            if (i.load.script && !this.page_.loadedScripts[""]) {
                                var s = this.page_.loadedScripts;
                                s[""] = !0, jQuery("script").each(function() {
                                    var t = this;
                                    t.src && (s[t.src] = !i.load.reload || !jQuery(t).is(i.load.reload))
                                })
                            }
                            this.srcDocument_ = this.page_.parser.parse(this.record_.data.jqXHR().responseText, i.destLocation.href), this.dstDocument_ = document;
                            var o = i.speedcheck,
                                r = this.model_.speed;
                            if (o && r.time.push(r.now() - r.fire), o && r.name.push("parse(" + r.time.slice(-1) + ")"), this.area_ = this.chooseArea(i.area, this.srcDocument_, this.dstDocument_), !this.area_) throw new Error("throw: area notfound");
                            this.areas_ = this.area_.match(/(?:[^,]+?|\(.*?\)|\[.*?\])+/g), this.overwriteDocumentByCache_(), i.fix.noscript && this.escapeNoscript_(this.srcDocument_), i.fix.reference && this.fixReference_(i.origLocation.href, this.dstDocument_), this.rewrite_(), this.title_(), i.fix.history && this.data_.saveTitle(), this.data_.saveExpires(this.record_.data.url(), this.record_.data.host(), this.record_.data.expires()), this.head_(), o && r.time.push(r.now() - r.fire), o && r.name.push("head(" + r.time.slice(-1) + ")"), this.content_(), this.focus_(), this.dispatchEvent(document, i.nss.event.pjax.DOMContentLoaded, !1, !1), o && r.time.push(r.now() - r.fire), o && r.name.push("content(" + r.time.slice(-1) + ")"),
                                this.balance_(), this.css_('link[rel~="stylesheet"], style'), jQuery(window).one(t.DEF.NAME + ":rendering", function(s) {
                                    s.preventDefault(), s.stopImmediatePropagation();
                                    var a = function(t) {
                                            return e.model_.comparePageByUrl(i.destLocation.href, window.location.href) ? (e.dispatchEvent(document, i.nss.event.pjax.ready, !1, !1), jQuery(e.area_).each(function(t, e) {
                                                return jQuery(e).width()
                                            }), jQuery.when ? jQuery.Deferred().resolve() : t()) : void 0
                                        },
                                        c = function(s) {
                                            return e.model_.comparePageByUrl(i.destLocation.href, window.location.href) ? (e.util_.fire(i.callback, i, [n, i]), setTimeout(function() {
                                                switch (n.type.toLowerCase()) {
                                                    case t.EVENT.CLICK:
                                                    case t.EVENT.SUBMIT:
                                                        e.model_.overlay(i) || e.scrollByHash_(i) || e.scroll_(!0);
                                                        break;
                                                    case t.EVENT.POPSTATE:
                                                        e.model_.overlay(i) || e.scroll_(!0)
                                                }
                                            }, 100), e.dispatchEvent(document, i.nss.event.pjax.render, !1, !1), o && r.time.push(r.now() - r.fire), o && r.name.push("render(" + r.time.slice(-1) + ")"), jQuery.when ? jQuery.when.apply(jQuery, e.loadwaits_) : s()) : void 0
                                        },
                                        h = function() {
                                            return e.model_.comparePageByUrl(i.destLocation.href, window.location.href) ? (e.dispatchEvent(window, i.nss.event.pjax.load, !1, !1), o && r.time.push(r.now() - r.fire), o && r.name.push("load(" + r.time.slice(-1) + ")"), o && console.log(r.time), o && console.log(r.name), e.script_("[src][defer]"), jQuery.when && jQuery.Deferred().resolve()) : jQuery.when && jQuery.Deferred().reject()
                                        };
                                    if (e.scroll_(!1), 100 > e.page_.loadtime && i.reset.type.match(n.type.toLowerCase()) && !jQuery('form[method][method!="GET"]').length) switch (!1) {
                                        case e.page_.count < i.reset.count || !i.reset.count:
                                        case (new Date).getTime() < i.reset.time + e.page_.time || !i.reset.time:
                                            throw new Error("throw: reset")
                                    }
                                    var l = e.script_(":not([defer]), :not([src])");
                                    if (jQuery.when) {
                                        var u = jQuery.Deferred().pipe ? "pipe" : "then";
                                        jQuery.when.apply(jQuery, l)[u](function() {
                                            return a()
                                        })[u](function() {
                                            return c()
                                        })[u](function() {
                                            return h()
                                        })
                                    } else a(function() {
                                        return c(function() {
                                            return h()
                                        })
                                    })
                                }).trigger(t.DEF.NAME + ":rendering")
                        }, e.prototype.overwriteDocumentByCache_ = function() {
                            var t = this.setting_,
                                e = this.event_,
                                i = this.model_.getCache(t.destLocation.href);
                            if (this.isCacheUsable_(e, t) && i && i.data) {
                                var n = t.fix.noscript ? this.restoreNoscript_(i.data) : i.data,
                                    s = this.page_.parser.parse(n, t.destLocation.href),
                                    o = this.srcDocument_;
                                o.title = s.title;
                                for (var r, a, c = 0; this.areas_[c]; c++) {
                                    if (r = jQuery(this.areas_[c], s).clone(), a = jQuery(this.areas_[c], o), !r.length || !a.length || r.length !== a.length) throw new Error("throw: area mismatch");
                                    for (var h = 0; r[h]; h++) a[h].parentNode.replaceChild(r[h], a[h])
                                }
                            }
                        }, e.prototype.rewrite_ = function() {
                            function t(t) {
                                if (!t) return {};
                                switch (t.getResponseHeader("Content-Type").split("/").pop()) {
                                    case "json":
                                        return t.responseJSON
                                }
                            }
                            var e = this.setting_,
                                i = this.event_;
                            e.rewrite && this.util_.fire(e.callbacks.update.rewrite.before, e, [i, e, this.srcDocument_, this.dstDocument_]) !== !1 && (this.util_.fire(e.rewrite, e, [this.srcDocument_, this.area_, this.record_.data.host(), this.record_.data.bind().map(t)]), this.util_.fire(e.callbacks.update.rewrite.before, e, [i, e, this.srcDocument_, this.dstDocument_]) === !1)
                        }, e.prototype.title_ = function() {
                            var t = this.setting_,
                                e = this.event_;
                            this.util_.fire(t.callbacks.update.title.before, t, [e, t, this.srcDocument_.title, this.dstDocument_.title]) !== !1 && (this.dstDocument_.title = this.srcDocument_.title, this.util_.fire(t.callbacks.update.title.after, t, [e, t, this.srcDocument_.title, this.dstDocument_.title]) === !1)
                        }, e.prototype.head_ = function() {
                            var t = this.setting_,
                                e = this.event_,
                                i = this.srcDocument_,
                                n = this.dstDocument_;
                            if (t.load.head && this.util_.fire(t.callbacks.update.head.before, t, [e, t, this.srcDocument_.querySelector("head"), this.dstDocument_.querySelector("head")]) !== !1) {
                                for (var s, o = "base, meta, link", r = jQuery(i.head).children(o).filter(t.load.head).not(t.load.ignore).not('link[rel~="stylesheet"], style, script'), a = jQuery(n.head).children(o).filter(t.load.head).not(t.load.ignore).not('link[rel~="stylesheet"], style, script'), c = jQuery(), h = a, l = 0; s = r[l]; l++) {
                                    for (var u = 0; h[u]; u++)
                                        if (h[u].tagName === s.tagName && h[u].outerHTML === s.outerHTML) {
                                            if (c.length) {
                                                var p = a[a.index(h[u]) - 1];
                                                p ? jQuery(p).after(c.clone()) : h.eq(u).before(c.clone()), c = jQuery()
                                            }
                                            h = h.not(h[u]), s = null;
                                            break
                                        }
                                    c = c.add(s)
                                }
                                jQuery("title", n).before(c.clone()), h.remove(), this.util_.fire(t.callbacks.update.head.after, t, [e, t, this.srcDocument_.querySelector("head"), this.dstDocument_.querySelector("head")]) === !1
                            }
                        }, e.prototype.content_ = function() {
                            function t() {
                                if (jQuery.Deferred) {
                                    var t = jQuery.Deferred();
                                    switch (this.tagName.toLowerCase()) {
                                        case "img":
                                            jQuery(this).one("load error abort", t.resolve);
                                            break;
                                        case "iframe":
                                        case "frame":
                                            jQuery(this).one("load", t.resolve)
                                    }
                                    return t
                                }
                            }
                            var e = this,
                                i = this.setting_,
                                n = this.event_,
                                s = this.srcDocument_,
                                o = this.dstDocument_;
                            if (this.util_.fire(i.callbacks.update.content.before, i, [n, i, jQuery(this.area_, this.srcDocument_).get(), jQuery(this.area_, this.dstDocument_).get()]) !== !1) {
                                jQuery(this.area_).children("." + i.nss.elem + "-check").remove();
                                for (var r, a, c = 0; this.areas_[c]; c++) {
                                    if (r = jQuery(this.areas_[c], s), a = jQuery(this.areas_[c], o), !r.length || !a.length || r.length !== a.length) throw new Error("throw: area mismatch");
                                    r = r.map(function(t, e) {
                                        return document.importNode(e, !0)
                                    }), r.find("script").each(function(t, i) {
                                        return e.escapeScript_(i)
                                    }), this.loadwaits_ = this.loadwaits_.concat(r.find("img, iframe, frame").map(t).get());
                                    for (var h = 0; r[h]; h++) a[h].parentNode.replaceChild(r[h], a[h]), document.body === r[h] && (jQuery.each(r[h].attributes, function(t, e) {
                                        return a[h].removeAttribute(e.name)
                                    }), jQuery.each(r[h].attributes, function(t, e) {
                                        return a[h].setAttribute(e.name, e.value)
                                    }));
                                    a = jQuery(this.areas_[c], o), a.find("script").each(function(t, i) {
                                        return e.restoreScript_(i)
                                    })
                                }
                                this.util_.fire(i.callbacks.update.content.after, i, [n, i, jQuery(this.area_, this.srcDocument_).get(), jQuery(this.area_, this.dstDocument_).get()]) === !1
                            }
                        }, e.prototype.focus_ = function() {
                            var t = this.setting_,
                                e = this.event_;
                            this.util_.fire(t.callbacks.update.focus.before, t, [e, t, t.origLocation.cloneNode(), t.destLocation.cloneNode()]) !== !1 && (jQuery("body, input[autofocus], textarea[autofocus]").last().not(document.activeElement).focus(), this.util_.fire(t.callbacks.update.focus.after, t, [e, t, t.origLocation.cloneNode(), t.destLocation.cloneNode()]) === !1)
                        }, e.prototype.balance_ = function() {
                            var t = this,
                                e = this.setting_,
                                i = this.event_;
                            !e.balance.active || this.page_.loadtime < 100 || [this.record_.data.jqXHR()].concat(this.record_.data.bind()).forEach(function(n) {
                                var s = t.balancer_.sanitize(n, e) || t.record_.data.host() || "",
                                    o = t.page_.loadtime,
                                    r = t.balancer_.score(o, n.responseText.length);
                                if (t.util_.fire(e.callbacks.update.balance.before, e, [i, e, s, t.page_.loadtime, n.responseText.length]) !== !1) {
                                    var a = t.data_.getServerBuffer(e.destLocation.href),
                                        r = t.balancer_.score(o, n.responseText.length);
                                    o = a && !a.state && a.time ? Math.round((a.time + o) / 2) : o, r = a && !a.state && a.score ? Math.round((a.score + r) / 2) : r, t.data_.saveServer(s, (new Date).getTime() + e.balance.server.expires, o, r, 0), t.balancer_.changeServer(t.balancer_.chooseServer(e), e), t.util_.fire(e.callbacks.update.balance.after, e, [i, e, s, t.page_.loadtime, n.responseText.length]) === !1
                                }
                            })
                        }, e.prototype.css_ = function(t) {
                            function e() {
                                return jQuery.contains(o.head, this)
                            }

                            function i() {
                                return jQuery.contains(o.body, this)
                            }
                            var n = this.setting_,
                                s = this.event_,
                                o = this.srcDocument_,
                                r = this.dstDocument_;
                            if (n.load.css) {
                                var a = "link, style",
                                    c = jQuery(a, o).filter(t).not(jQuery("noscript", o).find(a)),
                                    h = jQuery(a, r).filter(t).not(jQuery("noscript", o).find(a)),
                                    l = jQuery(),
                                    u = h;
                                if (this.util_.fire(n.callbacks.update.css.before, n, [s, n, c.get(), h.get()]) !== !1) {
                                    c = c.not(n.load.ignore), h = c.not(n.load.ignore);
                                    for (var p, d = 0; p = c[d]; d++) {
                                        for (var f, m = 0; u[m]; m++) {
                                            switch (p.tagName.toLowerCase()) {
                                                case "link":
                                                    f = p.href === u[m].href;
                                                    break;
                                                case "style":
                                                    f = this.util_.trim(p.innerHTML) === this.util_.trim(u[m].innerHTML)
                                            }
                                            if (f) {
                                                if (l.length) {
                                                    if (jQuery.contains(r.body, u[m]) && l.first().parents("head").length) jQuery(r.head).append(l.filter(e).clone()), u.eq(m).before(l.filter(i).clone());
                                                    else {
                                                        var y = h[h.index(u[m]) - 1];
                                                        y ? jQuery(y).after(l.clone()) : u.eq(m).before(l.clone())
                                                    }
                                                    l = jQuery()
                                                }
                                                u = u.not(u[m]), m -= Number(!!m), p = null;
                                                break
                                            }
                                        }
                                        l = l.add(p)
                                    }
                                    if (jQuery(r.head).append(l.filter(e).clone()), jQuery(r.body).append(l.filter(i).clone()), u.remove(), h = jQuery(a, r).filter(t).not(jQuery("noscript", o).find(a)), this.util_.fire(n.callbacks.update.css.after, n, [s, n, c.get(), h.get()]) !== !1) {
                                        var v = n.speedcheck,
                                            g = this.model_.speed;
                                        v && g.time.push(g.now() - g.fire), v && g.name.push("css(" + g.time.slice(-1) + ")")
                                    }
                                }
                            }
                        }, e.prototype.script_ = function(t) {
                            var e = this,
                                i = this.setting_,
                                n = this.event_,
                                s = this.srcDocument_,
                                o = this.dstDocument_,
                                r = [],
                                a = [];
                            if (!i.load.script) return r;
                            var c = "script",
                                h = jQuery(c, s).filter(t).not(jQuery("noscript", s).find(c)),
                                l = jQuery(c, o).filter(t).not(jQuery("noscript", o).find(c)),
                                u = this.page_.loadedScripts,
                                p = /^$|(?:application|text)\/(?:java|ecma)script/i,
                                d = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                            if (this.util_.fire(i.callbacks.update.script.before, i, [n, i, h.get(), l.get()]) === !1) return r;
                            h = h.not(i.load.ignore);
                            for (var f, m = function(t, n) {
                                    if (!e.model_.comparePageByUrl(i.destLocation.href, window.location.href)) return !1;
                                    t.src && (u[t.src] = !i.load.reload || !jQuery(t).is(i.load.reload));
                                    try {
                                        if (e.model_.isDeferrable) {
                                            if ("string" != typeof n) throw n;
                                            eval.call(window, n)
                                        } else t.hasAttribute("src") ? jQuery.ajax(jQuery.extend(!0, {}, i.ajax, i.load.ajax, {
                                            url: t.src,
                                            dataType: "script",
                                            async: !1,
                                            global: !1,
                                            success: function() {
                                                return null
                                            },
                                            error: function(t) {
                                                throw t
                                            }
                                        })) : eval.call(window, (t.text || t.textContent || t.innerHTML || "").replace(d, ""));
                                        try {
                                            t.hasAttribute("src") && e.dispatchEvent(t, "load", !1, !1)
                                        } catch (s) {}
                                    } catch (o) {
                                        try {
                                            t.hasAttribute("src") && e.dispatchEvent(t, "error", !1, !1)
                                        } catch (s) {}
                                        if (!0 === i.load.error) throw o;
                                        e.util_.fire(i.load.error, i, [o, t])
                                    }
                                }, y = 0; f = h[y]; y++)
                                if (p.test(f.type || "") && (f.hasAttribute("src") ? !u[f.src] : this.util_.trim(f.innerHTML))) {
                                    var v = jQuery(f).parent(i.load.log)[0];
                                    if (v && !jQuery(f).parents(this.area_).length) {
                                        var g = jQuery(v.id || v.tagName, o)[0],
                                            _ = f.cloneNode(!0);
                                        this.escapeScript_(_), g.appendChild(_), this.restoreScript_(_)
                                    }! function(t) {
                                        var n = e.model_.isDeferrable && jQuery.Deferred();
                                        t.hasAttribute("src") && t.getAttribute("src") ? (u[t.src] = !i.load.reload || !jQuery(t).is(i.load.reload), t.hasAttribute("async") ? jQuery.ajax(jQuery.extend({}, i.ajax, i.load.ajax, {
                                            url: t.src,
                                            dataType: "script",
                                            async: !0,
                                            global: !1,
                                            success: function() {
                                                return e.dispatchEvent(t, "load", !1, !1)
                                            },
                                            error: function() {
                                                return e.dispatchEvent(t, "error", !1, !1)
                                            }
                                        })) : n ? (jQuery.ajax(jQuery.extend({}, i.ajax, i.load.ajax, {
                                            url: t.src,
                                            dataType: "text",
                                            async: !0,
                                            global: !1,
                                            success: function(e) {
                                                return n.resolve([t, e])
                                            },
                                            error: function(e) {
                                                return n.resolve([t, e])
                                            }
                                        })), r.push(n)) : a.push(t)) : t.hasAttribute("src") || (n ? r.push(n.resolve([t, (t.text || t.textContent || t.innerHTML || "").replace(d, "")])) : a.push(t))
                                    }(f)
                                }
                            try {
                                this.model_.isDeferrable ? jQuery.when.apply(jQuery, r).always(function() {
                                    for (var t = [], i = 0; i < arguments.length; i++) t[i - 0] = arguments[i];
                                    return jQuery.each(t, function(t, i) {
                                        return m.apply(e, i)
                                    })
                                }) : jQuery.each(a, function(t, e) {
                                    return m(e)
                                })
                            } catch (w) {
                                throw setTimeout(function() {
                                    return e.model_.fallback(n)
                                }, 1), w
                            }
                            if (l = jQuery(c, o).filter(t).not(jQuery("noscript", o).find(c)), this.util_.fire(i.callbacks.update.script.after, i, [n, i, h.get(), l.get()]) === !1) return r;
                            var b = i.speedcheck,
                                E = this.model_.speed;
                            return b && E.time.push(E.now() - E.fire), b && E.name.push("script(" + E.time.slice(-1) + ")"), r
                        }, e.prototype.scroll_ = function(e) {
                            var i = this.setting_,
                                n = this.event_;
                            if (this.util_.fire(i.callbacks.update.scroll.before, i, [n, i]) !== !1) {
                                var s, o;
                                switch (n.type.toLowerCase()) {
                                    case t.EVENT.CLICK:
                                    case t.EVENT.SUBMIT:
                                        s = e && "function" == typeof i.scrollLeft ? this.util_.fire(i.scrollLeft, i, [n, i, i.origLocation.cloneNode(), i.destLocation.cloneNode()]) : i.scrollLeft, s = s >= 0 ? s : 0, s = s === !1 || null === s ? jQuery(window).scrollLeft() : parseInt(Number(s) + "", 10), o = e && "function" == typeof i.scrollTop ? this.util_.fire(i.scrollTop, i, [n, i, i.origLocation.cloneNode(), i.destLocation.cloneNode()]) : i.scrollTop, o = o >= 0 ? o : 0, o = o === !1 || null === o ? jQuery(window).scrollTop() : parseInt(Number(o) + "", 10), window.scrollTo(s, o);
                                        break;
                                    case t.EVENT.POPSTATE:
                                        e && i.fix.scroll && this.data_.loadScrollPosition()
                                }
                                e && this.data_.saveScrollPosition(), this.util_.fire(i.callbacks.update.scroll.after, i, [n, i]) === !1
                            }
                        }, e.prototype.scrollByHash_ = function(t) {
                            var e = t.destLocation.hash.replace(/^#/, "");
                            if (!e) return !1;
                            var i = jQuery("#" + e + ", [name~=" + e + "]").first();
                            return i.length ? (isFinite(i.offset().top) && window.scrollTo(jQuery(window).scrollLeft(), parseInt(Number(i.offset().top) + "", 10)), this.data_.saveScrollPosition(), !0) : !1
                        }, e.prototype.fixReference_ = function(t, e) {
                            function i(t, e) {
                                var i;
                                switch (!0) {
                                    case "href" in e:
                                        i = "href";
                                        break;
                                    case "src" in e:
                                        i = "src";
                                        break;
                                    default:
                                        return
                                }
                                switch (n) {
                                    case 0:
                                        break;
                                    case 1:
                                        e[i] = h + e.getAttribute(i);
                                        break;
                                    case -1:
                                        e[i] = e.getAttribute(i).replace(h, "")
                                }
                                e.setAttribute(i, e[i].replace(c, "/"))
                            }
                            var n, s = t.replace(/[^\/]+$/, ""),
                                o = e.URL.replace(/[^\/]+$/, ""),
                                r = s.split("/").length,
                                a = o.split("/").length,
                                c = /^.+?\w\//,
                                h = this.util_.repeat("../", Math.abs(r - a));
                            switch (!0) {
                                case r === a:
                                    n = 0;
                                    break;
                                case a > r:
                                    n = 1;
                                    break;
                                case r > a:
                                    n = -1
                            }
                            jQuery("[href], [src]", e).not(['[href^="/"]', '[href^= "http:"]', '[href^= "https:"]', '[src^= "/"]', '[src^= "http:"]', '[src^= "https:"]'].join(",")).each(i)
                        }, e.prototype.escapeNoscript_ = function(t) {
                            function e() {
                                jQuery(this).text(this.innerHTML)
                            }
                            jQuery("noscript", t).children().parent().each(e)
                        }, e.prototype.restoreNoscript_ = function(t) {
                            var e = jQuery("<span/>");
                            return t.replace(/(<noscript>)([^<>]+?)(<\/noscript>)/gim, function(t, i, n, s) {
                                return i + e.html(n).text() + s
                            })
                        }, e.prototype.escapeScript_ = function(t) {
                            jQuery.data(t, "source", t.src), jQuery.data(t, "code", t.innerHTML), t.removeAttribute("src"), t.innerHTML = ""
                        }, e.prototype.restoreScript_ = function(t) {
                            undefined !== jQuery.data(t, "code") && (t.innerHTML = " ", jQuery.data(t, "source") ? (t.src = jQuery.data(t, "source"), jQuery.removeData(t, "source")) : t.removeAttribute("src"), t.innerHTML = jQuery.data(t, "code"), jQuery.removeData(t, "code"))
                        }, e.prototype.chooseArea = function(t, e, i) {}, e.prototype.dispatchEvent = function(t, e, i, n) {}, e
                    }();
                    e.PageUpdate = i
                }(i = e.APP || (e.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i;
                ! function(e) {
                    var i = function() {
                        function e() {
                            this.util_ = t.LIBRARY.Utility, this.sandbox_cache_ = {}
                        }
                        return e.prototype.sandbox_ = function(t) {
                            var e = this;
                            return void 0 === t && (t = window.location.href), t = this.util_.canonicalizeUrl(t).split("#").shift(), this.sandbox_cache_[t] && "object" == typeof this.sandbox_cache_[t].document && this.sandbox_cache_[t].document.URL === t || jQuery('<iframe srcdoc="<!DOCTYPE html>" sandbox="allow-same-origin"></iframe>').appendTo("body").each(function(i, n) {
                                e.sandbox_cache_[t] = n.contentWindow, e.sandbox_cache_[t].document.open(), e.sandbox_cache_[t].document.close()
                            }).remove(), this.sandbox_cache_[t]
                        }, e.prototype.test_ = function(t) {
                            try {
                                var e = '<html lang="en" class="html"><head><title>&amp;</title><link href="/"><noscript><style>/**/</style></noscript></head><body><noscript>noscript</noscript><a href="/"></a></body></html>',
                                    i = this.parse(e, window.location.href, t);
                                switch (!1) {
                                    case !!i:
                                    case i.URL && decodeURI(i.URL) === decodeURI(window.location.href):
                                    case "&" === i.title:
                                    case !!i.querySelector('html.html[lang="en"]'):
                                    case !!i.querySelector("head>link").href:
                                    case !!i.querySelector("head>noscript").innerHTML:
                                    case !!i.querySelector("body>noscript").innerHTML:
                                    case !!i.querySelector("body>a").href:
                                        throw !0
                                }
                                return t
                            } catch (n) {}
                        }, e.prototype.parse = function(t, e, i) {
                            function n(t, e) {
                                var i = document.createElement("div");
                                i.innerHTML = e.match(/<html(?:\s.*?[^\\])?>|$/i).shift().replace(/html/i, "div") || "<div>";
                                for (var n, s = i.firstChild.attributes, o = 0; n = s[o]; o++) t.documentElement.setAttribute(n.name, n.value);
                                var i = document.createElement("html");
                                for (i.innerHTML = e.replace(/^.*?<html(?:\s.*?[^\\])?>/im, ""), t.documentElement.removeChild(t.head), t.documentElement.removeChild(t.body); i.childNodes.length;) t.documentElement.appendChild(i.childNodes[0]);
                                return t
                            }
                            void 0 === e && (e = ""), void 0 === i && (i = this.mode_), t += ~t.search(/<title[\s>]/i) ? "" : "<title></title>";
                            var s;
                            switch (i) {
                                case "dom":
                                    s = (new window.DOMParser).parseFromString(t, "text/html");
                                    break;
                                case "doc":
                                    if (s = document.implementation.createHTMLDocument(""), "object" != typeof s.activeElement || !s.activeElement) break;
                                    "function" == typeof window.DOMParser && (s.title = (new window.DOMParser).parseFromString(t.match(/<title(?:\s.*?[^\\])?>(?:.*?[^\\])?<\/title>|$/i), "text/html").title), s.open(), s.write(t), s.close(), s.title !== s.querySelector("title").textContent && (s.title = s.querySelector("title").textContent);
                                    break;
                                case "manipulate":
                                    s = n(document.implementation.createHTMLDocument(""), t);
                                    break;
                                case null:
                                    s = null;
                                    break;
                                default:
                                    switch (/webkit|firefox|trident|$/i.exec(window.navigator.userAgent).shift().toLowerCase()) {
                                        case "webkit":
                                            this.mode_ = this.test_("doc") || this.test_("dom") || this.test_("manipulate");
                                            break;
                                        case "firefox":
                                            this.mode_ = this.test_("dom") || this.test_("doc") || this.test_("manipulate");
                                            break;
                                        case "trident":
                                            this.mode_ = this.test_("manipulate") || this.test_("dom") || this.test_("doc");
                                            break;
                                        default:
                                            this.mode_ = this.test_("dom") || this.test_("doc") || this.test_("manipulate")
                                    }
                                    s = this.mode_ && this.parse(t, e)
                            }
                            return s
                        }, e
                    }();
                    e.PageParser = i;
                    var n = function() {
                        function t() {
                            t.instance_ = t.instance_ || new i
                        }
                        return t.prototype.singleton_ = function() {
                            return t.instance_
                        }, t.prototype.parse = function(t, e) {
                            return this.singleton_().parse(t, e)
                        }, t
                    }();
                    e.PageParserSingleton = n
                }(i = e.APP || (e.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i;
                ! function(e) {
                    t.MIXIN(e.PageFetch, [e.PageUtility]), t.MIXIN(e.PageUpdate, [e.PageUtility]);
                    var i = function() {
                        function i(i, n, s) {
                            var o = this;
                            this.model_ = i, this.data_ = n, this.balancer_ = s, this.util_ = t.LIBRARY.Utility, this.parser = new e.PageParserSingleton, this.provider = new e.PageProvider(e.PageRecord, this.model_, this.balancer_, this), this.landing = this.util_.normalizeUrl(window.location.href), this.loadedScripts = {}, this.dataXHR = [], this.loadtime = 0, this.count = 0, this.time = (new Date).getTime(), setTimeout(function() {
                                return o.parser.parse("") || o.model_.disable()
                            }, 100)
                        }
                        return i.prototype.transfer = function(e, i) {
                            switch (i.type.toLowerCase()) {
                                case t.EVENT.CLICK:
                                    this.data_.saveTitle(), this.data_.saveScrollPosition();
                                    break;
                                case t.EVENT.SUBMIT:
                                    this.data_.saveTitle(), this.data_.saveScrollPosition();
                                    break;
                                case t.EVENT.POPSTATE:
                                    this.data_.saveTitle(e.origLocation.href, document.title), e.fix.history && this.data_.loadTitle()
                            }
                            e = jQuery.extend(!0, {}, e), e.origLocation = e.origLocation.cloneNode(), e.destLocation = e.destLocation.cloneNode(), e = t.FREEZE(e), this.fetch_(e, i)
                        }, i.prototype.getWait = function() {
                            return this.wait_
                        }, i.prototype.setWait = function(t) {
                            return this.wait_ && this.wait_.state && "pending" === this.wait_.state() && this.wait_.reject(), this.wait_ = t
                        }, i.prototype.fetch_ = function(t, e) {
                            var i = this;
                            this.provider.fetchRecord(t, e, function(t, e, n) {
                                return i.success_(t, e, n)
                            }, function(t, e, n) {
                                return i.failure_(t, e, n)
                            })
                        }, i.prototype.success_ = function(t, i, n) {
                            new e.PageUpdate(this.model_, this, this.data_, this.balancer_, i, n, t)
                        }, i.prototype.failure_ = function(t, e, i) {
                            var n = this;
                            e.fallback && "abort" !== t.data.textStatus() && (this.data_.saveExpires(e.destLocation.href, "", 0), e.balance.active && (this.data_.saveServer(t.data.host(), (new Date).getTime() + e.balance.server.expires, 0, 0, (new Date).getTime()), this.balancer_.changeServer(this.balancer_.chooseServer(e), e)), setTimeout(function() {
                                return n.model_.fallback(i)
                            }, 100))
                        }, i.prototype.chooseArea = function(t, e, i) {}, i.prototype.dispatchEvent = function(t, e, i, n) {}, i
                    }();
                    e.Page = i
                }(i = e.APP || (e.APP = {}))
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(MODULE) {
            var MODEL;
            ! function(MODEL) {
                var APP;
                ! function(APP) {
                    MODULE.MIXIN(APP.Page, [APP.PageUtility]);
                    var Main = function() {
                        function Main(t, e) {
                            this.model_ = t, this.controller_ = e, this.util_ = MODULE.LIBRARY.Utility, this.settings_ = {}, this.data = new APP.Data(this.model_), this.balancer = new APP.Balancer(this.data), this.page = new APP.Page(this.model_, this.data, this.balancer)
                        }
                        return Main.prototype.initialize = function(t, e) {
                            var i = this;
                            this.controller_.view(t, e), this.balancer.enable(e), this.balancer.changeServer(this.balancer.chooseServer(e), e), this.data.loadBuffers(), setTimeout(function() {
                                return i.page.landing = null
                            }, 1500)
                        }, Main.prototype.configure = function(destination) {
                            var _this = this,
                                event = destination.preventDefault ? destination : null;
                            switch (event && "object" == typeof event && event.type.toLowerCase()) {
                                case MODULE.EVENT.CLICK:
                                    return this.configure(event.currentTarget);
                                case MODULE.EVENT.SUBMIT:
                                    return this.configure(event.currentTarget);
                                case MODULE.EVENT.POPSTATE:
                                    return this.configure(window.location);
                                case null:
                            }
                            var url;
                            switch (!0) {
                                case "string" == typeof destination:
                                    url = destination;
                                    break;
                                case "href" in destination && "string" == typeof destination.href:
                                    url = this.util_.normalizeUrl(destination.href);
                                    break;
                                case "href" in destination && "object" == typeof destination.href:
                                    url = this.util_.normalizeUrl(destination.href.baseVal);
                                    break;
                                case "action" in destination:
                                    switch (url = this.util_.normalizeUrl(destination.action.replace(/[?#].*/, "")), destination.method.toUpperCase()) {
                                        case "GET":
                                            url += "?" + jQuery(destination).serialize()
                                    }
                                    break;
                                default:
                                    url = this.model_.location.href, this.option_ = destination
                            }
                            var index = [this.util_.canonicalizeUrl(this.model_.location.href).slice(0, 2048), this.util_.canonicalizeUrl(url).slice(0, 2048)].join(" ");
                            if (!this.option_) return null;
                            if (index in this.settings_) return this.settings_[index];
                            var origLocation = this.model_.location.cloneNode(),
                                destLocation = this.model_.location.cloneNode();
                            origLocation.href = this.util_.canonicalizeUrl(origLocation.href), destLocation.href = this.util_.canonicalizeUrl(url);
                            var scope = this.scope_(this.option_, origLocation.href, destLocation.href) || null,
                                initial = {
                                    area: "body",
                                    link: "a:not([target])",
                                    filter: function() {
                                        var t = document.createElement("a");
                                        return t.href = "string" == typeof this.href ? this.href : this.href.baseVal, /^https?:/.test(t.href) && /\/[^.]*$|\.(html?|php)$/.test(t.pathname.replace(/^\/?/, "/"))
                                    },
                                    form: null,
                                    replace: null,
                                    bind: null,
                                    rewrite: null,
                                    scope: null,
                                    state: null,
                                    scrollTop: 0,
                                    scrollLeft: 0,
                                    ajax: {
                                        dataType: "text"
                                    },
                                    contentType: "text/html",
                                    redirect: !0,
                                    cache: {
                                        click: !1,
                                        submit: !1,
                                        popstate: !1,
                                        get: !0,
                                        post: !0,
                                        mix: 0,
                                        limit: 100,
                                        expires: {
                                            max: null,
                                            min: 3e5
                                        }
                                    },
                                    buffer: {
                                        limit: 30,
                                        delay: 500
                                    },
                                    load: {
                                        head: "",
                                        css: !1,
                                        script: !1,
                                        ignore: '[src*="jquery.js"], [src*="jquery.min.js"], [href^="chrome-extension://"]',
                                        reload: "",
                                        log: "head, body",
                                        error: !0,
                                        ajax: {
                                            dataType: "script",
                                            cache: !0
                                        }
                                    },
                                    balance: {
                                        active: !1,
                                        bounds: ["*"],
                                        weight: 1,
                                        random: 0,
                                        option: {
                                            server: {
                                                header: !1
                                            },
                                            ajax: {
                                                crossDomain: !0
                                            },
                                            callbacks: {
                                                ajax: {
                                                    beforeSend: null
                                                }
                                            }
                                        },
                                        client: {
                                            hosts: [],
                                            support: {
                                                browser: /msie|trident.+ rv:|chrome|firefox|safari/i,
                                                redirect: /chrome|firefox|safari/i
                                            },
                                            cookie: {
                                                balance: "balanceable",
                                                redirect: "redirectable",
                                                host: "host"
                                            }
                                        },
                                        server: {
                                            header: "X-Ajax-Host",
                                            respite: 6e5,
                                            expires: 864e6
                                        }
                                    },
                                    wait: 0,
                                    fallback: !0,
                                    reset: {
                                        type: "",
                                        count: 100,
                                        time: 108e5
                                    },
                                    fix: {
                                        location: !0,
                                        history: !0,
                                        scroll: !0,
                                        noscript: !0,
                                        reference: !0
                                    },
                                    database: {
                                        active: !0,
                                        revision: 0,
                                        refresh: 10
                                    },
                                    server: {
                                        query: null,
                                        header: !0
                                    },
                                    overlay: "",
                                    callback: null,
                                    callbacks: {
                                        ajax: {},
                                        update: {
                                            redirect: {},
                                            blur: {},
                                            url: {},
                                            rewrite: {},
                                            title: {},
                                            head: {},
                                            content: {},
                                            focus: {},
                                            scroll: {},
                                            css: {},
                                            script: {},
                                            balance: {}
                                        }
                                    },
                                    data: undefined
                                },
                                force = {
                                    uid: MODULE.UUID(),
                                    ns: "",
                                    nss: undefined,
                                    speedcheck: undefined,
                                    origLocation: origLocation,
                                    destLocation: destLocation,
                                    scroll: {
                                        queue: []
                                    },
                                    option: this.option_
                                },
                                compute = function() {
                                    setting.ns = setting.ns ? setting.ns.split(".").sort().join(".") : "";
                                    var nsArray = [MODULE.DEF.NAME].concat(setting.ns ? setting.ns.split(".") : []),
                                        query = setting.server.query;
                                    switch (query && typeof query) {
                                        case "string":
                                            query = eval("({" + query.toString().match(/[^?=&]+=[^&]*/g).join("&").replace(/"/g, '\\"').replace(/([^?=&]+)=([^&]*)/g, '"$1": "$2"').replace(/&/g, ",") + "})");
                                        case "object":
                                            query = jQuery.param(query);
                                            break;
                                        default:
                                            query = ""
                                    }
                                    return {
                                        uid: undefined,
                                        ns: undefined,
                                        origLocation: undefined,
                                        destLocation: undefined,
                                        scroll: undefined,
                                        option: undefined,
                                        speedcheck: undefined,
                                        nss: {
                                            array: nsArray,
                                            name: nsArray.join("."),
                                            data: nsArray[0],
                                            url: _this.model_.convertUrlToKey(setting.destLocation.href, !0),
                                            event: {
                                                pjax: {
                                                    fetch: [MODULE.EVENT.PJAX, "fetch"].join(":"),
                                                    unload: [MODULE.EVENT.PJAX, "unload"].join(":"),
                                                    DOMContentLoaded: [MODULE.EVENT.PJAX, "DOMContentLoaded"].join(":"),
                                                    ready: [MODULE.EVENT.PJAX, "ready"].join(":"),
                                                    render: [MODULE.EVENT.PJAX, "render"].join(":"),
                                                    load: [MODULE.EVENT.PJAX, "load"].join(":")
                                                },
                                                click: [MODULE.EVENT.CLICK].concat(nsArray.join(":")).join("."),
                                                submit: [MODULE.EVENT.SUBMIT].concat(nsArray.join(":")).join("."),
                                                popstate: [MODULE.EVENT.POPSTATE].concat(nsArray.join(":")).join("."),
                                                scroll: [MODULE.EVENT.SCROLL].concat(nsArray.join(":")).join(".")
                                            },
                                            elem: nsArray.join("-"),
                                            requestHeader: ["X", nsArray[0].replace(/^\w/, function(t) {
                                                return t.toUpperCase()
                                            })].join("-")
                                        },
                                        fix: /android|iphone os|like mac os x/i.test(window.navigator.userAgent) ? undefined : {
                                            location: !1
                                        },
                                        contentType: setting.contentType.replace(/\s*[,;]\s*/g, "|").toLowerCase(),
                                        database: {
                                            refresh: Math.min(setting.database.refresh, 30)
                                        },
                                        reset: {
                                            type: (setting.reset.type || "").toLowerCase()
                                        },
                                        server: {
                                            query: query
                                        },
                                        timeStamp: (new Date).getTime()
                                    }
                                },
                                setting;
                            return setting = jQuery.extend(!0, initial, scope || this.option_), setting = jQuery.extend(!0, setting, setting.balance.active && setting.balance.option, force), setting = jQuery.extend(!0, setting, compute()), scope ? (MODULE.FREEZE(setting, !0), this.settings_[index] = setting, setting) : (this.settings_[index] = null, null)
                        }, Main.prototype.scope_ = function(t, e, i) {
                            if (t = jQuery.extend(!0, {}, t), !t.scope) return t;
                            var n, s, o, r, a, c, h = t.scope;
                            n = this.model_.convertUrlToKey(e, !0).match(/.+?\w(\/.*)/).pop(), s = this.model_.convertUrlToKey(i, !0).match(/.+?\w(\/.*)/).pop(), o = n.split("/");
                            for (var l = o.length; l--;)
                                if (r = o.slice(0, l + 1).join("/"), r += "/" === n.charAt(r.length) ? "/" : "", r && r in h) {
                                    var u;
                                    if (h[r] instanceof Array ? (a = "", u = h[r]) : (a = h[r], u = h[a]), u) {
                                        u = u.concat();
                                        var p, d, f, m = [];
                                        f = c = p = d = undefined;
                                        for (var y, v = 0; y = u[v]; v++) {
                                            if ("#" === y.charAt(0)) {
                                                if (~jQuery.inArray(y, m) || !(y.length > 1)) {
                                                    a = "";
                                                    continue
                                                }
                                                m.push(y), a = y.slice(1), [].splice.apply(u, [v, 1].concat(h[a], "#")), y = u[v]
                                            }
                                            if ("inherit" === y) f = !0;
                                            else if ("string" == typeof y) {
                                                var g = "!" === y.charAt(0);
                                                y = g ? y.slice(1) : y;
                                                var _ = "*" === y.charAt(0);
                                                y = _ ? y.slice(1) : y, (_ ? ~n.search(y) : ~n.indexOf(y)) && (g ? p = !1 : (p = !0, c = h["$" + a] || h["$" + y] || undefined)), (_ ? ~s.search(y) : ~s.indexOf(y)) && (g ? d = !1 : (d = !0, c = h["$" + a] || h["$" + y] || undefined))
                                            }
                                            if (!1 === p || !1 === d) return null
                                        }
                                        if (p && d) return jQuery.extend(!0, t, c);
                                        if (!f) break
                                    }
                                }
                            return undefined
                        }, Main
                    }();
                    APP.Main = Main
                }(APP = MODEL.APP || (MODEL.APP = {}))
            }(MODEL = MODULE.MODEL || (MODULE.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(t) {
                t.App = t.APP.Main
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            var e;
            ! function(e) {
                var i = function(i) {
                    function n() {
                        i.call(this, t.State.initiate), this.controller_ = new t.Controller(this).singleton(), this.app_ = new e.App(this, this.controller_), this.util_ = t.LIBRARY.Utility, this.isDeferrable = !!jQuery.when && "1.006" <= jQuery().jquery.match(/\d[\d.]+\d/).pop().replace(/\.(\d+)/g, ".00$1").replace(/0*(\d{3})/g, "$1"), this.location = document.createElement("a"), this.queue_ = []
                    }
                    return __extends(n, i), n.prototype.host = function() {
                        return this.app_.balancer.host()
                    }, n.prototype.state = function() {
                        return this.state_
                    }, n.prototype.main_ = function(e, i) {
                        var n = this;
                        switch (typeof i) {
                            case "object":
                                e = e instanceof t.DEF.NAMESPACE ? e : jQuery(document)[t.DEF.NAME](), t.FREEZE(i, !0);
                                break;
                            default:
                                return e
                        }
                        if (!window.history || !window.history.pushState || !window.history.replaceState) return e;
                        this.location.href = this.util_.normalizeUrl(window.location.href);
                        var s = this.app_.configure(i);
                        return s ? (this.app_.data.connect(s), this.speed = {
                            fire: 0,
                            time: [],
                            name: [],
                            now: function() {
                                return (new Date).getTime()
                            }
                        }, jQuery(function() {
                            n.app_.initialize(e, s), n.state_ = n.state() === t.State.initiate ? t.State.open : n.state(), n.overlay(s, !0)
                        }), e) : e
                    }, n.prototype.convertUrlToKey = function(t, e) {
                        return t = e ? this.util_.canonicalizeUrl(t) : t, this.util_.trim(t).split("#").shift()
                    }, n.prototype.compareKeyByUrl = function(t, e) {
                        return t = this.convertUrlToKey(t, !0), e = this.convertUrlToKey(e, !0), t === e
                    }, n.prototype.comparePageByUrl = function(t, e) {
                        return t = this.convertUrlToKey(t, !0), e = this.convertUrlToKey(e, !0), t === e
                    }, n.prototype.configure = function(t) {
                        return this.app_.configure(t)
                    }, n.prototype.isOperatable = function(e) {
                        if (t.State.open !== this.state()) return !1;
                        if (e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return !1;
                        var i;
                        switch (e.type.toLowerCase()) {
                            case t.EVENT.CLICK:
                                if (i = this.app_.configure(e.currentTarget), i && !jQuery(e.currentTarget).filter(i.filter).length) return !1;
                                break;
                            case t.EVENT.SUBMIT:
                                i = this.app_.configure(e.currentTarget);
                                break;
                            case t.EVENT.POPSTATE:
                                i = this.app_.configure(window.location)
                        }
                        if (!i) return !1;
                        if (i.origLocation.protocol !== i.destLocation.protocol || i.origLocation.host !== i.destLocation.host) return !1;
                        switch (e.type.toLowerCase()) {
                            case t.EVENT.CLICK:
                                if (this.comparePageByUrl(i.origLocation.href, i.destLocation.href) && i.destLocation.hash) return !1;
                                break;
                            case t.EVENT.SUBMIT:
                                break;
                            case t.EVENT.POPSTATE:
                                if (this.comparePageByUrl(i.origLocation.href, i.destLocation.href)) return !1
                        }
                        return !!this.app_.page.chooseArea(i.area, document, document)
                    }, n.prototype.getPageXHR = function() {
                        return this.app_.page.pageXHR
                    }, n.prototype.setPageXHR = function(t) {
                        return this.app_.page.pageXHR && this.app_.page.pageXHR.readyState < 4 && this.app_.page.pageXHR !== t && this.app_.page.pageXHR.abort(), this.app_.page.pageXHR = t
                    }, n.prototype.getDataXHR = function() {
                        return this.app_.page.dataXHR
                    }, n.prototype.setDataXHR = function(t) {
                        function e(e) {
                            switch (!0) {
                                case e >= i.length:
                                case 4 === i[e].readyState:
                                case i.indexOf(t[e]) > -1:
                                    return t[e]
                            }
                            return i[e].abort(), t[e]
                        }
                        t = t || [];
                        var i = this.app_.page.dataXHR;
                        return this.app_.page.dataXHR = Array.apply(null, Array(Math.max(t.length, this.app_.page.dataXHR.length))).map(function(t, i) {
                            return e(i)
                        }).filter(function(t) {
                            return !!t
                        })
                    }, n.prototype.click = function(e) {
                        e.timeStamp = (new Date).getTime();
                        var i = e.currentTarget,
                            n = (jQuery(i), this.app_.configure(i));
                        switch (this.location.href = this.util_.normalizeUrl(window.location.href), !0) {
                            case !n:
                            case e.isDefaultPrevented():
                            case this.state() !== t.State.open:
                                break;
                            case this.isOperatable(e):
                                this.app_.page.transfer(n, e), e.preventDefault();
                                break;
                            case this.isHashChange(n) && this.overlay(n):
                                e.preventDefault(), window.history.pushState(null, document.title, n.destLocation.href);
                                break;
                            case !e.originalEvent && !jQuery(document).has(i).length:
                                this.fallback(e)
                        }
                    }, n.prototype.submit = function(e) {
                        e.timeStamp = (new Date).getTime();
                        var i = e.currentTarget,
                            n = (jQuery(i), this.app_.configure(i));
                        switch (this.location.href = this.util_.normalizeUrl(window.location.href), !0) {
                            case !n:
                            case e.isDefaultPrevented():
                            case this.state() !== t.State.open:
                                break;
                            case this.isOperatable(e):
                                this.app_.page.transfer(n, e), e.preventDefault();
                                break;
                            case !e.originalEvent && !jQuery(document).has(i).length:
                                this.fallback(e)
                        }
                    }, n.prototype.popstate = function(e) {
                        if (!this.app_.page.landing || !this.util_.compareUrl(this.app_.page.landing, window.location.href)) {
                            e.timeStamp = (new Date).getTime();
                            var i = this.app_.configure(window.location);
                            switch (!0) {
                                case !i:
                                    !this.comparePageByUrl(this.location.href, window.location.href) && this.fallback(e);
                                    break;
                                case this.state() !== t.State.open:
                                    break;
                                case this.isOperatable(e):
                                    this.app_.page.transfer(i, e);
                                    break;
                                case this.isHashChange(i) && this.overlay(i):
                                    break;
                                case !this.comparePageByUrl(i.origLocation.href, window.location.href):
                                    this.fallback(e)
                            }
                            this.location.href = this.util_.normalizeUrl(window.location.href)
                        }
                    }, n.prototype.scroll = function(t, e) {
                        for (var i, n = this; i = this.queue_.shift();) clearTimeout(i);
                        i = setTimeout(function() {
                            for (; i = n.queue_.shift();) clearTimeout(i);
                            n.compareKeyByUrl(window.location.href, n.location.href) && n.app_.data.saveScrollPosition()
                        }, 300), this.queue_.push(i)
                    }, n.prototype.fallback = function(t) {
                        var e = this.configure(t);
                        switch (!0) {
                            case e && !e.fallback:
                            case e && !1 === this.util_.fire(e.fallback, e, [t, e, e.origLocation.cloneNode(), e.destLocation.cloneNode()]):
                                break;
                            default:
                                this.movePageNormally_(t)
                        }
                    }, n.prototype.movePageNormally_ = function(e) {
                        switch (e.type.toLowerCase()) {
                            case t.EVENT.CLICK:
                                "string" == typeof e.currentTarget.href ? window.location.assign(e.currentTarget.href) : window.location.assign(e.currentTarget.href.baseVal);
                                break;
                            case t.EVENT.SUBMIT:
                                switch (e.currentTarget.method.toUpperCase()) {
                                    case "GET":
                                        window.location.assign(e.currentTarget.action.replace(/[?#].*/, "") + "?" + jQuery(e.currentTarget).serialize());
                                        break;
                                    case "POST":
                                        window.location.assign(e.currentTarget.action);
                                }
                                break;
                            case t.EVENT.POPSTATE:
                                window.location.reload()
                        }
                    }, n.prototype.isHashChange = function(t) {
                        return !!t && t.origLocation.href.replace(/#.*/, "") === t.destLocation.href.replace(/#.*/, "") && t.origLocation.hash !== t.destLocation.hash
                    }, n.prototype.overlay = function(t, e) {
                        var i = this,
                            n = t.destLocation.hash.replace(/^#/, "");
                        if (!n || !t.overlay) return !1;
                        var s = jQuery("#" + n + ", [name~=" + n + "]");
                        if (s = s.add(s.nextUntil(":header")), s = s.filter(t.overlay).add(s.find(t.overlay)).first(), !s.length) return !1;
                        this.isHashChange(t) && (this.app_.data.loadScrollPosition(), setTimeout(function() {
                            return i.app_.data.loadScrollPosition()
                        }, 1));
                        var o = jQuery("<div>");
                        return s = s.clone(!0), o.addClass(t.nss.elem + "-overlay").css({
                            background: "rgba(255, 255, 255, 0.8)",
                            //display: "none",
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            margin: 0,
                            padding: 0,
                            border: "none"
                        }).append(s.css({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            margin: "auto"
                        }).show()), o.bind("click", o, function(t) {
                            t.target === t.currentTarget && (window.history.pushState(window.history.state, document.title, window.location.href.replace(/#.*/, "")), i.location.href = i.util_.normalizeUrl(window.location.href), jQuery(t.data).fadeOut("fast", function() {
                                return jQuery(t.data).remove()
                            }))
                        }), o.appendTo("body").fadeIn(e ? 0 : 100), jQuery(window).one("popstate", o, function(t) {
                            setTimeout(function() {
                                return i.app_.data.loadScrollPosition()
                            }, 1), jQuery(t.data).fadeOut("fast", function() {
                                return jQuery(t.data).remove()
                            })
                        }), /trident/i.test(window.navigator.userAgent) && s.width(s.width()), this.app_.data.saveScrollPosition(), !0
                    }, n.prototype.enable = function() {
                        this.state_ = t.State.open
                    }, n.prototype.disable = function() {
                        this.state_ = t.State.pause
                    }, n.prototype.getCache = function(t) {
                        var e = this.configure(this.convertUrlToKey(t));
                        if (e) {
                            var i = this.app_.page.provider.getRecord(e);
                            return i.state(e) || i.data.data() ? {
                                data: i.data.data(),
                                textStatus: i.data.textStatus(),
                                jqXHR: i.data.jqXHR(),
                                expires: i.data.expires(),
                                host: i.data.host()
                            } : void this.removeCache(t)
                        }
                    }, n.prototype.setCache = function(t, e, i, n) {
                        var s = this.configure(this.convertUrlToKey(t));
                        if (s) {
                            var o = this.app_.page.provider.getRecord(s);
                            this.app_.page.provider.setRecord(s, e || "", i || o.data.textStatus(), n || o.data.jqXHR(), this.app_.balancer.sanitize(n, s) || o.data.host() || "", null)
                        }
                    }, n.prototype.removeCache = function(t) {
                        var e = this.configure(this.convertUrlToKey(t));
                        e && this.app_.page.provider.removeRecord(e)
                    }, n.prototype.clearCache = function() {
                        this.app_.page.provider.clearRecord()
                    }, n.prototype.bypass = function() {
                        return this.app_.balancer.bypass(this.app_.configure(window.location))
                    }, n
                }(e.Template);
                e.Main = i;
                var n = function() {
                    function t() {
                        t.instance_ = t.instance_ || new i
                    }
                    return t.singleton = function() {
                        return t.instance_
                    }, t.prototype.singleton = function() {
                        return t.singleton()
                    }, t
                }();
                e.Singleton = n
            }(e = t.MODEL || (t.MODEL = {}))
        }(MODULE || (MODULE = {}));
        var MODULE;
        ! function(t) {
            t.Model = t.MODEL.Singleton
        }(MODULE || (MODULE = {}));
        var Module = function() {
            function t() {
                new MODULE.Model
            }
            return t
        }();
        new Module
    }(window, window.document, void 0, jQuery)
}, function(t, e) {
    ! function(t) {
        t(jQuery)
    }(function(t) {
        function e(t) {
            return a.raw ? t : encodeURIComponent(t)
        }

        function i(t) {
            return a.raw ? t : decodeURIComponent(t)
        }

        function n(t) {
            return e(a.json ? JSON.stringify(t) : String(t))
        }

        function s(t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(r, " ")), a.json ? JSON.parse(t) : t
            } catch (e) {}
        }

        function o(e, i) {
            var n = a.raw ? e : s(e);
            return t.isFunction(i) ? i(n) : n
        }
        var r = /\+/g,
            a = t.cookie = function(s, r, c) {
                if (arguments.length > 1 && !t.isFunction(r)) {
                    if (c = t.extend({}, a.defaults, c), "number" == typeof c.expires) {
                        var h = c.expires,
                            l = c.expires = new Date;
                        l.setMilliseconds(l.getMilliseconds() + 864e5 * h)
                    }
                    return document.cookie = [e(s), "=", n(r), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join("")
                }
                for (var u = s ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], d = 0, f = p.length; f > d; d++) {
                    var m = p[d].split("="),
                        y = i(m.shift()),
                        v = m.join("=");
                    if (s === y) {
                        u = o(v, r);
                        break
                    }
                    s || void 0 === (v = o(v)) || (u[y] = v)
                }
                return u
            };
        a.defaults = {}, t.removeCookie = function(e, i) {
            return t.cookie(e, "", t.extend({}, i, {
                expires: -1
            })), !t.cookie(e)
        }
    })
}, function(t, e, i) {
    var n, s;
    ! function() {
        if ("performance" in window == !1 && (window.performance = {}), Date.now = Date.now || function() {
                return (new Date).getTime()
            }, "now" in window.performance == !1) {
            var t = window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart : Date.now();
            window.performance.now = function() {
                return Date.now() - t
            }
        }
    }();
    var o = o || function() {
        var t = [];
        return {
            getAll: function() {
                return t
            },
            removeAll: function() {
                t = []
            },
            add: function(e) {
                t.push(e)
            },
            remove: function(e) {
                var i = t.indexOf(e); - 1 !== i && t.splice(i, 1)
            },
            update: function(e) {
                if (0 === t.length) return !1;
                var i = 0;
                for (e = void 0 !== e ? e : window.performance.now(); i < t.length;) t[i].update(e) ? i++ : t.splice(i, 1);
                return !0
            }
        }
    }();
    o.Tween = function(t) {
            var e = t,
                i = {},
                n = {},
                s = {},
                r = 1e3,
                a = 0,
                c = !1,
                h = !1,
                l = !1,
                u = 0,
                p = null,
                d = o.Easing.Linear.None,
                f = o.Interpolation.Linear,
                m = [],
                y = null,
                v = !1,
                g = null,
                _ = null,
                w = null;
            for (var b in t) i[b] = parseFloat(t[b], 10);
            this.to = function(t, e) {
                return void 0 !== e && (r = e), n = t, this
            }, this.start = function(t) {
                o.add(this), h = !0, v = !1, p = void 0 !== t ? t : window.performance.now(), p += u;
                for (var r in n) {
                    if (n[r] instanceof Array) {
                        if (0 === n[r].length) continue;
                        n[r] = [e[r]].concat(n[r])
                    }
                    void 0 !== i[r] && (i[r] = e[r], i[r] instanceof Array == !1 && (i[r] *= 1), s[r] = i[r] || 0)
                }
                return this
            }, this.stop = function() {
                return h ? (o.remove(this), h = !1, null !== w && w.call(e), this.stopChainedTweens(), this) : this
            }, this.stopChainedTweens = function() {
                for (var t = 0, e = m.length; e > t; t++) m[t].stop()
            }, this.delay = function(t) {
                return u = t, this
            }, this.repeat = function(t) {
                return a = t, this
            }, this.yoyo = function(t) {
                return c = t, this
            }, this.easing = function(t) {
                return d = t, this
            }, this.interpolation = function(t) {
                return f = t, this
            }, this.chain = function() {
                return m = arguments, this
            }, this.onStart = function(t) {
                return y = t, this
            }, this.onUpdate = function(t) {
                return g = t, this
            }, this.onComplete = function(t) {
                return _ = t, this
            }, this.onStop = function(t) {
                return w = t, this
            }, this.update = function(t) {
                var o, h, w;
                if (p > t) return !0;
                v === !1 && (null !== y && y.call(e), v = !0), h = (t - p) / r, h = h > 1 ? 1 : h, w = d(h);
                for (o in n)
                    if (void 0 !== i[o]) {
                        var b = i[o] || 0,
                            E = n[o];
                        E instanceof Array ? e[o] = f(E, w) : ("string" == typeof E && (E = E.startsWith("+") || E.startsWith("-") ? b + parseFloat(E, 10) : parseFloat(E, 10)), "number" == typeof E && (e[o] = b + (E - b) * w))
                    }
                if (null !== g && g.call(e, w), 1 === h) {
                    if (a > 0) {
                        isFinite(a) && a--;
                        for (o in s) {
                            if ("string" == typeof n[o] && (s[o] = s[o] + parseFloat(n[o], 10)), c) {
                                var x = s[o];
                                s[o] = n[o], n[o] = x
                            }
                            i[o] = s[o]
                        }
                        return c && (l = !l), p = t + u, !0
                    }
                    null !== _ && _.call(e);
                    for (var T = 0, S = m.length; S > T; T++) m[T].start(p + r);
                    return !1
                }
                return !0
            }
        }, o.Easing = {
            Linear: {
                None: function(t) {
                    return t
                }
            },
            Quadratic: {
                In: function(t) {
                    return t * t
                },
                Out: function(t) {
                    return t * (2 - t)
                },
                InOut: function(t) {
                    return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                }
            },
            Cubic: {
                In: function(t) {
                    return t * t * t
                },
                Out: function(t) {
                    return --t * t * t + 1
                },
                InOut: function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                }
            },
            Quartic: {
                In: function(t) {
                    return t * t * t * t
                },
                Out: function(t) {
                    return 1 - --t * t * t * t
                },
                InOut: function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                }
            },
            Quintic: {
                In: function(t) {
                    return t * t * t * t * t
                },
                Out: function(t) {
                    return --t * t * t * t * t + 1
                },
                InOut: function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                }
            },
            Sinusoidal: {
                In: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Out: function(t) {
                    return Math.sin(t * Math.PI / 2)
                },
                InOut: function(t) {
                    return .5 * (1 - Math.cos(Math.PI * t))
                }
            },
            Exponential: {
                In: function(t) {
                    return 0 === t ? 0 : Math.pow(1024, t - 1)
                },
                Out: function(t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                },
                InOut: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
                }
            },
            Circular: {
                In: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Out: function(t) {
                    return Math.sqrt(1 - --t * t)
                },
                InOut: function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                }
            },
            Elastic: {
                In: function(t) {
                    var e, i = .1,
                        n = .4;
                    return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)))
                },
                Out: function(t) {
                    var e, i = .1,
                        n = .4;
                    return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
                },
                InOut: function(t) {
                    var e, i = .1,
                        n = .4;
                    return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
                }
            },
            Back: {
                In: function(t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                },
                Out: function(t) {
                    var e = 1.70158;
                    return --t * t * ((e + 1) * t + e) + 1
                },
                InOut: function(t) {
                    var e = 2.5949095;
                    return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                }
            },
            Bounce: {
                In: function(t) {
                    return 1 - o.Easing.Bounce.Out(1 - t)
                },
                Out: function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                },
                InOut: function(t) {
                    return .5 > t ? .5 * o.Easing.Bounce.In(2 * t) : .5 * o.Easing.Bounce.Out(2 * t - 1) + .5
                }
            }
        }, o.Interpolation = {
            Linear: function(t, e) {
                var i = t.length - 1,
                    n = i * e,
                    s = Math.floor(n),
                    r = o.Interpolation.Utils.Linear;
                return 0 > e ? r(t[0], t[1], n) : e > 1 ? r(t[i], t[i - 1], i - n) : r(t[s], t[s + 1 > i ? i : s + 1], n - s)
            },
            Bezier: function(t, e) {
                for (var i = 0, n = t.length - 1, s = Math.pow, r = o.Interpolation.Utils.Bernstein, a = 0; n >= a; a++) i += s(1 - e, n - a) * s(e, a) * t[a] * r(n, a);
                return i
            },
            CatmullRom: function(t, e) {
                var i = t.length - 1,
                    n = i * e,
                    s = Math.floor(n),
                    r = o.Interpolation.Utils.CatmullRom;
                return t[0] === t[i] ? (0 > e && (s = Math.floor(n = i * (1 + e))), r(t[(s - 1 + i) % i], t[s], t[(s + 1) % i], t[(s + 2) % i], n - s)) : 0 > e ? t[0] - (r(t[0], t[0], t[1], t[1], -n) - t[0]) : e > 1 ? t[i] - (r(t[i], t[i], t[i - 1], t[i - 1], n - i) - t[i]) : r(t[s ? s - 1 : 0], t[s], t[s + 1 > i ? i : s + 1], t[s + 2 > i ? i : s + 2], n - s)
            },
            Utils: {
                Linear: function(t, e, i) {
                    return (e - t) * i + t
                },
                Bernstein: function(t, e) {
                    var i = o.Interpolation.Utils.Factorial;
                    return i(t) / i(e) / i(t - e)
                },
                Factorial: function() {
                    var t = [1];
                    return function(e) {
                        var i = 1;
                        if (t[e]) return t[e];
                        for (var n = e; n > 1; n--) i *= n;
                        return t[e] = i, i
                    }
                }(),
                CatmullRom: function(t, e, i, n, s) {
                    var o = .5 * (i - t),
                        r = .5 * (n - e),
                        a = s * s,
                        c = s * a;
                    return (2 * e - 2 * i + o + r) * c + (-3 * e + 3 * i - 2 * o - r) * a + o * s + e
                }
            }
        },
        function(i) {
            n = [], s = function() {
                return o
            }.apply(e, n), !(void 0 !== s && (t.exports = s))
        }(this)
}, function(t, e) {
    ! function(t, e, i) {
        var n = function() {
            for (var t = /audio(.min)?.js.*/, e = document.getElementsByTagName("script"), i = 0, n = e.length; n > i; i++) {
                var s = e[i].getAttribute("src");
                if (t.test(s)) return s.replace(t, "")
            }
        }();
        i[t] = {
            instanceCount: 0,
            instances: {},
            flashSource: '      <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="$1" width="1" height="1" name="$1" style="position: absolute; left: -1px;">         <param name="movie" value="$2?playerInstance=' + t + '.instances[\'$1\']&datetime=$3">         <param name="allowscriptaccess" value="always">         <embed name="$1" src="$2?playerInstance=' + t + '.instances[\'$1\']&datetime=$3" width="1" height="1" allowscriptaccess="always">       </object>',
            settings: {
                autoplay: !1,
                loop: !1,
                preload: !0,
                imageLocation: n + "player-graphics.gif",
                swfLocation: n + "audiojs.swf",
                useFlash: function() {
                    var t = document.createElement("audio");
                    return !(t.canPlayType && t.canPlayType("audio/mpeg;").replace(/no/, ""))
                }(),
                hasFlash: function() {
                    if (navigator.plugins && navigator.plugins.length && navigator.plugins["Shockwave Flash"]) return !0;
                    if (navigator.mimeTypes && navigator.mimeTypes.length) {
                        var t = navigator.mimeTypes["application/x-shockwave-flash"];
                        return t && t.enabledPlugin
                    }
                    try {
                        return new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), !0
                    } catch (e) {}
                    return !1
                }(),
                createPlayer: {
                    markup: '          <div class="play-pause">             <p class="play"></p>             <p class="pause"></p>             <p class="loading"></p>             <p class="error"></p>           </div>           <div class="scrubber">             <div class="progress"></div>             <div class="loaded"></div>           </div>           <div class="time">             <em class="played">00:00</em>/<strong class="duration">00:00</strong>           </div>           <div class="error-message"></div>',
                    playPauseClass: "play-pause",
                    scrubberClass: "scrubber",
                    progressClass: "progress",
                    loaderClass: "loaded",
                    timeClass: "time",
                    durationClass: "duration",
                    playedClass: "played",
                    errorMessageClass: "error-message",
                    playingClass: "playing",
                    loadingClass: "loading",
                    errorClass: "error"
                },
                css: "        .audiojs audio { position: absolute; left: -1px; }         .audiojs { width: 460px; height: 36px; background: #404040; overflow: hidden; font-family: monospace; font-size: 12px;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #444), color-stop(0.5, #555), color-stop(0.51, #444), color-stop(1, #444));           background-image: -moz-linear-gradient(center top, #444 0%, #555 50%, #444 51%, #444 100%);           -webkit-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); -moz-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);           -o-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); }         .audiojs .play-pause { width: 25px; height: 40px; padding: 4px 6px; margin: 0px; float: left; overflow: hidden; border-right: 1px solid #000; }         .audiojs p { display: none; width: 25px; height: 40px; margin: 0px; cursor: pointer; }         .audiojs .play { display: block; }         .audiojs .scrubber { position: relative; float: left; width: 280px; background: #5a5a5a; height: 14px; margin: 10px; border-top: 1px solid #3f3f3f; border-left: 0px; border-bottom: 0px; overflow: hidden; }         .audiojs .progress { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #ccc; z-index: 1;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #ccc), color-stop(0.5, #ddd), color-stop(0.51, #ccc), color-stop(1, #ccc));           background-image: -moz-linear-gradient(center top, #ccc 0%, #ddd 50%, #ccc 51%, #ccc 100%); }         .audiojs .loaded { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #000;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #222), color-stop(0.5, #333), color-stop(0.51, #222), color-stop(1, #222));           background-image: -moz-linear-gradient(center top, #222 0%, #333 50%, #222 51%, #222 100%); }         .audiojs .time { float: left; height: 36px; line-height: 36px; margin: 0px 0px 0px 6px; padding: 0px 6px 0px 12px; border-left: 1px solid #000; color: #ddd; text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5); }         .audiojs .time em { padding: 0px 2px 0px 0px; color: #f9f9f9; font-style: normal; }         .audiojs .time strong { padding: 0px 0px 0px 2px; font-weight: normal; }         .audiojs .error-message { float: left; display: none; margin: 0px 10px; height: 36px; width: 400px; overflow: hidden; line-height: 36px; white-space: nowrap; color: #fff;           text-overflow: ellipsis; -o-text-overflow: ellipsis; -icab-text-overflow: ellipsis; -khtml-text-overflow: ellipsis; -moz-text-overflow: ellipsis; -webkit-text-overflow: ellipsis; }         .audiojs .error-message a { color: #eee; text-decoration: none; padding-bottom: 1px; border-bottom: 1px solid #999; white-space: wrap; }                 .audiojs .play { background: none -2px -1px no-repeat; }         .audiojs .loading { background: none -2px -31px no-repeat; }         .audiojs .error { background: none -2px -61px no-repeat; }         .audiojs .pause { background: none -2px -91px no-repeat; }                 .playing .play, .playing .loading, .playing .error { display: none; }         .playing .pause { display: block; }                 .loading .play, .loading .pause, .loading .error { display: none; }         .loading .loading { display: block; }                 .error .time, .error .play, .error .pause, .error .scrubber, .error .loading { display: none; }         .error .error { display: block; }         .error .play-pause p { cursor: auto; }         .error .error-message { display: block; }",
                trackEnded: function() {},
                flashError: function() {
                    var e = this.settings.createPlayer,
                        n = s(e.errorMessageClass, this.wrapper),
                        o = 'Missing <a href="http://get.adobe.com/flashplayer/">flash player</a> plugin.';
                    this.mp3 && (o += ' <a href="' + this.mp3 + '">Download audio file</a>.'), i[t].helpers.removeClass(this.wrapper, e.loadingClass), i[t].helpers.addClass(this.wrapper, e.errorClass), n.innerHTML = o
                },
                loadError: function() {
                    var e = this.settings.createPlayer,
                        n = s(e.errorMessageClass, this.wrapper);
                    i[t].helpers.removeClass(this.wrapper, e.loadingClass), i[t].helpers.addClass(this.wrapper, e.errorClass), n.innerHTML = 'Error loading: "' + this.mp3 + '"'
                },
                init: function() {
                    i[t].helpers.addClass(this.wrapper, this.settings.createPlayer.loadingClass)
                },
                loadStarted: function() {
                    var e = this.settings.createPlayer,
                        n = s(e.durationClass, this.wrapper),
                        o = Math.floor(this.duration / 60),
                        r = Math.floor(this.duration % 60);
                    i[t].helpers.removeClass(this.wrapper, e.loadingClass), n.innerHTML = (10 > o ? "0" : "") + o + ":" + (10 > r ? "0" : "") + r
                },
                loadProgress: function(t) {
                    var e = this.settings.createPlayer,
                        i = s(e.scrubberClass, this.wrapper);
                    s(e.loaderClass, this.wrapper).style.width = i.offsetWidth * t + "px"
                },
                playPause: function() {
                    this.playing ? this.settings.play() : this.settings.pause()
                },
                play: function() {
                    i[t].helpers.addClass(this.wrapper, this.settings.createPlayer.playingClass)
                },
                pause: function() {
                    i[t].helpers.removeClass(this.wrapper, this.settings.createPlayer.playingClass)
                },
                updatePlayhead: function(t) {
                    var e = this.settings.createPlayer,
                        i = s(e.scrubberClass, this.wrapper);
                    s(e.progressClass, this.wrapper).style.width = i.offsetWidth * t + "px", e = s(e.playedClass, this.wrapper), i = this.duration * t, t = Math.floor(i / 60), i = Math.floor(i % 60), e.innerHTML = (10 > t ? "0" : "") + t + ":" + (10 > i ? "0" : "") + i
                }
            },
            create: function(t, e) {
                return e = e || {}, t.length ? this.createAll(e, t) : this.newInstance(t, e)
            },
            createAll: function(t, e) {
                var i = e || document.getElementsByTagName("audio"),
                    n = [];
                t = t || {};
                for (var s = 0, o = i.length; o > s; s++) n.push(this.newInstance(i[s], t));
                return n
            },
            newInstance: function(t, n) {
                var s = this.helpers.clone(this.settings),
                    o = "audiojs" + this.instanceCount,
                    r = "audiojs_wrapper" + this.instanceCount;
                return this.instanceCount++, null != t.getAttribute("autoplay") && (s.autoplay = !0), null != t.getAttribute("loop") && (s.loop = !0), "none" == t.getAttribute("preload") && (s.preload = !1), n && this.helpers.merge(s, n), s.createPlayer.markup ? t = this.createPlayer(t, s.createPlayer, r) : t.parentNode.setAttribute("id", r), r = new i[e](t, s), s.css && this.helpers.injectCss(r, s.css), s.useFlash && s.hasFlash ? (this.injectFlash(r, o), this.attachFlashEvents(r.wrapper, r)) : s.useFlash && !s.hasFlash && this.settings.flashError.apply(r), (!s.useFlash || s.useFlash && s.hasFlash) && this.attachEvents(r.wrapper, r), this.instances[o] = r
            },
            createPlayer: function(t, e, i) {
                var n = document.createElement("div"),
                    s = t.cloneNode(!0);
                return n.setAttribute("class", "audiojs"), n.setAttribute("className", "audiojs"), n.setAttribute("id", i), s.outerHTML && !document.createElement("audio").canPlayType ? (s = this.helpers.cloneHtml5Node(t), n.innerHTML = e.markup, n.appendChild(s), t.outerHTML = n.outerHTML, n = document.getElementById(i)) : (n.appendChild(s), n.innerHTML += e.markup, t.parentNode.replaceChild(n, t)), n.getElementsByTagName("audio")[0]
            },
            attachEvents: function(e, n) {
                if (n.settings.createPlayer) {
                    var o = n.settings.createPlayer,
                        r = s(o.playPauseClass, e),
                        a = s(o.scrubberClass, e);
                    i[t].events.addListener(r, "click", function() {
                        n.playPause.apply(n)
                    }), i[t].events.addListener(a, "click", function(t) {
                        t = t.clientX;
                        var e = this,
                            i = 0;
                        if (e.offsetParent)
                            do i += e.offsetLeft; while (e = e.offsetParent);
                        n.skipTo((t - i) / a.offsetWidth)
                    }), n.settings.useFlash || (i[t].events.trackLoadProgress(n), i[t].events.addListener(n.element, "timeupdate", function() {
                        n.updatePlayhead.apply(n)
                    }), i[t].events.addListener(n.element, "ended", function() {
                        n.trackEnded.apply(n)
                    }), i[t].events.addListener(n.source, "error", function() {
                        clearInterval(n.readyTimer), clearInterval(n.loadTimer), n.settings.loadError.apply(n)
                    }))
                }
            },
            attachFlashEvents: function(t, e) {
                e.swfReady = !1, e.load = function(t) {
                    e.mp3 = t, e.swfReady && e.element.load(t)
                }, e.loadProgress = function(t, i) {
                    e.loadedPercent = t, e.duration = i, e.settings.loadStarted.apply(e), e.settings.loadProgress.apply(e, [t])
                }, e.skipTo = function(t) {
                    t > e.loadedPercent || (e.updatePlayhead.call(e, [t]), e.element.skipTo(t))
                }, e.updatePlayhead = function(t) {
                    e.settings.updatePlayhead.apply(e, [t])
                }, e.play = function() {
                    e.settings.preload || (e.settings.preload = !0, e.element.init(e.mp3)), e.playing = !0, e.element.pplay(), e.settings.play.apply(e)
                }, e.pause = function() {
                    e.playing = !1, e.element.ppause(), e.settings.pause.apply(e)
                }, e.setVolume = function(t) {
                    e.element.setVolume(t)
                }, e.loadStarted = function() {
                    e.swfReady = !0, e.settings.preload && e.element.init(e.mp3), e.settings.autoplay && e.play.apply(e)
                }
            },
            injectFlash: function(t, e) {
                var i = this.flashSource.replace(/\$1/g, e);
                i = i.replace(/\$2/g, t.settings.swfLocation), i = i.replace(/\$3/g, +new Date + Math.random());
                var n = t.wrapper.innerHTML,
                    s = document.createElement("div");
                s.innerHTML = i + n, t.wrapper.innerHTML = s.innerHTML, t.element = this.helpers.getSwf(e)
            },
            helpers: {
                merge: function(t, e) {
                    for (attr in e)(t.hasOwnProperty(attr) || e.hasOwnProperty(attr)) && (t[attr] = e[attr])
                },
                clone: function(t) {
                    if (null == t || "object" != typeof t) return t;
                    var e, i = new t.constructor;
                    for (e in t) i[e] = arguments.callee(t[e]);
                    return i
                },
                addClass: function(t, e) {
                    RegExp("(\\s|^)" + e + "(\\s|$)").test(t.className) || (t.className += " " + e)
                },
                removeClass: function(t, e) {
                    t.className = t.className.replace(RegExp("(\\s|^)" + e + "(\\s|$)"), " ")
                },
                injectCss: function(t, e) {
                    for (var i = "", n = document.getElementsByTagName("style"), s = e.replace(/\$1/g, t.settings.imageLocation), o = 0, r = n.length; r > o; o++) {
                        var a = n[o].getAttribute("title");
                        if (a && ~a.indexOf("audiojs")) {
                            if (r = n[o], r.innerHTML === s) return;
                            i = r.innerHTML;
                            break
                        }
                    }
                    n = document.getElementsByTagName("head")[0], o = n.firstChild, r = document.createElement("style"), n && (r.setAttribute("type", "text/css"), r.setAttribute("title", "audiojs"), r.styleSheet ? r.styleSheet.cssText = i + s : r.appendChild(document.createTextNode(i + s)), o ? n.insertBefore(r, o) : n.appendChild(styleElement))
                },
                cloneHtml5Node: function(t) {
                    var e = document.createDocumentFragment(),
                        i = e.createElement ? e : document;
                    return i.createElement("audio"), i = i.createElement("div"), e.appendChild(i), i.innerHTML = t.outerHTML, i.firstChild
                },
                getSwf: function(t) {
                    return t = document[t] || window[t], t.length > 1 ? t[t.length - 1] : t
                }
            },
            events: {
                memoryLeaking: !1,
                listeners: [],
                addListener: function(e, n, s) {
                    e.addEventListener ? e.addEventListener(n, s, !1) : e.attachEvent && (this.listeners.push(e), this.memoryLeaking || (window.attachEvent("onunload", function() {
                        if (this.listeners)
                            for (var e = 0, n = this.listeners.length; n > e; e++) i[t].events.purge(this.listeners[e])
                    }), this.memoryLeaking = !0), e.attachEvent("on" + n, function() {
                        s.call(e, window.event)
                    }))
                },
                trackLoadProgress: function(t) {
                    if (t.settings.preload) {
                        var e, i;
                        t = t;
                        var n = /(ipod|iphone|ipad)/i.test(navigator.userAgent);
                        e = setInterval(function() {
                            t.element.readyState > -1 && (n || t.init.apply(t)), t.element.readyState > 1 && (t.settings.autoplay && t.play.apply(t), clearInterval(e), i = setInterval(function() {
                                t.loadProgress.apply(t), t.loadedPercent >= 1 && clearInterval(i)
                            }))
                        }, 10), t.readyTimer = e, t.loadTimer = i
                    }
                },
                purge: function(t) {
                    var e, i = t.attributes;
                    if (i)
                        for (e = 0; e < i.length; e += 1) "function" == typeof t[i[e].name] && (t[i[e].name] = null);
                    if (i = t.childNodes)
                        for (e = 0; e < i.length; e += 1) purge(t.childNodes[e])
                },
                ready: function() {
                    return function(t) {
                        var e = window,
                            i = !1,
                            n = !0,
                            s = e.document,
                            o = s.documentElement,
                            r = s.addEventListener ? "addEventListener" : "attachEvent",
                            a = s.addEventListener ? "removeEventListener" : "detachEvent",
                            c = s.addEventListener ? "" : "on",
                            h = function(n) {
                                "readystatechange" == n.type && "complete" != s.readyState || (("load" == n.type ? e : s)[a](c + n.type, h, !1), !i && (i = !0) && t.call(e, n.type || n))
                            },
                            l = function() {
                                try {
                                    o.doScroll("left")
                                } catch (t) {
                                    return void setTimeout(l, 50)
                                }
                                h("poll")
                            };
                        if ("complete" == s.readyState) t.call(e, "lazy");
                        else {
                            if (s.createEventObject && o.doScroll) {
                                try {
                                    n = !e.frameElement
                                } catch (u) {}
                                n && l()
                            }
                            s[r](c + "DOMContentLoaded", h, !1), s[r](c + "readystatechange", h, !1), e[r](c + "load", h, !1)
                        }
                    }
                }()
            }
        }, i[e] = function(t, e) {
            this.element = t, this.wrapper = t.parentNode, this.source = t.getElementsByTagName("source")[0] || t, this.mp3 = function(t) {
                var e = t.getElementsByTagName("source")[0];
                return t.getAttribute("src") || (e ? e.getAttribute("src") : null)
            }(t), this.settings = e, this.loadStartedCalled = !1, this.loadedPercent = 0, this.duration = 1, this.playing = !1
        }, i[e].prototype = {
            updatePlayhead: function() {
                this.settings.updatePlayhead.apply(this, [this.element.currentTime / this.duration])
            },
            skipTo: function(t) {
                t > this.loadedPercent || (this.element.currentTime = this.duration * t, this.updatePlayhead())
            },
            load: function(e) {
                this.loadStartedCalled = !1, this.source.setAttribute("src", e), this.element.load(), this.mp3 = e, i[t].events.trackLoadProgress(this)
            },
            loadError: function() {
                this.settings.loadError.apply(this)
            },
            init: function() {
                this.settings.init.apply(this)
            },
            loadStarted: function() {
                return this.element.duration ? (this.duration = this.element.duration, this.updatePlayhead(), void this.settings.loadStarted.apply(this)) : !1
            },
            loadProgress: function() {
                null != this.element.buffered && this.element.buffered.length && (this.loadStartedCalled || (this.loadStartedCalled = this.loadStarted()), this.loadedPercent = this.element.buffered.end(this.element.buffered.length - 1) / this.duration, this.settings.loadProgress.apply(this, [this.loadedPercent]))
            },
            playPause: function() {
                this.playing ? this.pause() : this.play()
            },
            play: function() {
                /(ipod|iphone|ipad)/i.test(navigator.userAgent) && 0 == this.element.readyState && this.init.apply(this), this.settings.preload || (this.settings.preload = !0, this.element.setAttribute("preload", "auto"), i[t].events.trackLoadProgress(this)), this.playing = !0, this.element.play(), this.settings.play.apply(this)
            },
            pause: function() {
                this.playing = !1, this.element.pause(), this.settings.pause.apply(this)
            },
            setVolume: function(t) {
                this.element.volume = t
            },
            trackEnded: function() {
                this.skipTo.apply(this, [0]), this.settings.loop || this.pause.apply(this), this.settings.trackEnded.apply(this)
            }
        };
        var s = function(t, e) {
            var i = [];
            if (e = e || document, e.getElementsByClassName) i = e.getElementsByClassName(t);
            else {
                var n, s, o = e.getElementsByTagName("*"),
                    r = RegExp("(^|\\s)" + t + "(\\s|$)");
                for (n = 0, s = o.length; s > n; n++) r.test(o[n].className) && i.push(o[n])
            }
            return i.length > 1 ? i : i[0]
        }
    }("audiojs", "audiojsInstance", this)
}, function(t, e, i) {
    var n;
    ! function(s, o, r) {
        function a(t, e) {
            this.wrapper = "string" == typeof t ? o.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
                resizeScrollbars: !0,
                mouseWheelSpeed: 20,
                snapThreshold: .334,
                disablePointer: !u.hasPointer,
                disableTouch: u.hasPointer || !u.hasTouch,
                disableMouse: u.hasPointer || u.hasTouch,
                startX: 0,
                startY: 0,
                scrollY: !0,
                directionLockThreshold: 5,
                momentum: !0,
                bounce: !0,
                bounceTime: 600,
                bounceEasing: "",
                preventDefault: !0,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                },
                HWCompositing: !0,
                useTransition: !0,
                useTransform: !0,
                bindToWrapper: "undefined" == typeof s.onmousedown
            };
            for (var i in e) this.options[i] = e[i];
            this.translateZ = this.options.HWCompositing && u.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = u.hasTransition && this.options.useTransition, this.options.useTransform = u.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY, this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? u.ease[this.options.bounceEasing] || u.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
        }

        function c(t, e, i) {
            var n = o.createElement("div"),
                s = o.createElement("div");
            return i === !0 && (n.style.cssText = "position:absolute;z-index:9999", s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), s.className = "iScrollIndicator", "h" == t ? (i === !0 && (n.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", s.style.height = "100%"), n.className = "iScrollHorizontalScrollbar") : (i === !0 && (n.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", s.style.width = "100%"), n.className = "iScrollVerticalScrollbar"), n.style.cssText += ";overflow:hidden", e || (n.style.pointerEvents = "none"), n.appendChild(s), n
        }

        function h(t, e) {
            this.wrapper = "string" == typeof e.el ? o.querySelector(e.el) : e.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = t, this.options = {
                listenX: !0,
                listenY: !0,
                interactive: !1,
                resize: !0,
                defaultScrollbars: !1,
                shrink: !1,
                fade: !1,
                speedRatioX: 0,
                speedRatioY: 0
            };
            for (var i in e) this.options[i] = e[i];
            if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (u.addEvent(this.indicator, "touchstart", this), u.addEvent(s, "touchend", this)), this.options.disablePointer || (u.addEvent(this.indicator, u.prefixPointerEvent("pointerdown"), this), u.addEvent(s, u.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (u.addEvent(this.indicator, "mousedown", this), u.addEvent(s, "mouseup", this))), this.options.fade) {
                this.wrapperStyle[u.style.transform] = this.scroller.translateZ;
                var n = u.style.transitionDuration;
                if (!n) return;
                this.wrapperStyle[n] = u.isBadAndroid ? "0.0001ms" : "0ms";
                var r = this;
                u.isBadAndroid && l(function() {
                    "0.0001ms" === r.wrapperStyle[n] && (r.wrapperStyle[n] = "0s")
                }), this.wrapperStyle.opacity = "0"
            }
        }
        var l = s.requestAnimationFrame || s.webkitRequestAnimationFrame || s.mozRequestAnimationFrame || s.oRequestAnimationFrame || s.msRequestAnimationFrame || function(t) {
                s.setTimeout(t, 1e3 / 60)
            },
            u = function() {
                function t(t) {
                    return n === !1 ? !1 : "" === n ? t : n + t.charAt(0).toUpperCase() + t.substr(1)
                }
                var e = {},
                    i = o.createElement("div").style,
                    n = function() {
                        for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, s = e.length; s > n; n++)
                            if (t = e[n] + "ransform", t in i) return e[n].substr(0, e[n].length - 1);
                        return !1
                    }();
                e.getTime = Date.now || function() {
                    return (new Date).getTime()
                }, e.extend = function(t, e) {
                    for (var i in e) t[i] = e[i]
                }, e.addEvent = function(t, e, i, n) {
                    t.addEventListener(e, i, !!n)
                }, e.removeEvent = function(t, e, i, n) {
                    t.removeEventListener(e, i, !!n)
                }, e.prefixPointerEvent = function(t) {
                    return s.MSPointerEvent ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8) : t
                }, e.momentum = function(t, e, i, n, s, o) {
                    var a, c, h = t - e,
                        l = r.abs(h) / i;
                    return o = void 0 === o ? 6e-4 : o, a = t + l * l / (2 * o) * (0 > h ? -1 : 1), c = l / o, n > a ? (a = s ? n - s / 2.5 * (l / 8) : n, h = r.abs(a - t), c = h / l) : a > 0 && (a = s ? s / 2.5 * (l / 8) : 0, h = r.abs(t) + a, c = h / l), {
                        destination: r.round(a),
                        duration: c
                    }
                };
                var a = t("transform");
                return e.extend(e, {
                    hasTransform: a !== !1,
                    hasPerspective: t("perspective") in i,
                    hasTouch: "ontouchstart" in s,
                    hasPointer: !(!s.PointerEvent && !s.MSPointerEvent),
                    hasTransition: t("transition") in i
                }), e.isBadAndroid = function() {
                    var t = s.navigator.appVersion;
                    if (/Android/.test(t) && !/Chrome\/\d/.test(t)) {
                        var e = t.match(/Safari\/(\d+.\d)/);
                        return e && "object" == typeof e && e.length >= 2 ? parseFloat(e[1]) < 535.19 : !0
                    }
                    return !1
                }(), e.extend(e.style = {}, {
                    transform: a,
                    transitionTimingFunction: t("transitionTimingFunction"),
                    transitionDuration: t("transitionDuration"),
                    transitionDelay: t("transitionDelay"),
                    transformOrigin: t("transformOrigin")
                }), e.hasClass = function(t, e) {
                    var i = new RegExp("(^|\\s)" + e + "(\\s|$)");
                    return i.test(t.className)
                }, e.addClass = function(t, i) {
                    if (!e.hasClass(t, i)) {
                        var n = t.className.split(" ");
                        n.push(i), t.className = n.join(" ")
                    }
                }, e.removeClass = function(t, i) {
                    if (e.hasClass(t, i)) {
                        var n = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
                        t.className = t.className.replace(n, " ")
                    }
                }, e.offset = function(t) {
                    for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft,
                        i -= t.offsetTop;
                    return {
                        left: e,
                        top: i
                    }
                }, e.preventDefaultException = function(t, e) {
                    for (var i in e)
                        if (e[i].test(t[i])) return !0;
                    return !1
                }, e.extend(e.eventType = {}, {
                    touchstart: 1,
                    touchmove: 1,
                    touchend: 1,
                    mousedown: 2,
                    mousemove: 2,
                    mouseup: 2,
                    pointerdown: 3,
                    pointermove: 3,
                    pointerup: 3,
                    MSPointerDown: 3,
                    MSPointerMove: 3,
                    MSPointerUp: 3
                }), e.extend(e.ease = {}, {
                    quadratic: {
                        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        fn: function(t) {
                            return t * (2 - t)
                        }
                    },
                    circular: {
                        style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        fn: function(t) {
                            return r.sqrt(1 - --t * t)
                        }
                    },
                    back: {
                        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        fn: function(t) {
                            var e = 4;
                            return (t -= 1) * t * ((e + 1) * t + e) + 1
                        }
                    },
                    bounce: {
                        style: "",
                        fn: function(t) {
                            return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        }
                    },
                    elastic: {
                        style: "",
                        fn: function(t) {
                            var e = .22,
                                i = .4;
                            return 0 === t ? 0 : 1 == t ? 1 : i * r.pow(2, -10 * t) * r.sin((t - e / 4) * (2 * r.PI) / e) + 1
                        }
                    }
                }), e.tap = function(t, e) {
                    var i = o.createEvent("Event");
                    i.initEvent(e, !0, !0), i.pageX = t.pageX, i.pageY = t.pageY, t.target.dispatchEvent(i)
                }, e.click = function(t) {
                    var e, i = t.target;
                    /(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || (e = o.createEvent(s.MouseEvent ? "MouseEvents" : "Event"), e.initEvent("click", !0, !0), e.view = t.view || s, e.detail = 1, e.screenX = i.screenX || 0, e.screenY = i.screenY || 0, e.clientX = i.clientX || 0, e.clientY = i.clientY || 0, e.ctrlKey = !!t.ctrlKey, e.altKey = !!t.altKey, e.shiftKey = !!t.shiftKey, e.metaKey = !!t.metaKey, e.button = 0, e.relatedTarget = null, e._constructed = !0, i.dispatchEvent(e))
                }, e
            }();
        a.prototype = {
            version: "5.2.0",
            _init: function() {
                this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
            },
            destroy: function() {
                this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
            },
            _transitionEnd: function(t) {
                t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
            },
            _start: function(t) {
                if (1 != u.eventType[t.type]) {
                    var e;
                    if (e = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2, 0 !== e) return
                }
                if (this.enabled && (!this.initiated || u.eventType[t.type] === this.initiated)) {
                    !this.options.preventDefault || u.isBadAndroid || u.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                    var i, n = t.touches ? t.touches[0] : t;
                    this.initiated = u.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = u.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, i = this.getComputedPosition(), this._translate(r.round(i.x), r.round(i.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = n.pageX, this.pointY = n.pageY, this._execEvent("beforeScrollStart")
                }
            },
            _move: function(t) {
                if (this.enabled && u.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && t.preventDefault();
                    var e, i, n, s, o = t.touches ? t.touches[0] : t,
                        a = o.pageX - this.pointX,
                        c = o.pageY - this.pointY,
                        h = u.getTime();
                    if (this.pointX = o.pageX, this.pointY = o.pageY, this.distX += a, this.distY += c, n = r.abs(this.distX), s = r.abs(this.distY), !(h - this.endTime > 300 && 10 > n && 10 > s)) {
                        if (this.directionLocked || this.options.freeScroll || (n > s + this.options.directionLockThreshold ? this.directionLocked = "h" : s >= n + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                            if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                            else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                            c = 0
                        } else if ("v" == this.directionLocked) {
                            if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                            else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                            a = 0
                        }
                        a = this.hasHorizontalScroll ? a : 0, c = this.hasVerticalScroll ? c : 0, e = this.x + a, i = this.y + c, (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + a / 3 : e > 0 ? 0 : this.maxScrollX), (i > 0 || i < this.maxScrollY) && (i = this.options.bounce ? this.y + c / 3 : i > 0 ? 0 : this.maxScrollY), this.directionX = a > 0 ? -1 : 0 > a ? 1 : 0, this.directionY = c > 0 ? -1 : 0 > c ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, i), h - this.startTime > 300 && (this.startTime = h, this.startX = this.x, this.startY = this.y)
                    }
                }
            },
            _end: function(t) {
                if (this.enabled && u.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && !u.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                    var e, i, n = (t.changedTouches ? t.changedTouches[0] : t, u.getTime() - this.startTime),
                        s = r.round(this.x),
                        o = r.round(this.y),
                        a = r.abs(s - this.startX),
                        c = r.abs(o - this.startY),
                        h = 0,
                        l = "";
                    if (this.isInTransition = 0, this.initiated = 0, this.endTime = u.getTime(), !this.resetPosition(this.options.bounceTime)) {
                        if (this.scrollTo(s, o), !this.moved) return this.options.tap && u.tap(t, this.options.tap), this.options.click && u.click(t), void this._execEvent("scrollCancel");
                        if (this._events.flick && 200 > n && 100 > a && 100 > c) return void this._execEvent("flick");
                        if (this.options.momentum && 300 > n && (e = this.hasHorizontalScroll ? u.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                                destination: s,
                                duration: 0
                            }, i = this.hasVerticalScroll ? u.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                                destination: o,
                                duration: 0
                            }, s = e.destination, o = i.destination, h = r.max(e.duration, i.duration), this.isInTransition = 1), this.options.snap) {
                            var p = this._nearestSnap(s, o);
                            this.currentPage = p, h = this.options.snapSpeed || r.max(r.max(r.min(r.abs(s - p.x), 1e3), r.min(r.abs(o - p.y), 1e3)), 300), s = p.x, o = p.y, this.directionX = 0, this.directionY = 0, l = this.options.bounceEasing
                        }
                        return s != this.x || o != this.y ? ((s > 0 || s < this.maxScrollX || o > 0 || o < this.maxScrollY) && (l = u.ease.quadratic), void this.scrollTo(s, o, h, l)) : void this._execEvent("scrollEnd")
                    }
                }
            },
            _resize: function() {
                var t = this;
                clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                    t.refresh()
                }, this.options.resizePolling)
            },
            resetPosition: function(t) {
                var e = this.x,
                    i = this.y;
                return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), e == this.x && i == this.y ? !1 : (this.scrollTo(e, i, t, this.options.bounceEasing), !0)
            },
            disable: function() {
                this.enabled = !1
            },
            enable: function() {
                this.enabled = !0
            },
            refresh: function() {
                this.wrapper.offsetHeight;
                this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = u.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
            },
            on: function(t, e) {
                this._events[t] || (this._events[t] = []), this._events[t].push(e)
            },
            off: function(t, e) {
                if (this._events[t]) {
                    var i = this._events[t].indexOf(e);
                    i > -1 && this._events[t].splice(i, 1)
                }
            },
            _execEvent: function(t) {
                if (this._events[t]) {
                    var e = 0,
                        i = this._events[t].length;
                    if (i)
                        for (; i > e; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
                }
            },
            scrollBy: function(t, e, i, n) {
                t = this.x + t, e = this.y + e, i = i || 0, this.scrollTo(t, e, i, n)
            },
            scrollTo: function(t, e, i, n) {
                n = n || u.ease.circular, this.isInTransition = this.options.useTransition && i > 0;
                var s = this.options.useTransition && n.style;
                !i || s ? (s && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(t, e)) : this._animate(t, e, i, n.fn)
            },
            scrollToElement: function(t, e, i, n, s) {
                if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                    var o = u.offset(t);
                    o.left -= this.wrapperOffset.left, o.top -= this.wrapperOffset.top, i === !0 && (i = r.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), n === !0 && (n = r.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), o.left -= i || 0, o.top -= n || 0, o.left = o.left > 0 ? 0 : o.left < this.maxScrollX ? this.maxScrollX : o.left, o.top = o.top > 0 ? 0 : o.top < this.maxScrollY ? this.maxScrollY : o.top, e = void 0 === e || null === e || "auto" === e ? r.max(r.abs(this.x - o.left), r.abs(this.y - o.top)) : e, this.scrollTo(o.left, o.top, e, s)
                }
            },
            _transitionTime: function(t) {
                if (this.options.useTransition) {
                    t = t || 0;
                    var e = u.style.transitionDuration;
                    if (e) {
                        if (this.scrollerStyle[e] = t + "ms", !t && u.isBadAndroid) {
                            this.scrollerStyle[e] = "0.0001ms";
                            var i = this;
                            l(function() {
                                "0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s")
                            })
                        }
                        if (this.indicators)
                            for (var n = this.indicators.length; n--;) this.indicators[n].transitionTime(t)
                    }
                }
            },
            _transitionTimingFunction: function(t) {
                if (this.scrollerStyle[u.style.transitionTimingFunction] = t, this.indicators)
                    for (var e = this.indicators.length; e--;) this.indicators[e].transitionTimingFunction(t)
            },
            _translate: function(t, e) {
                if (this.options.useTransform ? this.scrollerStyle[u.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = r.round(t), e = r.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e, this.indicators)
                    for (var i = this.indicators.length; i--;) this.indicators[i].updatePosition()
            },
            _initEvents: function(t) {
                var e = t ? u.removeEvent : u.addEvent,
                    i = this.options.bindToWrapper ? this.wrapper : s;
                e(s, "orientationchange", this), e(s, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(i, "mousemove", this), e(i, "mousecancel", this), e(i, "mouseup", this)), u.hasPointer && !this.options.disablePointer && (e(this.wrapper, u.prefixPointerEvent("pointerdown"), this), e(i, u.prefixPointerEvent("pointermove"), this), e(i, u.prefixPointerEvent("pointercancel"), this), e(i, u.prefixPointerEvent("pointerup"), this)), u.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(i, "touchmove", this), e(i, "touchcancel", this), e(i, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this)
            },
            getComputedPosition: function() {
                var t, e, i = s.getComputedStyle(this.scroller, null);
                return this.options.useTransform ? (i = i[u.style.transform].split(")")[0].split(", "), t = +(i[12] || i[4]), e = +(i[13] || i[5])) : (t = +i.left.replace(/[^-\d.]/g, ""), e = +i.top.replace(/[^-\d.]/g, "")), {
                    x: t,
                    y: e
                }
            },
            _initIndicators: function() {
                function t(t) {
                    if (o.indicators)
                        for (var e = o.indicators.length; e--;) t.call(o.indicators[e])
                }
                var e, i = this.options.interactiveScrollbars,
                    n = "string" != typeof this.options.scrollbars,
                    s = [],
                    o = this;
                this.indicators = [], this.options.scrollbars && (this.options.scrollY && (e = {
                    el: c("v", i, this.options.scrollbars),
                    interactive: i,
                    defaultScrollbars: !0,
                    customStyle: n,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenX: !1
                }, this.wrapper.appendChild(e.el), s.push(e)), this.options.scrollX && (e = {
                    el: c("h", i, this.options.scrollbars),
                    interactive: i,
                    defaultScrollbars: !0,
                    customStyle: n,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenY: !1
                }, this.wrapper.appendChild(e.el), s.push(e))), this.options.indicators && (s = s.concat(this.options.indicators));
                for (var r = s.length; r--;) this.indicators.push(new h(this, s[r]));
                this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                    t(function() {
                        this.fade()
                    })
                }), this.on("scrollCancel", function() {
                    t(function() {
                        this.fade()
                    })
                }), this.on("scrollStart", function() {
                    t(function() {
                        this.fade(1)
                    })
                }), this.on("beforeScrollStart", function() {
                    t(function() {
                        this.fade(1, !0)
                    })
                })), this.on("refresh", function() {
                    t(function() {
                        this.refresh()
                    })
                }), this.on("destroy", function() {
                    t(function() {
                        this.destroy()
                    }), delete this.indicators
                })
            },
            _initWheel: function() {
                u.addEvent(this.wrapper, "wheel", this), u.addEvent(this.wrapper, "mousewheel", this), u.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                    clearTimeout(this.wheelTimeout), this.wheelTimeout = null, u.removeEvent(this.wrapper, "wheel", this), u.removeEvent(this.wrapper, "mousewheel", this), u.removeEvent(this.wrapper, "DOMMouseScroll", this)
                })
            },
            _wheel: function(t) {
                if (this.enabled) {
                    t.preventDefault();
                    var e, i, n, s, o = this;
                    if (void 0 === this.wheelTimeout && o._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                            o.options.snap || o._execEvent("scrollEnd"), o.wheelTimeout = void 0
                        }, 400), "deltaX" in t) 1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed, i = -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX, i = -t.deltaY);
                    else if ("wheelDeltaX" in t) e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, i = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                    else if ("wheelDelta" in t) e = i = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                    else {
                        if (!("detail" in t)) return;
                        e = i = -t.detail / 3 * this.options.mouseWheelSpeed
                    }
                    if (e *= this.options.invertWheelDirection, i *= this.options.invertWheelDirection, this.hasVerticalScroll || (e = i, i = 0), this.options.snap) return n = this.currentPage.pageX, s = this.currentPage.pageY, e > 0 ? n-- : 0 > e && n++, i > 0 ? s-- : 0 > i && s++, void this.goToPage(n, s);
                    n = this.x + r.round(this.hasHorizontalScroll ? e : 0), s = this.y + r.round(this.hasVerticalScroll ? i : 0), this.directionX = e > 0 ? -1 : 0 > e ? 1 : 0, this.directionY = i > 0 ? -1 : 0 > i ? 1 : 0, n > 0 ? n = 0 : n < this.maxScrollX && (n = this.maxScrollX), s > 0 ? s = 0 : s < this.maxScrollY && (s = this.maxScrollY), this.scrollTo(n, s, 0)
                }
            },
            _initSnap: function() {
                this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                    var t, e, i, n, s, o, a = 0,
                        c = 0,
                        h = 0,
                        l = this.options.snapStepX || this.wrapperWidth,
                        u = this.options.snapStepY || this.wrapperHeight;
                    if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                        if (this.options.snap === !0)
                            for (i = r.round(l / 2), n = r.round(u / 2); h > -this.scrollerWidth;) {
                                for (this.pages[a] = [], t = 0, s = 0; s > -this.scrollerHeight;) this.pages[a][t] = {
                                    x: r.max(h, this.maxScrollX),
                                    y: r.max(s, this.maxScrollY),
                                    width: l,
                                    height: u,
                                    cx: h - i,
                                    cy: s - n
                                }, s -= u, t++;
                                h -= l, a++
                            } else
                                for (o = this.options.snap, t = o.length, e = -1; t > a; a++)(0 === a || o[a].offsetLeft <= o[a - 1].offsetLeft) && (c = 0, e++), this.pages[c] || (this.pages[c] = []), h = r.max(-o[a].offsetLeft, this.maxScrollX), s = r.max(-o[a].offsetTop, this.maxScrollY), i = h - r.round(o[a].offsetWidth / 2), n = s - r.round(o[a].offsetHeight / 2), this.pages[c][e] = {
                                    x: h,
                                    y: s,
                                    width: o[a].offsetWidth,
                                    height: o[a].offsetHeight,
                                    cx: i,
                                    cy: n
                                }, h > this.maxScrollX && c++;
                        this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                    }
                }), this.on("flick", function() {
                    var t = this.options.snapSpeed || r.max(r.max(r.min(r.abs(this.x - this.startX), 1e3), r.min(r.abs(this.y - this.startY), 1e3)), 300);
                    this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
                })
            },
            _nearestSnap: function(t, e) {
                if (!this.pages.length) return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
                var i = 0,
                    n = this.pages.length,
                    s = 0;
                if (r.abs(t - this.absStartX) < this.snapThresholdX && r.abs(e - this.absStartY) < this.snapThresholdY) return this.currentPage;
                for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), e > 0 ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); n > i; i++)
                    if (t >= this.pages[i][0].cx) {
                        t = this.pages[i][0].x;
                        break
                    }
                for (n = this.pages[i].length; n > s; s++)
                    if (e >= this.pages[0][s].cy) {
                        e = this.pages[0][s].y;
                        break
                    }
                return i == this.currentPage.pageX && (i += this.directionX, 0 > i ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), t = this.pages[i][0].x), s == this.currentPage.pageY && (s += this.directionY, 0 > s ? s = 0 : s >= this.pages[0].length && (s = this.pages[0].length - 1), e = this.pages[0][s].y), {
                    x: t,
                    y: e,
                    pageX: i,
                    pageY: s
                }
            },
            goToPage: function(t, e, i, n) {
                n = n || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : 0 > t && (t = 0), e >= this.pages[t].length ? e = this.pages[t].length - 1 : 0 > e && (e = 0);
                var s = this.pages[t][e].x,
                    o = this.pages[t][e].y;
                i = void 0 === i ? this.options.snapSpeed || r.max(r.max(r.min(r.abs(s - this.x), 1e3), r.min(r.abs(o - this.y), 1e3)), 300) : i, this.currentPage = {
                    x: s,
                    y: o,
                    pageX: t,
                    pageY: e
                }, this.scrollTo(s, o, i, n)
            },
            next: function(t, e) {
                var i = this.currentPage.pageX,
                    n = this.currentPage.pageY;
                i++, i >= this.pages.length && this.hasVerticalScroll && (i = 0, n++), this.goToPage(i, n, t, e)
            },
            prev: function(t, e) {
                var i = this.currentPage.pageX,
                    n = this.currentPage.pageY;
                i--, 0 > i && this.hasVerticalScroll && (i = 0, n--), this.goToPage(i, n, t, e)
            },
            _initKeys: function(t) {
                var e, i = {
                    pageUp: 33,
                    pageDown: 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40
                };
                if ("object" == typeof this.options.keyBindings)
                    for (e in this.options.keyBindings) "string" == typeof this.options.keyBindings[e] && (this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0));
                else this.options.keyBindings = {};
                for (e in i) this.options.keyBindings[e] = this.options.keyBindings[e] || i[e];
                u.addEvent(s, "keydown", this), this.on("destroy", function() {
                    u.removeEvent(s, "keydown", this)
                })
            },
            _key: function(t) {
                if (this.enabled) {
                    var e, i = this.options.snap,
                        n = i ? this.currentPage.pageX : this.x,
                        s = i ? this.currentPage.pageY : this.y,
                        o = u.getTime(),
                        a = this.keyTime || 0,
                        c = .25;
                    switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(), this._translate(r.round(e.x), r.round(e.y)), this.isInTransition = !1), this.keyAcceleration = 200 > o - a ? r.min(this.keyAcceleration + c, 50) : 0, t.keyCode) {
                        case this.options.keyBindings.pageUp:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? n += i ? 1 : this.wrapperWidth : s += i ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.pageDown:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? n -= i ? 1 : this.wrapperWidth : s -= i ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.end:
                            n = i ? this.pages.length - 1 : this.maxScrollX, s = i ? this.pages[0].length - 1 : this.maxScrollY;
                            break;
                        case this.options.keyBindings.home:
                            n = 0, s = 0;
                            break;
                        case this.options.keyBindings.left:
                            n += i ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.up:
                            s += i ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.right:
                            n -= i ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.down:
                            s -= i ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        default:
                            return
                    }
                    if (i) return void this.goToPage(n, s);
                    n > 0 ? (n = 0, this.keyAcceleration = 0) : n < this.maxScrollX && (n = this.maxScrollX, this.keyAcceleration = 0), s > 0 ? (s = 0, this.keyAcceleration = 0) : s < this.maxScrollY && (s = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(n, s, 0), this.keyTime = o
                }
            },
            _animate: function(t, e, i, n) {
                function s() {
                    var p, d, f, m = u.getTime();
                    return m >= h ? (o.isAnimating = !1, o._translate(t, e), void(o.resetPosition(o.options.bounceTime) || o._execEvent("scrollEnd"))) : (m = (m - c) / i, f = n(m), p = (t - r) * f + r, d = (e - a) * f + a, o._translate(p, d), void(o.isAnimating && l(s)))
                }
                var o = this,
                    r = this.x,
                    a = this.y,
                    c = u.getTime(),
                    h = c + i;
                this.isAnimating = !0, s()
            },
            handleEvent: function(t) {
                switch (t.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(t);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(t);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(t);
                        break;
                    case "orientationchange":
                    case "resize":
                        this._resize();
                        break;
                    case "transitionend":
                    case "webkitTransitionEnd":
                    case "oTransitionEnd":
                    case "MSTransitionEnd":
                        this._transitionEnd(t);
                        break;
                    case "wheel":
                    case "DOMMouseScroll":
                    case "mousewheel":
                        this._wheel(t);
                        break;
                    case "keydown":
                        this._key(t);
                        break;
                    case "click":
                        this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation())
                }
            }
        }, h.prototype = {
            handleEvent: function(t) {
                switch (t.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(t);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(t);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(t)
                }
            },
            destroy: function() {
                this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (u.removeEvent(this.indicator, "touchstart", this), u.removeEvent(this.indicator, u.prefixPointerEvent("pointerdown"), this), u.removeEvent(this.indicator, "mousedown", this), u.removeEvent(s, "touchmove", this), u.removeEvent(s, u.prefixPointerEvent("pointermove"), this), u.removeEvent(s, "mousemove", this), u.removeEvent(s, "touchend", this), u.removeEvent(s, u.prefixPointerEvent("pointerup"), this), u.removeEvent(s, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
            },
            _start: function(t) {
                var e = t.touches ? t.touches[0] : t;
                t.preventDefault(), t.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = e.pageX, this.lastPointY = e.pageY, this.startTime = u.getTime(), this.options.disableTouch || u.addEvent(s, "touchmove", this), this.options.disablePointer || u.addEvent(s, u.prefixPointerEvent("pointermove"), this), this.options.disableMouse || u.addEvent(s, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
            },
            _move: function(t) {
                var e, i, n, s, o = t.touches ? t.touches[0] : t;
                u.getTime();
                this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, e = o.pageX - this.lastPointX, this.lastPointX = o.pageX, i = o.pageY - this.lastPointY, this.lastPointY = o.pageY, n = this.x + e, s = this.y + i, this._pos(n, s), t.preventDefault(), t.stopPropagation()
            },
            _end: function(t) {
                if (this.initiated) {
                    if (this.initiated = !1, t.preventDefault(), t.stopPropagation(), u.removeEvent(s, "touchmove", this), u.removeEvent(s, u.prefixPointerEvent("pointermove"), this), u.removeEvent(s, "mousemove", this), this.scroller.options.snap) {
                        var e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                            i = this.options.snapSpeed || r.max(r.max(r.min(r.abs(this.scroller.x - e.x), 1e3), r.min(r.abs(this.scroller.y - e.y), 1e3)), 300);
                        this.scroller.x == e.x && this.scroller.y == e.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = e, this.scroller.scrollTo(e.x, e.y, i, this.scroller.options.bounceEasing))
                    }
                    this.moved && this.scroller._execEvent("scrollEnd")
                }
            },
            transitionTime: function(t) {
                t = t || 0;
                var e = u.style.transitionDuration;
                if (e && (this.indicatorStyle[e] = t + "ms", !t && u.isBadAndroid)) {
                    this.indicatorStyle[e] = "0.0001ms";
                    var i = this;
                    l(function() {
                        "0.0001ms" === i.indicatorStyle[e] && (i.indicatorStyle[e] = "0s")
                    })
                }
            },
            transitionTimingFunction: function(t) {
                this.indicatorStyle[u.style.transitionTimingFunction] = t
            },
            refresh: function() {
                //this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (u.addClass(this.wrapper, "iScrollBothScrollbars"), u.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (u.removeClass(this.wrapper, "iScrollBothScrollbars"), u.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
                this.wrapper.offsetHeight;
                this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = r.max(r.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = r.max(r.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
            },
            updatePosition: function() {
                var t = this.options.listenX && r.round(this.sizeRatioX * this.scroller.x) || 0,
                    e = this.options.listenY && r.round(this.sizeRatioY * this.scroller.y) || 0;
                this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = r.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = r.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = r.max(this.indicatorHeight + 3 * e, 8), this.indicatorStyle.height = this.height + "px"), e = this.minBoundaryY) : e > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = r.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", e = this.maxPosY + this.indicatorHeight - this.height) : e = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[u.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = e + "px")
            },
            _pos: function(t, e) {
                0 > t ? t = 0 : t > this.maxPosX && (t = this.maxPosX), 0 > e ? e = 0 : e > this.maxPosY && (e = this.maxPosY), t = this.options.listenX ? r.round(t / this.sizeRatioX) : this.scroller.x, e = this.options.listenY ? r.round(e / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, e)
            },
            fade: function(t, e) {
                if (!e || this.visible) {
                    clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                    var i = t ? 250 : 500,
                        n = t ? 0 : 300;
                    t = t ? "1" : "0", this.wrapperStyle[u.style.transitionDuration] = i + "ms", this.fadeTimeout = setTimeout(function(t) {
                        this.wrapperStyle.opacity = t, this.visible = +t
                    }.bind(this, t), n)
                }
            }
        }, a.utils = u, "undefined" != typeof t && t.exports ? t.exports = a : (n = function() {
            return a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n)))
    }(window, document, Math)
}, function(t, e) {
    function i() {
        "use strict";

        function t(t, e) {
            this.x = t, this.y = e
        }//高さと数値 translate
        var e, i = 800,
            n = 1612,
            s = Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2)),
            o = .5 * s,
            r = .2,
            a = 3.5,
            c = !1,
            h = !1;
        this.beginX = 0, this.beginY = 0, this.baseX = 0, this.baseY = 0, this.x = 0, this.y = 0, this.scaleBaseNum = 0, this.scaleOrigin = {
            x: 0,
            y: 0
        }, this.prevScale = 1, this.scale = 1, Object.defineProperties(t, {
            zero: {
                enumerable: !0,
                set: function(t) {},
                get: function() {
                    return new t(0, 0)
                }
            }
        }), t.prototype = {
            constructor: t,
            add: function(t) {
                return this.x += t.x, this.y += t.y, this
            },
            sub: function(t) {
                return this.x -= t.x, this.y -= t.y, this
            },
            multiplyScalar: function(t) {
                return this.x *= t, this.y *= t, this
            },
            divisionScalar: function(t) {
                return this.x /= t, this.y /= t, this
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            lessThen: function(t) {
                return this.length() <= t
            },
            equal: function(t) {
                return this.x === t.x && this.y === t.y
            },
            copy: function() {
                return new t(this.x, this.y)
            }
        }, t.add = function(e, i) {
            var n = e.x + i.x,
                s = e.y + i.y;
            return new t(n, s)
        }, t.sub = function(e, i) {
            var n = e.x - i.x,
                s = e.y - i.y;
            return new t(n, s)
        }, t.multiplyScalar = function(e, i) {
            var n = e.x * i,
                s = e.y * i;
            return new t(n, s)
        }, t.divisionScalar = function(e, i) {
            var n = e.x / i,
                s = e.y / i;
            return new t(n, s)
        }, this.damping = 10, this._position = t.zero, this._velocity = t.zero, this._tmpPosition = t.zero, this._prevTime = 0, this._prevPosition = t.zero, this._prevVelocity = t.zero, this.init = function(t) {
            e = t, this.tile()
        }, this.update = function() {
            if (this.x = this._position.x, this.y = this._position.y, !c && 0 !== this._velocity.x && 0 !== this._velocity.y) {
                var e = t.divisionScalar(this._velocity, this.damping);
                this._velocity.sub(e), this._velocity.lessThen(.001) && (this._velocity = t.zero);
                var i = 10;
                this._position = t.add(this._position, t.multiplyScalar(this._velocity, i)), this.x = this._position.x, this.y = this._position.y, 0 === this._velocity.x && 0 === this._velocity.y && (this._velocity = t.zero, this._prevVelocity = t.zero, this._prevPosition = t.zero)
            }
            for (; this._position.x < -o * this.scale;) this._position.x += s * this.scale;
            for (; this._position.x > o * this.scale;) this._position.x -= s * this.scale;
            for (; this._position.y < -o * this.scale;) this._position.y += s * this.scale;
            for (; this._position.y > o * this.scale;) this._position.y -= s * this.scale;
            var n = {},
                r = {};
            
            n.x = this.scaleOrigin.x, n.y = this.scaleOrigin.y, r.x = this._position.x / this.scale, r.y = this._position.y / this.scale, h && (r.x = this._tmpPosition.x, r.y = this._tmpPosition.y), $(".maps__container").css({
                transformOrigin: "0 0",
                transform: "scale(" + this.scale + ")"
            }), $(".maps__container__inner").css({
                transform: "translate(" + r.x + "px, " + r.y + "px)"
            })

        }, this.center = function() {
            var t, e;
            t = .5 * $(".wrap").width(), e = .5 * $(".wrap").height()
        }, this.dragStart = function() {
            c = !0, this._velocity = t.zero, this._prevPosition = this._position, this._prevVelocity = t.zero
        }, this.dragEnd = function() {
            c = !1
        /*
        }, this.pinchStart = function() {
            h || (h = !0, console.log("[pinchStart]"), this._tmpPosition.x = this._position.x / this.scale, this._tmpPosition.y = this._position.y / this.scale)
        */}, this.pinchEnd = function() {
            h && (h = !1, this.prevScale = this.scale, console.log("[pinchEnd]"), this._position.x = this._tmpPosition.x * this.scale, this._position.y = this._tmpPosition.y * this.scale)
        }, this.drag = function(e, i) {
            var n = e,
                s = i,
                o = Date.now(),
                r = o - this._prevTime,
                a = new t(n, s),
                c = t.sub(a, this._prevPosition),
                h = t.divisionScalar(c, r || (r = 1)),
                l = t.sub(h, this._prevVelocity);
            this._velocity.add(l), this._position = t.add(this._position, c), this._prevTime = o, this._prevPosition = a, this._prevVelocity = h
        }, this.scaleBase = function(t) {
            this.scaleBaseNum = t
        }, this.scaleChange = function(t, e, i) {
            this.scale = this.prevScale * (t / this.scaleBaseNum), this.scale < r ? this.scale = r : this.scale > a && (this.scale = a)
        }, this.resize = function() {
            /* 非表示
            var t = $(".wrap").width(),
                e = t / 1020;
            e > .5 && (e = .5), $(".maps__container__inner__map h2 img").css("transform", "scale(" + e + ", " + e + ")")
            */
        }, this.tile = function() {
            //初期の位置表示？
            for (var t, e, s = $(".maps__container__inner__map:first-child"), o = 0; 1 > o; o++)
                //for (var r = 0; 1 > r; r++) t = i * r - .5 * i, e = n * o - .5 * n, s.clone(!0).attr("style", "-webkit-transform:scale(1, 1) rotate(0deg) translate(" + t + "px, " + e + "px);transform:scale(1, 1) rotate(0deg) translate(" + t + "px, " + e + "px)").appendTo(".maps__container__inner")
            for (var r = 0; 1 > r; r++) t = i * r - .5 * i, e = n * o - .5 * n, s.clone(!0).attr("style", "-webkit-transform:scale(1, 1) rotate(0deg) translate(" + t + "px, " + e + "px);transform:scale(1, 1) rotate(0deg) translate(" + t + "px, " + e + "px)").appendTo(".maps__container__inner")
                	
        }, this.getStat = function() {
            var t = {};
            return t.x = h ? this._tmpPosition.x * this.scale : this._position.x, t.y = h ? this._tmpPosition.y * this.scale : this._position.y, t.width = s, t.height = s, t.scale = this.scale, t.screenWidth = $(".wrap").width(), t.screenHeight = $(".wrap").height(), t
        }, this.slide = function(t, i) {
            this._velocity.x = 0, this._velocity.y = 0;
            new e.Tween(this._position).to({
                x: t,
                y: i
            }, 500).easing(e.Easing.Cubic.InOut).start()
        }
    }
    t.exports = i
}, function(t, e) {
    function i() {
        "use strict";

        function t() {
            var t = {},
                i = {};
            t = s.getStat(), i.width = t.screenWidth / t.width * o / t.scale, i.height = t.screenHeight / t.height * r / t.scale, i.x = -t.x / t.width * o / t.scale + .5 * (o - i.width), i.y = -t.y / t.height * r / t.scale + .5 * (r - i.height), n.fillStyle = "rgba(255, 255, 255, 0.25)", n.strokeStyle = "rgba(255,255,255, 0.75)", n.clearRect(0, 0, o, r), n.fillRect(0, 0, o, r), e(i.x, i.y, i.width, i.height), i.x + i.width > o && e(i.x - o, i.y, i.width, i.height), i.x < 0 && e(i.x + o, i.y, i.width, i.height), i.y + i.height > r && e(i.x, i.y - r, i.width, i.height),
                i.y < 0 && e(i.x, i.y + r, i.width, i.height), i.x + i.width > o && i.y + i.height > r ? e(i.x - o, i.y - r, i.width, i.height) : i.x + i.width > o && i.y < 0 ? e(i.x - o, i.y + r, i.width, i.height) : i.x < 0 && i.y + i.height > r ? e(i.x + o, i.y - r, i.width, i.height) : i.x < 0 && i.y < 0 && e(i.x + o, i.y + r, i.width, i.height), n.fill()
        }

        function e(t, e, i, s) {
            n.clearRect(t, e, i, s), n.strokeRect(t, e, i, s)
        }
        var i, n, s, o = 100,
            r = 100;
        this.init = function(t, e) {
            i = t, n = i.getContext("2d"), s = e
        }, this.update = function() {
            t()
        }
    }
    t.exports = i
}]);