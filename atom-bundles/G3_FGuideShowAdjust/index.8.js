window.__require = function e(t, i, o) {
function n(d, u) {
if (!i[d]) {
if (!t[d]) {
var s = d.split("/");
s = s[s.length - 1];
if (!t[s]) {
var a = "function" == typeof __require && __require;
if (!u && a) return a(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + d + "'");
}
d = s;
}
var c = i[d] = {
exports: {}
};
t[d][0].call(c.exports, function(e) {
return n(t[d][1][e] || e);
}, c, c.exports, e, t, i, o);
}
return i[d].exports;
}
for (var r = "function" == typeof __require && __require, d = 0; d < o.length; d++) n(o[d]);
return n;
}({
G3_FGuideShowAdjust_AeIndex: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "9febbXSYJVBsrw6mpgMxrGT", "G3_FGuideShowAdjust_AeIndex");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FGuideShowAdjust = void 0;
var o = e("./G3_FGuideShowAdjust_Namespace");
Object.defineProperty(i, "G3_FGuideShowAdjust", {
enumerable: !0,
get: function() {
return o.G3_FGuideShowAdjust;
}
});
cc._RF.pop();
}, {
"./G3_FGuideShowAdjust_Namespace": "G3_FGuideShowAdjust_Namespace"
} ],
G3_FGuideShowAdjust_Asset: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "758eftp+lFAf5c7W3C2gqLd", "G3_FGuideShowAdjust_Asset");
var o, n = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
o(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), r = this && this.__decorate || function(e, t, i, o) {
var n, r = arguments.length, d = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) d = Reflect.decorate(e, t, i, o); else for (var u = e.length - 1; u >= 0; u--) (n = e[u]) && (d = (r < 3 ? n(d) : r > 3 ? n(t, i, d) : n(t, i)) || d);
return r > 3 && d && Object.defineProperty(t, i, d), d;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FGuideShowAdjust_Asset = void 0;
var d = e("../../G3_FGuideShowAdjust_Namespace"), u = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url(d.G3_FGuideShowAdjust.FeatureName.Name);
return {
GuideSpine: e("res/spines/gameplay_finger3"),
Btnmove: e("res/textures/btn_move")
};
};
return r([ ae.atomClass("G3_FGuideShowAdjust_Asset") ], t);
}(ae.ConfigAtom);
i.G3_FGuideShowAdjust_Asset = u;
cc._RF.pop();
}, {
"../../G3_FGuideShowAdjust_Namespace": "G3_FGuideShowAdjust_Namespace"
} ],
G3_FGuideShowAdjust_CombatUiGenLogic: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "6e7e8RH/vlERrFDLCCg8ocV", "G3_FGuideShowAdjust_CombatUiGenLogic");
var o, n = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
o(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), r = this && this.__decorate || function(e, t, i, o) {
var n, r = arguments.length, d = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) d = Reflect.decorate(e, t, i, o); else for (var u = e.length - 1; u >= 0; u--) (n = e[u]) && (d = (r < 3 ? n(d) : r > 3 ? n(t, i, d) : n(t, i)) || d);
return r > 3 && d && Object.defineProperty(t, i, d), d;
}, d = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FGuideShowAdjust_CombatUiGenLogic = void 0;
var u = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.combatUiRender.Guide1Spine.spineUrl = this.asset.GuideSpine;
this.combatUiRender.Guide1Spine.y = -50;
this.combatUiRender.Guide1Move.img = this.asset.Btnmove;
this.combatUiRender.Guide1Move.rgb = 16252671;
this.combatUiRender.Guide1Move.widget = {
isAlignLeft: !0,
isAlignBottom: !0,
left: 150,
bottom: 350,
alignMode: ae.WidgetAlignMode.Always
};
this.combatUiRender.Guide1Move.width = 440;
this.combatUiRender.Guide1Move.height = 133;
this.combatUiRender.Guide1Text.fontSize = 43;
this.combatUiRender.Guide1Text.y = 15;
this.combatUiRender.Guide1Text.rgb = 8621990;
this.combatUiRender.Guide6Spine.spineUrl = this.asset.GuideSpine;
this.combatUiRender.Guide6Move.img = this.asset.Btnmove;
this.combatUiRender.Guide6Move.rgb = 16252671;
this.combatUiRender.Guide6Move.widget = {
isAlignLeft: !0,
isAlignBottom: !0,
left: 120,
bottom: 220,
alignMode: ae.WidgetAlignMode.Always
};
this.combatUiRender.Guide6Move.width = 500;
this.combatUiRender.Guide6Move.height = 133;
this.combatUiRender.Guide6Text.fontSize = 30;
this.combatUiRender.Guide6Text.y = 15;
this.combatUiRender.Guide6Text.text = "Two-finger pinch to see more";
this.combatUiRender.Guide6Text.rgb = 8621990;
this.combatUiRender.Guide10Spine.spineUrl = this.asset.GuideSpine;
var e = this.hasFeature("G3_FNewCombatUiShow") ? 50 : this.combatUiRender.Ray.widget.bottom;
this.combatUiRender.GuideMove.img = this.asset.Btnmove;
this.combatUiRender.GuideMove.rgb = 16252671;
this.combatUiRender.GuideMove.widget = {
isAlignRight: !0,
isAlignBottom: !0,
right: 30,
bottom: [ function() {
return e + 250 + 166;
}, [ this.bannerAdLogic, "runtime", "showed" ] ],
alignMode: ae.WidgetAlignMode.Always
};
this.combatUiRender.GuideMove.width = 500;
this.combatUiRender.GuideMove.height = 133;
this.combatUiRender.GuideMove.scaleX = -1;
this.combatUiRender.GuideText.fontSize = 36;
this.combatUiRender.GuideText.y = 15;
this.combatUiRender.GuideText.scaleX = -1;
this.combatUiRender.GuideText.text = "Tap to see arrow way";
this.combatUiRender.GuideText.rgb = 8621990;
};
var i, o, u, s, a;
r([ ae.onChain, ae.bindAtom("G3_FBase_CombatUiRender"), d("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "combatUiRender", void 0);
r([ ae.bindAtom("G3_FGuideShowAdjust_Asset"), d("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "asset", void 0);
r([ ae.bindAtom("G3_FBase_RewardAdReadyLogic"), d("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "rewardAdReadyLogic", void 0);
r([ ae.bindAtom("G_FAtom_HasFeature"), d("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "hasFeature", void 0);
r([ ae.bindAtom("G3_FBase_BannerAdLogic"), d("design:type", "function" == typeof (a = "undefined" != typeof ae && ae.AtomTypeInfer) ? a : Object) ], t.prototype, "bannerAdLogic", void 0);
return r([ ae.atomClass("G3_FGuideShowAdjust_CombatUiGenLogic") ], t);
}(ae.LogicAtom);
i.G3_FGuideShowAdjust_CombatUiGenLogic = u;
cc._RF.pop();
}, {} ],
G3_FGuideShowAdjust_Namespace: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "560ec9Cw2lMQYj0yasQH12w", "G3_FGuideShowAdjust_Namespace");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FGuideShowAdjust = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "新手引导显示调整";
(function(e) {
e.Name = "G3";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FGuideShowAdjust"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 8] = "Version";
e.CreateTime = "2026-04-13 17:18:14";
})(e.BundleInfo || (e.BundleInfo = {}));
})(i.G3_FGuideShowAdjust || (i.G3_FGuideShowAdjust = {}));
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FGuideShowAdjust_AeIndex", "G3_FGuideShowAdjust_Namespace", "G3_FGuideShowAdjust_Asset", "G3_FGuideShowAdjust_CombatUiGenLogic" ]);