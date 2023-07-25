import W from"./ContentTitle-65b997d2.js";import q from"./ContentSubtitle-d45df7cb.js";import z from"./ContentText-5ddf8196.js";import A from"./ContentImage-c506e510.js";import{r as u,o as c,c as f,F as C,e as g,f as d,w as a,a as i,t as G,b as t,u as s,g as v,i as U,j as V,m as b,d as r,h as D}from"./index-b1a4bbf0.js";const H={class:"content-card-header"},J={class:"content-card-header"},K=i("span",null,"Элемент секции",-1),Z={__name:"ContentSections",props:["componentData"],emits:["update:componentData"],setup($,{emit:M}){const l=$,L=()=>{l.componentData.sectionsList.push({sectionName:"",sectionImage:"",sectionContent:[]})},S=n=>{l.componentData.sectionsList.splice(n,1)},w=(n,k)=>{l.componentData.sectionsList[n].sectionContent.splice(k,1)},T=n=>{l.componentData.sectionsList[n].sectionContent.push({componentName:"ContentTitle",componentData:{text:""}})},x=n=>{l.componentData.sectionsList[n].sectionContent.push({componentName:"ContentSubtitle",componentData:{text:""}})},B=n=>{l.componentData.sectionsList[n].sectionContent.push({componentName:"ContentText",componentData:{text:""}})},F=n=>{l.componentData.sectionsList[n].sectionContent.push({componentName:"ContentImage",componentData:{name:"",imageWidthPercent:100}})};return(n,k)=>{const o=u("el-button"),y=u("el-input"),h=u("el-form-item"),N=u("el-card"),j=u("el-col"),E=u("el-row");return c(),f(C,null,[(c(!0),f(C,null,g(l.componentData.sectionsList,(_,p)=>(c(),d(N,{key:p},{header:a(()=>[i("div",H,[i("span",null,"Секция "+G(p+1),1),i("div",null,[t(o,{type:"danger",icon:s(v),plain:"",onClick:e=>S(p)},null,8,["icon","onClick"]),t(o,{type:"success",icon:s(U),plain:""},null,8,["icon"]),t(o,{type:"success",icon:s(V),plain:""},null,8,["icon"]),t(o,{type:"primary",icon:s(b),plain:""},null,8,["icon"])])])]),default:a(()=>[t(h,{label:"Название секции:"},{default:a(()=>[t(y,{modelValue:_.sectionName,"onUpdate:modelValue":e=>_.sectionName=e},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(h,{label:"Картинка секции:"},{default:a(()=>[t(y,{modelValue:_.image,"onUpdate:modelValue":e=>_.image=e},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),i("div",null,[r("Содержимое секции"),(c(!0),f(C,null,g(_.sectionContent,(e,P)=>(c(),d(N,{class:"box-card-margin",key:P},{header:a(()=>[i("div",J,[K,i("div",null,[t(o,{type:"danger",icon:s(v),plain:"",onClick:m=>w(p,n.sectionContentIndex)},null,8,["icon","onClick"]),t(o,{type:"success",icon:s(U),plain:""},null,8,["icon"]),t(o,{type:"success",icon:s(V),plain:""},null,8,["icon"]),t(o,{type:"primary",icon:s(b),plain:""},null,8,["icon"])])])]),default:a(()=>[e.componentName==="ContentTitle"?(c(),d(W,{key:0,componentData:e.componentData,"onUpdate:componentData":m=>e.componentData=m},null,8,["componentData","onUpdate:componentData"])):D("",!0),e.componentName==="ContentSubtitle"?(c(),d(q,{key:1,componentData:e.componentData,"onUpdate:componentData":m=>e.componentData=m},null,8,["componentData","onUpdate:componentData"])):D("",!0),e.componentName==="ContentText"?(c(),d(z,{key:2,componentData:e.componentData,"onUpdate:componentData":m=>e.componentData=m},null,8,["componentData","onUpdate:componentData"])):D("",!0),e.componentName==="ContentImage"?(c(),d(A,{key:3,componentData:e.componentData,"onUpdate:componentData":m=>e.componentData=m},null,8,["componentData","onUpdate:componentData"])):D("",!0)]),_:2},1024))),128)),t(o,{onClick:e=>T(p),type:"success",round:""},{default:a(()=>[r("+ Заголовок")]),_:2},1032,["onClick"]),t(o,{onClick:e=>x(p),type:"success",round:""},{default:a(()=>[r("+ Подзаголовок")]),_:2},1032,["onClick"]),t(o,{onClick:e=>B(p),type:"success",round:""},{default:a(()=>[r("+ Текст")]),_:2},1032,["onClick"]),t(o,{onClick:e=>F(p),type:"success",round:""},{default:a(()=>[r("+ Картинка")]),_:2},1032,["onClick"])])]),_:2},1024))),128)),t(E,null,{default:a(()=>[t(j,{span:6},{default:a(()=>[t(o,{onClick:L,type:"success",round:""},{default:a(()=>[r("+ Добавить секцию")]),_:1})]),_:1})]),_:1})],64)}}};export{Z as default};
