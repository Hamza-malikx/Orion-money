(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        122: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = {
                    components: {
                        Warning: o(89).default
                    }
                },
                l = o(8),
                component = Object(l.a)(n, (function() {
                    var e = this,
                        t = e.$createElement;
                    e._self._c;
                    return e._m(0)
                }), [function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("header", {
                        staticClass: "header"
                    }, [o("div", {
                        staticClass: "container"
                    }, [o("a", {
                        staticClass: "logo",
                        attrs: {
                            href: "/"
                        }
                    }), e._v(" "), o("div", {
                        staticClass: "block"
                    }, [o("a", {
                        staticClass: "btn",
                        attrs: {
                            href: "//app.orion.money"
                        }
                    }, [e._v("Launch dApp")])]), e._v(" "), o("ul", {
                        staticClass: "nav"
                    }, [o("li", [o("a", {
                        attrs: {
                            href: "https://orion-money.medium.com/orion-money-litepaper-release-7e98bb3acb6f",
                            target: "_blank"
                        }
                    }, [e._v("Lite Paper")])])])])])
                }], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                Header: o(37).default
            })
        },
        127: function(e, t, o) {
            "use strict";
            var n = o(1),
                l = o(184);
            n.a.use(l.a, {
                config: {
                    id: "G-1FBBV49YJ6"
                }
            })
        },
        128: function(e, t, o) {
            "use strict";
            var n = o(1),
                l = o(185),
                r = o.n(l);
            n.a.use(r.a)
        },
        129: function(e, t) {
            window.intercomSettings = {
                    app_id: "tvss2f62"
                },
                function() {
                    var e = window,
                        t = e.Intercom;
                    if ("function" == typeof t) t("reattach_activator"), t("update", e.intercomSettings);
                    else {
                        var o = document,
                            i = function i() {
                                i.c(arguments)
                            };
                        i.q = [], i.c = function(e) {
                            i.q.push(e)
                        }, e.Intercom = i;
                        var n = function() {
                            var s = o.createElement("script");
                            s.type = "text/javascript", s.async = !0, s.src = "https://widget.intercom.io/widget/tvss2f62";
                            var e = o.getElementsByTagName("script")[0];
                            e.parentNode.insertBefore(s, e)
                        };
                        "complete" === document.readyState ? n() : e.attachEvent ? e.attachEvent("onload", n) : e.addEventListener("load", n, !1)
                    }
                }()
        },
        167: function(e, t, o) {
            var content = o(273);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(31).default)("4c1e37ac", content, !0, {
                sourceMap: !1
            })
        },
        187: function(e, t, o) {
            "use strict";
            var n = o(37),
                l = o(27),
                r = {
                    components: {
                        Header: n.default,
                        HeaderEmpty: l.default
                    }
                },
                c = o(8),
                component = Object(c.a)(r, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", [o("Header"), e._v(" "), o("HeaderEmpty"), e._v(" "), o("div", {
                        attrs: {
                            id: "fullpage"
                        }
                    }, [o("Nuxt")], 1)], 1)
                }), [], !1, null, null, null);
            t.a = component.exports;
            installComponents(component, {
                Header: o(37).default,
                HeaderEmpty: o(27).default
            })
        },
        188: function(e, t, o) {
            "use strict";
            var n = o(37),
                l = o(27),
                r = {
                    components: {
                        Header: n.default,
                        HeaderEmpty: l.default
                    },
                    mounted: function() {
                        initPage()
                    }
                },
                c = o(8),
                component = Object(c.a)(r, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", [o("Header"), e._v(" "), o("HeaderEmpty"), e._v(" "), o("div", {
                        attrs: {
                            id: "fullpage"
                        }
                    }, [o("Nuxt")], 1)], 1)
                }), [], !1, null, null, null);
            t.a = component.exports;
            installComponents(component, {
                Header: o(37).default,
                HeaderEmpty: o(27).default
            })
        },
        189: function(e, t, o) {
            "use strict";
            var n = o(122),
                l = o(27),
                r = {
                    components: {
                        PagesHeader: n.default,
                        HeaderEmpty: l.default
                    },
                    head: function() {
                        return {
                            bodyAttrs: {
                                class: "white"
                            }
                        }
                    },
                    mounted: function() {
                        initSlickNav()
                    }
                },
                c = o(8),
                component = Object(c.a)(r, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", [o("PagesHeader"), e._v(" "), o("HeaderEmpty"), e._v(" "), o("div", {
                        attrs: {
                            id: "fullpage"
                        }
                    }, [o("Nuxt")], 1)], 1)
                }), [], !1, null, null, null);
            t.a = component.exports;
            installComponents(component, {
                PagesHeader: o(122).default,
                HeaderEmpty: o(27).default
            })
        },
        192: function(e, t, o) {
            o(193), e.exports = o(194)
        },
        232: function(e, t, o) {
            var content = o(233);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(31).default)("3a312388", content, !0, {
                sourceMap: !1
            })
        },
        233: function(e, t, o) {
            var n = o(30)(!1);
            n.push([e.i, 'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}.cf:after,.cf:before{content:"";display:table}.cf:after{clear:both}.cf{zoom:1}.nodisplay{display:none}.nodisplay_strict{display:none!important}.alignleft{float:left}.alignright{float:right}hr{display:block;height:1px;border:0;margin:1em 0;padding:0;border-top:1px solid #ccc}audio,canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden],audio:not([controls]){display:none}body,button,input,select,textarea{font-family:sans-serif}a:focus{outline:none}a:active,a:hover{outline:0}h1{font-size:2em}blockquote,fieldset,form,h1,h2,h3,h4,h5,h6,p,pre,table,ul{margin:0}del{text-decoration:line-through}abbr[title]{border-bottom:1px dotted;cursor:help}b,strong{font-weight:700}dfn{font-style:italic}mark{background:#ff0;color:#000}code,kbd,pre,samp{font-family:monospace,serif;_font-family:"courier new",monospace;font-size:1em}pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word}small,sub,sup{font-size:75%}sub,sup{line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0;-ms-interpolation-mode:bicubic}svg:not(:root){overflow:hidden}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;*margin-left:-7px}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle}button,input{line-height:normal}button,input[type=button],input[type=reset],input[type=submit]{cursor:pointer;-webkit-appearance:button;*overflow:visible}input,select{vertical-align:middle}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}.cleaner{clear:both;height:1px;font-size:1px}:focus{outline:none;-webkit-appearance:none}input[type=checkbox]{-webkit-appearance:checkbox}input[type=radio]{-webkit-appearance:radio}:-moz-placeholder,::-moz-placeholder{opacity:1}input,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0}', ""]), e.exports = n
        },
        234: function(e, t, o) {
            var content = o(235);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(31).default)("bc32c83c", content, !0, {
                sourceMap: !1
            })
        },
        235: function(e, t, o) {
            var n = o(30),
                l = o(166),
                r = o(236),
                c = o(237),
                d = o(238),
                f = o(239),
                x = o(240),
                h = o(241),
                m = o(242),
                k = o(243),
                w = o(244),
                y = o(245),
                M = o(246),
                v = o(247),
                I = o(248),
                D = o(249),
                z = o(250),
                j = o(251),
                N = o(252),
                A = o(253),
                _ = o(254),
                T = o(255),
                O = o(256),
                C = o(257),
                L = o(258),
                S = o(259),
                E = o(260),
                Z = o(261),
                G = o(262),
                Q = o(263),
                U = n(!1),
                W = l(r),
                H = l(c),
                P = l(d),
                B = l(f),
                V = l(x),
                J = l(h),
                Y = l(m),
                R = l(k),
                X = l(w),
                F = l(y),
                K = l(M),
                $ = l(v),
                ee = l(I),
                te = l(D),
                oe = l(z),
                ie = l(j),
                ne = l(N),
                ae = l(A),
                le = l(_),
                re = l(T),
                ce = l(O),
                de = l(C),
                pe = l(L),
                se = l(S),
                fe = l(E),
                ge = l(Z),
                xe = l(G),
                be = l(Q);
            U.push([e.i, '@font-face{font-family:"gilroy";src:url(' + W + ') format("woff2"),url(' + H + ') format("woff"),url(' + P + ') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"gilroy";src:url(' + B + ') format("woff2"),url(' + V + ') format("woff");font-weight:400;font-style:normal}@font-face{font-family:"gilroy";src:url(' + J + ') format("woff2"),url(' + Y + ') format("woff");font-weight:500;font-style:normal}@font-face{font-family:"gilroy";src:url(' + R + ') format("woff2"),url(' + X + ') format("woff");font-weight:600;font-style:normal}@font-face{font-family:"gilroy";src:url(' + F + ') format("woff2"),url(' + K + ') format("woff");font-weight:700;font-style:normal}@font-face{font-family:"gilroy";src:url(' + $ + ') format("woff2"),url(' + ee + ') format("woff");font-weight:800;font-style:normal}html{background:transparent}body,html{height:100%}body{font-family:"gilroy",Arial,Helvetica;font-weight:400;background:#272a43 url(' + te + ') no-repeat 50% 50%;background-attachment:fixed;background-size:cover;min-height:100%}button,input,select,textarea{font-family:"gilroy"}.bg-2,.bg-3{background:#272a43 url(' + oe + ") no-repeat 50% 50%;background-size:cover;background-attachment:fixed}.bg-3{background:url(" + ie + ') no-repeat 50% 50%;background-size:cover;background-attachment:fixed}.footer:after,.header .container:after,.header.small .container:after,.header:after,.interface .col-center .top .rules:after,.interface .col-center .top .user-block:after,.table .row:after{display:block;clear:both;content:""}a{text-decoration:none;color:#fff;transition:all .5s ease}.btn{background:#00bf72;border-radius:4px;padding:8px 24px 9px}.btn.big{padding:18px 32px 16px;font-size:18px}.btn.small{padding:4px 8px 3px;border:1px solid #00bf72;border-radius:4px;background:#fff;color:#272a43;font-size:14px}.btn.small:hover{border-color:#00b069;color:#fff}.btn.gray{border-color:#eaeaed}.btn.gray:hover{background:#fff;border-color:#272a43;color:#272a43}.btn:hover{background:#00b069}.msg{padding:8px 0;background:#ffd600;text-align:center}.msg p{color:#22253b;font-weight:500}.msg .btn{display:inline-block;padding:0 24px;background:#fff;border-radius:4px;margin:0 0 0 20px;color:#22253b;font-size:16px;line-height:30px;height:32px;font-weight:600}.header-empty{height:200px;display:none}.header{width:100%}.header .container{padding:28px 72px}.header .logo{width:136px;height:44px;background:url(' + ne + ') no-repeat;float:left}.header .nav{float:right;padding:13px 20px 0}.header .nav li{padding:0 20px;float:left;font-weight:600;font-size:16px}.header .nav li a{color:#fff}.header .nav li.active a,.header .nav li a:hover{color:#00b069}.header .block{margin:12px 0 0;float:right}.fp-viewing-anchor1 .header{position:fixed;z-index:99;width:100%}.fp-viewing-anchor1 .header .container,.fp-viewing-anchor2 .header .container{transition:all 1s ease}.fp-viewing-anchor2 .header,.header.small{position:fixed;width:100%;animation:header .9s ease 0s forwards;-webkit-animation:header .9s ease 0s forwards;z-index:99}.fp-viewing-anchor2 .header .container,.header.small .container{padding-top:16px;padding-bottom:16px;position:relative}.fp-viewing-anchor2 .header .container:before,.header.small .container:before{background:#272a43;opacity:.95;position:absolute;top:0;left:0;width:100%;height:100%;content:"";display:block;z-index:1}.fp-viewing-anchor2 .header .container a,.fp-viewing-anchor2 .header .container ul,.header.small .container a,.header.small .container ul{position:relative;z-index:2}.header-empty.fixed{display:block}.content{max-width:1440px;margin:0 auto;padding-bottom:115px;position:relative}.content .main{display:flex;padding:196px 0 0;justify-content:space-between}.content .main .text{max-width:858px;margin-right:56px}.content .main .text h1{font-weight:400;color:#fff;line-height:68px;font-size:68px;padding:0 0 48px;margin-top:-96px}.content .main .text h1 strong{color:#00bf72;font-weight:700}.content .main .text p{font-weight:500;font-size:18px;line-height:27px;color:#d7ddde}.content .main .text p a{color:#00bf72;text-decoration:underline}.content .main .text p a:hover{text-decoration:none}.content .main .text .btn{min-width:154px;text-align:center;display:inline-block}.content .main .text .desc{margin:24px 0 0;max-width:407px}.content .text li a{color:#00bf72;text-decoration:underline}.content .block{width:100%;max-width:526px;margin:0 0 18px}.content .block .form-block{background:#080b22;min-height:315px;border-radius:4px;margin:0 0 16px;padding:32px 36px 8px 40px}.content .block .form-block h2{font-weight:500;font-size:28px;line-height:32px;color:#fff;padding:0 0 28px}.form-block dl{display:flex;margin:0 0 28px;color:#fff}.form-block dl small,.form-holder small{display:block;color:#a9aab4;font-size:12px;line-height:14px;margin:4px 0 0}.form-block dl dt{width:240px;margin:0 42px 0 0}.form-block dl dt .holder{overflow:hidden;padding:9px 0 0}.form-block dl dt .summ{border:none;border-bottom:1px solid #525569;display:block;padding:0 0 10px;width:100%}.form-block dl dt #years,.form-block dl dt .summ{background:none;font-weight:600;font-size:18px;line-height:22px;color:#fff}.form-block dl dt #years{border:none;width:20px;float:left;margin-top:-2px}.form-block dl dt label{font-weight:600;font-size:18px;line-height:22px;color:#fff;float:left;margin-top:-1px}.form-block dl dd p,.form-holder dd p{color:#5f9698;font-weight:600;font-size:24px;line-height:30px}.form-block .select2{display:block;width:100%!important}.select2-container .select2-results__option{display:flex;justify-content:space-between}.content .block .promo{font-size:12px;line-height:14px;color:#9ab8b6;text-align:right;padding:0 23px 0 0}.content .block .promo img{display:inline-block;vertical-align:middle}.form-holder{display:none}#slider-range-max{margin:14px 0 0}.form-block .ui-slider-horizontal{height:1px;background:#525569;border:none;border-radius:0}.form-block .ui-slider-horizontal .ui-slider-range{height:1px;background:#525569}.form-block .ui-slider-horizontal .ui-slider-handle{border:0;border-radius:100%;width:25px;height:25px;background:#5f9698;top:-13px;cursor:pointer}.form-desc{margin:28px 0 0}.form-desc ul{text-align:center}.form-desc ul li{display:inline-block;font-weight:500;color:#fff}.footer .copy li:before,.footer .nav li:before,.form-desc ul li:before{width:1px;height:13px;background:#fff;opacity:.1;content:"";float:left;margin:0 20px}.footer .copy li:first-child:before,.footer .nav li:first-child:before,.form-desc ul li:first-child:before{display:none;padding-left:0}.form-desc ul li span{color:#00bf72}.section-all .content-holder{padding:40px 0 109px}.content-holder h2{font-size:56px;color:#fff;padding:55px 0 0;text-align:center}.content-holder .block{text-align:center;margin:86px auto 116px;width:400px}.content-holder .block ul{margin:0 0 32px}.content-holder .block ul li{display:inline-block;margin:0 11px}.content-holder .block p{font-size:16px;line-height:19px;color:#fff}.scroll{position:absolute;left:0;bottom:0;font-size:12px}.scroll img{display:block;margin:0 0 12px}.fp-viewing-anchor2 .scroll,.fp-viewing-anchor3 .scroll{opacity:0}.content .single{max-width:720px;margin:0 auto;color:#fff}.content .single .text{padding:0 0 40px}.content .single .text time{font-size:16px;line-height:24px;font-family:"Source Sans Pro",sans-serif}.content .single .text h1{padding:0 0 8px;font-weight:500;font-size:56px;line-height:68px}.content .single .text h2{font-weight:500;font-size:28px;line-height:34px;padding:40px 0 16px}.content .single .text p{font-size:16px;line-height:24px;font-family:"Source Sans Pro",sans-serif;padding:0 0 16px}.content .single .text figure{margin:16px 0 32px}.content .single .text figure img{border-radius:4px}.content .single .text figure figcaption{padding:16px 0 0;font-size:12px;opacity:.6}.content .single .text ul li{position:relative;padding:0 0 16px 24px;line-height:24px;font-family:"Source Sans Pro",sans-serif}.content .single .text ul li:after{content:"";display:block;position:absolute;left:0;top:10px;width:6px;height:6px;background:#00bf72}.content .single .text a,.content .single .text a:hover{text-decoration:underline}.interface{width:100%;display:table;height:100%}.interface .col-left{height:100%;display:table-cell;width:240px;position:relative}.interface .col-left .logo{width:44px;height:44px;background:url(' + ae + ') no-repeat;display:block;margin:0 0 48px}.interface .col-left .holder{padding:24px 24px 8px}.interface .col-left .holder ul li{margin:0 0 16px}.interface .col-left .holder ul li:after{content:"";display:block;background:#fff;height:1px;opacity:.1;margin:12px 0 0}.interface .col-left .holder small{display:block;padding:0 0 8px;color:#9497a3;font-weight:500;font-size:12px;line-height:14px}.interface .col-left .holder p{color:#fff;font-weight:600;font-size:24px;line-height:30px}.interface .col-left .logo-block{position:fixed;bottom:24px;left:24px}.interface .col-left .logo-block ul{overflow:hidden;margin:0 0 8px}.interface .col-left .logo-block li{float:left;margin:0 8px 0 0}.interface .col-left .logo-block p{color:#9497a3;font-size:12px;line-height:14px}.interface .col-left .cyr{margin:0 0 0 24px}.interface .col-left .cyr .select2{display:block;width:70px!important}.interface .select2-container--default .select2-selection--single{width:70px}.interface .select2-container--default .select2-selection--single .select2-selection__rendered{width:60px;font-size:14px;padding:0 0 0 6px;font-weight:400}.interface .select2-container--default.select2-container--open.select2-container--below .select2-selection--single,.interface .select2-container--default .select2-selection--single{border:1px solid #383b4e;border-radius:4px;padding:0}.interface .select2-container--default .select2-selection--single .select2-selection__arrow{right:4px;top:2px}.bg-3 .select2-container--open .select2-dropdown--below{width:192px!important}.bg-3 .select2-container--open .select2-dropdown{top:8px}.interface .select2-container--default.select2-container--open .select2-selection--single{border-color:#00bf72!important}.bg-3 .select2-container--default .select2-results__option--highlighted.select2-results__option--selectable{background:#00b069}.bg-3 .select2-container--default .select2-results__option--highlighted.select2-results__option--selectable span{color:#fff}.bg-3 .select2-container .select2-results__option--selected{background:#eaeaed!important}.bg-3 .select2-container--default .select2-results__option--highlighted.select2-results__option--selectable.select2-results__option--selected span{color:#9497a3}.bg-3 .select2-container--default .select2-results__option--highlighted.select2-results__option--selectable.select2-results__option--selected.select2-results__option--selected span:first-child{color:#272a43}.bg-3 .select2-container--default .select2-results>.select2-results__options{background:#fff;padding:8px 0}.interface .col-center{display:table-cell;vertical-align:top;height:100%}.interface .col-center>.holder{width:100%;display:flex;height:100%}.interface .col-center .holder .block{background:#fff;margin:4px 4px 4px 0;width:100%;border-radius:10px;display:flex}.interface .col-center .title{color:#272a43;font-size:28px;line-height:32px;font-weight:700;margin:64px 0 0;background:url(' + le + ') no-repeat 100% 50%;cursor:pointer}.interface .col-center .title:hover{filter:invert(37%) sepia(77%) saturate(1617%) hue-rotate(132deg) brightness(99%) contrast(101%)}.interface .col-center .top{padding:25px 48px}.interface .col-center .top .user-block{float:right}.interface .col-center .top .user-block .data{float:right;margin:0 41px 0 0}.interface .col-center .top .user-block .level{margin:6px 0 0;font-size:12px;line-height:14px}.interface .col-center .top .user-block .level:before{width:12px;height:12px;background:#ccc;display:inline-block;content:"";border-radius:4px;vertical-align:top;margin:2px 6px 0 0}.interface .col-center .top .user-block .good:before{background:#ffd600}.interface .col-center .top .ico-logout{float:right;width:24px;height:24px;background:url(' + re + ") no-repeat;margin:5px 0 0}.interface .col-center .top .rules{padding:5px 0 0}.interface .col-center .top .rules li{margin:0 32px 0 0;float:left}.interface .col-center .top .ico-logout:hover,.interface .col-center .top .rules li a:hover{filter:invert(37%) sepia(77%) saturate(1617%) hue-rotate(132deg) brightness(99%) contrast(101%)}.interface .col-center .top .ico-bell,.interface .col-center .top .ico-settings{width:24px;height:24px;display:block}.interface .col-center .top .ico-bell{background:url(" + ce + ") no-repeat}.interface .col-center .top .ico-settings{background:url(" + de + ') no-repeat}.interface .col-center .center{padding:18px 43px 18px 48px}.interface .col-center .block>.holder{max-width:1366px;width:100%;height:100%;border-right:1px solid #eaeaed}.interface .table{padding:24px 0 0;display:table;width:100%}.interface .table .row{display:table-row;position:relative;border-bottom:1px solid #eaeaed}.interface .table .row div{position:relative}.interface .table .row div:after{background:#eaeaed;height:1px;width:100%;content:"";display:block;position:absolute;bottom:0;left:0}.interface .table .row:last-child div:after{display:none}.interface .table .row.head .right{text-align:center}.interface .table .row.head div{color:#9497a3;font-weight:500;font-size:12px;line-height:14px;padding:0 0 8px}.interface .table .row>div{display:table-cell;padding:16px 0;font-size:16px;line-height:19px}.interface .table .row:last-child>div{border-bottom:none}.interface .table .col-01{width:21%}.interface .table .col-02{width:17.5%}.interface .table .col-03{width:15%}.interface .table .col-05{width:14%}.interface .table .ico{vertical-align:top;display:inline-block;margin:-4px 12px 0 0}.interface .col-btn{text-align:right}.interface .col-btn a{margin-left:4px}.interface .btn.small{display:inline-block;min-width:56px;text-align:center}.interface .table .row dl{width:100%;white-space:nowrap}.interface .table .row dl dt{display:inline-block;margin:0 8px 0 0;width:48%;text-align:right}.interface .table .row dl dd.none{color:#9497a3}.interface .table .row dl dd{display:inline-block;position:relative;padding:0 0 0 12px;width:37%}.interface .table .row dl dd:before{width:1px;height:16px;background:#9497a3;content:"";display:block;position:absolute;left:0;top:2px}.info{display:inline-block;width:15px;height:15px;background:url(' + pe + ') no-repeat;margin:0 0 0 3px;position:relative;top:2px}.select2-container--default .select2-selection--single{border:none;border-bottom:1px solid #525569;border-radius:0;background:none;height:auto;padding-bottom:10px}.select2-container--default .select2-selection--single .select2-selection__rendered{padding-left:0;color:#fff;font-weight:600;font-size:18px}.select2-container--default .select2-selection--single .select2-selection__arrow b{border-color:#fff transparent transparent}.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b{border-color:transparent transparent #fff;border-width:0 4px 5px}.select2-search--dropdown{display:none;background:#fff}.select2-dropdown{border:none;border-radius:5px;background:none}.select2-container .select2-results__option{background:#fff;font-size:16px}.select2-container--default .select2-results>.select2-results__options{border-radius:5px}.select2-container--open .select2-dropdown{top:-3px}.select2-results__option{padding:8px 16px;color:#272a43}.select2-results__option span{color:#9497a3}.select2-results__option span:first-child{color:#272a43}.select2-container--default .select2-results__option--highlighted.select2-results__option--selectable{background:#eaeaed;color:#272a43}.tabs{max-width:1222px;margin:64px auto 0;overflow:hidden}.tabs .title{display:flex;width:100%}.tabs .title li{width:50%;font-size:28px;line-height:34px;font-weight:500;text-align:center}.tabs .title li a{display:block;color:#fff;padding:0 0 20px;border-bottom:2px solid transparent;position:relative}.tabs .title li a:after{display:block;width:100%;height:1px;content:"";position:absolute;bottom:-3px;left:0;background:#fff;opacity:.1}.tabs .title li.ui-state-active a{border-color:#00bf72;color:#00bf72}.tabs-content{background:#080b22}.tabs-content .block{padding:0 0 25px;margin:0;width:auto}.tabs-content .block .row{display:flex;width:100%;justify-content:center;padding:56px 0 0}.tabs-content .block .row figcaption{min-width:220px;font-size:16px;line-height:24px;color:#eaeaed;padding:24px 0 0}.tabs-content .block .row li{position:relative;padding:0 60px}.tabs-content .block .row li:after{width:32px;height:7px;background:url(' + se + ') no-repeat;display:block;content:"";position:absolute;top:32px;right:-32px}.tabs-content .block .row li:last-child:after{display:none}.table-block{max-width:1124px;margin:64px auto 0;background:#080b22;padding:0 49px 40px}.table-block .table{display:table;width:100%}.table-block .table .title li{padding:64px 0 0}.table-block .table figure{display:block;max-width:130px;text-align:center}.table-block .table .title figcaption{color:#00bf72;font-weight:500;font-size:28px;line-height:34px;padding:56px 0 40px;display:block}.table-block .table ul{display:table-row}.table-block .table ul li{display:table-cell;vertical-align:middle;color:#838590;font-weight:300;font-size:24px;line-height:30px;position:relative;padding:21px 0}.table-block .table ul li p{max-width:130px;text-align:center}.table-block .table ul li:after{content:"";display:block;height:1px;width:100%;background:#fff;opacity:.1;position:absolute;left:0;bottom:0}.table-block .table ul li strong{color:#fff}.table-block .table ul:last-child li:after{display:none}.table-block .table ul li:first-child{width:170px;font-family:"Source Sans Pro",sans-serif;font-size:18px;line-height:27px;text-align:right;color:#fff}.table-block .table ul li:first-child p{max-width:auto;text-align:right}.partners-block{max-width:845px;margin:0 auto}.partners-block ul{display:flex;justify-content:space-between;margin:81px 0 0}.partners-block ul li,.partners-block ul li a{color:#fff}.partners-block ul li figure{text-align:center}.partners-block ul li figure img{width:200px;height:auto}.partners-block ul li figure figcaption{padding:43px 0 0;font-weight:500;font-size:28px;line-height:34px}.investors-block{max-width:1082px;margin:141px auto 75px}.investors-block ul{display:flex;justify-content:space-between}.investors-block ul li a{color:#9497a3}.investors-block ul li figcaption{font-size:16px;line-height:24px;color:#9497a3;text-align:center;padding:40px 0 0;font-family:"Source Sans Pro",sans-serif}.section-02 .content-holder{padding-top:0}.white{background:#fff}.white,.white .content .single .text,.white .content .single .text a{color:#22253b}.white .content .single .text a:hover,.white .footer a:hover{color:#00bf72}.white .content .single .text time{color:#9497a3}.white .footer:before{border-color:#eaeaed;opacity:1}.white .header .nav li a{color:#22253b}.header .nav li.active a,.white .header .nav li a:hover{color:#00bf72}.white .header .logo{background:url(' + fe + ') no-repeat}.white .header.small{box-shadow:0 4px 4px rgba(34,37,59,.05);background:#fff}.white .header.small .container:before{display:none}.white .footer .copy li a,.white .footer .nav li a{color:#22253b}.white .footer .copy li:before,.white .footer .nav li:before{background:#eaeaed;opacity:1}.white .footer .copy p{color:#9497a3}.block-text{max-width:1222px;width:100%;margin:0 auto;display:flex;padding:150px 0 50px}.block-text .col{width:50%;color:#fff}.block-text .col.col-01{max-width:595px}.block-text .col p{font-weight:500;font-size:40px;line-height:48px}.block-text .col a,.block-text .col em{color:#00bf72;font-style:normal}.block-text .col ul{display:flex;flex-wrap:wrap;justify-content:space-between;padding:92px 0 0 101px}.block-text .col ul li{width:100%;max-width:221px;padding:0 0 48px}.block-text .col figcaption{font-size:18px;line-height:27px;padding:24px 0 0}.section .fp-tableCell{overflow:hidden}.footer{padding:0 72px 48px}.footer:before{border-top:1px solid #fff;content:"";display:block;opacity:.1;margin-bottom:48px}.footer .copy{font-size:12px;text-align:right}.footer .copy p{color:hsla(0,0%,100%,.4);float:left}.footer .nav{padding:0 40px 0 0}.footer .copy li,.footer .nav li{font-size:12px;display:inline-block;font-weight:500;vertical-align:top}.footer .copy li:before,.footer .nav li:before{margin:0 12px 0 8px}.footer .copy li a,.footer .nav li a{color:#fff}.footer .copy li.active a,.footer .copy li a:hover,.footer .nav li.active a,.footer .nav li a:hover{color:#00b069}.footer .contacts{text-align:center;margin:0}.footer .contacts li{display:inline-block;margin:0 5px}.footer .continer{display:table;width:100%}.footer ul{display:table-cell;width:33%;vertical-align:middle}.ui-helper-hidden{display:none}.ui-helper-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.ui-helper-reset{margin:0;padding:0;border:0;outline:0;line-height:1.3;text-decoration:none;font-size:100%;list-style:none}.ui-helper-clearfix:after,.ui-helper-clearfix:before{content:"";display:table;border-collapse:collapse}.ui-helper-clearfix:after{clear:both}.ui-helper-zfix{width:100%;height:100%;top:0;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}.ui-tooltip{padding:8px;position:absolute;z-index:9999;max-width:153px;background:#fff;border-radius:4px}body .ui-tooltip{margin-left:-40px}.arrow:after,.ui-tooltip{background:#fff;box-shadow:0 2px 10px rgba(0,0,0,.1)}.ui-tooltip{font-size:12px;line-height:14px;letter-spacing:-.4px;box-shadow:0 2px 10px rgba(0,0,0,.1)}.arrow{width:70px;height:16px;overflow:hidden;position:absolute;left:50%;margin-left:-35px;bottom:-16px}.arrow.top{top:-16px;bottom:auto}.arrow.left{left:20%}.arrow:after{content:"";position:absolute;left:10px;top:12px;width:12px;height:12px;box-shadow:0 2px 10px rgba(0,0,0,.1);transform:rotate(45deg)}.ui-slider{position:relative;text-align:left}.ui-slider .ui-slider-handle{position:absolute;z-index:2;width:1.2em;height:1.2em;cursor:default;touch-action:none}.ui-slider .ui-slider-range{position:absolute;z-index:1;font-size:.7em;display:block;border:0;background-position:0 0}.ui-slider.ui-state-disabled .ui-slider-handle,.ui-slider.ui-state-disabled .ui-slider-range{filter:inherit}.ui-slider-horizontal{height:.8em}.ui-slider-horizontal .ui-slider-handle{top:-.3em;margin-left:-.6em}.ui-slider-horizontal .ui-slider-range{top:0;height:100%}.ui-slider-horizontal .ui-slider-range-min{left:0}.ui-slider-horizontal .ui-slider-range-max{right:0}.slicknav_menu{display:none}.slicknav_btn{position:relative;display:block;vertical-align:middle;float:right;padding:0;cursor:pointer;width:24px;height:20px;background:url(' + ge + ") no-repeat;z-index:9991;margin-top:10px}.white .slicknav_btn{background:url(" + xe + ") no-repeat}.slicknav_btn.slicknav_open{background:url(" + be + ') no-repeat;position:fixed;top:28px;right:20px;margin:0}.slicknav_btn span{display:none}.slicknav_nav{background:#22253b;position:fixed;width:100%;height:100%;top:0;left:0;z-index:999;display:flex;justify-content:center;align-items:center;vertical-align:middle}.slicknav_nav li{width:100%}.slicknav_menu{*zoom:1}.slicknav_menu .slicknav_menutxt{display:block;line-height:1.188em;float:left}.slicknav_menu .slicknav_icon{float:left}.slicknav_menu .slicknav_icon:before{background:transparent;width:1.125em;height:.875em;display:block;content:"";position:absolute}.slicknav_menu .slicknav_no-text{margin:0}.slicknav_menu .slicknav_icon-bar{display:block;width:1.125em;height:.125em;border-radius:1px;box-shadow:0 1px 0 rgba(0,0,0,.25)}.slicknav_menu:after,.slicknav_menu:before{content:" ";display:table}.slicknav_menu:after,.slicknav_nav{clear:both}.slicknav_nav li,.slicknav_nav ul{display:block}.slicknav_nav .slicknav_arrow{font-size:.8em;margin:0 0 0 .4em}.slicknav_nav .slicknav_item{cursor:pointer}.slicknav_nav .slicknav_item a{display:inline}.slicknav_nav .slicknav_row,.slicknav_nav a{display:block}.slicknav_nav .slicknav_parent-link a{display:inline}.slicknav_brand{float:left}.slicknav_menu{font-size:16px;background:none;padding:0}.slicknav_menu,.slicknav_menu *{box-sizing:border-box}.slicknav_menu .slicknav_menutxt{color:#fff;font-weight:700;text-shadow:0 1px 3px #000}.slicknav_menu .slicknav_icon-bar{background-color:#fff}.slicknav_btn{text-decoration:none;text-shadow:none;background-color:none}.slicknav_nav{color:#fff;margin:0}.slicknav_nav,.slicknav_nav ul{padding:0;list-style:none;overflow:hidden}.slicknav_nav .slicknav_row{padding:5px 10px;margin:2px 5px}.slicknav_nav .slicknav_row:hover{border-radius:0;background:#111;color:#fff}.slicknav_nav a{padding:0;margin:20px 0;text-decoration:none;color:#fff;font-size:24px;line-height:30px}.slicknav_nav .slicknav_row:focus a{color:#fff}.slicknav_nav a:hover,.slicknav_nav li.active a{border-radius:0;color:#00bf72}.slicknav_nav .slicknav_txtnode{margin-left:15px}.slicknav_nav .slicknav_item a,.slicknav_nav .slicknav_parent-link a{padding:0;margin:0}.slicknav_brand{color:#fff;font-size:18px;line-height:30px;padding:7px 12px;height:44px}.investors-block li img{filter:brightness(80%) contrast(80%)}', ""]), e.exports = U
        },
        236: function(e, t, o) {
            e.exports = o.p + "fonts/gilroy-light.363dcc7.woff2"
        },
        237: function(e, t, o) {
            e.exports = o.p + "fonts/gilroy-light.5eb9550.woff"
        },
        238: function(e, t, o) {
            e.exports = o.p + "fonts/gilroy-light.4eeddec.ttf"
        },
        239: function(e, t, o) {
            e.exports = o.p + "fonts/gilroy-regular-webfont.9561528.woff2"
        },
        240: function(e, t, o) {
            e.exports = o.p + "fonts/gilroy-regular-webfont.b68ce4d.woff"
        },
        241: function(e, t, o) {
            e.exports = o.p + "fonts/gilroy-medium-webfont.b1a304e.woff2"
        },
        242: function(e, t, o) {
            e.exports = o.p + "fonts/gilroy-medium-webfont.4c86da1.woff"
        },
        243: function(e, t, o) {
            e.exports = o.p + "fonts/gilroy-semibold-webfont.69a5be3.woff2"
        },
        244: function(e, t, o) {
            e.exports = o.p + "fonts/gilroy-semibold-webfont.cd25e30.woff"
        },
        245: function(e, t, o) {
            e.exports = o.p + "fonts/gilroy-bold.0ad1eb9.woff2"
        },
        246: function(e, t) {
            e.exports = "data:font/woff;base64,"
        },
        247: function(e, t, o) {
            e.exports = o.p + "fonts/gilroy-black.f0ffd8f.woff2"
        },
        248: function(e, t) {
            e.exports = "data:font/woff;base64,"
        },
        249: function(e, t, o) {
            e.exports = o.p + "img/bg-1.97c16ec.png"
        },
        250: function(e, t, o) {
            e.exports = o.p + "img/bg-2.4821031.png"
        },
        251: function(e, t, o) {
            e.exports = o.p + "img/bg-3.a825d37.png"
        },
        252: function(e, t, o) {
            e.exports = o.p + "img/logo.4d939a3.svg"
        },
        253: function(e, t, o) {
            e.exports = o.p + "img/logo-ico.2d85cef.svg"
        },
        254: function(e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00LjI5Mjg5IDUuMjkyODlMMC43MDcxMDcgMS43MDcxMUMwLjA3NzE0MTkgMS4wNzcxNCAwLjUyMzMwOSAwIDEuNDE0MjEgMEg4LjU4NTc5QzkuNDc2NjkgMCA5LjkyMjg2IDEuMDc3MTQgOS4yOTI4OSAxLjcwNzExTDUuNzA3MTEgNS4yOTI4OUM1LjMxNjU4IDUuNjgzNDIgNC42ODM0MiA1LjY4MzQyIDQuMjkyODkgNS4yOTI4OVoiIGZpbGw9IiMyNzJBNDMiLz4KPC9zdmc+Cg=="
        },
        255: function(e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDBDMS43OTA4NiAwIDAgMS43OTA4NiAwIDRWMjBDMCAyMi4yMDkxIDEuNzkwODYgMjQgNCAyNEgxM0MxMy41NTIzIDI0IDE0IDIzLjU1MjMgMTQgMjNDMTQgMjIuNDQ3NyAxMy41NTIzIDIyIDEzIDIySDRDMi44OTU0MyAyMiAyIDIxLjEwNDYgMiAyMFY0QzIgMi44OTU0MyAyLjg5NTQzIDIgNCAySDEzQzEzLjU1MjMgMiAxNCAxLjU1MjI4IDE0IDFDMTQgMC40NDc3MTUgMTMuNTUyMyAwIDEzIDBINFpNMTkuMzAzNCAxNC4yMTY0QzE4Ljg5OSAxNC42MjQ0IDE4Ljg5OSAxNS4yODYgMTkuMzAzNCAxNS42OTRDMTkuNzA3OCAxNi4xMDIgMjAuMzYzNSAxNi4xMDIgMjAuNzY3OSAxNS42OTRMMjMuNjk2NyAxMi43Mzg4QzI0LjEwMTEgMTIuMzMwOCAyNC4xMDExIDExLjY2OTIgMjMuNjk2NyAxMS4yNjEyTDIzLjY4NiAxMS4yNTA2TDIwLjc2NzcgOC4zMDYwMkMyMC4zNjMzIDcuODk4IDE5LjcwNzcgNy44OTc5OSAxOS4zMDMzIDguMzA2MDJDMTguODk4OSA4LjcxNDA0IDE4Ljg5ODkgOS4zNzU1OSAxOS4zMDMzIDkuNzgzNjFMMjAuNTA4OCAxMUg5QzguNDQ3NzIgMTEgOCAxMS40NDc3IDggMTJDOCAxMi41NTIzIDguNDQ3NzIgMTMgOSAxM0gyMC41MDlMMTkuMzAzNCAxNC4yMTY0WiIgZmlsbD0iIzI3MkE0MyIvPgo8L3N2Zz4K"
        },
        256: function(e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOSA5VjE4SDVWOUM1IDUuMTM0MDEgOC4xMzQwMSAyIDEyIDJDMTUuODY2IDIgMTkgNS4xMzQwMSAxOSA5Wk0zIDE4VjlDMyA0LjAyOTQ0IDcuMDI5NDQgMCAxMiAwQzE2Ljk3MDYgMCAyMSA0LjAyOTQ0IDIxIDlWMThIMjNDMjMuNTUyMyAxOCAyNCAxOC40NDc3IDI0IDE5QzI0IDE5LjU1MjMgMjMuNTUyMyAyMCAyMyAyMEgyMUgxOUgxNi45MDAxQzE2LjQzNjggMjIuMjgyMiAxNC40MTkgMjQgMTIuMDAwMSAyNEM5LjU4MTEyIDI0IDcuNTYzMzUgMjIuMjgyMiA3LjEwMDEgMjBINUgzSDFDMC40NDc3MjMgMjAgMCAxOS41NTIzIDAgMTlDMCAxOC40NDc3IDAuNDQ3NzIzIDE4IDEgMThIM1pNOS4xNzA3OCAyMEM5LjU4MjYxIDIxLjE2NTIgMTAuNjkzOCAyMiAxMi4wMDAxIDIyQzEzLjMwNjMgMjIgMTQuNDE3NSAyMS4xNjUyIDE0LjgyOTQgMjBIOS4xNzA3OFoiIGZpbGw9IiMyNzJBNDMiLz4KPC9zdmc+Cg=="
        },
        257: function(e, t, o) {
            e.exports = o.p + "img/ico-settings.c72c12f.svg"
        },
        258: function(e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggaWQ9Ij8iIG9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDMuOTk5OTFINlY0Ljk5OTkySDlWMy45OTk5MVpNNiA0Ljk5OTkySDVWNS45OTk5M0g2VjQuOTk5OTJaTTkgNC45OTk5MkgxMFY2Ljk5OTk0SDlWNC45OTk5MlpNOCA3Ljk5OTk1VjYuOTk5OTRMOSA2Ljk5OTk0VjcuOTk5OTVIOFpNOCA3Ljk5OTk1VjguOTk5OTVIN1Y3Ljk5OTk1TDggNy45OTk5NVpNOCA5Ljk5OTk2SDdWMTFIOFY5Ljk5OTk2Wk0xIDcuNUMxIDExLjA4OTggMy45MTAxMiAxNCA3LjQ5OTk0IDE0QzExLjA4OTkgMTQgMTQgMTEuMDg5OCAxNCA3LjVDMTQgMy45MTAxNSAxMS4wODk5IDEuMDAwMDEgNy41MDAwNiAxLjAwMDAxQzMuOTEwMTIgMS4wMDAwMSAxIDMuOTEwMTUgMSA3LjVaTTcuNDk5OTQgMEMxMS42NDIyIDAgMTUgMy4zNTc4NiAxNSA3LjVDMTUgMTEuNjQyMSAxMS42NDIyIDE1IDcuNTAwMDYgMTVDMy4zNTc4NCAxNSAwIDExLjY0MjEgMCA3LjVDMCAzLjM1Nzg2IDMuMzU3ODQgMCA3LjQ5OTk0IDBaIiBmaWxsPSIjNzk3OTc5Ii8+Cjwvc3ZnPgo="
        },
        259: function(e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDMyIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcgMEwzMiAzLjUwMDAzTDI3IDdWNC4wMDAwM0gwVjMuMDAwMDNIMjdWMFoiIGZpbGw9IiMwMEJGNzIiLz4KPC9zdmc+Cg=="
        },
        260: function(e, t, o) {
            e.exports = o.p + "img/logo-dark.fd57e5a.svg"
        },
        261: function(e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBIMjRWMkgwVjBaTTAgOUgyNFYxMUgwVjlaTTI0IDE4SDBWMjBIMjRWMThaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
        },
        262: function(e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBIMjRWMkgwVjBaTTAgOUgyNFYxMUgwVjlaTTI0IDE4SDBWMjBIMjRWMThaIiBmaWxsPSIjMjIyNTNCIi8+Cjwvc3ZnPgo="
        },
        263: function(e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC40NjE3IDkuOTk5NjZMMiAxOC40NjE0TDMuNTM4NDMgMTkuOTk5OUwxMi4wMDAxIDExLjUzODFMMjAuNDYxOCAxOS45OTk5TDIyLjAwMDIgMTguNDYxNEwxMy41Mzg1IDkuOTk5NjZMMjEuOTk5NiAxLjUzODQ1TDIwLjQ2MTIgMEwxMi4wMDAxIDguNDYxMkwzLjUzOTAyIDguMzAwOWUtMDZMMi4wMDA1OCAxLjUzODQ2TDEwLjQ2MTcgOS45OTk2NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
        },
        264: function(e, t, o) {
            var content = o(265);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(31).default)("2ce7018e", content, !0, {
                sourceMap: !1
            })
        },
        265: function(e, t, o) {
            var n = o(30)(!1);
            n.push([e.i, "sup{top:-.7em;right:-.1em}", ""]), e.exports = n
        },
        266: function(e, t, o) {
            var content = o(267);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(31).default)("42d6be68", content, !0, {
                sourceMap: !1
            })
        },
        267: function(e, t, o) {
            var n = o(30),
                l = o(166),
                r = o(268),
                c = o(269),
                d = n(!1),
                f = l(r),
                x = l(c);
            d.push([e.i, "@media screen and (max-width:1620px){.interface .col-center .block>.holder{border:none}}@media screen and (max-width:1560px){.content{padding-left:72px;padding-right:72px}.content .main{padding-top:71px}.content .main .text{max-width:640px}.scroll{left:72px}.content .main{padding-top:150px}.content .main .text h1{margin-top:-56px}}@media screen and (max-width:1366px){.interface .table .col-01{width:21%}.interface .table .col-02{width:17.5%}.interface .table .col-03{width:15%}.interface .table .col-05{width:18%}.content .main{padding-top:100px}.content .main .text h1{margin-top:-56px}.investors-block ul li{padding:0 0 55px;width:33%}.investors-block ul{justify-content:center;flex-wrap:wrap;text-align:center}}@media screen and (max-width:1300px){.content .main .text{max-width:432px;margin-right:32px}.content .main .text h1{font-size:52px;line-height:52px}.content .block .form-block{max-width:496px}.block-text{padding-left:32px;padding-right:32px}.block-text .col ul{padding-left:40px;justify-content:space-evenly}}@media screen and (max-width:1100px){.header .container{padding:28px 32px}.content,.content-holder,.footer,.section-all .content-holder{padding-left:32px;padding-right:32px}.interface .table .col-01{width:22%}.interface .table .col-05{width:23%}.interface .btn.small{min-width:0}.interface .table .row dl dd,.interface .table .row dl dt{width:auto}.interface .table .col-02{width:19.5%}.interface .table .col-03{width:13%}.scroll{left:32px}.msg p{font-size:14px}.scroll{position:fixed;bottom:15px}.block-text .col figcaption{padding-right:30px}.block-text .col figcaption br{display:none}.section-all .content-holder{padding-bottom:54px}}@media screen and (max-width:1024px){.footer .nav{width:40%}.footer .contacts{width:20%}.footer .copy{width:40%}.content .main{padding-top:120px}.content .main .text h1{margin-top:-66px}}@media screen and (max-width:1000px){.content .main .text h1{font-size:44px;line-height:50px}.block-text .col p{font-size:30px;line-height:40px}.block-text .col figcaption{font-size:18px;line-height:27px}.block-text .col ul li{max-width:190px}}@media screen and (max-width:900px){body{background-image:url(" + f + ')}.msg{padding-left:20px;padding-right:20px}.content .main .text h1{font-size:44px;line-height:50px}.content .main .text p{font-size:18px;line-height:27px}.content .block .form-block h2{font-size:24px;line-height:30px}.form-block dl dd p{font-size:20px;line-height:26px}.form-block dl dt{width:150px;margin:0 22px 0 0}.content .main .text h1 br{display:none}.content .block,.content .main .text{width:100%;margin:0;max-width:100%}.content .main{display:block}.content{padding-bottom:0}.content .main .text .btn{display:block}.content .main .text .desc{max-width:100%;padding-bottom:40px}.content .block .form-block{max-width:100%}.form-block dl{width:100%}.form-block dl dt{width:55%;margin:0 5% 0 0}.form-block dl dd{width:40%}.tabs-content .block .row li{padding:0}.tabs-content .block .row figcaption{max-width:180px}.table-block .table figure img{width:80px;height:auto}.section-all .content-holder{padding-top:0;padding-bottom:50px}.partners-block ul{justify-content:space-evenly}.investors-block{margin:64px 0 35px}.investors-block ul{justify-content:space-evenly}.investors-block ul li figure{text-align:center}.investors-block ul li figure img{width:70%;height:auto}.footer ul{display:block;width:auto}.footer .contacts,.footer .copy,.footer .nav{width:auto;text-align:center;padding:0 0 40px}.footer{padding-bottom:0}.table-block{padding-bottom:20px}.table-block .table .title li{padding:48px 0 0}.table-block .table .title figcaption{padding:24px 0 32px}.content-holder h2{padding:0;font-size:40px;line-height:44px}.section-all .content-holder{padding-bottom:100px}.section-02 .content-holder h2{padding-top:55px}.content .main{padding-top:0}.content .main .text h1{margin-top:0}.tabs-content .block{margin-bottom:100px}.content .single .text figure img{display:block;width:100%}.msg{padding-top:0}.msg .btn{margin-top:12px}.fp-viewing-anchor1 .header{position:static}.fp-viewing-anchor1 .header.small{position:fixed}.scroll{display:none}}@media screen and (max-width:810px){.msg{padding-top:8px}.content,.fp-responsive .content .main{padding-top:0}body .fp-tableCell{vertical-align:top}.block-text.content-holder{padding:100 20px 50px;display:block;width:auto}.block-text .col.col-01{max-width:100%;padding-bottom:56px}.block-text .col{width:auto}.block-text .col ul{padding:0}.block-text .col ul li{max-width:50%}}@media screen and (max-width:715px){.header .nav{display:none}.slicknav_menu{display:block;float:right}.header .container{display:block;text-align:center}.header .block{float:none;display:inline-block}.header .logo{width:45px}}@media screen and (max-width:700px){.scroll{display:none}.table-block{overflow-x:auto}.table-block .table{width:688px;margin-top:40px}.investors-block,.partners-block ul,.tabs{margin-top:40px}.content,.content-holder,.footer,.section-all .content-holder{padding-left:20px;padding-right:20px}.table-block{padding:0 20px 40px}.section-02 .content-holder{padding-top:0}.partners-block{padding:48px 0 0}.partners-block ul{display:block}.partners-block ul li{margin-bottom:68px}.partners-block ul li:last-child{margin-bottom:0}.investors-block{margin-top:0}.investors-block ul li figure img{min-width:250px}.investors-block ul li{margin:64px 0 0}.investors-block ul,.tabs-content .block .row{display:block}.tabs-content .block .row:last-child{padding-top:0}.tabs-content .block .row:first-child:after,.tabs-content .block .row li:after{position:static;display:block;content:"";margin:16px auto;height:16px;width:7px;background:url(' + x + ") no-repeat}.tabs-content .block .row li{display:block}.tabs-content .block .row figcaption{margin:auto}.tabs .title li{font-size:24px;line-height:30px}.form-desc ul li{font-size:18px;line-height:27px;padding:0 0 3px}.form-desc ul li:before{display:none}.section.section-02 h2{padding-top:35px}.form-block dl dt{width:100%;margin:0}.form-block dl dd{display:none}.form-holder{padding:9px 0 8px;display:block}.form-holder dd p{font-size:20px;line-height:26px}.form-holder dd{margin-bottom:24px}.form-holder small{margin-top:6px}.msg p{line-height:19px}.header.small .container{position:static}.header.small .container .slicknav_nav{position:fixed;z-index:999}.header.small .container .slicknav_btn.slicknav_open{z-index:9991;position:fixed}.msg{position:relative;z-index:9}.investors-block ul li{width:100%;padding:0}}@media screen and (max-width:400px){.block-text .col ul li{max-width:160px}.block-text .col ul{justify-content:space-between}}@media screen and (max-height:768px) and (max-width:1366px){.content{padding-bottom:20px}}@media screen and (max-height:700px){.second-slide{padding-top:100px}.second-slide .block{margin:50px auto 90px}.content{padding-bottom:0}}", ""]), e.exports = d
        },
        268: function(e, t, o) {
            e.exports = o.p + "img/bg-mobile.98ae025.png"
        },
        269: function(e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDcgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNyAxMUwzLjQ5OTk3IDE2TC00LjgwODI1ZS0wNyAxMUwyLjk5OTk3IDExTDIuOTk5OTcgLTEuNzQ4NDdlLTA3TDMuOTk5OTcgLTEuMzExMzZlLTA3TDMuOTk5OTcgMTFMNyAxMVoiIGZpbGw9IiMwMEJGNzIiLz4KPC9zdmc+Cg=="
        },
        27: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o(8),
                component = Object(n.a)({}, (function() {
                    var e = this.$createElement;
                    return (this._self._c || e)("div", {
                        staticClass: "header-empty"
                    })
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        272: function(e, t, o) {
            "use strict";
            o(167)
        },
        273: function(e, t, o) {
            var n = o(30)(!1);
            n.push([e.i, ".list-enter,.list-leave-to{visibility:hidden;height:0;margin:0;padding:0;opacity:0}.list-enter-active,.list-leave-active{transition:all .3s}", ""]), e.exports = n
        },
        37: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = {
                    components: {
                        Warning: o(89).default
                    }
                },
                l = o(8),
                component = Object(l.a)(n, (function() {
                    var e = this,
                        t = e.$createElement;
                    e._self._c;
                    return e._m(0)
                }), [function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("header", {
                        staticClass: "header"
                    }, [o("div", {
                        staticClass: "container"
                    }, [o("a", {
                        staticClass: "logo",
                        attrs: {
                            href: "/"
                        }
                    }), e._v(" "), o("div", {
                        staticClass: "block"
                    }, [o("a", {
                        staticClass: "btn",
                        attrs: {
                            href: "//app.orion.money"
                        }
                    }, [e._v("Launch dApp")])]), e._v(" "), o("ul", {
                        staticClass: "nav"
                    }, [o("li", [o("a", {
                        attrs: {
                            href: "#block-01"
                        }
                    }, [e._v("About Us")])]), e._v(" "), o("li", [o("a", {
                        attrs: {
                            href: "#block-02"
                        }
                    }, [e._v("How it works")])]), e._v(" "), o("li", [o("a", {
                        attrs: {
                            href: "#block-03"
                        }
                    }, [e._v("APY Levels")])]), e._v(" "), o("li", [o("a", {
                        attrs: {
                            href: "https://orion-money.medium.com/orion-money-litepaper-release-7e98bb3acb6f",
                            target: "_blank"
                        }
                    }, [e._v("Lite Paper")])])])])])
                }], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                Header: o(37).default
            })
        },
        89: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o(1),
                l = o(182),
                r = o.n(l);
            n.a.use(r.a);
            var c = {
                    data: function() {
                        return {
                            isAgreed: this.$cookies.get("alpha-v-agreed") || !1
                        }
                    },
                    watch: {
                        isAgreed: function(e) {
                            this.$cookies.set("alpha-v-agreed", e)
                        }
                    },
                    methods: {
                        agree: function() {
                            this.isAgreed = !0
                        }
                    }
                },
                d = (o(272), o(8)),
                component = Object(d.a)(c, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("transition", {
                        attrs: {
                            name: "list"
                        }
                    }, [e.isAgreed ? e._e() : o("div", {
                        staticClass: "msg"
                    }, [o("p", [e._v("Orion Saver is only on Ethereum and our smart contracts are being audited right now. Only deposit funds that you can afford to lose. ORION token and savings up to 20% will be available after ORION TGE in the coming weeks. "), o("a", {
                        staticClass: "btn",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: e.agree
                        }
                    }, [e._v("I accept")])])])])
                }), [], !1, null, null, null);
            t.default = component.exports
        }
    },
    [
        [192, 32, 3, 33]
    ]
]);