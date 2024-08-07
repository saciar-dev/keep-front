import{J as re,K as N,t as le,L as ue,M,N as R,O as Z,P as U,Q as j,r as Q,c as f,w as T,g as Y,h as m,R as se,S as ce,m as H,x as de,U as ve,k as oe,V as fe,W as me,o as ae,s as ie,X as G,Y as pe,Z as ge,$ as W,z as he,B as ye,I as xe,a0 as L,j as z,D as O,a1 as X}from"./index.553dd1f8.js";import{c as _e}from"./selection.c6a579d4.js";const J={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ce=Object.keys(J);J.all=!0;function ee(e){const t={};for(const r of Ce)e[r]===!0&&(t[r]=!0);return Object.keys(t).length===0?J:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const be=["INPUT","TEXTAREA"];function te(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&be.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function Pe(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,l)=>{const i=parseFloat(r);i&&(t[l]=i)}),t}var qe=re({name:"touch-swipe",beforeMount(e,{value:t,arg:r,modifiers:l}){if(l.mouse!==!0&&N.has.touch!==!0)return;const i=l.mouseCapture===!0?"Capture":"",n={handler:t,sensitivity:Pe(r),direction:ee(l),noop:le,mouseStart(a){te(a,n)&&ue(a)&&(M(n,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(a,!0))},touchStart(a){if(te(a,n)){const u=a.target;M(n,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","notPassiveCapture"],[u,"touchend","end","notPassiveCapture"]]),n.start(a)}},start(a,u){N.is.firefox===!0&&R(e,!0);const g=Z(a);n.event={x:g.left,y:g.top,time:Date.now(),mouse:u===!0,dir:!1}},move(a){if(n.event===void 0)return;if(n.event.dir!==!1){U(a);return}const u=Date.now()-n.event.time;if(u===0)return;const g=Z(a),h=g.left-n.event.x,s=Math.abs(h),p=g.top-n.event.y,d=Math.abs(p);if(n.event.mouse!==!0){if(s<n.sensitivity[1]&&d<n.sensitivity[1]){n.end(a);return}}else if(window.getSelection().toString()!==""){n.end(a);return}else if(s<n.sensitivity[2]&&d<n.sensitivity[2])return;const y=s/u,_=d/u;n.direction.vertical===!0&&s<d&&s<100&&_>n.sensitivity[0]&&(n.event.dir=p<0?"up":"down"),n.direction.horizontal===!0&&s>d&&d<100&&y>n.sensitivity[0]&&(n.event.dir=h<0?"left":"right"),n.direction.up===!0&&s<d&&p<0&&s<100&&_>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&s<d&&p>0&&s<100&&_>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&s>d&&h<0&&d<100&&y>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&s>d&&h>0&&d<100&&y>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(U(a),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),_e(),n.styleCleanup=w=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};w===!0?setTimeout(C,50):C()}),n.handler({evt:a,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:u,distance:{x:s,y:d}})):n.end(a)},end(a){n.event!==void 0&&(j(n,"temp"),N.is.firefox===!0&&R(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),a!==void 0&&n.event.dir!==!1&&U(a),n.event=void 0)}};if(e.__qtouchswipe=n,l.mouse===!0){const a=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";M(n,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}N.has.touch===!0&&M(n,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const r=e.__qtouchswipe;r!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&r.end(),r.handler=t.value),r.direction=ee(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(j(t,"main"),j(t,"temp"),N.is.firefox===!0&&R(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function Se(){const e=new Map;return{getCache:function(t,r){return e[t]===void 0?e[t]=r:e[t]},getCacheWithFn:function(t,r){return e[t]===void 0?e[t]=r():e[t]}}}const we={name:{required:!0},disable:Boolean},ne={setup(e,{slots:t}){return()=>m("div",{class:"q-panel scroll",role:"tabpanel"},H(t.default))}},ke={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Te=["update:modelValue","beforeTransition","transition"];function $e(){const{props:e,emit:t,proxy:r}=Y(),{getCacheWithFn:l}=Se();let i,n;const a=Q(null),u=Q(null);function g(o){const c=e.vertical===!0?"up":"left";b((r.$q.lang.rtl===!0?-1:1)*(o.direction===c?1:-1))}const h=f(()=>[[qe,g,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),s=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),p=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),d=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),_=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),w=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);T(()=>e.modelValue,(o,c)=>{const x=P(o)===!0?I(o):-1;n!==!0&&k(x===-1?0:x<I(c)?-1:1),a.value!==x&&(a.value=x,t("beforeTransition",o,c),de(()=>{t("transition",o,c)}))});function C(){b(1)}function V(){b(-1)}function $(o){t("update:modelValue",o)}function P(o){return o!=null&&o!==""}function I(o){return i.findIndex(c=>c.props.name===o&&c.props.disable!==""&&c.props.disable!==!0)}function D(){return i.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function k(o){const c=o!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(o===-1?s.value:p.value):null;u.value!==c&&(u.value=c)}function b(o,c=a.value){let x=c+o;for(;x>-1&&x<i.length;){const S=i[x];if(S!==void 0&&S.props.disable!==""&&S.props.disable!==!0){k(o),n=!0,t("update:modelValue",S.props.name),setTimeout(()=>{n=!1});return}x+=o}e.infinite===!0&&i.length!==0&&c!==-1&&c!==i.length&&b(o,o===-1?i.length:-1)}function A(){const o=I(e.modelValue);return a.value!==o&&(a.value=o),!0}function F(){const o=P(e.modelValue)===!0&&A()&&i[a.value];return e.keepAlive===!0?[m(ve,_.value,[m(w.value===!0?l(y.value,()=>({...ne,name:y.value})):ne,{key:y.value,style:d.value},()=>o)])]:[m("div",{class:"q-panel scroll",style:d.value,key:y.value,role:"tabpanel"},[o])]}function v(){if(i.length!==0)return e.animated===!0?[m(se,{name:u.value},F)]:F()}function q(o){return i=ce(H(o.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&P(c.props.name)===!0),i.length}function B(){return i}return Object.assign(r,{next:C,previous:V,goTo:$}),{panelIndex:a,panelDirectives:h,updatePanelsList:q,updatePanelIndex:A,getPanelContent:v,getEnabledPanels:D,getPanels:B,isValidPanelName:P,keepAliveProps:_,needsUniqueKeepAliveWrapper:w,goToPanelByOffset:b,goToPanel:$,nextPanel:C,previousPanel:V}}var K=oe({name:"QCarouselSlide",props:{...we,imgSrc:String},setup(e,{slots:t}){const r=f(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>m("div",{class:"q-carousel__slide",style:r.value},H(t.default))}});const Ie={dark:{type:Boolean,default:null}};function Ae(e,t){return f(()=>e.dark===null?t.dark.isActive:e.dark)}let E=0;const Be={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ne=["update:fullscreen","fullscreen"];function Ee(){const e=Y(),{props:t,emit:r,proxy:l}=e;let i,n,a;const u=Q(!1);fe(e)===!0&&T(()=>l.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&s()}),T(()=>t.fullscreen,p=>{u.value!==p&&g()}),T(u,p=>{r("update:fullscreen",p),r("fullscreen",p)});function g(){u.value===!0?s():h()}function h(){u.value!==!0&&(u.value=!0,a=l.$el.parentNode,a.replaceChild(n,l.$el),document.body.appendChild(l.$el),E++,E===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:s},G.add(i))}function s(){u.value===!0&&(i!==void 0&&(G.remove(i),i=void 0),a.replaceChild(l.$el,n),u.value=!1,E=Math.max(0,E-1),E===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),l.$el.scrollIntoView!==void 0&&setTimeout(()=>{l.$el.scrollIntoView()})))}return me(()=>{n=document.createElement("span")}),ae(()=>{t.fullscreen===!0&&h()}),ie(s),Object.assign(l,{toggleFullscreen:g,setFullscreen:h,exitFullscreen:s}),{inFullscreen:u,toggleFullscreen:g}}const Ve=["top","right","bottom","left"],De=["regular","flat","outline","push","unelevated"];var Fe=oe({name:"QCarousel",props:{...Ie,...ke,...Be,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>De.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ve.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ne,...Te],setup(e,{slots:t}){const{proxy:{$q:r}}=Y(),l=Ae(e,r);let i=null,n;const{updatePanelsList:a,getPanelContent:u,panelDirectives:g,goToPanel:h,previousPanel:s,nextPanel:p,getEnabledPanels:d,panelIndex:y}=$e(),{inFullscreen:_}=Ee(),w=f(()=>_.value!==!0&&e.height!==void 0?{height:e.height}:{}),C=f(()=>e.vertical===!0?"vertical":"horizontal"),V=f(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(_.value===!0?" fullscreen":"")+(l.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${C.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${D.value}`:"")),$=f(()=>{const v=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?v.reverse():v}),P=f(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),I=f(()=>e.navigationActiveIcon||P.value),D=f(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),k=f(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));T(()=>e.modelValue,()=>{e.autoplay&&b()}),T(()=>e.autoplay,v=>{v?b():i!==null&&(clearTimeout(i),i=null)});function b(){const v=ge(e.autoplay)===!0?Math.abs(e.autoplay):5e3;i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,v>=0?p():s()},v)}ae(()=>{e.autoplay&&b()}),ie(()=>{i!==null&&clearTimeout(i)});function A(v,q){return m("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${v} q-carousel__navigation--${D.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[m("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},d().map(q))])}function F(){const v=[];if(e.navigation===!0){const q=t["navigation-icon"]!==void 0?t["navigation-icon"]:o=>m(W,{key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`,...o.btnProps,onClick:o.onClick}),B=n-1;v.push(A("buttons",(o,c)=>{const x=o.props.name,S=y.value===c;return q({index:c,maxIndex:B,name:x,active:S,btnProps:{icon:S===!0?I.value:P.value,size:"sm",...k.value},onClick:()=>{h(x)}})}))}else if(e.thumbnails===!0){const q=e.controlColor!==void 0?` text-${e.controlColor}`:"";v.push(A("thumbnails",B=>{const o=B.props;return m("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+q,src:o.imgSrc||o["img-src"],onClick:()=>{h(o.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&v.push(m("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${C.value} absolute flex flex-center`},[m(W,{icon:$.value[0],...k.value,onClick:s})])),(e.infinite===!0||y.value<n-1)&&v.push(m("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${C.value} absolute flex flex-center`},[m(W,{icon:$.value[1],...k.value,onClick:p})]))),he(t.control,v)}return()=>(n=a(t),m("div",{class:V.value,style:w.value},[pe("div",{class:"q-carousel__slides-container"},u(),"sl-cont",e.swipeable,()=>g.value)].concat(F())))}}),Me="/assets/logo-blanco.0c9a40da.svg",Le="/assets/logo-kids.ef771e63.svg",ze="/assets/logo-teens.061a29dd.svg";const Oe={class:"row"},Qe={class:"col-12"},je={__name:"MyCarrousel",props:["tamanio"],setup(e){const t=Q(1);return(r,l)=>(ye(),xe("div",Oe,[L("div",Qe,[z(Fe,{animated:"",modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=i=>t.value=i),infinite:"",autoplay:"","transition-prev":"scale","transition-next":"scale",style:{"background-color":"transparent"}},{default:O(()=>[z(K,{name:1,class:"flex flex-center"},{default:O(()=>[L("img",{alt:"Quasar logo",src:Me,style:X(e.tamanio)},null,4)]),_:1}),z(K,{name:2,class:"flex flex-center"},{default:O(()=>[L("img",{alt:"Quasar logo",src:Le,style:X(e.tamanio)},null,4)]),_:1}),z(K,{name:3,class:"flex flex-center"},{default:O(()=>[L("img",{alt:"Quasar logo",src:ze,style:X(e.tamanio)},null,4)]),_:1})]),_:1},8,["modelValue"])])]))}};export{je as _,Ae as a,Ie as u};