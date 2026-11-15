window.__require = function e(t, i, n) {
function o(a, c) {
if (!i[a]) {
if (!t[a]) {
var p = a.split("/");
p = p[p.length - 1];
if (!t[p]) {
var u = "function" == typeof __require && __require;
if (!c && u) return u(p, !0);
if (r) return r(p, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = p;
}
var f = i[a] = {
exports: {}
};
t[a][0].call(f.exports, function(e) {
return o(t[a][1][e] || e);
}, f, f.exports, e, t, i, n);
}
return i[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) o(n[a]);
return o;
}({
G3_FAdaptiveLevelSize_AeIndex: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "7f3f3de5KhAPqaQ2QxeADy8", "G3_FAdaptiveLevelSize_AeIndex");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FAdaptiveLevelSize = void 0;
var n = e("./G3_FAdaptiveLevelSize_Namespace");
Object.defineProperty(i, "G3_FAdaptiveLevelSize", {
enumerable: !0,
get: function() {
return n.G3_FAdaptiveLevelSize;
}
});
cc._RF.pop();
}, {
"./G3_FAdaptiveLevelSize_Namespace": "G3_FAdaptiveLevelSize_Namespace"
} ],
G3_FAdaptiveLevelSize_BackgroundConfig: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "f71c13tC+9IK6+hDZvO9dR2", "G3_FAdaptiveLevelSize_BackgroundConfig");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), r = this && this.__decorate || function(e, t, i, n) {
var o, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n); else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
return r > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FAdaptiveLevelSize_BackgroundConfig = void 0;
var a = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
defaultWeightGapTable: [ [ 5, 10 ], [ 10, 14 ], [ 15, 15 ], [ 20, 16 ], [ 25, 18 ], [ 30, 20 ], [ 35, 22 ], [ 40, 24 ], [ Infinity, 25 ] ],
passWeightGapOffset: 4,
passWeightGapMin: 9,
passWeightGapMax: 65
};
};
return r([ ae.atomClass("G3_FAdaptiveLevelSize_BackgroundConfig") ], t);
}(ae.ConfigAtom);
i.G3_FAdaptiveLevelSize_BackgroundConfig = a;
cc._RF.pop();
}, {} ],
G3_FAdaptiveLevelSize_Namespace: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "825000GljZO76TmeD30/qpX", "G3_FAdaptiveLevelSize_Namespace");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FAdaptiveLevelSize = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "不同尺寸关卡显示尺寸自适应，而不是使用固定值";
(function(e) {
e.Name = "G3";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FAdaptiveLevelSize"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 1] = "Version";
e.CreateTime = "2026-02-25 17:56:33";
})(e.BundleInfo || (e.BundleInfo = {}));
})(i.G3_FAdaptiveLevelSize || (i.G3_FAdaptiveLevelSize = {}));
cc._RF.pop();
}, {} ],
G3_FAdaptiveLevelSize_WindowSizeLogic: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "d00cbJYzGhNR7d72KisEsXC", "G3_FAdaptiveLevelSize_WindowSizeLogic");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), r = this && this.__decorate || function(e, t, i, n) {
var o, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n); else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
return r > 3 && a && Object.defineProperty(t, i, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, i = t && e[t], n = 0;
if (i) return i.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && n >= e.length && (e = void 0);
return {
value: e && e[n++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, p = this && this.__read || function(e, t) {
var i = "function" == typeof Symbol && e[Symbol.iterator];
if (!i) return e;
var n, o, r = i.call(e), a = [];
try {
for (;(void 0 === t || t-- > 0) && !(n = r.next()).done; ) a.push(n.value);
} catch (e) {
o = {
error: e
};
} finally {
try {
n && !n.done && (i = r.return) && i.call(r);
} finally {
if (o) throw o.error;
}
}
return a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FAdaptiveLevelSize_WindowSizeLogic = void 0;
var u = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, i) {
var n, o;
i.runtime.screen.width = e.windowSize().width;
i.runtime.screen.height = e.windowSize().height;
var r = e.getLevelConfigFunction();
i.runtime.panel.width = (r.arrow.cols + 1) * e.pointConfig.gap;
i.runtime.panel.height = (r.arrow.rows + 1) * e.pointConfig.gap;
i.runtime.background.width = i.runtime.panel.width + i.runtime.screen.width * e.backgroundConfig.edgeSpaceWidth * 2;
i.runtime.background.height = i.runtime.panel.height + i.runtime.screen.height * e.backgroundConfig.edgeSpaceHeight * 2;
i.runtime.origin.x = -i.runtime.panel.width / 2;
i.runtime.origin.y = -i.runtime.panel.height / 2;
var a = e.mathMin(e.backgroundConfig.minWeightGap * e.pointConfig.gap, i.runtime.background.width), u = e.backgroundConfig.maxWeightGap * e.pointConfig.gap, f = a * i.runtime.screen.height / i.runtime.screen.width, d = u * i.runtime.screen.height / i.runtime.screen.width, l = i.runtime.screen.width / a, s = i.runtime.screen.width / u, g = i.runtime.screen.height / f, _ = i.runtime.screen.height / d;
i.runtime.scale.min = l > g ? l : g;
i.runtime.scale.max = s < _ ? s : _;
var v = r.arrow.cols;
console.log("---- cols", v);
var h = 19;
try {
for (var m = c(e.adaptiveBackgroundConfig.defaultWeightGapTable), y = m.next(); !y.done; y = m.next()) {
var A = p(y.value, 2), b = A[0], G = A[1];
if (v <= b) {
h = G;
break;
}
}
} catch (e) {
n = {
error: e
};
} finally {
try {
y && !y.done && (o = m.return) && o.call(m);
} finally {
if (n) throw n.error;
}
}
console.log("---- defaultWeightGap", h);
var F = i.runtime.screen.width / (h * e.pointConfig.gap);
i.runtime.scale.def = e.mathMax(i.runtime.scale.min, e.mathMin(i.runtime.scale.max, F));
var w = e.mathMax(e.adaptiveBackgroundConfig.passWeightGapMin, e.mathMin(e.adaptiveBackgroundConfig.passWeightGapMax, v + e.adaptiveBackgroundConfig.passWeightGapOffset));
console.log("---- passWeightGap", w);
i.runtime.scale.all = i.runtime.screen.width / (w * e.pointConfig.gap);
console.log("---- G3_FAdaptiveLevelSize_WindowSizeLogic", t, "屏幕(" + i.runtime.screen.width + "," + i.runtime.screen.height + ")", "背板(" + i.runtime.background.width + "," + i.runtime.background.height + ")", "面板(" + i.runtime.panel.width + "," + i.runtime.panel.height + ")", "原点(" + i.runtime.origin.x + "," + i.runtime.origin.y + ")", "缩放比(" + i.runtime.scale.def + "," + i.runtime.scale.min + "," + i.runtime.scale.max + "," + i.runtime.scale.all + ")");
};
};
var i, n, u, f, d, l, s, g;
r([ ae.variantOf, ae.bindAtom("G3_FBase_WindowSizeLogic"), a("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "source", void 0);
r([ ae.bindAtom("G_FAtom_GetWinSize"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "windowSize", void 0);
r([ ae.bindAtom("G3_FBase_PointConfig"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "pointConfig", void 0);
r([ ae.bindAtom("G3_FBase_BackgroundConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "backgroundConfig", void 0);
r([ ae.bindAtom("G3_FAdaptiveLevelSize_BackgroundConfig"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "adaptiveBackgroundConfig", void 0);
r([ ae.bindAtom("G3_FBase_GetLevelConfigFunction"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "getLevelConfigFunction", void 0);
r([ ae.bindAtom("G_FAtom_MathMin"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "mathMin", void 0);
r([ ae.bindAtom("G_FAtom_MathMax"), a("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "mathMax", void 0);
return r([ ae.atomClass("G3_FAdaptiveLevelSize_WindowSizeLogic") ], t);
}(ae.VariantAtom);
i.G3_FAdaptiveLevelSize_WindowSizeLogic = u;
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FAdaptiveLevelSize_AeIndex", "G3_FAdaptiveLevelSize_Namespace", "G3_FAdaptiveLevelSize_BackgroundConfig", "G3_FAdaptiveLevelSize_WindowSizeLogic" ]);