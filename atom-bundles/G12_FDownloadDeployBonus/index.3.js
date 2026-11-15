window.__require = function e(o, t, n) {
function a(s, u) {
if (!t[s]) {
if (!o[s]) {
var i = s.split("/");
i = i[i.length - 1];
if (!o[i]) {
var p = "function" == typeof __require && __require;
if (!u && p) return p(i, !0);
if (r) return r(i, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = i;
}
var c = t[s] = {
exports: {}
};
o[s][0].call(c.exports, function(e) {
return a(o[s][1][e] || e);
}, c, c.exports, e, o, t, n);
}
return t[s].exports;
}
for (var r = "function" == typeof __require && __require, s = 0; s < n.length; s++) a(n[s]);
return a;
}({
G12_FDownloadDeployBonus_AeIndex: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "77b47X2I2NJ7oY8DNpbv7h8", "G12_FDownloadDeployBonus_AeIndex");
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G12_FDownloadDeployBonus = void 0;
var n = e("./G12_FDownloadDeployBonus_Namespace");
Object.defineProperty(t, "G12_FDownloadDeployBonus", {
enumerable: !0,
get: function() {
return n.G12_FDownloadDeployBonus;
}
});
cc._RF.pop();
}, {
"./G12_FDownloadDeployBonus_Namespace": "G12_FDownloadDeployBonus_Namespace"
} ],
G12_FDownloadDeployBonus_FirstPackageLoad: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "cc61bRrJVFLKI8YmfqAgA9S", "G12_FDownloadDeployBonus_FirstPackageLoad");
var n, a = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var a, r = arguments.length, s = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (a = e[u]) && (s = (r < 3 ? a(s) : r > 3 ? a(o, t, s) : a(o, t)) || s);
return r > 3 && s && Object.defineProperty(o, t, s), s;
}, s = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G12_FDownloadDeployBonus_FirstPackageLoad = void 0;
var u = function(e) {
a(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineLoad = function() {
var e;
return {
onlyDownload: !0,
paths: (e = {}, e[ae.LoaderAssetType.SpriteFrame] = [ this.assetCfg.getGameplayBar(1), this.assetCfg.getGameplayBar(2), this.assetCfg.getGameplayBar(3), this.assetCfg.getGameplayBar(4) ], 
e)
};
};
var t;
r([ ae.bindAtom("G12_FDeployBonus_AssetCfg"), s("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "assetCfg", void 0);
return r([ ae.atomClass("G12_FDownloadDeployBonus_FirstPackageLoad") ], o);
}(ae.LoadAtom);
t.G12_FDownloadDeployBonus_FirstPackageLoad = u;
cc._RF.pop();
}, {} ],
G12_FDownloadDeployBonus_Namespace: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "8312e71+StDRryRZKWj+0ZQ", "G12_FDownloadDeployBonus_Namespace");
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G12_FDownloadDeployBonus = void 0;
(function(e) {
var o;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "上阵激励效果下载特性";
(function(e) {
e.Name = "G12";
})(o = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = o.Name + "_FDownloadDeployBonus"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 3] = "Version";
e.CreateTime = "2026-05-18 11:07:31";
})(e.BundleInfo || (e.BundleInfo = {}));
})(t.G12_FDownloadDeployBonus || (t.G12_FDownloadDeployBonus = {}));
cc._RF.pop();
}, {} ]
}, {}, [ "G12_FDownloadDeployBonus_AeIndex", "G12_FDownloadDeployBonus_Namespace", "G12_FDownloadDeployBonus_FirstPackageLoad" ]);
//# sourceMappingURL=index.js.map
