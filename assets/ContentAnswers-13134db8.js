import r from"./WarningParameters-6f90d2d6.js";import{d as u,o as m,c as i,f as e,w as t,j as y,g as d,F as U,k as R,e as B,t as I,u as L,l as q}from"./index-ddb59e63.js";const A={key:0},N={key:1},H={__name:"ContentAnswers",props:["componentData"],setup(C){const l=C,h=b=>{l.componentData.answersList.splice(b,1)},v=()=>{l.componentData.answersList.push({answerText:"",isRight:!1,notRequired:!1})};return(b,n)=>{const f=u("el-switch"),o=u("el-form-item"),w=u("el-option"),T=u("el-select"),c=u("el-divider"),V=u("el-input"),s=u("el-col"),_=u("el-text"),D=u("el-row"),g=u("el-checkbox"),x=u("el-button");return m(),i(U,null,[e(o,{label:"Множественный выбор:"},{default:t(()=>[e(f,{modelValue:l.componentData.multiple,"onUpdate:modelValue":n[0]||(n[0]=a=>l.componentData.multiple=a)},null,8,["modelValue"])]),_:1}),e(o,{label:"Вид кнопок:"},{default:t(()=>[e(T,{modelValue:l.componentData.answersButtonType,"onUpdate:modelValue":n[1]||(n[1]=a=>l.componentData.answersButtonType=a),placeholder:"please select"},{default:t(()=>[e(w,{label:"Чекбоксы",value:"checkboxes"}),e(w,{label:"Кнопки",value:"buttons"})]),_:1},8,["modelValue"])]),_:1}),e(c),e(o,{label:"Подсказки:"},{default:t(()=>[e(f,{modelValue:l.componentData.hints,"onUpdate:modelValue":n[2]||(n[2]=a=>l.componentData.hints=a)},null,8,["modelValue"])]),_:1}),l.componentData.hints?(m(),i("div",A,[e(o,{label:"Количество подсказок:"},{default:t(()=>[e(V,{modelValue:l.componentData.totalHints,"onUpdate:modelValue":n[3]||(n[3]=a=>l.componentData.totalHints=a)},null,8,["modelValue"])]),_:1}),e(o,{label:"Строка с подсказкой:"},{default:t(()=>[e(V,{modelValue:l.componentData.hintText,"onUpdate:modelValue":n[4]||(n[4]=a=>l.componentData.hintText=a)},null,8,["modelValue"])]),_:1}),e(r,{parameters:l.componentData.hintWarning},null,8,["parameters"])])):y("",!0),e(c),e(o,{label:"Предупреждения:"},{default:t(()=>[e(f,{modelValue:l.componentData.warnings,"onUpdate:modelValue":n[5]||(n[5]=a=>l.componentData.warnings=a)},null,8,["modelValue"])]),_:1}),l.componentData.warnings?(m(),i("div",N,[e(o,{label:"Все верные:"}),e(r,{parameters:l.componentData.allCorrect},null,8,["parameters"]),e(o,{label:"Все неверные/часть неверных:"}),e(r,{parameters:l.componentData.allInorrectPartlyIncorrect},null,8,["parameters"]),e(o,{label:"Часть верных:"}),e(r,{parameters:l.componentData.partlyCorrect},null,8,["parameters"]),e(o,{label:"Часть верных + неверные:"}),e(r,{parameters:l.componentData.partlyCorrectpartlyIncorrect},null,8,["parameters"]),e(o,{label:"Все верные + неверные:"}),e(r,{parameters:l.componentData.allCorrectPartlyIncorrect},null,8,["parameters"])])):y("",!0),e(c),e(D,null,{default:t(()=>[e(s,{span:1}),e(s,{span:15},{default:t(()=>[e(_,null,{default:t(()=>[d("Текст ответа")]),_:1})]),_:1}),e(s,{span:3},{default:t(()=>[e(_,null,{default:t(()=>[d("Правильный")]),_:1})]),_:1}),e(s,{span:3},{default:t(()=>[e(_,null,{default:t(()=>[d("Правильный необязательный")]),_:1})]),_:1}),e(s,{span:2})]),_:1}),(m(!0),i(U,null,R(l.componentData.answersList,(a,k)=>(m(),B(D,{gutter:20},{default:t(()=>[e(s,{span:1},{default:t(()=>[e(_,null,{default:t(()=>[d(I(k+1),1)]),_:2},1024)]),_:2},1024),e(s,{span:15},{default:t(()=>[e(V,{modelValue:a.answerText,"onUpdate:modelValue":p=>a.answerText=p},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{span:3},{default:t(()=>[e(g,{modelValue:a.isRight,"onUpdate:modelValue":p=>a.isRight=p,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{span:3},{default:t(()=>[e(g,{modelValue:a.notRequired,"onUpdate:modelValue":p=>a.notRequired=p,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{span:2},{default:t(()=>[e(x,{type:"danger",icon:L(q),circle:"",onClick:p=>h(k)},null,8,["icon","onClick"])]),_:2},1024)]),_:2},1024))),256)),e(c),e(D,null,{default:t(()=>[e(s,{span:6},{default:t(()=>[e(x,{onClick:v,type:"success",round:""},{default:t(()=>[d("+ Добавить поле")]),_:1})]),_:1})]),_:1})],64)}}};export{H as default};
