(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"9tWQ":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wkk1"),i=n("kDLi"),s=n("t8hP"),u=n("DcPX"),c=n("ngQI");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){var e,n;d(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=v(this,(e=h(t)).call.apply(e,[this].concat(a)))).onRemoveQuery=function(e){n.props.onQueriesChange(n.props.queries.filter((function(t){return t!==e})))},n.onDragEnd=function(e){var t=n.props,r=t.queries,a=t.onQueriesChange;if(e&&e.destination){var o=e.source.index,i=e.destination.index;if(o!==i){var s=Array.from(r),u=f(s.splice(o,1),1)[0];s.splice(i,0,u),a(s)}}},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"onChangeQuery",value:function(e,t){var n=this.props,r=n.queries,a=n.onQueriesChange,o=r[t];o.datasource&&(e.datasource=o.datasource),a(r.map((function(n,r){return r===t?e:n})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.dsSettings,r=t.data,o=t.queries;return a.a.createElement(c.a,{onDragEnd:this.onDragEnd},a.a.createElement(c.c,{droppableId:"transformations-list",direction:"vertical"},(function(t){return a.a.createElement("div",p({ref:t.innerRef},t.droppableProps),o.map((function(t,i){return a.a.createElement(u.a,{dsSettings:n,id:t.refId,index:i,key:t.refId,data:r,query:t,onChange:function(t){return e.onChangeQuery(t,i)},onRemoveQuery:e.onRemoveQuery,onAddQuery:e.props.onAddQuery,onRunQuery:e.props.onRunQueries,queries:o})})),t.placeholder)})))}}])&&m(n.prototype,r),o&&m(n,o),t}(r.PureComponent),b=n("NXk7"),O=n("ZFWI"),S=n("Obii"),E=n("OG+f"),w=n("bMS5"),x=n("exx3"),j=n("Csm0"),C=n("lcF4"),P=n("kDDq");function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n      margin-left: ",";\n      font-size: ",";\n      color: ",";\n    "]);return R=function(){return e},e}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=function(e){function t(e){var n,r,a,o,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(i=D(this,N(t).call(this,e))).onRelativeTimeChange=function(e){i.setState({timeRangeFrom:e.target.value})},i.onTimeShiftChange=function(e){i.setState({timeRangeShift:e.target.value})},i.onOverrideTime=function(e){var t,n,r=i.props,a=r.options,o=r.onChange,s=F(e.target.value),u=M(s);u&&(null===(t=a.timeRange)||void 0===t?void 0:t.from)!==s&&o(I({},a,{timeRange:I({},null!==(n=a.timeRange)&&void 0!==n?n:{},{from:s})}));i.setState({relativeTimeIsValid:u})},i.onTimeShift=function(e){var t,n,r=i.props,a=r.options,o=r.onChange,s=F(e.target.value),u=M(s);u&&(null===(t=a.timeRange)||void 0===t?void 0:t.shift)!==s&&o(I({},a,{timeRange:I({},null!==(n=a.timeRange)&&void 0!==n?n:{},{shift:s})}));i.setState({timeShiftIsValid:u})},i.onToggleTimeOverride=function(){var e=i.props,t=e.onChange,n=e.options;i.setState({timeRangeHide:!i.state.timeRangeHide},(function(){var e;t(I({},n,{timeRange:I({},null!==(e=n.timeRange)&&void 0!==e?e:{},{hide:i.state.timeRangeHide})}))}))},i.onCacheTimeoutBlur=function(e){var t=i.props,n=t.options;(0,t.onChange)(I({},n,{cacheTimeout:F(e.target.value)}))},i.onMaxDataPointsBlur=function(e){var t=i.props,n=t.options,r=t.onChange,a=parseInt(e.target.value,10);(isNaN(a)||0===a)&&(a=null),a!==n.maxDataPoints&&r(I({},n,{maxDataPoints:a}))},i.onMinIntervalBlur=function(e){var t=i.props,n=t.options,r=t.onChange,a=F(e.target.value);a!==n.minInterval&&r(I({},n,{minInterval:a}))},i.onOpenOptions=function(){i.setState({isOpen:!0})},i.onCloseOptions=function(){i.setState({isOpen:!1})};var s=e.options;return i.state={timeRangeFrom:(null===(n=s.timeRange)||void 0===n?void 0:n.from)||"",timeRangeShift:(null===(r=s.timeRange)||void 0===r?void 0:r.shift)||"",timeRangeHide:null!==(a=null===(o=s.timeRange)||void 0===o?void 0:o.hide)&&void 0!==a&&a,isOpen:!1,relativeTimeIsValid:!0,timeShiftIsValid:!0},i}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(r=[{key:"renderCacheTimeoutOption",value:function(){var e,t,n=this.props,r=n.dataSource,o=n.options;return(null===(e=r.meta.queryOptions)||void 0===e?void 0:e.cacheTimeout)?a.a.createElement("div",{className:"gf-form-inline"},a.a.createElement("div",{className:"gf-form"},a.a.createElement(i.InlineFormLabel,{width:9,tooltip:"If your time series store has a query cache this option can override the default cache timeout. Specify a\n    numeric value in seconds."},"Cache timeout"),a.a.createElement(i.Input,{type:"text",className:"width-6",placeholder:"60",spellCheck:!1,onBlur:this.onCacheTimeoutBlur,defaultValue:null!==(t=o.cacheTimeout)&&void 0!==t?t:""}))):null}},{key:"renderMaxDataPointsOption",value:function(){var e,t,n=this.props,r=n.data,o=n.options,s=null===(e=r.request)||void 0===e?void 0:e.maxDataPoints,u=null!==(t=o.maxDataPoints)&&void 0!==t?t:"",c=""===u;return a.a.createElement("div",{className:"gf-form-inline"},a.a.createElement("div",{className:"gf-form"},a.a.createElement(i.InlineFormLabel,{width:9,tooltip:a.a.createElement(a.a.Fragment,null,"The maximum data points per series. Used directly by some data sources and used in calculation of auto interval. With streaming data this value is used for the rolling buffer.")},"Max data points"),a.a.createElement(i.Input,{type:"number",className:"width-6",placeholder:"".concat(s),spellCheck:!1,onBlur:this.onMaxDataPointsBlur,defaultValue:u}),c&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"gf-form-label query-segment-operator"},"="),a.a.createElement("div",{className:"gf-form-label"},"Width of panel"))))}},{key:"renderIntervalOption",value:function(){var e,t,n,r=this.props,o=r.data,s=r.dataSource,u=r.options,c=null===(e=o.request)||void 0===e?void 0:e.interval,l=null!==(t=s.interval)&&void 0!==t?t:"No limit";return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"gf-form-inline"},a.a.createElement("div",{className:"gf-form"},a.a.createElement(i.InlineFormLabel,{width:9,tooltip:a.a.createElement(a.a.Fragment,null,"A lower limit for the interval. Recommended to be set to write frequency, for example ",a.a.createElement("code",null,"1m")," ","if your data is written every minute. Default value can be set in data source settings for most data sources.")},"Min interval"),a.a.createElement(i.Input,{type:"text",className:"width-6",placeholder:"".concat(l),spellCheck:!1,onBlur:this.onMinIntervalBlur,defaultValue:null!==(n=u.minInterval)&&void 0!==n?n:""}))),a.a.createElement("div",{className:"gf-form-inline"},a.a.createElement("div",{className:"gf-form"},a.a.createElement(i.InlineFormLabel,{width:9,tooltip:a.a.createElement(a.a.Fragment,null,"The evaluated Interval that is sent to data source and is used in ",a.a.createElement("code",null,"$__interval")," and"," ",a.a.createElement("code",null,"$__interval_ms"))},"Interval"),a.a.createElement(i.InlineFormLabel,{width:6},c),a.a.createElement("div",{className:"gf-form-label query-segment-operator"},"="),a.a.createElement("div",{className:"gf-form-label"},"Max data points / time range"))))}},{key:"renderCollapsedText",value:function(e){var t,n=this.props,r=n.data,o=n.options;if(!this.state.isOpen){var i=null!==(t=o.maxDataPoints)&&void 0!==t?t:"";""===i&&r.request&&(i="auto = ".concat(r.request.maxDataPoints));var s=o.minInterval;return r.request&&(s="".concat(r.request.interval)),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:e.collapsedText},"MD = ",i),a.a.createElement("div",{className:e.collapsedText},"Interval = ",s))}}},{key:"render",value:function(){var e=this.state,t=e.timeRangeHide,n=e.relativeTimeIsValid,r=e.timeShiftIsValid,o=this.state,s=o.timeRangeFrom,u=o.timeRangeShift,c=o.isOpen,l=B();return a.a.createElement(C.a,{id:"Query options",index:0,title:"Query options",headerElement:this.renderCollapsedText(l),isOpen:c,onOpen:this.onOpenOptions,onClose:this.onCloseOptions},this.renderMaxDataPointsOption(),this.renderIntervalOption(),this.renderCacheTimeoutOption(),a.a.createElement("div",{className:"gf-form"},a.a.createElement(i.InlineFormLabel,{width:9},"Relative time"),a.a.createElement(i.Input,{type:"text",className:"width-6",placeholder:"1h",onChange:this.onRelativeTimeChange,onBlur:this.onOverrideTime,invalid:!n,value:s})),a.a.createElement("div",{className:"gf-form"},a.a.createElement("span",{className:"gf-form-label width-9"},"Time shift"),a.a.createElement(i.Input,{type:"text",className:"width-6",placeholder:"1h",onChange:this.onTimeShiftChange,onBlur:this.onTimeShift,invalid:!r,value:u})),(u||s)&&a.a.createElement("div",{className:"gf-form-inline"},a.a.createElement(i.InlineField,{label:"Hide time info",labelWidth:18},a.a.createElement(i.Switch,{value:t,onChange:this.onToggleTimeOverride}))))}}])&&q(n.prototype,r),o&&q(n,o),t}(r.PureComponent),M=function(e){return!e||S.rangeUtil.isValidTimeSpan(e)},F=function(e){return""===e?null:e},B=Object(i.stylesFactory)((function(){var e=O.a.theme;return{collapsedText:Object(P.css)(R(),e.spacing.md,e.typography.size.sm,e.colors.textWeak)}})),H=n("4RCQ");function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(){var e=$(["\n      margin-right: ",";\n    "]);return V=function(){return e},e}function L(){var e=$([""]);return L=function(){return e},e}function z(){var e=$(["\n      padding-bottom: 16px;\n    "]);return z=function(){return e},e}function U(){var e=$(["\n      flex-grow: 1;\n      margin-right: ",";\n    "]);return U=function(){return e},e}function G(){var e=$(["\n      margin-right: ",";\n    "]);return G=function(){return e},e}function J(){var e=$(["\n      display: flex;\n      margin-bottom: ",";\n    "]);return J=function(){return e},e}function X(){var e=$(["\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      padding: ",";\n    "]);return X=function(){return e},e}function $(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y(e,t,n,r,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,a)}function ee(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){Y(o,r,a,i,s,"next",e)}function s(e){Y(o,r,a,i,s,"throw",e)}i(void 0)}))}}function te(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function re(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ae(e){return(ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return ie}));var ie=function(e){function t(){var e,n;te(this,t);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(n=re(this,(e=ae(t)).call.apply(e,[this].concat(i)))).backendSrv=b.b,n.dataSourceSrv=Object(s.getDataSourceSrv)(),n.state={isLoadingHelp:!1,helpContent:null,isPickerOpen:!1,isAddingMixed:!1,isHelpOpen:!1,scrollTop:0,data:{state:S.LoadingState.NotStarted,series:[],timeRange:Object(S.getDefaultTimeRange)()}},n.onChangeDataSource=function(){var e=ee(regeneratorRuntime.mark((function e(t){var r,a,o,i,s,u,c,l,p,f,d,m,v,h,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.props.options.queries,a=n.state.dsSettings,!t.meta.mixed){e.next=24;break}for(o=!0,i=!1,s=void 0,e.prev=6,u=r[Symbol.iterator]();!(o=(c=u.next()).done);o=!0)(l=c.value).datasource!==x.a&&(l.datasource=null==a?void 0:a.name,l.datasource||(l.datasource=O.b.defaultDatasource));e.next=14;break;case 10:e.prev=10,e.t0=e.catch(6),i=!0,s=e.t0;case 14:e.prev=14,e.prev=15,o||null==u.return||u.return();case 17:if(e.prev=17,!i){e.next=20;break}throw s;case 20:return e.finish(17);case 21:return e.finish(14);case 22:e.next=48;break;case 24:if(!a){e.next=48;break}if(!a.meta.mixed){e.next=47;break}for(p=!0,f=!1,d=void 0,e.prev=29,m=r[Symbol.iterator]();!(p=(v=m.next()).done);p=!0)(h=v.value).datasource!==x.a&&delete h.datasource;e.next=37;break;case 33:e.prev=33,e.t1=e.catch(29),f=!0,d=e.t1;case 37:e.prev=37,e.prev=38,p||null==m.return||m.return();case 40:if(e.prev=40,!f){e.next=43;break}throw d;case 43:return e.finish(40);case 44:return e.finish(37);case 45:e.next=48;break;case 47:a.meta.id!==t.meta.id&&(r=[{refId:"A"}]);case 48:return e.next=50,n.dataSourceSrv.get(t.name);case 50:y=e.sent,n.onChange({queries:r,dataSource:{name:t.name,uid:t.uid,default:t.isDefault}}),n.setState({dataSource:y,dsSettings:t});case 53:case"end":return e.stop()}}),e,null,[[6,10,14,22],[15,,17,21],[29,33,37,45],[38,,40,44]])})));return function(t){return e.apply(this,arguments)}}(),n.onAddQueryClick=function(){var e;(null===(e=n.state.dsSettings)||void 0===e?void 0:e.meta.mixed)?n.setState({isAddingMixed:!0}):(n.onChange({queries:Object(w.a)(n.props.options.queries)}),n.onScrollBottom())},n.onAddExpressionClick=function(){n.onChange({queries:Object(w.a)(n.props.options.queries,x.b.newQuery())}),n.onScrollBottom()},n.onScrollBottom=function(){n.setState({scrollTop:1e3})},n.onUpdateAndRun=function(e){n.props.onOptionsChange(e),n.props.onRunQueries()},n.onOpenHelp=function(){n.setState({isHelpOpen:!0})},n.onCloseHelp=function(){n.setState({isHelpOpen:!1})},n.renderMixedPicker=function(){return a.a.createElement(o.a,{mixed:!1,onChange:n.onAddMixedQuery,current:null,autoFocus:!0,variables:!0,onBlur:n.onMixedPickerBlur,openMenuOnFocus:!0})},n.onAddMixedQuery=function(e){n.onAddQuery({datasource:e.name}),n.setState({isAddingMixed:!1,scrollTop:n.state.scrollTop+1e4})},n.onMixedPickerBlur=function(){n.setState({isAddingMixed:!1})},n.onAddQuery=function(e){var t=n.props.options.queries;n.onChange({queries:Object(w.a)(t,e)}),n.onScrollBottom()},n.setScrollTop=function(e){var t=e.target;n.setState({scrollTop:t.scrollTop})},n.onQueriesChange=function(e){n.onChange({queries:e})},n}var n,r,u,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:(c=ee(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.queryRunner,r=t.options,this.querySubscription=n.getData({withTransforms:!1,withFieldConfig:!1}).subscribe({next:function(e){return i.onPanelDataUpdate(e)}}),e.prev=2,e.next=5,this.dataSourceSrv.get(r.dataSource.name);case 5:a=e.sent,o=this.dataSourceSrv.getInstanceSettings(r.dataSource.name),this.setState({dataSource:a,dsSettings:o}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("failed to load data source",e.t0);case 13:case"end":return e.stop()}}),e,this,[[2,10]])}))),function(){return c.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){this.querySubscription&&(this.querySubscription.unsubscribe(),this.querySubscription=null)}},{key:"onPanelDataUpdate",value:function(e){this.setState({data:e})}},{key:"onChange",value:function(e){this.props.onOptionsChange(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.props.options,{},e))}},{key:"renderTopSection",value:function(e){var t=this.props,n=t.onOpenQueryInspector,r=t.options,s=this.state,u=s.dataSource,c=s.data;return a.a.createElement("div",null,a.a.createElement("div",{className:e.dataSourceRow},a.a.createElement("div",{className:e.dataSourceRowItem},a.a.createElement(o.a,{onChange:this.onChangeDataSource,current:r.dataSource.name,metrics:!0,mixed:!0,dashboard:!0,variables:!0})),u&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:e.dataSourceRowItem},a.a.createElement(i.Button,{variant:"secondary",icon:"question-circle",title:"Open data source help",onClick:this.onOpenHelp})),a.a.createElement("div",{className:e.dataSourceRowItemOptions},a.a.createElement(A,{options:r,dataSource:u,data:c,onChange:this.onUpdateAndRun})),n&&a.a.createElement("div",{className:e.dataSourceRowItem},a.a.createElement(i.Button,{variant:"secondary",onClick:n,"aria-label":j.selectors.components.QueryTab.queryInspectorButton},"Query inspector")))))}},{key:"renderQueries",value:function(e){var t=this.props,n=t.options,r=t.onRunQueries,o=this.state.data;return Object(H.b)(e.name)?a.a.createElement(H.a,{queries:n.queries,panelData:o,onChange:this.onQueriesChange,onRunQueries:r}):a.a.createElement("div",{"aria-label":j.selectors.components.QueryTab.content},a.a.createElement(g,{queries:n.queries,dsSettings:e,onQueriesChange:this.onQueriesChange,onAddQuery:this.onAddQuery,onRunQueries:r,data:o}))}},{key:"isExpressionsSupported",value:function(e){return!0===(e.meta.alerting||e.meta.mixed)}},{key:"renderAddQueryRow",value:function(e,t){var n=this.state.isAddingMixed,r=!(n||Object(H.b)(e.name));return a.a.createElement(i.HorizontalGroup,{spacing:"md",align:"flex-start"},r&&a.a.createElement(i.Button,{icon:"plus",onClick:this.onAddQueryClick,variant:"secondary","aria-label":j.selectors.components.QueryTab.addQuery},"Query"),n&&this.renderMixedPicker(),O.b.expressionsEnabled&&this.isExpressionsSupported(e)&&a.a.createElement(i.Tooltip,{content:"Experimental feature: queries could stop working in next version",placement:"right"},a.a.createElement(i.Button,{icon:"plus",onClick:this.onAddExpressionClick,variant:"secondary",className:t.expressionButton},a.a.createElement("span",null,"Expression "),a.a.createElement(i.Icon,{name:"exclamation-triangle",className:"muted",size:"sm"}))))}},{key:"render",value:function(){var e=this.state,t=e.scrollTop,n=e.isHelpOpen,r=e.dsSettings,o=se();return a.a.createElement(i.CustomScrollbar,{autoHeightMin:"100%",scrollTop:t,setScrollTop:this.setScrollTop},a.a.createElement("div",{className:o.innerWrapper},this.renderTopSection(o),r&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:o.queriesWrapper},this.renderQueries(r)),this.renderAddQueryRow(r,o),n&&a.a.createElement(i.Modal,{title:"Data source help",isOpen:!0,onDismiss:this.onCloseHelp},a.a.createElement(E.a,{plugin:r.meta,type:"query_help"})))))}}])&&ne(n.prototype,r),u&&ne(n,u),t}(r.PureComponent),se=Object(i.stylesFactory)((function(){var e=O.b.theme;return{innerWrapper:Object(P.css)(X(),e.spacing.md),dataSourceRow:Object(P.css)(J(),e.spacing.md),dataSourceRowItem:Object(P.css)(G(),e.spacing.inlineFormMargin),dataSourceRowItemOptions:Object(P.css)(U(),e.spacing.inlineFormMargin),queriesWrapper:Object(P.css)(z()),expressionWrapper:Object(P.css)(L()),expressionButton:Object(P.css)(V(),e.spacing.sm)}}))}}]);
//# sourceMappingURL=default~DashboardPage~NgAlertingPage~sandbox.0cd8deb042c68e8113e4.js.map