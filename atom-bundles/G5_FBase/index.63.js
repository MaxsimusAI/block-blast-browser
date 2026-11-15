window.__require = function e(t, o, n) {
function a(r, p) {
if (!o[r]) {
if (!t[r]) {
var c = r.split("/");
c = c[c.length - 1];
if (!t[c]) {
var f = "function" == typeof __require && __require;
if (!p && f) return f(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = c;
}
var s = o[r] = {
exports: {}
};
t[r][0].call(s.exports, function(e) {
return a(t[r][1][e] || e);
}, s, s.exports, e, t, o, n);
}
return o[r].exports;
}
for (var i = "function" == typeof __require && __require, r = 0; r < n.length; r++) a(n[r]);
return a;
}({
"BG2.png.aemeta": [ function(e, t) {
"use strict";
cc._RF.push(t, "ca490hAgmhOwY3FbCg8qlRI", "BG2.png.aemeta");
ae.AssetMeta.image({
borderTop: 12,
borderBottom: 12,
borderLeft: 12,
borderRight: 12,
packable: !0,
wrapMode: "Clamp",
filterMode: "Bilinear",
premultiplyAlpha: !0
});
cc._RF.pop();
}, {} ],
"BGGoalDialog.png.aemeta": [ function(e, t) {
"use strict";
cc._RF.push(t, "0f1ff4wJFtBgae+iwWaMu0J", "BGGoalDialog.png.aemeta");
ae.AssetMeta.image({
borderTop: 22,
borderBottom: 22
});
cc._RF.pop();
}, {} ],
G5_FBase_AdConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2b82bfkNvxIFr9BFP74HcOb", "G5_FBase_AdConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_AdConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
coldStartAdDelaySec: 30,
interstitialIntervalSec: 180,
networkCheckIntervalSec: 10,
bannerRefreshIntervalSec: 30,
rewardedAdCheckDebounceMs: 1e3
};
};
return i([ ae.atomClass("G5_FBase_AdConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_AdConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_AdFailedData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6f0b4WJEI5BSoRD3qQ8uW5b", "G5_FBase_AdFailedData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_AdFailedData = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
offsetY: 0,
alpha: 0
};
};
return i([ ae.atomClass("G5_FBase_AdFailedData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_AdFailedData = r;
cc._RF.pop();
}, {} ],
G5_FBase_AdFailedDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "06545g0zb5ClohaC9hwUcms", "G5_FBase_AdFailedDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_AdFailedDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_AdFailedData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "adFailedData", void 0);
return i([ ae.atomClass("G5_FBase_AdFailedDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_AdFailedDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_AdFailedRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6c508NOL+hB+46nq3zPEEOf", "G5_FBase_AdFailedRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_AdFailedRender = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e, t = this.adFailedDomain.adFailedData;
return ae.Sprite({
name: "AdFailedText",
img: this.gameConfig.adFailedText,
y: [ function(e) {
return t.offsetY[e];
}, [ t, "offsetY" ] ],
alpha: [ function(e) {
return t.alpha[e] / 255;
}, [ t, "alpha" ] ],
zIndex: null !== (e = this.zIndexConfig.adFailed) && void 0 !== e ? e : 200
});
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_AdFailedDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "adFailedDomain", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "zIndexConfig", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "gameConfig", void 0);
return i([ ae.atomClass("G5_FBase_AdFailedRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_AdFailedRender = p;
cc._RF.pop();
}, {} ],
G5_FBase_AdFailedSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c0d04Kd4rZJzI3FjSwAhzoM", "G5_FBase_AdFailedSignal");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_OnRemoveAdFailedUI = o.G5_FBase_UIEventToAdFailedRemoveRouter = o.G5_FBase_RemoveAdFailedUI = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G5_FBase_AdFailedDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "adFailedDomain", void 0);
return i([ ae.atomClass("G5_FBase_RemoveAdFailedUI") ], t);
}(ae.SignalAtom);
o.G5_FBase_RemoveAdFailedUI = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G5_FBase_RemoveAdFailedUI"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "removeAdFailedUI", void 0);
return i([ ae.atomClass("G5_FBase_UIEventToAdFailedRemoveRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_UIEventToAdFailedRemoveRouter = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function(e) {
this.stopTween(e);
this.adFailedDomain.destroy(e);
};
var o, n, p;
i([ ae.onChain, ae.bindAtom("G5_FBase_RemoveAdFailedUI"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "removeAdFailedUI", void 0);
i([ ae.bindAtom("G5_FBase_AdFailedDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "adFailedDomain", void 0);
i([ ae.bindAtom("G_FAtom_StopTween"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "stopTween", void 0);
return i([ ae.atomClass("G5_FBase_OnRemoveAdFailedUI") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnRemoveAdFailedUI = f;
cc._RF.pop();
}, {} ],
G5_FBase_AdManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b310amy/DRDhrwROtmLnSkw", "G5_FBase_AdManager");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_OnRewardedAdFailedFunction = o.G5_FBase_OnAdResultUpdateState = o.G5_FBase_AdState = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
coldStartTimeMs: 0,
lastAdTimeMs: 0,
hasPlayedAdSinceColdStart: !1,
lastCheckCanShowRewardedAdTimeMs: 0,
lastCheckCanShowRewardedAdResult: !1
};
};
t.prototype.onExecute = function(e, t) {
var o = this.dateNow();
t.runtime.coldStartTimeMs = o;
t.runtime.lastAdTimeMs = 0;
t.runtime.hasPlayedAdSinceColdStart = !1;
t.runtime.lastCheckCanShowRewardedAdTimeMs = 0;
t.runtime.lastCheckCanShowRewardedAdResult = !1;
};
var o, n;
i([ ae.onChain, ae.bindAtom("G5_FBase_GameInit"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameInit", void 0);
i([ ae.bindAtom("G_FAtom_DateNow"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "dateNow", void 0);
return i([ ae.atomClass("G5_FBase_AdState") ], t);
}(ae.LogicAtom);
o.G5_FBase_AdState = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.adResult.state === ae.AdResultState.Success;
if (this.onRevive.runtime.isWaitingForReviveAd) {
this.onRevive.runtime.isWaitingForReviveAd = !1;
console.log("[复活] 广告结果:", e ? "成功" : "失败/取消");
if (e) this.doRevive(); else {
console.log("[复活] 广告未成功，执行重新开始");
this.onRewardedAdFailed();
}
}
if (e) {
var t = this.adState.runtime;
t.lastAdTimeMs = this.dateNow();
t.hasPlayedAdSinceColdStart = !0;
}
};
var o, n, p, c, f, s, u;
i([ ae.onChain, ae.bindAtom("G5_FBase_AdResultSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "adResultSignal", void 0);
i([ ae.bindAtom("G_FAtom_ADResult"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "adResult", void 0);
i([ ae.bindAtom("G_FAtom_DateNow"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "dateNow", void 0);
i([ ae.bindAtom("G5_FBase_AdState"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "adState", void 0);
i([ ae.bindAtom("G5_FBase_OnRevive"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "onRevive", void 0);
i([ ae.bindAtom("G5_FBase_DoRevive"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "doRevive", void 0);
i([ ae.bindAtom("G5_FBase_OnRewardedAdFailedFunction"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "onRewardedAdFailed", void 0);
return i([ ae.atomClass("G5_FBase_OnAdResultUpdateState") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnAdResultUpdateState = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
e.showAdFailedUI();
e.doRestart();
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_DoRestart"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "doRestart", void 0);
i([ ae.bindAtom("G5_FBase_ShowAdFailedUIFunction"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "showAdFailedUI", void 0);
return i([ ae.atomClass("G5_FBase_OnRewardedAdFailedFunction") ], t);
}(ae.FunctionAtom);
o.G5_FBase_OnRewardedAdFailedFunction = f;
cc._RF.pop();
}, {} ],
G5_FBase_AdRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5b237UK3FpEf7cKuPpCTCLJ", "G5_FBase_AdRouter");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_BannerRefreshRouterFilter = o.G5_FBase_UpdateToBannerRefreshRouter = o.G5_FBase_BannerRefreshSignal = o.G5_FBase_NetworkRestoredRouterFilter = o.G5_FBase_UpdateToNetworkRestoredRouter = o.G5_FBase_NetworkRestoredSignal = o.G5_FBase_HostActiveRouterFilter = o.G5_FBase_HostActiveRouter = o.G5_FBase_HostActiveSignal = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_HostActiveSignal") ], t);
}(ae.SignalAtom);
o.G5_FBase_HostActiveSignal = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_HostActive"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "hostActive", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_HostActiveSignal"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "signal", void 0);
return i([ ae.atomClass("G5_FBase_HostActiveRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_HostActiveRouter = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.router.dispatchAction = this.hostActive.active ? ae.DispatchAction.FireOnce : ae.DispatchAction.Cancel;
};
var o, n;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_HostActiveRouter"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G_FAtom_HostActive"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "hostActive", void 0);
return i([ ae.atomClass("G5_FBase_HostActiveRouterFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_HostActiveRouterFilter = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_NetworkRestoredSignal") ], t);
}(ae.SignalAtom);
o.G5_FBase_NetworkRestoredSignal = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "update", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_NetworkRestoredSignal"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "signal", void 0);
return i([ ae.atomClass("G5_FBase_UpdateToNetworkRestoredRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_UpdateToNetworkRestoredRouter = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
lastNetworkState: !1,
lastCheckTime: 0
};
};
t.prototype.onExecute = function(e, t) {
var o = this.update.worldTime;
if (o - t.runtime.lastCheckTime < this.adConfig.networkCheckIntervalSec) this.router.dispatchAction = ae.DispatchAction.Cancel; else {
t.runtime.lastCheckTime = o;
var n = this.getNetworkState(), a = t.runtime.lastNetworkState;
t.runtime.lastNetworkState = n;
this.router.dispatchAction = !a && n ? ae.DispatchAction.FireOnce : ae.DispatchAction.Cancel;
}
};
var o, n, p, c;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_UpdateToNetworkRestoredRouter"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "update", void 0);
i([ ae.bindAtom("G_FAtom_GetNetworkState"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "getNetworkState", void 0);
i([ ae.bindAtom("G5_FBase_AdConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "adConfig", void 0);
return i([ ae.atomClass("G5_FBase_NetworkRestoredRouterFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_NetworkRestoredRouterFilter = d;
var l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_BannerRefreshSignal") ], t);
}(ae.SignalAtom);
o.G5_FBase_BannerRefreshSignal = l;
var y = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "update", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_BannerRefreshSignal"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "signal", void 0);
return i([ ae.atomClass("G5_FBase_UpdateToBannerRefreshRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_UpdateToBannerRefreshRouter = y;
var _ = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
lastRefreshTime: 0
};
};
t.prototype.onExecute = function(e, t) {
var o = this.update.worldTime;
if (o - t.runtime.lastRefreshTime < this.adConfig.bannerRefreshIntervalSec) this.router.dispatchAction = ae.DispatchAction.Cancel; else {
t.runtime.lastRefreshTime = o;
this.router.dispatchAction = ae.DispatchAction.FireOnce;
}
};
var o, n, p;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_UpdateToBannerRefreshRouter"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "update", void 0);
i([ ae.bindAtom("G5_FBase_AdConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "adConfig", void 0);
return i([ ae.atomClass("G5_FBase_BannerRefreshRouterFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_BannerRefreshRouterFilter = _;
cc._RF.pop();
}, {} ],
G5_FBase_AdapterLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8c0b6zVYPNJfr4IWLpdevrS", "G5_FBase_AdapterLogic");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_AdapterLogic = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
maxExtendHeight: 200,
maxTargetUIOffsetY: 36,
extendHeight: 0,
extendWidth: 0,
extendScale: 1,
targetUIOffsetY: 0,
boardHeight: 0,
boardWidth: 0
};
};
t.prototype.onExecute = function(e, t) {
var o = t.runtime, n = p.G5_FBase.GridConfig.Rows, a = p.G5_FBase.GridConfig.Cols, i = this.gameConfig.padding, r = this.gameConfig.tileSize;
o.boardHeight = n * r + (n - 1) * i;
o.boardWidth = a * r + (a - 1) * i;
var c = this.getDesignSize(), f = this.getWinSize();
if (!(f.width / f.height >= c.width / c.height)) {
var s = this.getAreaSafe().height - c.height;
if (!(s <= 0)) {
o.extendHeight = Math.min(s, o.maxExtendHeight);
o.extendScale = 1 + o.extendHeight / o.boardHeight;
o.extendWidth = o.extendScale * o.boardWidth - o.boardWidth;
s > o.maxExtendHeight && (o.targetUIOffsetY = Math.min((s - o.maxExtendHeight) / 2, o.maxTargetUIOffsetY));
}
}
};
var o, n, c, f, s;
i([ ae.onChain, ae.bindAtom("G5_FBase_GameInit"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameInit", void 0);
i([ ae.bindAtom("G_FAtom_GetDesignSize"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getDesignSize", void 0);
i([ ae.bindAtom("G_FAtom_GetWinSize"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getWinSize", void 0);
i([ ae.bindAtom("G_FAtom_GetSafeArea"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getAreaSafe", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "gameConfig", void 0);
return i([ ae.atomClass("G5_FBase_AdapterLogic") ], t);
}(ae.LogicAtom);
o.G5_FBase_AdapterLogic = c;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_AdjustSpawnPool: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "731c37ykbBK655v55j2b870", "G5_FBase_AdjustSpawnPool");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_AdjustSpawnPool = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = "", o = {
strategies: [],
weights: []
};
return function(n) {
var a = e.strategyConfig.poolStrategyWeights;
if (a !== t) {
o = e.parseStrategyWeights(a);
t = a;
}
if (0 === o.strategies.length) return n;
var i = e.selectAlgorithmByWeight(o.strategies, o.weights);
if (0 === i) return n;
var r = e.analyzeBoardForPool(n, i);
return r ? e.buildAdjustedSpawnPool(n, r.targetValue, i, e.strategyConfig.poolWeightAdjustAmount) : n;
};
};
var o, n, p, c, f;
i([ ae.bindAtom("G5_FBase_SpawnStrategyConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "strategyConfig", void 0);
i([ ae.bindAtom("G5_FBase_ParseStrategyWeights"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "parseStrategyWeights", void 0);
i([ ae.bindAtom("G5_FBase_SelectAlgorithmByWeight"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "selectAlgorithmByWeight", void 0);
i([ ae.bindAtom("G5_FBase_AnalyzeBoardForPool"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "analyzeBoardForPool", void 0);
i([ ae.bindAtom("G5_FBase_BuildAdjustedSpawnPool"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "buildAdjustedSpawnPool", void 0);
return i([ ae.atomClass("G5_FBase_AdjustSpawnPool") ], t);
}(ae.FunctionAtom);
o.G5_FBase_AdjustSpawnPool = p;
cc._RF.pop();
}, {} ],
G5_FBase_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2ebb5s4woVNzoVFfnx4dUeq", "G5_FBase_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase = void 0;
var n = e("./G5_FBase_Namespace");
Object.defineProperty(o, "G5_FBase", {
enumerable: !0,
get: function() {
return n.G5_FBase;
}
});
cc._RF.pop();
}, {
"./G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_AnalyzeBoardForPool: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e41dc9cHUNHrYcgzLmNn+kM", "G5_FBase_AnalyzeBoardForPool");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_AnalyzeBoardForPool = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
for (var n, a, i = new Map(), r = e.tileDomain.tileData, p = e.tileDomain.collect(), c = 0, f = p.length; c < f; c++) {
var s = p[c];
(d = r.value[s]) > 0 && i.set(d, (null !== (n = i.get(d)) && void 0 !== n ? n : 0) + 1);
}
var u = [];
for (c = 0, f = t.numbers.length; c < f; c++) if (0 !== t.weights[c]) {
var d = t.numbers[c], l = null !== (a = i.get(d)) && void 0 !== a ? a : 0;
u.push({
value: d,
count: l
});
}
if (0 === u.length) return null;
var y = u[0].count, _ = u[0].value;
for (c = 1, f = u.length; c < f; c++) {
var m = u[c];
if (m.count < y) {
y = m.count;
_ = m.value;
} else m.count === y && (1 === o ? m.value < _ : m.value > _) && (_ = m.value);
}
return {
targetValue: _,
count: y
};
};
};
var o;
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
return i([ ae.atomClass("G5_FBase_AnalyzeBoardForPool") ], t);
}(ae.FunctionAtom);
o.G5_FBase_AnalyzeBoardForPool = p;
cc._RF.pop();
}, {} ],
G5_FBase_AniFunctions: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "18a27jiZqRB3JehYhSSc6yK", "G5_FBase_AniFunctions");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ResetTileAnimState = o.G5_FBase_PlayGoalDialogAnim = o.G5_FBase_PlayTileDropBounceAnim = o.G5_FBase_InitTileDropAnim = o.G5_FBase_AniFunctions = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_AniFunctions") ], t);
}(ae.ConfigAtom);
o.G5_FBase_AniFunctions = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n) {
var a = e.tileDomain.tileData, i = e.config, r = i.initialDropDuration, c = i.tileSize, f = i.gridHeight, s = e.config.gridPanelTop + f + c;
e.setTileValue(t, o);
a.state.set(t, p.G5_FBase.TileState.Normal);
a.chainIndex.set(t, -1);
a.isNew.set(t, !0);
a.isAnimating.set(t, 1);
a.animOffsetX.set(t, 0);
a.animOffsetY.set(t, s);
a.animScale.set(t, 1);
a.animAlpha.set(t, 1);
a.visible.set(t, !0);
e.tween(t, [ [ ae.TweenStepType.Delay, n ], [ ae.TweenStepType.To, a, {
animOffsetY: 0
}, r, ae.TweenEasing.QuadOut ] ]);
};
};
var o, n, c, f;
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G5_FBase_SetTileValueWithPower"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "setTileValue", void 0);
return i([ ae.atomClass("G5_FBase_InitTileDropAnim") ], t);
}(ae.FunctionAtom);
o.G5_FBase_InitTileDropAnim = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n) {
var a = e.tileDomain.tileData, i = e.config, r = i.dropDuration, p = i.dropSquashDuration, c = i.dropSquashOffsetY, f = i.dropBounceDuration;
a.animOffsetY.set(t, o);
a.isAnimating.set(t, 1);
e.tween(t, [ [ ae.TweenStepType.Delay, n ], [ ae.TweenStepType.To, a, {
animOffsetY: 0
}, r, ae.TweenEasing.QuadIn ], [ ae.TweenStepType.To, a, {
animOffsetY: c
}, p, ae.TweenEasing.QuadOut ], [ ae.TweenStepType.To, a, {
animOffsetY: 0
}, f, ae.TweenEasing.QuadOut ] ]);
};
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "tween", void 0);
return i([ ae.atomClass("G5_FBase_PlayTileDropBounceAnim") ], t);
}(ae.FunctionAtom);
o.G5_FBase_PlayTileDropBounceAnim = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.goalDialogDomain.collect()[0];
if (t) {
var o = e.goalDialogDomain.goalDialogData;
if (o.showTap[t]) {
o.scale.set(t, 1);
o.tapScale.set(t, 1);
o.alpha.set(t, 1);
e.tween(t, [ [ ae.TweenStepType.Delay, .05 ], [ ae.TweenStepType.Repeat, 0, [ [ ae.TweenStepType.To, o, {
tapScale: 1.2
}, .33, ae.TweenEasing.QuadOut ], [ ae.TweenStepType.To, o, {
tapScale: 1
}, .33, ae.TweenEasing.CubicIn ] ] ] ], "tapBreath");
} else e.tween(t, [ [ ae.TweenStepType.To, o, {
alpha: 1,
scale: 1
}, .2, ae.TweenEasing.SineOut ] ]);
}
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_GoalDialogDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "goalDialogDomain", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tween", void 0);
return i([ ae.atomClass("G5_FBase_PlayGoalDialogAnim") ], t);
}(ae.FunctionAtom);
o.G5_FBase_PlayGoalDialogAnim = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
for (var t = e.tileDomain.tileData, o = e.tileDomain.collect(), n = 0, a = o.length; n < a; n++) {
var i = o[n];
e.stopTween(i);
t.isAnimating.set(i, 0);
t.isNew.set(i, !1);
t.animOffsetX.set(i, 0);
t.animOffsetY.set(i, 0);
t.animScale.set(i, 1);
t.animAlpha.set(i, 1);
}
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G_FAtom_StopTween"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "stopTween", void 0);
return i([ ae.atomClass("G5_FBase_ResetTileAnimState") ], t);
}(ae.FunctionAtom);
o.G5_FBase_ResetTileAnimState = d;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_AniRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1ffe06h5ktGEa0YmGCAWeeC", "G5_FBase_AniRouter");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_EncouragementAnimCompleteRouter = o.G5_FBase_ComboAnimCompleteRouter = o.G5_FBase_TweenToDropSoundRouter = o.G5_FBase_TweenToGoalDialogCloseRouter = o.G5_FBase_TweenToGameDropCompleteRouter = o.G5_FBase_TweenToMergeCompleteRouter = o.G5_FBase_AniRouter = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_AniRouter") ], t);
}(ae.ConfigAtom);
o.G5_FBase_AniRouter = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GameSignals"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameSignals", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_MergeComplete"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "mergeComplete", void 0);
return i([ ae.atomClass("G5_FBase_TweenToMergeCompleteRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_TweenToMergeCompleteRouter = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GameSignals"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameSignals", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_DropComplete"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "dropComplete", void 0);
return i([ ae.atomClass("G5_FBase_TweenToGameDropCompleteRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_TweenToGameDropCompleteRouter = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GameSignals"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameSignals", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_GoalDialogClose"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "goalDialogClose", void 0);
return i([ ae.atomClass("G5_FBase_TweenToGoalDialogCloseRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_TweenToGoalDialogCloseRouter = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GameSignals"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameSignals", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_DropSound"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "dropSound", void 0);
return i([ ae.atomClass("G5_FBase_TweenToDropSoundRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_TweenToDropSoundRouter = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GameSignals"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameSignals", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_ComboAnimComplete"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "comboAnimComplete", void 0);
return i([ ae.atomClass("G5_FBase_ComboAnimCompleteRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_ComboAnimCompleteRouter = d;
var l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GameSignals"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameSignals", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_EncouragementAnimComplete"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "encouragementAnimComplete", void 0);
return i([ ae.atomClass("G5_FBase_EncouragementAnimCompleteRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_EncouragementAnimCompleteRouter = l;
cc._RF.pop();
}, {} ],
G5_FBase_AnimateMerge: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9abf7KlfbpK/KTxWLNwcKiJ", "G5_FBase_AnimateMerge");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_AnimateMerge = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
if (e) {
var t = this.gridDomain.collect()[0];
if (t) {
var o = this.collectConnectedTiles();
if (!(o.length < 2)) {
this.playSound(this.config.streakSound);
for (var n = this.tileDomain.tileData, a = this.tileGlowDomain.tileGlowData, i = this.eliminationDomain.eliminationData, r = this.gameDomain.gameData, c = this.eliminationAnimConfig.normal, f = this.eliminationAnimConfig.last, s = this.getRenderOffset(), u = s.offsetX, d = s.offsetY, l = o[o.length - 1], y = this.calcTilePos(l.row, l.col), _ = {
x: y.x + u,
y: y.y - d
}, m = r.mergeResultValue[e], g = this.getColor(m), h = [], v = 0, b = o.length; v < b; v++) {
var F = o[v], G = this.calcTilePos(F.row, F.col);
h.push({
x: G.x + u,
y: G.y - d
});
}
var A = [], B = this.eliminationDomain.collect();
for (v = 0, b = B.length; v < b; v++) {
var T = B[v];
0 === i.phase[T] && A.push(T);
}
for (v = 0; v < o.length; v++) {
F = o[v];
var O = v === o.length - 1, R = {
x: (G = this.calcTilePos(F.row, F.col)).x + u,
y: G.y - d
}, j = this.getColor(n.value[F.eid]), C = O ? f : c;
n.isAnimating.set(F.eid, 1);
n.animRotation.set(F.eid, 0);
n.animOffsetX.set(F.eid, 0);
n.animOffsetY.set(F.eid, 0);
n.valueAlpha.set(F.eid, 1);
n.zIndex.set(F.eid, this.zIndexConfig.tileAnimating);
for (var S = null, D = this.tileGlowDomain.collect(), w = 0, I = D.length; w < I; w++) {
T = D[w];
if (a.row[T] === F.row && a.col[T] === F.col) {
S = T;
a.alpha.set(T, 1);
a.scale.set(T, 1);
break;
}
}
S && this.tween(S, [ [ ae.TweenStepType.To, a, {
alpha: 0
}, C.glowFadeOutDuration, ae.TweenEasing.Linear ], [ ae.TweenStepType.To, a, {
state: p.G5_FBase.TileState.Normal
}, 0 ] ]);
if (O) {
var P = [ [ ae.TweenStepType.To, n, {
animRotation: C.baseRotation,
animAlpha: 0
}, C.baseFadeOutEnd, ae.TweenEasing.SineInOut ], [ ae.TweenStepType.To, n, {
valueAlpha: 0
}, f.valueFadeOutDuration, ae.TweenEasing.Linear ] ], x = f.newTile1AppearEnd - f.newTileAppearStart, L = f.valueAppearEnd - f.valueAppearStart;
this.tween(F.eid, [ [ ae.TweenStepType.Parallel, P ], [ ae.TweenStepType.To, n, {
value: m,
animRotation: 0,
animAlpha: 0
}, 0 ], [ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.To, n, {
animAlpha: 1
}, x, ae.TweenEasing.SineOut ], [ ae.TweenStepType.To, n, {
valueAlpha: 1
}, L, ae.TweenEasing.SineOut ] ] ], [ ae.TweenStepType.Delay, f.totalDuration - f.newTile1AppearEnd ], [ ae.TweenStepType.To, n, {
isAnimating: 0,
animRotation: 0,
valueAlpha: 1,
zIndex: this.zIndexConfig.tileDefault
}, 0 ] ]);
} else {
P = [ [ ae.TweenStepType.To, n, {
animRotation: C.baseRotation,
animAlpha: 0
}, C.baseFadeOutEnd, ae.TweenEasing.SineInOut ], [ ae.TweenStepType.To, n, {
valueAlpha: 0
}, f.valueFadeOutDuration, ae.TweenEasing.Linear ] ], x = f.newTile1AppearEnd - f.newTileAppearStart, 
L = f.valueAppearEnd - f.valueAppearStart;
this.tween(F.eid, [ [ ae.TweenStepType.Parallel, P ], [ ae.TweenStepType.To, n, {
value: m,
animRotation: 0,
animAlpha: 0
}, 0 ], [ ae.TweenStepType.To, n, {
value: 0,
isAnimating: 0,
zIndex: this.zIndexConfig.tileDefault
}, 0 ], [ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.To, n, {
animAlpha: 1
}, x, ae.TweenEasing.SineOut ], [ ae.TweenStepType.To, n, {
valueAlpha: 1
}, L, ae.TweenEasing.SineOut ] ] ] ]);
}
var M = void 0;
if (A.length > 0) M = A.pop(); else {
M = this.eliminationDomain.create();
this.childOf.addChild(t, M);
}
var U = j >> 16 & 255, E = j >> 8 & 255, k = 255 & j, N = g >> 16 & 255, V = g >> 8 & 255, z = 255 & g;
i.row.set(M, F.row);
i.col.set(M, F.col);
i.isLastTile.set(M, O);
i.x.set(M, R.x);
i.y.set(M, R.y);
i.targetX.set(M, _.x);
i.targetY.set(M, _.y);
i.colorR.set(M, U);
i.colorG.set(M, E);
i.colorB.set(M, k);
i.alpha.set(M, 0);
i.angle.set(M, 0);
i.phase.set(M, 1);
i.animName.set(M, C.spineName);
var Y = [];
if (O) {
W = C.fragmentFadeInEnd, X = f.colorChangeEnd - f.colorChangeStart;
Y.push([ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.To, i, {
alpha: 1
}, W, ae.TweenEasing.SineOut ], [ ae.TweenStepType.To, i, {
angle: C.baseRotation
}, C.baseFadeOutEnd, ae.TweenEasing.SineInOut ] ] ]);
var H = Math.max(0, f.colorChangeStart - C.baseFadeOutEnd);
H > 0 && Y.push([ ae.TweenStepType.Delay, H ]);
Y.push([ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.To, i, {
colorR: N,
colorG: V,
colorB: z
}, X, ae.TweenEasing.SineInOut ], [ ae.TweenStepType.To, i, {
angle: 0
}, .3, ae.TweenEasing.SineOut ] ] ]);
(J = f.totalDuration - f.colorChangeEnd) > 0 && Y.push([ ae.TweenStepType.Delay, J ]);
Y.push([ ae.TweenStepType.To, i, {
phase: 0,
animName: "",
angle: 0
}, 0 ]);
} else {
var W = C.fragmentFadeInEnd, X = c.colorChangeEnd - c.colorChangeStart, Z = c.moveEnd - c.moveStart, K = o.length - 1 - v;
Y.push([ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.To, i, {
alpha: 1
}, W, ae.TweenEasing.SineOut ], [ ae.TweenStepType.To, i, {
angle: C.baseRotation
}, C.baseFadeOutEnd, ae.TweenEasing.SineInOut ] ] ]);
var q = Math.max(0, c.moveStart - C.baseFadeOutEnd);
q > 0 && Y.push([ ae.TweenStepType.Delay, q ]);
var J, Q = [];
if (K > 1) for (var $ = Z / K, ee = v + 1; ee < o.length; ee++) {
var te = h[ee];
Q.push([ ae.TweenStepType.To, i, {
x: te.x,
y: te.y
}, $, ae.TweenEasing.SineInOut ]);
} else Q.push([ ae.TweenStepType.To, i, {
x: _.x,
y: _.y
}, Z, ae.TweenEasing.SineInOut ]);
Y.push([ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.Repeat, 1, Q ], [ ae.TweenStepType.To, i, {
colorR: N,
colorG: V,
colorB: z
}, X, ae.TweenEasing.SineInOut ] ] ]);
(J = c.totalDuration - c.moveEnd) > 0 && Y.push([ ae.TweenStepType.Delay, J ]);
Y.push([ ae.TweenStepType.To, i, {
phase: 0,
animName: "",
angle: 0
}, 0 ]);
}
this.tween(M, Y);
}
}
}
}
};
var o, n, c, f, s, u, d, l, y, _, m, g, h, v, b, F;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileGlowDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tileGlowDomain", void 0);
i([ ae.bindAtom("G5_FBase_EliminationDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "eliminationDomain", void 0);
i([ ae.bindAtom("G5_FBase_GridDomain"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "gridDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_MergeStart"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "mergeStart", void 0);
i([ ae.bindAtom("G5_FBase_CalcTilePos"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "calcTilePos", void 0);
i([ ae.bindAtom("G5_FBase_CollectConnectedTiles"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "collectConnectedTiles", void 0);
i([ ae.bindAtom("G5_FBase_GetRenderOffset"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "getRenderOffset", void 0);
i([ ae.bindAtom("G5_FBase_GetColor"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "getColor", void 0);
i([ ae.bindAtom("G5_FBase_EliminationAnimConfig"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "eliminationAnimConfig", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), r("design:type", "function" == typeof (v = "undefined" != typeof ae && ae.AtomTypeInfer) ? v : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (b = "undefined" != typeof ae && ae.AtomTypeInfer) ? b : Object) ], t.prototype, "zIndexConfig", void 0);
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (F = "undefined" != typeof ae && ae.AtomTypeInfer) ? F : Object) ], t.prototype, "playSound", void 0);
return i([ ae.atomClass("G5_FBase_AnimateMerge") ], t);
}(ae.LogicAtom);
o.G5_FBase_AnimateMerge = c;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_BackButtonRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "08e93rm1S5GtoCKGdXDSigl", "G5_FBase_BackButtonRouter");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_BackButtonRouter = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_ExitGame"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "exitGame", void 0);
return i([ ae.atomClass("G5_FBase_BackButtonRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_BackButtonRouter = p;
cc._RF.pop();
}, {} ],
G5_FBase_BackConfirmUiDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3f2d7p/g0pOpK4GaMCZ10+B", "G5_FBase_BackConfirmUiDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_BackConfirmUiDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_UIBaseComp"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "baseComp", void 0);
return i([ ae.atomClass("G5_FBase_BackConfirmUiDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_BackConfirmUiDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_BackConfirmUiLogics: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "49a8ezpGVZJA7/MNYFowGx+", "G5_FBase_BackConfirmUiLogics");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_BackConfirmUiCancelLogic = o.G5_FBase_BackConfirmUiOkLogic = o.G5_FBase_BackConfirmUiShowLogic = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.backConfirmUiDomain.collect()[0];
e ? this.backConfirmUiDomain.destroy(e) : this.showDomain(this.backConfirmUiDomain, "G5_FBase_BackConfirmUiDomain");
};
var o, n, p;
i([ ae.onChain, ae.bindAtom("G5_FBase_BackConfirmUiShow"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G5_FBase_BackConfirmUiDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "backConfirmUiDomain", void 0);
i([ ae.bindAtom("G5_FBase_ShowDomain"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "showDomain", void 0);
return i([ ae.atomClass("G5_FBase_BackConfirmUiShowLogic") ], t);
}(ae.LogicAtom);
o.G5_FBase_BackConfirmUiShowLogic = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
this.playSound();
this.backConfirmUiDomain.destroy(e);
var t = this.rootDomain.collect()[0];
this.tween(t, [ [ ae.TweenStepType.Delay, .2 ], [ ae.TweenStepType.Router, this.delayExitRouter ] ]);
};
var o, n, p, c, f, s;
i([ ae.onChain, ae.bindAtom("G5_FBase_BackConfirmUiOk"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G5_FBase_BackConfirmUiDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "backConfirmUiDomain", void 0);
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "playSound", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "rootDomain", void 0);
i([ ae.bindAtom("G5_FBase_BackConfirmDelayExitRouter"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "delayExitRouter", void 0);
return i([ ae.atomClass("G5_FBase_BackConfirmUiOkLogic") ], t);
}(ae.LogicAtom);
o.G5_FBase_BackConfirmUiOkLogic = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
this.playSound();
this.backConfirmUiDomain.destroy(e);
};
var o, n, p;
i([ ae.onChain, ae.bindAtom("G5_FBase_BackConfirmUiCancel"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G5_FBase_BackConfirmUiDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "backConfirmUiDomain", void 0);
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "playSound", void 0);
return i([ ae.atomClass("G5_FBase_BackConfirmUiCancelLogic") ], t);
}(ae.LogicAtom);
o.G5_FBase_BackConfirmUiCancelLogic = f;
cc._RF.pop();
}, {} ],
G5_FBase_BackConfirmUiRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e252eWRF5NIhp9EdVPrFrpT", "G5_FBase_BackConfirmUiRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_BackConfirmUiRender = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = this.createFullScreenWidget();
return ae.Node({
name: "BackConfirmUi",
widget: t,
active: [ function(t) {
return e.backConfirmUiDomain.baseComp.visible[t];
}, [ this.backConfirmUiDomain.baseComp, "visible" ] ],
zIndex: [ function(t) {
return e.backConfirmUiDomain.baseComp.zIndex[t];
}, [ this.backConfirmUiDomain.baseComp, "zIndex" ] ]
}, ae.Sprite({
name: "BackConfirmMask",
widget: t,
rgb: 0,
alpha: .58,
img: this.config.white,
blockInputEvents: !0
}), ae.Sprite({
name: "BackConfirmPanel",
width: 850,
height: 550,
widget: {
isAlignHorizontalCenter: !0,
isAlignVerticalCenter: !0,
horizontalCenter: 0,
verticalCenter: 0,
alignMode: ae.WidgetAlignMode.Always
},
img: this.config.backConfirmPanelBg,
renderType: ae.RenderType.Sliced
}, ae.Text({
name: "BackConfirmText",
width: 550,
y: 90,
font: this.config.spartanBoldFont,
text: "Are you sure you want\nto leave?",
fontSize: 44,
lineHeight: 70,
rgb: 16777215,
horizontalAlign: ae.TextHorizontalAlign.CENTER,
overflow: ae.TextOverflow.RESIZE_HEIGHT
}), ae.Sprite({
name: "BackConfirmCancelBtn",
width: 320,
height: 158,
x: -200,
y: -130,
img: this.config.backConfirmBtnNo,
event: {
touchEnd: this.cancelChain
},
button: {
transition: ae.ButtonTransition.Scale,
duration: .1,
zoomScale: .9
}
}), ae.Sprite({
name: "BackConfirmOkBtn",
width: 320,
height: 158,
x: 200,
y: -130,
img: this.config.backConfirmBtnYes,
event: {
touchEnd: this.okChain
},
button: {
transition: ae.ButtonTransition.Scale,
duration: .1,
zoomScale: .9
}
})));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p, c, f;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_BackConfirmUiDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "backConfirmUiDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_BackConfirmUiCancelChain"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "cancelChain", void 0);
i([ ae.bindAtom("G5_FBase_BackConfirmUiOkChain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "okChain", void 0);
i([ ae.bindAtom("G5_FBase_CreateFullScreenWidget"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "createFullScreenWidget", void 0);
return i([ ae.atomClass("G5_FBase_BackConfirmUiRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_BackConfirmUiRender = p;
cc._RF.pop();
}, {} ],
G5_FBase_BackConfirmUiRouters: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "de497rJMPpJyLd+WJcXsY0B", "G5_FBase_BackConfirmUiRouters");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_BackConfirmDelayExitRouter = o.G5_FBase_BackConfirmUiOkChain = o.G5_FBase_BackConfirmUiCancelChain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_BackConfirmUiCancel"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "backConfirmUiCancel", void 0);
return i([ ae.atomClass("G5_FBase_BackConfirmUiCancelChain") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_BackConfirmUiCancelChain = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G5_FBase_BackConfirmUiOk"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "backConfirmUiOk", void 0);
return i([ ae.atomClass("G5_FBase_BackConfirmUiOkChain") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_BackConfirmUiOkChain = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_BackConfirmDoExit"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "backConfirmDoExit", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_ExitGame"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "exitGame", void 0);
return i([ ae.atomClass("G5_FBase_BackConfirmDelayExitRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_BackConfirmDelayExitRouter = f;
cc._RF.pop();
}, {} ],
G5_FBase_BackConfirmUiSignals: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7b797AyCbJBh78/wX5hEqj9", "G5_FBase_BackConfirmUiSignals");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_BackConfirmDoExit = o.G5_FBase_BackConfirmUiCancel = o.G5_FBase_BackConfirmUiOk = o.G5_FBase_BackConfirmUiShow = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_BackConfirmUiShow") ], t);
}(ae.SignalAtom);
o.G5_FBase_BackConfirmUiShow = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G5_FBase_BackConfirmUiDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "backConfirmUiDomain", void 0);
return i([ ae.atomClass("G5_FBase_BackConfirmUiOk") ], t);
}(ae.SignalAtom);
o.G5_FBase_BackConfirmUiOk = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G5_FBase_BackConfirmUiDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "backConfirmUiDomain", void 0);
return i([ ae.atomClass("G5_FBase_BackConfirmUiCancel") ], t);
}(ae.SignalAtom);
o.G5_FBase_BackConfirmUiCancel = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_BackConfirmDoExit") ], t);
}(ae.SignalAtom);
o.G5_FBase_BackConfirmDoExit = s;
cc._RF.pop();
}, {} ],
G5_FBase_BannerAd: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a09e2/npWRD4IWNWxB5N8uM", "G5_FBase_BannerAd");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ShowBannerOnRefresh = o.G5_FBase_ShowBannerOnGameInit = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
e && this.gameDomain.gameData.pendingNewGameGoalDialog[e] && this.showBanner();
};
var o, n, p, c;
i([ ae.onChain, ae.bindAtom("G5_FBase_DropComplete"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "dropComplete", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G_FAtom_ADShowBanner"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "showBanner", void 0);
i([ ae.bindAtom("G5_FBase_ShowAdFailedUIFunction"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "showAdFailedUI", void 0);
return i([ ae.atomClass("G5_FBase_ShowBannerOnGameInit") ], t);
}(ae.LogicAtom);
o.G5_FBase_ShowBannerOnGameInit = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.showBanner();
};
var o, n;
i([ ae.onChain, ae.bindAtom("G5_FBase_BannerRefreshSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "bannerRefreshSignal", void 0);
i([ ae.bindAtom("G_FAtom_ADShowBanner"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "showBanner", void 0);
return i([ ae.atomClass("G5_FBase_ShowBannerOnRefresh") ], t);
}(ae.LogicAtom);
o.G5_FBase_ShowBannerOnRefresh = c;
cc._RF.pop();
}, {} ],
G5_FBase_BlockAlgo: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "41417D2tQZDR4PCWXU+sLg6", "G5_FBase_BlockAlgo");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_AlgoEntropy = o.G5_FBase_AlgoFill = o.G5_FBase_AlgoChainSearch = o.G5_FBase_AlgoMeasureChain = o.G5_FBase_AlgoRandom = o.G5_FBase_BlockAlgo = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n, a) {
e.printBoard(t);
console.log("[出块算法][开始] 块池: " + o + ", 块池权重: " + n);
console.log("[出块算法] 出块策略权重: ", a);
if (o.length !== n.length) {
console.error("blockPool and blockPoolWeights must have the same length", o.length, n.length);
for (var i = (n = n.slice(0, o.length)).length; i < o.length; i++) n.push(n[n.length - 1]);
}
for (var r = [], c = t.length - 1; c >= 0; c--) for (var f = 0; f < t[c].length; f++) 0 === t[c][f] && r.push({
row: c,
col: f
});
for (i = 0; i < r.length; i++) {
var s = r[i], u = a[e.randomWeight2(a, "weight", "[出块算法] 出块策略权重: ")];
u.type === p.G5_FBase.SpawnStrategy.Fill ? e.algoFill(t, o, n, s) : u.type === p.G5_FBase.SpawnStrategy.Entropy ? e.algoEntropy(t, o, n, s) : u.type === p.G5_FBase.SpawnStrategy.Random && e.algoRandom(t, o, n, s);
}
};
};
var o, n, c, f, s;
i([ ae.bindAtom("G5_FBase_RandomWeight2"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "randomWeight2", void 0);
i([ ae.bindAtom("G5_FBase_AlgoFill"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "algoFill", void 0);
i([ ae.bindAtom("G5_FBase_AlgoEntropy"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "algoEntropy", void 0);
i([ ae.bindAtom("G5_FBase_AlgoRandom"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "algoRandom", void 0);
i([ ae.bindAtom("G5_FBase_UtilsPrintBoard"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "printBoard", void 0);
return i([ ae.atomClass("G5_FBase_BlockAlgo") ], t);
}(ae.FunctionAtom);
o.G5_FBase_BlockAlgo = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n, a) {
var i = e.randomWeight1(n, "[出块算法][随机] 块池权重: ");
t[a.row][a.col] = o[i];
console.log("[出块算法][随机] 出块位置: ", a.row, a.col, " 出块数值: ", o[i]);
};
};
var o;
i([ ae.bindAtom("G5_FBase_RandomWeight1"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "randomWeight1", void 0);
return i([ ae.atomClass("G5_FBase_AlgoRandom") ], t);
}(ae.FunctionAtom);
o.G5_FBase_AlgoRandom = f;
var s = [ [ -1, -1 ], [ -1, 0 ], [ -1, 1 ], [ 0, -1 ], [ 0, 1 ], [ 1, -1 ], [ 1, 0 ], [ 1, 1 ] ], u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = [], t = new Uint8Array(0);
return function(o, n, a, i, r, p, c) {
var f = n * a;
t.length < f && (t = new Uint8Array(f));
t.fill(0);
t[p * a + c] = 1;
t[i * a + r] = 1;
e.length = 0;
e.push({
row: i,
col: r,
depth: 1
});
for (var s = 1; e.length > 0; ) {
var u = e.pop();
u.depth > s && (s = u.depth);
for (var d = o[u.row][u.col], l = d.length - 2; l >= 0; l -= 2) {
var y = d[l], _ = d[l + 1], m = y * a + _;
if (!t[m]) {
t[m] = 1;
e.push({
row: y,
col: _,
depth: u.depth + 1
});
}
}
}
return s;
};
};
return i([ ae.atomClass("G5_FBase_AlgoMeasureChain") ], t);
}(ae.FunctionAtom);
o.G5_FBase_AlgoMeasureChain = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n) {
for (var a = t.length, i = t[0].length, r = new Set(o), p = [], c = 0; c < a; c++) {
p[c] = [];
for (var f = 0; f < i; f++) {
var u = t[c][f];
if (0 !== u) {
for (var d = [], l = 0; l < 8; l++) {
var y = c + s[l][0], _ = f + s[l][1];
y < 0 || y >= a || _ < 0 || _ >= i || 0 === (v = t[y][_]) || v !== u && v !== u + 1 || d.push({
nr: y,
nc: _,
nv: v
});
}
d.sort(function(e, t) {
return t.nv - e.nv;
});
for (var m = [], g = 0; g < d.length; g++) m.push(d[g].nr, d[g].nc);
p[c][f] = m;
} else p[c][f] = [];
}
}
var h = [];
for (l = 0; l < 8; l++) {
y = n.row + s[l][0], _ = n.col + s[l][1];
if (!(y < 0 || y >= a || _ < 0 || _ >= i)) {
var v;
0 !== (v = t[y][_]) && r.has(v) && h.push({
value: v,
chainLength: e.measureChain(p, a, i, y, _, n.row, n.col)
});
}
}
return h;
};
};
var o;
i([ ae.bindAtom("G5_FBase_AlgoMeasureChain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "measureChain", void 0);
return i([ ae.atomClass("G5_FBase_AlgoChainSearch") ], t);
}(ae.FunctionAtom);
o.G5_FBase_AlgoChainSearch = d;
var l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n, a) {
var i = e.chainSearch(t, o, a);
if (0 !== i.length) {
for (var r = 0, p = 0, c = 0; c < i.length; c++) {
var f = i[c];
if (f.chainLength > r || f.chainLength === r && f.value > p) {
r = f.chainLength;
p = f.value;
}
}
t[a.row][a.col] = p;
console.log("[出块算法][填空][链路搜索成功] 出块位置: ", a.row, a.col, " 出块数值: ", p);
} else {
var s = e.randomWeight1(n, "[出块算法][填空][随机] 块池权重: ");
t[a.row][a.col] = o[s];
console.log("[出块算法][填空][链路搜索失败] 出块位置: ", a.row, a.col, " 出块数值: ", o[s]);
}
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_AlgoChainSearch"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "chainSearch", void 0);
i([ ae.bindAtom("G5_FBase_RandomWeight1"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "randomWeight1", void 0);
return i([ ae.atomClass("G5_FBase_AlgoFill") ], t);
}(ae.FunctionAtom);
o.G5_FBase_AlgoFill = l;
var y = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n, a) {
for (var i = t.length, r = t[0].length, p = new Set(), c = 0; c < 8; c++) {
var f = a.row + s[c][0], u = a.col + s[c][1];
if (!(f < 0 || f >= i || u < 0 || u >= r)) {
var d = t[f][u];
0 !== d && p.add(d);
}
}
for (var l = Infinity, y = 0; y < o.length; y++) {
var _ = o[y];
!p.has(_) && _ < l && (l = _);
}
if (Infinity === l) {
var m = e.chainSearch(t, o, a);
if (0 !== m.length) {
var g = Infinity, h = Infinity;
for (y = 0; y < m.length; y++) {
var v = m[y];
if (v.chainLength < g || v.chainLength === g && v.value < h) {
g = v.chainLength;
h = v.value;
}
}
t[a.row][a.col] = h;
console.log("[出块算法][熵增][深度搜索成功] 出块位置: ", a.row, a.col, " 出块数值: ", h);
} else {
var b = e.randomWeight1(n, "[出块算法][熵增][随机] 块池权重: ");
t[a.row][a.col] = o[b];
console.log("[出块算法][熵增][深度搜索失败] 出块位置: ", a.row, a.col, " 出块数值: ", o[b]);
}
} else {
t[a.row][a.col] = l;
console.log("[出块算法][熵增][无邻居] 出块位置: ", a.row, a.col, " 出块数值: ", l);
}
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_AlgoChainSearch"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "chainSearch", void 0);
i([ ae.bindAtom("G5_FBase_RandomWeight1"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "randomWeight1", void 0);
return i([ ae.atomClass("G5_FBase_AlgoEntropy") ], t);
}(ae.FunctionAtom);
o.G5_FBase_AlgoEntropy = y;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_BoardSnapshot: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "836f83iP5FCHLa9RCYq1VyA", "G5_FBase_BoardSnapshot");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GetCurrentBoard = o.G5_FBase_LoadBoardSnapshot = o.G5_FBase_HasBoardSnapshot = o.G5_FBase_SaveBoardSnapshot = o.G5_FBase_CollectBoardPowerIndices = o.G5_FBase_CollectBoardData = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
for (var t = e.config, o = t.rows, n = t.cols, a = e.tileDomain.tileData, i = new Array(o * n).fill(0), r = e.tileDomain.collect(), p = 0, c = r.length; p < c; p++) {
var f = r[p], s = a.row[f], u = a.col[f];
s >= 0 && s < o && u >= 0 && u < n && (i[s * n + u] = a.value[f]);
}
return i;
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
return i([ ae.atomClass("G5_FBase_CollectBoardData") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CollectBoardData = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
for (var t = e.config, o = t.rows, n = t.cols, a = e.tileDomain.tileData, i = new Array(o * n).fill(0), r = e.tileDomain.collect(), p = 0, c = r.length; p < c; p++) {
var f = r[p], s = a.row[f], u = a.col[f];
s >= 0 && s < o && u >= 0 && u < n && (i[s * n + u] = a.powerIndex[f]);
}
return i;
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
return i([ ae.atomClass("G5_FBase_CollectBoardPowerIndices") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CollectBoardPowerIndices = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.gameDomain.collect()[0];
if (t) {
var o = e.collectBoard(), n = e.gameDomain.gameData, a = e.gameInitLogic.storage;
a.boardSnapshot = o.join(",");
a.score = n.score[t];
a.maxValue = n.maxValue[t];
}
};
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_CollectBoardData"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "collectBoard", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "gameInitLogic", void 0);
return i([ ae.atomClass("G5_FBase_SaveBoardSnapshot") ], t);
}(ae.FunctionAtom);
o.G5_FBase_SaveBoardSnapshot = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
return Boolean(e.gameInitLogic.storage.boardSnapshot);
};
};
var o;
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameInitLogic", void 0);
return i([ ae.atomClass("G5_FBase_HasBoardSnapshot") ], t);
}(ae.FunctionAtom);
o.G5_FBase_HasBoardSnapshot = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.gameInitLogic.storage, o = t.boardSnapshot;
if (!o) return null;
var n = {
values: o.split(",").map(Number),
score: t.score,
maxValue: t.maxValue
};
t.boardSnapshot = "";
return n;
};
};
var o;
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameInitLogic", void 0);
return i([ ae.atomClass("G5_FBase_LoadBoardSnapshot") ], t);
}(ae.FunctionAtom);
o.G5_FBase_LoadBoardSnapshot = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.collectBoardPowerIndices(), o = e.gameDomain.gameData, n = e.gameDomain.collect()[0];
return {
values: t,
score: n ? o.score[n] : 0,
maxValue: n ? o.maxValue[n] : 0
};
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_CollectBoardPowerIndices"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "collectBoardPowerIndices", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
return i([ ae.atomClass("G5_FBase_GetCurrentBoard") ], t);
}(ae.FunctionAtom);
o.G5_FBase_GetCurrentBoard = d;
cc._RF.pop();
}, {} ],
G5_FBase_BuildAdjustedSpawnPool: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "407d5XsU1NMtqabpyf4uNUJ", "G5_FBase_BuildAdjustedSpawnPool");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_BuildAdjustedSpawnPool = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function(e, t, o, n) {
void 0 === n && (n = 10);
for (var a = [], i = 0, r = e.numbers.length; i < r; i++) {
var p = e.numbers[i], c = e.weights[i];
p === t ? 1 === o ? a.push(Math.max(0, c - n)) : 2 === o ? a.push(c + n) : a.push(c) : a.push(c);
}
return {
numbers: e.numbers,
weights: a,
minValue: e.minValue,
maxValue: e.maxValue
};
};
};
return i([ ae.atomClass("G5_FBase_BuildAdjustedSpawnPool") ], t);
}(ae.FunctionAtom);
o.G5_FBase_BuildAdjustedSpawnPool = r;
cc._RF.pop();
}, {} ],
G5_FBase_BuildBoardGrid: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "42354sCwx9BHb+Ui6uyuc5j", "G5_FBase_BuildBoardGrid");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_BuildBoardGrid = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
for (var n = [], a = 0; a < t; a++) {
n[a] = [];
for (var i = 0; i < o; i++) n[a][i] = 0;
}
for (var r = e.tileDomain.tileData, p = e.tileDomain.collect(), c = 0, f = p.length; c < f; c++) {
var s = p[c], u = r.row[s], d = r.col[s], l = r.value[s];
u >= 0 && u < t && d >= 0 && d < o && (n[u][d] = l);
}
return n;
};
};
var o;
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
return i([ ae.atomClass("G5_FBase_BuildBoardGrid") ], t);
}(ae.FunctionAtom);
o.G5_FBase_BuildBoardGrid = p;
cc._RF.pop();
}, {} ],
G5_FBase_BuildMergeTweens: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "500a6w80hZHpI5uXm+p6f9N", "G5_FBase_BuildMergeTweens");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_BuildResetTweens = o.G5_FBase_BuildEndTileTween = o.G5_FBase_BuildMovingTweens = o.G5_FBase_BuildMergeTweens = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_BuildMergeTweens") ], t);
}(ae.ConfigAtom);
o.G5_FBase_BuildMergeTweens = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
for (var n = e.tileDomain.tileData, a = [], i = 0; i < t.length - 1; i++) {
var r = t[i], p = e.calcTilePos(r.row, r.col), c = o.x - p.x, f = o.y - p.y;
n.isAnimating.set(r.eid, 1);
n.fragmentTargetX.set(r.eid, c);
n.fragmentTargetY.set(r.eid, f);
n.fragmentPhase.set(r.eid, 1);
n.fragmentProgress.set(r.eid, 0);
a.push({
eid: r.eid,
steps: [ [ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.To, n, {
animScale: 0,
animAlpha: 0
}, .1, ae.TweenEasing.QuadOut ], [ ae.TweenStepType.To, n, {
fragmentProgress: 1
}, .1, ae.TweenEasing.QuadOut ] ] ], [ ae.TweenStepType.Delay, .1 ], [ ae.TweenStepType.To, n, {
fragmentPhase: 2,
fragmentProgress: 0
}, 0 ], [ ae.TweenStepType.To, n, {
fragmentProgress: 1
}, .3, ae.TweenEasing.QuadIn ], [ ae.TweenStepType.To, n, {
fragmentPhase: 0,
fragmentProgress: 0
}, 0 ] ]
});
}
return a;
};
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_CalcTilePos"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "calcTilePos", void 0);
return i([ ae.atomClass("G5_FBase_BuildMovingTweens") ], t);
}(ae.FunctionAtom);
o.G5_FBase_BuildMovingTweens = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.tileDomain.tileData;
o.isAnimating.set(t.eid, 1);
o.animScale.set(t.eid, .3);
o.animAlpha.set(t.eid, 0);
return [ [ ae.TweenStepType.Delay, .5 ], [ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.To, o, {
animScale: 1
}, .17, ae.TweenEasing.BackOut ], [ ae.TweenStepType.To, o, {
animAlpha: 1
}, .17, ae.TweenEasing.QuadOut ] ] ] ];
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
return i([ ae.atomClass("G5_FBase_BuildEndTileTween") ], t);
}(ae.FunctionAtom);
o.G5_FBase_BuildEndTileTween = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
for (var o = e.tileDomain.tileData, n = [], a = 0; a < t.length - 1; a++) {
var i = t[a];
n.push({
eid: i.eid,
steps: [ [ ae.TweenStepType.Delay, .5 ], [ ae.TweenStepType.To, o, {
value: 0,
animOffsetX: 0,
animOffsetY: 0,
animScale: 1,
animAlpha: 1,
fragmentPhase: 0,
fragmentProgress: 0
}, 0 ] ]
});
}
return n;
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
return i([ ae.atomClass("G5_FBase_BuildResetTweens") ], t);
}(ae.FunctionAtom);
o.G5_FBase_BuildResetTweens = s;
cc._RF.pop();
}, {} ],
G5_FBase_BuildSpawnPool: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9c025xjVSdLBJiKeR0mMb8/", "G5_FBase_BuildSpawnPool");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_BuildSpawnPool = o.G5_FBase_GetPhaseParams = o.G5_FBase_GetExpOffset = o.G5_FBase_ExpOffsetPhaseConfig = o.G5_FBase_PhaseConfig = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
switchExponents: [ 10, 15, 20, 25 ],
phaseWeights: [ [ 10, 10, 10, 10, 10, 10 ], [ 10, 10, 10, 10, 10, 10 ], [ 10, 10, 10, 10, 10, 10 ], [ 10, 10, 10, 10, 10, 10 ], [ 10, 10, 10, 10, 10, 10 ] ]
};
};
return i([ ae.atomClass("G5_FBase_PhaseConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_PhaseConfig = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
switchExponents: [ 10, 15, 20, 25 ],
phaseExpOffsets: [ 10, 10, 10, 10, 10 ]
};
};
return i([ ae.atomClass("G5_FBase_ExpOffsetPhaseConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_ExpOffsetPhaseConfig = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
for (var o, n = e.expOffsetPhaseConfig, a = n.switchExponents, i = n.phaseExpOffsets, r = 0, p = 0; p < a.length && t >= a[p]; p++) r = p + 1;
r >= i.length && (r = i.length - 1);
var c = null !== (o = i[r]) && void 0 !== o ? o : i[0];
console.log("[ExpOffset] maxValue=" + t + ", phase=" + r + ", expOffset=" + c);
return c;
};
};
var o;
i([ ae.bindAtom("G5_FBase_ExpOffsetPhaseConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "expOffsetPhaseConfig", void 0);
return i([ ae.atomClass("G5_FBase_GetExpOffset") ], t);
}(ae.FunctionAtom);
o.G5_FBase_GetExpOffset = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
for (var o, n = e.phaseConfig, a = n.switchExponents, i = n.phaseWeights, r = 0, p = 0; p < a.length && t >= a[p]; p++) r = p + 1;
r >= i.length && (r = i.length - 1);
var c = null !== (o = i[r]) && void 0 !== o ? o : i[0];
console.log("[ScoreWeight] maxValue=" + t + ", phase=" + r + ", weights=[" + c + "]");
return c;
};
};
var o;
i([ ae.bindAtom("G5_FBase_PhaseConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "phaseConfig", void 0);
return i([ ae.atomClass("G5_FBase_GetPhaseParams") ], t);
}(ae.FunctionAtom);
o.G5_FBase_GetPhaseParams = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o, n, a = t > 0 ? t : 1, i = e.getExpOffset(t), r = e.getPhaseParams(t), p = a - i, c = p > 1 ? p : 1, f = c + (r.length > 0 ? r.length : 1) - 1, s = a > 1 ? a : 1;
f > s && (f = s);
f < c && (f = c);
for (var u = [], d = c; d <= f; d++) u.push(d);
var l = r.length > 0 ? r[r.length - 1] : 10, y = u.map(function(e, t) {
var o;
return null !== (o = r[t]) && void 0 !== o ? o : l;
});
return {
numbers: u,
weights: y,
minValue: null !== (o = u[0]) && void 0 !== o ? o : 1,
maxValue: null !== (n = u[u.length - 1]) && void 0 !== n ? n : 1
};
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_GetPhaseParams"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "getPhaseParams", void 0);
i([ ae.bindAtom("G5_FBase_GetExpOffset"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getExpOffset", void 0);
return i([ ae.atomClass("G5_FBase_BuildSpawnPool") ], t);
}(ae.FunctionAtom);
o.G5_FBase_BuildSpawnPool = u;
cc._RF.pop();
}, {} ],
G5_FBase_ButtonSoundDispatch: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b5314+dxwhBeorRAIHXT0VE", "G5_FBase_ButtonSoundDispatch");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_LevelUpShowSoundDispatch = o.G5_FBase_LevelUpCloseSoundDispatch = o.G5_FBase_GoalDialogCloseSoundDispatch = o.G5_FBase_NoThanksButtonSoundDispatch = o.G5_FBase_ReviveButtonSoundDispatch = o.G5_FBase_ReplayButtonSoundDispatch = o.G5_FBase_HomeButtonSoundDispatch = o.G5_FBase_ToggleVibrationButtonSoundDispatch = o.G5_FBase_ToggleMusicButtonSoundDispatch = o.G5_FBase_SettingCloseSoundDispatch = o.G5_FBase_SettingOpenSoundDispatch = o.G5_FBase_BackButtonSoundDispatch = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.playButtonSound();
this.playVibrate();
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "playButtonSound", void 0);
i([ ae.bindAtom("G5_FBase_PlayVibrate"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "playVibrate", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_BackButtonRouter"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_BackButtonSoundDispatch") ], t);
}(ae.LogicAtom);
o.G5_FBase_BackButtonSoundDispatch = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.playButtonSound();
this.playVibrate();
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "playButtonSound", void 0);
i([ ae.bindAtom("G5_FBase_PlayVibrate"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "playVibrate", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_SettingOpenRouter"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_SettingOpenSoundDispatch") ], t);
}(ae.LogicAtom);
o.G5_FBase_SettingOpenSoundDispatch = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.playButtonSound();
this.playVibrate();
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "playButtonSound", void 0);
i([ ae.bindAtom("G5_FBase_PlayVibrate"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "playVibrate", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_SettingCloseRouter"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_SettingCloseSoundDispatch") ], t);
}(ae.LogicAtom);
o.G5_FBase_SettingCloseSoundDispatch = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.playButtonSound();
this.playVibrate();
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "playButtonSound", void 0);
i([ ae.bindAtom("G5_FBase_PlayVibrate"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "playVibrate", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_ToggleMusicRouter"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_ToggleMusicButtonSoundDispatch") ], t);
}(ae.LogicAtom);
o.G5_FBase_ToggleMusicButtonSoundDispatch = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.playButtonSound();
this.playVibrate();
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "playButtonSound", void 0);
i([ ae.bindAtom("G5_FBase_PlayVibrate"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "playVibrate", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_ToggleVibrationRouter"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_ToggleVibrationButtonSoundDispatch") ], t);
}(ae.LogicAtom);
o.G5_FBase_ToggleVibrationButtonSoundDispatch = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.playButtonSound();
this.playVibrate();
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "playButtonSound", void 0);
i([ ae.bindAtom("G5_FBase_PlayVibrate"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "playVibrate", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_HomeRouter"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_HomeButtonSoundDispatch") ], t);
}(ae.LogicAtom);
o.G5_FBase_HomeButtonSoundDispatch = d;
var l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.playButtonSound();
this.playVibrate();
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "playButtonSound", void 0);
i([ ae.bindAtom("G5_FBase_PlayVibrate"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "playVibrate", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_ReplayRouter"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_ReplayButtonSoundDispatch") ], t);
}(ae.LogicAtom);
o.G5_FBase_ReplayButtonSoundDispatch = l;
var y = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.playButtonSound();
this.playVibrate();
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "playButtonSound", void 0);
i([ ae.bindAtom("G5_FBase_PlayVibrate"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "playVibrate", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_ReviveButtonRouter"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_ReviveButtonSoundDispatch") ], t);
}(ae.LogicAtom);
o.G5_FBase_ReviveButtonSoundDispatch = y;
var _ = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.playButtonSound();
this.playVibrate();
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "playButtonSound", void 0);
i([ ae.bindAtom("G5_FBase_PlayVibrate"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "playVibrate", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_NoThanksButtonRouter"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_NoThanksButtonSoundDispatch") ], t);
}(ae.LogicAtom);
o.G5_FBase_NoThanksButtonSoundDispatch = _;
var m = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.playButtonSound();
this.playVibrate();
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "playButtonSound", void 0);
i([ ae.bindAtom("G5_FBase_PlayVibrate"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "playVibrate", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_GoalDialogCloseRouter"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_GoalDialogCloseSoundDispatch") ], t);
}(ae.LogicAtom);
o.G5_FBase_GoalDialogCloseSoundDispatch = m;
var g = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.playButtonSound();
this.playVibrate();
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "playButtonSound", void 0);
i([ ae.bindAtom("G5_FBase_PlayVibrate"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "playVibrate", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_LevelUpCloseRouter"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpCloseSoundDispatch") ], t);
}(ae.LogicAtom);
o.G5_FBase_LevelUpCloseSoundDispatch = g;
var h = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.playButtonSound(this.config.levelUpSound, .5);
};
var o, n, p, c;
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "playButtonSound", void 0);
i([ ae.bindAtom("G5_FBase_PlayVibrate"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "playVibrate", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_TweenToLevelUpShowRouter"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "config", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpShowSoundDispatch") ], t);
}(ae.LogicAtom);
o.G5_FBase_LevelUpShowSoundDispatch = h;
cc._RF.pop();
}, {} ],
G5_FBase_CalcFingerPos: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1e595SofZdGdqUrP5cUJWVO", "G5_FBase_CalcFingerPos");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_CalcFingerPos = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = {
x: 0,
y: 0
};
return function(o) {
var n = e.fingerDomain.fingerData, a = e.gameDomain.gameData, i = e.gameConfig.gridMaskOffsetY, r = n.fingerProgress[o] || 0, p = n.currentStep[o] || 0, c = e.guideConfig.steps;
if (p >= c.length) {
t.x = 0;
t.y = 0;
return t;
}
var f = c[p].targetTiles;
if (0 === f.length) {
t.x = 0;
t.y = 0;
return t;
}
var s = e.gameDomain.collect()[0], u = s ? a.renderOffsetX[s] : 0, d = s ? a.renderOffsetY[s] : 0, l = e.adapterLogic.runtime.extendScale, y = f.length - 1, _ = Math.max(0, Math.min(r, y)), m = Math.floor(_), g = Math.min(m + 1, y), h = _ - m, v = f[m], b = f[g], F = e.calcTilePos(v.row, v.col), G = F.x, A = F.y, B = e.calcTilePos(b.row, b.col), T = e.lerp(G, B.x, h) + u, O = e.lerp(A, B.y, h) - d;
t.x = T * l;
t.y = O * l + i;
return t;
};
};
var o, n, p, c, f, s, u;
i([ ae.bindAtom("G5_FBase_GuideFingerDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "fingerDomain", void 0);
i([ ae.bindAtom("G5_FBase_GuideConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideConfig", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gameConfig", void 0);
i([ ae.bindAtom("G5_FBase_CalcTilePos"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "calcTilePos", void 0);
i([ ae.bindAtom("G5_FBase_AdapterLogic"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "adapterLogic", void 0);
i([ ae.bindAtom("G_FAtom_MathLerp"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "lerp", void 0);
return i([ ae.atomClass("G5_FBase_CalcFingerPos") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CalcFingerPos = p;
cc._RF.pop();
}, {} ],
G5_FBase_CalcFontSize: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "dc49e77D/FKkLkdYWhLagTf", "G5_FBase_CalcFontSize");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_CalcFontSize = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.config.formatThreshold, n = e.formatNumber(t, o).length;
return n >= e.config.tileFontSizeThreshold6 ? e.config.tileFontSizeLen6 : n >= e.config.tileFontSizeThreshold5 ? e.config.tileFontSizeLen5 : n >= e.config.tileFontSizeThreshold4 ? e.config.tileFontSizeLen4 : e.config.tileFontSizeDefault;
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_FormatNumber"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "formatNumber", void 0);
return i([ ae.atomClass("G5_FBase_CalcFontSize") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CalcFontSize = p;
cc._RF.pop();
}, {} ],
G5_FBase_CalcMergeResult: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5d8cbgVe/RDqqU6b1q1nEk0", "G5_FBase_CalcMergeResult");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_CalcMergeResult = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
if (0 === t.length) return 0;
for (var o = t[0], n = 1; n < t.length; n++) t[n] > o && (o = t[n]);
var a = 0;
for (n = 0; n < t.length; n++) a += Math.pow(2, t[n] - o);
return o + e.nextPowerOf2(a);
};
};
var o;
i([ ae.bindAtom("G5_FBase_NextPowerOf2"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "nextPowerOf2", void 0);
return i([ ae.atomClass("G5_FBase_CalcMergeResult") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CalcMergeResult = p;
cc._RF.pop();
}, {} ],
G5_FBase_CalcScore: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b8484AS3KtNeqiR8DBMgkGI", "G5_FBase_CalcScore");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_CalcScore = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function(e) {
for (var t = 0, o = 0; o < e.length; o++) t += e[o];
return t;
};
};
return i([ ae.atomClass("G5_FBase_CalcScore") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CalcScore = r;
cc._RF.pop();
}, {} ],
G5_FBase_CalcTilePos: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e6321b+ylJBxKPtgqHXl99N", "G5_FBase_CalcTilePos");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_CalcTilePos = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = {
x: 0,
y: 0
};
return function(o, n) {
var a = e.config, i = a.tileSize, r = a.gap, p = a.padding, c = a.gridLeftX, f = a.gridTopY;
t.x = c + p + n * (i + r) + i / 2;
t.y = f - p - o * (i + r) - i / 2;
return t;
};
};
var o;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
return i([ ae.atomClass("G5_FBase_CalcTilePos") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CalcTilePos = p;
cc._RF.pop();
}, {} ],
G5_FBase_CanProcessTouch: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b98a4bEGnRCZrAYizDST8x1", "G5_FBase_CanProcessTouch");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_CanProcessTouch = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.gameDomain.collect()[0];
if (!t) return !1;
if (e.gameDomain.gameData.gameState[t] !== p.G5_FBase.GameState.Idle) return !1;
for (var o = e.tileDomain.tileData, n = e.tileDomain.collect(), a = 0, i = n.length; a < i; a++) if (o.isAnimating[n[a]]) return !1;
return !0;
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
return i([ ae.atomClass("G5_FBase_CanProcessTouch") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CanProcessTouch = c;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_CheckGameOver: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "34440VA5qtJqbrNtZL1OYV8", "G5_FBase_CheckGameOver");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_CheckGameOver = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
for (var t = e.config, o = t.rows, n = t.cols, a = e.tileDomain.tileData, i = Array(o).fill(null).map(function() {
return Array(n).fill(0);
}), r = e.tileDomain.collect(), p = 0, c = r.length; p < c; p++) {
var f = r[p], s = a.row[f], u = a.col[f];
s >= 0 && s < o && u >= 0 && u < n && (i[s][u] = a.value[f]);
}
for (var d = e.directionConfig.directions, l = d.length, y = 0; y < o; y++) for (var _ = 0; _ < n; _++) {
var m = i[y][_];
if (0 !== m) for (var g = 0; g < l; g++) {
var h = d[g], v = y + h[0], b = _ + h[1];
if (v >= 0 && v < o && b >= 0 && b < n && i[v][b] === m) return !1;
}
}
return !0;
};
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_DirectionConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "directionConfig", void 0);
return i([ ae.atomClass("G5_FBase_CheckGameOver") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CheckGameOver = p;
cc._RF.pop();
}, {} ],
G5_FBase_CollectConnectedTiles: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "16a7dbrnD9DtZLpSffNtigO", "G5_FBase_CollectConnectedTiles");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_CollectConnectedTiles = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = [], o = [], n = -1;
return function(a) {
if (void 0 !== a && a === n) return o;
void 0 !== a && (n = a);
var i = e.tileDomain.tileData;
o.length = 0;
for (var r = e.tileDomain.collect(), c = 0, f = 0, s = r.length; f < s; f++) {
var u = r[f];
if (i.state[u] === p.G5_FBase.TileState.Connected) {
var d = t[c];
if (!d) {
d = {
eid: 0,
row: 0,
col: 0,
chainIndex: 0
};
t[c] = d;
}
d.eid = u;
d.row = i.row[u];
d.col = i.col[u];
d.chainIndex = i.chainIndex[u];
o.push(d);
c++;
}
}
o.sort(function(e, t) {
return e.chainIndex - t.chainIndex;
});
return o;
};
};
var o;
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
return i([ ae.atomClass("G5_FBase_CollectConnectedTiles") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CollectConnectedTiles = c;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_ComboPopupConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8fad5nxes5Gzp2dA4RMWP1t", "G5_FBase_ComboPopupConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ComboPopupConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
minCount: 5,
animName: "in",
fontSize: 80,
fontColor: 16636475,
spineScale: 1,
baseYOffset: 80,
glowColor: 2638269,
glowBlur: 8,
spineDuration: .83,
numFadeInDuration: .33,
numHoldDuration: .17,
numFadeOutDuration: .33
};
};
return i([ ae.atomClass("G5_FBase_ComboPopupConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_ComboPopupConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_ComboPopupData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e9cd9BG5oZEyKuXYv0MqMNP", "G5_FBase_ComboPopupData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ComboPopupData = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
row: 0,
col: 0,
comboCount: 0,
alpha: 0,
animName: "",
numAlpha: 0
};
};
return i([ ae.atomClass("G5_FBase_ComboPopupData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_ComboPopupData = r;
cc._RF.pop();
}, {} ],
G5_FBase_ComboPopupDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "39f26z1cZFB/ouMEtyB1pME", "G5_FBase_ComboPopupDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ComboPopupDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_ComboPopupData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "comboPopupData", void 0);
return i([ ae.atomClass("G5_FBase_ComboPopupDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_ComboPopupDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_ComboPopupRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "07e71+ngp1FEqlZXckiIUy4", "G5_FBase_ComboPopupRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ComboPopupRender = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = this.comboPopupDomain.comboPopupData, o = this.gameDomain.gameData, n = this.comboPopupConfig, a = n.minCount;
return ae.Node({
name: "ComboPopupRoot",
zIndex: this.zIndexConfig.comboPopup,
anchorX: .5,
anchorY: .5,
x: [ function(n) {
var a = e.calcTilePos(t.row[n], t.col[n]), i = e.gameDomain.collect()[0], r = i ? o.renderOffsetX[i] : 0, p = a.x + r;
p - 240 < -e.config.gridWidth / 2 ? p = -e.config.gridWidth / 2 + 240 : p + 240 > e.config.gridWidth / 2 && (p = e.config.gridWidth / 2 - 240);
return p;
}, [ t, "row" ], [ t, "col" ], [ o, "renderOffsetX" ] ],
y: [ function(a) {
var i = e.calcTilePos(t.row[a], t.col[a]), r = e.gameDomain.collect()[0], p = r ? o.renderOffsetY[r] : 0;
return i.y - p + n.baseYOffset;
}, [ t, "row" ], [ t, "col" ], [ o, "renderOffsetY" ] ],
alpha: [ function(e) {
return t.alpha[e];
}, [ t, "alpha" ] ],
active: [ function(e) {
return t.alpha[e] > 0 && t.comboCount[e] >= a;
}, [ t, "alpha" ], [ t, "comboCount" ] ]
}, ae.Spine({
name: "ComboSpine",
spineUrl: this.config.comboSpine,
scaleX: n.spineScale,
scaleY: n.spineScale,
anchorX: .5,
anchorY: .5,
animation: {
name: [ function(e) {
return t.animName[e];
}, [ t, "animName" ] ],
loop: !1
},
event: {
complete: this.comboAnimCompleteRouter
},
slots: {
hook_num: ae.Text({
name: "ComboNumber",
text: [ function(e) {
return t.comboCount[e] >= a ? "×" + t.comboCount[e] : "";
}, [ t, "comboCount" ] ],
fontSize: n.fontSize,
rgb: n.fontColor,
enableBold: !0,
enableItalic: !0,
anchorX: .5,
anchorY: .5,
alpha: [ function(e) {
return t.numAlpha[e];
}, [ t, "numAlpha" ] ],
outline: {
rgb: n.glowColor,
width: 4
}
})
}
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p, c, f, s, u;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_ComboPopupDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "comboPopupDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_CalcTilePos"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "calcTilePos", void 0);
i([ ae.bindAtom("G5_FBase_ComboPopupConfig"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "comboPopupConfig", void 0);
i([ ae.bindAtom("G5_FBase_ComboAnimCompleteRouter"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "comboAnimCompleteRouter", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "zIndexConfig", void 0);
return i([ ae.atomClass("G5_FBase_ComboPopupRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_ComboPopupRender = p;
cc._RF.pop();
}, {} ],
G5_FBase_ConnectPulseConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9f504NKsMlFoax05FXDGuEU", "G5_FBase_ConnectPulseConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ConnectPulseConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
first: {
shrink1: {
duration: .06,
scale: .9
},
expand1: {
duration: .1,
scale: 1.2
},
shrink2: {
duration: .1,
scale: 1
},
shrink3: {
duration: .07,
scale: .9
},
expand2: {
duration: .07,
scale: 1
}
},
other: {
expand1: {
duration: .1,
scale: 1.2
},
shrink1: {
duration: .1,
scale: 1
},
shrink2: {
duration: .06,
scale: .9
},
expand2: {
duration: .07,
scale: 1
}
},
glow: {
firstDelay: .06,
firstDuration: .1,
otherDuration: .1
}
};
};
return i([ ae.atomClass("G5_FBase_ConnectPulseConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_ConnectPulseConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_ConnectionLineConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ccfe0VS4GNAUabA0Q3cPQff", "G5_FBase_ConnectionLineConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ConnectionLineConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
glowWidth: 25,
innerWidth: 25,
maxLineSegments: 39
};
};
return i([ ae.atomClass("G5_FBase_ConnectionLineConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_ConnectionLineConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_ConnectionLineData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "71b13zvO09JSr9eUf882gBl", "G5_FBase_ConnectionLineData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ConnectionLineData = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
dirtyVersion: 0,
active: !1,
touchLocalX: 0,
touchLocalY: 0,
lastTileLocalX: 0,
lastTileLocalY: 0,
zIndex: 10
};
};
return i([ ae.atomClass("G5_FBase_ConnectionLineData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_ConnectionLineData = r;
cc._RF.pop();
}, {} ],
G5_FBase_ConnectionLineDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3e4e3zQiNDL6onDdV6xEjP", "G5_FBase_ConnectionLineDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ConnectionLineDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_ConnectionLineData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "connectionLineData", void 0);
return i([ ae.atomClass("G5_FBase_ConnectionLineDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_ConnectionLineDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_ConnectionLineRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "890a5Ktyw1JO6h175jtts5S", "G5_FBase_ConnectionLineRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, p = this && this.__read || function(e, t) {
var o = "function" == typeof Symbol && e[Symbol.iterator];
if (!o) return e;
var n, a, i = o.call(e), r = [];
try {
for (;(void 0 === t || t-- > 0) && !(n = i.next()).done; ) r.push(n.value);
} catch (e) {
a = {
error: e
};
} finally {
try {
n && !n.done && (o = i.return) && o.call(i);
} finally {
if (a) throw a.error;
}
}
return r;
}, c = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(p(arguments[t]));
return e;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ConnectionLineRender = void 0;
var f = e("../../G5_FBase_Namespace"), s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
for (var e = this, t = this.config, o = t.gridWidth, n = t.gridHeight, a = this.connectionLineConfig.maxLineSegments, i = this.connectionLineConfig.glowWidth, r = this.connectionLineConfig.innerWidth, p = this.connectionLineDomain.connectionLineData, s = this.gameDomain.gameData, u = this.tileDomain.tileData, d = this.gameInitLogic.runtime, l = {
p1x: 0,
p1y: 0,
p2x: 0,
p2y: 0
}, y = [], _ = function(t) {
var o = t;
y.push(ae.Node({
name: "LineSegment_" + o,
anchorX: .5,
anchorY: .5,
x: [ function(t) {
var n = p.dirtyVersion[t], a = e.collectConnectedTiles(n);
if (a.length < o + 2) return 0;
var i = e.calcTilePos(a[o].row, a[o].col).x, r = e.calcTilePos(a[o + 1].row, a[o + 1].col), c = e.gameDomain.collect()[0], f = c ? s.renderOffsetX[c] : 0;
return (i + r.x) / 2 + f;
}, [ p, "dirtyVersion" ], [ s, "renderOffsetX" ], [ s, "renderOffsetY" ] ],
y: [ function(t) {
var n = p.dirtyVersion[t], a = e.collectConnectedTiles(n);
if (a.length < o + 2) return 0;
var i = e.calcTilePos(a[o].row, a[o].col).y, r = e.calcTilePos(a[o + 1].row, a[o + 1].col), c = e.gameDomain.collect()[0], f = c ? s.renderOffsetY[c] : 0;
return (i + r.y) / 2 - f;
}, [ p, "dirtyVersion" ], [ s, "renderOffsetX" ], [ s, "renderOffsetY" ] ],
angle: [ function(t) {
var n = p.dirtyVersion[t], a = e.collectConnectedTiles(n);
if (a.length < o + 2) return 0;
var i = e.calcTilePos(a[o].row, a[o].col), r = i.x, c = i.y, f = e.calcTilePos(a[o + 1].row, a[o + 1].col);
return e.mathAtan2(f.y - c, f.x - r) * (180 / Math.PI);
}, [ p, "dirtyVersion" ], [ s, "renderOffsetX" ], [ s, "renderOffsetY" ] ],
active: [ function(t) {
return d.gameState === f.G5_FBase.GameState.Idle && !!p.active[t] && e.collectConnectedTiles(p.dirtyVersion[t]).length >= o + 2;
}, [ m.gameInitLogic, "runtime", "gameState" ], [ p, "active" ], [ p, "dirtyVersion" ] ]
}, ae.Sprite({
zIndex: 2,
name: "LineGlow_" + o,
img: m.config.line2,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
anchorX: .5,
anchorY: .5,
width: [ function(t) {
var n = p.dirtyVersion[t], a = e.collectConnectedTiles(n);
if (a.length < o + 2) return 0;
var i = e.calcTilePos(a[o].row, a[o].col);
l.p1x = i.x;
l.p1y = i.y;
var r = e.calcTilePos(a[o + 1].row, a[o + 1].col);
return e.mathHypot(r.x - l.p1x, r.y - l.p1y);
}, [ p, "dirtyVersion" ] ],
height: i,
rgb: 16777215
}), ae.Sprite({
zIndex: 1,
name: "LineInner_" + o,
img: m.config.line1,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
anchorX: .5,
anchorY: .5,
width: [ function(t) {
var n = p.dirtyVersion[t], a = e.collectConnectedTiles(n);
if (a.length < o + 2) return 0;
var i = e.calcTilePos(a[o].row, a[o].col);
l.p1x = i.x;
l.p1y = i.y;
var r = e.calcTilePos(a[o + 1].row, a[o + 1].col);
return e.mathHypot(r.x - l.p1x, r.y - l.p1y);
}, [ p, "dirtyVersion" ] ],
height: r,
rgb: [ function(t) {
var n = p.dirtyVersion[t], a = e.collectConnectedTiles(n);
return a.length < o + 2 ? 16777215 : e.getColor(u.value[a[o].eid]);
}, [ p, "dirtyVersion" ] ]
})));
}, m = this, g = 0; g < a; g++) _(g);
var h = ae.Node({
name: "FollowLine",
anchorX: .5,
anchorY: .5,
x: [ function(e) {
return (p.lastTileLocalX[e] + p.touchLocalX[e]) / 2;
}, [ p, "lastTileLocalX" ], [ p, "touchLocalX" ] ],
y: [ function(e) {
return (p.lastTileLocalY[e] + p.touchLocalY[e]) / 2;
}, [ p, "lastTileLocalY" ], [ p, "touchLocalY" ] ],
angle: [ function(t) {
var o = p.lastTileLocalX[t], n = p.lastTileLocalY[t], a = p.touchLocalX[t] - o, i = p.touchLocalY[t] - n;
return e.mathAtan2(i, a) * (180 / Math.PI);
}, [ p, "lastTileLocalX" ], [ p, "lastTileLocalY" ], [ p, "touchLocalX" ], [ p, "touchLocalY" ] ],
active: [ function(e) {
return d.gameState === f.G5_FBase.GameState.Idle && p.active[e];
}, [ this.gameInitLogic, "runtime", "gameState" ], [ p, "active" ] ]
}, ae.Sprite({
zIndex: 2,
name: "FollowLineGlow",
img: this.config.line2,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
anchorX: .5,
anchorY: .5,
width: [ function(t) {
var o = p.lastTileLocalX[t], n = p.lastTileLocalY[t], a = p.touchLocalX[t] - o, i = p.touchLocalY[t] - n;
return e.mathHypot(a, i);
}, [ p, "lastTileLocalX" ], [ p, "lastTileLocalY" ], [ p, "touchLocalX" ], [ p, "touchLocalY" ] ],
height: i
}), ae.Sprite({
zIndex: 1,
name: "FollowLineInner",
img: this.config.line1,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
anchorX: .5,
anchorY: .5,
width: [ function(t) {
var o = p.lastTileLocalX[t], n = p.lastTileLocalY[t], a = p.touchLocalX[t] - o, i = p.touchLocalY[t] - n;
return e.mathHypot(a, i);
}, [ p, "lastTileLocalX" ], [ p, "lastTileLocalY" ], [ p, "touchLocalX" ], [ p, "touchLocalY" ] ],
height: r,
rgb: [ function(t) {
var o = p.dirtyVersion[t], n = e.collectConnectedTiles(o);
if (n.length < 1) return 16777215;
var a = n[n.length - 1];
return e.getColor(u.value[a.eid]);
}, [ p, "dirtyVersion" ] ]
}));
return ae.Node.apply(ae, c([ {
name: "ConnectionLineRoot",
zIndex: [ function(e) {
return p.zIndex[e];
}, [ p, "zIndex" ] ],
width: o,
height: n,
anchorX: .5,
anchorY: .5
} ], y, [ h ]));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p, s, u, d, l, y, _, m, g, h, v;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_ConnectionLineDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "connectionLineDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_CalcTilePos"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "calcTilePos", void 0);
i([ ae.bindAtom("G5_FBase_GetColor"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getColor", void 0);
i([ ae.bindAtom("G5_FBase_CollectConnectedTiles"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "collectConnectedTiles", void 0);
i([ ae.bindAtom("G_FAtom_MathHypot"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "mathHypot", void 0);
i([ ae.bindAtom("G_FAtom_MathAtan2"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "mathAtan2", void 0);
i([ ae.bindAtom("G_FAtom_MathSqrt"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "mathSqrt", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "zIndexConfig", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "gameInitLogic", void 0);
i([ ae.bindAtom("G5_FBase_ConnectionLineConfig"), r("design:type", "function" == typeof (v = "undefined" != typeof ae && ae.AtomTypeInfer) ? v : Object) ], t.prototype, "connectionLineConfig", void 0);
return i([ ae.atomClass("G5_FBase_ConnectionLineRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_ConnectionLineRender = s;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_ConnectionManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a580aUsDd5Kko4BtwxACLUA", "G5_FBase_ConnectionManager");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_OnTouchCancel = o.G5_FBase_OnTouchEnd = o.G5_FBase_OnTouchMove = o.G5_FBase_OnTouchStart = o.G5_FBase_ConnectionManager = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_ConnectionManager") ], t);
}(ae.ConfigAtom);
o.G5_FBase_ConnectionManager = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.screenToGrid(this.pointer.localX, this.pointer.localY), t = e.row, o = e.col;
if (!(t < 0 || o < 0)) {
var n = this.gameDomain.collect()[0];
if (n) {
var a = this.gameDomain.gameData;
if (a.gameState[n] === p.G5_FBase.GameState.Idle) {
for (var i = this.tileDomain.tileData, r = this.tileDomain.collect(), c = 0, f = r.length; c < f; c++) {
var s = r[c];
if (i.isAnimating[s]) return;
}
var u = this.getTileValue(t, o);
if (!(u <= 0)) {
for (c = 0, f = r.length; c < f; c++) {
s = r[c];
if (i.state[s] === p.G5_FBase.TileState.Connected) {
i.state.set(s, p.G5_FBase.TileState.Normal);
i.chainIndex.set(s, -1);
this.syncGlowState(s, p.G5_FBase.TileState.Normal, 0);
}
}
a.touchRow.set(n, t);
a.touchCol.set(n, o);
a.isConnecting.set(n, !0);
a.startValue.set(n, u);
a.lastChainValue.set(n, u);
a.chainLength.set(n, 1);
a.chainPreviewValue.set(n, u);
for (c = 0, f = r.length; c < f; c++) {
s = r[c];
if (i.row[s] === t && i.col[s] === o) {
i.state.set(s, p.G5_FBase.TileState.Connected);
i.chainIndex.set(s, 0);
i.zIndex.set(s, this.zIndexConfig.tileConnected);
this.syncGlowState(s, p.G5_FBase.TileState.Connected);
this.playConnectPulseAnim(s, !0);
break;
}
}
this.updateTouchLocalPos(this.pointer.localX, this.pointer.localY);
this.markConnectionLineDirty(!0);
this.playButtonSound(this.config.touchSound);
}
}
}
}
};
var o, n, c, f, s, u, d, l, y, _, m, g, h;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_TouchStart"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "touchStart", void 0);
i([ ae.bindAtom("G_FAtom_Pointer"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "pointer", void 0);
i([ ae.bindAtom("G5_FBase_GetTileValue"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getTileValue", void 0);
i([ ae.bindAtom("G5_FBase_ScreenToGrid"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "screenToGrid", void 0);
i([ ae.bindAtom("G5_FBase_PlayConnectPulseAnim"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "playConnectPulseAnim", void 0);
i([ ae.bindAtom("G5_FBase_MarkConnectionLineDirty"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "markConnectionLineDirty", void 0);
i([ ae.bindAtom("G5_FBase_SyncGlowState"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "syncGlowState", void 0);
i([ ae.bindAtom("G5_FBase_UpdateTouchLocalPos"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "updateTouchLocalPos", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "zIndexConfig", void 0);
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "playButtonSound", void 0);
return i([ ae.atomClass("G5_FBase_OnTouchStart") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnTouchStart = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
if (e) {
var t = this.gameDomain.gameData;
this.updateTouchLocalPos(this.pointer.localX, this.pointer.localY);
var o = this.screenToGrid(this.pointer.localX, this.pointer.localY), n = o.row, a = o.col;
if (!(n < 0 || a < 0) && t.isConnecting[e]) {
var i = t.touchRow[e], r = t.touchCol[e];
if (n !== i || a !== r) {
for (var c = this.tileDomain.tileData, f = t.chainLength[e], s = !1, u = this.tileDomain.collect(), d = null, l = -1, y = 0, _ = u.length; y < _; y++) {
var m = u[y];
if (c.row[m] === n && c.col[m] === a) {
d = m;
c.state[m] === p.G5_FBase.TileState.Connected && (l = c.chainIndex[m]);
break;
}
}
if (l === f - 2 && f >= 2) {
for (y = 0, _ = u.length; y < _; y++) {
m = u[y];
if (c.state[m] === p.G5_FBase.TileState.Connected && c.chainIndex[m] === f - 1) {
c.state.set(m, p.G5_FBase.TileState.Normal);
c.chainIndex.set(m, -1);
this.syncGlowState(m, p.G5_FBase.TileState.Normal, 0);
c.zIndex.set(m, this.zIndexConfig.tileDefault);
break;
}
}
t.chainLength.set(e, f - 1);
t.touchRow.set(e, n);
t.touchCol.set(e, a);
null !== d && t.lastChainValue.set(e, c.value[d]);
s = !0;
} else if (l < 0 && this.isAdjacent(n, a, i, r)) {
var g = this.getTileValue(n, a), h = t.startValue[e], v = t.lastChainValue[e];
if (!(f < 2 ? g === h : g === v || g === v + 1)) return;
t.touchRow.set(e, n);
t.touchCol.set(e, a);
t.lastChainValue.set(e, g);
t.chainLength.set(e, f + 1);
for (y = 0, _ = u.length; y < _; y++) {
m = u[y];
if (c.row[m] === n && c.col[m] === a) {
c.state.set(m, p.G5_FBase.TileState.Connected);
c.chainIndex.set(m, f);
c.zIndex.set(m, this.zIndexConfig.tileConnected);
this.syncGlowState(m, p.G5_FBase.TileState.Connected);
this.playConnectPulseAnim(m, !1);
break;
}
}
this.playSound(this.config.touchSound, .5);
s = !0;
}
if (s) {
var b = [];
for (y = 0, _ = u.length; y < _; y++) {
m = u[y];
c.state[m] === p.G5_FBase.TileState.Connected && b.push(c.value[m]);
}
t.chainPreviewValue.set(e, this.calcMergeResult(b));
this.markConnectionLineDirty(!0);
}
}
}
}
};
var o, n, c, f, s, u, d, l, y, _, m, g, h, v, b, F;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_ConnectionLineDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "connectionLineDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_TouchMove"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "touchMove", void 0);
i([ ae.bindAtom("G_FAtom_Pointer"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "pointer", void 0);
i([ ae.bindAtom("G5_FBase_GetTileValue"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "getTileValue", void 0);
i([ ae.bindAtom("G5_FBase_IsAdjacent"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "isAdjacent", void 0);
i([ ae.bindAtom("G5_FBase_ScreenToGrid"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "screenToGrid", void 0);
i([ ae.bindAtom("G5_FBase_CalcMergeResult"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "calcMergeResult", void 0);
i([ ae.bindAtom("G5_FBase_PlayConnectPulseAnim"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "playConnectPulseAnim", void 0);
i([ ae.bindAtom("G5_FBase_MarkConnectionLineDirty"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "markConnectionLineDirty", void 0);
i([ ae.bindAtom("G5_FBase_SyncGlowState"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "syncGlowState", void 0);
i([ ae.bindAtom("G5_FBase_UpdateTouchLocalPos"), r("design:type", "function" == typeof (v = "undefined" != typeof ae && ae.AtomTypeInfer) ? v : Object) ], t.prototype, "updateTouchLocalPos", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (b = "undefined" != typeof ae && ae.AtomTypeInfer) ? b : Object) ], t.prototype, "zIndexConfig", void 0);
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (F = "undefined" != typeof ae && ae.AtomTypeInfer) ? F : Object) ], t.prototype, "playSound", void 0);
return i([ ae.atomClass("G5_FBase_OnTouchMove") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnTouchMove = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
if (e) {
var t = this.gameDomain.gameData;
if (t.isConnecting[e]) {
var o = this.tileDomain.tileData, n = t.chainLength[e];
this.markConnectionLineDirty(!1);
var a = this.tileDomain.collect();
if (n >= 2) {
for (var i = [], r = 0, c = a.length; r < c; r++) {
var f = a[r];
o.state[f] === p.G5_FBase.TileState.Connected && i.push({
eid: f,
chainIndex: o.chainIndex[f],
value: o.value[f]
});
}
i.sort(function(e, t) {
return e.chainIndex - t.chainIndex;
});
t.mergeCount.set(e, i.length);
var s = [];
for (r = 0, c = i.length; r < c; r++) s.push(i[r].value);
var u = this.calcMergeResult(s), d = this.calcScore(s);
t.mergeResultValue.set(e, u);
t.mergeScoreGained.set(e, d);
u > t.maxValue[e] && !t.isGuideMode[e] && this.syncTileMaxValue(u);
t.gameState.set(e, p.G5_FBase.GameState.Processing);
} else {
for (r = 0, c = a.length; r < c; r++) {
f = a[r];
if (o.state[f] === p.G5_FBase.TileState.Connected) {
o.state.set(f, p.G5_FBase.TileState.Normal);
o.chainIndex.set(f, -1);
this.syncGlowState(f, p.G5_FBase.TileState.Normal, 0);
o.zIndex.set(f, this.zIndexConfig.tileDefault);
}
}
t.isConnecting.set(e, !1);
t.startValue.set(e, 0);
t.lastChainValue.set(e, 0);
t.chainLength.set(e, 0);
t.chainPreviewValue.set(e, 0);
t.touchRow.set(e, -1);
t.touchCol.set(e, -1);
t.mergeCount.set(e, 0);
}
}
}
};
var o, n, c, f, s, u, d, l, y, _;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_TouchEnd"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "touchEnd", void 0);
i([ ae.bindAtom("G5_FBase_CalcMergeResult"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "calcMergeResult", void 0);
i([ ae.bindAtom("G5_FBase_CalcScore"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "calcScore", void 0);
i([ ae.bindAtom("G5_FBase_MarkConnectionLineDirty"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "markConnectionLineDirty", void 0);
i([ ae.bindAtom("G5_FBase_SyncGlowState"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "syncGlowState", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "zIndexConfig", void 0);
i([ ae.bindAtom("G5_FBase_SyncTileMaxValue"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "syncTileMaxValue", void 0);
return i([ ae.atomClass("G5_FBase_OnTouchEnd") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnTouchEnd = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
if (e) {
var t = this.gameDomain.gameData;
if (t.isConnecting[e]) {
var o = this.tileDomain.tileData;
this.markConnectionLineDirty(!1);
for (var n = this.tileDomain.collect(), a = 0, i = n.length; a < i; a++) {
var r = n[a];
if (o.state[r] === p.G5_FBase.TileState.Connected) {
o.state.set(r, p.G5_FBase.TileState.Normal);
o.chainIndex.set(r, -1);
this.syncGlowState(r, p.G5_FBase.TileState.Normal, 0);
o.zIndex.set(r, this.zIndexConfig.tileDefault);
}
}
t.isConnecting.set(e, !1);
t.startValue.set(e, 0);
t.lastChainValue.set(e, 0);
t.chainLength.set(e, 0);
t.chainPreviewValue.set(e, 0);
t.touchRow.set(e, -1);
t.touchCol.set(e, -1);
t.mergeCount.set(e, 0);
}
}
};
var o, n, c, f, s, u;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_TouchCancel"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "touchCancel", void 0);
i([ ae.bindAtom("G5_FBase_MarkConnectionLineDirty"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "markConnectionLineDirty", void 0);
i([ ae.bindAtom("G5_FBase_SyncGlowState"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "syncGlowState", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "zIndexConfig", void 0);
return i([ ae.atomClass("G5_FBase_OnTouchCancel") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnTouchCancel = d;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_CreateRevivePanelFunction: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f9fdbJ57KJP1aIEethNzVvr", "G5_FBase_CreateRevivePanelFunction");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_CreateRevivePanelFunction = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.gameDomain.collect()[0];
if (!t) return null;
var o = null, n = e.revivePanelDomain.collect();
if (0 === n.length) {
o = e.revivePanelDomain.create();
e.childOf.addChild(t, o);
} else o = n[0];
e.hideRevivePanelFunction();
return o;
};
};
var o, n, p, c;
i([ ae.bindAtom("G5_FBase_RevivePanelDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "revivePanelDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G5_FBase_HideRevivePanelFunction"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "hideRevivePanelFunction", void 0);
return i([ ae.atomClass("G5_FBase_CreateRevivePanelFunction") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CreateRevivePanelFunction = p;
cc._RF.pop();
}, {} ],
G5_FBase_DirAsset: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "750c5xogVBGMqV1Rq+uNI/o", "G5_FBase_DirAsset");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_DirAsset = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url(this.resPathConfig.resPath);
return {
allRes: [ e("res/textures"), e("res/fonts"), e("res/spines") ]
};
};
var o;
i([ ae.bindAtom("G5_FBase_ResPathConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "resPathConfig", void 0);
return i([ ae.atomClass("G5_FBase_DirAsset") ], t);
}(ae.ConfigAtom);
o.G5_FBase_DirAsset = p;
cc._RF.pop();
}, {} ],
G5_FBase_DirectionConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ec07bqNh4BFto8nlsYDPaFB", "G5_FBase_DirectionConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_DirectionConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
directions: [ [ -1, -1 ], [ -1, 0 ], [ -1, 1 ], [ 0, -1 ], [ 0, 1 ], [ 1, -1 ], [ 1, 0 ], [ 1, 1 ] ]
};
};
return i([ ae.atomClass("G5_FBase_DirectionConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_DirectionConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_DropLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8491dyFHTVJS4FvbKpqgEfp", "G5_FBase_DropLogic");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_OnDropSound = o.G5_FBase_OnDropStart = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t = this.config, o = t.rows, n = t.cols, a = t.dropDuration, i = t.dropSquashDuration, r = t.dropBounceDuration, c = t.dropTileDelay, f = t.dropColDelay, s = t.tileSize, u = t.gap, d = this.tileDomain.tileData, l = this.tileGlowDomain.tileGlowData, y = this.gameDomain.collect()[0];
if (y) {
var _ = this.gameDomain.gameData, m = _.effectiveRows[y] || o, g = _.effectiveCols[y] || n, h = [], v = _.dropColCount[y];
if (v > 0) for (var b = [ _.dropColOrder0[y], _.dropColOrder1[y], _.dropColOrder2[y], _.dropColOrder3[y], _.dropColOrder4[y] ], F = 0; F < v; F++) b[F] >= 0 && h.push(b[F]);
console.log("[出块算法] poolStrategyWeights: " + this.strategyConfig.poolStrategyWeights);
console.log("[出块算法] poolWeightAdjustAmount: " + this.strategyConfig.poolWeightAdjustAmount);
console.log("[出块算法] spawnStrategyWeights: " + this.strategyConfig.spawnStrategyWeights);
for (var G = this.getMaxTileValue(), A = this.adjustSpawnPool(this.buildSpawnPool(G)), B = this.buildBoardGrid(m, g), T = new Map(), O = this.tileDomain.collect(), R = (F = 0, 
O.length); F < R; F++) {
var j = O[F], C = d.col[j], S = d.row[j], D = d.value[j];
if (!(C >= g || S >= m)) {
T.has(C) || T.set(C, []);
T.get(C).push({
eid: j,
row: S,
value: D
});
}
}
var w = new Set(h), I = h.slice();
for (C = 0; C < g; C++) w.has(C) || I.push(C);
for (var P = !1, x = 0, L = s + u, M = a + i + r, U = [], E = 0; E < I.length; E++) {
C = I[E];
var k = T.get(C) || [];
k.sort(function(e, t) {
return t.row - e.row;
});
for (var N = [], V = [], z = 0, Y = k.length; z < Y; z++) {
var H = k[z];
H.value > 0 ? N.push(H) : V.push(H);
}
for (var W = [], X = m - 1, Z = 0, K = N.length; Z < K; Z++) {
if ((pe = N[Z]).row !== X) {
P = !0;
var q = (X - pe.row) * L;
d.row.set(pe.eid, X);
d.animOffsetY.set(pe.eid, q);
void 0 !== (ce = this.tileToGlow.getTargets(pe.eid)[0]) && l.row.set(ce, X);
W.push({
eid: pe.eid,
startOffsetY: q
});
}
X--;
}
for (var J = 0; J < m; J++) B[J][C] = 0;
var Q = m - 1;
for (Z = 0, K = N.length; Z < K; Z++) {
B[Q][C] = N[Z].value;
Q--;
}
U.push({
col: C,
colIdx: E,
writeRow: X,
emptyTiles: V,
emptyCount: V.length,
animTiles: W
});
}
var $ = _.useRandomSpawn[y];
$ && _.useRandomSpawn.set(y, !1);
var ee = [];
if ($) ee.push({
type: p.G5_FBase.SpawnStrategy.Random,
weight: 1
}); else {
var te = this.parseStrategyWeights(this.strategyConfig.spawnStrategyWeights);
for (F = 0; F < te.strategies.length; F++) ee.push({
type: te.strategies[F],
weight: te.weights[F]
});
}
this.blockAlgo(B, A.numbers, A.weights, ee);
for (var oe = U.slice().sort(function(e, t) {
return e.col - t.col;
}), ne = 0, ie = oe.length; ne < ie; ne++) {
C = (de = oe[ne]).col, V = de.emptyTiles;
var re = de.emptyCount;
for (W = de.animTiles, X = de.writeRow, F = 0; F < V.length; F++) {
var pe = V[F];
P = !0;
if (!(D = B[X][C])) {
console.log("强制容错为1（幂指数），防止后续逻辑异常: writeRow: " + X + ", col: " + C + " = " + D);
D = 1;
}
var ce, fe = (re - F) * L;
d.row.set(pe.eid, X);
d.animOffsetY.set(pe.eid, fe);
this.setTileValue(pe.eid, D);
d.isNew.set(pe.eid, !0);
void 0 !== (ce = this.tileToGlow.getTargets(pe.eid)[0]) && l.row.set(ce, X);
W.push({
eid: pe.eid,
startOffsetY: fe
});
X--;
}
}
for (var se = 0, ue = U.length; se < ue; se++) {
E = (de = U[se]).colIdx, W = de.animTiles;
for (var de, le = E * f, ye = 0; ye < W.length; ye++) {
var _e = W[ye], me = (j = _e.eid, fe = _e.startOffsetY, le + ye * c);
this.playTileDropBounceAnim(j, fe, me);
var ge = me + M;
ge > x && (x = ge);
}
if (W.length > 0) {
var he = le + a;
this.tween(e, [ [ ae.TweenStepType.Delay, he ], [ ae.TweenStepType.Router, this.dropSoundRouter ] ]);
}
}
_.dropColCount.set(y, 0);
if (P) {
var ve = this.gridDomain.collect()[0];
ve && this.gridDomain.gridData.isDropping.set(ve, !0);
this.tween(e, [ [ ae.TweenStepType.Delay, x ], [ ae.TweenStepType.Router, this.dropCompleteRouter ] ]);
} else this.tween(e, [ [ ae.TweenStepType.Router, this.dropCompleteRouter ] ]);
}
};
var o, n, c, f, s, u, d, l, y, _, m, g, h, v, b, F, G, A, B, T;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileGlowDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tileGlowDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_GridDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "gridDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_DropStart"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "dropStartSignal", void 0);
i([ ae.bindAtom("G5_FBase_DropComplete"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "dropComplete", void 0);
i([ ae.bindAtom("G5_FBase_GetMaxTileValue"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "getMaxTileValue", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G5_FBase_PlayTileDropBounceAnim"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "playTileDropBounceAnim", void 0);
i([ ae.bindAtom("G5_FBase_TweenToGameDropCompleteRouter"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "dropCompleteRouter", void 0);
i([ ae.bindAtom("G5_FBase_TweenToDropSoundRouter"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "dropSoundRouter", void 0);
i([ ae.bindAtom("G5_FBase_TileToGlow"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "tileToGlow", void 0);
i([ ae.bindAtom("G5_FBase_SetTileValueWithPower"), r("design:type", "function" == typeof (v = "undefined" != typeof ae && ae.AtomTypeInfer) ? v : Object) ], t.prototype, "setTileValue", void 0);
i([ ae.bindAtom("G5_FBase_BlockAlgo"), r("design:type", "function" == typeof (b = "undefined" != typeof ae && ae.AtomTypeInfer) ? b : Object) ], t.prototype, "blockAlgo", void 0);
i([ ae.bindAtom("G5_FBase_BuildSpawnPool"), r("design:type", "function" == typeof (F = "undefined" != typeof ae && ae.AtomTypeInfer) ? F : Object) ], t.prototype, "buildSpawnPool", void 0);
i([ ae.bindAtom("G5_FBase_BuildBoardGrid"), r("design:type", "function" == typeof (G = "undefined" != typeof ae && ae.AtomTypeInfer) ? G : Object) ], t.prototype, "buildBoardGrid", void 0);
i([ ae.bindAtom("G5_FBase_SpawnStrategyConfig"), r("design:type", "function" == typeof (A = "undefined" != typeof ae && ae.AtomTypeInfer) ? A : Object) ], t.prototype, "strategyConfig", void 0);
i([ ae.bindAtom("G5_FBase_ParseStrategyWeights"), r("design:type", "function" == typeof (B = "undefined" != typeof ae && ae.AtomTypeInfer) ? B : Object) ], t.prototype, "parseStrategyWeights", void 0);
i([ ae.bindAtom("G5_FBase_AdjustSpawnPool"), r("design:type", "function" == typeof (T = "undefined" != typeof ae && ae.AtomTypeInfer) ? T : Object) ], t.prototype, "adjustSpawnPool", void 0);
return i([ ae.atomClass("G5_FBase_OnDropStart") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnDropStart = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.playSound(this.config.dropSound);
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_DropSound"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "dropSound", void 0);
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "playSound", void 0);
return i([ ae.atomClass("G5_FBase_OnDropSound") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnDropSound = f;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_EliminationAnimConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "eaee5UcK6lH0p4st2L0RFpP", "G5_FBase_EliminationAnimConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_EliminationAnimConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
normal: {
totalDuration: .49,
spineName: "in_1",
fragmentFadeInEnd: .03,
colorChangeStart: .23,
colorChangeEnd: .49,
baseFadeOutEnd: .23,
baseRotation: -45,
glowFadeOutDuration: .03,
moveStart: .23,
moveEnd: .49
},
last: {
totalDuration: .57,
spineName: "in_2",
fragmentFadeInEnd: .03,
colorChangeStart: .23,
colorChangeEnd: .63,
baseFadeOutEnd: .23,
baseRotation: -45,
newTileAppearStart: .33,
newTile1AppearEnd: .5,
newTile2AppearEnd: .5,
newTile2DisappearTime: .53,
newTile2Rotation: -45,
valueFadeOutDuration: .03,
valueAppearStart: .33,
valueAppearEnd: .5,
glowFadeOutDuration: .03
}
};
};
return i([ ae.atomClass("G5_FBase_EliminationAnimConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_EliminationAnimConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_EliminationData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "26405Jlm4dDe7sDTZyMwRlt", "G5_FBase_EliminationData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_EliminationData = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
row: -1,
col: -1,
isLastTile: !1,
x: 0,
y: 0,
targetX: 0,
targetY: 0,
animName: "",
colorR: 255,
colorG: 255,
colorB: 255,
alpha: 1,
angle: 0,
phase: 0
};
};
return i([ ae.atomClass("G5_FBase_EliminationData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_EliminationData = r;
cc._RF.pop();
}, {} ],
G5_FBase_EliminationDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1f765PqmCRJ9YEunTiuU4ZK", "G5_FBase_EliminationDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_EliminationDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_EliminationData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "eliminationData", void 0);
return i([ ae.atomClass("G5_FBase_EliminationDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_EliminationDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_EliminationRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "eebfbeqiOlDVZy/EcEcun6s", "G5_FBase_EliminationRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_EliminationRender = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this.eliminationDomain.eliminationData;
return ae.Spine({
name: "EliminationEffect",
spineUrl: this.config.eliminationSpine,
x: [ function(t) {
return e.x[t];
}, [ e, "x" ] ],
y: [ function(t) {
return e.y[t];
}, [ e, "y" ] ],
anchorX: .5,
anchorY: .5,
zIndex: this.zIndexConfig.elimination,
angle: [ function(t) {
return e.angle[t];
}, [ e, "angle" ] ],
rgb: [ function(t) {
return (255 & Math.round(e.colorR[t])) << 16 | (255 & Math.round(e.colorG[t])) << 8 | 255 & Math.round(e.colorB[t]);
}, [ e, "colorR" ], [ e, "colorG" ], [ e, "colorB" ] ],
animation: {
name: [ function(t) {
return e.animName[t];
}, [ e, "animName" ] ],
loop: !1
}
});
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_EliminationDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "eliminationDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "zIndexConfig", void 0);
return i([ ae.atomClass("G5_FBase_EliminationRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_EliminationRender = p;
cc._RF.pop();
}, {} ],
G5_FBase_EncouragementConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b1d72QVk2pAm4+1JcOCd2sv", "G5_FBase_EncouragementConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_EncouragementConfig = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
words: [ "Good!", "Great!", "Amazing!", "Excellent!", "Unbelievable!" ],
spineUrl: this.url(this.resPathConfig.resPath)("res/spines/gameword/gameplay_word"),
animations: [ "in_good", "in_great", "in_amazing", "in_excellent", "in_unbelievable" ]
};
};
var o;
i([ ae.bindAtom("G5_FBase_ResPathConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "resPathConfig", void 0);
return i([ ae.atomClass("G5_FBase_EncouragementConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_EncouragementConfig = p;
cc._RF.pop();
}, {} ],
G5_FBase_EncouragementHideLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "743d8a/M+REPrOds+xyckkV", "G5_FBase_EncouragementHideLogic");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_EncouragementHideLogic = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
if (e) {
var t = this.gameDomain.gameData;
t.encouragementAnimName.set(e, "");
t.encouragementPlaying.set(e, 0);
}
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_EncouragementAnimComplete"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "encouragementAnimComplete", void 0);
return i([ ae.atomClass("G5_FBase_EncouragementHideLogic") ], t);
}(ae.LogicAtom);
o.G5_FBase_EncouragementHideLogic = p;
cc._RF.pop();
}, {} ],
G5_FBase_EncouragementManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6067fb8cm1AS6l3iu3+XQwm", "G5_FBase_EncouragementManager");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_EncouragementManager = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
if (e) {
var t = this.gameDomain.gameData;
if (!(t.mergeCount[e] < this.config.encouragementThreshold)) {
var o = this.getEncouragement();
t.encouragementAnimName.set(e, o);
t.encouragementPlaying.set(e, 1);
var n = {
in_good: this.config.goodSound,
in_great: this.config.greatSound,
in_amazing: this.config.amazingSound,
in_excellent: this.config.excellentSound,
in_unbelievable: this.config.unbelievableSound
};
this.playSound(n[o]);
}
}
};
var o, n, p, c, f;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_GetEncouragement"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "getEncouragement", void 0);
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "playSound", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_ComboAnimComplete"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "comboAnimComplete", void 0);
return i([ ae.atomClass("G5_FBase_EncouragementManager") ], t);
}(ae.LogicAtom);
o.G5_FBase_EncouragementManager = p;
cc._RF.pop();
}, {} ],
G5_FBase_EngineFeatureColorTestConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fd2c7Z6IkRA6IwpmEQuHyOd", "G5_FBase_EngineFeatureColorTestConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_EngineFeatureColorTestConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
mainBgColor: 16711680
};
};
return i([ ae.atomClass("G5_FBase_EngineFeatureColorTestConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_EngineFeatureColorTestConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_ExitGameLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "899d72po7JKLriGBwhlZoIo", "G5_FBase_ExitGameLogic");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ExitGameLogic = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.audioPlayer.stopMusic();
this.exitRequest.emitToParent();
};
var o, n, p;
i([ ae.onChain, ae.bindAtom("G5_FBase_ExitGame"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "exitGame", void 0);
i([ ae.bindAtom("G_FAtom_ExitRequest"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "exitRequest", void 0);
i([ ae.bindAtom("G_FAtom_AudioPlayer"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "audioPlayer", void 0);
return i([ ae.atomClass("G5_FBase_ExitGameLogic") ], t);
}(ae.LogicAtom);
o.G5_FBase_ExitGameLogic = p;
cc._RF.pop();
}, {} ],
G5_FBase_FillLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8390f8mSU1ItKkmGlS66MUV", "G5_FBase_FillLogic");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_OnFillComplete = o.G5_FBase_OnFillStart = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t = this.tileDomain.tileData, o = this.gameDomain.gameData, n = this.gameDomain.collect()[0];
if (n) {
this.resetTileAnimState();
var a = o.nextTarget[n], i = this.getMaxTileValue(), r = this.buildSpawnPool(i);
if (o.pendingLevelUpValue[n] > 0) {
o.prevMinSpawnValue.set(n, o.minSpawnValue[n]);
o.prevMaxSpawnValue.set(n, o.maxSpawnValue[n]);
}
o.maxValue.set(n, i);
var c = this.config, f = c.initialGoalTarget, s = c.goalTargetMultiplier, u = i < f ? f : i + s;
o.nextTarget.set(n, u);
o.minSpawnValue.set(n, r.minValue);
o.maxSpawnValue.set(n, r.maxValue);
var d = !o.isGuideMode[n] && a > 0 && i >= a && o.gameState[n] !== p.G5_FBase.GameState.GoalDialog;
d && o.pendingGoalValue.set(n, u);
if (o.pendingLevelUpValue[n] > 0) {
o.lowBlocksRemoved.set(n, !1);
this.checkGoalAd();
this.tween(e, [ [ ae.TweenStepType.Router, this.levelUpShowRouter ] ]);
this.syncTileMaxValue(i);
} else {
for (var l = r.minValue, y = !1, _ = this.tileDomain.collect(), m = 0, g = _.length; m < g; m++) {
var h = _[m], v = t.value[h];
if (v > 0 && v < l) {
this.setTileValue(h, 0);
y = !0;
}
}
o.lowBlocksRemoved.set(n, y);
if (!y) if (d) {
var b = o.pendingGoalValue[n];
if (b > 0) {
o.pendingGoalValue.set(n, 0);
this.showGoalDialog(e, b);
}
} else {
o.displayMaxValue.set(n, i);
this.syncTileMaxValue(i);
}
}
}
};
var o, n, c, f, s, u, d, l, y, _, m, g, h, v, b, F;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_GoalDialogDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "goalDialogDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_FillStart"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "fillStart", void 0);
i([ ae.bindAtom("G5_FBase_GetMaxTileValue"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getMaxTileValue", void 0);
i([ ae.bindAtom("G5_FBase_BuildSpawnPool"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "buildSpawnPool", void 0);
i([ ae.bindAtom("G5_FBase_SetTileValueWithPower"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "setTileValue", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "rootDomain", void 0);
i([ ae.bindAtom("G5_FBase_ResetTileAnimState"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "resetTileAnimState", void 0);
i([ ae.bindAtom("G5_FBase_ShowGoalDialog"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "showGoalDialog", void 0);
i([ ae.bindAtom("G5_FBase_ProgressAnimStartRouter"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "progressAnimStartRouter", void 0);
i([ ae.bindAtom("G5_FBase_TweenToLevelUpShowRouter"), r("design:type", "function" == typeof (v = "undefined" != typeof ae && ae.AtomTypeInfer) ? v : Object) ], t.prototype, "levelUpShowRouter", void 0);
i([ ae.bindAtom("G5_FBase_SyncTileMaxValue"), r("design:type", "function" == typeof (b = "undefined" != typeof ae && ae.AtomTypeInfer) ? b : Object) ], t.prototype, "syncTileMaxValue", void 0);
i([ ae.bindAtom("G5_FBase_CheckGoalAd"), r("design:type", "function" == typeof (F = "undefined" != typeof ae && ae.AtomTypeInfer) ? F : Object) ], t.prototype, "checkGoalAd", void 0);
return i([ ae.atomClass("G5_FBase_OnFillStart") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnFillStart = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t = this.gameDomain.gameData, o = this.tileDomain.tileData, n = this.gameDomain.collect()[0];
if (n) {
var a = this.gridDomain.collect()[0];
a && this.gridDomain.gridData.isDropping.set(a, !1);
for (var i = this.tileDomain.collect(), r = 0, c = i.length; r < c; r++) {
var f = i[r];
o.isAnimating.set(f, 0);
o.isNew.set(f, !1);
}
this.saveBoardSnapshot();
if (t.pendingNewGameGoalDialog[n]) {
t.pendingNewGameGoalDialog.set(n, !1);
var s = t.nextTarget[n];
this.showGoalDialog(e, s);
} else if (t.gameState[n] !== p.G5_FBase.GameState.GoalDialog && !(t.pendingLevelUpValue[n] > 0)) {
var u = t.pendingGoalValue[n];
if (u > 0) {
t.pendingGoalValue.set(n, 0);
this.showGoalDialog(e, u);
} else if (this.checkGameOver()) {
console.log("[GameOver] 检测到游戏结束，显示复活界面");
t.gameState.set(n, p.G5_FBase.GameState.RevivePanel);
this.gameInitLogic.runtime.gameState = p.G5_FBase.GameState.RevivePanel;
this.showRevivePanel();
} else {
t.gameState.set(n, p.G5_FBase.GameState.Idle);
this.gameInitLogic.runtime.gameState = p.G5_FBase.GameState.Idle;
}
}
}
};
var o, n, c, f, s, u, d, l, y, _, m;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_GridDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gridDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_RevivePanelDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "revivePanelDomain", void 0);
i([ ae.bindAtom("G5_FBase_GoalDialogDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "goalDialogDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_FillComplete"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "fillComplete", void 0);
i([ ae.bindAtom("G5_FBase_CheckGameOver"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "checkGameOver", void 0);
i([ ae.bindAtom("G5_FBase_SaveBoardSnapshot"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "saveBoardSnapshot", void 0);
i([ ae.bindAtom("G5_FBase_ShowGoalDialog"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "showGoalDialog", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "gameInitLogic", void 0);
i([ ae.bindAtom("G5_FBase_ShowRevivePanelFunction"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "showRevivePanel", void 0);
return i([ ae.atomClass("G5_FBase_OnFillComplete") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnFillComplete = f;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_FormatNumber: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "09cb0d7K5tFjon28l1dY7WF", "G5_FBase_FormatNumber");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_FormatNumber = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n = t > 0 ? Math.pow(2, t) : 0;
if (n <= (null != o ? o : e.config.formatThreshold)) return n.toString();
var a = e.config.numberUnits;
if (n < a.M) return e.floor(n / a.K) + "K";
if (n < a.B) return e.floor(n / a.M) + "M";
if (n < a.letterStart) return e.floor(n / a.B) + "B";
var i = t * Math.log10(2), r = e.floor((i - 12) / 3), p = i - 12 - 3 * r;
return e.floor(Math.pow(10, Math.max(0, p))) + (r < 26 ? String.fromCharCode(97 + r) : String.fromCharCode(97 + Math.floor((r - 26) / 26)) + String.fromCharCode(97 + (r - 26) % 26));
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G_FAtom_MathFloor"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "floor", void 0);
return i([ ae.atomClass("G5_FBase_FormatNumber") ], t);
}(ae.FunctionAtom);
o.G5_FBase_FormatNumber = p;
cc._RF.pop();
}, {} ],
G5_FBase_FrameAssetConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e9b48Z5hs5Da4TkjRjPFw8B", "G5_FBase_FrameAssetConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_FrameAssetConfig = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url(this.resPathConfig.resPath);
return {
frameGoal: e("res/textures/frame_goal"),
frameUp: e("res/textures/frame_up"),
frameDown: e("res/textures/frame_down"),
frame2: e("res/textures/frame2"),
line1: e("res/textures/line1"),
line2: e("res/textures/line2"),
arrow: e("res/textures/arrow"),
bg1: e("res/textures/BG1"),
bg2: e("res/textures/BG2"),
crown: e("res/textures/crown"),
allRes: e("res")
};
};
var o;
i([ ae.bindAtom("G5_FBase_ResPathConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "resPathConfig", void 0);
return i([ ae.atomClass("G5_FBase_FrameAssetConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_FrameAssetConfig = p;
cc._RF.pop();
}, {} ],
G5_FBase_GameConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "68a503Nvx1JzYji3AqtvwB3", "G5_FBase_GameConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, p = this && this.__read || function(e, t) {
var o = "function" == typeof Symbol && e[Symbol.iterator];
if (!o) return e;
var n, a, i = o.call(e), r = [];
try {
for (;(void 0 === t || t-- > 0) && !(n = i.next()).done; ) r.push(n.value);
} catch (e) {
a = {
error: e
};
} finally {
try {
n && !n.done && (o = i.return) && o.call(i);
} finally {
if (a) throw a.error;
}
}
return r;
}, c = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(p(arguments[t]));
return e;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GameConfig = void 0;
var f = e("../../G5_FBase_Namespace"), s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = f.G5_FBase.GridConfig.Rows, t = f.G5_FBase.GridConfig.Cols, o = 136 * t + 18 * (t - 1) + 44, n = 136 * e + 18 * (e - 1) + 44, a = o, i = -o / 2, r = this.url(this.resPathConfig.resPath);
return {
bgColor: 202543,
scoreFontSize: 32,
padding: 22,
panelRadius: 8,
topPadding: 45,
previewToProgressGap: 25,
pauseButtonRight: 20,
progressBarHeight: 24,
tileCardScale: .6,
restartButtonWidth: 70,
restartButtonHeight: 30,
dialogWidth: .9 * o,
dialogHeight: 81.6 * 6,
dialogCardSize: 81.6 * 1.2,
dialogPadding: 28,
tapButtonWidth: .9 * .8 * o,
tapButtonHeight: 50,
soundButton: r("res/audio/s_button"),
soundBackground: r("res/audio/bgm"),
white: r("res/textures/white"),
gridFrame: r("res/textures/frame"),
gridFrameGlow: r("res/textures/frame2"),
gridFramePlus: r("res/textures/frame3"),
frameGoalBg: r("res/textures/frame_goal"),
bgGoalDialog: r("res/textures/BGGoalDialog"),
iconBack: r("res/textures/icon_back"),
iconSettings: r("res/textures/setting"),
arrow: r("res/textures/arrow"),
line1: r("res/textures/line1"),
line2: r("res/textures/line2"),
finger: r("res/textures/finger"),
crown: r("res/textures/crown"),
target: r("res/textures/Target"),
numberFont: r("res/fonts/number"),
spartanBoldFont: r("res/fonts/Spartan-Bold"),
eliminationSpine: r("res/spines/gameplay_elimination"),
comboSpine: r("res/spines/gameplay_combo"),
levelUpTextSpine: r("res/spines/levelUp/gameplay_text"),
levelUpEffectFrontSpine: r("res/spines/levelUp/gameplay_effect_qian"),
levelUpEffectBackSpine: r("res/spines/levelUp/gameplay_effect_hou"),
levelUpFireworkSpine: r("res/spines/levelUp/gameplay_caidai"),
commonBgSettingDown: r("res/textures/common_bg_setting_down"),
commonBgSettingUp: r("res/textures/common_bg_setting_up"),
commonBtnClose: r("res/textures/common_btn_close"),
levelUpContinueBtn: r("res/textures/levelUp/btn_continue"),
levelUpTitleText: r("res/textures/levelUp/level_up_title"),
settingBtnSound: r("res/textures/setting/setting_btn_sound"),
settingBtnBGM: r("res/textures/setting/setting_btn_BGM"),
dropSound: r("res/audio/2248_drop"),
stageSound: r("res/audio/2248_stage"),
levelUpSound: r("res/audio/2248_levelup"),
streakSound: r("res/audio/2248_streak"),
touchSound: r("res/audio/2248_touch"),
goodSound: r("res/audio/good"),
greatSound: r("res/audio/great"),
amazingSound: r("res/audio/amazing"),
excellentSound: r("res/audio/excellent"),
unbelievableSound: r("res/audio/unbelievable"),
settingBtnClose: r("res/textures/setting/common_btn_close"),
settingBgLine: r("res/textures/setting/setting_bg_line"),
settingBtnVibration: r("res/textures/setting/setting_btn_vibration"),
settingBtnOff: r("res/textures/setting/setting_btn_off"),
settingBtnCommon: r("res/textures/setting/setting_btn_common"),
settingIconHome: r("res/textures/setting/setting_icon_home"),
settingIconReplay: r("res/textures/setting/setting_icon_replay"),
settingIconMoreSettings: r("res/textures/setting/setting_icon_moreSettings"),
settingTxtHome: r("res/textures/setting/setting_txt_home"),
settingTxtReplay: r("res/textures/setting/setting_txt_replay"),
settingTxtTitle: r("res/textures/setting/setting_txt_title"),
adFailedText: r("res/textures/ad_failed_text"),
backConfirmPanelBg: r("res/textures/back/account_bg_setting_down"),
backConfirmBtnNo: r("res/textures/back/btn_no"),
backConfirmBtnYes: r("res/textures/back/btn_yes"),
mainBg: r("res/textures/BG1"),
gridBg: r("res/textures/BG2"),
rows: e,
cols: t,
gap: 18,
tileSize: 136,
tileFontSize: 54,
tileFontSizeLen6: 25,
tileFontSizeLen5: 29,
tileFontSizeLen4: 35,
tileFontSizeDefault: 42,
tileFontSizeThreshold6: 6,
tileFontSizeThreshold5: 5,
tileFontSizeThreshold4: 4,
emptyTileColor: 16777215,
gridWidth: o,
gridHeight: n,
gridMaskWidth: 800,
gridMaskHeight: 1262,
gridLeftX: i,
gridTopY: 630,
gridMaskOffsetY: -33,
gridPanelTop: 265.2,
progressAreaY: 645,
gameAreaWidth: a,
adHeight: 150,
triggerRadius: f.G5_FBase.GridConfig.TriggerRadius,
colorsUp: c(this.tileColorConfig.colorsUp),
colorsDown: c(this.tileColorConfig.colorsDown),
colors: c(this.tileColorConfig.colorsDown),
defaultWeights: c(this.spawnConfig.weights),
encouragementWords: c(this.encouragementConfig.words),
encouragementThreshold: 8,
initialGoalTarget: 9,
goalTargetMultiplier: 1,
initialHistoricalMaxValue: 6,
mergeStepDuration: .08,
mergeStaggerDelay: .03,
dropDuration: .26,
dropSquashDuration: .1,
dropSquashOffsetY: -7,
dropBounceDuration: .1,
dropTileDelay: .03,
dropColDelay: .06,
initialDropDuration: .5,
initialRowDelay: .08,
fillDuration: .3,
mergeBounceUpDuration: .15,
mergeBounceDownDuration: .2,
mergeBounceHeight: 80,
mergeMaxScale: 1.4,
formatThreshold: 16383,
numberUnits: {
K: 1e3,
M: 1e6,
B: 1e9,
letterStart: 1e12
}
};
};
var o, n, p, s;
i([ ae.bindAtom("G5_FBase_ResPathConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "resPathConfig", void 0);
i([ ae.bindAtom("G5_FBase_TileColorConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileColorConfig", void 0);
i([ ae.bindAtom("G5_FBase_EncouragementConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "encouragementConfig", void 0);
i([ ae.bindAtom("G5_FBase_SpawnConfig"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "spawnConfig", void 0);
return i([ ae.atomClass("G5_FBase_GameConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_GameConfig = s;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_GameData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ea8cf1eIo5KS7Lxgvv/dS0I", "G5_FBase_GameData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GameData = void 0;
var r = e("../../G5_FBase_Namespace"), p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
score: 0,
bestScore: 0,
gameState: r.G5_FBase.GameState.Idle,
maxValue: 6,
displayMaxValue: 6,
minSpawnValue: 1,
displayMinSpawnValue: 1,
maxSpawnValue: 1,
displayMaxSpawnValue: 1,
prevMinSpawnValue: 1,
prevMaxSpawnValue: 1,
lowBlocksRemoved: !1,
pendingLevelUpValue: 0,
pendingGoalValue: 0,
pendingNewGameGoalDialog: !1,
nextTarget: 7,
displayNextTarget: 7,
isConnecting: !1,
startValue: 0,
lastChainValue: 0,
chainLength: 0,
chainPreviewValue: 0,
mergeResultValue: 0,
mergeScoreGained: 0,
mergeCount: 0,
scoreDelta: 0,
isNewRecord: !1,
encouragementAnimName: "",
encouragementPlaying: 0,
gridRowOffset: 0,
gridColOffset: 0,
renderOffsetX: 0,
renderOffsetY: 0,
effectiveRows: 0,
effectiveCols: 0,
isGuideMode: !1,
uiRootAnchorY: .5,
touchRow: -1,
touchCol: -1,
touchScreenX: 0,
touchScreenY: 0,
dropColOrder0: -1,
dropColOrder1: -1,
dropColOrder2: -1,
dropColOrder3: -1,
dropColOrder4: -1,
dropColCount: 0,
centerTargetScale: 1,
rightTargetScale: 1,
leftTargetScale: 1,
maxSpawnTargetScale: 1,
rightTargetNumAlpha: 1,
leftTargetNumAlpha: 1,
maxSpawnTargetNumAlpha: 1,
historicalMaxValue: 6,
isRestoredFromSnapshot: !1,
lastReportedGameEndId: -1,
gameStartTime: 0,
useRandomSpawn: !1
};
};
return i([ ae.atomClass("G5_FBase_GameData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_GameData = p;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_GameDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e52aaciFVhMSZfZArhoeNcZ", "G5_FBase_GameDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GameDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_GameData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameData", void 0);
return i([ ae.atomClass("G5_FBase_GameDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_GameDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_GameFlowRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2d07fSb1t1ByrnTaduYF0DG", "G5_FBase_GameFlowRouter");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_FillToCompleteFilter = o.G5_FBase_FillToDropFilter = o.G5_FBase_FillToDropRouter = o.G5_FBase_FillToCompleteRouter = o.G5_FBase_FillToGameOverFilter = o.G5_FBase_FillToGameOverRouter = o.G5_FBase_DropToFillRouter = o.G5_FBase_DropStartRouter = o.G5_FBase_MergeToDropRouter = o.G5_FBase_TouchToMergeFilter = o.G5_FBase_TouchToMergeRouter = o.G5_FBase_GameFlowRouter = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_GameFlowRouter") ], t);
}(ae.ConfigAtom);
o.G5_FBase_GameFlowRouter = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_TouchEnd"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "touchEnd", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_MergeStart"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "mergeStart", void 0);
return i([ ae.atomClass("G5_FBase_TouchToMergeRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_TouchToMergeRouter = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
e ? this.gameDomain.gameData.gameState[e] !== p.G5_FBase.GameState.Processing && (this.router.dispatchAction = ae.DispatchAction.Cancel) : this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_TouchToMergeRouter"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_TouchToMergeFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_TouchToMergeFilter = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_MergeComplete"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "mergeComplete", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_DropStart"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "dropStart", void 0);
return i([ ae.atomClass("G5_FBase_MergeToDropRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_MergeToDropRouter = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GameSignals"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameSignals", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_DropStart"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "dropStart", void 0);
return i([ ae.atomClass("G5_FBase_DropStartRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_DropStartRouter = d;
var l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_DropComplete"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "dropComplete", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_FillStart"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "fillStart", void 0);
return i([ ae.atomClass("G5_FBase_DropToFillRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_DropToFillRouter = l;
var y = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_FillComplete"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "fillComplete", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_GameOver"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameOver", void 0);
return i([ ae.atomClass("G5_FBase_FillToGameOverRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_FillToGameOverRouter = y;
var _ = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
e ? this.gameDomain.gameData.gameState[e] !== p.G5_FBase.GameState.GameOver && (this.router.dispatchAction = ae.DispatchAction.Cancel) : this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_FillToGameOverRouter"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_FillToGameOverFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_FillToGameOverFilter = _;
var m = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_FillStart"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "fillStart", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_FillComplete"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "fillComplete", void 0);
return i([ ae.atomClass("G5_FBase_FillToCompleteRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_FillToCompleteRouter = m;
var g = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_FillStart"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "fillStart", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_DropStart"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "dropStart", void 0);
return i([ ae.atomClass("G5_FBase_FillToDropRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_FillToDropRouter = g;
var h = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
e && this.gameDomain.gameData.lowBlocksRemoved[e] || (this.router.dispatchAction = ae.DispatchAction.Cancel);
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_FillToDropRouter"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_FillToDropFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_FillToDropFilter = h;
var v = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
e ? this.gameDomain.gameData.lowBlocksRemoved[e] && (this.router.dispatchAction = ae.DispatchAction.Cancel) : this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_FillToCompleteRouter"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_FillToCompleteFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_FillToCompleteFilter = v;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_GameInitLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "40836acwelPxqg7SYt7+mfn", "G5_FBase_GameInitLogic");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_OnGameInit = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineStorageData = function() {
return {
boardSnapshot: "",
score: 0,
maxValue: 0,
blastCount: 0,
isReplay: !1,
initialBoardSnapshot: "",
reviveShowCount: 0,
rewardAdClickCount: 0,
reviveSuccessCount: 0,
dataVersion: 0
};
};
t.prototype.defineRuntimeData = function() {
return {
gameState: p.G5_FBase.GameState.Idle
};
};
t.prototype.onExecute = function(e, t) {
this.migrateStorageData();
this.setThingEnable(!0);
this.settingLogic.storage.musicVolume > 0 && this.audioPlayer.playMusic(this.config.soundBackground, !0, 1);
if (0 === this.mainBgDomain.count()) {
var o = this.mainBgDomain.create();
this.childOf.addChild(e, o);
this.mainBgDomain.mainBgData.active.set(o, !1);
}
if (0 === this.touchDomain.count()) {
var n = this.touchDomain.create();
this.childOf.addChild(e, n);
}
if (0 === this.uiRootDomain.count()) {
var a = this.uiRootDomain.create();
this.childOf.addChild(e, a);
}
var i = 0 === this.gameDomain.count(), r = i ? this.gameDomain.create() : this.gameDomain.collect()[0];
i && this.childOf.addChild(e, r);
this.loadPersistentToGameData(r);
this.resetGameData(r);
var p = this.gameDomain.gameData, c = Boolean(t.storage.boardSnapshot);
p.isRestoredFromSnapshot.set(r, c);
c && console.log("[GameInit] 检测到盘面快照，标记为恢复模式");
this.initOrResetGrid(r);
this.createRevivePanel();
if (0 === this.goalDialogDomain.count()) {
var f = this.goalDialogDomain.create();
this.childOf.addChild(e, f);
var s = this.goalDialogDomain.goalDialogData;
s.alpha.set(f, 0);
s.scale.set(f, 0);
s.value.set(f, 0);
s.showTap.set(f, !0);
}
if (0 === this.goalAnimDomain.count()) {
var u = this.goalAnimDomain.create();
this.childOf.addChild(e, u);
}
if (0 === this.levelUpDomain.count()) {
var d = this.levelUpDomain.create();
this.childOf.addChild(e, d);
var l = this.levelUpDomain.levelUpData;
l.visible.set(d, !1);
l.panelScale.set(d, 0);
}
};
var o, n, c, f, s, u, d, l, y, _, m, g, h, v, b, F, G, A, B, T, O;
i([ ae.bindAtom("G5_FBase_MainBgDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "mainBgDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_TouchDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "touchDomain", void 0);
i([ ae.bindAtom("G5_FBase_RevivePanelDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "revivePanelDomain", void 0);
i([ ae.bindAtom("G5_FBase_GoalDialogDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "goalDialogDomain", void 0);
i([ ae.bindAtom("G5_FBase_GoalAnimDomain"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "goalAnimDomain", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "levelUpDomain", void 0);
i([ ae.bindAtom("G5_FBase_UIRootDomain"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "uiRootDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_GameInit"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "gameInit", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G5_FBase_ResetGameData"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "resetGameData", void 0);
i([ ae.bindAtom("G5_FBase_InitOrResetGrid"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "initOrResetGrid", void 0);
i([ ae.bindAtom("G5_FBase_PersistentDataLogic"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "persistentDataLogic", void 0);
i([ ae.bindAtom("G5_FBase_LoadPersistentToGameData"), r("design:type", "function" == typeof (v = "undefined" != typeof ae && ae.AtomTypeInfer) ? v : Object) ], t.prototype, "loadPersistentToGameData", void 0);
i([ ae.bindAtom("G_FAtom_AudioPlayer"), r("design:type", "function" == typeof (b = "undefined" != typeof ae && ae.AtomTypeInfer) ? b : Object) ], t.prototype, "audioPlayer", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (F = "undefined" != typeof ae && ae.AtomTypeInfer) ? F : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_OnSettingShow"), r("design:type", "function" == typeof (G = "undefined" != typeof ae && ae.AtomTypeInfer) ? G : Object) ], t.prototype, "settingLogic", void 0);
i([ ae.bindAtom("G_FAtom_SetThinkingDataEnabled"), r("design:type", "function" == typeof (A = "undefined" != typeof ae && ae.AtomTypeInfer) ? A : Object) ], t.prototype, "setThingEnable", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (B = "undefined" != typeof ae && ae.AtomTypeInfer) ? B : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G5_FBase_CreateRevivePanelFunction"), r("design:type", "function" == typeof (T = "undefined" != typeof ae && ae.AtomTypeInfer) ? T : Object) ], t.prototype, "createRevivePanel", void 0);
i([ ae.bindAtom("G5_FBase_MigrateStorageData"), r("design:type", "function" == typeof (O = "undefined" != typeof ae && ae.AtomTypeInfer) ? O : Object) ], t.prototype, "migrateStorageData", void 0);
return i([ ae.atomClass("G5_FBase_OnGameInit") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnGameInit = c;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_GameSignals: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "be1cbCOJatP2LkFAxlq6Jrx", "G5_FBase_GameSignals");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_EncouragementAnimComplete = o.G5_FBase_ComboAnimComplete = o.G5_FBase_DropSound = o.G5_FBase_ExitGame = o.G5_FBase_GoalDialogClose = o.G5_FBase_Revive = o.G5_FBase_ShowEncouragement = o.G5_FBase_NewGame = o.G5_FBase_GameInit = o.G5_FBase_GameOver = o.G5_FBase_ScoreChange = o.G5_FBase_FillComplete = o.G5_FBase_FillStart = o.G5_FBase_DropComplete = o.G5_FBase_DropStart = o.G5_FBase_MergeComplete = o.G5_FBase_MergeStart = o.G5_FBase_GameSignals = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_GameSignals") ], t);
}(ae.SignalAtom);
o.G5_FBase_GameSignals = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_MergeStart") ], t);
}(ae.SignalAtom);
o.G5_FBase_MergeStart = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_MergeComplete") ], t);
}(ae.SignalAtom);
o.G5_FBase_MergeComplete = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_DropStart") ], t);
}(ae.SignalAtom);
o.G5_FBase_DropStart = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_DropComplete") ], t);
}(ae.SignalAtom);
o.G5_FBase_DropComplete = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_FillStart") ], t);
}(ae.SignalAtom);
o.G5_FBase_FillStart = d;
var l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_FillComplete") ], t);
}(ae.SignalAtom);
o.G5_FBase_FillComplete = l;
var y = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_ScoreChange") ], t);
}(ae.SignalAtom);
o.G5_FBase_ScoreChange = y;
var _ = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_GameOver") ], t);
}(ae.SignalAtom);
o.G5_FBase_GameOver = _;
var m = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_GameInit") ], t);
}(ae.SignalAtom);
o.G5_FBase_GameInit = m;
var g = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_NewGame") ], t);
}(ae.SignalAtom);
o.G5_FBase_NewGame = g;
var h = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_ShowEncouragement") ], t);
}(ae.SignalAtom);
o.G5_FBase_ShowEncouragement = h;
var v = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_Revive") ], t);
}(ae.SignalAtom);
o.G5_FBase_Revive = v;
var b = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_GoalDialogClose") ], t);
}(ae.SignalAtom);
o.G5_FBase_GoalDialogClose = b;
var F = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_ExitGame") ], t);
}(ae.SignalAtom);
o.G5_FBase_ExitGame = F;
var G = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_DropSound") ], t);
}(ae.SignalAtom);
o.G5_FBase_DropSound = G;
var A = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_ComboAnimComplete") ], t);
}(ae.SignalAtom);
o.G5_FBase_ComboAnimComplete = A;
var B = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_EncouragementAnimComplete") ], t);
}(ae.SignalAtom);
o.G5_FBase_EncouragementAnimComplete = B;
cc._RF.pop();
}, {} ],
G5_FBase_GameUIRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1c9eeXt0HpI74VvireVNcuo", "G5_FBase_GameUIRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GameUIRender = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = this.gameDomain.gameData, o = this.config, n = o.gridWidth, a = o.gridHeight, i = o.gridPanelTop, r = o.scoreFontSize, p = this.getDesignSize().height / 2 - i - a / 2, c = this.createTileCardNode({
name: "ChainPreviewCard",
scale: .6,
bgColor: [ function(o) {
return e.getColor(t.chainPreviewValue[o]);
}, [ t, "chainPreviewValue" ] ],
color: [ function(o) {
return e.getColorUp(t.chainPreviewValue[o]);
}, [ t, "chainPreviewValue" ] ],
valueText: [ function(o) {
return e.formatNumber(t.chainPreviewValue[o], e.config.formatThreshold);
}, [ t, "chainPreviewValue" ] ],
fontSize: [ function(o) {
return e.calcFontSize(t.chainPreviewValue[o]);
}, [ t, "chainPreviewValue" ] ],
withGlow: !0
});
c.props.active = [ function(e) {
return t.isConnecting[e] && t.chainLength[e] >= 2;
}, [ t, "isConnecting" ], [ t, "chainLength" ] ];
c.props.y = 768;
var f = this.createTileCardNode({
name: "MinSpawnCard",
bgColor: [ function(o) {
return e.getColor(t.displayMinSpawnValue[o]);
}, [ t, "displayMinSpawnValue" ] ],
color: [ function(o) {
return e.getColorUp(t.displayMinSpawnValue[o]);
}, [ t, "displayMinSpawnValue" ] ],
valueText: [ function(o) {
return e.formatNumber(t.displayMinSpawnValue[o], e.config.formatThreshold);
}, [ t, "displayMinSpawnValue" ] ],
fontSize: [ function(o) {
return e.calcFontSize(t.displayMinSpawnValue[o]);
}, [ t, "displayMinSpawnValue" ] ],
withGlow: !0,
withPlus: !0,
scale: [ function(e) {
return .6 * t.leftTargetScale[e];
}, [ t, "leftTargetScale" ] ],
numAlpha: [ function(e) {
return t.leftTargetNumAlpha[e];
}, [ t, "leftTargetNumAlpha" ] ]
});
f.props.x = -335;
var s = ae.Sprite({
name: "arrow",
img: this.config.arrow,
x: -270
}), u = this.createTileCardNode({
name: "MaxSpawnCard",
bgColor: [ function(o) {
return e.getColor(t.displayMaxSpawnValue[o]);
}, [ t, "displayMaxSpawnValue" ] ],
color: [ function(o) {
return e.getColorUp(t.displayMaxSpawnValue[o]);
}, [ t, "displayMaxSpawnValue" ] ],
valueText: [ function(o) {
return e.formatNumber(t.displayMaxSpawnValue[o], e.config.formatThreshold);
}, [ t, "displayMaxSpawnValue" ] ],
fontSize: [ function(o) {
return e.calcFontSize(t.displayMaxSpawnValue[o]);
}, [ t, "displayMaxSpawnValue" ] ],
withGlow: !0,
withPlus: !0,
scale: [ function(e) {
return .6 * t.maxSpawnTargetScale[e];
}, [ t, "maxSpawnTargetScale" ] ],
numAlpha: [ function(e) {
return t.maxSpawnTargetNumAlpha[e];
}, [ t, "maxSpawnTargetNumAlpha" ] ]
});
u.props.x = -205;
var d = this.createTileCardNode({
name: "MaxValueCard",
bgColor: [ function(o) {
return e.getColor(t.displayMaxValue[o]);
}, [ t, "displayMaxValue" ] ],
color: [ function(o) {
return e.getColorUp(t.displayMaxValue[o]);
}, [ t, "displayMaxValue" ] ],
valueText: [ function(o) {
return e.formatNumber(t.displayMaxValue[o], e.config.formatThreshold);
}, [ t, "displayMaxValue" ] ],
fontSize: [ function(o) {
return e.calcFontSize(t.displayMaxValue[o]);
}, [ t, "displayMaxValue" ] ],
scale: [ function(e) {
return .6 * t.centerTargetScale[e];
}, [ t, "centerTargetScale" ] ]
});
d.props.x = 0;
d.children.push(ae.Sprite({
name: "GoalCardSprite",
img: this.config.frameGoalBg,
rgb: 16777215
}, ae.Sprite({
name: "crown",
img: this.config.crown,
scale: .6,
y: 43.47
})));
var l = this.createTileCardNode({
name: "GoalCard",
color: [ function(o) {
return e.getColorUp(t.displayNextTarget[o]);
}, [ t, "displayNextTarget" ] ],
bgColor: [ function(o) {
return e.getColor(t.displayNextTarget[o]);
}, [ t, "displayNextTarget" ] ],
valueText: [ function(o) {
return e.formatNumber(t.displayNextTarget[o], e.config.formatThreshold);
}, [ t, "displayNextTarget" ] ],
fontSize: [ function(o) {
return e.calcFontSize(t.displayNextTarget[o]);
}, [ t, "displayNextTarget" ] ],
withGlow: !0,
scale: [ function(e) {
return .6 * t.rightTargetScale[e];
}, [ t, "rightTargetScale" ] ],
numAlpha: [ function(e) {
return t.rightTargetNumAlpha[e];
}, [ t, "rightTargetNumAlpha" ] ]
});
l.props.x = 335;
var y = ae.Node({
name: "LabelsNode",
y: 58
}, ae.Text({
name: "NewBlocksLabel",
text: "New blocks",
fontSize: 22,
font: this.config.spartanBoldFont,
rgb: 12180735,
x: -270
}), ae.Text({
name: "MaxLabel",
text: "Max",
fontSize: 22,
font: this.config.spartanBoldFont,
rgb: 12180735
}), ae.Text({
name: "TargetLabel",
text: "Target",
fontSize: 22,
font: this.config.spartanBoldFont,
rgb: 12180735,
x: 335,
y: 1.5
})), _ = ae.Node({
name: "ProgressArea",
width: n,
y: this.config.progressAreaY
}, f, s, u, d, l, y), m = ae.Spine({
name: "EncouragementSpine",
zIndex: this.zIndexConfig.encouragement,
spineUrl: this.encouragementConfig.spineUrl,
x: [ function() {
var o = e.gameDomain.collect()[0];
return o ? t.renderOffsetX[o] : 0;
}, [ t, "renderOffsetX" ] ],
y: [ function() {
var o = e.gameDomain.collect()[0], n = o ? t.renderOffsetY[o] : 0;
return p - n;
}, [ t, "renderOffsetY" ] ],
scale: [ function() {
return e.adapterLogic.runtime.extendScale;
}, [ this.adapterLogic, "runtime", "extendScale" ] ],
alpha: [ function(e) {
return t.encouragementPlaying[e] > 0 ? 1 : 0;
}, [ t, "encouragementPlaying" ] ],
animation: {
name: [ function(e) {
return t.encouragementAnimName[e];
}, [ t, "encouragementAnimName" ] ],
loop: !1
},
event: {
complete: this.encouragementAnimCompleteRouter
}
});
return ae.Node({
name: "UIRoot",
widget: {
alignMode: ae.WidgetAlignMode.Always,
isAlignTop: !0,
top: 0,
isAlignBottom: !0,
bottom: 0,
isAlignLeft: !0,
left: 0,
isAlignRight: !0,
right: 0
}
}, ae.Node({
name: "TopContent",
y: [ function() {
return e.adapterLogic.runtime.targetUIOffsetY + e.adapterLogic.runtime.extendHeight / 2;
}, [ this.adapterLogic, "runtime", "targetUIOffsetY" ], [ this.adapterLogic, "runtime", "extendHeight" ] ],
active: [ function(e) {
return !t.isGuideMode[e];
}, [ t, "isGuideMode" ] ]
}, ae.Node({
name: "BackButtonNode",
x: -406.492,
y: 768,
width: 100,
height: 100,
button: {
enabled: !0,
interactable: !0,
transition: ae.ButtonTransition.Scale
},
event: {
buttonClick: this.backButtonRouter
}
}, ae.Sprite({
name: "BackButton",
img: this.config.iconBack
})), ae.Node({
name: "SettingsButtonNode",
x: 389.445,
y: 768,
width: 100,
height: 100,
button: {
enabled: !0,
interactable: !0,
transition: ae.ButtonTransition.Scale
},
event: {
buttonClick: this.openSettingsDialog
}
}, ae.Sprite({
name: "SettingsButton",
img: this.config.iconSettings
})), ae.Text({
name: "ScoreText",
y: 768,
text: [ function(e) {
var o = t.score[e];
if (o < 1e3) return String(o);
for (var n = ""; o >= 1e3; ) {
var a = o % 1e3;
n = "," + (a < 10 ? "00" : a < 100 ? "0" : "") + a + n;
o = o / 1e3 | 0;
}
return o + n;
}, [ t, "score" ] ],
font: this.config.numberFont,
fontSize: 1.5 * r,
rgb: 16777215,
enableBold: !0,
active: [ function(t) {
return e.isScoreActive(t);
}, [ t, "isConnecting" ], [ t, "chainLength" ] ]
}), c, _), m);
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p, c, f, s, u, d, l, y, _, m, g, h, v, b, F, G;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_FormatNumber"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "formatNumber", void 0);
i([ ae.bindAtom("G5_FBase_GetColor"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getColor", void 0);
i([ ae.bindAtom("G5_FBase_CreateTileCardNode"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "createTileCardNode", void 0);
i([ ae.bindAtom("G5_FBase_CreateFullScreenWidget"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "createFullScreenWidget", void 0);
i([ ae.bindAtom("G5_FBase_NoThanksButtonRouter"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "restartButtonRouter", void 0);
i([ ae.bindAtom("G5_FBase_BackButtonRouter"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "backButtonRouter", void 0);
i([ ae.bindAtom("G5_FBase_EncouragementConfig"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "encouragementConfig", void 0);
i([ ae.bindAtom("G5_FBase_EncouragementAnimCompleteRouter"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "encouragementAnimCompleteRouter", void 0);
i([ ae.bindAtom("G5_FBase_SettingOpenRouter"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "openSettingsDialog", void 0);
i([ ae.bindAtom("G_FAtom_GetDesignSize"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "getDesignSize", void 0);
i([ ae.bindAtom("G5_FBase_GetColorUp"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "getColorUp", void 0);
i([ ae.bindAtom("G5_FBase_CalcFringeAdaptation"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "calcFringeAdaptation", void 0);
i([ ae.bindAtom("G5_FBase_CalcFontSize"), r("design:type", "function" == typeof (v = "undefined" != typeof ae && ae.AtomTypeInfer) ? v : Object) ], t.prototype, "calcFontSize", void 0);
i([ ae.bindAtom("G5_FBase_AdapterLogic"), r("design:type", "function" == typeof (b = "undefined" != typeof ae && ae.AtomTypeInfer) ? b : Object) ], t.prototype, "adapterLogic", void 0);
i([ ae.bindAtom("G5_FBase_IsScoreActive"), r("design:type", "function" == typeof (F = "undefined" != typeof ae && ae.AtomTypeInfer) ? F : Object) ], t.prototype, "isScoreActive", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (G = "undefined" != typeof ae && ae.AtomTypeInfer) ? G : Object) ], t.prototype, "zIndexConfig", void 0);
return i([ ae.atomClass("G5_FBase_GameUIRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_GameUIRender = p;
cc._RF.pop();
}, {} ],
G5_FBase_GetColorUp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "812ae1OhZpLzK+rZjlFTeWD", "G5_FBase_GetColorUp");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GetColorUp = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
if (t <= 0) return e.config.emptyTileColor;
var o = e.config.colorsUp.length, n = ((t - 1) % o + o) % o;
return e.config.colorsUp[n];
};
};
var o;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
return i([ ae.atomClass("G5_FBase_GetColorUp") ], t);
}(ae.FunctionAtom);
o.G5_FBase_GetColorUp = p;
cc._RF.pop();
}, {} ],
G5_FBase_GetColor: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a6b12ewbbJJdZvzOlH5oNX4", "G5_FBase_GetColor");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GetColor = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
if (t <= 0) return e.config.emptyTileColor;
var o = e.config.colors.length, n = ((t - 1) % o + o) % o;
return e.config.colors[n];
};
};
var o;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
return i([ ae.atomClass("G5_FBase_GetColor") ], t);
}(ae.FunctionAtom);
o.G5_FBase_GetColor = p;
cc._RF.pop();
}, {} ],
G5_FBase_GetEncouragement: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1bfc0IyUKlJC5rg0rJgd3X8", "G5_FBase_GetEncouragement");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GetEncouragement = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.encouragementConfig.animations;
return t[e.floor(e.random(0, 1) * t.length)];
};
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_EncouragementConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "encouragementConfig", void 0);
i([ ae.bindAtom("G_FAtom_MathFloor"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "floor", void 0);
i([ ae.bindAtom("G_FAtom_MathRandom"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "random", void 0);
return i([ ae.atomClass("G5_FBase_GetEncouragement") ], t);
}(ae.FunctionAtom);
o.G5_FBase_GetEncouragement = p;
cc._RF.pop();
}, {} ],
G5_FBase_GetMaxTileValue: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e85fbKon3dFhZa5K+f6mB+S", "G5_FBase_GetMaxTileValue");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GetMaxTileValue = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
for (var t = e.tileDomain.tileData, o = 0, n = e.tileDomain.collect(), a = 0, i = n.length; a < i; a++) {
var r = n[a], p = t.value[r];
p > o && (o = p);
}
return o;
};
};
var o;
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
return i([ ae.atomClass("G5_FBase_GetMaxTileValue") ], t);
}(ae.FunctionAtom);
o.G5_FBase_GetMaxTileValue = p;
cc._RF.pop();
}, {} ],
G5_FBase_GetRenderOffset: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d8423JL9sFKUq1Z2alsZ25I", "G5_FBase_GetRenderOffset");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GetRenderOffset = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.gameDomain.collect()[0];
if (!t) {
console.log("[GetRenderOffset] 未找到游戏实体，返回零偏移");
return {
offsetX: 0,
offsetY: 0
};
}
var o = e.gameDomain.gameData, n = o.renderOffsetX[t] || 0, a = o.renderOffsetY[t] || 0;
console.log("[GetRenderOffset] 获取渲染偏移", {
gameEid: t,
offsetX: n,
offsetY: a
});
return {
offsetX: n,
offsetY: a
};
};
};
var o;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
return i([ ae.atomClass("G5_FBase_GetRenderOffset") ], t);
}(ae.FunctionAtom);
o.G5_FBase_GetRenderOffset = p;
cc._RF.pop();
}, {} ],
G5_FBase_GetTileValue: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "181f5q2FadMzaBW0IlAiEKp", "G5_FBase_GetTileValue");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GetTileValue = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
for (var n = e.tileDomain.tileData, a = e.tileDomain.collect(), i = 0, r = a.length; i < r; i++) {
var p = a[i];
if (n.row[p] === t && n.col[p] === o) return n.value[p];
}
return 0;
};
};
var o;
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
return i([ ae.atomClass("G5_FBase_GetTileValue") ], t);
}(ae.FunctionAtom);
o.G5_FBase_GetTileValue = p;
cc._RF.pop();
}, {} ],
G5_FBase_GetWeightedRandom: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2a904jtlehKDJKoXJQKVcJG", "G5_FBase_GetWeightedRandom");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GetWeightedRandom = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
for (var n, a = null != o ? o : e.config.defaultWeights, i = [], r = 0; r < t.length; r++) for (var p = t[r], c = null !== (n = a[r]) && void 0 !== n ? n : 10, f = 0; f < c; f++) i.push(p);
return 0 === i.length ? t[e.floor(e.random(0, 1) * t.length)] : i[e.floor(e.random(0, 1) * i.length)];
};
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G_FAtom_MathFloor"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "floor", void 0);
i([ ae.bindAtom("G_FAtom_MathRandom"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "random", void 0);
return i([ ae.atomClass("G5_FBase_GetWeightedRandom") ], t);
}(ae.FunctionAtom);
o.G5_FBase_GetWeightedRandom = p;
cc._RF.pop();
}, {} ],
G5_FBase_GoalAnimConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "18210y8KuxCl7HLZ7uceJjY", "G5_FBase_GoalAnimConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GoalAnimConfig = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
spineUrl: this.url(this.resPathConfig.resPath)("res/spines/gameplay_loading"),
houAnimName: "in_hou",
qianAnimName: "in_qian",
liziAnimName: "in_lizi",
tuoweiAnimName: "in_tuowei",
flyStartTime: .13,
flyToCenterEndTime: .63,
flyStartScale: 1.3,
flyCenterScale: .6,
flyToGoalStartTime: .63,
flyToGoalEndTime: .93,
flyEndScale: 1,
flyStartYAdjust: 0,
centerScaleUpStartTime: .63,
centerScaleUpEndTime: .8,
centerScaleUpStart: .6,
centerScaleUpEnd: .7,
centerScaleDownStartTime: .8,
centerScaleDownEndTime: 1.03,
centerScaleDownEnd: .6,
houSpinePlayTime: .63,
qianSpinePlayTime: .63,
centerLiziPlayTime: .63,
rightScaleUpStartTime: .93,
rightScaleUpEndTime: 1.1,
rightScaleUpStart: .6,
rightScaleUpEnd: .7,
rightScaleDown1StartTime: 1.1,
rightScaleDown1EndTime: 1.33,
rightScaleDown1End: .6,
rightScaleDown2StartTime: 1.33,
rightScaleDown2EndTime: 1.33,
rightScaleDown2End: .6,
rightBounceStartTime: 1.33,
rightBounceEndTime: 1.33,
rightBounceEnd: .6,
rightColorStartTime: .93,
rightColorEndTime: 1.16,
rightNumFadeOutStartTime: 1,
rightNumSwitchTime: 1.07,
rightNumFadeInEndTime: 1.13,
rightSpinePlayTime: .93,
rightSpineColorEndTime: 1.16,
tuoweiPlayTime: .63,
totalDuration: 1.33,
rootZIndex: 1100,
spineXAdjust: 5
};
};
var o;
i([ ae.bindAtom("G5_FBase_ResPathConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "resPathConfig", void 0);
return i([ ae.atomClass("G5_FBase_GoalAnimConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_GoalAnimConfig = p;
cc._RF.pop();
}, {} ],
G5_FBase_GoalAnimData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "05a1fTv8qBBDLIzOLRtNPIG", "G5_FBase_GoalAnimData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GoalAnimData = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
progressAnimPlaying: !1,
flyBlockVisible: !1,
flyBlockScale: 1,
flyBlockOffsetX: 0,
flyBlockOffsetY: 0,
flyBlockAlpha: 1,
flyBlockValue: 0,
houSpineAnimName: "",
qianSpineAnimName: "",
centerLiziAnimName: "",
rightTargetColorProgress: 0,
rightTargetOldValue: 0,
rightTargetNewValue: 0,
rightSpineAnimName: "",
rightAnimEnabled: !0,
leftTargetColorProgress: 0,
leftTargetOldValue: 0,
leftTargetNewValue: 0,
leftSpineAnimName: "",
leftAnimEnabled: !0,
maxSpawnColorProgress: 0,
maxSpawnOldValue: 0,
maxSpawnNewValue: 0,
maxSpawnSpineAnimName: "",
maxSpawnAnimEnabled: !0,
tuoweiLeftAnimName: "",
tuoweiRightAnimName: ""
};
};
return i([ ae.atomClass("G5_FBase_GoalAnimData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_GoalAnimData = r;
cc._RF.pop();
}, {} ],
G5_FBase_GoalAnimDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "000057a/IFNHJC2qeSiz5bN", "G5_FBase_GoalAnimDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GoalAnimDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_GoalAnimData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "goalAnimData", void 0);
return i([ ae.atomClass("G5_FBase_GoalAnimDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_GoalAnimDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_GoalAnimLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c7ffdUIvTpMC6VUAQP7sbRZ", "G5_FBase_GoalAnimLogic");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GoalAnimLogic = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
if (e) {
var t = this.gameDomain.gameData, o = this.goalAnimDomain.collect()[0];
if (o) {
var n = this.goalAnimDomain.goalAnimData, a = this.animConfig, i = t.maxValue[e], r = t.nextTarget[e], p = t.minSpawnValue[e], c = n.rightAnimEnabled[o], f = n.leftAnimEnabled[o];
n.houSpineAnimName.set(o, "");
n.qianSpineAnimName.set(o, "");
n.centerLiziAnimName.set(o, "");
n.tuoweiLeftAnimName.set(o, "");
n.tuoweiRightAnimName.set(o, "");
n.rightSpineAnimName.set(o, "");
n.leftSpineAnimName.set(o, "");
n.progressAnimPlaying.set(o, !0);
var s = this.levelUpConfig.panelY + this.levelUpConfig.blockCardY - (this.gameConfig.progressAreaY + this.adapterLogic.runtime.targetUIOffsetY + this.adapterLogic.runtime.extendHeight / 2) + a.flyStartYAdjust;
n.flyBlockVisible.set(o, !0);
n.flyBlockValue.set(o, i);
n.flyBlockScale.set(o, a.flyStartScale);
n.flyBlockOffsetX.set(o, 0);
n.flyBlockOffsetY.set(o, s);
n.flyBlockAlpha.set(o, 1);
if (c) {
t.rightTargetNumAlpha.set(e, 1);
n.rightTargetColorProgress.set(o, 0);
n.rightTargetOldValue.set(o, r);
n.rightTargetNewValue.set(o, i + 1);
}
if (f) {
t.leftTargetNumAlpha.set(e, 1);
n.leftTargetColorProgress.set(o, 0);
var u = t.prevMinSpawnValue[e];
n.leftTargetOldValue.set(o, u);
n.leftTargetNewValue.set(o, p);
}
var d = n.maxSpawnAnimEnabled[o];
if (d) {
t.maxSpawnTargetNumAlpha.set(e, 1);
n.maxSpawnColorProgress.set(o, 0);
var l = t.prevMaxSpawnValue[e], y = t.maxSpawnValue[e];
n.maxSpawnOldValue.set(o, l);
n.maxSpawnNewValue.set(o, y);
}
var _ = a.flyToCenterEndTime - a.flyStartTime, m = a.centerScaleUpEndTime - a.centerScaleUpStartTime, g = a.centerScaleDownEndTime - a.centerScaleDownStartTime;
this.tween(o, [ [ ae.TweenStepType.Delay, a.flyStartTime ], [ ae.TweenStepType.To, n, {
flyBlockOffsetY: 0,
flyBlockScale: a.flyCenterScale
}, _, ae.TweenEasing.QuadIn ], [ ae.TweenStepType.To, n, {
flyBlockVisible: !1,
flyBlockAlpha: 0
}, 0 ] ]);
var h = Number(a.centerScaleUpEnd) / Number(a.centerScaleDownEnd);
this.tween(e, [ [ ae.TweenStepType.Delay, a.centerScaleUpStartTime ], [ ae.TweenStepType.To, t, {
centerTargetScale: h
}, m, ae.TweenEasing.CubicOut ], [ ae.TweenStepType.To, t, {
centerTargetScale: 1
}, g, ae.TweenEasing.CubicIn ], [ ae.TweenStepType.To, t, {
displayMaxValue: i
}, 0 ] ]);
this.tween(o, [ [ ae.TweenStepType.Delay, a.centerScaleUpStartTime ], [ ae.TweenStepType.To, n, {
houSpineAnimName: a.houAnimName,
qianSpineAnimName: a.qianAnimName,
centerLiziAnimName: a.liziAnimName,
tuoweiLeftAnimName: f ? a.tuoweiAnimName : "",
tuoweiRightAnimName: c ? a.tuoweiAnimName : ""
}, 0 ] ]);
var v = Number(a.rightScaleUpEnd) / Number(a.rightScaleDown1End);
if (c) {
var b = a.rightScaleUpEndTime - a.rightScaleUpStartTime, F = a.rightScaleDown1EndTime - a.rightScaleDown1StartTime;
this.tween(e, [ [ ae.TweenStepType.Delay, a.rightScaleUpStartTime ], [ ae.TweenStepType.To, t, {
rightTargetScale: v
}, b, ae.TweenEasing.CubicOut ], [ ae.TweenStepType.To, t, {
rightTargetScale: 1
}, F, ae.TweenEasing.CubicIn ] ]);
this.tween(o, [ [ ae.TweenStepType.Delay, a.rightScaleUpStartTime ], [ ae.TweenStepType.To, n, {
rightSpineAnimName: a.liziAnimName
}, 0 ] ]);
var G = a.rightColorEndTime - a.rightColorStartTime;
this.tween(o, [ [ ae.TweenStepType.Delay, a.rightColorStartTime ], [ ae.TweenStepType.To, n, {
rightTargetColorProgress: 1
}, G, ae.TweenEasing.Linear ] ]);
var A = a.rightNumSwitchTime - a.rightNumFadeOutStartTime, B = a.rightNumFadeInEndTime - a.rightNumSwitchTime, T = i + 1;
this.tween(e, [ [ ae.TweenStepType.Delay, a.rightNumFadeOutStartTime ], [ ae.TweenStepType.To, t, {
rightTargetNumAlpha: 0
}, A, ae.TweenEasing.Linear ], [ ae.TweenStepType.To, t, {
displayNextTarget: T
}, 0 ], [ ae.TweenStepType.To, t, {
rightTargetNumAlpha: 1
}, B, ae.TweenEasing.Linear ] ]);
}
if (f) {
var O = a.rightScaleUpEndTime - a.rightScaleUpStartTime, R = a.rightScaleDown1EndTime - a.rightScaleDown1StartTime;
this.tween(e, [ [ ae.TweenStepType.Delay, a.rightScaleUpStartTime ], [ ae.TweenStepType.To, t, {
leftTargetScale: v
}, O, ae.TweenEasing.CubicOut ], [ ae.TweenStepType.To, t, {
leftTargetScale: 1
}, R, ae.TweenEasing.CubicIn ] ]);
this.tween(o, [ [ ae.TweenStepType.Delay, a.rightScaleUpStartTime ], [ ae.TweenStepType.To, n, {
leftSpineAnimName: a.liziAnimName
}, 0 ] ]);
var j = a.rightColorEndTime - a.rightColorStartTime;
this.tween(o, [ [ ae.TweenStepType.Delay, a.rightColorStartTime ], [ ae.TweenStepType.To, n, {
leftTargetColorProgress: 1
}, j, ae.TweenEasing.Linear ] ]);
var C = a.rightNumSwitchTime - a.rightNumFadeOutStartTime, S = a.rightNumFadeInEndTime - a.rightNumSwitchTime;
this.tween(e, [ [ ae.TweenStepType.Delay, a.rightNumFadeOutStartTime ], [ ae.TweenStepType.To, t, {
leftTargetNumAlpha: 0
}, C, ae.TweenEasing.Linear ], [ ae.TweenStepType.To, t, {
displayMinSpawnValue: p
}, 0 ], [ ae.TweenStepType.To, t, {
leftTargetNumAlpha: 1
}, S, ae.TweenEasing.Linear ] ]);
}
if (d) {
var D = a.rightScaleUpEndTime - a.rightScaleUpStartTime, w = a.rightScaleDown1EndTime - a.rightScaleDown1StartTime;
this.tween(e, [ [ ae.TweenStepType.Delay, a.rightScaleUpStartTime ], [ ae.TweenStepType.To, t, {
maxSpawnTargetScale: v
}, D, ae.TweenEasing.CubicOut ], [ ae.TweenStepType.To, t, {
maxSpawnTargetScale: 1
}, w, ae.TweenEasing.CubicIn ] ]);
this.tween(o, [ [ ae.TweenStepType.Delay, a.rightScaleUpStartTime ], [ ae.TweenStepType.To, n, {
maxSpawnSpineAnimName: a.liziAnimName
}, 0 ] ]);
var I = a.rightColorEndTime - a.rightColorStartTime;
this.tween(o, [ [ ae.TweenStepType.Delay, a.rightColorStartTime ], [ ae.TweenStepType.To, n, {
maxSpawnColorProgress: 1
}, I, ae.TweenEasing.Linear ] ]);
var P = a.rightNumSwitchTime - a.rightNumFadeOutStartTime, x = a.rightNumFadeInEndTime - a.rightNumSwitchTime, L = t.maxSpawnValue[e];
this.tween(e, [ [ ae.TweenStepType.Delay, a.rightNumFadeOutStartTime ], [ ae.TweenStepType.To, t, {
maxSpawnTargetNumAlpha: 0
}, P, ae.TweenEasing.Linear ], [ ae.TweenStepType.To, t, {
displayMaxSpawnValue: L
}, 0 ], [ ae.TweenStepType.To, t, {
maxSpawnTargetNumAlpha: 1
}, x, ae.TweenEasing.Linear ] ]);
}
this.tween(o, [ [ ae.TweenStepType.Delay, a.totalDuration ], [ ae.TweenStepType.To, n, {
progressAnimPlaying: !1,
flyBlockVisible: !1,
houSpineAnimName: "",
qianSpineAnimName: "",
centerLiziAnimName: "",
rightSpineAnimName: "",
leftSpineAnimName: "",
maxSpawnSpineAnimName: "",
tuoweiLeftAnimName: "",
tuoweiRightAnimName: "",
rightTargetColorProgress: 0,
leftTargetColorProgress: 0,
maxSpawnColorProgress: 0
}, 0 ] ]);
var M = t.maxSpawnValue[e];
this.tween(e, [ [ ae.TweenStepType.Delay, a.totalDuration ], [ ae.TweenStepType.To, t, {
centerTargetScale: 1,
rightTargetScale: 1,
leftTargetScale: 1,
maxSpawnTargetScale: 1,
rightTargetNumAlpha: 1,
leftTargetNumAlpha: 1,
maxSpawnTargetNumAlpha: 1,
displayMaxSpawnValue: M,
displayMinSpawnValue: p,
displayNextTarget: i + 1
}, 0 ], [ ae.TweenStepType.Router, this.progressAnimCompleteRouter ] ]);
}
}
};
var o, n, p, c, f, s, u, d, l;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_GoalAnimDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "goalAnimDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "gameConfig", void 0);
i([ ae.bindAtom("G5_FBase_GoalAnimConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "animConfig", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpConfig"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "levelUpConfig", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G5_FBase_AdapterLogic"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "adapterLogic", void 0);
i([ ae.bindAtom("G5_FBase_ProgressAnimCompleteRouter"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "progressAnimCompleteRouter", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_ProgressAnimStart"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "progressAnimStart", void 0);
return i([ ae.atomClass("G5_FBase_GoalAnimLogic") ], t);
}(ae.LogicAtom);
o.G5_FBase_GoalAnimLogic = p;
cc._RF.pop();
}, {} ],
G5_FBase_GoalAnimRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b38ecZvC2pID4UOTGGJHfQ3", "G5_FBase_GoalAnimRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GoalAnimRender = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = this.goalAnimDomain.goalAnimData, o = this.config, n = o.gridWidth, a = o.tileSize, i = o.tileCardScale, r = o.gap, p = o.formatThreshold, c = a * i, f = this.config.progressAreaY;
return ae.Node({
name: "GoalAnimRoot",
zIndex: this.animConfig.rootZIndex,
y: [ function() {
var t = e.adapterLogic.runtime.targetUIOffsetY, o = e.adapterLogic.runtime.extendHeight;
return f + t + o / 2;
}, [ this.adapterLogic, "runtime", "targetUIOffsetY" ], [ this.adapterLogic, "runtime", "extendHeight" ] ],
width: n,
height: c,
active: [ function(e) {
return t.progressAnimPlaying[e];
}, [ t, "progressAnimPlaying" ] ]
}, ae.Spine({
name: "TuoweiLeftSpine",
spineUrl: this.animConfig.spineUrl,
anchorX: .5,
anchorY: .5,
zIndex: -2,
active: [ function(e) {
return Boolean(t.tuoweiLeftAnimName[e]);
}, [ t, "tuoweiLeftAnimName" ] ],
rgb: [ function(o) {
return e.getColor(t.flyBlockValue[o]);
}, [ t, "flyBlockValue" ] ],
animation: {
name: [ function(e) {
return t.tuoweiLeftAnimName[e];
}, [ t, "tuoweiLeftAnimName" ] ],
loop: !1
}
}), ae.Spine({
name: "TuoweiRightSpine",
spineUrl: this.animConfig.spineUrl,
anchorX: .5,
anchorY: .5,
scaleX: -1,
zIndex: -2,
active: [ function(e) {
return Boolean(t.tuoweiRightAnimName[e]);
}, [ t, "tuoweiRightAnimName" ] ],
rgb: [ function(o) {
return e.getColor(t.flyBlockValue[o]);
}, [ t, "flyBlockValue" ] ],
animation: {
name: [ function(e) {
return t.tuoweiRightAnimName[e];
}, [ t, "tuoweiRightAnimName" ] ],
loop: !1
}
}), ae.Spine({
name: "CenterHouSpine",
spineUrl: this.animConfig.spineUrl,
anchorX: .5,
anchorY: .5,
zIndex: -1,
active: [ function(e) {
return Boolean(t.houSpineAnimName[e]);
}, [ t, "houSpineAnimName" ] ],
rgb: [ function(o) {
return e.getColor(t.flyBlockValue[o]);
}, [ t, "flyBlockValue" ] ],
animation: {
name: [ function(e) {
return t.houSpineAnimName[e];
}, [ t, "houSpineAnimName" ] ],
loop: !1
}
}), ae.Spine({
name: "CenterQianSpine",
spineUrl: this.animConfig.spineUrl,
anchorX: .5,
anchorY: .5,
zIndex: 1,
active: [ function(e) {
return Boolean(t.qianSpineAnimName[e]);
}, [ t, "qianSpineAnimName" ] ],
animation: {
name: [ function(e) {
return t.qianSpineAnimName[e];
}, [ t, "qianSpineAnimName" ] ],
loop: !1
}
}), ae.Spine({
name: "CenterLiziSpine",
spineUrl: this.animConfig.spineUrl,
anchorX: .5,
anchorY: .5,
zIndex: 2,
active: [ function(e) {
return Boolean(t.centerLiziAnimName[e]);
}, [ t, "centerLiziAnimName" ] ],
rgb: [ function(o) {
return e.getColor(t.flyBlockValue[o]);
}, [ t, "flyBlockValue" ] ],
animation: {
name: [ function(e) {
return t.centerLiziAnimName[e];
}, [ t, "centerLiziAnimName" ] ],
loop: !1
}
}), ae.Node({
name: "FlyBlock",
x: [ function(e) {
return t.flyBlockOffsetX[e];
}, [ t, "flyBlockOffsetX" ] ],
y: [ function(e) {
return t.flyBlockOffsetY[e];
}, [ t, "flyBlockOffsetY" ] ],
scale: [ function(e) {
return t.flyBlockScale[e];
}, [ t, "flyBlockScale" ] ],
alpha: [ function(e) {
return t.flyBlockAlpha[e];
}, [ t, "flyBlockAlpha" ] ],
active: [ function(e) {
return t.flyBlockVisible[e];
}, [ t, "flyBlockVisible" ] ],
zIndex: 10
}, ae.Sprite({
name: "FlyBlockFrameDown",
img: this.frameAsset.frameDown,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: this.levelUpConfig.blockCardSize,
height: this.levelUpConfig.blockCardSize,
rgb: [ function(o) {
return e.getColor(t.flyBlockValue[o]);
}, [ t, "flyBlockValue" ] ]
}), ae.Sprite({
name: "FlyBlockFrameUp",
img: this.frameAsset.frameUp,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: this.levelUpConfig.blockInnerWidth,
height: this.levelUpConfig.blockInnerHeight,
rgb: [ function(o) {
return e.getColorUp(t.flyBlockValue[o]);
}, [ t, "flyBlockValue" ] ]
}), ae.Sprite({
name: "FlyBlockFrameGoal",
img: this.config.frameGoalBg
}), ae.Sprite({
name: "FlyBlockCrown",
img: this.config.crown,
y: this.levelUpConfig.crownY,
anchorY: 0,
scale: this.levelUpConfig.crownScale
}), ae.Text({
name: "FlyBlockValue",
text: [ function(o) {
return e.formatNumber(t.flyBlockValue[o], p);
}, [ t, "flyBlockValue" ] ],
font: this.config.numberFont,
fontSize: [ function(o) {
return e.calcFontSize(t.flyBlockValue[o]);
}, [ t, "flyBlockValue" ] ],
rgb: 16777215,
enableBold: !0,
horizontalAlign: ae.TextHorizontalAlign.CENTER
})), ae.Spine({
name: "RightLiziSpine",
spineUrl: this.animConfig.spineUrl,
anchorX: .5,
anchorY: .5,
x: n / 2 - r - this.animConfig.spineXAdjust - c / 2,
active: [ function(e) {
return Boolean(t.rightSpineAnimName[e]);
}, [ t, "rightSpineAnimName" ] ],
rgb: [ function(o) {
var n = e.getColor(t.rightTargetOldValue[o]), a = e.getColor(t.rightTargetNewValue[o]), i = t.rightTargetColorProgress[o];
return e.lerpColor(n, a, i);
}, [ t, "rightTargetOldValue" ], [ t, "rightTargetNewValue" ], [ t, "rightTargetColorProgress" ] ],
animation: {
name: [ function(e) {
return t.rightSpineAnimName[e];
}, [ t, "rightSpineAnimName" ] ],
loop: !1
}
}), ae.Spine({
name: "LeftLiziSpine",
spineUrl: this.animConfig.spineUrl,
anchorX: .5,
anchorY: .5,
x: -n / 2 + r + this.animConfig.spineXAdjust + c / 2,
active: [ function(e) {
return Boolean(t.leftSpineAnimName[e]);
}, [ t, "leftSpineAnimName" ] ],
rgb: [ function(o) {
var n = e.getColor(t.leftTargetOldValue[o]), a = e.getColor(t.leftTargetNewValue[o]), i = t.leftTargetColorProgress[o];
return e.lerpColor(n, a, i);
}, [ t, "leftTargetOldValue" ], [ t, "leftTargetNewValue" ], [ t, "leftTargetColorProgress" ] ],
animation: {
name: [ function(e) {
return t.leftSpineAnimName[e];
}, [ t, "leftSpineAnimName" ] ],
loop: !1
}
}), ae.Spine({
name: "MaxSpawnLiziSpine",
spineUrl: this.animConfig.spineUrl,
anchorX: .5,
anchorY: .5,
x: -205,
active: [ function(e) {
return Boolean(t.maxSpawnSpineAnimName[e]);
}, [ t, "maxSpawnSpineAnimName" ] ],
rgb: [ function(o) {
var n = e.getColor(t.maxSpawnOldValue[o]), a = e.getColor(t.maxSpawnNewValue[o]), i = t.maxSpawnColorProgress[o];
return e.lerpColor(n, a, i);
}, [ t, "maxSpawnOldValue" ], [ t, "maxSpawnNewValue" ], [ t, "maxSpawnColorProgress" ] ],
animation: {
name: [ function(e) {
return t.maxSpawnSpineAnimName[e];
}, [ t, "maxSpawnSpineAnimName" ] ],
loop: !1
}
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p, c, f, s, u, d, l, y, _, m;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_GoalAnimDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "goalAnimDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_GoalAnimConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "animConfig", void 0);
i([ ae.bindAtom("G5_FBase_FormatNumber"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "formatNumber", void 0);
i([ ae.bindAtom("G5_FBase_GetColor"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getColor", void 0);
i([ ae.bindAtom("G5_FBase_GetColorUp"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "getColorUp", void 0);
i([ ae.bindAtom("G5_FBase_FrameAssetConfig"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "frameAsset", void 0);
i([ ae.bindAtom("G5_FBase_LerpColor"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "lerpColor", void 0);
i([ ae.bindAtom("G_FAtom_GetDesignSize"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "getDesignSize", void 0);
i([ ae.bindAtom("G5_FBase_AdapterLogic"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "adapterLogic", void 0);
i([ ae.bindAtom("G5_FBase_CalcFontSize"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "calcFontSize", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpConfig"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "levelUpConfig", void 0);
return i([ ae.atomClass("G5_FBase_GoalAnimRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_GoalAnimRender = p;
cc._RF.pop();
}, {} ],
G5_FBase_GoalDialogData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e1500hA8nZCo6MUetXO45Di", "G5_FBase_GoalDialogData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GoalDialogData = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
alpha: 0,
value: 0,
scale: 0,
showTap: !1,
tapScale: 1
};
};
return i([ ae.atomClass("G5_FBase_GoalDialogData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_GoalDialogData = r;
cc._RF.pop();
}, {} ],
G5_FBase_GoalDialogDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "738d56339JG54RyYJ7T+2wG", "G5_FBase_GoalDialogDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GoalDialogDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_GoalDialogData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "goalDialogData", void 0);
return i([ ae.atomClass("G5_FBase_GoalDialogDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_GoalDialogDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_GoalDialogManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3af62CufppJAb+NBnibgzCA", "G5_FBase_GoalDialogManager");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GoalDialogManager = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
if (e) {
var t = this.gameDomain.gameData, o = this.goalDialogDomain.collect()[0];
if (o) {
var n = this.goalDialogDomain.goalDialogData;
if (t.gameState[e] === p.G5_FBase.GameState.GoalDialog) {
n.showTap.set(o, !1);
this.stopTween(o, "tapBreath");
n.tapScale.set(o, 1);
this.tween(o, [ [ ae.TweenStepType.To, n, {
alpha: 0
}, .3 ], [ ae.TweenStepType.To, n, {
value: 0,
scale: 1,
tapScale: 1
}, 0 ] ]);
if (this.checkGameOver()) {
console.log("[GoalDialog] 目标弹窗关闭后检测到游戏结束，显示复活界面");
t.gameState.set(e, p.G5_FBase.GameState.RevivePanel);
this.gameInitLogic.runtime.gameState = p.G5_FBase.GameState.RevivePanel;
this.showRevivePanel();
} else {
t.gameState.set(e, p.G5_FBase.GameState.Idle);
this.gameInitLogic.runtime.gameState = p.G5_FBase.GameState.Idle;
}
}
}
}
};
var o, n, c, f, s, u, d, l, y;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_GoalDialogDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "goalDialogDomain", void 0);
i([ ae.bindAtom("G5_FBase_CheckGameOver"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "checkGameOver", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_StopTween"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "stopTween", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_GoalDialogClose"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "goalDialogClose", void 0);
i([ ae.bindAtom("G5_FBase_TraceReviveUIShow"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "traceReviveUIShow", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "gameInitLogic", void 0);
i([ ae.bindAtom("G5_FBase_ShowRevivePanelFunction"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "showRevivePanel", void 0);
return i([ ae.atomClass("G5_FBase_GoalDialogManager") ], t);
}(ae.LogicAtom);
o.G5_FBase_GoalDialogManager = c;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_GoalDialogRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ef5b8pwOwhDqY1VzBfBvn1b", "G5_FBase_GoalDialogRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GoalDialogRender = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = this.goalDialogDomain.goalDialogData, o = this.config, n = o.formatThreshold, a = o.tileSize, i = ae.Sprite({
name: "GoalDialogMask",
img: this.config.white,
sizeMode: ae.SizeMode.Custom,
rgb: 0,
alpha: [ function(e) {
return .7 * (t.alpha[e] || 0);
}, [ t, "alpha" ] ],
active: [ function(e) {
return !0 === t.showTap[e];
}, [ t, "showTap" ] ],
widget: {
alignMode: ae.WidgetAlignMode.Always,
isAlignBottom: !0,
bottom: 0,
isAlignLeft: !0,
left: 0,
isAlignRight: !0,
right: 0,
isAlignTop: !0,
top: 0
},
button: {
transition: ae.ButtonTransition.None
},
event: {
buttonClick: this.goalDialogCloseRouter
}
}), r = ae.Sprite({
name: "GoalDialogBg",
img: this.config.bgGoalDialog,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
height: 360,
y: 169.511,
widget: {
alignMode: ae.WidgetAlignMode.Always,
isAlignLeft: !0,
left: 0,
isAlignRight: !0,
right: 0
}
}), p = ae.Sprite({
name: "GoalDialogTitle",
img: this.config.target,
y: 281.667
}), c = ae.Node({
name: "GoalDialogCard",
width: a,
height: a,
y: 134.483
}, ae.Sprite({
name: "TileFrameDown",
img: this.frameAsset.frameDown,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: a,
height: a,
rgb: [ function(o) {
return e.getColor(t.value[o]);
}, [ t, "value" ] ]
}), ae.Sprite({
name: "TileFrameUpContent",
img: this.frameAsset.frameUp,
renderType: ae.RenderType.Simple,
sizeMode: ae.SizeMode.Custom,
trim: !1,
width: a,
height: a,
rgb: [ function(o) {
return e.getColorUp(t.value[o]);
}, [ t, "value" ] ]
}), ae.Sprite({
name: "TileFrameGoal",
img: this.frameAsset.frameGoal,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: 142,
height: 142,
rgb: 16777215
}, ae.Sprite({
name: "crown",
img: this.config.crown,
scale: .76923,
y: 89.069
})), ae.Text({
name: "GoalDialogValue",
text: [ function(o) {
return e.formatNumber(t.value[o], n);
}, [ t, "value" ] ],
font: this.config.numberFont,
fontSize: [ function(o) {
return e.calcFontSize(t.value[o]);
}, [ t, "value" ] ],
rgb: 16777215,
spacingX: 2
})), f = ae.Text({
name: "GoalDialogTapText",
text: "Tap to Start",
font: this.config.spartanBoldFont,
fontSize: 57,
lineHeight: 60,
rgb: 16777215,
y: -245.371,
scaleX: [ function(e) {
var o;
return null !== (o = t.tapScale[e]) && void 0 !== o ? o : 1;
}, [ t, "tapScale" ] ],
scaleY: [ function(e) {
var o;
return null !== (o = t.tapScale[e]) && void 0 !== o ? o : 1;
}, [ t, "tapScale" ] ],
active: [ function(e) {
return !0 === t.showTap[e];
}, [ t, "showTap" ] ],
button: {
transition: ae.ButtonTransition.None
},
event: {
buttonClick: this.goalDialogCloseRouter
}
}), s = ae.Node({
name: "GoalDialogPanel",
anchorX: .5,
anchorY: .5,
scaleX: [ function(e) {
return t.scale[e] || 1;
}, [ t, "scale" ] ],
scaleY: [ function(e) {
return t.scale[e] || 1;
}, [ t, "scale" ] ],
alpha: [ function(e) {
return t.alpha[e] || 0;
}, [ t, "alpha" ] ],
widget: {
alignMode: ae.WidgetAlignMode.Always,
isAlignBottom: !0,
bottom: 0,
isAlignLeft: !0,
left: 0,
isAlignRight: !0,
right: 0,
isAlignTop: !0,
top: 0
}
}, r, p, c, f);
return ae.Node({
name: "GoalDialogRoot",
active: [ function(e) {
return (t.alpha[e] || 0) > 0;
}, [ t, "alpha" ] ],
widget: {
alignMode: ae.WidgetAlignMode.Always,
isAlignBottom: !0,
bottom: 0,
isAlignLeft: !0,
left: 0,
isAlignRight: !0,
right: 0,
isAlignTop: !0,
top: 0
}
}, i, s);
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p, c, f, s, u, d;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_GoalDialogDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "goalDialogDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_FormatNumber"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "formatNumber", void 0);
i([ ae.bindAtom("G5_FBase_GetColor"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getColor", void 0);
i([ ae.bindAtom("G5_FBase_GoalDialogCloseRouter"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "goalDialogCloseRouter", void 0);
i([ ae.bindAtom("G5_FBase_FrameAssetConfig"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "frameAsset", void 0);
i([ ae.bindAtom("G5_FBase_GetColorUp"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getColorUp", void 0);
i([ ae.bindAtom("G5_FBase_CalcFontSize"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "calcFontSize", void 0);
return i([ ae.atomClass("G5_FBase_GoalDialogRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_GoalDialogRender = p;
cc._RF.pop();
}, {} ],
G5_FBase_GoalDialogRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b178c1pv0tD1rh+McVNx8Aa", "G5_FBase_GoalDialogRouter");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GoalDialogCloseRouter = o.G5_FBase_GoalDialogRouter = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_GoalDialogRouter") ], t);
}(ae.ConfigAtom);
o.G5_FBase_GoalDialogRouter = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_GoalDialogClose"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "goalDialogClose", void 0);
return i([ ae.atomClass("G5_FBase_GoalDialogCloseRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_GoalDialogCloseRouter = c;
cc._RF.pop();
}, {} ],
G5_FBase_GoalFunctions: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "23835v8HfREkbm3BFLsHQ9a", "G5_FBase_GoalFunctions");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_LerpColor = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function(e, t, o) {
var n = o < 0 ? 0 : o > 1 ? 1 : o, a = e >> 16 & 255, i = e >> 8 & 255, r = 255 & e, p = t >> 16 & 255, c = t >> 8 & 255, f = 255 & t;
return Math.round(a + (p - a) * n) << 16 | Math.round(i + (c - i) * n) << 8 | Math.round(r + (f - r) * n);
};
};
return i([ ae.atomClass("G5_FBase_LerpColor") ], t);
}(ae.FunctionAtom);
o.G5_FBase_LerpColor = r;
cc._RF.pop();
}, {} ],
G5_FBase_GoalRouters: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0c748Qq7VxHkZTDMPDclYhL", "G5_FBase_GoalRouters");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ProgressAnimStartRouter = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GameSignals"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameSignals", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_ProgressAnimStart"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "progressAnimStart", void 0);
return i([ ae.atomClass("G5_FBase_ProgressAnimStartRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_ProgressAnimStartRouter = p;
cc._RF.pop();
}, {} ],
G5_FBase_GoalSignals: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b0f0fNyP8JMeJYdSYzHwqu+", "G5_FBase_GoalSignals");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ProgressAnimComplete = o.G5_FBase_ProgressAnimStart = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_ProgressAnimStart") ], t);
}(ae.SignalAtom);
o.G5_FBase_ProgressAnimStart = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_ProgressAnimComplete") ], t);
}(ae.SignalAtom);
o.G5_FBase_ProgressAnimComplete = c;
cc._RF.pop();
}, {} ],
G5_FBase_GridBgRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5ef6fBK89lB4rB9zzwQjwJh", "G5_FBase_GridBgRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GridBgRender = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = this.config, o = t.gridMaskOffsetY, n = t.gridMaskWidth, a = t.gridMaskHeight, i = this.gridDomain.gridData;
return ae.Mask({
name: "GridBgMask",
type: ae.MaskType.Rect,
width: n,
height: a,
enabled: [ function(e) {
return i.isDropping[e] && i.bgVisible[e];
}, [ i, "isDropping" ], [ i, "bgVisible" ] ],
scale: [ function() {
return e.adapterLogic.runtime.extendScale;
}, [ this.adapterLogic, "runtime", "extendScale" ] ],
y: o
}, ae.Sprite({
name: "GridBgSprite",
width: n,
height: a,
img: this.config.gridBg,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
active: [ function(e) {
return i.bgVisible[e];
}, [ i, "bgVisible" ] ]
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p, c, f, s, u;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_GridDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gridDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_AdapterLogic"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "adapterLogic", void 0);
i([ ae.bindAtom("G5_FBase_GridTouchStart"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "touchStartRouter", void 0);
i([ ae.bindAtom("G5_FBase_GridTouchMove"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "touchMoveRouter", void 0);
i([ ae.bindAtom("G5_FBase_GridTouchEnd"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "touchEndRouter", void 0);
i([ ae.bindAtom("G5_FBase_GridTouchCancel"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "touchCancelRouter", void 0);
return i([ ae.atomClass("G5_FBase_GridBgRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_GridBgRender = p;
cc._RF.pop();
}, {} ],
G5_FBase_GridData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5320aGrp/hHbqeLGJaAX27E", "G5_FBase_GridData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GridData = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
bgVisible: !0,
isDropping: !1
};
};
return i([ ae.atomClass("G5_FBase_GridData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_GridData = r;
cc._RF.pop();
}, {} ],
G5_FBase_GridDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6a64aOC4hxAQo62M4cmIHtb", "G5_FBase_GridDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GridDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_GridData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gridData", void 0);
return i([ ae.atomClass("G5_FBase_GridDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_GridDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_GridTouchRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5687fBuixpD1ZScYX1ZXnPI", "G5_FBase_GridTouchRouter");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GridTouchCancel = o.G5_FBase_GridTouchEndFilter = o.G5_FBase_GridTouchEnd = o.G5_FBase_GridTouchMoveFilter = o.G5_FBase_GridTouchMove = o.G5_FBase_GridTouchStartFilter = o.G5_FBase_GridTouchStart = o.G5_FBase_GridTouchRouter = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_GridTouchRouter") ], t);
}(ae.ConfigAtom);
o.G5_FBase_GridTouchRouter = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_TouchStart"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "touchStart", void 0);
return i([ ae.atomClass("G5_FBase_GridTouchStart") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_GridTouchStart = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.canProcessTouch() || (this.router.dispatchAction = ae.DispatchAction.Cancel);
};
var o, n;
i([ ae.bindAtom("G5_FBase_CanProcessTouch"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "canProcessTouch", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_GridTouchStart"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_GridTouchStartFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_GridTouchStartFilter = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_TouchMove"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "touchMove", void 0);
return i([ ae.atomClass("G5_FBase_GridTouchMove") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_GridTouchMove = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
e ? this.gameDomain.gameData.gameState[e] !== p.G5_FBase.GameState.Idle && (this.router.dispatchAction = ae.DispatchAction.Cancel) : this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_GridTouchMove"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_GridTouchMoveFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_GridTouchMoveFilter = d;
var l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_TouchEnd"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "touchEnd", void 0);
return i([ ae.atomClass("G5_FBase_GridTouchEnd") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_GridTouchEnd = l;
var y = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
e ? this.gameDomain.gameData.gameState[e] !== p.G5_FBase.GameState.Idle && (this.router.dispatchAction = ae.DispatchAction.Cancel) : this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_GridTouchEnd"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_GridTouchEndFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_GridTouchEndFilter = y;
var _ = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_TouchCancel"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "touchCancel", void 0);
return i([ ae.atomClass("G5_FBase_GridTouchCancel") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_GridTouchCancel = _;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_GuideConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cf5f1SexVhJObI9Ujs0DB70", "G5_FBase_GuideConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GuideConfig = void 0;
var r = e("../../G5_FBase_Namespace"), p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
maskAlpha: .6,
maskColor: 0,
guideRows: 5,
guideCols: 4,
guideRowOffset: 0,
guideColOffset: 0,
guideExtraOffsetY: 0,
steps: [ {
board: [ [ 7, 1, 7, 3 ], [ 6, 2, 1, 6 ], [ 4, 1, 1, 8 ], [ 6, 4, 3, 5 ], [ 7, 5, 6, 1 ] ],
targetTiles: [ {
row: 2,
col: 1
}, {
row: 2,
col: 2
} ],
title: "Start!",
subtitle: "Link two same blocks."
}, {
board: [ [ 7, 6, 7, 3 ], [ 6, 1, 1, 6 ], [ 4, 2, 2, 8 ], [ 6, 4, 3, 5 ], [ 7, 5, 6, 1 ] ],
targetTiles: [ {
row: 1,
col: 2
}, {
row: 1,
col: 1
}, {
row: 2,
col: 1
}, {
row: 2,
col: 2
}, {
row: 3,
col: 2
}, {
row: 3,
col: 1
}, {
row: 4,
col: 1
}, {
row: 4,
col: 2
} ],
title: "Good!",
subtitle: "After link two same blocks,\nyou can link same or higher one."
}, {
board: [ [ 7, 4, 5, 3 ], [ 6, 3, 2, 6 ], [ 4, 1, 5, 8 ], [ 6, 4, 7, 5 ], [ 7, 6, 8, 1 ] ],
targetTiles: [ {
row: 2,
col: 0
}, {
row: 3,
col: 1
}, {
row: 2,
col: 2
}, {
row: 1,
col: 3
} ],
title: "Great!",
subtitle: "You can link all directions blocks."
}, {
board: [ [ 2, 2, 2, 3 ], [ 7, 4, 5, 7 ], [ 6, 3, 2, 8 ], [ 6, 1, 7, 5 ], [ 7, 6, 8, 1 ] ],
targetTiles: [],
title: "Excellent!",
subtitle: "Let's play more blocks."
} ],
rows: r.G5_FBase.GridConfig.Rows,
cols: r.G5_FBase.GridConfig.Cols,
maskAnimDuration: .3,
autoCompleteDelay: 1,
fingerStartDelay: .5,
fingerHoldDelay: .5,
fingerEndDelay: .3,
fingerLoopDelay: 3,
fingerMoveSpeed: 200,
stepUpdateDelay: .1,
emptyFillValue: 2,
titleY: 572,
titleFontSize: 60,
titleColor: 16777215,
subtitleY: 429,
subtitleFontSize: 40,
subtitleColor: 11184810,
fingerAnchorX: .1,
fingerAnchorY: .95,
fingerScale: .8,
guideZIndex: 100
};
};
return i([ ae.atomClass("G5_FBase_GuideConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_GuideConfig = p;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_GuideData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "68475NmuTBDzpYz/TkjPEPm", "G5_FBase_GuideData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GuideData = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
isActive: !1,
currentStep: 0,
totalSteps: 0,
isCompleted: !1,
maskVisible: !1,
maskAnimProgress: 0
};
};
return i([ ae.atomClass("G5_FBase_GuideData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_GuideData = r;
cc._RF.pop();
}, {} ],
G5_FBase_GuideDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "759a5WLvbxGGqR3KXUrxBtu", "G5_FBase_GuideDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GuideDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_GuideData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideData", void 0);
return i([ ae.atomClass("G5_FBase_GuideDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_GuideDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_GuideFingerData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "13b7ah/AplGHqjTPr59wWtg", "G5_FBase_GuideFingerData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GuideFingerData = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
fingerProgress: 0,
fingerVisible: !1,
currentStep: 0
};
};
return i([ ae.atomClass("G5_FBase_GuideFingerData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_GuideFingerData = r;
cc._RF.pop();
}, {} ],
G5_FBase_GuideFingerDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9cb59WLFU9GeJ2RndQy1dF/", "G5_FBase_GuideFingerDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GuideFingerDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_GuideFingerData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "fingerData", void 0);
return i([ ae.atomClass("G5_FBase_GuideFingerDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_GuideFingerDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_GuideFingerRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "eea4fE0jdFDIoq7cth59Pb4", "G5_FBase_GuideFingerRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GuideFingerRender = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = this.fingerDomain.fingerData, o = this.gameDomain.gameData;
return ae.Sprite({
name: "GuideFinger",
img: this.gameConfig.finger,
anchorX: this.guideConfig.fingerAnchorX,
anchorY: this.guideConfig.fingerAnchorY,
zIndex: this.guideConfig.guideZIndex,
scale: this.guideConfig.fingerScale,
alpha: [ function(e) {
return t.fingerVisible[e] ? 1 : 0;
}, [ t, "fingerVisible" ] ],
x: [ function(t) {
return e.calcFingerPos(t).x;
}, [ t, "fingerProgress" ], [ t, "currentStep" ], [ o, "renderOffsetX" ], [ this.adapterLogic, "runtime", "extendScale" ] ],
y: [ function(t) {
return e.calcFingerPos(t).y;
}, [ t, "fingerProgress" ], [ t, "currentStep" ], [ o, "renderOffsetY" ], [ this.adapterLogic, "runtime", "extendScale" ] ]
});
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p, c, f, s;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_GuideFingerDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "fingerDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameConfig", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_CalcFingerPos"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "calcFingerPos", void 0);
i([ ae.bindAtom("G5_FBase_AdapterLogic"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "adapterLogic", void 0);
i([ ae.bindAtom("G5_FBase_GuideConfig"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "guideConfig", void 0);
return i([ ae.atomClass("G5_FBase_GuideFingerRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_GuideFingerRender = p;
cc._RF.pop();
}, {} ],
G5_FBase_GuideLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a6aadj9cFlNv4uGJG1b0p/u", "G5_FBase_GuideLogic");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
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
o.G5_FBase_OnGuideCompleteCleanup = o.G5_FBase_OnMergeCheckGuide = o.G5_FBase_OnMergeHideMask = o.G5_FBase_OnGuideStepUpdate = o.G5_FBase_OnGuideDropStart = o.G5_FBase_OnGuideDropComplete = o.G5_FBase_OnGuideStart = o.G5_FBase_InitGuideBoard = o.G5_FBase_IsTargetTile = o.G5_FBase_GuideLogic = void 0;
var c = e("../../G5_FBase_Namespace"), f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_GuideLogic") ], t);
}(ae.ConfigAtom);
o.G5_FBase_GuideLogic = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n, a, i = e.guideDomain.collect()[0];
if (!i) return !1;
var r = e.guideDomain.guideData;
if (!r.isActive[i]) return !0;
var c = r.currentStep[i], f = e.guideConfig.steps;
if (c >= f.length) return !0;
var s = f[c];
try {
for (var u = p(s.targetTiles), d = u.next(); !d.done; d = u.next()) {
var l = d.value;
if (l.row === t && l.col === o) return !0;
}
} catch (e) {
n = {
error: e
};
} finally {
try {
d && !d.done && (a = u.return) && a.call(u);
} finally {
if (n) throw n.error;
}
}
return !1;
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_GuideConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideConfig", void 0);
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideDomain", void 0);
return i([ ae.atomClass("G5_FBase_IsTargetTile") ], t);
}(ae.FunctionAtom);
o.G5_FBase_IsTargetTile = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n) {
var a, i;
void 0 === n && (n = !0);
var r = e.guideConfig.steps;
if (!(o >= r.length)) {
var f = r[o].board, s = e.guideConfig, u = s.guideRows, d = s.guideCols, l = s.guideRowOffset, y = s.guideColOffset, _ = e.gameConfig, m = _.rows, g = _.cols, h = _.initialDropDuration, v = _.initialRowDelay, b = _.tileSize, F = _.gridHeight, G = e.tileDomain.tileData, A = e.gridDomain.collect()[0];
if (A) {
var B = e.gameConfig.gridPanelTop + F + b;
if (0 === e.tileDomain.count()) for (var T = e.tileGlowDomain.tileGlowData, O = 0; O < m; O++) for (var R = 0; R < g; R++) {
var j = e.tileDomain.create();
G.row.set(j, O);
G.col.set(j, R);
G.zIndex.set(j, e.zIndexConfig.tileDefault);
e.childOf.addChild(A, j);
var C = e.tileGlowDomain.create();
T.row.set(C, O);
T.col.set(C, R);
e.childOf.addChild(A, C);
e.tileToGlow.set(j, C);
}
try {
for (var S = p(e.tileDomain.collect()), D = S.next(); !D.done; D = S.next()) {
var w = D.value, I = G.row[w], P = G.col[w], x = I - l, L = P - y, M = x >= 0 && x < u && L >= 0 && L < d, U = M && x < f.length && L < f[x].length ? f[x][L] : 0;
G.visible.set(w, M);
e.setTileValue(w, U);
G.state.set(w, c.G5_FBase.TileState.Normal);
G.chainIndex.set(w, -1);
G.zIndex.set(w, e.zIndexConfig.tileDefault);
G.isNew.set(w, !0);
G.animOffsetX.set(w, 0);
G.animScale.set(w, 1);
G.animAlpha.set(w, 1);
G.valueAlpha.set(w, 1);
if (n && M && U > 0) {
G.isAnimating.set(w, 1);
G.animOffsetY.set(w, B);
var E = (u - 1 - x) * v;
e.tween(w, [ [ ae.TweenStepType.Delay, E ], [ ae.TweenStepType.To, G, {
animOffsetY: 0
}, h, ae.TweenEasing.QuadOut ] ]);
} else {
G.isAnimating.set(w, 0);
G.animOffsetY.set(w, 0);
}
}
} catch (e) {
a = {
error: e
};
} finally {
try {
D && !D.done && (i = S.return) && i.call(S);
} finally {
if (a) throw a.error;
}
}
if (n) {
var k = (u - 1) * v + h;
e.tween(t, [ [ ae.TweenStepType.Delay, k ], [ ae.TweenStepType.Router, e.dropCompleteSignal ] ]);
}
}
}
};
};
var o, n, f, s, u, d, l, y, _, m, g, h, v;
i([ ae.bindAtom("G5_FBase_GuideConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideConfig", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameConfig", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileGlowDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "tileGlowDomain", void 0);
i([ ae.bindAtom("G5_FBase_GridDomain"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "gridDomain", void 0);
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G5_FBase_TweenToDropCompleteRouter"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "dropCompleteSignal", void 0);
i([ ae.bindAtom("G5_FBase_TileToGlow"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "tileToGlow", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "zIndexConfig", void 0);
i([ ae.bindAtom("G5_FBase_SetTileValueWithPower"), r("design:type", "function" == typeof (v = "undefined" != typeof ae && ae.AtomTypeInfer) ? v : Object) ], t.prototype, "setTileValue", void 0);
return i([ ae.atomClass("G5_FBase_InitGuideBoard") ], t);
}(ae.FunctionAtom);
o.G5_FBase_InitGuideBoard = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineStorageData = function() {
return {
hasCompletedGuide: !1,
justCompletedGuide: !1
};
};
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e, t) {
if (!t.storage.hasCompletedGuide) {
var o = this.guideConfig.steps.length;
if (0 !== o) {
var n = this.gameDomain.collect()[0];
if (n) {
var a = this.gridDomain.collect()[0];
if (a) {
var i, r;
if (0 === this.guideDomain.count()) {
i = this.guideDomain.create();
this.childOf.addChild(a, i);
} else i = this.guideDomain.collect()[0];
if (0 === this.fingerDomain.count()) {
r = this.fingerDomain.create();
this.childOf.addChild(n, r);
} else r = this.fingerDomain.collect()[0];
var p = this.fingerDomain.fingerData;
p.fingerVisible.set(r, !1);
p.fingerProgress.set(r, 0);
p.currentStep.set(r, 0);
var f = this.guideDomain.guideData;
f.isActive.set(i, !0);
f.currentStep.set(i, 0);
f.totalSteps.set(i, o);
f.isCompleted.set(i, !1);
var s = this.gameDomain.gameData, u = this.gameConfig, d = u.rows, l = u.cols, y = u.tileSize, _ = u.gap, m = this.guideConfig, g = m.guideRows, h = m.guideCols;
s.gameState.set(n, c.G5_FBase.GameState.Idle);
s.isGuideMode.set(n, !0);
var v = (l - h) * (y + _) / 2, b = (d - g) * (y + _) / 2 - this.guideConfig.guideExtraOffsetY * (y + _);
s.renderOffsetX.set(n, v);
s.renderOffsetY.set(n, b);
s.effectiveRows.set(n, g);
s.effectiveCols.set(n, h);
this.gridDomain.gridData.bgVisible.set(a, !1);
var F = this.connectionLineDomain.collect()[0];
F && this.connectionLineDomain.connectionLineData.zIndex.set(F, this.zIndexConfig.connectionLineGuide);
this.initGuideBoard(e, 0);
}
}
}
}
};
var o, n, p, f, s, u, d, l, y, _, m, g;
i([ ae.bindAtom("G5_FBase_GuideConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideConfig", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameConfig", void 0);
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_GridDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "gridDomain", void 0);
i([ ae.bindAtom("G5_FBase_GuideFingerDomain"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "fingerDomain", void 0);
i([ ae.bindAtom("G5_FBase_ConnectionLineDomain"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "connectionLineDomain", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "zIndexConfig", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "gameInitLogic", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_GuideStart"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "guideStart", void 0);
i([ ae.bindAtom("G5_FBase_InitGuideBoard"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "initGuideBoard", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "childOf", void 0);
return i([ ae.atomClass("G5_FBase_OnGuideStart") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnGuideStart = d;
var l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t, o, n = this.guideDomain.collect()[0];
if (n) {
var a = this.guideDomain.guideData;
if (a.isActive[n]) {
var i = this.tileDomain.tileData;
try {
for (var r = p(this.tileDomain.collect()), c = r.next(); !c.done; c = r.next()) {
var f = c.value;
i.isAnimating.set(f, 0);
i.isNew.set(f, !1);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
c && !c.done && (o = r.return) && o.call(r);
} finally {
if (t) throw t.error;
}
}
var s = a.currentStep[n], u = this.guideConfig.steps;
if (s >= u.length) this.tween(e, [ [ ae.TweenStepType.Router, this.guideCompleteRouter ] ]); else {
a.maskAnimProgress.set(n, 0);
a.maskVisible.set(n, !0);
var d = this.fingerDomain.collect()[0], l = this.fingerDomain.fingerData;
if (d) {
l.fingerVisible.set(d, !1);
l.fingerProgress.set(d, 0);
l.currentStep.set(d, s);
}
var y = this.guideConfig.maskAnimDuration;
this.tween(n, [ [ ae.TweenStepType.To, a, {
maskAnimProgress: 1
}, y, ae.TweenEasing.QuadOut ] ]);
var _ = u[s].targetTiles.length;
if (0 !== _) {
if (_ > 1 && d) {
var m = this.guideConfig.fingerStartDelay, g = this.guideConfig.fingerHoldDelay, h = this.guideConfig.fingerEndDelay, v = this.guideConfig.fingerLoopDelay, b = this.guideConfig.fingerMoveSpeed, F = (_ - 1) * (this.gameConfig.tileSize + this.gameConfig.gap) / b;
this.tween(d, [ [ ae.TweenStepType.Delay, y ], [ ae.TweenStepType.Repeat, 0, [ [ ae.TweenStepType.Delay, m ], [ ae.TweenStepType.To, l, {
fingerVisible: !0
}, 0 ], [ ae.TweenStepType.Delay, g ], [ ae.TweenStepType.To, l, {
fingerProgress: _ - 1
}, F, ae.TweenEasing.Linear ], [ ae.TweenStepType.Delay, h ], [ ae.TweenStepType.To, l, {
fingerVisible: !1
}, 0 ], [ ae.TweenStepType.Delay, v ], [ ae.TweenStepType.To, l, {
fingerProgress: 0
}, 0 ] ] ] ]);
}
} else {
var G = this.guideConfig.autoCompleteDelay;
this.tween(e, [ [ ae.TweenStepType.Delay, y + G ], [ ae.TweenStepType.Router, this.guideCompleteRouter ] ]);
}
}
}
}
};
var o, n, c, f, s, u, d, l, y, _;
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.bindAtom("G5_FBase_GuideConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideConfig", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gameConfig", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_GuideFingerDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "fingerDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "rootDomain", void 0);
i([ ae.bindAtom("G5_FBase_TweenToGuideCompleteRouter"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "guideCompleteRouter", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_GuideDropComplete"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "guideDropComplete", void 0);
return i([ ae.atomClass("G5_FBase_OnGuideDropComplete") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnGuideDropComplete = l;
var y = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t, o, n, a, i = this.guideDomain.collect()[0];
if (i) {
var r = this.guideDomain.guideData;
if (r.isActive[i]) {
var c = r.currentStep[i], f = this.guideConfig.steps, s = c < f.length ? f[c] : null, u = this.guideConfig, d = u.guideRows, l = u.guideCols, y = u.guideRowOffset, _ = u.guideColOffset, m = this.gameConfig, g = m.dropDuration, h = m.tileSize, v = m.gap, b = this.tileDomain.tileData, F = this.tileGlowDomain.tileGlowData, G = new Map();
try {
for (var A = p(this.tileDomain.collect()), B = A.next(); !B.done; B = A.next()) {
var T = B.value, O = b.col[T], R = b.row[T], j = b.value[T], C = R - y;
if (!((z = O - _) < 0 || z >= l || C < 0 || C >= d)) {
G.has(O) || G.set(O, []);
G.get(O).push({
eid: T,
row: R,
value: j
});
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
B && !B.done && (o = A.return) && o.call(A);
} finally {
if (t) throw t.error;
}
}
var S = !1, D = h + v;
for (O = _; O < _ + l; O++) {
var w = G.get(O) || [];
w.sort(function(e, t) {
return t.row - e.row;
});
var I = w.filter(function(e) {
return e.value > 0;
}), P = w.filter(function(e) {
return 0 === e.value;
}), x = P.length, L = y + d - 1;
try {
for (var M = (n = void 0, p(I)), U = M.next(); !U.done; U = M.next()) {
if ((N = U.value).row !== L) {
S = !0;
var E = (L - N.row) * D;
b.animOffsetY.set(N.eid, E);
b.isAnimating.set(N.eid, 1);
b.row.set(N.eid, L);
void 0 !== (V = this.tileToGlow.getTargets(N.eid)[0]) && F.row.set(V, L);
this.tween(N.eid, [ [ ae.TweenStepType.To, b, {
animOffsetY: 0
}, g, ae.TweenEasing.QuadOut ] ]);
}
L--;
}
} catch (e) {
n = {
error: e
};
} finally {
try {
U && !U.done && (a = M.return) && a.call(M);
} finally {
if (n) throw n.error;
}
}
for (var k = 0; k < P.length; k++) {
var N = P[k];
S = !0;
var V, z = O - _, Y = (C = L - y, this.guideConfig.emptyFillValue);
s && C >= 0 && C < s.board.length && z >= 0 && z < s.board[C].length && (Y = s.board[C][z]);
this.setTileValue(N.eid, Y);
b.visible.set(N.eid, Y > 0);
b.isNew.set(N.eid, !0);
b.isAnimating.set(N.eid, 1);
b.valueAlpha.set(N.eid, 1);
b.row.set(N.eid, L);
void 0 !== (V = this.tileToGlow.getTargets(N.eid)[0]) && F.row.set(V, L);
var H = (x - k) * D;
b.animOffsetY.set(N.eid, H);
this.tween(N.eid, [ [ ae.TweenStepType.To, b, {
animOffsetY: 0
}, g, ae.TweenEasing.QuadOut ] ]);
L--;
}
}
S && e ? this.tween(e, [ [ ae.TweenStepType.Delay, g ], [ ae.TweenStepType.Router, this.dropCompleteRouter ] ]) : e && this.tween(e, [ [ ae.TweenStepType.Router, this.dropCompleteRouter ] ]);
}
}
};
var o, n, c, f, s, u, d, l, y, _, m;
i([ ae.bindAtom("G5_FBase_GuideConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideConfig", void 0);
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gameConfig", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileGlowDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "tileGlowDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "tween", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_GuideDropStart"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "guideDropStart", void 0);
i([ ae.bindAtom("G5_FBase_TweenToGameDropCompleteRouter"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "dropCompleteRouter", void 0);
i([ ae.bindAtom("G5_FBase_TileToGlow"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "tileToGlow", void 0);
i([ ae.bindAtom("G5_FBase_SetTileValueWithPower"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "setTileValue", void 0);
return i([ ae.atomClass("G5_FBase_OnGuideDropStart") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnGuideDropStart = y;
var _ = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t, o, n = this.guideDomain.collect()[0];
if (n) {
var a = this.guideDomain.guideData;
if (a.isActive[n]) {
var i = a.currentStep[n], r = this.guideConfig.steps, f = this.guideConfig, s = f.guideRows, u = f.guideCols, d = f.guideRowOffset, l = f.guideColOffset, y = this.tileDomain.tileData, _ = i < r.length ? r[i] : null;
try {
for (var m = p(this.tileDomain.collect()), g = m.next(); !g.done; g = m.next()) {
var h = g.value;
y.isAnimating.set(h, 0);
y.isNew.set(h, !1);
y.animOffsetY.set(h, 0);
if (_) {
var v = y.row[h], b = y.col[h], F = v - d, G = b - l;
if (F >= 0 && F < s && G >= 0 && G < u) {
var A = _.board[F][G];
this.setTileValue(h, A);
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
g && !g.done && (o = m.return) && o.call(m);
} finally {
if (t) throw t.error;
}
}
var B = this.gameDomain.collect()[0];
B && this.gameDomain.gameData.gameState.set(B, c.G5_FBase.GameState.Idle);
this.tween(e, [ [ ae.TweenStepType.Delay, this.guideConfig.stepUpdateDelay ], [ ae.TweenStepType.Router, this.dropCompleteRouter ] ]);
}
}
};
var o, n, f, s, u, d, l, y;
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.bindAtom("G5_FBase_GuideConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideConfig", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "tween", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_GuideStepUpdate"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "guideStepUpdate", void 0);
i([ ae.bindAtom("G5_FBase_TweenToDropCompleteRouter"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "dropCompleteRouter", void 0);
i([ ae.bindAtom("G5_FBase_SetTileValueWithPower"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "setTileValue", void 0);
return i([ ae.atomClass("G5_FBase_OnGuideStepUpdate") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnGuideStepUpdate = _;
var m = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.guideDomain.collect()[0];
if (e) {
var t = this.guideDomain.guideData;
if (t.isActive[e]) {
this.stopTween(e);
t.maskVisible.set(e, !1);
t.maskAnimProgress.set(e, 0);
var o = this.fingerDomain.collect()[0];
if (o) {
this.stopTween(o);
var n = this.fingerDomain.fingerData;
n.fingerVisible.set(o, !1);
n.fingerProgress.set(o, 0);
}
}
}
};
var o, n, p, c;
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.bindAtom("G5_FBase_GuideFingerDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "fingerDomain", void 0);
i([ ae.bindAtom("G_FAtom_StopTween"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "stopTween", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_MergeStart"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "mergeStart", void 0);
return i([ ae.atomClass("G5_FBase_OnMergeHideMask") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnMergeHideMask = m;
var g = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.guideDomain.collect()[0];
if (e) {
var t = this.guideDomain.guideData;
if (t.isActive[e]) {
var o = t.currentStep[e] + 1;
t.currentStep.set(e, o);
t.maskVisible.set(e, !1);
t.maskAnimProgress.set(e, 0);
}
}
};
var o, n;
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_MergeComplete"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "mergeComplete", void 0);
return i([ ae.atomClass("G5_FBase_OnMergeCheckGuide") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnMergeCheckGuide = g;
var h = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e, t, o, n, a = this.guideDomain.collect()[0];
if (a) {
var i = this.guideDomain.guideData;
i.isActive.set(a, !1);
i.isCompleted.set(a, !0);
this.guideStartLogic.storage.hasCompletedGuide = !0;
this.guideStartLogic.storage.justCompletedGuide = !0;
i.maskVisible.set(a, !1);
var r = this.gridDomain.collect()[0];
r && this.gridDomain.gridData.bgVisible.set(r, !0);
var f = this.gameDomain.collect()[0];
if (f) {
var s = this.gameDomain.gameData;
s.gameState.set(f, c.G5_FBase.GameState.Processing);
s.isGuideMode.set(f, !1);
s.renderOffsetX.set(f, 0);
s.renderOffsetY.set(f, 0);
s.effectiveRows.set(f, 0);
s.effectiveCols.set(f, 0);
}
var u = this.tileDomain.tileData;
try {
for (var d = p(this.tileDomain.collect()), l = d.next(); !l.done; l = d.next()) {
var y = l.value;
u.visible.set(y, !1);
this.setTileValue(y, 0);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
l && !l.done && (t = d.return) && t.call(d);
} finally {
if (e) throw e.error;
}
}
var _ = this.tileGlowDomain.tileGlowData;
try {
for (var m = p(this.tileGlowDomain.collect()), g = m.next(); !g.done; g = m.next()) {
var h = g.value;
_.state.set(h, c.G5_FBase.TileState.Normal);
_.alpha.set(h, 0);
_.scale.set(h, 1);
}
} catch (e) {
o = {
error: e
};
} finally {
try {
g && !g.done && (n = m.return) && n.call(m);
} finally {
if (o) throw o.error;
}
}
var v = this.connectionLineDomain.collect()[0];
if (v) {
var b = this.connectionLineDomain.connectionLineData;
b.active.set(v, !1);
b.zIndex.set(v, this.zIndexConfig.connectionLine);
b.dirtyVersion.set(v, (b.dirtyVersion[v] || 0) + 1);
}
}
};
var o, n, f, s, u, d, l, y, _, m, g;
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileGlowDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileGlowDomain", void 0);
i([ ae.bindAtom("G5_FBase_ConnectionLineDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "connectionLineDomain", void 0);
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.bindAtom("G5_FBase_GridDomain"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "gridDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "zIndexConfig", void 0);
i([ ae.bindAtom("G5_FBase_SetTileValueWithPower"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "setTileValue", void 0);
i([ ae.bindAtom("G5_FBase_OnGuideStart"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "guideStartLogic", void 0);
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "rootDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_GuideComplete"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "guideComplete", void 0);
return i([ ae.atomClass("G5_FBase_OnGuideCompleteCleanup") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnGuideCompleteCleanup = h;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_GuideMaskRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "700d1I/xbdC86hg2yT8gadn", "G5_FBase_GuideMaskRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
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
o.G5_FBase_GuideMaskRender = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = this.guideDomain.guideData, o = this.gameDomain.gameData, n = this.guideConfig, a = n.maskAlpha, i = n.maskColor, r = n.guideRows, c = n.guideCols, f = this.gameConfig, s = f.tileSize, u = f.gap, d = f.gridMaskOffsetY, l = s / 2;
return ae.Node({
name: "GuideMaskRoot",
zIndex: this.zIndexConfig.mask,
width: [ function() {
return e.windowSize.width;
}, [ this.windowSize, "width" ] ],
height: [ function() {
return e.windowSize.height;
}, [ this.windowSize, "height" ] ],
y: -d,
active: [ function(e) {
return t.maskVisible[e];
}, [ t, "maskVisible" ] ]
}, ae.Graphics({
name: "MaskGraphics",
draw: [ function(n) {
var f, s, y, _, m, g, h, v, b, F, G, A, B = t.currentStep[n] || 0, T = e.guideConfig.steps;
if (B >= T.length) return [];
var O = T[B].targetTiles, R = e.windowSize;
if (0 === O.length) {
var j = -R.width / 2, C = -R.height / 2;
return [ [ ae.GraphicsCmd.FillColor, i ], [ ae.GraphicsCmd.FillAlpha, a ], [ ae.GraphicsCmd.Rect, j, C, R.width, R.height ], [ ae.GraphicsCmd.Fill ] ];
}
var S = e.gameDomain.collect()[0], D = S ? o.renderOffsetX[S] : 0, w = S ? o.renderOffsetY[S] : 0, I = t.maskAnimProgress[n] || 0, P = [];
try {
for (var x = p(O), L = x.next(); !L.done; L = x.next()) {
var M = L.value;
if (M.row >= 0 && M.row < r && M.col >= 0 && M.col < c) {
var U = e.calcTilePos(M.row, M.col);
P.push({
row: M.row,
col: M.col,
x: U.x + D,
y: U.y - w + d
});
}
}
} catch (e) {
f = {
error: e
};
} finally {
try {
L && !L.done && (s = x.return) && s.call(x);
} finally {
if (f) throw f.error;
}
}
if (0 === P.length) return [];
var E = -R.width / 2, k = R.width, N = -R.height / 2, V = R.height, z = e.calcTilePos(0, 0), Y = z.x, H = z.y, W = e.calcTilePos(r - 1, c - 1), X = Y - l - u / 2 + D, Z = H + l + u / 2 - w + d, K = W.x + l + u / 2 + D, q = W.y - l - u / 2 - w + d, J = Z - q, Q = [ [ ae.GraphicsCmd.FillColor, i ], [ ae.GraphicsCmd.FillAlpha, a ], [ ae.GraphicsCmd.Rect, E, Z, k, N + V - Z ], [ ae.GraphicsCmd.Rect, E, N, k, q - N ], [ ae.GraphicsCmd.Rect, E, q, X - E, J ], [ ae.GraphicsCmd.Rect, K, q, E + k - K, J ] ], $ = [];
try {
for (var ee = p(P), te = ee.next(); !te.done; te = ee.next()) {
var oe = te.value, ne = oe.x - l, ie = oe.x + l, re = oe.y + l, pe = oe.y - l;
$.push({
left: e.lerp(X, ne, I),
right: e.lerp(K, ie, I),
top: e.lerp(Z, re, I),
bottom: e.lerp(q, pe, I)
});
}
} catch (e) {
y = {
error: e
};
} finally {
try {
te && !te.done && (_ = ee.return) && _.call(ee);
} finally {
if (y) throw y.error;
}
}
var ce = [ X, K ];
try {
for (var fe = p($), se = fe.next(); !se.done; se = fe.next()) {
var ue = se.value, de = Math.max(ue.left, X), le = Math.min(ue.right, K);
le > de && ce.push(de, le);
}
} catch (e) {
m = {
error: e
};
} finally {
try {
se && !se.done && (g = fe.return) && g.call(fe);
} finally {
if (m) throw m.error;
}
}
ce.sort(function(e, t) {
return e - t;
});
var ye = [];
try {
for (var _e = p(ce), me = _e.next(); !me.done; me = _e.next()) {
var ge = me.value;
(0 === ye.length || Math.abs(ge - ye[ye.length - 1]) > 1e-4) && ye.push(ge);
}
} catch (e) {
h = {
error: e
};
} finally {
try {
me && !me.done && (v = _e.return) && v.call(_e);
} finally {
if (h) throw h.error;
}
}
for (var he = 0; he < ye.length - 1; he++) {
var ve = ye[he], be = ye[he + 1];
if (!(be <= ve)) {
var Fe = [];
try {
for (var Ge = (b = void 0, p($)), Ae = Ge.next(); !Ae.done; Ae = Ge.next()) {
ue = Ae.value;
var Be = Math.max(ue.left, X), Te = Math.min(ue.right, K);
if (Be < be && Te > ve) {
var Oe = Math.max(ue.bottom, q), Re = Math.min(ue.top, Z);
Re > Oe && Fe.push({
bottom: Oe,
top: Re
});
}
}
} catch (e) {
b = {
error: e
};
} finally {
try {
Ae && !Ae.done && (F = Ge.return) && F.call(Ge);
} finally {
if (b) throw b.error;
}
}
if (0 !== Fe.length) {
Fe.sort(function(e, t) {
return e.bottom - t.bottom;
});
var je = q;
try {
for (var Ce = (G = void 0, p(Fe)), Se = Ce.next(); !Se.done; Se = Ce.next()) {
var De = Se.value;
je < De.bottom && Q.push([ ae.GraphicsCmd.Rect, ve, je, be - ve, De.bottom - je ]);
je = Math.max(je, De.top);
}
} catch (e) {
G = {
error: e
};
} finally {
try {
Se && !Se.done && (A = Ce.return) && A.call(Ce);
} finally {
if (G) throw G.error;
}
}
je < Z && Q.push([ ae.GraphicsCmd.Rect, ve, je, be - ve, Z - je ]);
} else Q.push([ ae.GraphicsCmd.Rect, ve, q, be - ve, Z - q ]);
}
}
Q.push([ ae.GraphicsCmd.Fill ]);
return Q;
}, [ t, "currentStep" ], [ t, "maskAnimProgress" ], [ o, "renderOffsetX" ], [ o, "renderOffsetY" ], [ this.windowSize, "width" ], [ this.windowSize, "height" ] ]
}), ae.Text({
name: "GuideTitle",
text: [ function(o) {
var n = t.currentStep[o] || 0, a = e.guideConfig.steps;
return n >= a.length ? "" : a[n].title || "";
}, [ t, "currentStep" ] ],
y: this.guideConfig.titleY,
fontSize: this.guideConfig.titleFontSize,
font: this.gameConfig.spartanBoldFont,
rgb: this.guideConfig.titleColor,
zIndex: this.guideConfig.guideZIndex
}), ae.Text({
name: "GuideSubtitle",
text: [ function(o) {
var n = t.currentStep[o] || 0, a = e.guideConfig.steps;
return n >= a.length ? "" : a[n].subtitle || "";
}, [ t, "currentStep" ] ],
y: this.guideConfig.subtitleY,
fontSize: this.guideConfig.subtitleFontSize,
font: this.gameConfig.spartanBoldFont,
rgb: this.guideConfig.subtitleColor,
zIndex: this.guideConfig.guideZIndex
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, s, u, d, l, y;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.bindAtom("G5_FBase_GuideConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideConfig", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gameConfig", void 0);
i([ ae.bindAtom("G5_FBase_CalcTilePos"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "calcTilePos", void 0);
i([ ae.bindAtom("G_FAtom_MathLerp"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "lerp", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "zIndexConfig", void 0);
i([ ae.bindAtom("G_FAtom_WindowSize"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "windowSize", void 0);
i([ ae.bindAtom("G5_FBase_AdapterLogic"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "adapterLogic", void 0);
return i([ ae.atomClass("G5_FBase_GuideMaskRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_GuideMaskRender = c;
cc._RF.pop();
}, {} ],
G5_FBase_GuideRoutersDispatch: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "de0abxaE7dCmbb1niXwT6+Z", "G5_FBase_GuideRoutersDispatch");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GuideDropDispatch = o.G5_FBase_GuideDropRouteFilter = o.G5_FBase_MergeToGuideDropRouter = o.G5_FBase_GuideDropStart = o.G5_FBase_GuideRoutersDispatch = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_GuideRoutersDispatch") ], t);
}(ae.ConfigAtom);
o.G5_FBase_GuideRoutersDispatch = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_GuideDropStart") ], t);
}(ae.SignalAtom);
o.G5_FBase_GuideDropStart = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_MergeComplete"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "mergeComplete", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_GuideDropStart"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideDropStart", void 0);
return i([ ae.atomClass("G5_FBase_MergeToGuideDropRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_MergeToGuideDropRouter = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.guideDomain.collect()[0];
e && this.guideDomain.guideData.isActive[e] || (this.router.dispatchAction = ae.DispatchAction.Cancel);
};
var o, n;
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_MergeToGuideDropRouter"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_GuideDropRouteFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_GuideDropRouteFilter = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.guideDomain.collect()[0];
e && this.guideDomain.guideData.isActive[e] && (this.router.dispatchAction = ae.DispatchAction.Cancel);
};
var o, n;
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_MergeToDropRouter"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_GuideDropDispatch") ], t);
}(ae.LogicAtom);
o.G5_FBase_GuideDropDispatch = u;
cc._RF.pop();
}, {} ],
G5_FBase_GuideSignals: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ff0d6hp7lRJ74yXO4SCjXHq", "G5_FBase_GuideSignals");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
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
o.G5_FBase_GuideTouchMoveFilter = o.G5_FBase_GuideTouchStartFilter = o.G5_FBase_GuideFillFilter = o.G5_FBase_DropToGuideStepUpdateFilter = o.G5_FBase_DropToGuideStepUpdateRouter = o.G5_FBase_GuideStepUpdate = o.G5_FBase_GuideMergeFilter = o.G5_FBase_NewGameGuideFilter = o.G5_FBase_MergeToGuideStepFilter = o.G5_FBase_TweenToNewGameRouter = o.G5_FBase_TweenToGuideCompleteRouter = o.G5_FBase_TweenToDropCompleteRouter = o.G5_FBase_MergeToGuideStepRouter = o.G5_FBase_WorldCreateToGuideStart = o.G5_FBase_GuideStepComplete = o.G5_FBase_GuideComplete = o.G5_FBase_GuideDropComplete = o.G5_FBase_GuideStart = o.G5_FBase_GuideSignals = void 0;
var c = e("../../G5_FBase_Namespace"), f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_GuideSignals") ], t);
}(ae.SignalAtom);
o.G5_FBase_GuideSignals = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_GuideStart") ], t);
}(ae.SignalAtom);
o.G5_FBase_GuideStart = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_GuideDropComplete") ], t);
}(ae.SignalAtom);
o.G5_FBase_GuideDropComplete = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_GuideComplete") ], t);
}(ae.SignalAtom);
o.G5_FBase_GuideComplete = d;
var l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_GuideStepComplete") ], t);
}(ae.SignalAtom);
o.G5_FBase_GuideStepComplete = l;
var y = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GameInit"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameInit", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_GuideStart"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideStart", void 0);
return i([ ae.atomClass("G5_FBase_WorldCreateToGuideStart") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_WorldCreateToGuideStart = y;
var _ = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_MergeComplete"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "mergeComplete", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_GuideStepComplete"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideStepComplete", void 0);
return i([ ae.atomClass("G5_FBase_MergeToGuideStepRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_MergeToGuideStepRouter = _;
var m = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GuideSignals"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_GuideDropComplete"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideDropComplete", void 0);
return i([ ae.atomClass("G5_FBase_TweenToDropCompleteRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_TweenToDropCompleteRouter = m;
var g = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GuideSignals"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_GuideComplete"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideComplete", void 0);
return i([ ae.atomClass("G5_FBase_TweenToGuideCompleteRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_TweenToGuideCompleteRouter = g;
var h = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GuideComplete"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideStart", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_NewGame"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "newGame", void 0);
return i([ ae.atomClass("G5_FBase_TweenToNewGameRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_TweenToNewGameRouter = h;
var v = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.guideDomain.collect()[0];
e && this.guideDomain.guideData.isActive[e] || (this.router.dispatchAction = ae.DispatchAction.Cancel);
};
var o, n;
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_MergeToGuideStepRouter"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_MergeToGuideStepFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_MergeToGuideStepFilter = v;
var b = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.guideStartLogic.storage.hasCompletedGuide || (this.router.dispatchAction = ae.DispatchAction.Cancel);
};
var o, n;
i([ ae.bindAtom("G5_FBase_OnGuideStart"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideStartLogic", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_GameInitToNewGame"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_NewGameGuideFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_NewGameGuideFilter = b;
var F = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e, t, o, n, a, i, r = this.guideDomain.collect()[0];
if (r) {
var f = this.guideDomain.guideData;
if (f.isActive[r]) {
var s = f.currentStep[r], u = this.guideConfig.steps;
if (!(s >= u.length)) {
var d = u[s].targetTiles, l = this.tileDomain.tileData, y = [];
try {
for (var _ = p(this.tileDomain.collect()), m = _.next(); !m.done; m = _.next()) {
var g = m.value;
l.state[g] === c.G5_FBase.TileState.Connected && y.push({
row: l.row[g],
col: l.col[g],
chainIndex: l.chainIndex[g]
});
}
} catch (t) {
e = {
error: t
};
} finally {
try {
m && !m.done && (t = _.return) && t.call(_);
} finally {
if (e) throw e.error;
}
}
var h = !0, v = function(e) {
if (!y.some(function(t) {
return t.row === e.row && t.col === e.col;
})) {
h = !1;
return "break";
}
};
try {
for (var b = p(d), F = b.next(); !F.done && "break" !== v(F.value); F = b.next()) ;
} catch (e) {
o = {
error: e
};
} finally {
try {
F && !F.done && (n = b.return) && n.call(b);
} finally {
if (o) throw o.error;
}
}
if (!h) {
this.router.dispatchAction = ae.DispatchAction.Cancel;
try {
for (var G = p(this.tileDomain.collect()), A = G.next(); !A.done; A = G.next()) {
g = A.value;
if (l.state[g] === c.G5_FBase.TileState.Connected) {
l.state.set(g, c.G5_FBase.TileState.Normal);
l.chainIndex.set(g, -1);
this.syncGlowState(g, c.G5_FBase.TileState.Normal, 0);
}
}
} catch (e) {
a = {
error: e
};
} finally {
try {
A && !A.done && (i = G.return) && i.call(G);
} finally {
if (a) throw a.error;
}
}
var B = this.gameDomain.collect()[0];
if (B) {
var T = this.gameDomain.gameData;
T.isConnecting.set(B, !1);
T.startValue.set(B, 0);
T.lastChainValue.set(B, 0);
T.chainLength.set(B, 0);
T.chainPreviewValue.set(B, 0);
T.touchRow.set(B, -1);
T.touchCol.set(B, -1);
T.mergeCount.set(B, 0);
T.gameState.set(B, c.G5_FBase.GameState.Idle);
}
}
}
}
}
};
var o, n, f, s, u, d;
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.bindAtom("G5_FBase_GuideConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideConfig", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_SyncGlowState"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "syncGlowState", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_TouchToMergeRouter"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_GuideMergeFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_GuideMergeFilter = F;
var G = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_GuideStepUpdate") ], t);
}(ae.SignalAtom);
o.G5_FBase_GuideStepUpdate = G;
var A = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_DropComplete"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "dropComplete", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_GuideStepUpdate"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideStepUpdate", void 0);
return i([ ae.atomClass("G5_FBase_DropToGuideStepUpdateRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_DropToGuideStepUpdateRouter = A;
var B = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.guideDomain.collect()[0];
if (e) {
var t = this.guideDomain.guideData;
t.isActive[e] ? t.isCompleted[e] && (this.router.dispatchAction = ae.DispatchAction.Cancel) : this.router.dispatchAction = ae.DispatchAction.Cancel;
} else this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var o, n;
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_DropToGuideStepUpdateRouter"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_DropToGuideStepUpdateFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_DropToGuideStepUpdateFilter = B;
var T = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.guideDomain.collect()[0];
e && this.guideDomain.guideData.isActive[e] && (this.router.dispatchAction = ae.DispatchAction.Cancel);
};
var o, n;
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_DropToFillRouter"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_GuideFillFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_GuideFillFilter = T;
var O = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.guideDomain.collect()[0];
if (e && this.guideDomain.guideData.isActive[e]) {
var t = this.screenToGrid(this.pointer.localX, this.pointer.localY), o = t.row, n = t.col;
o < 0 || n < 0 ? this.router.dispatchAction = ae.DispatchAction.Cancel : this.isTargetTile(o, n) || (this.router.dispatchAction = ae.DispatchAction.Cancel);
}
};
var o, n, p, c, f;
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.bindAtom("G5_FBase_IsTargetTile"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "isTargetTile", void 0);
i([ ae.bindAtom("G5_FBase_ScreenToGrid"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "screenToGrid", void 0);
i([ ae.bindAtom("G_FAtom_Pointer"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "pointer", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_GridTouchStart"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_GuideTouchStartFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_GuideTouchStartFilter = O;
var R = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.updateTouchLocalPos(this.pointer.localX, this.pointer.localY);
var e = this.guideDomain.collect()[0];
if (e && this.guideDomain.guideData.isActive[e]) {
var t = this.screenToGrid(this.pointer.localX, this.pointer.localY), o = t.row, n = t.col;
o < 0 || n < 0 || this.isTargetTile(o, n) || (this.router.dispatchAction = ae.DispatchAction.Cancel);
}
};
var o, n, p, c, f, s;
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.bindAtom("G5_FBase_IsTargetTile"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "isTargetTile", void 0);
i([ ae.bindAtom("G5_FBase_ScreenToGrid"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "screenToGrid", void 0);
i([ ae.bindAtom("G_FAtom_Pointer"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "pointer", void 0);
i([ ae.bindAtom("G5_FBase_UpdateTouchLocalPos"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "updateTouchLocalPos", void 0);
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_GridTouchMove"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "router", void 0);
return i([ ae.atomClass("G5_FBase_GuideTouchMoveFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_GuideTouchMoveFilter = R;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_HideRevivePanelFunction: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "aa222ESablOkpYCCJcKfjfl", "G5_FBase_HideRevivePanelFunction");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_HideRevivePanelFunction = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = null != t ? t : e.revivePanelDomain.collect()[0];
if (o) {
var n = e.revivePanelDomain.revivePanelData;
n.visible.set(o, !1);
n.progress.set(o, 0);
}
};
};
var o;
i([ ae.bindAtom("G5_FBase_RevivePanelDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "revivePanelDomain", void 0);
return i([ ae.atomClass("G5_FBase_HideRevivePanelFunction") ], t);
}(ae.FunctionAtom);
o.G5_FBase_HideRevivePanelFunction = p;
cc._RF.pop();
}, {} ],
G5_FBase_InterstitialAd: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "67361jiqchPeYiv3TWpTc4j", "G5_FBase_InterstitialAd");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_CheckGoalAd = o.G5_FBase_PreloadInterstitialAdOnNetworkRestored = o.G5_FBase_PreloadInterstitialAdOnHostActive = o.G5_FBase_PreloadInterstitialAdOnAdResult = o.G5_FBase_PreloadInterstitialAdOnGameInit = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.loadInterstitialAd();
};
var o, n;
i([ ae.onChain, ae.bindAtom("G5_FBase_GameInit"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameInit", void 0);
i([ ae.bindAtom("G_FAtom_ADLoadInterstitialAd"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "loadInterstitialAd", void 0);
return i([ ae.atomClass("G5_FBase_PreloadInterstitialAdOnGameInit") ], t);
}(ae.LogicAtom);
o.G5_FBase_PreloadInterstitialAdOnGameInit = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.adResult.state === ae.AdResultState.Success && this.loadInterstitialAd();
};
var o, n, p;
i([ ae.onChain, ae.bindAtom("G5_FBase_AdResultSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "adResultSignal", void 0);
i([ ae.bindAtom("G_FAtom_ADResult"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "adResult", void 0);
i([ ae.bindAtom("G_FAtom_ADLoadInterstitialAd"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "loadInterstitialAd", void 0);
return i([ ae.atomClass("G5_FBase_PreloadInterstitialAdOnAdResult") ], t);
}(ae.LogicAtom);
o.G5_FBase_PreloadInterstitialAdOnAdResult = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.loadInterstitialAd();
};
var o, n;
i([ ae.onChain, ae.bindAtom("G5_FBase_HostActiveSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "hostActiveSignal", void 0);
i([ ae.bindAtom("G_FAtom_ADLoadInterstitialAd"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "loadInterstitialAd", void 0);
return i([ ae.atomClass("G5_FBase_PreloadInterstitialAdOnHostActive") ], t);
}(ae.LogicAtom);
o.G5_FBase_PreloadInterstitialAdOnHostActive = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.loadInterstitialAd();
};
var o, n;
i([ ae.onChain, ae.bindAtom("G5_FBase_NetworkRestoredSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "networkRestoredSignal", void 0);
i([ ae.bindAtom("G_FAtom_ADLoadInterstitialAd"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "loadInterstitialAd", void 0);
return i([ ae.atomClass("G5_FBase_PreloadInterstitialAdOnNetworkRestored") ], t);
}(ae.LogicAtom);
o.G5_FBase_PreloadInterstitialAdOnNetworkRestored = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.adState.runtime, o = e.dateNow();
t.coldStartTimeMs <= 0 && (t.coldStartTimeMs = o);
var n = 1e3 * e.adConfig.coldStartAdDelaySec, a = 1e3 * e.adConfig.interstitialIntervalSec;
if (!t.hasPlayedAdSinceColdStart) {
if (o - t.coldStartTimeMs < n) return !1;
if (!e.canShowRewardedAd()) return !1;
e.showInterstitialAd();
return !0;
}
if (t.lastAdTimeMs <= 0) return !1;
if (o - t.lastAdTimeMs < a) return !1;
if (!e.canShowRewardedAd()) return !1;
e.showInterstitialAd();
return !0;
};
};
var o, n, p, c, f;
i([ ae.bindAtom("G5_FBase_AdConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "adConfig", void 0);
i([ ae.bindAtom("G5_FBase_AdState"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "adState", void 0);
i([ ae.bindAtom("G_FAtom_DateNow"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "dateNow", void 0);
i([ ae.bindAtom("G_FAtom_ADShowInterstitial"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "showInterstitialAd", void 0);
i([ ae.bindAtom("G5_FBase_CanShowRewardedAdFunction"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "canShowRewardedAd", void 0);
return i([ ae.atomClass("G5_FBase_CheckGoalAd") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CheckGoalAd = u;
cc._RF.pop();
}, {} ],
G5_FBase_IsAdjacent: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6ce49tTQwNE3pWRoOgmlgK7", "G5_FBase_IsAdjacent");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_IsAdjacent = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n, a) {
var i = e.abs(t - n), r = e.abs(o - a);
return i <= 1 && r <= 1 && i + r > 0;
};
};
var o;
i([ ae.bindAtom("G_FAtom_MathAbs"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "abs", void 0);
return i([ ae.atomClass("G5_FBase_IsAdjacent") ], t);
}(ae.FunctionAtom);
o.G5_FBase_IsAdjacent = p;
cc._RF.pop();
}, {} ],
G5_FBase_IsGuideTargetTile: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "df9farTAFhJK4rHbS0Dg2Sj", "G5_FBase_IsGuideTargetTile");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_IsGuideTargetTile = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n = e.gameDomain.collect()[0];
if (!n) return !1;
if (!e.gameDomain.gameData.isGuideMode[n]) return !1;
var a = e.guideDomain.collect()[0];
if (!a) return !1;
var i = e.guideDomain.guideData.currentStep[a] || 0, r = e.guideConfig.steps;
return !(i >= r.length) && r[i].targetTiles.some(function(e) {
return e.row === t && e.col === o;
});
};
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.bindAtom("G5_FBase_GuideConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "guideConfig", void 0);
return i([ ae.atomClass("G5_FBase_IsGuideTargetTile") ], t);
}(ae.FunctionAtom);
o.G5_FBase_IsGuideTargetTile = p;
cc._RF.pop();
}, {} ],
G5_FBase_IsScoreActive: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4bae5mti2tLK5jKYrGpylki", "G5_FBase_IsScoreActive");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_IsScoreActive = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.gameDomain.gameData;
return !o.isConnecting[t] || o.chainLength[t] < 2;
};
};
var o;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
return i([ ae.atomClass("G5_FBase_IsScoreActive") ], t);
}(ae.FunctionAtom);
o.G5_FBase_IsScoreActive = p;
cc._RF.pop();
}, {} ],
G5_FBase_IsScorePopupActive: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c88e2/wdOtDeJWKuSlWgoDg", "G5_FBase_IsScorePopupActive");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_IsScorePopupActive = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.scorePopupDomain.scorePopupData;
return o.alpha[t] > 0 && o.score[t] > 0;
};
};
var o;
i([ ae.bindAtom("G5_FBase_ScorePopupDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "scorePopupDomain", void 0);
return i([ ae.atomClass("G5_FBase_IsScorePopupActive") ], t);
}(ae.FunctionAtom);
o.G5_FBase_IsScorePopupActive = p;
cc._RF.pop();
}, {} ],
G5_FBase_KeyboardBackRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "69a47olwbxEPo1cORSnUxl8", "G5_FBase_KeyboardBackRouter");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_KeyboardBackConfirmFilter = o.G5_FBase_KeyboardBackConfirmRouter = o.G5_FBase_KeyboardBackFilter = o.G5_FBase_KeyboardBackRouter = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_Keyboard"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "keyboard", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_ExitGame"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "exitGame", void 0);
return i([ ae.atomClass("G5_FBase_KeyboardBackRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_KeyboardBackRouter = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e, t, o = this.keyboard, n = o.keyCode, a = o.isDown, i = n === ae.KeyCode.MobileBack || n === ae.KeyCode.Escape, r = null !== (t = null === (e = this.getLaunchParams().app) || void 0 === e ? void 0 : e.isMiniGameBackKeyUnified) && void 0 !== t && t;
console.log("isDown: " + a + ", isBackKey: " + i + ", isMiniGameBackKeyUnified1: " + r);
this.router.dispatchAction = a && i && !r ? ae.DispatchAction.FireOnce : ae.DispatchAction.Cancel;
};
var o, n, p;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_KeyboardBackRouter"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G_FAtom_Keyboard"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "keyboard", void 0);
i([ ae.bindAtom("G_FAtom_GetLaunchParams"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "getLaunchParams", void 0);
return i([ ae.atomClass("G5_FBase_KeyboardBackFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_KeyboardBackFilter = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_Keyboard"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "keyboard", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_BackConfirmUiShow"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "backConfirmUiShow", void 0);
return i([ ae.atomClass("G5_FBase_KeyboardBackConfirmRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_KeyboardBackConfirmRouter = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
lastTriggerTime: 0
};
};
t.prototype.onExecute = function(e, t) {
var o, n, a = this.keyboard, i = a.keyCode, r = a.isDown, p = i === ae.KeyCode.MobileBack || i === ae.KeyCode.Escape, c = null !== (n = null === (o = this.getLaunchParams().app) || void 0 === o ? void 0 : o.isMiniGameBackKeyUnified) && void 0 !== n && n;
console.log("isDown: " + r + ", isBackKey: " + p + ", isMiniGameBackKeyUnified2: " + c);
if (r && p && c) {
var f = Array.from(this.backConfirmUiDomain.collect()).length > 0, s = this.worldUpdate.worldTime;
if (!f && t.runtime.lastTriggerTime > 0 && s - t.runtime.lastTriggerTime < 1) this.router.dispatchAction = ae.DispatchAction.Cancel; else {
t.runtime.lastTriggerTime = s;
this.router.dispatchAction = ae.DispatchAction.FireOnce;
}
} else this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var o, n, p, c, f;
i([ ae.routeDispatch, ae.onChain, ae.bindAtom("G5_FBase_KeyboardBackConfirmRouter"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G_FAtom_Keyboard"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "keyboard", void 0);
i([ ae.bindAtom("G_FAtom_GetLaunchParams"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "getLaunchParams", void 0);
i([ ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "worldUpdate", void 0);
i([ ae.bindAtom("G5_FBase_BackConfirmUiDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "backConfirmUiDomain", void 0);
return i([ ae.atomClass("G5_FBase_KeyboardBackConfirmFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_KeyboardBackConfirmFilter = s;
cc._RF.pop();
}, {} ],
G5_FBase_LevelUpConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "05661AubgNN/olqJt+ZcxPJ", "G5_FBase_LevelUpConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_LevelUpConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
panelInStartTime: 0,
panelInEndTime: .33,
panelInStartScale: 0,
panelInEndScale: 1,
textStartTime: .23,
textInAnim: "in",
textLoopAnim: "init",
textOutAnim: "out",
buttonInStartTime: .66,
buttonInEndTime: 1,
buttonInStartScale: 0,
buttonInEndScale: 1,
blockScaleUpStartTime: .5,
blockScaleUpEndTime: .76,
blockScaleUpTarget: 1.2,
blockScaleDownStartTime: .76,
blockScaleDownEndTime: .93,
blockScaleDownTarget: 1,
blockBounceDownStartTime: .93,
blockBounceDownEndTime: 1.06,
blockBounceDownTarget: .9,
blockBounceUpStartTime: 1.06,
blockBounceUpEndTime: 1.2,
blockBounceUpTarget: 1,
fireworkAnim: "in",
frontEffectInAnim: "in",
frontEffectLoopAnim: "init",
backEffectInAnim: "in",
backEffectInDuration: .5,
backEffectLoopAnim: "init",
backEffectOutAnim: "out",
effectStartTime: .5,
textInDuration: .5,
panelOutStartTime: 0,
panelOutEndTime: .33,
panelOutStartScale: 1,
panelOutEndScale: 0,
blockCardSize: 130,
dialogBgHeight: 370,
dialogCenterYOffset: .1,
blockCardY: 13.488,
panelY: 114,
crownY: 64.196,
crownScale: .77,
blockInnerWidth: 118,
blockInnerHeight: 120,
maskAlpha: .6,
rootZIndex: 1e3
};
};
return i([ ae.atomClass("G5_FBase_LevelUpConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_LevelUpConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_LevelUpData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b1a69lXF7RA8ra5goApmQVh", "G5_FBase_LevelUpData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_LevelUpData = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
visible: !1,
value: 0,
panelScale: 0,
closeBtnScale: 0,
continueBtnScale: 0,
blockScale: 0,
textSpineAnim: "",
fireworkSpineAnim: "",
frontEffectSpineAnim: "",
backEffectSpineAnim: "",
backEffectLoop: !1,
isAnimating: !1
};
};
return i([ ae.atomClass("G5_FBase_LevelUpData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_LevelUpData = r;
cc._RF.pop();
}, {} ],
G5_FBase_LevelUpDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "991ffS/YWdIVKE1N2mTJPeT", "G5_FBase_LevelUpDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_LevelUpDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelUpData", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_LevelUpDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_LevelUpFrontCompleteSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "daf4cOSWUpG2ZlErRKzQAXk", "G5_FBase_LevelUpFrontCompleteSignal");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_LevelUpFrontComplete = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "levelUpDomain", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpFrontComplete") ], t);
}(ae.SignalAtom);
o.G5_FBase_LevelUpFrontComplete = p;
cc._RF.pop();
}, {} ],
G5_FBase_LevelUpFrontCompleteToLevelUpFrontInCompleteRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e8237MbC7hNY4OL9nE/QyoV", "G5_FBase_LevelUpFrontCompleteToLevelUpFrontInCompleteRouter");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_LevelUpFrontCompleteToLevelUpFrontInCompleteFilter = o.G5_FBase_LevelUpFrontCompleteToLevelUpFrontInCompleteTransformFilter = o.G5_FBase_LevelUpFrontCompleteToLevelUpFrontInCompleteRouter = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_LevelUpFrontComplete"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "frontComplete", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G5_FBase_LevelUpFrontInComplete"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "frontInComplete", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpFrontCompleteToLevelUpFrontInCompleteRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_LevelUpFrontCompleteToLevelUpFrontInCompleteRouter = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.router.transformedEidList = this.levelUpDomain.collect().slice();
};
var o, n;
i([ ae.routeTransform, ae.onChain, ae.bindAtom("G5_FBase_LevelUpFrontCompleteToLevelUpFrontInCompleteRouter"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelUpDomain", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpFrontCompleteToLevelUpFrontInCompleteTransformFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_LevelUpFrontCompleteToLevelUpFrontInCompleteTransformFilter = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
this.levelUpDomain.levelUpData.frontEffectSpineAnim[e] !== this.cfg.frontEffectInAnim ? this.router.filterAction[e] = ae.FilterAction.Cancel : this.router.filterAction[e] = ae.FilterAction.FireOnce;
};
var o, n, p;
i([ ae.routeFilter, ae.onChain, ae.bindAtom("G5_FBase_LevelUpFrontCompleteToLevelUpFrontInCompleteRouter"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelUpDomain", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "cfg", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpFrontCompleteToLevelUpFrontInCompleteFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_LevelUpFrontCompleteToLevelUpFrontInCompleteFilter = f;
cc._RF.pop();
}, {} ],
G5_FBase_LevelUpFrontCompleteToLevelUpFrontInitCompleteRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0a0a3iNjVhMfqzArgcFlkj2", "G5_FBase_LevelUpFrontCompleteToLevelUpFrontInitCompleteRouter");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_LevelUpFrontCompleteToLevelUpFrontInitCompleteFilter = o.G5_FBase_LevelUpFrontCompleteToLevelUpFrontInitCompleteTransformFilter = o.G5_FBase_LevelUpFrontCompleteToLevelUpFrontInitCompleteRouter = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_LevelUpFrontComplete"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "frontComplete", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G5_FBase_LevelUpFrontInitComplete"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "frontInitComplete", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpFrontCompleteToLevelUpFrontInitCompleteRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_LevelUpFrontCompleteToLevelUpFrontInitCompleteRouter = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.router.transformedEidList = this.levelUpDomain.collect().slice();
};
var o, n;
i([ ae.routeTransform, ae.onChain, ae.bindAtom("G5_FBase_LevelUpFrontCompleteToLevelUpFrontInitCompleteRouter"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelUpDomain", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpFrontCompleteToLevelUpFrontInitCompleteTransformFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_LevelUpFrontCompleteToLevelUpFrontInitCompleteTransformFilter = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
this.levelUpDomain.levelUpData.frontEffectSpineAnim[e] !== this.cfg.frontEffectLoopAnim ? this.router.filterAction[e] = ae.FilterAction.Cancel : this.router.filterAction[e] = ae.FilterAction.FireOnce;
};
var o, n, p;
i([ ae.routeFilter, ae.onChain, ae.bindAtom("G5_FBase_LevelUpFrontCompleteToLevelUpFrontInitCompleteRouter"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelUpDomain", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "cfg", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpFrontCompleteToLevelUpFrontInitCompleteFilter") ], t);
}(ae.LogicAtom);
o.G5_FBase_LevelUpFrontCompleteToLevelUpFrontInitCompleteFilter = f;
cc._RF.pop();
}, {} ],
G5_FBase_LevelUpFrontInCompleteSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7b7ebdDX2xPCKs1xYFSpuXt", "G5_FBase_LevelUpFrontInCompleteSignal");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_LevelUpFrontInComplete = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "levelUpDomain", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpFrontInComplete") ], t);
}(ae.SignalAtom);
o.G5_FBase_LevelUpFrontInComplete = p;
cc._RF.pop();
}, {} ],
G5_FBase_LevelUpFrontInitCompleteSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1c0afLhrKNE678DXXmhhWU7", "G5_FBase_LevelUpFrontInitCompleteSignal");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_LevelUpFrontInitComplete = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "levelUpDomain", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpFrontInitComplete") ], t);
}(ae.SignalAtom);
o.G5_FBase_LevelUpFrontInitComplete = p;
cc._RF.pop();
}, {} ],
G5_FBase_LevelUpLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2032epE+yxHVpPH2gCekdb1", "G5_FBase_LevelUpLogic");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_OnMergeCheckLevelUp = o.G5_FBase_OnLevelUpHidden = o.G5_FBase_OnLevelUpClose = o.G5_FBase_OnLevelUpShow = o.G5_FBase_LevelUpLogic = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_LevelUpLogic") ], t);
}(ae.ConfigAtom);
o.G5_FBase_LevelUpLogic = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.levelUpDomain.collect()[0];
if (e) {
var t = this.levelUpDomain.levelUpData, o = this.gameDomain.collect()[0];
if (o) {
var n = this.gameDomain.gameData, a = this.cfg, i = n.pendingLevelUpValue[o];
if (!(i <= 0)) {
n.pendingLevelUpValue.set(o, 0);
t.visible.set(e, !0);
t.value.set(e, i);
t.panelScale.set(e, a.panelInStartScale);
t.closeBtnScale.set(e, a.buttonInStartScale);
t.continueBtnScale.set(e, a.buttonInStartScale);
t.blockScale.set(e, 0);
t.textSpineAnim.set(e, "");
t.fireworkSpineAnim.set(e, "");
t.frontEffectSpineAnim.set(e, "");
t.backEffectSpineAnim.set(e, "");
t.isAnimating.set(e, !0);
n.gameState.set(o, p.G5_FBase.GameState.LevelUp);
this.gameInitLogic.runtime.gameState = p.G5_FBase.GameState.LevelUp;
var r = a.panelInEndTime - a.panelInStartTime, c = a.buttonInEndTime - a.buttonInStartTime;
this.tween(e, [ [ ae.TweenStepType.To, t, {
panelScale: a.panelInEndScale
}, r, ae.TweenEasing.BackOut ] ]);
this.tween(e, [ [ ae.TweenStepType.Delay, a.textStartTime ], [ ae.TweenStepType.To, t, {
textSpineAnim: a.textInAnim
}, 0 ], [ ae.TweenStepType.Delay, a.textInDuration ], [ ae.TweenStepType.To, t, {
textSpineAnim: a.textLoopAnim
}, 0 ] ]);
var f = a.blockScaleUpEndTime - a.blockScaleUpStartTime, s = a.blockScaleDownEndTime - a.blockScaleDownStartTime, u = a.blockBounceDownEndTime - a.blockBounceDownStartTime, d = a.blockBounceUpEndTime - a.blockBounceUpStartTime;
this.tween(e, [ [ ae.TweenStepType.Delay, a.blockScaleUpStartTime ], [ ae.TweenStepType.To, t, {
blockScale: a.blockScaleUpTarget
}, f, ae.TweenEasing.QuartOut ], [ ae.TweenStepType.To, t, {
blockScale: a.blockScaleDownTarget
}, s, ae.TweenEasing.CubicIn ], [ ae.TweenStepType.To, t, {
blockScale: a.blockBounceDownTarget
}, u, ae.TweenEasing.SineOut ], [ ae.TweenStepType.To, t, {
blockScale: a.blockBounceUpTarget
}, d, ae.TweenEasing.SineIn ] ]);
this.tween(e, [ [ ae.TweenStepType.Delay, a.buttonInStartTime ], [ ae.TweenStepType.To, t, {
closeBtnScale: a.buttonInEndScale,
continueBtnScale: a.buttonInEndScale
}, c, ae.TweenEasing.BackOut ] ]);
t.frontEffectSpineAnim.set(e, a.frontEffectInAnim);
t.backEffectSpineAnim.set(e, a.backEffectInAnim);
this.tween(e, [ [ ae.TweenStepType.Delay, a.backEffectInDuration ], [ ae.TweenStepType.To, t, {
backEffectSpineAnim: a.backEffectLoopAnim
}, 0 ] ]);
t.fireworkSpineAnim.set(e, a.fireworkAnim);
this.tween(e, [ [ ae.TweenStepType.Delay, a.blockBounceUpEndTime ], [ ae.TweenStepType.To, t, {
isAnimating: !1
}, 0 ] ]);
}
}
}
};
var o, n, c, f, s, u;
i([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "levelUpDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "cfg", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "gameInitLogic", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_LevelUpShow"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "levelUpShow", void 0);
return i([ ae.atomClass("G5_FBase_OnLevelUpShow") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnLevelUpShow = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t = this.levelUpDomain.collect()[0];
if (t) {
var o = this.levelUpDomain.levelUpData, n = this.gameDomain.collect()[0];
if (n) {
var a = this.gameDomain.gameData, i = this.cfg;
if (a.gameState[n] === p.G5_FBase.GameState.LevelUp && !o.isAnimating[t]) {
o.isAnimating.set(t, !0);
var r = a.prevMinSpawnValue[n], c = a.prevMaxSpawnValue[n], f = a.minSpawnValue[n], s = a.maxSpawnValue[n], u = this.goalAnimDomain.collect()[0];
if (u) {
var d = this.goalAnimDomain.goalAnimData;
d.leftAnimEnabled.set(u, f !== r);
d.maxSpawnAnimEnabled.set(u, s !== c);
d.rightAnimEnabled.set(u, !0);
}
var l = i.panelOutEndTime - i.panelOutStartTime;
o.blockScale.set(t, 0);
o.textSpineAnim.set(t, i.textOutAnim);
o.backEffectSpineAnim.set(t, i.backEffectOutAnim);
this.tween(t, [ [ ae.TweenStepType.To, o, {
panelScale: i.panelOutEndScale
}, l, ae.TweenEasing.BackIn ], [ ae.TweenStepType.Router, this.hiddenRouter ] ]);
this.playSound(this.config.stageSound);
e && this.tween(e, [ [ ae.TweenStepType.Router, this.progressAnimStartRouter ] ]);
}
}
}
};
var o, n, c, f, s, u, d, l, y, _, m;
i([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "levelUpDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "cfg", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G5_FBase_TweenToLevelUpHiddenRouter"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "hiddenRouter", void 0);
i([ ae.bindAtom("G5_FBase_ProgressAnimStartRouter"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "progressAnimStartRouter", void 0);
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "rootDomain", void 0);
i([ ae.bindAtom("G5_FBase_GoalAnimDomain"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "goalAnimDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_LevelUpClose"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "levelUpClose", void 0);
i([ ae.bindAtom("G5_FBase_PlaySound"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "playSound", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "config", void 0);
return i([ ae.atomClass("G5_FBase_OnLevelUpClose") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnLevelUpClose = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.levelUpDomain.collect()[0];
if (e) {
var t = this.levelUpDomain.levelUpData;
t.visible.set(e, !1);
t.isAnimating.set(e, !1);
t.panelScale.set(e, 0);
t.closeBtnScale.set(e, 0);
t.continueBtnScale.set(e, 0);
t.blockScale.set(e, 0);
t.textSpineAnim.set(e, "");
t.fireworkSpineAnim.set(e, "");
t.frontEffectSpineAnim.set(e, "");
t.backEffectSpineAnim.set(e, "");
}
};
var o, n, p, c, f;
i([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "levelUpDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "gameInitLogic", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_LevelUpHidden"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "levelUpHidden", void 0);
i([ ae.bindAtom("G5_FBase_ShowGoalDialog"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "showGoalDialog", void 0);
return i([ ae.atomClass("G5_FBase_OnLevelUpHidden") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnLevelUpHidden = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineStorageData = function() {
return {};
};
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
if (e) {
var t = this.gameDomain.gameData;
if (!t.isGuideMode[e]) {
var o = t.mergeResultValue[e], n = t.nextTarget[e];
o >= n && n > 0 && t.pendingLevelUpValue.set(e, o);
}
}
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_MergeComplete"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "mergeComplete", void 0);
return i([ ae.atomClass("G5_FBase_OnMergeCheckLevelUp") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnMergeCheckLevelUp = d;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_LevelUpRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9ed8eKZZoNLlZT2AAjUOPoJ", "G5_FBase_LevelUpRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_LevelUpRender = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = this.levelUpDomain.levelUpData, o = this.config.formatThreshold, n = ae.Sprite({
name: "LevelUpCardBgOuter",
img: this.config.commonBgSettingDown,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: 810,
height: 742,
anchorX: .5,
anchorY: .5
}), a = ae.Spine({
name: "LevelUpBackEffect",
spineUrl: this.config.levelUpEffectBackSpine,
anchorX: .5,
anchorY: .5,
y: this.levelUpConfig.blockCardY,
animation: {
name: [ function(e) {
return t.backEffectSpineAnim[e];
}, [ t, "backEffectSpineAnim" ] ],
loop: !0
}
}), i = ae.Sprite({
name: "LevelUpCardBgInner",
img: this.config.commonBgSettingUp,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: 700,
height: 414,
y: 100,
anchorX: .5,
anchorY: .5,
widget: {
alignMode: ae.WidgetAlignMode.Always,
isAlignTop: !0,
top: 100
}
}), r = ae.Spine({
name: "LevelUpFirework",
spineUrl: this.config.levelUpFireworkSpine,
anchorX: .5,
anchorY: .5,
y: this.levelUpConfig.blockCardY,
animation: {
name: [ function(e) {
return t.fireworkSpineAnim[e];
}, [ t, "fireworkSpineAnim" ] ],
loop: !1
}
}), p = ae.Node({
name: "LevelUpPanel",
width: 810,
height: 742,
anchorX: .5,
anchorY: .5,
y: this.levelUpConfig.panelY,
scaleX: [ function(e) {
return t.panelScale[e] || 0;
}, [ t, "panelScale" ] ],
scaleY: [ function(e) {
return t.panelScale[e] || 0;
}, [ t, "panelScale" ] ]
}, n, i, ae.Sprite({
name: "LevelUpTitle",
img: this.config.levelUpTitleText,
y: 314.294
}), a, ae.Node({
name: "LevelUpBlockCard",
y: this.levelUpConfig.blockCardY,
scale: [ function(e) {
return 1.3 * (t.blockScale[e] || 0);
}, [ t, "blockScale" ] ]
}, ae.Sprite({
name: "TileFrameDown",
img: this.frameAsset.frameDown,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: this.levelUpConfig.blockCardSize,
height: this.levelUpConfig.blockCardSize,
rgb: [ function(o) {
return e.getColor(t.value[o]);
}, [ t, "value" ] ]
}), ae.Sprite({
name: "TileFrameUpContent",
img: this.frameAsset.frameUp,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: this.levelUpConfig.blockInnerWidth,
height: this.levelUpConfig.blockInnerHeight,
rgb: [ function(o) {
return e.getColorUp(t.value[o]);
}, [ t, "value" ] ]
}), ae.Text({
name: "LevelUpBlockValue",
text: [ function(n) {
return e.formatNumber(t.value[n], o);
}, [ t, "value" ] ],
font: this.config.numberFont,
fontSize: [ function(o) {
return e.calcFontSize(t.value[o]);
}, [ t, "value" ] ],
horizontalAlign: ae.TextHorizontalAlign.CENTER,
rgb: 16777215,
enableBold: !0
}), ae.Sprite({
name: "LevelUpBlockFrame",
img: this.config.frameGoalBg
}), ae.Sprite({
name: "LevelUpCrown",
img: this.config.crown,
y: this.levelUpConfig.crownY,
anchorY: 0,
scale: [ function(o) {
return (t.blockScale[o] || 0) * e.levelUpConfig.crownScale;
}, [ t, "blockScale" ] ]
})), ae.Spine({
name: "LevelUpTextSpine",
spineUrl: this.config.levelUpTextSpine,
y: 205,
animation: {
name: [ function(e) {
return t.textSpineAnim[e];
}, [ t, "textSpineAnim" ] ],
loop: !1
}
}), ae.Spine({
name: "LevelUpFrontEffect",
spineUrl: this.config.levelUpEffectFrontSpine,
y: this.levelUpConfig.blockCardY,
animation: {
name: [ function(e) {
return t.frontEffectSpineAnim[e];
}, [ t, "frontEffectSpineAnim" ] ],
loop: !1
},
event: {
complete: this.frontCompleteRouter
}
}), r, ae.Sprite({
name: "LevelUpCloseBtn",
img: this.config.commonBtnClose,
x: 351.908,
y: 320,
button: {
enabled: !0,
interactable: !0,
transition: ae.ButtonTransition.Color
},
event: {
buttonClick: this.closeRouter
}
}), ae.Sprite({
name: "ContinueBtn",
img: this.config.levelUpContinueBtn,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: 482,
height: 152,
y: -255,
button: {
enabled: !0,
interactable: !0,
transition: ae.ButtonTransition.Color
},
event: {
buttonClick: this.closeRouter
}
}));
return ae.Node({
name: "LevelUpRoot",
anchorX: .5,
anchorY: .5,
zIndex: this.levelUpConfig.rootZIndex,
active: [ function(e) {
return t.visible[e];
}, [ t, "visible" ] ],
widget: {
alignMode: ae.WidgetAlignMode.Always,
isAlignBottom: !0,
bottom: 0,
isAlignLeft: !0,
left: 0,
isAlignRight: !0,
right: 0,
isAlignTop: !0,
top: 0
},
blockInputEvents: !0
}, ae.Sprite({
name: "LevelUpMask",
img: this.config.white,
sizeMode: ae.SizeMode.Custom,
rgb: 0,
alpha: [ function(o) {
return (t.panelScale[o] || 0) * e.levelUpConfig.maskAlpha;
}, [ t, "panelScale" ] ],
widget: {
alignMode: ae.WidgetAlignMode.Always,
isAlignBottom: !0,
bottom: 0,
isAlignLeft: !0,
left: 0,
isAlignRight: !0,
right: 0,
isAlignTop: !0,
top: 0
}
}), p);
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p, c, f, s, u, d, l, y, _;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "levelUpDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "levelUpConfig", void 0);
i([ ae.bindAtom("G5_FBase_FormatNumber"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "formatNumber", void 0);
i([ ae.bindAtom("G5_FBase_GetColor"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getColor", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpCloseRouter"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "closeRouter", void 0);
i([ ae.bindAtom("G5_FBase_UIEventToLevelUpFrontCompleteRouter"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "frontCompleteRouter", void 0);
i([ ae.bindAtom("G_FAtom_GetWinSize"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "getWinSize", void 0);
i([ ae.bindAtom("G5_FBase_FrameAssetConfig"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "frameAsset", void 0);
i([ ae.bindAtom("G5_FBase_GetColorUp"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "getColorUp", void 0);
i([ ae.bindAtom("G5_FBase_CalcFontSize"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "calcFontSize", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_LevelUpRender = p;
cc._RF.pop();
}, {} ],
G5_FBase_LevelUpRouters: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "78da9ikQCxI+LQ0QAGKQgpw", "G5_FBase_LevelUpRouters");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_TweenToLevelUpHiddenRouter = o.G5_FBase_TweenToLevelUpShowRouter = o.G5_FBase_LevelUpCloseRouter = o.G5_FBase_LevelUpRouters = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_LevelUpRouters") ], t);
}(ae.ConfigAtom);
o.G5_FBase_LevelUpRouters = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_LevelUpClose"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelUpClose", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpCloseRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_LevelUpCloseRouter = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GameSignals"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameSignals", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_LevelUpShow"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelUpShow", void 0);
return i([ ae.atomClass("G5_FBase_TweenToLevelUpShowRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_TweenToLevelUpShowRouter = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GameSignals"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameSignals", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_LevelUpHidden"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelUpHidden", void 0);
return i([ ae.atomClass("G5_FBase_TweenToLevelUpHiddenRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_TweenToLevelUpHiddenRouter = s;
cc._RF.pop();
}, {} ],
G5_FBase_LevelUpSignals: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bd7ebcUay5MmI4ShQPYiOqz", "G5_FBase_LevelUpSignals");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_LevelUpHidden = o.G5_FBase_LevelUpClose = o.G5_FBase_LevelUpShow = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpShow") ], t);
}(ae.SignalAtom);
o.G5_FBase_LevelUpShow = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpClose") ], t);
}(ae.SignalAtom);
o.G5_FBase_LevelUpClose = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_LevelUpHidden") ], t);
}(ae.SignalAtom);
o.G5_FBase_LevelUpHidden = f;
cc._RF.pop();
}, {} ],
G5_FBase_Load: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b25ed4yTmRLjKSDqIcyWP13", "G5_FBase_Load");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_Load = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineLoad = function() {
return {
directories: this.dirAsset.allRes
};
};
var o;
i([ ae.bindAtom("G5_FBase_DirAsset"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "dirAsset", void 0);
return i([ ae.atomClass("G5_FBase_Load") ], t);
}(ae.LoadAtom);
o.G5_FBase_Load = p;
cc._RF.pop();
}, {} ],
G5_FBase_Log2: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "89225En8PBHgZHXc7D4QWX1", "G5_FBase_Log2");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_Log2 = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
for (var o = 0, n = t; n > 1; ) {
n = e.floor(n / 2);
o++;
}
return o;
};
};
var o;
i([ ae.bindAtom("G_FAtom_MathFloor"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "floor", void 0);
return i([ ae.atomClass("G5_FBase_Log2") ], t);
}(ae.FunctionAtom);
o.G5_FBase_Log2 = p;
cc._RF.pop();
}, {} ],
G5_FBase_MainBgData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "99c66Em8o9MdasNfoNMKBJn", "G5_FBase_MainBgData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_MainBgData = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
active: !0
};
};
return i([ ae.atomClass("G5_FBase_MainBgData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_MainBgData = r;
cc._RF.pop();
}, {} ],
G5_FBase_MainBgDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "876a1NIRppJGbmZz6ivCqym", "G5_FBase_MainBgDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_MainBgDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_MainBgData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "mainBgData", void 0);
return i([ ae.atomClass("G5_FBase_MainBgDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_MainBgDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_MainBgRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "922ecs5TwJA1qUdT3S5gXLh", "G5_FBase_MainBgRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_MainBgRender = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this.mainBgDomain.mainBgData;
return ae.Sprite({
name: "MainBg",
img: this.config.mainBg,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
rgb: 16777215,
widget: {
alignMode: ae.WidgetAlignMode.Always,
isAlignBottom: !0,
bottom: 0,
isAlignLeft: !0,
left: 0,
isAlignRight: !0,
right: 0,
isAlignTop: !0,
top: 0
}
}, ae.Graphics({
name: "SolidBg",
zIndex: -1,
widget: {
alignMode: ae.WidgetAlignMode.Always,
isAlignBottom: !0,
bottom: 0,
isAlignLeft: !0,
left: 0,
isAlignRight: !0,
right: 0,
isAlignTop: !0,
top: 0
},
active: [ function(t) {
return e.active[t];
}, [ e, "active" ] ],
draw: [ [ ae.GraphicsCmd.FillColor, 661554 ], [ ae.GraphicsCmd.Rect, -1e3, -2e3, 2e3, 4e3 ], [ ae.GraphicsCmd.Fill ] ]
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_MainBgDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "mainBgDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
return i([ ae.atomClass("G5_FBase_MainBgRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_MainBgRender = p;
cc._RF.pop();
}, {} ],
G5_FBase_MarkConnectionLineDirty: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1a1410dn+9G5KlBFQC6Y4Ka", "G5_FBase_MarkConnectionLineDirty");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_MarkConnectionLineDirty = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.connectionLineDomain.collect()[0];
if (o) {
var n = e.connectionLineDomain.connectionLineData;
n.active.set(o, t);
n.dirtyVersion.set(o, n.dirtyVersion[o] + 1);
if (t) {
var a = e.collectConnectedTiles();
if (a.length > 0) {
var i = a[a.length - 1], r = e.calcTilePos(i.row, i.col), p = e.gameDomain.collect()[0], c = e.gameDomain.gameData, f = p ? c.renderOffsetX[p] : 0, s = p ? c.renderOffsetY[p] : 0;
n.lastTileLocalX.set(o, r.x + f);
n.lastTileLocalY.set(o, r.y - s);
}
}
}
};
};
var o, n, p, c;
i([ ae.bindAtom("G5_FBase_ConnectionLineDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "connectionLineDomain", void 0);
i([ ae.bindAtom("G5_FBase_CollectConnectedTiles"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "collectConnectedTiles", void 0);
i([ ae.bindAtom("G5_FBase_CalcTilePos"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "calcTilePos", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gameDomain", void 0);
return i([ ae.atomClass("G5_FBase_MarkConnectionLineDirty") ], t);
}(ae.FunctionAtom);
o.G5_FBase_MarkConnectionLineDirty = p;
cc._RF.pop();
}, {} ],
G5_FBase_MathUtils: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7cbabSAXBFAqYc718uPvlwG", "G5_FBase_MathUtils");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_RandomWeight2 = o.G5_FBase_RandomWeight1 = o.G5_FBase_MathUtils = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function() {};
};
return i([ ae.atomClass("G5_FBase_MathUtils") ], t);
}(ae.FunctionAtom);
o.G5_FBase_MathUtils = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
void 0 === o && (o = "");
var n = t.reduce(function(e, t) {
return e + t;
}, 0), a = e.mathRandom(0, 1) * n;
"" !== o && console.log(o + " 权重总值: " + n + ", 随机值: " + a);
for (var i = 0, r = 0; r < t.length; r++) if (a <= (i += t[r])) return r;
return t.length - 1;
};
};
var o;
i([ ae.bindAtom("G_FAtom_MathRandom"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "mathRandom", void 0);
return i([ ae.atomClass("G5_FBase_RandomWeight1") ], t);
}(ae.FunctionAtom);
o.G5_FBase_RandomWeight1 = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n) {
void 0 === n && (n = "");
var a = t.reduce(function(e, t) {
return e + t[o];
}, 0), i = e.mathRandom(0, 1) * a;
"" !== n && console.log(n + " 权重总值: " + a + ", 随机值: " + i);
for (var r = 0, p = 0; p < t.length; p++) if (i <= (r += t[p][o])) return p;
return t.length - 1;
};
};
var o;
i([ ae.bindAtom("G_FAtom_MathRandom"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "mathRandom", void 0);
return i([ ae.atomClass("G5_FBase_RandomWeight2") ], t);
}(ae.FunctionAtom);
o.G5_FBase_RandomWeight2 = f;
cc._RF.pop();
}, {} ],
G5_FBase_MergeDelayTrigger: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "14c03ZPMUtJQ4Lg7Pv19AQJ", "G5_FBase_MergeDelayTrigger");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_OnMergeStartDelay = o.G5_FBase_MergeDelayTrigger = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_MergeDelayTrigger") ], t);
}(ae.ConfigAtom);
o.G5_FBase_MergeDelayTrigger = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
if (this.collectConnectedTiles().length < 2) this.tween(e, [ [ ae.TweenStepType.Router, this.mergeCompleteRouter ] ]); else {
var t = this.eliminationAnimConfig.last.totalDuration;
this.tween(e, [ [ ae.TweenStepType.Delay, t ], [ ae.TweenStepType.Router, this.mergeCompleteRouter ] ]);
}
};
var o, n, p, c, f, s, u, d;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_MergeStart"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "mergeStart", void 0);
i([ ae.bindAtom("G5_FBase_CollectConnectedTiles"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "collectConnectedTiles", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "rootDomain", void 0);
i([ ae.bindAtom("G5_FBase_TweenToMergeCompleteRouter"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "mergeCompleteRouter", void 0);
i([ ae.bindAtom("G5_FBase_EliminationAnimConfig"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "eliminationAnimConfig", void 0);
return i([ ae.atomClass("G5_FBase_OnMergeStartDelay") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnMergeStartDelay = c;
cc._RF.pop();
}, {} ],
G5_FBase_MigrateStorageData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "47292qfEqlPkIqZPOUi+zBC", "G5_FBase_MigrateStorageData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_MigrateStorageData = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.gameInitLogic.storage;
if (!(t.dataVersion >= 2)) {
console.log("[MigrateStorage] 迁移存储数据: 实际值 → 幂指数 (v" + t.dataVersion + " → v2)");
if (t.boardSnapshot) {
var o = t.boardSnapshot.split(",").map(Number).map(function(t) {
return t > 0 ? e.log2(t) : 0;
});
t.boardSnapshot = o.join(",");
console.log("[MigrateStorage] boardSnapshot 已迁移");
}
if (t.maxValue > 0) {
var n = t.maxValue;
t.maxValue = e.log2(n);
console.log("[MigrateStorage] maxValue 已迁移:", n, "→", t.maxValue);
}
var a = e.persistentDataLogic.storage;
if (a.historicalMaxValue > 0) {
var i = a.historicalMaxValue;
a.historicalMaxValue = e.log2(i);
console.log("[MigrateStorage] historicalMaxValue 已迁移:", i, "→", a.historicalMaxValue);
}
t.dataVersion = 2;
}
};
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_Log2"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "log2", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameInitLogic", void 0);
i([ ae.bindAtom("G5_FBase_PersistentDataLogic"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "persistentDataLogic", void 0);
return i([ ae.atomClass("G5_FBase_MigrateStorageData") ], t);
}(ae.FunctionAtom);
o.G5_FBase_MigrateStorageData = p;
cc._RF.pop();
}, {} ],
G5_FBase_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "14a12PkoRlG6Z5Pg184ZLfw", "G5_FBase_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "2248 数字合成消除游戏 - 通过拖拽连接相同或相关的数字方块进行合并";
(function(e) {
e.Name = "G5";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FBase"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Rows = 8] = "Rows";
e[e.Cols = 5] = "Cols";
e[e.TriggerRadius = .45] = "TriggerRadius";
})(e.GridConfig || (e.GridConfig = {}));
(function(e) {
e[e.Normal = 0] = "Normal";
e[e.Connected = 1] = "Connected";
e[e.Highlighted = 2] = "Highlighted";
})(e.TileState || (e.TileState = {}));
(function(e) {
e[e.Idle = 0] = "Idle";
e[e.Processing = 1] = "Processing";
e[e.GameOver = 2] = "GameOver";
e[e.RevivePanel = 3] = "RevivePanel";
e[e.GoalDialog = 4] = "GoalDialog";
e[e.LevelUp = 5] = "LevelUp";
})(e.GameState || (e.GameState = {}));
(function(e) {
e[e.Version = 63] = "Version";
e.CreateTime = "2026-01-20T14:29:06.731Z";
})(e.BundleInfo || (e.BundleInfo = {}));
(function(e) {
e.UsrDataGameStart = "usr_data_game_start";
e.UsrDataGameEnd = "usr_data_game_end";
e.GBlastStep = "g_blast_step";
e.GSettingEvent = "g_setting_event";
e.GSetupEvent = "g_setup_event";
e.GGuideEvent = "g_guide_event";
e.GameReviveUiShow = "game_revive_ui_show";
e.GamePopupReviveClick = "game_popup_revive_click";
e.GameReviveSuccess = "game_revive_success";
e.UsrDataAdShow = "usr_data_ad_show";
})(e.TrackEvent || (e.TrackEvent = {}));
(function(e) {
e[e.Fill = 1] = "Fill";
e[e.Entropy = 2] = "Entropy";
e[e.Random = 3] = "Random";
})(e.SpawnStrategy || (e.SpawnStrategy = {}));
})(o.G5_FBase || (o.G5_FBase = {}));
cc._RF.pop();
}, {} ],
G5_FBase_NewGameLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7fe772y3mNCt4knOTmGy6Vi", "G5_FBase_NewGameLogic");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_OnNewGame = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t = this.config, o = t.rows, n = t.cols, a = t.initialDropDuration, i = t.initialRowDelay, r = t.initialGoalTarget, c = t.goalTargetMultiplier, f = this.tileDomain.tileData, s = this.gameDomain.collect()[0];
if (s) {
var u = this.persistentDataLogic.storage, d = this.gameDomain.gameData, l = this.gameInitLogic.storage;
d.gameStartTime.set(s, this.update.worldTime);
var y = !1;
if (d.isRestoredFromSnapshot[s]) {
d.isRestoredFromSnapshot.set(s, !1);
console.log("[NewGame] 恢复盘面 - 保持原 gameId: " + u.gameId + ", 重置 gameStartTime");
} else {
u.gameId = (u.gameId || 0) + 1;
y = !0;
console.log("[NewGame] 开始新游戏 - gameId: " + u.gameId);
}
var _ = !0 === l.isReplay, m = _ ? d.score[s] : 0;
if (_) {
console.log("[NewGame] Replay 模式，保留分数: " + m);
l.isReplay = !1;
}
this.resetGameData(s);
this.onSettingReplay.runtime.replayTriggered = !1;
_ && d.score.set(s, m);
var g = this.goalDialogDomain.collect()[0];
g && this.goalDialogDomain.goalDialogData.showTap.set(g, !0);
d.pendingNewGameGoalDialog.set(s, !0);
this.hideRevivePanel();
for (var h = this.tileDomain.collect(), v = 0, b = h.length; v < b; v++) f.visible.set(h[v], !1);
var F = this.loadBoardSnapshot();
if (F) {
var G = F.values, A = F.score, B = F.maxValue;
d.score.set(s, A);
d.maxValue.set(s, B);
d.displayMaxValue.set(s, B);
this.syncTileMaxValue(B);
var T = this.buildSpawnPool(B);
d.minSpawnValue.set(s, T.minValue);
d.maxSpawnValue.set(s, T.maxValue);
d.displayMinSpawnValue.set(s, T.minValue);
d.displayMaxSpawnValue.set(s, T.maxValue);
var O = B < r ? r : B + c;
d.nextTarget.set(s, O);
d.displayNextTarget.set(s, O);
for (var R = !1, j = 0, C = h.length; j < C; j++) {
var S = h[j], D = f.row[S], w = f.col[S];
if (D >= 0 && D < o && w >= 0 && w < n) {
var I = G[W = D * n + w] || 0;
this.setTileValue(S, I);
f.state.set(S, p.G5_FBase.TileState.Normal);
f.chainIndex.set(S, -1);
f.isNew.set(S, !1);
f.isAnimating.set(S, 0);
f.animOffsetX.set(S, 0);
f.animOffsetY.set(S, 0);
f.animScale.set(S, 1);
f.animAlpha.set(S, 1);
f.visible.set(S, !0);
0 === I && (R = !0);
}
}
if (R) {
console.log("[NewGame] 快照恢复检测到空方块，触发下落填充");
d.pendingNewGameGoalDialog.set(s, !0);
this.tween(e, [ [ ae.TweenStepType.Router, this.dropStartRouter ] ]);
} else {
d.pendingNewGameGoalDialog.set(s, !1);
this.showGoalDialog(e, O);
this.tween(e, [ [ ae.TweenStepType.Router, this.dropCompleteRouter ] ]);
}
} else {
var P = this.config.initialHistoricalMaxValue, x = this.getMaxTileValue(), L = d.maxValue[s], M = x > 0 ? x : L > 0 ? L : P, U = this.gridDomain.count() > 0, E = this.buildSpawnPool(M), k = E.numbers, N = E.weights;
d.maxValue.set(s, M);
d.displayMaxValue.set(s, M);
this.syncTileMaxValue(M);
d.minSpawnValue.set(s, E.minValue);
d.maxSpawnValue.set(s, E.maxValue);
d.displayMinSpawnValue.set(s, E.minValue);
d.displayMaxSpawnValue.set(s, E.maxValue);
var V = M < r ? r : M + c;
d.nextTarget.set(s, V);
d.displayNextTarget.set(s, V);
var z = [];
for (j = 0, C = h.length; j < C; j++) {
S = h[j], D = f.row[S], w = f.col[S];
D >= 0 && D < o && w >= 0 && w < this.config.cols && z.push(S);
}
var Y = -1;
if (U && z.length > 0) {
var H = this.mathRandom(0, 1);
(Y = this.mathFloor(H * z.length)) < 0 && (Y = 0);
Y >= z.length && (Y = z.length - 1);
}
for (var W = 0; W < z.length; W++) {
S = z[W];
var X = (o - 1 - (D = f.row[S])) * i;
I = W === Y ? M : this.getWeightedRandom(k, N);
this.initTileDropAnim(S, I, X);
}
this.saveInitialBoardSnapshot();
if (z.length > 0) {
var Z = (o - 1) * i + a;
d.gameState.set(s, p.G5_FBase.GameState.Processing);
var K = this.gridDomain.collect()[0];
K && this.gridDomain.gridData.isDropping.set(K, !0);
this.tween(e, [ [ ae.TweenStepType.Delay, Z ], [ ae.TweenStepType.Router, this.dropCompleteRouter ] ]);
} else this.tween(e, [ [ ae.TweenStepType.Router, this.dropCompleteRouter ] ]);
if (y) {
this.resetLocalStorageData();
this.traceGameStart();
}
}
}
};
var o, n, c, f, s, u, d, l, y, _, m, g, h, v, b, F, G, A, B, T, O, R, j, C, S, D, w, I, P, x, L, M;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileGlowDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tileGlowDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_GridDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "gridDomain", void 0);
i([ ae.bindAtom("G5_FBase_RevivePanelDomain"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "revivePanelDomain", void 0);
i([ ae.bindAtom("G5_FBase_ResetGameData"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "resetGameData", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_NewGame"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "newGameSignal", void 0);
i([ ae.bindAtom("G5_FBase_GetWeightedRandom"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "getWeightedRandom", void 0);
i([ ae.bindAtom("G5_FBase_BuildSpawnPool"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "buildSpawnPool", void 0);
i([ ae.bindAtom("G5_FBase_GetMaxTileValue"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "getMaxTileValue", void 0);
i([ ae.bindAtom("G_FAtom_MathRandom"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "mathRandom", void 0);
i([ ae.bindAtom("G_FAtom_MathFloor"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "mathFloor", void 0);
i([ ae.bindAtom("G5_FBase_InitTileDropAnim"), r("design:type", "function" == typeof (v = "undefined" != typeof ae && ae.AtomTypeInfer) ? v : Object) ], t.prototype, "initTileDropAnim", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (b = "undefined" != typeof ae && ae.AtomTypeInfer) ? b : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G5_FBase_TweenToGameDropCompleteRouter"), r("design:type", "function" == typeof (F = "undefined" != typeof ae && ae.AtomTypeInfer) ? F : Object) ], t.prototype, "dropCompleteRouter", void 0);
i([ ae.bindAtom("G5_FBase_DropStartRouter"), r("design:type", "function" == typeof (G = "undefined" != typeof ae && ae.AtomTypeInfer) ? G : Object) ], t.prototype, "dropStartRouter", void 0);
i([ ae.bindAtom("G5_FBase_LoadBoardSnapshot"), r("design:type", "function" == typeof (A = "undefined" != typeof ae && ae.AtomTypeInfer) ? A : Object) ], t.prototype, "loadBoardSnapshot", void 0);
i([ ae.bindAtom("G5_FBase_SetTileValueWithPower"), r("design:type", "function" == typeof (B = "undefined" != typeof ae && ae.AtomTypeInfer) ? B : Object) ], t.prototype, "setTileValue", void 0);
i([ ae.bindAtom("G5_FBase_PersistentDataLogic"), r("design:type", "function" == typeof (T = "undefined" != typeof ae && ae.AtomTypeInfer) ? T : Object) ], t.prototype, "persistentDataLogic", void 0);
i([ ae.bindAtom("G_FAtom_DateNow"), r("design:type", "function" == typeof (O = "undefined" != typeof ae && ae.AtomTypeInfer) ? O : Object) ], t.prototype, "dateNow", void 0);
i([ ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (R = "undefined" != typeof ae && ae.AtomTypeInfer) ? R : Object) ], t.prototype, "update", void 0);
i([ ae.bindAtom("G5_FBase_ResetLocalStorageData"), r("design:type", "function" == typeof (j = "undefined" != typeof ae && ae.AtomTypeInfer) ? j : Object) ], t.prototype, "resetLocalStorageData", void 0);
i([ ae.bindAtom("G5_FBase_SyncTileMaxValue"), r("design:type", "function" == typeof (C = "undefined" != typeof ae && ae.AtomTypeInfer) ? C : Object) ], t.prototype, "syncTileMaxValue", void 0);
i([ ae.bindAtom("G5_FBase_GoalDialogDomain"), r("design:type", "function" == typeof (S = "undefined" != typeof ae && ae.AtomTypeInfer) ? S : Object) ], t.prototype, "goalDialogDomain", void 0);
i([ ae.bindAtom("G5_FBase_ShowGoalDialog"), r("design:type", "function" == typeof (D = "undefined" != typeof ae && ae.AtomTypeInfer) ? D : Object) ], t.prototype, "showGoalDialog", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (w = "undefined" != typeof ae && ae.AtomTypeInfer) ? w : Object) ], t.prototype, "gameInitLogic", void 0);
i([ ae.bindAtom("G5_FBase_OnGuideStart"), r("design:type", "function" == typeof (I = "undefined" != typeof ae && ae.AtomTypeInfer) ? I : Object) ], t.prototype, "guideStartLogic", void 0);
i([ ae.bindAtom("G5_FBase_TraceGameStart"), r("design:type", "function" == typeof (P = "undefined" != typeof ae && ae.AtomTypeInfer) ? P : Object) ], t.prototype, "traceGameStart", void 0);
i([ ae.bindAtom("G5_FBase_SaveInitialBoardSnapshot"), r("design:type", "function" == typeof (x = "undefined" != typeof ae && ae.AtomTypeInfer) ? x : Object) ], t.prototype, "saveInitialBoardSnapshot", void 0);
i([ ae.bindAtom("G5_FBase_OnSettingReplay"), r("design:type", "function" == typeof (L = "undefined" != typeof ae && ae.AtomTypeInfer) ? L : Object) ], t.prototype, "onSettingReplay", void 0);
i([ ae.bindAtom("G5_FBase_HideRevivePanelFunction"), r("design:type", "function" == typeof (M = "undefined" != typeof ae && ae.AtomTypeInfer) ? M : Object) ], t.prototype, "hideRevivePanel", void 0);
return i([ ae.atomClass("G5_FBase_OnNewGame") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnNewGame = c;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_NextPowerOf2: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "21bc9PysaVGmqg7Z34gWjBU", "G5_FBase_NextPowerOf2");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_NextPowerOf2 = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function(e) {
for (var t = 1, o = 0; t < e; ) {
t *= 2;
o++;
}
return o;
};
};
return i([ ae.atomClass("G5_FBase_NextPowerOf2") ], t);
}(ae.FunctionAtom);
o.G5_FBase_NextPowerOf2 = r;
cc._RF.pop();
}, {} ],
G5_FBase_OnLevelUpFrontInCompleteLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fbd3eLZntRAXZoNKTKb9Yqb", "G5_FBase_OnLevelUpFrontInCompleteLogic");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_OnLevelUpFrontInComplete = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
this.levelUpDomain.levelUpData.frontEffectSpineAnim.set(e, this.cfg.frontEffectLoopAnim);
};
var o, n, p;
i([ ae.onChain, ae.bindAtom("G5_FBase_LevelUpFrontInComplete"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "frontInComplete", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelUpDomain", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "cfg", void 0);
return i([ ae.atomClass("G5_FBase_OnLevelUpFrontInComplete") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnLevelUpFrontInComplete = p;
cc._RF.pop();
}, {} ],
G5_FBase_OnLevelUpFrontInitCompleteLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bf3a5F3tQFIZ7T6f1Nhzfx8", "G5_FBase_OnLevelUpFrontInitCompleteLogic");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_OnLevelUpFrontInitComplete = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t = this.levelUpDomain.levelUpData;
this.stopTween(e, "frontEffectLoop");
this.tween(e, [ [ ae.TweenStepType.Delay, 3 ], [ ae.TweenStepType.To, t, {
frontEffectSpineAnim: ""
}, 0 ], [ ae.TweenStepType.To, t, {
frontEffectSpineAnim: this.cfg.frontEffectLoopAnim
}, 0 ] ], "frontEffectLoop");
};
var o, n, p, c, f;
i([ ae.onChain, ae.bindAtom("G5_FBase_LevelUpFrontInitComplete"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "frontInitComplete", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelUpDomain", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "cfg", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_StopTween"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "stopTween", void 0);
return i([ ae.atomClass("G5_FBase_OnLevelUpFrontInitComplete") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnLevelUpFrontInitComplete = p;
cc._RF.pop();
}, {} ],
G5_FBase_OnMergeComplete: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "39f6eZ6Q4lPo5nNMKHGzeN3", "G5_FBase_OnMergeComplete");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_OnMergeComplete = o.G5_FBase_ShowComboPopup = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n) {
var a = e.comboPopupDomain.collect()[0];
if (a) {
var i = e.comboPopupDomain.comboPopupData;
i.row.set(a, n.row[t]);
i.col.set(a, n.col[t]);
i.comboCount.set(a, o);
i.alpha.set(a, 0);
i.animName.set(a, "");
i.numAlpha.set(a, 0);
var r = e.scorePopupConfig.riseDuration, p = e.comboPopupConfig.spineDuration;
e.tween(a, [ [ ae.TweenStepType.Delay, r ], [ ae.TweenStepType.To, i, {
alpha: 1,
animName: e.comboPopupConfig.animName
}, 0 ], [ ae.TweenStepType.Delay, p ], [ ae.TweenStepType.To, i, {
alpha: 0,
comboCount: 0,
animName: "",
numAlpha: 0
}, 0 ] ]);
e.tweenSlotAlpha(a, i, "numAlpha", {
fadeInDuration: e.comboPopupConfig.numFadeInDuration,
holdDuration: e.comboPopupConfig.numHoldDuration,
fadeOutDuration: e.comboPopupConfig.numFadeOutDuration
}, r);
}
};
};
var o, n, p, c, f;
i([ ae.bindAtom("G5_FBase_ComboPopupDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "comboPopupDomain", void 0);
i([ ae.bindAtom("G5_FBase_ComboPopupConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "comboPopupConfig", void 0);
i([ ae.bindAtom("G5_FBase_ScorePopupConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "scorePopupConfig", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G5_FBase_TweenSlotAlpha"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tweenSlotAlpha", void 0);
return i([ ae.atomClass("G5_FBase_ShowComboPopup") ], t);
}(ae.FunctionAtom);
o.G5_FBase_ShowComboPopup = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e, t, o, n, a, i = this.tileDomain.tileData, r = this.gameDomain.gameData, c = this.gameDomain.collect()[0];
if (c) {
for (var f = r.mergeResultValue[c], s = r.mergeScoreGained[c], u = r.touchRow[c], d = r.touchCol[c], l = r.chainLength[c] > 0 ? r.chainLength[c] - 1 : 0, y = null, _ = [], m = this.tileDomain.collect(), g = 0, h = m.length; g < h; g++) {
var v = m[g];
i.state[v] === p.G5_FBase.TileState.Connected && _.push(v);
}
for (var b = _.length, F = 0, G = _.length; F < G; F++) {
var A = _[F], B = i.chainIndex[A] === l || u >= 0 && d >= 0 && i.row[A] === u && i.col[A] === d, T = B ? f : 0;
this.setTileValue(A, T);
i.state.set(A, p.G5_FBase.TileState.Normal);
i.chainIndex.set(A, -1);
B && (y = A);
i.isAnimating.set(A, 0);
i.animOffsetX.set(A, 0);
i.animOffsetY.set(A, 0);
i.animScale.set(A, 1);
i.animAlpha.set(A, 1);
i.zIndex.set(A, this.zIndexConfig.tileDefault);
}
if (y && s > 0) {
var O = this.scorePopupDomain.collect()[0];
if (O) {
var R = this.scorePopupDomain.scorePopupData, j = this.scorePopupConfig, C = this.calcTilePos(i.row[y], i.col[y]), S = r.renderOffsetX[c] || 0, D = r.renderOffsetY[c] || 0, w = this.gameConfig, I = w.tileSize, P = w.gridMaskOffsetY, x = this.adapterLogic.runtime.extendScale, L = (C.x + S) * x, M = P + (C.y - D) * x + I * j.baseYOffsetScale * x;
R.x.set(O, L);
R.y.set(O, M);
R.score.set(O, s);
R.alpha.set(O, 0);
R.offsetY.set(O, 0);
this.tween(O, [ [ ae.TweenStepType.To, R, {
offsetY: j.riseOffset
}, j.riseDuration, ae.TweenEasing.SineOut ], [ ae.TweenStepType.To, R, {
score: 0,
offsetY: 0
}, 0 ] ]);
var U = j.fadeOutStartTime - j.fadeInDuration;
this.tween(O, [ [ ae.TweenStepType.To, R, {
alpha: 1
}, j.fadeInDuration ], [ ae.TweenStepType.Delay, U ], [ ae.TweenStepType.To, R, {
alpha: 0
}, j.fadeOutDuration ] ]);
}
}
y && b >= this.comboPopupConfig.minCount && this.showComboPopup(y, b, i);
var E = r.score[c] + s;
r.score.set(c, E);
var k = r.isGuideMode[c];
if (E > r.bestScore[c] && !k) {
r.bestScore.set(c, E);
r.isNewRecord.set(c, !0);
}
if (!r.isGuideMode[c]) {
f > r.maxValue[c] && r.maxValue.set(c, f);
f > r.historicalMaxValue[c] && r.historicalMaxValue.set(c, f);
}
r.isConnecting.set(c, !1);
r.startValue.set(c, 0);
r.lastChainValue.set(c, 0);
r.chainLength.set(c, 0);
r.touchRow.set(c, -1);
r.touchCol.set(c, -1);
var N = this.connectionLineDomain.collect()[0];
if (N) {
var V = this.connectionLineDomain.connectionLineData;
V.active.set(N, !1);
V.dirtyVersion.set(N, V.dirtyVersion[N] + 1);
}
_.sort(function(e, t) {
return i.chainIndex[e] - i.chainIndex[t];
});
for (var z = new Set(), Y = [], H = 0, W = _.length; H < W; H++) {
v = _[H];
var X = i.col[v];
if (!z.has(X)) {
z.add(X);
Y.push(X);
}
}
r.dropColOrder0.set(c, null !== (e = Y[0]) && void 0 !== e ? e : -1);
r.dropColOrder1.set(c, null !== (t = Y[1]) && void 0 !== t ? t : -1);
r.dropColOrder2.set(c, null !== (o = Y[2]) && void 0 !== o ? o : -1);
r.dropColOrder3.set(c, null !== (n = Y[3]) && void 0 !== n ? n : -1);
r.dropColOrder4.set(c, null !== (a = Y[4]) && void 0 !== a ? a : -1);
r.dropColCount.set(c, Y.length);
r.isGuideMode[c] || this.saveBoardSnapshot();
}
};
var o, n, c, f, s, u, d, l, y, _, m, g, h, v, b;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_ScorePopupDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "scorePopupDomain", void 0);
i([ ae.bindAtom("G5_FBase_CalcTilePos"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "calcTilePos", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "gameConfig", void 0);
i([ ae.bindAtom("G5_FBase_ConnectionLineDomain"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "connectionLineDomain", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "tween", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_MergeComplete"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "mergeComplete", void 0);
i([ ae.bindAtom("G5_FBase_ScorePopupConfig"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "scorePopupConfig", void 0);
i([ ae.bindAtom("G5_FBase_ComboPopupConfig"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "comboPopupConfig", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "zIndexConfig", void 0);
i([ ae.bindAtom("G5_FBase_AdapterLogic"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "adapterLogic", void 0);
i([ ae.bindAtom("G5_FBase_SetTileValueWithPower"), r("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "setTileValue", void 0);
i([ ae.bindAtom("G5_FBase_SaveBoardSnapshot"), r("design:type", "function" == typeof (v = "undefined" != typeof ae && ae.AtomTypeInfer) ? v : Object) ], t.prototype, "saveBoardSnapshot", void 0);
i([ ae.bindAtom("G5_FBase_ShowComboPopup"), r("design:type", "function" == typeof (b = "undefined" != typeof ae && ae.AtomTypeInfer) ? b : Object) ], t.prototype, "showComboPopup", void 0);
return i([ ae.atomClass("G5_FBase_OnMergeComplete") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnMergeComplete = f;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_OnProgressAnimComplete: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d0ac4T2RihH7pzcq6KMhLSm", "G5_FBase_OnProgressAnimComplete");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_OnProgressAnimComplete = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
if (e) {
for (var t = this.gameDomain.gameData, o = this.tileDomain.tileData, n = t.minSpawnValue[e], a = [], i = this.tileDomain.collect(), r = 0, c = i.length; r < c; r++) {
var f = i[r], s = o.value[f];
s > 0 && s < n && a.push(f);
}
if (a.length > 0) {
t.lowBlocksRemoved.set(e, !0);
t.gameState.set(e, p.G5_FBase.GameState.Processing);
this.gameInitLogic.runtime.gameState = p.G5_FBase.GameState.Processing;
for (r = 0, c = a.length; r < c; r++) {
f = a[r];
r === c - 1 ? this.tween(f, [ [ ae.TweenStepType.To, o, {
animScale: 0
}, .33, ae.TweenEasing.BackIn ], [ ae.TweenStepType.To, o, {
value: 0,
animScale: 1
}, 0 ], [ ae.TweenStepType.Router, this.dropStartRouter ] ]) : this.tween(f, [ [ ae.TweenStepType.To, o, {
animScale: 0
}, .33, ae.TweenEasing.BackIn ], [ ae.TweenStepType.To, o, {
value: 0,
animScale: 1
}, 0 ] ]);
}
} else {
t.gameState.set(e, p.G5_FBase.GameState.Idle);
this.gameInitLogic.runtime.gameState = p.G5_FBase.GameState.Idle;
var u = t.pendingGoalValue[e];
if (u > 0) {
t.pendingGoalValue.set(e, 0);
this.showGoalDialog(e, u);
}
}
}
};
var o, n, c, f, s, u, d;
i([ ae.onChain, ae.bindAtom("G5_FBase_ProgressAnimComplete"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "progressAnimComplete", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_ShowGoalDialog"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "showGoalDialog", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "gameInitLogic", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G5_FBase_DropStartRouter"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "dropStartRouter", void 0);
return i([ ae.atomClass("G5_FBase_OnProgressAnimComplete") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnProgressAnimComplete = c;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_ParseStrategyWeights: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "191a3IeTu5ICL7d1t8UHZJU", "G5_FBase_ParseStrategyWeights");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__values || function(e) {
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
o.G5_FBase_ParseStrategyWeights = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function(e) {
var t, o, n, a, i, p, c = [], f = [];
if (!e || "" === e.trim()) return {
strategies: c,
weights: f
};
var s = e.split("|");
try {
for (var u = r(s), d = u.next(); !d.done; d = u.next()) {
var l = d.value.split(",");
if (2 === l.length) {
var y = null !== (a = null === (n = l[0]) || void 0 === n ? void 0 : n.trim()) && void 0 !== a ? a : "", _ = null !== (p = null === (i = l[1]) || void 0 === i ? void 0 : i.trim()) && void 0 !== p ? p : "", m = parseInt(y, 10), g = parseInt(_, 10);
if (!isNaN(m) && !isNaN(g) && g > 0) {
c.push(m);
f.push(g);
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
d && !d.done && (o = u.return) && o.call(u);
} finally {
if (t) throw t.error;
}
}
return {
strategies: c,
weights: f
};
};
};
return i([ ae.atomClass("G5_FBase_ParseStrategyWeights") ], t);
}(ae.FunctionAtom);
o.G5_FBase_ParseStrategyWeights = p;
cc._RF.pop();
}, {} ],
G5_FBase_PersistentDataManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "21cefBzaudNaILFzrgLuj1J", "G5_FBase_PersistentDataManager");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_UpdatePersistentData = o.G5_FBase_UpdateBestRecords = o.G5_FBase_LoadPersistentToGameData = o.G5_FBase_PersistentDataLogic = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.defineStorageData = function() {
return {
bestScore: 0,
gameId: -1,
historicalMaxValue: this.config.initialHistoricalMaxValue
};
};
t.prototype.onExecute = function() {};
var o, n;
i([ ae.signalStart, ae.onChain, ae.bindAtom("G5_FBase_GameInit"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
return i([ ae.atomClass("G5_FBase_PersistentDataLogic") ], t);
}(ae.LogicAtom);
o.G5_FBase_PersistentDataLogic = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.gameDomain.gameData, n = e.persistentDataLogic.storage;
o.bestScore.set(t, n.bestScore || 0);
o.historicalMaxValue.set(t, n.historicalMaxValue || e.config.initialHistoricalMaxValue);
};
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_PersistentDataLogic"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "persistentDataLogic", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "config", void 0);
return i([ ae.atomClass("G5_FBase_LoadPersistentToGameData") ], t);
}(ae.FunctionAtom);
o.G5_FBase_LoadPersistentToGameData = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.gameDomain.gameData, n = e.persistentDataLogic.storage, a = o.score[t], i = o.maxValue[t];
if (a > n.bestScore) {
n.bestScore = a;
o.bestScore.set(t, a);
}
if (i > n.historicalMaxValue) {
n.historicalMaxValue = i;
o.historicalMaxValue.set(t, i);
}
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_PersistentDataLogic"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "persistentDataLogic", void 0);
return i([ ae.atomClass("G5_FBase_UpdateBestRecords") ], t);
}(ae.FunctionAtom);
o.G5_FBase_UpdateBestRecords = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineStorageData = function() {
return null;
};
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0];
e && (this.gameDomain.gameData.isGuideMode[e] || this.updateBestRecords(e));
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_UpdateBestRecords"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "updateBestRecords", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_MergeComplete"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "mergeComplete", void 0);
return i([ ae.atomClass("G5_FBase_UpdatePersistentData") ], t);
}(ae.LogicAtom);
o.G5_FBase_UpdatePersistentData = s;
cc._RF.pop();
}, {} ],
G5_FBase_PlayButtonSound: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "dd36dwom3dCBpUhnNh7qssR", "G5_FBase_PlayButtonSound");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_PlaySound = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
void 0 === t && (t = e.config.soundButton);
void 0 === o && (o = 1);
e.settingLogic.storage.soundVolume > 0 && e.audioPlayer.playEffect(t, o);
};
};
var o, n, p;
i([ ae.bindAtom("G_FAtom_AudioPlayer"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "audioPlayer", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_OnSettingShow"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "settingLogic", void 0);
return i([ ae.atomClass("G5_FBase_PlaySound") ], t);
}(ae.FunctionAtom);
o.G5_FBase_PlaySound = p;
cc._RF.pop();
}, {} ],
G5_FBase_PlayConnectPulseAnim: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8f276EFYUZAsoz3LmJ/U5Ql", "G5_FBase_PlayConnectPulseAnim");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_PlayConnectPulseAnim = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
void 0 === o && (o = !1);
var n = e.tileDomain.tileData, a = e.tileGlowDomain.tileGlowData, i = e.connectPulseConfig, r = e.tileToGlow.getTargets(t)[0];
n.isAnimating.set(t, 1);
n.animScale.set(t, 1);
if (r) {
a.row.set(r, n.row[t]);
a.col.set(r, n.col[t]);
a.alpha.set(r, 0);
a.scale.set(r, 1);
a.state.set(r, p.G5_FBase.TileState.Connected);
}
if (o) {
var c = i.first;
e.tween(t, [ [ ae.TweenStepType.To, n, {
animScale: c.shrink1.scale
}, c.shrink1.duration, ae.TweenEasing.QuadInOut ], [ ae.TweenStepType.To, n, {
animScale: c.expand1.scale
}, c.expand1.duration, ae.TweenEasing.SineOut ], [ ae.TweenStepType.To, n, {
animScale: c.shrink2.scale
}, c.shrink2.duration, ae.TweenEasing.CubicIn ], [ ae.TweenStepType.To, n, {
animScale: c.shrink3.scale
}, c.shrink3.duration, ae.TweenEasing.QuadOut ], [ ae.TweenStepType.To, n, {
animScale: c.expand2.scale,
isAnimating: 0
}, c.expand2.duration, ae.TweenEasing.QuadIn ] ]);
r && e.tween(r, [ [ ae.TweenStepType.Delay, i.glow.firstDelay ], [ ae.TweenStepType.To, a, {
alpha: 1,
scale: c.expand1.scale
}, i.glow.firstDuration, ae.TweenEasing.Linear ], [ ae.TweenStepType.To, a, {
scale: c.shrink2.scale
}, c.shrink2.duration, ae.TweenEasing.CubicIn ], [ ae.TweenStepType.To, a, {
scale: c.shrink3.scale
}, c.shrink3.duration, ae.TweenEasing.QuadOut ], [ ae.TweenStepType.To, a, {
scale: c.expand2.scale
}, c.expand2.duration, ae.TweenEasing.QuadIn ] ]);
} else {
var f = i.other;
e.tween(t, [ [ ae.TweenStepType.To, n, {
animScale: f.expand1.scale
}, f.expand1.duration, ae.TweenEasing.QuadOut ], [ ae.TweenStepType.To, n, {
animScale: f.shrink1.scale
}, f.shrink1.duration, ae.TweenEasing.QuadIn ], [ ae.TweenStepType.To, n, {
animScale: f.shrink2.scale
}, f.shrink2.duration, ae.TweenEasing.QuadOut ], [ ae.TweenStepType.To, n, {
animScale: f.expand2.scale,
isAnimating: 0
}, f.expand2.duration, ae.TweenEasing.QuadIn ] ]);
r && e.tween(r, [ [ ae.TweenStepType.To, a, {
alpha: 1,
scale: f.expand1.scale
}, i.glow.otherDuration, ae.TweenEasing.Linear ], [ ae.TweenStepType.To, a, {
scale: f.shrink1.scale
}, f.shrink1.duration, ae.TweenEasing.QuadIn ], [ ae.TweenStepType.To, a, {
scale: f.shrink2.scale
}, f.shrink2.duration, ae.TweenEasing.QuadOut ], [ ae.TweenStepType.To, a, {
scale: f.expand2.scale
}, f.expand2.duration, ae.TweenEasing.QuadIn ] ]);
}
};
};
var o, n, c, f, s;
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileGlowDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileGlowDomain", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G5_FBase_ConnectPulseConfig"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "connectPulseConfig", void 0);
i([ ae.bindAtom("G5_FBase_TileToGlow"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "tileToGlow", void 0);
return i([ ae.atomClass("G5_FBase_PlayConnectPulseAnim") ], t);
}(ae.FunctionAtom);
o.G5_FBase_PlayConnectPulseAnim = c;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_PlayVibrate: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8bdafPeOhxFp65gglUNdTUA", "G5_FBase_PlayVibrate");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_PlayVibrate = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
void 0 === t && (t = e.vibrateConfig.defaultIntensity);
void 0 === o && (o = e.vibrateConfig.defaultDuration);
e.settingLogic.storage.vibrationEnabled && e.vibrate(t, o);
};
};
var o, n, p;
i([ ae.bindAtom("G_FAtom_Vibrate"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "vibrate", void 0);
i([ ae.bindAtom("G5_FBase_OnSettingShow"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingLogic", void 0);
i([ ae.bindAtom("G5_FBase_VibrateConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "vibrateConfig", void 0);
return i([ ae.atomClass("G5_FBase_PlayVibrate") ], t);
}(ae.FunctionAtom);
o.G5_FBase_PlayVibrate = p;
cc._RF.pop();
}, {} ],
G5_FBase_ProgressAnimCompleteRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "310bbGDpstO5KnZRYJwgCDV", "G5_FBase_ProgressAnimCompleteRouter");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ProgressAnimCompleteRouter = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GameSignals"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameSignals", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_ProgressAnimComplete"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "progressAnimComplete", void 0);
return i([ ae.atomClass("G5_FBase_ProgressAnimCompleteRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_ProgressAnimCompleteRouter = p;
cc._RF.pop();
}, {} ],
G5_FBase_ResPathConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "16a09FN8sVPjpbiJ7CwlYOL", "G5_FBase_ResPathConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ResPathConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
resPath: "G5_FBase"
};
};
return i([ ae.atomClass("G5_FBase_ResPathConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_ResPathConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_ResetFunctions: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8dae8Ud6ZpDurUF/ZsLSfxq", "G5_FBase_ResetFunctions");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_InitOrResetGrid = o.G5_FBase_ResetComboPopup = o.G5_FBase_ResetGameData = o.G5_FBase_ResetLocalStorageData = o.G5_FBase_SyncTileMaxValue = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
for (var o = e.tileDomain.tileData, n = e.tileDomain.collect(), a = 0, i = n.length; a < i; a++) o.maxValue.set(n[a], t);
};
};
var o;
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
return i([ ae.atomClass("G5_FBase_SyncTileMaxValue") ], t);
}(ae.FunctionAtom);
o.G5_FBase_SyncTileMaxValue = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
e.gameInitLogic.storage.blastCount = 0;
e.gameInitLogic.storage.reviveShowCount = 0;
e.gameInitLogic.storage.rewardAdClickCount = 0;
e.gameInitLogic.storage.reviveSuccessCount = 0;
};
};
var o;
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameInitLogic", void 0);
return i([ ae.atomClass("G5_FBase_ResetLocalStorageData") ], t);
}(ae.FunctionAtom);
o.G5_FBase_ResetLocalStorageData = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.gameDomain.gameData;
o.score.set(t, 0);
o.gameState.set(t, p.G5_FBase.GameState.Idle);
o.isConnecting.set(t, !1);
o.mergeCount.set(t, 0);
o.pendingGoalValue.set(t, 0);
o.encouragementAnimName.set(t, "");
o.encouragementPlaying.set(t, 0);
};
};
var o, n, c;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G_FAtom_DateNow"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "dateNow", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gameInitLogic", void 0);
return i([ ae.atomClass("G5_FBase_ResetGameData") ], t);
}(ae.FunctionAtom);
o.G5_FBase_ResetGameData = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
if (0 === e.comboPopupDomain.count()) {
var o = e.comboPopupDomain.create();
e.childOf.addChild(t, o);
}
var n = e.comboPopupDomain.collect()[0];
if (n) {
var a = e.comboPopupDomain.comboPopupData;
a.comboCount.set(n, 0);
a.alpha.set(n, 0);
a.animName.set(n, "");
}
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_ComboPopupDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "comboPopupDomain", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "childOf", void 0);
return i([ ae.atomClass("G5_FBase_ResetComboPopup") ], t);
}(ae.FunctionAtom);
o.G5_FBase_ResetComboPopup = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.config, n = o.rows, a = o.cols, i = e.tileDomain.tileData, r = e.tileGlowDomain.tileGlowData, p = [];
if (0 === e.gridDomain.count()) {
var c = e.gridDomain.create();
e.gridDomain.gridData.isDropping.set(c, !0);
e.childOf.addChild(t, c);
var f = e.connectionLineDomain.create();
e.childOf.addChild(c, f);
var s = e.comboPopupDomain.create();
e.childOf.addChild(c, s);
var u = e.scorePopupDomain.create();
e.childOf.addChild(t, u);
for (var d = 0; d < n; d++) for (var l = 0; l < a; l++) {
var y = e.tileDomain.create();
i.row.set(y, d);
i.col.set(y, l);
i.zIndex.set(y, e.zIndexConfig.tileDefault);
p.push(y);
e.childOf.addChild(c, y);
var _ = e.tileGlowDomain.create();
r.row.set(_, d);
r.col.set(_, l);
e.childOf.addChild(c, _);
e.tileToGlow.set(y, _);
}
return {
gridEid: c,
validTiles: p
};
}
var m = e.gridDomain.collect()[0];
e.resetComboPopup(m);
for (var g = e.tileDomain.collect(), h = 0, v = g.length; h < v; h++) {
y = g[h], d = i.row[y], l = i.col[y];
d >= 0 && d < n && l >= 0 && l < a && p.push(y);
}
return {
gridEid: m,
validTiles: p
};
};
};
var o, n, p, c, f, s, u, d, l, y, _;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileGlowDomain"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "tileGlowDomain", void 0);
i([ ae.bindAtom("G5_FBase_GridDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gridDomain", void 0);
i([ ae.bindAtom("G5_FBase_ConnectionLineDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "connectionLineDomain", void 0);
i([ ae.bindAtom("G5_FBase_ComboPopupDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "comboPopupDomain", void 0);
i([ ae.bindAtom("G5_FBase_ResetComboPopup"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "resetComboPopup", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G5_FBase_TileToGlow"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "tileToGlow", void 0);
i([ ae.bindAtom("G5_FBase_ScorePopupDomain"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "scorePopupDomain", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "zIndexConfig", void 0);
return i([ ae.atomClass("G5_FBase_InitOrResetGrid") ], t);
}(ae.FunctionAtom);
o.G5_FBase_InitOrResetGrid = d;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_ReviveAnimation: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0a559nnoQhM/Y5oiLKChh3V", "G5_FBase_ReviveAnimation");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ReviveCountdownComplete = o.G5_FBase_ReviveAnimationController = o.G5_FBase_UpdateToReviveAnimRouter = o.G5_FBase_ReviveAnimUpdate = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G5_FBase_RevivePanelDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "revivePanelDomain", void 0);
return i([ ae.atomClass("G5_FBase_ReviveAnimUpdate") ], t);
}(ae.SignalAtom);
o.G5_FBase_ReviveAnimUpdate = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "update", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_ReviveAnimUpdate"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "reviveAnimUpdate", void 0);
return i([ ae.atomClass("G5_FBase_UpdateToReviveAnimRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_UpdateToReviveAnimRouter = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t = this.revivePanelDomain.revivePanelData;
if (t.visible[e]) {
var o = (this.nowDate() - t.startTime[e]) / 1e3;
if (!(o < this.reviveConfig.countdownStartDelay)) {
var n = o - this.reviveConfig.countdownStartDelay, a = this.reviveConfig.countdownDuration, i = Math.min(n / a, 1);
t.progress.set(e, i);
if (!(i < 1 || this.onRevive.runtime.isWaitingForReviveAd)) {
this.checkGoalAd();
this.hideRevivePanel(e);
var r = this.rootDomain.collect()[0];
r && this.tween(r, [ [ ae.TweenStepType.Router, this.settingReplayRouter ] ]);
console.log("[复活动画] 触发 SettingReplay 信号，走 Replay 逻辑");
}
}
}
};
var o, n, p, c, f, s, u, d, l, y, _, m, g;
i([ ae.onChain, ae.signalEnd, ae.bindAtom("G5_FBase_ReviveAnimUpdate"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "updateSignal", void 0);
i([ ae.bindAtom("G5_FBase_RevivePanelDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "revivePanelDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G_FAtom_Update"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "globalUpdate", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "rootDomain", void 0);
i([ ae.bindAtom("G5_FBase_TweenToSettingReplayRouter"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "settingReplayRouter", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "gameInitLogic", void 0);
i([ ae.bindAtom("G5_FBase_CheckGoalAd"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "checkGoalAd", void 0);
i([ ae.bindAtom("G5_FBase_HideRevivePanelFunction"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "hideRevivePanel", void 0);
i([ ae.bindAtom("G5_FBase_OnRevive"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "onRevive", void 0);
i([ ae.bindAtom("G_FAtom_DateNow"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "nowDate", void 0);
i([ ae.bindAtom("G5_FBase_ReviveConfig"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "reviveConfig", void 0);
return i([ ae.atomClass("G5_FBase_ReviveAnimationController") ], t);
}(ae.LogicAtom);
o.G5_FBase_ReviveAnimationController = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {};
var o, n;
i([ ae.bindAtom("G5_FBase_RevivePanelDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "revivePanelDomain", void 0);
i([ ae.onChain, ae.signalEnd, ae.bindAtom("G5_FBase_NewGame"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "newGame", void 0);
return i([ ae.atomClass("G5_FBase_ReviveCountdownComplete") ], t);
}(ae.LogicAtom);
o.G5_FBase_ReviveCountdownComplete = s;
cc._RF.pop();
}, {} ],
G5_FBase_ReviveConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "38c1effrn9AJr1Qen/PVrvs", "G5_FBase_ReviveConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ReviveConfig = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url(this.resPathConfig.resPath);
return {
whitePng: e("res/textures/white"),
dieQuanBg: e("res/textures/die_quan_bg"),
dieQuan: e("res/textures/die_quan"),
reviveNum: e("res/spines/revive_num"),
reviveBtn: e("res/spines/revive_btn"),
reviveRemoveCount: 6,
reviveMaxTiers: 2,
countdownStartDelay: .8,
countdownDuration: 5
};
};
var o;
i([ ae.bindAtom("G5_FBase_ResPathConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "resPathConfig", void 0);
return i([ ae.atomClass("G5_FBase_ReviveConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_ReviveConfig = p;
cc._RF.pop();
}, {} ],
G5_FBase_ReviveManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0088e9VDexIUqmw4ks4SQ8c", "G5_FBase_ReviveManager");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
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
o.G5_FBase_DoRestart = o.G5_FBase_DoRevive = o.G5_FBase_OnRevive = o.G5_FBase_ReviveManager = void 0;
var c = e("../../G5_FBase_Namespace"), f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_ReviveManager") ], t);
}(ae.ConfigAtom);
o.G5_FBase_ReviveManager = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
isWaitingForReviveAd: !1
};
};
t.prototype.onExecute = function(e, t) {
var o = this.gameDomain.gameData, n = this.gameDomain.collect()[0];
if (n) {
console.log("[复活] ==================== 开始复活流程 ====================");
console.log("[复活] 当前游戏状态:", o.gameState[n]);
this.gameInitLogic.storage.rewardAdClickCount++;
console.log("[埋点] 激励广告点击次数 +1, 当前次数:", this.gameInitLogic.storage.rewardAdClickCount);
this.traceReviveClick(1);
if (this.canShowRewardedAd()) {
t.runtime.isWaitingForReviveAd = !0;
this.hideRevivePanel();
this.showRewardVideo();
} else this.onRewardedAdFailed();
}
};
var o, n, p, c, f, s, u, d, l;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_Revive"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "revive", void 0);
i([ ae.bindAtom("G5_FBase_TraceReviveClick"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "traceReviveClick", void 0);
i([ ae.bindAtom("G5_FBase_CheckGoalAd"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "checkGoalAd", void 0);
i([ ae.bindAtom("G5_FBase_OnRewardedAdFailedFunction"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "onRewardedAdFailed", void 0);
i([ ae.bindAtom("G5_FBase_CanShowRewardedAdFunction"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "canShowRewardedAd", void 0);
i([ ae.bindAtom("G_FAtom_ADShowRewardVideo"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "showRewardVideo", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "gameInitLogic", void 0);
i([ ae.bindAtom("G5_FBase_HideRevivePanelFunction"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "hideRevivePanel", void 0);
return i([ ae.atomClass("G5_FBase_OnRevive") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnRevive = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t, o, n, a, i, r, f, s, u, d, l, y = e.gameDomain.gameData, _ = e.tileDomain.tileData, m = e.gameDomain.collect()[0];
if (m) {
e.hideRevivePanel();
console.log("[复活] 已隐藏复活面板并重置动画状态");
e.gameInitLogic.storage.reviveSuccessCount++;
var g = e.gameInitLogic.storage.reviveSuccessCount;
e.traceReviveSuccess(1, g);
console.log("[埋点] 复活成功 (game_revive_success) -  reviveType: 1, reviveTimes: " + g);
var h = e.reviveConfig.reviveRemoveCount, v = e.reviveConfig.reviveMaxTiers, b = e.tileDomain.collect(), F = new Map();
try {
for (var G = p(b), A = G.next(); !A.done; A = G.next()) {
var B = A.value;
if (!((j = _.value[B]) <= 0)) {
F.has(j) || F.set(j, []);
F.get(j).push(B);
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
A && !A.done && (o = G.return) && o.call(G);
} finally {
if (t) throw t.error;
}
}
for (var T = Array.from(F.keys()).sort(function(e, t) {
return e - t;
}), O = [], R = 0; O.length < h && R < T.length; ) {
var j = T[R], C = F.get(j);
if (R < v || O.length < h) {
for (var S = C.length - 1; S > 0; S--) {
var D = e.mathFloor(e.mathRandom(0, S + 1)), w = C[S];
C[S] = C[D];
C[D] = w;
}
var I = h - O.length, P = I < C.length ? I : C.length;
for (S = 0; S < P; S++) O.push(C[S]);
}
R++;
}
console.log("[复活] 选中 " + O.length + " 个方块消除");
try {
for (var x = p(O), L = x.next(); !L.done; L = x.next()) {
B = L.value, j = _.value[B];
console.log("[复活] 消除方块: row=" + _.row[B] + ", col=" + _.col[B] + ", value=" + j);
_.value.set(B, 0);
}
} catch (e) {
n = {
error: e
};
} finally {
try {
L && !L.done && (a = x.return) && a.call(x);
} finally {
if (n) throw n.error;
}
}
y.gameState.set(m, c.G5_FBase.GameState.Processing);
y.useRandomSpawn.set(m, !0);
var M = new Set(), U = [];
try {
for (var E = p(O), k = E.next(); !k.done; k = E.next()) {
B = k.value;
var N = _.col[B];
if (!M.has(N) && U.length < 5) {
M.add(N);
U.push(N);
}
}
} catch (e) {
i = {
error: e
};
} finally {
try {
k && !k.done && (r = E.return) && r.call(E);
} finally {
if (i) throw i.error;
}
}
y.dropColOrder0.set(m, null !== (f = U[0]) && void 0 !== f ? f : -1);
y.dropColOrder1.set(m, null !== (s = U[1]) && void 0 !== s ? s : -1);
y.dropColOrder2.set(m, null !== (u = U[2]) && void 0 !== u ? u : -1);
y.dropColOrder3.set(m, null !== (d = U[3]) && void 0 !== d ? d : -1);
y.dropColOrder4.set(m, null !== (l = U[4]) && void 0 !== l ? l : -1);
y.dropColCount.set(m, U.length);
var V = e.rootDomain.collect()[0];
V && e.tween(V, [ [ ae.TweenStepType.Router, e.dropStartRouter ] ]);
}
};
};
var o, n, f, s, u, d, l, y, _, m, g;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_TraceReviveSuccess"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "traceReviveSuccess", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "rootDomain", void 0);
i([ ae.bindAtom("G5_FBase_DropStartRouter"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "dropStartRouter", void 0);
i([ ae.bindAtom("G_FAtom_MathRandom"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "mathRandom", void 0);
i([ ae.bindAtom("G_FAtom_MathFloor"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "mathFloor", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "gameInitLogic", void 0);
i([ ae.bindAtom("G5_FBase_HideRevivePanelFunction"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "hideRevivePanel", void 0);
i([ ae.bindAtom("G5_FBase_ReviveConfig"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "reviveConfig", void 0);
return i([ ae.atomClass("G5_FBase_DoRevive") ], t);
}(ae.FunctionAtom);
o.G5_FBase_DoRevive = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.gameDomain.collect()[0];
if (t) {
var o = e.gameDomain.gameData.gameStartTime[t];
e.traceGameEnd(t, "lose", o);
console.log("[埋点] 拒绝复活/广告失败游戏结束 (usr_data_game_end) - result: lose");
e.hideRevivePanel();
console.log("[重新开始] 已隐藏复活面板并重置动画状态");
var n = e.gameInitLogic.storage;
n.boardSnapshot = "";
n.isReplay = !0;
console.log("[重新开始] 走 Replay 逻辑，保留分数，开始新盘面");
var a = e.rootDomain.collect()[0];
a && e.tween(a, [ [ ae.TweenStepType.Router, e.newGameRouter ] ]);
}
};
};
var o, n, p, c, f, s, u;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameInitLogic", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "rootDomain", void 0);
i([ ae.bindAtom("G5_FBase_TweenToNewGameRouter"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "newGameRouter", void 0);
i([ ae.bindAtom("G5_FBase_TraceGameEnd"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "traceGameEnd", void 0);
i([ ae.bindAtom("G5_FBase_HideRevivePanelFunction"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "hideRevivePanel", void 0);
return i([ ae.atomClass("G5_FBase_DoRestart") ], t);
}(ae.FunctionAtom);
o.G5_FBase_DoRestart = d;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_RevivePanelData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7ffaeYscvxFtatQRTWzy/YN", "G5_FBase_RevivePanelData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_RevivePanelData = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
visible: !1,
progress: 0,
countdownAnimationName: "green",
buttonAnimationName: "init",
startTime: 0
};
};
return i([ ae.atomClass("G5_FBase_RevivePanelData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_RevivePanelData = r;
cc._RF.pop();
}, {} ],
G5_FBase_RevivePanelDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e28d3lS8RRDg5jQlshyZCfa", "G5_FBase_RevivePanelDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_RevivePanelDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_RevivePanelData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "revivePanelData", void 0);
return i([ ae.atomClass("G5_FBase_RevivePanelDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_RevivePanelDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_ReviveRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d157391hIhNsZrlx3Hkpds+", "G5_FBase_ReviveRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ReviveRender = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this.revivePanelDomain.revivePanelData, t = ae.Sprite({
name: "aniBg",
width: 386,
height: 386,
img: this.config.dieQuanBg,
sizeMode: ae.SizeMode.Raw
}), o = ae.Spine({
name: "spineNum",
width: 452.08,
height: 452.08,
spineUrl: this.config.reviveNum,
animation: {
loop: !1,
name: [ function(t) {
return e.countdownAnimationName[t];
}, [ e, "countdownAnimationName" ] ]
},
premultipliedAlpha: !1
}), n = ae.Sprite({
name: "aniProgressBar",
width: 366,
height: 364,
scaleX: -1,
img: this.config.dieQuan,
renderType: ae.RenderType.Filled,
fillType: ae.SpriteFillType.Radial,
fillCenterX: .5,
fillCenterY: .5,
fillStart: .25,
fillRange: [ function(t) {
return e.progress[t];
}, [ e, "progress" ] ]
}), a = ae.Node({
name: "aniNode",
y: 215.13
}, t, o, n), i = ae.Text({
name: "Outofmove",
y: -20.59,
width: 306.7,
height: 60.48,
text: "Out of moves",
fontSize: 48,
lineHeight: 48,
fontFamily: "Arial",
enableBold: !0
}), r = ae.Spine({
name: "spineBtn",
spineUrl: this.config.reviveBtn,
animation: {
name: [ function(t) {
return e.buttonAnimationName[t];
}, [ e, "buttonAnimationName" ] ],
loop: !0
},
premultipliedAlpha: !1
}), p = ae.Sprite({
name: "reviveBtn",
y: -153.99,
width: 592,
height: 166,
sizeMode: ae.SizeMode.Raw,
event: {
touchEnd: this.reviveButtonRouter
}
}, r), c = ae.Node({
name: "Revive",
x: 480,
y: 854.94,
width: 960,
height: 1707.5,
anchorY: .5008461339483311,
widget: {
alignMode: ae.WidgetAlignMode.Always,
isAlignTop: !0,
top: 0,
isAlignBottom: !0,
bottom: 0,
isAlignLeft: !0,
left: 0,
isAlignHorizontalCenter: !0,
horizontalCenter: 0
},
blockInputEvents: !0
}, a, i, p);
return ae.Node({
name: "RevivePanelRoot",
anchorX: .5,
anchorY: .5,
active: [ function(t) {
return e.visible[t];
}, [ e, "visible" ] ],
widget: {
alignMode: ae.WidgetAlignMode.Always,
isAlignBottom: !0,
bottom: 0,
isAlignLeft: !0,
left: 0,
isAlignRight: !0,
right: 0,
isAlignTop: !0,
top: 0
}
}, ae.Sprite({
name: "Overlay",
img: this.config.whitePng,
rgb: 727615,
alpha: .8,
anchorX: .5,
anchorY: .5,
sizeMode: ae.SizeMode.Custom,
widget: {
alignMode: ae.WidgetAlignMode.Always,
isAlignBottom: !0,
bottom: 0,
isAlignLeft: !0,
left: 0,
isAlignRight: !0,
right: 0,
isAlignTop: !0,
top: 0
}
}), c);
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_RevivePanelDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "revivePanelDomain", void 0);
i([ ae.bindAtom("G5_FBase_ReviveConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_ReviveButtonRouter"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "reviveButtonRouter", void 0);
return i([ ae.atomClass("G5_FBase_ReviveRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_ReviveRender = p;
cc._RF.pop();
}, {} ],
G5_FBase_ReviveRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "07e10m/e1tK06eg+tmgc1+W", "G5_FBase_ReviveRouter");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_NoThanksButtonRouter = o.G5_FBase_ReviveButtonRouter = o.G5_FBase_ReviveRouter = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_ReviveRouter") ], t);
}(ae.ConfigAtom);
o.G5_FBase_ReviveRouter = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "pointer", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_Revive"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "revive", void 0);
return i([ ae.atomClass("G5_FBase_ReviveButtonRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_ReviveButtonRouter = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "pointer", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_NewGame"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "newGame", void 0);
return i([ ae.atomClass("G5_FBase_NoThanksButtonRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_NoThanksButtonRouter = f;
cc._RF.pop();
}, {} ],
G5_FBase_RewardedAd: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4eae3fs4NBAcJVU4nSUAt4W", "G5_FBase_RewardedAd");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_CanShowRewardedAdFunction = o.G5_FBase_PreloadRewardAdOnNetworkRestored = o.G5_FBase_PreloadRewardAdOnHostActive = o.G5_FBase_PreloadRewardAdOnAdResult = o.G5_FBase_PreloadRewardAdOnGameInit = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.loadRewardAd();
};
var o, n;
i([ ae.onChain, ae.bindAtom("G5_FBase_GameInit"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameInit", void 0);
i([ ae.bindAtom("G_FAtom_ADLoadRewardAd"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "loadRewardAd", void 0);
return i([ ae.atomClass("G5_FBase_PreloadRewardAdOnGameInit") ], t);
}(ae.LogicAtom);
o.G5_FBase_PreloadRewardAdOnGameInit = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.adResult.adType === ae.AdType.Reward && this.loadRewardAd();
};
var o, n, p;
i([ ae.onChain, ae.bindAtom("G5_FBase_AdResultSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "adResultSignal", void 0);
i([ ae.bindAtom("G_FAtom_ADResult"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "adResult", void 0);
i([ ae.bindAtom("G_FAtom_ADLoadRewardAd"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "loadRewardAd", void 0);
return i([ ae.atomClass("G5_FBase_PreloadRewardAdOnAdResult") ], t);
}(ae.LogicAtom);
o.G5_FBase_PreloadRewardAdOnAdResult = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.loadRewardAd();
};
var o, n;
i([ ae.onChain, ae.bindAtom("G5_FBase_HostActiveSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "hostActiveSignal", void 0);
i([ ae.bindAtom("G_FAtom_ADLoadRewardAd"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "loadRewardAd", void 0);
return i([ ae.atomClass("G5_FBase_PreloadRewardAdOnHostActive") ], t);
}(ae.LogicAtom);
o.G5_FBase_PreloadRewardAdOnHostActive = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.loadRewardAd();
};
var o, n;
i([ ae.onChain, ae.bindAtom("G5_FBase_NetworkRestoredSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "networkRestoredSignal", void 0);
i([ ae.bindAtom("G_FAtom_ADLoadRewardAd"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "loadRewardAd", void 0);
return i([ ae.atomClass("G5_FBase_PreloadRewardAdOnNetworkRestored") ], t);
}(ae.LogicAtom);
o.G5_FBase_PreloadRewardAdOnNetworkRestored = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.dateNow(), o = e.adState.runtime;
if (t - o.lastCheckCanShowRewardedAdTimeMs < e.adConfig.rewardedAdCheckDebounceMs) return o.lastCheckCanShowRewardedAdResult;
o.lastCheckCanShowRewardedAdTimeMs = t;
if (!e.canShowAd()) {
o.lastCheckCanShowRewardedAdResult = !1;
return !1;
}
if (!e.getAdReadyState(ae.AdType.Reward)) {
o.lastCheckCanShowRewardedAdResult = !1;
return !1;
}
o.lastCheckCanShowRewardedAdResult = !0;
return !0;
};
};
var o, n, p, c, f;
i([ ae.bindAtom("G_FAtom_ADCanShowAd"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "canShowAd", void 0);
i([ ae.bindAtom("G_FAtom_ADGetAdReadyState"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getAdReadyState", void 0);
i([ ae.bindAtom("G_FAtom_DateNow"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "dateNow", void 0);
i([ ae.bindAtom("G5_FBase_AdState"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "adState", void 0);
i([ ae.bindAtom("G5_FBase_AdConfig"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "adConfig", void 0);
return i([ ae.atomClass("G5_FBase_CanShowRewardedAdFunction") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CanShowRewardedAdFunction = u;
cc._RF.pop();
}, {} ],
G5_FBase_ScorePopupConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4c371e2jHZInYiQ0Zjhmpa/", "G5_FBase_ScorePopupConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ScorePopupConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
fontScale: .5,
baseYOffsetScale: -.5,
riseOffset: 185,
riseDuration: .66,
fadeInDuration: .16,
fadeOutStartTime: .5,
fadeOutDuration: .16
};
};
return i([ ae.atomClass("G5_FBase_ScorePopupConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_ScorePopupConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_ScorePopupData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e1020iO05ZAAa7l8yNHZD3D", "G5_FBase_ScorePopupData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ScorePopupData = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
score: 0,
alpha: 0,
offsetY: 0,
x: 0,
y: 0
};
};
return i([ ae.atomClass("G5_FBase_ScorePopupData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_ScorePopupData = r;
cc._RF.pop();
}, {} ],
G5_FBase_ScorePopupDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "198c9T/+hJI7Kfok0YmINkW", "G5_FBase_ScorePopupDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ScorePopupDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_ScorePopupData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "scorePopupData", void 0);
return i([ ae.atomClass("G5_FBase_ScorePopupDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_ScorePopupDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_ScorePopupRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ecce5rVwkdJvZO2SggKYvYp", "G5_FBase_ScorePopupRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ScorePopupRender = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e, t = this, o = this.scorePopupDomain.scorePopupData, n = this.config.tileSize * this.scorePopupConfig.fontScale;
return ae.Text({
name: "ScorePopup",
text: [ function(e) {
return o.score[e] > 0 ? "+" + o.score[e] : "";
}, [ o, "score" ] ],
fontSize: n,
rgb: 16777215,
enableBold: !0,
x: [ function(e) {
return o.x[e];
}, [ o, "x" ] ],
y: [ function(e) {
return o.y[e] + o.offsetY[e];
}, [ o, "y" ], [ o, "offsetY" ] ],
alpha: [ function(e) {
return o.alpha[e];
}, [ o, "alpha" ] ],
zIndex: null !== (e = this.zIndexConfig.scorePopup) && void 0 !== e ? e : 100,
active: [ function(e) {
return t.isScorePopupActive(e);
}, [ o, "alpha" ], [ o, "score" ] ]
});
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p, c, f;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_ScorePopupDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "scorePopupDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_ScorePopupConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "scorePopupConfig", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "zIndexConfig", void 0);
i([ ae.bindAtom("G5_FBase_IsScorePopupActive"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "isScorePopupActive", void 0);
return i([ ae.atomClass("G5_FBase_ScorePopupRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_ScorePopupRender = p;
cc._RF.pop();
}, {} ],
G5_FBase_ScreenToGrid: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7311ev3SB5IFYlhMCnRQEV0", "G5_FBase_ScreenToGrid");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ScreenToGrid = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = {
row: 0,
col: 0
};
return function(o, n) {
var a = e.config, i = a.tileSize, r = a.gap, p = a.rows, c = a.cols, f = a.padding, s = a.gridLeftX, u = a.gridTopY, d = e.gameDomain.collect()[0], l = e.gameDomain.gameData, y = d ? l.renderOffsetX[d] : 0, _ = d ? l.renderOffsetY[d] : 0, m = d ? l.effectiveRows[d] : 0, g = d ? l.effectiveCols[d] : 0, h = i + r, v = o - s - f - y, b = u - f - n - _, F = e.floor(v / h), G = e.floor(b / h);
if (G < 0 || G >= (m > 0 ? m : p) || F < 0 || F >= (g > 0 ? g : c)) {
t.row = -1;
t.col = -1;
return t;
}
if (v - F * h >= i || b - G * h >= i) {
t.row = -1;
t.col = -1;
return t;
}
t.row = G;
t.col = F;
return t;
};
};
var o, n, p;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G_FAtom_MathFloor"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "floor", void 0);
return i([ ae.atomClass("G5_FBase_ScreenToGrid") ], t);
}(ae.FunctionAtom);
o.G5_FBase_ScreenToGrid = p;
cc._RF.pop();
}, {} ],
G5_FBase_SelectAlgorithmByWeight: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "78960QF4wtDxZ+VaOgXfWce", "G5_FBase_SelectAlgorithmByWeight");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_SelectAlgorithmByWeight = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
if (0 === t.length) return 0;
if (1 === t.length) return t[0];
for (var n = 0, a = 0; a < o.length; a++) n += o[a];
if (0 === n) return t[0];
var i = e.mathRandom(0, 1) * n, r = 0;
for (a = 0; a < o.length; a++) if (i < (r += o[a])) return t[a];
return t[t.length - 1];
};
};
var o;
i([ ae.bindAtom("G_FAtom_MathRandom"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "mathRandom", void 0);
return i([ ae.atomClass("G5_FBase_SelectAlgorithmByWeight") ], t);
}(ae.FunctionAtom);
o.G5_FBase_SelectAlgorithmByWeight = p;
cc._RF.pop();
}, {} ],
G5_FBase_SetTileValueWithPower: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "57f3cTE5B1I64sQug5EoSv8", "G5_FBase_SetTileValueWithPower");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_SetTileValueWithPower = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n = e.tileDomain.tileData;
n.value.set(t, o);
n.powerIndex.set(t, o);
};
};
var o;
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
return i([ ae.atomClass("G5_FBase_SetTileValueWithPower") ], t);
}(ae.FunctionAtom);
o.G5_FBase_SetTileValueWithPower = p;
cc._RF.pop();
}, {} ],
G5_FBase_SetTileValue: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3d20ex8dOBCe4O5rZf8PNEn", "G5_FBase_SetTileValue");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_SetTileValue = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n) {
for (var a = e.tileDomain.tileData, i = e.tileDomain.collect(), r = 0, p = i.length; r < p; r++) {
var c = i[r];
if (a.row[c] === t && a.col[c] === o) {
e.setTileValue(c, n);
return;
}
}
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_SetTileValueWithPower"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "setTileValue", void 0);
return i([ ae.atomClass("G5_FBase_SetTileValue") ], t);
}(ae.FunctionAtom);
o.G5_FBase_SetTileValue = p;
cc._RF.pop();
}, {} ],
G5_FBase_SettingConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2ffa5Zv8KFOf7EQnHxsY3NI", "G5_FBase_SettingConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_SettingConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
panelInStartTime: 0,
panelInEndTime: .33,
panelInStartScale: 0,
panelInEndScale: 1,
panelOutStartTime: 0,
panelOutEndTime: .33,
panelOutStartScale: 1,
panelOutEndScale: 0,
cardWidth: 960,
cardHeight: 960,
innerWidth: 860,
innerHeight: 700,
innerOffsetY: 60,
toggleBtnSize: 100,
toggleBtnGap: 130,
actionBtnWidth: 600,
actionBtnHeight: 140,
actionBtnGap: 30,
closeBtnSize: 60
};
};
return i([ ae.atomClass("G5_FBase_SettingConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_SettingConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_SettingData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5f088ytqgJHa5enIJz14oDS", "G5_FBase_SettingData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_SettingData = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
visible: !1,
panelScale: 0,
soundEnabled: !0,
musicEnabled: !0,
vibrationEnabled: !0,
isAnimating: !1
};
};
return i([ ae.atomClass("G5_FBase_SettingData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_SettingData = r;
cc._RF.pop();
}, {} ],
G5_FBase_SettingDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "18b74xvy/JCZ5TjtDi5LMqC", "G5_FBase_SettingDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_SettingDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_SettingData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingData", void 0);
return i([ ae.atomClass("G5_FBase_SettingDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_SettingDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_SettingLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "333e2I+y19AnKtQGTrnlBkE", "G5_FBase_SettingLogic");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
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
o.G5_FBase_OnSettingReplay = o.G5_FBase_OnToggleVibration = o.G5_FBase_OnToggleMusic = o.G5_FBase_OnToggleSound = o.G5_FBase_OnSettingHidden = o.G5_FBase_OnSettingClose = o.G5_FBase_OnSettingShow = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineStorageData = function() {
return {
soundVolume: 1,
musicVolume: 1,
vibrationEnabled: !0
};
};
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e, t) {
var o = this.settingDomain.settingData, n = this.cfg;
this.onSettingReplay.runtime.replayTriggered = !1;
var a = t.storage.soundVolume, i = t.storage.musicVolume, r = this.settingDomain.collect()[0], p = !1;
if (!r) {
r = this.settingDomain.create();
this.childOf.addChild(e, r);
p = !0;
}
o.visible.set(r, !0);
o.panelScale.set(r, 0);
o.isAnimating.set(r, !0);
o.soundEnabled.set(r, a > 0);
o.musicEnabled.set(r, i > 0);
o.vibrationEnabled.set(r, t.storage.vibrationEnabled);
var c = n.panelInEndTime - n.panelInStartTime, f = p ? .016 : 0;
this.tween(r, [ [ ae.TweenStepType.Delay, f ], [ ae.TweenStepType.To, o, {
panelScale: 1
}, c, ae.TweenEasing.BackOut ], [ ae.TweenStepType.To, o, {
isAnimating: !1
}, 0 ] ]);
};
var o, n, p, c, f, s, u;
i([ ae.onChain, ae.bindAtom("G5_FBase_SettingShow"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "settingShow", void 0);
i([ ae.bindAtom("G5_FBase_SettingDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingDomain", void 0);
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "rootDomain", void 0);
i([ ae.bindAtom("G5_FBase_SettingConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "cfg", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G5_FBase_OnSettingReplay"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "onSettingReplay", void 0);
return i([ ae.atomClass("G5_FBase_OnSettingShow") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnSettingShow = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t = this.settingDomain.settingData;
if (!t.isAnimating[e]) {
var o = this.cfg;
t.isAnimating.set(e, !0);
var n = o.panelOutEndTime - o.panelOutStartTime;
this.tween(e, [ [ ae.TweenStepType.To, t, {
panelScale: o.panelOutEndScale
}, n, ae.TweenEasing.BackIn ], [ ae.TweenStepType.Router, this.hiddenRouter ] ]);
}
};
var o, n, p, c, f;
i([ ae.onChain, ae.bindAtom("G5_FBase_SettingClose"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "settingClose", void 0);
i([ ae.bindAtom("G5_FBase_SettingDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingDomain", void 0);
i([ ae.bindAtom("G5_FBase_SettingConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "cfg", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G5_FBase_TweenToSettingHiddenRouter"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "hiddenRouter", void 0);
return i([ ae.atomClass("G5_FBase_OnSettingClose") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnSettingClose = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t = this.settingDomain.settingData;
t.visible.set(e, !1);
t.panelScale.set(e, 0);
t.isAnimating.set(e, !1);
};
var o, n;
i([ ae.onChain, ae.bindAtom("G5_FBase_SettingHidden"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "settingHidden", void 0);
i([ ae.bindAtom("G5_FBase_SettingDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingDomain", void 0);
return i([ ae.atomClass("G5_FBase_OnSettingHidden") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnSettingHidden = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t = this.settingDomain.settingData, o = !t.soundEnabled[e], n = o ? 1 : 0;
t.soundEnabled.set(e, o);
this.onSettingShow.storage.soundVolume = n;
o && this.audioPlayer.playEffect(this.gameConfig.soundButton, .5);
};
var o, n, p, c, f;
i([ ae.onChain, ae.bindAtom("G5_FBase_ToggleSound"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "toggleSound", void 0);
i([ ae.bindAtom("G5_FBase_SettingDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingDomain", void 0);
i([ ae.bindAtom("G_FAtom_AudioPlayer"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "audioPlayer", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gameConfig", void 0);
i([ ae.bindAtom("G5_FBase_OnSettingShow"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "onSettingShow", void 0);
return i([ ae.atomClass("G5_FBase_OnToggleSound") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnToggleSound = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t = this.settingDomain.settingData, o = !t.musicEnabled[e], n = o ? 1 : 0;
t.musicEnabled.set(e, o);
o ? this.audioPlayer.playMusic(this.gameConfig.soundBackground, !0, 1) : this.audioPlayer.stopMusic();
this.onSettingShow.storage.musicVolume = n;
};
var o, n, p, c, f;
i([ ae.onChain, ae.bindAtom("G5_FBase_ToggleMusic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "toggleMusic", void 0);
i([ ae.bindAtom("G5_FBase_SettingDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingDomain", void 0);
i([ ae.bindAtom("G_FAtom_AudioPlayer"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "audioPlayer", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gameConfig", void 0);
i([ ae.bindAtom("G5_FBase_OnSettingShow"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "onSettingShow", void 0);
return i([ ae.atomClass("G5_FBase_OnToggleMusic") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnToggleMusic = d;
var l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t = this.settingDomain.settingData, o = !t.vibrationEnabled[e];
t.vibrationEnabled.set(e, o);
this.onSettingShow.storage.vibrationEnabled = o;
};
var o, n, p;
i([ ae.onChain, ae.bindAtom("G5_FBase_ToggleVibration"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "toggleVibration", void 0);
i([ ae.bindAtom("G5_FBase_SettingDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingDomain", void 0);
i([ ae.bindAtom("G5_FBase_OnSettingShow"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "onSettingShow", void 0);
return i([ ae.atomClass("G5_FBase_OnToggleVibration") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnToggleVibration = l;
var y = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineStorageData = function() {
return {};
};
t.prototype.defineRuntimeData = function() {
return {
replayTriggered: !1
};
};
t.prototype.onExecute = function(e, t) {
var o, n;
if (!t.runtime.replayTriggered) {
t.runtime.replayTriggered = !0;
var a = this.gameDomain.collect()[0];
a && this.stopTween(a);
try {
for (var i = p(this.tileDomain.collect()), r = i.next(); !r.done; r = i.next()) {
var c = r.value;
this.stopTween(c);
}
} catch (e) {
o = {
error: e
};
} finally {
try {
r && !r.done && (n = i.return) && n.call(i);
} finally {
if (o) throw o.error;
}
}
var f = this.gameInitLogic.storage;
f.boardSnapshot = "";
f.isReplay = !0;
var s = this.levelUpDomain.collect()[0];
if (s) {
var u = this.levelUpDomain.levelUpData;
u.visible.set(s, !1);
u.isAnimating.set(s, !1);
u.panelScale.set(s, 0);
u.closeBtnScale.set(s, 0);
u.continueBtnScale.set(s, 0);
u.blockScale.set(s, 0);
u.textSpineAnim.set(s, "");
u.fireworkSpineAnim.set(s, "");
u.frontEffectSpineAnim.set(s, "");
u.backEffectSpineAnim.set(s, "");
}
var d = this.goalAnimDomain.collect()[0];
d && this.goalAnimDomain.goalAnimData.progressAnimPlaying.set(d, !1);
a && this.gameDomain.gameData.pendingLevelUpValue.set(a, 0);
}
};
var o, n, c, f, s, u, d;
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameInitLogic", void 0);
i([ ae.bindAtom("G5_FBase_LevelUpDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "levelUpDomain", void 0);
i([ ae.bindAtom("G5_FBase_GoalAnimDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "goalAnimDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G_FAtom_StopTween"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "stopTween", void 0);
i([ ae.onChain, ae.bindAtom("G5_FBase_SettingReplay"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "settingReplay", void 0);
return i([ ae.atomClass("G5_FBase_OnSettingReplay") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnSettingReplay = y;
cc._RF.pop();
}, {} ],
G5_FBase_SettingRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "475ddoCbK9LQLzx8uuSCNA4", "G5_FBase_SettingRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_SettingRender = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this.settingDomain.settingData, t = ae.Node({
name: "TopButtons",
width: 650,
height: 200,
y: 161.891,
layout: {
enabled: !0,
type: ae.LayoutType.Horizontal,
resizeMode: ae.LayoutResizeMode.Children,
spacingX: 60
}
}, ae.Node({
name: "SettingSoundBtn",
width: 177,
height: 96
}, ae.Sprite({
name: "SoundIcon",
img: this.config.settingBtnSound,
button: {
enabled: !0,
transition: ae.ButtonTransition.Scale,
duration: .1,
zoomScale: .9
},
event: {
buttonClick: this.toggleSoundRouter
}
}), ae.Sprite({
name: "SoundOff",
img: this.config.settingBtnOff,
active: [ function(t) {
return !e.soundEnabled[t];
}, [ e, "soundEnabled" ] ]
})), ae.Node({
name: "SettingMusicBtn",
width: 177,
height: 96
}, ae.Sprite({
name: "MusicIcon",
img: this.config.settingBtnBGM,
button: {
enabled: !0,
transition: ae.ButtonTransition.Scale,
duration: .1,
zoomScale: .9
},
event: {
buttonClick: this.toggleMusicRouter
}
}), ae.Sprite({
name: "MusicOff",
img: this.config.settingBtnOff,
active: [ function(t) {
return !e.musicEnabled[t];
}, [ e, "musicEnabled" ] ]
})), ae.Node({
name: "SettingVibrationBtn",
width: 177,
height: 96
}, ae.Sprite({
name: "VibrationIcon",
img: this.config.settingBtnVibration,
button: {
enabled: !0,
transition: ae.ButtonTransition.Scale,
duration: .1,
zoomScale: .9
},
event: {
buttonClick: this.toggleVibrationRouter
}
}), ae.Sprite({
name: "VibrationOff",
img: this.config.settingBtnOff,
active: [ function(t) {
return !e.vibrationEnabled[t];
}, [ e, "vibrationEnabled" ] ]
}))), o = ae.Sprite({
name: "SettingLine",
img: this.config.settingBgLine,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
trim: !1,
width: 700,
height: 4,
y: 65.295
}), n = ae.Sprite({
name: "HomeBtnBg",
y: -68.051,
img: this.config.settingBtnCommon,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: 650,
height: 160,
button: {
enabled: !0,
interactable: !0,
transition: ae.ButtonTransition.Color
},
event: {
buttonClick: this.homeRouter
}
}, ae.Sprite({
name: "HomeIcon",
img: this.config.settingIconHome,
x: -235,
y: 8.16
}), ae.Sprite({
name: "HomeTxt",
img: this.config.settingTxtHome,
x: -135,
anchorX: 0,
y: 5.438
})), a = ae.Sprite({
name: "ReplayBtnBg",
y: -265.488,
img: this.config.settingBtnCommon,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: 650,
height: 160,
button: {
enabled: !0,
interactable: !0,
transition: ae.ButtonTransition.Color
},
event: {
buttonClick: this.replayRouter
}
}, ae.Sprite({
name: "ReplayIcon",
img: this.config.settingIconReplay,
x: -235,
y: 1
}), ae.Sprite({
name: "ReplayTxt",
img: this.config.settingTxtReplay,
x: -135,
anchorX: 0,
y: 2.106
})), i = ae.Node({
name: "SettingPanel",
width: 866,
height: 830,
scale: [ function(t) {
return e.panelScale[t] || 0;
}, [ e, "panelScale" ] ],
blockInputEvents: !0
}, ae.Sprite({
name: "SettingCardBgOuter",
img: this.config.commonBgSettingDown,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: 866,
height: 830,
y: -37.602
}), ae.Sprite({
name: "SettingCardBgInner",
img: this.config.commonBgSettingUp,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: 760,
height: 654,
y: -61
}), ae.Sprite({
name: "SettingTitle",
img: this.config.settingTxtTitle,
y: 313.545
}), ae.Sprite({
name: "SettingCloseBtn",
img: this.config.settingBtnClose,
x: 351.908,
y: 317.243,
button: {
enabled: !0,
interactable: !0,
transition: ae.ButtonTransition.Color
},
event: {
buttonClick: this.closeRouter
}
}), t, o, n, a);
return ae.Node({
name: "SettingRoot",
zIndex: 1e3,
active: [ function(t) {
return e.visible[t];
}, [ e, "visible" ] ],
widget: {
alignMode: ae.WidgetAlignMode.Always,
isAlignBottom: !0,
bottom: 0,
isAlignLeft: !0,
left: 0,
isAlignRight: !0,
right: 0,
isAlignTop: !0,
top: 0
},
blockInputEvents: !0
}, ae.Sprite({
name: "SettingMask",
img: this.config.white,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
rgb: 0,
alpha: [ function(t) {
return .6 * (e.panelScale[t] || 0);
}, [ e, "panelScale" ] ],
widget: {
alignMode: ae.WidgetAlignMode.Always,
isAlignBottom: !0,
bottom: 0,
isAlignLeft: !0,
left: 0,
isAlignRight: !0,
right: 0,
isAlignTop: !0,
top: 0
},
button: {
enabled: !0,
interactable: !0,
transition: ae.ButtonTransition.None
},
event: {
buttonClick: this.closeRouter
}
}), i);
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p, c, f, s, u, d, l, y;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_SettingDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "settingDomain", void 0);
i([ ae.bindAtom("G5_FBase_SettingConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingConfig", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_SettingCloseRouter"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "closeRouter", void 0);
i([ ae.bindAtom("G5_FBase_ToggleSoundRouter"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "toggleSoundRouter", void 0);
i([ ae.bindAtom("G5_FBase_ToggleMusicRouter"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "toggleMusicRouter", void 0);
i([ ae.bindAtom("G5_FBase_ToggleVibrationRouter"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "toggleVibrationRouter", void 0);
i([ ae.bindAtom("G5_FBase_HomeRouter"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "homeRouter", void 0);
i([ ae.bindAtom("G5_FBase_ReplayRouter"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "replayRouter", void 0);
i([ ae.bindAtom("G_FAtom_GetWinSize"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "getWinSize", void 0);
return i([ ae.atomClass("G5_FBase_SettingRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_SettingRender = p;
cc._RF.pop();
}, {} ],
G5_FBase_SettingRouters: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "45b6fM3WABBt5lkyAUuUNIm", "G5_FBase_SettingRouters");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_TweenToSettingReplayRouter = o.G5_FBase_ReplayToCloseRouter = o.G5_FBase_ReplayToNewGameRouter = o.G5_FBase_HomeToExitRouter = o.G5_FBase_ReplayRouter = o.G5_FBase_HomeRouter = o.G5_FBase_ToggleVibrationRouter = o.G5_FBase_ToggleMusicRouter = o.G5_FBase_ToggleSoundRouter = o.G5_FBase_TweenToSettingHiddenRouter = o.G5_FBase_SettingCloseRouter = o.G5_FBase_SettingOpenRouter = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_SettingShow"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingShow", void 0);
return i([ ae.atomClass("G5_FBase_SettingOpenRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_SettingOpenRouter = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_SettingClose"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingClose", void 0);
return i([ ae.atomClass("G5_FBase_SettingCloseRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_SettingCloseRouter = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GameSignals"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameSignals", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_SettingHidden"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingHidden", void 0);
return i([ ae.atomClass("G5_FBase_TweenToSettingHiddenRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_TweenToSettingHiddenRouter = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_ToggleSound"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toggleSound", void 0);
return i([ ae.atomClass("G5_FBase_ToggleSoundRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_ToggleSoundRouter = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_ToggleMusic"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toggleMusic", void 0);
return i([ ae.atomClass("G5_FBase_ToggleMusicRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_ToggleMusicRouter = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_ToggleVibration"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toggleVibration", void 0);
return i([ ae.atomClass("G5_FBase_ToggleVibrationRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_ToggleVibrationRouter = d;
var l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_SettingHome"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingHome", void 0);
return i([ ae.atomClass("G5_FBase_HomeRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_HomeRouter = l;
var y = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_SettingReplay"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingReplay", void 0);
return i([ ae.atomClass("G5_FBase_ReplayRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_ReplayRouter = y;
var _ = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_SettingHome"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "settingHome", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_ExitGame"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "exitGame", void 0);
return i([ ae.atomClass("G5_FBase_HomeToExitRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_HomeToExitRouter = _;
var m = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_SettingReplay"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "settingReplay", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_NewGame"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "newGame", void 0);
return i([ ae.atomClass("G5_FBase_ReplayToNewGameRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_ReplayToNewGameRouter = m;
var g = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_SettingReplay"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "settingReplay", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_SettingClose"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingClose", void 0);
return i([ ae.atomClass("G5_FBase_ReplayToCloseRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_ReplayToCloseRouter = g;
var h = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GameSignals"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameSignals", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_SettingReplay"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingReplay", void 0);
return i([ ae.atomClass("G5_FBase_TweenToSettingReplayRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_TweenToSettingReplayRouter = h;
cc._RF.pop();
}, {} ],
G5_FBase_SettingSignals: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "43528zi5AdPe7kN9mF9TczJ", "G5_FBase_SettingSignals");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_SettingReplay = o.G5_FBase_SettingHome = o.G5_FBase_ToggleVibration = o.G5_FBase_ToggleMusic = o.G5_FBase_ToggleSound = o.G5_FBase_SettingHidden = o.G5_FBase_SettingClose = o.G5_FBase_SettingShow = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_SettingShow") ], t);
}(ae.SignalAtom);
o.G5_FBase_SettingShow = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G5_FBase_SettingDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "settingDomain", void 0);
return i([ ae.atomClass("G5_FBase_SettingClose") ], t);
}(ae.SignalAtom);
o.G5_FBase_SettingClose = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G5_FBase_SettingDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "settingDomain", void 0);
return i([ ae.atomClass("G5_FBase_SettingHidden") ], t);
}(ae.SignalAtom);
o.G5_FBase_SettingHidden = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G5_FBase_SettingDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "settingDomain", void 0);
return i([ ae.atomClass("G5_FBase_ToggleSound") ], t);
}(ae.SignalAtom);
o.G5_FBase_ToggleSound = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G5_FBase_SettingDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "settingDomain", void 0);
return i([ ae.atomClass("G5_FBase_ToggleMusic") ], t);
}(ae.SignalAtom);
o.G5_FBase_ToggleMusic = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G5_FBase_SettingDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "settingDomain", void 0);
return i([ ae.atomClass("G5_FBase_ToggleVibration") ], t);
}(ae.SignalAtom);
o.G5_FBase_ToggleVibration = d;
var l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_SettingHome") ], t);
}(ae.SignalAtom);
o.G5_FBase_SettingHome = l;
var y = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_SettingReplay") ], t);
}(ae.SignalAtom);
o.G5_FBase_SettingReplay = y;
cc._RF.pop();
}, {} ],
G5_FBase_ShowAdFailedUIFunction: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b0b82LBKb9G0J2fBeYmU8VA", "G5_FBase_ShowAdFailedUIFunction");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ShowAdFailedUIFunction = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.gameDomain.collect()[0], o = e.adFailedDomain.create(), n = e.adFailedDomain.adFailedData;
e.childOf.set(t, o);
e.tween(o, [ [ ae.TweenStepType.To, n, {
offsetY: 100
}, .5, ae.TweenEasing.Linear ] ]);
e.tween(o, [ [ ae.TweenStepType.To, n, {
alpha: 255
}, .1, ae.TweenEasing.Linear ], [ ae.TweenStepType.Delay, 1.5 ], [ ae.TweenStepType.To, n, {
alpha: 0
}, .5, ae.TweenEasing.Linear ], [ ae.TweenStepType.Router, e.uiEventToAdFailedRemoveRouter ] ]);
return o;
};
};
var o, n, p, c, f;
i([ ae.bindAtom("G5_FBase_AdFailedDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "adFailedDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G5_FBase_UIEventToAdFailedRemoveRouter"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "uiEventToAdFailedRemoveRouter", void 0);
return i([ ae.atomClass("G5_FBase_ShowAdFailedUIFunction") ], t);
}(ae.FunctionAtom);
o.G5_FBase_ShowAdFailedUIFunction = p;
cc._RF.pop();
}, {} ],
G5_FBase_ShowGoalDialog: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8e1fcuSaGpIQpYBW75Glz3V", "G5_FBase_ShowGoalDialog");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ShowGoalDialog = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n = e.gameDomain.collect()[0];
if (n) {
var a = e.goalDialogDomain.collect()[0];
if (a) {
var i = e.gameDomain.gameData, r = e.goalDialogDomain.goalDialogData, c = r.showTap[a];
r.value.set(a, o);
r.alpha.set(a, 0);
r.scale.set(a, .6);
i.gameState.set(n, p.G5_FBase.GameState.GoalDialog);
e.gameInitLogic.runtime.gameState = p.G5_FBase.GameState.GoalDialog;
c || e.tween(a, [ [ ae.TweenStepType.Delay, 1.5 ], [ ae.TweenStepType.Router, e.goalDialogCloseRouter ] ]);
e.playGoalDialogAnim(n);
}
}
};
};
var o, n, c, f, s, u;
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_GoalDialogDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "goalDialogDomain", void 0);
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tween", void 0);
i([ ae.bindAtom("G5_FBase_TweenToGoalDialogCloseRouter"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "goalDialogCloseRouter", void 0);
i([ ae.bindAtom("G5_FBase_PlayGoalDialogAnim"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "playGoalDialogAnim", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "gameInitLogic", void 0);
return i([ ae.atomClass("G5_FBase_ShowGoalDialog") ], t);
}(ae.FunctionAtom);
o.G5_FBase_ShowGoalDialog = c;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_ShowRevivePanelFunction: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ce463GbXH1MP47/8uS0HlQp", "G5_FBase_ShowRevivePanelFunction");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ShowRevivePanelFunction = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.revivePanelDomain.collect()[0];
if (t) {
e.onRevive.runtime.isWaitingForReviveAd = !1;
var o = e.revivePanelDomain.revivePanelData;
o.visible.set(t, !0);
o.progress.set(t, 0);
o.countdownAnimationName.set(t, "green");
o.buttonAnimationName.set(t, "init");
o.startTime.set(t, e.nowDate());
e.gameInitLogic.storage.reviveShowCount++;
e.traceReviveUIShow();
}
};
};
var o, n, p, c, f;
i([ ae.bindAtom("G5_FBase_RevivePanelDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "revivePanelDomain", void 0);
i([ ae.bindAtom("G5_FBase_TraceReviveUIShow"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "traceReviveUIShow", void 0);
i([ ae.bindAtom("G5_FBase_OnGameInit"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "gameInitLogic", void 0);
i([ ae.bindAtom("G_FAtom_DateNow"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "nowDate", void 0);
i([ ae.bindAtom("G5_FBase_OnRevive"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "onRevive", void 0);
return i([ ae.atomClass("G5_FBase_ShowRevivePanelFunction") ], t);
}(ae.FunctionAtom);
o.G5_FBase_ShowRevivePanelFunction = p;
cc._RF.pop();
}, {} ],
G5_FBase_SimulateMaxChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fb818l/y4lEbIM1DeM0MDo3", "G5_FBase_SimulateMaxChain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_SimulateMaxChain = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = [ 0, 0, 1, -1 ], t = [ 1, -1, 0, 0 ];
return function(o, n, a, i, r, p) {
if (n < 0 || n >= r || a < 0 || a >= p) return 1;
var c = o[n][a];
o[n][a] = i;
for (var f = 1, s = [ n, a, 1 << n * p + a, 1, i ], u = 5; u > 0; ) {
var d = s[--u], l = s[--u], y = s[--u], _ = s[--u], m = s[--u];
l > f && (f = l);
for (var g = 0; g < 4; g++) {
var h = m + e[g], v = _ + t[g];
if (!(h < 0 || h >= r || v < 0 || v >= p)) {
var b = 1 << h * p + v;
if (!(y & b)) {
var F = o[h][v];
if (0 !== F && (l < 2 ? F === i : F === d || F === 2 * d)) {
s[u++] = h;
s[u++] = v;
s[u++] = y | b;
s[u++] = l + 1;
s[u++] = F;
}
}
}
}
}
o[n][a] = c;
return f;
};
};
return i([ ae.atomClass("G5_FBase_SimulateMaxChain") ], t);
}(ae.FunctionAtom);
o.G5_FBase_SimulateMaxChain = r;
cc._RF.pop();
}, {} ],
G5_FBase_SpawnConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e98bdUU1pBHvZGaEYxUzBeP", "G5_FBase_SpawnConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_SpawnConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
minExpOffset: 10,
weights: [ 10, 10, 10, 10, 10, 10 ]
};
};
return i([ ae.atomClass("G5_FBase_SpawnConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_SpawnConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_SpawnStrategyConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f59e0qbnVhH4LlvRvKy/mDO", "G5_FBase_SpawnStrategyConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_SpawnStrategyConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
poolStrategyWeights: "0,100",
poolWeightAdjustAmount: 10,
spawnStrategyWeights: "3,100"
};
};
return i([ ae.atomClass("G5_FBase_SpawnStrategyConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_SpawnStrategyConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_SyncGlowState: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ff0835UbDVAjKET/wQZ8biq", "G5_FBase_SyncGlowState");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_SyncGlowState = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n) {
var a = e.tileToGlow.getTargets(t)[0];
if (void 0 !== a) {
var i = e.tileDomain.tileData, r = e.tileGlowDomain.tileGlowData;
r.row.set(a, i.row[t]);
r.col.set(a, i.col[t]);
r.state.set(a, o);
var c = void 0 !== n ? n : o === p.G5_FBase.TileState.Normal ? 0 : r.alpha[a];
r.alpha.set(a, c);
r.scale.set(a, 1);
}
};
};
var o, n, c;
i([ ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileGlowDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileGlowDomain", void 0);
i([ ae.bindAtom("G5_FBase_TileToGlow"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tileToGlow", void 0);
return i([ ae.atomClass("G5_FBase_SyncGlowState") ], t);
}(ae.FunctionAtom);
o.G5_FBase_SyncGlowState = c;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_TileColorConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "26865l6go1PaIrlwQ+Y3YJP", "G5_FBase_TileColorConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_TileColorConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
colorsUp: [ 2137560, 15767600, 16406432, 12072400, 13313827, 8475341, 11814455, 2010511, 15294512, 4108869, 14107480, 4744417 ],
colorsDown: [ 7131391, 16762226, 16745659, 15298815, 16474718, 11371250, 15697528, 4970169, 16747105, 6935920, 16738686, 8033023 ]
};
};
return i([ ae.atomClass("G5_FBase_TileColorConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_TileColorConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_TileData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8354b5JSX5DS4zgeObtsiJD", "G5_FBase_TileData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_TileData = void 0;
var r = e("../../G5_FBase_Namespace"), p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
visible: !0,
value: 0,
powerIndex: 0,
maxValue: 0,
row: 0,
col: 0,
state: r.G5_FBase.TileState.Normal,
chainIndex: -1,
targetRow: -1,
targetCol: -1,
isAnimating: 0,
animOffsetX: 0,
animOffsetY: 0,
animScale: 1,
animAlpha: 1,
animRotation: 0,
valueAlpha: 1,
zIndex: 20,
isNew: !1,
fragmentPhase: 0,
fragmentProgress: 0,
fragmentTargetX: 0,
fragmentTargetY: 0,
comboPopup: 0,
comboPopupAlpha: 0,
comboPopupOffsetY: 0
};
};
return i([ ae.atomClass("G5_FBase_TileData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_TileData = p;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_TileDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9a51eBIKadGJJOYMpc+wrxR", "G5_FBase_TileDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_TileDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_TileData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileData", void 0);
return i([ ae.atomClass("G5_FBase_TileDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_TileDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_TileGlowData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fb2aal0mn5GQ5DN9Wh03V2J", "G5_FBase_TileGlowData");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_TileGlowData = void 0;
var r = e("../../G5_FBase_Namespace"), p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
row: 0,
col: 0,
alpha: 0,
scale: 1,
state: r.G5_FBase.TileState.Normal
};
};
return i([ ae.atomClass("G5_FBase_TileGlowData") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_TileGlowData = p;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_TileGlowDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0df66+vTShAF7gvoa/ZhHKa", "G5_FBase_TileGlowDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_TileGlowDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_TileGlowData"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileGlowData", void 0);
return i([ ae.atomClass("G5_FBase_TileGlowDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_TileGlowDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_TileGlowRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c2ad2mgwEtCU6/PIFuq1TdV", "G5_FBase_TileGlowRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_TileGlowRender = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = this.tileGlowDomain.tileGlowData, o = this.gameDomain.gameData;
return ae.Node({
name: "TileGlowRoot",
x: [ function(n) {
var a = e.calcTilePos(t.row[n], t.col[n]), i = e.gameDomain.collect()[0], r = i ? o.renderOffsetX[i] : 0;
return a.x + r;
}, [ t, "row" ], [ t, "col" ], [ o, "renderOffsetX" ] ],
y: [ function(n) {
var a = e.calcTilePos(t.row[n], t.col[n]), i = e.gameDomain.collect()[0], r = i ? o.renderOffsetY[i] : 0;
return a.y - r;
}, [ t, "row" ], [ t, "col" ], [ o, "renderOffsetY" ] ],
scaleX: [ function(e) {
var o;
return null !== (o = t.scale[e]) && void 0 !== o ? o : 1;
}, [ t, "scale" ] ],
scaleY: [ function(e) {
var o;
return null !== (o = t.scale[e]) && void 0 !== o ? o : 1;
}, [ t, "scale" ] ],
zIndex: [ function(o) {
var n = e.zIndexConfig.glow;
return e.isGuideTargetTile(t.row[o], t.col[o]) ? e.zIndexConfig.tileConnected : n;
}, [ t, "row" ], [ t, "col" ], [ o, "isGuideMode" ], [ this.guideDomain.guideData, "currentStep" ] ],
active: [ function(e) {
return t.state[e] === p.G5_FBase.TileState.Connected;
}, [ t, "state" ] ]
}, ae.Sprite({
name: "TileFrame2",
img: this.frameAsset.frame2,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: 143,
height: 143,
rgb: 16777215,
alpha: [ function(e) {
var o;
return null !== (o = t.alpha[e]) && void 0 !== o ? o : 0;
}, [ t, "alpha" ] ]
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, s, u, d, l;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_TileGlowDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileGlowDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_FrameAssetConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "frameAsset", void 0);
i([ ae.bindAtom("G5_FBase_CalcTilePos"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "calcTilePos", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "zIndexConfig", void 0);
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "guideDomain", void 0);
i([ ae.bindAtom("G5_FBase_IsGuideTargetTile"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "isGuideTargetTile", void 0);
return i([ ae.atomClass("G5_FBase_TileGlowRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_TileGlowRender = c;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_TileRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bbf72S17bxFQanjg6liSkgm", "G5_FBase_TileRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_TileRender = void 0;
var p = e("../../G5_FBase_Namespace"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = this.tileDomain.tileData, o = this.gameDomain.gameData, n = this.config, a = n.tileSize, i = n.formatThreshold;
return ae.Node({
name: "TileRoot",
width: a,
height: a,
x: [ function(n) {
var a = e.calcTilePos(t.row[n], t.col[n]), i = e.gameDomain.collect()[0], r = i ? o.renderOffsetX[i] : 0;
return a.x + (t.animOffsetX[n] || 0) + r;
}, [ t, "row" ], [ t, "col" ], [ t, "animOffsetX" ], [ o, "renderOffsetX" ] ],
y: [ function(n) {
var a = e.calcTilePos(t.row[n], t.col[n]), i = e.gameDomain.collect()[0], r = i ? o.renderOffsetY[i] : 0;
return a.y + (t.animOffsetY[n] || 0) - r;
}, [ t, "row" ], [ t, "col" ], [ t, "animOffsetY" ], [ o, "renderOffsetY" ] ],
scaleX: [ function(e) {
var o = t.animScale[e] || 1, n = t.isAnimating[e];
return t.state[e] !== p.G5_FBase.TileState.Connected || n ? o : 1;
}, [ t, "state" ], [ t, "animScale" ], [ t, "isAnimating" ] ],
scaleY: [ function(e) {
var o = t.animScale[e] || 1, n = t.isAnimating[e];
return t.state[e] !== p.G5_FBase.TileState.Connected || n ? o : 1;
}, [ t, "state" ], [ t, "animScale" ], [ t, "isAnimating" ] ],
alpha: [ function(n) {
var a, i = null !== (a = t.animAlpha[n]) && void 0 !== a ? a : 1, r = e.config.gridHeight / 2, p = e.calcTilePos(t.row[n], t.col[n]), c = e.gameDomain.collect()[0], f = c ? o.renderOffsetY[c] : 0;
return p.y + (t.animOffsetY[n] || 0) - f > r ? 0 : i;
}, [ t, "animAlpha" ], [ t, "row" ], [ t, "col" ], [ t, "animOffsetY" ], [ o, "renderOffsetY" ] ],
angle: [ function(e) {
var o;
return null !== (o = t.animRotation[e]) && void 0 !== o ? o : 0;
}, [ t, "animRotation" ] ],
zIndex: [ function(o) {
var n;
return null !== (n = t.zIndex[o]) && void 0 !== n ? n : e.zIndexConfig.tileDefault;
}, [ t, "zIndex" ] ],
active: [ function(e) {
return t.visible[e] && t.value[e] > 0;
}, [ t, "visible" ], [ t, "value" ] ]
}, ae.Sprite({
name: "TileFrameDown",
img: this.frameAsset.frameDown,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: a,
height: a,
rgb: [ function(o) {
return e.getColor(t.value[o]);
}, [ t, "value" ] ]
}), ae.Sprite({
name: "TileFrameUpContent",
img: this.frameAsset.frameUp,
renderType: ae.RenderType.Simple,
sizeMode: ae.SizeMode.Custom,
trim: !1,
width: a,
height: a,
rgb: [ function(o) {
return e.getColorUp(t.value[o]);
}, [ t, "value" ] ]
}), ae.Sprite({
name: "TileFrameGoal",
img: this.frameAsset.frameGoal,
rgb: 16777215,
active: [ function(o) {
var n = t.maxValue[o];
return n >= e.config.initialGoalTarget && t.value[o] === n;
}, [ t, "value" ], [ t, "maxValue" ] ]
}, ae.Sprite({
name: "crown",
img: this.config.crown,
scale: .6,
y: 43.47
})), ae.Text({
name: "TileValue",
text: [ function(o) {
return e.formatNumber(t.value[o], i);
}, [ t, "value" ] ],
font: this.config.numberFont,
fontSize: [ function(o) {
return e.calcFontSize(t.value[o]);
}, [ t, "value" ] ],
spacingX: 2,
rgb: 16777215,
alpha: [ function(e) {
var o;
return null !== (o = t.valueAlpha[e]) && void 0 !== o ? o : 1;
}, [ t, "valueAlpha" ] ],
horizontalAlign: ae.TextHorizontalAlign.CENTER,
verticalAlign: ae.TextVerticalAlign.CENTER
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, s, u, d, l, y, _, m;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_TileDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_FrameAssetConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "frameAsset", void 0);
i([ ae.bindAtom("G5_FBase_FormatNumber"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "formatNumber", void 0);
i([ ae.bindAtom("G5_FBase_GetColor"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "getColor", void 0);
i([ ae.bindAtom("G5_FBase_GetColorUp"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getColorUp", void 0);
i([ ae.bindAtom("G5_FBase_CalcFontSize"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "calcFontSize", void 0);
i([ ae.bindAtom("G5_FBase_CalcTilePos"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "calcTilePos", void 0);
i([ ae.bindAtom("G5_FBase_GameDomain"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "gameDomain", void 0);
i([ ae.bindAtom("G5_FBase_ZIndexConfig"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "zIndexConfig", void 0);
i([ ae.bindAtom("G5_FBase_GuideDomain"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "guideDomain", void 0);
return i([ ae.atomClass("G5_FBase_TileRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_TileRender = c;
cc._RF.pop();
}, {
"../../G5_FBase_Namespace": "G5_FBase_Namespace"
} ],
G5_FBase_TileToGlow: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f157949g/VMCoBBaiBRACDO", "G5_FBase_TileToGlow");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_TileToGlow = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRelation = function() {
return {
exclusive: !0,
autoRemoveSubject: !1
};
};
return i([ ae.atomClass("G5_FBase_TileToGlow") ], t);
}(ae.EntityRelationAtom);
o.G5_FBase_TileToGlow = r;
cc._RF.pop();
}, {} ],
G5_FBase_TouchDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "10ad5YFYnVLn4no+jbQmjDD", "G5_FBase_TouchDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_TouchDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
return i([ ae.atomClass("G5_FBase_TouchDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_TouchDomain = p;
cc._RF.pop();
}, {} ],
G5_FBase_TouchRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fd381aw6GdDhq+wsXDWl72G", "G5_FBase_TouchRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_TouchRender = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = this.config.gridMaskOffsetY;
return ae.Node({
name: "TouchLayer",
event: {
touchStart: this.touchStartRouter,
touchMove: this.touchMoveRouter,
touchEnd: this.touchEndRouter,
touchCancel: this.touchCancelRouter
},
width: 2400,
height: 4800,
scale: [ function() {
return e.adapterLogic.runtime.extendScale;
}, [ this.adapterLogic, "runtime", "extendScale" ] ],
y: t
});
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p, c, f, s, u, d;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_TouchDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "touchDomain", void 0);
i([ ae.bindAtom("G5_FBase_GridTouchStart"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "touchStartRouter", void 0);
i([ ae.bindAtom("G5_FBase_GridTouchMove"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "touchMoveRouter", void 0);
i([ ae.bindAtom("G5_FBase_GridTouchEnd"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "touchEndRouter", void 0);
i([ ae.bindAtom("G5_FBase_GridTouchCancel"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "touchCancelRouter", void 0);
i([ ae.bindAtom("G5_FBase_AdapterLogic"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "adapterLogic", void 0);
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G_FAtom_GetWinSize"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "getWinSize", void 0);
return i([ ae.atomClass("G5_FBase_TouchRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_TouchRender = p;
cc._RF.pop();
}, {} ],
G5_FBase_TouchSignals: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2c0b8XDB9xPII93T6JE5EWM", "G5_FBase_TouchSignals");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_TouchCancel = o.G5_FBase_TouchEnd = o.G5_FBase_TouchMove = o.G5_FBase_TouchStart = o.G5_FBase_TouchSignals = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_TouchSignals") ], t);
}(ae.ConfigAtom);
o.G5_FBase_TouchSignals = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_TouchStart") ], t);
}(ae.SignalAtom);
o.G5_FBase_TouchStart = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_TouchMove") ], t);
}(ae.SignalAtom);
o.G5_FBase_TouchMove = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_TouchEnd") ], t);
}(ae.SignalAtom);
o.G5_FBase_TouchEnd = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return i([ ae.atomClass("G5_FBase_TouchCancel") ], t);
}(ae.SignalAtom);
o.G5_FBase_TouchCancel = u;
cc._RF.pop();
}, {} ],
G5_FBase_Track: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "83850I8F2dIiJIY5vVLuRcY", "G5_FBase_Track");
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
}), i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, o = 1, n = arguments.length; o < n; o++) {
t = arguments[o];
for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
}
return e;
}).apply(this, arguments);
}, r = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, p = this && this.__metadata || function(e, t) {
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
o.G5_FBase_OnSettingCloseTrack = o.G5_FBase_OnSettingReplayTrack = o.G5_FBase_OnSettingHomeTrack = o.G5_FBase_OnToggleVibrationTrack = o.G5_FBase_OnToggleMusicTrack = o.G5_FBase_OnToggleSoundTrack = o.G5_FBase_OnSettingShowTrack = o.G5_FBase_TraceSettingEvent = o.G5_FBase_OnGuideCompleteTrack = o.G5_FBase_OnGuideDropCompleteTrack = o.G5_FBase_OnGuideStepCompleteTrack = o.G5_FBase_OnGuideStartTrack = o.G5_FBase_TraceGuideEvent = o.G5_FBase_OnGameInitTrack = o.G5_FBase_TraceSetupEvent = o.G5_FBase_OnAdResultTrack = o.G5_FBase_AdResultRouter = o.G5_FBase_AdResultSignal = o.G5_FBase_TraceAdShow = o.G5_FBase_TraceReviveSuccess = o.G5_FBase_TraceReviveClick = o.G5_FBase_OnBlastStepTrack = o.G5_FBase_SendTrack = o.G5_FBase_ExtendTrackData = o.G5_FBase_TrackConfig = o.G5_FBase_TraceReviveUIShow = o.G5_FBase_TraceBlastStep = o.G5_FBase_TraceGameEnd = o.G5_FBase_TraceGameStart = o.G5_FBase_SaveInitialBoardSnapshot = o.G5_FBase_FormatBoardString = o.G5_FBase_Track = void 0;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return r([ ae.atomClass("G5_FBase_Track") ], t);
}(ae.ConfigAtom);
o.G5_FBase_Track = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
void 0 === t && (t = !0);
var o = e.gameInitLogic.storage;
if (t && o.initialBoardSnapshot) return o.initialBoardSnapshot;
for (var n = e.getCurrentBoard(), a = e.gameConfig.rows, i = e.gameConfig.cols, r = [], p = 0; p < a; p++) {
for (var c = [], f = 0; f < i; f++) c.push(n.values[p * i + f]);
r.unshift(c.join(","));
}
return r.join("|");
};
};
var o, n, i;
r([ ae.bindAtom("G5_FBase_GetCurrentBoard"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "getCurrentBoard", void 0);
r([ ae.bindAtom("G5_FBase_OnGameInit"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameInitLogic", void 0);
r([ ae.bindAtom("G5_FBase_GameConfig"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "gameConfig", void 0);
return r([ ae.atomClass("G5_FBase_FormatBoardString") ], t);
}(ae.FunctionAtom);
o.G5_FBase_FormatBoardString = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.formatBoardString(!1);
e.gameInitLogic.storage.initialBoardSnapshot = t;
console.log("[Track] 保存游戏开始时的盘面数据:", t.substring(0, 50) + "...");
};
};
var o, n;
r([ ae.bindAtom("G5_FBase_FormatBoardString"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "formatBoardString", void 0);
r([ ae.bindAtom("G5_FBase_OnGameInit"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameInitLogic", void 0);
return r([ ae.atomClass("G5_FBase_SaveInitialBoardSnapshot") ], t);
}(ae.FunctionAtom);
o.G5_FBase_SaveInitialBoardSnapshot = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
if (e.guideStartLogic.storage.hasCompletedGuide) {
var t = {
game_initial_board: e.formatBoardString()
};
e.sendTrack("usr_data_game_start", t);
}
};
};
var o, n, i;
r([ ae.bindAtom("G5_FBase_SendTrack"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sendTrack", void 0);
r([ ae.bindAtom("G5_FBase_FormatBoardString"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "formatBoardString", void 0);
r([ ae.bindAtom("G5_FBase_OnGuideStart"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "guideStartLogic", void 0);
return r([ ae.atomClass("G5_FBase_TraceGameStart") ], t);
}(ae.FunctionAtom);
o.G5_FBase_TraceGameStart = d;
var l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n) {
var a = e.gameDomain.gameData, i = e.persistentDataLogic.storage.gameId || 0;
if (a.lastReportedGameEndId[t] !== i) {
var r = e.update.worldTime - n, p = e.getMaxTileValue(), c = a.historicalMaxValue[t], f = {
score: a.score[t],
his_max_score: a.bestScore[t],
result: o,
RealTime: Number(r.toFixed(2)),
ReviveShow: e.gameInitLogic.storage.reviveShowCount,
reward_ad_click_cnt: e.gameInitLogic.storage.rewardAdClickCount,
ReviveSuccess: e.gameInitLogic.storage.reviveSuccessCount,
game_blast_cnt: e.gameInitLogic.storage.blastCount,
game_board_score: p,
game_board_score_max: c,
game_initial_board: e.formatBoardString()
};
e.sendTrack("usr_data_game_end", f);
a.lastReportedGameEndId.set(t, i);
console.log("[埋点] 已上报 usr_data_game_end - gameId: " + i + ", result: " + o);
} else console.log("[埋点] gameId " + i + " 已上报过 usr_data_game_end，跳过重复上报");
};
};
var o, n, i, c, f, s, u, d;
r([ ae.bindAtom("G5_FBase_SendTrack"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sendTrack", void 0);
r([ ae.bindAtom("G5_FBase_GameDomain"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
r([ ae.bindAtom("G5_FBase_FormatBoardString"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "formatBoardString", void 0);
r([ ae.bindAtom("G5_FBase_OnGameInit"), p("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gameInitLogic", void 0);
r([ ae.bindAtom("G_FAtom_DateNow"), p("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "dateNow", void 0);
r([ ae.bindAtom("G_FAtom_Update"), p("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "update", void 0);
r([ ae.bindAtom("G5_FBase_PersistentDataLogic"), p("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "persistentDataLogic", void 0);
r([ ae.bindAtom("G5_FBase_GetMaxTileValue"), p("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "getMaxTileValue", void 0);
return r([ ae.atomClass("G5_FBase_TraceGameEnd") ], t);
}(ae.FunctionAtom);
o.G5_FBase_TraceGameEnd = l;
var y = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n, a, i) {
var r = e.getMaxTileValue(), p = {
block_id: o.join(","),
initial_board: e.formatBoardString(),
blast_rn: a,
gain_score: n,
score: i,
board_score: r
};
e.sendTrack("g_blast_step", p);
};
};
var o, n, i, c;
r([ ae.bindAtom("G5_FBase_SendTrack"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sendTrack", void 0);
r([ ae.bindAtom("G5_FBase_GameDomain"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameDomain", void 0);
r([ ae.bindAtom("G5_FBase_FormatBoardString"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "formatBoardString", void 0);
r([ ae.bindAtom("G5_FBase_GetMaxTileValue"), p("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getMaxTileValue", void 0);
return r([ ae.atomClass("G5_FBase_TraceBlastStep") ], t);
}(ae.FunctionAtom);
o.G5_FBase_TraceBlastStep = y;
var _ = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = {
gameType: e.trackConfig.gameType,
gameId: 0
};
void 0 !== t && (o.roundId = t);
e.sendTrack("game_revive_ui_show", o);
};
};
var o, n;
r([ ae.bindAtom("G5_FBase_SendTrack"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sendTrack", void 0);
r([ ae.bindAtom("G5_FBase_TrackConfig"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "trackConfig", void 0);
return r([ ae.atomClass("G5_FBase_TraceReviveUIShow") ], t);
}(ae.FunctionAtom);
o.G5_FBase_TraceReviveUIShow = _;
var m = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
gameType: 12,
gameSubType: 3,
enableTrack: !0,
logTrack: !0
};
};
return r([ ae.atomClass("G5_FBase_TrackConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_TrackConfig = m;
var g = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = i({}, t);
o.time = e.dateNow();
o.GameType = e.trackConfig.gameType;
o.gameType = e.trackConfig.gameType;
o.game_type = e.trackConfig.gameType;
o.game_subtype = e.trackConfig.gameSubType;
var n = e.persistentDataLogic.storage, a = n.gameId > 0 ? n.gameId : 0;
o.gameId = a;
o.game_id = a;
return o;
};
};
var o, n, c;
r([ ae.bindAtom("G5_FBase_TrackConfig"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "trackConfig", void 0);
r([ ae.bindAtom("G5_FBase_PersistentDataLogic"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "persistentDataLogic", void 0);
r([ ae.bindAtom("G_FAtom_DateNow"), p("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "dateNow", void 0);
return r([ ae.atomClass("G5_FBase_ExtendTrackData") ], t);
}(ae.FunctionAtom);
o.G5_FBase_ExtendTrackData = g;
var h = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n = e.extendTrackData(o);
e.trackConfig.logTrack && console.log("[埋点] 发送埋点", t, JSON.stringify(n));
e.track(t, n);
};
};
var o, n, i;
r([ ae.bindAtom("G_FAtom_Track"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "track", void 0);
r([ ae.bindAtom("G5_FBase_ExtendTrackData"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "extendTrackData", void 0);
r([ ae.bindAtom("G5_FBase_TrackConfig"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "trackConfig", void 0);
return r([ ae.atomClass("G5_FBase_SendTrack") ], t);
}(ae.FunctionAtom);
o.G5_FBase_SendTrack = h;
var v = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e, t, o = this.gameDomain.collect()[0];
if (o && !this.gameDomain.gameData.isGuideMode[o]) {
var n = this.gameDomain.gameData, a = this.tileDomain.tileData, i = this.collectConnectedTiles(), r = [];
try {
for (var p = c(i), f = p.next(); !f.done; f = p.next()) {
var s = f.value;
r.push(a.powerIndex[s.eid]);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
f && !f.done && (t = p.return) && t.call(p);
} finally {
if (e) throw e.error;
}
}
var u = this.gameInitLogic.storage, d = (u.blastCount || 0) + 1;
u.blastCount = d;
var l = n.score[o], y = n.mergeScoreGained[o], _ = l + y;
this.traceBlastStep(o, r, y, d, _);
}
};
var o, n, i, f, s, u;
r([ ae.bindAtom("G5_FBase_GameDomain"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
r([ ae.bindAtom("G5_FBase_TileDomain"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tileDomain", void 0);
r([ ae.bindAtom("G5_FBase_TraceBlastStep"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "traceBlastStep", void 0);
r([ ae.bindAtom("G5_FBase_CollectConnectedTiles"), p("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "collectConnectedTiles", void 0);
r([ ae.bindAtom("G5_FBase_OnGameInit"), p("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "gameInitLogic", void 0);
r([ ae.onChain, ae.bindAtom("G5_FBase_MergeComplete"), p("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "mergeComplete", void 0);
return r([ ae.atomClass("G5_FBase_OnBlastStepTrack") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnBlastStepTrack = v;
var b = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n = {
gameType: e.trackConfig.gameType,
gameId: 0,
reviveType: t
};
void 0 !== o && (n.roundId = o);
e.sendTrack("game_popup_revive_click", n);
};
};
var o, n;
r([ ae.bindAtom("G5_FBase_SendTrack"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sendTrack", void 0);
r([ ae.bindAtom("G5_FBase_TrackConfig"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "trackConfig", void 0);
return r([ ae.atomClass("G5_FBase_TraceReviveClick") ], t);
}(ae.FunctionAtom);
o.G5_FBase_TraceReviveClick = b;
var F = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n) {
var a = {
gameType: e.trackConfig.gameType,
gameId: 0,
reviveType: t,
reviveTimes: o
};
void 0 !== n && (a.roundId = n);
e.sendTrack("game_revive_success", a);
};
};
var o, n;
r([ ae.bindAtom("G5_FBase_SendTrack"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sendTrack", void 0);
r([ ae.bindAtom("G5_FBase_TrackConfig"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "trackConfig", void 0);
return r([ ae.atomClass("G5_FBase_TraceReviveSuccess") ], t);
}(ae.FunctionAtom);
o.G5_FBase_TraceReviveSuccess = F;
var G = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n = {
gameType: e.trackConfig.gameType,
adType: t,
scene: o
};
e.sendTrack("usr_data_ad_show", n);
};
};
var o, n;
r([ ae.bindAtom("G5_FBase_SendTrack"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sendTrack", void 0);
r([ ae.bindAtom("G5_FBase_TrackConfig"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "trackConfig", void 0);
return r([ ae.atomClass("G5_FBase_TraceAdShow") ], t);
}(ae.FunctionAtom);
o.G5_FBase_TraceAdShow = G;
var A = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G5_FBase_AdResultSignal") ], t);
}(ae.SignalAtom);
o.G5_FBase_AdResultSignal = A;
var B = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_ADResult"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "adResult", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_AdResultSignal"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "signal", void 0);
return r([ ae.atomClass("G5_FBase_AdResultRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_AdResultRouter = B;
var T = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
lastTypeCode: "",
lastProcessTime: 0
};
};
t.prototype.onExecute = function(e, t) {
var o = this.adResult.adType, n = this.adResult.state, a = this.adResult.typeCode;
if (n === ae.AdResultState.Success) {
var i = this.update.worldTime;
if (!(a === t.runtime.lastTypeCode && i - t.runtime.lastProcessTime < 100)) {
t.runtime.lastTypeCode = a;
t.runtime.lastProcessTime = i;
var r = "unknown";
switch (o) {
case ae.AdType.Reward:
r = "reward";
break;

case ae.AdType.Interstitial:
r = "interstitial";
break;

case ae.AdType.Fullscreen:
r = "fullscreen";
break;

case ae.AdType.Banner:
r = "banner";
break;

default:
r = "unknown";
}
this.traceAdShow(r, a);
}
}
};
var o, n, i, c;
r([ ae.onChain, ae.bindAtom("G5_FBase_AdResultSignal"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "adResultSignal", void 0);
r([ ae.bindAtom("G_FAtom_ADResult"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "adResult", void 0);
r([ ae.bindAtom("G5_FBase_TraceAdShow"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "traceAdShow", void 0);
r([ ae.bindAtom("G_FAtom_Update"), p("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "update", void 0);
return r([ ae.atomClass("G5_FBase_OnAdResultTrack") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnAdResultTrack = T;
var O = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n = {
step: t
};
o && (n.fail_type = o);
e.sendTrack("g_setup_event", n);
};
};
var o;
r([ ae.bindAtom("G5_FBase_SendTrack"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sendTrack", void 0);
return r([ ae.atomClass("G5_FBase_TraceSetupEvent") ], t);
}(ae.FunctionAtom);
o.G5_FBase_TraceSetupEvent = O;
var R = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
hasReported: !1
};
};
t.prototype.onExecute = function(e, t) {
if (!t.runtime.hasReported) {
t.runtime.hasReported = !0;
this.traceSetupEvent("2248界面打开");
}
};
var o, n;
r([ ae.bindAtom("G5_FBase_TraceSetupEvent"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "traceSetupEvent", void 0);
r([ ae.onChain, ae.bindAtom("G5_FBase_GameInit"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameInit", void 0);
return r([ ae.atomClass("G5_FBase_OnGameInitTrack") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnGameInitTrack = R;
var j = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = {
step: t
};
e.sendTrack("g_guide_event", o);
};
};
var o;
r([ ae.bindAtom("G5_FBase_SendTrack"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sendTrack", void 0);
return r([ ae.atomClass("G5_FBase_TraceGuideEvent") ], t);
}(ae.FunctionAtom);
o.G5_FBase_TraceGuideEvent = j;
var C = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.guideStartLogic.storage.hasCompletedGuide || this.traceGuideEvent("2248新手引导第一步展示");
};
var o, n, i;
r([ ae.onChain, ae.bindAtom("G5_FBase_GuideStart"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideStart", void 0);
r([ ae.bindAtom("G5_FBase_TraceGuideEvent"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "traceGuideEvent", void 0);
r([ ae.bindAtom("G5_FBase_OnGuideStart"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "guideStartLogic", void 0);
return r([ ae.atomClass("G5_FBase_OnGuideStartTrack") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnGuideStartTrack = C;
var S = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.guideDomain.collect()[0];
if (e) {
var t = this.guideDomain.guideData.currentStep[e];
1 === t ? this.traceGuideEvent("2248新手引导第一步完成") : 2 === t ? this.traceGuideEvent("2248新手引导第二步完成") : 3 === t ? this.traceGuideEvent("2248新手引导第三步完成") : 4 === t && this.traceGuideEvent("2248新手引导第四步完成");
}
};
var o, n, i;
r([ ae.bindAtom("G5_FBase_TraceGuideEvent"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "traceGuideEvent", void 0);
r([ ae.bindAtom("G5_FBase_GuideDomain"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideDomain", void 0);
r([ ae.onChain, ae.bindAtom("G5_FBase_GuideStepComplete"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "guideStepComplete", void 0);
return r([ ae.atomClass("G5_FBase_OnGuideStepCompleteTrack") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnGuideStepCompleteTrack = S;
var D = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.guideDomain.collect()[0];
if (e) {
var t = this.guideDomain.guideData;
if (t.isActive[e]) {
var o = t.currentStep[e];
o >= this.guideConfig.steps.length || (1 === o ? this.traceGuideEvent("2248新手引导第二步展示") : 2 === o ? this.traceGuideEvent("2248新手引导第三步展示") : 3 === o && this.traceGuideEvent("2248新手引导第四步展示"));
}
}
};
var o, n, i, c;
r([ ae.bindAtom("G5_FBase_TraceGuideEvent"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "traceGuideEvent", void 0);
r([ ae.bindAtom("G5_FBase_GuideDomain"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideDomain", void 0);
r([ ae.bindAtom("G5_FBase_GuideConfig"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "guideConfig", void 0);
r([ ae.onChain, ae.bindAtom("G5_FBase_GuideDropComplete"), p("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "guideDropComplete", void 0);
return r([ ae.atomClass("G5_FBase_OnGuideDropCompleteTrack") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnGuideDropCompleteTrack = D;
var w = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.guideDomain.collect()[0];
e && this.guideDomain.guideData.currentStep[e] === this.guideConfig.steps.length - 1 && this.traceGuideEvent("2248新手引导第四步完成");
this.traceGuideEvent("2248新手引导完成");
};
var o, n, i, c;
r([ ae.bindAtom("G5_FBase_TraceGuideEvent"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "traceGuideEvent", void 0);
r([ ae.bindAtom("G5_FBase_GuideDomain"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideDomain", void 0);
r([ ae.bindAtom("G5_FBase_GuideConfig"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "guideConfig", void 0);
r([ ae.onChain, ae.bindAtom("G5_FBase_GuideComplete"), p("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "guideComplete", void 0);
return r([ ae.atomClass("G5_FBase_OnGuideCompleteTrack") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnGuideCompleteTrack = w;
var I = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = {
step: t
};
e.sendTrack("g_setting_event", o);
};
};
var o;
r([ ae.bindAtom("G5_FBase_SendTrack"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sendTrack", void 0);
return r([ ae.atomClass("G5_FBase_TraceSettingEvent") ], t);
}(ae.FunctionAtom);
o.G5_FBase_TraceSettingEvent = I;
var P = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.traceSettingEvent("设置界面打开");
};
var o, n;
r([ ae.bindAtom("G5_FBase_TraceSettingEvent"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "traceSettingEvent", void 0);
r([ ae.onChain, ae.bindAtom("G5_FBase_SettingShow"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingShow", void 0);
return r([ ae.atomClass("G5_FBase_OnSettingShowTrack") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnSettingShowTrack = P;
var x = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t = this.settingDomain.settingData.soundEnabled[e];
this.traceSettingEvent(t ? "音效打开" : "音效关闭");
};
var o, n, i;
r([ ae.bindAtom("G5_FBase_TraceSettingEvent"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "traceSettingEvent", void 0);
r([ ae.bindAtom("G5_FBase_SettingDomain"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingDomain", void 0);
r([ ae.onChain, ae.bindAtom("G5_FBase_ToggleSound"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "toggleSound", void 0);
return r([ ae.atomClass("G5_FBase_OnToggleSoundTrack") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnToggleSoundTrack = x;
var L = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t = this.settingDomain.settingData.musicEnabled[e];
this.traceSettingEvent(t ? "音乐打开" : "音乐关闭");
};
var o, n, i;
r([ ae.bindAtom("G5_FBase_TraceSettingEvent"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "traceSettingEvent", void 0);
r([ ae.bindAtom("G5_FBase_SettingDomain"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingDomain", void 0);
r([ ae.onChain, ae.bindAtom("G5_FBase_ToggleMusic"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "toggleMusic", void 0);
return r([ ae.atomClass("G5_FBase_OnToggleMusicTrack") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnToggleMusicTrack = L;
var M = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
var t = this.settingDomain.settingData.vibrationEnabled[e];
this.traceSettingEvent(t ? "震动打开" : "震动关闭");
};
var o, n, i;
r([ ae.bindAtom("G5_FBase_TraceSettingEvent"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "traceSettingEvent", void 0);
r([ ae.bindAtom("G5_FBase_SettingDomain"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingDomain", void 0);
r([ ae.onChain, ae.bindAtom("G5_FBase_ToggleVibration"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "toggleVibration", void 0);
return r([ ae.atomClass("G5_FBase_OnToggleVibrationTrack") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnToggleVibrationTrack = M;
var U = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.traceSettingEvent("home");
};
var o, n;
r([ ae.bindAtom("G5_FBase_TraceSettingEvent"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "traceSettingEvent", void 0);
r([ ae.onChain, ae.bindAtom("G5_FBase_SettingHome"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingHome", void 0);
return r([ ae.atomClass("G5_FBase_OnSettingHomeTrack") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnSettingHomeTrack = U;
var E = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.gameDomain.collect()[0], t = this.gameDomain.gameData.gameStartTime[e];
this.traceGameEnd(e, "lose", t);
var o = this.settingDomain.collect()[0];
this.settingDomain.has(o) && this.settingDomain.settingData.visible[o] && this.traceSettingEvent("replay");
};
var o, n, i, c, f, s;
r([ ae.bindAtom("G5_FBase_GameDomain"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameDomain", void 0);
r([ ae.bindAtom("G5_FBase_OnGameInit"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameInitLogic", void 0);
r([ ae.bindAtom("G5_FBase_TraceSettingEvent"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "traceSettingEvent", void 0);
r([ ae.bindAtom("G5_FBase_TraceGameEnd"), p("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "traceGameEnd", void 0);
r([ ae.onChain, ae.bindAtom("G5_FBase_SettingReplay"), p("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "settingReplay", void 0);
r([ ae.bindAtom("G5_FBase_SettingDomain"), p("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "settingDomain", void 0);
return r([ ae.atomClass("G5_FBase_OnSettingReplayTrack") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnSettingReplayTrack = E;
var k = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
this.settingDomain.settingData.visible[e] && this.traceSettingEvent("关闭设置界面");
};
var o, n, i;
r([ ae.bindAtom("G5_FBase_TraceSettingEvent"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "traceSettingEvent", void 0);
r([ ae.onChain, ae.bindAtom("G5_FBase_SettingClose"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "settingClose", void 0);
r([ ae.bindAtom("G5_FBase_SettingDomain"), p("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "settingDomain", void 0);
return r([ ae.atomClass("G5_FBase_OnSettingCloseTrack") ], t);
}(ae.LogicAtom);
o.G5_FBase_OnSettingCloseTrack = k;
cc._RF.pop();
}, {} ],
G5_FBase_TweenSlotAlpha: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a56ecaiXO5LT4cYhCLxRM2E", "G5_FBase_TweenSlotAlpha");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_TweenSlotAlpha = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o, n, a, i) {
var r, p;
void 0 === i && (i = 0);
var c = a.fadeInDuration, f = a.holdDuration, s = a.fadeOutDuration, u = [];
i > 0 && u.push([ ae.TweenStepType.Delay, i ]);
u.push([ ae.TweenStepType.To, o, (r = {}, r[n] = 1, r), c ]);
f > 0 && u.push([ ae.TweenStepType.Delay, f ]);
u.push([ ae.TweenStepType.To, o, (p = {}, p[n] = 0, p), s ]);
e.tween(t, u);
};
};
var o;
i([ ae.bindAtom("G_FAtom_Tween"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tween", void 0);
return i([ ae.atomClass("G5_FBase_TweenSlotAlpha") ], t);
}(ae.FunctionAtom);
o.G5_FBase_TweenSlotAlpha = p;
cc._RF.pop();
}, {} ],
G5_FBase_UIColorConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "63a73MOYT1OC573uPAQ2I8m", "G5_FBase_UIColorConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_UIColorConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
bgGradientStart: 6717162,
bgGradientEnd: 7752610,
gameContainerBg: 3355443,
gameContainerAlpha: .5,
gridContainerBg: 0,
gridContainerAlpha: .5,
gridCellBg: 16777215,
gridCellAlpha: .15,
panelBg: 16777215,
panelAlpha: .25,
textWhite: 16777215,
textGray: 8947848,
textDark: 3355443
};
};
return i([ ae.atomClass("G5_FBase_UIColorConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_UIColorConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_UIConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "94493ZUQ1dESb9KiHYtr/8Q", "G5_FBase_UIConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_UIConfig = o.UIType = void 0;
o.UIType = {
Page: "Page",
Dialog: "Dialog",
Toast: "Toast"
};
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
G5_FBase_LevelUpDomain: {
type: o.UIType.Dialog,
index: 0
},
G5_FBase_BackConfirmUiDomain: {
type: o.UIType.Toast,
index: 9999
}
};
};
return i([ ae.atomClass("G5_FBase_UIConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_UIConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_UIEventToLevelUpFrontCompleteRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "be02fdntipCkZ6h0IfMEvVm", "G5_FBase_UIEventToLevelUpFrontCompleteRouter");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_UIEventToLevelUpFrontCompleteRouter = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G5_FBase_LevelUpFrontComplete"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "frontComplete", void 0);
return i([ ae.atomClass("G5_FBase_UIEventToLevelUpFrontCompleteRouter") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_UIEventToLevelUpFrontCompleteRouter = p;
cc._RF.pop();
}, {} ],
G5_FBase_UIFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d0c79I38ehBlYm6aPhuiPgR", "G5_FBase_UIFunc");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_UIFunc = o.G5_FBase_HideDomain = o.G5_FBase_ShowDomain = void 0;
var p = e("./G5_FBase_UIConfig"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n, a, i = e.uiRootDomain.collect()[0];
if (!i) {
console.warn("G5_FBase_ShowDomain: UIRootDomain not found");
return null;
}
var r = e.uiConfig[o];
if (!r) {
console.warn("G5_FBase_ShowDomain: " + o + " not found in UIConfig");
return null;
}
var c = t.collect()[0];
if (!c) {
c = t.create();
e.childOf.addChild(i, c, null !== (n = r.type) && void 0 !== n ? n : p.UIType.Page);
}
e.uiRootDomain.baseComp.visible.set(c, !0);
e.uiRootDomain.baseComp.zIndex.set(c, null !== (a = r.index) && void 0 !== a ? a : 0);
return c;
};
};
var o, n, c;
i([ ae.bindAtom("G_FAtom_ChildOf"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "childOf", void 0);
i([ ae.bindAtom("G5_FBase_UIRootDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiRootDomain", void 0);
i([ ae.bindAtom("G5_FBase_UIConfig"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "uiConfig", void 0);
return i([ ae.atomClass("G5_FBase_ShowDomain") ], t);
}(ae.FunctionAtom);
o.G5_FBase_ShowDomain = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n = t.collect()[0];
if (!n) {
console.warn("G5_FBase_HideDomain: " + o + " not found");
return null;
}
e.uiRootDomain.baseComp.visible.set(n, !1);
return n;
};
};
var o;
i([ ae.bindAtom("G5_FBase_UIRootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiRootDomain", void 0);
return i([ ae.atomClass("G5_FBase_HideDomain") ], t);
}(ae.FunctionAtom);
o.G5_FBase_HideDomain = f;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function() {};
};
return i([ ae.atomClass("G5_FBase_UIFunc") ], t);
}(ae.FunctionAtom);
o.G5_FBase_UIFunc = s;
cc._RF.pop();
}, {
"./G5_FBase_UIConfig": "G5_FBase_UIConfig"
} ],
G5_FBase_UIHelper: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b04f74oZhVK9bwnyjXGGdej", "G5_FBase_UIHelper");
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
}), i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, o = 1, n = arguments.length; o < n; o++) {
t = arguments[o];
for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
}
return e;
}).apply(this, arguments);
}, r = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, p = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__read || function(e, t) {
var o = "function" == typeof Symbol && e[Symbol.iterator];
if (!o) return e;
var n, a, i = o.call(e), r = [];
try {
for (;(void 0 === t || t-- > 0) && !(n = i.next()).done; ) r.push(n.value);
} catch (e) {
a = {
error: e
};
} finally {
try {
n && !n.done && (o = i.return) && o.call(i);
} finally {
if (a) throw a.error;
}
}
return r;
}, f = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
return e;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_CalcFringeAdaptation = o.G5_FBase_CreateFullScreenWidget = o.G5_FBase_CreateTileCardNode = o.G5_FBase_UIHelper = void 0;
var s = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return r([ ae.atomClass("G5_FBase_UIHelper") ], t);
}(ae.WorldAtom);
o.G5_FBase_UIHelper = s;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.config.tileSize, n = t.name, a = t.bgColor, r = t.color, p = t.valueText, c = t.fontSize, s = t.withGlow, u = void 0 !== s && s, d = t.withPlus, l = void 0 !== d && d, y = t.scale, _ = t.numAlpha, m = [], g = ae.Sprite({
name: n + "Bg",
img: e.frameAsset.frameDown,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: o,
height: o,
rgb: a
});
m.push(g);
var h = ae.Sprite({
name: n + "Up",
img: e.frameAsset.frameUp,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Simple,
trim: !1,
width: o,
height: o,
rgb: r
});
m.push(h);
if (u) {
var v = ae.Sprite({
name: n + "Glow",
img: e.config.gridFrameGlow,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Simple,
width: o + 2,
height: o + 2,
rgb: 16777215
});
m.push(v);
}
if (l) {
var b = ae.Sprite({
name: n + "Plus",
img: e.config.gridFramePlus,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
width: o,
height: o,
rgb: 16777215
});
m.push(b);
}
var F = ae.Text(i({
name: n + "Value",
text: p,
font: e.config.numberFont,
fontSize: c,
rgb: 16777215,
enableBold: !0
}, _ ? {
alpha: _
} : {}));
m.push(F);
return ae.Node.apply(ae, f([ i({
name: n,
width: o,
height: o
}, y ? {
scaleX: y,
scaleY: y
} : {}) ], m));
};
};
var o, n;
r([ ae.bindAtom("G5_FBase_GameConfig"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
r([ ae.bindAtom("G5_FBase_FrameAssetConfig"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "frameAsset", void 0);
return r([ ae.atomClass("G5_FBase_CreateTileCardNode") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CreateTileCardNode = u;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function(e) {
void 0 === e && (e = !1);
return {
alignMode: ae.WidgetAlignMode.Always,
isAlignBottom: !0,
bottom: 0,
isAlignLeft: !0,
left: 0,
isAlignRight: !0,
right: 0,
isAlignTop: !0,
top: 0,
safeArea: e
};
};
};
return r([ ae.atomClass("G5_FBase_CreateFullScreenWidget") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CreateFullScreenWidget = d;
var l = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.getWinSize(), o = e.windowSize;
return t.width / t.height > 760 / 1334 ? 0 : t.height / t.width > 1280 / 716 || o.height / o.width > 1280 / 716 ? .037 * Math.max(t.height, o.height) : 0;
};
};
var o, n;
r([ ae.bindAtom("G_FAtom_WindowSize"), p("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "windowSize", void 0);
r([ ae.bindAtom("G_FAtom_GetWinSize"), p("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getWinSize", void 0);
return r([ ae.atomClass("G5_FBase_CalcFringeAdaptation") ], t);
}(ae.FunctionAtom);
o.G5_FBase_CalcFringeAdaptation = l;
cc._RF.pop();
}, {} ],
G5_FBase_UIRootDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a09c88wxj9Hv518pNfJhPp9", "G5_FBase_UIRootDomain");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_UIBaseComp = o.G5_FBase_UIRootDomain = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.bindAtom("G_FAtom_Transform"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
i([ ae.bindAtom("G5_FBase_UIBaseComp"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "baseComp", void 0);
return i([ ae.atomClass("G5_FBase_UIRootDomain") ], t);
}(ae.EntityDomainAtom);
o.G5_FBase_UIRootDomain = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
visible: !1,
zIndex: 0
};
};
return i([ ae.atomClass("G5_FBase_UIBaseComp") ], t);
}(ae.EntityComponentAtom);
o.G5_FBase_UIBaseComp = c;
cc._RF.pop();
}, {} ],
G5_FBase_UIRootRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bdfcdaiexpPQai4LAqQceRP", "G5_FBase_UIRootRender");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_UIRootRender = void 0;
var p = e("./G5_FBase_UIConfig"), c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = {
alignMode: ae.WidgetAlignMode.Always,
isAlignTop: !0,
isAlignBottom: !0,
isAlignLeft: !0,
isAlignRight: !0,
top: 0,
bottom: 0,
left: 0,
right: 0
};
return ae.Node({
name: "UIRoot",
active: !0,
widget: e,
zIndex: 999999
}, ae.Node({
name: p.UIType.Page,
widget: e
}), ae.Node({
name: p.UIType.Dialog,
widget: e
}), ae.Node({
name: p.UIType.Toast,
widget: e
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o;
i([ ae.entityRenderer, ae.bindAtom("G5_FBase_UIRootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
return i([ ae.atomClass("G5_FBase_UIRootRender") ], t);
}(ae.RenderAtom);
o.G5_FBase_UIRootRender = c;
cc._RF.pop();
}, {
"./G5_FBase_UIConfig": "G5_FBase_UIConfig"
} ],
G5_FBase_UpdateTouchLocalPos: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7dd7eh3d1pOZ4NPjcjod7JH", "G5_FBase_UpdateTouchLocalPos");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_UpdateTouchLocalPos = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n = e.connectionLineDomain.collect()[0];
if (n) {
var a = t, i = o, r = e.connectionLineDomain.connectionLineData;
r.touchLocalX.set(n, a);
r.touchLocalY.set(n, i);
}
};
};
var o, n;
i([ ae.bindAtom("G5_FBase_GameConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G5_FBase_ConnectionLineDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "connectionLineDomain", void 0);
return i([ ae.atomClass("G5_FBase_UpdateTouchLocalPos") ], t);
}(ae.FunctionAtom);
o.G5_FBase_UpdateTouchLocalPos = p;
cc._RF.pop();
}, {} ],
G5_FBase_Utils: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3469dGbFOhKTo7ciYtMRXqr", "G5_FBase_Utils");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_UtilsPrintBoard = o.G5_FBase_Utils = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function() {};
};
return i([ ae.atomClass("G5_FBase_Utils") ], t);
}(ae.FunctionAtom);
o.G5_FBase_Utils = r;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function(e, t) {
void 0 === t && (t = "[出块算法]");
for (var o = 0, n = 0; n < e.length; n++) for (var a = 0; a < e[n].length; a++) {
var i = e[n][a].toString().length;
i > o && (o = i);
}
var r = [ t + "=== 地图形状 ===" ];
for (n = 0; n < e.length; n++) {
var p = [];
for (a = 0; a < e[n].length; a++) p.push(e[n][a].toString().padStart(o, " "));
r.push(p.join(" "));
}
r.push("================");
console.log(r.join("\n"));
};
};
return i([ ae.atomClass("G5_FBase_UtilsPrintBoard") ], t);
}(ae.FunctionAtom);
o.G5_FBase_UtilsPrintBoard = p;
cc._RF.pop();
}, {} ],
G5_FBase_VibrateConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1a6d7h3lkRJsI2O5RboIHvn", "G5_FBase_VibrateConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_VibrateConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
defaultIntensity: 25,
defaultDuration: 50
};
};
return i([ ae.atomClass("G5_FBase_VibrateConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_VibrateConfig = r;
cc._RF.pop();
}, {} ],
G5_FBase_WorldAtom: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "85af2DfUtVIXI9TsZgY7hZq", "G5_FBase_WorldAtom");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_WorldAtom = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return i([ ae.atomClass("G5_FBase_WorldAtom") ], t);
}(ae.WorldAtom);
o.G5_FBase_WorldAtom = r;
cc._RF.pop();
}, {} ],
G5_FBase_WorldRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "64cc4Cj4b9P85wkCFw/Kxfk", "G5_FBase_WorldRouter");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_GameInitToNewGame = o.G5_FBase_WorldCreateToGameInit = o.G5_FBase_WorldRouter = void 0;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {};
};
return i([ ae.atomClass("G5_FBase_WorldRouter") ], t);
}(ae.ConfigAtom);
o.G5_FBase_WorldRouter = p;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_WorldCreate"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "worldCreate", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_GameInit"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameInit", void 0);
return i([ ae.atomClass("G5_FBase_WorldCreateToGameInit") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_WorldCreateToGameInit = c;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G5_FBase_GameInit"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameInit", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G5_FBase_NewGame"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "newGame", void 0);
return i([ ae.atomClass("G5_FBase_GameInitToNewGame") ], t);
}(ae.SignalRouterAtom);
o.G5_FBase_GameInitToNewGame = f;
cc._RF.pop();
}, {} ],
G5_FBase_ZIndexConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "78b413RPIFNP63LYSwVZZDU", "G5_FBase_ZIndexConfig");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (a = e[p]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FBase_ZIndexConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
mask: 45,
glow: 0,
connectionLine: 10,
connectionLineGuide: 50,
tileDefault: 20,
tileConnected: 60,
tileAnimating: 80,
elimination: 110,
scorePopup: 120,
adFailed: 200,
comboPopup: 200,
encouragement: 200
};
};
return i([ ae.atomClass("G5_FBase_ZIndexConfig") ], t);
}(ae.ConfigAtom);
o.G5_FBase_ZIndexConfig = r;
cc._RF.pop();
}, {} ],
"bar1.png.aemeta": [ function(e, t) {
"use strict";
cc._RF.push(t, "b290cnBQ31BYbxTaIAZsBAi", "bar1.png.aemeta");
ae.AssetMeta.image({
borderTop: 0,
borderBottom: 0,
borderLeft: 10,
borderRight: 10,
packable: !0,
wrapMode: "Clamp",
filterMode: "Bilinear",
premultiplyAlpha: !0
});
cc._RF.pop();
}, {} ],
"bar2.png.aemeta": [ function(e, t) {
"use strict";
cc._RF.push(t, "b2576DFM25KIrJs/na9O239", "bar2.png.aemeta");
ae.AssetMeta.image({
borderTop: 0,
borderBottom: 0,
borderLeft: 10,
borderRight: 10,
packable: !0,
wrapMode: "Clamp",
filterMode: "Bilinear",
premultiplyAlpha: !0
});
cc._RF.pop();
}, {} ],
"common_bg_setting_down.png.aemeta": [ function(e, t) {
"use strict";
cc._RF.push(t, "b12a19J/vZMBqBt19S72BIp", "common_bg_setting_down.png.aemeta");
ae.AssetMeta.image({
borderTop: 40,
borderBottom: 40,
borderLeft: 40,
borderRight: 40
});
cc._RF.pop();
}, {} ],
"common_bg_setting_up.png.aemeta": [ function(e, t) {
"use strict";
cc._RF.push(t, "981aa3DZKdEX5vZgQI39p77", "common_bg_setting_up.png.aemeta");
ae.AssetMeta.image({
borderTop: 20,
borderBottom: 20,
borderLeft: 20,
borderRight: 20
});
cc._RF.pop();
}, {} ],
"common_btn_setting_android.png.aemeta": [ function(e, t) {
"use strict";
cc._RF.push(t, "be1deDJ5thGgIh2AhPafM+V", "common_btn_setting_android.png.aemeta");
ae.AssetMeta.image({
borderTop: 25,
borderBottom: 25,
borderLeft: 25,
borderRight: 25
});
cc._RF.pop();
}, {} ],
"common_btn_setting_iOS.png.aemeta": [ function(e, t) {
"use strict";
cc._RF.push(t, "e1284Msc1RK/oFYf0W9eGrl", "common_btn_setting_iOS.png.aemeta");
ae.AssetMeta.image({
borderTop: 25,
borderBottom: 25,
borderLeft: 25,
borderRight: 25
});
cc._RF.pop();
}, {} ],
"line1.png.aemeta": [ function(e, t) {
"use strict";
cc._RF.push(t, "cea77pZn79LkpvcgCrdRTIb", "line1.png.aemeta");
ae.AssetMeta.image({
borderTop: 4,
borderBottom: 4,
borderLeft: 0,
borderRight: 0,
packable: !0,
wrapMode: "Clamp",
filterMode: "Bilinear",
premultiplyAlpha: !0
});
cc._RF.pop();
}, {} ],
"line2.png.aemeta": [ function(e, t) {
"use strict";
cc._RF.push(t, "19118hbYv5IeoEpaIfA3wDf", "line2.png.aemeta");
ae.AssetMeta.image({
borderTop: 4,
borderBottom: 4,
borderLeft: 0,
borderRight: 0,
packable: !0,
wrapMode: "Clamp",
filterMode: "Bilinear",
premultiplyAlpha: !0
});
cc._RF.pop();
}, {} ],
"setting_btn_common.png.aemeta": [ function(e, t) {
"use strict";
cc._RF.push(t, "a5e8dqoNTpFgI0PPJLnxKoF", "setting_btn_common.png.aemeta");
ae.AssetMeta.image({
borderTop: 22,
borderBottom: 22,
borderLeft: 22,
borderRight: 22
});
cc._RF.pop();
}, {} ]
}, {}, [ "G5_FBase_AeIndex", "G5_FBase_Namespace", "BG2.png.aemeta", "BGGoalDialog.png.aemeta", "bar1.png.aemeta", "bar2.png.aemeta", "common_bg_setting_down.png.aemeta", "common_bg_setting_up.png.aemeta", "common_btn_setting_android.png.aemeta", "common_btn_setting_iOS.png.aemeta", "line1.png.aemeta", "line2.png.aemeta", "setting_btn_common.png.aemeta", "G5_FBase_AdConfig", "G5_FBase_AdFailedSignal", "G5_FBase_AdManager", "G5_FBase_AdRouter", "G5_FBase_BannerAd", "G5_FBase_InterstitialAd", "G5_FBase_RewardedAd", "G5_FBase_GoalAnimConfig", "G5_FBase_GoalAnimData", "G5_FBase_GoalAnimDomain", "G5_FBase_GoalAnimLogic", "G5_FBase_GoalAnimRender", "G5_FBase_GoalFunctions", "G5_FBase_GoalRouters", "G5_FBase_GoalSignals", "G5_FBase_OnProgressAnimComplete", "G5_FBase_ProgressAnimCompleteRouter", "G5_FBase_BackConfirmUiDomain", "G5_FBase_BackConfirmUiLogics", "G5_FBase_BackConfirmUiRender", "G5_FBase_BackConfirmUiRouters", "G5_FBase_BackConfirmUiSignals", "G5_FBase_AdFailedData", "G5_FBase_ComboPopupData", "G5_FBase_ConnectionLineData", "G5_FBase_EliminationData", "G5_FBase_GameData", "G5_FBase_GoalDialogData", "G5_FBase_MainBgData", "G5_FBase_RevivePanelData", "G5_FBase_ScorePopupData", "G5_FBase_TileData", "G5_FBase_TileGlowData", "G5_FBase_ComboPopupConfig", "G5_FBase_ConnectPulseConfig", "G5_FBase_ConnectionLineConfig", "G5_FBase_DirAsset", "G5_FBase_DirectionConfig", "G5_FBase_EliminationAnimConfig", "G5_FBase_EncouragementConfig", "G5_FBase_EngineFeatureColorTestConfig", "G5_FBase_FrameAssetConfig", "G5_FBase_GameConfig", "G5_FBase_ResPathConfig", "G5_FBase_ReviveConfig", "G5_FBase_ScorePopupConfig", "G5_FBase_SpawnConfig", "G5_FBase_SpawnStrategyConfig", "G5_FBase_TileColorConfig", "G5_FBase_UIColorConfig", "G5_FBase_VibrateConfig", "G5_FBase_ZIndexConfig", "G5_FBase_AdFailedDomain", "G5_FBase_ComboPopupDomain", "G5_FBase_ConnectionLineDomain", "G5_FBase_EliminationDomain", "G5_FBase_GameDomain", "G5_FBase_GoalDialogDomain", "G5_FBase_GridData", "G5_FBase_GridDomain", "G5_FBase_MainBgDomain", "G5_FBase_RevivePanelDomain", "G5_FBase_ScorePopupDomain", "G5_FBase_TileDomain", "G5_FBase_TileGlowDomain", "G5_FBase_TouchDomain", "G5_FBase_DropLogic", "G5_FBase_FillLogic", "G5_FBase_AdjustSpawnPool", "G5_FBase_AnalyzeBoardForPool", "G5_FBase_AniFunctions", "G5_FBase_BlockAlgo", "G5_FBase_BoardSnapshot", "G5_FBase_BuildAdjustedSpawnPool", "G5_FBase_BuildBoardGrid", "G5_FBase_BuildMergeTweens", "G5_FBase_BuildSpawnPool", "G5_FBase_CalcFontSize", "G5_FBase_CalcMergeResult", "G5_FBase_CalcScore", "G5_FBase_CalcTilePos", "G5_FBase_CanProcessTouch", "G5_FBase_CheckGameOver", "G5_FBase_CollectConnectedTiles", "G5_FBase_FormatNumber", "G5_FBase_GetColor", "G5_FBase_GetColorUp", "G5_FBase_GetEncouragement", "G5_FBase_GetMaxTileValue", "G5_FBase_GetRenderOffset", "G5_FBase_GetTileValue", "G5_FBase_GetWeightedRandom", "G5_FBase_IsAdjacent", "G5_FBase_IsGuideTargetTile", "G5_FBase_IsScoreActive", "G5_FBase_IsScorePopupActive", "G5_FBase_Log2", "G5_FBase_MarkConnectionLineDirty", "G5_FBase_MigrateStorageData", "G5_FBase_NextPowerOf2", "G5_FBase_ParseStrategyWeights", "G5_FBase_PlayButtonSound", "G5_FBase_PlayConnectPulseAnim", "G5_FBase_PlayVibrate", "G5_FBase_ScreenToGrid", "G5_FBase_SelectAlgorithmByWeight", "G5_FBase_SetTileValue", "G5_FBase_SetTileValueWithPower", "G5_FBase_ShowAdFailedUIFunction", "G5_FBase_ShowGoalDialog", "G5_FBase_SimulateMaxChain", "G5_FBase_SyncGlowState", "G5_FBase_TweenSlotAlpha", "G5_FBase_UpdateTouchLocalPos", "G5_FBase_CreateRevivePanelFunction", "G5_FBase_HideRevivePanelFunction", "G5_FBase_ShowRevivePanelFunction", "G5_FBase_MathUtils", "G5_FBase_Utils", "G5_FBase_GameInitLogic", "G5_FBase_NewGameLogic", "G5_FBase_ResetFunctions", "G5_FBase_CalcFingerPos", "G5_FBase_GuideConfig", "G5_FBase_GuideData", "G5_FBase_GuideDomain", "G5_FBase_GuideFingerData", "G5_FBase_GuideFingerDomain", "G5_FBase_GuideFingerRender", "G5_FBase_GuideLogic", "G5_FBase_GuideMaskRender", "G5_FBase_GuideRoutersDispatch", "G5_FBase_GuideSignals", "G5_FBase_LevelUpConfig", "G5_FBase_LevelUpData", "G5_FBase_LevelUpDomain", "G5_FBase_LevelUpLogic", "G5_FBase_LevelUpRender", "G5_FBase_LevelUpRouters", "G5_FBase_LevelUpSignals", "G5_FBase_OnLevelUpFrontInCompleteLogic", "G5_FBase_OnLevelUpFrontInitCompleteLogic", "G5_FBase_LevelUpFrontCompleteToLevelUpFrontInCompleteRouter", "G5_FBase_LevelUpFrontCompleteToLevelUpFrontInitCompleteRouter", "G5_FBase_UIEventToLevelUpFrontCompleteRouter", "G5_FBase_LevelUpFrontCompleteSignal", "G5_FBase_LevelUpFrontInCompleteSignal", "G5_FBase_LevelUpFrontInitCompleteSignal", "G5_FBase_Load", "G5_FBase_AdapterLogic", "G5_FBase_AnimateMerge", "G5_FBase_ButtonSoundDispatch", "G5_FBase_ConnectionManager", "G5_FBase_EncouragementHideLogic", "G5_FBase_EncouragementManager", "G5_FBase_ExitGameLogic", "G5_FBase_GoalDialogManager", "G5_FBase_MergeDelayTrigger", "G5_FBase_OnMergeComplete", "G5_FBase_PersistentDataManager", "G5_FBase_ReviveAnimation", "G5_FBase_ReviveManager", "G5_FBase_TileToGlow", "G5_FBase_AdFailedRender", "G5_FBase_ComboPopupRender", "G5_FBase_ConnectionLineRender", "G5_FBase_EliminationRender", "G5_FBase_GameUIRender", "G5_FBase_GoalDialogRender", "G5_FBase_GridBgRender", "G5_FBase_MainBgRender", "G5_FBase_ReviveRender", "G5_FBase_ScorePopupRender", "G5_FBase_TileGlowRender", "G5_FBase_TileRender", "G5_FBase_TouchRender", "G5_FBase_AniRouter", "G5_FBase_BackButtonRouter", "G5_FBase_GameFlowRouter", "G5_FBase_GoalDialogRouter", "G5_FBase_GridTouchRouter", "G5_FBase_KeyboardBackRouter", "G5_FBase_ReviveRouter", "G5_FBase_WorldRouter", "G5_FBase_SettingConfig", "G5_FBase_SettingData", "G5_FBase_SettingDomain", "G5_FBase_SettingLogic", "G5_FBase_SettingRender", "G5_FBase_SettingRouters", "G5_FBase_SettingSignals", "G5_FBase_GameSignals", "G5_FBase_TouchSignals", "G5_FBase_Track", "G5_FBase_UIConfig", "G5_FBase_UIFunc", "G5_FBase_UIRootDomain", "G5_FBase_UIRootRender", "G5_FBase_UIHelper", "G5_FBase_WorldAtom" ]);
//# sourceMappingURL=index.js.map
