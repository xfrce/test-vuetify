(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63b0"],{7254:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-container",[a("div",{attrs:{id:"cnt"}},[a("h2",[t._v(t._s(this.$spn.starships))]),t._l(t.bag.results,(function(n,e){return a("div",{key:e},[a("div",[t._v(t._s(n.name))])])}))],2)])},s=[],i=a("bc3a"),o=a.n(i),c={name:"StarshipsView",watch:{$route:{immediate:!0,handler:function(t){document.title=t.meta.title||this.$spn.starships}}},components:{},data:function(){return{bag:[]}},mounted:function(){var t=this;o.a.get("https://swapi.dev/api/starships/?format=json").then((function(n){t.bag=n.data})).catch((function(t){console.log(t)}))}},r=c,u=a("2877"),d=a("6544"),h=a.n(d),l=a("a523"),p=Object(u["a"])(r,e,s,!1,null,null,null);n["default"]=p.exports;h()(p,{VContainer:l["a"]})}}]);
//# sourceMappingURL=chunk-2d0d63b0.19fcd1e7.js.map