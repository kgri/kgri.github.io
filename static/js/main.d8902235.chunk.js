(this["webpackJsonpwgt-test"]=this["webpackJsonpwgt-test"]||[]).push([[0],[,function(e,t,a){e.exports={appContainer:"App_appContainer__3UDO8",stepContainer:"App_stepContainer__34Ipl",step:"App_step__pKbIi",activeStep:"App_activeStep__M6rNE",completedStep:"App_completedStep__2HweF"}},,,function(e,t,a){e.exports={button:"Three_button__16bfp",error:"Three_error__1TWo1"}},,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),u=(a(13),a(3)),l=a(2),p=a(7),i=a.n(p),s=a(1),m=a.n(s),v=function(e){var t=e.onNextPage;return r.a.createElement("button",{onClick:t},"Start")},b=function(e){var t=e.onNextPage,a=Object(n.useRef)(null);return r.a.createElement("form",{action:"#",onSubmit:function(e){var n;e.preventDefault(),"WomenGoTech"===(null===(n=a.current)||void 0===n?void 0:n.value)?t():a.current&&(a.current.value="")}},r.a.createElement("input",{placeholder:"Type here",ref:a,autoFocus:!0}))},d=a(4),f=a.n(d),_=function(e){var t=e.onNextPage,a=Object(n.useRef)(null),c=Object(n.useState)(!1),o=Object(l.a)(c,2),u=o[0],p=o[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),m=s[0],v=s[1];return r.a.createElement("form",{action:"#",onSubmit:function(e){var n;e.preventDefault(),"Good value"===(null===(n=a.current)||void 0===n?void 0:n.value)?t():a.current&&p(!0)}},r.a.createElement("input",{placeholder:"Type here",ref:a,value:m,onChange:function(){var e,t;v(null!==(e=null===(t=a.current)||void 0===t?void 0:t.value)&&void 0!==e?e:"")}}),r.a.createElement("button",{type:"submit",className:f.a.button,disabled:!m},"Submit"),u&&r.a.createElement("div",{className:f.a.error,"data-test":"errorMessage"},"You entered a bad value"))},E=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),a=t[0],c=t[1],o=null,p=function(){c(a+1)};switch(a){case 1:o=r.a.createElement(v,{onNextPage:p});break;case 2:o=r.a.createElement(b,{onNextPage:p});break;case 3:o=r.a.createElement(_,{onNextPage:p})}return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:m.a.appContainer},o),r.a.createElement("nav",{className:m.a.stepContainer},[1,2,3].map((function(e,t){var n;return r.a.createElement("div",{className:i()(m.a.step,(n={},Object(u.a)(n,m.a.activeStep,t+1===a),Object(u.a)(n,m.a.completedStep,t+1<a),n)),key:e,"data-test":"step-".concat(t+1)},e)}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.d8902235.chunk.js.map