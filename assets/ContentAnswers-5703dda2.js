import p from"./WarningParameters-8690d563.js";import L from"./WarningCombination-a19e1987.js";import{r as m,o as u,c as d,f as e,w as n,l as U,F as g,m as k,j as c,b as N,t as O,g as q,n as W}from"./index-0363f83e.js";import"./Editor-30157460.js";import"./ImageItem-cf013da3.js";const $={key:0},z={key:1},M={__name:"ContentAnswers",props:["componentData"],setup(h){const t=h,v=f=>{t.componentData.answersList.splice(f,1)},T=f=>{let a=t.componentData.combinationOfAnswers.findIndex(i=>i.name===f);t.componentData.combinationOfAnswers.splice(a,1)},A=()=>{t.componentData.combinationOfAnswers.push({name:"",isCorrect:!0,combinationWarning:{text:"",color:"",image:"",showTime:0,buttons:[{buttonName:"Закрыть",action:{name:"closeModalWarning"}}]}})},R=()=>{t.componentData.answersList.push({answerText:"",isRight:!1,notRequired:!1})};return(f,a)=>{const i=m("el-switch"),o=m("el-form-item"),C=m("el-option"),B=m("el-select"),_=m("el-divider"),V=m("el-input"),D=m("el-button"),I=m("el-input-number"),s=m("el-col"),b=m("el-text"),w=m("el-row"),x=m("el-checkbox");return u(),d(g,null,[e(o,{label:"Множественный выбор:"},{default:n(()=>[e(i,{modelValue:t.componentData.multiple,"onUpdate:modelValue":a[0]||(a[0]=l=>t.componentData.multiple=l)},null,8,["modelValue"])]),_:1}),e(o,{label:"Вид кнопок:"},{default:n(()=>[e(B,{modelValue:t.componentData.answersButtonType,"onUpdate:modelValue":a[1]||(a[1]=l=>t.componentData.answersButtonType=l),placeholder:"please select"},{default:n(()=>[e(C,{label:"Чекбоксы",value:"checkboxes"}),e(C,{label:"Кнопки",value:"buttons"})]),_:1},8,["modelValue"])]),_:1}),e(_),e(o,{label:"Подсказки:"},{default:n(()=>[e(i,{modelValue:t.componentData.hints,"onUpdate:modelValue":a[2]||(a[2]=l=>t.componentData.hints=l)},null,8,["modelValue"])]),_:1}),t.componentData.hints?(u(),d("div",$,[e(o,{label:"Количество подсказок:"},{default:n(()=>[e(V,{modelValue:t.componentData.totalHints,"onUpdate:modelValue":a[3]||(a[3]=l=>t.componentData.totalHints=l)},null,8,["modelValue"])]),_:1}),e(o,{label:"Строка с подсказкой:"},{default:n(()=>[e(V,{modelValue:t.componentData.hintText,"onUpdate:modelValue":a[4]||(a[4]=l=>t.componentData.hintText=l)},null,8,["modelValue"])]),_:1}),e(p,{parameters:t.componentData.hintWarning},null,8,["parameters"])])):U("",!0),e(_),e(o,{label:"Предупреждения:"},{default:n(()=>[e(i,{modelValue:t.componentData.warnings,"onUpdate:modelValue":a[5]||(a[5]=l=>t.componentData.warnings=l)},null,8,["modelValue"])]),_:1}),t.componentData.warnings?(u(),d("div",z,[e(o,{label:"Все верные:"}),e(p,{parameters:t.componentData.allCorrect},null,8,["parameters"]),e(o,{label:"Все неверные/часть неверных:"}),e(p,{parameters:t.componentData.allInorrectPartlyIncorrect},null,8,["parameters"]),e(o,{label:"Часть верных:"}),e(p,{parameters:t.componentData.partlyCorrect},null,8,["parameters"]),e(o,{label:"Часть верных + неверные:"}),e(p,{parameters:t.componentData.partlyCorrectpartlyIncorrect},null,8,["parameters"]),e(o,{label:"Все верные + неверные:"}),e(p,{parameters:t.componentData.allCorrectPartlyIncorrect},null,8,["parameters"]),e(o,{label:"Комбинации:"}),(u(!0),d(g,null,k(t.componentData.combinationOfAnswers,l=>(u(),d("div",null,[e(L,{parameters:l,onDeleteCombination:T},null,8,["parameters","onDeleteCombination"])]))),256)),e(D,{type:"success",round:"",onClick:A},{default:n(()=>[c("+ Добавить комбинацию")]),_:1})])):U("",!0),e(_),e(o,{label:"Стили:"},{default:n(()=>[e(o,{label:"Кол-во колонок:"},{default:n(()=>[e(I,{modelValue:t.componentData.columns,"onUpdate:modelValue":a[6]||(a[6]=l=>t.componentData.columns=l),min:1,max:10},null,8,["modelValue"])]),_:1})]),_:1}),e(_),e(w,null,{default:n(()=>[e(s,{span:1}),e(s,{span:15},{default:n(()=>[e(b,null,{default:n(()=>[c("Текст ответа")]),_:1})]),_:1}),e(s,{span:3},{default:n(()=>[e(b,null,{default:n(()=>[c("Правильный")]),_:1})]),_:1}),e(s,{span:3},{default:n(()=>[e(b,null,{default:n(()=>[c("Правильный необязательный")]),_:1})]),_:1}),e(s,{span:2})]),_:1}),(u(!0),d(g,null,k(t.componentData.answersList,(l,y)=>(u(),N(w,{gutter:20},{default:n(()=>[e(s,{span:1},{default:n(()=>[e(b,null,{default:n(()=>[c(O(y+1),1)]),_:2},1024)]),_:2},1024),e(s,{span:15},{default:n(()=>[e(V,{modelValue:l.answerText,"onUpdate:modelValue":r=>l.answerText=r},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{span:3},{default:n(()=>[e(x,{modelValue:l.isRight,"onUpdate:modelValue":r=>l.isRight=r,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{span:3},{default:n(()=>[e(x,{modelValue:l.notRequired,"onUpdate:modelValue":r=>l.notRequired=r,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{span:2},{default:n(()=>[e(D,{type:"danger",icon:q(W),circle:"",onClick:r=>v(y)},null,8,["icon","onClick"])]),_:2},1024)]),_:2},1024))),256)),e(_),e(w,null,{default:n(()=>[e(s,{span:6},{default:n(()=>[e(D,{onClick:R,type:"success",round:""},{default:n(()=>[c("+ Добавить поле")]),_:1})]),_:1})]),_:1})],64)}}};export{M as default};
