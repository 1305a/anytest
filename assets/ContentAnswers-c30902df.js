import p from"./WarningParameters-c91ae9d3.js";import z from"./WarningCombination-99e1d024.js";import{a as m,o as s,c as i,b as e,w as t,x as D,F as h,e as A,d,f as w,z as N,k as O,y as $}from"./index-62860e6f.js";import q from"./ImageItem-86e0c046.js";const W={key:0},F={key:1},S={__name:"ContentAnswers",props:["componentData"],setup(U){const l=U,v=b=>{l.componentData.answersList.splice(b,1)},R=b=>{let a=l.componentData.combinationOfAnswers.findIndex(c=>c.name===b);l.componentData.combinationOfAnswers.splice(a,1)},T=()=>{l.componentData.combinationOfAnswers.push({name:"",isCorrect:!0,combinationWarning:{text:"",color:"",image:"",showTime:0,buttons:[{buttonName:"Закрыть",action:{name:"closeModalWarning"}}]}})},B=()=>{l.componentData.answersList.push({answerText:"",isRight:!1,notRequired:!1,image:"",isRightAlt:!1})};return(b,a)=>{const c=m("el-switch"),o=m("el-form-item"),g=m("el-option"),I=m("el-select"),_=m("el-divider"),C=m("el-input"),k=m("el-button"),L=m("el-input-number"),u=m("el-col"),f=m("el-text"),V=m("el-row"),x=m("el-checkbox");return s(),i(h,null,[e(o,{label:"Множественный выбор:"},{default:t(()=>[e(c,{modelValue:l.componentData.multiple,"onUpdate:modelValue":a[0]||(a[0]=n=>l.componentData.multiple=n)},null,8,["modelValue"])]),_:1}),e(o,{label:"Вид кнопок:"},{default:t(()=>[e(I,{modelValue:l.componentData.answersButtonType,"onUpdate:modelValue":a[1]||(a[1]=n=>l.componentData.answersButtonType=n),placeholder:"please select"},{default:t(()=>[e(g,{label:"Чекбоксы",value:"checkboxes"}),e(g,{label:"Кнопки",value:"buttons"}),e(g,{label:"Картинки+чекбоксы",value:"imageCheckboxes"})]),_:1},8,["modelValue"])]),_:1}),e(_),e(o,{label:"Подсказки:"},{default:t(()=>[e(c,{modelValue:l.componentData.hints,"onUpdate:modelValue":a[2]||(a[2]=n=>l.componentData.hints=n)},null,8,["modelValue"])]),_:1}),l.componentData.hints?(s(),i("div",W,[e(o,{label:"Количество подсказок:"},{default:t(()=>[e(C,{modelValue:l.componentData.totalHints,"onUpdate:modelValue":a[3]||(a[3]=n=>l.componentData.totalHints=n)},null,8,["modelValue"])]),_:1}),e(o,{label:"Строка с подсказкой:"},{default:t(()=>[e(C,{modelValue:l.componentData.hintText,"onUpdate:modelValue":a[4]||(a[4]=n=>l.componentData.hintText=n)},null,8,["modelValue"])]),_:1}),e(p,{parameters:l.componentData.hintWarning},null,8,["parameters"])])):D("",!0),e(_),e(o,{label:"Предупреждения:"},{default:t(()=>[e(c,{modelValue:l.componentData.warnings,"onUpdate:modelValue":a[5]||(a[5]=n=>l.componentData.warnings=n)},null,8,["modelValue"])]),_:1}),l.componentData.warnings?(s(),i("div",F,[e(o,{label:"Все верные:"}),e(p,{parameters:l.componentData.allCorrect},null,8,["parameters"]),e(o,{label:"Все неверные/часть неверных:"}),e(p,{parameters:l.componentData.allInorrectPartlyIncorrect},null,8,["parameters"]),e(o,{label:"Часть верных:"}),e(p,{parameters:l.componentData.partlyCorrect},null,8,["parameters"]),e(o,{label:"Часть верных + неверные:"}),e(p,{parameters:l.componentData.partlyCorrectpartlyIncorrect},null,8,["parameters"]),e(o,{label:"Все верные + неверные:"}),e(p,{parameters:l.componentData.allCorrectPartlyIncorrect},null,8,["parameters"]),e(o,{label:"Комбинации:"}),(s(!0),i(h,null,A(l.componentData.combinationOfAnswers,n=>(s(),i("div",null,[e(z,{parameters:n,onDeleteCombination:R},null,8,["parameters","onDeleteCombination"])]))),256)),e(k,{type:"success",round:"",onClick:T},{default:t(()=>[d("+ Добавить комбинацию")]),_:1})])):D("",!0),e(_),e(o,{label:"Стили:"},{default:t(()=>[e(o,{label:"Кол-во колонок:"},{default:t(()=>[e(L,{modelValue:l.componentData.columns,"onUpdate:modelValue":a[6]||(a[6]=n=>l.componentData.columns=n),min:1,max:10},null,8,["modelValue"])]),_:1})]),_:1}),e(_),e(V,null,{default:t(()=>[e(u,{span:1}),e(u,{span:12},{default:t(()=>[e(f,null,{default:t(()=>[d("Текст ответа")]),_:1})]),_:1}),e(u,{span:3},{default:t(()=>[e(f,null,{default:t(()=>[d("Правильный")]),_:1})]),_:1}),e(u,{span:3},{default:t(()=>[e(f,null,{default:t(()=>[d("Альт. прав.")]),_:1})]),_:1}),e(u,{span:3},{default:t(()=>[e(f,null,{default:t(()=>[d("Прав. необ.")]),_:1})]),_:1}),e(u,{span:2})]),_:1}),(s(!0),i(h,null,A(l.componentData.answersList,(n,y)=>(s(),w(V,{key:y,gutter:20},{default:t(()=>[e(u,{span:1},{default:t(()=>[e(f,null,{default:t(()=>[d(N(y+1),1)]),_:2},1024)]),_:2},1024),e(u,{span:12},{default:t(()=>[e(C,{modelValue:n.answerText,"onUpdate:modelValue":r=>n.answerText=r},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(u,{span:3},{default:t(()=>[e(x,{modelValue:n.isRight,"onUpdate:modelValue":r=>n.isRight=r,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),n.isRightAlt!=null?(s(),w(u,{key:0,span:3},{default:t(()=>[e(x,{modelValue:n.isRightAlt,"onUpdate:modelValue":r=>n.isRightAlt=r,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):D("",!0),e(u,{span:3},{default:t(()=>[e(x,{modelValue:n.notRequired,"onUpdate:modelValue":r=>n.notRequired=r,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(u,{span:2},{default:t(()=>[e(k,{type:"danger",icon:O($),circle:"",onClick:r=>v(y)},null,8,["icon","onClick"])]),_:2},1024),U.componentData.answersButtonType==="imageCheckboxes"&&n.image!=null?(s(),w(V,{key:1},{default:t(()=>[e(q,{image:n.image,hideLabel:!0},null,8,["image"])]),_:2},1024)):D("",!0)]),_:2},1024))),128)),e(_),e(V,null,{default:t(()=>[e(u,{span:6},{default:t(()=>[e(k,{onClick:B,type:"success",round:""},{default:t(()=>[d("+ Добавить поле")]),_:1})]),_:1})]),_:1})],64)}}};export{S as default};
