window.__require = function e(o, t, n) {
function i(a, u) {
if (!t[a]) {
if (!o[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!o[c]) {
var l = "function" == typeof __require && __require;
if (!u && l) return l(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var s = t[a] = {
exports: {}
};
o[a][0].call(s.exports, function(e) {
return i(o[a][1][e] || e);
}, s, s.exports, e, o, t, n);
}
return t[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
G3_FChangeSkin_AeIndex: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "0668anoTcZCHIusjYQaRKFC", "G3_FChangeSkin_AeIndex");
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin = void 0;
var n = e("./G3_FChangeSkin_Namespace");
Object.defineProperty(t, "G3_FChangeSkin", {
enumerable: !0,
get: function() {
return n.G3_FChangeSkin;
}
});
cc._RF.pop();
}, {
"./G3_FChangeSkin_Namespace": "G3_FChangeSkin_Namespace"
} ],
G3_FChangeSkin_AssetReplaceConfig: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "d0ee0ZGVhFBI4AWLRP5wgy8", "G3_FChangeSkin_AssetReplaceConfig");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_AssetReplaceConfig = void 0;
var a = e("../../G3_FChangeSkin_Namespace"), u = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineConfig = function() {
var e = this.url(a.G3_FChangeSkin.FeatureName.Name);
return {
BntLoading: e("res/textures/bnt_loading"),
BtnBlue: e("res/textures/btn_blue"),
BtnWhite: e("res/textures/btn_white"),
CommonBorder: e("res/textures/common_border"),
PanelTop: e("res/textures/panel_top"),
PanelLogo: e("res/textures/panel_logo"),
IconHidden: e("res/textures/icon_idden")
};
};
return r([ ae.atomClass("G3_FChangeSkin_AssetReplaceConfig") ], o);
}(ae.ConfigAtom);
t.G3_FChangeSkin_AssetReplaceConfig = u;
cc._RF.pop();
}, {
"../../G3_FChangeSkin_Namespace": "G3_FChangeSkin_Namespace"
} ],
G3_FChangeSkin_BaseAssetReplaceGenLogic: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "2d9adWGeR9IZYdQV5GWk6bE", "G3_FChangeSkin_BaseAssetReplaceGenLogic");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
}, a = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_BaseAssetReplaceGenLogic = void 0;
var u = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineRuntimeData = function() {
return {};
};
o.prototype.onExecute = function() {
this.asset.BntLoading = this.replaceConfig.BntLoading;
this.asset.BtnBlue = this.replaceConfig.BtnBlue;
this.asset.BtnWhite = this.replaceConfig.BtnWhite;
this.asset.CommonBorder = this.replaceConfig.CommonBorder;
this.asset.PanelTop = this.replaceConfig.PanelTop;
this.asset.IconHidden = this.replaceConfig.IconHidden;
};
var t, n;
r([ ae.onChain, ae.bindAtom("G3_FBase_Asset"), a("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "asset", void 0);
r([ ae.bindAtom("G3_FChangeSkin_AssetReplaceConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], o.prototype, "replaceConfig", void 0);
return r([ ae.atomClass("G3_FChangeSkin_BaseAssetReplaceGenLogic") ], o);
}(ae.LogicAtom);
t.G3_FChangeSkin_BaseAssetReplaceGenLogic = u;
cc._RF.pop();
}, {} ],
G3_FChangeSkin_BaseGetSchemeValueFunction: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "2303bKOVmROL6rRyWdqkgsn", "G3_FChangeSkin_BaseGetSchemeValueFunction");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
}, a = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_BaseGetSchemeValueFunction = void 0;
var u = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineFunction = function() {
var e = this;
return function(o, t) {
var n = (e.skinConfig.schemes[e.skinInitLogic.storage.currentScheme] || e.skinConfig.schemes.default)[o];
if (void 0 === n) {
var i = e.skinInitLogic.storage.currentScheme;
console.warn('%c[换肤] 方案 "' + i + '" 未配置 key "' + String(o) + '"，请完善 G3_FChangeSkin_BaseSkinConfig', "color: red");
return t;
}
return n;
};
};
var t, n, u;
r([ ae.variantOf, ae.bindAtom("G3_FBase_GetSchemeValueFunction"), a("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "source", void 0);
r([ ae.bindAtom("G3_FChangeSkin_BaseSkinConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], o.prototype, "skinConfig", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], o.prototype, "skinInitLogic", void 0);
return r([ ae.atomClass("G3_FChangeSkin_BaseGetSchemeValueFunction") ], o);
}(ae.VariantAtom);
t.G3_FChangeSkin_BaseGetSchemeValueFunction = u;
cc._RF.pop();
}, {} ],
G3_FChangeSkin_BaseSkinConfig: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "9bd92p751hK8YTe59DUE2bN", "G3_FChangeSkin_BaseSkinConfig");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
}, a = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_BaseSkinConfig = void 0;
var u = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineConfig = function() {
var e, o, t, n, i, r, a;
return {
schemes: {
default: {
name: "浅蓝色",
uiHeartBgActiveColor: 14478074,
uiHeartActiveColor: 16729693,
uiHeartInactiveColor: 8888273,
uiRayColor: 4292087,
uiRayMeshColor: 15265276,
uiBackColor: 12833530,
uiResetColor: 12833530,
uiBottomColor: 4292602,
uiTopColor: 4292602,
uiTopBaselineColor: 4292602,
uiBackgroundColor: 14478074,
uiLevelColor: 16777215,
uiRedSquareGlowColor: 16001074,
uiCongratulationColor: 3777764,
uiCongratulationPattonColor: 15267324,
uiCongratulationOutline: 3777764,
uiButtonLoadingBg: 16777215,
uiButtonLoadedBg: 4043769,
uiButtonLoadingContentColor: 10330803,
uiButtonLoadedContentColor: 16777215,
arrowMoveColor: 4043769,
arrowStopColor: 16665438,
arrowIdleColor: 4289224,
arrowCollidedColor: 12663890,
uiEdgeButtonBgColor: 4292087,
uiEdgeButtonTextColor: 15265276,
rayMoveColor: 12049399,
rayStopColor: 15565973,
rayIdleColor: 12049399,
uiGuideMoveColor: 12833530,
uiGuideTextColor: 16777215,
degreeColor: (e = {}, e.Hard = 10403839, e["Super Hard"] = 13595647, e.Nightmare = 14901908, 
e),
pointColor: 4043769,
uiResetPanelColor: 7181563,
uiResetTitleColor: 16777215,
uiResetInfoPanelColor: 16777215,
uiResetDescColor: 7831459,
uiResetBtnColor: 16750915,
uiResetBtnTextColor: 16777215,
uiCloseBtnColor: 16777215,
uiCloseBtnTextColor: 9672103,
uiFailPanelColor: 7181563,
uiFailTitleColor: 16777215,
uiFailInfoPanelColor: 16777215,
uiFailDescColor: 7831459,
uiFailHeartColor: 16729453,
uiPlayBtnColor: 16750915,
uiPlayBtnADColor: 16777215,
uiLoadingBtnColor: 15330290,
uiLoadingBtnADColor: 4870775,
uiFreeBtnColor: 16750915,
uiFreeBtnTextColor: 16777215,
uiRestartBtnColor: 16777215,
uiRestartBtnTextColor: 9672103,
passSpine: this.asset.PassSpine2
},
orange: {
name: "橙色",
uiHeartBgActiveColor: 16500903,
uiHeartActiveColor: 16729693,
uiHeartInactiveColor: 13272688,
uiRayColor: 13725004,
uiRayMeshColor: 16767436,
uiBackColor: 16436155,
uiResetColor: 16436155,
uiBottomColor: 13725004,
uiTopColor: 13725004,
uiTopBaselineColor: 13725004,
uiBackgroundColor: 16509911,
uiLevelColor: 16777215,
uiRedSquareGlowColor: 16001074,
uiCongratulationColor: 13391661,
uiCongratulationPattonColor: 15267324,
uiCongratulationOutline: 13391661,
uiButtonLoadingBg: 16436155,
uiButtonLoadedBg: 13725004,
uiButtonLoadingContentColor: 13725004,
uiButtonLoadedContentColor: 16777215,
arrowMoveColor: 16759347,
arrowStopColor: 11874558,
arrowIdleColor: 14377816,
arrowCollidedColor: 9380796,
uiEdgeButtonBgColor: 13725004,
uiEdgeButtonTextColor: 16767436,
rayMoveColor: 15054494,
rayStopColor: 12806123,
rayIdleColor: 15054494,
uiGuideMoveColor: 14262413,
uiGuideTextColor: 16777215,
degreeColor: (o = {}, o.Hard = 8567545, o["Super Hard"] = 13993727, o.Nightmare = 16743855, 
o),
pointColor: 16411431,
uiResetPanelColor: 15103827,
uiResetTitleColor: 16777215,
uiResetInfoPanelColor: 16777215,
uiResetDescColor: 10055007,
uiResetBtnColor: 7196758,
uiResetBtnTextColor: 16777215,
uiCloseBtnColor: 16777215,
uiCloseBtnTextColor: 9672103,
uiFailPanelColor: 15103827,
uiFailTitleColor: 16777215,
uiFailInfoPanelColor: 16777215,
uiFailDescColor: 10055007,
uiFailHeartColor: 16729453,
uiPlayBtnColor: 7196758,
uiPlayBtnADColor: 16777215,
uiLoadingBtnColor: 15330290,
uiLoadingBtnADColor: 4870775,
uiFreeBtnColor: 7196758,
uiFreeBtnTextColor: 16777215,
uiRestartBtnColor: 16777215,
uiRestartBtnTextColor: 9672103,
passSpine: this.asset.PassSpine2
},
pink: {
name: "粉色",
uiHeartBgActiveColor: 16439269,
uiHeartActiveColor: 16729693,
uiHeartInactiveColor: 14328747,
uiRayColor: 16023724,
uiRayMeshColor: 16639214,
uiBackColor: 16766181,
uiResetColor: 16766181,
uiBottomColor: 15827631,
uiTopColor: 15827631,
uiTopBaselineColor: 15827631,
uiBackgroundColor: 16439269,
uiLevelColor: 16777215,
uiRedSquareGlowColor: 16001074,
uiCongratulationColor: 13981065,
uiCongratulationPattonColor: 16773109,
uiCongratulationOutline: 13981065,
uiButtonLoadingBg: 16777215,
uiButtonLoadedBg: 16349099,
uiButtonLoadingContentColor: 10330803,
uiButtonLoadedContentColor: 16777215,
arrowMoveColor: 16349099,
arrowStopColor: 12212479,
arrowIdleColor: 15101587,
arrowCollidedColor: 7617729,
uiEdgeButtonBgColor: 16023724,
uiEdgeButtonTextColor: 16639214,
rayMoveColor: 16105685,
rayStopColor: 11568365,
rayIdleColor: 16105685,
uiGuideMoveColor: 16297419,
uiGuideTextColor: 16777215,
degreeColor: (t = {}, t.Hard = 8504305, t["Super Hard"] = 11361019, t.Nightmare = 14242182, 
t),
pointColor: 16349099,
uiResetPanelColor: 16488640,
uiResetTitleColor: 16777215,
uiResetInfoPanelColor: 16777215,
uiResetDescColor: 7831459,
uiResetBtnColor: 16431728,
uiResetBtnTextColor: 16777215,
uiCloseBtnColor: 16777215,
uiCloseBtnTextColor: 9672103,
uiFailPanelColor: 16488640,
uiFailTitleColor: 16777215,
uiFailInfoPanelColor: 16777215,
uiFailDescColor: 7831459,
uiFailHeartColor: 16729453,
uiPlayBtnColor: 16431728,
uiPlayBtnADColor: 16777215,
uiLoadingBtnColor: 15330290,
uiLoadingBtnADColor: 4870775,
uiFreeBtnColor: 16431728,
uiFreeBtnTextColor: 16777215,
uiRestartBtnColor: 16777215,
uiRestartBtnTextColor: 9672103,
passSpine: this.asset.PassSpine2
},
blue2: {
name: "渐变蓝",
uiHeartBgActiveColor: 13822975,
uiHeartActiveColor: 16729693,
uiHeartInactiveColor: 10666459,
uiRayColor: 5025274,
uiRayMeshColor: 14482428,
uiBackColor: 12446460,
uiResetColor: 12446460,
uiBottomColor: 7459323,
uiTopColor: 7459323,
uiTopBaselineColor: 7459323,
uiBackgroundColor: [ 9368045, 6144252, 4828153 ],
uiLevelColor: 16777215,
uiRedSquareGlowColor: 16001074,
uiCongratulationColor: 3048650,
uiCongratulationPattonColor: 15596287,
uiCongratulationOutline: 3048650,
uiButtonLoadingBg: 16777215,
uiButtonLoadedBg: 15902076,
uiButtonLoadingContentColor: 10330803,
uiButtonLoadedContentColor: 16777215,
arrowMoveColor: 8610038,
arrowStopColor: 16674943,
arrowIdleColor: 16777215,
arrowCollidedColor: 12663890,
uiEdgeButtonBgColor: 11399407,
uiEdgeButtonTextColor: 3904991,
rayMoveColor: 5610221,
rayStopColor: 16618661,
rayIdleColor: 5610221,
uiGuideMoveColor: 3513842,
uiGuideTextColor: 16777215,
degreeColor: (n = {}, n.Hard = 5925108, n["Super Hard"] = 10838501, n.Nightmare = 14970503, 
n),
pointColor: 16777215,
uiResetPanelColor: 6473200,
uiResetTitleColor: 16777215,
uiResetInfoPanelColor: 16777215,
uiResetDescColor: 7831459,
uiResetBtnColor: 16426101,
uiResetBtnTextColor: 16777215,
uiCloseBtnColor: 16777215,
uiCloseBtnTextColor: 9672103,
uiFailPanelColor: 6473200,
uiFailTitleColor: 16777215,
uiFailInfoPanelColor: 16777215,
uiFailDescColor: 7831459,
uiFailHeartColor: 16729453,
uiPlayBtnColor: 16426101,
uiPlayBtnADColor: 16777215,
uiLoadingBtnColor: 15330290,
uiLoadingBtnADColor: 4870775,
uiFreeBtnColor: 16426101,
uiFreeBtnTextColor: 16777215,
uiRestartBtnColor: 16777215,
uiRestartBtnTextColor: 9672103,
passSpine: this.asset.PassSpine2
},
green: {
name: "浅绿色",
uiHeartBgActiveColor: 14217964,
uiHeartActiveColor: 16729693,
uiHeartInactiveColor: 10402222,
uiRayColor: 7320499,
uiRayMeshColor: 15793404,
uiBackColor: 14281141,
uiResetColor: 14281141,
uiBottomColor: 7320499,
uiTopColor: 7320499,
uiTopBaselineColor: 7320499,
uiBackgroundColor: 14940917,
uiLevelColor: 16777215,
uiRedSquareGlowColor: 16001074,
uiCongratulationColor: 5345167,
uiCongratulationPattonColor: 16121853,
uiCongratulationOutline: 5345167,
uiButtonLoadingBg: 16777215,
uiButtonLoadedBg: 9873013,
uiButtonLoadingContentColor: 10330803,
uiButtonLoadedContentColor: 16777215,
arrowMoveColor: 9873013,
arrowStopColor: 16665438,
arrowIdleColor: 3768207,
arrowCollidedColor: 12659794,
uiEdgeButtonBgColor: 7320499,
uiEdgeButtonTextColor: 15793404,
rayMoveColor: 13361618,
rayStopColor: 15565973,
rayIdleColor: 13361618,
uiGuideMoveColor: 9422791,
uiGuideTextColor: 16777215,
degreeColor: (i = {}, i.Hard = 3311342, i["Super Hard"] = 11361019, i.Nightmare = 14242182, 
i),
pointColor: 9873013,
uiResetPanelColor: 8307394,
uiResetTitleColor: 16777215,
uiResetInfoPanelColor: 16777215,
uiResetDescColor: 7831459,
uiResetBtnColor: 16428825,
uiResetBtnTextColor: 16777215,
uiCloseBtnColor: 16777215,
uiCloseBtnTextColor: 9672103,
uiFailPanelColor: 8307394,
uiFailTitleColor: 16777215,
uiFailInfoPanelColor: 16777215,
uiFailDescColor: 7831459,
uiFailHeartColor: 16729453,
uiPlayBtnColor: 16428825,
uiPlayBtnADColor: 16777215,
uiLoadingBtnColor: 15330290,
uiLoadingBtnADColor: 4870775,
uiFreeBtnColor: 16428825,
uiFreeBtnTextColor: 16777215,
uiRestartBtnColor: 16777215,
uiRestartBtnTextColor: 9672103,
passSpine: this.asset.PassSpine2
},
white: {
name: "蓝白色",
uiHeartBgActiveColor: 16777215,
uiHeartActiveColor: 16729693,
uiHeartInactiveColor: 12764627,
uiRayColor: 13620727,
uiRayMeshColor: 5002361,
uiBackColor: 11844300,
uiResetColor: 11844300,
uiBottomColor: 15462135,
uiTopColor: 15462135,
uiTopBaselineColor: 15462135,
uiBackgroundColor: 16777215,
uiLevelColor: 6318840,
uiRedSquareGlowColor: 16001074,
uiCongratulationColor: 8227507,
uiCongratulationPattonColor: 15594239,
uiCongratulationOutline: 8227507,
uiButtonLoadingBg: 15462135,
uiButtonLoadedBg: 6058233,
uiButtonLoadingContentColor: 10330803,
uiButtonLoadedContentColor: 16777215,
arrowMoveColor: 7442687,
arrowStopColor: 16665438,
arrowIdleColor: 5066591,
arrowCollidedColor: 12663890,
uiEdgeButtonBgColor: 13620727,
uiEdgeButtonTextColor: 5002361,
rayMoveColor: 15001598,
rayStopColor: 15565973,
rayIdleColor: 15001598,
uiGuideMoveColor: 12963040,
uiGuideTextColor: 16777215,
degreeColor: (r = {}, r.Hard = 6516216, r["Super Hard"] = 13595647, r.Nightmare = 14901908, 
r),
pointColor: 6058233,
uiResetPanelColor: 15462135,
uiResetTitleColor: 5792166,
uiResetInfoPanelColor: 16777215,
uiResetDescColor: 7831459,
uiResetBtnColor: 5993215,
uiResetBtnTextColor: 16777215,
uiCloseBtnColor: 16777215,
uiCloseBtnTextColor: 9672103,
uiFailPanelColor: 15462135,
uiFailTitleColor: 5792166,
uiFailInfoPanelColor: 16777215,
uiFailDescColor: 7831459,
uiFailHeartColor: 16729453,
uiPlayBtnColor: 5993215,
uiPlayBtnADColor: 16777215,
uiLoadingBtnColor: 15330290,
uiLoadingBtnADColor: 4870775,
uiFreeBtnColor: 5993215,
uiFreeBtnTextColor: 16777215,
uiRestartBtnColor: 16777215,
uiRestartBtnTextColor: 4936567,
passSpine: this.asset.PassSpine1
},
purple: {
name: "渐变紫",
uiHeartBgActiveColor: 13944060,
uiHeartActiveColor: 16729693,
uiHeartInactiveColor: 9802188,
uiRayColor: 9077743,
uiRayMeshColor: 15855871,
uiBackColor: 13613055,
uiResetColor: 13613055,
uiBottomColor: 7761638,
uiTopColor: 7761638,
uiTopBaselineColor: 7761638,
uiBackgroundColor: [ 13995443, 10782959, 10126591 ],
uiLevelColor: 16777215,
uiRedSquareGlowColor: 16001074,
uiCongratulationColor: 6577110,
uiCongratulationPattonColor: 16381951,
uiCongratulationOutline: 6577110,
uiButtonLoadingBg: 16777215,
uiButtonLoadedBg: 16349133,
uiButtonLoadingContentColor: 10330803,
uiButtonLoadedContentColor: 16777215,
arrowMoveColor: 10283519,
arrowStopColor: 16665438,
arrowIdleColor: 16777215,
arrowCollidedColor: 12663890,
rayMoveColor: 11311869,
rayStopColor: 15565973,
rayIdleColor: 11311869,
uiEdgeButtonBgColor: 7761638,
uiEdgeButtonTextColor: 16777215,
uiGuideMoveColor: 9011957,
uiGuideTextColor: 16777215,
degreeColor: (a = {}, a.Hard = 8309503, a["Super Hard"] = 14843391, a.Nightmare = 16678039, 
a),
pointColor: 16777215,
uiResetPanelColor: 9077746,
uiResetTitleColor: 16777215,
uiResetInfoPanelColor: 16777215,
uiResetDescColor: 7831459,
uiResetBtnColor: 16749719,
uiResetBtnTextColor: 16777215,
uiCloseBtnColor: 16777215,
uiCloseBtnTextColor: 9672103,
uiFailPanelColor: 9077746,
uiFailTitleColor: 16777215,
uiFailInfoPanelColor: 16777215,
uiFailDescColor: 7831459,
uiFailHeartColor: 16729453,
uiPlayBtnColor: 16749719,
uiPlayBtnADColor: 16777215,
uiLoadingBtnColor: 15330290,
uiLoadingBtnADColor: 4870775,
uiFreeBtnColor: 16749719,
uiFreeBtnTextColor: 16777215,
uiRestartBtnColor: 16777215,
uiRestartBtnTextColor: 9672103,
passSpine: this.asset.PassSpine2
}
}
};
};
var t;
r([ ae.bindAtom("G3_FBase_Asset"), a("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "asset", void 0);
return r([ ae.atomClass("G3_FChangeSkin_BaseSkinConfig") ], o);
}(ae.ConfigAtom);
t.G3_FChangeSkin_BaseSkinConfig = u;
cc._RF.pop();
}, {} ],
G3_FChangeSkin_CombatBackgroundRenderGenLogic: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "67a21JNRjtPb54QuU4LwcJW", "G3_FChangeSkin_CombatBackgroundRenderGenLogic");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
}, a = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_CombatBackgroundRenderGenLogic = void 0;
var u = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineRuntimeData = function() {
return {};
};
o.prototype.onExecute = function() {
var e = this;
this.combatBackgroundRender.Background.draw = [ function() {
var o, t = e.windowSizeLogic.runtime.background.width, n = e.windowSizeLogic.runtime.background.height, i = e.getSchemeValueFunction("uiBackgroundColor", 16777215), r = Array.isArray(i) ? i : [ i ];
if (r.length <= 1) {
var a = null !== (o = r[0]) && void 0 !== o ? o : 16777215;
return [ [ ae.GraphicsCmd.FillColor, a ], [ ae.GraphicsCmd.Rect, -t / 2, -n / 2, t, n ], [ ae.GraphicsCmd.Fill ] ];
}
for (var u = [ [ ae.GraphicsCmd.Clear ] ], c = -n / 2, l = r.length - 1, s = 0; s < l; s++) for (var f = r[s], p = r[s + 1], C = f >> 16 & 255, d = f >> 8 & 255, g = 255 & f, h = p >> 16 & 255, _ = p >> 8 & 255, y = 255 & p, m = c + s / l * n, S = (c + (s + 1) / l * n - m) / 64, F = 0; F < 64; F++) {
var v = (F + .5) / 64, k = (a = Math.round(C + (h - C) * v) << 16 | Math.round(d + (_ - d) * v) << 8 | Math.round(g + (y - g) * v), 
m + F * S);
u.push([ ae.GraphicsCmd.FillColor, a ], [ ae.GraphicsCmd.Rect, -t / 2, k, t, S ], [ ae.GraphicsCmd.Fill ]);
}
return u;
}, [ this.windowSizeLogic, "runtime", "background", "width" ], [ this.windowSizeLogic, "runtime", "background", "height" ], [ this.skinInitLogic, "storage", "currentScheme" ] ];
};
var t, n, u, c;
r([ ae.onChain, ae.bindAtom("G3_FBase_CombatBackgroundRender"), a("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "combatBackgroundRender", void 0);
r([ ae.bindAtom("G3_FBase_GetSchemeValueFunction"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], o.prototype, "getSchemeValueFunction", void 0);
r([ ae.bindAtom("G3_FBase_WindowSizeLogic"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], o.prototype, "windowSizeLogic", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], o.prototype, "skinInitLogic", void 0);
return r([ ae.atomClass("G3_FChangeSkin_CombatBackgroundRenderGenLogic") ], o);
}(ae.LogicAtom);
t.G3_FChangeSkin_CombatBackgroundRenderGenLogic = u;
cc._RF.pop();
}, {} ],
G3_FChangeSkin_CombatHintAdConfig: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "bc720U014ZJkLfWasUNpTkR", "G3_FChangeSkin_CombatHintAdConfig");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_CombatHintAdConfig = void 0;
var a = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineConfig = function() {
return {
visibleY: 192
};
};
return r([ ae.atomClass("G3_FChangeSkin_CombatHintAdConfig") ], o);
}(ae.ConfigAtom);
t.G3_FChangeSkin_CombatHintAdConfig = a;
cc._RF.pop();
}, {} ],
G3_FChangeSkin_CombatHintAdLogicVariant: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "8faecMh2JJMdoF0LvBjzSdg", "G3_FChangeSkin_CombatHintAdLogicVariant");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
}, a = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_CombatHintAdLogicVariant = void 0;
var u = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineFunction = function() {
var e = this;
return function(o, t) {
if (e.combatInitLogic.storage.level <= e.rewardAdConfig.hintGameLevel || e.combatInitLogic.storage.hintCount >= e.rewardAdConfig.hintMaxCount) t.runtime.hintAdY = 0; else {
var n = e.worldMeta.worldTime;
if (t.runtime.lastTouchEndTime <= 0) {
t.runtime.lastTouchEndTime = n;
t.runtime.hideTime = n - 1;
}
if (n - t.runtime.lastTouchEndTime > 10) {
if (0 === t.runtime.showTime) {
t.runtime.showTime = n;
t.runtime.hideTime = 0;
}
} else if (0 === t.runtime.hideTime) {
t.runtime.hideTime = n;
t.runtime.showTime = 0;
}
var i = e.hintAdConfig.visibleY;
if (t.runtime.showTime > 0) {
var r = e.mathMin((n - t.runtime.showTime) / 1, 1);
t.runtime.hintAdY = 0 + (i - 0) * r;
} else if (t.runtime.hideTime > 0) {
r = e.mathMin((n - t.runtime.hideTime) / 1, 1);
t.runtime.hintAdY = i + (0 - i) * r;
} else t.runtime.hintAdY = 0;
}
};
};
var t, n, u, c, l, s;
r([ ae.variantOf, ae.bindAtom("G3_FBase_CombatHintAdLogic"), a("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "source", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], o.prototype, "worldMeta", void 0);
r([ ae.bindAtom("G_FAtom_MathMin"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], o.prototype, "mathMin", void 0);
r([ ae.bindAtom("G3_FBase_RewardAdConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], o.prototype, "rewardAdConfig", void 0);
r([ ae.bindAtom("G3_FBase_CombatInitLogic"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], o.prototype, "combatInitLogic", void 0);
r([ ae.bindAtom("G3_FChangeSkin_CombatHintAdConfig"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], o.prototype, "hintAdConfig", void 0);
return r([ ae.atomClass("G3_FChangeSkin_CombatHintAdLogicVariant") ], o);
}(ae.VariantAtom);
t.G3_FChangeSkin_CombatHintAdLogicVariant = u;
cc._RF.pop();
}, {} ],
G3_FChangeSkin_CombatUiRenderGenLogic: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "03839YKyMFMW5kfkN2XdypO", "G3_FChangeSkin_CombatUiRenderGenLogic");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
}, a = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_CombatUiRenderGenLogic = void 0;
var u = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineRuntimeData = function() {
return {};
};
o.prototype.onExecute = function() {
var e = this.combatUiRender;
e.TopBaseline.active = !1;
e.HintAd.widget.right = 0;
};
var t;
r([ ae.onChain, ae.bindAtom("G3_FBase_CombatUiRender"), a("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "combatUiRender", void 0);
return r([ ae.atomClass("G3_FChangeSkin_CombatUiRenderGenLogic") ], o);
}(ae.LogicAtom);
t.G3_FChangeSkin_CombatUiRenderGenLogic = u;
cc._RF.pop();
}, {} ],
G3_FChangeSkin_ExitChannelBeforeSkinSwitchOrder: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "06128AgVoZPaq7ZdZO4MI+f", "G3_FChangeSkin_ExitChannelBeforeSkinSwitchOrder");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
}, a = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_ExitChannelBeforeSkinSwitchOrder = void 0;
var u = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
var t, n;
r([ ae.orderBefore, ae.bindAtom("G3_FHome_ExitChannelLogic"), a("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "exitChannelLogic", void 0);
r([ ae.orderAfter, ae.bindAtom("G3_FChangeSkin_SkinExitSwitchLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], o.prototype, "skinSwitchLogic", void 0);
return r([ ae.atomClass("G3_FChangeSkin_ExitChannelBeforeSkinSwitchOrder") ], o);
}(ae.OrderAtom);
t.G3_FChangeSkin_ExitChannelBeforeSkinSwitchOrder = u;
cc._RF.pop();
}, {} ],
G3_FChangeSkin_FirstUiRenderGenLogic: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "fa1a4xsha5I5rthckAJygiQ", "G3_FChangeSkin_FirstUiRenderGenLogic");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
}, a = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_FirstUiRenderGenLogic = void 0;
var u = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineRuntimeData = function() {
return {};
};
o.prototype.onExecute = function() {
var e = this;
this.firstUiRender.FirstUi.draw = [ function() {
var o, t = e.windowSizeLogic.runtime.screen.width, n = e.windowSizeLogic.runtime.screen.height, i = e.getSchemeValueFunction("uiHomeBgColor", 16777215), r = Array.isArray(i) ? i : [ i ];
if (r.length <= 1) {
var a = null !== (o = r[0]) && void 0 !== o ? o : 16777215;
return [ [ ae.GraphicsCmd.FillColor, a ], [ ae.GraphicsCmd.Rect, -t / 2, -n / 2, t, n ], [ ae.GraphicsCmd.Fill ] ];
}
for (var u = [ [ ae.GraphicsCmd.Clear ] ], c = -n / 2, l = r.length - 1, s = 0; s < l; s++) for (var f = r[s], p = r[s + 1], C = f >> 16 & 255, d = f >> 8 & 255, g = 255 & f, h = p >> 16 & 255, _ = p >> 8 & 255, y = 255 & p, m = c + s / l * n, S = (c + (s + 1) / l * n - m) / 64, F = 0; F < 64; F++) {
var v = (F + .5) / 64, k = (a = Math.round(C + (h - C) * v) << 16 | Math.round(d + (_ - d) * v) << 8 | Math.round(g + (y - g) * v), 
m + F * S);
u.push([ ae.GraphicsCmd.FillColor, a ], [ ae.GraphicsCmd.Rect, -t / 2, k, t, S ], [ ae.GraphicsCmd.Fill ]);
}
return u;
}, [ this.windowSizeLogic, "runtime", "screen", "width" ], [ this.windowSizeLogic, "runtime", "screen", "height" ], [ this.skinInitLogic, "storage", "currentScheme" ] ];
};
var t, n, u, c;
r([ ae.onChain, ae.bindAtom("G3_FHome_FirstUiRender"), a("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "firstUiRender", void 0);
r([ ae.bindAtom("G3_FHome_GetSchemeValueFunction"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], o.prototype, "getSchemeValueFunction", void 0);
r([ ae.bindAtom("G3_FHome_WindowSizeLogic"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], o.prototype, "windowSizeLogic", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], o.prototype, "skinInitLogic", void 0);
return r([ ae.atomClass("G3_FChangeSkin_FirstUiRenderGenLogic") ], o);
}(ae.LogicAtom);
t.G3_FChangeSkin_FirstUiRenderGenLogic = u;
cc._RF.pop();
}, {} ],
G3_FChangeSkin_HomeAssetReplaceGenLogic: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "b4195kuhFhLUY5RwjimP4Qr", "G3_FChangeSkin_HomeAssetReplaceGenLogic");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
}, a = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_HomeAssetReplaceGenLogic = void 0;
var u = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineRuntimeData = function() {
return {};
};
o.prototype.onExecute = function() {
this.asset.PanelLogo = this.replaceConfig.PanelLogo;
};
var t, n;
r([ ae.onChain, ae.bindAtom("G3_FHome_Asset"), a("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "asset", void 0);
r([ ae.bindAtom("G3_FChangeSkin_AssetReplaceConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], o.prototype, "replaceConfig", void 0);
return r([ ae.atomClass("G3_FChangeSkin_HomeAssetReplaceGenLogic") ], o);
}(ae.LogicAtom);
t.G3_FChangeSkin_HomeAssetReplaceGenLogic = u;
cc._RF.pop();
}, {} ],
G3_FChangeSkin_HomeGetSchemeValueFunction: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "79892OpFKFHT5uN6LFrRM+P", "G3_FChangeSkin_HomeGetSchemeValueFunction");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
}, a = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_HomeGetSchemeValueFunction = void 0;
var u = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineFunction = function() {
var e = this;
return function(o, t) {
var n = (e.skinConfig.schemes[e.skinInitLogic.storage.currentScheme] || e.skinConfig.schemes.default)[o];
if (void 0 === n) {
var i = e.skinInitLogic.storage.currentScheme;
console.warn('%c[换肤] 方案 "' + i + '" 未配置 key "' + String(o) + '"，请完善 G3_FChangeSkin_HomeSkinConfig', "color: red");
return t;
}
return n;
};
};
var t, n, u;
r([ ae.variantOf, ae.bindAtom("G3_FHome_GetSchemeValueFunction"), a("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "source", void 0);
r([ ae.bindAtom("G3_FChangeSkin_HomeSkinConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], o.prototype, "skinConfig", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], o.prototype, "skinInitLogic", void 0);
return r([ ae.atomClass("G3_FChangeSkin_HomeGetSchemeValueFunction") ], o);
}(ae.VariantAtom);
t.G3_FChangeSkin_HomeGetSchemeValueFunction = u;
cc._RF.pop();
}, {} ],
G3_FChangeSkin_HomeSkinConfig: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "9a9fevn/sFKf7T2sQfpTxP/", "G3_FChangeSkin_HomeSkinConfig");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_HomeSkinConfig = void 0;
var a = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineConfig = function() {
return {
currentScheme: "default",
schemes: {
default: {
name: "浅蓝色",
uiHomeBgColor: 16777215,
uiBackColor: 12833530,
uiPanelLogoColor: 4292602,
uiArrowsColor: 5396643,
uiLevelColor: 6189566,
uiEnterColor: 7050491,
uiPlayTextColor: 16777215,
uiBottomColor: 5861091,
uiBtnGrayColor: 4151736,
uiEmptyColor: 16777215,
uiLockColor: 12833023,
uiChallengeColor: 12833023,
uiIconHomeColor: 12833023,
uiSettingsColor: 12833023
},
orange: {
name: "橙色·",
uiHomeBgColor: 16509911,
uiBackColor: 16436155,
uiPanelLogoColor: 15103827,
uiArrowsColor: 9395007,
uiLevelColor: 15885131,
uiEnterColor: 7196758,
uiPlayTextColor: 16777215,
uiBottomColor: 5861091,
uiBtnGrayColor: 4151736,
uiEmptyColor: 16777215,
uiLockColor: 12833023,
uiChallengeColor: 12833023,
uiIconHomeColor: 12833023,
uiSettingsColor: 12833023
},
pink: {
name: "粉色",
uiHomeBgColor: 16439269,
uiBackColor: 16766181,
uiPanelLogoColor: 15827631,
uiArrowsColor: 13131933,
uiLevelColor: 13854610,
uiEnterColor: 16431728,
uiPlayTextColor: 16777215,
uiBottomColor: 5861091,
uiBtnGrayColor: 4151736,
uiEmptyColor: 16777215,
uiLockColor: 12833023,
uiChallengeColor: 12833023,
uiIconHomeColor: 12833023,
uiSettingsColor: 12833023
},
blue2: {
name: "渐变蓝",
uiHomeBgColor: [ 9368045, 6144252, 4828153 ],
uiBackColor: 12446460,
uiPanelLogoColor: 7459323,
uiArrowsColor: 16777215,
uiLevelColor: 16777215,
uiEnterColor: 16426101,
uiPlayTextColor: 16777215,
uiBottomColor: 5861091,
uiBtnGrayColor: 4151736,
uiEmptyColor: 16777215,
uiLockColor: 12833023,
uiChallengeColor: 12833023,
uiIconHomeColor: 12833023,
uiSettingsColor: 12833023
},
green: {
name: "浅绿色",
uiHomeBgColor: 14940917,
uiBackColor: 14281141,
uiPanelLogoColor: 7320499,
uiArrowsColor: 5085867,
uiLevelColor: 14907183,
uiEnterColor: 16428825,
uiPlayTextColor: 16777215,
uiBottomColor: 5861091,
uiBtnGrayColor: 4151736,
uiEmptyColor: 16777215,
uiLockColor: 12833023,
uiChallengeColor: 12833023,
uiIconHomeColor: 12833023,
uiSettingsColor: 12833023
},
white: {
name: "蓝白色",
uiHomeBgColor: 16777215,
uiBackColor: 11844300,
uiPanelLogoColor: 15462135,
uiArrowsColor: 5856896,
uiLevelColor: 6318840,
uiEnterColor: 5993215,
uiPlayTextColor: 16777215,
uiBottomColor: 5861091,
uiBtnGrayColor: 4151736,
uiEmptyColor: 16777215,
uiLockColor: 12833023,
uiChallengeColor: 12833023,
uiIconHomeColor: 12833023,
uiSettingsColor: 12833023
},
purple: {
name: "渐变紫",
uiHomeBgColor: [ 13995443, 10782959, 10126591 ],
uiBackColor: 13613055,
uiPanelLogoColor: 7761638,
uiArrowsColor: 16777215,
uiLevelColor: 16777215,
uiEnterColor: 16749719,
uiPlayTextColor: 16777215,
uiBottomColor: 5861091,
uiBtnGrayColor: 4151736,
uiEmptyColor: 16777215,
uiLockColor: 12833023,
uiChallengeColor: 12833023,
uiIconHomeColor: 12833023,
uiSettingsColor: 12833023
}
}
};
};
return r([ ae.atomClass("G3_FChangeSkin_HomeSkinConfig") ], o);
}(ae.ConfigAtom);
t.G3_FChangeSkin_HomeSkinConfig = a;
cc._RF.pop();
}, {} ],
G3_FChangeSkin_LevelSchemeConfig: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "e44dahpiFJBg65J4yrBOZaW", "G3_FChangeSkin_LevelSchemeConfig");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_LevelSchemeConfig = void 0;
var a = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineConfig = function() {
return {
skinSwitchMode: 1,
startLevel: 2,
interval: 1
};
};
return r([ ae.atomClass("G3_FChangeSkin_LevelSchemeConfig") ], o);
}(ae.ConfigAtom);
t.G3_FChangeSkin_LevelSchemeConfig = a;
cc._RF.pop();
}, {} ],
G3_FChangeSkin_Namespace: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "2197bQZ+C1Dqb5gF5NjBffw", "G3_FChangeSkin_Namespace");
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin = void 0;
(function(e) {
var o;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "切换主题关卡主题配色";
(function(e) {
e.Name = "G3";
})(o = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = o.Name + "_FChangeSkin"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 7] = "Version";
e.CreateTime = "2026-02-28 15:58:03";
})(e.BundleInfo || (e.BundleInfo = {}));
})(t.G3_FChangeSkin || (t.G3_FChangeSkin = {}));
cc._RF.pop();
}, {} ],
G3_FChangeSkin_SkinExitSwitchLogic: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "ac02ahfcdRNGb/vwKvvu3h1", "G3_FChangeSkin_SkinExitSwitchLogic");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
}, a = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_SkinExitSwitchLogic = void 0;
var u = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineRuntimeData = function() {
return {};
};
o.prototype.onExecute = function() {
var e, o = this.levelSchemeConfig, t = o.skinSwitchMode, n = o.startLevel, i = o.interval, r = Object.keys(this.homeSkinConfig.schemes);
if (0 !== r.length) if (0 !== t) if (2 !== t) {
var a = this.combatInitLogic.storage.level, u = this.homeSkinConfig.currentScheme;
if (a < n) this.skinInitLogic.storage.currentScheme = Object.prototype.hasOwnProperty.call(this.homeSkinConfig.schemes, u) ? u : r[0]; else {
var c = r.indexOf(u), l = ((c >= 0 ? c : 0) + this.mathFloor((a - n) / i)) % r.length;
this.skinInitLogic.storage.currentScheme = r[l];
}
console.log("G3_FChangeSkin_SkinExitSwitchLogic [Skin] 隔关换肤方案: " + this.skinInitLogic.storage.currentScheme);
} else {
var s = null !== (e = this.levelConfig.degree) && void 0 !== e ? e : "";
if ("" === String(s).trim()) return;
var f = r.indexOf(this.skinInitLogic.storage.currentScheme), p = f >= 0 ? (f + 1) % r.length : 0;
this.skinInitLogic.storage.currentScheme = r[p];
console.log("G3_FChangeSkin_SkinExitSwitchLogic [Skin] 困难关通过，换肤: " + this.skinInitLogic.storage.currentScheme);
} else {
var C = this.homeSkinConfig.currentScheme;
this.skinInitLogic.storage.currentScheme = Object.prototype.hasOwnProperty.call(this.homeSkinConfig.schemes, C) ? C : r[0];
console.log("G3_FChangeSkin_SkinExitSwitchLogic [Skin] 固定皮肤: " + this.skinInitLogic.storage.currentScheme);
}
};
var t, n, u, c, l, s, f;
r([ ae.onChain, ae.bindAtom("G3_FHome_ExitChannelSignal"), a("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FChangeSkin_LevelSchemeConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], o.prototype, "levelSchemeConfig", void 0);
r([ ae.bindAtom("G3_FBase_CombatInitLogic"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], o.prototype, "combatInitLogic", void 0);
r([ ae.bindAtom("G3_FBase_LevelConfig"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], o.prototype, "levelConfig", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], o.prototype, "skinInitLogic", void 0);
r([ ae.bindAtom("G3_FChangeSkin_HomeSkinConfig"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], o.prototype, "homeSkinConfig", void 0);
r([ ae.bindAtom("G_FAtom_MathFloor"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], o.prototype, "mathFloor", void 0);
return r([ ae.atomClass("G3_FChangeSkin_SkinExitSwitchLogic") ], o);
}(ae.LogicAtom);
t.G3_FChangeSkin_SkinExitSwitchLogic = u;
cc._RF.pop();
}, {} ],
G3_FChangeSkin_SkinInitLogicVariant: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "fb7e769MbNO9qpS1xgnwaPH", "G3_FChangeSkin_SkinInitLogicVariant");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
}, a = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_SkinInitLogicVariant = void 0;
var u = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineFunction = function() {
var e = this;
return function(o, t) {
var n = Object.keys(e.homeSkinConfig.schemes);
if (0 !== n.length) {
var i = e.homeSkinConfig.currentScheme;
if (0 === e.levelSchemeConfig.skinSwitchMode) {
t.storage.currentScheme = Object.prototype.hasOwnProperty.call(e.homeSkinConfig.schemes, i) ? i : n[0];
console.log("G3_FChangeSkin_SkinInitLogicVariant 初始化[Skin] 固定使用第默认皮肤方案: ", t.storage.currentScheme);
} else {
var r = Object.prototype.hasOwnProperty.call(e.homeSkinConfig.schemes, i) ? i : n[0];
t.storage.currentScheme = Object.prototype.hasOwnProperty.call(e.homeSkinConfig.schemes, t.storage.currentScheme) ? t.storage.currentScheme : r;
console.log("G3_FChangeSkin_SkinInitLogicVariant 初始化[Skin] 保留兼容皮肤方案: ", t.storage.currentScheme);
}
}
};
};
var t, n, u;
r([ ae.variantOf, ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "source", void 0);
r([ ae.bindAtom("G3_FChangeSkin_HomeSkinConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], o.prototype, "homeSkinConfig", void 0);
r([ ae.bindAtom("G3_FChangeSkin_LevelSchemeConfig"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], o.prototype, "levelSchemeConfig", void 0);
return r([ ae.atomClass("G3_FChangeSkin_SkinInitLogicVariant") ], o);
}(ae.VariantAtom);
t.G3_FChangeSkin_SkinInitLogicVariant = u;
cc._RF.pop();
}, {} ],
G3_FChangeSkin_SkinSwitchLogicVariant: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "a35e1BvAeVPCqj8B0qymswA", "G3_FChangeSkin_SkinSwitchLogicVariant");
var n, i = this && this.__extends || (n = function(e, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
n(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), r = this && this.__decorate || function(e, o, t, n) {
var i, r = arguments.length, a = r < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, t, n); else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a);
return r > 3 && a && Object.defineProperty(o, t, a), a;
}, a = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G3_FChangeSkin_SkinSwitchLogicVariant = void 0;
var u = function(e) {
i(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineFunction = function() {
var e = this;
return function() {
var o = Object.keys(e.homeSkinConfig.schemes), t = (o.indexOf(e.skinInitLogic.storage.currentScheme) + 1) % o.length;
e.skinInitLogic.storage.currentScheme = o[t];
console.log("G3_FChangeSkin_SkinSwitchLogicVariant [Skin] 切换到: " + e.skinInitLogic.storage.currentScheme);
};
};
var t, n, u;
r([ ae.variantOf, ae.bindAtom("G3_FHome_SkinSwitchLogic"), a("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "source", void 0);
r([ ae.bindAtom("G3_FChangeSkin_HomeSkinConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], o.prototype, "homeSkinConfig", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], o.prototype, "skinInitLogic", void 0);
return r([ ae.atomClass("G3_FChangeSkin_SkinSwitchLogicVariant") ], o);
}(ae.VariantAtom);
t.G3_FChangeSkin_SkinSwitchLogicVariant = u;
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FChangeSkin_AeIndex", "G3_FChangeSkin_Namespace", "G3_FChangeSkin_AssetReplaceConfig", "G3_FChangeSkin_BaseSkinConfig", "G3_FChangeSkin_CombatHintAdConfig", "G3_FChangeSkin_HomeSkinConfig", "G3_FChangeSkin_LevelSchemeConfig", "G3_FChangeSkin_BaseGetSchemeValueFunction", "G3_FChangeSkin_HomeGetSchemeValueFunction", "G3_FChangeSkin_BaseAssetReplaceGenLogic", "G3_FChangeSkin_CombatBackgroundRenderGenLogic", "G3_FChangeSkin_CombatHintAdLogicVariant", "G3_FChangeSkin_CombatUiRenderGenLogic", "G3_FChangeSkin_FirstUiRenderGenLogic", "G3_FChangeSkin_HomeAssetReplaceGenLogic", "G3_FChangeSkin_SkinExitSwitchLogic", "G3_FChangeSkin_SkinInitLogicVariant", "G3_FChangeSkin_SkinSwitchLogicVariant", "G3_FChangeSkin_ExitChannelBeforeSkinSwitchOrder" ]);