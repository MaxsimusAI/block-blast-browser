window.__require = function e(t, o, n) {
function i(a, c) {
if (!o[a]) {
if (!t[a]) {
var u = a.split("/");
u = u[u.length - 1];
if (!t[u]) {
var f = "function" == typeof __require && __require;
if (!c && f) return f(u, !0);
if (r) return r(u, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = u;
}
var p = o[a] = {
exports: {}
};
t[a][0].call(p.exports, function(e) {
return i(t[a][1][e] || e);
}, p, p.exports, e, t, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
G3_FSmoothLine_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "58926F7RhdMS4bzImmNJUcd", "G3_FSmoothLine_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FSmoothLine = void 0;
var n = e("./G3_FSmoothLine_Namespace");
Object.defineProperty(o, "G3_FSmoothLine", {
enumerable: !0,
get: function() {
return n.G3_FSmoothLine;
}
});
cc._RF.pop();
}, {
"./G3_FSmoothLine_Namespace": "G3_FSmoothLine_Namespace"
} ],
G3_FSmoothLine_Config: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "88f66hwhoVCFKlsfVUGkwvy", "G3_FSmoothLine_Config");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FSmoothLine_Config = void 0;
var a = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
cornerRadius: 10
};
};
return r([ ae.atomClass("G3_FSmoothLine_Config") ], t);
}(ae.ConfigAtom);
o.G3_FSmoothLine_Config = a;
cc._RF.pop();
}, {} ],
G3_FSmoothLine_LineRenderFunction: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bb537j/UetFr5yzQ4l1SZeB", "G3_FSmoothLine_LineRenderFunction");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FSmoothLine_LineRenderFunction = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n, i) {
var r = [ [ ae.GraphicsCmd.StrokeWidth, i ] ];
r.push([ ae.GraphicsCmd.MoveTo, t[o][0], t[o][1] ]);
var a = e.smoothLineConfig.cornerRadius;
if (a <= 0 || n - o < 2) for (var c = o + 1; c <= n; c++) r.push([ ae.GraphicsCmd.LineTo, t[c][0], t[c][1] ]); else {
for (c = o + 1; c < n; c++) {
var u = t[c - 1], f = t[c], p = t[c + 1], _ = f[0] - u[0], s = f[1] - u[1], h = p[0] - f[0], m = p[1] - f[1], d = Math.sqrt(_ * _ + s * s), l = Math.sqrt(h * h + m * m);
if (!(d < 1e-6 || l < 1e-6)) {
var F = d > 1e-6 ? _ / d : 0, y = d > 1e-6 ? s / d : 0, G = l > 1e-6 ? h / l : 0, L = l > 1e-6 ? m / l : 0, v = F * G + y * L, S = Math.acos(Math.max(-1, Math.min(1, v))) / 2;
if (S < 1e-6) r.push([ ae.GraphicsCmd.LineTo, f[0], f[1] ]); else {
var R = Math.min(d, l) * Math.tan(S), b = Math.min(a, R);
if (b < 1e-6) r.push([ ae.GraphicsCmd.LineTo, f[0], f[1] ]); else {
var C = b / Math.tan(S), O = f[0] - F * C, g = f[1] - y * C, j = f[0] + G * C, M = f[1] + L * C;
r.push([ ae.GraphicsCmd.LineTo, O, g ]);
r.push([ ae.GraphicsCmd.QuadraticCurveTo, f[0], f[1], j, M ]);
}
}
}
}
r.push([ ae.GraphicsCmd.LineTo, t[n][0], t[n][1] ]);
}
r.push([ ae.GraphicsCmd.Stroke ]);
return r;
};
};
var o, n;
r([ ae.variantOf, ae.bindAtom("G3_FBase_LineRenderFunction"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "lineRenderFunction", void 0);
r([ ae.bindAtom("G3_FSmoothLine_Config"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "smoothLineConfig", void 0);
return r([ ae.atomClass("G3_FSmoothLine_LineRenderFunction") ], t);
}(ae.VariantAtom);
o.G3_FSmoothLine_LineRenderFunction = c;
cc._RF.pop();
}, {} ],
G3_FSmoothLine_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4ddfahDBZFG5ovfocFxYo/y", "G3_FSmoothLine_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FSmoothLine = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "三角形改成圆角、线条转折处圆滑";
(function(e) {
e.Name = "G3";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FSmoothLine"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 3] = "Version";
e.CreateTime = "2026-02-25 17:39:17";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G3_FSmoothLine || (o.G3_FSmoothLine = {}));
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FSmoothLine_AeIndex", "G3_FSmoothLine_Namespace", "G3_FSmoothLine_Config", "G3_FSmoothLine_LineRenderFunction" ]);