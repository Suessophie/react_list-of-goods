(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),s=n.n(r),c=n(2),i=n(5),u=n(6),l=n(8),d=n(7),m=(n(14),n(15),n(1)),f=n.n(m),g=f.a.string.isRequired,h=(n(18),function(e){var t=e.good;return o.a.createElement("li",{className:"good"},t)}),p=(f.a.arrayOf(g).isRequired,n(19),function(e){var t=e.goods;return o.a.createElement("ul",{className:"goodsList"},t.map((function(e){return o.a.createElement(h,{key:e,good:e})})))}),b=f.a.shape({func:f.a.func.isRequired,name:f.a.string.isRrequired,id:f.a.number.isRequired}).isRequired,v=function(e){var t=e.button;return o.a.createElement("li",null,o.a.createElement("button",{type:"button",className:"ui button",onClick:t.func},t.name))},y=(f.a.arrayOf(b).isRrequired,n(20),function(e){var t=e.buttonsList;return o.a.createElement("ul",{className:"buttonsList"},t.map((function(e){return o.a.createElement(v,{key:e.id,button:e})})))}),E=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={clickedStart:!1,goods:E,selectValue:1},e.startHideClick=function(){e.setState((function(e){return{clickedStart:!e.clickedStart}}))},e.reverseGoods=function(){e.setState((function(e){return{goods:Object(c.a)(e.goods).reverse()}}))},e.sortGoodsAlphabetically=function(){e.setState((function(e){return{goods:Object(c.a)(e.goods).sort()}}))},e.resetGoods=function(){e.setState({goods:E})},e.sortGoodsByLength=function(){e.setState((function(e){return{goods:Object(c.a)(e.goods).sort((function(e,t){return e.length-t.length}))}}))},e.handleSelect=function(t){var n=t.target.value;e.setState({selectValue:n,goods:E.filter((function(e){return e.length>=n}))})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.clickedStart,n=e.goods,a=[{name:"Reverse",func:this.reverseGoods,id:1},{name:"Sort alpabetically",func:this.sortGoodsAlphabetically,id:2},{name:"Sort by length",func:this.sortGoodsByLength,id:3},{name:"Reset",func:this.resetGoods,id:4}];return o.a.createElement("div",{className:"app"},o.a.createElement("h1",{className:"app__title"},"Goods"),t?o.a.createElement("div",{className:"app__content"},o.a.createElement("button",{type:"button",className:"ui button",onClick:this.startHideClick},"Hide"),o.a.createElement(p,{goods:n}),o.a.createElement(y,{buttonsList:a}),o.a.createElement("select",{onChange:this.handleSelect,value:this.state.selectValue},[1,2,3,4,5,6,7,8,9,10].map((function(e){return o.a.createElement("option",{key:e,value:e},e)})))):o.a.createElement("button",{type:"button",className:"ui button",onClick:this.startHideClick},"Start"))}}]),n}(o.a.PureComponent);s.a.render(o.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.865bcfc0.chunk.js.map