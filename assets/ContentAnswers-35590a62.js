import{r as u,o as _,c as T,b as e,w as l,d as m,F as U,e as v,f as R,t as B,u as L,g as q}from"./index-7ac8dfbb.js";const z={__name:"ContentAnswers",props:["componentData"],setup(w){const o=w,g=i=>{o.componentData.answersList.splice(i,1)},C=()=>{o.componentData.answersList.push({answerText:"",isRight:!1,notRequired:!1})};return(i,n)=>{const f=u("el-switch"),d=u("el-form-item"),V=u("el-option"),k=u("el-select"),s=u("el-input"),a=u("el-col"),r=u("el-text"),c=u("el-row"),D=u("el-checkbox"),x=u("el-button"),y=u("el-divider");return _(),T(U,null,[e(d,{label:"Множественный выбор:"},{default:l(()=>[e(f,{modelValue:o.componentData.multiple,"onUpdate:modelValue":n[0]||(n[0]=t=>o.componentData.multiple=t)},null,8,["modelValue"])]),_:1}),e(d,{label:"Вид кнопок:"},{default:l(()=>[e(k,{modelValue:o.componentData.answersButtonType,"onUpdate:modelValue":n[1]||(n[1]=t=>o.componentData.answersButtonType=t),placeholder:"please select"},{default:l(()=>[e(V,{label:"Чекбоксы",value:"checkboxes"}),e(V,{label:"Кнопки",value:"buttons"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"Подсказки:"},{default:l(()=>[e(f,{modelValue:o.componentData.hints,"onUpdate:modelValue":n[2]||(n[2]=t=>o.componentData.hints=t)},null,8,["modelValue"])]),_:1}),e(d,{label:"Количество подсказок:"},{default:l(()=>[e(s,{modelValue:o.componentData.totalHints,"onUpdate:modelValue":n[3]||(n[3]=t=>o.componentData.totalHints=t)},null,8,["modelValue"])]),_:1}),e(d,{label:"Строка с подсказкой:"},{default:l(()=>[e(s,{modelValue:o.componentData.hintText,"onUpdate:modelValue":n[4]||(n[4]=t=>o.componentData.hintText=t)},null,8,["modelValue"])]),_:1}),e(d,{label:"Предупреждение верно (по умолчанию):"},{default:l(()=>[e(s,{modelValue:o.componentData.correctTextDefault,"onUpdate:modelValue":n[5]||(n[5]=t=>o.componentData.correctTextDefault=t)},null,8,["modelValue"])]),_:1}),e(d,{label:"Предупреждение частично верно (по умолчанию):"},{default:l(()=>[e(s,{modelValue:o.componentData.partlyCorrectTextDefault,"onUpdate:modelValue":n[6]||(n[6]=t=>o.componentData.partlyCorrectTextDefault=t)},null,8,["modelValue"])]),_:1}),e(d,{label:"Предупреждение неверно (по умолчанию):"},{default:l(()=>[e(s,{modelValue:o.componentData.notCorrectTextDefault,"onUpdate:modelValue":n[7]||(n[7]=t=>o.componentData.notCorrectTextDefault=t)},null,8,["modelValue"])]),_:1}),e(c,null,{default:l(()=>[e(a,{span:1}),e(a,{span:15},{default:l(()=>[e(r,null,{default:l(()=>[m("Текст пунктов выбора")]),_:1})]),_:1}),e(a,{span:3},{default:l(()=>[e(r,null,{default:l(()=>[m("Правильный")]),_:1})]),_:1}),e(a,{span:3},{default:l(()=>[e(r,null,{default:l(()=>[m("Правильный необязательный")]),_:1})]),_:1}),e(a,{span:2})]),_:1}),(_(!0),T(U,null,v(o.componentData.answersList,(t,b)=>(_(),R(c,{gutter:20},{default:l(()=>[e(a,{span:1},{default:l(()=>[e(r,null,{default:l(()=>[m(B(b+1),1)]),_:2},1024)]),_:2},1024),e(a,{span:15},{default:l(()=>[e(s,{modelValue:t.answerText,"onUpdate:modelValue":p=>t.answerText=p},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(a,{span:3},{default:l(()=>[e(D,{modelValue:t.isRight,"onUpdate:modelValue":p=>t.isRight=p,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(a,{span:3},{default:l(()=>[e(D,{modelValue:t.notRequired,"onUpdate:modelValue":p=>t.notRequired=p,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(a,{span:2},{default:l(()=>[e(x,{type:"danger",icon:L(q),circle:"",onClick:p=>g(b)},null,8,["icon","onClick"])]),_:2},1024)]),_:2},1024))),256)),e(y),e(c,null,{default:l(()=>[e(a,{span:6},{default:l(()=>[e(x,{onClick:C,type:"success",round:""},{default:l(()=>[m("+ Добавить поле")]),_:1})]),_:1})]),_:1})],64)}}};export{z as default};
