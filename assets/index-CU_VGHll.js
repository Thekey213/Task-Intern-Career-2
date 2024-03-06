function Xv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var ot=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ch(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Th={exports:{}},Lo={},bh={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zi=Symbol.for("react.element"),Jv=Symbol.for("react.portal"),Zv=Symbol.for("react.fragment"),ey=Symbol.for("react.strict_mode"),ty=Symbol.for("react.profiler"),ny=Symbol.for("react.provider"),ry=Symbol.for("react.context"),iy=Symbol.for("react.forward_ref"),ay=Symbol.for("react.suspense"),oy=Symbol.for("react.memo"),sy=Symbol.for("react.lazy"),Xc=Symbol.iterator;function ly(e){return e===null||typeof e!="object"?null:(e=Xc&&e[Xc]||e["@@iterator"],typeof e=="function"?e:null)}var Ph={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xh=Object.assign,Oh={};function Tr(e,t,n){this.props=e,this.context=t,this.refs=Oh,this.updater=n||Ph}Tr.prototype.isReactComponent={};Tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ah(){}Ah.prototype=Tr.prototype;function Eu(e,t,n){this.props=e,this.context=t,this.refs=Oh,this.updater=n||Ph}var Su=Eu.prototype=new Ah;Su.constructor=Eu;xh(Su,Tr.prototype);Su.isPureReactComponent=!0;var Jc=Array.isArray,Rh=Object.prototype.hasOwnProperty,Iu={current:null},Nh={key:!0,ref:!0,__self:!0,__source:!0};function Lh(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Rh.call(t,r)&&!Nh.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:zi,type:e,key:a,ref:o,props:i,_owner:Iu.current}}function uy(e,t){return{$$typeof:zi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Cu(e){return typeof e=="object"&&e!==null&&e.$$typeof===zi}function cy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zc=/\/+/g;function hs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cy(""+e.key):t.toString(36)}function Oa(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case zi:case Jv:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+hs(o,0):r,Jc(i)?(n="",e!=null&&(n=e.replace(Zc,"$&/")+"/"),Oa(i,t,n,"",function(u){return u})):i!=null&&(Cu(i)&&(i=uy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Jc(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+hs(a,s);o+=Oa(a,t,n,l,i)}else if(l=ly(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+hs(a,s++),o+=Oa(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ra(e,t,n){if(e==null)return e;var r=[],i=0;return Oa(e,r,"","",function(a){return t.call(n,a,i++)}),r}function fy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Aa={transition:null},dy={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Aa,ReactCurrentOwner:Iu};j.Children={map:ra,forEach:function(e,t,n){ra(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ra(e,function(){t++}),t},toArray:function(e){return ra(e,function(t){return t})||[]},only:function(e){if(!Cu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Tr;j.Fragment=Zv;j.Profiler=ty;j.PureComponent=Eu;j.StrictMode=ey;j.Suspense=ay;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dy;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xh({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Iu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Rh.call(t,l)&&!Nh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:zi,type:e.type,key:i,ref:a,props:r,_owner:o}};j.createContext=function(e){return e={$$typeof:ry,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ny,_context:e},e.Consumer=e};j.createElement=Lh;j.createFactory=function(e){var t=Lh.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:iy,render:e}};j.isValidElement=Cu;j.lazy=function(e){return{$$typeof:sy,_payload:{_status:-1,_result:e},_init:fy}};j.memo=function(e,t){return{$$typeof:oy,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=Aa.transition;Aa.transition={};try{e()}finally{Aa.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return we.current.useCallback(e,t)};j.useContext=function(e){return we.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return we.current.useDeferredValue(e)};j.useEffect=function(e,t){return we.current.useEffect(e,t)};j.useId=function(){return we.current.useId()};j.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return we.current.useMemo(e,t)};j.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};j.useRef=function(e){return we.current.useRef(e)};j.useState=function(e){return we.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return we.current.useTransition()};j.version="18.2.0";bh.exports=j;var I=bh.exports;const on=Ch(I),hy=Xv({__proto__:null,default:on},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py=I,my=Symbol.for("react.element"),gy=Symbol.for("react.fragment"),vy=Object.prototype.hasOwnProperty,yy=py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wy={key:!0,ref:!0,__self:!0,__source:!0};function Dh(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)vy.call(t,r)&&!wy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:my,type:e,key:a,ref:o,props:i,_owner:yy.current}}Lo.Fragment=gy;Lo.jsx=Dh;Lo.jsxs=Dh;Th.exports=Lo;var _=Th.exports,rl={},Mh={exports:{}},Re={},jh={exports:{}},Uh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,N){var D=x.length;x.push(N);e:for(;0<D;){var Z=D-1>>>1,oe=x[Z];if(0<i(oe,N))x[Z]=N,x[D]=oe,D=Z;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var N=x[0],D=x.pop();if(D!==N){x[0]=D;e:for(var Z=0,oe=x.length,ta=oe>>>1;Z<ta;){var dn=2*(Z+1)-1,ds=x[dn],hn=dn+1,na=x[hn];if(0>i(ds,D))hn<oe&&0>i(na,ds)?(x[Z]=na,x[hn]=D,Z=hn):(x[Z]=ds,x[dn]=D,Z=dn);else if(hn<oe&&0>i(na,D))x[Z]=na,x[hn]=D,Z=hn;else break e}}return N}function i(x,N){var D=x.sortIndex-N.sortIndex;return D!==0?D:x.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,f=null,h=3,g=!1,v=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(x){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=x)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function y(x){if(w=!1,m(x),!v)if(n(l)!==null)v=!0,cs(E);else{var N=n(u);N!==null&&fs(y,N.startTime-x)}}function E(x,N){v=!1,w&&(w=!1,p(A),A=-1),g=!0;var D=h;try{for(m(N),f=n(l);f!==null&&(!(f.expirationTime>N)||x&&!$e());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,h=f.priorityLevel;var oe=Z(f.expirationTime<=N);N=e.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&r(l),m(N)}else r(l);f=n(l)}if(f!==null)var ta=!0;else{var dn=n(u);dn!==null&&fs(y,dn.startTime-N),ta=!1}return ta}finally{f=null,h=D,g=!1}}var C=!1,T=null,A=-1,U=5,L=-1;function $e(){return!(e.unstable_now()-L<U)}function Dr(){if(T!==null){var x=e.unstable_now();L=x;var N=!0;try{N=T(!0,x)}finally{N?Mr():(C=!1,T=null)}}else C=!1}var Mr;if(typeof d=="function")Mr=function(){d(Dr)};else if(typeof MessageChannel<"u"){var Qc=new MessageChannel,Qv=Qc.port2;Qc.port1.onmessage=Dr,Mr=function(){Qv.postMessage(null)}}else Mr=function(){k(Dr,0)};function cs(x){T=x,C||(C=!0,Mr())}function fs(x,N){A=k(function(){x(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,cs(E))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(x){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var D=h;h=N;try{return x()}finally{h=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,N){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var D=h;h=x;try{return N()}finally{h=D}},e.unstable_scheduleCallback=function(x,N,D){var Z=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Z+D:Z):D=Z,x){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=D+oe,x={id:c++,callback:N,priorityLevel:x,startTime:D,expirationTime:oe,sortIndex:-1},D>Z?(x.sortIndex=D,t(u,x),n(l)===null&&x===n(u)&&(w?(p(A),A=-1):w=!0,fs(y,D-Z))):(x.sortIndex=oe,t(l,x),v||g||(v=!0,cs(E))),x},e.unstable_shouldYield=$e,e.unstable_wrapCallback=function(x){var N=h;return function(){var D=h;h=N;try{return x.apply(this,arguments)}finally{h=D}}}})(Uh);jh.exports=Uh;var _y=jh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh=I,Ae=_y;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zh=new Set,fi={};function Un(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(fi[e]=t,e=0;e<t.length;e++)zh.add(t[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),il=Object.prototype.hasOwnProperty,ky=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ef={},tf={};function Ey(e){return il.call(tf,e)?!0:il.call(ef,e)?!1:ky.test(e)?tf[e]=!0:(ef[e]=!0,!1)}function Sy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Iy(e,t,n,r){if(t===null||typeof t>"u"||Sy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tu=/[\-:]([a-z])/g;function bu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tu,bu);fe[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tu,bu);fe[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tu,bu);fe[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pu(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Iy(t,n,i,r)&&(n=null),r||i===null?Ey(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=Fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ia=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),xu=Symbol.for("react.strict_mode"),al=Symbol.for("react.profiler"),$h=Symbol.for("react.provider"),Bh=Symbol.for("react.context"),Ou=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),sl=Symbol.for("react.suspense_list"),Au=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Vh=Symbol.for("react.offscreen"),nf=Symbol.iterator;function jr(e){return e===null||typeof e!="object"?null:(e=nf&&e[nf]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,ps;function Hr(e){if(ps===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ps=t&&t[1]||""}return`
`+ps+e}var ms=!1;function gs(e,t){if(!e||ms)return"";ms=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{ms=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hr(e):""}function Cy(e){switch(e.tag){case 5:return Hr(e.type);case 16:return Hr("Lazy");case 13:return Hr("Suspense");case 19:return Hr("SuspenseList");case 0:case 2:case 15:return e=gs(e.type,!1),e;case 11:return e=gs(e.type.render,!1),e;case 1:return e=gs(e.type,!0),e;default:return""}}function ll(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Kn:return"Portal";case al:return"Profiler";case xu:return"StrictMode";case ol:return"Suspense";case sl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bh:return(e.displayName||"Context")+".Consumer";case $h:return(e._context.displayName||"Context")+".Provider";case Ou:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Au:return t=e.displayName||null,t!==null?t:ll(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return ll(e(t))}catch{}}return null}function Ty(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ll(t);case 8:return t===xu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function by(e){var t=Wh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function aa(e){e._valueTracker||(e._valueTracker=by(e))}function Hh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ya(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ul(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function rf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kh(e,t){t=t.checked,t!=null&&Pu(e,"checked",t,!1)}function cl(e,t){Kh(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&fl(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function af(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fl(e,t,n){(t!=="number"||Ya(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kr=Array.isArray;function lr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function of(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Kr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function Gh(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Yh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oa,qh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oa=oa||document.createElement("div"),oa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function di(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Py=["Webkit","ms","Moz","O"];Object.keys(Jr).forEach(function(e){Py.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jr[t]=Jr[e]})});function Qh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jr.hasOwnProperty(e)&&Jr[e]?(""+t).trim():t+"px"}function Xh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var xy=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pl(e,t){if(t){if(xy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function Ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vl=null,ur=null,cr=null;function lf(e){if(e=Vi(e)){if(typeof vl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Fo(t),vl(e.stateNode,e.type,t))}}function Jh(e){ur?cr?cr.push(e):cr=[e]:ur=e}function Zh(){if(ur){var e=ur,t=cr;if(cr=ur=null,lf(e),t)for(e=0;e<t.length;e++)lf(t[e])}}function ep(e,t){return e(t)}function tp(){}var vs=!1;function np(e,t,n){if(vs)return e(t,n);vs=!0;try{return ep(e,t,n)}finally{vs=!1,(ur!==null||cr!==null)&&(tp(),Zh())}}function hi(e,t){var n=e.stateNode;if(n===null)return null;var r=Fo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var yl=!1;if(gt)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){yl=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{yl=!1}function Oy(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Zr=!1,qa=null,Qa=!1,wl=null,Ay={onError:function(e){Zr=!0,qa=e}};function Ry(e,t,n,r,i,a,o,s,l){Zr=!1,qa=null,Oy.apply(Ay,arguments)}function Ny(e,t,n,r,i,a,o,s,l){if(Ry.apply(this,arguments),Zr){if(Zr){var u=qa;Zr=!1,qa=null}else throw Error(S(198));Qa||(Qa=!0,wl=u)}}function Fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uf(e){if(Fn(e)!==e)throw Error(S(188))}function Ly(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return uf(i),e;if(a===r)return uf(i),t;a=a.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function ip(e){return e=Ly(e),e!==null?ap(e):null}function ap(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ap(e);if(t!==null)return t;e=e.sibling}return null}var op=Ae.unstable_scheduleCallback,cf=Ae.unstable_cancelCallback,Dy=Ae.unstable_shouldYield,My=Ae.unstable_requestPaint,ee=Ae.unstable_now,jy=Ae.unstable_getCurrentPriorityLevel,Nu=Ae.unstable_ImmediatePriority,sp=Ae.unstable_UserBlockingPriority,Xa=Ae.unstable_NormalPriority,Uy=Ae.unstable_LowPriority,lp=Ae.unstable_IdlePriority,Do=null,tt=null;function Fy(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Do,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:By,zy=Math.log,$y=Math.LN2;function By(e){return e>>>=0,e===0?32:31-(zy(e)/$y|0)|0}var sa=64,la=4194304;function Gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ja(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Gr(s):(a&=o,a!==0&&(r=Gr(a)))}else o=n&~i,o!==0?r=Gr(o):a!==0&&(r=Gr(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ge(t),i=1<<n,r|=e[n],t&=~i;return r}function Vy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ge(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=Vy(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function up(){var e=sa;return sa<<=1,!(sa&4194240)&&(sa=64),e}function ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $i(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=n}function Hy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ge(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Lu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function cp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fp,Du,dp,hp,pp,kl=!1,ua=[],Vt=null,Wt=null,Ht=null,pi=new Map,mi=new Map,Nt=[],Ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ff(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":pi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(t.pointerId)}}function Fr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Vi(t),t!==null&&Du(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Gy(e,t,n,r,i){switch(t){case"focusin":return Vt=Fr(Vt,e,t,n,r,i),!0;case"dragenter":return Wt=Fr(Wt,e,t,n,r,i),!0;case"mouseover":return Ht=Fr(Ht,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return pi.set(a,Fr(pi.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,mi.set(a,Fr(mi.get(a)||null,e,t,n,r,i)),!0}return!1}function mp(e){var t=vn(e.target);if(t!==null){var n=Fn(t);if(n!==null){if(t=n.tag,t===13){if(t=rp(n),t!==null){e.blockedOn=t,pp(e.priority,function(){dp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ra(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gl=r,n.target.dispatchEvent(r),gl=null}else return t=Vi(n),t!==null&&Du(t),e.blockedOn=n,!1;t.shift()}return!0}function df(e,t,n){Ra(e)&&n.delete(t)}function Yy(){kl=!1,Vt!==null&&Ra(Vt)&&(Vt=null),Wt!==null&&Ra(Wt)&&(Wt=null),Ht!==null&&Ra(Ht)&&(Ht=null),pi.forEach(df),mi.forEach(df)}function zr(e,t){e.blockedOn===t&&(e.blockedOn=null,kl||(kl=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Yy)))}function gi(e){function t(i){return zr(i,e)}if(0<ua.length){zr(ua[0],e);for(var n=1;n<ua.length;n++){var r=ua[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&zr(Vt,e),Wt!==null&&zr(Wt,e),Ht!==null&&zr(Ht,e),pi.forEach(t),mi.forEach(t),n=0;n<Nt.length;n++)r=Nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&(n=Nt[0],n.blockedOn===null);)mp(n),n.blockedOn===null&&Nt.shift()}var fr=Ct.ReactCurrentBatchConfig,Za=!0;function qy(e,t,n,r){var i=z,a=fr.transition;fr.transition=null;try{z=1,Mu(e,t,n,r)}finally{z=i,fr.transition=a}}function Qy(e,t,n,r){var i=z,a=fr.transition;fr.transition=null;try{z=4,Mu(e,t,n,r)}finally{z=i,fr.transition=a}}function Mu(e,t,n,r){if(Za){var i=El(e,t,n,r);if(i===null)Ps(e,t,r,eo,n),ff(e,r);else if(Gy(i,e,t,n,r))r.stopPropagation();else if(ff(e,r),t&4&&-1<Ky.indexOf(e)){for(;i!==null;){var a=Vi(i);if(a!==null&&fp(a),a=El(e,t,n,r),a===null&&Ps(e,t,r,eo,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ps(e,t,r,null,n)}}var eo=null;function El(e,t,n,r){if(eo=null,e=Ru(r),e=vn(e),e!==null)if(t=Fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return eo=e,null}function gp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jy()){case Nu:return 1;case sp:return 4;case Xa:case Uy:return 16;case lp:return 536870912;default:return 16}default:return 16}}var Ft=null,ju=null,Na=null;function vp(){if(Na)return Na;var e,t=ju,n=t.length,r,i="value"in Ft?Ft.value:Ft.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Na=i.slice(e,1<r?1-r:void 0)}function La(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ca(){return!0}function hf(){return!1}function Ne(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ca:hf,this.isPropagationStopped=hf,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),t}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uu=Ne(br),Bi=Q({},br,{view:0,detail:0}),Xy=Ne(Bi),ws,_s,$r,Mo=Q({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(ws=e.screenX-$r.screenX,_s=e.screenY-$r.screenY):_s=ws=0,$r=e),ws)},movementY:function(e){return"movementY"in e?e.movementY:_s}}),pf=Ne(Mo),Jy=Q({},Mo,{dataTransfer:0}),Zy=Ne(Jy),e0=Q({},Bi,{relatedTarget:0}),ks=Ne(e0),t0=Q({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),n0=Ne(t0),r0=Q({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),i0=Ne(r0),a0=Q({},br,{data:0}),mf=Ne(a0),o0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=l0[e])?!!t[e]:!1}function Fu(){return u0}var c0=Q({},Bi,{key:function(e){if(e.key){var t=o0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=La(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?s0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(e){return e.type==="keypress"?La(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?La(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),f0=Ne(c0),d0=Q({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gf=Ne(d0),h0=Q({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),p0=Ne(h0),m0=Q({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),g0=Ne(m0),v0=Q({},Mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y0=Ne(v0),w0=[9,13,27,32],zu=gt&&"CompositionEvent"in window,ei=null;gt&&"documentMode"in document&&(ei=document.documentMode);var _0=gt&&"TextEvent"in window&&!ei,yp=gt&&(!zu||ei&&8<ei&&11>=ei),vf=" ",yf=!1;function wp(e,t){switch(e){case"keyup":return w0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function k0(e,t){switch(e){case"compositionend":return _p(t);case"keypress":return t.which!==32?null:(yf=!0,vf);case"textInput":return e=t.data,e===vf&&yf?null:e;default:return null}}function E0(e,t){if(Yn)return e==="compositionend"||!zu&&wp(e,t)?(e=vp(),Na=ju=Ft=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yp&&t.locale!=="ko"?null:t.data;default:return null}}var S0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S0[e.type]:t==="textarea"}function kp(e,t,n,r){Jh(r),t=to(t,"onChange"),0<t.length&&(n=new Uu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ti=null,vi=null;function I0(e){Rp(e,0)}function jo(e){var t=Xn(e);if(Hh(t))return e}function C0(e,t){if(e==="change")return t}var Ep=!1;if(gt){var Es;if(gt){var Ss="oninput"in document;if(!Ss){var _f=document.createElement("div");_f.setAttribute("oninput","return;"),Ss=typeof _f.oninput=="function"}Es=Ss}else Es=!1;Ep=Es&&(!document.documentMode||9<document.documentMode)}function kf(){ti&&(ti.detachEvent("onpropertychange",Sp),vi=ti=null)}function Sp(e){if(e.propertyName==="value"&&jo(vi)){var t=[];kp(t,vi,e,Ru(e)),np(I0,t)}}function T0(e,t,n){e==="focusin"?(kf(),ti=t,vi=n,ti.attachEvent("onpropertychange",Sp)):e==="focusout"&&kf()}function b0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(vi)}function P0(e,t){if(e==="click")return jo(t)}function x0(e,t){if(e==="input"||e==="change")return jo(t)}function O0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:O0;function yi(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!il.call(t,i)||!qe(e[i],t[i]))return!1}return!0}function Ef(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sf(e,t){var n=Ef(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ef(n)}}function Ip(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ip(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cp(){for(var e=window,t=Ya();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ya(e.document)}return t}function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function A0(e){var t=Cp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ip(n.ownerDocument.documentElement,n)){if(r!==null&&$u(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Sf(n,a);var o=Sf(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var R0=gt&&"documentMode"in document&&11>=document.documentMode,qn=null,Sl=null,ni=null,Il=!1;function If(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Il||qn==null||qn!==Ya(r)||(r=qn,"selectionStart"in r&&$u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ni&&yi(ni,r)||(ni=r,r=to(Sl,"onSelect"),0<r.length&&(t=new Uu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qn)))}function fa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},Is={},Tp={};gt&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Uo(e){if(Is[e])return Is[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tp)return Is[e]=t[n];return e}var bp=Uo("animationend"),Pp=Uo("animationiteration"),xp=Uo("animationstart"),Op=Uo("transitionend"),Ap=new Map,Cf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){Ap.set(e,t),Un(t,[e])}for(var Cs=0;Cs<Cf.length;Cs++){var Ts=Cf[Cs],N0=Ts.toLowerCase(),L0=Ts[0].toUpperCase()+Ts.slice(1);sn(N0,"on"+L0)}sn(bp,"onAnimationEnd");sn(Pp,"onAnimationIteration");sn(xp,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(Op,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function Tf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ny(r,t,void 0,e),e.currentTarget=null}function Rp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Tf(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Tf(i,s,u),a=l}}}if(Qa)throw e=wl,Qa=!1,wl=null,e}function V(e,t){var n=t[xl];n===void 0&&(n=t[xl]=new Set);var r=e+"__bubble";n.has(r)||(Np(t,e,2,!1),n.add(r))}function bs(e,t,n){var r=0;t&&(r|=4),Np(n,e,r,t)}var da="_reactListening"+Math.random().toString(36).slice(2);function wi(e){if(!e[da]){e[da]=!0,zh.forEach(function(n){n!=="selectionchange"&&(D0.has(n)||bs(n,!1,e),bs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[da]||(t[da]=!0,bs("selectionchange",!1,t))}}function Np(e,t,n,r){switch(gp(t)){case 1:var i=qy;break;case 4:i=Qy;break;default:i=Mu}n=i.bind(null,t,n,e),i=void 0,!yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ps(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=vn(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}np(function(){var u=a,c=Ru(n),f=[];e:{var h=Ap.get(e);if(h!==void 0){var g=Uu,v=e;switch(e){case"keypress":if(La(n)===0)break e;case"keydown":case"keyup":g=f0;break;case"focusin":v="focus",g=ks;break;case"focusout":v="blur",g=ks;break;case"beforeblur":case"afterblur":g=ks;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=p0;break;case bp:case Pp:case xp:g=n0;break;case Op:g=g0;break;case"scroll":g=Xy;break;case"wheel":g=y0;break;case"copy":case"cut":case"paste":g=i0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=gf}var w=(t&4)!==0,k=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=hi(d,p),y!=null&&w.push(_i(d,y,m)))),k)break;d=d.return}0<w.length&&(h=new g(h,v,null,n,c),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==gl&&(v=n.relatedTarget||n.fromElement)&&(vn(v)||v[vt]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?vn(v):null,v!==null&&(k=Fn(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=pf,y="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=gf,y="onPointerLeave",p="onPointerEnter",d="pointer"),k=g==null?h:Xn(g),m=v==null?h:Xn(v),h=new w(y,d+"leave",g,n,c),h.target=k,h.relatedTarget=m,y=null,vn(c)===u&&(w=new w(p,d+"enter",v,n,c),w.target=m,w.relatedTarget=k,y=w),k=y,g&&v)t:{for(w=g,p=v,d=0,m=w;m;m=Wn(m))d++;for(m=0,y=p;y;y=Wn(y))m++;for(;0<d-m;)w=Wn(w),d--;for(;0<m-d;)p=Wn(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=Wn(w),p=Wn(p)}w=null}else w=null;g!==null&&bf(f,h,g,w,!1),v!==null&&k!==null&&bf(f,k,v,w,!0)}}e:{if(h=u?Xn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var E=C0;else if(wf(h))if(Ep)E=x0;else{E=b0;var C=T0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=P0);if(E&&(E=E(e,u))){kp(f,E,n,c);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&fl(h,"number",h.value)}switch(C=u?Xn(u):window,e){case"focusin":(wf(C)||C.contentEditable==="true")&&(qn=C,Sl=u,ni=null);break;case"focusout":ni=Sl=qn=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,If(f,n,c);break;case"selectionchange":if(R0)break;case"keydown":case"keyup":If(f,n,c)}var T;if(zu)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Yn?wp(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(yp&&n.locale!=="ko"&&(Yn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Yn&&(T=vp()):(Ft=c,ju="value"in Ft?Ft.value:Ft.textContent,Yn=!0)),C=to(u,A),0<C.length&&(A=new mf(A,e,null,n,c),f.push({event:A,listeners:C}),T?A.data=T:(T=_p(n),T!==null&&(A.data=T)))),(T=_0?k0(e,n):E0(e,n))&&(u=to(u,"onBeforeInput"),0<u.length&&(c=new mf("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}Rp(f,t)})}function _i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function to(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=hi(e,n),a!=null&&r.unshift(_i(e,a,i)),a=hi(e,t),a!=null&&r.push(_i(e,a,i))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=hi(n,a),l!=null&&o.unshift(_i(n,l,s))):i||(l=hi(n,a),l!=null&&o.push(_i(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var M0=/\r\n?/g,j0=/\u0000|\uFFFD/g;function Pf(e){return(typeof e=="string"?e:""+e).replace(M0,`
`).replace(j0,"")}function ha(e,t,n){if(t=Pf(t),Pf(e)!==t&&n)throw Error(S(425))}function no(){}var Cl=null,Tl=null;function bl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,U0=typeof clearTimeout=="function"?clearTimeout:void 0,xf=typeof Promise=="function"?Promise:void 0,F0=typeof queueMicrotask=="function"?queueMicrotask:typeof xf<"u"?function(e){return xf.resolve(null).then(e).catch(z0)}:Pl;function z0(e){setTimeout(function(){throw e})}function xs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),gi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);gi(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Of(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pr=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Pr,ki="__reactProps$"+Pr,vt="__reactContainer$"+Pr,xl="__reactEvents$"+Pr,$0="__reactListeners$"+Pr,B0="__reactHandles$"+Pr;function vn(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Of(e);e!==null;){if(n=e[Ze])return n;e=Of(e)}return t}e=n,n=e.parentNode}return null}function Vi(e){return e=e[Ze]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Fo(e){return e[ki]||null}var Ol=[],Jn=-1;function ln(e){return{current:e}}function H(e){0>Jn||(e.current=Ol[Jn],Ol[Jn]=null,Jn--)}function B(e,t){Jn++,Ol[Jn]=e.current,e.current=t}var tn={},me=ln(tn),Se=ln(!1),Tn=tn;function yr(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ie(e){return e=e.childContextTypes,e!=null}function ro(){H(Se),H(me)}function Af(e,t,n){if(me.current!==tn)throw Error(S(168));B(me,t),B(Se,n)}function Lp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Ty(e)||"Unknown",i));return Q({},n,r)}function io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,Tn=me.current,B(me,e),B(Se,Se.current),!0}function Rf(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Lp(e,t,Tn),r.__reactInternalMemoizedMergedChildContext=e,H(Se),H(me),B(me,e)):H(Se),B(Se,n)}var ct=null,zo=!1,Os=!1;function Dp(e){ct===null?ct=[e]:ct.push(e)}function V0(e){zo=!0,Dp(e)}function un(){if(!Os&&ct!==null){Os=!0;var e=0,t=z;try{var n=ct;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,zo=!1}catch(i){throw ct!==null&&(ct=ct.slice(e+1)),op(Nu,un),i}finally{z=t,Os=!1}}return null}var Zn=[],er=0,ao=null,oo=0,De=[],Me=0,bn=null,ft=1,dt="";function pn(e,t){Zn[er++]=oo,Zn[er++]=ao,ao=e,oo=t}function Mp(e,t,n){De[Me++]=ft,De[Me++]=dt,De[Me++]=bn,bn=e;var r=ft;e=dt;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ft=1<<32-Ge(t)+i|n<<i|r,dt=a+e}else ft=1<<a|n<<i|r,dt=e}function Bu(e){e.return!==null&&(pn(e,1),Mp(e,1,0))}function Vu(e){for(;e===ao;)ao=Zn[--er],Zn[er]=null,oo=Zn[--er],Zn[er]=null;for(;e===bn;)bn=De[--Me],De[Me]=null,dt=De[--Me],De[Me]=null,ft=De[--Me],De[Me]=null}var xe=null,Pe=null,G=!1,He=null;function jp(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,Pe=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bn!==null?{id:ft,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,Pe=null,!0):!1;default:return!1}}function Al(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(G){var t=Pe;if(t){var n=t;if(!Nf(e,t)){if(Al(e))throw Error(S(418));t=Kt(n.nextSibling);var r=xe;t&&Nf(e,t)?jp(r,n):(e.flags=e.flags&-4097|2,G=!1,xe=e)}}else{if(Al(e))throw Error(S(418));e.flags=e.flags&-4097|2,G=!1,xe=e}}}function Lf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function pa(e){if(e!==xe)return!1;if(!G)return Lf(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bl(e.type,e.memoizedProps)),t&&(t=Pe)){if(Al(e))throw Up(),Error(S(418));for(;t;)jp(e,t),t=Kt(t.nextSibling)}if(Lf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=xe?Kt(e.stateNode.nextSibling):null;return!0}function Up(){for(var e=Pe;e;)e=Kt(e.nextSibling)}function wr(){Pe=xe=null,G=!1}function Wu(e){He===null?He=[e]:He.push(e)}var W0=Ct.ReactCurrentBatchConfig;function Ve(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var so=ln(null),lo=null,tr=null,Hu=null;function Ku(){Hu=tr=lo=null}function Gu(e){var t=so.current;H(so),e._currentValue=t}function Nl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dr(e,t){lo=e,Hu=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(Hu!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(lo===null)throw Error(S(308));tr=e,lo.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var yn=null;function Yu(e){yn===null?yn=[e]:yn.push(e)}function Fp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Yu(t)):(n.next=i.next,i.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,yt(e,n)}return i=r.interleaved,i===null?(t.next=t,Yu(r)):(t.next=i.next,i.next=t),r.interleaved=t,yt(e,n)}function Da(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lu(e,n)}}function Df(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function uo(e,t,n,r){var i=e.updateQueue;Rt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,c=u=l=null,s=a;do{var h=s.lane,g=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(h=t,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(g,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(g,f,h):v,h==null)break e;f=Q({},f,h);break e;case 2:Rt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else g={eventTime:g,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);xn|=o,e.lanes=o,e.memoizedState=f}}function Mf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var $p=new Fh.Component().refs;function Ll(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $o={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),i=qt(e),a=mt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Gt(e,a,i),t!==null&&(Ye(t,e,i,r),Da(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),i=qt(e),a=mt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Gt(e,a,i),t!==null&&(Ye(t,e,i,r),Da(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=qt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gt(e,i,r),t!==null&&(Ye(t,e,r,n),Da(t,e,r))}};function jf(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!yi(n,r)||!yi(i,a):!0}function Bp(e,t,n){var r=!1,i=tn,a=t.contextType;return typeof a=="object"&&a!==null?a=Fe(a):(i=Ie(t)?Tn:me.current,r=t.contextTypes,a=(r=r!=null)?yr(e,i):tn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Uf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$o.enqueueReplaceState(t,t.state,null)}function Dl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=$p,qu(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Fe(a):(a=Ie(t)?Tn:me.current,i.context=yr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ll(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&$o.enqueueReplaceState(i,i.state,null),uo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===$p&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ma(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ff(e){var t=e._init;return t(e._payload)}function Vp(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Qt(p,d),p.index=0,p.sibling=null,p}function a(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,y){return d===null||d.tag!==6?(d=js(m,p.mode,y),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,y){var E=m.type;return E===Gn?c(p,d,m.props.children,y,m.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===At&&Ff(E)===d.type)?(y=i(d,m.props),y.ref=Br(p,d,m),y.return=p,y):(y=$a(m.type,m.key,m.props,null,p.mode,y),y.ref=Br(p,d,m),y.return=p,y)}function u(p,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Us(m,p.mode,y),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,y,E){return d===null||d.tag!==7?(d=In(m,p.mode,y,E),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=js(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ia:return m=$a(d.type,d.key,d.props,null,p.mode,m),m.ref=Br(p,null,d),m.return=p,m;case Kn:return d=Us(d,p.mode,m),d.return=p,d;case At:var y=d._init;return f(p,y(d._payload),m)}if(Kr(d)||jr(d))return d=In(d,p.mode,m,null),d.return=p,d;ma(p,d)}return null}function h(p,d,m,y){var E=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(p,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ia:return m.key===E?l(p,d,m,y):null;case Kn:return m.key===E?u(p,d,m,y):null;case At:return E=m._init,h(p,d,E(m._payload),y)}if(Kr(m)||jr(m))return E!==null?null:c(p,d,m,y,null);ma(p,m)}return null}function g(p,d,m,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,s(d,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ia:return p=p.get(y.key===null?m:y.key)||null,l(d,p,y,E);case Kn:return p=p.get(y.key===null?m:y.key)||null,u(d,p,y,E);case At:var C=y._init;return g(p,d,m,C(y._payload),E)}if(Kr(y)||jr(y))return p=p.get(m)||null,c(d,p,y,E,null);ma(d,y)}return null}function v(p,d,m,y){for(var E=null,C=null,T=d,A=d=0,U=null;T!==null&&A<m.length;A++){T.index>A?(U=T,T=null):U=T.sibling;var L=h(p,T,m[A],y);if(L===null){T===null&&(T=U);break}e&&T&&L.alternate===null&&t(p,T),d=a(L,d,A),C===null?E=L:C.sibling=L,C=L,T=U}if(A===m.length)return n(p,T),G&&pn(p,A),E;if(T===null){for(;A<m.length;A++)T=f(p,m[A],y),T!==null&&(d=a(T,d,A),C===null?E=T:C.sibling=T,C=T);return G&&pn(p,A),E}for(T=r(p,T);A<m.length;A++)U=g(T,p,A,m[A],y),U!==null&&(e&&U.alternate!==null&&T.delete(U.key===null?A:U.key),d=a(U,d,A),C===null?E=U:C.sibling=U,C=U);return e&&T.forEach(function($e){return t(p,$e)}),G&&pn(p,A),E}function w(p,d,m,y){var E=jr(m);if(typeof E!="function")throw Error(S(150));if(m=E.call(m),m==null)throw Error(S(151));for(var C=E=null,T=d,A=d=0,U=null,L=m.next();T!==null&&!L.done;A++,L=m.next()){T.index>A?(U=T,T=null):U=T.sibling;var $e=h(p,T,L.value,y);if($e===null){T===null&&(T=U);break}e&&T&&$e.alternate===null&&t(p,T),d=a($e,d,A),C===null?E=$e:C.sibling=$e,C=$e,T=U}if(L.done)return n(p,T),G&&pn(p,A),E;if(T===null){for(;!L.done;A++,L=m.next())L=f(p,L.value,y),L!==null&&(d=a(L,d,A),C===null?E=L:C.sibling=L,C=L);return G&&pn(p,A),E}for(T=r(p,T);!L.done;A++,L=m.next())L=g(T,p,A,L.value,y),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?A:L.key),d=a(L,d,A),C===null?E=L:C.sibling=L,C=L);return e&&T.forEach(function(Dr){return t(p,Dr)}),G&&pn(p,A),E}function k(p,d,m,y){if(typeof m=="object"&&m!==null&&m.type===Gn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ia:e:{for(var E=m.key,C=d;C!==null;){if(C.key===E){if(E=m.type,E===Gn){if(C.tag===7){n(p,C.sibling),d=i(C,m.props.children),d.return=p,p=d;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===At&&Ff(E)===C.type){n(p,C.sibling),d=i(C,m.props),d.ref=Br(p,C,m),d.return=p,p=d;break e}n(p,C);break}else t(p,C);C=C.sibling}m.type===Gn?(d=In(m.props.children,p.mode,y,m.key),d.return=p,p=d):(y=$a(m.type,m.key,m.props,null,p.mode,y),y.ref=Br(p,d,m),y.return=p,p=y)}return o(p);case Kn:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Us(m,p.mode,y),d.return=p,p=d}return o(p);case At:return C=m._init,k(p,d,C(m._payload),y)}if(Kr(m))return v(p,d,m,y);if(jr(m))return w(p,d,m,y);ma(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=js(m,p.mode,y),d.return=p,p=d),o(p)):n(p,d)}return k}var _r=Vp(!0),Wp=Vp(!1),Wi={},nt=ln(Wi),Ei=ln(Wi),Si=ln(Wi);function wn(e){if(e===Wi)throw Error(S(174));return e}function Qu(e,t){switch(B(Si,t),B(Ei,e),B(nt,Wi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hl(t,e)}H(nt),B(nt,t)}function kr(){H(nt),H(Ei),H(Si)}function Hp(e){wn(Si.current);var t=wn(nt.current),n=hl(t,e.type);t!==n&&(B(Ei,e),B(nt,n))}function Xu(e){Ei.current===e&&(H(nt),H(Ei))}var Y=ln(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var As=[];function Ju(){for(var e=0;e<As.length;e++)As[e]._workInProgressVersionPrimary=null;As.length=0}var Ma=Ct.ReactCurrentDispatcher,Rs=Ct.ReactCurrentBatchConfig,Pn=0,q=null,re=null,se=null,fo=!1,ri=!1,Ii=0,H0=0;function de(){throw Error(S(321))}function Zu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function ec(e,t,n,r,i,a){if(Pn=a,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ma.current=e===null||e.memoizedState===null?q0:Q0,e=n(r,i),ri){a=0;do{if(ri=!1,Ii=0,25<=a)throw Error(S(301));a+=1,se=re=null,t.updateQueue=null,Ma.current=X0,e=n(r,i)}while(ri)}if(Ma.current=ho,t=re!==null&&re.next!==null,Pn=0,se=re=q=null,fo=!1,t)throw Error(S(300));return e}function tc(){var e=Ii!==0;return Ii=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?q.memoizedState=se=e:se=se.next=e,se}function ze(){if(re===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=se===null?q.memoizedState:se.next;if(t!==null)se=t,re=e;else{if(e===null)throw Error(S(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},se===null?q.memoizedState=se=e:se=se.next=e}return se}function Ci(e,t){return typeof t=="function"?t(e):t}function Ns(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((Pn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,q.lanes|=c,xn|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,qe(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,q.lanes|=a,xn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ls(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);qe(a,t.memoizedState)||(Ee=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Kp(){}function Gp(e,t){var n=q,r=ze(),i=t(),a=!qe(r.memoizedState,i);if(a&&(r.memoizedState=i,Ee=!0),r=r.queue,nc(Qp.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Ti(9,qp.bind(null,n,r,i,t),void 0,null),le===null)throw Error(S(349));Pn&30||Yp(n,t,i)}return i}function Yp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qp(e,t,n,r){t.value=n,t.getSnapshot=r,Xp(t)&&Jp(e)}function Qp(e,t,n){return n(function(){Xp(t)&&Jp(e)})}function Xp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function Jp(e){var t=yt(e,1);t!==null&&Ye(t,e,1,-1)}function zf(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:e},t.queue=e,e=e.dispatch=Y0.bind(null,q,e),[t.memoizedState,e]}function Ti(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zp(){return ze().memoizedState}function ja(e,t,n,r){var i=Je();q.flags|=e,i.memoizedState=Ti(1|t,n,void 0,r===void 0?null:r)}function Bo(e,t,n,r){var i=ze();r=r===void 0?null:r;var a=void 0;if(re!==null){var o=re.memoizedState;if(a=o.destroy,r!==null&&Zu(r,o.deps)){i.memoizedState=Ti(t,n,a,r);return}}q.flags|=e,i.memoizedState=Ti(1|t,n,a,r)}function $f(e,t){return ja(8390656,8,e,t)}function nc(e,t){return Bo(2048,8,e,t)}function em(e,t){return Bo(4,2,e,t)}function tm(e,t){return Bo(4,4,e,t)}function nm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rm(e,t,n){return n=n!=null?n.concat([e]):null,Bo(4,4,nm.bind(null,t,e),n)}function rc(){}function im(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function am(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function om(e,t,n){return Pn&21?(qe(n,t)||(n=up(),q.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function K0(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=Rs.transition;Rs.transition={};try{e(!1),t()}finally{z=n,Rs.transition=r}}function sm(){return ze().memoizedState}function G0(e,t,n){var r=qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lm(e))um(t,n);else if(n=Fp(e,t,n,r),n!==null){var i=ye();Ye(n,e,r,i),cm(n,t,r)}}function Y0(e,t,n){var r=qt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lm(e))um(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,qe(s,o)){var l=t.interleaved;l===null?(i.next=i,Yu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Fp(e,t,i,r),n!==null&&(i=ye(),Ye(n,e,r,i),cm(n,t,r))}}function lm(e){var t=e.alternate;return e===q||t!==null&&t===q}function um(e,t){ri=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lu(e,n)}}var ho={readContext:Fe,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},q0={readContext:Fe,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:$f,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ja(4194308,4,nm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ja(4194308,4,e,t)},useInsertionEffect:function(e,t){return ja(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=G0.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:zf,useDebugValue:rc,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=zf(!1),t=e[0];return e=K0.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,i=Je();if(G){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),le===null)throw Error(S(349));Pn&30||Yp(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,$f(Qp.bind(null,r,a,e),[e]),r.flags|=2048,Ti(9,qp.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Je(),t=le.identifierPrefix;if(G){var n=dt,r=ft;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ii++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=H0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Q0={readContext:Fe,useCallback:im,useContext:Fe,useEffect:nc,useImperativeHandle:rm,useInsertionEffect:em,useLayoutEffect:tm,useMemo:am,useReducer:Ns,useRef:Zp,useState:function(){return Ns(Ci)},useDebugValue:rc,useDeferredValue:function(e){var t=ze();return om(t,re.memoizedState,e)},useTransition:function(){var e=Ns(Ci)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Kp,useSyncExternalStore:Gp,useId:sm,unstable_isNewReconciler:!1},X0={readContext:Fe,useCallback:im,useContext:Fe,useEffect:nc,useImperativeHandle:rm,useInsertionEffect:em,useLayoutEffect:tm,useMemo:am,useReducer:Ls,useRef:Zp,useState:function(){return Ls(Ci)},useDebugValue:rc,useDeferredValue:function(e){var t=ze();return re===null?t.memoizedState=e:om(t,re.memoizedState,e)},useTransition:function(){var e=Ls(Ci)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Kp,useSyncExternalStore:Gp,useId:sm,unstable_isNewReconciler:!1};function Er(e,t){try{var n="",r=t;do n+=Cy(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Ds(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ml(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var J0=typeof WeakMap=="function"?WeakMap:Map;function fm(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mo||(mo=!0,Kl=r),Ml(e,t)},n}function dm(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ml(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ml(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Bf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new J0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=d1.bind(null,e,t,n),t.then(e,e))}function Vf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var Z0=Ct.ReactCurrentOwner,Ee=!1;function ve(e,t,n,r){t.child=e===null?Wp(t,null,n,r):_r(t,e.child,n,r)}function Hf(e,t,n,r,i){n=n.render;var a=t.ref;return dr(t,i),r=ec(e,t,n,r,a,i),n=tc(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(G&&n&&Bu(t),t.flags|=1,ve(e,t,r,i),t.child)}function Kf(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!fc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,hm(e,t,a,r,i)):(e=$a(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:yi,n(o,r)&&e.ref===t.ref)return wt(e,t,i)}return t.flags|=1,e=Qt(a,r),e.ref=t.ref,e.return=t,t.child=e}function hm(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(yi(a,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,wt(e,t,i)}return jl(e,t,n,r,i)}function pm(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(rr,be),be|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(rr,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,B(rr,be),be|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,B(rr,be),be|=r;return ve(e,t,i,n),t.child}function mm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jl(e,t,n,r,i){var a=Ie(n)?Tn:me.current;return a=yr(t,a),dr(t,i),n=ec(e,t,n,r,a,i),r=tc(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(G&&r&&Bu(t),t.flags|=1,ve(e,t,n,i),t.child)}function Gf(e,t,n,r,i){if(Ie(n)){var a=!0;io(t)}else a=!1;if(dr(t,i),t.stateNode===null)Ua(e,t),Bp(t,n,r),Dl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Fe(u):(u=Ie(n)?Tn:me.current,u=yr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Uf(t,o,r,u),Rt=!1;var h=t.memoizedState;o.state=h,uo(t,r,o,i),l=t.memoizedState,s!==r||h!==l||Se.current||Rt?(typeof c=="function"&&(Ll(t,n,c,r),l=t.memoizedState),(s=Rt||jf(t,n,s,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,zp(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ve(t.type,s),o.props=u,f=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fe(l):(l=Ie(n)?Tn:me.current,l=yr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||h!==l)&&Uf(t,o,r,l),Rt=!1,h=t.memoizedState,o.state=h,uo(t,r,o,i);var v=t.memoizedState;s!==f||h!==v||Se.current||Rt?(typeof g=="function"&&(Ll(t,n,g,r),v=t.memoizedState),(u=Rt||jf(t,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ul(e,t,n,r,a,i)}function Ul(e,t,n,r,i,a){mm(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Rf(t,n,!1),wt(e,t,a);r=t.stateNode,Z0.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=_r(t,e.child,null,a),t.child=_r(t,null,s,a)):ve(e,t,s,a),t.memoizedState=r.state,i&&Rf(t,n,!0),t.child}function gm(e){var t=e.stateNode;t.pendingContext?Af(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Af(e,t.context,!1),Qu(e,t.containerInfo)}function Yf(e,t,n,r,i){return wr(),Wu(i),t.flags|=256,ve(e,t,n,r),t.child}var Fl={dehydrated:null,treeContext:null,retryLane:0};function zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function vm(e,t,n){var r=t.pendingProps,i=Y.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(Y,i&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ho(o,r,0,null),e=In(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=zl(n),t.memoizedState=Fl,e):ic(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return e1(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Qt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Qt(s,a):(a=In(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?zl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Fl,r}return a=e.child,e=a.sibling,r=Qt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ic(e,t){return t=Ho({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ga(e,t,n,r){return r!==null&&Wu(r),_r(t,e.child,null,n),e=ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function e1(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Ds(Error(S(422))),ga(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Ho({mode:"visible",children:r.children},i,0,null),a=In(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&_r(t,e.child,null,o),t.child.memoizedState=zl(o),t.memoizedState=Fl,a);if(!(t.mode&1))return ga(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(S(419)),r=Ds(a,r,void 0),ga(e,t,o,r)}if(s=(o&e.childLanes)!==0,Ee||s){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,yt(e,i),Ye(r,e,i,-1))}return cc(),r=Ds(Error(S(421))),ga(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=h1.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Pe=Kt(i.nextSibling),xe=t,G=!0,He=null,e!==null&&(De[Me++]=ft,De[Me++]=dt,De[Me++]=bn,ft=e.id,dt=e.overflow,bn=t),t=ic(t,r.children),t.flags|=4096,t)}function qf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Nl(e.return,t,n)}function Ms(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function ym(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ve(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qf(e,n,t);else if(e.tag===19)qf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ms(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ms(t,!0,n,null,a);break;case"together":Ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ua(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function t1(e,t,n){switch(t.tag){case 3:gm(t),wr();break;case 5:Hp(t);break;case 1:Ie(t.type)&&io(t);break;case 4:Qu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(so,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?vm(e,t,n):(B(Y,Y.current&1),e=wt(e,t,n),e!==null?e.sibling:null);B(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ym(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,pm(e,t,n)}return wt(e,t,n)}var wm,$l,_m,km;wm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$l=function(){};_m=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wn(nt.current);var a=null;switch(n){case"input":i=ul(e,i),r=ul(e,r),a=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),a=[];break;case"textarea":i=dl(e,i),r=dl(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=no)}pl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fi.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&V("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};km=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function n1(e,t,n){var r=t.pendingProps;switch(Vu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ie(t.type)&&ro(),he(t),null;case 3:return r=t.stateNode,kr(),H(Se),H(me),Ju(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(ql(He),He=null))),$l(e,t),he(t),null;case 5:Xu(t);var i=wn(Si.current);if(n=t.type,e!==null&&t.stateNode!=null)_m(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return he(t),null}if(e=wn(nt.current),pa(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ze]=t,r[ki]=a,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Yr.length;i++)V(Yr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":rf(r,a),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},V("invalid",r);break;case"textarea":of(r,a),V("invalid",r)}pl(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&ha(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&ha(r.textContent,s,e),i=["children",""+s]):fi.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&V("scroll",r)}switch(n){case"input":aa(r),af(r,a,!0);break;case"textarea":aa(r),sf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=no)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ze]=t,e[ki]=r,wm(e,t,!1,!1),t.stateNode=e;e:{switch(o=ml(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yr.length;i++)V(Yr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":rf(e,r),i=ul(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),V("invalid",e);break;case"textarea":of(e,r),i=dl(e,r),V("invalid",e);break;default:i=r}pl(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Xh(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qh(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&di(e,l):typeof l=="number"&&di(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(fi.hasOwnProperty(a)?l!=null&&a==="onScroll"&&V("scroll",e):l!=null&&Pu(e,a,l,o))}switch(n){case"input":aa(e),af(e,r,!1);break;case"textarea":aa(e),sf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?lr(e,!!r.multiple,a,!1):r.defaultValue!=null&&lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=no)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)km(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=wn(Si.current),wn(nt.current),pa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ze]=t,(a=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:ha(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ha(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ze]=t,t.stateNode=r}return he(t),null;case 13:if(H(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Pe!==null&&t.mode&1&&!(t.flags&128))Up(),wr(),t.flags|=98560,a=!1;else if(a=pa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[Ze]=t}else wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),a=!1}else He!==null&&(ql(He),He=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ie===0&&(ie=3):cc())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return kr(),$l(e,t),e===null&&wi(t.stateNode.containerInfo),he(t),null;case 10:return Gu(t.type._context),he(t),null;case 17:return Ie(t.type)&&ro(),he(t),null;case 19:if(H(Y),a=t.memoizedState,a===null)return he(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Vr(a,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=co(e),o!==null){for(t.flags|=128,Vr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Y,Y.current&1|2),t.child}e=e.sibling}a.tail!==null&&ee()>Sr&&(t.flags|=128,r=!0,Vr(a,!1),t.lanes=4194304)}else{if(!r)if(e=co(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!G)return he(t),null}else 2*ee()-a.renderingStartTime>Sr&&n!==1073741824&&(t.flags|=128,r=!0,Vr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ee(),t.sibling=null,n=Y.current,B(Y,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return uc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function r1(e,t){switch(Vu(t),t.tag){case 1:return Ie(t.type)&&ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),H(Se),H(me),Ju(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xu(t),null;case 13:if(H(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Y),null;case 4:return kr(),null;case 10:return Gu(t.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var va=!1,pe=!1,i1=typeof WeakSet=="function"?WeakSet:Set,P=null;function nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Bl(e,t,n){try{n()}catch(r){X(e,t,r)}}var Qf=!1;function a1(e,t){if(Cl=Za,e=Cp(),$u(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(s=o),h===a&&++c===r&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tl={focusedElem:e,selectionRange:n},Za=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,k=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ve(t.type,w),k);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){X(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return v=Qf,Qf=!1,v}function ii(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Bl(t,n,a)}i=i.next}while(i!==r)}}function Vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Em(e){var t=e.alternate;t!==null&&(e.alternate=null,Em(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ze],delete t[ki],delete t[xl],delete t[$0],delete t[B0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sm(e){return e.tag===5||e.tag===3||e.tag===4}function Xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=no));else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}var ue=null,We=!1;function Pt(e,t,n){for(n=n.child;n!==null;)Im(e,t,n),n=n.sibling}function Im(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Do,n)}catch{}switch(n.tag){case 5:pe||nr(n,t);case 6:var r=ue,i=We;ue=null,Pt(e,t,n),ue=r,We=i,ue!==null&&(We?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(We?(e=ue,n=n.stateNode,e.nodeType===8?xs(e.parentNode,n):e.nodeType===1&&xs(e,n),gi(e)):xs(ue,n.stateNode));break;case 4:r=ue,i=We,ue=n.stateNode.containerInfo,We=!0,Pt(e,t,n),ue=r,We=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Bl(n,t,o),i=i.next}while(i!==r)}Pt(e,t,n);break;case 1:if(!pe&&(nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,Pt(e,t,n),pe=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function Jf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new i1),t.forEach(function(r){var i=p1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,We=!1;break e;case 3:ue=s.stateNode.containerInfo,We=!0;break e;case 4:ue=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(ue===null)throw Error(S(160));Im(a,o,i),ue=null,We=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cm(t,e),t=t.sibling}function Cm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Xe(e),r&4){try{ii(3,e,e.return),Vo(3,e)}catch(w){X(e,e.return,w)}try{ii(5,e,e.return)}catch(w){X(e,e.return,w)}}break;case 1:Be(t,e),Xe(e),r&512&&n!==null&&nr(n,n.return);break;case 5:if(Be(t,e),Xe(e),r&512&&n!==null&&nr(n,n.return),e.flags&32){var i=e.stateNode;try{di(i,"")}catch(w){X(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Kh(i,a),ml(s,o);var u=ml(s,a);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Xh(i,f):c==="dangerouslySetInnerHTML"?qh(i,f):c==="children"?di(i,f):Pu(i,c,f,u)}switch(s){case"input":cl(i,a);break;case"textarea":Gh(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?lr(i,!!a.multiple,g,!1):h!==!!a.multiple&&(a.defaultValue!=null?lr(i,!!a.multiple,a.defaultValue,!0):lr(i,!!a.multiple,a.multiple?[]:"",!1))}i[ki]=a}catch(w){X(e,e.return,w)}}break;case 6:if(Be(t,e),Xe(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){X(e,e.return,w)}}break;case 3:if(Be(t,e),Xe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gi(t.containerInfo)}catch(w){X(e,e.return,w)}break;case 4:Be(t,e),Xe(e);break;case 13:Be(t,e),Xe(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(sc=ee())),r&4&&Jf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(u=pe)||c,Be(t,e),pe=u):Be(t,e),Xe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(P=e,c=e.child;c!==null;){for(f=P=c;P!==null;){switch(h=P,g=h.child,h.tag){case 0:case 11:case 14:case 15:ii(4,h,h.return);break;case 1:nr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){X(r,n,w)}}break;case 5:nr(h,h.return);break;case 22:if(h.memoizedState!==null){ed(f);continue}}g!==null?(g.return=h,P=g):ed(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Qh("display",o))}catch(w){X(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){X(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Be(t,e),Xe(e),r&4&&Jf(e);break;case 21:break;default:Be(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sm(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(di(i,""),r.flags&=-33);var a=Xf(e);Hl(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Xf(e);Wl(e,s,o);break;default:throw Error(S(161))}}catch(l){X(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function o1(e,t,n){P=e,Tm(e)}function Tm(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||va;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||pe;s=va;var u=pe;if(va=o,(pe=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?td(i):l!==null?(l.return=o,P=l):td(i);for(;a!==null;)P=a,Tm(a),a=a.sibling;P=i,va=s,pe=u}Zf(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,P=a):Zf(e)}}function Zf(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ve(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Mf(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mf(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&gi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}pe||t.flags&512&&Vl(t)}catch(h){X(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function ed(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function td(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vo(4,t)}catch(l){X(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){X(t,i,l)}}var a=t.return;try{Vl(t)}catch(l){X(t,a,l)}break;case 5:var o=t.return;try{Vl(t)}catch(l){X(t,o,l)}}}catch(l){X(t,t.return,l)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var s1=Math.ceil,po=Ct.ReactCurrentDispatcher,ac=Ct.ReactCurrentOwner,Ue=Ct.ReactCurrentBatchConfig,F=0,le=null,te=null,ce=0,be=0,rr=ln(0),ie=0,bi=null,xn=0,Wo=0,oc=0,ai=null,ke=null,sc=0,Sr=1/0,ut=null,mo=!1,Kl=null,Yt=null,ya=!1,zt=null,go=0,oi=0,Gl=null,Fa=-1,za=0;function ye(){return F&6?ee():Fa!==-1?Fa:Fa=ee()}function qt(e){return e.mode&1?F&2&&ce!==0?ce&-ce:W0.transition!==null?(za===0&&(za=up()),za):(e=z,e!==0||(e=window.event,e=e===void 0?16:gp(e.type)),e):1}function Ye(e,t,n,r){if(50<oi)throw oi=0,Gl=null,Error(S(185));$i(e,n,r),(!(F&2)||e!==le)&&(e===le&&(!(F&2)&&(Wo|=n),ie===4&&Lt(e,ce)),Ce(e,r),n===1&&F===0&&!(t.mode&1)&&(Sr=ee()+500,zo&&un()))}function Ce(e,t){var n=e.callbackNode;Wy(e,t);var r=Ja(e,e===le?ce:0);if(r===0)n!==null&&cf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cf(n),t===1)e.tag===0?V0(nd.bind(null,e)):Dp(nd.bind(null,e)),F0(function(){!(F&6)&&un()}),n=null;else{switch(cp(r)){case 1:n=Nu;break;case 4:n=sp;break;case 16:n=Xa;break;case 536870912:n=lp;break;default:n=Xa}n=Lm(n,bm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bm(e,t){if(Fa=-1,za=0,F&6)throw Error(S(327));var n=e.callbackNode;if(hr()&&e.callbackNode!==n)return null;var r=Ja(e,e===le?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vo(e,r);else{t=r;var i=F;F|=2;var a=xm();(le!==e||ce!==t)&&(ut=null,Sr=ee()+500,Sn(e,t));do try{c1();break}catch(s){Pm(e,s)}while(!0);Ku(),po.current=a,F=i,te!==null?t=0:(le=null,ce=0,t=ie)}if(t!==0){if(t===2&&(i=_l(e),i!==0&&(r=i,t=Yl(e,i))),t===1)throw n=bi,Sn(e,0),Lt(e,r),Ce(e,ee()),n;if(t===6)Lt(e,r);else{if(i=e.current.alternate,!(r&30)&&!l1(i)&&(t=vo(e,r),t===2&&(a=_l(e),a!==0&&(r=a,t=Yl(e,a))),t===1))throw n=bi,Sn(e,0),Lt(e,r),Ce(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:mn(e,ke,ut);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=sc+500-ee(),10<t)){if(Ja(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pl(mn.bind(null,e,ke,ut),t);break}mn(e,ke,ut);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ge(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*s1(r/1960))-r,10<r){e.timeoutHandle=Pl(mn.bind(null,e,ke,ut),r);break}mn(e,ke,ut);break;case 5:mn(e,ke,ut);break;default:throw Error(S(329))}}}return Ce(e,ee()),e.callbackNode===n?bm.bind(null,e):null}function Yl(e,t){var n=ai;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=vo(e,t),e!==2&&(t=ke,ke=n,t!==null&&ql(t)),e}function ql(e){ke===null?ke=e:ke.push.apply(ke,e)}function l1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!qe(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~oc,t&=~Wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ge(t),r=1<<n;e[n]=-1,t&=~r}}function nd(e){if(F&6)throw Error(S(327));hr();var t=Ja(e,0);if(!(t&1))return Ce(e,ee()),null;var n=vo(e,t);if(e.tag!==0&&n===2){var r=_l(e);r!==0&&(t=r,n=Yl(e,r))}if(n===1)throw n=bi,Sn(e,0),Lt(e,t),Ce(e,ee()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,ke,ut),Ce(e,ee()),null}function lc(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Sr=ee()+500,zo&&un())}}function On(e){zt!==null&&zt.tag===0&&!(F&6)&&hr();var t=F;F|=1;var n=Ue.transition,r=z;try{if(Ue.transition=null,z=1,e)return e()}finally{z=r,Ue.transition=n,F=t,!(F&6)&&un()}}function uc(){be=rr.current,H(rr)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,U0(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Vu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ro();break;case 3:kr(),H(Se),H(me),Ju();break;case 5:Xu(r);break;case 4:kr();break;case 13:H(Y);break;case 19:H(Y);break;case 10:Gu(r.type._context);break;case 22:case 23:uc()}n=n.return}if(le=e,te=e=Qt(e.current,null),ce=be=t,ie=0,bi=null,oc=Wo=xn=0,ke=ai=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}yn=null}return e}function Pm(e,t){do{var n=te;try{if(Ku(),Ma.current=ho,fo){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fo=!1}if(Pn=0,se=re=q=null,ri=!1,Ii=0,ac.current=null,n===null||n.return===null){ie=1,bi=t,te=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=ce,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Vf(o);if(g!==null){g.flags&=-257,Wf(g,o,s,a,t),g.mode&1&&Bf(a,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){Bf(a,u,t),cc();break e}l=Error(S(426))}}else if(G&&s.mode&1){var k=Vf(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Wf(k,o,s,a,t),Wu(Er(l,s));break e}}a=l=Er(l,s),ie!==4&&(ie=2),ai===null?ai=[a]:ai.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=fm(a,l,t);Df(a,p);break e;case 1:s=l;var d=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Yt===null||!Yt.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var y=dm(a,s,t);Df(a,y);break e}}a=a.return}while(a!==null)}Am(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function xm(){var e=po.current;return po.current=ho,e===null?ho:e}function cc(){(ie===0||ie===3||ie===2)&&(ie=4),le===null||!(xn&268435455)&&!(Wo&268435455)||Lt(le,ce)}function vo(e,t){var n=F;F|=2;var r=xm();(le!==e||ce!==t)&&(ut=null,Sn(e,t));do try{u1();break}catch(i){Pm(e,i)}while(!0);if(Ku(),F=n,po.current=r,te!==null)throw Error(S(261));return le=null,ce=0,ie}function u1(){for(;te!==null;)Om(te)}function c1(){for(;te!==null&&!Dy();)Om(te)}function Om(e){var t=Nm(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Am(e):te=t,ac.current=null}function Am(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=r1(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,te=null;return}}else if(n=n1(n,t,be),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ie===0&&(ie=5)}function mn(e,t,n){var r=z,i=Ue.transition;try{Ue.transition=null,z=1,f1(e,t,n,r)}finally{Ue.transition=i,z=r}return null}function f1(e,t,n,r){do hr();while(zt!==null);if(F&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Hy(e,a),e===le&&(te=le=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ya||(ya=!0,Lm(Xa,function(){return hr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ue.transition,Ue.transition=null;var o=z;z=1;var s=F;F|=4,ac.current=null,a1(e,n),Cm(n,e),A0(Tl),Za=!!Cl,Tl=Cl=null,e.current=n,o1(n),My(),F=s,z=o,Ue.transition=a}else e.current=n;if(ya&&(ya=!1,zt=e,go=i),a=e.pendingLanes,a===0&&(Yt=null),Fy(n.stateNode),Ce(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mo)throw mo=!1,e=Kl,Kl=null,e;return go&1&&e.tag!==0&&hr(),a=e.pendingLanes,a&1?e===Gl?oi++:(oi=0,Gl=e):oi=0,un(),null}function hr(){if(zt!==null){var e=cp(go),t=Ue.transition,n=z;try{if(Ue.transition=null,z=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,go=0,F&6)throw Error(S(331));var i=F;for(F|=4,P=e.current;P!==null;){var a=P,o=a.child;if(P.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:ii(8,c,a)}var f=c.child;if(f!==null)f.return=c,P=f;else for(;P!==null;){c=P;var h=c.sibling,g=c.return;if(Em(c),c===u){P=null;break}if(h!==null){h.return=g,P=h;break}P=g}}}var v=a.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}P=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,P=o;else e:for(;P!==null;){if(a=P,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ii(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,P=p;break e}P=a.return}}var d=e.current;for(P=d;P!==null;){o=P;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,P=m;else e:for(o=d;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Vo(9,s)}}catch(E){X(s,s.return,E)}if(s===o){P=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,P=y;break e}P=s.return}}if(F=i,un(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Do,e)}catch{}r=!0}return r}finally{z=n,Ue.transition=t}}return!1}function rd(e,t,n){t=Er(n,t),t=fm(e,t,1),e=Gt(e,t,1),t=ye(),e!==null&&($i(e,1,t),Ce(e,t))}function X(e,t,n){if(e.tag===3)rd(e,e,n);else for(;t!==null;){if(t.tag===3){rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=Er(n,e),e=dm(t,e,1),t=Gt(t,e,1),e=ye(),t!==null&&($i(t,1,e),Ce(t,e));break}}t=t.return}}function d1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ce&n)===n&&(ie===4||ie===3&&(ce&130023424)===ce&&500>ee()-sc?Sn(e,0):oc|=n),Ce(e,t)}function Rm(e,t){t===0&&(e.mode&1?(t=la,la<<=1,!(la&130023424)&&(la=4194304)):t=1);var n=ye();e=yt(e,t),e!==null&&($i(e,t,n),Ce(e,n))}function h1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rm(e,n)}function p1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Rm(e,n)}var Nm;Nm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,t1(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,G&&t.flags&1048576&&Mp(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ua(e,t),e=t.pendingProps;var i=yr(t,me.current);dr(t,n),i=ec(null,t,r,e,i,n);var a=tc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(a=!0,io(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qu(t),i.updater=$o,t.stateNode=i,i._reactInternals=t,Dl(t,r,e,n),t=Ul(null,t,r,!0,a,n)):(t.tag=0,G&&a&&Bu(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ua(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=g1(r),e=Ve(r,e),i){case 0:t=jl(null,t,r,e,n);break e;case 1:t=Gf(null,t,r,e,n);break e;case 11:t=Hf(null,t,r,e,n);break e;case 14:t=Kf(null,t,r,Ve(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),jl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),Gf(e,t,r,i,n);case 3:e:{if(gm(t),e===null)throw Error(S(387));r=t.pendingProps,a=t.memoizedState,i=a.element,zp(e,t),uo(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Er(Error(S(423)),t),t=Yf(e,t,r,n,i);break e}else if(r!==i){i=Er(Error(S(424)),t),t=Yf(e,t,r,n,i);break e}else for(Pe=Kt(t.stateNode.containerInfo.firstChild),xe=t,G=!0,He=null,n=Wp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wr(),r===i){t=wt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Hp(t),e===null&&Rl(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,bl(r,i)?o=null:a!==null&&bl(r,a)&&(t.flags|=32),mm(e,t),ve(e,t,o,n),t.child;case 6:return e===null&&Rl(t),null;case 13:return vm(e,t,n);case 4:return Qu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_r(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),Hf(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,B(so,r._currentValue),r._currentValue=o,a!==null)if(qe(a.value,o)){if(a.children===i.children&&!Se.current){t=wt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=mt(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Nl(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(S(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Nl(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,dr(t,n),i=Fe(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=Ve(r,t.pendingProps),i=Ve(r.type,i),Kf(e,t,r,i,n);case 15:return hm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),Ua(e,t),t.tag=1,Ie(r)?(e=!0,io(t)):e=!1,dr(t,n),Bp(t,r,i),Dl(t,r,i,n),Ul(null,t,r,!0,e,n);case 19:return ym(e,t,n);case 22:return pm(e,t,n)}throw Error(S(156,t.tag))};function Lm(e,t){return op(e,t)}function m1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new m1(e,t,n,r)}function fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function g1(e){if(typeof e=="function")return fc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ou)return 11;if(e===Au)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $a(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")fc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Gn:return In(n.children,i,a,t);case xu:o=8,i|=8;break;case al:return e=je(12,n,t,i|2),e.elementType=al,e.lanes=a,e;case ol:return e=je(13,n,t,i),e.elementType=ol,e.lanes=a,e;case sl:return e=je(19,n,t,i),e.elementType=sl,e.lanes=a,e;case Vh:return Ho(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $h:o=10;break e;case Bh:o=9;break e;case Ou:o=11;break e;case Au:o=14;break e;case At:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=je(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function In(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Ho(e,t,n,r){return e=je(22,e,r,t),e.elementType=Vh,e.lanes=n,e.stateNode={isHidden:!1},e}function js(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function Us(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function v1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ys(0),this.expirationTimes=ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dc(e,t,n,r,i,a,o,s,l){return e=new v1(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=je(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qu(a),e}function y1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dm(e){if(!e)return tn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Lp(e,n,t)}return t}function Mm(e,t,n,r,i,a,o,s,l){return e=dc(n,r,!0,e,i,a,o,s,l),e.context=Dm(null),n=e.current,r=ye(),i=qt(n),a=mt(r,i),a.callback=t??null,Gt(n,a,i),e.current.lanes=i,$i(e,i,r),Ce(e,r),e}function Ko(e,t,n,r){var i=t.current,a=ye(),o=qt(i);return n=Dm(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(i,t,o),e!==null&&(Ye(e,i,o,a),Da(e,i,o)),o}function yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hc(e,t){id(e,t),(e=e.alternate)&&id(e,t)}function w1(){return null}var jm=typeof reportError=="function"?reportError:function(e){console.error(e)};function pc(e){this._internalRoot=e}Go.prototype.render=pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Ko(e,t,null,null)};Go.prototype.unmount=pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){Ko(null,e,null,null)}),t[vt]=null}};function Go(e){this._internalRoot=e}Go.prototype.unstable_scheduleHydration=function(e){if(e){var t=hp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&t!==0&&t<Nt[n].priority;n++);Nt.splice(n,0,e),n===0&&mp(e)}};function mc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ad(){}function _1(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=yo(o);a.call(u)}}var o=Mm(t,r,e,0,null,!1,!1,"",ad);return e._reactRootContainer=o,e[vt]=o.current,wi(e.nodeType===8?e.parentNode:e),On(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=yo(l);s.call(u)}}var l=dc(e,0,!1,null,null,!1,!1,"",ad);return e._reactRootContainer=l,e[vt]=l.current,wi(e.nodeType===8?e.parentNode:e),On(function(){Ko(t,l,n,r)}),l}function qo(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=yo(o);s.call(l)}}Ko(t,o,e,i)}else o=_1(n,t,e,i,r);return yo(o)}fp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gr(t.pendingLanes);n!==0&&(Lu(t,n|1),Ce(t,ee()),!(F&6)&&(Sr=ee()+500,un()))}break;case 13:On(function(){var r=yt(e,1);if(r!==null){var i=ye();Ye(r,e,1,i)}}),hc(e,1)}};Du=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=ye();Ye(t,e,134217728,n)}hc(e,134217728)}};dp=function(e){if(e.tag===13){var t=qt(e),n=yt(e,t);if(n!==null){var r=ye();Ye(n,e,t,r)}hc(e,t)}};hp=function(){return z};pp=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};vl=function(e,t,n){switch(t){case"input":if(cl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Fo(r);if(!i)throw Error(S(90));Hh(r),cl(r,i)}}}break;case"textarea":Gh(e,n);break;case"select":t=n.value,t!=null&&lr(e,!!n.multiple,t,!1)}};ep=lc;tp=On;var k1={usingClientEntryPoint:!1,Events:[Vi,Xn,Fo,Jh,Zh,lc]},Wr={findFiberByHostInstance:vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},E1={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ip(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||w1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wa.isDisabled&&wa.supportsFiber)try{Do=wa.inject(E1),tt=wa}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k1;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(t))throw Error(S(200));return y1(e,t,null,n)};Re.createRoot=function(e,t){if(!mc(e))throw Error(S(299));var n=!1,r="",i=jm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=dc(e,1,!1,null,null,n,!1,r,i),e[vt]=t.current,wi(e.nodeType===8?e.parentNode:e),new pc(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ip(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return On(e)};Re.hydrate=function(e,t,n){if(!Yo(t))throw Error(S(200));return qo(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!mc(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=jm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Mm(t,null,e,1,n??null,i,!1,a,o),e[vt]=t.current,wi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Go(t)};Re.render=function(e,t,n){if(!Yo(t))throw Error(S(200));return qo(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!Yo(e))throw Error(S(40));return e._reactRootContainer?(On(function(){qo(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1};Re.unstable_batchedUpdates=lc;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return qo(e,t,n,!1,r)};Re.version="18.2.0-next-9e3b772b8-20220608";function Um(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Um)}catch(e){console.error(e)}}Um(),Mh.exports=Re;var S1=Mh.exports,od=S1;rl.createRoot=od.createRoot,rl.hydrateRoot=od.hydrateRoot;var Fm={},Ir={};Object.defineProperty(Ir,"__esModule",{value:!0});Ir.cssValue=Ir.parseLengthAndUnit=void 0;var I1={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function zm(e){if(typeof e=="number")return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?t=parseFloat(n):t=parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return I1[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}Ir.parseLengthAndUnit=zm;function C1(e){var t=zm(e);return"".concat(t.value).concat(t.unit)}Ir.cssValue=C1;var Qo={};Object.defineProperty(Qo,"__esModule",{value:!0});Qo.createAnimation=void 0;var T1=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var a=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(t,`
    }
  `);return a&&a.insertRule(o,0),r};Qo.createAnimation=T1;var wo=ot&&ot.__assign||function(){return wo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},wo.apply(this,arguments)},b1=ot&&ot.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),P1=ot&&ot.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),x1=ot&&ot.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&b1(t,e,n);return P1(t,e),t},O1=ot&&ot.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(Fm,"__esModule",{value:!0});var Fs=x1(I),zs=Ir,$m=Qo,A1=(0,$m.createAnimation)("DotLoader","100% {transform: rotate(360deg)}","rotate"),R1=(0,$m.createAnimation)("DotLoader","0%, 100% {transform: scale(0)} 50% {transform: scale(1.0)}","bounce");function N1(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?"#000000":r,a=e.speedMultiplier,o=a===void 0?1:a,s=e.cssOverride,l=s===void 0?{}:s,u=e.size,c=u===void 0?60:u,f=O1(e,["loading","color","speedMultiplier","cssOverride","size"]),h=wo({display:"inherit",position:"relative",width:(0,zs.cssValue)(c),height:(0,zs.cssValue)(c),animationFillMode:"forwards",animation:"".concat(A1," ").concat(2/o,"s 0s infinite linear")},l),g=function(v){var w=(0,zs.parseLengthAndUnit)(c),k=w.value,p=w.unit;return{position:"absolute",top:v%2?"0":"auto",bottom:v%2?"auto":"0",height:"".concat(k/2).concat(p),width:"".concat(k/2).concat(p),backgroundColor:i,borderRadius:"100%",animationFillMode:"forwards",animation:"".concat(R1," ").concat(2/o,"s ").concat(v===2?"1s":"0s"," infinite linear")}};return n?Fs.createElement("span",wo({style:h},f),Fs.createElement("span",{style:g(1)}),Fs.createElement("span",{style:g(2)})):null}var L1=Fm.default=N1;const D1=()=>_.jsxs("div",{className:"loading-screen",children:[_.jsx("h2",{children:"Loading..."}),_.jsx(L1,{color:"#C7B7CD"})]});/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pi(){return Pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pi.apply(this,arguments)}var $t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($t||($t={}));const sd="popstate";function M1(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return Ql("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_o(i)}return U1(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function j1(){return Math.random().toString(36).substr(2,8)}function ld(e,t){return{usr:e.state,key:e.key,idx:t}}function Ql(e,t,n,r){return n===void 0&&(n=null),Pi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?xr(t):t,{state:n,key:t&&t.key||r||j1()})}function _o(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function xr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function U1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=$t.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Pi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){s=$t.Pop;let k=c(),p=k==null?null:k-u;u=k,l&&l({action:s,location:w.location,delta:p})}function h(k,p){s=$t.Push;let d=Ql(w.location,k,p);n&&n(d,k),u=c()+1;let m=ld(d,u),y=w.createHref(d);try{o.pushState(m,"",y)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(y)}a&&l&&l({action:s,location:w.location,delta:1})}function g(k,p){s=$t.Replace;let d=Ql(w.location,k,p);n&&n(d,k),u=c();let m=ld(d,u),y=w.createHref(d);o.replaceState(m,"",y),a&&l&&l({action:s,location:w.location,delta:0})}function v(k){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof k=="string"?k:_o(k);return d=d.replace(/ $/,"%20"),ne(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return s},get location(){return e(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(sd,f),l=k,()=>{i.removeEventListener(sd,f),l=null}},createHref(k){return t(i,k)},createURL:v,encodeLocation(k){let p=v(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(k){return o.go(k)}};return w}var ud;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ud||(ud={}));function F1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?xr(t):t,i=gc(r.pathname||"/",n);if(i==null)return null;let a=Vm(e);z1(a);let o=null;for(let s=0;o==null&&s<a.length;++s){let l=J1(i);o=q1(a[s],l)}return o}function Vm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xt([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(ne(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Vm(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:G1(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of Wm(a.path))i(a,o,l)}),t}function Wm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=Wm(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function z1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Y1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $1=/^:[\w-]+$/,B1=3,V1=2,W1=1,H1=10,K1=-2,cd=e=>e==="*";function G1(e,t){let n=e.split("/"),r=n.length;return n.some(cd)&&(r+=K1),t&&(r+=V1),n.filter(i=>!cd(i)).reduce((i,a)=>i+($1.test(a)?B1:a===""?W1:H1),r)}function Y1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function q1(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Q1({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;a.push({params:r,pathname:Xt([i,c.pathname]),pathnameBase:nw(Xt([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Xt([i,c.pathnameBase]))}return a}function Q1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=X1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:h,isOptional:g}=c;if(h==="*"){let w=s[f]||"";o=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const v=s[f];return g&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function X1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Bm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function J1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Z1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?xr(e):e;return{pathname:n?n.startsWith("/")?n:ew(n,t):t,search:rw(r),hash:iw(i)}}function ew(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $s(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hm(e,t){let n=tw(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Km(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=xr(e):(i=Pi({},e),ne(!i.pathname||!i.pathname.includes("?"),$s("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),$s("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),$s("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}s=f>=0?t[f]:"/"}let l=Z1(i,s),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Xt=e=>e.join("/").replace(/\/\/+/g,"/"),nw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),rw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,iw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function aw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gm=["post","put","patch","delete"];new Set(Gm);const ow=["get",...Gm];new Set(ow);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xi.apply(this,arguments)}const vc=I.createContext(null),sw=I.createContext(null),zn=I.createContext(null),Xo=I.createContext(null),$n=I.createContext({outlet:null,matches:[],isDataRoute:!1}),Ym=I.createContext(null);function lw(e,t){let{relative:n}=t===void 0?{}:t;Hi()||ne(!1);let{basename:r,navigator:i}=I.useContext(zn),{hash:a,pathname:o,search:s}=Qm(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Xt([r,o])),i.createHref({pathname:l,search:s,hash:a})}function Hi(){return I.useContext(Xo)!=null}function Jo(){return Hi()||ne(!1),I.useContext(Xo).location}function qm(e){I.useContext(zn).static||I.useLayoutEffect(e)}function yc(){let{isDataRoute:e}=I.useContext($n);return e?kw():uw()}function uw(){Hi()||ne(!1);let e=I.useContext(vc),{basename:t,future:n,navigator:r}=I.useContext(zn),{matches:i}=I.useContext($n),{pathname:a}=Jo(),o=JSON.stringify(Hm(i,n.v7_relativeSplatPath)),s=I.useRef(!1);return qm(()=>{s.current=!0}),I.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=Km(u,JSON.parse(o),a,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Xt([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,o,a,e])}function Qm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=I.useContext(zn),{matches:i}=I.useContext($n),{pathname:a}=Jo(),o=JSON.stringify(Hm(i,r.v7_relativeSplatPath));return I.useMemo(()=>Km(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function cw(e,t){return fw(e,t)}function fw(e,t,n,r){Hi()||ne(!1);let{navigator:i}=I.useContext(zn),{matches:a}=I.useContext($n),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Jo(),c;if(t){var f;let k=typeof t=="string"?xr(t):t;l==="/"||(f=k.pathname)!=null&&f.startsWith(l)||ne(!1),c=k}else c=u;let h=c.pathname||"/",g=h;if(l!=="/"){let k=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(k.length).join("/")}let v=F1(e,{pathname:g}),w=gw(v&&v.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:Xt([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:Xt([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),a,n,r);return t&&w?I.createElement(Xo.Provider,{value:{location:xi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:$t.Pop}},w):w}function dw(){let e=_w(),t=aw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,null)}const hw=I.createElement(dw,null);class pw extends I.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?I.createElement($n.Provider,{value:this.props.routeContext},I.createElement(Ym.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mw(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(vc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement($n.Provider,{value:t},r)}function gw(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let c=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id]));c>=0||ne(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:h,errors:g}=n,v=f.route.loader&&h[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,h)=>{let g,v=!1,w=null,k=null;n&&(g=s&&f.route.id?s[f.route.id]:void 0,w=f.route.errorElement||hw,l&&(u<0&&h===0?(Ew("route-fallback",!1),v=!0,k=null):u===h&&(v=!0,k=f.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,h+1)),d=()=>{let m;return g?m=w:v?m=k:f.route.Component?m=I.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=c,I.createElement(mw,{match:f,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?I.createElement(pw,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var Xm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Xm||{}),ko=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ko||{});function vw(e){let t=I.useContext(vc);return t||ne(!1),t}function yw(e){let t=I.useContext(sw);return t||ne(!1),t}function ww(e){let t=I.useContext($n);return t||ne(!1),t}function Jm(e){let t=ww(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function _w(){var e;let t=I.useContext(Ym),n=yw(ko.UseRouteError),r=Jm(ko.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function kw(){let{router:e}=vw(Xm.UseNavigateStable),t=Jm(ko.UseNavigateStable),n=I.useRef(!1);return qm(()=>{n.current=!0}),I.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,xi({fromRouteId:t},a)))},[e,t])}const fd={};function Ew(e,t,n){!t&&!fd[e]&&(fd[e]=!0)}function Hn(e){ne(!1)}function Sw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=$t.Pop,navigator:a,static:o=!1,future:s}=e;Hi()&&ne(!1);let l=t.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:l,navigator:a,static:o,future:xi({v7_relativeSplatPath:!1},s)}),[l,s,a,o]);typeof r=="string"&&(r=xr(r));let{pathname:c="/",search:f="",hash:h="",state:g=null,key:v="default"}=r,w=I.useMemo(()=>{let k=gc(c,l);return k==null?null:{location:{pathname:k,search:f,hash:h,state:g,key:v},navigationType:i}},[l,c,f,h,g,v,i]);return w==null?null:I.createElement(zn.Provider,{value:u},I.createElement(Xo.Provider,{children:n,value:w}))}function Iw(e){let{children:t,location:n}=e;return cw(Xl(t),n)}new Promise(()=>{});function Xl(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;let a=[...t,i];if(r.type===I.Fragment){n.push.apply(n,Xl(r.props.children,a));return}r.type!==Hn&&ne(!1),!r.props.index||!r.props.children||ne(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Xl(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jl(){return Jl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jl.apply(this,arguments)}function Cw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Tw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bw(e,t){return e.button===0&&(!t||t==="_self")&&!Tw(e)}const Pw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],xw="6";try{window.__reactRouterVersion=xw}catch{}const Ow="startTransition",dd=hy[Ow];function Aw(e){let{basename:t,children:n,future:r,window:i}=e,a=I.useRef();a.current==null&&(a.current=M1({window:i,v5Compat:!0}));let o=a.current,[s,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=I.useCallback(f=>{u&&dd?dd(()=>l(f)):l(f)},[l,u]);return I.useLayoutEffect(()=>o.listen(c),[o,c]),I.createElement(Sw,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const Rw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Nw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Or=I.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=t,h=Cw(t,Pw),{basename:g}=I.useContext(zn),v,w=!1;if(typeof u=="string"&&Nw.test(u)&&(v=u,Rw))try{let m=new URL(window.location.href),y=u.startsWith("//")?new URL(m.protocol+u):new URL(u),E=gc(y.pathname,g);y.origin===m.origin&&E!=null?u=E+y.search+y.hash:w=!0}catch{}let k=lw(u,{relative:i}),p=Lw(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function d(m){r&&r(m),m.defaultPrevented||p(m)}return I.createElement("a",Jl({},h,{href:v||k,onClick:w||a?r:d,ref:n,target:l}))});var hd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(hd||(hd={}));var pd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pd||(pd={}));function Lw(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s}=t===void 0?{}:t,l=yc(),u=Jo(),c=Qm(e,{relative:o});return I.useCallback(f=>{if(bw(f,n)){f.preventDefault();let h=r!==void 0?r:_o(u)===_o(c);l(e,{replace:h,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s})}},[u,l,c,r,i,n,e,a,o,s])}const Dw="modulepreload",Mw=function(e){return"/Task-Intern-Career-2/"+e},md={},Zo=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=Mw(o),o in md)return;md[o]=!0;const s=o.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!r)for(let f=a.length-1;f>=0;f--){const h=a[f];if(h.href===o&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":Dw,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>t()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})},jw=on.lazy(()=>Zo(()=>import("./HomeInfo-CRGavOSP.js"),__vite__mapDeps([]))),Uw=on.lazy(()=>Zo(()=>import("./ImageTextComponent-DLEDue-x.js"),__vite__mapDeps([]))),Fw=on.lazy(()=>Zo(()=>import("./HimComponent-DN7b0TJx.js"),__vite__mapDeps([]))),zw=on.lazy(()=>Zo(()=>import("./Footer-BxnSHQ_D.js"),__vite__mapDeps([])));function $w(){return _.jsxs(_.Fragment,{children:[_.jsxs("section",{className:"hero-bg",children:[_.jsx("div",{className:"companyName",children:"MINTMADE"}),_.jsxs("div",{className:"hero-text",children:[_.jsxs("h1",{children:["Quick and hassle-",_.jsx("br",{}),"free shopping"]}),_.jsx(Or,{className:"hero-btn",to:"/shop",children:"SHOP NOW"})]})]}),_.jsxs(I.Suspense,{fallback:_.jsx("div",{children:"Loading..."}),children:[_.jsx(jw,{}),_.jsx(Uw,{}),_.jsx(Fw,{}),_.jsx(zw,{})]})]})}const Zm=I.createContext(),wc=()=>I.useContext(Zm),Bw=({children:e})=>{const[t,n]=I.useState([]),[r,i]=I.useState([]),a=l=>{if(r.find(c=>c.id===l.id)){const c=r.map(f=>f.id===l.id?{...f,quantity:f.quantity+1}:f);i(c)}else i([...r,{...l,quantity:1}])},o=l=>{i(r.filter(u=>u.id!==l))},s=(l,u)=>{i(c=>c.map(f=>f.id===l?{...f,quantity:u}:f))};return _.jsx(Zm.Provider,{value:{products:t,setProducts:n,cart:r,addToCart:a,removeCartItem:o,updateCartItemQuantity:s},children:e})},Vw=({product:e})=>{const{cart:t,addToCart:n}=wc(),r=t.find(a=>a.id===e.id),i=r?r.quantity:0;return _.jsxs("div",{className:"product",children:[_.jsx("img",{src:e.image,alt:e.name}),_.jsxs("div",{className:"product-info",children:[_.jsx("p",{children:e.description}),_.jsxs("h3",{children:["$",e.price]}),_.jsxs("button",{onClick:()=>n(e),children:["Add to Cart ",i>0&&`(${i})`]})]})]})},Ww="/Task-Intern-Career-2/assets/hoodie-BV7p9PkC.jpeg",Hw="/Task-Intern-Career-2/assets/hoodie1-ClFabXO0.jpeg",Kw="/Task-Intern-Career-2/assets/hoodie2-bam0BKKo.jpeg",Gw="/Task-Intern-Career-2/assets/hoodie3-BJkY4koq.jpeg",Yw="/Task-Intern-Career-2/assets/dress1-B03N45pm.jpeg",qw="/Task-Intern-Career-2/assets/dress2-DJnXi4V-.jpeg",Qw="/Task-Intern-Career-2/assets/dress3-DSZw9Dcs.jpeg",Xw="/Task-Intern-Career-2/assets/dress4-CBsAOO1t.jpeg",Jw="/Task-Intern-Career-2/assets/shirt1-DkUZGquZ.jpeg",Zw="/Task-Intern-Career-2/assets/shirt2-Dp8uayB-.jpeg",e_=[{id:1,name:"Hoodie",category:"hoodie",price:59.99,image:Ww,description:"Classic denim jacket for men, perfect for casual wear."},{id:2,name:"hoodie2",category:"hoodie",price:39.99,image:Hw,description:"Comfortable hooded sweatshirt for men, ideal for chilly days."},{id:3,name:"hoodie2",category:"hoodie",price:39.99,image:Kw,description:"Comfortable hooded sweatshirt for men, ideal for chilly days."},{id:4,name:"hoodie2",category:"hoodie",price:39.99,image:Gw,description:"Comfortable hooded sweatshirt for men, ideal for chilly days."},{id:5,name:"dress1",category:"dress",price:49.99,image:Yw,description:"Elegant floral print dress for women, perfect for any occasion."},{id:6,name:"dress2",category:"dress",price:49.99,image:qw,description:"Elegant floral print dress for women, perfect for any occasion."},{id:7,name:"dress3",category:"dress",price:49.99,image:Qw,description:"Elegant floral print dress for women, perfect for any occasion."},{id:8,name:"dress4",category:"dress",price:49.99,image:Xw,description:"Elegant floral print dress for women, perfect for any occasion."},{id:9,name:"shirt1",category:"pants",price:34.99,image:Jw,description:"Stylish skinny jeans for women, providing a flattering fit."},{id:10,name:"shirt1",category:"shirt",price:44.99,image:Zw,description:"Trendy plaid shirt for men, perfect for both casual and semi-formal occasions."}];function gd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gd(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Eo(e){"@babel/helpers - typeof";return Eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Eo(e)}function t_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n_(e,t,n){return t&&vd(e.prototype,t),n&&vd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _c(e,t){return i_(e)||o_(e,t)||eg(e,t)||l_()}function Ki(e){return r_(e)||a_(e)||eg(e)||s_()}function r_(e){if(Array.isArray(e))return Zl(e)}function i_(e){if(Array.isArray(e))return e}function a_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function o_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function eg(e,t){if(e){if(typeof e=="string")return Zl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zl(e,t)}}function Zl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yd=function(){},kc={},tg={},ng=null,rg={mark:yd,measure:yd};try{typeof window<"u"&&(kc=window),typeof document<"u"&&(tg=document),typeof MutationObserver<"u"&&(ng=MutationObserver),typeof performance<"u"&&(rg=performance)}catch{}var u_=kc.navigator||{},wd=u_.userAgent,_d=wd===void 0?"":wd,nn=kc,K=tg,kd=ng,_a=rg;nn.document;var Tt=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",ig=~_d.indexOf("MSIE")||~_d.indexOf("Trident/"),ka,Ea,Sa,Ia,Ca,_t="___FONT_AWESOME___",eu=16,ag="fa",og="svg-inline--fa",An="data-fa-i2svg",tu="data-fa-pseudo-element",c_="data-fa-pseudo-element-pending",Ec="data-prefix",Sc="data-icon",Ed="fontawesome-i2svg",f_="async",d_=["HTML","HEAD","STYLE","SCRIPT"],sg=function(){try{return!0}catch{return!1}}(),W="classic",J="sharp",Ic=[W,J];function Gi(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[W]}})}var Oi=Gi((ka={},ae(ka,W,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ae(ka,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ka)),Ai=Gi((Ea={},ae(Ea,W,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ae(Ea,J,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ea)),Ri=Gi((Sa={},ae(Sa,W,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ae(Sa,J,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Sa)),h_=Gi((Ia={},ae(Ia,W,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ae(Ia,J,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ia)),p_=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,lg="fa-layers-text",m_=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,g_=Gi((Ca={},ae(Ca,W,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ae(Ca,J,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ca)),ug=[1,2,3,4,5,6,7,8,9,10],v_=ug.concat([11,12,13,14,15,16,17,18,19,20]),y_=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_n={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ni=new Set;Object.keys(Ai[W]).map(Ni.add.bind(Ni));Object.keys(Ai[J]).map(Ni.add.bind(Ni));var w_=[].concat(Ic,Ki(Ni),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_n.GROUP,_n.SWAP_OPACITY,_n.PRIMARY,_n.SECONDARY]).concat(ug.map(function(e){return"".concat(e,"x")})).concat(v_.map(function(e){return"w-".concat(e)})),si=nn.FontAwesomeConfig||{};function __(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function k_(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(K&&typeof K.querySelector=="function"){var E_=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];E_.forEach(function(e){var t=_c(e,2),n=t[0],r=t[1],i=k_(__(n));i!=null&&(si[r]=i)})}var cg={styleDefault:"solid",familyDefault:"classic",cssPrefix:ag,replacementClass:og,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};si.familyPrefix&&(si.cssPrefix=si.familyPrefix);var Cr=b(b({},cg),si);Cr.autoReplaceSvg||(Cr.observeMutations=!1);var O={};Object.keys(cg).forEach(function(e){Object.defineProperty(O,e,{enumerable:!0,set:function(n){Cr[e]=n,li.forEach(function(r){return r(O)})},get:function(){return Cr[e]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(t){Cr.cssPrefix=t,li.forEach(function(n){return n(O)})},get:function(){return Cr.cssPrefix}});nn.FontAwesomeConfig=O;var li=[];function S_(e){return li.push(e),function(){li.splice(li.indexOf(e),1)}}var xt=eu,et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function I_(e){if(!(!e||!Tt)){var t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=K.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return K.head.insertBefore(t,r),e}}var C_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Li(){for(var e=12,t="";e-- >0;)t+=C_[Math.random()*62|0];return t}function Ar(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Cc(e){return e.classList?Ar(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function fg(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function T_(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(fg(e[n]),'" ')},"").trim()}function es(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Tc(e){return e.size!==et.size||e.x!==et.x||e.y!==et.y||e.rotate!==et.rotate||e.flipX||e.flipY}function b_(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function P_(e){var t=e.transform,n=e.width,r=n===void 0?eu:n,i=e.height,a=i===void 0?eu:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ig?l+="translate(".concat(t.x/xt-r/2,"em, ").concat(t.y/xt-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/xt,"em), calc(-50% + ").concat(t.y/xt,"em)) "):l+="translate(".concat(t.x/xt,"em, ").concat(t.y/xt,"em) "),l+="scale(".concat(t.size/xt*(t.flipX?-1:1),", ").concat(t.size/xt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var x_=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function dg(){var e=ag,t=og,n=O.cssPrefix,r=O.replacementClass,i=x_;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Sd=!1;function Bs(){O.autoAddCss&&!Sd&&(I_(dg()),Sd=!0)}var O_={mixout:function(){return{dom:{css:dg,insertCss:Bs}}},hooks:function(){return{beforeDOMElementCreation:function(){Bs()},beforeI2svg:function(){Bs()}}}},kt=nn||{};kt[_t]||(kt[_t]={});kt[_t].styles||(kt[_t].styles={});kt[_t].hooks||(kt[_t].hooks={});kt[_t].shims||(kt[_t].shims=[]);var Ke=kt[_t],hg=[],A_=function e(){K.removeEventListener("DOMContentLoaded",e),So=1,hg.map(function(t){return t()})},So=!1;Tt&&(So=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),So||K.addEventListener("DOMContentLoaded",A_));function R_(e){Tt&&(So?setTimeout(e,0):hg.push(e))}function Yi(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?fg(e):"<".concat(t," ").concat(T_(r),">").concat(a.map(Yi).join(""),"</").concat(t,">")}function Id(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var N_=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Vs=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?N_(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function L_(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function nu(e){var t=L_(e);return t.length===1?t[0].toString(16):null}function D_(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Cd(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function ru(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Cd(t);typeof Ke.hooks.addPack=="function"&&!i?Ke.hooks.addPack(e,Cd(t)):Ke.styles[e]=b(b({},Ke.styles[e]||{}),a),e==="fas"&&ru("fa",t)}var Ta,ba,Pa,ir=Ke.styles,M_=Ke.shims,j_=(Ta={},ae(Ta,W,Object.values(Ri[W])),ae(Ta,J,Object.values(Ri[J])),Ta),bc=null,pg={},mg={},gg={},vg={},yg={},U_=(ba={},ae(ba,W,Object.keys(Oi[W])),ae(ba,J,Object.keys(Oi[J])),ba);function F_(e){return~w_.indexOf(e)}function z_(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!F_(i)?i:null}var wg=function(){var t=function(a){return Vs(ir,function(o,s,l){return o[l]=Vs(s,a,{}),o},{})};pg=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),mg=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),yg=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in ir||O.autoFetchSvg,r=Vs(M_,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});gg=r.names,vg=r.unicodes,bc=ts(O.styleDefault,{family:O.familyDefault})};S_(function(e){bc=ts(e.styleDefault,{family:O.familyDefault})});wg();function Pc(e,t){return(pg[e]||{})[t]}function $_(e,t){return(mg[e]||{})[t]}function kn(e,t){return(yg[e]||{})[t]}function _g(e){return gg[e]||{prefix:null,iconName:null}}function B_(e){var t=vg[e],n=Pc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function rn(){return bc}var xc=function(){return{prefix:null,iconName:null,rest:[]}};function ts(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?W:n,i=Oi[r][e],a=Ai[r][e]||Ai[r][i],o=e in Ke.styles?e:null;return a||o||null}var Td=(Pa={},ae(Pa,W,Object.keys(Ri[W])),ae(Pa,J,Object.keys(Ri[J])),Pa);function ns(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ae(t,W,"".concat(O.cssPrefix,"-").concat(W)),ae(t,J,"".concat(O.cssPrefix,"-").concat(J)),t),o=null,s=W;(e.includes(a[W])||e.some(function(u){return Td[W].includes(u)}))&&(s=W),(e.includes(a[J])||e.some(function(u){return Td[J].includes(u)}))&&(s=J);var l=e.reduce(function(u,c){var f=z_(O.cssPrefix,c);if(ir[c]?(c=j_[s].includes(c)?h_[s][c]:c,o=c,u.prefix=c):U_[s].indexOf(c)>-1?(o=c,u.prefix=ts(c,{family:s})):f?u.iconName=f:c!==O.replacementClass&&c!==a[W]&&c!==a[J]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?_g(u.iconName):{},g=kn(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!ir.far&&ir.fas&&!O.autoFetchSvg&&(u.prefix="fas")}return u},xc());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(ir.fass||O.autoFetchSvg)&&(l.prefix="fass",l.iconName=kn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=rn()||"fas"),l}var V_=function(){function e(){t_(this,e),this.definitions={}}return n_(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=b(b({},n.definitions[s]||{}),o[s]),ru(s,o[s]);var l=Ri[W][s];l&&ru(l,o[s]),wg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),bd=[],ar={},pr={},W_=Object.keys(pr);function H_(e,t){var n=t.mixoutsTo;return bd=e,ar={},Object.keys(pr).forEach(function(r){W_.indexOf(r)===-1&&delete pr[r]}),bd.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Eo(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){ar[o]||(ar[o]=[]),ar[o].push(a[o])})}r.provides&&r.provides(pr)}),n}function iu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=ar[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Rn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=ar[e]||[];i.forEach(function(a){a.apply(null,n)})}function Et(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return pr[e]?pr[e].apply(null,t):void 0}function au(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||rn();if(t)return t=kn(n,t)||t,Id(kg.definitions,n,t)||Id(Ke.styles,n,t)}var kg=new V_,K_=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,Rn("noAuto")},G_={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Tt?(Rn("beforeI2svg",t),Et("pseudoElements2svg",t),Et("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,R_(function(){q_({autoReplaceSvgRoot:n}),Rn("watch",t)})}},Y_={icon:function(t){if(t===null)return null;if(Eo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:kn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ts(t[0]);return{prefix:r,iconName:kn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(O.cssPrefix,"-"))>-1||t.match(p_))){var i=ns(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||rn(),iconName:kn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=rn();return{prefix:a,iconName:kn(a,t)||t}}}},Le={noAuto:K_,config:O,dom:G_,parse:Y_,library:kg,findIconDefinition:au,toHtml:Yi},q_=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?K:n;(Object.keys(Ke.styles).length>0||O.autoFetchSvg)&&Tt&&O.autoReplaceSvg&&Le.dom.i2svg({node:r})};function rs(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Yi(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Tt){var r=K.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Q_(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Tc(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=es(b(b({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function X_(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(O.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(b({},i),{},{id:o}),children:r}]}]}function Oc(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,g=h===void 0?!1:h,v=r.found?r:n,w=v.width,k=v.height,p=i==="fak",d=[O.replacementClass,a?"".concat(O.cssPrefix,"-").concat(a):""].filter(function(U){return f.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(f.classes).join(" "),m={children:[],attributes:b(b({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(k)})},y=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/k*16*.0625,"em")}:{};g&&(m.attributes[An]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Li())},children:[l]}),delete m.attributes.title);var E=b(b({},m),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:b(b({},y),f.styles)}),C=r.found&&n.found?Et("generateAbstractMask",E)||{children:[],attributes:{}}:Et("generateAbstractIcon",E)||{children:[],attributes:{}},T=C.children,A=C.attributes;return E.children=T,E.attributes=A,s?X_(E):Q_(E)}function Pd(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=b(b(b({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[An]="");var c=b({},o.styles);Tc(i)&&(c.transform=P_({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=es(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function J_(e){var t=e.content,n=e.title,r=e.extra,i=b(b(b({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=es(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ws=Ke.styles;function ou(e){var t=e[0],n=e[1],r=e.slice(4),i=_c(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(_n.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(_n.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(_n.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Z_={found:!1,width:512,height:512};function ek(e,t){!sg&&!O.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function su(e,t){var n=t;return t==="fa"&&O.styleDefault!==null&&(t=rn()),new Promise(function(r,i){if(Et("missingIconAbstract"),n==="fa"){var a=_g(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Ws[t]&&Ws[t][e]){var o=Ws[t][e];return r(ou(o))}ek(e,t),r(b(b({},Z_),{},{icon:O.showMissingIcons&&e?Et("missingIconAbstract")||{}:{}}))})}var xd=function(){},lu=O.measurePerformance&&_a&&_a.mark&&_a.measure?_a:{mark:xd,measure:xd},qr='FA "6.5.1"',tk=function(t){return lu.mark("".concat(qr," ").concat(t," begins")),function(){return Eg(t)}},Eg=function(t){lu.mark("".concat(qr," ").concat(t," ends")),lu.measure("".concat(qr," ").concat(t),"".concat(qr," ").concat(t," begins"),"".concat(qr," ").concat(t," ends"))},Ac={begin:tk,end:Eg},Ba=function(){};function Od(e){var t=e.getAttribute?e.getAttribute(An):null;return typeof t=="string"}function nk(e){var t=e.getAttribute?e.getAttribute(Ec):null,n=e.getAttribute?e.getAttribute(Sc):null;return t&&n}function rk(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(O.replacementClass)}function ik(){if(O.autoReplaceSvg===!0)return Va.replace;var e=Va[O.autoReplaceSvg];return e||Va.replace}function ak(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function ok(e){return K.createElement(e)}function Sg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ak:ok:n;if(typeof e=="string")return K.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Sg(o,{ceFn:r}))}),i}function sk(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Va={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Sg(i),n)}),n.getAttribute(An)===null&&O.keepOriginalSource){var r=K.createComment(sk(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Cc(n).indexOf(O.replacementClass))return Va.replace(t);var i=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===O.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Yi(s)}).join(`
`);n.setAttribute(An,""),n.innerHTML=o}};function Ad(e){e()}function Ig(e,t){var n=typeof t=="function"?t:Ba;if(e.length===0)n();else{var r=Ad;O.mutateApproach===f_&&(r=nn.requestAnimationFrame||Ad),r(function(){var i=ik(),a=Ac.begin("mutate");e.map(i),a(),n()})}}var Rc=!1;function Cg(){Rc=!0}function uu(){Rc=!1}var Io=null;function Rd(e){if(kd&&O.observeMutations){var t=e.treeCallback,n=t===void 0?Ba:t,r=e.nodeCallback,i=r===void 0?Ba:r,a=e.pseudoElementsCallback,o=a===void 0?Ba:a,s=e.observeMutationsRoot,l=s===void 0?K:s;Io=new kd(function(u){if(!Rc){var c=rn();Ar(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Od(f.addedNodes[0])&&(O.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&O.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Od(f.target)&&~y_.indexOf(f.attributeName))if(f.attributeName==="class"&&nk(f.target)){var h=ns(Cc(f.target)),g=h.prefix,v=h.iconName;f.target.setAttribute(Ec,g||c),v&&f.target.setAttribute(Sc,v)}else rk(f.target)&&i(f.target)})}}),Tt&&Io.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function lk(){Io&&Io.disconnect()}function uk(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ck(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=ns(Cc(e));return i.prefix||(i.prefix=rn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=$_(i.prefix,e.innerText)||Pc(i.prefix,nu(e.innerText))),!i.iconName&&O.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function fk(e){var t=Ar(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return O.autoA11y&&(n?t["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||Li()):(t["aria-hidden"]="true",t.focusable="false")),t}function dk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Nd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ck(e),r=n.iconName,i=n.prefix,a=n.rest,o=fk(e),s=iu("parseNodeAttributes",{},e),l=t.styleParser?uk(e):[];return b({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var hk=Ke.styles;function Tg(e){var t=O.autoReplaceSvg==="nest"?Nd(e,{styleParser:!1}):Nd(e);return~t.extra.classes.indexOf(lg)?Et("generateLayersText",e,t):Et("generateSvgReplacementMutation",e,t)}var an=new Set;Ic.map(function(e){an.add("fa-".concat(e))});Object.keys(Oi[W]).map(an.add.bind(an));Object.keys(Oi[J]).map(an.add.bind(an));an=Ki(an);function Ld(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Tt)return Promise.resolve();var n=K.documentElement.classList,r=function(f){return n.add("".concat(Ed,"-").concat(f))},i=function(f){return n.remove("".concat(Ed,"-").concat(f))},a=O.autoFetchSvg?an:Ic.map(function(c){return"fa-".concat(c)}).concat(Object.keys(hk));a.includes("fa")||a.push("fa");var o=[".".concat(lg,":not([").concat(An,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(An,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ar(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ac.begin("onTree"),u=s.reduce(function(c,f){try{var h=Tg(f);h&&c.push(h)}catch(g){sg||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){Ig(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function pk(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Tg(e).then(function(n){n&&Ig([n],t)})}function mk(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:au(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:au(i||{})),e(r,b(b({},n),{},{mask:i}))}}var gk=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?et:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,g=n.titleId,v=g===void 0?null:g,w=n.classes,k=w===void 0?[]:w,p=n.attributes,d=p===void 0?{}:p,m=n.styles,y=m===void 0?{}:m;if(t){var E=t.prefix,C=t.iconName,T=t.icon;return rs(b({type:"icon"},t),function(){return Rn("beforeDOMElementCreation",{iconDefinition:t,params:n}),O.autoA11y&&(h?d["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(v||Li()):(d["aria-hidden"]="true",d.focusable="false")),Oc({icons:{main:ou(T),mask:l?ou(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:C,transform:b(b({},et),i),symbol:o,title:h,maskId:c,titleId:v,extra:{attributes:d,styles:y,classes:k}})})}},vk={mixout:function(){return{icon:mk(gk)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ld,n.nodeCallback=pk,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?K:r,a=n.callback,o=a===void 0?function(){}:a;return Ld(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(g,v){Promise.all([su(i,s),c.iconName?su(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var k=_c(w,2),p=k[0],d=k[1];g([n,Oc({icons:{main:p,mask:d},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:a,titleId:o,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=es(s);l.length>0&&(i.style=l);var u;return Tc(o)&&(u=Et("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},yk={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return rs({type:"layer"},function(){Rn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(Ki(a)).join(" ")},children:o}]})}}}},wk={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return rs({type:"counter",content:n},function(){return Rn("beforeDOMElementCreation",{content:n,params:r}),J_({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(Ki(s))}})})}}}},_k={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?et:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return rs({type:"text",content:n},function(){return Rn("beforeDOMElementCreation",{content:n,params:r}),Pd({content:n,transform:b(b({},et),a),title:s,extra:{attributes:f,styles:g,classes:["".concat(O.cssPrefix,"-layers-text")].concat(Ki(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(ig){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return O.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Pd({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},kk=new RegExp('"',"ug"),Dd=[1105920,1112319];function Ek(e){var t=e.replace(kk,""),n=D_(t,0),r=n>=Dd[0]&&n<=Dd[1],i=t.length===2?t[0]===t[1]:!1;return{value:nu(i?t[0]:t),isSecondary:r||i}}function Md(e,t){var n="".concat(c_).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Ar(e.children),o=a.filter(function(T){return T.getAttribute(tu)===t})[0],s=nn.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(m_),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?J:W,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ai[h][l[2].toLowerCase()]:g_[h][u],v=Ek(f),w=v.value,k=v.isSecondary,p=l[0].startsWith("FontAwesome"),d=Pc(g,w),m=d;if(p){var y=B_(w);y.iconName&&y.prefix&&(d=y.iconName,g=y.prefix)}if(d&&!k&&(!o||o.getAttribute(Ec)!==g||o.getAttribute(Sc)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var E=dk(),C=E.extra;C.attributes[tu]=t,su(d,g).then(function(T){var A=Oc(b(b({},E),{},{icons:{main:T,mask:xc()},prefix:g,iconName:m,extra:C,watchable:!0})),U=K.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(U,e.firstChild):e.appendChild(U),U.outerHTML=A.map(function(L){return Yi(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Sk(e){return Promise.all([Md(e,"::before"),Md(e,"::after")])}function Ik(e){return e.parentNode!==document.head&&!~d_.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(tu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function jd(e){if(Tt)return new Promise(function(t,n){var r=Ar(e.querySelectorAll("*")).filter(Ik).map(Sk),i=Ac.begin("searchPseudoElements");Cg(),Promise.all(r).then(function(){i(),uu(),t()}).catch(function(){i(),uu(),n()})})}var Ck={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=jd,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?K:r;O.searchPseudoElements&&jd(i)}}},Ud=!1,Tk={mixout:function(){return{dom:{unwatch:function(){Cg(),Ud=!0}}}},hooks:function(){return{bootstrap:function(){Rd(iu("mutationObserverCallbacks",{}))},noAuto:function(){lk()},watch:function(n){var r=n.observeMutationsRoot;Ud?uu():Rd(iu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Fd=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},bk={mixout:function(){return{parse:{transform:function(n){return Fd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Fd(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:f,path:h};return{tag:"g",attributes:b({},g.outer),children:[{tag:"g",attributes:b({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:b(b({},r.icon.attributes),g.path)}]}]}}}},Hs={x:0,y:0,width:"100%",height:"100%"};function zd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Pk(e){return e.tag==="g"?e.children:[e]}var xk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?ns(i.split(" ").map(function(o){return o.trim()})):xc();return a.prefix||(a.prefix=rn()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,f=o.width,h=o.icon,g=b_({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:b(b({},Hs),{},{fill:"white"})},w=c.children?{children:c.children.map(zd)}:{},k={tag:"g",attributes:b({},g.inner),children:[zd(b({tag:c.tag,attributes:b(b({},c.attributes),g.path)},w))]},p={tag:"g",attributes:b({},g.outer),children:[k]},d="mask-".concat(s||Li()),m="clip-".concat(s||Li()),y={tag:"mask",attributes:b(b({},Hs),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:Pk(h)},y]};return r.push(E,{tag:"rect",attributes:b({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},Hs)}),{children:r,attributes:i}}}},Ok={provides:function(t){var n=!1;nn.matchMedia&&(n=nn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:b(b({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=b(b({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:b(b({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:b(b({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(b({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:b(b({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:b(b({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:b(b({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(b({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ak={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Rk=[O_,vk,yk,wk,_k,Ck,Tk,bk,xk,Ok,Ak];H_(Rk,{mixoutsTo:Le});Le.noAuto;Le.config;Le.library;Le.dom;var cu=Le.parse;Le.findIconDefinition;Le.toHtml;var Nk=Le.icon;Le.layer;Le.text;Le.counter;var bg={exports:{}},Lk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Dk=Lk,Mk=Dk;function Pg(){}function xg(){}xg.resetWarningCache=Pg;var jk=function(){function e(r,i,a,o,s,l){if(l!==Mk){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:xg,resetWarningCache:Pg};return n.PropTypes=n,n};bg.exports=jk();var Uk=bg.exports;const M=Ch(Uk);function $d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$d(Object(n),!0).forEach(function(r){or(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$d(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Co(e){"@babel/helpers - typeof";return Co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Co(e)}function or(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function zk(e,t){if(e==null)return{};var n=Fk(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function fu(e){return $k(e)||Bk(e)||Vk(e)||Wk()}function $k(e){if(Array.isArray(e))return du(e)}function Bk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Vk(e,t){if(e){if(typeof e=="string")return du(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return du(e,t)}}function du(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Wk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hk(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,g=e.inverse,v=e.border,w=e.listItem,k=e.flip,p=e.size,d=e.rotation,m=e.pull,y=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":g,"fa-border":v,"fa-li":w,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},or(t,"fa-".concat(p),typeof p<"u"&&p!==null),or(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),or(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),or(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(E){return y[E]?E:null}).filter(function(E){return E})}function Kk(e){return e=e-0,e===e}function Og(e){return Kk(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Gk=["style"];function Yk(e){return e.charAt(0).toUpperCase()+e.slice(1)}function qk(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Og(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[Yk(i)]=a:t[i]=a,t},{})}function Ag(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Ag(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=qk(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Og(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=zk(n,Gk);return i.attrs.style=Bt(Bt({},i.attrs.style),o),e.apply(void 0,[t.tag,Bt(Bt({},i.attrs),s)].concat(fu(r)))}var Rg=!1;try{Rg=!0}catch{}function Qk(){if(!Rg&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Bd(e){if(e&&Co(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(cu.icon)return cu.icon(e);if(e===null)return null;if(e&&Co(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ks(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?or({},e,t):{}}var Rr=on.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,s=e.titleId,l=e.maskId,u=Bd(n),c=Ks("classes",[].concat(fu(Hk(e)),fu(a.split(" ")))),f=Ks("transform",typeof e.transform=="string"?cu.transform(e.transform):e.transform),h=Ks("mask",Bd(r)),g=Nk(u,Bt(Bt(Bt(Bt({},c),f),h),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!g)return Qk("Could not find icon",u),null;var v=g.abstract,w={ref:t};return Object.keys(e).forEach(function(k){Rr.defaultProps.hasOwnProperty(k)||(w[k]=e[k])}),Xk(v[0],w)});Rr.displayName="FontAwesomeIcon";Rr.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};Rr.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Xk=Ag.bind(null,on.createElement),Jk={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Zk=Jk,eE={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},tE=eE;const nE=()=>{const{cart:e}=wc(),t=e.reduce((n,r)=>n+r.quantity,0);return _.jsxs(Or,{style:{textDecoration:"none",fontWeight:"bold",color:"black"},to:"/cart",children:[t>0&&_.jsx("span",{children:t})," ",_.jsx("br",{}),_.jsx(Rr,{icon:Zk})]})},rE=()=>_.jsx(Or,{to:"/home",style:{textDecoration:"none",fontWeight:"bold",color:"black"},children:_.jsx(Rr,{icon:tE})}),iE=e_;function aE(){return _.jsxs(_.Fragment,{children:[_.jsx("div",{style:{textAlign:"center"},children:_.jsx("h2",{style:{color:"#49444B"},children:"Shop"})}),_.jsx("div",{className:"cart-icon",children:_.jsx(nE,{})}),_.jsx("div",{className:"home-icon",children:_.jsx(rE,{})}),_.jsx("div",{className:"product-container",children:iE.map(e=>_.jsx(Vw,{product:e},e.id))})]})}const oE=()=>{const{cart:e,removeCartItem:t,updateCartItemQuantity:n}=wc(),r=(i,a)=>{a>0?n(i,a):t(i)};return _.jsxs("div",{className:"cart-container",children:[_.jsx("div",{style:{textAlign:"center"},children:_.jsx("h2",{children:"Cart"})}),e.length===0?_.jsx("p",{children:"Your cart is empty."}):_.jsxs(_.Fragment,{children:[_.jsx("ul",{children:e.map(i=>_.jsx("li",{children:_.jsxs("div",{children:[_.jsx("img",{src:i.image,alt:i.name}),_.jsxs("div",{children:[_.jsx("p",{children:i.name}),_.jsxs("p",{children:["Price: $",i.price]}),_.jsxs("p",{children:["Quantity: ",i.quantity]}),_.jsx("button",{onClick:()=>r(i.id,i.quantity-1),children:"-"}),_.jsx("button",{onClick:()=>r(i.id,i.quantity+1),children:"+"}),_.jsx("button",{onClick:()=>t(i.id),children:"Remove"})]})]})},i.id))}),_.jsxs("div",{className:"cart-buttons",children:[_.jsx(Or,{to:"/shop",children:_.jsx("button",{className:"continue-shopping",children:"Continue Shopping"})}),_.jsx("button",{className:"checkout",children:"Checkout"})]})]})]})};var Vd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},sE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},Lg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=a>>2,f=(a&3)<<4|s>>4;let h=(s&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ng(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):sE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||u==null||f==null)throw new lE;const h=a<<2|s>>4;if(r.push(h),u!==64){const g=s<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class lE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uE=function(e){const t=Ng(e);return Lg.encodeByteArray(t,!0)},Dg=function(e){return uE(e).replace(/\./g,"")},Mg=function(e){try{return Lg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=()=>cE().__FIREBASE_DEFAULTS__,dE=()=>{if(typeof process>"u"||typeof Vd>"u")return;const e=Vd.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},hE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Mg(e[1]);return t&&JSON.parse(t)},Nc=()=>{try{return fE()||dE()||hE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},pE=e=>{var t,n;return(n=(t=Nc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},jg=()=>{var e;return(e=Nc())===null||e===void 0?void 0:e.config},Ug=e=>{var t;return(t=Nc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function Fg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function vE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yE(){const e=ge();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function zg(){try{return typeof indexedDB=="object"}catch{return!1}}function $g(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}function wE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="FirebaseError";class lt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=_E,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?kE(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new lt(i,s,r)}}function kE(e,t){return e.replace(EE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const EE=/\{\$([^}]+)}/g;function SE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Di(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(Wd(a)&&Wd(o)){if(!Di(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Qr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(a)}}),t}function Xr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function IE(e,t){const n=new CE(e,t);return n.subscribe.bind(n)}class CE{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TE(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Gs),i.error===void 0&&(i.error=Gs),i.complete===void 0&&(i.complete=Gs);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TE(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Gs(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=1e3,PE=2,xE=4*60*60*1e3,OE=.5;function Hd(e,t=bE,n=PE){const r=t*Math.pow(n,e),i=Math.round(OE*r*(Math.random()-.5)*2);return Math.min(xE,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e){return e&&e._delegate?e._delegate:e}class st{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new mE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(NE(t))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=gn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=gn){return this.instances.has(t)}getOptions(t=gn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=gn){return this.component?this.component.multipleInstances?t:gn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RE(e){return e===gn?void 0:e}function NE(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new AE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})($||($={}));const DE={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},ME=$.INFO,jE={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},UE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=jE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Lc{constructor(t){this.name=t,this._logLevel=ME,this._logHandler=UE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?DE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const FE=(e,t)=>t.some(n=>e instanceof n);let Kd,Gd;function zE(){return Kd||(Kd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $E(){return Gd||(Gd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bg=new WeakMap,hu=new WeakMap,Vg=new WeakMap,Ys=new WeakMap,Dc=new WeakMap;function BE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(Jt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Bg.set(n,e)}).catch(()=>{}),Dc.set(t,e),t}function VE(e){if(hu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});hu.set(e,t)}let pu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return hu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Vg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function WE(e){pu=e(pu)}function HE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(qs(this),t,...n);return Vg.set(r,t.sort?t.sort():[t]),Jt(r)}:$E().includes(e)?function(...t){return e.apply(qs(this),t),Jt(Bg.get(this))}:function(...t){return Jt(e.apply(qs(this),t))}}function KE(e){return typeof e=="function"?HE(e):(e instanceof IDBTransaction&&VE(e),FE(e,zE())?new Proxy(e,pu):e)}function Jt(e){if(e instanceof IDBRequest)return BE(e);if(Ys.has(e))return Ys.get(e);const t=KE(e);return t!==e&&(Ys.set(e,t),Dc.set(t,e)),t}const qs=e=>Dc.get(e);function Wg(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Jt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jt(o.result),l.oldVersion,l.newVersion,Jt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),s}const GE=["get","getKey","getAll","getAllKeys","count"],YE=["put","add","delete","clear"],Qs=new Map;function Yd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Qs.get(t))return Qs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=YE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GE.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return Qs.set(t,a),a}WE(e=>({...e,get:(t,n,r)=>Yd(t,n)||e.get(t,n,r),has:(t,n)=>!!Yd(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const mu="@firebase/app",qd="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Lc("@firebase/app"),XE="@firebase/app-compat",JE="@firebase/analytics-compat",ZE="@firebase/analytics",eS="@firebase/app-check-compat",tS="@firebase/app-check",nS="@firebase/auth",rS="@firebase/auth-compat",iS="@firebase/database",aS="@firebase/database-compat",oS="@firebase/functions",sS="@firebase/functions-compat",lS="@firebase/installations",uS="@firebase/installations-compat",cS="@firebase/messaging",fS="@firebase/messaging-compat",dS="@firebase/performance",hS="@firebase/performance-compat",pS="@firebase/remote-config",mS="@firebase/remote-config-compat",gS="@firebase/storage",vS="@firebase/storage-compat",yS="@firebase/firestore",wS="@firebase/firestore-compat",_S="firebase",kS="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="[DEFAULT]",ES={[mu]:"fire-core",[XE]:"fire-core-compat",[ZE]:"fire-analytics",[JE]:"fire-analytics-compat",[tS]:"fire-app-check",[eS]:"fire-app-check-compat",[nS]:"fire-auth",[rS]:"fire-auth-compat",[iS]:"fire-rtdb",[aS]:"fire-rtdb-compat",[oS]:"fire-fn",[sS]:"fire-fn-compat",[lS]:"fire-iid",[uS]:"fire-iid-compat",[cS]:"fire-fcm",[fS]:"fire-fcm-compat",[dS]:"fire-perf",[hS]:"fire-perf-compat",[pS]:"fire-rc",[mS]:"fire-rc-compat",[gS]:"fire-gcs",[vS]:"fire-gcs-compat",[yS]:"fire-fst",[wS]:"fire-fst-compat","fire-js":"fire-js",[_S]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Map,vu=new Map;function SS(e,t){try{e.container.addComponent(t)}catch(n){Nn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function St(e){const t=e.name;if(vu.has(t))return Nn.debug(`There were multiple attempts to register component ${t}.`),!1;vu.set(t,e);for(const n of To.values())SS(n,e);return!0}function Nr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zt=new Bn("app","Firebase",IS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=kS;function Hg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:gu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(n||(n=jg()),!n)throw Zt.create("no-options");const a=To.get(i);if(a){if(Di(n,a.options)&&Di(r,a.config))return a;throw Zt.create("duplicate-app",{appName:i})}const o=new LE(i);for(const l of vu.values())o.addComponent(l);const s=new CS(n,r,o);return To.set(i,s),s}function Kg(e=gu){const t=To.get(e);if(!t&&e===gu&&jg())return Hg();if(!t)throw Zt.create("no-app",{appName:e});return t}function rt(e,t,n){var r;let i=(r=ES[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Nn.warn(s.join(" "));return}St(new st(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="firebase-heartbeat-database",bS=1,Mi="firebase-heartbeat-store";let Xs=null;function Gg(){return Xs||(Xs=Wg(TS,bS,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Mi)}catch(n){console.warn(n)}}}}).catch(e=>{throw Zt.create("idb-open",{originalErrorMessage:e.message})})),Xs}async function PS(e){try{const n=(await Gg()).transaction(Mi),r=await n.objectStore(Mi).get(Yg(e));return await n.done,r}catch(t){if(t instanceof lt)Nn.warn(t.message);else{const n=Zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Nn.warn(n.message)}}}async function Qd(e,t){try{const r=(await Gg()).transaction(Mi,"readwrite");await r.objectStore(Mi).put(t,Yg(e)),await r.done}catch(n){if(n instanceof lt)Nn.warn(n.message);else{const r=Zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function Yg(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=1024,OS=30*24*60*60*1e3;class AS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Xd();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=OS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xd(),{heartbeatsToSend:r,unsentEntries:i}=RS(this._heartbeatsCache.heartbeats),a=Dg(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Xd(){return new Date().toISOString().substring(0,10)}function RS(e,t=xS){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),Jd(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zg()?$g().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Jd(e){return Dg(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(e){St(new st("platform-logger",t=>new qE(t),"PRIVATE")),St(new st("heartbeat",t=>new AS(t),"PRIVATE")),rt(mu,qd,e),rt(mu,qd,"esm2017"),rt("fire-js","")}LS("");var DS="firebase",MS="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt(DS,MS,"app");function Mc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function qg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jS=qg,Qg=new Bn("auth","Firebase",qg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Lc("@firebase/auth");function US(e,...t){bo.logLevel<=$.WARN&&bo.warn(`Auth (${Qi}): ${e}`,...t)}function Wa(e,...t){bo.logLevel<=$.ERROR&&bo.error(`Auth (${Qi}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e,...t){throw jc(e,...t)}function it(e,...t){return jc(e,...t)}function FS(e,t,n){const r=Object.assign(Object.assign({},jS()),{[t]:n});return new Bn("auth","Firebase",r).create(t,{appName:e.name})}function jc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Qg.create(e,...t)}function R(e,t,...n){if(!e)throw jc(t,...n)}function ht(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Wa(t),new Error(t)}function It(e,t){e||ht(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function zS(){return Zd()==="http:"||Zd()==="https:"}function Zd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zS()||Fg()||"connection"in navigator)?navigator.onLine:!0}function BS(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,n){this.shortDelay=t,this.longDelay=n,It(n>t,"Short delay should be less than long delay!"),this.isMobile=gE()||vE()}get(){return $S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(e,t){It(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=new Xi(3e4,6e4);function cn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function fn(e,t,n,r,i={}){return Jg(e,i,async()=>{let a={},o={};r&&(t==="GET"?o=r:a={body:JSON.stringify(r)});const s=qi(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Xg.fetch()(Zg(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function Jg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},VS),t);try{const i=new KS(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw xa(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const s=a.ok?o.errorMessage:o.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xa(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xa(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw xa(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw FS(e,c,u);Qe(e,c)}}catch(i){if(i instanceof lt)throw i;Qe(e,"network-request-failed",{message:String(i)})}}async function Ji(e,t,n,r,i={}){const a=await fn(e,t,n,r,i);return"mfaPendingCredential"in a&&Qe(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Zg(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Uc(e.config,i):`${e.config.apiScheme}://${i}`}function HS(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KS{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),WS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xa(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=it(e,t,r);return i.customData._tokenResponse=n,i}function eh(e){return e!==void 0&&e.enterprise!==void 0}class GS{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return HS(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function YS(e,t){return fn(e,"GET","/v2/recaptchaConfig",cn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(e,t){return fn(e,"POST","/v1/accounts:delete",t)}async function QS(e,t){return fn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function XS(e,t=!1){const n=bt(e),r=await n.getIdToken(t),i=Fc(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:ui(Js(i.auth_time)),issuedAtTime:ui(Js(i.iat)),expirationTime:ui(Js(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Js(e){return Number(e)*1e3}function Fc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Wa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Mg(n);return i?JSON.parse(i):(Wa("Failed to decode base64 JWT payload"),null)}catch(i){return Wa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function JS(e){const t=Fc(e);return R(t,"internal-error"),R(typeof t.exp<"u","internal-error"),R(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof lt&&ZS(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function ZS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ji(e,QS(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?rI(a.providerUserInfo):[],s=nI(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new ev(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function tI(e){const t=bt(e);await Po(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function nI(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function rI(e){return e.map(t=>{var{providerId:n}=t,r=Mc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(e,t){const n=await Jg(e,{},async()=>{const r=qi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,o=Zg(e,i,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Xg.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aI(e,t){return fn(e,"POST","/v2/accounts:revokeToken",cn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){R(t.idToken,"internal-error"),R(typeof t.idToken<"u","internal-error"),R(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):JS(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return R(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await iI(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new Ui;return r&&(R(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),a&&(R(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e,t){R(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Cn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=Mc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ev(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await ji(this,this.stsTokenManager.getToken(this.auth,t));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return XS(this,t)}reload(){return tI(this)}_assign(t){this!==t&&(R(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Cn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ji(this,qS(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,o,s,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(s=n.tenantId)!==null&&s!==void 0?s:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:E,providerData:C,stsTokenManager:T}=n;R(m&&T,t,"internal-error");const A=Ui.fromJSON(this.name,T);R(typeof m=="string",t,"internal-error"),Ot(f,t.name),Ot(h,t.name),R(typeof y=="boolean",t,"internal-error"),R(typeof E=="boolean",t,"internal-error"),Ot(g,t.name),Ot(v,t.name),Ot(w,t.name),Ot(k,t.name),Ot(p,t.name),Ot(d,t.name);const U=new Cn({uid:m,auth:t,email:h,emailVerified:y,displayName:f,isAnonymous:E,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:A,createdAt:p,lastLoginAt:d});return C&&Array.isArray(C)&&(U.providerData=C.map(L=>Object.assign({},L))),k&&(U._redirectEventId=k),U}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ui;i.updateFromServerResponse(n);const a=new Cn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Po(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new Map;function pt(e){It(e instanceof Function,"Expected a class definition");let t=th.get(e);return t?(It(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,th.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}tv.type="NONE";const nh=tv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(e,t,n){return`firebase:${e}:${t}:${n}`}class mr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Ha(this.userKey,i.apiKey,a),this.fullPersistenceKey=Ha("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Cn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new mr(pt(nh),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||pt(nh);const o=Ha(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Cn._fromJSON(t,c);u!==a&&(s=f),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new mr(a,t,r):(a=l[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new mr(a,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(iv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(nv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ov(t))return"Blackberry";if(sv(t))return"Webos";if(zc(t))return"Safari";if((t.includes("chrome/")||rv(t))&&!t.includes("edge/"))return"Chrome";if(av(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nv(e=ge()){return/firefox\//i.test(e)}function zc(e=ge()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function rv(e=ge()){return/crios\//i.test(e)}function iv(e=ge()){return/iemobile/i.test(e)}function av(e=ge()){return/android/i.test(e)}function ov(e=ge()){return/blackberry/i.test(e)}function sv(e=ge()){return/webos/i.test(e)}function is(e=ge()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function oI(e=ge()){var t;return is(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function sI(){return yE()&&document.documentMode===10}function lv(e=ge()){return is(e)||av(e)||sv(e)||ov(e)||/windows phone/i.test(e)||iv(e)}function lI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(e,t=[]){let n;switch(e){case"Browser":n=rh(ge());break;case"Worker":n=`${rh(ge())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((o,s)=>{try{const l=t(a);o(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI(e,t={}){return fn(e,"GET","/v2/passwordPolicy",cn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=6;class dI{constructor(t){var n,r,i,a;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:fI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=t.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,a,o,s;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsUppercaseLetter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNonAlphanumericCharacter)!==null&&s!==void 0?s:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ih(this),this.idTokenSubscription=new ih(this),this.beforeStateQueue=new uI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=pt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await mr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===s)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Po(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=BS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?bt(t):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&R(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await cI(this),n=new dI(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Bn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aI(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&pt(t)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await mr.create(this,[pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(s,this,"internal-error"),s.then(()=>{o||a(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=uv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&US(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vn(e){return bt(e)}class ih{constructor(t){this.auth=t,this.observer=null,this.addObserver=IE(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pI(e){as=e}function cv(e){return as.loadJS(e)}function mI(){return as.recaptchaEnterpriseScript}function gI(){return as.gapiScript}function vI(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const yI="recaptcha-enterprise",wI="NO_RECAPTCHA";class _I{constructor(t){this.type=yI,this.auth=Vn(t)}async verify(t="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,s)=>{YS(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const u=new GS(l);return a.tenantId==null?a._agentRecaptchaConfig=u:a._tenantRecaptchaConfigs[a.tenantId]=u,o(u.siteKey)}}).catch(l=>{s(l)})})}function i(a,o,s){const l=window.grecaptcha;eh(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:t}).then(u=>{o(u)}).catch(()=>{o(wI)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{r(this.auth).then(s=>{if(!n&&eh(window.grecaptcha))i(s,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=mI();l.length!==0&&(l+=s),cv(l).then(()=>{i(s,a,o)}).catch(u=>{o(u)})}}).catch(s=>{o(s)})})}}async function ah(e,t,n,r=!1){const i=new _I(e);let a;try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wu(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await ah(e,t,n,n==="getOobCode");return r(e,a)}else return r(e,t).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ah(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(e,t){const n=Nr(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(Di(a,t??{}))return i;Qe(i,"already-initialized")}return n.initialize({options:t})}function EI(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function SI(e,t,n){const r=Vn(e);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=fv(t),{host:o,port:s}=II(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||CI()}function fv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function II(e){const t=fv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:oh(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:oh(o)}}}function oh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function CI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ht("not implemented")}_getIdTokenResponse(t){return ht("not implemented")}_linkToIdToken(t,n){return ht("not implemented")}_getReauthenticationResolver(t){return ht("not implemented")}}async function TI(e,t){return fn(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(e,t){return Ji(e,"POST","/v1/accounts:signInWithPassword",cn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(e,t){return Ji(e,"POST","/v1/accounts:signInWithEmailLink",cn(e,t))}async function xI(e,t){return Ji(e,"POST","/v1/accounts:signInWithEmailLink",cn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends $c{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Fi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Fi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wu(t,n,"signInWithPassword",bI);case"emailLink":return PI(t,{email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wu(t,r,"signUpPassword",TI);case"emailLink":return xI(t,{idToken:n,email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(e,t){return Ji(e,"POST","/v1/accounts:signInWithIdp",cn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="http://localhost";class Ln extends $c{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ln(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=Mc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ln(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return gr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,gr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,gr(t,n)}buildRequest(){const t={requestUri:OI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=qi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RI(e){const t=Qr(Xr(e)).link,n=t?Qr(Xr(t)).deep_link_id:null,r=Qr(Xr(e)).deep_link_id;return(r?Qr(Xr(r)).link:null)||r||n||t||e}class Bc{constructor(t){var n,r,i,a,o,s;const l=Qr(Xr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=AI((i=l.mode)!==null&&i!==void 0?i:null);R(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=RI(t);try{return new Bc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.providerId=Lr.PROVIDER_ID}static credential(t,n){return Fi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Bc.parseLink(n);return R(r,"argument-error"),Fi._fromEmailAndCode(t,r.code,r.tenantId)}}Lr.PROVIDER_ID="password";Lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends dv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Zi{constructor(){super("facebook.com")}static credential(t){return Ln._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dt.credential(t.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Zi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ln._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Zi{constructor(){super("github.com")}static credential(t){return Ln._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jt.credential(t.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Zi{constructor(){super("twitter.com")}static credential(t,n){return Ln._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.TWITTER_SIGN_IN_METHOD="twitter.com";Ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(e,t){return Ji(e,"POST","/v1/accounts:signUp",cn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await Cn._fromIdTokenResponse(t,r,i),o=sh(r);return new Dn({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=sh(r);return new Dn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function sh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends lt{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new xo(t,n,r,i)}}function hv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(e,a,t,r):a})}async function LI(e,t,n=!1){const r=await ji(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Dn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await ji(e,hv(r,i,t,e),n);R(a.idToken,r,"internal-error");const o=Fc(a.idToken);R(o,r,"internal-error");const{sub:s}=o;return R(e.uid===s,r,"user-mismatch"),Dn._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Qe(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pv(e,t,n=!1){const r="signIn",i=await hv(e,r,t),a=await Dn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function MI(e,t){return pv(Vn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(e){const t=Vn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function jI(e,t,n){const r=Vn(e),o=await wu(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&mv(e),l}),s=await Dn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(s.user),s}function UI(e,t,n){return MI(bt(e),Lr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mv(e),r})}function FI(e,t,n,r){return bt(e).onIdTokenChanged(t,n,r)}function zI(e,t,n){return bt(e).beforeAuthStateChanged(t,n)}const Oo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oo,"1"),this.storage.removeItem(Oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(){const e=ge();return zc(e)||is(e)}const BI=1e3,VI=10;class vv extends gv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$I()&&lI(),this.fallbackToPolling=lv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,s,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);sI()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,VI):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},BI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}vv.type="LOCAL";const WI=vv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv extends gv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}yv.type="SESSION";const wv=yv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new os(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(o).map(async u=>u(n.origin,a)),l=await HI(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}os.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((s,l)=>{const u=Vc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(h.data.response);break;default:clearTimeout(c),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return window}function GI(e){at().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function YI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qI(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function QI(){return _v()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="firebaseLocalStorageDb",XI=1,Ao="firebaseLocalStorage",Ev="fbase_key";class ea{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ss(e,t){return e.transaction([Ao],t?"readwrite":"readonly").objectStore(Ao)}function JI(){const e=indexedDB.deleteDatabase(kv);return new ea(e).toPromise()}function _u(){const e=indexedDB.open(kv,XI);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ao,{keyPath:Ev})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ao)?t(r):(r.close(),await JI(),t(await _u()))})})}async function lh(e,t,n){const r=ss(e,!0).put({[Ev]:t,value:n});return new ea(r).toPromise()}async function ZI(e,t){const n=ss(e,!1).get(t),r=await new ea(n).toPromise();return r===void 0?null:r.value}function uh(e,t){const n=ss(e,!0).delete(t);return new ea(n).toPromise()}const eC=800,tC=3;class Sv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _u(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>tC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _v()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=os._getInstance(QI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await YI(),!this.activeServiceWorker)return;this.sender=new KI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||qI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await _u();return await lh(t,Oo,"1"),await uh(t,Oo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lh(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>ZI(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>uh(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=ss(i,!1).getAll();return new ea(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sv.type="LOCAL";const nC=Sv;new Xi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(e,t){return t?pt(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends $c{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return gr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return gr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return gr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function iC(e){return pv(e.auth,new Wc(e),e.bypassAuthState)}function aC(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),DI(n,new Wc(e),e.bypassAuthState)}async function oC(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),LI(n,new Wc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return iC;case"linkViaPopup":case"linkViaRedirect":return oC;case"reauthViaPopup":case"reauthViaRedirect":return aC;default:Qe(this.auth,"internal-error")}}resolve(t){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=new Xi(2e3,1e4);class sr extends Iv{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return R(t,this.auth,"internal-error"),t}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const t=Vc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,sC.get())};t()}}sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="pendingRedirect",Ka=new Map;class uC extends Iv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ka.get(this.auth._key());if(!t){try{const r=await cC(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ka.set(this.auth._key(),t)}return this.bypassAuthState||Ka.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cC(e,t){const n=hC(t),r=dC(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fC(e,t){Ka.set(e._key(),t)}function dC(e){return pt(e._redirectPersistence)}function hC(e){return Ha(lC,e.config.apiKey,e.name)}async function pC(e,t,n=!1){const r=Vn(e),i=rC(r,t),o=await new uC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=10*60*1e3;class gC{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!vC(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Cv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(it(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=mC&&this.cachedEventUids.clear(),this.cachedEventUids.has(ch(t))}saveEventToCache(t){this.cachedEventUids.add(ch(t)),this.lastProcessedEventTime=Date.now()}}function ch(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Cv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function vC(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yC(e,t={}){return fn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_C=/^https?/;async function kC(e){if(e.config.emulator)return;const{authorizedDomains:t}=await yC(e);for(const n of t)try{if(EC(n))return}catch{}Qe(e,"unauthorized-domain")}function EC(e){const t=yu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_C.test(n))return!1;if(wC.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=new Xi(3e4,6e4);function fh(){const e=at().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function IC(e){return new Promise((t,n)=>{var r,i,a;function o(){fh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{fh(),n(it(e,"network-request-failed"))},timeout:SC.get()})}if(!((i=(r=at().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=at().gapi)===null||a===void 0)&&a.load)o();else{const s=vI("iframefcb");return at()[s]=()=>{gapi.load?o():n(it(e,"network-request-failed"))},cv(`${gI()}?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw Ga=null,t})}let Ga=null;function CC(e){return Ga=Ga||IC(e),Ga}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=new Xi(5e3,15e3),bC="__/auth/iframe",PC="emulator/auth/iframe",xC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AC(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Uc(t,PC):`https://${e.config.authDomain}/${bC}`,r={apiKey:t.apiKey,appName:e.name,v:Qi},i=OC.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${qi(r).slice(1)}`}async function RC(e){const t=await CC(e),n=at().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:AC(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xC,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=it(e,"network-request-failed"),s=at().setTimeout(()=>{a(o)},TC.get());function l(){at().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LC=500,DC=600,MC="_blank",jC="http://localhost";class dh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UC(e,t,n,r=LC,i=DC){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},NC),{width:r.toString(),height:i.toString(),top:a,left:o}),u=ge().toLowerCase();n&&(s=rv(u)?MC:n),nv(u)&&(t=t||jC,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(oI(u)&&s!=="_self")return FC(t||"",s),new dh(null);const f=window.open(t||"",s,c);R(f,e,"popup-blocked");try{f.focus()}catch{}return new dh(f)}function FC(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="__/auth/handler",$C="emulator/auth/handler",BC=encodeURIComponent("fac");async function hh(e,t,n,r,i,a){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Qi,eventId:i};if(t instanceof dv){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",SE(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(a||{}))o[c]=f}if(t instanceof Zi){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const c of Object.keys(s))s[c]===void 0&&delete s[c];const l=await e._getAppCheckToken(),u=l?`#${BC}=${encodeURIComponent(l)}`:"";return`${VC(e)}?${qi(s).slice(1)}${u}`}function VC({config:e}){return e.emulator?Uc(e,$C):`https://${e.authDomain}/${zC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="webStorageSupport";class WC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wv,this._completeRedirectFn=pC,this._overrideRedirectResult=fC}async _openPopup(t,n,r,i){var a;It((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await hh(t,n,r,yu(),i);return UC(t,o,Vc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const a=await hh(t,n,r,yu(),i);return GI(a),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(It(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await RC(t),r=new gC(t);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Zs,{type:Zs},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Zs];o!==void 0&&n(!!o),Qe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kC(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return lv()||zc()||is()}}const HC=WC;var ph="@firebase/auth",mh="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YC(e){St(new st("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uv(e)},u=new hI(r,i,a,l);return EI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),St(new st("auth-internal",t=>{const n=Vn(t.getProvider("auth").getImmediate());return(r=>new KC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(ph,mh,GC(e)),rt(ph,mh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=5*60,QC=Ug("authIdTokenMaxAge")||qC;let gh=null;const XC=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QC)return;const i=n==null?void 0:n.token;gh!==i&&(gh=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function JC(e=Kg()){const t=Nr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=kI(e,{popupRedirectResolver:HC,persistence:[nC,WI,wv]}),r=Ug("authTokenSyncURL");if(r){const a=XC(r);zI(n,a,()=>a(n.currentUser)),FI(n,o=>a(o))}const i=pE("auth");return i&&SI(n,`http://${i}`),n}function ZC(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}pI({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=it("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",ZC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YC("Browser");const Tv="@firebase/installations",Hc="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=1e4,Pv=`w:${Hc}`,xv="FIS_v2",eT="https://firebaseinstallations.googleapis.com/v1",tT=60*60*1e3,nT="installations",rT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Mn=new Bn(nT,rT,iT);function Ov(e){return e instanceof lt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av({projectId:e}){return`${eT}/projects/${e}/installations`}function Rv(e){return{token:e.token,requestStatus:2,expiresIn:oT(e.expiresIn),creationTime:Date.now()}}async function Nv(e,t){const r=(await t.json()).error;return Mn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Lv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function aT(e,{refreshToken:t}){const n=Lv(e);return n.append("Authorization",sT(t)),n}async function Dv(e){const t=await e();return t.status>=500&&t.status<600?e():t}function oT(e){return Number(e.replace("s","000"))}function sT(e){return`${xv} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lT({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Av(e),i=Lv(e),a=t.getImmediate({optional:!0});if(a){const u=await a.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:xv,appId:e.appId,sdkVersion:Pv},s={method:"POST",headers:i,body:JSON.stringify(o)},l=await Dv(()=>fetch(r,s));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Rv(u.authToken)}}else throw await Nv("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=/^[cdef][\w-]{21}$/,ku="";function fT(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=dT(e);return cT.test(n)?n:ku}catch{return ku}}function dT(e){return uT(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=new Map;function Uv(e,t){const n=ls(e);Fv(n,t),hT(n,t)}function Fv(e,t){const n=jv.get(e);if(n)for(const r of n)r(t)}function hT(e,t){const n=pT();n&&n.postMessage({key:e,fid:t}),mT()}let En=null;function pT(){return!En&&"BroadcastChannel"in self&&(En=new BroadcastChannel("[Firebase] FID Change"),En.onmessage=e=>{Fv(e.data.key,e.data.fid)}),En}function mT(){jv.size===0&&En&&(En.close(),En=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="firebase-installations-database",vT=1,jn="firebase-installations-store";let el=null;function Kc(){return el||(el=Wg(gT,vT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(jn)}}})),el}async function Ro(e,t){const n=ls(e),i=(await Kc()).transaction(jn,"readwrite"),a=i.objectStore(jn),o=await a.get(n);return await a.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Uv(e,t.fid),t}async function zv(e){const t=ls(e),r=(await Kc()).transaction(jn,"readwrite");await r.objectStore(jn).delete(t),await r.done}async function us(e,t){const n=ls(e),i=(await Kc()).transaction(jn,"readwrite"),a=i.objectStore(jn),o=await a.get(n),s=t(o);return s===void 0?await a.delete(n):await a.put(s,n),await i.done,s&&(!o||o.fid!==s.fid)&&Uv(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gc(e){let t;const n=await us(e.appConfig,r=>{const i=yT(r),a=wT(e,i);return t=a.registrationPromise,a.installationEntry});return n.fid===ku?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function yT(e){const t=e||{fid:fT(),registrationStatus:0};return $v(t)}function wT(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Mn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=_T(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:kT(e)}:{installationEntry:t}}async function _T(e,t){try{const n=await lT(e,t);return Ro(e.appConfig,n)}catch(n){throw Ov(n)&&n.customData.serverCode===409?await zv(e.appConfig):await Ro(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function kT(e){let t=await vh(e.appConfig);for(;t.registrationStatus===1;)await Mv(100),t=await vh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Gc(e);return r||n}return t}function vh(e){return us(e,t=>{if(!t)throw Mn.create("installation-not-found");return $v(t)})}function $v(e){return ET(e)?{fid:e.fid,registrationStatus:0}:e}function ET(e){return e.registrationStatus===1&&e.registrationTime+bv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST({appConfig:e,heartbeatServiceProvider:t},n){const r=IT(e,n),i=aT(e,n),a=t.getImmediate({optional:!0});if(a){const u=await a.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Pv,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(o)},l=await Dv(()=>fetch(r,s));if(l.ok){const u=await l.json();return Rv(u)}else throw await Nv("Generate Auth Token",l)}function IT(e,{fid:t}){return`${Av(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yc(e,t=!1){let n;const r=await us(e.appConfig,a=>{if(!Bv(a))throw Mn.create("not-registered");const o=a.authToken;if(!t&&bT(o))return a;if(o.requestStatus===1)return n=CT(e,t),a;{if(!navigator.onLine)throw Mn.create("app-offline");const s=xT(a);return n=TT(e,s),s}});return n?await n:r.authToken}async function CT(e,t){let n=await yh(e.appConfig);for(;n.authToken.requestStatus===1;)await Mv(100),n=await yh(e.appConfig);const r=n.authToken;return r.requestStatus===0?Yc(e,t):r}function yh(e){return us(e,t=>{if(!Bv(t))throw Mn.create("not-registered");const n=t.authToken;return OT(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function TT(e,t){try{const n=await ST(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ro(e.appConfig,r),n}catch(n){if(Ov(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await zv(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ro(e.appConfig,r)}throw n}}function Bv(e){return e!==void 0&&e.registrationStatus===2}function bT(e){return e.requestStatus===2&&!PT(e)}function PT(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+tT}function xT(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function OT(e){return e.requestStatus===1&&e.requestTime+bv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AT(e){const t=e,{installationEntry:n,registrationPromise:r}=await Gc(t);return r?r.catch(console.error):Yc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(e,t=!1){const n=e;return await NT(n),(await Yc(n,t)).token}async function NT(e){const{registrationPromise:t}=await Gc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(e){if(!e||!e.options)throw tl("App Configuration");if(!e.name)throw tl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw tl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function tl(e){return Mn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="installations",DT="installations-internal",MT=e=>{const t=e.getProvider("app").getImmediate(),n=LT(t),r=Nr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jT=e=>{const t=e.getProvider("app").getImmediate(),n=Nr(t,Vv).getImmediate();return{getId:()=>AT(n),getToken:i=>RT(n,i)}};function UT(){St(new st(Vv,MT,"PUBLIC")),St(new st(DT,jT,"PRIVATE"))}UT();rt(Tv,Hc);rt(Tv,Hc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="analytics",FT="firebase_id",zT="origin",$T=60*1e3,BT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",qc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new Lc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Oe=new Bn("analytics","Analytics",VT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(e){if(!e.startsWith(qc)){const t=Oe.create("invalid-gtag-resource",{gtagURL:e});return Te.warn(t.message),""}return e}function Wv(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function HT(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function KT(e,t){const n=HT("firebase-js-sdk-policy",{createScriptURL:WT}),r=document.createElement("script"),i=`${qc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function GT(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function YT(e,t,n,r,i,a){const o=r[i];try{if(o)await t[o];else{const l=(await Wv(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(s){Te.error(s)}e("config",i,a)}async function qT(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const s=await Wv(n);for(const l of o){const u=s.find(f=>f.measurementId===l),c=u&&t[u.appId];if(c)a.push(c);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),e("event",r,i||{})}catch(a){Te.error(a)}}function QT(e,t,n,r){async function i(a,...o){try{if(a==="event"){const[s,l]=o;await qT(e,t,n,s,l)}else if(a==="config"){const[s,l]=o;await YT(e,t,n,r,s,l)}else if(a==="consent"){const[s]=o;e("consent","update",s)}else if(a==="get"){const[s,l,u]=o;e("get",s,l,u)}else if(a==="set"){const[s]=o;e("set",s)}else e(a,...o)}catch(s){Te.error(s)}}return i}function XT(e,t,n,r,i){let a=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=QT(a,e,t,n),{gtagCore:a,wrappedGtag:window[i]}}function JT(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(qc)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=30,eb=1e3;class tb{constructor(t={},n=eb){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Hv=new tb;function nb(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function rb(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:nb(r)},a=BT.replace("{app-id}",n),o=await fetch(a,i);if(o.status!==200&&o.status!==304){let s="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(s=l.error.message)}catch{}throw Oe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:s})}return o.json()}async function ib(e,t=Hv,n){const{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw Oe.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw Oe.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new sb;return setTimeout(async()=>{s.abort()},n!==void 0?n:$T),Kv({appId:r,apiKey:i,measurementId:a},o,s,t)}async function Kv(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Hv){var a;const{appId:o,measurementId:s}=e;try{await ab(r,t)}catch(l){if(s)return Te.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:s};throw l}try{const l=await rb(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!ob(u)){if(i.deleteThrottleMetadata(o),s)return Te.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:s};throw l}const c=Number((a=u==null?void 0:u.customData)===null||a===void 0?void 0:a.httpStatus)===503?Hd(n,i.intervalMillis,ZT):Hd(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),Te.debug(`Calling attemptFetch again in ${c} millis`),Kv(e,f,r,i)}}function ab(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(a),r(Oe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ob(e){if(!(e instanceof lt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class sb{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function lb(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const a=await t,o=Object.assign(Object.assign({},r),{send_to:a});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(){if(zg())try{await $g()}catch(e){return Te.warn(Oe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Te.warn(Oe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cb(e,t,n,r,i,a,o){var s;const l=ib(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Te.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Te.error(g)),t.push(l);const u=ub().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([l,u]);JT(a)||KT(a,c.measurementId),i("js",new Date);const h=(s=o==null?void 0:o.config)!==null&&s!==void 0?s:{};return h[zT]="firebase",h.update=!0,f!=null&&(h[FT]=f),i("config",c.measurementId,h),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(t){this.app=t}_delete(){return delete ci[this.app.options.appId],Promise.resolve()}}let ci={},wh=[];const _h={};let nl="dataLayer",db="gtag",kh,Gv,Eh=!1;function hb(){const e=[];if(Fg()&&e.push("This is a browser extension environment."),wE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Oe.create("invalid-analytics-context",{errorInfo:t});Te.warn(n.message)}}function pb(e,t,n){hb();const r=e.options.appId;if(!r)throw Oe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Te.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Oe.create("no-api-key");if(ci[r]!=null)throw Oe.create("already-exists",{id:r});if(!Eh){GT(nl);const{wrappedGtag:a,gtagCore:o}=XT(ci,wh,_h,nl,db);Gv=a,kh=o,Eh=!0}return ci[r]=cb(e,wh,_h,t,kh,nl,n),new fb(e)}function mb(e=Kg()){e=bt(e);const t=Nr(e,No);return t.isInitialized()?t.getImmediate():gb(e)}function gb(e,t={}){const n=Nr(e,No);if(n.isInitialized()){const i=n.getImmediate();if(Di(t,n.getOptions()))return i;throw Oe.create("already-initialized")}return n.initialize({options:t})}function vb(e,t,n,r){e=bt(e),lb(Gv,ci[e.app.options.appId],t,n,r).catch(i=>Te.error(i))}const Sh="@firebase/analytics",Ih="0.10.1";function yb(){St(new st(No,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return pb(r,i,n)},"PUBLIC")),St(new st("analytics-internal",e,"PRIVATE")),rt(Sh,Ih),rt(Sh,Ih,"esm2017");function e(t){try{const n=t.getProvider(No).getImmediate();return{logEvent:(r,i,a)=>vb(n,r,i,a)}}catch(n){throw Oe.create("interop-component-reg-failed",{reason:n})}}}yb();const wb={apiKey:"AIzaSyDyE1a54xzvGCsNKYK_qo5Ls0POW05mPGY",authDomain:"mintmade-67844.firebaseapp.com",projectId:"mintmade-67844",storageBucket:"mintmade-67844.appspot.com",messagingSenderId:"948170930959",appId:"1:948170930959:web:49c89d2585476996205c7a",measurementId:"G-0WF1WSJJPT"},Yv=Hg(wb);mb(Yv);const qv=JC(Yv),_b=()=>{const[e,t]=I.useState(""),[n,r]=I.useState(""),[i,a]=I.useState(null),o=yc(),s=async l=>{l.preventDefault();try{await jI(qv,e,n),o("/home")}catch(u){a(u.message)}};return _.jsxs("div",{className:"sign-up",children:[_.jsx("h2",{children:"Sign Up"}),_.jsxs("form",{onSubmit:s,children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"email",children:"Email:"}),_.jsx("input",{type:"email",id:"email",value:e,onChange:l=>t(l.target.value),required:!0})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"password",children:"Password:"}),_.jsx("input",{type:"password",id:"password",value:n,onChange:l=>r(l.target.value),required:!0})]}),_.jsx("button",{type:"submit",children:"Sign Up"}),_.jsx(Or,{style:{textDecoration:"none",fontWeight:"bold",color:"black",marginTop:"1rem",marginBottom:"1rem"},to:"/login",children:_.jsx("span",{children:"Have an account?  Login"})})]}),i&&_.jsx("p",{children:i})]})},kb=()=>{const[e,t]=I.useState(""),[n,r]=I.useState(""),[i,a]=I.useState(null),o=yc(),s=async l=>{l.preventDefault();try{await UI(qv,e,n),console.log("Successfully"),o("/home")}catch(u){a(u.message)}};return _.jsxs("div",{className:"login",children:[_.jsx("h2",{children:"Login"}),_.jsxs("form",{onSubmit:s,children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"email",children:"Email:"}),_.jsx("input",{type:"email",id:"email",value:e,onChange:l=>t(l.target.value),required:!0})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"password",children:"Password:"}),_.jsx("input",{type:"password",id:"password",value:n,onChange:l=>r(l.target.value),required:!0})]}),_.jsx("button",{type:"submit",children:"Login"}),_.jsx(Or,{style:{textDecoration:"none",fontWeight:"bold",color:"black",marginTop:"1rem",marginBottom:"1rem"},to:"/",children:_.jsx("span",{children:"Don't have an acount?  Sign up"})})]}),i&&_.jsx("p",{children:i})]})},Eb=()=>{const[e,t]=I.useState(!0);return I.useEffect(()=>{const n=setTimeout(()=>{t(!1)},1e4);return()=>clearTimeout(n)},[]),_.jsx(Aw,{basename:"/Task-Intern-Career-2",children:_.jsx(Bw,{children:e?_.jsx(D1,{}):_.jsxs(Iw,{children:[_.jsx(Hn,{path:"/",element:_.jsx(_b,{})}),_.jsx(Hn,{path:"/login",element:_.jsx(kb,{})}),_.jsx(Hn,{path:"/home",element:_.jsx($w,{})}),_.jsx(Hn,{path:"/shop",element:_.jsx(aE,{})}),_.jsx(Hn,{path:"/cart",element:_.jsx(oE,{})})]})})})};rl.createRoot(document.getElementById("root")).render(_.jsx(on.StrictMode,{children:_.jsx(Eb,{})}));export{Or as L,on as R,Jw as S,_ as j};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
