window.__require = function t(e, n, o) {
function r(c, i) {
if (!n[c]) {
if (!e[c]) {
var f = c.split("/");
f = f[f.length - 1];
if (!e[f]) {
var u = "function" == typeof __require && __require;
if (!i && u) return u(f, !0);
if (a) return a(f, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = f;
}
var _ = n[c] = {
exports: {}
};
e[c][0].call(_.exports, function(t) {
return r(e[c][1][t] || t);
}, _, _.exports, t, e, n, o);
}
return n[c].exports;
}
for (var a = "function" == typeof __require && __require, c = 0; c < o.length; c++) r(o[c]);
return r;
}({
G5_FV4BatchFont_AeIndex: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9f525DPGAZDmaFPmrVq9fAN", "G5_FV4BatchFont_AeIndex");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FV4BatchFont = void 0;
var o = t("./G5_FV4BatchFont_Namespace");
Object.defineProperty(n, "G5_FV4BatchFont", {
enumerable: !0,
get: function() {
return o.G5_FV4BatchFont;
}
});
cc._RF.pop();
}, {
"./G5_FV4BatchFont_Namespace": "G5_FV4BatchFont_Namespace"
} ],
G5_FV4BatchFont_ChangeFontPath: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "486eeoXLVVEnLntmGt1ZZEJ", "G5_FV4BatchFont_ChangeFontPath");
var o, r = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var r, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (c = (a < 3 ? r(c) : a > 3 ? r(e, n, c) : r(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
}, c = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FV4BatchFont_ChangeFontPath = void 0;
var i = function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onExecute = function() {
this.gameConfig.numberFont = this.numberFontConfig.numberFontExt;
};
var n, o;
a([ ae.onChain, ae.bindAtom("G5_FBase_GameConfig"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "gameConfig", void 0);
a([ ae.bindAtom("G5_FV4BatchFont_NumberFontConfig"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "numberFontConfig", void 0);
return a([ ae.atomClass("G5_FV4BatchFont_ChangeFontPath") ], e);
}(ae.LogicAtom);
n.G5_FV4BatchFont_ChangeFontPath = i;
cc._RF.pop();
}, {} ],
G5_FV4BatchFont_Namespace: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2ee05uCop1ECKr9htDu008R", "G5_FV4BatchFont_Namespace");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FV4BatchFont = void 0;
(function(t) {
var e;
(t.FeatureDescription || (t.FeatureDescription = {})).Description = "font和图片静态合图，降低drawcall";
(function(t) {
t.Name = "G5";
})(e = t.GameName || (t.GameName = {}));
(function(t) {
t[t.Name = e.Name + "_FV4BatchFont"] = "Name";
})(t.FeatureName || (t.FeatureName = {}));
(function(t) {
t[t.Version = 6] = "Version";
t.CreateTime = "2026-04-09 13:45:58";
})(t.BundleInfo || (t.BundleInfo = {}));
})(n.G5_FV4BatchFont || (n.G5_FV4BatchFont = {}));
cc._RF.pop();
}, {} ],
G5_FV4BatchFont_NumberFontConfig: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7f2d27J4+RGb6Bwn1rnbO4N", "G5_FV4BatchFont_NumberFontConfig");
var o, r = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var r, a = arguments.length, c = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (c = (a < 3 ? r(c) : a > 3 ? r(e, n, c) : r(e, n)) || c);
return a > 3 && c && Object.defineProperty(e, n, c), c;
}, c = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FV4BatchFont_NumberFontConfig = void 0;
var i = function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineConfig = function() {
return {
numberFontExt: this.url(this.resPathConfig.resPath)("res/textures/number")
};
};
var n;
a([ ae.bindAtom("G5_FBase_ResPathConfig"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "resPathConfig", void 0);
return a([ ae.atomClass("G5_FV4BatchFont_NumberFontConfig") ], e);
}(ae.ConfigAtom);
n.G5_FV4BatchFont_NumberFontConfig = i;
cc._RF.pop();
}, {} ]
}, {}, [ "G5_FV4BatchFont_AeIndex", "G5_FV4BatchFont_Namespace", "G5_FV4BatchFont_ChangeFontPath", "G5_FV4BatchFont_NumberFontConfig" ]);