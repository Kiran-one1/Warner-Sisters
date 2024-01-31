/*! For license information please see ApiKeysPage.0cd8deb042c68e8113e4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{AkEj:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),o=n("EKT6"),i=function(e){var t=e.searchQuery,n=e.disabled,r=e.onAddClick,i=e.onSearchChange;return a.a.createElement("div",{className:"page-action-bar"},a.a.createElement("div",{className:"gf-form gf-form--grow"},a.a.createElement(o.a,{labelClassName:"gf-form--has-input-icon gf-form--grow",inputClassName:"gf-form-input",placeholder:"Search keys",value:t,onChange:i})),a.a.createElement("div",{className:"page-action-bar__spacer"}),a.a.createElement("button",{className:"btn btn-primary pull-right",onClick:r,disabled:n},"Add API key"))}},Bu2e:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),o=n("kDLi"),i=n("Obii"),l=function(e){var t=e.apiKeys,n=e.timeZone,r=e.onDelete;return a.a.createElement("table",{className:"filter-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Role"),a.a.createElement("th",null,"Expires"),a.a.createElement("th",{style:{width:"34px"}}))),t.length>0?a.a.createElement("tbody",null,t.map((function(e){return a.a.createElement("tr",{key:e.id},a.a.createElement("td",null,e.name),a.a.createElement("td",null,e.role),a.a.createElement("td",null,function(e,t){if(!e)return"No expiration date";return Object(i.dateTimeFormat)(e,{timeZone:t})}(e.expiration,n)),a.a.createElement("td",null,a.a.createElement(o.DeleteButton,{size:"sm",onConfirm:function(){return r(e)}})))}))):null)}},IDhZ:function(e,t,n){"use strict";var r=n("MgzW"),a=n("q1tI");function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=60106,l=60107,c=60108,u=60114,s=60109,f=60110,p=60112,d=60113,h=60120,m=60115,y=60116,v=60121,g=60117,b=60119,w=60129,x=60131;if("function"==typeof Symbol&&Symbol.for){var E=Symbol.for;i=E("react.portal"),l=E("react.fragment"),c=E("react.strict_mode"),u=E("react.profiler"),s=E("react.provider"),f=E("react.context"),p=E("react.forward_ref"),d=E("react.suspense"),h=E("react.suspense_list"),m=E("react.memo"),y=E("react.lazy"),v=E("react.block"),g=E("react.fundamental"),b=E("react.scope"),w=E("react.debug_trace_mode"),x=E("react.legacy_hidden")}function k(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case l:return"Fragment";case i:return"Portal";case u:return"Profiler";case c:return"StrictMode";case d:return"Suspense";case h:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case f:return(e.displayName||"Context")+".Consumer";case s:return(e._context.displayName||"Context")+".Provider";case p:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case m:return k(e.type);case v:return k(e._render);case y:t=e._payload,e=e._init;try{return k(e(t))}catch(e){}}return null}var S=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O={};function C(e,t){for(var n=0|e._threadCount;n<=t;n++)e[n]=e._currentValue2,e._threadCount=n+1}for(var N=new Uint16Array(16),I=0;15>I;I++)N[I]=I+1;N[15]=0;var F=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,A=Object.prototype.hasOwnProperty,D={},j={};function P(e){return!!A.call(j,e)||!A.call(D,e)&&(F.test(e)?j[e]=!0:(D[e]=!0,!1))}function _(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){T[e]=new _(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];T[t]=new _(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){T[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){T[e]=new _(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){T[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){T[e]=new _(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){T[e]=new _(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){T[e]=new _(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){T[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)}));var M=/[\-:]([a-z])/g;function K(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(M,K);T[t]=new _(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(M,K);T[t]=new _(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(M,K);T[t]=new _(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){T[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)})),T.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){T[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)}));var R=/["'&<>]/;function L(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=R.exec(e);if(t){var n,r="",a=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}a!==n&&(r+=e.substring(a,n)),a=n+1,r+=t}e=a!==n?r+e.substring(a,n):r}return e}function z(e,t){var n,r=T.hasOwnProperty(e)?T[e]:null;return(n="style"!==e)&&(n=null!==r?0===r.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])),n||function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(e,t,r,!1)?"":null!==r?(e=r.attributeName,3===(n=r.type)||4===n&&!0===t?e+'=""':(r.sanitizeURL&&(t=""+t),e+'="'+L(t)+'"')):P(e)?e+'="'+L(t)+'"':""}var V="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},q=null,W=null,U=null,H=!1,Q=!1,Z=null,$=0;function B(){if(null===q)throw Error(o(321));return q}function G(){if(0<$)throw Error(o(312));return{memoizedState:null,queue:null,next:null}}function X(){return null===U?null===W?(H=!1,W=U=G()):(H=!0,U=W):null===U.next?(H=!1,U=U.next=G()):(H=!0,U=U.next),U}function Y(e,t,n,r){for(;Q;)Q=!1,$+=1,U=null,n=e(t,r);return J(),n}function J(){q=null,Q=!1,W=null,$=0,U=Z=null}function ee(e,t){return"function"==typeof t?t(e):t}function te(e,t,n){if(q=B(),U=X(),H){var r=U.queue;if(t=r.dispatch,null!==Z&&void 0!==(n=Z.get(r))){Z.delete(r),r=U.memoizedState;do{r=e(r,n.action),n=n.next}while(null!==n);return U.memoizedState=r,[r,t]}return[U.memoizedState,t]}return e=e===ee?"function"==typeof t?t():t:void 0!==n?n(t):t,U.memoizedState=e,e=(e=U.queue={last:null,dispatch:null}).dispatch=re.bind(null,q,e),[U.memoizedState,e]}function ne(e,t){if(q=B(),t=void 0===t?null:t,null!==(U=X())){var n=U.memoizedState;if(null!==n&&null!==t){var r=n[1];e:if(null===r)r=!1;else{for(var a=0;a<r.length&&a<t.length;a++)if(!V(t[a],r[a])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),U.memoizedState=[e,t],e}function re(e,t,n){if(!(25>$))throw Error(o(301));if(e===q)if(Q=!0,e={action:n,next:null},null===Z&&(Z=new Map),void 0===(n=Z.get(t)))Z.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}}function ae(){}var oe=null,ie={readContext:function(e){var t=oe.threadID;return C(e,t),e[t]},useContext:function(e){B();var t=oe.threadID;return C(e,t),e[t]},useMemo:ne,useReducer:te,useRef:function(e){q=B();var t=(U=X()).memoizedState;return null===t?(e={current:e},U.memoizedState=e):t},useState:function(e){return te(ee,e)},useLayoutEffect:function(){},useCallback:function(e,t){return ne((function(){return e}),t)},useImperativeHandle:ae,useEffect:ae,useDebugValue:ae,useDeferredValue:function(e){return B(),e},useTransition:function(){return B(),[function(e){e()},!1]},useOpaqueIdentifier:function(){return(oe.identifierPrefix||"")+"R:"+(oe.uniqueID++).toString(36)},useMutableSource:function(e,t){return B(),t(e._source)}},le="http://www.w3.org/1999/xhtml";function ce(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var ue={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},se=r({menuitem:!0},ue),fe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pe=["Webkit","ms","Moz","O"];Object.keys(fe).forEach((function(e){pe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var de=/([A-Z])/g,he=/^ms-/,me=a.Children.toArray,ye=S.ReactCurrentDispatcher,ve={listing:!0,pre:!0,textarea:!0},ge=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,be={},we={};var xe=Object.prototype.hasOwnProperty,Ee={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function ke(e,t){if(void 0===e)throw Error(o(152,k(t)||"Component"))}function Se(e,t,n){function i(a,i){var l=i.prototype&&i.prototype.isReactComponent,c=function(e,t,n,r){if(r&&("object"==typeof(r=e.contextType)&&null!==r))return C(r,n),r[n];if(e=e.contextTypes){for(var a in n={},e)n[a]=t[a];t=n}else t=O;return t}(i,t,n,l),u=[],s=!1,f={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===u)return null},enqueueReplaceState:function(e,t){s=!0,u=[t]},enqueueSetState:function(e,t){if(null===u)return null;u.push(t)}};if(l){if(l=new i(a.props,c,f),"function"==typeof i.getDerivedStateFromProps){var p=i.getDerivedStateFromProps.call(null,a.props,l.state);null!=p&&(l.state=r({},l.state,p))}}else if(q={},l=i(a.props,c,f),null==(l=Y(i,a.props,l,c))||null==l.render)return void ke(e=l,i);if(l.props=a.props,l.context=c,l.updater=f,void 0===(f=l.state)&&(l.state=f=null),"function"==typeof l.UNSAFE_componentWillMount||"function"==typeof l.componentWillMount)if("function"==typeof l.componentWillMount&&"function"!=typeof i.getDerivedStateFromProps&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&"function"!=typeof i.getDerivedStateFromProps&&l.UNSAFE_componentWillMount(),u.length){f=u;var d=s;if(u=null,s=!1,d&&1===f.length)l.state=f[0];else{p=d?f[0]:l.state;var h=!0;for(d=d?1:0;d<f.length;d++){var m=f[d];null!=(m="function"==typeof m?m.call(l,p,a.props,c):m)&&(h?(h=!1,p=r({},p,m)):r(p,m))}l.state=p}}else u=null;if(ke(e=l.render(),i),"function"==typeof l.getChildContext&&"object"==typeof(a=i.childContextTypes)){var y=l.getChildContext();for(var v in y)if(!(v in a))throw Error(o(108,k(i)||"Unknown",v))}y&&(t=r({},t,y))}for(;a.isValidElement(e);){var l=e,c=l.type;if("function"!=typeof c)break;i(l,c)}return{child:e,context:t}}var Oe=function(){function e(e,t,n){a.isValidElement(e)?e.type!==l?e=[e]:(e=e.props.children,e=a.isValidElement(e)?[e]:me(e)):e=me(e),e={type:null,domNamespace:le,children:e,childIndex:0,context:O,footer:""};var r=N[0];if(0===r){var i=N,c=2*(r=i.length);if(!(65536>=c))throw Error(o(304));var u=new Uint16Array(c);for(u.set(i),(N=u)[0]=r+1,i=r;i<c-1;i++)N[i]=i+1;N[c-1]=0}else N[0]=N[r];this.threadID=r,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.uniqueID=0,this.identifierPrefix=n&&n.identifierPrefix||""}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;N[e]=N[0],N[0]=e}},t.pushProvider=function(e){var t=++this.contextIndex,n=e.type._context,r=this.threadID;C(n,r);var a=n[r];this.contextStack[t]=n,this.contextValueStack[t]=a,n[r]=e.props.value},t.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],n=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=n},t.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},t.read=function(e){if(this.exhausted)return null;var t=oe;oe=this;var n=ye.current;ye.current=ie;try{for(var r=[""],a=!1;r[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var i=this.threadID;N[i]=N[0],N[0]=i;break}var l=this.stack[this.stack.length-1];if(a||l.childIndex>=l.children.length){var c=l.footer;if(""!==c&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===l.type)this.currentSelectValue=null;else if(null!=l.type&&null!=l.type.type&&l.type.type.$$typeof===s)this.popProvider(l.type);else if(l.type===d){this.suspenseDepth--;var u=r.pop();if(a){a=!1;var f=l.fallbackFrame;if(!f)throw Error(o(303));this.stack.push(f),r[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}r[this.suspenseDepth]+=u}r[this.suspenseDepth]+=c}else{var p=l.children[l.childIndex++],h="";try{h+=this.render(p,l.context,l.domNamespace)}catch(e){if(null!=e&&"function"==typeof e.then)throw Error(o(294));throw e}r.length<=this.suspenseDepth&&r.push(""),r[this.suspenseDepth]+=h}}return r[0]}finally{ye.current=n,oe=t,J()}},t.render=function(e,t,n){if("string"==typeof e||"number"==typeof e)return""===(n=""+e)?"":this.makeStaticMarkup?L(n):this.previousWasTextNode?"\x3c!-- --\x3e"+L(n):(this.previousWasTextNode=!0,L(n));if(e=(t=Se(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!a.isValidElement(e)){if(null!=e&&null!=e.$$typeof){if((n=e.$$typeof)===i)throw Error(o(257));throw Error(o(258,n.toString()))}return e=me(e),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}var v=e.type;if("string"==typeof v)return this.renderDOM(e,t,n);switch(v){case x:case w:case c:case u:case h:case l:return e=me(e.props.children),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case d:throw Error(o(294));case b:throw Error(o(343))}if("object"==typeof v&&null!==v)switch(v.$$typeof){case p:q={};var E=v.render(e.props,e.ref);return E=Y(v.render,e.props,E,e.ref),E=me(E),this.stack.push({type:null,domNamespace:n,children:E,childIndex:0,context:t,footer:""}),"";case m:return e=[a.createElement(v.type,r({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case s:return n={type:e,domNamespace:n,children:v=me(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(n),"";case f:v=e.type,E=e.props;var k=this.threadID;return C(v,k),v=me(E.children(v[k])),this.stack.push({type:e,domNamespace:n,children:v,childIndex:0,context:t,footer:""}),"";case g:throw Error(o(338));case y:return v=(E=(v=e.type)._init)(v._payload),e=[a.createElement(v,r({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}throw Error(o(130,null==v?v:typeof v,""))},t.renderDOM=function(e,t,n){var i=e.type.toLowerCase();if(n===le&&ce(i),!be.hasOwnProperty(i)){if(!ge.test(i))throw Error(o(65,i));be[i]=!0}var l=e.props;if("input"===i)l=r({type:void 0},l,{defaultChecked:void 0,defaultValue:void 0,value:null!=l.value?l.value:l.defaultValue,checked:null!=l.checked?l.checked:l.defaultChecked});else if("textarea"===i){var c=l.value;if(null==c){c=l.defaultValue;var u=l.children;if(null!=u){if(null!=c)throw Error(o(92));if(Array.isArray(u)){if(!(1>=u.length))throw Error(o(93));u=u[0]}c=""+u}null==c&&(c="")}l=r({},l,{value:void 0,children:""+c})}else if("select"===i)this.currentSelectValue=null!=l.value?l.value:l.defaultValue,l=r({},l,{value:void 0});else if("option"===i){u=this.currentSelectValue;var s=function(e){if(null==e)return e;var t="";return a.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(l.children);if(null!=u){var f=null!=l.value?l.value+"":s;if(c=!1,Array.isArray(u)){for(var p=0;p<u.length;p++)if(""+u[p]===f){c=!0;break}}else c=""+u===f;l=r({selected:void 0,children:void 0},l,{selected:c,children:s})}}if(c=l){if(se[i]&&(null!=c.children||null!=c.dangerouslySetInnerHTML))throw Error(o(137,i));if(null!=c.dangerouslySetInnerHTML){if(null!=c.children)throw Error(o(60));if("object"!=typeof c.dangerouslySetInnerHTML||!("__html"in c.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=c.style&&"object"!=typeof c.style)throw Error(o(62))}c=l,u=this.makeStaticMarkup,s=1===this.stack.length,f="<"+e.type;e:if(-1===i.indexOf("-"))p="string"==typeof c.is;else switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":p=!1;break e;default:p=!0}for(x in c)if(xe.call(c,x)){var d=c[x];if(null!=d){if("style"===x){var h=void 0,m="",y="";for(h in d)if(d.hasOwnProperty(h)){var v=0===h.indexOf("--"),g=d[h];if(null!=g){if(v)var b=h;else if(b=h,we.hasOwnProperty(b))b=we[b];else{var w=b.replace(de,"-$1").toLowerCase().replace(he,"-ms-");b=we[b]=w}m+=y+b+":",y=h,m+=v=null==g||"boolean"==typeof g||""===g?"":v||"number"!=typeof g||0===g||fe.hasOwnProperty(y)&&fe[y]?(""+g).trim():g+"px",y=";"}}d=m||null}h=null,p?Ee.hasOwnProperty(x)||(h=P(h=x)&&null!=d?h+'="'+L(d)+'"':""):h=z(x,d),h&&(f+=" "+h)}}u||s&&(f+=' data-reactroot=""');var x=f;c="",ue.hasOwnProperty(i)?x+="/>":(x+=">",c="</"+e.type+">");e:{if(null!=(u=l.dangerouslySetInnerHTML)){if(null!=u.__html){u=u.__html;break e}}else if("string"==typeof(u=l.children)||"number"==typeof u){u=L(u);break e}u=null}return null!=u?(l=[],ve.hasOwnProperty(i)&&"\n"===u.charAt(0)&&(x+="\n"),x+=u):l=me(l.children),e=e.type,n=null==n||"http://www.w3.org/1999/xhtml"===n?ce(e):"http://www.w3.org/2000/svg"===n&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":n,this.stack.push({domNamespace:n,type:i,children:l,childIndex:0,context:t,footer:c}),this.previousWasTextNode=!1,x},e}();t.renderToNodeStream=function(){throw Error(o(207))},t.renderToStaticMarkup=function(e,t){e=new Oe(e,!0,t);try{return e.read(1/0)}finally{e.destroy()}},t.renderToStaticNodeStream=function(){throw Error(o(208))},t.renderToString=function(e,t){e=new Oe(e,!1,t);try{return e.read(1/0)}finally{e.destroy()}},t.version="17.0.1"},KAy6:function(e,t,n){"use strict";e.exports=n("IDhZ")},Q1xo:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return e.keys.length},a=function(e){var t=RegExp(e.searchQuery,"i");return e.keys.filter((function(e){return t.test(e.name)||t.test(e.role)}))}},gNBg:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("q1tI"),a=n.n(r),o=n("kDLi"),i=n("GQ3c"),l=n("Obii"),c=n("BVom");function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=o.LegacyForms.Input;function f(e){if(!e)return!0;try{return l.rangeUtil.intervalToSeconds(e),!0}catch(e){}return!1}var p,d,h,m=(p={},d=o.EventsWithValidation.onBlur,h=[{rule:f,errorMessage:"Not a valid duration"}],d in p?Object.defineProperty(p,d,{value:h,enumerable:!0,configurable:!0,writable:!0}):p[d]=h,p),y=function(e){var t=e.show,n=e.onClose,l=e.onKeyAdded,p=u(Object(r.useState)(""),2),d=p[0],h=p[1],y=u(Object(r.useState)(i.OrgRole.Viewer),2),v=y[0],g=y[1],b=u(Object(r.useState)(""),2),w=b[0],x=b[1];Object(r.useEffect)((function(){h(""),g(i.OrgRole.Viewer),x("")}),[t]);return a.a.createElement(c.a,{in:t},a.a.createElement("div",{className:"gf-form-inline cta-form"},a.a.createElement("button",{className:"cta-form__close btn btn-transparent",onClick:n},a.a.createElement(o.Icon,{name:"times"})),a.a.createElement("form",{className:"gf-form-group",onSubmit:function(e){e.preventDefault(),f(w)&&(l({name:d,role:v,secondsToLive:w}),n())}},a.a.createElement("h5",null,"Add API Key"),a.a.createElement("div",{className:"gf-form-inline"},a.a.createElement("div",{className:"gf-form max-width-21"},a.a.createElement("span",{className:"gf-form-label"},"Key name"),a.a.createElement(s,{type:"text",className:"gf-form-input",value:d,placeholder:"Name",onChange:function(e){h(e.currentTarget.value)}})),a.a.createElement("div",{className:"gf-form"},a.a.createElement("span",{className:"gf-form-label"},"Role"),a.a.createElement("span",{className:"gf-form-select-wrapper"},a.a.createElement("select",{className:"gf-form-input gf-size-auto",value:v,onChange:function(e){g(e.currentTarget.value)}},Object.keys(i.OrgRole).map((function(e){return a.a.createElement("option",{key:e,label:e,value:e},e)}))))),a.a.createElement("div",{className:"gf-form max-width-21"},a.a.createElement(o.InlineFormLabel,{tooltip:"The api key life duration. For example 1d if your key is going to last for one day. All the supported units are: s,m,h,d,w,M,y"},"Time to live"),a.a.createElement(s,{type:"text",className:"gf-form-input",placeholder:"1d",validationEvents:m,value:w,onChange:function(e){x(e.currentTarget.value)}})),a.a.createElement("div",{className:"gf-form"},a.a.createElement("button",{className:"btn gf-form-btn btn-primary"},"Add"))))))}},m0s0:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n("NXk7"),a=n("Gz/h");function o(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function l(e){o(i,r,a,l,c,"next",e)}function c(e){o(i,r,a,l,c,"throw",e)}l(void 0)}))}}function l(e,t,n){return function(){var o=i(regeneratorRuntime.mark((function o(i){var l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(r.c)().post("/api/auth/keys",e);case 2:l=o.sent,i(Object(a.c)("")),i(c(n)),t(l.key);case 6:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}()}function c(e){return function(){var t=i(regeneratorRuntime.mark((function t(n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(r.c)().get("/api/auth/keys?includeExpired="+e);case 2:o=t.sent,n(Object(a.a)(o));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function u(e,t){return function(){var n=i(regeneratorRuntime.mark((function n(a){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:Object(r.c)().delete("/api/auth/keys/".concat(e)).then((function(){return a(c(t))}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},pSIq:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"ApiKeysPageUnconnected",(function(){return R}));var r=n("q1tI"),a=n.n(r),o=n("KAy6"),i=n.n(o),l=n("/MKj"),c=n("0cfB"),u=n("GQ3c"),s=n("lzJ5"),f=n("Q1xo"),p=n("m0s0"),d=n("ZGyg"),h=n("qx0y"),m=n("ZFWI"),y=n("Xmxp"),v=n("QQVG"),g=n("kDLi"),b=n("Obii"),w=n("1LJY"),x=n("Gz/h"),E=n("gNBg"),k=n("AkEj"),S=n("Bu2e"),O=n("rXqu");function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=g.LegacyForms.Switch;var M={loadApiKeys:p.c,deleteApiKey:p.b,setSearchQuery:x.c,addApiKey:p.a},K=Object(l.connect)((function(e){return{navModel:Object(s.a)(e.navIndex,"apikeys"),apiKeys:Object(f.a)(e.apiKeys),searchQuery:e.apiKeys.searchQuery,apiKeysCount:Object(f.b)(e.apiKeys),hasFetched:e.apiKeys.hasFetched,timeZone:Object(w.a)(e.user)}}),M),R=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=j(this,P(t).call(this,e))).onDeleteApiKey=function(e){n.props.deleteApiKey(e.id,n.state.includeExpired)},n.onSearchQueryChange=function(e){n.props.setSearchQuery(e)},n.onIncludeExpiredChange=function(e){n.setState({hasFetched:!1,includeExpired:e.currentTarget.checked},n.fetchApiKeys)},n.onAddApiKey=function(e){var t=e.secondsToLive;try{var r=F({},e,{secondsToLive:t?b.rangeUtil.intervalToSeconds(t):null});n.props.addApiKey(r,(function(e){var t=window.location.origin+m.b.appSubUrl,n=i.a.renderToString(a.a.createElement(h.a,{apiKey:e,rootPath:t}));y.b.emit(u.CoreEvents.showModal,{templateHtml:n})}),n.state.includeExpired),n.setState((function(e){return F({},e,{isAdding:!1})}))}catch(e){console.error(e)}},n.state={includeExpired:!1,hasFetched:!1},n}var n,r,o,l,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.fetchApiKeys()}},{key:"fetchApiKeys",value:(l=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.loadApiKeys(this.state.includeExpired);case 2:case"end":return e.stop()}}),e,this)})),c=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=l.apply(e,t);function o(e){N(a,n,r,o,i,"next",e)}function i(e){N(a,n,r,o,i,"throw",e)}o(void 0)}))},function(){return c.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,n=t.hasFetched,r=t.navModel,o=t.apiKeysCount,i=t.apiKeys,l=t.searchQuery,c=t.timeZone,u=this.state.includeExpired;return n?a.a.createElement(d.a,{navModel:r},a.a.createElement(d.a.Contents,{isLoading:!1},a.a.createElement(O.a,null,(function(t){var n=t.isAdding,r=t.toggleIsAdding,s=!n&&0===o,f=o>0;return a.a.createElement(a.a.Fragment,null,s?a.a.createElement(v.a,{title:"You haven't added any API Keys yet.",buttonIcon:"key-skeleton-alt",buttonLink:"#",onClick:r,buttonTitle:"New API Key",proTip:"Remember you can provide view-only API access to other applications."}):null,f?a.a.createElement(k.a,{searchQuery:l,disabled:n,onAddClick:r,onSearchChange:e.onSearchQueryChange}):null,a.a.createElement(E.a,{show:n,onClose:r,onKeyAdded:e.onAddApiKey}),f?a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",{className:"page-heading"},"Existing Keys"),a.a.createElement(T,{label:"Show expired",checked:u,onChange:e.onIncludeExpiredChange}),a.a.createElement(S.a,{apiKeys:i,timeZone:c,onDelete:e.onDeleteApiKey})):null)})))):a.a.createElement(d.a,{navModel:r},a.a.createElement(d.a.Contents,{isLoading:!0}))}}])&&D(n.prototype,r),o&&D(n,o),t}(r.PureComponent),L=K(R);t.default=Object(c.hot)(e)(L)}.call(this,n("3UD+")(e))},qx0y:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("kDLi");t.a=function(e){return a.a.createElement("div",{className:"modal-body"},a.a.createElement("div",{className:"modal-header"},a.a.createElement("h2",{className:"modal-header-title"},a.a.createElement(o.Icon,{name:"key-skeleton-alt",size:"lg"}),a.a.createElement("span",{className:"p-l-1"},"API Key Created")),a.a.createElement("a",{className:"modal-header-close","ng-click":"dismiss();"},a.a.createElement(o.Icon,{name:"times"}))),a.a.createElement("div",{className:"modal-content"},a.a.createElement("div",{className:"gf-form-group"},a.a.createElement("div",{className:"gf-form"},a.a.createElement("span",{className:"gf-form-label"},"Key"),a.a.createElement("span",{className:"gf-form-label"},e.apiKey))),a.a.createElement("div",{className:"grafana-info-box",style:{border:0}},"You will only be able to view this key here once! It is not stored in this form. So be sure to copy it now.",a.a.createElement("br",null),a.a.createElement("br",null),"You can authenticate request using the Authorization HTTP header, example:",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("pre",{className:"small"},'curl -H "Authorization: Bearer ',e.apiKey,'" ',e.rootPath,"/api/dashboards/home"))))}},rXqu:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=function(e){var t=e.children,n=a(Object(r.useState)(!1),2),o=n[0],i=n[1],l=Object(r.useCallback)((function(){i(!o)}),[o]);return t({isAdding:o,toggleIsAdding:l})}}}]);
//# sourceMappingURL=ApiKeysPage.0cd8deb042c68e8113e4.js.map