import d from"./WarningParameters-8690d563.js";import{r as n,o as f,c as b,f as e,w as a,g as C,n as V,F as w}from"./index-0363f83e.js";import"./Editor-30157460.js";import"./ImageItem-cf013da3.js";const B={__name:"WarningCombination",props:["parameters"],emits:["deleteCombination"],setup(s,{emit:i}){const t=s,p=()=>{i("deleteCombination",t.parameters.name)};return(g,o)=>{const c=n("el-input"),r=n("el-col"),u=n("el-button"),_=n("el-switch"),m=n("el-form-item");return f(),b(w,null,[e(m,{label:"Комбинация:"},{default:a(()=>[e(r,{span:15},{default:a(()=>[e(c,{modelValue:t.parameters.name,"onUpdate:modelValue":o[0]||(o[0]=l=>t.parameters.name=l)},null,8,["modelValue"])]),_:1}),e(r,{span:4},{default:a(()=>[e(u,{type:"danger",icon:C(V),circle:"",onClick:o[1]||(o[1]=l=>p())},null,8,["icon"])]),_:1}),e(m,{label:"Правильная:"},{default:a(()=>[e(_,{modelValue:t.parameters.isCorrect,"onUpdate:modelValue":o[2]||(o[2]=l=>t.parameters.isCorrect=l),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{parameters:t.parameters.combinationWarning},null,8,["parameters"])],64)}}};export{B as default};
