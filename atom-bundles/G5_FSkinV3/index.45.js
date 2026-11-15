window.__require = function e(t, n, o) {
function i(r, c) {
if (!n[r]) {
if (!t[r]) {
var p = r.split("/");
p = p[p.length - 1];
if (!t[p]) {
var f = "function" == typeof __require && __require;
if (!c && f) return f(p, !0);
if (a) return a(p, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = p;
}
var l = n[r] = {
exports: {}
};
t[r][0].call(l.exports, function(e) {
return i(t[r][1][e] || e);
}, l, l.exports, e, t, n, o);
}
return n[r].exports;
}
for (var a = "function" == typeof __require && __require, r = 0; r < o.length; r++) i(o[r]);
return i;
}({
G5_FSkinV3_AeIndex: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0326ecpHkZAI5gmqzDiDxUi", "G5_FSkinV3_AeIndex");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3 = void 0;
var o = e("./G5_FSkinV3_Namespace");
Object.defineProperty(n, "G5_FSkinV3", {
enumerable: !0,
get: function() {
return o.G5_FSkinV3;
}
});
cc._RF.pop();
}, {
"./G5_FSkinV3_Namespace": "G5_FSkinV3_Namespace"
} ],
G5_FSkinV3_AnimateMergeLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e9408JKWjhO6aCpmiMPP+rF", "G5_FSkinV3_AnimateMergeLogic");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_AnimateMergeLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t;
console.log("[FSkinV3] AnimateMerge variant triggered");
var n = e.gameDomain.collect()[0];
if (n) {
var o = e.gridDomain.collect()[0];
if (o) {
var i = e.collectConnectedTiles();
if (!(i.length < 2)) {
e.playSound(e.config.streakSound);
for (var a = e.tileDomain.tileData, r = e.tileGlowDomain.tileGlowData, c = e.gameDomain.gameData, p = e.elimDomain.comp, f = e.elimConfig, l = e.getRenderOffset(), u = l.offsetX, d = l.offsetY, s = c.mergeResultValue[n], y = i.length - 1, m = [], _ = 0, g = i.length; _ < g; _++) {
var h = i[_], v = e.calcTilePos(h.row, h.col);
m.push({
x: v.x + u,
y: v.y - d
});
}
var b = m[y], R = [], T = e.elimDomain.collect();
for (_ = 0, g = T.length; _ < g; _++) {
var A = T[_];
0 === p.phase[A] && R.push(A);
}
var F = f.getTexture(s), S = f.moveEnd - f.moveStart;
for (_ = 0; _ < i.length; _++) {
h = i[_];
var G = _ === y, O = m[_], C = e.getColor(a.value[h.eid]), w = f.getTexture(a.value[h.eid]);
e.stopTween(h.eid);
a.isAnimating.set(h.eid, 1);
a.animRotation.set(h.eid, 0);
a.animOffsetX.set(h.eid, 0);
a.animOffsetY.set(h.eid, 0);
a.valueAlpha.set(h.eid, 1);
a.zIndex.set(h.eid, e.zIndexConfig.tileAnimating);
var j = null !== (t = e.tileToGlow.getTargets(h.eid)[0]) && void 0 !== t ? t : null;
if (null !== j) {
e.stopTween(j);
r.alpha.set(j, 1);
r.scale.set(j, 1);
}
j && (G ? e.tween(j, [ [ ae.TweenStepType.To, r, {
alpha: 0
}, f.glowFadeOutDuration, ae.TweenEasing.Linear ], [ ae.TweenStepType.Delay, f.moveStart - f.glowFadeOutDuration ], [ ae.TweenStepType.To, r, {
scale: .001,
alpha: 0
}, 0 ], [ ae.TweenStepType.To, r, {
scale: f.scaleUpTarget,
alpha: 1
}, f.scaleUpDuration, ae.TweenEasing.CubicOut ], [ ae.TweenStepType.To, r, {
scale: 1,
alpha: 0
}, f.scaleDownDuration, ae.TweenEasing.CubicIn ], [ ae.TweenStepType.To, r, {
state: 0,
scale: 1
}, 0 ] ]) : e.tween(j, [ [ ae.TweenStepType.To, r, {
alpha: 0
}, f.glowFadeOutDuration, ae.TweenEasing.Linear ], [ ae.TweenStepType.To, r, {
state: 0
}, 0 ] ]));
if (G) {
a.animScale.set(h.eid, 1);
var V = f.moveStart + f.scaleUpDuration + f.scaleDownDuration, k = [ [ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.To, a, {
animRotation: f.baseRotation,
animAlpha: 0
}, f.baseFadeOutEnd, ae.TweenEasing.SineInOut ], [ ae.TweenStepType.To, a, {
valueAlpha: 0
}, f.valueFadeOutDuration, ae.TweenEasing.Linear ] ] ], [ ae.TweenStepType.To, a, {
value: s,
animRotation: 0,
animAlpha: 0
}, 0 ], [ ae.TweenStepType.Delay, f.moveStart - f.baseFadeOutEnd ], [ ae.TweenStepType.To, a, {
animAlpha: 0,
valueAlpha: 0,
animScale: .001
}, 0 ], [ ae.TweenStepType.To, a, {
animScale: f.scaleUpTarget,
animAlpha: 1,
valueAlpha: 1
}, f.scaleUpDuration, ae.TweenEasing.CubicOut ], [ ae.TweenStepType.To, a, {
animScale: 1
}, f.scaleDownDuration, ae.TweenEasing.CubicIn ] ], I = f.totalDuration - V;
I > 0 && k.push([ ae.TweenStepType.Delay, I ]);
k.push([ ae.TweenStepType.To, a, {
isAnimating: 0,
animRotation: 0,
valueAlpha: 1,
animScale: 1
}, 0 ]);
e.tween(h.eid, k);
} else e.tween(h.eid, [ [ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.To, a, {
animRotation: f.baseRotation,
animAlpha: 0
}, f.baseFadeOutEnd, ae.TweenEasing.SineInOut ], [ ae.TweenStepType.To, a, {
valueAlpha: 0
}, f.valueFadeOutDuration, ae.TweenEasing.Linear ] ] ], [ ae.TweenStepType.To, a, {
value: 0,
isAnimating: 0,
animRotation: 0,
valueAlpha: 1,
zIndex: e.zIndexConfig.tileDefault
}, 0 ] ]);
var P = void 0;
if (R.length > 0) P = R.pop(); else {
P = e.elimDomain.create();
e.childOf.addChild(o, P);
}
var D = C >> 16 & 255, x = C >> 8 & 255, L = 255 & C;
p.row.set(P, h.row);
p.col.set(P, h.col);
p.x.set(P, O.x);
p.y.set(P, O.y);
p.alpha.set(P, 0);
p.srcImageUrl.set(P, w);
p.dstImageUrl.set(P, F);
p.phase.set(P, 1);
var U = e.mathRandomInt(0, f.animNames.length - 1);
p.animName.set(P, f.animNames[U]);
p.efxX.set(P, O.x);
p.efxY.set(P, O.y);
p.efxAlpha.set(P, 1);
p.efxAnimName.set(P, f.efxAnimName);
p.colorR.set(P, D);
p.colorG.set(P, x);
p.colorB.set(P, L);
var B = [];
B.push([ ae.TweenStepType.To, p, {
alpha: 1
}, f.fragmentFadeInEnd, ae.TweenEasing.SineOut ]);
if (G) B.push([ ae.TweenStepType.Delay, f.totalDuration - f.fragmentFadeInEnd ]); else {
var M = i.length - 1 - _, N = f.moveStart - f.fragmentFadeInEnd;
N > 0 && B.push([ ae.TweenStepType.Delay, N ]);
var E = [];
if (M > 1) for (var z = S / M, X = _ + 1; X < i.length; X++) {
var Y = m[X];
E.push([ ae.TweenStepType.To, p, {
x: Y.x,
y: Y.y
}, z, ae.TweenEasing.SineInOut ]);
} else E.push([ ae.TweenStepType.To, p, {
x: b.x,
y: b.y
}, S, ae.TweenEasing.SineInOut ]);
B.push([ ae.TweenStepType.Repeat, 1, E ]);
}
var H = f.totalDuration - f.moveEnd;
H > 0 && B.push([ ae.TweenStepType.Delay, H ]);
B.push([ ae.TweenStepType.To, p, {
phase: 0,
alpha: 0,
efxAlpha: 0,
animName: "",
efxAnimName: ""
}, 0 ]);
e.tween(P, B);
}
}
}
}
};
};
var n, o, c, p, f, l, u, d, s, y, m, _, g, h, v, b, R, T, A;
a([ ae.variantOf, ae.bindAtom("G5_FBase_AnimateMerge"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
a([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gameDomain", void 0);
a([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "tileDomain", void 0);
a([ ae.bindAtom("G5_FBase_TileGlowDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tileGlowDomain", void 0);
a([ ae.bindAtom("G5_FBase_GridDomain"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "gridDomain", void 0);
a([ ae.bindAtom("G5_FBase_CalcTilePos"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "calcTilePos", void 0);
a([ ae.bindAtom("G5_FBase_CollectConnectedTiles"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "collectConnectedTiles", void 0);
a([ ae.bindAtom("G5_FBase_GetRenderOffset"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "getRenderOffset", void 0);
a([ ae.bindAtom("G5_FBase_GetColor"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "getColor", void 0);
a([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "zIndexConfig", void 0);
a([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "playSound", void 0);
a([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "tween", void 0);
a([ ae.bindAtom("G_FAtom_StopTween"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "stopTween", void 0);
a([ ae.bindAtom("G_FAtom_ChildOf"), r("design:type", "function" == typeof (v = "undefined" != typeof ae && ae.AtomTypeInfer) ? v : Object) ], t.prototype, "childOf", void 0);
a([ ae.bindAtom("G_FAtom_MathRandomInt"), r("design:type", "function" == typeof (b = "undefined" != typeof ae && ae.AtomTypeInfer) ? b : Object) ], t.prototype, "mathRandomInt", void 0);
a([ ae.bindAtom("G5_FSkinV3_ElimDomain"), r("design:type", "function" == typeof (R = "undefined" != typeof ae && ae.AtomTypeInfer) ? R : Object) ], t.prototype, "elimDomain", void 0);
a([ ae.bindAtom("G5_FBase_TileToGlow"), r("design:type", "function" == typeof (T = "undefined" != typeof ae && ae.AtomTypeInfer) ? T : Object) ], t.prototype, "tileToGlow", void 0);
a([ ae.bindAtom("G5_FSkinV3_ElimConfig"), r("design:type", "function" == typeof (A = "undefined" != typeof ae && ae.AtomTypeInfer) ? A : Object) ], t.prototype, "elimConfig", void 0);
return a([ ae.atomClass("G5_FSkinV3_AnimateMergeLogic") ], t);
}(ae.VariantAtom);
n.G5_FSkinV3_AnimateMergeLogic = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_CalcFontSizeFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0bf31Y1jwlAk4wo7naC1QO1", "G5_FSkinV3_CalcFontSizeFunc");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_CalcFontSizeFunc = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = {
1: 48,
2: 46,
3: 44,
4: 42,
5: 40
};
return function(n) {
var o, i = e.formatNumber(n, e.config.formatThreshold).length;
return (null !== (o = t[i]) && void 0 !== o ? o : 34) + -10;
};
};
var n, o, c;
a([ ae.variantOf, ae.bindAtom("G5_FBase_CalcFontSize"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
a([ ae.bindAtom("G5_FBase_FormatNumber"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "formatNumber", void 0);
return a([ ae.atomClass("G5_FSkinV3_CalcFontSizeFunc") ], t);
}(ae.VariantAtom);
n.G5_FSkinV3_CalcFontSizeFunc = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_ComboPopupRender: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "26253QC3MxOO64u62hcTxPd", "G5_FSkinV3_ComboPopupRender");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_ComboPopupRender = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.renderCondition = function() {
return !0;
};
t.prototype.defineRender = function() {
var e = this, t = this.comboPopupDomain.comboPopupData, n = this.gameDomain.gameData, o = this.comboPopupConfig, i = o.minCount;
return ae.Node({
name: "ComboPopupRoot",
zIndex: 200,
anchorX: .5,
anchorY: .5,
x: [ function(o) {
var i = e.calcTilePos(t.row[o], t.col[o]), a = e.gameDomain.collect()[0], r = a ? n.renderOffsetX[a] : 0, c = i.x + r;
c - 240 < -e.config.gridWidth / 2 ? c = -e.config.gridWidth / 2 + 240 : c + 240 > e.config.gridWidth / 2 && (c = e.config.gridWidth / 2 - 240);
return c;
}, [ t, "row" ], [ t, "col" ], [ n, "renderOffsetX" ] ],
y: [ function(i) {
var a = e.calcTilePos(t.row[i], t.col[i]), r = e.gameDomain.collect()[0], c = r ? n.renderOffsetY[r] : 0;
return a.y - c + o.baseYOffset;
}, [ t, "row" ], [ t, "col" ], [ n, "renderOffsetY" ] ],
alpha: [ function(e) {
return t.alpha[e];
}, [ t, "alpha" ] ]
}, ae.Spine({
name: "ComboSpine",
spineUrl: this.config.comboSpine,
scaleX: o.spineScale,
scaleY: o.spineScale,
anchorX: .5,
anchorY: .5,
animation: {
name: [ function(e) {
return t.animName[e];
}, [ t, "animName" ] ],
loop: !1
},
event: {
complete: this.comboAnimCompleteRouter
},
slots: {
hook_num: Object.assign(ae.Text({
name: "ComboNumber",
text: [ function(e) {
return t.comboCount[e] >= i ? "×" + t.comboCount[e] : "";
}, [ t, "comboCount" ] ],
fontSize: o.fontSize,
rgb: o.fontColor,
enableBold: !0,
enableItalic: !0,
anchorX: .5,
anchorY: .5,
outline: {
rgb: o.glowColor,
width: 4
}
}), {
bindAlpha: "slot_num"
})
}
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var n, o, c, p, f, l;
a([ ae.entityRenderer, ae.bindAtom("G5_FBase_ComboPopupDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "comboPopupDomain", void 0);
a([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
a([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gameDomain", void 0);
a([ ae.bindAtom("G5_FBase_CalcTilePos"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "calcTilePos", void 0);
a([ ae.bindAtom("G5_FBase_ComboPopupConfig"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "comboPopupConfig", void 0);
a([ ae.bindAtom("G5_FBase_ComboAnimCompleteRouter"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "comboAnimCompleteRouter", void 0);
return a([ ae.atomClass("G5_FSkinV3_ComboPopupRender") ], t);
}(ae.RenderAtom);
n.G5_FSkinV3_ComboPopupRender = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_ConnectionLineConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b91b2d4ChhGYJ+7pJP1TTXE", "G5_FSkinV3_ConnectionLineConfig");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_ConnectionLineConfig = void 0;
var r = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url("G5_FSkinV3");
return {
lineStraight: e("res/textures/line_hengshu"),
lineDiagonal: e("res/textures/line_xie"),
lineStraightHeight: 20,
lineDiagonalHeight: 18,
frameXuanzhong: e("res/textures/frame_xuanzhong")
};
};
return a([ ae.atomClass("G5_FSkinV3_ConnectionLineConfig") ], t);
}(ae.ConfigAtom);
n.G5_FSkinV3_ConnectionLineConfig = r;
cc._RF.pop();
}, {} ],
G5_FSkinV3_ConnectionLineRender: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "13a6esBy8hKmbQs40ahg5+N", "G5_FSkinV3_ConnectionLineRender");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var o, i, a = n.call(e), r = [];
try {
for (;(void 0 === t || t-- > 0) && !(o = a.next()).done; ) r.push(o.value);
} catch (e) {
i = {
error: e
};
} finally {
try {
o && !o.done && (n = a.return) && n.call(a);
} finally {
if (i) throw i.error;
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
n.G5_FSkinV3_ConnectionLineRender = void 0;
var f = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.renderCondition = function() {
return !0;
};
t.prototype.defineRender = function() {
for (var e = this, t = this.config, n = t.gridWidth, o = t.gridHeight, i = this.connectionLineDomain.connectionLineData, a = this.gameDomain.gameData, r = this.tileDomain.tileData, c = this.gameInitLogic.runtime, f = [], l = function(t) {
var n = t;
f.push(ae.Node({
name: "LineSegment_" + n,
anchorX: .5,
anchorY: .5,
x: [ function(t) {
var o = i.dirtyVersion[t], r = e.collectConnectedTiles(o);
if (r.length < n + 2) return 0;
var c = e.calcTilePos(r[n].row, r[n].col).x, p = e.calcTilePos(r[n + 1].row, r[n + 1].col), f = e.gameDomain.collect()[0], l = f ? a.renderOffsetX[f] : 0;
return (c + p.x) / 2 + l;
}, [ i, "dirtyVersion" ], [ a, "renderOffsetX" ], [ a, "renderOffsetY" ] ],
y: [ function(t) {
var o = i.dirtyVersion[t], r = e.collectConnectedTiles(o);
if (r.length < n + 2) return 0;
var c = e.calcTilePos(r[n].row, r[n].col).y, p = e.calcTilePos(r[n + 1].row, r[n + 1].col), f = e.gameDomain.collect()[0], l = f ? a.renderOffsetY[f] : 0;
return (c + p.y) / 2 - l;
}, [ i, "dirtyVersion" ], [ a, "renderOffsetX" ], [ a, "renderOffsetY" ] ],
angle: [ function(t) {
var o = i.dirtyVersion[t], a = e.collectConnectedTiles(o);
if (a.length < n + 2) return 0;
var r = e.calcTilePos(a[n].row, a[n].col), c = r.x, p = r.y, f = e.calcTilePos(a[n + 1].row, a[n + 1].col);
return e.mathAtan2(f.y - p, f.x - c) * (180 / Math.PI);
}, [ i, "dirtyVersion" ], [ a, "renderOffsetX" ], [ a, "renderOffsetY" ] ],
active: [ function(t) {
return 0 === c.gameState && !!i.active[t] && e.collectConnectedTiles(i.dirtyVersion[t]).length >= n + 2;
}, [ u.gameInitLogic, "runtime", "gameState" ], [ i, "active" ], [ i, "dirtyVersion" ] ]
}, ae.Sprite({
name: "LineStraight_" + n,
active: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
return !(o.length < n + 2 || o[n].row !== o[n + 1].row && o[n].col !== o[n + 1].col);
}, [ i, "dirtyVersion" ] ],
img: u.lineConfig.lineStraight,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
anchorX: .5,
anchorY: .5,
width: [ function(t) {
var o = i.dirtyVersion[t], a = e.collectConnectedTiles(o);
if (a.length < n + 2) return 0;
var r = e.calcTilePos(a[n].row, a[n].col), c = r.x, p = r.y, f = e.calcTilePos(a[n + 1].row, a[n + 1].col);
return e.mathHypot(f.x - c, f.y - p);
}, [ i, "dirtyVersion" ] ],
height: u.lineConfig.lineStraightHeight,
rgb: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
if (o.length < n + 2) return 16777215;
var a = r.value[o[n].eid];
return a <= 0 ? 16777215 : e.config.colorsUp[((a - 1) % 12 + 12) % 12];
}, [ i, "dirtyVersion" ] ]
}), ae.Sprite({
name: "LineDiagExit_" + n,
active: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
return !(o.length < n + 2) && o[n].row !== o[n + 1].row && o[n].col !== o[n + 1].col;
}, [ i, "dirtyVersion" ] ],
img: u.lineConfig.lineDiagonal,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
anchorX: .5,
anchorY: .5,
x: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
if (o.length < n + 2) return 0;
var a = e.calcTilePos(o[n].row, o[n].col), r = a.x, c = a.y, p = e.calcTilePos(o[n + 1].row, o[n + 1].col);
return -e.mathHypot(p.x - r, p.y - c) / 4;
}, [ i, "dirtyVersion" ] ],
width: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
if (o.length < n + 2) return 0;
var a = e.calcTilePos(o[n].row, o[n].col), r = a.x, c = a.y, p = e.calcTilePos(o[n + 1].row, o[n + 1].col);
return e.mathHypot(p.x - r, p.y - c) / 2;
}, [ i, "dirtyVersion" ] ],
height: u.lineConfig.lineDiagonalHeight,
rgb: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
if (o.length < n + 2) return 16777215;
var a = r.value[o[n].eid];
return a <= 0 ? 16777215 : e.config.colorsUp[((a - 1) % 12 + 12) % 12];
}, [ i, "dirtyVersion" ] ]
}), ae.Sprite({
name: "LineDiagEntry_" + n,
active: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
return !(o.length < n + 2) && o[n].row !== o[n + 1].row && o[n].col !== o[n + 1].col;
}, [ i, "dirtyVersion" ] ],
img: u.lineConfig.lineDiagonal,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
anchorX: .5,
anchorY: .5,
x: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
if (o.length < n + 2) return 0;
var a = e.calcTilePos(o[n].row, o[n].col), r = a.x, c = a.y, p = e.calcTilePos(o[n + 1].row, o[n + 1].col);
return e.mathHypot(p.x - r, p.y - c) / 4;
}, [ i, "dirtyVersion" ] ],
width: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
if (o.length < n + 2) return 0;
var a = e.calcTilePos(o[n].row, o[n].col), r = a.x, c = a.y, p = e.calcTilePos(o[n + 1].row, o[n + 1].col);
return e.mathHypot(p.x - r, p.y - c) / 2;
}, [ i, "dirtyVersion" ] ],
height: u.lineConfig.lineDiagonalHeight,
rgb: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
if (o.length < n + 2) return 16777215;
var a = r.value[o[n + 1].eid];
return a <= 0 ? 16777215 : e.config.colorsUp[((a - 1) % 12 + 12) % 12];
}, [ i, "dirtyVersion" ] ]
})));
}, u = this, d = 0; d < 39; d++) l(d);
var s = ae.Node({
name: "FollowLine",
anchorX: .5,
anchorY: .5,
x: [ function(e) {
return (i.lastTileLocalX[e] + i.touchLocalX[e]) / 2;
}, [ i, "lastTileLocalX" ], [ i, "touchLocalX" ] ],
y: [ function(e) {
return (i.lastTileLocalY[e] + i.touchLocalY[e]) / 2;
}, [ i, "lastTileLocalY" ], [ i, "touchLocalY" ] ],
angle: [ function(t) {
var n = i.lastTileLocalX[t], o = i.lastTileLocalY[t], a = i.touchLocalX[t] - n, r = i.touchLocalY[t] - o;
return e.mathAtan2(r, a) * (180 / Math.PI);
}, [ i, "lastTileLocalX" ], [ i, "lastTileLocalY" ], [ i, "touchLocalX" ], [ i, "touchLocalY" ] ],
active: [ function(e) {
return 0 === c.gameState && i.active[e];
}, [ this.gameInitLogic, "runtime", "gameState" ], [ i, "active" ] ]
}, ae.Sprite({
name: "FollowLineSprite",
img: this.lineConfig.lineStraight,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
anchorX: .5,
anchorY: .5,
width: [ function(t) {
var n = i.lastTileLocalX[t], o = i.lastTileLocalY[t], a = i.touchLocalX[t] - n, r = i.touchLocalY[t] - o;
return e.mathHypot(a, r);
}, [ i, "lastTileLocalX" ], [ i, "lastTileLocalY" ], [ i, "touchLocalX" ], [ i, "touchLocalY" ] ],
height: this.lineConfig.lineStraightHeight,
rgb: [ function(t) {
var n = i.dirtyVersion[t], o = e.collectConnectedTiles(n);
if (o.length < 1) return 16777215;
var a = r.value[o[o.length - 1].eid];
return a <= 0 ? 16777215 : e.config.colorsUp[((a - 1) % 12 + 12) % 12];
}, [ i, "dirtyVersion" ] ]
}));
return ae.Node.apply(ae, p([ {
name: "ConnectionLineRoot",
zIndex: [ function(e) {
return i.zIndex[e];
}, [ i, "zIndex" ] ],
width: n,
height: o,
anchorX: .5,
anchorY: .5
} ], f, [ s ]));
};
t.prototype.defineRenderName = function() {
return null;
};
var n, o, c, f, l, u, d, s, y, m, _, g, h;
a([ ae.entityRenderer, ae.bindAtom("G5_FBase_ConnectionLineDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "connectionLineDomain", void 0);
a([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
a([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "config", void 0);
a([ ae.bindAtom("G5_FBase_CalcTilePos"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "calcTilePos", void 0);
a([ ae.bindAtom("G5_FBase_GetColor"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "getColor", void 0);
a([ ae.bindAtom("G5_FBase_CollectConnectedTiles"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "collectConnectedTiles", void 0);
a([ ae.bindAtom("G_FAtom_MathHypot"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "mathHypot", void 0);
a([ ae.bindAtom("G_FAtom_MathAtan2"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "mathAtan2", void 0);
a([ ae.bindAtom("G_FAtom_MathSqrt"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "mathSqrt", void 0);
a([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "gameDomain", void 0);
a([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "zIndexConfig", void 0);
a([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "gameInitLogic", void 0);
a([ ae.bindAtom("G5_FSkinV3_ConnectionLineConfig"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "lineConfig", void 0);
return a([ ae.atomClass("G5_FSkinV3_ConnectionLineRender") ], t);
}(ae.RenderAtom);
n.G5_FSkinV3_ConnectionLineRender = f;
cc._RF.pop();
}, {} ],
G5_FSkinV3_ElimComp: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "539ack/u4VB87k6U41t15Tk", "G5_FSkinV3_ElimComp");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_ElimComp = void 0;
var r = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
row: -1,
col: -1,
x: 0,
y: 0,
animName: "",
alpha: 1,
srcImageUrl: "",
dstImageUrl: "",
efxX: 0,
efxY: 0,
efxAnimName: "",
efxAlpha: 0,
colorR: 255,
colorG: 255,
colorB: 255,
phase: 0
};
};
return a([ ae.atomClass("G5_FSkinV3_ElimComp") ], t);
}(ae.EntityComponentAtom);
n.G5_FSkinV3_ElimComp = r;
cc._RF.pop();
}, {} ],
G5_FSkinV3_ElimConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "60603rylIlJc7iovCblZUbP", "G5_FSkinV3_ElimConfig");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_ElimConfig = void 0;
var r = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url("G5_FSkinV3"), t = [ 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096 ];
return {
animNames: [ "in1", "in2", "in3" ],
efxAnimName: "in_efx",
totalDuration: .72,
fragmentFadeInEnd: .03,
moveStart: .3,
moveEnd: .65,
baseFadeOutEnd: .23,
baseRotation: 0,
glowFadeOutDuration: .03,
scaleUpDuration: .26,
scaleUpTarget: 1.2,
scaleDownDuration: .16,
valueFadeOutDuration: .03,
getTexture: function(n) {
return e("res/textures/elimination/" + t[((n - 1) % 12 + 12) % 12] + "_frame1");
}
};
};
return a([ ae.atomClass("G5_FSkinV3_ElimConfig") ], t);
}(ae.ConfigAtom);
n.G5_FSkinV3_ElimConfig = r;
cc._RF.pop();
}, {} ],
G5_FSkinV3_ElimDomain: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "25348fe6FpAGoNIl+Nd2ZHM", "G5_FSkinV3_ElimDomain");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_ElimDomain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var n, o;
a([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "transform", void 0);
a([ ae.bindAtom("G5_FSkinV3_ElimComp"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "comp", void 0);
return a([ ae.atomClass("G5_FSkinV3_ElimDomain") ], t);
}(ae.EntityDomainAtom);
n.G5_FSkinV3_ElimDomain = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_ElimRender: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b0c64bXaq1DEr6KoMAE+Zxr", "G5_FSkinV3_ElimRender");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_ElimRender = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
for (var e = this.elimDomain.comp, t = {}, n = 1; n <= 8; n++) {
t["hook_up_kuai" + n] = Object.assign(ae.Sprite({
name: "UpKuai" + n,
img: [ function(t) {
return e.srcImageUrl[t];
}, [ e, "srcImageUrl" ] ]
}), {
bindAlpha: "slot_up_kuai" + n
});
t["hook_down_kuai" + n] = Object.assign(ae.Sprite({
name: "DownKuai" + n,
img: [ function(t) {
return e.dstImageUrl[t];
}, [ e, "dstImageUrl" ] ]
}), {
bindAlpha: "slot_down_kuai" + n
});
}
return ae.Node({
name: "ElimRoot",
zIndex: this.zIndexConfig.elimination
}, ae.Spine({
name: "ElimEffectBg",
spineUrl: this.config.eliminationSpine,
x: [ function(t) {
return e.efxX[t];
}, [ e, "efxX" ] ],
y: [ function(t) {
return e.efxY[t];
}, [ e, "efxY" ] ],
anchorX: .5,
anchorY: .5,
zIndex: this.zIndexConfig.elimination - 1,
alpha: [ function(t) {
return e.efxAlpha[t];
}, [ e, "efxAlpha" ] ],
rgb: [ function(t) {
return (255 & Math.round(e.colorR[t])) << 16 | (255 & Math.round(e.colorG[t])) << 8 | 255 & Math.round(e.colorB[t]);
}, [ e, "colorR" ], [ e, "colorG" ], [ e, "colorB" ] ],
animation: {
name: [ function(t) {
return e.efxAnimName[t];
}, [ e, "efxAnimName" ] ],
loop: !1
}
}), ae.Spine({
name: "ElimEffect",
spineUrl: this.config.eliminationSpine,
x: [ function(t) {
return e.x[t];
}, [ e, "x" ] ],
y: [ function(t) {
return e.y[t];
}, [ e, "y" ] ],
anchorX: .5,
anchorY: .5,
zIndex: this.zIndexConfig.elimination,
alpha: [ function(t) {
return e.alpha[t];
}, [ e, "alpha" ] ],
animation: {
name: [ function(t) {
return e.animName[t];
}, [ e, "animName" ] ],
loop: !1
},
slots: t
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var n, o, c;
a([ ae.entityRenderer, ae.bindAtom("G5_FSkinV3_ElimDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "elimDomain", void 0);
a([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
a([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "zIndexConfig", void 0);
return a([ ae.atomClass("G5_FSkinV3_ElimRender") ], t);
}(ae.RenderAtom);
n.G5_FSkinV3_ElimRender = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_GameUIRenderLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "920aaNLC3ZL3JL1bShIkGKE", "G5_FSkinV3_GameUIRenderLogic");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_GameUIRenderLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.gameUIRender.NewBlocksLabel.text = "New Blocks";
this.gameUIRender.LabelsNode.y = 63;
this.gameUIRender.MinSpawnCardValue.horizontalAlign = ae.TextHorizontalAlign.CENTER;
this.gameUIRender.MaxSpawnCardValue.horizontalAlign = ae.TextHorizontalAlign.CENTER;
this.gameUIRender.MaxValueCardValue.horizontalAlign = ae.TextHorizontalAlign.CENTER;
this.gameUIRender.GoalCardValue.horizontalAlign = ae.TextHorizontalAlign.CENTER;
this.gameUIRender.ChainPreviewCardUp && (this.gameUIRender.ChainPreviewCardUp.rgb = 16777215);
this.gameUIRender.MinSpawnCardUp && (this.gameUIRender.MinSpawnCardUp.rgb = 16777215);
this.gameUIRender.MaxSpawnCardUp && (this.gameUIRender.MaxSpawnCardUp.rgb = 16777215);
this.gameUIRender.MaxValueCardUp && (this.gameUIRender.MaxValueCardUp.rgb = 16777215);
this.gameUIRender.GoalCardUp && (this.gameUIRender.GoalCardUp.rgb = 16777215);
this.gameUIRender.ChainPreviewCardPlus && (this.gameUIRender.ChainPreviewCardPlus.active = !1);
this.gameUIRender.MinSpawnCardPlus && (this.gameUIRender.MinSpawnCardPlus.active = !1);
this.gameUIRender.MaxSpawnCardPlus && (this.gameUIRender.MaxSpawnCardPlus.active = !1);
this.gameUIRender.MaxValueCardPlus && (this.gameUIRender.MaxValueCardPlus.active = !1);
this.gameUIRender.GoalCardPlus && (this.gameUIRender.GoalCardPlus.active = !1);
this.gameUIRender.ChainPreviewCardUp && (this.gameUIRender.ChainPreviewCardUp.renderType = ae.RenderType.Sliced);
this.gameUIRender.MinSpawnCardUp && (this.gameUIRender.MinSpawnCardUp.renderType = ae.RenderType.Sliced);
this.gameUIRender.MaxSpawnCardUp && (this.gameUIRender.MaxSpawnCardUp.renderType = ae.RenderType.Sliced);
this.gameUIRender.MaxValueCardUp && (this.gameUIRender.MaxValueCardUp.renderType = ae.RenderType.Sliced);
this.gameUIRender.GoalCardUp && (this.gameUIRender.GoalCardUp.renderType = ae.RenderType.Sliced);
if (this.gameUIRender.MinSpawnCardGlow) {
this.gameUIRender.MinSpawnCardGlow.active = !1;
this.gameUIRender.MinSpawnCardGlow.img = this.tileShine.chainPreviewGlow;
}
if (this.gameUIRender.MaxSpawnCardGlow) {
this.gameUIRender.MaxSpawnCardGlow.active = !1;
this.gameUIRender.MaxSpawnCardGlow.img = this.tileShine.chainPreviewGlow;
}
if (this.gameUIRender.MaxValueCardGlow) {
this.gameUIRender.MaxValueCardGlow.active = !1;
this.gameUIRender.MaxValueCardGlow.img = this.tileShine.chainPreviewGlow;
}
if (this.gameUIRender.GoalCardGlow) {
this.gameUIRender.GoalCardGlow.active = !1;
this.gameUIRender.GoalCardGlow.img = this.tileShine.chainPreviewGlow;
}
if (this.gameUIRender.ChainPreviewCardGlow) {
this.gameUIRender.ChainPreviewCardGlow.active = !1;
this.gameUIRender.ChainPreviewCardGlow.img = this.tileShine.chainPreviewGlow;
}
this.gameUIRender.crown && (this.gameUIRender.crown.y = 41);
this.gameUIRender.ScoreText.fontSize = 43;
this.gameUIRender.ScoreText.spacingX = 5;
this.gameUIRender.ScoreText.verticalAlign = ae.TextVerticalAlign.CENTER;
this.gameUIRender.ChainPreviewCardValue.spacingX = 2;
this.gameUIRender.MinSpawnCardValue.spacingX = 2;
this.gameUIRender.MaxSpawnCardValue.spacingX = 2;
this.gameUIRender.MaxValueCardValue.spacingX = 2;
this.gameUIRender.GoalCardValue.spacingX = 2;
};
var n, o;
a([ ae.onChain, ae.bindAtom("G5_FBase_GameUIRender"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameUIRender", void 0);
a([ ae.bindAtom("G5_FSkinV3_TileShineConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileShine", void 0);
return a([ ae.atomClass("G5_FSkinV3_GameUIRenderLogic") ], t);
}(ae.LogicAtom);
n.G5_FSkinV3_GameUIRenderLogic = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_GoalAnimConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "01f0bwzM8NH7beIKxPWY8M0", "G5_FSkinV3_GoalAnimConfig");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_GoalAnimConfig = void 0;
var r = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url("G5_FSkinV3"), t = [ 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096 ];
return {
spineUrl: e("res/spines/gameplay_loading"),
getTexture: function(n) {
return e("res/textures/elimination/" + t[((n - 1) % 12 + 12) % 12] + "_frame1");
}
};
};
return a([ ae.atomClass("G5_FSkinV3_GoalAnimConfig") ], t);
}(ae.ConfigAtom);
n.G5_FSkinV3_GoalAnimConfig = r;
cc._RF.pop();
}, {} ],
G5_FSkinV3_GoalAnimRenderLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b3570WQOldP5alIOqM9Kuhm", "G5_FSkinV3_GoalAnimRenderLogic");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_GoalAnimRenderLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.goalAnimRender.FlyBlockFrameUp.width = 136;
this.goalAnimRender.FlyBlockFrameUp.height = 136;
this.goalAnimRender.FlyBlockValue.spacingX = 2;
};
var n;
a([ ae.onChain, ae.bindAtom("G5_FSkinV3_GoalAnimRender"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "goalAnimRender", void 0);
return a([ ae.atomClass("G5_FSkinV3_GoalAnimRenderLogic") ], t);
}(ae.LogicAtom);
n.G5_FSkinV3_GoalAnimRenderLogic = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_GoalAnimRender: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4c4a4B99DZD9o21hqmtcgdO", "G5_FSkinV3_GoalAnimRender");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_GoalAnimRender = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.renderCondition = function() {
return !0;
};
t.prototype.defineRender = function() {
for (var e = this, t = this.goalAnimDomain.goalAnimData, n = this.config, o = n.gridWidth, i = n.tileSize, a = n.tileCardScale, r = n.gap, c = n.formatThreshold, p = i * a, f = this.skinConfig.getTexture, l = {}, u = 1; u <= 8; u++) l["hook_kuai" + u] = Object.assign(ae.Sprite({
name: "LiziKuai" + u,
img: [ function(e) {
return f(t.flyBlockValue[e]);
}, [ t, "flyBlockValue" ] ]
}), {
bindAlpha: "slot_kuai" + u
});
return ae.Node({
name: "GoalAnimRoot",
zIndex: 1100,
y: [ function() {
return 645 + e.adapterLogic.runtime.targetUIOffsetY + e.adapterLogic.runtime.extendHeight / 2;
}, [ this.adapterLogic, "runtime", "targetUIOffsetY" ], [ this.adapterLogic, "runtime", "extendHeight" ] ],
width: o,
height: p,
active: [ function(e) {
return t.progressAnimPlaying[e];
}, [ t, "progressAnimPlaying" ] ]
}, ae.Spine({
name: "TuoweiLeftSpine",
spineUrl: this.skinConfig.spineUrl,
anchorX: .5,
anchorY: .5,
zIndex: -2,
active: [ function(e) {
return Boolean(t.tuoweiLeftAnimName[e]);
}, [ t, "tuoweiLeftAnimName" ] ],
rgb: [ function(n) {
return e.getColor(t.flyBlockValue[n]);
}, [ t, "flyBlockValue" ] ],
animation: {
name: [ function(e) {
return t.tuoweiLeftAnimName[e];
}, [ t, "tuoweiLeftAnimName" ] ],
loop: !1
}
}), ae.Spine({
name: "TuoweiRightSpine",
spineUrl: this.skinConfig.spineUrl,
anchorX: .5,
anchorY: .5,
scaleX: -1,
zIndex: -2,
active: [ function(e) {
return Boolean(t.tuoweiRightAnimName[e]);
}, [ t, "tuoweiRightAnimName" ] ],
rgb: [ function(n) {
return e.getColor(t.flyBlockValue[n]);
}, [ t, "flyBlockValue" ] ],
animation: {
name: [ function(e) {
return t.tuoweiRightAnimName[e];
}, [ t, "tuoweiRightAnimName" ] ],
loop: !1
}
}), ae.Spine({
name: "CenterHouSpine",
spineUrl: this.skinConfig.spineUrl,
anchorX: .5,
anchorY: .5,
zIndex: -1,
active: [ function(e) {
return Boolean(t.houSpineAnimName[e]);
}, [ t, "houSpineAnimName" ] ],
rgb: [ function(n) {
return e.getColor(t.flyBlockValue[n]);
}, [ t, "flyBlockValue" ] ],
animation: {
name: [ function(e) {
return t.houSpineAnimName[e];
}, [ t, "houSpineAnimName" ] ],
loop: !1
}
}), ae.Spine({
name: "CenterQianSpine",
spineUrl: this.skinConfig.spineUrl,
anchorX: .5,
anchorY: .5,
zIndex: 1,
active: [ function(e) {
return Boolean(t.qianSpineAnimName[e]);
}, [ t, "qianSpineAnimName" ] ],
animation: {
name: [ function(e) {
return t.qianSpineAnimName[e];
}, [ t, "qianSpineAnimName" ] ],
loop: !1
}
}), ae.Spine({
name: "CenterLiziSpine",
spineUrl: this.skinConfig.spineUrl,
anchorX: .5,
anchorY: .5,
zIndex: 2,
active: [ function(e) {
return Boolean(t.centerLiziAnimName[e]);
}, [ t, "centerLiziAnimName" ] ],
animation: {
name: [ function(e) {
return t.centerLiziAnimName[e];
}, [ t, "centerLiziAnimName" ] ],
loop: !1
},
slots: l
}), ae.Node({
name: "FlyBlock",
x: [ function(e) {
return t.flyBlockOffsetX[e];
}, [ t, "flyBlockOffsetX" ] ],
y: [ function(e) {
return t.flyBlockOffsetY[e];
}, [ t, "flyBlockOffsetY" ] ],
scale: [ function(e) {
return t.flyBlockScale[e];
}, [ t, "flyBlockScale" ] ],
alpha: [ function(e) {
return t.flyBlockAlpha[e];
}, [ t, "flyBlockAlpha" ] ],
active: [ function(e) {
return t.flyBlockVisible[e];
}, [ t, "flyBlockVisible" ] ],
zIndex: 10
}, ae.Sprite({
name: "FlyBlockFrameDown",
img: this.frameAsset.frameDown,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: 130,
height: 130,
rgb: [ function(n) {
return e.getColor(t.flyBlockValue[n]);
}, [ t, "flyBlockValue" ] ]
}), ae.Sprite({
name: "FlyBlockFrameUp",
img: this.frameAsset.frameUp,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: 118,
height: 120,
rgb: [ function(n) {
return e.getColorUp(t.flyBlockValue[n]);
}, [ t, "flyBlockValue" ] ]
}), ae.Sprite({
name: "FlyBlockFrameGoal",
img: this.config.frameGoalBg
}), ae.Sprite({
name: "FlyBlockCrown",
img: this.config.crown,
y: 64.196,
anchorY: 0,
scale: .77
}), ae.Text({
name: "FlyBlockValue",
text: [ function(n) {
return e.formatNumber(t.flyBlockValue[n], c);
}, [ t, "flyBlockValue" ] ],
font: this.config.numberFont,
fontSize: [ function(n) {
return e.calcFontSize(t.flyBlockValue[n]);
}, [ t, "flyBlockValue" ] ],
rgb: 16777215,
enableBold: !0,
horizontalAlign: ae.TextHorizontalAlign.CENTER
})), ae.Spine({
name: "RightLiziSpine",
spineUrl: this.skinConfig.spineUrl,
anchorX: .5,
anchorY: .5,
x: o / 2 - r - 5 - p / 2,
active: [ function(e) {
return Boolean(t.rightSpineAnimName[e]);
}, [ t, "rightSpineAnimName" ] ],
rgb: [ function(n) {
var o = e.getColor(t.rightTargetOldValue[n]), i = e.getColor(t.rightTargetNewValue[n]), a = t.rightTargetColorProgress[n];
return e.lerpColor(o, i, a);
}, [ t, "rightTargetOldValue" ], [ t, "rightTargetNewValue" ], [ t, "rightTargetColorProgress" ] ],
animation: {
name: [ function(e) {
return t.rightSpineAnimName[e];
}, [ t, "rightSpineAnimName" ] ],
loop: !1
}
}), ae.Spine({
name: "LeftLiziSpine",
spineUrl: this.skinConfig.spineUrl,
anchorX: .5,
anchorY: .5,
x: -o / 2 + r + 5 + p / 2,
active: [ function(e) {
return Boolean(t.leftSpineAnimName[e]);
}, [ t, "leftSpineAnimName" ] ],
rgb: [ function(n) {
var o = e.getColor(t.leftTargetOldValue[n]), i = e.getColor(t.leftTargetNewValue[n]), a = t.leftTargetColorProgress[n];
return e.lerpColor(o, i, a);
}, [ t, "leftTargetOldValue" ], [ t, "leftTargetNewValue" ], [ t, "leftTargetColorProgress" ] ],
animation: {
name: [ function(e) {
return t.leftSpineAnimName[e];
}, [ t, "leftSpineAnimName" ] ],
loop: !1
}
}), ae.Spine({
name: "MaxSpawnLiziSpine",
spineUrl: this.skinConfig.spineUrl,
anchorX: .5,
anchorY: .5,
x: -205,
active: [ function(e) {
return Boolean(t.maxSpawnSpineAnimName[e]);
}, [ t, "maxSpawnSpineAnimName" ] ],
rgb: [ function(n) {
var o = e.getColor(t.maxSpawnOldValue[n]), i = e.getColor(t.maxSpawnNewValue[n]), a = t.maxSpawnColorProgress[n];
return e.lerpColor(o, i, a);
}, [ t, "maxSpawnOldValue" ], [ t, "maxSpawnNewValue" ], [ t, "maxSpawnColorProgress" ] ],
animation: {
name: [ function(e) {
return t.maxSpawnSpineAnimName[e];
}, [ t, "maxSpawnSpineAnimName" ] ],
loop: !1
}
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var n, o, c, p, f, l, u, d, s, y;
a([ ae.entityRenderer, ae.bindAtom("G5_FBase_GoalAnimDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "goalAnimDomain", void 0);
a([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
a([ ae.bindAtom("G5_FSkinV3_GoalAnimConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "skinConfig", void 0);
a([ ae.bindAtom("G5_FBase_FormatNumber"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "formatNumber", void 0);
a([ ae.bindAtom("G5_FBase_GetColor"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getColor", void 0);
a([ ae.bindAtom("G5_FBase_GetColorUp"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "getColorUp", void 0);
a([ ae.bindAtom("G5_FBase_FrameAssetConfig"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "frameAsset", void 0);
a([ ae.bindAtom("G5_FBase_LerpColor"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "lerpColor", void 0);
a([ ae.bindAtom("G5_FBase_AdapterLogic"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "adapterLogic", void 0);
a([ ae.bindAtom("G5_FBase_CalcFontSize"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "calcFontSize", void 0);
return a([ ae.atomClass("G5_FSkinV3_GoalAnimRender") ], t);
}(ae.RenderAtom);
n.G5_FSkinV3_GoalAnimRender = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_GoalDialogRenderLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e0accIgJOJJdp0pjZBSu3KM", "G5_FSkinV3_GoalDialogRenderLogic");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_GoalDialogRenderLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.goalDialogRender.TileFrameGoal.width = this.config.tileSize;
this.goalDialogRender.TileFrameGoal.height = this.config.tileSize;
this.goalDialogRender.crown.anchorY = 0;
this.goalDialogRender.crown.y = .5 * this.config.tileSize - 2;
this.goalDialogRender.TileFrameUpContent.y = -1;
this.goalDialogRender.GoalDialogValue.spacingX = 2;
};
var n, o;
a([ ae.onChain, ae.bindAtom("G5_FBase_GoalDialogRender"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "goalDialogRender", void 0);
a([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
return a([ ae.atomClass("G5_FSkinV3_GoalDialogRenderLogic") ], t);
}(ae.LogicAtom);
n.G5_FSkinV3_GoalDialogRenderLogic = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_GuideConfigLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "180d7NDwjBKg6lyhdfZwu3p", "G5_FSkinV3_GuideConfigLogic");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_GuideConfigLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.guideConfig.steps = [ {
board: [ [ 1, 1, 5, 5 ], [ 3, 3, 1, 8 ], [ 6, 3, 2, 4 ], [ 4, 3, 3, 3 ], [ 1, 3, 4, 1 ] ],
targetTiles: [ {
row: 1,
col: 1
}, {
row: 2,
col: 1
} ],
title: "Start!",
subtitle: "Link two same blocks."
}, {
board: [ [ 1, 5, 5, 5 ], [ 3, 1, 1, 8 ], [ 6, 4, 2, 4 ], [ 4, 3, 2, 3 ], [ 1, 3, 4, 1 ] ],
targetTiles: [ {
row: 1,
col: 1
}, {
row: 1,
col: 2
}, {
row: 2,
col: 2
}, {
row: 3,
col: 2
}, {
row: 3,
col: 1
}, {
row: 2,
col: 1
} ],
title: "Good!",
subtitle: "After link two same blocks,\nyou can link same or higher one."
}, {
board: [ [ 1, 4, 3, 5 ], [ 3, 2, 1, 8 ], [ 6, 5, 7, 4 ], [ 4, 6, 5, 3 ], [ 1, 3, 4, 1 ] ],
targetTiles: [ {
row: 2,
col: 0
}, {
row: 3,
col: 1
}, {
row: 2,
col: 2
}, {
row: 1,
col: 3
} ],
title: "Great!",
subtitle: "You can link all directions blocks."
}, {
board: [ [ 2, 3, 4, 5 ], [ 1, 4, 3, 9 ], [ 3, 2, 1, 4 ], [ 4, 5, 5, 3 ], [ 1, 3, 4, 1 ] ],
targetTiles: [],
title: "Excellent!",
subtitle: "Let's play more blocks."
} ];
};
var n;
a([ ae.onChain, ae.bindAtom("G5_FBase_GuideConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideConfig", void 0);
return a([ ae.atomClass("G5_FSkinV3_GuideConfigLogic") ], t);
}(ae.LogicAtom);
n.G5_FSkinV3_GuideConfigLogic = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_GuideMaskRenderLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "684757XKDhHCL4rHxuTc7BJ", "G5_FSkinV3_GuideMaskRenderLogic");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_GuideMaskRenderLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.guideMaskRender.GuideTitle.width = 760;
this.guideMaskRender.GuideTitle.horizontalAlign = ae.TextHorizontalAlign.CENTER;
this.guideMaskRender.GuideSubtitle.width = 760;
this.guideMaskRender.GuideSubtitle.horizontalAlign = ae.TextHorizontalAlign.CENTER;
this.guideMaskRender.GuideSubtitle.rgb = 12105912;
this.guideMaskRender.GuideSubtitle.lineHeight = 50;
this.guideMaskRender.GuideSubtitle.y = 433;
};
var n;
a([ ae.onChain, ae.bindAtom("G5_FBase_GuideMaskRender"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideMaskRender", void 0);
return a([ ae.atomClass("G5_FSkinV3_GuideMaskRenderLogic") ], t);
}(ae.LogicAtom);
n.G5_FSkinV3_GuideMaskRenderLogic = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_HideRevivePanelVariant: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2fa0ciNKtNCwJFGaJAmWqFn", "G5_FSkinV3_HideRevivePanelVariant");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_HideRevivePanelVariant = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var n = null != t ? t : e.revivePanelDomain.collect()[0];
if (n) {
e.source(n);
var o = e.revivePanelDomain.revivePanelData;
o.countdownAnimationName.set(n, "");
o.buttonAnimationName.set(n, "");
}
};
};
var n, o;
a([ ae.variantOf, ae.bindAtom("G5_FBase_HideRevivePanelFunction"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G5_FBase_RevivePanelDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "revivePanelDomain", void 0);
return a([ ae.atomClass("G5_FSkinV3_HideRevivePanelVariant") ], t);
}(ae.VariantAtom);
n.G5_FSkinV3_HideRevivePanelVariant = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_LevelUpFrontEffectLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "648b9QydbNGkLbQL8ETKyvc", "G5_FSkinV3_LevelUpFrontEffectLogic");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_LevelUpFrontEffectOrder = n.G5_FSkinV3_LevelUpFrontEffectLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.levelUpDomain.collect()[0];
if (e) {
var t = this.levelUpDomain.levelUpData;
t.frontEffectSpineAnim.set(e, "");
this.tween(e, [ [ ae.TweenStepType.Delay, .3 ], [ ae.TweenStepType.To, t, {
frontEffectSpineAnim: "in"
}, 0 ] ]);
}
};
var n, o, c;
a([ ae.onChain, ae.bindAtom("G5_FBase_LevelUpShow"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelUpShow", void 0);
a([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "levelUpDomain", void 0);
a([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tween", void 0);
return a([ ae.atomClass("G5_FSkinV3_LevelUpFrontEffectLogic") ], t);
}(ae.LogicAtom);
n.G5_FSkinV3_LevelUpFrontEffectLogic = c;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var n, o;
a([ ae.orderBefore, ae.bindAtom("G5_FBase_OnLevelUpShow"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "showLogic", void 0);
a([ ae.orderAfter, ae.bindAtom("G5_FSkinV3_LevelUpFrontEffectLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "frontEffectLogic", void 0);
return a([ ae.atomClass("G5_FSkinV3_LevelUpFrontEffectOrder") ], t);
}(ae.OrderAtom);
n.G5_FSkinV3_LevelUpFrontEffectOrder = p;
cc._RF.pop();
}, {} ],
G5_FSkinV3_LevelUpRenderLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3d007ul/h5NbJvh1+V7rDOh", "G5_FSkinV3_LevelUpRenderLogic");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_LevelUpRenderLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.levelUpRender.LevelUpBlockFrame.width = 130;
this.levelUpRender.LevelUpBlockFrame.height = 130;
this.levelUpRender.LevelUpBlockFrame.sizeMode = ae.SizeMode.Custom;
this.levelUpRender.TileFrameUpContent.width = 130;
this.levelUpRender.TileFrameUpContent.height = 130;
this.levelUpRender.TileFrameDown.width = 130;
this.levelUpRender.TileFrameDown.height = 130;
this.levelUpRender.LevelUpBlockValue.spacingX = 2;
var e = this.levelUpDomain.levelUpData;
this.levelUpRender.LevelUpFrontEffect.scale = [ function(t) {
return e.blockScale[t] || 0;
}, [ e, "blockScale" ] ];
this.levelUpRender.LevelUpCrown.y = 63;
};
var n, o;
a([ ae.onChain, ae.bindAtom("G5_FBase_LevelUpRender"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelUpRender", void 0);
a([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "levelUpDomain", void 0);
return a([ ae.atomClass("G5_FSkinV3_LevelUpRenderLogic") ], t);
}(ae.LogicAtom);
n.G5_FSkinV3_LevelUpRenderLogic = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_MergeDelayLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2ccbcPC+mtOEJMfGicDNUkq", "G5_FSkinV3_MergeDelayLogic");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_MergeDelayLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
console.log("[FSkinV3] MergeDelay variant triggered");
e.collectConnectedTiles().length < 2 ? e.tween(t, [ [ ae.TweenStepType.Router, e.mergeCompleteRouter ] ]) : e.tween(t, [ [ ae.TweenStepType.Delay, e.elimConfig.totalDuration ], [ ae.TweenStepType.Router, e.mergeCompleteRouter ] ]);
};
};
var n, o, c, p, f, l;
a([ ae.variantOf, ae.bindAtom("G5_FBase_OnMergeStartDelay"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G5_FBase_CollectConnectedTiles"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "collectConnectedTiles", void 0);
a([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tween", void 0);
a([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "rootDomain", void 0);
a([ ae.bindAtom("G5_FBase_TweenToMergeCompleteRouter"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "mergeCompleteRouter", void 0);
a([ ae.bindAtom("G5_FSkinV3_ElimConfig"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "elimConfig", void 0);
return a([ ae.atomClass("G5_FSkinV3_MergeDelayLogic") ], t);
}(ae.VariantAtom);
n.G5_FSkinV3_MergeDelayLogic = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_MergeDelayVariant: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4f069FZ6yJEQZHX+hZuLnXk", "G5_FSkinV3_MergeDelayVariant");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_MergeDelayVariant = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
e.collectConnectedTiles().length < 2 ? e.tween(t, [ [ ae.TweenStepType.Router, e.mergeCompleteRouter ] ]) : e.tween(t, [ [ ae.TweenStepType.Delay, e.elimConfig.totalDuration ], [ ae.TweenStepType.Router, e.mergeCompleteRouter ] ]);
};
};
var n, o, c, p, f;
a([ ae.variantOf, ae.bindAtom("G5_FBase_OnMergeStartDelay"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G5_FBase_CollectConnectedTiles"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "collectConnectedTiles", void 0);
a([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tween", void 0);
a([ ae.bindAtom("G5_FBase_TweenToMergeCompleteRouter"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "mergeCompleteRouter", void 0);
a([ ae.bindAtom("G5_FSkinV3_ElimConfig"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "elimConfig", void 0);
return a([ ae.atomClass("G5_FSkinV3_MergeDelayVariant") ], t);
}(ae.VariantAtom);
n.G5_FSkinV3_MergeDelayVariant = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_Namespace: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "dc595yXohxHcYkr4MucOv5T", "G5_FSkinV3_Namespace");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3 = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "第三期换肤";
(function(e) {
e.Name = "G5";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FSkinV3"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 45] = "Version";
e.CreateTime = "2026-03-16 10:49:01";
})(e.BundleInfo || (e.BundleInfo = {}));
})(n.G5_FSkinV3 || (n.G5_FSkinV3 = {}));
cc._RF.pop();
}, {} ],
G5_FSkinV3_PlayConnectPulseAnimFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "00256XcejxDxoiZ4kvwW20Y", "G5_FSkinV3_PlayConnectPulseAnimFunc");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_PlayConnectPulseAnimFunc = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, n) {
void 0 === n && (n = !1);
var o = e.tileDomain.tileData, i = e.tileGlowDomain.tileGlowData, a = e.connectPulseConfig, r = a.other, c = e.tileToGlow.getTargets(t)[0];
o.isAnimating.set(t, 1);
o.animScale.set(t, 1);
if (c) {
i.row.set(c, o.row[t]);
i.col.set(c, o.col[t]);
i.alpha.set(c, 1);
i.scale.set(c, 1);
i.state.set(c, 1);
}
e.tween(t, [ [ ae.TweenStepType.To, o, {
animScale: r.expand1.scale
}, r.expand1.duration, ae.TweenEasing.QuadOut ], [ ae.TweenStepType.To, o, {
animScale: r.shrink1.scale
}, r.shrink1.duration, ae.TweenEasing.QuadIn ], [ ae.TweenStepType.To, o, {
animScale: r.shrink2.scale
}, r.shrink2.duration, ae.TweenEasing.QuadOut ], [ ae.TweenStepType.To, o, {
animScale: r.expand2.scale,
isAnimating: 0
}, r.expand2.duration, ae.TweenEasing.QuadIn ] ]);
c && e.tween(c, [ [ ae.TweenStepType.To, i, {
alpha: 1,
scale: r.expand1.scale
}, a.glow.otherDuration, ae.TweenEasing.Linear ], [ ae.TweenStepType.To, i, {
scale: r.shrink1.scale
}, r.shrink1.duration, ae.TweenEasing.QuadIn ], [ ae.TweenStepType.To, i, {
scale: r.shrink2.scale
}, r.shrink2.duration, ae.TweenEasing.QuadOut ], [ ae.TweenStepType.To, i, {
scale: r.expand2.scale
}, r.expand2.duration, ae.TweenEasing.QuadIn ] ]);
};
};
var n, o, c, p, f, l;
a([ ae.variantOf, ae.bindAtom("G5_FBase_PlayConnectPulseAnim"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
a([ ae.bindAtom("G5_FBase_TileGlowDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tileGlowDomain", void 0);
a([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "tween", void 0);
a([ ae.bindAtom("G5_FBase_ConnectPulseConfig"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "connectPulseConfig", void 0);
a([ ae.bindAtom("G5_FBase_TileToGlow"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "tileToGlow", void 0);
return a([ ae.atomClass("G5_FSkinV3_PlayConnectPulseAnimFunc") ], t);
}(ae.VariantAtom);
n.G5_FSkinV3_PlayConnectPulseAnimFunc = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_ResPathConfigLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "156a5rjfLNF7puu4PgiKrv/", "G5_FSkinV3_ResPathConfigLogic");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_ResPathConfigLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.resPathConfig.resPath = "G5_FSkinV3";
};
var n;
a([ ae.onChain, ae.bindAtom("G5_FBase_ResPathConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "resPathConfig", void 0);
return a([ ae.atomClass("G5_FSkinV3_ResPathConfigLogic") ], t);
}(ae.LogicAtom);
n.G5_FSkinV3_ResPathConfigLogic = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_ReviveAnimVariant: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "24c23tvRHJD+YwGGD0QPqv8", "G5_FSkinV3_ReviveAnimVariant");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_ReviveAnimVariant = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
if (!e.onRevive.runtime.isWaitingForReviveAd) {
var n = e.revivePanelDomain.revivePanelData;
if (n.visible[t] && !((e.nowDate() - n.startTime[t]) / 1e3 < 8)) {
e.checkGoalAd();
e.hideRevivePanel(t);
var o = e.rootDomain.collect()[0];
o && e.tween(o, [ [ ae.TweenStepType.Router, e.settingReplayRouter ] ]);
}
}
};
};
var n, o, c, p, f, l, u, d, s;
a([ ae.variantOf, ae.bindAtom("G5_FBase_ReviveAnimationController"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G5_FBase_RevivePanelDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "revivePanelDomain", void 0);
a([ ae.bindAtom("G_FAtom_DateNow"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "nowDate", void 0);
a([ ae.bindAtom("G5_FBase_CheckGoalAd"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "checkGoalAd", void 0);
a([ ae.bindAtom("G5_FBase_HideRevivePanelFunction"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "hideRevivePanel", void 0);
a([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "rootDomain", void 0);
a([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "tween", void 0);
a([ ae.bindAtom("G5_FBase_TweenToSettingReplayRouter"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "settingReplayRouter", void 0);
a([ ae.bindAtom("G5_FBase_OnRevive"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "onRevive", void 0);
return a([ ae.atomClass("G5_FSkinV3_ReviveAnimVariant") ], t);
}(ae.VariantAtom);
n.G5_FSkinV3_ReviveAnimVariant = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_ReviveCountdownDoneLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "66eaaFSRSVJb6PD/3Orjsjb", "G5_FSkinV3_ReviveCountdownDoneLogic");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_ReviveCountdownDoneLogic = n.G5_FSkinV3_ReviveRenderLogic = n.G5_FSkinV3_ReviveSpineCompleteRouter = n.G5_FSkinV3_ReviveSpineComplete = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var n;
a([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "rootDomain", void 0);
return a([ ae.atomClass("G5_FSkinV3_ReviveSpineComplete") ], t);
}(ae.SignalAtom);
n.G5_FSkinV3_ReviveSpineComplete = c;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var n, o;
a([ ae.routeFrom, ae.bindAtom("G5_FBase_GameSignals"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameSignals", void 0);
a([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FSkinV3_ReviveSpineComplete"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "complete", void 0);
return a([ ae.atomClass("G5_FSkinV3_ReviveSpineCompleteRouter") ], t);
}(ae.SignalRouterAtom);
n.G5_FSkinV3_ReviveSpineCompleteRouter = p;
var f = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.reviveRender.aniProgressBar.active = !1;
this.reviveRender.spineNum.event = {
complete: this.completeRouter
};
};
var n, o;
a([ ae.onChain, ae.bindAtom("G5_FBase_ReviveRender"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "reviveRender", void 0);
a([ ae.bindAtom("G5_FSkinV3_ReviveSpineCompleteRouter"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "completeRouter", void 0);
return a([ ae.atomClass("G5_FSkinV3_ReviveRenderLogic") ], t);
}(ae.LogicAtom);
n.G5_FSkinV3_ReviveRenderLogic = f;
var l = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
if (!this.onRevive.runtime.isWaitingForReviveAd) {
var e = this.revivePanelDomain.collect()[0];
if (e && this.revivePanelDomain.revivePanelData.visible[e]) {
this.checkGoalAd();
this.hideRevivePanel(e);
var t = this.rootDomain.collect()[0];
t && this.tween(t, [ [ ae.TweenStepType.Router, this.settingReplayRouter ] ]);
}
}
};
var n, o, c, p, f, l, u, d;
a([ ae.onChain, ae.bindAtom("G5_FSkinV3_ReviveSpineComplete"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "completeSignal", void 0);
a([ ae.bindAtom("G5_FBase_RevivePanelDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "revivePanelDomain", void 0);
a([ ae.bindAtom("G5_FBase_CheckGoalAd"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "checkGoalAd", void 0);
a([ ae.bindAtom("G5_FBase_HideRevivePanelFunction"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "hideRevivePanel", void 0);
a([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "rootDomain", void 0);
a([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "tween", void 0);
a([ ae.bindAtom("G5_FBase_TweenToSettingReplayRouter"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "settingReplayRouter", void 0);
a([ ae.bindAtom("G5_FBase_OnRevive"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "onRevive", void 0);
return a([ ae.atomClass("G5_FSkinV3_ReviveCountdownDoneLogic") ], t);
}(ae.LogicAtom);
n.G5_FSkinV3_ReviveCountdownDoneLogic = l;
cc._RF.pop();
}, {} ],
G5_FSkinV3_TileColorConfigLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7493fGnFjlDWpdt7gD18j6f", "G5_FSkinV3_TileColorConfigLogic");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_TileColorConfigLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.tileColorConfig.colorsDown = [ 1617130, 15767600, 16406432, 12072400, 13313827, 8475341, 13981511, 2010511, 15294512, 4108869, 14107480, 4744417 ];
this.tileColorConfig.colorsUp = [ 5032703, 16758634, 16744890, 14834939, 16402243, 10644730, 15363420, 3464890, 16744789, 5955170, 16736375, 6521087 ];
};
var n;
a([ ae.onChain, ae.bindAtom("G5_FBase_TileColorConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileColorConfig", void 0);
return a([ ae.atomClass("G5_FSkinV3_TileColorConfigLogic") ], t);
}(ae.LogicAtom);
n.G5_FSkinV3_TileColorConfigLogic = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_TileGlowRender: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4686cK1BixDLbhqs+097NXf", "G5_FSkinV3_TileGlowRender");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_TileGlowRender = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.renderCondition = function() {
return !0;
};
t.prototype.defineRender = function() {
var e = this, t = this.tileGlowDomain.tileGlowData, n = this.tileDomain.tileData, o = this.gameDomain.gameData, i = this.shineConfig.shineImages;
return ae.Node({
name: "TileGlowRoot",
x: [ function(n) {
var i = e.calcTilePos(t.row[n], t.col[n]), a = e.gameDomain.collect()[0], r = a ? o.renderOffsetX[a] : 0;
return i.x + r;
}, [ t, "row" ], [ t, "col" ], [ o, "renderOffsetX" ] ],
y: [ function(n) {
var i = e.calcTilePos(t.row[n], t.col[n]), a = e.gameDomain.collect()[0], r = a ? o.renderOffsetY[a] : 0;
return i.y - r;
}, [ t, "row" ], [ t, "col" ], [ o, "renderOffsetY" ] ],
scaleX: [ function(e) {
var n;
return null !== (n = t.scale[e]) && void 0 !== n ? n : 1;
}, [ t, "scale" ] ],
scaleY: [ function(e) {
var n;
return null !== (n = t.scale[e]) && void 0 !== n ? n : 1;
}, [ t, "scale" ] ],
alpha: [ function(e) {
return t.alpha[e];
}, [ t, "alpha" ] ],
zIndex: [ function(n) {
var o = e.zIndexConfig.glow;
return e.isGuideTargetTile(t.row[n], t.col[n]) ? e.zIndexConfig.connectionLineGuide - 1 : o;
}, [ t, "row" ], [ t, "col" ], [ o, "isGuideMode" ], [ this.guideDomain.guideData, "currentStep" ] ],
active: [ function(e) {
return 1 === t.state[e];
}, [ t, "state" ] ]
}, ae.Sprite({
name: "TileShine",
img: [ function(t) {
var o = e.tileToGlow.getSource(t);
if (void 0 === o) return i[0];
var a = n.value[o];
return a <= 0 ? i[0] : i[((a - 1) % 12 + 12) % 12];
}, [ t, "state" ], [ t, "alpha" ] ],
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Simple,
trim: !1,
width: 300,
height: 300,
dstBlendFactor: ae.BlendFactor.One
}), ae.Sprite({
name: "TileFrame2",
img: this.frameAsset.frame2,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: 143,
height: 143,
rgb: 16777215,
alpha: [ function(e) {
var n;
return null !== (n = t.alpha[e]) && void 0 !== n ? n : 0;
}, [ t, "alpha" ] ],
active: !1
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var n, o, c, p, f, l, u, d, s, y;
a([ ae.entityRenderer, ae.bindAtom("G5_FBase_TileGlowDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileGlowDomain", void 0);
a([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
a([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gameDomain", void 0);
a([ ae.bindAtom("G5_FBase_CalcTilePos"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "calcTilePos", void 0);
a([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "zIndexConfig", void 0);
a([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "guideDomain", void 0);
a([ ae.bindAtom("G5_FBase_IsGuideTargetTile"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "isGuideTargetTile", void 0);
a([ ae.bindAtom("G5_FBase_TileToGlow"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "tileToGlow", void 0);
a([ ae.bindAtom("G5_FBase_FrameAssetConfig"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "frameAsset", void 0);
a([ ae.bindAtom("G5_FSkinV3_TileShineConfig"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "shineConfig", void 0);
return a([ ae.atomClass("G5_FSkinV3_TileGlowRender") ], t);
}(ae.RenderAtom);
n.G5_FSkinV3_TileGlowRender = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_TileRender: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f254d9vDwdAwpU/Ia/GFS6W", "G5_FSkinV3_TileRender");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_TileRender = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.renderCondition = function() {
return !0;
};
t.prototype.defineRender = function() {
var e = this, t = this.tileDomain.tileData, n = this.gameDomain.gameData, o = this.config, i = o.tileSize, a = o.formatThreshold, r = this.frameAsset.frameUp, c = this.lineConfig.frameXuanzhong, p = this.zIndexConfig.tileConnected;
return ae.Node({
name: "TileRoot",
width: i,
height: i,
x: [ function(o) {
var i = e.calcTilePos(t.row[o], t.col[o]), a = e.gameDomain.collect()[0], r = a ? n.renderOffsetX[a] : 0;
return i.x + (t.animOffsetX[o] || 0) + r;
}, [ t, "row" ], [ t, "col" ], [ t, "animOffsetX" ], [ n, "renderOffsetX" ] ],
y: [ function(o) {
var i = e.calcTilePos(t.row[o], t.col[o]), a = e.gameDomain.collect()[0], r = a ? n.renderOffsetY[a] : 0;
return i.y + (t.animOffsetY[o] || 0) - r;
}, [ t, "row" ], [ t, "col" ], [ t, "animOffsetY" ], [ n, "renderOffsetY" ] ],
scaleX: [ function(e) {
var n = t.animScale[e] || 1, o = t.isAnimating[e];
return 1 !== t.state[e] || o ? n : 1;
}, [ t, "state" ], [ t, "animScale" ], [ t, "isAnimating" ] ],
scaleY: [ function(e) {
var n = t.animScale[e] || 1, o = t.isAnimating[e];
return 1 !== t.state[e] || o ? n : 1;
}, [ t, "state" ], [ t, "animScale" ], [ t, "isAnimating" ] ],
alpha: [ function(o) {
var i, a = null !== (i = t.animAlpha[o]) && void 0 !== i ? i : 1, r = e.config.gridHeight / 2, c = e.calcTilePos(t.row[o], t.col[o]), p = e.gameDomain.collect()[0], f = p ? n.renderOffsetY[p] : 0;
return c.y + (t.animOffsetY[o] || 0) - f > r ? 0 : a;
}, [ t, "animAlpha" ], [ t, "row" ], [ t, "col" ], [ t, "animOffsetY" ], [ n, "renderOffsetY" ] ],
angle: [ function(e) {
var n;
return null !== (n = t.animRotation[e]) && void 0 !== n ? n : 0;
}, [ t, "animRotation" ] ],
zIndex: [ function(n) {
var o;
return null !== (o = t.zIndex[n]) && void 0 !== o ? o : e.zIndexConfig.tileDefault;
}, [ t, "zIndex" ] ],
active: [ function(e) {
return t.visible[e] && t.value[e] > 0;
}, [ t, "visible" ], [ t, "value" ] ]
}, ae.Sprite({
name: "TileFrameDown",
img: this.frameAsset.frameDown,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: i,
height: i,
rgb: [ function(n) {
return e.getColor(t.value[n]);
}, [ t, "value" ] ]
}), ae.Node({
name: "TileFrameUpContent",
width: i,
height: i
}, ae.Sprite({
name: "TileFrameUpNormal",
img: r,
renderType: ae.RenderType.Simple,
sizeMode: ae.SizeMode.Custom,
trim: !1,
width: i,
height: i,
rgb: 16777215,
hideUntilLoaded: !1,
active: [ function(n) {
var o;
return (null !== (o = t.zIndex[n]) && void 0 !== o ? o : e.zIndexConfig.tileDefault) !== p;
}, [ t, "zIndex" ] ]
}), ae.Sprite({
name: "TileFrameUpSelected",
img: c,
renderType: ae.RenderType.Simple,
sizeMode: ae.SizeMode.Custom,
trim: !1,
width: i,
height: i,
rgb: [ function(n) {
return e.getColorUp(t.value[n]);
}, [ t, "value" ] ],
hideUntilLoaded: !1,
active: [ function(n) {
var o;
return (null !== (o = t.zIndex[n]) && void 0 !== o ? o : e.zIndexConfig.tileDefault) === p;
}, [ t, "zIndex" ] ]
})), ae.Sprite({
name: "TileFrameGoal",
img: this.frameAsset.frameGoal,
rgb: 16777215,
active: [ function(n) {
var o = t.maxValue[n];
return o >= e.config.initialGoalTarget && t.value[n] === o;
}, [ t, "value" ], [ t, "maxValue" ] ]
}, ae.Sprite({
name: "crown",
img: this.config.crown,
scale: .6,
y: 43.47
})), ae.Text({
name: "TileValue",
text: [ function(n) {
return e.formatNumber(t.value[n], a);
}, [ t, "value" ] ],
font: this.config.numberFont,
fontSize: [ function(n) {
return e.calcFontSize(t.value[n]);
}, [ t, "value" ] ],
spacingX: 2,
rgb: 16777215,
alpha: [ function(e) {
var n;
return null !== (n = t.valueAlpha[e]) && void 0 !== n ? n : 1;
}, [ t, "valueAlpha" ] ],
horizontalAlign: ae.TextHorizontalAlign.CENTER,
verticalAlign: ae.TextVerticalAlign.CENTER
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var n, o, c, p, f, l, u, d, s, y, m, _;
a([ ae.entityRenderer, ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
a([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
a([ ae.bindAtom("G5_FBase_FrameAssetConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "frameAsset", void 0);
a([ ae.bindAtom("G5_FBase_FormatNumber"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "formatNumber", void 0);
a([ ae.bindAtom("G5_FBase_GetColor"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getColor", void 0);
a([ ae.bindAtom("G5_FBase_GetColorUp"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "getColorUp", void 0);
a([ ae.bindAtom("G5_FBase_CalcFontSize"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "calcFontSize", void 0);
a([ ae.bindAtom("G5_FBase_CalcTilePos"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "calcTilePos", void 0);
a([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "gameDomain", void 0);
a([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "zIndexConfig", void 0);
a([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "guideDomain", void 0);
a([ ae.bindAtom("G5_FSkinV3_ConnectionLineConfig"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "lineConfig", void 0);
return a([ ae.atomClass("G5_FSkinV3_TileRender") ], t);
}(ae.RenderAtom);
n.G5_FSkinV3_TileRender = c;
cc._RF.pop();
}, {} ],
G5_FSkinV3_TileShineConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0be15WJh5hNea+eUc3MgI2F", "G5_FSkinV3_TileShineConfig");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_TileShineConfig = void 0;
var r = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url("G5_FSkinV3");
return {
chainPreviewGlow: e("res/textures/goal_frame"),
shineImages: [ e("res/textures/shine/2_guang"), e("res/textures/shine/4_guang"), e("res/textures/shine/8_guang"), e("res/textures/shine/16_guang"), e("res/textures/shine/32_guang"), e("res/textures/shine/64_guang"), e("res/textures/shine/128_guang"), e("res/textures/shine/256_guang"), e("res/textures/shine/512_guang"), e("res/textures/shine/1024_guang"), e("res/textures/shine/2048_guang"), e("res/textures/shine/4096_guang") ]
};
};
return a([ ae.atomClass("G5_FSkinV3_TileShineConfig") ], t);
}(ae.ConfigAtom);
n.G5_FSkinV3_TileShineConfig = r;
cc._RF.pop();
}, {} ],
G5_FSkinV3_ZIndexConfigLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "43349SsllZJIafnto087eGB", "G5_FSkinV3_ZIndexConfigLogic");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, o) {
var i, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FSkinV3_ZIndexConfigLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.zIndexConfig.connectionLineGuide = this.zIndexConfig.mask + 2;
};
var n;
a([ ae.onChain, ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "zIndexConfig", void 0);
return a([ ae.atomClass("G5_FSkinV3_ZIndexConfigLogic") ], t);
}(ae.LogicAtom);
n.G5_FSkinV3_ZIndexConfigLogic = c;
cc._RF.pop();
}, {} ]
}, {}, [ "G5_FSkinV3_AeIndex", "G5_FSkinV3_Namespace", "G5_FSkinV3_CalcFontSizeFunc", "G5_FSkinV3_ComboPopupRender", "G5_FSkinV3_ConnectionLineConfig", "G5_FSkinV3_ConnectionLineRender", "G5_FSkinV3_GameUIRenderLogic", "G5_FSkinV3_GoalDialogRenderLogic", "G5_FSkinV3_GuideConfigLogic", "G5_FSkinV3_GuideMaskRenderLogic", "G5_FSkinV3_HideRevivePanelVariant", "G5_FSkinV3_LevelUpFrontEffectLogic", "G5_FSkinV3_LevelUpRenderLogic", "G5_FSkinV3_PlayConnectPulseAnimFunc", "G5_FSkinV3_ResPathConfigLogic", "G5_FSkinV3_ReviveAnimVariant", "G5_FSkinV3_ReviveCountdownDoneLogic", "G5_FSkinV3_TileColorConfigLogic", "G5_FSkinV3_TileGlowRender", "G5_FSkinV3_TileRender", "G5_FSkinV3_TileShineConfig", "G5_FSkinV3_ZIndexConfigLogic", "G5_FSkinV3_AnimateMergeLogic", "G5_FSkinV3_ElimComp", "G5_FSkinV3_ElimConfig", "G5_FSkinV3_ElimDomain", "G5_FSkinV3_ElimRender", "G5_FSkinV3_MergeDelayLogic", "G5_FSkinV3_MergeDelayVariant", "G5_FSkinV3_GoalAnimConfig", "G5_FSkinV3_GoalAnimRender", "G5_FSkinV3_GoalAnimRenderLogic" ]);
//# sourceMappingURL=index.js.map
