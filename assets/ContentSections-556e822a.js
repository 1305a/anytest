import w from"./ActionButton-a123791d.js";import{r as o,o as s,c as p,F as u,l as h,b as C,w as t,a as i,t as g,f as e,u as a,m as v,n as D,p as L,q as S,i as B}from"./index-096d2e4a.js";import"./ImageItem-4b689c33.js";const N={class:"content-card-header"},q={__name:"ContentSections",props:["componentData"],setup(_){const c=_,d=()=>{c.componentData.sectionsList.push({buttonName:"",image:{imageURL:"",label:""},action:{name:"moveToStep",internalId:0}})},m=r=>{c.componentData.sectionsList.splice(r,1)};return(r,V)=>{const n=o("el-button"),f=o("el-card"),y=o("el-col"),b=o("el-row");return s(),p(u,null,[(s(!0),p(u,null,h(c.componentData.sectionsList,(k,l)=>(s(),C(f,{key:l},{header:t(()=>[i("div",N,[i("span",null,"Секция "+g(l+1),1),i("div",null,[e(n,{type:"danger",icon:a(v),plain:"",onClick:x=>m(l)},null,8,["icon","onClick"]),e(n,{type:"success",icon:a(D),plain:""},null,8,["icon"]),e(n,{type:"success",icon:a(L),plain:""},null,8,["icon"]),e(n,{type:"primary",icon:a(S),plain:""},null,8,["icon"])])])]),default:t(()=>[e(w,{section:k},null,8,["section"])]),_:2},1024))),128)),e(b,null,{default:t(()=>[e(y,{span:6},{default:t(()=>[e(n,{onClick:d,type:"success",round:""},{default:t(()=>[B("+ Добавить секцию")]),_:1})]),_:1})]),_:1})],64)}}};export{q as default};
