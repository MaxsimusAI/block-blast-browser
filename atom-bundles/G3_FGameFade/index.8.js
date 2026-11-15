window.__require = function e(t, o, i) {
function n(r, f) {
if (!o[r]) {
if (!t[r]) {
var c = r.split("/");
c = c[c.length - 1];
if (!t[c]) {
var p = "function" == typeof __require && __require;
if (!f && p) return p(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = c;
}
var d = o[r] = {
exports: {}
};
t[r][0].call(d.exports, function(e) {
return n(t[r][1][e] || e);
}, d, d.exports, e, t, o, i);
}
return o[r].exports;
}
for (var a = "function" == typeof __require && __require, r = 0; r < i.length; r++) n(i[r]);
return n;
}({
G3_FGameFade_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5347buVsKNJkK4qwF6KHpxr", "G3_FGameFade_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FGameFade = void 0;
var i = e("./G3_FGameFade_Namespace");
Object.defineProperty(o, "G3_FGameFade", {
enumerable: !0,
get: function() {
return i.G3_FGameFade;
}
});
cc._RF.pop();
}, {
"./G3_FGameFade_Namespace": "G3_FGameFade_Namespace"
} ],
G3_FGameFade_CombatUiFadeConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b3dff1GVNZBl48tGWz3f5um", "G3_FGameFade_CombatUiFadeConfig");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, i) {
var n, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i); else for (var f = e.length - 1; f >= 0; f--) (n = e[f]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FGameFade_CombatUiFadeConfig = void 0;
var r = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
fadeDuration: .334,
moveOffset: 43
};
};
return a([ ae.atomClass("G3_FGameFade_CombatUiFadeConfig") ], t);
}(ae.ConfigAtom);
o.G3_FGameFade_CombatUiFadeConfig = r;
cc._RF.pop();
}, {} ],
G3_FGameFade_CombatUiFadeLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5e973tPYQFBuZJaRGeSte7T", "G3_FGameFade_CombatUiFadeLogic");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, i) {
var n, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i); else for (var f = e.length - 1; f >= 0; f--) (n = e[f]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FGameFade_CombatUiFadeLogic = void 0;
var f = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
alpha: 0,
topBgOffsetY: 0,
bottomOffsetY: 0,
fadeInStartTime: -1,
fadeOutStartTime: -1
};
};
t.prototype.onExecute = function(e, t) {
var o = this.worldMeta.worldTime, i = this.config.fadeDuration;
if (this.combatDoPassLogic.runtime.passTime > 0) {
t.runtime.fadeOutStartTime < 0 && (t.runtime.fadeOutStartTime = o);
var n = t.runtime.fadeOutStartTime >= 0 ? (o - t.runtime.fadeOutStartTime) / i : 0;
t.runtime.alpha = this.mathMax(0, 1 - n);
} else if (t.runtime.fadeOutStartTime >= 0) t.runtime.alpha = 0; else {
t.runtime.fadeInStartTime < 0 && (t.runtime.fadeInStartTime = o);
n = (o - t.runtime.fadeInStartTime) / i;
t.runtime.alpha = this.mathMin(1, n);
}
var a = t.runtime.alpha, r = this.getWinSize().height, f = (180 + this.windowSize.height - this.getSafeArea().height) / 2 - this.config.moveOffset;
t.runtime.topBgOffsetY = r / 2 - f - this.config.moveOffset * a;
var c = 83 - this.config.moveOffset;
t.runtime.bottomOffsetY = -r / 2 + c + this.config.moveOffset * a;
};
var o, i, f, c, p, d, u, m, _;
a([ ae.onChain, ae.bindAtom("G3_FBase_CombatUpdateSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
a([ ae.bindAtom("G3_FBase_CombatDoPassLogic"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "combatDoPassLogic", void 0);
a([ ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "worldMeta", void 0);
a([ ae.bindAtom("G_FAtom_MathMin"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "mathMin", void 0);
a([ ae.bindAtom("G_FAtom_MathMax"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "mathMax", void 0);
a([ ae.bindAtom("G3_FGameFade_CombatUiFadeConfig"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "config", void 0);
a([ ae.bindAtom("G_FAtom_GetWinSize"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getWinSize", void 0);
a([ ae.bindAtom("G_FAtom_GetSafeArea"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "getSafeArea", void 0);
a([ ae.bindAtom("G_FAtom_WindowSize"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "windowSize", void 0);
return a([ ae.atomClass("G3_FGameFade_CombatUiFadeLogic") ], t);
}(ae.LogicAtom);
o.G3_FGameFade_CombatUiFadeLogic = f;
cc._RF.pop();
}, {} ],
G3_FGameFade_CombatUiRenderGenLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "80c5cqLodJOKLSqQ2MVZtYW", "G3_FGameFade_CombatUiRenderGenLogic");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, i) {
var n, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i); else for (var f = e.length - 1; f >= 0; f--) (n = e[f]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FGameFade_CombatUiRenderGenLogic = void 0;
var f = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this, t = [ function() {
return e.combatUiFadeLogic.runtime.alpha;
}, [ this.combatUiFadeLogic, "runtime", "alpha" ] ], o = [ function() {
return e.combatUiFadeLogic.runtime.bottomOffsetY;
}, [ this.combatUiFadeLogic, "runtime", "bottomOffsetY" ] ], i = [ function() {
return e.combatUiFadeLogic.runtime.topBgOffsetY;
}, [ this.combatUiFadeLogic, "runtime", "topBgOffsetY" ] ], n = this.combatUiRender;
n.TopBg.active = !1;
n.Top.alpha = t;
n.Top.widget = {
isAlignTop: !0,
isAlignLeft: !0,
isAlignRight: !0
};
n.Top.width = this.getWinSize().width;
n.Top.height = 180 + this.getWinSize().height - this.getSafeArea().height;
n.Top.y = i;
n.HintAd.alpha = t;
n.HintAd.active = [ function() {
return e.combatHintAdLogic.runtime.hintAdY > 0;
}, [ this.combatHintAdLogic, "runtime", "hintAdY" ] ];
n.Denger.alpha = t;
n.Congratulation.alpha = t;
n.Guide1Spine.alpha = t;
n.Guide6Spine.alpha = t;
n.CombatClickSpine.alpha = t;
n.Bottom.alpha = t;
n.Bottom.y = o;
n.Ray.alpha = t;
n.GuideMove.alpha = t;
};
var o, i, f, c, p;
a([ ae.onChain, ae.bindAtom("G3_FBase_CombatUiRender"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "combatUiRender", void 0);
a([ ae.bindAtom("G3_FGameFade_CombatUiFadeLogic"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "combatUiFadeLogic", void 0);
a([ ae.bindAtom("G_FAtom_GetWinSize"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getWinSize", void 0);
a([ ae.bindAtom("G3_FBase_CombatHintAdLogic"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "combatHintAdLogic", void 0);
a([ ae.bindAtom("G_FAtom_GetSafeArea"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "getSafeArea", void 0);
return a([ ae.atomClass("G3_FGameFade_CombatUiRenderGenLogic") ], t);
}(ae.LogicAtom);
o.G3_FGameFade_CombatUiRenderGenLogic = f;
cc._RF.pop();
}, {} ],
G3_FGameFade_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "56e06Bps8ZBHoXfUV2a4aFZ", "G3_FGameFade_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FGameFade = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "渐入渐出游戏界面";
(function(e) {
e.Name = "G3";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FGameFade"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 8] = "Version";
e.CreateTime = "2026-02-26 15:38:21";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G3_FGameFade || (o.G3_FGameFade = {}));
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FGameFade_AeIndex", "G3_FGameFade_Namespace", "G3_FGameFade_CombatUiFadeConfig", "G3_FGameFade_CombatUiFadeLogic", "G3_FGameFade_CombatUiRenderGenLogic" ]);