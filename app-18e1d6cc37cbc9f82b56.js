webpackJsonp([0xd2a57dc1d883],{322:function(e,t,n){"use strict";function o(e,t,n){var o=a.map(function(n){if(n.plugin[e]){var o=n.plugin[e](t,n.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:n?[n]:[]}function r(e,t,n){return a.reduce(function(n,o){return o.plugin[e]?n.then(function(){return o.plugin[e](t,o.options)}):n},Promise.resolve())}t.__esModule=!0,t.apiRunner=o,t.apiRunnerAsync=r;var a=[{plugin:n(329),options:{plugins:[]}}]},323:function(e,t,n){"use strict";var o;t.components={"component---src-pages-404-js":n(434),"component---src-pages-index-js":n(435),"component---src-pages-page-2-js":n(436)},t.json=(o={"layout-index.json":n(85),"404.json":n(437)},o["layout-index.json"]=n(85),o["index.json"]=n(439),o["layout-index.json"]=n(85),o["page-2.json"]=n(440),o["layout-index.json"]=n(85),o["404-html.json"]=n(438),o),t.layouts={"component---src-layouts-index-js":n(433)}},324:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(6),l=o(c),s=n(10),f=o(s),d=n(184),p=o(d),g=n(75),h=o(g),m=function(e){var t=e.children;return l.default.createElement("div",null,t())},y=function(e){function t(n){r(this,t);var o=a(this,e.call(this));return o.state={location:n.location,pageResources:p.default.getResourcesForPathname(n.location.pathname)},o}return i(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var n=p.default.getResourcesForPathname(e.location.pathname);n?this.setState({location:e.location,pageResources:n}):p.default.getResourcesForPathname(e.location.pathname,function(n){t.setState({location:e.location,pageResources:n})})}},t.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(t){t.page.path===p.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})},t.prototype.shouldComponentUpdate=function(e,t){return!t.pageResources||(!(this.state.pageResources||!t.pageResources)||(this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath&&!t.pageResources.page.path))))},t.prototype.render=function(){return this.props.page?this.state.pageResources?(0,c.createElement)(this.state.pageResources.component,u({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:m,u({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},t}(l.default.Component);y.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},t.default=y,e.exports=t.default},75:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(453),a=o(r),i=(0,a.default)();e.exports=i},325:function(e,t,n){"use strict";var o=n(92),r={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var a=decodeURIComponent(n),i=a.slice(t.length);if(i.split("#").length>1&&(i=i.split("#").slice(0,-1).join("")),i.split("?").length>1&&(i=i.split("?").slice(0,-1).join("")),r[i])return r[i];var u=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(i,{path:e.path})||(0,o.matchPath)(i,{path:e.matchPath}))return u=e,r[i]=e,!0}else{if((0,o.matchPath)(i,{path:e.path,exact:!0}))return u=e,r[i]=e,!0;if((0,o.matchPath)(i,{path:e.path+"index.html"}))return u=e,r[i]=e,!0}return!1}),u}}},438:function(e,t,n){n(24),e.exports=function(e){return n.e(0xa2868bfb69fc,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(447)})})}},437:function(e,t,n){n(24),e.exports=function(e){return n.e(0xe70826b53c04,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(448)})})}},439:function(e,t,n){n(24),e.exports=function(e){return n.e(0x81b8806e4260,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(449)})})}},85:function(e,t,n){n(24),e.exports=function(e){return n.e(60335399758886,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(125)})})}},440:function(e,t,n){n(24),e.exports=function(e){return n.e(0x7b71d9db271c,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(450)})})}},433:function(e,t,n){n(24),e.exports=function(e){return n.e(0x67ef26645b2a,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(326)})})}},184:function(e,t,n){(function(t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(6),a=(o(r),n(325)),i=o(a),u=n(75),c=o(u),l=void 0,s={},f={},d={},p={},g={},h=[],m=[],y={},v=[],b={},w=function(e){return e&&e.default||e},_=void 0,R=!0;_=n(327)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(e){P(e,function(){v=v.filter(function(t){return t!==e}),_.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){_.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){_.onPostLoadPageResources(e)});var O=function(e,t){return b[e]>b[t]?1:b[e]<b[t]?-1:0},j=function(e,t){return y[e]>y[t]?1:y[e]<y[t]?-1:0},P=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(p[e])t.nextTick(function(){n(null,p[e])});else{var o="component---"===e.slice(0,12)?f.components[e]||f.layouts[e]:f.json[e];o(function(t,o){p[e]=o,n(t,o)})}},x=function(e,n){g[e]?t.nextTick(function(){n(null,g[e])}):P(e,function(t,o){if(t)n(t);else{var r=w(o());g[e]=r,n(t,r)}})},k=1,E={empty:function(){m=[],y={},b={},v=[],h=[]},addPagesArray:function(e){h=e;var t="";t="",l=(0,i.default)(e,t)},addDevRequires:function(e){s=e},addProdRequires:function(e){f=e},dequeue:function(e){return m.pop()},enqueue:function(e){if(!h.some(function(t){return t.path===e}))return!1;var t=1/k;k+=1,y[e]?y[e]+=1:y[e]=1,E.has(e)||m.unshift(e),m.sort(j);var n=l(e);return n.jsonName&&(b[n.jsonName]?b[n.jsonName]+=1+t:b[n.jsonName]=1+t,v.indexOf(n.jsonName)!==-1||p[n.jsonName]||v.unshift(n.jsonName)),n.componentChunkName&&(b[n.componentChunkName]?b[n.componentChunkName]+=1+t:b[n.componentChunkName]=1+t,v.indexOf(n.componentChunkName)!==-1||p[n.jsonName]||v.unshift(n.componentChunkName)),v.sort(O),_.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:b}},getPages:function(){return{pathArray:m,pathCount:y}},getPage:function(e){return l(e)},has:function(e){return m.some(function(t){return t===e})},getResourcesForPathname:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(l(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var t=e,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var r;if(n){if(o>=t.length)break;r=t[o++]}else{if(o=t.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()})),R=!1;var o=l(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,d[e])return t.nextTick(function(){n(d[e]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:d[e]})}),d[e];c.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,i=void 0,u=function(){if(r&&a&&(!o.layoutComponentChunkName||i)){d[e]={component:r,json:a,layout:i,page:o};var t={component:r,json:a,layout:i,page:o};n(t),c.default.emit("onPostLoadPageResources",{page:o,pageResources:t})}};return x(o.componentChunkName,function(e,t){e&&console.log("Loading the component for "+o.path+" failed"),r=t,u()}),x(o.jsonName,function(e,t){e&&console.log("Loading the JSON for "+o.path+" failed"),a=t,u()}),void(o.layoutComponentChunkName&&x(o.layoutComponentChunkName,function(e,t){e&&console.log("Loading the Layout for "+o.path+" failed"),i=t,u()}))},peek:function(e){return m.slice(-1)[0]},length:function(){return m.length},indexOf:function(e){return m.length-m.indexOf(e)-1}};e.exports=E}).call(t,n(45))},451:function(e,t){e.exports=[{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-page-2-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},327:function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,n=e.createResourceDownload,o=[],r=[],a=function(){var e=t();e&&(r.push(e),n(e))},i=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){i({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){i({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){i({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){i({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(322),i=n(6),u=o(i),c=n(217),l=o(c),s=n(92),f=n(444),d=n(123),p=o(d),g=n(412),h=o(g),m=n(75),y=o(m),v=n(451),b=o(v),w=n(452),_=o(w),R=n(324),O=o(R),j=n(323),P=o(j),x=n(184),k=o(x);n(402),window.___emitter=y.default,k.default.addPagesArray(b.default),k.default.addProdRequires(P.default),window.asyncRequires=P.default,window.___loader=k.default,window.matchPath=s.matchPath;var E=(0,p.default)(),C=_.default.reduce(function(e,t){return e[t.fromPath]=t,e},{}),N=function(e){var t=C[e];return null!=t&&(E.replace(t.toPath),!0)};N(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,t){N(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:t})}))}function t(e,t){var n=t.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===n)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&n(328);var o=function(e){function t(n){n.page.path===k.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",t),clearTimeout(o),window.___history.push(e))}var n=C[e];if(n&&(e=n.toPath),window.location.pathname!==e){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",t),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);k.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):y.default.on("onPostLoadPageResources",t)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:E.location,action:E.action});var c=(0,a.apiRunner)("replaceRouterComponent",{history:E})[0],d=function(e){var t=e.children;return u.default.createElement(s.Router,{history:E},t)},p=(0,s.withRouter)(O.default);k.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,i.createElement)(c?c:d,null,(0,i.createElement)(f.ScrollContext,{shouldUpdateScroll:t},(0,i.createElement)(p,{layout:!0,children:function(t){return(0,i.createElement)(s.Route,{render:function(n){e(n.history);var o=t?t:n;return k.default.getPage(o.location.pathname)?(0,i.createElement)(O.default,r({page:!0},o)):(0,i.createElement)(O.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,h.default)(function(){return l.default.render(u.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},452:function(e,t){e.exports=[]},328:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(75),a=o(r),i="/";i="/","serviceWorker"in navigator&&navigator.serviceWorker.register(i+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},329:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(142),a=o(r);a.default.initialize("UA-108370636-1"),t.onClientEntry=function(){a.default.set({page:window.location.pathname}),a.default.pageview(window.location.pathname)}},412:function(e,t,n){!function(t,n){e.exports=n()}("domready",function(){var e,t=[],n=document,o=n.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(r,e=function(){for(n.removeEventListener(r,e),a=1;e=t.shift();)e()}),function(e){a?setTimeout(e,0):t.push(e)}})},24:function(e,t,n){"use strict";function o(){function e(e){var t=o.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,o=document.querySelector("head"),r=n.e,a=n.s;n.e=function(o,i){var u=!1,c=!0,l=function(e){i&&(i(n,e),i=null)};return!a&&t&&t[o]?void l(!0):(r(o,function(){u||(u=!0,c?setTimeout(function(){l()}):l())}),void(u||(c=!1,e(function(){u||(u=!0,a?a[o]=void 0:(t||(t={}),t[o]=!0),l(!0))}))))}}o()},214:function(e,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,l=c&&c(Object);e.exports=function e(t,s,f){if("string"!=typeof s){if(l){var d=c(s);d&&d!==l&&e(t,d,f)}var p=a(s);i&&(p=p.concat(i(s)));for(var g=0;g<p.length;++g){var h=p[g];if(!(n[h]||o[h]||f&&f[h])){var m=u(s,h);try{r(t,h,m)}catch(e){}}}return t}return t}},453:function(e,t){function n(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).map(function(e){e(n)}),(e["*"]||[]).map(function(e){e(t,n)})}}}e.exports=n},45:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){h&&p&&(h=!1,p.length?g=p.concat(g):m=-1,g.length&&u())}function u(){if(!h){var e=r(i);h=!0;for(var t=g.length;t;){for(p=g,g=[];++m<t;)p&&p[m].run();m=-1,t=g.length}p=null,h=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var s,f,d=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var p,g=[],h=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];g.push(new c(e,t)),1!==g.length||h||r(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},142:function(e,t,n){!function(t,o){e.exports=o(n(6),n(10),n(7))}(this,function(e,t,n){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";function o(e){console.warn("[react-ga]",e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e){return e.replace(/^\s+|\s+$/g,"")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e){return(0,_.default)(e,D)}function u(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=n[0];if("function"==typeof q){if("string"!=typeof r)return void(0,C.default)("ga command must be a string");q.apply(void 0,n),Array.isArray(e)&&e.forEach(function(e){q.apply(void 0,a([e+"."+r].concat(n.slice(1))))})}}function c(e,t){return e?(t&&(t.debug&&t.debug===!0&&(S=!0),t.titleCase===!1&&(D=!1)),void(t&&t.gaOptions?q("create",e,t.gaOptions):q("create",e,"auto"))):void(0,C.default)("gaTrackingID is required in initialize()")}function l(e,t){return"undefined"!=typeof window&&((0,k.default)(),q=function(){var e;return(e=window).ga.apply(e,arguments)},Array.isArray(e)?e.forEach(function(e){return"object"!==("undefined"==typeof e?"undefined":b(e))?void(0,C.default)("All configs must be an object"):void c(e.trackingId,e)}):c(e,t),!0)}function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(q.apply(void 0,t),S&&((0,T.default)("called ga('arguments');"),(0,T.default)("with arguments: "+JSON.stringify(t)))),window.ga}function f(e,t){return e?"object"!==("undefined"==typeof e?"undefined":b(e))?void(0,C.default)("Expected `fieldsObject` arg to be an Object"):(0===Object.keys(e).length&&(0,C.default)("empty `fieldsObject` given to .set()"),u(t,"set",e),void(S&&((0,T.default)("called ga('set', fieldsObject);"),(0,T.default)("with fieldsObject: "+JSON.stringify(e))))):void(0,C.default)("`fieldsObject` is required in .set()")}function d(e,t){u(t,"send",e),S&&((0,T.default)("called ga('send', fieldObject);"),(0,T.default)("with fieldObject: "+JSON.stringify(e)),(0,T.default)("with trackers: "+JSON.stringify(t)))}function p(e,t){if(!e)return void(0,C.default)("path is required in .pageview()");var n=(0,P.default)(e);return""===n?void(0,C.default)("path cannot be an empty string in .pageview()"):void("function"==typeof s&&(u(t,"send","pageview",n),S&&((0,T.default)("called ga('send', 'pageview', path);"),(0,T.default)("with path: "+n))))}function g(e,t){if(!e)return void(0,C.default)("modalName is required in .modalview(modalName)");var n=(0,O.default)((0,P.default)(e));if(""===n)return void(0,C.default)("modalName cannot be an empty string or a single / in .modalview()");if("function"==typeof s){var o="/modal/"+n;u(t,"send","pageview",o),S&&((0,T.default)("called ga('send', 'pageview', path);"),(0,T.default)("with path: "+o))}}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,o=e.value,r=e.label,a=arguments[1];if("function"==typeof s){if(!t||!n||!o||"number"!=typeof o)return void(0,C.default)("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number");var u={hitType:"timing",timingCategory:i(t),timingVar:i(n),timingValue:o};r&&(u.timingLabel=i(r)),d(u,a)}}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=e.category,o=e.action,a=e.label,u=e.value,c=e.nonInteraction,l=e.transport,f=r(e,["category","action","label","value","nonInteraction","transport"]);if("function"==typeof s){if(!n||!o)return void(0,C.default)("args.category AND args.action are required in event()");var p={hitType:"event",eventCategory:i(n),eventAction:i(o)};a&&(p.eventLabel=i(a)),"undefined"!=typeof u&&("number"!=typeof u?(0,C.default)("Expected `args.value` arg to be a Number."):p.eventValue=u),"undefined"!=typeof c&&("boolean"!=typeof c?(0,C.default)("`args.nonInteraction` must be a boolean."):p.nonInteraction=c),"undefined"!=typeof l&&("string"!=typeof l?(0,C.default)("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(l)===-1&&(0,C.default)("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),p.transport=l)),Object.keys(f).filter(function(e){return"dimension"===e.substr(0,"dimension".length)}).forEach(function(e){p[e]=f[e]}),Object.keys(f).filter(function(e){return"metric"===e.substr(0,"metric".length)}).forEach(function(e){p[e]=f[e]}),d(p,t)}}function y(e,t){var n=e.description,o=e.fatal;if("function"==typeof s){var r={hitType:"exception"};n&&(r.exDescription=i(n)),"undefined"!=typeof o&&("boolean"!=typeof o?(0,C.default)("`args.fatal` must be a boolean."):r.exFatal=o),d(r,t)}}function v(e,t,n){if("function"!=typeof t)return void(0,C.default)("hitCallback function is required");if("function"==typeof s){if(!e||!e.label)return void(0,C.default)("args.label is required in outboundLink()");var o={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:i(e.label)},r=!1,a=function(){r=!0,t()},u=setTimeout(a,250),c=function(){clearTimeout(u),r||t()};o.hitCallback=c,d(o,n)}else setTimeout(t,0)}Object.defineProperty(t,"__esModule",{value:!0}),t.OutboundLink=t.plugin=void 0;var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.initialize=l,t.ga=s,t.set=f,t.send=d,t.pageview=p,t.modalview=g,t.timing=h,t.event=m,t.exception=y,t.outboundLink=v;var w=n(3),_=o(w),R=n(6),O=o(R),j=n(1),P=o(j),x=n(7),k=o(x),E=n(0),C=o(E),N=n(8),T=o(N),L=n(9),A=o(L),S=!1,D=!0,q=function(){(0,C.default)("ReactGA.initialize must be called first")},M=t.plugin={require:function(e,t){if("function"==typeof s){if(!e)return void(0,C.default)("`name` is required in .require()");var n=(0,P.default)(e);if(""===n)return void(0,C.default)("`name` cannot be an empty string in .require()");if(t){if("object"!==("undefined"==typeof t?"undefined":b(t)))return void(0,C.default)("Expected `options` arg to be an Object");0===Object.keys(t).length&&(0,C.default)("Empty `options` given to .require()"),s("require",n,t),S&&(0,T.default)("called ga('require', '"+n+"', "+JSON.stringify(t))}else s("require",n),S&&(0,T.default)("called ga('require', '"+n+"');")}},execute:function(e,t){var n=void 0,o=void 0;if(1===(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(o=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"function"==typeof s)if("string"!=typeof e)(0,C.default)("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)(0,C.default)("Expected `action` arg to be a String.");else{var r=e+":"+t;n=n||null,o&&n?(s(r,o,n),S&&((0,T.default)("called ga('"+r+"');"),(0,T.default)('actionType: "'+o+'" with payload: '+JSON.stringify(n)))):n?(s(r,n),S&&((0,T.default)("called ga('"+r+"');"),(0,T.default)("with payload: "+JSON.stringify(n)))):(s(r),S&&(0,T.default)("called ga('"+r+"');"))}}};A.default.origTrackLink=A.default.trackLink,A.default.trackLink=v;var U=t.OutboundLink=A.default;t.default={initialize:l,ga:s,set:f,send:d,pageview:p,modalview:g,timing:h,event:m,exception:y,plugin:M,outboundLink:v,OutboundLink:U}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return(0,i.default)(e)?((0,s.default)("This arg looks like an email address, redacting."),f):t?(0,c.default)(e):e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var a=n(4),i=o(a),u=n(5),c=o(u),l=n(0),s=o(l),f="REDACTED (Potential Email Address)"},function(e,t,n){"use strict";function o(e){return/[^@]+@[^@]+/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return(0,i.default)(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(u)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var a=n(1),i=o(a),u=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i},function(e,t,n){"use strict";function o(e){return"/"===e.substring(0,1)?e.substring(1):e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){!function(e,t,n,o,r,a,i){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,a=t.createElement(n),i=t.getElementsByTagName(n)[0],a.async=1,a.src=o,i.parentNode.insertBefore(a,i)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga")}},function(e,t,n){"use strict";function o(e){console.info("[react-ga]",e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(10),l=o(c),s=n(11),f=o(s),d=n(12),p=o(d),g=n(0),h=o(g),m="_blank",y=1,v=function(e){function t(){var e,n,o,i;r(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.handleClick=function(e){var n=o.props,r=n.target,a=n.eventLabel,i=n.to,u=n.onClick,c={label:a},l=r!==m,s=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===y);l&&s?(e.preventDefault(),t.trackLink(c,function(){window.location.href=i})):t.trackLink(c,function(){}),u&&u(e)},i=n,a(o,i)}return i(t,e),u(t,[{key:"render",value:function(){var e=(0,p.default)({},this.props,{href:this.props.to,onClick:this.handleClick});return delete e.eventLabel,l.default.createElement("a",e)}}]),t}(c.Component);v.propTypes={eventLabel:f.default.string.isRequired,target:f.default.string,to:f.default.string,onClick:f.default.func},v.defaultProps={target:null,to:null,onClick:null},v.trackLink=function(){(0,h.default)("ga tracking not enabled")},t.default=v},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}])})},434:function(e,t,n){n(24),e.exports=function(e){return n.e(0x9427c64ab85d,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(331)})})}},435:function(e,t,n){n(24),e.exports=function(e){return n.e(35783957827783,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(332)})})}},436:function(e,t,n){n(24),e.exports=function(e){return n.e(0xc6c285f8fd10,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(333)})})}}});
//# sourceMappingURL=app-18e1d6cc37cbc9f82b56.js.map