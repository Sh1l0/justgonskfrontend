(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(19),i=a.n(c),r=(a(27),a(2)),l=a(3),o=a(5),m=a(4),u=a(6),p=a(12),h=a(10),b=function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"card paper"},s.a.createElement("img",{src:this.props.src,width:"200",alt:"",className:"image"}),s.a.createElement("div",{className:"big"},this.props.title||"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),s.a.createElement("div",{className:"small"},this.props.date),s.a.createElement("div",{className:"medium"},this.props.description))}}]),t}(n.Component),d=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).set=function(t){e.setState({cards:t})},e.state={},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=[],a=new XMLHttpRequest;a.open("GET","https://justgonsk.azurewebsites.net/api/Test"),a.setRequestHeader("Content-Type","application/json"),a.send(),a.onreadystatechange=function(){if(4==this.readyState)if(200==this.status){e=JSON.parse(this.responseText),console.log(e);var a=0,n=e.results.map(function(e){return s.a.createElement(b,{key:a++,src:e.images[0].image,title:e.title.toUpperCase(),date:e.dates[0].start_date?e.dates[0].start_date.replace(/\-/g,"."):null,description:e.description.replace("<p>","").replace("</p>","")})});t.set.call(t,n)}else alert("\u043e\u0448\u0438\u0431\u043a\u0430: "+(this.status?this.statusText:"\u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0443\u0434\u0430\u043b\u0441\u044f"))}}},{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper"},this.state.cards||s.a.createElement(b,null))}}]),t}(n.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u0440\u0442\u0430")}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).click=function(e){e.target.parentNode.parentNode.parentNode.classList.remove("visible"),a.props.changeParentState()},a.state={visible:e.visible,className:"menu__background"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.visible!==this.state.visible&&(this.setState({visible:e.visible}),this.state.visible?this.setState({className:"menu__background visible"}):this.setState({className:"menu__background"}),!0)}},{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement("div",{className:this.state.className,onClick:this.click},s.a.createElement("div",{className:"nav paper"},s.a.createElement("ul",{className:"nav__list"},s.a.createElement("li",{onClick:this.click},s.a.createElement(p.b,{className:"nav__link",to:"/"},"\u0421\u043f\u0438\u0441\u043e\u043a")),s.a.createElement("li",{onClick:this.click},s.a.createElement(p.b,{className:"nav__link",to:"/map/"},"\u041a\u0430\u0440\u0442\u0430"))))),s.a.createElement("div",{className:"content"},s.a.createElement(h.c,null,s.a.createElement(h.a,{path:"/",exact:!0,component:d}),s.a.createElement(h.a,{path:"/map",component:v}))))}}]),t}(n.Component),O=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("img",{src:"/hamburger.png",width:"80",height:"80",className:"hamburger",alt:"\u041c\u0435\u043d\u044e",onClick:this.props.onChange})}}]),t}(n.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"header paper"},s.a.createElement("div",{className:"center"},s.a.createElement(O,{onChange:this.props.onChange}),s.a.createElement("div",{className:"logo"},"JG"),s.a.createElement("div",{className:"medium"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))}}]),t}(n.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"footer paper"},s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"small"},"\u041d\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430:",s.a.createElement("a",{href:"mailto:email@mail.mal",className:"mail"},"email@mail.mal"))))}}]),t}(n.Component),g=(a(36),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).stateToggle=function(){e.setState({isMenuVisible:!e.state.isMenuVisible})},e.state={isMenuVisible:!0},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"page"},s.a.createElement(f,{onChange:this.stateToggle}),s.a.createElement(j,{visible:this.state.isMenuVisible,changeParentState:this.stateToggle}),s.a.createElement(E,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.7178b698.chunk.js.map