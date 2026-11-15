window.__require = function e(t, o, i) {
function n(r, c) {
if (!o[r]) {
if (!t[r]) {
var s = r.split("/");
s = s[s.length - 1];
if (!t[s]) {
var p = "function" == typeof __require && __require;
if (!c && p) return p(s, !0);
if (a) return a(s, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = s;
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
G3_FNewCombatUiShow_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "198ebZMfCpGzpmLlKDxkyZV", "G3_FNewCombatUiShow_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewCombatUiShow = void 0;
var i = e("./G3_FNewCombatUiShow_Namespace");
Object.defineProperty(o, "G3_FNewCombatUiShow", {
enumerable: !0,
get: function() {
return i.G3_FNewCombatUiShow;
}
});
cc._RF.pop();
}, {
"./G3_FNewCombatUiShow_Namespace": "G3_FNewCombatUiShow_Namespace"
} ],
G3_FNewCombatUiShow_AssetGenLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "92d41LFt71GtJg2qS9eNbcy", "G3_FNewCombatUiShow_AssetGenLogic");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewCombatUiShow_AssetGenLogic = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.baseAsset.IconDisplay = this.asset.IconDisplay;
this.baseAsset.IconHidden = this.asset.IconHidden;
this.baseAsset.IconMesh = this.asset.IconMesh;
};
var o, i;
a([ ae.onChain, ae.bindAtom("G3_FBase_Asset"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "baseAsset", void 0);
a([ ae.bindAtom("G3_FNewCombatUiShow_Asset"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "asset", void 0);
return a([ ae.atomClass("G3_FNewCombatUiShow_AssetGenLogic") ], t);
}(ae.LogicAtom);
o.G3_FNewCombatUiShow_AssetGenLogic = c;
cc._RF.pop();
}, {} ],
G3_FNewCombatUiShow_Asset: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7fb22OpJApFNIaWAgwcJGXZ", "G3_FNewCombatUiShow_Asset");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewCombatUiShow_Asset = void 0;
var r = e("../../G3_FNewCombatUiShow_Namespace"), c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url(r.G3_FNewCombatUiShow.FeatureName.Name);
return {
PanelTop: e("res/textures/panel_top"),
IconHp: e("res/textures/icon_hp"),
BtnLoading: e("res/textures/btn_loading"),
IconDisplay: e("res/textures/icon_display"),
IconHidden: e("res/textures/icon_idden"),
IconMesh: e("res/textures/icon_mesh")
};
};
return a([ ae.atomClass("G3_FNewCombatUiShow_Asset") ], t);
}(ae.ConfigAtom);
o.G3_FNewCombatUiShow_Asset = c;
cc._RF.pop();
}, {
"../../G3_FNewCombatUiShow_Namespace": "G3_FNewCombatUiShow_Namespace"
} ],
G3_FNewCombatUiShow_CombatHintAdLogicVariant: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7534c7U65VMdJCFGQHwVNVO", "G3_FNewCombatUiShow_CombatHintAdLogicVariant");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewCombatUiShow_CombatHintAdLogicVariant = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.variantCondition = function() {
return !0;
};
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
if (e.combatInitLogic.storage.level <= e.rewardAdConfig.hintGameLevel || e.combatInitLogic.storage.hintCount >= e.rewardAdConfig.hintMaxCount) o.runtime.hintAdY = 0; else {
var i = e.worldMeta.worldTime;
if (o.runtime.lastTouchEndTime <= 0) {
o.runtime.lastTouchEndTime = i;
o.runtime.hideTime = i - 1;
}
if (i - o.runtime.lastTouchEndTime > 10) {
if (0 === o.runtime.showTime) {
o.runtime.showTime = i;
o.runtime.hideTime = 0;
}
} else if (0 === o.runtime.hideTime) {
o.runtime.hideTime = i;
o.runtime.showTime = 0;
}
if (o.runtime.showTime > 0) {
var n = e.mathMin((i - o.runtime.showTime) / 1, 1);
o.runtime.hintAdY = 0 + 206 * n;
} else if (o.runtime.hideTime > 0) {
n = e.mathMin((i - o.runtime.hideTime) / 1, 1);
o.runtime.hintAdY = 206 + -206 * n;
} else o.runtime.hintAdY = 0;
}
};
};
var o, i, c, s, p;
a([ ae.variantOf, ae.bindAtom("G3_FBase_CombatHintAdLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "source", void 0);
a([ ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "worldMeta", void 0);
a([ ae.bindAtom("G_FAtom_MathMin"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "mathMin", void 0);
a([ ae.bindAtom("G3_FBase_RewardAdConfig"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "rewardAdConfig", void 0);
a([ ae.bindAtom("G3_FBase_CombatInitLogic"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "combatInitLogic", void 0);
return a([ ae.atomClass("G3_FNewCombatUiShow_CombatHintAdLogicVariant") ], t);
}(ae.VariantAtom);
o.G3_FNewCombatUiShow_CombatHintAdLogicVariant = c;
cc._RF.pop();
}, {} ],
G3_FNewCombatUiShow_CombatUiGenLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "40d91UCHMxNvoxNsT60h46c", "G3_FNewCombatUiShow_CombatUiGenLogic");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
return a > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewCombatUiShow_CombatUiGenLogic = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e, t = this;
this.combatUiRender.TopBg.img = this.asset.PanelTop;
this.combatUiRender.Top.img = this.asset.PanelTop;
this.combatUiRender.TopBaseline.active = !1;
this.combatUiRender.Hp0.img = this.asset.IconHp;
this.combatUiRender.Hp1.img = this.asset.IconHp;
this.combatUiRender.Hp2.img = this.asset.IconHp;
this.combatUiRender.HintAd.img = this.asset.BtnLoading;
this.combatUiRender.HintAd.widget.right = 0;
this.combatUiRender.AdBtnContent.layout.spacingX = [ function() {
return t.rewardAdReadyLogic.runtime.ready ? 15 : -10;
}, [ this.rewardAdReadyLogic, "runtime", "ready" ] ];
this.combatUiRender.text.text = [ function() {
return t.rewardAdReadyLogic.runtime.ready ? "Hint" : " Loading..";
}, [ this.rewardAdReadyLogic, "runtime", "ready" ] ];
this.combatUiRender.Bottom.active = !1;
this.combatUiRender.Ray.widget.bottom = [ function() {
return 216;
}, [ this.bannerAdLogic, "runtime", "showed" ] ];
this.combatUiRender.Ray.widget.alignMode = ae.WidgetAlignMode.Always;
this.combatUiRender.LEVEL.active = !1;
this.combatUiRender.Degree.widget = {
isAlignHorizontalCenter: !0,
isAlignBottom: !0,
bottom: 17,
alignMode: ae.WidgetAlignMode.Always
};
var o = null !== (e = this.getLevelConfigFunction().degree) && void 0 !== e ? e : "";
this.combatUiRender.Hp.widget = "" === o ? {
isAlignHorizontalCenter: !0,
isAlignVerticalCenter: !0,
alignMode: ae.WidgetAlignMode.Always
} : {
isAlignHorizontalCenter: !0,
isAlignBottom: !0,
bottom: 75,
alignMode: ae.WidgetAlignMode.Always
};
this.combatUiRender.mesh.x = 1;
this.combatUiRender.mesh.y = 2;
};
var o, i, c, s, p;
a([ ae.onChain, ae.bindAtom("G3_FBase_CombatUiRender"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "combatUiRender", void 0);
a([ ae.bindAtom("G3_FNewCombatUiShow_Asset"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "asset", void 0);
a([ ae.bindAtom("G3_FBase_RewardAdReadyLogic"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "rewardAdReadyLogic", void 0);
a([ ae.bindAtom("G3_FBase_GetLevelConfigFunction"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "getLevelConfigFunction", void 0);
a([ ae.bindAtom("G3_FBase_BannerAdLogic"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "bannerAdLogic", void 0);
return a([ ae.atomClass("G3_FNewCombatUiShow_CombatUiGenLogic") ], t);
}(ae.LogicAtom);
o.G3_FNewCombatUiShow_CombatUiGenLogic = c;
cc._RF.pop();
}, {} ],
G3_FNewCombatUiShow_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a33f2rdpLpDi5PSMa4JzhKd", "G3_FNewCombatUiShow_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewCombatUiShow = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "新游戏玩法界面显示调整";
(function(e) {
e.Name = "G3";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FNewCombatUiShow"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 8] = "Version";
e.CreateTime = "2026-04-13 16:40:35";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G3_FNewCombatUiShow || (o.G3_FNewCombatUiShow = {}));
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FNewCombatUiShow_AeIndex", "G3_FNewCombatUiShow_Namespace", "G3_FNewCombatUiShow_Asset", "G3_FNewCombatUiShow_AssetGenLogic", "G3_FNewCombatUiShow_CombatHintAdLogicVariant", "G3_FNewCombatUiShow_CombatUiGenLogic" ]);