(this.webpackJsonpreact_tabs_editor=this.webpackJsonpreact_tabs_editor||[]).push([[0],{117:function(t,n,e){"use strict";e.r(n);var r=e(1),i=e(0),a=e.n(i),c=e(37),o=e.n(c),u=(e(84),e(85),e(86),e(30)),s=e(38),l=e(39),d=e(43),b=e(42),h=e(6),f=e(7);function j(){var t=Object(h.a)(["\nposition:relative;\nmax-width:1280px;\nmargin:0 auto;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\n"]);return j=function(){return t},t}var p=f.a.div(j());function m(t){var n=t.children;return Object(r.jsx)(p,{children:n})}function x(){var t=Object(h.a)(["\n    font-size:1.6rem;\n    line-height:1.2;\n    font-weight:600;\n    color:#000000;\n    width: 150px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n"]);return x=function(){return t},t}function g(){var t=Object(h.a)(["\n    background-color: transparent;\n    transition-property: color, background-color;\n    transition-duration: 0.3s;\n    border-right: 1px solid rgba(0, 0, 0, 0.5);\n    text-transform: uppercase;\n    cursor:pointer;\n    &:hover {\n      background-color: #ffd600;\n    }\n    &:hover>a{\n      color:#fff;\n      font-weight:700;\n    }\n    &:last-child {\n      border-right: none;\n    }\n\n"]);return g=function(){return t},t}function O(){var t=Object(h.a)(["\n\n    max-width: 850px;\n    margin: 0 auto 50px;\n    display: flex;\n    justify-content: center;\n  \n"]);return O=function(){return t},t}var v=f.a.ul(O()),w=f.a.li(g()),I=f.a.a(x());function y(t){var n=t.data,e=t.onHandlerButton,i=Object(u.a)(new Set(n.map((function(t){return t.tabName}))));return Object(r.jsx)(v,{children:i.map((function(t){return Object(r.jsx)(w,{onClick:function(){return e(t)},children:Object(r.jsx)(I,{children:t})},t)}))})}function C(){var t=Object(h.a)(["\nfont-size:1.1rem;\n    line-height:1.2;\n    font-weight:400;\n    color:#000000;    \n"]);return C=function(){return t},t}function k(){var t=Object(h.a)(["\n    font-size:1.1rem;\n    line-height:1.2;\n    font-weight:700;\n    color:#000000;\n    text-transform: uppercase;\n"]);return k=function(){return t},t}function S(){var t=Object(h.a)(["\n max-width: 300px;\n margin-right:70px;\n cursor: pointer;\n    &:not(:last-child) {\n      margin-bottom: 20px;\n    }\n    &:hover,\n    :focus {\n      &:after {\n        content: '';\n        display: block;\n        width: 100%;\n        outline: 2px solid #e8c300;\n      }\n    }\n"]);return S=function(){return t},t}function N(){var t=Object(h.a)(["\nwidth: 100%;\nmax-height:500px;\npadding-bottom:50px;\n"]);return N=function(){return t},t}var A=f.a.ul(N()),B=f.a.li(S()),E=f.a.h3(k()),T=f.a.p(C());function D(t){var n=t.data;return Object(r.jsx)(A,{children:n.map((function(t){var n=t.id,e=t.price,i=t.title,a=t.description;return Object(r.jsxs)(B,{children:[Object(r.jsx)(E,{children:"".concat(i," . . . .").concat(e," USD")}),Object(r.jsx)(T,{children:a})]},n)}))})}var z=e(40),F=e(48);function _(){var t=Object(h.a)(["\nfont-size:1.6rem;\nfont-weight:800;\ncolor :#BCFB3F;\n"]);return _=function(){return t},t}function M(){var t=Object(h.a)(["\nwidth:75px;\nheight: 30px;\nbackground-color:green;\nborder-radius:1rem;\nborder:2px solid #000000;\ncolor:#fff;\nfont-size:1rem;\ntext-transform:uppercase;\nfont-weight:600;\ncursor:pointer;\n&.buttonDeleteItem{\n    background-color:grey;\n    margin-right:10px;\n}\n"]);return M=function(){return t},t}function q(){var t=Object(h.a)(["\npadding:10px;\nwidth:500px;\nbackground-color:#E7FDBB;\nborder:2px solid #7FA335;\nborder-radius:1rem;\ntransition: background-color 0.3s ease-in-out;\n&:not(:last-child){\n    margin-bottom:10px;\n}\n&:hover,:focus{\n    background-color:#8BB92E;\n}\n"]);return q=function(){return t},t}function J(){var t=Object(h.a)(["\nmax-width:700px;\nmargin:0 auto;\ndisplay:flex;\nflex-wrap:wrap;\njustify-content:center;\n"]);return J=function(){return t},t}var L=f.a.ul(J()),H=f.a.li(q()),U=f.a.button(M()),K=f.a.span(_());function P(t){var n=t.arrItems,e=t.onDeleteItem,i=t.onEditItem;return Object(r.jsx)(L,{children:n.map((function(t){var n=t.tabName,a=t.title,c=t.price,o=t.description,u=t.id;return Object(r.jsxs)(H,{children:[Object(r.jsxs)("p",{children:[Object(r.jsx)(K,{children:"Tab name:"})," ",n]}),Object(r.jsxs)("p",{children:[Object(r.jsx)(K,{children:"Title dish:"})," ",a]}),Object(r.jsxs)("p",{children:[Object(r.jsx)(K,{children:"Price:"})," ",c]}),Object(r.jsxs)("p",{children:[Object(r.jsx)(K,{children:"Description:"})," ",o]}),Object(r.jsx)(U,{className:"buttonDeleteItem",onClick:function(){return e(u)},children:"delete item"}),Object(r.jsx)(U,{onClick:function(){return i(u)},children:"edit item"})]},u)}))})}function V(){var t=Object(h.a)(["\nfont-size:1.4rem;\ncolor:red;\nfont-weight:600;\ntext-align:center;\n"]);return V=function(){return t},t}var $=f.a.p(V());function G(t){var n=t.message;return Object(r.jsx)($,{children:n})}function Q(){var t=Object(h.a)(["\nmargin-bottom: 4px;\nfont-size:1.4rem;\nfont-weight:800;\ncolor :#8BB92E;\n"]);return Q=function(){return t},t}function R(){var t=Object(h.a)(["\nwidth:150px;\nheight: 40px;\nbackground-color:green;\nborder-radius:1rem;\nborder:2px solid #000000;\ncolor:#fff;\nfont-size:1.4rem;\ntext-transform:uppercase;\nfont-weight:600;\ncursor:pointer;\n&.buttonCreate{\n    background-color:red;\n}\n&.buttonCreateItem{\n    margin-right:10px;\n}\n"]);return R=function(){return t},t}function W(){var t=Object(h.a)(["\nmargin-bottom: 10px;\n"]);return W=function(){return t},t}function X(){var t=Object(h.a)(["\nwidth:400px;\n"]);return X=function(){return t},t}function Y(){var t=Object(h.a)(["\nheight:500px;\npadding:30px;\noverflow-y:scroll;\n"]);return Y=function(){return t},t}function Z(){var t=Object(h.a)(["\npadding-top:50px;\nmax-width:100%;\ndisplay:flex;\njustify-content:flex-start;\n"]);return Z=function(){return t},t}var tt=f.a.div(Z()),nt=f.a.div(Y()),et=f.a.form(X()),rt=f.a.div(W()),it=f.a.button(R()),at=f.a.p(Q()),ct=e(62),ot=e.n(ct),ut=e(121),st=e(123),lt=ut.a.TextArea,dt=function(t){Object(d.a)(e,t);var n=Object(b.a)(e);function e(){var t;Object(s.a)(this,e);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=n.call.apply(n,[this].concat(i))).state={tabName:"",title:"",price:0,description:"",id:null,itemArr:[],isEdit:!1},t.handlerCreateItem=function(n){n.preventDefault();var e=t.state,r=e.tabName,i=e.title,a=e.price,c=e.description,o=e.isEdit,s=e.id,l=function(){t.setState((function(t){return{itemArr:[].concat(Object(u.a)(t.itemArr),[{tabName:r,title:i,price:a,description:c,id:ot()()}])}}))};o?(t.setState({itemArr:t.state.itemArr.filter((function(t){return t.id!==s}))}),l()):l(),t.setState({tabName:"",title:"",price:0,description:"",id:null,isEdit:!1})},t.deleteItem=function(n){t.setState({itemArr:t.state.itemArr.filter((function(t){return t.id!==n}))})},t.editItem=function(n){var e=t.state.itemArr.find((function(t){return t.id===n}));t.setState(Object(F.a)(Object(F.a)({},e),{},{isEdit:!0}))},t.handlerInputNumber=function(n){t.setState({price:n})},t.handlerInput=function(n){var e=n.target,r=e.name,i=e.value;t.setState(Object(z.a)({},r,i))},t}return Object(l.a)(e,[{key:"componentDidMount",value:function(){this.setState({itemArr:Object(u.a)(this.props.data)})}},{key:"render",value:function(){var t=this,n=this.state,e=n.tabName,i=n.title,a=n.price,c=n.description,o=n.itemArr,u=n.isEdit,s=localStorage.getItem("save_data");return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(tt,{children:[Object(r.jsxs)(et,{onSubmit:this.handlerCreateItem,children:[Object(r.jsxs)(rt,{children:[Object(r.jsx)(at,{children:"input Tab name (max length 25 symbols)"}),Object(r.jsx)(ut.a,{name:"tabName",value:e,maxLength:25,onChange:this.handlerInput,required:!0})]}),Object(r.jsxs)(rt,{children:[Object(r.jsx)(at,{children:"input title dish"}),Object(r.jsx)(ut.a,{name:"title",type:"text",value:i,onChange:this.handlerInput,required:!0})]}),Object(r.jsxs)(rt,{children:[Object(r.jsx)(at,{children:"Input price"}),Object(r.jsx)(st.a,{defaultValue:0,min:1,value:a,onChange:this.handlerInputNumber,required:!0})]}),Object(r.jsxs)(rt,{children:[Object(r.jsx)(at,{children:"Input dish description"}),Object(r.jsx)(lt,{value:c,name:"description",onChange:this.handlerInput,required:!0})]}),Object(r.jsx)(it,{className:"buttonCreateItem",type:"submit",children:u?"Save Change":"Create Item"}),o.length>0&&Object(r.jsx)(it,{className:"buttonCreate",onClick:function(){return t.props.onCreateTable(o)},children:s?"Update Menu":"Create Menu"})]}),o.length>0?Object(r.jsxs)(nt,{children:[" ",Object(r.jsx)(P,{arrItems:o,onDeleteItem:this.deleteItem,onEditItem:this.editItem})," "]}):Object(r.jsx)(G,{message:"Create Item for next step!"})]})})}}]),e}(i.Component);function bt(){var t=Object(h.a)(["\n  width: 200px;\n  height: 60px;\n  border: 1px solid $border-color;\n  border-radius: 0.5rem;\n  font-size:1.2rem;\n  font-weight:700;\n  color:#000000;\n  text-transform: uppercase;\n  background-color: transparent;\n  transition-property: background-color;\n  transition-duration: 0.3s;\n  cursor: pointer;\n  &:hover,\n  :focus {\n    background-color:#e8c300;\n    border: none;\n  }\n"]);return bt=function(){return t},t}var ht=f.a.button(bt());function ft(t){var n=t.toggle,e=t.title;return Object(r.jsx)(ht,{onClick:n,children:e})}function jt(){var t=Object(h.a)(["\n    font-size:6.5rem; \n    font-family:'Kaushan Script';\n    text-align: center;\n    margin-bottom: 15px;\n    &:after {\n      content: '';\n      display: block;\n      width: 60px;\n      border-bottom: 5px solid #e8c300;\n      border-radius: 1rem;\n      margin: 20px auto 30px;\n    }\n"]);return jt=function(){return t},t}function pt(){var t=Object(h.a)(["\nmax-width:1280px;\nmargin:0 auto;\n"]);return pt=function(){return t},t}var mt=f.a.header(pt()),xt=f.a.h2(jt());function gt(t){var n=t.title;return Object(r.jsx)(mt,{children:Object(r.jsx)(xt,{children:n})})}var Ot=function(t){Object(d.a)(e,t);var n=Object(b.a)(e);function e(){var t;Object(s.a)(this,e);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=n.call.apply(n,[this].concat(i))).state={data:[],filter:"",toggle:!1},t.toggle=function(){return t.setState((function(t){return{toggle:!t.toggle}}))},t.handlerCreateTable=function(n){t.setState({data:Object(u.a)(n)}),t.toggle(),localStorage.setItem("save_data",JSON.stringify(n))},t.handlerTabButton=function(n){console.log(n),t.setState({filter:n})},t.filterTabItem=function(){return t.state.data.filter((function(n){return n.tabName.toLowerCase().includes(t.state.filter.toLowerCase())}))},t}return Object(l.a)(e,[{key:"componentDidMount",value:function(){localStorage.getItem("save_data")&&this.setState({data:JSON.parse(localStorage.getItem("save_data"))})}},{key:"render",value:function(){var t=this.state,n=t.data,e=t.toggle,i=this.filterTabItem();return Object(r.jsxs)(r.Fragment,{children:[!e&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(gt,{title:"Dish Menu"}),Object(r.jsx)(m,{children:n.length>0&&Object(r.jsx)(y,{data:n,onHandlerButton:this.handlerTabButton})}),Object(r.jsx)(m,{children:Object(r.jsx)(D,{data:i})}),Object(r.jsx)(m,{children:Object(r.jsx)(ft,{title:n.length>0?"Edit menu":"Create Menu",toggle:this.toggle})})]}),e&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(m,{children:Object(r.jsx)(dt,{onCreateTable:this.handlerCreateTable,data:n})})})]})}}]),e}(i.Component);o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Ot,{})}),document.getElementById("root"))},85:function(t,n,e){},86:function(t,n,e){}},[[117,1,2]]]);
//# sourceMappingURL=main.bef6c69c.chunk.js.map