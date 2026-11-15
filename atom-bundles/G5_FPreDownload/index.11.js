window.__require = function e(o, t, r) {
function n(c, i) {
if (!t[c]) {
if (!o[c]) {
var _ = c.split("/");
_ = _[_.length - 1];
if (!o[_]) {
var f = "function" == typeof __require && __require;
if (!i && f) return f(_, !0);
if (a) return a(_, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = _;
}
var l = t[c] = {
exports: {}
};
o[c][0].call(l.exports, function(e) {
return n(o[c][1][e] || e);
}, l, l.exports, e, o, t, r);
}
return t[c].exports;
}
for (var a = "function" == typeof __require && __require, c = 0; c < r.length; c++) n(r[c]);
return n;
}({
G5_FPreDownload_AeIndex: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "8a13bYTJ5xEhoIsRMy4qw95", "G5_FPreDownload_AeIndex");
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G5_FPreDownload = void 0;
var r = e("./G5_FPreDownload_Namespace");
Object.defineProperty(t, "G5_FPreDownload", {
enumerable: !0,
get: function() {
return r.G5_FPreDownload;
}
});
cc._RF.pop();
}, {
"./G5_FPreDownload_Namespace": "G5_FPreDownload_Namespace"
} ],
G5_FPreDownload_Config: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "41004DxMAdDWYrN8KdUSWRT", "G5_FPreDownload_Config");
var r, n = this && this.__extends || (r = function(e, o) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
r(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), a = this && this.__decorate || function(e, o, t, r) {
var n, a = arguments.length, c = a < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, t) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, o, t, r); else for (var i = e.length - 1; i >= 0; i--) (n = e[i]) && (c = (a < 3 ? n(c) : a > 3 ? n(o, t, c) : n(o, t)) || c);
return a > 3 && c && Object.defineProperty(o, t, c), c;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G5_FPreDownload_Config = void 0;
var c = function(e) {
n(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineConfig = function() {
return {
AllRes: [ this.url("G5_FBase")("res") ]
};
};
return a([ ae.atomClass("G5_FPreDownload_Config") ], o);
}(ae.ConfigAtom);
t.G5_FPreDownload_Config = c;
cc._RF.pop();
}, {} ],
G5_FPreDownload_Load: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "cfa1fZGRKxJapZC8CY8nF3H", "G5_FPreDownload_Load");
var r, n = this && this.__extends || (r = function(e, o) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
r(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), a = this && this.__decorate || function(e, o, t, r) {
var n, a = arguments.length, c = a < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, t) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, o, t, r); else for (var i = e.length - 1; i >= 0; i--) (n = e[i]) && (c = (a < 3 ? n(c) : a > 3 ? n(o, t, c) : n(o, t)) || c);
return a > 3 && c && Object.defineProperty(o, t, c), c;
}, c = this && this.__metadata || function(e, o) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, o);
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G5_FPreDownload_Load = void 0;
var i = function(e) {
n(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
o.prototype.defineLoad = function() {
return {
onlyDownload: !0,
directories: this.dirAsset.allRes
};
};
var t;
a([ ae.bindAtom("G5_FBase_DirAsset"), c("design:type", "function" == typeof (t = "undefined" != typeof ae && ae.AtomTypeInfer) ? t : Object) ], o.prototype, "dirAsset", void 0);
return a([ ae.atomClass("G5_FPreDownload_Load") ], o);
}(ae.LoadAtom);
t.G5_FPreDownload_Load = i;
cc._RF.pop();
}, {} ],
G5_FPreDownload_Namespace: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "2cdbcfshlxEE5qiTvrA1YoX", "G5_FPreDownload_Namespace");
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G5_FPreDownload = void 0;
(function(e) {
var o;
(e.FeatureDescription || (e.FeatureDescription = {})).Description = "g5下载世界";
(function(e) {
e.Name = "G5";
})(o = e.GameName || (e.GameName = {}));
(function(e) {
e[e.Name = o.Name + "_FPreDownload"] = "Name";
})(e.FeatureName || (e.FeatureName = {}));
(function(e) {
e[e.Version = 11] = "Version";
e.CreateTime = "2026-03-13 14:22:36";
})(e.BundleInfo || (e.BundleInfo = {}));
})(t.G5_FPreDownload || (t.G5_FPreDownload = {}));
cc._RF.pop();
}, {} ],
G5_FPreDownload_World: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "671fcGuVrJGw4piFLKwu1qo", "G5_FPreDownload_World");
var r, n = this && this.__extends || (r = function(e, o) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, o) {
e.__proto__ = o;
} || function(e, o) {
for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
})(e, o);
}, function(e, o) {
r(e, o);
function t() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t());
}), a = this && this.__decorate || function(e, o, t, r) {
var n, a = arguments.length, c = a < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, t) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, o, t, r); else for (var i = e.length - 1; i >= 0; i--) (n = e[i]) && (c = (a < 3 ? n(c) : a > 3 ? n(o, t, c) : n(o, t)) || c);
return a > 3 && c && Object.defineProperty(o, t, c), c;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.G5_FPreDownload_World = void 0;
var c = function(e) {
n(o, e);
function o() {
return null !== e && e.apply(this, arguments) || this;
}
return a([ ae.atomClass("G5_FPreDownload_World") ], o);
}(ae.WorldAtom);
t.G5_FPreDownload_World = c;
cc._RF.pop();
}, {} ]
}, {}, [ "G5_FPreDownload_AeIndex", "G5_FPreDownload_Namespace", "G5_FPreDownload_Config", "G5_FPreDownload_Load", "G5_FPreDownload_World" ]);
//# sourceMappingURL=index.js.map
