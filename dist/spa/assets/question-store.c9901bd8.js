import{au as i,r as t,av as n}from"./index.5fb0a323.js";import{u as r}from"./vue-i18n.8d415263.js";const m=i("questions",()=>{const e=t([]),o=t([]),u=t(!1);let a=null;const s=r();return{isLoading:u,randomQuestion:o,readQuestion:async()=>{s.locale.value=="es"?a=await n(()=>import("./dataES.1ad13035.js"),[]):s.locale.value=="pt"&&(a=await n(()=>import("./dataPT.91a25da0.js"),[])),e.value=a.default,o.value=e.value.sort(function(){return Math.random()-.5}).slice(0,5)},allQuestions:e,clearRandomQuestions:()=>{o.value=[]}}});export{m as u};
