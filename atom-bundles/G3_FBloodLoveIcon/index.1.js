window.__require = function e(o, t, n) {
function c(i, s) {
if (!t[i]) {
if (!o[i]) {
var _ = i.split("/");
_ = _[_.length - 1];
if (!o[_]) {
var a = "function" == typeof __require && __require;
if (!s && a) return a(_, !0);
if (r) return r(_, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = _;
}
var p = t[i] = {
exports: {}
};
o[i][0].call(p.exports, function(e) {
return c(o[i][1][e] || e);
}, p, p.exports, e, o, t, n);
}
return t[i].exports;
}
for (var r = "function" == typeof __require && __require, i = 0; i < n.length; i++) c(n[i]);
return c;
}({
G3_FBloodLoveIcon_AeIndex: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "60d76WNd3tL548x60aMdewt", "G3_FBloodLoveIcon_AeIndex");
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FBloodLoveIcon = void 0;
var n = e("./G3_FBloodLoveIcon_Namespace");
Object.defineProperty(t, "G3_FBloodLoveIcon", {
enumerable: !0,
get: function() {
return n.G3_FBloodLoveIcon;
}
});
cc._RF.pop();
}, {
"./G3_FBloodLoveIcon_Namespace": "G3_FBloodLoveIcon_Namespace"
} ],
G3_FBloodLoveIcon_AssetGenLogic: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "9efbapJ63RBBbfjqFkMKsFw", "G3_FBloodLoveIcon_AssetGenLogic");
var n, c = this && this.__extends || (n = function(e, o) {
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
var c, r = arguments.length, i = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, o, t, n); else for (var s = e.length - 1; s >= 0; s--) (c = e[s]) && (i = (r < 3 ? c(i) : r > 3 ? c(o, t, i) : c(o, t)) || i);
return r > 3 && i && Object.defineProperty(o, t, i), i;
}, i = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FBloodLoveIcon_AssetGenLogic = void 0;
var s = function(e) {
c(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineRuntimeData = function() {
return {};
};
o.prototype.onExecute = function() {
this.asset.IconHp = this.bloodLoveIconAsset.IconHp;
};
var t, n;
r([ ae.onChain, ae.bindAtom("G3_FBase_Asset"), i("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "asset", void 0);
r([ ae.bindAtom("G3_FBloodLoveIcon_Asset"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], o.prototype, "bloodLoveIconAsset", void 0);
return r([ ae.atomClass("G3_FBloodLoveIcon_AssetGenLogic") ], o);
}(ae.LogicAtom);
t.G3_FBloodLoveIcon_AssetGenLogic = s;
cc._RF.pop();
}, {} ],
G3_FBloodLoveIcon_Asset: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "96299/l4JpO1bWCQ8gZJOWb", "G3_FBloodLoveIcon_Asset");
var n, c = this && this.__extends || (n = function(e, o) {
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
var c, r = arguments.length, i = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, o, t, n); else for (var s = e.length - 1; s >= 0; s--) (c = e[s]) && (i = (r < 3 ? c(i) : r > 3 ? c(o, t, i) : c(o, t)) || i);
return r > 3 && i && Object.defineProperty(o, t, i), i;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FBloodLoveIcon_Asset = void 0;
var i = e("../../G3_FBloodLoveIcon_Namespace"), s = function(e) {
c(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineConfig = function() {
return {
IconHp: this.url(i.G3_FBloodLoveIcon.FeatureName.Name)("res/textures/combat/icon_hp")
};
};
return r([ ae.atomClass("G3_FBloodLoveIcon_Asset") ], o);
}(ae.ConfigAtom);
t.G3_FBloodLoveIcon_Asset = s;
cc._RF.pop();
}, {
"../../G3_FBloodLoveIcon_Namespace": "G3_FBloodLoveIcon_Namespace"
} ],
G3_FBloodLoveIcon_Namespace: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "9f010YwxupHcYfgNM4Vxi2C", "G3_FBloodLoveIcon_Namespace");
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FBloodLoveIcon = void 0;
(function(e) {
var o;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "血量改成爱心图标";
(function(e) {
e.Name = "G3";
})(o = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = o.Name + "_FBloodLoveIcon"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 1] = "Version";
e.CreateTime = "2026-02-25 19:58:19";
})(e.BundleInfo || (e.BundleInfo = {}));
})(t.G3_FBloodLoveIcon || (t.G3_FBloodLoveIcon = {}));
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FBloodLoveIcon_AeIndex", "G3_FBloodLoveIcon_Namespace", "G3_FBloodLoveIcon_Asset", "G3_FBloodLoveIcon_AssetGenLogic" ]);