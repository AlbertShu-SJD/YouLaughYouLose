(function(e){function t(t){for(var n,r,o=t[0],c=t[1],l=t[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},s=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("19b3"),i=a.n(n);i.a},1:function(e,t){},"19b3":function(e,t,a){},2:function(e,t){},3:function(e,t){},"358e":function(e,t,a){},"446e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],r={name:"app",components:{}},o=r,c=(a("034f"),a("2877")),l=Object(c["a"])(o,i,s,!1,null,null,null),u=l.exports,d=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.isLoading,expression:"isLoading===true"}],staticClass:"lds-circle"},[a("div"),a("h4",[e._v("Loading")])]),a("div",{staticClass:"container"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!1===e.isLoading&&!1===e.isFinished,expression:"isLoading===false && isFinished===false"}],staticClass:"game"},[a("div",{staticClass:"rules"},[a("h2",{staticClass:"panel"},[e._v("Stage "+e._s(e.playingVideoID+1))]),a("h2",{staticClass:"panel-title"},[e._v("Happy Mood: "+e._s(e._f("percentFormat")(e.happy)))])]),a("div",{staticClass:"gauge"},[a("gauge",{attrs:{percentage:Math.round(100*e.happy)}})],1),a("div",{staticClass:"video-container"},[a("vue-plyr",{key:e.videoID[e.playingVideoID],ref:"player"},[a("div",{attrs:{"data-plyr-provider":"youtube","data-plyr-embed-id":e.videoID[e.playingVideoID]}})])],1),a("video",{ref:"video",staticClass:"stream",attrs:{playsinline:"",autoplay:""}}),a("canvas",{ref:"canvas"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.playingVideoID>e.videoID.length,expression:"(playingVideoID) > videoID.length"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.isFinished&&!1===e.isLaugh,expression:"isFinished===true && isLaugh===false"}],staticClass:"resultW"},[a("h1",[e._v("Congratulations!!")]),a("h1",[e._v("You completed all Stages")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.isFinished&&!0===e.isLaugh,expression:"isFinished===true && isLaugh===true"}],staticClass:"result"},[a("h1",[e._v("Final Happy Mood: "+e._s(e._f("percentFormat")(e.Score)))]),a("h1",[e._v("Smiled at Stage "+e._s(e.smileStage+1)+" / "+e._s(e.videoID.length))]),a("a",{ref:"link",staticClass:"button",staticStyle:{"background-color":"#9a4ef1"}})])]),!0===e.nextStage?a("div",[a("modal",[a("h2",{staticStyle:{color:"rgb(64,64,64)"},attrs:{slot:"header"},slot:"header"},[e._v("Congratulations!!")]),a("h3",{staticStyle:{color:"rgb(64,64,64)"},attrs:{slot:"body"},slot:"body"},[e._v("You Pass Stage "+e._s(e.playingVideoID+1)+" / "+e._s(e.videoID.length)+"!!!")]),a("a",{staticClass:"button",staticStyle:{"background-color":"#9a4ef1"},attrs:{slot:"footer"},on:{click:function(t){return e.toNextStage()}},slot:"footer"},[e._v("Next")])])],1):e._e()])])},p=[],f=(a("4160"),a("d3b7"),a("3ca3"),a("9911"),a("159b"),a("ddb0"),a("96cf"),a("ab39")),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[e._t("header")],2),a("div",{staticClass:"modal-body"},[e._t("body")],2),a("div",{staticClass:"modal-footer"},[e._t("footer")],2)])])])])},g=[],m={},y=m,b=(a("f01e"),Object(c["a"])(y,v,g,!1,null,null,null)),w=b.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"gauge-bg"},[a("div",{staticClass:"gauge-middle"}),a("div",{staticClass:"gauge-overlay",style:{transform:e.rotate}}),a("div",{staticClass:"gauge-data"},[a("span",[e._v(e._s(e.percentage)+" %")])])])])},x=[],S={props:["percentage"],computed:{rotate:function(){var e=180*this.percentage/100;return"rotate(".concat(e,"deg)")}}},C=S,L=(a("646c"),Object(c["a"])(C,_,x,!1,null,null,null)),D=L.exports,I=a("5118"),k={name:"stream",components:{modal:w,gauge:D},data:function(){return{facingMode:!1,timeInterval:0,isLoading:!0,isFinished:!1,isLaugh:!1,nextStage:!1,smileStage:0,happy:0,Score:0,videoID:["8d6voO-na6w","IPXU-Q5fUiI","Zt-exFj2U1c"],playingVideoID:0}},mounted:function(){this.init()},filters:{percentFormat:function(e){return Math.round(100*e)+" %"}},methods:{init:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(Promise.all([f["e"].tinyFaceDetector.loadFromUri("https://jameshsu333.github.io/YouLaughYouLose/public/data/weights"),f["e"].faceLandmark68Net.loadFromUri("https://jameshsu333.github.io/YouLaughYouLose/public/data/weights"),f["e"].faceRecognitionNet.loadFromUri("https://jameshsu333.github.io/YouLaughYouLose/public/data/weights"),f["e"].faceExpressionNet.loadFromUri("https://jameshsu333.github.io/YouLaughYouLose/public/data/weights")]).then(this.startStream()));case 2:this.onPlay();case 3:case"end":return e.stop()}}),null,this)},startStream:function(){var e=this.$refs.video;navigator.mediaDevices.getUserMedia({audio:!1,video:{width:320,height:180,frameRate:{min:15,ideal:30,max:60},facingMode:this.facingMode?"user":"environment"}}).then((function(t){window.stream=t,e.srcObject=t})).catch((function(e){alert(e)}))},onPlay:function(){var e,t,a=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:e=this.$refs.video,t=this.$refs.canvas,f["d"](t,{width:320,height:180}),Object(I["setInterval"])((function(){var n,i;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,regeneratorRuntime.awrap(f["b"](e,new f["a"]).withFaceLandmarks().withFaceExpressions());case 2:n=s.sent,a.happy=n.expressions.happy,a.checkHappiness(),a.checkPlayer(),i=f["f"](n,{width:320,height:180}),Promise.all([t.getContext("2d").clearRect(0,0,t.width,t.height),f["c"].drawDetections(t,i),f["c"].drawFaceExpressions(t,i)]).then(a.isLoading=!1);case 8:case"end":return s.stop()}}))}),100);case 4:case"end":return n.stop()}}),null,this)},takeScreenshot:function(){this.$refs.canvas.getContext("2d").drawImage(this.$refs.video,0,0,320,180);var e=this.$refs.canvas.toDataURL("image/png");this.$refs.link.href=e,this.$refs.link.download="Happy Face.png",this.$refs.link.innerHTML="Download your happy face pic!!"},checkHappiness:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.happy>.98)){e.next=6;break}return this.Score=this.happy,e.next=4,regeneratorRuntime.awrap(this.takeScreenshot());case 4:this.isLaugh=!0,this.smileStage=this.playingVideoID;case 6:case"end":return e.stop()}}),null,this)},checkPlayer:function(){var e=this.$refs.player;!0===e.player.ended&&!1===this.nextStage&&(this.nextStage=!0)},toNextStage:function(){this.nextStage=!1,this.playingVideoID+=1,this.playingVideoID===this.videoID.length&&(this.$refs.video.srcObject.getTracks().forEach((function(e){e.stop()})),this.nextStage=!1,this.playingVideoID=this.videoID.length+1,this.isFinished=!0)}}},j=k,F=(a("adde"),Object(c["a"])(j,h,p,!1,null,null,null)),O=F.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"",name:"bounce"}},[a("h1",[e._v("You Laugh, You Lose !!")])]),a("transition",{attrs:{appear:"",name:"slide-fade"}},[a("div",{staticClass:"playing"},[a("a",{staticClass:"button",staticStyle:{"background-color":"#9a4ef1"},attrs:{href:""},on:{click:function(t){return e.startGame()}}},[e._v("Start")]),a("h3",[e._v("Press Start to play")])])])],1)},P=[],M={name:"start",data:function(){return{isReady:!1}},methods:{startGame:function(){this.$router.push({path:"/play"})}}},R=M,Y=(a("b70c"),Object(c["a"])(R,$,P,!1,null,null,null)),N=Y.exports;n["a"].use(d["a"]);var V=new d["a"]({routes:[{path:"/",component:N},{path:"/play",component:O}]}),E=a("afa7");n["a"].use(E["a"],{plyr:{fullscreen:{enable:!1}}}),n["a"].config.productionTip=!1,new n["a"]({router:V,render:function(e){return e(u)}}).$mount("#app")},"646c":function(e,t,a){"use strict";var n=a("ccd4"),i=a.n(n);i.a},"838a":function(e,t,a){},adde:function(e,t,a){"use strict";var n=a("838a"),i=a.n(n);i.a},b70c:function(e,t,a){"use strict";var n=a("446e"),i=a.n(n);i.a},ccd4:function(e,t,a){},f01e:function(e,t,a){"use strict";var n=a("358e"),i=a.n(n);i.a}});
//# sourceMappingURL=app.c25013c9.js.map