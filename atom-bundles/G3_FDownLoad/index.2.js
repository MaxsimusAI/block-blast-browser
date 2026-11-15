window.__require = function e(o, n, t) {
function r(a, c) {
if (!n[a]) {
if (!o[a]) {
var f = a.split("/");
f = f[f.length - 1];
if (!o[f]) {
var s = "function" == typeof __require && __require;
if (!c && s) return s(f, !0);
if (i) return i(f, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = f;
}
var u = n[a] = {
exports: {}
};
o[a][0].call(u.exports, function(e) {
return r(o[a][1][e] || e);
}, u, u.exports, e, o, n, t);
}
return n[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < t.length; a++) r(t[a]);
return r;
}({
G3_FDownLoad_AeIndex: [ function(e, o, n) {
"use strict";
cc._RF.push(o, "527b5nkDyZNGaDy1Sn8O84V", "G3_FDownLoad_AeIndex");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FDownLoad = void 0;
var t = e("./G3_FDownLoad_Namespace");
Object.defineProperty(n, "G3_FDownLoad", {
enumerable: !0,
get: function() {
return t.G3_FDownLoad;
}
});
cc._RF.pop();
}, {
"./G3_FDownLoad_Namespace": "G3_FDownLoad_Namespace"
} ],
G3_FDownLoad_Download: [ function(e, o, n) {
"use strict";
cc._RF.push(o, "60324y5aOFElbpPjisj+63v", "G3_FDownLoad_Download");
var t, r = this && this.__extends || (t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
})(e, o);
}, function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
}), i = this && this.__decorate || function(e, o, n, t) {
var r, i = arguments.length, a = i < 3 ? o : null === t ? t = Object.getOwnPropertyDescriptor(o, n) : t;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, n, t); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(o, n, a) : r(o, n)) || a);
return i > 3 && a && Object.defineProperty(o, n, a), a;
}, a = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FDownLoad_Config = n.G3_FDownLoad_Download = void 0;
var c = function(e) {
r(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineLoad = function() {
for (var e, o = [], n = this.config.configRange[0]; n <= this.config.configRange[1]; n++) o.push(this.config.configs(String(n).padStart(5, "0")));
return {
onlyDownload: !0,
directories: [ this.config.homeResDir, this.config.audiosDir, this.config.spinesDir, this.config.texturesDir ],
paths: (e = {}, e[ae.LoaderAssetType.Json] = o, e)
};
};
var n;
i([ ae.bindAtom("G3_FDownLoad_Config"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], o.prototype, "config", void 0);
return i([ ae.atomClass("G3_FDownLoad_Download") ], o);
}(ae.LoadAtom);
n.G3_FDownLoad_Download = c;
var f = function(e) {
r(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineConfig = function() {
var e = this.url("G3_FBase");
return {
homeResDir: this.url("G3_FHome")("res"),
audiosDir: e("res/audios"),
spinesDir: e("res/spines"),
texturesDir: e("res/textures"),
configRange: [ 1, 50 ],
configs: function(o) {
return e(ae.RemoteCdnProtocol + "configs/Level_" + o + ".json");
}
};
};
return i([ ae.atomClass("G3_FDownLoad_Config") ], o);
}(ae.ConfigAtom);
n.G3_FDownLoad_Config = f;
cc._RF.pop();
}, {} ],
G3_FDownLoad_Namespace: [ function(e, o, n) {
"use strict";
cc._RF.push(o, "86afc5MOPRKeYNG+MgZ0C34", "G3_FDownLoad_Namespace");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FDownLoad = void 0;
(function(e) {
var o;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "G3游戏必备的下载内容";
(function(e) {
e.Name = "G3";
})(o = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = o.Name + "_FDownLoad"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 2] = "Version";
e.CreateTime = "2026-01-20T16:21:09.825Z";
})(e.BundleInfo || (e.BundleInfo = {}));
})(n.G3_FDownLoad || (n.G3_FDownLoad = {}));
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FDownLoad_AeIndex", "G3_FDownLoad_Namespace", "G3_FDownLoad_Download" ]);