window.__require = function e(t, o, n) {
function r(a, c) {
if (!o[a]) {
if (!t[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!t[l]) {
var p = "function" == typeof __require && __require;
if (!c && p) return p(l, !0);
if (i) return i(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var f = o[a] = {
exports: {}
};
t[a][0].call(f.exports, function(e) {
return r(t[a][1][e] || e);
}, f, f.exports, e, t, o, n);
}
return o[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < n.length; a++) r(n[a]);
return r;
}({
G0_FOriginal_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ae302aLu6NOxqKufGEtDB5d", "G0_FOriginal_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G0_FOriginal = void 0;
var n = e("./G0_FOriginal_Namespace");
Object.defineProperty(o, "G0_FOriginal", {
enumerable: !0,
get: function() {
return n.G0_FOriginal;
}
});
cc._RF.pop();
}, {
"./G0_FOriginal_Namespace": "G0_FOriginal_Namespace"
} ],
G0_FOriginal_Config: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a193e3/3KFJR6QWP8v1zrKA", "G0_FOriginal_Config");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G0_FOriginal_Config = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
multiTouch: !1,
worldConfigs: {}
};
};
return i([ ae.atomClass("G0_FOriginal_Config") ], t);
}(ae.ConfigAtom);
o.G0_FOriginal_Config = a;
cc._RF.pop();
}, {} ],
G0_FOriginal_CreateProgressLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "970dcxSiQVNobqRPxdMVJtf", "G0_FOriginal_CreateProgressLogic");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G0_FOriginal_CreateProgressSignal = o.G0_FOriginal_CreateProgressRouter = o.G0_FOriginal_CreateProgressLogic = void 0;
var c = e("../G0_FOriginal_Namespace"), l = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.progress.error || this.progress.isCancelled ? this.reportData({
g0_original_info: {
type: c.G0_FOriginal.OriginalInfoType.CreateFailed,
worldId: this.progress.worldId,
errorMsg: this.progress.error
}
}) : this.progress.isDone && this.reportData({
g0_original_info: {
type: c.G0_FOriginal.OriginalInfoType.CreateSuccess,
worldId: this.progress.worldId
}
});
};
var o, n, l;
i([ ae.onChain, ae.bindAtom("G0_FOriginal_CreateProgressSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G_FAtom_WorldLoadProgress"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "progress", void 0);
i([ ae.bindAtom("G_FAtom_ReportGameRuntime"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "reportData", void 0);
return i([ ae.atomClass("G0_FOriginal_CreateProgressLogic") ], t);
}(ae.LogicAtom);
o.G0_FOriginal_CreateProgressLogic = l;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_WorldLoadProgress"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "fromSignal", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G0_FOriginal_CreateProgressSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "toSignal", void 0);
return i([ ae.atomClass("G0_FOriginal_CreateProgressRouter") ], t);
}(ae.SignalRouterAtom);
o.G0_FOriginal_CreateProgressRouter = p;
var f = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_WorldDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
return i([ ae.atomClass("G0_FOriginal_CreateProgressSignal") ], t);
}(ae.SignalAtom);
o.G0_FOriginal_CreateProgressSignal = f;
cc._RF.pop();
}, {
"../G0_FOriginal_Namespace": "G0_FOriginal_Namespace"
} ],
G0_FOriginal_CtrlLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "16631ppx1JKQ7HbVQ1CILqF", "G0_FOriginal_CtrlLogic");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G0_FOriginal_CreateSignal = o.G0_FOriginal_CreateRoute = o.G0_FOriginal_CtrlLogic = o.G0_FOriginal_RestartFunction = o.G0_FOriginal_DestroyFunction = o.G0_FOriginal_CreateFunction = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n = e.config.worldConfigs[o];
if (!n || [ "G15_FBase_WorldAtom", "G17_FBase_World", "G37_FBase_World" ].includes(o)) {
var r = e.worldDomain.create();
e.worldDomain.worldState.multiTouch.set(r, null == n ? void 0 : n.multiTouch);
var i = null == n ? void 0 : n.config3D;
i && e.worldDomain.worldState.config3D.set(r, JSON.stringify(i));
e.worldDomain.worldState.worldId.set(r, o);
e.childOf.addChild(t, r);
} else console.error("[G0_FOriginal] 通过原初世界修改世界配置的方式已经被弃用，请增加专用世界来配置");
};
};
var o, n, c;
i([ ae.bindAtom("G_FAtom_WorldDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "worldDomain", void 0);
i([ ae.bindAtom("G0_FOriginal_Config"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "childOf", void 0);
return i([ ae.atomClass("G0_FOriginal_CreateFunction") ], t);
}(ae.FunctionAtom);
o.G0_FOriginal_CreateFunction = c;
var l = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.worldDomain.collect().find(function(o) {
return e.worldDomain.worldState.worldId[o] === t;
});
void 0 !== o && e.worldDomain.destroy(o);
};
};
var o;
i([ ae.bindAtom("G_FAtom_WorldDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "worldDomain", void 0);
return i([ ae.atomClass("G0_FOriginal_DestroyFunction") ], t);
}(ae.FunctionAtom);
o.G0_FOriginal_DestroyFunction = l;
var p = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
e.restartWorld(t);
};
};
var o;
i([ ae.bindAtom("G_FAtom_RestartWorld"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "restartWorld", void 0);
return i([ ae.atomClass("G0_FOriginal_RestartFunction") ], t);
}(ae.FunctionAtom);
o.G0_FOriginal_RestartFunction = p;
var f = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function(e) {
this.reportData({
g0_original_info: {
type: this.ctrl.operation,
worldId: this.ctrl.worldId
}
});
switch (this.ctrl.operation) {
case ae.OriginalCtrlOperation.Create:
this.createFunction(e, this.ctrl.worldId);
break;

case ae.OriginalCtrlOperation.Destroy:
this.destroyFunction(this.ctrl.worldId);
break;

case ae.OriginalCtrlOperation.Restart:
this.restartFunction(this.ctrl.worldId);
}
};
var o, n, c, l, p, f;
i([ ae.onChain, ae.bindAtom("G0_FOriginal_CreateSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G_FAtom_OriginalCtrlInput"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "ctrl", void 0);
i([ ae.bindAtom("G0_FOriginal_CreateFunction"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "createFunction", void 0);
i([ ae.bindAtom("G0_FOriginal_DestroyFunction"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "destroyFunction", void 0);
i([ ae.bindAtom("G0_FOriginal_RestartFunction"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "restartFunction", void 0);
i([ ae.bindAtom("G_FAtom_ReportGameRuntime"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "reportData", void 0);
return i([ ae.atomClass("G0_FOriginal_CtrlLogic") ], t);
}(ae.LogicAtom);
o.G0_FOriginal_CtrlLogic = f;
var u = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
i([ ae.routeFrom, ae.bindAtom("G_FAtom_OriginalCtrlInput"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "originalCreate", void 0);
i([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G0_FOriginal_CreateSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "createSignal", void 0);
return i([ ae.atomClass("G0_FOriginal_CreateRoute") ], t);
}(ae.SignalRouterAtom);
o.G0_FOriginal_CreateRoute = u;
var s = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
i([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "worldDomain", void 0);
return i([ ae.atomClass("G0_FOriginal_CreateSignal") ], t);
}(ae.SignalAtom);
o.G0_FOriginal_CreateSignal = s;
cc._RF.pop();
}, {} ],
G0_FOriginal_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9d2aeNElohJn7f/tHFWdOTi", "G0_FOriginal_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G0_FOriginal = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "原初世界，用于管理其他世界";
(function(e) {
e.Name = "G0";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FOriginal"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 38] = "Version";
e.CreateTime = "2026-03-04 16:57:54";
})(e.BundleInfo || (e.BundleInfo = {}));
(function(e) {
e.CreateSuccess = "createSuccess";
e.CreateFailed = "createFailed";
})(e.OriginalInfoType || (e.OriginalInfoType = {}));
})(o.G0_FOriginal || (o.G0_FOriginal = {}));
cc._RF.pop();
}, {} ],
G0_FOriginal_World: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "52b955rvjBLP5TXRPPuDQgM", "G0_FOriginal_World");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var r, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G0_FOriginal_World = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return i([ ae.atomClass("G0_FOriginal_World") ], t);
}(ae.WorldAtom);
o.G0_FOriginal_World = a;
cc._RF.pop();
}, {} ]
}, {}, [ "G0_FOriginal_AeIndex", "G0_FOriginal_Namespace", "G0_FOriginal_Config", "G0_FOriginal_CreateProgressLogic", "G0_FOriginal_CtrlLogic", "G0_FOriginal_World" ]);
//# sourceMappingURL=index.js.map
