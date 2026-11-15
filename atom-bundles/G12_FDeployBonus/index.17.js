window.__require = function e(t, o, n) {
function r(c, p) {
if (!o[c]) {
if (!t[c]) {
var f = c.split("/");
f = f[f.length - 1];
if (!t[f]) {
var s = "function" == typeof __require && __require;
if (!p && s) return s(f, !0);
if (i) return i(f, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = f;
}
var a = o[c] = {
exports: {}
};
t[c][0].call(a.exports, function(e) {
return r(t[c][1][e] || e);
}, a, a.exports, e, t, o, n);
}
return o[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < n.length; c++) r(n[c]);
return r;
}({
G12_FDeployBonus_AdaptLevelProgressLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f535boPlypOzIR1K200AeKJ", "G12_FDeployBonus_AdaptLevelProgressLogic");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
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
o.G12_FDeployBonus_AdaptLevelProgressLogic = void 0;
var f = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e, t, o = this.progressDomain.collect();
if (0 !== o.length) {
var n = this.adaptLogic.runtime.offsetY + this.calculateTopYFunc();
try {
for (var r = p(o), i = r.next(); !i.done; i = r.next()) {
var c = i.value;
this.progressDomain.transform.y.set(c, n);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (t = r.return) && t.call(r);
} finally {
if (e) throw e.error;
}
}
}
};
var o, n, f, s;
i([ ae.onChain, ae.bindAtom("G12_FBase_AdaptSignal"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "adaptSignal", void 0);
i([ ae.bindAtom("G12_FBase_AdaptLogic"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "adaptLogic", void 0);
i([ ae.bindAtom("G12_FBase_CalculateTopYFunc"), c("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "calculateTopYFunc", void 0);
i([ ae.bindAtom("G12_FDeployBonus_LevelProgressDomain"), c("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "progressDomain", void 0);
return i([ ae.atomClass("G12_FDeployBonus_AdaptLevelProgressLogic") ], t);
}(ae.LogicAtom);
o.G12_FDeployBonus_AdaptLevelProgressLogic = f;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "badd9cmIFlJZ6Y577ILYqJB", "G12_FDeployBonus_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus = void 0;
var n = e("./G12_FDeployBonus_Namespace");
Object.defineProperty(o, "G12_FDeployBonus", {
enumerable: !0,
get: function() {
return n.G12_FDeployBonus;
}
});
cc._RF.pop();
}, {
"./G12_FDeployBonus_Namespace": "G12_FDeployBonus_Namespace"
} ],
G12_FDeployBonus_AssetCfg: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "09067MoYjtOyZkdqHpjB7QS", "G12_FDeployBonus_AssetCfg");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_AssetCfg = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url(this.styleNameCfg.stylePathName), t = this.url(this.styleNameCfg.normalPathName);
return {
effect_pig_combo: t("res/audios/raw_v4_guy"),
effect_pig_progress: t("res/audios/sfx_ding_ice_50"),
spine_progress_glow: t("res/spines/gameplay_bar"),
effect_pig_rush: t("res/spines/gameplay_rush"),
texturesDir: e("res/textures"),
getGameplayBar: function(t) {
return e("res/textures/gameplay_bar_" + t);
}
};
};
var o;
i([ ae.bindAtom("G12_FDeployBonus_StyleNameCfg"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "styleNameCfg", void 0);
return i([ ae.atomClass("G12_FDeployBonus_AssetCfg") ], t);
}(ae.ConfigAtom);
o.G12_FDeployBonus_AssetCfg = p;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_AssetsLoad: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2ca34KtOyFPFrW2haNTVThx", "G12_FDeployBonus_AssetsLoad");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_AssetsLoad = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineLoad = function() {
var e;
return {
paths: (e = {}, e[ae.LoaderAssetType.SkeletonData] = [ this.assetCfg.spine_progress_glow, this.assetCfg.effect_pig_rush ], 
e[ae.LoaderAssetType.AudioClip] = [ this.assetCfg.effect_pig_combo, this.assetCfg.effect_pig_progress ], 
e[ae.LoaderAssetType.SpriteFrame] = [ this.assetCfg.getGameplayBar(1), this.assetCfg.getGameplayBar(2), this.assetCfg.getGameplayBar(3), this.assetCfg.getGameplayBar(4) ], 
e),
silent: !0
};
};
var o;
i([ ae.bindAtom("G12_FDeployBonus_AssetCfg"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "assetCfg", void 0);
return i([ ae.atomClass("G12_FDeployBonus_AssetsLoad") ], t);
}(ae.LoadAtom);
o.G12_FDeployBonus_AssetsLoad = p;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_ComboCfg: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c986b6+VLBN7aESMNcOcHBP", "G12_FDeployBonus_ComboCfg");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_ComboCfg = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
threshold: 5,
windowSec: 2,
effectDurationSec: 3,
effectAnimation: "in",
effectXOffset: -4,
effectYOffset: -268
};
};
return i([ ae.atomClass("G12_FDeployBonus_ComboCfg") ], t);
}(ae.ConfigAtom);
o.G12_FDeployBonus_ComboCfg = c;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_ComboEffectDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6e6b3+gMh5EfYODOU6grzFE", "G12_FDeployBonus_ComboEffectDomain");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_ComboEffectDomain = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n, p;
i([ ae.bindAtom("G12_FBase_SpineCmp"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "spineCmp", void 0);
i([ ae.bindAtom("G_FAtom_Transform"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G12_FDeployBonus_OneShotEffectLifeCmp"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "lifeCmp", void 0);
return i([ ae.atomClass("G12_FDeployBonus_ComboEffectDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FDeployBonus_ComboEffectDomain = p;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_ComboEffectRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "df5d2O3RctH2bPPb7nlwd01", "G12_FDeployBonus_ComboEffectRender");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_ComboEffectRender = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Spine({
name: "ComboEffectSpine",
spineUrl: this.assetCfg.effect_pig_rush,
animation: {
name: [ function(t) {
return e.comboDomain.spineCmp.name[t];
}, [ this.comboDomain.spineCmp, "name" ] ],
loop: [ function(t) {
return e.comboDomain.spineCmp.loop[t];
}, [ this.comboDomain.spineCmp, "loop" ] ]
},
timeScale: [ function(t) {
return e.comboDomain.spineCmp.timeScale[t];
}, [ this.comboDomain.spineCmp, "timeScale" ] ],
premultipliedAlpha: !1
});
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n;
i([ ae.entityRenderer, ae.bindAtom("G12_FDeployBonus_ComboEffectDomain"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "comboDomain", void 0);
i([ ae.bindAtom("G12_FDeployBonus_AssetCfg"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetCfg", void 0);
return i([ ae.atomClass("G12_FDeployBonus_ComboEffectRender") ], t);
}(ae.RenderAtom);
o.G12_FDeployBonus_ComboEffectRender = p;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_ComboLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c2e7egoMnxKrJpLEIUfV6Wu", "G12_FDeployBonus_ComboLogic");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_ComboLogic = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
timestamps: []
};
};
t.prototype.onExecute = function(e, t) {
if (this.switchCfg.enableCombo && this.clickPigLogic.runtime.isPutOnSuccess) {
for (var o = this.pigDomain.params.bindId[e] ? this.getBindPigEidsByPigEidFunc(e).length : 1, n = this.comboCfg, r = n.threshold, i = n.windowSec, c = n.effectDurationSec, p = n.effectAnimation, f = n.effectXOffset, s = n.effectYOffset, a = this.gameUpdateLogic.runtime.frameStartTime, u = 1e3 * i, l = t.runtime.timestamps, y = 0; y < o; y++) l.push(a);
for (var _ = 0; _ < l.length && a - l[_] > u; ) _++;
_ > 0 && l.splice(0, _);
if (!(l.length < r)) {
l.splice(0, r);
this.triggerOneShotEffectFunc(this.comboDomain, {
audio: this.assetCfg.effect_pig_combo,
anim: p,
loop: !0,
durationSec: c,
xOffset: f,
yOffset: s,
parentInstance: "GamePlate"
});
}
}
};
var o, n, p, f, s, a, u, l, y, _;
i([ ae.signalEnd, ae.onChain, ae.bindAtom("G12_FBase_ClickPigSignal"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "clickPigSignal", void 0);
i([ ae.bindAtom("G12_FBase_ClickPigLogic"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "clickPigLogic", void 0);
i([ ae.bindAtom("G12_FBase_PigDomain"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "pigDomain", void 0);
i([ ae.bindAtom("G12_FBase_GetBindPigEidsByPigEidFunc"), c("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getBindPigEidsByPigEidFunc", void 0);
i([ ae.bindAtom("G12_FBase_AGameUpdateLogic"), c("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "gameUpdateLogic", void 0);
i([ ae.bindAtom("G12_FDeployBonus_AssetCfg"), c("design:type", "function" == typeof (a = "undefined" != typeof ae && ae.AtomTypeInfer) ? a : Object) ], t.prototype, "assetCfg", void 0);
i([ ae.bindAtom("G12_FDeployBonus_ComboCfg"), c("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "comboCfg", void 0);
i([ ae.bindAtom("G12_FDeployBonus_SwitchCfg"), c("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "switchCfg", void 0);
i([ ae.bindAtom("G12_FDeployBonus_ComboEffectDomain"), c("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "comboDomain", void 0);
i([ ae.bindAtom("G12_FDeployBonus_TriggerOneShotEffectFunc"), c("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "triggerOneShotEffectFunc", void 0);
return i([ ae.atomClass("G12_FDeployBonus_ComboLogic") ], t);
}(ae.LogicAtom);
o.G12_FDeployBonus_ComboLogic = p;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_InitLevelProgressLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b1e731Tt+JNPKE+WuioiTYf", "G12_FDeployBonus_InitLevelProgressLogic");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, p = this && this.__read || function(e, t) {
var o = "function" == typeof Symbol && e[Symbol.iterator];
if (!o) return e;
var n, r, i = o.call(e), c = [];
try {
for (;(void 0 === t || t-- > 0) && !(n = i.next()).done; ) c.push(n.value);
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
return c;
}, f = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(p(arguments[t]));
return e;
}, s = this && this.__values || function(e) {
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
o.G12_FDeployBonus_InitLevelProgressLogic = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e, t;
if (this.switchCfg.enableLevelProgress) {
var o = this.nodeInstanceMgrFunc(), n = o.get(o.cfg.GameStaticUI);
if (n) {
var r, i = this.progressDomain.collect(), c = 0 === i.length;
if (c) {
r = this.progressDomain.create();
this.childOf.addChild(n, r);
} else r = i[0];
this.progressDomain.transform.y.set(r, this.adaptLogic.runtime.offsetY + this.calculateTopYFunc());
var p = this.progressDomain.progressCmp;
p.total.set(r, this.blockMgrFunc().getCanCollectCount());
p.finished.set(r, 0);
p.nextMilestoneIndex.set(r, 0);
if (c) {
var a = f(this.levelProgressCfg.milestonePercents, [ this.levelProgressCfg.endPercent ]);
try {
for (var u = s(a), l = u.next(); !l.done; l = u.next()) {
var y = l.value, _ = this.milestoneDomain.create();
this.milestoneDomain.milestoneCmp.percent.set(_, y);
this.milestoneDomain.transform.x.set(_, -this.levelProgressCfg.barWidth / 2 + this.levelProgressCfg.barWidth * (y / 100));
this.milestoneDomain.transform.y.set(_, this.levelProgressCfg.milestoneOffsetY);
this.childOf.addChild(r, _);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
l && !l.done && (t = u.return) && t.call(u);
} finally {
if (e) throw e.error;
}
}
}
}
}
};
var o, n, p, a, u, l, y, _, d, m;
i([ ae.onChain, ae.bindAtom("G12_FBase_LoadBlockAfterSignal"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "loadBlockAfterSignal", void 0);
i([ ae.bindAtom("G12_FBase_BlockMgrFunc"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "blockMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_NodeInstanceMgrFunc"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "nodeInstanceMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_AdaptLogic"), c("design:type", "function" == typeof (a = "undefined" != typeof ae && ae.AtomTypeInfer) ? a : Object) ], t.prototype, "adaptLogic", void 0);
i([ ae.bindAtom("G12_FBase_CalculateTopYFunc"), c("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "calculateTopYFunc", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), c("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G12_FDeployBonus_LevelProgressDomain"), c("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "progressDomain", void 0);
i([ ae.bindAtom("G12_FDeployBonus_LevelMilestoneDomain"), c("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "milestoneDomain", void 0);
i([ ae.bindAtom("G12_FDeployBonus_LevelProgressCfg"), c("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "levelProgressCfg", void 0);
i([ ae.bindAtom("G12_FDeployBonus_SwitchCfg"), c("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "switchCfg", void 0);
return i([ ae.atomClass("G12_FDeployBonus_InitLevelProgressLogic") ], t);
}(ae.LogicAtom);
o.G12_FDeployBonus_InitLevelProgressLogic = a;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_LevelMilestoneCmp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8b664gNg1lHoJh3974aIzhy", "G12_FDeployBonus_LevelMilestoneCmp");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_LevelMilestoneCmp = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
percent: 0
};
};
return i([ ae.atomClass("G12_FDeployBonus_LevelMilestoneCmp") ], t);
}(ae.EntityComponentAtom);
o.G12_FDeployBonus_LevelMilestoneCmp = c;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_LevelMilestoneDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5083cvTYABKdKmKpmO1bN7a", "G12_FDeployBonus_LevelMilestoneDomain");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_LevelMilestoneDomain = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G12_FDeployBonus_LevelMilestoneCmp"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "milestoneCmp", void 0);
return i([ ae.atomClass("G12_FDeployBonus_LevelMilestoneDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FDeployBonus_LevelMilestoneDomain = p;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_LevelMilestoneRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "deb4fxkeSxBFLkMCpEtkZNX", "G12_FDeployBonus_LevelMilestoneRender");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_LevelMilestoneRender = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Text({
name: "LevelMilestone",
text: [ function(t) {
return e.domain.milestoneCmp.percent[t] + "%";
}, [ this.domain.milestoneCmp, "percent" ] ],
fontSize: this.levelProgressCfg.milestoneFontSize,
font: this.commonFontAsset.santralExtraBold,
rgb: this.levelProgressCfg.milestoneColor
});
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p;
i([ ae.entityRenderer, ae.bindAtom("G12_FDeployBonus_LevelMilestoneDomain"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FBase_CommonFontAsset"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "commonFontAsset", void 0);
i([ ae.bindAtom("G12_FDeployBonus_LevelProgressCfg"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "levelProgressCfg", void 0);
return i([ ae.atomClass("G12_FDeployBonus_LevelMilestoneRender") ], t);
}(ae.RenderAtom);
o.G12_FDeployBonus_LevelMilestoneRender = p;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_LevelProgressCfg: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "30445WifnhEW5tOV712DtqJ", "G12_FDeployBonus_LevelProgressCfg");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_LevelProgressCfg = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
milestonePercents: [ 25, 50, 75 ],
endPercent: 100,
barWidth: 395,
milestoneOffsetY: -44,
milestoneFontSize: 22,
milestoneColor: 8405805,
effectAnimation: "in",
effectDurationSec: .8,
effectOffsetY: 0
};
};
return i([ ae.atomClass("G12_FDeployBonus_LevelProgressCfg") ], t);
}(ae.ConfigAtom);
o.G12_FDeployBonus_LevelProgressCfg = c;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_LevelProgressCmp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "11b0fA/9nxCRbE/97iJ/oO0", "G12_FDeployBonus_LevelProgressCmp");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_LevelProgressCmp = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
finished: 0,
total: 0,
nextMilestoneIndex: 0
};
};
return i([ ae.atomClass("G12_FDeployBonus_LevelProgressCmp") ], t);
}(ae.EntityComponentAtom);
o.G12_FDeployBonus_LevelProgressCmp = c;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_LevelProgressDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a5f58mjZCtFQpqmF0kco/Ad", "G12_FDeployBonus_LevelProgressDomain");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_LevelProgressDomain = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G12_FDeployBonus_LevelProgressCmp"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "progressCmp", void 0);
return i([ ae.atomClass("G12_FDeployBonus_LevelProgressDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FDeployBonus_LevelProgressDomain = p;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_LevelProgressRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "26ee2CwNqNGKrmoNyJ41GVR", "G12_FDeployBonus_LevelProgressRender");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_LevelProgressRender = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Node({
name: "LevelProgressRoot",
blockInputEvents: !1
}, ae.Sprite({
name: "LevelProgressBarBase",
img: this.assetCfg.getGameplayBar(3),
sizeMode: ae.SizeMode.Raw
}), ae.Sprite({
name: "LevelProgressBarFill",
img: this.assetCfg.getGameplayBar(2),
sizeMode: ae.SizeMode.Raw,
renderType: ae.RenderType.Filled,
fillType: ae.SpriteFillType.Horizontal,
fillStart: 0,
fillRange: [ function(t) {
var o, n, r = null !== (o = e.domain.progressCmp.finished[t]) && void 0 !== o ? o : 0, i = null !== (n = e.domain.progressCmp.total[t]) && void 0 !== n ? n : 0;
return i <= 0 ? 0 : Math.max(0, Math.min(1, r / i));
}, [ this.domain.progressCmp, "finished" ], [ this.domain.progressCmp, "total" ] ]
}), ae.Sprite({
name: "LevelProgressBarBlueBg",
img: this.assetCfg.getGameplayBar(1),
sizeMode: ae.SizeMode.Raw
}), ae.Sprite({
name: "LevelProgressArrow",
img: this.assetCfg.getGameplayBar(4),
sizeMode: ae.SizeMode.Raw,
x: [ function(t) {
var o, n, r = null !== (o = e.domain.progressCmp.finished[t]) && void 0 !== o ? o : 0, i = null !== (n = e.domain.progressCmp.total[t]) && void 0 !== n ? n : 0, c = i <= 0 ? 0 : Math.max(0, Math.min(1, r / i)), p = e.levelProgressCfg.barWidth;
return -p / 2 + p * c;
}, [ this.domain.progressCmp, "finished" ], [ this.domain.progressCmp, "total" ] ],
y: 33
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p;
i([ ae.entityRenderer, ae.bindAtom("G12_FDeployBonus_LevelProgressDomain"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
i([ ae.bindAtom("G12_FDeployBonus_AssetCfg"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetCfg", void 0);
i([ ae.bindAtom("G12_FDeployBonus_LevelProgressCfg"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "levelProgressCfg", void 0);
return i([ ae.atomClass("G12_FDeployBonus_LevelProgressRender") ], t);
}(ae.RenderAtom);
o.G12_FDeployBonus_LevelProgressRender = p;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fc592EliL5MUplGJbMrSOqW", "G12_FDeployBonus_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "上阵激励效果";
(function(e) {
e.Name = "G12";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FDeployBonus"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 17] = "Version";
e.CreateTime = "2026-05-07 14:43:44";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G12_FDeployBonus || (o.G12_FDeployBonus = {}));
cc._RF.pop();
}, {} ],
G12_FDeployBonus_OneShotEffectLifeCmp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fe92c2ui1xJHZxei8wk2//9", "G12_FDeployBonus_OneShotEffectLifeCmp");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_OneShotEffectLifeCmp = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
remainSec: 0
};
};
return i([ ae.atomClass("G12_FDeployBonus_OneShotEffectLifeCmp") ], t);
}(ae.EntityComponentAtom);
o.G12_FDeployBonus_OneShotEffectLifeCmp = c;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_ProgressEffectDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1b3b6ITMWZJsJ75va/ssDBM", "G12_FDeployBonus_ProgressEffectDomain");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_ProgressEffectDomain = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n, p;
i([ ae.bindAtom("G12_FBase_SpineCmp"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "spineCmp", void 0);
i([ ae.bindAtom("G_FAtom_Transform"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G12_FDeployBonus_OneShotEffectLifeCmp"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "lifeCmp", void 0);
return i([ ae.atomClass("G12_FDeployBonus_ProgressEffectDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FDeployBonus_ProgressEffectDomain = p;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_ProgressEffectRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "137c8nuIilNap66QsRg0VIF", "G12_FDeployBonus_ProgressEffectRender");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_ProgressEffectRender = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Spine({
name: "ProgressEffectSpine",
spineUrl: this.assetCfg.spine_progress_glow,
animation: {
name: [ function(t) {
return e.progressDomain.spineCmp.name[t];
}, [ this.progressDomain.spineCmp, "name" ] ],
loop: [ function(t) {
return e.progressDomain.spineCmp.loop[t];
}, [ this.progressDomain.spineCmp, "loop" ] ]
},
timeScale: [ function(t) {
return e.progressDomain.spineCmp.timeScale[t];
}, [ this.progressDomain.spineCmp, "timeScale" ] ],
premultipliedAlpha: !1
});
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n;
i([ ae.entityRenderer, ae.bindAtom("G12_FDeployBonus_ProgressEffectDomain"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "progressDomain", void 0);
i([ ae.bindAtom("G12_FDeployBonus_AssetCfg"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetCfg", void 0);
return i([ ae.atomClass("G12_FDeployBonus_ProgressEffectRender") ], t);
}(ae.RenderAtom);
o.G12_FDeployBonus_ProgressEffectRender = p;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_ResetComboOnLevelStartLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6c598az+mxFCbqqlNSOw1e+", "G12_FDeployBonus_ResetComboOnLevelStartLogic");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_ResetComboOnLevelStartLogic = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.resetComboRuntimeFunc();
};
var o, n;
i([ ae.onChain, ae.bindAtom("G12_FBase_LoadBlockAfterSignal"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "loadBlockAfterSignal", void 0);
i([ ae.bindAtom("G12_FDeployBonus_ResetComboRuntimeFunc"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "resetComboRuntimeFunc", void 0);
return i([ ae.atomClass("G12_FDeployBonus_ResetComboOnLevelStartLogic") ], t);
}(ae.LogicAtom);
o.G12_FDeployBonus_ResetComboOnLevelStartLogic = p;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_ResetComboRuntimeFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1d529xDWodMGaga6Zqxw0KY", "G12_FDeployBonus_ResetComboRuntimeFunc");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_ResetComboRuntimeFunc = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
e.comboLogic.runtime.timestamps.length = 0;
};
};
var o;
i([ ae.bindAtom("G12_FDeployBonus_ComboLogic"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "comboLogic", void 0);
return i([ ae.atomClass("G12_FDeployBonus_ResetComboRuntimeFunc") ], t);
}(ae.FunctionAtom);
o.G12_FDeployBonus_ResetComboRuntimeFunc = p;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_StyleNameCfg: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "dee94u+KxFPDqROqA6aXnBP", "G12_FDeployBonus_StyleNameCfg");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_StyleNameCfg = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
stylePathName: "G12_FDeployBonus",
normalPathName: "G12_FDeployBonus"
};
};
return i([ ae.atomClass("G12_FDeployBonus_StyleNameCfg") ], t);
}(ae.ConfigAtom);
o.G12_FDeployBonus_StyleNameCfg = c;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_SwitchCfg: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c8229DjRthKHKOJQ7noNWcF", "G12_FDeployBonus_SwitchCfg");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_SwitchCfg = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
enableCombo: !0,
enableLevelProgress: !0
};
};
return i([ ae.atomClass("G12_FDeployBonus_SwitchCfg") ], t);
}(ae.ConfigAtom);
o.G12_FDeployBonus_SwitchCfg = c;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_TickOneShotEffectLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5f605RSHT9G9a81APz/Lt7z", "G12_FDeployBonus_TickOneShotEffectLogic");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_TickOneShotEffectLogic = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this.gameUpdateLogic.runtime.dt;
if (!(e <= 0)) {
this.tickOneShotLifeFunc(this.comboDomain, e);
this.tickOneShotLifeFunc(this.progressDomain, e);
}
};
var o, n, p, f, s;
i([ ae.onChain, ae.bindAtom("G12_FBase_BGameUpdateSignal"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameUpdateSignal", void 0);
i([ ae.bindAtom("G12_FBase_AGameUpdateLogic"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameUpdateLogic", void 0);
i([ ae.bindAtom("G12_FDeployBonus_ComboEffectDomain"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "comboDomain", void 0);
i([ ae.bindAtom("G12_FDeployBonus_ProgressEffectDomain"), c("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "progressDomain", void 0);
i([ ae.bindAtom("G12_FDeployBonus_TickOneShotLifeFunc"), c("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "tickOneShotLifeFunc", void 0);
return i([ ae.atomClass("G12_FDeployBonus_TickOneShotEffectLogic") ], t);
}(ae.LogicAtom);
o.G12_FDeployBonus_TickOneShotEffectLogic = p;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_TickOneShotLifeFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "756c3aZErNHU63VNpyA77sc", "G12_FDeployBonus_TickOneShotLifeFunc");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_TickOneShotLifeFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function(e, t) {
for (var o = e.collect().slice(), n = e.lifeCmp.remainSec, r = 0; r < o.length; r++) {
var i = o[r], c = n[i] - t;
c <= 0 ? e.destroy(i) : n.set(i, c);
}
};
};
return i([ ae.atomClass("G12_FDeployBonus_TickOneShotLifeFunc") ], t);
}(ae.FunctionAtom);
o.G12_FDeployBonus_TickOneShotLifeFunc = c;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_TriggerOneShotEffectFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "87389f4AD9C9ru4PpISjrff", "G12_FDeployBonus_TriggerOneShotEffectFunc");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_TriggerOneShotEffectFunc = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n = e.nodeInstanceMgrFunc(), r = n.get(n.cfg[o.parentInstance]);
if (r) {
var i = t.create();
e.childOf.addChild(r, i);
t.transform.x.set(i, Math.round(e.adaptLogic.runtime.offsetX + o.xOffset));
t.transform.y.set(i, Math.round(e.adaptLogic.runtime.offsetY + o.yOffset));
t.lifeCmp.remainSec.set(i, o.durationSec);
e.audioMgrFunc().playEffect(o.audio, !1);
e.playSpineAnimationFunc(t.spineCmp, i, {
name: o.anim,
loop: o.loop,
timeScale: 1
});
}
};
};
var o, n, p, f, s;
i([ ae.bindAtom("G12_FBase_AudioMgrFunc"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "audioMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_NodeInstanceMgrFunc"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "nodeInstanceMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_PlaySpineAnimationFunc"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "playSpineAnimationFunc", void 0);
i([ ae.bindAtom("G12_FBase_AdaptLogic"), c("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "adaptLogic", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), c("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "childOf", void 0);
return i([ ae.atomClass("G12_FDeployBonus_TriggerOneShotEffectFunc") ], t);
}(ae.FunctionAtom);
o.G12_FDeployBonus_TriggerOneShotEffectFunc = p;
cc._RF.pop();
}, {} ],
G12_FDeployBonus_UpdateLevelProgressLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b4bb5VpBzJFrYsuWl4Lk9Sd", "G12_FDeployBonus_UpdateLevelProgressLogic");
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
var r, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (r = e[p]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FDeployBonus_UpdateLevelProgressLogic = void 0;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this.progressDomain.collect();
if (0 !== e.length) {
var t = e[0], o = this.progressDomain.progressCmp, n = o.total[t];
if (!(n <= 0)) {
var r = this.blockMgrFunc().getCanCollectCount(), i = r >= n ? 0 : n - r;
if (o.finished[t] !== i) {
o.finished.set(t, i);
for (var c = this.levelProgressCfg.milestonePercents, p = o.nextMilestoneIndex[t], f = p; f < c.length && 100 * i >= c[f] * n; ) f++;
if (f !== p) {
o.nextMilestoneIndex.set(t, f);
var s = c[f - 1], a = this.levelProgressCfg.barWidth, u = -a / 2 + a * (s / 100);
this.triggerOneShotEffectFunc(this.progressEffectDomain, {
audio: this.assetCfg.effect_pig_progress,
anim: this.levelProgressCfg.effectAnimation,
loop: !1,
durationSec: this.levelProgressCfg.effectDurationSec,
xOffset: u,
yOffset: this.calculateTopYFunc() + this.levelProgressCfg.effectOffsetY,
parentInstance: "GameSpine"
});
}
}
}
}
};
var o, n, p, f, s, a, u, l;
i([ ae.onChain, ae.bindAtom("G12_FBase_BGameUpdateSignal"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameUpdateSignal", void 0);
i([ ae.bindAtom("G12_FBase_BlockMgrFunc"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "blockMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_CalculateTopYFunc"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "calculateTopYFunc", void 0);
i([ ae.bindAtom("G12_FDeployBonus_AssetCfg"), c("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "assetCfg", void 0);
i([ ae.bindAtom("G12_FDeployBonus_LevelProgressDomain"), c("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "progressDomain", void 0);
i([ ae.bindAtom("G12_FDeployBonus_LevelProgressCfg"), c("design:type", "function" == typeof (a = "undefined" != typeof ae && ae.AtomTypeInfer) ? a : Object) ], t.prototype, "levelProgressCfg", void 0);
i([ ae.bindAtom("G12_FDeployBonus_ProgressEffectDomain"), c("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "progressEffectDomain", void 0);
i([ ae.bindAtom("G12_FDeployBonus_TriggerOneShotEffectFunc"), c("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "triggerOneShotEffectFunc", void 0);
return i([ ae.atomClass("G12_FDeployBonus_UpdateLevelProgressLogic") ], t);
}(ae.LogicAtom);
o.G12_FDeployBonus_UpdateLevelProgressLogic = p;
cc._RF.pop();
}, {} ]
}, {}, [ "G12_FDeployBonus_AeIndex", "G12_FDeployBonus_Namespace", "G12_FDeployBonus_LevelMilestoneCmp", "G12_FDeployBonus_LevelProgressCmp", "G12_FDeployBonus_OneShotEffectLifeCmp", "G12_FDeployBonus_AssetCfg", "G12_FDeployBonus_ComboCfg", "G12_FDeployBonus_LevelProgressCfg", "G12_FDeployBonus_StyleNameCfg", "G12_FDeployBonus_SwitchCfg", "G12_FDeployBonus_ComboEffectDomain", "G12_FDeployBonus_LevelMilestoneDomain", "G12_FDeployBonus_LevelProgressDomain", "G12_FDeployBonus_ProgressEffectDomain", "G12_FDeployBonus_ResetComboRuntimeFunc", "G12_FDeployBonus_TickOneShotLifeFunc", "G12_FDeployBonus_TriggerOneShotEffectFunc", "G12_FDeployBonus_AssetsLoad", "G12_FDeployBonus_AdaptLevelProgressLogic", "G12_FDeployBonus_ComboLogic", "G12_FDeployBonus_InitLevelProgressLogic", "G12_FDeployBonus_ResetComboOnLevelStartLogic", "G12_FDeployBonus_TickOneShotEffectLogic", "G12_FDeployBonus_UpdateLevelProgressLogic", "G12_FDeployBonus_ComboEffectRender", "G12_FDeployBonus_LevelMilestoneRender", "G12_FDeployBonus_LevelProgressRender", "G12_FDeployBonus_ProgressEffectRender" ]);
//# sourceMappingURL=index.js.map
