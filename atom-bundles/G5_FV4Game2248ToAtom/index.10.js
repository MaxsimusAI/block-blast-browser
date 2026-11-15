window.__require = function e(t, o, n) {
function a(i, p) {
if (!o[i]) {
if (!t[i]) {
var c = i.split("/");
c = c[c.length - 1];
if (!t[c]) {
var u = "function" == typeof __require && __require;
if (!p && u) return u(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = c;
}
var f = o[i] = {
exports: {}
};
t[i][0].call(f.exports, function(e) {
return a(t[i][1][e] || e);
}, f, f.exports, e, t, o, n);
}
return o[i].exports;
}
for (var r = "function" == typeof __require && __require, i = 0; i < n.length; i++) a(n[i]);
return a;
}({
G5_FV4Game2248ToAtom_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f67c3yRWoNDB4fte2jDlplK", "G5_FV4Game2248ToAtom_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FV4Game2248ToAtom = void 0;
var n = e("./G5_FV4Game2248ToAtom_Namespace");
Object.defineProperty(o, "G5_FV4Game2248ToAtom", {
enumerable: !0,
get: function() {
return n.G5_FV4Game2248ToAtom;
}
});
cc._RF.pop();
}, {
"./G5_FV4Game2248ToAtom_Namespace": "G5_FV4Game2248ToAtom_Namespace"
} ],
G5_FV4Game2248ToAtom_ComboPopupRenderLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "40a014YIAJA0rt6GBi9Gn90", "G5_FV4Game2248ToAtom_ComboPopupRenderLogic");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FV4Game2248ToAtom_ComboPopupRenderLogic = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
delete this.comboPopupRender.ComboSpine.event.complete;
};
var o;
r([ ae.onChain, ae.bindAtom("G5_FBase_ComboPopupRender"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "comboPopupRender", void 0);
return r([ ae.atomClass("G5_FV4Game2248ToAtom_ComboPopupRenderLogic") ], t);
}(ae.LogicAtom);
o.G5_FV4Game2248ToAtom_ComboPopupRenderLogic = p;
cc._RF.pop();
}, {} ],
G5_FV4Game2248ToAtom_Data: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "88783O6kmlI67qBToxDnzCy", "G5_FV4Game2248ToAtom_Data");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, p = this && this.__read || function(e, t) {
var o = "function" == typeof Symbol && e[Symbol.iterator];
if (!o) return e;
var n, a, r = o.call(e), i = [];
try {
for (;(void 0 === t || t-- > 0) && !(n = r.next()).done; ) i.push(n.value);
} catch (e) {
a = {
error: e
};
} finally {
try {
n && !n.done && (o = r.return) && o.call(r);
} finally {
if (a) throw a.error;
}
}
return i;
}, c = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(p(arguments[t]));
return e;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FV4Game2248ToAtom_Data = void 0;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.variantCondition = function() {
return !0;
};
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = JSON.parse(e.getStorageItem("core_local_data")), o = e.gameInitLogic.storage;
if (!(o.dataVersion >= 2)) {
if (t) {
o.dataVersion = 3;
var n = t.boardGrid;
if ((null == n ? void 0 : n.length) > 0) {
var a = c(n).reverse().flat().map(function(e) {
return e.num || 0;
});
o.boardSnapshot = a.join(",");
o.maxValue = Math.max.apply(Math, c(a));
}
o.score = t.score || 0;
o.blastCount = t.bigRoundBlastCount || 0;
var r = t.bigRoundInitBoard || "";
o.initialBoardSnapshot = r ? r.split("|").reverse().join("|") : "";
o.reviveShowCount = t.reviveShowCount || 0;
o.rewardAdClickCount = t.reviveClickCount || 0;
o.reviveSuccessCount = t.reviveSuccessCount || 0;
var i = e.persistentDataLogic.storage;
t.usrMaxGridNum > 0 && (i.historicalMaxValue = t.usrMaxGridNum);
t.roundCount > 0 && (i.gameId = t.roundCount - 1);
var p = e.guideLogic.storage;
p.hasCompletedGuide = !t.isNewbie;
var u = e.settingLogic.storage;
u.soundVolume = t.soundEnable ? 1 : 0;
u.musicVolume = t.musicEnable ? 1 : 0;
u.vibrationEnabled = !1 !== t.vibrationEnable;
i.bestScore = t.score || 0;
p.justCompletedGuide = !1;
o.isReplay = !1;
console.log("[MigrateStorage] A项目数据迁移完成");
}
if (!(o.dataVersion >= 2)) {
console.log("[MigrateStorage] 迁移存储数据: 实际值 → 幂指数 (v" + o.dataVersion + " → v2)");
if (o.boardSnapshot) {
var f = o.boardSnapshot.split(",").map(Number).map(function(t) {
return t > 0 ? e.log2(t) : 0;
});
o.boardSnapshot = f.join(",");
console.log("[MigrateStorage] boardSnapshot 已迁移");
}
if (o.maxValue > 0) {
var m = o.maxValue;
o.maxValue = e.log2(m);
console.log("[MigrateStorage] maxValue 已迁移:", m, "→", o.maxValue);
}
var s = e.persistentDataLogic.storage;
if (s.historicalMaxValue > 0) {
var d = s.historicalMaxValue;
s.historicalMaxValue = e.log2(d);
console.log("[MigrateStorage] historicalMaxValue 已迁移:", d, "→", s.historicalMaxValue);
}
o.dataVersion = 2;
}
}
};
};
var o, n, p, u, f, m, s;
r([ ae.variantOf, ae.bindAtom("G5_FBase_MigrateStorageData"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "source", void 0);
r([ ae.bindAtom("G5_FBase_Log2"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "log2", void 0);
r([ ae.bindAtom("G5_FBase_OnGameInit"), i("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "gameInitLogic", void 0);
r([ ae.bindAtom("G5_FBase_PersistentDataLogic"), i("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "persistentDataLogic", void 0);
r([ ae.bindAtom("G_FAtom_GetStorageItem"), i("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getStorageItem", void 0);
r([ ae.bindAtom("G5_FBase_OnGuideStart"), i("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "guideLogic", void 0);
r([ ae.bindAtom("G5_FBase_OnSettingShow"), i("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "settingLogic", void 0);
return r([ ae.atomClass("G5_FV4Game2248ToAtom_Data") ], t);
}(ae.VariantAtom);
o.G5_FV4Game2248ToAtom_Data = u;
cc._RF.pop();
}, {} ],
G5_FV4Game2248ToAtom_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3c53cqGfUZHk5P1SZtKCxJp", "G5_FV4Game2248ToAtom_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FV4Game2248ToAtom = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "非原子玩家数据转换成原子玩法";
(function(e) {
e.Name = "G5";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FV4Game2248ToAtom"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 10] = "Version";
e.CreateTime = "2026-04-08 16:03:42";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G5_FV4Game2248ToAtom || (o.G5_FV4Game2248ToAtom = {}));
cc._RF.pop();
}, {} ],
G5_FV4Game2248ToAtom_NewGameSnapshot: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f0d02S5BB1LyLoy9UntYLu9", "G5_FV4Game2248ToAtom_NewGameSnapshot");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FV4Game2248ToAtom_NewGameSnapshot = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.saveBoardSnapshot();
};
var o, n, p;
r([ ae.signalEnd, ae.onChain, ae.bindAtom("G5_FBase_NewGame"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "newGameSignal", void 0);
r([ ae.bindAtom("G5_FBase_SaveBoardSnapshot"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "saveBoardSnapshot", void 0);
r([ ae.bindAtom("G5_FBase_OnGameInit"), i("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "gameInitLogic", void 0);
return r([ ae.atomClass("G5_FV4Game2248ToAtom_NewGameSnapshot") ], t);
}(ae.LogicAtom);
o.G5_FV4Game2248ToAtom_NewGameSnapshot = p;
cc._RF.pop();
}, {} ],
G5_FV4Game2248ToAtom_OnMergeCompleteVariant: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9a831Hujy1ByK8QemT3RVRR", "G5_FV4Game2248ToAtom_OnMergeCompleteVariant");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FV4Game2248ToAtom_OnMergeCompleteVariant = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.variantCondition = function() {
return !0;
};
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n) {
var a = e.comboPopupDomain.collect()[0];
if (a) {
var r = e.comboPopupDomain.comboPopupData;
r.row.set(a, n.row[t]);
r.col.set(a, n.col[t]);
r.comboCount.set(a, o);
r.alpha.set(a, 0);
r.animName.set(a, "");
r.numAlpha.set(a, 0);
var i = e.scorePopupConfig.riseDuration;
e.tween(a, [ [ ae.TweenStepType.Delay, i ], [ ae.TweenStepType.To, r, {
alpha: 1,
animName: e.comboPopupConfig.animName
}, 0 ], [ ae.TweenStepType.Delay, .83 ], [ ae.TweenStepType.To, r, {
alpha: 0,
comboCount: 0,
animName: "",
numAlpha: 0
}, 0 ], [ ae.TweenStepType.Router, e.comboAnimCompleteRouter ] ]);
e.tweenSlotAlpha(a, r, "numAlpha", {
fadeInDuration: .33,
holdDuration: .17,
fadeOutDuration: .33
}, i);
}
};
};
var o, n, p, c, u, f, m;
r([ ae.variantOf, ae.bindAtom("G5_FBase_ShowComboPopup"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "source", void 0);
r([ ae.bindAtom("G5_FBase_ComboPopupDomain"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "comboPopupDomain", void 0);
r([ ae.bindAtom("G5_FBase_ComboPopupConfig"), i("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "comboPopupConfig", void 0);
r([ ae.bindAtom("G5_FBase_ScorePopupConfig"), i("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "scorePopupConfig", void 0);
r([ ae.bindAtom("G_FAtom_Tween"), i("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "tween", void 0);
r([ ae.bindAtom("G5_FBase_TweenSlotAlpha"), i("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tweenSlotAlpha", void 0);
r([ ae.bindAtom("G5_FBase_ComboAnimCompleteRouter"), i("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "comboAnimCompleteRouter", void 0);
return r([ ae.atomClass("G5_FV4Game2248ToAtom_OnMergeCompleteVariant") ], t);
}(ae.VariantAtom);
o.G5_FV4Game2248ToAtom_OnMergeCompleteVariant = p;
cc._RF.pop();
}, {} ]
}, {}, [ "G5_FV4Game2248ToAtom_AeIndex", "G5_FV4Game2248ToAtom_Namespace", "G5_FV4Game2248ToAtom_ComboPopupRenderLogic", "G5_FV4Game2248ToAtom_Data", "G5_FV4Game2248ToAtom_NewGameSnapshot", "G5_FV4Game2248ToAtom_OnMergeCompleteVariant" ]);