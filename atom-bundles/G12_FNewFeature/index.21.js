window.__require = function e(t, o, n) {
function r(i, c) {
if (!o[i]) {
if (!t[i]) {
var u = i.split("/");
u = u[u.length - 1];
if (!t[u]) {
var p = "function" == typeof __require && __require;
if (!c && p) return p(u, !0);
if (a) return a(u, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = u;
}
var f = o[i] = {
exports: {}
};
t[i][0].call(f.exports, function(e) {
return r(t[i][1][e] || e);
}, f, f.exports, e, t, o, n);
}
return o[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < n.length; i++) r(n[i]);
return r;
}({
G12_FNewFeature_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "29ea8TTpZtJS5hcZ+RKNF6j", "G12_FNewFeature_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature = void 0;
var n = e("./G12_FNewFeature_Namespace");
Object.defineProperty(o, "G12_FNewFeature", {
enumerable: !0,
get: function() {
return n.G12_FNewFeature;
}
});
cc._RF.pop();
}, {
"./G12_FNewFeature_Namespace": "G12_FNewFeature_Namespace"
} ],
G12_FNewFeature_AssetStyleConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fb440RWsRVLPoG1ZuERQssx", "G12_FNewFeature_AssetStyleConfig");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_AssetStyleConfig = void 0;
var i = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
featureName: "G12_FNewFeature"
};
};
return a([ ae.atomClass("G12_FNewFeature_AssetStyleConfig") ], t);
}(ae.ConfigAtom);
o.G12_FNewFeature_AssetStyleConfig = i;
cc._RF.pop();
}, {} ],
G12_FNewFeature_CheckLoadGamePanel2LoadUnlockPanelRouterLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e521cgDLXBLrqV+5vnt8oKG", "G12_FNewFeature_CheckLoadGamePanel2LoadUnlockPanelRouterLogic");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_CheckLoadGamePanel2LoadUnlockPanelRouterLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
if (this.unlockPanelDomain.count() > 0) this.router.receiveAction = ae.ReceiveAction.Discard; else {
var e = this.getLevelFunc();
void 0 !== this.getNewFeatureCfgFunc(e) ? this.createUnlockPanelLogic.storage.unlockLevel >= e ? this.router.receiveAction = ae.ReceiveAction.Discard : this.router.receiveAction = ae.ReceiveAction.Queue : this.router.receiveAction = ae.ReceiveAction.Discard;
}
};
var o, n, c, u, p;
a([ ae.routeReceive, ae.onChain, ae.bindAtom("G12_FNewFeature_LoadGamePanel2LoadUnlockPanelRouter"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
a([ ae.bindAtom("G12_FNewFeature_UnlockPanelDomain"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "unlockPanelDomain", void 0);
a([ ae.bindAtom("G12_FBase_GetLevelFunc"), i("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getLevelFunc", void 0);
a([ ae.bindAtom("G12_FNewFeature_GetNewFeatureCfgFunc"), i("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getNewFeatureCfgFunc", void 0);
a([ ae.bindAtom("G12_FNewFeature_LoadUnlockPanelLogic"), i("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "createUnlockPanelLogic", void 0);
return a([ ae.atomClass("G12_FNewFeature_CheckLoadGamePanel2LoadUnlockPanelRouterLogic") ], t);
}(ae.LogicAtom);
o.G12_FNewFeature_CheckLoadGamePanel2LoadUnlockPanelRouterLogic = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_CommonDirAsset: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d7c9dXtmZpFeJFfRZVz1zRh", "G12_FNewFeature_CommonDirAsset");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_CommonDirAsset = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url(this.assetStyleConfig.featureName);
return {
spinesDir: e("res/spines"),
remoteTexturesDir: e(ae.RemoteCdnProtocol + "res/textures/")
};
};
var o;
a([ ae.bindAtom("G12_FNewFeature_AssetStyleConfig"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "assetStyleConfig", void 0);
return a([ ae.atomClass("G12_FNewFeature_CommonDirAsset") ], t);
}(ae.ConfigAtom);
o.G12_FNewFeature_CommonDirAsset = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_ConstCfg: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cb3f6cmnSZOzr40X65RCPdo", "G12_FNewFeature_ConstCfg");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_ConstCfg = void 0;
var i = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
unlockInDuration: .2,
unlockInAlpha: 200,
unlockOutDuration: .2,
unlockOutAlpha: 0,
unlockPanelTapEnableDelaySec: 3
};
};
return a([ ae.atomClass("G12_FNewFeature_ConstCfg") ], t);
}(ae.ConfigAtom);
o.G12_FNewFeature_ConstCfg = i;
cc._RF.pop();
}, {} ],
G12_FNewFeature_ContinueLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1b33ezqrUVKlq2M90PmfN49", "G12_FNewFeature_ContinueLogic");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_ContinueLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.loadUnlockPanelLogic.runtime.panelRootEid;
if (e) {
this.commonButtonClickEffectFunc();
var t = this.unlockPanelDomain.spineCmp;
t.backdropTapEnabled.set(e, 0);
this.tween(e, [ [ ae.TweenStepType.To, t, {
overlayAlpha: this.constCfg.unlockOutAlpha
}, this.constCfg.unlockOutDuration, ae.TweenEasing.CubicInOut ], [ ae.TweenStepType.Router, this.unlockOutMaskTweenEndRouter ] ]);
}
};
var o, n, c, u, p, f, l;
a([ ae.onChain, ae.bindAtom("G12_FNewFeature_ContinueSignal"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "continueSignal", void 0);
a([ ae.bindAtom("G12_FNewFeature_UnlockPanelDomain"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "unlockPanelDomain", void 0);
a([ ae.bindAtom("G12_FBase_CommonButtonClickEffectFunc"), i("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "commonButtonClickEffectFunc", void 0);
a([ ae.bindAtom("G12_FNewFeature_LoadUnlockPanelLogic"), i("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "loadUnlockPanelLogic", void 0);
a([ ae.bindAtom("G12_FNewFeature_ConstCfg"), i("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "constCfg", void 0);
a([ ae.bindAtom("G12_FNewFeature_UnlockOutMaskTweenEndRouter"), i("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "unlockOutMaskTweenEndRouter", void 0);
a([ ae.bindAtom("G_FAtom_Tween"), i("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "tween", void 0);
return a([ ae.atomClass("G12_FNewFeature_ContinueLogic") ], t);
}(ae.LogicAtom);
o.G12_FNewFeature_ContinueLogic = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_ContinueRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fec35/9/uZDRYkIRVs0fWhP", "G12_FNewFeature_ContinueRouter");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_ContinueRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
a([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
a([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FNewFeature_ContinueSignal"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return a([ ae.atomClass("G12_FNewFeature_ContinueRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FNewFeature_ContinueRouter = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_ContinueSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "41db7MCmYBJLJyy3pGaBPu/", "G12_FNewFeature_ContinueSignal");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_ContinueSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
a([ ae.bindAtom("G12_FNewFeature_UnlockPanelDomain"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "unlockPanelDomain", void 0);
return a([ ae.atomClass("G12_FNewFeature_ContinueSignal") ], t);
}(ae.SignalAtom);
o.G12_FNewFeature_ContinueSignal = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_GetNewFeatureCfgFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "50cefXEA/BE3KWZZ7sattOz", "G12_FNewFeature_GetNewFeatureCfgFunc");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
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
o.G12_FNewFeature_GetNewFeatureCfgFunc = void 0;
var u = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o, n, r = e.newFeatureConfig;
try {
for (var a = c(Object.keys(r)), i = a.next(); !i.done; i = a.next()) {
var u = r[i.value];
if (null != u && "object" == typeof u) {
var p = u;
if (p.unlockLevel === t) return p;
}
}
} catch (e) {
o = {
error: e
};
} finally {
try {
i && !i.done && (n = a.return) && n.call(a);
} finally {
if (o) throw o.error;
}
}
};
};
var o;
a([ ae.bindAtom("G12_FNewFeature_NewFeatureConfig"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "newFeatureConfig", void 0);
return a([ ae.atomClass("G12_FNewFeature_GetNewFeatureCfgFunc") ], t);
}(ae.FunctionAtom);
o.G12_FNewFeature_GetNewFeatureCfgFunc = u;
cc._RF.pop();
}, {} ],
G12_FNewFeature_GetUnLockIconAssetFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "26f7axHxOpIb53fmzaCd/bi", "G12_FNewFeature_GetUnLockIconAssetFunc");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_GetUnLockIconAssetFunc = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
return e.textureCfg.getBlockFlowNewFeat(t);
};
};
var o;
a([ ae.bindAtom("G12_FNewFeature_TextureCfg"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "textureCfg", void 0);
return a([ ae.atomClass("G12_FNewFeature_GetUnLockIconAssetFunc") ], t);
}(ae.FunctionAtom);
o.G12_FNewFeature_GetUnLockIconAssetFunc = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_LoadGamePanel2LoadUnlockPanelRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "10835vbKOVK7bKaexpi4c1U", "G12_FNewFeature_LoadGamePanel2LoadUnlockPanelRouter");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_LoadGamePanel2LoadUnlockPanelRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
a([ ae.routeFrom, ae.bindAtom("G12_FBase_LoadGamePanelSignal"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
a([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FNewFeature_LoadUnlockPanelSignal"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return a([ ae.atomClass("G12_FNewFeature_LoadGamePanel2LoadUnlockPanelRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FNewFeature_LoadGamePanel2LoadUnlockPanelRouter = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_LoadUnlockPanelLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "250b9bh1b1Bbb82JI/JVxHc", "G12_FNewFeature_LoadUnlockPanelLogic");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_LoadUnlockPanelLogic = void 0;
var c = e("../../G12_FNewFeature_Namespace"), u = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
panelRootEid: 0
};
};
t.prototype.defineStorageData = function() {
return {
unlockLevel: 0
};
};
t.prototype.onExecute = function(e, t) {
this.uiMgrFunc().cfg[c.G12_FNewFeature.UnlockPanelUiKey.Key] || (this.uiMgrFunc().cfg[c.G12_FNewFeature.UnlockPanelUiKey.Key] = {
domain: this.unlockPanelDomain,
layerEnum: this.layerCfg.UI,
key: c.G12_FNewFeature.UnlockPanelUiKey.Key
});
var o = this.showPageFunc(this.uiMgrFunc().cfg[c.G12_FNewFeature.UnlockPanelUiKey.Key]);
t.runtime.panelRootEid = o;
var n = this.getLevelFunc(), r = this.getNewFeatureCfgFunc(n);
this.unlockPanelDomain.cmp.unlockIcon.set(o, "");
this.unlockPanelDomain.cmp.name.set(o, r.unlockName);
this.unlockPanelDomain.cmp.unlockText.set(o, r.unlockDesc);
this.unlockPanelDomain.cmp.unlockIcon.set(o, r.unlockIcon);
this.unlockPanelDomain.cmp.unlockDesc.set(o, r.unlockDesc);
var a = this.unlockPanelDomain.spineCmp;
a.overlayAlpha.set(o, this.constCfg.unlockOutAlpha);
a.spineAnimName.set(o, "in");
a.spineAnimLoop.set(o, !1);
a.backdropTapEnabled.set(o, 0);
t.storage.unlockLevel = n;
var i = [ [ ae.TweenStepType.To, a, {
overlayAlpha: this.constCfg.unlockInAlpha
}, this.constCfg.unlockInDuration, ae.TweenEasing.CubicInOut ] ], u = [ [ ae.TweenStepType.Delay, this.constCfg.unlockPanelTapEnableDelaySec ], [ ae.TweenStepType.To, a, {
backdropTapEnabled: 1
}, 0 ] ];
this.tween(o, [ [ ae.TweenStepType.Parallel, [ [ ae.TweenStepType.Repeat, 1, i ], [ ae.TweenStepType.Repeat, 1, u ] ] ] ]);
};
var o, n, u, p, f, l, s, _, d, y;
a([ ae.onChain, ae.bindAtom("G12_FNewFeature_LoadUnlockPanelSignal"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "loadUnlockPanelSignal", void 0);
a([ ae.bindAtom("G12_FBase_UIMgrFunc"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiMgrFunc", void 0);
a([ ae.bindAtom("G12_FBase_LayerCfg"), i("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "layerCfg", void 0);
a([ ae.bindAtom("G12_FNewFeature_UnlockPanelDomain"), i("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "unlockPanelDomain", void 0);
a([ ae.bindAtom("G12_FNewFeature_GetNewFeatureCfgFunc"), i("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getNewFeatureCfgFunc", void 0);
a([ ae.bindAtom("G12_FBase_GetLevelFunc"), i("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "getLevelFunc", void 0);
a([ ae.bindAtom("G_FAtom_Tween"), i("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "tween", void 0);
a([ ae.bindAtom("G12_FNewFeature_ConstCfg"), i("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "constCfg", void 0);
a([ ae.bindAtom("G12_FBase_AudioMgrFunc"), i("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "audioMgrFunc", void 0);
a([ ae.bindAtom("G12_FBase_ShowPageFunc"), i("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "showPageFunc", void 0);
return a([ ae.atomClass("G12_FNewFeature_LoadUnlockPanelLogic") ], t);
}(ae.LogicAtom);
o.G12_FNewFeature_LoadUnlockPanelLogic = u;
cc._RF.pop();
}, {
"../../G12_FNewFeature_Namespace": "G12_FNewFeature_Namespace"
} ],
G12_FNewFeature_LoadUnlockPanelSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "46d6bmsgy5Ahruc1iLuo8Q9", "G12_FNewFeature_LoadUnlockPanelSignal");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_LoadUnlockPanelSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
a([ ae.bindAtom("G_FAtom_RootDomain"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return a([ ae.atomClass("G12_FNewFeature_LoadUnlockPanelSignal") ], t);
}(ae.SignalAtom);
o.G12_FNewFeature_LoadUnlockPanelSignal = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_Loader: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "68b79HKhmBB9Is1LQ28fJvx", "G12_FNewFeature_Loader");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_Loader = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineLoad = function() {
var e;
return {
directories: [ this.commonDirAsset.spinesDir, this.commonDirAsset.remoteTexturesDir ],
paths: (e = {}, e[ae.LoaderAssetType.Json] = [ this.remotePathConfig.NewFeatureCfg ], 
e),
onlyDownload: !0,
silent: !0
};
};
var o, n;
a([ ae.bindAtom("G12_FNewFeature_CommonDirAsset"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "commonDirAsset", void 0);
a([ ae.bindAtom("G12_FBase_RemotePathConfig"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "remotePathConfig", void 0);
return a([ ae.atomClass("G12_FNewFeature_Loader") ], t);
}(ae.LoadAtom);
o.G12_FNewFeature_Loader = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "580cbIRcktLIZRx0bnk8xv+", "G12_FNewFeature_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "机制解锁";
(function(e) {
e.Name = "G12";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FNewFeature"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 21] = "Version";
e.CreateTime = "2026-03-24 16:40:31";
})(e.BundleInfo || (e.BundleInfo = {}));
(e.UnlockPanelUiKey || (e.UnlockPanelUiKey = {})).Key = "UnlockPanel";
})(o.G12_FNewFeature || (o.G12_FNewFeature = {}));
cc._RF.pop();
}, {} ],
G12_FNewFeature_NewFeatureConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ea380jmSnxEfIWDrTuRVIC7", "G12_FNewFeature_NewFeatureConfig");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_NewFeatureConfig = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
JsonAsset: this.remotePathConfig.NewFeatureCfg
};
};
var o, n;
a([ ae.bindAtom("G12_FNewFeature_AssetStyleConfig"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "assetStyleConfig", void 0);
a([ ae.bindAtom("G12_FBase_RemotePathConfig"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "remotePathConfig", void 0);
return a([ ae.atomClass("G12_FNewFeature_NewFeatureConfig") ], t);
}(ae.ConfigAtom);
o.G12_FNewFeature_NewFeatureConfig = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_SilentAssetLoaderLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b5711X/2RxM8L2+kVrSAeiT", "G12_FNewFeature_SilentAssetLoaderLogic");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_SilentAssetLoaderLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.silentLoad(this.silentAssetLoader);
};
var o, n, c;
a([ ae.onChain, ae.bindAtom("G12_FNewFeature_SilentAssetLoaderSignal"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
a([ ae.bindAtom("G_FAtom_SilentLoad"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "silentLoad", void 0);
a([ ae.bindAtom("G12_FNewFeature_Loader"), i("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "silentAssetLoader", void 0);
return a([ ae.atomClass("G12_FNewFeature_SilentAssetLoaderLogic") ], t);
}(ae.LogicAtom);
o.G12_FNewFeature_SilentAssetLoaderLogic = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_SilentAssetLoaderSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a6b551kj4pDZ4R94ssN15Fx", "G12_FNewFeature_SilentAssetLoaderSignal");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_SilentAssetLoaderSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
a([ ae.bindAtom("G_FAtom_RootDomain"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
return a([ ae.atomClass("G12_FNewFeature_SilentAssetLoaderSignal") ], t);
}(ae.SignalAtom);
o.G12_FNewFeature_SilentAssetLoaderSignal = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_SpineCfg: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cbc3ayH01tHBrC4kfv17zTn", "G12_FNewFeature_SpineCfg");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_SpineCfg = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
unlock: this.url(this.assetStyleConfig.featureName)("res/spines/result_newFeature")
};
};
var o;
a([ ae.bindAtom("G12_FNewFeature_AssetStyleConfig"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "assetStyleConfig", void 0);
return a([ ae.atomClass("G12_FNewFeature_SpineCfg") ], t);
}(ae.ConfigAtom);
o.G12_FNewFeature_SpineCfg = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_TextureCfg: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0146beZ0RxC7pydFA8URDtE", "G12_FNewFeature_TextureCfg");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_TextureCfg = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url(this.assetStyleConfig.featureName);
return {
getBlockFlowNewFeat: function(t) {
return e(ae.RemoteCdnProtocol + "res/textures/BlockFlow_NewFeat_" + t + ".png");
}
};
};
var o;
a([ ae.bindAtom("G12_FNewFeature_AssetStyleConfig"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "assetStyleConfig", void 0);
return a([ ae.atomClass("G12_FNewFeature_TextureCfg") ], t);
}(ae.ConfigAtom);
o.G12_FNewFeature_TextureCfg = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_UI2UnlockSpineCompleteRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "53aaa9NlvhILLoS9LjwubR4", "G12_FNewFeature_UI2UnlockSpineCompleteRouter");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_UI2UnlockSpineCompleteRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
a([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "fromSignal", void 0);
a([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FNewFeature_UnlockSpineCompleteSignal"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toSignal", void 0);
return a([ ae.atomClass("G12_FNewFeature_UI2UnlockSpineCompleteRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FNewFeature_UI2UnlockSpineCompleteRouter = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_UnlockOutMaskTweenEndLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7b510QtFm5EcbOAjC9uZ24G", "G12_FNewFeature_UnlockOutMaskTweenEndLogic");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_UnlockOutMaskTweenEndLogic = void 0;
var c = e("../../G12_FNewFeature_Namespace"), u = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
if (this.loadUnlockPanelLogic.runtime.panelRootEid) {
var e = {
domain: this.unlockPanelDomain,
layerEnum: this.layerCfg.UI,
key: c.G12_FNewFeature.UnlockPanelUiKey.Key
};
this.hidePageFunc(e);
this.loadUnlockPanelLogic.runtime.panelRootEid = 0;
}
};
var o, n, u, p, f, l, s, _;
a([ ae.onChain, ae.bindAtom("G12_FNewFeature_UnlockOutMaskTweenEndSignal"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "unlockOutMaskTweenEndSignal", void 0);
a([ ae.bindAtom("G12_FNewFeature_UnlockPanelDomain"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "unlockPanelDomain", void 0);
a([ ae.bindAtom("G12_FNewFeature_LoadUnlockPanelLogic"), i("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "loadUnlockPanelLogic", void 0);
a([ ae.bindAtom("G12_FBase_UIMgrFunc"), i("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "uiMgrFunc", void 0);
a([ ae.bindAtom("G12_FBase_LayerCfg"), i("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "layerCfg", void 0);
a([ ae.bindAtom("G12_FBase_AudioMgrFunc"), i("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "audioMgrFunc", void 0);
a([ ae.bindAtom("G12_FBase_HidePageFunc"), i("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "hidePageFunc", void 0);
a([ ae.bindAtom("G12_FNewFeature_ContinueLogic"), i("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "continueLogic", void 0);
return a([ ae.atomClass("G12_FNewFeature_UnlockOutMaskTweenEndLogic") ], t);
}(ae.LogicAtom);
o.G12_FNewFeature_UnlockOutMaskTweenEndLogic = u;
cc._RF.pop();
}, {
"../../G12_FNewFeature_Namespace": "G12_FNewFeature_Namespace"
} ],
G12_FNewFeature_UnlockOutMaskTweenEndRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "98d8dyg5rdCG6lPF2JGYyza", "G12_FNewFeature_UnlockOutMaskTweenEndRouter");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_UnlockOutMaskTweenEndRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
a([ ae.routeFrom, ae.bindAtom("G_FAtom_TweenEvent"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tweenEvent", void 0);
a([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G12_FNewFeature_UnlockOutMaskTweenEndSignal"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return a([ ae.atomClass("G12_FNewFeature_UnlockOutMaskTweenEndRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FNewFeature_UnlockOutMaskTweenEndRouter = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_UnlockOutMaskTweenEndSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b1b73/2oLNO46QyF06BZ+Rg", "G12_FNewFeature_UnlockOutMaskTweenEndSignal");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_UnlockOutMaskTweenEndSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
a([ ae.bindAtom("G_FAtom_RootDomain"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return a([ ae.atomClass("G12_FNewFeature_UnlockOutMaskTweenEndSignal") ], t);
}(ae.SignalAtom);
o.G12_FNewFeature_UnlockOutMaskTweenEndSignal = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_UnlockPanelCmp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "59864/Vxw1EfrqdDlb+FKch", "G12_FNewFeature_UnlockPanelCmp");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_UnlockPanelCmp = void 0;
var i = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
name: "",
unlockText: "",
unlockIcon: "",
unlockDesc: ""
};
};
return a([ ae.atomClass("G12_FNewFeature_UnlockPanelCmp") ], t);
}(ae.EntityComponentAtom);
o.G12_FNewFeature_UnlockPanelCmp = i;
cc._RF.pop();
}, {} ],
G12_FNewFeature_UnlockPanelDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9d38cZtb6RHy5KrKiBeUejZ", "G12_FNewFeature_UnlockPanelDomain");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_UnlockPanelDomain = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n, c;
a([ ae.bindAtom("G_FAtom_Transform"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
a([ ae.bindAtom("G12_FNewFeature_UnlockPanelCmp"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "cmp", void 0);
a([ ae.bindAtom("G12_FNewFeature_UnlockPanelSpineCmp"), i("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "spineCmp", void 0);
return a([ ae.atomClass("G12_FNewFeature_UnlockPanelDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FNewFeature_UnlockPanelDomain = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_UnlockPanelNativeBackCheckLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6faa0AWfhpHLqK6jjH5i9Se", "G12_FNewFeature_UnlockPanelNativeBackCheckLogic");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_UnlockPanelNativeBackCheckLogic = void 0;
var c = e("../../G12_FNewFeature_Namespace"), u = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.uiMgrFunc().cfg[c.G12_FNewFeature.UnlockPanelUiKey.Key] && this.checkUIOnTopFunc(this.uiMgrFunc().cfg[c.G12_FNewFeature.UnlockPanelUiKey.Key]) ? this.router.dispatchAction = ae.DispatchAction.FireOnce : this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var o, n, u, p;
a([ ae.routeDispatch, ae.onChain, ae.bindAtom("G12_FNewFeature_UnlockPanelNativeBackRouter"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
a([ ae.bindAtom("G12_FNewFeature_UnlockPanelDomain"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "unlockPanelDomain", void 0);
a([ ae.bindAtom("G12_FBase_UIMgrFunc"), i("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "uiMgrFunc", void 0);
a([ ae.bindAtom("G12_FBase_CheckUIOnTopFunc"), i("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "checkUIOnTopFunc", void 0);
return a([ ae.atomClass("G12_FNewFeature_UnlockPanelNativeBackCheckLogic") ], t);
}(ae.LogicAtom);
o.G12_FNewFeature_UnlockPanelNativeBackCheckLogic = u;
cc._RF.pop();
}, {
"../../G12_FNewFeature_Namespace": "G12_FNewFeature_Namespace"
} ],
G12_FNewFeature_UnlockPanelNativeBackRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ee65bhKRohMjZAFx8yCBlIq", "G12_FNewFeature_UnlockPanelNativeBackRouter");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_UnlockPanelNativeBackRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
a([ ae.routeFrom, ae.bindAtom("G12_FBase_NativeBackSignal"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "nativeBackSignal", void 0);
a([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G12_FNewFeature_ContinueSignal"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toSignal", void 0);
return a([ ae.atomClass("G12_FNewFeature_UnlockPanelNativeBackRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FNewFeature_UnlockPanelNativeBackRouter = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_UnlockPanelRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5a6e3xZpONFG5A+Y4KK08Vi", "G12_FNewFeature_UnlockPanelRender");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_UnlockPanelRender = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.poolMaxSize = function() {
return 0;
};
t.prototype.defineRender = function() {
var e = this, t = this.bgCfg, o = this.createVerticalGradientPixelsFunc({
topColor: t.gradientTopColor,
bottomColor: t.gradientBottomColor,
texWidth: t.gradientTexWidth,
texHeight: t.gradientTexHeight
});
return ae.Node({
name: "UnlockPanel",
widget: this.constCfg.FulWidget,
blockInputEvents: !0
}, ae.Sprite({
name: "UnlockGlobalMask",
img: this.baseTextureCfg.singleColor,
widget: this.constCfg.FulWidget,
rgb: 0,
alpha: [ function(t) {
return e.domain.spineCmp.overlayAlpha[t];
}, [ this.domain.spineCmp, "overlayAlpha" ] ]
}), ae.Texture2D({
name: "UnlockPanelBg",
texWidth: t.gradientTexWidth,
texHeight: t.gradientTexHeight,
pixels: o,
format: ae.PixelFormat.RGBA8888,
filterMin: ae.TextureFilter.Linear,
filterMag: ae.TextureFilter.Linear,
wrapS: ae.TextureWrapMode.ClampToEdge,
wrapT: ae.TextureWrapMode.ClampToEdge,
widget: this.constCfg.FulWidget,
button: {
interactable: [ function(t) {
return 0 !== e.domain.spineCmp.backdropTapEnabled[t];
}, [ this.domain.spineCmp, "backdropTapEnabled" ] ]
},
event: {
buttonClick: this.continueRouter
}
}), ae.Spine({
name: "UnlockPanelSpine",
spineUrl: this.spineCfg.unlock,
animation: {
name: [ function(t) {
return e.domain.spineCmp.spineAnimName[t];
}, [ this.domain.spineCmp, "spineAnimName" ] ],
loop: [ function(t) {
return e.domain.spineCmp.spineAnimLoop[t];
}, [ this.domain.spineCmp, "spineAnimLoop" ] ]
},
event: {
complete: this.ui2UnlockSpineCompleteRouter
},
slots: {
hook_icon: Object.assign(ae.Sprite({
name: "UnlockPanelIcon",
img: [ function(t) {
return e.getUnLockIconAssetFunc(e.domain.cmp.unlockIcon[t]);
}, [ this.domain.cmp, "unlockIcon" ] ],
renderType: ae.RenderType.Simple,
sizeMode: ae.SizeMode.Raw
}), {
bindAlpha: "slot_icon"
}),
hook_txt_1: Object.assign(ae.Text({
name: "UnlockText",
font: this.commonFontAsset.santralExtraBold,
fontSize: 70,
rgb: 16765239,
text: [ function(t) {
return e.domain.cmp.name[t];
}, [ this.domain.cmp, "name" ] ]
}), {
bindAlpha: "slot_txt_1"
}),
hook_txt_2: Object.assign(ae.Text({
name: "UnlockDescText",
font: this.commonFontAsset.santralExtraBold,
fontSize: 42,
lineHeight: 72,
horizontalAlign: ae.TextHorizontalAlign.CENTER,
verticalAlign: ae.TextVerticalAlign.CENTER,
overflow: ae.TextOverflow.RESIZE_HEIGHT,
width: 630,
text: [ function(t) {
return e.domain.cmp.unlockDesc[t];
}, [ this.domain.cmp, "unlockDesc" ] ]
}), {
bindAlpha: "slot_txt_2"
}),
hook_btn: Object.assign(ae.Node({
name: "ContinueButton",
width: 559,
height: 148,
button: this.constCfg.Button,
event: {
buttonClick: this.continueRouter
}
}, ae.Sprite({
name: "ContinueButtonBg",
img: this.baseTextureCfg.blockFlowBtn1,
renderType: ae.RenderType.Sliced,
sizeMode: ae.SizeMode.Custom,
width: 559,
height: 148
}), ae.Text({
name: "ContinueButtonText",
y: 9,
text: this.getLanguageCfgFunc("continue"),
fontSize: 64,
rgb: 16777215,
font: this.commonFontAsset.santralExtraBold
})), {
bindAlpha: "slot_btn"
})
}
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, u, p, f, l, s, _, d, y;
a([ ae.entityRenderer, ae.bindAtom("G12_FNewFeature_UnlockPanelDomain"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
a([ ae.bindAtom("G12_FBase_ConstCfg"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "constCfg", void 0);
a([ ae.bindAtom("G12_FBase_BgCfg"), i("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "bgCfg", void 0);
a([ ae.bindAtom("G12_FBase_CreateVerticalGradientPixelsFunc"), i("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "createVerticalGradientPixelsFunc", void 0);
a([ ae.bindAtom("G12_FBase_CommonFontAsset"), i("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "commonFontAsset", void 0);
a([ ae.bindAtom("G12_FNewFeature_GetUnLockIconAssetFunc"), i("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getUnLockIconAssetFunc", void 0);
a([ ae.bindAtom("G12_FBase_GetLanguageCfgFunc"), i("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "getLanguageCfgFunc", void 0);
a([ ae.bindAtom("G12_FBase_TextureCfg"), i("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "baseTextureCfg", void 0);
a([ ae.bindAtom("G12_FNewFeature_ContinueRouter"), i("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "continueRouter", void 0);
a([ ae.bindAtom("G12_FNewFeature_SpineCfg"), i("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "spineCfg", void 0);
a([ ae.bindAtom("G12_FNewFeature_UI2UnlockSpineCompleteRouter"), i("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "ui2UnlockSpineCompleteRouter", void 0);
return a([ ae.atomClass("G12_FNewFeature_UnlockPanelRender") ], t);
}(ae.RenderAtom);
o.G12_FNewFeature_UnlockPanelRender = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_UnlockPanelSpineCmp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2161fojslhGhp0fZgeFO5Yz", "G12_FNewFeature_UnlockPanelSpineCmp");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_UnlockPanelSpineCmp = void 0;
var i = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
overlayAlpha: 0,
spineAnimName: "in",
spineAnimLoop: !1,
backdropTapEnabled: 0
};
};
return a([ ae.atomClass("G12_FNewFeature_UnlockPanelSpineCmp") ], t);
}(ae.EntityComponentAtom);
o.G12_FNewFeature_UnlockPanelSpineCmp = i;
cc._RF.pop();
}, {} ],
G12_FNewFeature_UnlockSpineCompleteLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "61c2f7rTJxInoLqYAJ2bcLC", "G12_FNewFeature_UnlockSpineCompleteLogic");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_UnlockSpineCompleteLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.loadUnlockPanelLogic.runtime.panelRootEid;
if (e) {
var t = this.unlockPanelDomain.spineCmp.spineAnimName[e];
if ("idle" !== t && "in" === t) {
this.unlockPanelDomain.spineCmp.spineAnimName.set(e, "idle");
this.unlockPanelDomain.spineCmp.spineAnimLoop.set(e, !1);
}
}
};
var o, n, c, u, p, f;
a([ ae.onChain, ae.bindAtom("G12_FNewFeature_UnlockSpineCompleteSignal"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "unlockSpineCompleteSignal", void 0);
a([ ae.bindAtom("G12_FNewFeature_UnlockPanelDomain"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "unlockPanelDomain", void 0);
a([ ae.bindAtom("G_FAtom_Tween"), i("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "tween", void 0);
a([ ae.bindAtom("G12_FNewFeature_ConstCfg"), i("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "constCfg", void 0);
a([ ae.bindAtom("G12_FNewFeature_LoadUnlockPanelLogic"), i("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "loadUnlockPanelLogic", void 0);
a([ ae.bindAtom("G12_FNewFeature_UnlockOutMaskTweenEndRouter"), i("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "unlockOutMaskTweenEndRouter", void 0);
return a([ ae.atomClass("G12_FNewFeature_UnlockSpineCompleteLogic") ], t);
}(ae.LogicAtom);
o.G12_FNewFeature_UnlockSpineCompleteLogic = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_UnlockSpineCompleteSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "eae9cKqWYBGDYCDKBBRgJ/A", "G12_FNewFeature_UnlockSpineCompleteSignal");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_UnlockSpineCompleteSignal = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
a([ ae.bindAtom("G12_FNewFeature_UnlockPanelDomain"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "unlockPanelDomain", void 0);
return a([ ae.atomClass("G12_FNewFeature_UnlockSpineCompleteSignal") ], t);
}(ae.SignalAtom);
o.G12_FNewFeature_UnlockSpineCompleteSignal = c;
cc._RF.pop();
}, {} ],
G12_FNewFeature_WorldCreate2SilentAssetLoaderRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ca7a5CwthlCMJvX6HWB3Osl", "G12_FNewFeature_WorldCreate2SilentAssetLoaderRouter");
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
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FNewFeature_WorldCreate2SilentAssetLoaderRouter = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
a([ ae.routeFrom, ae.bindAtom("G_FAtom_WorldCreate"), i("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
a([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FNewFeature_SilentAssetLoaderSignal"), i("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return a([ ae.atomClass("G12_FNewFeature_WorldCreate2SilentAssetLoaderRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FNewFeature_WorldCreate2SilentAssetLoaderRouter = c;
cc._RF.pop();
}, {} ]
}, {}, [ "G12_FNewFeature_AeIndex", "G12_FNewFeature_Namespace", "G12_FNewFeature_UnlockPanelCmp", "G12_FNewFeature_UnlockPanelSpineCmp", "G12_FNewFeature_AssetStyleConfig", "G12_FNewFeature_CommonDirAsset", "G12_FNewFeature_ConstCfg", "G12_FNewFeature_SpineCfg", "G12_FNewFeature_TextureCfg", "G12_FNewFeature_NewFeatureConfig", "G12_FNewFeature_UnlockPanelDomain", "G12_FNewFeature_GetUnLockIconAssetFunc", "G12_FNewFeature_Loader", "G12_FNewFeature_GetNewFeatureCfgFunc", "G12_FNewFeature_ContinueLogic", "G12_FNewFeature_LoadUnlockPanelLogic", "G12_FNewFeature_SilentAssetLoaderLogic", "G12_FNewFeature_UnlockOutMaskTweenEndLogic", "G12_FNewFeature_UnlockPanelNativeBackCheckLogic", "G12_FNewFeature_UnlockSpineCompleteLogic", "G12_FNewFeature_UnlockPanelRender", "G12_FNewFeature_CheckLoadGamePanel2LoadUnlockPanelRouterLogic", "G12_FNewFeature_ContinueRouter", "G12_FNewFeature_LoadGamePanel2LoadUnlockPanelRouter", "G12_FNewFeature_UI2UnlockSpineCompleteRouter", "G12_FNewFeature_UnlockOutMaskTweenEndRouter", "G12_FNewFeature_UnlockPanelNativeBackRouter", "G12_FNewFeature_WorldCreate2SilentAssetLoaderRouter", "G12_FNewFeature_ContinueSignal", "G12_FNewFeature_LoadUnlockPanelSignal", "G12_FNewFeature_SilentAssetLoaderSignal", "G12_FNewFeature_UnlockOutMaskTweenEndSignal", "G12_FNewFeature_UnlockSpineCompleteSignal" ]);
//# sourceMappingURL=index.js.map
