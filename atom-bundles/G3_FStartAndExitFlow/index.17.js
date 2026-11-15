window.__require = function t(e, o, n) {
function i(a, c) {
if (!o[a]) {
if (!e[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!e[l]) {
var s = "function" == typeof __require && __require;
if (!c && s) return s(l, !0);
if (r) return r(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var f = o[a] = {
exports: {}
};
e[a][0].call(f.exports, function(t) {
return i(e[a][1][t] || t);
}, f, f.exports, t, e, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
G3_FStartAndExitFlow_AeIndex: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e803fMF4tBNGpFkbWnIOHp6", "G3_FStartAndExitFlow_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow = void 0;
var n = t("./G3_FStartAndExitFlow_Namespace");
Object.defineProperty(o, "G3_FStartAndExitFlow", {
enumerable: !0,
get: function() {
return n.G3_FStartAndExitFlow;
}
});
cc._RF.pop();
}, {
"./G3_FStartAndExitFlow_Namespace": "G3_FStartAndExitFlow_Namespace"
} ],
G3_FStartAndExitFlow_Asset: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5961ab/ZxRBK5YrHlEAicRb", "G3_FStartAndExitFlow_Asset");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_Asset = void 0;
var a = t("../../G3_FStartAndExitFlow_Namespace"), c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineConfig = function() {
var t = this.url(a.G3_FStartAndExitFlow.FeatureName.Name);
return {
NoWifi: t("res/textures/common_icon_noWifi"),
Trophy: t("res/textures/icon_trophy"),
DescBg: t("res/textures/common_base"),
BtnBlue: t("res/textures/btn_blue"),
LightPoint: t("res/textures/light_point"),
ResultStageClearSpine: t("res/spines/result_stage_clear"),
IconLogo: t("res/textures/icon_logo")
};
};
return r([ ae.atomClass("G3_FStartAndExitFlow_Asset") ], e);
}(ae.ConfigAtom);
o.G3_FStartAndExitFlow_Asset = c;
cc._RF.pop();
}, {
"../../G3_FStartAndExitFlow_Namespace": "G3_FStartAndExitFlow_Namespace"
} ],
G3_FStartAndExitFlow_CombatDoPassToCombatUiBackChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2ea65s48r5CvZShb+jbKME/", "G3_FStartAndExitFlow_CombatDoPassToCombatUiBackChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_CombatDoPassToCombatUiBackChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FBase_CombatDoPassSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "combatDoPassSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FBase_CombatUiBackSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "combatUiBackSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_CombatDoPassToCombatUiBackChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_CombatDoPassToCombatUiBackChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_CombatDoPassToCombatUiBackDispatch: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e0fd3evjDVICLEu+7ri+dBj", "G3_FStartAndExitFlow_CombatDoPassToCombatUiBackDispatch");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_CombatDoPassToCombatUiBackDispatch = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {
combatDoPassToCombatUiBack: !1
};
};
e.prototype.onExecute = function(t, e) {
e.runtime.combatDoPassToCombatUiBack ? this.router.dispatchAction = ae.DispatchAction.FireOnce : this.router.dispatchAction = ae.DispatchAction.Defer;
};
var o;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_CombatDoPassToCombatUiBackChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "router", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_CombatDoPassToCombatUiBackDispatch") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_CombatDoPassToCombatUiBackDispatch = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_CombatDoPassToCombatUiBackReceive: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7cfd535MNhCmY6NyPX2PI0F", "G3_FStartAndExitFlow_CombatDoPassToCombatUiBackReceive");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_CombatDoPassToCombatUiBackReceive = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function() {
this.router.receiveAction = ae.ReceiveAction.Discard;
};
var o;
r([ ae.routeReceive, ae.onChain, ae.bindAtom("G3_FBase_CombatDoPassToCombatUiBackChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "router", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_CombatDoPassToCombatUiBackReceive") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_CombatDoPassToCombatUiBackReceive = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_CombatDoPassToInterstitialAdDispatch: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9a2634i2SVHxKfrPHXUAPU2", "G3_FStartAndExitFlow_CombatDoPassToInterstitialAdDispatch");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_CombatDoPassToInterstitialAdDispatch = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {
combatDoPassToInterstitialAd: !1
};
};
e.prototype.onExecute = function(t, e) {
e.runtime.combatDoPassToInterstitialAd ? this.router.dispatchAction = ae.DispatchAction.FireOnce : this.router.dispatchAction = ae.DispatchAction.Defer;
};
var o;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FBase_CombatDoPassToInterstitialAdChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "router", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_CombatDoPassToInterstitialAdDispatch") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_CombatDoPassToInterstitialAdDispatch = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_DirectToNextLevelConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "58855DLaDROqr7/0UOw7hO0", "G3_FStartAndExitFlow_DirectToNextLevelConfig");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_DirectToNextLevelConfig = void 0;
var a = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineConfig = function() {
return {
supportNotReturnHome: !0
};
};
return r([ ae.atomClass("G3_FStartAndExitFlow_DirectToNextLevelConfig") ], e);
}(ae.ConfigAtom);
o.G3_FStartAndExitFlow_DirectToNextLevelConfig = a;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowCheckNoNetLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c20a3IrwGZB4L2sXM/7gs5W", "G3_FStartAndExitFlow_ExitFlowCheckNoNetLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowCheckNoNetLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function() {
var t, e = this.exitChannel.data, o = e.back, n = e.win, i = e.level, r = e.hp, a = e.degree, c = e.degreeColor;
console.log("[G3_FStartAndExitFlow] 检查没有网络数据", {
back: o,
win: n,
level: i,
hp: r,
degree: a,
degreeColor: c
});
if (this.noNetConfig.supportNoNetHint && n) {
var l = null !== (t = this.checkLevelDownloadedLogic.storage.nextLevelDownloadedUrl.split("/").pop()) && void 0 !== t ? t : "", s = "Level_" + String(this.exitChannel.data.level - 1).padStart(5, "0") + ".json";
l && l === s && (this.checkLevelDownloadedLogic.storage.nextLevelDownloadedUrl = "");
var f = this.checkLevelDownloadedLogic.storage.nextLevelDownloadedUrl;
if (i <= this.maxLevelCountConfig.maxLevelCount && (!f || "" === f)) {
this.noNetUiLogic.runtime.noNetUiActive = !0;
this.checkNoNetToDirectToNextLevelDispatch.runtime.checkNoNet = !0;
return;
}
}
this.checkNoNetToDirectToNextLevelDispatch.runtime.checkNoNet = !1;
};
var o, n, c, l, s, f, p, d;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_ExitFlowCheckNoNetSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FBase_ExitChannel"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "exitChannel", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_ExitFlowCheckNoNetToDirectToNextLevelDispatch"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "checkNoNetToDirectToNextLevelDispatch", void 0);
r([ ae.bindAtom("G_FAtom_GetNetworkState"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "getNetworkState", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_NoNetConfig"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "noNetConfig", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_CheckLevelDownloadedLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "checkLevelDownloadedLogic", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreateNoNetUiLogic"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], e.prototype, "noNetUiLogic", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_MaxLevelCountConfig"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], e.prototype, "maxLevelCountConfig", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowCheckNoNetLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_ExitFlowCheckNoNetLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowCheckNoNetSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5d212RCk71NlYU28E8gmJhU", "G3_FStartAndExitFlow_ExitFlowCheckNoNetSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowCheckNoNetSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowCheckNoNetSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_ExitFlowCheckNoNetSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowCheckNoNetToDirectToNextLevelChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "135d1i7ER9GP7xrJPakQQYI", "G3_FStartAndExitFlow_ExitFlowCheckNoNetToDirectToNextLevelChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowCheckNoNetToDirectToNextLevelChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FStartAndExitFlow_ExitFlowCheckNoNetSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "checkNoNetSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_ExitFlowDirectToNextLevelSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "directToNextLevelSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowCheckNoNetToDirectToNextLevelChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_ExitFlowCheckNoNetToDirectToNextLevelChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowCheckNoNetToDirectToNextLevelDispatch: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c6beans8jRDJoAd1hpb7EMu", "G3_FStartAndExitFlow_ExitFlowCheckNoNetToDirectToNextLevelDispatch");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowCheckNoNetToDirectToNextLevelDispatch = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {
checkNoNet: !1
};
};
e.prototype.onExecute = function(t, e) {
e.runtime.checkNoNet ? this.router.dispatchAction = ae.DispatchAction.Cancel : this.router.dispatchAction = ae.DispatchAction.FireOnce;
};
var o;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_ExitFlowCheckNoNetToDirectToNextLevelChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "router", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowCheckNoNetToDirectToNextLevelDispatch") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_ExitFlowCheckNoNetToDirectToNextLevelDispatch = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8c3b7Wa5PJJaabq4HHmUGJG", "G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function() {
var t = this.exitChannel.data, e = t.back, o = t.win, n = t.level, i = t.hp, r = t.degree, a = t.degreeColor;
console.log("[G3_FStartAndExitFlow] 检查所有关卡是否通过数据", {
back: e,
win: o,
level: n,
hp: i,
degree: r,
degreeColor: a
});
if (this.passAllLevelsConfig.supportPassAllLevelsHint && o && n > this.maxLevelCountConfig.maxLevelCount) {
this.checkPassAllLevelsToCheckNoNetUDispatch.runtime.checkPassAllLevels = !0;
this.createPassAllLevelsUiLogic.runtime.passAllLevelsUiActive = !0;
this.createPassAllLevelsUiLogic.runtime.passAllLevelsSpineLoopInit = !1;
} else this.checkPassAllLevelsToCheckNoNetUDispatch.runtime.checkPassAllLevels = !1;
};
var o, n, c, l, s, f;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FBase_ExitChannel"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "exitChannel", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_MaxLevelCountConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "maxLevelCountConfig", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsToCheckNoNetUDispatch"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "checkPassAllLevelsToCheckNoNetUDispatch", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "createPassAllLevelsUiLogic", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_PassAllLevelsConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "passAllLevelsConfig", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "13cf3lEyJRMhrEG9/d/H8mK", "G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsToCheckNoNetChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1c168mIOq5FIL8ie6VsBpqb", "G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsToCheckNoNetChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsToCheckNoNetChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "checkPassAllLevelsSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_ExitFlowCheckNoNetSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "checkNoNetSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsToCheckNoNetChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsToCheckNoNetChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsToCheckNoNetUDispatch: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "eeb6223mRZOkZUZ0cU/2xZd", "G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsToCheckNoNetUDispatch");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsToCheckNoNetUDispatch = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {
checkPassAllLevels: !1
};
};
e.prototype.onExecute = function(t, e) {
e.runtime.checkPassAllLevels ? this.router.dispatchAction = ae.DispatchAction.Cancel : this.router.dispatchAction = ae.DispatchAction.FireOnce;
};
var o;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsToCheckNoNetChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "router", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsToCheckNoNetUDispatch") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsToCheckNoNetUDispatch = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowDirectToNextLevelLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8dda1Ie+k1NmKKYiD73EmVc", "G3_FStartAndExitFlow_ExitFlowDirectToNextLevelLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowDirectToNextLevelLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function(t) {
var e = this.exitChannel.data, o = e.back, n = e.win, i = e.level, r = e.hp, a = e.degree, c = e.degreeColor;
console.log("[G3_FStartAndExitFlow] 直接跳转到下一关数据", {
back: o,
win: n,
level: i,
hp: r,
degree: a,
degreeColor: c
});
if (!this.directToNextLevelConfig.supportNotReturnHome || !n || this.firstUiPlayLogic.runtime.loading || this.backConfirmUiOkLogic.storage.winClickExit) {
this.directToNextLevelToShowHomeUiDispatch.runtime.directToNextLevel = !1;
this.backConfirmUiOkLogic.storage.winClickExit = !1;
} else {
this.directToNextLevelToShowHomeUiDispatch.runtime.directToNextLevel = !0;
this.firstUiStartLogic.runtime.firstUiVisible = !1;
this.firstUiPlayLogic.runtime.loading = !0;
var l = this.worldDomain.create();
this.worldDomain.worldState.multiTouch.set(l, !0);
this.worldDomain.worldState.worldId.set(l, this.baseWorld.worldId);
this.childOf.addChild(t, l);
}
};
var o, n, c, l, s, f, p, d, u, _, y;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_ExitFlowDirectToNextLevelSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FBase_ExitChannel"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "exitChannel", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_DirectToNextLevelConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "directToNextLevelConfig", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiStartLogic"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "firstUiStartLogic", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiPlayLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "firstUiPlayLogic", void 0);
r([ ae.bindAtom("G_FAtom_WorldDomain"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "worldDomain", void 0);
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], e.prototype, "rootDomain", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], e.prototype, "childOf", void 0);
r([ ae.bindAtom("G3_FBase_WorldAtom"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], e.prototype, "baseWorld", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_ExitFlowDirectToNextLevelToShowHomeUiDispatch"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], e.prototype, "directToNextLevelToShowHomeUiDispatch", void 0);
r([ ae.bindAtom("G3_FBase_BackConfirmUiOkLogic"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], e.prototype, "backConfirmUiOkLogic", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowDirectToNextLevelLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_ExitFlowDirectToNextLevelLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowDirectToNextLevelSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9232duo5ipBvpP13y2iKTQM", "G3_FStartAndExitFlow_ExitFlowDirectToNextLevelSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowDirectToNextLevelSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowDirectToNextLevelSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_ExitFlowDirectToNextLevelSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowDirectToNextLevelToShowHomeUiChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8826aWEuNlJzY3MRmS1BT2B", "G3_FStartAndExitFlow_ExitFlowDirectToNextLevelToShowHomeUiChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowDirectToNextLevelToShowHomeUiChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FStartAndExitFlow_ExitFlowDirectToNextLevelSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "directToNextLevelSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_ExitFlowShowHomeUiSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "showHomeUiSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowDirectToNextLevelToShowHomeUiChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_ExitFlowDirectToNextLevelToShowHomeUiChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowDirectToNextLevelToShowHomeUiDispatch: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "38aa14GzlFPv607OKweF5j2", "G3_FStartAndExitFlow_ExitFlowDirectToNextLevelToShowHomeUiDispatch");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowDirectToNextLevelToShowHomeUiDispatch = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {
directToNextLevel: !1
};
};
e.prototype.onExecute = function(t, e) {
e.runtime.directToNextLevel ? this.router.dispatchAction = ae.DispatchAction.Cancel : this.router.dispatchAction = ae.DispatchAction.FireOnce;
};
var o;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_ExitFlowDirectToNextLevelToShowHomeUiChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "router", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowDirectToNextLevelToShowHomeUiDispatch") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_ExitFlowDirectToNextLevelToShowHomeUiDispatch = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowExitChannelLogicVariant: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d4cf7D3lTFIjJi45h8B+7oO", "G3_FStartAndExitFlow_ExitFlowExitChannelLogicVariant");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowExitChannelLogicVariant = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.variantCondition = function() {
return !0;
};
e.prototype.defineFunction = function() {
return function() {};
};
var o;
r([ ae.variantOf, ae.bindAtom("G3_FHome_ExitChannelLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "source", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowExitChannelLogicVariant") ], e);
}(ae.VariantAtom);
o.G3_FStartAndExitFlow_ExitFlowExitChannelLogicVariant = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowExitChannelToSaveGameDataChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "33a1b6GRjVCCo6u9qSU/b01", "G3_FStartAndExitFlow_ExitFlowExitChannelToSaveGameDataChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowExitChannelToSaveGameDataChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FBase_ExitChannel"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "exitChannel", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_ExitFlowSaveGameDataSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "saveGameDataSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowExitChannelToSaveGameDataChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_ExitFlowExitChannelToSaveGameDataChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowSaveGameDataLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "efe529iMMREn4wMpmhoFS6g", "G3_FStartAndExitFlow_ExitFlowSaveGameDataLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowSaveGameDataLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function() {
var t = this.exitChannel.data, e = t.back, o = t.win, n = t.level, i = t.hp, r = t.degree, a = t.degreeColor;
console.log("[G3_FStartAndExitFlow] 保存游戏数据", {
back: e,
win: o,
level: n,
hp: i,
degree: r,
degreeColor: a
});
if (o) {
var c = this.gameDataLogic.storage.level;
console.log("[G3_FStartAndExitFlow] 保存游戏数据，获得胜利，升级 oldLevel:", c, "newLevel:", n);
if (n !== c && c > 0) {
this.gameDataLogic.runtime.prevLevel = c;
this.gameDataLogic.runtime.levelChangeStartTime = this.worldMeta.worldTime;
this.gameDataLogic.runtime.playTime = this.worldMeta.worldTime;
}
}
this.gameDataLogic.storage.level = n;
this.gameDataLogic.storage.hp = i;
this.gameDataLogic.storage.degree = r;
this.gameDataLogic.storage.degreeColor = a;
this.firstUiPlayLogic.runtime.loading = !1;
this.firstUiEffectLogic.runtime.tagY = 180;
this.firstUiEffectLogic.runtime.firstStartTime = this.worldMeta.worldTime;
};
var o, n, c, l, s, f;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_ExitFlowSaveGameDataSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FBase_ExitChannel"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "exitChannel", void 0);
r([ ae.bindAtom("G3_FHome_GameDataLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "gameDataLogic", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "worldMeta", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiPlayLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "firstUiPlayLogic", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiEffectLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "firstUiEffectLogic", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowSaveGameDataLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_ExitFlowSaveGameDataLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowSaveGameDataSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "84ecaq2nC5HWLLpX3C/CPoX", "G3_FStartAndExitFlow_ExitFlowSaveGameDataSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowSaveGameDataSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowSaveGameDataSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_ExitFlowSaveGameDataSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowShowHomeUiLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e702bCEp/5GCbOls+Srm3nj", "G3_FStartAndExitFlow_ExitFlowShowHomeUiLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowShowHomeUiLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {
showHomeUi: !1
};
};
e.prototype.onExecute = function() {
var t = this.exitChannel.data, e = t.back, o = t.win, n = t.level, i = t.hp, r = t.degree, a = t.degreeColor;
console.log("[G3_FStartAndExitFlow] 显示主界面数据", {
back: e,
win: o,
level: n,
hp: i,
degree: r,
degreeColor: a
});
this.firstUiStartLogic.runtime.firstUiVisible = !0;
};
var o, n, c;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_ExitFlowShowHomeUiSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FBase_ExitChannel"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "exitChannel", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiStartLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "firstUiStartLogic", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowShowHomeUiLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_ExitFlowShowHomeUiLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowShowHomeUiSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d07cc9hFe1BoqvU6vwg+cNp", "G3_FStartAndExitFlow_ExitFlowShowHomeUiSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowShowHomeUiSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowShowHomeUiSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_ExitFlowShowHomeUiSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_ExitFlowaveGameDataToCheckPassAllLevelsChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "821f5GTAJVLTr2RV/bR5Smy", "G3_FStartAndExitFlow_ExitFlowaveGameDataToCheckPassAllLevelsChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_ExitFlowSaveGameDataToCheckPassAllLevelsChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FStartAndExitFlow_ExitFlowSaveGameDataSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "saveGameDataSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "checkPassAllLevelsSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_ExitFlowSaveGameDataToCheckPassAllLevelsChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_ExitFlowSaveGameDataToCheckPassAllLevelsChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_LevelConfigGenLogicVariant: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "91387ZYRH9JqZl6UupHKmLU", "G3_FStartAndExitFlow_LevelConfigGenLogicVariant");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_LevelConfigGenLogicVariant = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineFunction = function() {
var t = this;
return function() {
t.combatInitLogic.storage.level > t.maxLevelCountConfig.maxLevelCount || t.levelConfigGenFunction(t.levelConfigUrl, 0);
};
};
var o, n, c, l, s;
r([ ae.variantOf, ae.bindAtom("G3_FBase_LevelConfigGenLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "source", void 0);
r([ ae.bindAtom("G3_FBase_LevelConfigUrl"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "levelConfigUrl", void 0);
r([ ae.bindAtom("G3_FBase_CombatInitLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "combatInitLogic", void 0);
r([ ae.bindAtom("G3_FBase_LevelConfigGenFunction"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "levelConfigGenFunction", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_MaxLevelCountConfig"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "maxLevelCountConfig", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_LevelConfigGenLogicVariant") ], e);
}(ae.VariantAtom);
o.G3_FStartAndExitFlow_LevelConfigGenLogicVariant = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_LevelDownloadLogicVariant: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5d7270yWg5HfbpuJHqPB9TK", "G3_FStartAndExitFlow_LevelDownloadLogicVariant");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_CheckLevelDownloadedLogic = o.G3_FStartAndExitFlow_CheckLevelDownloadedRouter = o.G3_FStartAndExitFlow_CheckLevelDownloadedSignal = o.G3_FStartAndExitFlow_LevelDownloadLogicVariant = o.G3_FStartAndExitFlow_NextLevelUrlLoadAtom = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineLoad = function() {
return {
silent: !0,
paths: {
Json: [ this.nextLevelUrlConfig.LevelUrl ]
}
};
};
var o;
r([ ae.bindAtom("G3_FStartAndExitFlow_NextLevelUrlConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "nextLevelUrlConfig", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_NextLevelUrlLoadAtom") ], e);
}(ae.LoadAtom);
o.G3_FStartAndExitFlow_NextLevelUrlLoadAtom = c;
var l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineFunction = function() {
var t = this;
return function() {
t.gameDataLogic.storage.level >= t.maxLevelCountConfig.maxLevelCount || t.silentLoad(t.nextLevelUrlLoadAtom, t.checkLevelDownloadedRouter);
};
};
var o, n, c, l, s, f;
r([ ae.variantOf, ae.bindAtom("G3_FBase_LevelDownloadLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "source", void 0);
r([ ae.bindAtom("G_FAtom_SilentLoad"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "silentLoad", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_NextLevelUrlLoadAtom"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "nextLevelUrlLoadAtom", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_CheckLevelDownloadedRouter"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "checkLevelDownloadedRouter", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_MaxLevelCountConfig"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "maxLevelCountConfig", void 0);
r([ ae.bindAtom("G3_FHome_GameDataLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "gameDataLogic", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_LevelDownloadLogicVariant") ], e);
}(ae.VariantAtom);
o.G3_FStartAndExitFlow_LevelDownloadLogicVariant = l;
var s = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "globalDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_CheckLevelDownloadedSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_CheckLevelDownloadedSignal = s;
var f = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_Silent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "jsonData", void 0);
r([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G3_FStartAndExitFlow_CheckLevelDownloadedSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "signal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_CheckLevelDownloadedRouter") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_CheckLevelDownloadedRouter = f;
var p = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineStorageData = function() {
return {
nextLevelDownloadedUrl: ""
};
};
e.prototype.onExecute = function(t, e) {
var o = this.nextLevelUrlConfig.LevelUrl;
this.silentData.isDone && (e.storage.nextLevelDownloadedUrl = o);
};
var o, n, c;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_CheckLevelDownloadedSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G_FAtom_Silent"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "silentData", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_NextLevelUrlConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "nextLevelUrlConfig", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_CheckLevelDownloadedLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_CheckLevelDownloadedLogic = p;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_LevelExConfigGenLogicVariant: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bda7abNcqdOspyZ0UMM+LWt", "G3_FStartAndExitFlow_LevelExConfigGenLogicVariant");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_LevelExConfigGenLogicVariant = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineFunction = function() {
var t = this;
return function() {
t.levelConfigUrl.ConfigUrl = void 0;
};
};
var o, n;
r([ ae.variantOf, ae.bindAtom("G3_FBase_LevelExConfigGenLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "source", void 0);
r([ ae.bindAtom("G3_FBase_LevelExConfigUrl"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "levelConfigUrl", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_LevelExConfigGenLogicVariant") ], e);
}(ae.VariantAtom);
o.G3_FStartAndExitFlow_LevelExConfigGenLogicVariant = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_MaxLevelCountConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "784dbl4XYpDfa5UJ/khgScr", "G3_FStartAndExitFlow_MaxLevelCountConfig");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_MaxLevelCountConfig = void 0;
var a = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineConfig = function() {
return {
maxLevelCount: 500
};
};
return r([ ae.atomClass("G3_FStartAndExitFlow_MaxLevelCountConfig") ], e);
}(ae.ConfigAtom);
o.G3_FStartAndExitFlow_MaxLevelCountConfig = a;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_Namespace: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "44dfbv0H/pEt4AVpIH/7o4h", "G3_FStartAndExitFlow_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow = void 0;
(function(t) {
var e;
(t.FeatureDescription || (t.FeatureDescription = {})).Description = "开始和退出流程拆分特性";
(function(t) {
t.Name = "G3";
})(e = t.GameName || (t.GameName = {}));
(function(t) {
t[t.Name = e.Name + "_FStartAndExitFlow"] = "Name";
})(t.FeatureName || (t.FeatureName = {}));
(function(t) {
t[t.Version = 17] = "Version";
t.CreateTime = "2026-04-01 16:03:28";
})(t.BundleInfo || (t.BundleInfo = {}));
})(o.G3_FStartAndExitFlow || (o.G3_FStartAndExitFlow = {}));
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_NewFirstUiConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d058cCjJNtEV4pAP+ZRaXEO", "G3_FStartAndExitFlow_NewFirstUiConfig");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_NewFirstUiConfig = void 0;
var a = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineConfig = function() {
return {
showNewFirstUi: !0
};
};
return r([ ae.atomClass("G3_FStartAndExitFlow_NewFirstUiConfig") ], e);
}(ae.ConfigAtom);
o.G3_FStartAndExitFlow_NewFirstUiConfig = a;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_NewFirstUiGenLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "978fck4/kRC5pNK3BMPUHGe", "G3_FStartAndExitFlow_NewFirstUiGenLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_NewFirstUiGenLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onExecute = function() {
var t = this;
if (this.newFirstUiConfig.showNewFirstUi) {
this.firstUiRender.Arrows.img = this.asset.IconLogo;
this.firstUiRender.Arrows.rgb = 16777215;
this.firstUiRender.Enter.img = this.asset.BtnBlue;
this.firstUiRender.Enter.rgb = 16741669;
this.firstUiRender.LevelContainer.layout.spacingX = 20;
this.firstUiRender.LevelLabel.fontSize = 54;
this.firstUiRender.NumberSlider.width = [ function() {
var e = "" + t.firstUiEffectLogic.runtime.oldLevel, o = "" + t.firstUiEffectLogic.runtime.newLevel;
return 35.1 * Math.max(e.length, o.length);
}, [ this.firstUiEffectLogic, "runtime", "oldLevel" ], [ this.firstUiEffectLogic, "runtime", "newLevel" ] ];
this.firstUiRender.LevelOld.fontSize = 54;
this.firstUiRender.LevelNew.fontSize = 54;
this.firstUiRender.Degree.fontSize = 38;
}
};
var o, n, c, l, s, f;
r([ ae.onChain, ae.bindAtom("G3_FHome_FirstUiRender"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "firstUiRender", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_Asset"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "asset", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiEffectLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "firstUiEffectLogic", void 0);
r([ ae.bindAtom("G3_FHome_GetSchemeValueFunction"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "getSchemeValueFunction", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "skinInitLogic", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_NewFirstUiConfig"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "newFirstUiConfig", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_NewFirstUiGenLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_NewFirstUiGenLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_NextLevelUrlConfigGenLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9a1eaKjup1Kjq7a+T/0KheW", "G3_FStartAndExitFlow_NextLevelUrlConfigGenLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
}, c = this && this.__read || function(t, e) {
var o = "function" == typeof Symbol && t[Symbol.iterator];
if (!o) return t;
var n, i, r = o.call(t), a = [];
try {
for (;(void 0 === e || e-- > 0) && !(n = r.next()).done; ) a.push(n.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
n && !n.done && (o = r.return) && o.call(r);
} finally {
if (i) throw i.error;
}
}
return a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_NextLevelUrlConfigGenLogic = void 0;
var l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function() {
for (var t = this.combatInitLogic.storage.level + 1, e = t, o = 0, n = this.baseConfig.levelConfigReplace.length; o < n; o++) {
var i = c(this.baseConfig.levelConfigReplace[o], 3), r = i[0], a = i[1], l = i[2];
if (t >= r && t <= a) {
e = l + (t - r);
break;
}
}
this.nextLevelUrlConfig.LevelUrl = this.arrowLeveAsset.arrowConfig(e);
};
var o, n, l, s;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_NextLevelUrlConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "nextLevelUrlConfig", void 0);
r([ ae.bindAtom("G3_FBase_Config"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "baseConfig", void 0);
r([ ae.bindAtom("G3_FBase_ArrowLevelAsset"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "arrowLeveAsset", void 0);
r([ ae.bindAtom("G3_FBase_CombatInitLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "combatInitLogic", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_NextLevelUrlConfigGenLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_NextLevelUrlConfigGenLogic = l;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_NextLevelUrlConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c037drLv/5OjbyqQgZqws5Y", "G3_FStartAndExitFlow_NextLevelUrlConfig");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_NextLevelUrlConfig = void 0;
var a = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineConfig = function() {
return {
LevelUrl: void 0
};
};
return r([ ae.atomClass("G3_FStartAndExitFlow_NextLevelUrlConfig") ], e);
}(ae.ConfigAtom);
o.G3_FStartAndExitFlow_NextLevelUrlConfig = a;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_NoNetConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a1119V/FRhPMbGKlDK1hV8z", "G3_FStartAndExitFlow_NoNetConfig");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_NoNetConfig = void 0;
var a = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineConfig = function() {
return {
supportNoNetHint: !0
};
};
return r([ ae.atomClass("G3_FStartAndExitFlow_NoNetConfig") ], e);
}(ae.ConfigAtom);
o.G3_FStartAndExitFlow_NoNetConfig = a;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_NoNetUiCloseLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "48323p9WHFJB6o4P36DvEd6", "G3_FStartAndExitFlow_NoNetUiCloseLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_NoNetUiCloseLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onExecute = function() {
console.log("[G3_FStartAndExitFlow] 没有网络提示Ui关闭");
this.createNoNetUiLogic.runtime.noNetUiActive = !1;
this.exitRequest.emitToParent();
};
var o, n, c;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_NoNetUiCloseSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "noNetUiCloseSignal", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreateNoNetUiLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "createNoNetUiLogic", void 0);
r([ ae.bindAtom("G_FAtom_ExitRequest"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "exitRequest", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_NoNetUiCloseLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_NoNetUiCloseLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_NoNetUiCloseSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8326f8CKxNDSr4H1EwIO3XO", "G3_FStartAndExitFlow_NoNetUiCloseSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_NoNetUiCloseSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G3_FStartAndExitFlow_NoNetUiDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "noNetUiDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_NoNetUiCloseSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_NoNetUiCloseSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_NoNetUiDomain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d138dIlgKlJ8YeVNKSluY6I", "G3_FStartAndExitFlow_NoNetUiDomain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_NoNetUiDomain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "transform", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_NoNetUiDomain") ], e);
}(ae.EntityDomainAtom);
o.G3_FStartAndExitFlow_NoNetUiDomain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_NoNetUiRender: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a3e81321+RL+oqes1iu6tmo", "G3_FStartAndExitFlow_NoNetUiRender");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_NoNetUiRender = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRender = function() {
var t = this;
return ae.Node({
name: "NoNetUi",
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
alpha: [ function() {
return t.noNetUiLogic.runtime.noNetUiActive ? 1 : 0;
}, [ this.noNetUiLogic, "runtime", "noNetUiActive" ] ]
}, ae.Sprite({
name: "NoNetBgMask",
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
blockInputEvents: [ function() {
return t.noNetUiLogic.runtime.noNetUiActive;
}, [ this.noNetUiLogic, "runtime", "noNetUiActive" ] ]
}), ae.Sprite({
name: "NoNetPanel",
width: 704,
height: 728,
layout: {
type: ae.LayoutType.Vertical,
resizeMode: ae.LayoutResizeMode.Container,
spacingY: 30,
paddingTop: 50,
paddingBottom: 20,
paddingLeft: 60,
paddingRight: 60
},
rgb: [ function() {
return t.getSchemeValueFunction("uiNoNetPanelColor", 7050491);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
img: this.baseAsset.CommonBorder,
renderType: ae.RenderType.Sliced
}, ae.Text({
name: "NoNetTitle",
y: 280,
font: this.homeAsset.SpartanBoldFont,
text: "No Network!",
fontSize: 55,
rgb: [ function() {
return t.getSchemeValueFunction("uiNoNetTitleColor", 16777215);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
}), ae.Sprite({
name: "infoPanel",
width: 664,
height: 558,
y: -65,
layout: {
type: ae.LayoutType.Vertical,
resizeMode: ae.LayoutResizeMode.Container,
spacingY: 30,
paddingTop: 50,
paddingBottom: 50,
paddingLeft: 60,
paddingRight: 60
},
rgb: [ function() {
return t.getSchemeValueFunction("uiNoNetInfoPanelColor", 16777215);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
img: this.baseAsset.CommonBorderInfo,
renderType: ae.RenderType.Sliced
}, ae.Node({
name: "NoNetDescNode",
y: 99,
height: 260
}, ae.Sprite({
name: "NoWifi",
img: this.noNetUiAsset.NoWifi,
rgb: [ function() {
return t.getSchemeValueFunction("uiNoNetWifiColor", 10266582);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
})), ae.Node({
name: "EmptyNode",
y: -66,
height: 10
}), ae.Sprite({
name: "OkBtn",
y: -165,
width: [ function() {
return 478;
}, [ this.worldMeta, "worldTime" ] ],
height: 128,
img: this.noNetUiAsset.BtnBlue,
rgb: [ function() {
return t.getSchemeValueFunction("uiNoNetOkBtnColor", 16750915);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
renderType: ae.RenderType.Sliced,
event: {
buttonClick: this.noNetUiCloseChain
},
button: {
transition: ae.ButtonTransition.Scale,
duration: .1,
zoomScale: .9,
interactable: [ function() {
return t.noNetUiLogic.runtime.noNetUiActive;
}, [ this.noNetUiLogic, "runtime", "noNetUiActive" ] ]
}
}, ae.Text({
name: "OkBtnText",
font: this.homeAsset.SpartanBoldFont,
text: "OK",
fontSize: 50,
rgb: [ function() {
return t.getSchemeValueFunction("uiNoNetOkBtnTextColor", 16777215);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
}), ae.Sprite({
name: "LightPoint",
img: this.noNetUiAsset.LightPoint,
x: -226,
y: 53,
active: !1
})))));
};
e.prototype.defineRenderName = function() {
return null;
};
var o, n, c, l, s, f, p, d, u;
r([ ae.entityRenderer, ae.bindAtom("G3_FStartAndExitFlow_NoNetUiDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "noNetUiDomain", void 0);
r([ ae.bindAtom("G3_FBase_Asset"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "baseAsset", void 0);
r([ ae.bindAtom("G3_FHome_Asset"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "homeAsset", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_UIEventToNoNetUiCloseChain"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "noNetUiCloseChain", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "skinInitLogic", void 0);
r([ ae.bindAtom("G3_FHome_GetSchemeValueFunction"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "getSchemeValueFunction", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreateNoNetUiLogic"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], e.prototype, "noNetUiLogic", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_Asset"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], e.prototype, "noNetUiAsset", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], e.prototype, "worldMeta", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_NoNetUiRender") ], e);
}(ae.RenderAtom);
o.G3_FStartAndExitFlow_NoNetUiRender = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_PassAllLevelsConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a52e1evMVNJi70+Pu+koAPJ", "G3_FStartAndExitFlow_PassAllLevelsConfig");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_PassAllLevelsConfig = void 0;
var a = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineConfig = function() {
return {
supportPassAllLevelsHint: !0
};
};
return r([ ae.atomClass("G3_FStartAndExitFlow_PassAllLevelsConfig") ], e);
}(ae.ConfigAtom);
o.G3_FStartAndExitFlow_PassAllLevelsConfig = a;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_PassAllLevelsSpineCompleteLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8377a/JxXdJ1of9E3ozlvkl", "G3_FStartAndExitFlow_PassAllLevelsSpineCompleteLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_PassAllLevelsSpineCompleteLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onExecute = function() {
if (!this.createPassAllLevelsUiLogic.runtime.passAllLevelsSpineLoopInit) {
console.log("[G3_FStartAndExitFlow] 通关全部关卡 Spine 完成，切换到 init 循环");
this.createPassAllLevelsUiLogic.runtime.passAllLevelsSpineLoopInit = !0;
}
};
var o, n;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_PassAllLevelsSpineCompleteSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "passAllLevelsSpineCompleteSignal", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "createPassAllLevelsUiLogic", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_PassAllLevelsSpineCompleteLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_PassAllLevelsSpineCompleteLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_PassAllLevelsSpineCompleteSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e38fbETl4lAA52zXZ4byksT", "G3_FStartAndExitFlow_PassAllLevelsSpineCompleteSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_PassAllLevelsSpineCompleteSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G3_FStartAndExitFlow_PassAllLevelsUiDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "passAllLevelsUiDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_PassAllLevelsSpineCompleteSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_PassAllLevelsSpineCompleteSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_PassAllLevelsUiCloseLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9a42fb9m81ERIvwl+uuTCgx", "G3_FStartAndExitFlow_PassAllLevelsUiCloseLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_PassAllLevelsUiCloseLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onExecute = function() {
console.log("[G3_FStartAndExitFlow] 通关全部关卡提示Ui关闭");
this.createPassAllLevelsUiLogic.runtime.passAllLevelsUiActive = !1;
this.createPassAllLevelsUiLogic.runtime.passAllLevelsSpineLoopInit = !1;
this.exitRequest.emitToParent();
};
var o, n, c;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_PassAllLevelsUiCloseSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "passAllLevelsUiCloseSignal", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "createPassAllLevelsUiLogic", void 0);
r([ ae.bindAtom("G_FAtom_ExitRequest"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "exitRequest", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_PassAllLevelsUiCloseLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_PassAllLevelsUiCloseLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_PassAllLevelsUiCloseSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a27fdRlTmtP8Icz67VZH9wf", "G3_FStartAndExitFlow_PassAllLevelsUiCloseSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_PassAllLevelsUiCloseSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G3_FStartAndExitFlow_PassAllLevelsUiDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "passAllLevelsUiDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_PassAllLevelsUiCloseSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_PassAllLevelsUiCloseSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_PassAllLevelsUiDomain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d590eHgN99JyKr4BCNFERDk", "G3_FStartAndExitFlow_PassAllLevelsUiDomain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_PassAllLevelsUiDomain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "transform", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_PassAllLevelsUiDomain") ], e);
}(ae.EntityDomainAtom);
o.G3_FStartAndExitFlow_PassAllLevelsUiDomain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_PassAllLevelsUiRender: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "16ecc1w8K9L9pSbCy0p7c3G", "G3_FStartAndExitFlow_PassAllLevelsUiRender");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_PassAllLevelsUiRender = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRender = function() {
var t = this;
return ae.Graphics({
name: "PassAllLevelsUi",
alpha: [ function() {
return t.passAllLevelsUiLogic.runtime.passAllLevelsUiActive ? 1 : 0;
}, [ this.passAllLevelsUiLogic, "runtime", "passAllLevelsUiActive" ] ],
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
var e = t.windowSize().width, o = t.windowSize().height;
return [ [ ae.GraphicsCmd.FillColor, 16777215 ], [ ae.GraphicsCmd.Rect, -e / 2, -o / 2, e, o ], [ ae.GraphicsCmd.Fill ] ];
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
}, ae.Sprite({
name: "PassAllLevelsBgMask",
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
alpha: 0,
img: this.homeAsset.Color,
blockInputEvents: [ function() {
return t.passAllLevelsUiLogic.runtime.passAllLevelsUiActive;
}, [ this.passAllLevelsUiLogic, "runtime", "passAllLevelsUiActive" ] ]
}), ae.Sprite({
name: "PanelLogoLeft",
widget: {
isAlignTop: !0,
isAlignLeft: !0,
top: 0,
left: 0,
alignMode: ae.WidgetAlignMode.Always
},
sizeMode: ae.SizeMode.Custom,
width: this.windowSize().width / 2,
height: 475,
img: this.homeAsset.PanelLogo,
rgb: [ function() {
return t.getSchemeValueFunction("uiPanelLogoColor", 13620729);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
renderType: ae.RenderType.Sliced
}), ae.Sprite({
name: "PanelLogoRight",
widget: {
isAlignTop: !0,
isAlignRight: !0,
top: 0,
right: 0,
alignMode: ae.WidgetAlignMode.Always
},
scaleX: -1,
sizeMode: ae.SizeMode.Custom,
width: this.windowSize().width / 2,
height: 475,
img: this.homeAsset.PanelLogo,
rgb: [ function() {
return t.getSchemeValueFunction("uiPanelLogoColor", 13620729);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
renderType: ae.RenderType.Sliced
}), ae.Node({
name: "TopSafe",
widget: {
isAlignTop: !0,
isAlignLeft: !0,
isAlignRight: !0,
isAlignBottom: !0,
alignMode: ae.WidgetAlignMode.Always,
safeArea: !0
}
}, ae.Sprite({
name: "Back",
widget: {
isAlignTop: !0,
isAlignLeft: !0,
top: 54,
left: 48,
alignMode: ae.WidgetAlignMode.Always
},
width: 47,
height: 72,
img: this.homeAsset.IconBack,
rgb: [ function() {
return t.getSchemeValueFunction("uiBackColor", 9936074);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
event: {
buttonClick: this.passAllLevelsUiCloseChain
},
button: {
transition: ae.ButtonTransition.Scale,
duration: .1,
zoomScale: .9,
enabled: [ function() {
return t.passAllLevelsUiLogic.runtime.passAllLevelsUiActive;
}, [ this.passAllLevelsUiLogic, "runtime", "passAllLevelsUiActive" ] ]
}
})), ae.Spine({
name: "ResultStageClearSpine",
spineUrl: this.passAllLevelsUiAsset.ResultStageClearSpine,
animation: {
name: [ function() {
return t.passAllLevelsUiLogic.runtime.passAllLevelsSpineLoopInit ? "init" : "in";
}, [ this.passAllLevelsUiLogic, "runtime", "passAllLevelsSpineLoopInit" ] ],
loop: [ function() {
return t.passAllLevelsUiLogic.runtime.passAllLevelsSpineLoopInit;
}, [ this.passAllLevelsUiLogic, "runtime", "passAllLevelsSpineLoopInit" ] ]
},
event: {
complete: this.passAllLevelsSpineCompleteChain
},
slots: {
hook_trophy: ae.Sprite({
name: "hook_trophy",
img: this.passAllLevelsUiAsset.Trophy,
rgb: [ function() {
return t.getSchemeValueFunction("uiPassAllLevelsTrophyColor", 5861091);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
}),
hook_banner: ae.Sprite({
name: "hook_banner",
width: [ function() {
return t.windowSize().width;
}, [ this.worldMeta, "worldTime" ] ],
img: this.passAllLevelsUiAsset.DescBg,
rgb: [ function() {
return t.getSchemeValueFunction("uiPassAllLevelsDescBgColor", 4292602);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
}),
hook_text: ae.Text({
name: "hook_text",
width: 600,
font: this.homeAsset.SpartanBoldFont,
text: "Congratulations!",
fontSize: 54,
enableWrapText: !0,
horizontalAlign: ae.TextHorizontalAlign.CENTER,
rgb: [ function() {
return t.getSchemeValueFunction("uiPassAllLevelsDescUpTextColor", 16777215);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
}),
hook_text2: ae.Text({
name: "hook_text2",
width: 600,
font: this.homeAsset.SpartanBoldFont,
text: "You have completed all levels !",
fontSize: 40,
enableWrapText: !0,
rgb: [ function() {
return t.getSchemeValueFunction("uiPassAllLevelsDescDownTextColor", 12042238);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
horizontalAlign: ae.TextHorizontalAlign.CENTER
})
}
}));
};
e.prototype.defineRenderName = function() {
return null;
};
var o, n, c, l, s, f, p, d, u, _;
r([ ae.entityRenderer, ae.bindAtom("G3_FStartAndExitFlow_PassAllLevelsUiDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "passAllLevelsUiDomain", void 0);
r([ ae.bindAtom("G3_FHome_Asset"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "homeAsset", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "skinInitLogic", void 0);
r([ ae.bindAtom("G3_FHome_GetSchemeValueFunction"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "getSchemeValueFunction", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_UIEventToPassAllLevelsUiCloseChain"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "passAllLevelsUiCloseChain", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_UIEventToPassAllLevelsSpineCompleteChain"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "passAllLevelsSpineCompleteChain", void 0);
r([ ae.bindAtom("G_FAtom_GetWinSize"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], e.prototype, "windowSize", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], e.prototype, "worldMeta", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiLogic"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], e.prototype, "passAllLevelsUiLogic", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_Asset"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], e.prototype, "passAllLevelsUiAsset", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_PassAllLevelsUiRender") ], e);
}(ae.RenderAtom);
o.G3_FStartAndExitFlow_PassAllLevelsUiRender = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCheckNoNetLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bd6688t0dJE+LUKSZVuZU45", "G3_FStartAndExitFlow_StartFlowCheckNoNetLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCheckNoNetLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function() {
console.log("[G3_FStartAndExitFlow] 检查没有网络");
if (this.noNetConfig.supportNoNetHint) {
var t = this.getNetworkState(), e = this.checkLevelDownloadedLogic.storage.nextLevelDownloadedUrl;
if (!(t || e && "" !== e)) {
this.checkNoNetToDirectToPlayDispatch.runtime.checkNoNet = !0;
this.createNoNetUiLogic.runtime.noNetUiActive = !0;
return;
}
}
this.checkNoNetToDirectToPlayDispatch.runtime.checkNoNet = !1;
};
var o, n, c, l, s, f, p;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_StartFlowCheckNoNetSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_StartFlowCheckNoNetToDirectToPlayDispatch"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "checkNoNetToDirectToPlayDispatch", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_NoNetConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "noNetConfig", void 0);
r([ ae.bindAtom("G3_FHome_GameDataLogic"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "gameDataLogic", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreateNoNetUiLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "createNoNetUiLogic", void 0);
r([ ae.bindAtom("G_FAtom_GetNetworkState"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "getNetworkState", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_CheckLevelDownloadedLogic"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], e.prototype, "checkLevelDownloadedLogic", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCheckNoNetLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_StartFlowCheckNoNetLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCheckNoNetSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "56037lGOrVPT6UNw6/9IFTf", "G3_FStartAndExitFlow_StartFlowCheckNoNetSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCheckNoNetSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCheckNoNetSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_StartFlowCheckNoNetSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCheckNoNetToDirectToPlayChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "09fb76N0P9A47EYeipOjc92", "G3_FStartAndExitFlow_StartFlowCheckNoNetToDirectToPlayChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCheckNoNetToDirectToPlayChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FStartAndExitFlow_StartFlowCheckNoNetSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "checkNoNetSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_StartFlowDirectToPlaySignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "directToPlaySignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCheckNoNetToDirectToPlayChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_StartFlowCheckNoNetToDirectToPlayChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCheckNoNetToDirectToPlayDispatch: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "57be0xnxjpIfLd3PrradSgh", "G3_FStartAndExitFlow_StartFlowCheckNoNetToDirectToPlayDispatch");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCheckNoNetToDirectToPlayDispatch = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {
checkNoNet: !1
};
};
e.prototype.onExecute = function(t, e) {
e.runtime.checkNoNet ? this.router.dispatchAction = ae.DispatchAction.Cancel : this.router.dispatchAction = ae.DispatchAction.FireOnce;
};
var o;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_StartFlowCheckNoNetToDirectToPlayChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "router", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCheckNoNetToDirectToPlayDispatch") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_StartFlowCheckNoNetToDirectToPlayDispatch = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4073eU7pNROuon3WEXgHDVu", "G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function() {
console.log("[G3_FStartAndExitFlow] 检查所有关卡是否通过");
if (this.passAllLevelsConfig.supportPassAllLevelsHint && this.gameDataLogic.storage.level > this.maxLevelCountConfig.maxLevelCount) {
this.createNoNetUiToCheckPassAllLevelsDispatch.runtime.checkPassAllLevels = !0;
this.createPassAllLevelsUiLogic.runtime.passAllLevelsUiActive = !0;
this.createPassAllLevelsUiLogic.runtime.passAllLevelsSpineLoopInit = !1;
} else this.createNoNetUiToCheckPassAllLevelsDispatch.runtime.checkPassAllLevels = !1;
};
var o, n, c, l, s, f;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsToCheckNoNetDispatch"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "createNoNetUiToCheckPassAllLevelsDispatch", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_PassAllLevelsConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "passAllLevelsConfig", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_MaxLevelCountConfig"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "maxLevelCountConfig", void 0);
r([ ae.bindAtom("G3_FHome_GameDataLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "gameDataLogic", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "createPassAllLevelsUiLogic", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0a168VMrwhHK4EsOgR1GKfW", "G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsToCheckNoNetChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d3086pH9aRCloufKxe0kKUk", "G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsToCheckNoNetChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsToCheckNoNetChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "checkPassAllLevelsSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_StartFlowCheckNoNetSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "checkNoNetSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsToCheckNoNetChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsToCheckNoNetChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsToCheckNoNetDispatch: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "912388XI0VDSq181zeXry3+", "G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsToCheckNoNetDispatch");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsToCheckNoNetDispatch = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {
checkPassAllLevels: !1
};
};
e.prototype.onExecute = function(t, e) {
e.runtime.checkPassAllLevels ? this.router.dispatchAction = ae.DispatchAction.Cancel : this.router.dispatchAction = ae.DispatchAction.FireOnce;
};
var o;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsToCheckNoNetChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "router", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsToCheckNoNetDispatch") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsToCheckNoNetDispatch = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCreateFirstUiLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "49e14H+SphAvYNdZkLeLjj7", "G3_FStartAndExitFlow_StartFlowCreateFirstUiLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCreateFirstUiLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function(t) {
console.log("[G3_FStartAndExitFlow] 创建FirstUi");
this.firstUiStartLogic.runtime.selectedPage = 1;
var e = this.firstUiDomain.create();
this.childOf.addChild(t, e);
this.firstUiStartLogic.runtime.firstUiVisible = !1;
};
var o, n, c, l;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreateFirstUiSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiStartLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "firstUiStartLogic", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiDomain"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "firstUiDomain", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "childOf", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCreateFirstUiLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_StartFlowCreateFirstUiLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCreateFirstUiSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "28b369HrIdFFJIQkxhbHTH0", "G3_FStartAndExitFlow_StartFlowCreateFirstUiSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCreateFirstUiSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCreateFirstUiSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_StartFlowCreateFirstUiSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCreateFirstUiToCreatePassAllLevelsUiChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bd150zeci9L2628CuubwgS0", "G3_FStartAndExitFlow_StartFlowCreateFirstUiToCreatePassAllLevelsUiChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCreateFirstUiToCreatePassAllLevelsUiChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreateFirstUiSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "createFirstUiSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "createPassAllLevelsUiSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCreateFirstUiToCreatePassAllLevelsUiChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_StartFlowCreateFirstUiToCreatePassAllLevelsUiChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCreateNoNetUiLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e88f7lMrmZBv4DXx9FPKO4p", "G3_FStartAndExitFlow_StartFlowCreateNoNetUiLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCreateNoNetUiLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {
noNetUiActive: !0
};
};
e.prototype.onExecute = function(t, e) {
console.log("[G3_FStartAndExitFlow] 创建没有网络提示Ui");
var o = this.noNetUiDomain.create();
this.childOf.addChild(t, o);
e.runtime.noNetUiActive = !1;
};
var o, n, c;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreateNoNetUiSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_NoNetUiDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "noNetUiDomain", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "childOf", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCreateNoNetUiLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_StartFlowCreateNoNetUiLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCreateNoNetUiSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e57d6E/f1dAmaNMdOvN6juB", "G3_FStartAndExitFlow_StartFlowCreateNoNetUiSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCreateNoNetUiSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCreateNoNetUiSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_StartFlowCreateNoNetUiSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCreateNoNetUiToCheckPassAllLevelsChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c7d4eyP0p5GKLUflMYtjAZP", "G3_FStartAndExitFlow_StartFlowCreateNoNetUiToCheckPassAllLevelsChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCreateNoNetUiToCheckPassAllLevelsChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreateNoNetUiSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "createNoNetUiSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "checkPassAllLevelsSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCreateNoNetUiToCheckPassAllLevelsChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_StartFlowCreateNoNetUiToCheckPassAllLevelsChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5a362Jkir1EQLLLRu+yktRA", "G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {
passAllLevelsUiActive: !0,
passAllLevelsSpineLoopInit: !1
};
};
e.prototype.onExecute = function(t, e) {
console.log("[G3_FStartAndExitFlow] 创建通关全部关卡提示Ui");
var o = this.passAllLevelsUiDomain.create();
this.childOf.addChild(t, o);
e.runtime.passAllLevelsUiActive = !1;
e.runtime.passAllLevelsSpineLoopInit = !1;
};
var o, n, c;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_PassAllLevelsUiDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "passAllLevelsUiDomain", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "childOf", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ee125RVXYVJnLcB96tju9c5", "G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiToCreateNoNetUiChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "37da8Tv9yhFN4LCYyPl5th3", "G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiToCreateNoNetUiChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiToCreateNoNetUiChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "createPassAllLevelsUiSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreateNoNetUiSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "createNoNetUiSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiToCreateNoNetUiChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiToCreateNoNetUiChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d551emz/6ZH1IIjrlCiKfqR", "G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function(t) {
console.log("[G3_FStartAndExitFlow] 创建过渡背景");
var e = this.transitionBackgroundDomain.create();
this.childOf.addChild(t, e);
};
var o, n, c;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_TransitionBackgroundDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "transitionBackgroundDomain", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "childOf", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c2faesqRQVMUpIjFWUNPEZd", "G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundToCreateFirstUiChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4c97cpBWY5GO5jVr1Y6xjCR", "G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundToCreateFirstUiChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundToCreateFirstUiChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "createTransitionBackgroundSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreateFirstUiSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "createFirstUiSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundToCreateFirstUiChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundToCreateFirstUiChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowDirectToPlayLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c6bb9raH6JApL/7nE5p/1qr", "G3_FStartAndExitFlow_StartFlowDirectToPlayLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowDirectToPlayLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function(t) {
console.log("[G3_FStartAndExitFlow] 直接跳转到关卡");
if ("game" !== this.homeConfig.defaultEnterMode) this.directToPlayToShowFirstUiDispatch.runtime.directToPlay = !1; else {
this.directToPlayToShowFirstUiDispatch.runtime.directToPlay = !0;
if (this.firstUiPlayLogic.runtime.loading) return;
this.firstUiPlayLogic.runtime.loading = !0;
this.firstUiStartLogic.runtime.firstUiVisible = !1;
var e = this.worldDomain.create();
this.worldDomain.worldState.multiTouch.set(e, !0);
this.worldDomain.worldState.worldId.set(e, this.baseWorld.worldId);
this.childOf.addChild(t, e);
}
};
var o, n, c, l, s, f, p, d;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_StartFlowDirectToPlaySignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_StartFlowDirectToPlayToShowFirstUiDispatch"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "directToPlayToShowFirstUiDispatch", void 0);
r([ ae.bindAtom("G3_FHome_Config"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "homeConfig", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiPlayLogic"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "firstUiPlayLogic", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiStartLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "firstUiStartLogic", void 0);
r([ ae.bindAtom("G_FAtom_WorldDomain"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "worldDomain", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], e.prototype, "childOf", void 0);
r([ ae.bindAtom("G3_FBase_WorldAtom"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], e.prototype, "baseWorld", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowDirectToPlayLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_StartFlowDirectToPlayLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowDirectToPlaySignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d8ce8G1CnNGwqUzysh99UzR", "G3_FStartAndExitFlow_StartFlowDirectToPlaySignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowDirectToPlaySignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowDirectToPlaySignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_StartFlowDirectToPlaySignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowDirectToPlayToShowFirstUiChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8db72Vdb8hONr1TU1mykiPH", "G3_FStartAndExitFlow_StartFlowDirectToPlayToShowFirstUiChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowDirectToPlayToShowFirstUiChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FStartAndExitFlow_StartFlowDirectToPlaySignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "directToPlaySignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_StartFlowShowFirstUiSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "showFirstUiSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowDirectToPlayToShowFirstUiChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_StartFlowDirectToPlayToShowFirstUiChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowDirectToPlayToShowFirstUiDispatch: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "abbbcjUEBZAUI1CT5FhV+BG", "G3_FStartAndExitFlow_StartFlowDirectToPlayToShowFirstUiDispatch");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowDirectToPlayToShowFirstUiDispatch = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {
directToPlay: !1
};
};
e.prototype.onExecute = function(t, e) {
e.runtime.directToPlay ? this.router.dispatchAction = ae.DispatchAction.Cancel : this.router.dispatchAction = ae.DispatchAction.FireOnce;
};
var o;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_StartFlowDirectToPlayToShowFirstUiChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "router", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowDirectToPlayToShowFirstUiDispatch") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_StartFlowDirectToPlayToShowFirstUiDispatch = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowFirstUiInitToInitFirstUiDataChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ba869n8oINFwJ+SdAeVeW3R", "G3_FStartAndExitFlow_StartFlowFirstUiInitToInitFirstUiDataChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowFirstUiInitToInitFirstUiDataChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FHome_FirstUiInitSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "firstUiInitSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_StartFlowInitFirstUiDataSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "initFirstUiDataSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowFirstUiInitToInitFirstUiDataChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_StartFlowFirstUiInitToInitFirstUiDataChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowFirstUiStartLogicVariant: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "146c1qxbatCPZcglPqIIP/N", "G3_FStartAndExitFlow_StartFlowFirstUiStartLogicVariant");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowFirstUiStartLogicVariant = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.variantCondition = function() {
return !0;
};
e.prototype.defineFunction = function() {
return function() {};
};
var o;
r([ ae.variantOf, ae.bindAtom("G3_FHome_FirstUiStartLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "source", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowFirstUiStartLogicVariant") ], e);
}(ae.VariantAtom);
o.G3_FStartAndExitFlow_StartFlowFirstUiStartLogicVariant = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowInitFirstUiDataLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "dc8d4WTe/FMCI2xBmQ1U510", "G3_FStartAndExitFlow_StartFlowInitFirstUiDataLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowInitFirstUiDataLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {
saveGameData: !1
};
};
e.prototype.onExecute = function() {
console.log("[G3_FStartAndExitFlow] 初始化FirstUi数据");
this.firstUiStartLogic.storage.startPlayedCount = 0;
this.firstUiStartLogic.storage.setupCount += 1;
console.log("重置 G3_FHome 启动后，玩过次数 和 启动过次数", this.firstUiStartLogic.storage.startPlayedCount, this.firstUiStartLogic.storage.setupCount);
this.firstUiEffectLogic.runtime.firstStartTime = this.worldMeta.worldTime;
this.firstUiEffectLogic.runtime.tagY = 180;
if (this.combatInitLogic.storage.combat.win) {
console.log("---- FirstUiStartLogic 获得胜利，升级");
this.combatInitLogic.storage.level += 1;
this.combatInitLogic.storage.combat.hp = -1;
this.combatInitLogic.storage.combat.arrows = {};
this.combatInitLogic.storage.combat.newCombat = !0;
this.combatInitLogic.storage.combat.win = !1;
}
this.gameDataLogic.storage.level = this.combatInitLogic.storage.level;
this.bannerAdLogic.storage.watchedInterstitialAdTime = 0;
this.firstUiEffectLogic.runtime.newLevel = this.gameDataLogic.storage.level;
this.firstUiEffectLogic.runtime.oldLevel = this.gameDataLogic.storage.level;
};
var o, n, c, l, s, f, p;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_StartFlowInitFirstUiDataSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiStartLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "firstUiStartLogic", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiEffectLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "firstUiEffectLogic", void 0);
r([ ae.bindAtom("G3_FBase_CombatInitLogic"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "combatInitLogic", void 0);
r([ ae.bindAtom("G3_FHome_GameDataLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "gameDataLogic", void 0);
r([ ae.bindAtom("G3_FBase_BannerAdLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "bannerAdLogic", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], e.prototype, "worldMeta", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowInitFirstUiDataLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_StartFlowInitFirstUiDataLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowInitFirstUiDataSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d0a76b1QoBP07+4n9P0p/kZ", "G3_FStartAndExitFlow_StartFlowInitFirstUiDataSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowInitFirstUiDataSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowInitFirstUiDataSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_StartFlowInitFirstUiDataSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowInitFirstUiDataToCreateTransitionBackgroundChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "46a6eLrQodE+5UDmH6DMqni", "G3_FStartAndExitFlow_StartFlowInitFirstUiDataToCreateTransitionBackgroundChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowInitFirstUiDataToCreateTransitionBackgroundChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FStartAndExitFlow_StartFlowInitFirstUiDataSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "initFirstUiDataSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "createTransitionBackgroundSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowInitFirstUiDataToCreateTransitionBackgroundChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_StartFlowInitFirstUiDataToCreateTransitionBackgroundChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowShowFirstUiLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "89512RIU2dN65kHpupUJTzO", "G3_FStartAndExitFlow_StartFlowShowFirstUiLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowShowFirstUiLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function() {
console.log("[G3_FStartAndExitFlow] 显示FirstUi");
this.firstUiStartLogic.runtime.firstUiVisible = !0;
};
var o, n;
r([ ae.onChain, ae.bindAtom("G3_FStartAndExitFlow_StartFlowShowFirstUiSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiStartLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "firstUiStartLogic", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowShowFirstUiLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_StartFlowShowFirstUiLogic = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_StartFlowShowFirstUiSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e8381zVH4VNnJ8r5TNoJ1q2", "G3_FStartAndExitFlow_StartFlowShowFirstUiSignal");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_StartFlowShowFirstUiSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_StartFlowShowFirstUiSignal") ], e);
}(ae.SignalAtom);
o.G3_FStartAndExitFlow_StartFlowShowFirstUiSignal = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_TransitionBackgroundDomain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e4a56MgZbhJl4sQr36UYgY4", "G3_FStartAndExitFlow_TransitionBackgroundDomain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_TransitionBackgroundDomain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "transform", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_TransitionBackgroundDomain") ], e);
}(ae.EntityDomainAtom);
o.G3_FStartAndExitFlow_TransitionBackgroundDomain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_TransitionBackgroundRender: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "71946WLD4VPoa3mhyRUy8MA", "G3_FStartAndExitFlow_TransitionBackgroundRender");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_TransitionBackgroundRender = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRender = function() {
var t = this;
return ae.Graphics({
name: "TransitionBackground",
width: [ function() {
return t.windowSizeLogic.runtime.screen.width;
}, [ this.windowSizeLogic, "runtime", "screen", "width" ] ],
height: [ function() {
return t.windowSizeLogic.runtime.screen.height;
}, [ this.windowSizeLogic, "runtime", "screen", "height" ] ],
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
var e = t.windowSizeLogic.runtime.screen.width, o = t.windowSizeLogic.runtime.screen.height, n = t.getSchemeValueFunction("uiBackgroundColor", [ 14478074 ]), i = Array.isArray(n) ? n : [ n ];
if (i.length <= 1) {
var r = i[0];
return [ [ ae.GraphicsCmd.FillColor, r ], [ ae.GraphicsCmd.Rect, -e / 2, -o / 2, e, o ], [ ae.GraphicsCmd.Fill ] ];
}
for (var a = [ [ ae.GraphicsCmd.Clear ] ], c = -o / 2, l = i.length - 1, s = 0; s < l; s++) for (var f = i[s], p = i[s + 1], d = f >> 16 & 255, u = f >> 8 & 255, _ = 255 & f, y = p >> 16 & 255, F = p >> 8 & 255, h = 255 & p, A = c + s / l * o, g = (c + (s + 1) / l * o - A) / 64, m = 0; m < 64; m++) {
var w = (m + .5) / 64, v = (r = Math.round(d + (y - d) * w) << 16 | Math.round(u + (F - u) * w) << 8 | Math.round(_ + (h - _) * w), 
A + m * g);
a.push([ ae.GraphicsCmd.FillColor, r ], [ ae.GraphicsCmd.Rect, -e / 2, v, e, g ], [ ae.GraphicsCmd.Fill ]);
}
return a;
}, [ this.windowSizeLogic, "runtime", "screen", "width" ], [ this.windowSizeLogic, "runtime", "screen", "height" ], [ this.skinInitLogic, "storage", "currentScheme" ] ]
});
};
e.prototype.defineRenderName = function() {
return null;
};
var o, n, c, l, s;
r([ ae.entityRenderer, ae.bindAtom("G3_FStartAndExitFlow_TransitionBackgroundDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "transitionBackgroundDomain", void 0);
r([ ae.bindAtom("G3_FHome_WindowSizeLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "windowSizeLogic", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiStartLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "firstUiStartLogic", void 0);
r([ ae.bindAtom("G3_FBase_GetSchemeValueFunction"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "getSchemeValueFunction", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "skinInitLogic", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_TransitionBackgroundRender") ], e);
}(ae.RenderAtom);
o.G3_FStartAndExitFlow_TransitionBackgroundRender = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_UIEventToNoNetUiCloseChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6a7b1C8o6NL5Yd3XKthc9l/", "G3_FStartAndExitFlow_UIEventToNoNetUiCloseChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_UIEventToNoNetUiCloseChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "uiEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_NoNetUiCloseSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "noNetUiCloseSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_UIEventToNoNetUiCloseChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_UIEventToNoNetUiCloseChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_UIEventToPassAllLevelsSpineCompleteChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8e576cWSoJJva6k7oxLOkHV", "G3_FStartAndExitFlow_UIEventToPassAllLevelsSpineCompleteChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_UIEventToPassAllLevelsSpineCompleteChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "uiEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G3_FStartAndExitFlow_PassAllLevelsSpineCompleteSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "passAllLevelsUiSpineCompleteSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_UIEventToPassAllLevelsSpineCompleteChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_UIEventToPassAllLevelsSpineCompleteChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_UIEventToPassAllLevelsUiCloseChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "12c9dVhpHhDH7SyijDv7wS9", "G3_FStartAndExitFlow_UIEventToPassAllLevelsUiCloseChain");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_UIEventToPassAllLevelsUiCloseChain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "uiEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FStartAndExitFlow_PassAllLevelsUiCloseSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "passAllLevelsUiCloseSignal", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_UIEventToPassAllLevelsUiCloseChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FStartAndExitFlow_UIEventToPassAllLevelsUiCloseChain = c;
cc._RF.pop();
}, {} ],
G3_FStartAndExitFlow_UpdateLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "357139MN4RGOboaA+BWdA9D", "G3_FStartAndExitFlow_UpdateLogic");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FStartAndExitFlow_UpdateLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onExecute = function() {
if (this.combatDoPassLogic.runtime.passTime > 0) {
if (!this.combatDoPassToInterstitialAdDispatch.runtime.combatDoPassToInterstitialAd && this.worldMeta.worldTime >= this.combatDoPassLogic.runtime.overTime - .5) {
console.log("[G3_FStartAndExitFlow] 过关到插屏广告");
this.combatDoPassToInterstitialAdDispatch.runtime.combatDoPassToInterstitialAd = !0;
}
if (!this.combatDoPassToCombatUiBackDispatch.runtime.combatDoPassToCombatUiBack && this.worldMeta.worldTime >= this.combatDoPassLogic.runtime.overTime) {
console.log("[G3_FStartAndExitFlow] 过关到战斗界面返回");
this.combatDoPassToCombatUiBackDispatch.runtime.combatDoPassToCombatUiBack = !0;
}
} else {
this.combatDoPassToInterstitialAdDispatch.runtime.combatDoPassToInterstitialAd = !1;
this.combatDoPassToCombatUiBackDispatch.runtime.combatDoPassToCombatUiBack = !1;
}
};
var o, n, c, l, s;
r([ ae.onChain, ae.bindAtom("G3_FBase_OtherSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "worldMeta", void 0);
r([ ae.bindAtom("G3_FBase_CombatDoPassLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "combatDoPassLogic", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_CombatDoPassToInterstitialAdDispatch"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "combatDoPassToInterstitialAdDispatch", void 0);
r([ ae.bindAtom("G3_FStartAndExitFlow_CombatDoPassToCombatUiBackDispatch"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "combatDoPassToCombatUiBackDispatch", void 0);
return r([ ae.atomClass("G3_FStartAndExitFlow_UpdateLogic") ], e);
}(ae.LogicAtom);
o.G3_FStartAndExitFlow_UpdateLogic = c;
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FStartAndExitFlow_AeIndex", "G3_FStartAndExitFlow_Namespace", "G3_FStartAndExitFlow_Asset", "G3_FStartAndExitFlow_ExitFlowCheckNoNetToDirectToNextLevelChain", "G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsToCheckNoNetChain", "G3_FStartAndExitFlow_ExitFlowDirectToNextLevelToShowHomeUiChain", "G3_FStartAndExitFlow_ExitFlowExitChannelToSaveGameDataChain", "G3_FStartAndExitFlow_ExitFlowaveGameDataToCheckPassAllLevelsChain", "G3_FStartAndExitFlow_CombatDoPassToCombatUiBackChain", "G3_FStartAndExitFlow_UIEventToNoNetUiCloseChain", "G3_FStartAndExitFlow_UIEventToPassAllLevelsSpineCompleteChain", "G3_FStartAndExitFlow_UIEventToPassAllLevelsUiCloseChain", "G3_FStartAndExitFlow_StartFlowCheckNoNetToDirectToPlayChain", "G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsToCheckNoNetChain", "G3_FStartAndExitFlow_StartFlowCreateFirstUiToCreatePassAllLevelsUiChain", "G3_FStartAndExitFlow_StartFlowCreateNoNetUiToCheckPassAllLevelsChain", "G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiToCreateNoNetUiChain", "G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundToCreateFirstUiChain", "G3_FStartAndExitFlow_StartFlowDirectToPlayToShowFirstUiChain", "G3_FStartAndExitFlow_StartFlowFirstUiInitToInitFirstUiDataChain", "G3_FStartAndExitFlow_StartFlowInitFirstUiDataToCreateTransitionBackgroundChain", "G3_FStartAndExitFlow_DirectToNextLevelConfig", "G3_FStartAndExitFlow_MaxLevelCountConfig", "G3_FStartAndExitFlow_NewFirstUiConfig", "G3_FStartAndExitFlow_NextLevelUrlConfig", "G3_FStartAndExitFlow_NoNetConfig", "G3_FStartAndExitFlow_PassAllLevelsConfig", "G3_FStartAndExitFlow_CombatDoPassToCombatUiBackDispatch", "G3_FStartAndExitFlow_CombatDoPassToInterstitialAdDispatch", "G3_FStartAndExitFlow_ExitFlowCheckNoNetToDirectToNextLevelDispatch", "G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsToCheckNoNetUDispatch", "G3_FStartAndExitFlow_ExitFlowDirectToNextLevelToShowHomeUiDispatch", "G3_FStartAndExitFlow_StartFlowCheckNoNetToDirectToPlayDispatch", "G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsToCheckNoNetDispatch", "G3_FStartAndExitFlow_StartFlowDirectToPlayToShowFirstUiDispatch", "G3_FStartAndExitFlow_NoNetUiDomain", "G3_FStartAndExitFlow_PassAllLevelsUiDomain", "G3_FStartAndExitFlow_TransitionBackgroundDomain", "G3_FStartAndExitFlow_ExitFlowCheckNoNetLogic", "G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsLogic", "G3_FStartAndExitFlow_ExitFlowDirectToNextLevelLogic", "G3_FStartAndExitFlow_ExitFlowSaveGameDataLogic", "G3_FStartAndExitFlow_ExitFlowShowHomeUiLogic", "G3_FStartAndExitFlow_NewFirstUiGenLogic", "G3_FStartAndExitFlow_NextLevelUrlConfigGenLogic", "G3_FStartAndExitFlow_NoNetUiCloseLogic", "G3_FStartAndExitFlow_PassAllLevelsSpineCompleteLogic", "G3_FStartAndExitFlow_PassAllLevelsUiCloseLogic", "G3_FStartAndExitFlow_UpdateLogic", "G3_FStartAndExitFlow_StartFlowCheckNoNetLogic", "G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsLogic", "G3_FStartAndExitFlow_StartFlowCreateFirstUiLogic", "G3_FStartAndExitFlow_StartFlowCreateNoNetUiLogic", "G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiLogic", "G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundLogic", "G3_FStartAndExitFlow_StartFlowDirectToPlayLogic", "G3_FStartAndExitFlow_StartFlowInitFirstUiDataLogic", "G3_FStartAndExitFlow_StartFlowShowFirstUiLogic", "G3_FStartAndExitFlow_CombatDoPassToCombatUiBackReceive", "G3_FStartAndExitFlow_NoNetUiRender", "G3_FStartAndExitFlow_PassAllLevelsUiRender", "G3_FStartAndExitFlow_TransitionBackgroundRender", "G3_FStartAndExitFlow_ExitFlowCheckNoNetSignal", "G3_FStartAndExitFlow_ExitFlowCheckPassAllLevelsSignal", "G3_FStartAndExitFlow_ExitFlowDirectToNextLevelSignal", "G3_FStartAndExitFlow_ExitFlowSaveGameDataSignal", "G3_FStartAndExitFlow_ExitFlowShowHomeUiSignal", "G3_FStartAndExitFlow_NoNetUiCloseSignal", "G3_FStartAndExitFlow_PassAllLevelsSpineCompleteSignal", "G3_FStartAndExitFlow_PassAllLevelsUiCloseSignal", "G3_FStartAndExitFlow_StartFlowCheckNoNetSignal", "G3_FStartAndExitFlow_StartFlowCheckPassAllLevelsSignal", "G3_FStartAndExitFlow_StartFlowCreateFirstUiSignal", "G3_FStartAndExitFlow_StartFlowCreateNoNetUiSignal", "G3_FStartAndExitFlow_StartFlowCreatePassAllLevelsUiSignal", "G3_FStartAndExitFlow_StartFlowCreateTransitionBackgroundSignal", "G3_FStartAndExitFlow_StartFlowDirectToPlaySignal", "G3_FStartAndExitFlow_StartFlowInitFirstUiDataSignal", "G3_FStartAndExitFlow_StartFlowShowFirstUiSignal", "G3_FStartAndExitFlow_ExitFlowExitChannelLogicVariant", "G3_FStartAndExitFlow_LevelConfigGenLogicVariant", "G3_FStartAndExitFlow_LevelDownloadLogicVariant", "G3_FStartAndExitFlow_LevelExConfigGenLogicVariant", "G3_FStartAndExitFlow_StartFlowFirstUiStartLogicVariant" ]);
//# sourceMappingURL=index.js.map
