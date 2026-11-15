window.__require = function e(t, o, n) {
function c(r, u) {
if (!o[r]) {
if (!t[r]) {
var a = r.split("/");
a = a[a.length - 1];
if (!t[a]) {
var f = "function" == typeof __require && __require;
if (!u && f) return f(a, !0);
if (i) return i(a, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = a;
}
var p = o[r] = {
exports: {}
};
t[r][0].call(p.exports, function(e) {
return c(t[r][1][e] || e);
}, p, p.exports, e, t, o, n);
}
return o[r].exports;
}
for (var i = "function" == typeof __require && __require, r = 0; r < n.length; r++) c(n[r]);
return c;
}({
G12_FStuck_ADResult2LockStuckReviveRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "72e337PRZdCxKreaYy9T6qc", "G12_FStuck_ADResult2LockStuckReviveRouter");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_ADResult2LockStuckReviveRouter = void 0;
var u = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G12_FBase_ADResultSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "fromSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FStuck_LockStuckReviveSignal"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toSignal", void 0);
return i([ ae.atomClass("G12_FStuck_ADResult2LockStuckReviveRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FStuck_ADResult2LockStuckReviveRouter = u;
cc._RF.pop();
}, {} ],
G12_FStuck_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6d1d2VsGcNKpJXIs4V4UdFV", "G12_FStuck_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck = void 0;
var n = e("./G12_FStuck_Namespace");
Object.defineProperty(o, "G12_FStuck", {
enumerable: !0,
get: function() {
return n.G12_FStuck;
}
});
cc._RF.pop();
}, {
"./G12_FStuck_Namespace": "G12_FStuck_Namespace"
} ],
G12_FStuck_BGameUpdate2CheckLockStuckRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d0999W3/aNE26cIq+aLw+hA", "G12_FStuck_BGameUpdate2CheckLockStuckRouter");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_BGameUpdate2CheckLockStuckRouter = void 0;
var u = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G12_FBase_BGameUpdateSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "sourceSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G12_FStuck_CheckLockStuckSignal"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "targetSignal", void 0);
return i([ ae.atomClass("G12_FStuck_BGameUpdate2CheckLockStuckRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FStuck_BGameUpdate2CheckLockStuckRouter = u;
cc._RF.pop();
}, {} ],
G12_FStuck_CanCollectAroundFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9640f+5xONOrKKsBvt/CTmY", "G12_FStuck_CanCollectAroundFunc");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_CanCollectAroundFunc = void 0;
var u = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o, n = e.pigDomain.params;
if (n.bulletCount[t] <= 0) return !1;
var c = n.colorType[t];
return (null !== (o = e.blockMgrGetCanCollectCountAroundFunc(!1)[c]) && void 0 !== o ? o : 0) > 0;
};
};
var o, n;
i([ ae.bindAtom("G12_FBase_PigDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "pigDomain", void 0);
i([ ae.bindAtom("G12_FBase_BlockMgrGetCanCollectCountAroundFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "blockMgrGetCanCollectCountAroundFunc", void 0);
return i([ ae.atomClass("G12_FStuck_CanCollectAroundFunc") ], t);
}(ae.FunctionAtom);
o.G12_FStuck_CanCollectAroundFunc = u;
cc._RF.pop();
}, {} ],
G12_FStuck_CheckLockStuckLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "70f9eH9B2RKBaXKiZ5RMWP/", "G12_FStuck_CheckLockStuckLogic");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_CheckLockStuckLogic = void 0;
var u = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
lastPigGroupTrackCount: 0
};
};
t.prototype.onExecute = function(e, t) {
var o = this.groupMgrFunc().get(this.groupMgrFunc().cfg.PigGroupTrack).length, n = o < t.runtime.lastPigGroupTrackCount;
t.runtime.lastPigGroupTrackCount = o;
n && this.blockMgrFunc().getCanCollectCount() > 0 && !this.isKeyFlyUnlockInProgressFunc() && this.queueHasMoreThenOneFunc() && this.isStuckFunc() && (this.queueHasLockAtRow0Func() ? this.showGameResultPageFunc(2) : this.showFailPageFunc());
};
var o, n, u, a, f, p, s, _, y;
i([ ae.onChain, ae.bindAtom("G12_FStuck_CheckLockStuckSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "checkLockStuckSignal", void 0);
i([ ae.bindAtom("G12_FBase_GroupMgrFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "groupMgrFunc", void 0);
i([ ae.bindAtom("G12_FStuck_IsKeyFlyUnlockInProgressFunc"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "isKeyFlyUnlockInProgressFunc", void 0);
i([ ae.bindAtom("G12_FStuck_IsStuckFunc"), r("design:type", "function" == typeof (a = "undefined" != typeof ae && ae.AtomTypeInfer) ? a : Object) ], t.prototype, "isStuckFunc", void 0);
i([ ae.bindAtom("G12_FBase_ShowGameResultPageFunc"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "showGameResultPageFunc", void 0);
i([ ae.bindAtom("G12_FBase_BlockMgrFunc"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "blockMgrFunc", void 0);
i([ ae.bindAtom("G12_FStuck_QueueHasMoreThenOneFunc"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "queueHasMoreThenOneFunc", void 0);
i([ ae.bindAtom("G12_FStuck_QueueHasLockAtRow0Func"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "queueHasLockAtRow0Func", void 0);
i([ ae.bindAtom("G12_FBase_ShowFailPageFunc"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "showFailPageFunc", void 0);
return i([ ae.atomClass("G12_FStuck_CheckLockStuckLogic") ], t);
}(ae.LogicAtom);
o.G12_FStuck_CheckLockStuckLogic = u;
cc._RF.pop();
}, {} ],
G12_FStuck_CheckLockStuckSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3351Dxk9pAZ6IDgSsySBU6", "G12_FStuck_CheckLockStuckSignal");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_CheckLockStuckSignal = void 0;
var u = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
return i([ ae.atomClass("G12_FStuck_CheckLockStuckSignal") ], t);
}(ae.SignalAtom);
o.G12_FStuck_CheckLockStuckSignal = u;
cc._RF.pop();
}, {} ],
G12_FStuck_ConstCfg: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2b7492KvZlL/ZKkRyD8AKx4", "G12_FStuck_ConstCfg");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_ConstCfg = void 0;
var r = e("../../G12_FStuck_Namespace"), u = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
stuckReviveTipsSpine: this.url(r.G12_FStuck.FeatureName.Name)("res/spines/overview_kasi"),
stuckReviveTipsAniName: "init"
};
};
return i([ ae.atomClass("G12_FStuck_ConstCfg") ], t);
}(ae.ConfigAtom);
o.G12_FStuck_ConstCfg = u;
cc._RF.pop();
}, {
"../../G12_FStuck_Namespace": "G12_FStuck_Namespace"
} ],
G12_FStuck_IsKeyFlyUnlockInProgressFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6aacf9lcIZAB5pH/bFgN7Ap", "G12_FStuck_IsKeyFlyUnlockInProgressFunc");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, u = this && this.__values || function(e) {
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
o.G12_FStuck_IsKeyFlyUnlockInProgressFunc = void 0;
var a = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t, o;
try {
for (var n = u(e.keyBlockDomain.collect()), c = n.next(); !c.done; c = n.next()) {
var i = c.value;
if (e.keyBindFlontLockRelation.getSource(i)) return !0;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
c && !c.done && (o = n.return) && o.call(n);
} finally {
if (t) throw t.error;
}
}
return !1;
};
};
var o, n;
i([ ae.bindAtom("G12_FBase_KeyBlockDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "keyBlockDomain", void 0);
i([ ae.bindAtom("G12_FBase_KeyBindFlontLockRelation"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "keyBindFlontLockRelation", void 0);
return i([ ae.atomClass("G12_FStuck_IsKeyFlyUnlockInProgressFunc") ], t);
}(ae.FunctionAtom);
o.G12_FStuck_IsKeyFlyUnlockInProgressFunc = a;
cc._RF.pop();
}, {} ],
G12_FStuck_IsStuckFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b061fYYyzxDpa6tEB4kGHZU", "G12_FStuck_IsStuckFunc");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, u = this && this.__read || function(e, t) {
var o = "function" == typeof Symbol && e[Symbol.iterator];
if (!o) return e;
var n, c, i = o.call(e), r = [];
try {
for (;(void 0 === t || t-- > 0) && !(n = i.next()).done; ) r.push(n.value);
} catch (e) {
c = {
error: e
};
} finally {
try {
n && !n.done && (o = i.return) && o.call(i);
} finally {
if (c) throw c.error;
}
}
return r;
}, a = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(u(arguments[t]));
return e;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_IsStuckFunc = void 0;
var f = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t;
if (!e.queueHasNoPigCanPutOnFunc()) return !1;
var o = e.groupMgrFunc(), n = o.cfg, c = a(o.get(n.PigEmpty), o.get(n.PigRevive), o.get(n.PigReviveEffect), o.get(n.PigGroupOn), o.get(n.PigGroupOff), o.get(n.PigGroupTrack), o.get(n.PigGroupLoop), o.get(n.PigGroupOnStack));
if (0 === c.length) return !0;
for (var i = e.pigDomain.params, r = e.blockMgrFunc().getCanCollectCountAround(), u = 0; u < c.length; u++) {
var f = c[u];
if (e.pigDomain.has(f) && 1 === i.type[f] && !(i.bulletCount[f] <= 0) && (null !== (t = r[i.colorType[f]]) && void 0 !== t ? t : 0) > 0) return !1;
}
return !0;
};
};
var o, n, u, f, p;
i([ ae.bindAtom("G12_FBase_GroupMgrFunc"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "groupMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_PigDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "pigDomain", void 0);
i([ ae.bindAtom("G12_FStuck_CanCollectAroundFunc"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "canCollectAroundFunc", void 0);
i([ ae.bindAtom("G12_FStuck_QueueHasNoPigCanPutOnFunc"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "queueHasNoPigCanPutOnFunc", void 0);
i([ ae.bindAtom("G12_FBase_BlockMgrFunc"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "blockMgrFunc", void 0);
return i([ ae.atomClass("G12_FStuck_IsStuckFunc") ], t);
}(ae.FunctionAtom);
o.G12_FStuck_IsStuckFunc = f;
cc._RF.pop();
}, {} ],
G12_FStuck_LoaderAtom: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "51ff6+lVcNNuo1Y//LI5bVR", "G12_FStuck_LoaderAtom");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_LoaderAtom = void 0;
var u = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineLoad = function() {
var e;
return {
paths: (e = {}, e[ae.LoaderAssetType.SkeletonData] = [ this.constCfg.stuckReviveTipsSpine ], 
e),
silent: !0,
onlyDownload: !0
};
};
var o;
i([ ae.bindAtom("G12_FStuck_ConstCfg"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "constCfg", void 0);
return i([ ae.atomClass("G12_FStuck_LoaderAtom") ], t);
}(ae.LoadAtom);
o.G12_FStuck_LoaderAtom = u;
cc._RF.pop();
}, {} ],
G12_FStuck_LockStuckReviveLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1b245Y5Ro5MWozEJnYuK8WQ", "G12_FStuck_LockStuckReviveLogic");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_LockStuckReviveLogic = void 0;
var u = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.loadOtherDataLogic.runtime.pendingGameFailType;
if (this.touchEndReviveBtnLogic.runtime.canRevive && 2 === e) {
this.touchEndReviveBtnLogic.runtime.canRevive = !1;
this.unlockAllRow0LocksFunc();
}
};
var o, n, u, a;
i([ ae.onChain, ae.bindAtom("G12_FStuck_LockStuckReviveSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "lockStuckReviveSignal", void 0);
i([ ae.bindAtom("G12_FStuck_UnlockAllRow0LocksFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "unlockAllRow0LocksFunc", void 0);
i([ ae.bindAtom("G12_FBase_LoadOtherDataLogic"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "loadOtherDataLogic", void 0);
i([ ae.bindAtom("G12_FBase_RevivePageReviveLogic"), r("design:type", "function" == typeof (a = "undefined" != typeof ae && ae.AtomTypeInfer) ? a : Object) ], t.prototype, "touchEndReviveBtnLogic", void 0);
return i([ ae.atomClass("G12_FStuck_LockStuckReviveLogic") ], t);
}(ae.LogicAtom);
o.G12_FStuck_LockStuckReviveLogic = u;
cc._RF.pop();
}, {} ],
G12_FStuck_LockStuckReviveSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "925890eaT5CBJkiIXfzGTif", "G12_FStuck_LockStuckReviveSignal");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_LockStuckReviveSignal = void 0;
var u = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "revivePageDomain", void 0);
return i([ ae.atomClass("G12_FStuck_LockStuckReviveSignal") ], t);
}(ae.SignalAtom);
o.G12_FStuck_LockStuckReviveSignal = u;
cc._RF.pop();
}, {} ],
G12_FStuck_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "49894X7Y1ZOXq8EB7nPxKhw", "G12_FStuck_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "Block Flow三期程序需求——死锁判断";
(function(e) {
e.Name = "G12";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FStuck"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 13] = "Version";
e.CreateTime = "2026-05-13 19:45:20";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G12_FStuck || (o.G12_FStuck = {}));
cc._RF.pop();
}, {} ],
G12_FStuck_OpenStuckRevivePageFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "36cd9uW7oBETa7QBCeZS6rl", "G12_FStuck_OpenStuckRevivePageFunc");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_OpenStuckRevivePageFunc = void 0;
var u = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.uiMgrFunc(), o = e.showPageFunc(t.cfg.RevivePage), n = e.revivePageDomain.revivePageComp;
n.openTweenActive.set(o, !1);
n.interactionLocked.set(o, !1);
e.stopTween(o);
n.bgAlpha.set(o, e.pageConfig.bgAlpha);
n.fgAlpha.set(o, e.revivePageCfg.fgAlpha);
n.retryBtnScale.set(o, 1);
n.reviveBtnScale.set(o, 1);
n.titleText.set(o, e.getLanguageCfgFunc("lockStuckNoPutOnTitle"));
n.tipText.set(o, e.getLanguageCfgFunc("lockStuckNoPutOnTip"));
var c = e.revivePageDomain.spineComp;
c.spineFullUrl.set(o, e.constCfg.stuckReviveTipsSpine);
c.name.set(o, e.constCfg.stuckReviveTipsAniName);
c.loop.set(o, !0);
e.playRevivePageOpenTweenFunc(o);
};
};
var o, n, u, a, f, p, s, _, y;
i([ ae.bindAtom("G12_FBase_UIMgrFunc"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_RevivePageDomain"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "revivePageDomain", void 0);
i([ ae.bindAtom("G12_FBase_PageConfig"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "pageConfig", void 0);
i([ ae.bindAtom("G12_FBase_ShowPageFunc"), r("design:type", "function" == typeof (a = "undefined" != typeof ae && ae.AtomTypeInfer) ? a : Object) ], t.prototype, "showPageFunc", void 0);
i([ ae.bindAtom("G12_FBase_PlayRevivePageOpenTweenFunc"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "playRevivePageOpenTweenFunc", void 0);
i([ ae.bindAtom("G12_FBase_RevivePageCfg"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "revivePageCfg", void 0);
i([ ae.bindAtom("G_FAtom_StopTween"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "stopTween", void 0);
i([ ae.bindAtom("G12_FBase_GetLanguageCfgFunc"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "getLanguageCfgFunc", void 0);
i([ ae.bindAtom("G12_FStuck_ConstCfg"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "constCfg", void 0);
return i([ ae.atomClass("G12_FStuck_OpenStuckRevivePageFunc") ], t);
}(ae.FunctionAtom);
o.G12_FStuck_OpenStuckRevivePageFunc = u;
cc._RF.pop();
}, {} ],
G12_FStuck_QueueHasLockAtRow0Func: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "28c47Py6HhMapnwto4XTu90", "G12_FStuck_QueueHasLockAtRow0Func");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_QueueHasLockAtRow0Func = void 0;
var u = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
for (var t = e.groupMgrFunc(), o = t.cfg, n = e.getPigColCountFunc(), c = 0; c < n; c++) {
var i = t.get(o.PigList, c)[0];
if (void 0 !== i && e.pigDomain.has(i) && 2 === e.pigDomain.params.type[i]) return !0;
}
return !1;
};
};
var o, n, u;
i([ ae.bindAtom("G12_FBase_GroupMgrFunc"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "groupMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_GetPigColCountFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getPigColCountFunc", void 0);
i([ ae.bindAtom("G12_FBase_PigDomain"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "pigDomain", void 0);
return i([ ae.atomClass("G12_FStuck_QueueHasLockAtRow0Func") ], t);
}(ae.FunctionAtom);
o.G12_FStuck_QueueHasLockAtRow0Func = u;
cc._RF.pop();
}, {} ],
G12_FStuck_QueueHasMoreThenOneFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b124fp7nJlBZqmzmI80UWia", "G12_FStuck_QueueHasMoreThenOneFunc");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_QueueHasMoreThenOneFunc = void 0;
var u = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
for (var t = e.groupMgrFunc(), o = t.cfg, n = e.getPigColCountFunc(), c = 0; c < n; c++) if (t.get(o.PigList, c).length > 1) return !0;
return !1;
};
};
var o, n;
i([ ae.bindAtom("G12_FBase_GroupMgrFunc"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "groupMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_GetPigColCountFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getPigColCountFunc", void 0);
return i([ ae.atomClass("G12_FStuck_QueueHasMoreThenOneFunc") ], t);
}(ae.FunctionAtom);
o.G12_FStuck_QueueHasMoreThenOneFunc = u;
cc._RF.pop();
}, {} ],
G12_FStuck_QueueHasNoPigCanPutOnFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bd408jZbA1DZYYJss/MRdrE", "G12_FStuck_QueueHasNoPigCanPutOnFunc");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_QueueHasNoPigCanPutOnFunc = void 0;
var u = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
for (var t = e.groupMgrFunc(), o = t.cfg, n = e.getPigColCountFunc(), c = 0; c < n; c++) {
var i = t.get(o.PigList, c)[0];
if (void 0 !== i && e.pigDomain.has(i) && 1 === e.pigDomain.params.type[i]) {
if (e.pigDomain.setGroupCmp.setTo[i]) return !1;
if (!(e.pigDomain.params.bindId[i] > 0)) return !1;
var r = e.getBindPigEidsByPigEidFunc(i);
if (e.checkPigListBlockFunc(r)) return !1;
}
}
return !0;
};
};
var o, n, u, a, f;
i([ ae.bindAtom("G12_FBase_GroupMgrFunc"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "groupMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_GetPigColCountFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getPigColCountFunc", void 0);
i([ ae.bindAtom("G12_FBase_PigDomain"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "pigDomain", void 0);
i([ ae.bindAtom("G12_FBase_GetBindPigEidsByPigEidFunc"), r("design:type", "function" == typeof (a = "undefined" != typeof ae && ae.AtomTypeInfer) ? a : Object) ], t.prototype, "getBindPigEidsByPigEidFunc", void 0);
i([ ae.bindAtom("G12_FBase_CheckPigListBlockFunc"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "checkPigListBlockFunc", void 0);
return i([ ae.atomClass("G12_FStuck_QueueHasNoPigCanPutOnFunc") ], t);
}(ae.FunctionAtom);
o.G12_FStuck_QueueHasNoPigCanPutOnFunc = u;
cc._RF.pop();
}, {} ],
G12_FStuck_RegisterReviveLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "499719gXTtMRrGPlUU9d3Gq", "G12_FStuck_RegisterReviveLogic");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_RegisterReviveLogic = void 0;
var u = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.reviveMgrFunc().openRevivePageFuncs()[2] = this.openStuckRevivePageFunc;
};
var o, n, u;
i([ ae.signalStart, ae.onChain, ae.bindAtom("G12_FBase_MainSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "mainSignal", void 0);
i([ ae.bindAtom("G12_FBase_ReviveMgrFunc"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "reviveMgrFunc", void 0);
i([ ae.bindAtom("G12_FStuck_OpenStuckRevivePageFunc"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "openStuckRevivePageFunc", void 0);
return i([ ae.atomClass("G12_FStuck_RegisterReviveLogic") ], t);
}(ae.LogicAtom);
o.G12_FStuck_RegisterReviveLogic = u;
cc._RF.pop();
}, {} ],
G12_FStuck_Revive2LockStuckReviveRouter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0478aFizIlJpJlKReyqAxEb", "G12_FStuck_Revive2LockStuckReviveRouter");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FStuck_Revive2LockStuckReviveRouter = void 0;
var u = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G12_FBase_ReviveSignal"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "fromSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G12_FStuck_LockStuckReviveSignal"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toSignal", void 0);
return i([ ae.atomClass("G12_FStuck_Revive2LockStuckReviveRouter") ], t);
}(ae.SignalRouterAtom);
o.G12_FStuck_Revive2LockStuckReviveRouter = u;
cc._RF.pop();
}, {} ],
G12_FStuck_UnlockAllRow0LocksFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0d047sQxG5MfLh+RgO5K3Rt", "G12_FStuck_UnlockAllRow0LocksFunc");
var n, c = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
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
var c, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var u = e.length - 1; u >= 0; u--) (c = e[u]) && (r = (i < 3 ? c(r) : i > 3 ? c(t, o, r) : c(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, u = this && this.__values || function(e) {
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
o.G12_FStuck_UnlockAllRow0LocksFunc = void 0;
var a = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
for (var t, o, n = 0, c = e.groupMgrFunc(), i = e.pigDataLogic.runtime.maxColCount, r = 0; r < i; r++) {
var a = c.get(c.cfg.PigList, r)[0];
if (a && 2 === e.pigDomain.params.type[a]) {
var f = e.keyBindFlontLockRelation.getTargets(a);
if (!(f && f.length > 0)) {
var p = void 0;
try {
for (var s = (t = void 0, u(e.keyBlockDomain.collect())), _ = s.next(); !_.done; _ = s.next()) {
var y = _.value;
if (!e.keyBindFlontLockRelation.getSource(y)) {
p = y;
break;
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
_ && !_.done && (o = s.return) && o.call(s);
} finally {
if (t) throw t.error;
}
}
if (!p) break;
e.checkAndBindKeyToPigFunc(a, p);
n += 1;
}
}
}
return n;
};
};
var o, n, a, f, p, s;
i([ ae.bindAtom("G12_FBase_KeyBlockDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "keyBlockDomain", void 0);
i([ ae.bindAtom("G12_FBase_KeyBindFlontLockRelation"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "keyBindFlontLockRelation", void 0);
i([ ae.bindAtom("G12_FBase_CheckAndBindKeyToPigFunc"), r("design:type", "function" == typeof (a = "undefined" != typeof ae && ae.AtomTypeInfer) ? a : Object) ], t.prototype, "checkAndBindKeyToPigFunc", void 0);
i([ ae.bindAtom("G12_FBase_GroupMgrFunc"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "groupMgrFunc", void 0);
i([ ae.bindAtom("G12_FBase_PigDomain"), r("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "pigDomain", void 0);
i([ ae.bindAtom("G12_FBase_LoadPigDataLogic"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "pigDataLogic", void 0);
return i([ ae.atomClass("G12_FStuck_UnlockAllRow0LocksFunc") ], t);
}(ae.FunctionAtom);
o.G12_FStuck_UnlockAllRow0LocksFunc = a;
cc._RF.pop();
}, {} ]
}, {}, [ "G12_FStuck_AeIndex", "G12_FStuck_Namespace", "G12_FStuck_ConstCfg", "G12_FStuck_CanCollectAroundFunc", "G12_FStuck_IsKeyFlyUnlockInProgressFunc", "G12_FStuck_IsStuckFunc", "G12_FStuck_OpenStuckRevivePageFunc", "G12_FStuck_QueueHasLockAtRow0Func", "G12_FStuck_QueueHasMoreThenOneFunc", "G12_FStuck_QueueHasNoPigCanPutOnFunc", "G12_FStuck_UnlockAllRow0LocksFunc", "G12_FStuck_LoaderAtom", "G12_FStuck_CheckLockStuckLogic", "G12_FStuck_LockStuckReviveLogic", "G12_FStuck_RegisterReviveLogic", "G12_FStuck_ADResult2LockStuckReviveRouter", "G12_FStuck_BGameUpdate2CheckLockStuckRouter", "G12_FStuck_Revive2LockStuckReviveRouter", "G12_FStuck_CheckLockStuckSignal", "G12_FStuck_LockStuckReviveSignal" ]);
//# sourceMappingURL=index.js.map
