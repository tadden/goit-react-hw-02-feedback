(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,n){t.exports={container:"Statistic_container__XK-bU",title:"Statistic_title__1Zf6K",text:"Statistic_text__28DsG"}},,function(t,e,n){t.exports={container:"Options_container__3CYQf",btn__green:"Options_btn__green__3mWp2",btn__yellow:"Options_btn__yellow__1QHKP",btn__red:"Options_btn__red__24hDG"}},,function(t,e,n){t.exports={container:"SectionTitle_container__18xT2",title:"SectionTitle_title__3LDYZ"}},,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),s=n(6),o=n.n(s),i=(n(15),n(16),n(5)),r=n.n(i),l=n(0);var d=function(t){var e=t.children;return Object(l.jsxs)("div",{className:r.a.container,children:[Object(l.jsx)("h1",{className:r.a.title,children:"Please leave feedback "}),e]})},j=n(7),b=n(8),u=n(10),h=n(9),x=n(3),_=n.n(x);var O=function(t){var e=t.onGoodBtn,n=t.onNeutralBtn,c=t.onBadBtn;return Object(l.jsxs)("div",{className:_.a.container,children:[Object(l.jsx)("button",{type:"button",onClick:e,className:_.a.btn__green,children:"Good"}),Object(l.jsx)("button",{type:"button",onClick:n,className:_.a.btn__yellow,children:"Neutral"}),Object(l.jsx)("button",{type:"button",onClick:c,className:_.a.btn__red,children:"Bad"})]})};var p=function(){return Object(l.jsx)("p",{children:"No feedback given"})},f=n(1),N=n.n(f),m=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.onGoodBtn=function(){t.setState((function(t){return{good:t.good+1}}))},t.onNeutralBtn=function(){t.setState((function(t){return{neutral:t.neutral+1}}))},t.onBadBtn=function(){t.setState((function(t){return{bad:t.bad+1}}))},t.countTotal=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedback=function(){return(t.state.good/t.countTotal()*100).toFixed()},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:N.a.container,children:[Object(l.jsx)(O,{onGoodBtn:this.onGoodBtn,onNeutralBtn:this.onNeutralBtn,onBadBtn:this.onBadBtn}),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h2",{className:N.a.title,children:"Statistic"})}),0===this.countTotal()?Object(l.jsx)(p,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{className:N.a.text,children:[Object(l.jsx)("span",{className:N.a.score,children:"Good:"}),Object(l.jsx)("span",{children:this.state.good})]}),Object(l.jsxs)("p",{className:N.a.text,children:[Object(l.jsx)("span",{className:N.a.score,children:"Neutral:"}),Object(l.jsx)("span",{children:this.state.neutral})]}),Object(l.jsxs)("p",{className:N.a.text,children:[Object(l.jsx)("span",{className:N.a.score,children:"Bad:"}),Object(l.jsx)("span",{children:this.state.bad})]}),Object(l.jsxs)("p",{className:N.a.text,children:[Object(l.jsx)("span",{className:N.a.score,children:"Total:"}),Object(l.jsx)("span",{children:this.countTotal()})]}),Object(l.jsxs)("p",{className:N.a.text,children:[Object(l.jsx)("span",{className:N.a.score,children:"Positive feedback: "}),Object(l.jsxs)("span",{children:[this.countPositiveFeedback(),"%"]})]})]})]})}}]),n}(c.Component),v=m;function B(){return Object(l.jsx)("div",{children:Object(l.jsx)(d,{children:Object(l.jsx)(v,{})})})}o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.291ab808.chunk.js.map