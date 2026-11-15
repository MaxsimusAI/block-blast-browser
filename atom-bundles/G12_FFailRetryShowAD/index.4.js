window.__require = function e(t, o, n) {
function r(a, c) {
if (!o[a]) {
if (!t[a]) {
var f = a.split("/");
f = f[f.length - 1];
if (!t[f]) {
var u = "function" == typeof __require && __require;
if (!c && u) return u(f, !0);
if (i) return i(f, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = f;
}
var p = o[a] = {
exports: {}
};
t[a][0].call(p.exports, function(e) {
return r(t[a][1][e] || e);
}, p, p.exports, e, t, o, n);
}
return o[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < n.length; a++) r(n[a]);
return r;
}({
G12_FFailRetryShowAD_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f9738f34n9MOosTRCWLDYMC", "G12_FFailRetryShowAD_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FFailRetryShowAD = void 0;
var n = e("./G12_FFailRetryShowAD_Namespace");
Object.defineProperty(o, "G12_FFailRetryShowAD", {
enumerable: !0,
get: function() {
return n.G12_FFailRetryShowAD;
}
});
cc._RF.pop();
}, {
"./G12_FFailRetryShowAD_Namespace": "G12_FFailRetryShowAD_Namespace"
} ],
G12_FFailRetryShowAD_FailPageRetryLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a8630ReaFRJnZeJASw3pdLm", "G12_FFailRetryShowAD_FailPageRetryLogic");
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
o.G12_FFailRetryShowAD_FailPageRetryLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.showInterAdFunc();
};
var o, n;
i([ ae.onChain, ae.bindAtom("G12_FBase_FailPageRetrySignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "failPageRetrySignal", void 0);
i([ ae.bindAtom("G12_FBase_ShowInterAdFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "showInterAdFunc", void 0);
return i([ ae.atomClass("G12_FFailRetryShowAD_FailPageRetryLogic") ], t);
}(ae.LogicAtom);
o.G12_FFailRetryShowAD_FailPageRetryLogic = c;
cc._RF.pop();
}, {} ],
G12_FFailRetryShowAD_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "08da8xyPmlMwbcnECE9MCcK", "G12_FFailRetryShowAD_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FFailRetryShowAD = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "关卡失败无复活retry时显示插屏广告";
(function(e) {
e.Name = "G12";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FFailRetryShowAD"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 4] = "Version";
e.CreateTime = "2026-04-23 16:51:54";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G12_FFailRetryShowAD || (o.G12_FFailRetryShowAD = {}));
cc._RF.pop();
}, {} ],
G12_FFailRetryShowAD_RevivePageRetryLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e54d1bQ3n1Hl7+HU7zXJzCq", "G12_FFailRetryShowAD_RevivePageRetryLogic");
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
o.G12_FFailRetryShowAD_RevivePageRetryLogic = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.isColdStartFunc() && this.isFirstRoundForColdStartFunc() || this.showInterAdFunc();
};
var o, n, c, f, u;
i([ ae.signalStart, ae.onChain, ae.bindAtom("G12_FBase_RevivePageRetrySignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "touchEndRetryBtnSignal", void 0);
i([ ae.bindAtom("G12_FBase_ShowInterAdFunc"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "showInterAdFunc", void 0);
i([ ae.bindAtom("G12_FBase_IsColdStartFunc"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "isColdStartFunc", void 0);
i([ ae.bindAtom("G12_FBase_IsFirstRoundForColdStartFunc"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "isFirstRoundForColdStartFunc", void 0);
i([ ae.bindAtom("G12_FBase_LogFunc2"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "logFunc", void 0);
return i([ ae.atomClass("G12_FFailRetryShowAD_RevivePageRetryLogic") ], t);
}(ae.LogicAtom);
o.G12_FFailRetryShowAD_RevivePageRetryLogic = c;
cc._RF.pop();
}, {} ]
}, {}, [ "G12_FFailRetryShowAD_AeIndex", "G12_FFailRetryShowAD_Namespace", "G12_FFailRetryShowAD_FailPageRetryLogic", "G12_FFailRetryShowAD_RevivePageRetryLogic" ]);