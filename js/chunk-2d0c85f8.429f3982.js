(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c85f8"],{5535:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),s={class:"container"},r={class:"jumbotron"},a=Object(o["h"])("div",null,null,-1);function c(e,t,n,c,u,d){var i=Object(o["E"])("Footer");return Object(o["x"])(),Object(o["g"])(o["a"],null,[Object(o["h"])("div",s,[Object(o["h"])("header",r,[Object(o["h"])("h3",null,Object(o["H"])(u.content),1)]),a]),Object(o["k"])(i)],64)}n("d3b7"),n("25f0");var u=n("2d82"),d=n("30ef"),i=n("fd2d"),h={name:"User",components:{Footer:i["a"]},data:function(){return{content:""}},mounted:function(){var e=this;this.currentUser||this.$router.push("/home"),u["a"].getUserBoard().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString(),t.response&&403===t.response.status&&d["a"].dispatch("logout")}))}};h.render=c;t["default"]=h}}]);
//# sourceMappingURL=chunk-2d0c85f8.429f3982.js.map