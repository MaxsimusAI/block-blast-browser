window.__require = function e(t, o, n) {
function l(c, r) {
if (!o[c]) {
if (!t[c]) {
var i = c.split("/");
i = i[i.length - 1];
if (!t[i]) {
var f = "function" == typeof __require && __require;
if (!r && f) return f(i, !0);
if (a) return a(i, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = i;
}
var p = o[c] = {
exports: {}
};
t[c][0].call(p.exports, function(e) {
return l(t[c][1][e] || e);
}, p, p.exports, e, t, o, n);
}
return o[c].exports;
}
for (var a = "function" == typeof __require && __require, c = 0; c < n.length; c++) l(n[c]);
return l;
}({
G12_FBlockWall_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6b208SnANdDpZhOMgyr6n31", "G12_FBlockWall_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FBlockWall = void 0;
var n = e("./G12_FBlockWall_Namespace");
Object.defineProperty(o, "G12_FBlockWall", {
enumerable: !0,
get: function() {
return n.G12_FBlockWall;
}
});
cc._RF.pop();
}, {
"./G12_FBlockWall_Namespace": "G12_FBlockWall_Namespace"
} ],
G12_FBlockWall_CreateWallBlockEntityFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "abf30VpgatGdZrVI7vbjZWn", "G12_FBlockWall_CreateWallBlockEntityFunc");
var n, l = this && this.__extends || (n = function(e, t) {
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
var l, a = arguments.length, c = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var r = e.length - 1; r >= 0; r--) (l = e[r]) && (c = (a < 3 ? l(c) : a > 3 ? l(t, o, c) : l(t, o)) || c);
return a > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FBlockWall_CreateWallBlockEntityFunc = void 0;
var r = function(e) {
l(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n = e.loadBlockDataLogic.runtime, l = n.gridSize, a = n.mapWidth, c = n.mapHeight, r = n.mapScale, i = a >> 1, f = c >> 1, p = 0, u = 0, _ = 0, s = 0;
if (o.idAndPos) {
var d = e.getSpecialBlockCfgFunc(o.idAndPos[0]);
p = d[0];
u = d[1];
_ = o.idAndPos[1];
s = o.idAndPos[2];
} else {
p = o.size[0];
u = o.size[1];
_ = o.pos[0];
s = o.pos[1];
}
var y = e.wallBlockDomain.blockCmp, m = e.wallBlockDomain.uiCmp, B = e.wallBlockDomain.transform, h = e.wallBlockDomain.create();
y.type.set(h, 8);
y.colorType.set(h, 0);
y.count.set(h, -1);
y.row.set(h, s);
y.col.set(h, _);
y.sizeH.set(h, p);
y.sizeV.set(h, u);
y.isMaskColor.set(h, !1);
y.canCollect.set(h, !1);
y.canThrough.set(h, !1);
B.x.set(h, _ * l + p * l / 2 - i);
B.y.set(h, -s * l - u * l / 2 + f);
var k = r * e.constCfg.gridSize / e.wallCfg.wallWidth;
m.width.set(h, p * e.wallCfg.wallWidth * k);
m.height.set(h, u * e.wallCfg.wallHeight * k);
m.zIndex.set(h, s);
e.childOf.addChild(t, h);
return h;
};
};
var o, n, r, i, f, p, u;
a([ ae.bindAtom("G_FAtom_ChildOf"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "childOf", void 0);
a([ ae.bindAtom("G12_FBase_LoadBlockDataLogic"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "loadBlockDataLogic", void 0);
a([ ae.bindAtom("G12_FBlockWall_WallBlockDomain"), c("design:type", "function" == typeof (r = "undefined" != typeof ae && ae.AtomTypeInfer) ? r : Object) ], t.prototype, "wallBlockDomain", void 0);
a([ ae.bindAtom("G12_FBase_ConstCfg"), c("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "constCfg", void 0);
a([ ae.bindAtom("G12_FBase_GetBlockColorByTypesFunc"), c("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "getBlockColorByTypesFunc", void 0);
a([ ae.bindAtom("G12_FBase_GetSpecialBlockCfgFunc"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "getSpecialBlockCfgFunc", void 0);
a([ ae.bindAtom("G12_FBlockWall_WallCfg"), c("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "wallCfg", void 0);
return a([ ae.atomClass("G12_FBlockWall_CreateWallBlockEntityFunc") ], t);
}(ae.FunctionAtom);
o.G12_FBlockWall_CreateWallBlockEntityFunc = r;
cc._RF.pop();
}, {} ],
G12_FBlockWall_Loader: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "34b74vVrWZBHIkCSgVU4jgD", "G12_FBlockWall_Loader");
var n, l = this && this.__extends || (n = function(e, t) {
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
var l, a = arguments.length, c = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var r = e.length - 1; r >= 0; r--) (l = e[r]) && (c = (a < 3 ? l(c) : a > 3 ? l(t, o, c) : l(t, o)) || c);
return a > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FBlockWall_Loader = void 0;
var r = function(e) {
l(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineLoad = function() {
var e;
return {
paths: (e = {}, e[ae.LoaderAssetType.Texture] = [ this.wallTexCfg.wallBlock ], e),
silent: !0,
onlyDownload: !0
};
};
var o;
a([ ae.bindAtom("G12_FBlockWall_WallCfg"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "wallTexCfg", void 0);
return a([ ae.atomClass("G12_FBlockWall_Loader") ], t);
}(ae.LoadAtom);
o.G12_FBlockWall_Loader = r;
cc._RF.pop();
}, {} ],
G12_FBlockWall_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c8537qI9eZKsKSsIRzDM/4P", "G12_FBlockWall_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FBlockWall = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "增加新色块-墙";
(function(e) {
e.Name = "G12";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FBlockWall"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 4] = "Version";
e.CreateTime = "2026-04-30 10:04:26";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G12_FBlockWall || (o.G12_FBlockWall = {}));
cc._RF.pop();
}, {} ],
G12_FBlockWall_RegisterWallBlockLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ed91eAOn+NIJJmmp0WSzFKF", "G12_FBlockWall_RegisterWallBlockLogic");
var n, l = this && this.__extends || (n = function(e, t) {
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
var l, a = arguments.length, c = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var r = e.length - 1; r >= 0; r--) (l = e[r]) && (c = (a < 3 ? l(c) : a > 3 ? l(t, o, c) : l(t, o)) || c);
return a > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FBlockWall_RegisterWallBlockLogic = void 0;
var r = function(e) {
l(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e = this, t = this.blockMgrFunc(), o = {
type: 8,
domain: this.wallBlockDomain,
create: function(t, o) {
return e.createWallBlockEntityFunc(t, o);
}
};
t.register(o);
};
var o, n, r, i;
a([ ae.signalStart, ae.onChain, ae.bindAtom("G12_FBase_LoadGamePanelSignal"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "loadGamePanelSignal", void 0);
a([ ae.bindAtom("G12_FBase_BlockMgrFunc"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "blockMgrFunc", void 0);
a([ ae.bindAtom("G12_FBlockWall_WallBlockDomain"), c("design:type", "function" == typeof (r = "undefined" != typeof ae && ae.AtomTypeInfer) ? r : Object) ], t.prototype, "wallBlockDomain", void 0);
a([ ae.bindAtom("G12_FBlockWall_CreateWallBlockEntityFunc"), c("design:type", "function" == typeof (i = "undefined" != typeof ae && ae.AtomTypeInfer) ? i : Object) ], t.prototype, "createWallBlockEntityFunc", void 0);
return a([ ae.atomClass("G12_FBlockWall_RegisterWallBlockLogic") ], t);
}(ae.LogicAtom);
o.G12_FBlockWall_RegisterWallBlockLogic = r;
cc._RF.pop();
}, {} ],
G12_FBlockWall_WallBlockDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "02360j0Oj5JmYH4g5b0mlC+", "G12_FBlockWall_WallBlockDomain");
var n, l = this && this.__extends || (n = function(e, t) {
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
var l, a = arguments.length, c = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var r = e.length - 1; r >= 0; r--) (l = e[r]) && (c = (a < 3 ? l(c) : a > 3 ? l(t, o, c) : l(t, o)) || c);
return a > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FBlockWall_WallBlockDomain = void 0;
var r = function(e) {
l(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n, r;
a([ ae.bindAtom("G_FAtom_Transform"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
a([ ae.bindAtom("G12_FBase_BlockCmp"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "blockCmp", void 0);
a([ ae.bindAtom("G12_FBase_UICmp"), c("design:type", "function" == typeof (r = "undefined" != typeof ae && ae.AtomTypeInfer) ? r : Object) ], t.prototype, "uiCmp", void 0);
return a([ ae.atomClass("G12_FBlockWall_WallBlockDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FBlockWall_WallBlockDomain = r;
cc._RF.pop();
}, {} ],
G12_FBlockWall_WallBlockRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2e907kTwb5LNITjLZf41HCO", "G12_FBlockWall_WallBlockRender");
var n, l = this && this.__extends || (n = function(e, t) {
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
var l, a = arguments.length, c = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var r = e.length - 1; r >= 0; r--) (l = e[r]) && (c = (a < 3 ? l(c) : a > 3 ? l(t, o, c) : l(t, o)) || c);
return a > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FBlockWall_WallBlockRender = void 0;
var r = function(e) {
l(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Sprite({
name: "WallBlockSprite",
img: this.wallTexCfg.wallBlock,
width: [ function(t) {
return e.domain.uiCmp.width[t];
}, [ this.domain.uiCmp, "width" ] ],
height: [ function(t) {
return e.domain.uiCmp.height[t];
}, [ this.domain.uiCmp, "height" ] ],
alpha: [ function(t) {
return e.domain.uiCmp.alpha[t];
}, [ this.domain.uiCmp, "alpha" ] ],
zIndex: [ function(t) {
return e.domain.uiCmp.zIndex[t];
}, [ this.domain.uiCmp, "zIndex" ] ]
});
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n;
a([ ae.entityRenderer, ae.bindAtom("G12_FBlockWall_WallBlockDomain"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "domain", void 0);
a([ ae.bindAtom("G12_FBlockWall_WallCfg"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "wallTexCfg", void 0);
return a([ ae.atomClass("G12_FBlockWall_WallBlockRender") ], t);
}(ae.RenderAtom);
o.G12_FBlockWall_WallBlockRender = r;
cc._RF.pop();
}, {} ],
G12_FBlockWall_WallCfg: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "aad1bMU5jlLOJwbKNnjgkC7", "G12_FBlockWall_WallCfg");
var n, l = this && this.__extends || (n = function(e, t) {
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
var l, a = arguments.length, c = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var r = e.length - 1; r >= 0; r--) (l = e[r]) && (c = (a < 3 ? l(c) : a > 3 ? l(t, o, c) : l(t, o)) || c);
return a > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FBlockWall_WallCfg = void 0;
var c = e("../../G12_FBlockWall_Namespace"), r = function(e) {
l(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
wallBlock: this.url(c.G12_FBlockWall.FeatureName.Name)("res/textures/game/gameplay_img_wall"),
wallWidth: 72,
wallHeight: 75
};
};
return a([ ae.atomClass("G12_FBlockWall_WallCfg") ], t);
}(ae.ConfigAtom);
o.G12_FBlockWall_WallCfg = r;
cc._RF.pop();
}, {
"../../G12_FBlockWall_Namespace": "G12_FBlockWall_Namespace"
} ]
}, {}, [ "G12_FBlockWall_AeIndex", "G12_FBlockWall_Namespace", "G12_FBlockWall_WallCfg", "G12_FBlockWall_WallBlockDomain", "G12_FBlockWall_CreateWallBlockEntityFunc", "G12_FBlockWall_Loader", "G12_FBlockWall_RegisterWallBlockLogic", "G12_FBlockWall_WallBlockRender" ]);
//# sourceMappingURL=index.js.map
