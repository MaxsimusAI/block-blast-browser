window.__require = function e(o, n, t) {
function r(f, c) {
if (!n[f]) {
if (!o[f]) {
var _ = f.split("/");
_ = _[_.length - 1];
if (!o[_]) {
var a = "function" == typeof __require && __require;
if (!c && a) return a(_, !0);
if (i) return i(_, !0);
throw new Error("Cannot find module '" + f + "'");
}
f = _;
}
var l = n[f] = {
exports: {}
};
o[f][0].call(l.exports, function(e) {
return r(o[f][1][e] || e);
}, l, l.exports, e, o, n, t);
}
return n[f].exports;
}
for (var i = "function" == typeof __require && __require, f = 0; f < t.length; f++) r(t[f]);
return r;
}({
G15_FWorldConfig_AeIndex: [ function(e, o, n) {
"use strict";
cc._RF.push(o, "32cb2ZUErlJ36hv+Ed2RQ06", "G15_FWorldConfig_AeIndex");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FWorldConfig = void 0;
var t = e("./G15_FWorldConfig_Namespace");
Object.defineProperty(n, "G15_FWorldConfig", {
enumerable: !0,
get: function() {
return t.G15_FWorldConfig;
}
});
cc._RF.pop();
}, {
"./G15_FWorldConfig_Namespace": "G15_FWorldConfig_Namespace"
} ],
G15_FWorldConfig_Namespace: [ function(e, o, n) {
"use strict";
cc._RF.push(o, "bc2efoEsGNJhK3pWN79LVgU", "G15_FWorldConfig_Namespace");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FWorldConfig = void 0;
(function(e) {
var o;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "G15专用世界配置";
(function(e) {
e.Name = "G15";
})(o = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = o.Name + "_FWorldConfig"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 7] = "Version";
e.CreateTime = "2026-05-14 10:50:23";
})(e.BundleInfo || (e.BundleInfo = {}));
})(n.G15_FWorldConfig || (n.G15_FWorldConfig = {}));
cc._RF.pop();
}, {} ],
G15_FWorldConfig_WorldConfigGen: [ function(e, o, n) {
"use strict";
cc._RF.push(o, "56af0AdC41AWo0Y5bv1Xym/", "G15_FWorldConfig_WorldConfigGen");
var t, r = this && this.__extends || (t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
})(e, o);
}, function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
}), i = this && this.__decorate || function(e, o, n, t) {
var r, i = arguments.length, f = i < 3 ? o : null === t ? t = Object.getOwnPropertyDescriptor(o, n) : t;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) f = Reflect.decorate(e, o, n, t); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (f = (i < 3 ? r(f) : i > 3 ? r(o, n, f) : r(o, n)) || f);
return i > 3 && f && Object.defineProperty(o, n, f), f;
}, f = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.G15_FWorldConfig_WorldConfigGen = void 0;
var c = function(e) {
r(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.onExecute = function() {
if (!this.worldConfigs.worldConfigs) {
this.worldConfigs.multiTouch = !0;
this.worldConfigs.worldConfigs = {};
}
this.worldConfigs.worldConfigs.G15_FBase_WorldAtom = {
multiTouch: !0
};
};
var n;
i([ ae.onChain, ae.bindAtom("G0_FOriginal_Config"), f("design:type", "function" == typeof (n = "undefined" != typeof ae && ae.AtomTypeInfer) ? n : Object) ], o.prototype, "worldConfigs", void 0);
return i([ ae.atomClass("G15_FWorldConfig_WorldConfigGen") ], o);
}(ae.LogicAtom);
n.G15_FWorldConfig_WorldConfigGen = c;
cc._RF.pop();
}, {} ]
}, {}, [ "G15_FWorldConfig_AeIndex", "G15_FWorldConfig_Namespace", "G15_FWorldConfig_WorldConfigGen" ]);
//# sourceMappingURL=index.js.map
