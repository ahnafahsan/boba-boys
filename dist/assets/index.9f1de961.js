var cc=Object.defineProperty,uc=Object.defineProperties;var hc=Object.getOwnPropertyDescriptors;var kr=Object.getOwnPropertySymbols;var dc=Object.prototype.hasOwnProperty,fc=Object.prototype.propertyIsEnumerable;var Rr=(n,e,t)=>e in n?cc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,qi=(n,e)=>{for(var t in e||(e={}))dc.call(e,t)&&Rr(n,t,e[t]);if(kr)for(var t of kr(e))fc.call(e,t)&&Rr(n,t,e[t]);return n},Gi=(n,e)=>uc(n,hc(e));const pc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};pc();function K(){}function Jo(n,e){for(const t in e)n[t]=e[t];return n}function Qo(n){return n()}function Nr(){return Object.create(null)}function Ct(n){n.forEach(Qo)}function In(n){return typeof n=="function"}function Me(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ti;function bt(n,e){return ti||(ti=document.createElement("a")),ti.href=e,n===ti.href}function _c(n){return Object.keys(n).length===0}function Xo(n,...e){if(n==null)return K;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function at(n,e,t){n.$$.on_destroy.push(Xo(e,t))}function nt(n,e,t){return n.set(t),e}function u(n,e){n.appendChild(e)}function x(n,e,t){n.insertBefore(e,t||null)}function M(n){n.parentNode.removeChild(n)}function zn(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function _(n){return document.createElement(n)}function Pe(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function B(n){return document.createTextNode(n)}function w(){return B(" ")}function Ms(){return B("")}function Ee(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function d(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function mc(n){return Array.from(n.childNodes)}function ce(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function gc(n,e,{bubbles:t=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(n,t,i,e),s}let Rn;function En(n){Rn=n}function Ai(){if(!Rn)throw new Error("Function called outside component initialization");return Rn}function yc(n){Ai().$$.on_mount.push(n)}function vc(n){Ai().$$.after_update.push(n)}function wc(n){Ai().$$.on_destroy.push(n)}function bc(){const n=Ai();return(e,t,{cancelable:i=!1}={})=>{const s=n.$$.callbacks[e];if(s){const r=gc(e,t,{cancelable:i});return s.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}function Ar(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const vn=[],Ue=[],oi=[],Or=[],Zo=Promise.resolve();let us=!1;function ea(){us||(us=!0,Zo.then(na))}function ta(){return ea(),Zo}function hs(n){oi.push(n)}const Ki=new Set;let ni=0;function na(){const n=Rn;do{for(;ni<vn.length;){const e=vn[ni];ni++,En(e),Ic(e.$$)}for(En(null),vn.length=0,ni=0;Ue.length;)Ue.pop()();for(let e=0;e<oi.length;e+=1){const t=oi[e];Ki.has(t)||(Ki.add(t),t())}oi.length=0}while(vn.length);for(;Or.length;)Or.pop()();us=!1,Ki.clear(),En(n)}function Ic(n){if(n.fragment!==null){n.update(),Ct(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(hs)}}const ai=new Set;let Nt;function Ht(){Nt={r:0,c:[],p:Nt}}function jt(){Nt.r||Ct(Nt.c),Nt=Nt.p}function te(n,e){n&&n.i&&(ai.delete(n),n.i(e))}function re(n,e,t,i){if(n&&n.o){if(ai.has(n))return;ai.add(n),Nt.c.push(()=>{ai.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}function ia(n,e){const t={},i={},s={$$scope:1};let r=n.length;for(;r--;){const o=n[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(t[l]=a[l],s[l]=1);n[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in t||(t[o]=void 0);return t}function sa(n){return typeof n=="object"&&n!==null?n:{}}function Ce(n){n&&n.c()}function we(n,e,t,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=n.$$;s&&s.m(e,t),i||hs(()=>{const l=r.map(Qo).filter(In);o?o.push(...l):Ct(l),n.$$.on_mount=[]}),a.forEach(hs)}function be(n,e){const t=n.$$;t.fragment!==null&&(Ct(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ec(n,e){n.$$.dirty[0]===-1&&(vn.push(n),ea(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function xe(n,e,t,i,s,r,o,a=[-1]){const l=Rn;En(n);const c=n.$$={fragment:null,ctx:null,props:r,update:K,not_equal:s,bound:Nr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Nr(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=t?t(n,e.props||{},(f,p,...g)=>{const m=g.length?g[0]:p;return c.ctx&&s(c.ctx[f],c.ctx[f]=m)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](m),h&&Ec(n,f)),p}):[],c.update(),h=!0,Ct(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const f=mc(e.target);c.fragment&&c.fragment.l(f),f.forEach(M)}else c.fragment&&c.fragment.c();e.intro&&te(n.$$.fragment),we(n,e.target,e.anchor,e.customElement),na()}En(l)}class De{$destroy(){be(this,1),this.$destroy=K}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!_c(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
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
 */const ra={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const k=function(n,e){if(!n)throw an(e)},an=function(n){return new Error("Firebase Database ("+ra.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const oa=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Cc=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),i.push(t[h],t[f],t[p],t[g])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(oa(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||f==null)throw Error();const p=r<<2|a>>4;if(i.push(p),c!==64){const g=a<<4&240|c>>2;if(i.push(g),f!==64){const m=c<<6&192|f;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},aa=function(n){const e=oa(n);return xs.encodeByteArray(e,!0)},la=function(n){return aa(n).replace(/\./g,"")},ds=function(n){try{return xs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tc(n){return ca(void 0,n)}function ca(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Sc(t)||(n[t]=ca(n[t],e[t]));return n}function Sc(n){return n!=="__proto__"}/**
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
 */class Oi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Fe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ds(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function kc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ua(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rc(){const n=Fe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ha(){return ra.NODE_ADMIN===!0}function Nc(){return typeof indexedDB=="object"}function Ac(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Oc="FirebaseError";class ln extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Oc,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Pc(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ln(s,a,i)}}function Pc(n,e){return n.replace(Mc,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Mc=/\{\$([^}]+)}/g;/**
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
 */function Nn(n){return JSON.parse(n)}function Oe(n){return JSON.stringify(n)}/**
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
 */const da=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Nn(ds(r[0])||""),t=Nn(ds(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},xc=function(n){const e=da(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Dc=function(n){const e=da(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ht(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function en(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function fs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function di(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function fi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Pr(r)&&Pr(o)){if(!fi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Pr(n){return n!==null&&typeof n=="object"}/**
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
 */function cn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function wn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function bn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class Lc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)i[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const p=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(p<<1|p>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):f<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const p=(s<<5|s>>>27)+c+l+h+i[f]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=p}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Fc(n,e){const t=new Uc(n,e);return t.subscribe.bind(t)}class Uc{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");$c(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Yi),s.error===void 0&&(s.error=Yi),s.complete===void 0&&(s.complete=Yi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $c(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yi(){}function Ls(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Wc=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,k(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Pi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function qe(n){return n&&n._delegate?n._delegate:n}class Dt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kt="[DEFAULT]";/**
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
 */class zc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Oi;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hc(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Bc(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bc(n){return n===kt?void 0:n}function Hc(n){return n.instantiationMode==="EAGER"}/**
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
 */class jc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));const Vc={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},qc=ue.INFO,Gc={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Kc=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Gc[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fs{constructor(e){this.name=e,this._logLevel=qc,this._logHandler=Kc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Yc=(n,e)=>e.some(t=>n instanceof t);let Mr,xr;function Jc(){return Mr||(Mr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qc(){return xr||(xr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fa=new WeakMap,ps=new WeakMap,pa=new WeakMap,Ji=new WeakMap,Us=new WeakMap;function Xc(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(gt(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&fa.set(t,n)}).catch(()=>{}),Us.set(e,n),e}function Zc(n){if(ps.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});ps.set(n,e)}let _s={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ps.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pa.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function eu(n){_s=n(_s)}function tu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Qi(this),e,...t);return pa.set(i,e.sort?e.sort():[e]),gt(i)}:Qc().includes(n)?function(...e){return n.apply(Qi(this),e),gt(fa.get(this))}:function(...e){return gt(n.apply(Qi(this),e))}}function nu(n){return typeof n=="function"?tu(n):(n instanceof IDBTransaction&&Zc(n),Yc(n,Jc())?new Proxy(n,_s):n)}function gt(n){if(n instanceof IDBRequest)return Xc(n);if(Ji.has(n))return Ji.get(n);const e=nu(n);return e!==n&&(Ji.set(n,e),Us.set(e,n)),e}const Qi=n=>Us.get(n);function iu(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=gt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(gt(o.result),l.oldVersion,l.newVersion,gt(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const su=["get","getKey","getAll","getAllKeys","count"],ru=["put","add","delete","clear"],Xi=new Map;function Dr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xi.get(e))return Xi.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=ru.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||su.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Xi.set(e,r),r}eu(n=>Gi(qi({},n),{get:(e,t,i)=>Dr(e,t)||n.get(e,t,i),has:(e,t)=>!!Dr(e,t)||n.has(e,t)}));/**
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
 */class ou{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(au(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function au(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ms="@firebase/app",Lr="0.7.24";/**
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
 */const $s=new Fs("@firebase/app"),lu="@firebase/app-compat",cu="@firebase/analytics-compat",uu="@firebase/analytics",hu="@firebase/app-check-compat",du="@firebase/app-check",fu="@firebase/auth",pu="@firebase/auth-compat",_u="@firebase/database",mu="@firebase/database-compat",gu="@firebase/functions",yu="@firebase/functions-compat",vu="@firebase/installations",wu="@firebase/installations-compat",bu="@firebase/messaging",Iu="@firebase/messaging-compat",Eu="@firebase/performance",Cu="@firebase/performance-compat",Tu="@firebase/remote-config",Su="@firebase/remote-config-compat",ku="@firebase/storage",Ru="@firebase/storage-compat",Nu="@firebase/firestore",Au="@firebase/firestore-compat",Ou="firebase",Pu="9.8.1";/**
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
 */const _a="[DEFAULT]",Mu={[ms]:"fire-core",[lu]:"fire-core-compat",[uu]:"fire-analytics",[cu]:"fire-analytics-compat",[du]:"fire-app-check",[hu]:"fire-app-check-compat",[fu]:"fire-auth",[pu]:"fire-auth-compat",[_u]:"fire-rtdb",[mu]:"fire-rtdb-compat",[gu]:"fire-fn",[yu]:"fire-fn-compat",[vu]:"fire-iid",[wu]:"fire-iid-compat",[bu]:"fire-fcm",[Iu]:"fire-fcm-compat",[Eu]:"fire-perf",[Cu]:"fire-perf-compat",[Tu]:"fire-rc",[Su]:"fire-rc-compat",[ku]:"fire-gcs",[Ru]:"fire-gcs-compat",[Nu]:"fire-fst",[Au]:"fire-fst-compat","fire-js":"fire-js",[Ou]:"fire-js-all"};/**
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
 */const pi=new Map,gs=new Map;function xu(n,e){try{n.container.addComponent(e)}catch(t){$s.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function tn(n){const e=n.name;if(gs.has(e))return $s.debug(`There were multiple attempts to register component ${e}.`),!1;gs.set(e,n);for(const t of pi.values())xu(t,n);return!0}function Ws(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Du={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Lt=new Bn("app","Firebase",Du);/**
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
 */class Lu{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const Hn=Pu;function Fu(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:_a,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});const s=pi.get(i);if(s){if(fi(n,s.options)&&fi(t,s.config))return s;throw Lt.create("duplicate-app",{appName:i})}const r=new jc(i);for(const a of gs.values())r.addComponent(a);const o=new Lu(n,t,r);return pi.set(i,o),o}function ma(n=_a){const e=pi.get(n);if(!e)throw Lt.create("no-app",{appName:n});return e}function yt(n,e,t){var i;let s=(i=Mu[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$s.warn(a.join(" "));return}tn(new Dt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Uu="firebase-heartbeat-database",$u=1,An="firebase-heartbeat-store";let Zi=null;function ga(){return Zi||(Zi=iu(Uu,$u,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(An)}}}).catch(n=>{throw Lt.create("storage-open",{originalErrorMessage:n.message})})),Zi}async function Wu(n){try{return(await ga()).transaction(An).objectStore(An).get(ya(n))}catch(e){throw Lt.create("storage-get",{originalErrorMessage:e.message})}}async function Fr(n,e){try{const i=(await ga()).transaction(An,"readwrite");return await i.objectStore(An).put(e,ya(n)),i.done}catch(t){throw Lt.create("storage-set",{originalErrorMessage:t.message})}}function ya(n){return`${n.name}!${n.options.appId}`}/**
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
 */const zu=1024,Bu=30*24*60*60*1e3;class Hu{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Vu(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ur();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Bu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ur(),{heartbeatsToSend:t,unsentEntries:i}=ju(this._heartbeatsCache.heartbeats),s=la(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ur(){return new Date().toISOString().substring(0,10)}function ju(n,e=zu){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),$r(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),$r(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Vu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nc()?Ac().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Wu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $r(n){return la(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function qu(n){tn(new Dt("platform-logger",e=>new ou(e),"PRIVATE")),tn(new Dt("heartbeat",e=>new Hu(e),"PRIVATE")),yt(ms,Lr,n),yt(ms,Lr,"esm2017"),yt("fire-js","")}qu("");var Gu="firebase",Ku="9.8.1";/**
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
 */yt(Gu,Ku,"app");function zs(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function va(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yu=va,wa=new Bn("auth","Firebase",va());/**
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
 */const Wr=new Fs("@firebase/auth");function li(n,...e){Wr.logLevel<=ue.ERROR&&Wr.error(`Auth (${Hn}): ${n}`,...e)}/**
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
 */function Je(n,...e){throw Bs(n,...e)}function et(n,...e){return Bs(n,...e)}function Ju(n,e,t){const i=Object.assign(Object.assign({},Yu()),{[e]:t});return new Bn("auth","Firebase",i).create(e,{appName:n.name})}function Bs(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return wa.create(n,...e)}function $(n,e,...t){if(!n)throw Bs(e,...t)}function it(n){const e="INTERNAL ASSERTION FAILED: "+n;throw li(e),new Error(e)}function ct(n,e){n||it(e)}/**
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
 */const zr=new Map;function st(n){ct(n instanceof Function,"Expected a class definition");let e=zr.get(n);return e?(ct(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zr.set(n,e),e)}/**
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
 */function Qu(n,e){const t=Ws(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(fi(r,e!=null?e:{}))return s;Je(s,"already-initialized")}return t.initialize({options:e})}function Xu(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(st);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ys(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Zu(){return Br()==="http:"||Br()==="https:"}function Br(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function eh(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zu()||kc()||"connection"in navigator)?navigator.onLine:!0}function th(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class jn{constructor(e,t){this.shortDelay=e,this.longDelay=t,ct(t>e,"Short delay should be less than long delay!"),this.isMobile=Ds()||ua()}get(){return eh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hs(n,e){ct(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ba{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const ih=new jn(3e4,6e4);function Vn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function qn(n,e,t,i,s={}){return Ia(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=cn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),ba.fetch()(Ea(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ia(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},nh),e);try{const s=new sh(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw es(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw es(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw es(n,"email-already-in-use",o);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ju(n,h,c);Je(n,h)}}catch(s){if(s instanceof ln)throw s;Je(n,"network-request-failed")}}async function Gn(n,e,t,i,s={}){const r=await qn(n,e,t,i,s);return"mfaPendingCredential"in r&&Je(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Ea(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Hs(n.config,s):`${n.config.apiScheme}://${s}`}class sh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(et(this.auth,"network-request-failed")),ih.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function es(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=et(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function rh(n,e){return qn(n,"POST","/v1/accounts:delete",e)}async function oh(n,e){return qn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Cn(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ah(n,e=!1){const t=qe(n),i=await t.getIdToken(e),s=js(i);$(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Cn(ts(s.auth_time)),issuedAtTime:Cn(ts(s.iat)),expirationTime:Cn(ts(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ts(n){return Number(n)*1e3}function js(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return li("JWT malformed, contained fewer than 3 sections"),null;try{const s=ds(t);return s?JSON.parse(s):(li("Failed to decode base64 JWT payload"),null)}catch(s){return li("Caught error parsing JWT payload as JSON",s),null}}function lh(n){const e=js(n);return $(e,"internal-error"),$(typeof e.exp!="undefined","internal-error"),$(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function On(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ln&&ch(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function ch({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class uh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ca{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cn(this.lastLoginAt),this.creationTime=Cn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _i(n){var e;const t=n.auth,i=await n.getIdToken(),s=await On(n,oh(t,{idToken:i}));$(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?fh(r.providerUserInfo):[],a=dh(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ca(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function hh(n){const e=qe(n);await _i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dh(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function fh(n){return n.map(e=>{var{providerId:t}=e,i=zs(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function ph(n,e){const t=await Ia(n,{},async()=>{const i=cn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Ea(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ba.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class Pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken!="undefined","internal-error"),$(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):lh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await ph(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Pn;return i&&($(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&($(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pn,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
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
 */function dt(n,e){$(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Mt{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=zs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ca(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await On(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ah(this,e)}reload(){return hh(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await _i(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await On(this,rh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,h;const f=(i=t.displayName)!==null&&i!==void 0?i:void 0,p=(s=t.email)!==null&&s!==void 0?s:void 0,g=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,I=(a=t.tenantId)!==null&&a!==void 0?a:void 0,b=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=t.createdAt)!==null&&c!==void 0?c:void 0,N=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:v,emailVerified:E,isAnonymous:T,providerData:R,stsTokenManager:O}=t;$(v&&O,e,"internal-error");const P=Pn.fromJSON(this.name,O);$(typeof v=="string",e,"internal-error"),dt(f,e.name),dt(p,e.name),$(typeof E=="boolean",e,"internal-error"),$(typeof T=="boolean",e,"internal-error"),dt(g,e.name),dt(m,e.name),dt(I,e.name),dt(b,e.name),dt(y,e.name),dt(N,e.name);const L=new Mt({uid:v,auth:e,email:p,emailVerified:E,displayName:f,isAnonymous:T,photoURL:m,phoneNumber:g,tenantId:I,stsTokenManager:P,createdAt:y,lastLoginAt:N});return R&&Array.isArray(R)&&(L.providerData=R.map(F=>Object.assign({},F))),b&&(L._redirectEventId=b),L}static async _fromIdTokenResponse(e,t,i=!1){const s=new Pn;s.updateFromServerResponse(t);const r=new Mt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await _i(r),r}}/**
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
 */class Ta{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ta.type="NONE";const Hr=Ta;/**
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
 */function ci(n,e,t){return`firebase:${n}:${e}:${t}`}class Jt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=ci(this.userKey,s.apiKey,r),this.fullPersistenceKey=ci("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Jt(st(Hr),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||st(Hr);const o=ci(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){const f=Mt._fromJSON(e,h);c!==r&&(a=f),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Jt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Jt(r,e,i))}}/**
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
 */function jr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ra(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Aa(e))return"Blackberry";if(Oa(e))return"Webos";if(Vs(e))return"Safari";if((e.includes("chrome/")||ka(e))&&!e.includes("edge/"))return"Chrome";if(Na(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Sa(n=Fe()){return/firefox\//i.test(n)}function Vs(n=Fe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ka(n=Fe()){return/crios\//i.test(n)}function Ra(n=Fe()){return/iemobile/i.test(n)}function Na(n=Fe()){return/android/i.test(n)}function Aa(n=Fe()){return/blackberry/i.test(n)}function Oa(n=Fe()){return/webos/i.test(n)}function Mi(n=Fe()){return/iphone|ipad|ipod/i.test(n)}function _h(n=Fe()){var e;return Mi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mh(){return Rc()&&document.documentMode===10}function Pa(n=Fe()){return Mi(n)||Na(n)||Oa(n)||Aa(n)||/windows phone/i.test(n)||Ra(n)}function gh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ma(n,e=[]){let t;switch(n){case"Browser":t=jr(Fe());break;case"Worker":t=`${jr(Fe())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Hn}/${i}`}/**
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
 */class yh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i.message})}}}/**
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
 */class vh{constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vr(this),this.idTokenSubscription=new Vr(this),this.beforeStateQueue=new yh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=st(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Jt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _i(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=th()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?qe(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&st(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await Jt.create(this,[st(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ma(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}}function xi(n){return qe(n)}class Vr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fc(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class qs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,t){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}async function wh(n,e){return qn(n,"POST","/v1/accounts:update",e)}/**
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
 */async function bh(n,e){return Gn(n,"POST","/v1/accounts:signInWithPassword",Vn(n,e))}/**
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
 */async function Ih(n,e){return Gn(n,"POST","/v1/accounts:signInWithEmailLink",Vn(n,e))}async function Eh(n,e){return Gn(n,"POST","/v1/accounts:signInWithEmailLink",Vn(n,e))}/**
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
 */class Mn extends qs{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Mn(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Mn(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return bh(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ih(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return wh(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Eh(e,{idToken:t,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qt(n,e){return Gn(n,"POST","/v1/accounts:signInWithIdp",Vn(n,e))}/**
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
 */const Ch="http://localhost";class Ft extends qs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=zs(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Ft(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Qt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Qt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qt(e,t)}buildRequest(){const e={requestUri:Ch,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cn(t)}return e}}/**
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
 */function Th(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sh(n){const e=wn(bn(n)).link,t=e?wn(bn(e)).deep_link_id:null,i=wn(bn(n)).deep_link_id;return(i?wn(bn(i)).link:null)||i||t||e||n}class Gs{constructor(e){var t,i,s,r,o,a;const l=wn(bn(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,h=(i=l.oobCode)!==null&&i!==void 0?i:null,f=Th((s=l.mode)!==null&&s!==void 0?s:null);$(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Sh(e);try{return new Gs(t)}catch{return null}}}/**
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
 */class un{constructor(){this.providerId=un.PROVIDER_ID}static credential(e,t){return Mn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Gs.parseLink(t);return $(i,"argument-error"),Mn._fromEmailAndCode(e,i.code,i.tenantId)}}un.PROVIDER_ID="password";un.EMAIL_PASSWORD_SIGN_IN_METHOD="password";un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kn extends xa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ft extends Kn{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";ft.PROVIDER_ID="facebook.com";/**
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
 */class pt extends Kn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ft._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return pt.credential(t,i)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
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
 */class _t extends Kn{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
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
 */class mt extends Kn{constructor(){super("twitter.com")}static credential(e,t){return Ft._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return mt.credential(t,i)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
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
 */async function kh(n,e){return Gn(n,"POST","/v1/accounts:signUp",Vn(n,e))}/**
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
 */class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Mt._fromIdTokenResponse(e,i,s),o=qr(i);return new Ut({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=qr(i);return new Ut({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function qr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class mi extends ln{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,mi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new mi(e,t,i,s)}}function Da(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?mi._fromErrorAndOperation(n,r,e,i):r})}async function Rh(n,e,t=!1){const i=await On(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ut._forOperation(n,"link",i)}/**
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
 */async function Nh(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await On(n,Da(i,s,e,n),t);$(r.idToken,i,"internal-error");const o=js(r.idToken);$(o,i,"internal-error");const{sub:a}=o;return $(n.uid===a,i,"user-mismatch"),Ut._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Je(i,"user-mismatch"),r}}/**
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
 */async function La(n,e,t=!1){const i="signIn",s=await Da(n,i,e),r=await Ut._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Ah(n,e){return La(xi(n),e)}async function Oh(n,e,t){const i=xi(n),s=await kh(i,{returnSecureToken:!0,email:e,password:t}),r=await Ut._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function Ph(n,e,t){return Ah(qe(n),un.credential(e,t))}function Mh(n,e,t,i){return qe(n).onAuthStateChanged(e,t,i)}function xh(n){return qe(n).signOut()}const gi="__sak";/**
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
 */class Fa{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gi,"1"),this.storage.removeItem(gi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Dh(){const n=Fe();return Vs(n)||Mi(n)}const Lh=1e3,Fh=10;class Ua extends Fa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dh()&&gh(),this.fallbackToPolling=Pa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);mh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fh):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Lh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ua.type="LOCAL";const Uh=Ua;/**
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
 */class $a extends Fa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$a.type="SESSION";const Wa=$a;/**
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
 */function $h(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Di{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Di(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await $h(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Di.receivers=[];/**
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
 */function Ks(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Wh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Ks("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tt(){return window}function zh(n){tt().location.href=n}/**
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
 */function za(){return typeof tt().WorkerGlobalScope!="undefined"&&typeof tt().importScripts=="function"}async function Bh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hh(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function jh(){return za()?self:null}/**
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
 */const Ba="firebaseLocalStorageDb",Vh=1,yi="firebaseLocalStorage",Ha="fbase_key";class Yn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Li(n,e){return n.transaction([yi],e?"readwrite":"readonly").objectStore(yi)}function qh(){const n=indexedDB.deleteDatabase(Ba);return new Yn(n).toPromise()}function vs(){const n=indexedDB.open(Ba,Vh);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(yi,{keyPath:Ha})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(yi)?e(i):(i.close(),await qh(),e(await vs()))})})}async function Gr(n,e,t){const i=Li(n,!0).put({[Ha]:e,value:t});return new Yn(i).toPromise()}async function Gh(n,e){const t=Li(n,!1).get(e),i=await new Yn(t).toPromise();return i===void 0?null:i.value}function Kr(n,e){const t=Li(n,!0).delete(e);return new Yn(t).toPromise()}const Kh=800,Yh=3;class ja{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Yh)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return za()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Di._getInstance(jh()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Bh(),!this.activeServiceWorker)return;this.sender=new Wh(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vs();return await Gr(e,gi,"1"),await Kr(e,gi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Gr(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Gh(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Li(s,!1).getAll();return new Yn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ja.type="LOCAL";const Jh=ja;/**
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
 */function Qh(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Xh(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=et("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Qh().appendChild(i)})}function Zh(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new jn(3e4,6e4);/**
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
 */function ed(n,e){return e?st(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ys extends qs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function td(n){return La(n.auth,new Ys(n),n.bypassAuthState)}function nd(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),Nh(t,new Ys(n),n.bypassAuthState)}async function id(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),Rh(t,new Ys(n),n.bypassAuthState)}/**
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
 */class Va{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return td;case"linkViaPopup":case"linkViaRedirect":return id;case"reauthViaPopup":case"reauthViaRedirect":return nd;default:Je(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sd=new jn(2e3,1e4);class Kt extends Va{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Kt.currentPopupAction&&Kt.currentPopupAction.cancel(),Kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=Ks();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,sd.get())};e()}}Kt.currentPopupAction=null;/**
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
 */const rd="pendingRedirect",ui=new Map;class od extends Va{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ui.get(this.auth._key());if(!e){try{const i=await ad(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ui.set(this.auth._key(),e)}return this.bypassAuthState||ui.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ad(n,e){const t=ud(e),i=cd(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function ld(n,e){ui.set(n._key(),e)}function cd(n){return st(n._redirectPersistence)}function ud(n){return ci(rd,n.config.apiKey,n.name)}async function hd(n,e,t=!1){const i=xi(n),s=ed(i,e),o=await new od(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const dd=10*60*1e3;class fd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pd(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!qa(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(et(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dd&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yr(e))}saveEventToCache(e){this.cachedEventUids.add(Yr(e)),this.lastProcessedEventTime=Date.now()}}function Yr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function qa({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pd(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qa(n);default:return!1}}/**
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
 */async function _d(n,e={}){return qn(n,"GET","/v1/projects",e)}/**
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
 */const md=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gd=/^https?/;async function yd(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _d(n);for(const t of e)try{if(vd(t))return}catch{}Je(n,"unauthorized-domain")}function vd(n){const e=ys(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!gd.test(t))return!1;if(md.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const wd=new jn(3e4,6e4);function Jr(){const n=tt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function bd(n){return new Promise((e,t)=>{var i,s,r;function o(){Jr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jr(),t(et(n,"network-request-failed"))},timeout:wd.get()})}if(!((s=(i=tt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=tt().gapi)===null||r===void 0)&&r.load)o();else{const a=Zh("iframefcb");return tt()[a]=()=>{gapi.load?o():t(et(n,"network-request-failed"))},Xh(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw hi=null,e})}let hi=null;function Id(n){return hi=hi||bd(n),hi}/**
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
 */const Ed=new jn(5e3,15e3),Cd="__/auth/iframe",Td="emulator/auth/iframe",Sd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rd(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Hs(e,Td):`https://${n.config.authDomain}/${Cd}`,i={apiKey:e.apiKey,appName:n.name,v:Hn},s=kd.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${cn(i).slice(1)}`}async function Nd(n){const e=await Id(n),t=tt().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:Rd(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sd,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=et(n,"network-request-failed"),a=tt().setTimeout(()=>{r(o)},Ed.get());function l(){tt().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Ad={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Od=500,Pd=600,Md="_blank",xd="http://localhost";class Qr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dd(n,e,t,i=Od,s=Pd){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ad),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Fe().toLowerCase();t&&(a=ka(c)?Md:t),Sa(c)&&(e=e||xd,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,m])=>`${p}${g}=${m},`,"");if(_h(c)&&a!=="_self")return Ld(e||"",a),new Qr(null);const f=window.open(e||"",a,h);$(f,n,"popup-blocked");try{f.focus()}catch{}return new Qr(f)}function Ld(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Fd="__/auth/handler",Ud="emulator/auth/handler";function Xr(n,e,t,i,s,r){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Hn,eventId:s};if(e instanceof xa){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",fs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Kn){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${$d(n)}?${cn(a).slice(1)}`}function $d({config:n}){return n.emulator?Hs(n,Ud):`https://${n.authDomain}/${Fd}`}/**
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
 */const ns="webStorageSupport";class Wd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wa,this._completeRedirectFn=hd,this._overrideRedirectResult=ld}async _openPopup(e,t,i,s){var r;ct((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Xr(e,t,i,ys(),s);return Dd(e,o,Ks())}async _openRedirect(e,t,i,s){return await this._originValidation(e),zh(Xr(e,t,i,ys(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(ct(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Nd(e),i=new fd(e);return t.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ns,{type:ns},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[ns];o!==void 0&&t(!!o),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yd(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pa()||Vs()||Mi()}}const zd=Wd;var Zr="@firebase/auth",eo="0.20.1";/**
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
 */class Bd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Hd(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jd(n){tn(new Dt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,l)=>{$(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ma(n)},h=new vh(a,l,c);return Xu(h,t),h})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),tn(new Dt("auth-internal",e=>{const t=xi(e.getProvider("auth").getImmediate());return(i=>new Bd(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yt(Zr,eo,Hd(n)),yt(Zr,eo,"esm2017")}/**
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
 */function Fi(n=ma()){const e=Ws(n,"auth");return e.isInitialized()?e.getImmediate():Qu(n,{popupRedirectResolver:zd,persistence:[Jh,Uh,Wa]})}jd("Browser");const qt=[];function Ga(n,e){return{subscribe:Ui(n,e).subscribe}}function Ui(n,e=K){let t;const i=new Set;function s(a){if(Me(n,a)&&(n=a,t)){const l=!qt.length;for(const c of i)c[1](),qt.push(c,n);if(l){for(let c=0;c<qt.length;c+=2)qt[c][0](qt[c+1]);qt.length=0}}}function r(a){s(a(n))}function o(a,l=K){const c=[a,l];return i.add(c),i.size===1&&(t=e(s)||K),a(n),()=>{i.delete(c),i.size===0&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}function Ka(n,e,t){const i=!Array.isArray(n),s=i?[n]:n,r=e.length<2;return Ga(t,o=>{let a=!1;const l=[];let c=0,h=K;const f=()=>{if(c)return;h();const g=e(i?l[0]:l,o);r?o(g):h=In(g)?g:K},p=s.map((g,m)=>Xo(g,I=>{l[m]=I,c&=~(1<<m),a&&f()},()=>{c|=1<<m}));return a=!0,f(),function(){Ct(p),h()}})}const Vd=JSON.parse(localStorage.getItem("basket"))||{},rt=Ui(Vd),vt=Ui({isloggedIn:!1,email:null});function qd(n){let e;return{c(){e=_("div"),e.innerHTML=`<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="320.000000pt" height="320.000000pt" viewBox="0 0 320.000000 320.000000" preserveAspectRatio="xMidYMid meet"><metadata>Created by potrace 1.10, written by Peter Selinger 2001-2011
   </metadata><g transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M1460 3044 c-511 -65 -922 -350 -1144 -793 -246 -490 -192 -1072 140
   -1517 25 -33 48 -60 53 -62 5 -2 12 13 15 32 6 30 0 43 -47 109 -162 226 -249
   504 -250 797 0 160 19 281 69 430 72 216 176 383 338 545 205 204 463 336 756
   387 119 20 355 15 480 -11 551 -116 964 -523 1085 -1071 26 -118 31 -375 10
   -501 -33 -202 -104 -380 -220 -553 -63 -95 -74 -126 -56 -155 18 -28 159 180
   234 346 82 181 120 370 119 588 -1 237 -43 417 -148 632 -194 395 -565 681
   -1002 773 -95 20 -350 34 -432 24z"></path><path d="M1514 2916 c-9 -25 0 -51 20 -54 26 -5 40 12 32 42 -7 29 -43 36 -52
   12z"></path><path d="M1680 2915 c-16 -19 -3 -55 20 -55 25 0 41 30 29 53 -12 21 -32 22
   -49 2z"></path><path d="M1382 2908 c-7 -7 -12 -20 -12 -30 0 -25 36 -59 55 -52 21 8 19 57
   -3 77 -22 20 -25 20 -40 5z"></path><path d="M1817 2902 c-22 -24 -22 -68 0 -77 19 -7 53 26 53 50 0 44 -26 57
   -53 27z"></path><path d="M1226 2864 c-8 -20 36 -99 60 -108 18 -7 44 10 44 29 0 6 -14 31 -30
   53 -31 44 -63 54 -74 26z"></path><path d="M1958 2863 c-8 -10 -23 -32 -33 -50 -15 -26 -16 -34 -6 -47 8 -9 19
   -16 26 -16 20 0 76 82 73 105 -4 26 -40 31 -60 8z"></path><path d="M1073 2814 c-8 -22 105 -136 132 -132 41 6 30 41 -31 95 -60 54 -90
   65 -101 37z"></path><path d="M2066 2777 c-61 -55 -72 -89 -31 -95 26 -3 137 103 133 126 -6 34
   -42 23 -102 -31z"></path><path d="M1470 2781 c-88 -28 -140 -60 -207 -123 -108 -104 -163 -253 -148
   -403 7 -73 25 -115 51 -115 23 0 27 24 14 98 -57 340 308 611 614 458 116 -58
   189 -139 226 -251 19 -57 22 -84 19 -178 -4 -109 -3 -112 18 -115 18 -3 24 4
   32 35 30 114 19 226 -35 340 -53 113 -191 225 -319 259 -70 19 -198 17 -265
   -5z"></path><path d="M922 2748 c-22 -22 -13 -37 44 -75 44 -29 59 -35 72 -26 32 20 19 46
   -38 80 -61 37 -62 37 -78 21z"></path><path d="M2242 2728 c-61 -35 -72 -52 -48 -76 15 -16 19 -15 61 7 59 31 82 57
   69 78 -16 26 -25 25 -82 -9z"></path><path d="M1097 2626 c-8 -20 19 -47 39 -39 22 8 13 47 -12 51 -12 2 -24 -4
   -27 -12z"></path><path d="M2097 2633 c-13 -12 -7 -41 10 -47 21 -9 46 16 37 37 -6 17 -35 23
   -47 10z"></path><path d="M754 2616 c-33 -24 -6 -43 128 -89 172 -60 181 -62 198 -42 22 26 -3
   41 -162 94 -123 41 -150 47 -164 37z"></path><path d="M2320 2579 c-80 -28 -152 -57 -160 -65 -12 -12 -12 -16 3 -31 16 -17
   25 -15 160 30 163 54 187 67 171 93 -6 10 -15 19 -20 20 -5 2 -74 -20 -154
   -47z"></path><path d="M1547 2613 c-4 -3 -7 -191 -7 -416 l0 -409 -32 6 c-142 29 -322 31
   -354 5 -19 -16 -21 -558 -2 -577 7 -7 37 -12 67 -12 40 0 65 -7 98 -25 23 -14
   43 -30 43 -36 0 -5 11 -14 24 -20 21 -10 30 -7 61 17 28 21 51 29 94 32 64 5
   104 -10 144 -54 31 -33 56 -26 82 22 38 70 147 106 225 74 60 -25 60 -23 60
   224 0 123 -3 231 -6 240 -5 13 -24 16 -98 16 -85 1 -198 18 -224 34 -9 5 -12
   121 -12 435 0 319 -3 430 -12 439 -13 13 -140 17 -151 5z m103 -453 c0 -220
   -3 -400 -7 -400 -5 0 -18 3 -30 6 l-23 6 0 387 c0 213 3 391 7 394 3 4 17 7
   30 7 l23 0 0 -400z m-430 -410 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5
   10 10 10 6 0 10 -4 10 -10z m180 -20 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10
   0 6 5 10 10 10 6 0 10 -4 10 -10z m40 -70 c0 -21 -24 -28 -35 -10 -8 14 3 30
   21 30 8 0 14 -9 14 -20z m410 -9 c0 -14 -18 -23 -30 -16 -6 4 -8 11 -5 16 8
   12 35 12 35 0z m-240 -21 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4
   10 6 0 11 -4 11 -10z m-223 -67 c-4 -3 -7 0 -7 7 0 7 3 10 7 7 3 -4 3 -10 0
   -14z m563 -23 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10
   -4 10 -10z m-220 -60 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10
   6 0 10 -4 10 -10z m-470 -30 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10
   11 10 2 0 4 -4 4 -10z m300 -34 c0 -21 -21 -31 -30 -15 -5 7 -6 17 -4 21 9 14
   34 9 34 -6z m350 -22 c0 -16 -16 -19 -25 -4 -8 13 4 32 16 25 5 -4 9 -13 9
   -21z m-620 -74 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10
   -4 10 -10z m140 -45 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8
   0 15 -7 15 -15z m257 -22 c-4 -3 -10 -3 -14 0 -3 4 0 7 7 7 7 0 10 -3 7 -7z"></path><path d="M566 2444 c-10 -27 13 -44 61 -44 50 0 69 23 38 46 -27 20 -91 18
   -99 -2z"></path><path d="M2575 2446 c-31 -23 -12 -46 38 -46 48 0 71 17 61 44 -8 20 -72 22
   -99 2z"></path><path d="M737 2433 c-13 -12 -7 -41 10 -47 21 -9 46 16 37 37 -6 17 -35 23
   -47 10z"></path><path d="M2459 2424 c-11 -14 -10 -18 6 -30 25 -18 32 -18 44 4 19 35 -24 57
   -50 26z"></path><path d="M852 2418 c-36 -36 -2 -54 121 -64 74 -6 85 -5 91 11 10 28 -10 42
   -72 49 -31 4 -73 9 -92 12 -21 3 -40 0 -48 -8z"></path><path d="M2268 2416 c-84 -13 -102 -23 -92 -51 6 -16 16 -17 91 -11 122 10
   157 28 121 64 -14 14 -17 14 -120 -2z"></path><path d="M825 2275 c-77 -7 -186 -16 -243 -20 -105 -7 -137 -20 -126 -50 8
   -19 40 -19 301 0 272 21 288 24 288 55 0 22 -5 25 -40 26 -22 1 -103 -4 -180
   -11z"></path><path d="M2203 2284 c-16 -7 -17 -40 -2 -50 11 -7 448 -44 528 -45 40 -1 60
   11 61 34 0 18 -57 27 -260 42 -118 8 -237 17 -265 20 -27 2 -56 2 -62 -1z"></path><path d="M400 2108 c-53 -121 -100 -353 -100 -498 0 -86 25 -256 51 -349 30
   -105 39 -122 63 -119 28 4 26 35 -8 163 -63 236 -47 531 40 745 27 67 24 100
   -7 100 -14 0 -26 -13 -39 -42z"></path><path d="M2502 2139 c2 -6 8 -10 13 -10 5 0 11 4 13 10 2 6 -4 11 -13 11 -9 0
   -15 -5 -13 -11z"></path><path d="M2765 2110 c-4 -6 5 -44 19 -84 14 -41 35 -120 47 -177 18 -90 20
   -126 16 -269 -4 -105 -12 -191 -23 -235 -23 -96 -24 -129 0 -133 27 -6 35 7
   57 89 49 189 47 427 -5 632 -33 129 -59 187 -85 187 -11 0 -23 -5 -26 -10z"></path><path d="M683 2084 c-9 -23 13 -40 32 -24 12 10 13 16 4 26 -15 18 -28 18 -36
   -2z"></path><path d="M565 2060 c-10 -30 21 -112 59 -156 l34 -39 -46 -25 c-129 -70 -164
   -230 -79 -357 77 -114 251 -135 359 -45 104 88 104 282 0 373 -34 31 -125 79
   -148 79 -6 0 -30 17 -53 38 -31 26 -47 53 -60 92 -13 41 -23 56 -39 58 -13 2
   -22 -4 -27 -18z m216 -255 c77 -27 129 -98 129 -174 0 -55 -15 -90 -57 -133
   -90 -93 -241 -66 -292 52 -35 81 -22 149 39 210 57 57 109 70 181 45z"></path><path d="M669 1736 c-38 -22 -59 -60 -59 -107 0 -33 6 -47 34 -75 29 -29 41
   -34 79 -34 106 0 154 121 78 194 -35 33 -94 43 -132 22z m97 -58 c36 -28 7
   -108 -39 -108 -28 0 -41 9 -56 37 -16 31 -14 41 13 68 24 24 55 25 82 3z"></path><path d="M844 2066 c-11 -29 7 -36 102 -36 75 0 94 -3 94 -14 0 -9 -12 -16
   -27 -18 -20 -2 -29 -9 -31 -26 -3 -18 2 -23 27 -28 l31 -6 0 -523 c0 -287 3
   -536 6 -553 l6 -30 -163 -4 c-142 -4 -169 -7 -204 -25 -50 -26 -80 -58 -100
   -105 -28 -69 -21 -95 43 -154 31 -30 60 -54 64 -54 4 0 14 24 22 53 31 104 69
   125 227 126 l65 1 49 -70 c127 -186 323 -290 549 -290 111 0 186 18 291 69
   118 58 230 162 280 260 l17 33 111 -7 c68 -4 121 -12 134 -21 29 -18 63 -85
   63 -124 0 -16 5 -30 10 -30 6 0 38 27 72 59 60 59 61 60 55 106 -6 57 -48 120
   -97 150 -31 18 -55 20 -213 23 -179 4 -179 4 -171 25 4 12 9 261 11 554 l4
   532 22 3 c32 4 31 52 0 56 -13 2 -23 10 -23 17 0 11 26 15 123 17 114 3 122 4
   122 23 0 20 -7 20 -325 20 -318 0 -325 0 -325 -20 0 -19 8 -20 170 -25 l170
   -5 3 -535 c1 -334 -1 -561 -8 -605 -27 -179 -174 -345 -357 -400 -83 -25 -152
   -28 -238 -10 -145 30 -263 112 -335 234 -73 122 -73 122 -78 551 -2 212 -1
   472 3 577 l7 193 192 2 c183 3 191 4 191 23 0 20 -8 20 -318 23 -271 2 -318 0
   -323 -12z m261 -1363 c75 -133 211 -241 351 -277 76 -20 211 -20 282 -2 151
   41 289 147 357 277 l38 72 174 -7 c96 -4 185 -12 199 -18 50 -23 82 -111 50
   -137 -11 -10 -19 -4 -38 30 -37 68 -70 79 -228 79 l-135 0 -30 -58 c-41 -79
   -144 -179 -232 -225 -183 -96 -376 -100 -559 -13 -93 44 -208 152 -254 237
   l-32 61 -138 -4 c-155 -3 -172 -10 -219 -81 -23 -34 -26 -36 -42 -21 -23 21
   -10 68 30 108 36 35 63 40 252 44 l136 4 38 -69z"></path><path d="M2585 2053 c-11 -47 -36 -101 -59 -122 -12 -11 -55 -36 -97 -55 -124
   -56 -182 -121 -195 -219 -8 -58 17 -142 56 -189 35 -42 54 -47 70 -19 8 16 5
   26 -15 49 -33 40 -47 78 -46 134 0 57 18 95 65 136 84 73 191 59 263 -34 24
   -32 28 -48 30 -107 2 -83 15 -103 45 -67 42 52 7 184 -68 249 -20 18 -47 37
   -59 43 l-23 10 34 45 c58 76 72 165 27 171 -17 3 -24 -3 -28 -25z"></path><path d="M2300 1951 c0 -24 25 -34 40 -16 15 18 5 35 -21 35 -12 0 -19 -7 -19
   -19z"></path><path d="M2684 1895 c-7 -18 3 -35 22 -35 20 0 30 30 13 41 -20 12 -29 11 -35
   -6z"></path><path d="M526 1881 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4
   -12 2 -15 -3z"></path><path d="M2410 1713 c-55 -50 -46 -153 16 -182 35 -16 96 -14 120 4 10 8 29
   15 42 15 21 0 30 19 15 34 -4 3 -8 27 -9 53 -1 39 -7 52 -33 75 -44 39 -108
   39 -151 1z m114 -39 c35 -34 8 -104 -40 -104 -20 0 -64 41 -64 60 0 4 9 19 21
   34 23 29 60 34 83 10z"></path><path d="M2538 1466 c-125 -52 -187 -104 -255 -218 -65 -107 -96 -333 -51
   -362 26 -16 196 9 282 42 118 46 286 173 286 216 0 26 -30 38 -98 38 l-70 0
   15 46 c9 26 15 87 16 139 1 131 -15 144 -125 99z m32 -55 c0 -4 -49 -63 -110
   -130 -60 -67 -126 -149 -146 -182 -21 -33 -39 -58 -40 -56 -2 2 3 30 11 62 32
   122 123 238 225 288 64 31 60 29 60 18z m40 -70 c0 -34 -25 -125 -46 -169 -41
   -84 -27 -95 75 -57 24 9 54 15 65 13 51 -8 -217 -168 -280 -168 -11 0 -6 7 16
   23 44 30 58 53 42 69 -10 10 -27 4 -83 -26 -38 -21 -73 -35 -76 -32 -11 10 74
   129 174 243 93 106 113 125 113 104z"></path><path d="M430 1460 c0 -5 7 -10 16 -10 8 0 12 5 9 10 -3 6 -10 10 -16 10 -5 0
   -9 -4 -9 -10z"></path><path d="M2737 1424 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z"></path><path d="M2234 1375 c-4 -9 -2 -21 4 -27 15 -15 44 -1 40 19 -4 23 -36 29 -44
   8z"></path><path d="M905 1360 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43
   7z"></path><path d="M497 1316 c-9 -22 19 -42 37 -26 19 15 10 40 -14 40 -10 0 -20 -6
   -23 -14z"></path><path d="M705 1286 c-41 -12 -85 -62 -85 -96 0 -13 -11 -19 -44 -24 -57 -9
   -104 -41 -128 -88 -68 -130 134 -253 307 -187 36 13 84 22 122 23 56 1 66 4
   94 33 127 126 -83 394 -266 339z m121 -70 c60 -28 108 -83 122 -139 13 -48 9
   -57 -22 -57 -30 0 -40 12 -65 81 -28 73 -54 97 -121 107 -51 8 -53 10 -30 20
   38 16 60 14 116 -12z m-44 -83 c9 -10 21 -36 28 -58 7 -22 23 -55 37 -72 18
   -25 20 -33 9 -33 -62 0 -176 107 -176 165 0 22 82 21 102 -2z m-155 -39 c6
   -15 -27 -58 -59 -75 -22 -12 -68 9 -68 31 0 45 111 84 127 44z m110 -150 c-19
   -19 -177 -15 -177 4 0 5 15 14 34 20 19 7 42 24 51 39 l17 26 41 -41 c23 -23
   38 -44 34 -48z"></path><path d="M1865 1166 c-54 -24 -85 -96 -48 -110 11 -4 27 5 48 29 48 51 94 43
   121 -21 16 -38 49 -46 59 -15 8 27 -19 86 -49 106 -35 23 -95 28 -131 11z"></path><path d="M1170 1147 c-14 -7 -25 -21 -25 -32 0 -17 8 -20 52 -23 46 -3 56 -7
   82 -39 19 -24 35 -34 45 -30 25 10 20 60 -9 91 -41 45 -97 57 -145 33z"></path><path d="M1527 1132 c-15 -2 -43 -19 -62 -38 -30 -30 -35 -41 -35 -82 0 -69
   40 -121 93 -122 38 0 35 24 -9 65 -31 29 -35 39 -29 62 13 54 42 65 123 48 28
   -6 32 -5 32 13 0 35 -55 61 -113 54z"></path><path d="M1695 1026 c-83 -37 -105 -137 -43 -203 91 -97 260 15 201 134 -33
   66 -100 96 -158 69z m90 -71 c14 -13 25 -33 25 -45 0 -26 -43 -70 -67 -70 -37
   0 -63 29 -63 70 0 66 59 92 105 45z"></path><path d="M2000 972 c-72 -36 -90 -135 -34 -193 34 -35 38 -36 52 -5 9 20 7 27
   -9 42 -36 33 -11 114 36 114 10 0 15 10 15 30 0 35 -11 37 -60 12z"></path><path d="M1218 963 c-15 -9 -34 -34 -44 -55 -15 -33 -15 -44 -5 -79 24 -80 92
   -116 164 -85 93 38 102 174 15 222 -32 18 -98 17 -130 -3z m106 -54 c47 -37
   22 -119 -36 -119 -31 0 -68 38 -68 71 0 28 39 69 65 69 7 0 24 -9 39 -21z"></path><path d="M2663 943 c-57 -61 -68 -113 -24 -113 12 0 32 17 51 44 34 50 37 68
   15 86 -12 10 -20 7 -42 -17z"></path><path d="M590 820 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20 -13
   0 -20 -7 -20 -20z"></path><path d="M1440 825 c-15 -18 -5 -35 21 -35 12 0 19 7 19 19 0 24 -25 34 -40
   16z"></path><path d="M1456 739 c-79 -69 -51 -181 52 -209 103 -27 187 83 137 180 -19 37
   -63 60 -114 60 -31 0 -49 -7 -75 -31z m107 -30 c50 -23 55 -93 8 -118 -30 -17
   -50 -13 -76 14 -33 32 -32 68 1 94 31 24 35 25 67 10z"></path><path d="M1777 741 c-49 -32 -61 -60 -58 -132 1 -14 10 -35 21 -47 17 -18 24
   -20 45 -10 24 11 34 28 16 28 -5 0 -14 13 -21 29 -9 23 -9 34 1 53 26 49 76
   53 111 8 l24 -31 19 21 c24 27 9 61 -38 83 -46 22 -85 21 -120 -2z"></path><path d="M1292 688 c-17 -17 -15 -32 6 -51 38 -34 91 -7 56 28 -27 27 -50 35
   -62 23z"></path><path d="M755 478 c-9 -37 -1 -44 119 -114 256 -150 537 -216 822 -194 214 16
   380 62 565 156 155 79 189 106 189 149 0 19 -2 35 -5 35 -2 0 -33 -20 -69 -45
   -87 -62 -272 -148 -381 -180 -270 -78 -569 -71 -839 19 -97 33 -243 106 -324
   162 -35 24 -65 44 -67 44 -2 0 -7 -14 -10 -32z"></path></g></svg>`,d(e,"class","flex w-12")},m(t,i){x(t,e,i)},p:K,i:K,o:K,d(t){t&&M(e)}}}class nn extends De{constructor(e){super(),xe(this,e,null,qd,Me,{})}}function Gd(n){let e,t;return{c(){e=Pe("svg"),t=Pe("path"),d(t,"fill-rule","evenodd"),d(t,"d","M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"),d(t,"clip-rule","evenodd"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"class","h-5 w-5"),d(e,"viewBox","0 0 20 20"),d(e,"fill","currentColor")},m(i,s){x(i,e,s),u(e,t)},p:K,i:K,o:K,d(i){i&&M(e)}}}class Kd extends De{constructor(e){super(),xe(this,e,null,Gd,Me,{})}}function Yd(n){let e,t;return{c(){e=Pe("svg"),t=Pe("path"),d(t,"fill-rule","evenodd"),d(t,"d","M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"),d(t,"clip-rule","evenodd"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"class","h-5 w-5"),d(e,"viewBox","0 0 20 20"),d(e,"fill","currentColor")},m(i,s){x(i,e,s),u(e,t)},p:K,i:K,o:K,d(i){i&&M(e)}}}class Jd extends De{constructor(e){super(),xe(this,e,null,Yd,Me,{})}}function Qd(n){let e,t;return{c(){e=Pe("svg"),t=Pe("path"),d(t,"fill-rule","evenodd"),d(t,"d","M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"),d(t,"clip-rule","evenodd"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"class","h-5 w-5"),d(e,"viewBox","0 0 20 20"),d(e,"fill","currentColor")},m(i,s){x(i,e,s),u(e,t)},p:K,i:K,o:K,d(i){i&&M(e)}}}class Xd extends De{constructor(e){super(),xe(this,e,null,Qd,Me,{})}}function Zd(n,e){if(n instanceof RegExp)return{keys:!1,pattern:n};var t,i,s,r,o=[],a="",l=n.split("/");for(l[0]||l.shift();s=l.shift();)t=s[0],t==="*"?(o.push("wild"),a+="/(.*)"):t===":"?(i=s.indexOf("?",1),r=s.indexOf(".",1),o.push(s.substring(1,~i?i:~r?r:s.length)),a+=!!~i&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(a+=(~i?"?":"")+"\\"+s.substring(r))):a+="/"+s;return{keys:o,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}function ef(n){let e,t,i;const s=[n[2]];var r=n[0];function o(a){let l={};for(let c=0;c<s.length;c+=1)l=Jo(l,s[c]);return{props:l}}return r&&(e=new r(o()),e.$on("routeEvent",n[7])),{c(){e&&Ce(e.$$.fragment),t=Ms()},m(a,l){e&&we(e,a,l),x(a,t,l),i=!0},p(a,l){const c=l&4?ia(s,[sa(a[2])]):{};if(r!==(r=a[0])){if(e){Ht();const h=e;re(h.$$.fragment,1,0,()=>{be(h,1)}),jt()}r?(e=new r(o()),e.$on("routeEvent",a[7]),Ce(e.$$.fragment),te(e.$$.fragment,1),we(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(a){i||(e&&te(e.$$.fragment,a),i=!0)},o(a){e&&re(e.$$.fragment,a),i=!1},d(a){a&&M(t),e&&be(e,a)}}}function tf(n){let e,t,i;const s=[{params:n[1]},n[2]];var r=n[0];function o(a){let l={};for(let c=0;c<s.length;c+=1)l=Jo(l,s[c]);return{props:l}}return r&&(e=new r(o()),e.$on("routeEvent",n[6])),{c(){e&&Ce(e.$$.fragment),t=Ms()},m(a,l){e&&we(e,a,l),x(a,t,l),i=!0},p(a,l){const c=l&6?ia(s,[l&2&&{params:a[1]},l&4&&sa(a[2])]):{};if(r!==(r=a[0])){if(e){Ht();const h=e;re(h.$$.fragment,1,0,()=>{be(h,1)}),jt()}r?(e=new r(o()),e.$on("routeEvent",a[6]),Ce(e.$$.fragment),te(e.$$.fragment,1),we(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(a){i||(e&&te(e.$$.fragment,a),i=!0)},o(a){e&&re(e.$$.fragment,a),i=!1},d(a){a&&M(t),e&&be(e,a)}}}function nf(n){let e,t,i,s;const r=[tf,ef],o=[];function a(l,c){return l[1]?0:1}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=Ms()},m(l,c){o[e].m(l,c),x(l,i,c),s=!0},p(l,[c]){let h=e;e=a(l),e===h?o[e].p(l,c):(Ht(),re(o[h],1,1,()=>{o[h]=null}),jt(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),te(t,1),t.m(i.parentNode,i))},i(l){s||(te(t),s=!0)},o(l){re(t),s=!1},d(l){o[e].d(l),l&&M(i)}}}function to(){const n=window.location.href.indexOf("#/");let e=n>-1?window.location.href.substr(n+1):"/";const t=e.indexOf("?");let i="";return t>-1&&(i=e.substr(t+1),e=e.substr(0,t)),{location:e,querystring:i}}const Js=Ga(null,function(e){e(to());const t=()=>{e(to())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}}),sf=Ka(Js,n=>n.location);Ka(Js,n=>n.querystring);const no=Ui(void 0);async function sn(n){if(!n||n.length<1||n.charAt(0)!="/"&&n.indexOf("#/")!==0)throw Error("Invalid parameter location");await ta(),history.replaceState(Gi(qi({},history.state),{__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY}),void 0,void 0),window.location.hash=(n.charAt(0)=="#"?"":"#")+n}function rf(n,e,t){let{routes:i={}}=e,{prefix:s=""}=e,{restoreScrollState:r=!1}=e;class o{constructor(T,R){if(!R||typeof R!="function"&&(typeof R!="object"||R._sveltesparouter!==!0))throw Error("Invalid component object");if(!T||typeof T=="string"&&(T.length<1||T.charAt(0)!="/"&&T.charAt(0)!="*")||typeof T=="object"&&!(T instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:O,keys:P}=Zd(T);this.path=T,typeof R=="object"&&R._sveltesparouter===!0?(this.component=R.component,this.conditions=R.conditions||[],this.userData=R.userData,this.props=R.props||{}):(this.component=()=>Promise.resolve(R),this.conditions=[],this.props={}),this._pattern=O,this._keys=P}match(T){if(s){if(typeof s=="string")if(T.startsWith(s))T=T.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const L=T.match(s);if(L&&L[0])T=T.substr(L[0].length)||"/";else return null}}const R=this._pattern.exec(T);if(R===null)return null;if(this._keys===!1)return R;const O={};let P=0;for(;P<this._keys.length;){try{O[this._keys[P]]=decodeURIComponent(R[P+1]||"")||null}catch{O[this._keys[P]]=null}P++}return O}async checkConditions(T){for(let R=0;R<this.conditions.length;R++)if(!await this.conditions[R](T))return!1;return!0}}const a=[];i instanceof Map?i.forEach((E,T)=>{a.push(new o(T,E))}):Object.keys(i).forEach(E=>{a.push(new o(E,i[E]))});let l=null,c=null,h={};const f=bc();async function p(E,T){await ta(),f(E,T)}let g=null,m=null;r&&(m=E=>{E.state&&E.state.__svelte_spa_router_scrollY?g=E.state:g=null},window.addEventListener("popstate",m),vc(()=>{g?window.scrollTo(g.__svelte_spa_router_scrollX,g.__svelte_spa_router_scrollY):window.scrollTo(0,0)}));let I=null,b=null;const y=Js.subscribe(async E=>{I=E;let T=0;for(;T<a.length;){const R=a[T].match(E.location);if(!R){T++;continue}const O={route:a[T].path,location:E.location,querystring:E.querystring,userData:a[T].userData,params:R&&typeof R=="object"&&Object.keys(R).length?R:null};if(!await a[T].checkConditions(O)){t(0,l=null),b=null,p("conditionsFailed",O);return}p("routeLoading",Object.assign({},O));const P=a[T].component;if(b!=P){P.loading?(t(0,l=P.loading),b=P,t(1,c=P.loadingParams),t(2,h={}),p("routeLoaded",Object.assign({},O,{component:l,name:l.name,params:c}))):(t(0,l=null),b=null);const L=await P();if(E!=I)return;t(0,l=L&&L.default||L),b=P}R&&typeof R=="object"&&Object.keys(R).length?t(1,c=R):t(1,c=null),t(2,h=a[T].props),p("routeLoaded",Object.assign({},O,{component:l,name:l.name,params:c})).then(()=>{no.set(c)});return}t(0,l=null),b=null,no.set(void 0)});wc(()=>{y(),m&&window.removeEventListener("popstate",m)});function N(E){Ar.call(this,n,E)}function v(E){Ar.call(this,n,E)}return n.$$set=E=>{"routes"in E&&t(3,i=E.routes),"prefix"in E&&t(4,s=E.prefix),"restoreScrollState"in E&&t(5,r=E.restoreScrollState)},n.$$.update=()=>{n.$$.dirty&32&&(history.scrollRestoration=r?"manual":"auto")},[l,c,h,i,s,r,N,v]}class of extends De{constructor(e){super(),xe(this,e,rf,nf,Me,{routes:3,prefix:4,restoreScrollState:5})}}function io(n,e,t){const i=n.slice();return i[11]=e[t],i}function so(n){let e,t,i,s=n[11].name+"",r,o,a,l,c=n[11].quantity+"",h,f,p,g,m,I,b,y,N,v,E,T,R,O,P;return m=new Xd({}),y=new Jd({}),E=new Kd({}),{c(){e=_("li"),t=_("div"),i=_("span"),r=B(s),o=w(),a=_("span"),l=B("x"),h=B(c),f=w(),p=_("div"),g=_("button"),Ce(m.$$.fragment),I=w(),b=_("button"),Ce(y.$$.fragment),N=w(),v=_("button"),Ce(E.$$.fragment),T=w(),d(g,"class","h-4 w-4 flex items-center justify-center active:scale-75 hover:text-red-600 transition-all duration-300"),d(b,"class","h-4 w-4 flex items-center justify-center active:scale-75 hover:text-green-500 duration-300"),d(v,"class","h-4 w-4 flex items-center justify-center active:scale-75 hover:text-red-600 duration-300"),d(p,"class","flex"),d(e,"class","flex justify-between")},m(L,F){x(L,e,F),u(e,t),u(t,i),u(i,r),u(t,o),u(t,a),u(a,l),u(a,h),u(e,f),u(e,p),u(p,g),we(m,g,null),u(p,I),u(p,b),we(y,b,null),u(p,N),u(p,v),we(E,v,null),u(e,T),R=!0,O||(P=[Ee(g,"click",function(){In(n[3](n[11]))&&n[3](n[11]).apply(this,arguments)}),Ee(b,"click",function(){In(n[4](n[11]))&&n[4](n[11]).apply(this,arguments)}),Ee(v,"click",function(){In(n[5](n[11]))&&n[5](n[11]).apply(this,arguments)})],O=!0)},p(L,F){n=L,(!R||F&1)&&s!==(s=n[11].name+"")&&ce(r,s),(!R||F&1)&&c!==(c=n[11].quantity+"")&&ce(h,c)},i(L){R||(te(m.$$.fragment,L),te(y.$$.fragment,L),te(E.$$.fragment,L),R=!0)},o(L){re(m.$$.fragment,L),re(y.$$.fragment,L),re(E.$$.fragment,L),R=!1},d(L){L&&M(e),be(m),be(y),be(E),O=!1,Ct(P)}}}function af(n){let e,t,i;return{c(){e=_("li"),e.innerHTML='<a href="#/login">Login</a>',t=w(),i=_("li"),i.innerHTML='<a href="#/register">Register</a>'},m(s,r){x(s,e,r),x(s,t,r),x(s,i,r)},p:K,d(s){s&&M(e),s&&M(t),s&&M(i)}}}function lf(n){let e,t,i,s,r,o,a,l;return{c(){e=_("div"),e.textContent="",t=w(),i=_("li"),i.innerHTML='<a href="#/orders">Orders</a>',s=w(),r=_("li"),o=_("a"),o.textContent="Logout",d(e,"class","w-full text-center font-bold"),d(o,"href","#/")},m(c,h){x(c,e,h),x(c,t,h),x(c,i,h),x(c,s,h),x(c,r,h),u(r,o),a||(l=Ee(o,"click",n[10]),a=!0)},p:K,d(c){c&&M(e),c&&M(t),c&&M(i),c&&M(s),c&&M(r),a=!1,l()}}}function cf(n){let e,t,i,s,r,o,a,l,c,h,f,p,g,m,I,b,y=n[6]()+"",N,v,E,T,R,O=n[7]()+"",P,L,F,X,Z,se=n[8]()+"",C,j,W,Y,ee,A,q,D,H,Te,oe,Ie,ne,ke=(n[2].email?n[2].email.split("")[0]:"G")+"",ge,Qe,de,_e,ye,$e;r=new nn({});let We=Object.values(n[0]),ie=[];for(let S=0;S<We.length;S+=1)ie[S]=so(io(n,We,S));const St=S=>re(ie[S],1,1,()=>{ie[S]=null});function Xe(S,z){return S[2].auth?lf:af}let V=Xe(n),le=V(n);return{c(){e=_("div"),t=_("div"),i=_("div"),s=_("a"),Ce(r.$$.fragment),o=w(),a=_("span"),a.textContent="   Boba Boys",l=w(),c=_("div"),h=_("div"),f=_("label"),p=_("div"),g=Pe("svg"),m=Pe("path"),I=w(),b=_("span"),N=B(y),v=w(),E=_("div"),T=_("div"),R=_("span"),P=B(O),L=B(" Items"),F=w(),X=_("span"),Z=B("Subtotal: "),C=B(se),j=w(),W=_("div"),Y=_("ul");for(let S=0;S<ie.length;S+=1)ie[S].c();ee=w(),A=_("button"),q=B("Checkout"),Te=w(),oe=_("div"),Ie=_("label"),ne=_("div"),ge=B(ke),Qe=w(),de=_("ul"),le.c(),d(a,"class","whitespace-pre"),d(s,"href","#/"),d(s,"class","btn btn-ghost normal-case text-xl flex justify-between"),d(i,"class","flex-1"),d(m,"stroke-linecap","round"),d(m,"stroke-linejoin","round"),d(m,"stroke-width","2"),d(m,"d","M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"),d(g,"xmlns","http://www.w3.org/2000/svg"),d(g,"class","h-5 w-5"),d(g,"fill","none"),d(g,"viewBox","0 0 24 24"),d(g,"stroke","currentColor"),d(b,"class","badge badge-sm indicator-item"),d(p,"class","indicator"),d(f,"for",""),d(f,"tabindex","0"),d(f,"class","btn btn-ghost btn-circle"),d(R,"class","font-bold text-lg"),d(X,"class","text-info"),d(Y,"class","w-full"),d(A,"class",D=`btn btn-primary btn-block ${Object.keys(n[0]).length==0&&"btn-disabled"}`),d(W,"class","card-actions"),d(T,"class","card-body"),d(E,"tabindex","0"),d(E,"class","mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"),d(h,"class",H=`${n[1]==="/checkout"&&"hidden"} dropdown dropdown-end`),d(ne,"class","w-10 rounded-full text-center leading-10 text-3xl"),d(Ie,"for",""),d(Ie,"tabindex","0"),d(Ie,"class","btn btn-ghost btn-circle avatar"),d(de,"tabindex","0"),d(de,"class","menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"),d(oe,"class","dropdown dropdown-end"),d(c,"class","flex-none"),d(t,"class","navbar bg-base-100 rounded-box w-11/12"),d(e,"class","w-full flex justify-center my-6 relative z-50")},m(S,z){x(S,e,z),u(e,t),u(t,i),u(i,s),we(r,s,null),u(s,o),u(s,a),u(t,l),u(t,c),u(c,h),u(h,f),u(f,p),u(p,g),u(g,m),u(p,I),u(p,b),u(b,N),u(h,v),u(h,E),u(E,T),u(T,R),u(R,P),u(R,L),u(T,F),u(T,X),u(X,Z),u(X,C),u(T,j),u(T,W),u(W,Y);for(let me=0;me<ie.length;me+=1)ie[me].m(Y,null);u(W,ee),u(W,A),u(A,q),u(c,Te),u(c,oe),u(oe,Ie),u(Ie,ne),u(ne,ge),u(oe,Qe),u(oe,de),le.m(de,null),_e=!0,ye||($e=Ee(A,"click",n[9]),ye=!0)},p(S,[z]){if((!_e||z&1)&&y!==(y=S[6]()+"")&&ce(N,y),(!_e||z&1)&&O!==(O=S[7]()+"")&&ce(P,O),(!_e||z&1)&&se!==(se=S[8]()+"")&&ce(C,se),z&57){We=Object.values(S[0]);let me;for(me=0;me<We.length;me+=1){const pn=io(S,We,me);ie[me]?(ie[me].p(pn,z),te(ie[me],1)):(ie[me]=so(pn),ie[me].c(),te(ie[me],1),ie[me].m(Y,null))}for(Ht(),me=We.length;me<ie.length;me+=1)St(me);jt()}(!_e||z&1&&D!==(D=`btn btn-primary btn-block ${Object.keys(S[0]).length==0&&"btn-disabled"}`))&&d(A,"class",D),(!_e||z&2&&H!==(H=`${S[1]==="/checkout"&&"hidden"} dropdown dropdown-end`))&&d(h,"class",H),(!_e||z&4)&&ke!==(ke=(S[2].email?S[2].email.split("")[0]:"G")+"")&&ce(ge,ke),V===(V=Xe(S))&&le?le.p(S,z):(le.d(1),le=V(S),le&&(le.c(),le.m(de,null)))},i(S){if(!_e){te(r.$$.fragment,S);for(let z=0;z<We.length;z+=1)te(ie[z]);_e=!0}},o(S){re(r.$$.fragment,S),ie=ie.filter(Boolean);for(let z=0;z<ie.length;z+=1)re(ie[z]);_e=!1},d(S){S&&M(e),be(r),zn(ie,S),le.d(),ye=!1,$e()}}}function uf(n,e,t){let i,s,r;at(n,rt,m=>t(0,i=m)),at(n,sf,m=>t(1,s=m)),at(n,vt,m=>t(2,r=m));const o=m=>{const I=i[m.name].quantity;I>1?(nt(rt,i[m.name].quantity-=1,i),localStorage.setItem("basket",JSON.stringify(i))):I==1&&l(m)},a=m=>{nt(rt,i[m.name].quantity+=1,i),localStorage.setItem("basket",JSON.stringify(i))},l=m=>{nt(rt,i=Object.fromEntries(Object.entries(i).filter(([I])=>I!==m.name)),i),localStorage.setItem("basket",JSON.stringify(i))};return[i,s,r,o,a,l,()=>{let m=0;return Object.values(i).forEach(I=>{m+=I.quantity}),m},()=>{let m=0;return Object.values(i).forEach(I=>{m+=I.quantity}),m},()=>{let m=0;return Object.values(i).forEach(I=>{m+=I.price*I.quantity}),m.toLocaleString("en-US",{style:"currency",currency:"GBP"})},()=>sn("/checkout"),()=>{const m=Fi();xh(m),nt(vt,r.auth=null,r),nt(vt,r.email=null,r),l()}]}class hf extends De{constructor(e){super(),xe(this,e,uf,cf,Me,{})}}function df(n){let e,t,i,s,r,o,a=n[0].name+"",l,c,h,f,p=n[0].price+"",g,m,I,b,y,N;return{c(){e=_("div"),t=_("img"),s=w(),r=_("div"),o=_("h2"),l=B(a),c=w(),h=_("span"),f=B("\xA3"),g=B(p),m=w(),I=_("div"),b=_("button"),b.textContent="Add to Basket",bt(t.src,i=n[0].image)||d(t,"src",i),d(t,"alt","Drinks"),d(o,"class","text-center font-bold text-lg"),d(h,"class","text-center"),d(b,"class","btn btn-primary btn-md"),d(I,"class","card-actions justify-center"),d(r,"class","card-body"),d(e,"class","card w-full bg-base-100")},m(v,E){x(v,e,E),u(e,t),u(e,s),u(e,r),u(r,o),u(o,l),u(r,c),u(r,h),u(h,f),u(h,g),u(r,m),u(r,I),u(I,b),y||(N=Ee(b,"click",n[2]),y=!0)},p(v,[E]){E&1&&!bt(t.src,i=v[0].image)&&d(t,"src",i),E&1&&a!==(a=v[0].name+"")&&ce(l,a),E&1&&p!==(p=v[0].price+"")&&ce(g,p)},i:K,o:K,d(v){v&&M(e),y=!1,N()}}}function ff(n,e,t){let i;at(n,rt,o=>t(1,i=o));let{item:s}=e;const r=()=>{i[s.name]?nt(rt,i[s.name].quantity+=1,i):nt(rt,i[s.name]=s,i),localStorage.setItem("basket",JSON.stringify(i))};return n.$$set=o=>{"item"in o&&t(0,s=o.item)},[s,i,r]}class pf extends De{constructor(e){super(),xe(this,e,ff,df,Me,{item:0})}}function ro(n,e,t){const i=n.slice();return i[1]=e[t][0],i[2]=e[t][1],i}function oo(n){let e,t;return e=new pf({props:{item:{name:n[1],price:5.99,image:n[2],quantity:1}}}),{c(){Ce(e.$$.fragment)},m(i,s){we(e,i,s),t=!0},p:K,i(i){t||(te(e.$$.fragment,i),t=!0)},o(i){re(e.$$.fragment,i),t=!1},d(i){be(e,i)}}}function _f(n){let e,t,i=Object.entries(n[0]),s=[];for(let o=0;o<i.length;o+=1)s[o]=oo(ro(n,i,o));const r=o=>re(s[o],1,1,()=>{s[o]=null});return{c(){e=_("div");for(let o=0;o<s.length;o+=1)s[o].c();d(e,"class","w-11/12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8")},m(o,a){x(o,e,a);for(let l=0;l<s.length;l+=1)s[l].m(e,null);t=!0},p(o,[a]){if(a&1){i=Object.entries(o[0]);let l;for(l=0;l<i.length;l+=1){const c=ro(o,i,l);s[l]?(s[l].p(c,a),te(s[l],1)):(s[l]=oo(c),s[l].c(),te(s[l],1),s[l].m(e,null))}for(Ht(),l=i.length;l<s.length;l+=1)r(l);jt()}},i(o){if(!t){for(let a=0;a<i.length;a+=1)te(s[a]);t=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)re(s[a]);t=!1},d(o){o&&M(e),zn(s,o)}}}function mf(n){return[{"Brown tea":"https://i.imgur.com/wVNbzhu.jpg","Orange tea":"https://i.imgur.com/3vNRblO.jpg","Chocolate tea":"https://i.imgur.com/LC1VZfk.jpg","Egg tea":"https://i.imgur.com/ifwElhk.jpg","Cloud tea":"https://i.imgur.com/cmMjQqN.jpg","White tea":"https://i.imgur.com/f8QOrak.jpg"}]}class gf extends De{constructor(e){super(),xe(this,e,mf,_f,Me,{})}}function yf(n){let e,t;return{c(){e=Pe("svg"),t=Pe("path"),d(t,"stroke-linecap","round"),d(t,"stroke-linejoin","round"),d(t,"stroke-width","2"),d(t,"d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"class","stroke-current flex-shrink-0 h-6 w-6"),d(e,"fill","none"),d(e,"viewBox","0 0 24 24")},m(i,s){x(i,e,s),u(e,t)},p:K,i:K,o:K,d(i){i&&M(e)}}}class Ya extends De{constructor(e){super(),xe(this,e,null,yf,Me,{})}}function vf(n){let e,t;return{c(){e=Pe("svg"),t=Pe("path"),d(t,"stroke-linecap","round"),d(t,"stroke-linejoin","round"),d(t,"stroke-width","2"),d(t,"d","M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"class","stroke-current flex-shrink-0 h-6 w-6"),d(e,"fill","none"),d(e,"viewBox","0 0 24 24")},m(i,s){x(i,e,s),u(e,t)},p:K,i:K,o:K,d(i){i&&M(e)}}}class Ja extends De{constructor(e){super(),xe(this,e,null,vf,Me,{})}}function wf(n){let e,t;return e=new Ja({}),{c(){Ce(e.$$.fragment)},m(i,s){we(e,i,s),t=!0},i(i){t||(te(e.$$.fragment,i),t=!0)},o(i){re(e.$$.fragment,i),t=!1},d(i){be(e,i)}}}function bf(n){let e,t;return e=new Ya({}),{c(){Ce(e.$$.fragment)},m(i,s){we(e,i,s),t=!0},i(i){t||(te(e.$$.fragment,i),t=!0)},o(i){re(e.$$.fragment,i),t=!1},d(i){be(e,i)}}}function If(n){let e,t,i,s,r,o,a,l,c,h,f,p,g=(n[2]||n[3])+"",m,I,b,y,N,v,E,T,R,O,P,L,F,X,Z,se,C,j,W,Y;i=new nn({});const ee=[bf,wf],A=[];function q(D,H){return D[2]?0:D[3]?1:-1}return~(c=q(n))&&(h=A[c]=ee[c](n)),{c(){e=_("div"),t=_("div"),Ce(i.$$.fragment),s=w(),r=_("h1"),r.textContent="Login to your account",o=w(),a=_("div"),l=_("div"),h&&h.c(),f=w(),p=_("span"),m=B(g),b=w(),y=_("form"),N=_("div"),v=_("span"),v.textContent="Email Address",E=w(),T=_("input"),R=w(),O=_("div"),P=_("span"),P.textContent="Password",L=w(),F=_("input"),X=w(),Z=_("button"),Z.textContent="Login",se=w(),C=_("a"),C.textContent="Don't have an account?",d(t,"class",">:w-28"),d(r,"class","text-3xl font-bold my-5"),d(p,"class","h-full capital"),d(l,"class","unalert"),d(a,"class",I=`alert max-w-xs shadow-lg transition-all duration-200 ${n[2]&&"alert-error"} ${n[3]&&"alert-success"} ${n[2]||n[3]?"opacity-100 my-5":"opacity-0"}`),d(v,"class","mb-1"),d(T,"type","email"),d(T,"autocomplete","email"),T.required=!0,d(T,"class","input border-gray-300 h-10"),d(N,"class","flex flex-col mb-3"),d(P,"class","mb-1"),d(F,"type","password"),d(F,"autocomplete","current-password"),F.required=!0,d(F,"class","input border-gray-300 h-10"),d(O,"class","flex flex-col mb-3"),d(Z,"class","btn btn-primary mt-3"),d(C,"class","text-primary mt-3 link"),d(C,"href","#/register"),d(y,"action","#/login"),d(y,"class","bg-white rounded-box shadow-lg flex flex-col w-full p-5"),d(e,"class","flex flex-col items-center")},m(D,H){x(D,e,H),u(e,t),we(i,t,null),u(e,s),u(e,r),u(e,o),u(e,a),u(a,l),~c&&A[c].m(l,null),u(l,f),u(l,p),u(p,m),u(e,b),u(e,y),u(y,N),u(N,v),u(N,E),u(N,T),n[5](T),u(y,R),u(y,O),u(O,P),u(O,L),u(O,F),n[6](F),u(y,X),u(y,Z),u(y,se),u(y,C),j=!0,W||(Y=Ee(Z,"click",n[4]),W=!0)},p(D,[H]){let Te=c;c=q(D),c!==Te&&(h&&(Ht(),re(A[Te],1,1,()=>{A[Te]=null}),jt()),~c?(h=A[c],h||(h=A[c]=ee[c](D),h.c()),te(h,1),h.m(l,f)):h=null),(!j||H&12)&&g!==(g=(D[2]||D[3])+"")&&ce(m,g),(!j||H&12&&I!==(I=`alert max-w-xs shadow-lg transition-all duration-200 ${D[2]&&"alert-error"} ${D[3]&&"alert-success"} ${D[2]||D[3]?"opacity-100 my-5":"opacity-0"}`))&&d(a,"class",I)},i(D){j||(te(i.$$.fragment,D),te(h),j=!0)},o(D){re(i.$$.fragment,D),re(h),j=!1},d(D){D&&M(e),be(i),~c&&A[c].d(),n[5](null),n[6](null),W=!1,Y()}}}function Ef(n,e,t){let i,s,r,o;const a=()=>i.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),l=()=>{if(s.value&&i.value&&a()){const f=Fi();Ph(f,i.value,s.value).then(p=>{t(3,o="Login successful!"),t(0,i.value="",i),t(1,s.value="",s),setTimeout(()=>{sn("/")},500)}).catch(p=>{t(2,r=p.message.match(/\(([^)]+)\)/)[1].replaceAll("-"," ").replace("auth/",""))})}else t(2,r="Please enter the required fields correctly")};function c(f){Ue[f?"unshift":"push"](()=>{i=f,t(0,i)})}function h(f){Ue[f?"unshift":"push"](()=>{s=f,t(1,s)})}return[i,s,r,o,l,c,h]}class Cf extends De{constructor(e){super(),xe(this,e,Ef,If,Me,{})}}const ao="@firebase/database",lo="0.13.0";/**
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
 */let Qa="";function Tf(n){Qa=n}/**
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
 */class Sf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Oe(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Nn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class kf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Xa=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Sf(e)}}catch{}return new kf},At=Xa("localStorage"),ws=Xa("sessionStorage");/**
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
 */const Xt=new Fs("@firebase/database"),Rf=function(){let n=1;return function(){return n++}}(),Za=function(n){const e=Wc(n),t=new Lc;t.update(e);const i=t.digest();return xs.encodeByteArray(i)},Jn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Jn.apply(null,i):typeof i=="object"?e+=Oe(i):e+=i,e+=" "}return e};let xt=null,co=!0;const Nf=function(n,e){k(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Xt.logLevel=ue.VERBOSE,xt=Xt.log.bind(Xt),e&&ws.set("logging_enabled",!0)):typeof n=="function"?xt=n:(xt=null,ws.remove("logging_enabled"))},Le=function(...n){if(co===!0&&(co=!1,xt===null&&ws.get("logging_enabled")===!0&&Nf(!0)),xt){const e=Jn.apply(null,n);xt(e)}},Qn=function(n){return function(...e){Le(n,...e)}},bs=function(...n){const e="FIREBASE INTERNAL ERROR: "+Jn(...n);Xt.error(e)},$t=function(...n){const e=`FIREBASE FATAL ERROR: ${Jn(...n)}`;throw Xt.error(e),new Error(e)},Be=function(...n){const e="FIREBASE WARNING: "+Jn(...n);Xt.warn(e)},Af=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},el=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Of=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},rn="[MIN_NAME]",Wt="[MAX_NAME]",hn=function(n,e){if(n===e)return 0;if(n===rn||e===Wt)return-1;if(e===rn||n===Wt)return 1;{const t=uo(n),i=uo(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Pf=function(n,e){return n===e?0:n<e?-1:1},_n=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Oe(e))},Qs=function(n){if(typeof n!="object"||n===null)return Oe(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Oe(e[i]),t+=":",t+=Qs(n[e[i]]);return t+="}",t},tl=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Ve(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const nl=function(n){k(!el(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let f="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},Mf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Df=new RegExp("^-?(0*)\\d{1,10}$"),Lf=-2147483648,Ff=2147483647,uo=function(n){if(Df.test(n)){const e=Number(n);if(e>=Lf&&e<=Ff)return e}return null},dn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Be("Exception was thrown by user callback.",t),e},Math.floor(0))}},Uf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Tn=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class $f{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Wf{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class Is{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Is.OWNER="owner";/**
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
 */const Xs="5",il="v",sl="s",rl="r",ol="f",al=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ll="ls",cl="p",Es="ac",ul="websocket",hl="long_polling";/**
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
 */class zf{constructor(e,t,i,s,r=!1,o="",a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=At.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&At.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Bf(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function dl(n,e,t){k(typeof e=="string","typeof type must == string"),k(typeof t=="object","typeof params must == object");let i;if(e===ul)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===hl)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Bf(n)&&(t.ns=n.namespace);const s=[];return Ve(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Hf{constructor(){this.counters_={}}incrementCounter(e,t=1){ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Tc(this.counters_)}}/**
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
 */const is={},ss={};function Zs(n){const e=n.toString();return is[e]||(is[e]=new Hf),is[e]}function jf(n,e){const t=n.toString();return ss[t]||(ss[t]=e()),ss[t]}/**
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
 */class Vf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&dn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ho="start",qf="close",Gf="pLPCommand",Kf="pRTLPCB",fl="id",pl="pw",_l="ser",Yf="cb",Jf="seg",Qf="ts",Xf="d",Zf="dframe",ml=1870,gl=30,ep=ml-gl,tp=25e3,np=3e4;class Yt{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qn(e),this.stats_=Zs(t),this.urlFn=l=>(this.appCheckToken&&(l[Es]=this.appCheckToken),dl(t,hl,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Vf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(np)),Of(()=>{if(this.isClosed_)return;this.scriptTagHolder=new er((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ho)this.id=a,this.password=l;else if(o===qf)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[ho]="t",i[_l]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Yf]=this.scriptTagHolder.uniqueCallbackIdentifier),i[il]=Xs,this.transportSessionId&&(i[sl]=this.transportSessionId),this.lastSessionId&&(i[ll]=this.lastSessionId),this.applicationId&&(i[cl]=this.applicationId),this.appCheckToken&&(i[Es]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&al.test(location.hostname)&&(i[rl]=ol);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Yt.forceAllow_=!0}static forceDisallow(){Yt.forceDisallow_=!0}static isAvailable(){return Yt.forceAllow_?!0:!Yt.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Mf()&&!xf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Oe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=aa(t),s=tl(i,ep);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Zf]="t",i[fl]=e,i[pl]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Oe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class er{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Rf(),window[Gf+this.uniqueCallbackIdentifier]=e,window[Kf+this.uniqueCallbackIdentifier]=t,this.myIFrame=er.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Le("frame writing exception"),a.stack&&Le(a.stack),Le(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fl]=this.myID,e[pl]=this.myPW,e[_l]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gl+i.length<=ml;){const o=this.pendingSegs.shift();i=i+"&"+Jf+s+"="+o.seg+"&"+Qf+s+"="+o.ts+"&"+Xf+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(tp)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const ip=16384,sp=45e3;let vi=null;typeof MozWebSocket!="undefined"?vi=MozWebSocket:typeof WebSocket!="undefined"&&(vi=WebSocket);class Ge{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qn(this.connId),this.stats_=Zs(t),this.connURL=Ge.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[il]=Xs,typeof location!="undefined"&&location.hostname&&al.test(location.hostname)&&(o[rl]=ol),t&&(o[sl]=t),i&&(o[ll]=i),s&&(o[Es]=s),r&&(o[cl]=r),dl(e,ul,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,At.set("previous_websocket_failure",!0);try{let i;ha(),this.mySock=new vi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&vi!==null&&!Ge.forceDisallow_}static previouslyFailed(){return At.isInMemoryStorage||At.get("previous_websocket_failure")===!0}markConnectionHealthy(){At.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Nn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Oe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=tl(t,ip);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sp))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ge.responsesRequiredToBeHealthy=2;Ge.healthyTimeout=3e4;/**
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
 */class xn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Yt,Ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ge&&Ge.isAvailable();let i=t&&!Ge.previouslyFailed();if(e.webSocketOnly&&(t||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ge];else{const s=this.transports_=[];for(const r of xn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);xn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xn.globalTransportInitialized_=!1;/**
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
 */const rp=6e4,op=5e3,ap=10*1024,lp=100*1024,rs="t",fo="d",cp="s",po="r",up="e",_o="o",mo="a",go="n",yo="p",hp="h";class dp{constructor(e,t,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qn("c:"+this.id+":"),this.transportManager_=new xn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Tn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>lp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ap?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rs in e){const t=e[rs];t===mo?this.upgradeIfSecondaryHealthy_():t===po?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===_o&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=_n("t",e),i=_n("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:go,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=_n("t",e),i=_n("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=_n(rs,e);if(fo in e){const i=e[fo];if(t===hp)this.onHandshake_(i);else if(t===go){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===cp?this.onConnectionShutdown_(i):t===po?this.onReset_(i):t===up?bs("Server Error: "+i):t===_o?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Xs!==i&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Tn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(op))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(At.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class yl{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class vl{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){k(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class wi extends vl{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Ds()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new wi}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const vo=32,wo=768;class he{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ae(){return new he("")}function J(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function It(n){return n.pieces_.length-n.pieceNum_}function pe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new he(n.pieces_,e)}function wl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function fp(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function bl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Il(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new he(e,0)}function Se(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof he)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new he(t,0)}function Q(n){return n.pieceNum_>=n.pieces_.length}function He(n,e){const t=J(n),i=J(e);if(t===null)return e;if(t===i)return He(pe(n),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function tr(n,e){if(It(n)!==It(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Ke(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(It(n)>It(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class pp{constructor(e,t){this.errorPrefix_=t,this.parts_=bl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Pi(this.parts_[i]);El(this)}}function _p(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Pi(e),El(n)}function mp(n){const e=n.parts_.pop();n.byteLength_-=Pi(e),n.parts_.length>0&&(n.byteLength_-=1)}function El(n){if(n.byteLength_>wo)throw new Error(n.errorPrefix_+"has a key path longer than "+wo+" bytes ("+n.byteLength_+").");if(n.parts_.length>vo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vo+") or object contains a cycle "+Rt(n))}function Rt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class nr extends vl{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new nr}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const mn=1e3,gp=60*5*1e3,yp=3*1e3,bo=30*1e3,vp=1.3,wp=3e4,bp="server_kill",Io=3;class lt extends yl{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=lt.nextPersistentConnectionId_++,this.log_=Qn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=mn,this.maxReconnectDelay_=gp,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ha())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");nr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Oe(r)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Oi,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),t.resolve(a)):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},yp),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;lt.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ht(e,"w")){const i=en(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Dc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=xc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Oe(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):bs("Unrecognized action received from server: "+Oe(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=mn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=mn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wp&&(this.reconnectDelay_=mn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+lt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(f){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new dp(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,g=>{Be(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(bp)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Be(f),l())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fs(this.interruptReasons_)&&(this.reconnectDelay_=mn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Qs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new he(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Le("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Io&&(this.reconnectDelay_=bo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Le("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Io&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Qa.replace(/\./g,"-")]=1,Ds()?e["framework.cordova"]=1:ua()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wi.getInstance().currentlyOnline();return fs(this.interruptReasons_)&&e}}lt.nextPersistentConnectionId_=0;lt.nextConnectionId_=0;/**
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
 */class G{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new G(e,t)}}/**
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
 */class $i{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new G(rn,e),s=new G(rn,t);return this.compare(i,s)!==0}minPost(){return G.MIN}}/**
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
 */let ii;class Cl extends $i{static get __EMPTY_NODE(){return ii}static set __EMPTY_NODE(e){ii=e}compare(e,t){return hn(e.name,t.name)}isDefinedOn(e){throw an("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return G.MIN}maxPost(){return new G(Wt,ii)}makePost(e,t){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,ii)}toString(){return".key"}}const Zt=new Cl;/**
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
 */class si{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ne{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:Ne.RED,this.left=s!=null?s:ze.EMPTY_NODE,this.right=r!=null?r:ze.EMPTY_NODE}copy(e,t,i,s,r){return new Ne(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ne.RED=!0;Ne.BLACK=!1;class Ip{copy(e,t,i,s,r){return this}insert(e,t,i){return new Ne(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(e,t=ze.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ze(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ne.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ne.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new si(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new si(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new si(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new si(this.root_,null,this.comparator_,!0,e)}}ze.EMPTY_NODE=new Ip;/**
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
 */function Ep(n,e){return hn(n.name,e.name)}function ir(n,e){return hn(n,e)}/**
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
 */let Cs;function Cp(n){Cs=n}const Tl=function(n){return typeof n=="number"?"number:"+nl(n):"string:"+n},Sl=function(n){if(n.isLeafNode()){const e=n.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ht(e,".sv"),"Priority must be a string or number.")}else k(n===Cs||n.isEmpty(),"priority of unexpected type.");k(n===Cs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Eo;class Re{constructor(e,t=Re.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Sl(this.priorityNode_)}static set __childrenNodeConstructor(e){Eo=e}static get __childrenNodeConstructor(){return Eo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Re(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:J(e)===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=J(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(k(i!==".priority"||It(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Re.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=nl(this.value_):e+=this.value_,this.lazyHash_=Za(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Re.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Re.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=Re.VALUE_TYPE_ORDER.indexOf(t),r=Re.VALUE_TYPE_ORDER.indexOf(i);return k(s>=0,"Unknown leaf type: "+t),k(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Re.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let kl,Rl;function Tp(n){kl=n}function Sp(n){Rl=n}class kp extends $i{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?hn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return G.MIN}maxPost(){return new G(Wt,new Re("[PRIORITY-POST]",Rl))}makePost(e,t){const i=kl(e);return new G(t,new Re("[PRIORITY-POST]",i))}toString(){return".priority"}}const ve=new kp;/**
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
 */const Rp=Math.log(2);class Np{constructor(e){const t=r=>parseInt(Math.log(r)/Rp,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bi=function(n,e,t,i){n.sort(e);const s=function(l,c){const h=c-l;let f,p;if(h===0)return null;if(h===1)return f=n[l],p=t?t(f):f,new Ne(p,f.node,Ne.BLACK,null,null);{const g=parseInt(h/2,10)+l,m=s(l,g),I=s(g+1,c);return f=n[g],p=t?t(f):f,new Ne(p,f.node,Ne.BLACK,m,I)}},r=function(l){let c=null,h=null,f=n.length;const p=function(m,I){const b=f-m,y=f;f-=m;const N=s(b+1,y),v=n[b],E=t?t(v):v;g(new Ne(E,v.node,I,null,N))},g=function(m){c?(c.left=m,c=m):(h=m,c=m)};for(let m=0;m<l.count;++m){const I=l.nextBitIsOne(),b=Math.pow(2,l.count-(m+1));I?p(b,Ne.BLACK):(p(b,Ne.BLACK),p(b,Ne.RED))}return h},o=new Np(n.length),a=r(o);return new ze(i||e,a)};/**
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
 */let os;const Gt={};class ot{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return k(Gt&&ve,"ChildrenNode.ts has not been loaded"),os=os||new ot({".priority":Gt},{".priority":ve}),os}get(e){const t=en(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ze?t:null}hasIndex(e){return ht(this.indexSet_,e.toString())}addIndex(e,t){k(e!==Zt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(G.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=bi(i,e.getCompare()):a=Gt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new ot(h,c)}addToIndexes(e,t){const i=di(this.indexes_,(s,r)=>{const o=en(this.indexSet_,r);if(k(o,"Missing index implementation for "+r),s===Gt)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(G.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),bi(a,o.getCompare())}else return Gt;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new G(e.name,a))),l.insert(e,e.node)}});return new ot(i,this.indexSet_)}removeFromIndexes(e,t){const i=di(this.indexes_,s=>{if(s===Gt)return s;{const r=t.get(e.name);return r?s.remove(new G(e.name,r)):s}});return new ot(i,this.indexSet_)}}/**
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
 */let gn;class U{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Sl(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gn||(gn=new U(new ze(ir),null,ot.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gn}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?gn:t}}getChild(e){const t=J(e);return t===null?this:this.getImmediateChild(t).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(k(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new G(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?gn:this.priorityNode_;return new U(s,o,r)}}updateChild(e,t){const i=J(e);if(i===null)return t;{k(J(e)!==".priority"||It(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(pe(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(ve,(o,a)=>{t[o]=a.val(e),i++,r&&U.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tl(this.getPriority().val())+":"),this.forEachChild(ve,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Za(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new G(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new G(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new G(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,G.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xn?-1:0}withIndex(e){if(e===Zt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Zt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(ve),s=t.getIterator(ve);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Zt?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ap extends U{constructor(){super(new ze(ir),U.EMPTY_NODE,ot.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const Xn=new Ap;Object.defineProperties(G,{MIN:{value:new G(rn,U.EMPTY_NODE)},MAX:{value:new G(Wt,Xn)}});Cl.__EMPTY_NODE=U.EMPTY_NODE;Re.__childrenNodeConstructor=U;Cp(Xn);Sp(Xn);/**
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
 */const Op=!0;function Ae(n,e=null){if(n===null)return U.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Re(t,Ae(e))}if(!(n instanceof Array)&&Op){const t=[];let i=!1;if(Ve(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ae(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new G(o,l)))}}),t.length===0)return U.EMPTY_NODE;const r=bi(t,Ep,o=>o.name,ir);if(i){const o=bi(t,ve.getCompare());return new U(r,Ae(e),new ot({".priority":o},{".priority":ve}))}else return new U(r,Ae(e),ot.Default)}else{let t=U.EMPTY_NODE;return Ve(n,(i,s)=>{if(ht(n,i)&&i.substring(0,1)!=="."){const r=Ae(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(Ae(e))}}Tp(Ae);/**
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
 */class Pp extends $i{constructor(e){super(),this.indexPath_=e,k(!Q(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?hn(e.name,t.name):r}makePost(e,t){const i=Ae(e),s=U.EMPTY_NODE.updateChild(this.indexPath_,i);return new G(t,s)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,Xn);return new G(Wt,e)}toString(){return bl(this.indexPath_,0).join("/")}}/**
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
 */class Mp extends $i{compare(e,t){const i=e.node.compareTo(t.node);return i===0?hn(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,t){const i=Ae(e);return new G(t,i)}toString(){return".value"}}const xp=new Mp;/**
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
 */function Dp(n){return{type:"value",snapshotNode:n}}function Dn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ln(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Fn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Lp(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class sr{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Ln(t,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Dn(t,i)):o.trackChildChange(Fn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ve,(s,r)=>{t.hasChild(s)||i.trackChildChange(Ln(s,r))}),t.isLeafNode()||t.forEachChild(ve,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Fn(s,r,o))}else i.trackChildChange(Dn(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Un{constructor(e){this.indexedFilter_=new sr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Un.getStartPost_(e),this.endPost_=Un.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,s,r,o){return this.matches(new G(t,i))||(i=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=U.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(U.EMPTY_NODE);const r=this;return t.forEachChild(ve,(o,a)=>{r.matches(new G(o,a))||(s=s.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Fp{constructor(e){this.rangedFilter_=new Un(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new G(t,i))||(i=U.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=U.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=t.withIndex(this.index_),s=s.updatePriority(U.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const f=this.index_.getCompare();a=(p,g)=>f(g,p)}else l=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,h=!1;for(;l.hasNext();){const f=l.getNext();!h&&a(r,f)<=0&&(h=!0),h&&c<this.limit_&&a(f,o)<=0?c++:s=s.updateImmediateChild(f.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,g)=>f(g,p)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new G(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const f=a.getImmediateChild(t);let p=s.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===t||a.hasChild(p.name));)p=s.getChildAfterChild(this.index_,p,this.reverse_);const g=p==null?1:o(p,l);if(h&&!i.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(Fn(t,i,f)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Ln(t,f));const I=a.updateImmediateChild(t,U.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(Dn(p.name,p.node)),I.updateImmediateChild(p.name,p.node)):I}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ln(c.name,c.node)),r.trackChildChange(Dn(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,U.EMPTY_NODE)):e}}/**
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
 */class rr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:rn}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new rr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Up(n){return n.loadsAllData()?new sr(n.getIndex()):n.hasLimit()?new Fp(n):new Un(n)}function Co(n){const e={};if(n.isDefault())return e;let t;return n.index_===ve?t="$priority":n.index_===xp?t="$value":n.index_===Zt?t="$key":(k(n.index_ instanceof Pp,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Oe(t),n.startSet_&&(e.startAt=Oe(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+Oe(n.indexStartName_))),n.endSet_&&(e.endAt=Oe(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+Oe(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function To(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ve&&(e.i=n.index_.toString()),e}/**
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
 */class Ii extends yl{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Qn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ii.getListenId_(e,i),a={};this.listens_[o]=a;const l=Co(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,i),en(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",s(p,null)}})}unlisten(e,t){const i=Ii.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Co(e._queryParams),i=e._path.toString(),s=new Oi;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+cn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Nn(a.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class $p{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ei(){return{value:null,children:new Map}}function Nl(n,e,t){if(Q(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=J(e);n.children.has(i)||n.children.set(i,Ei());const s=n.children.get(i);e=pe(e),Nl(s,e,t)}}function Ts(n,e,t){n.value!==null?t(e,n.value):Wp(n,(i,s)=>{const r=new he(e.toString()+"/"+i);Ts(s,r,t)})}function Wp(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class zp{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ve(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const So=10*1e3,Bp=30*1e3,Hp=5*60*1e3;class jp{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new zp(e);const i=So+(Bp-So)*Math.random();Tn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ve(e,(s,r)=>{r>0&&ht(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Tn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Hp))}}/**
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
 */var Ze;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ze||(Ze={}));function Al(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ol(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pl(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Ci{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Ze.ACK_USER_WRITE,this.source=Al()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new he(e));return new Ci(ae(),t,this.revert)}}else return k(J(this.path)===e,"operationForChild called for unrelated child."),new Ci(pe(this.path),this.affectedTree,this.revert)}}/**
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
 */class zt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Ze.OVERWRITE}operationForChild(e){return Q(this.path)?new zt(this.source,ae(),this.snap.getImmediateChild(e)):new zt(this.source,pe(this.path),this.snap)}}/**
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
 */class $n{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Ze.MERGE}operationForChild(e){if(Q(this.path)){const t=this.children.subtree(new he(e));return t.isEmpty()?null:t.value?new zt(this.source,ae(),t.value):new $n(this.source,ae(),t)}else return k(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $n(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Et{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const t=J(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Vp{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qp(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Lp(o.childName,o.snapshotNode))}),yn(n,s,"child_removed",e,i,t),yn(n,s,"child_added",e,i,t),yn(n,s,"child_moved",r,i,t),yn(n,s,"child_changed",e,i,t),yn(n,s,"value",e,i,t),s}function yn(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Kp(n,a,l)),o.forEach(a=>{const l=Gp(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Gp(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Kp(n,e,t){if(e.childName==null||t.childName==null)throw an("Should only compare child_ events.");const i=new G(e.childName,e.snapshotNode),s=new G(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function Wi(n,e){return{eventCache:n,serverCache:e}}function Sn(n,e,t,i){return Wi(new Et(e,t,i),n.serverCache)}function Ml(n,e,t,i){return Wi(n.eventCache,new Et(e,t,i))}function Ti(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Bt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let as;const Yp=()=>(as||(as=new ze(Pf)),as);class fe{constructor(e,t=Yp()){this.value=e,this.children=t}static fromObject(e){let t=new fe(null);return Ve(e,(i,s)=>{t=t.set(new he(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ae(),value:this.value};if(Q(e))return null;{const i=J(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(pe(e),t);return r!=null?{path:Se(new he(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const t=J(e),i=this.children.get(t);return i!==null?i.subtree(pe(e)):new fe(null)}}set(e,t){if(Q(e))return new fe(t,this.children);{const i=J(e),r=(this.children.get(i)||new fe(null)).set(pe(e),t),o=this.children.insert(i,r);return new fe(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const t=J(e),i=this.children.get(t);if(i){const s=i.remove(pe(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new fe(null):new fe(this.value,r)}else return this}}get(e){if(Q(e))return this.value;{const t=J(e),i=this.children.get(t);return i?i.get(pe(e)):null}}setTree(e,t){if(Q(e))return t;{const i=J(e),r=(this.children.get(i)||new fe(null)).setTree(pe(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new fe(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Se(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,ae(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(Q(e))return null;{const r=J(e),o=this.children.get(r);return o?o.findOnPath_(pe(e),Se(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ae(),t)}foreachOnPath_(e,t,i){if(Q(e))return this;{this.value&&i(t,this.value);const s=J(e),r=this.children.get(s);return r?r.foreachOnPath_(pe(e),Se(t,s),i):new fe(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Se(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Ye{constructor(e){this.writeTree_=e}static empty(){return new Ye(new fe(null))}}function kn(n,e,t){if(Q(e))return new Ye(new fe(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=He(s,e);return r=r.updateChild(o,t),new Ye(n.writeTree_.set(s,r))}else{const s=new fe(t),r=n.writeTree_.setTree(e,s);return new Ye(r)}}}function ko(n,e,t){let i=n;return Ve(t,(s,r)=>{i=kn(i,Se(e,s),r)}),i}function Ro(n,e){if(Q(e))return Ye.empty();{const t=n.writeTree_.setTree(e,new fe(null));return new Ye(t)}}function Ss(n,e){return Vt(n,e)!=null}function Vt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(He(t.path,e)):null}function No(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ve,(i,s)=>{e.push(new G(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new G(i,s.value))}),e}function wt(n,e){if(Q(e))return n;{const t=Vt(n,e);return t!=null?new Ye(new fe(t)):new Ye(n.writeTree_.subtree(e))}}function ks(n){return n.writeTree_.isEmpty()}function on(n,e){return xl(ae(),n.writeTree_,e)}function xl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(k(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=xl(Se(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Se(n,".priority"),i)),t}}/**
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
 */function or(n,e){return Ul(e,n)}function Jp(n,e,t,i,s){k(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=kn(n.visibleWrites,e,t)),n.lastWriteId=i}function Qp(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Xp(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);k(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Zp(a,i.path)?s=!1:Ke(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return e_(n),!0;if(i.snap)n.visibleWrites=Ro(n.visibleWrites,i.path);else{const a=i.children;Ve(a,l=>{n.visibleWrites=Ro(n.visibleWrites,Se(i.path,l))})}return!0}else return!1}function Zp(n,e){if(n.snap)return Ke(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ke(Se(n.path,t),e))return!0;return!1}function e_(n){n.visibleWrites=Dl(n.allWrites,t_,ae()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function t_(n){return n.visible}function Dl(n,e,t){let i=Ye.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)Ke(t,o)?(a=He(t,o),i=kn(i,a,r.snap)):Ke(o,t)&&(a=He(o,t),i=kn(i,ae(),r.snap.getChild(a)));else if(r.children){if(Ke(t,o))a=He(t,o),i=ko(i,a,r.children);else if(Ke(o,t))if(a=He(o,t),Q(a))i=ko(i,ae(),r.children);else{const l=en(r.children,J(a));if(l){const c=l.getChild(pe(a));i=kn(i,ae(),c)}}}else throw an("WriteRecord should have .snap or .children")}}return i}function Ll(n,e,t,i,s){if(!i&&!s){const r=Vt(n.visibleWrites,e);if(r!=null)return r;{const o=wt(n.visibleWrites,e);if(ks(o))return t;if(t==null&&!Ss(o,ae()))return null;{const a=t||U.EMPTY_NODE;return on(o,a)}}}else{const r=wt(n.visibleWrites,e);if(!s&&ks(r))return t;if(!s&&t==null&&!Ss(r,ae()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Ke(c.path,e)||Ke(e,c.path))},a=Dl(n.allWrites,o,e),l=t||U.EMPTY_NODE;return on(a,l)}}}function n_(n,e,t){let i=U.EMPTY_NODE;const s=Vt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ve,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=wt(n.visibleWrites,e);return t.forEachChild(ve,(o,a)=>{const l=on(wt(r,new he(o)),a);i=i.updateImmediateChild(o,l)}),No(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=wt(n.visibleWrites,e);return No(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function i_(n,e,t,i,s){k(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Se(e,t);if(Ss(n.visibleWrites,r))return null;{const o=wt(n.visibleWrites,r);return ks(o)?s.getChild(t):on(o,s.getChild(t))}}function s_(n,e,t,i){const s=Se(e,t),r=Vt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=wt(n.visibleWrites,s);return on(o,i.getNode().getImmediateChild(t))}else return null}function r_(n,e){return Vt(n.visibleWrites,e)}function o_(n,e,t,i,s,r,o){let a;const l=wt(n.visibleWrites,e),c=Vt(l,ae());if(c!=null)a=c;else if(t!=null)a=on(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let g=p.getNext();for(;g&&h.length<s;)f(g,i)!==0&&h.push(g),g=p.getNext();return h}else return[]}function a_(){return{visibleWrites:Ye.empty(),allWrites:[],lastWriteId:-1}}function Si(n,e,t,i){return Ll(n.writeTree,n.treePath,e,t,i)}function ar(n,e){return n_(n.writeTree,n.treePath,e)}function Ao(n,e,t,i){return i_(n.writeTree,n.treePath,e,t,i)}function ki(n,e){return r_(n.writeTree,Se(n.treePath,e))}function l_(n,e,t,i,s,r){return o_(n.writeTree,n.treePath,e,t,i,s,r)}function lr(n,e,t){return s_(n.writeTree,n.treePath,e,t)}function Fl(n,e){return Ul(Se(n.treePath,e),n.writeTree)}function Ul(n,e){return{treePath:n,writeTree:e}}/**
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
 */class c_{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;k(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),k(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Fn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Ln(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Dn(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Fn(i,e.snapshotNode,s.oldSnap));else throw an("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class u_{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const $l=new u_;class cr{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Et(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lr(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bt(this.viewCache_),r=l_(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function h_(n){return{filter:n}}function d_(n,e){k(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function f_(n,e,t,i,s){const r=new c_;let o,a;if(t.type===Ze.OVERWRITE){const c=t;c.source.fromUser?o=Rs(n,e,c.path,c.snap,i,s,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Q(c.path),o=Ri(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===Ze.MERGE){const c=t;c.source.fromUser?o=__(n,e,c.path,c.children,i,s,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ns(n,e,c.path,c.children,i,s,a,r))}else if(t.type===Ze.ACK_USER_WRITE){const c=t;c.revert?o=y_(n,e,c.path,i,s,r):o=m_(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===Ze.LISTEN_COMPLETE)o=g_(n,e,t.path,i,r);else throw an("Unknown operation type: "+t.type);const l=r.getChanges();return p_(e,o,l),{viewCache:o,changes:l}}function p_(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ti(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Dp(Ti(e)))}}function Wl(n,e,t,i,s,r){const o=e.eventCache;if(ki(i,t)!=null)return e;{let a,l;if(Q(t))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Bt(e),h=c instanceof U?c:U.EMPTY_NODE,f=ar(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=Si(i,Bt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=J(t);if(c===".priority"){k(It(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=Ao(i,t,h,l);f!=null?a=n.filter.updatePriority(h,f):a=o.getNode()}else{const h=pe(t);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const p=Ao(i,t,o.getNode(),l);p!=null?f=o.getNode().getImmediateChild(c).updateChild(h,p):f=o.getNode().getImmediateChild(c)}else f=lr(i,c,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),c,f,h,s,r):a=o.getNode()}}return Sn(e,a,o.isFullyInitialized()||Q(t),n.filter.filtersNodes())}}function Ri(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(Q(t))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(t,i);c=h.updateFullNode(l.getNode(),g,null)}else{const g=J(t);if(!l.isCompleteForPath(t)&&It(t)>1)return e;const m=pe(t),b=l.getNode().getImmediateChild(g).updateChild(m,i);g===".priority"?c=h.updatePriority(l.getNode(),b):c=h.updateChild(l.getNode(),g,b,m,$l,null)}const f=Ml(e,c,l.isFullyInitialized()||Q(t),h.filtersNodes()),p=new cr(s,f,r);return Wl(n,f,t,s,p,a)}function Rs(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const h=new cr(s,e,r);if(Q(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Sn(e,c,!0,n.filter.filtersNodes());else{const f=J(t);if(f===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Sn(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=pe(t),g=a.getNode().getImmediateChild(f);let m;if(Q(p))m=i;else{const I=h.getCompleteChild(f);I!=null?wl(p)===".priority"&&I.getChild(Il(p)).isEmpty()?m=I:m=I.updateChild(p,i):m=U.EMPTY_NODE}if(g.equals(m))l=e;else{const I=n.filter.updateChild(a.getNode(),f,m,p,h,o);l=Sn(e,I,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Oo(n,e){return n.eventCache.isCompleteForChild(e)}function __(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=Se(t,l);Oo(e,J(h))&&(a=Rs(n,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=Se(t,l);Oo(e,J(h))||(a=Rs(n,a,h,c,s,r,o))}),a}function Po(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Ns(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Q(t)?c=i:c=new fe(null).setTree(t,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),m=Po(n,g,p);l=Ri(n,l,new he(f),m,s,r,o,a)}}),c.children.inorderTraversal((f,p)=>{const g=!e.serverCache.isCompleteForChild(f)&&p.value===void 0;if(!h.hasChild(f)&&!g){const m=e.serverCache.getNode().getImmediateChild(f),I=Po(n,m,p);l=Ri(n,l,new he(f),I,s,r,o,a)}}),l}function m_(n,e,t,i,s,r,o){if(ki(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Q(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Ri(n,e,t,l.getNode().getChild(t),s,r,a,o);if(Q(t)){let c=new fe(null);return l.getNode().forEachChild(Zt,(h,f)=>{c=c.set(new he(h),f)}),Ns(n,e,t,c,s,r,a,o)}else return e}else{let c=new fe(null);return i.foreach((h,f)=>{const p=Se(t,h);l.isCompleteForPath(p)&&(c=c.set(h,l.getNode().getChild(p)))}),Ns(n,e,t,c,s,r,a,o)}}function g_(n,e,t,i,s){const r=e.serverCache,o=Ml(e,r.getNode(),r.isFullyInitialized()||Q(t),r.isFiltered());return Wl(n,o,t,i,$l,s)}function y_(n,e,t,i,s,r){let o;if(ki(i,t)!=null)return e;{const a=new cr(i,e,s),l=e.eventCache.getNode();let c;if(Q(t)||J(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Si(i,Bt(e));else{const f=e.serverCache.getNode();k(f instanceof U,"serverChildren would be complete if leaf node"),h=ar(i,f)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=J(t);let f=lr(i,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?c=n.filter.updateChild(l,h,f,pe(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,U.EMPTY_NODE,pe(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Si(i,Bt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ki(i,ae())!=null,Sn(e,c,o,n.filter.filtersNodes())}}/**
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
 */class v_{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new sr(i.getIndex()),r=Up(i);this.processor_=h_(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(U.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(U.EMPTY_NODE,a.getNode(),null),h=new Et(l,o.isFullyInitialized(),s.filtersNodes()),f=new Et(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Wi(f,h),this.eventGenerator_=new Vp(this.query_)}get query(){return this.query_}}function w_(n){return Ti(n.viewCache_)}function b_(n,e){const t=Bt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Q(e)&&!t.getImmediateChild(J(e)).isEmpty())?t.getChild(e):null}function Mo(n,e,t,i){e.type===Ze.MERGE&&e.source.queryId!==null&&(k(Bt(n.viewCache_),"We should always have a full cache before handling merges"),k(Ti(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=f_(n.processor_,s,e,t,i);return d_(n.processor_,r.viewCache),k(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,I_(n,r.changes,r.viewCache.eventCache.getNode(),null)}function I_(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return qp(n.eventGenerator_,e,t,s)}/**
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
 */let xo;class E_{constructor(){this.views=new Map}}function C_(n){k(!xo,"__referenceConstructor has already been defined"),xo=n}function ur(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return k(r!=null,"SyncTree gave us an op for an invalid query."),Mo(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Mo(o,e,t,i));return r}}function T_(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Si(t,s?i:null),l=!1;a?l=!0:i instanceof U?(a=ar(t,i),l=!1):(a=U.EMPTY_NODE,l=!1);const c=Wi(new Et(a,l,!1),new Et(i,s,!1));return new v_(e,c)}return o}function Wn(n,e){let t=null;for(const i of n.views.values())t=t||b_(i,e);return t}/**
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
 */let Do;function S_(n){k(!Do,"__referenceConstructor has already been defined"),Do=n}class Lo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=a_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zl(n,e,t,i,s){return Jp(n.pendingWriteTree_,e,t,i,s),s?zi(n,new zt(Al(),e,t)):[]}function Ot(n,e,t=!1){const i=Qp(n.pendingWriteTree_,e);if(Xp(n.pendingWriteTree_,e)){let r=new fe(null);return i.snap!=null?r=r.set(ae(),!0):Ve(i.children,o=>{r=r.set(new he(o),!0)}),zi(n,new Ci(i.path,r,t))}else return[]}function Zn(n,e,t){return zi(n,new zt(Ol(),e,t))}function k_(n,e,t){const i=fe.fromObject(t);return zi(n,new $n(Ol(),e,i))}function R_(n,e,t,i){const s=jl(n,i);if(s!=null){const r=Vl(s),o=r.path,a=r.queryId,l=He(o,e),c=new zt(Pl(a),l,t);return ql(n,o,c)}else return[]}function N_(n,e,t,i){const s=jl(n,i);if(s){const r=Vl(s),o=r.path,a=r.queryId,l=He(o,e),c=fe.fromObject(t),h=new $n(Pl(a),l,c);return ql(n,o,h)}else return[]}function hr(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=He(o,e),c=Wn(a,l);if(c)return c});return Ll(s,e,r,t,!0)}function A_(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,h)=>{const f=He(c,t);i=i||Wn(h,f)});let s=n.syncPointTree_.get(t);s?i=i||Wn(s,ae()):(s=new E_,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new Et(i,!0,!1):null,a=or(n.pendingWriteTree_,e._path),l=T_(s,e,a,r?o.getNode():U.EMPTY_NODE,r);return w_(l)}function zi(n,e){return Bl(e,n.syncPointTree_,null,or(n.pendingWriteTree_,ae()))}function Bl(n,e,t,i){if(Q(n.path))return Hl(n,e,t,i);{const s=e.get(ae());t==null&&s!=null&&(t=Wn(s,ae()));let r=[];const o=J(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=Fl(i,o);r=r.concat(Bl(a,l,c,h))}return s&&(r=r.concat(ur(s,n,i,t))),r}}function Hl(n,e,t,i){const s=e.get(ae());t==null&&s!=null&&(t=Wn(s,ae()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Fl(i,o),h=n.operationForChild(o);h&&(r=r.concat(Hl(h,a,l,c)))}),s&&(r=r.concat(ur(s,n,i,t))),r}function jl(n,e){return n.tagToQueryMap.get(e)}function Vl(n){const e=n.indexOf("$");return k(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new he(n.substr(0,e))}}function ql(n,e,t){const i=n.syncPointTree_.get(e);k(i,"Missing sync point for query tag that we're tracking");const s=or(n.pendingWriteTree_,e);return ur(i,t,s,null)}/**
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
 */class dr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new dr(t)}node(){return this.node_}}class fr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Se(this.path_,e);return new fr(this.syncTree_,t)}node(){return hr(this.syncTree_,this.path_)}}const O_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Fo=function(n,e,t){if(!n||typeof n!="object")return n;if(k(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return P_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return M_(n[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},P_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:k(!1,"Unexpected server value: "+n)}},M_=function(n,e,t){n.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&k(!1,"Unexpected increment value: "+i);const s=e.node();if(k(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},x_=function(n,e,t,i){return pr(e,new fr(t,n),i)},Gl=function(n,e,t){return pr(n,new dr(e),t)};function pr(n,e,t){const i=n.getPriority().val(),s=Fo(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Fo(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Re(a,Ae(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Re(s))),o.forEachChild(ve,(a,l)=>{const c=pr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class _r{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function mr(n,e){let t=e instanceof he?e:new he(e),i=n,s=J(t);for(;s!==null;){const r=en(i.node.children,s)||{children:{},childCount:0};i=new _r(s,i,r),t=pe(t),s=J(t)}return i}function fn(n){return n.node.value}function Kl(n,e){n.node.value=e,As(n)}function Yl(n){return n.node.childCount>0}function D_(n){return fn(n)===void 0&&!Yl(n)}function Bi(n,e){Ve(n.node.children,(t,i)=>{e(new _r(t,n,i))})}function Jl(n,e,t,i){t&&!i&&e(n),Bi(n,s=>{Jl(s,e,!0,i)}),t&&i&&e(n)}function L_(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ei(n){return new he(n.parent===null?n.name:ei(n.parent)+"/"+n.name)}function As(n){n.parent!==null&&F_(n.parent,n.name,n)}function F_(n,e,t){const i=D_(t),s=ht(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,As(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,As(n))}/**
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
 */const U_=/[\[\].#$\/\u0000-\u001F\u007F]/,$_=/[\[\].#$\u0000-\u001F\u007F]/,ls=10*1024*1024,Ql=function(n){return typeof n=="string"&&n.length!==0&&!U_.test(n)},Xl=function(n){return typeof n=="string"&&n.length!==0&&!$_.test(n)},W_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Xl(n)},z_=function(n,e,t,i){i&&e===void 0||gr(Ls(n,"value"),e,t)},gr=function(n,e,t){const i=t instanceof he?new pp(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Rt(i));if(typeof e=="function")throw new Error(n+"contains a function "+Rt(i)+" with contents = "+e.toString());if(el(e))throw new Error(n+"contains "+e.toString()+" "+Rt(i));if(typeof e=="string"&&e.length>ls/3&&Pi(e)>ls)throw new Error(n+"contains a string greater than "+ls+" utf8 bytes "+Rt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ve(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ql(o)))throw new Error(n+" contains an invalid key ("+o+") "+Rt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_p(i,o),gr(n,a,i),mp(i)}),s&&r)throw new Error(n+' contains ".value" child '+Rt(i)+" in addition to actual children.")}},Zl=function(n,e,t,i){if(!(i&&t===void 0)&&!Xl(t))throw new Error(Ls(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},B_=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Zl(n,e,t,i)},H_=function(n,e){if(J(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},j_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ql(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!W_(t))throw new Error(Ls(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class V_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yr(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!tr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function q_(n,e,t){yr(n,t),ec(n,i=>tr(i,e))}function ut(n,e,t){yr(n,t),ec(n,i=>Ke(i,e)||Ke(e,i))}function ec(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(G_(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function G_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();xt&&Le("event: "+t.toString()),dn(i)}}}/**
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
 */const K_="repo_interrupt",Y_=25;class J_{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new V_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ei(),this.transactionQueueTree_=new _r,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Q_(n,e,t){if(n.stats_=Zs(n.repoInfo_),n.forceRestClient_||Uf())n.server_=new Ii(n.repoInfo_,(i,s,r,o)=>{Uo(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>$o(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new lt(n.repoInfo_,e,(i,s,r,o)=>{Uo(n,i,s,r,o)},i=>{$o(n,i)},i=>{Z_(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=jf(n.repoInfo_,()=>new jp(n.stats_,n.server_)),n.infoData_=new $p,n.infoSyncTree_=new Lo({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Zn(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wr(n,"connected",!1),n.serverSyncTree_=new Lo({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);ut(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function X_(n){const t=n.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function vr(n){return O_({timestamp:X_(n)})}function Uo(n,e,t,i,s){n.dataUpdateCount++;const r=new he(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=di(t,c=>Ae(c));o=N_(n.serverSyncTree_,r,l,s)}else{const l=Ae(t);o=R_(n.serverSyncTree_,r,l,s)}else if(i){const l=di(t,c=>Ae(c));o=k_(n.serverSyncTree_,r,l)}else{const l=Ae(t);o=Zn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ji(n,r)),ut(n.eventQueue_,a,o)}function $o(n,e){wr(n,"connected",e),e===!1&&nm(n)}function Z_(n,e){Ve(e,(t,i)=>{wr(n,t,i)})}function wr(n,e,t){const i=new he("/.info/"+e),s=Ae(t);n.infoData_.updateSnapshot(i,s);const r=Zn(n.infoSyncTree_,i,s);ut(n.eventQueue_,i,r)}function tc(n){return n.nextWriteId_++}function em(n,e){const t=A_(n.serverSyncTree_,e);return t!=null?Promise.resolve(t):n.server_.get(e).then(i=>{const s=Ae(i).withIndex(e._queryParams.getIndex()),r=Zn(n.serverSyncTree_,e._path,s);return q_(n.eventQueue_,e._path,r),Promise.resolve(s)},i=>(Hi(n,"get for query "+Oe(e)+" failed: "+i),Promise.reject(new Error(i))))}function tm(n,e,t,i,s){Hi(n,"set",{path:e.toString(),value:t,priority:i});const r=vr(n),o=Ae(t,i),a=hr(n.serverSyncTree_,e),l=Gl(o,a,r),c=tc(n),h=zl(n.serverSyncTree_,e,l,c,!0);yr(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(p,g)=>{const m=p==="ok";m||Be("set at "+e+" failed: "+p);const I=Ot(n.serverSyncTree_,c,!m);ut(n.eventQueue_,e,I),sm(n,s,p,g)});const f=oc(n,e);ji(n,f),ut(n.eventQueue_,f,[])}function nm(n){Hi(n,"onDisconnectEvents");const e=vr(n),t=Ei();Ts(n.onDisconnect_,ae(),(s,r)=>{const o=x_(s,r,n.serverSyncTree_,e);Nl(t,s,o)});let i=[];Ts(t,ae(),(s,r)=>{i=i.concat(Zn(n.serverSyncTree_,s,r));const o=oc(n,s);ji(n,o)}),n.onDisconnect_=Ei(),ut(n.eventQueue_,ae(),i)}function im(n){n.persistentConnection_&&n.persistentConnection_.interrupt(K_)}function Hi(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Le(t,...e)}function sm(n,e,t,i){e&&dn(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function nc(n,e,t){return hr(n.serverSyncTree_,e,t)||U.EMPTY_NODE}function br(n,e=n.transactionQueueTree_){if(e||Vi(n,e),fn(e)){const t=sc(n,e);k(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&rm(n,ei(e),t)}else Yl(e)&&Bi(e,t=>{br(n,t)})}function rm(n,e,t){const i=t.map(c=>c.currentWriteId),s=nc(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const h=t[c];k(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=He(e,h.path);r=r.updateChild(f,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Hi(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let p=0;p<t.length;p++)t[p].status=2,h=h.concat(Ot(n.serverSyncTree_,t[p].currentWriteId)),t[p].onComplete&&f.push(()=>t[p].onComplete(null,!0,t[p].currentOutputSnapshotResolved)),t[p].unwatcher();Vi(n,mr(n.transactionQueueTree_,e)),br(n,n.transactionQueueTree_),ut(n.eventQueue_,e,h);for(let p=0;p<f.length;p++)dn(f[p])}else{if(c==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{Be("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=c}ji(n,e)}},o)}function ji(n,e){const t=ic(n,e),i=ei(t),s=sc(n,t);return om(n,s,i),i}function om(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=He(t,l.path);let h=!1,f;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,s=s.concat(Ot(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Y_)h=!0,f="maxretry",s=s.concat(Ot(n.serverSyncTree_,l.currentWriteId,!0));else{const p=nc(n,l.path,o);l.currentInputSnapshot=p;const g=e[a].update(p.val());if(g!==void 0){gr("transaction failed: Data returned ",g,l.path);let m=Ae(g);typeof g=="object"&&g!=null&&ht(g,".priority")||(m=m.updatePriority(p.getPriority()));const b=l.currentWriteId,y=vr(n),N=Gl(m,p,y);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=N,l.currentWriteId=tc(n),o.splice(o.indexOf(b),1),s=s.concat(zl(n.serverSyncTree_,l.path,N,l.currentWriteId,l.applyLocally)),s=s.concat(Ot(n.serverSyncTree_,b,!0))}else h=!0,f="nodata",s=s.concat(Ot(n.serverSyncTree_,l.currentWriteId,!0))}ut(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}Vi(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)dn(i[a]);br(n,n.transactionQueueTree_)}function ic(n,e){let t,i=n.transactionQueueTree_;for(t=J(e);t!==null&&fn(i)===void 0;)i=mr(i,t),e=pe(e),t=J(e);return i}function sc(n,e){const t=[];return rc(n,e,t),t.sort((i,s)=>i.order-s.order),t}function rc(n,e,t){const i=fn(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Bi(e,s=>{rc(n,s,t)})}function Vi(n,e){const t=fn(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Kl(e,t.length>0?t:void 0)}Bi(e,i=>{Vi(n,i)})}function oc(n,e){const t=ei(ic(n,e)),i=mr(n.transactionQueueTree_,e);return L_(i,s=>{cs(n,s)}),cs(n,i),Jl(i,s=>{cs(n,s)}),t}function cs(n,e){const t=fn(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(k(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(k(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Ot(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Kl(e,void 0):t.length=r+1,ut(n.eventQueue_,ei(e),s);for(let o=0;o<i.length;o++)dn(i[o])}}/**
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
 */function am(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function lm(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Be(`Invalid query segment '${t}' in query '${n}'`)}return e}const Wo=function(n,e){const t=cm(n),i=t.namespace;t.domain==="firebase.com"&&$t(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&$t("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Af();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new zf(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new he(t.pathString)}},cm=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(h,f)),h<f&&(s=am(n.substring(h,f)));const p=lm(n.substring(Math.min(n.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")t="localhost";else if(g.split(".").length<=2)t=g;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=i}"ns"in p&&(r=p.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class Ir{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return Q(this._path)?null:wl(this._path)}get ref(){return new Tt(this._repo,this._path)}get _queryIdentifier(){const e=To(this._queryParams),t=Qs(e);return t==="{}"?"default":t}get _queryObject(){return To(this._queryParams)}isEqual(e){if(e=qe(e),!(e instanceof Ir))return!1;const t=this._repo===e._repo,i=tr(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+fp(this._path)}}class Tt extends Ir{constructor(e,t){super(e,t,new rr,!1)}get parent(){const e=Il(this._path);return e===null?null:new Tt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ni{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new he(e),i=Os(this.ref,e);return new Ni(this._node.getChild(t),i,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Ni(s,Os(this.ref,i),ve)))}hasChild(e){const t=new he(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Er(n,e){return n=qe(n),n._checkNotDeleted("ref"),e!==void 0?Os(n._root,e):n._root}function Os(n,e){return n=qe(n),J(n._path)===null?B_("child","path",e,!1):Zl("child","path",e,!1),new Tt(n._repo,Se(n._path,e))}function um(n,e){n=qe(n),H_("set",n._path),z_("set",e,n._path,!1);const t=new Oi;return tm(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function ac(n){return n=qe(n),em(n._repo,n).then(e=>new Ni(e,new Tt(n._repo,n._path),n._queryParams.getIndex()))}C_(Tt);S_(Tt);/**
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
 */const hm="FIREBASE_DATABASE_EMULATOR_HOST",Ps={};let dm=!1;function fm(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||$t("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Wo(r,s),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[hm]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Wo(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const h=s&&l?new Is(Is.OWNER):new Wf(n.name,n.options,e);j_("Invalid Firebase Database URL",o),Q(o.path)||$t("Database URL must point to the root of a Firebase Database (not including a child path).");const f=_m(a,n,h,new $f(n.name,t));return new mm(f,n)}function pm(n,e){const t=Ps[e];(!t||t[n.key]!==n)&&$t(`Database ${e}(${n.repoInfo_}) has already been deleted.`),im(n),delete t[n.key]}function _m(n,e,t,i){let s=Ps[e.name];s||(s={},Ps[e.name]=s);let r=s[n.toURLString()];return r&&$t("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new J_(n,dm,t,i),s[n.toURLString()]=r,r}class mm{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Q_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tt(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$t("Cannot call "+e+" on a deleted database.")}}function Cr(n=ma(),e){return Ws(n,"database").getImmediate({identifier:e})}/**
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
 */function gm(n){Tf(Hn),tn(new Dt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return fm(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),yt(ao,lo,n),yt(ao,lo,"esm2017")}lt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};lt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};gm();var Pt=256,lc=[],zo=256,ri;for(;Pt--;)lc[Pt]=(Pt+256).toString(16).substring(1);function ym(n){var e=0,t=n||11;if(!ri||Pt+t>zo*2)for(ri="",Pt=0;e<zo;e++)ri+=lc[Math.random()*256|0];return ri.substring(Pt,Pt+++t)}function Bo(n,e,t){const i=n.slice();return i[27]=e[t][0],i[28]=e[t][1],i}function Ho(n){let e,t,i,s,r,o,a,l,c,h,f,p,g,m,I,b,y,N,v,E,T,R,O,P,L,F,X,Z,se,C,j,W,Y,ee,A,q,D,H,Te,oe,Ie,ne,ke,ge,Qe,de,_e,ye,$e,We,ie,St,Xe,V,le;return{c(){e=_("span"),e.textContent="Shipping details",t=w(),i=_("hr"),s=w(),r=_("div"),o=_("div"),a=_("span"),a.textContent="FULL NAME",l=w(),c=_("input"),h=w(),f=_("div"),p=_("span"),p.textContent="ADDRESS",g=w(),m=_("input"),I=w(),b=_("div"),y=_("span"),y.textContent="POST CODE",N=w(),v=_("input"),E=w(),T=_("div"),R=_("span"),R.textContent="COUNTRY",O=w(),P=_("input"),L=w(),F=_("span"),F.textContent="Payment details",X=w(),Z=_("hr"),se=w(),C=_("div"),j=_("span"),j.textContent="NAME ON CARD",W=w(),Y=_("input"),ee=w(),A=_("div"),q=_("span"),q.textContent="CARD NUMBER",D=w(),H=_("input"),Te=w(),oe=_("div"),Ie=_("div"),ne=_("span"),ne.textContent="EXPIRY DATE",ke=w(),ge=_("input"),Qe=w(),de=_("div"),_e=_("span"),_e.textContent="CVV",ye=w(),$e=_("input"),We=w(),ie=_("button"),St=B("Checkout"),d(e,"class","text-2xl"),d(i,"class","mb-5 mt-2"),d(a,"class","text-xs"),d(c,"class","input border-gray-300 h-10"),d(c,"type","text"),c.required=!0,d(o,"class","flex flex-col mb-5"),d(p,"class","text-xs"),d(m,"class","input border-gray-300 h-10"),d(m,"type","text"),m.required=!0,d(f,"class","flex flex-col mb-5"),d(y,"class","text-xs"),d(v,"class","input border-gray-300 h-10"),d(v,"type","text"),v.required=!0,d(b,"class","flex flex-col mb-5"),d(R,"class","text-xs"),d(P,"class","input border-gray-300 h-10"),d(P,"type","text"),P.required=!0,d(T,"class","flex flex-col mb-5"),d(r,"class","flex flex-col"),d(F,"class","text-2xl"),d(Z,"class","mb-5 mt-2"),d(j,"class","text-xs"),d(Y,"class","input border-gray-300 h-10"),d(Y,"type","text"),Y.required=!0,d(C,"class","flex flex-col"),d(q,"class","text-xs"),H.required=!0,d(H,"class","input border-gray-300 h-10"),d(H,"type","text"),d(H,"placeholder","0000 0000 0000 0000"),d(A,"class","flex flex-col my-5"),d(ne,"class","text-xs"),ge.required=!0,d(ge,"class","input border-gray-300 h-10 w-40"),d(ge,"type","text"),d(ge,"placeholder","04/2025"),d(Ie,"class","flex flex-col"),d(_e,"class","text-xs"),$e.required=!0,d($e,"class","input border-gray-300 h-10 w-40"),d($e,"type","password"),d($e,"placeholder","123"),d(de,"class","flex flex-col"),d(oe,"class","flex justify-evenly"),d(ie,"class",Xe=`${!n[8]&&"btn-disabled"} btn btn-primary mt-5 w-full`)},m(S,z){x(S,e,z),x(S,t,z),x(S,i,z),x(S,s,z),x(S,r,z),u(r,o),u(o,a),u(o,l),u(o,c),n[15](c),u(r,h),u(r,f),u(f,p),u(f,g),u(f,m),n[16](m),u(r,I),u(r,b),u(b,y),u(b,N),u(b,v),n[17](v),u(r,E),u(r,T),u(T,R),u(T,O),u(T,P),n[18](P),x(S,L,z),x(S,F,z),x(S,X,z),x(S,Z,z),x(S,se,z),x(S,C,z),u(C,j),u(C,W),u(C,Y),n[19](Y),x(S,ee,z),x(S,A,z),u(A,q),u(A,D),u(A,H),n[20](H),x(S,Te,z),x(S,oe,z),u(oe,Ie),u(Ie,ne),u(Ie,ke),u(Ie,ge),n[22](ge),u(oe,Qe),u(oe,de),u(de,_e),u(de,ye),u(de,$e),n[24]($e),x(S,We,z),x(S,ie,z),u(ie,St),V||(le=[Ee(c,"input",n[13]),Ee(m,"input",n[13]),Ee(v,"input",n[13]),Ee(P,"input",n[13]),Ee(Y,"input",n[13]),Ee(H,"input",n[13]),Ee(H,"keypress",n[21]),Ee(ge,"input",n[13]),Ee(ge,"keypress",n[23]),Ee($e,"input",n[13]),Ee(ie,"click",n[14])],V=!0)},p(S,z){z&256&&Xe!==(Xe=`${!S[8]&&"btn-disabled"} btn btn-primary mt-5 w-full`)&&d(ie,"class",Xe)},d(S){S&&M(e),S&&M(t),S&&M(i),S&&M(s),S&&M(r),n[15](null),n[16](null),n[17](null),n[18](null),S&&M(L),S&&M(F),S&&M(X),S&&M(Z),S&&M(se),S&&M(C),n[19](null),S&&M(ee),S&&M(A),n[20](null),S&&M(Te),S&&M(oe),n[22](null),n[24](null),S&&M(We),S&&M(ie),V=!1,Ct(le)}}}function jo(n){let e,t,i,s,r,o,a=n[27]+"",l,c,h,f,p=n[28].quantity+"",g,m,I,b=(n[28].price*n[28].quantity).toLocaleString("en-US",{style:"currency",currency:"GBP"})+"",y,N;return{c(){e=_("li"),t=_("img"),s=w(),r=_("div"),o=_("b"),l=B(a),c=w(),h=_("span"),f=B("x"),g=B(p),m=w(),I=_("span"),y=B(b),N=w(),d(t,"class","mr-5"),bt(t.src,i=n[28].image)||d(t,"src",i),d(t,"alt","drink"),d(r,"class","flex flex-col justify-start items-start"),d(e,"class","flex h-20 w-20 >:rounded-box items-center")},m(v,E){x(v,e,E),u(e,t),u(e,s),u(e,r),u(r,o),u(o,l),u(r,c),u(r,h),u(h,f),u(h,g),u(r,m),u(r,I),u(I,y),u(e,N)},p(v,E){E&512&&!bt(t.src,i=v[28].image)&&d(t,"src",i),E&512&&a!==(a=v[27]+"")&&ce(l,a),E&512&&p!==(p=v[28].quantity+"")&&ce(g,p),E&512&&b!==(b=(v[28].price*v[28].quantity).toLocaleString("en-US",{style:"currency",currency:"GBP"})+"")&&ce(y,b)},d(v){v&&M(e)}}}function vm(n){let e,t,i,s,r,o,a,l,c,h,f,p,g,m,I,b,y,N,v,E,T,R,O=n[26]()+"",P,L,F,X,Z,se,C,j,W=n[10].email&&Ho(n);h=new nn({});let Y=Object.entries(n[9]),ee=[];for(let A=0;A<Y.length;A+=1)ee[A]=jo(Bo(n,Y,A));return X=new nn({}),{c(){var A;e=_("form"),t=_("div"),W&&W.c(),i=w(),s=_("button"),r=B("Sign in to checkout"),a=w(),l=_("div"),c=_("div"),Ce(h.$$.fragment),f=w(),p=_("span"),p.textContent="Your order",g=w(),m=_("hr"),I=w(),b=_("ul");for(let q=0;q<ee.length;q+=1)ee[q].c();y=w(),N=_("hr"),v=w(),E=_("span"),T=_("b"),T.textContent="Total:",R=w(),P=B(O),L=w(),F=_("div"),Ce(X.$$.fragment),d(s,"class",o=`${((A=n[10].email)==null?void 0:A.length)>0&&"hidden"} btn btn-primary mt-5 w-full`),d(t,"class","lg:mr-10"),d(c,"class","justify-center >:w-40 w-full hidden lg:flex"),d(p,"class","text-2xl"),d(m,"class","mb-5 mt-2 bg-black"),d(b,"class","w-96 overflow-y-auto >:my-5"),d(N,"class","my-5"),d(l,"class","mb-5"),d(F,"class","flex justify-center w-full >:w-40 lg:hidden"),d(e,"action","#/checkout"),d(e,"class",Z=`flex flex-col-reverse ${n[10].email&&"lg:flex-row"} w-11/12 md:w-auto md:justify-between bg-white shadow-xl rounded-box p-5 mb-5`)},m(A,q){x(A,e,q),u(e,t),W&&W.m(t,null),u(t,i),u(t,s),u(s,r),u(e,a),u(e,l),u(l,c),we(h,c,null),u(l,f),u(l,p),u(l,g),u(l,m),u(l,I),u(l,b);for(let D=0;D<ee.length;D+=1)ee[D].m(b,null);u(l,y),u(l,N),u(l,v),u(l,E),u(E,T),u(E,R),u(E,P),u(e,L),u(e,F),we(X,F,null),se=!0,C||(j=Ee(s,"click",n[25]),C=!0)},p(A,[q]){var D;if(A[10].email?W?W.p(A,q):(W=Ho(A),W.c(),W.m(t,i)):W&&(W.d(1),W=null),(!se||q&1024&&o!==(o=`${((D=A[10].email)==null?void 0:D.length)>0&&"hidden"} btn btn-primary mt-5 w-full`))&&d(s,"class",o),q&512){Y=Object.entries(A[9]);let H;for(H=0;H<Y.length;H+=1){const Te=Bo(A,Y,H);ee[H]?ee[H].p(Te,q):(ee[H]=jo(Te),ee[H].c(),ee[H].m(b,null))}for(;H<ee.length;H+=1)ee[H].d(1);ee.length=Y.length}(!se||q&512)&&O!==(O=A[26]()+"")&&ce(P,O),(!se||q&1024&&Z!==(Z=`flex flex-col-reverse ${A[10].email&&"lg:flex-row"} w-11/12 md:w-auto md:justify-between bg-white shadow-xl rounded-box p-5 mb-5`))&&d(e,"class",Z)},i(A){se||(te(h.$$.fragment,A),te(X.$$.fragment,A),se=!0)},o(A){re(h.$$.fragment,A),re(X.$$.fragment,A),se=!1},d(A){A&&M(e),W&&W.d(),be(h),zn(ee,A),be(X),C=!1,j()}}}function wm(n,e,t){let i,s;at(n,rt,C=>t(9,i=C)),at(n,vt,C=>t(10,s=C));let r;const o=()=>{t(0,r.value=r.value.replace(/\W/gi,"").replace(/(.{4})/g,"$1 "),r)};let a;const l=()=>{if(a.value.length>1&&!a.value.match("/")){const C=a.value.split("");let j=C[0]+C[1]+"/";for(let W=2;W<C.length;W++)j+=C[W];t(1,a.value=j,a)}};document.addEventListener("onautocomplete",C=>{C.target.hasAttribute("autocompleted")&&(o(),l())});let c,h,f,p,g,m,I=!1;const b=()=>{if(!s.email)return!1;try{return r.value.length>=19&&(a.value.length>6||a.value.length==5)&&c.value.length>2&&h.value.length>0&&f.value.length>0&&p.value.length>0&&g.value.length>0&&m.value.length>0?(t(8,I=!0),!0):(t(8,I=!1),!1)}catch{return!1}},y=()=>{if(b()){const C=ym(20),j=Cr();um(Er(j,`users/${s.email.replace(".","-")}/orders/${C}`),{basket:i,shipping:{name:h.value,address:p.value,post:g.value,country:m.value},date:new Date().toJSON().slice(0,10).replace(/-/g,"/")}),setTimeout(()=>{sn(`/orders/${C}`),nt(rt,i={},i),localStorage.setItem("basket",null)},500)}};function N(C){Ue[C?"unshift":"push"](()=>{f=C,t(4,f)})}function v(C){Ue[C?"unshift":"push"](()=>{p=C,t(5,p)})}function E(C){Ue[C?"unshift":"push"](()=>{g=C,t(6,g)})}function T(C){Ue[C?"unshift":"push"](()=>{m=C,t(7,m)})}function R(C){Ue[C?"unshift":"push"](()=>{h=C,t(3,h)})}function O(C){Ue[C?"unshift":"push"](()=>{r=C,t(0,r)})}const P=C=>{(C.which<48||C.which>57||r.value.length>=19)&&C.preventDefault(),o()};function L(C){Ue[C?"unshift":"push"](()=>{a=C,t(1,a)})}const F=C=>{(C.which<48||C.which>57||a.value.length>=7)&&C.preventDefault(),l()};function X(C){Ue[C?"unshift":"push"](()=>{c=C,t(2,c)})}return[r,a,c,h,f,p,g,m,I,i,s,o,l,b,y,N,v,E,T,R,O,P,L,F,X,()=>setTimeout(()=>{sn("/login")},100),()=>{let C=0;return Object.values(i).map(j=>{C+=j.price*j.quantity}),C.toLocaleString("en-US",{style:"currency",currency:"GBP"})}]}class bm extends De{constructor(e){super(),xe(this,e,wm,vm,Me,{})}}function Im(n){let e;return{c(){e=_("div"),e.textContent="Page not found."},m(t,i){x(t,e,i)},p:K,i:K,o:K,d(t){t&&M(e)}}}class Em extends De{constructor(e){super(),xe(this,e,null,Im,Me,{})}}function Cm(n){let e,t;return e=new Ja({}),{c(){Ce(e.$$.fragment)},m(i,s){we(e,i,s),t=!0},i(i){t||(te(e.$$.fragment,i),t=!0)},o(i){re(e.$$.fragment,i),t=!1},d(i){be(e,i)}}}function Tm(n){let e,t;return e=new Ya({}),{c(){Ce(e.$$.fragment)},m(i,s){we(e,i,s),t=!0},i(i){t||(te(e.$$.fragment,i),t=!0)},o(i){re(e.$$.fragment,i),t=!1},d(i){be(e,i)}}}function Sm(n){let e,t,i,s,r,o,a,l,c,h,f,p,g=(n[3]||n[4])+"",m,I,b,y,N,v,E,T,R,O,P,L,F,X,Z,se,C,j,W,Y,ee,A,q,D,H;i=new nn({});const Te=[Tm,Cm],oe=[];function Ie(ne,ke){return ne[3]?0:ne[4]?1:-1}return~(c=Ie(n))&&(h=oe[c]=Te[c](n)),{c(){e=_("div"),t=_("div"),Ce(i.$$.fragment),s=w(),r=_("h1"),r.textContent="Sign up to get started!",o=w(),a=_("div"),l=_("div"),h&&h.c(),f=w(),p=_("span"),m=B(g),b=w(),y=_("form"),N=_("div"),v=_("span"),v.textContent="Email Address",E=w(),T=_("input"),R=w(),O=_("div"),P=_("span"),P.textContent="Password",L=w(),F=_("input"),X=w(),Z=_("div"),se=_("span"),se.textContent="Confirm Password",C=w(),j=_("input"),W=w(),Y=_("button"),Y.textContent="Register",ee=w(),A=_("a"),A.textContent="Already have an account?",d(t,"class",">:w-28"),d(r,"class","text-3xl font-bold mt-5"),d(p,"class","h-full capital"),d(l,"class","unalert"),d(a,"class",I=`alert max-w-xs shadow-lg transition-all duration-200 ${n[3]&&"alert-error"} ${n[4]&&"alert-success"} ${n[3]||n[4]?"opacity-100 my-5":"opacity-0"}`),d(v,"class","mb-1"),d(T,"type","email"),d(T,"autocomplete","email"),T.required=!0,d(T,"class","input border-gray-300 h-10"),d(N,"class","flex flex-col mb-3"),d(P,"class","mb-1"),d(F,"type","password"),d(F,"autocomplete","current-password"),F.required=!0,d(F,"class","input border-gray-300 h-10"),d(O,"class","flex flex-col mb-3"),d(se,"class","mb-1"),d(j,"type","password"),d(j,"autocomplete","current-password"),j.required=!0,d(j,"class","input border-gray-300 h-10"),d(Z,"class","flex flex-col mb-3"),d(Y,"type","submit"),d(Y,"class","btn btn-primary mt-3"),d(A,"class","text-primary mt-3 link"),d(A,"href","#/login"),d(y,"action","#/register"),d(y,"class","bg-white rounded-box shadow-lg flex flex-col w-full p-5"),d(e,"class","flex flex-col items-center")},m(ne,ke){x(ne,e,ke),u(e,t),we(i,t,null),u(e,s),u(e,r),u(e,o),u(e,a),u(a,l),~c&&oe[c].m(l,null),u(l,f),u(l,p),u(p,m),u(e,b),u(e,y),u(y,N),u(N,v),u(N,E),u(N,T),n[6](T),u(y,R),u(y,O),u(O,P),u(O,L),u(O,F),n[7](F),u(y,X),u(y,Z),u(Z,se),u(Z,C),u(Z,j),n[8](j),u(y,W),u(y,Y),u(y,ee),u(y,A),q=!0,D||(H=Ee(Y,"click",n[5]),D=!0)},p(ne,[ke]){let ge=c;c=Ie(ne),c!==ge&&(h&&(Ht(),re(oe[ge],1,1,()=>{oe[ge]=null}),jt()),~c?(h=oe[c],h||(h=oe[c]=Te[c](ne),h.c()),te(h,1),h.m(l,f)):h=null),(!q||ke&24)&&g!==(g=(ne[3]||ne[4])+"")&&ce(m,g),(!q||ke&24&&I!==(I=`alert max-w-xs shadow-lg transition-all duration-200 ${ne[3]&&"alert-error"} ${ne[4]&&"alert-success"} ${ne[3]||ne[4]?"opacity-100 my-5":"opacity-0"}`))&&d(a,"class",I)},i(ne){q||(te(i.$$.fragment,ne),te(h),q=!0)},o(ne){re(i.$$.fragment,ne),re(h),q=!1},d(ne){ne&&M(e),be(i),~c&&oe[c].d(),n[6](null),n[7](null),n[8](null),D=!1,H()}}}function km(n,e,t){let i,s,r,o,a;const l=()=>i.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),c=()=>{if(s.value&&r.value&&i.value&&s.value==r.value&&l()){const g=Fi();Oh(g,i.value,s.value).then(m=>{t(4,a="Account creation successful!"),t(0,i.value="",i),t(1,s.value="",s),t(2,r.value="",r),setTimeout(()=>{sn("/")},500)}).catch(m=>{t(3,o=m.message.match(/\(([^)]+)\)/)[1].replaceAll("-"," ").replace("auth/",""))})}else t(3,o="Please enter the required fields correctly")};function h(g){Ue[g?"unshift":"push"](()=>{i=g,t(0,i)})}function f(g){Ue[g?"unshift":"push"](()=>{s=g,t(1,s)})}function p(g){Ue[g?"unshift":"push"](()=>{r=g,t(2,r)})}return[i,s,r,o,a,c,h,f,p]}class Rm extends De{constructor(e){super(),xe(this,e,km,Sm,Me,{})}}function Vo(n,e,t){const i=n.slice();return i[6]=e[t][0],i[7]=e[t][1],i}function qo(n){let e;return{c(){e=_("span"),e.textContent="You have no orders."},m(t,i){x(t,e,i)},d(t){t&&M(e)}}}function Go(n){let e,t,i,s=n[7].date+"",r,o,a,l,c=ee()+"",h,f,p,g,m=n[7].shipping.name+"",I,b,y,N,v=n[6]+"",E,T,R,O,P,L,F,X=A()+"",Z,se,C,j,W,Y;function ee(){return n[2](n[7])}function A(){return n[3](n[7])}return{c(){e=_("li"),t=_("div"),i=_("span"),r=B(s),o=w(),a=_("span"),l=B("Total "),h=B(c),f=w(),p=_("span"),g=B("Dispatch To "),I=B(m),b=w(),y=_("span"),N=B("Order #"),E=B(v),T=w(),R=_("div"),O=_("img"),L=w(),F=_("div"),Z=B(X),se=w(),C=_("a"),j=B("View Details"),Y=w(),d(t,"class","bg-gray-800 flex md:flex-row flex-col items-start md:justify-evenly rounded-t-box h-full md:h-14 text-white >:ml-5"),d(O,"class","md:flex w-40 h-40 md:w-auto rounded-box md:rounded-tl-none"),bt(O.src,P=Object.values(n[7].basket)[0].image)||d(O,"src",P),d(O,"alt",""),d(F,"class","mt-7 md:ml-5 text-xl font-semibold w-full text-center"),d(C,"class","btn btn-primary md:mr-5 mt-5"),d(C,"href",W=`#/orders/${n[6]}`),d(R,"class","bg-white h-auto p-5 md:p-0 flex flex-col md:flex-row justify-between items-center md:items-start"),d(e,"class","flex flex-col rounded-box shadow mb-5 last:mb-0")},m(q,D){x(q,e,D),u(e,t),u(t,i),u(i,r),u(t,o),u(t,a),u(a,l),u(a,h),u(t,f),u(t,p),u(p,g),u(p,I),u(t,b),u(t,y),u(y,N),u(y,E),u(e,T),u(e,R),u(R,O),u(R,L),u(R,F),u(F,Z),u(R,se),u(R,C),u(C,j),u(e,Y)},p(q,D){n=q,D&2&&s!==(s=n[7].date+"")&&ce(r,s),D&2&&c!==(c=ee()+"")&&ce(h,c),D&2&&m!==(m=n[7].shipping.name+"")&&ce(I,m),D&2&&v!==(v=n[6]+"")&&ce(E,v),D&2&&!bt(O.src,P=Object.values(n[7].basket)[0].image)&&d(O,"src",P),D&2&&X!==(X=A()+"")&&ce(Z,X),D&2&&W!==(W=`#/orders/${n[6]}`)&&d(C,"href",W)},d(q){q&&M(e)}}}function Nm(n){let e,t,i,s,r,o,a=n[0]==!1&&Object.keys(n[1]).length==0,l,c,h,f,p,g,m=a&&qo(),I=Object.entries(n[1]),b=[];for(let y=0;y<I.length;y+=1)b[y]=Go(Vo(n,I,y));return{c(){e=_("div"),t=Pe("svg"),i=Pe("path"),s=Pe("path"),o=w(),m&&m.c(),l=w(),c=_("div"),h=_("span"),h.textContent="Order history",f=w(),p=_("ul");for(let y=0;y<b.length;y+=1)b[y].c();d(i,"d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"),d(i,"fill","currentColor"),d(s,"d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"),d(s,"fill","currentFill"),d(t,"role","status"),d(t,"class","w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"),d(t,"viewBox","0 0 100 101"),d(t,"fill","none"),d(t,"xmlns","http://www.w3.org/2000/svg"),d(e,"class",r=`${n[0]?"flex":"hidden"} absolute z-0 w-full h-full items-center justify-center`),d(h,"class","text-3xl font-bold"),d(p,"class","mt-5"),d(c,"class",g=`${Object.keys(n[1]).length==0&&"hidden"} bg-white shadow-xl rounded-box p-5 w-11/12 max-w-4xl`)},m(y,N){x(y,e,N),u(e,t),u(t,i),u(t,s),x(y,o,N),m&&m.m(y,N),x(y,l,N),x(y,c,N),u(c,h),u(c,f),u(c,p);for(let v=0;v<b.length;v+=1)b[v].m(p,null)},p(y,[N]){if(N&1&&r!==(r=`${y[0]?"flex":"hidden"} absolute z-0 w-full h-full items-center justify-center`)&&d(e,"class",r),N&3&&(a=y[0]==!1&&Object.keys(y[1]).length==0),a?m||(m=qo(),m.c(),m.m(l.parentNode,l)):m&&(m.d(1),m=null),N&2){I=Object.entries(y[1]);let v;for(v=0;v<I.length;v+=1){const E=Vo(y,I,v);b[v]?b[v].p(E,N):(b[v]=Go(E),b[v].c(),b[v].m(p,null))}for(;v<b.length;v+=1)b[v].d(1);b.length=I.length}N&2&&g!==(g=`${Object.keys(y[1]).length==0&&"hidden"} bg-white shadow-xl rounded-box p-5 w-11/12 max-w-4xl`)&&d(c,"class",g)},i:K,o:K,d(y){y&&M(e),y&&M(o),m&&m.d(y),y&&M(l),y&&M(c),zn(b,y)}}}function Am(n,e,t){let i;at(n,vt,c=>t(4,i=c));let s=!0,r={};const o=Er(Cr(),"users/");return ac(o).then(c=>{try{const h=c.val()[i.email.replace(".","-")].orders;h?t(1,r=h):t(1,r={})}catch{t(1,r={})}t(0,s=!1)}),[s,r,c=>{let h=0;return Object.values(c.basket).map(f=>{h+=f.price*f.quantity}),h.toLocaleString("en-US",{style:"currency",currency:"GBP"})},c=>{let h="";return Object.keys(c.basket).map(f=>{h+=`${f}, `}),h.slice(0,-2)}]}class Om extends De{constructor(e){super(),xe(this,e,Am,Nm,Me,{})}}function Ko(n,e,t){const i=n.slice();return i[5]=e[t][0],i[6]=e[t][1],i}function Yo(n){let e,t,i,s,r,o,a=n[5]+"",l,c,h,f,p=n[6].quantity+"",g,m,I,b=(n[6].price*n[6].quantity).toLocaleString("en-US",{style:"currency",currency:"GBP"})+"",y,N;return{c(){e=_("li"),t=_("img"),s=w(),r=_("div"),o=_("b"),l=B(a),c=w(),h=_("span"),f=B("x"),g=B(p),m=w(),I=_("span"),y=B(b),N=w(),d(t,"class","mr-5"),bt(t.src,i=n[6].image)||d(t,"src",i),d(t,"alt","drink"),d(r,"class","flex flex-col justify-start items-start"),d(e,"class","flex h-20 w-20 >:rounded-box items-center my-3")},m(v,E){x(v,e,E),u(e,t),u(e,s),u(e,r),u(r,o),u(o,l),u(r,c),u(r,h),u(h,f),u(h,g),u(r,m),u(r,I),u(I,y),u(e,N)},p(v,E){E&2&&!bt(t.src,i=v[6].image)&&d(t,"src",i),E&2&&a!==(a=v[5]+"")&&ce(l,a),E&2&&p!==(p=v[6].quantity+"")&&ce(g,p),E&2&&b!==(b=(v[6].price*v[6].quantity).toLocaleString("en-US",{style:"currency",currency:"GBP"})+"")&&ce(y,b)},d(v){v&&M(e)}}}function Pm(n){var $e,We,ie,St,Xe;let e,t,i,s,r,o,a,l,c,h,f,p,g,m,I,b=n[0].id+"",y,N,v,E,T,R,O=(($e=n[1])==null?void 0:$e.shipping.name)+"",P,L,F,X=((We=n[1])==null?void 0:We.shipping.address)+"",Z,se,C,j=((ie=n[1])==null?void 0:ie.shipping.post)+"",W,Y,ee,A=((St=n[1])==null?void 0:St.shipping.country)+"",q,D,H,Te,oe,Ie,ne,ke=n[2]()+"",ge,Qe,de;c=new nn({});let _e=Object.entries(((Xe=n[1])==null?void 0:Xe.basket)||{}),ye=[];for(let V=0;V<_e.length;V+=1)ye[V]=Yo(Ko(n,_e,V));return{c(){e=_("div"),t=Pe("svg"),i=Pe("path"),s=Pe("path"),o=w(),a=_("div"),l=_("div"),Ce(c.$$.fragment),h=w(),f=_("h1"),f.textContent="Order summary",p=w(),g=_("span"),m=_("b"),m.textContent="Your order id is:",I=w(),y=B(b),N=w(),v=_("ul"),E=_("b"),E.textContent="Address",T=w(),R=_("li"),P=B(O),L=w(),F=_("li"),Z=B(X),se=w(),C=_("li"),W=B(j),Y=w(),ee=_("li"),q=B(A),D=w(),H=_("ul");for(let V=0;V<ye.length;V+=1)ye[V].c();Te=w(),oe=_("span"),Ie=_("b"),Ie.textContent="Total:",ne=w(),ge=B(ke),d(i,"d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"),d(i,"fill","currentColor"),d(s,"d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"),d(s,"fill","currentFill"),d(t,"role","status"),d(t,"class","w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"),d(t,"viewBox","0 0 100 101"),d(t,"fill","none"),d(t,"xmlns","http://www.w3.org/2000/svg"),d(e,"class",r=`${n[1]?"hidden":"flex"} absolute z-0 w-full h-full items-center justify-center`),d(l,"class","w-full >:h-40 >:w-full"),d(f,"class","font-bold text-3xl my-5"),d(g,"class","mb-3"),d(v,"class","w-full mb-2"),d(H,"class","w-full overflow-y-auto"),d(oe,"class","w-full mt-3 text-xl"),d(a,"class",Qe=`${!n[1]&&"hidden"} bg-white rounded-box shadow-xl p-5 w-90 flex mb-5 flex-col items-center w-11/12 md:w-auto`)},m(V,le){x(V,e,le),u(e,t),u(t,i),u(t,s),x(V,o,le),x(V,a,le),u(a,l),we(c,l,null),u(a,h),u(a,f),u(a,p),u(a,g),u(g,m),u(g,I),u(g,y),u(a,N),u(a,v),u(v,E),u(v,T),u(v,R),u(R,P),u(v,L),u(v,F),u(F,Z),u(v,se),u(v,C),u(C,W),u(v,Y),u(v,ee),u(ee,q),u(a,D),u(a,H);for(let S=0;S<ye.length;S+=1)ye[S].m(H,null);u(a,Te),u(a,oe),u(oe,Ie),u(oe,ne),u(oe,ge),de=!0},p(V,[le]){var S,z,me,pn,Tr;if((!de||le&2&&r!==(r=`${V[1]?"hidden":"flex"} absolute z-0 w-full h-full items-center justify-center`))&&d(e,"class",r),(!de||le&1)&&b!==(b=V[0].id+"")&&ce(y,b),(!de||le&2)&&O!==(O=((S=V[1])==null?void 0:S.shipping.name)+"")&&ce(P,O),(!de||le&2)&&X!==(X=((z=V[1])==null?void 0:z.shipping.address)+"")&&ce(Z,X),(!de||le&2)&&j!==(j=((me=V[1])==null?void 0:me.shipping.post)+"")&&ce(W,j),(!de||le&2)&&A!==(A=((pn=V[1])==null?void 0:pn.shipping.country)+"")&&ce(q,A),le&2){_e=Object.entries(((Tr=V[1])==null?void 0:Tr.basket)||{});let je;for(je=0;je<_e.length;je+=1){const Sr=Ko(V,_e,je);ye[je]?ye[je].p(Sr,le):(ye[je]=Yo(Sr),ye[je].c(),ye[je].m(H,null))}for(;je<ye.length;je+=1)ye[je].d(1);ye.length=_e.length}(!de||le&2)&&ke!==(ke=V[2]()+"")&&ce(ge,ke),(!de||le&2&&Qe!==(Qe=`${!V[1]&&"hidden"} bg-white rounded-box shadow-xl p-5 w-90 flex mb-5 flex-col items-center w-11/12 md:w-auto`))&&d(a,"class",Qe)},i(V){de||(te(c.$$.fragment,V),de=!0)},o(V){re(c.$$.fragment,V),de=!1},d(V){V&&M(e),V&&M(o),V&&M(a),be(c),zn(ye,V)}}}function Mm(n,e,t){let i;at(n,vt,l=>t(3,i=l));let{params:s}=e,r;const o=Er(Cr(),"users/");ac(o).then(l=>{const c=l.val()[i.email.replace(".","-")].orders[s.id];c?t(1,r=c):sn("/404")});const a=()=>{let l=0;return Object.values((r==null?void 0:r.basket)||{}).map(c=>{l+=c.price*c.quantity}),l.toLocaleString("en-US",{style:"currency",currency:"GBP"})};return n.$$set=l=>{"params"in l&&t(0,s=l.params)},[s,r,a]}class xm extends De{constructor(e){super(),xe(this,e,Mm,Pm,Me,{params:0})}}function Dm(n){let e,t,i,s,r;return t=new hf({}),s=new of({props:{routes:n[0]}}),{c(){e=_("main"),Ce(t.$$.fragment),i=w(),Ce(s.$$.fragment),d(e,"class","flex flex-col items-center")},m(o,a){x(o,e,a),we(t,e,null),u(e,i),we(s,e,null),r=!0},p:K,i(o){r||(te(t.$$.fragment,o),te(s.$$.fragment,o),r=!0)},o(o){re(t.$$.fragment,o),re(s.$$.fragment,o),r=!1},d(o){o&&M(e),be(t),be(s)}}}function Lm(n,e,t){let i;return at(n,vt,r=>t(1,i=r)),yc(()=>{const o=Fu({apiKey:"AIzaSyCJwngDVGh8mHATY2HBlcWDDiiwX7yIOGc",authDomain:"boba-boys.firebaseapp.com",databaseURL:"https://boba-boys-default-rtdb.europe-west1.firebasedatabase.app",projectId:"boba-boys",storageBucket:"boba-boys.appspot.com",messagingSenderId:"7235050772",appId:"1:7235050772:web:9145bc77216ce1ac587601"}),a=Fi(o);Mh(a,l=>{l&&nt(vt,i=l,i)})}),[{"/":gf,"/login":Cf,"/register":Rm,"/checkout":bm,"/orders":Om,"/orders/:id":xm,"*":Em}]}class Fm extends De{constructor(e){super(),xe(this,e,Lm,Dm,Me,{})}}new Fm({target:document.getElementById("app")});
