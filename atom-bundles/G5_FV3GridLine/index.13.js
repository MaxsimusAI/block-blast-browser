window.__require = function e(t, n, o) {
function i(a, c) {
if (!n[a]) {
if (!t[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!t[l]) {
var d = "function" == typeof __require && __require;
if (!c && d) return d(l, !0);
if (r) return r(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var f = n[a] = {
exports: {}
};
t[a][0].call(f.exports, function(e) {
return i(t[a][1][e] || e);
}, f, f.exports, e, t, n, o);
}
return n[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
G5_FV3GridLine_AeIndex: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f5dc1qVWGFLyLBhUhVcV/lA", "G5_FV3GridLine_AeIndex");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FV3GridLine = void 0;
var o = e("./G5_FV3GridLine_Namespace");
Object.defineProperty(n, "G5_FV3GridLine", {
enumerable: !0,
get: function() {
return o.G5_FV3GridLine;
}
});
cc._RF.pop();
}, {
"./G5_FV3GridLine_Namespace": "G5_FV3GridLine_Namespace"
} ],
G5_FV3GridLine_ConnectionLineConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2c571usME9IuZYhDfChm6+A", "G5_FV3GridLine_ConnectionLineConfig");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FV3GridLine_ConnectionLineConfig = void 0;
var a = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url("G5_FSkinV3");
return {
lineBoardStraightImg: e("res/textures/line_board_hengshu"),
lineBoardDiagonalImg: e("res/textures/line_board_xie"),
lineBoardStraightHeight: 22,
lineBoardDiagonalHeight: 20
};
};
return r([ ae.atomClass("G5_FV3GridLine_ConnectionLineConfig") ], t);
}(ae.ConfigAtom);
n.G5_FV3GridLine_ConnectionLineConfig = a;
cc._RF.pop();
}, {} ],
G5_FV3GridLine_ConnectionLineDragConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8ac56lI+DtFupBpuR+JFs2F", "G5_FV3GridLine_ConnectionLineDragConfig");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FV3GridLine_ConnectionLineDragConfig = void 0;
var a = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
lineBoardDiagonalImg: this.url("G5_FV3GridLine")("res/textures/line_board_xie_drag"),
lineBoardDiagonalHeight: 24
};
};
return r([ ae.atomClass("G5_FV3GridLine_ConnectionLineDragConfig") ], t);
}(ae.ConfigAtom);
n.G5_FV3GridLine_ConnectionLineDragConfig = a;
cc._RF.pop();
}, {} ],
G5_FV3GridLine_ConnectionLineRender: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ea64bU1t7NIE5D4a/mxWxsl", "G5_FV3GridLine_ConnectionLineRender");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}, c = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var o, i, r = n.call(e), a = [];
try {
for (;(void 0 === t || t-- > 0) && !(o = r.next()).done; ) a.push(o.value);
} catch (e) {
i = {
error: e
};
} finally {
try {
o && !o.done && (n = r.return) && n.call(r);
} finally {
if (i) throw i.error;
}
}
return a;
}, l = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
return e;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FV3GridLine_SkinBBeforeSkinA = n.G5_FV3GridLine_ConnectionLineRender = void 0;
var d = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.renderCondition = function() {
return !0;
};
t.prototype.defineRender = function() {
for (var e = this, t = this.config, n = t.gridWidth, o = t.gridHeight, i = this.connectionLineDomain.connectionLineData, r = this.gameDomain.gameData, a = this.tileDomain.tileData, c = this.gameInitLogic.runtime, d = [], f = function(t) {
var n = t;
d.push(ae.Node({
name: "LineSegment_" + n,
anchorX: .5,
anchorY: .5,
x: [ function(t) {
var o = i.dirtyVersion[t], a = e.collectConnectedTiles(o);
if (a.length < n + 2) return 0;
var c = e.calcTilePos(a[n].row, a[n].col).x, l = e.calcTilePos(a[n + 1].row, a[n + 1].col), d = e.gameDomain.collect()[0], f = d ? r.renderOffsetX[d] : 0;
return (c + l.x) / 2 + f;
}, [ i, "dirtyVersion" ], [ r, "renderOffsetX" ], [ r, "renderOffsetY" ] ],
y: [ function(t) {
var o = i.dirtyVersion[t], a = e.collectConnectedTiles(o);
if (a.length < n + 2) return 0;
var c = e.calcTilePos(a[n].row, a[n].col).y, l = e.calcTilePos(a[n + 1].row, a[n + 1].col), d = e.gameDomain.collect()[0], f = d ? r.renderOffsetY[d] : 0;
return (c + l.y) / 2 - f;
}, [ i, "dirtyVersion" ], [ r, "renderOffsetX" ], [ r, "renderOffsetY" ] ],
angle: [ function(t) {
var o = i.dirtyVersion[t], r = e.collectConnectedTiles(o);
if (r.length < n + 2) return 0;
var a = e.calcTilePos(r[n].row, r[n].col), c = a.x, l = a.y, d = e.calcTilePos(r[n + 1].row, r[n + 1].col);
return e.mathAtan2(d.y - l, d.x - c) * (180 / Math.PI);
}, [ i, "dirtyVersion" ], [ r, "renderOffsetX" ], [ r, "renderOffsetY" ] ],
active: [ function(t) {
return 0 === c.gameState && !!i.active[t] && e.collectConnectedTiles(i.dirtyVersion[t]).length >= n + 2;
}, [ s.gameInitLogic, "runtime", "gameState" ], [ i, "active" ], [ i, "dirtyVersion" ] ]
}, ae.Sprite({
zIndex: 2,
name: "LineGlow_" + n,
img: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
return o.length < n + 2 ? e.lineBoardConfig.lineBoardStraightImg : o[n].row === o[n + 1].row || o[n].col === o[n + 1].col ? e.lineBoardConfig.lineBoardStraightImg : e.lineBoardConfig.lineBoardDiagonalImg;
}, [ i, "dirtyVersion" ] ],
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
trim: !1,
anchorX: .5,
anchorY: .5,
width: [ function(t) {
var o = i.dirtyVersion[t], r = e.collectConnectedTiles(o);
if (r.length < n + 2) return 0;
var a = e.calcTilePos(r[n].row, r[n].col), c = a.x, l = a.y, d = e.calcTilePos(r[n + 1].row, r[n + 1].col);
return e.mathHypot(d.x - c, d.y - l);
}, [ i, "dirtyVersion" ] ],
height: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
return o.length < n + 2 ? e.lineBoardConfig.lineBoardStraightHeight : o[n].row === o[n + 1].row || o[n].col === o[n + 1].col ? e.lineBoardConfig.lineBoardStraightHeight : e.lineBoardConfig.lineBoardDiagonalHeight;
}, [ i, "dirtyVersion" ] ],
rgb: 16777215
}), ae.Sprite({
zIndex: 1,
name: "LineStraight_" + n,
active: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
return !(o.length < n + 2 || o[n].row !== o[n + 1].row && o[n].col !== o[n + 1].col);
}, [ i, "dirtyVersion" ] ],
img: s.lineConfig.lineStraight,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
anchorX: .5,
anchorY: .5,
width: [ function(t) {
var o = i.dirtyVersion[t], r = e.collectConnectedTiles(o);
if (r.length < n + 2) return 0;
var a = e.calcTilePos(r[n].row, r[n].col), c = a.x, l = a.y, d = e.calcTilePos(r[n + 1].row, r[n + 1].col);
return e.mathHypot(d.x - c, d.y - l);
}, [ i, "dirtyVersion" ] ],
height: s.lineConfig.lineStraightHeight,
rgb: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
if (o.length < n + 2) return 16777215;
var r = a.value[o[n].eid];
return r <= 0 ? 16777215 : e.config.colorsUp[((r - 1) % 12 + 12) % 12];
}, [ i, "dirtyVersion" ] ]
}), ae.Sprite({
zIndex: 1,
name: "LineDiagExit_" + n,
active: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
return !(o.length < n + 2) && o[n].row !== o[n + 1].row && o[n].col !== o[n + 1].col;
}, [ i, "dirtyVersion" ] ],
img: s.lineConfig.lineDiagonal,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
anchorX: .5,
anchorY: .5,
x: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
if (o.length < n + 2) return 0;
var r = e.calcTilePos(o[n].row, o[n].col), a = r.x, c = r.y, l = e.calcTilePos(o[n + 1].row, o[n + 1].col);
return -e.mathHypot(l.x - a, l.y - c) / 4;
}, [ i, "dirtyVersion" ] ],
width: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
if (o.length < n + 2) return 0;
var r = e.calcTilePos(o[n].row, o[n].col), a = r.x, c = r.y, l = e.calcTilePos(o[n + 1].row, o[n + 1].col);
return e.mathHypot(l.x - a, l.y - c) / 2;
}, [ i, "dirtyVersion" ] ],
height: s.lineConfig.lineDiagonalHeight,
rgb: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
if (o.length < n + 2) return 16777215;
var r = a.value[o[n].eid];
return r <= 0 ? 16777215 : e.config.colorsUp[((r - 1) % 12 + 12) % 12];
}, [ i, "dirtyVersion" ] ]
}), ae.Sprite({
zIndex: 1,
name: "LineDiagEntry_" + n,
active: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
return !(o.length < n + 2) && o[n].row !== o[n + 1].row && o[n].col !== o[n + 1].col;
}, [ i, "dirtyVersion" ] ],
img: s.lineConfig.lineDiagonal,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
anchorX: .5,
anchorY: .5,
x: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
if (o.length < n + 2) return 0;
var r = e.calcTilePos(o[n].row, o[n].col), a = r.x, c = r.y, l = e.calcTilePos(o[n + 1].row, o[n + 1].col);
return e.mathHypot(l.x - a, l.y - c) / 4;
}, [ i, "dirtyVersion" ] ],
width: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
if (o.length < n + 2) return 0;
var r = e.calcTilePos(o[n].row, o[n].col), a = r.x, c = r.y, l = e.calcTilePos(o[n + 1].row, o[n + 1].col);
return e.mathHypot(l.x - a, l.y - c) / 2;
}, [ i, "dirtyVersion" ] ],
height: s.lineConfig.lineDiagonalHeight,
rgb: [ function(t) {
var o = e.collectConnectedTiles(i.dirtyVersion[t]);
if (o.length < n + 2) return 16777215;
var r = a.value[o[n + 1].eid];
return r <= 0 ? 16777215 : e.config.colorsUp[((r - 1) % 12 + 12) % 12];
}, [ i, "dirtyVersion" ] ]
})));
}, s = this, u = 0; u < 39; u++) f(u);
var p = ae.Node({
name: "FollowLine",
anchorX: .5,
anchorY: .5,
x: [ function(e) {
return (i.lastTileLocalX[e] + i.touchLocalX[e]) / 2;
}, [ i, "lastTileLocalX" ], [ i, "touchLocalX" ] ],
y: [ function(e) {
return (i.lastTileLocalY[e] + i.touchLocalY[e]) / 2;
}, [ i, "lastTileLocalY" ], [ i, "touchLocalY" ] ],
angle: [ function(t) {
var n = i.lastTileLocalX[t], o = i.lastTileLocalY[t], r = i.touchLocalX[t] - n, a = i.touchLocalY[t] - o;
return e.mathAtan2(a, r) * (180 / Math.PI);
}, [ i, "lastTileLocalX" ], [ i, "lastTileLocalY" ], [ i, "touchLocalX" ], [ i, "touchLocalY" ] ],
active: [ function(e) {
return 0 === c.gameState && i.active[e];
}, [ this.gameInitLogic, "runtime", "gameState" ], [ i, "active" ] ]
}, ae.Sprite({
zIndex: 2,
name: "FollowLineGlow",
img: this.lineBoardDragConfig.lineBoardDiagonalImg,
sizeMode: ae.SizeMode.Raw,
renderType: ae.RenderType.Sliced,
trim: !1,
anchorX: .5,
anchorY: .5,
width: [ function(t) {
var n = i.lastTileLocalX[t], o = i.lastTileLocalY[t], r = i.touchLocalX[t] - n, a = i.touchLocalY[t] - o;
return e.mathHypot(r, a);
}, [ i, "lastTileLocalX" ], [ i, "lastTileLocalY" ], [ i, "touchLocalX" ], [ i, "touchLocalY" ] ],
height: this.lineBoardDragConfig.lineBoardDiagonalHeight,
rgb: 16777215
}), ae.Sprite({
zIndex: 1,
name: "FollowLineSprite",
img: this.lineConfig.lineStraight,
sizeMode: ae.SizeMode.Custom,
renderType: ae.RenderType.Sliced,
anchorX: .5,
anchorY: .5,
width: [ function(t) {
var n = i.lastTileLocalX[t], o = i.lastTileLocalY[t], r = i.touchLocalX[t] - n, a = i.touchLocalY[t] - o;
return e.mathHypot(r, a);
}, [ i, "lastTileLocalX" ], [ i, "lastTileLocalY" ], [ i, "touchLocalX" ], [ i, "touchLocalY" ] ],
height: this.lineConfig.lineStraightHeight,
rgb: [ function(t) {
var n = i.dirtyVersion[t], o = e.collectConnectedTiles(n);
if (o.length < 1) return 16777215;
var r = a.value[o[o.length - 1].eid];
return r <= 0 ? 16777215 : e.config.colorsUp[((r - 1) % 12 + 12) % 12];
}, [ i, "dirtyVersion" ] ]
}));
return ae.Node.apply(ae, l([ {
name: "ConnectionLineRoot",
zIndex: [ function(e) {
return i.zIndex[e];
}, [ i, "zIndex" ] ],
width: n,
height: o,
anchorX: .5,
anchorY: .5
} ], d, [ p ]));
};
t.prototype.defineRenderName = function() {
return null;
};
var n, o, c, d, f, s, u, p, _, y, h, g, m, G, L;
r([ ae.entityRenderer, ae.bindAtom("G5_FBase_ConnectionLineDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "connectionLineDomain", void 0);
r([ ae.bindAtom("G5_FBase_TileDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tileDomain", void 0);
r([ ae.bindAtom("G5_FBase_GameConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "config", void 0);
r([ ae.bindAtom("G5_FBase_CalcTilePos"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "calcTilePos", void 0);
r([ ae.bindAtom("G5_FBase_GetColor"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getColor", void 0);
r([ ae.bindAtom("G5_FBase_CollectConnectedTiles"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "collectConnectedTiles", void 0);
r([ ae.bindAtom("G_FAtom_MathHypot"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "mathHypot", void 0);
r([ ae.bindAtom("G_FAtom_MathAtan2"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "mathAtan2", void 0);
r([ ae.bindAtom("G_FAtom_MathSqrt"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "mathSqrt", void 0);
r([ ae.bindAtom("G5_FBase_GameDomain"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "gameDomain", void 0);
r([ ae.bindAtom("G5_FBase_ZIndexConfig"), a("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "zIndexConfig", void 0);
r([ ae.bindAtom("G5_FBase_OnGameInit"), a("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "gameInitLogic", void 0);
r([ ae.bindAtom("G5_FSkinV3_ConnectionLineConfig"), a("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "lineConfig", void 0);
r([ ae.bindAtom("G5_FV3GridLine_ConnectionLineConfig"), a("design:type", "function" == typeof (G = "undefined" != typeof ae && ae.AtomTypeInfer) ? G : Object) ], t.prototype, "lineBoardConfig", void 0);
r([ ae.bindAtom("G5_FV3GridLine_ConnectionLineDragConfig"), a("design:type", "function" == typeof (L = "undefined" != typeof ae && ae.AtomTypeInfer) ? L : Object) ], t.prototype, "lineBoardDragConfig", void 0);
return r([ ae.atomClass("G5_FV3GridLine_ConnectionLineRender") ], t);
}(ae.RenderAtom);
n.G5_FV3GridLine_ConnectionLineRender = d;
var f = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
r([ ae.orderBefore, ae.bindAtom("G5_FV3GridLine_ConnectionLineRender"), a("design:type", Object) ], t.prototype, "skinB", void 0);
r([ ae.orderAfter, ae.bindAtom("G5_FSkinV3_ConnectionLineRender"), a("design:type", Object) ], t.prototype, "skinA", void 0);
return r([ ae.atomClass("G5_FV3GridLine_SkinBBeforeSkinA") ], t);
}(ae.OrderAtom);
n.G5_FV3GridLine_SkinBBeforeSkinA = f;
cc._RF.pop();
}, {} ],
G5_FV3GridLine_GameUIRenderLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1b62b89eqRMNZ/3mzGIcNR/", "G5_FV3GridLine_GameUIRenderLogic");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FV3GridLine_GameUIRenderOrder = n.G5_FV3GridLine_GameUIRenderLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.gameUIRender.ChainPreviewCardGlow && (this.gameUIRender.ChainPreviewCardGlow.active = !0);
this.gameUIRender.MinSpawnCardGlow && (this.gameUIRender.MinSpawnCardGlow.active = !0);
this.gameUIRender.MaxSpawnCardGlow && (this.gameUIRender.MaxSpawnCardGlow.active = !0);
this.gameUIRender.MaxValueCardGlow && (this.gameUIRender.MaxValueCardGlow.active = !0);
this.gameUIRender.GoalCardGlow && (this.gameUIRender.GoalCardGlow.active = !0);
};
var n;
r([ ae.onChain, ae.bindAtom("G5_FBase_GameUIRender"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "gameUIRender", void 0);
return r([ ae.atomClass("G5_FV3GridLine_GameUIRenderLogic") ], t);
}(ae.LogicAtom);
n.G5_FV3GridLine_GameUIRenderLogic = c;
var l = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var n, o;
r([ ae.orderAfter, ae.bindAtom("G5_FV3GridLine_GameUIRenderLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "skinB", void 0);
r([ ae.orderBefore, ae.bindAtom("G5_FSkinV3_GameUIRenderLogic"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "skinA", void 0);
return r([ ae.atomClass("G5_FV3GridLine_GameUIRenderOrder") ], t);
}(ae.OrderAtom);
n.G5_FV3GridLine_GameUIRenderOrder = l;
cc._RF.pop();
}, {} ],
G5_FV3GridLine_Load: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6b8fcmh2BtKx6IOPEPLPcz7", "G5_FV3GridLine_Load");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FV3GridLine_DirAsset = n.G5_FV3GridLine_Load = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineLoad = function() {
return {
directories: this.dirAsset.allRes
};
};
var n;
r([ ae.bindAtom("G5_FV3GridLine_DirAsset"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "dirAsset", void 0);
return r([ ae.atomClass("G5_FV3GridLine_Load") ], t);
}(ae.LoadAtom);
n.G5_FV3GridLine_Load = c;
var l = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
allRes: [ this.url("G5_FV3GridLine")("res/textures") ]
};
};
return r([ ae.atomClass("G5_FV3GridLine_DirAsset") ], t);
}(ae.ConfigAtom);
n.G5_FV3GridLine_DirAsset = l;
cc._RF.pop();
}, {} ],
G5_FV3GridLine_Namespace: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0e0fc2dREFGd6OrwUuCfLSS", "G5_FV3GridLine_Namespace");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FV3GridLine = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "格子增加白线";
(function(e) {
e.Name = "G5";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FV3GridLine"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 13] = "Version";
e.CreateTime = "2026-03-19 16:23:56";
})(e.BundleInfo || (e.BundleInfo = {}));
})(n.G5_FV3GridLine || (n.G5_FV3GridLine = {}));
cc._RF.pop();
}, {} ],
G5_FV3GridLine_TileGlowRenderLogic: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f3d45swMA1OCaj4ONcvBGyC", "G5_FV3GridLine_TileGlowRenderLogic");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G5_FV3GridLine_TileGlowRenderLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.render.TileFrame2.active = !0;
this.render.TileFrame2.width = 140;
this.render.TileFrame2.height = 140;
};
var n;
r([ ae.onChain, ae.bindAtom("G5_FSkinV3_TileGlowRender"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "render", void 0);
return r([ ae.atomClass("G5_FV3GridLine_TileGlowRenderLogic") ], t);
}(ae.LogicAtom);
n.G5_FV3GridLine_TileGlowRenderLogic = c;
cc._RF.pop();
}, {} ]
}, {}, [ "G5_FV3GridLine_AeIndex", "G5_FV3GridLine_Namespace", "G5_FV3GridLine_ConnectionLineConfig", "G5_FV3GridLine_ConnectionLineDragConfig", "G5_FV3GridLine_ConnectionLineRender", "G5_FV3GridLine_GameUIRenderLogic", "G5_FV3GridLine_Load", "G5_FV3GridLine_TileGlowRenderLogic" ]);