import{y as D,d as f,r as n,o as r,c as _,f as l,w as o,F as g,m as S,j as b,b as $,t as k,l as L,z as U}from"./index-feb63d9f.js";import z from"./ImageItem-9e59d5eb.js";const E={__name:"ActionButton",props:["section"],emits:["update:buttonName"],setup(a){const V=a,y=D().params.testId,s=f(!1),i=f([]),N=[{value:"previous",label:"Назад"},{value:"next",label:"Далее"},{value:"moveToStep",label:"Переход к блоку"},{value:"closeModalWarning",label:"Закрыть модальное окно"},{value:"startAgain",label:"Начать заново"}],w=async()=>{const c=await U.getBlocks(y);i.value=c.data.data.map(e=>({seqNo:e.seq_no,internalId:e.internal_id,name:e.body.name})),i.value.sort((e,d)=>e.seqNo-d.seqNo)},I=async()=>{s.value=!0,await w()},B=(c,e)=>{V.section.action.internalId=e.internalId,s.value=!1};return(c,e)=>{const d=n("el-input"),m=n("el-form-item"),C=n("el-option"),q=n("el-select"),p=n("el-button"),u=n("el-table-column"),x=n("el-table"),T=n("el-dialog");return r(),_(g,null,[l(m,{label:"Текст:"},{default:o(()=>[l(d,{modelValue:a.section.buttonName,"onUpdate:modelValue":e[0]||(e[0]=t=>a.section.buttonName=t)},null,8,["modelValue"]),l(z,{imageData:a.section.image},null,8,["imageData"])]),_:1}),l(m,{label:"Действие:"},{default:o(()=>[l(q,{class:"m-2",modelValue:a.section.action.name,"onUpdate:modelValue":e[1]||(e[1]=t=>a.section.action.name=t),placeholder:"Select"},{default:o(()=>[(r(),_(g,null,S(N,t=>l(C,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),l(p,{onClick:e[2]||(e[2]=t=>I())},{default:o(()=>[b("Выбрать блок")]),_:1}),l(T,{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=t=>s.value=t),title:"Выберите блок"},{default:o(()=>[l(x,{data:i.value},{default:o(()=>[l(u,{property:"seqNo",label:"Порядковый номер",width:"110"}),l(u,{property:"internalId",label:"Внутренний id",width:"120"}),l(u,{property:"name",label:"Наименование блока",width:"300"}),l(u,{property:"name",label:"Выбор",width:"100"},{default:o(t=>[l(p,{size:"small",onClick:v=>B(t.$index,t.row)},{default:o(()=>[b("Выбрать")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue"]),a.section.action.name==="moveToStep"?(r(),$(m,{key:0,label:"Внутренний id:"},{default:o(()=>{var t;return[b(k(a.section.action.internalId)+" Блок: "+k((t=i.value.find(v=>v.internalId===a.section.action.internalId))==null?void 0:t.name),1)]}),_:1})):L("",!0)]),_:1})],64)}}};export{E as default};
