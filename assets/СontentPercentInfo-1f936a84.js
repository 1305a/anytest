import{r as V,a as l,o as d,c as i,b as e,w as a,k as D,l as b,v as x,x as v,C,F as k}from"./index-399efba3.js";const w={key:0},y={__name:"СontentPercentInfo",props:["componentData"],emits:["deleteCombination"],setup(c,{emit:P}){const t=c,u=V(!1),r=()=>{u.value=!u.value};return(g,n)=>{const _=l("el-input"),s=l("el-col"),f=l("el-button"),m=l("el-form-item"),p=l("el-input-number");return d(),i(k,null,[e(m,{label:"Текст:"},{default:a(()=>[e(s,{span:22},{default:a(()=>[e(_,{modelValue:t.componentData.text,"onUpdate:modelValue":n[0]||(n[0]=o=>t.componentData.text=o),width:"30vw"},null,8,["modelValue"])]),_:1}),e(s,{span:2},{default:a(()=>[e(f,{type:"primary",icon:D(b),plain:"",onClick:r},null,8,["icon"])]),_:1})]),_:1}),e(s,{span:24},{default:a(()=>[u.value?(d(),i("div",w,[e(x,{modelValue:t.componentData.text,"onUpdate:modelValue":n[1]||(n[1]=o=>t.componentData.text=o)},null,8,["modelValue"])])):v("",!0)]),_:1}),e(m,{label:"Первое значение:"},{default:a(()=>[e(p,{modelValue:t.componentData.firstPercent,"onUpdate:modelValue":n[2]||(n[2]=o=>t.componentData.firstPercent=o),min:1,max:100},null,8,["modelValue"])]),_:1}),e(m,{label:"Второе значение:"},{default:a(()=>[e(p,{modelValue:t.componentData.secondPercent,"onUpdate:modelValue":n[3]||(n[3]=o=>t.componentData.secondPercent=o),min:1,max:100},null,8,["modelValue"])]),_:1}),e(m,{label:"Картинка:"},{default:a(()=>[e(C,{imageData:t.componentData.image},null,8,["imageData"])]),_:1})],64)}}};export{y as default};
