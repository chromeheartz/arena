/** ===============================================================================================================================================
 *
 * OG$ jQuery 충돌방지 별칭
 */
var OG$;
try {
    ( OGCallJQuery = function(){
        if(typeof jQuery === 'undefined'){
            !function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){var n=[],r=n.slice,i=n.concat,o=n.push,a=n.indexOf,s={},l=s.toString,u=s.hasOwnProperty,c={},d="1.11.2",f=function(e,t){return new f.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,h=/^-ms-/,m=/-([\da-z])/gi,g=function(e,t){return t.toUpperCase()};function v(e){var t=e.length,n=f.type(e);return"function"!==n&&!f.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}f.fn=f.prototype={jquery:d,constructor:f,selector:"",length:0,toArray:function(){return r.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:r.call(this)},pushStack:function(e){var t=f.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return f.each(this,e,t)},map:function(e){return this.pushStack(f.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:o,sort:n.sort,splice:n.splice},f.extend=f.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||f.isFunction(a)||(a={}),s===l&&(a=this,s--);l>s;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],a!==(n=i[r])&&(u&&n&&(f.isPlainObject(n)||(t=f.isArray(n)))?(t?(t=!1,o=e&&f.isArray(e)?e:[]):o=e&&f.isPlainObject(e)?e:{},a[r]=f.extend(u,o,n)):void 0!==n&&(a[r]=n));return a},f.extend({expando:"jQuery"+(d+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===f.type(e)},isArray:Array.isArray||function(e){return"array"===f.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!f.isArray(e)&&e-parseFloat(e)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==f.type(e)||e.nodeType||f.isWindow(e))return!1;try{if(e.constructor&&!u.call(e,"constructor")&&!u.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(c.ownLast)for(t in e)return u.call(e,t);for(t in e);return void 0===t||u.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?s[l.call(e)]||"object":typeof e},globalEval:function(t){t&&f.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(h,"ms-").replace(m,g)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r=0,i=e.length,o=v(e);if(n){if(o)for(;i>r&&!1!==t.apply(e[r],n);r++);else for(r in e)if(!1===t.apply(e[r],n))break}else if(o)for(;i>r&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(v(Object(e))?f.merge(n,"string"==typeof e?[e]:e):o.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(a)return a.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;)e[i++]=t[r++];if(n!=n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;o>i;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,o=0,a=e.length,s=[];if(v(e))for(;a>o;o++)null!=(r=t(e[o],o,n))&&s.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&s.push(r);return i.apply([],s)},guid:1,proxy:function(e,t){var n,i,o;return"string"==typeof t&&(o=e[t],t=e,e=o),f.isFunction(e)?(n=r.call(arguments,2),(i=function(){return e.apply(t||this,n.concat(r.call(arguments)))}).guid=e.guid=e.guid||f.guid++,i):void 0},now:function(){return+new Date},support:c}),f.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){s["[object "+t+"]"]=t.toLowerCase()});var y=function(e){var t,n,r,i,o,a,s,l,u,c,d,f,p,h,m,g,v,y,b,x="sizzle"+1*new Date,w=e.document,T=0,C=0,N=ae(),E=ae(),k=ae(),S=function(e,t){return e===t&&(d=!0),0},A=1<<31,D={}.hasOwnProperty,j=[],L=j.pop,H=j.push,q=j.push,_=j.slice,M=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},F="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",O="[\\x20\\t\\r\\n\\f]",B="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",P=B.replace("w","w#"),R="\\["+O+"*("+B+")(?:"+O+"*([*^$|!~]?=)"+O+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+P+"))|)"+O+"*\\]",W=":("+B+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+R+")*)|.*)\\)|)",$=new RegExp(O+"+","g"),z=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),I=new RegExp("^"+O+"*,"+O+"*"),X=new RegExp("^"+O+"*([>+~]|"+O+")"+O+"*"),U=new RegExp("="+O+"*([^\\]'\"]*?)"+O+"*\\]","g"),V=new RegExp(W),J=new RegExp("^"+P+"$"),Y={ID:new RegExp("^#("+B+")"),CLASS:new RegExp("^\\.("+B+")"),TAG:new RegExp("^("+B.replace("w","w*")+")"),ATTR:new RegExp("^"+R),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),bool:new RegExp("^(?:"+F+")$","i"),needsContext:new RegExp("^"+O+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=/'|\\/g,ne=new RegExp("\\\\([\\da-f]{1,6}"+O+"?|("+O+")|.)","ig"),re=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},ie=function(){f()};try{q.apply(j=_.call(w.childNodes),w.childNodes),j[w.childNodes.length].nodeType}catch(e){q={apply:j.length?function(e,t){H.apply(e,_.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function oe(e,t,r,i){var o,s,u,c,d,h,v,y,T,C;if((t?t.ownerDocument||t:w)!==p&&f(t),r=r||[],c=(t=t||p).nodeType,"string"!=typeof e||!e||1!==c&&9!==c&&11!==c)return r;if(!i&&m){if(11!==c&&(o=Z.exec(e)))if(u=o[1]){if(9===c){if(!(s=t.getElementById(u))||!s.parentNode)return r;if(s.id===u)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(u))&&b(t,s)&&s.id===u)return r.push(s),r}else{if(o[2])return q.apply(r,t.getElementsByTagName(e)),r;if((u=o[3])&&n.getElementsByClassName)return q.apply(r,t.getElementsByClassName(u)),r}if(n.qsa&&(!g||!g.test(e))){if(y=v=x,T=t,C=1!==c&&e,1===c&&"object"!==t.nodeName.toLowerCase()){for(h=a(e),(v=t.getAttribute("id"))?y=v.replace(te,"\\$&"):t.setAttribute("id",y),y="[id='"+y+"'] ",d=h.length;d--;)h[d]=y+ge(h[d]);T=ee.test(e)&&he(t.parentNode)||t,C=h.join(",")}if(C)try{return q.apply(r,T.querySelectorAll(C)),r}catch(e){}finally{v||t.removeAttribute("id")}}}return l(e.replace(z,"$1"),t,r,i)}function ae(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function se(e){return e[x]=!0,e}function le(e){var t=p.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ue(e,t){for(var n=e.split("|"),i=e.length;i--;)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||A)-(~e.sourceIndex||A);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function de(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function fe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pe(e){return se(function(t){return t=+t,se(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function he(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},f=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==p&&9===a.nodeType&&a.documentElement?(p=a,h=a.documentElement,(i=a.defaultView)&&i!==i.top&&(i.addEventListener?i.addEventListener("unload",ie,!1):i.attachEvent&&i.attachEvent("onunload",ie)),m=!o(a),n.attributes=le(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=le(function(e){return e.appendChild(a.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=K.test(a.getElementsByClassName),n.getById=le(function(e){return h.appendChild(e).id=x,!a.getElementsByName||!a.getElementsByName(x).length}),n.getById?(r.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},r.filter.ID=function(e){var t=e.replace(ne,re);return function(e){return e.getAttribute("id")===t}}):(delete r.find.ID,r.filter.ID=function(e){var t=e.replace(ne,re);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){return m?t.getElementsByClassName(e):void 0},v=[],g=[],(n.qsa=K.test(a.querySelectorAll))&&(le(function(e){h.appendChild(e).innerHTML="<a id='"+x+"'></a><select id='"+x+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+O+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+O+"*(?:value|"+F+")"),e.querySelectorAll("[id~="+x+"-]").length||g.push("~="),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+x+"+*").length||g.push(".#.+[+~]")}),le(function(e){var t=a.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+O+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(n.matchesSelector=K.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&le(function(e){n.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),v.push("!=",W)}),g=g.length&&new RegExp(g.join("|")),v=v.length&&new RegExp(v.join("|")),t=K.test(h.compareDocumentPosition),b=t||K.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},S=t?function(e,t){if(e===t)return d=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===a||e.ownerDocument===w&&b(w,e)?-1:t===a||t.ownerDocument===w&&b(w,t)?1:c?M(c,e)-M(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return d=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],l=[t];if(!i||!o)return e===a?-1:t===a?1:i?-1:o?1:c?M(c,e)-M(c,t):0;if(i===o)return ce(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;s[r]===l[r];)r++;return r?ce(s[r],l[r]):s[r]===w?-1:l[r]===w?1:0},a):p},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&f(e),t=t.replace(U,"='$1']"),!(!n.matchesSelector||!m||v&&v.test(t)||g&&g.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,p,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==p&&f(e),b(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==p&&f(e);var i=r.attrHandle[t.toLowerCase()],o=i&&D.call(r.attrHandle,t.toLowerCase())?i(e,t,!m):void 0;return void 0!==o?o:n.attributes||!m?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(d=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(S),d){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ne,re),e[3]=(e[3]||e[4]||e[5]||"").replace(ne,re),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Y.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&V.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ne,re).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,d,f,p,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s;if(g){if(o){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(p=(u=(c=g[x]||(g[x]={}))[e]||[])[0]===T&&u[1],f=u[0]===T&&u[2],d=p&&g.childNodes[p];d=++p&&d&&d[m]||(f=p=0)||h.pop();)if(1===d.nodeType&&++f&&d===t){c[e]=[T,p,f];break}}else if(y&&(u=(t[x]||(t[x]={}))[e])&&u[0]===T)f=u[1];else for(;(d=++p&&d&&d[m]||(f=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++f||(y&&((d[x]||(d[x]={}))[e]=[T,f]),d!==t)););return(f-=i)===r||f%r==0&&f/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[x]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)e[r=M(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(z,"$1"));return r[x]?se(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(ne,re),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return J.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(ne,re).toLowerCase(),function(t){var n;do{if(n=m?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:pe(function(){return[0]}),last:pe(function(e,t){return[t-1]}),eq:pe(function(e,t,n){return[0>n?n+t:n]}),even:pe(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:pe(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:pe(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:pe(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=de(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=fe(t);function me(){}function ge(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function ve(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=C++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,l,u=[T,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if((s=(l=t[x]||(t[x]={}))[r])&&s[0]===T&&s[1]===o)return u[2]=s[2];if(l[r]=u,u[2]=e(t,n,a))return!0}}}function ye(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function xe(e,t,n,r,i,o){return r&&!r[x]&&(r=xe(r)),i&&!i[x]&&(i=xe(i,o)),se(function(o,a,s,l){var u,c,d,f=[],p=[],h=a.length,m=o||function(e,t,n){for(var r=0,i=t.length;i>r;r++)oe(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),g=!e||!o&&t?m:be(m,f,e,s,l),v=n?i||(o?e:h||r)?[]:a:g;if(n&&n(g,v,s,l),r)for(u=be(v,p),r(u,[],s,l),c=u.length;c--;)(d=u[c])&&(v[p[c]]=!(g[p[c]]=d));if(o){if(i||e){if(i){for(u=[],c=v.length;c--;)(d=v[c])&&u.push(g[c]=d);i(null,v=[],u,l)}for(c=v.length;c--;)(d=v[c])&&(u=i?M(o,d):f[c])>-1&&(o[u]=!(a[u]=d))}}else v=be(v===a?v.splice(h,v.length):v),i?i(null,a,v,l):q.apply(a,v)})}function we(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],l=a?1:0,c=ve(function(e){return e===t},s,!0),d=ve(function(e){return M(t,e)>-1},s,!0),f=[function(e,n,r){var i=!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):d(e,n,r));return t=null,i}];o>l;l++)if(n=r.relative[e[l].type])f=[ve(ye(f),n)];else{if((n=r.filter[e[l].type].apply(null,e[l].matches))[x]){for(i=++l;o>i&&!r.relative[e[i].type];i++);return xe(l>1&&ye(f),l>1&&ge(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,i>l&&we(e.slice(l,i)),o>i&&we(e=e.slice(i)),o>i&&ge(e))}f.push(n)}return ye(f)}function Te(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,l,c){var d,f,h,m=0,g="0",v=o&&[],y=[],b=u,x=o||i&&r.find.TAG("*",c),w=T+=null==b?1:Math.random()||.1,C=x.length;for(c&&(u=a!==p&&a);g!==C&&null!=(d=x[g]);g++){if(i&&d){for(f=0;h=e[f++];)if(h(d,a,s)){l.push(d);break}c&&(T=w)}n&&((d=!h&&d)&&m--,o&&v.push(d))}if(m+=g,n&&g!==m){for(f=0;h=t[f++];)h(v,y,a,s);if(o){if(m>0)for(;g--;)v[g]||y[g]||(y[g]=L.call(l));y=be(y)}q.apply(l,y),c&&!o&&y.length>0&&m+t.length>1&&oe.uniqueSort(l)}return c&&(T=w,u=b),v};return n?se(o):o}return me.prototype=r.filters=r.pseudos,r.setFilters=new me,a=oe.tokenize=function(e,t){var n,i,o,a,s,l,u,c=E[e+" "];if(c)return t?0:c.slice(0);for(s=e,l=[],u=r.preFilter;s;){for(a in(!n||(i=I.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),n=!1,(i=X.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(z," ")}),s=s.slice(n.length)),r.filter)!(i=Y[a].exec(s))||u[a]&&!(i=u[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):E(e,l).slice(0)},s=oe.compile=function(e,t){var n,r=[],i=[],o=k[e+" "];if(!o){for(t||(t=a(e)),n=t.length;n--;)(o=we(t[n]))[x]?r.push(o):i.push(o);(o=k(e,Te(i,r))).selector=e}return o},l=oe.select=function(e,t,i,o){var l,u,c,d,f,p="function"==typeof e&&e,h=!o&&a(e=p.selector||e);if(i=i||[],1===h.length){if((u=h[0]=h[0].slice(0)).length>2&&"ID"===(c=u[0]).type&&n.getById&&9===t.nodeType&&m&&r.relative[u[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(ne,re),t)||[])[0]))return i;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}for(l=Y.needsContext.test(e)?0:u.length;l--&&(c=u[l],!r.relative[d=c.type]);)if((f=r.find[d])&&(o=f(c.matches[0].replace(ne,re),ee.test(u[0].type)&&he(t.parentNode)||t))){if(u.splice(l,1),!(e=o.length&&ge(u)))return q.apply(i,o),i;break}}return(p||s(e,h))(o,t,!m,i,ee.test(e)&&he(t.parentNode)||t),i},n.sortStable=x.split("").sort(S).join("")===x,n.detectDuplicates=!!d,f(),n.sortDetached=le(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),le(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ue("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&le(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ue("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),le(function(e){return null==e.getAttribute("disabled")})||ue(F,function(e,t,n){var r;return n?void 0:!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);f.find=y,f.expr=y.selectors,f.expr[":"]=f.expr.pseudos,f.unique=y.uniqueSort,f.text=y.getText,f.isXMLDoc=y.isXML,f.contains=y.contains;var b=f.expr.match.needsContext,x=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function T(e,t,n){if(f.isFunction(t))return f.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return f.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(w.test(t))return f.filter(t,e,n);t=f.filter(t,e)}return f.grep(e,function(e){return f.inArray(e,t)>=0!==n})}f.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?f.find.matchesSelector(r,e)?[r]:[]:f.find.matches(e,f.grep(t,function(e){return 1===e.nodeType}))},f.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(f(e).filter(function(){for(t=0;i>t;t++)if(f.contains(r[t],this))return!0}));for(t=0;i>t;t++)f.find(e,r[t],n);return(n=this.pushStack(i>1?f.unique(n):n)).selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?f(e):e||[],!1).length}});var C,N=e.document,E=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(f.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(!(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:E.exec(e))||!n[1]&&t)return!t||t.jquery?(t||C).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof f?t[0]:t,f.merge(this,f.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:N,!0)),x.test(n[1])&&f.isPlainObject(t))for(n in t)f.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if((r=N.getElementById(n[2]))&&r.parentNode){if(r.id!==n[2])return C.find(e);this.length=1,this[0]=r}return this.context=N,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):f.isFunction(e)?void 0!==C.ready?C.ready(e):e(f):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),f.makeArray(e,this))}).prototype=f.fn,C=f(N);var k=/^(?:parents|prev(?:Until|All))/,S={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}f.extend({dir:function(e,t,n){for(var r=[],i=e[t];i&&9!==i.nodeType&&(void 0===n||1!==i.nodeType||!f(i).is(n));)1===i.nodeType&&r.push(i),i=i[t];return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),f.fn.extend({has:function(e){var t,n=f(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(f.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=b.test(e)||"string"!=typeof e?f(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&f.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?f.unique(o):o)},index:function(e){return e?"string"==typeof e?f.inArray(this[0],f(e)):f.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(f.unique(f.merge(this.get(),f(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),f.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return f.dir(e,"parentNode")},parentsUntil:function(e,t,n){return f.dir(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return f.dir(e,"nextSibling")},prevAll:function(e){return f.dir(e,"previousSibling")},nextUntil:function(e,t,n){return f.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return f.dir(e,"previousSibling",n)},siblings:function(e){return f.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return f.sibling(e.firstChild)},contents:function(e){return f.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:f.merge([],e.childNodes)}},function(e,t){f.fn[e]=function(n,r){var i=f.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=f.filter(r,i)),this.length>1&&(S[e]||(i=f.unique(i)),k.test(e)&&(i=i.reverse())),this.pushStack(i)}});var D,j=/\S+/g,L={};function H(){N.addEventListener?(N.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(N.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))}function q(){(N.addEventListener||"load"===event.type||"complete"===N.readyState)&&(H(),f.ready())}f.Callbacks=function(e){e="string"==typeof e?L[e]||function(e){var t=L[e]={};return f.each(e.match(j)||[],function(e,n){t[n]=!0}),t}(e):f.extend({},e);var t,n,r,i,o,a,s=[],l=!e.once&&[],u=function(d){for(n=e.memory&&d,r=!0,o=a||0,a=0,i=s.length,t=!0;s&&i>o;o++)if(!1===s[o].apply(d[0],d[1])&&e.stopOnFalse){n=!1;break}t=!1,s&&(l?l.length&&u(l.shift()):n?s=[]:c.disable())},c={add:function(){if(s){var r=s.length;!function t(n){f.each(n,function(n,r){var i=f.type(r);"function"===i?e.unique&&c.has(r)||s.push(r):r&&r.length&&"string"!==i&&t(r)})}(arguments),t?i=s.length:n&&(a=r,u(n))}return this},remove:function(){return s&&f.each(arguments,function(e,n){for(var r;(r=f.inArray(n,s,r))>-1;)s.splice(r,1),t&&(i>=r&&i--,o>=r&&o--)}),this},has:function(e){return e?f.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],i=0,this},disable:function(){return s=l=n=void 0,this},disabled:function(){return!s},lock:function(){return l=void 0,n||c.disable(),this},locked:function(){return!l},fireWith:function(e,n){return!s||r&&!l||(n=[e,(n=n||[]).slice?n.slice():n],t?l.push(n):u(n)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},f.extend({Deferred:function(e){var t=[["resolve","done",f.Callbacks("once memory"),"resolved"],["reject","fail",f.Callbacks("once memory"),"rejected"],["notify","progress",f.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return f.Deferred(function(n){f.each(t,function(t,o){var a=f.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&f.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?f.extend(e,r):r}},i={};return r.pipe=r.then,f.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,i,o=0,a=r.call(arguments),s=a.length,l=1!==s||e&&f.isFunction(e.promise)?s:0,u=1===l?e:f.Deferred(),c=function(e,n,i){return function(o){n[e]=this,i[e]=arguments.length>1?r.call(arguments):o,i===t?u.notifyWith(n,i):--l||u.resolveWith(n,i)}};if(s>1)for(t=new Array(s),n=new Array(s),i=new Array(s);s>o;o++)a[o]&&f.isFunction(a[o].promise)?a[o].promise().done(c(o,i,a)).fail(u.reject).progress(c(o,n,t)):--l;return l||u.resolveWith(i,a),u.promise()}}),f.fn.ready=function(e){return f.ready.promise().done(e),this},f.extend({isReady:!1,readyWait:1,holdReady:function(e){e?f.readyWait++:f.ready(!0)},ready:function(e){if(!0===e?!--f.readyWait:!f.isReady){if(!N.body)return setTimeout(f.ready);f.isReady=!0,!0!==e&&--f.readyWait>0||(D.resolveWith(N,[f]),f.fn.triggerHandler&&(f(N).triggerHandler("ready"),f(N).off("ready")))}}}),f.ready.promise=function(t){if(!D)if(D=f.Deferred(),"complete"===N.readyState)setTimeout(f.ready);else if(N.addEventListener)N.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{N.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var n=!1;try{n=null==e.frameElement&&N.documentElement}catch(e){}n&&n.doScroll&&function e(){if(!f.isReady){try{n.doScroll("left")}catch(t){return setTimeout(e,50)}H(),f.ready()}}()}return D.promise(t)};var _,M="undefined";for(_ in f(c))break;c.ownLast="0"!==_,c.inlineBlockNeedsLayout=!1,f(function(){var e,t,n,r;(n=N.getElementsByTagName("body")[0])&&n.style&&(t=N.createElement("div"),(r=N.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),typeof t.style.zoom!==M&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",c.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(r))}),function(){var e=N.createElement("div");if(null==c.deleteExpando){c.deleteExpando=!0;try{delete e.test}catch(e){c.deleteExpando=!1}}e=null}(),f.acceptData=function(e){var t=f.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||!0!==t&&e.getAttribute("classid")===t)};var F=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function B(e,t,n){if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(O,"-$1").toLowerCase();if("string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:F.test(n)?f.parseJSON(n):n)}catch(e){}f.data(e,t,n)}else n=void 0}return n}function P(e){var t;for(t in e)if(("data"!==t||!f.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function R(e,t,r,i){if(f.acceptData(e)){var o,a,s=f.expando,l=e.nodeType,u=l?f.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||void 0!==r||"string"!=typeof t)return c||(c=l?e[s]=n.pop()||f.guid++:s),u[c]||(u[c]=l?{}:{toJSON:f.noop}),("object"==typeof t||"function"==typeof t)&&(i?u[c]=f.extend(u[c],t):u[c].data=f.extend(u[c].data,t)),a=u[c],i||(a.data||(a.data={}),a=a.data),void 0!==r&&(a[f.camelCase(t)]=r),"string"==typeof t?null==(o=a[t])&&(o=a[f.camelCase(t)]):o=a,o}}function W(e,t,n){if(f.acceptData(e)){var r,i,o=e.nodeType,a=o?f.cache:e,s=o?e[f.expando]:f.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){f.isArray(t)?t=t.concat(f.map(t,f.camelCase)):t in r?t=[t]:t=(t=f.camelCase(t))in r?[t]:t.split(" "),i=t.length;for(;i--;)delete r[t[i]];if(n?!P(r):!f.isEmptyObject(r))return}(n||(delete a[s].data,P(a[s])))&&(o?f.cleanData([e],!0):c.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}f.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return!!(e=e.nodeType?f.cache[e[f.expando]]:e[f.expando])&&!P(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)}}),f.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=f.data(o),1===o.nodeType&&!f._data(o,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&(0===(r=a[n].name).indexOf("data-")&&B(o,r=f.camelCase(r.slice(5)),i[r]));f._data(o,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){f.data(this,e)}):arguments.length>1?this.each(function(){f.data(this,e,t)}):o?B(o,e,f.data(o,e)):void 0},removeData:function(e){return this.each(function(){f.removeData(this,e)})}}),f.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=f._data(e,t),n&&(!r||f.isArray(n)?r=f._data(e,t,f.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=f.queue(e,t),r=n.length,i=n.shift(),o=f._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){f.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return f._data(e,n)||f._data(e,n,{empty:f.Callbacks("once memory").add(function(){f._removeData(e,t+"queue"),f._removeData(e,n)})})}}),f.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?f.queue(this[0],e):void 0===t?this:this.each(function(){var n=f.queue(this,e,t);f._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&f.dequeue(this,e)})},dequeue:function(e){return this.each(function(){f.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=f.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=f._data(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,z=["Top","Right","Bottom","Left"],I=function(e,t){return e=t||e,"none"===f.css(e,"display")||!f.contains(e.ownerDocument,e)},X=f.access=function(e,t,n,r,i,o,a){var s=0,l=e.length,u=null==n;if("object"===f.type(n))for(s in i=!0,n)f.access(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,f.isFunction(r)||(a=!0),u&&(a?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(f(e),n)})),t))for(;l>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:u?t.call(e):l?t(e[0],n):o},U=/^(?:checkbox|radio)$/i;!function(){var e=N.createElement("input"),t=N.createElement("div"),n=N.createDocumentFragment();if(t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c.leadingWhitespace=3===t.firstChild.nodeType,c.tbody=!t.getElementsByTagName("tbody").length,c.htmlSerialize=!!t.getElementsByTagName("link").length,c.html5Clone="<:nav></:nav>"!==N.createElement("nav").cloneNode(!0).outerHTML,e.type="checkbox",e.checked=!0,n.appendChild(e),c.appendChecked=e.checked,t.innerHTML="<textarea>x</textarea>",c.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,n.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",c.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,c.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",function(){c.noCloneEvent=!1}),t.cloneNode(!0).click()),null==c.deleteExpando){c.deleteExpando=!0;try{delete t.test}catch(e){c.deleteExpando=!1}}}(),function(){var t,n,r=N.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(c[t+"Bubbles"]=n in e)||(r.setAttribute(n,"t"),c[t+"Bubbles"]=!1===r.attributes[n].expando);r=null}();var V=/^(?:input|select|textarea)$/i,J=/^key/,Y=/^(?:mouse|pointer|contextmenu)|click/,G=/^(?:focusinfocus|focusoutblur)$/,Q=/^([^.]*)(?:\.(.+)|)$/;function K(){return!0}function Z(){return!1}function ee(){try{return N.activeElement}catch(e){}}function te(e){var t=ne.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}f.event={global:{},add:function(e,t,n,r,i){var o,a,s,l,u,c,d,p,h,m,g,v=f._data(e);if(v){for(n.handler&&(n=(l=n).handler,i=l.selector),n.guid||(n.guid=f.guid++),(a=v.events)||(a=v.events={}),(c=v.handle)||((c=v.handle=function(e){return typeof f===M||e&&f.event.triggered===e.type?void 0:f.event.dispatch.apply(c.elem,arguments)}).elem=e),s=(t=(t||"").match(j)||[""]).length;s--;)h=g=(o=Q.exec(t[s])||[])[1],m=(o[2]||"").split(".").sort(),h&&(u=f.event.special[h]||{},h=(i?u.delegateType:u.bindType)||h,u=f.event.special[h]||{},d=f.extend({type:h,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&f.expr.match.needsContext.test(i),namespace:m.join(".")},l),(p=a[h])||((p=a[h]=[]).delegateCount=0,u.setup&&!1!==u.setup.call(e,r,m,c)||(e.addEventListener?e.addEventListener(h,c,!1):e.attachEvent&&e.attachEvent("on"+h,c))),u.add&&(u.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,d):p.push(d),f.event.global[h]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,d,p,h,m,g,v=f.hasData(e)&&f._data(e);if(v&&(c=v.events)){for(u=(t=(t||"").match(j)||[""]).length;u--;)if(h=g=(s=Q.exec(t[u])||[])[1],m=(s[2]||"").split(".").sort(),h){for(d=f.event.special[h]||{},p=c[h=(r?d.delegateType:d.bindType)||h]||[],s=s[2]&&new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=p.length;o--;)a=p[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(p.splice(o,1),a.selector&&p.delegateCount--,d.remove&&d.remove.call(e,a));l&&!p.length&&(d.teardown&&!1!==d.teardown.call(e,m,v.handle)||f.removeEvent(e,h,v.handle),delete c[h])}else for(h in c)f.event.remove(e,h+t[u],n,r,!0);f.isEmptyObject(c)&&(delete v.handle,f._removeData(e,"events"))}},trigger:function(t,n,r,i){var o,a,s,l,c,d,p,h=[r||N],m=u.call(t,"type")?t.type:t,g=u.call(t,"namespace")?t.namespace.split("."):[];if(s=d=r=r||N,3!==r.nodeType&&8!==r.nodeType&&!G.test(m+f.event.triggered)&&(m.indexOf(".")>=0&&(g=m.split("."),m=g.shift(),g.sort()),a=m.indexOf(":")<0&&"on"+m,(t=t[f.expando]?t:new f.Event(m,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:f.makeArray(n,[t]),c=f.event.special[m]||{},i||!c.trigger||!1!==c.trigger.apply(r,n))){if(!i&&!c.noBubble&&!f.isWindow(r)){for(l=c.delegateType||m,G.test(l+m)||(s=s.parentNode);s;s=s.parentNode)h.push(s),d=s;d===(r.ownerDocument||N)&&h.push(d.defaultView||d.parentWindow||e)}for(p=0;(s=h[p++])&&!t.isPropagationStopped();)t.type=p>1?l:c.bindType||m,(o=(f._data(s,"events")||{})[t.type]&&f._data(s,"handle"))&&o.apply(s,n),(o=a&&s[a])&&o.apply&&f.acceptData(s)&&(t.result=o.apply(s,n),!1===t.result&&t.preventDefault());if(t.type=m,!i&&!t.isDefaultPrevented()&&(!c._default||!1===c._default.apply(h.pop(),n))&&f.acceptData(r)&&a&&r[m]&&!f.isWindow(r)){(d=r[a])&&(r[a]=null),f.event.triggered=m;try{r[m]()}catch(e){}f.event.triggered=void 0,d&&(r[a]=d)}return t.result}},dispatch:function(e){e=f.event.fix(e);var t,n,i,o,a,s=[],l=r.call(arguments),u=(f._data(this,"events")||{})[e.type]||[],c=f.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(s=f.event.handlers.call(this,e,u),t=0;(o=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,a=0;(i=o.handlers[a++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,void 0!==(n=((f.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l))&&!1===(e.result=n)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,l=e.target;if(s&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(!0!==l.disabled||"click"!==e.type)){for(i=[],o=0;s>o;o++)void 0===i[n=(r=t[o]).selector+" "]&&(i[n]=r.needsContext?f(n,this).index(l)>=0:f.find(n,this,null,[l]).length),i[n]&&i.push(r);i.length&&a.push({elem:l,handlers:i})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[f.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=Y.test(i)?this.mouseHooks:J.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new f.Event(o),t=r.length;t--;)e[n=r[t]]=o[n];return e.target||(e.target=o.srcElement||N),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button,a=t.fromElement;return null==e.pageX&&null!=t.clientX&&(i=(r=e.target.ownerDocument||N).documentElement,n=r.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ee()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===ee()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return f.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(e){return f.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=f.extend(new f.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?f.event.trigger(i,null,t):f.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},f.removeEvent=N.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===M&&(e[r]=null),e.detachEvent(r,n))},f.Event=function(e,t){return this instanceof f.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?K:Z):this.type=e,t&&f.extend(this,t),this.timeStamp=e&&e.timeStamp||f.now(),void(this[f.expando]=!0)):new f.Event(e,t)},f.Event.prototype={isDefaultPrevented:Z,isPropagationStopped:Z,isImmediatePropagationStopped:Z,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=K,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=K,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=K,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},f.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){f.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return(!r||r!==this&&!f.contains(this,r))&&(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),c.submitBubbles||(f.event.special.submit={setup:function(){return!f.nodeName(this,"form")&&void f.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=f.nodeName(t,"input")||f.nodeName(t,"button")?t.form:void 0;n&&!f._data(n,"submitBubbles")&&(f.event.add(n,"submit._submit",function(e){e._submit_bubble=!0}),f._data(n,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&f.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return!f.nodeName(this,"form")&&void f.event.remove(this,"._submit")}}),c.changeBubbles||(f.event.special.change={setup:function(){return V.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(f.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),f.event.simulate("change",this,e,!0)})),!1):void f.event.add(this,"beforeactivate._change",function(e){var t=e.target;V.test(t.nodeName)&&!f._data(t,"changeBubbles")&&(f.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||f.event.simulate("change",this.parentNode,e,!0)}),f._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return f.event.remove(this,"._change"),!V.test(this.nodeName)}}),c.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){f.event.simulate(t,e.target,f.event.fix(e),!0)};f.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=f._data(r,t);i||r.addEventListener(e,n,!0),f._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=f._data(r,t)-1;i?f._data(r,t,i):(r.removeEventListener(e,n,!0),f._removeData(r,t))}}}),f.fn.extend({on:function(e,t,n,r,i){var o,a;if("object"==typeof e){for(o in"string"!=typeof t&&(n=n||t,t=void 0),e)this.on(o,t,n,e[o],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),!1===r)r=Z;else if(!r)return this;return 1===i&&(a=r,(r=function(e){return f().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=f.guid++)),this.each(function(){f.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,f(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(!1===t||"function"==typeof t)&&(n=t,t=void 0),!1===n&&(n=Z),this.each(function(){f.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){f.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?f.event.trigger(e,t,n,!0):void 0}});var ne="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",re=/ jQuery\d+="(?:null|\d+)"/g,ie=new RegExp("<(?:"+ne+")[\\s/>]","i"),oe=/^\s+/,ae=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,se=/<([\w:]+)/,le=/<tbody/i,ue=/<|&#?\w+;/,ce=/<(?:script|style|link)/i,de=/checked\s*(?:[^=]|=\s*.checked.)/i,fe=/^$|\/(?:java|ecma)script/i,pe=/^true\/(.*)/,he=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,me={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:c.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},ge=te(N).appendChild(N.createElement("div"));function ve(e,t){var n,r,i=0,o=typeof e.getElementsByTagName!==M?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==M?e.querySelectorAll(t||"*"):void 0;if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||f.nodeName(r,t)?o.push(r):f.merge(o,ve(r,t));return void 0===t||t&&f.nodeName(e,t)?f.merge([e],o):o}function ye(e){U.test(e.type)&&(e.defaultChecked=e.checked)}function be(e,t){return f.nodeName(e,"table")&&f.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function xe(e){return e.type=(null!==f.find.attr(e,"type"))+"/"+e.type,e}function we(e){var t=pe.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Te(e,t){for(var n,r=0;null!=(n=e[r]);r++)f._data(n,"globalEval",!t||f._data(t[r],"globalEval"))}function Ce(e,t){if(1===t.nodeType&&f.hasData(e)){var n,r,i,o=f._data(e),a=f._data(t,o),s=o.events;if(s)for(n in delete a.handle,a.events={},s)for(r=0,i=s[n].length;i>r;r++)f.event.add(t,n,s[n][r]);a.data&&(a.data=f.extend({},a.data))}}function Ne(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!c.noCloneEvent&&t[f.expando]){for(r in(i=f._data(t)).events)f.removeEvent(t,r,i.handle);t.removeAttribute(f.expando)}"script"===n&&t.text!==e.text?(xe(t).text=e.text,we(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),c.html5Clone&&e.innerHTML&&!f.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&U.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}me.optgroup=me.option,me.tbody=me.tfoot=me.colgroup=me.caption=me.thead,me.th=me.td,f.extend({clone:function(e,t,n){var r,i,o,a,s,l=f.contains(e.ownerDocument,e);if(c.html5Clone||f.isXMLDoc(e)||!ie.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(ge.innerHTML=e.outerHTML,ge.removeChild(o=ge.firstChild)),!(c.noCloneEvent&&c.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||f.isXMLDoc(e)))for(r=ve(o),s=ve(e),a=0;null!=(i=s[a]);++a)r[a]&&Ne(i,r[a]);if(t)if(n)for(s=s||ve(e),r=r||ve(o),a=0;null!=(i=s[a]);a++)Ce(i,r[a]);else Ce(e,o);return(r=ve(o,"script")).length>0&&Te(r,!l&&ve(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){for(var i,o,a,s,l,u,d,p=e.length,h=te(t),m=[],g=0;p>g;g++)if((o=e[g])||0===o)if("object"===f.type(o))f.merge(m,o.nodeType?[o]:o);else if(ue.test(o)){for(s=s||h.appendChild(t.createElement("div")),l=(se.exec(o)||["",""])[1].toLowerCase(),d=me[l]||me._default,s.innerHTML=d[1]+o.replace(ae,"<$1></$2>")+d[2],i=d[0];i--;)s=s.lastChild;if(!c.leadingWhitespace&&oe.test(o)&&m.push(t.createTextNode(oe.exec(o)[0])),!c.tbody)for(i=(o="table"!==l||le.test(o)?"<table>"!==d[1]||le.test(o)?0:s:s.firstChild)&&o.childNodes.length;i--;)f.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u);for(f.merge(m,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=h.lastChild}else m.push(t.createTextNode(o));for(s&&h.removeChild(s),c.appendChecked||f.grep(ve(m,"input"),ye),g=0;o=m[g++];)if((!r||-1===f.inArray(o,r))&&(a=f.contains(o.ownerDocument,o),s=ve(h.appendChild(o),"script"),a&&Te(s),n))for(i=0;o=s[i++];)fe.test(o.type||"")&&n.push(o);return s=null,h},cleanData:function(e,t){for(var r,i,o,a,s=0,l=f.expando,u=f.cache,d=c.deleteExpando,p=f.event.special;null!=(r=e[s]);s++)if((t||f.acceptData(r))&&(a=(o=r[l])&&u[o])){if(a.events)for(i in a.events)p[i]?f.event.remove(r,i):f.removeEvent(r,i,a.handle);u[o]&&(delete u[o],d?delete r[l]:typeof r.removeAttribute!==M?r.removeAttribute(l):r[l]=null,n.push(o))}}}),f.fn.extend({text:function(e){return X(this,function(e){return void 0===e?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||N).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||be(this,e).appendChild(e)})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=be(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?f.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||f.cleanData(ve(n)),n.parentNode&&(t&&f.contains(n.ownerDocument,n)&&Te(ve(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&f.cleanData(ve(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&f.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return f.clone(this,e,t)})},html:function(e){return X(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(re,""):void 0;if(!("string"!=typeof e||ce.test(e)||!c.htmlSerialize&&ie.test(e)||!c.leadingWhitespace&&oe.test(e)||me[(se.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(ae,"<$1></$2>");try{for(;r>n;n++)1===(t=this[n]||{}).nodeType&&(f.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,f.cleanData(ve(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=i.apply([],e);var n,r,o,a,s,l,u=0,d=this.length,p=this,h=d-1,m=e[0],g=f.isFunction(m);if(g||d>1&&"string"==typeof m&&!c.checkClone&&de.test(m))return this.each(function(n){var r=p.eq(n);g&&(e[0]=m.call(this,n,r.html())),r.domManip(e,t)});if(d&&(n=(l=f.buildFragment(e,this[0].ownerDocument,!1,this)).firstChild,1===l.childNodes.length&&(l=n),n)){for(o=(a=f.map(ve(l,"script"),xe)).length;d>u;u++)r=l,u!==h&&(r=f.clone(r,!0,!0),o&&f.merge(a,ve(r,"script"))),t.call(this[u],r,u);if(o)for(s=a[a.length-1].ownerDocument,f.map(a,we),u=0;o>u;u++)r=a[u],fe.test(r.type||"")&&!f._data(r,"globalEval")&&f.contains(s,r)&&(r.src?f._evalUrl&&f._evalUrl(r.src):f.globalEval((r.text||r.textContent||r.innerHTML||"").replace(he,"")));l=n=null}return this}}),f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){f.fn[e]=function(e){for(var n,r=0,i=[],a=f(e),s=a.length-1;s>=r;r++)n=r===s?this:this.clone(!0),f(a[r])[t](n),o.apply(i,n.get());return this.pushStack(i)}});var Ee,ke={};function Se(t,n){var r,i=f(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:f.css(i[0],"display");return i.detach(),o}function Ae(e){var t=N,n=ke[e];return n||("none"!==(n=Se(e,t))&&n||((t=((Ee=(Ee||f("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow||Ee[0].contentDocument).document).write(),t.close(),n=Se(e,t),Ee.detach()),ke[e]=n),n}!function(){var e;c.shrinkWrapBlocks=function(){return null!=e?e:(e=!1,(n=N.getElementsByTagName("body")[0])&&n.style?(t=N.createElement("div"),(r=N.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),typeof t.style.zoom!==M&&(t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",t.appendChild(N.createElement("div")).style.width="5px",e=3!==t.offsetWidth),n.removeChild(r),e):void 0);var t,n,r}}();var De,je,Le=/^margin/,He=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),qe=/^(top|right|bottom|left)$/;function _e(e,t){return{get:function(){var n=e();if(null!=n)return n?void delete this.get:(this.get=t).apply(this,arguments)}}}e.getComputedStyle?(De=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)},je=function(e,t,n){var r,i,o,a,s=e.style;return a=(n=n||De(e))?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==a||f.contains(e.ownerDocument,e)||(a=f.style(e,t)),He.test(a)&&Le.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0===a?a:a+""}):N.documentElement.currentStyle&&(De=function(e){return e.currentStyle},je=function(e,t,n){var r,i,o,a,s=e.style;return null==(a=(n=n||De(e))?n[t]:void 0)&&s&&s[t]&&(a=s[t]),He.test(a)&&!qe.test(t)&&(r=s.left,(o=(i=e.runtimeStyle)&&i.left)&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"}),function(){var t,n,r,i,o,a,s;if((t=N.createElement("div")).innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=(r=t.getElementsByTagName("a")[0])&&r.style){function l(){var t,n,r,l;(n=N.getElementsByTagName("body")[0])&&n.style&&(t=N.createElement("div"),(r=N.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),t.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",i=o=!1,s=!0,e.getComputedStyle&&(i="1%"!==(e.getComputedStyle(t,null)||{}).top,o="4px"===(e.getComputedStyle(t,null)||{width:"4px"}).width,(l=t.appendChild(N.createElement("div"))).style.cssText=t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",l.style.marginRight=l.style.width="0",t.style.width="1px",s=!parseFloat((e.getComputedStyle(l,null)||{}).marginRight),t.removeChild(l)),t.innerHTML="<table><tr><td></td><td>t</td></tr></table>",(l=t.getElementsByTagName("td"))[0].style.cssText="margin:0;border:0;padding:0;display:none",(a=0===l[0].offsetHeight)&&(l[0].style.display="",l[1].style.display="none",a=0===l[0].offsetHeight),n.removeChild(r))}n.cssText="float:left;opacity:.5",c.opacity="0.5"===n.opacity,c.cssFloat=!!n.cssFloat,t.style.backgroundClip="content-box",t.cloneNode(!0).style.backgroundClip="",c.clearCloneStyle="content-box"===t.style.backgroundClip,c.boxSizing=""===n.boxSizing||""===n.MozBoxSizing||""===n.WebkitBoxSizing,f.extend(c,{reliableHiddenOffsets:function(){return null==a&&l(),a},boxSizingReliable:function(){return null==o&&l(),o},pixelPosition:function(){return null==i&&l(),i},reliableMarginRight:function(){return null==s&&l(),s}})}}(),f.swap=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};var Me=/alpha\([^)]*\)/i,Fe=/opacity\s*=\s*([^)]*)/,Oe=/^(none|table(?!-c[ea]).+)/,Be=new RegExp("^("+$+")(.*)$","i"),Pe=new RegExp("^([+-])=("+$+")","i"),Re={position:"absolute",visibility:"hidden",display:"block"},We={letterSpacing:"0",fontWeight:"400"},$e=["Webkit","O","Moz","ms"];function ze(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=$e.length;i--;)if((t=$e[i]+n)in e)return t;return r}function Ie(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)(r=e[a]).style&&(o[a]=f._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&I(r)&&(o[a]=f._data(r,"olddisplay",Ae(r.nodeName)))):(i=I(r),(n&&"none"!==n||!i)&&f._data(r,"olddisplay",i?n:f.css(r,"display"))));for(a=0;s>a;a++)(r=e[a]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function Xe(e,t,n){var r=Be.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ue(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=f.css(e,n+z[o],!0,i)),r?("content"===n&&(a-=f.css(e,"padding"+z[o],!0,i)),"margin"!==n&&(a-=f.css(e,"border"+z[o]+"Width",!0,i))):(a+=f.css(e,"padding"+z[o],!0,i),"padding"!==n&&(a+=f.css(e,"border"+z[o]+"Width",!0,i)));return a}function Ve(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=De(e),a=c.boxSizing&&"border-box"===f.css(e,"boxSizing",!1,o);if(0>=i||null==i){if((0>(i=je(e,t,o))||null==i)&&(i=e.style[t]),He.test(i))return i;r=a&&(c.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+Ue(e,t,n||(a?"border":"content"),r,o)+"px"}function Je(e,t,n,r,i){return new Je.prototype.init(e,t,n,r,i)}f.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=je(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:c.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=f.camelCase(t),l=e.style;if(t=f.cssProps[s]||(f.cssProps[s]=ze(l,s)),a=f.cssHooks[t]||f.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];if("string"===(o=typeof n)&&(i=Pe.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(f.css(e,t)),o="number"),null!=n&&n==n&&("number"!==o||f.cssNumber[s]||(n+="px"),c.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,r)))))try{l[t]=n}catch(e){}}},css:function(e,t,n,r){var i,o,a,s=f.camelCase(t);return t=f.cssProps[s]||(f.cssProps[s]=ze(e.style,s)),(a=f.cssHooks[t]||f.cssHooks[s])&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=je(e,t,r)),"normal"===o&&t in We&&(o=We[t]),""===n||n?(i=parseFloat(o),!0===n||f.isNumeric(i)?i||0:o):o}}),f.each(["height","width"],function(e,t){f.cssHooks[t]={get:function(e,n,r){return n?Oe.test(f.css(e,"display"))&&0===e.offsetWidth?f.swap(e,Re,function(){return Ve(e,t,r)}):Ve(e,t,r):void 0},set:function(e,n,r){var i=r&&De(e);return Xe(0,n,r?Ue(e,t,r,c.boxSizing&&"border-box"===f.css(e,"boxSizing",!1,i),i):0)}}}),c.opacity||(f.cssHooks.opacity={get:function(e,t){return Fe.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=f.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===f.trim(o.replace(Me,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=Me.test(o)?o.replace(Me,i):o+" "+i)}}),f.cssHooks.marginRight=_e(c.reliableMarginRight,function(e,t){return t?f.swap(e,{display:"inline-block"},je,[e,"marginRight"]):void 0}),f.each({margin:"",padding:"",border:"Width"},function(e,t){f.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+z[r]+t]=o[r]||o[r-2]||o[0];return i}},Le.test(e)||(f.cssHooks[e+t].set=Xe)}),f.fn.extend({css:function(e,t){return X(this,function(e,t,n){var r,i,o={},a=0;if(f.isArray(t)){for(r=De(e),i=t.length;i>a;a++)o[t[a]]=f.css(e,t[a],!1,r);return o}return void 0!==n?f.style(e,t,n):f.css(e,t)},e,t,arguments.length>1)},show:function(){return Ie(this,!0)},hide:function(){return Ie(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){I(this)?f(this).show():f(this).hide()})}}),f.Tween=Je,Je.prototype={constructor:Je,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(f.cssNumber[n]?"":"px")},cur:function(){var e=Je.propHooks[this.prop];return e&&e.get?e.get(this):Je.propHooks._default.get(this)},run:function(e){var t,n=Je.propHooks[this.prop];return this.pos=t=this.options.duration?f.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Je.propHooks._default.set(this),this}},Je.prototype.init.prototype=Je.prototype,Je.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=f.css(e.elem,e.prop,""))&&"auto"!==t?t:0:e.elem[e.prop]},set:function(e){f.fx.step[e.prop]?f.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[f.cssProps[e.prop]]||f.cssHooks[e.prop])?f.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Je.propHooks.scrollTop=Je.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},f.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},f.fx=Je.prototype.init,f.fx.step={};var Ye,Ge,Qe=/^(?:toggle|show|hide)$/,Ke=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),Ze=/queueHooks$/,et=[function(e,t,n){var r,i,o,a,s,l,u,d=this,p={},h=e.style,m=e.nodeType&&I(e),g=f._data(e,"fxshow");for(r in n.queue||(null==(s=f._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,d.always(function(){d.always(function(){s.unqueued--,f.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],u=f.css(e,"display"),"inline"===("none"===u?f._data(e,"olddisplay")||Ae(e.nodeName):u)&&"none"===f.css(e,"float")&&(c.inlineBlockNeedsLayout&&"inline"!==Ae(e.nodeName)?h.zoom=1:h.display="inline-block")),n.overflow&&(h.overflow="hidden",c.shrinkWrapBlocks()||d.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),t)if(i=t[r],Qe.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(m?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;m=!0}p[r]=g&&g[r]||f.style(e,r)}else u=void 0;if(f.isEmptyObject(p))"inline"===("none"===u?Ae(e.nodeName):u)&&(h.display=u);else for(r in g?"hidden"in g&&(m=g.hidden):g=f._data(e,"fxshow",{}),o&&(g.hidden=!m),m?f(e).show():d.done(function(){f(e).hide()}),d.done(function(){var t;for(t in f._removeData(e,"fxshow"),p)f.style(e,t,p[t])}),p)a=it(m?g[r]:0,r,d),r in g||(g[r]=a.start,m&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}],tt={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Ke.exec(t),o=i&&i[3]||(f.cssNumber[e]?"":"px"),a=(f.cssNumber[e]||"px"!==o&&+r)&&Ke.exec(f.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do{a/=s=s||".5",f.style(n.elem,e,a+o)}while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function nt(){return setTimeout(function(){Ye=void 0}),Ye=f.now()}function rt(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)r["margin"+(n=z[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function it(e,t,n){for(var r,i=(tt[t]||[]).concat(tt["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,t,e))return r}function ot(e,t,n){var r,i,o=0,a=et.length,s=f.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;for(var t=Ye||nt(),n=Math.max(0,u.startTime+u.duration-t),r=1-(n/u.duration||0),o=0,a=u.tweens.length;a>o;o++)u.tweens[o].run(r);return s.notifyWith(e,[u,r,n]),1>r&&a?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:f.extend({},t),opts:f.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Ye||nt(),duration:n.duration,tweens:[],createTween:function(t,n){var r=f.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=f.camelCase(n)],o=e[n],f.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=f.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,u.opts.specialEasing);a>o;o++)if(r=et[o].call(u,e,c,u.opts))return r;return f.map(c,it,u),f.isFunction(u.opts.start)&&u.opts.start.call(e,u),f.fx.timer(f.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}f.Animation=f.extend(ot,{tweener:function(e,t){f.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],tt[n]=tt[n]||[],tt[n].unshift(t)},prefilter:function(e,t){t?et.unshift(e):et.push(e)}}),f.speed=function(e,t,n){var r=e&&"object"==typeof e?f.extend({},e):{complete:n||!n&&t||f.isFunction(e)&&e,duration:e,easing:n&&t||t&&!f.isFunction(t)&&t};return r.duration=f.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in f.fx.speeds?f.fx.speeds[r.duration]:f.fx.speeds._default,(null==r.queue||!0===r.queue)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){f.isFunction(r.old)&&r.old.call(this),r.queue&&f.dequeue(this,r.queue)},r},f.fn.extend({fadeTo:function(e,t,n,r){return this.filter(I).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=f.isEmptyObject(e),o=f.speed(t,n,r),a=function(){var t=ot(this,f.extend({},e),o);(i||f._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=f.timers,a=f._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&Ze.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&f.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=f._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=f.timers,a=r?r.length:0;for(n.finish=!0,f.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),f.each(["toggle","show","hide"],function(e,t){var n=f.fn[t];f.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(rt(t,!0),e,r,i)}}),f.each({slideDown:rt("show"),slideUp:rt("hide"),slideToggle:rt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){f.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),f.timers=[],f.fx.tick=function(){var e,t=f.timers,n=0;for(Ye=f.now();n<t.length;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||f.fx.stop(),Ye=void 0},f.fx.timer=function(e){f.timers.push(e),e()?f.fx.start():f.timers.pop()},f.fx.interval=13,f.fx.start=function(){Ge||(Ge=setInterval(f.fx.tick,f.fx.interval))},f.fx.stop=function(){clearInterval(Ge),Ge=null},f.fx.speeds={slow:600,fast:200,_default:400},f.fn.delay=function(e,t){return e=f.fx&&f.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e,t,n,r,i;(t=N.createElement("div")).setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=t.getElementsByTagName("a")[0],i=(n=N.createElement("select")).appendChild(N.createElement("option")),e=t.getElementsByTagName("input")[0],r.style.cssText="top:1px",c.getSetAttribute="t"!==t.className,c.style=/top/.test(r.getAttribute("style")),c.hrefNormalized="/a"===r.getAttribute("href"),c.checkOn=!!e.value,c.optSelected=i.selected,c.enctype=!!N.createElement("form").enctype,n.disabled=!0,c.optDisabled=!i.disabled,(e=N.createElement("input")).setAttribute("value",""),c.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),c.radioValue="t"===e.value}();var at=/\r/g;f.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=f.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,f(this).val()):e)?i="":"number"==typeof i?i+="":f.isArray(i)&&(i=f.map(i,function(e){return null==e?"":e+""})),(t=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=f.valHooks[i.type]||f.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(at,""):null==n?"":n:void 0}}),f.extend({valHooks:{option:{get:function(e){var t=f.find.attr(e,"value");return null!=t?t:f.trim(f.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;s>l;l++)if(!(!(n=r[l]).selected&&l!==i||(c.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&f.nodeName(n.parentNode,"optgroup"))){if(t=f(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=f.makeArray(t),a=i.length;a--;)if(r=i[a],f.inArray(f.valHooks.option.get(r),o)>=0)try{r.selected=n=!0}catch(e){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]={set:function(e,t){return f.isArray(t)?e.checked=f.inArray(f(e).val(),t)>=0:void 0}},c.checkOn||(f.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var st,lt,ut=f.expr.attrHandle,ct=/^(?:checked|selected)$/i,dt=c.getSetAttribute,ft=c.input;f.fn.extend({attr:function(e,t){return X(this,f.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){f.removeAttr(this,e)})}}),f.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===M?f.prop(e,t,n):(1===o&&f.isXMLDoc(e)||(t=t.toLowerCase(),r=f.attrHooks[t]||(f.expr.match.bool.test(t)?lt:st)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=f.find.attr(e,t))?void 0:i:null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void f.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(j);if(o&&1===e.nodeType)for(;n=o[i++];)r=f.propFix[n]||n,f.expr.match.bool.test(n)?ft&&dt||!ct.test(n)?e[r]=!1:e[f.camelCase("default-"+n)]=e[r]=!1:f.attr(e,n,""),e.removeAttribute(dt?n:r)},attrHooks:{type:{set:function(e,t){if(!c.radioValue&&"radio"===t&&f.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),lt={set:function(e,t,n){return!1===t?f.removeAttr(e,n):ft&&dt||!ct.test(n)?e.setAttribute(!dt&&f.propFix[n]||n,n):e[f.camelCase("default-"+n)]=e[n]=!0,n}},f.each(f.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ut[t]||f.find.attr;ut[t]=ft&&dt||!ct.test(t)?function(e,t,r){var i,o;return r||(o=ut[t],ut[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,ut[t]=o),i}:function(e,t,n){return n?void 0:e[f.camelCase("default-"+t)]?t.toLowerCase():null}}),ft&&dt||(f.attrHooks.value={set:function(e,t,n){return f.nodeName(e,"input")?void(e.defaultValue=t):st&&st.set(e,t,n)}}),dt||(st={set:function(e,t,n){var r=e.getAttributeNode(n);return r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n)?t:void 0}},ut.id=ut.name=ut.coords=function(e,t,n){var r;return n?void 0:(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},f.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:void 0},set:st.set},f.attrHooks.contenteditable={set:function(e,t,n){st.set(e,""!==t&&t,n)}},f.each(["width","height"],function(e,t){f.attrHooks[t]={set:function(e,n){return""===n?(e.setAttribute(t,"auto"),n):void 0}}})),c.style||(f.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var pt=/^(?:input|select|textarea|button|object)$/i,ht=/^(?:a|area)$/i;f.fn.extend({prop:function(e,t){return X(this,f.prop,e,t,arguments.length>1)},removeProp:function(e){return e=f.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(e){}})}}),f.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return(1!==o||!f.isXMLDoc(e))&&(t=f.propFix[t]||t,i=f.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=f.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||ht.test(e.nodeName)&&e.href?0:-1}}}}),c.hrefNormalized||f.each(["href","src"],function(e,t){f.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),c.optSelected||(f.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),f.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){f.propFix[this.toLowerCase()]=this}),c.enctype||(f.propFix.enctype="encoding");var mt=/[\t\r\n\f]/g;f.fn.extend({addClass:function(e){var t,n,r,i,o,a,s=0,l=this.length,u="string"==typeof e&&e;if(f.isFunction(e))return this.each(function(t){f(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(j)||[];l>s;s++)if(r=1===(n=this[s]).nodeType&&(n.className?(" "+n.className+" ").replace(mt," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");a=f.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,r,i,o,a,s=0,l=this.length,u=0===arguments.length||"string"==typeof e&&e;if(f.isFunction(e))return this.each(function(t){f(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(j)||[];l>s;s++)if(r=1===(n=this[s]).nodeType&&(n.className?(" "+n.className+" ").replace(mt," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");a=e?f.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(f.isFunction(e)?function(n){f(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=f(this),o=e.match(j)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===M||"boolean"===n)&&(this.className&&f._data(this,"__className__",this.className),this.className=this.className||!1===e?"":f._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(mt," ").indexOf(t)>=0)return!0;return!1}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){f.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),f.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var gt=f.now(),vt=/\?/,yt=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;f.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,r=null,i=f.trim(t+"");return i&&!f.trim(i.replace(yt,function(e,t,i,o){return n&&t&&(r=0),0===r?e:(n=i||t,r+=!o-!i,"")}))?Function("return "+i)():f.error("Invalid JSON: "+t)},f.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{e.DOMParser?n=(new DOMParser).parseFromString(t,"text/xml"):((n=new ActiveXObject("Microsoft.XMLDOM")).async="false",n.loadXML(t))}catch(e){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||f.error("Invalid XML: "+t),n};var bt,xt,wt=/#.*$/,Tt=/([?&])_=[^&]*/,Ct=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nt=/^(?:GET|HEAD)$/,Et=/^\/\//,kt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,St={},At={},Dt="*/".concat("*");try{xt=location.href}catch(e){(xt=N.createElement("a")).href="",xt=xt.href}function jt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(j)||[];if(f.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Lt(e,t,n,r){var i={},o=e===At;function a(s){var l;return i[s]=!0,f.each(e[s]||[],function(e,s){var u=s(t,n,r);return"string"!=typeof u||o||i[u]?o?!(l=u):void 0:(t.dataTypes.unshift(u),a(u),!1)}),l}return a(t.dataTypes[0])||!i["*"]&&a("*")}function Ht(e,t){var n,r,i=f.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&f.extend(!0,e,n),e}bt=kt.exec(xt.toLowerCase())||[],f.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xt,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ht(Ht(e,f.ajaxSettings),t):Ht(f.ajaxSettings,e)},ajaxPrefilter:jt(St),ajaxTransport:jt(At),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var n,r,i,o,a,s,l,u,c=f.ajaxSetup({},t),d=c.context||c,p=c.context&&(d.nodeType||d.jquery)?f(d):f.event,h=f.Deferred(),m=f.Callbacks("once memory"),g=c.statusCode||{},v={},y={},b=0,x="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!u)for(u={};t=Ct.exec(o);)u[t[1].toLowerCase()]=t[2];t=u[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)g[t]=[g[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||x;return l&&l.abort(t),T(0,t),this}};if(h.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,c.url=((e||c.url||xt)+"").replace(wt,"").replace(Et,bt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=f.trim(c.dataType||"*").toLowerCase().match(j)||[""],null==c.crossDomain&&(n=kt.exec(c.url.toLowerCase()),c.crossDomain=!(!n||n[1]===bt[1]&&n[2]===bt[2]&&(n[3]||("http:"===n[1]?"80":"443"))===(bt[3]||("http:"===bt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=f.param(c.data,c.traditional)),Lt(St,c,t,w),2===b)return w;for(r in(s=f.event&&c.global)&&0==f.active++&&f.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Nt.test(c.type),i=c.url,c.hasContent||(c.data&&(i=c.url+=(vt.test(i)?"&":"?")+c.data,delete c.data),!1===c.cache&&(c.url=Tt.test(i)?i.replace(Tt,"$1_="+gt++):i+(vt.test(i)?"&":"?")+"_="+gt++)),c.ifModified&&(f.lastModified[i]&&w.setRequestHeader("If-Modified-Since",f.lastModified[i]),f.etag[i]&&w.setRequestHeader("If-None-Match",f.etag[i])),(c.data&&c.hasContent&&!1!==c.contentType||t.contentType)&&w.setRequestHeader("Content-Type",c.contentType),w.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+Dt+"; q=0.01":""):c.accepts["*"]),c.headers)w.setRequestHeader(r,c.headers[r]);if(c.beforeSend&&(!1===c.beforeSend.call(d,w,c)||2===b))return w.abort();for(r in x="abort",{success:1,error:1,complete:1})w[r](c[r]);if(l=Lt(At,c,t,w)){w.readyState=1,s&&p.trigger("ajaxSend",[w,c]),c.async&&c.timeout>0&&(a=setTimeout(function(){w.abort("timeout")},c.timeout));try{b=1,l.send(v,T)}catch(e){if(!(2>b))throw e;T(-1,e)}}else T(-1,"No Transport");function T(e,t,n,r){var u,v,y,x,T,C=t;2!==b&&(b=2,a&&clearTimeout(a),l=void 0,o=r||"",w.readyState=e>0?4:0,u=e>=200&&300>e||304===e,n&&(x=function(e,t,n){for(var r,i,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){l.unshift(a);break}if(l[0]in n)o=l[0];else{for(a in n){if(!l[0]||e.converters[a+" "+l[0]]){o=a;break}r||(r=a)}o=o||r}return o?(o!==l[0]&&l.unshift(o),n[o]):void 0}(c,w,n)),x=function(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(a=u[l+" "+o]||u["* "+o]))for(i in u)if((s=i.split(" "))[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){!0===a?a=u[i]:!0!==u[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(c,x,w,u),u?(c.ifModified&&((T=w.getResponseHeader("Last-Modified"))&&(f.lastModified[i]=T),(T=w.getResponseHeader("etag"))&&(f.etag[i]=T)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=x.state,v=x.data,u=!(y=x.error))):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),w.status=e,w.statusText=(t||C)+"",u?h.resolveWith(d,[v,C,w]):h.rejectWith(d,[w,C,y]),w.statusCode(g),g=void 0,s&&p.trigger(u?"ajaxSuccess":"ajaxError",[w,c,u?v:y]),m.fireWith(d,[w,C]),s&&(p.trigger("ajaxComplete",[w,c]),--f.active||f.event.trigger("ajaxStop")))}return w},getJSON:function(e,t,n){return f.get(e,t,n,"json")},getScript:function(e,t){return f.get(e,void 0,t,"script")}}),f.each(["get","post"],function(e,t){f[t]=function(e,n,r,i){return f.isFunction(n)&&(i=i||r,r=n,n=void 0),f.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),f._evalUrl=function(e){return f.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},f.fn.extend({wrapAll:function(e){if(f.isFunction(e))return this.each(function(t){f(this).wrapAll(e.call(this,t))});if(this[0]){var t=f(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return this.each(f.isFunction(e)?function(t){f(this).wrapInner(e.call(this,t))}:function(){var t=f(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=f.isFunction(e);return this.each(function(n){f(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()}}),f.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!c.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||f.css(e,"display"))},f.expr.filters.visible=function(e){return!f.expr.filters.hidden(e)};var qt=/%20/g,_t=/\[\]$/,Mt=/\r?\n/g,Ft=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Bt(e,t,n,r){var i;if(f.isArray(t))f.each(t,function(t,i){n||_t.test(e)?r(e,i):Bt(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==f.type(t))r(e,t);else for(i in t)Bt(e+"["+i+"]",t[i],n,r)}f.param=function(e,t){var n,r=[],i=function(e,t){t=f.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=f.ajaxSettings&&f.ajaxSettings.traditional),f.isArray(e)||e.jquery&&!f.isPlainObject(e))f.each(e,function(){i(this.name,this.value)});else for(n in e)Bt(n,e[n],t,i);return r.join("&").replace(qt,"+")},f.fn.extend({serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=f.prop(this,"elements");return e?f.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!f(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ft.test(e)&&(this.checked||!U.test(e))}).map(function(e,t){var n=f(this).val();return null==n?null:f.isArray(n)?f.map(n,function(e){return{name:t.name,value:e.replace(Mt,"\r\n")}}):{name:t.name,value:n.replace(Mt,"\r\n")}}).get()}}),f.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$t()||function(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}()}:$t;var Pt=0,Rt={},Wt=f.ajaxSettings.xhr();function $t(){try{return new e.XMLHttpRequest}catch(e){}}e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Rt)Rt[e](void 0,!0)}),c.cors=!!Wt&&"withCredentials"in Wt,(Wt=c.ajax=!!Wt)&&f.ajaxTransport(function(e){var t;if(!e.crossDomain||c.cors)return{send:function(n,r){var i,o=e.xhr(),a=++Pt;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];for(i in e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest"),n)void 0!==n[i]&&o.setRequestHeader(i,n[i]+"");o.send(e.hasContent&&e.data||null),t=function(n,i){var s,l,u;if(t&&(i||4===o.readyState))if(delete Rt[a],t=void 0,o.onreadystatechange=f.noop,i)4!==o.readyState&&o.abort();else{u={},s=o.status,"string"==typeof o.responseText&&(u.text=o.responseText);try{l=o.statusText}catch(e){l=""}s||!e.isLocal||e.crossDomain?1223===s&&(s=204):s=u.text?200:404}u&&r(s,l,u,o.getAllResponseHeaders())},e.async?4===o.readyState?setTimeout(t):o.onreadystatechange=Rt[a]=t:t()},abort:function(){t&&t(void 0,!0)}}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return f.globalEval(e),e}}}),f.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),f.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=N.head||f("head")[0]||N.documentElement;return{send:function(r,i){(t=N.createElement("script")).async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||i(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var zt=[],It=/(=)\?(?=&|$)|\?\?/;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||f.expando+"_"+gt++;return this[e]=!0,e}}),f.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(It.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&It.test(t.data)&&"data");return s||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=f.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(It,"$1"+i):!1!==t.jsonp&&(t.url+=(vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||f.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,zt.push(i)),a&&f.isFunction(o)&&o(a[0]),a=o=void 0}),"script"):void 0}),f.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||N;var r=x.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=f.buildFragment([e],t,i),i&&i.length&&f(i).remove(),f.merge([],r.childNodes))};var Xt=f.fn.load;f.fn.load=function(e,t,n){if("string"!=typeof e&&Xt)return Xt.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>=0&&(r=f.trim(e.slice(s,e.length)),e=e.slice(0,s)),f.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),a.length>0&&f.ajax({url:e,type:o,dataType:"html",data:t}).done(function(e){i=arguments,a.html(r?f("<div>").append(f.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){a.each(n,i||[e.responseText,t,e])}),this},f.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){f.fn[t]=function(e){return this.on(t,e)}}),f.expr.filters.animated=function(e){return f.grep(f.timers,function(t){return e===t.elem}).length};var Ut=e.document.documentElement;function Vt(e){return f.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}f.offset={setOffset:function(e,t,n){var r,i,o,a,s,l,u=f.css(e,"position"),c=f(e),d={};"static"===u&&(e.style.position="relative"),s=c.offset(),o=f.css(e,"top"),l=f.css(e,"left"),("absolute"===u||"fixed"===u)&&f.inArray("auto",[o,l])>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(l)||0),f.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+i),"using"in t?t.using.call(e,d):c.css(d)}},f.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){f.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;return o?(t=o.documentElement,f.contains(t,i)?(typeof i.getBoundingClientRect!==M&&(r=i.getBoundingClientRect()),n=Vt(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r):void 0},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===f.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),f.nodeName(e[0],"html")||(n=e.offset()),n.top+=f.css(e[0],"borderTopWidth",!0),n.left+=f.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-f.css(r,"marginTop",!0),left:t.left-n.left-f.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Ut;e&&!f.nodeName(e,"html")&&"static"===f.css(e,"position");)e=e.offsetParent;return e||Ut})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);f.fn[e]=function(r){return X(this,function(e,r,i){var o=Vt(e);return void 0===i?o?t in o?o[t]:o.document.documentElement[r]:e[r]:void(o?o.scrollTo(n?f(o).scrollLeft():i,n?i:f(o).scrollTop()):e[r]=i)},e,r,arguments.length,null)}}),f.each(["top","left"],function(e,t){f.cssHooks[t]=_e(c.pixelPosition,function(e,n){return n?(n=je(e,t),He.test(n)?f(e).position()[t]+"px":n):void 0})}),f.each({Height:"height",Width:"width"},function(e,t){f.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){f.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===i?"margin":"border");return X(this,function(t,n,r){var i;return f.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?f.css(t,n,a):f.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),f.fn.size=function(){return this.length},f.fn.andSelf=f.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return f});var Jt=e.jQuery,Yt=e.$;return f.noConflict=function(t){return e.$===f&&(e.$=Yt),t&&e.jQuery===f&&(e.jQuery=Jt),f},typeof t===M&&(e.jQuery=e.$=f),f});
            OG$ = window.OG$ = jQuery.noConflict(true);
        }else{
            if($().jquery !== '1.4.4'){
                OG$ = $;
            }else{
                !function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){var n=[],r=n.slice,i=n.concat,o=n.push,a=n.indexOf,s={},l=s.toString,u=s.hasOwnProperty,c={},d="1.11.2",f=function(e,t){return new f.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,h=/^-ms-/,m=/-([\da-z])/gi,g=function(e,t){return t.toUpperCase()};function v(e){var t=e.length,n=f.type(e);return"function"!==n&&!f.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}f.fn=f.prototype={jquery:d,constructor:f,selector:"",length:0,toArray:function(){return r.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:r.call(this)},pushStack:function(e){var t=f.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return f.each(this,e,t)},map:function(e){return this.pushStack(f.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:o,sort:n.sort,splice:n.splice},f.extend=f.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||f.isFunction(a)||(a={}),s===l&&(a=this,s--);l>s;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],a!==(n=i[r])&&(u&&n&&(f.isPlainObject(n)||(t=f.isArray(n)))?(t?(t=!1,o=e&&f.isArray(e)?e:[]):o=e&&f.isPlainObject(e)?e:{},a[r]=f.extend(u,o,n)):void 0!==n&&(a[r]=n));return a},f.extend({expando:"jQuery"+(d+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===f.type(e)},isArray:Array.isArray||function(e){return"array"===f.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!f.isArray(e)&&e-parseFloat(e)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==f.type(e)||e.nodeType||f.isWindow(e))return!1;try{if(e.constructor&&!u.call(e,"constructor")&&!u.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(c.ownLast)for(t in e)return u.call(e,t);for(t in e);return void 0===t||u.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?s[l.call(e)]||"object":typeof e},globalEval:function(t){t&&f.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(h,"ms-").replace(m,g)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r=0,i=e.length,o=v(e);if(n){if(o)for(;i>r&&!1!==t.apply(e[r],n);r++);else for(r in e)if(!1===t.apply(e[r],n))break}else if(o)for(;i>r&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(v(Object(e))?f.merge(n,"string"==typeof e?[e]:e):o.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(a)return a.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;)e[i++]=t[r++];if(n!=n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;o>i;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,o=0,a=e.length,s=[];if(v(e))for(;a>o;o++)null!=(r=t(e[o],o,n))&&s.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&s.push(r);return i.apply([],s)},guid:1,proxy:function(e,t){var n,i,o;return"string"==typeof t&&(o=e[t],t=e,e=o),f.isFunction(e)?(n=r.call(arguments,2),(i=function(){return e.apply(t||this,n.concat(r.call(arguments)))}).guid=e.guid=e.guid||f.guid++,i):void 0},now:function(){return+new Date},support:c}),f.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){s["[object "+t+"]"]=t.toLowerCase()});var y=function(e){var t,n,r,i,o,a,s,l,u,c,d,f,p,h,m,g,v,y,b,x="sizzle"+1*new Date,w=e.document,T=0,C=0,N=ae(),E=ae(),k=ae(),S=function(e,t){return e===t&&(d=!0),0},A=1<<31,D={}.hasOwnProperty,j=[],L=j.pop,H=j.push,q=j.push,_=j.slice,M=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},F="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",O="[\\x20\\t\\r\\n\\f]",B="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",P=B.replace("w","w#"),R="\\["+O+"*("+B+")(?:"+O+"*([*^$|!~]?=)"+O+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+P+"))|)"+O+"*\\]",W=":("+B+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+R+")*)|.*)\\)|)",$=new RegExp(O+"+","g"),z=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),I=new RegExp("^"+O+"*,"+O+"*"),X=new RegExp("^"+O+"*([>+~]|"+O+")"+O+"*"),U=new RegExp("="+O+"*([^\\]'\"]*?)"+O+"*\\]","g"),V=new RegExp(W),J=new RegExp("^"+P+"$"),Y={ID:new RegExp("^#("+B+")"),CLASS:new RegExp("^\\.("+B+")"),TAG:new RegExp("^("+B.replace("w","w*")+")"),ATTR:new RegExp("^"+R),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),bool:new RegExp("^(?:"+F+")$","i"),needsContext:new RegExp("^"+O+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=/'|\\/g,ne=new RegExp("\\\\([\\da-f]{1,6}"+O+"?|("+O+")|.)","ig"),re=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},ie=function(){f()};try{q.apply(j=_.call(w.childNodes),w.childNodes),j[w.childNodes.length].nodeType}catch(e){q={apply:j.length?function(e,t){H.apply(e,_.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function oe(e,t,r,i){var o,s,u,c,d,h,v,y,T,C;if((t?t.ownerDocument||t:w)!==p&&f(t),r=r||[],c=(t=t||p).nodeType,"string"!=typeof e||!e||1!==c&&9!==c&&11!==c)return r;if(!i&&m){if(11!==c&&(o=Z.exec(e)))if(u=o[1]){if(9===c){if(!(s=t.getElementById(u))||!s.parentNode)return r;if(s.id===u)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(u))&&b(t,s)&&s.id===u)return r.push(s),r}else{if(o[2])return q.apply(r,t.getElementsByTagName(e)),r;if((u=o[3])&&n.getElementsByClassName)return q.apply(r,t.getElementsByClassName(u)),r}if(n.qsa&&(!g||!g.test(e))){if(y=v=x,T=t,C=1!==c&&e,1===c&&"object"!==t.nodeName.toLowerCase()){for(h=a(e),(v=t.getAttribute("id"))?y=v.replace(te,"\\$&"):t.setAttribute("id",y),y="[id='"+y+"'] ",d=h.length;d--;)h[d]=y+ge(h[d]);T=ee.test(e)&&he(t.parentNode)||t,C=h.join(",")}if(C)try{return q.apply(r,T.querySelectorAll(C)),r}catch(e){}finally{v||t.removeAttribute("id")}}}return l(e.replace(z,"$1"),t,r,i)}function ae(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function se(e){return e[x]=!0,e}function le(e){var t=p.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ue(e,t){for(var n=e.split("|"),i=e.length;i--;)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||A)-(~e.sourceIndex||A);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function de(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function fe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pe(e){return se(function(t){return t=+t,se(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function he(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},f=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==p&&9===a.nodeType&&a.documentElement?(p=a,h=a.documentElement,(i=a.defaultView)&&i!==i.top&&(i.addEventListener?i.addEventListener("unload",ie,!1):i.attachEvent&&i.attachEvent("onunload",ie)),m=!o(a),n.attributes=le(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=le(function(e){return e.appendChild(a.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=K.test(a.getElementsByClassName),n.getById=le(function(e){return h.appendChild(e).id=x,!a.getElementsByName||!a.getElementsByName(x).length}),n.getById?(r.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},r.filter.ID=function(e){var t=e.replace(ne,re);return function(e){return e.getAttribute("id")===t}}):(delete r.find.ID,r.filter.ID=function(e){var t=e.replace(ne,re);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){return m?t.getElementsByClassName(e):void 0},v=[],g=[],(n.qsa=K.test(a.querySelectorAll))&&(le(function(e){h.appendChild(e).innerHTML="<a id='"+x+"'></a><select id='"+x+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+O+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+O+"*(?:value|"+F+")"),e.querySelectorAll("[id~="+x+"-]").length||g.push("~="),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+x+"+*").length||g.push(".#.+[+~]")}),le(function(e){var t=a.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+O+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(n.matchesSelector=K.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&le(function(e){n.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),v.push("!=",W)}),g=g.length&&new RegExp(g.join("|")),v=v.length&&new RegExp(v.join("|")),t=K.test(h.compareDocumentPosition),b=t||K.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},S=t?function(e,t){if(e===t)return d=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===a||e.ownerDocument===w&&b(w,e)?-1:t===a||t.ownerDocument===w&&b(w,t)?1:c?M(c,e)-M(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return d=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],l=[t];if(!i||!o)return e===a?-1:t===a?1:i?-1:o?1:c?M(c,e)-M(c,t):0;if(i===o)return ce(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;s[r]===l[r];)r++;return r?ce(s[r],l[r]):s[r]===w?-1:l[r]===w?1:0},a):p},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&f(e),t=t.replace(U,"='$1']"),!(!n.matchesSelector||!m||v&&v.test(t)||g&&g.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,p,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==p&&f(e),b(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==p&&f(e);var i=r.attrHandle[t.toLowerCase()],o=i&&D.call(r.attrHandle,t.toLowerCase())?i(e,t,!m):void 0;return void 0!==o?o:n.attributes||!m?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(d=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(S),d){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ne,re),e[3]=(e[3]||e[4]||e[5]||"").replace(ne,re),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Y.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&V.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ne,re).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,d,f,p,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s;if(g){if(o){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(p=(u=(c=g[x]||(g[x]={}))[e]||[])[0]===T&&u[1],f=u[0]===T&&u[2],d=p&&g.childNodes[p];d=++p&&d&&d[m]||(f=p=0)||h.pop();)if(1===d.nodeType&&++f&&d===t){c[e]=[T,p,f];break}}else if(y&&(u=(t[x]||(t[x]={}))[e])&&u[0]===T)f=u[1];else for(;(d=++p&&d&&d[m]||(f=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++f||(y&&((d[x]||(d[x]={}))[e]=[T,f]),d!==t)););return(f-=i)===r||f%r==0&&f/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[x]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)e[r=M(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(z,"$1"));return r[x]?se(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(ne,re),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return J.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(ne,re).toLowerCase(),function(t){var n;do{if(n=m?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:pe(function(){return[0]}),last:pe(function(e,t){return[t-1]}),eq:pe(function(e,t,n){return[0>n?n+t:n]}),even:pe(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:pe(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:pe(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:pe(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=de(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=fe(t);function me(){}function ge(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function ve(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=C++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,l,u=[T,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if((s=(l=t[x]||(t[x]={}))[r])&&s[0]===T&&s[1]===o)return u[2]=s[2];if(l[r]=u,u[2]=e(t,n,a))return!0}}}function ye(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function xe(e,t,n,r,i,o){return r&&!r[x]&&(r=xe(r)),i&&!i[x]&&(i=xe(i,o)),se(function(o,a,s,l){var u,c,d,f=[],p=[],h=a.length,m=o||function(e,t,n){for(var r=0,i=t.length;i>r;r++)oe(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),g=!e||!o&&t?m:be(m,f,e,s,l),v=n?i||(o?e:h||r)?[]:a:g;if(n&&n(g,v,s,l),r)for(u=be(v,p),r(u,[],s,l),c=u.length;c--;)(d=u[c])&&(v[p[c]]=!(g[p[c]]=d));if(o){if(i||e){if(i){for(u=[],c=v.length;c--;)(d=v[c])&&u.push(g[c]=d);i(null,v=[],u,l)}for(c=v.length;c--;)(d=v[c])&&(u=i?M(o,d):f[c])>-1&&(o[u]=!(a[u]=d))}}else v=be(v===a?v.splice(h,v.length):v),i?i(null,a,v,l):q.apply(a,v)})}function we(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],l=a?1:0,c=ve(function(e){return e===t},s,!0),d=ve(function(e){return M(t,e)>-1},s,!0),f=[function(e,n,r){var i=!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):d(e,n,r));return t=null,i}];o>l;l++)if(n=r.relative[e[l].type])f=[ve(ye(f),n)];else{if((n=r.filter[e[l].type].apply(null,e[l].matches))[x]){for(i=++l;o>i&&!r.relative[e[i].type];i++);return xe(l>1&&ye(f),l>1&&ge(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,i>l&&we(e.slice(l,i)),o>i&&we(e=e.slice(i)),o>i&&ge(e))}f.push(n)}return ye(f)}function Te(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,l,c){var d,f,h,m=0,g="0",v=o&&[],y=[],b=u,x=o||i&&r.find.TAG("*",c),w=T+=null==b?1:Math.random()||.1,C=x.length;for(c&&(u=a!==p&&a);g!==C&&null!=(d=x[g]);g++){if(i&&d){for(f=0;h=e[f++];)if(h(d,a,s)){l.push(d);break}c&&(T=w)}n&&((d=!h&&d)&&m--,o&&v.push(d))}if(m+=g,n&&g!==m){for(f=0;h=t[f++];)h(v,y,a,s);if(o){if(m>0)for(;g--;)v[g]||y[g]||(y[g]=L.call(l));y=be(y)}q.apply(l,y),c&&!o&&y.length>0&&m+t.length>1&&oe.uniqueSort(l)}return c&&(T=w,u=b),v};return n?se(o):o}return me.prototype=r.filters=r.pseudos,r.setFilters=new me,a=oe.tokenize=function(e,t){var n,i,o,a,s,l,u,c=E[e+" "];if(c)return t?0:c.slice(0);for(s=e,l=[],u=r.preFilter;s;){for(a in(!n||(i=I.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),n=!1,(i=X.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(z," ")}),s=s.slice(n.length)),r.filter)!(i=Y[a].exec(s))||u[a]&&!(i=u[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):E(e,l).slice(0)},s=oe.compile=function(e,t){var n,r=[],i=[],o=k[e+" "];if(!o){for(t||(t=a(e)),n=t.length;n--;)(o=we(t[n]))[x]?r.push(o):i.push(o);(o=k(e,Te(i,r))).selector=e}return o},l=oe.select=function(e,t,i,o){var l,u,c,d,f,p="function"==typeof e&&e,h=!o&&a(e=p.selector||e);if(i=i||[],1===h.length){if((u=h[0]=h[0].slice(0)).length>2&&"ID"===(c=u[0]).type&&n.getById&&9===t.nodeType&&m&&r.relative[u[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(ne,re),t)||[])[0]))return i;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}for(l=Y.needsContext.test(e)?0:u.length;l--&&(c=u[l],!r.relative[d=c.type]);)if((f=r.find[d])&&(o=f(c.matches[0].replace(ne,re),ee.test(u[0].type)&&he(t.parentNode)||t))){if(u.splice(l,1),!(e=o.length&&ge(u)))return q.apply(i,o),i;break}}return(p||s(e,h))(o,t,!m,i,ee.test(e)&&he(t.parentNode)||t),i},n.sortStable=x.split("").sort(S).join("")===x,n.detectDuplicates=!!d,f(),n.sortDetached=le(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),le(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ue("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&le(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ue("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),le(function(e){return null==e.getAttribute("disabled")})||ue(F,function(e,t,n){var r;return n?void 0:!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);f.find=y,f.expr=y.selectors,f.expr[":"]=f.expr.pseudos,f.unique=y.uniqueSort,f.text=y.getText,f.isXMLDoc=y.isXML,f.contains=y.contains;var b=f.expr.match.needsContext,x=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function T(e,t,n){if(f.isFunction(t))return f.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return f.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(w.test(t))return f.filter(t,e,n);t=f.filter(t,e)}return f.grep(e,function(e){return f.inArray(e,t)>=0!==n})}f.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?f.find.matchesSelector(r,e)?[r]:[]:f.find.matches(e,f.grep(t,function(e){return 1===e.nodeType}))},f.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(f(e).filter(function(){for(t=0;i>t;t++)if(f.contains(r[t],this))return!0}));for(t=0;i>t;t++)f.find(e,r[t],n);return(n=this.pushStack(i>1?f.unique(n):n)).selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?f(e):e||[],!1).length}});var C,N=e.document,E=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(f.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(!(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:E.exec(e))||!n[1]&&t)return!t||t.jquery?(t||C).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof f?t[0]:t,f.merge(this,f.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:N,!0)),x.test(n[1])&&f.isPlainObject(t))for(n in t)f.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if((r=N.getElementById(n[2]))&&r.parentNode){if(r.id!==n[2])return C.find(e);this.length=1,this[0]=r}return this.context=N,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):f.isFunction(e)?void 0!==C.ready?C.ready(e):e(f):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),f.makeArray(e,this))}).prototype=f.fn,C=f(N);var k=/^(?:parents|prev(?:Until|All))/,S={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}f.extend({dir:function(e,t,n){for(var r=[],i=e[t];i&&9!==i.nodeType&&(void 0===n||1!==i.nodeType||!f(i).is(n));)1===i.nodeType&&r.push(i),i=i[t];return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),f.fn.extend({has:function(e){var t,n=f(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(f.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=b.test(e)||"string"!=typeof e?f(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&f.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?f.unique(o):o)},index:function(e){return e?"string"==typeof e?f.inArray(this[0],f(e)):f.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(f.unique(f.merge(this.get(),f(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),f.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return f.dir(e,"parentNode")},parentsUntil:function(e,t,n){return f.dir(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return f.dir(e,"nextSibling")},prevAll:function(e){return f.dir(e,"previousSibling")},nextUntil:function(e,t,n){return f.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return f.dir(e,"previousSibling",n)},siblings:function(e){return f.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return f.sibling(e.firstChild)},contents:function(e){return f.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:f.merge([],e.childNodes)}},function(e,t){f.fn[e]=function(n,r){var i=f.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=f.filter(r,i)),this.length>1&&(S[e]||(i=f.unique(i)),k.test(e)&&(i=i.reverse())),this.pushStack(i)}});var D,j=/\S+/g,L={};function H(){N.addEventListener?(N.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(N.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))}function q(){(N.addEventListener||"load"===event.type||"complete"===N.readyState)&&(H(),f.ready())}f.Callbacks=function(e){e="string"==typeof e?L[e]||function(e){var t=L[e]={};return f.each(e.match(j)||[],function(e,n){t[n]=!0}),t}(e):f.extend({},e);var t,n,r,i,o,a,s=[],l=!e.once&&[],u=function(d){for(n=e.memory&&d,r=!0,o=a||0,a=0,i=s.length,t=!0;s&&i>o;o++)if(!1===s[o].apply(d[0],d[1])&&e.stopOnFalse){n=!1;break}t=!1,s&&(l?l.length&&u(l.shift()):n?s=[]:c.disable())},c={add:function(){if(s){var r=s.length;!function t(n){f.each(n,function(n,r){var i=f.type(r);"function"===i?e.unique&&c.has(r)||s.push(r):r&&r.length&&"string"!==i&&t(r)})}(arguments),t?i=s.length:n&&(a=r,u(n))}return this},remove:function(){return s&&f.each(arguments,function(e,n){for(var r;(r=f.inArray(n,s,r))>-1;)s.splice(r,1),t&&(i>=r&&i--,o>=r&&o--)}),this},has:function(e){return e?f.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],i=0,this},disable:function(){return s=l=n=void 0,this},disabled:function(){return!s},lock:function(){return l=void 0,n||c.disable(),this},locked:function(){return!l},fireWith:function(e,n){return!s||r&&!l||(n=[e,(n=n||[]).slice?n.slice():n],t?l.push(n):u(n)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},f.extend({Deferred:function(e){var t=[["resolve","done",f.Callbacks("once memory"),"resolved"],["reject","fail",f.Callbacks("once memory"),"rejected"],["notify","progress",f.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return f.Deferred(function(n){f.each(t,function(t,o){var a=f.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&f.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?f.extend(e,r):r}},i={};return r.pipe=r.then,f.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,i,o=0,a=r.call(arguments),s=a.length,l=1!==s||e&&f.isFunction(e.promise)?s:0,u=1===l?e:f.Deferred(),c=function(e,n,i){return function(o){n[e]=this,i[e]=arguments.length>1?r.call(arguments):o,i===t?u.notifyWith(n,i):--l||u.resolveWith(n,i)}};if(s>1)for(t=new Array(s),n=new Array(s),i=new Array(s);s>o;o++)a[o]&&f.isFunction(a[o].promise)?a[o].promise().done(c(o,i,a)).fail(u.reject).progress(c(o,n,t)):--l;return l||u.resolveWith(i,a),u.promise()}}),f.fn.ready=function(e){return f.ready.promise().done(e),this},f.extend({isReady:!1,readyWait:1,holdReady:function(e){e?f.readyWait++:f.ready(!0)},ready:function(e){if(!0===e?!--f.readyWait:!f.isReady){if(!N.body)return setTimeout(f.ready);f.isReady=!0,!0!==e&&--f.readyWait>0||(D.resolveWith(N,[f]),f.fn.triggerHandler&&(f(N).triggerHandler("ready"),f(N).off("ready")))}}}),f.ready.promise=function(t){if(!D)if(D=f.Deferred(),"complete"===N.readyState)setTimeout(f.ready);else if(N.addEventListener)N.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{N.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var n=!1;try{n=null==e.frameElement&&N.documentElement}catch(e){}n&&n.doScroll&&function e(){if(!f.isReady){try{n.doScroll("left")}catch(t){return setTimeout(e,50)}H(),f.ready()}}()}return D.promise(t)};var _,M="undefined";for(_ in f(c))break;c.ownLast="0"!==_,c.inlineBlockNeedsLayout=!1,f(function(){var e,t,n,r;(n=N.getElementsByTagName("body")[0])&&n.style&&(t=N.createElement("div"),(r=N.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),typeof t.style.zoom!==M&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",c.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(r))}),function(){var e=N.createElement("div");if(null==c.deleteExpando){c.deleteExpando=!0;try{delete e.test}catch(e){c.deleteExpando=!1}}e=null}(),f.acceptData=function(e){var t=f.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||!0!==t&&e.getAttribute("classid")===t)};var F=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function B(e,t,n){if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(O,"-$1").toLowerCase();if("string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:F.test(n)?f.parseJSON(n):n)}catch(e){}f.data(e,t,n)}else n=void 0}return n}function P(e){var t;for(t in e)if(("data"!==t||!f.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function R(e,t,r,i){if(f.acceptData(e)){var o,a,s=f.expando,l=e.nodeType,u=l?f.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||void 0!==r||"string"!=typeof t)return c||(c=l?e[s]=n.pop()||f.guid++:s),u[c]||(u[c]=l?{}:{toJSON:f.noop}),("object"==typeof t||"function"==typeof t)&&(i?u[c]=f.extend(u[c],t):u[c].data=f.extend(u[c].data,t)),a=u[c],i||(a.data||(a.data={}),a=a.data),void 0!==r&&(a[f.camelCase(t)]=r),"string"==typeof t?null==(o=a[t])&&(o=a[f.camelCase(t)]):o=a,o}}function W(e,t,n){if(f.acceptData(e)){var r,i,o=e.nodeType,a=o?f.cache:e,s=o?e[f.expando]:f.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){f.isArray(t)?t=t.concat(f.map(t,f.camelCase)):t in r?t=[t]:t=(t=f.camelCase(t))in r?[t]:t.split(" "),i=t.length;for(;i--;)delete r[t[i]];if(n?!P(r):!f.isEmptyObject(r))return}(n||(delete a[s].data,P(a[s])))&&(o?f.cleanData([e],!0):c.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}f.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return!!(e=e.nodeType?f.cache[e[f.expando]]:e[f.expando])&&!P(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)}}),f.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=f.data(o),1===o.nodeType&&!f._data(o,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&(0===(r=a[n].name).indexOf("data-")&&B(o,r=f.camelCase(r.slice(5)),i[r]));f._data(o,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){f.data(this,e)}):arguments.length>1?this.each(function(){f.data(this,e,t)}):o?B(o,e,f.data(o,e)):void 0},removeData:function(e){return this.each(function(){f.removeData(this,e)})}}),f.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=f._data(e,t),n&&(!r||f.isArray(n)?r=f._data(e,t,f.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=f.queue(e,t),r=n.length,i=n.shift(),o=f._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){f.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return f._data(e,n)||f._data(e,n,{empty:f.Callbacks("once memory").add(function(){f._removeData(e,t+"queue"),f._removeData(e,n)})})}}),f.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?f.queue(this[0],e):void 0===t?this:this.each(function(){var n=f.queue(this,e,t);f._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&f.dequeue(this,e)})},dequeue:function(e){return this.each(function(){f.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=f.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=f._data(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,z=["Top","Right","Bottom","Left"],I=function(e,t){return e=t||e,"none"===f.css(e,"display")||!f.contains(e.ownerDocument,e)},X=f.access=function(e,t,n,r,i,o,a){var s=0,l=e.length,u=null==n;if("object"===f.type(n))for(s in i=!0,n)f.access(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,f.isFunction(r)||(a=!0),u&&(a?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(f(e),n)})),t))for(;l>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:u?t.call(e):l?t(e[0],n):o},U=/^(?:checkbox|radio)$/i;!function(){var e=N.createElement("input"),t=N.createElement("div"),n=N.createDocumentFragment();if(t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c.leadingWhitespace=3===t.firstChild.nodeType,c.tbody=!t.getElementsByTagName("tbody").length,c.htmlSerialize=!!t.getElementsByTagName("link").length,c.html5Clone="<:nav></:nav>"!==N.createElement("nav").cloneNode(!0).outerHTML,e.type="checkbox",e.checked=!0,n.appendChild(e),c.appendChecked=e.checked,t.innerHTML="<textarea>x</textarea>",c.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,n.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",c.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,c.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",function(){c.noCloneEvent=!1}),t.cloneNode(!0).click()),null==c.deleteExpando){c.deleteExpando=!0;try{delete t.test}catch(e){c.deleteExpando=!1}}}(),function(){var t,n,r=N.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(c[t+"Bubbles"]=n in e)||(r.setAttribute(n,"t"),c[t+"Bubbles"]=!1===r.attributes[n].expando);r=null}();var V=/^(?:input|select|textarea)$/i,J=/^key/,Y=/^(?:mouse|pointer|contextmenu)|click/,G=/^(?:focusinfocus|focusoutblur)$/,Q=/^([^.]*)(?:\.(.+)|)$/;function K(){return!0}function Z(){return!1}function ee(){try{return N.activeElement}catch(e){}}function te(e){var t=ne.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}f.event={global:{},add:function(e,t,n,r,i){var o,a,s,l,u,c,d,p,h,m,g,v=f._data(e);if(v){for(n.handler&&(n=(l=n).handler,i=l.selector),n.guid||(n.guid=f.guid++),(a=v.events)||(a=v.events={}),(c=v.handle)||((c=v.handle=function(e){return typeof f===M||e&&f.event.triggered===e.type?void 0:f.event.dispatch.apply(c.elem,arguments)}).elem=e),s=(t=(t||"").match(j)||[""]).length;s--;)h=g=(o=Q.exec(t[s])||[])[1],m=(o[2]||"").split(".").sort(),h&&(u=f.event.special[h]||{},h=(i?u.delegateType:u.bindType)||h,u=f.event.special[h]||{},d=f.extend({type:h,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&f.expr.match.needsContext.test(i),namespace:m.join(".")},l),(p=a[h])||((p=a[h]=[]).delegateCount=0,u.setup&&!1!==u.setup.call(e,r,m,c)||(e.addEventListener?e.addEventListener(h,c,!1):e.attachEvent&&e.attachEvent("on"+h,c))),u.add&&(u.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,d):p.push(d),f.event.global[h]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,d,p,h,m,g,v=f.hasData(e)&&f._data(e);if(v&&(c=v.events)){for(u=(t=(t||"").match(j)||[""]).length;u--;)if(h=g=(s=Q.exec(t[u])||[])[1],m=(s[2]||"").split(".").sort(),h){for(d=f.event.special[h]||{},p=c[h=(r?d.delegateType:d.bindType)||h]||[],s=s[2]&&new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=p.length;o--;)a=p[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(p.splice(o,1),a.selector&&p.delegateCount--,d.remove&&d.remove.call(e,a));l&&!p.length&&(d.teardown&&!1!==d.teardown.call(e,m,v.handle)||f.removeEvent(e,h,v.handle),delete c[h])}else for(h in c)f.event.remove(e,h+t[u],n,r,!0);f.isEmptyObject(c)&&(delete v.handle,f._removeData(e,"events"))}},trigger:function(t,n,r,i){var o,a,s,l,c,d,p,h=[r||N],m=u.call(t,"type")?t.type:t,g=u.call(t,"namespace")?t.namespace.split("."):[];if(s=d=r=r||N,3!==r.nodeType&&8!==r.nodeType&&!G.test(m+f.event.triggered)&&(m.indexOf(".")>=0&&(g=m.split("."),m=g.shift(),g.sort()),a=m.indexOf(":")<0&&"on"+m,(t=t[f.expando]?t:new f.Event(m,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:f.makeArray(n,[t]),c=f.event.special[m]||{},i||!c.trigger||!1!==c.trigger.apply(r,n))){if(!i&&!c.noBubble&&!f.isWindow(r)){for(l=c.delegateType||m,G.test(l+m)||(s=s.parentNode);s;s=s.parentNode)h.push(s),d=s;d===(r.ownerDocument||N)&&h.push(d.defaultView||d.parentWindow||e)}for(p=0;(s=h[p++])&&!t.isPropagationStopped();)t.type=p>1?l:c.bindType||m,(o=(f._data(s,"events")||{})[t.type]&&f._data(s,"handle"))&&o.apply(s,n),(o=a&&s[a])&&o.apply&&f.acceptData(s)&&(t.result=o.apply(s,n),!1===t.result&&t.preventDefault());if(t.type=m,!i&&!t.isDefaultPrevented()&&(!c._default||!1===c._default.apply(h.pop(),n))&&f.acceptData(r)&&a&&r[m]&&!f.isWindow(r)){(d=r[a])&&(r[a]=null),f.event.triggered=m;try{r[m]()}catch(e){}f.event.triggered=void 0,d&&(r[a]=d)}return t.result}},dispatch:function(e){e=f.event.fix(e);var t,n,i,o,a,s=[],l=r.call(arguments),u=(f._data(this,"events")||{})[e.type]||[],c=f.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(s=f.event.handlers.call(this,e,u),t=0;(o=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,a=0;(i=o.handlers[a++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,void 0!==(n=((f.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l))&&!1===(e.result=n)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,l=e.target;if(s&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(!0!==l.disabled||"click"!==e.type)){for(i=[],o=0;s>o;o++)void 0===i[n=(r=t[o]).selector+" "]&&(i[n]=r.needsContext?f(n,this).index(l)>=0:f.find(n,this,null,[l]).length),i[n]&&i.push(r);i.length&&a.push({elem:l,handlers:i})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[f.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=Y.test(i)?this.mouseHooks:J.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new f.Event(o),t=r.length;t--;)e[n=r[t]]=o[n];return e.target||(e.target=o.srcElement||N),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button,a=t.fromElement;return null==e.pageX&&null!=t.clientX&&(i=(r=e.target.ownerDocument||N).documentElement,n=r.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ee()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===ee()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return f.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(e){return f.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=f.extend(new f.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?f.event.trigger(i,null,t):f.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},f.removeEvent=N.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===M&&(e[r]=null),e.detachEvent(r,n))},f.Event=function(e,t){return this instanceof f.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?K:Z):this.type=e,t&&f.extend(this,t),this.timeStamp=e&&e.timeStamp||f.now(),void(this[f.expando]=!0)):new f.Event(e,t)},f.Event.prototype={isDefaultPrevented:Z,isPropagationStopped:Z,isImmediatePropagationStopped:Z,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=K,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=K,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=K,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},f.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){f.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return(!r||r!==this&&!f.contains(this,r))&&(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),c.submitBubbles||(f.event.special.submit={setup:function(){return!f.nodeName(this,"form")&&void f.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=f.nodeName(t,"input")||f.nodeName(t,"button")?t.form:void 0;n&&!f._data(n,"submitBubbles")&&(f.event.add(n,"submit._submit",function(e){e._submit_bubble=!0}),f._data(n,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&f.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return!f.nodeName(this,"form")&&void f.event.remove(this,"._submit")}}),c.changeBubbles||(f.event.special.change={setup:function(){return V.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(f.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),f.event.simulate("change",this,e,!0)})),!1):void f.event.add(this,"beforeactivate._change",function(e){var t=e.target;V.test(t.nodeName)&&!f._data(t,"changeBubbles")&&(f.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||f.event.simulate("change",this.parentNode,e,!0)}),f._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return f.event.remove(this,"._change"),!V.test(this.nodeName)}}),c.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){f.event.simulate(t,e.target,f.event.fix(e),!0)};f.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=f._data(r,t);i||r.addEventListener(e,n,!0),f._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=f._data(r,t)-1;i?f._data(r,t,i):(r.removeEventListener(e,n,!0),f._removeData(r,t))}}}),f.fn.extend({on:function(e,t,n,r,i){var o,a;if("object"==typeof e){for(o in"string"!=typeof t&&(n=n||t,t=void 0),e)this.on(o,t,n,e[o],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),!1===r)r=Z;else if(!r)return this;return 1===i&&(a=r,(r=function(e){return f().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=f.guid++)),this.each(function(){f.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,f(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(!1===t||"function"==typeof t)&&(n=t,t=void 0),!1===n&&(n=Z),this.each(function(){f.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){f.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?f.event.trigger(e,t,n,!0):void 0}});var ne="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",re=/ jQuery\d+="(?:null|\d+)"/g,ie=new RegExp("<(?:"+ne+")[\\s/>]","i"),oe=/^\s+/,ae=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,se=/<([\w:]+)/,le=/<tbody/i,ue=/<|&#?\w+;/,ce=/<(?:script|style|link)/i,de=/checked\s*(?:[^=]|=\s*.checked.)/i,fe=/^$|\/(?:java|ecma)script/i,pe=/^true\/(.*)/,he=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,me={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:c.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},ge=te(N).appendChild(N.createElement("div"));function ve(e,t){var n,r,i=0,o=typeof e.getElementsByTagName!==M?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==M?e.querySelectorAll(t||"*"):void 0;if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||f.nodeName(r,t)?o.push(r):f.merge(o,ve(r,t));return void 0===t||t&&f.nodeName(e,t)?f.merge([e],o):o}function ye(e){U.test(e.type)&&(e.defaultChecked=e.checked)}function be(e,t){return f.nodeName(e,"table")&&f.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function xe(e){return e.type=(null!==f.find.attr(e,"type"))+"/"+e.type,e}function we(e){var t=pe.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Te(e,t){for(var n,r=0;null!=(n=e[r]);r++)f._data(n,"globalEval",!t||f._data(t[r],"globalEval"))}function Ce(e,t){if(1===t.nodeType&&f.hasData(e)){var n,r,i,o=f._data(e),a=f._data(t,o),s=o.events;if(s)for(n in delete a.handle,a.events={},s)for(r=0,i=s[n].length;i>r;r++)f.event.add(t,n,s[n][r]);a.data&&(a.data=f.extend({},a.data))}}function Ne(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!c.noCloneEvent&&t[f.expando]){for(r in(i=f._data(t)).events)f.removeEvent(t,r,i.handle);t.removeAttribute(f.expando)}"script"===n&&t.text!==e.text?(xe(t).text=e.text,we(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),c.html5Clone&&e.innerHTML&&!f.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&U.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}me.optgroup=me.option,me.tbody=me.tfoot=me.colgroup=me.caption=me.thead,me.th=me.td,f.extend({clone:function(e,t,n){var r,i,o,a,s,l=f.contains(e.ownerDocument,e);if(c.html5Clone||f.isXMLDoc(e)||!ie.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(ge.innerHTML=e.outerHTML,ge.removeChild(o=ge.firstChild)),!(c.noCloneEvent&&c.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||f.isXMLDoc(e)))for(r=ve(o),s=ve(e),a=0;null!=(i=s[a]);++a)r[a]&&Ne(i,r[a]);if(t)if(n)for(s=s||ve(e),r=r||ve(o),a=0;null!=(i=s[a]);a++)Ce(i,r[a]);else Ce(e,o);return(r=ve(o,"script")).length>0&&Te(r,!l&&ve(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){for(var i,o,a,s,l,u,d,p=e.length,h=te(t),m=[],g=0;p>g;g++)if((o=e[g])||0===o)if("object"===f.type(o))f.merge(m,o.nodeType?[o]:o);else if(ue.test(o)){for(s=s||h.appendChild(t.createElement("div")),l=(se.exec(o)||["",""])[1].toLowerCase(),d=me[l]||me._default,s.innerHTML=d[1]+o.replace(ae,"<$1></$2>")+d[2],i=d[0];i--;)s=s.lastChild;if(!c.leadingWhitespace&&oe.test(o)&&m.push(t.createTextNode(oe.exec(o)[0])),!c.tbody)for(i=(o="table"!==l||le.test(o)?"<table>"!==d[1]||le.test(o)?0:s:s.firstChild)&&o.childNodes.length;i--;)f.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u);for(f.merge(m,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=h.lastChild}else m.push(t.createTextNode(o));for(s&&h.removeChild(s),c.appendChecked||f.grep(ve(m,"input"),ye),g=0;o=m[g++];)if((!r||-1===f.inArray(o,r))&&(a=f.contains(o.ownerDocument,o),s=ve(h.appendChild(o),"script"),a&&Te(s),n))for(i=0;o=s[i++];)fe.test(o.type||"")&&n.push(o);return s=null,h},cleanData:function(e,t){for(var r,i,o,a,s=0,l=f.expando,u=f.cache,d=c.deleteExpando,p=f.event.special;null!=(r=e[s]);s++)if((t||f.acceptData(r))&&(a=(o=r[l])&&u[o])){if(a.events)for(i in a.events)p[i]?f.event.remove(r,i):f.removeEvent(r,i,a.handle);u[o]&&(delete u[o],d?delete r[l]:typeof r.removeAttribute!==M?r.removeAttribute(l):r[l]=null,n.push(o))}}}),f.fn.extend({text:function(e){return X(this,function(e){return void 0===e?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||N).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||be(this,e).appendChild(e)})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=be(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?f.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||f.cleanData(ve(n)),n.parentNode&&(t&&f.contains(n.ownerDocument,n)&&Te(ve(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&f.cleanData(ve(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&f.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return f.clone(this,e,t)})},html:function(e){return X(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(re,""):void 0;if(!("string"!=typeof e||ce.test(e)||!c.htmlSerialize&&ie.test(e)||!c.leadingWhitespace&&oe.test(e)||me[(se.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(ae,"<$1></$2>");try{for(;r>n;n++)1===(t=this[n]||{}).nodeType&&(f.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,f.cleanData(ve(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=i.apply([],e);var n,r,o,a,s,l,u=0,d=this.length,p=this,h=d-1,m=e[0],g=f.isFunction(m);if(g||d>1&&"string"==typeof m&&!c.checkClone&&de.test(m))return this.each(function(n){var r=p.eq(n);g&&(e[0]=m.call(this,n,r.html())),r.domManip(e,t)});if(d&&(n=(l=f.buildFragment(e,this[0].ownerDocument,!1,this)).firstChild,1===l.childNodes.length&&(l=n),n)){for(o=(a=f.map(ve(l,"script"),xe)).length;d>u;u++)r=l,u!==h&&(r=f.clone(r,!0,!0),o&&f.merge(a,ve(r,"script"))),t.call(this[u],r,u);if(o)for(s=a[a.length-1].ownerDocument,f.map(a,we),u=0;o>u;u++)r=a[u],fe.test(r.type||"")&&!f._data(r,"globalEval")&&f.contains(s,r)&&(r.src?f._evalUrl&&f._evalUrl(r.src):f.globalEval((r.text||r.textContent||r.innerHTML||"").replace(he,"")));l=n=null}return this}}),f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){f.fn[e]=function(e){for(var n,r=0,i=[],a=f(e),s=a.length-1;s>=r;r++)n=r===s?this:this.clone(!0),f(a[r])[t](n),o.apply(i,n.get());return this.pushStack(i)}});var Ee,ke={};function Se(t,n){var r,i=f(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:f.css(i[0],"display");return i.detach(),o}function Ae(e){var t=N,n=ke[e];return n||("none"!==(n=Se(e,t))&&n||((t=((Ee=(Ee||f("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow||Ee[0].contentDocument).document).write(),t.close(),n=Se(e,t),Ee.detach()),ke[e]=n),n}!function(){var e;c.shrinkWrapBlocks=function(){return null!=e?e:(e=!1,(n=N.getElementsByTagName("body")[0])&&n.style?(t=N.createElement("div"),(r=N.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),typeof t.style.zoom!==M&&(t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",t.appendChild(N.createElement("div")).style.width="5px",e=3!==t.offsetWidth),n.removeChild(r),e):void 0);var t,n,r}}();var De,je,Le=/^margin/,He=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),qe=/^(top|right|bottom|left)$/;function _e(e,t){return{get:function(){var n=e();if(null!=n)return n?void delete this.get:(this.get=t).apply(this,arguments)}}}e.getComputedStyle?(De=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)},je=function(e,t,n){var r,i,o,a,s=e.style;return a=(n=n||De(e))?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==a||f.contains(e.ownerDocument,e)||(a=f.style(e,t)),He.test(a)&&Le.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0===a?a:a+""}):N.documentElement.currentStyle&&(De=function(e){return e.currentStyle},je=function(e,t,n){var r,i,o,a,s=e.style;return null==(a=(n=n||De(e))?n[t]:void 0)&&s&&s[t]&&(a=s[t]),He.test(a)&&!qe.test(t)&&(r=s.left,(o=(i=e.runtimeStyle)&&i.left)&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"}),function(){var t,n,r,i,o,a,s;if((t=N.createElement("div")).innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=(r=t.getElementsByTagName("a")[0])&&r.style){function l(){var t,n,r,l;(n=N.getElementsByTagName("body")[0])&&n.style&&(t=N.createElement("div"),(r=N.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),t.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",i=o=!1,s=!0,e.getComputedStyle&&(i="1%"!==(e.getComputedStyle(t,null)||{}).top,o="4px"===(e.getComputedStyle(t,null)||{width:"4px"}).width,(l=t.appendChild(N.createElement("div"))).style.cssText=t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",l.style.marginRight=l.style.width="0",t.style.width="1px",s=!parseFloat((e.getComputedStyle(l,null)||{}).marginRight),t.removeChild(l)),t.innerHTML="<table><tr><td></td><td>t</td></tr></table>",(l=t.getElementsByTagName("td"))[0].style.cssText="margin:0;border:0;padding:0;display:none",(a=0===l[0].offsetHeight)&&(l[0].style.display="",l[1].style.display="none",a=0===l[0].offsetHeight),n.removeChild(r))}n.cssText="float:left;opacity:.5",c.opacity="0.5"===n.opacity,c.cssFloat=!!n.cssFloat,t.style.backgroundClip="content-box",t.cloneNode(!0).style.backgroundClip="",c.clearCloneStyle="content-box"===t.style.backgroundClip,c.boxSizing=""===n.boxSizing||""===n.MozBoxSizing||""===n.WebkitBoxSizing,f.extend(c,{reliableHiddenOffsets:function(){return null==a&&l(),a},boxSizingReliable:function(){return null==o&&l(),o},pixelPosition:function(){return null==i&&l(),i},reliableMarginRight:function(){return null==s&&l(),s}})}}(),f.swap=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};var Me=/alpha\([^)]*\)/i,Fe=/opacity\s*=\s*([^)]*)/,Oe=/^(none|table(?!-c[ea]).+)/,Be=new RegExp("^("+$+")(.*)$","i"),Pe=new RegExp("^([+-])=("+$+")","i"),Re={position:"absolute",visibility:"hidden",display:"block"},We={letterSpacing:"0",fontWeight:"400"},$e=["Webkit","O","Moz","ms"];function ze(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=$e.length;i--;)if((t=$e[i]+n)in e)return t;return r}function Ie(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)(r=e[a]).style&&(o[a]=f._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&I(r)&&(o[a]=f._data(r,"olddisplay",Ae(r.nodeName)))):(i=I(r),(n&&"none"!==n||!i)&&f._data(r,"olddisplay",i?n:f.css(r,"display"))));for(a=0;s>a;a++)(r=e[a]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function Xe(e,t,n){var r=Be.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ue(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=f.css(e,n+z[o],!0,i)),r?("content"===n&&(a-=f.css(e,"padding"+z[o],!0,i)),"margin"!==n&&(a-=f.css(e,"border"+z[o]+"Width",!0,i))):(a+=f.css(e,"padding"+z[o],!0,i),"padding"!==n&&(a+=f.css(e,"border"+z[o]+"Width",!0,i)));return a}function Ve(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=De(e),a=c.boxSizing&&"border-box"===f.css(e,"boxSizing",!1,o);if(0>=i||null==i){if((0>(i=je(e,t,o))||null==i)&&(i=e.style[t]),He.test(i))return i;r=a&&(c.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+Ue(e,t,n||(a?"border":"content"),r,o)+"px"}function Je(e,t,n,r,i){return new Je.prototype.init(e,t,n,r,i)}f.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=je(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:c.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=f.camelCase(t),l=e.style;if(t=f.cssProps[s]||(f.cssProps[s]=ze(l,s)),a=f.cssHooks[t]||f.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];if("string"===(o=typeof n)&&(i=Pe.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(f.css(e,t)),o="number"),null!=n&&n==n&&("number"!==o||f.cssNumber[s]||(n+="px"),c.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,r)))))try{l[t]=n}catch(e){}}},css:function(e,t,n,r){var i,o,a,s=f.camelCase(t);return t=f.cssProps[s]||(f.cssProps[s]=ze(e.style,s)),(a=f.cssHooks[t]||f.cssHooks[s])&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=je(e,t,r)),"normal"===o&&t in We&&(o=We[t]),""===n||n?(i=parseFloat(o),!0===n||f.isNumeric(i)?i||0:o):o}}),f.each(["height","width"],function(e,t){f.cssHooks[t]={get:function(e,n,r){return n?Oe.test(f.css(e,"display"))&&0===e.offsetWidth?f.swap(e,Re,function(){return Ve(e,t,r)}):Ve(e,t,r):void 0},set:function(e,n,r){var i=r&&De(e);return Xe(0,n,r?Ue(e,t,r,c.boxSizing&&"border-box"===f.css(e,"boxSizing",!1,i),i):0)}}}),c.opacity||(f.cssHooks.opacity={get:function(e,t){return Fe.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=f.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===f.trim(o.replace(Me,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=Me.test(o)?o.replace(Me,i):o+" "+i)}}),f.cssHooks.marginRight=_e(c.reliableMarginRight,function(e,t){return t?f.swap(e,{display:"inline-block"},je,[e,"marginRight"]):void 0}),f.each({margin:"",padding:"",border:"Width"},function(e,t){f.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+z[r]+t]=o[r]||o[r-2]||o[0];return i}},Le.test(e)||(f.cssHooks[e+t].set=Xe)}),f.fn.extend({css:function(e,t){return X(this,function(e,t,n){var r,i,o={},a=0;if(f.isArray(t)){for(r=De(e),i=t.length;i>a;a++)o[t[a]]=f.css(e,t[a],!1,r);return o}return void 0!==n?f.style(e,t,n):f.css(e,t)},e,t,arguments.length>1)},show:function(){return Ie(this,!0)},hide:function(){return Ie(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){I(this)?f(this).show():f(this).hide()})}}),f.Tween=Je,Je.prototype={constructor:Je,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(f.cssNumber[n]?"":"px")},cur:function(){var e=Je.propHooks[this.prop];return e&&e.get?e.get(this):Je.propHooks._default.get(this)},run:function(e){var t,n=Je.propHooks[this.prop];return this.pos=t=this.options.duration?f.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Je.propHooks._default.set(this),this}},Je.prototype.init.prototype=Je.prototype,Je.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=f.css(e.elem,e.prop,""))&&"auto"!==t?t:0:e.elem[e.prop]},set:function(e){f.fx.step[e.prop]?f.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[f.cssProps[e.prop]]||f.cssHooks[e.prop])?f.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Je.propHooks.scrollTop=Je.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},f.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},f.fx=Je.prototype.init,f.fx.step={};var Ye,Ge,Qe=/^(?:toggle|show|hide)$/,Ke=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),Ze=/queueHooks$/,et=[function(e,t,n){var r,i,o,a,s,l,u,d=this,p={},h=e.style,m=e.nodeType&&I(e),g=f._data(e,"fxshow");for(r in n.queue||(null==(s=f._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,d.always(function(){d.always(function(){s.unqueued--,f.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],u=f.css(e,"display"),"inline"===("none"===u?f._data(e,"olddisplay")||Ae(e.nodeName):u)&&"none"===f.css(e,"float")&&(c.inlineBlockNeedsLayout&&"inline"!==Ae(e.nodeName)?h.zoom=1:h.display="inline-block")),n.overflow&&(h.overflow="hidden",c.shrinkWrapBlocks()||d.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),t)if(i=t[r],Qe.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(m?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;m=!0}p[r]=g&&g[r]||f.style(e,r)}else u=void 0;if(f.isEmptyObject(p))"inline"===("none"===u?Ae(e.nodeName):u)&&(h.display=u);else for(r in g?"hidden"in g&&(m=g.hidden):g=f._data(e,"fxshow",{}),o&&(g.hidden=!m),m?f(e).show():d.done(function(){f(e).hide()}),d.done(function(){var t;for(t in f._removeData(e,"fxshow"),p)f.style(e,t,p[t])}),p)a=it(m?g[r]:0,r,d),r in g||(g[r]=a.start,m&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}],tt={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Ke.exec(t),o=i&&i[3]||(f.cssNumber[e]?"":"px"),a=(f.cssNumber[e]||"px"!==o&&+r)&&Ke.exec(f.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do{a/=s=s||".5",f.style(n.elem,e,a+o)}while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function nt(){return setTimeout(function(){Ye=void 0}),Ye=f.now()}function rt(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)r["margin"+(n=z[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function it(e,t,n){for(var r,i=(tt[t]||[]).concat(tt["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,t,e))return r}function ot(e,t,n){var r,i,o=0,a=et.length,s=f.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;for(var t=Ye||nt(),n=Math.max(0,u.startTime+u.duration-t),r=1-(n/u.duration||0),o=0,a=u.tweens.length;a>o;o++)u.tweens[o].run(r);return s.notifyWith(e,[u,r,n]),1>r&&a?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:f.extend({},t),opts:f.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Ye||nt(),duration:n.duration,tweens:[],createTween:function(t,n){var r=f.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=f.camelCase(n)],o=e[n],f.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=f.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,u.opts.specialEasing);a>o;o++)if(r=et[o].call(u,e,c,u.opts))return r;return f.map(c,it,u),f.isFunction(u.opts.start)&&u.opts.start.call(e,u),f.fx.timer(f.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}f.Animation=f.extend(ot,{tweener:function(e,t){f.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],tt[n]=tt[n]||[],tt[n].unshift(t)},prefilter:function(e,t){t?et.unshift(e):et.push(e)}}),f.speed=function(e,t,n){var r=e&&"object"==typeof e?f.extend({},e):{complete:n||!n&&t||f.isFunction(e)&&e,duration:e,easing:n&&t||t&&!f.isFunction(t)&&t};return r.duration=f.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in f.fx.speeds?f.fx.speeds[r.duration]:f.fx.speeds._default,(null==r.queue||!0===r.queue)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){f.isFunction(r.old)&&r.old.call(this),r.queue&&f.dequeue(this,r.queue)},r},f.fn.extend({fadeTo:function(e,t,n,r){return this.filter(I).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=f.isEmptyObject(e),o=f.speed(t,n,r),a=function(){var t=ot(this,f.extend({},e),o);(i||f._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=f.timers,a=f._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&Ze.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&f.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=f._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=f.timers,a=r?r.length:0;for(n.finish=!0,f.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),f.each(["toggle","show","hide"],function(e,t){var n=f.fn[t];f.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(rt(t,!0),e,r,i)}}),f.each({slideDown:rt("show"),slideUp:rt("hide"),slideToggle:rt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){f.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),f.timers=[],f.fx.tick=function(){var e,t=f.timers,n=0;for(Ye=f.now();n<t.length;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||f.fx.stop(),Ye=void 0},f.fx.timer=function(e){f.timers.push(e),e()?f.fx.start():f.timers.pop()},f.fx.interval=13,f.fx.start=function(){Ge||(Ge=setInterval(f.fx.tick,f.fx.interval))},f.fx.stop=function(){clearInterval(Ge),Ge=null},f.fx.speeds={slow:600,fast:200,_default:400},f.fn.delay=function(e,t){return e=f.fx&&f.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e,t,n,r,i;(t=N.createElement("div")).setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=t.getElementsByTagName("a")[0],i=(n=N.createElement("select")).appendChild(N.createElement("option")),e=t.getElementsByTagName("input")[0],r.style.cssText="top:1px",c.getSetAttribute="t"!==t.className,c.style=/top/.test(r.getAttribute("style")),c.hrefNormalized="/a"===r.getAttribute("href"),c.checkOn=!!e.value,c.optSelected=i.selected,c.enctype=!!N.createElement("form").enctype,n.disabled=!0,c.optDisabled=!i.disabled,(e=N.createElement("input")).setAttribute("value",""),c.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),c.radioValue="t"===e.value}();var at=/\r/g;f.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=f.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,f(this).val()):e)?i="":"number"==typeof i?i+="":f.isArray(i)&&(i=f.map(i,function(e){return null==e?"":e+""})),(t=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=f.valHooks[i.type]||f.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(at,""):null==n?"":n:void 0}}),f.extend({valHooks:{option:{get:function(e){var t=f.find.attr(e,"value");return null!=t?t:f.trim(f.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;s>l;l++)if(!(!(n=r[l]).selected&&l!==i||(c.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&f.nodeName(n.parentNode,"optgroup"))){if(t=f(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=f.makeArray(t),a=i.length;a--;)if(r=i[a],f.inArray(f.valHooks.option.get(r),o)>=0)try{r.selected=n=!0}catch(e){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]={set:function(e,t){return f.isArray(t)?e.checked=f.inArray(f(e).val(),t)>=0:void 0}},c.checkOn||(f.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var st,lt,ut=f.expr.attrHandle,ct=/^(?:checked|selected)$/i,dt=c.getSetAttribute,ft=c.input;f.fn.extend({attr:function(e,t){return X(this,f.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){f.removeAttr(this,e)})}}),f.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===M?f.prop(e,t,n):(1===o&&f.isXMLDoc(e)||(t=t.toLowerCase(),r=f.attrHooks[t]||(f.expr.match.bool.test(t)?lt:st)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=f.find.attr(e,t))?void 0:i:null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void f.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(j);if(o&&1===e.nodeType)for(;n=o[i++];)r=f.propFix[n]||n,f.expr.match.bool.test(n)?ft&&dt||!ct.test(n)?e[r]=!1:e[f.camelCase("default-"+n)]=e[r]=!1:f.attr(e,n,""),e.removeAttribute(dt?n:r)},attrHooks:{type:{set:function(e,t){if(!c.radioValue&&"radio"===t&&f.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),lt={set:function(e,t,n){return!1===t?f.removeAttr(e,n):ft&&dt||!ct.test(n)?e.setAttribute(!dt&&f.propFix[n]||n,n):e[f.camelCase("default-"+n)]=e[n]=!0,n}},f.each(f.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ut[t]||f.find.attr;ut[t]=ft&&dt||!ct.test(t)?function(e,t,r){var i,o;return r||(o=ut[t],ut[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,ut[t]=o),i}:function(e,t,n){return n?void 0:e[f.camelCase("default-"+t)]?t.toLowerCase():null}}),ft&&dt||(f.attrHooks.value={set:function(e,t,n){return f.nodeName(e,"input")?void(e.defaultValue=t):st&&st.set(e,t,n)}}),dt||(st={set:function(e,t,n){var r=e.getAttributeNode(n);return r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n)?t:void 0}},ut.id=ut.name=ut.coords=function(e,t,n){var r;return n?void 0:(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},f.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:void 0},set:st.set},f.attrHooks.contenteditable={set:function(e,t,n){st.set(e,""!==t&&t,n)}},f.each(["width","height"],function(e,t){f.attrHooks[t]={set:function(e,n){return""===n?(e.setAttribute(t,"auto"),n):void 0}}})),c.style||(f.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var pt=/^(?:input|select|textarea|button|object)$/i,ht=/^(?:a|area)$/i;f.fn.extend({prop:function(e,t){return X(this,f.prop,e,t,arguments.length>1)},removeProp:function(e){return e=f.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(e){}})}}),f.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return(1!==o||!f.isXMLDoc(e))&&(t=f.propFix[t]||t,i=f.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=f.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||ht.test(e.nodeName)&&e.href?0:-1}}}}),c.hrefNormalized||f.each(["href","src"],function(e,t){f.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),c.optSelected||(f.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),f.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){f.propFix[this.toLowerCase()]=this}),c.enctype||(f.propFix.enctype="encoding");var mt=/[\t\r\n\f]/g;f.fn.extend({addClass:function(e){var t,n,r,i,o,a,s=0,l=this.length,u="string"==typeof e&&e;if(f.isFunction(e))return this.each(function(t){f(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(j)||[];l>s;s++)if(r=1===(n=this[s]).nodeType&&(n.className?(" "+n.className+" ").replace(mt," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");a=f.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,r,i,o,a,s=0,l=this.length,u=0===arguments.length||"string"==typeof e&&e;if(f.isFunction(e))return this.each(function(t){f(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(j)||[];l>s;s++)if(r=1===(n=this[s]).nodeType&&(n.className?(" "+n.className+" ").replace(mt," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");a=e?f.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(f.isFunction(e)?function(n){f(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=f(this),o=e.match(j)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===M||"boolean"===n)&&(this.className&&f._data(this,"__className__",this.className),this.className=this.className||!1===e?"":f._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(mt," ").indexOf(t)>=0)return!0;return!1}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){f.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),f.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var gt=f.now(),vt=/\?/,yt=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;f.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,r=null,i=f.trim(t+"");return i&&!f.trim(i.replace(yt,function(e,t,i,o){return n&&t&&(r=0),0===r?e:(n=i||t,r+=!o-!i,"")}))?Function("return "+i)():f.error("Invalid JSON: "+t)},f.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{e.DOMParser?n=(new DOMParser).parseFromString(t,"text/xml"):((n=new ActiveXObject("Microsoft.XMLDOM")).async="false",n.loadXML(t))}catch(e){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||f.error("Invalid XML: "+t),n};var bt,xt,wt=/#.*$/,Tt=/([?&])_=[^&]*/,Ct=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nt=/^(?:GET|HEAD)$/,Et=/^\/\//,kt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,St={},At={},Dt="*/".concat("*");try{xt=location.href}catch(e){(xt=N.createElement("a")).href="",xt=xt.href}function jt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(j)||[];if(f.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Lt(e,t,n,r){var i={},o=e===At;function a(s){var l;return i[s]=!0,f.each(e[s]||[],function(e,s){var u=s(t,n,r);return"string"!=typeof u||o||i[u]?o?!(l=u):void 0:(t.dataTypes.unshift(u),a(u),!1)}),l}return a(t.dataTypes[0])||!i["*"]&&a("*")}function Ht(e,t){var n,r,i=f.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&f.extend(!0,e,n),e}bt=kt.exec(xt.toLowerCase())||[],f.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xt,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ht(Ht(e,f.ajaxSettings),t):Ht(f.ajaxSettings,e)},ajaxPrefilter:jt(St),ajaxTransport:jt(At),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var n,r,i,o,a,s,l,u,c=f.ajaxSetup({},t),d=c.context||c,p=c.context&&(d.nodeType||d.jquery)?f(d):f.event,h=f.Deferred(),m=f.Callbacks("once memory"),g=c.statusCode||{},v={},y={},b=0,x="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!u)for(u={};t=Ct.exec(o);)u[t[1].toLowerCase()]=t[2];t=u[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)g[t]=[g[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||x;return l&&l.abort(t),T(0,t),this}};if(h.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,c.url=((e||c.url||xt)+"").replace(wt,"").replace(Et,bt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=f.trim(c.dataType||"*").toLowerCase().match(j)||[""],null==c.crossDomain&&(n=kt.exec(c.url.toLowerCase()),c.crossDomain=!(!n||n[1]===bt[1]&&n[2]===bt[2]&&(n[3]||("http:"===n[1]?"80":"443"))===(bt[3]||("http:"===bt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=f.param(c.data,c.traditional)),Lt(St,c,t,w),2===b)return w;for(r in(s=f.event&&c.global)&&0==f.active++&&f.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Nt.test(c.type),i=c.url,c.hasContent||(c.data&&(i=c.url+=(vt.test(i)?"&":"?")+c.data,delete c.data),!1===c.cache&&(c.url=Tt.test(i)?i.replace(Tt,"$1_="+gt++):i+(vt.test(i)?"&":"?")+"_="+gt++)),c.ifModified&&(f.lastModified[i]&&w.setRequestHeader("If-Modified-Since",f.lastModified[i]),f.etag[i]&&w.setRequestHeader("If-None-Match",f.etag[i])),(c.data&&c.hasContent&&!1!==c.contentType||t.contentType)&&w.setRequestHeader("Content-Type",c.contentType),w.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+Dt+"; q=0.01":""):c.accepts["*"]),c.headers)w.setRequestHeader(r,c.headers[r]);if(c.beforeSend&&(!1===c.beforeSend.call(d,w,c)||2===b))return w.abort();for(r in x="abort",{success:1,error:1,complete:1})w[r](c[r]);if(l=Lt(At,c,t,w)){w.readyState=1,s&&p.trigger("ajaxSend",[w,c]),c.async&&c.timeout>0&&(a=setTimeout(function(){w.abort("timeout")},c.timeout));try{b=1,l.send(v,T)}catch(e){if(!(2>b))throw e;T(-1,e)}}else T(-1,"No Transport");function T(e,t,n,r){var u,v,y,x,T,C=t;2!==b&&(b=2,a&&clearTimeout(a),l=void 0,o=r||"",w.readyState=e>0?4:0,u=e>=200&&300>e||304===e,n&&(x=function(e,t,n){for(var r,i,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){l.unshift(a);break}if(l[0]in n)o=l[0];else{for(a in n){if(!l[0]||e.converters[a+" "+l[0]]){o=a;break}r||(r=a)}o=o||r}return o?(o!==l[0]&&l.unshift(o),n[o]):void 0}(c,w,n)),x=function(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(a=u[l+" "+o]||u["* "+o]))for(i in u)if((s=i.split(" "))[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){!0===a?a=u[i]:!0!==u[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(c,x,w,u),u?(c.ifModified&&((T=w.getResponseHeader("Last-Modified"))&&(f.lastModified[i]=T),(T=w.getResponseHeader("etag"))&&(f.etag[i]=T)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=x.state,v=x.data,u=!(y=x.error))):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),w.status=e,w.statusText=(t||C)+"",u?h.resolveWith(d,[v,C,w]):h.rejectWith(d,[w,C,y]),w.statusCode(g),g=void 0,s&&p.trigger(u?"ajaxSuccess":"ajaxError",[w,c,u?v:y]),m.fireWith(d,[w,C]),s&&(p.trigger("ajaxComplete",[w,c]),--f.active||f.event.trigger("ajaxStop")))}return w},getJSON:function(e,t,n){return f.get(e,t,n,"json")},getScript:function(e,t){return f.get(e,void 0,t,"script")}}),f.each(["get","post"],function(e,t){f[t]=function(e,n,r,i){return f.isFunction(n)&&(i=i||r,r=n,n=void 0),f.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),f._evalUrl=function(e){return f.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},f.fn.extend({wrapAll:function(e){if(f.isFunction(e))return this.each(function(t){f(this).wrapAll(e.call(this,t))});if(this[0]){var t=f(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return this.each(f.isFunction(e)?function(t){f(this).wrapInner(e.call(this,t))}:function(){var t=f(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=f.isFunction(e);return this.each(function(n){f(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()}}),f.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!c.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||f.css(e,"display"))},f.expr.filters.visible=function(e){return!f.expr.filters.hidden(e)};var qt=/%20/g,_t=/\[\]$/,Mt=/\r?\n/g,Ft=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Bt(e,t,n,r){var i;if(f.isArray(t))f.each(t,function(t,i){n||_t.test(e)?r(e,i):Bt(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==f.type(t))r(e,t);else for(i in t)Bt(e+"["+i+"]",t[i],n,r)}f.param=function(e,t){var n,r=[],i=function(e,t){t=f.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=f.ajaxSettings&&f.ajaxSettings.traditional),f.isArray(e)||e.jquery&&!f.isPlainObject(e))f.each(e,function(){i(this.name,this.value)});else for(n in e)Bt(n,e[n],t,i);return r.join("&").replace(qt,"+")},f.fn.extend({serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=f.prop(this,"elements");return e?f.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!f(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ft.test(e)&&(this.checked||!U.test(e))}).map(function(e,t){var n=f(this).val();return null==n?null:f.isArray(n)?f.map(n,function(e){return{name:t.name,value:e.replace(Mt,"\r\n")}}):{name:t.name,value:n.replace(Mt,"\r\n")}}).get()}}),f.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$t()||function(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}()}:$t;var Pt=0,Rt={},Wt=f.ajaxSettings.xhr();function $t(){try{return new e.XMLHttpRequest}catch(e){}}e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Rt)Rt[e](void 0,!0)}),c.cors=!!Wt&&"withCredentials"in Wt,(Wt=c.ajax=!!Wt)&&f.ajaxTransport(function(e){var t;if(!e.crossDomain||c.cors)return{send:function(n,r){var i,o=e.xhr(),a=++Pt;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];for(i in e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest"),n)void 0!==n[i]&&o.setRequestHeader(i,n[i]+"");o.send(e.hasContent&&e.data||null),t=function(n,i){var s,l,u;if(t&&(i||4===o.readyState))if(delete Rt[a],t=void 0,o.onreadystatechange=f.noop,i)4!==o.readyState&&o.abort();else{u={},s=o.status,"string"==typeof o.responseText&&(u.text=o.responseText);try{l=o.statusText}catch(e){l=""}s||!e.isLocal||e.crossDomain?1223===s&&(s=204):s=u.text?200:404}u&&r(s,l,u,o.getAllResponseHeaders())},e.async?4===o.readyState?setTimeout(t):o.onreadystatechange=Rt[a]=t:t()},abort:function(){t&&t(void 0,!0)}}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return f.globalEval(e),e}}}),f.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),f.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=N.head||f("head")[0]||N.documentElement;return{send:function(r,i){(t=N.createElement("script")).async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||i(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var zt=[],It=/(=)\?(?=&|$)|\?\?/;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||f.expando+"_"+gt++;return this[e]=!0,e}}),f.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(It.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&It.test(t.data)&&"data");return s||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=f.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(It,"$1"+i):!1!==t.jsonp&&(t.url+=(vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||f.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,zt.push(i)),a&&f.isFunction(o)&&o(a[0]),a=o=void 0}),"script"):void 0}),f.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||N;var r=x.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=f.buildFragment([e],t,i),i&&i.length&&f(i).remove(),f.merge([],r.childNodes))};var Xt=f.fn.load;f.fn.load=function(e,t,n){if("string"!=typeof e&&Xt)return Xt.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>=0&&(r=f.trim(e.slice(s,e.length)),e=e.slice(0,s)),f.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),a.length>0&&f.ajax({url:e,type:o,dataType:"html",data:t}).done(function(e){i=arguments,a.html(r?f("<div>").append(f.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){a.each(n,i||[e.responseText,t,e])}),this},f.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){f.fn[t]=function(e){return this.on(t,e)}}),f.expr.filters.animated=function(e){return f.grep(f.timers,function(t){return e===t.elem}).length};var Ut=e.document.documentElement;function Vt(e){return f.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}f.offset={setOffset:function(e,t,n){var r,i,o,a,s,l,u=f.css(e,"position"),c=f(e),d={};"static"===u&&(e.style.position="relative"),s=c.offset(),o=f.css(e,"top"),l=f.css(e,"left"),("absolute"===u||"fixed"===u)&&f.inArray("auto",[o,l])>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(l)||0),f.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+i),"using"in t?t.using.call(e,d):c.css(d)}},f.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){f.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;return o?(t=o.documentElement,f.contains(t,i)?(typeof i.getBoundingClientRect!==M&&(r=i.getBoundingClientRect()),n=Vt(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r):void 0},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===f.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),f.nodeName(e[0],"html")||(n=e.offset()),n.top+=f.css(e[0],"borderTopWidth",!0),n.left+=f.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-f.css(r,"marginTop",!0),left:t.left-n.left-f.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Ut;e&&!f.nodeName(e,"html")&&"static"===f.css(e,"position");)e=e.offsetParent;return e||Ut})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);f.fn[e]=function(r){return X(this,function(e,r,i){var o=Vt(e);return void 0===i?o?t in o?o[t]:o.document.documentElement[r]:e[r]:void(o?o.scrollTo(n?f(o).scrollLeft():i,n?i:f(o).scrollTop()):e[r]=i)},e,r,arguments.length,null)}}),f.each(["top","left"],function(e,t){f.cssHooks[t]=_e(c.pixelPosition,function(e,n){return n?(n=je(e,t),He.test(n)?f(e).position()[t]+"px":n):void 0})}),f.each({Height:"height",Width:"width"},function(e,t){f.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){f.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===i?"margin":"border");return X(this,function(t,n,r){var i;return f.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?f.css(t,n,a):f.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),f.fn.size=function(){return this.length},f.fn.andSelf=f.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return f});var Jt=e.jQuery,Yt=e.$;return f.noConflict=function(t){return e.$===f&&(e.$=Yt),t&&e.jQuery===f&&(e.jQuery=Jt),f},typeof t===M&&(e.jQuery=e.$=f),f});
                OG$ = window.OG$ = jQuery.noConflict(true);
            };
        };
    })();
} catch (err) {
    OG$ = window.OG$ = jQuery.noConflict(true);
};
/* ================================================================================================================================================== */
/** ===============================================================================================================================================
 *
 * 회원데이터 생성
 * - winodow load 이후에 호출 시 정상 노출 / 값 없을 경우 null
 * @OG_MEMBER_ID 회원 아이디 {string} / @OG_MEMBER_NAME 회원 이름 {string} / @OG_MEMBER_NICKNAME 회원 별명
 * @OG_MEMBER_GROUPNAME 등급명 {string} / @OG_MEMBER_GROUPNO 등급번호 {string}
 * @OG_MEMBER_EMAIL 회원 이메일 {string} / @OG_MEMBER_PHONE 회원 일반전화번호 {string} / @OG_MEMBER_CELLPHONE 회원 핸드폰번호 {string} / @OG_MEMBER_BIRTHDAY 회원 생일
 * @OG_MEMBER_BOARDWRITENAME 회원 게시판 작성 시 이름 {string} / @OG_MEMBER_ADDITIONALINFOMATION 회원 추가정보 {array} (객체 배열) / @OG_MEMBER_CREATEDATE 회원 계정생성일 {string}
 * @OG_MEMBER_AVAIL_MILEAGE 회원 사용가능 적립금(소수점 포함) {string} / @OG_MEMBER_UNAVAIL_MILEAGE 회원 미가용 적립금(소수점 포함) {string} / @OG_MEMBER_RETURN_MILEAGE 회원 환불예정 적립금(소수점 포함) {string}
 * @OG_MEMBER_TOTAL_MILEAGE 회원 총적립금(미가용+가용) (소수점 포함) {string} / @OG_MEMBER_USED_MILEAGE 회원이 사용한 적립금(소수점 포함) {string}
 * @OG_MEMBER_ACC_DEPOSIT 회원 누적 예치금{string} / @OG_MEMBER_USED_DEPOSIT 회원 사용 예치금 {string} / @OG_MEMBER_AVAIL_DEPOSIT 사용 가능 예치금 / @OG_MEMBER_RETURN_DEPOSIT 현금 환불요청 예치금 /@OG_MEMBER_TOTAL_DEPOSIT 회원 총예치금(미가용+가용)
 * @OG_MEMBER_COUPON_COUNT 보유 쿠폰 수 {number}
 * @OG_MEMBER_ORDER_COUNT 총주문수 {string} / @OG_MEMBER_ORDER_TOTAL 총주문금액 {string} / @OG_MEMBER_ORDER_INCREASEVALUE 승급까지 남은 정보 ?
 */
var OG_MEMBER_CHECK = OG_MEMBER_CHECK || null;
var OG_MEMBER_ID = OG_MEMBER_ID || null;
var OG_MEMBER_NAME = OG_MEMBER_NAME || null;
var OG_MEMBER_NICKNAME = OG_MEMBER_NICKNAME || null;
var OG_MEMBER_GROUPNAME = OG_MEMBER_GROUPNAME || null;
var OG_MEMBER_GROUPNO = OG_MEMBER_GROUPNO || null;
var OG_MEMBER_EMAIL = OG_MEMBER_EMAIL || null;
var OG_MEMBER_PHONE = OG_MEMBER_PHONE || null;
var OG_MEMBER_CELLPHONE = OG_MEMBER_CELLPHONE || null;
var OG_MEMBER_BIRTHDAY = OG_MEMBER_BIRTHDAY || null;
var OG_MEMBER_BOARDWRITENAME = OG_MEMBER_BOARDWRITENAME || null;
var OG_MEMBER_ADDITIONALINFOMATION = OG_MEMBER_ADDITIONALINFOMATION || null;
var OG_MEMBER_CREATEDATE = OG_MEMBER_CREATEDATE || null;
var OG_MEMBER_NAME_MILEAGE = OG_MEMBER_NAME_MILEAGE || null;
var OG_MEMBER_UNIT_MILEAGE = OG_MEMBER_UNIT_MILEAGE || null;
var OG_MEMBER_AVAIL_MILEAGE = OG_MEMBER_AVAIL_MILEAGE || null;
var OG_MEMBER_UNAVAIL_MILEAGE = OG_MEMBER_UNAVAIL_MILEAGE || null;
var OG_MEMBER_RETURN_MILEAGE = OG_MEMBER_RETURN_MILEAGE || null;
var OG_MEMBER_TOTAL_MILEAGE = OG_MEMBER_TOTAL_MILEAGE || null;
var OG_MEMBER_USED_MILEAGE = OG_MEMBER_USED_MILEAGE || null;
var OG_MEMBER_NAME_DEPOSIT = OG_MEMBER_NAME_DEPOSIT || null;
var OG_MEMBER_UNIT_DEPOSIT = OG_MEMBER_UNIT_DEPOSIT || null;
var OG_MEMBER_ACC_DEPOSIT = OG_MEMBER_ACC_DEPOSIT || null;
var OG_MEMBER_USED_DEPOSIT = OG_MEMBER_USED_DEPOSIT || null;
var OG_MEMBER_RETURN_DEPOSIT = OG_MEMBER_RETURN_DEPOSIT || null;
var OG_MEMBER_AVAIL_DEPOSIT = OG_MEMBER_AVAIL_DEPOSIT || null;
var OG_MEMBER_TOTAL_DEPOSIT = OG_MEMBER_TOTAL_DEPOSIT || null;
var OG_MEMBER_COUPON_COUNT = OG_MEMBER_COUPON_COUNT || null;
var OG_MEMBER_ORDER_COUNT = OG_MEMBER_ORDER_COUNT || null;
var OG_MEMBER_ORDER_TOTAL = OG_MEMBER_ORDER_TOTAL || null;
var OG_MEMBER_ORDER_INCREASEVALUE = OG_MEMBER_ORDER_INCREASEVALUE || null;
var OG_MEMBER_OBJ = OG_MEMBER_OBJ || {};
/* ================================================================================================================================================== */
/** ==================================================================================================================================================
 * 페이지 접속 정보
 * @ OG_LOCATION ~ : 주소줄 기준 정보
 * @ isPopupPage 팝업페이지 여부 0 아님 1 iframe 2 새 창
 * @ topDocument 최상위 문서
 * @ OG_TOP_SUBCONTAINER_DATA_PAGE / OG_SUBCONTAINER_DATA_PAGE 최상위/현재 페이지 고유값
 * @ OG_MEMBER_CHECK 회원/비회원 여부
 */
var OG_LOCATION_HREF = OG_LOCATION_HREF || window.location.href; /* 현재 주소줄 전체 */
var OG_LOCATION_HOSTNAME = OG_LOCATION_HOSTNAME || window.location.hostname; /* 현재 주소 기준 hostname */
var OG_LOCATION_PATHNAME = OG_LOCATION_PATHNAME || window.location.pathname; /* 현재 주소 기준 pathname */
var OG_LOCATION_PROTOCOL = OG_LOCATION_PROTOCOL || window.location.protocol; /* 현재 주소 기준 protocol */
var OG_LOCATION_PARAMETERS = OG_LOCATION_PARAMETERS || ((window.location.search == '') ? '' : window.location.search.split('?')[1]); /* 현재 주소 기준 parameters */
var isPopupPage = isPopupPage || null;
var topDocument = topDocument || null;
var OG_TOP_SUBCONTAINER_DATA_PAGE = OG_TOP_SUBCONTAINER_DATA_PAGE || null;
var OG_SUBCONTAINER_DATA_PAGE = OG_SUBCONTAINER_DATA_PAGE || null;
var OG_SKIN_NUM = '';
var OG_SHOP_NUM = 1;

if(OG_LOCATION_PATHNAME.indexOf('skin-') !== -1){
    OG_SKIN_NUM = OG_LOCATION_PATHNAME.slice(1,OG_LOCATION_PATHNAME.length);
    let testReg = /^shop[0-9]{1}/gm;
    OG_SHOP_NUM = testReg.exec(String(OG_SKIN_NUM));
    if(OG_SHOP_NUM !== null){
        OG_SHOP_NUM = OG_SHOP_NUM[0];
        OG_SKIN_NUM = '/' + OG_SHOP_NUM + '/' + OG_SKIN_NUM.split('/')[1].trim() + '/';
    }else{
        OG_SKIN_NUM = '/' + OG_SKIN_NUM.split('/')[0].trim() + '/';
        OG_SHOP_NUM = 1;
    }
}else{
    if(OG_LOCATION_PATHNAME.indexOf('shop') > -1){
        OG_SKIN_NUM = OG_LOCATION_PATHNAME.slice(1,OG_LOCATION_PATHNAME.length);
        let testReg = /^shop[0-9]{1}/gm;
        OG_SHOP_NUM = testReg.exec(String(OG_SKIN_NUM));
        if(OG_SHOP_NUM !== null){
            OG_SHOP_NUM = OG_SHOP_NUM[0];
            OG_SKIN_NUM = '/' + OG_SHOP_NUM + '/';
        }else{
            OG_SKIN_NUM = '';
            OG_SHOP_NUM = 1;
        }
    }
}

try {
    if(window.frameElement || opener){
        if(window.frameElement){
            isPopupPage = 1;
            topDocument = top.document.documentElement;
            document.documentElement.classList.add('OGIframeHtml');
        }else{
            if(OG$('html').attr('class').indexOf('popup') == -1){
                isPopupPage = 0;
                topDocument = document.documentElement;
            }else{
                isPopupPage = 2;
                topDocument = opener.document.documentElement;
                document.documentElement.classList.add('OGPopupHtml');
            };
        };
    }else{
        isPopupPage = 0;
        topDocument = document.documentElement;
    };
} catch (err) {
    isPopupPage = 0;
    topDocument = document.documentElement;
};
OG_MEMBER_CHECK = topDocument.querySelectorAll('#OG_memberChk_nomember').length > 0 ? false : true; //true : 회원 , false: 비회원

/** =================================================================================================================================================
 * 접속한 기기/브라우저 정보 (OG_userAgentChk통해 확인)
 * @ OG_DEVICE_CHK : PC/MO
 * @ OG_BROWSER_CHK : iphone/not-iphone, ie, chrome ... etc
 */
var OG_DEVICE_CHK;
var OG_BROWSER_CHK;
/**
 * userAgent Check
 * OG_userAgentChk.__userAgent : 현재 접속 기기 관련 정보 ex 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'
 * deviceChk : PC or mobile
 * browserChk : 브라우저 체크 (ie, edge, whale ...)
 */
var OG_userAgentChk = {
    __userAgent: navigator.userAgent,
    deviceChk: function () {
        var e;
        var mobileAndTabletcheck = function () {
            var check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                    check = true;
                }
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };
        if(mobileAndTabletcheck() == true){
            OG_DEVICE_CHK = 'mobile';
        }else{
            OG_DEVICE_CHK = 'pc';
        }
    },
    browserChk: function () {
        var e, t = OG_userAgentChk.__userAgent;
        return "pc" == OG_userAgentChk.deviceChk() ? t.indexOf("Trident") > -1 ? e = "ie" : t.indexOf("Edg") > -1 ? e = "edge" : t.indexOf("Whale") > -1 ? e = "whale" : t.indexOf("Opera") > -1 || t.indexOf("OPR") > -1 ? e = "opera" : t.indexOf("Firefox") > -1 ? e = "firefox" : t.indexOf("Safari") > -1 && -1 == t.indexOf("Chrome") ? e = "safari" : t.indexOf("Chrome") > -1 && (e = "chrome") : e = t.match(/iPad/i) || t.match(/iPhone/i) ? "iphone" : "not-iphone", OG_BROWSER_CHK = e, OG_userAgentChk.appChk(), e
    },
    appChk: function () {
        var e = null;
        return e = OG_userAgentChk.__userAgent.indexOf("Cafe24Plus") > -1 ? "app" : "pc" == OG_DEVICE_CHK ? "pc-web" : "mobile-web", OG_TYPE_CHK = e, e
    }
};
OG_userAgentChk.browserChk();

/** =================================================================================================================================================
 * 창 정보
 */
var OG_vh = OG_vh || 0;
var OG_vh2 = OG_vh2 || 0;
var OG_vw = OG_vw || (window.innerWidth * 0.01);
var OG_topHeight = OG_topHeight || 0;
/**
 * swiper custom Array -> 커스텀 swiper array
 */
var OG_SwiperCustomArray = OG_SwiperCustomArray || [];
/**
 * property setting -> css변수 생성 지정 설정
 */
var OG_SetPropertyArray = OG_SetPropertyArray || [
    {name : 'header', element : 'header'},
    {name : 'footer', element : 'footer'},
];
/* ================================================================================================================================================== */
/**
 * util function -> util 영역
 */
var OG_util = OG_util || {
    getParameterByName: function (href, name) {
        /**
         * 파라미터 name에 할당된 값 출력
         * @href 기준 주소
         * @name 파라미터 name
         * result type string
         */
        try {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(href);
            if (results == null) {
                return '';
            } else {
                return decodeURIComponent(results[1].replace(/\+/g, " "));
            };
        } catch (err) {
            console.log(err);
            return '';
        };
    },
    getURLParameters: function (href, name) {
        /**
         * 파라미터 name에 할당된 값 출력
         * @href 기준 주소
         * @name 파라미터 name
         * name 없을 경우 전체 파라미터를 object 형태로 출력, name있을 경우 해당 name에 할당된 값만 string으로 출력 (name 지정의 경우 getParameterByName와 유사함)
         * result type object/string
         */
        try {
            var result = {};
            href = href.replace(/[?&]{1}([^=&#]+)=([^&#]*)/g, function(s, k, v) { result[k] = decodeURIComponent(v); return ''; });
            if(href !== ''){
                href.replace(/([^=&#]+)=([^&#]*)/g, function(s, k, v) { result[k] = decodeURIComponent(v); return ''; });
            }
            if(typeof name !== 'undefined'){
                if(result[name]){
                    return result[name];
                }else{
                    result = '';
                    return result;
                };
            }else{
                return result;
            };
        } catch (err) {
            console.log(err);
            return '';
        };
    },
    getUrl : function(href){
        try {
            if(typeof href === 'undefined'){
                OG_LOCATION_HREF = window.location.href; /* 현재 주소줄 전체 */
                OG_LOCATION_HOSTNAME = window.location.hostname; /* 현재 주소 기준 hostname */
                OG_LOCATION_PATHNAME = window.location.pathname; /* 현재 주소 기준 pathname */
                OG_LOCATION_PROTOCOL = window.location.protocol; /* 현재 주소 기준 protocol */
                OG_LOCATION_PARAMETERS = ((window.location.search == '') ? '' : window.location.search.split('?')[1]); /* 현재 주소 기준 parameters */
            }else{
                if(typeof href === 'string' && href != ''){
                    if(href.indexOf('?') > -1){
                        return [href.split('?')[0], href.split('?')[1]];
                    }else{
                        return href;
                    }
                }else{
                    return href;
                }
            }
        } catch (err) {
            console.log(err);
            return href;
        };
    },
    comma: function (str) {
        /**
         * 숫자 comma 찍어주는 함수
         * @str string
         * result type string
         */
        try {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
        } catch (err) {
            console.log(err);
            return str;
        };
    },
    uncomma: function (str) {
        /**
         * 숫자 comma 제거하는 함수
         * @str string
         * result type number
         */
        try {
            str = String(str);
            return Number(str.replace(/[^\d]+/g, ''));
        }
        catch (err) {
            console.log(err);
            return str;
        }
    },
    checkAvailability : function(arr, val){
        /**
         * 배열 중에 특정 값이 존재하는지 여부
         * @arr array
         * @val value
         * result type boolean
         * error result : null
         */
        try {
            return arr.some(function(arrVal) {
                return val === arrVal;
            });
        } catch (err) {
            console.log(err);
            return null;
        };
    },
    onlyNumbFunc : function(str){
        /**
         * 숫자만 남기는 함수
         * @str string
         * result type number
         */
        try {
            str = String(str);
            var reg = /[^0-9]/g;
            if(reg.test(str)){
                return Number(str.replace(reg,'').trim());
            }else{
                return Number(str);
            };
        } catch (err) {
            console.log(err);
            return str;
        };
    },
    removeNumbFunc : function(str){
        /**
         * 숫자만 제거하는 함수
         * @str string
         * result type string
         */
        try {
            str = String(str);
            var reg = /[0-9]/g;
            if(reg.test(str)){
                return str.replace(reg,'').trim();
            }else{
                return str;
            };
        } catch (err) {
            console.log(err);
            return str;
        };
    },
    removeDashFunc : function(str){
        /**
         * 대시 제거하는 함수
         * @str string
         * result type string
         */
        try {
            str = String(str);
            var reg = /\-/g;
            if(reg.test(str)){
                return str.replace(reg,'').trim();
            }else{
                return str;
            };
        } catch (err) {
            console.log(err);
            return str;
        };
    },
    removeBlankFunc : function(str){
        /**
         * 공백 전체 제거하는 함수
         * @str string
         * result type string
         */
        try {
            str = String(str);
            var reg = / /g;
            if(reg.test(str)){
                return str.replace(reg,'').trim();
            }else{
                return str;
            };
        } catch (err) {
            console.log(err);
            return str;
        };
    },
    removeEnterFunc : function(str){
        /**
         * 엔터문자 전체 제거하는 함수
         * @str string
         * result type string
         */
        try {
            str = String(str);
            var reg = /(\r\n|\n|\r)/gm;
            if(reg.test(str)){
                return str.replace(reg,'').trim();
            }else{
                return str;
            }
        } catch (err) {
            console.log(err);
            return str;
        };
    },
    roundDown : function(number, decimals){
        /**
         * 특정 자리 수에서 버림 처리
         * @number number
         * @decimals 자리수 (0,-1,-2...)
         * result type number
         */
        try {
            decimals = decimals || 0;
            return ( Math.floor( number * Math.pow(10, decimals) ) / Math.pow(10, decimals) );
        } catch (err) {
            console.log(err);
            return number;
        };
    },
    roundUp : function(number, decimals){
        /**
         * 특정 자리 수에서 올림 처리
         * @number number
         * @decimals 자리수 (0,-1,-2...)
         * result type number
         */
        try {
            decimals = decimals || 0;
            return ( Math.ceil( number * Math.pow(10, decimals) ) / Math.pow(10, decimals) );
        } catch (err) {
            console.log(err);
            return number;
        };
    },
    round : function(number, decimals){
        /**
         * 특정 자리 수에서 반올림 처리
         * @number number
         * @decimals 자리수 (0,-1,-2...)
         * result type number
         */
        try {
            decimals = decimals || 0;
            return ( Math.round( number * Math.pow(10, decimals) ) / Math.pow(10, decimals) );
        } catch (err) {
            console.log(err);
            return number;
        };
    },
    removeSpecialChars : function(str){
        /**
         * 특수문자 제거하는 함수
         * @str string
         * result type string
         */
        try {
            str = String(str);
            var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
            if(reg.test(str)){
                return str.replace(reg,'').trim();
            }else{
                return str;
            };
        } catch (err) {
            console.log(err);
            return str;
        };
    },
    makeDimmed : function(e,t,n){
        /**
         * dimmed 영역 생성 함수
         * @e dimmed 영역 붙는 타이밍 true append -> addClass / false addClass -> append
         * @t dimmed number
         * @n 노출되는 elemenet
         */
        if (arguments.length > 0) {
            let i = typeof arguments[0];
            "number" === i ? (e = !0, t = arguments[0], void 0 !== arguments[1] && (n = arguments[1])) : "object" === i ? (e = !0, t = 0, n = arguments[0]) : (t = t || 0, n = n || null)
        } else e = !0, t = 0, n = null;
        if (0 == OG$(".og_dimmed_" + t).length) {
            let i = OG$('<div class="og_dimmed_' + t + '"></div>');
            !1 === e ? (i.addClass("on"), OG$("body").append(i)) : (OG$("body").append(i), setTimeout(function () {
                i.addClass("on")
            }, 0)), i.on("click", function () {
                OG$('.ec-base-layer, [class*="og_"][class*="_layer"], .ec-base-tooltip, .og_base_tooptip').filter(".on").removeClass("on"), null !== n && EC$(n).children('[class*="close"], [class*="Close"], [class*="delete"]').trigger("click"), OG_util.removeDimmed(e)
            });
        };
    },
    removeDimmed : function(e){
        /**
         * dimmed 영역 제거 함수
         * @e dimmed 영역 붙는 타이밍 true remove -> removeClass / false removeClass -> remove
         */
        let t = OG$('[class*="og_dimmed"]');
        if(t.length > 0){
            function n() {
                t.remove()
            }!1 === (e = e || !0) ? t.remove() : "all 0s ease 0s" == t.css("transition") ? (t.removeClass("on"), n()) : (t[0].addEventListener("transitionend", n), t.removeClass("on"));
        }else{
            return false;
        }
    },
    scrollDisabled : function(e,t){
        /**
         * 스크롤 막기
         * @e 노출되는 element
         * @t dimmed 노출 여부
         */
        if (arguments.length > 0) {
            "object" !== typeof arguments[0] ? (t = arguments[0], e = null) : (e = e || null, t = t || !0)
        } else t = !0, e = null;
        OG_util.scrollDisabled.object = OG_util.scrollDisabled.object || [];
        let n = OG_util.scrollDisabled.object;
        null !== e && (n.push(e), e[0].OG_openCustomFunction && -1 == String(e[0].OG_openCustomFunction).indexOf("scrollDisabled") && e[0].OG_openCustomFunction());
        const i = topDocument;
        topDocument.querySelector("body");
        if (0 == i.classList.contains("noscroll")) {
            var r = window.pageYOffset;
            i.classList.add("noscroll"), i.style.top = -1 * r + "px", !1 !== t && (OG_util.makeDimmed(), OG$('[class*="og_dimmed_"]').on("click", function () {
                OG_util.scrollEnabled()
            }));
        };
    },
    scrollEnabled : function(e){
        /**
         * 스크롤 풀기
         * @e  노출되는 element
         */
        if (null !== (e = e || null)) e[0].OG_closeCustomFunction ? -1 == String(e[0].OG_closeCustomFunction).indexOf("scrollEnabled") && e[0].OG_closeCustomFunction() : OG$(e).removeClass("on active");
        else {
            OG_util.scrollDisabled.object = OG_util.scrollDisabled.object || [];
            let e = OG_util.scrollDisabled.object;
            0 != e.lenegth && e.forEach(function (t, n) {
                t[0].OG_closeCustomFunction ? -1 == String(t[0].OG_closeCustomFunction).indexOf("scrollEnabled") && t[0].OG_closeCustomFunction() : OG$(t).removeClass("on active"), e.splice(n, 1)
            });
        };
        const t = topDocument;
        if (t.classList.contains("noscroll")) {
            topDocument.querySelector("body");
            var n = Math.abs(t.style.getPropertyValue("top").replace("px", ""));
            t.classList.remove("noscroll"), t.style.removeProperty("top"), window.scrollTo(0, n), OG$('[class*="og_dimmed_"]').length > 0 && OG_util.removeDimmed()
        };
    },
    layerOpenFunc : function(e, t, n){
        /**
         * OG_layer 여는 함수
         * 클릭 ele에 data-layer값 필수(팝업 id, class등 구분값) : 열려야 하는 팝업 구분값
         * addClass on 형태 -> css 작업 필요함
         * 레이어 영역 외 클릭 시 닫힘 처리
         * @e button
         * @t dimmed 생성 여부
         * @n scroll 고정 여부
         */
        try {
            var i = e.getAttribute("data-layer"),
                r = OG$(i),
                o = r.attr("class");
            o = (o = o.indexOf("on") ? o.replace("on", "") : o).indexOf("active") ? o.replace("active", "") : o, OG$(o = "." + o).not(r).removeClass("on active"), r.addClass("on"), t = t || !1, !1 === (n = n || !1) ? !0 === t ? OG_util.scrollDisabled(OG$(i), !0) : OG_util.scrollDisabled(OG$(i), !1) : !0 === t ? OG_util.makeDimmed(OG$(i)) : OG_util.targetOutCloseFunc(OG$(i))
        } catch (e) {
            console.log(e)
        };
    },
    layerCloseFunc: function(e){
        /**
         * OG_layer 닫는 함수
         * 클릭 ele에 data-layer값 필수(팝업 id, class등 구분값) : 닫혀야 하는 팝업 구분값
         * removeClass on 형태 -> css 작업 필요함
         * @e button
         */
        try {
            var layer = e.getAttribute('data-layer');
            OG$(layer).removeClass('on');
        } catch (err) {
            console.log(err);
        };
    },
    targetOutCloseFunc : function(e, t){
        /**
         * classname으로 지정한 영역 외 클릭 시, classname 요소 닫힘 처리 함수
         * @e element
         * @t callback function
         */
        setTimeout(function () {
            if (e) try {
                var n = OG$(e),
                    i = n.attr("class"),
                    r = null;
                if (void 0 !== i)(i = (i = i.indexOf("on") ? i.replace("on", "") : i).indexOf("active") ? i.replace("active", "") : i).indexOf(/ /gi) > -1 && (i = i.replace(/ /gi, ".")), i = "." + i, r = $(i);
                else {
                    var o = n.attr("id");
                    void 0 !== o ? r = $('[id^="' + o + '"]').not(n) : n.siblings().length > 0 && (r = n.siblings())
                };
                OG$("body").one("click", function (i) {
                    if (n.hasClass("on") || n.hasClass("active")) {
                        var o = OG$(i.target);
                        (i.target == e || o.parents().filter(n).length > 0) && !o.attr("data-layer") ? (null !== r && r.not(n).removeClass("on active"), OG_util.targetOutCloseFunc(n)) : void 0 !== t ? "all 0s ease 0s" == n.css("transition") ? (n.removeClass("on active"), t()) : (n[0].addEventListener("transitionend", t), n.removeClass("on active")) : n.removeClass("on active")
                    };
                })
            } catch (e) {
                console.log(e)
            };
        }, 0)
    },
    arrayUnique : function(arr){
        /**
         * 배열 항목 unique만 남기는 함수
         * @arr array
         */
        try {
            arr =
                arr.reduce(function(acc,curr,index){
                    acc.indexOf(curr) > -1 ? acc : acc.push(curr);
                    return acc;
                },[]);
            return arr;
        } catch (err) {
            console.log(err);
        };
    },
    checkBatchimEnding : function(str){
        /**
         * 한글 끝자리에 받침 있는지 확인
         * true 받침있음 false 받침없음
         * @str string
         */
        try {
            if (typeof str !== 'string') return null;
            var lastLetter = str[str.length - 1];
            var uni = lastLetter.charCodeAt(0);
            if (uni < 44032 || uni > 55203) return null;
            return (uni - 44032) % 28 != 0;
        } catch (err) {
            console.log(err);
        };
    },
    execDaumPostcode : function(e, t){
        /**
         * 다음 우편번호 팝업 함수
         * @e : data-layer / .content / data-addr=true 3가지 항목 필요
         * [data-addr-type="zipcode"] zipcode
         * [data-addr-type="raddr1"] addr1
         * [data-addr-type="raddr2"] addr2
         * @t page 구분
         */
        if(typeof OG_ZIPCODE_LAYER_THEME_FOR_DAUMKAKAO === 'undefined'){
            var OG_ZIPCODE_LAYER_THEME_FOR_DAUMKAKAO = {
                bgColor: "#FAFAFA", //바탕 배경색
                //searchBgColor: "", //검색창 배경색
                //contentBgColor: "", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
                //pageBgColor: "", //페이지 배경색
                textColor: "#000000", //기본 글자색
                //queryTextColor: "", //검색창 글자색
                postcodeTextColor: "#EB3300" //우편번호 글자색
                //emphTextColor: "", //강조 글자색
                //outlineColor: "", //테두리
            };
        }
        var theme = OG_ZIPCODE_LAYER_THEME_FOR_DAUMKAKAO;
        // 우편번호 찾기 찾기 화면을 넣을 element
        var n = e.getAttribute("data-layer"),
            i = document.querySelector(n).querySelector(".content"),
            r = OG$(e).closest('[data-addr="true"]');
        Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        new daum.Postcode({
            oncomplete: function (e) {
                var n = "",
                    i = "";
                n = "R" === e.userSelectedType ? e.roadAddress : e.jibunAddress, "R" === e.userSelectedType && ("" !== e.bname && /[동|로|가]$/g.test(e.bname) && (i += e.bname), "" !== e.buildingName && "Y" === e.apartment && (i += "" !== i ? ", " + e.buildingName : e.buildingName), "" !== i && (i = " (" + i + ")")), void 0 !== OG_util.execDaumPostcode.selectBefore ? OG_util.execDaumPostcode.selectBefore.execute(r, e, n, i) : (r.find('[data-addr-type="zipcode"]').val(e.zonecode), r.find('[data-addr-type="addr1"]').val(n + " " + i), r.find('[data-addr-type="addr2"]').val("").focus(), "orderform" === t && EC_SHOP_FRONT_ORDERFORM_SHIPPING.exec(), void 0 !== OG_util.execDaumPostcode.selectAfter && OG_util.execDaumPostcode.selectAfter.execute()), OG_util.scrollEnabled()
            },
            onsearch: function (e) {},
            theme: theme,
            onresize: function (e) {
                i.style.height = e.height + 30 + "px", document.querySelector(n).classList.add("on"), OG_util.scrollDisabled(OG$(n))
            },
            width: "100%",
            height: "100%"
        }).embed(i)
    },
    IntersectionObserver : function(e, t, n){
        /**
         * viewport 감지
         * @e element
         * @t option
         * @n callback function
         */
        let i, r;
        (i = "string" == typeof e ? document.querySelectorAll(e) : e).forEach(function (e, i) {
            let o = OG$(e).css("top");
            "auto" == o && (o = OG_topHeight);
            let a = -1 * OG_util.onlyNumbFunc(o) - 1,
                s = -1 * Math.round(100 * OG_vh + a - 2);
            a = a + 'px';
            s = s + 'px';
            if(typeof t !== 'undefined'){
                r = t;
            }else{
                r = {
                    root: null,
                    rootMargin: a + " 0px " + s + " 0px",
                    threshold: [0]
                };
            };
            const l = new IntersectionObserver(function (e, t) {
                e.forEach(function (i) {
                    !0 === i.isIntersecting ? OG$(i.target).addClass("og_isIntersecting") : OG$(i.target).removeClass("og_isIntersecting"), n(i, t, e, l)
                });
            }, r);
            l.observe(e);
        });
    },
    debounce : function(callback, limit) {
        /**
         * debounce
         * @callback 실행할 함수
         * @limit 실행 기준 시간
         */
        let timeout;
        return function(arguments) {
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                callback.apply(this, arguments);
            }, limit);
        }
    },
    throttle : function(callback, limit) {
        /**
         * debounce
         * @callback 실행할 함수
         * @limit 실행 기준 시간
         */
        let waiting = false;
        return function() {
            if(!waiting) {
                callback.apply(this, arguments);
                waiting = true;
                setTimeout(function() {
                    waiting = false;
                }, limit);
            };
        };
    },
    hexToRgb : function(e) {
        /**
         * hex -> rgb 전환 (축약/#포함미포함/확장형 모두 전환)
         * Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
         * @e = hex code
         */
        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, i) {
            return t + t + n + n + i + i
        });
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? {
            r: parseInt(t[1], 16),
            g: parseInt(t[2], 16),
            b: parseInt(t[3], 16)
        } : null
    },
    rgbToHex : function(e, t, n) {
        /**
         * rgb -> hex 전환
         * @e red color value(number or string) ex 250
         * @t green color value(number or string) ex 250
         * @n blue color value(number or string) ex 250
         */
        return "#" + (16777216 + (e << 16 | t << 8 | n << 0)).toString(16).slice(1);
    },
    getComments : function(e){
        /**
         * 주석 내용 가져오기
         * @e element
         */
        let t = [];
        return e.contents().filter(function () {
            if (8 == this.nodeType) {
                let e = OG_util.removeBlankFunc(this.nodeValue);
                t.push(e)
            }
        }), t;
    },
    getCommentParam : function(e, t){
        /**
         * 주석 변수 name에 따라 출력
         * @e 주석
         * @t name
         */
        try {
            t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var n = new RegExp("[\\$@]" + t + "=([^$@]*)").exec(e);
            return null == n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
        } catch (e) {
            return console.log(e), ""
        };
    },
    getTime : function(date, type, type2){
        /**
         * 시간 가져오기
         * @date 기준 날짜 (없을 경우 오늘 날짜) / type array
         * @type 출력 타입 time or array
         * @type2 출력할 단계 1 날짜 + 시간 / 2 날짜 + 시간 + 분 / 3 날짜 + 시간 + 분 + 초 / else 날짜
         */
        var today = new Date();
        type2 = String(type2);
        var basic = ['','','','','',''];
        date = OG$.extend(basic,date);
        if(date !== false){
            if(type2 === '1'){
                //날짜 + 시간
                if(type === 'time'){
                    date = new Date(date[0], date[1] -1, date[2], date[3], 00,00);
                    return date;
                }else{
                    return [date[0],date[1],date[2],'',''];
                };
            }else if(type2=='2'){
                //날짜 + 시간 + 분
                if(type === 'time'){
                    date = new Date(date[0], date[1] -1, date[2], date[3], date[4], 00);
                    return date;
                }else{
                    return [date[0],date[1],date[2],date[3],''];
                };
            }else if(type2 == '3'){
                //날짜 + 시간 + 분 + 초
                if(type === 'time'){
                    date = new Date(date[0], date[1] -1, date[2], date[3], date[4], date[5]);
                    return date;
                }else{
                    return [date[0],date[1],date[2],date[3],date[4],date[5]];
                };
            }else{
                //그 외 값이면 날짜까지만
                if(type === 'time'){
                    date = new Date(date[0], date[1] -1, date[2],00,00,00);
                    return date;
                }else{
                    return [date[0],date[1],date[2],'','',''];
                };
            };
        }else{
            date = today;
            var year = String(date.getFullYear());
            var month = ('0' + (date.getMonth() + 1)).slice(-2);
            var day = ('0' + date.getDate()).slice(-2);
            var hours = ('0' + date.getHours()).slice(-2);
            var minutes = ('0' + date.getMinutes()).slice(-2);
            var seconds = ('0' + date.getSeconds()).slice(-2);
            if(type2 === '1'){
                //날짜 + 시간
                if(type === 'time'){
                    date = new Date(year, date.getMonth(), day, hours, 00,00);
                    return date;
                }else{
                    return [year, month, day, hours, '', ''];
                };
            }else if(type2=='2'){
                //날짜 + 시간 + 분
                if(type === 'time'){
                    date = new Date(year, date.getMonth(), day, hours, minutes,00);
                    return date;
                }else{
                    return [year, month, day, hours, minutes, ''];
                };
            }else if(type2 == '3'){
                //날짜 + 시간 + 분 + 초
                if(type === 'time'){
                    date = new Date(year, date.getMonth(), day, hours, minutes,seconds);
                    return date;
                }else{
                    return [year, month, day, hours, minutes, seconds];
                };
            }else{
                //그 외 값이면 날짜까지만
                if(type === 'time'){
                    date = new Date(year, date.getMonth(), day, 00, 00,00);
                    return date;
                }else{
                    return [year, month, day, '', '', ''];
                };
            };
        };
    },
    getServerTime : function(url){
        /**
         * 서버 시간 가져오기
         */
        /*return new Promise(function (e, t) {
            $.get(url, function (n) {
                if (n) {
                    var i = n.serverTime.split(" "),
                        r = i[0].split("-"),
                        o = i[1].split("-"),
                        a = r[0],
                        s = ("0" + r[1]).slice(-2),
                        l = ("0" + r[2]).slice(-2),
                        c = ("0" + o[0]).slice(-2),
                        u = ("0" + o[1]).slice(-2),
                        d = ("0" + o[2]).slice(-2),
                        f = [new Date(a, Number(s) - 1, l, c, u, d), a, s, l, c, u, d];
                    e(f);
                };
                t(new Error("Request is failed"))
            });
        });*/
        return new Promise(function (e, t) {
            var xmlHttp;
            function srvTime(){
                if (window.XMLHttpRequest) {//분기하지 않으면 IE에서만 작동된다.
                    xmlHttp = new XMLHttpRequest(); // IE 7.0 이상, 크롬, 파이어폭스 등
                    xmlHttp.open('HEAD',window.location.href.toString(),false);
                    xmlHttp.setRequestHeader("Content-Type", "text/html");
                    xmlHttp.send('');
                    return xmlHttp.getResponseHeader("Date");
                }else if (window.ActiveXObject) {
                    xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
                    xmlHttp.open('HEAD',window.location.href.toString(),false);
                    xmlHttp.setRequestHeader("Content-Type", "text/html");
                    xmlHttp.send('');
                    return xmlHttp.getResponseHeader("Date");
                }
            }
            var st = srvTime();
            var today = new Date(st);

            var i = today.toLocaleString().replace(/ /g, '').replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '').replace(/:/g, '.'),
                a = i.split(".")[0],
                s = (0 + i.split(".")[1]),
                l = (0 + i.split(".")[2]).slice(-2),
                c = ('00' + i.split(".")[3]).slice(-2),
                u = ('00' + i.split(".")[4]).slice(-2),
                d = ('00' + i.split(".")[5]).slice(-2),
                f = [today, a, s, l, c, u, d];
            e(f);
        });
    },
    replaceAt : function(e, t, n){
        /**
         * 특정 자리 수 기준으로 replace
         * @e string
         * @t 자리수
         * @n 변경할 텍스트
         */
        return e.substr(0, t) + n + e.substr(t + n.length);
    },
    betweenDateGapCalc : function(stDate, endDate){
        /**
         * 날짜 사이 gap 구하는 함수
         * 특수문자 포함 시 특수문자 기준으로 split / 없을 경우 자리수 기준으로 뜯기
         * yyyy-mm-dd-hh-mm-ss 양식
         * @stDate 시작일
         * @endDate 종료일
         */
        var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
        let sTime;
        let eTime;
        if(typeof stDate === 'string'){
            if(reg.test(stDate)){
                stDate = stDate.split(reg);
            }else{
                stDate = [stDate.substr(0,4), stDate.substr(4,2), stDate.substr(6,2), stDate.substr(8,2), stDate.substr(10,2), stDate.substr(12,2)];
            };
            sTime = new Date(stDate[0], stDate[1] -1, stDate[2], stDate[3], stDate[4], stDate[5]);
        }else{
            if(Array.isArray(stDate)){
                sTime = new Date(stDate[0], stDate[1] -1, stDate[2], stDate[3], stDate[4], stDate[5]);
            }else{
                sTime = stDate;
            };
        };
        if(typeof endDate === 'string'){
            if(reg.test(endDate)){
                endDate = endDate.split(reg);
            }else{
                endDate = [endDate.substr(0,4), endDate.substr(4,2), endDate.substr(6,2), endDate.substr(8,2), endDate.substr(10,2), endDate.substr(12,2)];
            };
            eTime = new Date(endDate[0], endDate[1] -1, endDate[2], endDate[3], endDate[4], endDate[5]);
        }else{
            if(Array.isArray(endDate)){
                eTime = new Date(endDate[0], endDate[1] -1, endDate[2], endDate[3], endDate[4], endDate[5]);
            }else{
                eTime = endDate;
            };
        };
        var dateGap = eTime.getTime() - sTime.getTime();
        var timeGap = new Date(0, 0, 0, 0, 0, 0, eTime - sTime);
        var diffDay  = Math.floor(dateGap / (1000 * 60 * 60 * 24)); // 일수
        var diffHour = timeGap.getHours();       // 시간
        var diffMin  = timeGap.getMinutes();      // 분
        var diffSec  = timeGap.getSeconds();      // 초
        var result = [dateGap, diffDay, diffHour, diffMin, diffSec];
        return result;
    },
    viewtestCondition : function(condition, callback){
        /**
         * 테스트 컨디션으로 보기 위한 함수
         * @condition 추가조건 / true/false
         * @callback function
         */
        if(typeof OG_TEST_CONDITION_ARRAY !== 'undefined'){
            if(condition){
                OG_TEST_CONDITION_ARRAY.some(function(e,i){
                    if(OG_MEMBER_ID == e){
                        if(typeof callback !== 'undefined'){
                            callback();
                        }
                    }
                });
            }
        }
    },
    getDeepestChild : function(param) {
        /**
         * 가장 깊은 단계 자식 요소 return
         * @param element
         */
        var element_list = OG$(param);
        var depth = 0;
        var deepest_element;
        ( findChildren = function(){
            if(element_list.children().length == 0){
                deepest_element = element_list;
            }else{
                if(element_list.children().children().length > 0){
                    element_list = element_list.children();
                    findChildren();
                }else{
                    deepest_element = element_list.children();
                };
            };
        })();
        return deepest_element;
    },
    setCookie : function(name, value, exp){
        var date = new Date();
        date.setTime(date.getTime() + exp*24*60*60*1000);
        document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    },
    getCookie : function(name){
        var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return value? value[2] : null;
    },
    deleteCookie : function(name){
        document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;path=/';
    },
};


/**
 * extend
 */
var OG_SWIPE_NUM = OG_SWIPE_NUM || 0;
var OG_SWIPE_KEYS;
var OG_SWIPE_DEFERREDLIST = [];

OG$.fn.extend({
    /**
     * 기본 swiper 생성 -> data-custom = false인 경우 생성
     */
    OG_swiperFunc : function(options){
        var def = OG$.Deferred();
        this.each(function(i, x){
            var innerDef = OG$.Deferred();
            OG_SWIPE_DEFERREDLIST.push(innerDef.promise());
            let classList = x.classList,
                $x = OG$(x),
                config = {};
            if(typeof options === 'undefined'){
                if(typeof OG_SwiperBasicOption !== 'object'){
                    config = {
                        slidesPerView : 'auto',
                        spaceBetween : 0,
                        speed : 300,
                        loop: false,
                    };
                }else{
                    config = Object.assign({}, OG_SwiperBasicOption);
                };
            }


            ( letMakeSwiper = function(){
                if(classList.contains('ogswipe-done') === false){
                    let checkMakeSwiperFlag = false;

                    function setSwiper(){
                        if(! checkMakeSwiperFlag && typeof x !== 'undefined'){
                            let dataSet = x.dataset,
                                dataSetKeyArray = Object.keys(dataSet),
                                name = (typeof dataSet['ogswipeName'] !== 'undefined') ? dataSet['ogswipeName'] : 'tempName' + String(OG_SWIPE_NUM),
                                custom = dataSet['ogswipeCustom'],
                                module = dataSet['ogswipeModule'],
                                connect = dataSet['ogswipeConnect'];
                            name = (name.indexOf('ogswipe_') > -1) ? name.split('ogswipe_')[1].trim() : name;
                            if(typeof window['ogswipe_'+name] !== 'undefined'){
                                name = 'tempName' + String(OG_SWIPE_NUM);
                            }

                            OG_SWIPE_NUM++;
                            let ogswiper = null,
                                $baseSwiperContainer,
                                $swiperContainer,
                                $swiperSlide;
                            if(classList.contains('ogswipe-init')){
                                $baseSwiperContainer = $x.closest('.og_swiper_container');
                                $swiperContainer = $x.parent('.swiper-container');
                                $swiperSlide = $x.children();
                                ogswiper = window['ogswipe_' + name];
                                if(typeof ogswiper !== 'undefined'){
                                    ogswiper.init();
                                }else{
                                    makeogSwiper();
                                }
                            }else{
                                let checkID = $x.attr('id');
                                let makeElementFunc = function(){
                                    $baseSwiperContainer = $x.parent().addClass('og_swiper_container');
                                    $swiperSlide = $x.children().addClass('swiper-slide');
                                    $x.wrap('<div class="swiper-container"></div>');
                                    $swiperContainer = $x.closest('.swiper-container');
                                    $x.addClass('ogswipe-init swiper-wrapper');
                                };
                                makeElementFunc();
                                if(typeof module !== 'undefined' && module !== ''){
                                    module = (module.indexOf(',') > -1) ? module.split(',') : [module];
                                    module.forEach(function(e,i){
                                        switch(e.trim()){
                                            case 'scrollbar' :
                                                let $scrollbar;
                                                if($baseSwiperContainer.find('.og_swiper_scrollbar').length == 0){
                                                    $scrollbar = OG$('<div class="og_module_container og_swiper_scrollbar"><div class="swiper-scrollbar"></div></div>');
                                                    $baseSwiperContainer.append($scrollbar);
                                                }
                                                config['scrollbar'] = {el: $baseSwiperContainer.find('.swiper-scrollbar')[0],hide: false};
                                                break;
                                            case 'pagination' :
                                                let $pagination;
                                                if($baseSwiperContainer.find('.og_swiper_pagination').length ==0){
                                                    $pagination = OG$('<div class="og_module_container og_swiper_pagination"><div class="swiper-pagination"></div></div>');
                                                    $baseSwiperContainer.append($pagination);
                                                }
                                                config['pagination'] = {el: $baseSwiperContainer.find('.swiper-pagination')[0],clickable: true};
                                                break;
                                            case 'navigation' :
                                                let $navigation;
                                                if($baseSwiperContainer.find('.og_swiper_navigation').length == 0){
                                                    $navigation = OG$('<div class="og_module_container og_swiper_navigation"><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>');
                                                    $baseSwiperContainer.append($navigation);
                                                }
                                                config['navigation'] = {
                                                    nextEl: $baseSwiperContainer.find('.og_swiper_navigation .swiper-button-next')[0],
                                                    prevEl: $baseSwiperContainer.find('.og_swiper_navigation .swiper-button-prev')[0]};
                                                break;
                                            case 'progressbar' :
                                                let $progressbar;
                                                if($baseSwiperContainer.find('.og_swiper_pagination').length == 0){
                                                    $progressbar = OG$('<div class="og_module_container og_swiper_pagination"><div class="swiper-pagination"></div></div>');
                                                    $baseSwiperContainer.append($progressbar);
                                                }
                                                config['pagination'] = {el: $baseSwiperContainer.find('.swiper-pagination')[0],type: 'progressbar'};
                                                break;
                                            case 'fraction' :
                                                let $fraction;
                                                if($baseSwiperContainer.find('.og_swiper_pagination').length == 0){
                                                    $fraction = OG$('<div class="og_module_container og_swiper_pagination"><div class="swiper-pagination"></div></div>');
                                                    $baseSwiperContainer.append($fraction);
                                                }
                                                config['pagination'] = {el: $baseSwiperContainer.find('.swiper-pagination')[0],type: 'fraction'};
                                                break;
                                            default :
                                                break;
                                        }
                                    });
                                }
                                makeogSwiper();
                            }
                            /**
                             * swiper 생성 방법
                             * 1) OG_SwiperCustomArray -> {swiperName : 스와이퍼구분명, swiperOption : 스와이퍼 실행 옵션} 형태로 push
                             * 2) html 마크업에 data 속성으로 요소 넣는다
                             * 3) 직접 swiper option을 넣는다 ex $mainContent.addClass('OG_swiper').OG_swiperFunc(config);
                             */
                            function makeogSwiper(){
                                if(custom === 'true'){
                                    if(typeof options !== 'undefined'){
                                        config = OG$.extend(config,options);
                                    }else{
                                        OG_SwiperCustomArray.forEach(function(e,i){
                                            if(e.swiperName == name){
                                                var options = e.swiperOption;
                                                config = OG$.extend(config,options);
                                            }
                                        });
                                    }
                                }else{
                                    if(typeof options !== 'undefined'){
                                        config = OG$.extend(config,options);
                                    }else{
                                        let ogSwiperDataArray=dataSetKeyArray.reduce(function(acc,e,i,arr){
                                            if(e.indexOf('ogswipe')>-1&&e.indexOf('ogswipeName')==-1&&e.indexOf('ogswipeCustom')==-1&&e.indexOf('ogswipeConnect')==-1&&e.indexOf('ogswipeModule')==-1){
                                                let option=e.split('ogswipe')[1];option=option.replace(option[0],option[0].toLowerCase());
                                                let value = dataSet[e];
                                                let numberValue = Number(value);
                                                if (isNaN(numberValue) === !1) {
                                                    value = numberValue
                                                }
                                                switch (value) {
                                                    case 'true':
                                                        value = !0;
                                                        break;
                                                    case 'false':
                                                        value = !1;
                                                        break;
                                                    default:
                                                        break
                                                }
                                                Object.keys(OG_SWIPE_KEYS).forEach(function(e,i){
                                                    let keyLowerCase = e.toLowerCase();
                                                    if(option == keyLowerCase){
                                                        option = e;
                                                    }
                                                });
                                                switch (option) {
                                                    case 'autoplay':
                                                        value = {
                                                            delay: value,
                                                            disableOnInteraction: !1
                                                        };
                                                        break;
                                                    case 'keyboard':
                                                        value = {
                                                            enabled: !0
                                                        };
                                                        break;
                                                    default:
                                                        break
                                                }
                                                acc[option]=value;
                                                return acc;
                                            }else{return acc}},{});
                                        config=OG$.extend(config,ogSwiperDataArray);
                                    }
                                }
                            };
                            function updateSwipe(){
                                if(ogswiper.virtualSize - ogswiper.size < 5){
                                    OG$(ogswiper.$wrapperEl).addClass('no-swiping');
                                    OG$(ogswiper.$el).closest('.og_swiper_container').find('.og_module_container').addClass('displaynone');
                                }else{
                                    OG$(ogswiper.$wrapperEl).removeClass('no-swiping');
                                    OG$(ogswiper.$el).closest('.og_swiper_container').find('.og_module_container').removeClass('displaynone');
                                }
                                ogswiper.update();
                            }
                            if(typeof config['observeParents'] === 'undefined'){
                                const targetNode = $x.get(0);
                                const observer = new ResizeObserver(detectChange);
                                let heightCheck = $x.outerHeight();
                                let widthCheck = $x.outerWidth();
                                function detectChange(mutationsList, observer) {
                                    if(mutationsList){
                                        if(heightCheck !== mutationsList[0].contentRect.height){
                                            //console.log('pass');
                                        }else{
                                            setTimeout(updateSwipe, 300);
                                            setTimeout(updateSwipe, 1200);
                                        }
                                    }
                                };
                                observer.observe(targetNode, {box: "border-box"});
                            }
                            let slideUpdateFunc = function(a, b){
                                a.some(function(arr, val){
                                    if(arr.type === 'childList'){
                                        OG$(ogswiper.$wrapperEl).children().addClass('swiper-slide');
                                        updateSwipe();
                                        return true;
                                    }
                                });
                            }
                            $x.OG_observerFunc(slideUpdateFunc, {
                                attributes: false,
                                childList: true,
                                subtree: false,
                            });
                            x['ogswipe'] = config; //OG_swiper에 넣어줌
                            window['ogswipe_' +name] = new Swiper($swiperContainer[0], config);
                            $x.attr('data-ogswipe-name', 'ogswipe_' + name);
                            ogswiper = window['ogswipe_' +name];
                            $x.addClass('ogswipe-done');
                            let OG_SWIPER_SINGLE_CALL_END = new CustomEvent('OGSwiperCall', {'detail': window['ogswipe_' +name] });
                            x.dispatchEvent(OG_SWIPER_SINGLE_CALL_END);
                            innerDef.resolve();
                        }
                    }
                    setSwiper();
                }else{
                    let name = OG$(this).attr('data-ogswipe-name');
                    let ogswiper = window[name];
                    if(typeof ogswiper !== 'undefined'){
                        ( chk = function(){
                            setTimeout(function(){
                                if(ogswiper.virtualSize - ogswiper.size < 5){
                                    OG$(ogswiper.$wrapperEl).addClass('no_swiping');
                                    OG$(ogswiper.$el).closest('.og_swiper_container').find('.og_module_container').addClass('displaynone');
                                }else{
                                    OG$(ogswiper.$wrapperEl).removeClass('no_swiping');
                                    OG$(ogswiper.$el).closest('.og_swiper_container').find('.og_module_container').removeClass('displaynone');
                                }
                                ogswiper.slideTo(0,0,true);
                                innerDef.resolve();
                            },300);
                        })();
                    }
                }
            })();
        });

        OG$.when.apply(OG$, OG_SWIPE_DEFERREDLIST).done(function() {
            def.resolve();
        });

        return def.promise();

    },
    OG_swiperConnectFunc : function($ogSwiper, speed){
        this.each(function(i, x){
            let classList = x.classList;
            if(classList.contains('ogswipe-done') === true){
                let $x = OG$(x),
                    name = $x.attr('data-ogswipe-name'),
                    ogswiper = window[name],
                    connect,
                    ogswiperConnect = [];
                if(typeof $ogSwiper !== 'undefined'){
                    $ogSwiper.each(function(j, y){
                        let $y = og$(y),
                            connectName = $y.attr('data-ogswipe-name'),
                            speed = y['ogswipe'].speed,
                            obj = {};
                        obj['name'] = connectName;
                        obj['speed'] = speed;
                        ogswiperConnect.push(obj);
                    });
                }else{
                    connect = $x.attr('data-ogswipe-connect');
                    if(typeof connect !== 'undefined' && connect !== ''){
                        connect = (connect.indexOf(',')>-1) ? connect.split(',') : [connect];
                        connect.forEach(function(e,i){
                            let connectName = (e.indexOf('ogswipe_')>-1) ? e : 'ogswipe_' + e,
                                $e = OG$('[data-ogswipe-name="'+ connectName +'"]');
                            if($e.length > 0){
                                let speed = $e[0]['ogswipe'].speed,
                                    obj = {};
                                obj['name'] = connectName;
                                obj['speed'] = speed;
                                ogswiperConnect.push(obj);
                            }
                        });
                    }
                }
                ogswiper.on('slideChange', function () {
                    let x = this;
                    ogswiperConnect.forEach(function(e,i){
                        window[e.name].slideTo(x.realIndex,e.speed,true);
                    });
                });
            }
        });
    },
    /**
     * change observer (dom 변화 감지 후 함수 실행)
     */
    OG_observerFunc : function(callback, config){
        const targetNode = this.get(0);
        const observer = new MutationObserver(detectChange);
        function detectChange(mutationsList, observer) {
            if(mutationsList){
                observer.disconnect();
                let result = callback(mutationsList,observer);
                if(result !== false){
                    setTimeout(function(){
                        observer.observe(targetNode, config);
                    },0);
                }
            }
        };
        observer.observe(targetNode, config);
    },
    OG_replaceTag : function(newTag) {
        var originalElement = this[0];
        if(typeof originalElement !== 'undefined'){
            var originalTag = originalElement.tagName.toLowerCase()
                , startRX = new RegExp('^<'+originalTag, 'i')
                , endRX = new RegExp(originalTag+'>$', 'i')
                , startSubst = '<'+newTag
                , endSubst = newTag+'>'
                , newHTML = originalElement.outerHTML
                .replace(startRX, startSubst)
                .replace(endRX, endSubst);
            this.replaceWith(newHTML);
        }
    },
});

/**
 * menu list call
 */
var OGBaseMenuCall = OGBaseMenuCall || {
    __OG_DEFAULT_VALUE_FUNCTION_USE : true,
    __OG_DEFAULT_VALUE_AJAX_URL : '/exec/front/Product/SubCategory',
    __OG_DEFAULT_VALUE_PRINT_ELEMENT : ['[data-ogcate-type]'],
    __OG_DEFAULT_VALUE_SUBCATEGORY_DATA_ORIGINAL : [] || {},
    __OG_DEFAULT_VALUE_SUBCATEGORY_DATA : [] || {},
    __OG_DEFAULT_VALUE_LOCATION_HAS_CATE_PARAM : (OG_LOCATION_PARAMETERS.indexOf('cate_no=') > -1 ) ? true : false,
    __OG_DEFAULT_VALUE_LOCATION_NOW_CATE : null,
    __OG_DEFAULT_VALUE_SUBCATEGORY_MAX_DEPTH : null,
    __OG_DEFAULT_VALUE_SUBCATEGORY_TYPE_LIST : [
        {type : 'allView_hover', allCateSet : 2,viewNextSet: 1, virtualParentUse : false, virtualParentList: [{name: "HOME", design_page_url: "/", use: false}, {name: "SHOP", cate_no : 1, design_page_url: "/product/shop.html", use: true}]},
        {type : 'allView_slide', allCateSet : 1,viewNextSet: 1, virtualParentUse : false,virtualParentList: [{name: "HOME", design_page_url: "/", use: false}, {name: "SHOP", cate_no : 1, design_page_url: "/product/shop.html", use: true}]},
        {type : 'currentView_list_full', allCateSet : 1,viewNextSet: 1, virtualParentUse : false,virtualParentList: [{name: "HOME", design_page_url: "/", use: false}, {name: "SHOP", cate_no : 1, design_page_url: "/product/shop.html", use: true}]},
        {type : 'currentView_list_under', allCateSet : 1,viewNextSet: 1, virtualParentUse : false,virtualParentList: [{name: "HOME", design_page_url: "/", use: false}, {name: "SHOP", cate_no : 1, design_page_url: "/product/shop.html", use: true}]},
        {type : 'currentView_list_select', allCateSet : 0,viewNextSet: 1, virtualParentUse : false,virtualParentList: [{name: "HOME", design_page_url: "/", use: false}, {name: "SHOP", cate_no : 1, design_page_url: "/product/shop.html", use: true}]}
    ],
    __OG_DEFAULT_VALUE_SUBCATEGORY_ALL_TXT : 'All',
    init : function(){
        return new Promise(function (res, rej) {
            if(typeof OG_CATE_LINK_SETTING !== 'undefined'){
                OG$.each(OG_CATE_LINK_SETTING, function(k, v){
                    if(typeof OGBaseMenuCall[k] === 'object'){
                        OGBaseMenuCall[k] = OG$.extend(true, OGBaseMenuCall[k], v);
                    }else{
                        OGBaseMenuCall[k] = v;
                    };
                });
            };
            if(OGBaseMenuCall.__OG_DEFAULT_VALUE_FUNCTION_USE){
                if(OGBaseMenuCall.__OG_DEFAULT_VALUE_SUBCATEGORY_DATA.length == 0){
                    OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE =  (OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_HAS_CATE_PARAM) ? Number(OG_util.getParameterByName(OG_LOCATION_HREF, 'cate_no')) : null;

                    OG$.ajax({
                        url : OGBaseMenuCall.__OG_DEFAULT_VALUE_AJAX_URL,
                        dataType: 'json',
                        success: function(aData) {
                            if (aData == null || aData == 'undefined') return;
                            /* 오리지널 데이터 저장 - 해당 카테고리 번호로 배열 등록 */
                            OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA_RAW'] = aData;
                            OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA_ORIGINAL'] = {};
                            aData.forEach(function(e,i){
                                OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA_ORIGINAL'][e.cate_no] = e;
                                let chk = e.design_page_url;
                                chk = (OG_SKIN_NUM.slice(1,OG_SKIN_NUM.length)) + chk;
                                if(chk.indexOf('list2.html') > -1){
                                    chk = chk.replace('list2.html', 'list.html');
                                }
                                OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA_ORIGINAL'][e.cate_no].design_page_url = chk;
                            });
                            res(aData);
                        },
                    });
                }else{
                    res(OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA_RAW']);
                };
            }else{
                let obj = {};
                res(obj);
            };
        });
    },
    printList : function(){
        OGBaseMenuCall.init().then(function(res){
            let aData = res;
            /* 메뉴 데이터 재조정 */
            let data = JSON.parse(JSON.stringify(aData));
            OGBaseMenuCall.__OG_DEFAULT_VALUE_PRINT_ELEMENT.forEach(function(e, i){
                OG$(e).each(function(idx, item){
                    let $baseMenuWrapper = OG$(item);
                    if(i == 0 && idx == 0){
                        var prefix = '__OG_DEFAULT_VALUE_CATE_LIST_DEPTH_';
                        var chkMax = 0;

                        /* 메인 분류 저장 */
                        var mainCategoryNumArray = [];
                        $baseMenuWrapper.find('.xans-record-[data-cate]').each(function(){
                            let $menu1li = OG$(this);
                            let cate_no_chk = $menu1li.attr('data-cate');
                            mainCategoryNumArray.push(Number(cate_no_chk));
                        });

                        let duplicateCateIfisMainArray = [];
                        data.forEach(function(item){
                            item['parent_cate_no_custom'] = item['parent_cate_no'];

                            /* 카테고리 세팅값 변경 */
                            OG_CATE_LINK_CUSTOM.some(function(v, idx, arr) {
                                if(v.cate_no == item.cate_no) {
                                    OG$.extend(item, arr[idx]);
                                    arr.splice(idx,1);
                                    return true;
                                };
                            });

                            /* 메인 분류이나 1차 메뉴가 아닌 경우 별도 복제 */
                            mainCategoryNumArray.some(function(v, idx, arr) {
                                if(v == item.cate_no) {
                                    item['is_main'] = true;
                                    if(item['parent_cate_no_custom'] !== 1){
                                        let duplicateCateIfisMain = JSON.parse(JSON.stringify(item))
                                        duplicateCateIfisMain['parent_cate_no_custom'] = 1;
                                        duplicateCateIfisMainArray.push(duplicateCateIfisMain);
                                    }
                                    arr.splice(idx,1);
                                    return true;
                                };
                            });
                        });
                        data.push(...duplicateCateIfisMainArray);
                        OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA'] = data; //카테고리 데이터 저장

                        let testtest = function(subData, subChildrens, src, idx){
                            src[idx] = JSON.parse(JSON.stringify(subData));
                            subChildrens= src[idx].childrens;

                            if(typeof subChildrens !== 'undefined'){
                                let plus = function(parents){
                                    (test = function(subChildrens, depth, parents){
                                        subChildrens.forEach(function(e, i){
                                            let childrens = e.childrens;
                                            e['cate_depth'] = depth + 1;
                                            e['parents'] = [...new Set(JSON.parse(JSON.stringify(parents)))];
                                            let newparents = JSON.parse(JSON.stringify(parents));
                                            newparents.push(e.cate_no);
                                            let name = prefix + (depth+1);
                                            if(typeof OGBaseMenuCall[name] === 'undefined') {
                                                OGBaseMenuCall[name] = [];
                                            }
                                            OGBaseMenuCall[name][e.cate_no] = e;
                                            test(childrens, (depth + 1), newparents);
                                        });
                                    })(subChildrens, 1, parents);
                                }
                                let minus = function(parents){
                                    (test = function(subChildrens, depth, parents){
                                        subChildrens.forEach(function(e, i){
                                            let childrens = e.childrens;
                                            e['cate_depth'] = depth - 1;
                                            e['parents'] = [...new Set(JSON.parse(JSON.stringify(parents)))];
                                            let newparents = JSON.parse(JSON.stringify(parents));
                                            newparents.push(e.cate_no);
                                            let name = prefix + (depth-1);
                                            if(typeof OGBaseMenuCall[prefix + 'undefined'] === 'undefined') {
                                                OGBaseMenuCall[prefix + 'undefined'] = [];
                                            }
                                            if(typeof OGBaseMenuCall[name] === 'undefined') {
                                                OGBaseMenuCall[name] = [];
                                            }
                                            OGBaseMenuCall[name][e.cate_no] = e;
                                            OGBaseMenuCall[prefix + 'undefined'][e.cate_no] = e;
                                            test(childrens, (depth - 1), newparents);
                                        });
                                    })(subChildrens, -1, parents);
                                }

                                if(src[idx]['parent_cate_no'] !== 1 && src[idx]['parent_cate_no_custom'] === 1){
                                    src[idx]['cate_depth'] = -1;
                                    src[idx]['parents'] = [-1];
                                    let name = prefix + (-1);
                                    if(typeof OGBaseMenuCall[name] === 'undefined') {
                                        OGBaseMenuCall[name] = [];
                                    }
                                    OGBaseMenuCall[name][ src[idx]['cate_no']] = src[idx];
                                    minus([-1, src[idx]['cate_no']]);
                                }else{
                                    src[idx]['cate_depth'] = 1;
                                    src[idx]['parents'] = [1];
                                    let name = prefix + (1);
                                    if(typeof OGBaseMenuCall[name] === 'undefined') {
                                        OGBaseMenuCall[name] = [];
                                    }
                                    OGBaseMenuCall[name][ src[idx]['cate_no']] = src[idx];
                                    plus([1, src[idx]['cate_no']]);
                                }
                            }
                        };


                        /* 카테고리 트리 생성 (카테고리 하위로 childrens object 생성) */
                        const nest = function(data, single_data){
                            data = data.filter(function(item){
                                let parentCustomCateNo = (typeof single_data === 'number') ? 1 : single_data.cate_no;
                                let parentCateDepth = (typeof single_data.cate_depth === 'undefined') ? 0 : single_data.cate_depth;
                                if(item['parent_cate_no_custom'] == parentCustomCateNo){
                                    return true;
                                }
                            }).map(function(item){
                                item['childrens'] = nest(data, item);
                                return item;
                            });
                            return data;
                        };
                        const tree = nest(data, 1);

                        OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA_TREE'] = tree; //카테고리 트리 데이터 저장
                        OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA'].forEach(function(subData, subDataIdx){
                            let subDataParentCateNo = subData.parent_cate_no;
                            let subChildrens = subData.childrens;
                            duplicateCateIfisMainArray.forEach(function(dup){
                                let dupChildrens = dup.childrens;
                                if((subData.cate_no == dup.cate_no) && (subData.parent_cate_no_custom == 1 && subData.parent_cate_no !== 1)){
                                    let remainData;
                                    OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA'].filter(function(remain){
                                        if((remain.cate_no == subData.cate_no) && remain.parent_cate_no_custom !== 1){
                                            remainData = remain;
                                        }
                                    });
                                    remainData['childrens'] = [];
                                    remainData['childrens'] = dupChildrens;
                                    OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA'][subDataIdx] = {};
                                    OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA'].splice(subDataIdx,1);
                                }
                            });
                        });

                        OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA_TREE'].forEach(function(subData, subDataIdx){
                            let subChildrens = subData.childrens;
                            testtest(subData, subChildrens,OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA_TREE'],subDataIdx);
                        })

                        let testbbbb = [];
                        (testbbbbFunc = function(array){
                            array.forEach((el) => {
                                let chk = (typeof OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA_ORIGINAL'][el.cate_no]=== 'undefined') ? false : true;
                                if(testbbbb.length > 0){
                                    let result = false;
                                    testbbbb.forEach(function(el2,idx){
                                        let copy = JSON.parse(JSON.stringify(el2));
                                        let copy2 = JSON.parse(JSON.stringify(el2));
                                        delete copy.cate_depth;
                                        delete copy2.cate_depth;
                                        delete copy.childrens;
                                        delete copy2.childrens;
                                        delete copy.parents;
                                        delete copy2.parents;
                                        if(JSON.stringify(el) === JSON.stringify(el2)){
                                            if(el.cate_depth > 0){
                                                result = true;
                                            }
                                        }else{
                                            result = true;
                                        }
                                    });
                                    if(result){
                                        testbbbb.push(el);
                                        testbbbbFunc(el.childrens);
                                    }
                                }else{
                                    if(el.childrens.length > 0){
                                        testbbbb.push(el);
                                        testbbbbFunc(el.childrens);
                                    }else{
                                        testbbbb.push(el);
                                    }
                                }
                            })
                        })(JSON.parse(JSON.stringify(tree)));
                        OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA'] = testbbbb; //카테고리 데이터 재저장
                        Object.keys(OGBaseMenuCall).forEach(function(key){
                            if(key.indexOf(prefix) > -1){
                                let chkNum = OG_util.onlyNumbFunc(key.split(prefix)[1]);
                                if(chkMax < chkNum){
                                    chkMax = chkNum;
                                }
                            }
                        });
                        OGBaseMenuCall.__OG_DEFAULT_VALUE_SUBCATEGORY_MAX_DEPTH = chkMax; //최고 메뉴 뎁스
                    }
                    /* 카테고리 영역 생성 함수 실행 */
                    if(! $baseMenuWrapper.hasClass('done')){
                        let dataCateType = $baseMenuWrapper.data('ogcate-type');
                        OGBaseMenuCall.custom(OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA_TREE'], $baseMenuWrapper, dataCateType);
                        $baseMenuWrapper.addClass('done');
                    };
                });
            });
            /* 모든 카테고리 영역 생성 완료 시 이벤트 body - OGMenuCall */
            let OG_MENU_CALL_END = new CustomEvent('OGMenuCall', {'detail': data });
            document.body.dispatchEvent(OG_MENU_CALL_END);
        });
    },
    custom : function(data, $el, type){
        /* 카테고리 영역 생성 함수 - $el data-ogcate-type 값에 따라 변경됨 */
        switch(true){
            case (type.indexOf('allView') != -1) :
                OGBaseMenuCall.allView(OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA_TREE'], $el, type);
                break;
            case (type.indexOf('currentView') != -1) :
                OGBaseMenuCall.currentView(OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA'], $el, type);
                break;
            default :
                break;
        };
    },
    allView : function(data, $el, type){
        /**
         * 전체 메뉴 노출의 경우 생성
         */
        let allCateSet = false;
        let virutalCateSet = false;
        let virtualCateList = [];
        OGBaseMenuCall.__OG_DEFAULT_VALUE_SUBCATEGORY_TYPE_LIST.filter(function(el) {
            if(el.type == type){
                allCateSet = el.allCateSet;
                virutalCateSet = el.virtualParentUse;
                virtualCateList = el.virtualParentList;
            };
        });

        let allCateName = OGBaseMenuCall.__OG_DEFAULT_VALUE_SUBCATEGORY_ALL_TXT;
        let defaultEventExec = ($el.attr('data-ogcate-event')) ? ($el.attr('data-ogcate-event') === 'false')? false: true : true;
        let $menuEl = $el.find('.xans-record-[data-cate]').first().parent();
        let $menuTopPaernetCate = $menuEl.siblings('a');
        if($menuTopPaernetCate.length > 0){
            if(virutalCateSet){
                virtualCateList.forEach(function(e,i){
                    if(typeof e.cate_no !== 'undefined'){
                        $menuTopPaernetCate.text(e.name);
                        if(e.use !== false){
                            $menuTopPaernetCate.attr('href', e.design_page_url);
                        }else{
                            $menuTopPaernetCate.attr('href', 'javascript:void(0);');
                        }
                    }
                });
            }else{
                $menuTopPaernetCate.attr('href', 'javascript:void(0);');
            }
        }
        ( makeCategoryFunc = function(data, parentCateNo){
            if(data.length == 0) return;
            data.forEach(function(e,i){
                let dataDepth = e.cate_depth,
                    cateNo = e.cate_no,
                    link = (e['custom_link']) ? e['custom_link'] : '/' + e['design_page_url'] + e['param'],
                    name = (e['change_name']) ? e['change_name'] : e['name'],
                    addText = (typeof e['add_sub_text'] != 'undefined') ? e['add_sub_text'] : null,
                    viewType = (typeof e['cate_view_type'] != 'undefined') ? e['cate_view_type'] : null,
                    allCateType = (typeof e['all_cate_type'] != 'undefined') ? e['all_cate_type'] : null,
                    isMain = (typeof e['is_main'] != 'undefined') ? e['is_main'] : false,
                    hasChildren = (e.childrens.length > 0) ? true : false;

                let makeAllCateView = 0;
                switch(allCateSet){
                    case 0 :
                        /* 전체 카테고리 생성 없음 */
                        break;
                    case 1 :
                        /* 실하위 카테고리가 하나 이상일때 하위에 전체 메뉴 생성 */
                        makeAllCateView = 1;
                        break;
                    case 2 :
                        /* 실하위 카테고리와 무관하게 하위에 전체 메뉴 생성 */
                        makeAllCateView = 2;
                        break;
                    default :
                        break;
                };

                /**
                 * allCateSet 설정과 무관하게 우선적으로 적용되는 전체 카테고리 생성 설정
                 */
                if(allCateType != null){
                    switch(allCateType){
                        case 0 :
                            makeAllCateView = 0;
                            /* 전체 카테고리 생성 없음 */
                            break;
                        case 1 :
                            /* 실하위 카테고리가 하나 이상일때 하위에 전체 메뉴 생성 */
                            makeAllCateView = 1;
                            break;
                        case 2 :
                            /* 실하위 카테고리와 무관하게 하위에 전체 메뉴 생성 */
                            makeAllCateView = 2;
                            break;
                        default :
                            break;
                    };
                };

                var $parent;
                if(parentCateNo === 1){
                    $parent = $menuEl.parent();
                }else{
                    $parent = $menuEl.find('[data-cate="'+ parentCateNo +'"]').not('.menu_virtual');
                }
                var $cateEl = $menuEl.find('[data-cate="'+ cateNo +'"]');

                if(typeof dataDepth !== 'undefined'){
                    $parent.each(function(i,e){
                        let $e = OG$(e);
                        if($e.children('ul').length > 0){
                            let chkClass = $e.children('ul').attr('class');
                            if(chkClass.indexOf(' ') > -1){
                                chkClass = chkClass.split(' ');
                            }else{
                                chkClass = [chkClass];
                            }
                            chkClass = chkClass.filter(function(item){
                                if(item.indexOf('menu_') > -1){
                                    return true;
                                }
                            });
                            dataDepth = OG_util.onlyNumbFunc(chkClass[0]);
                            if($e.children('ul').children('[data-cate="'+ cateNo +'"]').length == 0){
                                if(! ($e.children('ul')[0] === $menuEl[0] && isMain === false)){
                                    $cateEl = OG$('<li class="menu_'+ dataDepth +'li" data-cate="'+ cateNo +'" data-depth="'+ dataDepth +'"><a href="'+ link +'">'+ name +'</a></li>');
                                    $e.children('ul').append($cateEl);
                                }
                            }else{
                                $cateEl.attr('href',link).not('.menu_virtual').children('a').text(name);
                            }
                        }
                    });
                    $menuEl.find('[data-cate="'+ cateNo +'"]').each(function(i,e){
                        var $e = OG$(e);
                        // console.log("addText1: ", addText);
                        // 페이지 로드 느려져서 주석처리
                        if(addText != null){
                            $e.addClass('menu_point').children('a').append('<span class="add_txt" data-txt="'+ addText +'">'+ addText +'</span>');
                        }
                        if(viewType != null){
                            switch(viewType[0]){
                                case 0 : /* 해당 카테고리 감춤 */
                                    $e.addClass('displaynone');
                                    break;
                                case 1 : /* 해당 카테고리 하위 계층 안보여줌 */
                                    $e.addClass('hidden_under').removeClass('submenu');
                                    break;
                                default :
                                    break;
                            };
                        };
                        if($e.children('ul').length == 0 && $e.hasClass('menu_virtual') == false){
                            let chkClass = $e.attr('class');
                            if(chkClass.indexOf(' ') > -1){
                                chkClass = chkClass.split(' ');
                            }else{
                                chkClass = [chkClass];
                            }
                            chkClass = chkClass.filter(function(item){
                                if(item.indexOf('menu_') > -1){
                                    return true;
                                }
                            });
                            dataDepth = OG_util.onlyNumbFunc(chkClass[0]);
                            if(hasChildren){
                                $e.append('<ul class="menu_'+ (dataDepth+1) + 'ul"></ul>');
                                $e.addClass('submenu');
                            }
                            if(makeAllCateView > 0){
                                if((makeAllCateView == 1 && hasChildren == true) || (makeAllCateView == 2)){
                                    //append all cate
                                    let allCateNameFin;
                                    if(! allCateName){
                                        allCateNameFin = name;
                                        if(addText) allCateNameFin += '<span class="add_txt" data-txt="'+ addText +'">'+ addText +'</span>';
                                    }else{
                                        allCateNameFin = allCateName;
                                    };
                                    var $cateEl2 = $e.clone();
                                    $cateEl2.attr('data-depth', dataDepth+1).removeClass().addClass('menu_' + (dataDepth+1) + 'li menu_virtual').children('a').html(allCateNameFin);
                                    if($e.children('ul').length == 0){
                                        $e.append('<ul class="menu_'+ (dataDepth+1) + 'ul"></ul>');
                                        $e.addClass('submenu');
                                    }
                                    $e.children('ul').prepend($cateEl2);
                                }
                            }
                        }
                    });
                    makeCategoryFunc(e.childrens, cateNo, name);
                }
            });
        })(data, 1);

        if(defaultEventExec){
            OGBaseMenuCall.allViewEvent(type, $el);
        };

        let OG_MENU_SINGLE_CALL_END = new CustomEvent('OGMenuCall', {'detail': data });
        $el[0].dispatchEvent(OG_MENU_SINGLE_CALL_END);
    },
    currentView : function(data, $el, type){
        /**
         * 특정 메뉴 기준 노출의 경우 생성
         */
        if($el.find('.cate_path').length == 0){$el.prepend('<div class="cate_path"><ul></ul></div>');}
        if($el.find('.cate_list').length == 0){$el.find('.menu_1ul').wrap('<div class="cate_list"></div>');}
        var thisCateNum = $el.attr('data-ogcate-num');
        if(! thisCateNum){
            thisCateNum = OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE;
        };
        let allCateSet = false;
        let viewNextSet = false;
        let virutalCateSet = false;
        let virtualCateList = [];
        OGBaseMenuCall.__OG_DEFAULT_VALUE_SUBCATEGORY_TYPE_LIST.filter(function(el) {
            if(el.type == type){
                allCateSet = el.allCateSet;
                if(typeof el.viewNextSet !== 'undefined'){
                    viewNextSet = el.viewNextSet;
                }else{
                    viewNextSet = '';
                }
                virutalCateSet = el.virtualParentUse;
                virtualCateList = el.virtualParentList;
            };
        });
        let defaultEventExec = ($el.attr('data-ogcate-event')) ? ($el.attr('data-ogcate-event') === 'false')? false: true : true;
        let allCateName = OGBaseMenuCall.__OG_DEFAULT_VALUE_SUBCATEGORY_ALL_TXT;
        let $menuEl = $el.find('.xans-record-[data-cate]').first().parent();
        let $menuTopPaernetCate = $menuEl.siblings('a');

        let this_data;
        let this_data_chk = data.filter(function(item) {
            if(item.cate_no == thisCateNum){
                return true;
            };
        });

        if(this_data_chk.length > 1){
            this_data_chk.forEach(function(e){
                if(e.cate_depth > 0){
                    this_data = e;
                }
            });
        }else{
            this_data = this_data_chk[0];
        }


        if(typeof this_data === 'undefined'){
            return false;
        }else{


            let this_cateNo = this_data['cate_no'],
                this_viewType = this_data['cate_view_type'],
                this_childrens = this_data['childrens'],
                this_parenstCateNo = this_data['parents'],
                this_cateDepth = this_data['cate_depth'],
                this_name = (this_data['change_name']) ? this_data['change_name'] : this_data['name'],
                this_parentCateNo = this_data.parent_cate_no;
            OGBaseMenuCall['__OG_DEFAULT_VALUE_CURRENT_CATE_STANDARD_NO_' + this_cateNo] = [];
            OGBaseMenuCall['__OG_DEFAULT_VALUE_CURRENT_CATE_NEXT_DEPTH_CATE_FROM_' + this_cateNo] = (this_childrens.length > 0) ? this_childrens : [];
            OGBaseMenuCall['__OG_DEFAULT_VALUE_LOCATION_NOW_CATE_NAME'] = this_name;

            $el.find('.menu_1ul').remove();

            if(typeof this_viewType !== 'undefined'){
                if(this_viewType.length == 2 ){
                    viewNextSet = this_viewType[1];
                }
            }

            if(this_viewType !== 1){
                var setSingleCate = function(item, prevDepth, chk){
                    let dataDepth = Math.abs(item['cate_depth']),
                        cateNo = item['cate_no'],
                        link = (item['custom_link']) ? item['custom_link'] : '/' + item['design_page_url'] + item['param'],
                        name = (item['change_name']) ? item['change_name'] : item['name'],
                        addText = (item['add_sub_text']) ? item['add_sub_text'] : null,
                        viewType = (typeof item['cate_view_type'] != 'undefined') ? item['cate_view_type'] : null,
                        allCateType = (typeof item['all_cate_type'] != 'undefined') ? item['all_cate_type'] : null,
                        $cateEl = OG$('<li class="menu_'+ (dataDepth) +'li" data-cate="'+ cateNo +'" data-depth="'+ (dataDepth) +'"><a href="'+ link +'">'+ name +'</a></li>'),
                        hasChildren = (item['childrens'].length > 0) ? true : false,
                        parentCateNo = item['parent_cate_no'],
                        parents = OGBaseMenuCall['__OG_DEFAULT_VALUE_SUBCATEGORY_DATA'].filter(function(item){
                            if(item.cate_no === parentCateNo){return true;}
                        });
                    if(hasChildren){
                        $cateEl.addClass('submenu');
                    }

                
                    if(addText != null) $cateEl.addClass('menu_point').children('a').append('<span class="add_txt" data-txt="'+ addText +'">'+ addText +'</span>');
                    $el.find('.menu_'+ (prevDepth) +'ul').append($cateEl);


                    let $parent = OG$('<ul class="menu_'+ (prevDepth + 1) +'ul"></ul>');

                    /**
                     * 전체 카테고리 생성
                     */
                    let makeAllCateView = 0;
                    /**
                     * 영역별 전체 카테고리 생성 설정
                     */
                    switch(allCateSet){
                        case 0 :
                            /* 전체 카테고리 생성 없음 */
                            break;
                        case 1 :
                            /* 실하위 카테고리가 하나 이상일때 하위에 전체 메뉴 생성 */
                            makeAllCateView = 1;
                            break;
                        case 2 :
                            /* 실하위 카테고리와 무관하게 하위에 전체 메뉴 생성 */
                            makeAllCateView = 2;
                            break;
                    };
                    /**
                     * allCateSet 설정과 무관하게 우선적으로 적용되는 전체 카테고리 생성 설정
                     */
                    if(allCateType != null){
                        switch(allCateType){
                            case 0 :
                                makeAllCateView = 0;
                                /* 전체 카테고리 생성 없음 */
                                break;
                            case 1 :
                                /* 실하위 카테고리가 하나 이상일때 하위에 전체 메뉴 생성 */
                                makeAllCateView = 1;
                                break;
                            case 2 :
                                /* 실하위 카테고리와 무관하게 하위에 전체 메뉴 생성 */
                                makeAllCateView = 2;
                                break;
                        };
                    };




                    if(makeAllCateView > 0){

                        if((makeAllCateView == 1 && hasChildren == true) || (makeAllCateView == 2)){



                        }
                    }
                }

                var makeCategoryFunc = function(item){
                    let p_depth = Math.abs(item.cate_depth),
                        p_cateNo = item.cate_no,
                        p_link = (item['custom_link']) ? item['custom_link'] : '/' + item['design_page_url'] + item['param'],
                        p_name = (item['change_name']) ? item['change_name'] : item['name'],
                        p_childrens = item.childrens;

                    let result = OGBaseMenuCall['__OG_DEFAULT_VALUE_CURRENT_CATE_STANDARD_NO_' + this_data.cate_no].some(function(item2){
                        if(item2.cate_no == item.cate_no){
                            return true;
                        }
                    });
                    if(result == false){
                        OGBaseMenuCall['__OG_DEFAULT_VALUE_CURRENT_CATE_STANDARD_NO_' + this_data.cate_no].unshift(item);
                        /* 경로 저장 */
                        $el.find('.cate_path ul').prepend('<li data-path="'+p_cateNo+'"><a href="'+ p_link +'">'+ p_name +'</a></li>');
                    }

                    /* 메뉴 생성 */
                    if($el.find('.menu_'+ (p_depth) +'ul').length == 0){
                        $el.find('.cate_list').append('<ul class="menu_'+ p_depth +'ul"></ul>');
                    }
                    if($el.find('.menu_'+ (p_depth) +'ul').children('[data-cate="'+p_cateNo+'"]').length == 0){
                        setSingleCate(item, p_depth, true);
                    }


                    if(p_childrens.length > 0){
                        if($el.find('.menu_'+ (p_depth+1) +'ul').length == 0){
                            $el.find('.cate_list').append('<ul class="menu_'+ (p_depth+1) +'ul"></ul>');
                        }
                        p_childrens.forEach(function(item2){
                            if($el.find('.menu_'+ (p_depth+1) +'ul').children('[data-cate="'+item2.cate_no+'"]').length == 0){
                                setSingleCate(item2, (p_depth+1), true);
                            }
                        });
                    }
                };

                OGBaseMenuCall['__OG_DEFAULT_VALUE_LOCATION_NOW_CATE_PARENT_NAME'] = '';
                OGBaseMenuCall['__OG_DEFAULT_VALUE_LOCATION_NOW_CATE_PARENT_CATE'] = 1;

                this_parenstCateNo.forEach(function(no, idx){
                    if(no > 1){
                        data.filter(function(item){
                            if(item.cate_no == no){
                                if(idx == (this_parenstCateNo.length - 1)){
                                    OGBaseMenuCall['__OG_DEFAULT_VALUE_LOCATION_NOW_CATE_PARENT_NAME'] = (item['change_name']) ? item['change_name'] : item['name'];
                                    OGBaseMenuCall['__OG_DEFAULT_VALUE_LOCATION_NOW_CATE_PARENT_CATE'] = item.cate_no;
                                }
                                if(item.cate_depth > 0){
                                    makeCategoryFunc(item);
                                    $el.find('[data-cate="'+ item.cate_no +'"]').not('.menu_virtual').addClass('selected');
                                }else if((this_cateDepth < 0 && item.cate_depth < 0)){
                                    makeCategoryFunc(item, true);
                                    $el.find('[data-cate="'+ item.cate_no +'"]').not('.menu_virtual').addClass('selected');
                                }
                            }
                        });
                    }

                });
                makeCategoryFunc(this_data);

                if(typeof OGBaseMenuCall['__OG_DEFAULT_VALUE_CURRENT_CATE_STANDARD_NO_' + OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE] !== 'undefined'){
                    OGBaseMenuCall['__OG_DEFAULT_VALUE_CURRENT_CATE_STANDARD_NO_' + OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE].forEach(function(item){
                        //append all cate
                        /* let allCateNameFin;
                     if(! allCateName){
                         allCateNameFin = name;
                         if(addText) allCateNameFin += '<span class="add_txt" data-txt="'+ addText +'">'+ addText +'</span>';
                     }else{
                         allCateNameFin = allCateName;
                     };
                     var $cateEl2 = $cateEl.clone();
                     $cateEl2.attr('data-depth', (prevDepth+1)).removeClass().addClass('menu_' + (prevDepth+1) + 'li menu_virtual').children('a').html(allCateNameFin);
                     $cateEl2.addClass('submenu');
                     if($el.find('.menu_'+ (prevDepth + 1) +'ul').length == 0){
                         $el.find('.cate_list').append($parent);
                     }
                     $parent = $el.find('.menu_'+ (prevDepth+1) +'ul');
                     if($parent.find('.menu_virtual').length == 0){
                         $parent.prepend($cateEl2);
                     }*/


                        let $findEl = $el.find('li[data-cate="'+ item.cate_no +'"]');
                        var $cateEl2 = $findEl.clone();
                        $cateEl2.attr('data-depth', (item.cate_depth+1)).removeClass().addClass('menu_' + (item.cate_depth+1) + 'li menu_virtual').children('a').html(allCateName);
                        $cateEl2.addClass('submenu');
                        $parent = $el.find('.menu_'+ (item.cate_depth+1) +'ul');
                        if($el.find('.menu_'+ (item.cate_depth + 1) +'ul').length == 0){
                            $el.find('.cate_list').append($parent);
                        }
                        $parent = $el.find('.menu_'+ (item.cate_depth+1) +'ul');
                        if($parent.find('.menu_virtual').length == 0){
                            $parent.prepend($cateEl2);
                        }
                    });
                }

                if(viewNextSet === 0 && this_childrens.length > 0){
                    $el.find('.cate_list').find('ul').last().remove(); //자식 요소 제거하고 형제 요소까지만 노출
                }else if(viewNextSet === 2 && this_childrens.length == 0 && $el.find('[data-cate="'+ this_cateNo +'"]').siblings().length == 0){
                    $el.remove(); //자식요소가 없고 형제 요소도 없을때 메뉴 영역 감춤
                }

                $el.find('[data-cate="'+ this_cateNo +'"]').addClass('selected');


                if(virutalCateSet){
                    let virtualIndexChk = false;
                    virtualCateList.forEach(function(e,i){
                        if(e.use !== false){
                            if(virtualIndexChk == false){
                                $el.find('.cate_path ul').prepend('<li data-path="'+(i-1)+'"><a href="'+ e.design_page_url +'">'+ e.name +'</a></li>');
                                virtualIndexChk = true;
                            }else{
                                OG$('<li data-path="'+(i-1)+'"><a href="'+ e.design_page_url +'">'+ e.name +'</a></li>').insertAfter($el.find('.cate_path ul').children().first());
                            }
                        }
                    });
                }

                $el.find('ul[class*="menu_"]').each(function(){
                    let $menu = OG$(this);
                    if($menu.children().length == 1 && $menu.children().hasClass('menu_virtual')){
                        $menu.remove();
                    }
                });

                $el.addClass('done');

                if(defaultEventExec){
                    OGBaseMenuCall.currentViewEvent(type, $el);
                };
            }
            let OG_MENU_SINGLE_CALL_END = new CustomEvent('OGMenuCall', {'detail': OGBaseMenuCall['__OG_DEFAULT_VALUE_CURRENT_CATE_STANDARD_NO_' + this_cateNo] });
            $el[0].dispatchEvent(OG_MENU_SINGLE_CALL_END);
        }


    },
    allViewEvent : function(type, $el){
        /**
         * allView 타입일 경우 실행할 함수(기본값 - 아래 함수가 실행되지 않기를 원한다면 allView_example 의 example 부분을 고유값으로 두거나 data-ogcate-event = false 로 부여)
         */
        switch(type){
            case 'allView_slide' :
                $el.find('.submenu > a').attr('href','javascript: void(0);');
                $el.find('li[class*="menu"]').off().on('click',function(event){
                    //상위전파 막기
                    if (event.stopPropagation) event.stopPropagation();
                    else event.cancelBubble = true; // IE 대응
                    var $clickMenu = OG$(this);
                    if($clickMenu.hasClass('fixed') == false){
                        if($clickMenu.children('ul[class*="menu"]').hasClass('on')){
                            $clickMenu.removeClass('on');
                            $clickMenu.children('ul[class*="menu"]').hide();
                            $clickMenu.children('ul[class*="menu"]').removeClass('on');
                        }else{
                            $clickMenu.addClass('on');
                            $clickMenu.siblings().removeClass('on').find('li[class*="menu"]').removeClass('on');
                            $clickMenu.children('ul[class*="menu"]').fadeIn();
                            $clickMenu.children('ul[class*="menu"]').addClass('on');
                            $clickMenu.siblings().find('ul[class*="menu"]').hide();
                            $clickMenu.siblings().find('ul[class*="menu"]').removeClass('on');
                        };
                    }
                });
                break;
            case 'allView_depth' :
                let depth = Number($el.attr('data-ogcate-depth'));
                let $depthCate = $el.find('[data-depth="'+ depth +'"]');
                let $menu1ul = $el.find('.menu_1ul');
                let $depthNameUl = OG$('<ul class="cate_depth_ul" data-depth="'+ depth +'"></ul>');
                $depthCate.each(function(j,y){
                    let $y = OG$(y);
                    let dataCate = $y.attr('data-cate');
                    let subMenu = ($y.hasClass('submenu')) ? 'submenu' : '';
                    let $depthName = $y.children('a');
                    let newli = OG$('<li class="'+ subMenu +'" data-cate="'+ dataCate +'"></li>');
                    if(subMenu == 'submenu'){
                        $depthName.attr('href','javascript: void(0);');
                    };
                    newli.append($depthName);
                    $depthNameUl.append(newli);
                });
                $depthNameUl.insertBefore($menu1ul);
                $depthNameUl.find('li').off().on('click',function(event){
                    //상위전파 막기
                    if (event.stopPropagation) event.stopPropagation();
                    else event.cancelBubble = true; // IE 대응
                    var $clickMenu = OG$(this);
                    let dataCate = $clickMenu.attr('data-cate');
                    if($clickMenu.hasClass('on')){
                        $clickMenu.removeClass('on');
                        $menu1ul.find('li[class^="menu"]').filter('[data-cate="'+ dataCate +'"]').removeClass('on');
                    }else{
                        $clickMenu.addClass('on');
                        $clickMenu.siblings().removeClass('on');
                        $menu1ul.find('li[class^="menu"]').filter('[data-cate="'+ dataCate +'"]').addClass('on');
                        $menu1ul.find('li[class^="menu"]').filter('[data-cate="'+ dataCate +'"]').siblings().removeClass('on');
                    };
                });
                break;
            default :
                break;
        };
    },
    currentViewEvent : function(type, $el){
        /**
         * currentView 타입일 경우 실행할 함수(기본값 - 아래 함수가 실행되지 않기를 원한다면 currentView_example 의 example 부분을 고유값으로 두거나 data-ogcate-event = false 로 부여)
         */
        switch(type){
            case 'currentView_list_full' :
                break;
            case 'currentView_list_under' :
                break;
            case 'currentView_list_select' :
                $el.find('ul[class^="menu_"]').each(function(){
                    let $menu_ul = OG$(this);
                    if($menu_ul.find('.selected').length > 0){
                        var menuClass = OG_util.onlyNumbFunc($menu_ul.attr('class'));
                        var menuHeight = $menu_ul.outerHeight();
                        OG$(this).wrap('<div class="menu_'+ menuClass +'div"></div>');
                        OG$(this).before('<h4 class="current_cate"></h4>');
                        OG$(this).prev('h4').html(OG$(this).find('.selected').html());
                        OG$(this).attr('style', 'max-height: '+ menuHeight + 'px');
                        if(menuHeight == 0){
                            OG$(this).prev('h4').addClass('noBg');
                            OG$(this).prev('h4').find('a').addClass('noEvent');
                        }else{
                            OG$(this).prev('h4').find('a').attr('href','javascript:void(0);');
                        };
                    }else{
                        $menu_ul.addClass('displaynone');
                    };
                });
                $el.find('h4 a:not(.noEvent)').on('click',function(){
                    if(OG$(this).closest('div').hasClass('on')){
                        OG$(this).closest('div').removeClass('on');
                    }else{
                        $el.find('div[class^="menu_"]').not(OG$(this).closest('div')).removeClass('on');
                        OG$(this).closest('div').addClass('on');
                        OG_util.targetOutCloseFunc(OG$(this).closest('div'));
                    };
                });
                $el.find('div[class^="menu_"]').each(function(){
                    OG$(this).OG_observerFunc(function () {
                        setTimeout(function(){
                            if($el.find('div[class^="menu_"].on').length > 0){
                                $el.addClass('on');
                            }else{
                                $el.removeClass('on');
                            };
                        },0);
                    }, {
                        attributes: true,
                        childList: false,
                        subtree: false
                    });
                });
                break;
            default :
                break;
        };
    }
};


/**
 * swiper
 * og_swiper 클래스 보유 시 swiper 자동 생성
 * swiper 완료 시에 body에 OGSwiperCall 이벤트 발생
 */
var OGSwiperFunc = OGSwiperFunc || function(){
    return new Promise(function (topRes, topRej) {
        let count = 0;
        let $ogSwiper = OG$('.og_swiper');
        if($ogSwiper.length > 0){
            return new Promise(function (res, rej) {
                $ogSwiper.OG_swiperFunc().done(function(){
                    res(true);
                });
            }).then(function(res) {
                if($ogSwiper.filter('[data-ogswipe-connect]').length > 0){
                    $ogSwiper.filter('[data-ogswipe-connect]').OG_swiperConnectFunc();
                };
                let OG_SWIPER_CALL_END = new CustomEvent('OGSwiperCall');
                document.body.dispatchEvent(OG_SWIPER_CALL_END);
                topRes(true);
                if(typeof OGPrdDynamicCall !== 'undefined'){
                    OGPrdDynamicCall.init();
                };
            });
        }else{
            let OG_SWIPER_CALL_END = new CustomEvent('OGSwiperCall');
            document.body.dispatchEvent(OG_SWIPER_CALL_END);
            if(typeof OGPrdDynamicCall !== 'undefined'){
                OGPrdDynamicCall.init();
                topRes(true);
            }else{
                topRes(true);
            }
        };
    })
};



/**
 * 상품별 실행 : document ready 이후 실행해야 정상 동작합니다.
 * 상품 개별 영역 / 페이지 기준(ex 상품 상세/상품 선택창) 공통으로 사용 중
 */
var OGbasePrdInfoCall = OGbasePrdInfoCall || {
    __OG_DEFAULT_VALUE_FUNCTION_USE : false,
    __OG_DEFAULT_VALUE_PRC_CALC_USE : false, //할인율 계산 함수를 사용할 것인지 여부 : 쓰지 않을 경우 false로 바꾸고 개별적으로 지정하세요.
    __OG_DEFAULT_VALUE_PRC_ITEM_LIST: [
        {name: 'customPrice', element : '[id^="product_prc_custom"]'},
        {name: 'sellPrice', element : '[id^="product_prc_sell"]'},
        {name: 'promoPrice', element : '[id^="product_prc_promo"]'},
    ], // name : (example) + Price, value : [id^="product_prc_(example)"] / (example) 부분은 동일해야 합니다. & data-prc가 필요합니다.
    __OG_DEFAULT_VALUE_PRC_PAGE_LIST: [
        {name: 'customPrice', element : '#OG_ForFindPrdDetailInfo #product_prc_custom_page'},
        {name: 'sellPrice', element : '#OG_ForFindPrdDetailInfo #product_prc_sell_page'},
        {name: 'promoPrice', element : '#OG_ForFindPrdDetailInfo #product_prc_promo_page'},
    ], // name : (example) + Price, value : 기준점이 될 요소 / (example) 부분 item list의 name값과 동일해야 합니다. & data-prc가 필요합니다.
    __OG_DEFAULT_VALUE_PRC_PAGE_PRINT_ELEMENT : [
        '.OG_prc_infoBox',
    ], // page 기준으로 출력하는 경우 출력해야 되는 요소 기준점
    __OG_DEFAULT_VALUE_PRC_CALC_STANDARD : [
        {oriEl: 'sellPrice', finEl: 'promoPrice'},
        {oriEl: 'customPrice', finEl: 'sellPrice'},
    ], //계산 기준 (순차실행이므로 각 쇼핑몰 계산 우선순위 맞춰서 배열에 넣어주세요)
    __OG_DEFAULT_VALUE_PRC_CALC_DECIMAL_SET : function(ori, fin){
        return Math.ceil(((ori - fin) / ori) * 100);
    }, //할인율 계산식 입력하시면 됩니다
    calc : function(el){
        if(OGbasePrdInfoCall.__OG_DEFAULT_VALUE_PRC_CALC_USE){
            if(! el){
                OGbasePrdInfoCall.__OG_DEFAULT_VALUE_PRC_PAGE_PRINT_ELEMENT.forEach(function(el,idx){
                    var el = OG$(el);
                    if(el.length > 0){
                        OGbasePrdInfoCall.__OG_DEFAULT_VALUE_PRC_PAGE_LIST.forEach(function(e,i){
                            //모바일 환경 오류로 인한 수정
                            if(OG$(e.element).attr('content')){
                                if(OG$(e.element).attr('content').indexOf('(') > -1){
                                    OG$(e.element).attr('content', OG$(e.element).attr('content').split('(')[0]);
                                    OG$(e.element).attr('data-prc',OG$(e.element).attr('content').split('(')[0] );
                                };
                            };
                            el[e.name] = (OG$(e.element).length > 0) ? OG$(e.element).attr('data-prc') : 0;
                            if(el[e.name]){
                                el[e.name] = (el[e.name].indexOf('.') > -1) ? Math.floor(el[e.name]) : OG_util.onlyNumbFunc(el[e.name]);
                            };
                            OG$(e.element).attr('data-prc', el[e.name]);
                        });
                        prcCalc(el);
                    };
                });
            }else{
                OGbasePrdInfoCall.__OG_DEFAULT_VALUE_PRC_ITEM_LIST.forEach(function(e,i){
                    el[e.name] =  (el.find(e.element).length > 0) ? el.find(e.element).attr('data-prc') : 0;
                    if(el[e.name]){ el[e.name] = (el[e.name].indexOf('.') > -1) ? Math.floor(el[e.name]) : OG_util.onlyNumbFunc(el[e.name]); }
                    el.find(e.element).attr('data-prc', el[e.name]);
                });
                prcCalc(el);
            };
            function prcCalc(el){
                var calcChk = false;
                OGbasePrdInfoCall.__OG_DEFAULT_VALUE_PRC_CALC_STANDARD.some(function(v, i, arr){
                    var $ori = '.og_prc_' + v.oriEl.split('Price')[0];
                    var $fin = '.og_prc_' + v.finEl.split('Price')[0];
                    //요소가 모두 있는지, 0은 아닌지, 최종값이 기본값보다 작은지
                    if( el[v.oriEl] && el[v.finEl] &&  el[v.finEl] < el[v.oriEl] ){
                        var discountRatio = OGbasePrdInfoCall.__OG_DEFAULT_VALUE_PRC_CALC_DECIMAL_SET(el[v.oriEl], el[v.finEl]);
                        el.find('.og_prc_item .desc:not('+ $ori +'):not('+ $fin +')').text('');
                        el.find('.og_prc_item .desc:not('+ $ori +'):not('+ $fin +')').closest('.og_prc_item').addClass('displaynone');
                        el.find($ori).text(OG_util.comma(el[v.oriEl]));
                        el.find($fin).text(OG_util.comma(el[v.finEl]));
                        el.find($ori).closest('.og_prc_item').addClass('discount').removeClass('displaynone');
                        el.find($fin).closest('.og_prc_item').removeClass('displaynone');
                                             el.find($fin).closest('.price_wrap').prepend('<li class="discount_ratio og_prc_item"><span class="desc">'+discountRatio+'%</span></li>');
                        
                        calcChk = true;
                        return true; //가격 계산되면 그만돌림
                    };
                });
                if(! calcChk){
                    el.find('.og_prc_item .desc:not(.og_prc_sell)').text('');
                    el.find('.og_prc_item .desc:not(.og_prc_sell)').closest('.og_prc_item').addClass('displaynone');
                    el.find('.og_prc_sell').text(OG_util.comma(el['sellPrice']));
                    el.find('.og_prc_sell').closest('.og_prc_item').removeClass('displaynone');
                };
            };
        }else{
            console.log('이 함수를 사용하려면 변수값을 변경하세요.');
        };
    },
    iconChange : function(el){
        /**
         * 상품 아이콘 변경 / OG_promotion_icons 요소 필요
         */
        if(! el){
            el = OG$('body');
        }
        el.find('.OG_promotion_icons img').each(function(){
            var $icon = OG$(this);
            if($icon.css('display') != 'none'){
                var src = $icon.attr('src');
                //아이콘 출력 오류 시 제거
                if($icon.hasClass('displaynone') == false){
                    var img = new Image();
                    img.onerror = function() {
                        $icon.remove();
                    };
                    img.src = src;
                };
                var replaceTxt;
                OG_ICONS_CUSTOM.forEach(function(e,i){
                    if(src.indexOf(e.src) > -1){
                        $icon.after('<span class="icon_txt" data-type="'+ e.replaceTxt +'">'+ e.replaceTxt +'</span>');
                        $icon.addClass('displaynone');
                    };
                });
            };
        });
    },
    basketConfirmChk : function(el){
        if(typeof el === 'undefined'){
            el = OG$('[onClick*="/exec/"][onClick*="submit(2"]'); //장바구니 버튼
            let onClickList = el.attr('onClick');
            el.attr('onClick', 'basketConfirmShow(); ' + onClickList);
        }else{
            let basketButtonActionEl = el.find('.ec-admin-icon');
            let basketButtonEvent = basketButtonActionEl.attr('onClick');
            if(basketButtonEvent){
                if(basketButtonEvent.indexOf('CAPP_SHOP_NEW_PRODUCT_OPTIONSELECT') > -1){
                    basketButtonActionEl.closest('[onclick*="basketConfirmShow"]').removeAttr('onClick');
                };
            };
        };
    },
};





/**
 * mcustomScrollbar
 * 스크롤 위치가 잘못 붙는 오류 때문에 onInit/onBeforeUpdate/onScrollStart 이벤트에서 수정
 */
var OGmcustomScrollbar = OGmcustomScrollbar || function() {
    $(".og_mcustomScrollbar").each(function () {
        let e = $(this);
        try {
            0 == e.hasClass("mCustomScrollbar") && e.mCustomScrollbar({
                axis: "y",
                theme: "minimal-dark",
                alwaysShowScrollbar: 0,
                mouseWheel:{ preventDefault: false },
                callbacks: {
                    onInit:function(){
                        let $scrollBox = e.find(".mCustomScrollBox");
                        let $scrollContent = e.find(".mCSB_container");
                        let gap = Math.abs($scrollBox.outerHeight() - $scrollContent.outerHeight());
                        (gap < 10) ? e.find(".mCSB_scrollTools").addClass("layout_hidden") : e.find(".mCSB_scrollTools").removeClass("layout_hidden");
                    },
                    onBeforeUpdate: function () {
                        let $scrollBox = e.find(".mCustomScrollBox");
                        let $scrollContent = e.find(".mCSB_container");
                        let gap = Math.abs($scrollBox.outerHeight() - $scrollContent.outerHeight());
                        (gap < 10) ? e.find(".mCSB_scrollTools").addClass("layout_hidden") : e.find(".mCSB_scrollTools").removeClass("layout_hidden");
                    },
                    onScrollStart: function () {
                        let $scrollBox = e.find(".mCustomScrollBox");
                        let $scrollContent = e.find(".mCSB_container");
                        let gap = Math.abs($scrollBox.outerHeight() - $scrollContent.outerHeight());
                        (gap < 10) ? e.find(".mCSB_scrollTools").addClass("layout_hidden") : e.find(".mCSB_scrollTools").removeClass("layout_hidden");
                    }
                }
            });
        } catch (err) {
            console.log(err);
            OG$ = window.IV$ = jQuery.noConflict(true);
        };
    });
};

/**
 * 커스텀 셀렉트 생성
 */
var OG_optionCustomUtil = OG_optionCustomUtil || {
    find: function ($select) {
        /**
         * 상품 셀렉트일때는 초기 옵션값 텍스트 변경
         */
        if($select[0].tagName == 'SELECT' && $select.attr('data-ogcustom-input') === 'product'){
            var firstOption = $select.find('option:first-child');
            var requiredChk = (firstOption.text().indexOf('필수') > -1) ? true : false;
            var firstOptionTxt = '';
            if(requiredChk){
                firstOptionTxt += OG_commonCustom.__OG_DEFAULT_VALUE_OPTION_REQUIRED_FIXED_TXT;
            }else{
                firstOptionTxt += OG_commonCustom.__OG_DEFAULT_VALUE_OPTION_OPTIONAL_FIXED_TXT;
            };
            firstOptionTxt += ' ' + OG_commonCustom.__OG_DEFAULT_VALUE_OPTION_DEFAULT_FIXED_TXT;
            firstOption.text(firstOptionTxt);
        };
        OG_optionCustomUtil.make($select);
        OG_optionCustomUtil.append($select);
    },
    update : function($select, result){
        var $customSelect = $select.prev('.og_data_connect');
        var dataConnectResult = $customSelect.attr('data-result');
        //본래 select에 변경이 발생했을때
        if($select.val() !== $customSelect.attr('data-selected')){
            var dataVal = $select.val();
            if(dataVal === ''){
                dataVal = '*';
            };
            let $dataOption = $customSelect.find('[data-value="'+ dataVal +'"]');
            var dataText = $dataOption.html();
            $customSelect.find('.og_data_view').html(dataText);
            $customSelect.attr('data-selected', dataVal);
            $dataOption.addClass('selected');
            $customSelect.removeClass('on');
            $customSelect.find('[data-value]').not($dataOption).removeClass('selected');
            if (dataConnectResult == 'button') {
                $customSelect.find('.og_data_select').slideUp();
            };
            let disbledChk = (typeof $select.attr('disabled') === 'undefined') ? false : $select.attr('disabled');
            if(disbledChk === 'disabled'){
                $customSelect.attr('data-disabled','disabled');
            }else{
                $customSelect.removeAttr('data-disabled');
            };
        };
        if(result === true){
            OG_optionCustomUtil.append($select);
        };
    },
    make: function ($select) {
        var $customSelect = $select.prev('.og_data_connect');
        if ($customSelect.length == 0) {
            switch (OG_DEVICE_CHK) {
                case 'pc':
                    var customProductSelect = EC$('<div class="og_data_connect data-done" data-ori="" data-result="select" data-selected=""><h4 class="og_data_view"></h4><ul class="og_data_select"></ul></div>');
                    break;
                case 'mobile':
                    var customProductSelect = EC$('<div class="og_data_connect data-done" data-ori="" data-result="button" data-selected=""><h4 class="og_data_view"></h4><ul class="og_data_select"></ul></div>');
                    break;
                default:
                    console.log('error');
                    break;
            };
            $select.addClass('layout_hidden');
            $select.before(customProductSelect);
            $customSelect = $select.prev('.og_data_connect');
            if ($select.hasClass('displaynone')) {
                $customSelect.addClass('displaynone');
            };
        };
        $customSelect.find('.og_data_view').off().on('click', function () {
            var $this = EC$(this);
            var $dataConnect = $this.closest('.og_data_connect');
            var dataConnectResult = $dataConnect.data('revealtype');
            var classname = '.og_data_connect';
            if($dataConnect.attr('data-disabled') == 'disabled'){
                return false;
            }else{
                if (dataConnectResult == 'select') {
                    if ($dataConnect.hasClass('on')) {
                        $dataConnect.removeClass('on');
                    } else {
                        $dataConnect.addClass('on');
                        OG_util.targetOutCloseFunc($dataConnect);
                    };
                    EC$(classname).not($dataConnect).removeClass('on');
                } else if (dataConnectResult == 'toggle') {
                    if ($dataConnect.hasClass('on')) {
                        $dataConnect.removeClass('on');
                        $dataConnect.find('.og_data_select').slideUp();
                    } else {
                        $dataConnect.addClass('on');
                        $dataConnect.find('.og_data_select').slideDown();
                    };
                    EC$(classname).not($dataConnect).removeClass('on');
                    EC$(classname).not($dataConnect).find('.og_data_select').slideUp();
                };
            };
        });
    },
    append: function ($select) {
        if ($select) {
            var $customSelect = $select.prev('.og_data_connect');
            var isProductSelect = ($select.attr('data-ogcustom-input') === 'product') ? true : false; //상품 select일 경우 일부 추가됨
            if ($customSelect.length > 0) {
                if (!$select.hasClass('displaynone')) {
                    var required = $select.attr('required');
                    required = (required) ? OG_commonCustom.__OG_DEFAULT_VALUE_OPTION_REQUIRED_FIXED_TXT : OG_commonCustom.__OG_DEFAULT_VALUE_OPTION_OPTIONAL_FIXED_TXT;
                    $customSelect.find('.og_data_select').remove();
                    $customSelect.append('<ul class="og_data_select"></ul>');
                    var selectVal = $select.val();
                    $select.find('option').each(function () {
                        var $option = EC$(this);
                        var value = $option.val();
                        var disabled = ($option.attr('disabled')) ? 'disabled' : '';
                        if (value != '*' && value != '**' && value !== '') {
                            var text = $option.text();
                            var textSplit1,
                                textSplit2;
                            let soldOutChk = false;
                            if(text.indexOf('[품절]') > -1){
                                soldOutChk = true;
                            };
                            if (text.indexOf(OG_commonCustom.__OG_DEFAULT_VALUE_DETAIL_SELECT_CUSTOM_SUB_TXT_SIGN) > -1) {
                                var chk = text.indexOf(OG_commonCustom.__OG_DEFAULT_VALUE_DETAIL_SELECT_CUSTOM_SUB_TXT_SIGN);
                                textSplit1 = text.slice(0, chk).trim();
                                if(soldOutChk){
                                    textSplit2 = text.slice(chk + 1).split('[품절]')[0].trim();
                                    text = '<strong>' + textSplit1 + '</strong><span>' + textSplit2 + '<span class="soldOut">'+ OG_commonCustom.__OG_DEFAULT_VALUE_OPTION_SOLDOUT_FIXED_TXT +'</span></span>';
                                }else{
                                    textSplit2 = text.slice(chk + 1).trim();
                                    text = '<strong>' + textSplit1 + '</strong><span>' + textSplit2 + '</span>';
                                };
                            } else {
                                if(soldOutChk){
                                    text = text.split('[품절]')[0].trim();
                                    text = '<strong>' + text + '<span class="soldOut">'+ OG_commonCustom.__OG_DEFAULT_VALUE_OPTION_SOLDOUT_FIXED_TXT +'</span></strong>';
                                }else{
                                    text = '<strong>' + text + '</strong>';
                                };
                            };
                            var $li = OG$('<li data-value="' + value + '" class="og_data_option">' + text + '</li>');
                            if(disabled !== ''){
                                $li.attr('data-disabled', 'disabled');
                            }
                            if (value == selectVal) {
                                $customSelect.find('.og_data_view').html(text);
                                $li.addClass('selected');
                                $customSelect.attr('data-selected', value);
                            };
                            $customSelect.find('.og_data_select').append($li);
                        };
                    });
                    if(isProductSelect){
                        var defaultTxt = required + ' ' + OG_commonCustom.__OG_DEFAULT_VALUE_OPTION_DEFAULT_FIXED_TXT;
                        $customSelect.find('.og_data_select').prepend('<li data-value="*" class="og_data_option">' + defaultTxt + '</li>');
                    }else{
                        $customSelect.find('.og_data_select').prepend('<li data-value="*" class="og_data_option">' + $select.find('option').eq(0).text() + '</li>');
                    };
                    let disbledChk = (typeof $select.attr('disabled') === 'undefined') ? false : $select.attr('disabled');
                    if ($customSelect.find('.og_data_option').length == 1 || disbledChk == 'disabled') {
                        $customSelect.attr('data-disabled', 'disabled');
                    } else {
                        $customSelect.removeAttr('data-disabled');
                    };
                    if (selectVal == '*' || selectVal == '') {
                        if(isProductSelect){
                            $customSelect.find('.og_data_view').text(defaultTxt);
                            $customSelect.find('.og_data_select [data-value="*"]').addClass('selected');
                            $customSelect.attr('data-selected', '*');
                        }else{
                            $customSelect.find('.og_data_view').text($select.find('option').eq(0).text());
                            $customSelect.find('.og_data_select [data-value="*"]').addClass('selected');
                            $customSelect.attr('data-selected', '*');
                        };
                    };
                    var dataConnectResult = $customSelect.attr('data-result');
                    if (dataConnectResult == 'select') {
                        $customSelect.attr('data-revealType', 'select');
                        try {
                            $($customSelect).find('.og_data_select').mCustomScrollbar({
                                axis: "y",
                                theme: "minimal-dark",
                                alwaysShowScrollbar: 0,
                                callbacks: {
                                    onInit:function(){
                                        let $scrollBox = $customSelect.find(".mCustomScrollBox");
                                        let $scrollContent = $customSelect.find(".mCSB_container");
                                        let gap = Math.abs($scrollBox.outerHeight() - $scrollContent.outerHeight());
                                        (gap < 10) ? $customSelect.find(".mCSB_scrollTools").addClass("layout_hidden") : $customSelect.find(".mCSB_scrollTools").removeClass("layout_hidden");
                                    },
                                    onBeforeUpdate: function () {
                                        let $scrollBox = $customSelect.find(".mCustomScrollBox");
                                        let $scrollContent = $customSelect.find(".mCSB_container");
                                        let gap = Math.abs($scrollBox.outerHeight() - $scrollContent.outerHeight());
                                        (gap < 10) ? $customSelect.find(".mCSB_scrollTools").addClass("layout_hidden") : $customSelect.find(".mCSB_scrollTools").removeClass("layout_hidden");
                                    },
                                    onScrollStart: function () {
                                        let $scrollBox = $customSelect.find(".mCustomScrollBox");
                                        let $scrollContent = $customSelect.find(".mCSB_container");
                                        let gap = Math.abs($scrollBox.outerHeight() - $scrollContent.outerHeight());
                                        (gap < 10) ? $customSelect.find(".mCSB_scrollTools").addClass("layout_hidden") : $customSelect.find(".mCSB_scrollTools").removeClass("layout_hidden");
                                    }
                                }
                            });
                        }catch(e) {
                            console.log(e);
                        }
                    } else if (dataConnectResult == 'button') {
                        $customSelect.attr('data-revealType', 'toggle');
                    };
                    $customSelect.find('.og_data_option').off().on('click', function () {
                        var $dataOption = EC$(this);
                        var dataVal = $dataOption.attr('data-value');
                        if(dataVal === '*' && $select.find('option[value="' + dataVal + '"]').length === 0){
                            dataVal = '';
                        };
                        var dataText = $dataOption.html();
                        if (!$dataOption.hasClass('selected')) {
                            $select.find('option[value="' + dataVal + '"]').prop('checked', true);
                            $select.val(dataVal).trigger('change');
                            $customSelect.find('.og_data_view').html(dataText);
                        };
                        $customSelect.attr('data-selected', dataVal);
                        $dataOption.addClass('selected');
                        $customSelect.removeClass('on');
                        $customSelect.find('[data-value]').not($dataOption).removeClass('selected');
                        if (dataConnectResult == 'button') {
                            $customSelect.find('.og_data_select').slideUp();
                        };
                    });
                    EC$($select).on('change',function(){
                        let value = $select.val();
                        if(value == '*' || value == '**'){
                            let $defaultOption = $customSelect.find('[data-value="*"]');
                            $customSelect.find('.og_data_view').html($defaultOption.html());
                            $customSelect.attr('data-selected', '*');
                            $defaultOption.addClass('selected');
                            $customSelect.removeClass('on');
                            $customSelect.find('[data-value]').not($defaultOption).removeClass('selected');
                            if (dataConnectResult == 'button') {
                                $customSelect.find('.og_data_select').slideUp();
                            };
                        }
                    });
                }
            }
        }
    },
};




/**
 * 상품별 실행 함수
 */
var OGPrdItemInfoCall = OGPrdItemInfoCall || {
    __OG_DEFAULT_VALUE_FUNCTION_USE : false, //상품 영역 함수 전체 사용 여부
    __OG_DEFAULT_VALUE_PRC_CALC_USE : false, //상품 영역 할인율 계산 사용 여부
    __OG_DEFAULT_VALUE_ICON_CHANGE_USE : false, //상품 영역 아이콘 변경 사용 여부
    __OG_DEFAULT_VALUE_CUSTOM_FUNCTION_USE : false, //상품 영역 커스텀 함수 사용 여부
    __OG_DEFAULT_VALUE_BASKETCONFIRM_FUNCTION_USE : false, //상품 영역 장바구니 확인창 수정 함수 사용 여부
    init : function(callback, el){
        if(OGPrdItemInfoCall.__OG_DEFAULT_VALUE_FUNCTION_USE){
            if (arguments.length == 0) {
                callback = null;
                el = null;
            }else if(arguments.length == 1 && typeof arguments[0] !== 'function'){
                el = arguments[0];
                callback = null;
            }else{
                el = null;
            }
            if(el === null){
                el = OG$('.og_base_product [id^="anchorBoxId_"]');
            };
            el.each(function(){
                var $this = OG$(this);
                if(! $this.hasClass('done')){
                    // * ============================ 상품 가격 ============================ * //
                    if(OGPrdItemInfoCall.__OG_DEFAULT_VALUE_PRC_CALC_USE){ OGbasePrdInfoCall.calc($this); }
                    // * ============================ 상품 가격 ============================ * //
                    // * ===================== 프로모션 아이콘 ======================= * //
                    if(OGPrdItemInfoCall.__OG_DEFAULT_VALUE_ICON_CHANGE_USE){ OGbasePrdInfoCall.iconChange($this); }
                    // * ===================== 프로모션 아이콘 ======================= * //
                    // * ===================== 추가 커스텀 함수 ======================= * //
                    if(OGPrdItemInfoCall.__OG_DEFAULT_VALUE_CUSTOM_FUNCTION_USE){
                        if(typeof basePrdItemInfoCallCustom === 'function'){
                            basePrdItemInfoCallCustom($this);
                        }
                        if(callback !== null){ callback($this); }
                    }
                    // * ===================== 추가 커스텀 함수 ======================= * //
                    // * ============================ 상품 담기 옵션창 ============================ * //
                    if(OGPrdItemInfoCall.__OG_DEFAULT_VALUE_BASKETCONFIRM_FUNCTION_USE){
                        OGbasePrdInfoCall.basketConfirmChk($this);
                    }
                    // * ============================ 상품 담기 옵션창 ============================ * //
                    $this.addClass('done');
                };
            });
        }else{
            console.log('이 함수를 사용하려면 변수값을 변경하세요.');
        };
    },
};

/**
 * 페이지별 실행 함수
 */
var OGPrdPageInfoCall = OGPrdPageInfoCall || {
    __OG_DEFAULT_VALUE_FUNCTION_USE : false, //페이지 기준 함수 전체 사용 여부
    __OG_DEFAULT_VALUE_PRC_CALC_USE : false, //페이지 기준 할인율 계산 사용 여부
    __OG_DEFAULT_VALUE_ICON_CHANGE_USE : false, //페이지 기준 아이콘 변경 사용 여부
    __OG_DEFAULT_VALUE_CUSTOM_FUNCTION_USE : false, //페이지 기준 커스텀 함수 사용 여부
    __OG_DEFAULT_VALUE_BASKETCONFIRM_FUNCTION_USE : false, //페이지 기준 장바구니 확인창 수정 함수 사용 여부
    init : function(callback){
        if(OGPrdPageInfoCall.__OG_DEFAULT_VALUE_FUNCTION_USE){
            if (arguments.length == 0) {
                callback = null;
            }
            // * ============================ 상품 가격 ============================ * //
            if(OGPrdItemInfoCall.__OG_DEFAULT_VALUE_PRC_CALC_USE){ OGbasePrdInfoCall.calc();}
            // * ============================ 상품 가격 ============================ * //
            // * ===================== 프로모션 아이콘 ======================= * //
            if(OGPrdItemInfoCall.__OG_DEFAULT_VALUE_ICON_CHANGE_USE){ OGbasePrdInfoCall.iconChange(); }
            // * ===================== 프로모션 아이콘 ======================= * //
            // * ===================== 추가 커스텀 함수 ======================= * //
            if(OGPrdItemInfoCall.__OG_DEFAULT_VALUE_CUSTOM_FUNCTION_USE){
                if(typeof basePrdPageInfoCallCustom === 'function'){
                    basePrdPageInfoCallCustom();
                }
                if(callback !== null){
                    callback();
                }
            }
            // * ===================== 추가 커스텀 함수 ======================= * //
            // * ============================ 상품 담기 옵션창 ============================ * //
            if(OGPrdPageInfoCall.__OG_DEFAULT_VALUE_BASKETCONFIRM_FUNCTION_USE){
                OGbasePrdInfoCall.basketConfirmChk();
            }
            // * ============================ 상품 담기 옵션창 ============================ * //
        }else{
            console.log('이 함수를 사용하려면 변수값을 변경하세요.');
        };
    },
};






var OG_FRONT_XANS_INTERPRETER = (function() {
    // 변수 정규표현식 (카페24 기존)
    var XANS_VAR_FULL_NAME_REGEXP = '\\{\\$([a-z0-9_\\.]+)(?:[\\s]*[\\|][\\s]*([a-z0-9]+)[\\s]*[:]?((?:[^\\{\\}]+)*))?\\}';
    // 템플릿에서 모든 변수를 찾기 위한 정규식 (카페24 기존)
    var regexpFindSDEVarFullName = new RegExp(XANS_VAR_FULL_NAME_REGEXP, 'ig');
    // '{$var_name|display}'과 같은 문자열에서 변수명과 모디파이어를 분리하기 위한 정규식 (카페24 기존)
    var regexpSDEVarFullname = new RegExp('^' + XANS_VAR_FULL_NAME_REGEXP + '$', 'i');
    //{$var|display:{$var}}과 같은 형식의 경우 정상 처리 되지 않아 아래와 같이 추가
    var OG_VAR_FULL_NAME_REGEXP = '\\{\\$([^\\}]*)\[\}]*';
    OG_VAR_FULL_NAME_REGEXP = new RegExp(OG_VAR_FULL_NAME_REGEXP, 'ig');
    /**
     * 모디파이어
     * 카페24 기본의 경우 display / numberformat / striptag 외에 구현되지 않아 발생하는 오류 수정 위해 추가
     * 추가된 모디파이어 : cover, replace, cut, date, timetodate, imgconv, strconv, lower, upper, nl2br
     * display : 변수가 존재하면 '', 존재하지 않으면 displaynone 리턴 / 사용법 : {$var|display} or {$var|display:{$var}}
     * numberformat : 해당하는 변수를 3자리마다 찍어서 리턴 / 사용법 : {$var|numberformat}
     * striptag : 태그 제거 / 사용법 : {$var|striptag}
     * cover : 변수 감싸기 / 사용법 : {$var|cover:<div>,</div>}
     * replace : 변수 치환 / 사용법 : {$var|replace:변수,변수치환}
     * cut : 특정 글자 수까지 자르기 / 사용법 : {$var|cut:10,...} --> 10글자까지 자르고 맨 끝에 ... 텍스트 붙임
     * date : 날짜 포맷 바꾸기 / 사용법 : {$var|date:Y-m-d h:m:s}
     * timetodate : date와 다른 부분 있는지 확인중
     * imgconv : 이미지 주소 대체하기 / 사용법 : {$var|/OG/common/test.png, /OG/common/test2.png} --> 쉼표로 두 개 연결할 경우 첫번째는 값 있을때 img src값, 두번째는 없을 경우 img src값. 두 번째 값을 입력하지 않거나 비워두면 빈값으로 출력
     * strconv : 텍스트 대체하기 / 사용법 : {$var|test,test2} --> 쉼표로 두 개 연결할 경우 첫번째는 값 있을때 텍스트값, 두번째는 없을 경우 텍스트값. 두 번째 값을 입력하지 않거나 비워두면 빈값으로 출력
     * nl2br : 확인중
     */
    var aSDEModifier = {
        display: function(sVar){
            if (sVar) {
                return '';
            } else {
                return 'displaynone';
            }
        },
        numberformat: function(sVar){
            if (isFinite(sVar)) {
                // 3자리씩 ,로 끊어서 리턴
                var sNumber = String(parseInt(sVar));
                var regexp = /^(-?[0-9]+)([0-9]{3})($|\.|,)/;
                while (regexp.test(sNumber)) {
                    sNumber = sNumber.replace(regexp, "$1,$2$3");
                }
                return sNumber;
            } else {
                return '';
            }
        },
        striptag: function(sVar){
            return sVar.replace(/(<([^>]+)>)/ig, '');
        },
        cover: function(sVar, el){
            var first = el.split(',')[0];
            var last = el.split(',')[1];
            return (first+sVar+last);
        },
        replace : function(sVar, content){
            var ori = content.split(',')[0];
            var replace = content.split(',')[1];
            ori = new RegExp(ori, 'g');
            return sVar.replace(ori,replace);
        },
        cut : function(sVar, content){
            if(typeof sVar !== 'undefined'){
                if(sVar){
                    var length = content.split(',')[0];
                    var lastTxt = content.split(',')[1];
                    var fullTxt = sVar.slice(0,length) + lastTxt;
                    return fullTxt;
                }else{
                    return '';
                }
            }else{
                return '';
            }
        },
        date :function(sVar, content){
            if(typeof sVar === 'string'){
                sVar = new Date(sVar);
                if(String(sVar) == 'Invalid Date'){
                    return '';
                }
            }else{
                return '';
            }
            var date = sVar;
            var year = String(date.getFullYear());
            var month = ('0' + (date.getMonth() + 1)).slice(-2);
            var day = ('0' + date.getDate()).slice(-2);
            var hours = ('0' + date.getHours()).slice(-2);
            var minutes = ('0' + date.getMinutes()).slice(-2);
            var seconds = ('0' + date.getSeconds()).slice(-2);
            date = [year,month,day,hours,minutes,seconds];
            var format = content;
            var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\s]/gi; //특수문자 + 공백
            var chk = format.split(reg);
            chk = chk.reduce(function(acc,e,i,arr){
                if(e == ''){
                    return acc;
                }else{
                    acc.push(e);
                    return acc;
                }
            },[]).reduce(function(acc,e,i,arr){
                format = format.replace(e,date[i]);
                acc = format;
                return acc;
            },'');
            return chk;
        },
        timetodate : function(sVar, content){
            if(typeof sVar === 'string'){
                sVar = new Date(sVar);
                if(String(sVar) == 'Invalid Date'){
                    return '';
                }
            }else{
                return '';
            }
            var date = sVar;
            var year = String(date.getFullYear());
            var month = ('0' + (date.getMonth() + 1)).slice(-2);
            var day = ('0' + date.getDate()).slice(-2);
            var hours = ('0' + date.getHours()).slice(-2);
            var minutes = ('0' + date.getMinutes()).slice(-2);
            var seconds = ('0' + date.getSeconds()).slice(-2);
            date = [year,month,day,hours,minutes,seconds];
            var format = content;
            var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\s]/gi; //특수문자 + 공백
            var chk = format.split(reg);
            chk = chk.reduce(function(acc,e,i,arr){
                if(e == ''){
                    return acc;
                }else{
                    acc.push(e);
                    return acc;
                }
            },[]).reduce(function(acc,e,i,arr){
                format = format.replace(e,date[i]);
                acc = format;
                return acc;
            },'');
            return chk;
        },
        imgconv : function(sVar, content){
            if(content.indexOf(',') > -1){
                var url1 = content.split(',')[0];
                var url2 = content.split(',')[1];
            }else{
                var url1 = content;
                var url2 = '';
            }
            var $tag = $(sVar);
            if(typeof $tag[0] !== 'undefined'){
                if($tag[0].nodeName == 'IMG'){
                    $tag = $tag.attr('src', url1);
                    return String($tag[0].outerHTML);
                }else{
                    $tag = $('<img src="'+ url2 +'" />');
                    return String($tag[0].outerHTML);
                }
            }else{
                $tag = $('<img src="'+ url2 +'" />');
                return String($tag[0].outerHTML);
            }
        },
        strconv : function(sVar, content){
            if(content.indexOf(',') > -1){
                var txt1 = content.split(',')[0];
                var txt2 = content.split(',')[1];
            }else{
                var txt1 = content;
                var txt2 = '';
            }
            if(sVar){
                return txt1;
            }else{
                return txt2;
            }
        },
        lower : function(sVar){
            if(sVar){
                return sVar.toLowerCase();
            }else{
                return sVar;
            }
        },
        upper : function(sVar){
            if(sVar){
                return sVar.toUpperCase();
            }else{
                return sVar;
            }
        },
        nl2br : function(sVar){
            var reg = /(\r\n|\n|\r)/gm;
            return sVar.replace(reg,'<br />').trim();
        },
    };
    /**
     * 모듈 이름 리턴 ex) Imagestyle / Listitem
     */
    function ucfirst(sString){
        if (typeof(sString) !== 'string') {
            return '';
        }
        return sString.substring(0, 1).toUpperCase() + sString.substring(1).toLowerCase();
    }
    /**
     * 템플릿의 변수들을 실제 데이터 변수값으로 넣어주는 함수
     * @param string sTemplate 템플릿 (HTML)
     * @param array aVars 변수 리스트
     * @return string 완성된 HTML
     * 재고현황보기 아이콘($option_preview_icon)의 경우 해당 함수때문에 더보기 클릭 시 출력되는 상품에서 노출되지 않는 것이 아니라 원래부터 변수 리스트에 존재X
     */
    function convertHtmlVars(sTemplate, aVars){
        return sTemplate.replace(OG_VAR_FULL_NAME_REGEXP, function(sVarFullName) {
            var varName;
            var modifire;
            var modifireContent;
            var modifireTxtIndex = sVarFullName.indexOf('|');
            var modifireContentTxtIndex = sVarFullName.indexOf(':');
            if(modifireTxtIndex > -1){
                if(modifireContentTxtIndex > -1){
                    varName = sVarFullName.slice(0,modifireTxtIndex) + '}';
                    var test = sVarFullName.slice((modifireTxtIndex+1));
                    modifire = test.split(':')[0];
                    modifireContentTxtIndex = test.indexOf(':');
                    modifireContent = test.slice((modifireContentTxtIndex+1));
                    if(modifire.indexOf('}') > -1){
                        modifire = modifire.replace('}','');
                    }
                    if(modifireContent.indexOf('}') > -1){
                        modifireContent = modifireContent.replace(/}/g,'').trim();
                    }
                    if(modifireContent.indexOf('{') > -1){
                        modifireContent = modifireContent.replace(/{/g,'').trim();
                    }
                }else{
                    modifire = sVarFullName.split('|')[1];
                    if(modifire.indexOf('}') > -1){
                        modifire = modifire.replace('}','').trim();
                    }
                    modifireContent = null;
                    varName = sVarFullName.split('|')[0] + '}';
                }
            }else{
                varName = sVarFullName;
                modifire = null;
                modifireContent = null;
            }
            if(modifireContent != null){
                if(modifireContent.indexOf('$') > -1){
                    modifireContent = modifireContent.replace(/\$/g,'').trim();
                }
            }
            varName = varName.match(regexpSDEVarFullname)[1];
            if(typeof aVars[varName] !== 'undefined'){
                var returnContent;
                if(modifire !== null){
                    if(modifireContent == null){
                        returnContent = aSDEModifier[modifire](aVars[varName]);
                    }else{
                        returnContent = aSDEModifier[modifire](aVars[varName], modifireContent);
                    }
                }else{
                    if(aVars[varName] != null){
                        returnContent = aVars[varName];
                    }else{
                        returnContent = '';
                    }
                }
                return returnContent;
            }else{
                return '';
            }
        });
    }
    /**
     * XANS 템플릿에서 변수를 반영하여 리턴합니다.
     * @param string sTemplate 템플릿 (HTML)
     * @param array aVars 변수 리스트
     * @return string 완성된 HTML
     * 재고현황보기 아이콘($option_preview_icon)의 경우 해당 함수때문에 더보기 클릭 시 출력되는 상품에서 노출되지 않는 것이 아니라 원래부터 변수 리스트에 존재X
     */
    function fetch(sTemplate, aVars){
        var aHtml = sTemplate.split('<!--#-->');
        var sHtml = '';
        EC$(aHtml).each(function(iIndex, sModuleHtml) {
            if (iIndex < 1 || (iIndex % 2) !== 1) {
                sHtml += convertHtmlVars(sModuleHtml, aVars);
            } else {
                var oObj = EC$(sModuleHtml);
                var sChildNode = EC$('<div>').append(oObj.children().first().clone()).html();
                if (/<!--\$--><!--@-->([\s\S]+)<!--\$-->/gm.test(sModuleHtml) === true) {
                    sChildNode = /<!--\$--><!--@-->([\s\S]+)<!--\$-->/gm.exec(sModuleHtml)[1].split('<!--@-->')[0];
                }
                var sModuleClass = EC$(oObj).attr('class');
                var sModuleName = ucfirst(sModuleClass.match(/xans-product-([^- ]+)/)[1]);
                if (typeof(aVars['@' + sModuleName]) === 'object') {
                    var s = '';
                    EC$(aVars['@' + sModuleName]).each(function(i, aData) {
                        s += convertHtmlVars(sChildNode, aData);
                    });
                    if (s !== '') {
                        sHtml += EC$('<div>').append(oObj.html(s).clone()).html();
                    }
                }
            }
        });
        return sHtml;
    }
    return {
        fetch: fetch
    };
})();


//상품 데이터 동적으로 붙이기
var OGPrdDynamicCall= OGPrdDynamicCall || {
    __OG_DEFAULT_VALUE_FUNCTION_USE : true, //이 함수 사용할 것인지
    __OG_DEFAULT_VALUE_AJAX_URL : ['/exec/front/Product/ApiProductNormal', '/exec/front/Product/ApiProductMain'], /* data 호출 url */
    __OG_DEFAULT_VALUE_CONDITION_ARRAY : [],
    __OG_DEFAULT_VALUE_OGSETTING_CONDITION_ARRAY : [],
    __OG_DEFAULT_VALUE_PRDLIST_AJAX_CALL_CUSTOM_DATA : {},
    __OG_DEFAULT_VALUE_AJAX_COUNT : 200, //max 200
    __OG_DEFAULT_VALUE_MOREBUTTON_TEXT : '+ 더보기',
    __OG_DEFAULT_VALUE_CACHE_ITEM_APPEND_CHK_FLAG : null,
    __OG_DEFAULT_VALUE_CUSTOM_FUNCTION : null, //custom function
    /**
     * @ no : 동적상품영역 고유번호
     * @ $basePrdList : 동적상품영역 기준 최상위 엘리먼트 .base_prd_list
     * @ $prdList : 상품이 붙는 영역 (직계 자식으로 상품 추가됨)
     * @ basicSettingArray : 카페24 상품 관련 설정 (ajax 호출 페이지 등)
     * @ OGSettingArray : OG 커스텀 세팅 설정
     * @ _prdList_categoryList 상품분류 페이지의 일반 상품 진열 영역 > .prdItem_normalBox .base_prd_list
     */
    _prdList_categoryList : null,
    init: function(){
        OGPrdDynamicCall._prdList_categoryList = OG$('.prdItem_normalBox .base_prd_list')[0];
        /**
         * .og_base_product 마크업 기준으로 생성 (필수)
         */
        OG$('.og_base_product').each(function(idx, el){
            let $basePrdList = OG$(el);
            let no = OGPrdDynamicCall.getCondition($basePrdList); //호출 조건 세팅 no : 해당 영역 고유 번호 / false : 사용안함
            if( no !== false ){
                //해당 함수 사용 시
                if(OGPrdDynamicCall.__OG_DEFAULT_VALUE_FUNCTION_USE){
                    //상품 분류 일반 상품 진열 영역의 경우 큐레이션 동작 아닐때만 실행
                    if(el == OGPrdDynamicCall._prdList_categoryList){
                        if(OG_LOCATION_HREF.indexOf('keyword=&search_form') === -1){
                            let keyword = OG_LOCATION_HREF.indexOf('keyword=&');
                            let cateFilter = OG_LOCATION_HREF.indexOf('%3Fcate_no%3D' + OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE);
                            if(keyword > -1){
                                let newLink = OG_LOCATION_HREF;
                                if(OG_LOCATION_HREF.indexOf('keyword=&rel_keyword=&') > -1){
                                    newLink.replace('keyword=&rel_keyword=','');
                                }else{
                                    newLink = newLink.replace('keyword=&','');
                                };
                                history.replaceState(null, null, newLink);
                            };
                            let storage_OGCateInfo = sessionStorage.getItem('og_cate_info');
                            let storage_OGCateInfo2 = sessionStorage.getItem('og_cate_info2');
                            let storage_OGCateInfo3 = sessionStorage.getItem('og_cate_info3');
                            try {
                                if(typeof storage_OGCateInfo3 === 'string' && typeof storage_OGCateInfo2 !== 'undefined' && typeof storage_OGCateInfo !== 'undefined'){
                                    storage_OGCateInfo = JSON.parse(storage_OGCateInfo);
                                    storage_OGCateInfo2 =  JSON.parse(storage_OGCateInfo2);
                                    storage_OGCateInfo3 =  JSON.parse(storage_OGCateInfo3);
                                    var iNowTime = Math.floor(new Date().getTime() / 1000);
                                    var iSessionTime = 60 * 5;
                                    if(typeof storage_OGCateInfo3 === 'string' && iNowTime - Number(storage_OGCateInfo['saveTime']) < iSessionTime && storage_OGCateInfo['oriCatePage']=== window.location.href){
                                        $basePrdList.find('.prdList').html(storage_OGCateInfo3);
                                        let basicSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_CONDITION_ARRAY[no]; //카페24 기본 설정
                                        let OGSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_OGSETTING_CONDITION_ARRAY[no]; //OG 커스텀 설정
                                        OGPrdDynamicCall['__OG_DEFAULT_VALUE_PRDLIST_ALL_DATA' + no] = storage_OGCateInfo2;
                                        basicSettingArray['page'] = 3;
                                        if(storage_OGCateInfo['viewType']){
                                            OG$('.og_viewType').find('[data-view="'+ storage_OGCateInfo['viewType'] +'"]').trigger('click');
                                        };
                                        OGPrdDynamicCall.run(no, $basePrdList);
                                    }else{
                                        OGPrdDynamicCall.run(no, $basePrdList);
                                    };
                                }else{
                                    OGPrdDynamicCall.run(no, $basePrdList);
                                };
                            }
                            catch (err) {
                                console.log(err);
                                sessionStorage.removeItem('og_cate_info');
                                sessionStorage.removeItem('og_cate_info2');
                                sessionStorage.removeItem('og_cate_info3');
                                OGPrdDynamicCall.run(no, $basePrdList);
                            };
                        };
                    }
                    //나머지는 @OGuse -> yes 값이 있으면 실행
                    else{
                        OGPrdDynamicCall.run(no, $basePrdList);
                    };
                };
            };

            /**
             * 해당 함수 off되더라도 dom 변경 감지하여, 상품별로 호출해야 하는 함수가 있는 경우 실행될 수 있도록 함
             */
            if($basePrdList.find('.prdList').length > 0){
                var lastObserveFunc = function (a, b, c){
                    if (a.isIntersecting) {
                        OG$(a.target).removeClass('og_isIntersecting');
                        b.disconnect();
                        if(typeof basePrdItemInfoCallCustom !== 'undefined'){
                            OGPrdItemInfoCall.init(basePrdItemInfoCallCustom, $basePrdList.find('[id^="anchorBoxId_"]')); //상품별 실행 함수
                        }else{
                            OGPrdItemInfoCall.init(); //상품별 실행 함수
                        };
                    }
                };
                $basePrdList.find('.prdList').OG_observerFunc( function(a,b,c){
                    //자식 노드 추가될 때 실행
                    var test = $basePrdList[0].querySelectorAll('.prdList > *:not(.done)');
                    OG_util.IntersectionObserver(test, {
                        root: null,
                        threshold: [0.1],
                    }, lastObserveFunc);
                } , {
                    attributes: false,
                    childList: true, /* 자식요소만 변경 감지 */
                    subtree: false
                });
            };
        });
    },
    getCondition : function($basePrdList){
        /**
         * 주석에 입력된 내용 기반으로 조건 생성
         * @ $basePrdList : 기준으로 정보 호출
         */

            //조건 전체
        let targetHtml = String($basePrdList.html());
        let index1 = targetHtml.indexOf('<!--');
        let index2 = targetHtml.indexOf('-->');
        let condition = targetHtml.slice((index1+4), index2);
        condition = OG_util.removeBlankFunc(condition);
        let useChk = false,  //해당 기능 사용할 것인지 최종확인
            sTargetModuleName, //모듈타입
            count; //실행 체크 카운트
        if(OGPrdDynamicCall.__chkCount){ count = Number(OGPrdDynamicCall.__chkCount); } else { OGPrdDynamicCall.__chkCount = 0; count = 0; }
        //설정 obj
        let array1 = {}; //카페24 기본 설정 obj
        let array2 = {}; //OG 커스텀 설정 obj

        var sum = condition.split(/\s/gi).reduce(function (acc, v, i) {
            if(v){
                if(v != '' && v!= '\n' && v.indexOf('basket') == -1){
                    if(v.indexOf('$') > -1){
                        /**
                         * 기존 주석옵션 ($)
                         */
                        let con = v.trim(),
                            name = con.split('=')[0].replace('$',''),
                            value = con.split('=')[1];
                        if(name == 'count' || name == 'sort_method' || name == 'ec_soldout_display' || name == 'cate_no'){
                            array1[name] = value;
                        }else if(name == 'cache'){
                            array1['b_' + name] = value;
                        };
                    }else if(v.indexOf('@OG') > -1){
                        /**
                         * 커스텀 옵션 (@)
                         */
                        let con = v.trim(),
                            name = con.split('=')[0].replace('@',''),
                            value = con.split('=')[1];
                        if(name == 'OGuse' && value == 'yes'){
                            useChk = true;
                        };
                        array2[name] = value;
                    };
                };
            };
        },[]);
        if(useChk){
            OGPrdDynamicCall.__chkCount = count + 1;
            //필요한 요소이나 주석에 기록하지 않는 항목 추가
            array1['first_page'] = 1;
            array1['page'] = 1;
            array1['idx'] = count;
            let displaygroup = Number($basePrdList.siblings('.og_paginate_container').attr('data-ogdynamic-displyagroup'));  //더보기 버튼에서 가져옴
            if(displaygroup === null || displaygroup === 'undefined' || displaygroup === '' || isNaN(displaygroup)){
                array1['display_group'] = 1;
            }else{
                array1['display_group'] = displaygroup;
            };
            //상품분류 페이지 일반 상품 영역
            if($basePrdList[0] === OGPrdDynamicCall._prdList_categoryList){
                array1['cate_no'] = OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE;
                array2['OGmodule'] = 'xans-product-listnormal';
                array1['sort_method'] = (typeof array1['sort_method'] === 'undefined') ? Number(OG_util.getParameterByName(OG_LOCATION_HREF, 'sort_method')) : array1['sort_method'];
            };
            //카테고리
            if(typeof array1['cate_no'] === 'undefined' || array1['cate_no'] === 0){
                array1['cate_no'] = 1;
            };
            //정렬
            if(typeof array1['sort_method'] === 'undefined'){
                array1['sort_method'] = 0;
            };
            //모듈 타입
            if(typeof array2['OGlink'] !== 'undefined'){
                if(array2['OGlink'] === '0'){
                    array2['OGmodule'] = 'xans-product-listnormal';
                    array2['OGstorage'] = 'sStorageList_' + array1['cate_no'] + '_' +  array1['display_group'];
                    if(array1['b_cache'] === 'yes'){
                        array1['first_page'] = EC$.cookie('mobile_more_current_page_' + array1['cate_no']);
                    };
                }else if(array2['OGlink'] === '1'){
                    let moduleNumber = $basePrdList[0].classList;
                    let moduleNumberChk = function(item){ if(item.indexOf('xans-product-listmain-') > -1){ return true; } }
                    moduleNumber = OG_util.onlyNumbFunc(moduleNumberChk);
                    array2['OGmodule'] = 'xans-product-listmain-' + moduleNumber;
                    array2['OGstorage'] = 'sStorageList_' + moduleNumber;
                    if(array1['b_cache'] === 'yes'){
                        array1['first_page'] = EC$.cookie('mobile_more_current_page_' + moduleNumber);
                    };
                }else{
                    array2['OGmodule'] = 'OG-dynamic-custom';
                };
            };
            array1['cate_no'] = Number(array1['cate_no']);
            array1['count'] = Number(array1['count']);
            array1['sort_method'] = Number(array1['sort_method']);
            OGPrdDynamicCall.__OG_DEFAULT_VALUE_CONDITION_ARRAY[count] = array1; //카페24 기본 설정
            OGPrdDynamicCall.__OG_DEFAULT_VALUE_OGSETTING_CONDITION_ARRAY[count] = array2; //OG 커스텀 설정
            $basePrdList.attr({'data-ogdynamic-idx' : count, //고유번호
                'data-ogdynamic-init' : count
            }).addClass('og_dynamic_prdList_' + count); //고유 클래스
            return count;
        } else {
            return false; //사용안하는 경우 false return
        };
    },
    setData : function(no){
        /**
         * 데이터 세팅
         */
        let basicSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_CONDITION_ARRAY[no]; //카페24 기본 설정
        let OGSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_OGSETTING_CONDITION_ARRAY[no]; //OG 커스텀 설정
        let moredata = basicSettingArray; //ajax를 요청하기 위한 data obj
        return moredata;
    },
    sModuleHtmlForVDOM : function(sTargetModuleName, sPos){
        /**
         * VDOM에서 모듈 템플릿 호출
         */
        var sModuleHtmlForVDOM = CAFE24.FRONT_XANS_TEMPLATE.getTemplateForVDOM(sTargetModuleName);
        var $li = EC$.fn[sPos].apply(EC$(sModuleHtmlForVDOM).find('ul').first().children('li'));
        $li.removeClass('on');
        var sLiHtmlForVDOM = EC$('<ul>').append($li).html();
        return CAFE24.FRONT_XANS_TEMPLATE.convertVDomHtmlToHTML(sLiHtmlForVDOM);
    },
    getLiTemplate : function(sTargetModuleName, prdData){
        /**
         * 데이터/템플릿에서 li템플릿 호출
         */
        var sFirstLiTemplate = OGPrdDynamicCall.sModuleHtmlForVDOM(sTargetModuleName, 'first');
        var sLiTemplate = OGPrdDynamicCall.sModuleHtmlForVDOM(sTargetModuleName, 'last');
        var aHtml = [];
        var sTemplate = sLiTemplate;
        EC$(prdData).each(function(iIndex, aVar) {
            if (iIndex === 0) {
                sTemplate = sFirstLiTemplate;
            } else {
                sTemplate = sLiTemplate;
            };
            aHtml.push(OG_FRONT_XANS_INTERPRETER.fetch(sTemplate, aVar));
            //aHtml.push(CAFE24.FRONT_XANS_INTERPRETER.fetch(sTemplate, aVar));
        });
        var sHtml = aHtml.join('');
        return sHtml;
    },
    run : function(no, $basePrdList){
        /**
         * 상품 동적 호출 시작
         * @ no : 영역별 고유 번호
         * @ $basePrdList : .base_prd_list
         */
        let $prdList; //상품이 붙을 영역
        let $basicButton = $basePrdList.siblings('[class*="xans-product-listmore"]'); //기존 더보기 버튼 (base_prd_list 다음 요소여야 정상 동작)
        let basicSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_CONDITION_ARRAY[no]; //카페24 기본 설정
        let OGSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_OGSETTING_CONDITION_ARRAY[no]; //OG 커스텀 설정
        let moredata = OGPrdDynamicCall.setData(no); //ajax 호출 요청 시 필요한 데이터
        let ajaxLink = OGPrdDynamicCall.__OG_DEFAULT_VALUE_AJAX_URL[Number(OGSettingArray.OGlink)]; //ajax 링크
        let defaultViewCount =  moredata['count']; //기본 노출 수
        let pageChk = moredata['page'];
        let type = OGSettingArray.OGmoretype; //더보기 출력 방식(페이지네이션/더보기/무한스크롤/swipe)
        let sTargetModuleName = OGSettingArray['ogmodule'];
        let sStorageListName = OGSettingArray['ogstorage'];
        let sStorageListData;
        let chkCount = pageChk; //ajax 호출 완료 체크용
        let typeChk;
        let lastPageChk = 0;
        let lastPageNum;
        let resultType = true;
        /**
         * 고유번호별 데이터 저장 위치 지정
         */
        if(typeof OGPrdDynamicCall['__OG_DEFAULT_VALUE_PRDLIST_ALL_DATA' + no] === 'undefined'){
            OGPrdDynamicCall['__OG_DEFAULT_VALUE_PRDLIST_ALL_DATA' + no] = [];
        };
        /**
         * 기존 더보기 버튼 유무에 따라 호출 방식 지정
         * @ seq 동기 호출
         * @ async 비동기 호출
         */
        if($basicButton.length > 0){
            $basicButton.hide(); //기존 버튼 감춤
            if(sTargetModuleName.indexOf('xans-product-listmain') > -1 && Number(basicSettingArray['display_group']) != 0){
                typeChk = 'seq';
            }else{
                typeChk = 'async';
            };
        }else{
            typeChk = 'seq';
        };
        //필터 사용 여부
        let filterUseChk = false;
        if(($basePrdList.attr('data-ogdynamic-connect') !== 'undefined') && (typeof OGSettingArray.OGfilter !== 'undefined') ){
            filterUseChk = true;
        }
        $basePrdList.attr('data-ogdynamic-type', type);
        let testchkCount = 0;
        /**
         * 캐시 저장 유무에 따른 분류
         */
        if(Number(basicSettingArray['first_page']) !== 1 && basicSettingArray.b_cache =='yes'){
            ( storageDataChk = function(){
                try {
                    sStorageListData = sessionStorage.getItem(sStorageListName);
                    if(sStorageListData){
                        //console.log('캐시 사용하고 있고 세션에 데이터 있음');
                        OGPrdDynamicCall.displayMore(ajaxLink, '', moredata, defaultViewCount, true).then(function(res) {
                            OGPrdDynamicCall.__OG_DEFAULT_VALUE_CACHE_ITEM_APPEND_CHK_FLAG = 'wait'; //캐시사용시 상품 append flag 시작
                            callDataNormal();
                        });
                    }else{
                        testchkCount++;
                        if(testchkCount < 5){
                            setTimeout(function(){storageDataChk();},100);
                        }else{
                            //console.log('캐시 사용하고 있는데 세션에 데이터 없음');
                            OGPrdDynamicCall.__OG_DEFAULT_VALUE_CACHE_ITEM_APPEND_CHK_FLAG = false; //캐시사용시 상품 append flag 필요X
                            callDataNormal();
                        };
                    };
                } catch (e) {
                }
            })();
        }else{
            //console.log('첫번째 호출이거나 캐시 저장 기능 사용안함');
            OGPrdDynamicCall.__OG_DEFAULT_VALUE_CACHE_ITEM_APPEND_CHK_FLAG = false; //캐시사용시 상품 append flag 필요X
            callDataNormal();
        };
        /**
         * 영역타입별 상품 호출
         */
        function callDataNormal(){
            //상품 분류 페이지 일반 상품 영역
            if($basePrdList[0] == OGPrdDynamicCall._prdList_categoryList){
                callData();
            }
            //상품 분류 페이지의 일반 상품 영역이 아닌 경우
            else{
                let testData = JSON.parse(JSON.stringify(moredata));
                testData['page'] = 1;
                OGPrdDynamicCall.displayMore(ajaxLink, '', testData, defaultViewCount, true).then(function(res) {
                    let prdData = res;
                    $basePrdList.find('.prdList').html(OGPrdDynamicCall.getLiTemplate(sTargetModuleName, res));
                    callData();
                });
            };
        };
        /**
         * 더보기 방식에 따라 분기처리
         */
        function callData(){
            /**
             * @ page : 페이지네이션
             * @ button : 더보기 버튼
             * @ scroll : 무한스크롤
             * @ swipe : swiper
             */
            switch(type){
                case 'page' :
                    $prdList = $basePrdList.find('.prdList');
                    ( dataCall = function(){
                        if(typeChk === 'seq'){
                            call_seq(resultType);
                        }else{
                            call_async(resultType);
                        };
                    })();
                    break;
                case 'button' :
                    $basicButton.hide();
                    $prdList = $basePrdList.find('.prdList');
                    if(typeChk === 'seq'){
                        call_seq(resultType);
                    }else{
                        call_async(resultType);
                        //filterUseChk = false;
                    };
                    break;
                case 'scroll' :
                    $basicButton.hide();
                    $prdList = $basePrdList.find('.prdList');
                    if(typeChk === 'seq'){
                        call_seq(resultType);
                    }else{
                        call_async(resultType);
                    };
                    filterUseChk = false;
                    break;
                case 'swipe' :
                    filterUseChk = false;
                    $basicButton.hide();
                    $prdList = $basePrdList.find('.prdList');
                    //sessionStorage.removeItem(sStorageListName);
                    resultType = false;
                    if(! $prdList.hasClass('swiper-wrapper')){
                        $prdList.addClass('OG_swiper');
                        $prdList.attr('data-ogswipe-name', 'ogdynamic'+no);
                        $prdList.attr('data-ogswipe-custom', 'false');
                        $prdList.attr('data-ogswipe-module', 'scrollbar');
                        callDataNormal_Swipe();
                    }else{
                        callDataNormal_Swipe();
                    };
                function callDataNormal_Swipe(){
                    call_async(resultType).then(function(resFin) {
                        $prdList.OG_swiperFunc();
                        let swiperName = $prdList.attr('data-ogswipe-name');
                        $prdList.children().addClass('on');
                        let beforeLength = $prdList.children().filter('[data-prd]').length;
                        let sliceArray = OGPrdDynamicCall['__OG_DEFAULT_VALUE_PRDLIST_ALL_DATA' + no].slice(beforeLength, beforeLength+Number(defaultViewCount));
                        if(sliceArray.length > 0){
                            $prdList.append(OGPrdDynamicCall.getLiTemplate(sTargetModuleName, sliceArray));
                            $prdList.children().addClass('on');
                        };
                        window[swiperName].on('reachEnd',function(){
                            let beforeLength = $prdList.children().filter('[data-prd]').length;
                            let sliceArray = OGPrdDynamicCall['__OG_DEFAULT_VALUE_PRDLIST_ALL_DATA' + no].slice(beforeLength, beforeLength+Number(defaultViewCount));
                            if(sliceArray.length > 0){
                                $prdList.append(OGPrdDynamicCall.getLiTemplate(sTargetModuleName, sliceArray));
                                $prdList.children().addClass('on');
                            };
                        });
                    });
                };
                    if(typeof OGPrdDynamicCall.__OG_DEFAULT_VALUE_CUSTOM_FUNCTION === 'function'){
                        OGPrdDynamicCall.__OG_DEFAULT_VALUE_CUSTOM_FUNCTION();
                    };
                    OGPrdDynamicCall.initAfter();
                    $basePrdList.addClass('ogdynamic-done');
                    break;
                default :
                    break;
            };
            if(filterUseChk === false){
                var connect = $basePrdList.attr('data-ogdynamic-connect');
                if(typeof connect !== 'undefined'){
                    var $curation = OG$('#og_dynamic_curation[data-ogdynamic-connect="'+ connect +'"]:not(.done)');
                    var $filter = OG$('.og_dynamic_filter[data-ogdynamic-connect="'+ connect +'"]:not(.done)');
                    $curation.addClass('displaynone');
                    $filter.addClass('displaynone');
                }
            };
            //순차 연쇄 실행
            function call_seq(resultType){
                return new Promise(function (resFin, rejFin) {
                    let count = Number(OGPrdDynamicCall.__OG_DEFAULT_VALUE_AJAX_COUNT);
                    ( seqDataCall = function(){
                        OGPrdDynamicCall.displayMore(ajaxLink, '', moredata, count).then(function(res) {
                            if(res != 'end'){
                                moredata['page'] = Number(moredata['page']) + 1;
                                chkCount++;
                                seqDataCall();
                            }else{
                                resFin(true);
                            };
                        });
                    })();
                }).then(function(resFin){
                    OGPrdDynamicCall.dynamicDataEnd(no, $basePrdList, moredata, type);
                });
            };
            //비동기 연쇄 실행
            function call_async(resultType){
                return new Promise(function (resFin, rejFin) {
                    let count = Number(OGPrdDynamicCall.__OG_DEFAULT_VALUE_AJAX_COUNT); //한 번 호출 실행 시 호출할 상품 수
                    //sessionStorage.removeItem(sStorageListName);
                    let maxPrdCount;
                    let test = Number($basicButton.find('[id^="more_total_page"]').text()); //더보기 버튼에 적힌 마지막 페이지 숫자
                    maxPrdCount = Number($basicButton.find('[id^="more_total_page"]').text()) * defaultViewCount; //페이지 기준 최대 수량
                    let callCount = Math.ceil(maxPrdCount/Number(OGPrdDynamicCall.__OG_DEFAULT_VALUE_AJAX_COUNT)); //필요한 ajax 호출 횟수
                    if(pageChk > callCount){
                        callCount = pageChk;
                    };
                    if(callCount > 0){
                        for(let i=pageChk; i<=callCount; i++){
                            moredata['page'] = i;
                            OGPrdDynamicCall.displayMore(ajaxLink, '', moredata, count).then(function(res) {
                                if(chkCount == callCount){
                                    resFin(true);
                                }else{
                                    chkCount++;
                                };
                            });
                        };
                    };
                }).then(function(resFin){
                    OGPrdDynamicCall.dynamicDataEnd(no, $basePrdList, moredata, type);
                });
            };
        };
    },
    displayMore : function(url, $prdList, moredata, customCount, dataChk){
        /**
         * 상품데이터 호출
         * url : 호출 url
         * $prdList : 상품이 붙을 영역
         * moredata : 상품을 호출하기 위한 data
         * customCount : 호출 수 커스텀 (있을 경우)
         * dataChk : 데이터 체크 flag true : 데이터 return / false : 상품 데이터 append
         */
        let ajaxData =  JSON.parse(JSON.stringify(moredata)); // 최종호출 data
        let idx;
        if(typeof moredata['idx'] !== 'undefined'){
            idx = moredata['idx'];
            delete ajaxData['idx'];
        }else{
            idx = 999;
            delete ajaxData['OGmodule'];
        };
        let pageChk =  moredata['page'];
        delete ajaxData['first_page'];
        let count = moredata['count'];
        if(typeof customCount !== 'undefined'){
            ajaxData['count'] = customCount;
        };
        if(moredata['cate_no'] === 1){
            delete ajaxData['cate_no'];
        };
        let sStorageListName;
        let sStorageListData;
        if(typeof moredata['display_group'] !== 'undefined'){
            sStorageListName = 'sStorageList_' + moredata['display_group'];
        };
        if(typeof moredata['cate_no'] !== 'undefined'){
            sStorageListName = 'sStorageList_' + moredata['cate_no'] + '_' + moredata['display_group'];
        };
        try {
            sStorageListData = sessionStorage.getItem(sStorageListName);
        } catch (e) {
        };
        return new Promise(function (res, rej) {
            OG$.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                data: ajaxData,
                success: function (data) {
                    var prdData = data["rtn_data"]["data"];
                    if(prdData != null){
                        if (prdData.length) {
                            //console.log(prdData);
                            if(dataChk){
                                if (sStorageListData !== null && idx !== 999) {
                                    OGPrdDynamicCall['__OG_DEFAULT_VALUE_PRDLIST_ALL_DATA' + idx] = prdData;
                                };
                                if(data['rtn_data'].end){
                                    res('end');
                                }else{
                                    res(prdData);
                                };
                            }else{
                                if(idx !== 999){
                                    prdData.forEach(function(e, i){
                                        let num = ((pageChk-1)*Number(customCount)) + i;
                                        if(OGPrdDynamicCall['__OG_DEFAULT_VALUE_PRDLIST_ALL_DATA' + idx]){
                                            OGPrdDynamicCall['__OG_DEFAULT_VALUE_PRDLIST_ALL_DATA' + idx][num] = e;
                                        };
                                    });
                                }else{
                                    if(typeof $prdList !== 'undefined'){
                                        if($prdList !== ''){
                                            let sTargetModuleName;
                                            if(OGPrdDynamicCall.__OG_DEFAULT_VALUE_OGSETTING_CONDITION_ARRAY[idx]){
                                                sTargetModuleName = OGPrdDynamicCall.__OG_DEFAULT_VALUE_OGSETTING_CONDITION_ARRAY[idx]['OGmodule'];
                                            }else{
                                                sTargetModuleName = moredata['OGmodule'];
                                            };
                                            $prdList.append(OGPrdDynamicCall.getLiTemplate(sTargetModuleName, prdData));
                                        }
                                    };
                                };
                                if(data['rtn_data'].end){
                                    res('end');
                                }else{
                                    if($prdList !== ''){
                                        res('continue');
                                    }else{
                                        res(prdData);
                                    }
                                };
                            };
                        };
                    }else{
                        res('end');
                    };
                },
                error:function(request,status,error){
                    console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                }
            });
        });
    },
    makeMoreButton: function(no, $basePrdList, moredata){
        /**
         * 더보기 버튼 생성
         */
        let OGSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_OGSETTING_CONDITION_ARRAY[no];
        let basicSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_CONDITION_ARRAY[no];
        let prdListData = OGPrdDynamicCall['__OG_DEFAULT_VALUE_PRDLIST_ALL_DATA' + no];
        let startNum = basicSettingArray.first_page;
        let lastNum;
        let $basicButton = $basePrdList.siblings('[class*="xans-product-listmore"]');
        $basicButton.hide();
        let count = Number(basicSettingArray.count);
        if(prdListData){
            lastNum = Math.ceil(prdListData.length/count);
        }else{
            lastNum = $basicButton.find('[id^="more_total_page"]').text();
        };
        if(startNum >= lastNum){
            startNum = lastNum;
        };
        let $moreButtonHtml = '<div class="og_paginate_container og_dynamic_moreButton" data-ogdynamic-page="'+ startNum +'" data-ogdynamic-count="'+ count +'" data-ogdynamic-idx="'+ no +'" data-ogdynamic-last="'+ lastNum +'" ><div class="og_button">';
        $moreButtonHtml += '<a href="javascript:void(0);"><span>'+ OGPrdDynamicCall.__OG_DEFAULT_VALUE_MOREBUTTON_TEXT +'</span>';
        $moreButtonHtml += '<span id="more_current_page_og_dynamic_'+ no +'">'+ startNum +'</span>/<span id="more_total_page_og_dynamic_'+ no +'">'+ lastNum +'</span>';
        $moreButtonHtml = OG$($moreButtonHtml);
        if(startNum >= lastNum){ $moreButtonHtml.hide(); };
        $moreButtonHtml.insertAfter($basePrdList);
        OGPrdDynamicCall.clickButton(no, $basePrdList, moredata);
        let typeChk = $basePrdList.attr('data-ogdynamic-type');
        if((typeChk !== 'button') || (typeChk === 'button' && lastNum == 1)){ $moreButtonHtml.hide(); }
        OGPrdDynamicCall.filter(no, $basePrdList);
    },
    makePagination: function(no, $basePrdList, moredata){
        /**
         * 페이지네이션 생성
         */
        let basicSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_CONDITION_ARRAY[no];
        let OGSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_OGSETTING_CONDITION_ARRAY[no];
        let prdListData = OGPrdDynamicCall['__OG_DEFAULT_VALUE_PRDLIST_ALL_DATA' + no];
        let $basicButton = $basePrdList.siblings('[class*="xans-product-listmore"]');
        let lastNum;
        let count = Number(basicSettingArray.count);
        if(prdListData){
            lastNum = Math.ceil(prdListData.length/count);
        }else{
            lastNum = $basicButton.find('[id^="more_total_page"]').text();
        };
        if(typeof moredata !== 'undefined'){
            OGPrdDynamicCall.saveCache(moredata, lastNum);
        };
        let $paginate = OG$('.og_dynamic_paginate[data-ogdynamic-idx="'+no+'"]'); //페이지네이션 element
        //기존 페이지네이션 갱신
        if($paginate.length > 0){
            let chkLast = Number($paginate.attr('data-ogdynamic-last')); //마지막 페이지
            let chkCount = Number($paginate.attr('data-ogdynamic-count')); //페이지 당 보이는 상품 수
            let chkLimit = Number($paginate.attr('data-ogdynamic-limit')); //페이지네이션 생성 시 리밋 (ex 리밋 5 -> 페이지네이션 번호 1,2,3,4,5 / 6,7,8,9,10, 리밋 3 -> 페이지네이션 번호 1,2,3 / 4,5,6 )
            let chkPage = Number($paginate.attr('data-ogdynamic-page')); //현재 보는 페이지 번호
            let $pagination = $paginate.find('ol'); //페이지네이션 번호 목록
            let newViewEnd = Math.ceil(chkPage/chkLimit)*chkLimit; //새로 갱신 시 마지막 페이지네이션 목록 번호
            let newViewStart = newViewEnd - chkLimit; //새로 갱신 시 최초 페이지네이션 목록 번호
            if(newViewEnd > chkLast){
                newViewEnd = chkLast;
            };
            let $pageAll = '';
            for(var i=newViewStart; i<newViewEnd; i++){
                let $page = '<li><a href="javascript:void(0);" data-page="'+ (i+1) +'">'+ (i+1) +'</a></li>';
                if(i==0){
                    $page = '<li class="on"><a href="javascript:void(0);" class="this" data-page="'+ (i+1) +'">'+ (i+1) +'</a></li>';
                }else{
                    $page = '<li><a href="javascript:void(0);" data-page="'+ (i+1) +'">'+ (i+1) +'</a></li>';
                };
                $pageAll += $page;
            };
            $pagination.html($pageAll);
        }
        //페이지네이션 최초 생성
        else{
            let pageViewLimit = Number(OGSettingArray.OGpage); //페이지네이션 생성 시 리밋 (ex 리밋 5 -> 페이지네이션 번호 1,2,3,4,5 / 6,7,8,9,10, 리밋 3 -> 페이지네이션 번호 1,2,3 / 4,5,6 )
            let $paginationHtml = OG$('<div class="oh_paginate_container og_dynamic_paginate" data-ogdynamic-page="1" data-ogdynamic-count="'+ basicSettingArray.count +'" data-ogdynamic-idx="'+ no +'" data-ogdynamic-last="'+ lastNum +'" data-ogdynamic-limit="'+ pageViewLimit +'"></div>');
            let $goFirst = OG$('<a href="javascript:void(0);" class="first" data-page="1">first</a>');
            let $goPrev = OG$('<a href="javascript:void(0);" class="prev" data-page="1"></a>');
            let $pagination = OG$('<ol></ol>');
            let makePage = pageViewLimit;
            if(lastNum<pageViewLimit){
                makePage = lastNum;
            };
            let $pageAll = '';
            for(var i=0; i<makePage; i++){
                let $page = '<li><a href="javascript:void(0);" data-page="'+ (i+1) +'">'+ (i+1) +'</a></li>';
                if(i==0){
                    $page = '<li class="on"><a href="javascript:void(0);" class="this" data-page="'+ (i+1) +'">'+ (i+1) +'</a></li>';
                }else{
                    $page = '<li><a href="javascript:void(0);" data-page="'+ (i+1) +'">'+ (i+1) +'</a></li>';
                };
                $pageAll += $page;
            };
            $pagination.html($pageAll);
            let $goNext = OG$('<a href="javascript:void(0);" class="next" data-page="2">next</a>');
            let $goLast = OG$('<a href="javascript:void(0);" class="last" data-page="'+ lastNum +'">last</a>');
            $paginationHtml.append($goFirst, $goPrev, $pagination, $goNext, $goLast);
            $paginationHtml.insertAfter($basePrdList);
            $paginate = $paginationHtml;
            //최초 필터링
            OGPrdDynamicCall.filter(no, $basePrdList);
        };
        //페이지네이션 a태그 클릭 시 data-page값에 맞춰 이동
        $paginate.find('a').off().on('click',function(){
            let page = Number($(this).attr('data-page'));
            OGPrdDynamicCall.goPage(no, page, $basePrdList);
        });
    },
    goPage : function(no, page, $basePrdList){
        /**
         * 페이지네이션 페이지 이동
         */
        page = Number(page);
        let basicSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_CONDITION_ARRAY[no];
        let OGSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_OGSETTING_CONDITION_ARRAY[no];
        let $paginate = $basePrdList.siblings('.og_dynamic_paginate[data-ogdynamic-idx="'+no+'"]'); //페이지네이션
        let viewCount = Number(basicSettingArray.count); //한 페이지 당 보이는 상품 수
        let maxCount = Number($paginate.attr('data-ogdynamic-last')); //마지막 페이지
        let limitCountMin = Number($paginate.find('ol li:first-child a').attr('data-page')); //페이지 목록 첫번째
        let limitCountMax = Number($paginate.find('ol li:last-child a').attr('data-page')); //페이지 목록 마지막
        let lastViewIndex = viewCount*page - 1;
        let startViewIndex = lastViewIndex - viewCount + 1;
        let nextpage;
        let prevpage;
        //현재 보이는 페이지네이션 목록 범위에 이동 페이지 내용이 없다면 다시 목록 생성
        $paginate.attr('data-ogdynamic-page',page);
        if((page > limitCountMax) || (page < limitCountMin)){
            OGPrdDynamicCall.makePagination(no, $basePrdList);
        };
        //페이지네이션에 이동 후 페이지 내용 갱신
        $paginate.find('ol a[data-page]').removeClass('this');
        $paginate.find('ol a[data-page]').parent().removeClass('on');
        $paginate.find('ol a[data-page="'+ page +'"]').addClass('this');
        $paginate.find('ol a[data-page="'+ page +'"]').parent().addClass('on');
        nextpage = ((page+1) > maxCount) ? maxCount : page+1;
        prevpage = ((page-1) < 1) ? 1 : page-1;
        $paginate.find('.next').attr('data-page', nextpage);
        $paginate.find('.prev').attr('data-page', prevpage);
        //페이지 갱신 내용에 맞춰 상품 display 변경
        OGPrdDynamicCall.replaceState($basePrdList, page);
        let condition = function(v, i){
            if(i >= startViewIndex && i <= lastViewIndex ){
                return true;
            }else{
                return false;
            };
        };
        OGPrdDynamicCall.filtering(no, condition, $basePrdList);
    },
    clickButton : function(no, $basePrdList, moredata){
        /**
         * 더보기 버튼 클릭 시
         */
        let OGSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_OGSETTING_CONDITION_ARRAY[no];
        let basicSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_CONDITION_ARRAY[no];
        let prdListData = OGPrdDynamicCall['__OG_DEFAULT_VALUE_PRDLIST_ALL_DATA' + no];
        let lastNum;
        let $basicButton = $basePrdList.siblings('[class*="xans-product-listmore"]');
        let count = Number(basicSettingArray.count);
        if(prdListData){
            lastNum = Math.ceil(prdListData.length/count);
        }else{
            lastNum = $basicButton.find('[id^="more_total_page"]').text();
        };
        let ajaxLink = OGPrdDynamicCall.__OG_DEFAULT_VALUE_AJAX_URL[Number(OGSettingArray.OGlink)];
        let $moreButton = $basePrdList.siblings('.og_dynamic_moreButton[data-ogdynamic-idx="'+no+'"]');
        $moreButton['bLoading'] = true;

        if(typeof prdListData !== 'undefined'){
            $moreButton.off().on('click',function(){
                let nowPage = Number($moreButton.attr('data-ogdynamic-page'));
                let nextPage = nowPage + 1;
                let viewCount = Number($moreButton.attr('data-ogdynamic-count'));
                let maxCount = Number($moreButton.attr('data-ogdynamic-last'));
                let lastViewIndex = nextPage * viewCount - 1;
                let condition = function(v, i){
                    if(i <= lastViewIndex ){
                        return true;
                    }else{
                        return false;
                    };
                };
                OGPrdDynamicCall.replaceState($basePrdList, nextPage);
                OGPrdDynamicCall.filtering(no, condition, $basePrdList);
                if(nextPage >= maxCount){
                    $moreButton.hide();
                    $moreButton.addClass('displaynone');
                }else{
                    OGPrdDynamicCall.infinitScroll(no, $basePrdList, $moreButton);
                };
                if(nextPage <= maxCount){
                    $moreButton.attr('data-ogdynamic-page', nextPage);
                    $moreButton.find('[id^="more_current_page"]').text(nextPage);
                    OGPrdDynamicCall.saveCache(moredata, nextPage);
                };
            });
        }else{
            $moreButton.off().on('click',function(){
                if(! $moreButton['bLoading']){
                    console.log('호출 기능 비활성화');
                }else{
                    console.log('호출 기능 활성화');
                    let nowPage = Number($moreButton.attr('data-ogdynamic-page'));
                    let nextPage = nowPage + 1;
                    let viewCount = Number($moreButton.attr('data-ogdynamic-count'));
                    let maxCount = Number($moreButton.attr('data-ogdynamic-last'));
                    moredata['page'] = nextPage;
                    $moreButton['bLoading'] = false;
                    //현재 주소줄 내용 갱신 ---> 상품 분류 페이지 & 일반 상품 영역 일 경우에만
                    OGPrdDynamicCall.replaceState($basePrdList, nextPage);
                    OGPrdDynamicCall.displayMore(ajaxLink, $basePrdList.find('.prdList'), moredata).then(function(res) {
                        $moreButton['bLoading'] = true;
                        if(res == 'end'){
                            $moreButton.hide();
                            $moreButton.addClass('displaynone');
                            $moreButton['bLoading'] = false;
                        }else{
                            $moreButton.find('[id^="more_current_page"]').text(nextPage);
                            $moreButton.attr('data-ogdynamic-page', nextPage)
                            OGPrdDynamicCall.infinitScroll(no, $basePrdList, $moreButton);
                        };
                        if(nextPage <= maxCount){
                            OGPrdDynamicCall.saveCache(moredata, nextPage);
                        };
                    });
                };
            });
        };
    },
    infinitScroll : function(no, $basePrdList, $moreButton){
        /**
         * 무한스크롤 방식일 경우
         */
        if($basePrdList.attr('data-ogdynamic-type') === 'scroll'){
            let basicTag = $basePrdList.find('.prdList').children('[data-prd]').eq(0)[0].tagName.toLowerCase();
            if(! $moreButton.hasClass('displaynone')){
                var lastObserveFunc = function (a, b, c){
                    if (a.isIntersecting) {
                        OG$(a.target).removeClass('og_isIntersecting');
                        b.disconnect();
                        $moreButton.trigger('click');
                    };
                };
                let findlastElidx = $basePrdList.find('.prdList').children().filter('.filter-chk').last().index();
                let findlastEl = '.og_dynamic_prdList_'+ no +' .prdList > ' + basicTag + ':nth-child('+ findlastElidx +')';
                OG_util.IntersectionObserver(document.querySelectorAll(findlastEl), {
                    root: null,
                    threshold: [0.95],
                }, lastObserveFunc);
            }else{
                return false;
            };
        }else{
            return false;
        };
    },
    dynamicDataEnd : function(no, $basePrdList, moredata, type){
        /**
         * 데이터 호출 끝난 후 (페이지네이션 생성 / 더보기 버튼 생성)
         */
        switch(type){
            case 'page' :
                OGPrdDynamicCall.makePagination(no, $basePrdList, moredata);
                break;
            case 'button' : case  'scroll' :
                OGPrdDynamicCall.makeMoreButton(no, $basePrdList, moredata);
                break;
            case 'swipe' :
                break;
            default :
                break;
        };
    },
    saveCache : function(moredata, count){
        //캐시 저장 기능 사용 시
        if(typeof moredata['b_cache'] !== 'undefined'){
            if(moredata['cate_no']){
                EC$.cookie('mobile_more_current_page_' + moredata['cate_no'], (count), { expires: 1 });
            }else{
                EC$.cookie('mobile_more_current_page_' + moredata['display_group'], (count), { expires: 1 });
            };
        };
    },
    filtering : function(no, condition, $basePrdList){
        /**
         * 상품 목록 필터링
         * @ prdListData : no 기준 상품 데이터
         * @ $prdList : 상품 목록이 붙는 영역
         * @ gridMax : 상품 목록 grid 기준 (class 부여 기준)
         */
        let prdListData = OGPrdDynamicCall['__OG_DEFAULT_VALUE_PRDLIST_ALL_DATA'+no],
            $prdList = $basePrdList.find('.prdList'),
            gridMax;
        if($basePrdList.find('.og_dynamic_nodata')){$basePrdList.find('.og_dynamic_nodata').remove();}
        let gridClassChk = function(item){ if(item.indexOf('grid') > -1){ return true; } }
        let gridClassList = $prdList[0].classList.value.split(' ');
        if(gridClassList){
            gridMax = OG_util.onlyNumbFunc(gridClassList.filter(gridClassChk)) - 1;
        };
        if(gridMax == -1){
            gridMax = 1;
        };
        let num = 0;
        let viewIndex = 0;
        let result = [];
        result = prdListData.reduce(function(acc, v, i, arr){
            let $prdEl = $prdList.children('[id^="anchorBoxId_"]').eq(i);
            if($prdEl.length > 0){
                let nClassChk = function(item){ if(item.indexOf('n') == 0){ return true; } }
                let nClass = $prdEl[0].classList.value.split(' ').filter(nClassChk);
                $prdEl.removeClass('on last-view even filter_chk '+ nClass).removeAttr('data-view-index').removeAttr('data-view-last-index');
            };
            if(condition(v,i) !== false){
                if(num > gridMax){
                    num = 0;
                    num++;
                }else{
                    num++;
                };
                let addClass = '';
                if(num == 2 && gridMax == 1){
                    addClass = 'even';
                };
                $prdEl.addClass('on filter_chk n'+num + ' ' + addClass);
                viewIndex++;
                acc[i] = i;
                return acc;
            }else{
                return acc;
            };
        },[]);
        if(result.length == 0){
            $basePrdList.append('<div class="og_base_nodata og_dynamic_nodata"><p>결과가 없습니다.</p></div>');
        }else{
            let chkNum = 0;
            let lastIndex = (viewIndex - 1);
            result.forEach(function(e,i){
                if(chkNum == 0){
                    $prdList.children().eq(e).addClass('first_view');
                }else if(chkNum==lastIndex){
                    $prdList.children().eq(e).addClass('last_view');
                }
                $prdList.children().eq(e).attr({
                    'data-view-index': chkNum,
                    'data-view-last-index' : lastIndex - chkNum
                });
                chkNum++;
            });
        };

        let OG_FILTERING_CALL_END = new CustomEvent('OGFilteringEnd', {'detail': result });
        $basePrdList[0].dispatchEvent(OG_FILTERING_CALL_END);

        return result;
    },
    filter : function(no, $basePrdList){
        /**
         * @ prdListData : no 기준 상품 데이터
         */
        let OGSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_OGSETTING_CONDITION_ARRAY[no];
        let basicSettingArray = OGPrdDynamicCall.__OG_DEFAULT_VALUE_CONDITION_ARRAY[no];
        let prdListData = OGPrdDynamicCall['__OG_DEFAULT_VALUE_PRDLIST_ALL_DATA'+no];
        let connect = $basePrdList.attr('data-ogdynamic-connect');
        let $curation = OG$('#og_dynamic_curation[data-ogdynamic-connect='+ connect +']'); //큐레이션 영역 있으면
        let $filter = OG$('.og_dynamic_filter[data-ogdynamic-connect='+ connect +']'); //동적 필터 전체 영역
        $filter.addClass('done');
        let filterType = OGSettingArray.OGfilter; //동적 필터 선택 타입 multiple (복수 선택 가능) / single (단일 선택)
        let moreViewType = OGSettingArray.OGmoretype; //더보기 타입
        let $paginate = $basePrdList.siblings('.og_dynamic_paginate[data-ogdynamic-idx="'+no+'"]');
        let $moreButton = $basePrdList.siblings('.og_dynamic_moreButton[data-ogdynamic-idx="'+no+'"]');
        let $section = $filter.find('[data-ogdynamic-var]'); //조건별 섹션
        let sectionLength = $section.length; //섹션 수
        let $filterButton = $filter.find('.og_filter'); //필터 버튼
        let $filterAllButton = $section.find('.og_filter[data-ogdynamic-type="all"]'); //전체선택 버튼(== 해당영역 리셋)
        let $sort = OG$('.og_dynamic_sort[data-ogdynamic-connect='+ connect +']');
        let $sortButton = $sort.find('.og_filter'); //정렬 버튼
        let $curationButton = $curation.find('.og_dynamic_buttons .OG_filter'); //큐레이션 버튼
        let type = Number(OGSettingArray.OGlink);
        let defaultView = Number(basicSettingArray.count);
        let $prdList = $basePrdList.find('.prdList');
        let sTargetModuleName = OGSettingArray.OGmodule;
        let filterResultType = 1;
        //필터 버튼 형태 수정 (input태그 없을 경우 생성)
        ($sortButton, $filterButton).each(function(idx,el){
            let $el = OG$(el),
                parentIdx = $el.closest($section).index();
            if($el.find('input').length == 0){
                let text = $el.text().trim();
                $el.children().append('<input type="checkbox" name="filter_'+parentIdx+'" id="'+ text +'" / ><label></label>\n');
            };
        });
        $filterButton.each(function(){
            let val = OG$(this).closest($section).attr('data-ogdynamic-var');
            let idx = OG$(this).closest($section).index();
            let inputId = OG$(this).find('input').attr('id');
            $filterButton.css('cursor','pointer');
            $filterButton.children().css('pointer-events','none');
            OG$(this).attr('data-ogdynamic-val', val + '_'+ idx + '_' + inputId);
            OG$(this).find('input').attr('id',val + '_' + idx + '_' + inputId);
            OG$(this).find('input').next('label').attr('for',val +  '_'  + idx + '_' + inputId);
        });
        let saveTimeChk = false;
        let filterDIsplayChk = false;
        let storage_OGCateInfo = sessionStorage.getItem('og_cate_info');
        let storage_OGCateInfo2 = sessionStorage.getItem('og_cate_info2');
        let storage_OGCateInfo3 = sessionStorage.getItem('og_cate_info3');
        let defaultSort = OG_util.getParameterByName(OG_LOCATION_HREF, 'sort_method');
        if($basePrdList[0] == OGPrdDynamicCall._prdList_categoryList){
            window['OG_CATE_INFO'] = {
                'cateNo' : OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE,
                'viewType' : null,
                'scrollTop' : null,
                'oriCatePage' : null,
                'saveTime' : null,
            };
            window['OG_CATE_INFO2'] = prdListData.slice(0,OGPrdDynamicCall.__OG_DEFAULT_VALUE_AJAX_COUNT*2);
            window['OG_CATE_INFO3'] =  null;
            var iNowTime = Math.floor(new Date().getTime() / 1000);
            var iSessionTime = 60 * 5;
            try {
                if(typeof storage_OGCateInfo3 === 'string' && typeof storage_OGCateInfo2 !== 'undefined' && typeof storage_OGCateInfo !== 'undefined'){
                    storage_OGCateInfo = JSON.parse(storage_OGCateInfo);
                    storage_OGCateInfo2 = JSON.parse(storage_OGCateInfo2);
                    storage_OGCateInfo3 = JSON.parse(storage_OGCateInfo3);
                    if(typeof storage_OGCateInfo3 === 'string' && iNowTime - Number(storage_OGCateInfo['saveTime']) < iSessionTime && storage_OGCateInfo['oriCatePage'] === window.location.href){
                        saveTimeChk = true;
                        $('html,body').animate({scrollTop:storage_OGCateInfo['scrollTop']}, 0);
                    };
                };
            }
            catch (err) {
                console.log(err);
                sessionStorage.removeItem('og_cate_info');
                sessionStorage.removeItem('og_cate_info2');
                sessionStorage.removeItem('og_cate_info3');
            };
            Object.keys(sessionStorage).forEach(function(el){
                if(el.indexOf('coupon_download_') > -1){
                    sessionStorage.removeItem(el);
                };
            });
            let appendLength = OG$(OGPrdDynamicCall._prdList_categoryList).find('[id^="anchorBoxId_"]').length;
            let arrayFin = prdListData.slice(appendLength);
            let templete = OGPrdDynamicCall.getLiTemplate(sTargetModuleName, arrayFin);
            if(templete.trim() != ''){
                $prdList.append(templete);
            };
            if(! saveTimeChk){
                saveTimeChk = Math.floor(new Date().getTime() / 1000);
            }else{
                saveTimeChk = storage_OGCateInfo['saveTime'];
            };
            /**
             * 상품 클릭할때 데이터 세션에 저장
             */
            OG$(document).on('click', '.prdItem_normalBox .prdList [id^="anchorBoxId_"]', function(e){
                var target = e.target;
                if(target.classList.contains('ec-admin-icon') || target.classList.contains('Prev_Cart')){
                }else{
                    let viewType = null;
                    if(OG$('.og_viewType').is(':visible')){
                        viewType = OG$('.og_viewType').attr('data-view');
                    };
                    window['OG_CATE_INFO']['viewType'] = viewType;
                    window['OG_CATE_INFO']['scrollTop'] = window.pageYOffset;
                    window['OG_CATE_INFO']['oriCatePage'] = window.location.href;
                    window['OG_CATE_INFO']['saveTime'] = saveTimeChk;
                    let html = '';
                    OG$('.prdItem_normalBox .prdList [id^="anchorBoxId_"]').each(function(idx,el){
                        if(idx < OGPrdDynamicCall.__OG_DEFAULT_VALUE_AJAX_COUNT*1.5){
                            html+= el.outerHTML;
                        };
                    });
                    window['OG_CATE_INFO3'] = html;
                    sessionStorage.setItem('og_cate_info',  JSON.stringify(window['OG_CATE_INFO']));
                    sessionStorage.setItem('og_cate_info2',  JSON.stringify(window['OG_CATE_INFO2']));
                    sessionStorage.setItem('og_cate_info3',  JSON.stringify(window['OG_CATE_INFO3']));
                };
            });
            //주소줄 정렬값 적용
            if(defaultSort){
                $sortButton.filter('[data-ogdynamic-val$="sort_method='+ defaultSort +'"]').addClass('on');
                $sortButton.filter('[data-ogdynamic-val$="sort_method='+ defaultSort +'"]').find('input').prop('checked',true);
            };
        }else{
            let templete = OGPrdDynamicCall.getLiTemplate(sTargetModuleName, prdListData);
            if(templete.trim() != ''){
                $prdList.html(templete);
            };
        };
        if(OGPrdDynamicCall.__OG_DEFAULT_VALUE_CACHE_ITEM_APPEND_CHK_FLAG === 'wait'){
            OGPrdDynamicCall.__OG_DEFAULT_VALUE_CACHE_ITEM_APPEND_CHK_FLAG = true;
        };
        if(typeof OGPrdDynamicCall.__OG_DEFAULT_VALUE_CUSTOM_FUNCTION === 'function'){
            OGPrdDynamicCall.__OG_DEFAULT_VALUE_CUSTOM_FUNCTION();
        };
        OGPrdDynamicCall.initAfter();
        $basePrdList.addClass('ogdynamic_done');
        /**
         * 주소줄 기본값 적용
         */
        let defaultPage = OG_util.getParameterByName(OG_LOCATION_HREF, 'page_num');
        defaultPage = (defaultPage == '') ? 1 : defaultPage;
        let defaultFilter = '';
        $section.each(function(i,e){
            let chkVar = OG$(e).attr('data-OGdynamic-var');
            let chkVarValue;
            if($section.length == 1){
                chkVarValue = OG_util.getParameterByName(OG_LOCATION_HREF, 'custom_filter');
            }else{
                chkVarValue = OG_util.getParameterByName(OG_LOCATION_HREF, 'custom_filter_' + chkVar);
            };
            let idx = OG$(e).index();
            if(chkVarValue){
                chkVarValue = (chkVarValue.indexOf('_') > -1) ? chkVarValue.split('_') : [chkVarValue];
                if(chkVarValue[0].trim() == 'all'){
                    OG$(e).find('.og_filter[data-ogdynamic-val="all"]').addClass('on');
                    OG$(e).find('.og_filter[data-ogdynamic-val="all"] input').prop('checked',true);
                }else{
                    chkVarValue.forEach(function(e2, i2){
                        OG$(e).find('.og_filter[data-ogdynamic-val="'+ chkVar + '_' + idx + '_' + e2.trim() + '"]').addClass('on');
                        OG$(e).find('.og_filter[data-ogdynamic-val="'+ chkVar + '_' + idx + '_' + e2.trim() + '"]').find('input').prop('checked',true);
                    });
                };
                defaultFilter += chkVarValue;
            };
        });
        if(defaultFilter.trim() == ''){ //커스텀 필터값 없음 -> 페이지만 적용
            if(moreViewType == 'page'){
                $paginate.attr('data-OGdynamic-page',defaultPage);
                $paginate.find('ol li a[data-page="'+ defaultPage +'"]').addClass('this');
                $paginate.find('ol li a[data-page="'+ defaultPage +'"]').parent().addClass('on');
                if(! filterDIsplayChk){
                    OGPrdDynamicCall.goPage(no, defaultPage, $basePrdList);
                };
            }
            else if(moreViewType == 'button' || moreViewType == 'scroll'){
                $moreButton.attr('data-ogdynamic-page', defaultPage);
                $moreButton.find('[id^="more_current_page"]').text(defaultPage);
                let viewCount = Number($moreButton.attr('data-ogdynamic-count'));
                let maxCount = Number($moreButton.attr('data-ogdynamic-last'));
                let lastViewIndex = defaultPage * viewCount - 1;
                let condition = function(v, i){
                    if(i <= lastViewIndex ){
                        return true;
                    }else{
                        return false;
                    };
                };
                if(! filterDIsplayChk){
                    OGPrdDynamicCall.filtering(no, condition, $basePrdList);
                }
                if(defaultPage < maxCount){
                    if(moreViewType === 'button'){
                        $moreButton.show();
                    };
                    OGPrdDynamicCall.infinitScroll(no, $basePrdList, $moreButton);
                }else{
                    $moreButton.hide();
                };
            };
        }
        else{
            //커스텀 필터값 있음 -> 커스텀값 적용
            if($paginate.length > 0){
                $paginate.attr('data-ogdynamic-page',defaultPage);
                $paginate.find('ol li a[data-page="'+ defaultPage +'"]').addClass('this');
                $paginate.find('ol li a[data-page="'+ defaultPage +'"]').parent().addClass('on');
            }else if($moreButton.length > 0){
                $moreButton.attr('data-ogdynamic-page', defaultPage);
                $moreButton.find('[id^="more_current_page"]').text(defaultPage);
                let viewCount = Number($moreButton.attr('data-ogdynamic-count'));
                let maxCount = Number($moreButton.attr('data-ogdynamic-last'));
                if(defaultPage < maxCount){
                    if(moreViewType === 'button'){
                        $moreButton.show();
                    };
                }else{
                    $moreButton.hide();
                };
            };
            if(! filterDIsplayChk){
                filterCondition();
            };
        };
        if($curation.length > 0){
            filterResultType = 2;
            $sortButton.off().on('click',function(){
                let $this = OG$(this);
                if(! $this.hasClass('on')){
                    $this.addClass('on');
                    $this.find('input').prop('checked',true);
                    $sortButton.not($this).removeClass('on');
                    $sortButton.not($this).find('input').prop('checked',false);
                }else{
                    $this.removeClass('on');
                    $this.find('input').prop('checked',false);
                };
            });
            $curationButton.off().on('click',function(){
                let $this = OG$(this);
                let type = $this.attr('data-ogdynamic-val');
                if(type === 'search'){
                    let result = filterCondition();
                    window.location.href = '/product/list.html' + encodeURI(result);
                }else if(type === 'reset'){
                    $sort.find('.on').removeClass('on');
                    $section.find('.on').removeClass('on');
                    $sort.find('input').prop('checked',false);
                    $section.find('input').prop('checked',false);
                };
            });
        }else{
            filterResultType = 1;
            $sort.hide();
        };
        $filterButton.off().on('click', function(event){
            let $this = OG$(this);
            let type = $this.attr('data-ogdynamic-type');
            // 버튼 on/off 제어
            if(! $this.hasClass('on')){
                if(type === 'all'){
                    $this.addClass('on');
                    $this.find('input').prop('checked',true);
                    $this.siblings($filterButton).removeClass('on');
                    $this.siblings($filterButton).find('input').prop('checked',false);
                }else{
                    $this.addClass('on');
                    $this.find('input').prop('checked',true);
                    if(filterType !== 'multiple'){
                        $this.siblings($filterButton).removeClass('on');
                        $this.siblings($filterButton).find('input').prop('checked',false);
                    }else{
                        $this.siblings($filterButton).filter('[data-ogdynamic-type="all"]').removeClass('on');
                        $this.siblings($filterButton).filter('[data-ogdynamic-type="all"]').find('input').prop('checked',false);
                    };
                };
            }else{
                $this.removeClass('on');
                $this.find('input').prop('checked',false);
            };
            if(filterResultType === 1){
                filterCondition();
            };
        });
        // 필터 컨디션 생성
        function filterCondition(){
            let allButtonOnLength = $filterAllButton.filter('.on').length;
            let sectionSelectLength = $section.has('.on').length;
            let makeParamFilter = '';
            let filterConditionChk;
            if(sectionLength == allButtonOnLength){
                //console.log('전체');
                filterConditionChk = 'all';
                condition = true;
            }else{
                $filter['filter'] = {};
                $section.each(function(i,e){
                    let chkVar = OG$(e).attr('data-ogdynamic-var');

                    let text = OG$(e).find('.og_filter.on').not('.og_filter[data-ogdynamic-type="all"]').text().trim();
                    let textArray = [];
                    if(OG$(e).find('.og_filter[data-ogdynamic-type="all"]').hasClass('on')){
                        textArray.push('all');
                    }else{
                        OG$(e).find('.og_filter.on').each(function(){
                            let $filterBtn = OG$(this);
                            let valueId = $filterBtn.find('input').attr('id');
                            if(valueId.indexOf('_') > -1){
                                valueId = valueId.split('_');
                                textArray.push(valueId[valueId.length-1]);
                            };
                        });
                    };
                    if(textArray.length !== 0){
                        if(textArray[0] != 'all'){
                            $filter['filter'][chkVar] = textArray;
                        };
                        if($section.length > 1){
                            makeParamFilter += '&custom_filter_' + chkVar + '=' + textArray.join('_');
                        }else{
                            makeParamFilter += '&custom_filter=' + textArray.join('_');
                        };
                    };
                });
                let chkArray = JSON.parse(JSON.stringify($filter['filter']));
                if(sectionSelectLength>0){
                    $paginate.addClass('displaynone');
                    $moreButton.addClass('displaynone');
                    condition = function(v, i){
                        let chk = true;
                        let chk2 = true;
                        let length = Object.keys(chkArray).length;
                        for(let x=0; x<length; x++){
                            let key = Object.keys(chkArray)[x];
                            let value = chkArray[key];
                            if(chk === true){
                                let chkVal = v[key];
                                if(value.length > 0){
                                    let test = value.some(function(val) {
                                        return (chkVal.indexOf(val) > -1) ? true : false;
                                    });
                                    if(test === false){
                                        chk = false;
                                        break;
                                    };
                                };
                            };
                        };
                        if(chk === true){
                            return true;
                        }else{
                            return false;
                        };
                    };
                }else{
                    //console.log('선택된 것 없음');
                    filterConditionChk = 'reset';
                    OGPrdDynamicCall.infinitScroll(no, $basePrdList, $moreButton);
                };
            };
            if(filterResultType === 1){
                let makePage;
                if($paginate.length > 0){
                    makePage = Number($paginate.attr('data-ogdynamic-page'));
                }else{
                    makePage = Number($moreButton.attr('data-ogdynamic-page'));
                };
                if(filterConditionChk === 'reset'){
                    if($basePrdList.find('.og_dynamic_nodata')){$basePrdList.find('.og_dynamic_nodata').remove();}
                    if($paginate.length > 0){
                        $paginate.removeClass('displaynone');
                        OGPrdDynamicCall.goPage(no, makePage, $basePrdList);
                    }else{
                        $moreButton.removeClass('displaynone');
                        let viewCount = Number($moreButton.attr('data-ogdynamic-count'));
                        let maxCount = Number($moreButton.attr('data-ogdynamic-last'));
                        let lastViewIndex = makePage * viewCount - 1;
                        condition = function(v, i){
                            if(i <= lastViewIndex ){
                                return true;
                            }else{
                                return false;
                            };
                        };
                        OGPrdDynamicCall.filtering(no, condition, $basePrdList);
                    };
                }else{
                    OGPrdDynamicCall.filtering(no, condition, $basePrdList);
                };
                OGPrdDynamicCall.replaceState($basePrdList, makePage, defaultSort, makeParamFilter);
            }else{
                if($basePrdList[0] == OGPrdDynamicCall._prdList_categoryList){
                    let makeParamSort = ($sortButton.filter('.on').length > 0) ? $sortButton.filter('.on').attr('data-ogdynamic-val') : '?cate_no=' + OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE;
                    let makeParamPage = '&page_num=1'; //우선 무조건 1페이지로
                    let lastParam = makeParamSort + makeParamPage + makeParamFilter;
                    return lastParam;
                }
            };
        };
    },
    replaceState : function($basePrdList, page, sort, filter){
        //현재 주소줄 내용 갱신 ---> 상품 분류 페이지 & 일반 상품 영역 일 경우에만
        if(typeof sort !== 'undefined'){
            let makeParamSort = sort.trim();
            if(makeParamSort != ''){
                if(makeParamSort.indexOf('#Product_ListMenu')){
                    makeParamSort = '?cate_no=' + OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE + '&sort_method=' + makeParamSort.split('#Product_ListMenu')[0].trim();
                }else{
                    makeParamSort = '?cate_no=' + OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE + '&sort_method=' + makeParamSort;
                };
            }else{
                makeParamSort = '?cate_no=' + OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE;
            };
            let makeParamPage = '&page_num='+ page;
            let lastParam = makeParamSort + makeParamPage + filter;
            let newLink = OG_LOCATION_HREF.split(OG_LOCATION_PATHNAME)[0] + OG_LOCATION_PATHNAME + lastParam;
            history.replaceState(null, null, newLink);
            OG_util.getUrl();
        }else{
            if($basePrdList[0] == OGPrdDynamicCall._prdList_categoryList){
                let makePage;
                let nowLink = OG_LOCATION_HREF;
                let linkPage = OG_util.getParameterByName(nowLink, 'page_num');
                let newLink;
                if(linkPage != ''){
                    newLink = nowLink.replace('&page_num='+linkPage, '&page_num='+page);
                }else{
                    let prevParam = nowLink.split('?cate_no=' + OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE)[0];
                    let lastParam = nowLink.split('?cate_no=' + OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE)[1];
                    newLink = prevParam + '?cate_no=' + OGBaseMenuCall.__OG_DEFAULT_VALUE_LOCATION_NOW_CATE + '&page_num=' + page + lastParam;
                };
                history.replaceState(null, null, newLink);
                OG_util.getUrl();
            };
        }
    },
    initAfter : function(){
        sessionStorage.removeItem('og_cate_info');
        sessionStorage.removeItem('og_cate_info2');
        sessionStorage.removeItem('og_cate_info3');
    },
};



















/**
 * 공통 실행
 */
var OG_commonBaseFunc = OG_commonBaseFunc || {
    __OG_DEFAULT_VALUE_ORDER_LAYER_OPEN_CLOSE_FUNCTION_MODIFY : false,
    initBefore: function () {
        if(isPopupPage == 0){
            OG_MEMBER_CHECK = topDocument.querySelectorAll('#og_memberChk_nomember').length > 0 ? false : true; //true : 회원 , false: 비회원
            OG_SUBCONTAINER_DATA_PAGE = OG$('.og_sub_container').attr('data-page');
            OG_TOP_SUBCONTAINER_DATA_PAGE = OG$('.og_sub_container').attr('data-page');

        }else{
            OG_SUBCONTAINER_DATA_PAGE = OG$('.og_popup_container').attr('data-page');
            OG_TOP_SUBCONTAINER_DATA_PAGE = OG$(topDocument).find('.og_sub_container').attr('data-page');
        };
        OG_commonBaseFunc.connectEvent();
        OG_commonBaseFunc.memberStateLayoutFix();
        OGBaseMenuCall.printList(); //메뉴 호출
        //custom swiper
        OGSwiperFunc();
    },
    init: function () {
        //페이지별 실행
        if(typeof basePrdPageInfoCallCustom !== 'undefined'){
            OGPrdPageInfoCall.init();
        }else{
            OGPrdPageInfoCall.init();
        };
        //상품별 실행
        if(typeof basePrdItemInfoCallCustom !== 'undefined'){
            OGPrdItemInfoCall.init();
        }else{
            OGPrdItemInfoCall.init();
        };
        OG_commonBaseFunc.cssVarSet(isPopupPage);
    },
    initLast : function(){
        if(isPopupPage == 0){
            if(OG_MEMBER_CHECK){
                ( memberDataCall = function(){
                    if(OG_commonBaseFunc.memberInfo() == false){
                        setTimeout(memberDataCall,300);
                    }else{
                        //회원 데이터 끝났을때 동작할 함수
                        let OG_MEMBER_CALL_END = new CustomEvent("OGMemberCall",{'detail': OG_MEMBER_OBJ}); /* 멤버 정보 호출 완료 */
                        document.body.dispatchEvent(OG_MEMBER_CALL_END);
                    };
                })();
            }else{
                //회원 데이터 끝났을때 동작할 함수
                let OG_MEMBER_CALL_END = new CustomEvent("OGMemberCall",{'detail' : 'guest-member'}); /* 멤버 정보 호출 완료 */
                document.body.dispatchEvent(OG_MEMBER_CALL_END);
            };
        };

        OGmcustomScrollbar();
        OG_commonBaseFunc.cssVarSet(isPopupPage);
        OGBaseScroll.stickySet();
        window['oldURL'] = null;
        window['oldResponseText'] = null;

    },
    memberStateLayoutFix : function(){
        //회원/비회원 class (Layout_statelogoff/Layout_statelogon 모듈 사용 불가 시 사용)
        if(OG_MEMBER_CHECK){
            OG$('.og_statelogoff').remove();
            OG$('.og_statelogoff2').addClass('displaynone');
            OG$('.og_statelogoff3').addClass('layout_hidden');

            OG$('[class*="nm_return_btn"]').each(function(){
                var $this = OG$(this);
                $this.removeClass('nm_return_btn nm_return_btn2 nm_return_btn3');
            });
        }else{
            OG$('.og_statelogon').remove();
            OG$('.og_statelogon2').addClass('displaynone');
            OG$('.og_statelogon3').addClass('layout_hidden');

            //type1 현재 링크를 return url로 넣기
            OG$('.nm_return_btn').each(function(){
                var $this = OG$(this);
                var oriLink = $this.attr('href');
                $this.attr('href',oriLink+'?returnUrl='+OG_LOCATION_HREF.split(OG_LOCATION_HOSTNAME)[1]);
            });

            //type2 현재 링크를 주소줄에 있는 return Url값으로 넣기
            OG$('.nm_return_btn2').each(function(){
                if(OG_LOCATION_HREF.indexOf('returnUrl=') > -1){
                    var $this = OG$(this);
                    var oriLink = $this.attr('href');
                    var returnUrlLink = OG_LOCATION_HREF.split('returnUrl=')[1];
                    $this.attr('href',oriLink+'?returnUrl='+returnUrlLink);
                };
            });

            //type3 현재 링크를 주소줄에 있는 return Url값으로 넣기 + 로그인 페이지로 보내기
            OG$('.nm_return_btn3').each(function(){
                var $this = OG$(this);
                var oriLink = $this.attr('href');
                $this.attr('href','/member/login.html?returnUrl='+oriLink);
            });
        };
    },
    connectEvent : function(){
        //토클 클릭
        OG$(document).on('click', '.base_form_toggle > .title', function(e){
            // input/label 등 요소 클릭 시에는 열림/닫힘 기능하지 않게 수정
            if(e.target.tagName =='INPUT'|| e.target.tagName =='LABEL') return;
            if(OG$(this).closest('.base_form_toggle').hasClass('on') && OG$(this).closest('.base_form_toggle').hasClass('fixed') == false){
                OG$(this).closest('.base_form_toggle').removeClass('on');
            }else{
                if(OG$(this).closest('.base_form_toggle').hasClass('fixed') == false){
                    OG$(this).closest('.base_form_toggle').addClass('on');
                };
            };
        });
        //탭바 클릭
        OG$(document).on('click', '.tabbar_header li ', function(){
            var $this = OG$(this);
            var triggerClick = $this.data('click');
            $this.addClass('selected');
            $this.closest('.tabbar_container').find('.tabbar_header li').not($this).removeClass('selected');
            if(triggerClick){
                if(triggerClick.indexOf(',') > -1){
                    triggerClick = triggerClick.split(',');
                    triggerClick.forEach(function(e,i){
                        EC$(e).trigger('click');
                    });
                }else{
                    EC$(triggerClick).trigger('click');
                };
            };
            $this.closest('.tabbar_header').attr('data-selected',$this.index());
        });
    },
    cssVarSet : function(isPopupPage){
        if(isPopupPage == 0){
            if(OG_vh == 0 || Math.abs(OG_vh - (window.innerHeight * 0.01)) > 3){
                OG_vh = window.innerHeight * 0.01;
                document.querySelector(':root').style.setProperty("--vh", OG_vh +"px"); /* 1vh 값 */
            };
            OG_vh2 = window.innerHeight * 0.01;
            document.querySelector(':root').style.setProperty("--vh2", OG_vh2 +"px"); /* 1vh 값2 */
            OG_vw = window.innerWidth * 0.01;
            if(typeof OGSetPropertyArray !== 'undefined'){
                OGSetPropertyArray.forEach(function(e,i){
                    var name = e.name;
                    var $el = OG$(e.element);
                    window['OG_'+name] = ($el.length > 0) ? $el.outerHeight() : 0;
                    document.querySelector(':root').style.setProperty('--' + name, window['OG_'+name] + 'px');
                });
            };
            document.querySelector(':root').style.setProperty("--vw", OG_vw +"px"); /* 1vw 값 */
        }else{
            OG_vh = top.window.innerHeight * 0.01;
            OG_vw = top.window.innerWidth * 0.01;
            document.querySelector(':root').style.setProperty("--vh", OG_vh +"px"); /* 1vh 값 */
            document.querySelector(':root').style.setProperty("--vw", OG_vw +"px"); /* 1vw 값 */
            if(typeof OGSetPropertyArray !== 'undefined'){
                OGSetPropertyArray.forEach(function(e,i){
                    var name = e.name;
                    var $el = OG$(topDocument).find(e.element);
                    window['OG_'+name] = ($el.length > 0) ? $el.outerHeight() : 0;
                    document.querySelector(':root').style.setProperty('--' + name, window['OG_'+name] + 'px');
                });
            };
        };
    },
    memberInfo : function(){
        OG_MEMBER_ID = CAPP_ASYNC_METHODS.member.__sMemberId;
        if(OG_MEMBER_ID == null){
            return false;
        };
        OG_MEMBER_NAME = CAPP_ASYNC_METHODS.member.__sName;
        OG_MEMBER_NICKNAME = CAPP_ASYNC_METHODS.member.__sNickName;
        OG_MEMBER_GROUPNAME = CAPP_ASYNC_METHODS.member.__sGroupName;
        OG_MEMBER_GROUPNO = CAPP_ASYNC_METHODS.member.__sGroupNo;
        OG_MEMBER_EMAIL = CAPP_ASYNC_METHODS.member.__sEmail;
        OG_MEMBER_PHONE = CAPP_ASYNC_METHODS.member.__sPhone;
        OG_MEMBER_CELLPHONE = CAPP_ASYNC_METHODS.member.__sCellphone;
        OG_MEMBER_BIRTHDAY = CAPP_ASYNC_METHODS.member.__sBirthday;
        OG_MEMBER_BOARDWRITENAME = CAPP_ASYNC_METHODS.member.__sBoardWriteName;
        OG_MEMBER_ADDITIONALINFOMATION = CAPP_ASYNC_METHODS.member.__sAdditionalInformation;
        OG_MEMBER_CREATEDATE = CAPP_ASYNC_METHODS.member.__sCreatedDate;
        OG_MEMBER_NAME_MILEAGE = (typeof sMileageName === 'undefined') ? null : sMileageName;
        if(typeof sMileageUnit !== 'undefined'){
            OG_MEMBER_UNIT_MILEAGE = (sMileageUnit.indexOf(']')>-1) ? sMileageUnit.split(']')[1].trim() : sMileageUnit;
        }
        OG_MEMBER_AVAIL_MILEAGE = CAPP_ASYNC_METHODS.Mileage.__sAvailMileage;
        OG_MEMBER_UNAVAIL_MILEAGE = CAPP_ASYNC_METHODS.Mileage.__sUnavailMileage;
        OG_MEMBER_RETURN_MILEAGE = CAPP_ASYNC_METHODS.Mileage.__sReturnedMileage;
        OG_MEMBER_TOTAL_MILEAGE = CAPP_ASYNC_METHODS.Mileage.__sTotalMileage;
        OG_MEMBER_USED_MILEAGE = CAPP_ASYNC_METHODS.Mileage.__sUsedMileage;
        OG_MEMBER_COUPON_COUNT = CAPP_ASYNC_METHODS.Couponcnt.__iCouponCount;
        OG_MEMBER_ORDER_COUNT = CAPP_ASYNC_METHODS.Order.__iOrderCount;
        if(CAPP_ASYNC_METHODS.Order.__iOrderTotalPrice != null){
            OG_MEMBER_ORDER_TOTAL = (CAPP_ASYNC_METHODS.Order.__iOrderTotalPrice.indexOf('원') > -1) ? CAPP_ASYNC_METHODS.Order.__iOrderTotalPrice.replace('원','') : CAPP_ASYNC_METHODS.Order.__iOrderTotalPrice;
        }
        OG_MEMBER_ORDER_INCREASEVALUE = CAPP_ASYNC_METHODS.Order.__iGradeIncreaseValue;
        OG_MEMBER_ACC_DEPOSIT = CAPP_ASYNC_METHODS.Deposit.__sAllDeposit;
        OG_MEMBER_USED_DEPOSIT = CAPP_ASYNC_METHODS.Deposit.__sUsedDeposit;
        OG_MEMBER_RETURN_DEPOSIT = CAPP_ASYNC_METHODS.Deposit.__sRefundWaitDeposit;
        OG_MEMBER_AVAIL_DEPOSIT = CAPP_ASYNC_METHODS.Deposit.__sTotalDeposit;
        OG_MEMBER_TOTAL_DEPOSIT = CAPP_ASYNC_METHODS.Deposit.__sMemberTotalDeposit;
        OG_MEMBER_NAME_DEPOSIT = sDepositName;
        OG_MEMBER_UNIT_DEPOSIT = sDepositUnit;
        if(typeof sDepositUnit !== 'undefined'){
            OG_MEMBER_UNIT_DEPOSIT = (sDepositUnit.indexOf(']')>-1) ? sDepositUnit.split(']')[1].trim() : sDepositUnit;
        }
        OG_MEMBER_OBJ = {
            'OG_MEMBER_ID' : OG_MEMBER_ID,
            'OG_MEMBER_NAME' : OG_MEMBER_NAME ,
            'OG_MEMBER_NICKNAME' : OG_MEMBER_NICKNAME ,
            'OG_MEMBER_GROUPNAME' : OG_MEMBER_GROUPNAME ,
            'OG_MEMBER_GROUPNO' : OG_MEMBER_GROUPNO ,
            'OG_MEMBER_EMAIL' : OG_MEMBER_EMAIL ,
            'OG_MEMBER_PHONE' : OG_MEMBER_PHONE ,
            'OG_MEMBER_CELLPHONE' : OG_MEMBER_CELLPHONE ,
            'OG_MEMBER_BIRTHDAY' : OG_MEMBER_BIRTHDAY  ,
            'OG_MEMBER_BOARDWRITENAME' : OG_MEMBER_BOARDWRITENAME  ,
            'OG_MEMBER_ADDITIONALINFOMATION' : OG_MEMBER_ADDITIONALINFOMATION  ,
            'OG_MEMBER_CREATEDATE' : OG_MEMBER_CREATEDATE ,
            'OG_MEMBER_NAME_MILEAGE' : OG_MEMBER_NAME_MILEAGE ,
            'OG_MEMBER_UNIT_MILEAGE' : OG_MEMBER_UNIT_MILEAGE,
            'OG_MEMBER_AVAIL_MILEAGE' : OG_MEMBER_AVAIL_MILEAGE ,
            'OG_MEMBER_UNAVAIL_MILEAGE' : OG_MEMBER_UNAVAIL_MILEAGE ,
            'OG_MEMBER_RETURN_MILEAGE' : OG_MEMBER_RETURN_MILEAGE ,
            'OG_MEMBER_TOTAL_MILEAGE' : OG_MEMBER_TOTAL_MILEAGE ,
            'OG_MEMBER_USED_MILEAGE' : OG_MEMBER_USED_MILEAGE ,
            'OG_MEMBER_COUPON_COUNT' : OG_MEMBER_COUPON_COUNT ,
            'OG_MEMBER_ORDER_COUNT' : OG_MEMBER_ORDER_COUNT ,
            'OG_MEMBER_ORDER_TOTAL' : OG_MEMBER_ORDER_TOTAL ,
            'OG_MEMBER_ORDER_INCREASEVALUE' : OG_MEMBER_ORDER_INCREASEVALUE,
            'OG_MEMBER_NAME_DEPOSIT' : OG_MEMBER_NAME_DEPOSIT,
            'OG_MEMBER_UNIT_DEPOSIT' : OG_MEMBER_UNIT_DEPOSIT,
            'OG_MEMBER_ACC_DEPOSIT' : CAPP_ASYNC_METHODS.Deposit.__sAllDeposit,
            'OG_MEMBER_USED_DEPOSIT' : CAPP_ASYNC_METHODS.Deposit.__sUsedDeposit,
            'OG_MEMBER_RETURN_DEPOSIT' : CAPP_ASYNC_METHODS.Deposit.__sRefundWaitDeposit,
            'OG_MEMBER_AVAIL_DEPOSIT' : CAPP_ASYNC_METHODS.Deposit.__sTotalDeposit,
            'OG_MEMBER_TOTAL_DEPOSIT' : CAPP_ASYNC_METHODS.Deposit.__sMemberTotalDeposit
        };
        Object.keys(OG_MEMBER_OBJ).forEach(function(el){
            let txt = (typeof OG_MEMBER_OBJ[el] === 'object') ? '' : String(OG_MEMBER_OBJ[el]);
            if(txt){
                var Numbercheck = /[^0-9]/g;
                if(OG_util.removeNumbFunc(txt).trim() == '.' && Numbercheck.test(txt) && txt !== '.'){
                    var chk = OG_util.comma(Math.floor(txt));
                    if(isNaN(txt)){
                        OG$('.' + el).text(txt);
                    }else{
                        OG$('.' + el).text(chk);
                    }
                }else{
                    OG$('.' + el).text(txt);
                };
            };
        });
        if(OG_MEMBER_GROUPNO == '' && OG_MEMBER_CHECK){
            OG$('.og_board_admin').removeClass('displaynone');
        };
    },
    ieLeave : function(){

    },
};


var OGBaseScroll = OGBaseScroll || {
    delta : 0,
    didScroll : null,
    direction : null,
    amount : null,
    st :  null,
    lastSt : null,
    stickyActiveHeight : null,
    stickySet : function(){
        let stickyHeight = 0;
        var $OGsticky = document.querySelectorAll('.og_sticky');
        if($OGsticky.length > 0){
            var $OGsticky = OG$('.og_sticky');
            let OGStickyPositionArray = [];
            let OGStickyHeightArray = [];
            OGBaseScroll.stickyActOGeHeight = 0;
            $OGsticky.each(function(i,e){
                let $e = OG$(e);
                let boundingClientRect = e.getBoundingClientRect();
                let height = boundingClientRect.height;
                let top = boundingClientRect.y;
                let stickyChk = parseInt($e.css('top'), 10);
                let dataStart = $e.attr('data-ogsticky-start');
                if(top < 0 && stickyChk == 0){
                    return false;
                }else{
                    var pass = false;
                    if(typeof dataStart !== 'undefined'){
                        if(dataStart.indexOf('auto') > -1){
                            let autoTop = OGStickyPositionArray.reduce(function(acc,el,idx,arr){
                                if(idx < arr.length-1){
                                    if(arr[idx+1] != el){
                                        acc = acc + Math.abs(OGStickyHeightArray[idx]);
                                    };
                                }else{
                                    acc = acc + Math.abs(OGStickyHeightArray[idx]);
                                };
                                return acc;
                            },0);
                            $e.css('top', autoTop);
                        };
                        if(dataStart === 'auto-once'){
                            $e.removeAttr('data-ogsticky-start');
                        }else if(dataStart == '1'){
                            pass = true;
                        }
                    };
                    OGStickyHeightArray.push(height);
                    if(pass != true){
                        if(top < stickyChk){
                            $e.addClass('scroll_max').removeClass('scroll_fixed');
                            OGStickyHeightArray.splice(i,1,-1*OGStickyHeightArray[i]);
                        }else{
                            if(top == stickyChk){
                                let chk = true;
                                let filter = $OGsticky.filter(function(idx, el) {
                                    if(OGStickyPositionArray[idx] == stickyChk){
                                        let offsetParent1 = el.offsetParent;
                                        let offsetParent2 =   e.offsetParent;
                                        let zIndex1 = 0;
                                        let zIndex2 =  0;
                                        if(offsetParent1 == offsetParent2){
                                            zIndex1 = Number(OG$(el).css('zIndex'));
                                            zIndex2 =  OG$(e).css('zIndex');
                                        }else{
                                            zIndex1 = Number(OG$(offsetParent1).css('zIndex'));
                                            zIndex2 =  OG$(offsetParent2).css('zIndex');
                                        };
                                        zIndex1 = (isNaN(zIndex1)) ? 0 : zIndex1;
                                        zIndex2 = (isNaN(zIndex2)) ? 0 : zIndex2;
                                        if(zIndex1 <= zIndex2){
                                            OG$(el).addClass('scroll_max');
                                            OGStickyHeightArray.splice(idx,1,-1*OGStickyHeightArray[idx]);
                                            return true;
                                        }else{
                                            chk = false;
                                        };
                                    };
                                });
                                if(chk != false){
                                    if(OGBaseScroll.st > 0){
                                        $e.removeClass('scroll_max').addClass('scroll_fixed');
                                    }else{
                                        $e.removeClass('scroll_max scroll_fixed');
                                    };
                                }else{
                                    OGStickyHeightArray.splice(i,1,-1*OGStickyHeightArray[i]);
                                };
                            }else{
                                $e.removeClass('scroll_max scroll_fixed');
                                OGStickyHeightArray.splice(i,1,-1*OGStickyHeightArray[i]);
                            };
                        };
                    }
                    OGStickyPositionArray.push(stickyChk);
                }
            });
            OGBaseScroll.stickyActiveHeight = OGStickyHeightArray.reduce(function(acc,el){
                if(el > 0){
                    acc = acc + el;
                };
                return acc;
            },0);
            OG_topHeight = OGBaseScroll.stickyActiveHeight;
            document.querySelector(':root').style.setProperty("--topHeight", OG_topHeight +"px");
        }
    },
    fix : function(){
        if(OGBaseScroll.st > 0){
            OG$('.og_sticky[data-ogsticky-start="1"]').addClass('scroll_fixed');
        }else{
            OG$('.og_sticky[data-ogsticky-start="1"]').removeClass('scroll_fixed scroll_max');
        };
    },
    scrollUp : function(){
        OG$('html, .og_sticky').addClass('scroll_up').removeClass('scroll_down');
        OGBaseScroll.direction = 'up';
    },
    scrollDown : function(){
        OG$('html, .og_sticky').addClass('scroll_down').removeClass('scroll_up');
        OGBaseScroll.direction = 'down';
    },
    infoUpdate : function(){
        OGBaseScroll.amount = OGBaseScroll.lastSt - OGBaseScroll.st;
        OGBaseScroll.lastSt = OGBaseScroll.st;
        OGBaseScroll.stickySet();
    },
    execute : function(){
        if(Math.abs(OGBaseScroll.lastSt - OGBaseScroll.st) <= OGBaseScroll.delta){
            OGBaseScroll.didScroll = false;
            return;
        };
        OGBaseScroll.didScroll = true;
        OGBaseScroll.basic();
    },
    basic : function(){
        OGBaseScroll.fix();
        if(OGBaseScroll.lastSt > OGBaseScroll.st){
            OGBaseScroll.scrollUp();
        }else{
            OGBaseScroll.scrollDown();
        };
        OGBaseScroll.infoUpdate();
    }
};

let OG_responsiveChk= '';
let OG_responsiveChk_before = '';
( OGresponsivChkFunc = function(){
    let windowWidth = OG$(window).outerWidth();
    if(windowWidth <= 1366 && windowWidth > 767){
        OG_responsiveChk = 'tablet'
    }else if(windowWidth >= 1367){
        OG_responsiveChk = 'pc'
    }else{
        OG_responsiveChk = 'mobile';
    }
    if(OG_responsiveChk_before !== OG_responsiveChk && OG_responsiveChk_before !== ''){
        //location.reload();
    }
    OG_responsiveChk_before = OG_responsiveChk;
    return OG_responsiveChk;
})();


/**
 * 문서 이벤트
 * - og_common.js에서 함수 호출하여 사용 (서브페이지의 js보다 먼저 실행이 필요할때 사용)
 * @ OGreadyBefore {event} document.ready(DOMContentLoaded)보다 빠름
 * @ OGready {event} document.ready(DOMContentLoaded)
 * @ OGloadBefore {event} window.load(load)보다 빠름
 * @ OGload {event} window.load
 * @ OGbeforeunload {event} 사용자 페이지 이탈 중
 * @ OGunload {event} 사용자 페이지 이탈
 */
var OGbeforeUnloadFlag = false;
document.addEventListener("readystatechange", function (e) {
    switch (document.readyState) {
        case "interactive":
            let e = new CustomEvent("OGreadyBefore");
            document.body.dispatchEvent(e);
            break;
        case "complete":
            let t = new CustomEvent("OGloadBefore");
            document.body.dispatchEvent(t);
    }
}), window.addEventListener("DOMContentLoaded", function (e) {
    let z = new CustomEvent("OGResponsive");
    document.body.dispatchEvent(z);
    let t = new CustomEvent("OGready");
    document.body.dispatchEvent(t);
}), window.addEventListener("load", function (e) {
    let t = new CustomEvent("OGload");
    document.body.dispatchEvent(t)
}), window.addEventListener("beforeunload", function (e) {
    let t = new CustomEvent("OGbeforeunload");
    OGbeforeUnloadFlag = true;
    document.body.dispatchEvent(t);
}), document.addEventListener("visibilitychange", function (e) {
    if (document.visibilityState === 'visible') {
        let t = new CustomEvent("OGVisible");
        document.body.dispatchEvent(t);
    } else if(document.visibilityState === 'hidden') {
        if(OGbeforeUnloadFlag){
            let t = new CustomEvent("OGunload");
            document.body.dispatchEvent(t, {cancelable: true, bubbles: true});
        }else{
            let t = new CustomEvent("OGNotvisible");
            document.body.dispatchEvent(t);
        }
    }
}), window.addEventListener("scroll", OG_util.throttle(function (e) {
    var t = window.pageYOffset;
    if (parseInt(OG$("html").css("top"), 10) < 0);
    else {
        OGBaseScroll.st = t;
        let e = new CustomEvent("OGScroll", {
            detail: OGBaseScroll
        });
        document.body.dispatchEvent(e)
    }
}, 100)), window.addEventListener("scroll", OG_util.debounce(function (e) {
    var t = window.pageYOffset;
    if (parseInt(OG$("html").css("top"), 10) < 0);
    else {
        OGBaseScroll.st = t;
        let e = new CustomEvent("OGScroll", {
            detail: OGBaseScroll
        });
        document.body.dispatchEvent(e)
    }
}, 200)), window.addEventListener("resize", function () {
    OG_commonBaseFunc.cssVarSet(isPopupPage)
});


OG$(window).resize(function(){
    OGresponsivChkFunc();
    let t = new CustomEvent("OGResponsive");
    document.body.dispatchEvent(t);
});

/* 상품상세 페이지 할인율 계산 */


function getSellPriceFromDOM() {
    var txt = $('.og_prc_sell').first().text();
    if (!txt) return 0;
    return OG_util.onlyNumbFunc(txt);
}


$(window).on('load', function () {

    if (location.pathname.indexOf('/product/detail.html') === -1) return;

    var $wrap = $('#benefit-coupon-wrap');
    var $gradeDL = $wrap.find('dl.grade-dl');
    var $totalPriceEl = $wrap.find('.total-benefit-price');

    $gradeDL.hide();

    var $ratioEl = $('.price_wrap .discount_ratio .desc');
    if ($ratioEl.length === 0) return;

    var discountRate = parseInt($ratioEl.first().text(), 10);
    if (isNaN(discountRate)) return;

    // 20%는 상품 할인 → 등급 할인 UI 미노출
    if (discountRate === 20) return;

    var basePrice = getSellPriceFromDOM();
    if (!basePrice || basePrice <= 0) return;

    var gradeDiscountPrice = Math.floor(basePrice * (discountRate / 100));

    var newMemberPrice = 10000;

    var totalBenefitPrice = gradeDiscountPrice + newMemberPrice;
    if (totalBenefitPrice < 0) totalBenefitPrice = 0;

    $gradeDL.show();
    $gradeDL.find('dt').text('등급 할인 ' + discountRate + '%');
    $gradeDL.find('.grade-benefit-price')
        .text('-' + OG_util.comma(gradeDiscountPrice) + '원');

    $totalPriceEl.text(
        OG_util.comma(totalBenefitPrice) + '원'
    );
});
