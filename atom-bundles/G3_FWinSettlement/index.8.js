window.__require = function e(t, n, o) {
function i(a, c) {
if (!n[a]) {
if (!t[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!t[s]) {
var f = "function" == typeof __require && __require;
if (!c && f) return f(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var p = n[a] = {
exports: {}
};
t[a][0].call(p.exports, function(e) {
return i(t[a][1][e] || e);
}, p, p.exports, e, t, n, o);
}
return n[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
G3_FWinSettlement_AeIndex: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "05476A8gEFHz4HZkH4zArFO", "G3_FWinSettlement_AeIndex");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FWinSettlement = void 0;
var o = e("./G3_FWinSettlement_Namespace");
Object.defineProperty(n, "G3_FWinSettlement", {
enumerable: !0,
get: function() {
return o.G3_FWinSettlement;
}
});
cc._RF.pop();
}, {
"./G3_FWinSettlement_Namespace": "G3_FWinSettlement_Namespace"
} ],
G3_FWinSettlement_Asset: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "847a8XLMAxLeZiXJW7b4tkA", "G3_FWinSettlement_Asset");
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FWinSettlement_Asset = void 0;
var a = e("../../G3_FWinSettlement_Namespace"), c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url(a.G3_FWinSettlement.FeatureName.Name);
return {
CongratulationBg: e("res/textures/settlement_pic_titledi"),
Watermark: e("res/textures/icon_watermark"),
ArrowIcon: e("res/textures/icon_arrow"),
PassSpine2: e("res/spines/gameplay_pass_barrier2")
};
};
return r([ ae.atomClass("G3_FWinSettlement_Asset") ], t);
}(ae.ConfigAtom);
n.G3_FWinSettlement_Asset = c;
cc._RF.pop();
}, {
"../../G3_FWinSettlement_Namespace": "G3_FWinSettlement_Namespace"
} ],
G3_FWinSettlement_CombatUiGenLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b2b46D9yghHvKWm0gjsPvg8", "G3_FWinSettlement_CombatUiGenLogic");
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FWinSettlement_CombatUiGenLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.combatUiRender.Congratulation.text = "";
this.combatUiRender.PassSpine.active = !1;
};
var n, o;
r([ ae.onChain, ae.bindAtom("G3_FBase_CombatUiRender"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "combatUiRender", void 0);
r([ ae.bindAtom("G3_FWinSettlement_Asset"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "asset", void 0);
return r([ ae.atomClass("G3_FWinSettlement_CombatUiGenLogic") ], t);
}(ae.LogicAtom);
n.G3_FWinSettlement_CombatUiGenLogic = c;
cc._RF.pop();
}, {} ],
G3_FWinSettlement_Domain: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "749cc11xOBDp4sP5wp1wfI9", "G3_FWinSettlement_Domain");
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FWinSettlement_Domain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var n;
r([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "transform", void 0);
return r([ ae.atomClass("G3_FWinSettlement_Domain") ], t);
}(ae.EntityDomainAtom);
n.G3_FWinSettlement_Domain = c;
cc._RF.pop();
}, {} ],
G3_FWinSettlement_InitLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d042fHeKGVBGJEAah7bZFTa", "G3_FWinSettlement_InitLogic");
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FWinSettlement_InitLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.combatUiDomain.collect();
if (0 !== e.length) {
var t = e[0], n = this.winSettlementDomain.create();
this.childOf.addChild(t, n);
}
};
var n, o, c, s;
r([ ae.onChain, ae.bindAtom("G3_FBase_CombatUiInitSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FWinSettlement_Domain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "winSettlementDomain", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "childOf", void 0);
r([ ae.bindAtom("G3_FBase_CombatUiDomain"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "combatUiDomain", void 0);
return r([ ae.atomClass("G3_FWinSettlement_InitLogic") ], t);
}(ae.LogicAtom);
n.G3_FWinSettlement_InitLogic = c;
cc._RF.pop();
}, {} ],
G3_FWinSettlement_Namespace: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b25bbgQVf9KTqfGFzmSJJkM", "G3_FWinSettlement_Namespace");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FWinSettlement = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "胜利结算显示";
(function(e) {
e.Name = "G3";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FWinSettlement"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 8] = "Version";
e.CreateTime = "2026-04-13 18:11:33";
})(e.BundleInfo || (e.BundleInfo = {}));
})(n.G3_FWinSettlement || (n.G3_FWinSettlement = {}));
cc._RF.pop();
}, {} ],
G3_FWinSettlement_RenderGenLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "816f8uplg9Gva1VB2PxzjRL", "G3_FWinSettlement_RenderGenLogic");
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FWinSettlement_RenderGenLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this;
this.render.WinSettlementBg.alpha = [ function() {
var t = e.worldMeta.worldTime - e.combatDoPassLogic.runtime.fireworksTime;
return t <= 0 ? 0 : t <= .15 ? t / .15 : t <= 1.8 ? 1 : t <= 3.5 ? 1 - (t - 1.8) / 1.7 : 0;
}, [ this.worldMeta, "worldTime" ], [ this.combatDoPassLogic, "runtime", "fireworksTime" ] ];
var t = this.render.CongratulationBg;
t.scale = [ function() {
var t = e.worldMeta.worldTime - e.combatDoPassLogic.runtime.fireworksTime;
return t <= 0 ? 1.5 : t <= .2 ? 1.5 + -.55 * t / .2 : t <= .4 ? .95 + (1 - .95) * (t - .2) / .2 : 1;
}, [ this.worldMeta, "worldTime" ], [ this.combatDoPassLogic, "runtime", "fireworksTime" ] ];
t.alpha = [ function() {
var t = e.worldMeta.worldTime - e.combatDoPassLogic.runtime.fireworksTime;
return t <= 0 ? 0 : t <= .2 ? t / .2 : t <= 1.8 ? 1 : t <= 2.13 ? 1 - (t - 1.8) / (2.13 - 1.8) : 0;
}, [ this.worldMeta, "worldTime" ], [ this.combatDoPassLogic, "runtime", "fireworksTime" ] ];
var n = this.render.ArrowIcon;
n.scale = [ function() {
var t = e.worldMeta.worldTime - e.combatDoPassLogic.runtime.fireworksTime - .1;
return t <= 0 ? .6 : t <= .23 ? .6 + (1.1 - .6) * t / .23 : t <= .43 ? 1.1 + (1 - 1.1) * (t - .23) / (.43 - .23) : 1;
}, [ this.worldMeta, "worldTime" ], [ this.combatDoPassLogic, "runtime", "fireworksTime" ] ];
n.alpha = [ function() {
var t = e.worldMeta.worldTime - e.combatDoPassLogic.runtime.fireworksTime - .1;
return t <= 0 ? 0 : t <= .23 ? t / .23 : t <= 1.7 ? 1 : t <= 2.03 ? 1 - (t - 1.7) / (2.03 - 1.7) : 0;
}, [ this.worldMeta, "worldTime" ], [ this.combatDoPassLogic, "runtime", "fireworksTime" ] ];
var o = this.render.ArrowCountTextContainer;
o.scale = [ function() {
var t = e.worldMeta.worldTime - e.combatDoPassLogic.runtime.fireworksTime - .167;
return t <= 0 ? .6 : t <= .23 ? .6 + (1.1 - .6) * t / .23 : t <= .43 ? 1.1 + (1 - 1.1) * (t - .23) / (.43 - .23) : 1;
}, [ this.worldMeta, "worldTime" ], [ this.combatDoPassLogic, "runtime", "fireworksTime" ] ];
o.alpha = [ function() {
var t = e.worldMeta.worldTime - e.combatDoPassLogic.runtime.fireworksTime - .167;
return t <= 0 ? 0 : t <= .23 ? t / .23 : t <= 1.63 ? 1 : t <= 1.96 ? 1 - (t - 1.63) / (1.96 - 1.63) : 0;
}, [ this.worldMeta, "worldTime" ], [ this.combatDoPassLogic, "runtime", "fireworksTime" ] ];
this.render.PassSpine.spineUrl = this.asset.PassSpine2;
};
var n, o, c, s;
r([ ae.onChain, ae.bindAtom("G3_FWinSettlement_Render"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "render", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "worldMeta", void 0);
r([ ae.bindAtom("G3_FBase_CombatDoPassLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "combatDoPassLogic", void 0);
r([ ae.bindAtom("G3_FWinSettlement_Asset"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "asset", void 0);
return r([ ae.atomClass("G3_FWinSettlement_RenderGenLogic") ], t);
}(ae.LogicAtom);
n.G3_FWinSettlement_RenderGenLogic = c;
cc._RF.pop();
}, {} ],
G3_FWinSettlement_Render: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b9c23EkhsxFEpKyT7auAAP2", "G3_FWinSettlement_Render");
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FWinSettlement_Render = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = this.getSchemeValueFunction("uiWinSettlementWatermarkColor", 5861091);
return ae.Node({
name: "WinSettlement",
widget: {
isAlignTop: !0,
isAlignBottom: !0,
isAlignLeft: !0,
isAlignRight: !0,
alignMode: ae.WidgetAlignMode.Always
},
active: [ function() {
return e.combatDoPassLogic.runtime.fireworks && !e.getLevelConfigFunction().shape;
}, [ this.combatDoPassLogic, "runtime", "fireworks" ], [ this.combatInitLogic, "storage", "level" ] ]
}, ae.Graphics({
name: "WinSettlementBg",
widget: {
isAlignTop: !0,
isAlignBottom: !0,
isAlignLeft: !0,
isAlignRight: !0,
top: 0,
bottom: 0,
left: 0,
right: 0,
alignMode: ae.WidgetAlignMode.Always
},
draw: [ function() {
var t = e.windowSize().width, n = e.windowSize().height, o = e.getSchemeValueFunction("uiWinSettlementBgColor", 14478074);
return [ [ ae.GraphicsCmd.FillColor, o ], [ ae.GraphicsCmd.Rect, -t / 2, -n / 2, t, n ], [ ae.GraphicsCmd.Fill ] ];
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
}, ae.Node({
name: "ArrowContainer",
widget: {
isAlignTop: !0,
isAlignBottom: !0,
isAlignLeft: !0,
isAlignRight: !0,
alignMode: ae.WidgetAlignMode.Always
}
}, ae.Sprite({
name: "Watermark1",
img: this.asset.Watermark,
x: -180,
y: 720,
rgb: t
}), ae.Sprite({
name: "Watermark2",
img: this.asset.Watermark,
x: 290,
y: 720,
rgb: t
}), ae.Sprite({
name: "Watermark3",
img: this.asset.Watermark,
x: -380,
y: 100,
rgb: t
}), ae.Sprite({
name: "Watermark4",
img: this.asset.Watermark,
x: 30,
y: 100,
rgb: t
}), ae.Sprite({
name: "Watermark5",
img: this.asset.Watermark,
x: 320,
y: -150,
rgb: t
}), ae.Sprite({
name: "Watermark6",
img: this.asset.Watermark,
x: -300,
y: -390,
rgb: t
}), ae.Sprite({
name: "Watermark7",
img: this.asset.Watermark,
x: 115,
y: -690,
rgb: t
}))), ae.Sprite({
name: "CongratulationBg",
img: this.asset.CongratulationBg,
x: 0,
y: 465
}, ae.Text({
name: "CongratulationText",
font: this.homeAsset.SpartanBoldFont,
width: 486,
height: 100,
fontSize: 78,
overflow: ae.TextOverflow.SHRINK,
horizontalAlign: ae.TextHorizontalAlign.CENTER,
y: 30,
rgb: [ function() {
return e.getSchemeValueFunction("uiWinSettlementCongratulationColor", 16777215);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
text: [ function() {
var t, n = null !== (t = e.getLevelConfigFunction().congratulation) && void 0 !== t ? t : "";
n.includes("！") && (n = n.replace("！", "!"));
return n;
}, [ this.combatInitLogic, "storage", "level" ] ],
enableBold: !0
})), ae.Sprite({
name: "ArrowIcon",
img: this.asset.ArrowIcon,
x: 0,
y: -46,
rgb: [ function() {
return e.getSchemeValueFunction("uiWinSettlementArrowColor", 4043769);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
}), ae.Node({
name: "ArrowCountTextContainer",
y: -300,
layout: {
type: ae.LayoutType.Horizontal,
resizeMode: ae.LayoutResizeMode.Container,
spacingX: 10
}
}, ae.Node({
name: "xContainer",
width: 60
}, ae.Text({
name: "xText",
font: this.homeAsset.SpartanBoldFont,
fontSize: 122,
rgb: [ function() {
return e.getSchemeValueFunction("uiWinSettlementArrowCountColor", 7050491);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
text: "x",
y: 17
})), ae.Text({
name: "ArrowCountText",
font: this.homeAsset.SpartanBoldFont,
fontSize: 122,
rgb: [ function() {
return e.getSchemeValueFunction("uiWinSettlementArrowCountColor", 7050491);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
text: [ function() {
return e.getLevelConfigFunction().arrow.arrows.length.toString();
}, [ this.combatInitLogic, "storage", "level" ] ],
enableBold: !0
})), ae.Spine({
name: "PassSpine",
spineUrl: [ function() {
return e.getSchemeValueFunction("passSpine", e.baseAsset.PassSpine1);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
alpha: [ function() {
return e.combatDoPassLogic.runtime.fireworks ? 1 : 0;
}, [ this.combatDoPassLogic, "runtime", "fireworks" ] ],
animation: {
name: [ function() {
return "in";
}, [ this.combatDoPassLogic, "runtime", "fireworks" ] ],
loop: !1
}
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var n, o, c, s, f, p, u, m, l, d, _;
r([ ae.entityRenderer, ae.bindAtom("G3_FWinSettlement_Domain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "congratulationDomain", void 0);
r([ ae.bindAtom("G3_FBase_HomeAsset"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "homeAsset", void 0);
r([ ae.bindAtom("G3_FBase_Asset"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "baseAsset", void 0);
r([ ae.bindAtom("G3_FWinSettlement_Asset"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "asset", void 0);
r([ ae.bindAtom("G3_FBase_GetLevelConfigFunction"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getLevelConfigFunction", void 0);
r([ ae.bindAtom("G3_FBase_CombatDoPassLogic"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "combatDoPassLogic", void 0);
r([ ae.bindAtom("G3_FBase_CombatInitLogic"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "combatInitLogic", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "worldMeta", void 0);
r([ ae.bindAtom("G3_FBase_GetSchemeValueFunction"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "getSchemeValueFunction", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "skinInitLogic", void 0);
r([ ae.bindAtom("G_FAtom_GetWinSize"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "windowSize", void 0);
return r([ ae.atomClass("G3_FWinSettlement_Render") ], t);
}(ae.RenderAtom);
n.G3_FWinSettlement_Render = c;
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FWinSettlement_AeIndex", "G3_FWinSettlement_Namespace", "G3_FWinSettlement_Asset", "G3_FWinSettlement_Domain", "G3_FWinSettlement_CombatUiGenLogic", "G3_FWinSettlement_InitLogic", "G3_FWinSettlement_RenderGenLogic", "G3_FWinSettlement_Render" ]);