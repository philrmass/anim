!function(e){function n(_){if(t[_])return t[_].exports;var r=t[_]={i:_,l:!1,exports:{}};return e[_].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,_){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:_})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(n.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(_,r,function(n){return e[n]}.bind(null,r));return _},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/anim/",n(n.s="Pq/i")}({MV5A:function(){},"Pq/i":function(e,n,t){"use strict";t.r(n);var _=t("hosL");const{h:r,render:o,hydrate:l}=_,u=e=>e&&e.default?e.default:e,i=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(i(t.p)+"sw-esm.js"),"function"==typeof u(t("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,n=()=>{let n=u(t("QfWi")),_={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(_=JSON.parse(decodeURI(c.innerHTML)).preRenderData||_);const f={preRenderData:_},s=_.url?i(_.url):"";(l&&s===i(location.pathname)?l:o)(r(n,{CLI_DATA:f}),document.body,e)};0,n()}},QfWi:function(e,n,t){"use strict";t.r(n),function(e){function _(){return e("div",null,e("h1",null,"Hello, World!"))}t.d(n,"default",(function(){return _}));t("MV5A")}.call(this,t("hosL").h)},hosL:function(e,n,t){"use strict";function _(e,n){for(var t in n)e[t]=n[t];return e}function r(e){var n=e.parentNode;n&&n.removeChild(e)}function o(e,n,t){var _,r,o,u={};for(o in n)"key"==o?_=n[o]:"ref"==o?r=n[o]:u[o]=n[o];if(arguments.length>2&&(u.children=arguments.length>3?U.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===u[o]&&(u[o]=e.defaultProps[o]);return l(e,u,_,r,null)}function l(e,n,t,_,r){var o={type:e,props:n,key:t,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++O:r,__i:-1,__u:0};return null==r&&null!=A.vnode&&A.vnode(o),o}function u(){return{current:null}}function i(e){return e.children}function c(e,n){this.props=e,this.context=n}function f(e,n){if(null==n)return e.__?f(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?f(e):null}function s(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return s(e)}}function p(e){(!e.__d&&(e.__d=!0)&&R.push(e)&&!d.__r++||H!==A.debounceRendering)&&((H=A.debounceRendering)||N)(d)}function d(){var e,n,t,r,o,l,u,i,c;for(R.sort(F);e=R.shift();)e.__d&&(n=R.length,r=void 0,l=(o=(t=e).__v).__e,i=[],c=[],(u=t.__P)&&((r=_({},o)).__v=o.__v+1,A.vnode&&A.vnode(r),P(u,r,o,t.__n,void 0!==u.ownerSVGElement,32&o.__u?[l]:null,i,null==l?f(o):l,!!(32&o.__u),c),r.__.__k[r.__i]=r,x(i,r,c),r.__e!=l&&s(r)),R.length>n&&R.sort(F));d.__r=0}function a(e,n,t,_,r,o,l,u,i,c,f){var s,p,d,a,y,m=_&&_.__k||$,g=n.length;for(t.__d=i,h(t,n,m),i=t.__d,s=0;s<g;s++)null!=(d=t.__k[s])&&"boolean"!=typeof d&&"function"!=typeof d&&(p=-1===d.__i?V:m[d.__i]||V,d.__i=s,P(e,d,p,r,o,l,u,i,c,f),a=d.__e,d.ref&&p.ref!=d.ref&&(p.ref&&w(p.ref,null,d),f.push(d.ref,d.__c||a,d)),null==y&&null!=a&&(y=a),65536&d.__u||p.__k===d.__k?i=v(d,i,e):"function"==typeof d.type&&void 0!==d.__d?i=d.__d:a&&(i=a.nextSibling),d.__d=void 0,d.__u&=-196609);t.__d=i,t.__e=y}function h(e,n,t){var _,r,o,u,c,s=n.length,p=t.length,d=p,a=0;for(e.__k=[],_=0;_<s;_++)null!=(r=e.__k[_]=null==(r=n[_])||"boolean"==typeof r||"function"==typeof r?null:"string"==typeof r||"number"==typeof r||"bigint"==typeof r||r.constructor==String?l(null,r,null,null,r):q(r)?l(i,{children:r},null,null,null):r.__b>0?l(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)?(r.__=e,r.__b=e.__b+1,c=m(r,t,u=_+a,d),r.__i=c,o=null,-1!==c&&(d--,(o=t[c])&&(o.__u|=131072)),null==o||null===o.__v?(-1==c&&a--,"function"!=typeof r.type&&(r.__u|=65536)):c!==u&&(c===u+1?a++:c>u?d>s-u?a+=c-u:a--:a=c<u&&c==u-1?c-u:0,c!==_+a&&(r.__u|=65536))):(o=t[_])&&null==o.key&&o.__e&&(o.__e==e.__d&&(e.__d=f(o)),D(o,o,!1),t[_]=null,d--);if(d)for(_=0;_<p;_++)null!=(o=t[_])&&0==(131072&o.__u)&&(o.__e==e.__d&&(e.__d=f(o)),D(o,o))}function v(e,n,t){var _,r;if("function"==typeof e.type){for(_=e.__k,r=0;_&&r<_.length;r++)_[r]&&(_[r].__=e,n=v(_[r],n,t));return n}return e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e),n&&n.nextSibling}function y(e,n){return n=n||[],null==e||"boolean"==typeof e||(q(e)?e.some((function(e){y(e,n)})):n.push(e)),n}function m(e,n,t,_){var r=e.key,o=e.type,l=t-1,u=t+1,i=n[t];if(null===i||i&&r==i.key&&o===i.type)return t;if(_>(null!=i&&0==(131072&i.__u)?1:0))for(;l>=0||u<n.length;){if(l>=0){if((i=n[l])&&0==(131072&i.__u)&&r==i.key&&o===i.type)return l;l--}if(u<n.length){if((i=n[u])&&0==(131072&i.__u)&&r==i.key&&o===i.type)return u;u++}}return-1}function g(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||B.test(n)?t:t+"px"}function b(e,n,t,_,r){var o;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||g(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||g(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/(PointerCapture)$|Capture$/,"$1")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=t,t?_?t.u=_.u:(t.u=Date.now(),e.addEventListener(n,o?C:k,o)):e.removeEventListener(n,o?C:k,o);else{if(r)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&"rowSpan"!==n&&"colSpan"!==n&&"role"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function k(e){var n=this.l[e.type+!1];if(e.t){if(e.t<=n.u)return}else e.t=Date.now();return n(A.event?A.event(e):e)}function C(e){return this.l[e.type+!0](A.event?A.event(e):e)}function P(e,n,t,r,o,l,u,f,s,p){var d,h,v,y,m,g,b,k,C,P,x,w,D,T,M,W=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(s=!!(32&t.__u),l=[f=n.__e=t.__e]),(d=A.__b)&&d(n);e:if("function"==typeof W)try{if(k=n.props,C=(d=W.contextType)&&r[d.__c],P=d?C?C.props.value:d.__:r,t.__c?b=(h=n.__c=t.__c).__=h.__E:("prototype"in W&&W.prototype.render?n.__c=h=new W(k,P):(n.__c=h=new c(k,P),h.constructor=W,h.render=E),C&&C.sub(h),h.props=k,h.state||(h.state={}),h.context=P,h.__n=r,v=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=W.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=_({},h.__s)),_(h.__s,W.getDerivedStateFromProps(k,h.__s))),y=h.props,m=h.state,h.__v=n,v)null==W.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==W.getDerivedStateFromProps&&k!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,P),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,P)||n.__v===t.__v)){for(n.__v!==t.__v&&(h.props=k,h.state=h.__s,h.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),x=0;x<h._sb.length;x++)h.__h.push(h._sb[x]);h._sb=[],h.__h.length&&u.push(h);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,P),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(y,m,g)}))}if(h.context=P,h.props=k,h.__P=e,h.__e=!1,w=A.__r,D=0,"prototype"in W&&W.prototype.render){for(h.state=h.__s,h.__d=!1,w&&w(n),d=h.render(h.props,h.state,h.context),T=0;T<h._sb.length;T++)h.__h.push(h._sb[T]);h._sb=[]}else do{h.__d=!1,w&&w(n),d=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++D<25);h.state=h.__s,null!=h.getChildContext&&(r=_(_({},r),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(g=h.getSnapshotBeforeUpdate(y,m)),a(e,q(M=null!=d&&d.type===i&&null==d.key?d.props.children:d)?M:[M],n,t,r,o,l,u,f,s,p),h.base=n.__e,n.__u&=-161,h.__h.length&&u.push(h),b&&(h.__E=h.__=null)}catch(e){n.__v=null,s||null!=l?(n.__e=f,n.__u|=s?160:32,l[l.indexOf(f)]=null):(n.__e=t.__e,n.__k=t.__k),A.__e(e,n,t)}else null==l&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=S(t.__e,n,t,r,o,l,u,s,p);(d=A.diffed)&&d(n)}function x(e,n,t){n.__d=void 0;for(var _=0;_<t.length;_++)w(t[_],t[++_],t[++_]);A.__c&&A.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){A.__e(e,n.__v)}}))}function S(e,n,t,_,o,l,u,i,c){var s,p,d,h,v,y,m,g=t.props,k=n.props,C=n.type;if("svg"===C&&(o=!0),null!=l)for(s=0;s<l.length;s++)if((v=l[s])&&"setAttribute"in v==!!C&&(C?v.localName===C:3===v.nodeType)){e=v,l[s]=null;break}if(null==e){if(null===C)return document.createTextNode(k);e=o?document.createElementNS("http://www.w3.org/2000/svg",C):document.createElement(C,k.is&&k),l=null,i=!1}if(null===C)g===k||i&&e.data===k||(e.data=k);else{if(l=l&&U.call(e.childNodes),g=t.props||V,!i&&null!=l)for(g={},s=0;s<e.attributes.length;s++)g[(v=e.attributes[s]).name]=v.value;for(s in g)v=g[s],"children"==s||("dangerouslySetInnerHTML"==s?d=v:"key"===s||s in k||b(e,s,null,v,o));for(s in k)v=k[s],"children"==s?h=v:"dangerouslySetInnerHTML"==s?p=v:"value"==s?y=v:"checked"==s?m=v:"key"===s||i&&"function"!=typeof v||g[s]===v||b(e,s,v,g[s],o);if(p)i||d&&(p.__html===d.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),n.__k=[];else if(d&&(e.innerHTML=""),a(e,q(h)?h:[h],n,t,_,o&&"foreignObject"!==C,l,u,l?l[0]:t.__k&&f(t,0),i,c),null!=l)for(s=l.length;s--;)null!=l[s]&&r(l[s]);i||(s="value",void 0!==y&&(y!==e[s]||"progress"===C&&!y||"option"===C&&y!==g[s])&&b(e,s,y,g[s],!1),s="checked",void 0!==m&&m!==e[s]&&b(e,s,m,g[s],!1))}return e}function w(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){A.__e(e,t)}}function D(e,n,t){var _,o;if(A.unmount&&A.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||w(_,null,n)),null!=(_=e.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(e){A.__e(e,n)}_.base=_.__P=null,e.__c=void 0}if(_=e.__k)for(o=0;o<_.length;o++)_[o]&&D(_[o],n,t||"function"!=typeof e.type);t||null==e.__e||r(e.__e),e.__=e.__e=e.__d=void 0}function E(e,n,t){return this.constructor(e,t)}function T(e,n,t){var _,r,l,u;A.__&&A.__(e,n),r=(_="function"==typeof t)?null:t&&t.__k||n.__k,l=[],u=[],P(n,e=(!_&&t||n).__k=o(i,null,[e]),r||V,V,void 0!==n.ownerSVGElement,!_&&t?[t]:r?null:n.firstChild?U.call(n.childNodes):null,l,!_&&t?t:r?r.__e:n.firstChild,_,u),x(l,e,u)}function M(e,n){T(e,n,M)}function W(e,n,t){var r,o,u,i,c=_({},e.props);for(u in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),n)"key"==u?r=n[u]:"ref"==u?o=n[u]:c[u]=void 0===n[u]&&void 0!==i?i[u]:n[u];return arguments.length>2&&(c.children=arguments.length>3?U.call(arguments,2):t),l(e.type,c,r||e.key,o||e.ref,null)}function L(e,n){var t={__c:n="__cC"+I++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,_;return this.getChildContext||(t=[],(_={})[n]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some((function(e){e.__e=!0,p(e)}))},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}t.r(n),t.d(n,"Component",(function(){return c})),t.d(n,"Fragment",(function(){return i})),t.d(n,"cloneElement",(function(){return W})),t.d(n,"createContext",(function(){return L})),t.d(n,"createElement",(function(){return o})),t.d(n,"createRef",(function(){return u})),t.d(n,"h",(function(){return o})),t.d(n,"hydrate",(function(){return M})),t.d(n,"isValidElement",(function(){return j})),t.d(n,"options",(function(){return A})),t.d(n,"render",(function(){return T})),t.d(n,"toChildArray",(function(){return y}));var U,A,O,j,R,H,N,F,I,V={},$=[],B=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q=Array.isArray;U=$.slice,A={__e:function(e,n,t,_){for(var r,o,l;n=n.__;)if((r=n.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(e)),l=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,_||{}),l=r.__d),l)return r.__E=r}catch(n){e=n}throw e}},O=0,j=function(e){return null!=e&&null==e.constructor},c.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof e&&(e=e(_({},t),this.props)),e&&_(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),p(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),p(this))},c.prototype.render=i,R=[],N="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F=function(e,n){return e.__v.__b-n.__v.__b},d.__r=0,I=0}});
//# sourceMappingURL=bundle.b86af.esm.js.map