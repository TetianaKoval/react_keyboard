(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),r=n.n(s),a=n(4),c=n(5),o=n(7),i=n(6),p=n(1),u=n.n(p),d=n(0),y=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pressedKey:""},e.pressKey=function(t){e.setState({pressedKey:t.key})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.pressKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.pressKey)}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:""===e?"Nothing was pressed yet":"The last pressed key is [".concat(this.state.pressedKey,"]")})})}}]),n}(u.a.Component);n(13);r.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.46dbd4e3.chunk.js.map