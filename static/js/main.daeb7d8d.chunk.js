(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(t,e,r){},30:function(t,e,r){},33:function(t,e,r){"use strict";r.r(e);var a=r(6),c=r(37),i=r(1),n=r.n(i),l=r(20),s=r.n(l),o=(r(29),r(4)),f=(r(30),r(36)),b=function(t,e,r){return t.formatMessage({id:e},r)},p=r(7),u=function(t){var e=t.baseAtk,r=t.percAtk,a=t.flatAtk,c=t.critC,i=t.critD,n=t.percEle,l=e*r+a,s=e+l,o=1+Math.min(1,c)*i,f=Math.round(s*o*(1+n));return console.log(l,s,o,f),f},j=function(t){var e=t.percAtk,r=t.critC,a=t.critD,c=u(t);return{critPercDiff:u(Object(p.a)(Object(p.a)({},t),{},{critC:r+.08,critD:a+.15}))/c-1,atk20Diff:u(Object(p.a)(Object(p.a)({},t),{},{percAtk:e+.2}))/c-1,atk30Diff:u(Object(p.a)(Object(p.a)({},t),{},{percAtk:e+.3}))/c-1,atk40Diff:u(Object(p.a)(Object(p.a)({},t),{},{percAtk:e+.4}))/c-1}},k=function(t){t.baseAtk;var e=t.percAtk,r=(t.flatAtk,t.critC),a=t.critD,c=(t.percEle,u(t));return{atkPercDiff:u(Object(p.a)(Object(p.a)({},t),{},{percAtk:e+.0498}))/c-1,critRateDiff:u(Object(p.a)(Object(p.a)({},t),{},{critC:r+.033}))/c-1,critDmgDiff:u(Object(p.a)(Object(p.a)({},t),{},{critD:a+.066}))/c-1}},O=function(t){if(!t)return null;var e=t.baseAtk,r=t.flatAtk,a=t.percAtk,c=t.critC,i=t.critD,n=t.percEle;if(!e||!r||!a||!c||!i||!n)return null;var l={baseAtk:e,flatAtk:r,percAtk:a,critC:c,critD:i,percEle:n};return Object(p.a)(Object(p.a)({},l),{},{elePower:u(l),spiralBuffs:j(l),substats:k(l)})},g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,c=Object(f.a)(),n=Object(i.useState)(e),l=Object(o.a)(n,2),s=l[0],p=l[1];console.log(t,s,e);var u=function(t){p(t.currentTarget.value)},j=r||"profile."+t,k=b(c,j),O=Object(a.jsxs)("span",{children:[k,Object(a.jsx)("input",{type:"text",id:t,name:t,onChange:u,maxLength:"7",size:"5",value:s})]});return[O,s,p]},A=function(t){var e=t.data,r=Object(f.a)(),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(i.useState)(null),r=Object(o.a)(e,2),c=r[0],l=r[1];console.log("init profile:",t);var s=g("baseAtk",t.baseAtk),f=Object(o.a)(s,2),b=f[0],p=f[1],u=g("flatAtk",t.flatAtk),j=Object(o.a)(u,2),k=j[0],A=j[1],m=g("percAtk",t.percAtk?100*t.percAtk:""),v=Object(o.a)(m,2),D=v[0],d=v[1],h=g("critC",t.critC?100*t.critC:""),C=Object(o.a)(h,2),x=C[0],P=C[1],w=g("critD",t.critD?100*t.critD:""),E=Object(o.a)(w,2),I=E[0],S=E[1],F=g("eleDmg",t.percEle?100*t.percEle:""),y=Object(o.a)(F,2),G=y[0],R=y[1];Object(i.useEffect)((function(){var t=O({baseAtk:parseInt(p),flatAtk:parseInt(A),percAtk:d/100,critC:P/100,critD:S/100,percEle:R/100});t&&l(t)}),[p,A,d,P,S,R,l]);var L=Object(a.jsxs)(n.a.Fragment,{children:[b,k,D,x,I,G]});return[c,L]}(e),l=Object(o.a)(c,2),s=l[0],p=l[1];return Object(a.jsxs)(n.a.Fragment,{children:[p,Object(a.jsx)("br",{}),s&&b(r,"profile.summary.elePower",{power:s.elePower}),Object(a.jsx)("br",{}),function(t){if(t){var e=t.substats,a=e.atkPercDiff,c=e.critRateDiff,i=e.critDmgDiff,n=Math.max(a,c,i),l="";switch(n){case a:l="profile.substat.atkPercGain";break;case c:l="profile.substat.critRateGain";break;case i:l="profile.substat.critDmgGain"}var s=b(r,l,{gain:(o=n,(100*o).toFixed(2)+"%")});return b(r,"profile.substat.best",{stat:s})}var o;return null}(s)]})};var m=function(){var t=Object(i.useState)([]),e=Object(o.a)(t,2),r=e[0],c=e[1];return Object(i.useEffect)((function(){var t=window.localStorage.getItem("profileId");t?(console.log("reading profile:",t),c(JSON.parse(t))):c([])}),[]),Object(a.jsx)("div",{className:"App",children:r&&r[0]&&Object(a.jsx)(A,{data:r[0]})})},v=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,38)).then((function(e){var r=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,n=e.getTTFB;r(t),a(t),c(t),i(t),n(t)}))};s.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(c.a,{locale:"en-US",defaultLocale:"en-US",messages:{"profile.character":"Character","profile.level":"Level","profile.baseAtk":"Base Attack","profile.percAtk":"Atk %","profile.flatAtk":"Flat Attack","profile.critC":"Crit Rate","profile.critD":"Crit Damage","profile.eleDmg":"Ele %","profile.summary.elePower":"Elemental Power: {power}","profile.substat.best":"Next stat to target -- {stat}","profile.substat.atkPercGain":"Attack Percent Improvement: {gain}","profile.substat.critRateGain":"Crit Rate Improvement: {gain}","profile.substat.critDmgGain":"Crit Dmg Improvement: {gain}"},children:Object(a.jsx)(m,{})})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.daeb7d8d.chunk.js.map