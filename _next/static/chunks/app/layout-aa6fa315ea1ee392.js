(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{431:(e,t,r)=>{Promise.resolve().then(r.bind(r,5899)),Promise.resolve().then(r.t.bind(r,1356,23))},1234:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},1520:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(4355),o=r.n(n),a=r(4242),s=r.n(a)()(o());s.push([e.id,`@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}`,""]);let i=s},3370:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},a=[],s=0;s<e.length;s++){var i=e[s],c=n.base?i[0]+n.base:i[0],u=o[c]||0,d="".concat(c," ").concat(u);o[c]=u+1;var f=r(d),l={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==f)t[f].references++,t[f].updater(l);else{var p=function(e,t){var r=t.domAPI(t);return r.update(e),function(t){t?(t.css!==e.css||t.media!==e.media||t.sourceMap!==e.sourceMap||t.supports!==e.supports||t.layer!==e.layer)&&r.update(e=t):r.remove()}}(l,n);n.byIndex=s,t.splice(s,0,{identifier:d,updater:p,references:1})}a.push(d)}return a}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=r(a[s]);t[i].references--}for(var c=n(e,o),u=0;u<a.length;u++){var d=r(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},4141:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},4242:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r}).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);n&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]&&(d[1]="@media ".concat(d[2]," {").concat(d[1],"}")),d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},4355:e=>{"use strict";e.exports=function(e){return e[1]}},5899:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var n=r(3370),o=r.n(n),a=r(8633),s=r.n(a),i=r(4141),c=r.n(i),u=r(1234),d=r.n(u),f=r(8182),l=r.n(f),p=r(7205),v=r.n(p),m=r(1520),h={};h.styleTagTransform=v(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=l(),o()(m.A,h);let g=m.A&&m.A.locals?m.A.locals:void 0},7205:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},8182:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},8633:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){var n,o,a;n="",r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {")),(o=void 0!==r.layer)&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}"),(a=r.sourceMap)&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)},remove:function(){!function(e){if(null!==e.parentNode)e.parentNode.removeChild(e)}(t)}}}}},e=>{e.O(0,[356,441,255,358],()=>e(e.s=431)),_N_E=e.O()}]);