window.__require = function e(t, o, n) {
function i(r, c) {
if (!o[r]) {
if (!t[r]) {
var s = r.split("/");
s = s[s.length - 1];
if (!t[s]) {
var f = "function" == typeof __require && __require;
if (!c && f) return f(s, !0);
if (a) return a(s, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = s;
}
var p = o[r] = {
exports: {}
};
t[r][0].call(p.exports, function(e) {
return i(t[r][1][e] || e);
}, p, p.exports, e, t, o, n);
}
return o[r].exports;
}
for (var a = "function" == typeof __require && __require, r = 0; r < n.length; r++) i(n[r]);
return i;
}({
G3_FShortenDoPassTime_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0982c1ayepINKdEmnZZPq/f", "G3_FShortenDoPassTime_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FShortenDoPassTime = void 0;
var n = e("./G3_FShortenDoPassTime_Namespace");
Object.defineProperty(o, "G3_FShortenDoPassTime", {
enumerable: !0,
get: function() {
return n.G3_FShortenDoPassTime;
}
});
cc._RF.pop();
}, {
"./G3_FShortenDoPassTime_Namespace": "G3_FShortenDoPassTime_Namespace"
} ],
G3_FShortenDoPassTime_Asset: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "51ec2rq5GJDLJeHSjh2Tlaj", "G3_FShortenDoPassTime_Asset");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FShortenDoPassTime_Asset = void 0;
var r = e("../../G3_FShortenDoPassTime_Namespace"), c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
PassSpine: this.url(r.G3_FShortenDoPassTime.FeatureName.Name)("res/spines/gameplay_pass_barrier2")
};
};
return a([ ae.atomClass("G3_FShortenDoPassTime_Asset") ], t);
}(ae.ConfigAtom);
o.G3_FShortenDoPassTime_Asset = c;
cc._RF.pop();
}, {
"../../G3_FShortenDoPassTime_Namespace": "G3_FShortenDoPassTime_Namespace"
} ],
G3_FShortenDoPassTime_CombatBackgroundPassEffectLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "77cc1xCgplCuL1E7YmId3DH", "G3_FShortenDoPassTime_CombatBackgroundPassEffectLogic");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FShortenDoPassTime_CombatBackgroundPassEffectLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.combatDoPassLogic.runtime.fireworksTime - e.combatDoPassLogic.runtime.passTime, n = e.pointConfig.gap, i = e.windowSizeLogic.runtime.scale.all, a = e.combatBackgroundDomain.transform, r = a.x[t], c = a.y[t], s = e.mathSqrt(r * r + c * c), f = a.scaleX[t], p = f + 2 * (i - f) / 3, u = f + 5 * (i - f) / 6;
if (s <= 0) e.tween(t, [ [ ae.TweenStepType.To, a, {
scaleX: p,
scaleY: p
}, o / 3 ], [ ae.TweenStepType.To, a, {
scaleX: u,
scaleY: u
}, o / 3 ], [ ae.TweenStepType.To, a, {
scaleX: i,
scaleY: i
}, o / 3 ] ]); else {
var m = r / s * n, d = c / s * n, _ = r / s * n / 3, y = c / s * n / 3;
e.tween(t, [ [ ae.TweenStepType.To, a, {
x: m,
y: d,
scaleX: p,
scaleY: p
}, o / 3 ], [ ae.TweenStepType.To, a, {
x: _,
y: y,
scaleX: u,
scaleY: u
}, o / 3 ], [ ae.TweenStepType.To, a, {
x: 0,
y: 0,
scaleX: i,
scaleY: i
}, o / 3 ] ]);
}
};
};
var o, n, c, s, f, p, u, m, d;
a([ ae.variantOf, ae.bindAtom("G3_FBase_CombatBackgroundPassEffectLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G3_FBase_CombatBackgroundDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "combatBackgroundDomain", void 0);
a([ ae.bindAtom("G3_FBase_EffectFunction"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "effectFunction", void 0);
a([ ae.bindAtom("G3_FBase_WindowSizeLogic"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "windowSizeLogic", void 0);
a([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tween", void 0);
a([ ae.bindAtom("G3_FBase_CombatDoPassLogic"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "combatDoPassLogic", void 0);
a([ ae.bindAtom("G_FAtom_MathMax"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "mathMax", void 0);
a([ ae.bindAtom("G_FAtom_MathSqrt"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "mathSqrt", void 0);
a([ ae.bindAtom("G3_FBase_PointConfig"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "pointConfig", void 0);
return a([ ae.atomClass("G3_FShortenDoPassTime_CombatBackgroundPassEffectLogic") ], t);
}(ae.VariantAtom);
o.G3_FShortenDoPassTime_CombatBackgroundPassEffectLogic = c;
cc._RF.pop();
}, {} ],
G3_FShortenDoPassTime_CombatDoPassLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f5ad5aHXglFRLJyWywJfDlJ", "G3_FShortenDoPassTime_CombatDoPassLogic");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FShortenDoPassTime_CombatDoPassLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
o.runtime.passTime = e.worldMeta.worldTime;
var n = e.getLevelConfigFunction(), i = e.combatFireLogic.runtime.maxRadius, a = n.shape ? e.timeConfig.allTimeWithShape : e.timeConfig.allTimeWithoutShape, r = n.shape ? e.timeConfig.pointAnimationInterval + e.timeConfig.baseTimeWithShape : e.timeConfig.baseTimeWithoutShape, c = e.mathMin(1, a / (i * e.timeConfig.pointAnimationInterval + r)), s = e.mathMax(1, a / (i * e.timeConfig.pointAnimationInterval + r)), f = (e.mathMax(i, 0) * e.timeConfig.pointAnimationInterval + r) * c;
o.runtime.fireworksTime = o.runtime.passTime + f - e.timeConfig.pointAnimationTimeDiff / s;
o.runtime.overTime = o.runtime.fireworksTime + e.timeConfig.fireworksTime;
};
};
var o, n, c, s, f, p, u, m;
a([ ae.variantOf, ae.bindAtom("G3_FBase_CombatDoPassLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "worldMeta", void 0);
a([ ae.bindAtom("G_FAtom_MathSqrt"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "mathSqrt", void 0);
a([ ae.bindAtom("G_FAtom_MathMax"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "mathMax", void 0);
a([ ae.bindAtom("G_FAtom_MathMin"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "mathMin", void 0);
a([ ae.bindAtom("G3_FBase_CombatFireLogic"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "combatFireLogic", void 0);
a([ ae.bindAtom("G3_FBase_GetLevelConfigFunction"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getLevelConfigFunction", void 0);
a([ ae.bindAtom("G3_FShortenDoPassTime_TimeConfig"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "timeConfig", void 0);
return a([ ae.atomClass("G3_FShortenDoPassTime_CombatDoPassLogic") ], t);
}(ae.VariantAtom);
o.G3_FShortenDoPassTime_CombatDoPassLogic = c;
cc._RF.pop();
}, {} ],
G3_FShortenDoPassTime_CombatPointPassEffectLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3c6b2WhW5VC0aoG0LoOcyOy", "G3_FShortenDoPassTime_CombatPointPassEffectLogic");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__read || function(e, t) {
var o = "function" == typeof Symbol && e[Symbol.iterator];
if (!o) return e;
var n, i, a = o.call(e), r = [];
try {
for (;(void 0 === t || t-- > 0) && !(n = a.next()).done; ) r.push(n.value);
} catch (e) {
i = {
error: e
};
} finally {
try {
n && !n.done && (o = a.return) && o.call(a);
} finally {
if (i) throw i.error;
}
}
return r;
}, s = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
return e;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FShortenDoPassTime_CombatPointPassEffectLogic = void 0;
var f = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t, o = e.getLevelConfigFunction(), n = e.combatFireLogic.runtime.maxRadius, i = (o.arrow.cols - 1) / 2, a = (o.arrow.rows - 1) / 2, r = e.combatPointDomain.pointComponent, c = e.combatPointDomain.alphaComponent, f = e.combatPointDomain.transform, p = o.shape ? e.timeConfig.pointAnimationInterval + 1.9 : 1.234, u = e.mathMin(1, 3 / (n * e.timeConfig.pointAnimationInterval + p)), m = e.combatPointDomain.collect();
t = o.shape ? [ [ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.To, f, {
scaleX: 5,
scaleY: 5
}, e.timeConfig.pointAnimationInterval * u ], [ ae.TweenStepType.To, c, {
value: 1
}, e.timeConfig.pointAnimationInterval * u ] ] ], [ ae.TweenStepType.To, f, {
scaleX: 16,
scaleY: 16
}, 1.9 * u ] ] : [ [ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.To, f, {
scaleX: 2,
scaleY: 2
}, .467 * u ], [ ae.TweenStepType.To, c, {
value: .67
}, .467 * u ] ] ], [ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.To, f, {
scaleX: 1.04,
scaleY: 1.04
}, .367 * u ], [ ae.TweenStepType.To, c, {
value: 1
}, .367 * u ] ] ], [ ae.TweenStepType.To, f, {
scaleX: 0,
scaleY: 0
}, .4 * u ] ];
for (var d = 0; d < m.length; d++) {
var _ = m[d], y = r.row[_] - i, l = r.col[_] - a, h = Math.max(Math.sqrt(y * y + l * l) - 1, 0) * e.timeConfig.pointAnimationInterval * u;
e.tween(_, s([ [ ae.TweenStepType.Delay, Math.max(h, 0) ] ], t));
}
};
};
var o, n, c, f, p, u, m;
a([ ae.variantOf, ae.bindAtom("G3_FBase_CombatPointPassEffectLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G3_FBase_CombatPointDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "combatPointDomain", void 0);
a([ ae.bindAtom("G3_FBase_GetLevelConfigFunction"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getLevelConfigFunction", void 0);
a([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tween", void 0);
a([ ae.bindAtom("G3_FBase_CombatFireLogic"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "combatFireLogic", void 0);
a([ ae.bindAtom("G_FAtom_MathMin"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "mathMin", void 0);
a([ ae.bindAtom("G3_FShortenDoPassTime_TimeConfig"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "timeConfig", void 0);
return a([ ae.atomClass("G3_FShortenDoPassTime_CombatPointPassEffectLogic") ], t);
}(ae.VariantAtom);
o.G3_FShortenDoPassTime_CombatPointPassEffectLogic = f;
cc._RF.pop();
}, {} ],
G3_FShortenDoPassTime_CombatUiBackLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3601b+bCXZGXJLkPdqFt9/x", "G3_FShortenDoPassTime_CombatUiBackLogic");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FShortenDoPassTime_CombatUiBackLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t, o;
if (!e.replaceFireLogic.runtime.exited) {
e.replaceFireLogic.runtime.exited = !0;
var n = e.combatDoPassLogic.runtime.passTime > 0;
e.combatFiredLogic.runtime.firedTime = 0;
e.combatFiredLogic.runtime.maxArrow = 0;
e.combatFiredLogic.runtime.minArrow = 0;
e.combatFiredLogic.runtime.overTime = 0;
e.combatDoPassLogic.runtime.passTime = 0;
e.combatDoPassLogic.runtime.overTime = 0;
e.combatDoPassLogic.runtime.fireworksTime = 0;
e.combatDoPassLogic.runtime.fireworks = !1;
var i = {
back: !n,
win: n,
level: e.combatInitLogic.storage.level,
hp: 0,
degree: "",
degreeColor: 6318840
};
if (n) {
i.degree = null !== (t = e.levelExConfig.degree) && void 0 !== t ? t : "";
i.degreeColor = e.getDegreeColorFunction(e.levelExConfig.degree);
} else {
i.hp = e.combatInitLogic.storage.combat.hp;
i.degree = null !== (o = e.getLevelConfigFunction().degree) && void 0 !== o ? o : "";
i.degreeColor = e.getDegreeColorFunction();
}
console.log("---- CombatUiBackLogic 发送退出请求", i.level, i.win);
e.updateToOtherLogic.runtime.showPoints = !1;
e.exitChannel.emitToParent(i);
}
};
};
var o, n, c, s, f, p, u, m, d, _, y;
a([ ae.variantOf, ae.bindAtom("G3_FBase_CombatUiBackLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G3_FBase_CombatFiredLogic"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "combatFiredLogic", void 0);
a([ ae.bindAtom("G3_FBase_CombatDoPassLogic"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "combatDoPassLogic", void 0);
a([ ae.bindAtom("G3_FBase_CombatInitLogic"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "combatInitLogic", void 0);
a([ ae.bindAtom("G3_FBase_ExitChannel"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "exitChannel", void 0);
a([ ae.bindAtom("G3_FBase_GetLevelConfigFunction"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "getLevelConfigFunction", void 0);
a([ ae.bindAtom("G3_FBase_GetDegreeColorFunction"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getDegreeColorFunction", void 0);
a([ ae.bindAtom("G3_FBase_LevelExConfig"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "levelExConfig", void 0);
a([ ae.bindAtom("G3_FBase_CombatPointPanelDomain"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "combatPointPanelDomain", void 0);
a([ ae.bindAtom("G3_FBase_UpdateToOtherLogic"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "updateToOtherLogic", void 0);
a([ ae.bindAtom("G3_FShortenDoPassTime_ReplaceFireLogic"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "replaceFireLogic", void 0);
return a([ ae.atomClass("G3_FShortenDoPassTime_CombatUiBackLogic") ], t);
}(ae.VariantAtom);
o.G3_FShortenDoPassTime_CombatUiBackLogic = c;
cc._RF.pop();
}, {} ],
G3_FShortenDoPassTime_CongratulationLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ea33bPQa0RMNJQXzrkNwj4j", "G3_FShortenDoPassTime_CongratulationLogic");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FShortenDoPassTime_CongratulationLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this, t = this.combatUiRender.Congratulation;
t.scaleX = [ function() {
var t = e.worldMeta.worldTime - e.combatDoPassLogic.runtime.fireworksTime;
return t < .334 ? .52 + (1.13 - .52) * Math.max(t, 0) / .334 : t < .53 ? 1.13 + (1 - 1.13) * (t - .334) / .196 : 1;
}, [ this.combatDoPassLogic, "runtime", "fireworks" ], [ this.worldMeta, "worldTime" ] ];
t.scaleY = [ function() {
var t = e.worldMeta.worldTime - e.combatDoPassLogic.runtime.fireworksTime;
return t < .334 ? .52 + (1.13 - .52) * Math.max(t, 0) / .334 : t < .53 ? 1.13 + (1 - 1.13) * (t - .334) / .196 : 1;
}, [ this.combatDoPassLogic, "runtime", "fireworks" ], [ this.worldMeta, "worldTime" ] ];
t.alpha = [ function() {
var t = e.worldMeta.worldTime - e.combatDoPassLogic.runtime.fireworksTime;
return t < .334 ? Math.max(t, 0) / .334 : t < 1.67 ? 1 : t < 2 ? 1 - (t - 1.67) / .33 : 0;
}, [ this.combatDoPassLogic, "runtime", "fireworks" ], [ this.worldMeta, "worldTime" ] ];
};
var o, n, c, s;
a([ ae.onChain, ae.bindAtom("G3_FBase_CombatUiRender"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "combatUiRender", void 0);
a([ ae.bindAtom("G3_FShortenDoPassTime_Asset"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "asset", void 0);
a([ ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "worldMeta", void 0);
a([ ae.bindAtom("G3_FBase_CombatDoPassLogic"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "combatDoPassLogic", void 0);
return a([ ae.atomClass("G3_FShortenDoPassTime_CongratulationLogic") ], t);
}(ae.LogicAtom);
o.G3_FShortenDoPassTime_CongratulationLogic = c;
cc._RF.pop();
}, {} ],
G3_FShortenDoPassTime_GetLevelConfigFunction: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0b33e6JTBZGfZIPvxzVvQLI", "G3_FShortenDoPassTime_GetLevelConfigFunction");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FShortenDoPassTime_GetLevelConfigFunction = void 0;
var c = new WeakSet(), s = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.variantCondition = function() {
return c.has(this);
};
t.prototype.defineFunction = function() {
var e = this;
c.add(this);
return function() {
var t = e.levelConfig, o = t.congratulation;
o || (o = e.combatUiInitLogic.runtime.congratulation);
return {
degree: t.degree,
congratulation: o,
shape: t.shape,
arrow: {
rows: t.rows,
cols: t.cols,
arrows: e.combatFireLogic.runtime.arrows
}
};
};
};
var o, n, s, f;
a([ ae.variantOf, ae.bindAtom("G3_FBase_GetLevelConfigFunction"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G3_FBase_LevelConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelConfig", void 0);
a([ ae.bindAtom("G3_FBase_CombatUiInitLogic"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "combatUiInitLogic", void 0);
a([ ae.bindAtom("G3_FBase_CombatFireLogic"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "combatFireLogic", void 0);
return a([ ae.atomClass("G3_FShortenDoPassTime_GetLevelConfigFunction") ], t);
}(ae.VariantAtom);
o.G3_FShortenDoPassTime_GetLevelConfigFunction = s;
cc._RF.pop();
}, {} ],
G3_FShortenDoPassTime_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c13aeOpR1RPQpv4f4l8hjBP", "G3_FShortenDoPassTime_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FShortenDoPassTime = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "缩短过关时间";
(function(e) {
e.Name = "G3";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FShortenDoPassTime"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 11] = "Version";
e.CreateTime = "2026-02-28 10:39:01";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G3_FShortenDoPassTime || (o.G3_FShortenDoPassTime = {}));
cc._RF.pop();
}, {} ],
G3_FShortenDoPassTime_ReplaceFireLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "14659LPkYFOAZ7cJYGTV00H", "G3_FShortenDoPassTime_ReplaceFireLogic");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FShortenDoPassTime_ReplaceFireLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
exited: !1
};
};
t.prototype.onExecute = function() {
this.combatUiRender.PassSpine.spineUrl = this.asset.PassSpine;
};
var o, n;
a([ ae.onChain, ae.bindAtom("G3_FBase_CombatUiRender"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "combatUiRender", void 0);
a([ ae.bindAtom("G3_FShortenDoPassTime_Asset"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "asset", void 0);
return a([ ae.atomClass("G3_FShortenDoPassTime_ReplaceFireLogic") ], t);
}(ae.LogicAtom);
o.G3_FShortenDoPassTime_ReplaceFireLogic = c;
cc._RF.pop();
}, {} ],
G3_FShortenDoPassTime_TimeConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5d29fas2hxI5okSOmOQWvmr", "G3_FShortenDoPassTime_TimeConfig");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FShortenDoPassTime_TimeConfig = void 0;
var r = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
pointAnimationInterval: .1,
fireworksTime: 2.3,
allTimeWithShape: 2.5,
allTimeWithoutShape: 2,
baseTimeWithShape: 1,
baseTimeWithoutShape: .5,
pointAnimationTimeDiff: .7
};
};
return a([ ae.atomClass("G3_FShortenDoPassTime_TimeConfig") ], t);
}(ae.ConfigAtom);
o.G3_FShortenDoPassTime_TimeConfig = r;
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FShortenDoPassTime_AeIndex", "G3_FShortenDoPassTime_Namespace", "G3_FShortenDoPassTime_Asset", "G3_FShortenDoPassTime_TimeConfig", "G3_FShortenDoPassTime_CongratulationLogic", "G3_FShortenDoPassTime_ReplaceFireLogic", "G3_FShortenDoPassTime_CombatBackgroundPassEffectLogic", "G3_FShortenDoPassTime_CombatDoPassLogic", "G3_FShortenDoPassTime_CombatPointPassEffectLogic", "G3_FShortenDoPassTime_CombatUiBackLogic", "G3_FShortenDoPassTime_GetLevelConfigFunction" ]);
//# sourceMappingURL=index.js.map
