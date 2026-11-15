window.__require = function e(t, o, n) {
function i(a, c) {
if (!o[a]) {
if (!t[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!t[s]) {
var p = "function" == typeof __require && __require;
if (!c && p) return p(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var u = o[a] = {
exports: {}
};
t[a][0].call(u.exports, function(e) {
return i(t[a][1][e] || e);
}, u, u.exports, e, t, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
G15_FAIColorConsistCheck_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "af1a2VS3WpFF4bnJUtsK93/", "G15_FAIColorConsistCheck_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G15_FAIColorConsistCheck = void 0;
var n = e("./G15_FAIColorConsistCheck_Namespace");
Object.defineProperty(o, "G15_FAIColorConsistCheck", {
enumerable: !0,
get: function() {
return n.G15_FAIColorConsistCheck;
}
});
cc._RF.pop();
}, {
"./G15_FAIColorConsistCheck_Namespace": "G15_FAIColorConsistCheck_Namespace"
} ],
G15_FAIColorConsistCheck_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0c548SkfTdLpoO5lGs3i30I", "G15_FAIColorConsistCheck_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G15_FAIColorConsistCheck = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "-在长按刷涂的命中判定中，新增一道当前色一致性校验，不一致直接跳过该格";
(function(e) {
e.Name = "G15";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FAIColorConsistCheck"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 5] = "Version";
e.CreateTime = "2026-05-13 14:39:39";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G15_FAIColorConsistCheck || (o.G15_FAIColorConsistCheck = {}));
cc._RF.pop();
}, {} ],
G15_FAIColorConsistCheck_PointerSnapPaintCellVariant: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cee7aTQ5Q1JdZFzgOu87Z9C", "G15_FAIColorConsistCheck_PointerSnapPaintCellVariant");
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
o.G15_FAIColorConsistCheck_PointerSnapPaintCellVariant = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.source();
if (!t) return null;
var o = e.touchStartLogic.runtime, n = o.moved;
if (!n && o.hasLastPaintPos) {
var i = e.contentDomain.collect()[0];
if (i) {
var r = e.contentDomain.state.scale[i], a = e.contentDomain.state.offsetX[i], c = e.contentDomain.state.offsetY[i], s = (e.pointer.localX - a) / r, p = (e.pointer.localY - c) / r;
n = Math.abs(s - o.lastPaintX) >= .5 || Math.abs(p - o.lastPaintY) >= .5;
}
}
if (!n) return t;
var u = e.tutorialDomain.collect()[0];
if (u && e.tutorialDomain.comp.isActive[u]) return t;
if (e.replayDomain.collect()[0]) return t;
var f = e.brushDomain.collect()[0];
if (!f) return t;
var l = e.brushDomain.brushComp.brushIndex[f];
return e.cellBrushIndex(t.row, t.col) !== l ? null : t;
};
};
var o, n, c, s, p, u, f, l;
r([ ae.variantOf, ae.bindAtom("G15_FBase_PointerSnapPaintCellFunction"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "source", void 0);
r([ ae.bindAtom("G15_FBase_TouchStartLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "touchStartLogic", void 0);
r([ ae.bindAtom("G15_FBase_BrushDomain"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "brushDomain", void 0);
r([ ae.bindAtom("G15_FBase_CellBrushIndexFunction"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "cellBrushIndex", void 0);
r([ ae.bindAtom("G15_FBase_ContentDomain"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "contentDomain", void 0);
r([ ae.bindAtom("G_FAtom_Pointer"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "pointer", void 0);
r([ ae.bindAtom("G15_FBase_TutorialDomain"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "tutorialDomain", void 0);
r([ ae.bindAtom("G15_FBase_ReplayDomain"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "replayDomain", void 0);
return r([ ae.atomClass("G15_FAIColorConsistCheck_PointerSnapPaintCellVariant") ], t);
}(ae.VariantAtom);
o.G15_FAIColorConsistCheck_PointerSnapPaintCellVariant = c;
cc._RF.pop();
}, {} ]
}, {}, [ "G15_FAIColorConsistCheck_AeIndex", "G15_FAIColorConsistCheck_Namespace", "G15_FAIColorConsistCheck_PointerSnapPaintCellVariant" ]);
//# sourceMappingURL=index.js.map
