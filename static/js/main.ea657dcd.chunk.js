(this.webpackJsonpmezzanine=this.webpackJsonpmezzanine||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),i=c(20),j=c.n(i),a=(c(26),c(27),c(6)),r=c.n(a),o=c(11),l=c(3),b=(c(29),function(e){var t=Object(s.useState)(null),c=Object(l.a)(t,2),n=c[0],i=c[1];return Object(s.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[e]),null===n&&console.log("data was null for ArtGetter"),[n]}),m=c.p+"static/media/dr.pozzi_sargent.e9146436.jpg",u=c.p+"static/media/clickAgain2.52660433.JPG",d=c(9),O=c(5),h=c.n(O),x=c(1);var f=function(e){var t=Object(s.useState)(m),c=Object(l.a)(t,2),n=c[0],i=c[1],j=b("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+e.num),a=Object(l.a)(j,1)[0],r=Object(s.useState)("none"),o=Object(l.a)(r,2),O=o[0],f=o[1];return Object(s.useEffect)((function(){h.a.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/459110").then((function(e){return i(e.data)}))}),[]),Object(x.jsxs)("div",{className:"artwork-display",children:[Object(x.jsx)("div",{className:"get-btn",children:Object(x.jsx)("button",{className:"expander",onClick:function(){return f("block")},children:Object(x.jsx)(d.a,{})})}),Object(x.jsxs)("div",{className:"painting-data",children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{className:"art-now",src:n.primaryImage||u,onClick:function(){return i(a)},class:"thumbnail",alt:"painting",title:"Click to Change"})}),Object(x.jsxs)("div",{className:"fullScreen",style:{display:O},children:[Object(x.jsx)("button",{className:"close-img",onClick:function(){return f("none")},children:"X"}),Object(x.jsx)("img",{className:"fullScreenImg",src:n.primaryImage,alt:""}),Object(x.jsxs)("div",{className:"caption",children:[Object(x.jsx)("p",{style:{fontStyle:"italic"},children:n.title}),Object(x.jsx)("p",{children:n.artistDisplayName}),Object(x.jsxs)("p",{children:["Made ",n.objectDate]}),Object(x.jsx)("p",{children:n.culture}),Object(x.jsx)("p",{children:n.medium}),Object(x.jsx)("a",{style:{color:"blue"},href:n.objectURL,target:"_blank",rel:"noopener noreferrer",children:"Open this work on the Met's website"})]})]})]})]})},g=(c(49),c(21)),v=c.p+"static/media/loading.e94752fe.gif";var p=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(),j=Object(l.a)(i,2),a=j[0],b=j[1],m=Object(s.useState)("Auguste Renoir"),u=Object(l.a)(m,2),O=u[0],p=u[1],k=Object(s.useState)(!0),N=Object(l.a)(k,2),w=N[0],I=N[1],D=Object(s.useState)(),y=Object(l.a)(D,2),S=y[0],C=y[1],z=Object(s.useState)(),M=Object(l.a)(z,2),A=M[0],E=M[1],P=Object(s.useState)("none"),R=Object(l.a)(P,2),F=R[0],L=R[1],T=function(e){for(var t=[],c=0;c<32;c++){var s=Math.floor(Math.random()*e);t.push(s)}return console.log(t),t};function q(e){return new Promise((function(t,c){h.a.get(e).then((function(e){var c=e;console.log("Processing Request"),t(c)}),(function(e){c(e)}))}))}return Object(s.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste%20Renoir");case 2:t=e.sent,E(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q="+O);case 2:t=e.sent,C(t.data),"undefined"===typeof S||0===t.data.total?b(A):b(t.data),I(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[O,A]),w||"undefined"===typeof a?Object(x.jsx)("div",{className:"Home",children:Object(x.jsx)("img",{style:{marginTop:"10%",height:"30%",width:"30%"},src:v,alt:"Loading..."})}):Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("h1",{children:"Mezzanine"}),Object(x.jsx)("button",{className:"info-btn",onClick:function(){return L("block")},children:Object(x.jsx)(g.a,{})}),Object(x.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(T(a.total-1))},className:"search",children:Object(x.jsxs)("label",{children:[Object(x.jsx)(d.b,{}),Object(x.jsx)("input",{type:"text",value:O,onChange:function(e){p(e.target.value)}})]})}),Object(x.jsxs)("div",{className:"results",children:[a.total," Results"]}),Object(x.jsx)("button",{className:"shuffler",onClick:function(){return n(T(a.total-1))},children:"Shuffle"})]}),Object(x.jsxs)("div",{className:"information",style:{display:F},children:[Object(x.jsx)("button",{className:"close-info",onClick:function(){return L("none")},children:"X"}),Object(x.jsx)("div",{className:"info-text",children:Object(x.jsxs)("pre",{children:["Hello there! Welcome to Mezzanine!",Object(x.jsx)("br",{}),"Hit ",Object(x.jsx)("button",{children:"Shuffle"})," at the top of the screen,",Object(x.jsx)("br",{})," then click on different works of art to change them.",Object(x.jsx)("br",{})," Search by artist, medium, country, time period,",Object(x.jsx)("br",{})," or whatever else you can think of, and see what the Met has on display,",Object(x.jsx)("br",{})," or hidden away!",Object(x.jsx)("br",{})," Thanks for visiting, and enjoy discovering art from the best museum in the world."]})})]}),Object(x.jsxs)("div",{className:"works-total",children:[Object(x.jsxs)("div",{className:"works-col",children:[Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[0]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[1]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[2]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[3]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[16]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[20]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[21]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[22]]})})]}),Object(x.jsxs)("div",{className:"works-col",children:[Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[4]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[5]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[6]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[7]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[17]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[23]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[24]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[25]]})})]}),Object(x.jsxs)("div",{className:"works-col",children:[Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[8]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[9]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[10]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[11]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[18]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[26]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[27]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[28]]})})]}),Object(x.jsxs)("div",{className:"works-col",children:[Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[12]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[13]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[14]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[15]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[19]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[29]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[30]]})}),Object(x.jsx)("div",{className:"work-img",children:Object(x.jsx)(f,{num:a.objectIDs[c[31]]})})]})]})]})};var k=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(p,{})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,j=t.getTTFB;c(e),s(e),n(e),i(e),j(e)}))};j.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root")),N()}},[[50,1,2]]]);
//# sourceMappingURL=main.ea657dcd.chunk.js.map