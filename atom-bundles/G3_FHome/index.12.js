window.__require = function e(t, o, n) {
function i(a, c) {
if (!o[a]) {
if (!t[a]) {
var f = a.split("/");
f = f[f.length - 1];
if (!t[f]) {
var p = "function" == typeof __require && __require;
if (!c && p) return p(f, !0);
if (r) return r(f, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = f;
}
var s = o[a] = {
exports: {}
};
t[a][0].call(s.exports, function(e) {
return i(t[a][1][e] || e);
}, s, s.exports, e, t, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
G3_FHome_AeIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f73c4lXaLVC6aTdpiIjB3Px", "G3_FHome_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FHome = void 0;
var n = e("./G3_FHome_Namespace");
Object.defineProperty(o, "G3_FHome", {
enumerable: !0,
get: function() {
return n.G3_FHome;
}
});
cc._RF.pop();
}, {
"./G3_FHome_Namespace": "G3_FHome_Namespace"
} ],
G3_FHome_Asset: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8b96fhC/4pLiYI2X/CLcAAV", "G3_FHome_Asset");
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
o.G3_FHome_Asset = void 0;
var a = e("../../G3_FHome_Namespace"), c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
var e = this.url(a.G3_FHome.FeatureName.Name);
return {
BtnBlue: e("res/textures/firstpage/btn_blue"),
BtnGray: e("res/textures/firstpage/btn_gray"),
BtnWhite: e("res/textures/firstpage/btn_white"),
Color: e("res/textures/firstpage/color"),
Empty: e("res/textures/firstpage/empty"),
IconChallenge: e("res/textures/firstpage/icon_challenge"),
IconHome: e("res/textures/firstpage/icon_home"),
IconSet: e("res/textures/firstpage/icon_set"),
IconBack: e("res/textures/firstpage/icon_back"),
IconLock: e("res/textures/firstpage/icon_lock"),
IconLogo: e("res/textures/firstpage/icon_logo"),
PanelLogo: e("res/textures/firstpage/panel_logo"),
BackConfirmPanelBg: e("res/textures/back/account_bg_setting_down"),
BackConfirmBtnNo: e("res/textures/back/btn_no"),
BackConfirmBtnYes: e("res/textures/back/btn_yes"),
s_button: e("res/audios/s_button"),
SpartanBoldFont: e("res/fonts/Spartan-Bold"),
RobotoBoldFont: e("res/fonts/Roboto-Bold")
};
};
return r([ ae.atomClass("G3_FHome_Asset") ], t);
}(ae.ConfigAtom);
o.G3_FHome_Asset = c;
cc._RF.pop();
}, {
"../../G3_FHome_Namespace": "G3_FHome_Namespace"
} ],
G3_FHome_BackConfirmUiCancelChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "68f80IU7BBF1I2ncRtuyAYl", "G3_FHome_BackConfirmUiCancelChain");
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
o.G3_FHome_BackConfirmUiCancelChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FHome_BackConfirmUiCancelSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "backConfirmUiCancelSignal", void 0);
return r([ ae.atomClass("G3_FHome_BackConfirmUiCancelChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FHome_BackConfirmUiCancelChain = c;
cc._RF.pop();
}, {} ],
G3_FHome_BackConfirmUiCancelLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "14a7b+1P3lFeLq3QbI5Qnsr", "G3_FHome_BackConfirmUiCancelLogic");
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
o.G3_FHome_BackConfirmUiCancelLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
this.audioPlayer.playEffect(this.asset.s_button, this.audioLogic.runtime.volume);
this.backConfirmUiDomain.destroy(e);
};
var o, n, c, f, p;
r([ ae.onChain, ae.bindAtom("G3_FHome_BackConfirmUiCancelSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FHome_BackConfirmUiDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "backConfirmUiDomain", void 0);
r([ ae.bindAtom("G_FAtom_AudioPlayer"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "audioPlayer", void 0);
r([ ae.bindAtom("G3_FHome_Asset"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "asset", void 0);
r([ ae.bindAtom("G3_FBase_AudioLogic"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "audioLogic", void 0);
return r([ ae.atomClass("G3_FHome_BackConfirmUiCancelLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_BackConfirmUiCancelLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_BackConfirmUiCancelSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "14663vfw/dIKbdSJKTOlWRK", "G3_FHome_BackConfirmUiCancelSignal");
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
o.G3_FHome_BackConfirmUiCancelSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G3_FHome_BackConfirmUiDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "backConfirmUiDomain", void 0);
return r([ ae.atomClass("G3_FHome_BackConfirmUiCancelSignal") ], t);
}(ae.SignalAtom);
o.G3_FHome_BackConfirmUiCancelSignal = c;
cc._RF.pop();
}, {} ],
G3_FHome_BackConfirmUiDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ca8cfrxQf9PuK25eXnyLsZS", "G3_FHome_BackConfirmUiDomain");
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
o.G3_FHome_BackConfirmUiDomain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
return r([ ae.atomClass("G3_FHome_BackConfirmUiDomain") ], t);
}(ae.EntityDomainAtom);
o.G3_FHome_BackConfirmUiDomain = c;
cc._RF.pop();
}, {} ],
G3_FHome_BackConfirmUiOkChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0e53bUH6m5DmqOEoBX8Q1YQ", "G3_FHome_BackConfirmUiOkChain");
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
o.G3_FHome_BackConfirmUiOkChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G3_FHome_BackConfirmUiOkSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "backConfirmUiOkSignal", void 0);
return r([ ae.atomClass("G3_FHome_BackConfirmUiOkChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FHome_BackConfirmUiOkChain = c;
cc._RF.pop();
}, {} ],
G3_FHome_BackConfirmUiOkLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d1f34VTegNE1IqMQzZhRQN/", "G3_FHome_BackConfirmUiOkLogic");
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
o.G3_FHome_BackConfirmUiOkLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function(e) {
this.audioPlayer.playEffect(this.asset.s_button, this.audioLogic.runtime.volume);
this.tween(e, [ [ ae.TweenStepType.Delay, .2 ], [ ae.TweenStepType.Router, this.backConfirmUiOkToFirstUiBackChain ] ]);
};
var o, n, c, f, p, s;
r([ ae.onChain, ae.bindAtom("G3_FHome_BackConfirmUiOkSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G_FAtom_AudioPlayer"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "audioPlayer", void 0);
r([ ae.bindAtom("G3_FHome_Asset"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "asset", void 0);
r([ ae.bindAtom("G3_FBase_AudioLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "audioLogic", void 0);
r([ ae.bindAtom("G_FAtom_Tween"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "tween", void 0);
r([ ae.bindAtom("G3_FHome_BackConfirmUiOkToFirstUiBackChain"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "backConfirmUiOkToFirstUiBackChain", void 0);
return r([ ae.atomClass("G3_FHome_BackConfirmUiOkLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_BackConfirmUiOkLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_BackConfirmUiOkSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6e12blZIfNI6ITX89bXDhBn", "G3_FHome_BackConfirmUiOkSignal");
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
o.G3_FHome_BackConfirmUiOkSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G3_FHome_BackConfirmUiDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "backConfirmUiDomain", void 0);
return r([ ae.atomClass("G3_FHome_BackConfirmUiOkSignal") ], t);
}(ae.SignalAtom);
o.G3_FHome_BackConfirmUiOkSignal = c;
cc._RF.pop();
}, {} ],
G3_FHome_BackConfirmUiOkToFirstUiBackChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "31fafjKcQJDmKXNPVOgLdsY", "G3_FHome_BackConfirmUiOkToFirstUiBackChain");
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
o.G3_FHome_BackConfirmUiOkToFirstUiBackChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_TweenEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "tweenEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FHome_FirstUiBackSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstUiBackSignal", void 0);
return r([ ae.atomClass("G3_FHome_BackConfirmUiOkToFirstUiBackChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FHome_BackConfirmUiOkToFirstUiBackChain = c;
cc._RF.pop();
}, {} ],
G3_FHome_BackConfirmUiRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b642fYbSPBGVp0WaOfYAi8j", "G3_FHome_BackConfirmUiRender");
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
o.G3_FHome_BackConfirmUiRender = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this, t = {
isAlignTop: !0,
isAlignBottom: !0,
isAlignLeft: !0,
isAlignRight: !0,
top: 0,
bottom: 0,
left: 0,
right: 0,
alignMode: ae.WidgetAlignMode.Always
};
return ae.Node({
name: "BackConfirmUi",
widget: t
}, ae.Sprite({
name: "BackConfirmMask",
widget: t,
rgb: 0,
alpha: .58,
img: this.asset.Color,
blockInputEvents: !0
}), ae.Sprite({
name: "BackConfirmPanel",
width: 850,
height: 550,
widget: {
isAlignHorizontalCenter: !0,
isAlignVerticalCenter: !0,
horizontalCenter: 0,
verticalCenter: 0,
alignMode: ae.WidgetAlignMode.Always
},
img: this.asset.BackConfirmPanelBg,
renderType: ae.RenderType.Sliced
}, ae.Text({
name: "BackConfirmText",
width: 550,
y: 90,
font: this.asset.SpartanBoldFont,
text: "Are you sure you want\nto leave?",
fontSize: 44,
lineHeight: 70,
rgb: [ function() {
return e.getSchemeValueFunction("uiBackConfirmTitleColor", 16777215);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
horizontalAlign: ae.TextHorizontalAlign.CENTER,
overflow: ae.TextOverflow.RESIZE_HEIGHT
}), ae.Sprite({
name: "BackConfirmCancelBtn",
width: 320,
height: 158,
x: -200,
y: -130,
img: this.asset.BackConfirmBtnNo,
event: {
touchEnd: this.backConfirmUiCancelChain
},
button: {
transition: ae.ButtonTransition.Scale,
duration: .1,
zoomScale: .9
}
}), ae.Sprite({
name: "BackConfirmOkBtn",
width: 320,
height: 158,
x: 200,
y: -130,
img: this.asset.BackConfirmBtnYes,
event: {
touchEnd: this.backConfirmUiOkChain
},
button: {
transition: ae.ButtonTransition.Scale,
duration: .1,
zoomScale: .9
}
})));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p, s;
r([ ae.entityRenderer, ae.bindAtom("G3_FHome_BackConfirmUiDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "backConfirmUiDomain", void 0);
r([ ae.bindAtom("G3_FHome_Asset"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "asset", void 0);
r([ ae.bindAtom("G3_FHome_BackConfirmUiCancelChain"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "backConfirmUiCancelChain", void 0);
r([ ae.bindAtom("G3_FHome_BackConfirmUiOkChain"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "backConfirmUiOkChain", void 0);
r([ ae.bindAtom("G3_FHome_GetSchemeValueFunction"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "getSchemeValueFunction", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "skinInitLogic", void 0);
return r([ ae.atomClass("G3_FHome_BackConfirmUiRender") ], t);
}(ae.RenderAtom);
o.G3_FHome_BackConfirmUiRender = c;
cc._RF.pop();
}, {} ],
G3_FHome_BackConfirmUiShowLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "01f58ZKhbRATJpjdXaCz7nM", "G3_FHome_BackConfirmUiShowLogic");
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
}, c = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, o = t && e[t], n = 0;
if (o) return o.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && n >= e.length && (e = void 0);
return {
value: e && e[n++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FHome_BackConfirmUiShowLogic = void 0;
var f = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e, t, o, n;
if (this.getLaunchParams().app.isMiniGameBackKeyUnified) {
try {
for (var i = c(this.backConfirmUiDomain.collect()), r = i.next(); !r.done; r = i.next()) {
var a = r.value;
this.backConfirmUiDomain.destroy(a);
return;
}
} catch (e) {
o = {
error: e
};
} finally {
try {
r && !r.done && (n = i.return) && n.call(i);
} finally {
if (o) throw o.error;
}
}
var f = this.rootDomain.collect()[0];
if (f) {
var p = this.backConfirmUiDomain.create();
this.childOf.addChild(f, p);
}
} else {
try {
for (var s = c(this.backConfirmUiDomain.collect()), u = s.next(); !u.done; u = s.next()) {
var l = u.value;
this.backConfirmUiDomain.destroy(l);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
u && !u.done && (t = s.return) && t.call(s);
} finally {
if (e) throw e.error;
}
}
this.exitRequest.emitToParent();
}
};
var o, n, f, p, s, u;
r([ ae.onChain, ae.bindAtom("G3_FHome_BackConfirmUiShowSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FHome_BackConfirmUiDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "backConfirmUiDomain", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "childOf", void 0);
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "rootDomain", void 0);
r([ ae.bindAtom("G_FAtom_GetLaunchParams"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "getLaunchParams", void 0);
r([ ae.bindAtom("G_FAtom_ExitRequest"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "exitRequest", void 0);
return r([ ae.atomClass("G3_FHome_BackConfirmUiShowLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_BackConfirmUiShowLogic = f;
cc._RF.pop();
}, {} ],
G3_FHome_BackConfirmUiShowSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8deefiVT7RF1ZLlk0ApYpCV", "G3_FHome_BackConfirmUiShowSignal");
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
o.G3_FHome_BackConfirmUiShowSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FHome_BackConfirmUiShowSignal") ], t);
}(ae.SignalAtom);
o.G3_FHome_BackConfirmUiShowSignal = c;
cc._RF.pop();
}, {} ],
G3_FHome_Config: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c7789NTBZ9HgZd5BwC+6Qtx", "G3_FHome_Config");
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
o.G3_FHome_Config = void 0;
var a = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
defaultEnterMode: "home",
showBottom: !1
};
};
return r([ ae.atomClass("G3_FHome_Config") ], t);
}(ae.ConfigAtom);
o.G3_FHome_Config = a;
cc._RF.pop();
}, {} ],
G3_FHome_ExitChannelChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1549b2E2N9DW6CNQTCJP9Vq", "G3_FHome_ExitChannelChain");
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
o.G3_FHome_ExitChannelChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G3_FBase_ExitChannel"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "exitChannel", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FHome_ExitChannelSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "exitChannelSignal", void 0);
return r([ ae.atomClass("G3_FHome_ExitChannelChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FHome_ExitChannelChain = c;
cc._RF.pop();
}, {} ],
G3_FHome_ExitChannelLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5bfb5QLE6hL85nYaj1JbcEW", "G3_FHome_ExitChannelLogic");
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
o.G3_FHome_ExitChannelLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = this.exitChannel.data, t = e.back, o = e.win, n = e.level, i = e.hp, r = e.degree, a = e.degreeColor;
console.log("[Home] 收到子世界退出请求", {
back: t,
win: o,
level: n,
hp: i,
degree: r,
degreeColor: a
});
if (o) {
var c = this.gameDataLogic.storage.level;
console.log("---- ExitChannelLogic 获得胜利，升级 oldLevel:", c, "newLevel:", n);
if (n !== c && c > 0) {
this.gameDataLogic.runtime.prevLevel = c;
this.gameDataLogic.runtime.levelChangeStartTime = this.worldMeta.worldTime;
this.gameDataLogic.runtime.playTime = this.worldMeta.worldTime;
}
}
this.gameDataLogic.storage.level = n;
this.gameDataLogic.storage.hp = i;
this.gameDataLogic.storage.degree = r;
this.gameDataLogic.storage.degreeColor = a;
this.firstUiPlayLogic.runtime.loading = !1;
this.firstUiEffectLogic.runtime.tagY = 180;
this.firstUiEffectLogic.runtime.firstStartTime = this.worldMeta.worldTime;
this.firstUiStartLogic.runtime.firstUiVisible = !0;
};
var o, n, c, f, p, s, u, l, _, d;
r([ ae.onChain, ae.bindAtom("G3_FHome_ExitChannelSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FBase_ExitChannel"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "exitChannel", void 0);
r([ ae.bindAtom("G3_FHome_GameDataLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "gameDataLogic", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiPlayLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "firstUiPlayLogic", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "worldMeta", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiEffectLogic"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "firstUiEffectLogic", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiDomain"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "firstUiDomain", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "childOf", void 0);
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "rootDomain", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiStartLogic"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "firstUiStartLogic", void 0);
return r([ ae.atomClass("G3_FHome_ExitChannelLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_ExitChannelLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_ExitChannelSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2c842WNkh9LYZ4rBPhsBlpC", "G3_FHome_ExitChannelSignal");
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
o.G3_FHome_ExitChannelSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FHome_ExitChannelSignal") ], t);
}(ae.SignalAtom);
o.G3_FHome_ExitChannelSignal = c;
cc._RF.pop();
}, {} ],
G3_FHome_ExitChannel: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "aaef6m2tcZA4orvXw4HrLHo", "G3_FHome_ExitChannel");
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
o.G3_FHome_ExitChannel = void 0;
var a = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineInputData = function() {
return {};
};
return r([ ae.atomClass("G3_FHome_ExitChannel") ], t);
}(ae.G_FAtom_ExitRequest);
o.G3_FHome_ExitChannel = a;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiBackChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "635a036FCdGtoHRF51tSZy/", "G3_FHome_FirstUiBackChain");
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
o.G3_FHome_FirstUiBackChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FHome_FirstUiBackSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstUiBackSignal", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiBackChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FHome_FirstUiBackChain = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiBackDispatchLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "68d441bqMtMP5HzEfKSCaWH", "G3_FHome_FirstUiBackDispatchLogic");
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
o.G3_FHome_FirstUiBackDispatchLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
lastClickTime: 0
};
};
t.prototype.onExecute = function(e, t) {
var o = this.worldMeta.worldTime;
if (t.runtime.lastClickTime > 0 && o - t.runtime.lastClickTime < 1) this.router.dispatchAction = ae.DispatchAction.Cancel; else {
t.runtime.lastClickTime = o;
this.router.dispatchAction = ae.DispatchAction.FireOnce;
}
};
var o, n;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FHome_FirstUiBackChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "worldMeta", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiBackDispatchLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_FirstUiBackDispatchLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiBackKeyChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fd8b5nYNcVElqyLzJoyC6fE", "G3_FHome_FirstUiBackKeyChain");
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
o.G3_FHome_FirstUiBackKeyChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_Keyboard"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "keyboard", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FHome_BackConfirmUiShowSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "backConfirmUiShowSignal", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiBackKeyChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FHome_FirstUiBackKeyChain = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiBackKeyDirectChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "568c8Sg/yhM9Jg8zShaahqk", "G3_FHome_FirstUiBackKeyDirectChain");
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
o.G3_FHome_FirstUiBackKeyDirectChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_Keyboard"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "keyboard", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FHome_FirstUiBackSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstUiBackSignal", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiBackKeyDirectChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FHome_FirstUiBackKeyDirectChain = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiBackKeyDirectDispatchLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "79fd8SS7TpGWYHGlMkPZ1gh", "G3_FHome_FirstUiBackKeyDirectDispatchLogic");
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
}, c = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, o = t && e[t], n = 0;
if (o) return o.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && n >= e.length && (e = void 0);
return {
value: e && e[n++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FHome_FirstUiBackKeyDirectDispatchLogic = void 0;
var f = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
lastEscapeDownTime: 0
};
};
t.prototype.onExecute = function(e, t) {
var o, n;
if (this.keyboard.keyCode !== ae.KeyCode.Escape && this.keyboard.keyCode !== ae.KeyCode.MobileBack || !this.keyboard.isDown) this.router.dispatchAction = ae.DispatchAction.Cancel; else if (this.getLaunchParams().app.isMiniGameBackKeyUnified) this.router.dispatchAction = ae.DispatchAction.Cancel; else if (this.firstUiPlayLogic.runtime.loading) {
t.runtime.lastEscapeDownTime = 0;
this.router.dispatchAction = ae.DispatchAction.Cancel;
} else {
var i = this.rootDomain.collect()[0];
if (i) {
var r = this.childOf.getChildren(i), a = this.worldDomain.collect();
try {
for (var f = c(r), p = f.next(); !p.done; p = f.next()) {
var s = p.value;
if (a.includes(s) && this.worldDomain.worldState.worldId[s] === this.baseWorldAtom.worldId) {
this.router.dispatchAction = ae.DispatchAction.Cancel;
return;
}
}
} catch (e) {
o = {
error: e
};
} finally {
try {
p && !p.done && (n = f.return) && n.call(f);
} finally {
if (o) throw o.error;
}
}
}
var u = this.worldMeta.worldTime;
if (t.runtime.lastEscapeDownTime > 0 && u - t.runtime.lastEscapeDownTime < 1) this.router.dispatchAction = ae.DispatchAction.Cancel; else {
t.runtime.lastEscapeDownTime = u;
this.router.dispatchAction = ae.DispatchAction.FireOnce;
}
}
};
var o, n, f, p, s, u, l, _, d;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FHome_FirstUiBackKeyDirectChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "worldMeta", void 0);
r([ ae.bindAtom("G_FAtom_Keyboard"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "keyboard", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiPlayLogic"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "firstUiPlayLogic", void 0);
r([ ae.bindAtom("G_FAtom_WorldDomain"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "worldDomain", void 0);
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "rootDomain", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "childOf", void 0);
r([ ae.bindAtom("G3_FBase_WorldAtom"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "baseWorldAtom", void 0);
r([ ae.bindAtom("G_FAtom_GetLaunchParams"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "getLaunchParams", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiBackKeyDirectDispatchLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_FirstUiBackKeyDirectDispatchLogic = f;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiBackKeyDispatchLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9961ftLcptHO4ShiQjpyRJD", "G3_FHome_FirstUiBackKeyDispatchLogic");
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
}, c = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, o = t && e[t], n = 0;
if (o) return o.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && n >= e.length && (e = void 0);
return {
value: e && e[n++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FHome_FirstUiBackKeyDispatchLogic = void 0;
var f = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
lastEscapeDownTime: 0
};
};
t.prototype.onExecute = function(e, t) {
var o, n;
if (this.keyboard.keyCode !== ae.KeyCode.Escape && this.keyboard.keyCode !== ae.KeyCode.MobileBack || !this.keyboard.isDown) this.router.dispatchAction = ae.DispatchAction.Cancel; else if (this.getLaunchParams().app.isMiniGameBackKeyUnified) if (this.firstUiPlayLogic.runtime.loading) {
t.runtime.lastEscapeDownTime = 0;
this.router.dispatchAction = ae.DispatchAction.Cancel;
} else {
var i = this.rootDomain.collect()[0];
if (i) {
var r = this.childOf.getChildren(i), a = this.worldDomain.collect();
try {
for (var f = c(r), p = f.next(); !p.done; p = f.next()) {
var s = p.value;
if (a.includes(s) && this.worldDomain.worldState.worldId[s] === this.baseWorldAtom.worldId) {
this.router.dispatchAction = ae.DispatchAction.Cancel;
return;
}
}
} catch (e) {
o = {
error: e
};
} finally {
try {
p && !p.done && (n = f.return) && n.call(f);
} finally {
if (o) throw o.error;
}
}
}
var u = Array.from(this.backConfirmUiDomain.collect()).length > 0, l = this.worldMeta.worldTime;
if (!u && t.runtime.lastEscapeDownTime > 0 && l - t.runtime.lastEscapeDownTime < 1) this.router.dispatchAction = ae.DispatchAction.Cancel; else {
t.runtime.lastEscapeDownTime = l;
this.router.dispatchAction = ae.DispatchAction.FireOnce;
}
} else this.router.dispatchAction = ae.DispatchAction.Cancel;
};
var o, n, f, p, s, u, l, _, d, y;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FHome_FirstUiBackKeyChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "worldMeta", void 0);
r([ ae.bindAtom("G_FAtom_Keyboard"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "keyboard", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiPlayLogic"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "firstUiPlayLogic", void 0);
r([ ae.bindAtom("G_FAtom_WorldDomain"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "worldDomain", void 0);
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "rootDomain", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "childOf", void 0);
r([ ae.bindAtom("G3_FBase_WorldAtom"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "baseWorldAtom", void 0);
r([ ae.bindAtom("G3_FHome_BackConfirmUiDomain"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "backConfirmUiDomain", void 0);
r([ ae.bindAtom("G_FAtom_GetLaunchParams"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "getLaunchParams", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiBackKeyDispatchLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_FirstUiBackKeyDispatchLogic = f;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiBackLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "10bb2o52DlKCK26s3Pj/xij", "G3_FHome_FirstUiBackLogic");
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
o.G3_FHome_FirstUiBackLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
console.log("[G3_FHome] 发送自销毁请求...");
this.exitRequest.emitToParent();
};
var o, n;
r([ ae.onChain, ae.bindAtom("G3_FHome_FirstUiBackSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G_FAtom_ExitRequest"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "exitRequest", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiBackLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_FirstUiBackLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiBackSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1950dHNb55N6pSiBrzdvwY/", "G3_FHome_FirstUiBackSignal");
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
o.G3_FHome_FirstUiBackSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G3_FHome_FirstUiDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "firstUiDomain", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiBackSignal") ], t);
}(ae.SignalAtom);
o.G3_FHome_FirstUiBackSignal = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiChallengeChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "86bd4E0WyNMrZ1lPFQ2Y7AC", "G3_FHome_FirstUiChallengeChain");
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
o.G3_FHome_FirstUiChallengeChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G3_FHome_FirstUiChallengeSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstUiChallengeSignal", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiChallengeChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FHome_FirstUiChallengeChain = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiChallengeLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "39c3brbHJFOJKFUCP/yJJPD", "G3_FHome_FirstUiChallengeLogic");
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
o.G3_FHome_FirstUiChallengeLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {};
var o, n;
r([ ae.onChain, ae.bindAtom("G3_FHome_FirstUiChallengeSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiStartLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstUiStartLogic", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiChallengeLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_FirstUiChallengeLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiChallengeSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "073e99uo4VK2JbtrRwrnksH", "G3_FHome_FirstUiChallengeSignal");
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
o.G3_FHome_FirstUiChallengeSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G3_FHome_FirstUiDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "firstUiDomain", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiChallengeSignal") ], t);
}(ae.SignalAtom);
o.G3_FHome_FirstUiChallengeSignal = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiDomain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b147eSgMZRGz7WuoeUq7vaM", "G3_FHome_FirstUiDomain");
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
o.G3_FHome_FirstUiDomain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_Transform"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "transform", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiDomain") ], t);
}(ae.EntityDomainAtom);
o.G3_FHome_FirstUiDomain = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiEffectLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6264aPaRANCqZ+xgU98MZuo", "G3_FHome_FirstUiEffectLogic");
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
o.G3_FHome_FirstUiEffectLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
firstStartTime: 0,
tagY: 0,
displayLevel: 1,
oldLevel: 1,
newLevel: 1,
slideOffsetY: 0,
oldOpacity: 1,
newOpacity: 1,
isAnimating: !1
};
};
t.prototype.onExecute = function(e, t) {
if (t.runtime.firstStartTime > 0) {
var o = this.worldMeta.worldTime - t.runtime.firstStartTime;
if (o > .4) {
t.runtime.tagY = 0;
t.runtime.firstStartTime = 0;
} else t.runtime.tagY = 180 - 180 * o / .4;
}
var n = this.gameDataLogic.runtime.levelChangeStartTime + .5;
if (n > .5) {
var i = this.worldMeta.worldTime - n;
if (i < 0) return;
var r = this.mathMin(i / .5, 1);
if (!t.runtime.isAnimating) {
t.runtime.oldLevel = this.gameDataLogic.runtime.prevLevel;
t.runtime.newLevel = this.gameDataLogic.storage.level;
t.runtime.isAnimating = !0;
}
t.runtime.slideOffsetY = 60 * r;
t.runtime.oldOpacity = 1 - r;
t.runtime.newOpacity = r;
if (r >= 1) {
this.gameDataLogic.runtime.levelChangeStartTime = 0;
t.runtime.isAnimating = !1;
t.runtime.slideOffsetY = 0;
t.runtime.oldOpacity = 0;
t.runtime.newOpacity = 1;
}
} else if (t.runtime.newLevel !== t.runtime.oldLevel) {
t.runtime.newLevel = this.gameDataLogic.storage.level;
t.runtime.oldLevel = this.gameDataLogic.storage.level;
t.runtime.slideOffsetY = 0;
t.runtime.oldOpacity = 0;
t.runtime.newOpacity = 1;
t.runtime.isAnimating = !1;
}
};
var o, n, c, f, p, s;
r([ ae.onChain, ae.bindAtom("G3_FHome_FirstUiEffectSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstUiDomain", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "worldMeta", void 0);
r([ ae.bindAtom("G3_FHome_GameDataLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "gameDataLogic", void 0);
r([ ae.bindAtom("G_FAtom_MathMin"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "mathMin", void 0);
r([ ae.bindAtom("G_FAtom_MathRound"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "mathRound", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiEffectLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_FirstUiEffectLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiEffectSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2c335ArG1xCXKi06AR629Z0", "G3_FHome_FirstUiEffectSignal");
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
o.G3_FHome_FirstUiEffectSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G3_FHome_FirstUiDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "firstUiDomain", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiEffectSignal") ], t);
}(ae.SignalAtom);
o.G3_FHome_FirstUiEffectSignal = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiHomeChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8fe778HM01O7IAmq/Z84U7n", "G3_FHome_FirstUiHomeChain");
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
o.G3_FHome_FirstUiHomeChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G3_FHome_FirstUiHomeSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstUiHomeSignal", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiHomeChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FHome_FirstUiHomeChain = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiHomeLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d8df9loLxVMwJGdXkn9M6Ij", "G3_FHome_FirstUiHomeLogic");
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
o.G3_FHome_FirstUiHomeLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.firstUiStartLogic.runtime.selectedPage = 1;
};
var o, n;
r([ ae.onChain, ae.bindAtom("G3_FHome_FirstUiHomeSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiStartLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstUiStartLogic", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiHomeLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_FirstUiHomeLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiHomeSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "77208wCFTxOk7ajlRLHJtD9", "G3_FHome_FirstUiHomeSignal");
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
o.G3_FHome_FirstUiHomeSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G3_FHome_FirstUiDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "firstUiDomain", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiHomeSignal") ], t);
}(ae.SignalAtom);
o.G3_FHome_FirstUiHomeSignal = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiInitSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "769d8tNKTxEao61D0WoOJ8Z", "G3_FHome_FirstUiInitSignal");
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
o.G3_FHome_FirstUiInitSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "globalDomain", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiInitSignal") ], t);
}(ae.SignalAtom);
o.G3_FHome_FirstUiInitSignal = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiPlayChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "568a5KZlvlKs5PQDStNDMQm", "G3_FHome_FirstUiPlayChain");
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
o.G3_FHome_FirstUiPlayChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G3_FHome_FirstUiPlaySignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstUiPlaySignal", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiPlayChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FHome_FirstUiPlayChain = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiPlayDispatchLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4c173Ntj+VCB7X5Z3Dt0ztH", "G3_FHome_FirstUiPlayDispatchLogic");
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
o.G3_FHome_FirstUiPlayDispatchLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
lastClickTime: 0
};
};
t.prototype.onExecute = function(e, t) {
var o = this.worldMeta.worldTime;
if (t.runtime.lastClickTime > 0 && o - t.runtime.lastClickTime < 1) this.router.dispatchAction = ae.DispatchAction.Cancel; else {
t.runtime.lastClickTime = o;
this.router.dispatchAction = ae.DispatchAction.FireOnce;
}
};
var o, n;
r([ ae.routeDispatch, ae.onChain, ae.bindAtom("G3_FHome_FirstUiPlayChain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "router", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "worldMeta", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiPlayDispatchLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_FirstUiPlayDispatchLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiPlayLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c9b5dQk0LFOIb3SAPwEuvuJ", "G3_FHome_FirstUiPlayLogic");
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
o.G3_FHome_FirstUiPlayLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
loading: !1
};
};
t.prototype.onExecute = function(e, t) {
if (!t.runtime.loading) {
console.log("G3_FHome 创建子世界");
t.runtime.loading = !0;
var o = this.worldDomain.create();
this.worldDomain.worldState.multiTouch.set(o, !0);
this.worldDomain.worldState.worldId.set(o, this.baseWorld.worldId);
var n = this.rootDomain.collect()[0];
this.childOf.addChild(n, o);
}
};
var o, n, c, f, p;
r([ ae.onChain, ae.bindAtom("G3_FHome_FirstUiPlaySignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G_FAtom_WorldDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "worldDomain", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "childOf", void 0);
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "rootDomain", void 0);
r([ ae.bindAtom("G3_FBase_WorldAtom"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "baseWorld", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiPlayLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_FirstUiPlayLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiPlaySignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "78202pDuH9HXrenkoUzh5ZB", "G3_FHome_FirstUiPlaySignal");
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
o.G3_FHome_FirstUiPlaySignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G3_FHome_FirstUiDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "firstUiDomain", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiPlaySignal") ], t);
}(ae.SignalAtom);
o.G3_FHome_FirstUiPlaySignal = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "09e2fVhi3ZK/4IlrY3efA6m", "G3_FHome_FirstUiRender");
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
o.G3_FHome_FirstUiRender = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRender = function() {
var e = this;
return ae.Graphics({
name: "FirstUi",
alpha: [ function() {
return e.firstUiStartLogic.runtime.firstUiVisible ? 1 : 0;
}, [ this.firstUiStartLogic, "runtime", "firstUiVisible" ] ],
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
draw: [ function() {
var t = e.windowSizeLogic.runtime.screen.width, o = e.windowSizeLogic.runtime.screen.height, n = e.getSchemeValueFunction("uiHomeBgColor", 16777215);
return [ [ ae.GraphicsCmd.FillColor, n ], [ ae.GraphicsCmd.Rect, -t / 2, -o / 2, t, o ], [ ae.GraphicsCmd.Fill ] ];
}, [ this.windowSizeLogic, "runtime", "screen", "width" ], [ this.windowSizeLogic, "runtime", "screen", "height" ], [ this.skinInitLogic, "storage", "currentScheme" ] ]
}, ae.Sprite({
name: "PanelLogoLeft",
widget: {
isAlignTop: !0,
isAlignLeft: !0,
top: 0,
left: 0,
alignMode: ae.WidgetAlignMode.Always
},
sizeMode: ae.SizeMode.Custom,
width: this.windowSize().width / 2,
height: 475,
img: this.asset.PanelLogo,
rgb: [ function() {
return e.getSchemeValueFunction("uiPanelLogoColor", 13620729);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
renderType: ae.RenderType.Sliced
}), ae.Sprite({
name: "PanelLogoRight",
widget: {
isAlignTop: !0,
isAlignRight: !0,
top: 0,
right: 0,
alignMode: ae.WidgetAlignMode.Always
},
scaleX: -1,
sizeMode: ae.SizeMode.Custom,
width: this.windowSize().width / 2,
height: 475,
img: this.asset.PanelLogo,
rgb: [ function() {
return e.getSchemeValueFunction("uiPanelLogoColor", 13620729);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
renderType: ae.RenderType.Sliced
}), ae.Sprite({
name: "Arrows",
widget: {
isAlignHorizontalCenter: !0,
isAlignTop: !0,
top: 366,
alignMode: ae.WidgetAlignMode.Always
},
img: this.asset.IconLogo,
sizeMode: ae.SizeMode.Trimmed,
rgb: [ function() {
return e.getSchemeValueFunction("uiArrowsColor", 3291763);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
}), ae.Node({
name: "TopSafe",
widget: {
isAlignTop: !0,
isAlignLeft: !0,
isAlignRight: !0,
isAlignBottom: !0,
alignMode: ae.WidgetAlignMode.Always,
safeArea: !0
}
}, ae.Sprite({
name: "Back",
widget: {
isAlignTop: !0,
isAlignLeft: !0,
top: 54,
left: 48,
alignMode: ae.WidgetAlignMode.Always
},
width: 47,
height: 72,
img: this.asset.IconBack,
rgb: [ function() {
return e.getSchemeValueFunction("uiBackColor", 9936074);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
active: [ function() {
return !e.firstUiPlayLogic.runtime.loading;
}, [ this.firstUiPlayLogic, "runtime", "loading" ] ],
event: {
touchEnd: this.firstUiBackChain
}
})), ae.Node({
name: "Center",
y: 70
}, ae.Node({
name: "LevelContainer",
widget: {
isAlignHorizontalCenter: !0
},
layout: {
type: ae.LayoutType.Horizontal,
resizeMode: ae.LayoutResizeMode.Container,
spacingX: 10
}
}, ae.Text({
name: "LevelLabel",
font: this.asset.SpartanBoldFont,
text: "Level",
fontSize: 45,
rgb: [ function() {
return e.getSchemeValueFunction("uiLevelColor", 6318840);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
}), ae.Node({
name: "NumberSlider",
anchorX: 0,
width: [ function() {
var t = "" + e.firstUiEffectLogic.runtime.oldLevel, o = "" + e.firstUiEffectLogic.runtime.newLevel;
return 29.25 * Math.max(t.length, o.length);
}, [ this.firstUiEffectLogic, "runtime", "oldLevel" ], [ this.firstUiEffectLogic, "runtime", "newLevel" ] ]
}, ae.Text({
name: "LevelOld",
y: [ function() {
return e.firstUiEffectLogic.runtime.slideOffsetY;
}, [ this.firstUiEffectLogic, "runtime", "slideOffsetY" ] ],
horizontalAlign: ae.TextHorizontalAlign.LEFT,
font: this.asset.SpartanBoldFont,
text: [ function() {
return "" + e.firstUiEffectLogic.runtime.oldLevel;
}, [ this.firstUiEffectLogic, "runtime", "oldLevel" ] ],
fontSize: 45,
rgb: [ function() {
return e.getSchemeValueFunction("uiLevelColor", 6318840);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
alpha: [ function() {
return e.firstUiEffectLogic.runtime.oldOpacity;
}, [ this.firstUiEffectLogic, "runtime", "oldOpacity" ] ],
active: [ function() {
return e.firstUiEffectLogic.runtime.isAnimating;
}, [ this.firstUiEffectLogic, "runtime", "isAnimating" ] ],
anchorX: 0
}), ae.Text({
name: "LevelNew",
y: [ function() {
return e.firstUiEffectLogic.runtime.isAnimating ? e.firstUiEffectLogic.runtime.slideOffsetY - 60 : 0;
}, [ this.firstUiEffectLogic, "runtime", "isAnimating" ], [ this.firstUiEffectLogic, "runtime", "slideOffsetY" ] ],
horizontalAlign: ae.TextHorizontalAlign.LEFT,
font: this.asset.SpartanBoldFont,
text: [ function() {
return "" + e.firstUiEffectLogic.runtime.newLevel;
}, [ this.firstUiEffectLogic, "runtime", "newLevel" ] ],
fontSize: 45,
rgb: [ function() {
return e.getSchemeValueFunction("uiLevelColor", 6318840);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
alpha: [ function() {
return e.firstUiEffectLogic.runtime.newOpacity;
}, [ this.firstUiEffectLogic, "runtime", "newOpacity" ] ],
anchorX: 0
}))), ae.Text({
name: "Degree",
widget: {
isAlignHorizontalCenter: !0
},
y: -62,
font: this.asset.SpartanBoldFont,
text: [ function() {
return e.gameDataLogic.storage.degree;
}, [ this.gameDataLogic, "storage", "degree" ] ],
fontSize: 32,
rgb: [ function() {
return e.gameDataLogic.storage.degreeColor;
}, [ this.gameDataLogic, "storage", "degreeColor" ] ],
active: [ function() {
return Boolean(e.gameDataLogic.storage.degree);
}, [ this.gameDataLogic, "storage", "degree" ] ]
})), ae.Sprite({
name: "Enter",
widget: {
isAlignHorizontalCenter: !0
},
y: -400,
width: 450,
height: 127,
img: this.asset.BtnBlue,
rgb: [ function() {
return e.getSchemeValueFunction("uiEnterColor", 5923578);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
alpha: [ function() {
if (e.gameDataLogic.runtime.playTime <= 0) return 1;
var t = e.worldMeta.worldTime - e.gameDataLogic.runtime.playTime;
return t < 1.2 ? 0 : t >= 1.5 ? 1 : (t - 1.2) / .3;
}, [ this.worldMeta, "worldTime" ], [ this.gameDataLogic, "runtime", "playTime" ] ],
renderType: ae.RenderType.Sliced,
event: {
touchEnd: this.firstUiPlayChain
},
button: {
transition: ae.ButtonTransition.Scale,
duration: .1,
zoomScale: .9
}
}, ae.Text({
name: "PlayText",
font: this.asset.SpartanBoldFont,
text: [ function() {
return e.combatInitLogic.storage.combat.newCombat ? "Play" : "Continue";
}, [ this.combatInitLogic, "storage", "combat", "newCombat" ] ],
fontSize: 50,
rgb: [ function() {
return e.getSchemeValueFunction("uiPlayTextColor", 16777215);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
})), ae.Sprite({
name: "Bottom",
widget: {
isAlignBottom: !0,
isAlignLeft: !0,
isAlignRight: !0,
alignMode: ae.WidgetAlignMode.Always,
bottom: [ function() {
return -e.firstUiEffectLogic.runtime.tagY;
}, [ this.firstUiEffectLogic, "runtime", "tagY" ] ]
},
height: 188,
rgb: [ function() {
return e.getSchemeValueFunction("uiBottomColor", 13620729);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
img: this.asset.Color,
active: this.config.showBottom
}, ae.Node({
name: "Challenge",
layout: {
type: ae.LayoutType.Vertical,
resizeMode: ae.LayoutResizeMode.Container,
paddingTop: 15
},
x: [ function() {
return -e.windowSizeLogic.runtime.screen.width / 3;
}, [ this.windowSizeLogic, "runtime", "screen", "width" ] ],
width: [ function() {
return e.windowSizeLogic.runtime.screen.width / 3;
}, [ this.windowSizeLogic, "runtime", "screen", "width" ] ],
event: {
touchEnd: this.firstUiChallengeChain
}
}, ae.Sprite({
name: "ChallengeBg",
width: 180,
height: 86,
img: [ function() {
return 0 === e.firstUiStartLogic.runtime.selectedPage ? e.asset.BtnGray : e.asset.Empty;
}, [ this.firstUiStartLogic, "runtime", "selectedPage" ] ],
rgb: [ function() {
return e.getSchemeValueFunction("uiBtnGrayColor", 13291252);
}, [ this.firstUiStartLogic, "runtime", "selectedPage" ], [ this.skinInitLogic, "storage", "currentScheme" ] ],
renderType: ae.RenderType.Sliced
}, ae.Sprite({
name: "ChallengeIcon",
img: [ function() {
return e.firstUiStartLogic.runtime.challengePageEnabled ? e.asset.IconChallenge : e.asset.IconLock;
}, [ this.firstUiStartLogic, "runtime", "challengePageEnabled" ] ],
sizeMode: ae.SizeMode.Trimmed,
rgb: [ function() {
return e.getSchemeValueFunction("uiChallengeColor", 4343658);
}, [ this.skinInitLogic, "storage", "currentScheme" ], [ this.firstUiStartLogic, "runtime", "challengePageEnabled" ] ]
})), ae.Text({
name: "ChallengeText",
width: 150,
height: 30,
font: this.asset.SpartanBoldFont,
text: "Challenge",
fontSize: 30,
rgb: [ function() {
return e.getSchemeValueFunction("uiChallengeColor", 4343658);
}, [ this.skinInitLogic, "storage", "currentScheme" ], [ this.firstUiStartLogic, "runtime", "challengePageEnabled" ] ]
})), ae.Node({
name: "Home",
layout: {
type: ae.LayoutType.Vertical,
resizeMode: ae.LayoutResizeMode.Container,
paddingTop: 15
},
width: [ function() {
return e.windowSizeLogic.runtime.screen.width / 3;
}, [ this.windowSizeLogic, "runtime", "screen", "width" ] ],
event: {
touchEnd: this.firstUiHomeChain
}
}, ae.Sprite({
name: "HomeBg",
width: 180,
height: 86,
img: [ function() {
return 1 === e.firstUiStartLogic.runtime.selectedPage ? e.asset.BtnGray : e.asset.Empty;
}, [ this.firstUiStartLogic, "runtime", "selectedPage" ] ],
rgb: [ function() {
return e.getSchemeValueFunction("uiBtnGrayColor", 13291252);
}, [ this.firstUiStartLogic, "runtime", "selectedPage" ], [ this.skinInitLogic, "storage", "currentScheme" ] ],
renderType: ae.RenderType.Sliced
}, ae.Sprite({
name: "HomeIcon",
img: this.asset.IconHome,
rgb: [ function() {
return e.getSchemeValueFunction("uiIconHomeColor", 4343658);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ],
sizeMode: ae.SizeMode.Trimmed
})), ae.Text({
name: "HomeText",
width: 150,
height: 30,
font: this.asset.SpartanBoldFont,
text: "Home",
fontSize: 30,
rgb: [ function() {
return e.getSchemeValueFunction("uiIconHomeColor", 4343658);
}, [ this.skinInitLogic, "storage", "currentScheme" ] ]
})), ae.Node({
name: "Settings",
layout: {
type: ae.LayoutType.Vertical,
resizeMode: ae.LayoutResizeMode.Container,
paddingTop: 15
},
x: [ function() {
return e.windowSizeLogic.runtime.screen.width / 3;
}, [ this.windowSizeLogic, "runtime", "screen", "width" ] ],
width: [ function() {
return e.windowSizeLogic.runtime.screen.width / 3;
}, [ this.windowSizeLogic, "runtime", "screen", "width" ] ],
event: {
touchEnd: this.firstUiSettingsChain
}
}, ae.Sprite({
name: "SettingsBg",
width: 180,
height: 86,
img: [ function() {
return 2 === e.firstUiStartLogic.runtime.selectedPage ? e.asset.BtnGray : e.asset.Empty;
}, [ this.firstUiStartLogic, "runtime", "selectedPage" ] ],
rgb: [ function() {
return e.getSchemeValueFunction("uiBtnGrayColor", 13291252);
}, [ this.firstUiStartLogic, "runtime", "selectedPage" ], [ this.skinInitLogic, "storage", "currentScheme" ] ],
renderType: ae.RenderType.Sliced
}, ae.Sprite({
name: "SettingsIcon",
img: [ function() {
return e.firstUiStartLogic.runtime.settingsPageEnabled ? e.asset.IconSet : e.asset.IconLock;
}, [ this.firstUiStartLogic, "runtime", "settingsPageEnabled" ] ],
sizeMode: ae.SizeMode.Trimmed,
rgb: [ function() {
return e.getSchemeValueFunction("uiSettingsColor", 4343658);
}, [ this.skinInitLogic, "storage", "currentScheme" ], [ this.firstUiStartLogic, "runtime", "settingsPageEnabled" ] ]
})), ae.Text({
name: "SettingsText",
width: 150,
height: 30,
font: this.asset.SpartanBoldFont,
text: "Settings",
fontSize: 30,
rgb: [ function() {
return e.getSchemeValueFunction("uiSettingsColor", 4343658);
}, [ this.skinInitLogic, "storage", "currentScheme" ], [ this.firstUiStartLogic, "runtime", "settingsPageEnabled" ] ]
}))));
};
t.prototype.defineRenderName = function() {
return null;
};
var o, n, c, f, p, s, u, l, _, d, y, m, h, g, b, F, O, v, A;
r([ ae.entityRenderer, ae.bindAtom("G3_FHome_FirstUiDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "firstUiDomain", void 0);
r([ ae.bindAtom("G3_FHome_WindowSizeLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "windowSizeLogic", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiStartLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "firstUiStartLogic", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiPlayChain"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "firstUiPlayChain", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiChallengeChain"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "firstUiChallengeChain", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiHomeChain"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "firstUiHomeChain", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiSettingsChain"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "firstUiSettingsChain", void 0);
r([ ae.bindAtom("G3_FHome_Asset"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "asset", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiBackChain"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "firstUiBackChain", void 0);
r([ ae.bindAtom("G3_FHome_GameDataLogic"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "gameDataLogic", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiEffectLogic"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "firstUiEffectLogic", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiPlayLogic"), a("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "firstUiPlayLogic", void 0);
r([ ae.bindAtom("G3_FHome_Config"), a("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "config", void 0);
r([ ae.bindAtom("G_FAtom_GetWinSize"), a("design:type", "function" == typeof (g = "undefined" != typeof ae && ae.AtomTypeInfer) ? g : Object) ], t.prototype, "windowSize", void 0);
r([ ae.bindAtom("G3_FBase_CombatInitLogic"), a("design:type", "function" == typeof (b = "undefined" != typeof ae && ae.AtomTypeInfer) ? b : Object) ], t.prototype, "combatInitLogic", void 0);
r([ ae.bindAtom("G3_FHome_SkinConfig"), a("design:type", "function" == typeof (F = "undefined" != typeof ae && ae.AtomTypeInfer) ? F : Object) ], t.prototype, "skinConfig", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (O = "undefined" != typeof ae && ae.AtomTypeInfer) ? O : Object) ], t.prototype, "skinInitLogic", void 0);
r([ ae.bindAtom("G3_FHome_GetSchemeValueFunction"), a("design:type", "function" == typeof (v = "undefined" != typeof ae && ae.AtomTypeInfer) ? v : Object) ], t.prototype, "getSchemeValueFunction", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (A = "undefined" != typeof ae && ae.AtomTypeInfer) ? A : Object) ], t.prototype, "worldMeta", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiRender") ], t);
}(ae.RenderAtom);
o.G3_FHome_FirstUiRender = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiSettingsChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "727a5dG3dFBo7dcpUMExk5A", "G3_FHome_FirstUiSettingsChain");
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
o.G3_FHome_FirstUiSettingsChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_UIEvent"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "uiEvent", void 0);
r([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G3_FHome_FirstUiSettingsSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstUiSettingsSignal", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiSettingsChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FHome_FirstUiSettingsChain = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiSettingsLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "775c1HVQa5BzorN8X5c53i9", "G3_FHome_FirstUiSettingsLogic");
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
o.G3_FHome_FirstUiSettingsLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {};
var o, n;
r([ ae.onChain, ae.bindAtom("G3_FHome_FirstUiSettingsSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiStartLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstUiStartLogic", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiSettingsLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_FirstUiSettingsLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiSettingsSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2524900Q7JGxIEliQ2uzMl+", "G3_FHome_FirstUiSettingsSignal");
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
o.G3_FHome_FirstUiSettingsSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G3_FHome_FirstUiDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "firstUiDomain", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiSettingsSignal") ], t);
}(ae.SignalAtom);
o.G3_FHome_FirstUiSettingsSignal = c;
cc._RF.pop();
}, {} ],
G3_FHome_FirstUiStartLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "89a98kfYMVIFLcKgniGAjPV", "G3_FHome_FirstUiStartLogic");
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
o.G3_FHome_FirstUiStartLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
selectedPage: 1,
firstUiVisible: !0,
challengePageEnabled: !1,
homePageEnabled: !0,
settingsPageEnabled: !1
};
};
t.prototype.defineStorageData = function() {
return {
startPlayedCount: 0,
setupCount: 0
};
};
t.prototype.onExecute = function(e, t) {
t.storage.startPlayedCount = 0;
t.storage.setupCount += 1;
console.log("重置 G3_FHome 启动后，玩过次数 和 启动过次数", t.storage.startPlayedCount, t.storage.setupCount);
this.firstUiEffectLogic.runtime.firstStartTime = this.worldMeta.worldTime;
this.firstUiEffectLogic.runtime.tagY = 180;
if (this.combatInitLogic.storage.combat.win) {
console.log("---- FirstUiStartLogic 获得胜利，升级");
this.combatInitLogic.storage.level += 1;
this.combatInitLogic.storage.combat.hp = -1;
this.combatInitLogic.storage.combat.arrows = {};
this.combatInitLogic.storage.combat.newCombat = !0;
this.combatInitLogic.storage.combat.win = !1;
}
this.gameDataLogic.storage.level = this.combatInitLogic.storage.level;
this.bannerAdLogic.storage.watchedInterstitialAdTime = 0;
this.firstUiEffectLogic.runtime.newLevel = this.gameDataLogic.storage.level;
this.firstUiEffectLogic.runtime.oldLevel = this.gameDataLogic.storage.level;
t.runtime.selectedPage = 1;
var o = this.firstUiDomain.create();
this.childOf.addChild(e, o);
if ("game" === this.config.defaultEnterMode) {
if (this.firstUiPlayLogic.runtime.loading) return;
this.firstUiPlayLogic.runtime.loading = !0;
t.runtime.firstUiVisible = !1;
var n = this.worldDomain.create();
this.worldDomain.worldState.multiTouch.set(n, !0);
this.worldDomain.worldState.worldId.set(n, this.baseWorld.worldId);
this.childOf.addChild(e, n);
} else t.runtime.firstUiVisible = !0;
};
var o, n, c, f, p, s, u, l, _, d, y, m, h;
r([ ae.onChain, ae.bindAtom("G3_FHome_FirstUiInitSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiDomain"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstUiDomain", void 0);
r([ ae.bindAtom("G_FAtom_ChildOf"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "childOf", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiEffectLogic"), a("design:type", "function" == typeof (f = "undefined" != typeof ae && ae.AtomTypeInfer) ? f : Object) ], t.prototype, "firstUiEffectLogic", void 0);
r([ ae.bindAtom("G3_FHome_Config"), a("design:type", "function" == typeof (p = "undefined" != typeof ae && ae.AtomTypeInfer) ? p : Object) ], t.prototype, "config", void 0);
r([ ae.bindAtom("G_FAtom_WorldDomain"), a("design:type", "function" == typeof (s = "undefined" != typeof ae && ae.AtomTypeInfer) ? s : Object) ], t.prototype, "worldDomain", void 0);
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (u = "undefined" != typeof ae && ae.AtomTypeInfer) ? u : Object) ], t.prototype, "rootDomain", void 0);
r([ ae.bindAtom("G3_FBase_WorldAtom"), a("design:type", "function" == typeof (l = "undefined" != typeof ae && ae.AtomTypeInfer) ? l : Object) ], t.prototype, "baseWorld", void 0);
r([ ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (_ = "undefined" != typeof ae && ae.AtomTypeInfer) ? _ : Object) ], t.prototype, "worldMeta", void 0);
r([ ae.bindAtom("G3_FHome_GameDataLogic"), a("design:type", "function" == typeof (d = "undefined" != typeof ae && ae.AtomTypeInfer) ? d : Object) ], t.prototype, "gameDataLogic", void 0);
r([ ae.bindAtom("G3_FBase_CombatInitLogic"), a("design:type", "function" == typeof (y = "undefined" != typeof ae && ae.AtomTypeInfer) ? y : Object) ], t.prototype, "combatInitLogic", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiPlayLogic"), a("design:type", "function" == typeof (m = "undefined" != typeof ae && ae.AtomTypeInfer) ? m : Object) ], t.prototype, "firstUiPlayLogic", void 0);
r([ ae.bindAtom("G3_FBase_BannerAdLogic"), a("design:type", "function" == typeof (h = "undefined" != typeof ae && ae.AtomTypeInfer) ? h : Object) ], t.prototype, "bannerAdLogic", void 0);
return r([ ae.atomClass("G3_FHome_FirstUiStartLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_FirstUiStartLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_GameDataLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0e1deB8e6dIFpgj4BKKCCg7", "G3_FHome_GameDataLogic");
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
o.G3_FHome_GameDataLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
prevLevel: 0,
levelChangeStartTime: 0,
playTime: 0
};
};
t.prototype.defineStorageData = function() {
return {
level: 1,
degree: "",
degreeColor: 0,
hp: 0
};
};
t.prototype.onExecute = function() {};
var o;
r([ ae.onChain, ae.bindAtom("G3_FHome_FirstUiInitSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
return r([ ae.atomClass("G3_FHome_GameDataLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_GameDataLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_GetSchemeValueFunction: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "394cdNk9xhOSbTQT4f4IvO5", "G3_FHome_GetSchemeValueFunction");
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
o.G3_FHome_GetSchemeValueFunction = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineFunction = function() {
var e = this;
return function(t, o) {
var n = (e.skinConfig.schemes[e.skinInitLogic.storage.currentScheme] || e.skinConfig.schemes.default)[t];
if (void 0 === n) {
var i = e.skinInitLogic.storage.currentScheme;
console.warn('%c[换肤] 方案 "' + i + '" 未配置 key "' + String(t) + '"，请完善 G3_FHome_SkinConfig', "color: red");
return o;
}
return n;
};
};
var o, n;
r([ ae.bindAtom("G3_FHome_SkinConfig"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "skinConfig", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "skinInitLogic", void 0);
return r([ ae.atomClass("G3_FHome_GetSchemeValueFunction") ], t);
}(ae.FunctionAtom);
o.G3_FHome_GetSchemeValueFunction = c;
cc._RF.pop();
}, {} ],
G3_FHome_InitChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "153a8cfNqZNWp9ylPKOIbiG", "G3_FHome_InitChain");
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
o.G3_FHome_InitChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_WorldCreate"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "worldCreate", void 0);
r([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G3_FHome_FirstUiInitSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstUiInitSignal", void 0);
return r([ ae.atomClass("G3_FHome_InitChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FHome_InitChain = c;
cc._RF.pop();
}, {} ],
G3_FHome_InitLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "82e14MkijpKFLHwoJtZeCJx", "G3_FHome_InitLogic");
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
o.G3_FHome_InitLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineStorageData = function() {
return {};
};
t.prototype.onExecute = function() {
this.setThinkingDataEnabled(!0);
};
var o, n;
r([ ae.onChain, ae.bindAtom("G3_FHome_FirstUiInitSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "worldCreate", void 0);
r([ ae.bindAtom("G_FAtom_SetThinkingDataEnabled"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "setThinkingDataEnabled", void 0);
return r([ ae.atomClass("G3_FHome_InitLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_InitLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_Namespace: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "917926au6BJz6qj/comq5xk", "G3_FHome_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G3_FHome = void 0;
(function(e) {
var t;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "G3_FHome";
(function(e) {
e.Name = "G3";
})(t = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = t.Name + "_FHome"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 12] = "Version";
e.CreateTime = "2026-01-21T02:22:36.955Z";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G3_FHome || (o.G3_FHome = {}));
cc._RF.pop();
}, {} ],
G3_FHome_SkinConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ab0fdddFXNNC4WuMfjw41NZ", "G3_FHome_SkinConfig");
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
o.G3_FHome_SkinConfig = void 0;
var a = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineConfig = function() {
return {
currentScheme: "ocean",
schemes: {
default: {
name: "默认",
uiHomeBgColor: 16777215,
uiBackColor: 9936074,
uiPanelLogoColor: 13620729,
uiArrowsColor: 3291763,
uiLevelColor: 6318840,
uiEnterColor: 5923578,
uiPlayTextColor: 16777215,
uiBottomColor: 13620729,
uiBtnGrayColor: 13291252,
uiEmptyColor: 16777215,
uiLockColor: 10726101,
uiChallengeColor: 4343658,
uiIconHomeColor: 4343658,
uiSettingsColor: 4343658
},
ocean: {
name: "海洋",
uiHomeBgColor: 16777215,
uiBackColor: 8694779,
uiPanelLogoColor: 5861091,
uiArrowsColor: 3356785,
uiLevelColor: 6189566,
uiEnterColor: 16741669,
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
return r([ ae.atomClass("G3_FHome_SkinConfig") ], t);
}(ae.ConfigAtom);
o.G3_FHome_SkinConfig = a;
cc._RF.pop();
}, {} ],
G3_FHome_SkinInitLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "814966HQaJEfpPSemOip1K8", "G3_FHome_SkinInitLogic");
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
o.G3_FHome_SkinInitLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineStorageData = function() {
return {
currentScheme: this.skinConfig.currentScheme
};
};
t.prototype.onExecute = function(e, t) {
t.storage.currentScheme = this.skinConfig.currentScheme;
console.log("G3_FHome_SkinInit 初始化[Skin] 皮肤方案: ", t.storage.currentScheme);
};
var o, n, c;
r([ ae.onChain, ae.bindAtom("G3_FHome_FirstUiInitSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FHome_SkinConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "skinConfig", void 0);
r([ ae.bindAtom("G3_FHome_SkinSwitchLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "skinSwitchLogic", void 0);
return r([ ae.atomClass("G3_FHome_SkinInitLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_SkinInitLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_SkinSwitchLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9a6a8/EOCtEdYsRc7ADFoYo", "G3_FHome_SkinSwitchLogic");
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
o.G3_FHome_SkinSwitchLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
var e = Object.keys(this.skinConfig.schemes), t = (e.indexOf(this.skinInitLogic.storage.currentScheme) + 1) % e.length;
this.skinInitLogic.storage.currentScheme = e[t];
console.log("G3_FHome_SkinSwitchLogic [Skin] 切换到: " + this.skinInitLogic.storage.currentScheme);
};
var o, n, c;
r([ ae.onChain, ae.bindAtom("G3_FHome_SkinSwitchSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G3_FHome_SkinConfig"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "skinConfig", void 0);
r([ ae.bindAtom("G3_FHome_SkinInitLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "skinInitLogic", void 0);
return r([ ae.atomClass("G3_FHome_SkinSwitchLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_SkinSwitchLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_SkinSwitchSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1267aC3/tpNAbaAB5IIm/Rm", "G3_FHome_SkinSwitchSignal");
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
o.G3_FHome_SkinSwitchSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "globalDomain", void 0);
return r([ ae.atomClass("G3_FHome_SkinSwitchSignal") ], t);
}(ae.SignalAtom);
o.G3_FHome_SkinSwitchSignal = c;
cc._RF.pop();
}, {} ],
G3_FHome_UpdateToFirstUiEffectChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9aedb4wblxCMr7KhYVCBZum", "G3_FHome_UpdateToFirstUiEffectChain");
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
o.G3_FHome_UpdateToFirstUiEffectChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_Update"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "update", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FHome_FirstUiEffectSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "firstUiEffectSignal", void 0);
return r([ ae.atomClass("G3_FHome_UpdateToFirstUiEffectChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FHome_UpdateToFirstUiEffectChain = c;
cc._RF.pop();
}, {} ],
G3_FHome_WindowSizeChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "451d589azlGpamseXOrHcmx", "G3_FHome_WindowSizeChain");
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
o.G3_FHome_WindowSizeChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_WorldCreate"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "worldCreate", void 0);
r([ ae.routeTo(ae.RouteMode.Direct), ae.bindAtom("G3_FHome_WindowSizeSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "windowSizeSignal", void 0);
return r([ ae.atomClass("G3_FHome_WindowSizeChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FHome_WindowSizeChain = c;
cc._RF.pop();
}, {} ],
G3_FHome_WindowSizeLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ce625FE8O1HPoqhJXzW3piv", "G3_FHome_WindowSizeLogic");
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
o.G3_FHome_WindowSizeLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {
screen: {
width: 750,
height: 1334
}
};
};
t.prototype.onExecute = function(e, t) {
t.runtime.screen.width = this.windowSize().width;
t.runtime.screen.height = this.windowSize().height;
};
var o, n;
r([ ae.onChain, ae.bindAtom("G3_FHome_WindowSizeSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G_FAtom_GetWinSize"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "windowSize", void 0);
return r([ ae.atomClass("G3_FHome_WindowSizeLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_WindowSizeLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_WindowSizeSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a79b4BmsIxHoqFvsgd+t1e4", "G3_FHome_WindowSizeSignal");
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
o.G3_FHome_WindowSizeSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "globalDomain", void 0);
return r([ ae.atomClass("G3_FHome_WindowSizeSignal") ], t);
}(ae.SignalAtom);
o.G3_FHome_WindowSizeSignal = c;
cc._RF.pop();
}, {} ],
G3_FHome_WorldAtom: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e7d88HlEWZM65bwKuIz6n/7", "G3_FHome_WorldAtom");
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
o.G3_FHome_WorldAtom = void 0;
var a = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return r([ ae.atomClass("G3_FHome_WorldAtom") ], t);
}(ae.WorldAtom);
o.G3_FHome_WorldAtom = a;
cc._RF.pop();
}, {} ],
G3_FHome_WorldLoadProgressChain: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f6e8cI3prJEWrVTMoIMmJ4S", "G3_FHome_WorldLoadProgressChain");
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
o.G3_FHome_WorldLoadProgressChain = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o, n;
r([ ae.routeFrom, ae.bindAtom("G_FAtom_WorldLoadProgress"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "progress", void 0);
r([ ae.routeTo(ae.RouteMode.Broadcast), ae.bindAtom("G3_FHome_WorldLoadProgressSignal"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "signal", void 0);
return r([ ae.atomClass("G3_FHome_WorldLoadProgressChain") ], t);
}(ae.SignalRouterAtom);
o.G3_FHome_WorldLoadProgressChain = c;
cc._RF.pop();
}, {} ],
G3_FHome_WorldLoadProgressLogic: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a776caAUFNBsaTBplwddp73", "G3_FHome_WorldLoadProgressLogic");
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
o.G3_FHome_WorldLoadProgressLogic = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.defineRuntimeData = function() {
return {};
};
t.prototype.onExecute = function() {
this.progress.error && (this.firstUiPlayLogic.runtime.loading = !1);
};
var o, n, c;
r([ ae.onChain, ae.bindAtom("G3_FHome_WorldLoadProgressSignal"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "signal", void 0);
r([ ae.bindAtom("G_FAtom_WorldLoadProgress"), a("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], t.prototype, "progress", void 0);
r([ ae.bindAtom("G3_FHome_FirstUiPlayLogic"), a("design:type", "function" == typeof (c = "undefined" != typeof ae && ae.AtomTypeInfer) ? c : Object) ], t.prototype, "firstUiPlayLogic", void 0);
return r([ ae.atomClass("G3_FHome_WorldLoadProgressLogic") ], t);
}(ae.LogicAtom);
o.G3_FHome_WorldLoadProgressLogic = c;
cc._RF.pop();
}, {} ],
G3_FHome_WorldLoadProgressSignal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bc799RzHMFCK6P6TU00jsVx", "G3_FHome_WorldLoadProgressSignal");
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
o.G3_FHome_WorldLoadProgressSignal = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
var o;
r([ ae.bindAtom("G_FAtom_RootDomain"), a("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], t.prototype, "rootDomain", void 0);
return r([ ae.atomClass("G3_FHome_WorldLoadProgressSignal") ], t);
}(ae.SignalAtom);
o.G3_FHome_WorldLoadProgressSignal = c;
cc._RF.pop();
}, {} ]
}, {}, [ "G3_FHome_AeIndex", "G3_FHome_Namespace", "G3_FHome_Asset", "G3_FHome_BackConfirmUiCancelChain", "G3_FHome_BackConfirmUiOkChain", "G3_FHome_BackConfirmUiOkToFirstUiBackChain", "G3_FHome_ExitChannelChain", "G3_FHome_FirstUiBackChain", "G3_FHome_FirstUiBackKeyChain", "G3_FHome_FirstUiBackKeyDirectChain", "G3_FHome_FirstUiChallengeChain", "G3_FHome_FirstUiHomeChain", "G3_FHome_FirstUiPlayChain", "G3_FHome_FirstUiSettingsChain", "G3_FHome_InitChain", "G3_FHome_UpdateToFirstUiEffectChain", "G3_FHome_WindowSizeChain", "G3_FHome_WorldLoadProgressChain", "G3_FHome_ExitChannel", "G3_FHome_Config", "G3_FHome_SkinConfig", "G3_FHome_BackConfirmUiDomain", "G3_FHome_FirstUiDomain", "G3_FHome_GetSchemeValueFunction", "G3_FHome_BackConfirmUiCancelLogic", "G3_FHome_BackConfirmUiOkLogic", "G3_FHome_BackConfirmUiShowLogic", "G3_FHome_ExitChannelLogic", "G3_FHome_FirstUiBackDispatchLogic", "G3_FHome_FirstUiBackKeyDirectDispatchLogic", "G3_FHome_FirstUiBackKeyDispatchLogic", "G3_FHome_FirstUiBackLogic", "G3_FHome_FirstUiChallengeLogic", "G3_FHome_FirstUiEffectLogic", "G3_FHome_FirstUiHomeLogic", "G3_FHome_FirstUiPlayDispatchLogic", "G3_FHome_FirstUiPlayLogic", "G3_FHome_FirstUiSettingsLogic", "G3_FHome_FirstUiStartLogic", "G3_FHome_GameDataLogic", "G3_FHome_InitLogic", "G3_FHome_SkinInitLogic", "G3_FHome_SkinSwitchLogic", "G3_FHome_WindowSizeLogic", "G3_FHome_WorldLoadProgressLogic", "G3_FHome_BackConfirmUiRender", "G3_FHome_FirstUiRender", "G3_FHome_BackConfirmUiCancelSignal", "G3_FHome_BackConfirmUiOkSignal", "G3_FHome_BackConfirmUiShowSignal", "G3_FHome_ExitChannelSignal", "G3_FHome_FirstUiBackSignal", "G3_FHome_FirstUiChallengeSignal", "G3_FHome_FirstUiEffectSignal", "G3_FHome_FirstUiHomeSignal", "G3_FHome_FirstUiInitSignal", "G3_FHome_FirstUiPlaySignal", "G3_FHome_FirstUiSettingsSignal", "G3_FHome_SkinSwitchSignal", "G3_FHome_WindowSizeSignal", "G3_FHome_WorldLoadProgressSignal", "G3_FHome_WorldAtom" ]);
//# sourceMappingURL=index.js.map
