!function (e) {
    var t = {};
    function i(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n, l: !1, exports: {}
        };
        return e[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = e, i.c = t, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0, get: n
        })
    },
        i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, i.t = function (e, t) {
            if (1 & t && (e = i(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0, value: e
            }), 2 & t && "string" != typeof e) for (var o in e) i.d(n, o, function (t) {
                return e[t]
            }.bind(null, o));
            return n
        }, i.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return i.d(t, "a", t), t
        }, i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.p = "", i(i.s = 1)
}([function (e, t) {
    const i = {
        loadScript: function (e, t, i) {
            "use strict";
            let n, o, a;
            i = void 0 !== i && i, o = !1, n = document.createElement("script"), n.type = "text/javascript", n.src = e, i && (n.async = "async"), n.onreadystatechange = function () {
                o || this.readyState && "complete" !== this.readyState || (o = !0, t())
            }, n.onload = n.onreadystatechange(), a = document.getElementsByTagName("script")[0], a.parentNode.insertBefore(n, a)
        }, insertElement: function (e, t, i) {
            "use strict";
            let n;
            t = t || document, n = i ? t.getElementsByTagName(i) : t.getElementsByTagName("head");
            try {
                n = n.length ? n : t.getElementsByTagName("body"), n.length && (n = n[0], n.insertBefore(e, n.firstChild))
            } catch (e) {
                this.maybeThrow(e)
            }
        }, createInvisibleIframe: function () {
            "use strict";
            const e = document.createElement("iframe");
            return e.title = "ad", e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        }, elementIsVisible: function (e) {
            let t = document.getElementById(e), i = t.currentStyle ? t.currentStyle.visibility : getComputedStyle(t, null).visibility, n = t.currentStyle ? t.currentStyle.display : getComputedStyle(t, null).display;
            if ("hidden" === i || "none" === n) return !1;
            for (; !/body/i.test(t);)if (t = t.parentNode, i = t.currentStyle ? t.currentStyle.visibility : getComputedStyle(t, null).visibility, n = t.currentStyle ? t.currentStyle.display : getComputedStyle(t, null).display, "hidden" === i || "none" === n) return !1;
            return !0
        }, elementIsInView: function (e, t) {
            "use strict";
            void 0 === t && (t = 50);
            let i = document.getElementById(e);
            if (!i) return !1;
            if (!this.elementIsVisible(e)) return !1;
            try {
                let e = i.getBoundingClientRect(), n = window.innerHeight || document.documentElement.clientHeight;
                return !(Math.floor(100 - (e.top >= 0 ? 0 : e.top) / (+-e.height / 1) * 100) < t || Math.floor(100 - (e.bottom - n) / e.height * 100) < t)
            } catch (e) {
                return !1
            }
        }, elementIsInViewInParent: function (e, t, i) {
            "use strict";
            void 0 === i && (i = 50);
            try {
                let n = e.getBoundingClientRect(), o = t.innerHeight || t.document.documentElement.clientHeight;
                return !(Math.floor(100 - (n.top >= 0 ? 0 : n.top) / (+-n.height / 1) * 100) < i || Math.floor(100 - (n.bottom - o) / n.height * 100) < i)
            } catch (e) {
                return !1
            }
        }, findGetParameter: function (e) {
            let t = null, i = [];
            try {
                (window.location !== window.parent.location ? window.parent.location.search : document.location.search).substr(1).split("&").forEach((function (n) {
                    i = n.split("="), i[0] === e && (t = decodeURIComponent(i[1]))
                }))
            } catch (e) { } return t
        }, getOffset: function (e) {
            return {
                left: (e = e.getBoundingClientRect()).left + window.pageXOffset, top: e.top + window.pageYOffset
            }
        }, findPosY: function (e) {
            let t = 0;
            if (void 0 !== e.offsetParent && e.offsetParent) {
                for (; e.offsetParent;)t += e.offsetTop, e = e.offsetParent; t += e.offsetTop
            } else e.y && (t += e.y); return t
        }, throttle: function (e, t, i) {
            i = i || window; let n = 0; i.addEventListener(e, (function () {
                let e = new Date;
                e - n >= 100 && (i.dispatchEvent(new CustomEvent(t)), n = e)
            }))
        }, addLoadEvent: function (e) {
            const t = window.onload; "complete" === document.readyState && e(), "function" != typeof window.onload ? window.onload = e : window.onload = function () {
                t && t(), e()
            }
        }, whenDocumentReady: function (e) {
            "complete" === document.readyState || "interactive" === document.readyState ? setTimeout(e, 1) : document.addEventListener("DOMContentLoaded", e)
        }, log: function () { }, readCookie: function (e) {
            for (var t = e + "=", i = decodeURIComponent(document.cookie).split(";"), n = 0; n < i.length; n++) {
                for (var o = i[n]; " " === o.charAt(0);)o = o.substring(1);
                if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
            } return ""
        }, writeCookie: function (e, t, i) {
            var n = new Date;
            n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3);
            var o = "expires=" + n.toUTCString();
            document.cookie = e + "=" + t + ";" + o + ";path=/"
        }, getAndIncrementSessionDepth: function () {
            const e = this;
            let t = e.readCookie("lngtd-sdp");
            "" !== t && null != t || (e.writeCookie("lngtd-sdp", "1", 1), t = "0");
            let i = parseInt(t) + 1;
            return e.writeCookie("lngtd-sdp", i.toString(), 1), parseInt(t)
        }, uuidv4: function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            }))
        }, getRandomIntInclusive: function (e, t) {
            return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1) + e)
        }, arrayInArray: function (e, t) {
            var i, n, o;
            for (i = 0; i < e.length; ++i)if (t.length === e[i].length) {
                for (o = e[i], n = 0; n < t.length && t[n] === o[n]; ++n);
                if (n === t.length) return i
            } return -1
        }
    }; e.exports = i
}, function (e, t, i) {
    window.lngtd = window.lngtd || {}, window.pbjs = window.pbjs || {}, window.pbjs.que = window.pbjs.que || [], window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [];
    const n = i(0), o = i(2), a = i(3);
    !function (e, t, i, n, o, a, r) {
        function d(i, n) {
            t[e]._Q.push([i, n])
        } t[e] || (t[e] = {
            init: function () {
                d("i", arguments)
            }, fetchBids: function () {
                d("f", arguments)
            }, setDisplayBids: function () { }, targetingKeys: function () {
                return []
            }, dpa: function () {
                d("di", arguments)
            }, rpa: function () {
                d("ri", arguments)
            }, upa: function () {
                d("ui", arguments)
            }, _Q: []
        }, (a = i.createElement(n)).async = !0, a.src = "//c.amazon-adsystem.com/aax2/apstag.js", (r = i.getElementsByTagName(n)[0]).parentNode.insertBefore(a, r))
    }("apstag", window, document, "script"), function (e) {
        "use strict";
        const t = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAhnpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjadY7RDcQwCEP/maIjECAGxjlVrdQNbvwjStt83fsAywLLdHyvk7ZBYyHrHkiAC0tL+ZQInihzE25j15zcW1spWTapTIEMZ1uHdvsPXRE43dzRsWOXSpdDRaNm/dFI5VEjV8iboX/8p8UPQdwsGSBTKUgAAAoCaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iMzIiCiAgIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIzMiIKICAgdGlmZjpJbWFnZVdpZHRoPSIzMiIKICAgdGlmZjpJbWFnZUhlaWdodD0iMzIiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiLz4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pg2FdTUAAAAEc0JJVAgICAh8CGSIAAADT0lEQVRYw8WXSWzNURTGfzVVJUg1aUlYqRViiIQ2EjoYaqikW+HFQoLYGBKExbcoG9NKxUpKbBFjiygL7a4hdtSGjRKaIgjynoXzl+P2/vvea5u4m/YO73znf853v3Mu/OdRUuwPJI0DqoG5wAxb/gj0Aa8kZcfcAUklwBogA6wDKlKOfgA6gHbggaTcqByQBFAPnAKWFBmsXuCgpK4ROSBpEnAG2DOSVNnIAeeAA5J+FOyApKnADWB1xGAPcAd4BvTbehWwGGgCaiJ2u4BmSV/yOiCp1PK4OgC+CRyT9DxP2hYCx4FNgf0uYH0YiXGRnJ8JwL8Z+bbkAzcbz4FmYAfw3W3VAaeHjYCkeuCBW/8GbMxHpGGcqQduA5NdJBu8vZLgqvVaLpPDGUmXXXSmAV8l/UoBnACUSfrs1jLARYfVCyxLrqhPwVoHjpHQg58wwXktaXkEvAZ4AwxIanVb7cAtN18KNMY4kHH/Z41wyXw6cAgYD8wCOiWtCMA7gJl25rDdpMT5oxbRIVglTl7fO2l9ImmlA5hoX1fljAwC681Gh6UnGW+BOT5VkrrtiiaKWSkpm0RgngPH7rkP70+gBfjklqcbcAg+CLREeOJtVlgt+ZuC6uDw00iOu01oQidC8CZJPRGOhjarvQPlwWZ/CstjThQCHrNZPkSIitD3kexFR+LAQLBelRKBmkjO/+GEvx15bA54B14Fm4sLBB+METOmE4HNXIKZOPDCRCYZTQH4ROBqjHApxLxmquhrjLeZdFB/HLA2qtMdqJU0382nAJUxwqUQsxIoc/OFTgMwIcuGJLwUcKM1UUJJg8BJU8j+kO3OiXd25mRSD8xGq6sFOZPnIVLcaU1GMrYAWx3IYROQObGrZk7MBiokHXHg24DNgR7cTyvHDbbpy/EGSY9GWI7rrByXua9vlPRwuI6oDdgdNCQ7gSuuOOUDTr78QgDeJmlvakdkYx/w2M3LrCxfC4gZBZa0ALhuefZEfAzsL7QpnWb9wKpgKwt0A3ctl2FTugGoDezmDLzZNyqFtOWlwFlg1yjb8vPAvqLa8ggxTwOLigR+Zu+Bh2P1NFsHbLe/M1JAB+w6twP3Rv00G+ZxOs/qebkrLH3Ay2Ifp/99/AZnbUy2RW+PPwAAAABJRU5ErkJggg==",
            i = {
                config: e,
                staticConfig: e,
                canRunAuction: !0,
                allowedHosts: [],
                refreshCount: 0,
                sessionDepth: 0,
                auctionType: "init",
                adUnitDetails: {},
                allPageEligibleUnits: [],
                GPTInitialized: !1,
                gptslots: {},
                refreshDisallowed: [],
                deviceBrowserOS: {},
                desktopAnchorInitialized: !1,
                mobileAnchorInitialized: !1,
                anchorDelay: 0,
                alwaysRefreshTypes: [
                    "manchor",
                    "danchor",
                    "stickyl",
                    "stickyr"
                ],
                sidebarStickyInitialized: [],
                onebyoneInitialized: !1,
                dynamicParentAds: {},
                flexUnitConfigs: {},
                flexInitialized: [],
                flexMustMeetViewability: !1,
                prebidWinningBids: {},
                prebidAuctions: {},
                displayIntervals: {},
                additionalGPTTargeting: {},
                defineAdditionalGPTTargeting: function () { },
                hiddenAdClass: null,
                disableAnchor: function () {
                    return !1
                },
                disableMobileAnchor: function () {
                    return !1
                },
                canShowSidebarSticky: function () {
                    return !1
                },
                stickyCannotDisplayOverride: !1,
                skinAdUnitCode: null,
                sidebarStickyDismissable: !0,
                winEventAttached: !1,
                dynamicParentEventAttached: !0,
                isHuman: !1,
                pvLogged: !1,
                debug: !1,
                confiantLoaded: !1,
                gptLoaded: !1,
                btLoaded: !1,
                aaxLoaded: !1,
                dynamicSettings: e,
                initialized: !1,
                cmploaded: !1,
                cmpCCPA: !0,
                cmpGDPR: !0,
                manualExcludeUnits: [],
                refreshExcludeUnits: [],
                siteSpecificCleanUnitConfigs: function (e) {
                    return e
                },
                siteSpecificPostInit: function () { },
                auctionUnitDefs: [],
                preInitFired: !1,
                currentDynamicId: {},
                mustDisplayTogether: [],
                mustDisplayTogetherReady: [],
                resizeHandlerTimeoutId: null,
                currentWindowWidth: null,
                country: "",
                ip: null,
                pageType: "",
                excludeBidders: [],
                iabConsent: {
                    gdpr: "",
                    ccpa: ""
                },
                doNotServeIps: [],
                excludeFromAmazon: [],
                unitFloorMultipliers: {},
                loadConfigAndInit: function () {
                    var t = window.lngtd,
                        o = function () {
                            clearTimeout(s),
                                t.preInit()
                        },
                        a = new window.XMLHttpRequest;
                    if (a.onreadystatechange = function () {
                        if (4 === a.readyState) {
                            let r = a.status;
                            if (r >= 200 && r < 300 || 304 === r) {
                                var i = a.responseText,
                                    n = JSON.parse(i);
                                t.dynamicSettings = n.config,
                                    t.country = n.country,
                                    t.ip = n.ip;
                                if (n.country && e.account.disabledCountries.indexOf(n.country) > -1) return;
                                n.continent && "EU" !== n.continent && (t.cmpGDPR = !1),
                                    n.country && -1 === ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB", "CH", "NO", "IS", "LI", "AD", "RS", "UA", "RU", "AL"].indexOf(n.country) && (t.cmpGDPR = !1), n.country && "US" === n.country && n.regionState && "CA" !== n.regionState && (t.cmpCCPA = !1),
                                    n.country && "US" !== n.country && (t.cmpCCPA = !1),
                                    t.doNotServeIps.length > 0 && n.ip && t.doNotServeIps.indexOf(n.ip) > -1 && (t.canRunAuction = !1), o()
                            } else o()
                        }
                    },
                        a.onerror = function () {
                            o()
                        },
                        n.findGetParameter("disable_lngtd")) t.debugLog("Not allowed to run auction, canceling.");
                    else {
                        var r = n.readCookie("_pubcid"),
                            d = "https://conf.lngtd.com/lngtd-config?account=" + e.account.name + "&section=" + e.account.section + "&pubcid=" + r;
                        a.open("GET", d, !0), a.send();
                        var s = setTimeout((function () {
                            a.abort(), i.preInit()
                        }), 15e3)
                    }
                }, preInit: function () {
                    const e = this;
                    (n.findGetParameter("lngtd_debug") || n.readCookie("lngtd_debug")) && (n.writeCookie("lngtd_debug", "1"), e.debug = !0),
                        e.preInitFired || (e.preInitFired = !0,
                            e.debugLog("preinit"),
                            !1 !== e.canRunAuction ? n.findGetParameter("disable_lngtd") ? e.debugLog("Not allowed to run auction, canceling.") : window.top.location.hostname === window.location.hostname ? e.allowedHosts.length > 0 && -1 === e.allowedHosts.indexOf(document.location.hostname) ? e.debugLog("Window location not in allowed hosts, canceling.") : (e.defineEnvironment(), e.config = e.dynamicSettings, e.startHumanCheck(), e.sessionDepth = n.getAndIncrementSessionDepth(), n.findGetParameter("sp_test") ? (e.config.account.sourcepointId = parseInt(n.findGetParameter("sp_test")),
                                e.cmpGDPR = !0,
                                e.loadSourcepoint((function () {
                                    window.lngtd.cmpReady()
                                }))) : e.dynamicSettings.account.cmpApplies && !n.findGetParameter("ignoreCMP") ? (e.cmploaded = !1, e.dynamicSettings.account.enableSourcepoint ? e.loadSourcepoint((function () {
                                    window.lngtd.cmpReady()
                                })) : e.waitForCMP((function () {
                                    window.lngtd.cmpReady()
                                }))) : (e.cmploaded = !0, e.cmpReady())) : e.debugLog("Window location mismatch, canceling.") : e.debugLog("Not allowed to run auction, canceling."))
                }, siteSpecificPreInit: function () { }, cmpReady: function () {
                    const e = this;
                    e.debugLog("CMP ready"),
                        e.siteSpecificPreInit(),
                        e.logPageView(),
                        e.loadSovrnBeacon(),
                        e.loadQuantcast(),
                        e.initializeAmazon(),
                        e.updatePrebidUserIds(),
                        e.updatePrebidConfig(),
                        e.setupAliasBidders(),
                        n.loadScript(e.config.account.prebidPath, (function () {
                            e.initialized = !0,
                                window.lngtd.postInit()
                        }))
                }, postInit: function (e) {
                    const t = this;
                    if (e = void 0 !== e ? e : "route_change", t.debugLog("postInit", e), !1 !== t.canRunAuction)
                        if (t.initialized)
                            if (t.config.account.autorun || n.findGetParameter("testads")) {
                                t.loadPubX(null),
                                    t.btLoaded || (t.loadBlockthrough(),
                                        t.btLoaded = !0),
                                    t.aaxloaded || (t.loadAAX(), t.aaxloaded = !0),
                                    t.applyHiddenAdClass(),
                                    t.cleanUnitConfigs();
                                var o = t.getEligibleUnitsForAuction("init");
                                t.allPageEligibleUnits = o,
                                    t.defineUnits(o);
                                var a = t.getVideoAdUnit();
                                if (a && "resize" === e && t.defineUnits([a]),
                                    t.config.account.useGAM && (t.gptLoaded ? t.initializeGPT(o) : n.loadScript("//securepubads.g.doubleclick.net/tag/js/gpt.js",

                                        (function () {
                                            t.initializeGPT(o),
                                                t.gptLoaded = !0
                                        }))),
                                    pbjs.que.push((function () {
                                        pbjs.onEvent("bidResponse", i.bidResponseHandler),
                                            pbjs.onEvent("beforeRequestBids", i.defineFloors),
                                            pbjs.onEvent("beforeRequestBids", i.dynamicBidParams),
                                            pbjs.onEvent("beforeRequestBids", i.updateUserSyncs)
                                    })),
                                    t.debugLog("Running prebid auction now"),
                                    t.runPrebidAuction(o, t.auctionType),
                                    t.config.account.enableConfiant && !t.confiantLoaded && (void 0 !== t.config.account.confiantGeos && t.config.account.confiantGeos.length > 0 ? (t.config.account.confiantGeos.indexOf(t.country) > -1 ? t.loadConfiant() : t.debugLog("Confiant not loading in geo:", t.country),
                                        t.confiantLoaded = !0) : (t.loadConfiant(), t.confiantLoaded = !0)),
                                    t.startRefresh(),
                                    t.startLogging(),
                                    t.siteSpecificPostInit(),
                                    t.lastUserInteraction = Date.now(),
                                    t.eventHandlersBound || (t.debugLog("Binding event handlers", t.eventHandlersBound),
                                        t.eventHandlersBound = !0, n.throttle("scroll", "throttledScroll", window),
                                        window.addEventListener("throttledScroll", t.scrollHandling),
                                        window.addEventListener("focus", t.focusHandling),
                                        window.addEventListener("blur", t.blurHandling),
                                        window.addEventListener("click", t.clickHandling),
                                        window.addEventListener("touchstart", t.clickHandling),
                                        n.throttle("resize", "throttledResize", window), window.addEventListener("throttledResize",
                                            (function () {
                                                window.innerWidth === t.currentWindowWidth || t.adsIsMobile || (t.currentWindowWidth = window.innerWidth,
                                                    clearTimeout(t.resizeHandlerTimeoutId),
                                                    t.resizeHandlerTimeoutId = setTimeout(t.resizeHandling, 1e3))
                                            }))),
                                    t.interstitialConfigs)
                                    for (var r in t.interstitialConfigs)
                                        if (t.interstitialConfigs.hasOwnProperty(r)) {
                                            var d = t.interstitialConfigs[r];
                                            d.initialize && "auto" === d.initialize && t.initInterstitial(r)
                                        }
                            } else t.debugLog("LNGTD autorun disallowed, canceling.");
                        else t.debugLog("LNGTD code not initialized properly, canceling.");
                    else t.debugLog("Not allowed to run auction, canceling.")
                },
                preserveVideoOnReset: !1,
                resetAllSlots: function (e) {
                    const t = window.lngtd;
                    for (var n in e = void 0 !== e ? e : "route_change",
                        void 0 !== t.refreshInterval && clearInterval(t.refreshInterval),
                        void 0 !== t.viewabilityInterval && clearInterval(t.viewabilityInterval),
                        t.displayIntervals
                    )
                        t.displayIntervals.hasOwnProperty(n) && clearInterval(t.displayIntervals[n]);
                    t.displayIntervals = {},
                        t.stickyCannotDisplayOverride = !1,
                        googletag.cmd.push((function () {
                            for (var e in googletag.destroySlots(),
                                googletag.pubads().clearTargeting(),
                                t.gptslots)
                                if (t.gptslots.hasOwnProperty(e)) try {
                                    var i = document.getElementById(e); if (i) for (var n = 0; n < i.children.length; n++)try { i.children[n].remove() } catch (e) { }
                                } catch (e) { } t.gptslots = {}
                        })),
                        pbjs.que.push((function () {
                            pbjs.offEvent("bidResponse", i.bidResponseHandler),
                                pbjs.offEvent("beforeRequestBids", i.defineFloors),
                                pbjs.offEvent("beforeRequestBids", i.dynamicBidParams),
                                pbjs.offEvent("beforeRequestBids", i.updateUserSyncs),
                                pbjs.removeAdUnit()
                        })),
                        "resize" !== e && (t.preserveVideoOnReset || t.destroyOutstreamPlayer()), t.resetAnchors()
                }, resetAndRunAuction: function (e) {
                    const t = window.lngtd;
                    e = void 0 !== e ? e : "route_change",
                        t.debugLog("Reset and run auction called"),
                        t.auctionType = "init",
                        t.pvLogged = !1,
                        t.sessionDepth = n.getAndIncrementSessionDepth(),
                        t.refreshCount = 0,
                        t.videoImpressionCount = 0,
                        t.definePageType(),
                        t.resetAllSlots(e),
                        googletag.cmd.push((function () {
                            googletag.pubads().setTargeting("session-depth", t.sessionDepth.toString()), t.setAdditionalGPTTargeting()
                        })),
                        t.logPageView(),
                        t.postInit(e)
                }, defineEnvironment: function () {
                    try {
                        var e = (new a).getResult();
                        this.deviceBrowserOS.os = e.os.name || "unknown",
                            this.deviceBrowserOS.browser = e.browser.name || "unknown",
                            this.deviceBrowserOS.device = e.device.model || "unknown",
                            this.deviceBrowserOS.device_type = e.device.type || "unknown",
                            this.deviceBrowserOS.browser_version = e.browser.version || "unknown",
                            this.deviceBrowserOS.combined = this.deviceBrowserOS.device + "|" + this.deviceBrowserOS.browser + "|" + this.deviceBrowserOS.os
                    } catch (e) { } try {
                        var t = document.documentElement.clientWidth || document.body.clientWidth;
                        this.adsIsMobile = "unknown" !== this.deviceBrowserOS.device_type ? "mobile" === this.deviceBrowserOS.device_type : t < 668
                    } catch (e) {
                        this.adsIsMobile = !1
                    } this.currentWindowWidth = window.innerWidth,
                        this.definePageType(),
                        this.setEnrichIdState()
                }, isTablet: function () {
                    return ["unknown", "tablet"].indexOf(this.deviceBrowserOS.device_type) > -1 && "Portrait" == (window.innerWidth > window.innerHeight ? "Landscape" : "Portrait") && window.innerWidth > 728
                },
                definePageType: function () {
                    var e = window.location.pathname.split("/"), t = "";
                    try {
                        t = e[1].toString()
                    } catch (e) { } this.pageType = t.slice(0, 65)
                }, cleanUnitConfigs: function () {
                    const e = this;
                    var t = function (e) {
                        var t = window.innerWidth;
                        return e.filter(e => e[0] <= t || "fluid" === e || "out-of-page" === e || "interstitial" === e || 1800 === e[0])
                    };
                    e.config.adUnits = e.siteSpecificCleanUnitConfigs(e.config.adUnits);
                    var i = [];
                    e.config.adUnits.forEach((function (e) {
                        if ("video" === e.unitType) i.push(e);
                        else if ("outstream" === e.unitType) i.push(e);
                        else if ("moment-video" === e.unitType) i.push(e);
                        else try {
                            e.mediaTypes.banner.sizes = t(e.mediaTypes.banner.sizes),
                                e.gamSizes = t(e.gamSizes),
                                i.push(e)
                        } catch (e) { }
                    })),
                        e.config.adUnits = i;
                    var o = [];
                    e.config.adUnits.forEach((function (t) {
                        for (var i = t.bids.length; i--;) {
                            var n = t.bids[i];
                            e.config.partners.forEach((function (o) {
                                n.bidder === o.shortName && o.geoRestrictionsInclude && e.country && -1 === o.geoRestrictionsInclude.indexOf(e.country) && t.bids.splice(i, 1), n.bidder === o.shortName && o.geoRestrictionsExclude && e.country && o.geoRestrictionsExclude.indexOf(e.country) > -1 && t.bids.splice(i, 1)
                            })),
                                n.geoRestrictionsInclude && (e.country && -1 === n.geoRestrictionsInclude.indexOf(e.country) && t.bids.splice(i, 1),
                                    delete n.geoRestrictionsInclude),
                                n.geoRestrictionsExclude && (e.country && n.geoRestrictionsExclude.indexOf(e.country) > -1 && t.bids.splice(i, 1),
                                    delete n.geoRestrictionsExclude)
                        } o.push(t)
                    })),
                        e.config.adUnits = o;
                    var a = [],
                        r = n.findGetParameter("testbidder");
                    e.config.adUnits.forEach((function (t) {
                        for (var i = t.bids.length; i--;) {
                            var n = t.bids[i];
                            e.excludeBidders.length && e.excludeBidders.indexOf(n.bidder) > -1 && (r && r === n.bidder || t.bids.splice(i, 1)), r && n.bidder !== r && t.bids.splice(i, 1)
                        } a.push(t)
                    })), e.config.adUnits = a; var d = []; e.config.adUnits.forEach((function (t) {
                        for (var i = t.bids.length; i--;) {
                            var n = t.bids[i];
                            "adagio" === n.bidder && (n.params.category = e.country,
                                n.params.environment = !0 === e.adsIsMobile ? "mobile" : "desktop")
                        } d.push(t)
                    })),
                        e.config.adUnits = d
                },
                getRefreshInterval: function () {
                    return this.config.account.refreshInterval
                },
                startRefresh: function () {
                    const e = this;
                    e.config.account.refreshEnabled && (e.refreshInterval = setInterval(e.refreshAds, e.getRefreshInterval()))
                },
                refreshPaused: !1,
                pauseRefresh: function () {
                    const e = this;
                    e.refreshPaused || (e.refreshPaused = !0, e.stopRefresh())
                },
                restartRefresh: function () {
                    const e = this;
                    e.refreshPaused && (e.refreshPaused = !1, e.startRefresh())
                },
                stopRefresh: function () {
                    clearInterval(this.refreshInterval)
                },
                eventHandlersBound: !1,
                lastUserInteraction: null,
                scrollHandling: function () {
                    window.lngtd.debugLog("Scroll handler called"),
                        window.lngtd.lastUserInteraction = Date.now(),
                        window.lngtd.allPageEligibleUnits.forEach((function (e) {
                            window.lngtd.displayUnit(e, "scroll")
                        }))
                },
                focusHandling: function () {
                    window.lngtd.debugLog("Focus handler called"),
                        window.lngtd.allPageEligibleUnits.forEach((function (e) {
                            window.lngtd.displayUnit(e, "focus")
                        })),
                        window.lngtd.restartOutstreamPlayer()
                },
                blurHandling: function () {
                    window.lngtd.debugLog("Blur handler called")
                },
                clickHandling: function () {
                    window.lngtd.debugLog("Click handler called"),
                        window.lngtd.lastUserInteraction = Date.now()
                },
                resizeHandling: function () {
                    window.lngtd.debugLog("Resize handler called"),
                        window.lngtd.resetAndRunAuction("resize")
                },
                defineUnits: function (e) {
                    const t = this;
                    pbjs.que.push((function () {
                        e.forEach((function (e) {
                            e.ortb2Imp = {
                                ext: {
                                    gpid: e.gamPath,
                                    data: {
                                        pbadslot: e.gamPath
                                    }
                                }
                            },
                                e.floors = {
                                    currency: "USD",
                                    schema: {
                                        delimiter: "|",
                                        fields: ["mediaType"]
                                    },
                                    values: {
                                        banner: parseFloat(e.baseFloor),
                                        video: parseFloat(e.baseFloor)
                                    }
                                }
                        })),
                            pbjs.addAdUnits(e)
                    })),
                        e.forEach((function (e) {
                            t.adUnitDetails[e.elementId] = {
                                displayed: null,
                                refreshed: null,
                                lastAuction: null,
                                isRefreshing: !1,
                                lastAdvertiser: null,
                                confiantRefreshed: !1,
                                metViewability: !1,
                                metGPTViewability: !1
                            },
                                t.unitFloorMultipliers[e.elementId] = 1
                        }))
                },
                setupAliasBidders: function () {
                    pbjs.que.push((function () {
                        pbjs.aliasBidder("appnexus", "groupm-xandr", {
                            gvlid: 98
                        }),
                            pbjs.aliasBidder("appnexus", "venatus")
                    }))
                },
                getFloorForPartnerUnit: function (e, t) {
                    var i = 0;
                    try {
                        window.lngtd.config.partners.forEach((function (n) {
                            n.shortName === e && n.unitFloors.hasOwnProperty(t.elementId) && (i = parseFloat(n.unitFloors[t.elementId]))
                        }))
                    } catch (e) { } try {
                        var n = parseFloat(t.baseFloor);
                        i = Math.max(n, i)
                    } catch (e) { } try {
                        var o = this.unitFloorMultipliers[t.elementId];
                        o && (i *= o)
                    } catch (e) { } return i
                },
                getFloorAdjustmentForBrowserCountry: function (e, t) {
                    var i = 1;
                    try {
                        i = t && "US" === t ? 1 : .75,
                            e && "Chrome" !== e && (i *= .75)
                    } catch (e) { } return i
                },
                findClosestPricePoint: function (e) {
                    var t = this.config.account.pricePoints;
                    if (0 === e) return 0;
                    var i = parseFloat(t[0]),
                        n = Math.abs(e - i);
                    return t.forEach((function (t) {
                        t = parseFloat(t);
                        var o = Math.abs(e - t);
                        o < n && (n = o, i = t)
                    })), i
                },
                getAdjustedFloor: function (e, t) {
                    var i = window.lngtd,
                        n = i.getFloorForPartnerUnit(e, t),
                        o = i.getFloorAdjustmentForBrowserCountry(i.deviceBrowserOS.browser, i.country);
                    if ("video" === t.unitType || "outstream" === t.unitType) {
                        var a = 1,
                            r = i.getHighestVideoBid(t, !0),
                            d = i.videoAuctionConfig[i.videoAuctionCount];
                        if (r && r > n) return Math.min(r.cpm / d.mult, 10);
                        try {
                            a = 1 / d.mult
                        } catch (e) { } return o * n * a
                    } return o * n
                },
                defineFloors: function (e) {
                    var t = window.lngtd;
                    e.forEach((function (e) {
                        var i = [];
                        e.bids.forEach((function (n) {
                            try {
                                var o = parseFloat(e.baseFloor),
                                    a = t.getAdjustedFloor(n.bidder, e),
                                    r = t.findClosestPricePoint(Math.max(o, a));
                                "aol" === n.bidder && (n.params.bidFloor = r.toString()),
                                    "appnexus" === n.bidder && (n.params.reserve = r),
                                    "beachfront" === n.bidder && (n.params.bidfloor = r),
                                    "conversant" === n.bidder && (n.params.bidfloor = r),
                                    "districtmDMX" === n.bidder && (n.params.floor = r),
                                    "grid" === n.bidder && (n.params.bidFloor = r),
                                    "gumgum" === n.bidder && (n.params.bidfloor = r),
                                    "improvedigital" === n.bidder && (n.params.bidFloor = r),
                                    "ix" === n.bidder && (n.params.bidFloor = r, n.params.bidFloorCur = "USD"),
                                    "medianet" === n.bidder && (n.params.bidfloor = r),
                                    "oneVideo" === n.bidder && (n.params.bidfloor = r),
                                    "openx" === n.bidder && (n.params.customFloor = r),
                                    "pubmatic" === n.bidder && (n.params.kadfloor = r.toString(),
                                        n.params.currency = "USD"),
                                    "rise" === n.bidder && (n.params.floorPrice = r),
                                    "rubicon" === n.bidder && (n.params.floor = r),
                                    "sharethrough" === n.bidder && (n.params.floor = r),
                                    "smartadserver" === n.bidder && (n.params.bidfloor = r),
                                    "sovrn" === n.bidder && (n.params.bidfloor = r.toString()),
                                    "spotx" === n.bidder && (n.params.price_floor = r),
                                    "triplelift" === n.bidder && (n.params.floor = r),
                                    "yahoossp" === n.bidder && (n.params.bidOverride = {
                                        imp: {
                                            bidfloor: r
                                        }
                                    }),
                                    "yieldmo" === n.bidder && (n.params.bidFloor = r)
                            } catch (e) {
                                t.debugLog(e)
                            } i.push(n)
                        })),
                            e.bids = i
                    }))
                },
                dynamicBidParams: function (e) {
                    window.lngtd;
                    e.forEach((function (e) {
                        var t = [];
                        e.bids.forEach((function (e) {
                            try {
                                "sublime" === e.bidder && (window.sublime = window.sublime || {},
                                    window.sublime.notifyId = window.sublime.notifyId || function e(t) {
                                        return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
                                    }(),
                                    e.params.notifyId = window.sublime.notifyId,
                                    e.params.sjs = function (e) {
                                        var t = window.sublime;
                                        if (!(t && t.loadedZones && t.loadedZones.indexOf(parseInt(e, 10)) > -1))
                                            if ("undefined" != typeof __tcfapi) __tcfapi("addEventListener", 2, (function () {
                                                __tcfapi("getTCData", 2, (function (t, i) {
                                                    var n, o;
                                                    i && (t.gdprApplies ? t.eventStatus && ("tcloaded" == t.eventStatus || "useractioncomplete" == t.eventStatus) && t.tcString && ((n = document.createElement("script")).type = "text/javascript",
                                                        n.src = "https://sac.ayads.co/sublime/" + e + "/prebid?from=pbjsconf",
                                                        (o = document.getElementsByTagName("script")[0].parentNode).insertBefore(n, o.firstChild)) : ((n = document.createElement("script")).type = "text/javascript",
                                                            n.src = "https://sac.ayads.co/sublime/" + e + "/prebid?from=pbjsconf",
                                                            (o = document.getElementsByTagName("script")[0].parentNode).insertBefore(n, o.firstChild)))
                                                }))
                                            }));
                                            else {
                                                var i = document.createElement("script");
                                                i.type = "text/javascript",
                                                    i.src = "https://sac.ayads.co/sublime/" + e + "/prebid?from=pbjsconf&cmp=no";
                                                var n = document.getElementsByTagName("script")[0].parentNode; n.insertBefore(i, n.firstChild)
                                            }
                                    }(e.params.zoneId))
                            } catch (e) { } t.push(e)
                        })),
                            e.bids = t
                    }))
                },
                userIdBidders: function () {
                    var e = [];
                    return this.config.partners.forEach((function (t) {
                        e.push(t.shortName)
                    })), e
                },
                getId5PdParam: function (e) {
                    var t = {
                        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        encode: function (e) {
                            var i, n, o, a, r, d, s, l = "",
                                c = 0;
                            for (e = t._utf8_encode(e); c < e.length;)
                                a = (i = e.charCodeAt(c++)) >> 2, r = (3 & i) << 4 | (n = e.charCodeAt(c++)) >> 4, d = (15 & n) << 2 | (o = e.charCodeAt(c++)) >> 6, s = 63 & o, isNaN(n) ? d = s = 64 : isNaN(o) && (s = 64), l = l + this._keyStr.charAt(a) + this._keyStr.charAt(r) + this._keyStr.charAt(d) + this._keyStr.charAt(s);
                            return l
                        },
                        decode: function (e) {
                            var i, n, o, a, r, d, s = "",
                                l = 0;
                            for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length;)
                                i = this._keyStr.indexOf(e.charAt(l++)) << 2 | (a = this._keyStr.indexOf(e.charAt(l++))) >> 4, n = (15 & a) << 4 | (r = this._keyStr.indexOf(e.charAt(l++))) >> 2, o = (3 & r) << 6 | (d = this._keyStr.indexOf(e.charAt(l++))), s += String.fromCharCode(i), 64 != r && (s += String.fromCharCode(n)), 64 != d && (s += String.fromCharCode(o));
                            return s = t._utf8_decode(s)
                        },
                        _utf8_encode: function (e) {
                            e = e.replace(/\r\n/g, "\n");
                            for (var t = "", i = 0; i < e.length; i++) {
                                var n = e.charCodeAt(i);
                                n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192), t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224),
                                    t += String.fromCharCode(n >> 6 & 63 | 128),
                                    t += String.fromCharCode(63 & n | 128))
                            } return t
                        },
                        _utf8_decode: function (e) {
                            for (var t = "", i = 0, n = c1 = c2 = 0; i < e.length;)
                                (n = e.charCodeAt(i)) < 128 ? (t += String.fromCharCode(n), i++) : n > 191 && n < 224 ? (c2 = e.charCodeAt(i + 1),
                                    t += String.fromCharCode((31 & n) << 6 | 63 & c2), i += 2) : (c2 = e.charCodeAt(i + 1), c3 = e.charCodeAt(i + 2),
                                        t += String.fromCharCode((15 & n) << 12 | (63 & c2) << 6 | 63 & c3), i += 3);
                            return t
                        }
                    },
                        i = "";
                    return this.dynamicSettings.eh256 && e && (i += "1=" + this.dynamicSettings.eh256 + "&"),
                        i += "10=" + encodeURIComponent(this.ip),
                        i += "&12=" + encodeURIComponent(window.navigator.userAgent),
                        t.encode(i)
                },
                prebidUserIds: [{
                    name: "criteo"
                }, {
                    name: "id5id",
                    params: {
                        partner: 488,
                        pd: ""
                    }, storage: {
                        type: "html5",
                        name: "id5id",
                        expires: 90,
                        refreshInSeconds: 28800
                    }
                }, {
                    name: "lotamePanoramaId"
                }, {
                    name: "publinkId",
                    storage: {
                        type: "cookie",
                        name: "pbjs_publink",
                        expires: 30
                    }
                }, {
                    name: "quantcastId"
                }, {
                    name: "pubCommonId",
                    storage: {
                        type: "cookie",
                        expires: 365
                    }
                }, {
                    name: "deepintentId",
                    storage: {
                        type: "cookie",
                        name: "_dpes_id",
                        expires: 90
                    }
                }, {
                    name: "unifiedId",
                    storage: {
                        type: "cookie",
                        name: "pbjs-unifiedid",
                        expires: 60
                    }, params: {
                        url: "//match.adsrvr.org/track/rid?ttd_pid=wq4ba1k&fmt=json"
                    }
                }],
                enrichIdState: !1,
                setEnrichIdState: function () {
                    var e = "false";
                    this.dynamicSettings.ehstatus && (e = this.dynamicSettings.ehstatus),
                        this.enrichIdState = e
                }, enrichIds: function (e) {
                    var t = this;
                    if ("true" === t.enrichIdState) {
                        var i;
                        i = t.dynamicSettings.eh256 ? t.dynamicSettings.eh256 : t.dynamicSettings.ehmd5;
                        var n = !1;
                        if (e.forEach((function (e) {
                            "connectId" === e.name && (n = !0),
                                "id5id" === e.name && t.dynamicSettings.eh256 && (e.params.pd = t.getId5PdParam(!0))
                        })), !n) {
                            var o = {
                                name: "connectId",
                                storage: {
                                    type: "html5",
                                    name: "connectId",
                                    expires: 15
                                },
                                params: {
                                    pixelId: 58567,
                                    he: i
                                }
                            };
                            e.push(o)
                        } t.dynamicSettings.eh256
                    } else e.forEach((function (e) {
                        "id5id" === e.name && (e.params.pd = t.getId5PdParam(!1))
                    }));
                    return e
                },
                getUpdatedUserIds: function () {
                    return []
                }, updatePrebidUserIds: function () {
                    var e = this.prebidUserIds,
                        t = this.getUpdatedUserIds();
                    t.length > 0 && t.forEach((function (t) {
                        for (var i = 0; i < e.length; i++) {
                            e[i].name === t.name && (e[i] = t)
                        }
                    })),
                        e = this.enrichIds(e);
                    var n = ["spotx", "openx"];
                    -1 === [
                        "goal",
                        "soccerway",
                        "gpfans",
                        "voetbalzone",
                        "transfermarkt",
                        "dplayer",
                        "sportingnews",
                        "sportingnews-goal",
                        "solitaired",
                        "solitar",
                        "solitairebliss",
                        "imapuzzle",
                        "whitehare"
                    ].indexOf(this.config.account.name) && e.forEach((function (e) {
                        e.bidders = i.config.partners.filter(e => -1 === n.indexOf(e.shortName)).map(({
                            shortName: e
                        }) => e)
                    })),
                        this.prebidUserIds = e
                },
                defineDynamicFloors: function (e) {
                    e.floors = this.dynamicSettings.floors;
                    try {
                        e.floors.data.values.banner = parseFloat(e.floors.data.values.banner),
                            e.floors.data.values.video = parseFloat(e.floors.data.values.video)
                    } catch (e) { } return e
                },
                updatePrebidConfig: function () {
                    const e = this,
                        t = {
                            buckets: [{
                                precision: 2,
                                min: 0,
                                max: 50,
                                increment: .01
                            }]
                        };
                    pbjs.que.push((function () {
                        var i = {
                            useBidCache: !0,
                            cache: {
                                url: "https://prebid.adnxs.com/pbc/v1/cache",
                                ignoreBidderCacheKey: !0
                            },
                            enableSendAllBids: !1,
                            targetingControls: {
                                alwaysIncludeDeals: !0
                            },
                            priceGranularity: t,
                            userSync: {
                                auctionDelay: 0,
                                filterSettings: {
                                    iframe: {
                                        bidders: "*",
                                        filter: "include"
                                    },
                                    image: {
                                        bidders: "*",
                                        filter: "include"
                                    }
                                },
                                syncDelay: 5e3,
                                syncEnabled: !0,
                                syncsPerBidder: 5,
                                userIds: e.prebidUserIds
                            },
                            yahoossp: {
                                mode: "all"
                            },
                            currency: {
                                adServerCurrency: "USD",
                                defaultRates: {
                                    USD: {
                                        GBP: .75,
                                        EUR: .85
                                    }
                                }
                            }
                        };
                        i = e.defineDynamicFloors(i),
                            e.staticConfig.schain.config.nodes.length > 0 && (i.schain = e.staticConfig.schain),
                            e.dynamicSettings.account.cmpApplies && (i.consentManagement = {},
                                e.cmpGDPR && (i.consentManagement.gdpr = {
                                    cmpApi: "iab", timeout: 1e4, defaultGdprScope: !1, rules: [{
                                        purpose: "storage",
                                        enforcePurpose: !0,
                                        enforceVendor: !0,
                                        vendorExceptions: []
                                    }, {
                                        purpose: "basicAds",
                                        enforcePurpose: !0,
                                        enforceVendor: !0,
                                        vendorExceptions: []
                                    }]
                                }),
                                e.cmpCCPA && (i.consentManagement.usp = {
                                    cmpApi: "iab",
                                    timeout: 100
                                })),
                            pbjs.setConfig(i),
                            pbjs.bidderSettings = {
                                standard: {
                                    storageAllowed: !0,
                                    bidCpmAdjustment: function (t, i) {
                                        var n = t;
                                        try {
                                            var o = 1,
                                                a = e.getUnitDefFromCode(i.adUnitCode);
                                            e.config.partners.forEach((function (n) {
                                                if (n.shortName === i.bidderCode && "video" !== a.unitType && "outstream" !== a.unitType) {
                                                    o = parseFloat(n.revShare);
                                                    try {
                                                        var r = e.getAdjustedFloor(i.bidderCode, a);
                                                        r && t < r && (t = 0)
                                                    } catch (e) { }
                                                }
                                            }));
                                            var r = parseFloat(e.config.account.adXMultiplier);
                                            if ("video" === a.unitType) {
                                                var d = 1;
                                                try {
                                                    d = e.videoAuctionConfig[e.videoAuctionCount].mult
                                                } catch (e) { } r = d
                                            } n = t * o * r
                                        } catch (e) { }
                                        return n = e.accountSpecificCpmAdjustment(i, n), n = e.findClosestPricePoint(n)
                                    }
                                }
                            };
                        try {
                            pbjs.enableAnalytics([{
                                provider: "adagio"
                            }])
                        } catch (e) { }
                    }))
                },
                accountSpecificCpmAdjustment: function (e, t) {
                    return t
                },
                updateUserSyncs: function () {
                    window.lngtd.updatePrebidUserIds();
                    var e = {
                        auctionDelay: 0,
                        filterSettings: {
                            iframe: {
                                bidders: "*",
                                filter: "include"
                            },
                            image: {
                                bidders: "*",
                                filter: "include"
                            }
                        },
                        syncDelay: 2500,
                        syncEnabled: !0,
                        syncsPerBidder: 5,
                        userIds: window.lngtd.prebidUserIds
                    };
                    pbjs.que.push((function () {
                        pbjs.setConfig({
                            userSync: e
                        }),
                            pbjs.refreshUserIds()
                    }))
                },
                applyHiddenAdClass: function () {
                    const e = this;
                    n.whenDocumentReady((function () {
                        e.hiddenAdClass && i.config.adUnits.forEach((function (e) {
                            var t = document.getElementById(e.elementId);
                            -1 === i.allPageEligibleUnits.indexOf(e) && t && t.classList.add(i.hiddenAdClass)
                        }))
                    }))
                },
                getEligibleUnitsForAuction: function (e) {
                    const t = this;
                    var i = [],
                        n = [
                            "video",
                            "outstream"
                        ];
                    t.config.adUnits.forEach((function (o) {
                        "video" === e && n.indexOf(o.unitType) > -1 && ("mobile" === o.deviceType && t.adsIsMobile ? i.push(o) : "desktop" !== o.deviceType || t.adsIsMobile ? "both" === o.deviceType && i.push(o) : i.push(o)),
                            "video" !== e && -1 === n.indexOf(o.unitType) && ("mobile" === o.deviceType && t.adsIsMobile ? i.push(o) : "desktop" !== o.deviceType || t.adsIsMobile ? "both" === o.deviceType && i.push(o) : i.push(o))
                    })); var o = i.filter(e => -1 === t.manualExcludeUnits.indexOf(e.elementId));
                    o = o.filter(e => -1 === t.refreshExcludeUnits.indexOf(e.elementId));
                    var a = [];
                    if (o.forEach((function (e) {
                        "moment-display" === e.unitType || "moment-video" === e.unitType || a.push(e)
                    })),
                        o = a,
                        "init" === e || "video" === e) return o;
                    var r = [];
                    return t.config.account.displayOnlyViewable && "refresh" === e ? o.forEach((function (e) {
                        var i = !0;
                        t.config.account.onlyRequestEligibleBidsRefresh && !t.adMetViewability(e.elementId) && (i = !1);
                        var n = !1;
                        try {
                            n = t.adUnitDetails[e.elementId].displayed
                        } catch (e) { } (n || t.alwaysRefreshTypes.indexOf(e.unitType) > -1) && e.refresh && i && r.push(e)
                    })) : r = o, r
                }, getUnitDefFromId: function (e) {
                    var t = null,
                        i = [];
                    return this.allPageEligibleUnits.forEach((function (e) {
                        i.push(e.gamPath)
                    })),
                        this.config.adUnits.forEach((function (n) {
                            n.elementId === e && i.indexOf(n.gamPath) > -1 && (t = n)
                        })), t
                },
                getUnitDefFromCode: function (e) {
                    var t = null,
                        i = [];
                    return pbjs.adUnits.forEach((function (e) {
                        i.push(e.gamPath)
                    })),
                        this.config.adUnits.forEach((function (n) {
                            n.code === e && i.indexOf(n.gamPath) > -1 && (t = n)
                        })), t
                },
                getUnitDefFromAllIds: function (e) {
                    var t = null;
                    return this.config.adUnits.forEach((function (i) {
                        i.elementId === e && (t = i)
                    })), t
                },
                getTimeout: function () {
                    const e = this;
                    return e.adsIsMobile ? e.config.account.mobileTimeout : e.config.account.desktopTimeout
                },
                runPrebidAuction: function (e, t, i) {
                    var o = this, a = [];
                    i = void 0 !== i ? i : o.biddingComplete,
                        e && e.length > 0 && (o.debugLog("Running prebid auction for units", e),
                            pbjs.que.push((function () {
                                var r = n.uuidv4();
                                o.auctionUnitDefs[r] = e, e.forEach((function (e) {
                                    o.adUnitDetails.hasOwnProperty(e.elementId) || (o.adUnitDetails[e.elementId] = {}),
                                        o.adUnitDetails[e.elementId].isRefreshing = !0,
                                        o.adUnitDetails[e.elementId].confiantRefreshed = !1,
                                        a.push(e.code)
                                })),
                                    o.prebidAuctions[r] = {},
                                    e.forEach((function (e) {
                                        o.prebidAuctions[r][e.code] = {}
                                    })),
                                    "video" === t ? pbjs.requestBids({
                                        adUnitCodes: a,
                                        bidsBackHandler: i,
                                        timeout: o.getTimeout(),
                                        auctionId: r
                                    }) : (o.runAmazonAuction(e),
                                        pbjs.requestBids({
                                            adUnitCodes: a,
                                            bidsBackHandler: i,
                                            timeout: o.getTimeout(),
                                            auctionId: r
                                        }))
                            })))
                },
                initializeAmazon: function () {
                    if (this.config.account.amazonPublisherId && apstag) {
                        var e = {
                            pubID: this.config.account.amazonPublisherId,
                            adServer: "googletag"
                        };
                        this.staticConfig.schain.config.nodes.length > 0 && (e.schain = this.staticConfig.schain.config),
                            apstag.init(e)
                    }
                },
                runAmazonAuction: function (e) {
                    var t = this,
                        i = function (e) {
                            for (
                                var t = [],
                                i = [[336, 280],
                                [400, 300],
                                [1, 1],
                                [120, 600],
                                [300, 169],
                                [350, 200],
                                [400, 227]],
                                n = 0; n < e.length; n++
                            ) {
                                var o = e[n];
                                -1 === i.indexOf(o) && t.push(o)
                            } return t
                        };
                    if (t.config.account.amazonPublisherId && e && e.length > 0 && apstag) {
                        var n = [];
                        e.forEach((function (e) {
                            if (
                                e.gamPath && e.mediaTypes.hasOwnProperty("banner") &&
                                e.mediaTypes.banner.hasOwnProperty("sizes") &&
                                e.mediaTypes.banner.sizes.length > 0 && -1 === t.excludeFromAmazon.indexOf(e.code)
                            ) {
                                var o = t.getFloorForPartnerUnit("amazon", e),
                                    a = {
                                        slotID: e.elementId,
                                        slotName: e.gamPath,
                                        sizes: i(e.mediaTypes.banner.sizes),
                                        floor: {
                                            value: parseInt(100 * o),
                                            currency: "USD"
                                        }
                                    };
                                n.push(a)
                            }
                        })),
                            n.length > 0 && apstag.fetchBids({
                                slots: n,
                                timeout: t.getTimeout()
                            },
                                (function (e) { }))
                    }
                },
                processDisplayQueue: function () {
                    var e = this;
                    pbjs.que.push((function () {
                        e.allPageEligibleUnits.forEach((function (t) {
                            try {
                                e.debugLog("auction displaying unit: ", t),
                                    e.displayUnit(t, "auction")
                            } catch (i) {
                                e.debugLog("error displaying unit: ", t, i)
                            }
                        }))
                    }))
                },
                gptProcessDisplayQueue: function () {
                    var e = this;
                    googletag.cmd.push((function () {
                        pbjs.que.push((function () {
                            e.allPageEligibleUnits.forEach((function (t) {
                                try {
                                    e.debugLog("auction displaying unit: ", t),
                                        e.displayUnit(t, "auction")
                                } catch (i) {
                                    e.debugLog("error displaying unit: ", t, i)
                                }
                            }))
                        }))
                    }))
                },
                adMetViewability: function (e) {
                    const t = this;
                    var i = !1, n = ["eb", "adx"], o = t.getUnitDefFromId(e);
                    return n.indexOf(t.adUnitDetails[e].lastAdvertiser) > -1 ? t.adUnitDetails[e].metGPTViewability &&
                        (i = !0) : t.adUnitDetails[e].metViewability &&
                    (i = !0),
                        "flexp" === o.unitType && (Object.keys(t.flexUnitConfigs).forEach((function (o) {
                            var a = t.flexUnitConfigs[o].contenders; a.indexOf(e) > -1 && a.forEach((function (e) {
                                n.indexOf(t.adUnitDetails[e].lastAdvertiser) > -1 ? t.adUnitDetails[e].metGPTViewability && (i = !0) : t.adUnitDetails[e].metViewability && (i = !0)
                            }))
                        })),
                            document.getElementById(e) && "" === document.getElementById(e).innerHTML && (i = !0)), i
                },
                refreshRequiresUserInteraction: !1,
                displayUnit: function (e, t) {
                    const i = this;
                    if (("string" == typeof e || e instanceof String) && !(e = i.getUnitDefFromId(e))) return;
                    if ("" === e.gamPath && "flexc" !== e.unitType) return;
                    if (i.manualExcludeUnits.indexOf(e.elementId) > -1) return void i.debugLog("Not displaying unit because it is manually excluded:", e.elementId);
                    const o = e.elementId;
                    let a = n.elementIsInView(o);
                    if ("auction" === t && -1 !== i.allPageEligibleUnits.indexOf(e)) {
                        if (i.skinAdUnitCode && ["stickyr", "stickyl"].indexOf(e.unitType) > -1) {
                            let e = pbjs.getAdserverTargetingForAdUnitCode(i.skinAdUnitCode);
                            e.hasOwnProperty("hb_bidder") && ["sublime", "inskin"].indexOf(e.hb_bidder) > -1 && (i.stickyCannotDisplayOverride = !0)
                        }
                        let t = !1;
                        pbjs.getAdserverTargetingForAdUnitCode(e.code).hasOwnProperty("hb_pb") && (t = !0);
                        let n = !0;
                        (!0 === e.requireBids && !t || !0 === i.config.account.skipGAMOnNoBids && !t) && (n = !1),
                            n && ("danchor" === e.unitType && setTimeout((function () {
                                i.addDesktopAnchorToPage(e)
                            }),
                                i.anchorDelay),
                                "manchor" === e.unitType && setTimeout((function () {
                                    i.addMobileAnchorToPage(e)
                                }),
                                    i.anchorDelay),
                                "1x1" === e.unitType && i.addOneByOneToPage(e),
                                "stickyr" === e.unitType && i.canShowSidebarSticky() && !i.stickyCannotDisplayOverride && i.addSidebarStickyToPage(e, "right"),
                                "stickyl" === e.unitType && i.canShowSidebarSticky() && !i.stickyCannotDisplayOverride && i.addSidebarStickyToPage(e, "left"))
                    }
                    let r = !1, d = !1, s = !1, l = null, c = !1;
                    try {
                        d = i.adUnitDetails[o].displayed,
                            s = i.adUnitDetails[o].refreshed,
                            l = i.adUnitDetails[o].lastAuction,
                            c = i.adUnitDetails[o].isRefreshing
                    } catch (e) {
                        return i.debugLog("Not on page: ", o), !1
                    }
                    var u = 0;
                    l && (u = Date.now() - l);
                    let g = "init",
                        p = document.getElementById(o);
                    if (p && i.isHuman || i.displayIntervals.hasOwnProperty(e.code) || (i.displayIntervals[e.code] = setInterval((function () {
                        i.displayUnit(e, "delay")
                    }), 500)),
                        "auction" === t && "flexc" === e.unitType) {
                        if (d) if (i.flexMustMeetViewability) {
                            var m = !1;
                            i.flexUnitConfigs[e.elementId].contenders.forEach((function (e) {
                                i.adUnitDetails[e].metViewability && (m = !0)
                            })),
                                m && i.displayFlexUnit(e)
                        } else a && i.displayFlexUnit(e);
                        else n.whenDocumentReady((function () {
                            i.displayFlexUnit(e),
                                i.adUnitDetails[e.elementId].displayed = Date.now()
                        }));
                        return !1
                    } if ("flexp" === e.unitType) {
                        if ("auction" === t) return !1;
                        if ("flex" !== t && -1 === i.flexInitialized.indexOf(o)) return !1;
                        var f = !1;
                        if (Object.keys(i.flexUnitConfigs).forEach((function (e) {
                            i.flexUnitConfigs[e].contenders.indexOf(o) > -1 && i.flexUnitConfigs[e].displayCalled && (f = !0)
                        })), "flex" === t && f)
                            return !1
                    } if (d) {
                        g = "refresh";
                        var h = i.adMetViewability(o) || i.adUnitDetails[o].displayed && !i.adUnitDetails[o].refreshed;
                        let t = Date.now() - i.adUnitDetails[o].refreshed;
                        if (a && h && e.refresh && -1 === i.refreshDisallowed.indexOf(o)) {
                            u > 6e4 ? c || i.refreshAds([e]) : s ? t > 15e3 && l > s && (r = !0) : l > d && (r = !0)
                        }
                    } else if (!1 === e.lazyLoad && p || a) if (!0 === e.requireBids) {
                        var b = pbjs.getBidResponsesForAdUnitCode(e.code);
                        b && b.bids && b.bids.length > 0 && (r = !0)
                    } else l && (u < 6e4 ? r = !0 : c || i.refreshAds([e]));
                    if ("force" === t && (r = !0), r) {
                        try {
                            clearInterval(i.displayIntervals[e.code])
                        } catch (e) { }
                        if (i.adUnitDetails[e.elementId].metViewability = !1,
                            i.adUnitDetails[e.elementId].metGPTViewability = !1,
                            "flexp" === e.unitType && Object.keys(i.flexUnitConfigs).forEach((function (e) {
                                var t = i.flexUnitConfigs[e].contenders;
                                t.indexOf(o) > -1 && (i.flexUnitConfigs[e].displayCalled = !0,
                                    t.forEach((function (e) {
                                        i.adUnitDetails[e].metViewability = !1,
                                            i.adUnitDetails[e].metGPTViewability = !1
                                    })))
                            })),
                            i.clearThirdPartyCreativeContainers(),
                            !0 === i.config.account.useGAM) googletag.cmd.push((function () {
                                pbjs.que.push((function () {
                                    var t = i.mustDisplayTogether.desktop;
                                    if (i.adsIsMobile && (t = i.mustDisplayTogether.mobile),
                                        "init" === g && t) {
                                        var n = !1, o = null, a = [];
                                        t.forEach((function (t) {
                                            t.indexOf(e.code) > -1 && (o = t, -1 === i.mustDisplayTogetherReady.indexOf(e.code) && i.mustDisplayTogetherReady.push(e.code))
                                        })),
                                            o ? (o.forEach((function (e) {
                                                var t = i.getUnitDefFromCode(e), o = null;
                                                t && (o = document.getElementById(t.elementId)),
                                                    t && o ? a.push(t) : i.mustDisplayTogetherReady.push(e),
                                                    -1 === i.mustDisplayTogetherReady.indexOf(e) && (n = !0)
                                            })),
                                                n || i.doPubadsRefresh(a, g)) : i.doPubadsRefresh([e], g)
                                    } else "flexp" === e.unitType ? Object.keys(i.flexUnitConfigs).forEach((function (t) {
                                        i.flexUnitConfigs[t].possibleCombinations.forEach((function (t) {
                                            if (t.indexOf(e.elementId) > -1) {
                                                var n = [];
                                                t.forEach((function (e) {
                                                    var t = i.getUnitDefFromId(e);
                                                    n.push(t)
                                                })),
                                                    i.doPubadsRefresh(n, g)
                                            }
                                        }))
                                    })) : i.doPubadsRefresh([e], g)
                                }))
                            })); else {
                            var I = null, A = pbjs.getHighestCpmBids(e.code);
                            A.length > 0 ? (I = A[0]) && (i.adUnitDetails[e.elementId].displayed = Date.now(),
                                "refresh" === g && (i.adUnitDetails[e.elementId].refreshed = Date.now()),
                                i.renderPrebidWinningBidWithoutGAM(I, e.elementId)) : (i.adUnitDetails[e.elementId].displayed = Date.now(),
                                    "refresh" === g && (i.adUnitDetails[e.elementId].refreshed = Date.now()),
                                    i.fallbackForUnfilledNoGAM(e.elementId))
                        }
                    } else "auction" === t && i.debugLog("Not displaying unit ...", e.elementId, "in view:", a, "exists on page:", p, i.adUnitDetails[e.elementId])
                },
                fallbackForUnfilledNoGAM: function (e) { },
                doPubadsRefresh: function (e, t) {
                    var i = this, n = [];
                    try {
                        e.forEach((function (e) {
                            i.defineGPTSlotForUnit(e);
                            var o = document.getElementById(e.elementId);
                            o.style.textAlign = "center",
                                o.dataset.state = "loaded",
                                i.adUnitDetails[e.elementId].displayed = Date.now(),
                                "refresh" === t && (i.adUnitDetails[e.elementId].refreshed = Date.now());
                            var a = i.gptslots[e.elementId];
                            i.setTargetingForAdUnit(e, t) && n.push(a)
                        }))
                    } catch (e) {
                        i.debugLog("Error with GPT prep", e)
                    }
                    n.length > 0 && (googletag.pubads().refresh(n),
                        i.doAAXRefresh(n))
                },
                setTargetingForAdUnit: function (e, t) {
                    var i = "false";
                    this.setAdditionalGPTTargeting();
                    var o = this.gptslots[e.elementId];
                    o.setTargeting("elid", e.elementId);
                    var a = null, r = pbjs.getHighestCpmBids(e.code);
                    if (r.length > 0) {
                        var d = (a = r[0]).adserverTargeting;
                        for (var s in this.debugLog("Setting targeting for", e.elementId, d, o), d)
                            if (d.hasOwnProperty(s) && d[s]) try {
                                var l = d[s].toString();
                                o.setTargeting(s, l)
                            } catch (e) {
                                this.debugLog("Error setting targeting for:", s, d, e)
                            }
                    }
                    var c = o.getTargeting("amznbid");
                    if (a) this.prebidWinningBids[e.elementId] = a;
                    else if (0 !== c.length && c[0].length > 3)
                        this.prebidWinningBids[e.elementId] = null;
                    else if (this.prebidWinningBids[e.elementId] = null, i = "true", !0 === this.config.account.skipGAMOnNoBids)
                        return this.debugLog(e.elementId, "not calling GAM because no bids returned"), !1;
                    this.setAdditionalGPTSlotTargeting(e.elementId), n.findGetParameter("ensurefill") && o.setTargeting("ensurefill", "1"); try { !1 === window.__pubxLoaded__ && o.setTargeting("pubx-a", "off") } catch (e) { } return o.setTargeting("authd", this.enrichIdState), o.setTargeting("display_type", t), o.setTargeting("nobids", i), !0
                }, clearThirdPartyCreativeContainers: function () { try { document.querySelectorAll(".ut_container").forEach(e => { e.parentNode.removeChild(e) }), document.querySelectorAll(".jpx-ms-wrapper").forEach(e => { e.parentNode.removeChild(e) }), document.querySelectorAll("[id^='ad_is']").forEach(e => { e.parentNode.removeChild(e) }) } catch (e) { } }, setGAMPersonalizationForSPCookie: function () { googletag.cmd.push((function () { "false" === n.readCookie("_sp_enable_dfp_personalized_ads") ? googletag.pubads().setRequestNonPersonalizedAds(1) : googletag.pubads().setRequestNonPersonalizedAds(0) })) }, initializeGPT: function (e) { const t = this; googletag.cmd.push((function () { !1 === t.GPTInitialized && (t.config.account.enableSourcepoint && (void 0 === n.readCookie("_sp_enable_dfp_personalized_ads") || t.setGAMPersonalizationForSPCookie()), googletag.pubads().enableSingleRequest(), googletag.pubads().disableInitialLoad(), googletag.enableServices(), googletag.pubads().addEventListener("impressionViewable", t.GPTVisibilityHandler), t.winEventAttached || (googletag.pubads().addEventListener("slotRenderEnded", t.slotRenderEndedHandler), t.winEventAttached = !0), t.dynamicParentEventAttached || (googletag.pubads().addEventListener("slotRenderEnded", t.dynamicParentHandler), t.dynamicParentEventAttached = !0), googletag.pubads().setTargeting("session-depth", t.sessionDepth.toString()), t.setAdditionalGPTTargeting(), e.forEach((function (e) { t.defineGPTSlotForUnit(e) })), t.GPTInitialized = !0) })), e.forEach((function (e) { googletag.cmd.push((function () { try { var i; e.gamSizes.indexOf("interstitial") > -1 && (i = googletag.defineOutOfPageSlot(e.gamPath, googletag.enums.OutOfPageFormat.INTERSTITIAL).addService(googletag.pubads()), t.gptslots[e.elementId] = i, t.debugLog("Interstitial created", i), i && (t.debugLog("Interstitial calling", i), googletag.display(i), googletag.pubads().refresh([i]))) } catch (i) { t.debugLog(i), t.debugLog("Error defining GPT slot for unit", e) } })) })) }, defineGPTSlotForUnit: function (e) { const t = window.lngtd; t.gptslots.hasOwnProperty(e.elementId) || "" === e.gamPath || googletag.cmd.push((function () { pbjs.que.push((function () { try { var i; e.gamSizes.indexOf("out-of-page") > -1 ? i = googletag.defineOutOfPageSlot(e.gamPath, e.elementId).addService(googletag.pubads()) : e.gamSizes.indexOf("interstitial") > -1 || (i = googletag.defineSlot(e.gamPath, e.gamSizes, e.elementId).addService(googletag.pubads())), googletag.display(i), t.gptslots[e.elementId] = i } catch (i) { t.debugLog(i), t.debugLog("Error defining GPT slot for unit", e) } })) })) }, GPTVisibilityHandler: function (e) { const t = window.lngtd; var i = e.slot.getSlotElementId(); t.debugLog("impression viewable", i, e); try { t.adUnitDetails[i].metGPTViewability = !0 } catch (e) { t.debugLog("Unit is not defined in LNGTD code:", i) } try { t.logViewableImpressionToBQ(i) } catch (e) { } }, dynamicParentHandler: function (e) { const t = window.lngtd; var i = e.slot.getSlotElementId(); if (t.dynamicParentAds.hasOwnProperty(i)) { let e = t.dynamicParentAds[i]; t.moveAdToCorrectParent(i, e) } }, flexSpacer: function () { }, displayFlexUnit: function (e) { const t = window.lngtd; var i = e.elementId, o = document.getElementById(i); if (o && t.flexUnitConfigs.hasOwnProperty(i) && !(t.refreshDisallowed.indexOf(i) > -1)) { var a = 0, r = [], d = {}; t.flexUnitConfigs[i].contenders.forEach((function (e) { d[e] = 0; var t = pbjs.getAdserverTargetingForAdUnitCode(e); if (t.hasOwnProperty("hb_pb")) try { d[e] = parseFloat(t.hb_pb) } catch (e) { } })); var s = n.findGetParameter("forceflexid"); t.flexUnitConfigs[i].possibleCombinations.forEach((function (e) { var n = 0; if (s) e.forEach((function (t) { t === s && (r = e) })); else if (e.forEach((function (e) { n += d[e] })), n > a) r = e, a = n; else if (n === a) { var o = t.flexUnitConfigs[i].priorityCombination; void 0 !== o && [e, r].indexOf(o) > -1 ? r = o : e.length > r.length && (r = e, a = n) } })), o.innerHTML = "", "horizontal" === t.flexUnitConfigs[i].layout && (o.style.display = "flex", o.style.justifyContent = "center"), t.flexUnitConfigs[i].contenders.forEach((function (e) { if (t.gptslots.hasOwnProperty(e)) { var i = document.getElementById(e); i && i.parentNode.removeChild(i) } })), 0 === r.length && (r = t.flexUnitConfigs[i].possibleCombinations[0]), t.flexUnitConfigs[i].displayCalled = !1; var l = 0; r.forEach((function (e) { l++; var n = t.getUnitDefFromId(e), a = document.createElement("div"); a.id = n.elementId, "vertical" === t.flexUnitConfigs[i].layout && r.length > 1 && r.indexOf(e) > 0 && (a.style.marginTop = t.flexUnitConfigs[i].unitSpacing), "horizontal" === t.flexUnitConfigs[i].layout && r.length > 1 && (a.style.float = "left", a.style.display = "inline-block", r.indexOf(e) > 0 && (a.style.marginLeft = t.flexUnitConfigs[i].unitSpacing)), o.appendChild(a), -1 === t.flexInitialized.indexOf(n.elementId) && t.flexInitialized.push(n.elementId), 1 === l && t.flexSpacer(o) })), r.forEach((function (e) { var i = t.getUnitDefFromId(e); t.displayUnit(i, "flex") })) } }, desktopAnchorBgColor: function () { return "#ffffffcf" }, addDesktopAnchorToPage: function (e) { const i = window.lngtd; if (!1 === i.disableAnchor() && !1 === i.desktopAnchorInitialized) { i.desktopAnchorInitialized = !0; var o = document.createElement("style"); o.type = "text/css"; o.innerHTML = `\n                    #desktop-anchor {\n                        bottom:0;\n                        display:none;\n                        height:90px;\n                        position:fixed;\n                        width:100%;\n                        z-index:9999;\n                        background: transparent;\n                        left:0;\n                        right:0;\n                        margin:0 auto;\n                    }\n                    \n                    #desktop-anchor iframe {\n                        margin: 0 auto;\n                    }\n                    \n                    #desktop-anchor.active {\n                        background: ${i.desktopAnchorBgColor()};\n                    }\n\n                    #desktop-anchor-close {\n                        cursor:pointer;\n                        background-size:contain;\n                        background-image: url("${t}");\n                        background-color:white;\n                        border-radius: 50% 50% 50% 50%;\n                        width: 25px;\n                        height: 25px;\n                        position:absolute;\n                        top: 0;\n                        right:0;\n                        margin-right:20px;\n                        margin-top:15px;\n                        z-index:9;\n                        display: none;\n                    }\n                    \n                    #desktop-anchor.active #desktop-anchor-close {\n                        display: block;\n                    }\n\n                    ${i.desktopAnchorExtraProps && i.desktopAnchorExtraProps()}\n                `, document.head.appendChild(o), n.addLoadEvent((function () { var t = document.createElement("div"); t.id = "desktop-anchor", document.body.appendChild(t); var n = document.createElement("div"); n.id = e.elementId, document.getElementById("desktop-anchor").appendChild(n); var o = document.createElement("a"); o.href = "#", o.id = "desktop-anchor-close", o.onclick = function (t) { t.preventDefault(), document.getElementById("desktop-anchor").setAttribute("style", "display:none;"); try { document.getElementById(e.elementId).setAttribute("style", "display:none;"); var n = i.gptslots[e.elementId]; googletag.destroySlots([n]) } catch (e) { } return !1 }, document.getElementById("desktop-anchor").appendChild(o), t.style.display = "block", i.displayUnit(e) })) } }, mobileAnchorClosePosition: function () { return "\n                top:-25px;\n                right:5px;\n            " }, mobileAnchorZIndex: function () { return "9999" }, addMobileAnchorToPage: function (e) { const i = window.lngtd; if (!1 === i.disableMobileAnchor() && !1 === i.mobileAnchorInitialized) { i.mobileAnchorInitialized = !0; var o = document.createElement("style"); o.type = "text/css", o.innerHTML = `\n                    #mobile-adhesion-ad {\n                        background: transparent;\n                        bottom:0;\n                        display:none;\n                        left:0;\n                        max-height:100px;\n                        position:fixed;\n                        right:0;\n                        text-align:center;\n                        width:100%;\n                        z-index: ${i.mobileAnchorZIndex()};\n                    }\n                    \n                    #mobile-adhesion-ad iframe {\n                        margin: 0 auto;\n                    }\n                    \n                    #mobile-adhesion-ad.active {\n                        background: rgba(0,0,0,.2);\n                    }\n                    \n                    #mobile-adhesion-close {\n                        cursor:pointer;\n                        background-size:contain;\n                        background-image:url("${t}");\n                        background-color:white;\n                        border-radius: 50% 50% 50% 50%;\n                        width:18px;\n                        height:18px;\n                        position:absolute; \n                        ${i.mobileAnchorClosePosition()}\n                        z-index:9;\n                        display: none;\n                    }\n                    \n                    #mobile-adhesion-ad.active #mobile-adhesion-close {\n                        display: block;\n                    }\n                `, document.head.appendChild(o), n.addLoadEvent((function () { var t = document.createElement("div"); t.id = "mobile-adhesion-ad", document.body.appendChild(t); var n = document.createElement("div"); n.id = e.elementId, document.getElementById("mobile-adhesion-ad").appendChild(n); var o = document.createElement("a"); o.href = "#", o.id = "mobile-adhesion-close", document.getElementById("mobile-adhesion-ad").appendChild(o), document.getElementById("mobile-adhesion-close").onclick = function (t) { t.preventDefault(), document.getElementById("mobile-adhesion-ad").setAttribute("style", "display:none;"); try { document.getElementById(e.elementId).setAttribute("style", "display:none;"); var n = i.gptslots[e.elementId]; googletag.destroySlots([n]) } catch (e) { } return !1 }, t.style.display = "block", i.displayUnit(e) })) } }, sidebarStickyPosition: function (e) { var t = "right:0;", i = "left:0;"; return "left" === e && (t = "left:0;", i = "right:0;"), [t, i] }, sidebarStickyScrollStart: null, addSidebarStickyToPage: function (e, i) { const o = window.lngtd; if (o.canShowSidebarSticky() && -1 === o.sidebarStickyInitialized.indexOf(e.code)) { o.sidebarStickyInitialized.push(e.code); var a = "sidebar-sticky-" + i, r = "sidebar-sticky-close-" + i, d = document.createElement("style"); d.type = "text/css"; var s = o.sidebarStickyPosition(i), l = s[0], c = s[1], u = "50%", g = "-300px"; if (o.sidebarStickyScrollStart && (u = o.sidebarStickyScrollStart + "px", g = "0"), d.innerHTML = `\n                    #${a} {\n                        display:none;\n                        max-height:600px;\n                        top: ${u};\n                        margin-top: ${g};\n                        ${l} \n                        position:fixed;\n                        text-align:center;\n                        max-width:300px;\n                        z-index:9999;\n                        border: 1px solid #ccc;\n                    }\n                    \n                    #${a}.active {\n                    }\n                    \n                    #${r} {\n                        cursor:pointer;\n                        background-size:contain;\n                        background-image:url("${t}");\n                        background-color:white;\n                        border-radius: 50% 50% 50% 50%;\n                        width:18px;\n                        height:18px;\n                        position:absolute;\n                        top:-25px;\n                        ${c}\n                        z-index:9;\n                        display:none;\n                    }\n                    \n                    #${a}.active #${r} {\n                        display:block;\n                    }\n                `, document.head.appendChild(d), n.addLoadEvent((function () { var t = document.createElement("div"); t.id = a, document.body.appendChild(t); var i = document.createElement("div"); if (i.id = e.elementId, document.getElementById(a).appendChild(i), o.sidebarStickyDismissable) { var n = document.createElement("a"); n.href = "#", n.id = r, document.getElementById(a).appendChild(n), document.getElementById(r).onclick = function () { document.getElementById(a).setAttribute("style", "display:none;"); try { document.getElementById(e.elementId).setAttribute("style", "display:none;"); var t = o.gptslots[e.elementId]; googletag.destroySlots([t]) } catch (e) { } return !1 } } t.style.display = "block", o.displayUnit(e) })), o.sidebarStickyScrollStart) { var p = function () { var e = o.sidebarStickyScrollStart - (window.innerHeight - 600) / 2; if (document.getElementById(a)) if (document.documentElement.scrollTop > e) document.getElementById(a).style.top = "50%", document.getElementById(a).style.marginTop = "-300px"; else { var t = o.sidebarStickyScrollStart - document.documentElement.scrollTop; document.getElementById(a).style.top = t + "px", document.getElementById(a).style.marginTop = "0" } }; window.addEventListener("scroll", p), p() } } }, resetAnchors: function () { const e = window.lngtd; if (e.desktopAnchorInitialized) { var t = document.getElementById("desktop-anchor"); t && (t.parentNode.removeChild(t), e.desktopAnchorInitialized = !1) } if (e.mobileAnchorInitialized) { var i = document.getElementById("mobile-adhesion-ad"); i && (i.parentNode.removeChild(i), e.mobileAnchorInitialized = !1) } if (e.sidebarStickyInitialized.length > 0) { var n = document.getElementById("sidebar-sticky-left"); n && n.parentNode.removeChild(n); var o = document.getElementById("sidebar-sticky-right"); o && o.parentNode.removeChild(o), e.sidebarStickyInitialized = [] } if (e.flexInitialized.length > 0) { for (var a in e.flexUnitConfigs) if (e.flexUnitConfigs.hasOwnProperty(a)) { var r = document.getElementById(a); r && (r.innerHTML = "") } e.flexInitialized = [] } }, addOneByOneToPage: function (e) { const t = window.lngtd; !1 === t.disableAnchor() && !1 === t.onebyoneInitialized && (t.onebyoneInitialized = !0, n.addLoadEvent((function () { var i = document.createElement("div"); i.id = e.elementId, i.style.width = "1px", i.style.height = "1px", i.innerHTML = "", document.body.appendChild(i), t.displayUnit(e) }))) }, buildDynamicPlaceholder: function (e, t) { var i = document.createElement("div"); return i.setAttribute("id", e), i.style.minHeight = t + "px", i }, lastScrollTop: 0, moveAdToCorrectParent: function (e, t, i) { void 0 === i && (i = "padding: 10px 0;"), !this.dynamicParentAds.hasOwnProperty(e) && t && (this.dynamicParentAds[e] = t); var o, a = "down", r = document.documentElement.scrollTop || document.body.scrollTop; a = r > this.lastScrollTop ? "down" : "up", this.lastScrollTop = r <= 0 ? 0 : r; for (var d = window.innerHeight, s = 0, l = 0; l < t.length; l++) { var c, u = t[l], g = document.getElementById(u).getBoundingClientRect(); if ("down" === a) c = g.top - d, c = Math.abs(c); else { var p = g.bottom; c = Math.abs(p) } o ? c >= 0 && c < s && (o = u, s = c) : (o = u, s = c) } if (o && (s < 150 || n.elementIsInView(o)) && this.currentDynamicId[e] !== o) try { document.getElementById(e) && document.getElementById(e).remove(); var m = document.getElementById(o), f = document.createElement("div"); f.setAttribute("id", e), f.style.cssText = i, f.dataset.label = "Advertisement", m.innerHTML = "", m.append(f); var h = window.lngtd.getUnitDefFromId(e); this.currentDynamicId[e] = o, this.debugLog("display dynamic for parent", o), window.lngtd.displayUnit(h, "force") } catch (e) { } }, refreshAds: function (e) { const t = window.lngtd; t.auctionType = "refresh", t.refreshCount >= t.config.account.maxRefreshCount && clearInterval(t.refreshInterval); let i = Date.now() - t.lastUserInteraction; (!t.refreshRequiresUserInteraction || i < 6e4) && (e ? e = e.filter((function (e) { return !0 === e.refresh })) : (t.refreshCount += 1, e = t.getEligibleUnitsForAuction(t.auctionType)), !0 === t.config.account.useGAM && googletag.cmd.push((function () { for (var e in googletag.pubads().clearTargeting(), t.gptslots) t.gptslots.hasOwnProperty(e) && t.gptslots[e].clearTargeting(); googletag.pubads().setTargeting("session-depth", t.sessionDepth.toString()), t.setAdditionalGPTTargeting() })), t.debugLog("Running refresh auction", e), t.runPrebidAuction(e, t.auctionType)) }, setAdditionalGPTTargeting: function () { const e = window.lngtd; e.defineAdditionalGPTTargeting(), Object.keys(e.additionalGPTTargeting).length > 0 && googletag.cmd.push((function () { Object.keys(e.additionalGPTTargeting).forEach((function (t) { try { googletag.pubads().setTargeting(t, e.additionalGPTTargeting[t].toString()) } catch (e) { } })) })) }, setAdditionalGPTSlotTargeting: function (e) { }, biddingComplete: function (e, t, i) { const n = window.lngtd; try { n.auctionUnitDefs[i].forEach((function (e) { n.adUnitDetails[e.elementId].isRefreshing = !1, n.adUnitDetails[e.elementId].lastAuction = Date.now() })) } catch (e) { } n.config.account.amazonPublisherId && apstag && googletag.cmd.push((function () { apstag.setDisplayBids() })), !0 === n.config.account.useGAM ? n.gptProcessDisplayQueue() : n.processDisplayQueue() }, observeViewability: function (e, t) { const i = document.getElementById(e); let n, o = !1; const a = new IntersectionObserver((function (e) { let i = null; if (e.forEach((function (e) { (!i || e.time > i.time) && (i = e) })), i) { let e = 0; const { intersectionRatio: a } = i; if (a > 0 && (e = a), 0 === e && !o) return void (o = !0); n = setTimeout((function () { t(e) }), 0) } }), { root: null, rootMargin: "0px", threshold: [0, .5, 1] }); return a.observe(i), { remove: function () { a.disconnect(), clearTimeout(n) } } }, startViewabilityCheck: function (e, t) { const i = window.lngtd; let n; var o = 1250, a = e; "video" === (t = void 0 !== t ? t : "display") && (o = 2500, a = i.videoPlacementContainerId), i.observeViewability(a, (function (t) { clearTimeout(n), t >= .5 && (n = setTimeout((function () { try { i.adUnitDetails[e].metViewability = !0; try { i.logViewableImpressionToBQ(e) } catch (e) { } } catch (t) { i.debugLog("Unit is not defined in LNGTD code:", e) } }), o)) })) }, loadConfiant: function () { const e = this; var t = "R5qOdsXTbIiDa16ix3lGyfpja-8"; void 0 !== e.config.account.confiantId && (t = e.config.account.confiantId); var i = document.createElement("script"); i.async = !0, i.src = "//confiant-integrations.global.ssl.fastly.net/" + t + "/gpt_and_prebid/config.js"; var n = document.getElementsByTagName("script")[0]; window.confiant = window.confiant || {}, window.confiant[t] = window.confiant[t] || { clientSettings: {} }, (window.confiant[t].clientSettings || (window.confiant[t].clientSettings = {})).callback = function (t, i, n, o, a, r) { if (n) try { var d = r.prebid.adId; pbjs.markWinningBidAsUsed({ adId: d }); var s = r.dfp.s, l = e.getUnitDefFromId(s); e.debugLog("Confiant has blocked an ad:", l, d), e.adUnitDetails[s].confiantRefreshed || (e.debugLog("Refreshing confiant blocked ad unit"), e.adUnitDetails[s].confiantRefreshed = !0, e.doPubadsRefresh([l], "refresh")) } catch (t) { e.debugLog("Confiant has blocked an ad") } }, n.parentNode.insertBefore(i, n) }, loadPubX: function (e) { }, loadBlockthrough: function () { var e = document.createElement("script"); e.src = "//longitudeads-com.videoplayerhub.com/galleryplayer.js", document.head.appendChild(e) }, loadAAX: function () { }, doAAXRefresh: function (e) { }, loadSourcepoint: function (e) { var t, i, o = window.lngtd; function a(e) { return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } !function () { for (var e, t, i = [], n = window, o = n; o;) { try { if (o.frames.__tcfapiLocator) { e = o; break } } catch (e) { } if (o === n.top) break; o = n.parent } e || (function e() { var t = n.document, i = !!n.frames.__tcfapiLocator; if (!i) if (t.body) { var o = t.createElement("iframe"); o.style.cssText = "display:none", o.name = "__tcfapiLocator", t.body.appendChild(o) } else setTimeout(e, 5); return !i }(), n.__tcfapi = function () { for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)n[o] = arguments[o]; if (!n.length) return i; "setGdprApplies" === n[0] ? n.length > 3 && 2 === parseInt(n[1], 10) && "boolean" == typeof n[3] && (t = n[3], "function" == typeof n[2] && n[2]("set", !0)) : "ping" === n[0] ? "function" == typeof n[2] && n[2]({ gdprApplies: t, cmpLoaded: !1, cmpStatus: "stub" }) : i.push(n) }, n.addEventListener("message", (function (e) { var t = "string" == typeof e.data, i = {}; if (t) try { i = JSON.parse(e.data) } catch (e) { } else i = e.data; var n = "object" === a(i) ? i.__tcfapiCall : null; n && window.__tcfapi(n.command, n.version, (function (i, o) { var a = { __tcfapiReturn: { returnValue: i, success: o, callId: n.callId } }; e && e.source && e.source.postMessage && e.source.postMessage(t ? JSON.stringify(a) : a, "*") }), n.parameter) }), !1)) }(), function () { var e = window, t = document; function i(t) { var i = "string" == typeof t.data; try { var n = i ? JSON.parse(t.data) : t.data; if (n.__cmpCall) { var o = n.__cmpCall; e.__uspapi(o.command, o.parameter, (function (e, n) { var a = { __cmpReturn: { returnValue: e, success: n, callId: o.callId } }; t.source.postMessage(i ? JSON.stringify(a) : a, "*") })) } } catch (n) { } } !function i() { if (!e.frames.__uspapiLocator) if (t.body) { var n = t.body, o = t.createElement("iframe"); o.style.cssText = "display:none", o.name = "__uspapiLocator", n.appendChild(o) } else setTimeout(i, 5) }(), "function" != typeof __uspapi && (e.__uspapi = function () { var e = arguments; if (__uspapi.a = __uspapi.a || [], !e.length) return __uspapi.a; "ping" === e[0] ? e[2]({ gdprAppliesGlobally: !1, cmpLoaded: !1 }, !0) : __uspapi.a.push([].slice.apply(e)) }, __uspapi.msgHandler = i, e.addEventListener("message", i, !1)) }(), o.cmpGDPR && (t = { onConsentReady: function (t, i) { window.lngtd.iabConsent.gdpr = i, window.lngtd.cmploaded || (window.lngtd.cmploaded = !0, e()) } }, i = function () { }), o.cmpCCPA && (t = {}, i = function () { window.lngtd.cmploaded || (window.lngtd.cmploaded = !0, e()) }), window._sp_queue = [], window._sp_ = { config: { accountId: parseInt(o.config.account.sourcepointId), baseEndpoint: "https://cdn.privacy-mgmt.com", ccpa: {}, gdpr: {}, events: t } }, n.loadScript("//cdn.privacy-mgmt.com/unified/wrapperMessagingWithoutDetection.js", (function () { i() })) }, accountSpecificCMPResolved: function () { }, waitForCMP: function (e) { var t = window.lngtd, i = function () { t.cmploaded || (t.cmploaded = !0, t.accountSpecificCMPResolved(), e()) }; if (t.cmpCCPA) { let e = 0; const t = setInterval((function () { e += 1, window.__uspapi ? window.__uspapi("getUSPData", 1, (function (n, o) { o ? (window.lngtd.iabConsent.ccpa = n.uspString, clearInterval(t), i()) : e >= 50 && (clearInterval(t), i()) })) : (clearInterval(t), i()) }), 100) } else if (t.cmpGDPR) { let e = 0; const t = setInterval((function () { if (e += 1, window.__tcfapi) { const e = function (e, n) { !e || "useractioncomplete" !== e.eventStatus && "tcloaded" !== e.eventStatus || (window.lngtd.iabConsent.gdpr = e.tcString, clearInterval(t), i()) }; window.__tcfapi("addEventListener", 2, e) } else e >= 100 && (clearInterval(t), i()) }), 100) } }, loadGoogleCMP: function () { n.loadScript("//lngtd.com/googlecmp.js", (function () { window.lngtd.cmploaded = !0 })) }, startLogging: function () { }, getAdvertiserMap: function () { let e = {}; return this.config.partners.forEach((function (t) { t.gamId && (e[t.gamId] = t.shortName) })), e }, getPartnerConfigFromPartnerShortName: function (e) { var t; return window.lngtd.config.partners.forEach((function (i) { i.shortName == e && (t = i) })), t }, renderPrebidWinningBidWithoutGAM: function (e, t, i) { var n = document.getElementById(t); for (void 0 === i && (i = this.auctionType), this.debugLog("MANUAL RENDER", i, e); n.firstChild;)n.removeChild(n.firstChild); n.setAttribute("style", "display: block;"); var o = document.createElement("iframe"); o.title = "ad", o.height = "100%", o.width = "100%", o.border = "0px", o.hspace = "0", o.vspace = "0", o.marginWidth = "0", o.marginHeight = "0", o.style.border = "0", o.scrolling = "no", o.frameBorder = "0", o.src = "about:blank", o.style.display = "block", n.appendChild(o), pbjs.renderAd(o.contentWindow.document, e.adId); try { var a = this.getUnitDefFromAllIds(t); this.logWinningBid(a.gamPath, t, e.bidderCode, e.originalCpm, i, e, "banner"), this.logImpressionToBQ(a.gamPath, t, e.bidderCode, e.originalCpm, i, e, "banner") } catch (e) { } this.startViewabilityCheck(t) }, shouldSuppressRefreshForBid: function (e) { return !1 }, ignoreAdvertiserIds: [], allowRefreshOfUnfilled: !1, slotRenderEndedHandler: function (e) { const t = window.lngtd; try { t.debugLog("slot render ended: ", e, e.slot.getAdUnitPath(), e.slot.getSlotElementId()); var i, n = t.getAdvertiserMap(), o = e.slot.getAdUnitPath(), a = e.slot.getSlotElementId(), r = t.prebidWinningBids[a]; t.debugLog("Winning display bid", e.slot.getSlotElementId(), r); var d = t.getUnitDefFromId(a); if (e.isEmpty) { t.allowRefreshOfUnfilled ? t.adUnitDetails[a].displayed = !1 : t.adUnitDetails[a].displayed && t.adUnitDetails[a].refreshed && t.refreshExcludeUnits.push(a); try { if (d && "stickyr" === d.unitType || "stickyl" === d.unitType) (s = document.getElementById("sidebar-sticky-left")) && s.parentNode.removeChild(s), (l = document.getElementById("sidebar-sticky-right")) && l.parentNode.removeChild(l), t.sidebarStickyInitialized = []; if (d && "danchor" === d.unitType) (c = document.getElementById("desktop-anchor")) && c.parentNode.removeChild(c), t.desktopAnchorInitialized = !1; if (d && "manchor" === d.unitType) (u = document.getElementById("mobile-adhesion-ad")) && u.parentNode.removeChild(u), t.mobileAnchorInitialized = !1 } catch (e) { } return t.logWinningBid(o, a, "unfilled", 0, t.auctionType, r, "banner"), void t.logImpressionToBQ(o, a, "unfilled", 0, t.auctionType, r, "banner") } try { var s, l, c, u; if (d && "stickyr" === d.unitType || "stickyl" === d.unitType) (s = document.getElementById("sidebar-sticky-left")) && s.classList.add("active"), (l = document.getElementById("sidebar-sticky-right")) && l.classList.add("active"); if (d && "danchor" === d.unitType) (c = document.getElementById("desktop-anchor")) && c.classList.add("active"); if (d && "manchor" === d.unitType) (u = document.getElementById("mobile-adhesion-ad")) && u.classList.add("active") } catch (e) { } try { if (e.elementId) { var g = document.getElementById(e.elementId), p = g.getElementsByTagName("iframe")[0]; g.ariaLabel = "Advertisement", p.ariaLabel = "Advertisement" } } catch (e) { } if (t.startViewabilityCheck(a), e.advertiserId && t.ignoreAdvertiserIds.indexOf(e.advertiserId) > -1) return; var m = .01, f = !1; r && e.advertiserId == t.config.account.lngtdAdvertiserId ? (m = r.originalCpm, i = r.bidderCode, f = !0) : r ? n.hasOwnProperty(e.advertiserId) ? (i = n[e.advertiserId], m = r.cpm + .01) : !i && e.yieldGroupIds && e.yieldGroupIds.length > 0 && (i = "eb", m = r.cpm + .01) : n.hasOwnProperty(e.advertiserId) && (i = n[e.advertiserId]), !i && e.yieldGroupIds && e.yieldGroupIds.length > 0 && (i = "eb"), i && m || (i = "unknown"); var h = null; if ("amazon" === i) { var b = e.slot.getTargeting("amznbid"); b.length && (h = b[0]) } try { t.gptslots[a].clearTargeting() } catch (e) { t.debugLog("Error clearing targeting for ", a) } t.logWinningBid(o, a, i, m, t.auctionType, r, "banner"), t.logImpressionToBQ(o, a, i, m, t.auctionType, r, "banner", h); try { t.adUnitDetails[a].lastAdvertiser = i } catch (e) { } if (r && f) { var I = t.getPartnerConfigFromPartnerShortName(r.bidderCode); if (I && !I.allowRefresh && t.refreshDisallowed.push(a), "justpremium" === r.bidderCode) try { document.getElementById("desktop-anchor").setAttribute("style", "display:none;") } catch (e) { } if ("gumgum" === r.bidderCode) try { document.getElementById("desktop-anchor").setAttribute("style", "display:none;") } catch (e) { } "sublime" === r.bidderCode && t.skinAdUnitCode && (t.refreshDisallowed.push(a), t.stickyCannotDisplayOverride = !0), t.accountCustomRenderHandler(r) } if (r && t.shouldSuppressRefreshForBid(r) && t.refreshDisallowed.push(a), t.config.account.excludeSponsorshipFromRefresh && e.lineItemId) try { var A = e.lineItemId.toString(); if (A && t.config.account.sponsorshipLineItemIds.indexOf(A) > -1) { var v = t.getUnitDefFromId(e.slot.getSlotElementId()); t.refreshDisallowed.push(v.elementId), "flexp" === v.unitType && Object.keys(t.flexUnitConfigs).forEach((function (e) { var i = t.flexUnitConfigs[e].contenders; if (i.indexOf(v.elementId) > -1) { i.forEach((function (e) { var i = t.getUnitDefFromId(e); t.refreshDisallowed.push(i.elementId) })); var n = t.getUnitDefFromId(e); t.refreshDisallowed.push(n.elementId) } })) } } catch (i) { t.debugLog("Issue preventing sponsorship refresh for", e, i) } } catch (e) { t.debugLog(e) } }, accountCustomRenderHandler: function (e) { }, bidResponseHandler: function (e) { const t = window.lngtd; var i = e.bidderCode, n = e.adUnitCode, o = e.auctionId, a = e.originalCpm, r = i + "_bid"; t.debugLog("bid response", o, n, r, a); try { t.prebidAuctions[o][n][r] = parseFloat(parseFloat(a).toFixed(2)) } catch (e) { } try { var d = t.getUnitDefFromCode(n); "outstream" !== d.unitType && "moment-video" !== d.unitType || e.vastUrl && !t.alwaysCacheVideoBids || t.cacheBid(e) } catch (e) { } }, alwaysCacheVideoBids: !1, wrapURI: function (e, t) { return `<VAST version="3.0">\n            <Ad>\n              <Wrapper>\n                <AdSystem>prebid.org wrapper</AdSystem>\n                <VASTAdTagURI><![CDATA[${e}]]></VASTAdTagURI>\n                <Impression>${t ? `<![CDATA[${t}]]>` : ""}</Impression>\n                <Creatives></Creatives>\n              </Wrapper>\n            </Ad>\n            </VAST>` }, cacheBid: function (e) { const t = window.lngtd; var i = { puts: [{ type: "xml", value: e.vastXml ? e.vastXml : t.wrapURI(e.vastUrl, e.vastImpUrl), ttlseconds: e.ttl }] }, n = JSON.stringify(i); t.debugLog("Caching video bid", e); var o = new XMLHttpRequest; o.open("POST", t.videoCacheUrl, !0), o.contentType = "text/plain", o.withCredentials = !0, o.send(n), o.onload = function () { if (200 === o.status) try { var i = JSON.parse(o.response).responses[0].uuid; e.adserverTargeting.hb_uuid = i, e.adserverTargeting.hb_cache_id = i, e.vastUrl = t.buildCachedBidUrl(i), e.videoCacheKey = i, t.debugLog("Bid has been cached", i, e) } catch (e) { } } }, cacheBidPromise: async function (e) { const t = window.lngtd; var i = { puts: [{ type: "xml", value: e.vastXml ? e.vastXml : t.wrapURI(e.vastUrl, e.vastImpUrl), ttlseconds: e.ttl }] }, n = JSON.stringify(i); return new Promise((function (i, o) { t.debugLog("Caching video bid", e); var a = new XMLHttpRequest; a.open("POST", t.videoCacheUrl, !0), a.contentType = "text/plain", a.withCredentials = !0, a.send(n), a.onload = function () { if (200 === a.status) { try { var n = JSON.parse(a.response).responses[0].uuid; e.adserverTargeting.hb_uuid = n, e.adserverTargeting.hb_cache_id = n, e.vastUrl = t.buildCachedBidUrl(n), e.videoCacheKey = n, t.debugLog("Bid has been cached", n, e) } catch (e) { } i() } else o("error") }, a.onerror = function () { o("error") } })) }, getOrBuildVastUrl: function (e) { const t = window.lngtd; return e.vastUrl ? e.vastUrl : e.vastXml && e.vastXml.startsWith("http") ? e.vastXml : e.videoCacheKey ? t.buildCachedBidUrl(e.videoCacheKey) : null }, buildCachedBidUrl: function (e) { return window.lngtd.videoCacheUrl + "?uuid=" + e }, humanCheckHandler: function (e) { let t = e.type; window.lngtd.debugLog("Human check handler called by ", e), window.lngtd.isHuman = !0, document.removeEventListener(t, window.lngtd.humanCheckHandler, !1) }, startHumanCheck: function () { ["keyup", "mousemove", "swipe", "touchstart", "touchmove", "touchend", "scroll", "gesture"].forEach((function (e) { document.addEventListener(e, window.lngtd.humanCheckHandler, !1) })) }, getBaseLiveEventParams: function () { return { account: this.config.account.name, section: this.config.account.section, page: this.pageType, device_type: !0 === this.adsIsMobile ? "mobile" : "desktop", browser: this.deviceBrowserOS.browser, session_depth: this.sessionDepth, country: this.country } }, shouldSendLog: function () { return 1 === Math.floor(2 * Math.random()) }, logWinningBid: function (e, t, i, n, o, a, r) { const d = this; n = parseFloat(parseFloat(n).toFixed(2)), d.debugLog(e, i, n, o, r), r = void 0 !== r ? r : "banner"; var s = d.getBaseLiveEventParams(), l = d.refreshCount; "video" === r && (l = d.videoImpressionCount); var c = 1; a && (c = 0); var u = { event: "auction", winning_bidder: i, winning_bid: n, unit: e, auction_type: o, media: r, refresh_count: l, adx_no_competition: c }, g = Object.assign({}, s, u), p = null, m = null; a && (p = a.auctionId, m = a.adUnitCode); if (["amazon_bid", "appnexus_bid", "beachfront_bid", "conversant_bid", "criteo_bid", "districtmdmx_bid", "gumgum_bid", "improvedigital_bid", "ix_bid", "justpremium_bid", "lkqd_bid", "onemobile_bid", "oneVideo_bid", "openx_bid", "pubmatic_bid", "rubicon_bid", "smartadserver_bid", "sovrn_bid", "spotx_bid", "triplelift_bid", "undertone_bid", "yieldmo_bid"].forEach((function (e) { try { var t = d.prebidAuctions[p][m][e]; void 0 === t && (t = 0), g[e] = t } catch (t) { g[e] = 0 } })), d.shouldSendLog()) { var f = new XMLHttpRequest, h = "https://collect.lngtd.com/auction?rand=" + (new Date).getTime(); f.open("POST", h, !0), Object.keys(g).forEach((function (e) { f.setRequestHeader(e.toLowerCase(), g[e]) })), f.send() } }, logEventToBQ: function (e, t, i) { const n = window.lngtd; try { var o = { event: e, timestamp: (new Date).valueOf() }; o.details = { account: n.config.account.name, section: n.config.account.section, page: n.pageType, referrer_url: document.location.href, device_type: !0 === n.adsIsMobile ? "mobile" : "desktop", browser: n.deviceBrowserOS.browser, session_depth: n.sessionDepth, country: n.country, custom: JSON.stringify(t), extra: JSON.stringify(i) }; var a = new XMLHttpRequest; a.open("POST", "https://it.lngtd.com/", !0), a.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), a.send(JSON.stringify(o)) } catch (e) { } }, impressionIds: {}, logImpressionToBQ: function (e, t, i, o, a, r, d, s) { var l = n.uuidv4(); this.impressionIds[t] = l, o = parseFloat(parseFloat(o).toFixed(2)), d = void 0 !== d ? d : "banner", s = void 0 !== s ? s : null; var c = this.refreshCount; "video" === d && (c = this.videoImpressionCount); var u = {}; if (r) try { u.addomain = r.adserverTargeting.hb_adomain } catch (e) { } var g = { winning_bidder: i, winning_bid: o, unit: e, auction_type: a, media: d, refresh_count: c, encrypted_bid: s, uid: l }; this.logEventToBQ("impression", g, u) }, logViewableImpressionToBQ: function (e) { if (this.impressionIds.hasOwnProperty(e)) { var t = { uid: this.impressionIds[e] }; this.logEventToBQ("viewable_impression", t, null), delete this.impressionIds[e] } }, logPageView: function () { const e = window.lngtd; if (!e.pvLogged) if (e.isHuman) { clearInterval(e.pvAttemptInterval); var t = e.getBaseLiveEventParams(), i = Object.assign({}, t, { event: "pv" }); e.pvLogged = !0; var n = new XMLHttpRequest, o = "https://collect.lngtd.com/pv?rand=" + (new Date).getTime(); n.open("POST", o, !0), Object.keys(i).forEach((function (e) { n.setRequestHeader(e, i[e]) })), n.send() } else void 0 === e.pvAttemptInterval && (e.pvAttemptInterval = setInterval(e.logPageView, 250)) }, logVideoError: function (e, t) { var i = window.lngtd.getBaseLiveEventParams(), n = { event: "viderr", winning_bidder: t, error_code: e }, o = Object.assign({}, i, n), a = new XMLHttpRequest, r = "https://collect.lngtd.com/viderr?rand=" + (new Date).getTime(); a.open("POST", r, !0), Object.keys(o).forEach((function (e) { a.setRequestHeader(e, o[e]) })), a.send() }, logVideoWin: function (e, t, i, n) { const o = window.lngtd; var a = o.getBaseLiveEventParams(), r = ""; if (n) try { r = o.videoAuctionMap[n.auctionId] } catch (e) { } var d = 0; void 0 !== window.eh2 && (d = 1); var s = { event: "vidwin", winning_bidder: e, winning_bid: t, auction_number: r, ad_length: [1, 5, 10, 15, 20, 25, 30, 45, 60, 90, 120].reduce((e, t) => Math.abs(t - i) < Math.abs(e - i) ? t : e), eh2: d }, l = Object.assign({}, a, s), c = new XMLHttpRequest, u = "https://collect.lngtd.com/vidwin?rand=" + (new Date).getTime(); c.open("POST", u, !0), Object.keys(l).forEach((function (e) { c.setRequestHeader(e, l[e]) })), c.send(); try { window.__PUBX__.postWinningBid(n) } catch (e) { } }, debugLog: function () { const e = this; try { var t = Array.prototype.slice.call(arguments); e.debug && window.console && t && console.info(t) } catch (e) { } }, loadSovrnBeacon: function () { const e = this; if ("" !== e.config.account.sovrnOnetagPath) { var t = document.createElement("script"); t.async = !0, t.defer = !0, t.type = "text/javascript", t.src = e.config.account.sovrnOnetagPath; var i = document.getElementsByTagName("script")[0]; i.parentNode.insertBefore(t, i) } }, loadQuantcast: function () { window._qevents = window._qevents || []; var e = document.createElement("script"); e.src = ("https:" === document.location.protocol ? "https://secure" : "http://edge") + ".quantserve.com/quant.js", e.async = !0, e.type = "text/javascript"; var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e, t), window._qevents.push({ qacct: "p-Jyme3dg-jsWrz", uid: "" }) }, autoBuildVideoPlayer: !1, videoPlayerWidth: 400, videoPlayerHeight: 300, videoPlayerAdWidth: 400, videoPlayerAdHeight: 300, videoContainer: null, videoCacheUrl: "https://prebid.adnxs.com/pbc/v1/cache", videoPlacementContainerId: null, videoPlayerPlaying: !1, videoPlayers: {}, videoPlayerConfigs: { FATAL_ERRS: [100, 101, 102, 300, 301, 302, 303, 400, 401, 402, 403, 405, 406, 407, 408, 409, 410, 500, 501, 502, 503, 900, 901, 1005, 1009, 1010], EVENTS: { HTML: ["ended", "timeupdate"], IMA: ["adProgress", "allAdsCompleted", "click", "start", "impression", "pause", "complete", "viewable_impression", "loaded"], SKIP: ["timeupdate", "adProgress"] }, VIDEO_EVENTS: { BLURRED_AD: "blurred_ad", ERROR_OPP: "error_opp", PLAYER_LOAD: "player_load", FCAP: "fcap", START: "ad-start", COMPLETE: "ad-complete", PAUSE: "ad-pause", IMPRESSION: "ad-impression", CLICK: "ad-click", REQUEST: "ad-request", ERROR: "error", VIEWABLE: "ad-viewable", INTERRUPT: "ad-interrupt", TIMEOUT: "timeout", PLAYER_RESET: "player_reset", CONTENT_START: "content-start", CONTENT_COMPLETE: "content-complete" }, pauseOnBlur: !1 }, contentVideoPlaying: !1, videoPrebidAuctionRunning: !1, videoAmazonAuctionRunning: !1, videoAuctionRunning: !1, videoAuctionComplete: !1, videoAdErrorCount: 0, videoAdEmptyCount: 0, currentVideoAuctionWinner: null, videoDisplayFallbackId: null, videoDisplayFallbackCount: 10, videoImpressionCount: 0, videoAmazonTargeting: null, videoAmazonUrl: null, videoAmazonSlotId: null, currentVideoAdAttemptPartner: null, videoStickyOnScroll: !1, videoAdBreakCount: 0, videoAdsPlayedInBreak: 0, videoAdsPerBreak: 3, videoAutoPlayAd: !1, videoShowMidroll: !1, videoBidderErrors: {}, videoAuctionCount: 0, videoAuctionLimit: 1, videoAuctionConfig: { 0: { min: 0, max: 16, mult: 4 }, 1: { min: 15, max: 31, mult: 2 }, 2: { min: 30, max: 61, mult: 1 } }, videoControlsOnHover: !1, videoAdBreakInProgress: !1, currentAdBreakType: null, videoAdsPrefetchStarted: !1, videoAdsPrefetchSeconds: 5, cumulativeAdBreakLength: 0, videoAuctionMap: {}, currentAdXVideoBid: null, videoPreempt: !1, videoInPreempt: !1, videoAdBreakTimeout: null, videoAdLoadedTimeout: null, videoAdBreakKillTimeout: 90, videoSkipGAM: !1, videoSkipGAMCompletely: !1, videoDependenciesLoaded: !1, preloadVideoDependencies: function (e) { var t = this; if (t.videoDependenciesLoaded) e(); else { var i = document.createElement("link"); i.rel = "stylesheet", i.href = "//lngtd.com/v/video.min.css", document.head.appendChild(i); var o = document.createElement("script"); o.type = "text/javascript", o.src = "//p.lngtdv.com/videojs/video.min.js", o.async = !1, o.onload = function () { var i = document.createElement("script"); i.type = "text/javascript", n.findGetParameter("osdebug") ? i.src = "//imasdk.googleapis.com/js/sdkloader/ima3_debug.js" : i.src = "//imasdk.googleapis.com/js/sdkloader/ima3.js", i.onload = e, i.async = !1, document.head.appendChild(i), t.videoDependenciesLoaded = !0 }, document.head.appendChild(o) } }, videoPlayerPosition: function () { return "position:relative;margin:0 auto;z-index:9;" }, setVideoStickyOnScroll: function () { var e = document.getElementById(this.videoPlacementContainerId), t = e.getBoundingClientRect().top - document.body.getBoundingClientRect().top; window.addEventListener("throttledScroll", (function () { document.documentElement.scrollTop > t + 150 ? (e.style.position = "fixed", e.style.bottom = "0", e.style.right = "0") : (e.style.position = "relative", e.style.bottom = "auto", e.style.right = "auto") })) }, cachedAmazonBid: null, getWinningOutstreamVideoUrl: function (e) { var t = this.getVideoAdUnit("outstream"); if (e && !1, this.debugLog("Winning video bid", e), this.currentVideoAdAttemptPartner = null, this.videoAmazonTargeting && this.videoAmazonTargeting.amznbid && this.videoAmazonTargeting.amznbid.length > 2) return this.currentVideoAdAttemptPartner = "amazon", this.cachedAmazonBid = this.videoAmazonTargeting, this.videoAmazonTargeting = null, this.currentVideoAuctionWinner = "amazon", this.videoAmazonUrl; if (this.videoSkipGAMCompletely) { var i = this.getWinningVideoBid(t); return i ? (this.currentVideoAuctionWinner = "prebid", this.getOrBuildVastUrl(i)) : null } return this.currentVideoAdAttemptPartner = "adx", this.getAdxVideoUrl(t) }, getAdxVideoUrl: function (e) { var t = this.getHighestVideoBid(e, !0), i = 1; t && (i = t.cpm), i = Math.ceil(i); var n = "video_floor=" + (i = Math.min(i, 20)) + "&max_length=31"; return n = escape(n), "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=" + e.gamPath + "&impl=s&gdfp_req=1&hl=en&env=vp&output=vast&unviewed_position_start=1&hl=en&url=" + escape(window.location.href) + "&description_url=" + escape(window.location.href) + "&cust_params=" + n }, getGAMVideoUrl: async function (e, t) { var i = null; try { i = this.getHighestVideoBid(e) } catch (e) { } i ? (await this.cacheBidPromise(i), this.logWinningBid(e.gamPath, e.elementId, i.bidderCode, i.cpm, "video", i, "video")) : this.logWinningBid(e.gamPath, e.elementId, "unfilled", 0, "video", null, "video"), this.debugLog("Winning video bid", i); var n = {}, o = window.location.hostname, a = window.location.href; this.videoAmazonTargeting && (n = Object.assign({}, n, this.videoAmazonTargeting)); var r = "preroll"; "postroll" === this.currentAdBreakType && (r = "postroll"); var d = { adUnit: e, params: { iu: e.gamPath, sz: "640x480", cust_params: n, hl: "en", output: "vast", site_url: o, vad_type: "linear", vpos: r, description_url: a }, bid: i }, s = ""; try { this.debugLog(pbjs, pbjs.adServers), s = pbjs.adServers.dfp.buildVideoUrl(d) } catch (e) { this.debugLog("Failed to build video url: ", e), s = t.defaultGAMUrl } return i && pbjs.markWinningBidAsUsed({ adId: i.adId }), s }, getHighestVideoBid: function (e, t) { t = void 0 !== t && t; var i = null, n = pbjs.getHighestCpmBids(e.code); if (n.length > 0) { if (!t) { for (var o in this.videoBidderErrors) if (this.videoBidderErrors.hasOwnProperty(o) && this.videoBidderErrors[o] >= 5) { this.debugLog("Marking all video vids from bidder as erroneous: ", o); var a = pbjs.getBidResponsesForAdUnitCode(e.code); a = a.bids; for (var r = 0; r < a.length; r++)try { var d = a[r]; d.bidderCode === o && (this.debugLog("Marking erroneous bid as used", d), pbjs.markWinningBidAsUsed({ adId: d.adId })) } catch (e) { } } n = pbjs.getHighestCpmBids(e.code) } i = n[0] } return i }, getWinningVideoBid: function (e) { var t = this.getHighestVideoBid(e); return this.prebidWinningBids[e.elementId] = t || null, t }, runVideoAuctionAndReturnGAMUrl: async function (e) { var t = this, i = t.getUnitDefFromAllIds(e.adUnitId); return new Promise((function (o, a) { n.findGetParameter("testtag") ? o("https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=") : t.runVideoAuctionPromise(e).then((function () { var n = t.getGAMVideoUrl(i, e); o(n) })) })) }, runVideoAuction: function (e, t) { this.videoAutoPlayAd = !1, void 0 !== e && (this.videoAutoPlayAd = e), this.videoAuctionComplete = !1, this.videoAuctionRunning || (this.videoAuctionRunning = !0, 0 === this.videoAuctionCount && (this.currentAdXVideoBid = null), this.videoPrebidAuctionRunning || (this.videoPrebidAuctionRunning = !0, this.debugLog("Running prebid video auction for: ", this.videoAuctionCount, t), this.runPrebidAuction([t], "video", this.videoPrebidAuctionDone)), !this.videoAmazonAuctionRunning && this.videoAmazonSlotId && (this.videoAuctionLimit > 1 && this.videoAuctionCount === this.videoAuctionLimit - 1 || this.runAmazonInParallel) && this.runAmazonVideoAuction(t)) }, runVideoAuctionPromise: async function (e) { var t = this, i = t.getUnitDefFromAllIds(e.adUnitId), n = e.amazonSlotId, o = e.amazonFloor; return t.runAmazonInParallel = e.runAmazonInParallel, t.defineUnits([i]), new Promise((function (e, a) { t.videoAuctionComplete = !1, t.videoAuctionState = "running", t.videoAuctionRunning || (t.videoAuctionRunning = !0, t.videoPrebidAuctionRunning || (t.videoPrebidAuctionRunning = !0, t.debugLog("Running prebid video auction for: ", i), t.runPrebidAuction([i], "video", t.videoPrebidAuctionDone)), !t.videoAmazonAuctionRunning && n && t.runAmazonInParallel && (t.videoAmazonAuctionRunning = !0, t.debugLog("Running amazon video auction for: ", i), apstag.fetchBids({ slots: [{ slotID: n, mediaType: "video", sizes: [[t.videoPlayerAdWidth, t.videoPlayerAdHeight]], floor: { value: parseInt(100 * o), currency: "USD" } }], timeout: t.getTimeout() }, (function (e) { t.videoAmazonAuctionDone(e, i) })))); var r = 0, d = setInterval((function () { (r += 50) >= t.getTimeout() + 50 && (clearInterval(d), e("timeout")), t.videoAuctionComplete && (clearInterval(d), t.debugLog("Video auction complete", r, t.videoAuctionComplete), e("complete")) }), 50) })) }, runAmazonInParallel: !1, runAmazonVideoAuction: function (e) { var t = this, i = t.getHighestVideoBid(e, !0), n = parseFloat(e.baseFloor); i && (n = i.cpm), t.videoAmazonAuctionRunning = !0, t.videoAmazonTargeting = null, t.debugLog("Running amazon video auction for: ", e), apstag.fetchBids({ slots: [{ slotID: t.videoAmazonSlotId, mediaType: "video", sizes: [[t.videoPlayerAdWidth, t.videoPlayerAdHeight]], floor: { value: parseInt(100 * n), currency: "USD" } }], timeout: t.getTimeout() }, (function (i) { t.videoAmazonAuctionDone(i, e) })) }, videoAmazonAuctionDone: function (e, t) { var i = window.lngtd; i.debugLog("Video amazon bidding complete"); var n = e; try { if (n.length) { var o = n[0], a = o; o.targeting && (a = o.targeting), i.videoAmazonTargeting = {}, i.videoAmazonUrl = null, i.videoAmazonTargeting.amznbid = a.amznbid, i.videoAmazonTargeting.amzniid = a.amzniid, i.videoAmazonTargeting.amznp = a.amznp; var r = new Date; i.videoAmazonUrl = "https://aax.amazon-adsystem.com/e/dtb/vast?b=" + a.amzniid + "&rnd=" + r.getTime() + "&pp=" + a.amznbid } } catch (e) { } i.videoAmazonAuctionRunning = !1, i.videoAmazonAuctionRunning || i.videoPrebidAuctionRunning || i.videoAuctionDone(t) }, videoPrebidAuctionDone: function (e, t, i) { var n = window.lngtd; n.debugLog("Video prebid bidding complete"), n.debugLog(i, n.auctionUnitDefs); var o = n.auctionUnitDefs[i][0]; n.videoPrebidAuctionRunning = !1, n.videoAuctionMap[i] = n.videoAuctionCount + 1, n.videoAmazonAuctionRunning || n.videoPrebidAuctionRunning || (1 === n.videoAuctionLimit && n.videoAmazonSlotId && !n.runAmazonInParallel ? n.runAmazonVideoAuction(o) : n.videoAuctionDone(o)) }, videoAuctionDone: function (e) { var t = window.lngtd; if (!t.videoAuctionComplete) { t.videoAuctionCount += 1, t.videoAuctionRunning = !1, t.videoAuctionComplete = !0; var i = n.findGetParameter("testbidder"); t.videoAuctionCount < t.videoAuctionLimit && !i ? setTimeout((function () { t.runVideoAuction(t.videoAutoPlayAd, e) }), 50) : (t.videoAuctionCount = 0, t.videoAutoPlayAd && !t.videoAdPlaying && t.findWinningVideoBidAndPlay(e)) } }, findWinningVideoBidAndPlay: function (e) { var t, i = window.lngtd, n = i.getWinningVideoBid(e), o = i.videoPlayers[e.elementId]; i.debugLog("Winning outstream bid:", n); t = n && [].indexOf(n.bidderCode) > -1 ? null : i.getWinningOutstreamVideoUrl(n); let a = Date.now() - i.lastUserInteraction; !i.refreshRequiresUserInteraction || a < 6e4 ? t ? (i.outstreamAuctionInterval && clearInterval(i.outstreamAuctionInterval), i.playVideoAd(t, o)) : i.outstreamAdErrorHandler(1009) : clearInterval(i.outstreamAuctionInterval) }, videoAdPlaying: !1, playVideoAd: function (e, t) { this.videoAdPlaying = !0, this.debugLog("Playing video ad with url", e), t.ima.changeAdTag(e); try { t.ima.requestAds() } catch (e) { this.debugLog("Error playing video ad:", e) } this.playVideoPlayer(t) }, playOutstreamOwnRendererAd: function (e) { this.debugLog(e), this.debugLog("Error playing video ad: No vastUrl or vastXml") }, getVideoAdUnit: function (e) { var t = null, i = this.getEligibleUnitsForAuction("video"); i.length > 1 ? (e && (i = i.filter(t => t.unitType === e)), t = i[0]) : i.length > 0 && (t = i[0]); var n = this.videoPlayerAdWidth, o = this.videoPlayerAdHeight; try { t.mediaTypes.video.playerSize = [[n, o]] } catch (e) { } return t }, videoDisplayFallback: function () { }, logErroneousBidBidder: function (e) { pbjs.markWinningBidAsUsed({ adId: e.adId }); var t = e.bidderCode; t in this.videoBidderErrors ? this.videoBidderErrors[t] += 1 : this.videoBidderErrors[t] = 1 }, muteVideoAd: function (e) { (this.videoControlsOnHover || e.muted(!0), e.ima && e.muted()) && e.ima.getAdsManager().setVolume(0) }, safeResumeVideo: function (e) { e.pause(), e.play().then(() => { }).catch(e => { if (!e || !e.toString().toLowerCase().includes("the play() request was interrupted by a call to pause()")) throw e }) }, playVideoPlayer: function (e) { if (this.contentVideoPlaying) this.safeResumeVideo(e); else try { e.ima.resumeAd() } catch (t) { this.safeResumeVideo(e) } }, pauseVideoPlayer: function (e) { this.contentVideoPlaying ? e.pause() : e.ima.pauseAd() }, videoAdCompleteFired: !1, buildOutstreamPlayer: function () { var e = this, t = e.getVideoAdUnit("outstream"), i = document.createElement("style"); i.type = "text/css"; var o = "#" + t.elementId + " {display:block;" + e.videoPlayerPosition() + "width:" + e.videoPlayerWidth + "px;height:" + e.videoPlayerHeight + "px;background-color:black;border-radius:10px;opacity:0;transition:opacity 0.3s;overflow:hidden;}"; o += "#" + t.elementId + ".active {opacity:1;transition:opacity 0.5s;}", i.innerHTML = o, document.head.appendChild(i); var a = document.createElement("video"); (a.id = t.elementId, a.width = e.videoPlayerWidth, a.height = e.videoPlayerHeight, a.playsinline = "true", a.classList.add("video-js"), e.videoPlacementContainerId) ? document.getElementById(e.videoPlacementContainerId).appendChild(a) : document.body.appendChild(a); var r = document.createElement("source"); r.src = "https://video.lngtdv.com/adbg.m4v", r.type = "video/mp4", a.appendChild(r), e.videoContainer = a, e.preloadVideoDependencies((function () { var i = { controls: !0, muted: !0, autoplay: !1, debug: !1, nativeControlsForTouch: !0, playsinline: !0, bigPlayButton: !1, loadingSpinner: !1, loop: !0 }; videojs.log.level("off"), n.findGetParameter("osdebug") && (i.debug = !0, videojs.log.level("all")), e.videoPlayers[t.elementId] = videojs(t.elementId, i, (function () { e.getVideoAdUnit("outstream") && e.initializeOutstreamVideoAds() })) })), e.outstreamVideoPlayerHidden = !0, e.logEventToBQ("player_load", null, null), e.videoStickyOnScroll && e.setVideoStickyOnScroll() }, requireOutstreamInView: !0, initializeOutstreamVideoAds: function () { var e = this, t = e.getVideoAdUnit("outstream"); if (!n.elementIsInView(e.videoPlacementContainerId) && e.requireOutstreamInView) return e.displayIntervals.hasOwnProperty(t.code) || (e.displayIntervals[t.code] = setInterval((function () { e.initializeOutstreamVideoAds() }), 500)), !1; clearInterval(e.displayIntervals[t.code]), e.videoAuctionRunning = !1, e.videoAmazonAuctionRunning = !1, e.videoPrebidAuctionRunning = !1, e.videoAdPlaying = !1; var i = e.videoPlayers[t.elementId], o = { id: t.elementId, adTagUrl: "", disableAdControls: !1, showControlsForJSAds: !0, vpaidMode: window.google.ima.ImaSdkSettings.VpaidMode.ENABLED, adsRenderingSettings: { enablePreloading: !1, loadVideoTimeout: 8e3 }, contribAdsSettings: { timeout: 2500 }, numRedirects: 10, vastLoadTimeout: 8e3 }; n.findGetParameter("osdebug") && (o.debug = !0), i.ima(o), e.playVideoPlayer(i), i.src({ type: "video/mp4", src: "https://video.lngtdv.com/adbg.m4v" }), e.setOutstreamAdEventsHandlers(), e.setOutstreamAuctionInterval(); var a = !1; pbjs && pbjs.adUnits && pbjs.adUnits.forEach((function (e) { e.code === t.code && (a = !0) })), a || e.defineUnits([t]), e.runVideoAuction(!0, t) }, outstreamVideoPlayerHidden: null, accountSpecificHideOutstream: function () { }, hideOutstreamPlayerTimeout: null, hideOutstreamPlayer: function () { var e = this, t = e.getVideoAdUnit("outstream"); t && !e.hideOutstreamPlayerTimeout && (e.hideOutstreamPlayerTimeout = setTimeout((function () { e.debugLog("Hiding outstream player"), document.getElementById(t.elementId).classList.remove("active"), e.setOutstreamAuctionInterval(), e.outstreamVideoPlayerHidden = !0, e.accountSpecificHideOutstream() }), 2500)) }, accountSpecificShowOutstream: function () { }, showOutstreamPlayer: function () { if (this.debugLog("Showing outstream player"), !this.outstreamPlayerPaused) { var e = this.getVideoAdUnit("outstream"); clearTimeout(this.hideOutstreamPlayerTimeout), this.hideOutstreamPlayerTimeout = null, document.getElementById(e.elementId).classList.add("active"), document.getElementById(e.elementId).style.display = "block", this.outstreamVideoPlayerHidden = !1, this.accountSpecificShowOutstream() } }, outstreamPlayerPaused: !1, pauseOutstreamPlayer: function () { this.outstreamAuctionInterval && !this.outstreamPlayerPaused && (this.outstreamPlayerPaused = !0, clearInterval(this.outstreamAuctionInterval), this.outstreamAuctionInterval = null, this.hideOutstreamPlayer()) }, restartOutstreamPlayer: function () { this.outstreamClosed || (this.outstreamPlayerPaused = !1, this.setOutstreamAuctionInterval()) }, preserveOutstreamContainer: !1, outstreamClosed: !1, destroyOutstreamPlayer: function () { var e = this.getVideoAdUnit("outstream"); try { try { videojs(e.elementId).dispose() } catch (e) { } this.preserveOutstreamContainer || document.getElementById(this.videoPlacementContainerId).remove(), delete this.videoPlayers[e.elementId], this.videoAdPlaying = !1, clearTimeout(this.hideOutstreamPlayerTimeout), clearInterval(this.outstreamAuctionInterval), clearTimeout(this.videoAdDurationTimeout), this.outstreamAuctionInterval = null; try { document.getElementById("video-player-close").style.display = "none" } catch (e) { } } catch (e) { } }, resetOutstreamPlayer: function () { this.outstreamClosed ? this.debugLog("Cannot reset player, it was previously closed.") : (this.debugLog("Manually resetting player"), this.destroyOutstreamPlayer(), this.buildOutstreamPlayer()) }, outstreamAuctionInterval: null, setOutstreamAuctionInterval: function (e) { var t = this; t.debugLog("Modifying outstream auction interval to :", e); var i = t.getVideoAdUnit("outstream"); e = void 0 !== e ? e : 1e4, clearInterval(t.outstreamAuctionInterval), t.outstreamAuctionInterval = setInterval((function () { t.runVideoAuction(!0, i) }), e) }, setOutstreamAdEventsHandlers: function () { var e = this, t = e.getVideoAdUnit("outstream"), i = e.videoPlayers[t.elementId]; i.on("adserror", (function (t) { var i = t.data.AdError.getErrorCode(); return e.outstreamAdErrorHandler(i) })), i.on("adsready", (function () { return e.outstreamAdReadyHandler() })) }, allowFallbackIfFill: !0, outstreamAdErrorHandler: function (e) { var t = this.getVideoAdUnit("outstream"), i = this.videoPlayers[t.elementId], n = this.videoPlayerConfigs.FATAL_ERRS.indexOf(e) > -1; if (this.debugLog("VAST adserror " + e + " occurred in outstream video player"), n) { if (this.videoAdPlaying = !1, clearTimeout(this.videoAdLoadedTimeout), this.hideOutstreamPlayer(), 1009 === e && ("adx" === this.currentVideoAdAttemptPartner || "amazon" === this.currentVideoAdAttemptPartner)) { var o = this.getWinningVideoBid(t); if (o) { var a = this.getOrBuildVastUrl(o); return this.debugLog("Falling back to winning prebid bid as ad tag", a), void this.playVideoAd(a, i) } } if (1009 === e) { if (this.videoAdEmptyCount += 1, this.debugLog("Ad empty count incrementing: ", this.videoAdEmptyCount), this.videoDisplayFallbackId && this.videoAdEmptyCount >= this.videoDisplayFallbackCount && (this.allowFallbackIfFill || !this.allowFallbackIfFill && 0 === this.videoImpressionCount)) return this.videoDisplayFallback(), void this.destroyOutstreamPlayer(); this.videoAdEmptyCount >= 100 ? clearInterval(this.outstreamAuctionInterval) : this.videoAdEmptyCount >= 50 ? this.setOutstreamAuctionInterval(12e4) : this.videoAdEmptyCount >= 25 ? this.setOutstreamAuctionInterval(6e4) : this.videoAdEmptyCount >= 15 ? this.setOutstreamAuctionInterval(4e4) : this.videoAdEmptyCount >= 5 ? this.setOutstreamAuctionInterval(2e4) : this.setOutstreamAuctionInterval(), this.unitFloorMultipliers[t.elementId] = 1, this.debugLog("Lowering video unit multiplier: ", this.unitFloorMultipliers[t.elementId]), this.logWinningBid(t.gamPath, t.elementId, "unfilled", 0, "video", null, "video"), this.logImpressionToBQ(t.gamPath, t.elementId, "unfilled", 0, "video", null, "video") } 1005 === e && (this.videoAdEmptyCount += 1), this.videoAdErrorCount += 1; var r = this.prebidWinningBids[t.elementId], d = ""; r && (d = r.bidderCode, 402 === e && this.videoAdErrorCount < 2 || this.logErroneousBidBidder(r)), 1009 !== e && 1005 !== e && this.logVideoError(e, d), this.videoAdErrorCount < 4 && r ? this.findWinningVideoBidAndPlay(t) : this.videoAdEmptyCount >= 2 || this.videoAdErrorCount > 3 ? this.videoAdErrorCount = 0 : this.runVideoAuction(!0, t) } }, videoAdDurationTimeout: null, onOutstreamImpression: function () { }, outstreamAdReadyHandler: function () { var e = this, t = e.getVideoAdUnit("outstream"), i = e.videoPlayers[t.elementId]; e.videoPlayerConfigs.EVENTS.IMA.forEach((function (n) { i.ima.addEventListener(n, (function (o) { e.videoPlayerConfigs.EVENTS.SKIP.indexOf(n) < 0 && e.debugLog("Ima event " + n + " occurred in Video JS Player."), "start" !== n && "loaded" !== n && "impression" !== n || e.muteVideoAd(i); var a = e.prebidWinningBids[t.elementId]; if ("loaded" === n && (e.debugLog("Video ad loaded event", o), e.videoAdsPrefetchStarted = !1, e.videoAdLoadedTimeout = setTimeout((function () { a && e.logErroneousBidBidder(a), e.debugLog("Video ad load timeout fired"), e.findWinningVideoBidAndPlay(t) }), 1e4)), "start" === n && (clearTimeout(e.videoAdLoadedTimeout), e.showOutstreamPlayer()), "impression" === n) { e.debugLog("Video ad impression event", o); var r = o.getAd().getDuration(); e.debugLog("Playing ad of length", r), e.contentVideoPlaying = !1, e.videoImpressionCount += 1, e.videoAdErrorCount = 0, e.videoAdEmptyCount = 0, e.videoAuctionCount = 0; var d = e.unitFloorMultipliers[t.elementId]; e.unitFloorMultipliers[t.elementId] = Math.min(1.2 * d, 10), a && "prebid" === e.currentVideoAuctionWinner && pbjs.markWinningBidAsUsed({ adId: a.adId }); var s = parseFloat(t.baseFloor), l = null, c = null; if ("prebid" === e.currentVideoAuctionWinner && a ? (s = a.originalCpm, l = a.bidderCode) : "amazon" === e.currentVideoAuctionWinner ? (l = "amazon", a && (s += .01), e.cachedAmazonBid && (c = e.cachedAmazonBid.amznbid)) : (l = "unknown", a && (s += .01)), e.startViewabilityCheck(t.elementId, "video"), e.logWinningBid(t.gamPath, t.elementId, l, s, "video", a, "video"), e.logImpressionToBQ(t.gamPath, t.elementId, l, s, "video", a, "video", c), e.logVideoWin(l, s, r, a), e.adsIsMobile) { var u = 1e3 * r + 500; e.videoAdDurationTimeout = setTimeout((function () { e.resetOutstreamPlayer() }), u) } try { e.onOutstreamImpression() } catch (e) { } } "adProgress" === n && (e.videoAdBreakInProgress = !0, e.contentVideoPlaying = !1, !e.videoAdsPrefetchStarted && o.getAdData().adBreakDuration - o.getAdData().currentTime < e.videoAdsPrefetchSeconds && (e.videoAdsPrefetchStarted = !0, e.runVideoAuction(!1, t)), !window.document.hasFocus() && e.videoPlayerConfigs.pauseOnBlur && e.pauseVideoPlayer()), n !== window.google.ima.AdEvent.Type.COMPLETE && n !== window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED || e.videoAdCompleteFired || (e.videoAdPlaying = !1, e.videoAdCompleteFired = !0, clearTimeout(e.videoAdDurationTimeout), setTimeout((function () { e.videoAdCompleteFired = !1, e.hideOutstreamPlayer(), e.findWinningVideoBidAndPlay(t) }), 500)) })) })) }, interstitialConfigs: null, currentInterstitialBreakConfig: {}, buildInterstitial: function (e, t) { var i = this, n = void 0 !== e.type ? e.type : "interstitial", o = "number" == typeof e.maxAdBreak ? parseInt(e.maxAdBreak) : 35e3, a = "number" == typeof e.minViewTime ? parseInt(e.minViewTime / 1e3) : 5, r = void 0 !== e.rewardText ? e.rewardText : "Reward in", d = void 0 !== e.rewardCloseWarningText ? e.rewardCloseWarningText : "You will not get your reward."; i.pauseOutstreamPlayer(), i.pauseRefresh(); var s = a, l = function () { "reward" === n && s > 0 ? confirm("Close ad? " + d) && i.completeInterstitial(t, e.adDismissed) : i.completeInterstitial(t, e.adBreakDone) }; "function" == typeof e.beforeAd && e.beforeAd(); var c = "640px"; i.adsIsMobile && (c = "100%"); var u = document.createElement("style"); u.type = "text/css", u.innerHTML = ".interstitial-modal {position: fixed; z-index: 9999999; left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.8);} .interstitial-modal-header {position: absolute;top: 0px; height: 30px; width: 100%; border-bottom: 1px solid #fff;color:#fff; padding:4px 20px;font-weight: bold; font-family: sans-serif;font-size:14px;} .interstitial-modal-content iframe {margin: auto;}", document.head.appendChild(u); var g = document.createElement("div"); g.id = "viewInterstitialModal", g.classList.add("interstitial-modal"), document.body.appendChild(g); var p = document.createElement("div"), m = "50%", f = "-300px"; window.innerHeight < 700 && (m = "60px", f = "0"), p.style.cssText = "background-color:transparent;margin:" + f + " auto 0 auto;padding:20px 0;border:1px solid #888;top:" + m + " ;position:relative;border:none;text-align:center;width:" + c + ";height:600px; display: block"; var h = document.createElement("div"); h.id = "lngtd-interstitial", h.classList.add("interstitial-modal-content"), h.style.cssText = "margin: 0 auto;display: block", p.appendChild(h); var b = document.createElement("a"); b.href = "#", b.id = "modal-content-close", b.style.cssText = "display:none;color:#fff;padding:20px;font-weight:bold;font-family:sans-serif;font-size:14px;margin:0 auto;text-decoration:underline;", b.onclick = l, b.innerHTML = "CLOSE", p.appendChild(b); var I = document.createElement("div"); I.classList.add("interstitial-modal-header"); var A = document.createElement("div"); A.classList.add("modal-text"), A.innerHTML = "Advertisement", A.style.cssText = "float:left;", I.appendChild(A); var v = document.createElement("span"); v.id = "lngtd-interstitial-close", v.style.cssText = "float:right;", v.style.lineHeight = "22px", v.classList.add("modal-close"), v.classList.add("interstitial-modal-close"); var C = document.createElement("span"); C.id = "modal-close-text", C.style.float = "left", C.style.marginTop = "-1px", v.appendChild(C); var y = document.createElement("a"); y.href = "#", y.id = "modal-close-link", "reward" !== n && (y.style.display = "none"), y.style.color = "#ffffff", y.style.marginLeft = "20px", y.style.fontSize = "22px", y.onclick = l, y.innerHTML = "&#x2715;", v.appendChild(y), I.appendChild(v), g.appendChild(I), g.appendChild(p), setTimeout((function () { i.completeInterstitial(t, e.adBreakDone) }), o); var w = "Close ad in "; if ("reward" === n && (w = r + " "), C.innerHTML = w + s + " seconds", s < 1) C.style.display = "none", y.style.display = "inline-block", y.style.float = "left", b.style.display = "block"; else var _ = setInterval((function () { (s -= 1) <= 0 ? (C.style.display = "none", y.style.float = "left", b.style.display = "block", clearInterval(_)) : C.innerHTML = w + s + " seconds" }), 1e3) }, interstitialShowing: !1, triggerInterstitial: function (e, t) { var i = this; if (t = void 0 !== t ? t : "default", i.interstitialShowing = !0, void 0 === i.interstitialsInitialized[t] || !pbjs.libLoaded) return i.debugLog("Interstitial not yet initialized. Skipping ad break completely."), void i.completeInterstitial(t, e.adBreakDone); if (!i.interstitialAuctionRunning && pbjs.libLoaded) { if (!i.getWinningInterstitialUnit(t) && (void 0 === e.noFill || "function" != typeof e.noFill)) return i.debugLog("No winning interstitial unit. Skipping ad break completely."), void i.completeInterstitial(t, e.adBreakDone) } else { var n = i.getInterstitialUnitsForEnv(t), o = !1; if (pbjs.adUnits.forEach((function (e) { n.indexOf(e.elementId) > -1 && (o = !0) })), !o) return i.debugLog("No winning interstitial unit. Skipping ad break completely."), void i.completeInterstitial(t, e.adBreakDone) } i.currentInterstitialBreakConfig = e; var a = "number" == typeof e.maxAdBreak ? parseInt(e.maxAdBreak) : 35e3; i.buildInterstitial(e, t), setTimeout((function () { i.completeInterstitial(t, e.adBreakDone) }), a); var r = null; i.debugLog("Checking for winning interstitial unit"); var d = i.getWinningInterstitialUnit(t); if (void 0 !== e.noFill && "function" == typeof e.noFill && (r = e.noFill()), d) i.debugLog("Winning interstitial unit:", d.code), "moment-display" === d.unitType && i.showInterstitialDisplay(d, t), "moment-video" === d.unitType && i.showInterstitialVideo(d, t); else if (!d && r) { document.getElementById("lngtd-interstitial").innerHTML = r } else i.debugLog("No winning interstitial unit. Ending ad break"), i.completeInterstitial(t, e.adBreakDone) }, closeInterstitial: function (e) { var t = window.lngtd; try { document.getElementById("viewInterstitialModal").remove() } catch (e) { } i.getInterstitialUnitsForEnv(e).forEach((function (e) { var i = t.getUnitDefFromAllIds(e); if ("moment-video" === i.unitType) { try { document.getElementById(i.elementId).remove() } catch (e) { } try { videojs(i.elementId).dispose(), delete t.videoPlayers[i.elementId] } catch (e) { } } })) }, completeInterstitial: function (e, t) { var i = window.lngtd; i.interstitialShowing && (i.interstitialShowing = !1, i.restartOutstreamPlayer(), i.restartRefresh(), i.closeInterstitial(e), "function" == typeof t && t()), delete i.interstitialsInitialized[e] }, getInterstitialUnitsForEnv: function (e) { var t = this.interstitialConfigs[e]; return this.adsIsMobile ? t.units.mobile : this.isTablet() ? t.units.tablet : t.units.desktop }, getWinningInterstitialUnit: function (e) { var t = this, i = 0, o = null, a = t.getInterstitialUnitsForEnv(e), r = t.interstitialConfigs[e]; return r.testUnit ? t.getUnitDefFromAllIds(r.testUnit) : (a.forEach((function (e) { var a = t.getUnitDefFromAllIds(e); if (a && "moment-display" === a.unitType) { var r = pbjs.getHighestCpmBids(a.code); if (r.length > 0) { var d = r[0]; t.debugLog("Interstitial display unit with bids", a.code, d), d.cpm > i && (i = d.cpm, o = a) } } if (a && "moment-video" === a.unitType) { var s = pbjs.getHighestCpmBids(a.code); if (s.length > 0) { var l = s[0]; t.debugLog("Interstitial video unit with bids", a.code, l), l.cpm > i && (i = l.cpm, o = a) } n.findGetParameter("rewardtest") && (i = 100, o = a) } })), o) }, interstitialsInitialized: {}, intAuctionInterval: null, initInterstitial: function (e) { var t = this; e = void 0 !== e ? e : "default", void 0 === t.interstitialsInitialized[e] && (t.interstitialsInitialized[e] = !0, pbjs.que.push((function () { t.runInterstitialAuctions(e) })), t.intAuctionInterval = setInterval((function () { pbjs.que.push((function () { t.runInterstitialAuctions(e) })) }), 6e4)) }, intAuctionCount: 0, maxIntAuction: 5, runInterstitialAuctions: function (e) { var t = this; t.debugLog("Running interstitial auction"), t.interstitialAuctionRunning = !0; var i = t.getInterstitialUnitsForEnv(e), n = "number" == typeof t.interstitialConfigs[e].maxAdLength ? parseInt(t.interstitialConfigs[e].maxAdLength) : 35e3; i.forEach((function (e) { var i = t.getUnitDefFromAllIds(e); if (i) { var o = !1; pbjs.adUnits.forEach((function (e) { e.code === i.code && (o = !0) })), o || t.defineUnits([i]), t.debugLog("Running interstitial auction for:", e, i), t.intAuctionCount++, t.intAuctionCount <= t.maxIntAuction ? (i && "moment-display" === i.unitType && t.runPrebidAuction([i], "interstitial", t.interstitialAuctionComplete), i && "moment-video" === i.unitType && (i.mediaTypes.video.maxduration = n, i.mediaTypes.video.playbackmethod = [3], t.runPrebidAuction([i], "video", t.videoInterstitialAuctionComplete))) : clearInterval(t.intAuctionInterval) } })) }, interstitialAuctionRunning: !1, interstitialAuctionComplete: function (e, t, i) { const n = window.lngtd; n.debugLog("Interstitial display auction complete"), n.interstitialAuctionRunning = !1; try { n.auctionUnitDefs[i].forEach((function (e) { n.adUnitDetails[e.elementId].isRefreshing = !1, n.adUnitDetails[e.elementId].lastAuction = Date.now() })) } catch (e) { } n.config.account.amazonPublisherId && apstag && googletag.cmd.push((function () { apstag.setDisplayBids() })) }, videoInterstitialAuctionComplete: function () { const e = window.lngtd; e.debugLog("Interstitial video auction complete"), e.interstitialAuctionRunning = !1; try { e.auctionUnitDefs[auctionId].forEach((function (t) { e.adUnitDetails[t.elementId].isRefreshing = !1, e.adUnitDetails[t.elementId].lastAuction = Date.now() })) } catch (e) { } e.config.account.amazonPublisherId && apstag && googletag.cmd.push((function () { apstag.setDisplayBids() })) }, showVideoInterstitial: function (e, t) { }, showInterstitialVideo: function (e, t) { var i = this, o = 640, a = 360; i.adsIsMobile && (o = 320, a = 180); var r = o, d = a, s = document.createElement("style"); s.type = "text/css"; var l = "#" + e.elementId + " {display:block;" + i.videoPlayerPosition() + "width:" + r + "px;height:" + d + "px;background-color:black;border-radius:10px;overflow:hidden;}"; s.innerHTML = l, document.head.appendChild(s); var c = document.createElement("video"); c.id = e.elementId, c.width = r, c.height = d, c.playsinline = "true", c.classList.add("video-js"), document.getElementById("lngtd-interstitial").appendChild(c); var u = document.createElement("source"); u.src = "https://video.lngtdv.com/adbg.m4v", u.type = "video/mp4", c.appendChild(u), i.preloadVideoDependencies((function () { var o = { controls: !0, muted: !1, autoplay: !1, debug: !1, nativeControlsForTouch: !0, playsinline: !0, bigPlayButton: !1, loadingSpinner: !1, loop: !0 }; videojs.log.level("off"), n.findGetParameter("osdebug") && (o.debug = !0, videojs.log.level("all")); var a, r = i.interstitialConfigs[t], d = videojs(e.elementId, o); if (n.findGetParameter("rewardtest")) a = "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_ad_samples&sz=640x480&cust_params=sample_ct%3Dlinear&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator="; else if (r.testTag) a = r.testTag; else { var s = pbjs.getHighestCpmBids(e.code)[0]; a = i.getOrBuildVastUrl(s) } i.debugLog("Showing interstitial video", a); var l = { id: e.elementId, adTagUrl: a, disableAdControls: !1, showControlsForJSAds: !0, vpaidMode: 1, adsRenderingSettings: { enablePreloading: !1, loadVideoTimeout: 8e3 }, contribAdsSettings: { timeout: 2500 }, numRedirects: 10, vastLoadTimeout: 8e3 }; n.findGetParameter("osdebug") && (l.debug = !0), d.ima(l), d.ready((function () { d.on("adserror", (function (e) { i.debugLog("Ad error occurred", e); try { var n = e.data.AdError.g.errorCode, o = i.videoPlayerConfigs.FATAL_ERRS.indexOf(n) > -1; i.debugLog("VAST adserror " + n + " occurred in interstitial video player"), o && (i.debugLog("Fatal error in interstitial video, ending"), i.completeInterstitial(t, i.currentInterstitialBreakConfig.adBreakDone)) } catch (e) { i.debugLog("Fatal error in interstitial video, ending"), i.completeInterstitial(t, i.currentInterstitialBreakConfig.adBreakDone) } })), d.on("adsready", (function () { d.play(), i.videoPlayerConfigs.EVENTS.IMA.forEach((function (n) { d.ima.addEventListener(n, (function (o) { if (i.videoPlayerConfigs.EVENTS.SKIP.indexOf(n) < 0 && i.debugLog("Ima event " + n + " occurred in Video JS Player."), "loaded" === n) { i.debugLog("Video ad loaded event", o), i.videoAdsPrefetchStarted = !1, i.currentVideoAuctionWinner = "prebid", s || (i.currentVideoAuctionWinner = "adx"); try { var a = o.getAd().getWrapperAdSystems(), r = o.getAd().getAdSystem(); r && "AdSense/AdX" === r ? i.currentVideoAuctionWinner = "adx" : r && "Amazon" === r ? i.currentVideoAuctionWinner = "amazon" : a && a.indexOf("AdSense/AdX") > -1 && (i.currentVideoAuctionWinner = "adx") } catch (e) { } } if ("impression" === n) { i.debugLog("Video ad impression event", o); var d = o.getAd().getDuration(); i.debugLog("Playing ad of length", d), i.contentVideoPlaying = !1, i.videoImpressionCount += 1, i.videoAdErrorCount = 0, i.videoAdEmptyCount = 0, i.videoAuctionCount = 0; var l = i.unitFloorMultipliers[e.elementId]; i.unitFloorMultipliers[e.elementId] = Math.min(1.2 * l, 10), s && "adx" !== i.currentVideoAuctionWinner && pbjs.markWinningBidAsUsed({ adId: s.adId }); var c = parseFloat(e.baseFloor), u = null; if ("prebid" === i.currentVideoAuctionWinner && s ? (c = s.originalCpm, u = s.bidderCode) : "amazon" === i.currentVideoAuctionWinner ? (u = "amazon", s && (c = s.cpm + .01)) : (u = "adx", s && (c = s.cpm + .01)), i.logWinningBid(e.gamPath, e.elementId, u, c, "intv", s, "video"), i.logImpressionToBQ(e.gamPath, e.elementId, u, c, "intv", s, "video"), i.adsIsMobile) setTimeout((function () { i.interstitialShowing && i.completeInterstitial(t, i.currentInterstitialBreakConfig.adBreakDone) }), 1e3 * d + 250) } n !== window.google.ima.AdEvent.Type.COMPLETE && n !== window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED || i.videoAdCompleteFired || i.completeInterstitial(t, i.currentInterstitialBreakConfig.adBreakDone) })) })) })) })) })) }, showInterstitialDisplay: function (e, t) { var i = document.getElementById("lngtd-interstitial"), n = document.createElement("div"), o = this.interstitialConfigs[t]; if (n.id = e.elementId, i.appendChild(n), o.skipGAM) { var a = pbjs.getHighestCpmBids(e.code)[0]; this.renderPrebidWinningBidWithoutGAM(a, n.id, "intd") } else this.displayUnit(e, "interstitial") }
            }; window.lngtd = i, window.lngtd.loadConfigAndInit()
    }(o), i(5)
}, function (e) { e.exports = JSON.parse('{"account":{"name":"bonk","section":"default","currency":"USD","amazonPublisherId":"c8b7d244-cdfc-48df-8b4a-98e8c4fadc6a","prebidPath":"//p.lngtdv.com/prebid/prebid7.17.4.min.js","lngtdAdvertiserId":"4874962235","refreshEnabled":true,"dynamicFloorsEnabled":true,"refreshInterval":6000000,"maxRefreshCount":100,"useGAM":true,"skipGAMOnNoBids":false,"onlyRequestEligibleBidsRefresh":false,"blockSpamIps":true,"autorun":true,"autoDisplayAds":true,"disabledCountries":[],"displayOnlyViewable":true,"desktopTimeout":2000,"mobileTimeout":2500,"pricePoints":["0.01","0.02","0.03","0.04","0.05","0.06","0.07","0.08","0.09","0.10","0.11","0.12","0.13","0.14","0.15","0.16","0.17","0.18","0.19","0.20","0.21","0.22","0.23","0.24","0.25","0.26","0.27","0.28","0.29","0.30","0.31","0.32","0.33","0.34","0.35","0.36","0.37","0.38","0.39","0.40","0.41","0.42","0.43","0.44","0.45","0.46","0.47","0.48","0.49","0.50","0.55","0.60","0.65","0.70","0.75","0.80","0.85","0.90","0.95","1.00","1.05","1.10","1.15","1.20","1.25","1.30","1.35","1.40","1.45","1.50","1.55","1.60","1.65","1.70","1.75","1.80","1.85","1.90","1.95","2.00","2.05","2.10","2.15","2.20","2.25","2.30","2.35","2.40","2.45","2.50","2.55","2.60","2.65","2.70","2.75","2.80","2.85","2.90","2.95","3.00","3.05","3.10","3.15","3.20","3.25","3.30","3.35","3.40","3.45","3.50","3.55","3.60","3.65","3.70","3.75","3.80","3.85","3.90","3.95","4.00","4.05","4.10","4.15","4.20","4.25","4.30","4.35","4.40","4.45","4.50","4.55","4.60","4.65","4.70","4.75","4.80","4.85","4.90","4.95","5.00","5.10","5.20","5.30","5.40","5.50","5.60","5.70","5.80","5.90","6.00","6.10","6.20","6.30","6.40","6.50","6.60","6.70","6.80","6.90","7.00","7.10","7.20","7.30","7.40","7.50","7.60","7.70","7.80","7.90","8.00","8.10","8.20","8.30","8.40","8.50","8.60","8.70","8.80","8.90","9.00","9.10","9.20","9.30","9.40","9.50","9.60","9.70","9.80","9.90","10.00","10.50","11.00","11.50","12.00","12.50","13.00","13.50","14.00","14.50","15.00","15.50","16.00","16.50","17.00","17.50","18.00","18.50","19.00","19.50","20.00","21.00","22.00","23.00","24.00","25.00","26.00","27.00","28.00","29.00","30.00","31.00","32.00","33.00","34.00","35.00","36.00","37.00","38.00","39.00","40.00","41.00","42.00","43.00","44.00","45.00","46.00","47.00","48.00","49.00","50.00"],"excludeSponsorshipFromRefresh":false,"sponsorshipLineItemIds":[""],"floorMinimumCents":"5.00","countryFloorAdjustments":{},"browserFloorAdjustments":{},"adXMultiplier":"2.00","adXMultiplierMinimum":"2.00","adXMultiplierMaximum":"3.00","enableConfiant":true,"confiantGeos":["US","CA"],"enableSourcepoint":true,"sourcepointId":1368,"cmpApplies":true,"rmpLicenseKey":"Kl8laz1vNGI9Y3Yyc2U/cm9tNWRhc2lzMzBkYjBBJV8q","sovrnOnetagPath":"//get.s-onetag.com/7284df62-edfa-4b01-bf2f-6f54f7507c72/tag.min.js","confiantId":"j0ft_I87FdKNzNKn3XrwFEL3h60"},"schain":{"validation":"strict","config":{"ver":"1.0","complete":1,"nodes":[{"asi":"longitudeads.com","sid":"9366","hp":1}]}},"partners":[{"shortName":"adagio","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bonk_d_1":"0.00","bonk_d_2":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null},{"shortName":"adx","gamId":"4879413283","revShare":"1.00","allowRefresh":true,"unitFloors":{},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null},{"shortName":"amazon","gamId":"4873547270","revShare":"1.00","allowRefresh":true,"unitFloors":{},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null},{"shortName":"appnexus","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bonk_d_2":"0.00","bonk_d_1":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null},{"shortName":"conversant","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bonk_d_2":"0.00","bonk_d_1":"0.00"},"geoRestrictionsInclude":["UK","DE","US","GB","CA","AU","FR","SE","ES","FI","NL"],"geoRestrictionsExclude":null},{"shortName":"criteo","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bonk_d_2":"0.00","bonk_d_1":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null},{"shortName":"ix","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bonk_d_2":"0.00","bonk_d_1":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null},{"shortName":"grid","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bonk_d_2":"0.00","bonk_d_1":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null},{"shortName":"medianet","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bonk_d_1":"0.00","bonk_d_2":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null},{"shortName":"onetag","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bonk_d_1":"0.00","bonk_d_2":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null},{"shortName":"openx","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bonk_d_2":"0.00","bonk_d_1":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null},{"shortName":"pubmatic","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bonk_d_1":"0.00","bonk_d_2":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":["AL","BA","BI","BY","CD","CF","CU","IR","IQ","KP","LB","LY","ME","MK","RS","SD","RU","SS","SO","SY","UA","VE","YE","ZW"]},{"shortName":"sharethrough","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bonk_d_2":"0.00","bonk_d_1":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null},{"shortName":"sovrn","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bonk_d_2":"0.00","bonk_d_1":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null},{"shortName":"triplelift","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bonk_d_2":"0.00","bonk_d_1":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null},{"shortName":"yahoossp","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bonk_d_2":"0.00","bonk_d_1":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null}],"adUnits":[{"gamPath":"/22020501169,22579507294/bonk/bonk_D_1","gamSizes":[[160,600]],"code":"bonk_d_1","elementId":"bonk_d_1","mediaTypes":{"banner":{"sizes":[[160,600]]}},"bids":[{"bidder":"onetag","params":{"pubId":"770e2cce7ac898d","ext":{"placement_name":"bonk_D_1"}}},{"bidder":"adagio","params":{"organizationId":"1183","site":"bonk-io","placement":"bonk_D_1","pagetype":"default","adUnitElementId":"bonk_d_1"}},{"bidder":"grid","params":{"uid":"172093","video":{"placement":5}}},{"bidder":"sharethrough","params":{"pkey":"r1mAv0y5gr7rEsIpbgt2Pvrp","iframe":true,"floor":"0.05"}},{"bidder":"medianet","params":{"cid":"8CUA0SYJJ","crid":"949142513"}},{"bidder":"pubmatic","params":{"publisherId":"160037","adSlot":"bonk_D_1"}},{"bidder":"yahoossp","params":{"dcn":"8a9695b00174742c1df42c9eec090060","pos":"8a9690620174743031d831a255160021"}},{"bidder":"conversant","params":{"site_id":"202902","tag_id":"5e7c0ea3","secure":1}},{"bidder":"triplelift","params":{"inventoryCode":"bonk_D_1_300x600","floor":"0.05"}},{"bidder":"sovrn","params":{"tagid":"740585","bidfloor":"0.05"}},{"bidder":"openx","params":{"delDomain":"addkt-d.openx.net","unit":"541135868","customFloor":"0.05"}},{"bidder":"ix","params":{"siteId":"531010","size":[160,600]}},{"bidder":"criteo","params":{"networkId":"","zoneId":1521418}},{"bidder":"appnexus","params":{"placementId":"19508096","reserve":"0.05"}}],"deviceType":"both","refresh":true,"lazyLoad":false,"requireBids":false,"baseFloor":"0.10"},{"gamPath":"/22020501169,22579507294/bonk/bonk_D_2","gamSizes":[[160,600]],"code":"bonk_d_2","elementId":"bonk_d_2","mediaTypes":{"banner":{"sizes":[[160,600]]}},"bids":[{"bidder":"onetag","params":{"pubId":"770e2cce7ac898d","ext":{"placement_name":"bonk_D_2"}}},{"bidder":"adagio","params":{"organizationId":"1183","site":"bonk-io","placement":"bonk_D_2","pagetype":"default","adUnitElementId":"bonk_d_2"}},{"bidder":"grid","params":{"uid":"172094","video":{"placement":5}}},{"bidder":"sharethrough","params":{"pkey":"6TAyInqEgrmc0XJpvixJbWMe","iframe":true,"floor":"0.05"}},{"bidder":"medianet","params":{"cid":"8CUA0SYJJ","crid":"949142513"}},{"bidder":"pubmatic","params":{"publisherId":"160037","adSlot":"bonk_D_2"}},{"bidder":"yahoossp","params":{"dcn":"8a9695b00174742c1df42c9eec090060","pos":"8a9690620174743031d831a25a470024"}},{"bidder":"conversant","params":{"site_id":"202902","tag_id":"44710183","secure":1}},{"bidder":"triplelift","params":{"inventoryCode":"bonk_D_2_300x600","floor":"0.05"}},{"bidder":"sovrn","params":{"tagid":"740589","bidfloor":"0.05"}},{"bidder":"openx","params":{"delDomain":"addkt-d.openx.net","unit":"541135869","customFloor":"0.05"}},{"bidder":"ix","params":{"siteId":"531011","size":[160,600]}},{"bidder":"criteo","params":{"networkId":"","zoneId":1521417}},{"bidder":"appnexus","params":{"placementId":"19508097","reserve":"0.05"}}],"deviceType":"both","refresh":true,"lazyLoad":false,"requireBids":false,"baseFloor":"0.10"}],"floorSettings":{"enforcement":{"floorDeals":false,"bidAdjustment":true,"enforceJS":true},"data":{"schema":{"fields":["mediaType"]},"values":{"banner":"0.05","video":"1.0"}}},"floors":{}}') }, function (e, t, i) { var n; !function (o, a) { "use strict"; var r = "model", d = "name", s = "type", l = "vendor", c = "version", u = "mobile", g = "tablet", p = "smarttv", m = function (e) { for (var t = {}, i = 0; i < e.length; i++)t[e[i].toUpperCase()] = e[i]; return t }, f = function (e, t) { return "string" == typeof e && -1 !== h(t).indexOf(h(e)) }, h = function (e) { return e.toLowerCase() }, b = function (e, t) { if ("string" == typeof e) return e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), void 0 === t ? e : e.substring(0, 255) }, I = function (e, t) { for (var i, n, o, a, r, d, s = 0; s < t.length && !r;) { var l = t[s], c = t[s + 1]; for (i = n = 0; i < l.length && !r;)if (r = l[i++].exec(e)) for (o = 0; o < c.length; o++)d = r[++n], "object" == typeof (a = c[o]) && a.length > 0 ? 2 === a.length ? "function" == typeof a[1] ? this[a[0]] = a[1].call(this, d) : this[a[0]] = a[1] : 3 === a.length ? "function" != typeof a[1] || a[1].exec && a[1].test ? this[a[0]] = d ? d.replace(a[1], a[2]) : void 0 : this[a[0]] = d ? a[1].call(this, d, a[2]) : void 0 : 4 === a.length && (this[a[0]] = d ? a[3].call(this, d.replace(a[1], a[2])) : void 0) : this[a] = d || void 0; s += 2 } }, A = function (e, t) { for (var i in t) if ("object" == typeof t[i] && t[i].length > 0) { for (var n = 0; n < t[i].length; n++)if (f(t[i][n], e)) return "?" === i ? void 0 : i } else if (f(t[i], e)) return "?" === i ? void 0 : i; return e }, v = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, C = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [c, [d, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [c, [d, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [d, c], [/opios[\/ ]+([\w\.]+)/i], [c, [d, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [c, [d, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [d, c], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [c, [d, "UCBrowser"]], [/\bqbcore\/([\w\.]+)/i], [c, [d, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [c, [d, "WeChat"]], [/konqueror\/([\w\.]+)/i], [c, [d, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [c, [d, "IE"]], [/yabrowser\/([\w\.]+)/i], [c, [d, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[d, /(.+)/, "$1 Secure Browser"], c], [/\bfocus\/([\w\.]+)/i], [c, [d, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [c, [d, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [c, [d, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [c, [d, "Dolphin"]], [/coast\/([\w\.]+)/i], [c, [d, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [c, [d, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [c, [d, "Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [[d, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[d, /(.+)/, "$1 Browser"], c], [/(comodo_dragon)\/([\w\.]+)/i], [[d, /_/g, " "], c], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [d, c], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i], [d], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[d, "Facebook"], c], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [d, c], [/\bgsa\/([\w\.]+) .*safari\//i], [c, [d, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [c, [d, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[d, "Chrome WebView"], c], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [c, [d, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [d, c], [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i], [c, [d, "Mobile Safari"]], [/version\/([\w\.]+) .*(mobile ?safari|safari)/i], [c, d], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [d, [c, A, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]], [/(webkit|khtml)\/([\w\.]+)/i], [d, c], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[d, "Netscape"], c], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [c, [d, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [d, c]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", h]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [["architecture", "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [["architecture", "armhf"]], [/windows (ce|mobile); ppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [["architecture", /ower/, "", h]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [["architecture", h]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [r, [l, "Samsung"], [s, g]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [r, [l, "Samsung"], [s, u]], [/\((ip(?:hone|od)[\w ]*);/i], [r, [l, "Apple"], [s, u]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [r, [l, "Apple"], [s, g]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [r, [l, "Huawei"], [s, g]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i], [r, [l, "Huawei"], [s, u]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[r, /_/g, " "], [l, "Xiaomi"], [s, u]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[r, /_/g, " "], [l, "Xiaomi"], [s, g]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [r, [l, "OPPO"], [s, u]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [r, [l, "Vivo"], [s, u]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [r, [l, "Realme"], [s, u]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [r, [l, "Motorola"], [s, u]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [r, [l, "Motorola"], [s, g]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [r, [l, "LG"], [s, g]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [r, [l, "LG"], [s, u]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [r, [l, "Lenovo"], [s, g]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[r, /_/g, " "], [l, "Nokia"], [s, u]], [/(pixel c)\b/i], [r, [l, "Google"], [s, g]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [r, [l, "Google"], [s, u]], [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [r, [l, "Sony"], [s, u]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[r, "Xperia Tablet"], [l, "Sony"], [s, g]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [r, [l, "OnePlus"], [s, u]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [r, [l, "Amazon"], [s, g]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[r, /(.+)/g, "Fire Phone $1"], [l, "Amazon"], [s, u]], [/(playbook);[-\w\),; ]+(rim)/i], [r, l, [s, g]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [r, [l, "BlackBerry"], [s, u]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [r, [l, "ASUS"], [s, g]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [r, [l, "ASUS"], [s, u]], [/(nexus 9)/i], [r, [l, "HTC"], [s, g]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i], [l, [r, /_/g, " "], [s, u]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [r, [l, "Acer"], [s, g]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [r, [l, "Meizu"], [s, u]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [r, [l, "Sharp"], [s, u]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [l, r, [s, u]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [l, r, [s, g]], [/(surface duo)/i], [r, [l, "Microsoft"], [s, g]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [r, [l, "Fairphone"], [s, u]], [/(u304aa)/i], [r, [l, "AT&T"], [s, u]], [/\bsie-(\w*)/i], [r, [l, "Siemens"], [s, u]], [/\b(rct\w+) b/i], [r, [l, "RCA"], [s, g]], [/\b(venue[\d ]{2,7}) b/i], [r, [l, "Dell"], [s, g]], [/\b(q(?:mv|ta)\w+) b/i], [r, [l, "Verizon"], [s, g]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [r, [l, "Barnes & Noble"], [s, g]], [/\b(tm\d{3}\w+) b/i], [r, [l, "NuVision"], [s, g]], [/\b(k88) b/i], [r, [l, "ZTE"], [s, g]], [/\b(nx\d{3}j) b/i], [r, [l, "ZTE"], [s, u]], [/\b(gen\d{3}) b.+49h/i], [r, [l, "Swiss"], [s, u]], [/\b(zur\d{3}) b/i], [r, [l, "Swiss"], [s, g]], [/\b((zeki)?tb.*\b) b/i], [r, [l, "Zeki"], [s, g]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[l, "Dragon Touch"], r, [s, g]], [/\b(ns-?\w{0,9}) b/i], [r, [l, "Insignia"], [s, g]], [/\b((nxa|next)-?\w{0,9}) b/i], [r, [l, "NextBook"], [s, g]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[l, "Voice"], r, [s, u]], [/\b(lvtel\-)?(v1[12]) b/i], [[l, "LvTel"], r, [s, u]], [/\b(ph-1) /i], [r, [l, "Essential"], [s, u]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [r, [l, "Envizen"], [s, g]], [/\b(trio[-\w\. ]+) b/i], [r, [l, "MachSpeed"], [s, g]], [/\btu_(1491) b/i], [r, [l, "Rotor"], [s, g]], [/(shield[\w ]+) b/i], [r, [l, "Nvidia"], [s, g]], [/(sprint) (\w+)/i], [l, r, [s, u]], [/(kin\.[onetw]{3})/i], [[r, /\./g, " "], [l, "Microsoft"], [s, u]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [r, [l, "Zebra"], [s, g]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [r, [l, "Zebra"], [s, u]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [l, r, [s, "console"]], [/droid.+; (shield) bui/i], [r, [l, "Nvidia"], [s, "console"]], [/(playstation [345portablevi]+)/i], [r, [l, "Sony"], [s, "console"]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [r, [l, "Microsoft"], [s, "console"]], [/smart-tv.+(samsung)/i], [l, [s, p]], [/hbbtv.+maple;(\d+)/i], [[r, /^/, "SmartTV"], [l, "Samsung"], [s, p]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[l, "LG"], [s, p]], [/(apple) ?tv/i], [l, [r, "Apple TV"], [s, p]], [/crkey/i], [[r, "Chromecast"], [l, "Google"], [s, p]], [/droid.+aft(\w)( bui|\))/i], [r, [l, "Amazon"], [s, p]], [/\(dtv[\);].+(aquos)/i], [r, [l, "Sharp"], [s, p]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[l, b], [r, b], [s, p]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[s, p]], [/((pebble))app/i], [l, r, [s, "wearable"]], [/droid.+; (glass) \d/i], [r, [l, "Google"], [s, "wearable"]], [/droid.+; (wt63?0{2,3})\)/i], [r, [l, "Zebra"], [s, "wearable"]], [/(quest( 2)?)/i], [r, [l, "Facebook"], [s, "wearable"]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [l, [s, "embedded"]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [r, [s, u]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [r, [s, g]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[s, g]], [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i], [[s, u]], [/(android[-\w\. ]{0,9});.+buil/i], [r, [l, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [c, [d, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [c, [d, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [d, c], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [c, d]], os: [[/microsoft (windows) (vista|xp)/i], [d, c], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [d, [c, A, v]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[d, "Windows"], [c, A, v]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[c, /_/g, "."], [d, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[d, "Mac OS"], [c, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86)/i], [c, d], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [d, c], [/\(bb(10);/i], [c, [d, "BlackBerry"]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [c, [d, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [c, [d, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [c, [d, "webOS"]], [/crkey\/([\d\.]+)/i], [c, [d, "Chromecast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[d, "Chromium OS"], c], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [d, c], [/(sunos) ?([\w\.\d]*)/i], [[d, "Solaris"], c], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [d, c]] }, y = function (e, t) { if ("object" == typeof e && (t = e, e = void 0), !(this instanceof y)) return new y(e, t).getResult(); var i = e || (void 0 !== o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""), n = t ? function (e, t) { var i = {}; for (var n in e) t[n] && t[n].length % 2 == 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n]; return i }(C, t) : C; return this.getBrowser = function () { var e, t = {}; return t.name = void 0, t.version = void 0, I.call(t, i, n.browser), t.major = "string" == typeof (e = t.version) ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0, t }, this.getCPU = function () { var e = { architecture: void 0 }; return I.call(e, i, n.cpu), e }, this.getDevice = function () { var e = { vendor: void 0, model: void 0, type: void 0 }; return I.call(e, i, n.device), e }, this.getEngine = function () { var e = { name: void 0, version: void 0 }; return I.call(e, i, n.engine), e }, this.getOS = function () { var e = { name: void 0, version: void 0 }; return I.call(e, i, n.os), e }, this.getResult = function () { return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() } }, this.getUA = function () { return i }, this.setUA = function (e) { return i = "string" == typeof e && e.length > 255 ? b(e, 255) : e, this }, this.setUA(i), this }; y.VERSION = "0.7.31", y.BROWSER = m([d, c, "major"]), y.CPU = m(["architecture"]), y.DEVICE = m([r, l, s, "console", u, p, g, "wearable", "embedded"]), y.ENGINE = y.OS = m([d, c]), void 0 !== t ? (void 0 !== e && e.exports && (t = e.exports = y), t.UAParser = y) : i(4) ? void 0 === (n = function () { return y }.call(t, i, t, e)) || (e.exports = n) : void 0 !== o && (o.UAParser = y); var w = void 0 !== o && (o.jQuery || o.Zepto); if (w && !w.ua) { var _ = new y; w.ua = _.getResult(), w.ua.get = function () { return _.getUA() }, w.ua.set = function (e) { _.setUA(e); var t = _.getResult(); for (var i in t) w.ua[i] = t[i] } } }("object" == typeof window ? window : this) }, function (e, t) { (function (t) { e.exports = t }).call(this, {}) }, function (e, t, i) { const n = i(0); !function () { "use strict"; window.lngtd.defineFloors = function (e) { }, window.__pubxLoaded__ = function (e = 50) { return Math.floor(Math.random() * (e = 100 / e) + 1) === parseInt(e) }(50), n.findGetParameter("pubxcdn") ? n.loadScript("https://cdn.pbxai.com/c89a60ae-9580-4a33-b83d-3034d598d3a9.js", (function () { }), !0) : window.lngtd.loadPubX = function (e) { window.__PBXCNFG__ = { pubxId: "c89a60ae-9580-4a33-b83d-3034d598d3a9", sr: 100, cur: "USD", prb: [{ pbx_a0d_n: [0, .03] }, { pbx_a1d_n: [.03, .06] }, { pbx_a2d_n: [.06, .09] }, { pbx_a3d_n: [.09, .12] }, { pbx_a4d_n: [.12, .15] }, { pbx_b0d_n: [.15, .2] }, { pbx_b1d_n: [.2, .25] }, { pbx_b2d_n: [.25, .3] }, { pbx_b3d_n: [.3, .35] }, { pbx_b4d_n: [.35, .4] }, { pbx_b5d_n: [.4, .45] }, { pbx_b6d_n: [.45, .5] }, { pbx_b7d_n: [.5, .55] }, { pbx_b8d_n: [.55, .6] }, { pbx_b9d_n: [.6, .65] }, { pbx_b10d_n: [.65, .7] }, { pbx_b11d_n: [.7, .75] }, { pbx_b12d_n: [.75, .8] }, { pbx_b13d_n: [.8, .85] }, { pbx_b14d_n: [.85, .9] }, { pbx_b15d_n: [.9, .95] }, { pbx_b16d_n: [.95, 1] }, { pbx_c0d_n: [1, 1.1] }, { pbx_c1d_n: [1.1, 1.2] }, { pbx_c2d_n: [1.2, 1.3] }, { pbx_c3d_n: [1.3, 1.4] }, { pbx_c4d_n: [1.4, 1.5] }, { pbx_c5d_n: [1.5, 1.6] }, { pbx_c6d_n: [1.6, 1.7] }, { pbx_c7d_n: [1.7, 1.8] }, { pbx_c8d_n: [1.8, 1.9] }, { pbx_c9d_n: [1.9, 2] }, { pbx_d0d_n: [2, 2.25] }, { pbx_d1d_n: [2.25, 2.5] }, { pbx_d2d_n: [2.5, 2.75] }, { pbx_d3d_n: [2.75, 3] }, { pbx_d4d_n: [3, 3.25] }, { pbx_d5d_n: [3.25, 3.5] }, { pbx_d6d_n: [3.5, 3.75] }, { pbx_d7d_n: [3.75, 4] }, { pbx_d8d_n: [4, 4.25] }, { pbx_d9d_n: [4.25, 4.5] }, { pbx_d10d_n: [4.5, 4.75] }, { pbx_d11d_n: [4.75, 5] }, { pbx_d12d_n: [5, 111111] }], gfldmul: 1, gwbdmul: 1, gnbdmul: 1, adunitFlr: {}, blockedAu: [], errk: "pbx_e0", dfltBck: { pbx_t0: -1, pbx_t1: -2, pbx_t2: -3, pbx_t3: -4, pbx_t4: -5, pbx_t5: -6 }, dfltval: { banner: .01 } }, window.pbjs = window.pbjs || {}, window.pbjs.que = window.pbjs.que || [], window.pbjs.que.push((function () { window.pbjs.enableAnalytics({ provider: "pubxai", options: { samplingRate: window.__PBXCNFG__.sr, pubxId: window.__PBXCNFG__.pubxId } }), window.__pubxLoaded__ && window.pbjs.setConfig({ floors: { enforcement: { floorDeals: !0 }, auctionDelay: 200, endpoint: { url: `https://floor.pbxai.com/?pubxId=${window.__PBXCNFG__.pubxId}&page=${window.top.location.href}&maxBid=${window.sessionStorage.getItem("pbx:mxbid")}&bidDep=${window.sessionStorage.getItem("pbx:dpbid")}&aucId=${window.sessionStorage.getItem("pbx:aucid")}` }, data: { floorProvider: "PubxFloorProvider", modelVersion: "FloorModel-Delta-v1.3", currency: window.__PBXCNFG__.cur, schema: { fields: ["mediaType"] }, values: window.__PBXCNFG__.dfltval } } }), window.pbjs.onEvent("auctionInit", (function (e) { window.__PBXCNFG__.adunitFlr = {}; try { e.adUnits.forEach(e => { if (!window.__PBXCNFG__.blockedAu.includes(e.code)) { googletag.cmd.push(() => { let [t = null] = googletag.pubads().getSlots().filter(t => t.getAdUnitPath() == e.code || t.getSlotElementId() == e.code); t && window.__pubxLoaded__ && window.pbjs.getConfig("floors") && window.pbjs.getConfig("floors").endpoint.url.includes("floor.pbxai") && t.setTargeting("pubx-a", "on") }); let t = window.__PBXCNFG__.dfltBck.pbx_t0, i = null; try { if (e.bids.some(e => e && (!e.floorData || e.floorData && "PubxFloorProvider" === e.floorData.floorProvider && e.floorData.skipped && "success" === e.floorData.fetchStatus))) t = Number.NEGATIVE_INFINITY; else { let i = e.bids.find(e => e && e.floorData && "PubxFloorProvider" === e.floorData.floorProvider && !e.floorData.skipped && "success" === e.floorData.fetchStatus); if (i) { 2 == i.floorData.modelVersion.split("_dt_").length && (window.__PBXCNFG__.gfldmul = parseFloat(i.floorData.modelVersion.split("_dt_")[1].split("_")[0])), 2 == i.floorData.modelVersion.split("_dwt_").length && (window.__PBXCNFG__.gwbdmul = parseFloat(i.floorData.modelVersion.split("_dwt_")[1].split("_")[0])), 2 == i.floorData.modelVersion.split("_dnt_").length && (window.__PBXCNFG__.gnbdmul = parseFloat(i.floorData.modelVersion.split("_dnt_")[1].split("_")[0])); let n = e.sizes.map(e => i.getFloor({ size: e }).floor || window.__PBXCNFG__.dfltBck.pbx_t1); t = n.length > 0 ? n.reduce((e, t) => e + t) / n.length : window.__PBXCNFG__.dfltBck.pbx_t2 } else i = e.bids.find(e => e && e.floorData && "PubxFloorProvider" === e.floorData.floorProvider), t = "timeout" === i.floorData.fetchStatus ? window.__PBXCNFG__.dfltBck.pbx_t3 : "error" === i.floorData.fetchStatus ? window.__PBXCNFG__.dfltBck.pbx_t4 : window.__PBXCNFG__.dfltBck.pbx_t5 } } catch (e) { t = Number.NEGATIVE_INFINITY } if (Number.isFinite(t)) { try { window.__PBXCNFG__.adunitFlr[e.code] = t, t > 0 ? (i = window.__PBXCNFG__.prb.filter((function (e) { var i = e[Object.keys(e)]; return t > i[0] && t <= i[1] }))[0], i = Object.keys(i)[0]) : i = Object.assign({}, ...Object.entries(window.__PBXCNFG__.dfltBck).map(([e, t]) => ({ [t]: e })))[t] || window.__PBXCNFG__.errk } catch (e) { i = window.__PBXCNFG__.errk } googletag.cmd.push(() => { let [t = null] = googletag.pubads().getSlots().filter(t => t.getAdUnitPath() == e.code || t.getSlotElementId() == e.code); t && t.setTargeting("pubx-floor", i) }) } } }) } catch (e) { console.log("pubx: error", e) } })), window.pbjs.onEvent("auctionEnd", (function (e) { if (window.__pubxLoaded__) try { let t = {}, i = {}, n = null, o = e.bidsReceived, a = o.length < 0 || o.some(e => e && !e.floorData); if (o.length > 0 && !a) { let e = o.filter(e => e.adserverTargeting.hb_pb && +e.cpm > 0); if (e.length > 0) t = e.reduce((e, t) => (e[t.adUnitCode] = (e[t.adUnitCode] || 0) >= +t.cpm * window.__PBXCNFG__.gwbdmul ? e[t.adUnitCode] : +t.cpm * window.__PBXCNFG__.gwbdmul, e), {}), n = "_w"; else { let e = o.filter(e => !e.adserverTargeting.hb_pb && +e.originalCpm > 0); e.length > 0 ? (t = e.reduce((e, t) => (e[t.adUnitCode] = (e[t.adUnitCode] || 0) >= +t.originalCpm * window.__PBXCNFG__.gfldmul ? e[t.adUnitCode] : +t.originalCpm * window.__PBXCNFG__.gfldmul, e), {}), n = "_f") : Object.keys(window.__PBXCNFG__.adunitFlr).forEach(e => { window.__PBXCNFG__.adunitFlr[e] > 0 && (t[e] = window.__PBXCNFG__.adunitFlr[e] * window.__PBXCNFG__.gnbdmul) }) } } else Object.keys(window.__PBXCNFG__.adunitFlr).forEach(e => { window.__PBXCNFG__.adunitFlr[e] > 0 && (t[e] = window.__PBXCNFG__.adunitFlr[e] * window.__PBXCNFG__.gnbdmul) }); Object.keys(t).forEach(e => { i[e] = Object.keys(window.__PBXCNFG__.prb.find(i => Object.values(i)[0][0] <= t[e] && Object.values(i)[0][1] >= t[e]))[0], n && (i[e] = i[e].split("_n")[0] + n); let [o = null] = googletag.pubads().getSlots().filter(t => t.getAdUnitPath() == e || t.getSlotElementId() == e); o && o.setTargeting("pubx-floor", i[e]) }) } catch (e) { console.log("pubx:auctionEnd error: ", e) } try { e.bidsReceived.length > 0 ? (window.sessionStorage.setItem("pbx:mxbid", Math.max.apply(Math, e.bidsReceived.map((function (e) { return e.cpm })))), window.sessionStorage.setItem("pbx:dpbid", e.bidsReceived.length), window.sessionStorage.setItem("pbx:aucid", e.bidsReceived[0].auctionId)) : (window.sessionStorage.removeItem("pbx:mxbid"), window.sessionStorage.removeItem("pbx:dpbid"), window.sessionStorage.removeItem("pbx:aucid")) } catch (e) { } })) })) }; window.lngtd.siteSpecificCleanUnitConfigs = function () { var e = []; return window.lngtd.config.adUnits.forEach((function (t) { try { "bonk_d_1" !== t.code && "bonk_d_2" !== t.code || (t.mediaTypes.banner.sizes = window.top.innerWidth > 750 ? [[160, 600]] : []), e.push(t) } catch (e) { } })), e } }() }]);