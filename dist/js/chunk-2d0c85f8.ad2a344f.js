(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c85f8"],{5535:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),s={class:"container"},a={class:"jumbotron"},r=Object(o["h"])("div",null,null,-1);function c(e,t,n,c,u,d){var i=Object(o["E"])("Footer");return Object(o["x"])(),Object(o["g"])(o["a"],null,[Object(o["h"])("div",s,[Object(o["h"])("header",a,[Object(o["h"])("h3",null,Object(o["H"])(u.content),1)]),r]),Object(o["k"])(i)],64)}n("d3b7"),n("25f0");var u=n("2d82"),d=n("30ef"),i=n("fd2d"),p={name:"User",components:{Footer:i["a"]},data:function(){return{content:""}},mounted:function(){var e=this;this.currentUser||this.$router.push("/Groupomania-app/home"),u["a"].getUserBoard().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString(),t.response&&403===t.response.status&&d["a"].dispatch("logout")}))}};p.render=c;t["default"]=p}}]);
//# sourceMappingURL=chunk-2d0c85f8.ad2a344f.js.map