(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"097d":function(t,e,a){"use strict";a("cab5")},"14a4":function(t,e,a){},1771:function(t,e,a){var n={"./ashmit.png":"b556","./bg_img1.jpg":"c464","./bg_img2.jpg":"a2a1","./bg_img3.jpg":"6152","./bg_img4.jpg":"ed2a","./bg_img5.jpg":"e234","./bg_img6.jpg":"7f4e","./bg_img7.jpg":"5a3f","./side-logo.png":"7a77"};function o(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id="1771"},1954:function(t,e,a){},"406e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"app"},[a("v-content",{staticStyle:{"background-color":"white"}},[a("router-view")],1),a("p-footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"font-weight-medium",attrs:{app:"",absolute:""}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("v-icon",{attrs:{color:"black",size:"30",dense:""}},[t._v("copyright")]),a("strong",[t._v("Ashmit Aryan — "+t._s((new Date).getFullYear())+"-"+t._s((new Date).getFullYear()+1)+" ")])],1)],1)},s=[],l={},c=l,p=a("2877"),u=a("6544"),d=a.n(u),f=a("62ad"),m=a("553a"),h=a("132d"),v=Object(p["a"])(c,r,s,!1,null,null,null),b=v.exports;d()(v,{VCol:f["a"],VFooter:m["a"],VIcon:h["a"]});var g={name:"App",components:{PFooter:b},data:function(){return{}}},x=g,_=a("7496"),y=a("a75b"),w=Object(p["a"])(x,o,i,!1,null,"6cd5fd53",null),k=w.exports;d()(w,{VApp:_["a"],VContent:y["a"]});var C=a("8c4f"),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("p-toolbar",{attrs:{btn1:"My Work",btn2:"Tech Explain",btn3:"Contact"}}),a("lander-view"),a("v-container",{staticClass:"mt-5"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"display-1 font-weight-bold",attrs:{id:"about"}},[t._v("This is me")])]),a("v-flex",{attrs:{xs12:"","mt-5":""}},[a("div",{staticStyle:{color:"black","font-size":"20px","font-weight":"bolder"}},[t._v(" "+t._s(t.aboutText)+" ")]),a("div",{staticStyle:{color:"black","font-size":"20px","font-weight":"bolder"}},[t._v(" Working on starting an app development business and always looking for new clients! Would love to talk to you about your idea. ")])])],1),a("v-layout",{attrs:{wrap:"","my-5":""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"display-1 font-weight-bold",attrs:{id:"portfolio"}},[t._v("My Work")])]),a("v-flex",{staticClass:"mt-5",attrs:{xs12:""}},[a("v-layout",{attrs:{wrap:""}},[[t._l(4,(function(e){return a("v-flex",{key:e,attrs:{xs12:"",sm6:"",md4:""}},[a("p-portfolio-app",{staticStyle:{color:"black","font-weight":"bolder","margin-left":"20px","margin-right":"20px","margin-top":"10px","margin-bottom":"10px"},attrs:{apps:t.allApps[e]}})],1)})),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("more-apps",{staticStyle:{color:"black","font-weight":"bolder","margin-left":"20px","margin-right":"20px","margin-top":"50px","margin-bottom":"10px"}})],1)]],2)],1)],1),a("v-layout",{attrs:{wrap:"","my-5":""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"display-1 font-weight-bold",attrs:{id:"techExp"}},[t._v(" Technology Explained ")])]),a("v-flex",{staticClass:"mt-5",attrs:{xs12:""}},[a("p-tech-explain",{attrs:{techExp:t.allTechExp}})],1)],1),a("v-layout",{attrs:{wrap:"","my-5":""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"display-1 font-weight-bold",attrs:{id:"techNews"}},[t._v(" Technology News ")])]),a("v-flex",{staticClass:"mt-5",attrs:{xs12:""}},[a("p-tech-news",{attrs:{techNews:t.allNews}})],1)],1),a("v-layout",{attrs:{wrap:"","my-5":""}},[a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("div",{staticClass:"display-1 font-weight-bold",attrs:{id:"contact"}},[t._v(" Connect With Me...... 😄😄 ")])]),t._l(t.getcontactLinks,(function(t,e){return[a("v-flex",{key:e,attrs:{sm6:"",md4:"",xs12:""}},[a("p-contact-info",{staticStyle:{color:"black","font-weight":"bolder"},attrs:{contact:t}})],1)]}))],2)],1)],1)},A=[],E=a("1da1"),j=a("5530"),T=(a("96cf"),a("d3b7"),a("25f0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticStyle:{"border-radius":"20px"},attrs:{elevation:"10",color:"error"}},[a("v-card-title",[a("v-layout",[a("v-flex",[a("v-card",{staticStyle:{"border-radius":"20px",border:"black solid 1px"},attrs:{href:t.apps.platforms[t.index].link,target:"_blank",elevation:"10",width:"100px",height:"100px",color:"#FF5252"}},[a("img",{attrs:{width:"100px",height:"100px",alt:"image",src:t.apps.logo}})])],1),a("v-flex",{attrs:{xs7:""}},[a("div",[t._v(t._s(t.apps.name))]),a("div",[a("v-chip",{attrs:{small:"",pill:"",color:"purple",dark:""}},[t._v(t._s(t.apps.price))])],1),t._l(t.apps.platforms,(function(e){return a("div",{key:e},[a("v-btn",{attrs:{href:e.link,target:"_blank",icon:""}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-"+t._s(e.icon))])],1)],1)}))],2)],1)],1),a("v-card-text",[t.disBool?a("div",{staticStyle:{color:"black","font-weight":"bolder"}},[t._v(t._s(t.apps.description))]):t._e(),a("div",{staticClass:"title mt-2",staticStyle:{color:"black","font-weight":"bolder"}},[t._v("Technologies Used")]),a("v-layout",[t._l(t.apps.tech_stack,(function(e,n){return[a("v-flex",{key:n,attrs:{xs3:""}},[a("div",{staticClass:"text-center"},[a("v-btn",{attrs:{icon:"",href:e.link,target:"_blank"}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-"+t._s(e.icon))])],1),a("div",{staticClass:"caption",staticStyle:{color:"black","font-weight":"bolder"}},[t._v(t._s(e.name))])],1)])]}))],2),t.codeBool?a("div",[a("div",{staticClass:"title mt-2",staticStyle:{color:"black","font-weight":"bolder"}},[t._v("Code")]),a("v-btn",{attrs:{icon:"",href:t.apps.code.link,target:"_blank"}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-"+t._s(t.apps.code.icon))])],1),a("div",{staticStyle:{color:"black","font-weight":"bolder"}},[a("a",{staticStyle:{color:"black"},attrs:{href:t.apps.code.link,target:"_blank"}},[t._v(t._s(t.apps.code.name))])])],1):t._e()],1)],1)}),N=[],S={data:function(){return{codeBool:!1,disBool:!1,route:this.$router,index:0}},props:{apps:{type:Object,default:function(){return{}}},code:{type:Boolean,default:!1},dis:{type:Boolean,default:!1}},created:function(){this.code&&(this.codeBool=!0),this.dis&&(this.disBool=!0)},methods:{logo:function(t){return a("1771")("./"+t)}}},O=S,F=a("8336"),$=a("b0af"),L=a("99d9"),P=a("cc20"),I=a("0e8f"),M=a("a722"),z=Object(p["a"])(O,T,N,!1,null,null,null),W=z.exports;d()(z,{VBtn:F["a"],VCard:$["a"],VCardText:L["a"],VCardTitle:L["b"],VChip:P["a"],VFlex:I["a"],VIcon:h["a"],VLayout:M["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",{staticClass:"list-item",attrs:{href:t.contact.link,target:"_blank"}},[a("v-list-item-icon",{staticClass:"pa-0 mr-2"},[a("v-btn",{attrs:{icon:"",href:t.contact.link,target:"_blank"}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-"+t._s(t.contact.icon))])],1)],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.contact.value))]),a("v-list-item-subtitle",[t._v(t._s(t.contact.name))])],1)],1)},D=[],H={props:{contact:{type:Object,default:function(){return{}}}}},R=H,G=(a("9d9c"),a("da13")),U=a("5d23"),Y=a("34c3"),q=Object(p["a"])(R,B,D,!1,null,"1366bdb6",null),J=q.exports;d()(q,{VBtn:F["a"],VIcon:h["a"],VListItem:G["a"],VListItemContent:U["a"],VListItemIcon:Y["a"],VListItemSubtitle:U["b"],VListItemTitle:U["c"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("section",[a("vue-horizontal-list",{attrs:{responsive:"",items:t.techExp,options:t.options},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[a("v-card",{staticClass:"mx-auto",staticStyle:{"border-radius":"20px",border:"black solid 1px"},attrs:{elevation:"10",width:"200px",color:"#FF5252"},on:{click:function(e){return t.$router.push("/tech-explain/"+n._id)}}},[a("v-img",{staticClass:"$img-preload-filter",attrs:{src:n.img_url,height:"200px"}}),a("v-card-title",[t._v(t._s(n.title))])],1)]}}])})],1)])},Q=[],X=a("6336"),Z=n["a"].extend({name:"ServeDev",props:{techExp:{type:Array,default:function(){return[]}}},components:{VueHorizontalList:X["a"]},data:function(){return{route:this.$router,options:{responsive:[{end:560,size:1},{start:560,end:760,size:2},{start:760,end:990,size:3},{size:4},{size:5}]}}}}),tt=Z,et=a("adda"),at=Object(p["a"])(tt,K,Q,!1,null,"0eb26535",null),nt=at.exports;d()(at,{VCard:$["a"],VCardTitle:L["b"],VImg:et["a"]});var ot=a("bc3a"),it=a.n(ot),rt=a("2f62"),st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cont"},[a("v-layout",{attrs:{"fill-height":"","align-center":""}},[a("v-container",{staticStyle:{"margin-top":"20px"}},[a("v-img",{staticClass:"img_profile",attrs:{src:t.src}}),a("v-row",{staticClass:"black--text",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"text_div"},[t._v("Welcome To My Page")]),a("div",{staticClass:"text_div2"},[t._v("I am Android and Fullstack Web Developer.")])])],1)],1)],1)],1)},lt=[],ct={name:"LanderView",data:function(){return{src:""}},mounted:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var a,n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=function(t,e){t=Math.ceil(t),e=Math.floor(e);var a=Math.floor(Math.random()*(e-t+1))+t;return a},e.next=3,it.a.get("https://api-ashmitaryan.herokuapp.com/api/image-upload");case 3:n=e.sent,o=n.data,i=a(1,o.file.length),console.log(o,i),t.src=o.file[i].url;case 8:case"end":return e.stop()}}),e)})))()}},pt=ct,ut=(a("d4b8"),a("a523")),dt=a("0fd9"),ft=Object(p["a"])(pt,st,lt,!1,null,"0054539b",null),mt=ft.exports;d()(ft,{VCol:f["a"],VContainer:ut["a"],VImg:et["a"],VLayout:M["a"],VRow:dt["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticStyle:{"border-radius":"20px"},attrs:{elevation:"20",color:"#FFEBEE"},on:{click:t.push}},[a("v-card-title",[a("div",{staticClass:"centerText"},[a("div",{attrs:{id:"text"}},[t._v("See More Apps >")])])])],1)},vt=[],bt={methods:{push:function(){this.$router.push("/all-apps")}}},gt=bt,xt=(a("e27e"),Object(p["a"])(gt,ht,vt,!1,null,"4a3ff8be",null)),_t=xt.exports;d()(xt,{VCard:$["a"],VCardTitle:L["b"]});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("vue-horizontal-list",{attrs:{items:t.techNews,options:t.options},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[a("div",{staticClass:"items"},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344","max-height":"1000"}},[a("v-card-title",{staticClass:"pa-2"},[n.media?a("v-img",{staticClass:"align-center",attrs:{src:n.media,"max-width":"250"}}):t._e(),a("div",{staticClass:"mt-3 mr-3 ml-3 mb-0"},[a("p",[t._v(" "+t._s(n.title)),a("br")]),a("p",[a("b",[t._v(t._s(n.clean_url))]),a("br")])]),a("v-divider"),a("p",{staticClass:"align-center mt-3"},[t._v(" "+t._s(n.summary.slice(0,100))+"..... ")]),a("v-btn",{staticClass:"ma-3",attrs:{color:"primary",elevation:"4"},on:{click:function(e){return t.goToFullNews(n._id)}}},[t._v(" Read More ")])],1)],1)],1)]}}])})],1)},wt=[],kt=n["a"].extend({name:"ServeDev",props:{techNews:{type:Array,default:function(){return[]}}},components:{VueHorizontalList:X["a"]},data:function(){return{attrs:{class:"mb-6",boilerplate:!0,elevation:2},reveal:!1,options:{responsive:[{end:576,size:1},{start:576,end:768,size:2},{start:768,end:992,size:3},{size:4},{size:5}]}}},methods:{goToFullNews:function(t){this.$router.push("/full-news/".concat(t))}}}),Ct=kt,Vt=(a("aa3d"),a("ce7e")),At=Object(p["a"])(Ct,yt,wt,!1,null,"641bb470",null),Et=At.exports;d()(At,{VBtn:F["a"],VCard:$["a"],VCardTitle:L["b"],VDivider:Vt["a"],VImg:et["a"]});var jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{desne:"",absolute:"",color:"transparent",light:"",height:"100px"}},[n("v-layout",{attrs:{"justify-center":""}},[n("v-container",[n("v-layout",[n("v-img",{staticClass:"img",staticStyle:{"margin-left":"0"},attrs:{"max-height":"35px","max-width":"35px",src:a("7a77")}}),n("div",{class:{"display-1 font-weight-bold ":t.$vuetify.breakpoint.smAndUp,"subtitle font-weight-bold":t.$vuetify.breakpoint.smAndDown},on:{click:function(e){return t.$router.push({path:"/"})}}},[t._v(" Ashmit Aryan ")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"text-right",staticStyle:{"font-weight":"bolder"}},[null!=t.btn1?n("v-btn",{staticStyle:{"font-weight":"bolder"},attrs:{"x-small":t.$vuetify.breakpoint.smAndDown,text:""},on:{click:function(e){return t.btnGo(t.btn1)}}},[t._v(t._s(t.btn1))]):t._e(),null!=t.btn2?n("v-btn",{staticStyle:{"font-weight":"bolder"},attrs:{"x-small":t.$vuetify.breakpoint.smAndDown,text:""},on:{click:function(e){return t.btnGo(t.btn2)}}},[t._v(t._s(t.btn2))]):t._e(),null!=t.btn3?n("v-btn",{staticStyle:{"font-weight":"bolder"},attrs:{"x-small":t.$vuetify.breakpoint.smAndDown,text:""},on:{click:function(e){return t.btnGo(t.btn3)}}},[t._v(t._s(t.btn3))]):t._e()],1)],1)],1)],1)],1)},Tt=[],Nt={data:function(){return{route:this.$router,options:{duration:300,offset:0,easing:"easeInOutCubic"}}},props:{btn1:{type:String,default:function(){return null}},btn2:{type:String,default:function(){return null}},btn3:{type:String,default:function(){return null}}},methods:{btnGo:function(t){"home"===t||"Home"===t?this.route.push({path:"/"}):"tech Explain"===t||"Tech Explain"===t?this.$vuetify.goTo("#techExp",this.options):"Contact"===t||"contact"===t?this.$vuetify.goTo("#contact",this.options):"Tech News"===t||"tech News"===t?this.$vuetify.goTo("#techNews",this.options):"My Work"!==t&&"my Work"!==t||this.route.push({path:"/all-apps"})}}},St=Nt,Ot=(a("097d"),a("40dc")),Ft=a("2fa4"),$t=a("2a7f"),Lt=Object(p["a"])(St,jt,Tt,!1,null,"7ddcf340",null),Pt=Lt.exports;d()(Lt,{VAppBar:Ot["a"],VBtn:F["a"],VContainer:ut["a"],VImg:et["a"],VLayout:M["a"],VSpacer:Ft["a"],VToolbarItems:$t["a"]});var It={name:"Home",components:{PPortfolioApp:W,PContactInfo:J,PTechExplain:nt,LanderView:mt,MoreApps:_t,PTechNews:Et,PToolbar:Pt},data:function(){return{aboutText:"A Teen who went totally in programming in high school. Learning different stuff but focusing on Android and Web Developemt I enjoy building apps in both Web and Android. Looking to get into machine learning and trying to have fun. Love to encourage new coders that they can do it too! I'm not very smart, just curious to see how things work. Anyways, you are free to download any of the code thats on my github! And I hope you have a great day!",showApps:[]}},methods:Object(j["a"])({},Object(rt["b"])(["AddApps","AddNews","AddTechExp"])),computed:Object(rt["c"])(["allApps","allNews","getcontactLinks","allTechExp"]),beforeCreate:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var a,n,o,i,r,s,l,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=function(t,e){t=Math.ceil(t),e=Math.floor(e);var a=Math.floor(Math.random()*(e-t+1))+t;return a.toString()},void 0!==t.allApps){e.next=7;break}return e.next=4,it.a.get("https://api-ashmitaryan.herokuapp.com/api/apps/");case 4:a=e.sent,n=a.data,t.AddApps(n);case 7:if(null!==t.allNews&&void 0!==t.allNews&&0!==t.allNews.length){e.next=14;break}return i={method:"GET",url:"https://newscatcher.p.rapidapi.com/v1/search_free",params:{q:"Programming Language",lang:"en",page:o(0,100),page_size:"30",media:"True"},headers:{"x-rapidapi-key":"98eca7b46cmshcc036a4accfbb38p1f5791jsne8c3a7823eba","x-rapidapi-host":"newscatcher.p.rapidapi.com"}},e.next=11,it.a.request(i);case 11:r=e.sent,s=r.data.articles,t.AddNews(s);case 14:if(null!==t.allTechExp&&void 0!==t.allTechExp&&0!==t.allTechExp.length){e.next=20;break}return e.next=17,it.a.get("https://api-ashmitaryan.herokuapp.com/api/tech-explain/");case 17:l=e.sent,c=l.data,t.AddTechExp(c);case 20:case"end":return e.stop()}}),e)})))()},mounted:function(){this.$cookies.remove("session-token")}},Mt=It,zt=Object(p["a"])(Mt,V,A,!1,null,"6541db3e",null),Wt=zt.exports;d()(zt,{VContainer:ut["a"],VFlex:I["a"],VLayout:M["a"]});var Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("p-toolbar",{attrs:{btn1:"home"}}),a("div",{staticClass:"not"},[t._v(" 404 Error... File Not Found.. ")])],1)},Dt=[],Ht={name:"FileNotFound",components:{PToolbar:Pt}},Rt=Ht,Gt=(a("5f9d"),Object(p["a"])(Rt,Bt,Dt,!1,null,"4b10dde3",null)),Ut=Gt.exports,Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p-toolbar",{attrs:{btn1:"Home"}}),a("v-flex",{staticClass:"mt-16 pt-9",attrs:{xs12:""}},[a("v-layout",{attrs:{wrap:""}},[t._l(t.allApps,(function(t,e){return[a("v-flex",{key:e,attrs:{xs12:"",sm6:"",md4:""}},[a("p-portfolio-app",{staticStyle:{color:"black","font-weight":"bolder","margin-left":"20px","margin-right":"20px","margin-top":"10px","margin-bottom":"10px"},attrs:{apps:t,code:!0}})],1)]}))],2)],1)],1)},qt=[],Jt={components:{PPortfolioApp:W,PToolbar:Pt},computed:Object(rt["c"])(["allApps"])},Kt=Jt,Qt=Object(p["a"])(Kt,Yt,qt,!1,null,null,null),Xt=Qt.exports;d()(Qt,{VFlex:I["a"],VLayout:M["a"]});var Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("p-toolbar",{attrs:{btn1:"Home",btn2:"My Work"}}),t._v(" "+t._s(t.$route.params.id)+" ")],1)},te=[],ee={components:{PToolbar:Pt},name:"FullApps",data:function(){return{}}},ae=ee,ne=Object(p["a"])(ae,Zt,te,!1,null,null,null),oe=ne.exports,ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p-toolbar",{attrs:{btn1:"Home",btn2:"My Work"}}),t.goHome(t.fullNews)?a("div",{staticClass:"mt-16 pt-6"},[null!=t.fullNews.media?a("v-img",{staticStyle:{"margin-left":"20px","margin-right":"20px","margin-top":"20px"},attrs:{src:t.fullNews.media,"max-height":"500"}}):t._e(),null!=t.fullNews.media?a("p",{staticClass:"ma-3 pa-3",staticStyle:{"font-size":"20px"}},[a("b",[t._v("Photo Courtesy:- "+t._s(t.fullNews.clean_url))])]):t._e(),a("v-layout",{attrs:{"fill-height":"","align-center":""}},[a("v-container",{staticStyle:{"margin-top":"20px"}},[a("v-row",{staticClass:"black--text",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"text_div"},[t._v(" "+t._s(t.fullNews.title)+" ")])])],1)],1)],1),a("v-divider"),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pa-5 mr-3 ml-3"},[a("div",{staticStyle:{color:"black","font-size":"20px","font-weight":"bold",margin:"2px"}},[t._v(" "+t._s(t.fullNews.summary)+" ")])])],1),null!=t.fullNews.media_content?a("v-img",{staticStyle:{"margin-left":"20px","margin-right":"20px"},attrs:{src:t.fullNews.media_content,"max-height":"500"}}):t._e(),null!=t.fullNews.media_content?a("p",{staticClass:"mb-3 pb-3",staticStyle:{"font-size":"20px"}},[a("b",[t._v("Picture Courtesy: "+t._s(t.fullNews.clean_url))])]):t._e(),a("p",{staticClass:"pa-3 ma-3"},[a("a",{attrs:{href:t.fullNews.link}},[t._v("Read More On Website")])])],1):t._e()],1)},re=[],se=(a("7db0"),{components:{PToolbar:Pt},name:"FullNews",data:function(){return{router:this.$route,path:this.$router,fullNews:{}}},computed:Object(rt["c"])(["allNews"]),mounted:function(){var t=this,e=this.allNews;this.fullNews=e.find((function(e){return e._id===t.router.params.id}))},methods:{goHome:function(t){return void 0!==t||(this.path.push({path:"/"}),!1)}}}),le=se,ce=(a("d733"),Object(p["a"])(le,ie,re,!1,null,"b8f4269c",null)),pe=ce.exports;d()(ce,{VCol:f["a"],VContainer:ut["a"],VDivider:Vt["a"],VFlex:I["a"],VImg:et["a"],VLayout:M["a"],VRow:dt["a"]});var ue=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p-toolbar",{attrs:{btn1:"Home"}}),t.goHome(t.techExp)?a("div",{staticClass:"container mt-16 pt-6"},[a("v-img",{staticStyle:{"margin-left":"20px","margin-right":"20px","margin-top":"20px"},attrs:{src:t.techExp.img_url,"max-height":"500"}}),a("v-layout",{attrs:{"fill-height":"","align-center":""}},[a("v-container",{staticStyle:{"margin-top":"20px"}},[a("v-row",{staticClass:"black--text",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"name_div"},[t._v(" "+t._s(t.techExp.title)+" ")])])],1)],1)],1),a("v-divider"),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pa-5 mr-3 ml-3 mb-5 pb-5"},[a("div",{staticStyle:{color:"black","font-size":"20px","font-weight":"bold",margin:"2px"}},[t._v(" "+t._s(t.techExp.description)+" ")])])],1),a("v-divider"),a("div",{staticClass:"d-flex flex-column ma-6 pa-3"},[a("h3",{staticStyle:{"font-size":"30px","font-weight":"bolder"}},[t._v("Pros")]),t._l(t.techExp.pros,(function(e){return a("v-card",{key:e,staticClass:"pa-3 mt-7",attrs:{outlined:"",tile:""}},[t._v(" "+t._s(e)+" ")])}))],2),a("div",{staticClass:"d-flex flex-column ma-6 pa-3"},[a("h3",{staticStyle:{"font-size":"30px","font-weight":"bolder"}},[t._v("Cons")]),t._l(t.techExp.cons,(function(e){return a("v-card",{key:e,staticClass:"pa-3 mt-7",attrs:{outlined:"",tile:""}},[t._v(" "+t._s(e)+" ")])}))],2),void 0!==t.techExp.video_link?a("p",{staticClass:"pa-3 ma-3"},[a("a",{attrs:{href:t.techExp.video_link}},[t._v("Know More")])]):t._e()],1):t._e()],1)},de=[],fe={name:"TechExplain",data:function(){return{router:this.$route,path:this.$router,techExp:{}}},components:{PToolbar:Pt},computed:Object(rt["c"])(["allTechExp"]),mounted:function(){var t=this,e=this.allTechExp;this.techExp=e.find((function(e){return e._id===t.router.params.id}))},methods:{goHome:function(t){return void 0!==t||(this.path.push({path:"/"}),!1)}}},me=fe,he=(a("aeb9"),Object(p["a"])(me,ue,de,!1,null,"a16d778a",null)),ve=he.exports;d()(he,{VCard:$["a"],VCol:f["a"],VContainer:ut["a"],VDivider:Vt["a"],VFlex:I["a"],VImg:et["a"],VLayout:M["a"],VRow:dt["a"]}),n["a"].use(C["a"]);var be=[{path:"/",name:"Home",component:Wt},{path:"*",name:"FileNotFound",component:Ut},{path:"/all-apps",name:"AllApps",component:Xt},{path:"/full-news/:id",name:"FullNews",component:pe},{path:"/full-apps/:id",name:"FullApps",component:oe},{path:"/tech-explain/:id",name:"TechExplain",component:ve}],ge=new C["a"]({mode:"history",base:"/",routes:be}),xe=ge,_e={app:[]},ye={allApps:function(t){return t.app}},we={AddApps:function(t,e){var a=t.commit;a("addNewApp",e)}},ke={addNewApp:function(t,e){return t.app=e}},Ce={state:_e,getters:ye,actions:we,mutations:ke},Ve={contactLinks:[{name:"Email",value:"Ashmit Aryan",link:"mailto:developerwowtechnow@gmail.com",icon:"email"},{name:"LinkedIn",value:"Ashmit Aryan",link:"https://www.linkedin.com/in/ashmit-aryan/",icon:"linkedin"},{name:"Github",value:"Ashmit Aryan",link:"https://github.com/Ashmit-Aryan/",icon:"github"},{name:"Instagram",value:"Ashmit Aryan",link:"https://www.instagram.com/_the_ashmit_aryan_/",icon:"instagram"},{name:"WhatsApp",value:"Ashmit Aryan",link:"https://wa.me/919755275063?text=Hii+There+%21+%2C+I+Want+a+Help+From+You",icon:"whatsapp"}]},Ae={getcontactLinks:function(t){return t.contactLinks}},Ee={AddContact:function(t,e){var a=t.commit;a("addNewContact",e)}},je={addNewContact:function(t,e){return t.app.unshift(e)}},Te={state:Ve,getters:Ae,actions:Ee,mutations:je},Ne={techNews:[]},Se={allNews:function(t){return t.techNews}},Oe={AddNews:function(t,e){var a=t.commit;a("addNews",e)}},Fe={addNews:function(t,e){return t.techNews=e}},$e={state:Ne,getters:Se,actions:Oe,mutations:Fe},Le={techExp:[]},Pe={allTechExp:function(t){return t.techExp}},Ie={AddTechExp:function(t,e){var a=t.commit;a("addTechExp",e)}},Me={addTechExp:function(t,e){return t.techExp=e}},ze={state:Le,getters:Pe,actions:Ie,mutations:Me};n["a"].use(rt["a"]);var We=new rt["a"].Store({modules:{apps:Ce,contact:Te,TechNews:$e,TechExplain:ze}}),Be=a("f309");n["a"].use(Be["a"]);var De=new Be["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#007fff",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"mdi"}}),He=(a("d5e8"),a("d1e78"),a("2b27")),Re=a.n(He);n["a"].config.productionTip=!1,n["a"].use(Re.a),new n["a"]({router:xe,store:We,vuetify:De,render:function(t){return t(k)}}).$mount("#app")},"5a3f":function(t,e,a){t.exports=a.p+"img/bg_img7.5d5555c7.jpg"},"5f9d":function(t,e,a){"use strict";a("1954")},6152:function(t,e,a){t.exports=a.p+"img/bg_img3.df5a2d73.jpg"},7262:function(t,e,a){},"7a77":function(t,e,a){t.exports=a.p+"img/side-logo.a66f5133.png"},"7f4e":function(t,e,a){t.exports=a.p+"img/bg_img6.6c8ce103.jpg"},"889d":function(t,e,a){},"9d9c":function(t,e,a){"use strict";a("14a4")},a2a1:function(t,e,a){t.exports=a.p+"img/bg_img2.5774724b.jpg"},aa3d:function(t,e,a){"use strict";a("889d")},aeb9:function(t,e,a){"use strict";a("7262")},b556:function(t,e,a){t.exports=a.p+"img/ashmit.3904ef4d.png"},bbf4:function(t,e,a){},c464:function(t,e,a){t.exports=a.p+"img/bg_img1.1c7f32a0.jpg"},cab5:function(t,e,a){},d4b8:function(t,e,a){"use strict";a("bbf4")},d733:function(t,e,a){"use strict";a("e1ed")},e1ed:function(t,e,a){},e234:function(t,e,a){t.exports=a.p+"img/bg_img5.7147fc0c.jpg"},e27e:function(t,e,a){"use strict";a("406e")},ed2a:function(t,e,a){t.exports=a.p+"img/bg_img4.010be8e0.jpg"}});
//# sourceMappingURL=app.edd6b76e.js.map