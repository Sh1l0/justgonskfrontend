(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},233:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),i=(a(103),a(9)),o=a(10),s=a(12),u=a(11),m=a(13),p=a(26),h=a(27),b=a(86),d=a.n(b),E=a(32),f=a.n(E),j=a(88),O=a.n(j),v=a(89),y=a.n(v),g=a(90),w=a.n(g),k=a(91),C=a.n(k),N=a(31),D=a.n(N),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{className:"card"},r.a.createElement(O.a,{title:this.props.title||"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",subheader:this.props.date||null}),this.props.id&&r.a.createElement(y.a,{className:"image",image:this.props.src,title:"Paella dish"}),this.props.id&&r.a.createElement(w.a,null,r.a.createElement(D.a,{component:"p"},this.props.description)),this.props.id&&r.a.createElement(C.a,null,r.a.createElement(p.b,{to:"/event/"+this.props.id,className:"no-style"},r.a.createElement(f.a,{size:"small",color:"primary"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e"))))}}]),t}(n.Component),M=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;fetch("".concat("https://justgonskapitest.azurewebsites.net","/api/Test"),{mode:"cors"}).then(function(e){return e.json()}).then(function(a){e=a.results,console.log(e);var n=0,c=e.map(function(e){return r.a.createElement(x,{key:n++,id:e.id,src:e.images[0].image,title:e.title.toUpperCase(),date:e.dates[0].start_Date?e.dates[0].start_Date.replace(/\-/g,".").replace(/T/g,"   "):"\u0418\u0434\u0451\u0442 \u043a\u0440\u0443\u0433\u043b\u044b\u0439 \u0433\u043e\u0434",description:e.description.replace("<p>","").replace("</p>","")})});t.setState({cards:c})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},this.state.cards||r.a.createElement(x,null))}}]),t}(n.Component),_=a(95),J=a.n(_),S=a(96),T=a.n(S),V=a(97),z=a.n(V),B=(n.Component,a(94)),I=a.n(B),W=a(46),A=a.n(W),G=a(39),K=a.n(G),P=a(40),U=a.n(P),$=a(93),q=a.n($),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={left:!1},a.toggleDrawer=function(e){return function(){a.setState({left:e})}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){r.a.createElement("div",null,r.a.createElement(A.a,null,["\u0421\u043f\u0438\u0441\u043e\u043a","\u041a\u0430\u0440\u0442\u0430"].map(function(e,t){return r.a.createElement(K.a,{button:!0,key:e},r.a.createElement(U.a,{primary:e}))}))),r.a.createElement("div",null,r.a.createElement(A.a,null,["\u0421\u043f\u0438\u0441\u043e\u043a","\u041a\u0430\u0440\u0442\u0430"].map(function(e,t){return r.a.createElement(K.a,{button:!0,key:e},r.a.createElement(U.a,{primary:e}))})));return r.a.createElement("div",null,r.a.createElement(q.a,{onClick:this.toggleDrawer(!0)}),r.a.createElement(I.a,{open:this.state.left,onClose:this.toggleDrawer(!1),onOpen:this.toggleDrawer(!0)},r.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer(!1),onKeyDown:this.toggleDrawer(!1)},r.a.createElement(A.a,null,r.a.createElement(p.b,{to:"/",className:"no-style"},r.a.createElement(K.a,{button:!0},r.a.createElement(U.a,{primary:"\u0421\u043f\u0438\u0441\u043e\u043a"}))),r.a.createElement(p.b,{to:"/map",className:"no-style"},r.a.createElement(K.a,{button:!0},r.a.createElement(U.a,{primary:"\u041a\u0430\u0440\u0442\u0430"})))))))}}]),t}(n.Component),H=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(J.a,{position:"fixed"},r.a.createElement(T.a,{className:"header"},r.a.createElement(z.a,{color:"inherit","aria-label":"Menu"},r.a.createElement(F,null)),r.a.createElement(D.a,{variant:"h6",color:"inherit"},r.a.createElement("i",null,"JG")),r.a.createElement(f.a,{color:"inherit"},"\u0412\u0445\u043e\u0434")))}}]),t}(n.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer paper"},r.a.createElement("div",{className:"center footer__center"},r.a.createElement("div",{className:"small"},"\u041d\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430:",r.a.createElement("a",{href:"mailto:email@mail.mal",className:"mail"},"andrey.shilkin2010@yandex.ru"))))}}]),t}(n.Component),Q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u0440\u0442\u0430")}}]),t}(n.Component),R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"\u044b\u044b\u044b \u0441\u043e\u0431\u044b\u0442\u0438\u0435")}}]),t}(n.Component),X=(a(233),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).stateToggle=function(){e.setState({isMenuVisible:!e.state.isMenuVisible})},e.state={isMenuVisible:!0},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page"},r.a.createElement(p.a,null,r.a.createElement(H,null),r.a.createElement("div",{className:"content"},r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,component:M}),r.a.createElement(h.a,{path:"/map",component:Q}),r.a.createElement(h.a,{path:"/event/",component:R})))),r.a.createElement(L,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,a){e.exports=a(234)}},[[98,1,2]]]);
//# sourceMappingURL=main.c4905fa7.chunk.js.map