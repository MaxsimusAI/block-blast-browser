window.__require = function e(t, n, o) {
function a(r, c) {
if (!n[r]) {
if (!t[r]) {
var p = r.split("/");
p = p[p.length - 1];
if (!t[p]) {
var f = "function" == typeof __require && __require;
if (!c && f) return f(p, !0);
if (i) return i(p, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = p;
}
var d = n[r] = {
exports: {}
};
t[r][0].call(d.exports, function(e) {
return a(t[r][1][e] || e);
}, d, d.exports, e, t, n, o);
}
return n[r].exports;
}
for (var i = "function" == typeof __require && __require, r = 0; r < o.length; r++) a(o[r]);
return a;
}({
G15_FDailyImageUpdate_AeIndex: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "36a4beoi7pBg65AWnEjNgdX", "G15_FDailyImageUpdate_AeIndex");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FDailyImageUpdate = void 0;
var o = e("./G15_FDailyImageUpdate_Namespace");
Object.defineProperty(n, "G15_FDailyImageUpdate", {
enumerable: !0,
get: function() {
return o.G15_FDailyImageUpdate;
}
});
cc._RF.pop();
}, {
"./G15_FDailyImageUpdate_Namespace": "G15_FDailyImageUpdate_Namespace"
} ],
G15_FDailyImageUpdate_AppendScrollItemsVariant: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "66121XujI9CMaeDvj2KW/81", "G15_FDailyImageUpdate_AppendScrollItemsVariant");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var o, a, i = n.call(e), r = [];
try {
for (;(void 0 === t || t-- > 0) && !(o = i.next()).done; ) r.push(o.value);
} catch (e) {
a = {
error: e
};
} finally {
try {
o && !o.done && (n = i.return) && n.call(i);
} finally {
if (a) throw a.error;
}
}
return r;
}, p = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
return e;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FDailyImageUpdate_AppendScrollItemsVariant = void 0;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
for (var n, o, a, i = e.homeScrollDomain.comp, r = e.pixelCache(t), c = i.itemIds[t], f = i.itemStates[t], d = r.pixels.slice(), u = r.sizes.slice(), l = r.display.slice(), y = new Map(), s = 0; s < c.length; s++) y.set(c[s], s);
var _ = e.buildListOrder(e.worldReadyLogic.runtime.isFirstLaunch), m = _.ids, g = 0, h = new Array(m.length), F = new Array(m.length), b = new Array(m.length), v = new Array(m.length);
for (s = 0; s < m.length; s++) {
var I = y.get(m[s]);
if (void 0 === I) {
g++;
h[s] = 0;
F[s] = null;
b[s] = 0;
v[s] = null;
} else {
h[s] = f[I];
F[s] = d[I];
b[s] = u[I];
v[s] = l[I];
}
}
var D = m.length === c.length && m.every(function(e, t) {
return e === c[t];
}), O = i.todayZoneEnd[t] === _.todayZoneEnd;
if (0 === g && D && O) return 0;
(n = r.pixels).splice.apply(n, p([ 0, r.pixels.length ], F));
(o = r.sizes).splice.apply(o, p([ 0, r.sizes.length ], b));
(a = r.display).splice.apply(a, p([ 0, r.display.length ], v));
r.loadedSet.clear();
r.pendingSet.clear();
for (s = 0; s < h.length; s++) 2 === h[s] && r.loadedSet.add(s);
i.itemIds.set(t, m);
i.itemStates.set(t, h);
i.todayZoneEnd.set(t, _.todayZoneEnd);
i.totalItems.set(t, m.length);
i.totalRows.set(t, Math.ceil(m.length / e.homeConfig.cols));
i.itemStatesVersion.set(t, i.itemStatesVersion[t] + 1);
return g;
};
};
var n, o, c, f, d, u;
i([ ae.variantOf, ae.bindAtom("G15_FBase_AppendScrollItemsFunction"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "source", void 0);
i([ ae.bindAtom("G15_FDailyImageUpdate_BuildListOrderFunction"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "buildListOrder", void 0);
i([ ae.bindAtom("G15_FBase_HomeScrollDomain"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "homeScrollDomain", void 0);
i([ ae.bindAtom("G15_FBase_HomePixelCacheFunction"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "pixelCache", void 0);
i([ ae.bindAtom("G15_FBase_HomeConfig"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "homeConfig", void 0);
i([ ae.bindAtom("G15_FBase_WorldReadyLogic"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "worldReadyLogic", void 0);
return i([ ae.atomClass("G15_FDailyImageUpdate_AppendScrollItemsVariant") ], t);
}(ae.VariantAtom);
n.G15_FDailyImageUpdate_AppendScrollItemsVariant = f;
cc._RF.pop();
}, {} ],
G15_FDailyImageUpdate_Config: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "96ec8Dm0fxDCaaaa2hf+meQ", "G15_FDailyImageUpdate_Config");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FDailyImageUpdate_Config = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
idsByDay: {}
};
};
return i([ ae.atomClass("G15_FDailyImageUpdate_Config") ], t);
}(ae.ConfigAtom);
n.G15_FDailyImageUpdate_Config = r;
cc._RF.pop();
}, {} ],
G15_FDailyImageUpdate_DateFunctions: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b2bebsjDDlEj4ScaWp/j5SR", "G15_FDailyImageUpdate_DateFunctions");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FDailyImageUpdate_CurrentDayFunction = n.G15_FDailyImageUpdate_DateToDayNumberFunction = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
return function(e) {
var t = e.split("-");
if (3 !== t.length) return 0;
var n = Number(t[0]), o = Number(t[1]), a = Number(t[2]);
if (!Number.isFinite(n) || !Number.isFinite(o) || !Number.isFinite(a)) return 0;
var i = Math.trunc(n), r = Math.trunc(o), c = Math.trunc(a), p = [ 31, i % 4 != 0 || i % 100 == 0 && i % 400 != 0 ? 28 : 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
if (r < 1 || r > 12 || c < 1 || c > p[r - 1]) return 0;
var f = 0;
if (i >= 1970) for (var d = 1970; d < i; d++) f += d % 4 != 0 || d % 100 == 0 && d % 400 != 0 ? 365 : 366; else for (d = 1969; d >= i; d--) f -= d % 4 != 0 || d % 100 == 0 && d % 400 != 0 ? 365 : 366;
for (var u = 1; u < r; u++) f += p[u - 1];
return f + c - 1;
};
};
return i([ ae.atomClass("G15_FDailyImageUpdate_DateToDayNumberFunction") ], t);
}(ae.FunctionAtom);
n.G15_FDailyImageUpdate_DateToDayNumberFunction = c;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.worldReadyLogic.storage.launchDate;
if (!t) return 0;
var n = e.getCurrentDate(), o = e.dateToDayNumber(n) - e.dateToDayNumber(t);
return Math.max(0, o);
};
};
var n, o, c;
i([ ae.bindAtom("G15_FBase_WorldReadyLogic"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "worldReadyLogic", void 0);
i([ ae.bindAtom("G_FAtom_GetCurrentDate"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "getCurrentDate", void 0);
i([ ae.bindAtom("G15_FDailyImageUpdate_DateToDayNumberFunction"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "dateToDayNumber", void 0);
return i([ ae.atomClass("G15_FDailyImageUpdate_CurrentDayFunction") ], t);
}(ae.FunctionAtom);
n.G15_FDailyImageUpdate_CurrentDayFunction = p;
cc._RF.pop();
}, {} ],
G15_FDailyImageUpdate_HomeBuildListVariant: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "40e1dTAgFFIt6fAF+IKkpJk", "G15_FDailyImageUpdate_HomeBuildListVariant");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FDailyImageUpdate_HomeBuildListVariant = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
return e.buildListOrder(t);
};
};
var n, o;
i([ ae.variantOf, ae.bindAtom("G15_FBase_HomeBuildListIdArrayFunction"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "source", void 0);
i([ ae.bindAtom("G15_FDailyImageUpdate_BuildListOrderFunction"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "buildListOrder", void 0);
return i([ ae.atomClass("G15_FDailyImageUpdate_HomeBuildListVariant") ], t);
}(ae.VariantAtom);
n.G15_FDailyImageUpdate_HomeBuildListVariant = c;
cc._RF.pop();
}, {} ],
G15_FDailyImageUpdate_HomeScrollRenderVariant: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "001b2+wo1RPmJynOj8oHJmf", "G15_FDailyImageUpdate_HomeScrollRenderVariant");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FDailyImageUpdate_IsNewTagVisibleFunction = n.G15_FDailyImageUpdate_IsDailyImageVisibleFunction = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this, t = new Set(), n = -1;
return function(o) {
var a = e.worldReadyLogic.runtime.singles.length;
if (a !== n) {
n = a;
t = new Set(e.unlockedDailyRuleIds(!1).ids);
}
return t.has(o);
};
};
var n, o;
i([ ae.bindAtom("G15_FDailyImageUpdate_UnlockedDailyRuleIdsFunction"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "unlockedDailyRuleIds", void 0);
i([ ae.bindAtom("G15_FBase_WorldReadyLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "worldReadyLogic", void 0);
return i([ ae.atomClass("G15_FDailyImageUpdate_IsDailyImageVisibleFunction") ], t);
}(ae.FunctionAtom);
n.G15_FDailyImageUpdate_IsDailyImageVisibleFunction = c;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
return e.source(t) || e.isDailyImageVisible(t) && !e.homeItemState.storage.viewedIds.includes(t);
};
};
var n, o, c;
i([ ae.variantOf, ae.bindAtom("G15_FBase_IsNewTagVisibleFunction"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "source", void 0);
i([ ae.bindAtom("G15_FDailyImageUpdate_IsDailyImageVisibleFunction"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "isDailyImageVisible", void 0);
i([ ae.bindAtom("G15_FBase_HomeItemStateLogic"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "homeItemState", void 0);
return i([ ae.atomClass("G15_FDailyImageUpdate_IsNewTagVisibleFunction") ], t);
}(ae.VariantAtom);
n.G15_FDailyImageUpdate_IsNewTagVisibleFunction = p;
cc._RF.pop();
}, {} ],
G15_FDailyImageUpdate_ListOrderFunction: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c0fedyR7ONPDJHNGscmi318", "G15_FDailyImageUpdate_ListOrderFunction");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var o, a, i = n.call(e), r = [];
try {
for (;(void 0 === t || t-- > 0) && !(o = i.next()).done; ) r.push(o.value);
} catch (e) {
a = {
error: e
};
} finally {
try {
o && !o.done && (n = i.return) && n.call(i);
} finally {
if (a) throw a.error;
}
}
return r;
}, p = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
return e;
}, f = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], o = 0;
if (n) return n.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && o >= e.length && (e = void 0);
return {
value: e && e[o++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FDailyImageUpdate_BuildListOrderFunction = n.G15_FDailyImageUpdate_UnlockedDailyRuleIdsFunction = void 0;
var d = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var n, o, a, i, r, c, d, u, l, y;
void 0 === t && (t = !1);
var s = e.currentDay(), _ = Object.keys(e.config.idsByDay).map(function(e) {
return Number(e);
}).filter(function(e) {
return Number.isInteger(e);
}).sort(function(e, t) {
return e - t;
}), m = _.length > 0 ? _[_.length - 1] : 0, g = m > 0 && null !== (d = e.config.idsByDay[String(m)]) && void 0 !== d ? d : [], h = g.length > 0 ? g[g.length - 1] : 0, F = _.filter(function(e) {
return e <= s;
}), b = [];
if (s > m) for (var v = h + 1, I = m + 1; I <= s; I++) {
for (var D = [], O = 0; O < e.virtualIdConfig.perDay; O++) {
var G = v++;
null !== (u = e.getSingleById(G)) && void 0 !== u && u.updateTime || D.push(G);
}
b.push(D);
}
var A = p(F);
for (I = m + 1; I <= s; I++) A.push(I);
t && A.reverse();
var j = [];
try {
for (var R = f(A), U = R.next(); !U.done; U = R.next()) (I = U.value) > m ? j.push.apply(j, p(b[I - m - 1])) : j.push.apply(j, p(null !== (l = e.config.idsByDay[String(I)]) && void 0 !== l ? l : []));
} catch (e) {
n = {
error: e
};
} finally {
try {
U && !U.done && (o = R.return) && o.call(R);
} finally {
if (n) throw n.error;
}
}
var w = [];
try {
for (var C = f(Object.keys(e.config.idsByDay)), P = C.next(); !P.done; P = C.next()) {
I = P.value;
w.push.apply(w, p(null !== (y = e.config.idsByDay[String(I)]) && void 0 !== y ? y : []));
}
} catch (e) {
a = {
error: e
};
} finally {
try {
P && !P.done && (i = C.return) && i.call(C);
} finally {
if (a) throw a.error;
}
}
try {
for (var L = f(b), T = L.next(); !T.done; T = L.next()) {
D = T.value;
w.push.apply(w, p(D));
}
} catch (e) {
r = {
error: e
};
} finally {
try {
T && !T.done && (c = L.return) && c.call(L);
} finally {
if (r) throw r.error;
}
}
return {
hasNewToday: String(s) in e.config.idsByDay || s > m,
ids: j,
allIds: w
};
};
};
var n, o, c, d;
i([ ae.bindAtom("G15_FDailyImageUpdate_Config"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "config", void 0);
i([ ae.bindAtom("G15_FDailyImageUpdate_VirtualIdConfig"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "virtualIdConfig", void 0);
i([ ae.bindAtom("G15_FDailyImageUpdate_CurrentDayFunction"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "currentDay", void 0);
i([ ae.bindAtom("G15_FBase_GetSingleByIdFunction"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "getSingleById", void 0);
return i([ ae.atomClass("G15_FDailyImageUpdate_UnlockedDailyRuleIdsFunction") ], t);
}(ae.FunctionAtom);
n.G15_FDailyImageUpdate_UnlockedDailyRuleIdsFunction = d;
var u = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var n, o, a, i, r, c, d, u, l = e.worldReadyLogic.runtime.singles, y = e.getCurrentDate(), s = e.tutorialConfig.tutorialTableId, _ = new Map();
try {
for (var m = f(l), g = m.next(); !g.done; g = m.next()) {
var h = g.value;
_.set(Number(h.id), h);
}
} catch (e) {
n = {
error: e
};
} finally {
try {
g && !g.done && (o = m.return) && o.call(m);
} finally {
if (n) throw n.error;
}
}
var F = e.unlockedDailyRuleIds(!0), b = F.hasNewToday, v = F.ids, I = F.allIds, D = new Set(I), O = new Set(), G = [];
try {
for (var A = f(v), j = A.next(); !j.done; j = A.next()) {
var R = j.value;
if (!O.has(R) && R !== s && _.has(R) && !e.isPuzzleDone(R)) {
O.add(R);
G.push(R);
}
}
} catch (e) {
a = {
error: e
};
} finally {
try {
j && !j.done && (i = A.return) && i.call(A);
} finally {
if (a) throw a.error;
}
}
var U = [], w = [], C = e.worldReadyConfig.initItems, P = e.isPuzzleDone(s);
if (t) {
if (!P && !C.includes(s) && _.has(s)) {
O.add(s);
U.push(s);
}
try {
for (var L = f(C), T = L.next(); !T.done; T = L.next()) {
R = T.value;
if (!O.has(R) && _.has(R) && !e.isPuzzleDone(R)) {
O.add(R);
U.push(R);
}
}
} catch (e) {
r = {
error: e
};
} finally {
try {
T && !T.done && (c = L.return) && c.call(L);
} finally {
if (r) throw r.error;
}
}
} else if (!P && _.has(s)) {
O.add(s);
w.push(s);
}
var S = [], B = [];
try {
for (var x = f(l), N = x.next(); !N.done; N = x.next()) {
h = N.value, R = Number(h.id);
O.has(R) || D.has(R) && 0 === e.loadPaintRecord(R).length || h.updateTime && e.shouldDisplay(h) && (h.updateTime === y ? S.push(R) : B.push(R));
}
} catch (e) {
d = {
error: e
};
} finally {
try {
N && !N.done && (u = x.return) && u.call(x);
} finally {
if (d) throw d.error;
}
}
B.sort(function(t, n) {
return e.compareHistory(t, n);
});
var V = G.length + U.length + w.length + S.length, H = p(U, w), z = b ? p(G, H, S, B) : p(S, G, H, B);
return 0 === e.currentDay() ? {
ids: b ? p(H, G, S, B) : p(H, S, G, B),
todayZoneEnd: V
} : {
ids: z,
todayZoneEnd: V
};
};
};
var n, o, c, d, u, l, y, s, _, m, g;
i([ ae.bindAtom("G15_FDailyImageUpdate_UnlockedDailyRuleIdsFunction"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "unlockedDailyRuleIds", void 0);
i([ ae.bindAtom("G15_FBase_WorldReadyLogic"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "worldReadyLogic", void 0);
i([ ae.bindAtom("G_FAtom_GetCurrentDate"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getCurrentDate", void 0);
i([ ae.bindAtom("G15_FBase_IsPuzzleDoneFunction"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "isPuzzleDone", void 0);
i([ ae.bindAtom("G15_FBase_TutorialConfig"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "tutorialConfig", void 0);
i([ ae.bindAtom("G15_FBase_WorldReadyConfig"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "worldReadyConfig", void 0);
i([ ae.bindAtom("G15_FDailyImageUpdate_CurrentDayFunction"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "currentDay", void 0);
i([ ae.bindAtom("G15_FBase_CompareHistoryFunction"), r("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "compareHistory", void 0);
i([ ae.bindAtom("G15_FBase_ShouldDisplaySingleFunction"), r("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "shouldDisplay", void 0);
i([ ae.bindAtom("G15_FBase_LoadPaintRecordFunction"), r("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "loadPaintRecord", void 0);
i([ ae.bindAtom("G15_FDailyImageUpdate_Config"), r("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "config", void 0);
return i([ ae.atomClass("G15_FDailyImageUpdate_BuildListOrderFunction") ], t);
}(ae.FunctionAtom);
n.G15_FDailyImageUpdate_BuildListOrderFunction = u;
cc._RF.pop();
}, {} ],
G15_FDailyImageUpdate_LogDayOnReadyLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "64165VPTJ5DCq59W96Pf9gi", "G15_FDailyImageUpdate_LogDayOnReadyLogic");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FDailyImageUpdate_LogDayOnReturnLogic = n.G15_FDailyImageUpdate_LogDayOnReadyLogic = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
console.log("[G15_FDailyImageUpdate] 进入关卡选择界面，当前第", this.currentDay(), "天");
};
var n, o;
i([ ae.onChain, ae.bindAtom("G15_FBase_WorldReadySignal"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G15_FDailyImageUpdate_CurrentDayFunction"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "currentDay", void 0);
return i([ ae.atomClass("G15_FDailyImageUpdate_LogDayOnReadyLogic") ], t);
}(ae.LogicAtom);
n.G15_FDailyImageUpdate_LogDayOnReadyLogic = c;
var p = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
console.log("[G15_FDailyImageUpdate] 进入关卡选择界面，当前第", this.currentDay(), "天");
};
var n, o;
i([ ae.onChain, ae.bindAtom("G15_FBase_HomeRefreshScrollSignal"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G15_FDailyImageUpdate_CurrentDayFunction"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "currentDay", void 0);
return i([ ae.atomClass("G15_FDailyImageUpdate_LogDayOnReturnLogic") ], t);
}(ae.LogicAtom);
n.G15_FDailyImageUpdate_LogDayOnReturnLogic = p;
cc._RF.pop();
}, {} ],
G15_FDailyImageUpdate_Namespace: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "84c92pLGUxLgbkAMjHazg/E", "G15_FDailyImageUpdate_Namespace");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FDailyImageUpdate = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "用户进游戏后第N天更新图片";
(function(e) {
e.Name = "G15";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FDailyImageUpdate"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 21] = "Version";
e.CreateTime = "2026-05-07 14:58:14";
})(e.BundleInfo || (e.BundleInfo = {}));
})(n.G15_FDailyImageUpdate || (n.G15_FDailyImageUpdate = {}));
cc._RF.pop();
}, {} ],
G15_FDailyImageUpdate_PreloadNewbieItemsLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "dfbee4nowJFnpqtSUKZfg5H", "G15_FDailyImageUpdate_PreloadNewbieItemsLogic");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var o, a, i = n.call(e), r = [];
try {
for (;(void 0 === t || t-- > 0) && !(o = i.next()).done; ) r.push(o.value);
} catch (e) {
a = {
error: e
};
} finally {
try {
o && !o.done && (n = i.return) && n.call(i);
} finally {
if (a) throw a.error;
}
}
return r;
}, p = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
return e;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FDailyImageUpdate_PreloadNewbieItemsLogic = void 0;
var f = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
if (this.worldReadyLogic.runtime.isFirstLaunch) {
var e = this.homeScrollDomain.collect()[0];
if (e) {
for (var t = this.homeScrollDomain.comp, n = t.itemIds[e], o = t.itemStates[e], a = this.pixelCache(e), i = new Set(p([ this.tutorialConfig.tutorialTableId ], this.worldReadyConfig.initItems)), r = !1, c = 0; c < n.length; c++) {
var f = n[c];
if (i.has(f) && !this.isPuzzleDone(f) && 0 === o[c]) {
o[c] = 1;
a.pendingSet.add(c);
r = !0;
}
}
if (r) {
t.itemStatesVersion.set(e, t.itemStatesVersion[e] + 1);
this.startBatchLoad(e);
}
}
}
};
var n, o, c, f, d, u, l, y;
i([ ae.signalEnd, ae.onChain, ae.bindAtom("G15_FBase_WorldReadySignal"), r("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "signal", void 0);
i([ ae.bindAtom("G15_FBase_HomeScrollDomain"), r("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "homeScrollDomain", void 0);
i([ ae.bindAtom("G15_FBase_HomePixelCacheFunction"), r("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "pixelCache", void 0);
i([ ae.bindAtom("G15_FBase_HomeStartBatchLoadFunction"), r("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "startBatchLoad", void 0);
i([ ae.bindAtom("G15_FBase_WorldReadyConfig"), r("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "worldReadyConfig", void 0);
i([ ae.bindAtom("G15_FBase_TutorialConfig"), r("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "tutorialConfig", void 0);
i([ ae.bindAtom("G15_FBase_IsPuzzleDoneFunction"), r("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "isPuzzleDone", void 0);
i([ ae.bindAtom("G15_FBase_WorldReadyLogic"), r("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "worldReadyLogic", void 0);
return i([ ae.atomClass("G15_FDailyImageUpdate_PreloadNewbieItemsLogic") ], t);
}(ae.LogicAtom);
n.G15_FDailyImageUpdate_PreloadNewbieItemsLogic = f;
cc._RF.pop();
}, {} ],
G15_FDailyImageUpdate_VirtualIdConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "afdb6sDUF5KaJFc8T/HmrWQ", "G15_FDailyImageUpdate_VirtualIdConfig");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var a, i = arguments.length, r = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, n, r) : a(t, n)) || r);
return i > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FDailyImageUpdate_VirtualIdConfig = void 0;
var r = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
perDay: 6
};
};
return i([ ae.atomClass("G15_FDailyImageUpdate_VirtualIdConfig") ], t);
}(ae.ConfigAtom);
n.G15_FDailyImageUpdate_VirtualIdConfig = r;
cc._RF.pop();
}, {} ]
}, {}, [ "G15_FDailyImageUpdate_AeIndex", "G15_FDailyImageUpdate_Namespace", "G15_FDailyImageUpdate_Config", "G15_FDailyImageUpdate_VirtualIdConfig", "G15_FDailyImageUpdate_DateFunctions", "G15_FDailyImageUpdate_ListOrderFunction", "G15_FDailyImageUpdate_LogDayOnReadyLogic", "G15_FDailyImageUpdate_PreloadNewbieItemsLogic", "G15_FDailyImageUpdate_AppendScrollItemsVariant", "G15_FDailyImageUpdate_HomeBuildListVariant", "G15_FDailyImageUpdate_HomeScrollRenderVariant" ]);
//# sourceMappingURL=index.js.map
