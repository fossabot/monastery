(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(3),i=n.n(s),r=(n(14),n(4)),l=n(5),c=n(7),u=n(6),m=n(8),h=n(1),d=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).askQuestion=function(e){e.preventDefault();var t=document.getElementById("question").value;console.log("We're in the askQuestion method where the question is "+t),n.setState({question:t,ask:!1},n.requestAnswer(t))},n.requestAnswer=function(e){console.log("We're going to be posting the question: "+e),fetch("/question",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({question:e})}).then(function(e){return e.json()}).then(function(e){return n.setState({answer:e.answer})})},n.askAgain=function(e){n.setState({ask:!0,question:null})},n.state={ask:!0,question:null,answer:!1},n.askQuestion=n.askQuestion.bind(Object(h.a)(Object(h.a)(n))),n.requestAnswer=n.requestAnswer.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},this.state.ask?o.a.createElement("form",{onSubmit:this.askQuestion,autoComplete:"off",style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},o.a.createElement("span",null,"What would you like to know?"),o.a.createElement("input",{id:"question",type:"text",name:"question"})):o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},o.a.createElement("span",null,o.a.createElement("b",null,this.state.question)),o.a.createElement("span",null,this.state.answer?this.state.answer:"Loading"),o.a.createElement("span",{onClick:this.askAgain,style:{color:"grey"}},o.a.createElement("i",null,"Ask another question"))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.dc1b8820.chunk.js.map