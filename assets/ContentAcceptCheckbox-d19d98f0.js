import{r as w,a as s,o as m,c as r,b as t,w as l,k as d,l as y,v as D,x as B,F as C}from"./index-3295cf34.js";import h from"./WarningParameters-9a0d9754.js";const v={key:0},U={__name:"ContentAcceptCheckbox",props:["componentData"],setup(f){const n=f,i=w(!1),_=()=>{i.value=!i.value},g={menubar:!1,plugins:"lists ",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | degButton | supButton | subButton | fontselect fontsizeselect forecolor",entity_encoding:"named",fontsize_formats:"8px 10px 12px 14px 18px 24px 36px",entities:"deg, sup, sub",setup:function(a){a.ui.registry.addButton("degButton",{text:"&deg",onAction:function(e){a.insertContent("&deg;")}}),a.ui.registry.addButton("supButton",{text:"Верх",onAction:function(e){a.insertContent("<sup>2</sup> ")}}),a.ui.registry.addButton("subButton",{text:"Низ",onAction:function(e){a.insertContent("<sub>2</sub> ")}})}};return(a,e)=>{const x=s("el-input"),p=s("el-col"),b=s("el-button"),u=s("el-form-item"),c=s("el-switch"),V=s("el-divider");return m(),r(C,null,[t(u,{label:"Текст дисклеймера:"},{default:l(()=>[t(p,{span:22},{default:l(()=>[t(x,{modelValue:n.componentData.text,"onUpdate:modelValue":e[0]||(e[0]=o=>n.componentData.text=o),width:"30vw"},null,8,["modelValue"])]),_:1}),t(p,{span:2},{default:l(()=>[t(b,{type:"primary",icon:d(y),plain:"",onClick:_},null,8,["icon"])]),_:1})]),_:1}),t(p,{span:24},{default:l(()=>[i.value?(m(),r("div",v,[t(d(D),{width:"100%",init:g,"output-format":"html",modelValue:n.componentData.text,"onUpdate:modelValue":e[1]||(e[1]=o=>n.componentData.text=o),autosize:"",type:"textarea",placeholder:"Please input"},null,8,["modelValue"])])):B("",!0)]),_:1}),t(u,null,{default:l(()=>[t(u,{label:"Начальное значение чекбокса:",style:{"margin-right":"20px"}},{default:l(()=>[t(c,{modelValue:n.componentData.isAccepted,"onUpdate:modelValue":e[2]||(e[2]=o=>n.componentData.isAccepted=o),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])]),_:1}),t(u,{label:"Проверка чекбокса:"},{default:l(()=>[t(c,{modelValue:n.componentData.checkQuestion,"onUpdate:modelValue":e[3]||(e[3]=o=>n.componentData.checkQuestion=o),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])]),_:1})]),_:1}),t(V),t(u,{label:"Предупреждения:"},{default:l(()=>[t(c,{modelValue:n.componentData.warnings,"onUpdate:modelValue":e[4]||(e[4]=o=>n.componentData.warnings=o)},null,8,["modelValue"])]),_:1}),t(h,{parameters:n.componentData.warningParameters},null,8,["parameters"])],64)}}};export{U as default};
