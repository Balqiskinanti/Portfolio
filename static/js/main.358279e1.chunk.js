(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{29:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var i=n(9),a=n(3),c=n(1),s=n(0),l=Object(c.createContext)(),r=function(e){var t=e.children,n=Object(c.useState)("light"),i=Object(a.a)(n,2),r=i[0],o=i[1];Object(c.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://balqiskinanti.github.io/Portfolio/",j="BK.",h="Balqis Kinanti",b="Information Technology Graduate",d="Hello! My name is Balqis Kinanti. I'm Indonesian and I'm a fresh graduate from Ngee Ann Polytechnic in Singapore. I have a background in IT and wish to pursue Web Development in the future. My hobbies include listening to music, exercising, and creating things. I am active in my Co-Curricular activities such as Student Council, Girl Guides, and Mentoring and have held leadership positions as well. ",u="https://drive.google.com/file/d/1oYsahGQxRs1lXcHttkzCqfA2u4zpbqAj/view?usp=sharing",m="https://drive.google.com/file/d/1hPqgCeFySzAJr-2KzetxukvpdVLO8zNJ/view?usp=sharing",p={linkedin:"https://www.linkedin.com/in/balqiskinanti/",github:"https://github.com/Balqiskinanti",instagram:"https://www.instagram.com/_qnant/"},O=[{name:"Kamaemon | iOS Application",description:"Volunteering application that lets users post their requests for volunteers to accept. In-app real time chat, map and leaderboard functionalities are also available among many others.",stack:["Swift","CocoaPods","Firebase","Azure API"],sourceCode:"https://github.com/jordanchoi/mad2-p02-assignment-team1-kamaemon",livePreview:"https://www.youtube.com/watch?v=1pKxL4JJBXo&feature=youtu.be"},{name:"GreenDemic | Hackathon",description:"Web-based application for people to track their food inventories at home by simply scanning barcode. Clinched top 5 position.",stack:["ASP.NET","HTML,CSS,JS","SQL","Scandit","Azure Database","Power BI"],sourceCode:"https://github.com/Balqiskinanti/GreenDemic",livePreview:"https://greendemic.azurewebsites.net/"},{name:"MADFit | Android Application",description:"Android application that encourages people to watch their diet, as well as set goals and plans to exercise frequently. In-app music service is also available for users to listen, while working out.",stack:["Java","MailChimp"],sourceCode:"https://github.com/Balqiskinanti/MADFit",livePreview:"https://play.google.com/store/apps/details?id=sg.edu.np.mad.madfit"}],x=["HTML","CSS","JavaScript","React","Python","C#","ASP.NET","Swift","Java","SQL","Excel","Tableau","Machine Learning","Version Control","Databases","Agile","Figma/Adobe XD"],f="work.balqiskinanti@gmail.com",g=n(16),v=n.n(g),k=n(14),N=n.n(k),_=n(18),w=n.n(_),C=n(17),S=n.n(C),y=(n(29),function(){var e=Object(c.useContext)(l),t=Object(a.a)(e,1)[0],n=t.themeName,i=t.toggleTheme,r=Object(c.useState)(!1),o=Object(a.a)(r,2),j=o[0],h=o[1],b=function(){return h(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,x.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,f?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(N.a,{}):Object(s.jsx)(v.a,{})}),Object(s.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(S.a,{}):Object(s.jsx)(w.a,{})})]})}),A=(n(33),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(y,{})]})}),P=n(11),q=n.n(P),I=n(19),B=n.n(I),E=n(20),J=n.n(E),L=(n(34),function(){var e=h,t=b,n=d,i=u,a=p,c=m;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["An ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[i&&Object(s.jsx)("a",{href:i,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(s.jsx)("a",{href:c,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Testimonial"})}),a&&Object(s.jsxs)(s.Fragment,{children:[a.github&&Object(s.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(q.a,{})}),a.linkedin&&Object(s.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(B.a,{})}),a.instagram&&Object(s.jsx)("a",{href:a.instagram,"aria-label":"instagram",className:"link link--icon",children:Object(s.jsx)(J.a,{})})]})]})]})}),M=n(7),T=n.n(M),z=n(21),D=n.n(z),K=(n(36),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},T()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(q.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(D.a,{})})]})}),F=(n(37),function(){return O.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(s.jsx)(K,{project:e},T()())}))})]}):null}),G=(n(38),function(){return x.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},T()())}))})]}):null}),H=n(22),Q=n.n(H),R=(n(39),function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(Q.a,{fontSize:"large"})})}):null}),V=(n(40),function(){return f?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(f),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),X=(n(41),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("p",{className:"link footer__link",children:"Balqis Kinanti"})})}),W=(n(42),function(){var e=Object(c.useContext)(l),t=Object(a.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(A,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(L,{}),Object(s.jsx)(F,{}),Object(s.jsx)(G,{}),Object(s.jsx)(V,{})]}),Object(s.jsx)(R,{}),Object(s.jsx)(X,{})]})});n(43);Object(i.render)(Object(s.jsx)(r,{children:Object(s.jsx)(W,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.358279e1.chunk.js.map