import v from"./WarningParameters-4b00a251.js";import te from"./WarningCombination-9726c3d8.js";import{r as A,q as ne,a as D,o as i,f,w as o,b as e,c as V,v as r,F as q,e as E,d as C,x as N,k as y,y as ae,z as oe,A as le,B as se,C as me,T as O,g as ie,D as ue,l as de}from"./index-36c78919.js";import ce from"./ContentImages-c65d5189.js";import re from"./ColorItem-a72e9768.js";import pe from"./ActionItem-0e0be2e2.js";import z from"./AnswerCollections-9e8bb3c1.js";import De from"./AnswersOnImage-08554e2c.js";/* empty css                                                          */const fe={key:0},we={key:1},Ve={key:0},be={key:1},ge={key:0,class:"answer_editor"},Ce={class:"action_edit"},_e={key:0},Re={__name:"ContentAnswers",props:["componentData"],setup(m){const t=m,S=A(!1),R=A("main"),_=A(t.componentData.answersList.map(s=>!1)),T=A(!1),$=s=>{_.value[s]=!_.value[s]},P=()=>{T.value=!T.value},F=s=>{_.value.splice(s,1),t.componentData.answersList.splice(s,1)},M=s=>{const a=s.id,d=t.componentData.answerCollections,l=d.findIndex(c=>c.id===a);if(l>0){const c=[...d];[c[l],c[l-1]]=[c[l-1],c[l]],t.componentData.answerCollections=c}},B=s=>{const a=s.id,d=t.componentData.answerCollections,l=d.findIndex(c=>c.id===a);if(l<d.length-1){const c=[...d];[c[l],c[l+1]]=[c[l+1],c[l]],t.componentData.answerCollections=c}},Q=s=>{if(s===0)return;const a=t.componentData.answersList[s];t.componentData.answersList[s]=t.componentData.answersList[s-1],t.componentData.answersList[s-1]=a},j=s=>{if(s===t.componentData.answersList.length-1)return;const a=t.componentData.answersList[s];t.componentData.answersList[s]=t.componentData.answersList[s+1],t.componentData.answersList[s+1]=a},G=s=>{let a=t.componentData.combinationOfAnswers.findIndex(d=>d.name===s);t.componentData.combinationOfAnswers.splice(a,1)},J=()=>{_.value.push(!1),t.componentData.combinationOfAnswers.push({name:"",isCorrect:!0,combinationWarning:{text:"",color:"",image:"",showTime:0,buttons:[{buttonName:"Закрыть",action:{name:"closeModalWarning"}}]}})},K=()=>{if(t.componentData.answersList.length===0)return 0;let s=!1;for(let l=0;l<t.componentData.answersList.length;l++)if(!t.componentData.answersList[l].id){s=!0;break}if(s){for(let l=0;l<t.componentData.answersList.length;l++)t.componentData.answersList[l].id=l+1;return t.componentData.answersList.length}const a=t.componentData.answersList.map(l=>l.id);return Math.max(...a)},X=()=>{t.componentData.answersList.push({id:K()+1,answerText:"",isRight:!1,notRequired:!1,image:{imageURL:"",label:""},action:{doAction:!1,clickAction:!1,name:"moveToStep",internalId:0,checkQuestion:!1,trackRepeatAnswer:!1},isRightAlt:!1})},Y=()=>{t.componentData.imagesData==null&&(t.componentData.isAnswersWithImage=!1,t.componentData.isAnswersOnImage=!1,t.componentData.imagesData={imagesWidthPercent:100,imagesList:[{imageURL:"",label:""}]}),t.componentData.textData==null&&(t.componentData.textData={text:""}),t.componentData.markers==null&&(t.componentData.markers=[])};ne(()=>{Y()});const H=s=>{t.componentData.answerCollections===void 0&&(t.componentData.answerCollections=[]),t.componentData.answerCollections.push(s)},W=s=>{const a=t.componentData.answerCollections.findIndex(d=>d.id===s);if(a===-1){log("Коллекция с таким id не найдена");return}t.componentData.answerCollections.splice(a,1)};return(s,a)=>{const d=D("el-switch"),l=D("el-form-item"),c=D("el-option"),Z=D("el-select"),L=D("el-divider"),b=D("el-input"),g=D("el-button"),h=D("el-input-number"),u=D("el-col"),U=D("el-row"),k=D("el-text"),I=D("el-checkbox"),x=D("el-tab-pane"),ee=D("el-tabs");return i(),f(ee,{class:"demo-tabs",modelValue:R.value,"onUpdate:modelValue":a[27]||(a[27]=n=>R.value=n),type:"card",onTabClick:s.handleClick},{default:o(()=>[e(x,{label:"Основной",name:"main"},{default:o(()=>[e(l,{label:"Множественный выбор:"},{default:o(()=>[e(d,{modelValue:t.componentData.multiple,"onUpdate:modelValue":a[0]||(a[0]=n=>t.componentData.multiple=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Перемешивать ответы?"},{default:o(()=>[e(d,{modelValue:t.componentData.doShuffle,"onUpdate:modelValue":a[1]||(a[1]=n=>t.componentData.doShuffle=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Вид кнопок:"},{default:o(()=>[e(Z,{modelValue:t.componentData.answersButtonType,"onUpdate:modelValue":a[2]||(a[2]=n=>t.componentData.answersButtonType=n),placeholder:"please select"},{default:o(()=>[e(c,{label:"Чекбоксы",value:"checkboxes"}),e(c,{label:"Кнопки",value:"buttons"}),e(c,{label:"Картинки+чекбоксы",value:"imageCheckboxes"})]),_:1},8,["modelValue"])]),_:1}),e(L),e(l,{label:"Подсказки:"},{default:o(()=>[e(d,{modelValue:t.componentData.hints,"onUpdate:modelValue":a[3]||(a[3]=n=>t.componentData.hints=n)},null,8,["modelValue"])]),_:1}),t.componentData.hints?(i(),V("div",fe,[e(l,{label:"Количество попыток:"},{default:o(()=>[e(b,{modelValue:t.componentData.totalHints,"onUpdate:modelValue":a[4]||(a[4]=n=>t.componentData.totalHints=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Анонс подсказки:"},{default:o(()=>[e(b,{modelValue:t.componentData.hintText,"onUpdate:modelValue":a[5]||(a[5]=n=>t.componentData.hintText=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Открыть модальную подсказку:"},{default:o(()=>[e(d,{modelValue:t.componentData.useModalHint,"onUpdate:modelValue":a[6]||(a[6]=n=>t.componentData.useModalHint=n)},null,8,["modelValue"])]),_:1}),t.componentData.useModalHint&&t.componentData.modalHintDescription!==void 0?(i(),f(l,{key:0,label:"Текст дополнительного описания:"},{default:o(()=>[e(b,{modelValue:t.componentData.modalHintDescription,"onUpdate:modelValue":a[7]||(a[7]=n=>t.componentData.modalHintDescription=n)},null,8,["modelValue"])]),_:1})):r("",!0),S.value||m.componentData.showLegend!=null&&m.componentData!=null?(i(),V("div",we,[e(l,{label:"Показывать легенду альтернативных ответов:"},{default:o(()=>[e(d,{modelValue:m.componentData.showLegend,"onUpdate:modelValue":a[8]||(a[8]=n=>m.componentData.showLegend=n)},null,8,["modelValue"])]),_:1}),m.componentData.showLegend?(i(),V("div",Ve,[e(l,{label:"Текст легенды альтернативных ответов:"},{default:o(()=>[e(b,{modelValue:m.componentData.legendText,"onUpdate:modelValue":a[9]||(a[9]=n=>m.componentData.legendText=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Текст легенды альтернативных ответов цветной:"},{default:o(()=>[e(b,{modelValue:m.componentData.legendColoredText,"onUpdate:modelValue":a[10]||(a[10]=n=>m.componentData.legendColoredText=n)},null,8,["modelValue"])]),_:1}),e(l,{label:"Цвет:"},{default:o(()=>[e(re,{modelValue:m.componentData.legendTextColor,"onUpdate:modelValue":a[11]||(a[11]=n=>m.componentData.legendTextColor=n)},null,8,["modelValue"])]),_:1})])):r("",!0)])):r("",!0),e(v,{parameters:t.componentData.hintWarning},null,8,["parameters"])])):r("",!0),e(L),e(l,{label:"Предупреждения:"},{default:o(()=>[e(d,{modelValue:t.componentData.warnings,"onUpdate:modelValue":a[12]||(a[12]=n=>t.componentData.warnings=n)},null,8,["modelValue"])]),_:1}),t.componentData.warnings?(i(),V("div",be,[e(l,{label:"Все верные:"}),e(v,{parameters:t.componentData.allCorrect},null,8,["parameters"]),e(l,{label:"Все неверные/часть неверных:"}),e(v,{parameters:t.componentData.allInorrectPartlyIncorrect},null,8,["parameters"]),e(l,{label:"Часть верных:"}),e(v,{parameters:t.componentData.partlyCorrect},null,8,["parameters"]),e(l,{label:"Часть верных + неверные:"}),e(v,{parameters:t.componentData.partlyCorrectpartlyIncorrect},null,8,["parameters"]),e(l,{label:"Все верные + неверные:"}),e(v,{parameters:t.componentData.allCorrectPartlyIncorrect},null,8,["parameters"]),e(l,{label:"Комбинации:"}),(i(!0),V(q,null,E(t.componentData.combinationOfAnswers,n=>(i(),V("div",null,[e(te,{parameters:n,onDeleteCombination:G},null,8,["parameters","onDeleteCombination"])]))),256)),e(g,{type:"success",round:"",onClick:J},{default:o(()=>[C("+ Добавить комбинацию")]),_:1})])):r("",!0),e(L),e(l,{label:"Стили:"},{default:o(()=>[e(l,{label:"Кол-во колонок:"},{default:o(()=>[e(h,{modelValue:t.componentData.columns,"onUpdate:modelValue":a[13]||(a[13]=n=>t.componentData.columns=n),min:1,max:10},null,8,["modelValue"])]),_:1})]),_:1}),e(L),e(l,{label:"Содержание вопроса:"}),e(U,null,{default:o(()=>[e(u,{span:1}),e(u,{class:"question_text_col",span:12},{default:o(()=>[e(b,{modelValue:t.componentData.questionText,"onUpdate:modelValue":a[14]||(a[14]=n=>t.componentData.questionText=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(U,null,{default:o(()=>[e(u,{span:1}),e(u,{span:12},{default:o(()=>[e(k,null,{default:o(()=>[C("Текст ответа")]),_:1})]),_:1}),e(u,{span:1},{default:o(()=>[e(k,null,{default:o(()=>[C("Правильный")]),_:1})]),_:1}),e(u,{span:1},{default:o(()=>[e(k,null,{default:o(()=>[C("Альт. прав.")]),_:1})]),_:1}),m.componentData.multiple?(i(),f(u,{key:0,span:2},{default:o(()=>[e(k,null,{default:o(()=>[C("Прав. необ.")]),_:1})]),_:1})):r("",!0),e(u,{span:2})]),_:1}),(i(!0),V(q,null,E(m.componentData.answersList,(n,w)=>(i(),f(U,{key:n.id,gutter:20},{default:o(()=>[e(u,{span:1},{default:o(()=>[e(k,null,{default:o(()=>[C(N(w+1),1)]),_:2},1024)]),_:2},1024),e(u,{span:1},{default:o(()=>[e(k,null,{default:o(()=>[C(N(n.id),1)]),_:2},1024)]),_:2},1024),e(u,{span:11},{default:o(()=>[e(b,{modelValue:n.answerText,"onUpdate:modelValue":p=>n.answerText=p},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(u,{span:1},{default:o(()=>[e(I,{modelValue:n.isRight,"onUpdate:modelValue":p=>n.isRight=p,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),n.isRightAlt!=null?(i(),f(u,{key:0,span:1},{default:o(()=>[e(I,{modelValue:n.isRightAlt,"onUpdate:modelValue":p=>n.isRightAlt=p,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):r("",!0),m.componentData.multiple?(i(),f(u,{key:1,span:2},{default:o(()=>[e(I,{modelValue:n.notRequired,"onUpdate:modelValue":p=>n.notRequired=p,size:"large"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):r("",!0),e(u,{span:4},{default:o(()=>[e(g,{type:"warning",icon:y(ae),circle:"",onClick:p=>Q(w)},null,8,["icon","onClick"]),e(g,{type:"warning",icon:y(oe),circle:"",onClick:p=>j(w)},null,8,["icon","onClick"]),e(g,{type:"danger",icon:y(le),circle:"",onClick:p=>F(w)},null,8,["icon","onClick"])]),_:2},1024),e(u,{span:m.componentData.multiple?3:5},{default:o(()=>[_.value[w]?r("",!0):(i(),f(g,{key:0,type:"primary",icon:y(se),plain:"",onClick:p=>$(w)},null,8,["icon","onClick"])),_.value[w]?(i(),f(g,{key:1,type:"primary",icon:y(me),plain:"",onClick:p=>$(w)},null,8,["icon","onClick"])):r("",!0)]),_:2},1032,["span"]),e(u,{span:1}),e(u,{span:21},{default:o(()=>[_.value[w]?(i(),V("div",ge,[e(O,{modelValue:n.answerText,"onUpdate:modelValue":p=>n.answerText=p},null,8,["modelValue","onUpdate:modelValue"]),ie("div",Ce,[e(pe,{action:n.action},null,8,["action"])])])):r("",!0)]),_:2},1024),m.componentData.answersButtonType==="imageCheckboxes"&&n.image!=null?(i(),f(U,{key:2},{default:o(()=>[e(ue,{image:n.image,hideLabel:!0},null,8,["image"])]),_:2},1024)):r("",!0)]),_:2},1024))),128)),e(L),e(U,null,{default:o(()=>[e(u,{span:6},{default:o(()=>[e(g,{onClick:X,type:"success",round:""},{default:o(()=>[C("+ Добавить поле ")]),_:1})]),_:1})]),_:1}),m.componentData.answersList?(i(),f(z,{key:2,answerCollectionsData:m.componentData.answerCollections,answersList:m.componentData.answersList,onAddCollectionToList:a[15]||(a[15]=n=>H(n)),onDeleteCollection:a[16]||(a[16]=n=>W(n)),onMoveUpCollection:a[17]||(a[17]=n=>M(n)),onMoveDownCollection:a[18]||(a[18]=n=>B(n))},null,8,["answerCollectionsData","answersList"])):r("",!0)]),_:1}),e(x,{label:"Стили",name:"style"},{default:o(()=>[e(l,{label:"Стили:"},{default:o(()=>[e(l,{label:"Кол-во колонок:"}),e(h,{modelValue:t.componentData.columns,"onUpdate:modelValue":a[19]||(a[19]=n=>t.componentData.columns=n),min:1,max:10},null,8,["modelValue"])]),_:1})]),_:1}),e(x,{label:"С картинкой",name:"withImage"},{default:o(()=>[e(l,{label:"Ответы с картинками?"},{default:o(()=>[e(d,{modelValue:t.componentData.isAnswersWithImage,"onUpdate:modelValue":a[20]||(a[20]=n=>t.componentData.isAnswersWithImage=n),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])]),_:1}),t.componentData.isAnswersWithImage?(i(),f(l,{key:0,label:"Текст:"},{default:o(()=>[e(u,{span:22},{default:o(()=>[e(b,{modelValue:t.componentData.textData.text,"onUpdate:modelValue":a[21]||(a[21]=n=>t.componentData.textData.text=n),width:"30vw"},null,8,["modelValue"])]),_:1}),e(u,{span:2},{default:o(()=>[e(g,{type:"primary",icon:y(de),plain:"",onClick:P},null,8,["icon"])]),_:1}),e(u,{span:22},{default:o(()=>[T.value?(i(),V("div",_e,[e(O,{modelValue:t.componentData.textData.text,"onUpdate:modelValue":a[22]||(a[22]=n=>t.componentData.textData.text=n)},null,8,["modelValue"])])):r("",!0)]),_:1})]),_:1})):r("",!0),e(l,{label:"Картинки:"},{default:o(()=>[t.componentData.imagesData!=null?(i(),f(ce,{key:0,componentData:t.componentData.imagesData},null,8,["componentData"])):r("",!0)]),_:1})]),_:1}),t.componentData?(i(),f(x,{key:0,label:"На картинке",name:"onImage",lazy:""},{default:o(()=>[e(De,{componentData:t.componentData},null,8,["componentData"]),m.componentData.answersList?(i(),f(z,{key:0,answerCollectionsData:m.componentData.answerCollections,answersList:m.componentData.answersList,onAddCollectionToList:a[23]||(a[23]=n=>H(n)),onDeleteCollection:a[24]||(a[24]=n=>W(n)),onMoveUpCollection:a[25]||(a[25]=n=>M(n)),onMoveDownCollection:a[26]||(a[26]=n=>B(n))},null,8,["answerCollectionsData","answersList"])):r("",!0)]),_:1})):r("",!0)]),_:1},8,["modelValue","onTabClick"])}}};export{Re as default};
