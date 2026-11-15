window.__require = function e(t, o, n) {
function r(i, c) {
if (!o[i]) {
if (!t[i]) {
var s = i.split("/");
s = s[s.length - 1];
if (!t[s]) {
var f = "function" == typeof __require && __require;
if (!c && f) return f(s, !0);
if (a) return a(s, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = s;
}
var u = o[i] = {
exports: {}
};
t[i][0].call(u.exports, function(e) {
return r(t[i][1][e] || e);
}, u, u.exports, e, t, o, n);
}
return o[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < n.length; i++) r(n[i]);
return r;
}({
G12_FHeartSystemDownload_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "43840n2VMdBiJRZT6GqJxJg", "G12_FHeartSystemDownload_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystemDownload = void 0;
var n = e("./G12_FHeartSystemDownload_Namespace");
Object.defineProperty(o, "G12_FHeartSystemDownload", {
enumerable: !0,
get: function() {
return n.G12_FHeartSystemDownload;
}
});
cc._RF.pop();
}, {
"./G12_FHeartSystemDownload_Namespace": "G12_FHeartSystemDownload_Namespace"
} ],
G12_FHeartSystemDownload_Config: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "874cfVIgNdEh6Jv8vRdI32f", "G12_FHeartSystemDownload_Config");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystemDownload_Config = void 0;
var i = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
firstDownCount: 5
};
};
return a([ ae.atomClass("G12_FHeartSystemDownload_Config") ], t);
}(ae.ConfigAtom);
o.G12_FHeartSystemDownload_Config = i;
cc._RF.pop();
}, {} ],
G12_FHeartSystemDownload_FirstPackageDirectoriesFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "33229hVq3BFCoi0lSNT130L", "G12_FHeartSystemDownload_FirstPackageDirectoriesFunc");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystemDownload_FirstPackageDirectoriesFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return [ e.assetConfig.textureAutoAtlas ];
};
};
var o;
a([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "assetConfig", void 0);
return a([ ae.atomClass("G12_FHeartSystemDownload_FirstPackageDirectoriesFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystemDownload_FirstPackageDirectoriesFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystemDownload_FirstPackageLoader: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d6ccb0d/rdM2L9h4s2o9aRN", "G12_FHeartSystemDownload_FirstPackageLoader");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystemDownload_FirstPackageLoader = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineLoad = function() {
return this.heartConfig.outerMapEnabled ? {
onlyDownload: !0,
directories: this.firstPackageDirectoriesFunc(),
paths: this.firstPackagePathsFunc(),
downloadWorldBundles: [ "G12_FBase_World" ]
} : {};
};
var o, n, c;
a([ ae.bindAtom("G12_FHeartSystemDownload_FirstPackageDirectoriesFunc"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "firstPackageDirectoriesFunc", void 0);
a([ ae.bindAtom("G12_FHeartSystemDownload_FirstPackagePathsFunc"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstPackagePathsFunc", void 0);
a([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), i("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartConfig", void 0);
return a([ ae.atomClass("G12_FHeartSystemDownload_FirstPackageLoader") ], t);
}(ae.LoadAtom);
o.G12_FHeartSystemDownload_FirstPackageLoader = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystemDownload_FirstPackagePathsFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1f595cct8JARq1BrKNTEyWl", "G12_FHeartSystemDownload_FirstPackagePathsFunc");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystemDownload_FirstPackagePathsFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
for (var t, o = e.getLevelFunc(), n = [], r = 1; r <= e.config.firstDownCount; r++) n.push(e.levelConfig.getJsonUrl(o + r));
return (t = {})[ae.LoaderAssetType.SkeletonData] = [ e.assetConfig.gameplayBgLizi.url ], 
t[ae.LoaderAssetType.Json] = n, t;
};
};
var o, n, c, s, f, u;
a([ ae.bindAtom("G12_FBase_TextureCfg"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "textureCfg", void 0);
a([ ae.bindAtom("G12_FBase_LevelConfig"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelConfig", void 0);
a([ ae.bindAtom("G12_FBase_RemotePathConfig"), i("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "remotePathConfig", void 0);
a([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), i("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "assetConfig", void 0);
a([ ae.bindAtom("G12_FBase_GetLevelFunc"), i("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getLevelFunc", void 0);
a([ ae.bindAtom("G12_FHeartSystemDownload_Config"), i("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "config", void 0);
return a([ ae.atomClass("G12_FHeartSystemDownload_FirstPackagePathsFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystemDownload_FirstPackagePathsFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystemDownload_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "de04789IV1G76BuxIh6eJ3g", "G12_FHeartSystemDownload_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystemDownload = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "体力系统-开启主页地图时需要的首包资源";
(function(e) {
e.Name = "G12";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FHeartSystemDownload"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 4] = "Version";
e.CreateTime = "2026-06-16 16:40:21";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G12_FHeartSystemDownload || (o.G12_FHeartSystemDownload = {}));
cc._RF.pop();
}, {} ]
}, {}, [ "G12_FHeartSystemDownload_AeIndex", "G12_FHeartSystemDownload_Namespace", "G12_FHeartSystemDownload_Config", "G12_FHeartSystemDownload_FirstPackageDirectoriesFunc", "G12_FHeartSystemDownload_FirstPackageLoader", "G12_FHeartSystemDownload_FirstPackagePathsFunc" ]);
//# sourceMappingURL=index.js.map
