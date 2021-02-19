(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bce35ef2","chunk-2d0aad94"],{1384:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"projectTracking"},[o("h1",[t._v("This is projectTracking page")]),o("TrackingList",{attrs:{msg:"리스트 출력"}})],1)},a=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"TrackingList"},[o("router-link",{attrs:{tag:"a",to:"/projectTrackingInsert"}},[t._v("이동")]),o("h4",[t._v(t._s(t.msg))]),o("table",{attrs:{border:"1"}},[t._m(0),t._l(t.trackings,(function(e,r){return o("tr",{key:r},[o("router-link",{attrs:{tag:"td",to:{name:"ProjectTrackingDetail",params:{track:e}}}},[t._v(t._s(e.project.pjTitle))]),o("td",[t._v(t._s(e.project.pjCategory))]),o("td",[t._v(t._s(e.project.pjDuration))]),o("td",[t._v(t._s(e.trackImage))])],1)}))],2)],1)},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tr",[o("th",[t._v("제목")]),o("th",[t._v("카테고리")]),o("th",[t._v("기간")]),o("th",[t._v("이미지")])])}],i={name:"TrackingList",props:{msg:String},data:function(){return{trackings:[]}},methods:{trackList:function(){var t=this;this.axios.get("/gettrackinglistaxios").then((function(e){t.trackings=e.data,console.log("==========list=========="),console.log(e),console.log(t.trackings),console.log("==========list==========")})).catch((function(t){console.log("에러"+t)}))}},mounted:function(){this.trackList()}},c=i,p=o("2877"),l=Object(p["a"])(c,n,s,!1,null,null,null),u=l.exports,m={name:"ProjectTracking",components:{TrackingList:u}},d=m,g=Object(p["a"])(d,r,a,!1,null,null,null);e["default"]=g.exports},a607:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ProjectTrackingInsert"},[o("AddTracking")],1)},a=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"AddTracking"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.project.pjTitle,expression:"project.pjTitle"}],attrs:{type:"text",placeholder:"프로젝트 제목을 입력합니다."},domProps:{value:t.project.pjTitle},on:{input:function(e){e.target.composing||t.$set(t.project,"pjTitle",e.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.project.pjDescription,expression:"project.pjDescription"}],attrs:{type:"text",placeholder:"프로젝트 설명을 입력합니다."},domProps:{value:t.project.pjDescription},on:{input:function(e){e.target.composing||t.$set(t.project,"pjDescription",e.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.project.pjDuration,expression:"project.pjDuration"}],attrs:{type:"text",placeholder:"yyyy-mm-dd~yyyy-mm-dd"},domProps:{value:t.project.pjDuration},on:{input:function(e){e.target.composing||t.$set(t.project,"pjDuration",e.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.project.pjTools,expression:"project.pjTools"}],attrs:{type:"text",placeholder:"사용하는 툴을 입력합니다."},domProps:{value:t.project.pjTools},on:{input:function(e){e.target.composing||t.$set(t.project,"pjTools",e.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.project.pjLang,expression:"project.pjLang"}],attrs:{type:"text",placeholder:"사용하는 언어를 입력합니다."},domProps:{value:t.project.pjLang},on:{input:function(e){e.target.composing||t.$set(t.project,"pjLang",e.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.project.pjDbms,expression:"project.pjDbms"}],attrs:{type:"text",placeholder:"사용하는 DB를 입력합니다."},domProps:{value:t.project.pjDbms},on:{input:function(e){e.target.composing||t.$set(t.project,"pjDbms",e.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.stage,expression:"stage"}],attrs:{type:"text",placeholder:"개발 단계를 입력합니다."},domProps:{value:t.stage},on:{input:function(e){e.target.composing||(t.stage=e.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.issue,expression:"issue"}],attrs:{type:"text",placeholder:"개발시 이슈를 입력합니다."},domProps:{value:t.issue},on:{input:function(e){e.target.composing||(t.issue=e.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.output,expression:"output"}],attrs:{type:"text",placeholder:"프로젝트 결과를 입력합니다."},domProps:{value:t.output},on:{input:function(e){e.target.composing||(t.output=e.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.trackImage,expression:"trackImage"}],attrs:{type:"text",placeholder:"이미지를 첨부합니다."},domProps:{value:t.trackImage},on:{input:function(e){e.target.composing||(t.trackImage=e.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.trackLink,expression:"trackLink"}],attrs:{type:"text",placeholder:"git주소 등 링크를 입력합니다."},domProps:{value:t.trackLink},on:{input:function(e){e.target.composing||(t.trackLink=e.target.value)}}}),o("br"),o("button",{on:{click:t.addTracking}},[t._v("프로젝트 트레킹 생성")])])},s=[],i=o("1384"),c={name:"AddTracking",data:function(){return{project:[],stage:"",issue:"",output:"",trackImage:"",trackLink:""}},methods:{addTracking:function(){var t=this;this.axios.post("/insertprojecttracking",{stage:this.stage,issue:this.issue,output:this.output,trackImage:this.trackImage,trackLink:this.trackLink,project:this.project}).then((function(e){console.log("==========add=========="),console.warn(e),console.warn(e.data),console.log("==========add=========="),t.$router.push(i["default"])})).catch((function(t){console.warn("ERROR!!!!! : ",t)}))},showProject:function(){var t=this;this.axios.get("/project/getproject",{params:{projectId:2}}).then((function(e){t.project=e.data})).catch((function(t){console.log("에러"+t)}))}},mounted:function(){this.showProject()}},p=c,l=o("2877"),u=Object(l["a"])(p,n,s,!1,null,null,null),m=u.exports,d={name:"ProjectTrackingInsert",components:{AddTracking:m}},g=d,v=Object(l["a"])(g,r,a,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-bce35ef2.c1a83d5f.js.map