(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aad94"],{1384:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"projectTracking"},[a("h1",[t._v("This is projectTracking page")]),a("TrackingList",{attrs:{msg:"리스트 출력"}})],1)},c=[],e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"TrackingList"},[a("router-link",{attrs:{tag:"a",to:"/projectTrackingInsert"}},[t._v("이동")]),a("div",{staticClass:"container"},[a("div",{staticClass:"section"},[a("div",{staticClass:"columns"}),a("div",{staticClass:"row columns is-multiline",attrs:{id:"app"}},t._l(t.trackings,(function(s,i){return a("div",{key:i,staticClass:"column is-4"},[a("div",{staticClass:"card large"},[t._m(0,!0),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[t._m(1,!0),a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4 no-padding"},[a("router-link",{attrs:{tag:"td",to:{name:"ProjectTrackingDetail",params:{track:s}}}},[t._v(t._s(s.project.pjTitle))])],1),a("p",[a("span",{staticClass:"title is-6"},[a("a",{attrs:{href:"http://twitter.com/${card.user.handle}"}},[t._v(" "+t._s(s.project.userId.userId)+" ")])])]),a("p",{staticClass:"subtitle is-6"},[t._v(t._s(s.project.pjCategory))])])]),a("div",{staticClass:"content"},[t._v(" "+t._s(s.project.pjDescription)+" "),t._m(2,!0)])])])])})),0)])])],1)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image is-16by9"},[a("img",{attrs:{src:"https://bulma.io/images/placeholders/128x128.png"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-48x48"},[a("img",{staticClass:"is-rounded",attrs:{src:"https://bulma.io/images/placeholders/128x128.png"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"background-icon"},[a("span",{staticClass:"icon-twitter"})])}],r={name:"TrackingList",data:function(){return{trackings:[]}},methods:{trackList:function(){var t=this;this.axios.get("/gettrackinglistaxios").then((function(s){t.trackings=s.data,console.log("==========list=========="),console.log(s),console.log(t.trackings),console.log("==========list==========")})).catch((function(t){console.log("에러"+t)}))}},mounted:function(){this.trackList()}},l=r,o=a("2877"),u=Object(o["a"])(l,e,n,!1,null,null,null),d=u.exports,g={name:"ProjectTracking",components:{TrackingList:d}},p=g,m=Object(o["a"])(p,i,c,!1,null,null,null);s["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0aad94.fcbd6d74.js.map