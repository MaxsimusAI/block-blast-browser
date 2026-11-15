window.__require = function e(t, o, n) {
function r(a, c) {
if (!o[a]) {
if (!t[a]) {
var f = a.split("/");
f = f[f.length - 1];
if (!t[f]) {
var p = "function" == typeof __require && __require;
if (!c && p) return p(f, !0);
if (i) return i(f, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = f;
}
var u = o[a] = {
exports: {}
};
t[a][0].call(u.exports, function(e) {
return r(t[a][1][e] || e);
}, u, u.exports, e, t, o, n);
}
return o[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < n.length; a++) r(n[a]);
return r;
}({
G12_FHeartSystem_AdRefillHeartFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9df492CD3VI5qLNPIXgZ6IJ", "G12_FHeartSystem_AdRefillHeartFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_AdRefillHeartFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
void 0 === t && (t = 1);
e.resetDailyAdRefillFunc();
var o = e.heartManagerLogic.storage;
if (e.heartConfig.adRefillDailyLimit > 0 && o.dailyAdRefillCount >= e.heartConfig.adRefillDailyLimit) return !1;
o.dailyAdRefillCount += 1;
e.addHeartFunc(t);
return !0;
};
};
var o, n, c, f;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ResetDailyAdRefillFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "resetDailyAdRefillFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AddHeartFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "addHeartFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_AdRefillHeartFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_AdRefillHeartFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_AddHeartFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3d521Ifn2pA6oIB+Y+RXUGm", "G12_FHeartSystem_AddHeartFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_AddHeartFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
if (!(t <= 0)) {
var o = e.heartManagerLogic.storage;
e.heartManagerLogic.runtime.currentShowHeart = o.currentHeart;
o.currentHeart = Math.min(e.heartConfig.maxHeart, o.currentHeart + t);
e.refreshRecoveryFunc();
e.reportGameStatusFunc();
}
};
};
var o, n, c, f;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_RefreshRecoveryFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "refreshRecoveryFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GameRuntimeReportFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "reportGameStatusFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_AddHeartFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_AddHeartFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_AddHpSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c24d9/8aghJXaG7U7kwrBiV", "G12_FHeartSystem_AddHpSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_AddHpSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_AddHpSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_AddHpSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "13c5e2R8U5HSa6D2KVmGaxY", "G12_FHeartSystem_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem = void 0;
var n = e("./G12_FHeartSystem_Namespace");
Object.defineProperty(o, "G12_FHeartSystem", {
enumerable: !0,
get: function() {
return n.G12_FHeartSystem;
}
});
cc._RF.pop();
}, {
"./G12_FHeartSystem_Namespace": "G12_FHeartSystem_Namespace"
} ],
G12_FHeartSystem_ApplyHomeLevelConfigFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "77bfe0tPyNLN4XFPztYDR1d", "G12_FHeartSystem_ApplyHomeLevelConfigFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ApplyHomeLevelConfigFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n) {
var r, i, a = o && null !== (r = o.addHp) && void 0 !== r ? r : 0;
e.homeUIListItemDomain.listItemCmp.difficulty.set(t, null !== (i = null == o ? void 0 : o.difficulty) && void 0 !== i ? i : 0);
var c = e.homeUIListItemAndRewardRelation.getTargets(t)[0];
if (a <= 0) {
if (c && e.homeUIRewardDomain.has(c)) {
e.homeUIListItemAndRewardRelation.remove(t, c);
e.homeUIRewardDomain.destroy(c);
}
} else {
var f = c && e.homeUIRewardDomain.has(c) ? c : e.homeUIRewardDomain.create();
if (!c) {
e.childOf.addChild(t, f);
e.homeUIListItemAndRewardRelation.set(t, f);
}
e.homeUIRewardDomain.transform.x.set(f, n ? e.homeUIConfig.layout.listItemActiveRewardX : e.homeUIConfig.layout.listItemRewardX);
e.homeUIRewardDomain.transform.y.set(f, 0);
e.homeUIRewardDomain.homeUIRewardCmp.addHpNum.set(f, a);
}
};
};
var o, n, c, f, p;
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIListItemDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "homeUIListItemDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIRewardDomain"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "homeUIRewardDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIListItemAndRewardRelation"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "homeUIListItemAndRewardRelation", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "homeUIConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ApplyHomeLevelConfigFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_ApplyHomeLevelConfigFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ApplyLoadedHomeLevelConfigLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2258cW3mfxL/6rfz8TpX54X", "G12_FHeartSystem_ApplyLoadedHomeLevelConfigLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, o = t && e[t], n = 0;
if (o) return o.call(e);
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
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ApplyLoadedHomeLevelConfigLogic = void 0;
var f = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e, t, o, n = this;
if (this.jsonData.error) {
var r = null !== (o = this.homeLevelConfigCacheLogic.runtime.loadingUrlLevelMap[String(this.jsonData.url)]) && void 0 !== o ? o : 0;
if (r <= 0) return;
this.homeUIListItemDomain.collect().forEach(function(e) {
if (!(n.homeUIListItemDomain.listItemCmp.level[e] < r)) {
var t = n.homeUIListItemAndRewardRelation.getTargets(e)[0];
if (t && n.homeUIRewardDomain.has(t)) {
n.homeUIListItemAndRewardRelation.remove(e, t);
n.homeUIRewardDomain.destroy(t);
}
n.homeUIListItemDomain.destroy(e);
}
});
} else {
var i = this.jsonData.jsonData;
if (i && "number" == typeof i.id) {
var a = !1;
this.homeUIListItemDomain.collect().forEach(function(e) {
if (n.homeUIListItemDomain.listItemCmp.level[e] === i.id) {
a = !0;
n.applyHomeLevelConfigFunc(e, i, n.homeUIListItemDomain.listItemCmp.isCanPlay[e]);
}
});
if (!a) {
var f = this.homeLevelConfigCacheLogic.runtime, p = f.windowStartLevel, u = f.lastAvailableLevel > 0 ? Math.min(f.lastAvailableLevel, p + f.windowSize - 1) : p + f.windowSize - 1;
if (!(i.id < p || i.id > u)) {
var s = this.homeUIListItemDomain.collect(), y = s.length > 0 ? this.childOf.getParent(s[0]) : null;
if (y) {
var d = i.id - p, l = this.homeUIConfig.layout.listItemStartY + d * this.homeUIConfig.layout.listItemSpaceY, _ = this.createHomeUIItemFunc(i.id, i.id === p, l, this.homeUIConfig.layout.listItemSpaceY);
this.childOf.addChild(y, _);
var m = [];
try {
for (var h = c(this.childOf.getChildren(y)), g = h.next(); !g.done; g = h.next()) {
var F = g.value;
this.homeUIListItemDomain.has(F) && m.push(F);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
g && !g.done && (t = h.return) && t.call(h);
} finally {
if (e) throw e.error;
}
}
m.sort(function(e, t) {
return n.homeUIListItemDomain.listItemCmp.level[e] - n.homeUIListItemDomain.listItemCmp.level[t];
});
for (var b = m.length - 1; b >= 0; b--) {
this.childOf.removeChild(y, m[b]);
this.childOf.addChild(y, m[b]);
}
}
}
}
}
}
};
var o, n, f, p, u, s, y, d, l, _;
i([ ae.signalStart, ae.onChain, ae.bindAtom("G12_FHeartSystem_HomeLevelConfigLoadedSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "homeLevelConfigLoadedSignal", void 0);
i([ ae.bindAtom("G_FAtom_JsonData"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "jsonData", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIListItemDomain"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "homeUIListItemDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIRewardDomain"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "homeUIRewardDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIListItemAndRewardRelation"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "homeUIListItemAndRewardRelation", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeLevelConfigCacheLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "homeLevelConfigCacheLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ApplyHomeLevelConfigFunc"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "applyHomeLevelConfigFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CreateHomeUIItemFunc"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "createHomeUIItemFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIConfig"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "homeUIConfig", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "childOf", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ApplyLoadedHomeLevelConfigLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_ApplyLoadedHomeLevelConfigLogic = f;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_AssetConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "84849ifzixJGIT+lPPME5Jx", "G12_FHeartSystem_AssetConfig");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_AssetConfig = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e, t = this.url(this.assetStyleConfig.featureName);
return {
textureAutoAtlas: t("res/textures/AutoAtlas"),
collectSfx: t("res/audios/hear_collect"),
breakSfx: t("res/audios/heart_break"),
maskTexUrl: t("res/textures/singleColor"),
blockFlowPnl3TexUrl: t("res/textures/BlockFlow_pnl_3"),
blockFlowPnl4TexUrl: t("res/textures/BlockFlow_pnl_4"),
blockFlowPnl5TexUrl: t("res/textures/BlockFlow_pnl_5"),
blockFlowIconHeart1TexUrl: t("res/textures/BlockFlow_icon_Hrt_1"),
blockFlowIconHeart2TexUrl: t("res/textures/BlockFlow_icon_Hrt_2"),
blockFlowIconHeart3TexUrl: t("res/textures/BlockFlow_icon_Hrt_3"),
blockFlowIconHeart4TexUrl: t("res/textures/BlockFlow_icon_Hrt_4"),
blockFlowImgHeartPanel1TexUrl: t("res/textures/BlockFlow_img_Hrtpnl1"),
blockFlowImgHeartPanel2TexUrl: t("res/textures/BlockFlow_img_Hrtpnl2"),
blockFlowImgHeartPanel3TexUrl: t("res/textures/BlockFlow_img_Hrtpnl3"),
blockFlowImgHeartPanel4TexUrl: t("res/textures/BlockFlow_img_Hrtpnl4"),
blockFlowBarLvlMap2TexUrl: t("res/textures/BlockFlow_bar_LvlMap2"),
blockFlowImgLvlMap1TexUrl: t("res/textures/BlockFlow_img_LvlMap1"),
blockFlowImgLvlMap2TexUrl: t("res/textures/BlockFlow_img_LvlMap2"),
blockFlowImgLvlMap3TexUrl: t("res/textures/BlockFlow_img_LvlMap3"),
blockFlowImgLvlMap4TexUrl: t("res/textures/BlockFlow_img_LvlMap4"),
guanqiaBlue: t("res/textures/guanqia_blue"),
guanqiaGreen: t("res/textures/guanqia_green"),
guanqiaPurple: t("res/textures/guanqia_purple"),
glowSd01: t("res/textures/glow_sd01"),
blockFlowWarningTexUrl: t("res/textures/BlockFlow_Warning"),
homeUISkin: (e = {}, e[0] = {
bgTopColor: 8663065,
bgBotColor: 15378267,
playBtnTexUrl: this.baseTextureCfg.blockFlowBtn1,
topMaskTexUrl: t("res/textures/BlockFlow_img_Grad2"),
settingBtnTexUrl: t("res/textures/gameplay_img_001"),
quitBtnTexUrl: t("res/textures/BlockFlow_bnt_back1")
}, e[1] = {
bgTopColor: 3422361,
bgBotColor: 4818136,
playBtnTexUrl: this.baseTextureCfg.blockFlowBtn2,
topMaskTexUrl: t("res/textures/BlockFlow_img_Grad1"),
settingBtnTexUrl: t("res/textures/gameplay_img_001_2"),
quitBtnTexUrl: t("res/textures/BlockFlow_bnt_back2")
}, e),
gameplayStaminaJiajianSpine: {
url: t("res/spines/change/gameplay_Stamina_jiajian"),
animName: {
in1: "in1",
in2: "in2"
}
},
gameplayStamina1Spine: {
url: t("res/spines/win/gameplay_Stamina_01"),
animName: {
in: "in"
}
},
gameplayStamina2Spine: {
url: t("res/spines/fail/gameplay_Stamina_02"),
animName: {
in: "in"
}
},
gameplayBgLizi: {
url: t("res/spines/bglizi/gameplay_bg_lizi"),
animName: {
in: "in"
}
},
gameplayAddHeartSpine: {
url: t("res/spines/add/gameplay_Stamina_xin"),
scale: 1.9,
animName: {
in: "in"
}
}
};
};
var o, n;
i([ ae.bindAtom("G12_FHeartSystem_AssetStyleConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "assetStyleConfig", void 0);
i([ ae.bindAtom("G12_FBase_TextureCfg"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "baseTextureCfg", void 0);
return i([ ae.atomClass("G12_FHeartSystem_AssetConfig") ], t);
}(ae.ConfigAtom);
o.G12_FHeartSystem_AssetConfig = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_AssetStyleConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "70e1fGW1IRDO4gpEFbHEnmS", "G12_FHeartSystem_AssetStyleConfig");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_AssetStyleConfig = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
featureName: "G12_FHeartSystem"
};
};
return i([ ae.atomClass("G12_FHeartSystem_AssetStyleConfig") ], t);
}(ae.ConfigAtom);
o.G12_FHeartSystem_AssetStyleConfig = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_AssetsLoad: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "80eaerSXlJBu4GTqWwpXZiP", "G12_FHeartSystem_AssetsLoad");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_AssetsLoad = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineLoad = function() {
var e;
return {
paths: (e = {}, e[ae.LoaderAssetType.SpriteAtlas] = [ this.assetsCfg.textureAutoAtlas ], 
e[ae.LoaderAssetType.SkeletonData] = [ this.assetsCfg.gameplayStaminaJiajianSpine.url, this.assetsCfg.gameplayStamina1Spine.url, this.assetsCfg.gameplayStamina2Spine.url, this.assetsCfg.gameplayAddHeartSpine.url, this.assetsCfg.gameplayBgLizi.url ], 
e[ae.LoaderAssetType.AudioClip] = [ this.assetsCfg.collectSfx, this.assetsCfg.breakSfx ], 
e),
silent: !0
};
};
var o;
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "assetsCfg", void 0);
return i([ ae.atomClass("G12_FHeartSystem_AssetsLoad") ], t);
}(ae.LoadAtom);
o.G12_FHeartSystem_AssetsLoad = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_BezierCmp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2f103PVpj1KtoL+p6BonSIg", "G12_FHeartSystem_BezierCmp");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_BezierCmp = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
startX: 0,
startY: 0,
endX: 0,
endY: 0,
controlX: 0,
controlY: 0,
duration: 0,
elapsedTime: 0
};
};
return i([ ae.atomClass("G12_FHeartSystem_BezierCmp") ], t);
}(ae.EntityComponentAtom);
o.G12_FHeartSystem_BezierCmp = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_BtnSettingDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "891b6EjQspLLKGJyfvU8fVA", "G12_FHeartSystem_BtnSettingDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_BtnSettingDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
return i([ ae.atomClass("G12_FHeartSystem_BtnSettingDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_BtnSettingDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_BtnSettingRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7448ePYrJVCy59yGSs29hDj", "G12_FHeartSystem_BtnSettingRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_BtnSettingRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = this.assetsConfig.homeUISkin[this.heartConfig.homeUISkinType];
return ae.Node({
name: "BtnSettingRoot"
}, ae.Sprite({
name: "BtnSetting",
img: t.settingBtnTexUrl,
x: (this.constCfg.TrackWidth >> 1) - this.homeUIConfig.layout.settingButton.offsetRight,
y: [ function() {
return e.calculateTopYFunc() + e.adaptLogic.runtime.offsetY;
}, [ this.adaptLogic, "runtime", "offsetY" ] ],
button: this.constCfg.Button,
event: {
buttonClick: this.setting2UIRouter
}
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p, u, s, y, d;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_BtnSettingDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FBase_TextureCfg"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "textureCfg", void 0);
i([ ae.bindAtom("G12_FBase_AdaptLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "adaptLogic", void 0);
i([ ae.bindAtom("G12_FBase_CalculateTopYFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "calculateTopYFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_Setting2UIRouter"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "setting2UIRouter", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIConfig"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "homeUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "heartConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_BtnSettingRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_BtnSettingRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ChangeGameLevelRenderLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cb1d6KnQ7xBE5g4ZYij/U2g", "G12_FHeartSystem_ChangeGameLevelRenderLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ChangeGameLevelRenderLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this;
this.gameLevelTextRender.GameLevelText.text = [ function(t) {
return e.getGameLevelTextFunc(t);
}, [ this.gameLevelTextDomain.gameLevelTextCmp, "levelText" ] ];
var t = this.hpHUDConfig.layout.gameLevelText;
this.gameLevelTextRender.GameLevelTextBg.width = this.rednerAdaptRegisterFunc().numberType(this.gameLevelTextRender.GameLevelTextBg.width, [ function() {
return e.getGameLevelTextOffsetXFunc();
}, [ this.heartManagerLogic, "runtime", "isOpenQuitBtn" ] ], t.bgWidth);
this.gameLevelTextRender.GameLevelTextBg.x = this.rednerAdaptRegisterFunc().numberType(this.gameLevelTextRender.GameLevelTextBg.x, [ function() {
return e.getGameLevelTextOffsetXFunc();
}, [ this.heartManagerLogic, "runtime", "isOpenQuitBtn" ] ], t.bgX);
this.gameLevelTextRender.GameLevelText.overflow = ae.TextOverflow.SHRINK;
this.gameLevelTextRender.GameLevelText.enableWrapText = !1;
this.gameLevelTextRender.GameLevelText.x = 0;
this.gameLevelTextRender.GameLevelText.horizontalAlign = ae.TextHorizontalAlign.CENTER;
this.gameLevelTextRender.GameLevelText.widget = {
enabled: !0,
isAlignLeft: !0,
isAlignRight: !0,
isAlignBottom: !0,
isAlignTop: !0,
left: this.hpHUDConfig.layout.gameLevelText.levelTextLeftOffset,
right: this.hpHUDConfig.layout.gameLevelText.levelTextRightOffset
};
};
var o, n, c, f, p, u, s;
i([ ae.onChain, ae.bindAtom("G12_FBase_GameLevelTextRender"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameLevelTextRender", void 0);
i([ ae.bindAtom("G12_FBase_GameLevelTextDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameLevelTextDomain", void 0);
i([ ae.bindAtom("G12_FBase_RednerAdaptRegisterFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "rednerAdaptRegisterFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "hpHUDConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetGameLevelTextFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getGameLevelTextFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetGameLevelTextOffsetXFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "getGameLevelTextOffsetXFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ChangeGameLevelRenderLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_ChangeGameLevelRenderLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ChangeGamePanelAlphaLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7daffDxq6tFJ5DaBPpZ7oHx", "G12_FHeartSystem_ChangeGamePanelAlphaLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ChangeGamePanelAlphaLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this;
!0 === this.heartConfig.outerMapEnabled && (this.fullNodeRender.FullNode.alpha = [ function(t) {
var o = e.baseUiMgrFunc();
return t === o.get(o.cfg.GamePanel) ? e.heartManagerLogic.runtime.gamePanelAlpha : 1;
}, [ this.heartManagerLogic, "runtime", "gamePanelAlpha" ] ]);
};
var o, n, c, f;
i([ ae.onChain, ae.bindAtom("G12_FBase_FullNodeRender"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "fullNodeRender", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "baseUiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "heartConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ChangeGamePanelAlphaLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_ChangeGamePanelAlphaLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ChangeResultFailedLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3c9fbUiPDBBAacPi3aapeLd", "G12_FHeartSystem_ChangeResultFailedLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ChangeResultFailedLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.failPageRender.FailPageRetryBtn.zIndex = this.rednerAdaptRegisterFunc().numberType(this.failPageRender.FailPageRetryBtn.zIndex, [ this.getFailUILostHeartZIndexFunc, [ this.createFailUILogic, "runtime", "isShowFailHeart" ] ], 0);
this.failPageRender.FailPageRetrySlotRoot.layout || (this.failPageRender.FailPageRetrySlotRoot.layout = {
type: ae.LayoutType.Vertical,
paddingTop: 0,
spacingX: 0,
spacingY: 0
});
};
var o, n, c, f;
i([ ae.onChain, ae.bindAtom("G12_FBase_FailPageRender"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "failPageRender", void 0);
i([ ae.bindAtom("G12_FBase_RednerAdaptRegisterFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "rednerAdaptRegisterFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CreateFailUILogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "createFailUILogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetFailUILostHeartZIndexFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getFailUILostHeartZIndexFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ChangeResultFailedLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_ChangeResultFailedLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ChangeResultWinLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "91d93t6/MFNtK92YAqREpNb", "G12_FHeartSystem_ChangeResultWinLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ChangeResultWinLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this;
this.resultWinRender.ResultWinVictorySlotTxt2.active = this.rednerAdaptRegisterFunc().booleanType(this.resultWinRender.ResultWinVictorySlotTxt2.active, [ this.getWinUIAddHeartActiveFunc, [ this.createWinUILogic, "runtime", "isShowWinHeart" ] ], !0);
this.resultWinRender.ContinueButton.zIndex = this.rednerAdaptRegisterFunc().numberType(this.resultWinRender.ContinueButton.zIndex, [ this.getWinUIAddHeartZIndexFunc, [ this.createWinUILogic, "runtime", "isShowWinHeart" ] ], 0);
this.resultWinRender.ContinueButton.zIndex = [ function(t) {
var o;
return !e.resultWinRender.ContinueButton.zIndex[t] || e.resultWinRender.ContinueButton.zIndex[t] < e.winUIConfig.layout.zIndex ? e.winUIConfig.layout.zIndex + 1 : null !== (o = e.resultWinRender.ContinueButton.zIndex[t]) && void 0 !== o ? o : 0;
}, [ this.createWinUILogic, "runtime", "heartTipZIndex" ] ];
if (!this.resultWinRender.ResultWinVictorySlotContinueRoot.layout) {
this.resultWinRender.ResultWinVictorySlotContinueRoot.layout = {
type: ae.LayoutType.Vertical,
paddingTop: 0,
spacingX: 0,
spacingY: 0
};
this.resultWinRender.ResultWinVictorySlotContinueRoot.layout.paddingTop = [ this.getWinUILayoutPaddingTopFunc, [ this.createWinUILogic, "runtime", "isShowWinHeart" ] ];
}
};
var o, n, c, f, p, u, s, y;
i([ ae.onChain, ae.bindAtom("G12_FBase_ResultWinRender"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "resultWinRender", void 0);
i([ ae.bindAtom("G12_FBase_RednerAdaptRegisterFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "rednerAdaptRegisterFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CreateWinUILogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "createWinUILogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetWinUIAddHeartActiveFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getWinUIAddHeartActiveFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetWinUIAddHeartZIndexFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "getWinUIAddHeartZIndexFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetResultWinContinueBtnYFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getResultWinContinueBtnYFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_WinUIConfig"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "winUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetWinUILayoutPaddingTopFunc"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "getWinUILayoutPaddingTopFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ChangeResultWinLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_ChangeResultWinLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CheckEnterLevelFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "434e5oRrHhDv5v5VAUds5jX", "G12_FHeartSystem_CheckEnterLevelFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CheckEnterLevelFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.heartManagerLogic.storage, n = o.lastEnterLevel === t;
if (t <= e.heartConfig.startCostHeartLevelThreshold) return {
canEnter: !0,
enterCost: 0
};
var r = e.heartConfig.isOnlyNewEnterCost && n ? 0 : e.getEnterCostHeartFunc(t), i = r + e.getFailCostHeartFunc(t);
return o.currentHeart < i ? {
canEnter: !1,
enterCost: r
} : {
canEnter: !0,
enterCost: r
};
};
};
var o, n, c, f;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetFailCostHeartFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getFailCostHeartFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetEnterCostHeartFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getEnterCostHeartFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CheckEnterLevelFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_CheckEnterLevelFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CheckRecoveryFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "41e94I0vPJKuImVic3yYdl6", "G12_FHeartSystem_CheckRecoveryFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CheckRecoveryFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
if (e.uiMgrFunc().isOpen(e.uiConfig.emptyUI)) {
if (e.tryCompletePendingRetryFunc()) return;
e.uiMgrFunc().close(e.uiConfig.emptyUI);
e.heartMgrFunc().enterLevel(null, e.uiMgrFunc().isOpen(e.uiConfig.homeUI));
e.closeHomeUIFunc();
}
};
};
var o, n, c, f, p;
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_TryCompletePendingRetryFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tryCompletePendingRetryFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CloseHomeUIFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "closeHomeUIFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CheckRecoveryFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_CheckRecoveryFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ClearEmptyUIRewardAdStateOnFailLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "378feJf3kpOkLLng9IyZ3ym", "G12_FHeartSystem_ClearEmptyUIRewardAdStateOnFailLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ClearEmptyUIRewardAdStateOnFailLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.adResult.adType === ae.AdType.Reward && this.adResult.state !== ae.AdResultState.Success && (this.heartManagerLogic.runtime.isEmptyUIRewardAdShowing = !1);
};
var o, n, c;
i([ ae.onChain, ae.bindAtom("G12_FBase_ADResultSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "adResultSignal", void 0);
i([ ae.bindAtom("G_FAtom_ADResult"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "adResult", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartManagerLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ClearEmptyUIRewardAdStateOnFailLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_ClearEmptyUIRewardAdStateOnFailLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CloseHomeUIFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3e456ymjO5FbYDwQ2TktnzP", "G12_FHeartSystem_CloseHomeUIFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CloseHomeUIFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
e.uiMgrFunc().close(e.uiConfig.homeUI);
e.loadSingleBlockLogic.runtime.oneLoadCount = 30;
};
};
var o, n, c;
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FBase_LoadSingleBlockLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "loadSingleBlockLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CloseHomeUIFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_CloseHomeUIFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CloseQuitUISignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fefdeKCy49OAYkEbSruMK0F", "G12_FHeartSystem_CloseQuitUISignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CloseQuitUISignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_QuitUIDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "quitUIDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CloseQuitUISignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_CloseQuitUISignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CloseSettingPanelLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d0d34C4KWJIv7WxpIs4fiAi", "G12_FHeartSystem_CloseSettingPanelLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CloseSettingPanelLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.commonButtonClickEffectFunc();
this.uiMgrFunc().close(this.uiConfig.homeSetUI);
};
var o, n, c, f;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_CloseSettingSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "closeSettingSignal", void 0);
i([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "commonButtonClickEffectFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "uiMgrFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CloseSettingPanelLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_CloseSettingPanelLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CloseSettingRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8d4d5qtpoBH7YQjnWiO4+Ur", "G12_FHeartSystem_CloseSettingRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CloseSettingRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_CloseSettingSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CloseSettingRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_CloseSettingRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CloseSettingSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2634fEcel9PFqipVDpi5Cig", "G12_FHeartSystem_CloseSettingSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CloseSettingSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_SettingPanelDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "settingPanelDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CloseSettingSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_CloseSettingSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CloseUIFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b25a9vhD/tIfosHJgMDHzn5", "G12_FHeartSystem_CloseUIFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CloseUIFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = this.uiCfgMapFunc().uiCfgMap;
return function(o) {
if (t[o]) {
var n = t[o];
e.hidePageFunc(n);
e.updateGameStatesFunc();
}
};
};
var o, n, c;
i([ ae.bindAtom("G12_FBase_HidePageFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "hidePageFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UICfgMapFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiCfgMapFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UpdateGameStatesFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "updateGameStatesFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CloseUIFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_CloseUIFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CostHeartFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "06072px7gxGAK+IL7bjfuSH", "G12_FHeartSystem_CostHeartFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CostHeartFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.heartManagerLogic.storage;
if (t <= 0) return !0;
if (o.currentHeart < t) return !1;
o.currentHeart -= t;
e.refreshRecoveryFunc();
e.reportGameStatusFunc();
return !0;
};
};
var o, n, c;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_RefreshRecoveryFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "refreshRecoveryFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GameRuntimeReportFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "reportGameStatusFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CostHeartFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_CostHeartFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CreateFailBigHeartFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a9d5aBcHDtKgYJlIhIcnZjk", "G12_FHeartSystem_CreateFailBigHeartFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CreateFailBigHeartFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.failUIBigHeartDomain.create();
e.childOf.addChild(t, o);
return o;
};
};
var o, n;
i([ ae.bindAtom("G12_FHeartSystem_FailUIBigHeartDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "failUIBigHeartDomain", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "childOf", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CreateFailBigHeartFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_CreateFailBigHeartFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CreateFailUILogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "242c7d69m9CwZAmoT4UsU65", "G12_FHeartSystem_CreateFailUILogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CreateFailUILogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
isShowFailHeart: !1
};
};
t.prototype.onExecute = function(e, t) {
if (!(this.getFailCostHeartFunc() <= 0)) {
var o = this.uiMgrFunc();
if (o.getStateClosed(o.cfg.FailPage.key)) this.heartMgrFunc().flyHeartComplete(); else {
var n = o.getStateOpened(o.cfg.FailPage.key);
if (null == n ? void 0 : n.eid) {
this.createHpBigHeartFunc(n.eid, this.failUIConfig.layout.hpHUDOffsetXFromRight, !1);
t.runtime.isShowFailHeart = !0;
var r = this.failUIDomain.create();
this.childOf.addChild(n.eid, r, this.failUIConfig.parentBeforeName);
this.failUIDomain.boxComponent.height.set(r, this.failUIConfig.layout.uiHeight);
var i = this.createFailBigHeartFunc(r);
this.failUIBigHeartDomain.transform.y.set(i, this.failUIConfig.layout.bigHeartY);
this.tween(r, [ [ ae.TweenStepType.Delay, this.failUIConfig.tween.animDuration ], [ ae.TweenStepType.Router, this.tweenSyncHeartViewRouter ], [ ae.TweenStepType.To, this.failUIDomain.tweenUICmp, {
alpha: this.failUIConfig.tween.visibleAlpha
}, this.failUIConfig.tween.bigHeartShowDuration ] ]);
}
}
}
};
var o, n, c, f, p, u, s, y, d, l, _, m;
i([ ae.onChain, ae.bindAtom("G12_FBase_UIMgrStateChangedSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CreateHpBigHeartFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "createHpBigHeartFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CreateFailBigHeartFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "createFailBigHeartFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_FailUIBigHeartDomain"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "failUIBigHeartDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_FailUIConfig"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "failUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetFailCostHeartFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "getFailCostHeartFunc", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G12_FHeartSystem_FailUIDomain"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "failUIDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_TweenSyncHeartViewRouter"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "tweenSyncHeartViewRouter", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "heartMgrFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CreateFailUILogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_CreateFailUILogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CreateGameplayHpHUDLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b5dd0OxGXdH2ZE2b1vT+21a", "G12_FHeartSystem_CreateGameplayHpHUDLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CreateGameplayHpHUDLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
if (this.heartMgrFunc().isActive()) {
var e = this.nodeInstanceMgrFunc().get(this.nodeInstanceCfgFunc().GameTopUIOverlay);
e && this.createHpBigHeartFunc(e, this.hpHUDConfig.layout.offsetXFromRight, !0);
}
};
var o, n, c, f, p, u;
i([ ae.onChain, ae.bindAtom("G12_FBase_LoadGamePanelSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "loadGamePanelSignal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CreateHpBigHeartFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "createHpBigHeartFunc", void 0);
i([ ae.bindAtom("G12_FBase_NodeInstanceMgrFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "nodeInstanceMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_NodeInstanceCfgFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "nodeInstanceCfgFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "hpHUDConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "heartMgrFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CreateGameplayHpHUDLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_CreateGameplayHpHUDLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CreateGetUIBigHeartFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b4dffOupjFEuIHCaexseiDe", "G12_FHeartSystem_CreateGetUIBigHeartFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CreateGetUIBigHeartFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n, r, i) {
void 0 === i && (i = 1);
var a = e.getUIBigHeartDomain.create();
e.childOf.addChild(t, a);
e.getUIBigHeartDomain.transform.x.set(a, n);
e.getUIBigHeartDomain.transform.y.set(a, r);
e.getUIBigHeartDomain.transform.scaleX.set(a, i);
e.getUIBigHeartDomain.transform.scaleY.set(a, i);
e.getUIBigHeartDomain.heartCmp.heartIndex.set(a, o);
return a;
};
};
var o, n;
i([ ae.bindAtom("G12_FHeartSystem_GetUIBigHeartDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "getUIBigHeartDomain", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "childOf", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CreateGetUIBigHeartFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_CreateGetUIBigHeartFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CreateHomeSetUIFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e882daLhkdKwrVlVf4ZGXP/", "G12_FHeartSystem_CreateHomeSetUIFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CreateHomeSetUIFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return e.uiMgrFunc().open(e.uiConfig.homeSetUI);
};
};
var o, n;
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiMgrFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CreateHomeSetUIFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_CreateHomeSetUIFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CreateHomeSetUILogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6526dzRYVpCOaqF8j/Gef9y", "G12_FHeartSystem_CreateHomeSetUILogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CreateHomeSetUILogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.commonButtonClickEffectFunc();
if (!this.uiMgrFunc().isOpen(this.uiConfig.homeSetUI)) {
var e = this.createHomeSetUIFunc();
if (e) {
var t = this.musicRowDomain.create();
this.childOf.addChild(e, t);
this.musicRowDomain.transform.y.set(t, this.settingConfig.musicRowY);
var o = this.effectRowDomain.create();
this.childOf.addChild(e, o);
this.effectRowDomain.transform.y.set(o, this.settingConfig.effectRowY);
var n = this.vibrationRowDomain.create();
this.childOf.addChild(e, n);
this.vibrationRowDomain.transform.y.set(n, this.settingConfig.vibrationRowY);
}
}
};
var o, n, c, f, p, u, s, y, d, l;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_GameSettingSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CreateHomeSetUIFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "createHomeSetUIFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_MusicRowDomain"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "musicRowDomain", void 0);
i([ ae.bindAtom("G12_FBase_EffectRowDomain"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "effectRowDomain", void 0);
i([ ae.bindAtom("G12_FBase_VibrationRowDomain"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "vibrationRowDomain", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "commonButtonClickEffectFunc", void 0);
i([ ae.bindAtom("G12_FBase_SettingConfig"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "settingConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "uiConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CreateHomeSetUILogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_CreateHomeSetUILogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CreateHomeUIFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d0de4gQYKBL8rnxf/0j6Gpq", "G12_FHeartSystem_CreateHomeUIFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__read || function(e, t) {
var o = "function" == typeof Symbol && e[Symbol.iterator];
if (!o) return e;
var n, r, i = o.call(e), a = [];
try {
for (;(void 0 === t || t-- > 0) && !(n = i.next()).done; ) a.push(n.value);
} catch (e) {
r = {
error: e
};
} finally {
try {
n && !n.done && (o = i.return) && o.call(i);
} finally {
if (r) throw r.error;
}
}
return a;
}, f = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
return e;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CreateHomeUIFunc = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
void 0 === o && (o = !1);
var n;
n = e.uiMgrFunc().isOpen(e.uiConfig.homeUI) ? e.uiMgrFunc().get(e.uiConfig.homeUI) : e.uiMgrFunc().open(e.uiConfig.homeUI);
var r = e.homeUIListContainerDomain.create();
e.childOf.addChild(n, r);
var i = e.createHomeUIItemListFunc(r, t, e.homeUIConfig.listItemNum, e.homeUIConfig.layout.listItemStartY, e.homeUIConfig.layout.listItemSpaceY, o), a = e.homeUITopMaskDomain.create(), c = e.getWinSize(), p = e.homeUIConfig.layout.topMask.baseHeight + (c.height / 2 - e.getTopbarYFunc());
e.homeUITopMaskDomain.transform.y.set(a, c.height / 2 - p / 2);
e.homeUITopMaskDomain.boxComponent.height.set(a, p);
e.homeUITopMaskDomain.boxComponent.width.set(a, c.width);
e.childOf.addChild(n, a);
var u = e.homeUIEnterBtnDomain.create();
e.homeUIEnterBtnDomain.transform.x.set(u, 0);
e.homeUIEnterBtnDomain.transform.y.set(u, e.homeUIConfig.layout.enterBtn.y);
e.homeUIEnterBtnDomain.boxComponent.width.set(u, e.homeUIConfig.layout.enterBtn.width);
e.homeUIEnterBtnDomain.boxComponent.height.set(u, e.homeUIConfig.layout.enterBtn.height);
e.childOf.addChild(n, u);
var s = e.btnSettingDomain.create();
e.childOf.addChild(n, s);
e.btnSettingDomain.transform.x.set(s, 0);
e.btnSettingDomain.transform.y.set(s, 0);
var y = e.createHpBigHeartFunc(n, e.homeUIConfig.layout.hpHUD.offsetXFromRight, !0), d = [ [ ae.TweenStepType.Repeat, 0, [ [ ae.TweenStepType.To, e.homeUIDomain.tweenUICmp, {
angle: 360
}, 16 ], [ ae.TweenStepType.To, e.homeUIDomain.tweenUICmp, {
angle: 0
}, 0 ] ] ] ];
e.tween(n, o ? f([ [ ae.TweenStepType.Delay, 0 ] ], d) : d);
e.loadSingleBlockLogic.runtime.oneLoadCount = 0;
return {
homeUIEid: n,
listContainerEid: r,
topMaskEid: a,
homeUIEnterBtnEid: u,
btnSettingEid: s,
hpHUDEid: y,
homeUIItemListEids: i
};
};
};
var o, n, c, p, u, s, y, d, l, _, m, h, g, F, b;
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "homeUIDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIEnterBtnDomain"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "homeUIEnterBtnDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_BtnSettingDomain"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "btnSettingDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CreateHpBigHeartFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "createHpBigHeartFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CreateHomeUIItemListFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "createHomeUIItemListFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIListContainerDomain"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "homeUIListContainerDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUITopMaskDomain"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "homeUITopMaskDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIConfig"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "homeUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), a("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_GetWinSize"), a("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "getWinSize", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetTopbarYFunc"), a("design:type", "function" == typeof (F = "undefined" != typeof ae && ae.AtomTypeInfer) ? F : Object) ], t.prototype, "getTopbarYFunc", void 0);
i([ ae.bindAtom("G12_FBase_LoadSingleBlockLogic"), a("design:type", "function" == typeof (b = "undefined" != typeof ae && ae.AtomTypeInfer) ? b : Object) ], t.prototype, "loadSingleBlockLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CreateHomeUIFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_CreateHomeUIFunc = p;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CreateHomeUIItemFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "77ca5/rBc1Deps4tOFCPpQ5", "G12_FHeartSystem_CreateHomeUIItemFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CreateHomeUIItemFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n, r, i) {
void 0 === i && (i = !0);
var a = e.homeUIConfig.tween.currentItemBgScale, c = e.homeUIListItemDomain.create();
e.homeUIListItemDomain.transform.x.set(c, 0);
e.homeUIListItemDomain.transform.y.set(c, n);
e.homeUIListItemDomain.listItemCmp.level.set(c, t);
e.homeUIListItemDomain.listItemCmp.isCanPlay.set(c, o);
e.homeUIListItemDomain.listItemCmp.alpha.set(c, e.homeUIConfig.tween.listSlide.visibleAlpha);
e.homeUIListItemDomain.listItemCmp.prgAlpha.set(c, o ? e.homeUIConfig.tween.listSlide.hiddenAlpha : e.homeUIConfig.tween.listSlide.visibleAlpha);
e.homeUIListItemDomain.listItemCmp.spaceY.set(c, r);
e.homeUIListItemDomain.listItemCmp.guangqiaAlpha.set(c, o ? e.homeUIConfig.tween.listSlide.visibleAlpha : e.homeUIConfig.tween.listSlide.hiddenAlpha);
e.stopTween(c, "HomeUICurrentItemBgScale");
e.homeUIListItemDomain.listItemCmp.bgScale.set(c, a.normalScale);
o && i && e.tween(c, [ [ ae.TweenStepType.Repeat, 0, [ [ ae.TweenStepType.To, e.homeUIListItemDomain.listItemCmp, {
bgScale: a.activeScale
}, a.duration, ae.TweenEasing.SineInOut ], [ ae.TweenStepType.To, e.homeUIListItemDomain.listItemCmp, {
bgScale: a.normalScale
}, a.duration, ae.TweenEasing.SineInOut ] ] ] ], "HomeUICurrentItemBgScale");
e.applyHomeLevelConfigFunc(c, e.getHomeLevelConfigFunc(t), o);
return c;
};
};
var o, n, c, f, p, u;
i([ ae.bindAtom("G12_FHeartSystem_HomeUIListItemDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "homeUIListItemDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetHomeLevelConfigFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getHomeLevelConfigFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ApplyHomeLevelConfigFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "applyHomeLevelConfigFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "homeUIConfig", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_StopTween"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "stopTween", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CreateHomeUIItemFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_CreateHomeUIItemFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CreateHomeUIItemListFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d0b27lnEThFw4l6x9Gm21Wp", "G12_FHeartSystem_CreateHomeUIItemListFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CreateHomeUIItemListFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n, r, i, a) {
void 0 === a && (a = !1);
e.loadHomeLevelConfigWindowFunc(o);
for (var c = e.homeLevelConfigCacheLogic.runtime, f = null != r ? r : e.homeUIConfig.layout.listItemStartY, p = null != i ? i : e.homeUIConfig.layout.listItemSpaceY, u = [], s = 0; s < n; s++) {
var y = o + s;
if (c.lastAvailableLevel > 0 && y > c.lastAvailableLevel) break;
if (e.getHomeLevelConfigFunc(y)) {
var d = e.createHomeUIItemFunc(y, y === o, f + s * p, p, !(a && y === o));
u.push(d);
}
}
for (s = u.length - 1; s >= 0; s--) e.childOf.addChild(t, u[s]);
return u;
};
};
var o, n, c, f, p, u;
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeLevelConfigCacheLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "homeLevelConfigCacheLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_LoadHomeLevelConfigWindowFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "loadHomeLevelConfigWindowFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetHomeLevelConfigFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getHomeLevelConfigFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CreateHomeUIItemFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "createHomeUIItemFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIConfig"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "homeUIConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CreateHomeUIItemListFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_CreateHomeUIItemListFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CreateHpBigHeartFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "146aeTFhuRIbKlSx1ayeByw", "G12_FHeartSystem_CreateHpBigHeartFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CreateHpBigHeartFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n, r) {
void 0 === n && (n = !0);
void 0 === r && (r = 0);
var i = e.hpHUDBigHeartDomain.create();
e.childOf.addChild(t, i);
e.hpHUDBigHeartDomain.transform.x.set(i, (e.constCfg.TrackWidth >> 1) - o);
e.hpHUDBigHeartDomain.transform.y.set(i, e.getTopbarYFunc() + r);
e.hpHUDBigHeartDomain.hpHUDCmp.isCanOpenAddBuble.set(i, n);
return i;
};
};
var o, n, c, f;
i([ ae.bindAtom("G12_FHeartSystem_HpHUDBigHeartDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "hpHUDBigHeartDomain", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetTopbarYFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getTopbarYFunc", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "constCfg", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CreateHpBigHeartFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_CreateHpBigHeartFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CreateUIHeartListFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d47c4/12ldFAJtQcKSQaIQm", "G12_FHeartSystem_CreateUIHeartListFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CreateUIHeartListFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
e.heartRecoverySpineCompleteLogic.runtime.isAnimating = !1;
e.heartRecoverySpineCompleteLogic.runtime.spineIndex = -1;
e.heartManagerLogic.runtime.isEmptyUIRewardAdShowing = !1;
for (var n = Math.max(0, e.heartConfig.maxHeart), r = Math.max(0, n * o.heartTextureWidth), i = r > o.maxWidth ? o.maxWidth / r : 1, a = o.heartTextureWidth * i, c = (n - 1) * a / 2, f = 0; f < n; f++) {
var p = o.startX + f * a - c;
e.createGetUIBigHeartFunc(t, f, p, o.startY, i);
}
};
};
var o, n, c, f;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CreateGetUIBigHeartFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "createGetUIBigHeartFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartRecoverySpineCompleteLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "heartRecoverySpineCompleteLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CreateUIHeartListFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_CreateUIHeartListFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CreateWinBigHeartFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "59204DfXLBLj4qNtfflyz7d", "G12_FHeartSystem_CreateWinBigHeartFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CreateWinBigHeartFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n, r, i, a, c, f) {
var p = e.winUIBigHeartDomain.create();
e.childOf.addChild(t, p);
e.winUIBigHeartDomain.bezierCmp.elapsedTime.set(p, 0);
e.winUIBigHeartDomain.bezierCmp.duration.set(p, o);
e.winUIBigHeartDomain.bezierCmp.startX.set(p, n);
e.winUIBigHeartDomain.bezierCmp.startY.set(p, r);
e.winUIBigHeartDomain.bezierCmp.endX.set(p, i);
e.winUIBigHeartDomain.bezierCmp.endY.set(p, a);
e.winUIBigHeartDomain.bezierCmp.controlX.set(p, c);
e.winUIBigHeartDomain.bezierCmp.controlY.set(p, f);
return p;
};
};
var o, n;
i([ ae.bindAtom("G12_FHeartSystem_WinUIBigHeartDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "winUIBigHeartDomain", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "childOf", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CreateWinBigHeartFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_CreateWinBigHeartFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_CreateWinUILogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "270a7goMMlB54fkSHhAaiKX", "G12_FHeartSystem_CreateWinUILogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_CreateWinUILogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
isShowWinHeart: !1,
heartTipZIndex: 0
};
};
t.prototype.onExecute = function(e, t) {
if (!(this.heartConfig.victoryPlusHeart <= 0 || this.heartConfig.victoryPlusHeartByLevel)) {
var o = this.uiMgrFunc();
if (o.getStateClosed(o.cfg.ResultWin.key)) {
if (this.heartManagerLogic.runtime.winRenderTweenEid) {
this.stopTween(this.heartManagerLogic.runtime.winRenderTweenEid, this.winUIConfig.winUIRenderTweenTag);
this.heartManagerLogic.runtime.winRenderTweenEid = null;
this.heartMgrFunc().flyHeartComplete();
}
} else {
var n = o.getStateOpened(o.cfg.ResultWin.key);
if (null == n ? void 0 : n.eid) {
var r = null == n ? void 0 : n.eid;
t.runtime.isShowWinHeart = !0;
t.runtime.heartTipZIndex = this.winUIConfig.layout.zIndex;
var i = this.winUIDomain.create();
this.childOf.addChild(r, i, this.winUIConfig.parentBeforeName);
this.winUIDomain.boxComponent.height.set(i, this.winUIConfig.layout.uiHeight);
this.createHpBigHeartFunc(r, this.winUIConfig.layout.hpHUDOffsetXFromRight, !1, this.winUIConfig.layout.hpHUDTopbarOffsetY);
this.winUIDomain.winUICmp.textAlpha.set(i, 0);
this.heartManagerLogic.runtime.winRenderTweenEid = i;
this.tween(i, [ [ ae.TweenStepType.Delay, this.winUIConfig.tween.showTextDelay ], [ ae.TweenStepType.To, this.winUIDomain.winUICmp, {
textAlpha: this.winUIConfig.tween.showAlpha
}, this.winUIConfig.tween.textShowDuration ], [ ae.TweenStepType.Delay, this.winUIConfig.tween.textHideDelay ], [ ae.TweenStepType.Router, this.winUIFlyHeartRouter ], [ ae.TweenStepType.To, this.winUIDomain.winUICmp, {
textAlpha: this.winUIConfig.tween.hiddenAlpha
}, this.winUIConfig.tween.instantDuration ] ], this.winUIConfig.winUIRenderTweenTag);
}
}
}
};
var o, n, c, f, p, u, s, y, d, l, _, m;
i([ ae.onChain, ae.bindAtom("G12_FBase_UIMgrStateChangedSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CreateHpBigHeartFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "createHpBigHeartFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_WinUIConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "winUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_StopTween"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "stopTween", void 0);
i([ ae.bindAtom("G12_FHeartSystem_WinUIDomain"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "winUIDomain", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G12_FHeartSystem_WinUIFlyHeartRouter"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "winUIFlyHeartRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "heartMgrFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_CreateWinUILogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_CreateWinUILogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_EmptyUICloseLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "27907ul75ZFmo3FS944sC7K", "G12_FHeartSystem_EmptyUICloseLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_EmptyUICloseLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this.getLevelFunc(), t = this.checkEnterLevelFunc(e).canEnter;
this.commonButtonClickEffectFunc();
if (t) {
var o = this.uiMgrFunc().isOpen(this.uiConfig.homeUI);
this.uiMgrFunc().close(this.uiConfig.emptyUI);
this.heartMgrFunc().enterLevel(e, o);
this.closeHomeUIFunc();
} else this.uiMgrFunc().isOpen(this.uiConfig.homeUI) ? this.uiMgrFunc().close(this.uiConfig.emptyUI) : this.return2BlockFunc();
};
var o, n, c, f, p, u, s, y, d;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_EmptyUICloseSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FBase_Return2BlockFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "return2BlockFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "heartMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CheckEnterLevelFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "checkEnterLevelFunc", void 0);
i([ ae.bindAtom("G12_FBase_GetLevelFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "getLevelFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CloseHomeUIFunc"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "closeHomeUIFunc", void 0);
i([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "commonButtonClickEffectFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_EmptyUICloseLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_EmptyUICloseLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_EmptyUICloseRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6dda7h0nr9L1J/mQQtSd/tD", "G12_FHeartSystem_EmptyUICloseRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_EmptyUICloseRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_EmptyUICloseSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_EmptyUICloseRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_EmptyUICloseRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_EmptyUICloseSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5cb761W6OhPboovr/+/rHjm", "G12_FHeartSystem_EmptyUICloseSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_EmptyUICloseSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_EmptyUIDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "emptyUIDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_EmptyUICloseSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_EmptyUICloseSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_EmptyUIConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b1f61NxVK5EkYMyetsVxz61", "G12_FHeartSystem_EmptyUIConfig");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_EmptyUIConfig = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
maskAlpha: .8,
maskColor: 0,
testX: 0,
testY: 4,
bg: {
width: 808,
height: 980,
x: 0,
y: 0
},
innerBg: {
width: 723,
height: 403,
x: 0,
y: 140
},
title: {
x: 0,
y: 406,
fontSize: 44,
color: 16777215
},
countDownLabel: {
x: 118,
y: 15,
fontSize: 44,
color: 16777215
},
countDownText: {
x: 133,
y: 15,
fontSize: 50,
color: 16304984
},
closeBtn: {
x: 347,
y: 435,
width: 80,
height: 80
},
getBtn: {
x: 0,
y: -190,
width: 565,
height: 142
},
adIcon: {
x: -205,
y: 8
},
getBtnText: {
x: 45,
y: 5,
fontSize: 64,
color: 16777215
},
remainText: {
x: 0,
y: -298,
fontSize: 36,
color: 16024032
},
waitBackText: {
x: 0,
y: -414,
fontSize: 50,
color: 4444733
},
heartContainer: {
maxWidth: 660,
heartTextureWidth: 220,
startX: 0,
startY: 138
}
};
};
return i([ ae.atomClass("G12_FHeartSystem_EmptyUIConfig") ], t);
}(ae.ConfigAtom);
o.G12_FHeartSystem_EmptyUIConfig = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_EmptyUIDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "07485/YQ7tHC6IH0rbXYSx9", "G12_FHeartSystem_EmptyUIDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_EmptyUIDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
return i([ ae.atomClass("G12_FHeartSystem_EmptyUIDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_EmptyUIDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_EmptyUINativeBackCheckLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "35979OZOMVP8rUIrYwJB74u", "G12_FHeartSystem_EmptyUINativeBackCheckLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_EmptyUINativeBackCheckLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.checkUIOnTopFunc(this.uiMgrFunc().cfg[this.uiConfig.emptyUI]) ? this.router.dispatchAction = ae.DispatchAction.FireOnce : this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var o, n, c, f;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G12_FHeartSystem_EmptyUINativeBackRouter"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_CheckUIOnTopFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "checkUIOnTopFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "uiConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_EmptyUINativeBackCheckLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_EmptyUINativeBackCheckLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_EmptyUINativeBackRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c6359tqSl1E7JTbSnqrdxSs", "G12_FHeartSystem_EmptyUINativeBackRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_EmptyUINativeBackRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G12_FBase_NativeBackSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "nativeBackSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G12_FHeartSystem_EmptyUICloseSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_EmptyUINativeBackRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_EmptyUINativeBackRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_EmptyUIRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "54c4cudt3JPCKx0/8IS8FEq", "G12_FHeartSystem_EmptyUIRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, o = 1, n = arguments.length; o < n; o++) {
t = arguments[o];
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
}
return e;
}).apply(this, arguments);
}, a = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_EmptyUIRender = void 0;
var f = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Node({
name: "EmptyUI",
widget: this.constCfg.FulWidget
}, ae.Sprite({
name: "mask",
img: this.assetsConfig.maskTexUrl,
widget: this.constCfg.FulWidget,
alpha: this.uiConfig.maskAlpha,
rgb: this.uiConfig.maskColor,
blockInputEvents: !0
}), ae.Sprite({
name: "bg",
img: this.assetsConfig.blockFlowPnl3TexUrl,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: this.uiConfig.bg.width,
height: this.uiConfig.bg.height,
x: this.uiConfig.bg.x,
y: this.uiConfig.bg.y,
blockInputEvents: !0
}), ae.Sprite({
name: "innerBg",
img: this.assetsConfig.blockFlowPnl5TexUrl,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: this.uiConfig.innerBg.width,
height: this.uiConfig.innerBg.height,
x: this.uiConfig.innerBg.x,
y: this.uiConfig.innerBg.y
}), ae.Text({
name: "titleText",
text: this.langueConfig.emptyUITitle,
x: this.uiConfig.title.x,
y: this.uiConfig.title.y,
fontSize: this.uiConfig.title.fontSize,
font: this.commonFontAsset.santralExtraBold,
rgb: this.uiConfig.title.color
}), ae.Text({
name: "countDownLabel",
text: this.langueConfig.emptyUICountDownLabel,
x: this.uiConfig.countDownLabel.x,
y: this.uiConfig.countDownLabel.y,
anchorX: 1,
anchorY: .5,
fontSize: this.uiConfig.countDownLabel.fontSize,
font: this.commonFontAsset.santralExtraBold,
rgb: this.uiConfig.countDownLabel.color,
active: [ function() {
return e.heartManagerLogic.storage.nextRecoveryAt > 0;
}, [ this.heartManagerLogic, "storage", "nextRecoveryAt" ] ]
}), ae.Text({
name: "countDownText",
text: [ function() {
return e.heartManagerLogic.runtime.surplusTime;
}, [ this.heartManagerLogic, "runtime", "surplusTime" ] ],
x: this.uiConfig.countDownText.x,
y: this.uiConfig.countDownText.y,
anchorX: 0,
anchorY: .5,
fontSize: this.uiConfig.countDownText.fontSize,
font: this.commonFontAsset.santralExtraBold,
rgb: this.uiConfig.countDownText.color,
active: [ function() {
return e.heartManagerLogic.storage.nextRecoveryAt > 0;
}, [ this.heartManagerLogic, "storage", "nextRecoveryAt" ] ]
}), ae.Node({
name: "closeBtn",
x: this.uiConfig.closeBtn.x,
y: this.uiConfig.closeBtn.y,
width: this.uiConfig.closeBtn.width,
height: this.uiConfig.closeBtn.height,
button: this.constCfg.Button,
event: {
buttonClick: this.returnBlockRouter
}
}, ae.Sprite({
name: "closeImg",
img: this.textureCfg.blockFlowCloseBtn
})), ae.Sprite({
name: "getBtn",
img: this.textureCfg.blockFlowBtn1,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
x: this.uiConfig.getBtn.x,
y: this.uiConfig.getBtn.y,
width: this.uiConfig.getBtn.width,
height: this.uiConfig.getBtn.height,
button: i(i({}, this.constCfg.Button), {
enableAutoGrayEffect: !0,
interactable: [ function() {
return !e.heartRecoverySpineCompleteLogic.runtime.isAnimating && e.heartManagerLogic.storage.nextRecoveryAt > 0;
}, [ this.heartRecoverySpineCompleteLogic, "runtime", "isAnimating" ], [ this.heartManagerLogic, "storage", "nextRecoveryAt" ] ]
}),
event: {
buttonClick: this.showAdRouter
}
}, ae.Sprite({
name: "adIcon",
img: this.baseImageAsset.adIcon,
x: this.uiConfig.adIcon.x,
y: this.uiConfig.adIcon.y
}), ae.Text({
name: "getBtnText",
text: this.langueConfig.emptyUIGetBtnText,
x: this.uiConfig.getBtnText.x,
y: this.uiConfig.getBtnText.y,
fontSize: this.uiConfig.getBtnText.fontSize,
font: this.commonFontAsset.santralExtraBold,
rgb: this.uiConfig.getBtnText.color
})), ae.Text({
name: "remainText",
text: [ function() {
var t = e.heartManagerLogic.storage;
return e.langueConfig.emptyUIRemainText.replace("{current}", "" + t.dailyAdRefillCount).replace("{limit}", "" + e.heartConfig.adRefillDailyLimit);
}, [ this.heartManagerLogic, "storage", "dailyAdRefillCount" ] ],
active: this.heartConfig.adRefillDailyLimit > 0,
x: this.uiConfig.remainText.x,
y: this.uiConfig.remainText.y,
fontSize: this.uiConfig.remainText.fontSize,
font: this.commonFontAsset.santralExtraBold,
rgb: this.uiConfig.remainText.color
}), ae.Text({
name: "waitBackText",
text: this.langueConfig.emptyUIWaitBackText,
x: this.uiConfig.waitBackText.x,
y: this.uiConfig.waitBackText.y,
fontSize: this.uiConfig.waitBackText.fontSize,
font: this.commonFontAsset.santralExtraBold,
enableUnderline: !0,
rgb: this.uiConfig.waitBackText.color,
event: {
buttonClick: this.returnBlockRouter
}
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, f, p, u, s, y, d, l, _, m, h, g;
a([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_EmptyUIDomain"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
a([ ae.bindAtom("G12_FBase_ConstCfg"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "constCfg", void 0);
a([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), c("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "assetsConfig", void 0);
a([ ae.bindAtom("G12_FHeartSystem_EmptyUIConfig"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "uiConfig", void 0);
a([ ae.bindAtom("G12_FBase_TextureCfg"), c("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "textureCfg", void 0);
a([ ae.bindAtom("G12_FHeartSystem_LangueConfig"), c("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "langueConfig", void 0);
a([ ae.bindAtom("G12_FBase_CommonFontAsset"), c("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "commonFontAsset", void 0);
a([ ae.bindAtom("G12_FBase_ImageAsset"), c("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "baseImageAsset", void 0);
a([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), c("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "heartManagerLogic", void 0);
a([ ae.bindAtom("G12_FHeartSystem_HeartRecoverySpineCompleteLogic"), c("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "heartRecoverySpineCompleteLogic", void 0);
a([ ae.bindAtom("G12_FHeartSystem_EmptyUICloseRouter"), c("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "returnBlockRouter", void 0);
a([ ae.bindAtom("G12_FHeartSystem_EmptyUIShowAdRouter"), c("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "showAdRouter", void 0);
a([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), c("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "heartConfig", void 0);
return a([ ae.atomClass("G12_FHeartSystem_EmptyUIRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_EmptyUIRender = f;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_EmptyUIShowAdLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "40063P2hoNJVpyNBb3B1gPZ", "G12_FHeartSystem_EmptyUIShowAdLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_EmptyUIShowAdLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this;
if (!this.heartRecoverySpineCompleteLogic.runtime.isAnimating) {
this.commonButtonClickEffectFunc();
var t = this.showAdFunc(function() {
e.handleShowAdSuccFunc();
e.heartManagerLogic.runtime.isEmptyUIRewardAdShowing = !1;
e.startHeartRecoveryAnimFunc(function() {
return e.heartMgrFunc().adRefillHeart();
});
});
this.heartManagerLogic.runtime.isEmptyUIRewardAdShowing = t;
}
};
var o, n, c, f, p, u, s, y;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_EmptyUIShowAdSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ShowAdFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "showAdFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HandleShowAdSuccFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "handleShowAdSuccFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_StartHeartRecoveryAnimFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "startHeartRecoveryAnimFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "heartMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartRecoverySpineCompleteLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "heartRecoverySpineCompleteLogic", void 0);
i([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "commonButtonClickEffectFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_EmptyUIShowAdLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_EmptyUIShowAdLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_EmptyUIShowAdRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9138bs+K/FFrokP8KtwFLm9", "G12_FHeartSystem_EmptyUIShowAdRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_EmptyUIShowAdRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_EmptyUIShowAdSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_EmptyUIShowAdRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_EmptyUIShowAdRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_EmptyUIShowAdSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "174deagA0hNiaNgW0tSp+6N", "G12_FHeartSystem_EmptyUIShowAdSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_EmptyUIShowAdSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_EmptyUIDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "emptyUIDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_EmptyUIShowAdSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_EmptyUIShowAdSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_EnterLevelLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "10fd3gHzBdMbKsRJHX/i/V4", "G12_FHeartSystem_EnterLevelLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_EnterLevelLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.heartMgrFunc().enterLevel();
};
var o, n;
i([ ae.onChain, ae.bindAtom("G12_FBase_LevelDataInitSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "levelDataInitSignal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartMgrFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_EnterLevelLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_EnterLevelLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ExecuteRevivePageRetryFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7c14b9fTz1BFrY/7EoOUP8E", "G12_FHeartSystem_ExecuteRevivePageRetryFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ExecuteRevivePageRetryFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
e.heartManagerLogic.runtime.isFormRetry = !0;
e.loadingShowFadeInFunc(!0, e.cleanAllDataRouter);
e.closeRevivePageFunc(!0);
};
};
var o, n, c, f;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FBase_LoadingShowFadeInFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "loadingShowFadeInFunc", void 0);
i([ ae.bindAtom("G12_FBase_CleanAllDataRouter"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "cleanAllDataRouter", void 0);
i([ ae.bindAtom("G12_FBase_CloseRevivePageFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "closeRevivePageFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ExecuteRevivePageRetryFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_ExecuteRevivePageRetryFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ExitToBlockRouterDispatchLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c52f4mXg5tHWYzlXvc6yaYQ", "G12_FHeartSystem_ExitToBlockRouterDispatchLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ExitToBlockRouterDispatchLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
if (this.uiMgrFunc().isOpen(this.uiMgrFunc().cfg[this.uiConfig.homeUI])) this.router.dispatchAction = ae.DispatchAction.FireOnce; else if (this.heartMgrFunc().handleReturnBlockRoute()) {
this.commonButtonClickEffectFunc();
this.router.dispatchAction = ae.DispatchAction.Cancel;
this.uiMgrFunc().close(this.uiMgrFunc().cfg.ExitConfirmPage);
} else this.router.dispatchAction = ae.DispatchAction.FireOnce;
};
var o, n, c, f, p;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G12_FBase_ExitToBlockRouter"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "commonButtonClickEffectFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ExitToBlockRouterDispatchLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_ExitToBlockRouterDispatchLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_FailLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "289975QhtVKYJnmEZ26VQIt", "G12_FHeartSystem_FailLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_FailLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this.uiMgrFunc();
e.getStateOpened(e.cfg.FailPage.key) && this.heartMgrFunc().failOrAbandon();
};
var o, n, c;
i([ ae.onChain, ae.bindAtom("G12_FBase_UIMgrStateChangedSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiMgrStateChangedSignal", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartMgrFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_FailLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_FailLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_FailUIBigHeartDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b7856RQMbRP7rvjzvt7E0as", "G12_FHeartSystem_FailUIBigHeartDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_FailUIBigHeartDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
return i([ ae.atomClass("G12_FHeartSystem_FailUIBigHeartDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_FailUIBigHeartDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_FailUIBigHeartRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d3dd6+5rzdA/oTy+K/A6MO0", "G12_FHeartSystem_FailUIBigHeartRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_FailUIBigHeartRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
return ae.Node({
name: "BigHeart"
}, ae.Spine({
name: "anim",
spineUrl: this.assetsConfig.gameplayStamina2Spine.url,
animation: {
name: this.assetsConfig.gameplayStamina2Spine.animName.in,
loop: !1
}
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_FailUIBigHeartDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetCmpBezierPosFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getCmpBezierPosFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_FailUIBigHeartRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_FailUIBigHeartRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_FailUIConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6202bNOFdNPEJKM706BszQE", "G12_FHeartSystem_FailUIConfig");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_FailUIConfig = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
parentBeforeName: "FailPageRetrySlotRoot",
layout: {
hpHUDOffsetXFromRight: 188,
uiHeight: 100,
bigHeartY: 90,
tipsText: {
x: 0,
y: 24,
fontSize: 42,
color: 16206154
}
},
tween: {
animDuration: 1,
bigHeartShowDuration: .33,
visibleAlpha: 1
}
};
};
return i([ ae.atomClass("G12_FHeartSystem_FailUIConfig") ], t);
}(ae.ConfigAtom);
o.G12_FHeartSystem_FailUIConfig = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_FailUIDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "50e4dierDVBXageKz5xvk61", "G12_FHeartSystem_FailUIDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_FailUIDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n, c;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G12_FHeartSystem_TweenUICmp"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tweenUICmp", void 0);
i([ ae.bindAtom("G_FAtom_BoxComponent"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "boxComponent", void 0);
return i([ ae.atomClass("G12_FHeartSystem_FailUIDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_FailUIDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_FailUIRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2956dk2GWhHjYtWTLXzPm27", "G12_FHeartSystem_FailUIRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_FailUIRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Node({
name: "FailUI"
}, ae.Text({
name: "tips",
text: this.langueConfig.failUITips,
x: this.failUIConfig.layout.tipsText.x,
y: this.failUIConfig.layout.tipsText.y,
font: this.commonFontAsset.santralExtraBold,
fontSize: this.failUIConfig.layout.tipsText.fontSize,
rgb: this.failUIConfig.layout.tipsText.color,
alpha: [ function(t) {
return e.domain.tweenUICmp.alpha[t];
}, [ this.domain.tweenUICmp, "alpha" ] ]
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p, u;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_FailUIDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBase_CommonFontAsset"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "commonFontAsset", void 0);
i([ ae.bindAtom("G12_FHeartSystem_FailUIConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "failUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_LangueConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "langueConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "heartManagerLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_FailUIRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_FailUIRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_FlyHeartCompleteFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e34c6OlRTVHQ79xM1dgr5oq", "G12_FHeartSystem_FlyHeartCompleteFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_FlyHeartCompleteFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.baseUiMgrFunc();
if (t.isOpen(t.cfg.LoadingPage) && e.hearConfig.enterCostHeart > 0 && e.heartManagerLogic.storage.currentHeart <= e.heartManagerLogic.runtime.currentShowHeart) e.heartManagerLogic.runtime.pendingFlyHeartComplete = !0; else {
e.heartManagerLogic.runtime.pendingFlyHeartComplete = !1;
var o = e.heartManagerLogic.runtime.currentShowHeart, n = e.heartManagerLogic.storage.currentHeart;
if (o !== n) {
var r = o < n ? e.assetConfig.gameplayStaminaJiajianSpine.animName.in1 : e.assetConfig.gameplayStaminaJiajianSpine.animName.in2;
e.hpHUDBigHeartDomain.collect().forEach(function(t) {
e.hpHUDBigHeartDomain.spineCmp.name.set(t, r);
});
}
e.heartManagerLogic.runtime.currentShowHeart = e.heartManagerLogic.storage.currentHeart;
e.refreshRecoveryFunc();
}
};
};
var o, n, c, f, p, u;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_RefreshRecoveryFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "refreshRecoveryFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDBigHeartDomain"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "hpHUDBigHeartDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "assetConfig", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "baseUiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "hearConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_FlyHeartCompleteFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_FlyHeartCompleteFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GameRuntimeReportFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "72b1dFlkchJcZOarLfso6OL", "G12_FHeartSystem_GameRuntimeReportFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GameRuntimeReportFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = 0, o = {};
return function(n) {
void 0 === n && (n = -1);
if (!(n >= 0 && t === n)) {
var r = e.heartManagerLogic.storage, i = e.heartManagerLogic.runtime;
o.nextRecoveryAt = r.nextRecoveryAt;
o.maxHeart = r.maxHeart;
o.currentHeart = r.currentHeart;
o.dailyAdRefillCount = r.dailyAdRefillCount;
o.recoveryInterval = i.recoveryInterval;
o.adRefillDailyLimit = r.adRefillDailyLimit;
t = r.nextRecoveryAt;
e.reportGameRuntime({
g12_heart_system: o
});
}
};
};
var o, n;
i([ ae.bindAtom("G_FAtom_ReportGameRuntime"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "reportGameRuntime", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartManagerLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GameRuntimeReportFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GameRuntimeReportFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GameSettingSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1d9bf5XK+RAe4NlVRGpLS9u", "G12_FHeartSystem_GameSettingSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GameSettingSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_BtnSettingDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "btnSettingDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GameSettingSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_GameSettingSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetBezierPosFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ba86cHNPwlFWow73e4Rmbbf", "G12_FHeartSystem_GetBezierPosFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetBezierPosFunc = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function(e, t, o, n, r, i, a, c) {
var f = a > 0 ? Math.min(1, Math.max(0, c / a)) : 1, p = 1 - f, u = p * p, s = 2 * p * f, y = f * f;
return [ u * e + s * r + y * o, u * t + s * i + y * n ];
};
};
return i([ ae.atomClass("G12_FHeartSystem_GetBezierPosFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetBezierPosFunc = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetCmpBezierPosFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "17767M5bD5KHpMoem1hUQWz", "G12_FHeartSystem_GetCmpBezierPosFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetCmpBezierPosFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
return e.getBezierPosFunc(o.startX[t], o.startY[t], o.endX[t], o.endY[t], o.controlX[t], o.controlY[t], o.duration[t], o.elapsedTime[t]);
};
};
var o;
i([ ae.bindAtom("G12_FHeartSystem_GetBezierPosFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "getBezierPosFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetCmpBezierPosFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetCmpBezierPosFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetDateNowFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0ef5chgN59OkJ7yyE7aCpRB", "G12_FHeartSystem_GetDateNowFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetDateNowFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return e.getDateNow();
};
};
var o;
i([ ae.bindAtom("G_FAtom_RealTime"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "getDateNow", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetDateNowFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetDateNowFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetDifficultyLevelCfgFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cea67j9K1tLl53z7rnnhl8S", "G12_FHeartSystem_GetDifficultyLevelCfgFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, o = t && e[t], n = 0;
if (o) return o.call(e);
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
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetDifficultyLevelCfgFunc = void 0;
var f = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t, o, n = new Map(), r = e.homeLevelConfigCacheLogic.runtime.levelConfig;
try {
for (var i = c(Object.keys(r)), a = i.next(); !a.done; a = i.next()) {
var f = a.value, p = r[Number(f)];
n.set(p.id, p);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (o = i.return) && o.call(i);
} finally {
if (t) throw t.error;
}
}
return n;
};
};
var o;
i([ ae.bindAtom("G12_FHeartSystem_HomeLevelConfigCacheLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "homeLevelConfigCacheLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetDifficultyLevelCfgFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetDifficultyLevelCfgFunc = f;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetDifficultyMaxLevelFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "eeae3JnfLtI56ftoDx+HJMo", "G12_FHeartSystem_GetDifficultyMaxLevelFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetDifficultyMaxLevelFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return e.homeLevelConfigCacheLogic.runtime.lastAvailableLevel || e.levelConfigPlan.maxLevel;
};
};
var o, n;
i([ ae.bindAtom("G12_FBase_LevelConfigPlan"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "levelConfigPlan", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeLevelConfigCacheLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "homeLevelConfigCacheLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetDifficultyMaxLevelFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetDifficultyMaxLevelFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetEnterCostHeartFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "46c7aIR63NEI4l4oX0lUtOH", "G12_FHeartSystem_GetEnterCostHeartFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetEnterCostHeartFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
return t > e.heartConfig.startCostHeartLevelThreshold ? e.heartConfig.enterCostHeart : 0;
};
};
var o;
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetEnterCostHeartFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetEnterCostHeartFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetFailCostHeartFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9aeb9FPotJH2YwoNk9DiU7Z", "G12_FHeartSystem_GetFailCostHeartFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetFailCostHeartFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
t || (t = e.getLevelFunc());
return t > e.heartConfig.startCostHeartLevelThreshold ? e.heartConfig.failCostHeart : 0;
};
};
var o, n;
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FBase_GetLevelFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getLevelFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetFailCostHeartFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetFailCostHeartFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetFailUILostHeartZIndexFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "99188FzkG9EfaKIZCLvwe08", "G12_FHeartSystem_GetFailUILostHeartZIndexFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetFailUILostHeartZIndexFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return e.createFailUILogic.runtime.isShowFailHeart ? 1 : 0;
};
};
var o;
i([ ae.bindAtom("G12_FHeartSystem_CreateFailUILogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "createFailUILogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetFailUILostHeartZIndexFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetFailUILostHeartZIndexFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetGameLevelTextFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "38bddzqUR5GCrSBKaWdTKUj", "G12_FHeartSystem_GetGameLevelTextFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetGameLevelTextFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.gameLevelTextDomain.gameLevelTextCmp.levelText[t];
if (!e.heartConfig.isOpenQuitBtn) return o;
var n = e.hpHUDConfig.layout.gameLevelText;
return o.replace(n.labelKeyword, n.compactLabelKeyword);
};
};
var o, n, c;
i([ ae.bindAtom("G12_FBase_GameLevelTextDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameLevelTextDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "hpHUDConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetGameLevelTextFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetGameLevelTextFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetGameLevelTextOffsetWFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "18928pMvg9NB5bbH8WZaB8U", "G12_FHeartSystem_GetGameLevelTextOffsetWFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetGameLevelTextOffsetWFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.hpHUDConfig.layout.gameLevelText;
return e.heartConfig.isOpenQuitBtn ? t.quitBtnOffsetW : t.defaultOffsetW;
};
};
var o, n;
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "hpHUDConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetGameLevelTextOffsetWFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetGameLevelTextOffsetWFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetGameLevelTextOffsetXFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2d7c2nUPnlMCqqzpOsdPB9x", "G12_FHeartSystem_GetGameLevelTextOffsetXFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetGameLevelTextOffsetXFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.hpHUDConfig.layout.gameLevelText;
return e.heartConfig.isOpenQuitBtn ? t.quitBtnOffsetX : t.defaultOffsetX;
};
};
var o, n;
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "hpHUDConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetGameLevelTextOffsetXFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetGameLevelTextOffsetXFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetHomeLevelConfigFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "30ebeNDQ/9Ha4f2wBIEcCiI", "G12_FHeartSystem_GetHomeLevelConfigFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetHomeLevelConfigFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
return e.homeLevelConfigCacheLogic.runtime.levelConfig[t];
};
};
var o;
i([ ae.bindAtom("G12_FHeartSystem_HomeLevelConfigCacheLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "homeLevelConfigCacheLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetHomeLevelConfigFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetHomeLevelConfigFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetLineRatioPosFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1ba6cybNIlJoLvfbsdxcwJR", "G12_FHeartSystem_GetLineRatioPosFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetLineRatioPosFunc = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function(e, t, o, n, r, i) {
return [ e + (o - e) * r, t + (n - t) * i ];
};
};
return i([ ae.atomClass("G12_FHeartSystem_GetLineRatioPosFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetLineRatioPosFunc = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetResultWinContinueBtnYFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b0a50W9BzFJs5lM1o+YVcZe", "G12_FHeartSystem_GetResultWinContinueBtnYFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetResultWinContinueBtnYFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return e.createWinUILogic.runtime.isShowWinHeart ? e.winUIConfig.resultContinueButtonNewY : e.winUIConfig.resultContinueButtonBaseY;
};
};
var o, n;
i([ ae.bindAtom("G12_FHeartSystem_CreateWinUILogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "createWinUILogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_WinUIConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "winUIConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetResultWinContinueBtnYFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetResultWinContinueBtnYFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetSurplusTimeFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5f575E4/LRFjY4RNJjKLiOX", "G12_FHeartSystem_GetSurplusTimeFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetSurplusTimeFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.heartManagerLogic.storage;
if (e.heartManagerLogic.runtime.currentShowHeart >= e.heartConfig.maxHeart) return "Max";
var o, n = e.getDateNowFunc();
o = t.nextRecoveryAt <= 0 ? 0 : Math.max(0, t.nextRecoveryAt - n);
var r = Math.ceil(o / 1e3);
return Math.floor(r / 60).toString().padStart(2, "0") + ":" + (r % 60).toString().padStart(2, "0");
};
};
var o, n, c;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetDateNowFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getDateNowFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetSurplusTimeFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetSurplusTimeFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetTopbarYFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4cbc4Dd/ONG/rtshX1HIn8Z", "G12_FHeartSystem_GetTopbarYFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetTopbarYFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return e.calculateTopYFunc() + e.adaptLogic.runtime.offsetY;
};
};
var o, n;
i([ ae.bindAtom("G12_FBase_CalculateTopYFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "calculateTopYFunc", void 0);
i([ ae.bindAtom("G12_FBase_AdaptLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "adaptLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetTopbarYFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetTopbarYFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUIBigHeartCmp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e1ff38U9AlFA65IofL0y7iv", "G12_FHeartSystem_GetUIBigHeartCmp");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUIBigHeartCmp = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
heartIndex: 0
};
};
return i([ ae.atomClass("G12_FHeartSystem_GetUIBigHeartCmp") ], t);
}(ae.EntityComponentAtom);
o.G12_FHeartSystem_GetUIBigHeartCmp = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUIBigHeartDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9316dbOLSZBka8rZnQgCzNK", "G12_FHeartSystem_GetUIBigHeartDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUIBigHeartDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetUIBigHeartCmp"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartCmp", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetUIBigHeartDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_GetUIBigHeartDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUIBigHeartRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "224cbd3KKdCiI7wo6/51+yB", "G12_FHeartSystem_GetUIBigHeartRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUIBigHeartRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Node({
name: "BigHeart"
}, ae.Sprite({
name: "HeartIcon",
img: [ function(t) {
return e.heartManagerLogic.runtime.currentShowHeart > e.domain.heartCmp.heartIndex[t] ? e.assetsConfig.blockFlowIconHeart1TexUrl : e.assetsConfig.blockFlowIconHeart2TexUrl;
}, [ this.heartManagerLogic, "runtime", "currentShowHeart" ], [ this.domain.heartCmp, "heartIndex" ] ],
active: [ function(t) {
return e.domain.heartCmp.heartIndex[t] !== e.heartRecoverySpineCompleteLogic.runtime.spineIndex;
}, [ this.heartRecoverySpineCompleteLogic, "runtime", "spineIndex" ], [ this.domain.heartCmp, "heartIndex" ] ],
sizeMode: ae.SizeMode.Raw
}), ae.Spine({
name: "AddHeartSpine",
spineUrl: this.assetsConfig.gameplayAddHeartSpine.url,
scaleX: this.assetsConfig.gameplayAddHeartSpine.scale,
scaleY: this.assetsConfig.gameplayAddHeartSpine.scale,
animation: {
name: this.assetsConfig.gameplayAddHeartSpine.animName.in,
loop: !1
},
active: [ function(t) {
return e.domain.heartCmp.heartIndex[t] === e.heartRecoverySpineCompleteLogic.runtime.spineIndex;
}, [ this.heartRecoverySpineCompleteLogic, "runtime", "spineIndex" ], [ this.domain.heartCmp, "heartIndex" ] ],
event: {
complete: this.heartRecoverySpineCompleteRouter
}
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_GetUIBigHeartDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartRecoverySpineCompleteRouter"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "heartRecoverySpineCompleteRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartRecoverySpineCompleteLogic"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "heartRecoverySpineCompleteLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetUIBigHeartRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_GetUIBigHeartRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUICloseLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7ccbdKrfItPDYlsZtUAUfIV", "G12_FHeartSystem_GetUICloseLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUICloseLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.commonButtonClickEffectFunc();
this.uiMgrFunc().close(this.uiConfig.getUI);
};
var o, n, c, f;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_GetUICloseSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "commonButtonClickEffectFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetUICloseLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_GetUICloseLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUICloseRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b367bwuyJxNErMAW+Cem6ti", "G12_FHeartSystem_GetUICloseRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUICloseRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_GetUICloseSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetUICloseRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_GetUICloseRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUICloseSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c56853Y0DtE14ztpfNhPepA", "G12_FHeartSystem_GetUICloseSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUICloseSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_GetUIDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "getUIDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetUICloseSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_GetUICloseSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUIConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cab86VItxtGBqi15SBtEHyN", "G12_FHeartSystem_GetUIConfig");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUIConfig = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
maskAlpha: .8,
maskColor: 0,
testX: 0,
testY: 4,
bg: {
width: 808,
height: 980,
x: 0,
y: 0
},
innerBg: {
width: 723,
height: 403,
x: 0,
y: 140
},
title: {
x: 0,
y: 406,
fontSize: 44,
color: 16777215
},
countDownLabel: {
x: 118,
y: 15,
fontSize: 44,
color: 16777215
},
countDownText: {
x: 133,
y: 15,
fontSize: 50,
color: 16760631
},
closeBtn: {
x: 347,
y: 435,
width: 80,
height: 80
},
getBtn: {
x: 0,
y: -190,
width: 565,
height: 142
},
adIcon: {
x: -205,
y: 8
},
getBtnText: {
x: 45,
y: 5,
fontSize: 64,
color: 16777215
},
remainText: {
x: 0,
y: -298,
fontSize: 36,
color: 9026558
},
waitBackText: {
x: 0,
y: -414,
fontSize: 50,
color: 3062801
},
heartContainer: {
maxWidth: 660,
heartTextureWidth: 220,
startX: 0,
startY: 138
}
};
};
return i([ ae.atomClass("G12_FHeartSystem_GetUIConfig") ], t);
}(ae.ConfigAtom);
o.G12_FHeartSystem_GetUIConfig = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUIDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f421atSLIdG+ayqFeCplwTV", "G12_FHeartSystem_GetUIDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUIDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetUIDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_GetUIDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUIFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d6219xjR3RCd4lQYdj+TPpr", "G12_FHeartSystem_GetUIFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUIFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = this.uiCfgMapFunc().uiCfgMap;
return function(o) {
if (!t[o]) return null;
var n = t[o];
return e.uiMgrFunc().get(n);
};
};
var o, n;
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UICfgMapFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiCfgMapFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetUIFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetUIFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUINativeBackCheckLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "75218NAxGdB+Z4PcNyMdm9u", "G12_FHeartSystem_GetUINativeBackCheckLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUINativeBackCheckLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.checkUIOnTopFunc(this.uiMgrFunc().cfg[this.uiConfig.getUI]) ? this.router.dispatchAction = ae.DispatchAction.FireOnce : this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var o, n, c, f;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G12_FHeartSystem_GetUINativeBackRouter"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_CheckUIOnTopFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "checkUIOnTopFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "uiConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetUINativeBackCheckLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_GetUINativeBackCheckLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUINativeBackRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ad7dbOE4N9E4rlgRxtVcyfn", "G12_FHeartSystem_GetUINativeBackRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUINativeBackRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G12_FBase_NativeBackSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "nativeBackSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G12_FHeartSystem_GetUICloseSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetUINativeBackRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_GetUINativeBackRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUIOpenLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c0ba8QQvxNGYqEeAu6nW1ou", "G12_FHeartSystem_GetUIOpenLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUIOpenLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.commonButtonClickEffectFunc();
this.resetDailyAdRefillFunc();
var e = this.uiMgrFunc().open(this.uiConfig.getUI);
this.createUIHeartListFunc(e, this.getUIConfig.heartContainer);
};
var o, n, c, f, p, u, s;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_GetUIOpenSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetUIConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CreateUIHeartListFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "createUIHeartListFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ResetDailyAdRefillFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "resetDailyAdRefillFunc", void 0);
i([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "commonButtonClickEffectFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetUIOpenLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_GetUIOpenLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUIOpenSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0371ey9rqdHoYHcn1bc0xQG", "G12_FHeartSystem_GetUIOpenSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUIOpenSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetUIOpenSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_GetUIOpenSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUIRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "731d5p4ma1GM7OPATKkSpNK", "G12_FHeartSystem_GetUIRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, o = 1, n = arguments.length; o < n; o++) {
t = arguments[o];
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
}
return e;
}).apply(this, arguments);
}, a = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUIRender = void 0;
var f = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Node({
name: "GetUI",
widget: this.constCfg.FulWidget
}, ae.Sprite({
name: "mask",
img: this.assetsConfig.maskTexUrl,
widget: this.constCfg.FulWidget,
alpha: this.uiConfig.maskAlpha,
rgb: this.uiConfig.maskColor,
blockInputEvents: !0
}), ae.Sprite({
name: "bg",
img: this.textureCfg.blockFlowPnl1,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: this.uiConfig.bg.width,
height: this.uiConfig.bg.height,
y: this.uiConfig.bg.y,
blockInputEvents: !0
}), ae.Sprite({
name: "innerBg",
img: this.assetsConfig.blockFlowPnl4TexUrl,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: this.uiConfig.innerBg.width,
height: this.uiConfig.innerBg.height,
y: this.uiConfig.innerBg.y
}), ae.Text({
name: "titleText",
text: this.langueConfig.getUITitle,
y: this.uiConfig.title.y,
fontSize: this.uiConfig.title.fontSize,
font: this.commonFontAsset.santralExtraBold,
rgb: this.uiConfig.title.color
}), ae.Text({
name: "countDownLabel",
text: this.langueConfig.getUICountDownLabel,
x: this.uiConfig.countDownLabel.x,
y: this.uiConfig.countDownLabel.y,
anchorX: 1,
anchorY: .5,
fontSize: this.uiConfig.countDownLabel.fontSize,
font: this.commonFontAsset.santralExtraBold,
rgb: this.uiConfig.countDownLabel.color,
active: [ function() {
return e.heartManagerLogic.storage.nextRecoveryAt > 0;
}, [ this.heartManagerLogic, "storage", "nextRecoveryAt" ] ]
}), ae.Text({
name: "countDownText",
text: [ function() {
return e.heartManagerLogic.runtime.surplusTime;
}, [ this.heartManagerLogic, "runtime", "surplusTime" ] ],
x: this.uiConfig.countDownText.x,
y: this.uiConfig.countDownText.y,
anchorX: 0,
anchorY: .5,
fontSize: this.uiConfig.countDownText.fontSize,
font: this.commonFontAsset.santralExtraBold,
rgb: this.uiConfig.countDownText.color,
active: [ function() {
return e.heartManagerLogic.storage.nextRecoveryAt > 0;
}, [ this.heartManagerLogic, "storage", "nextRecoveryAt" ] ]
}), ae.Node({
name: "closeBtn",
x: this.uiConfig.closeBtn.x,
y: this.uiConfig.closeBtn.y,
width: this.uiConfig.closeBtn.width,
height: this.uiConfig.closeBtn.height,
button: this.constCfg.Button,
event: {
buttonClick: this.getUICloseRouter
}
}, ae.Sprite({
name: "closeImg",
img: this.textureCfg.blockFlowCloseBtn
})), ae.Sprite({
name: "getBtn",
img: this.textureCfg.blockFlowBtn1,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
x: this.uiConfig.getBtn.x,
y: this.uiConfig.getBtn.y,
width: this.uiConfig.getBtn.width,
height: this.uiConfig.getBtn.height,
button: i(i({}, this.constCfg.Button), {
enableAutoGrayEffect: !0,
interactable: [ function() {
return e.heartManagerLogic.storage.nextRecoveryAt > 0;
}, [ this.heartManagerLogic, "storage", "nextRecoveryAt" ] ]
}),
event: {
buttonClick: this.showAdRouter
}
}, ae.Sprite({
name: "adIcon",
img: this.baseImageAsset.adIcon,
x: this.uiConfig.adIcon.x,
y: this.uiConfig.adIcon.y
}), ae.Text({
name: "getBtnText",
text: this.langueConfig.getUIGetBtnText,
x: this.uiConfig.getBtnText.x,
y: this.uiConfig.getBtnText.y,
fontSize: this.uiConfig.getBtnText.fontSize,
font: this.commonFontAsset.santralExtraBold,
rgb: this.uiConfig.getBtnText.color
})), ae.Text({
name: "remainText",
text: [ function() {
return e.langueConfig.getUIRemainText.replace("{current}", "" + e.heartManagerLogic.storage.dailyAdRefillCount).replace("{limit}", "" + e.heartConfig.adRefillDailyLimit);
}, [ this.heartManagerLogic, "storage", "dailyAdRefillCount" ] ],
active: this.heartConfig.adRefillDailyLimit > 0,
y: this.uiConfig.remainText.y,
fontSize: this.uiConfig.remainText.fontSize,
font: this.commonFontAsset.santralExtraBold,
rgb: this.uiConfig.remainText.color
}), ae.Text({
name: "waitBackText",
text: this.langueConfig.getUIWaitBackText,
y: this.uiConfig.waitBackText.y,
fontSize: this.uiConfig.waitBackText.fontSize,
font: this.commonFontAsset.santralExtraBold,
enableUnderline: !0,
rgb: this.uiConfig.waitBackText.color,
button: this.constCfg.Button,
event: {
buttonClick: this.getUICloseRouter
}
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, f, p, u, s, y, d, l, _, m, h;
a([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_GetUIDomain"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
a([ ae.bindAtom("G12_FHeartSystem_GetUICloseRouter"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getUICloseRouter", void 0);
a([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), c("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "assetsConfig", void 0);
a([ ae.bindAtom("G12_FHeartSystem_GetUIConfig"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "uiConfig", void 0);
a([ ae.bindAtom("G12_FHeartSystem_LangueConfig"), c("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "langueConfig", void 0);
a([ ae.bindAtom("G12_FHeartSystem_GetUIShowAdRouter"), c("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "showAdRouter", void 0);
a([ ae.bindAtom("G12_FBase_TextureCfg"), c("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "textureCfg", void 0);
a([ ae.bindAtom("G12_FBase_CommonFontAsset"), c("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "commonFontAsset", void 0);
a([ ae.bindAtom("G12_FBase_ConstCfg"), c("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "constCfg", void 0);
a([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), c("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "heartManagerLogic", void 0);
a([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), c("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "heartConfig", void 0);
a([ ae.bindAtom("G12_FBase_ImageAsset"), c("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "baseImageAsset", void 0);
return a([ ae.atomClass("G12_FHeartSystem_GetUIRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_GetUIRender = f;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUIShowAdLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9387fDhtOpJnrt+IESPMc+9", "G12_FHeartSystem_GetUIShowAdLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUIShowAdLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this;
this.commonButtonClickEffectFunc();
this.showAdFunc(function() {
e.handleShowAdSuccFunc();
e.startHeartRecoveryAnimFunc(function() {
return e.heartMgrFunc().adRefillHeart();
});
});
};
var o, n, c, f, p, u;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_GetUIShowAdSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ShowAdFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "showAdFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HandleShowAdSuccFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "handleShowAdSuccFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_StartHeartRecoveryAnimFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "startHeartRecoveryAnimFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "heartMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "commonButtonClickEffectFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetUIShowAdLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_GetUIShowAdLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUIShowAdRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "14790ycl1dGQqLOX9hYK6hk", "G12_FHeartSystem_GetUIShowAdRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUIShowAdRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_GetUIShowAdSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetUIShowAdRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_GetUIShowAdRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUIShowAdSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f21c1n41pNFQ76nPlScp/er", "G12_FHeartSystem_GetUIShowAdSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUIShowAdSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_GetUIDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "getUIDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetUIShowAdSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_GetUIShowAdSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetUISizeFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3fdebBQaatC0b+oWrk15lC5", "G12_FHeartSystem_GetUISizeFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetUISizeFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return e.uiMgrFunc().size();
};
};
var o;
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiMgrFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetUISizeFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetUISizeFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetWinUIAddHeartActiveFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7c2cdY2cglAFZjj1WKblVmh", "G12_FHeartSystem_GetWinUIAddHeartActiveFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetWinUIAddHeartActiveFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return !e.createWinUILogic.runtime.isShowWinHeart;
};
};
var o;
i([ ae.bindAtom("G12_FHeartSystem_CreateWinUILogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "createWinUILogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetWinUIAddHeartActiveFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetWinUIAddHeartActiveFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetWinUIAddHeartZIndexFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7ee45nguH5JK6v8rqPQDDkv", "G12_FHeartSystem_GetWinUIAddHeartZIndexFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetWinUIAddHeartZIndexFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return e.createWinUILogic.runtime.isShowWinHeart ? 1 : 0;
};
};
var o;
i([ ae.bindAtom("G12_FHeartSystem_CreateWinUILogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "createWinUILogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetWinUIAddHeartZIndexFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetWinUIAddHeartZIndexFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GetWinUILayoutPaddingTopFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7baeeSaGaJFDpLpt3/C5cGJ", "G12_FHeartSystem_GetWinUILayoutPaddingTopFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GetWinUILayoutPaddingTopFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return e.createWinUILogic.runtime.isShowWinHeart ? -120 : 0;
};
};
var o;
i([ ae.bindAtom("G12_FHeartSystem_CreateWinUILogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "createWinUILogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GetWinUILayoutPaddingTopFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_GetWinUILayoutPaddingTopFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GiveUpUICloseLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "18206bDHexNZa9S8Tz4FJVY", "G12_FHeartSystem_GiveUpUICloseLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GiveUpUICloseLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.uiMgrFunc().close(this.uiConfig.giveUpUI);
};
var o, n, c;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_GiveUpUICloseSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GiveUpUICloseLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_GiveUpUICloseLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GiveUpUICloseRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "43bfdfxNMJGurW4u4g4N1sT", "G12_FHeartSystem_GiveUpUICloseRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GiveUpUICloseRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_GiveUpUICloseSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GiveUpUICloseRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_GiveUpUICloseRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GiveUpUICloseSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e7a015Sl/xCNItL7auzVCns", "G12_FHeartSystem_GiveUpUICloseSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GiveUpUICloseSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_GiveUpUIDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "exitUIDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GiveUpUICloseSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_GiveUpUICloseSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GiveUpUIConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6a108XFm2hGv4ElwQIqLEgh", "G12_FHeartSystem_GiveUpUIConfig");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GiveUpUIConfig = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
maskAlpha: .8,
maskColor: 0,
testX: 0,
testY: 4,
bg: {
width: 808,
height: 818,
y: 0,
x: 0
},
innerBg: {
width: 723,
height: 410,
y: 45,
x: 0
},
title: {
y: 324,
x: 0,
fontSize: 55,
color: 16777215
},
descLabel: {
x: 0,
y: -82,
fontSize: 50,
color: 16777215
},
costLabel: {
text: "-",
x: 66,
y: 33,
anchorX: 0,
anchorY: .5,
fontSize: 100,
color: 16711680
},
heartIcon: {
x: -42,
y: 67
},
closeBtn: {
x: 347,
y: 354,
width: 80,
height: 80
},
giveUpBtn: {
x: 0,
y: -287,
width: 565,
height: 142
},
giveUpBtnText: {
x: 0,
y: 5,
fontSize: 64,
color: 16777215
}
};
};
return i([ ae.atomClass("G12_FHeartSystem_GiveUpUIConfig") ], t);
}(ae.ConfigAtom);
o.G12_FHeartSystem_GiveUpUIConfig = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GiveUpUIDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fe78a2i5ttLwY8xQyl+dXsr", "G12_FHeartSystem_GiveUpUIDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GiveUpUIDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GiveUpUIDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_GiveUpUIDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GiveUpUINativeBackCheckLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8b5efUIqvlBb4JzkonyyjhZ", "G12_FHeartSystem_GiveUpUINativeBackCheckLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GiveUpUINativeBackCheckLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.checkUIOnTopFunc(this.uiMgrFunc().cfg[this.uiConfig.giveUpUI]) ? this.router.dispatchAction = ae.DispatchAction.FireOnce : this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var o, n, c, f, p;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G12_FHeartSystem_GiveUpUINativeBackRouter"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GiveUpUIDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "giveUpUIDomain", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_CheckUIOnTopFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "checkUIOnTopFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "uiConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GiveUpUINativeBackCheckLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_GiveUpUINativeBackCheckLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GiveUpUINativeBackRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a2d56yJM55BN6mTw4hJdzHi", "G12_FHeartSystem_GiveUpUINativeBackRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GiveUpUINativeBackRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G12_FBase_NativeBackSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "nativeBackSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G12_FHeartSystem_GiveUpUICloseSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GiveUpUINativeBackRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_GiveUpUINativeBackRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GiveUpUIRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f0b35h2OO5GuaMniJXbc/Fr", "G12_FHeartSystem_GiveUpUIRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GiveUpUIRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Node({
name: "GiveUpUI",
widget: this.constCfg.FulWidget
}, ae.Sprite({
name: "mask",
img: this.assetsConfig.maskTexUrl,
widget: this.constCfg.FulWidget,
alpha: this.uiConfig.maskAlpha,
rgb: this.uiConfig.maskColor,
blockInputEvents: !0
}), ae.Sprite({
name: "bg",
img: this.textureCfg.blockFlowPnl1,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: this.uiConfig.bg.width,
height: this.uiConfig.bg.height,
y: this.uiConfig.bg.y,
x: this.uiConfig.bg.x,
blockInputEvents: !0
}), ae.Sprite({
name: "innerBg",
img: this.assetsConfig.blockFlowPnl4TexUrl,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: this.uiConfig.innerBg.width,
height: this.uiConfig.innerBg.height,
y: this.uiConfig.innerBg.y,
x: this.uiConfig.innerBg.x
}), ae.Sprite({
name: "heartIcon",
img: this.assetsConfig.blockFlowIconHeart3TexUrl,
x: this.uiConfig.heartIcon.x,
y: this.uiConfig.heartIcon.y
}), ae.Text({
name: "titleText",
text: [ function() {
return e.heartManagerLogic.runtime.giveUpUIIsRetry ? e.langueConfig.giveUpUIRetryTitle : e.langueConfig.giveUpUITitle;
}, [ this.heartManagerLogic, "runtime", "giveUpUIIsRetry" ] ],
x: this.uiConfig.title.x,
y: this.uiConfig.title.y,
fontSize: this.uiConfig.title.fontSize,
font: this.commonFontAsset.santralExtraBold,
rgb: this.uiConfig.title.color
}), ae.Text({
name: "descLabel",
text: this.langueConfig.giveUpUIDescLabel,
x: this.uiConfig.descLabel.x,
y: this.uiConfig.descLabel.y,
fontSize: this.uiConfig.descLabel.fontSize,
font: this.commonFontAsset.santralExtraBold,
rgb: this.uiConfig.descLabel.color
}), ae.Text({
name: "costLabel",
text: "-" + this.heartConfig.failCostHeart,
x: this.uiConfig.costLabel.x,
y: this.uiConfig.costLabel.y,
fontSize: this.uiConfig.costLabel.fontSize,
font: this.commonFontAsset.santralExtraBold,
rgb: this.uiConfig.costLabel.color,
anchorX: this.uiConfig.costLabel.anchorX,
anchorY: this.uiConfig.costLabel.anchorY
}), ae.Node({
name: "closeBtn",
x: this.uiConfig.closeBtn.x,
y: this.uiConfig.closeBtn.y,
width: this.uiConfig.closeBtn.width,
height: this.uiConfig.closeBtn.height,
button: this.constCfg.Button,
event: {
buttonClick: this.giveUpUICloseRouter
}
}, ae.Sprite({
name: "closeImg",
img: this.textureCfg.blockFlowCloseBtn
})), ae.Sprite({
name: "giveUpBtn",
img: this.textureCfg.blockFlowBtn1,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
x: this.uiConfig.giveUpBtn.x,
y: this.uiConfig.giveUpBtn.y,
width: this.uiConfig.giveUpBtn.width,
height: this.uiConfig.giveUpBtn.height,
button: this.constCfg.Button,
event: {
buttonClick: this.giveUpUIReturnBlockRouter
}
}, ae.Text({
name: "giveUpBtnText",
text: [ function() {
return e.heartManagerLogic.runtime.giveUpUIIsRetry ? e.langueConfig.giveUpUIRetryBtnText : e.langueConfig.giveUpUIGiveUpBtnText;
}, [ this.heartManagerLogic, "runtime", "giveUpUIIsRetry" ] ],
x: this.uiConfig.giveUpBtnText.x,
y: this.uiConfig.giveUpBtnText.y,
fontSize: this.uiConfig.giveUpBtnText.fontSize,
font: this.commonFontAsset.santralExtraBold,
rgb: this.uiConfig.giveUpBtnText.color
})));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p, u, s, y, d, l, _;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_GiveUpUIDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GiveUpUIConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_LangueConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "langueConfig", void 0);
i([ ae.bindAtom("G12_FBase_TextureCfg"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "textureCfg", void 0);
i([ ae.bindAtom("G12_FBase_CommonFontAsset"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "commonFontAsset", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GiveUpUICloseRouter"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "giveUpUICloseRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GiveUpUIReturnBlockRouter"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "giveUpUIReturnBlockRouter", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GiveUpUIRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_GiveUpUIRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GiveUpUIReturnBlockLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a63cb5IDnhFBZrKw/RWQnMr", "G12_FHeartSystem_GiveUpUIReturnBlockLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GiveUpUIReturnBlockLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
if (this.heartManagerLogic.runtime.giveUpUIIsRetry) {
if (this.tryOpenRetryEmptyUIFunc(!0)) {
this.uiMgrFunc().close(this.uiConfig.giveUpUI);
return;
}
this.heartManagerLogic.runtime.giveUpUIIsRetry = !1;
this.processFailOrAbandonFunc();
this.flyHeartCompleteFunc();
this.executeRevivePageRetryFunc();
this.uiMgrFunc().close(this.uiConfig.giveUpUI);
} else {
this.handleConfirmedLevelExitFunc();
this.uiMgrFunc().close(this.uiConfig.giveUpUI);
}
};
var o, n, c, f, p, u, s, y, d;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_GiveUpUIReturnBlockSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HandleConfirmedLevelExitFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "handleConfirmedLevelExitFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_TryOpenRetryEmptyUIFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "tryOpenRetryEmptyUIFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ProcessFailOrAbandonFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "processFailOrAbandonFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_FlyHeartCompleteFunc"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "flyHeartCompleteFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ExecuteRevivePageRetryFunc"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "executeRevivePageRetryFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GiveUpUIReturnBlockLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_GiveUpUIReturnBlockLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GiveUpUIReturnBlockRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "85dcbT6w/ZC1IR/Mh5izleq", "G12_FHeartSystem_GiveUpUIReturnBlockRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GiveUpUIReturnBlockRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_GiveUpUIReturnBlockSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GiveUpUIReturnBlockRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_GiveUpUIReturnBlockRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_GiveUpUIReturnBlockSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2f7dc948VdJVL40O4AxASAx", "G12_FHeartSystem_GiveUpUIReturnBlockSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_GiveUpUIReturnBlockSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_GiveUpUIDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "exitUIDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_GiveUpUIReturnBlockSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_GiveUpUIReturnBlockSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HandleConfirmedLevelExitFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d0c046RXbdKi5EMbJBV50zT", "G12_FHeartSystem_HandleConfirmedLevelExitFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HandleConfirmedLevelExitFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = !1;
if (e.uiMgrFunc().isOpen(e.uiConfig.homeUI)) e.loadingShowFadeInFunc(!0, e.cleanAllDataRouter); else if (e.baseUiMgrFunc().isOpen(e.baseUiMgrFunc().cfg.RevivePage)) {
e.loadingShowFadeInFunc(!0, e.cleanAllDataRouter);
e.hidePageFunc(e.baseUiMgrFunc().cfg.RevivePage);
} else if (!0 === e.heartConfig.outerMapEnabled) {
e.loadingShowFadeInFunc(!0, e.cleanAllDataRouter);
e.getLevelFunc() <= e.heartConfig.isSkipHomeUILevel && e.heartMgrFunc().openOuterMap();
} else {
e.return2BlockFunc();
t = !0;
}
t || e.hidePageFunc(e.uiMgrFunc().baseCfg.SettingPanel);
e.processFailOrAbandonFunc();
e.flyHeartCompleteFunc();
};
};
var o, n, c, f, p, u, s, y, d, l, _, m;
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "baseUiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FBase_Return2BlockFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "return2BlockFunc", void 0);
i([ ae.bindAtom("G12_FBase_LoadingShowFadeInFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "loadingShowFadeInFunc", void 0);
i([ ae.bindAtom("G12_FBase_CleanAllDataRouter"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "cleanAllDataRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FBase_HidePageFunc"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "hidePageFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ProcessFailOrAbandonFunc"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "processFailOrAbandonFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_FlyHeartCompleteFunc"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "flyHeartCompleteFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "heartMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_GetLevelFunc"), a("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "getLevelFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HandleConfirmedLevelExitFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_HandleConfirmedLevelExitFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HandleReturnBlockRouteFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8c005bUiFxBz6ivVWYN2Qed", "G12_FHeartSystem_HandleReturnBlockRouteFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HandleReturnBlockRouteFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.getFailCostHeartFunc();
if (t > 0 && !0 === e.heartConfig.confirmGiveUpEnabled) {
e.openGiveUpPageFunc();
return !0;
}
if (t > 0) {
e.processFailOrAbandonFunc();
e.flyHeartCompleteFunc();
}
if (e.heartConfig.outerMapEnabled) {
e.getLevelFunc() <= e.heartConfig.isSkipHomeUILevel && e.openOuterMapFunc();
e.heartManagerLogic.runtime.isOnLoadingLevel = !0;
e.loadingShowFadeInFunc(!0, e.cleanAllDataRouter);
e.hidePageFunc(e.uiMgrFunc().cfg.SettingPanel);
return !0;
}
return !1;
};
};
var o, n, c, f, p, u, s, y, d, l, _, m;
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_OpenGiveUpPageFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "openGiveUpPageFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_OpenOuterMapFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "openOuterMapFunc", void 0);
i([ ae.bindAtom("G12_FBase_LoadingShowFadeInFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "loadingShowFadeInFunc", void 0);
i([ ae.bindAtom("G12_FBase_CleanAllDataRouter"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "cleanAllDataRouter", void 0);
i([ ae.bindAtom("G12_FBase_HidePageFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "hidePageFunc", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetFailCostHeartFunc"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "getFailCostHeartFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ProcessFailOrAbandonFunc"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "processFailOrAbandonFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_FlyHeartCompleteFunc"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "flyHeartCompleteFunc", void 0);
i([ ae.bindAtom("G12_FBase_GetLevelFunc"), a("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "getLevelFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HandleReturnBlockRouteFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_HandleReturnBlockRouteFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HandleShowAdSuccFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "72824g6s8hMML4J6F65X79L", "G12_FHeartSystem_HandleShowAdSuccFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HandleShowAdSuccFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
e.logFunc().log("[G12_FHeartSystem_HandleShowAdSuccFunc] On show reward ad finish");
e.updateBannerAdLogic.runtime.forceHideBannerCount = 0;
e.updateBannerAdLogic.runtime.passedTime = 0;
e.updateLastRewardAdTimeFunc();
e.updateWatchRewardAdCountFunc();
e.adMgrFunc().forceHideBanner();
e.setIsShowBannerAdFunc(!1);
e.trackGameReviveSuccessFunc();
};
};
var o, n, c, f, p, u, s;
i([ ae.bindAtom("G12_FBase_UpdateLastRewardAdTimeFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "updateLastRewardAdTimeFunc", void 0);
i([ ae.bindAtom("G12_FBase_TrackGameReviveSuccessFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "trackGameReviveSuccessFunc", void 0);
i([ ae.bindAtom("G12_FBase_UpdateWatchRewardAdCountFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "updateWatchRewardAdCountFunc", void 0);
i([ ae.bindAtom("G12_FBase_LogFunc2"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "logFunc", void 0);
i([ ae.bindAtom("G12_FBase_ADMgrFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "adMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_SetIsShowBannerAdFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "setIsShowBannerAdFunc", void 0);
i([ ae.bindAtom("G12_FBase_UpdateBannerAdLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "updateBannerAdLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HandleShowAdSuccFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_HandleShowAdSuccFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HeartConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ab7aeqbZ0lGgJYNv0xhW5zG", "G12_FHeartSystem_HeartConfig");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HeartConfig = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
enterCostHeart: 0,
victoryPlusHeart: 0,
victoryPlusHeartByLevel: !1,
failCostHeart: 0,
confirmGiveUpEnabled: !1,
adRefillDailyLimit: 0,
recoveryInterval: 1500,
outerMapEnabled: !1,
maxHeart: 0,
isOpenQuitBtn: !1,
stageRecoveryInterval: [],
isOnlyNewEnterCost: !1,
skipInterAdOnZeroHeart: !1,
startCostHeartLevelThreshold: 1,
homeUISkinType: 0,
isSkipHomeUILevel: 1
};
};
return i([ ae.atomClass("G12_FHeartSystem_HeartConfig") ], t);
}(ae.ConfigAtom);
o.G12_FHeartSystem_HeartConfig = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HeartManagerLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "60f5445NBNJr78s0TTNP2cj", "G12_FHeartSystem_HeartManagerLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HeartManagerLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineStorageData = function() {
return {
currentHeart: -1,
nextRecoveryAt: 0,
saveRecoveryAt: 0,
dailyAdRefillCount: 0,
lastAdRefillDate: "",
lastEnterLevel: 0,
maxHeart: 0,
adRefillDailyLimit: 0,
recoveryInterval: 0
};
};
t.prototype.defineRuntimeData = function() {
return {
isFormRetry: !1,
isOnLoadingLevel: !1,
currentShowHeart: 0,
recoveryInterval: 0,
surplusTime: "",
giveUpUIIsRetry: !1,
retryPendingAfterEmptyUI: !1,
retryGiveUpConfirmedAfterEmptyUI: !1,
pendingFlyHeartComplete: !1,
pendingVictoryReturnHomeAnim: !1,
gamePanelAlpha: 1,
isEmptyUIRewardAdShowing: !1,
isOpenQuitBtn: !1,
winRenderTweenEid: null
};
};
t.prototype.onExecute = function(e, t) {
if (t.storage.currentHeart < 0) {
t.storage.currentHeart = this.heartConfig.maxHeart;
t.storage.maxHeart = this.heartConfig.maxHeart;
t.storage.adRefillDailyLimit = this.heartConfig.adRefillDailyLimit;
}
t.runtime.currentShowHeart = t.storage.currentHeart;
t.runtime.isOpenQuitBtn = this.heartConfig.isOpenQuitBtn;
this.updateRecoveryIntervalFunc();
this.resetDailyAdRefillFunc();
if (t.storage.saveRecoveryAt > 0 && t.storage.nextRecoveryAt <= 0) {
t.storage.nextRecoveryAt = t.storage.saveRecoveryAt;
t.storage.saveRecoveryAt = 0;
}
t.storage.saveRecoveryAt = 0;
var o = this.uiMgrFunc().cfg;
o[this.uiConfig.emptyUI] = {
domain: this.emptyUIDomain,
layerEnum: this.layerCfg.UITip,
key: this.uiConfig.emptyUI,
withoutSort: !1
};
o[this.uiConfig.getUI] = {
domain: this.getUIDomain,
layerEnum: this.layerCfg.UITip,
key: this.uiConfig.getUI,
withoutSort: !1
};
o[this.uiConfig.giveUpUI] = {
domain: this.giveUpUIDomain,
layerEnum: this.layerCfg.UITip,
key: this.uiConfig.giveUpUI,
withoutSort: !1
};
o[this.uiConfig.homeUI] = {
domain: this.homeUIDomain,
layerEnum: this.layerCfg.UITip,
key: this.uiConfig.homeUI,
withoutSort: !1
};
o[this.uiConfig.homeSetUI] = {
domain: this.settingPanelDomain,
layerEnum: this.layerCfg.UITip,
key: this.uiConfig.homeSetUI,
withoutSort: !1
};
o[this.uiConfig.quitUI] = {
domain: this.quitUIDomain,
layerEnum: this.layerCfg.UITip,
key: this.uiConfig.quitUI,
withoutSort: !1
};
};
var o, n, c, f, p, u, s, y, d, l, _, m, h;
i([ ae.onChain, ae.bindAtom("G12_FBase_MainSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "mainSignal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UpdateRecoveryIntervalFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "updateRecoveryIntervalFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ResetDailyAdRefillFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "resetDailyAdRefillFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_LayerCfg"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "layerCfg", void 0);
i([ ae.bindAtom("G12_FHeartSystem_EmptyUIDomain"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "emptyUIDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetUIDomain"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "getUIDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GiveUpUIDomain"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "giveUpUIDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIDomain"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "homeUIDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_SettingPanelDomain"), a("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "settingPanelDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_QuitUIDomain"), a("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "quitUIDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HeartManagerLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_HeartManagerLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HeartMgrFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3dff26hGMlNWro6pzp9O0Df", "G12_FHeartSystem_HeartMgrFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HeartMgrFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return {
enterLevel: e.tryEnterLevelFunc,
victory: e.processVictoryFunc,
failOrAbandon: e.processFailOrAbandonFunc,
refreshRecovery: e.refreshRecoveryFunc,
adRefillHeart: e.adRefillHeartFunc,
addHeart: e.addHeartFunc,
flyHeartComplete: e.flyHeartCompleteFunc,
costHeart: e.costHeartFunc,
handleReturnBlockRoute: e.handleReturnBlockRouteFunc,
checkRecovery: e.checkRecoveryFunc,
openOuterMap: e.openOuterMapFunc,
isActive: e.isActiveFunc
};
};
};
var o, n, c, f, p, u, s, y, d, l, _, m;
i([ ae.bindAtom("G12_FHeartSystem_TryEnterLevelFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tryEnterLevelFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ProcessVictoryFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "processVictoryFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ProcessFailOrAbandonFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "processFailOrAbandonFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_RefreshRecoveryFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "refreshRecoveryFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AdRefillHeartFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "adRefillHeartFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AddHeartFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "addHeartFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CostHeartFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "costHeartFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HandleReturnBlockRouteFunc"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "handleReturnBlockRouteFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_OpenOuterMapFunc"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "openOuterMapFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_FlyHeartCompleteFunc"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "flyHeartCompleteFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CheckRecoveryFunc"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "checkRecoveryFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_IsHeartSystemActiveFunc"), a("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "isActiveFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HeartMgrFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_HeartMgrFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HeartRecoverySpineCompleteLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "895b3PrYmVCKYcPoiAzdhG3", "G12_FHeartSystem_HeartRecoverySpineCompleteLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HeartRecoverySpineCompleteLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
isAnimating: !1,
spineIndex: -1
};
};
t.prototype.onExecute = function(e, t) {
var o = t.runtime;
if (o.isAnimating && this.getUIBigHeartDomain.heartCmp.heartIndex[e] === o.spineIndex) {
this.heartMgrFunc().flyHeartComplete();
o.isAnimating = !1;
this.heartMgrFunc().checkRecovery();
}
};
var o, n, c;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_HeartRecoverySpineCompleteSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetUIBigHeartDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getUIBigHeartDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartMgrFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HeartRecoverySpineCompleteLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_HeartRecoverySpineCompleteLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HeartRecoverySpineCompleteRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "db8a2niyhFHzawglvpjKcyW", "G12_FHeartSystem_HeartRecoverySpineCompleteRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HeartRecoverySpineCompleteRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "fromSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_HeartRecoverySpineCompleteSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HeartRecoverySpineCompleteRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_HeartRecoverySpineCompleteRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HeartRecoverySpineCompleteSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "92d2b6u7aVEP66tMa/H9Z4D", "G12_FHeartSystem_HeartRecoverySpineCompleteSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HeartRecoverySpineCompleteSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_GetUIBigHeartDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "getUIBigHeartDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HeartRecoverySpineCompleteSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_HeartRecoverySpineCompleteSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeLevelConfigCacheLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "956d5EbxqlEjrjtu7foWPPk", "G12_FHeartSystem_HomeLevelConfigCacheLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeLevelConfigCacheLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
windowStartLevel: 0,
windowSize: 5,
lastAvailableLevel: 0,
levelConfig: {},
loadingLevelMap: {},
loadingUrlLevelMap: {}
};
};
t.prototype.onExecute = function(e, t) {
var o, n = t.runtime;
if (this.jsonData.error) {
var r = null !== (o = n.loadingUrlLevelMap[String(this.jsonData.url)]) && void 0 !== o ? o : 0;
if (r <= 0) return;
n.loadingLevelMap[r] = !1;
n.lastAvailableLevel = n.lastAvailableLevel ? Math.min(n.lastAvailableLevel, r - 1) : r - 1;
for (var i in n.levelConfig) {
var a = Number(i);
a >= r && delete n.levelConfig[a];
}
} else {
var c = this.jsonData.jsonData;
if (c && "number" == typeof c.id) {
n.loadingLevelMap[c.id] = !1;
n.lastAvailableLevel > 0 && c.id > n.lastAvailableLevel || c.id < n.windowStartLevel || c.id >= n.windowStartLevel + n.windowSize || (n.levelConfig[c.id] = c);
}
}
};
var o, n;
i([ ae.signalStart, ae.onChain, ae.bindAtom("G12_FHeartSystem_HomeLevelConfigLoadedSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "homeLevelConfigLoadedSignal", void 0);
i([ ae.bindAtom("G_FAtom_JsonData"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "jsonData", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeLevelConfigCacheLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_HomeLevelConfigCacheLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeLevelConfigLoadedSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "220fakzwm1Pe51IHWhPwARB", "G12_FHeartSystem_HomeLevelConfigLoadedSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeLevelConfigLoadedSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeLevelConfigLoadedSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_HomeLevelConfigLoadedSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIBigHeartDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cd485cilFpP44oUQdhmyCUp", "G12_FHeartSystem_HomeUIBigHeartDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIBigHeartDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n, c;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G12_FHeartSystem_BezierCmp"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "bezierCmp", void 0);
i([ ae.bindAtom("G12_FHeartSystem_TweenUICmp"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tweenUICmp", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIBigHeartDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_HomeUIBigHeartDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIBigHeartRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "43588YexKdHS5F72FDHytV9", "G12_FHeartSystem_HomeUIBigHeartRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIBigHeartRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Node({
name: "HomeUIBigHeart"
}, ae.Sprite({
name: "anim",
img: this.assetsConfig.blockFlowIconHeart1TexUrl,
x: [ function(t) {
return e.getCmpBezierPosFunc(t, e.domain.bezierCmp)[0];
}, [ this.domain.bezierCmp, "elapsedTime" ] ],
y: [ function(t) {
return e.getCmpBezierPosFunc(t, e.domain.bezierCmp)[1];
}, [ this.domain.bezierCmp, "elapsedTime" ] ],
scale: [ function(t) {
return e.domain.tweenUICmp.scale[t];
}, [ this.domain.tweenUICmp, "scale" ] ]
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_HomeUIBigHeartDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetCmpBezierPosFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getCmpBezierPosFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIBigHeartRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_HomeUIBigHeartRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIClickEnterBtnRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "55b1767JrxDj6R6T1cvC7Cd", "G12_FHeartSystem_HomeUIClickEnterBtnRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIClickEnterBtnRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_HomeUIClickEnterBtnSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIClickEnterBtnRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_HomeUIClickEnterBtnRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIClickEnterBtnSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bc0e6c8pYpHcJH3z1BcSdwJ", "G12_FHeartSystem_HomeUIClickEnterBtnSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIClickEnterBtnSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_HomeUIEnterBtnDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "homeUIEnterBtnDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIClickEnterBtnSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_HomeUIClickEnterBtnSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIClickListItemRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "dd795PStaJAabQzAQ1/Ba3b", "G12_FHeartSystem_HomeUIClickListItemRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIClickListItemRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_HomeUIClickListItemSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIClickListItemRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_HomeUIClickListItemRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIClickListItemSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2ef02J+vAdDSo+Y8JM2WcwR", "G12_FHeartSystem_HomeUIClickListItemSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIClickListItemSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_HomeUIListItemDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "listItemDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIClickListItemSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_HomeUIClickListItemSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6c8f9KsyNZA64HtxrQjHQoD", "G12_FHeartSystem_HomeUIConfig");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIConfig = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
showHardTipsDifficulty: 3,
listItemNum: 5,
layout: {
bgTexture: {
width: 2,
height: 256
},
topMask: {
baseHeight: 350
},
settingButton: {
offsetRight: 60
},
settingPanel: {
bg: {
y: 17,
width: 808,
height: 847
},
closeBtn: {
x: 347,
y: 393
},
infoBg: {
y: 65.5,
width: 723,
height: 461
},
title: {
y: 363,
fontSize: 54,
color: 16777215
},
exitBtn: {
y: -286,
width: 565,
height: 142
},
exitText: {
y: 6.354,
fontSize: 64,
color: 16777215
}
},
listItemStartY: -214,
listItemSpaceY: 320,
listItemRewardX: 176,
listItemActiveRewardX: 220,
listItem: {
levelText: {
y: 5,
fontSize: 72,
color: 16777215,
shadowColor: 0,
shadowOffsetX: 2,
shadowOffsetY: -3
},
hardTips: {
x: -127,
y: 91
},
hardText: {
text: "Hard",
difficultyThreshold: 1,
x: -128,
y: 101,
fontSize: 40,
color: 16777215,
shadowColor: 0,
shadowOffsetX: 2,
shadowOffsetY: -3
}
},
playText: {
text: "Play",
y: 15,
fontSize: 76,
color: 16777215
},
enterBtn: {
y: -500,
width: 554,
height: 150
},
hpHUD: {
offsetXFromRight: 188
},
reward: {
scale: 1.6,
addText: {
x: 84,
y: -19,
fontSize: 62,
color: 16777215,
shadowColor: 0,
shadowOffsetX: 2,
shadowOffsetY: -3
}
},
rewardFlyText: {
offsetX: 45,
offsetY: -38,
fontSize: 32,
color: 16777215,
shadowColor: 0,
shadowOffsetX: 2,
shadowOffsetY: -3
}
},
tween: {
listSlide: {
duration: .33,
fallbackTopY: 300,
hiddenScale: 0,
hiddenAlpha: 0,
visibleAlpha: 1
},
currentItemBgScale: {
normalScale: 1,
inactiveScale: .88,
activeScale: 1.1,
duration: 1.67
},
victoryReturn: {
rewardFlyDuration: .8,
rewardHeartStartDelay: .2,
rewardHeartHiddenScale: 0,
rewardHeartScale: .66,
rewardHeartHideDuration: .1,
rewardHeartInterval: .15,
rewardFlyTextMoveY: 42,
rewardFlyTextFadeInDuration: .12,
rewardFlyTextVisibleDuration: .25,
rewardFlyTextFadeOutDuration: .28,
rewardControlRatioX: .5,
rewardControlRatioY: .5,
rewardControlOffsetY: 180
}
}
};
};
return i([ ae.atomClass("G12_FHeartSystem_HomeUIConfig") ], t);
}(ae.ConfigAtom);
o.G12_FHeartSystem_HomeUIConfig = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "13ea3v7CSdFHIWiDvSWMXio", "G12_FHeartSystem_HomeUIDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G12_FHeartSystem_TweenUICmp"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tweenUICmp", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_HomeUIDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIEnterBtnDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c79387GhGZF+boPGAuUG72M", "G12_FHeartSystem_HomeUIEnterBtnDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIEnterBtnDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G_FAtom_BoxComponent"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "boxComponent", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIEnterBtnDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_HomeUIEnterBtnDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIEnterBtnLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1dc44ZK7v9KqprPAxKklySs", "G12_FHeartSystem_HomeUIEnterBtnLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIEnterBtnLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.commonButtonClickEffectFunc();
this.heartMgrFunc().enterLevel(void 0, !0) && this.closeHomeUIFunc();
};
var o, n, c, f, p, u, s;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_HomeUIClickEnterBtnSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_LoadSingleBlockLogic"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "loadSingleBlockLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CloseHomeUIFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "closeHomeUIFunc", void 0);
i([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "commonButtonClickEffectFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIEnterBtnLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_HomeUIEnterBtnLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIEnterBtnRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f00eeQwuSxAeYgdArWgrQmn", "G12_FHeartSystem_HomeUIEnterBtnRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIEnterBtnRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this.assetsConfig.homeUISkin[this.heartConfig.homeUISkinType];
return ae.Sprite({
name: "enterBtn",
img: e.playBtnTexUrl,
button: this.constCfg.Button,
event: {
buttonClick: this.enterBtnClickRouter
},
renderType: ae.RenderType.Sliced
}, ae.Text({
name: "text",
text: this.homeUIConfig.layout.playText.text,
font: this.commonFontAsset.santralExtraBold,
fontSize: this.homeUIConfig.layout.playText.fontSize,
rgb: this.homeUIConfig.layout.playText.color,
y: this.homeUIConfig.layout.playText.y
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p, u, s;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_HomeUIEnterBtnDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBase_CommonFontAsset"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "commonFontAsset", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIClickEnterBtnRouter"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "enterBtnClickRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIConfig"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "homeUIConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIEnterBtnRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_HomeUIEnterBtnRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIFlyHeartSfxLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "18101gpt6xIrpcQ0gGrKaaA", "G12_FHeartSystem_HomeUIFlyHeartSfxLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIFlyHeartSfxLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.playCollectSfxFunc();
};
var o, n;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_HomeUIFlyHeartSfxSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_PlayCollectSfxFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "playCollectSfxFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIFlyHeartSfxLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_HomeUIFlyHeartSfxLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIFlyHeartSfxRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f15d6fl5BZLyYuB4CNJ/pA5", "G12_FHeartSystem_HomeUIFlyHeartSfxRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIFlyHeartSfxRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_TweenEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "fromSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_HomeUIFlyHeartSfxSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIFlyHeartSfxRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_HomeUIFlyHeartSfxRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIFlyHeartSfxSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b13a9Krd2tD0boIy0IpaPS/", "G12_FHeartSystem_HomeUIFlyHeartSfxSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIFlyHeartSfxSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_HomeUIBigHeartDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "homeUIBigHeartDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIFlyHeartSfxSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_HomeUIFlyHeartSfxSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIInputBlockerDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2d9a42Lf1dH/YYMWGZeu7FJ", "G12_FHeartSystem_HomeUIInputBlockerDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIInputBlockerDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIInputBlockerDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_HomeUIInputBlockerDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIInputBlockerRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f89d7exUkpJxLE5M7I9zH2U", "G12_FHeartSystem_HomeUIInputBlockerRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIInputBlockerRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
return ae.Sprite({
name: "HomeUIInputBlocker",
img: this.textureCfg.singleColor,
alpha: 0,
widget: this.constCfg.FulWidget,
button: {
interactable: !0,
transition: ae.ButtonTransition.None
},
blockInputEvents: !0
});
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_HomeUIInputBlockerDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBase_TextureCfg"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "textureCfg", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIInputBlockerRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_HomeUIInputBlockerRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIListContainerDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b75b5xQlQ5Cg6ZyQMYKjfO9", "G12_FHeartSystem_HomeUIListContainerDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIListContainerDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIListContainerDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_HomeUIListContainerDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIListContainerRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9d480lK/WFEdLaX6yCNUvvK", "G12_FHeartSystem_HomeUIListContainerRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIListContainerRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
return ae.Node({
name: "HomeUIListContainer"
});
};
t.prototype.defineRenderName = function() {
return null;
};
var o;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_HomeUIListContainerDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIListContainerRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_HomeUIListContainerRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIListItemAndRewardRelation: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5e15fxN21pGV4fbfSnqbkAn", "G12_FHeartSystem_HomeUIListItemAndRewardRelation");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIListItemAndRewardRelation = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRelation = function() {
return {
exclusive: !0,
autoRemoveSubject: !0
};
};
return i([ ae.atomClass("G12_FHeartSystem_HomeUIListItemAndRewardRelation") ], t);
}(ae.EntityRelationAtom);
o.G12_FHeartSystem_HomeUIListItemAndRewardRelation = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIListItemClickLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "154f1qdBIdHAZdiMo7kx5vL", "G12_FHeartSystem_HomeUIListItemClickLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIListItemClickLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function(e) {
if (this.domain.listItemCmp.isCanPlay[e]) {
this.commonButtonClickEffectFunc();
if (!this.heartMgrFunc().enterLevel(void 0, !0)) return;
this.closeHomeUIFunc();
}
};
var o, n, c, f, p, u, s;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_HomeUIClickListItemSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIListItemDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CloseHomeUIFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "closeHomeUIFunc", void 0);
i([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "commonButtonClickEffectFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIListItemClickLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_HomeUIListItemClickLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIListItemCmp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bcc89S/gYxGxaZPfzgVoAGX", "G12_FHeartSystem_HomeUIListItemCmp");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIListItemCmp = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
level: 0,
isCanPlay: !1,
difficulty: 0,
prgAlpha: 1,
prgScale: 1,
alpha: 1,
spaceY: 0,
bgScale: 1,
guangqiaAlpha: 0
};
};
return i([ ae.atomClass("G12_FHeartSystem_HomeUIListItemCmp") ], t);
}(ae.EntityComponentAtom);
o.G12_FHeartSystem_HomeUIListItemCmp = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIListItemDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c15dc2i3i9KF4G1oyC6Npn6", "G12_FHeartSystem_HomeUIListItemDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIListItemDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIListItemCmp"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "listItemCmp", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIListItemDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_HomeUIListItemDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIListItemRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e38b0QY0mBKwYnUtnRBbFPo", "G12_FHeartSystem_HomeUIListItemRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIListItemRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = [ this.assetsConfig.blockFlowImgLvlMap1TexUrl, this.assetsConfig.blockFlowImgLvlMap1TexUrl, this.assetsConfig.blockFlowImgLvlMap2TexUrl, this.assetsConfig.blockFlowImgLvlMap3TexUrl ], o = [ this.assetsConfig.guanqiaGreen, this.assetsConfig.guanqiaGreen, this.assetsConfig.guanqiaBlue, this.assetsConfig.guanqiaPurple ];
return ae.Node({
name: "HomeUIListItem",
alpha: [ function(t) {
return e.domain.listItemCmp.alpha[t];
}, [ this.domain.listItemCmp, "alpha" ] ],
zIndex: [ function(t) {
return -e.domain.transform.y[t];
}, [ this.domain.transform, "y" ] ]
}, ae.Sprite({
name: "prg",
img: this.assetsConfig.blockFlowBarLvlMap2TexUrl,
height: [ function(t) {
return e.domain.listItemCmp.spaceY[t];
}, [ this.domain.listItemCmp, "spaceY" ] ],
y: [ function(t) {
return -e.domain.listItemCmp.spaceY[t] / 2;
}, [ this.domain.listItemCmp, "spaceY" ] ],
alpha: [ function(t) {
return e.domain.listItemCmp.prgAlpha[t];
}, [ this.domain.listItemCmp, "prgAlpha" ] ],
scale: [ function(t) {
return e.domain.listItemCmp.prgScale[t];
}, [ this.domain.listItemCmp, "prgScale" ] ],
width: 30,
renderType: ae.RenderType.Sliced
}), ae.Node({
name: "bg",
button: this.constCfg.Button,
event: {
buttonClick: this.clickRouter
},
width: 238,
height: 272
}, ae.Sprite({
name: "bgSprite",
img: [ function(o) {
var n;
return t[null !== (n = e.domain.listItemCmp.difficulty[o]) && void 0 !== n ? n : 0];
}, [ this.domain.listItemCmp, "difficulty" ] ],
scale: [ function(t) {
return e.domain.listItemCmp.isCanPlay[t] ? e.domain.listItemCmp.bgScale[t] : e.homeUIConfig.tween.currentItemBgScale.inactiveScale;
}, [ this.domain.listItemCmp, "bgScale" ], [ this.domain.listItemCmp, "isCanPlay" ] ]
}), ae.Sprite({
name: "guangqia",
img: [ function(t) {
var n;
return o[null !== (n = e.domain.listItemCmp.difficulty[t]) && void 0 !== n ? n : 0];
}, [ this.domain.listItemCmp, "difficulty" ] ],
alpha: [ function(t) {
return e.domain.listItemCmp.guangqiaAlpha[t];
}, [ this.domain.listItemCmp, "guangqiaAlpha" ] ],
scale: [ function(t) {
return 2 * e.domain.listItemCmp.bgScale[t];
}, [ this.domain.listItemCmp, "bgScale" ] ]
})), ae.Sprite({
name: "hardTips",
img: this.assetsConfig.blockFlowImgLvlMap4TexUrl,
alpha: [ function(t) {
return e.domain.listItemCmp.difficulty[t] >= e.homeUIConfig.showHardTipsDifficulty ? e.homeUIConfig.tween.listSlide.visibleAlpha : e.homeUIConfig.tween.listSlide.hiddenAlpha;
}, [ this.domain.listItemCmp, "difficulty" ] ],
x: this.homeUIConfig.layout.listItem.hardTips.x,
y: this.homeUIConfig.layout.listItem.hardTips.y
}), ae.Text({
name: "levelText",
text: [ function(t) {
return e.domain.listItemCmp.level[t].toString();
}, [ this.domain.listItemCmp, "level" ] ],
font: this.commonFontAsset.santralExtraBold,
fontSize: this.homeUIConfig.layout.listItem.levelText.fontSize,
rgb: this.homeUIConfig.layout.listItem.levelText.color,
shadow: {
offset: [ this.homeUIConfig.layout.listItem.levelText.shadowOffsetX, this.homeUIConfig.layout.listItem.levelText.shadowOffsetY ],
rgb: this.homeUIConfig.layout.listItem.levelText.shadowColor
},
y: this.homeUIConfig.layout.listItem.levelText.y,
scale: [ function(t) {
return e.domain.listItemCmp.bgScale[t];
}, [ this.domain.listItemCmp, "bgScale" ] ]
}), ae.Text({
name: "hardText",
text: [ function(t) {
return e.domain.listItemCmp.difficulty[t] > e.homeUIConfig.layout.listItem.hardText.difficultyThreshold ? e.homeUIConfig.layout.listItem.hardText.text : "";
}, [ this.domain.listItemCmp, "difficulty" ] ],
alpha: [ function(t) {
return e.domain.listItemCmp.difficulty[t] >= e.homeUIConfig.showHardTipsDifficulty ? e.homeUIConfig.tween.listSlide.visibleAlpha : e.homeUIConfig.tween.listSlide.hiddenAlpha;
}, [ this.domain.listItemCmp, "difficulty" ] ],
font: this.commonFontAsset.santralExtraBold,
fontSize: this.homeUIConfig.layout.listItem.hardText.fontSize,
rgb: this.homeUIConfig.layout.listItem.hardText.color,
shadow: {
offset: [ this.homeUIConfig.layout.listItem.hardText.shadowOffsetX, this.homeUIConfig.layout.listItem.hardText.shadowOffsetY ],
rgb: this.homeUIConfig.layout.listItem.hardText.shadowColor
},
x: this.homeUIConfig.layout.listItem.hardText.x,
y: this.homeUIConfig.layout.listItem.hardText.y
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p, u, s;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_HomeUIListItemDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "homeUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIClickListItemRouter"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "clickRouter", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBase_CommonFontAsset"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "commonFontAsset", void 0);
i([ ae.bindAtom("G12_FBase_GetLevelFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "getLevelFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIListItemRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_HomeUIListItemRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUINativeBack2ExitConfirmCheckLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d7e5bHdFWFNJ42cjhV1KKk7", "G12_FHeartSystem_HomeUINativeBack2ExitConfirmCheckLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUINativeBack2ExitConfirmCheckLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.checkUIOnTopFunc(this.uiMgrFunc().cfg[this.uiConfig.homeUI]) ? this.router.dispatchAction = ae.DispatchAction.FireOnce : this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var o, n, c, f, p;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G12_FHeartSystem_HomeUINativeBack2ExitConfirmRouter"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "homeUIDomain", void 0);
i([ ae.bindAtom("G12_FBase_CheckUIOnTopFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "checkUIOnTopFunc", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "uiConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUINativeBack2ExitConfirmCheckLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_HomeUINativeBack2ExitConfirmCheckLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUINativeBack2ExitConfirmRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d5755JiWUtNT6cwgYe1J0IN", "G12_FHeartSystem_HomeUINativeBack2ExitConfirmRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUINativeBack2ExitConfirmRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G12_FBase_NativeBackSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "nativeBackSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G12_FBase_OpenExitConfirmSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUINativeBack2ExitConfirmRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_HomeUINativeBack2ExitConfirmRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "479ebpj9jtLQocf0xB1eAXU", "G12_FHeartSystem_HomeUIRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.poolMaxSize = function() {
return 0;
};
t.prototype.defineRender = function() {
var e = this, t = this.assetsConfig.homeUISkin[this.heartConfig.homeUISkinType], o = this.homeUIConfig.layout.bgTexture.width, n = this.homeUIConfig.layout.bgTexture.height, r = this.createVerticalGradientPixelsFunc({
topColor: t.bgTopColor,
bottomColor: t.bgBotColor,
texWidth: o,
texHeight: n
});
return ae.Node({
name: "HomeUI",
widget: this.constCfg.FulWidget
}, ae.Texture2D({
name: "bg",
texWidth: o,
texHeight: n,
pixels: r,
format: ae.PixelFormat.RGBA8888,
filterMin: ae.TextureFilter.Linear,
filterMag: ae.TextureFilter.Linear,
wrapS: ae.TextureWrapMode.ClampToEdge,
wrapT: ae.TextureWrapMode.ClampToEdge,
widget: this.constCfg.FulWidget
}), ae.Spine({
name: "bgLizi",
spineUrl: this.assetsConfig.gameplayBgLizi.url,
animation: {
name: this.assetsConfig.gameplayBgLizi.animName.in,
loop: !0
}
}), ae.Sprite({
name: "glowSd01",
img: this.assetsConfig.glowSd01,
angle: [ function(t) {
return e.domain.tweenUICmp.angle[t];
}, [ this.domain.tweenUICmp, "angle" ] ],
y: this.homeUIConfig.layout.listItemStartY,
scale: 2.5
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p, u;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_HomeUIDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "homeUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FBase_CreateVerticalGradientPixelsFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "createVerticalGradientPixelsFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_HomeUIRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIRewardClickLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ea3dfb60oJFwZ7QLSkRfzuy", "G12_FHeartSystem_HomeUIRewardClickLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIRewardClickLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function(e) {
this.stopTween(e, "HomeUIRewardShake");
this.tween(e, [ [ ae.TweenStepType.To, this.rewardDomain.transform, {
scaleX: .92,
scaleY: 1.08
}, .08 ], [ ae.TweenStepType.To, this.rewardDomain.transform, {
scaleX: 1.08,
scaleY: .92
}, .08 ], [ ae.TweenStepType.To, this.rewardDomain.transform, {
scaleX: .96,
scaleY: 1.04
}, .06 ], [ ae.TweenStepType.To, this.rewardDomain.transform, {
scaleX: 1,
scaleY: 1
}, .06 ] ], "HomeUIRewardShake");
};
var o, n, c, f;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_HomeUIRewardClickSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIRewardDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "rewardDomain", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_StopTween"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "stopTween", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIRewardClickLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_HomeUIRewardClickLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIRewardClickRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "35e9cw1xVhDfoaCColn3O1+", "G12_FHeartSystem_HomeUIRewardClickRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIRewardClickRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_HomeUIRewardClickSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIRewardClickRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_HomeUIRewardClickRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIRewardClickSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6e0b1TFIZxCjZOPzvosRHTM", "G12_FHeartSystem_HomeUIRewardClickSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIRewardClickSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_HomeUIRewardDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rewardDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIRewardClickSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_HomeUIRewardClickSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIRewardCmp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "dcd1bQlQ1tCcb1jMd0CzZDL", "G12_FHeartSystem_HomeUIRewardCmp");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIRewardCmp = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
addHpNum: 0
};
};
return i([ ae.atomClass("G12_FHeartSystem_HomeUIRewardCmp") ], t);
}(ae.EntityComponentAtom);
o.G12_FHeartSystem_HomeUIRewardCmp = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIRewardDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "68b89MmRylL0Yt88xRkZwNT", "G12_FHeartSystem_HomeUIRewardDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIRewardDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIRewardCmp"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "homeUIRewardCmp", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIRewardDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_HomeUIRewardDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIRewardFlyTextDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e5398cwSw1CXLRQG7nj8Uma", "G12_FHeartSystem_HomeUIRewardFlyTextDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIRewardFlyTextDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G12_FHeartSystem_TweenUICmp"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tweenUICmp", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIRewardFlyTextDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_HomeUIRewardFlyTextDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIRewardFlyTextRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7c513KYdIVCwZwXLtgFHaK7", "G12_FHeartSystem_HomeUIRewardFlyTextRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIRewardFlyTextRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Text({
name: "HomeUIRewardFlyText",
text: [ function(t) {
return e.domain.tweenUICmp.text[t];
}, [ this.domain.tweenUICmp, "text" ] ],
alpha: [ function(t) {
return e.domain.tweenUICmp.alpha[t];
}, [ this.domain.tweenUICmp, "alpha" ] ],
font: this.commonFontAsset.santralExtraBold,
fontSize: this.homeUIConfig.layout.rewardFlyText.fontSize,
rgb: this.homeUIConfig.layout.rewardFlyText.color,
shadow: {
offset: [ this.homeUIConfig.layout.rewardFlyText.shadowOffsetX, this.homeUIConfig.layout.rewardFlyText.shadowOffsetY ],
rgb: this.homeUIConfig.layout.rewardFlyText.shadowColor
}
});
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_HomeUIRewardFlyTextDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FBase_CommonFontAsset"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "commonFontAsset", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "homeUIConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIRewardFlyTextRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_HomeUIRewardFlyTextRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUIRewardRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "725bfUTjUNKebf+6l2EsQbw", "G12_FHeartSystem_HomeUIRewardRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUIRewardRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Node({
name: "HomeUIReward"
}, ae.Sprite({
name: "reward",
img: this.assetsConfig.blockFlowIconHeart4TexUrl,
scale: this.homeUIConfig.layout.reward.scale,
button: {
interactable: !0,
transition: ae.ButtonTransition.None
},
event: {
buttonClick: this.clickRouter
}
}), ae.Text({
name: "addText",
text: [ function(t) {
return "+" + e.domain.homeUIRewardCmp.addHpNum[t].toString();
}, [ this.domain.homeUIRewardCmp, "addHpNum" ] ],
font: this.commonFontAsset.santralExtraBold,
fontSize: this.homeUIConfig.layout.reward.addText.fontSize,
rgb: this.homeUIConfig.layout.reward.addText.color,
shadow: {
offset: [ this.homeUIConfig.layout.reward.addText.shadowOffsetX, this.homeUIConfig.layout.reward.addText.shadowOffsetY ],
rgb: this.homeUIConfig.layout.reward.addText.shadowColor
},
x: this.homeUIConfig.layout.reward.addText.x,
y: this.homeUIConfig.layout.reward.addText.y
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p, u, s;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_HomeUIRewardDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBase_CommonFontAsset"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "commonFontAsset", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "homeUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIRewardClickRouter"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "clickRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetCmpBezierPosFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "getCmpBezierPosFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUIRewardRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_HomeUIRewardRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUITopMaskDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "89702X9exxKQ51pJ84Brmep", "G12_FHeartSystem_HomeUITopMaskDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUITopMaskDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G_FAtom_BoxComponent"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "boxComponent", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUITopMaskDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_HomeUITopMaskDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HomeUITopMaskRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1bc949g9x5KvKKAeYyX4T7p", "G12_FHeartSystem_HomeUITopMaskRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HomeUITopMaskRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this.assetsConfig.homeUISkin[this.heartConfig.homeUISkinType];
return ae.Sprite({
name: "HomeUITopMask",
img: e.topMaskTexUrl,
sizeMode: ae.SizeMode.Custom
});
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_HomeUITopMaskDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "homeUIConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HomeUITopMaskRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_HomeUITopMaskRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HpHUDAddBubleDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "47aaaH1MP1GeJ0LINVlAzem", "G12_FHeartSystem_HpHUDAddBubleDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HpHUDAddBubleDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HpHUDAddBubleDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_HpHUDAddBubleDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HpHUDAddBubleRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c37e2ZXjV1A+rCR2djMTDZY", "G12_FHeartSystem_HpHUDAddBubleRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HpHUDAddBubleRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Node({
name: "HpHUDAddBuble"
}, ae.Sprite({
name: "addBg2",
img: this.assetsConfig.blockFlowImgHeartPanel2TexUrl
}), ae.Sprite({
name: "addBg1",
img: this.assetsConfig.blockFlowImgHeartPanel1TexUrl,
width: this.hpHUDConfig.layout.addBubleBg.width,
height: this.hpHUDConfig.layout.addBubleBg.height,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
y: this.hpHUDConfig.layout.addBubleBg.y
}), ae.Sprite({
name: "add",
img: [ function() {
return e.heartManagerLogic.runtime.currentShowHeart >= e.heartConfig.maxHeart ? e.assetsConfig.blockFlowImgHeartPanel4TexUrl : e.assetsConfig.blockFlowImgHeartPanel3TexUrl;
}, [ this.heartManagerLogic, "runtime", "currentShowHeart" ], [ this.heartManagerLogic, "runtime", "surplusTime" ] ],
button: this.constCfg.Button,
event: {
buttonClick: this.addButtonClickRouter
},
x: this.hpHUDConfig.layout.addBubleButton.x,
y: this.hpHUDConfig.layout.addBubleButton.y
}), ae.Text({
name: "addTime",
text: [ function() {
return e.heartManagerLogic.runtime.surplusTime;
}, [ this.heartManagerLogic, "runtime", "surplusTime" ] ],
font: this.commonFontAsset.santralExtraBold,
fontSize: this.hpHUDConfig.layout.addBubleTime.fontSize,
rgb: this.hpHUDConfig.layout.addBubleTime.color,
x: this.hpHUDConfig.layout.addBubleTime.x,
y: this.hpHUDConfig.layout.addBubleTime.y
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p, u, s, y;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_HpHUDAddBubleDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDClickRouter"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "addButtonClickRouter", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBase_CommonFontAsset"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "commonFontAsset", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDConfig"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "hpHUDConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "heartConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HpHUDAddBubleRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_HpHUDAddBubleRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HpHUDBigHeartDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0aa9dWNwMRCsbZT+0ik8aQ8", "G12_FHeartSystem_HpHUDBigHeartDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HpHUDBigHeartDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n, c;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDCmp"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "hpHUDCmp", void 0);
i([ ae.bindAtom("G12_FBase_SpineCmp"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "spineCmp", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HpHUDBigHeartDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_HpHUDBigHeartDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HpHUDBigHeartRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9901ajPkVVPkbur7YX5Qip+", "G12_FHeartSystem_HpHUDBigHeartRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HpHUDBigHeartRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Node({
name: "HpHUDBigHeart"
}, ae.Sprite({
name: "heart",
img: this.assetsConfig.blockFlowIconHeart4TexUrl,
button: this.constCfg.Button,
event: {
buttonClick: this.openAddBubleRouter
}
}), ae.Spine({
name: "spine",
spineUrl: this.assetsConfig.gameplayStaminaJiajianSpine.url,
animation: {
name: [ function(t) {
return e.domain.spineCmp.name[t];
}, [ this.domain.spineCmp, "name" ] ],
loop: !1
}
}), ae.Text({
name: "heartText",
text: [ function() {
return e.heartManagerLogic.runtime.currentShowHeart.toString();
}, [ this.heartManagerLogic, "runtime", "currentShowHeart" ] ],
font: this.commonFontAsset.santralExtraBold,
fontSize: this.hpHUDConfig.layout.bigHeartText.fontSize,
rgb: this.hpHUDConfig.layout.bigHeartText.color,
y: this.hpHUDConfig.layout.bigHeartText.y
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p, u, s;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_HpHUDBigHeartDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBase_CommonFontAsset"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "commonFontAsset", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "hpHUDConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDOpenAddBubleRouter"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "openAddBubleRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "heartManagerLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HpHUDBigHeartRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_HpHUDBigHeartRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HpHUDClickRouterLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "38809fybftENIRhN6nfnxgV", "G12_FHeartSystem_HpHUDClickRouterLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HpHUDClickRouterLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
if (this.heartManagerLogic.storage.currentHeart >= this.heartConfig.maxHeart) {
this.popupMgrFunc().show(this.langueConfig.heartFullTip);
this.hpHUDClickRouter.dispatchAction = ae.DispatchAction.Cancel;
} else this.hpHUDClickRouter.dispatchAction = ae.DispatchAction.FireOnce;
};
var o, n, c, f, p;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G12_FHeartSystem_HpHUDClickRouter"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "hpHUDClickRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FBase_PopupMgrFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "popupMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_LangueConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "langueConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HpHUDClickRouterLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_HpHUDClickRouterLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HpHUDClickRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ea72bIPEZ9GB4Owik99EC9R", "G12_FHeartSystem_HpHUDClickRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HpHUDClickRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G12_FHeartSystem_GetUIOpenSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HpHUDClickRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_HpHUDClickRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HpHUDCmp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9b5d4KQcEdJG4u8wVMrPObE", "G12_FHeartSystem_HpHUDCmp");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HpHUDCmp = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
isCanOpenAddBuble: !0
};
};
return i([ ae.atomClass("G12_FHeartSystem_HpHUDCmp") ], t);
}(ae.EntityComponentAtom);
o.G12_FHeartSystem_HpHUDCmp = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HpHUDConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c6f40QYkPxL0o/HeQHSyWXV", "G12_FHeartSystem_HpHUDConfig");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HpHUDConfig = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
openAddBubleTweenTag: "openAddBubleTween",
layout: {
offsetXFromRight: 188,
gameLevelText: {
labelKeyword: "Level",
compactLabelKeyword: "Lv.",
quitBtnOffsetX: -52,
quitBtnOffsetW: -42,
defaultOffsetW: 0,
defaultOffsetX: 0,
bgWidth: 212,
bgX: -365,
levelTextLeftOffset: 8,
levelTextRightOffset: 8
},
bigHeartText: {
y: 5,
fontSize: 40,
color: 16777215
},
addBubleBg: {
width: 165,
height: 45,
y: -26
},
addBubleButton: {
x: 57,
y: -26
},
addBubleTime: {
x: -14,
y: -26,
fontSize: 32,
color: 9192504
},
addBubleY: -29
},
tween: {
addBubleHiddenScale: 0,
addBubleVisibleScale: 1,
addBubleBounceScale: 1.1,
autoDestroyDelay: 3,
openAddBubleAnimDuration: [ .167, .033 ],
closeAddBubleAnimDuration: [ .033, .164 ]
}
};
};
return i([ ae.atomClass("G12_FHeartSystem_HpHUDConfig") ], t);
}(ae.ConfigAtom);
o.G12_FHeartSystem_HpHUDConfig = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HpHUDOpenAddBubleRouterLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "53b38Drm/NJAKRrZ8YxiU7K", "G12_FHeartSystem_HpHUDOpenAddBubleRouterLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HpHUDOpenAddBubleRouterLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function(e) {
var t = this.hpHUDBigHeartDomain.hpHUDCmp.isCanOpenAddBuble[e];
this.hpHUDOpenAddBubleRouter.filterAction[e] = t ? ae.FilterAction.FireOnce : ae.FilterAction.Cancel;
};
var o, n;
i([ ae.routeFilter, ae.onChain, ae.bindAtom("G12_FHeartSystem_HpHUDOpenAddBubleRouter"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "hpHUDOpenAddBubleRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDBigHeartDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "hpHUDBigHeartDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HpHUDOpenAddBubleRouterLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_HpHUDOpenAddBubleRouterLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HpHUDOpenAddBubleRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "58490X6StBD9IgWNrPjIgyQ", "G12_FHeartSystem_HpHUDOpenAddBubleRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HpHUDOpenAddBubleRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_HpHUDOpenAddBubleSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HpHUDOpenAddBubleRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_HpHUDOpenAddBubleRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_HpHUDOpenAddBubleSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1861aUwdxRKUJt5L/Yejjjg", "G12_FHeartSystem_HpHUDOpenAddBubleSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_HpHUDOpenAddBubleSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_HpHUDBigHeartDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "hpHUDBigHeartDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_HpHUDOpenAddBubleSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_HpHUDOpenAddBubleSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_IsHeartSystemActiveFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "97883PBZLtLS6J0mUhLvbYw", "G12_FHeartSystem_IsHeartSystemActiveFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_IsHeartSystemActiveFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return e.heartConfig.maxHeart > 0;
};
};
var o;
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_IsHeartSystemActiveFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_IsHeartSystemActiveFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_IsOpenHomeUIFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f743eBeBFxNr5SFMmWxzipo", "G12_FHeartSystem_IsOpenHomeUIFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_IsOpenHomeUIFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return e.heartConfig.outerMapEnabled && e.getLevelFunc() <= e.getFifficultyMaxLevelFunc();
};
};
var o, n, c;
i([ ae.bindAtom("G12_FBase_GetLevelFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "getLevelFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetDifficultyMaxLevelFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getFifficultyMaxLevelFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_IsOpenHomeUIFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_IsOpenHomeUIFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_IsUIOpenFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b20f4ioiiBCH5cnUsPb2Fq2", "G12_FHeartSystem_IsUIOpenFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_IsUIOpenFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = this.uiCfgMapFunc().uiCfgMap;
return function(o) {
if (!t[o]) return !1;
var n = t[o];
return e.uiMgrFunc().isOpen(n);
};
};
var o, n;
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UICfgMapFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiCfgMapFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_IsUIOpenFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_IsUIOpenFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_JsonData2HomeLevelConfigLoadedRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0fe4dtDWuFBp6AeXcLFwaj1", "G12_FHeartSystem_JsonData2HomeLevelConfigLoadedRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_JsonData2HomeLevelConfigLoadedRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_JsonData"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_HomeLevelConfigLoadedSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_JsonData2HomeLevelConfigLoadedRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_JsonData2HomeLevelConfigLoadedRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_LangueConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "47b5fq3pq9OQYQfb4CPcVly", "G12_FHeartSystem_LangueConfig");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_LangueConfig = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
adRefillLimitTip: "Sold Out!",
emptyUITitle: "Out of hearts！",
emptyUICountDownLabel: "Next free heart in",
emptyUIGetBtnText: "+1 Heart",
emptyUIRemainText: "({current}/{limit} remaining today)",
emptyUIWaitBackText: "Wait and back",
getUITitle: "Get more hearts?",
getUICountDownLabel: "Next free heart in",
getUIGetBtnText: "+1 Heart",
getUIRemainText: "({current}/{limit} remaining today)",
getUIWaitBackText: "Wait and back",
homeUIPlayText: "Play",
giveUpUITitle: "Give Up",
giveUpUIDescLabel: "You will lose 1 heart!",
giveUpUIGiveUpBtnText: "Give Up",
giveUpUIRetryTitle: "Retry",
giveUpUIRetryBtnText: "Retry",
failUITips: "You lost 1 heart!",
quitUITitle: "Quit?",
quitUIConfirmBtnText: "Quit",
quitUITipsText: "Are you sure you want \n to quit?",
quitUIResetTipsText: "<b>This level will <color=#FFC426>reset</color></b>",
heartFullTip: "Hearts are full!",
maxTip: "Max"
};
};
return i([ ae.atomClass("G12_FHeartSystem_LangueConfig") ], t);
}(ae.ConfigAtom);
o.G12_FHeartSystem_LangueConfig = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_LoadHomeLevelConfigWindowFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "44437dotINKMrSPcJsVPI3T", "G12_FHeartSystem_LoadHomeLevelConfigWindowFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_LoadHomeLevelConfigWindowFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.homeLevelConfigCacheLogic.runtime, n = o.windowSize, r = Math.max(1, t), i = o.lastAvailableLevel > 0 ? Math.min(o.lastAvailableLevel, r + n - 1) : r + n - 1;
o.windowStartLevel = r;
o.windowSize = n;
for (var a in o.levelConfig) if ((c = Number(a)) < r || c > i) {
delete o.levelConfig[c];
delete o.loadingLevelMap[c];
}
for (var c = r; c <= i; c++) if (!o.levelConfig[c] && !o.loadingLevelMap[c]) if (e.isLevelCfgExistFunc(c)) o.levelConfig[c] = e.getLevelCfgFunc(c); else {
o.loadingLevelMap[c] = !0;
var f = e.levelConfig.getJsonUrl(c);
o.loadingUrlLevelMap[String(f)] = c;
e.readJsonAsset(f, e.jsonData2HomeLevelConfigLoadedRouter);
}
};
};
var o, n, c, f, p, u;
i([ ae.bindAtom("G12_FHeartSystem_HomeLevelConfigCacheLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "homeLevelConfigCacheLogic", void 0);
i([ ae.bindAtom("G12_FBase_LevelConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelConfig", void 0);
i([ ae.bindAtom("G_FAtom_ReadJsonAsset"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "readJsonAsset", void 0);
i([ ae.bindAtom("G12_FHeartSystem_JsonData2HomeLevelConfigLoadedRouter"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "jsonData2HomeLevelConfigLoadedRouter", void 0);
i([ ae.bindAtom("G12_FBase_IsLevelCfgExistFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "isLevelCfgExistFunc", void 0);
i([ ae.bindAtom("G12_FBase_GetLevelCfgFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getLevelCfgFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_LoadHomeLevelConfigWindowFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_LoadHomeLevelConfigWindowFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bebb6Fy97xHwKQkisFKMfQB", "G12_FHeartSystem_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "Block Flow四期体力系统";
(function(e) {
e.Name = "G12";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FHeartSystem"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 38] = "Version";
e.CreateTime = "2026-06-02 15:40:01";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G12_FHeartSystem || (o.G12_FHeartSystem = {}));
cc._RF.pop();
}, {} ],
G12_FHeartSystem_OpenGiveUpPageFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "33879nqKZhPU5PSZuDh+K+H", "G12_FHeartSystem_OpenGiveUpPageFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_OpenGiveUpPageFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
void 0 === t && (t = !1);
e.heartManagerLogic.runtime.giveUpUIIsRetry = t;
e.uiMgrFunc().open(e.uiConfig.giveUpUI);
};
};
var o, n, c;
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartManagerLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_OpenGiveUpPageFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_OpenGiveUpPageFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_OpenHpHUDAddBubleLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "130c9Bc70tAw5Nhf4q7pw9M", "G12_FHeartSystem_OpenHpHUDAddBubleLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_OpenHpHUDAddBubleLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function(e) {
var t = this, o = this.hpHUDAddBubleDomain.collect(), n = this.hpHUDConfig.openAddBubleTweenTag;
if (o.length > 0) o.concat().forEach(function(e) {
t.tweenStop(e, n);
t.hpHUDAddBubleDomain.transform.scaleX.set(e, t.hpHUDConfig.tween.addBubleVisibleScale);
t.hpHUDAddBubleDomain.transform.scaleY.set(e, t.hpHUDConfig.tween.addBubleVisibleScale);
t.tween(e, [ [ ae.TweenStepType.To, t.hpHUDAddBubleDomain.transform, {
scaleX: t.hpHUDConfig.tween.addBubleBounceScale,
scaleY: t.hpHUDConfig.tween.addBubleBounceScale
}, t.hpHUDConfig.tween.closeAddBubleAnimDuration[0], ae.TweenEasing.QuadOut ], [ ae.TweenStepType.To, t.hpHUDAddBubleDomain.transform, {
scaleX: t.hpHUDConfig.tween.addBubleHiddenScale,
scaleY: t.hpHUDConfig.tween.addBubleHiddenScale
}, t.hpHUDConfig.tween.closeAddBubleAnimDuration[1], ae.TweenEasing.QuadOut ], [ ae.TweenStepType.Destroy, e ] ], n);
}); else {
var r = this.hpHUDAddBubleDomain.create();
this.childOf.addChild(e, r);
this.hpHUDAddBubleDomain.transform.y.set(r, this.hpHUDConfig.layout.addBubleY);
this.hpHUDAddBubleDomain.transform.scaleX.set(r, this.hpHUDConfig.tween.addBubleHiddenScale);
this.hpHUDAddBubleDomain.transform.scaleY.set(r, this.hpHUDConfig.tween.addBubleHiddenScale);
this.tween(r, [ [ ae.TweenStepType.To, this.hpHUDAddBubleDomain.transform, {
scaleX: this.hpHUDConfig.tween.addBubleBounceScale,
scaleY: this.hpHUDConfig.tween.addBubleBounceScale
}, this.hpHUDConfig.tween.openAddBubleAnimDuration[0], ae.TweenEasing.QuadOut ], [ ae.TweenStepType.To, this.hpHUDAddBubleDomain.transform, {
scaleX: this.hpHUDConfig.tween.addBubleVisibleScale,
scaleY: this.hpHUDConfig.tween.addBubleVisibleScale
}, this.hpHUDConfig.tween.openAddBubleAnimDuration[1], ae.TweenEasing.QuadOut ], [ ae.TweenStepType.Delay, this.hpHUDConfig.tween.autoDestroyDelay ], [ ae.TweenStepType.To, this.hpHUDAddBubleDomain.transform, {
scaleX: this.hpHUDConfig.tween.addBubleBounceScale,
scaleY: this.hpHUDConfig.tween.addBubleBounceScale
}, this.hpHUDConfig.tween.closeAddBubleAnimDuration[0], ae.TweenEasing.QuadOut ], [ ae.TweenStepType.To, this.hpHUDAddBubleDomain.transform, {
scaleX: this.hpHUDConfig.tween.addBubleHiddenScale,
scaleY: this.hpHUDConfig.tween.addBubleHiddenScale
}, this.hpHUDConfig.tween.closeAddBubleAnimDuration[1], ae.TweenEasing.QuadOut ], [ ae.TweenStepType.Destroy, r ] ], n);
}
};
var o, n, c, f, p, u;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_HpHUDOpenAddBubleSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDAddBubleDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "hpHUDAddBubleDomain", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "hpHUDConfig", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_StopTween"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "tweenStop", void 0);
return i([ ae.atomClass("G12_FHeartSystem_OpenHpHUDAddBubleLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_OpenHpHUDAddBubleLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_OpenNotEnoughHeartPageFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "629f1JmnVdKP6FU6xqOdJee", "G12_FHeartSystem_OpenNotEnoughHeartPageFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_OpenNotEnoughHeartPageFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
e.resetDailyAdRefillFunc();
var t = e.uiMgrFunc().open(e.uiConfig.emptyUI);
e.createUIHeartListFunc(t, e.emptyUIConfig.heartContainer);
};
};
var o, n, c, f, p;
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_EmptyUIConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "emptyUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CreateUIHeartListFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "createUIHeartListFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ResetDailyAdRefillFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "resetDailyAdRefillFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_OpenNotEnoughHeartPageFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_OpenNotEnoughHeartPageFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_OpenOuterMapFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "17d793FfgJEJ7fmxb9X0EKH", "G12_FHeartSystem_OpenOuterMapFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_OpenOuterMapFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
if (!e.uiMgrFunc().isOpen(e.uiConfig.homeUI)) {
var t = e.getLevelFunc(), o = e.heartManagerLogic.runtime.pendingVictoryReturnHomeAnim;
e.heartManagerLogic.runtime.pendingVictoryReturnHomeAnim = !1;
var n = o ? t - 1 : t, r = e.createHomeUIFunc(n, o);
o && e.playVictoryReturnHomeAnimFunc(r.homeUIEid, r.listContainerEid, r.hpHUDEid, r.homeUIItemListEids, n);
e.heartConfig.isOpenQuitBtn && e.quitFunc().createBtn(r.homeUIEid, 50);
}
};
};
var o, n, c, f, p, u, s, y;
i([ ae.bindAtom("G12_FHeartSystem_CreateHomeUIFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "createHomeUIFunc", void 0);
i([ ae.bindAtom("G12_FBase_GetLevelFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getLevelFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_PlayVictoryReturnHomeAnimFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "playVictoryReturnHomeAnimFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_QuitUIFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "quitFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "uiConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_OpenOuterMapFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_OpenOuterMapFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_OpenQuitUISignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "45745V/HdFK+IZWv076yqRU", "G12_FHeartSystem_OpenQuitUISignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_OpenQuitUISignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_QuitBtnDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "quitUIFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_OpenQuitUISignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_OpenQuitUISignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_OpenUIFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e378axKKx1AS4YynUKhU6Fs", "G12_FHeartSystem_OpenUIFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_OpenUIFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = this.uiCfgMapFunc().uiCfgMap;
return function(o) {
if (!t[o]) return null;
var n = t[o], r = e.uiMgrFunc().open(n);
e.updateGameStatesFunc();
return r;
};
};
var o, n, c;
i([ ae.bindAtom("G12_FHeartSystem_UICfgMapFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiCfgMapFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UpdateGameStatesFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "updateGameStatesFunc", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiMgrFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_OpenUIFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_OpenUIFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_PageShowRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c6bccob8PBC+KFKPzaPd3OL", "G12_FHeartSystem_PageShowRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_PageShowRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_PageShow"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_PageShowSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "runSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_PageShowRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_PageShowRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_PageShowSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d7fecGLKEVEwa9y2C3pj7St", "G12_FHeartSystem_PageShowSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_PageShowSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_PageShowSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_PageShowSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_PlayCollectSfxFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "efa6bFEsmxDF6cAC/owFl00", "G12_FHeartSystem_PlayCollectSfxFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_PlayCollectSfxFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
e.audioMgrFunc().playEffect(e.assetConfig.collectSfx, !1);
};
};
var o, n;
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "assetConfig", void 0);
i([ ae.bindAtom("G12_FBase_AudioMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "audioMgrFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_PlayCollectSfxFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_PlayCollectSfxFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_PlayHomeUIListSlideAnimFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5b33cR/T0VLPpCqhDE7LJ9x", "G12_FHeartSystem_PlayHomeUIListSlideAnimFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__read || function(e, t) {
var o = "function" == typeof Symbol && e[Symbol.iterator];
if (!o) return e;
var n, r, i = o.call(e), a = [];
try {
for (;(void 0 === t || t-- > 0) && !(n = i.next()).done; ) a.push(n.value);
} catch (e) {
r = {
error: e
};
} finally {
try {
n && !n.done && (o = i.return) && o.call(i);
} finally {
if (r) throw r.error;
}
}
return a;
}, f = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
return e;
}, p = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, o = t && e[t], n = 0;
if (o) return o.call(e);
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
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_PlayHomeUIListSlideAnimFunc = void 0;
var u = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n, r, i) {
var a, c;
void 0 === i && (i = 0);
var u = f(o).sort(function(t, o) {
return e.homeUIListItemDomain.transform.y[t] - e.homeUIListItemDomain.transform.y[o];
}), s = e.homeUIConfig.layout.listItemSpaceY, y = u.length > 0 ? e.homeUIListItemDomain.transform.y[u[u.length - 1]] : e.homeUIConfig.tween.listSlide.fallbackTopY, d = r + 1, l = r + u.length, _ = u.find(function(t) {
return e.homeUIListItemDomain.listItemCmp.level[t] === d;
}), m = e.homeUIConfig.tween.currentItemBgScale;
u.forEach(function(t) {
t !== n && e.tween(t, [ [ ae.TweenStepType.Delay, i ], [ ae.TweenStepType.To, e.homeUIListItemDomain.transform, {
y: e.homeUIListItemDomain.transform.y[t] - s
}, e.homeUIConfig.tween.listSlide.duration ] ]);
});
e.homeUIListItemDomain.listItemCmp.isCanPlay.set(n, !1);
e.homeUIListItemDomain.listItemCmp.guangqiaAlpha.set(n, e.homeUIConfig.tween.listSlide.hiddenAlpha);
e.stopTween(n, "HomeUICurrentItemBgScale");
e.homeUIListItemDomain.listItemCmp.bgScale.set(n, m.normalScale);
if (_) {
e.homeUIListItemDomain.listItemCmp.isCanPlay.set(_, !0);
e.homeUIListItemDomain.listItemCmp.guangqiaAlpha.set(_, e.homeUIConfig.tween.listSlide.hiddenAlpha);
e.stopTween(_, "HomeUICurrentItemBgScale");
e.homeUIListItemDomain.listItemCmp.bgScale.set(_, m.normalScale);
e.tween(_, [ [ ae.TweenStepType.Delay, i ], [ ae.TweenStepType.To, e.homeUIListItemDomain.listItemCmp, {
prgAlpha: e.homeUIConfig.tween.listSlide.hiddenAlpha,
prgScale: e.homeUIConfig.tween.listSlide.hiddenScale
}, e.homeUIConfig.tween.listSlide.duration / 2 ] ]);
e.tween(_, [ [ ae.TweenStepType.Delay, i ], [ ae.TweenStepType.Repeat, 0, [ [ ae.TweenStepType.To, e.homeUIListItemDomain.listItemCmp, {
bgScale: m.activeScale
}, m.duration, ae.TweenEasing.SineInOut ], [ ae.TweenStepType.To, e.homeUIListItemDomain.listItemCmp, {
bgScale: m.normalScale
}, m.duration, ae.TweenEasing.SineInOut ] ] ] ], "HomeUICurrentItemBgScale");
var h = e.homeUIListItemAndRewardRelation.getTargets(_)[0];
h && e.homeUIRewardDomain.has(h) && e.tween(h, [ [ ae.TweenStepType.Delay, i ], [ ae.TweenStepType.To, e.homeUIRewardDomain.transform, {
x: e.homeUIConfig.layout.listItemActiveRewardX
}, e.homeUIConfig.tween.listSlide.duration ] ]);
e.tween(_, [ [ ae.TweenStepType.Delay, i + e.homeUIConfig.tween.listSlide.duration ], [ ae.TweenStepType.To, e.homeUIListItemDomain.listItemCmp, {
guangqiaAlpha: e.homeUIConfig.tween.listSlide.visibleAlpha
}, 0 ] ]);
}
var g = e.getHomeLevelConfigFunc(l), F = null;
if (g) {
F = e.createHomeUIItemFunc(l, !1, y + s, s);
e.childOf.addChild(t, F);
e.homeUIListItemDomain.listItemCmp.prgAlpha.set(F, e.homeUIConfig.tween.listSlide.visibleAlpha);
e.homeUIListItemDomain.listItemCmp.isCanPlay.set(F, !1);
e.homeUIListItemDomain.listItemCmp.guangqiaAlpha.set(F, e.homeUIConfig.tween.listSlide.hiddenAlpha);
e.stopTween(F, "HomeUICurrentItemBgScale");
e.homeUIListItemDomain.listItemCmp.bgScale.set(F, m.normalScale);
var b = e.homeUIListItemAndRewardRelation.getTargets(F)[0];
b && e.homeUIRewardDomain.has(b) && e.homeUIRewardDomain.transform.x.set(b, e.homeUIConfig.layout.listItemRewardX);
}
var v = u.filter(function(e) {
return e !== n;
});
F && v.push(F);
var H = v.sort(function(t, o) {
var n = F && t === F ? y : e.homeUIListItemDomain.transform.y[t] - s;
return (F && o === F ? y : e.homeUIListItemDomain.transform.y[o] - s) - n;
});
H.push(n);
try {
for (var S = p(H), O = S.next(); !O.done; O = S.next()) {
var R = O.value;
e.childOf.addChild(t, R);
}
} catch (e) {
a = {
error: e
};
} finally {
try {
O && !O.done && (c = S.return) && c.call(S);
} finally {
if (a) throw a.error;
}
}
F && e.tween(F, [ [ ae.TweenStepType.Delay, i ], [ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.To, e.homeUIListItemDomain.transform, {
y: y
}, e.homeUIConfig.tween.listSlide.duration ], [ ae.TweenStepType.To, e.homeUIListItemDomain.listItemCmp, {
alpha: e.homeUIConfig.tween.listSlide.visibleAlpha
}, e.homeUIConfig.tween.listSlide.duration ] ] ] ]);
};
};
var o, n, c, u, s, y, d, l, _;
i([ ae.bindAtom("G12_FHeartSystem_CreateHomeUIItemFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "createHomeUIItemFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetHomeLevelConfigFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getHomeLevelConfigFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIListItemDomain"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "homeUIListItemDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIRewardDomain"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "homeUIRewardDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIListItemAndRewardRelation"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "homeUIListItemAndRewardRelation", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIConfig"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "homeUIConfig", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_StopTween"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "stopTween", void 0);
return i([ ae.atomClass("G12_FHeartSystem_PlayHomeUIListSlideAnimFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_PlayHomeUIListSlideAnimFunc = u;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_PlayVictoryReturnHomeAnimFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4c8a9yuZDxM+4nURHm+lfFD", "G12_FHeartSystem_PlayVictoryReturnHomeAnimFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_PlayVictoryReturnHomeAnimFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n, r, i) {
var a = r.find(function(t) {
return e.homeUIListItemDomain.listItemCmp.level[t] === i;
});
if (a) {
var c = e.homeUIConfig.tween.victoryReturn.rewardFlyDuration, f = e.homeUIConfig.tween.victoryReturn.rewardHeartStartDelay, p = e.homeUIListItemAndRewardRelation.getTargets(a)[0], u = Boolean(p) && e.homeUIRewardDomain.has(p) && e.hpHUDBigHeartDomain.has(n) && e.homeUIRewardDomain.homeUIRewardCmp.addHpNum[p] > 0, s = (u ? f + c : 0) + 0;
e.playHomeUIListSlideAnimFunc(o, r, a, i, s);
e.tween(a, [ [ ae.TweenStepType.Delay, s ], [ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.To, e.homeUIListItemDomain.transform, {
scaleX: e.homeUIConfig.tween.listSlide.hiddenScale,
scaleY: e.homeUIConfig.tween.listSlide.hiddenScale
}, e.homeUIConfig.tween.listSlide.duration ], [ ae.TweenStepType.To, e.homeUIListItemDomain.listItemCmp, {
alpha: e.homeUIConfig.tween.listSlide.hiddenAlpha
}, e.homeUIConfig.tween.listSlide.duration ] ] ] ]);
if (u && p) {
var y = e.homeUIRewardDomain.homeUIRewardCmp.addHpNum[p], d = e.convertToNode(t, n, {
x: 0,
y: 0,
z: 0
}), l = e.convertToNode(t, p, {
x: 0,
y: 0,
z: 0
}), _ = l.x, m = l.y, h = d.x, g = d.y, F = d.y + e.homeUIConfig.layout.rewardFlyText.offsetY, b = e.getLineRatioPosFunc(_, m, h, g, e.homeUIConfig.tween.victoryReturn.rewardControlRatioX, e.homeUIConfig.tween.victoryReturn.rewardControlRatioY);
e.homeUIListItemAndRewardRelation.remove(a, p);
var v = e.homeUIInputBlockerDomain.create();
e.childOf.addChild(t, v);
var H = e.homeUIRewardFlyTextDomain.create();
e.childOf.addChild(t, H);
e.homeUIRewardFlyTextDomain.transform.x.set(H, d.x + e.homeUIConfig.layout.rewardFlyText.offsetX);
e.homeUIRewardFlyTextDomain.transform.y.set(H, F);
e.homeUIRewardFlyTextDomain.tweenUICmp.text.set(H, "+" + y.toString());
e.homeUIRewardFlyTextDomain.tweenUICmp.alpha.set(H, e.homeUIConfig.tween.listSlide.hiddenAlpha);
for (var S = 0; S < y; S++) {
var O = e.homeUIBigHeartDomain.create();
e.childOf.addChild(t, O);
e.homeUIBigHeartDomain.bezierCmp.elapsedTime.set(O, 0);
e.homeUIBigHeartDomain.bezierCmp.duration.set(O, c);
e.homeUIBigHeartDomain.bezierCmp.startX.set(O, _);
e.homeUIBigHeartDomain.bezierCmp.startY.set(O, m);
e.homeUIBigHeartDomain.bezierCmp.endX.set(O, h);
e.homeUIBigHeartDomain.bezierCmp.endY.set(O, g);
e.homeUIBigHeartDomain.bezierCmp.controlX.set(O, b[0]);
e.homeUIBigHeartDomain.bezierCmp.controlY.set(O, b[1] + e.homeUIConfig.tween.victoryReturn.rewardControlOffsetY);
e.homeUIBigHeartDomain.tweenUICmp.scale.set(O, e.homeUIConfig.tween.victoryReturn.rewardHeartScale);
e.tween(O, [ [ ae.TweenStepType.Delay, f + 0 ], [ ae.TweenStepType.Delay, S * e.homeUIConfig.tween.victoryReturn.rewardHeartInterval ], [ ae.TweenStepType.To, e.homeUIBigHeartDomain.bezierCmp, {
elapsedTime: c
}, c ], [ ae.TweenStepType.Router, e.homeUIFlyHeartSfxRouter, O ], [ ae.TweenStepType.To, e.homeUIBigHeartDomain.tweenUICmp, {
scale: e.homeUIConfig.tween.victoryReturn.rewardHeartHiddenScale
}, e.homeUIConfig.tween.victoryReturn.rewardHeartHideDuration ], [ ae.TweenStepType.Destroy, O ] ]);
}
e.childOf.addChild(t, p);
e.homeUIRewardDomain.transform.x.set(p, l.x);
e.homeUIRewardDomain.transform.y.set(p, l.y);
e.tween(v, [ [ ae.TweenStepType.Delay, 0 + f + (y - 1) * e.homeUIConfig.tween.victoryReturn.rewardHeartInterval + c + e.homeUIConfig.tween.victoryReturn.rewardHeartHideDuration ], [ ae.TweenStepType.Router, e.tweenSyncHeartViewRouter ], [ ae.TweenStepType.Destroy, v ] ]);
e.tween(p, [ [ ae.TweenStepType.Delay, f ], [ ae.TweenStepType.Destroy, p ] ]);
e.tween(H, [ [ ae.TweenStepType.Delay, f + c ], [ ae.TweenStepType.To, e.homeUIRewardFlyTextDomain.transform, {
y: F + e.homeUIConfig.tween.victoryReturn.rewardFlyTextMoveY
}, e.homeUIConfig.tween.victoryReturn.rewardFlyTextFadeInDuration + e.homeUIConfig.tween.victoryReturn.rewardFlyTextVisibleDuration + e.homeUIConfig.tween.victoryReturn.rewardFlyTextFadeOutDuration, ae.TweenEasing.QuadOut ] ]);
e.tween(H, [ [ ae.TweenStepType.Delay, f + c ], [ ae.TweenStepType.To, e.homeUIRewardFlyTextDomain.tweenUICmp, {
alpha: e.homeUIConfig.tween.listSlide.visibleAlpha
}, e.homeUIConfig.tween.victoryReturn.rewardFlyTextFadeInDuration ], [ ae.TweenStepType.Delay, e.homeUIConfig.tween.victoryReturn.rewardFlyTextVisibleDuration ], [ ae.TweenStepType.To, e.homeUIRewardFlyTextDomain.tweenUICmp, {
alpha: e.homeUIConfig.tween.listSlide.hiddenAlpha
}, e.homeUIConfig.tween.victoryReturn.rewardFlyTextFadeOutDuration ], [ ae.TweenStepType.Destroy, H ] ]);
}
}
};
};
var o, n, c, f, p, u, s, y, d, l, _, m, h, g, F;
i([ ae.bindAtom("G12_FHeartSystem_HomeUIListItemDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "homeUIListItemDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIRewardDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "homeUIRewardDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDBigHeartDomain"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "hpHUDBigHeartDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIBigHeartDomain"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "homeUIBigHeartDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIRewardFlyTextDomain"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "homeUIRewardFlyTextDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIInputBlockerDomain"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "homeUIInputBlockerDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIListItemAndRewardRelation"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "homeUIListItemAndRewardRelation", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIConfig"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "homeUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetLineRatioPosFunc"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "getLineRatioPosFunc", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_ConvertToNode"), a("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "convertToNode", void 0);
i([ ae.bindAtom("G12_FHeartSystem_PlayHomeUIListSlideAnimFunc"), a("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "playHomeUIListSlideAnimFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_TweenSyncHeartViewRouter"), a("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "tweenSyncHeartViewRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIFlyHeartSfxRouter"), a("design:type", "function" == typeof (F = "undefined" != typeof ae && ae.AtomTypeInfer) ? F : Object) ], t.prototype, "homeUIFlyHeartSfxRouter", void 0);
return i([ ae.atomClass("G12_FHeartSystem_PlayVictoryReturnHomeAnimFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_PlayVictoryReturnHomeAnimFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ProcessFailOrAbandonFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ef969WzA1BFF72+yZeyr/02", "G12_FHeartSystem_ProcessFailOrAbandonFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ProcessFailOrAbandonFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
e.costHeartFunc(e.getFailCostHeartFunc());
};
};
var o, n;
i([ ae.bindAtom("G12_FHeartSystem_CostHeartFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "costHeartFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetFailCostHeartFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getFailCostHeartFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ProcessFailOrAbandonFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_ProcessFailOrAbandonFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ProcessVictoryFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0be07x6+DhLZY19E/YQAgaQ", "G12_FHeartSystem_ProcessVictoryFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ProcessVictoryFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t, o = e.heartManagerLogic.storage.lastEnterLevel;
e.heartManagerLogic.runtime.pendingVictoryReturnHomeAnim = !0;
if (e.heartConfig.victoryPlusHeartByLevel) {
var n = e.getLevelCfgFunc(o), r = n && null !== (t = n.addHp) && void 0 !== t ? t : 0;
r > 0 && e.addHeartFunc(r);
} else e.addHeartFunc(e.heartConfig.victoryPlusHeart);
e.loadHomeLevelConfigWindowFunc(o + 1);
};
};
var o, n, c, f, p;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AddHeartFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "addHeartFunc", void 0);
i([ ae.bindAtom("G12_FBase_GetLevelCfgFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getLevelCfgFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_LoadHomeLevelConfigWindowFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "loadHomeLevelConfigWindowFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ProcessVictoryFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_ProcessVictoryFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_QuitBtnClickRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6d3c9/PgFlDYZ0qJprDoF2n", "G12_FHeartSystem_QuitBtnClickRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_QuitBtnClickRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_OpenQuitUISignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_QuitBtnClickRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_QuitBtnClickRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_QuitBtnDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "51ce9qlS0tGxbzSiqPRgz+2", "G12_FHeartSystem_QuitBtnDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_QuitBtnDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
return i([ ae.atomClass("G12_FHeartSystem_QuitBtnDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_QuitBtnDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_QuitBtnLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4bcfbEjTDtCdqJCi6C4Yac8", "G12_FHeartSystem_QuitBtnLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_QuitBtnLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
if (this.uiMgrFunc().isOpen(this.uiConfig.homeUI)) this.return2BlockFunc(); else {
this.commonButtonClickEffectFunc();
this.quitUIFunc().openUI();
}
};
var o, n, c, f, p, u;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_OpenQuitUISignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "openQuitUISignal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_QuitUIFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "quitUIFunc", void 0);
i([ ae.bindAtom("G12_FBase_Return2BlockFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "return2BlockFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "commonButtonClickEffectFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_QuitBtnLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_QuitBtnLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_QuitBtnRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "908a4GQs5hAzb3pCfPmAhdy", "G12_FHeartSystem_QuitBtnRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_QuitBtnRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this.assetsConfig.homeUISkin[this.heartConfig.homeUISkinType];
return ae.Node({
name: "QuitBtn",
button: this.constCfg.Button,
width: 100,
height: 100,
event: {
buttonClick: this.quitBtnClickRouter
}
}, ae.Sprite({
name: "QuitBtnImg",
img: e.quitBtnTexUrl
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_QuitBtnDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FHeartSystem_QuitBtnClickRouter"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "quitBtnClickRouter", void 0);
return i([ ae.atomClass("G12_FHeartSystem_QuitBtnRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_QuitBtnRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_QuitConfirmSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6e7633lDGhM6bFAVfwd066q", "G12_FHeartSystem_QuitConfirmSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_QuitConfirmSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_QuitUIDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "quitUIDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_QuitConfirmSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_QuitConfirmSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_QuitUICloseBtnClickRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "29cf4OfDVJEjIVExPhID5SW", "G12_FHeartSystem_QuitUICloseBtnClickRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_QuitUICloseBtnClickRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_CloseQuitUISignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_QuitUICloseBtnClickRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_QuitUICloseBtnClickRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_QuitUICloseLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bdcaaQvvh5CfKO9CgGgWkBc", "G12_FHeartSystem_QuitUICloseLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_QuitUICloseLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.commonButtonClickEffectFunc();
this.quitFunc().closeUI();
};
var o, n, c;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_CloseQuitUISignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_QuitUIFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "quitFunc", void 0);
i([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "commonButtonClickEffectFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_QuitUICloseLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_QuitUICloseLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_QuitUIConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "dd47a/jdUpFEKJ14esGB1I2", "G12_FHeartSystem_QuitUIConfig");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_QuitUIConfig = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
quitBtnOffsetX: 30,
mask: {
color: 0,
alpha: .6
},
bg: {
x: 0,
y: -9,
width: 808,
height: 900
},
closeBtn: {
x: 343,
y: 388,
width: 100,
height: 100
},
innerBg: {
x: 0,
y: 95,
width: 722,
height: 396
},
warning: {
x: -5,
y: 165
},
confirmBtn: {
x: -2,
y: -328,
width: 564,
height: 140
},
confirmBtnText: {
x: -5,
y: 6,
fontSize: 74,
color: 16777215
},
titleText: {
x: -5,
y: 375,
fontSize: 54,
color: 16777215
},
tipsText: {
x: 2,
y: 12,
fontSize: 54,
color: 16777215
},
resetTipsText: {
x: -8,
y: -182,
fontSize: 54,
color: 16777215
},
gameLevelTextOffsetX: 100
};
};
return i([ ae.atomClass("G12_FHeartSystem_QuitUIConfig") ], t);
}(ae.ConfigAtom);
o.G12_FHeartSystem_QuitUIConfig = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_QuitUIConfirmBtnClickRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5335axXgEhLrokBGAYllo/h", "G12_FHeartSystem_QuitUIConfirmBtnClickRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_QuitUIConfirmBtnClickRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_QuitConfirmSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_QuitUIConfirmBtnClickRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_QuitUIConfirmBtnClickRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_QuitUIConfirmLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "562f4qVW01PHJHkFEELDx2C", "G12_FHeartSystem_QuitUIConfirmLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_QuitUIConfirmLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
if (this.quitFunc().getUI()) {
this.commonButtonClickEffectFunc();
this.quitFunc().closeUI();
this.handleConfirmedLevelExitFunc();
}
};
var o, n, c, f;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_QuitConfirmSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_QuitUIFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "quitFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HandleConfirmedLevelExitFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "handleConfirmedLevelExitFunc", void 0);
i([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "commonButtonClickEffectFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_QuitUIConfirmLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_QuitUIConfirmLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_QuitUIDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1db48o1Kt5PaacotA2or6Kq", "G12_FHeartSystem_QuitUIDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_QuitUIDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
return i([ ae.atomClass("G12_FHeartSystem_QuitUIDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_QuitUIDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_QuitUIFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "165a5vFMv5Bw5zyAO/zjBPw", "G12_FHeartSystem_QuitUIFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_QuitUIFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return {
openUI: function() {
return e.uiMgrFunc().open(e.uiConfig.quitUI);
},
closeUI: function() {
e.uiMgrFunc().close(e.uiConfig.quitUI);
},
getUI: function() {
return e.uiMgrFunc().get(e.uiConfig.quitUI);
},
createBtn: function(t, o) {
var n = e.quitBtnDomain.create();
e.childOf.addChild(t, n);
e.quitBtnDomain.transform.x.set(n, -(e.constCfg.TrackWidth >> 1) + o);
e.quitBtnDomain.transform.y.set(n, e.getTopbarYFunc());
return n;
},
destroyBtn: function() {
e.quitBtnDomain.collect().concat().forEach(function(t) {
e.quitBtnDomain.destroy(t);
});
}
};
};
};
var o, n, c, f, p, u;
i([ ae.bindAtom("G12_FHeartSystem_QuitBtnDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "quitBtnDomain", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetTopbarYFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getTopbarYFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "uiMgrFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_QuitUIFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_QuitUIFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_QuitUINativeBackCheckLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f0efeA809lMYLbAk0c5HNuv", "G12_FHeartSystem_QuitUINativeBackCheckLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_QuitUINativeBackCheckLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.checkUIOnTopFunc(this.uiMgrFunc().cfg[this.uiConfig.quitUI]) ? this.router.dispatchAction = ae.DispatchAction.FireOnce : this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var o, n, c, f, p;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G12_FHeartSystem_QuitUINativeBackRouter"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G12_FHeartSystem_QuitUIDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "quitUIDomain", void 0);
i([ ae.bindAtom("G12_FBase_CheckUIOnTopFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "checkUIOnTopFunc", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "uiConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_QuitUINativeBackCheckLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_QuitUINativeBackCheckLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_QuitUINativeBackRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ba972/GsStA0Idg1dMbe+aH", "G12_FHeartSystem_QuitUINativeBackRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_QuitUINativeBackRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G12_FBase_NativeBackSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "nativeBackSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G12_FHeartSystem_CloseQuitUISignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_QuitUINativeBackRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_QuitUINativeBackRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_QuitUIRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a40c9N6sUpFGIiMsyFmFetd", "G12_FHeartSystem_QuitUIRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_QuitUIRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
return ae.Node({
name: "QuitUI",
widget: this.constCfg.FulWidget
}, ae.Sprite({
name: "mask",
img: this.assetsConfig.maskTexUrl,
widget: this.constCfg.FulWidget,
rgb: this.uiConfig.mask.color,
alpha: this.uiConfig.mask.alpha,
blockInputEvents: !0,
sizeMode: ae.SizeMode.Custom
}), ae.Sprite({
name: "bg",
img: this.textureCfg.blockFlowPnl1,
x: this.uiConfig.bg.x,
y: this.uiConfig.bg.y,
width: this.uiConfig.bg.width,
height: this.uiConfig.bg.height,
renderType: ae.RenderType.Sliced
}), ae.Node({
name: "closeBtn",
width: this.uiConfig.closeBtn.width,
height: this.uiConfig.closeBtn.height,
x: this.uiConfig.closeBtn.x,
y: this.uiConfig.closeBtn.y,
button: this.constCfg.Button,
event: {
buttonClick: this.closeBtnClickRouter
}
}, ae.Sprite({
name: "closeBtnImg",
img: this.textureCfg.blockFlowCloseBtn
})), ae.Sprite({
name: "innerBg",
img: this.assetsConfig.blockFlowPnl4TexUrl,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: this.uiConfig.innerBg.width,
height: this.uiConfig.innerBg.height,
x: this.uiConfig.innerBg.x,
y: this.uiConfig.innerBg.y
}), ae.Sprite({
name: "warning",
img: this.assetsConfig.blockFlowWarningTexUrl,
x: this.uiConfig.warning.x,
y: this.uiConfig.warning.y
}), ae.Sprite({
name: "confirmBtn",
img: this.textureCfg.blockFlowBtn1,
width: this.uiConfig.confirmBtn.width,
height: this.uiConfig.confirmBtn.height,
x: this.uiConfig.confirmBtn.x,
y: this.uiConfig.confirmBtn.y,
button: this.constCfg.Button,
event: {
buttonClick: this.confirmBtnClickRouter
},
renderType: ae.RenderType.Sliced
}, ae.Text({
name: "confirmBtnText",
text: this.langueConfig.quitUIConfirmBtnText,
font: this.commonFontAsset.santralExtraBold,
fontSize: this.uiConfig.confirmBtnText.fontSize,
rgb: this.uiConfig.confirmBtnText.color,
x: this.uiConfig.confirmBtnText.x,
y: this.uiConfig.confirmBtnText.y
})), ae.Text({
name: "titleText",
text: this.langueConfig.quitUITitle,
font: this.commonFontAsset.santralExtraBold,
fontSize: this.uiConfig.titleText.fontSize,
rgb: this.uiConfig.titleText.color,
x: this.uiConfig.titleText.x,
y: this.uiConfig.titleText.y
}), ae.Text({
name: "tipsText",
text: this.langueConfig.quitUITipsText,
font: this.commonFontAsset.santralExtraBold,
fontSize: this.uiConfig.tipsText.fontSize,
rgb: this.uiConfig.tipsText.color,
x: this.uiConfig.tipsText.x,
y: this.uiConfig.tipsText.y,
horizontalAlign: ae.TextHorizontalAlign.CENTER
}), ae.RichText({
name: "tips2",
text: this.langueConfig.quitUIResetTipsText,
fontSize: this.uiConfig.resetTipsText.fontSize,
rgb: this.uiConfig.resetTipsText.color,
x: this.uiConfig.resetTipsText.x,
y: this.uiConfig.resetTipsText.y
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p, u, s, y, d;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_QuitUIDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_QuitUIConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_LangueConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "langueConfig", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBase_CommonFontAsset"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "commonFontAsset", void 0);
i([ ae.bindAtom("G12_FHeartSystem_QuitUICloseBtnClickRouter"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "closeBtnClickRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_QuitUIConfirmBtnClickRouter"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "confirmBtnClickRouter", void 0);
i([ ae.bindAtom("G12_FBase_TextureCfg"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "textureCfg", void 0);
return i([ ae.atomClass("G12_FHeartSystem_QuitUIRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_QuitUIRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_RecoveryTickLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c7851NHTlRDALbVtVZHb9J2", "G12_FHeartSystem_RecoveryTickLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_RecoveryTickLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
if (this.heartMgrFunc().isActive()) {
this.heartMgrFunc().refreshRecovery();
this.heartManagerLogic.runtime.surplusTime = this.getSurplusTimeFunc();
}
};
var o, n, c, f;
i([ ae.onChain, ae.bindAtom("G12_FBase_AGameUpdateSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "updateSignal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetSurplusTimeFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getSurplusTimeFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "heartManagerLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_RecoveryTickLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_RecoveryTickLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_RefreshRecoveryFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ab5fe+HYB5N/qS4g6HSMbZC", "G12_FHeartSystem_RefreshRecoveryFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_RefreshRecoveryFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.heartManagerLogic.storage, o = e.heartConfig.maxHeart, n = e.heartManagerLogic.runtime.currentShowHeart, r = e.heartManagerLogic.runtime.recoveryInterval, i = e.getDateNowFunc();
if (t.currentHeart >= o) {
t.nextRecoveryAt = 0;
t.saveRecoveryAt = 0;
e.reportGameStatusFunc(t.nextRecoveryAt);
} else if (n >= o) {
t.nextRecoveryAt = 0;
t.saveRecoveryAt <= 0 && n > t.currentHeart && (t.saveRecoveryAt = i + r);
e.reportGameStatusFunc(t.nextRecoveryAt);
} else if (!(r <= 0)) if (t.nextRecoveryAt <= 0) {
t.nextRecoveryAt = i + r;
e.reportGameStatusFunc(t.nextRecoveryAt);
} else if (!(i < t.nextRecoveryAt)) {
var a = Math.floor((i - t.nextRecoveryAt) / r) + 1, c = Math.min(o, t.currentHeart + a);
t.currentHeart = c;
t.nextRecoveryAt = c >= o ? 0 : t.nextRecoveryAt + a * r;
t.saveRecoveryAt = 0;
e.reportGameStatusFunc(t.nextRecoveryAt);
var f = e.uiMgrFunc(), p = f.isOpen(e.uiConfig.emptyUI);
if (!p || !e.heartManagerLogic.runtime.isEmptyUIRewardAdShowing) if (p || f.isOpen(e.uiConfig.getUI)) {
if (e.heartRecoverySpineCompleteLogic.runtime.isAnimating) return;
e.startHeartRecoveryAnimFunc();
} else {
e.heartManagerLogic.runtime.currentShowHeart = Math.min(o, n + a);
e.checkRecoveryFunc();
}
}
};
};
var o, n, c, f, p, u, s, y, d;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CheckRecoveryFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "checkRecoveryFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetDateNowFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getDateNowFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_StartHeartRecoveryAnimFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "startHeartRecoveryAnimFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartRecoverySpineCompleteLogic"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "heartRecoverySpineCompleteLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GameRuntimeReportFunc"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "reportGameStatusFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_RefreshRecoveryFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_RefreshRecoveryFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ResetDailyAdRefillFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "378f95W+21OiZPyejycAy7b", "G12_FHeartSystem_ResetDailyAdRefillFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ResetDailyAdRefillFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.heartManagerLogic.storage, o = e.getCurrentDate();
if (t.lastAdRefillDate !== o) {
t.lastAdRefillDate = o;
t.dailyAdRefillCount = 0;
}
};
};
var o, n;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G_FAtom_GetCurrentDate"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getCurrentDate", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ResetDailyAdRefillFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_ResetDailyAdRefillFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ReturnBlockLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f65543LSfZIgIpWdSpMwAEv", "G12_FHeartSystem_ReturnBlockLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ReturnBlockLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.return2BlockFunc();
};
var o, n;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_ReturnBlockSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "returnBlockSignal", void 0);
i([ ae.bindAtom("G12_FBase_Return2BlockFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "return2BlockFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ReturnBlockLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_ReturnBlockLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ReturnBlockRouterDispatchLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "036dbvQUGNKLLzmTlVpylKt", "G12_FHeartSystem_ReturnBlockRouterDispatchLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ReturnBlockRouterDispatchLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
if (this.heartMgrFunc().handleReturnBlockRoute()) {
this.commonButtonClickEffectFunc();
this.router.dispatchAction = ae.DispatchAction.Cancel;
} else this.router.dispatchAction = ae.DispatchAction.FireOnce;
};
var o, n, c;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G12_FBase_ReturnBlockRouter"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "commonButtonClickEffectFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ReturnBlockRouterDispatchLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_ReturnBlockRouterDispatchLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ReturnBlockRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "618f5NCy4dDa4Rx7MWYljBV", "G12_FHeartSystem_ReturnBlockRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ReturnBlockRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_ReturnBlockSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ReturnBlockRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_ReturnBlockRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ReturnBlockSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1e6c1GstzpJjKUsMIMJ1P0E", "G12_FHeartSystem_ReturnBlockSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ReturnBlockSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_SettingPanelDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "settingPanelDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ReturnBlockSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_ReturnBlockSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_RevivePageRetryLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5d462EF9OpDubJIFbUwkKAR", "G12_FHeartSystem_RevivePageRetryLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_RevivePageRetryLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this.uiMgrFunc();
e.isOpen(e.cfg.RevivePage) || (this.heartManagerLogic.runtime.isFormRetry = !0);
};
var o, n, c;
i([ ae.signalEnd, ae.onChain, ae.bindAtom("G12_FBase_RevivePageRetrySignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "touchEndRetryBtnSignal", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartManagerLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_RevivePageRetryLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_RevivePageRetryLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_SetGamePanelAlphaFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "78e9fQEXnpNgq9HSU54liRJ", "G12_FHeartSystem_SetGamePanelAlphaFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_SetGamePanelAlphaFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
e.heartManagerLogic.runtime.gamePanelAlpha = t;
};
};
var o;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
return i([ ae.atomClass("G12_FHeartSystem_SetGamePanelAlphaFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_SetGamePanelAlphaFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_Setting2UIRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9576dTApOBN2L8cTR/s4lDE", "G12_FHeartSystem_Setting2UIRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_Setting2UIRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_GameSettingSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_Setting2UIRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_Setting2UIRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_SettingPanelDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1e567KQ7nNFhpXohiYeHsC9", "G12_FHeartSystem_SettingPanelDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_SettingPanelDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
return i([ ae.atomClass("G12_FHeartSystem_SettingPanelDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_SettingPanelDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_SettingPanelRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bd3bcGwpmdFrLW95ZBzaQSU", "G12_FHeartSystem_SettingPanelRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_SettingPanelRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
return ae.Node({
name: "SettingPanel",
widget: this.constCfg.FulWidget
}, ae.Sprite({
name: "SettingPanelBlackBg",
img: this.textureCfg.singleColor,
sizeMode: ae.SizeMode.Raw,
rgb: this.pageConfig.bgColor,
alpha: this.pageConfig.bgAlpha,
widget: this.constCfg.FulWidget,
event: {
buttonClick: this.closeSettingRouter
}
}), ae.Sprite({
name: "SettingPanelBg",
y: this.homeUIConfig.layout.settingPanel.bg.y,
img: this.textureCfg.blockFlowPnl1,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: this.homeUIConfig.layout.settingPanel.bg.width,
height: this.homeUIConfig.layout.settingPanel.bg.height,
blockInputEvents: !0
}), ae.Sprite({
name: "SettingPanelCloseBtn",
img: this.textureCfg.blockFlowCloseBtn,
sizeMode: ae.SizeMode.Raw,
x: this.homeUIConfig.layout.settingPanel.closeBtn.x,
y: this.homeUIConfig.layout.settingPanel.closeBtn.y,
button: this.constCfg.Button,
event: {
buttonClick: this.closeSettingRouter
}
}), ae.Sprite({
name: "SettingPanelInfoBg",
img: this.textureCfg.blockFlowPnl2,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: this.homeUIConfig.layout.settingPanel.infoBg.width,
height: this.homeUIConfig.layout.settingPanel.infoBg.height,
y: this.homeUIConfig.layout.settingPanel.infoBg.y
}), ae.Text({
name: "SettingPanelText",
text: this.getLanguageCfgFunc("setting1"),
fontSize: this.homeUIConfig.layout.settingPanel.title.fontSize,
y: this.homeUIConfig.layout.settingPanel.title.y,
overflow: ae.TextOverflow.NONE,
font: this.commonFontAsset.santralExtraBold,
rgb: this.homeUIConfig.layout.settingPanel.title.color
}), ae.Sprite({
name: "SettingPanelExitBtn",
img: this.textureCfg.blockFlowBtn1,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: this.homeUIConfig.layout.settingPanel.exitBtn.width,
height: this.homeUIConfig.layout.settingPanel.exitBtn.height,
y: this.homeUIConfig.layout.settingPanel.exitBtn.y,
button: this.constCfg.Button,
event: {
buttonClick: this.returnBlockRouter
}
}, ae.Text({
name: "SettingPanelExitText",
text: this.getLanguageCfgFunc("back"),
y: this.homeUIConfig.layout.settingPanel.exitText.y,
fontSize: this.homeUIConfig.layout.settingPanel.exitText.fontSize,
rgb: this.homeUIConfig.layout.settingPanel.exitText.color,
font: this.commonFontAsset.santralExtraBold
})));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p, u, s, y, d;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_SettingPanelDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FBase_TextureCfg"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "textureCfg", void 0);
i([ ae.bindAtom("G12_FBase_CommonFontAsset"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "commonFontAsset", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "homeUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CloseSettingRouter"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "closeSettingRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ReturnBlockRouter"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "returnBlockRouter", void 0);
i([ ae.bindAtom("G12_FBase_GetLanguageCfgFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "getLanguageCfgFunc", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBase_PageConfig"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "pageConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_SettingPanelRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_SettingPanelRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_SettingUINativeBackCheckLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b7a53dfK05Ke5yXVH91sRBp", "G12_FHeartSystem_SettingUINativeBackCheckLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_SettingUINativeBackCheckLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.checkUIOnTopFunc(this.uiMgrFunc().cfg[this.uiConfig.homeSetUI]) ? this.router.dispatchAction = ae.DispatchAction.FireOnce : this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var o, n, c, f, p;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G12_FHeartSystem_SettingUINativeBackRouter"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HomeUIDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "homeUIDomain", void 0);
i([ ae.bindAtom("G12_FBase_CheckUIOnTopFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "checkUIOnTopFunc", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "uiConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_SettingUINativeBackCheckLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_SettingUINativeBackCheckLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_SettingUINativeBackRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "66f621ZXb5NDqc8CVsYIMp1", "G12_FHeartSystem_SettingUINativeBackRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_SettingUINativeBackRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G12_FBase_NativeBackSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "nativeBackSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G12_FHeartSystem_CloseSettingSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_SettingUINativeBackRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_SettingUINativeBackRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_ShowAdFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7d37a/20+ZLF5w/amH99QJi", "G12_FHeartSystem_ShowAdFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_ShowAdFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.heartConfig.adRefillDailyLimit;
if (o > 0 && e.heartManagerLogic.storage.dailyAdRefillCount >= o) {
e.popupMgrFunc().show(e.langueConfig.adRefillLimitTip);
return !1;
}
var n = e.adMgrFunc();
if (!e.loadRewardAdFunc()) {
e.logFunc().log("[G12_FHeartSystem_ShowAdFunc] RewardAD not ready");
var r = e.getLanguageCfgFunc("rewardAdNotReadyTip");
e.popupMgrFunc().show(r, .6, 3);
return !1;
}
e.logFunc().log("[G12_FHeartSystem_ShowAdFunc] RewardAD ready");
n.showRewardVideo(function() {
t();
});
return !0;
};
};
var o, n, c, f, p, u, s, y;
i([ ae.bindAtom("G12_FBase_ADMgrFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "adMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_LogFunc2"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "logFunc", void 0);
i([ ae.bindAtom("G12_FBase_PopupMgrFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "popupMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_GetLanguageCfgFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getLanguageCfgFunc", void 0);
i([ ae.bindAtom("G12_FBase_LoadRewardAdFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "loadRewardAdFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_LangueConfig"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "langueConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "heartConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_ShowAdFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_ShowAdFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_SkipInterAdOnFailRetryWhenZeroHeartLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "df893VrVy1Keqs88O94tvl4", "G12_FHeartSystem_SkipInterAdOnFailRetryWhenZeroHeartLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_SkipInterAdOnFailRetryWhenZeroHeartLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.trySkipInterAdOnZeroHeartFunc();
};
var o, n;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G12_FBase_Click2FailPageRetryRouter"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "click2FailPageRetryRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_TrySkipInterAdOnZeroHeartFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "trySkipInterAdOnZeroHeartFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_SkipInterAdOnFailRetryWhenZeroHeartLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_SkipInterAdOnFailRetryWhenZeroHeartLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_SkipInterAdOnRetryWhenZeroHeartLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7b374GC9kVBQI1GZWzVTI8y", "G12_FHeartSystem_SkipInterAdOnRetryWhenZeroHeartLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_SkipInterAdOnRetryWhenZeroHeartLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this.getFailCostHeartFunc();
if (e > 0 && !0 === this.heartConfig.confirmGiveUpEnabled) {
this.click2RevivePageRetryRouter.dispatchAction = ae.DispatchAction.Cancel;
this.openGiveUpPageFunc(!0);
} else {
if (e > 0) {
this.processFailOrAbandonFunc();
this.flyHeartCompleteFunc();
}
this.tryOpenRetryEmptyUIFunc() ? this.click2RevivePageRetryRouter.dispatchAction = ae.DispatchAction.Cancel : this.trySkipInterAdOnZeroHeartFunc();
}
};
var o, n, c, f, p, u, s, y;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G12_FBase_Click2RevivePageRetryRouter"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "click2RevivePageRetryRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_OpenGiveUpPageFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "openGiveUpPageFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_TrySkipInterAdOnZeroHeartFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "trySkipInterAdOnZeroHeartFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetFailCostHeartFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "getFailCostHeartFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_TryOpenRetryEmptyUIFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "tryOpenRetryEmptyUIFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ProcessFailOrAbandonFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "processFailOrAbandonFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_FlyHeartCompleteFunc"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "flyHeartCompleteFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_SkipInterAdOnRetryWhenZeroHeartLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_SkipInterAdOnRetryWhenZeroHeartLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_SkipInterAdWhenZeroHeartLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "550deI/dKZDRaOPOfjlzc04", "G12_FHeartSystem_SkipInterAdWhenZeroHeartLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_SkipInterAdWhenZeroHeartLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.trySkipInterAdOnZeroHeartFunc();
};
var o, n;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G12_FBase_ResultWinFadeOutEndRouter"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "resultWinFadeOutEndRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_TrySkipInterAdOnZeroHeartFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "trySkipInterAdOnZeroHeartFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_SkipInterAdWhenZeroHeartLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_SkipInterAdWhenZeroHeartLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_StartGameCreateQuitBtnLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "60c52YqRWBPnYw5Ib7hTFSC", "G12_FHeartSystem_StartGameCreateQuitBtnLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_StartGameCreateQuitBtnLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this;
if (this.heartConfig.isOpenQuitBtn) {
var t = this.nodeInstanceMgrFunc().get(this.nodeInstanceCfgFunc().GameTopUIOverlay);
this.quitUIFunc().createBtn(t, this.quitUIConfig.quitBtnOffsetX);
this.gameLevelTextDomain.collect().forEach(function(t) {
e.gameLevelTextDomain.transform.x.set(t, e.gameLevelTextDomain.transform.x[t] + e.quitUIConfig.gameLevelTextOffsetX);
});
}
};
var o, n, c, f, p, u, s;
i([ ae.onChain, ae.bindAtom("G12_FBase_LoadGamePanelSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_QuitUIFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "quitUIFunc", void 0);
i([ ae.bindAtom("G12_FBase_NodeInstanceMgrFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "nodeInstanceMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_NodeInstanceCfgFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "nodeInstanceCfgFunc", void 0);
i([ ae.bindAtom("G12_FBase_GameLevelTextDomain"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "gameLevelTextDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_QuitUIConfig"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "quitUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "heartConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_StartGameCreateQuitBtnLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_StartGameCreateQuitBtnLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_StartHeartRecoveryAnimFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "63c95wUm9JKzrqAiecFVLFn", "G12_FHeartSystem_StartHeartRecoveryAnimFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_StartHeartRecoveryAnimFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.heartRecoverySpineCompleteLogic.runtime;
if (void 0 === t || t()) if (e.heartManagerLogic.runtime.currentShowHeart !== e.heartManagerLogic.storage.currentHeart) {
var n = e.heartManagerLogic.runtime.currentShowHeart;
o.spineIndex = n;
o.isAnimating = !0;
e.audioMgrFunc().playEffect(e.assetConfig.collectSfx, !1);
} else {
o.isAnimating = !1;
o.spineIndex = -1;
e.heartMgrFunc().flyHeartComplete();
e.heartMgrFunc().checkRecovery();
} else {
o.isAnimating = !1;
o.spineIndex = -1;
}
};
};
var o, n, c, f, p;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartRecoverySpineCompleteLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartRecoverySpineCompleteLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "assetConfig", void 0);
i([ ae.bindAtom("G12_FBase_AudioMgrFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "audioMgrFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_StartHeartRecoveryAnimFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_StartHeartRecoveryAnimFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_SyncHeartViewLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "695daa+sxpINIoRf20tIUwf", "G12_FHeartSystem_SyncHeartViewLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_SyncHeartViewLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.heartManagerLogic.runtime.currentShowHeart > this.heartManagerLogic.storage.currentHeart && this.audioMgrFunc().playEffect(this.assetConfig.breakSfx, !1);
this.heartManagerFunc().flyHeartComplete();
};
var o, n, c, f, p;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_SyncHeartViewSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartManagerFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "assetConfig", void 0);
i([ ae.bindAtom("G12_FBase_AudioMgrFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "audioMgrFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_SyncHeartViewLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_SyncHeartViewLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_SyncHeartViewSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ff0f9k49jNKyapKQ2h3UQu9", "G12_FHeartSystem_SyncHeartViewSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_SyncHeartViewSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_SyncHeartViewSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_SyncHeartViewSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_SyncPendingFlyHeartCompleteOnLoadingEndLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "75569zUUpRMU5I0A32W5J8W", "G12_FHeartSystem_SyncPendingFlyHeartCompleteOnLoadingEndLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_SyncPendingFlyHeartCompleteOnLoadingEndLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.heartManagerLogic.runtime.pendingFlyHeartComplete && this.flyHeartCompleteFunc();
};
var o, n, c;
i([ ae.onChain, ae.bindAtom("G12_FBase_LoadingFadeOutEndSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "loadingFadeOutEndSignal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_FlyHeartCompleteFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "flyHeartCompleteFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_SyncPendingFlyHeartCompleteOnLoadingEndLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_SyncPendingFlyHeartCompleteOnLoadingEndLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_SyncWinUIPositionLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f83b0Zf+oZJWLoa1ywWrL8a", "G12_FHeartSystem_SyncWinUIPositionLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_SyncWinUIPositionLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function(e) {
if (this.winUIDomain.has(e) && e === this.positionInput.eid && (this.winUIDomain.transform.x[e] !== this.positionInput.x || this.winUIDomain.transform.y[e] !== this.positionInput.y)) {
this.winUIDomain.transform.x.set(e, this.positionInput.x);
this.winUIDomain.transform.y.set(e, this.positionInput.y);
}
};
var o, n, c;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_WinUIPositionChangedSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G_FAtom_PositionInput"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "positionInput", void 0);
i([ ae.bindAtom("G12_FHeartSystem_WinUIDomain"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "winUIDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_SyncWinUIPositionLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_SyncWinUIPositionLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_TryCompletePendingRetryFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "22abcROg81CQYCaEJn3hyBh", "G12_FHeartSystem_TryCompletePendingRetryFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_TryCompletePendingRetryFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.heartManagerLogic.runtime;
if (!t.retryPendingAfterEmptyUI) return !1;
if (!e.checkEnterLevelFunc(e.getLevelFunc()).canEnter) return !0;
var o = t.retryGiveUpConfirmedAfterEmptyUI;
t.retryPendingAfterEmptyUI = !1;
t.retryGiveUpConfirmedAfterEmptyUI = !1;
t.giveUpUIIsRetry = !1;
e.uiMgrFunc().close(e.uiConfig.emptyUI);
if (o) {
e.processFailOrAbandonFunc();
e.flyHeartCompleteFunc();
}
e.executeRevivePageRetryFunc();
return !0;
};
};
var o, n, c, f, p, u, s, y;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FBase_GetLevelFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getLevelFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CheckEnterLevelFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "checkEnterLevelFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ProcessFailOrAbandonFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "processFailOrAbandonFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_FlyHeartCompleteFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "flyHeartCompleteFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_ExecuteRevivePageRetryFunc"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "executeRevivePageRetryFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_TryCompletePendingRetryFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_TryCompletePendingRetryFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_TryEnterLevelFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4f76a6jXBVBO64/BvrpuJ5O", "G12_FHeartSystem_TryEnterLevelFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_TryEnterLevelFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
void 0 === o && (o = !1);
if (e.heartManagerLogic.runtime.isOnLoadingLevel && o) return !1;
(!t || t <= 0) && (t = e.getLevelFunc());
var n = e.heartManagerLogic.runtime, r = o || n.isFormRetry && e.heartManagerLogic.storage.lastEnterLevel === t;
e.updateRecoveryIntervalFunc(t);
e.refreshRecoveryFunc();
n.isFormRetry = !1;
n.isOnLoadingLevel = !1;
if (e.heartConfig.outerMapEnabled && !r && t > e.heartConfig.isSkipHomeUILevel) {
e.loadHomeLevelConfigWindowFunc(t);
e.openOuterMapFunc();
return !1;
}
var i = e.checkEnterLevelFunc(t), a = i.enterCost;
if (!i.canEnter || !e.costHeartFunc(a)) {
e.openNotEnoughHeartPageFunc();
return !1;
}
e.heartManagerLogic.storage.lastEnterLevel = t;
e.loadHomeLevelConfigWindowFunc(t);
e.flyHeartCompleteFunc();
return !0;
};
};
var o, n, c, f, p, u, s, y, d, l, _;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_RefreshRecoveryFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "refreshRecoveryFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UpdateRecoveryIntervalFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "updateRecoveryIntervalFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CostHeartFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "costHeartFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CheckEnterLevelFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "checkEnterLevelFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_OpenNotEnoughHeartPageFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "openNotEnoughHeartPageFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_OpenOuterMapFunc"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "openOuterMapFunc", void 0);
i([ ae.bindAtom("G12_FBase_GetLevelFunc"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "getLevelFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_FlyHeartCompleteFunc"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "flyHeartCompleteFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_LoadHomeLevelConfigWindowFunc"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "loadHomeLevelConfigWindowFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_TryEnterLevelFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_TryEnterLevelFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_TryOpenRetryEmptyUIFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6bb12XjUtBLIaoGkoF7dWvP", "G12_FHeartSystem_TryOpenRetryEmptyUIFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_TryOpenRetryEmptyUIFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
void 0 === t && (t = !1);
if (e.checkEnterLevelFunc(e.getLevelFunc()).canEnter) return !1;
var o = e.heartManagerLogic.runtime;
o.retryPendingAfterEmptyUI = !0;
o.retryGiveUpConfirmedAfterEmptyUI = t;
e.openNotEnoughHeartPageFunc();
return !0;
};
};
var o, n, c, f;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CheckEnterLevelFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "checkEnterLevelFunc", void 0);
i([ ae.bindAtom("G12_FBase_GetLevelFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getLevelFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_OpenNotEnoughHeartPageFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "openNotEnoughHeartPageFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_TryOpenRetryEmptyUIFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_TryOpenRetryEmptyUIFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_TrySkipInterAdOnZeroHeartFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ad420PWq6hHiIx4IDxln+5k", "G12_FHeartSystem_TrySkipInterAdOnZeroHeartFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_TrySkipInterAdOnZeroHeartFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
if (e.heartConfig.skipInterAdOnZeroHeart) {
var t = e.getLevelFunc();
e.checkEnterLevelFunc(t).canEnter || e.skipNextInterAdFunc();
}
};
};
var o, n, c, f;
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CheckEnterLevelFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "checkEnterLevelFunc", void 0);
i([ ae.bindAtom("G12_FBase_GetLevelFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getLevelFunc", void 0);
i([ ae.bindAtom("G12_FBase_SkipNextInterAdFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "skipNextInterAdFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_TrySkipInterAdOnZeroHeartFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_TrySkipInterAdOnZeroHeartFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_TweenSyncHeartViewRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "322beKb6wlJWJaoD3goSHX0", "G12_FHeartSystem_TweenSyncHeartViewRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_TweenSyncHeartViewRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_TweenEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G12_FHeartSystem_SyncHeartViewSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_TweenSyncHeartViewRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_TweenSyncHeartViewRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_TweenUICmp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8180dI+U0lCeama1t5Ymwnz", "G12_FHeartSystem_TweenUICmp");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_TweenUICmp = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
text: "",
alpha: 0,
scale: 1,
angle: 0
};
};
return i([ ae.atomClass("G12_FHeartSystem_TweenUICmp") ], t);
}(ae.EntityComponentAtom);
o.G12_FHeartSystem_TweenUICmp = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_UICfgMapFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "37b40Y6JZ5Pq7IYQHgGz0XG", "G12_FHeartSystem_UICfgMapFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_UICfgMapFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.uimgrfunc().cfg;
return {
baseCfg: t,
uiCfgMap: t
};
};
};
var o;
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uimgrfunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_UICfgMapFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_UICfgMapFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_UIConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6bd7e1YLC9Kt5wND7MhWnzW", "G12_FHeartSystem_UIConfig");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_UIConfig = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
emptyUI: "G12_FHeartSystem_EmptyUI",
getUI: "G12_FHeartSystem_GetUI",
giveUpUI: "G12_FHeartSystem_GiveUpUI",
homeUI: "G12_FHeartSystem_HomeUI",
homeSetUI: "G12_FHeartSystem_HomeSetUI",
quitUI: "G12_FHeartSystem_QuitUI"
};
};
return i([ ae.atomClass("G12_FHeartSystem_UIConfig") ], t);
}(ae.ConfigAtom);
o.G12_FHeartSystem_UIConfig = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_UIMgrFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "044f6N8XOZFDLJIgFDqE9NV", "G12_FHeartSystem_UIMgrFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_UIMgrFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = this.uiCfgMapFunc().baseCfg;
return function() {
return {
baseCfg: t,
open: e.openUIFunc,
close: e.closeUIFunc,
get: e.getUIFunc,
size: e.getUISizeFunc,
isOpen: e.isUIOpenFunc
};
};
};
var o, n, c, f, p, u;
i([ ae.bindAtom("G12_FHeartSystem_UICfgMapFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiCfgMapFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_OpenUIFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "openUIFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CloseUIFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "closeUIFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetUIFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getUIFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetUISizeFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "getUISizeFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_IsUIOpenFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "isUIOpenFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_UIMgrFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_UIMgrFunc = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_UpdateGamePanelAlphaOnHomeUIStateLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cfb450ijXJMgZYjoIDAIfIx", "G12_FHeartSystem_UpdateGamePanelAlphaOnHomeUIStateLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_UpdateGamePanelAlphaOnHomeUIStateLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
if (!0 === this.heartConfig.outerMapEnabled) {
var e = this.baseUiMgrFunc();
e.getStateOpened(this.uiConfig.homeUI) && this.setGamePanelAlphaFunc(0);
e.getStateClosed(this.uiConfig.homeUI) && this.setGamePanelAlphaFunc(1);
}
};
var o, n, c, f, p;
i([ ae.onChain, ae.bindAtom("G12_FBase_UIMgrStateChangedSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "baseUiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_SetGamePanelAlphaFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "setGamePanelAlphaFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "heartConfig", void 0);
return i([ ae.atomClass("G12_FHeartSystem_UpdateGamePanelAlphaOnHomeUIStateLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_UpdateGamePanelAlphaOnHomeUIStateLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_UpdateGameStatesFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "47491ql4FJHVrWHtuxc5JaU", "G12_FHeartSystem_UpdateGameStatesFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, o = t && e[t], n = 0;
if (o) return o.call(e);
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
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_UpdateGameStatesFunc = void 0;
var f = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = this.uiCfgMapFunc(), o = t.baseCfg, n = t.uiCfgMap, r = [ this.uiConfig.emptyUI, this.uiConfig.getUI, this.uiConfig.giveUpUI, this.uiConfig.quitUI, this.uiConfig.homeUI ], i = [ o.FailPage, o.ResultWin, o.LoadingPage, o.SettingPanel, o.RevivePage, o.ExitConfirmPage ];
return function() {
var t, o, a, f, p, u;
if (e.loadGameDataLogic.runtime.gameState === e.constCfg.GameState.Paused) {
var s = !0;
try {
for (var y = c(r), d = y.next(); !d.done; d = y.next()) {
F = d.value;
if ((g = n[F]) && e.uiMgrFunc().isOpen(g)) {
s = !1;
break;
}
}
} catch (e) {
a = {
error: e
};
} finally {
try {
d && !d.done && (f = y.return) && f.call(y);
} finally {
if (a) throw a.error;
}
}
if (s) {
try {
for (var l = c(i), _ = l.next(); !_.done; _ = l.next()) {
F = _.value;
if (e.uiMgrFunc().isOpen(F)) return;
}
} catch (e) {
p = {
error: e
};
} finally {
try {
_ && !_.done && (u = l.return) && u.call(l);
} finally {
if (p) throw p.error;
}
}
e.loadGameDataLogic.runtime.gameState = e.constCfg.GameState.Resume;
}
} else try {
for (var m = c(r), h = m.next(); !h.done; h = m.next()) {
var g, F = h.value;
if ((g = n[F]) && e.uiMgrFunc().isOpen(g)) {
e.loadGameDataLogic.runtime.gameState = e.constCfg.GameState.Paused;
break;
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
h && !h.done && (o = m.return) && o.call(m);
} finally {
if (t) throw t.error;
}
}
};
};
var o, n, f, p, u;
i([ ae.bindAtom("G12_FBase_LoadGameDataLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "loadGameDataLogic", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UIConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "uiConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_UICfgMapFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "uiCfgMapFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_UpdateGameStatesFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_UpdateGameStatesFunc = f;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_UpdateRecoveryIntervalFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "64e44HOiKtNg5q1a6ZUlQBG", "G12_FHeartSystem_UpdateRecoveryIntervalFunc");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__read || function(e, t) {
var o = "function" == typeof Symbol && e[Symbol.iterator];
if (!o) return e;
var n, r, i = o.call(e), a = [];
try {
for (;(void 0 === t || t-- > 0) && !(n = i.next()).done; ) a.push(n.value);
} catch (e) {
r = {
error: e
};
} finally {
try {
n && !n.done && (o = i.return) && o.call(i);
} finally {
if (r) throw r.error;
}
}
return a;
}, f = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
return e;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_UpdateRecoveryIntervalFunc = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = null;
return function(o) {
var n, r;
t || (t = f(e.heartConfig.stageRecoveryInterval).sort(function(e, t) {
return e[0] - t[0];
}));
var i = null != o ? o : e.getLevelFunc(), a = e.heartManagerLogic.runtime.recoveryInterval, c = t.length, p = -1;
if (c <= 0 || t[0][0] > i) p = e.heartConfig.recoveryInterval; else if (i >= t[c - 1][0]) p = null !== (n = t[c - 1][1]) && void 0 !== n ? n : e.heartConfig.recoveryInterval; else for (var u = c - 1; u >= 0; u--) if (i >= t[u][0]) {
p = null !== (r = t[u][1]) && void 0 !== r ? r : e.heartConfig.recoveryInterval;
break;
}
if (p > 0) {
e.heartManagerLogic.runtime.recoveryInterval = 1e3 * p;
if (a !== e.heartManagerLogic.runtime.recoveryInterval) {
e.heartManagerLogic.storage.recoveryInterval = e.heartManagerLogic.runtime.recoveryInterval;
e.reportGameStatusFunc();
}
}
};
};
var o, n, c, p;
i([ ae.bindAtom("G12_FHeartSystem_HeartManagerLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "heartManagerLogic", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FBase_GetLevelFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getLevelFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GameRuntimeReportFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "reportGameStatusFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_UpdateRecoveryIntervalFunc") ], t);
}(ae.FunctionAtom);
o.G12_FHeartSystem_UpdateRecoveryIntervalFunc = p;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_VictoryLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0f5a5Fe7DRHyYXI4gjU6jGX", "G12_FHeartSystem_VictoryLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_VictoryLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this.uiMgrFunc();
e.getStateOpened(e.cfg.ResultWin.key) && this.heartMgrFunc().victory();
};
var o, n, c;
i([ ae.onChain, ae.bindAtom("G12_FBase_UIMgrStateChangedSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiMgrStateChangedSignal", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartMgrFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "heartMgrFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_VictoryLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_VictoryLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_WinUIBigHeartDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "508ecaxfdlEvpQzrTF+PPut", "G12_FHeartSystem_WinUIBigHeartDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_WinUIBigHeartDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n, c;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G12_FHeartSystem_BezierCmp"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "bezierCmp", void 0);
i([ ae.bindAtom("G12_FHeartSystem_TweenUICmp"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tweenUICmp", void 0);
return i([ ae.atomClass("G12_FHeartSystem_WinUIBigHeartDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_WinUIBigHeartDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_WinUIBigHeartRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "63be3Un34dO6KPAfM55spm7", "G12_FHeartSystem_WinUIBigHeartRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_WinUIBigHeartRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Node({
name: "BigHeart"
}, ae.Sprite({
name: "anim",
active: [ function(t) {
return e.domain.bezierCmp.elapsedTime[t] > 0;
}, [ this.domain.bezierCmp, "elapsedTime" ] ],
img: this.assetsConfig.blockFlowIconHeart1TexUrl,
x: [ function(t) {
return e.getCmpBezierPosFunc(t, e.domain.bezierCmp)[0];
}, [ this.domain.bezierCmp, "elapsedTime" ] ],
y: [ function(t) {
return e.getCmpBezierPosFunc(t, e.domain.bezierCmp)[1];
}, [ this.domain.bezierCmp, "elapsedTime" ] ],
scale: [ function(t) {
return e.domain.tweenUICmp.scale[t];
}, [ this.domain.tweenUICmp, "scale" ] ]
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_WinUIBigHeartDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetCmpBezierPosFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getCmpBezierPosFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_WinUIBigHeartRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_WinUIBigHeartRender = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_WinUICmp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "de712533wlKAq1Djn6wBWx5", "G12_FHeartSystem_WinUICmp");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_WinUICmp = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
animAlpha: 1,
textAlpha: 0,
isFlyHeartCreated: !1
};
};
return i([ ae.atomClass("G12_FHeartSystem_WinUICmp") ], t);
}(ae.EntityComponentAtom);
o.G12_FHeartSystem_WinUICmp = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_WinUIConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1ca4eUSThFNu6xakRrt9eRL", "G12_FHeartSystem_WinUIConfig");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_WinUIConfig = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
parentBeforeName: "ResultWinVictorySlotContinueRoot",
winUIRenderTweenTag: "G12_FHeartSystem_WinUIRenderTweenTag",
resultContinueButtonBaseY: 0,
resultContinueButtonNewY: -103,
winSpineOffsetY: -371.79,
winSpineOffsetX: 0,
layout: {
zIndex: 10,
uiHeight: 200,
hpHUDOffsetXFromRight: 188,
hpHUDTopbarOffsetY: 0,
text: {
x: 130,
y: 0,
fontSize: 80,
color: 16777215,
shadowColor: 0,
shadowOffsetX: 2,
shadowOffsetY: -3
},
spine: {
x: 0,
y: 0
}
},
tween: {
textShowDuration: .166,
instantDuration: 0,
heartStartX: 0,
heartStartY: 0,
bigHeartHiddenScale: 0,
bigHeartScale: .66,
bigHeartHideDuration: .1,
bigHeartInterval: .15,
bigHeartMoveDuration: .67,
bigHeartControlRatioX: 1.3,
bigHeartControlRatioY: .2,
textHideDelay: .45,
showAlpha: 1,
hiddenAlpha: 0,
showTextDelay: 1.3
}
};
};
return i([ ae.atomClass("G12_FHeartSystem_WinUIConfig") ], t);
}(ae.ConfigAtom);
o.G12_FHeartSystem_WinUIConfig = a;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_WinUIDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "36d2807aXpAXZonGo2h/ouy", "G12_FHeartSystem_WinUIDomain");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_WinUIDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n, c;
i([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G12_FHeartSystem_WinUICmp"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "winUICmp", void 0);
i([ ae.bindAtom("G_FAtom_BoxComponent"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "boxComponent", void 0);
return i([ ae.atomClass("G12_FHeartSystem_WinUIDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FHeartSystem_WinUIDomain = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_WinUIFlyHeartLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ff8beDvXclCFo+Ho0UQUfJm", "G12_FHeartSystem_WinUIFlyHeartLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_WinUIFlyHeartLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function(e) {
var t = this;
if (!(this.heartConfig.victoryPlusHeart <= 0 || !this.winUIDomain.has(e) || this.winUIDomain.winUICmp.isFlyHeartCreated[e])) {
var o = this.uiMgrFunc(), n = o.get(o.cfg.ResultWin);
if (n) {
var r = this.hpHUDBigHeartDomain.collect().find(function(e) {
return !t.hpHUDBigHeartDomain.hpHUDCmp.isCanOpenAddBuble[e] && t.childOf.getParent(e) === n;
});
if (void 0 !== r) {
this.winUIDomain.winUICmp.isFlyHeartCreated.set(e, !0);
for (var i = {
x: this.winUIDomain.transform.x[e] + this.winUIConfig.winSpineOffsetX + this.winUIConfig.layout.spine.x + this.winUIConfig.tween.heartStartX,
y: this.winUIDomain.transform.y[e] + this.winUIConfig.winSpineOffsetY + this.winUIConfig.layout.spine.y + this.winUIConfig.tween.heartStartY,
z: 0
}, a = {
x: this.hpHUDBigHeartDomain.transform.x[r],
y: this.hpHUDBigHeartDomain.transform.y[r],
z: 0
}, c = i.x, f = i.y, p = a.x, u = a.y, s = this.winUIConfig.tween.bigHeartMoveDuration, y = this.winUIConfig.tween.bigHeartInterval, d = this.getLineRatioPosFunc(c, f, p, u, this.winUIConfig.tween.bigHeartControlRatioX, this.winUIConfig.tween.bigHeartControlRatioY), l = 0; l < this.heartConfig.victoryPlusHeart; l++) {
var _ = this.createWinBigHeartFunc(n, s, c, f, p, u, d[0], d[1]);
this.winUIBigHeartDomain.tweenUICmp.scale.set(_, this.winUIConfig.tween.bigHeartHiddenScale);
this.tween(_, [ [ ae.TweenStepType.Delay, l * y ], [ ae.TweenStepType.To, this.winUIBigHeartDomain.tweenUICmp, {
scale: this.winUIConfig.tween.bigHeartScale
}, this.winUIConfig.tween.instantDuration ], [ ae.TweenStepType.To, this.winUIBigHeartDomain.bezierCmp, {
elapsedTime: s
}, s ], [ ae.TweenStepType.Router, this.winUIFlyHeartSfxRouter, _ ], [ ae.TweenStepType.To, this.winUIBigHeartDomain.tweenUICmp, {
scale: this.winUIConfig.tween.bigHeartHiddenScale
}, this.winUIConfig.tween.bigHeartHideDuration ], [ ae.TweenStepType.Router, this.tweenSyncHeartViewRouter ], [ ae.TweenStepType.Destroy, _ ] ]);
}
this.tween(e, [ [ ae.TweenStepType.Delay, (this.heartConfig.victoryPlusHeart - 1) * y ], [ ae.TweenStepType.To, this.winUIDomain.winUICmp, {
animAlpha: this.winUIConfig.tween.hiddenAlpha
}, this.winUIConfig.tween.instantDuration ] ]);
}
}
}
};
var o, n, c, f, p, u, s, y, d, l, _, m, h;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_WinUIFlyHeartSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_WinUIDomain"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "winUIDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HpHUDBigHeartDomain"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "hpHUDBigHeartDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_WinUIBigHeartDomain"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "winUIBigHeartDomain", void 0);
i([ ae.bindAtom("G12_FHeartSystem_WinUIConfig"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "winUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_CreateWinBigHeartFunc"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "createWinBigHeartFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_GetLineRatioPosFunc"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "getLineRatioPosFunc", void 0);
i([ ae.bindAtom("G12_FHeartSystem_TweenSyncHeartViewRouter"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "tweenSyncHeartViewRouter", void 0);
i([ ae.bindAtom("G12_FHeartSystem_WinUIFlyHeartSfxRouter"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "winUIFlyHeartSfxRouter", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), a("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "childOf", void 0);
return i([ ae.atomClass("G12_FHeartSystem_WinUIFlyHeartLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_WinUIFlyHeartLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_WinUIFlyHeartRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3172aMjPVFE+6unm+VVmc+S", "G12_FHeartSystem_WinUIFlyHeartRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_WinUIFlyHeartRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_TweenEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "fromSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_WinUIFlyHeartSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_WinUIFlyHeartRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_WinUIFlyHeartRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_WinUIFlyHeartSfxLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ded67Q3uxRGyaD7XNjGm9Vc", "G12_FHeartSystem_WinUIFlyHeartSfxLogic");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_WinUIFlyHeartSfxLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.playCollectSfxFunc();
};
var o, n;
i([ ae.onChain, ae.bindAtom("G12_FHeartSystem_WinUIFlyHeartSfxSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G12_FHeartSystem_PlayCollectSfxFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "playCollectSfxFunc", void 0);
return i([ ae.atomClass("G12_FHeartSystem_WinUIFlyHeartSfxLogic") ], t);
}(ae.LogicAtom);
o.G12_FHeartSystem_WinUIFlyHeartSfxLogic = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_WinUIFlyHeartSfxRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e8b1eVt/fhO0JfSJZDDaSmB", "G12_FHeartSystem_WinUIFlyHeartSfxRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_WinUIFlyHeartSfxRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_TweenEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "fromSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_WinUIFlyHeartSfxSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_WinUIFlyHeartSfxRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_WinUIFlyHeartSfxRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_WinUIFlyHeartSfxSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6bd469273hF04maQRmVO3/H", "G12_FHeartSystem_WinUIFlyHeartSfxSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_WinUIFlyHeartSfxSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_WinUIBigHeartDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "winUIBigHeartDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_WinUIFlyHeartSfxSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_WinUIFlyHeartSfxSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_WinUIFlyHeartSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "82c7e3me41DyrT4tAH3UubG", "G12_FHeartSystem_WinUIFlyHeartSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_WinUIFlyHeartSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_WinUIDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "winUIDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_WinUIFlyHeartSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_WinUIFlyHeartSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_WinUIPositionChangedRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1377dzb0KdK0ZR/xXCDj8ZK", "G12_FHeartSystem_WinUIPositionChangedRouter");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_WinUIPositionChangedRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_PositionInput"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "fromSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FHeartSystem_WinUIPositionChangedSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toSignal", void 0);
return i([ ae.atomClass("G12_FHeartSystem_WinUIPositionChangedRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FHeartSystem_WinUIPositionChangedRouter = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_WinUIPositionChangedSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b9d2fb1MmdHVbhP6bTnssEQ", "G12_FHeartSystem_WinUIPositionChangedSignal");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_WinUIPositionChangedSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G12_FHeartSystem_WinUIDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "winUIDomain", void 0);
return i([ ae.atomClass("G12_FHeartSystem_WinUIPositionChangedSignal") ], t);
}(ae.SignalAtom);
o.G12_FHeartSystem_WinUIPositionChangedSignal = c;
cc._RF.pop();
}, {} ],
G12_FHeartSystem_WinUIRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d6903y53MxCaLjImmOfGZlt", "G12_FHeartSystem_WinUIRender");
var n, r = this && this.__extends || (n = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FHeartSystem_WinUIRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.poolMaxSize = function() {
return 0;
};
t.prototype.defineRender = function() {
var e = this;
return ae.Node({
name: "WinUI",
zIndex: this.winUIConfig.layout.zIndex,
event: {
positionChanged: this.winUIPositionChangedRouter
}
}, ae.Text({
name: "text",
text: "+" + this.heartConfig.victoryPlusHeart.toString(),
x: this.winUIConfig.layout.text.x,
y: this.winUIConfig.layout.text.y,
font: this.commonFontAsset.santralExtraBold,
fontSize: this.winUIConfig.layout.text.fontSize,
rgb: this.winUIConfig.layout.text.color,
shadow: {
rgb: this.winUIConfig.layout.text.shadowColor,
offset: [ this.winUIConfig.layout.text.shadowOffsetX, this.winUIConfig.layout.text.shadowOffsetY ]
},
alpha: [ function(t) {
return e.domain.winUICmp.textAlpha[t];
}, [ this.domain.winUICmp, "textAlpha" ] ]
}), ae.Spine({
name: "spine",
spineUrl: this.assetsConfig.gameplayStamina1Spine.url,
animation: {
name: this.assetsConfig.gameplayStamina1Spine.animName.in,
loop: !1
},
x: this.winUIConfig.layout.spine.x,
y: this.winUIConfig.layout.spine.y,
alpha: [ function(t) {
return e.domain.winUICmp.animAlpha[t];
}, [ this.domain.winUICmp, "animAlpha" ] ]
}));
};
t.prototype.renderCondition = function() {
return !0;
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p, u, s, y;
i([ ae.entityRenderer, ae.bindAtom("G12_FHeartSystem_WinUIDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FBase_TextureCfg"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "textureCfg", void 0);
i([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "constCfg", void 0);
i([ ae.bindAtom("G12_FBase_CommonFontAsset"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "commonFontAsset", void 0);
i([ ae.bindAtom("G12_FHeartSystem_AssetConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "assetsConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_WinUIConfig"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "winUIConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_HeartConfig"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "heartConfig", void 0);
i([ ae.bindAtom("G12_FHeartSystem_WinUIPositionChangedRouter"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "winUIPositionChangedRouter", void 0);
return i([ ae.atomClass("G12_FHeartSystem_WinUIRender") ], t);
}(ae.RenderAtom);
o.G12_FHeartSystem_WinUIRender = c;
cc._RF.pop();
}, {} ]
}, {}, [ "G12_FHeartSystem_AeIndex", "G12_FHeartSystem_Namespace", "G12_FHeartSystem_BezierCmp", "G12_FHeartSystem_GetUIBigHeartCmp", "G12_FHeartSystem_HomeUIListItemCmp", "G12_FHeartSystem_HomeUIRewardCmp", "G12_FHeartSystem_HpHUDCmp", "G12_FHeartSystem_TweenUICmp", "G12_FHeartSystem_WinUICmp", "G12_FHeartSystem_AssetConfig", "G12_FHeartSystem_AssetStyleConfig", "G12_FHeartSystem_HeartConfig", "G12_FHeartSystem_EmptyUIConfig", "G12_FHeartSystem_FailUIConfig", "G12_FHeartSystem_GetUIConfig", "G12_FHeartSystem_GiveUpUIConfig", "G12_FHeartSystem_HomeUIConfig", "G12_FHeartSystem_HpHUDConfig", "G12_FHeartSystem_LangueConfig", "G12_FHeartSystem_QuitUIConfig", "G12_FHeartSystem_UIConfig", "G12_FHeartSystem_WinUIConfig", "G12_FHeartSystem_EmptyUIDomain", "G12_FHeartSystem_FailUIBigHeartDomain", "G12_FHeartSystem_FailUIDomain", "G12_FHeartSystem_GetUIBigHeartDomain", "G12_FHeartSystem_GetUIDomain", "G12_FHeartSystem_GiveUpUIDomain", "G12_FHeartSystem_BtnSettingDomain", "G12_FHeartSystem_HomeUIBigHeartDomain", "G12_FHeartSystem_HomeUIDomain", "G12_FHeartSystem_HomeUIEnterBtnDomain", "G12_FHeartSystem_HomeUIInputBlockerDomain", "G12_FHeartSystem_HomeUIListContainerDomain", "G12_FHeartSystem_HomeUIListItemDomain", "G12_FHeartSystem_HomeUIRewardDomain", "G12_FHeartSystem_HomeUIRewardFlyTextDomain", "G12_FHeartSystem_HomeUITopMaskDomain", "G12_FHeartSystem_SettingPanelDomain", "G12_FHeartSystem_HpHUDAddBubleDomain", "G12_FHeartSystem_HpHUDBigHeartDomain", "G12_FHeartSystem_QuitBtnDomain", "G12_FHeartSystem_QuitUIDomain", "G12_FHeartSystem_WinUIBigHeartDomain", "G12_FHeartSystem_WinUIDomain", "G12_FHeartSystem_GameRuntimeReportFunc", "G12_FHeartSystem_HeartMgrFunc", "G12_FHeartSystem_UIMgrFunc", "G12_FHeartSystem_AdRefillHeartFunc", "G12_FHeartSystem_AddHeartFunc", "G12_FHeartSystem_CheckEnterLevelFunc", "G12_FHeartSystem_CheckRecoveryFunc", "G12_FHeartSystem_CostHeartFunc", "G12_FHeartSystem_ExecuteRevivePageRetryFunc", "G12_FHeartSystem_FlyHeartCompleteFunc", "G12_FHeartSystem_GetDateNowFunc", "G12_FHeartSystem_GetEnterCostHeartFunc", "G12_FHeartSystem_GetFailCostHeartFunc", "G12_FHeartSystem_HandleConfirmedLevelExitFunc", "G12_FHeartSystem_HandleReturnBlockRouteFunc", "G12_FHeartSystem_IsHeartSystemActiveFunc", "G12_FHeartSystem_ProcessFailOrAbandonFunc", "G12_FHeartSystem_ProcessVictoryFunc", "G12_FHeartSystem_RefreshRecoveryFunc", "G12_FHeartSystem_ResetDailyAdRefillFunc", "G12_FHeartSystem_TryCompletePendingRetryFunc", "G12_FHeartSystem_TryEnterLevelFunc", "G12_FHeartSystem_TryOpenRetryEmptyUIFunc", "G12_FHeartSystem_TrySkipInterAdOnZeroHeartFunc", "G12_FHeartSystem_UpdateGameStatesFunc", "G12_FHeartSystem_UpdateRecoveryIntervalFunc", "G12_FHeartSystem_OpenGiveUpPageFunc", "G12_FHeartSystem_OpenNotEnoughHeartPageFunc", "G12_FHeartSystem_OpenOuterMapFunc", "G12_FHeartSystem_CreateUIHeartListFunc", "G12_FHeartSystem_GetBezierPosFunc", "G12_FHeartSystem_GetCmpBezierPosFunc", "G12_FHeartSystem_GetLineRatioPosFunc", "G12_FHeartSystem_GetTopbarYFunc", "G12_FHeartSystem_HandleShowAdSuccFunc", "G12_FHeartSystem_PlayCollectSfxFunc", "G12_FHeartSystem_ShowAdFunc", "G12_FHeartSystem_StartHeartRecoveryAnimFunc", "G12_FHeartSystem_UICfgMapFunc", "G12_FHeartSystem_CreateFailBigHeartFunc", "G12_FHeartSystem_GetFailUILostHeartZIndexFunc", "G12_FHeartSystem_CreateGetUIBigHeartFunc", "G12_FHeartSystem_ApplyHomeLevelConfigFunc", "G12_FHeartSystem_CloseHomeUIFunc", "G12_FHeartSystem_CreateHomeSetUIFunc", "G12_FHeartSystem_CreateHomeUIFunc", "G12_FHeartSystem_CreateHomeUIItemFunc", "G12_FHeartSystem_CreateHomeUIItemListFunc", "G12_FHeartSystem_GetDifficultyLevelCfgFunc", "G12_FHeartSystem_GetDifficultyMaxLevelFunc", "G12_FHeartSystem_GetHomeLevelConfigFunc", "G12_FHeartSystem_IsOpenHomeUIFunc", "G12_FHeartSystem_LoadHomeLevelConfigWindowFunc", "G12_FHeartSystem_PlayHomeUIListSlideAnimFunc", "G12_FHeartSystem_PlayVictoryReturnHomeAnimFunc", "G12_FHeartSystem_SetGamePanelAlphaFunc", "G12_FHeartSystem_CreateHpBigHeartFunc", "G12_FHeartSystem_GetGameLevelTextFunc", "G12_FHeartSystem_GetGameLevelTextOffsetWFunc", "G12_FHeartSystem_GetGameLevelTextOffsetXFunc", "G12_FHeartSystem_GetSurplusTimeFunc", "G12_FHeartSystem_QuitUIFunc", "G12_FHeartSystem_CreateWinBigHeartFunc", "G12_FHeartSystem_GetResultWinContinueBtnYFunc", "G12_FHeartSystem_GetWinUIAddHeartActiveFunc", "G12_FHeartSystem_GetWinUIAddHeartZIndexFunc", "G12_FHeartSystem_GetWinUILayoutPaddingTopFunc", "G12_FHeartSystem_CloseUIFunc", "G12_FHeartSystem_GetUIFunc", "G12_FHeartSystem_GetUISizeFunc", "G12_FHeartSystem_IsUIOpenFunc", "G12_FHeartSystem_OpenUIFunc", "G12_FHeartSystem_AssetsLoad", "G12_FHeartSystem_ClearEmptyUIRewardAdStateOnFailLogic", "G12_FHeartSystem_SkipInterAdOnFailRetryWhenZeroHeartLogic", "G12_FHeartSystem_SkipInterAdOnRetryWhenZeroHeartLogic", "G12_FHeartSystem_SkipInterAdWhenZeroHeartLogic", "G12_FHeartSystem_HeartManagerLogic", "G12_FHeartSystem_RecoveryTickLogic", "G12_FHeartSystem_EnterLevelLogic", "G12_FHeartSystem_ExitToBlockRouterDispatchLogic", "G12_FHeartSystem_ReturnBlockRouterDispatchLogic", "G12_FHeartSystem_ApplyLoadedHomeLevelConfigLogic", "G12_FHeartSystem_HomeLevelConfigCacheLogic", "G12_FHeartSystem_FailLogic", "G12_FHeartSystem_RevivePageRetryLogic", "G12_FHeartSystem_VictoryLogic", "G12_FHeartSystem_HeartRecoverySpineCompleteLogic", "G12_FHeartSystem_SyncHeartViewLogic", "G12_FHeartSystem_EmptyUICloseLogic", "G12_FHeartSystem_EmptyUINativeBackCheckLogic", "G12_FHeartSystem_EmptyUIShowAdLogic", "G12_FHeartSystem_ChangeResultFailedLogic", "G12_FHeartSystem_CreateFailUILogic", "G12_FHeartSystem_GetUICloseLogic", "G12_FHeartSystem_GetUINativeBackCheckLogic", "G12_FHeartSystem_GetUIOpenLogic", "G12_FHeartSystem_GetUIShowAdLogic", "G12_FHeartSystem_GiveUpUICloseLogic", "G12_FHeartSystem_GiveUpUINativeBackCheckLogic", "G12_FHeartSystem_GiveUpUIReturnBlockLogic", "G12_FHeartSystem_ChangeGamePanelAlphaLogic", "G12_FHeartSystem_CloseSettingPanelLogic", "G12_FHeartSystem_CreateHomeSetUILogic", "G12_FHeartSystem_HomeUIEnterBtnLogic", "G12_FHeartSystem_HomeUIFlyHeartSfxLogic", "G12_FHeartSystem_HomeUIListItemClickLogic", "G12_FHeartSystem_HomeUIRewardClickLogic", "G12_FHeartSystem_ReturnBlockLogic", "G12_FHeartSystem_SettingUINativeBackCheckLogic", "G12_FHeartSystem_SyncPendingFlyHeartCompleteOnLoadingEndLogic", "G12_FHeartSystem_UpdateGamePanelAlphaOnHomeUIStateLogic", "G12_FHeartSystem_ChangeGameLevelRenderLogic", "G12_FHeartSystem_CreateGameplayHpHUDLogic", "G12_FHeartSystem_OpenHpHUDAddBubleLogic", "G12_FHeartSystem_HomeUINativeBack2ExitConfirmCheckLogic", "G12_FHeartSystem_QuitBtnLogic", "G12_FHeartSystem_QuitUICloseLogic", "G12_FHeartSystem_QuitUIConfirmLogic", "G12_FHeartSystem_QuitUINativeBackCheckLogic", "G12_FHeartSystem_StartGameCreateQuitBtnLogic", "G12_FHeartSystem_ChangeResultWinLogic", "G12_FHeartSystem_CreateWinUILogic", "G12_FHeartSystem_SyncWinUIPositionLogic", "G12_FHeartSystem_WinUIFlyHeartLogic", "G12_FHeartSystem_WinUIFlyHeartSfxLogic", "G12_FHeartSystem_HomeUIListItemAndRewardRelation", "G12_FHeartSystem_EmptyUIRender", "G12_FHeartSystem_FailUIBigHeartRender", "G12_FHeartSystem_FailUIRender", "G12_FHeartSystem_GetUIBigHeartRender", "G12_FHeartSystem_GetUIRender", "G12_FHeartSystem_GiveUpUIRender", "G12_FHeartSystem_BtnSettingRender", "G12_FHeartSystem_HomeUIBigHeartRender", "G12_FHeartSystem_HomeUIEnterBtnRender", "G12_FHeartSystem_HomeUIInputBlockerRender", "G12_FHeartSystem_HomeUIListContainerRender", "G12_FHeartSystem_HomeUIListItemRender", "G12_FHeartSystem_HomeUIRender", "G12_FHeartSystem_HomeUIRewardFlyTextRender", "G12_FHeartSystem_HomeUIRewardRender", "G12_FHeartSystem_HomeUITopMaskRender", "G12_FHeartSystem_SettingPanelRender", "G12_FHeartSystem_HpHUDAddBubleRender", "G12_FHeartSystem_HpHUDBigHeartRender", "G12_FHeartSystem_QuitBtnRender", "G12_FHeartSystem_QuitUIRender", "G12_FHeartSystem_WinUIBigHeartRender", "G12_FHeartSystem_WinUIRender", "G12_FHeartSystem_HeartRecoverySpineCompleteRouter", "G12_FHeartSystem_TweenSyncHeartViewRouter", "G12_FHeartSystem_EmptyUICloseRouter", "G12_FHeartSystem_EmptyUINativeBackRouter", "G12_FHeartSystem_EmptyUIShowAdRouter", "G12_FHeartSystem_GetUICloseRouter", "G12_FHeartSystem_GetUINativeBackRouter", "G12_FHeartSystem_GetUIShowAdRouter", "G12_FHeartSystem_GiveUpUICloseRouter", "G12_FHeartSystem_GiveUpUINativeBackRouter", "G12_FHeartSystem_GiveUpUIReturnBlockRouter", "G12_FHeartSystem_CloseSettingRouter", "G12_FHeartSystem_HomeUIClickEnterBtnRouter", "G12_FHeartSystem_HomeUIClickListItemRouter", "G12_FHeartSystem_HomeUIFlyHeartSfxRouter", "G12_FHeartSystem_HomeUIRewardClickRouter", "G12_FHeartSystem_JsonData2HomeLevelConfigLoadedRouter", "G12_FHeartSystem_ReturnBlockRouter", "G12_FHeartSystem_Setting2UIRouter", "G12_FHeartSystem_SettingUINativeBackRouter", "G12_FHeartSystem_HpHUDClickRouter", "G12_FHeartSystem_HpHUDOpenAddBubleRouter", "G12_FHeartSystem_PageShowRouter", "G12_FHeartSystem_HomeUINativeBack2ExitConfirmRouter", "G12_FHeartSystem_QuitBtnClickRouter", "G12_FHeartSystem_QuitUICloseBtnClickRouter", "G12_FHeartSystem_QuitUIConfirmBtnClickRouter", "G12_FHeartSystem_QuitUINativeBackRouter", "G12_FHeartSystem_WinUIFlyHeartRouter", "G12_FHeartSystem_WinUIFlyHeartSfxRouter", "G12_FHeartSystem_WinUIPositionChangedRouter", "G12_FHeartSystem_HpHUDClickRouterLogic", "G12_FHeartSystem_HpHUDOpenAddBubleRouterLogic", "G12_FHeartSystem_HeartRecoverySpineCompleteSignal", "G12_FHeartSystem_SyncHeartViewSignal", "G12_FHeartSystem_EmptyUICloseSignal", "G12_FHeartSystem_EmptyUIShowAdSignal", "G12_FHeartSystem_GetUICloseSignal", "G12_FHeartSystem_GetUIOpenSignal", "G12_FHeartSystem_GetUIShowAdSignal", "G12_FHeartSystem_GiveUpUICloseSignal", "G12_FHeartSystem_GiveUpUIReturnBlockSignal", "G12_FHeartSystem_CloseSettingSignal", "G12_FHeartSystem_GameSettingSignal", "G12_FHeartSystem_HomeLevelConfigLoadedSignal", "G12_FHeartSystem_HomeUIClickEnterBtnSignal", "G12_FHeartSystem_HomeUIClickListItemSignal", "G12_FHeartSystem_HomeUIFlyHeartSfxSignal", "G12_FHeartSystem_HomeUIRewardClickSignal", "G12_FHeartSystem_ReturnBlockSignal", "G12_FHeartSystem_AddHpSignal", "G12_FHeartSystem_HpHUDOpenAddBubleSignal", "G12_FHeartSystem_PageShowSignal", "G12_FHeartSystem_CloseQuitUISignal", "G12_FHeartSystem_OpenQuitUISignal", "G12_FHeartSystem_QuitConfirmSignal", "G12_FHeartSystem_WinUIFlyHeartSfxSignal", "G12_FHeartSystem_WinUIFlyHeartSignal", "G12_FHeartSystem_WinUIPositionChangedSignal" ]);
//# sourceMappingURL=index.js.map
