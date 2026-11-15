window.__require = function e(t, o, n) {
function i(a, c) {
if (!o[a]) {
if (!t[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!t[s]) {
var f = "function" == typeof __require && __require;
if (!c && f) return f(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var p = o[a] = {
exports: {}
};
t[a][0].call(p.exports, function(e) {
return i(t[a][1][e] || e);
}, p, p.exports, e, t, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
G3_FNewResetUi_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6c683t00GFMMb2ATTkk+yIP", "G3_FNewResetUi_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewResetUi = void 0;
var n = e("./G3_FNewResetUi_Namespace");
Object.defineProperty(o, "G3_FNewResetUi", {
enumerable: !0,
get: function() {
return n.G3_FNewResetUi;
}
});
cc._RF.pop();
}, {
"./G3_FNewResetUi_Namespace": "G3_FNewResetUi_Namespace"
} ],
G3_FNewResetUi_Asset: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "80161ZpuIZAVpxjhBzpaNx7", "G3_FNewResetUi_Asset");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewResetUi_Asset = void 0;
var a = e("../../G3_FNewResetUi_Namespace"), c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url(a.G3_FNewResetUi.FeatureName.Name);
return {
BtnClose: e("res/textures/icon_close"),
BtnBlue: e("res/textures/btn_blue"),
IconLight: e("res/textures/icon_display_light")
};
};
return r([ ae.atomClass("G3_FNewResetUi_Asset") ], t);
}(ae.ConfigAtom);
o.G3_FNewResetUi_Asset = c;
cc._RF.pop();
}, {
"../../G3_FNewResetUi_Namespace": "G3_FNewResetUi_Namespace"
} ],
G3_FNewResetUi_CombatUiResetLogicVariant: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7600caAUUNAXatOaZ+BWcvO", "G3_FNewResetUi_CombatUiResetLogicVariant");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewResetUi_CombatUiResetLogicVariant = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o = e.newResetUiDomain.create();
e.childOf.addChild(t, o);
};
};
var o, n, c;
r([ ae.variantOf, ae.bindAtom("G3_FBase_CombatUiResetLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "combatUiResetLogic", void 0);
r([ ae.bindAtom("G3_FNewResetUi_Domain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "newResetUiDomain", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "childOf", void 0);
return r([ ae.atomClass("G3_FNewResetUi_CombatUiResetLogicVariant") ], t);
}(ae.VariantAtom);
o.G3_FNewResetUi_CombatUiResetLogicVariant = c;
cc._RF.pop();
}, {} ],
G3_FNewResetUi_Domain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fe1a99Yk9JBi4Irne1YjAtA", "G3_FNewResetUi_Domain");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewResetUi_Domain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
return r([ ae.atomClass("G3_FNewResetUi_Domain") ], t);
}(ae.EntityDomainAtom);
o.G3_FNewResetUi_Domain = c;
cc._RF.pop();
}, {} ],
G3_FNewResetUi_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a031frZEydAs4g+1IWY0QU9", "G3_FNewResetUi_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewResetUi = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "新重置界面特性";
(function(e) {
e.Name = "G3";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FNewResetUi"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 6] = "Version";
e.CreateTime = "2026-04-13 14:13:29";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G3_FNewResetUi || (o.G3_FNewResetUi = {}));
cc._RF.pop();
}, {} ],
G3_FNewResetUi_OffChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "18057QUOS9NNpFBXsCisKaC", "G3_FNewResetUi_OffChain");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewResetUi_OffChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G3_FNewResetUi_OffSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "newResetUiOffSignal", void 0);
return r([ ae.atomClass("G3_FNewResetUi_OffChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FNewResetUi_OffChain = c;
cc._RF.pop();
}, {} ],
G3_FNewResetUi_OffLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "37a2fJxD1JMG4kuvX8Uu4cJ", "G3_FNewResetUi_OffLogic");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewResetUi_OffLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
this.newResetUiDomain.destroy(e);
};
var o, n;
r([ ae.onChain, ae.bindAtom("G3_FNewResetUi_OffSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FNewResetUi_Domain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "newResetUiDomain", void 0);
return r([ ae.atomClass("G3_FNewResetUi_OffLogic") ], t);
}(ae.LogicAtom);
o.G3_FNewResetUi_OffLogic = c;
cc._RF.pop();
}, {} ],
G3_FNewResetUi_OffSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e26ba9c2DpDEqJDZ1Ezi6YW", "G3_FNewResetUi_OffSignal");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewResetUi_OffSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G3_FNewResetUi_Domain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "newResetUiDomain", void 0);
return r([ ae.atomClass("G3_FNewResetUi_OffSignal") ], t);
}(ae.SignalAtom);
o.G3_FNewResetUi_OffSignal = c;
cc._RF.pop();
}, {} ],
G3_FNewResetUi_OkChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "90b3fUMVJNMi7IWynYxg//9", "G3_FNewResetUi_OkChain");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewResetUi_OkChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G3_FNewResetUi_OkSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "resetUiOkSignal", void 0);
return r([ ae.atomClass("G3_FNewResetUi_OkChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FNewResetUi_OkChain = c;
cc._RF.pop();
}, {} ],
G3_FNewResetUi_OkLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3058a2zQOJNe5QLO74mRLPa", "G3_FNewResetUi_OkLogic");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewResetUi_OkLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
this.newResetUiDomain.destroy(e);
this.combatInitLogic.storage.restartCount += 1;
};
var o, n, c;
r([ ae.onChain, ae.bindAtom("G3_FNewResetUi_OkSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FNewResetUi_Domain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "newResetUiDomain", void 0);
r([ ae.bindAtom("G3_FBase_CombatInitLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "combatInitLogic", void 0);
return r([ ae.atomClass("G3_FNewResetUi_OkLogic") ], t);
}(ae.LogicAtom);
o.G3_FNewResetUi_OkLogic = c;
cc._RF.pop();
}, {} ],
G3_FNewResetUi_OkSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3c211VMW2RBZq3HXCfKZ3UK", "G3_FNewResetUi_OkSignal");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewResetUi_OkSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G3_FNewResetUi_Domain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "newResetUiDomain", void 0);
return r([ ae.atomClass("G3_FNewResetUi_OkSignal") ], t);
}(ae.SignalAtom);
o.G3_FNewResetUi_OkSignal = c;
cc._RF.pop();
}, {} ],
G3_FNewResetUi_OkToCombatResetChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e6aa8v76wBFsbQbQu5ySNsz", "G3_FNewResetUi_OkToCombatResetChain");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewResetUi_OkToCombatResetChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FNewResetUi_OkSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "resetUiOkSignal", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FBase_CombatResetSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "combatResetSignal", void 0);
return r([ ae.atomClass("G3_FNewResetUi_OkToCombatResetChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FNewResetUi_OkToCombatResetChain = c;
cc._RF.pop();
}, {} ],
G3_FNewResetUi_Render: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bfd19vsoPxI87+LuagY6gmb", "G3_FNewResetUi_Render");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FNewResetUi_Render = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Node({
name: "ResetUi",
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
name: "ResetBgMask",
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
name: "ResetPanel",
width: 704,
height: 645,
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
return e.getSchemeValueFunction("newResetUiResetPanelColor", 7050491);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
img: this.baseAsset.CommonBorder,
renderType: ae.RenderType.Sliced
}, ae.Text({
name: "ResetTitle",
font: this.homeAsset.SpartanBoldFont,
text: "Restart?",
fontSize: 53,
enableBold: !0,
rgb: [ function() {
return e.getSchemeValueFunction("newResetUiResetTitleColor", 16777215);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
width: 300,
height: 54
}), ae.Node({
name: "closeBtnParent",
height: 0
}, ae.Sprite({
name: "CloseBtn",
img: this.newResetUiAsset.BtnClose,
x: 300,
y: 80,
rgb: [ function() {
return e.getSchemeValueFunction("newResetUiCloseBtnColor", 13096703);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
renderType: ae.RenderType.Sliced,
event: {
touchEnd: this.newResetUiOffChain
},
button: {
transition: ae.ButtonTransition.Scale,
duration: .1,
zoomScale: .9
}
})), ae.Sprite({
name: "infoPanel",
width: 664,
height: 700,
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
return e.getSchemeValueFunction("newResetUiResetInfoPanelColor", 16777215);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
img: this.baseAsset.CommonBorderInfo,
renderType: ae.RenderType.Sliced
}, ae.Node({
name: "ResetDescNode",
height: 150
}, ae.Text({
name: "ResetDesc",
width: 478,
font: this.homeAsset.SpartanBoldFont,
text: "Return to level start,\nare you sure?",
fontSize: 40,
enableBold: !0,
rgb: [ function() {
return e.getSchemeValueFunction("newResetUiResetDescColor", 7831459);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
enableWrapText: !0,
horizontalAlign: ae.TextHorizontalAlign.CENTER
})), ae.Node({
name: "EmptyNode",
height: 40
}), ae.Sprite({
name: "ResetBtn",
width: 478,
height: 128,
img: this.newResetUiAsset.BtnBlue,
rgb: [ function() {
return e.getSchemeValueFunction("newResetUiResetBtnColor", 16750915);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
renderType: ae.RenderType.Sliced,
event: {
touchEnd: this.newResetUiOkChain
},
button: {
transition: ae.ButtonTransition.Scale,
duration: .1,
zoomScale: .9
}
}, ae.Sprite({
name: "ResetBtnLight",
img: this.newResetUiAsset.IconLight,
x: -225,
y: 50,
active: !1
}), ae.Text({
name: "ResetBtnText",
font: this.homeAsset.SpartanBoldFont,
text: "Restart",
enableBold: !0,
fontSize: 50,
rgb: [ function() {
return e.getSchemeValueFunction("newResetUiResetBtnTextColor", 16777215);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
})))));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, s, f, p, u, _, d, l, y;
r([ ae.entityRenderer, ae.bindAtom("G3_FNewResetUi_Domain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "resetUiDomain", void 0);
r([ ae.bindAtom("G3_FBase_WindowSizeLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "windowSizeLogic", void 0);
r([ ae.bindAtom("G3_FNewResetUi_OkChain"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "newResetUiOkChain", void 0);
r([ ae.bindAtom("G3_FNewResetUi_OffChain"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "newResetUiOffChain", void 0);
r([ ae.bindAtom("G3_FBase_SkinSwitchLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "skinSwitchLogic", void 0);
r([ ae.bindAtom("G3_FBase_SkinConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "skinConfig", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "skinInitLogic", void 0);
r([ ae.bindAtom("G3_FBase_GetSchemeValueFunction"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "getSchemeValueFunction", void 0);
r([ ae.bindAtom("G3_FBase_Asset"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "baseAsset", void 0);
r([ ae.bindAtom("G3_FHome_Asset"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "homeAsset", void 0);
r([ ae.bindAtom("G3_FNewResetUi_Asset"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "newResetUiAsset", void 0);
return r([ ae.atomClass("G3_FNewResetUi_Render") ], t);
}(ae.RenderAtom);
o.G3_FNewResetUi_Render = c;
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FNewResetUi_AeIndex", "G3_FNewResetUi_Namespace", "G3_FNewResetUi_Asset", "G3_FNewResetUi_OffChain", "G3_FNewResetUi_OkChain", "G3_FNewResetUi_OkToCombatResetChain", "G3_FNewResetUi_Domain", "G3_FNewResetUi_OffLogic", "G3_FNewResetUi_OkLogic", "G3_FNewResetUi_Render", "G3_FNewResetUi_OffSignal", "G3_FNewResetUi_OkSignal", "G3_FNewResetUi_CombatUiResetLogicVariant" ]);