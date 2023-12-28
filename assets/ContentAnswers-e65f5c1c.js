import V from"./WarningParameters-77bb414a.js";import z from"./WarningCombination-6ec86b58.js";import{r as N,a as s,o as d,c as p,b as e,w as t,f as _,d as c,x as i,F as U,e as h,z as O,k as W,y as F,A as H}from"./index-9c45d8e2.js";import P from"./ColorItem-03948f08.js";const E={key:0},M={key:1},S={key:0},j={key:1},X={__name:"ContentAnswers",props:["componentData"],setup(u){const n=u,v=N(!1),A=C=>{n.componentData.answersList.splice(C,1)},L=C=>{let a=n.componentData.combinationOfAnswers.findIndex(f=>f.name===C);n.componentData.combinationOfAnswers.splice(a,1)},R=()=>{n.componentData.combinationOfAnswers.push({name:"",isCorrect:!0,combinationWarning:{text:"",color:"",image:"",showTime:0,buttons:[{buttonName:"Закрыть",action:{name:"closeModalWarning"}}]}})},q=()=>{console.log(n.componentData),n.componentData.answersList.push({answerText:"",isRight:!1,notRequired:!1,image:{imageURL:"",label:""},isRightAlt:!1})},B=()=>{n.componentData.showLegend=!0,n.componentData.legendText="",n.componentData.legendColoredText="",n.componentData.legendTextColor="",v.value=!0};return(C,a)=>{const f=s("el-switch"),o=s("el-form-item"),k=s("el-option"),I=s("el-select"),g=s("el-divider"),D=s("el-input"),y=s("el-button"),$=s("el-input-number"),m=s("el-col"),b=s("el-row"),x=s("el-text"),w=s("el-checkbox");return d(),p(U,null,[e(o,{label:"Множественный выбор:"},{default:t(()=>[e(f,{modelValue:n.componentData.multiple,"onUpdate:modelValue":a[0]||(a[0]=l=>n.componentData.multiple=l)},null,8,["modelValue"])]),_:1}),e(o,{label:"Вид кнопок:"},{default:t(()=>[e(I,{modelValue:n.componentData.answersButtonType,"onUpdate:modelValue":a[1]||(a[1]=l=>n.componentData.answersButtonType=l),placeholder:"please select"},{default:t(()=>[e(k,{label:"Чекбоксы",value:"checkboxes"}),e(k,{label:"Кнопки",value:"buttons"}),e(k,{label:"Картинки+чекбоксы",value:"imageCheckboxes"})]),_:1},8,["modelValue"])]),_:1}),e(g),e(o,{label:"Подсказки:"},{default:t(()=>[e(f,{modelValue:n.componentData.hints,"onUpdate:modelValue":a[2]||(a[2]=l=>n.componentData.hints=l)},null,8,["modelValue"])]),_:1}),n.componentData.hints?(d(),p("div",E,[e(o,{label:"Количество подсказок:"},{default:t(()=>[e(D,{modelValue:n.componentData.totalHints,"onUpdate:modelValue":a[3]||(a[3]=l=>n.componentData.totalHints=l)},null,8,["modelValue"])]),_:1}),e(o,{label:"Анонс подсказки:"},{default:t(()=>[e(D,{modelValue:n.componentData.hintText,"onUpdate:modelValue":a[4]||(a[4]=l=>n.componentData.hintText=l)},null,8,["modelValue"])]),_:1}),u.componentData.showLegend===void 0?(d(),_(y,{key:0,onClick:B},{default:t(()=>[c("Добавить легенду")]),_:1})):i("",!0),v.value||u.componentData.showLegend!=null?(d(),p("div",M,[e(o,{label:"Показывать легенду альтернативных ответов:"},{default:t(()=>[e(f,{modelValue:u.componentData.showLegend,"onUpdate:modelValue":a[5]||(a[5]=l=>u.componentData.showLegend=l)},null,8,["modelValue"])]),_:1}),u.componentData.showLegend?(d(),p("div",S,[e(o,{label:"Текст легенды альтернативных ответов:"},{default:t(()=>[e(D,{modelValue:u.componentData.legendText,"onUpdate:modelValue":a[6]||(a[6]=l=>u.componentData.legendText=l)},null,8,["modelValue"])]),_:1}),e(o,{label:"Текст легенды альтернативных ответов цветной:"},{default:t(()=>[e(D,{modelValue:u.componentData.legendColoredText,"onUpdate:modelValue":a[7]||(a[7]=l=>u.componentData.legendColoredText=l)},null,8,["modelValue"])]),_:1}),e(o,{label:"Цвет:"},{default:t(()=>[e(P,{modelValue:u.componentData.legendTextColor,"onUpdate:modelValue":a[8]||(a[8]=l=>u.componentData.legendTextColor=l)},null,8,["modelValue"])]),_:1})])):i("",!0)])):i("",!0),e(V,{parameters:n.componentData.hintWarning},null,8,["parameters"])])):i("",!0),e(g),e(o,{label:"Предупреждения:"},{default:t(()=>[e(f,{modelValue:n.componentData.warnings,"onUpdate:modelValue":a[9]||(a[9]=l=>n.componentData.warnings=l)},null,8,["modelValue"])]),_:1}),n.componentData.warnings?(d(),p("div",j,[e(o,{label:"Все верные:"}),e(V,{parameters:n.componentData.allCorrect},null,8,["parameters"]),e(o,{label:"Все неверные/часть неверных:"}),e(V,{parameters:n.componentData.allInorrectPartlyIncorrect},null,8,["parameters"]),e(o,{label:"Часть верных:"}),e(V,{parameters:n.componentData.partlyCorrect},null,8,["parameters"]),e(o,{label:"Часть верных + неверные:"}),e(V,{parameters:n.componentData.partlyCorrectpartlyIncorrect},null,8,["parameters"]),e(o,{label:"Все верные + неверные:"}),e(V,{parameters:n.componentData.allCorrectPartlyIncorrect},null,8,["parameters"]),e(o,{label:"Комбинации:"}),(d(!0),p(U,null,h(n.componentData.combinationOfAnswers,l=>(d(),p("div",null,[e(z,{parameters:l,onDeleteCombination:L},null,8,["parameters","onDeleteCombination"])]))),256)),e(y,{type:"success",round:"",onClick:R},{default:t(()=>[c("+ Добавить комбинацию")]),_:1})])):i("",!0),e(g),e(o,{label:"Стили:"},{default:t(()=>[e(o,{label:"Кол-во колонок:"},{default:t(()=>[e($,{modelValue:n.componentData.columns,"onUpdate:modelValue":a[10]||(a[10]=l=>n.componentData.columns=l),min:1,max:10},null,8,["modelValue"])]),_:1})]),_:1}),e(g),e(o,{label:"Содержание вопроса:"}),e(b,null,{default:t(()=>[e(m,{span:1}),e(m,{class:"question_text_col",span:12},{default:t(()=>[e(D,{modelValue:n.componentData.questionText,"onUpdate:modelValue":a[11]||(a[11]=l=>n.componentData.questionText=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(m,{span:1}),e(m,{span:12},{default:t(()=>[e(x,null,{default:t(()=>[c("Текст ответа")]),_:1})]),_:1}),e(m,{span:3},{default:t(()=>[e(x,null,{default:t(()=>[c("Правильный")]),_:1})]),_:1}),e(m,{span:3},{default:t(()=>[e(x,null,{default:t(()=>[c("Альт. прав.")]),_:1})]),_:1}),u.componentData.multiple?(d(),_(m,{key:0,span:3},{default:t(()=>[e(x,null,{default:t(()=>[c("Прав. необ.")]),_:1})]),_:1})):i("",!0),e(m,{span:2})]),_:1}),(d(!0),p(U,null,h(u.componentData.answersList,(l,T)=>(d(),_(b,{key:T,gutter:20},{default:t(()=>[e(m,{span:1},{default:t(()=>[e(x,null,{default:t(()=>[c(O(T+1),1)]),_:2},1024)]),_:2},1024),e(m,{span:12},{default:t(()=>[e(D,{modelValue:l.answerText,"onUpdate:modelValue":r=>l.answerText=r},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(m,{span:3},{default:t(()=>[e(w,{modelValue:l.isRight,"onUpdate:modelValue":r=>l.isRight=r,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l.isRightAlt!=null?(d(),_(m,{key:0,span:3},{default:t(()=>[e(w,{modelValue:l.isRightAlt,"onUpdate:modelValue":r=>l.isRightAlt=r,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):i("",!0),u.componentData.multiple?(d(),_(m,{key:1,span:3},{default:t(()=>[e(w,{modelValue:l.notRequired,"onUpdate:modelValue":r=>l.notRequired=r,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):i("",!0),e(m,{span:2},{default:t(()=>[e(y,{type:"danger",icon:W(F),circle:"",onClick:r=>A(T)},null,8,["icon","onClick"])]),_:2},1024),u.componentData.answersButtonType==="imageCheckboxes"&&l.image!=null?(d(),_(b,{key:2},{default:t(()=>[e(H,{image:l.image,hideLabel:!0},null,8,["image"])]),_:2},1024)):i("",!0)]),_:2},1024))),128)),e(g),e(b,null,{default:t(()=>[e(m,{span:6},{default:t(()=>[e(y,{onClick:q,type:"success",round:""},{default:t(()=>[c("+ Добавить поле")]),_:1})]),_:1})]),_:1})],64)}}};export{X as default};
