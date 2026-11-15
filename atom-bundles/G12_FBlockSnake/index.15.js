window.__require = function e(t, n, o) {
function a(r, c) {
if (!n[r]) {
if (!t[r]) {
var p = r.split("/");
p = p[p.length - 1];
if (!t[p]) {
var f = "function" == typeof __require && __require;
if (!c && f) return f(p, !0);
if (i) return i(p, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = p;
}
var u = n[r] = {
exports: {}
};
t[r][0].call(u.exports, function(e) {
return a(t[r][1][e] || e);
}, u, u.exports, e, t, n, o);
}
return n[r].exports;
}
for (var i = "function" == typeof __require && __require, r = 0; r < o.length; r++) a(o[r]);
return a;
}({
G12_FBlockSnake_AeIndex: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1e751CG4LZCX43fVNOWziSo", "G12_FBlockSnake_AeIndex");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake = void 0;
var o = e("./G12_FBlockSnake_Namespace");
Object.defineProperty(n, "G12_FBlockSnake", {
enumerable: !0,
get: function() {
return o.G12_FBlockSnake;
}
});
cc._RF.pop();
}, {
"./G12_FBlockSnake_Namespace": "G12_FBlockSnake_Namespace"
} ],
G12_FBlockSnake_AppendSnakeTurnStripFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4e345GpPyZGLLUQB7AFFdge", "G12_FBlockSnake_AppendSnakeTurnStripFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_AppendSnakeTurnStripFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var n = t.turn, o = t.p, a = t.halfW, i = t.dPrev, r = t.dNext, c = t.leftPrev, p = t.leftNext, f = t.rightPrev, u = t.rightNext, l = t.miterLimit, s = t.arcCount, d = t.uValue, y = t.eps, _ = t.useShortArc, h = t.stripLeft, k = t.stripRight, m = t.stripU;
if (n > 0) {
for (var S = {
x: f.x - o.x,
y: f.y - o.y
}, F = {
x: u.x - o.x,
y: u.y - o.y
}, g = Math.atan2(S.y, S.x), b = Math.atan2(F.y, F.x); b < g; ) b += 2 * Math.PI;
var v = i.x * r.y - i.y * r.x, B = p;
if (Math.abs(v) > y) {
var G = p.x - c.x, O = p.y - c.y, P = (G * r.y - O * r.x) / v;
B = {
x: c.x + i.x * P,
y: c.y + i.y * P
};
}
var A = B, j = a * l, C = B.x - o.x, R = B.y - o.y, x = Math.sqrt(C * C + R * R);
x > j && x > y && (A = {
x: o.x + C / x * j,
y: o.y + R / x * j
});
if (_) {
for (var D = 0; D <= s; D++) {
var M = g + D / s * (b - g), T = {
x: o.x + Math.cos(M) * a,
y: o.y + Math.sin(M) * a
};
e.pushStripPointFunc(h, k, m, A, T, d, y);
}
return;
}
for (D = 0; D <= s; D++) {
M = g + D / s * (b - g), T = {
x: o.x + Math.cos(M) * a,
y: o.y + Math.sin(M) * a
};
e.pushStripPointFunc(h, k, m, A, T, d, y);
}
} else {
for (var I = {
x: c.x - o.x,
y: c.y - o.y
}, w = {
x: p.x - o.x,
y: p.y - o.y
}, H = Math.atan2(I.y, I.x), L = Math.atan2(w.y, w.x); L > H; ) L -= 2 * Math.PI;
var E = i.x * r.y - i.y * r.x, z = u;
if (Math.abs(E) > y) {
G = u.x - f.x, O = u.y - f.y, P = (G * r.y - O * r.x) / E;
z = {
x: f.x + i.x * P,
y: f.y + i.y * P
};
}
var V = z, N = a * l, W = z.x - o.x, U = z.y - o.y, Z = Math.sqrt(W * W + U * U);
Z > N && Z > y && (V = {
x: o.x + W / Z * N,
y: o.y + U / Z * N
});
if (_) for (D = 0; D <= s; D++) {
M = H + D / s * (L - H);
var q = {
x: o.x + Math.cos(M) * a,
y: o.y + Math.sin(M) * a
};
e.pushStripPointFunc(h, k, m, q, V, d, y);
} else for (D = 0; D <= s; D++) {
M = H + D / s * (L - H), q = {
x: o.x + Math.cos(M) * a,
y: o.y + Math.sin(M) * a
};
e.pushStripPointFunc(h, k, m, q, V, d, y);
}
}
};
};
var n;
i([ ae.bindAtom("G12_FBlockSnake_PushStripPointFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "pushStripPointFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_AppendSnakeTurnStripFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_AppendSnakeTurnStripFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_AssetConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "90599pgBctP84yIzeJ+7wCM", "G12_FBlockSnake_AssetConfig");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_AssetConfig = void 0;
var r = e("../../G12_FBlockSnake_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url(r.G12_FBlockSnake.FeatureName.Name);
return {
resRoot: e("res"),
snakeMaterial: e("res/materials/snake"),
snakeOutSpine: e("res/spines/gameplay_she_out"),
snakeTexture: e("res/textures/gameplay_img_snake_4"),
snakeHeadTexture: e("res/textures/gameplay_img_snake_3"),
snakeTailTexture: e("res/textures/gameplay_img_snake_5"),
snakeEyeTexture: e("res/textures/gameplay_img_snake_1"),
snakeTongueTexture: e("res/textures/gameplay_img_snake_2")
};
};
return i([ ae.atomClass("G12_FBlockSnake_AssetConfig") ], t);
}(ae.ConfigAtom);
n.G12_FBlockSnake_AssetConfig = c;
cc._RF.pop();
}, {
"../../G12_FBlockSnake_Namespace": "G12_FBlockSnake_Namespace"
} ],
G12_FBlockSnake_BuildSnakeBodyMeshFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "44b08M6U6tNfrnzt+tij8Er", "G12_FBlockSnake_BuildSnakeBodyMeshFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_BuildSnakeBodyMeshFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = this.renderCacheStateFunc().bodyMeshPointsCache;
return function(n) {
var o, a = e.getVisibleSampledPathFunc(n), i = null !== (o = t.get(n)) && void 0 !== o ? o : [];
i.length = 0;
t.set(n, i);
for (var r = e.loadBlockDataLogic.runtime, c = r.gridSize, p = r.mapWidth / 2, f = r.mapHeight / 2, u = Math.max(1, e.domain.blockCmp.doorBaseSize[n]) * c / 2, l = 0; l + 1 < a.length; l += 2) i.push(a[l] * c + u - p, -a[l + 1] * c - u + f);
for (var s = e.constCfg.blockImgWidth * Math.max(1, e.domain.blockCmp.doorBaseSize[n]) * e.domain.snakePathCmp.finalDisappearScale[n] * e.loadBlockDataLogic.runtime.mapScale, d = e.renderParamConfig.lineWidth > 0 ? e.renderParamConfig.lineWidth : s, y = d * e.renderParamConfig.snakeBodyShortenLineWidthRatio, _ = e.renderParamConfig.meshPointEpsilon, h = y; h > _ && i.length >= 4; ) {
var k = i.length - 2, m = i.length - 4, S = i[k] - i[m], F = i[k + 1] - i[m + 1], g = Math.sqrt(S * S + F * F);
if (g <= _) i.length -= 2; else if (h >= g) {
i.length -= 2;
h -= g;
} else {
var b = (g - h) / g;
i[k] = i[m] + S * b;
i[k + 1] = i[m + 1] + F * b;
h = 0;
}
}
var v = Math.min(.5 * d, c);
return e.buildSnakeMeshFunc(i, d, e.renderParamConfig.uvMul, e.renderParamConfig.miterLimit, e.renderParamConfig.arcSegment, v, e.renderParamConfig.meshPointEpsilon);
};
};
var n, o, c, p, f, u, l;
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FBase_LoadBlockDataLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "loadBlockDataLogic", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBlockSnake_BuildSnakeMeshFunc"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "buildSnakeMeshFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_GetVisibleSampledPathFunc"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getVisibleSampledPathFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_RenderParamConfig"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "renderParamConfig", void 0);
i([ ae.bindAtom("G12_FBlockSnake_RenderCacheStateFunc"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "renderCacheStateFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_BuildSnakeBodyMeshFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_BuildSnakeBodyMeshFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_BuildSnakeMeshFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "58f8eTVJy9FwaTeimlTCqJ+", "G12_FBlockSnake_BuildSnakeMeshFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_BuildSnakeMeshFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, n, o, a, i, r, c) {
var p = [], f = [], u = [], l = t.length >> 1;
if (l < 2 || n <= 0 || o <= 0) return {
positions: p,
uvs: f,
indices: u
};
var s = [];
s.push(t[0], t[1]);
for (var d = null != c ? c : 1e-4, y = 1; y < l; y++) {
var _ = t[D = y << 1], h = t[D + 1], k = s.length - 2;
(Math.abs(_ - s[k]) > d || Math.abs(h - s[k + 1]) > d) && s.push(_, h);
}
var m = [];
m.push(s[0], s[1]);
for (y = 1; y < (s.length >> 1) - 1; y++) {
var S = y - 1 << 1, F = y << 1, g = y + 1 << 1, b = s[F] - s[S], v = s[F + 1] - s[S + 1], B = s[g] - s[F], G = s[g + 1] - s[F + 1], O = b * G - v * B, P = b * B + v * G;
(Math.abs(O) > d || P <= 0) && m.push(s[F], s[F + 1]);
}
var A = s.length - 2;
m.push(s[A], s[A + 1]);
var j = m.length >> 1;
if (j < 2) return {
positions: p,
uvs: f,
indices: u
};
var C = .5 * n, R = Math.max(d, null != r ? r : C), x = [];
for (y = 0; y < j; y++) {
var D = y << 1;
x.push({
x: m[D],
y: m[D + 1]
});
}
var M = [], T = [ 0 ], I = 0;
for (y = 0; y < x.length - 1; y++) {
var w = x[y + 1].x - x[y].x, H = x[y + 1].y - x[y].y, L = Math.sqrt(w * w + H * H);
if (L <= d) {
M.push({
x: 0,
y: 1
});
T.push(I);
} else {
M.push({
x: -H / L,
y: w / L
});
I += L;
T.push(I);
}
}
var E = [], z = [], V = [], N = M[0], W = {
x: x[0].x + N.x * C,
y: x[0].y + N.y * C
}, U = {
x: x[0].x - N.x * C,
y: x[0].y - N.y * C
}, Z = T[0] * o;
e.pushStripPointFunc(E, z, V, W, U, Z, d);
var q = Math.max(1, Math.floor(i));
for (y = 1; y < x.length - 1; y++) {
var Y = x[y], X = M[y - 1], J = M[y], K = x[y].x - x[y - 1].x, Q = x[y].y - x[y - 1].y, $ = Math.sqrt(K * K + Q * Q), ee = $ <= d ? {
x: 0,
y: 0
} : {
x: K / $,
y: Q / $
}, te = x[y + 1].x - x[y].x, ne = x[y + 1].y - x[y].y, oe = Math.sqrt(te * te + ne * ne), ae = oe <= d ? {
x: 0,
y: 0
} : {
x: te / oe,
y: ne / oe
}, ie = ee.x * ae.y - ee.y * ae.x, re = T[y] * o;
if (Math.abs(ie) <= d) {
var ce = {
x: Y.x + J.x * C,
y: Y.y + J.y * C
}, pe = {
x: Y.x - J.x * C,
y: Y.y - J.y * C
};
e.pushStripPointFunc(E, z, V, ce, pe, re, d);
} else {
var fe = {
x: Y.x + X.x * C,
y: Y.y + X.y * C
}, ue = {
x: Y.x + J.x * C,
y: Y.y + J.y * C
}, le = {
x: Y.x - X.x * C,
y: Y.y - X.y * C
}, se = {
x: Y.x - J.x * C,
y: Y.y - J.y * C
}, de = $ < R || oe < R, ye = de ? Math.max(e.renderParamConfig.shortCornerMinArcSegment, q + e.renderParamConfig.shortCornerArcExtraSegment) : q;
e.appendSnakeTurnStripFunc({
turn: ie,
p: Y,
halfW: C,
dPrev: ee,
dNext: ae,
leftPrev: fe,
leftNext: ue,
rightPrev: le,
rightNext: se,
miterLimit: a,
arcCount: ye,
uValue: re,
eps: d,
useShortArc: de,
stripLeft: E,
stripRight: z,
stripU: V
});
}
}
var _e = M[M.length - 1], he = x[x.length - 1], ke = x[x.length - 2], me = he.x - ke.x, Se = he.y - ke.y, Fe = Math.sqrt(me * me + Se * Se), ge = Fe > d ? {
x: me / Fe,
y: Se / Fe
} : {
x: _e.y,
y: -_e.x
}, be = {
x: he.x + _e.x * C,
y: he.y + _e.y * C
}, ve = {
x: he.x - _e.x * C,
y: he.y - _e.y * C
}, Be = T[T.length - 1] * o;
e.pushStripPointFunc(E, z, V, be, ve, Be, d);
for (var Ge = Math.max(C * e.renderParamConfig.tailArcLengthRatio, 2 * d), Oe = e.renderParamConfig.tailTipScale, Pe = Math.max(e.renderParamConfig.tailMinArcSegment, q + e.renderParamConfig.tailArcExtraSegment), Ae = 1; Ae <= Pe; Ae++) {
var je = Ae / Pe, Ce = he.x + ge.x * Ge * je, Re = he.y + ge.y * Ge * je, xe = C * (Oe + (1 - Oe) * Math.cos(je * Math.PI * .5)), De = {
x: Ce + _e.x * xe,
y: Re + _e.y * xe
}, Me = {
x: Ce - _e.x * xe,
y: Re - _e.y * xe
}, Te = (T[T.length - 1] + Ge * je) * o;
e.pushStripPointFunc(E, z, V, De, Me, Te, d);
}
for (y = 0; y < E.length; y++) {
p.push(E[y].x, E[y].y, 0);
p.push(z[y].x, z[y].y, 0);
f.push(V[y], 1);
f.push(V[y], 0);
}
for (y = 0; y < E.length - 1; y++) {
var Ie = 2 * y, we = Ie + 1, He = Ie + 2, Le = Ie + 3;
u.push(Ie, we, He);
u.push(we, Le, He);
}
return {
positions: p,
uvs: f,
indices: u
};
};
};
var n, o, c;
i([ ae.bindAtom("G12_FBlockSnake_RenderParamConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "renderParamConfig", void 0);
i([ ae.bindAtom("G12_FBlockSnake_AppendSnakeTurnStripFunc"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "appendSnakeTurnStripFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_PushStripPointFunc"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "pushStripPointFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_BuildSnakeMeshFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_BuildSnakeMeshFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_BuildSnakePathFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c0035vqMiFA+YTGIZf0rtIO", "G12_FBlockSnake_BuildSnakePathFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_BuildSnakePathFunc = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function(e, t, n) {
for (var o, a, i = [], r = [], c = e.pos && e.pos.length >= 2 ? e.pos : e.idAndPos ? e.idAndPos.slice(1) : [], p = 0; p + 1 < c.length; p += 2) r.push(c[p], c[p + 1]);
if (r.length < 4) {
var f = null !== (o = c[0]) && void 0 !== o ? o : 0, u = null !== (a = c[1]) && void 0 !== a ? a : 0;
r.push(f, u);
var l = Math.max(1, n), s = f, d = u;
1 === t ? d -= l : 3 === t ? d += l : 2 === t ? s -= l : s += l;
r.push(s, d);
}
i.push(r[0], r[1]);
var y = r[0], _ = r[1];
for (p = 2; p < r.length; p += 2) {
for (var h = r[p], k = r[p + 1]; y !== h; ) {
y += h > y ? 1 : -1;
i.push(y, _);
}
for (;_ !== k; ) {
_ += k > _ ? 1 : -1;
i.push(y, _);
}
}
return i;
};
};
return i([ ae.atomClass("G12_FBlockSnake_BuildSnakePathFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_BuildSnakePathFunc = r;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_ClearSnakeGridFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f7826cy30xMprYKRzEUnn7s", "G12_FBlockSnake_ClearSnakeGridFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_ClearSnakeGridFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, n) {
var o = e.snakeBlockDomain.blockCmp, a = e.snakeBlockDomain.snakePathCmp, i = a.sampledPoints[t], r = Math.max(0, i.length / 2 - 1);
if (n <= 0) {
a.headTrimTarget.set(t, r);
var c = e.smoothHeadTrimLogic.runtime;
if (r > a.headTrim[t] && !c.trimmingEidSet.has(t)) {
c.trimmingEidSet.add(t);
c.trimmingEids.push(t);
}
e.refreshSnakeMapDataFunc(t, 0);
} else {
var p = o.totalCount[t], f = e.mathMin(r, Math.max(0, e.renderParamConfig.lastCountTailReserveGrid)), u = Math.max(0, r - f), l = Math.max(0, p - n), s = Math.max(1, p - 1), d = e.mathMin(r, u * l / s);
a.headTrimTarget.set(t, d);
var y = e.smoothHeadTrimLogic.runtime;
if (d > a.headTrim[t] && !y.trimmingEidSet.has(t)) {
y.trimmingEidSet.add(t);
y.trimmingEids.push(t);
}
e.refreshSnakeMapDataFunc(t, n);
}
};
};
var n, o, c, p, f;
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "snakeBlockDomain", void 0);
i([ ae.bindAtom("G12_FBlockSnake_RefreshSnakeMapDataFunc"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "refreshSnakeMapDataFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_SmoothHeadTrimLogic"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "smoothHeadTrimLogic", void 0);
i([ ae.bindAtom("G12_FBlockSnake_RenderParamConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "renderParamConfig", void 0);
i([ ae.bindAtom("G_FAtom_MathMin"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "mathMin", void 0);
return i([ ae.atomClass("G12_FBlockSnake_ClearSnakeGridFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_ClearSnakeGridFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_CreateSnakeBlockEntityFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8ceac+ddtxKkqaCrr3Rw8Fy", "G12_FBlockSnake_CreateSnakeBlockEntityFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_CreateSnakeBlockEntityFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = 1;
return function(n, o) {
var a, i, r, c, p, f, u = o.pos && o.pos.length >= 2 ? o.pos : o.idAndPos ? o.idAndPos.slice(1) : [], l = e.mathMax(1, null !== (c = null !== (i = null === (a = o.size) || void 0 === a ? void 0 : a[0]) && void 0 !== i ? i : null === (r = o.idAndPos) || void 0 === r ? void 0 : r[0]) && void 0 !== c ? c : 1), s = null !== (p = u[0]) && void 0 !== p ? p : 0, d = null !== (f = u[1]) && void 0 !== f ? f : 0, y = e.snakeBlockDomain.create();
e.childOf.addChild(n, y);
var _ = e.snakeBlockDomain.blockCmp, h = e.snakeBlockDomain.uiCmp, k = e.snakeBlockDomain.shapeIdx, m = e.snakeBlockDomain.snakePathCmp, S = o.type;
_.type.set(y, S);
_.colorType.set(y, o.color);
_.count.set(y, o.count);
_.totalCount.set(y, o.count);
_.canCollect.set(y, !0);
_.canThrough.set(y, !1);
_.row.set(y, d);
_.col.set(y, s);
_.sizeH.set(y, l);
_.sizeV.set(y, l);
_.isMaskColor.set(y, !1);
_.dir.set(y, o.dir);
_.destroyOnZero.set(y, !1);
h.anchorX.set(y, .5);
h.anchorY.set(y, .5);
e.snakeBlockDomain.transform.x.set(y, 0);
e.snakeBlockDomain.transform.y.set(y, 0);
h.zIndex.set(y, d);
_.doorBaseSize.set(y, l);
var F = e.getBlockColorByTypesFunc(S, o.color);
k.tintShadow.set(y, F[1]);
k.tintHighlight.set(y, F[2]);
k.tintDarkGamma.set(y, F[3]);
k.tintLightGamma.set(y, F[4]);
var g = "string" == typeof F[0] ? F[0] : F[0][0];
k.rgb.set(y, e.hexColorToNumberFunc(g));
var b = l, v = e.buildSnakePathFunc(o, o.dir, b);
m.controlPoints.set(y, u.slice());
m.sampledPoints.set(y, v);
m.headTrim.set(y, 0);
m.headTrimTarget.set(y, 0);
m.occupiedCells.set(y, []);
m.finalDisappearScale.set(y, 1);
m.finalDisappearElapsed.set(y, 0);
m.finalDisappearPlaying.set(y, 0);
m.pathVersion.set(y, t++);
return y;
};
};
var n, o, c, p, f, u, l;
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "snakeBlockDomain", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G12_FBase_GetBlockColorByTypesFunc"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getBlockColorByTypesFunc", void 0);
i([ ae.bindAtom("G12_FBase_HEXColor2NumberFunc"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "hexColorToNumberFunc", void 0);
i([ ae.bindAtom("G_FAtom_MathMax"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "mathMax", void 0);
i([ ae.bindAtom("G12_FBlockSnake_BuildSnakePathFunc"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "buildSnakePathFunc", void 0);
i([ ae.bindAtom("G12_FBase_LogFunc"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "logFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_CreateSnakeBlockEntityFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_CreateSnakeBlockEntityFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_FinalDisappearTweenLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b9a01veiu5IEK7zRjr9azSP", "G12_FBlockSnake_FinalDisappearTweenLogic");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_FinalDisappearTweenLogic = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
finalDisappearEids: [],
finalDisappearEidSet: new Set(),
pendingFinalDisappearEids: [],
pendingFinalDisappearEidSet: new Set()
};
};
t.prototype.onExecute = function(e, t) {
var n = t.runtime.finalDisappearEids, o = t.runtime.pendingFinalDisappearEids;
if (!(n.length <= 0 && o.length <= 0)) {
var a = this.aGameUpdateLogic.runtime.dt;
if (!(a <= 0)) {
for (var i = this.snakeBlockDomain.snakePathCmp, r = this.snakeBlockDomain.uiCmp, c = this.renderParamConfig.finalDisappearScaleUp, p = this.renderParamConfig.finalDisappearScaleUpDuration, f = this.renderParamConfig.finalDisappearHoldDuration, u = this.renderParamConfig.finalDisappearScaleDownDuration, l = this.renderParamConfig.finalDisappearFadeDuration, s = p + f, d = s + Math.max(u, l), y = Math.max(d, this.renderParamConfig.finalDisappearEffectDuration), _ = o.length - 1; _ >= 0; _--) {
var h = o[_];
if (this.snakeBlockDomain.has(h)) {
if (!(i.headTrimTarget[h] - i.headTrim[h] > 1e-4)) {
t.runtime.pendingFinalDisappearEidSet.delete(h);
o.splice(_, 1);
i.finalDisappearPlaying.set(h, 1);
i.finalDisappearScale.set(h, 1);
i.finalDisappearElapsed.set(h, 0);
r.alpha.set(h, 1);
if (!t.runtime.finalDisappearEidSet.has(h)) {
t.runtime.finalDisappearEidSet.add(h);
n.push(h);
}
}
} else {
t.runtime.pendingFinalDisappearEidSet.delete(h);
o.splice(_, 1);
}
}
for (_ = n.length - 1; _ >= 0; _--) {
h = n[_];
if (this.snakeBlockDomain.has(h) && i.finalDisappearPlaying[h]) {
var k = i.finalDisappearElapsed[h] + a;
i.finalDisappearElapsed.set(h, k);
if (k <= p) {
var m = p > 0 ? k / p : 1;
i.finalDisappearScale.set(h, 1 + (c - 1) * m);
r.alpha.set(h, 1);
} else if (k <= s) {
i.finalDisappearScale.set(h, c);
r.alpha.set(h, 1);
} else {
var S = k - s, F = u > 0 ? Math.min(1, S / u) : 1, g = l > 0 ? Math.min(1, S / l) : 1;
i.finalDisappearScale.set(h, c * (1 - F));
r.alpha.set(h, 1 - g);
if (k >= y) {
t.runtime.finalDisappearEidSet.delete(h);
n.splice(_, 1);
this.snakeBlockDomain.destroy(h);
}
}
} else {
t.runtime.finalDisappearEidSet.delete(h);
n.splice(_, 1);
}
}
}
}
};
var n, o, c, p;
i([ ae.signalStart, ae.onChain, ae.bindAtom("G12_FBase_BGameUpdateSignal"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "aGameUpdateSignal", void 0);
i([ ae.bindAtom("G12_FBase_AGameUpdateLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "aGameUpdateLogic", void 0);
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "snakeBlockDomain", void 0);
i([ ae.bindAtom("G12_FBlockSnake_RenderParamConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "renderParamConfig", void 0);
return i([ ae.atomClass("G12_FBlockSnake_FinalDisappearTweenLogic") ], t);
}(ae.LogicAtom);
n.G12_FBlockSnake_FinalDisappearTweenLogic = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_GetBlockCountFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "71476jAsNBMo53tSJFOVSqB", "G12_FBlockSnake_GetBlockCountFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_GetBlockCountFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this.snakeBlockDomain.blockCmp;
return function(t) {
return e.count[t];
};
};
var n;
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "snakeBlockDomain", void 0);
return i([ ae.atomClass("G12_FBlockSnake_GetBlockCountFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_GetBlockCountFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_GetSnakeBlockZIndexFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5df81IKu0BBO60UuZQUuIm4", "G12_FBlockSnake_GetSnakeBlockZIndexFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_GetSnakeBlockZIndexFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
return e.domain.uiCmp.zIndex[t];
};
};
var n;
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "domain", void 0);
return i([ ae.atomClass("G12_FBlockSnake_GetSnakeBlockZIndexFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_GetSnakeBlockZIndexFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_GetSnakeBodyMaterialFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "89d6eKXK1ZHtZYTS2sQj77Y", "G12_FBlockSnake_GetSnakeBodyMaterialFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_GetSnakeBodyMaterialFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var n = e.domain.shapeIdx.rgb[t] >>> 0, o = (n >> 16 & 255) / 255, a = (n >> 8 & 255) / 255, i = (255 & n) / 255;
return {
url: e.assetConfig.snakeMaterial,
diffuseTexture: e.assetConfig.snakeTexture,
diffuseColor: [ o, a, i, 1 ],
tintParams: e.getBlockTintParamsFunc([ e.domain.shapeIdx.tintShadow[t], e.domain.shapeIdx.tintHighlight[t], e.domain.shapeIdx.tintDarkGamma[t], e.domain.shapeIdx.tintLightGamma[t] ])
};
};
};
var n, o, c;
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FBlockSnake_AssetConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "assetConfig", void 0);
i([ ae.bindAtom("G12_FBase_GetBlockTintParamsFunc"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getBlockTintParamsFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_GetSnakeBodyMaterialFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_GetSnakeBodyMaterialFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_GetSnakeHeadAngleFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d4ca6yJeY1L+ZAaZQ0z0hSy", "G12_FBlockSnake_GetSnakeHeadAngleFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_GetSnakeHeadAngleFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = this.renderCacheStateFunc().headAngleCache;
return function(n) {
var o, a;
if (!e.snakeBlockDomain.has(n)) {
t.delete(n);
return 0;
}
if (e.snakeBlockDomain.blockCmp.count[n] <= 0) return null !== (o = t.get(n)) && void 0 !== o ? o : 0;
var i = e.getSnakeHeadRenderDataFunc(n);
if (0 === i.dx && 0 === i.dy) return null !== (a = t.get(n)) && void 0 !== a ? a : 0;
var r = 180 * Math.atan2(i.dy, -i.dx) / Math.PI + 90;
t.set(n, r);
return r;
};
};
var n, o, c;
i([ ae.bindAtom("G12_FBlockSnake_GetSnakeHeadRenderDataFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getSnakeHeadRenderDataFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "snakeBlockDomain", void 0);
i([ ae.bindAtom("G12_FBlockSnake_RenderCacheStateFunc"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "renderCacheStateFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_GetSnakeHeadAngleFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_GetSnakeHeadAngleFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_GetSnakeHeadMaterialFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3a55cSqkldDDKwfPYfbwMV2", "G12_FBlockSnake_GetSnakeHeadMaterialFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_GetSnakeHeadMaterialFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
return {
url: e.commonDirAsset.blockTintMtl,
tintParams: e.getBlockTintParamsFunc([ e.domain.shapeIdx.tintShadow[t], e.domain.shapeIdx.tintHighlight[t], e.domain.shapeIdx.tintDarkGamma[t], e.domain.shapeIdx.tintLightGamma[t] ])
};
};
};
var n, o, c;
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FBase_CommonDirAsset"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "commonDirAsset", void 0);
i([ ae.bindAtom("G12_FBase_GetBlockTintParamsFunc"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getBlockTintParamsFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_GetSnakeHeadMaterialFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_GetSnakeHeadMaterialFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_GetSnakeHeadRenderDataFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0e994t8F9ZL75jQR62zGQ8E", "G12_FBlockSnake_GetSnakeHeadRenderDataFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_GetSnakeHeadRenderDataFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var n = e.getVisibleSampledPathFunc(t);
if (n.length < 2) return {
x: 0,
y: 0,
dx: 0,
dy: 0
};
var o = n[0], a = n[1];
if (n.length < 4) return {
x: o,
y: a,
dx: 0,
dy: 0
};
for (var i = e.renderParamConfig.headDirectionEpsilon, r = 0, c = 0, p = 2; p + 1 < n.length; p += 2) {
var f = n[p] - o, u = n[p + 1] - a;
if (Math.abs(f) > i || Math.abs(u) > i) {
r = f;
c = u;
break;
}
}
return Math.abs(r) <= i && Math.abs(c) <= i ? {
x: o,
y: a,
dx: 0,
dy: 0
} : {
x: o,
y: a,
dx: r,
dy: c
};
};
};
var n, o;
i([ ae.bindAtom("G12_FBlockSnake_GetVisibleSampledPathFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getVisibleSampledPathFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_RenderParamConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "renderParamConfig", void 0);
return i([ ae.atomClass("G12_FBlockSnake_GetSnakeHeadRenderDataFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_GetSnakeHeadRenderDataFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_GetSnakeHeadXFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a3c48pfnuVGDJz8AGIAE3xl", "G12_FBlockSnake_GetSnakeHeadXFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_GetSnakeHeadXFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var n = e.getSnakeHeadRenderDataFunc(t), o = e.loadBlockDataLogic.runtime, a = o.gridSize, i = o.mapWidth, r = Math.max(1, e.domain.blockCmp.doorBaseSize[t]);
return n.x * a + r * a / 2 - i / 2;
};
};
var n, o, c;
i([ ae.bindAtom("G12_FBlockSnake_GetSnakeHeadRenderDataFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getSnakeHeadRenderDataFunc", void 0);
i([ ae.bindAtom("G12_FBase_LoadBlockDataLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "loadBlockDataLogic", void 0);
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "domain", void 0);
return i([ ae.atomClass("G12_FBlockSnake_GetSnakeHeadXFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_GetSnakeHeadXFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_GetSnakeHeadYFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b9dacXilWFBv62+5A7Gw6tu", "G12_FBlockSnake_GetSnakeHeadYFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_GetSnakeHeadYFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var n = e.getSnakeHeadRenderDataFunc(t), o = e.loadBlockDataLogic.runtime, a = o.gridSize, i = o.mapHeight, r = Math.max(1, e.domain.blockCmp.doorBaseSize[t]);
return -n.y * a - r * a / 2 + i / 2;
};
};
var n, o, c;
i([ ae.bindAtom("G12_FBlockSnake_GetSnakeHeadRenderDataFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getSnakeHeadRenderDataFunc", void 0);
i([ ae.bindAtom("G12_FBase_LoadBlockDataLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "loadBlockDataLogic", void 0);
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "domain", void 0);
return i([ ae.atomClass("G12_FBlockSnake_GetSnakeHeadYFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_GetSnakeHeadYFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_GetSnakeShapeRgbFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7947bzszPhPcKB2Ud4N5bI/", "G12_FBlockSnake_GetSnakeShapeRgbFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_GetSnakeShapeRgbFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
return e.domain.shapeIdx.rgb[t];
};
};
var n;
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "domain", void 0);
return i([ ae.atomClass("G12_FBlockSnake_GetSnakeShapeRgbFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_GetSnakeShapeRgbFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_GetSnakeSpriteHeightFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "69d3aZLcbNN4LDl9y3dqeHa", "G12_FBlockSnake_GetSnakeSpriteHeightFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_GetSnakeSpriteHeightFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, n) {
void 0 === n && (n = -1);
var o = e.constCfg.blockImgHeight * e.domain.blockCmp.doorBaseSize[t] * e.domain.snakePathCmp.finalDisappearScale[t] * e.loadBlockDataLogic.runtime.mapScale;
return n > 0 ? o / e.constCfg.blockImgHeight * n : o;
};
};
var n, o, c;
i([ ae.bindAtom("G12_FBase_ConstCfg"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBase_LoadBlockDataLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "loadBlockDataLogic", void 0);
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "domain", void 0);
return i([ ae.atomClass("G12_FBlockSnake_GetSnakeSpriteHeightFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_GetSnakeSpriteHeightFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_GetSnakeSpriteWidthFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "88a99tZuFZH/qf/ToVMbNxY", "G12_FBlockSnake_GetSnakeSpriteWidthFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_GetSnakeSpriteWidthFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, n) {
void 0 === n && (n = -1);
var o = e.constCfg.blockImgWidth * e.domain.blockCmp.doorBaseSize[t] * e.domain.snakePathCmp.finalDisappearScale[t] * e.loadBlockDataLogic.runtime.mapScale;
return n > 0 ? o / e.constCfg.blockImgWidth * n : o;
};
};
var n, o, c;
i([ ae.bindAtom("G12_FBase_ConstCfg"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBase_LoadBlockDataLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "loadBlockDataLogic", void 0);
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "domain", void 0);
return i([ ae.atomClass("G12_FBlockSnake_GetSnakeSpriteWidthFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_GetSnakeSpriteWidthFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_GetVisibleSampledPathFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4a38aZ7hyVK360Acxl+As69", "G12_FBlockSnake_GetVisibleSampledPathFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var o, a, i = n.call(e), r = [];
try {
for (;(void 0 === t || t-- > 0) && !(o = i.next()).done; ) r.push(o.value);
} catch (e) {
a = {
error: e
};
} finally {
try {
o && !o.done && (n = i.return) && n.call(i);
} finally {
if (a) throw a.error;
}
}
return r;
}, p = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
return e;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_GetVisibleSampledPathFunc = void 0;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = this.renderCacheStateFunc().visiblePathCache;
return function(n, o) {
if (!e.snakeBlockDomain.has(n)) {
t.delete(n);
return [];
}
var a = e.snakeBlockDomain.snakePathCmp, i = a.sampledPoints[n];
if (!i || i.length < 4) {
t.delete(n);
return i ? p(i) : [];
}
if (void 0 === o) {
var r = a.pathVersion[n], c = a.headTrim[n], f = t.get(n);
if (f && f.sampled === i && f.version === r && f.trim === c) return f.points;
}
var u = (i.length >> 1) - 1, l = null != o ? o : a.headTrim[n], s = Math.max(0, Math.min(l, u)), d = e.mathFloor(s), y = s - d, _ = i.length >> 1;
if (d >= u) {
var h = _ - 1 << 1;
return [ i[h], i[h + 1] ];
}
for (var k = d << 1, m = d + 1 << 1, S = i[k], F = i[k + 1], g = [ S + (i[m] - S) * y, F + (i[m + 1] - F) * y ], b = d + 1; b < _; b++) {
var v = b << 1;
g.push(i[v], i[v + 1]);
}
if (g.length >= 6) {
var B = g[0], G = g[1], O = g[2], P = g[3], A = O - B, j = P - G, C = g[4] - O, R = g[5] - P, x = Math.sqrt(A * A + j * j), D = Math.sqrt(C * C + R * R), M = A * R - j * C, T = Math.max(1, e.snakeBlockDomain.blockCmp.doorBaseSize[n]), I = e.constCfg.blockImgWidth * T * e.loadBlockDataLogic.runtime.mapScale, w = e.renderParamConfig.lineWidth > 0 ? e.renderParamConfig.lineWidth : I, H = e.loadBlockDataLogic.runtime.gridSize, L = H > 0 ? Math.min(.5 * w / H, e.renderParamConfig.maxCornerSegLenGrid) : 0;
if (Math.abs(M) > e.renderParamConfig.cornerTurnEpsilon && (x < L || D < L)) {
g[0] = O;
g[1] = P;
g.splice(2, 2);
}
}
void 0 === o && t.set(n, {
sampled: i,
version: a.pathVersion[n],
trim: a.headTrim[n],
points: g
});
return g;
};
};
var n, o, c, f, u, l;
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "snakeBlockDomain", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBase_LoadBlockDataLogic"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "loadBlockDataLogic", void 0);
i([ ae.bindAtom("G12_FBlockSnake_RenderParamConfig"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "renderParamConfig", void 0);
i([ ae.bindAtom("G_FAtom_MathFloor"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "mathFloor", void 0);
i([ ae.bindAtom("G12_FBlockSnake_RenderCacheStateFunc"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "renderCacheStateFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_GetVisibleSampledPathFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_GetVisibleSampledPathFunc = f;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_Load: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e12f6WfLXROboT1T8wgbXov", "G12_FBlockSnake_Load");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_Load = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineLoad = function() {
return {
directories: [ this.assetConfig.resRoot ],
silent: !0,
onlyDownload: !1,
paths: {}
};
};
var n;
i([ ae.bindAtom("G12_FBlockSnake_AssetConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetConfig", void 0);
return i([ ae.atomClass("G12_FBlockSnake_Load") ], t);
}(ae.LoadAtom);
n.G12_FBlockSnake_Load = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_Namespace: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "43c6c+NQPBERKEyOcH7rR6/", "G12_FBlockSnake_Namespace");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "Block Flow三期特性需求_特殊色块-蛇（7）";
(function(e) {
e.Name = "G12";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FBlockSnake"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 15] = "Version";
e.CreateTime = "2026-05-06 11:22:30";
})(e.BundleInfo || (e.BundleInfo = {}));
})(n.G12_FBlockSnake || (n.G12_FBlockSnake = {}));
cc._RF.pop();
}, {} ],
G12_FBlockSnake_OnAfterCreateCollectAniFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d4df6a7/5tI7aJqo85umacQ", "G12_FBlockSnake_OnAfterCreateCollectAniFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_OnAfterCreateCollectAniFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var n;
null === (n = e.simpleBlockDomain.blockCollectCmp.skipCollectPunch) || void 0 === n || n.set(t.collectEid, 1);
var o = t.sourceBlockInfo.eid;
if (!(e.snakeBlockDomain.blockCmp.count[o] > 0)) {
var a = e.finalDisappearTweenLogic.runtime;
if (!e.snakeBlockDomain.snakePathCmp.finalDisappearPlaying[o] && !a.pendingFinalDisappearEidSet.has(o)) {
a.pendingFinalDisappearEidSet.add(o);
a.pendingFinalDisappearEids.push(o);
}
}
};
};
var n, o, c;
i([ ae.bindAtom("G12_FBase_SimpleBlockDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "simpleBlockDomain", void 0);
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "snakeBlockDomain", void 0);
i([ ae.bindAtom("G12_FBlockSnake_FinalDisappearTweenLogic"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "finalDisappearTweenLogic", void 0);
return i([ ae.atomClass("G12_FBlockSnake_OnAfterCreateCollectAniFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_OnAfterCreateCollectAniFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_OnCheckClearMapGridDataAfterCountChangedFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ea303GaIadBUpd9yQj1uHN6", "G12_FBlockSnake_OnCheckClearMapGridDataAfterCountChangedFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_OnCheckClearMapGridDataAfterCountChangedFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
e.clearSnakeGridFunc(t.blockInfo.eid, t.nextCount);
};
};
var n;
i([ ae.bindAtom("G12_FBlockSnake_ClearSnakeGridFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "clearSnakeGridFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_OnCheckClearMapGridDataAfterCountChangedFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_OnCheckClearMapGridDataAfterCountChangedFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_PushStripPointFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5af4butuxpH/qf70g44Z81V", "G12_FBlockSnake_PushStripPointFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_PushStripPointFunc = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function(e, t, n, o, a, i, r) {
var c = e.length - 1;
if (c < 0 || Math.abs(e[c].x - o.x) > r || Math.abs(e[c].y - o.y) > r || Math.abs(t[c].x - a.x) > r || Math.abs(t[c].y - a.y) > r) {
e.push(o);
t.push(a);
n.push(i);
}
};
};
return i([ ae.atomClass("G12_FBlockSnake_PushStripPointFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_PushStripPointFunc = r;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_RefreshSnakeMapAfterLoadSpecialBlockLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "539471i0cNJFZ+1feptxRVm", "G12_FBlockSnake_RefreshSnakeMapAfterLoadSpecialBlockLogic");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], o = 0;
if (n) return n.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && o >= e.length && (e = void 0);
return {
value: e && e[o++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_RefreshSnakeMapAfterLoadSpecialBlockLogic = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e, t, n = this.snakeBlockDomain.blockCmp, o = this.snakeBlockDomain.collect().concat();
try {
for (var a = c(o), i = a.next(); !i.done; i = a.next()) {
var r = i.value;
this.snakeBlockDomain.has(r) && this.refreshSnakeMapDataFunc(r, n.count[r]);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (t = a.return) && t.call(a);
} finally {
if (e) throw e.error;
}
}
};
var n, o, p;
i([ ae.signalEnd, ae.onChain, ae.bindAtom("G12_FBase_LoadSpecialBlockSignal"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "loadSpecialBlockSignal", void 0);
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "snakeBlockDomain", void 0);
i([ ae.bindAtom("G12_FBlockSnake_RefreshSnakeMapDataFunc"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "refreshSnakeMapDataFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_RefreshSnakeMapAfterLoadSpecialBlockLogic") ], t);
}(ae.LogicAtom);
n.G12_FBlockSnake_RefreshSnakeMapAfterLoadSpecialBlockLogic = p;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_RefreshSnakeMapDataFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c1e7crJpt9C9bOQPVguxLU8", "G12_FBlockSnake_RefreshSnakeMapDataFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_RefreshSnakeMapDataFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = new Set();
return function(n, o, a) {
var i, r;
void 0 === a && (a = !1);
var c = e.blockMgrStateFunc(), p = c.mapBlockData, f = e.snakeBlockDomain.blockCmp, u = e.snakeBlockDomain.uiCmp, l = e.snakeBlockDomain.snakePathCmp, s = l.occupiedCells[n], d = e.blockMgrFunc();
if (o <= 0) {
d.clearMapBlockDataByEid(n);
l.occupiedCells.set(n, []);
a || l.pathVersion.set(n, l.pathVersion[n] + 1);
} else {
var y = e.getVisibleSampledPathFunc(n), _ = e.loadBlockDataLogic.runtime, h = _.mapCols, k = _.mapRows, m = _.gridSize, S = c.eidMap2Type.get(n);
if (void 0 !== S) {
var F = c.blockMap.get(S);
if (F) {
var g = e.mathMax(1, f.doorBaseSize[n]), b = [];
t.clear();
for (var v = s.length > 0 ? s : [], B = e.renderParamConfig.occupiedBoundsInitValue, G = B, O = B, P = -1, A = -1, j = 0; j + 1 < y.length; j += 2) for (var C = e.mathFloor(y[j]), R = e.mathFloor(y[j + 1]), x = 0; x < g; x++) for (var D = 0; D < g; D++) {
var M = R + x;
if (!((z = C + D) < 0 || M < 0 || z >= h || M >= k)) {
var T = M * h + z;
if (!t.has(T)) {
t.add(T);
b.push(z, M);
G = e.mathMin(G, z);
O = e.mathMin(O, M);
P = e.mathMax(P, z);
A = e.mathMax(A, M);
}
}
}
if (0 === v.length) {
var I = f.row[n], w = f.col[n], H = f.sizeV[n], L = f.sizeH[n];
for (j = 0; j < H; j++) for (var E = 0; E < L; E++) {
var z;
M = I + j;
(z = w + E) < 0 || M < 0 || z >= h || M >= k || (null === (r = null === (i = p[M]) || void 0 === i ? void 0 : i[z]) || void 0 === r ? void 0 : r.eid) === n && v.push(z, M);
}
}
e.syncSnakeOccupiedFunc(n, F, v, b, h, p);
if (b.length > 0) {
f.col.set(n, G);
f.row.set(n, O);
f.sizeH.set(n, P - G + 1);
f.sizeV.set(n, A - O + 1);
u.width.set(n, (P - G + 1) * m);
u.height.set(n, (A - O + 1) * m);
u.zIndex.set(n, O);
} else {
f.sizeH.set(n, 0);
f.sizeV.set(n, 0);
}
l.occupiedCells.set(n, b);
a || l.pathVersion.set(n, l.pathVersion[n] + 1);
} else l.occupiedCells.set(n, []);
} else l.occupiedCells.set(n, []);
}
};
};
var n, o, c, p, f, u, l, s, d, y;
i([ ae.bindAtom("G12_FBase_BlockMgrStateFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "blockMgrStateFunc", void 0);
i([ ae.bindAtom("G12_FBase_BlockMgrFunc"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "blockMgrFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "snakeBlockDomain", void 0);
i([ ae.bindAtom("G12_FBlockSnake_GetVisibleSampledPathFunc"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "getVisibleSampledPathFunc", void 0);
i([ ae.bindAtom("G12_FBase_LoadBlockDataLogic"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "loadBlockDataLogic", void 0);
i([ ae.bindAtom("G12_FBlockSnake_RenderParamConfig"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "renderParamConfig", void 0);
i([ ae.bindAtom("G_FAtom_MathFloor"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "mathFloor", void 0);
i([ ae.bindAtom("G_FAtom_MathMin"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "mathMin", void 0);
i([ ae.bindAtom("G_FAtom_MathMax"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "mathMax", void 0);
i([ ae.bindAtom("G12_FBlockSnake_SyncSnakeOccupiedFunc"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "syncSnakeOccupiedFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_RefreshSnakeMapDataFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_RefreshSnakeMapDataFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_RegisterSnakeBlockLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3e621Pa7RVLxa2tRg9zsSnN", "G12_FBlockSnake_RegisterSnakeBlockLogic");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_RegisterSnakeBlockLogic = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this;
this.blockMgrFunc().register({
type: 7,
domain: this.snakeBlockDomain,
create: function(t, n) {
return e.createSnakeBlockEntityFunc(t, n);
},
onCheckClearMapGridDataAfterCountChanged: this.onCheckClearMapGridDataAfterCountChangedFunc,
onAfterCreateCollectAni: this.onAfterCreateCollectAniFunc
});
};
var n, o, c, p, f, u;
i([ ae.signalStart, ae.onChain, ae.bindAtom("G12_FBase_LoadGamePanelSignal"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "loadGamePanelSignal", void 0);
i([ ae.bindAtom("G12_FBase_BlockMgrFunc"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "blockMgrFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "snakeBlockDomain", void 0);
i([ ae.bindAtom("G12_FBlockSnake_CreateSnakeBlockEntityFunc"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "createSnakeBlockEntityFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_OnCheckClearMapGridDataAfterCountChangedFunc"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "onCheckClearMapGridDataAfterCountChangedFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_OnAfterCreateCollectAniFunc"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "onAfterCreateCollectAniFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_RegisterSnakeBlockLogic") ], t);
}(ae.LogicAtom);
n.G12_FBlockSnake_RegisterSnakeBlockLogic = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_RenderCacheStateFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d14c0LqyxtKx5DVUCJvg5T3", "G12_FBlockSnake_RenderCacheStateFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_RenderCacheStateFunc = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = {
visiblePathCache: new Map(),
bodyMeshPointsCache: new Map(),
headAngleCache: new Map()
};
return function() {
return e;
};
};
return i([ ae.atomClass("G12_FBlockSnake_RenderCacheStateFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_RenderCacheStateFunc = r;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_RenderParamConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3731cCczdxNOaReIxnpM56p", "G12_FBlockSnake_RenderParamConfig");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_RenderParamConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
lineWidth: 0,
uvMul: 1 / 256,
miterLimit: 2.2,
arcSegment: 8,
cornerTurnEpsilon: 1e-4,
headDirectionEpsilon: 1e-4,
meshPointEpsilon: 1e-4,
maxCornerSegLenGrid: 1,
lastCountTailReserveGrid: 1,
occupiedBoundsInitValue: 99999,
finalDisappearScaleUp: 1.35,
finalDisappearScaleUpDuration: .12,
finalDisappearHoldDuration: .04,
finalDisappearScaleDownDuration: .18,
finalDisappearFadeDuration: .18,
finalDisappearEffectDuration: .84,
snakeHeadZIndex: 2,
snakeTailZIndex: 3,
snakeHeadHeightPx: 71,
snakeHeadEyeWidthPx: 47,
snakeHeadEyeHeightPx: 20,
snakeHeadEyeOffsetY: -6,
snakeHeadTongueWidthPx: 20,
snakeHeadTongueHeightPx: 16,
snakeHeadTongueOffsetY: -29,
snakeBodyShortenLineWidthRatio: .3,
shortCornerMinArcSegment: 6,
shortCornerArcExtraSegment: 2,
tailArcLengthRatio: 1.35,
tailTipScale: .28,
tailMinArcSegment: 12,
tailArcExtraSegment: 4
};
};
return i([ ae.atomClass("G12_FBlockSnake_RenderParamConfig") ], t);
}(ae.ConfigAtom);
n.G12_FBlockSnake_RenderParamConfig = r;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_SetSnakeBlockWHFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "53476xeweNC+Z28ffzPvwU7", "G12_FBlockSnake_SetSnakeBlockWHFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_SetSnakeBlockWHFunc = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
e.refreshSnakeMapDataFunc(t, e.getBlockCountFunc(t));
};
};
var n, o;
i([ ae.bindAtom("G12_FBlockSnake_RefreshSnakeMapDataFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "refreshSnakeMapDataFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_GetBlockCountFunc"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "getBlockCountFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_SetSnakeBlockWHFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_SetSnakeBlockWHFunc = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_SmoothHeadTrimLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "309e22YMexFJpuRJbUECSHS", "G12_FBlockSnake_SmoothHeadTrimLogic");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_SmoothHeadTrimLogic = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
trimmingEids: [],
trimmingEidSet: new Set(),
trimStart: {},
trimTarget: {},
trimElapsed: {}
};
};
t.prototype.onExecute = function(e, t) {
var n, o, a = t.runtime.trimmingEids;
if (!(a.length <= 0)) {
var i = this.aGameUpdateLogic.runtime.dt;
if (!(i <= 0)) for (var r = Math.max(.01, this.constCfg.collectFlyTime), c = this.snakeBlockDomain.snakePathCmp, p = this.snakeBlockDomain.blockCmp, f = t.runtime.trimStart, u = t.runtime.trimTarget, l = t.runtime.trimElapsed, s = a.length - 1; s >= 0; s--) {
var d = a[s];
if (this.snakeBlockDomain.has(d)) {
var y = c.headTrim[d], _ = c.headTrimTarget[d];
if (_ <= y) {
t.runtime.trimmingEidSet.delete(d);
delete f[d];
delete u[d];
delete l[d];
a.splice(s, 1);
} else {
if (u[d] !== _) {
f[d] = y;
u[d] = _;
l[d] = 0;
}
var h = Math.floor(y), k = null !== (n = f[d]) && void 0 !== n ? n : y, m = (null !== (o = l[d]) && void 0 !== o ? o : 0) + i;
l[d] = m;
var S = Math.min(1, m / r), F = k + (_ - k) * (1 - (1 - S) * (1 - S));
c.headTrim.set(d, F);
c.pathVersion.set(d, c.pathVersion[d] + 1);
p.count[d] > 0 && (Math.floor(F) !== h || _ - F <= 1e-4) && this.refreshSnakeMapDataFunc(d, p.count[d], !0);
if (_ - F <= 1e-4) {
c.headTrim.set(d, _);
t.runtime.trimmingEidSet.delete(d);
delete f[d];
delete u[d];
delete l[d];
a.splice(s, 1);
}
}
} else {
t.runtime.trimmingEidSet.delete(d);
delete f[d];
delete u[d];
delete l[d];
a.splice(s, 1);
}
}
}
};
var n, o, c, p, f, u;
i([ ae.signalStart, ae.onChain, ae.bindAtom("G12_FBase_BGameUpdateSignal"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "bGameUpdateSignal", void 0);
i([ ae.bindAtom("G12_FBase_AGameUpdateLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "aGameUpdateLogic", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "snakeBlockDomain", void 0);
i([ ae.bindAtom("G12_FBlockSnake_RenderParamConfig"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "renderParamConfig", void 0);
i([ ae.bindAtom("G12_FBlockSnake_RefreshSnakeMapDataFunc"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "refreshSnakeMapDataFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_SmoothHeadTrimLogic") ], t);
}(ae.LogicAtom);
n.G12_FBlockSnake_SmoothHeadTrimLogic = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_SnakeDomain: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "010feCRD2tHs4k6D6HxJLhr", "G12_FBlockSnake_SnakeDomain");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_SnakeDomain = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var n, o, c, p, f;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G12_FBase_BlockCmp"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "blockCmp", void 0);
i([ ae.bindAtom("G12_FBase_UICmp"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiCmp", void 0);
i([ ae.bindAtom("G12_FBase_ShapeIdxCmp"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "shapeIdx", void 0);
i([ ae.bindAtom("G12_FBlockSnake_SnakePathCmp"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "snakePathCmp", void 0);
return i([ ae.atomClass("G12_FBlockSnake_SnakeDomain") ], t);
}(ae.EntityDomainAtom);
n.G12_FBlockSnake_SnakeDomain = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_SnakePathCmp: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d6f0fhvbK5Ks7MnVBDiUANc", "G12_FBlockSnake_SnakePathCmp");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_SnakePathCmp = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
controlPoints: [],
sampledPoints: [],
headTrim: 0,
headTrimTarget: 0,
occupiedCells: [],
finalDisappearScale: 1,
finalDisappearElapsed: 0,
finalDisappearPlaying: 0,
pathVersion: 0
};
};
return i([ ae.atomClass("G12_FBlockSnake_SnakePathCmp") ], t);
}(ae.EntityComponentAtom);
n.G12_FBlockSnake_SnakePathCmp = r;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_SnakeRender: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "01474R3IuNJbIMft6/nWgiw", "G12_FBlockSnake_SnakeRender");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_SnakeRender = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.poolMaxSize = function() {
return 0;
};
t.prototype.defineRender = function() {
var e = this;
return ae.Node({
name: "SnakeBlock",
zIndex: [ this.getSnakeBlockZIndexFunc, [ this.domain.uiCmp, "zIndex" ] ]
}, ae.Mesh({
name: "SnakeBody",
rgb: [ this.getSnakeShapeRgbFunc, [ this.domain.shapeIdx, "rgb" ] ],
alpha: [ function(t) {
return e.domain.uiCmp.alpha[t];
}, [ this.domain.uiCmp, "alpha" ] ],
material: [ this.getSnakeBodyMaterialFunc, [ this.domain.shapeIdx, "rgb" ] ],
mesh: [ this.buildSnakeBodyMeshFunc, [ this.domain.snakePathCmp, "sampledPoints" ], [ this.domain.snakePathCmp, "pathVersion" ], [ this.domain.snakePathCmp, "finalDisappearScale" ] ]
}), ae.Spine({
name: "SnakeOutSpine",
spineUrl: this.assetConfig.snakeOutSpine,
animation: {
name: "out",
loop: !1
},
x: [ function(t) {
var n = e.loadBlockDataLogic.runtime, o = n.gridSize, a = n.mapWidth, i = e.getVisibleSampledPathFunc(t);
if (i.length < 2) return 0;
var r = i.length - 2, c = Math.max(1, e.domain.blockCmp.doorBaseSize[t]);
return i[r] * o + c * o / 2 - .5 * a;
}, [ this.domain.snakePathCmp, "sampledPoints" ], [ this.domain.snakePathCmp, "pathVersion" ], [ this.domain.blockCmp, "doorBaseSize" ], [ this.loadBlockDataLogic, "runtime", "gridSize" ], [ this.loadBlockDataLogic, "runtime", "mapWidth" ] ],
y: [ function(t) {
var n = e.loadBlockDataLogic.runtime, o = n.gridSize, a = n.mapHeight, i = e.getVisibleSampledPathFunc(t);
if (i.length < 2) return 0;
var r = i.length - 2, c = Math.max(1, e.domain.blockCmp.doorBaseSize[t]);
return -i[r + 1] * o - c * o / 2 + .5 * a;
}, [ this.domain.snakePathCmp, "sampledPoints" ], [ this.domain.snakePathCmp, "pathVersion" ], [ this.domain.blockCmp, "doorBaseSize" ], [ this.loadBlockDataLogic, "runtime", "gridSize" ], [ this.loadBlockDataLogic, "runtime", "mapHeight" ] ],
material: [ function(t) {
return {
url: e.commonDirAsset.blockTintSpineMtl,
tintParams: e.getBlockTintParamsFunc([ e.domain.shapeIdx.tintShadow[t], e.domain.shapeIdx.tintHighlight[t], e.domain.shapeIdx.tintDarkGamma[t], e.domain.shapeIdx.tintLightGamma[t] ])
};
}, [ this.domain.shapeIdx, "tintShadow" ], [ this.domain.shapeIdx, "tintHighlight" ], [ this.domain.shapeIdx, "tintDarkGamma" ], [ this.domain.shapeIdx, "tintLightGamma" ] ],
rgb: [ this.getSnakeShapeRgbFunc, [ this.domain.shapeIdx, "rgb" ] ],
zIndex: this.renderParamConfig.snakeHeadZIndex - 1,
active: [ function(t) {
var n = e.domain.snakePathCmp;
return Boolean(n.finalDisappearPlaying[t]) && n.finalDisappearElapsed[t] <= e.renderParamConfig.finalDisappearEffectDuration;
}, [ this.domain.snakePathCmp, "finalDisappearPlaying" ], [ this.domain.snakePathCmp, "finalDisappearElapsed" ] ]
}), ae.Node({
name: "SnakeHead",
angle: [ this.getSnakeHeadAngleFunc, [ this.domain.snakePathCmp, "sampledPoints" ], [ this.domain.snakePathCmp, "pathVersion" ] ],
x: [ this.getSnakeHeadXFunc, [ this.domain.snakePathCmp, "sampledPoints" ], [ this.domain.snakePathCmp, "pathVersion" ] ],
y: [ this.getSnakeHeadYFunc, [ this.domain.snakePathCmp, "sampledPoints" ], [ this.domain.snakePathCmp, "pathVersion" ] ],
alpha: [ function(t) {
return e.domain.uiCmp.alpha[t];
}, [ this.domain.uiCmp, "alpha" ] ],
zIndex: this.renderParamConfig.snakeHeadZIndex
}, ae.Sprite({
name: "SnakeHeadTongue",
img: this.assetConfig.snakeTongueTexture,
trim: !1,
width: [ function(t) {
return e.getSnakeSpriteWidthFunc(t, e.renderParamConfig.snakeHeadTongueWidthPx);
}, [ this.loadBlockDataLogic, "runtime", "mapScale" ], [ this.domain.blockCmp, "doorBaseSize" ], [ this.domain.snakePathCmp, "finalDisappearScale" ] ],
height: [ function(t) {
return e.getSnakeSpriteHeightFunc(t, e.renderParamConfig.snakeHeadTongueHeightPx);
}, [ this.loadBlockDataLogic, "runtime", "mapScale" ], [ this.domain.blockCmp, "doorBaseSize" ], [ this.domain.snakePathCmp, "finalDisappearScale" ] ],
y: [ function(t) {
var n = e.getSnakeSpriteWidthFunc(t), o = e.renderParamConfig.snakeHeadTongueWidthPx - e.renderParamConfig.snakeHeadTongueHeightPx, a = e.constCfg.blockImgWidth - e.renderParamConfig.snakeHeadTongueWidthPx, i = Math.max(1, a - o), r = Math.max(0, (n - o) / i), c = e.renderParamConfig.snakeHeadTongueOffsetY * r, p = e.domain.snakePathCmp;
if (!p.finalDisappearPlaying[t]) return c;
var f = p.finalDisappearElapsed[t];
if (f < .13 || f > .3) return c;
var u = (f - .13) / .17;
return c + 13 * r * (1 - (1 - u) * (1 - u));
}, [ this.loadBlockDataLogic, "runtime", "mapScale" ], [ this.domain.blockCmp, "doorBaseSize" ], [ this.domain.snakePathCmp, "finalDisappearScale" ], [ this.domain.snakePathCmp, "finalDisappearPlaying" ], [ this.domain.snakePathCmp, "finalDisappearElapsed" ] ],
zIndex: -1
}), ae.Sprite({
name: "SnakeHeadImage",
img: this.assetConfig.snakeHeadTexture,
trim: !1,
material: [ this.getSnakeHeadMaterialFunc, [ this.domain.shapeIdx, "tintShadow" ], [ this.domain.shapeIdx, "tintHighlight" ], [ this.domain.shapeIdx, "tintDarkGamma" ], [ this.domain.shapeIdx, "tintLightGamma" ] ],
rgb: [ this.getSnakeShapeRgbFunc, [ this.domain.shapeIdx, "rgb" ] ],
width: [ this.getSnakeSpriteWidthFunc, [ this.loadBlockDataLogic, "runtime", "mapScale" ], [ this.domain.blockCmp, "doorBaseSize" ], [ this.domain.snakePathCmp, "finalDisappearScale" ] ],
height: [ function(t) {
return e.getSnakeSpriteHeightFunc(t, e.renderParamConfig.snakeHeadHeightPx);
}, [ this.loadBlockDataLogic, "runtime", "mapScale" ], [ this.domain.blockCmp, "doorBaseSize" ], [ this.domain.snakePathCmp, "finalDisappearScale" ] ],
zIndex: 0
}), ae.Sprite({
name: "SnakeHeadEye",
img: this.assetConfig.snakeEyeTexture,
trim: !1,
width: [ function(t) {
return e.getSnakeSpriteWidthFunc(t, e.renderParamConfig.snakeHeadEyeWidthPx);
}, [ this.loadBlockDataLogic, "runtime", "mapScale" ], [ this.domain.blockCmp, "doorBaseSize" ], [ this.domain.snakePathCmp, "finalDisappearScale" ] ],
height: [ function(t) {
return e.getSnakeSpriteHeightFunc(t, e.renderParamConfig.snakeHeadEyeHeightPx);
}, [ this.loadBlockDataLogic, "runtime", "mapScale" ], [ this.domain.blockCmp, "doorBaseSize" ], [ this.domain.snakePathCmp, "finalDisappearScale" ] ],
y: this.renderParamConfig.snakeHeadEyeOffsetY,
zIndex: 1
})));
};
t.prototype.defineRenderName = function() {
return null;
};
var n, o, c, p, f, u, l, s, d, y, _, h, k, m, S, F, g, b;
i([ ae.entityRenderer, ae.bindAtom("G12_FBlockSnake_SnakeDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FBase_LoadBlockDataLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "loadBlockDataLogic", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBlockSnake_GetSnakeBlockZIndexFunc"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "getSnakeBlockZIndexFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_GetSnakeShapeRgbFunc"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getSnakeShapeRgbFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_GetSnakeBodyMaterialFunc"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getSnakeBodyMaterialFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_BuildSnakeBodyMeshFunc"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "buildSnakeBodyMeshFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_GetSnakeHeadAngleFunc"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "getSnakeHeadAngleFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_GetSnakeHeadMaterialFunc"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "getSnakeHeadMaterialFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_GetSnakeSpriteWidthFunc"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "getSnakeSpriteWidthFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_GetSnakeSpriteHeightFunc"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "getSnakeSpriteHeightFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_GetSnakeHeadXFunc"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "getSnakeHeadXFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_GetSnakeHeadYFunc"), r("design:type", "function" == typeof (k = "undefined" != typeof ae && ae.AtomTypeInfer) ? k : Object) ], t.prototype, "getSnakeHeadYFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_GetVisibleSampledPathFunc"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "getVisibleSampledPathFunc", void 0);
i([ ae.bindAtom("G12_FBlockSnake_AssetConfig"), r("design:type", "function" == typeof (S = "undefined" != typeof ae && ae.AtomTypeInfer) ? S : Object) ], t.prototype, "assetConfig", void 0);
i([ ae.bindAtom("G12_FBlockSnake_RenderParamConfig"), r("design:type", "function" == typeof (F = "undefined" != typeof ae && ae.AtomTypeInfer) ? F : Object) ], t.prototype, "renderParamConfig", void 0);
i([ ae.bindAtom("G12_FBase_CommonDirAsset"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "commonDirAsset", void 0);
i([ ae.bindAtom("G12_FBase_GetBlockTintParamsFunc"), r("design:type", "function" == typeof (b = "undefined" != typeof ae && ae.AtomTypeInfer) ? b : Object) ], t.prototype, "getBlockTintParamsFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_SnakeRender") ], t);
}(ae.RenderAtom);
n.G12_FBlockSnake_SnakeRender = c;
cc._RF.pop();
}, {} ],
G12_FBlockSnake_SyncSnakeOccupiedFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "653a8cBoaVEaapdbnLUgqFm", "G12_FBlockSnake_SyncSnakeOccupiedFunc");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], o = 0;
if (n) return n.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && o >= e.length && (e = void 0);
return {
value: e && e[o++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G12_FBlockSnake_SyncSnakeOccupiedFunc = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = new Set(), n = new Set(), o = new Set(), a = [], i = [];
return function(r, p, f, u, l, s) {
var d, y, _, h, k, m, S, F, g;
if (f.length === u.length) {
for (var b = !0, v = 0; v + 1 < u.length; v += 2) {
var B = u[v], G = u[v + 1];
if (f[v] !== B || f[v + 1] !== G || (null === (m = null === (k = s[G]) || void 0 === k ? void 0 : k[B]) || void 0 === m ? void 0 : m.eid) !== r) {
b = !1;
break;
}
}
if (b) return;
}
t.clear();
for (v = 0; v + 1 < u.length; v += 2) {
B = u[v], G = u[v + 1];
t.add(G * l + B);
}
n.clear();
o.clear();
for (v = 0; v + 1 < f.length; v += 2) {
B = f[v];
var O = (G = f[v + 1]) * l + B;
if (!t.has(O) && (null === (F = null === (S = s[G]) || void 0 === S ? void 0 : S[B]) || void 0 === F ? void 0 : F.eid) === r) {
s[G][B] = void 0;
n.add(G);
o.add(B);
}
}
for (v = 0; v + 1 < u.length; v += 2) {
B = u[v];
s[G = u[v + 1]] || (s[G] = []);
if ((null === (g = s[G][B]) || void 0 === g ? void 0 : g.eid) !== r) {
s[G][B] = {
eid: r,
blockInfo: p
};
n.add(G);
o.add(B);
}
}
if (0 !== n.size || 0 !== o.size) {
a.length = 0;
i.length = 0;
try {
for (var P = c(n), A = P.next(); !A.done; A = P.next()) {
G = A.value;
a.push(G);
}
} catch (e) {
d = {
error: e
};
} finally {
try {
A && !A.done && (y = P.return) && y.call(P);
} finally {
if (d) throw d.error;
}
}
try {
for (var j = c(o), C = j.next(); !C.done; C = j.next()) {
B = C.value;
i.push(B);
}
} catch (e) {
_ = {
error: e
};
} finally {
try {
C && !C.done && (h = j.return) && h.call(j);
} finally {
if (_) throw _.error;
}
}
var R = a.length, x = i.length, D = Math.max(R, x);
for (v = 0; v < D; v++) {
G = a[v % R], B = i[v % x];
e.resetOneMapBlockDataByDirFunc(G, B);
}
}
};
};
var n;
i([ ae.bindAtom("G12_FBase_ResetOneMapBlockDataByDirFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "resetOneMapBlockDataByDirFunc", void 0);
return i([ ae.atomClass("G12_FBlockSnake_SyncSnakeOccupiedFunc") ], t);
}(ae.FunctionAtom);
n.G12_FBlockSnake_SyncSnakeOccupiedFunc = p;
cc._RF.pop();
}, {} ]
}, {}, [ "G12_FBlockSnake_AeIndex", "G12_FBlockSnake_Namespace", "G12_FBlockSnake_AssetConfig", "G12_FBlockSnake_RenderParamConfig", "G12_FBlockSnake_SnakePathCmp", "G12_FBlockSnake_SnakeDomain", "G12_FBlockSnake_AppendSnakeTurnStripFunc", "G12_FBlockSnake_BuildSnakeMeshFunc", "G12_FBlockSnake_BuildSnakePathFunc", "G12_FBlockSnake_ClearSnakeGridFunc", "G12_FBlockSnake_CreateSnakeBlockEntityFunc", "G12_FBlockSnake_GetBlockCountFunc", "G12_FBlockSnake_GetVisibleSampledPathFunc", "G12_FBlockSnake_OnAfterCreateCollectAniFunc", "G12_FBlockSnake_OnCheckClearMapGridDataAfterCountChangedFunc", "G12_FBlockSnake_PushStripPointFunc", "G12_FBlockSnake_RefreshSnakeMapDataFunc", "G12_FBlockSnake_SetSnakeBlockWHFunc", "G12_FBlockSnake_SyncSnakeOccupiedFunc", "G12_FBlockSnake_BuildSnakeBodyMeshFunc", "G12_FBlockSnake_GetSnakeBlockZIndexFunc", "G12_FBlockSnake_GetSnakeBodyMaterialFunc", "G12_FBlockSnake_GetSnakeHeadAngleFunc", "G12_FBlockSnake_GetSnakeHeadMaterialFunc", "G12_FBlockSnake_GetSnakeHeadRenderDataFunc", "G12_FBlockSnake_GetSnakeHeadXFunc", "G12_FBlockSnake_GetSnakeHeadYFunc", "G12_FBlockSnake_GetSnakeShapeRgbFunc", "G12_FBlockSnake_GetSnakeSpriteHeightFunc", "G12_FBlockSnake_GetSnakeSpriteWidthFunc", "G12_FBlockSnake_RenderCacheStateFunc", "G12_FBlockSnake_Load", "G12_FBlockSnake_FinalDisappearTweenLogic", "G12_FBlockSnake_RefreshSnakeMapAfterLoadSpecialBlockLogic", "G12_FBlockSnake_RegisterSnakeBlockLogic", "G12_FBlockSnake_SmoothHeadTrimLogic", "G12_FBlockSnake_SnakeRender" ]);
//# sourceMappingURL=index.js.map
