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
var p = o[i] = {
exports: {}
};
t[i][0].call(p.exports, function(e) {
return r(t[i][1][e] || e);
}, p, p.exports, e, t, o, n);
}
return o[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < n.length; i++) r(n[i]);
return r;
}({
G12_FDownload_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4ef67KiDHNDf4qI2CyP2kEl", "G12_FDownload_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDownload = void 0;
var n = e("./G12_FDownload_Namespace");
Object.defineProperty(o, "G12_FDownload", {
enumerable: !0,
get: function() {
return n.G12_FDownload;
}
});
cc._RF.pop();
}, {
"./G12_FDownload_Namespace": "G12_FDownload_Namespace"
} ],
G12_FDownload_FirstPackageDirectoriesFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c2dba9JLSVA1JXdIXpxpqL4", "G12_FDownload_FirstPackageDirectoriesFunc");
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
o.G12_FDownload_FirstPackageDirectoriesFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return [ e.commonDirAsset.texturesGameDir, e.commonDirAsset.texturesUiDir, e.commonDirAsset.spineTrackDir, e.commonDirAsset.spineBoxDir, e.commonDirAsset.spineHandDir, e.commonDirAsset.audioDir, e.commonDirAsset.fontsDir, e.commonDirAsset.effectsDir, e.commonDirAsset.blockTintMtl, e.commonDirAsset.blockTintSpineMtl ];
};
};
var o;
a([ ae.bindAtom("G12_FBase_CommonDirAsset"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "commonDirAsset", void 0);
return a([ ae.atomClass("G12_FDownload_FirstPackageDirectoriesFunc") ], t);
}(ae.FunctionAtom);
o.G12_FDownload_FirstPackageDirectoriesFunc = c;
cc._RF.pop();
}, {} ],
G12_FDownload_FirstPackageLoader: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bbae8vEJ/xMFJ5HF+eNaA/p", "G12_FDownload_FirstPackageLoader");
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
o.G12_FDownload_FirstPackageLoader = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineLoad = function() {
return {
onlyDownload: !0,
directories: this.firstPackageDirectoriesFunc(),
paths: this.firstPackagePathsFunc(),
downloadWorldBundles: [ "G12_FBase_World" ]
};
};
var o, n;
a([ ae.bindAtom("G12_FDownload_FirstPackageDirectoriesFunc"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "firstPackageDirectoriesFunc", void 0);
a([ ae.bindAtom("G12_FDownload_FirstPackagePathsFunc"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstPackagePathsFunc", void 0);
return a([ ae.atomClass("G12_FDownload_FirstPackageLoader") ], t);
}(ae.LoadAtom);
o.G12_FDownload_FirstPackageLoader = c;
cc._RF.pop();
}, {} ],
G12_FDownload_FirstPackagePathsFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "57734jeClFGKYi6e00FXC0s", "G12_FDownload_FirstPackagePathsFunc");
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
o.G12_FDownload_FirstPackagePathsFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t, o = [ e.levelConfig.getJsonUrl(1) ];
for (var n in e.remotePathConfig) Object.prototype.hasOwnProperty.call(e.remotePathConfig, n) && o.push(e.remotePathConfig[n]);
return (t = {})[ae.LoaderAssetType.Texture] = [ e.textureCfg.plateTrack ], t[ae.LoaderAssetType.Json] = o, 
t;
};
};
var o, n, c;
a([ ae.bindAtom("G12_FBase_TextureCfg"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "textureCfg", void 0);
a([ ae.bindAtom("G12_FBase_LevelConfig"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelConfig", void 0);
a([ ae.bindAtom("G12_FBase_RemotePathConfig"), i("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "remotePathConfig", void 0);
return a([ ae.atomClass("G12_FDownload_FirstPackagePathsFunc") ], t);
}(ae.FunctionAtom);
o.G12_FDownload_FirstPackagePathsFunc = c;
cc._RF.pop();
}, {} ],
G12_FDownload_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "015d0OrjstEwLD+SOMtJ4th", "G12_FDownload_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDownload = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "下载特性";
(function(e) {
e.Name = "G12";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FDownload"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 4] = "Version";
e.CreateTime = "2026-05-13 16:31:50";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G12_FDownload || (o.G12_FDownload = {}));
cc._RF.pop();
}, {} ],
G12_FDownload_SilentAssetLoader: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c61feJC9WBCL7ACl0h3NBJ2", "G12_FDownload_SilentAssetLoader");
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
o.G12_FDownload_SilentAssetLoader = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineLoad = function() {
var e;
return {
onlyDownload: !0,
directories: [ this.commonDirAsset.texturesDir, this.commonDirAsset.spinesDir ],
paths: (e = {}, e[ae.LoaderAssetType.Json] = this.silentAssetPathsFunc(), e),
silent: !0
};
};
var o, n;
a([ ae.bindAtom("G12_FBase_CommonDirAsset"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "commonDirAsset", void 0);
a([ ae.bindAtom("G12_FDownload_SilentAssetPathsFunc"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "silentAssetPathsFunc", void 0);
return a([ ae.atomClass("G12_FDownload_SilentAssetLoader") ], t);
}(ae.LoadAtom);
o.G12_FDownload_SilentAssetLoader = c;
cc._RF.pop();
}, {} ],
G12_FDownload_SilentAssetPathsFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2a957QyzGxMEaFoMDYL9L1E", "G12_FDownload_SilentAssetPathsFunc");
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
o.G12_FDownload_SilentAssetPathsFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.mainDataLogic.storage.level + 1, o = e.levelConfigStoredLogic.runtime.silentLoadLevelConfigPaths;
o.length = 0;
for (var n = t + e.levelConfigPlanAtom.levelPreloadCount, r = t; r <= n; r++) o.push(e.levelConfig.getJsonUrl(r));
return o;
};
};
var o, n, c, s;
a([ ae.bindAtom("G12_FBase_MainDataLogic"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "mainDataLogic", void 0);
a([ ae.bindAtom("G12_FBase_LevelConfig"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelConfig", void 0);
a([ ae.bindAtom("G12_FBase_LevelConfigPlan"), i("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "levelConfigPlanAtom", void 0);
a([ ae.bindAtom("G12_FBase_LevelConfigStoredLogic"), i("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "levelConfigStoredLogic", void 0);
return a([ ae.atomClass("G12_FDownload_SilentAssetPathsFunc") ], t);
}(ae.FunctionAtom);
o.G12_FDownload_SilentAssetPathsFunc = c;
cc._RF.pop();
}, {} ],
G12_FDownload_World: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "44de9bID/hLwJ8bd4IBMT5K", "G12_FDownload_World");
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
o.G12_FDownload_World = void 0;
var i = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return a([ ae.atomClass("G12_FDownload_World") ], t);
}(ae.WorldAtom);
o.G12_FDownload_World = i;
cc._RF.pop();
}, {} ]
}, {}, [ "G12_FDownload_AeIndex", "G12_FDownload_Namespace", "G12_FDownload_FirstPackageDirectoriesFunc", "G12_FDownload_FirstPackageLoader", "G12_FDownload_FirstPackagePathsFunc", "G12_FDownload_SilentAssetLoader", "G12_FDownload_SilentAssetPathsFunc", "G12_FDownload_World" ]);
//# sourceMappingURL=index.js.map
