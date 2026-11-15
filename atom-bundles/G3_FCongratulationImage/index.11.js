window.__require = function t(e, n, o) {
function a(r, c) {
if (!n[r]) {
if (!e[r]) {
var u = r.split("/");
u = u[u.length - 1];
if (!e[u]) {
var f = "function" == typeof __require && __require;
if (!c && f) return f(u, !0);
if (i) return i(u, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = u;
}
var s = n[r] = {
exports: {}
};
e[r][0].call(s.exports, function(t) {
return a(e[r][1][t] || t);
}, s, s.exports, t, e, n, o);
}
return n[r].exports;
}
for (var i = "function" == typeof __require && __require, r = 0; r < o.length; r++) a(o[r]);
return a;
}({
G3_FCongratulationImage_AeIndex: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "aa361YOhuhElbZRXJoc1pCf", "G3_FCongratulationImage_AeIndex");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FCongratulationImage = void 0;
var o = t("./G3_FCongratulationImage_Namespace");
Object.defineProperty(n, "G3_FCongratulationImage", {
enumerable: !0,
get: function() {
return o.G3_FCongratulationImage;
}
});
cc._RF.pop();
}, {
"./G3_FCongratulationImage_Namespace": "G3_FCongratulationImage_Namespace"
} ],
G3_FCongratulationImage_Asset: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8c0ce+PZKJP5o6ifLCq3joV", "G3_FCongratulationImage_Asset");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), i = this && this.__decorate || function(t, e, n, o) {
var a, i = arguments.length, r = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, n, r) : a(e, n)) || r);
return i > 3 && r && Object.defineProperty(e, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FCongratulationImage_Asset = void 0;
var r = t("../../G3_FCongratulationImage_Namespace"), c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineConfig = function() {
var t = this.url(r.G3_FCongratulationImage.FeatureName.Name);
return {
Amazing1: t("res/textures/Amazing1"),
Amazing2: t("res/textures/Amazing2"),
Brilliant1: t("res/textures/Brilliant1"),
Brilliant2: t("res/textures/Brilliant2"),
Fantastic1: t("res/textures/Fantastic1"),
Fantastic2: t("res/textures/Fantastic2"),
Nice1: t("res/textures/Nice1"),
Nice2: t("res/textures/Nice2"),
Spectacular1: t("res/textures/Spectacular1"),
Spectacular2: t("res/textures/Spectacular2"),
Superb1: t("res/textures/Superb1"),
Superb2: t("res/textures/Superb2"),
Terrific1: t("res/textures/Terrific1"),
Terrific2: t("res/textures/Terrific2"),
Magnificent1: t("res/textures/Magnificent1"),
Magnificent2: t("res/textures/Magnificent2"),
Outstanding1: t("res/textures/Outstanding1"),
Outstanding2: t("res/textures/Outstanding2"),
Welldone1: t("res/textures/Welldone1"),
Welldone2: t("res/textures/Welldone2")
};
};
return i([ ae.atomClass("G3_FCongratulationImage_Asset") ], e);
}(ae.ConfigAtom);
n.G3_FCongratulationImage_Asset = c;
cc._RF.pop();
}, {
"../../G3_FCongratulationImage_Namespace": "G3_FCongratulationImage_Namespace"
} ],
G3_FCongratulationImage_CombatUiInitLogicVariant: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b53446wXlBCWJxVblBFKMLj", "G3_FCongratulationImage_CombatUiInitLogicVariant");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), i = this && this.__decorate || function(t, e, n, o) {
var a, i = arguments.length, r = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, n, r) : a(e, n)) || r);
return i > 3 && r && Object.defineProperty(e, n, r), r;
}, r = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FCongratulationImage_CombatUiInitLogicVariant = void 0;
var c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineFunction = function() {
var t = this;
return function(e, n) {
var o = [ "Amazing", "Brilliant", "Fantastic", "Nice", "Spectacular", "Superb", "Terrific", "Magnificent", "Outstanding", "Welldone" ];
n.runtime.congratulation = o[t.mathRandomInt(0, o.length - 1)];
var a = t.combatUiDomain.create();
t.childOf.addChild(e, a);
t.updateToDangerLogic.runtime.alpha = 0;
};
};
var n, o, c, u, f;
i([ ae.variantOf, ae.bindAtom("G3_FBase_CombatUiInitLogic"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "source", void 0);
i([ ae.bindAtom("G_FAtom_MathRandomInt"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "mathRandomInt", void 0);
i([ ae.bindAtom("G3_FBase_CombatUiDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "combatUiDomain", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], e.prototype, "childOf", void 0);
i([ ae.bindAtom("G3_FBase_UpdateToDangerLogic"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "updateToDangerLogic", void 0);
return i([ ae.atomClass("G3_FCongratulationImage_CombatUiInitLogicVariant") ], e);
}(ae.VariantAtom);
n.G3_FCongratulationImage_CombatUiInitLogicVariant = c;
cc._RF.pop();
}, {} ],
G3_FCongratulationImage_CongratulationImageDomain: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "23fd6b9J+hIhLVdj2nQuO9j", "G3_FCongratulationImage_CongratulationImageDomain");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), i = this && this.__decorate || function(t, e, n, o) {
var a, i = arguments.length, r = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, n, r) : a(e, n)) || r);
return i > 3 && r && Object.defineProperty(e, n, r), r;
}, r = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FCongratulationImage_CongratulationImageDomain = void 0;
var c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "transform", void 0);
return i([ ae.atomClass("G3_FCongratulationImage_CongratulationImageDomain") ], e);
}(ae.EntityDomainAtom);
n.G3_FCongratulationImage_CongratulationImageDomain = c;
cc._RF.pop();
}, {} ],
G3_FCongratulationImage_CongratulationImageInitLogic: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "886c4BmFCVHgqoxh0ZI7uXQ", "G3_FCongratulationImage_CongratulationImageInitLogic");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), i = this && this.__decorate || function(t, e, n, o) {
var a, i = arguments.length, r = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, n, r) : a(e, n)) || r);
return i > 3 && r && Object.defineProperty(e, n, r), r;
}, r = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FCongratulationImage_CongratulationImageInitLogic = void 0;
var c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function() {
var t = this.combatUiDomain.collect();
if (0 !== t.length) {
var e = t[0], n = this.congratulationImageDomain.create();
this.childOf.addChild(e, n);
}
};
var n, o, c, u;
i([ ae.onChain, ae.bindAtom("G3_FBase_CombatUiInitSignal"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "signal", void 0);
i([ ae.bindAtom("G3_FCongratulationImage_CongratulationImageDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "congratulationImageDomain", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "childOf", void 0);
i([ ae.bindAtom("G3_FBase_CombatUiDomain"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], e.prototype, "combatUiDomain", void 0);
return i([ ae.atomClass("G3_FCongratulationImage_CongratulationImageInitLogic") ], e);
}(ae.LogicAtom);
n.G3_FCongratulationImage_CongratulationImageInitLogic = c;
cc._RF.pop();
}, {} ],
G3_FCongratulationImage_CongratulationImageRender: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6b9e12L+9BEz5ovaWlNRNnB", "G3_FCongratulationImage_CongratulationImageRender");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), i = this && this.__decorate || function(t, e, n, o) {
var a, i = arguments.length, r = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, n, r) : a(e, n)) || r);
return i > 3 && r && Object.defineProperty(e, n, r), r;
}, r = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FCongratulationImage_CongratulationImageRender = void 0;
var c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRender = function() {
var t = this, e = {
Amazing: this.asset.Amazing1,
Brilliant: this.asset.Brilliant1,
Fantastic: this.asset.Fantastic1,
Nice: this.asset.Nice1,
Spectacular: this.asset.Spectacular1,
Superb: this.asset.Superb1,
Terrific: this.asset.Terrific1,
Magnificent: this.asset.Magnificent1,
Outstanding: this.asset.Outstanding1,
Welldone: this.asset.Welldone1
}, n = {
Amazing: this.asset.Amazing2,
Brilliant: this.asset.Brilliant2,
Fantastic: this.asset.Fantastic2,
Nice: this.asset.Nice2,
Spectacular: this.asset.Spectacular2,
Superb: this.asset.Superb2,
Terrific: this.asset.Terrific2,
Magnificent: this.asset.Magnificent2,
Outstanding: this.asset.Outstanding2,
Welldone: this.asset.Welldone2
};
return ae.Node({
name: "CongratulationImageSafe",
widget: {
isAlignTop: !0,
isAlignLeft: !0,
isAlignRight: !0,
isAlignBottom: !0,
alignMode: ae.WidgetAlignMode.Always,
safeArea: !0
}
}, ae.Node({
name: "CongratulationImageCenter",
widget: {
isAlignTop: !0,
isAlignBottom: !0,
isAlignLeft: !0,
isAlignRight: !0,
top: 180,
bottom: 166,
alignMode: ae.WidgetAlignMode.Always
}
}, ae.Sprite({
name: "CongratulationImage",
widget: {
isAlignHorizontalCenter: !0
},
y: 100,
sizeMode: ae.SizeMode.Trimmed,
img: [ function() {
var e;
return n[null !== (e = t.getLevelConfigFunction().congratulation) && void 0 !== e ? e : ""];
}, [ this.combatInitLogic, "storage", "level" ] ],
rgb: [ function() {
return t.getSchemeValueFunction("uiCongratulationOutline", 16777215);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
active: [ function() {
return t.combatDoPassLogic.runtime.fireworks;
}, [ this.combatDoPassLogic, "runtime", "fireworks" ] ],
alpha: [ function() {
var e = t.worldMeta.worldTime - t.combatDoPassLogic.runtime.fireworksTime;
return e < .8 ? e / .8 : 1;
}, [ this.combatDoPassLogic, "runtime", "fireworks" ], [ this.worldMeta, "worldTime" ] ]
}, ae.Sprite({
name: "CongratulationImageSub",
sizeMode: ae.SizeMode.Trimmed,
y: 4,
img: [ function() {
var n;
return e[null !== (n = t.getLevelConfigFunction().congratulation) && void 0 !== n ? n : ""];
}, [ this.combatInitLogic, "storage", "level" ] ],
rgb: [ function() {
return t.getSchemeValueFunction("uiCongratulationPattonColor", 6518484);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
}))));
};
e.prototype.defineRenderName = function() {
return null;
};
var n, o, c, u, f, s, p, l;
i([ ae.entityRenderer, ae.bindAtom("G3_FCongratulationImage_CongratulationImageDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "congratulationImageDomain", void 0);
i([ ae.bindAtom("G3_FCongratulationImage_Asset"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "asset", void 0);
i([ ae.bindAtom("G3_FBase_GetLevelConfigFunction"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "getLevelConfigFunction", void 0);
i([ ae.bindAtom("G3_FBase_CombatDoPassLogic"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], e.prototype, "combatDoPassLogic", void 0);
i([ ae.bindAtom("G3_FBase_CombatInitLogic"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "combatInitLogic", void 0);
i([ ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "worldMeta", void 0);
i([ ae.bindAtom("G3_FBase_GetSchemeValueFunction"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], e.prototype, "getSchemeValueFunction", void 0);
i([ ae.bindAtom("G3_FHome_SkinInitLogic"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "skinInitLogic", void 0);
return i([ ae.atomClass("G3_FCongratulationImage_CongratulationImageRender") ], e);
}(ae.RenderAtom);
n.G3_FCongratulationImage_CongratulationImageRender = c;
cc._RF.pop();
}, {} ],
G3_FCongratulationImage_GetLevelConfigFunctionVariant: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "361fcy3KotETKfDEFxCjok1", "G3_FCongratulationImage_GetLevelConfigFunctionVariant");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), i = this && this.__decorate || function(t, e, n, o) {
var a, i = arguments.length, r = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, n, r) : a(e, n)) || r);
return i > 3 && r && Object.defineProperty(e, n, r), r;
}, r = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FCongratulationImage_GetLevelConfigFunctionVariant = void 0;
var c = new WeakSet(), u = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.variantCondition = function() {
return c.has(this);
};
e.prototype.defineFunction = function() {
var t = this;
c.add(this);
return function() {
var e = t.levelConfig, n = e.congratulation;
n || (n = t.combatUiInitLogic.runtime.congratulation);
return {
degree: e.degree,
congratulation: n,
shape: e.shape,
arrow: {
rows: e.rows,
cols: e.cols,
arrows: t.combatFireLogic.runtime.arrows
}
};
};
};
var n, o, u, f;
i([ ae.variantOf, ae.bindAtom("G3_FBase_GetLevelConfigFunction"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "source", void 0);
i([ ae.bindAtom("G3_FBase_LevelConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "levelConfig", void 0);
i([ ae.bindAtom("G3_FBase_CombatUiInitLogic"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], e.prototype, "combatUiInitLogic", void 0);
i([ ae.bindAtom("G3_FBase_CombatFireLogic"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "combatFireLogic", void 0);
return i([ ae.atomClass("G3_FCongratulationImage_GetLevelConfigFunctionVariant") ], e);
}(ae.VariantAtom);
n.G3_FCongratulationImage_GetLevelConfigFunctionVariant = u;
cc._RF.pop();
}, {} ],
G3_FCongratulationImage_HideCongratulationTextLogic: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "da9f9X9Vy5FfK2PDb5CeLia", "G3_FCongratulationImage_HideCongratulationTextLogic");
var o, a = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), i = this && this.__decorate || function(t, e, n, o) {
var a, i = arguments.length, r = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, n, r) : a(e, n)) || r);
return i > 3 && r && Object.defineProperty(e, n, r), r;
}, r = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FCongratulationImage_HideCongratulationTextLogic = void 0;
var c = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function() {
this.combatUiRender.Congratulation.text = "";
};
var n;
i([ ae.onChain, ae.bindAtom("G3_FBase_CombatUiRender"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "combatUiRender", void 0);
return i([ ae.atomClass("G3_FCongratulationImage_HideCongratulationTextLogic") ], e);
}(ae.LogicAtom);
n.G3_FCongratulationImage_HideCongratulationTextLogic = c;
cc._RF.pop();
}, {} ],
G3_FCongratulationImage_Namespace: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "dec8bIobU1E2oU6Hxx777JZ", "G3_FCongratulationImage_Namespace");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G3_FCongratulationImage = void 0;
(function(t) {
var e;
(t.FeatureDescription || (t.FeatureDescription = {})).Description = "过关激励词图案化";
(function(t) {
t.Name = "G3";
})(e = t.GameName || (t.GameName = {}));
(function(t) {
t[t.Name = e.Name + "_FCongratulationImage"] = "Name";
})(t.FeatureName || (t.FeatureName = {}));
(function(t) {
t[t.Version = 11] = "Version";
t.CreateTime = "2026-02-28 19:57:43";
})(t.BundleInfo || (t.BundleInfo = {}));
})(n.G3_FCongratulationImage || (n.G3_FCongratulationImage = {}));
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FCongratulationImage_AeIndex", "G3_FCongratulationImage_Namespace", "G3_FCongratulationImage_Asset", "G3_FCongratulationImage_CongratulationImageDomain", "G3_FCongratulationImage_CongratulationImageInitLogic", "G3_FCongratulationImage_HideCongratulationTextLogic", "G3_FCongratulationImage_CongratulationImageRender", "G3_FCongratulationImage_CombatUiInitLogicVariant", "G3_FCongratulationImage_GetLevelConfigFunctionVariant" ]);