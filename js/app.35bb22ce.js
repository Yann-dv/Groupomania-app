(function(e){function t(t){for(var n,a,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);b&&b(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2487cbb7":"86e6cb77","chunk-2d0c85f8":"429f3982","chunk-2d0e5991":"1588b3e9","chunk-7fb4ec29":"9cbc6178"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-2487cbb7":1,"chunk-7fb4ec29":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2487cbb7":"186e18bb","chunk-2d0c85f8":"31d6cfe0","chunk-2d0e5991":"31d6cfe0","chunk-7fb4ec29":"50ec3a42"}[e]+".css",o=i.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],b.parentNode.removeChild(b),r(s)},b.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(b);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Groupomania-app/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var b=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1915:function(e,t,r){e.exports=r.p+"img/banner_logo_w.3e32ebae.png"},"29bf":function(e,t,r){"use strict";var n=r("d4ec"),a=r("bee2"),o=function(){function e(){Object(n["a"])(this,e)}return Object(a["a"])(e,[{key:"getLocalRefreshToken",value:function(){var e=JSON.parse(localStorage.getItem("user"));return null===e||void 0===e?void 0:e.refreshToken}},{key:"getLocalAccessToken",value:function(){var e=JSON.parse(localStorage.getItem("user"));return null===e||void 0===e?void 0:e.accessToken}},{key:"updateLocalAccessToken",value:function(e){var t=JSON.parse(localStorage.getItem("user"));t.accessToken=e,localStorage.setItem("user",JSON.stringify(t))}},{key:"getUser",value:function(){return JSON.parse(localStorage.getItem("user"))}},{key:"setUser",value:function(e){localStorage.setItem("user",JSON.stringify(e))}},{key:"removeUser",value:function(){localStorage.removeItem("user"),window.location="/home"}}]),e}();t["a"]=new o},"2d82":function(e,t,r){"use strict";var n=r("d4ec"),a=r("bee2"),o=r("7424"),s=function(){function e(){Object(n["a"])(this,e)}return Object(a["a"])(e,[{key:"getPublicContent",value:function(){return o["a"].get("/public")}},{key:"getUserBoard",value:function(){return o["a"].get("/user")}},{key:"getUserProfile",value:function(){return o["a"].get("/profile")}},{key:"getModeratorBoard",value:function(){return o["a"].get("/mod")}},{key:"getAdminBoard",value:function(){return o["a"].get("/admin")}},{key:"updateUser",value:function(e){var t=e.gender,r=e.birthday,n=e.firstname,a=e.lastname,s=e.username,c=e.email,i=e.password,u=e.updatedAt;return o["a"].put("/updateUser",{gender:t,birthday:r,firstname:n,lastname:a,username:s,email:c,password:i,updatedAt:u})}},{key:"deleteUser",value:function(e){return o["a"].put("/deleteUser",{id:e})}}]),e}();t["a"]=new s},"30ef":function(e,t,r){"use strict";var n={on:function(e,t){document.addEventListener(e,(function(e){return t(e.detail)}))},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}};t["a"]=n},"48fa":function(e,t,r){"use strict";r("529d")},"529d":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a=r("1915"),o=r.n(a);Object(n["A"])("data-v-3dfc0e88");var s={id:"app"},c={class:"navbar navbar-expand-lg navbar-dark"},i=Object(n["h"])("img",{src:o.a,alt:"Logo Groupomania",class:"px-2"},null,-1),u=Object(n["h"])("img",{src:o.a,alt:"Logo Groupomania",class:"px-2"},null,-1),l={class:"navbar-nav me-auto"},d={key:0,class:"nav-item"},b=Object(n["j"])("Accueil "),f={key:1,class:"nav-item"},m=Object(n["j"])("Administrateur - Forum"),p={key:2,class:"nav-item"},h=Object(n["j"])("Moderateur- Forum"),g={key:3,class:"nav-item"},O=Object(n["j"])("Forum de discussion"),j={key:2,class:"navbar-nav ms-auto"},v={class:"nav-item"},k=Object(n["j"])(" Inscription "),y={class:"nav-item"},w=Object(n["j"])(" Connection "),x={key:3,class:"navbar-nav ms-auto"},_={class:"nav-item"},E={class:"nav-item pe-1"},S=Object(n["j"])(" Déconnection "),L={class:"container-fluid"};function I(e,t,r,a,o,I){var U=Object(n["E"])("router-link"),A=Object(n["E"])("font-awesome-icon"),P=Object(n["E"])("router-view");return Object(n["x"])(),Object(n["g"])("div",s,[Object(n["h"])("nav",c,[I.currentUser?Object(n["f"])("",!0):(Object(n["x"])(),Object(n["e"])(U,{key:0,to:"/home",class:"nav-link fs-4"},{default:Object(n["O"])((function(){return[i]})),_:1})),I.currentUser?(Object(n["x"])(),Object(n["e"])(U,{key:1,to:"/forum",class:"nav-link fs-4"},{default:Object(n["O"])((function(){return[u]})),_:1})):Object(n["f"])("",!0),Object(n["h"])("div",l,[this.$store.state.auth.status.loggedIn?Object(n["f"])("",!0):(Object(n["x"])(),Object(n["g"])("li",d,[Object(n["k"])(U,{to:"/home",class:"nav-link fs-4"},{default:Object(n["O"])((function(){return[Object(n["k"])(A,{icon:"home"}),b]})),_:1})])),I.showAdminBoard?(Object(n["x"])(),Object(n["g"])("li",f,[Object(n["k"])(U,{to:"/forum",class:"nav-link fs-4"},{default:Object(n["O"])((function(){return[m]})),_:1})])):Object(n["f"])("",!0),I.showModeratorBoard?(Object(n["x"])(),Object(n["g"])("li",p,[Object(n["k"])(U,{to:"/forum",class:"nav-link fs-4"},{default:Object(n["O"])((function(){return[h]})),_:1})])):Object(n["f"])("",!0),I.showModeratorBoard?Object(n["f"])("",!0):(Object(n["x"])(),Object(n["g"])("li",g,[I.currentUser?(Object(n["x"])(),Object(n["e"])(U,{key:0,to:"/forum",class:"nav-link fs-4 ps-1"},{default:Object(n["O"])((function(){return[O]})),_:1})):Object(n["f"])("",!0)]))]),I.currentUser?Object(n["f"])("",!0):(Object(n["x"])(),Object(n["g"])("div",j,[Object(n["h"])("li",v,[Object(n["k"])(U,{to:"/register",class:"nav-link fs-4"},{default:Object(n["O"])((function(){return[Object(n["k"])(A,{icon:"user-plus"}),k]})),_:1})]),Object(n["h"])("li",y,[Object(n["k"])(U,{to:"/login",class:"nav-link fs-4"},{default:Object(n["O"])((function(){return[Object(n["k"])(A,{icon:"sign-in-alt"}),w]})),_:1})])])),I.currentUser?(Object(n["x"])(),Object(n["g"])("div",x,[Object(n["h"])("li",_,[Object(n["k"])(U,{to:"/profile",class:"nav-link fs-4"},{default:Object(n["O"])((function(){return[Object(n["k"])(A,{icon:"user"}),Object(n["j"])(" "+Object(n["H"])(I.currentUser.username),1)]})),_:1})]),Object(n["h"])("li",E,[Object(n["h"])("a",{class:"nav-link fs-4",onClick:t[0]||(t[0]=Object(n["Q"])((function(){return I.logOut&&I.logOut.apply(I,arguments)}),["prevent"]))},[Object(n["k"])(A,{icon:"sign-out-alt"}),S])])])):Object(n["f"])("",!0)]),Object(n["h"])("div",L,[Object(n["k"])(P)])])}Object(n["y"])();r("caad"),r("2532");var U=r("30ef"),A={data:function(){return{mainColor:"#122442",modifyProfile:"false"}},computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/home")}},mounted:function(){var e=this;U["a"].on("logout",(function(){e.logOut()}))},beforeUnmount:function(){U["a"].remove("logout")}},P=function(){Object(n["K"])((function(e){return{"674f8751":e.mainColor}}))},F=A.setup;A.setup=F?function(e,t){return P(),F(e,t)}:P;var T=A;r("ceb4");T.render=I,T.__scopeId="data-v-3dfc0e88";var q=T,C=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02"));Object(n["A"])("data-v-4481f892");var M={class:"container"},G=Object(n["h"])("header",{class:"jumbotron"},[Object(n["h"])("h2",{id:"vueTitle",class:"mt-5 fw-bold title-content"},"Bienvenu sur le réseau social de Groupomania")],-1),N={class:"text-center"},R={class:"list-group"},$={class:"list-group-item"},B=Object(n["h"])("button",{class:"btn btn-primary btn-block fs-3 btn-lg mt-5 connection mt-2"},"Connexion",-1),J={class:"list-group-item"},z=Object(n["h"])("button",{class:"btn btn-secondary btn-block fs-3 mt-5 btn-lg connection mt-2"},"Inscription",-1);function D(e,t,r,a,o,s){var c=Object(n["E"])("router-link"),i=Object(n["E"])("Footer");return Object(n["x"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("div",M,[G,Object(n["h"])("div",N,[Object(n["h"])("ul",R,[Object(n["h"])("li",$,[Object(n["k"])(c,{to:"/login"},{default:Object(n["O"])((function(){return[B]})),_:1})]),Object(n["h"])("li",J,[Object(n["k"])(c,{to:"/register"},{default:Object(n["O"])((function(){return[z]})),_:1})])])])]),Object(n["k"])(i)],64)}Object(n["y"])();r("25f0");var H=r("2d82"),V=r("fd2d"),K=function(){return JSON.parse(localStorage.getItem("user"))},Z=K(),Q={name:"Home",components:{Footer:V["a"]},data:function(){return{content:""}},mounted:function(){var e=this;Z?Z&&this.$router.push("/forum"):H["a"].getPublicContent().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}))}};r("48fa");Q.render=D,Q.__scopeId="data-v-4481f892";var Y=Q,W={class:"col-md-12"},X={class:"card card-container border-light"},ee=Object(n["h"])("img",{id:"profile-img",class:"mx-auto profile-img-card",style:{"max-height":"20rem","max-width":"18rem"},src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"},null,-1),te={class:"form-group"},re=Object(n["h"])("label",{for:"username",class:"fs-4 fw-bold"},"Identifiant",-1),ne={class:"form-group"},ae=Object(n["h"])("label",{for:"password",class:"fs-4 fw-bold"},"Mot de passe",-1),oe={class:"form-group"},se=["disabled"],ce={class:"spinner-border spinner-border-sm"},ie=Object(n["h"])("span",{class:""},"Connection",-1),ue={class:"form-group"},le={key:0,class:"alert alert-danger",role:"alert"};function de(e,t,r,a,o,s){var c=Object(n["E"])("Field"),i=Object(n["E"])("ErrorMessage"),u=Object(n["E"])("Form"),l=Object(n["E"])("Footer");return Object(n["x"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("div",W,[Object(n["h"])("div",X,[ee,Object(n["k"])(u,{onSubmit:s.handleLogin,"validation-schema":o.schema},{default:Object(n["O"])((function(){return[Object(n["h"])("div",te,[re,Object(n["k"])(c,{name:"username",type:"text",class:"form-control"}),Object(n["k"])(i,{name:"username",class:"error-feedback",style:{color:"red"}})]),Object(n["h"])("div",ne,[ae,Object(n["k"])(c,{name:"password",type:"password",class:"form-control"}),Object(n["k"])(i,{name:"password",class:"error-feedback",style:{color:"red"}})]),Object(n["h"])("div",oe,[Object(n["h"])("button",{class:"btn btn-primary btn-block connection mt-2",disabled:o.loading},[Object(n["P"])(Object(n["h"])("span",ce,null,512),[[n["L"],o.loading]]),ie],8,se)]),Object(n["h"])("div",ue,[o.message?(Object(n["x"])(),Object(n["g"])("div",le,Object(n["H"])(o.message),1)):Object(n["f"])("",!0)])]})),_:1},8,["onSubmit","validation-schema"])])]),Object(n["k"])(l)],64)}var be=r("7bb1"),fe=r("506a"),me={name:"Login",components:{Footer:V["a"],Form:be["c"],Field:be["b"],ErrorMessage:be["a"]},data:function(){var e=fe["b"]().shape({username:fe["c"]().required("L'identifiant utilisateur est requis !"),password:fe["c"]().required("Le mot de passe est requis !")});return{loading:!1,message:"",schema:e}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/forum")},methods:{handleLogin:function(e){var t=this;this.loading=!0,this.$store.dispatch("auth/login",e).then((function(){t.$router.push("/forum")}),(function(e){t.loading=!1,t.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString()}))}}};me.render=de;var pe=me,he={class:"col-md-12"},ge={class:"card card-container border-light"},Oe=Object(n["h"])("img",{id:"profile-img",class:"mx-auto profile-img-card",style:{"max-height":"20rem","max-width":"18rem"},src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"},null,-1),je={key:0},ve={class:"my-2 form-group gender-radios"},ke=Object(n["h"])("label",{for:"Homme",class:"fs-5 ms-1"},"Homme",-1),ye=Object(n["h"])("label",{for:"Femme",class:"fs-5 ms-1"},"Femme",-1),we={class:"form-group"},xe=Object(n["h"])("label",{for:"firstName",class:"fs-4 fw-bold"},"Prénom :",-1),_e={class:"form-group"},Ee=Object(n["h"])("label",{for:"lastName",class:"fs-4 fw-bold"},"Nom :",-1),Se={class:"form-group"},Le=Object(n["h"])("label",{for:"birthday",class:"fs-4 fw-bold"},"Date de naissance :",-1),Ie={class:"form-group"},Ue=Object(n["h"])("label",{for:"username",class:"fs-4 fw-bold"},"Identifiant",-1),Ae={class:"form-group"},Pe=Object(n["h"])("label",{for:"email",class:"fs-4 fw-bold"},"Email",-1),Fe={class:"form-group"},Te=Object(n["h"])("label",{for:"password",class:"fs-4 fw-bold"},"Mot de passe",-1),qe={class:"form-group my-3"},Ce=["disabled"],Me={class:"spinner-border spinner-border-sm"},Ge=Object(n["j"])(" S'inscrire "),Ne=Object(n["h"])("button",{type:"reset",id:"refresh-inscription",class:"mx-3 btn btn-secondary btn-block","aria-label":"Effacer ma saisie",value:"Effacer ma saisie"},"Effacer ma saisie",-1);function Re(e,t,r,a,o,s){var c=Object(n["E"])("Field"),i=Object(n["E"])("ErrorMessage"),u=Object(n["E"])("Form"),l=Object(n["E"])("Footer");return Object(n["x"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("div",he,[Object(n["h"])("div",ge,[Oe,Object(n["k"])(u,{onSubmit:s.handleRegister,"validation-schema":o.schema,id:"register-form"},{default:Object(n["O"])((function(){return[o.successful?Object(n["f"])("",!0):(Object(n["x"])(),Object(n["g"])("div",je,[Object(n["h"])("div",ve,[Object(n["k"])(c,{name:"gender",type:"radio",value:"Homme"}),ke,Object(n["k"])(c,{name:"gender",class:"ms-2",type:"radio",value:"Femme"}),ye,Object(n["k"])(i,{name:"gender",class:"error-feedback ms-3",style:{color:"red"}})]),Object(n["h"])("div",we,[xe,Object(n["k"])(c,{name:"firstname",type:"text",class:"form-control"}),Object(n["k"])(i,{name:"firstname",class:"error-feedback",style:{color:"red"}})]),Object(n["h"])("div",_e,[Ee,Object(n["k"])(c,{name:"lastname",type:"text",class:"form-control"}),Object(n["k"])(i,{name:"lastname",class:"error-feedback",style:{color:"red"}})]),Object(n["h"])("div",Se,[Le,Object(n["k"])(c,{name:"birthday",type:"text",class:"form-control"}),Object(n["k"])(i,{name:"birthday",class:"error-feedback",style:{color:"red"}})]),Object(n["h"])("div",Ie,[Ue,Object(n["k"])(c,{name:"username",type:"text",class:"form-control"}),Object(n["k"])(i,{name:"username",class:"error-feedback",style:{color:"red"}})]),Object(n["h"])("div",Ae,[Pe,Object(n["k"])(c,{name:"email",type:"email",class:"form-control"}),Object(n["k"])(i,{name:"email",class:"error-feedback",style:{color:"red"}})]),Object(n["h"])("div",Fe,[Te,Object(n["k"])(c,{name:"password",type:"password",class:"form-control"}),Object(n["k"])(i,{name:"password",class:"error-feedback",style:{color:"red"}})]),Object(n["h"])("div",qe,[Object(n["h"])("button",{class:"btn btn-primary btn-block",disabled:o.loading},[Object(n["P"])(Object(n["h"])("span",Me,null,512),[[n["L"],o.loading]]),Ge],8,Ce),Ne])]))]})),_:1},8,["onSubmit","validation-schema"]),o.message?(Object(n["x"])(),Object(n["g"])("div",{key:0,class:Object(n["r"])(["alert",o.successful?"alert-success":"alert-danger"])},Object(n["H"])(o.message),3)):Object(n["f"])("",!0)])]),Object(n["k"])(l)],64)}var $e={name:"Register",components:{Footer:V["a"],Form:be["c"],Field:be["b"],ErrorMessage:be["a"]},data:function(){var e=fe["b"]().shape({gender:fe["c"]().required("Veuillez choisir une option"),firstname:fe["c"]().required("Veuillez entrer votre Nom").max(50,"Le nom ne doit pas dépasser 50 caractères!").matches(/^[aA-zZ\s]+$/,"Veuillez n'utiliser que des lettres."),lastname:fe["c"]().required("Veuillez entrer votre Prénom").max(50,"Le nom ne doit pas dépasser 50 caractères!").matches(/^[aA-zZ\s]+$/,"Veuillez n'utiliser que des lettres."),birthday:fe["a"]().max(new Date,"Date impossible car située dans le futur").required("Veuillez entrez une date au format AAAA-MM-JJ, ex: 1979-12-31"),username:fe["c"]().required("Un identifiant est requis !").min(3,"L'identifiant doit contenir au moins 3 caractères!").max(20,"L'identifiant ne doit pas dépasser 20 caractères!"),email:fe["c"]().required("Un email est requis !").email("Email incorrect").max(50,"L'email ne doit pas dépasser 50 caractères!"),password:fe["c"]().required("Un mot de passe est requis !").min(6,"Le mot de passe doit contenir au moins 6 caractères !").max(40,"L'email ne doit pas dépasser 50 caractères !")});return{successful:!1,loading:!1,message:"",schema:e}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(e){var t=this;this.message="",this.successful=!1,this.loading=!0,this.$store.dispatch("auth/register",e).then((function(e){t.message=e.message,t.successful=!0,t.loading=!1}),(function(e){t.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),t.successful=!1,t.loading=!1}))}}};$e.render=Re;var Be=$e,Je=r("29bf"),ze=function(){return r.e("chunk-7fb4ec29").then(r.bind(null,"66aa"))},De=function(){return r.e("chunk-2d0c85f8").then(r.bind(null,"5535"))},He=function(){return r.e("chunk-2d0e5991").then(r.bind(null,"94bb"))},Ve=function(){return r.e("chunk-2487cbb7").then(r.bind(null,"0899"))},Ke=[{path:"/Groupomania-app/",name:"home",component:Y},{path:"/Groupomania-app/home",component:Y},{path:"/Groupomania-app/login",component:pe},{path:"/Groupomania-app/register",component:Be},{path:"/Groupomania-app/profile",name:"profile",component:ze},{path:"/Groupomania-app/admin",name:"admin",component:De},{path:"/Groupomania-app/mod",name:"moderator",component:He},{path:"/Groupomania-app/forum",name:"forum",component:Ve}],Ze=Object(C["a"])({history:Object(C["b"])(),routes:Ke});Ze.beforeEach((function(e,t,r){var n=["/Groupomania-app/login","/Groupomania-app/register","/Groupomania-app/home","/Groupomania-app/"],a=!n.includes(e.path),o=localStorage.getItem("user");a&&!o?(Je["a"].removeUser(),r("/Groupomania-app/home")):(Je["a"].getLocalRefreshToken(),r())}));var Qe=Ze,Ye=r("5502"),We=r("d4ec"),Xe=r("bee2"),et=r("7424"),tt=function(){function e(){Object(We["a"])(this,e)}return Object(Xe["a"])(e,[{key:"login",value:function(e){var t=e.username,r=e.password;return et["a"].post("/auth/signin",{username:t,password:r}).then((function(e){return e.data.accessToken&&Je["a"].setUser(e.data),e.data}))}},{key:"logout",value:function(){Je["a"].removeUser()}},{key:"register",value:function(e){var t=e.gender,r=e.birthday,n=e.firstname,a=e.lastname,o=e.username,s=e.email,c=e.password;return et["a"].post("/auth/signup",{gender:t,birthday:r,firstname:n,lastname:a,username:o,email:s,password:c})}}]),e}(),rt=new tt,nt=JSON.parse(localStorage.getItem("user")),at=nt?{status:{loggedIn:!0},user:nt}:{status:{loggedIn:!1},user:null},ot={namespaced:!0,state:at,actions:{login:function(e,t){var r=e.commit;return rt.login(t).then((function(e){return r("loginSuccess",e),Promise.resolve(e)}),(function(e){return r("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;rt.logout(),t("logout")},register:function(e,t){var r=e.commit;return rt.register(t).then((function(e){return r("registerSuccess"),Promise.resolve(e.data)}),(function(e){return r("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}},st=Object(Ye["a"])({modules:{auth:ot}}),ct=st,it=(r("7b17"),r("ab8b"),r("ecee")),ut=r("ad3d"),lt=r("c074"),dt=r("f2d1");it["c"].add(lt["e"],lt["d"],lt["a"],lt["f"],lt["h"],lt["g"],lt["b"],lt["c"],dt["a"]);var bt=r("1da1"),ft=(r("96cf"),function(e){et["a"].interceptors.request.use((function(e){var t=Je["a"].getLocalAccessToken();return t&&(e.headers["x-access-token"]=t),e}),(function(e){return Promise.reject(e)})),et["a"].interceptors.response.use((function(e){return e}),function(){var t=Object(bt["a"])(regeneratorRuntime.mark((function t(r){var n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=r.config,"/auth/signin"===n.url||!r.response){t.next=17;break}if(401!==r.response.status||n._retry){t.next=17;break}return n._retry=!0,t.prev=4,t.next=7,et["a"].post("/auth/refreshtoken",{refreshToken:Je["a"].getLocalRefreshToken()});case 7:return a=t.sent,o=a.data.accessToken,e.dispatch("auth/refreshToken",o),Je["a"].updateLocalAccessToken(o),t.abrupt("return",Object(et["a"])(n));case 14:return t.prev=14,t.t0=t["catch"](4),t.abrupt("return",Promise.reject(t.t0));case 17:return t.abrupt("return",Promise.reject(r));case 18:case"end":return t.stop()}}),t,null,[[4,14]])})));return function(e){return t.apply(this,arguments)}}())}),mt=ft;mt(ct),Object(n["d"])(q).use(Qe).use(ct).component("font-awesome-icon",ut["a"]).mount("#app")},"63ee":function(e,t,r){},7424:function(e,t,r){"use strict";var n=r("bc3a"),a=r.n(n),o=a.a.create({baseURL:"http://localhost:8080/api",headers:{"Content-Type":"application/json"}});t["a"]=o},"7f1f":function(e,t,r){},a430:function(e,t,r){"use strict";r("63ee")},ceb4:function(e,t,r){"use strict";r("7f1f")},fd2d:function(e,t,r){"use strict";var n=r("7a23");Object(n["A"])("data-v-c603b74e");var a={class:"footer container-fluid footer-background py-2 mt-3 mb-2"},o=Object(n["h"])("h3",{class:"text-center fs-4"},"À propos",-1),s=Object(n["i"])('<ul class="text-center mb-1" data-v-c603b74e><li data-v-c603b74e><a href="#" target="_blank" rel="noopener" data-v-c603b74e>À propos</a></li><li data-v-c603b74e><a href="#" target="_blank" rel="noopener" data-v-c603b74e>Carrières</a></li><li data-v-c603b74e><a href="#" target="_blank" rel="noopener" data-v-c603b74e>Conditions d&#39;utilisation</a></li><li data-v-c603b74e><a href="#" target="_blank" rel="noopener" data-v-c603b74e>Politique de Contenu</a></li><li data-v-c603b74e><a href="#" target="_blank" rel="noopener" data-v-c603b74e>Politique de Confidentialité</a></li><li data-v-c603b74e><a href="#" target="_blank" rel="noopener" data-v-c603b74e>Politique de Modération</a></li></ul>',1),c={class:"text-center my-0"};function i(e,t,r,i,u,l){var d=Object(n["E"])("router-link");return Object(n["x"])(),Object(n["g"])("div",a,[Object(n["k"])(d,{to:"/login"},{default:Object(n["O"])((function(){return[o]})),_:1}),s,Object(n["h"])("p",c,Object(n["H"])(l.copyright()),1)])}Object(n["y"])();var u={name:"Footer",methods:{copyright:function(){var e=(new Date).getFullYear();return"Copyright: Groupomania Inc © ".concat(e,". Tous droits réservés")}}};r("a430");u.render=i,u.__scopeId="data-v-c603b74e";t["a"]=u}});
//# sourceMappingURL=app.35bb22ce.js.map