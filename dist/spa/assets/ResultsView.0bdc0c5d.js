import{Q as l}from"./QPageSticky.8d911db8.js";import{Q as h}from"./QTooltip.ecfc0065.js";import{_ as x,H as g,B as n,I as v,a0 as o,a3 as c,ar as b,C as w,D as s,as as S,j as a,F as k,$ as R,a4 as Q}from"./index.5fb0a323.js";import{u as V}from"./question-store.c9901bd8.js";import{u}from"./user-store.838819b6.js";import{api as y}from"./axios.66184abb.js";/* empty css                */import{_ as B}from"./MyCarrousel.1ba2bbf6.js";import"./selection.716423eb.js";import"./scroll.116b4f3b.js";import"./vue-i18n.8d415263.js";const I={class:"bg-1 col flex flex-center",style:{height:"100vh"}},C={class:"text-center"},N={class:"text-h1 itau-font-blk q-pb-xl q-px-xl text-white"},$={class:"text-h3 animate__animated animate__headShake itau-font-rg q-pt-xl text-blue"},q={__name:"ResultsView",setup(U){const{clearRandomQuestions:m}=V(),{resetUsuario:p}=u(),_=g(),{usuario:r}=u(),f=()=>{localStorage.removeItem("user"),localStorage.removeItem("result"),d(),m(),p(),_.push("/")},i=localStorage.getItem("result"),d=()=>{const e={nombre:r.nombre,telefono:r.telephone,correctas:i};y.post("/usuario",e).then(t=>{console.log(t)})};return(e,t)=>(n(),v(k,null,[o("div",I,[o("div",C,[o("div",N,c(e.$t("msg_endless")),1),o("div",$,"Respuestas correctas: "+c(b(i)),1)])]),e.showAnwserResult?S("",!0):(n(),w(l,{key:0,position:"top-right",offset:[100,0]},{default:s(()=>[a(B,{tamanio:"width:350px"})]),_:1})),a(l,{position:"bottom-right",offset:[28,24]},{default:s(()=>[a(R,{size:"1.5rem",fab:"",icon:"home",color:"espanol","text-color":"espanol",onClick:t[0]||(t[0]=D=>f())},{default:s(()=>[a(h,{anchor:"bottom left",self:"top middle",offset:[10,10],class:"bg-portugues text-subtitle2 text-center"},{default:s(()=>[Q("Siguiente")]),_:1})]),_:1})]),_:1})],64))}};var L=x(q,[["__scopeId","data-v-fe717784"]]);export{L as default};
