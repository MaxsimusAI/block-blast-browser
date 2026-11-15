window.__require = function t(e, o, i) {
function n(a, c) {
if (!o[a]) {
if (!e[a]) {
var f = a.split("/");
f = f[f.length - 1];
if (!e[f]) {
var s = "function" == typeof __require && __require;
if (!c && s) return s(f, !0);
if (r) return r(f, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = f;
}
var p = o[a] = {
exports: {}
};
e[a][0].call(p.exports, function(t) {
return n(e[a][1][t] || t);
}, p, p.exports, t, e, o, i);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < i.length; a++) n(i[a]);
return n;
}({
G3_FInterstitialAdEffectOrder_AeIndex: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b74a3hdlj9J9a/Fjwkg5vxb", "G3_FInterstitialAdEffectOrder_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FInterstitialAdEffectOrder = void 0;
var i = t("./G3_FInterstitialAdEffectOrder_Namespace");
Object.defineProperty(o, "G3_FInterstitialAdEffectOrder", {
enumerable: !0,
get: function() {
return i.G3_FInterstitialAdEffectOrder;
}
});
cc._RF.pop();
}, {
"./G3_FInterstitialAdEffectOrder_Namespace": "G3_FInterstitialAdEffectOrder_Namespace"
} ],
G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "86cfflPeXpKp6v31bU8zENa", "G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackChain");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackChain = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, i;
r([ ae.routeFrom, ae.bindAtom("G3_FBase_CombatDoPassSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "combatDoPassSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FBase_CombatUiBackSignal"), a("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], e.prototype, "combatUiBackSignal", void 0);
return r([ ae.atomClass("G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackChain = c;
cc._RF.pop();
}, {} ],
G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackDispatchLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a0e14ilFU1OJ7XAqpX4htSH", "G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackDispatchLogic");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackDispatchLogic = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function() {
if (this.worldMeta.worldTime > this.combatDoPassLogic.runtime.overTime) {
console.log("调整过关动画与插屏顺序---返回Home");
this.router.dispatchAction = ae.DispatchAction.FireOnce;
} else this.router.dispatchAction = ae.DispatchAction.Defer;
};
var o, i, c;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "router", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], e.prototype, "worldMeta", void 0);
r([ ae.bindAtom("G3_FBase_CombatDoPassLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "combatDoPassLogic", void 0);
return r([ ae.atomClass("G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackDispatchLogic") ], e);
}(ae.LogicAtom);
o.G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackDispatchLogic = c;
cc._RF.pop();
}, {} ],
G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackReceiveLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0138c3h8dxFc70ImFRBFYOu", "G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackReceiveLogic");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackReceiveLogic = void 0;
var c = function(t) {
n(e, t);
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
return r([ ae.atomClass("G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackReceiveLogic") ], e);
}(ae.LogicAtom);
o.G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackReceiveLogic = c;
cc._RF.pop();
}, {} ],
G3_FInterstitialAdEffectOrder_CombatDoPassToInterstitialAdDispatchLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "05656WORz1D04/eN/FbbKQG", "G3_FInterstitialAdEffectOrder_CombatDoPassToInterstitialAdDispatchLogic");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FInterstitialAdEffectOrder_CombatDoPassToInterstitialAdDispatchLogic = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function() {
if (this.worldMeta.worldTime > this.combatDoPassLogic.runtime.overTime - .5) {
console.log("调整过关动画与插屏顺序---开始播插屏广告");
this.router.dispatchAction = ae.DispatchAction.FireOnce;
} else this.router.dispatchAction = ae.DispatchAction.Defer;
};
var o, i, c;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FBase_CombatDoPassToInterstitialAdChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "router", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], e.prototype, "worldMeta", void 0);
r([ ae.bindAtom("G3_FBase_CombatDoPassLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "combatDoPassLogic", void 0);
return r([ ae.atomClass("G3_FInterstitialAdEffectOrder_CombatDoPassToInterstitialAdDispatchLogic") ], e);
}(ae.LogicAtom);
o.G3_FInterstitialAdEffectOrder_CombatDoPassToInterstitialAdDispatchLogic = c;
cc._RF.pop();
}, {} ],
G3_FInterstitialAdEffectOrder_CombatUiBackKeyChaints: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4d1cb3KCYhFRYOQ59NC+o1/", "G3_FInterstitialAdEffectOrder_CombatUiBackKeyChaints");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FInterstitialAdEffectOrder_CombatUiBackKeyChaints = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, i;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_Keyboard"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "keyboard", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FBase_CombatUiBackSignal"), a("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], e.prototype, "combatUiBackSignal", void 0);
return r([ ae.atomClass("G3_FInterstitialAdEffectOrder_CombatUiBackKeyChaints") ], e);
}(ae.SignalRouterAtom);
o.G3_FInterstitialAdEffectOrder_CombatUiBackKeyChaints = c;
cc._RF.pop();
}, {} ],
G3_FInterstitialAdEffectOrder_CombatUiBackKeyDirectReceiveLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "37fc2z9g4BPIas5Qox8QnAG", "G3_FInterstitialAdEffectOrder_CombatUiBackKeyDirectReceiveLogic");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FInterstitialAdEffectOrder_CombatUiBackKeyDirectReceiveLogic = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function() {
this.getLaunchParams().app.isMiniGameBackKeyUnified || (this.router.receiveAction = ae.ReceiveAction.Discard);
};
var o, i;
r([ ae.routeReceive, ae.onChain, ae.bindAtom("G3_FBase_CombatUiBackKeyDirectChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "router", void 0);
r([ ae.bindAtom("G_FAtom_GetLaunchParams"), a("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], e.prototype, "getLaunchParams", void 0);
return r([ ae.atomClass("G3_FInterstitialAdEffectOrder_CombatUiBackKeyDirectReceiveLogic") ], e);
}(ae.LogicAtom);
o.G3_FInterstitialAdEffectOrder_CombatUiBackKeyDirectReceiveLogic = c;
cc._RF.pop();
}, {} ],
G3_FInterstitialAdEffectOrder_CombatUiBackKeyDispatchLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "635deQwjsZF+IxpHIx5JHbn", "G3_FInterstitialAdEffectOrder_CombatUiBackKeyDispatchLogic");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FInterstitialAdEffectOrder_CombatUiBackKeyDispatchLogic = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {
lastEscapeDownTime: 0
};
};
e.prototype.onExecute = function(t, e) {
if (this.keyboard.keyCode !== ae.KeyCode.Escape && this.keyboard.keyCode !== ae.KeyCode.MobileBack || !this.keyboard.isDown) this.router.dispatchAction = ae.DispatchAction.Cancel; else if (this.getLaunchParams().app.isMiniGameBackKeyUnified) this.router.dispatchAction = ae.DispatchAction.Cancel; else {
var o = this.worldMeta.worldTime;
if (e.runtime.lastEscapeDownTime > 0 && o - e.runtime.lastEscapeDownTime < 1) this.router.dispatchAction = ae.DispatchAction.Cancel; else if (o < this.combatDoPassLogic.runtime.overTime) {
console.log("调整过关动画与插屏顺序---战斗界面返回键，但正在过关动画阶段");
this.router.dispatchAction = ae.DispatchAction.Cancel;
} else {
e.runtime.lastEscapeDownTime = o;
this.router.dispatchAction = ae.DispatchAction.FireOnce;
}
}
};
var o, i, c, f, s;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FInterstitialAdEffectOrder_CombatUiBackKeyChaints"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "router", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], e.prototype, "worldMeta", void 0);
r([ ae.bindAtom("G_FAtom_Keyboard"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "keyboard", void 0);
r([ ae.bindAtom("G3_FBase_CombatDoPassLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "combatDoPassLogic", void 0);
r([ ae.bindAtom("G_FAtom_GetLaunchParams"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "getLaunchParams", void 0);
return r([ ae.atomClass("G3_FInterstitialAdEffectOrder_CombatUiBackKeyDispatchLogic") ], e);
}(ae.LogicAtom);
o.G3_FInterstitialAdEffectOrder_CombatUiBackKeyDispatchLogic = c;
cc._RF.pop();
}, {} ],
G3_FInterstitialAdEffectOrder_CombatUiBackKeyReceiveLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "72cceb4YgFKWo+4i6TBvM3r", "G3_FInterstitialAdEffectOrder_CombatUiBackKeyReceiveLogic");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FInterstitialAdEffectOrder_CombatUiBackKeyReceiveLogic = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function() {
this.getLaunchParams().app.isMiniGameBackKeyUnified || (this.router.receiveAction = ae.ReceiveAction.Discard);
};
var o, i;
r([ ae.routeReceive, ae.onChain, ae.bindAtom("G3_FBase_CombatUiBackKeyChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "router", void 0);
r([ ae.bindAtom("G_FAtom_GetLaunchParams"), a("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], e.prototype, "getLaunchParams", void 0);
return r([ ae.atomClass("G3_FInterstitialAdEffectOrder_CombatUiBackKeyReceiveLogic") ], e);
}(ae.LogicAtom);
o.G3_FInterstitialAdEffectOrder_CombatUiBackKeyReceiveLogic = c;
cc._RF.pop();
}, {} ],
G3_FInterstitialAdEffectOrder_InterstitialAdResultChain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "18d89B9vspFZJtP0q3cp12W", "G3_FInterstitialAdEffectOrder_InterstitialAdResultChain");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FInterstitialAdEffectOrder_InterstitialAdResultChain = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
var o, i;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_ADResult"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "adResult", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FBase_InterstitialAdResultSignal"), a("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], e.prototype, "interstitialAdResultSignal", void 0);
return r([ ae.atomClass("G3_FInterstitialAdEffectOrder_InterstitialAdResultChain") ], e);
}(ae.SignalRouterAtom);
o.G3_FInterstitialAdEffectOrder_InterstitialAdResultChain = c;
cc._RF.pop();
}, {} ],
G3_FInterstitialAdEffectOrder_InterstitialAdResultDispatchLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "44e92ocm/dDh56EpI/328EU", "G3_FInterstitialAdEffectOrder_InterstitialAdResultDispatchLogic");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FInterstitialAdEffectOrder_InterstitialAdResultDispatchLogic = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineRuntimeData = function() {
return {};
};
e.prototype.onExecute = function() {
console.log("调整过关动画与插屏顺序---广告结果");
if (this.adResult.adType === ae.AdType.Interstitial) if (this.adResult.state === ae.AdResultState.Success) this.chain.dispatchAction = ae.DispatchAction.FireOnce; else {
this.chain.dispatchAction = ae.DispatchAction.Cancel;
console.log("调整过关动画与插屏顺序---广告结果不是成功");
} else {
this.chain.dispatchAction = ae.DispatchAction.Cancel;
console.log("调整过关动画与插屏顺序---广告结果不是插屏广告");
}
};
var o, i;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FInterstitialAdEffectOrder_InterstitialAdResultChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "chain", void 0);
r([ ae.bindAtom("G_FAtom_ADResult"), a("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], e.prototype, "adResult", void 0);
return r([ ae.atomClass("G3_FInterstitialAdEffectOrder_InterstitialAdResultDispatchLogic") ], e);
}(ae.LogicAtom);
o.G3_FInterstitialAdEffectOrder_InterstitialAdResultDispatchLogic = c;
cc._RF.pop();
}, {} ],
G3_FInterstitialAdEffectOrder_InterstitialAdResultReceiveLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "304ecu1IkZMyo7/79/Ns00F", "G3_FInterstitialAdEffectOrder_InterstitialAdResultReceiveLogic");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FInterstitialAdEffectOrder_InterstitialAdResultReceiveLogic = void 0;
var c = function(t) {
n(e, t);
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
r([ ae.routeReceive, ae.onChain, ae.bindAtom("G3_FBase_InterstitialAdResultChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "router", void 0);
return r([ ae.atomClass("G3_FInterstitialAdEffectOrder_InterstitialAdResultReceiveLogic") ], e);
}(ae.LogicAtom);
o.G3_FInterstitialAdEffectOrder_InterstitialAdResultReceiveLogic = c;
cc._RF.pop();
}, {} ],
G3_FInterstitialAdEffectOrder_InterstitialAdShowLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "dddc5mcPfFEdIEHpTvVfIY2", "G3_FInterstitialAdEffectOrder_InterstitialAdShowLogic");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__metadata || function(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FInterstitialAdEffectOrder_InterstitialAdShowLogic = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.defineFunction = function() {
var t = this;
return function() {
console.log("G3_FInterstitialAdEffectOrder_InterstitialAdShowLogic:---- InterstitialAd 播插屏", t.worldMeta.worldTime, t.interstitialAdLogic.runtime.freeGameLevel, t.interstitialAdLogic.runtime.watchedRewardAd, t.interstitialAdLogic.storage.cyclePlayedCount);
t.showInterstitial();
if (t.worldMeta.worldTime < t.combatDoPassLogic.runtime.overTime) {
console.log("G3_FInterstitialAdEffectOrder_InterstitialAdShowLogic:---- InterstitialAd 正在过关动画阶段 cyclePlayedCount清零");
t.interstitialAdLogic.storage.cyclePlayedCount = 0;
}
};
};
var o, i, c, f, s, p;
r([ ae.variantOf, ae.bindAtom("G3_FBase_InterstitialAdShowLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], e.prototype, "source", void 0);
r([ ae.bindAtom("G_FAtom_ADShowInterstitial"), a("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], e.prototype, "showInterstitial", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], e.prototype, "worldMeta", void 0);
r([ ae.bindAtom("G3_FBase_InterstitialAdLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], e.prototype, "interstitialAdLogic", void 0);
r([ ae.bindAtom("G_FAtom_DateNow"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], e.prototype, "getDateNow", void 0);
r([ ae.bindAtom("G3_FBase_CombatDoPassLogic"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], e.prototype, "combatDoPassLogic", void 0);
return r([ ae.atomClass("G3_FInterstitialAdEffectOrder_InterstitialAdShowLogic") ], e);
}(ae.VariantAtom);
o.G3_FInterstitialAdEffectOrder_InterstitialAdShowLogic = c;
cc._RF.pop();
}, {} ],
G3_FInterstitialAdEffectOrder_Namespace: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "618fbwO9xZAJpOmj8ZXke2G", "G3_FInterstitialAdEffectOrder_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FInterstitialAdEffectOrder = void 0;
(function(t) {
var e;
(t.FeatureDescription || (t.FeatureDescription = {})).Description = "调整插屏广告与过关特性顺序特性";
(function(t) {
t.Name = "G3";
})(e = t.GameName || (t.GameName = {}));
(function(t) {
t[t.Name = e.Name + "_FInterstitialAdEffectOrder"] = "Name";
})(t.FeatureName || (t.FeatureName = {}));
(function(t) {
t[t.Version = 12] = "Version";
t.CreateTime = "2026-02-27 10:15:50";
})(t.BundleInfo || (t.BundleInfo = {}));
})(o.G3_FInterstitialAdEffectOrder || (o.G3_FInterstitialAdEffectOrder = {}));
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FInterstitialAdEffectOrder_AeIndex", "G3_FInterstitialAdEffectOrder_Namespace", "G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackChain", "G3_FInterstitialAdEffectOrder_CombatUiBackKeyChaints", "G3_FInterstitialAdEffectOrder_InterstitialAdResultChain", "G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackDispatchLogic", "G3_FInterstitialAdEffectOrder_CombatDoPassToCombatUiBackReceiveLogic", "G3_FInterstitialAdEffectOrder_CombatDoPassToInterstitialAdDispatchLogic", "G3_FInterstitialAdEffectOrder_CombatUiBackKeyDirectReceiveLogic", "G3_FInterstitialAdEffectOrder_CombatUiBackKeyDispatchLogic", "G3_FInterstitialAdEffectOrder_CombatUiBackKeyReceiveLogic", "G3_FInterstitialAdEffectOrder_InterstitialAdResultDispatchLogic", "G3_FInterstitialAdEffectOrder_InterstitialAdResultReceiveLogic", "G3_FInterstitialAdEffectOrder_InterstitialAdShowLogic" ]);
//# sourceMappingURL=index.js.map
