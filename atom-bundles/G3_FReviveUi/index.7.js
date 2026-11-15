window.__require = function e(t, i, o) {
function n(r, c) {
if (!i[r]) {
if (!t[r]) {
var f = r.split("/");
f = f[f.length - 1];
if (!t[f]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(f, !0);
if (a) return a(f, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = f;
}
var p = i[r] = {
exports: {}
};
t[r][0].call(p.exports, function(e) {
return n(t[r][1][e] || e);
}, p, p.exports, e, t, i, o);
}
return i[r].exports;
}
for (var a = "function" == typeof __require && __require, r = 0; r < o.length; r++) n(o[r]);
return n;
}({
G3_FReviveUi_AeIndex: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "bbddclKVwZBfYCzI2HjhJlq", "G3_FReviveUi_AeIndex");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi = void 0;
var o = e("./G3_FReviveUi_Namespace");
Object.defineProperty(i, "G3_FReviveUi", {
enumerable: !0,
get: function() {
return o.G3_FReviveUi;
}
});
cc._RF.pop();
}, {
"./G3_FReviveUi_Namespace": "G3_FReviveUi_Namespace"
} ],
G3_FReviveUi_Asset: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "6e5e7UVBlpEDKD7oPDx70Tt", "G3_FReviveUi_Asset");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_Asset = void 0;
var r = e("../../G3_FReviveUi_Namespace"), c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url(r.G3_FReviveUi.FeatureName.Name);
return {
IconLight: e("res/textures/icon_display_light"),
BtnBlue: e("res/textures/btn_blue"),
AdFreeIcon: e("res/textures/icon_Ads_free"),
CountDown01: e("res/textures/common_img_countdown_01"),
CountDown02: e("res/textures/common_img_countdown_02"),
CountDown03: e("res/textures/common_img_countdown_03"),
CountDownFontDown: e("res/fonts/common_num_countdown_down/common_num_countdown_down"),
CountDownFontUp: e("res/fonts/common_num_countdown_up/common_num_countdown_up")
};
};
return a([ ae.atomClass("G3_FReviveUi_Asset") ], t);
}(ae.ConfigAtom);
i.G3_FReviveUi_Asset = c;
cc._RF.pop();
}, {
"../../G3_FReviveUi_Namespace": "G3_FReviveUi_Namespace"
} ],
G3_FReviveUi_CombatDoFailLogicVariant: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "05f0fffEJtPkp8CQRLgugCb", "G3_FReviveUi_CombatDoFailLogicVariant");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_CombatDoFailLogicVariant = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, i) {
var o = e.getCurrentDate();
if (o !== e.failUiFreeClickLogic.storage.dailyFreeReviveTime) {
e.failUiFreeClickLogic.storage.dailyFreeReviveCount = 0;
e.failUiFreeClickLogic.storage.dailyFreeReviveTime = o;
}
i.runtime.reviveHp = e.freeReviveHpFunction();
i.runtime.failTime = e.worldMeta.worldTime;
var n = e.failUiDomain.create();
e.childOf.addChild(t, n);
e.failUiDomain.transform.scaleX.set(n, 0);
e.failUiDomain.transform.scaleY.set(n, 0);
var a = e.newFailUiDomain.create();
e.childOf.addChild(t, a);
e.tween(a, [ [ ae.TweenStepType.Delay, 5 ], [ ae.TweenStepType.Router, e.newFailUiResetChain ] ]);
};
};
var i, o, c, f, l, p, u, s, d, _;
a([ ae.variantOf, ae.bindAtom("G3_FBase_CombatDoFailLogic"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "combatDoFailLogic", void 0);
a([ ae.bindAtom("G3_FBase_FailUiDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "failUiDomain", void 0);
a([ ae.bindAtom("G3_FReviveUi_NewFailUiDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "newFailUiDomain", void 0);
a([ ae.bindAtom("G_FAtom_ChildOf"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "childOf", void 0);
a([ ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "worldMeta", void 0);
a([ ae.bindAtom("G3_FBase_FreeReviveHpFunction"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "freeReviveHpFunction", void 0);
a([ ae.bindAtom("G_FAtom_GetCurrentDate"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getCurrentDate", void 0);
a([ ae.bindAtom("G3_FBase_FailUiFreeClickLogic"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "failUiFreeClickLogic", void 0);
a([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "tween", void 0);
a([ ae.bindAtom("G3_FReviveUi_NewFailUiResetChain"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "newFailUiResetChain", void 0);
return a([ ae.atomClass("G3_FReviveUi_CombatDoFailLogicVariant") ], t);
}(ae.VariantAtom);
i.G3_FReviveUi_CombatDoFailLogicVariant = c;
cc._RF.pop();
}, {} ],
G3_FReviveUi_Namespace: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "cdf62WPM4FIDL5wlZ3Fw8RB", "G3_FReviveUi_Namespace");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "复活Ui特性";
(function(e) {
e.Name = "G3";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FReviveUi"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 7] = "Version";
e.CreateTime = "2026-04-13 13:38:49";
})(e.BundleInfo || (e.BundleInfo = {}));
})(i.G3_FReviveUi || (i.G3_FReviveUi = {}));
cc._RF.pop();
}, {} ],
G3_FReviveUi_NewFailUiAdClickChainDispatchLogic: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "d7d4eOyRydOtJz0A8XFWtxb", "G3_FReviveUi_NewFailUiAdClickChainDispatchLogic");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_NewFailUiAdClickChainDispatchLogic = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.rewardAdReadyLogic.runtime.ready ? this.router.dispatchAction = ae.DispatchAction.FireOnce : this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var i, o;
a([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FReviveUi_NewFailUiAdClickChain"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "router", void 0);
a([ ae.bindAtom("G3_FBase_RewardAdReadyLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rewardAdReadyLogic", void 0);
return a([ ae.atomClass("G3_FReviveUi_NewFailUiAdClickChainDispatchLogic") ], t);
}(ae.LogicAtom);
i.G3_FReviveUi_NewFailUiAdClickChainDispatchLogic = c;
cc._RF.pop();
}, {} ],
G3_FReviveUi_NewFailUiAdClickChain: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "80542zUjpFJsqmRBwr5Niml", "G3_FReviveUi_NewFailUiAdClickChain");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_NewFailUiAdClickChain = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var i, o;
a([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "uiEvent", void 0);
a([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FReviveUi_NewFailUiAdClickSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "newFailUiAdClickSignal", void 0);
return a([ ae.atomClass("G3_FReviveUi_NewFailUiAdClickChain") ], t);
}(ae.SignalRouterAtom);
i.G3_FReviveUi_NewFailUiAdClickChain = c;
cc._RF.pop();
}, {} ],
G3_FReviveUi_NewFailUiAdClickLogic: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "118916A0ZhN96wEqZ0RfHP4", "G3_FReviveUi_NewFailUiAdClickLogic");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_NewFailUiAdClickLogic = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
this.newFailUiDomain.destroy(e);
};
var i, o;
a([ ae.onChain, ae.bindAtom("G3_FReviveUi_NewFailUiAdClickSignal"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "signal", void 0);
a([ ae.bindAtom("G3_FReviveUi_NewFailUiDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "newFailUiDomain", void 0);
return a([ ae.atomClass("G3_FReviveUi_NewFailUiAdClickLogic") ], t);
}(ae.LogicAtom);
i.G3_FReviveUi_NewFailUiAdClickLogic = c;
cc._RF.pop();
}, {} ],
G3_FReviveUi_NewFailUiAdClickSignal: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "0aaecV5h1xD0aysfqfM97cD", "G3_FReviveUi_NewFailUiAdClickSignal");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_NewFailUiAdClickSignal = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var i;
a([ ae.bindAtom("G3_FReviveUi_NewFailUiDomain"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "newFailUiDomain", void 0);
return a([ ae.atomClass("G3_FReviveUi_NewFailUiAdClickSignal") ], t);
}(ae.SignalAtom);
i.G3_FReviveUi_NewFailUiAdClickSignal = c;
cc._RF.pop();
}, {} ],
G3_FReviveUi_NewFailUiAdClickToOldFailUiAdClickChain: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "31c88cBCyBMJpK3nE7sZEwG", "G3_FReviveUi_NewFailUiAdClickToOldFailUiAdClickChain");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_NewFailUiAdClickToOldFailUiAdClickChain = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var i, o;
a([ ae.routeFrom, ae.bindAtom("G3_FReviveUi_NewFailUiAdClickSignal"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "newFailUiAdClickSignal", void 0);
a([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FBase_FailUiAdClickSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "oldFailUiAdClickSignal", void 0);
return a([ ae.atomClass("G3_FReviveUi_NewFailUiAdClickToOldFailUiAdClickChain") ], t);
}(ae.SignalRouterAtom);
i.G3_FReviveUi_NewFailUiAdClickToOldFailUiAdClickChain = c;
cc._RF.pop();
}, {} ],
G3_FReviveUi_NewFailUiDomain: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "a2bf8tXaupJr4q+8X8UNfOv", "G3_FReviveUi_NewFailUiDomain");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_NewFailUiDomain = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var i;
a([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "transform", void 0);
return a([ ae.atomClass("G3_FReviveUi_NewFailUiDomain") ], t);
}(ae.EntityDomainAtom);
i.G3_FReviveUi_NewFailUiDomain = c;
cc._RF.pop();
}, {} ],
G3_FReviveUi_NewFailUiFreeClickChain: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "a6111rfkTBAuqgcvo6EdilT", "G3_FReviveUi_NewFailUiFreeClickChain");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_NewFailUiFreeClickChain = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var i, o;
a([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "uiEvent", void 0);
a([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FReviveUi_NewFailUiFreeClickSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "newFailUiFreeClickSignal", void 0);
return a([ ae.atomClass("G3_FReviveUi_NewFailUiFreeClickChain") ], t);
}(ae.SignalRouterAtom);
i.G3_FReviveUi_NewFailUiFreeClickChain = c;
cc._RF.pop();
}, {} ],
G3_FReviveUi_NewFailUiFreeClickLogic: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "f0e7156fXlHWqWcIoIsBr3p", "G3_FReviveUi_NewFailUiFreeClickLogic");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_NewFailUiFreeClickLogic = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
this.newFailUiDomain.destroy(e);
};
var i, o;
a([ ae.onChain, ae.bindAtom("G3_FReviveUi_NewFailUiFreeClickSignal"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "signal", void 0);
a([ ae.bindAtom("G3_FReviveUi_NewFailUiDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "newFailUiDomain", void 0);
return a([ ae.atomClass("G3_FReviveUi_NewFailUiFreeClickLogic") ], t);
}(ae.LogicAtom);
i.G3_FReviveUi_NewFailUiFreeClickLogic = c;
cc._RF.pop();
}, {} ],
G3_FReviveUi_NewFailUiFreeClickSignal: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "0ee25Cs9WJB+5BM81f8DOTc", "G3_FReviveUi_NewFailUiFreeClickSignal");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_NewFailUiFreeClickSignal = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var i;
a([ ae.bindAtom("G3_FReviveUi_NewFailUiDomain"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "newFailUiDomain", void 0);
return a([ ae.atomClass("G3_FReviveUi_NewFailUiFreeClickSignal") ], t);
}(ae.SignalAtom);
i.G3_FReviveUi_NewFailUiFreeClickSignal = c;
cc._RF.pop();
}, {} ],
G3_FReviveUi_NewFailUiFreeClickToOldFailUiFreeClickChain: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "1389cxefeRNnKgLGwljEp11", "G3_FReviveUi_NewFailUiFreeClickToOldFailUiFreeClickChain");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_NewFailUiFreeClickToOldFailUiFreeClickChain = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var i, o;
a([ ae.routeFrom, ae.bindAtom("G3_FReviveUi_NewFailUiFreeClickSignal"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "newFailUiFreeClickSignal", void 0);
a([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FBase_FailUiFreeClickSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "oldFailUiFreeClickSignal", void 0);
return a([ ae.atomClass("G3_FReviveUi_NewFailUiFreeClickToOldFailUiFreeClickChain") ], t);
}(ae.SignalRouterAtom);
i.G3_FReviveUi_NewFailUiFreeClickToOldFailUiFreeClickChain = c;
cc._RF.pop();
}, {} ],
G3_FReviveUi_NewFailUiRender: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "653bd5M8/lA1qrIv67ULo8W", "G3_FReviveUi_NewFailUiRender");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_NewFailUiRender = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Node({
name: "FailUi",
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
}
}, ae.Sprite({
name: "FailBgMask",
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
rgb: 0,
alpha: .58,
img: this.baseAsset.Color,
blockInputEvents: !0
}), ae.Sprite({
name: "CountDown03",
img: this.reviveUiAsset.CountDown03,
y: 310,
rgb: [ function() {
return e.getSchemeValueFunction("uiNewFailCountDownProgress03Color", 1198189);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
}, ae.Sprite({
name: "CountDown01",
img: this.reviveUiAsset.CountDown01,
rgb: [ function() {
return e.getSchemeValueFunction("uiNewFailCountDownProgress01Color", 16777215);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
}), ae.Sprite({
name: "CountDown02",
img: this.reviveUiAsset.CountDown02,
rgb: [ function() {
return e.getSchemeValueFunction("uiNewFailCountDownProgress02Color", 1834337);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
renderType: ae.RenderType.Filled,
fillType: ae.SpriteFillType.Radial,
fillCenterX: .5,
fillCenterY: .5,
fillStart: .25,
fillRange: [ function() {
var t = e.worldMeta.worldTime - e.combatDoFailLogic.runtime.failTime;
return t <= 0 ? 1 : t >= 5 ? 0 : 1 - t / 5;
}, [ this.worldMeta, "worldTime" ], [ this.combatDoFailLogic, "runtime", "failTime" ] ]
}), ae.Text({
name: "CountDownTextDown",
font: this.reviveUiAsset.CountDownFontDown,
text: [ function() {
var t = e.worldMeta.worldTime - e.combatDoFailLogic.runtime.failTime;
return t <= 0 ? "5" : t >= 5 ? "0" : e.mathCeil(5 - t).toString();
}, [ this.worldMeta, "worldTime" ], [ this.combatDoFailLogic, "runtime", "failTime" ] ],
rgb: [ function() {
return e.getSchemeValueFunction("uiNewFailCountDownTextDownColor", 1812233);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
y: -10,
fontSize: 182
}), ae.Text({
name: "CountDownTextUp",
font: this.reviveUiAsset.CountDownFontUp,
text: [ function() {
var t = e.worldMeta.worldTime - e.combatDoFailLogic.runtime.failTime;
return t <= 0 ? "5" : t >= 5 ? "0" : e.mathCeil(5 - t).toString();
}, [ this.worldMeta, "worldTime" ], [ this.combatDoFailLogic, "runtime", "failTime" ] ],
rgb: [ function() {
return e.getSchemeValueFunction("uiNewFailCountDownTextUpColor", 15204337);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
y: -10,
fontSize: 182
})), ae.Text({
name: "ReviveDescText",
font: this.homeAsset.SpartanBoldFont,
text: [ function() {
return e.canFreeReviveFunction() ? "Revive can get " + e.combatDoFailLogic.runtime.reviveHp + " hearts" : "Watch ad to get 3 hearts.";
}, [ this.combatInitLogic, "storage", "level" ], [ this.failUiFreeClickLogic, "storage", "dailyFreeReviveTime" ], [ this.failUiFreeClickLogic, "storage", "dailyFreeReviveCount" ], [ this.combatDoFailLogic, "runtime", "reviveHp" ] ],
enableBold: !0,
fontSize: 33,
y: 0,
rgb: [ function() {
return e.getSchemeValueFunction("uiNewFailDescColor", 14212592);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
}), ae.Sprite({
name: "AdBtn",
width: 474,
height: 128,
y: -120,
img: this.reviveUiAsset.BtnBlue,
rgb: [ function() {
return e.rewardAdReadyLogic.runtime.ready ? e.getSchemeValueFunction("uiNewFailPlayBtnColor", 4049431) : e.getSchemeValueFunction("uiNewFailLoadingBtnColor", 15330290);
}, [ this.skinInitLogic, "storage", "currentScheme" ], [ this.rewardAdReadyLogic, "runtime", "ready" ] ],
renderType: ae.RenderType.Sliced,
event: {
touchEnd: this.newFailUiAdClickChain
},
button: {
transition: ae.ButtonTransition.Scale,
duration: .1,
zoomScale: .9
},
active: [ function() {
return !e.canFreeReviveFunction() && e.canShowAd();
}, [ this.combatInitLogic, "storage", "level" ], [ this.failUiFreeClickLogic, "storage", "dailyFreeReviveTime" ], [ this.failUiFreeClickLogic, "storage", "dailyFreeReviveCount" ] ]
}, ae.Node({
name: "AdBtnContent"
}, ae.Sprite({
name: "AdBtnLight",
img: this.reviveUiAsset.IconLight,
x: -223,
y: 50,
active: !1
}), ae.Sprite({
name: "AdIcon",
img: this.baseAsset.BtnIconAd,
x: -110,
rgb: [ function() {
return e.rewardAdReadyLogic.runtime.ready ? e.getSchemeValueFunction("uiNewFailPlayBtnADColor", 16777215) : e.getSchemeValueFunction("uiNewFailLoadingBtnADColor", 4870775);
}, [ this.skinInitLogic, "storage", "currentScheme" ], [ this.rewardAdReadyLogic, "runtime", "ready" ] ]
}), ae.Text({
name: "AdBtnText",
font: this.homeAsset.SpartanBoldFont,
text: [ function() {
return e.rewardAdReadyLogic.runtime.ready ? "Revive" : "Loading...";
}, [ this.rewardAdReadyLogic, "runtime", "ready" ] ],
enableBold: !0,
fontSize: 50,
x: 45,
rgb: [ function() {
return e.rewardAdReadyLogic.runtime.ready ? e.getSchemeValueFunction("uiNewFailPlayBtnADColor", 16777215) : e.getSchemeValueFunction("uiNewFailLoadingBtnADColor", 4870775);
}, [ this.skinInitLogic, "storage", "currentScheme" ], [ this.rewardAdReadyLogic, "runtime", "ready" ] ]
}))), ae.Sprite({
name: "FreeBtn",
width: 474,
height: 128,
y: -120,
img: this.reviveUiAsset.BtnBlue,
rgb: [ function() {
return e.getSchemeValueFunction("uiNewFailFreeBtnColor", 4049431);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
renderType: ae.RenderType.Sliced,
event: {
touchEnd: this.newFailUiFreeClickChain
},
button: {
transition: ae.ButtonTransition.Scale,
duration: .1,
zoomScale: .9
},
active: [ function() {
return e.canFreeReviveFunction();
}, [ this.combatInitLogic, "storage", "level" ], [ this.failUiFreeClickLogic, "storage", "dailyFreeReviveTime" ], [ this.failUiFreeClickLogic, "storage", "dailyFreeReviveCount" ] ]
}, ae.Text({
name: "FreetnText",
font: this.homeAsset.SpartanBoldFont,
text: "Free Revive",
enableBold: !0,
fontSize: 50,
x: 50,
rgb: [ function() {
return e.getSchemeValueFunction("uiNewFailFreeBtnTextColor", 16777215);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
}), ae.Sprite({
name: "AdFreeIcon",
img: this.reviveUiAsset.AdFreeIcon,
x: -160
})), ae.Node({
name: "RestartBtn",
width: 300,
height: 100,
x: 0,
y: -325,
event: {
touchEnd: this.newFailUiResetChain
},
button: {
transition: ae.ButtonTransition.Scale,
duration: .1,
zoomScale: .9
}
}, ae.Text({
name: "RestartBtnText",
font: this.homeAsset.SpartanBoldFont,
enableBold: !0,
enableUnderline: !0,
text: "No,Thanks",
fontSize: 40,
rgb: [ function() {
return e.getSchemeValueFunction("uiNewFailRestartBtnTextColor", 5950196);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
})));
};
t.prototype.defineRenderName = function() {
return null;
};
var i, o, c, f, l, p, u, s, d, _, y, v, F, m, h, R, g, U, b, w, A;
a([ ae.entityRenderer, ae.bindAtom("G3_FReviveUi_NewFailUiDomain"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "failUiDomain", void 0);
a([ ae.bindAtom("G3_FBase_WindowSizeLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "windowSizeLogic", void 0);
a([ ae.bindAtom("G3_FReviveUi_NewFailUiAdClickChain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "newFailUiAdClickChain", void 0);
a([ ae.bindAtom("G3_FBase_CombatDoFailLogic"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "combatDoFailLogic", void 0);
a([ ae.bindAtom("G3_FBase_FailUiUpdateLogic"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "failUiUpdateLogic", void 0);
a([ ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "worldMeta", void 0);
a([ ae.bindAtom("G3_FBase_RewardAdReadyLogic"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "rewardAdReadyLogic", void 0);
a([ ae.bindAtom("G3_FBase_CanFreeReviveFunction"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "canFreeReviveFunction", void 0);
a([ ae.bindAtom("G3_FReviveUi_NewFailUiFreeClickChain"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "newFailUiFreeClickChain", void 0);
a([ ae.bindAtom("G3_FBase_SkinSwitchLogic"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "skinSwitchLogic", void 0);
a([ ae.bindAtom("G3_FBase_SkinConfig"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "skinConfig", void 0);
a([ ae.bindAtom("G3_FBase_CombatInitLogic"), r("design:type", "function" == typeof (v = "undefined" != typeof ae && ae.AtomTypeInfer) ? v : Object) ], t.prototype, "combatInitLogic", void 0);
a([ ae.bindAtom("G3_FBase_FailUiFreeClickLogic"), r("design:type", "function" == typeof (F = "undefined" != typeof ae && ae.AtomTypeInfer) ? F : Object) ], t.prototype, "failUiFreeClickLogic", void 0);
a([ ae.bindAtom("G_FAtom_ADCanShowAd"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "canShowAd", void 0);
a([ ae.bindAtom("G3_FHome_SkinInitLogic"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "skinInitLogic", void 0);
a([ ae.bindAtom("G3_FBase_GetSchemeValueFunction"), r("design:type", "function" == typeof (R = "undefined" != typeof ae && ae.AtomTypeInfer) ? R : Object) ], t.prototype, "getSchemeValueFunction", void 0);
a([ ae.bindAtom("G3_FBase_Asset"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "baseAsset", void 0);
a([ ae.bindAtom("G3_FHome_Asset"), r("design:type", "function" == typeof (U = "undefined" != typeof ae && ae.AtomTypeInfer) ? U : Object) ], t.prototype, "homeAsset", void 0);
a([ ae.bindAtom("G3_FReviveUi_Asset"), r("design:type", "function" == typeof (b = "undefined" != typeof ae && ae.AtomTypeInfer) ? b : Object) ], t.prototype, "reviveUiAsset", void 0);
a([ ae.bindAtom("G_FAtom_MathCeil"), r("design:type", "function" == typeof (w = "undefined" != typeof ae && ae.AtomTypeInfer) ? w : Object) ], t.prototype, "mathCeil", void 0);
a([ ae.bindAtom("G3_FReviveUi_NewFailUiResetChain"), r("design:type", "function" == typeof (A = "undefined" != typeof ae && ae.AtomTypeInfer) ? A : Object) ], t.prototype, "newFailUiResetChain", void 0);
return a([ ae.atomClass("G3_FReviveUi_NewFailUiRender") ], t);
}(ae.RenderAtom);
i.G3_FReviveUi_NewFailUiRender = c;
cc._RF.pop();
}, {} ],
G3_FReviveUi_NewFailUiResetChain: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "d61e6aoWpZLQrHN85JsD9VY", "G3_FReviveUi_NewFailUiResetChain");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_NewFailUiResetChain = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var i, o;
a([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "uiEvent", void 0);
a([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FReviveUi_NewFailUiResetSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "newFailUiResetSignal", void 0);
return a([ ae.atomClass("G3_FReviveUi_NewFailUiResetChain") ], t);
}(ae.SignalRouterAtom);
i.G3_FReviveUi_NewFailUiResetChain = c;
cc._RF.pop();
}, {} ],
G3_FReviveUi_NewFailUiResetLogic: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "e2c9acB0HFIZrto7knq27LE", "G3_FReviveUi_NewFailUiResetLogic");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_NewFailUiResetLogic = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
this.newFailUiDomain.destroy(e);
};
var i, o;
a([ ae.onChain, ae.bindAtom("G3_FReviveUi_NewFailUiResetSignal"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "signal", void 0);
a([ ae.bindAtom("G3_FReviveUi_NewFailUiDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "newFailUiDomain", void 0);
return a([ ae.atomClass("G3_FReviveUi_NewFailUiResetLogic") ], t);
}(ae.LogicAtom);
i.G3_FReviveUi_NewFailUiResetLogic = c;
cc._RF.pop();
}, {} ],
G3_FReviveUi_NewFailUiResetSignal: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "e381fpTnvREEKYH0fUg9Vrn", "G3_FReviveUi_NewFailUiResetSignal");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_NewFailUiResetSignal = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var i;
a([ ae.bindAtom("G3_FReviveUi_NewFailUiDomain"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "newFailUiDomain", void 0);
return a([ ae.atomClass("G3_FReviveUi_NewFailUiResetSignal") ], t);
}(ae.SignalAtom);
i.G3_FReviveUi_NewFailUiResetSignal = c;
cc._RF.pop();
}, {} ],
G3_FReviveUi_NewFailUiResetToOldFailUiResetChain: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "7a9c9865LdH9ZFbBmWfA0l3", "G3_FReviveUi_NewFailUiResetToOldFailUiResetChain");
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
}), a = this && this.__decorate || function(e, t, i, o) {
var n, a = arguments.length, r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.G3_FReviveUi_NewFailUiResetToOldFailUiResetChain = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var i, o;
a([ ae.routeFrom, ae.bindAtom("G3_FReviveUi_NewFailUiResetSignal"), r("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "newFailUiResetSignal", void 0);
a([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FBase_FailUiResetSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "failUiResetSignal", void 0);
return a([ ae.atomClass("G3_FReviveUi_NewFailUiResetToOldFailUiResetChain") ], t);
}(ae.SignalRouterAtom);
i.G3_FReviveUi_NewFailUiResetToOldFailUiResetChain = c;
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FReviveUi_AeIndex", "G3_FReviveUi_Namespace", "G3_FReviveUi_Asset", "G3_FReviveUi_NewFailUiAdClickChain", "G3_FReviveUi_NewFailUiAdClickToOldFailUiAdClickChain", "G3_FReviveUi_NewFailUiFreeClickChain", "G3_FReviveUi_NewFailUiFreeClickToOldFailUiFreeClickChain", "G3_FReviveUi_NewFailUiResetChain", "G3_FReviveUi_NewFailUiResetToOldFailUiResetChain", "G3_FReviveUi_NewFailUiDomain", "G3_FReviveUi_NewFailUiAdClickChainDispatchLogic", "G3_FReviveUi_NewFailUiAdClickLogic", "G3_FReviveUi_NewFailUiFreeClickLogic", "G3_FReviveUi_NewFailUiResetLogic", "G3_FReviveUi_NewFailUiRender", "G3_FReviveUi_NewFailUiAdClickSignal", "G3_FReviveUi_NewFailUiFreeClickSignal", "G3_FReviveUi_NewFailUiResetSignal", "G3_FReviveUi_CombatDoFailLogicVariant" ]);