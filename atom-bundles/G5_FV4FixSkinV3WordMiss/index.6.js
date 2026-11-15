window.__require = function e(i, o, n) {
function t(c, s) {
if (!o[c]) {
if (!i[c]) {
var p = c.split("/");
p = p[p.length - 1];
if (!i[p]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(p, !0);
if (r) return r(p, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = p;
}
var _ = o[c] = {
exports: {}
};
i[c][0].call(_.exports, function(e) {
return t(i[c][1][e] || e);
}, _, _.exports, e, i, o, n);
}
return o[c].exports;
}
for (var r = "function" == typeof __require && __require, c = 0; c < n.length; c++) t(n[c]);
return t;
}({
G5_FV4FixSkinV3WordMiss_AeIndex: [ function(e, i, o) {
"use strict";
cc._RF.push(i, "4b7c7w7CwZOvrJQh5hhZGxF", "G5_FV4FixSkinV3WordMiss_AeIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FV4FixSkinV3WordMiss = void 0;
var n = e("./G5_FV4FixSkinV3WordMiss_Namespace");
Object.defineProperty(o, "G5_FV4FixSkinV3WordMiss", {
enumerable: !0,
get: function() {
return n.G5_FV4FixSkinV3WordMiss;
}
});
cc._RF.pop();
}, {
"./G5_FV4FixSkinV3WordMiss_Namespace": "G5_FV4FixSkinV3WordMiss_Namespace"
} ],
G5_FV4FixSkinV3WordMiss_ComboPopupRenderLogicSkinV3: [ function(e, i, o) {
"use strict";
cc._RF.push(i, "c8796Z3/9RAcq60TD+qf6M1", "G5_FV4FixSkinV3WordMiss_ComboPopupRenderLogicSkinV3");
var n, t = this && this.__extends || (n = function(e, i) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, i) {
e.__proto__ = i;
} || function(e, i) {
for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
})(e, i);
}, function(e, i) {
n(e, i);
function o() {
this.constructor = e;
}
e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o());
}), r = this && this.__decorate || function(e, i, o, n) {
var t, r = arguments.length, c = r < 3 ? i : null === n ? n = Object.getOwnPropertyDescriptor(i, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, i, o, n); else for (var s = e.length - 1; s >= 0; s--) (t = e[s]) && (c = (r < 3 ? t(c) : r > 3 ? t(i, o, c) : t(i, o)) || c);
return r > 3 && c && Object.defineProperty(i, o, c), c;
}, c = this && this.__metadata || function(e, i) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, i);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FV4FixSkinV3WordMiss_ComboPopupRenderLogicSkinV3 = void 0;
var s = function(e) {
t(i, e);
function i() {
return null !== e && e.apply(this, arguments) || this;
}
i.prototype.onExecute = function() {
delete this.comboPopupRenderSkinV3.ComboSpine.event.complete;
};
var o;
r([ ae.onChain, ae.bindAtom("G5_FSkinV3_ComboPopupRender"), c("design:type", "function" == typeof (o = "undefined" != typeof ae && ae.AtomTypeInfer) ? o : Object) ], i.prototype, "comboPopupRenderSkinV3", void 0);
return r([ ae.atomClass("G5_FV4FixSkinV3WordMiss_ComboPopupRenderLogicSkinV3") ], i);
}(ae.LogicAtom);
o.G5_FV4FixSkinV3WordMiss_ComboPopupRenderLogicSkinV3 = s;
cc._RF.pop();
}, {} ],
G5_FV4FixSkinV3WordMiss_Namespace: [ function(e, i, o) {
"use strict";
cc._RF.push(i, "d1cc5tvEKhF3KzqOq0wxIfm", "G5_FV4FixSkinV3WordMiss_Namespace");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.G5_FV4FixSkinV3WordMiss = void 0;
(function(e) {
var i;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "修复三期换肤激励次偶现不出现的bug";
(function(e) {
e.Name = "G5";
})(i = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = i.Name + "_FV4FixSkinV3WordMiss"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 6] = "Version";
e.CreateTime = "2026-04-10 15:27:51";
})(e.BundleInfo || (e.BundleInfo = {}));
})(o.G5_FV4FixSkinV3WordMiss || (o.G5_FV4FixSkinV3WordMiss = {}));
cc._RF.pop();
}, {} ]
}, {}, [ "G5_FV4FixSkinV3WordMiss_AeIndex", "G5_FV4FixSkinV3WordMiss_Namespace", "G5_FV4FixSkinV3WordMiss_ComboPopupRenderLogicSkinV3" ]);