window.__require = function e(t, n, o) {
function i(a, d) {
if (!n[a]) {
if (!t[a]) {
var u = a.split("/");
u = u[u.length - 1];
if (!t[u]) {
var p = "function" == typeof __require && __require;
if (!d && p) return p(u, !0);
if (r) return r(u, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = u;
}
var c = n[a] = {
exports: {}
};
t[a][0].call(c.exports, function(e) {
return i(t[a][1][e] || e);
}, c, c.exports, e, t, n, o);
}
return n[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
G15_FIdleGuide_AeIndex: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b46f7hgpM1OUbmg6x3T+waz", "G15_FIdleGuide_AeIndex");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FIdleGuide = void 0;
var o = e("./G15_FIdleGuide_Namespace");
Object.defineProperty(n, "G15_FIdleGuide", {
enumerable: !0,
get: function() {
return o.G15_FIdleGuide;
}
});
cc._RF.pop();
}, {
"./G15_FIdleGuide_Namespace": "G15_FIdleGuide_Namespace"
} ],
G15_FIdleGuide_ApplyGuideFunction: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "66114K2hBBBt6zj4Bqa4bE3", "G15_FIdleGuide_ApplyGuideFunction");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var d = e.length - 1; d >= 0; d--) (i = e[d]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, d = this && this.__values || function(e) {
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
n.G15_FIdleGuide_ApplyGuideFunction = n.G15_FIdleGuide_ResolveGuidePositionFunction = n.G15_FIdleGuide_ResolvePaintCellsPositionFunction = n.G15_FIdleGuide_FilterBlockedCellsFunction = void 0;
var u = e("../../G15_FIdleGuide_Namespace"), p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var n, o, i = [];
try {
for (var r = d(t), a = r.next(); !a.done; a = r.next()) {
var u = a.value, p = e.cellToLocal(u.row, u.col);
if (p) {
var c = e.contentToWorld(p.x, p.y);
c && !e.isInBackButton(c.worldX, c.worldY) && i.push(u);
}
}
} catch (e) {
n = {
error: e
};
} finally {
try {
a && !a.done && (o = r.return) && o.call(r);
} finally {
if (n) throw n.error;
}
}
return i;
};
};
var n, o, u;
r([ ae.bindAtom("G15_FIdleGuide_CellToLocalFunction"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "cellToLocal", void 0);
r([ ae.bindAtom("G15_FBase_TutorialContentToWorldFunction"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "contentToWorld", void 0);
r([ ae.bindAtom("G15_FIdleGuide_IsInBackButtonFunction"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "isInBackButton", void 0);
return r([ ae.atomClass("G15_FIdleGuide_FilterBlockedCellsFunction") ], t);
}(ae.FunctionAtom);
n.G15_FIdleGuide_FilterBlockedCellsFunction = p;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var n, o, i, r, a, u, p, c, l = t.cells, f = e.gridSize(), s = e.filterBlocked(l);
if (0 === s.length && f > 0) {
var y = new Set();
try {
for (var _ = d(l), m = _.next(); !m.done; m = _.next()) {
var G = m.value;
y.add(G.row * f + G.col);
}
} catch (e) {
n = {
error: e
};
} finally {
try {
m && !m.done && (o = _.return) && o.call(_);
} finally {
if (n) throw n.error;
}
}
l = e.findGroup(t.targetBrushIndex, y);
s = e.filterBlocked(l);
}
if (0 === s.length) return null;
if (1 === s.length) {
var F = e.cellToLocal(s[0].row, s[0].col);
if (!F) return null;
var g = e.contentToWorld(F.x, F.y);
return g ? {
startX: g.worldX,
startY: g.worldY,
targetX: null,
targetY: null,
animName: "in_2",
animLoop: !0
} : null;
}
var h = {}, I = {};
try {
for (var v = d(s), b = v.next(); !b.done; b = v.next()) {
(null !== (a = h[p = (G = b.value).row]) && void 0 !== a ? a : h[p] = []).push(G.col);
(null !== (u = I[c = G.col]) && void 0 !== u ? u : I[c] = []).push(G.row);
}
} catch (e) {
i = {
error: e
};
} finally {
try {
b && !b.done && (r = v.return) && r.call(v);
} finally {
if (i) throw i.error;
}
}
var A = s[0].row, O = 0;
for (var T in h) if (h[T].length > O) {
A = Number(T);
O = h[T].length;
}
var j, C, w, R, P = s[0].col, D = 0;
for (var S in I) if (I[S].length > D) {
P = Number(S);
D = I[S].length;
}
if (O >= D) {
var B = h[A].sort(function(e, t) {
return e - t;
});
j = w = A;
C = B[0];
R = B[B.length - 1];
} else {
var x = I[P].sort(function(e, t) {
return e - t;
});
C = R = P;
j = x[0];
w = x[x.length - 1];
}
var L = e.cellToLocal(j, C), k = e.cellToLocal(w, R);
if (!L || !k) return null;
var M = e.contentToWorld(L.x, L.y), N = e.contentToWorld(k.x, k.y);
return M && N ? {
startX: M.worldX,
startY: M.worldY,
targetX: N.worldX,
targetY: N.worldY,
animName: "in_4",
animLoop: !1
} : null;
};
};
var n, o, u, p, c;
r([ ae.bindAtom("G15_FIdleGuide_CellToLocalFunction"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "cellToLocal", void 0);
r([ ae.bindAtom("G15_FBase_TutorialContentToWorldFunction"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "contentToWorld", void 0);
r([ ae.bindAtom("G15_FIdleGuide_FindVisibleUnfilledGroupFunction"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "findGroup", void 0);
r([ ae.bindAtom("G15_FBase_GridSizeFunction"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "gridSize", void 0);
r([ ae.bindAtom("G15_FIdleGuide_FilterBlockedCellsFunction"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "filterBlocked", void 0);
return r([ ae.atomClass("G15_FIdleGuide_ResolvePaintCellsPositionFunction") ], t);
}(ae.FunctionAtom);
n.G15_FIdleGuide_ResolvePaintCellsPositionFunction = c;
var l = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
if (t.type === u.G15_FIdleGuide.GuideType.ZoomIn) {
var n = e.contentToWorld(0, 0);
return n ? {
startX: n.worldX,
startY: n.worldY,
targetX: null,
targetY: null,
animName: "in_1",
animLoop: !0
} : null;
}
if (t.type === u.G15_FIdleGuide.GuideType.SwipeToColor) {
var o = e.getWinSize().width, i = e.paletteContentDomain.collect()[0];
if (!i) return null;
var r = e.getWorldPos(i).y, a = e.config.swipeScreenFraction, d = o * e.config.swipeOffsetFraction;
return {
startX: o * a + d,
startY: r,
targetX: -o * a + d,
targetY: r,
animName: "in_4",
animLoop: !1
};
}
if (t.type === u.G15_FIdleGuide.GuideType.ClickColor) {
var p = e.paletteItemPos(t.targetBrushIndex);
return {
startX: p.screenX,
startY: p.screenY,
targetX: null,
targetY: null,
animName: "in_2",
animLoop: !0
};
}
return t.type === u.G15_FIdleGuide.GuideType.PaintCells && t.cells.length > 0 ? e.resolvePaintCells(t) : null;
};
};
var n, o, d, p, c, l, f;
r([ ae.bindAtom("G15_FBase_TutorialContentToWorldFunction"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "contentToWorld", void 0);
r([ ae.bindAtom("G15_FBase_PaletteItemPosFunction"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "paletteItemPos", void 0);
r([ ae.bindAtom("G_FAtom_GetWinSize"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "getWinSize", void 0);
r([ ae.bindAtom("G15_FBase_PaletteContentDomain"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "paletteContentDomain", void 0);
r([ ae.bindAtom("G_FAtom_GetWorldPosition"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "getWorldPos", void 0);
r([ ae.bindAtom("G15_FIdleGuide_ResolvePaintCellsPositionFunction"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "resolvePaintCells", void 0);
r([ ae.bindAtom("G15_FIdleGuide_Config"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "config", void 0);
return r([ ae.atomClass("G15_FIdleGuide_ResolveGuidePositionFunction") ], t);
}(ae.FunctionAtom);
n.G15_FIdleGuide_ResolveGuidePositionFunction = l;
var f = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, n) {
var o = e.resolvePosition(n);
if (!o) return !1;
var i = e.guideDomain.comp;
e.guideDomain.transform.x.set(t, o.startX);
e.guideDomain.transform.y.set(t, o.startY);
i.spineScaleX.set(t, -1);
if (null !== o.targetX) {
i.spineScaleX.set(t, o.targetX >= o.startX ? -1 : 1);
i.startWorldX.set(t, o.startX);
i.startWorldY.set(t, o.startY);
i.targetWorldX.set(t, o.targetX);
i.targetWorldY.set(t, o.targetY);
i.phase.set(t, u.G15_FIdleGuide.GuidePhase.Pressed);
} else i.phase.set(t, u.G15_FIdleGuide.GuidePhase.Idle);
i.guideType.set(t, n.type);
i.spineAnim.set(t, o.animName);
i.spineLoop.set(t, o.animLoop);
i.alpha.set(t, 0);
i.isActive.set(t, !0);
e.tween(t, [ [ ae.TweenStepType.To, i, {
alpha: 1
}, e.config.fadeInDuration ] ], "idle-fade");
return !0;
};
};
var n, o, d, p;
r([ ae.bindAtom("G15_FIdleGuide_GuideDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideDomain", void 0);
r([ ae.bindAtom("G15_FIdleGuide_Config"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
r([ ae.bindAtom("G15_FIdleGuide_ResolveGuidePositionFunction"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "resolvePosition", void 0);
r([ ae.bindAtom("G_FAtom_Tween"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "tween", void 0);
return r([ ae.atomClass("G15_FIdleGuide_ApplyGuideFunction") ], t);
}(ae.FunctionAtom);
n.G15_FIdleGuide_ApplyGuideFunction = f;
cc._RF.pop();
}, {
"../../G15_FIdleGuide_Namespace": "G15_FIdleGuide_Namespace"
} ],
G15_FIdleGuide_CellToLocalFunction: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e998eS6GrpK/7AUwsEJNWmY", "G15_FIdleGuide_CellToLocalFunction");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var d = e.length - 1; d >= 0; d--) (i = e[d]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FIdleGuide_CellToLocalFunction = void 0;
var d = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, n) {
var o = e.contentDomain.collect()[0];
if (!o) return null;
var i = e.gameConfig, r = e.contentDomain.state.gridCols[o], a = e.contentDomain.state.gridRows[o], d = r * i.cellWidth * .5, u = a * i.cellHeight * .5;
return {
x: (n + .5) * i.cellWidth - d,
y: u - (t + .5) * i.cellHeight
};
};
};
var n, o;
r([ ae.bindAtom("G15_FBase_ContentDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "contentDomain", void 0);
r([ ae.bindAtom("G15_FBase_GameConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameConfig", void 0);
return r([ ae.atomClass("G15_FIdleGuide_CellToLocalFunction") ], t);
}(ae.FunctionAtom);
n.G15_FIdleGuide_CellToLocalFunction = d;
cc._RF.pop();
}, {} ],
G15_FIdleGuide_CheckPreconditionFunction: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "497a54oxENI8ovQYPV5kUOt", "G15_FIdleGuide_CheckPreconditionFunction");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var d = e.length - 1; d >= 0; d--) (i = e[d]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FIdleGuide_CheckPreconditionFunction = void 0;
var d = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t;
if (!e.tutorialOpenLogic.storage.guideDone) return !1;
var n = e.tutorialDomain.collect()[0];
return !(n && e.tutorialDomain.comp.isActive[n] || (null !== (t = e.loadJson("g15_done")) && void 0 !== t ? t : []).length >= 1 || e.puzzleModifier.runtime.tableId !== e.tutorialConfig.tutorialTableId || !e.gameSceneDomain.collect()[0] || e.settlementDomain.collect().length > 0);
};
};
var n, o, d, u, p, c, l;
r([ ae.bindAtom("G15_FBase_TutorialOpenLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tutorialOpenLogic", void 0);
r([ ae.bindAtom("G15_FBase_TutorialDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tutorialDomain", void 0);
r([ ae.bindAtom("G_FAtom_LoadJson"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "loadJson", void 0);
r([ ae.bindAtom("G15_FBase_PuzzleConfigModifier"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "puzzleModifier", void 0);
r([ ae.bindAtom("G15_FBase_TutorialConfig"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "tutorialConfig", void 0);
r([ ae.bindAtom("G15_FBase_GameSceneDomain"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gameSceneDomain", void 0);
r([ ae.bindAtom("G15_FBase_SettlementDomain"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "settlementDomain", void 0);
return r([ ae.atomClass("G15_FIdleGuide_CheckPreconditionFunction") ], t);
}(ae.FunctionAtom);
n.G15_FIdleGuide_CheckPreconditionFunction = d;
cc._RF.pop();
}, {} ],
G15_FIdleGuide_Config: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5cfdd1M/qhKrLwdft7sM3xR", "G15_FIdleGuide_Config");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var d = e.length - 1; d >= 0; d--) (i = e[d]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FIdleGuide_Config = void 0;
var a = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
idleThreshold: 2,
guideSpine: this.url("G15_FBase")("res/spines/tutorial/gameplay_novice_guide"),
swipeDuration: .5,
fadeInDuration: .15,
fadeOutDuration: .1,
backButtonSize: 84,
backButtonLeftMargin: 18,
backButtonTopMargin: 100,
topBarReservedHeight: 84,
swipeScreenFraction: .15,
swipeOffsetFraction: .3,
swipePeekFraction: .15
};
};
return r([ ae.atomClass("G15_FIdleGuide_Config") ], t);
}(ae.ConfigAtom);
n.G15_FIdleGuide_Config = a;
cc._RF.pop();
}, {} ],
G15_FIdleGuide_DetectGuideTypeFunction: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "766512wfyZPQ47YA4ROJoLq", "G15_FIdleGuide_DetectGuideTypeFunction");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var d = e.length - 1; d >= 0; d--) (i = e[d]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, d = this && this.__values || function(e) {
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
n.G15_FIdleGuide_DetectGuideTypeFunction = void 0;
var u = e("../../G15_FIdleGuide_Namespace"), p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t, n, o, i, r = {
type: u.G15_FIdleGuide.GuideType.None,
cells: [],
targetBrushIndex: -1,
fallbackBrushIndex: -1
}, a = e.contentDomain.collect()[0];
if (!a) return r;
var p = e.contentDomain.state.scale[a], c = e.contentDomain.state.minScale[a], l = e.paletteContentDomain.collect()[0], f = l ? e.paletteContentDomain.scrollComp.targetPageIndex[l] : 1;
if (0 === f) return {
type: u.G15_FIdleGuide.GuideType.SwipeToColor,
cells: [],
targetBrushIndex: -1,
fallbackBrushIndex: -1
};
if (p <= c) return {
type: u.G15_FIdleGuide.GuideType.ZoomIn,
cells: [],
targetBrushIndex: -1,
fallbackBrushIndex: -1
};
var s = e.paletteConfig, y = s.rowCount * s.columnCount, _ = f - 1, m = [];
try {
for (var G = d(e.paletteItemDomain.collect()), F = G.next(); !F.done; F = G.next()) {
var g = F.value;
e.paletteItemDomain.itemComp.isCompleted[g] || m.push(e.paletteItemDomain.itemComp.paletteIndex[g]);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
F && !F.done && (n = G.return) && n.call(G);
} finally {
if (t) throw t.error;
}
}
m.sort(function(e, t) {
return e - t;
});
var h = _ * y, I = h + y, v = !1;
try {
for (var b = d(m), A = b.next(); !A.done; A = b.next()) {
var O = A.value;
if (O >= I) break;
if (O >= h && e.findGroup(O).length > 0) {
v = !0;
break;
}
}
} catch (e) {
o = {
error: e
};
} finally {
try {
A && !A.done && (i = b.return) && i.call(b);
} finally {
if (o) throw o.error;
}
}
if (!v) return r;
var T = e.brushDomain.collect()[0];
if (!T) return r;
var j = e.brushDomain.brushComp.brushIndex[T], C = e.findGroup(j), w = e.findNextVisibleBrush(j);
return C.length > 0 ? {
type: u.G15_FIdleGuide.GuideType.PaintCells,
cells: C,
targetBrushIndex: j,
fallbackBrushIndex: w
} : w >= 0 ? {
type: u.G15_FIdleGuide.GuideType.ClickColor,
cells: [],
targetBrushIndex: w,
fallbackBrushIndex: -1
} : r;
};
};
var n, o, p, c, l, f, s;
r([ ae.bindAtom("G15_FBase_ContentDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "contentDomain", void 0);
r([ ae.bindAtom("G15_FBase_PaletteContentDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "paletteContentDomain", void 0);
r([ ae.bindAtom("G15_FBase_BrushDomain"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "brushDomain", void 0);
r([ ae.bindAtom("G15_FIdleGuide_FindVisibleUnfilledGroupFunction"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "findGroup", void 0);
r([ ae.bindAtom("G15_FIdleGuide_FindNextVisibleUnfilledBrushFunction"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "findNextVisibleBrush", void 0);
r([ ae.bindAtom("G15_FBase_PaletteItemDomain"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "paletteItemDomain", void 0);
r([ ae.bindAtom("G15_FBase_PaletteConfig"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "paletteConfig", void 0);
return r([ ae.atomClass("G15_FIdleGuide_DetectGuideTypeFunction") ], t);
}(ae.FunctionAtom);
n.G15_FIdleGuide_DetectGuideTypeFunction = p;
cc._RF.pop();
}, {
"../../G15_FIdleGuide_Namespace": "G15_FIdleGuide_Namespace"
} ],
G15_FIdleGuide_FindVisibleUnfilledGroupFunction: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "653b3i5yqNIHqgZU6513PR/", "G15_FIdleGuide_FindVisibleUnfilledGroupFunction");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var d = e.length - 1; d >= 0; d--) (i = e[d]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FIdleGuide_FindNextVisibleUnfilledBrushFunction = n.G15_FIdleGuide_FindVisibleUnfilledGroupFunction = n.G15_FIdleGuide_VisibleCellRangeFunction = void 0;
var d = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t = e.contentDomain.collect()[0];
if (!t) return null;
var n = e.gridSize();
if (n <= 0) return null;
var o = e.config, i = e.contentDomain.state.scale[t], r = e.contentDomain.state.offsetX[t], a = e.contentDomain.state.offsetY[t], d = n * o.cellWidth * .5, u = n * o.cellHeight * .5, p = e.adapterLogic.runtime.dynamicViewportHeight || o.viewportHeight, c = o.viewportWidth / i, l = p / i, f = -r / i, s = -a / i, y = e.guideConfig.topBarReservedHeight / i, _ = Math.max(-d, f - .5 * c), m = Math.min(d, f + .5 * c), G = Math.min(u, s + .5 * l - y), F = Math.max(-u, s - .5 * l);
return {
colMin: Math.max(0, Math.ceil((_ + d) / o.cellWidth)),
colMax: Math.min(n - 1, Math.floor((m + d) / o.cellWidth) - 1),
rowMin: Math.max(0, Math.ceil((u - G) / o.cellHeight)),
rowMax: Math.min(n - 1, Math.floor((u - F) / o.cellHeight) - 1)
};
};
};
var n, o, d, u, p;
r([ ae.bindAtom("G15_FBase_ContentDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "contentDomain", void 0);
r([ ae.bindAtom("G15_FBase_GameConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
r([ ae.bindAtom("G15_FBase_GridSizeFunction"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "gridSize", void 0);
r([ ae.bindAtom("G15_FBase_AdapterLogic"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "adapterLogic", void 0);
r([ ae.bindAtom("G15_FIdleGuide_Config"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "guideConfig", void 0);
return r([ ae.atomClass("G15_FIdleGuide_VisibleCellRangeFunction") ], t);
}(ae.FunctionAtom);
n.G15_FIdleGuide_VisibleCellRangeFunction = d;
var u = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, n) {
var o = e.visibleRange();
if (!o) return [];
for (var i = e.gridSize(), r = o.rowMin, a = o.rowMax, d = o.colMin, u = o.colMax, p = [], c = r; c <= a; c++) {
for (var l = [], f = d; f <= u; f++) if (n && n.has(c * i + f) || e.cellBrushIndex(c, f) !== t || e.cellFilled(c, f)) {
l.length > p.length && (p = l);
l = [];
} else l.push({
row: c,
col: f
});
l.length > p.length && (p = l);
}
for (f = d; f <= u; f++) {
for (l = [], c = r; c <= a; c++) if (n && n.has(c * i + f) || e.cellBrushIndex(c, f) !== t || e.cellFilled(c, f)) {
l.length > p.length && (p = l);
l = [];
} else l.push({
row: c,
col: f
});
l.length > p.length && (p = l);
}
return p;
};
};
var n, o, d, u;
r([ ae.bindAtom("G15_FBase_CellBrushIndexFunction"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "cellBrushIndex", void 0);
r([ ae.bindAtom("G15_FBase_CellFilledFunction"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "cellFilled", void 0);
r([ ae.bindAtom("G15_FBase_GridSizeFunction"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "gridSize", void 0);
r([ ae.bindAtom("G15_FIdleGuide_VisibleCellRangeFunction"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "visibleRange", void 0);
return r([ ae.atomClass("G15_FIdleGuide_FindVisibleUnfilledGroupFunction") ], t);
}(ae.FunctionAtom);
n.G15_FIdleGuide_FindVisibleUnfilledGroupFunction = u;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var n = e.visibleRange();
if (!n) return -1;
for (var o = n.rowMin, i = n.rowMax, r = n.colMin, a = n.colMax, d = Infinity, u = o; u <= i; u++) for (var p = r; p <= a; p++) {
var c = e.cellBrushIndex(u, p);
if (!(c < 0 || c === t || c >= d || e.cellFilled(u, p))) {
var l = e.cellToLocal(u, p);
if (l) {
var f = e.contentToWorld(l.x, l.y);
f && !e.isInBackButton(f.worldX, f.worldY) && (d = c);
}
}
}
return Infinity === d ? -1 : d;
};
};
var n, o, d, u, p, c;
r([ ae.bindAtom("G15_FBase_CellBrushIndexFunction"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "cellBrushIndex", void 0);
r([ ae.bindAtom("G15_FBase_CellFilledFunction"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "cellFilled", void 0);
r([ ae.bindAtom("G15_FIdleGuide_VisibleCellRangeFunction"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "visibleRange", void 0);
r([ ae.bindAtom("G15_FIdleGuide_CellToLocalFunction"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "cellToLocal", void 0);
r([ ae.bindAtom("G15_FBase_TutorialContentToWorldFunction"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "contentToWorld", void 0);
r([ ae.bindAtom("G15_FIdleGuide_IsInBackButtonFunction"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "isInBackButton", void 0);
return r([ ae.atomClass("G15_FIdleGuide_FindNextVisibleUnfilledBrushFunction") ], t);
}(ae.FunctionAtom);
n.G15_FIdleGuide_FindNextVisibleUnfilledBrushFunction = p;
cc._RF.pop();
}, {} ],
G15_FIdleGuide_GuideComp: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "19574f2lmNNqJ3/RsjS1gAP", "G15_FIdleGuide_GuideComp");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var d = e.length - 1; d >= 0; d--) (i = e[d]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FIdleGuide_GuideComp = void 0;
var a = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
spineAnim: "",
spineLoop: !1,
spineScaleX: -1,
alpha: 0,
isActive: !1,
phase: 0,
guideType: 0,
startWorldX: 0,
startWorldY: 0,
targetWorldX: 0,
targetWorldY: 0
};
};
return r([ ae.atomClass("G15_FIdleGuide_GuideComp") ], t);
}(ae.EntityComponentAtom);
n.G15_FIdleGuide_GuideComp = a;
cc._RF.pop();
}, {} ],
G15_FIdleGuide_GuideDomain: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2d51dPtJxFFTbzIhRdh6us6", "G15_FIdleGuide_GuideDomain");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var d = e.length - 1; d >= 0; d--) (i = e[d]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FIdleGuide_GuideDomain = void 0;
var d = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var n, o;
r([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "transform", void 0);
r([ ae.bindAtom("G15_FIdleGuide_GuideComp"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "comp", void 0);
return r([ ae.atomClass("G15_FIdleGuide_GuideDomain") ], t);
}(ae.EntityDomainAtom);
n.G15_FIdleGuide_GuideDomain = d;
cc._RF.pop();
}, {} ],
G15_FIdleGuide_GuideRender: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7928apKtvBMoIpL/yKQQV8N", "G15_FIdleGuide_GuideRender");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var d = e.length - 1; d >= 0; d--) (i = e[d]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FIdleGuide_GuideRender = void 0;
var d = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this.domain.comp, t = this.config.guideSpine;
return ae.Node({
name: "idleGuideRoot",
active: [ function(t) {
return e.isActive[t];
}, [ e, "isActive" ] ],
alpha: [ function(t) {
return e.alpha[t];
}, [ e, "alpha" ] ]
}, ae.Spine({
name: "idleGuideSpine",
spineUrl: t,
scaleX: [ function(t) {
return e.spineScaleX[t];
}, [ e, "spineScaleX" ] ],
animation: {
name: [ function(t) {
return e.spineAnim[t];
}, [ e, "spineAnim" ] ],
loop: [ function(t) {
return e.spineLoop[t];
}, [ e, "spineLoop" ] ]
},
event: {
complete: this.spineCompleteRouter
}
}));
};
t.prototype.defineRenderName = function() {
return null;
};
var n, o, d;
r([ ae.entityRenderer, ae.bindAtom("G15_FIdleGuide_GuideDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "domain", void 0);
r([ ae.bindAtom("G15_FIdleGuide_Config"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "config", void 0);
r([ ae.bindAtom("G15_FIdleGuide_SpineCompleteRouter"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "spineCompleteRouter", void 0);
return r([ ae.atomClass("G15_FIdleGuide_GuideRender") ], t);
}(ae.RenderAtom);
n.G15_FIdleGuide_GuideRender = d;
cc._RF.pop();
}, {} ],
G15_FIdleGuide_IdleGuideLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c6daayiRLFE5bVQ8YyCroBB", "G15_FIdleGuide_IdleGuideLogic");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var d = e.length - 1; d >= 0; d--) (i = e[d]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, d = this && this.__values || function(e) {
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
n.G15_FIdleGuide_IdleGuideLogic = n.G15_FIdleGuide_DestroyGuideFunction = n.G15_FIdleGuide_CreateGuideFunction = void 0;
var u = e("../../G15_FIdleGuide_Namespace"), p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t, n, o = e.gameSceneDomain.collect()[0];
if (!o) return null;
var i = e.guideDomain.collect().slice();
try {
for (var r = d(i), a = r.next(); !a.done; a = r.next()) {
var u = a.value;
e.guideDomain.destroy(u);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (n = r.return) && n.call(r);
} finally {
if (t) throw t.error;
}
}
var p = e.guideDomain.create();
e.childOf.addChild(o, p);
return p;
};
};
var n, o, u;
r([ ae.bindAtom("G15_FIdleGuide_GuideDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideDomain", void 0);
r([ ae.bindAtom("G15_FBase_GameSceneDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "gameSceneDomain", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "childOf", void 0);
return r([ ae.atomClass("G15_FIdleGuide_CreateGuideFunction") ], t);
}(ae.FunctionAtom);
n.G15_FIdleGuide_CreateGuideFunction = p;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function() {
var t, n, o = e.guideDomain.collect().slice();
try {
for (var i = d(o), r = i.next(); !r.done; r = i.next()) {
var a = r.value;
e.stopTween(a);
e.guideDomain.destroy(a);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (n = i.return) && n.call(i);
} finally {
if (t) throw t.error;
}
}
};
};
var n, o;
r([ ae.bindAtom("G15_FIdleGuide_GuideDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "guideDomain", void 0);
r([ ae.bindAtom("G_FAtom_StopTween"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "stopTween", void 0);
return r([ ae.atomClass("G15_FIdleGuide_DestroyGuideFunction") ], t);
}(ae.FunctionAtom);
n.G15_FIdleGuide_DestroyGuideFunction = c;
var l = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
idleAccum: 0,
guideShowing: !1,
prevVpTouching: !1,
prevPalettePressing: !0,
palHolding: !1
};
};
t.prototype.onExecute = function(e, t) {
var n = t.runtime, o = this.viewportDomain.collect()[0], i = Boolean(o && this.viewportDomain.comp.touching[o]), r = i && !n.prevVpTouching, a = !i && n.prevVpTouching;
n.prevVpTouching = i;
var d = this.paletteClickLogic.runtime.isPalettePressing, p = d && !n.prevPalettePressing, c = !d && n.prevPalettePressing;
n.prevPalettePressing = d;
p && (n.palHolding = !0);
c && (n.palHolding = !1);
var l = this.backButtonClickLogic.runtime.isBackButtonPressing;
if (r || a || p || c || l) {
n.idleAccum = 0;
if (n.guideShowing) {
this.destroyGuide();
n.guideShowing = !1;
}
} else if (this.checkPrecondition()) if (i || n.palHolding) n.idleAccum = 0; else {
n.idleAccum += this.updateAtom.deltaTime;
if (!(n.idleAccum < this.config.idleThreshold)) if (n.guideShowing) {
if (0 === this.guideDomain.collect().length) {
n.guideShowing = !1;
n.idleAccum = 0;
}
} else {
var f = this.detectGuideType();
if (f.type !== u.G15_FIdleGuide.GuideType.None) {
var s = this.createGuide();
if (s) {
var y = this.applyGuide(s, f);
if (!y && f.fallbackBrushIndex >= 0) {
var _ = {
type: u.G15_FIdleGuide.GuideType.ClickColor,
cells: [],
targetBrushIndex: f.fallbackBrushIndex,
fallbackBrushIndex: -1
};
y = this.applyGuide(s, _);
}
if (y) {
n.guideShowing = !0;
this.sendTrack("g_game_soft_guide_view", {
level_id: this.puzzleModifier.runtime.tableId
});
} else {
this.destroyGuide();
n.idleAccum = 0;
}
}
} else n.idleAccum = 0;
}
} else {
n.palHolding = !1;
n.idleAccum = 0;
}
};
var n, o, d, p, c, l, f, s, y, _, m, G, F, g;
r([ ae.onChain, ae.bindAtom("G15_FBase_UpdateSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "updateSignal", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "updateAtom", void 0);
r([ ae.bindAtom("G15_FIdleGuide_Config"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "config", void 0);
r([ ae.bindAtom("G15_FIdleGuide_GuideDomain"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "guideDomain", void 0);
r([ ae.bindAtom("G15_FIdleGuide_CreateGuideFunction"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "createGuide", void 0);
r([ ae.bindAtom("G15_FIdleGuide_DestroyGuideFunction"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "destroyGuide", void 0);
r([ ae.bindAtom("G15_FIdleGuide_DetectGuideTypeFunction"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "detectGuideType", void 0);
r([ ae.bindAtom("G15_FIdleGuide_ApplyGuideFunction"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "applyGuide", void 0);
r([ ae.bindAtom("G15_FIdleGuide_CheckPreconditionFunction"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "checkPrecondition", void 0);
r([ ae.bindAtom("G15_FBase_ViewportDomain"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "viewportDomain", void 0);
r([ ae.bindAtom("G15_FBase_PaletteClickLogic"), a("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "paletteClickLogic", void 0);
r([ ae.bindAtom("G15_FBase_BackButtonClickLogic"), a("design:type", "function" == typeof (G = "undefined" != typeof ae && ae.AtomTypeInfer) ? G : Object) ], t.prototype, "backButtonClickLogic", void 0);
r([ ae.bindAtom("G15_FBase_SendTrack"), a("design:type", "function" == typeof (F = "undefined" != typeof ae && ae.AtomTypeInfer) ? F : Object) ], t.prototype, "sendTrack", void 0);
r([ ae.bindAtom("G15_FBase_PuzzleConfigModifier"), a("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "puzzleModifier", void 0);
return r([ ae.atomClass("G15_FIdleGuide_IdleGuideLogic") ], t);
}(ae.LogicAtom);
n.G15_FIdleGuide_IdleGuideLogic = l;
cc._RF.pop();
}, {
"../../G15_FIdleGuide_Namespace": "G15_FIdleGuide_Namespace"
} ],
G15_FIdleGuide_IsInBackButtonFunction: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ac8cfxTL3ND27d+lN29HyFg", "G15_FIdleGuide_IsInBackButtonFunction");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var d = e.length - 1; d >= 0; d--) (i = e[d]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FIdleGuide_IsInBackButtonFunction = void 0;
var d = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, n) {
var o = e.getWinSize(), i = o.width, r = o.height, a = e.adapterLogic.runtime.targetUIOffsetY, d = e.config, u = d.backButtonSize, p = -i / 2 + d.backButtonLeftMargin, c = r / 2 - (d.backButtonTopMargin + a);
return t >= p && t <= p + u && n <= c && n >= c - u;
};
};
var n, o, d;
r([ ae.bindAtom("G_FAtom_GetWinSize"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getWinSize", void 0);
r([ ae.bindAtom("G15_FBase_AdapterLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "adapterLogic", void 0);
r([ ae.bindAtom("G15_FIdleGuide_Config"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "config", void 0);
return r([ ae.atomClass("G15_FIdleGuide_IsInBackButtonFunction") ], t);
}(ae.FunctionAtom);
n.G15_FIdleGuide_IsInBackButtonFunction = d;
cc._RF.pop();
}, {} ],
G15_FIdleGuide_Namespace: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e9103jQlRlFvLjFneXg7fRY", "G15_FIdleGuide_Namespace");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FIdleGuide = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "闲置引导：用户在新手图内停留N秒无操作时，根据当前界面状态显示填色引导动画";
(function(e) {
e.Name = "G15";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FIdleGuide"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 7] = "Version";
e.CreateTime = "2026-04-14 10:41:20";
})(e.BundleInfo || (e.BundleInfo = {}));
(function(e) {
e[e.None = 0] = "None";
e[e.SwipeToColor = 1] = "SwipeToColor";
e[e.PaintCells = 2] = "PaintCells";
e[e.ClickColor = 3] = "ClickColor";
e[e.ZoomIn = 4] = "ZoomIn";
})(e.GuideType || (e.GuideType = {}));
(function(e) {
e[e.Idle = 0] = "Idle";
e[e.Pressed = 1] = "Pressed";
e[e.Tweening = 2] = "Tweening";
e[e.Lifting = 3] = "Lifting";
})(e.GuidePhase || (e.GuidePhase = {}));
})(n.G15_FIdleGuide || (n.G15_FIdleGuide = {}));
cc._RF.pop();
}, {} ],
G15_FIdleGuide_Signals: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "39023T9+MJGw5nnhyHhpI6K", "G15_FIdleGuide_Signals");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var d = e.length - 1; d >= 0; d--) (i = e[d]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FIdleGuide_FadeOutCompleteRouter = n.G15_FIdleGuide_FadeOutCompleteSignal = n.G15_FIdleGuide_SwipeTweenCompleteRouter = n.G15_FIdleGuide_SwipeTweenCompleteSignal = n.G15_FIdleGuide_SpineCompleteRouter = n.G15_FIdleGuide_SpineCompleteSignal = void 0;
var d = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var n;
r([ ae.bindAtom("G15_FIdleGuide_GuideDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "domain", void 0);
return r([ ae.atomClass("G15_FIdleGuide_SpineCompleteSignal") ], t);
}(ae.SignalAtom);
n.G15_FIdleGuide_SpineCompleteSignal = d;
var u = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var n, o;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "uiEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G15_FIdleGuide_SpineCompleteSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
return r([ ae.atomClass("G15_FIdleGuide_SpineCompleteRouter") ], t);
}(ae.SignalRouterAtom);
n.G15_FIdleGuide_SpineCompleteRouter = u;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var n;
r([ ae.bindAtom("G15_FIdleGuide_GuideDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "domain", void 0);
return r([ ae.atomClass("G15_FIdleGuide_SwipeTweenCompleteSignal") ], t);
}(ae.SignalAtom);
n.G15_FIdleGuide_SwipeTweenCompleteSignal = p;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var n, o;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_TweenEvent"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tweenEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G15_FIdleGuide_SwipeTweenCompleteSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
return r([ ae.atomClass("G15_FIdleGuide_SwipeTweenCompleteRouter") ], t);
}(ae.SignalRouterAtom);
n.G15_FIdleGuide_SwipeTweenCompleteRouter = c;
var l = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var n;
r([ ae.bindAtom("G15_FIdleGuide_GuideDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "domain", void 0);
return r([ ae.atomClass("G15_FIdleGuide_FadeOutCompleteSignal") ], t);
}(ae.SignalAtom);
n.G15_FIdleGuide_FadeOutCompleteSignal = l;
var f = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var n, o;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_TweenEvent"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "tweenEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G15_FIdleGuide_FadeOutCompleteSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
return r([ ae.atomClass("G15_FIdleGuide_FadeOutCompleteRouter") ], t);
}(ae.SignalRouterAtom);
n.G15_FIdleGuide_FadeOutCompleteRouter = f;
cc._RF.pop();
}, {} ],
G15_FIdleGuide_SwipeAnimLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "682adaW9zBFG7DymU7q0o+w", "G15_FIdleGuide_SwipeAnimLogic");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var d = e.length - 1; d >= 0; d--) (i = e[d]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FIdleGuide_FadeOutCompleteLogic = n.G15_FIdleGuide_SwipeTweenCompleteLogic = n.G15_FIdleGuide_SpineCompleteLogic = void 0;
var d = e("../../G15_FIdleGuide_Namespace"), u = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function(e) {
var t = this.guideDomain.comp, n = t.phase[e];
if (n === d.G15_FIdleGuide.GuidePhase.Pressed) {
t.phase.set(e, d.G15_FIdleGuide.GuidePhase.Tweening);
this.tween(e, [ [ ae.TweenStepType.To, this.guideDomain.transform, {
x: t.targetWorldX[e],
y: t.targetWorldY[e]
}, this.config.swipeDuration, ae.TweenEasing.SineInOut ], [ ae.TweenStepType.Router, this.swipeCompleteRouter ] ], "idle-swipe");
if (t.guideType[e] === d.G15_FIdleGuide.GuideType.SwipeToColor) {
var o = this.paletteContentDomain.collect()[0];
if (o) {
var i = this.getWinSize().width * this.config.swipePeekFraction, r = this.paletteContentDomain.scrollComp;
this.tween(o, [ [ ae.TweenStepType.To, r, {
scrollContentX: -i
}, this.config.swipeDuration, ae.TweenEasing.SineInOut ], [ ae.TweenStepType.To, r, {
scrollContentX: 0
}, .5 * this.config.swipeDuration, ae.TweenEasing.SineOut ] ], "palette-snap");
}
}
} else n === d.G15_FIdleGuide.GuidePhase.Lifting && this.tween(e, [ [ ae.TweenStepType.To, t, {
alpha: 0
}, this.config.fadeOutDuration ], [ ae.TweenStepType.Router, this.fadeOutRouter ] ], "idle-fade");
};
var n, o, u, p, c, l, f, s;
r([ ae.onChain, ae.bindAtom("G15_FIdleGuide_SpineCompleteSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G15_FIdleGuide_GuideDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
r([ ae.bindAtom("G15_FIdleGuide_Config"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "config", void 0);
r([ ae.bindAtom("G_FAtom_Tween"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "tween", void 0);
r([ ae.bindAtom("G15_FIdleGuide_SwipeTweenCompleteRouter"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "swipeCompleteRouter", void 0);
r([ ae.bindAtom("G15_FIdleGuide_FadeOutCompleteRouter"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "fadeOutRouter", void 0);
r([ ae.bindAtom("G15_FBase_PaletteContentDomain"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "paletteContentDomain", void 0);
r([ ae.bindAtom("G_FAtom_GetWinSize"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "getWinSize", void 0);
return r([ ae.atomClass("G15_FIdleGuide_SpineCompleteLogic") ], t);
}(ae.LogicAtom);
n.G15_FIdleGuide_SpineCompleteLogic = u;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function(e) {
var t = this.guideDomain.comp;
if (t.phase[e] === d.G15_FIdleGuide.GuidePhase.Tweening) {
t.phase.set(e, d.G15_FIdleGuide.GuidePhase.Lifting);
t.spineAnim.set(e, "out");
t.spineLoop.set(e, !1);
}
};
var n, o;
r([ ae.onChain, ae.bindAtom("G15_FIdleGuide_SwipeTweenCompleteSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G15_FIdleGuide_GuideDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
return r([ ae.atomClass("G15_FIdleGuide_SwipeTweenCompleteLogic") ], t);
}(ae.LogicAtom);
n.G15_FIdleGuide_SwipeTweenCompleteLogic = p;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function(e) {
var t = this.guideDomain.comp;
this.guideDomain.transform.x.set(e, t.startWorldX[e]);
this.guideDomain.transform.y.set(e, t.startWorldY[e]);
t.phase.set(e, d.G15_FIdleGuide.GuidePhase.Pressed);
t.spineAnim.set(e, "in_4");
t.spineLoop.set(e, !1);
this.tween(e, [ [ ae.TweenStepType.To, t, {
alpha: 1
}, this.config.fadeInDuration ] ], "idle-fade");
};
var n, o, u, p;
r([ ae.onChain, ae.bindAtom("G15_FIdleGuide_FadeOutCompleteSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G15_FIdleGuide_GuideDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "guideDomain", void 0);
r([ ae.bindAtom("G15_FIdleGuide_Config"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "config", void 0);
r([ ae.bindAtom("G_FAtom_Tween"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "tween", void 0);
return r([ ae.atomClass("G15_FIdleGuide_FadeOutCompleteLogic") ], t);
}(ae.LogicAtom);
n.G15_FIdleGuide_FadeOutCompleteLogic = c;
cc._RF.pop();
}, {
"../../G15_FIdleGuide_Namespace": "G15_FIdleGuide_Namespace"
} ]
}, {}, [ "G15_FIdleGuide_AeIndex", "G15_FIdleGuide_Namespace", "G15_FIdleGuide_GuideComp", "G15_FIdleGuide_Config", "G15_FIdleGuide_GuideDomain", "G15_FIdleGuide_ApplyGuideFunction", "G15_FIdleGuide_CellToLocalFunction", "G15_FIdleGuide_CheckPreconditionFunction", "G15_FIdleGuide_DetectGuideTypeFunction", "G15_FIdleGuide_FindVisibleUnfilledGroupFunction", "G15_FIdleGuide_IsInBackButtonFunction", "G15_FIdleGuide_IdleGuideLogic", "G15_FIdleGuide_SwipeAnimLogic", "G15_FIdleGuide_GuideRender", "G15_FIdleGuide_Signals" ]);