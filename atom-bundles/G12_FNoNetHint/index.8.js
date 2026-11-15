window.__require = function t(e, o, n) {
function i(a, c) {
if (!o[a]) {
if (!e[a]) {
var f = a.split("/");
f = f[f.length - 1];
if (!e[f]) {
var p = "function" == typeof __require && __require;
if (!c && p) return p(f, !0);
if (r) return r(f, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = f;
}
var u = o[a] = {
exports: {}
};
e[a][0].call(u.exports, function(t) {
return i(e[a][1][t] || t);
}, u, u.exports, t, e, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
G12_FNoNetHint_AeIndex: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ff851Xu2LtHdaAw3nvas+58", "G12_FNoNetHint_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNoNetHint = void 0;
var n = t("./G12_FNoNetHint_Namespace");
Object.defineProperty(o, "G12_FNoNetHint", {
enumerable: !0,
get: function() {
return n.G12_FNoNetHint;
}
});
cc._RF.pop();
}, {
"./G12_FNoNetHint_Namespace": "G12_FNoNetHint_Namespace"
} ],
G12_FNoNetHint_CheckResultWinClickLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "dd36aSMqO5AdpqBs5hhS/lM", "G12_FNoNetHint_CheckResultWinClickLogic");
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
o.G12_FNoNetHint_CheckResultWinClickLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onExecute = function() {
if (this.getNetworkState()) this.resultContinueRouter.receiveAction = ae.ReceiveAction.Queue; else {
this.noNetHintClickLogic.runtime.backToEntry = !0;
var t = this.checkLoadedLevelConfigFunc();
t || this.showNoNetHintOverlayFunc();
this.resultContinueRouter.receiveAction = t ? ae.ReceiveAction.Queue : ae.ReceiveAction.Discard;
}
};
var o, n, c, f, p;
r([ ae.routeReceive, ae.onChain, ae.bindAtom("G12_FBase_ResultContinueRouter"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "resultContinueRouter", void 0);
r([ ae.bindAtom("G_FAtom_GetNetworkState"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "getNetworkState", void 0);
r([ ae.bindAtom("G12_FBase_CheckLoadedLevelConfigFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "checkLoadedLevelConfigFunc", void 0);
r([ ae.bindAtom("G12_FNoNetHint_NoNetHintClickLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "noNetHintClickLogic", void 0);
r([ ae.bindAtom("G12_FNoNetHint_ShowNoNetHintOverlayFunc"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], e.prototype, "showNoNetHintOverlayFunc", void 0);
return r([ ae.atomClass("G12_FNoNetHint_CheckResultWinClickLogic") ], e);
}(ae.LogicAtom);
o.G12_FNoNetHint_CheckResultWinClickLogic = c;
cc._RF.pop();
}, {} ],
G12_FNoNetHint_Click2NoNetHintRouter: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "321969OKr5D6a9EkkNjWpZR", "G12_FNoNetHint_Click2NoNetHintRouter");
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
o.G12_FNoNetHint_Click2NoNetHintRouter = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "fromSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FNoNetHint_NoNetHintClickSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "toSignal", void 0);
return r([ ae.atomClass("G12_FNoNetHint_Click2NoNetHintRouter") ], e);
}(ae.SignalRouterAtom);
o.G12_FNoNetHint_Click2NoNetHintRouter = c;
cc._RF.pop();
}, {} ],
G12_FNoNetHint_InitSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "97658FYxhhNPq43b4qGnUnB", "G12_FNoNetHint_InitSignal");
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
o.G12_FNoNetHint_InitSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "domain", void 0);
return r([ ae.atomClass("G12_FNoNetHint_InitSignal") ], e);
}(ae.SignalAtom);
o.G12_FNoNetHint_InitSignal = c;
cc._RF.pop();
}, {} ],
G12_FNoNetHint_LevelConfigStoredNoNetVariantLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "27a78/NNxREO4jLELChBD7X", "G12_FNoNetHint_LevelConfigStoredNoNetVariantLogic");
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
o.G12_FNoNetHint_LevelConfigStoredNoNetVariantLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
if (t.jsonData.error) {
t.logFunc().error("G12_FNoNetHint_LevelConfigStoredNoNetVariantLogic jsonData error", t.jsonData.error);
t.showNoNetHintOverlayFunc();
} else {
var n = t.jsonData.jsonData;
o.runtime.levelConfig[n.id] = n;
t.loadGameDataLogic.runtime.gameState = t.constCfg.GameState.Resume;
}
};
};
var o, n, c, f, p, u;
r([ ae.variantOf, ae.bindAtom("G12_FBase_LevelConfigStoredLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "source", void 0);
r([ ae.bindAtom("G_FAtom_JsonData"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "jsonData", void 0);
r([ ae.bindAtom("G12_FNoNetHint_ShowNoNetHintOverlayFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "showNoNetHintOverlayFunc", void 0);
r([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "constCfg", void 0);
r([ ae.bindAtom("G12_FBase_LoadGameDataLogic"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], e.prototype, "loadGameDataLogic", void 0);
r([ ae.bindAtom("G12_FBase_LogFunc"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], e.prototype, "logFunc", void 0);
return r([ ae.atomClass("G12_FNoNetHint_LevelConfigStoredNoNetVariantLogic") ], e);
}(ae.VariantAtom);
o.G12_FNoNetHint_LevelConfigStoredNoNetVariantLogic = c;
cc._RF.pop();
}, {} ],
G12_FNoNetHint_Namespace: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9f74auVihVPy4M9LUF2ZhOh", "G12_FNoNetHint_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNoNetHint = void 0;
(function(t) {
var e;
(t.FeatureDescription || (t.FeatureDescription = {})).Description = "无网络提示";
(function(t) {
t.Name = "G12";
})(e = t.GameName || (t.GameName = {}));
(function(t) {
t[t.Name = e.Name + "_FNoNetHint"] = "Name";
})(t.FeatureName || (t.FeatureName = {}));
(function(t) {
t[t.Version = 8] = "Version";
t.CreateTime = "2026-03-27 19:39:16";
})(t.BundleInfo || (t.BundleInfo = {}));
})(o.G12_FNoNetHint || (o.G12_FNoNetHint = {}));
cc._RF.pop();
}, {} ],
G12_FNoNetHint_NoNetHintClickLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b0acervmktKuKmq6yjzspf+", "G12_FNoNetHint_NoNetHintClickLogic");
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
o.G12_FNoNetHint_NoNetHintClickLogic = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {
backToEntry: !1
};
};
e.prototype.onExecute = function(t) {
this.noNetHintDomain.destroy(t);
this.commonButtonClickEffectFunc();
this.exitRequest.emitToParent();
};
var o, n, c, f;
r([ ae.onChain, ae.bindAtom("G12_FNoNetHint_NoNetHintClickSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "signal", void 0);
r([ ae.bindAtom("G12_FNoNetHint_NoNetHintDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "noNetHintDomain", void 0);
r([ ae.bindAtom("G_FAtom_ExitRequest"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "exitRequest", void 0);
r([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "commonButtonClickEffectFunc", void 0);
return r([ ae.atomClass("G12_FNoNetHint_NoNetHintClickLogic") ], e);
}(ae.LogicAtom);
o.G12_FNoNetHint_NoNetHintClickLogic = c;
cc._RF.pop();
}, {} ],
G12_FNoNetHint_NoNetHintClickSignal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "80ff50+Rh9FIrg4WcoQX76M", "G12_FNoNetHint_NoNetHintClickSignal");
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
o.G12_FNoNetHint_NoNetHintClickSignal = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G12_FNoNetHint_NoNetHintDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "noNetHintDomain", void 0);
return r([ ae.atomClass("G12_FNoNetHint_NoNetHintClickSignal") ], e);
}(ae.SignalAtom);
o.G12_FNoNetHint_NoNetHintClickSignal = c;
cc._RF.pop();
}, {} ],
G12_FNoNetHint_NoNetHintDomain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "75919nW0uxMyboPoEYaHokJ", "G12_FNoNetHint_NoNetHintDomain");
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
o.G12_FNoNetHint_NoNetHintDomain = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "transform", void 0);
r([ ae.bindAtom("G_FAtom_BoxComponent"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "boxCmp", void 0);
return r([ ae.atomClass("G12_FNoNetHint_NoNetHintDomain") ], e);
}(ae.EntityDomainAtom);
o.G12_FNoNetHint_NoNetHintDomain = c;
cc._RF.pop();
}, {} ],
G12_FNoNetHint_NoNetHintLoader: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c59c7GV8NhIOaCHHoCgFoZD", "G12_FNoNetHint_NoNetHintLoader");
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
o.G12_FNoNetHint_NoNetHintLoader = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineLoad = function() {
var t;
return {
silent: !0,
paths: (t = {}, t[ae.LoaderAssetType.Texture] = [ this.textureCfg.netErrorIcon ], 
t)
};
};
var o;
r([ ae.bindAtom("G12_FNoNetHint_TextureConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "textureCfg", void 0);
return r([ ae.atomClass("G12_FNoNetHint_NoNetHintLoader") ], e);
}(ae.LoadAtom);
o.G12_FNoNetHint_NoNetHintLoader = c;
cc._RF.pop();
}, {} ],
G12_FNoNetHint_NoNetHintRender: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "506e5eMN7NE0o+6yF9+tBSY", "G12_FNoNetHint_NoNetHintRender");
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
o.G12_FNoNetHint_NoNetHintRender = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRender = function() {
var t = this.bgCfg, e = this.createVerticalGradientPixelsFunc({
topColor: t.gameBgGradientTopColor,
bottomColor: t.gameBgGradientBottomColor,
texWidth: t.gradientTexWidth,
texHeight: t.gradientTexHeight
});
return ae.Node({
name: "NoNetHint"
}, ae.Texture2D({
name: "NoNetHintBg",
texWidth: t.gradientTexWidth,
texHeight: t.gradientTexHeight,
pixels: e,
format: ae.PixelFormat.RGBA8888,
filterMin: ae.TextureFilter.Linear,
filterMag: ae.TextureFilter.Linear,
wrapS: ae.TextureWrapMode.ClampToEdge,
wrapT: ae.TextureWrapMode.ClampToEdge,
widget: this.constCfg.FulWidget,
blockInputEvents: !0
}), ae.Sprite({
name: "NoNetHintIcon",
img: this.textureCfg.netErrorIcon,
y: 340
}), ae.Sprite({
name: "NoNetBtn",
img: this.baseTextureCfg.blockFlowBtn1,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: 559,
height: 148,
y: -240,
button: this.constCfg.Button,
event: {
buttonClick: this.click2NoNetHintRouter
}
}, ae.Text({
name: "NoNetBtnText",
y: 9,
text: this.getLanguageCfgFunc("continue"),
fontSize: 64,
rgb: 16777215,
font: this.commonFontAsset.santralExtraBold
})), ae.Text({
name: "NoNetHintText",
fontSize: 64,
width: 700,
height: 200,
rgb: 16777215,
overflow: ae.TextOverflow.SHRINK,
horizontalAlign: ae.TextHorizontalAlign.CENTER,
enableWrapText: !0,
text: this.getLanguageCfgFunc("noNetHintText") || "Network required for download"
}));
};
e.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p, u, _, d, s, y, l;
r([ ae.entityRenderer, ae.bindAtom("G12_FNoNetHint_NoNetHintDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "noNetHintDomain", void 0);
r([ ae.bindAtom("G12_FNoNetHint_TextureConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "textureCfg", void 0);
r([ ae.bindAtom("G12_FBase_TextureCfg"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "baseTextureCfg", void 0);
r([ ae.bindAtom("G12_FBase_GetLanguageCfgFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "getLanguageCfgFunc", void 0);
r([ ae.bindAtom("G12_FBase_CommonFontAsset"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], e.prototype, "commonFontAsset", void 0);
r([ ae.bindAtom("G12_FBase_ConstCfg"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], e.prototype, "constCfg", void 0);
r([ ae.bindAtom("G12_FNoNetHint_Click2NoNetHintRouter"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], e.prototype, "click2NoNetHintRouter", void 0);
r([ ae.bindAtom("G_FAtom_GetUniverseOffset"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], e.prototype, "getUniverseOffset", void 0);
r([ ae.bindAtom("G_FAtom_GetWinSize"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "winSize", void 0);
r([ ae.bindAtom("G12_FBase_BgCfg"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], e.prototype, "bgCfg", void 0);
r([ ae.bindAtom("G12_FBase_CreateVerticalGradientPixelsFunc"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], e.prototype, "createVerticalGradientPixelsFunc", void 0);
return r([ ae.atomClass("G12_FNoNetHint_NoNetHintRender") ], e);
}(ae.RenderAtom);
o.G12_FNoNetHint_NoNetHintRender = c;
cc._RF.pop();
}, {} ],
G12_FNoNetHint_ShowNoNetHintOverlayFunc: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "03d6dydpAdNFYm8e5BrkA+e", "G12_FNoNetHint_ShowNoNetHintOverlayFunc");
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
o.G12_FNoNetHint_ShowNoNetHintOverlayFunc = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineFunction = function() {
var t = this;
return function() {
var e = t.addToLayerFunc(t.layerCfg.UI, t.noNetHintDomain);
t.noNetHintDomain.transform.x.set(e, t.getUniverseOffset().x);
t.noNetHintDomain.transform.y.set(e, t.getUniverseOffset().y);
t.noNetHintDomain.boxCmp.width.set(e, t.winSize().width);
t.noNetHintDomain.boxCmp.height.set(e, t.winSize().height);
return e;
};
};
var o, n, c, f, p;
r([ ae.bindAtom("G12_FBase_AddToLayerFunc"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "addToLayerFunc", void 0);
r([ ae.bindAtom("G12_FBase_LayerCfg"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "layerCfg", void 0);
r([ ae.bindAtom("G12_FNoNetHint_NoNetHintDomain"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "noNetHintDomain", void 0);
r([ ae.bindAtom("G_FAtom_GetUniverseOffset"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "getUniverseOffset", void 0);
r([ ae.bindAtom("G_FAtom_GetWinSize"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], e.prototype, "winSize", void 0);
return r([ ae.atomClass("G12_FNoNetHint_ShowNoNetHintOverlayFunc") ], e);
}(ae.FunctionAtom);
o.G12_FNoNetHint_ShowNoNetHintOverlayFunc = c;
cc._RF.pop();
}, {} ],
G12_FNoNetHint_SilentLoader: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "33787IXGR5MfawSpPrwU110", "G12_FNoNetHint_SilentLoader");
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
o.G12_FNoNetHint_SilentLoader = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onExecute = function() {
this.silentFunc(this.noNetHintLoader);
};
var o, n, c;
r([ ae.onChain, ae.bindAtom("G12_FNoNetHint_InitSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "initSignal", void 0);
r([ ae.bindAtom("G12_FNoNetHint_NoNetHintLoader"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "noNetHintLoader", void 0);
r([ ae.bindAtom("G_FAtom_SilentLoad"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "silentFunc", void 0);
return r([ ae.atomClass("G12_FNoNetHint_SilentLoader") ], e);
}(ae.LogicAtom);
o.G12_FNoNetHint_SilentLoader = c;
cc._RF.pop();
}, {} ],
G12_FNoNetHint_TextureConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f94f48gRNVAT7NxV0ACCwZH", "G12_FNoNetHint_TextureConfig");
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
o.G12_FNoNetHint_TextureConfig = void 0;
var a = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineConfig = function() {
return {
netErrorIcon: this.url("G12_FNoNetHint")("res/textures/BlockFlow_img_NetError")
};
};
return r([ ae.atomClass("G12_FNoNetHint_TextureConfig") ], e);
}(ae.ConfigAtom);
o.G12_FNoNetHint_TextureConfig = a;
cc._RF.pop();
}, {} ],
G12_FNoNetHint_WorldCreate2InitRouter: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6d96bY9369MSJO3gcKPIwbJ", "G12_FNoNetHint_WorldCreate2InitRouter");
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
o.G12_FNoNetHint_WorldCreate2InitRouter = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_WorldCreate"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "sourceSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G12_FNoNetHint_InitSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], e.prototype, "targetSignal", void 0);
return r([ ae.atomClass("G12_FNoNetHint_WorldCreate2InitRouter") ], e);
}(ae.SignalRouterAtom);
o.G12_FNoNetHint_WorldCreate2InitRouter = c;
cc._RF.pop();
}, {} ]
}, {}, [ "G12_FNoNetHint_AeIndex", "G12_FNoNetHint_Namespace", "G12_FNoNetHint_CheckResultWinClickLogic", "G12_FNoNetHint_Click2NoNetHintRouter", "G12_FNoNetHint_InitSignal", "G12_FNoNetHint_LevelConfigStoredNoNetVariantLogic", "G12_FNoNetHint_NoNetHintClickLogic", "G12_FNoNetHint_NoNetHintClickSignal", "G12_FNoNetHint_NoNetHintDomain", "G12_FNoNetHint_NoNetHintLoader", "G12_FNoNetHint_NoNetHintRender", "G12_FNoNetHint_ShowNoNetHintOverlayFunc", "G12_FNoNetHint_SilentLoader", "G12_FNoNetHint_TextureConfig", "G12_FNoNetHint_WorldCreate2InitRouter" ]);