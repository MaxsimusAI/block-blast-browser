window.__require = function e(t, o, n) {
function i(c, p) {
if (!o[c]) {
if (!t[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!t[a]) {
var f = "function" == typeof __require && __require;
if (!p && f) return f(a, !0);
if (r) return r(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = a;
}
var u = o[c] = {
exports: {}
};
t[c][0].call(u.exports, function(e) {
return i(t[c][1][e] || e);
}, u, u.exports, e, t, o, n);
}
return o[c].exports;
}
for (var r = "function" == typeof __require && __require, c = 0; c < n.length; c++) i(n[c]);
return i;
}({
G12_FCombo_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ea2ab8RLulMPrBAs22MhPYa", "G12_FCombo_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo = void 0;
var n = e("./G12_FCombo_Namespace");
Object.defineProperty(o, "G12_FCombo", {
enumerable: !0,
get: function() {
return n.G12_FCombo;
}
});
cc._RF.pop();
}, {
"./G12_FCombo_Namespace": "G12_FCombo_Namespace"
} ],
G12_FCombo_AssetsCfg: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f0f73pDaKdMVoiFcgH4zAK9", "G12_FCombo_AssetsCfg");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_AssetsCfg = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url("G12_FCombo");
return {
comboTipSpineUrl: e("res/spines/gameplay_box_jilici"),
comboTipSpineAnimations: [ "Good", "Great", "Wonderful", "Excellent" ],
comboTipWidths: [ 121, 131, 206, 176 ],
comboTipHeights: [ 50, 50, 50, 50 ],
comboAudioUrls: [ e("res/audios/good2"), e("res/audios/great2"), e("res/audios/wonderful"), e("res/audios/excellect2") ]
};
};
return r([ ae.atomClass("G12_FCombo_AssetsCfg") ], t);
}(ae.ConfigAtom);
o.G12_FCombo_AssetsCfg = c;
cc._RF.pop();
}, {} ],
G12_FCombo_ClearRuntimeOnLoadGameLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f76b1jZO9FDWqjjW/bZMYn2", "G12_FCombo_ClearRuntimeOnLoadGameLogic");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_ClearRuntimeOnLoadGameLogic = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
this.pigComboTipRuntimeFunc().clear();
};
var o, n;
r([ ae.onChain, ae.bindAtom("G12_FBase_LoadGameDataSignal"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipRuntimeFunc"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "pigComboTipRuntimeFunc", void 0);
return r([ ae.atomClass("G12_FCombo_ClearRuntimeOnLoadGameLogic") ], t);
}(ae.LogicAtom);
o.G12_FCombo_ClearRuntimeOnLoadGameLogic = p;
cc._RF.pop();
}, {} ],
G12_FCombo_ComboTipAssetsLoad: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "635d5Y1bq9Htp39jmIxK5Vg", "G12_FCombo_ComboTipAssetsLoad");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_ComboTipAssetsLoad = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineLoad = function() {
var e;
return {
paths: (e = {}, e[ae.LoaderAssetType.SkeletonData] = [ this.assetsCfg.comboTipSpineUrl ], 
e[ae.LoaderAssetType.AudioClip] = this.assetsCfg.comboAudioUrls, e),
silent: !0,
onlyDownload: !0
};
};
var o;
r([ ae.bindAtom("G12_FCombo_AssetsCfg"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "assetsCfg", void 0);
return r([ ae.atomClass("G12_FCombo_ComboTipAssetsLoad") ], t);
}(ae.LoadAtom);
o.G12_FCombo_ComboTipAssetsLoad = p;
cc._RF.pop();
}, {} ],
G12_FCombo_ComboTipCfg: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d0af1L+vv9BRKgjXVgfEqrd", "G12_FCombo_ComboTipCfg");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_ComboTipCfg = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
comboThresholds: [ 20, 30, 40, 50 ],
offsetY: 80,
edgePadding: 8,
durationSec: .9
};
};
return r([ ae.atomClass("G12_FCombo_ComboTipCfg") ], t);
}(ae.ConfigAtom);
o.G12_FCombo_ComboTipCfg = c;
cc._RF.pop();
}, {} ],
G12_FCombo_FinishCollectFuncVariant: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2496eJ17xxHB7jF8CT14KrD", "G12_FCombo_FinishCollectFuncVariant");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_FinishCollectFuncVariant = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n;
if (e.simpleBlockDomain.blockCollectCmp && e.simpleBlockDomain.has(t)) {
var i = null === (n = e.simpleBlockDomain.blockCollectCmp.targetPigEid) || void 0 === n ? void 0 : n[t];
e.source(t, o);
if (e.pigDomain.has(i)) for (var r = e.pigComboTipRuntimeFunc().addCombo(i, 1), c = e.comboTipCfg.comboThresholds, p = e.assetsCfg.comboAudioUrls, a = c.length, f = 0; f < a; f++) if (r === c[f]) {
e.showPigComboTipFunc(i, f);
p[f] && e.audioMgrFunc().playEffect(p[f], !1);
break;
}
} else e.source(t, o);
};
};
var o, n, p, a, f, u, s, m, _;
r([ ae.variantOf, ae.bindAtom("G12_FBase_FinishCollectFunc"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "source", void 0);
r([ ae.bindAtom("G12_FCombo_ComboTipCfg"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "comboTipCfg", void 0);
r([ ae.bindAtom("G12_FCombo_AssetsCfg"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "assetsCfg", void 0);
r([ ae.bindAtom("G12_FCombo_ShowPigComboTipFunc"), c("design:type", "function" == typeof (a = "undefined" != typeof ae && ae.AtomTypeInfer) ? a : Object) ], t.prototype, "showPigComboTipFunc", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipRuntimeFunc"), c("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "pigComboTipRuntimeFunc", void 0);
r([ ae.bindAtom("G12_FBase_UpdateBlockCollectAniLogic"), c("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "updateBlockCollectAniLogic", void 0);
r([ ae.bindAtom("G12_FBase_PigDomain"), c("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "pigDomain", void 0);
r([ ae.bindAtom("G12_FBase_SimpleBlockDomain"), c("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "simpleBlockDomain", void 0);
r([ ae.bindAtom("G12_FBase_AudioMgrFunc"), c("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "audioMgrFunc", void 0);
return r([ ae.atomClass("G12_FCombo_FinishCollectFuncVariant") ], t);
}(ae.VariantAtom);
o.G12_FCombo_FinishCollectFuncVariant = p;
cc._RF.pop();
}, {} ],
G12_FCombo_GetTipAnimationByTriggerFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a4dca2MjtBASZbjzxtiqTe7", "G12_FCombo_GetTipAnimationByTriggerFunc");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_GetTipAnimationByTriggerFunc = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t) {
var o, n, i, r = null !== (o = e.pigComboTipDomain.params.triggerType[t]) && void 0 !== o ? o : 0;
return null !== (i = null !== (n = e.assetsCfg.comboTipSpineAnimations[r]) && void 0 !== n ? n : e.assetsCfg.comboTipSpineAnimations[0]) && void 0 !== i ? i : "";
};
};
var o, n;
r([ ae.bindAtom("G12_FCombo_PigComboTipDomain"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "pigComboTipDomain", void 0);
r([ ae.bindAtom("G12_FCombo_AssetsCfg"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "assetsCfg", void 0);
return r([ ae.atomClass("G12_FCombo_GetTipAnimationByTriggerFunc") ], t);
}(ae.FunctionAtom);
o.G12_FCombo_GetTipAnimationByTriggerFunc = p;
cc._RF.pop();
}, {} ],
G12_FCombo_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9b58cmCWLJHg6H+J7Si30s4", "G12_FCombo_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "连续消除提示功能";
(function(e) {
e.Name = "G12";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FCombo"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 9] = "Version";
e.CreateTime = "2026-04-20 18:34:54";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G12_FCombo || (o.G12_FCombo = {}));
cc._RF.pop();
}, {} ],
G12_FCombo_PigComboTipAddComboFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e6cdc6JQoJOY5EIsn2JwfFF", "G12_FCombo_PigComboTipAddComboFunc");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_PigComboTipAddComboFunc = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this.runtimeDataFunc().pigComboCountMap;
return function(t, o) {
var n;
void 0 === o && (o = 1);
if (!t || o <= 0) return 0;
var i = (null !== (n = e.get(t)) && void 0 !== n ? n : 0) + o;
e.set(t, i);
return i;
};
};
var o;
r([ ae.bindAtom("G12_FCombo_PigComboTipRuntimeDataFunc"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "runtimeDataFunc", void 0);
return r([ ae.atomClass("G12_FCombo_PigComboTipAddComboFunc") ], t);
}(ae.FunctionAtom);
o.G12_FCombo_PigComboTipAddComboFunc = p;
cc._RF.pop();
}, {} ],
G12_FCombo_PigComboTipClearFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d8635EmaPNH64kRfvp1q3n8", "G12_FCombo_PigComboTipClearFunc");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_PigComboTipClearFunc = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this.runtimeDataFunc(), t = e.tip2PigMap, o = e.pigComboCountMap;
return function() {
t.clear();
o.clear();
};
};
var o;
r([ ae.bindAtom("G12_FCombo_PigComboTipRuntimeDataFunc"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "runtimeDataFunc", void 0);
return r([ ae.atomClass("G12_FCombo_PigComboTipClearFunc") ], t);
}(ae.FunctionAtom);
o.G12_FCombo_PigComboTipClearFunc = p;
cc._RF.pop();
}, {} ],
G12_FCombo_PigComboTipCmp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "849c9dzEjdDSLrPOMWHuJf1", "G12_FCombo_PigComboTipCmp");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_PigComboTipCmp = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
triggerType: -1,
elapsedSec: 0
};
};
return r([ ae.atomClass("G12_FCombo_PigComboTipCmp") ], t);
}(ae.EntityComponentAtom);
o.G12_FCombo_PigComboTipCmp = c;
cc._RF.pop();
}, {} ],
G12_FCombo_PigComboTipDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ead0eQY7gNPN7KZgdVHLqtD", "G12_FCombo_PigComboTipDomain");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_PigComboTipDomain = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n, p;
r([ ae.bindAtom("G12_FCombo_PigComboTipzIndexCmp"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "zIndexCmp", void 0);
r([ ae.bindAtom("G_FAtom_Transform"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "transform", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipCmp"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "params", void 0);
return r([ ae.atomClass("G12_FCombo_PigComboTipDomain") ], t);
}(ae.EntityDomainAtom);
o.G12_FCombo_PigComboTipDomain = p;
cc._RF.pop();
}, {} ],
G12_FCombo_PigComboTipGetComboFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9f9fc4EfWFKPpbnvHKAChkE", "G12_FCombo_PigComboTipGetComboFunc");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_PigComboTipGetComboFunc = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this.runtimeDataFunc().pigComboCountMap;
return function(t) {
var o;
return null !== (o = e.get(t)) && void 0 !== o ? o : 0;
};
};
var o;
r([ ae.bindAtom("G12_FCombo_PigComboTipRuntimeDataFunc"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "runtimeDataFunc", void 0);
return r([ ae.atomClass("G12_FCombo_PigComboTipGetComboFunc") ], t);
}(ae.FunctionAtom);
o.G12_FCombo_PigComboTipGetComboFunc = p;
cc._RF.pop();
}, {} ],
G12_FCombo_PigComboTipGetPigEidFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e2700ZAJpdAfoM0ngaqHqDU", "G12_FCombo_PigComboTipGetPigEidFunc");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_PigComboTipGetPigEidFunc = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this.runtimeDataFunc().tip2PigMap;
return function(t) {
var o;
return null !== (o = e.get(t)) && void 0 !== o ? o : null;
};
};
var o;
r([ ae.bindAtom("G12_FCombo_PigComboTipRuntimeDataFunc"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "runtimeDataFunc", void 0);
return r([ ae.atomClass("G12_FCombo_PigComboTipGetPigEidFunc") ], t);
}(ae.FunctionAtom);
o.G12_FCombo_PigComboTipGetPigEidFunc = p;
cc._RF.pop();
}, {} ],
G12_FCombo_PigComboTipRemoveTipFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5d89fKc3L9N57XJB6l4JuEP", "G12_FCombo_PigComboTipRemoveTipFunc");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_PigComboTipRemoveTipFunc = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this.runtimeDataFunc().tip2PigMap;
return function(t) {
e.delete(t);
};
};
var o;
r([ ae.bindAtom("G12_FCombo_PigComboTipRuntimeDataFunc"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "runtimeDataFunc", void 0);
return r([ ae.atomClass("G12_FCombo_PigComboTipRemoveTipFunc") ], t);
}(ae.FunctionAtom);
o.G12_FCombo_PigComboTipRemoveTipFunc = p;
cc._RF.pop();
}, {} ],
G12_FCombo_PigComboTipRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "69f1fyheDJJQZAhM+sK49EA", "G12_FCombo_PigComboTipRender");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_PigComboTipRender = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Spine({
name: "PigComboTip",
spineUrl: this.assetsCfg.comboTipSpineUrl,
animation: {
name: [ function(t) {
return e.getTipAnimationByTrigger(t);
}, [ this.pigComboTipDomain.params, "triggerType" ] ],
loop: !1
},
premultipliedAlpha: !1,
zIndex: [ function(t) {
return e.pigComboTipDomain.zIndexCmp.zIndex[t];
}, [ this.pigComboTipDomain.zIndexCmp, "zIndex" ] ]
});
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, p;
r([ ae.entityRenderer, ae.bindAtom("G12_FCombo_PigComboTipDomain"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "pigComboTipDomain", void 0);
r([ ae.bindAtom("G12_FCombo_GetTipAnimationByTriggerFunc"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "getTipAnimationByTrigger", void 0);
r([ ae.bindAtom("G12_FCombo_AssetsCfg"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "assetsCfg", void 0);
return r([ ae.atomClass("G12_FCombo_PigComboTipRender") ], t);
}(ae.RenderAtom);
o.G12_FCombo_PigComboTipRender = p;
cc._RF.pop();
}, {} ],
G12_FCombo_PigComboTipResetComboFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "acacf1KTfJEiKS3cib5MMYF", "G12_FCombo_PigComboTipResetComboFunc");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_PigComboTipResetComboFunc = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this.runtimeDataFunc().pigComboCountMap;
return function(t) {
t && e.delete(t);
};
};
var o;
r([ ae.bindAtom("G12_FCombo_PigComboTipRuntimeDataFunc"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "runtimeDataFunc", void 0);
return r([ ae.atomClass("G12_FCombo_PigComboTipResetComboFunc") ], t);
}(ae.FunctionAtom);
o.G12_FCombo_PigComboTipResetComboFunc = p;
cc._RF.pop();
}, {} ],
G12_FCombo_PigComboTipRuntimeDataFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c8deaElPzFN9oev0wk3XHvq", "G12_FCombo_PigComboTipRuntimeDataFunc");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_PigComboTipRuntimeDataFunc = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = new Map(), t = new Map();
return function() {
return {
tip2PigMap: e,
pigComboCountMap: t
};
};
};
return r([ ae.atomClass("G12_FCombo_PigComboTipRuntimeDataFunc") ], t);
}(ae.FunctionAtom);
o.G12_FCombo_PigComboTipRuntimeDataFunc = c;
cc._RF.pop();
}, {} ],
G12_FCombo_PigComboTipRuntimeFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "147eb4tx0RP3p3qS8TFRLVG", "G12_FCombo_PigComboTipRuntimeFunc");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_PigComboTipRuntimeFunc = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
this.runtimeDataFunc();
var e = {
setPigEid: this.setPigEidFunc,
getPigEid: this.getPigEidFunc,
removeTip: this.removeTipFunc,
addCombo: this.addComboFunc,
getCombo: this.getComboFunc,
resetCombo: this.resetComboFunc,
clear: this.clearFunc
};
return function() {
return e;
};
};
var o, n, p, a, f, u, s, m;
r([ ae.bindAtom("G12_FCombo_PigComboTipRuntimeDataFunc"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "runtimeDataFunc", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipSetPigEidFunc"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "setPigEidFunc", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipGetPigEidFunc"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "getPigEidFunc", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipRemoveTipFunc"), c("design:type", "function" == typeof (a = "undefined" != typeof ae && ae.AtomTypeInfer) ? a : Object) ], t.prototype, "removeTipFunc", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipAddComboFunc"), c("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "addComboFunc", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipGetComboFunc"), c("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "getComboFunc", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipResetComboFunc"), c("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "resetComboFunc", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipClearFunc"), c("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "clearFunc", void 0);
return r([ ae.atomClass("G12_FCombo_PigComboTipRuntimeFunc") ], t);
}(ae.FunctionAtom);
o.G12_FCombo_PigComboTipRuntimeFunc = p;
cc._RF.pop();
}, {} ],
G12_FCombo_PigComboTipSetPigEidFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e505fH8Cr1A/qv7tspNMVMx", "G12_FCombo_PigComboTipSetPigEidFunc");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_PigComboTipSetPigEidFunc = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this.runtimeDataFunc().tip2PigMap;
return function(t, o) {
t && o && e.set(t, o);
};
};
var o;
r([ ae.bindAtom("G12_FCombo_PigComboTipRuntimeDataFunc"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "runtimeDataFunc", void 0);
return r([ ae.atomClass("G12_FCombo_PigComboTipSetPigEidFunc") ], t);
}(ae.FunctionAtom);
o.G12_FCombo_PigComboTipSetPigEidFunc = p;
cc._RF.pop();
}, {} ],
G12_FCombo_PigComboTipzIndexCmp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2c13dCrzMpPBKTeyvuxLkLU", "G12_FCombo_PigComboTipzIndexCmp");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_PigComboTipzIndexCmp = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineComponent = function() {
return {
zIndex: 0
};
};
return r([ ae.atomClass("G12_FCombo_PigComboTipzIndexCmp") ], t);
}(ae.EntityComponentAtom);
o.G12_FCombo_PigComboTipzIndexCmp = c;
cc._RF.pop();
}, {} ],
G12_FCombo_ResetComboOnPigGroupDestroyLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2ca3aYv3EpNUoQKCu7PHMTF", "G12_FCombo_ResetComboOnPigGroupDestroyLogic");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_ResetComboOnPigGroupDestroyLogic = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
for (var e = this.groupMgrFunc(), t = e.get(e.cfg.PigGroupDestroy), o = this.pigComboTipRuntimeFunc(), n = 0; n < t.length; n++) o.resetCombo(t[n]);
};
var o, n, p;
r([ ae.signalStart, ae.onChain, ae.bindAtom("G12_FBase_UpdatePigGroupDestroySignal"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G12_FBase_GroupMgrFunc"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "groupMgrFunc", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipRuntimeFunc"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "pigComboTipRuntimeFunc", void 0);
return r([ ae.atomClass("G12_FCombo_ResetComboOnPigGroupDestroyLogic") ], t);
}(ae.LogicAtom);
o.G12_FCombo_ResetComboOnPigGroupDestroyLogic = p;
cc._RF.pop();
}, {} ],
G12_FCombo_ResetComboOnPigGroupListLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5fbe2eQwIxAsLHUb8rvH5Oz", "G12_FCombo_ResetComboOnPigGroupListLogic");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_ResetComboOnPigGroupListLogic = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
for (var e = this.groupMgrFunc(), t = this.pigComboTipRuntimeFunc(), o = this.loadPigDataLogic.runtime.maxColCount, n = 0; n < o; n++) for (var i = e.get(e.cfg.PigList, n), r = 0; r < i.length; r++) t.resetCombo(i[r]);
};
var o, n, p, a;
r([ ae.onChain, ae.bindAtom("G12_FBase_UpdatePigGroupListSignal"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G12_FBase_GroupMgrFunc"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "groupMgrFunc", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipRuntimeFunc"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "pigComboTipRuntimeFunc", void 0);
r([ ae.bindAtom("G12_FBase_LoadPigDataLogic"), c("design:type", "function" == typeof (a = "undefined" != typeof ae && ae.AtomTypeInfer) ? a : Object) ], t.prototype, "loadPigDataLogic", void 0);
return r([ ae.atomClass("G12_FCombo_ResetComboOnPigGroupListLogic") ], t);
}(ae.LogicAtom);
o.G12_FCombo_ResetComboOnPigGroupListLogic = p;
cc._RF.pop();
}, {} ],
G12_FCombo_ResetComboOnPigGroupOffLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3dffdX4ztlMCpfOjgs/2rt8", "G12_FCombo_ResetComboOnPigGroupOffLogic");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_ResetComboOnPigGroupOffLogic = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
for (var e = this.groupMgrFunc(), t = e.get(e.cfg.PigGroupOff), o = this.pigComboTipRuntimeFunc(), n = 0; n < t.length; n++) o.resetCombo(t[n]);
};
var o, n, p;
r([ ae.onChain, ae.bindAtom("G12_FBase_UpdatePigGroupOffSignal"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G12_FBase_GroupMgrFunc"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "groupMgrFunc", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipRuntimeFunc"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "pigComboTipRuntimeFunc", void 0);
return r([ ae.atomClass("G12_FCombo_ResetComboOnPigGroupOffLogic") ], t);
}(ae.LogicAtom);
o.G12_FCombo_ResetComboOnPigGroupOffLogic = p;
cc._RF.pop();
}, {} ],
G12_FCombo_ShowPigComboTipFunc: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8e66bMuviZJLJZT/p5gdsXa", "G12_FCombo_ShowPigComboTipFunc");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_ShowPigComboTipFunc = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n, i, r;
if (!t || o < 0) return null;
if (!e.pigDomain.has(t)) return null;
var c = e.pigComboTipDomain.create(), p = e.pigComboTipDomain.params, a = e.pigComboTipDomain.transform, f = e.pigDomain.transform, u = e.comboTipCfg;
p.elapsedSec.set(c, 0);
p.triggerType.set(c, o);
e.pigComboTipRuntimeFunc().setPigEid(c, t);
var s = null !== (n = e.pigDomain.transform.scaleY[t]) && void 0 !== n ? n : 1;
a.x.set(c, null !== (i = f.x[t]) && void 0 !== i ? i : 0);
a.y.set(c, (null !== (r = f.y[t]) && void 0 !== r ? r : 0) + e.constCfg.PigTopOffsetY * s + u.offsetY);
var m = e.nodeInstanceMgrFunc(), _ = m.get(m.cfg.GameSpine);
if (!_) {
e.pigComboTipRuntimeFunc().removeTip(c);
e.pigComboTipDomain.destroy(c);
return null;
}
e.childOf.addChild(_, c);
return c;
};
};
var o, n, p, a, f, u, s;
r([ ae.bindAtom("G12_FCombo_PigComboTipDomain"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "pigComboTipDomain", void 0);
r([ ae.bindAtom("G12_FCombo_ComboTipCfg"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "comboTipCfg", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipRuntimeFunc"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "pigComboTipRuntimeFunc", void 0);
r([ ae.bindAtom("G12_FBase_PigDomain"), c("design:type", "function" == typeof (a = "undefined" != typeof ae && ae.AtomTypeInfer) ? a : Object) ], t.prototype, "pigDomain", void 0);
r([ ae.bindAtom("G12_FBase_ConstCfg"), c("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "constCfg", void 0);
r([ ae.bindAtom("G12_FBase_NodeInstanceMgrFunc"), c("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "nodeInstanceMgrFunc", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), c("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "childOf", void 0);
return r([ ae.atomClass("G12_FCombo_ShowPigComboTipFunc") ], t);
}(ae.FunctionAtom);
o.G12_FCombo_ShowPigComboTipFunc = p;
cc._RF.pop();
}, {} ],
G12_FCombo_UpdatePigComboTipLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7827dD97M9HPYtakYV9O0cm", "G12_FCombo_UpdatePigComboTipLogic");
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
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var p = e.length - 1; p >= 0; p--) (i = e[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
}, c = this && this.__metadata || function(e, t) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G12_FCombo_UpdatePigComboTipLogic = void 0;
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onExecute = function() {
var e, t, o, n, i, r, c, p, a, f, u, s = this.aGameUpdateLogic.runtime.dt;
if (!(s <= 0)) {
var m = this.pigComboTipDomain.collect();
if (0 !== m.length) for (var _ = this.pigComboTipDomain.params, d = this.pigComboTipDomain.transform, b = this.pigComboTipDomain.zIndexCmp, y = this.pigComboTipRuntimeFunc(), l = this.comboTipCfg, g = this.assetsCfg.comboTipWidths, C = this.mathMax(1e-4, l.durationSec), F = (null !== (e = this.getDesignSize().width) && void 0 !== e ? e : 0) / 2, h = this.mathMax(0, null !== (t = l.edgePadding) && void 0 !== t ? t : 0), v = m.length - 1; v >= 0; v--) {
var O = m[v];
if (this.pigComboTipDomain.has(O)) {
var P = (null !== (o = _.elapsedSec[O]) && void 0 !== o ? o : 0) + s;
_.elapsedSec.set(O, P);
var T = y.getPigEid(O);
if (T && this.pigDomain.has(T)) {
var G = null !== (n = this.pigDomain.transform.scaleY[T]) && void 0 !== n ? n : 1, R = (null !== (i = this.pigDomain.transform.y[T]) && void 0 !== i ? i : 0) + this.constCfg.PigTopOffsetY * G + l.offsetY, j = null !== (r = this.pigDomain.transform.x[T]) && void 0 !== r ? r : 0, A = null !== (c = _.triggerType[O]) && void 0 !== c ? c : 0, D = j;
if (F > 0) {
var w = null !== (a = null !== (p = g[A]) && void 0 !== p ? p : g[0]) && void 0 !== a ? a : 0, I = this.mathMax(0, w / 2), M = -F + I + h, L = F - I - h;
D = M <= L ? this.mathMin(L, this.mathMax(M, j)) : 0;
}
d.x.set(O, D);
d.y.set(O, R);
b.zIndex.set(O, -d.y[O] + (null !== (u = null !== (f = this.assetsCfg.comboTipHeights[A]) && void 0 !== f ? f : this.assetsCfg.comboTipHeights[0]) && void 0 !== u ? u : 0));
}
if (P >= C) {
y.removeTip(O);
this.pigComboTipDomain.destroy(O);
}
}
}
}
};
var o, n, p, a, f, u, s, m, _, d, b;
r([ ae.onChain, ae.bindAtom("G12_FBase_BGameUpdateSignal"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipDomain"), c("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "pigComboTipDomain", void 0);
r([ ae.bindAtom("G12_FCombo_PigComboTipRuntimeFunc"), c("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "pigComboTipRuntimeFunc", void 0);
r([ ae.bindAtom("G12_FCombo_ComboTipCfg"), c("design:type", "function" == typeof (a = "undefined" != typeof ae && ae.AtomTypeInfer) ? a : Object) ], t.prototype, "comboTipCfg", void 0);
r([ ae.bindAtom("G12_FCombo_AssetsCfg"), c("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "assetsCfg", void 0);
r([ ae.bindAtom("G12_FBase_PigDomain"), c("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "pigDomain", void 0);
r([ ae.bindAtom("G12_FBase_AGameUpdateLogic"), c("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "aGameUpdateLogic", void 0);
r([ ae.bindAtom("G12_FBase_ConstCfg"), c("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "constCfg", void 0);
r([ ae.bindAtom("G_FAtom_MathMax"), c("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "mathMax", void 0);
r([ ae.bindAtom("G_FAtom_MathMin"), c("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "mathMin", void 0);
r([ ae.bindAtom("G_FAtom_GetDesignSize"), c("design:type", "function" == typeof (b = "undefined" != typeof ae && ae.AtomTypeInfer) ? b : Object) ], t.prototype, "getDesignSize", void 0);
return r([ ae.atomClass("G12_FCombo_UpdatePigComboTipLogic") ], t);
}(ae.LogicAtom);
o.G12_FCombo_UpdatePigComboTipLogic = p;
cc._RF.pop();
}, {} ]
}, {}, [ "G12_FCombo_AeIndex", "G12_FCombo_Namespace", "G12_FCombo_PigComboTipCmp", "G12_FCombo_PigComboTipzIndexCmp", "G12_FCombo_AssetsCfg", "G12_FCombo_ComboTipCfg", "G12_FCombo_PigComboTipDomain", "G12_FCombo_GetTipAnimationByTriggerFunc", "G12_FCombo_PigComboTipRuntimeDataFunc", "G12_FCombo_PigComboTipRuntimeFunc", "G12_FCombo_ShowPigComboTipFunc", "G12_FCombo_PigComboTipAddComboFunc", "G12_FCombo_PigComboTipClearFunc", "G12_FCombo_PigComboTipGetComboFunc", "G12_FCombo_PigComboTipGetPigEidFunc", "G12_FCombo_PigComboTipRemoveTipFunc", "G12_FCombo_PigComboTipResetComboFunc", "G12_FCombo_PigComboTipSetPigEidFunc", "G12_FCombo_ComboTipAssetsLoad", "G12_FCombo_ClearRuntimeOnLoadGameLogic", "G12_FCombo_ResetComboOnPigGroupDestroyLogic", "G12_FCombo_ResetComboOnPigGroupListLogic", "G12_FCombo_ResetComboOnPigGroupOffLogic", "G12_FCombo_UpdatePigComboTipLogic", "G12_FCombo_PigComboTipRender", "G12_FCombo_FinishCollectFuncVariant" ]);
//# sourceMappingURL=index.js.map
