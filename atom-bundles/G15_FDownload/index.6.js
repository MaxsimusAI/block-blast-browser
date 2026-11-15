window.__require = function e(o, t, n) {
function r(i, f) {
if (!t[i]) {
if (!o[i]) {
var c = i.split("/");
c = c[c.length - 1];
if (!o[c]) {
var p = "function" == typeof __require && __require;
if (!f && p) return p(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = c;
}
var _ = t[i] = {
exports: {}
};
o[i][0].call(_.exports, function(e) {
return r(o[i][1][e] || e);
}, _, _.exports, e, o, t, n);
}
return t[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < n.length; i++) r(n[i]);
return r;
}({
G15_FDownload_AeIndex: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "e68c74i9MpN9Zxmd/uBmCae", "G15_FDownload_AeIndex");
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G15_FDownload = void 0;
var n = e("./G15_FDownload_Namespace");
Object.defineProperty(t, "G15_FDownload", {
enumerable: !0,
get: function() {
return n.G15_FDownload;
}
});
cc._RF.pop();
}, {
"./G15_FDownload_Namespace": "G15_FDownload_Namespace"
} ],
G15_FDownload_Config: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "d62d3JWjRtOhJY74uLcYT7A", "G15_FDownload_Config");
var n, r = this && this.__extends || (n = function(e, o) {
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
}), a = this && this.__decorate || function(e, o, t, n) {
var r, a = arguments.length, i = a < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, o, t, n); else for (var f = e.length - 1; f >= 0; f--) (r = e[f]) && (i = (a < 3 ? r(i) : a > 3 ? r(o, t, i) : r(o, t)) || i);
return a > 3 && i && Object.defineProperty(o, t, i), i;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G15_FDownload_Config = void 0;
var i = function(e) {
r(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineConfig = function() {
var e = this.url("G15_FBase");
return {
onlyDownload: !0,
allRes: [ e("res/textures"), e("res/fonts"), e("res/spines") ]
};
};
return a([ ae.atomClass("G15_FDownload_Config") ], o);
}(ae.ConfigAtom);
t.G15_FDownload_Config = i;
cc._RF.pop();
}, {} ],
G15_FDownload_Load: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "f448edq8NVIeK/0K3NxfpiM", "G15_FDownload_Load");
var n, r = this && this.__extends || (n = function(e, o) {
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
}), a = this && this.__decorate || function(e, o, t, n) {
var r, a = arguments.length, i = a < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, o, t, n); else for (var f = e.length - 1; f >= 0; f--) (r = e[f]) && (i = (a < 3 ? r(i) : a > 3 ? r(o, t, i) : r(o, t)) || i);
return a > 3 && i && Object.defineProperty(o, t, i), i;
}, i = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
}, f = this && this.__read || function(e, o) {
var t = "function" == typeof Symbol && e[Symbol.iterator];
if (!t) return e;
var n, r, a = t.call(e), i = [];
try {
for (;(void 0 === o || o-- > 0) && !(n = a.next()).done; ) i.push(n.value);
} catch (e) {
r = {
error: e
};
} finally {
try {
n && !n.done && (t = a.return) && t.call(a);
} finally {
if (r) throw r.error;
}
}
return i;
}, c = this && this.__spread || function() {
for (var e = [], o = 0; o < arguments.length; o++) e = e.concat(f(arguments[o]));
return e;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G15_FDownload_Load = void 0;
var p = function(e) {
r(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineLoad = function() {
var e;
return {
onlyDownload: this.config.onlyDownload,
directories: c(this.config.allRes),
paths: (e = {}, e[ae.LoaderAssetType.Material] = [ this.baseGameConfig.digitMaterial, this.homeConfig.spriteDefaultMaterial ], 
e[ae.LoaderAssetType.Json] = c([ this.manifestConfig.pageUrl(1, this.manifestConfig.featureId) ], this.createHomeConfig.jsons), 
e)
};
};
var t, n, f, p, _;
a([ ae.bindAtom("G15_FDownload_Config"), i("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "config", void 0);
a([ ae.bindAtom("G15_FBase_GameConfig"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], o.prototype, "baseGameConfig", void 0);
a([ ae.bindAtom("G15_FBase_ManifestConfig"), i("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], o.prototype, "manifestConfig", void 0);
a([ ae.bindAtom("G15_FBase_CreateHomeConfig"), i("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], o.prototype, "createHomeConfig", void 0);
a([ ae.bindAtom("G15_FBase_HomeConfig"), i("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], o.prototype, "homeConfig", void 0);
return a([ ae.atomClass("G15_FDownload_Load") ], o);
}(ae.LoadAtom);
t.G15_FDownload_Load = p;
cc._RF.pop();
}, {} ],
G15_FDownload_Namespace: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "9667eOSADhDgp/cAfnibyX7", "G15_FDownload_Namespace");
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G15_FDownload = void 0;
(function(e) {
var o;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "下载世界";
(function(e) {
e.Name = "G15";
})(o = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = o.Name + "_FDownload"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 6] = "Version";
e.CreateTime = "2026-05-12 16:45:55";
})(e.BundleInfo || (e.BundleInfo = {}));
})(t.G15_FDownload || (t.G15_FDownload = {}));
cc._RF.pop();
}, {} ]
}, {}, [ "G15_FDownload_AeIndex", "G15_FDownload_Namespace", "G15_FDownload_Config", "G15_FDownload_Load" ]);
//# sourceMappingURL=index.js.map
