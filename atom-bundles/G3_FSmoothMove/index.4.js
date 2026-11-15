window.__require = function e(t, o, n) {
function i(r, c) {
if (!o[r]) {
if (!t[r]) {
var f = r.split("/");
f = f[f.length - 1];
if (!t[f]) {
var p = "function" == typeof __require && __require;
if (!c && p) return p(f, !0);
if (a) return a(f, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = f;
}
var u = o[r] = {
exports: {}
};
t[r][0].call(u.exports, function(e) {
return i(t[r][1][e] || e);
}, u, u.exports, e, t, o, n);
}
return o[r].exports;
}
for (var a = "function" == typeof __require && __require, r = 0; r < n.length; r++) i(n[r]);
return i;
}({
G3_FSmoothMove_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e224bUy5AtCVIBQ8smol/G0", "G3_FSmoothMove_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FSmoothMove = void 0;
var n = e("./G3_FSmoothMove_Namespace");
Object.defineProperty(o, "G3_FSmoothMove", {
enumerable: !0,
get: function() {
return n.G3_FSmoothMove;
}
});
cc._RF.pop();
}, {
"./G3_FSmoothMove_Namespace": "G3_FSmoothMove_Namespace"
} ],
G3_FSmoothMove_CombatBackgroundInertiaLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "79140D9Pa1MV7iciNBd8Yhv", "G3_FSmoothMove_CombatBackgroundInertiaLogic");
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
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FSmoothMove_CombatBackgroundInertiaLogic = void 0;
var f = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
velocityX: 0,
velocityY: 0,
inertiaByEid: {},
zoomDistance: 0
};
};
t.prototype.onExecute = function(e, t) {
var o = t.runtime.inertiaByEid[e];
if (o) {
var n = o.vx, i = o.vy, a = this.combatBackgroundDomain.transform, r = c(this.calculateBackgroundEdegFunction(e), 2), f = r[0], p = r[1];
f > 0 && a.x.set(e, this.mathMax(-f, this.mathMin(f, a.x[e] + n)));
p > 0 && a.y.set(e, this.mathMax(-p, this.mathMin(p, a.y[e] + i)));
var u = this.config, d = u.damping, y = u.stopThreshold;
(n *= d) * n + (i *= d) * i < y * y ? delete t.runtime.inertiaByEid[e] : t.runtime.inertiaByEid[e] = {
vx: n,
vy: i
};
}
};
var o, n, f, p, u, d;
a([ ae.onChain, ae.bindAtom("G3_FSmoothMove_CombatBackgroundInertiaUpdateSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
a([ ae.bindAtom("G3_FSmoothMove_DragInertiaConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
a([ ae.bindAtom("G3_FBase_CombatBackgroundDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "combatBackgroundDomain", void 0);
a([ ae.bindAtom("G_FAtom_MathMax"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "mathMax", void 0);
a([ ae.bindAtom("G_FAtom_MathMin"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "mathMin", void 0);
a([ ae.bindAtom("G3_FBase_CalculateBackgroundEdegFunction"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "calculateBackgroundEdegFunction", void 0);
return a([ ae.atomClass("G3_FSmoothMove_CombatBackgroundInertiaLogic") ], t);
}(ae.LogicAtom);
o.G3_FSmoothMove_CombatBackgroundInertiaLogic = f;
cc._RF.pop();
}, {} ],
G3_FSmoothMove_CombatBackgroundInertiaUpdateSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2272exD83VLCInMgO6hSaxk", "G3_FSmoothMove_CombatBackgroundInertiaUpdateSignal");
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
o.G3_FSmoothMove_CombatBackgroundInertiaUpdateSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
a([ ae.bindAtom("G3_FBase_CombatBackgroundDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "combatBackgroundDomain", void 0);
return a([ ae.atomClass("G3_FSmoothMove_CombatBackgroundInertiaUpdateSignal") ], t);
}(ae.SignalAtom);
o.G3_FSmoothMove_CombatBackgroundInertiaUpdateSignal = c;
cc._RF.pop();
}, {} ],
G3_FSmoothMove_DragInertiaConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fa2b7vX5klFs4AzEP0WNJlg", "G3_FSmoothMove_DragInertiaConfig");
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
o.G3_FSmoothMove_DragInertiaConfig = void 0;
var r = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
damping: .85,
stopThreshold: 1,
velocityScale: .85,
velocityThreshold: 12,
velocitySmoothFactor: .4,
maxLevel: 5
};
};
return a([ ae.atomClass("G3_FSmoothMove_DragInertiaConfig") ], t);
}(ae.ConfigAtom);
o.G3_FSmoothMove_DragInertiaConfig = r;
cc._RF.pop();
}, {} ],
G3_FSmoothMove_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d813cYpfmlI86dcv1/iffAO", "G3_FSmoothMove_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FSmoothMove = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "拖拽响应缓动/缩放缓动eazy-in-out效果";
(function(e) {
e.Name = "G3";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FSmoothMove"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 4] = "Version";
e.CreateTime = "2026-02-26 11:22:47";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G3_FSmoothMove || (o.G3_FSmoothMove = {}));
cc._RF.pop();
}, {} ],
G3_FSmoothMove_TouchCancelCombatBackgroundLogicVariant: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "43cc14HTBtB2qYSe9mV9sGV", "G3_FSmoothMove_TouchCancelCombatBackgroundLogicVariant");
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
o.G3_FSmoothMove_TouchCancelCombatBackgroundLogicVariant = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.pointer.touchId, o = e.recordLogic.runtime.touches, n = Object.keys(o).length;
if (o[t]) {
delete o[t];
n < 2 && (e.inertiaLogic.runtime.zoomDistance = 0);
} else if (n > 0) {
e.recordLogic.runtime.touches = {};
e.inertiaLogic.runtime.zoomDistance = 0;
}
e.movingIdleLogic.runtime.selectedArrow = !1;
};
};
var o, n, c, f, p;
a([ ae.variantOf, ae.bindAtom("G3_FBase_TouchCancelCombatBackgroundLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G_FAtom_Pointer"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "pointer", void 0);
a([ ae.bindAtom("G3_FBase_TouchMoveCombatBackgroundRecordLogic"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "recordLogic", void 0);
a([ ae.bindAtom("G3_FSmoothMove_CombatBackgroundInertiaLogic"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "inertiaLogic", void 0);
a([ ae.bindAtom("G3_FBase_MovingIdleLogic"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "movingIdleLogic", void 0);
return a([ ae.atomClass("G3_FSmoothMove_TouchCancelCombatBackgroundLogicVariant") ], t);
}(ae.VariantAtom);
o.G3_FSmoothMove_TouchCancelCombatBackgroundLogicVariant = c;
cc._RF.pop();
}, {} ],
G3_FSmoothMove_TouchEndCombatBackgroundLogicVariant: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e2cf2BKKGRME43d4WGW239s", "G3_FSmoothMove_TouchEndCombatBackgroundLogicVariant");
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
o.G3_FSmoothMove_TouchEndCombatBackgroundLogicVariant = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.pointer.touchId, n = e.recordLogic.runtime.touches, i = Object.keys(n).length;
if (n[o]) {
delete n[o];
i < 2 && (e.inertiaLogic.runtime.zoomDistance = 0);
} else i > 0 && (e.inertiaLogic.runtime.zoomDistance = 0);
if (0 === Object.keys(e.recordLogic.runtime.touches).length) {
var a = e.inertiaLogic.runtime, r = a.velocityX, c = a.velocityY, f = e.mathSqrt(r * r + c * c);
if (f > e.config.velocityThreshold) {
console.log("[G3_FSmoothMove] 惯性启动", {
vx: r,
vy: c,
speedSq: f.toFixed(0)
});
var p = e.config.velocityScale;
a.inertiaByEid[t] = {
vx: r * p,
vy: c * p
};
} else delete a.inertiaByEid[t];
a.velocityX = 0;
a.velocityY = 0;
}
e.movingIdleLogic.runtime.selectedArrow = !1;
};
};
var o, n, c, f, p, u, d, y;
a([ ae.variantOf, ae.bindAtom("G3_FBase_TouchEndCombatBackgroundLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G_FAtom_Pointer"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "pointer", void 0);
a([ ae.bindAtom("G3_FBase_CombatBackgroundDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "combatBackgroundDomain", void 0);
a([ ae.bindAtom("G3_FBase_TouchMoveCombatBackgroundRecordLogic"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "recordLogic", void 0);
a([ ae.bindAtom("G3_FBase_MovingIdleLogic"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "movingIdleLogic", void 0);
a([ ae.bindAtom("G3_FSmoothMove_CombatBackgroundInertiaLogic"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "inertiaLogic", void 0);
a([ ae.bindAtom("G3_FSmoothMove_DragInertiaConfig"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "config", void 0);
a([ ae.bindAtom("G_FAtom_MathSqrt"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "mathSqrt", void 0);
return a([ ae.atomClass("G3_FSmoothMove_TouchEndCombatBackgroundLogicVariant") ], t);
}(ae.VariantAtom);
o.G3_FSmoothMove_TouchEndCombatBackgroundLogicVariant = c;
cc._RF.pop();
}, {} ],
G3_FSmoothMove_TouchMoveCombatBackgroundDragLogicVariant: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4237b5GGCdBAYhZkXISMIy1", "G3_FSmoothMove_TouchMoveCombatBackgroundDragLogicVariant");
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
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FSmoothMove_TouchMoveCombatBackgroundDragLogicVariant = void 0;
var f = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.config.maxLevel;
if (!(o > 0 && e.combatInitLogic.storage.level <= o)) {
var n = e.getTouchesFunction()[e.pointer.touchId];
if (n) {
var i = e.pointer.dx, a = e.pointer.dy, r = e.inertiaLogic.runtime, f = e.config.velocitySmoothFactor;
r.velocityX = r.velocityX * (1 - f) + i * f;
r.velocityY = r.velocityY * (1 - f) + a * f;
if (!(n.dx * n.dx + n.dy * n.dy < e.arrowConfig.size / 2 * (e.arrowConfig.size / 2))) {
var p = e.combatBackgroundDomain.transform, u = c(e.calculateBackgroundEdegFunction(t), 2), d = u[0], y = u[1];
d > 0 && p.x.set(t, e.mathMax(-d, e.mathMin(d, p.x[t] + i)));
y > 0 && p.y.set(t, e.mathMax(-y, e.mathMin(y, p.y[t] + a)));
}
}
}
};
};
var o, n, f, p, u, d, y, m, _, s, h;
a([ ae.variantOf, ae.bindAtom("G3_FBase_TouchMoveCombatBackgroundDragLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G_FAtom_Pointer"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "pointer", void 0);
a([ ae.bindAtom("G3_FBase_CombatBackgroundDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "combatBackgroundDomain", void 0);
a([ ae.bindAtom("G3_FBase_ArrowConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "arrowConfig", void 0);
a([ ae.bindAtom("G_FAtom_MathMax"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "mathMax", void 0);
a([ ae.bindAtom("G_FAtom_MathMin"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "mathMin", void 0);
a([ ae.bindAtom("G3_FBase_CalculateBackgroundEdegFunction"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "calculateBackgroundEdegFunction", void 0);
a([ ae.bindAtom("G3_FBase_GetTouchesFunction"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "getTouchesFunction", void 0);
a([ ae.bindAtom("G3_FSmoothMove_CombatBackgroundInertiaLogic"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "inertiaLogic", void 0);
a([ ae.bindAtom("G3_FSmoothMove_DragInertiaConfig"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "config", void 0);
a([ ae.bindAtom("G3_FBase_CombatInitLogic"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "combatInitLogic", void 0);
return a([ ae.atomClass("G3_FSmoothMove_TouchMoveCombatBackgroundDragLogicVariant") ], t);
}(ae.VariantAtom);
o.G3_FSmoothMove_TouchMoveCombatBackgroundDragLogicVariant = f;
cc._RF.pop();
}, {} ],
G3_FSmoothMove_TouchMoveCombatBackgroundZoomLogicVariant: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d239dtBNBtMYbNez0B0yPrH", "G3_FSmoothMove_TouchMoveCombatBackgroundZoomLogicVariant");
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
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FSmoothMove_TouchMoveCombatBackgroundZoomLogicVariant = void 0;
var f = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.config.maxLevel;
if (!(o > 0 && e.combatInitLogic.storage.level <= o)) {
var n = e.getTouchesFunction(), i = Object.values(n);
if (!(i.length < 2)) {
var a = i[0], r = i[1], f = r.x - a.x, p = r.y - a.y, u = r.dx - a.dx, d = r.dy - a.dy;
if (!(e.mathAbs(f) < 5 && e.mathAbs(p) < 5)) {
var y;
y = e.mathAbs(f) > e.mathAbs(p) ? (f + u) / f : (p + d) / p;
if (isFinite(y) && !(y <= 0)) {
var m = e.config.dampingFactor;
console.log("[G3_FSmoothMove] Zoom 变体执行", {
scaleRatio: y,
dampingFactor: m
});
var _ = e.mathLog(y) * m, s = e.windowSizeLogic.runtime.scale, h = e.combatBackgroundDomain.transform, l = e.mathLog(h.scaleX[t]) + _, g = e.mathLog(h.scaleY[t]) + _, v = e.mathMax(s.min, e.mathMin(s.max, e.mathExp(l))), b = e.mathMax(s.min, e.mathMin(s.max, e.mathExp(g)));
h.scaleX.set(t, v);
h.scaleY.set(t, b);
var F = c(e.calculateBackgroundEdegFunction(t), 2), M = F[0], O = F[1];
M > 0 ? h.x.set(t, e.mathMax(-M, e.mathMin(M, h.x[t]))) : h.x.set(t, 0);
O > 0 ? h.y.set(t, e.mathMax(-O, e.mathMin(O, h.y[t]))) : h.y.set(t, 0);
}
}
}
}
};
};
var o, n, f, p, u, d, y, m, _, s, h, l;
a([ ae.variantOf, ae.bindAtom("G3_FBase_TouchMoveCombatBackgroundZoomLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G3_FBase_CombatBackgroundDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "combatBackgroundDomain", void 0);
a([ ae.bindAtom("G3_FBase_WindowSizeLogic"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "windowSizeLogic", void 0);
a([ ae.bindAtom("G_FAtom_MathMax"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "mathMax", void 0);
a([ ae.bindAtom("G_FAtom_MathMin"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "mathMin", void 0);
a([ ae.bindAtom("G_FAtom_MathAbs"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "mathAbs", void 0);
a([ ae.bindAtom("G_FAtom_MathLog"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "mathLog", void 0);
a([ ae.bindAtom("G_FAtom_MathExp"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "mathExp", void 0);
a([ ae.bindAtom("G3_FBase_GetTouchesFunction"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "getTouchesFunction", void 0);
a([ ae.bindAtom("G3_FBase_CalculateBackgroundEdegFunction"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "calculateBackgroundEdegFunction", void 0);
a([ ae.bindAtom("G3_FSmoothMove_ZoomConfig"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "config", void 0);
a([ ae.bindAtom("G3_FBase_CombatInitLogic"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "combatInitLogic", void 0);
return a([ ae.atomClass("G3_FSmoothMove_TouchMoveCombatBackgroundZoomLogicVariant") ], t);
}(ae.VariantAtom);
o.G3_FSmoothMove_TouchMoveCombatBackgroundZoomLogicVariant = f;
cc._RF.pop();
}, {} ],
G3_FSmoothMove_UpdateToCombatBackgroundInertiaChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "94dcf9wuQJLk5wRHnYWGj2/", "G3_FSmoothMove_UpdateToCombatBackgroundInertiaChain");
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
o.G3_FSmoothMove_UpdateToCombatBackgroundInertiaChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
a([ ae.routeFrom, ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "updateSignal", void 0);
a([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FSmoothMove_CombatBackgroundInertiaUpdateSignal"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "inertiaSignal", void 0);
return a([ ae.atomClass("G3_FSmoothMove_UpdateToCombatBackgroundInertiaChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FSmoothMove_UpdateToCombatBackgroundInertiaChain = c;
cc._RF.pop();
}, {} ],
G3_FSmoothMove_ZoomConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a580eWUFddKhbzo9O9M2/Iz", "G3_FSmoothMove_ZoomConfig");
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
o.G3_FSmoothMove_ZoomConfig = void 0;
var r = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
dampingFactor: .5,
maxLevel: 5
};
};
return a([ ae.atomClass("G3_FSmoothMove_ZoomConfig") ], t);
}(ae.ConfigAtom);
o.G3_FSmoothMove_ZoomConfig = r;
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FSmoothMove_AeIndex", "G3_FSmoothMove_Namespace", "G3_FSmoothMove_UpdateToCombatBackgroundInertiaChain", "G3_FSmoothMove_DragInertiaConfig", "G3_FSmoothMove_ZoomConfig", "G3_FSmoothMove_CombatBackgroundInertiaLogic", "G3_FSmoothMove_TouchCancelCombatBackgroundLogicVariant", "G3_FSmoothMove_TouchEndCombatBackgroundLogicVariant", "G3_FSmoothMove_TouchMoveCombatBackgroundDragLogicVariant", "G3_FSmoothMove_TouchMoveCombatBackgroundZoomLogicVariant", "G3_FSmoothMove_CombatBackgroundInertiaUpdateSignal" ]);