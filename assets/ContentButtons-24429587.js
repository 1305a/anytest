import{a as o,o as e,c as s,F as _,e as k,f as C,w as a,b as n,k as B,A as g,v,d as y}from"./index-36c78919.js";import L from"./ActionButton-55b589dd.js";import"./ActionItem-0e0be2e2.js";const h={key:0},F={__name:"ContentButtons",props:["componentData"],setup(i){const t=i,m=()=>{t.componentData.buttonsList.push({buttonName:"",action:{name:"",internalId:0,checkQuestion:!1,closeSessionPick:!1},image:{imageURL:"",label:""}})},p=c=>{t.componentData.buttonsList.splice(c,1)};return(c,D)=>{var u;const l=o("el-button"),d=o("el-col"),f=o("el-row");return e(),s(_,null,[(u=t.componentData)!=null&&u.buttonsList?(e(),s("div",h,[(e(!0),s(_,null,k(t.componentData.buttonsList,(b,r)=>(e(),C(f,{key:r},{default:a(()=>[n(L,{button:b},null,8,["button"]),n(d,{span:2},{default:a(()=>[n(l,{class:"single-delete-btn",type:"danger",icon:B(g),circle:"",onClick:w=>p(r)},null,8,["icon","onClick"])]),_:2},1024)]),_:2},1024))),128))])):v("",!0),n(l,{onClick:m,type:"success",round:""},{default:a(()=>[y("+ Добавить кнопку")]),_:1})],64)}}};export{F as default};
