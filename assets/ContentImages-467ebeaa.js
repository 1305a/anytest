import{a as t,o as c,c as _,b as e,w as n,F as d,e as D,f as L,A as V,k as v,y as w,d as x}from"./index-3295cf34.js";const B={__name:"ContentImages",props:["componentData"],setup(o){const a=o,p=()=>{a.componentData.imagesList.push({imageURL:"",label:""})},f=s=>{a.componentData.imagesList.splice(s,1)};return(s,m)=>{const g=t("el-input-number"),k=t("el-form-item"),i=t("el-col"),r=t("el-button"),b=t("el-divider"),C=t("el-row");return c(),_(d,null,[e(k,{label:"Ширина картинок (%):"},{default:n(()=>[e(g,{modelValue:o.componentData.imagesWidthPercent,"onUpdate:modelValue":m[0]||(m[0]=l=>o.componentData.imagesWidthPercent=l),min:1,max:100},null,8,["modelValue"])]),_:1}),(c(!0),_(d,null,D(a.componentData.imagesList,(l,u)=>(c(),L(C,{key:u},{default:n(()=>[e(i,{span:22},{default:n(()=>[e(V,{image:l},null,8,["image"])]),_:2},1024),e(i,{span:2},{default:n(()=>[e(r,{type:"danger",icon:v(w),circle:"",onClick:y=>f(u)},null,8,["icon","onClick"])]),_:2},1024),e(b)]),_:2},1024))),128)),e(r,{onClick:p,type:"success",round:""},{default:n(()=>[x("+ Добавить картинку")]),_:1})],64)}}};export{B as default};
