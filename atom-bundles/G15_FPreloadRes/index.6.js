window.__require = function e(t, o, n) {
function r(a, s) {
if (!o[a]) {
if (!t[a]) {
var f = a.split("/");
f = f[f.length - 1];
if (!t[f]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(f, !0);
if (i) return i(f, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = f;
}
var d = o[a] = {
exports: {}
};
t[a][0].call(d.exports, function(e) {
return r(t[a][1][e] || e);
}, d, d.exports, e, t, o, n);
}
return o[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < n.length; a++) r(n[a]);
return r;
}({
G15_FPreloadRes_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8c4b288mhtEZozZXQv1QTXH", "G15_FPreloadRes_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G15_FPreloadRes = void 0;
var n = e("./G15_FPreloadRes_Namespace");
Object.defineProperty(o, "G15_FPreloadRes", {
enumerable: !0,
get: function() {
return n.G15_FPreloadRes;
}
});
cc._RF.pop();
}, {
"./G15_FPreloadRes_Namespace": "G15_FPreloadRes_Namespace"
} ],
G15_FPreloadRes_Load: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "83d61GyAEZP1bLaY0/m40NG", "G15_FPreloadRes_Load");
var n, r = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G15_FPreloadRes_Load = o.G15_FPreloadRes_InitItemsConfig = o.G15_FPreloadRes_FirstPageConfig = void 0;
var s = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
singles: [],
JsonAsset: this.preloadConfig.makePageUrl(this.preloadConfig.featureId)
};
};
var o;
i([ ae.bindAtom("G15_FPreloadRes_PreloadConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "preloadConfig", void 0);
return i([ ae.atomClass("G15_FPreloadRes_FirstPageConfig") ], t);
}(ae.ConfigAtom);
o.G15_FPreloadRes_FirstPageConfig = s;
var f = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this, t = this.firstPageConfig.singles, o = this.preloadConfig.initItems;
-1 === o.indexOf(9) && o.push(9);
return {
jsons: o.map(function(o) {
var n = t.find(function(e) {
return Number(e.id) === o;
});
if (!n) return "";
var r = e.preloadConfig.makeItemUrl(n.url);
console.log("[G15_FPreloadRes]", "initItems url", r);
return r;
}).filter(Boolean)
};
};
var o, n;
i([ ae.bindAtom("G15_FPreloadRes_FirstPageConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "firstPageConfig", void 0);
i([ ae.bindAtom("G15_FPreloadRes_PreloadConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "preloadConfig", void 0);
return i([ ae.atomClass("G15_FPreloadRes_InitItemsConfig") ], t);
}(ae.ConfigAtom);
o.G15_FPreloadRes_InitItemsConfig = f;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineLoad = function() {
var e;
return {
paths: (e = {}, e[ae.LoaderAssetType.Json] = this.initItemsConfig.jsons, e)
};
};
var o;
i([ ae.bindAtom("G15_FPreloadRes_InitItemsConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "initItemsConfig", void 0);
return i([ ae.atomClass("G15_FPreloadRes_Load") ], t);
}(ae.LoadAtom);
o.G15_FPreloadRes_Load = c;
cc._RF.pop();
}, {} ],
G15_FPreloadRes_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "80be4N+d+JHJ4MbdLPzbbjN", "G15_FPreloadRes_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G15_FPreloadRes = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "预加载";
(function(e) {
e.Name = "G15";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FPreloadRes"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 6] = "Version";
e.CreateTime = "2026-03-27 20:09:57";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G15_FPreloadRes || (o.G15_FPreloadRes = {}));
cc._RF.pop();
}, {} ],
G15_FPreloadRes_PreloadConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "28d923uM+FLm7VQgglpZAWT", "G15_FPreloadRes_PreloadConfig");
var n, r = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G15_FPreloadRes_PreloadConfig = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url("G15_FBase");
return {
featureId: "page",
makePageUrl: function(t) {
return e(ae.RemoteCdnProtocol + "res/configs/" + t + "_1.json");
},
initItems: [ 6, 7, 9, 10 ],
makeItemUrl: function(t) {
return e(t);
}
};
};
return i([ ae.atomClass("G15_FPreloadRes_PreloadConfig") ], t);
}(ae.ConfigAtom);
o.G15_FPreloadRes_PreloadConfig = a;
cc._RF.pop();
}, {} ]
}, {}, [ "G15_FPreloadRes_AeIndex", "G15_FPreloadRes_Namespace", "G15_FPreloadRes_Load", "G15_FPreloadRes_PreloadConfig" ]);