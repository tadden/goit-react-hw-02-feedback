(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,n){t.exports={container:"Statistic_container__XK-bU",title:"Statistic_title__1Zf6K",text:"Statistic_text__28DsG"}},,,function(t,e,n){t.exports={container:"SectionTitle_container__18xT2",title:"SectionTitle_title__3LDYZ"}},,,,,function(t,e,n){t.exports={container:"Options_container__3CYQf",btn:"Options_btn__1d6cM"}},,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(2),s=n.n(c),a=n(5),i=n.n(a),r=(n(16),n(17),n(4)),o=n.n(r),l=n(0);var j=function(t){var e=t.children;return Object(l.jsxs)("div",{className:o.a.container,children:[Object(l.jsx)("h1",{className:o.a.title,children:"Please leave feedback "}),e]})},b=n(6),d=n(7),u=n(8),h=n(11),x=n(10),O=n(9),p=n.n(O);var f=function(t){var e=t.options,n=t.onBtnClick;return Object(l.jsx)("div",{children:e.map((function(t){return Object(l.jsx)("button",{className:p.a.btn,type:"button",onClick:function(){return n(t)},children:t})}))})};var m=function(){return Object(l.jsx)("p",{children:"No feedback given"})},_=n(1),v=n.n(_),N=function(t){Object(h.a)(n,t);var e=Object(x.a)(n);function n(){var t;Object(d.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0},t.onBtnClick=function(e){t.setState((function(t){return Object(b.a)({},e,t[e]+1)}))},t.countTotal=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedback=function(){return(t.state.good/t.countTotal()*100).toFixed()},t}return Object(u.a)(n,[{key:"render",value:function(){var t=Object.keys(this.state);return Object(l.jsxs)("div",{className:v.a.container,children:[Object(l.jsx)(f,{options:t,onBtnClick:this.onBtnClick}),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h2",{className:v.a.title,children:"Statistic"})}),0===this.countTotal()?Object(l.jsx)(m,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{className:v.a.text,children:[Object(l.jsx)("span",{className:v.a.score,children:"Good:"}),Object(l.jsx)("span",{children:this.state.good})]}),Object(l.jsxs)("p",{className:v.a.text,children:[Object(l.jsx)("span",{className:v.a.score,children:"Neutral:"}),Object(l.jsx)("span",{children:this.state.neutral})]}),Object(l.jsxs)("p",{className:v.a.text,children:[Object(l.jsx)("span",{className:v.a.score,children:"Bad:"}),Object(l.jsx)("span",{children:this.state.bad})]}),Object(l.jsxs)("p",{className:v.a.text,children:[Object(l.jsx)("span",{className:v.a.score,children:"Total:"}),Object(l.jsx)("span",{children:this.countTotal()})]}),Object(l.jsxs)("p",{className:v.a.text,children:[Object(l.jsx)("span",{className:v.a.score,children:"Positive feedback: "}),Object(l.jsxs)("span",{children:[this.countPositiveFeedback(),"%"]})]})]})]})}}]),n}(c.Component),k=N;function g(){return Object(l.jsx)("div",{children:Object(l.jsx)(j,{children:Object(l.jsx)(k,{})})})}i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.45105e79.chunk.js.map