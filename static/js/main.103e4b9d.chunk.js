(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(7),i=a.n(o),l=a(1),r=a(2),s=a(4),m=a(3),u=(a(13),a(5)),p=a.n(u),b=(p.a.number.isRequired,p.a.bool.isRequired,a(16),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){e.setState({date:new Date}),console.log(e.state.date.toLocaleTimeString())}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.props.name,t=this.state.date.toLocaleTimeString();return c.a.createElement("div",{className:"clock"},c.a.createElement("p",{className:"clock__face"},"".concat(t)),c.a.createElement("p",{className:"clock__name"},"Clock Name : ".concat(e)))}}]),a}(c.a.Component)),d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0,name:1},e.visibilityClick=function(){e.setState((function(e){return{isClockVisible:!e.isClockVisible}}))},e.addRandomName=function(){var t=Math.round(1e3*Math.random());console.log("The Clock was renamed from ".concat(e.state.name," to ").concat(t)),e.setState({name:t})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isClockVisible,a=e.name;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"App__title"},"React Clock"),t?c.a.createElement(b,{name:a,isVisible:t}):c.a.createElement("div",{className:"clock__face"},"Time to Coffee"),c.a.createElement("button",{className:"App__button",type:"button",onClick:this.visibilityClick},t?"Hide  Clock":"Show Clock"),c.a.createElement("button",{className:"App__button",type:"button",onClick:this.addRandomName},"Change Name"))}}]),a}(c.a.Component);i.a.render(c.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.103e4b9d.chunk.js.map