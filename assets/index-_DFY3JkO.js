(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=globalThis,gi=Mt.ShadowRoot&&(Mt.ShadyCSS===void 0||Mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bi=Symbol(),Xi=new WeakMap;let So=class{constructor(t,i,n){if(this._$cssResult$=!0,n!==bi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(gi&&t===void 0){const n=i!==void 0&&i.length===1;n&&(t=Xi.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Xi.set(i,t))}return t}toString(){return this.cssText}};const Xo=e=>new So(typeof e=="string"?e:e+"",void 0,bi),f=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new So(i,e,bi)},Yo=(e,t)=>{if(gi)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),o=Mt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}},Yi=gi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return Xo(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Qo,defineProperty:Zo,getOwnPropertyDescriptor:Jo,getOwnPropertyNames:en,getOwnPropertySymbols:tn,getPrototypeOf:on}=Object,Ie=globalThis,Qi=Ie.trustedTypes,nn=Qi?Qi.emptyScript:"",ii=Ie.reactiveElementPolyfillSupport,ut=(e,t)=>e,Nt={toAttribute(e,t){switch(t){case Boolean:e=e?nn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},mi=(e,t)=>!Qo(e,t),Zi={attribute:!0,type:String,converter:Nt,reflect:!1,useDefault:!1,hasChanged:mi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ie.litPropertyMetadata??(Ie.litPropertyMetadata=new WeakMap);let Ge=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Zi){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,i);o!==void 0&&Zo(this.prototype,t,o)}}static getPropertyDescriptor(t,i,n){const{get:o,set:s}=Jo(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get:o,set(r){const c=o==null?void 0:o.call(this);s==null||s.call(this,r),this.requestUpdate(t,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Zi}static _$Ei(){if(this.hasOwnProperty(ut("elementProperties")))return;const t=on(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ut("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ut("properties"))){const i=this.properties,n=[...en(i),...tn(i)];for(const o of n)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,o]of i)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const o=this._$Eu(i,n);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)i.unshift(Yi(o))}else t!==void 0&&i.push(Yi(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yo(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$ET(t,i){var s;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const r=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:Nt).toAttribute(i,n.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,i){var s,r;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const c=n.getPropertyOptions(o),d=typeof c.converter=="function"?{fromAttribute:c.converter}:((s=c.converter)==null?void 0:s.fromAttribute)!==void 0?c.converter:Nt;this._$Em=o;const p=d.fromAttribute(i,c.type);this[o]=p??((r=this._$Ej)==null?void 0:r.get(o))??p,this._$Em=null}}requestUpdate(t,i,n){var o;if(t!==void 0){const s=this.constructor,r=this[t];if(n??(n=s.getPropertyOptions(t)),!((n.hasChanged??mi)(r,i)||n.useDefault&&n.reflect&&r===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,r??i??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(i=void 0),this._$AL.set(t,i)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,r]of o){const{wrapped:c}=r,d=this[s];c!==!0||this._$AL.has(s)||d===void 0||this.C(s,void 0,r,d)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(n=this._$EO)==null||n.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(i)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(i)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(i=>this._$ET(i,this[i]))),this._$EM()}updated(t){}firstUpdated(t){}};Ge.elementStyles=[],Ge.shadowRootOptions={mode:"open"},Ge[ut("elementProperties")]=new Map,Ge[ut("finalized")]=new Map,ii==null||ii({ReactiveElement:Ge}),(Ie.reactiveElementVersions??(Ie.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=globalThis,Vt=pt.trustedTypes,Ji=Vt?Vt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Co="$lit$",Ee=`lit$${Math.random().toFixed(9).slice(2)}$`,Eo="?"+Ee,sn=`<${Eo}>`,De=document,gt=()=>De.createComment(""),bt=e=>e===null||typeof e!="object"&&typeof e!="function",fi=Array.isArray,rn=e=>fi(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",oi=`[ 	
\f\r]`,st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eo=/-->/g,to=/>/g,Te=RegExp(`>|${oi}(?:([^\\s"'>=/]+)(${oi}*=${oi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),io=/'/g,oo=/"/g,Io=/^(?:script|style|textarea|title)$/i,an=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),l=an(1),J=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),no=new WeakMap,Le=De.createTreeWalker(De,129);function Ao(e,t){if(!fi(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ji!==void 0?Ji.createHTML(t):t}const ln=(e,t)=>{const i=e.length-1,n=[];let o,s=t===2?"<svg>":t===3?"<math>":"",r=st;for(let c=0;c<i;c++){const d=e[c];let p,v,h=-1,b=0;for(;b<d.length&&(r.lastIndex=b,v=r.exec(d),v!==null);)b=r.lastIndex,r===st?v[1]==="!--"?r=eo:v[1]!==void 0?r=to:v[2]!==void 0?(Io.test(v[2])&&(o=RegExp("</"+v[2],"g")),r=Te):v[3]!==void 0&&(r=Te):r===Te?v[0]===">"?(r=o??st,h=-1):v[1]===void 0?h=-2:(h=r.lastIndex-v[2].length,p=v[1],r=v[3]===void 0?Te:v[3]==='"'?oo:io):r===oo||r===io?r=Te:r===eo||r===to?r=st:(r=Te,o=void 0);const m=r===Te&&e[c+1].startsWith("/>")?" ":"";s+=r===st?d+sn:h>=0?(n.push(p),d.slice(0,h)+Co+d.slice(h)+Ee+m):d+Ee+(h===-2?c:m)}return[Ao(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class mt{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let s=0,r=0;const c=t.length-1,d=this.parts,[p,v]=ln(t,i);if(this.el=mt.createElement(p,n),Le.currentNode=this.el.content,i===2||i===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Le.nextNode())!==null&&d.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(Co)){const b=v[r++],m=o.getAttribute(h).split(Ee),C=/([.?@])?(.*)/.exec(b);d.push({type:1,index:s,name:C[2],strings:m,ctor:C[1]==="."?dn:C[1]==="?"?hn:C[1]==="@"?un:Kt}),o.removeAttribute(h)}else h.startsWith(Ee)&&(d.push({type:6,index:s}),o.removeAttribute(h));if(Io.test(o.tagName)){const h=o.textContent.split(Ee),b=h.length-1;if(b>0){o.textContent=Vt?Vt.emptyScript:"";for(let m=0;m<b;m++)o.append(h[m],gt()),Le.nextNode(),d.push({type:2,index:++s});o.append(h[b],gt())}}}else if(o.nodeType===8)if(o.data===Eo)d.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(Ee,h+1))!==-1;)d.push({type:7,index:s}),h+=Ee.length-1}s++}}static createElement(t,i){const n=De.createElement("template");return n.innerHTML=t,n}}function Qe(e,t,i=e,n){var r,c;if(t===J)return t;let o=n!==void 0?(r=i._$Co)==null?void 0:r[n]:i._$Cl;const s=bt(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==s&&((c=o==null?void 0:o._$AO)==null||c.call(o,!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=o:i._$Cl=o),o!==void 0&&(t=Qe(e,o._$AS(e,t.values),o,n)),t}let cn=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??De).importNode(i,!0);Le.currentNode=o;let s=Le.nextNode(),r=0,c=0,d=n[0];for(;d!==void 0;){if(r===d.index){let p;d.type===2?p=new tt(s,s.nextSibling,this,t):d.type===1?p=new d.ctor(s,d.name,d.strings,this,t):d.type===6&&(p=new pn(s,this,t)),this._$AV.push(p),d=n[++c]}r!==(d==null?void 0:d.index)&&(s=Le.nextNode(),r++)}return Le.currentNode=De,o}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}};class tt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,o){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Qe(this,t,i),bt(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==J&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):rn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&bt(this._$AH)?this._$AA.nextSibling.data=t:this.T(De.createTextNode(t)),this._$AH=t}$(t){var s;const{values:i,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=mt.createElement(Ao(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===o)this._$AH.p(i);else{const r=new cn(o,this),c=r.u(this.options);r.p(i),this.T(c),this._$AH=r}}_$AC(t){let i=no.get(t.strings);return i===void 0&&no.set(t.strings,i=new mt(t)),i}k(t){fi(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const s of t)o===i.length?i.push(n=new tt(this.O(gt()),this.O(gt()),this,this.options)):n=i[o],n._$AI(s),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class Kt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,o,s){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=u}_$AI(t,i=this,n,o){const s=this.strings;let r=!1;if(s===void 0)t=Qe(this,t,i,0),r=!bt(t)||t!==this._$AH&&t!==J,r&&(this._$AH=t);else{const c=t;let d,p;for(t=s[0],d=0;d<s.length-1;d++)p=Qe(this,c[n+d],i,d),p===J&&(p=this._$AH[d]),r||(r=!bt(p)||p!==this._$AH[d]),p===u?t=u:t!==u&&(t+=(p??"")+s[d+1]),this._$AH[d]=p}r&&!o&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class dn extends Kt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class hn extends Kt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class un extends Kt{constructor(t,i,n,o,s){super(t,i,n,o,s),this.type=5}_$AI(t,i=this){if((t=Qe(this,t,i,0)??u)===J)return;const n=this._$AH,o=t===u&&n!==u||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==u&&(n===u||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class pn{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Qe(this,t)}}const gn={I:tt},ni=pt.litHtmlPolyfillSupport;ni==null||ni(mt,tt),(pt.litHtmlVersions??(pt.litHtmlVersions=[])).push("3.3.1");const bn=(e,t,i)=>{const n=(i==null?void 0:i.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const s=(i==null?void 0:i.renderBefore)??null;n._$litPart$=o=new tt(t.insertBefore(gt(),s),s,void 0,i??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=globalThis;let _=class extends Ge{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=bn(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return J}};var ko;_._$litElement$=!0,_.finalized=!0,(ko=Oe.litElementHydrateSupport)==null||ko.call(Oe,{LitElement:_});const si=Oe.litElementPolyfillSupport;si==null||si({LitElement:_});(Oe.litElementVersions??(Oe.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mn={attribute:!0,type:String,converter:Nt,reflect:!1,hasChanged:mi},fn=(e=mn,t,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),n==="accessor"){const{name:r}=i;return{set(c){const d=t.get.call(this);t.set.call(this,c),this.requestUpdate(r,d,e)},init(c){return c!==void 0&&this.C(r,void 0,e,c),c}}}if(n==="setter"){const{name:r}=i;return function(c){const d=this[r];t.call(this,c),this.requestUpdate(r,d,e)}}throw Error("Unsupported decorator location: "+n)};function a(e){return(t,i)=>typeof i=="object"?fn(e,t,i):((n,o,s)=>{const r=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(e){return a({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _n=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(e,t){return(i,n,o)=>{const s=r=>{var c;return((c=r.renderRoot)==null?void 0:c.querySelector(e))??null};return _n(i,n,{get(){return s(this)}})}}const $=f`
  :host {
    /* Colors - Blue */
    --blue-100: rgb(224, 239, 255);
    --blue-200: rgb(173, 212, 255);
    --blue-300: rgb(122, 185, 255);
    --blue-400: rgb(71, 158, 255);
    --blue-500: rgb(20, 131, 255);
    --blue-600: rgb(0, 106, 224);
    --blue-700: rgb(0, 82, 173);
    --blue-800: rgb(0, 58, 122);
    --blue-900: rgb(0, 34, 71);

    /* Colors - Light Blue */
    --lightblue-100: rgb(234, 249, 255);
    --lightblue-200: rgb(184, 234, 254);
    --lightblue-300: rgb(134, 219, 253);
    --lightblue-400: rgb(84, 205, 252);
    --lightblue-500: rgb(34, 190, 251);
    --lightblue-600: rgb(4, 166, 230);
    --lightblue-700: rgb(3, 130, 180);
    --lightblue-800: rgb(2, 94, 130);
    --lightblue-900: rgb(1, 58, 80);

    /* Colors - Green */
    --green-100: rgb(206, 249, 240);
    --green-200: rgb(161, 243, 226);
    --green-300: rgb(116, 237, 212);
    --green-400: rgb(71, 231, 198);
    --green-500: rgb(29, 222, 182);
    --green-600: rgb(23, 177, 145);
    --green-700: rgb(17, 132, 108);
    --green-800: rgb(11, 87, 71);
    --green-900: rgb(5, 42, 34);

    /* Colors - Orange */
    --orange-100: rgb(255, 244, 224);
    --orange-200: rgb(255, 225, 173);
    --orange-300: rgb(255, 206, 122);
    --orange-400: rgb(255, 187, 71);
    --orange-500: rgb(255, 168, 20);
    --orange-600: rgb(224, 141, 0);
    --orange-700: rgb(173, 109, 0);
    --orange-800: rgb(122, 77, 0);
    --orange-900: rgb(71, 45, 0);

    /* Colors - Red */
    --red-100: rgb(255, 230, 224);
    --red-200: rgb(255, 190, 173);
    --red-300: rgb(255, 150, 122);
    --red-400: rgb(255, 109, 71);
    --red-500: rgb(255, 69, 20);
    --red-600: rgb(224, 47, 0);
    --red-700: rgb(173, 36, 0);
    --red-800: rgb(122, 25, 0);
    --red-900: rgb(71, 15, 0);

    /* Colors - Purple */
    --purple-100: rgb(255, 255, 255);
    --purple-200: rgb(239, 234, 252);
    --purple-300: rgb(205, 190, 245);
    --purple-400: rgb(172, 145, 239);
    --purple-500: rgb(138, 101, 232);
    --purple-600: rgb(104, 57, 225);
    --purple-700: rgb(78, 30, 201);
    --purple-800: rgb(61, 23, 157);
    --purple-900: rgb(44, 17, 112);

    /* Colors - Grey */
    --grey-050: rgb(235, 237, 242);
    --grey-100: rgb(205, 210, 221);
    --grey-150: rgb(190, 197, 211);
    --grey-200: rgb(175, 183, 200);
    --grey-250: rgb(160, 170, 190);
    --grey-300: rgb(144, 156, 180);
    --grey-350: rgb(129, 143, 169);
    --grey-400: rgb(114, 129, 159);
    --grey-450: rgb(100, 116, 147);
    --grey-500: rgb(90, 104, 132);
    --grey-550: rgb(80, 92, 117);
    --grey-550-rgb: 80, 92, 117;
    --grey-600: rgb(69, 80, 102);
    --grey-650: rgb(59, 68, 87);
    --grey-700: rgb(49, 56, 71);
    --grey-725: rgb(43, 50, 64);
    --grey-750: rgb(38, 44, 56);
    --grey-775: rgb(33, 38, 49);
    --grey-800: rgb(28, 32, 41);
    --grey-825: rgb(23, 26, 33);
    --grey-850: rgb(18, 20, 26);
    --grey-875: rgb(12, 14, 18);
    --grey-900: rgb(7, 8, 11);

    /* Colors - Base */
    --white: rgb(255, 255, 255);
    --black: rgb(0, 0, 0);

    /* Typography - Font Sizes */
    --font-size-base: 16px;
    --font-size-xxs: 0.625rem;
    --font-size-xs: 0.75rem;
    --font-size-s: 0.875rem;
    --font-size-m: 1rem;
    --font-size-l: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.75rem;
    --font-size-4xl: 2rem;
    --font-size-5xl: 2.25rem;
    --font-size-6xl: 3rem;

    /* Typography - Line Heights */
    --font-line-height-100: 1.1;
    --font-line-height-200: 1.42;
    --font-line-height-300: 20px;
    --font-line-height-400: 40px;

    /* Typography - Font Weights */
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    /* Spacing */
    --spacing-0: 0;
    --spacing-2: 2px;
    --spacing-4: 4px;
    --spacing-8: 8px;
    --spacing-10: 10px;
    --spacing-12: 12px;
    --spacing-16: 16px;
    --spacing-20: 20px;
    --spacing-24: 24px;
    --spacing-32: 32px;

    /* Border Radius */
    --radius-0: 0;
    --radius-2: 2px;
    --radius-4: 4px;
    --radius-6: 6px;
    --radius-8: 8px;
    --radius-16: 16px;
    --radius-64: 64px;

    /* Semantic colors */
    --color-error: var(--red-500);

    /* Shadows */
    --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.3);
    --shadow-2: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    --shadow-3: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12);
  }
`;f`
  * {
    box-sizing: border-box;
  }
`;const vn=f`
  :host {
    display: inline-block;
    cursor: pointer;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  button {
    box-sizing: border-box;
    color: var(--button-text, var(--white));
    display: inline-block;
    padding: 0.35em 0.55em;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    font: inherit;
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-bold);
    outline: none;
    line-height: var(--font-line-height-100);
    outline-offset: 2px;
    cursor: inherit;
    width: 100%;

    background: var(--button-bg, var(--grey-600));
    border: solid 1px transparent;
    border-color: var(--button-border, transparent);
    border-radius: var(--radius-4);
    box-shadow: var(--button-shadow, var(--shadow-1));
    transition: background-color 200ms, box-shadow 200ms;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.07);
  }

  button:focus,
  button:focus-within {
    outline: none;
  }

  button:focus-visible {
    outline: 2px solid var(--grey-600);
  }

  /* Hover states (--button-hover set by swim-button-group when used inside a group) */
  :host(:not([disabled])) button:hover {
    cursor: pointer;
    background: var(--button-hover, var(--grey-700));
    outline-color: var(--button-hover, var(--grey-700));
  }

  /* Size variants */
  :host([size='small']) button {
    font-size: var(--font-size-xxs);
  }

  :host([size='large']) button {
    font-size: 1.3em;
  }

  /* Variant: Primary (--button-* overrides when inside swim-button-group) */
  :host([variant='primary']) button {
    background-color: var(--button-bg, var(--blue-400));
    border-color: var(--button-border, var(--blue-400));
    color: var(--button-text, var(--white));
    outline-color: var(--button-border, var(--blue-500));
  }

  :host([variant='primary']) button:focus-visible {
    outline-color: var(--button-border, var(--blue-500));
  }

  :host([variant='primary']:not([disabled])) button:hover {
    background-color: var(--button-hover, var(--blue-500));
    border-color: var(--button-hover, var(--blue-500));
  }

  /* Variant: Warning */
  :host([variant='warning']) button {
    background-color: var(--orange-400);
    color: var(--grey-900);
    outline-color: var(--orange-500);
  }

  :host([variant='warning']) button:focus-visible {
    outline-color: var(--orange-500);
  }

  :host([variant='warning']:not([disabled])) button:hover {
    background-color: var(--orange-500);
  }

  /* Variant: Danger */
  :host([variant='danger']) button {
    background-color: var(--red-400);
    outline-color: var(--red-400);
  }

  :host([variant='danger']) button:focus-visible {
    outline-color: var(--red-400);
  }

  :host([variant='danger']:not([disabled])) button:hover {
    background-color: var(--red-500);
  }

  /* Variant: Link */
  :host([variant='link']) button {
    background-color: transparent;
    box-shadow: none;
  }

  :host([variant='link']:not([disabled])) button:hover {
    background-color: transparent;
  }

  /* Variant: Bordered */
  :host([variant='bordered']) button,
  :host([variant='primary'][bordered]) button {
    border: 1px solid var(--blue-400);
    color: var(--blue-400);
    background-color: transparent;
    box-shadow: none;
    outline-color: var(--blue-400);
  }

  :host([variant='bordered']) button:focus-visible,
  :host([variant='primary'][bordered]) button:focus-visible {
    outline-color: var(--blue-400);
  }

  :host([variant='bordered']:not([disabled])) button:hover,
  :host([variant='primary'][bordered]:not([disabled])) button:hover {
    border-color: var(--blue-200);
    color: var(--blue-200);
  }

  /* Button content and state icon container */
  .content {
    text-overflow: ellipsis;
    overflow-x: clip;
    overflow-y: visible;
    width: 100%;
    display: block;
    white-space: nowrap;
    transition: opacity 0.25s ease-out;
  }

  .state-icon {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
  }

  /* State: In Progress */
  :host([state='in-progress']) {
    cursor: wait !important;
    position: relative;
    opacity: 1 !important;
  }

  :host([state='in-progress']) button {
    opacity: 1;
    pointer-events: none;
  }

  :host([state='in-progress']) .content {
    opacity: 0;
  }

  :host([state='in-progress']) .state-icon {
    opacity: 1;
  }

  /* State: Success */
  :host([state='success']) {
    cursor: wait !important;
  }

  :host([state='success']) button {
    color: black !important;
    background-color: var(--green-500) !important;
    background: var(--green-500) !important;
    border: 1px solid var(--green-500) !important;
    pointer-events: none;
  }

  :host([state='success']) .content {
    opacity: 0;
  }

  :host([state='success']) .state-icon {
    opacity: 1;
    color: var(--white);
  }

  /* State: Fail */
  :host([state='fail']) {
    cursor: wait !important;
  }

  :host([state='fail']) button {
    color: black !important;
    background-color: var(--red-500) !important;
    background: var(--red-500) !important;
    border: 1px solid var(--red-500) !important;
    pointer-events: none;
  }

  :host([state='fail']) .content {
    opacity: 0;
  }

  :host([state='fail']) .state-icon {
    opacity: 1;
    color: var(--white);
  }

  /* Icon styles */
  .icon {
    height: 1em;
    width: 1em;
    font-weight: var(--font-weight-bold);
    color: var(--white);
    overflow: hidden;
    font-size: var(--font-size-m);
    display: inline-block;
  }

  /* Spinner animation */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    animation: spin 1s linear infinite;
  }

  /* State icons (swim-icon): loading spinner animation */
  .state-icon[font-icon='loading'] {
    display: inline-block;
    animation: spin 1s linear infinite;
  }
`;var U=(e=>(e.Active="active",e.InProgress="in-progress",e.Success="success",e.Fail="fail",e))(U||{});function g(e){return e!=null&&`${e}`!="false"}function B(e,t=null){return isNaN(parseFloat(e))||isNaN(Number(e))?t:Number(e)}const xn=f`
  .ngx-icon.ngx-3d-rotate::before {
    content: '\\ea01';
  }
  .ngx-icon.ngx-action::before {
    content: '\\ea02';
  }
  .ngx-icon.ngx-action-close::before {
    content: '\\ea03';
  }
  .ngx-icon.ngx-action-maximize::before {
    content: '\\ea04';
  }
  .ngx-icon.ngx-action-maximize-inverse::before {
    content: '\\ea05';
  }
  .ngx-icon.ngx-action-minimize::before {
    content: '\\ea06';
  }
  .ngx-icon.ngx-action-outline::before {
    content: '\\ea07';
  }
  .ngx-icon.ngx-action-outline-small::before {
    content: '\\ea08';
  }
  .ngx-icon.ngx-add-circle::before {
    content: '\\ea09';
  }
  .ngx-icon.ngx-add-circle-filled::before {
    content: '\\ea0a';
  }
  .ngx-icon.ngx-add-circle-medium::before {
    content: '\\ea0b';
  }
  .ngx-icon.ngx-add-circle-thin::before {
    content: '\\ea0c';
  }
  .ngx-icon.ngx-add-edge::before {
    content: '\\ea0d';
  }
  .ngx-icon.ngx-add-new::before {
    content: '\\ea0e';
  }
  .ngx-icon.ngx-add-node::before {
    content: '\\ea0f';
  }
  .ngx-icon.ngx-advanced-pie::before {
    content: '\\ea10';
  }
  .ngx-icon.ngx-alert::before {
    content: '\\ea11';
  }
  .ngx-icon.ngx-app-store::before {
    content: '\\ea12';
  }
  .ngx-icon.ngx-app-workspaces::before {
    content: '\\ea13';
  }
  .ngx-icon.ngx-applet::before {
    content: '\\ea14';
  }
  .ngx-icon.ngx-applets::before {
    content: '\\ea15';
  }
  .ngx-icon.ngx-application::before {
    content: '\\ea16';
  }
  .ngx-icon.ngx-apps::before {
    content: '\\ea17';
  }
  .ngx-icon.ngx-area-chart::before {
    content: '\\ea18';
  }
  .ngx-icon.ngx-arrow-bold-circle-left::before {
    content: '\\ea19';
  }
  .ngx-icon.ngx-arrow-bold-circle-right::before {
    content: '\\ea1a';
  }
  .ngx-icon.ngx-arrow-bold-down::before {
    content: '\\ea1b';
  }
  .ngx-icon.ngx-arrow-bold-left::before {
    content: '\\ea1c';
  }
  .ngx-icon.ngx-arrow-bold-right::before {
    content: '\\ea1d';
  }
  .ngx-icon.ngx-arrow-bold-up::before {
    content: '\\ea1e';
  }
  .ngx-icon.ngx-arrow-down::before {
    content: '\\ea1f';
  }
  .ngx-icon.ngx-arrow-input::before {
    content: '\\ea20';
  }
  .ngx-icon.ngx-arrow-left::before {
    content: '\\ea21';
  }
  .ngx-icon.ngx-arrow-output::before {
    content: '\\ea22';
  }
  .ngx-icon.ngx-arrow-right::before {
    content: '\\ea23';
  }
  .ngx-icon.ngx-arrow-right-down-medium::before {
    content: '\\ea24';
  }
  .ngx-icon.ngx-arrow-right-medium::before {
    content: '\\ea25';
  }
  .ngx-icon.ngx-arrow-tail-left::before {
    content: '\\ea26';
  }
  .ngx-icon.ngx-arrow-tail-right::before {
    content: '\\ea27';
  }
  .ngx-icon.ngx-arrow-tail-solid-left::before {
    content: '\\ea28';
  }
  .ngx-icon.ngx-arrow-tail-solid-right::before {
    content: '\\ea29';
  }
  .ngx-icon.ngx-arrow-tail-subright::before {
    content: '\\ea2a';
  }
  .ngx-icon.ngx-arrow-up::before {
    content: '\\ea2b';
  }
  .ngx-icon.ngx-asset-outline::before {
    content: '\\ea2c';
  }
  .ngx-icon.ngx-asset-outline-small::before {
    content: '\\ea2d';
  }
  .ngx-icon.ngx-assets::before {
    content: '\\ea2e';
  }
  .ngx-icon.ngx-attachment::before {
    content: '\\ea2f';
  }
  .ngx-icon.ngx-automation::before {
    content: '\\ea30';
  }
  .ngx-icon.ngx-automation-alternate::before {
    content: '\\ea31';
  }
  .ngx-icon.ngx-back-arrow::before {
    content: '\\ea32';
  }
  .ngx-icon.ngx-back-arrow-filled::before {
    content: '\\ea33';
  }
  .ngx-icon.ngx-bars::before {
    content: '\\ea34';
  }
  .ngx-icon.ngx-bell::before {
    content: '\\ea35';
  }
  .ngx-icon.ngx-bell-alarm::before {
    content: '\\ea36';
  }
  .ngx-icon.ngx-bold::before {
    content: '\\ea37';
  }
  .ngx-icon.ngx-bolt::before {
    content: '\\ea38';
  }
  .ngx-icon.ngx-branch-node::before {
    content: '\\ea39';
  }
  .ngx-icon.ngx-branch-node-vert::before {
    content: '\\ea3a';
  }
  .ngx-icon.ngx-broom::before {
    content: '\\ea3b';
  }
  .ngx-icon.ngx-browser-size::before {
    content: '\\ea3c';
  }
  .ngx-icon.ngx-bug::before {
    content: '\\ea3d';
  }
  .ngx-icon.ngx-builder::before {
    content: '\\ea3e';
  }
  .ngx-icon.ngx-builder-outline::before {
    content: '\\ea3f';
  }
  .ngx-icon.ngx-button-push-outline::before {
    content: '\\ea40';
  }
  .ngx-icon.ngx-button-push-outline-large::before {
    content: '\\ea41';
  }
  .ngx-icon.ngx-button-push-outline-small::before {
    content: '\\ea42';
  }
  .ngx-icon.ngx-calendar::before {
    content: '\\ea43';
  }
  .ngx-icon.ngx-calendar-clock::before {
    content: '\\ea44';
  }
  .ngx-icon.ngx-calender-clock::before {
    content: '\\ea45';
  }
  .ngx-icon.ngx-cards::before {
    content: '\\ea46';
  }
  .ngx-icon.ngx-center-align::before {
    content: '\\ea47';
  }
  .ngx-icon.ngx-chart-area::before {
    content: '\\ea48';
  }
  .ngx-icon.ngx-chart-bar-bar::before {
    content: '\\ea49';
  }
  .ngx-icon.ngx-chart-bubble::before {
    content: '\\ea4a';
  }
  .ngx-icon.ngx-chart-donut::before {
    content: '\\ea4b';
  }
  .ngx-icon.ngx-chart-full-stacked-area::before {
    content: '\\ea4c';
  }
  .ngx-icon.ngx-chart-heat::before {
    content: '\\ea4d';
  }
  .ngx-icon.ngx-chart-horz-full-stack-bar::before {
    content: '\\ea4e';
  }
  .ngx-icon.ngx-chart-number-card::before {
    content: '\\ea4f';
  }
  .ngx-icon.ngx-chart-pie::before {
    content: '\\ea50';
  }
  .ngx-icon.ngx-chart-pie-grid::before {
    content: '\\ea51';
  }
  .ngx-icon.ngx-chart-scatter::before {
    content: '\\ea52';
  }
  .ngx-icon.ngx-chart-spider::before {
    content: '\\ea53';
  }
  .ngx-icon.ngx-chart-stacked-area::before {
    content: '\\ea54';
  }
  .ngx-icon.ngx-chart-vert-bar::before {
    content: '\\ea55';
  }
  .ngx-icon.ngx-chart-vert-bar2::before {
    content: '\\ea56';
  }
  .ngx-icon.ngx-chart-vert-stacked-bar::before {
    content: '\\ea57';
  }
  .ngx-icon.ngx-check::before {
    content: '\\ea58';
  }
  .ngx-icon.ngx-check-filled::before {
    content: '\\ea59';
  }
  .ngx-icon.ngx-check-filled-sm::before {
    content: '\\ea5a';
  }
  .ngx-icon.ngx-check-square-filled::before {
    content: '\\ea5b';
  }
  .ngx-icon.ngx-checklist::before {
    content: '\\ea5c';
  }
  .ngx-icon.ngx-chevron-bold-down::before {
    content: '\\ea5d';
  }
  .ngx-icon.ngx-chevron-bold-left::before {
    content: '\\ea5e';
  }
  .ngx-icon.ngx-chevron-bold-right::before {
    content: '\\ea5f';
  }
  .ngx-icon.ngx-chevron-bold-up::before {
    content: '\\ea60';
  }
  .ngx-icon.ngx-circle::before {
    content: '\\ea61';
  }
  .ngx-icon.ngx-circle-filled::before {
    content: '\\ea62';
  }
  .ngx-icon.ngx-circles::before {
    content: '\\ea63';
  }
  .ngx-icon.ngx-circuit-board::before {
    content: '\\ea64';
  }
  .ngx-icon.ngx-clipboard::before {
    content: '\\ea65';
  }
  .ngx-icon.ngx-clock::before {
    content: '\\ea66';
  }
  .ngx-icon.ngx-cloud-download::before {
    content: '\\ea67';
  }
  .ngx-icon.ngx-cloud-upload::before {
    content: '\\ea68';
  }
  .ngx-icon.ngx-code::before {
    content: '\\ea69';
  }
  .ngx-icon.ngx-cog::before {
    content: '\\ea6a';
  }
  .ngx-icon.ngx-collapse::before {
    content: '\\ea6b';
  }
  .ngx-icon.ngx-commandline::before {
    content: '\\ea6c';
  }
  .ngx-icon.ngx-comments::before {
    content: '\\ea6d';
  }
  .ngx-icon.ngx-component::before {
    content: '\\ea6e';
  }
  .ngx-icon.ngx-component-create::before {
    content: '\\ea6f';
  }
  .ngx-icon.ngx-condition::before {
    content: '\\ea70';
  }
  .ngx-icon.ngx-copy::before {
    content: '\\ea71';
  }
  .ngx-icon.ngx-copy-app::before {
    content: '\\ea72';
  }
  .ngx-icon.ngx-copy-filled::before {
    content: '\\ea73';
  }
  .ngx-icon.ngx-credit-card::before {
    content: '\\ea74';
  }
  .ngx-icon.ngx-dashboard::before {
    content: '\\ea75';
  }
  .ngx-icon.ngx-dashboard-outline::before {
    content: '\\ea76';
  }
  .ngx-icon.ngx-database::before {
    content: '\\ea77';
  }
  .ngx-icon.ngx-debug::before {
    content: '\\ea78';
  }
  .ngx-icon.ngx-devil::before {
    content: '\\ea79';
  }
  .ngx-icon.ngx-disable::before {
    content: '\\ea7a';
  }
  .ngx-icon.ngx-document::before {
    content: '\\ea7b';
  }
  .ngx-icon.ngx-documentation::before {
    content: '\\ea7c';
  }
  .ngx-icon.ngx-domain::before {
    content: '\\ea7d';
  }
  .ngx-icon.ngx-dots-horz::before {
    content: '\\ea7e';
  }
  .ngx-icon.ngx-dots-vert::before {
    content: '\\ea7f';
  }
  .ngx-icon.ngx-dots-vert-round::before {
    content: '\\ea80';
  }
  .ngx-icon.ngx-double-down::before {
    content: '\\ea81';
  }
  .ngx-icon.ngx-double-left::before {
    content: '\\ea82';
  }
  .ngx-icon.ngx-double-right::before {
    content: '\\ea83';
  }
  .ngx-icon.ngx-double-up::before {
    content: '\\ea84';
  }
  .ngx-icon.ngx-downgrade::before {
    content: '\\ea85';
  }
  .ngx-icon.ngx-downgrade-horizontal::before {
    content: '\\ea86';
  }
  .ngx-icon.ngx-download-outline::before {
    content: '\\ea87';
  }
  .ngx-icon.ngx-download-outline-large::before {
    content: '\\ea88';
  }
  .ngx-icon.ngx-download-outline-small::before {
    content: '\\ea89';
  }
  .ngx-icon.ngx-drag::before {
    content: '\\ea8a';
  }
  .ngx-icon.ngx-edit::before {
    content: '\\ea8b';
  }
  .ngx-icon.ngx-edit-app::before {
    content: '\\ea8c';
  }
  .ngx-icon.ngx-edit-outline::before {
    content: '\\ea8d';
  }
  .ngx-icon.ngx-edit-outline-large::before {
    content: '\\ea8e';
  }
  .ngx-icon.ngx-edit-outline-small::before {
    content: '\\ea8f';
  }
  .ngx-icon.ngx-email::before {
    content: '\\ea90';
  }
  .ngx-icon.ngx-enrich-small::before {
    content: '\\ea91';
  }
  .ngx-icon.ngx-escalate::before {
    content: '\\ea92';
  }
  .ngx-icon.ngx-events-outline::before {
    content: '\\ea93';
  }
  .ngx-icon.ngx-events-outline-small::before {
    content: '\\ea94';
  }
  .ngx-icon.ngx-expand::before {
    content: '\\ea95';
  }
  .ngx-icon.ngx-explore::before {
    content: '\\ea96';
  }
  .ngx-icon.ngx-export::before {
    content: '\\ea97';
  }
  .ngx-icon.ngx-export-filled::before {
    content: '\\ea98';
  }
  .ngx-icon.ngx-export-outline::before {
    content: '\\ea99';
  }
  .ngx-icon.ngx-export-outline-large::before {
    content: '\\ea9a';
  }
  .ngx-icon.ngx-export-outline-small::before {
    content: '\\ea9b';
  }
  .ngx-icon.ngx-eye::before {
    content: '\\ea9c';
  }
  .ngx-icon.ngx-eye-disabled::before {
    content: '\\ea9d';
  }
  .ngx-icon.ngx-eye-hidden::before {
    content: '\\ea9e';
  }
  .ngx-icon.ngx-field-created-by::before {
    content: '\\ea9f';
  }
  .ngx-icon.ngx-field-created-date::before {
    content: '\\eaa0';
  }
  .ngx-icon.ngx-field-date::before {
    content: '\\eaa1';
  }
  .ngx-icon.ngx-field-double-select::before {
    content: '\\eaa2';
  }
  .ngx-icon.ngx-field-dynamic::before {
    content: '\\eaa3';
  }
  .ngx-icon.ngx-field-edited-by::before {
    content: '\\eaa4';
  }
  .ngx-icon.ngx-field-edited-date::before {
    content: '\\eaa5';
  }
  .ngx-icon.ngx-field-grid::before {
    content: '\\eaa6';
  }
  .ngx-icon.ngx-field-html::before {
    content: '\\eaa7';
  }
  .ngx-icon.ngx-field-json::before {
    content: '\\eaa8';
  }
  .ngx-icon.ngx-field-list::before {
    content: '\\eaa9';
  }
  .ngx-icon.ngx-field-list-small::before {
    content: '\\eaaa';
  }
  .ngx-icon.ngx-field-lists::before {
    content: '\\eaab';
  }
  .ngx-icon.ngx-field-multiselect::before {
    content: '\\eaac';
  }
  .ngx-icon.ngx-field-number::before {
    content: '\\eaad';
  }
  .ngx-icon.ngx-field-numeric::before {
    content: '\\eaae';
  }
  .ngx-icon.ngx-field-richtext::before {
    content: '\\eaaf';
  }
  .ngx-icon.ngx-field-single-select::before {
    content: '\\eab0';
  }
  .ngx-icon.ngx-field-singleline::before {
    content: '\\eab1';
  }
  .ngx-icon.ngx-field-text::before {
    content: '\\eab2';
  }
  .ngx-icon.ngx-field-textarea::before {
    content: '\\eab3';
  }
  .ngx-icon.ngx-field-textual::before {
    content: '\\eab4';
  }
  .ngx-icon.ngx-field-users::before {
    content: '\\eab5';
  }
  .ngx-icon.ngx-filter::before {
    content: '\\eab6';
  }
  .ngx-icon.ngx-filter-bar::before {
    content: '\\eab7';
  }
  .ngx-icon.ngx-find-page::before {
    content: '\\eab8';
  }
  .ngx-icon.ngx-flame::before {
    content: '\\eab9';
  }
  .ngx-icon.ngx-folder::before {
    content: '\\eaba';
  }
  .ngx-icon.ngx-folder-closed-small::before {
    content: '\\eabb';
  }
  .ngx-icon.ngx-folder-open-small::before {
    content: '\\eabc';
  }
  .ngx-icon.ngx-folders::before {
    content: '\\eabd';
  }
  .ngx-icon.ngx-font::before {
    content: '\\eabe';
  }
  .ngx-icon.ngx-format-indent-decrease::before {
    content: '\\eabf';
  }
  .ngx-icon.ngx-format-indent-increase::before {
    content: '\\eac0';
  }
  .ngx-icon.ngx-formula::before {
    content: '\\eac1';
  }
  .ngx-icon.ngx-forward-arrow::before {
    content: '\\eac2';
  }
  .ngx-icon.ngx-forward-arrow-filled::before {
    content: '\\eac3';
  }
  .ngx-icon.ngx-full-align::before {
    content: '\\eac4';
  }
  .ngx-icon.ngx-gauge::before {
    content: '\\eac5';
  }
  .ngx-icon.ngx-gear::before {
    content: '\\eac6';
  }
  .ngx-icon.ngx-gear-small::before {
    content: '\\eac7';
  }
  .ngx-icon.ngx-gear-square::before {
    content: '\\eac8';
  }
  .ngx-icon.ngx-globe::before {
    content: '\\eac9';
  }
  .ngx-icon.ngx-graph::before {
    content: '\\eaca';
  }
  .ngx-icon.ngx-graph-alt1::before {
    content: '\\eacb';
  }
  .ngx-icon.ngx-grid-view::before {
    content: '\\eacc';
  }
  .ngx-icon.ngx-hand::before {
    content: '\\eacd';
  }
  .ngx-icon.ngx-handle::before {
    content: '\\eace';
  }
  .ngx-icon.ngx-heat::before {
    content: '\\eacf';
  }
  .ngx-icon.ngx-helper::before {
    content: '\\ead0';
  }
  .ngx-icon.ngx-history::before {
    content: '\\ead1';
  }
  .ngx-icon.ngx-horz-bar-graph-grouped::before {
    content: '\\ead2';
  }
  .ngx-icon.ngx-horz-stacked-bar::before {
    content: '\\ead3';
  }
  .ngx-icon.ngx-html-code::before {
    content: '\\ead4';
  }
  .ngx-icon.ngx-icon-chart-bar-horizontal::before {
    content: '\\ead5';
  }
  .ngx-icon.ngx-icon-chart-horz-bar::before {
    content: '\\ead6';
  }
  .ngx-icon.ngx-import-outline::before {
    content: '\\ead7';
  }
  .ngx-icon.ngx-import-outline-large::before {
    content: '\\ead8';
  }
  .ngx-icon.ngx-import-outline-small::before {
    content: '\\ead9';
  }
  .ngx-icon.ngx-info-filled::before {
    content: '\\eada';
  }
  .ngx-icon.ngx-info-filled-2::before {
    content: '\\eadb';
  }
  .ngx-icon.ngx-info-filled-small::before {
    content: '\\eadc';
  }
  .ngx-icon.ngx-ingest-small::before {
    content: '\\eadd';
  }
  .ngx-icon.ngx-inspect::before {
    content: '\\eade';
  }
  .ngx-icon.ngx-integration::before {
    content: '\\eadf';
  }
  .ngx-icon.ngx-integrations::before {
    content: '\\eae0';
  }
  .ngx-icon.ngx-ip::before {
    content: '\\eae1';
  }
  .ngx-icon.ngx-italic::before {
    content: '\\eae2';
  }
  .ngx-icon.ngx-key::before {
    content: '\\eae3';
  }
  .ngx-icon.ngx-key-outline::before {
    content: '\\eae4';
  }
  .ngx-icon.ngx-key-outline-small::before {
    content: '\\eae5';
  }
  .ngx-icon.ngx-keyboard::before {
    content: '\\eae6';
  }
  .ngx-icon.ngx-keyboard-return::before {
    content: '\\eae7';
  }
  .ngx-icon.ngx-layer::before {
    content: '\\eae8';
  }
  .ngx-icon.ngx-left-align::before {
    content: '\\eae9';
  }
  .ngx-icon.ngx-library::before {
    content: '\\eaea';
  }
  .ngx-icon.ngx-line-chart::before {
    content: '\\eaeb';
  }
  .ngx-icon.ngx-line-graph::before {
    content: '\\eaec';
  }
  .ngx-icon.ngx-linear-gauge::before {
    content: '\\eaed';
  }
  .ngx-icon.ngx-link::before {
    content: '\\eaee';
  }
  .ngx-icon.ngx-list::before {
    content: '\\eaef';
  }
  .ngx-icon.ngx-list-1::before {
    content: '\\eaf0';
  }
  .ngx-icon.ngx-list-view::before {
    content: '\\eaf1';
  }
  .ngx-icon.ngx-loading::before {
    content: '\\eaf2';
  }
  .ngx-icon.ngx-locate-filled::before {
    content: '\\eaf3';
  }
  .ngx-icon.ngx-locate-outline::before {
    content: '\\eaf4';
  }
  .ngx-icon.ngx-locate-outline-large::before {
    content: '\\eaf5';
  }
  .ngx-icon.ngx-location::before {
    content: '\\eaf6';
  }
  .ngx-icon.ngx-lock::before {
    content: '\\eaf7';
  }
  .ngx-icon.ngx-lock-sm::before {
    content: '\\eaf8';
  }
  .ngx-icon.ngx-mail::before {
    content: '\\eaf9';
  }
  .ngx-icon.ngx-mail-1::before {
    content: '\\eafa';
  }
  .ngx-icon.ngx-map::before {
    content: '\\eafb';
  }
  .ngx-icon.ngx-marketplace::before {
    content: '\\eafc';
  }
  .ngx-icon.ngx-menu::before {
    content: '\\eafd';
  }
  .ngx-icon.ngx-mfa::before {
    content: '\\eafe';
  }
  .ngx-icon.ngx-mic::before {
    content: '\\eaff';
  }
  .ngx-icon.ngx-minus::before {
    content: '\\eb00';
  }
  .ngx-icon.ngx-money::before {
    content: '\\eb01';
  }
  .ngx-icon.ngx-mouse-hold::before {
    content: '\\eb02';
  }
  .ngx-icon.ngx-multi-line::before {
    content: '\\eb03';
  }
  .ngx-icon.ngx-new-app::before {
    content: '\\eb04';
  }
  .ngx-icon.ngx-notation-arrow-down-left::before {
    content: '\\eb05';
  }
  .ngx-icon.ngx-notation-arrow-up::before {
    content: '\\eb06';
  }
  .ngx-icon.ngx-numbered-list::before {
    content: '\\eb07';
  }
  .ngx-icon.ngx-open::before {
    content: '\\eb08';
  }
  .ngx-icon.ngx-orchestration::before {
    content: '\\eb09';
  }
  .ngx-icon.ngx-paragraph::before {
    content: '\\eb0a';
  }
  .ngx-icon.ngx-pause::before {
    content: '\\eb0b';
  }
  .ngx-icon.ngx-pause-circle::before {
    content: '\\eb0c';
  }
  .ngx-icon.ngx-percent-gauge::before {
    content: '\\eb0d';
  }
  .ngx-icon.ngx-phone::before {
    content: '\\eb0e';
  }
  .ngx-icon.ngx-photo::before {
    content: '\\eb0f';
  }
  .ngx-icon.ngx-pie-chart::before {
    content: '\\eb10';
  }
  .ngx-icon.ngx-pin::before {
    content: '\\eb11';
  }
  .ngx-icon.ngx-plane::before {
    content: '\\eb12';
  }
  .ngx-icon.ngx-play::before {
    content: '\\eb13';
  }
  .ngx-icon.ngx-play-circle::before {
    content: '\\eb14';
  }
  .ngx-icon.ngx-playbook-outline::before {
    content: '\\eb15';
  }
  .ngx-icon.ngx-playbook-outline-small::before {
    content: '\\eb16';
  }
  .ngx-icon.ngx-plugin::before {
    content: '\\eb17';
  }
  .ngx-icon.ngx-plugin-outline::before {
    content: '\\eb18';
  }
  .ngx-icon.ngx-plugin-outline-small::before {
    content: '\\eb19';
  }
  .ngx-icon.ngx-plus::before {
    content: '\\eb1a';
  }
  .ngx-icon.ngx-plus-bold::before {
    content: '\\eb1b';
  }
  .ngx-icon.ngx-prev::before {
    content: '\\eb1c';
  }
  .ngx-icon.ngx-printer::before {
    content: '\\eb1d';
  }
  .ngx-icon.ngx-profile::before {
    content: '\\eb1e';
  }
  .ngx-icon.ngx-profile-filled::before {
    content: '\\eb1f';
  }
  .ngx-icon.ngx-promote::before {
    content: '\\eb20';
  }
  .ngx-icon.ngx-promote-horizontal::before {
    content: '\\eb21';
  }
  .ngx-icon.ngx-question::before {
    content: '\\eb22';
  }
  .ngx-icon.ngx-question-filled::before {
    content: '\\eb23';
  }
  .ngx-icon.ngx-question-filled-sm::before {
    content: '\\eb24';
  }
  .ngx-icon.ngx-radio-button::before {
    content: '\\eb25';
  }
  .ngx-icon.ngx-redo::before {
    content: '\\eb26';
  }
  .ngx-icon.ngx-redo-all::before {
    content: '\\eb27';
  }
  .ngx-icon.ngx-reference::before {
    content: '\\eb28';
  }
  .ngx-icon.ngx-reference-grid::before {
    content: '\\eb29';
  }
  .ngx-icon.ngx-reference-multi::before {
    content: '\\eb2a';
  }
  .ngx-icon.ngx-reference-single::before {
    content: '\\eb2b';
  }
  .ngx-icon.ngx-reference-tree::before {
    content: '\\eb2c';
  }
  .ngx-icon.ngx-refresh::before {
    content: '\\eb2d';
  }
  .ngx-icon.ngx-refresh-circle::before {
    content: '\\eb2e';
  }
  .ngx-icon.ngx-refresh-small::before {
    content: '\\eb2f';
  }
  .ngx-icon.ngx-remove::before {
    content: '\\eb30';
  }
  .ngx-icon.ngx-remove-edge::before {
    content: '\\eb31';
  }
  .ngx-icon.ngx-remove-node::before {
    content: '\\eb32';
  }
  .ngx-icon.ngx-remove-users::before {
    content: '\\eb33';
  }
  .ngx-icon.ngx-repeat::before {
    content: '\\eb34';
  }
  .ngx-icon.ngx-replace::before {
    content: '\\eb35';
  }
  .ngx-icon.ngx-reports::before {
    content: '\\eb36';
  }
  .ngx-icon.ngx-reports-outline::before {
    content: '\\eb37';
  }
  .ngx-icon.ngx-resize::before {
    content: '\\eb38';
  }
  .ngx-icon.ngx-right-align::before {
    content: '\\eb39';
  }
  .ngx-icon.ngx-rocket::before {
    content: '\\eb3a';
  }
  .ngx-icon.ngx-rotate::before {
    content: '\\eb3b';
  }
  .ngx-icon.ngx-rule-outline::before {
    content: '\\eb3c';
  }
  .ngx-icon.ngx-runner::before {
    content: '\\eb3d';
  }
  .ngx-icon.ngx-runs-outline::before {
    content: '\\eb3e';
  }
  .ngx-icon.ngx-runs-outline-small::before {
    content: '\\eb3f';
  }
  .ngx-icon.ngx-sankey::before {
    content: '\\eb40';
  }
  .ngx-icon.ngx-save::before {
    content: '\\eb41';
  }
  .ngx-icon.ngx-save-outline::before {
    content: '\\eb42';
  }
  .ngx-icon.ngx-save-outline-large::before {
    content: '\\eb43';
  }
  .ngx-icon.ngx-save-outline-small::before {
    content: '\\eb44';
  }
  .ngx-icon.ngx-screen::before {
    content: '\\eb45';
  }
  .ngx-icon.ngx-screen-1::before {
    content: '\\eb46';
  }
  .ngx-icon.ngx-search::before {
    content: '\\eb47';
  }
  .ngx-icon.ngx-section::before {
    content: '\\eb48';
  }
  .ngx-icon.ngx-select-all::before {
    content: '\\eb49';
  }
  .ngx-icon.ngx-select-user::before {
    content: '\\eb4a';
  }
  .ngx-icon.ngx-select-users::before {
    content: '\\eb4b';
  }
  .ngx-icon.ngx-sensor-outline::before {
    content: '\\eb4c';
  }
  .ngx-icon.ngx-sensor-outline-small::before {
    content: '\\eb4d';
  }
  .ngx-icon.ngx-server::before {
    content: '\\eb4e';
  }
  .ngx-icon.ngx-shield::before {
    content: '\\eb4f';
  }
  .ngx-icon.ngx-shrink::before {
    content: '\\eb50';
  }
  .ngx-icon.ngx-skip::before {
    content: '\\eb51';
  }
  .ngx-icon.ngx-slide-left::before {
    content: '\\eb52';
  }
  .ngx-icon.ngx-slide-right::before {
    content: '\\eb53';
  }
  .ngx-icon.ngx-sliders::before {
    content: '\\eb54';
  }
  .ngx-icon.ngx-smartphone::before {
    content: '\\eb55';
  }
  .ngx-icon.ngx-smiley-frown::before {
    content: '\\eb56';
  }
  .ngx-icon.ngx-snapshot::before {
    content: '\\eb57';
  }
  .ngx-icon.ngx-solution::before {
    content: '\\eb58';
  }
  .ngx-icon.ngx-sort-ascending::before {
    content: '\\eb59';
  }
  .ngx-icon.ngx-sort-descending::before {
    content: '\\eb5a';
  }
  .ngx-icon.ngx-spaces::before {
    content: '\\eb5b';
  }
  .ngx-icon.ngx-spaces-list::before {
    content: '\\eb5c';
  }
  .ngx-icon.ngx-spaces-outline::before {
    content: '\\eb5d';
  }
  .ngx-icon.ngx-spaces-outline-large::before {
    content: '\\eb5e';
  }
  .ngx-icon.ngx-speedometer::before {
    content: '\\eb5f';
  }
  .ngx-icon.ngx-split-handle::before {
    content: '\\eb60';
  }
  .ngx-icon.ngx-square::before {
    content: '\\eb61';
  }
  .ngx-icon.ngx-square-filled::before {
    content: '\\eb62';
  }
  .ngx-icon.ngx-star::before {
    content: '\\eb63';
  }
  .ngx-icon.ngx-star-filled::before {
    content: '\\eb64';
  }
  .ngx-icon.ngx-stars::before {
    content: '\\eb65';
  }
  .ngx-icon.ngx-stopwatch::before {
    content: '\\eb66';
  }
  .ngx-icon.ngx-superscript::before {
    content: '\\eb67';
  }
  .ngx-icon.ngx-swap::before {
    content: '\\eb68';
  }
  .ngx-icon.ngx-switch::before {
    content: '\\eb69';
  }
  .ngx-icon.ngx-system-diagnostics::before {
    content: '\\eb6a';
  }
  .ngx-icon.ngx-system-diagnostics-2::before {
    content: '\\eb6b';
  }
  .ngx-icon.ngx-table::before {
    content: '\\eb6c';
  }
  .ngx-icon.ngx-tabs::before {
    content: '\\eb6d';
  }
  .ngx-icon.ngx-tag-filled::before {
    content: '\\eb6e';
  }
  .ngx-icon.ngx-tags-outline::before {
    content: '\\eb6f';
  }
  .ngx-icon.ngx-target::before {
    content: '\\eb70';
  }
  .ngx-icon.ngx-task-outline::before {
    content: '\\eb71';
  }
  .ngx-icon.ngx-thumb-down-filled::before {
    content: '\\eb72';
  }
  .ngx-icon.ngx-thumb-down-outline::before {
    content: '\\eb73';
  }
  .ngx-icon.ngx-thumb-down-outline-large::before {
    content: '\\eb74';
  }
  .ngx-icon.ngx-thumb-up-filled::before {
    content: '\\eb75';
  }
  .ngx-icon.ngx-thumb-up-outline::before {
    content: '\\eb76';
  }
  .ngx-icon.ngx-thumb-up-outline-large::before {
    content: '\\eb77';
  }
  .ngx-icon.ngx-tracking-id::before {
    content: '\\eb78';
  }
  .ngx-icon.ngx-transfer::before {
    content: '\\eb79';
  }
  .ngx-icon.ngx-trash::before {
    content: '\\eb7a';
  }
  .ngx-icon.ngx-tree::before {
    content: '\\eb7b';
  }
  .ngx-icon.ngx-tree-collapse::before {
    content: '\\eb7c';
  }
  .ngx-icon.ngx-tree-expand::before {
    content: '\\eb7d';
  }
  .ngx-icon.ngx-trend-down::before {
    content: '\\eb7e';
  }
  .ngx-icon.ngx-trend-level::before {
    content: '\\eb7f';
  }
  .ngx-icon.ngx-trend-up::before {
    content: '\\eb80';
  }
  .ngx-icon.ngx-trending::before {
    content: '\\eb81';
  }
  .ngx-icon.ngx-underline::before {
    content: '\\eb82';
  }
  .ngx-icon.ngx-undo::before {
    content: '\\eb83';
  }
  .ngx-icon.ngx-undo-all::before {
    content: '\\eb84';
  }
  .ngx-icon.ngx-unlink::before {
    content: '\\eb85';
  }
  .ngx-icon.ngx-upload-outline::before {
    content: '\\eb86';
  }
  .ngx-icon.ngx-upload-outline-large::before {
    content: '\\eb87';
  }
  .ngx-icon.ngx-upload-outline-small::before {
    content: '\\eb88';
  }
  .ngx-icon.ngx-user::before {
    content: '\\eb89';
  }
  .ngx-icon.ngx-user-add::before {
    content: '\\eb8a';
  }
  .ngx-icon.ngx-user-circle::before {
    content: '\\eb8b';
  }
  .ngx-icon.ngx-user-groups::before {
    content: '\\eb8c';
  }
  .ngx-icon.ngx-users::before {
    content: '\\eb8d';
  }
  .ngx-icon.ngx-version::before {
    content: '\\eb8e';
  }
  .ngx-icon.ngx-vert-bar-graph-grouped::before {
    content: '\\eb8f';
  }
  .ngx-icon.ngx-vert-full-stack-bar::before {
    content: '\\eb90';
  }
  .ngx-icon.ngx-view-code::before {
    content: '\\eb91';
  }
  .ngx-icon.ngx-view-designer::before {
    content: '\\eb92';
  }
  .ngx-icon.ngx-view-split::before {
    content: '\\eb93';
  }
  .ngx-icon.ngx-wand::before {
    content: '\\eb94';
  }
  .ngx-icon.ngx-warning-filled::before {
    content: '\\eb95';
  }
  .ngx-icon.ngx-warning-filled-sm::before {
    content: '\\eb96';
  }
  .ngx-icon.ngx-warning-thin::before {
    content: '\\eb97';
  }
  .ngx-icon.ngx-web-api::before {
    content: '\\eb98';
  }
  .ngx-icon.ngx-webhook-outline::before {
    content: '\\eb99';
  }
  .ngx-icon.ngx-webhook-outline-large::before {
    content: '\\eb9a';
  }
  .ngx-icon.ngx-webhook-outline-small::before {
    content: '\\eb9b';
  }
  .ngx-icon.ngx-widget::before {
    content: '\\eb9c';
  }
  .ngx-icon.ngx-worker::before {
    content: '\\eb9d';
  }
  .ngx-icon.ngx-workflow::before {
    content: '\\eb9e';
  }
  .ngx-icon.ngx-workflow-alternate::before {
    content: '\\eb9f';
  }
  .ngx-icon.ngx-workflow-alternate-large::before {
    content: '\\eba0';
  }
  .ngx-icon.ngx-workflow-alternate-small::before {
    content: '\\eba1';
  }
  .ngx-icon.ngx-workspaces::before {
    content: '\\eba2';
  }
  .ngx-icon.ngx-workstation::before {
    content: '\\eba3';
  }
  .ngx-icon.ngx-wrench::before {
    content: '\\eba4';
  }
  .ngx-icon.ngx-x::before {
    content: '\\eba5';
  }
  .ngx-icon.ngx-x-filled::before {
    content: '\\eba6';
  }
  .ngx-icon.ngx-x-small::before {
    content: '\\eba7';
  }
`,wn=f`
  :host {
    display: inline-block;
    vertical-align: baseline;
  }

  :host svg {
    fill: currentColor;
    display: block;
    width: 1em;
    height: 1em;
  }

  .swim-icon__stack {
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1em;
    vertical-align: baseline;
  }

  .swim-icon__stack .swim-icon__i {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: inherit;
    line-height: 1em;
    display: block;
  }

  /* Later icons paint on top (e.g. x over square-filled) */
  .swim-icon__stack .swim-icon__i--1 {
    z-index: 1;
  }
  .swim-icon__stack .swim-icon__i--2 {
    z-index: 2;
  }
  .swim-icon__stack .swim-icon__i--3 {
    z-index: 3;
  }

  .swim-icon__stack .swim-icon__i::before {
    line-height: 1em;
  }

  /* Modifier: badge overlay (small icon at top-right), match ngx-ui icons-effects.scss */
  .icon-fx-badge {
    font-size: 0.25em !important;
    position: relative;
    top: -0.5em;
    left: 0.5em;
    width: auto;
    height: auto;
  }

  /* Modifier: red color for overlay icon (match ngx-ui) */
  .text-red {
    color: var(--red-500, rgb(255, 69, 20));
  }

  /* Font icon base (glyphs in icon-font-glyphs.ts) */
  .ngx-icon {
    display: inline-block;
    font: normal normal normal 1em/1 'ngx-icon';
    flex-shrink: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${xn}
`,yn=e=>`ngx-icon ${e.trim().split(" ").map(i=>{const[n,o]=i.split(":");return n.length?`${n} ${n}-${o}`:o}).join(" ")}`;class $n{constructor(){this._defaultFontSetClass="ngx",this._iconMap=new Map}setDefaultFontSetClass(t){return this._defaultFontSetClass=t,this._defaultFontSetClass}get(t,i){return this.lookup(t,i).map(n=>yn(n))}lookup(t,i){const n=i??this._defaultFontSetClass;return(Array.isArray(t)?t:[t]).reduce((o,s)=>{const r=this._expandKeys(s,n).map(c=>{const d=this._iconMap.get(c);return d&&d.length===1?d[0]:c}).join(" ");return o.concat(this._iconMap.get(r)||[r])},[])}add(t,i){const n=this._expandKeys(t,this._defaultFontSetClass).join(" "),o=this.lookup(i);this._iconMap.set(n,o)}_expandKeys(t,i){return t.split(" ").map(n=>n.includes(":")?n:`${i}:${n}`)}}const kn=new $n;var Sn=Object.defineProperty,Cn=Object.getOwnPropertyDescriptor,it=(e,t,i,n)=>{for(var o=n>1?void 0:n?Cn(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Sn(t,i,o),o};let Ae=class extends _{constructor(){super(...arguments),this.fontIcon="",this.alt="",this.fontSet="ngx",this.iconClass="",this._cssClasses=[],this._iconClassTokensOnHost=[]}connectedCallback(){super.connectedCallback(),this._updateFontIcon()}updated(e){super.updated(e),(e.has("fontIcon")||e.has("fontSet"))&&this._updateFontIcon(),e.has("iconClass")&&this._syncIconClassToHost()}_syncIconClassToHost(){var t;const e=(((t=this.iconClass)==null?void 0:t.trim())??"").split(/\s+/).filter(Boolean);this._iconClassTokensOnHost.forEach(i=>this.classList.remove(i)),e.forEach(i=>this.classList.add(i)),this._iconClassTokensOnHost=e}_parseFontIcon(e){if(Array.isArray(e))return e.filter(Boolean);if(typeof e!="string"||!e)return[];const t=e.trim();if(t.startsWith("["))try{const i=JSON.parse(t);return Array.isArray(i)?i:[t]}catch{return[t]}return[t]}_updateFontIcon(){const e=this._parseFontIcon(this.fontIcon);if(e.length===0){this._cssClasses=[];return}this._cssClasses=kn.get(e,this.fontSet)}render(){var o;const e=this._cssClasses,t=!!this.alt,i=((o=this.iconClass)==null?void 0:o.trim())??"",n=i?` ${i}`:"";return!e||e.length===0?l`
        <span
          part="icon"
          class="${i}"
          role="${t?"img":"presentation"}"
          aria-label="${t?this.alt:u}"
          aria-hidden="${t?"false":"true"}"
        >
          <slot></slot>
        </span>
      `:e.length===1?l`
        <i
          part="icon"
          class="swim-icon__i ${e[0]}${n}"
          role="${t?"img":"presentation"}"
          aria-label="${t?this.alt:u}"
          aria-hidden="${t?"false":"true"}"
        ></i>
      `:l`
      <span
        class="swim-icon__stack"
        role="${t?"img":"presentation"}"
        aria-label="${t?this.alt:u}"
        aria-hidden="${t?"false":"true"}"
      >
        ${e.map((s,r)=>l`<i part="icon icon-${r}" class="swim-icon__i swim-icon__i--${r} ${s}${n}"></i>`)}
      </span>
    `}};Ae.styles=[$,wn];it([a({type:String,attribute:"font-icon"})],Ae.prototype,"fontIcon",2);it([a({type:String})],Ae.prototype,"alt",2);it([a({type:String,attribute:"font-set"})],Ae.prototype,"fontSet",2);it([a({type:String,attribute:"icon-class"})],Ae.prototype,"iconClass",2);it([w()],Ae.prototype,"_cssClasses",2);Ae=it([y("swim-icon")],Ae);var En=Object.defineProperty,In=Object.getOwnPropertyDescriptor,ne=(e,t,i,n)=>{for(var o=n>1?void 0:n?In(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&En(t,i,o),o};let W=class extends _{constructor(){super(...arguments),this.variant="default",this.size="medium",this._disabled=!1,this._state=U.Active,this.type="button",this._inProgress=!1,this._success=!1,this._fail=!1}get disabled(){return this._disabled}set disabled(e){this._disabled=g(e)}get state(){return this._state}set state(e){this._state=e,this._updateStateFlags()}get timeout(){return this._timeout===void 0?3e3:this._timeout}set timeout(e){this._timeout=B(e)}get promise(){return this._promise}set promise(e){this._promise=e,this._handlePromise()}connectedCallback(){super.connectedCallback(),this._updateState()}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer()}render(){return l`
      <button part="button" type="${this.type}" ?disabled="${this.disabled}" @click="${this._handleClick}">
        <span class="content">
          <slot></slot>
        </span>
        <span class="state-icon"> ${this._renderStateIcon()} </span>
      </button>
    `}_renderStateIcon(){return this._inProgress?l`<swim-icon class="state-icon" font-icon="loading"></swim-icon>`:this._success?l`<swim-icon class="state-icon" font-icon="check"></swim-icon>`:this._fail?l`<swim-icon class="state-icon" font-icon="x"></swim-icon>`:u}_handleClick(e){if(this.disabled){e.stopPropagation(),e.preventDefault();return}}_updateStateFlags(){this._inProgress=this._state===U.InProgress,this._success=this._state===U.Success,this._fail=this._state===U.Fail}_updateState(){this._state||(this.state=U.Active),this.timeout&&(this._state===U.Success||this._state===U.Fail||this._state===U.InProgress)&&(this._clearTimer(),this._timer=window.setTimeout(()=>{this.state=U.Active,this._updateState()},this.timeout))}_handlePromise(){this._promise&&(this.state=U.InProgress,this._promise.then(()=>{this.state=U.Success,this._updateState()}).catch(()=>{this.state=U.Fail,this._updateState()}))}_clearTimer(){this._timer!==void 0&&(clearTimeout(this._timer),this._timer=void 0)}};W.styles=[$,vn];ne([a({type:String,reflect:!0})],W.prototype,"variant",2);ne([a({type:String,reflect:!0})],W.prototype,"size",2);ne([a({type:Boolean,reflect:!0})],W.prototype,"disabled",1);ne([a({type:String,reflect:!0})],W.prototype,"state",1);ne([a({type:String})],W.prototype,"type",2);ne([a({type:Number})],W.prototype,"timeout",1);ne([a({attribute:!1})],W.prototype,"promise",1);ne([w()],W.prototype,"_inProgress",2);ne([w()],W.prototype,"_success",2);ne([w()],W.prototype,"_fail",2);W=ne([y("swim-button")],W);const An=f`
  :host {
    display: inline-flex;
    position: relative;
    box-sizing: border-box;

    /* Default colors - slotted buttons inherit via --button-* (swim-button uses these with fallbacks) */
    --button-bg: var(--grey-600);
    --button-border: var(--grey-600);
    --button-text: var(--white);
    --button-hover: var(--grey-700);
  }

  :host([button-group-style='primary']) {
    --button-bg: var(--blue-400);
    --button-border: var(--blue-400);
    --button-text: var(--white);
    --button-hover: var(--blue-500);
  }

  /* Contained group: slotted buttons use group colors and no individual shadow */
  :host([variant='contained']) {
    --button-shadow: none;
  }

  /* Horizontal: align items */
  :host([orientation='horizontal']) {
    align-items: center;
  }

  /* Vertical: column layout */
  :host([orientation='vertical']) {
    flex-direction: column;
    align-items: stretch;
  }

  /* Contained variant: unify slotted button appearance and remove radius between items */
  :host([variant='contained'][orientation='horizontal']) ::slotted(swim-button),
  :host([variant='contained'][orientation='horizontal']) ::slotted(button) {
    max-height: 30px;
  }

  :host([variant='contained'][orientation='horizontal']) ::slotted(swim-button:first-child),
  :host([variant='contained'][orientation='horizontal']) ::slotted(button:first-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host([variant='contained'][orientation='horizontal']) ::slotted(swim-button:last-child),
  :host([variant='contained'][orientation='horizontal']) ::slotted(button:last-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  :host([variant='contained'][orientation='horizontal']) ::slotted(swim-button:not(:first-child):not(:last-child)),
  :host([variant='contained'][orientation='horizontal']) ::slotted(button:not(:first-child):not(:last-child)) {
    border-radius: 0;
  }

  :host([variant='contained'][orientation='horizontal']) ::slotted(swim-button:not(:first-child)),
  :host([variant='contained'][orientation='horizontal']) ::slotted(button:not(:first-child)) {
    border-left: 0;
  }

  :host([variant='contained'][orientation='horizontal']) ::slotted(swim-button:not(:last-child)),
  :host([variant='contained'][orientation='horizontal']) ::slotted(button:not(:last-child)) {
    margin-right: 1px;
  }

  /* Vertical contained */
  :host([variant='contained'][orientation='vertical']) ::slotted(swim-button:first-child),
  :host([variant='contained'][orientation='vertical']) ::slotted(button:first-child) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host([variant='contained'][orientation='vertical']) ::slotted(swim-button:last-child),
  :host([variant='contained'][orientation='vertical']) ::slotted(button:last-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  :host([variant='contained'][orientation='vertical']) ::slotted(swim-button:not(:first-child):not(:last-child)),
  :host([variant='contained'][orientation='vertical']) ::slotted(button:not(:first-child):not(:last-child)) {
    border-radius: 0;
  }

  :host([variant='contained'][orientation='vertical']) ::slotted(swim-button:not(:first-child)),
  :host([variant='contained'][orientation='vertical']) ::slotted(button:not(:first-child)) {
    border-top: 0;
  }

  :host([variant='contained'][orientation='vertical']) ::slotted(swim-button:not(:last-child)),
  :host([variant='contained'][orientation='vertical']) ::slotted(button:not(:last-child)) {
    margin-bottom: 1px;
  }

  /* Text variant: divider between items */
  :host([variant='text'][orientation='horizontal']) ::slotted(swim-button:not(:last-child)),
  :host([variant='text'][orientation='horizontal']) ::slotted(button:not(:last-child)) {
    border-right: 1px solid var(--white);
  }

  :host([variant='text'][orientation='vertical']) ::slotted(swim-button:not(:last-child)),
  :host([variant='text'][orientation='vertical']) ::slotted(button:not(:last-child)) {
    border-bottom: 1px solid var(--white);
  }
`;var Bo=(e=>(e.Horizontal="horizontal",e.Vertical="vertical",e))(Bo||{}),zo=(e=>(e.Contained="contained",e.Text="text",e))(zo||{}),To=(e=>(e.Default="default",e.Primary="primary",e))(To||{}),Bn=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,Xt=(e,t,i,n)=>{for(var o=n>1?void 0:n?zn(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Bn(t,i,o),o};let Ze=class extends _{constructor(){super(...arguments),this.orientation=Bo.Horizontal,this.variant=zo.Contained,this.buttonGroupStyle=To.Default}render(){return l`<slot></slot>`}};Ze.styles=[$,An];Xt([a({type:String,reflect:!0})],Ze.prototype,"orientation",2);Xt([a({type:String,reflect:!0})],Ze.prototype,"variant",2);Xt([a({attribute:"button-group-style",type:String,reflect:!0})],Ze.prototype,"buttonGroupStyle",2);Ze=Xt([y("swim-button-group")],Ze);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},_i=e=>(...t)=>({_$litDirective$:e,values:t});class vi{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,n){this._$Ct=t,this._$AM=i,this._$Ci=n}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Tn}=gn,Pn=e=>e.strings===void 0,so=()=>document.createComment(""),rt=(e,t,i)=>{var s;const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(i===void 0){const r=n.insertBefore(so(),o),c=n.insertBefore(so(),o);i=new Tn(r,c,e,e.options)}else{const r=i._$AB.nextSibling,c=i._$AM,d=c!==e;if(d){let p;(s=i._$AQ)==null||s.call(i,e),i._$AM=e,i._$AP!==void 0&&(p=e._$AU)!==c._$AU&&i._$AP(p)}if(r!==o||d){let p=i._$AA;for(;p!==r;){const v=p.nextSibling;n.insertBefore(p,o),p=v}}}return i},Pe=(e,t,i=e)=>(e._$AI(t,i),e),Ln={},Po=(e,t=Ln)=>e._$AH=t,On=e=>e._$AH,ri=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ro=_i(class extends vi{constructor(e){if(super(e),e.type!==Ce.PROPERTY&&e.type!==Ce.ATTRIBUTE&&e.type!==Ce.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Pn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===J||t===u)return t;const i=e.element,n=e.name;if(e.type===Ce.PROPERTY){if(t===i[n])return J}else if(e.type===Ce.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(n))return J}else if(e.type===Ce.ATTRIBUTE&&i.getAttribute(n)===t+"")return J;return Po(e),t}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=e=>e??u,Dn=f`
  :host {
    display: block;
    max-width: 100%;
    margin-top: var(--spacing-16);
    margin-bottom: var(--spacing-8);
    line-height: calc(1em + 0.75em);
    padding-top: calc(0.75rem + 8px);
    padding-bottom: 0;
  }

  :host([marginless]) {
    margin-top: 0;
    margin-bottom: 0;
  }

  :host([no-label]) {
    padding-top: 0;
  }

  :host([size='md']) .input-box,
  :host([size='md']) .input-textarea {
    font-size: var(--font-size-l) !important;
  }

  :host([size='lg']) .input-box,
  :host([size='lg']) .input-textarea {
    font-size: var(--font-size-xl) !important;
  }

  :host([focused]:not([invalid])) .input-label {
    color: var(--blue-500) !important;
  }

  :host([invalid][touched]) .input-underline,
  :host([invalid][dirty]) .input-underline {
    background-color: var(--red-500) !important;
  }

  :host([invalid][touched]) .underline-fill,
  :host([invalid][dirty]) .underline-fill {
    background-color: var(--red-500) !important;
  }

  :host([invalid][touched]) .input-label,
  :host([invalid][dirty]) .input-label {
    color: var(--red-500);
  }

  :host([invalid][touched]) .input-hint,
  :host([invalid][dirty]) .input-hint {
    color: var(--red-500);
  }

  :host([invalid][touched]) .input-box,
  :host([invalid][dirty]) .input-box,
  :host([invalid][touched]) .input-textarea,
  :host([invalid][dirty]) .input-textarea {
    caret-color: var(--red-500) !important;
  }

  :host([autosize]) {
    display: inline-block;
  }

  /* Chrome autofill override */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var(--grey-100) !important;
  }

  .input-flex-wrap {
    display: flex;
  }

  .input-flex-wrap-inner {
    display: flex;
    flex: 1;
    max-width: 100%;
  }

  ::slotted([slot='prefix']),
  ::slotted([slot='suffix']) {
    flex: none;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ::slotted([slot='prefix']) {
    margin-right: var(--spacing-8);
  }

  ::slotted([slot='suffix']) {
    margin-left: var(--spacing-8);
  }

  .input-wrap {
    position: relative;
    display: block;
    margin-bottom: var(--spacing-0);
    width: 100%;
  }

  .input-box-wrap {
    position: relative;
    width: 100%;
    display: flex;
    min-height: 1.75em;
  }

  .input-box-wrap:focus {
    outline: none;
  }

  .input-box,
  .input-textarea {
    flex: auto;
    display: block;
    background: transparent;
    border: none;
    margin-bottom: var(--spacing-0);
    padding-left: var(--spacing-0);
    width: 100%;
    max-width: 100%;
    color: var(--grey-050);
    font-size: var(--font-size-m);
    line-height: 1.25em;
    min-height: var(--input-height, 33px);
    font-family: inherit;
    caret-color: var(--blue-500);
  }

  .input-box::placeholder,
  .input-textarea::placeholder {
    color: var(--grey-350);
  }

  .input-box:focus,
  .input-textarea:focus {
    box-shadow: none;
    outline: none;
  }

  .input-box:disabled,
  .input-textarea:disabled {
    color: var(--grey-400);
    user-select: none;
  }

  .input-box {
    margin: 3px 0;
  }

  .input-box[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .input-textarea {
    resize: none;
  }

  .input-label {
    position: absolute;
    top: 0.5em;
    line-height: var(--font-line-height-100);
    pointer-events: none;
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-semibold);
    color: var(--grey-350);
    white-space: nowrap;
    overflow-x: clip;
    max-width: 100%;
    text-overflow: ellipsis;
    transition: color 0.2s ease-out, font-size 150ms ease-out, top 150ms ease-out;
  }

  :host([active]) .input-label,
  :host([has-placeholder]) .input-label {
    font-size: 0.75rem;
    top: -1.4em;
  }

  .input-underline {
    width: 100%;
    height: 1px;
    background-color: var(--grey-600);
  }

  .input-underline.visibility-hidden {
    visibility: hidden;
  }

  .underline-fill {
    background-color: var(--blue-500);
    transition: width 250ms ease-out;
    width: 0;
    height: 2px;
    margin: 0 auto;
  }

  :host([focused]) .underline-fill {
    width: 100%;
  }

  .input-hint {
    font-size: var(--font-size-xs);
    color: var(--grey-350);
    margin-top: var(--spacing-8);
    min-height: 1em;
    line-height: 14px;
    transition: color 0.2s ease-in-out;
  }

  .input-hint.hidden {
    display: none;
  }

  .password-toggle,
  .lock-toggle {
    line-height: 25px;
    top: 0;
    bottom: 0;
    right: 10px;
    cursor: pointer;
    font-size: 0.8rem;
    color: var(--grey-300);
    transition: color 100ms;
    padding: 0;
    z-index: 1;
    background: transparent;
    border: none;
    position: absolute;
  }

  .password-toggle:hover,
  .lock-toggle:hover {
    color: var(--grey-050);
  }

  .numeric-spinner {
    display: flex;
    z-index: 2;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
    transition: all 0.1s ease-out;
  }

  :host(:not([disabled])) .input-box-wrap:hover .numeric-spinner,
  .input-box:focus + .numeric-spinner {
    opacity: 1;
  }

  .spinner-btn {
    font-size: var(--font-size-xxs);
    color: var(--grey-300);
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    line-height: 1;
  }

  .spinner-btn:hover {
    color: var(--grey-100);
  }

  .spinner-btn:active {
    transform: scale(1.4);
  }

  /* Fill appearance */
  :host([appearance='fill']:not([readonly])) .input-flex-wrap {
    position: relative;
  }

  :host([appearance='fill']:not([readonly])) .input-flex-wrap::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--grey-875);
    mix-blend-mode: exclusion;
    pointer-events: none;
    border-top-left-radius: var(--radius-4);
    border-top-right-radius: var(--radius-4);
  }

  :host([appearance='fill']) .input-label {
    left: 0;
  }

  :host([appearance='fill']) .input-box-wrap .password-toggle,
  :host([appearance='fill']) .input-box-wrap .lock-toggle {
    line-height: 33.33px;
    z-index: 2;
  }

  :host([appearance='fill']) .input-box,
  :host([appearance='fill']) .input-textarea {
    margin: 0;
    padding: var(--spacing-4) 10px;
    position: relative;
    z-index: 1;
  }

  :host([appearance='fill']) .input-box + .numeric-spinner {
    right: 10px;
  }

  :host([appearance='fill']) ::slotted([slot='prefix']),
  :host([appearance='fill']) ::slotted([slot='suffix']) {
    color: var(--grey-350);
  }

  :host([appearance='fill']) ::slotted([slot='prefix']) {
    padding-left: var(--spacing-10);
  }

  :host([appearance='fill']) ::slotted([slot='suffix']) {
    padding-right: var(--spacing-10);
  }

  /* swim-icon in spinner and password toggle */
  .spinner-btn swim-icon,
  .password-toggle swim-icon {
    display: inline-block;
    font-size: 1em;
  }
`;var _e=(e=>(e.text="text",e.password="password",e.email="email",e.number="number",e.tel="tel",e.url="url",e.textarea="textarea",e))(_e||{}),xi=(e=>(e.legacy="legacy",e.fill="fill",e))(xi||{}),wi=(e=>(e.sm="sm",e.md="md",e.lg="lg",e))(wi||{}),Fn=Object.defineProperty,Mn=Object.getOwnPropertyDescriptor,S=(e,t,i,n)=>{for(var o=n>1?void 0:n?Mn(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Fn(t,i,o),o};let x=class extends _{constructor(){super(),this.type=_e.text,this.label="",this.placeholder="",this.hint="",this._value="",this.name="",this.id=`swim-input-${Math.random().toString(36).substr(2,9)}`,this._disabled=!1,this._readonly=!1,this._required=!1,this._autofocus=!1,this.autocomplete="off",this.appearance=xi.legacy,this.size=wi.sm,this._withMargin=!0,this._withHint=!0,this._passwordToggleEnabled=!1,this.textareaRows=3,this.requiredIndicator="*",this._focused=!1,this._passwordVisible=!1,this._touched=!1,this._dirty=!1,this._invalid=!1,this._internals=this.attachInternals()}get value(){return this._value}set value(e){const t=this._value;this._value=e,this._internals.setFormValue(e),this.requestUpdate("value",t),this._updateActiveState()}get disabled(){return this._disabled}set disabled(e){this._disabled=g(e)}get readonly(){return this._readonly}set readonly(e){this._readonly=g(e)}get required(){return this._required}set required(e){this._required=g(e)}get autofocus(){return this._autofocus}set autofocus(e){this._autofocus=g(e)}get marginless(){return!this._withMargin}set marginless(e){this._withMargin=!g(e)}get withHint(){return this._withHint}set withHint(e){this._withHint=g(e)}get passwordToggleEnabled(){return this._passwordToggleEnabled}set passwordToggleEnabled(e){this._passwordToggleEnabled=g(e)}connectedCallback(){super.connectedCallback(),this._updateActiveState()}firstUpdated(){this.autofocus&&this.inputElement&&setTimeout(()=>{this.inputElement.focus()})}focus(e){var t;(t=this.inputElement)==null||t.focus(e)}updated(e){super.updated(e),e.has("value")&&this._updateActiveState(),(e.has("required")||e.has("min")||e.has("max"))&&this._validate()}render(){const e=this.type===_e.textarea,t=this.type===_e.password&&this.passwordToggleEnabled&&!this.disabled,i=this.type===_e.number&&!this.disabled,n=this._passwordVisible?_e.text:this.type;return l`
      <div class="input-wrap">
        <div class="input-flex-wrap">
          <slot name="prefix"></slot>
          <div class="input-flex-wrap-inner">
            <div class="input-box-wrap">
              ${e?this._renderTextarea():this._renderInput(n)}
              ${i?l`
                    <div class="numeric-spinner">
                      <button
                        type="button"
                        class="spinner-btn"
                        @mousedown="${this._incrementValue}"
                        @mouseup="${this._stopSpinner}"
                        @mouseleave="${this._stopSpinner}"
                        aria-label="Increment"
                      >
                        <swim-icon font-icon="chevron-bold-up"></swim-icon>
                      </button>
                      <button
                        type="button"
                        class="spinner-btn"
                        @mousedown="${this._decrementValue}"
                        @mouseup="${this._stopSpinner}"
                        @mouseleave="${this._stopSpinner}"
                        aria-label="Decrement"
                      >
                        <swim-icon font-icon="chevron-bold-down"></swim-icon>
                      </button>
                    </div>
                  `:u}
              ${t?l`
                    <button
                      type="button"
                      class="password-toggle"
                      @click="${this._togglePassword}"
                      aria-label="Toggle password visibility"
                    >
                      <swim-icon font-icon="${this._passwordVisible?"eye-disabled":"eye"}"></swim-icon>
                    </button>
                  `:u}
            </div>
            <label class="input-label" part="label" for="${this.id}">
              ${this.label} ${this.required?l`<span>${this.requiredIndicator}</span>`:u}
            </label>
          </div>
          <slot name="suffix"></slot>
        </div>
        <div class="input-underline ${this.readonly?"visibility-hidden":""}">
          <div class="underline-fill"></div>
        </div>
        <div class="input-hint ${this.withHint?"":"hidden"}">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `}_renderInput(e){return l`
      <input
        part="input"
        class="input-box"
        type="${e}"
        id="${this.id}"
        name="${this.name}"
        .value="${ro(this.value)}"
        placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        min="${Se(this.min)}"
        max="${Se(this.max)}"
        minlength="${Se(this.minlength)}"
        maxlength="${Se(this.maxlength)}"
        tabindex="${Se(this.tabindex)}"
        autocomplete="${this.autocomplete}"
        @input="${this._handleInput}"
        @change="${this._handleChange}"
        @focus="${this._handleFocus}"
        @blur="${this._handleBlur}"
      />
    `}_renderTextarea(){return l`
      <textarea
        part="input"
        class="input-textarea"
        id="${this.id}"
        name="${this.name}"
        .value="${ro(this.value)}"
        placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        rows="${this.textareaRows}"
        minlength="${Se(this.minlength)}"
        maxlength="${Se(this.maxlength)}"
        tabindex="${Se(this.tabindex)}"
        autocomplete="${this.autocomplete}"
        @input="${this._handleInput}"
        @change="${this._handleChange}"
        @focus="${this._handleFocus}"
        @blur="${this._handleBlur}"
      ></textarea>
    `}_handleInput(e){const t=e.target;this.value=t.value,this._dirty||(this._dirty=!0,this.setAttribute("dirty","")),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}_handleChange(e){this._validate(),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}_handleFocus(e){this._focused=!0,this.setAttribute("focused",""),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}_handleBlur(e){this._focused=!1,this.removeAttribute("focused"),this._touched||(this._touched=!0,this.setAttribute("touched","")),this._validate(),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}_togglePassword(){var e;this._passwordVisible=!this._passwordVisible,(e=this.inputElement)==null||e.focus()}_incrementValue(e){e.preventDefault(),!this.disabled&&(this._increment(),this._spinnerTimeout=window.setTimeout(()=>{this._spinnerInterval=window.setInterval(()=>this._increment(),50)},500))}_decrementValue(e){e.preventDefault(),!this.disabled&&(this._decrement(),this._spinnerTimeout=window.setTimeout(()=>{this._spinnerInterval=window.setInterval(()=>this._decrement(),50)},500))}disconnectedCallback(){super.disconnectedCallback(),this._stopSpinner()}_stopSpinner(){this._spinnerTimeout!==void 0&&(clearTimeout(this._spinnerTimeout),this._spinnerTimeout=void 0),this._spinnerInterval!==void 0&&(clearInterval(this._spinnerInterval),this._spinnerInterval=void 0)}_increment(){if(this.inputElement&&this.type===_e.number){const e=this.inputElement,t=parseFloat(e.value)||0;if(this.max!==void 0&&t>=this.max)return;const i=t+1;this.value=i.toString(),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}}_decrement(){if(this.inputElement&&this.type===_e.number){const e=this.inputElement,t=parseFloat(e.value)||0;if(this.min!==void 0&&t<=this.min)return;const i=t-1;this.value=i.toString(),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}}_validate(){let e=!0;if(this.required&&!this.value&&(e=!1),this.type===_e.number&&this.value){const t=parseFloat(this.value);this.min!==void 0&&t<this.min&&(e=!1),this.max!==void 0&&t>this.max&&(e=!1)}return this.minlength&&this.value.length<this.minlength&&(e=!1),this.maxlength&&this.value.length>this.maxlength&&(e=!1),this.inputElement&&(this.inputElement.validity.valid||(e=!1)),this._invalid=!e,this._invalid?(this.setAttribute("invalid",""),this._internals.setValidity({customError:!0},"Invalid input")):(this.removeAttribute("invalid"),this._internals.setValidity({})),e}_updateActiveState(){const e=this.value&&this.value.length>0,t=!!this.placeholder;this._focused||e?this.setAttribute("active",""):this.removeAttribute("active"),t?this.setAttribute("has-placeholder",""):this.removeAttribute("has-placeholder"),this.label?this.removeAttribute("no-label"):this.setAttribute("no-label","")}formResetCallback(){this.value="",this._touched=!1,this._dirty=!1,this.removeAttribute("touched"),this.removeAttribute("dirty")}formDisabledCallback(e){this.disabled=e}};x.styles=[$,Dn];x.formAssociated=!0;S([V(".input-box, .input-textarea")],x.prototype,"inputElement",2);S([a({type:String})],x.prototype,"type",2);S([a({type:String})],x.prototype,"label",2);S([a({type:String})],x.prototype,"placeholder",2);S([a({type:String})],x.prototype,"hint",2);S([a({type:String})],x.prototype,"value",1);S([a({type:String})],x.prototype,"name",2);S([a({type:String})],x.prototype,"id",2);S([a({type:Boolean,reflect:!0})],x.prototype,"disabled",1);S([a({type:Boolean,reflect:!0})],x.prototype,"readonly",1);S([a({type:Boolean,reflect:!0})],x.prototype,"required",1);S([a({type:Boolean})],x.prototype,"autofocus",1);S([a({type:String})],x.prototype,"autocomplete",2);S([a({type:String,reflect:!0})],x.prototype,"appearance",2);S([a({type:String,reflect:!0})],x.prototype,"size",2);S([a({type:Boolean,reflect:!0,attribute:"marginless"})],x.prototype,"marginless",1);S([a({type:Boolean})],x.prototype,"withHint",1);S([a({type:Boolean,attribute:"password-toggle-enabled"})],x.prototype,"passwordToggleEnabled",1);S([a({type:Number})],x.prototype,"min",2);S([a({type:Number})],x.prototype,"max",2);S([a({type:Number})],x.prototype,"minlength",2);S([a({type:Number})],x.prototype,"maxlength",2);S([a({type:Number,attribute:"textarea-rows"})],x.prototype,"textareaRows",2);S([a({type:String,attribute:"required-indicator"})],x.prototype,"requiredIndicator",2);S([a({type:Number})],x.prototype,"tabindex",2);S([w()],x.prototype,"_focused",2);S([w()],x.prototype,"_passwordVisible",2);S([w()],x.prototype,"_touched",2);S([w()],x.prototype,"_dirty",2);S([w()],x.prototype,"_invalid",2);x=S([y("swim-input")],x);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ao=(e,t,i)=>{const n=new Map;for(let o=t;o<=i;o++)n.set(e[o],o);return n},Hn=_i(class extends vi{constructor(e){if(super(e),e.type!==Ce.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let n;i===void 0?i=t:t!==void 0&&(n=t);const o=[],s=[];let r=0;for(const c of e)o[r]=n?n(c,r):r,s[r]=i(c,r),r++;return{values:s,keys:o}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,n]){const o=On(e),{values:s,keys:r}=this.dt(t,i,n);if(!Array.isArray(o))return this.ut=r,s;const c=this.ut??(this.ut=[]),d=[];let p,v,h=0,b=o.length-1,m=0,C=s.length-1;for(;h<=b&&m<=C;)if(o[h]===null)h++;else if(o[b]===null)b--;else if(c[h]===r[m])d[m]=Pe(o[h],s[m]),h++,m++;else if(c[b]===r[C])d[C]=Pe(o[b],s[C]),b--,C--;else if(c[h]===r[C])d[C]=Pe(o[h],s[C]),rt(e,d[C+1],o[h]),h++,C--;else if(c[b]===r[m])d[m]=Pe(o[b],s[m]),rt(e,o[h],o[b]),b--,m++;else if(p===void 0&&(p=ao(r,m,C),v=ao(c,h,b)),p.has(c[h]))if(p.has(c[b])){const E=v.get(r[m]),j=E!==void 0?o[E]:null;if(j===null){const le=rt(e,o[h]);Pe(le,s[m]),d[m]=le}else d[m]=Pe(j,s[m]),rt(e,o[h],j),o[E]=null;m++}else ri(o[b]),b--;else ri(o[h]),h++;for(;m<=C;){const E=rt(e,d[C+1]);Pe(E,s[m]),d[m++]=E}for(;h<=b;){const E=o[h++];E!==null&&ri(E)}return this.ut=r,Po(e,d),J}}),Rn=f`
  :host {
    display: block;
    max-width: 100%;
    margin-top: var(--spacing-16);
    margin-bottom: var(--spacing-8);
    line-height: calc(1em + 0.75em);
    padding-top: calc(0.75rem + 8px);
    padding-bottom: 0;
    position: relative;
    min-width: 300px;
  }

  :host([marginless]) {
    margin-top: 0;
    margin-bottom: 0;
  }

  :host([no-label]) {
    padding-top: 0;
  }

  :host([size='md']) .select-input {
    font-size: var(--font-size-l) !important;
  }

  :host([size='lg']) .select-input {
    font-size: var(--font-size-xl) !important;
  }

  :host([focused]:not([invalid])) .select-label {
    color: var(--blue-500) !important;
  }

  :host([invalid][touched]) .select-underline {
    background-color: var(--red-500) !important;
  }

  :host([invalid][touched]) .underline-fill {
    background-color: var(--red-500) !important;
  }

  :host([invalid][touched]) .select-label,
  :host([invalid][touched]) .select-hint {
    color: var(--red-500);
  }

  .select-wrap {
    position: relative;
    display: block;
    margin-bottom: 0;
    width: 100%;
  }

  .select-flex-wrap {
    display: flex;
    flex-direction: row;
  }

  .select-flex-wrap-inner {
    display: flex;
    flex: 100%;
    width: 100%;
    position: relative;
  }

  .select-input-wrap {
    width: 100%;
    position: relative;
  }

  .select-input {
    align-items: center;
    position: relative;
    background: transparent;
    outline: none;
    margin-bottom: 0;
    padding-left: 0;
    width: 100%;
    min-height: var(--input-height, 33px);
    min-width: 60px;
    cursor: pointer;
    display: flex;
    border: none;
    color: var(--grey-050);
    font-size: var(--font-size-m);
    font-family: inherit;
  }

  .select-input:focus {
    outline: none;
  }

  .select-input[disabled] {
    cursor: not-allowed;
    color: var(--grey-400);
  }

  .select-value {
    flex: 1;
    padding: 3px 0;
    min-height: 1.4em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .select-placeholder {
    color: var(--grey-350);
  }

  .select-controls {
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
    padding-right: var(--spacing-4);
    color: var(--grey-350);
  }

  .select-clear,
  .select-caret {
    background: none;
    border: none;
    padding: var(--spacing-2);
    cursor: pointer;
    color: inherit;
    font-size: var(--font-size-xxs);
    display: flex;
    align-items: center;
    transition: color 100ms;
  }

  .select-clear:hover,
  .select-caret:hover {
    color: var(--blue-400);
  }

  .select-caret {
    transition: transform 200ms ease-in-out;
    transform: rotate(0deg);
  }

  :host([open]) .select-caret {
    transform: rotate(180deg);
  }

  .select-label {
    position: absolute;
    top: 0.5em;
    line-height: var(--font-line-height-100);
    pointer-events: none;
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-semibold);
    color: var(--grey-350);
    white-space: nowrap;
    overflow-x: clip;
    max-width: 100%;
    text-overflow: ellipsis;
    transition: color 0.2s ease-out, font-size 150ms ease-out, top 150ms ease-out;
  }

  :host([active]) .select-label,
  :host([has-placeholder]) .select-label {
    font-size: 0.75rem;
    top: -1.4em;
  }

  .select-underline {
    width: 100%;
    height: 1px;
    background-color: var(--grey-600);
  }

  .underline-fill {
    background-color: var(--blue-500);
    transition: width 250ms ease-out;
    width: 0;
    height: 2px;
    margin: 0 auto;
  }

  :host([focused]) .underline-fill,
  :host([open]) .underline-fill {
    width: 100%;
  }

  .select-hint {
    font-size: var(--font-size-xs);
    color: var(--grey-350);
    margin-top: var(--spacing-8);
    min-height: 1em;
    line-height: 14px;
    transition: color 0.2s ease-in-out;
  }

  .select-hint.hidden {
    display: none;
  }

  /* Dropdown */
  .select-dropdown {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1000;
    background: var(--grey-700);
    border: 1px solid transparent;
    border-radius: var(--radius-4);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: var(--spacing-8);
    max-height: 300px;
    overflow-y: auto;
    display: none;
  }

  :host([open]) .select-dropdown {
    display: block;
    animation: slideDown 0.25s ease-out;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .select-filter {
    padding: var(--spacing-10);
    background: var(--grey-600);
    position: sticky;
    top: 0;
    z-index: 1;
    border-top-left-radius: var(--radius-4);
    border-top-right-radius: var(--radius-4);
  }

  .select-filter-input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: var(--grey-050);
    font-size: var(--font-size-m);
    font-family: inherit;
    padding: var(--spacing-4);
  }

  .select-filter-input::placeholder {
    color: var(--grey-350);
  }

  .select-options {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .select-option {
    padding: 7px 15px;
    font-size: var(--font-size-m);
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--grey-050);
    transition: background-color 100ms;
  }

  .select-option:not(:last-child) {
    border-bottom: 1px solid var(--grey-650);
  }

  .select-option:hover:not([disabled]) {
    background: var(--grey-750);
  }

  .select-option[selected] {
    background: var(--blue-600);
    color: var(--white);
  }

  .select-option[disabled] {
    color: var(--grey-450);
    cursor: not-allowed;
    opacity: 0.6;
  }

  .select-option[focused]:not([disabled]) {
    background: var(--grey-725);
  }

  .select-empty {
    padding: 7px 15px;
    font-size: var(--font-size-m);
    color: var(--grey-300);
    font-style: italic;
  }

  /* Multiple selection */
  :host([multiple]) .select-value {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-4);
  }

  .select-chip {
    background: var(--grey-600);
    color: var(--white);
    border-radius: var(--radius-2);
    padding: 0 0.5em;
    font-size: var(--font-size-m);
    line-height: 1.4em;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-4);
    white-space: nowrap;
    max-width: 200px;
  }

  .select-chip-label {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .select-chip-remove {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: var(--grey-350);
    font-size: 0.5em;
    line-height: 1;
    transition: color 100ms;
  }

  .select-chip-remove:hover {
    color: var(--white);
  }

  /* Fill appearance */
  :host([appearance='fill']) .select-flex-wrap {
    position: relative;
  }

  :host([appearance='fill']) .select-flex-wrap::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--grey-875);
    mix-blend-mode: exclusion;
    pointer-events: none;
    border-top-left-radius: var(--radius-4);
    border-top-right-radius: var(--radius-4);
  }

  :host([appearance='fill']) .select-input {
    padding: var(--spacing-4) 10px;
    position: relative;
    z-index: 1;
  }

  :host([appearance='fill']) .select-label {
    left: 0;
  }

  /* swim-icon in clear and caret buttons */
  .select-clear swim-icon,
  .select-caret swim-icon {
    display: block;
    font-size: inherit;
  }
`;var Nn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,I=(e,t,i,n)=>{for(var o=n>1?void 0:n?Vn(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Nn(t,i,o),o};let k=class extends _{constructor(){super(),this.label="",this.placeholder="Select...",this.hint="",this.emptyPlaceholder="No options available",this.filterPlaceholder="Filter options...",this.options=[],this._value=[],this.name="",this.id=`swim-select-${Math.random().toString(36).substr(2,9)}`,this._disabled=!1,this._required=!1,this.appearance=xi.legacy,this.size=wi.sm,this._withMargin=!0,this._withHint=!0,this._filterable=!0,this._multiple=!1,this._allowClear=!0,this.requiredIndicator="*",this._open=!1,this._focused=!1,this._touched=!1,this._invalid=!1,this._filterQuery="",this._focusedIndex=-1,this._internals=this.attachInternals()}get value(){return this.multiple?this._value:this._value[0]??null}set value(e){const t=this._value;this.multiple?this._value=Array.isArray(e)?e:e?[e]:[]:this._value=e?[e]:[],this._internals.setFormValue(this.multiple?JSON.stringify(this._value):this._value[0]??""),this.requestUpdate("value",t),this._updateActiveState()}get disabled(){return this._disabled}set disabled(e){this._disabled=g(e)}get required(){return this._required}set required(e){this._required=g(e)}get marginless(){return!this._withMargin}set marginless(e){this._withMargin=!g(e)}get withHint(){return this._withHint}set withHint(e){this._withHint=g(e)}get filterable(){return this._filterable}set filterable(e){this._filterable=g(e)}get multiple(){return this._multiple}set multiple(e){this._multiple=g(e)}get allowClear(){return this._allowClear}set allowClear(e){this._allowClear=g(e)}connectedCallback(){super.connectedCallback(),this._updateActiveState()}disconnectedCallback(){super.disconnectedCallback(),this._removeClickOutsideListener()}updated(e){super.updated(e),e.has("value")&&(this._updateActiveState(),this._validate()),e.has("_open")&&(this._open?(this.setAttribute("open",""),this._addClickOutsideListener(),setTimeout(()=>{this.filterable&&this.filterInput&&this.filterInput.focus()},100)):(this.removeAttribute("open"),this._removeClickOutsideListener(),this._filterQuery="",this._focusedIndex=-1))}render(){const e=this._value.length>0,t=this._getFilteredOptions(),i=this.allowClear&&e&&!this.disabled;return l`
      <div class="select-wrap">
        <div class="select-flex-wrap">
          <div class="select-flex-wrap-inner">
            <div class="select-input-wrap">
              <div
                class="select-input"
                part="select"
                role="combobox"
                aria-expanded="${this._open}"
                aria-haspopup="listbox"
                aria-controls="${this.id}-listbox"
                tabindex="${this.disabled?-1:0}"
                @click="${this._handleInputClick}"
                @keydown="${this._handleKeyDown}"
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
              >
                <div class="select-value">${this._renderValue()}</div>
                <div class="select-controls">
                  ${i?l`
                        <button
                          type="button"
                          class="select-clear"
                          aria-label="Clear selection"
                          @click="${this._handleClear}"
                        >
                          <swim-icon font-icon="x"></swim-icon>
                        </button>
                      `:u}
                  <button
                    type="button"
                    class="select-caret"
                    aria-label="Toggle dropdown"
                    @click="${this._handleToggle}"
                  >
                    <swim-icon font-icon="chevron-bold-down"></swim-icon>
                  </button>
                </div>
              </div>
              <label class="select-label" for="${this.id}">
                ${this.label} ${this.required?l`<span>${this.requiredIndicator}</span>`:u}
              </label>
            </div>
          </div>
        </div>
        <div class="select-underline">
          <div class="underline-fill"></div>
        </div>
        <div class="select-hint ${this.withHint?"":"hidden"}">
          <slot name="hint">${this.hint}</slot>
        </div>

        ${this._open?l`
              <div class="select-dropdown" part="dropdown" role="listbox" id="${this.id}-listbox">
                ${this.filterable?l`
                      <div class="select-filter">
                        <input
                          type="text"
                          class="select-filter-input"
                          placeholder="${this.filterPlaceholder}"
                          .value="${this._filterQuery}"
                          @input="${this._handleFilterInput}"
                          @keydown="${this._handleFilterKeyDown}"
                        />
                      </div>
                    `:u}
                ${t.length>0?l`
                      <ul class="select-options">
                        ${Hn(t,n=>this._getOptionValue(n),(n,o)=>this._renderOption(n,o))}
                      </ul>
                    `:l` <div class="select-empty">${this.emptyPlaceholder}</div> `}
              </div>
            `:u}
      </div>
    `}_renderValue(){if(this._value.length===0)return l`<span class="select-placeholder">${this.placeholder}</span>`;if(this.multiple)return l`
        ${this._value.map(e=>{const t=this.options.find(i=>this._getOptionValue(i)===e);return this._renderChip(t||{name:e,value:e})})}
      `;{const e=this.options.find(t=>this._getOptionValue(t)===this._value[0]);return l`${(e==null?void 0:e.name)||this._value[0]}`}}_renderChip(e){return l`
      <div class="select-chip">
        <span class="select-chip-label">${e.name}</span>
        ${this.disabled?u:l`
              <button
                type="button"
                class="select-chip-remove"
                aria-label="Remove ${e.name}"
                @click="${t=>this._removeChip(t,e)}"
              >
                <span class="icon-x"></span>
              </button>
            `}
      </div>
    `}_renderOption(e,t){const i=this._getOptionValue(e),n=this._isSelected(i),o=t===this._focusedIndex;return l`
      <li
        class="select-option"
        role="option"
        ?selected="${n}"
        ?focused="${o}"
        ?disabled="${e.disabled}"
        aria-selected="${n}"
        @click="${()=>this._handleOptionClick(e)}"
        @mouseenter="${()=>this._focusedIndex=t}"
      >
        ${e.name}
      </li>
    `}_handleInputClick(e){this.disabled||this._toggleDropdown()}_handleToggle(e){e.stopPropagation(),this.disabled||this._toggleDropdown()}_handleClear(e){e.stopPropagation(),this.value=this.multiple?[]:null,this._dispatchChange(),this._validate()}_handleFocus(){this._focused=!0,this.setAttribute("focused","")}_handleBlur(){this._focused=!1,this.removeAttribute("focused"),this._touched||(this._touched=!0,this.setAttribute("touched","")),this._validate()}_handleKeyDown(e){switch(e.key){case"Enter":case" ":this._open||(e.preventDefault(),this._toggleDropdown());break;case"Escape":this._open&&(e.preventDefault(),this._closeDropdown());break;case"ArrowDown":e.preventDefault(),this._open?this._moveFocus(1):this._openDropdown();break;case"ArrowUp":e.preventDefault(),this._open&&this._moveFocus(-1);break}}_handleFilterInput(e){const t=e.target;this._filterQuery=t.value,this._focusedIndex=0}_handleFilterKeyDown(e){var t;switch(e.key){case"ArrowDown":e.preventDefault(),this._moveFocus(1);break;case"ArrowUp":e.preventDefault(),this._moveFocus(-1);break;case"Enter":e.preventDefault();const i=this._getFilteredOptions();i[this._focusedIndex]&&this._handleOptionClick(i[this._focusedIndex]);break;case"Escape":e.preventDefault(),this._closeDropdown(),(t=this.selectInput)==null||t.focus();break}}_handleOptionClick(e){if(e.disabled)return;const t=this._getOptionValue(e);if(this.multiple){const i=[...this._value],n=i.indexOf(t);n>-1?i.splice(n,1):i.push(t),this.value=i}else this.value=t,this._closeDropdown();this._dispatchChange(),this._validate()}_removeChip(e,t){e.stopPropagation();const i=this._getOptionValue(t),n=this._value.filter(o=>o!==i);this.value=n,this._dispatchChange(),this._validate()}_toggleDropdown(){this._open?this._closeDropdown():this._openDropdown()}_openDropdown(){this.disabled||(this._open=!0,this._focusedIndex=0,this.dispatchEvent(new Event("open",{bubbles:!0,composed:!0})))}_closeDropdown(){this._open=!1,this.dispatchEvent(new Event("close",{bubbles:!0,composed:!0}))}_moveFocus(e){const i=this._getFilteredOptions().length-1;let n=this._focusedIndex+e;n<0?n=i:n>i&&(n=0),this._focusedIndex=n}_getFilteredOptions(){if(!this._filterQuery)return this.options;const e=this._filterQuery.toLowerCase();return this.options.filter(t=>t.name.toLowerCase().includes(e))}_getOptionValue(e){return e.value!==void 0?e.value:e.name}_isSelected(e){return this._value.includes(e)}_dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}_validate(){let e=!0;return this.required&&this._value.length===0&&(e=!1),this._invalid=!e,this._invalid?(this.setAttribute("invalid",""),this._internals.setValidity({valueMissing:!0},"Please select an option")):(this.removeAttribute("invalid"),this._internals.setValidity({})),e}_updateActiveState(){const e=this._value.length>0,t=!!this.placeholder;this._focused||e||this._open?this.setAttribute("active",""):this.removeAttribute("active"),t?this.setAttribute("has-placeholder",""):this.removeAttribute("has-placeholder"),this.label?this.removeAttribute("no-label"):this.setAttribute("no-label","")}_addClickOutsideListener(){this._clickOutsideListener=e=>{this.contains(e.target)||this._closeDropdown()},setTimeout(()=>{document.addEventListener("click",this._clickOutsideListener)},0)}_removeClickOutsideListener(){this._clickOutsideListener&&(document.removeEventListener("click",this._clickOutsideListener),this._clickOutsideListener=void 0)}formResetCallback(){this.value=this.multiple?[]:null,this._touched=!1,this.removeAttribute("touched")}formDisabledCallback(e){this.disabled=e}};k.styles=[$,Rn];k.formAssociated=!0;I([V(".select-input")],k.prototype,"selectInput",2);I([V(".select-filter-input")],k.prototype,"filterInput",2);I([a({type:String})],k.prototype,"label",2);I([a({type:String})],k.prototype,"placeholder",2);I([a({type:String})],k.prototype,"hint",2);I([a({type:String,attribute:"empty-placeholder"})],k.prototype,"emptyPlaceholder",2);I([a({type:String,attribute:"filter-placeholder"})],k.prototype,"filterPlaceholder",2);I([a({type:Array})],k.prototype,"options",2);I([a()],k.prototype,"value",1);I([a({type:String})],k.prototype,"name",2);I([a({type:String})],k.prototype,"id",2);I([a({type:Boolean,reflect:!0})],k.prototype,"disabled",1);I([a({type:Boolean,reflect:!0})],k.prototype,"required",1);I([a({type:String,reflect:!0})],k.prototype,"appearance",2);I([a({type:String,reflect:!0})],k.prototype,"size",2);I([a({type:Boolean,reflect:!0,attribute:"marginless"})],k.prototype,"marginless",1);I([a({type:Boolean})],k.prototype,"withHint",1);I([a({type:Boolean})],k.prototype,"filterable",1);I([a({type:Boolean,reflect:!0})],k.prototype,"multiple",1);I([a({type:Boolean,attribute:"allow-clear"})],k.prototype,"allowClear",1);I([a({type:String,attribute:"required-indicator"})],k.prototype,"requiredIndicator",2);I([w()],k.prototype,"_open",2);I([w()],k.prototype,"_focused",2);I([w()],k.prototype,"_touched",2);I([w()],k.prototype,"_invalid",2);I([w()],k.prototype,"_filterQuery",2);I([w()],k.prototype,"_focusedIndex",2);k=I([y("swim-select")],k);const qn=f`
  :host {
    display: block;
  }

  .swim-tab__panel {
    display: block;
  }

  .swim-tab__panel[hidden] {
    display: none;
  }
`;var jn=Object.defineProperty,Un=Object.getOwnPropertyDescriptor,Ne=(e,t,i,n)=>{for(var o=n>1?void 0:n?Un(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&jn(t,i,o),o};let Wn=0,de=class extends _{constructor(){super(...arguments),this._instanceId=++Wn,this._generatedPanelId=`tab-panel-${this._instanceId}`,this._generatedTabId=`tab-${this._instanceId}`,this.tabId=this._generatedTabId,this.label="",this._active=!1,this._disabled=!1}get id(){return this._id??this._generatedPanelId}set id(e){this._id=e||this._generatedPanelId}get title(){return this.label}set title(e){this.label=e}get active(){return this._active}set active(e){const t=g(e);if(this._active!==t){const i=this._active;this._active=t,this.requestUpdate("active",i),this.dispatchEvent(new CustomEvent("swim-tab-active-change",{bubbles:!0,composed:!0}))}}get disabled(){return this._disabled}set disabled(e){this._disabled=g(e)}connectedCallback(){super.connectedCallback(),this.hasAttribute("tab-id")||(this.tabId=this._generatedTabId)}render(){return l`
      <div
        class="swim-tab__panel"
        role="tabpanel"
        id="${this.id}"
        aria-labelledby="${this.tabId}"
        ?hidden="${!this.active}"
      >
        <slot></slot>
      </div>
    `}};de.styles=[$,qn];Ne([a({type:String})],de.prototype,"id",1);Ne([a({type:String,attribute:"tab-id"})],de.prototype,"tabId",2);Ne([a({type:String})],de.prototype,"label",2);Ne([a({type:String})],de.prototype,"title",1);Ne([a({type:Boolean,reflect:!0})],de.prototype,"active",1);Ne([a({type:Boolean,reflect:!0})],de.prototype,"disabled",1);de=Ne([y("swim-tab")],de);const Gn=f`
  :host {
    display: block;
    margin-bottom: 2em;
  }

  .swim-tabs {
    display: block;
  }

  /* Tab list – horizontal by default */
  .swim-tabs__list {
    display: block;
    border-bottom: solid 2px var(--grey-700);
  }

  .swim-tabs__tab {
    display: inline-block;
    border: none;
    color: var(--grey-250);
    background: transparent;
    box-shadow: none;
    font-size: var(--font-size-m);
    box-sizing: border-box;
    margin: 0;
    padding: 0.35em 0.75em;
    position: relative;
    text-align: center;
    user-select: none;
    font: inherit;
    font-weight: var(--font-weight-bold);
    bottom: -1px;
    cursor: pointer;
  }

  .swim-tabs__tab::after {
    content: '';
    height: 2px;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -1px;
    transition: transform 250ms ease;
    transform: scale(0);
    background: var(--blue-500);
    color: var(--white);
  }

  .swim-tabs__tab:not([disabled]):hover {
    border: none;
    color: var(--white);
    background: transparent;
    opacity: 1;
  }

  .swim-tabs__tab:not([disabled]):hover::after,
  .swim-tabs__tab--active::after {
    transform: scale(1);
  }

  .swim-tabs__tab--active,
  .swim-tabs__tab--active:focus,
  .swim-tabs__tab--active:hover {
    color: var(--white);
    border-width: 0;
  }

  .swim-tabs__tab:focus-visible {
    outline: 2px solid var(--blue-200);
    border-radius: var(--radius-2);
    outline-offset: 1px;
  }

  .swim-tabs__tab--disabled {
    pointer-events: none;
    opacity: 0.6;
  }

  /* Tab content area */
  .swim-tabs__content {
    padding: var(--spacing-10);
  }

  /* Light appearance */
  :host([appearance='light']) .swim-tabs {
    border: 2px solid var(--grey-700);
    box-shadow: var(--shadow-2);
  }

  :host([appearance='light']) .swim-tabs__list {
    background-color: var(--grey-700);
    border-bottom: 2px solid var(--grey-700);
    font-size: 13px;
    line-height: 15px;
    font-weight: var(--font-weight-semibold);
    margin-left: -2px;
  }

  :host([appearance='light']) .swim-tabs__tab {
    height: 36px;
    padding: var(--spacing-8) 1.25em;
  }

  :host([appearance='light']) .swim-tabs__content {
    background-color: var(--grey-850);
  }

  /* Vertical layout */
  :host([vertical]) .swim-tabs {
    display: flex;
  }

  :host([vertical]) .swim-tabs__list {
    flex: 0 0 160px;
    border: none;
  }

  :host([vertical]) .swim-tabs__tab {
    height: 53px;
    width: 100%;
    text-align: left;
    font-size: 13px;
    line-height: 45px;
    border: none !important;
    border-bottom: 1px solid var(--grey-700) !important;
    padding-left: 19px;
    font-weight: var(--font-weight-semibold);
  }

  :host([vertical]) .swim-tabs__tab::after {
    display: none;
  }

  :host([vertical]) .swim-tabs__content {
    flex: 1 1 100%;
  }

  /* Vertical + light */
  :host([vertical][appearance='light']) .swim-tabs__list {
    background-color: var(--grey-750);
    border-right: 2px solid var(--grey-700);
    border-left: 2px solid var(--grey-700);
  }

  :host([vertical][appearance='light']) .swim-tabs__tab {
    line-height: 38px;
  }

  :host([vertical][appearance='light']) .swim-tabs__tab:last-child {
    border: none !important;
    border-bottom: none !important;
  }

  :host([vertical][appearance='light']) .swim-tabs__content {
    background-color: var(--grey-750);
  }
`;var Lo=(e=>(e.Legacy="legacy",e.Light="light",e))(Lo||{}),Kn=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,wt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Xn(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Kn(t,i,o),o};let Fe=class extends _{constructor(){super(...arguments),this._vertical=!1,this.appearance=Lo.Legacy,this._tabs=[],this._slotChangeBound=()=>this._syncTabs(),this._tabActiveChangeBound=()=>this.requestUpdate()}get vertical(){return this._vertical}set vertical(e){this._vertical=g(e)}connectedCallback(){super.connectedCallback()}firstUpdated(){this._syncTabs(),this._listenToTabChanges();const e=this.slotEl;e&&e.addEventListener("slotchange",this._slotChangeBound)}disconnectedCallback(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");e&&e.removeEventListener("slotchange",this._slotChangeBound),this._tabs.forEach(i=>i.removeEventListener("swim-tab-active-change",this._tabActiveChangeBound)),super.disconnectedCallback()}_listenToTabChanges(){this._tabs.forEach(e=>e.addEventListener("swim-tab-active-change",this._tabActiveChangeBound))}_syncTabs(){var o;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("slot"),i=((e==null?void 0:e.assignedElements({flatten:!0}))??[]).filter(s=>s instanceof de);this._tabs.forEach(s=>s.removeEventListener("swim-tab-active-change",this._tabActiveChangeBound)),this._tabs=i,this._listenToTabChanges();const n=i.filter(s=>s.active);n.length>1?console.error('swim-tabs: Multiple active tabs set "active".'):n.length===0&&i.length>0&&(i[0].active=!0)}_tabClicked(e){e.disabled||(this._tabs.forEach(t=>t.active=t===e),e.active=!0,this.dispatchEvent(new CustomEvent("select-tab",{detail:{tab:e},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("select",{detail:{tab:e},bubbles:!0,composed:!0})))}_move(e){const t=this._tabs,i=t.findIndex(n=>n.active);for(let n=i+e;n>=0&&n<t.length;n+=e){const o=t[n];if(o&&!o.disabled){this._tabClicked(o);return}}}prev(){this._move(-1)}next(){this._move(1)}_handleKeyDown(e){const t=this.vertical,i=e.key;t&&(i==="ArrowUp"||i==="ArrowDown")?(e.preventDefault(),this._move(i==="ArrowDown"?1:-1)):!t&&(i==="ArrowLeft"||i==="ArrowRight")&&(e.preventDefault(),this._move(i==="ArrowRight"?1:-1))}render(){const e=this._tabs;return l`
      <section class="swim-tabs">
        <div class="swim-tabs__list" part="tablist" role="tablist" @keydown="${this._handleKeyDown}">
          ${e.map(t=>l`
              <button
                type="button"
                role="tab"
                id="${t.tabId}"
                aria-controls="${t.id}"
                aria-selected="${t.active}"
                class="swim-tabs__tab ${t.active?"swim-tabs__tab--active":""} ${t.disabled?"swim-tabs__tab--disabled":""}"
                ?disabled="${t.disabled}"
                @click="${()=>this._tabClicked(t)}"
              >
                ${t.label}
              </button>
            `)}
        </div>
        <div class="swim-tabs__content" part="tab-content">
          <slot></slot>
        </div>
      </section>
    `}};Fe.styles=[$,Gn];wt([V("slot")],Fe.prototype,"slotEl",2);wt([a({type:Boolean,reflect:!0})],Fe.prototype,"vertical",1);wt([a({type:String,reflect:!0})],Fe.prototype,"appearance",2);wt([w()],Fe.prototype,"_tabs",2);Fe=wt([y("swim-tabs")],Fe);const Yn=f`
  :host {
    display: inline-block;
    cursor: pointer;
  }

  :host([disabled]) {
    pointer-events: none;
    cursor: default;
  }

  .swim-button-toggle {
    position: relative;
    z-index: 3;
    padding: 1px 10px;
    border-radius: var(--radius-4);
    color: var(--grey-350);
    white-space: nowrap;
    transition: background-color 0.25s cubic-bezier(0.35, 0, 0.25, 1), font-weight 0.25s ease-in;
    font: inherit;
    font-size: var(--font-size-m);
    cursor: inherit;
    border: none;
    background: transparent;
    width: 100%;
    text-align: inherit;
  }

  .swim-button-toggle.swim-button-toggle--checked {
    font-weight: var(--font-weight-semibold);
    color: var(--grey-050);
    background-color: var(--grey-700);
  }

  :host(:not([disabled])) .swim-button-toggle:hover:not(.swim-button-toggle--checked) {
    background: rgba(59, 68, 87, 0.1);
  }

  .swim-button-toggle:focus {
    outline: none;
  }

  .swim-button-toggle:focus-visible {
    outline: 2px solid var(--grey-500);
  }

  .swim-button-toggle__content {
    display: block;
  }
`;var Qn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,Ve=(e,t,i,n)=>{for(var o=n>1?void 0:n?Zn(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Qn(t,i,o),o};let Jn=0,we=class extends _{constructor(){super(...arguments),this._uniqueId=`swim-button-toggle-${++Jn}`,this.name=this._uniqueId,this.value=!1,this._checked=!1,this._disabled=!1}get id(){return this._id??this._uniqueId}set id(e){this._id=e}get checked(){return this._checked}set checked(e){const t=g(e);this._checked!==t&&(this._checked=t,this.requestUpdate("checked"))}get disabled(){return this._disabled}set disabled(e){this._disabled=g(e)}render(){return l`
      <button
        type="button"
        class="swim-button-toggle ${this._checked?"swim-button-toggle--checked":""}"
        id="${this.id}"
        ?disabled="${this.disabled}"
        aria-pressed="${this._checked}"
        aria-disabled="${this.disabled?"true":"false"}"
        @click="${this._handleClick}"
      >
        <span class="swim-button-toggle__content">
          <slot></slot>
        </span>
      </button>
    `}_handleClick(e){e.preventDefault(),e.stopPropagation(),!(this.disabled||this.checked)&&(this._checked=!0,this.dispatchEvent(new CustomEvent("value-change",{detail:this.value,bubbles:!0,composed:!0})))}};we.styles=[$,Yn];Ve([a({type:String})],we.prototype,"id",1);Ve([a({type:String})],we.prototype,"name",2);Ve([a()],we.prototype,"value",2);Ve([a({type:Boolean,reflect:!0})],we.prototype,"checked",1);Ve([w()],we.prototype,"_checked",2);Ve([a({type:Boolean,reflect:!0})],we.prototype,"disabled",1);we=Ve([y("swim-button-toggle")],we);const es=f`
  :host {
    display: inline-flex;
    transition: all 0.25s ease;
  }

  :host([role='group']) {
    /* Expose group semantics */
  }

  .swim-button-toggle-group__container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .swim-button-toggle-group__container__label {
    font-weight: var(--font-weight-semibold);
    font-size: 12px;
    line-height: 12px;
    color: var(--grey-350);
  }

  .swim-button-toggle-group__container__toggle-buttons {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid var(--grey-600);
    border-radius: var(--radius-4);
    padding: var(--spacing-2);
    gap: var(--spacing-2);
  }

  .swim-button-toggle-group__container__toggle-buttons__animation-holder {
    position: absolute;
    top: 0;
    margin: var(--spacing-2);
    height: calc(100% - 4px);
    border-radius: var(--radius-2);
    background-color: var(--grey-700);
    transition: all 0.25s cubic-bezier(0.35, 0, 0.25, 1);
    pointer-events: none;
  }

  :host([disabled]) .swim-button-toggle-group__container__toggle-buttons__animation-holder {
    display: none;
  }
`;var ts=Object.defineProperty,is=Object.getOwnPropertyDescriptor,Be=(e,t,i,n)=>{for(var o=n>1?void 0:n?is(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&ts(t,i,o),o};let os=0,oe=class extends _{constructor(){var e;super(),this._uniqueId=`swim-button-toggle-group-${++os}`,this._animationHolderLeft=0,this._animationHolderWidth=0,this.label="",this._value=void 0,this._disabled=!1,this._slotChangeBound=()=>this._onSlotChange(),this._slotForCleanup=null,this._internals=((e=this.attachInternals)==null?void 0:e.call(this))??{},this.setAttribute("role","group"),this._boundValueChange=this._onValueChangeEvent.bind(this)}get id(){return this._id??this._uniqueId}set id(e){this._id=e}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._internals.setFormValue(e!=null?String(e):""),this._syncSelection())}get disabled(){return this._disabled}set disabled(e){this._disabled=g(e),this._syncDisabled()}connectedCallback(){super.connectedCallback(),this.addEventListener("value-change",this._boundValueChange),this._internals.setFormValue&&this._internals.setFormValue(this._value!=null?String(this._value):"")}disconnectedCallback(){this._slotForCleanup&&(this._slotForCleanup.removeEventListener("slotchange",this._slotChangeBound),this._slotForCleanup=null),this.removeEventListener("value-change",this._boundValueChange),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e);const t=this._slot;t&&(this._slotForCleanup=t,t.addEventListener("slotchange",this._slotChangeBound)),this._onSlotChange()}updated(e){super.updated(e),(e.has("value")||e.has("disabled"))&&(this._syncSelection(),this._syncDisabled())}_getToggles(){const e=this._slot;return e?e.assignedElements({flatten:!0}).filter(i=>i instanceof HTMLElement&&i.tagName==="SWIM-BUTTON-TOGGLE"):[]}_onSlotChange(){this._syncSelection(),this._syncDisabled(),requestAnimationFrame(()=>this._calcAnimationDimensions())}_syncSelection(){const e=this._getToggles(),t=this._value;e.forEach(i=>{i.checked=i.value!==void 0&&i.value===t}),requestAnimationFrame(()=>this._calcAnimationDimensions())}_syncDisabled(){this._getToggles().forEach(t=>{t.disabled=this._disabled})}_calcAnimationDimensions(){const e=this._getToggles();if(!e.length||this._disabled){this._animationHolderLeft=0,this._animationHolderWidth=0;return}const t=e.findIndex(r=>r.value!==void 0&&r.value===this._value);if(t<0){this._animationHolderLeft=0,this._animationHolderWidth=0;return}let i=0;for(let r=0;r<t;r++)i+=e[r].offsetWidth??0;i+=t*2+2;const o=e[t],s=Math.max(0,((o==null?void 0:o.offsetWidth)??0)-4);this._animationHolderLeft=i,this._animationHolderWidth=s}_onValueChangeEvent(e){const i=e.detail;this._value!==i&&(this._value=i,this._internals.setFormValue(i!=null?String(i):""),this._syncSelection(),this.dispatchEvent(new CustomEvent("value-change",{detail:i,bubbles:!0,composed:!0})))}render(){return l`
      <div class="swim-button-toggle-group__container" id="${this.id}">
        ${this.label?l`<label class="swim-button-toggle-group__container__label" for="${this.id}-toggles"
              >${this.label}</label
            >`:""}
        <div
          class="swim-button-toggle-group__container__toggle-buttons"
          id="${this.id}-toggles"
          role="group"
          aria-label="${this.label||"Toggle group"}"
        >
          <div
            class="swim-button-toggle-group__container__toggle-buttons__animation-holder"
            style="left: ${this._animationHolderLeft}px; width: ${this._animationHolderWidth}px;"
          ></div>
          <slot></slot>
        </div>
      </div>
    `}};oe.styles=[$,es];oe.formAssociated=!0;Be([V("slot")],oe.prototype,"_slot",2);Be([w()],oe.prototype,"_animationHolderLeft",2);Be([w()],oe.prototype,"_animationHolderWidth",2);Be([a({type:String})],oe.prototype,"id",1);Be([a({type:String})],oe.prototype,"label",2);Be([a()],oe.prototype,"value",1);Be([a({type:Boolean,reflect:!0})],oe.prototype,"disabled",1);oe=Be([y("swim-button-toggle-group")],oe);const qt=4,ai=3,lo=25,ns=30,ss=15,co=27,rs=f`
  @keyframes cardSlideIn {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :host {
    display: flex;
    background: var(--grey-800);
    border-radius: var(--radius-6);
    box-sizing: border-box;
  }

  :host([disabled]) {
    cursor: default;
    pointer-events: none;
  }

  :host([appearance='flat']) {
    background: none;
    box-shadow: none;
  }

  /* Status dot */
  .swim-card__status {
    display: block;
    background-color: var(--grey-550);
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .swim-card__status--success {
    background-color: var(--green-500);
  }

  .swim-card__status--error {
    background-color: var(--color-error);
  }

  .swim-card__accent {
    display: block;
    background: linear-gradient(180deg, var(--grey-100) 0%, var(--grey-200) 100%);
  }

  .swim-card__dot {
    display: inline-block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: var(--grey-400);
    margin: 3px var(--spacing-4);
  }

  /* Outline (selected or error) */
  .swim-card__outline {
    pointer-events: none;
    position: absolute;
    top: -5px;
    right: -5px;
    left: -5px;
    bottom: -5px;
    border: ${ai}px solid var(--blue-400);
    border-radius: var(--radius-6);
  }

  .swim-card__outline--error {
    border-color: var(--color-error);
  }

  .swim-card__outline-text {
    pointer-events: none;
    color: var(--blue-400);
    white-space: nowrap;
    position: absolute;
    top: -5px;
    right: -5px;
    left: -5px;
    bottom: -5px;
    border: ${ai}px solid var(--blue-400);
    border-bottom: 0;
    border-radius: var(--radius-6);
  }

  .swim-card__outline-text--error {
    color: var(--color-error);
    border-color: var(--color-error);
  }

  .swim-card__outline-text-inner {
    font-size: var(--font-size-s);
    width: 100%;
    text-align: center;
    position: absolute;
    display: flex;
    align-items: center;
    bottom: -8px;
    pointer-events: auto;
    cursor: pointer;
  }

  .swim-card__outline-text-inner::before,
  .swim-card__outline-text-inner::after {
    content: '';
    height: ${ai}px;
    background: var(--blue-400);
  }

  .swim-card__outline-text-inner::before {
    margin-right: var(--spacing-16);
    border-radius: var(--radius-0) var(--radius-0) var(--radius-0) var(--radius-2);
    flex: 1;
  }

  .swim-card__outline-text-inner::after {
    margin-left: var(--spacing-16);
    border-radius: var(--radius-0) var(--radius-0) var(--radius-2) var(--radius-0);
    width: var(--spacing-20);
  }

  .swim-card__outline-text--error .swim-card__outline-text-inner::before,
  .swim-card__outline-text--error .swim-card__outline-text-inner::after {
    background: var(--color-error);
  }

  /* Select checkbox */
  .swim-card__select {
    display: flex;
    align-items: center;
  }

  .swim-card__select input[type='checkbox'] {
    width: 1rem;
    height: 1rem;
    margin: 0;
    cursor: pointer;
    accent-color: var(--blue-400);
  }
`,as=f`
  :host([orientation='horizontal']) {
    position: relative;
    width: 100%;
    min-width: 500px;
    min-height: 80px;
    height: 80px;
    transition: all 0.2s ease-in-out;
    animation: 0.2s ease-in-out cardSlideIn;
  }

  :host([orientation='horizontal']) .swim-card__status {
    position: absolute;
    left: 10px;
    top: 10px;
  }

  :host([orientation='horizontal']) .swim-card__select {
    margin-left: ${lo}px;
  }

  :host([orientation='horizontal']) .swim-card__accent {
    position: absolute;
    width: ${qt}px;
    min-width: ${qt}px;
    right: 0;
    height: 100%;
    border-radius: var(--radius-0) var(--radius-2) var(--radius-2) var(--radius-0);
  }

  :host([orientation='horizontal']) ::slotted(swim-card-header) {
    display: flex;
    align-items: center;
    padding: var(--spacing-0) ${lo}px;
    flex-grow: 1;
    overflow: hidden;
    cursor: pointer;
  }

  :host([orientation='horizontal']) ::slotted(swim-card-header.no-click) {
    cursor: default;
  }

  :host([orientation='horizontal']) ::slotted(swim-card-section) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: var(--spacing-0) ${ns}px;
  }

  :host([orientation='horizontal']) .swim-card__outline,
  :host([orientation='horizontal']) .swim-card__outline-text {
    top: -5px;
    right: -5px;
    left: -5px;
    bottom: -5px;
  }
`,ls=f`
  :host([orientation='vertical']) {
    position: relative;
    flex-direction: column;
    min-width: 347px;
    max-width: 850px;
    height: 418px;
    color: var(--grey-350);
    overflow: hidden;
  }

  :host([orientation='vertical']) .swim-card__status {
    margin: ${ss}px auto var(--spacing-0) auto;
  }

  :host([orientation='vertical']) .swim-card__accent {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${qt}px;
    border-radius: var(--radius-0) var(--radius-0) var(--radius-6) var(--radius-6);
  }

  :host([orientation='vertical']) ::slotted(swim-card-header) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex-shrink: 0;
    border-bottom: 2px solid var(--grey-700);
  }

  :host([orientation='vertical']) ::slotted(swim-card-body) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: var(--spacing-20) var(--spacing-0);
    padding-left: ${co}px;
    padding-right: ${co}px;
  }

  :host([orientation='vertical']) ::slotted(swim-card-footer) {
    position: relative;
    width: 100%;
    flex-shrink: 0;
    border-bottom: 2px solid var(--grey-700);
    height: 50px;
    padding: var(--spacing-20) var(--spacing-0);
    margin-bottom: ${qt}px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,cs=[$,rs,as,ls];var ft=(e=>(e.Success="success",e.Error="error",e.Disabled="disabled",e))(ft||{}),Oo=(e=>(e.Horizontal="horizontal",e.Vertical="vertical",e))(Oo||{}),Do=(e=>(e.Normal="normal",e.Flat="flat",e))(Do||{}),ds=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,se=(e,t,i,n)=>{for(var o=n>1?void 0:n?hs(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&ds(t,i,o),o};let G=class extends _{constructor(){super(...arguments),this._disabled=!1,this.orientation=Oo.Horizontal,this.statusTooltip="",this._selectable=!1,this._selected=!1,this._error=!1,this.outlineText="",this.appearance=Do.Normal,this._hideAccent=!1}get disabled(){return this._disabled}set disabled(e){this._disabled=g(e)}get selectable(){return this._selectable}set selectable(e){this._selectable=g(e)}get selected(){return this._selected}set selected(e){this._selected=g(e)}get error(){return this._error}set error(e){this._error=g(e)}get hideAccent(){return this._hideAccent}set hideAccent(e){this._hideAccent=g(e)}_onOutlineClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("outline-click",{bubbles:!0,composed:!0}))}_onSelectChange(e){e.stopPropagation();const t=e.target;this.selected=t.checked,this.dispatchEvent(new CustomEvent("select",{detail:this.selected,bubbles:!0,composed:!0}))}_onCheckboxClick(e){e.stopPropagation()}render(){const e=this.selected&&!this.outlineText&&!this.error,t=this.error&&!this.outlineText,i=!!this.outlineText,n=!!this.status,o=this.status===ft.Success?"swim-card__status--success":this.status===ft.Error?"swim-card__status--error":"";return l`
      ${e?l`<div class="swim-card__outline" aria-hidden="true"></div>`:u}
      ${t?l`<div class="swim-card__outline swim-card__outline--error" aria-hidden="true"></div>`:u}
      ${i?l`
            <div
              class="swim-card__outline-text ${this.error?"swim-card__outline-text--error":""}"
              aria-hidden="true"
            >
              <div
                part="outline-text"
                class="swim-card__outline-text-inner"
                role="button"
                tabindex="${this.disabled?-1:0}"
                aria-label="${this.outlineText}"
                @click="${this._onOutlineClick}"
                @keydown="${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this._onOutlineClick(s))}}"
              >
                ${this.outlineText}
              </div>
            </div>
          `:u}
      ${n?l`
            <div
              class="swim-card__status ${o}"
              title="${this.statusTooltip}"
              role="status"
              aria-label="${this.statusTooltip||this.status||""}"
            ></div>
          `:u}
      ${this.selectable?l`
            <div class="swim-card__select" @click="${this._onCheckboxClick}">
              <input
                type="checkbox"
                .checked="${this.selected}"
                ?disabled="${this.disabled}"
                aria-label="Select card"
                @change="${this._onSelectChange}"
              />
            </div>
          `:u}

      <slot></slot>

      ${this.hideAccent?u:l`<div class="swim-card__accent" aria-hidden="true"></div>`}
    `}};G.styles=cs;se([a({type:Boolean,reflect:!0})],G.prototype,"disabled",1);se([a({type:String,reflect:!0})],G.prototype,"orientation",2);se([a({type:String,reflect:!0})],G.prototype,"status",2);se([a({type:String,attribute:"status-tooltip"})],G.prototype,"statusTooltip",2);se([a({type:Boolean,reflect:!0})],G.prototype,"selectable",1);se([a({type:Boolean,reflect:!0})],G.prototype,"selected",1);se([a({type:Boolean,reflect:!0})],G.prototype,"error",1);se([a({type:String,attribute:"outline-text"})],G.prototype,"outlineText",2);se([a({type:String,reflect:!0})],G.prototype,"appearance",2);se([a({type:Boolean,attribute:"hide-accent"})],G.prototype,"hideAccent",1);G=se([y("swim-card")],G);const ho=25,us=f`
  :host {
    display: flex;
    align-items: center;
    padding: var(--spacing-0) ${ho}px;
    flex-grow: 1;
    overflow: hidden;
    cursor: pointer;
    box-sizing: border-box;
  }

  :host(.no-click) {
    cursor: default;
  }

  :host([orientation='vertical']) {
    flex-direction: column;
    padding: var(--spacing-0);
    border-bottom: 2px solid var(--grey-700);
    width: 100%;
    box-sizing: border-box;
  }

  :host([orientation='vertical']) ::slotted(swim-card-avatar) {
    margin: 15px var(--spacing-0) var(--spacing-20) var(--spacing-0);
    flex-shrink: 0;
  }

  .swim-card-header__title-group {
    margin-left: ${ho}px;
    display: flex;
    flex-direction: column;
    width: calc(100% - 79px);
  }

  :host([orientation='vertical']) .swim-card-header__title-group {
    margin-left: 0;
    width: 100%;
    padding: 0 var(--spacing-16);
    text-align: center;
  }

  :host([orientation='vertical']) ::slotted([slot='title']) {
    text-align: center;
  }

  :host([orientation='vertical']) ::slotted([slot='subtitle']) {
    text-align: center;
  }

  .swim-card-header__tag,
  .swim-card-header__title,
  .swim-card-header__subtitle {
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  ::slotted([slot='tag']) {
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-xxs);
    line-height: 12px;
  }

  ::slotted([slot='title']) {
    font-weight: var(--font-weight-semibold);
    font-size: 22px;
    color: var(--grey-050);
  }

  ::slotted([slot='subtitle']) {
    display: inline-block;
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-s);
    color: var(--grey-300);
  }

  .swim-card-header__label {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-xs);
    border-bottom: 0;
    white-space: nowrap;
    width: 100%;
    text-align: center;
    position: absolute;
    display: flex;
    align-items: center;
    bottom: -15px;
    left: 0;
  }

  .swim-card-header__label::before,
  .swim-card-header__label::after {
    content: '';
    height: 2px;
    background: var(--grey-700);
    width: 100%;
  }

  .swim-card-header__label::before {
    margin-right: var(--spacing-20);
  }

  .swim-card-header__label::after {
    margin-left: var(--spacing-20);
  }
`,ps=[$,us];var gs=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,yi=(e,t,i,n)=>{for(var o=n>1?void 0:n?bs(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&gs(t,i,o),o};let _t=class extends _{constructor(){super(...arguments),this.label="",this.orientation="horizontal"}render(){return l`
      <slot name="avatar"></slot>
      <div class="swim-card-header__title-group">
        <slot></slot>
        <slot name="tag"></slot>
        <slot name="title"></slot>
        <slot name="subtitle"></slot>
      </div>
      ${this.label?l`<div class="swim-card-header__label">${this.label}</div>`:u}
    `}};_t.styles=ps;yi([a({type:String})],_t.prototype,"label",2);yi([a({type:String,reflect:!0})],_t.prototype,"orientation",2);_t=yi([y("swim-card-header")],_t);const ms=4,fs=f`
  :host {
    position: relative;
    border-bottom: 2px solid var(--grey-700);
    height: 50px;
    padding: var(--spacing-20) var(--spacing-0);
    margin-bottom: ${ms}px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  .swim-card-footer__label {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-xs);
    border-bottom: 0;
    white-space: nowrap;
    width: 100%;
    text-align: center;
    position: absolute;
    display: flex;
    align-items: center;
    top: -15px;
    left: 0;
  }

  .swim-card-footer__label::before,
  .swim-card-footer__label::after {
    content: '';
    height: 2px;
    background: var(--grey-700);
    width: 100%;
  }

  .swim-card-footer__label::before {
    margin-right: var(--spacing-20);
  }

  .swim-card-footer__label::after {
    margin-left: var(--spacing-20);
  }
`,_s=[$,fs];var vs=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,Fo=(e,t,i,n)=>{for(var o=n>1?void 0:n?xs(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&vs(t,i,o),o};let jt=class extends _{constructor(){super(...arguments),this.label=""}render(){return l`
      ${this.label?l`<div class="swim-card-footer__label">${this.label}</div>`:u}
      <slot></slot>
    `}};jt.styles=_s;Fo([a({type:String})],jt.prototype,"label",2);jt=Fo([y("swim-card-footer")],jt);const uo=3,ws=f`
  :host {
    width: 54px;
    height: 54px;
    min-width: 54px;
    min-height: 54px;
    display: inline-block;
    box-sizing: border-box;
  }

  .swim-card-avatar__img:not(.swim-card-avatar__img--no-bg) {
    background-color: var(--white);
  }

  .swim-card-avatar__avatar {
    border: 2px solid var(--grey-100);
    border-radius: 100%;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    display: flex;
    box-sizing: border-box;
  }

  .swim-card-avatar__inner {
    display: flex;
    height: 100%;
    width: 100%;
    border: ${uo}px solid transparent;
    border-radius: 100%;
    overflow: hidden;
    position: relative;
  }

  .swim-card-avatar__status {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    padding: var(--spacing-4);
    border-radius: 50%;
    border: ${uo}px solid var(--grey-750);
    background-color: var(--white);
    z-index: 1;
  }

  .swim-card-avatar__status--success {
    background-color: var(--green-500);
  }

  .swim-card-avatar__status--error {
    background-color: var(--color-error);
  }

  .swim-card-avatar__avatar.has-status .swim-card-avatar__status {
    box-shadow: none;
  }

  .swim-card-avatar__img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
  }

  .swim-card-avatar__img--no-bg {
    background-color: transparent;
  }

  .swim-card-avatar__content {
    margin: auto;
    font-size: var(--font-size-m);
    color: var(--grey-100);
    font-weight: var(--font-weight-bold);
  }
`,ys=[$,ws];var $s=Object.defineProperty,ks=Object.getOwnPropertyDescriptor,Yt=(e,t,i,n)=>{for(var o=n>1?void 0:n?ks(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&$s(t,i,o),o};let Je=class extends _{constructor(){super(...arguments),this.src="",this.removeImageBackground=!1}render(){const e=!!this.status,t=this.status===ft.Success?"swim-card-avatar__status--success":this.status===ft.Error?"swim-card-avatar__status--error":"";return l`
      <div class="swim-card-avatar__avatar ${e?"has-status":""}">
        <div class="swim-card-avatar__inner">
          ${e?l`<div
                class="swim-card-avatar__status ${t}"
                role="status"
                aria-label="${this.status||""}"
              ></div>`:u}
          ${this.src?l`
                <img
                  class="swim-card-avatar__img ${this.removeImageBackground?"swim-card-avatar__img--no-bg":""}"
                  src="${this.src}"
                  alt=""
                  draggable="false"
                  loading="lazy"
                />
              `:l`<span class="swim-card-avatar__content"><slot></slot></span>`}
        </div>
      </div>
    `}};Je.styles=ys;Yt([a({type:String})],Je.prototype,"src",2);Yt([a({type:String,reflect:!0})],Je.prototype,"status",2);Yt([a({type:Boolean,attribute:"remove-image-background"})],Je.prototype,"removeImageBackground",2);Je=Yt([y("swim-card-avatar")],Je);const Ss=f`
  :host {
    display: inline-block;
    background-color: var(--grey-700);
    border-radius: 11px;
    box-sizing: border-box;
  }

  :host([size='small']) {
    height: 10px;
    width: 35%;
  }

  :host([size='medium']) {
    height: 12px;
    width: 30%;
  }

  :host([size='large']) {
    height: 16px;
    width: 50%;
  }
`,Cs=[$,Ss];var Mo=(e=>(e.Small="small",e.Medium="medium",e.Large="large",e))(Mo||{}),Es=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,Ho=(e,t,i,n)=>{for(var o=n>1?void 0:n?Is(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Es(t,i,o),o};let Ut=class extends _{constructor(){super(...arguments),this.size=Mo.Medium}render(){return l``}};Ut.styles=Cs;Ho([a({type:String,reflect:!0})],Ut.prototype,"size",2);Ut=Ho([y("swim-card-placeholder")],Ut);const po=27,As=f`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: var(--spacing-20) var(--spacing-0);
    padding-left: ${po}px;
    padding-right: ${po}px;
    box-sizing: border-box;
  }

  ::slotted(*) {
    font-weight: var(--font-weight-semibold);
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
`,Bs=[$,As];var zs=Object.getOwnPropertyDescriptor,Ts=(e,t,i,n)=>{for(var o=n>1?void 0:n?zs(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(o)||o);return o};let di=class extends _{render(){return l`<slot></slot>`}};di.styles=Bs;di=Ts([y("swim-card-body")],di);const Ps=f`
  :host {
    display: inline-flex;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) .swim-checkbox__label {
    cursor: not-allowed;
  }

  :host([round]) .swim-checkbox__box {
    border-radius: 100%;
  }

  .swim-checkbox__label {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 0;
    outline: none;
  }

  .swim-checkbox__label:focus-visible {
    outline: none;
  }

  .swim-checkbox__label:focus-visible .swim-checkbox__box {
    outline: 2px solid var(--blue-200);
    outline-offset: 1px;
  }

  .swim-checkbox__box {
    position: relative;
    flex-shrink: 0;
    border-radius: var(--radius-2);
    background-color: transparent;
    border: 2px solid var(--grey-600);
    transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
    user-select: none;
    margin: auto var(--spacing-10) auto 0;
    outline: 0 none transparent;
    outline-offset: 1px;
  }

  .swim-checkbox__box::after {
    position: absolute;
    top: calc(50% - 7px);
    left: calc(50% - 3px);
    width: 6px;
    height: 12px;
    content: '';
    border: solid var(--white);
    border-width: 0 2px 2px 0;
    transform: rotate(0deg) scale(0);
    transition: all 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
  }

  .swim-checkbox__box--indeterminate {
    background-color: var(--blue-400);
    border-radius: var(--radius-2);
    opacity: 1;
    border: 2px solid var(--blue-400);
    transform: rotate(0deg) scale(1);
  }

  .swim-checkbox__box--indeterminate::after {
    width: 12px;
    height: 2px;
    top: calc(50% - 1px);
    left: calc(50% - 6px);
    border: none;
    transform: rotate(0deg) scale(1);
    background-color: var(--white);
  }

  .swim-checkbox__box--checked {
    background-color: var(--blue-400);
    border-radius: var(--radius-2);
    opacity: 1;
    border: 2px solid var(--blue-400);
    transform: rotate(0deg) scale(1);
  }

  .swim-checkbox__box--checked::after {
    transform: rotate(45deg) scale(1);
    background-color: transparent;
  }

  .swim-checkbox__content {
    margin: auto 0;
    color: var(--grey-100);
    font-size: var(--font-size-m);
    line-height: var(--font-line-height-200);
  }
`;var Ls=Object.defineProperty,Os=Object.getOwnPropertyDescriptor,pe=(e,t,i,n)=>{for(var o=n>1?void 0:n?Os(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Ls(t,i,o),o};let Ds=0,K=class extends _{constructor(){super(),this.id=`swim-checkbox-${++Ds}`,this.name="",this.diameter="18px",this._checked=!1,this._indeterminate=!1,this._tabindex=0,this._disabled=!1,this._round=!1,this._internals=this.attachInternals()}get checked(){return this._checked}set checked(e){const t=g(e);this._checked!==t&&(this._checked=t,this._syncFormValue(),this.dispatchEvent(new CustomEvent("checked-change",{detail:this._checked,bubbles:!0,composed:!0})))}get indeterminate(){return this._indeterminate}set indeterminate(e){const t=g(e);this._indeterminate!==t&&(this._indeterminate=t,this.dispatchEvent(new CustomEvent("indeterminate-change",{detail:this._indeterminate,bubbles:!0,composed:!0})))}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=B(e,0)}get disabled(){return this._disabled}set disabled(e){this._disabled=g(e)}get round(){return this._round}set round(e){this._round=g(e)}connectedCallback(){super.connectedCallback(),this._syncFormValue()}updated(e){super.updated(e),(e.has("checked")||e.has("_checked"))&&this._syncFormValue()}focus(e){var t;(t=this._roving)==null||t.focus(e)}_syncFormValue(){this._internals.setFormValue(this._checked?"on":"")}_onClick(e){e.preventDefault(),!this.disabled&&this._toggle()}_onKeydown(e){e.key!==" "||this.disabled||(e.stopPropagation(),e.preventDefault(),this._toggle())}_toggle(){this.checked=!this.checked,this._emitChange()}_emitChange(){this.dispatchEvent(new CustomEvent("change",{detail:{stopPropagation:()=>{},timeStamp:Date.now(),target:{checked:this._checked}},bubbles:!0,composed:!0}))}_onFocus(e){this.dispatchEvent(new FocusEvent("focus",{...e,bubbles:!0,composed:!0}))}_onBlur(e){this.dispatchEvent(new FocusEvent("blur",{...e,bubbles:!0,composed:!0}))}render(){const e=`${this.id}-content`;return l`
      <div
        class="swim-checkbox__roving swim-checkbox__label"
        role="checkbox"
        tabindex="${this.disabled?-1:this.tabindex}"
        aria-checked="${this.indeterminate?"mixed":this.checked}"
        aria-disabled="${this.disabled?"true":"false"}"
        aria-labelledby="${e}"
        @click="${this._onClick}"
        @keydown="${this._onKeydown}"
        @focus="${this._onFocus}"
        @blur="${this._onBlur}"
      >
        <div
          part="box"
          class="swim-checkbox__box ${this.checked&&!this.indeterminate?"swim-checkbox__box--checked":""} ${this.indeterminate?"swim-checkbox__box--indeterminate":""}"
          style="width: ${this.diameter}; height: ${this.diameter}; min-width: ${this.diameter}; min-height: ${this.diameter};"
        ></div>
        <div part="content" class="swim-checkbox__content" id="${e}">
          <slot></slot>
        </div>
      </div>
    `}};K.styles=[$,Ps];K.formAssociated=!0;pe([V(".swim-checkbox__roving")],K.prototype,"_roving",2);pe([a({type:String})],K.prototype,"id",2);pe([a({type:String})],K.prototype,"name",2);pe([a({type:String})],K.prototype,"diameter",2);pe([a({type:Boolean,reflect:!0,attribute:"checked"})],K.prototype,"checked",1);pe([a({type:Boolean,reflect:!0})],K.prototype,"indeterminate",1);pe([a({type:Number})],K.prototype,"tabindex",1);pe([a({type:Boolean,reflect:!0})],K.prototype,"disabled",1);pe([a({type:Boolean,reflect:!0})],K.prototype,"round",1);K=pe([y("swim-checkbox")],K);const Fs=f`
  :host {
    display: block;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  .swim-radio__label {
    display: flex;
    align-items: center;
    position: relative;
    min-height: 1.5em;
    padding-left: 1.5em;
    margin: 0 0.8rem 0 0;
    cursor: pointer;
    user-select: none;
    outline: none;
  }

  :host([disabled]) .swim-radio__label {
    cursor: not-allowed;
  }

  .swim-radio__label:focus-visible {
    outline: none;
  }

  .swim-radio__label:focus-visible .swim-radio__checkmark {
    outline: 2px solid var(--blue-200);
    outline-offset: 1px;
  }

  .swim-radio__content {
    color: var(--grey-100);
    font-size: var(--font-size-m);
    line-height: var(--font-line-height-200);
  }

  /* Hide native radio visually but keep for semantics/accessibility */
  .swim-radio__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
    pointer-events: none;
  }

  .swim-radio__checkmark {
    position: absolute;
    top: 0.25em;
    left: 0;
    height: 1em;
    width: 1em;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid var(--grey-600);
    opacity: 1;
    transition: background-color 0.3s ease, border-color 0.3s ease, opacity 0.3s ease;
    outline: 0 none transparent;
    outline-offset: 1px;
  }

  .swim-radio__checkmark::after {
    content: '';
    position: absolute;
    display: block;
    opacity: 0;
    top: 0;
    left: 0;
    width: 0.25em;
    height: 0.25em;
    /* Center dot in 1em circle: (1em - 0.25em) / 2 = 0.375em */
    transform: translate(0.375em, 0.375em);
    border-radius: 50%;
    background: var(--white);
    box-shadow: var(--shadow-1);
    transition: opacity 0.3s ease;
  }

  /* Hover */
  .swim-radio__label:hover .swim-radio__checkmark {
    background-color: var(--blue-400);
    border-color: var(--blue-400);
    opacity: 0.3;
  }

  .swim-radio__label:hover .swim-radio__checkmark::after {
    opacity: 0;
  }

  /* Checked */
  .swim-radio__label .swim-radio__input:checked ~ .swim-radio__checkmark,
  .swim-radio__checkmark--checked {
    background-color: var(--blue-400);
    border-color: var(--blue-400);
    opacity: 1;
  }

  .swim-radio__label .swim-radio__input:checked ~ .swim-radio__checkmark::after,
  .swim-radio__label:hover .swim-radio__checkmark::after,
  .swim-radio__checkmark--checked::after {
    opacity: 1;
  }

  /* Disabled: no hover effect */
  :host([disabled]) .swim-radio__label:hover .swim-radio__checkmark {
    background-color: transparent;
    border-color: var(--grey-600);
    opacity: 1;
  }

  :host([disabled]) .swim-radio__label:hover .swim-radio__checkmark::after {
    opacity: 0;
  }

  :host([disabled]) .swim-radio__label .swim-radio__input:checked ~ .swim-radio__checkmark::after,
  :host([disabled]) .swim-radio__checkmark--checked::after {
    opacity: 1;
  }
`,Ms=f`
  :host {
    display: block;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  .swim-radio-group__slot {
    display: block;
    outline: none;
  }

  .swim-radio-group__slot:focus {
    outline: none;
  }
`;var Hs=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,re=(e,t,i,n)=>{for(var o=n>1?void 0:n?Rs(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Hs(t,i,o),o};let Ns=0,X=class extends _{constructor(){super(...arguments),this.id=`swim-radio-${++Ns}`,this.name="",this.radioId="",this._tabindex=0,this._checked=!1,this.value="",this._disabled=!1,this.groupDisabled=!1,this.isInGroup=!1}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=B(e,0)}get checked(){return this._checked}set checked(e){const t=g(e);this._checked!==t&&(this._checked=t)}get disabled(){return this._disabled||this.groupDisabled}set disabled(e){this._disabled=g(e)}get _effectiveTabindex(){return this.disabled||this.isInGroup?-1:this._tabindex}get _inputId(){return this.radioId||`${this.id}-radio`}focus(e){var t;(t=this._roving)==null||t.focus(e)}_onClick(e){e.preventDefault(),!this.disabled&&this._select()}_onKeydown(e){e.key!==" "||this.disabled||(e.stopPropagation(),e.preventDefault(),this._select())}_select(){if(this.isInGroup){if(this._checked)return;this.checked=!0}else this.checked=!this._checked;this._checked&&this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}_onInputChange(e){this.checked=!0,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}_onFocus(e){this.dispatchEvent(new FocusEvent("focus",{...e,bubbles:!0,composed:!0}))}_onBlur(e){this.dispatchEvent(new FocusEvent("blur",{...e,bubbles:!0,composed:!0}))}render(){const e=`${this.id}-content`;return l`
      <label
        class="swim-radio__label swim-radio__roving"
        for="${this._inputId}"
        tabindex="${this._effectiveTabindex}"
        role="radio"
        aria-checked="${this._checked}"
        aria-disabled="${this.disabled?"true":"false"}"
        aria-labelledby="${e}"
        @click="${this._onClick}"
        @keydown="${this._onKeydown}"
        @focus="${this._onFocus}"
        @blur="${this._onBlur}"
      >
        <input
          type="radio"
          class="swim-radio__input"
          id="${this._inputId}"
          tabindex="-1"
          .checked="${this._checked}"
          ?disabled="${this.disabled}"
          name="${this.name||this.id}"
          aria-checked="${this._checked}"
          @change="${this._onInputChange}"
          @focus="${this._onFocus}"
          @blur="${this._onBlur}"
        />
        <span
          part="checkmark"
          class="swim-radio__checkmark ${this._checked?"swim-radio__checkmark--checked":""}"
        ></span>
        <div part="content" class="swim-radio__content" id="${e}">
          <slot></slot>
        </div>
      </label>
    `}};X.styles=[$,Fs];re([V(".swim-radio__roving")],X.prototype,"_roving",2);re([a({type:String})],X.prototype,"id",2);re([a({type:String})],X.prototype,"name",2);re([a({type:String,attribute:"radio-id"})],X.prototype,"radioId",2);re([a({type:Number})],X.prototype,"tabindex",1);re([a({type:Boolean,reflect:!0})],X.prototype,"checked",1);re([a({type:String})],X.prototype,"value",2);re([a({type:Boolean,reflect:!0})],X.prototype,"disabled",1);re([a({type:Boolean,attribute:!1})],X.prototype,"groupDisabled",2);re([a({type:Boolean,attribute:!1})],X.prototype,"isInGroup",2);X=re([y("swim-radio")],X);var Vs=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,$e=(e,t,i,n)=>{for(var o=n>1?void 0:n?qs(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Vs(t,i,o),o};let js=0;function Us(e,t){return(e%t+t)%t}let ee=class extends _{constructor(){super(),this.id=`swim-radio-group-${++js}`,this._disabled=!1,this._value="",this.name="",this._focusIndex=-1,this._tabindex=0,this._radios=[],this._changeHandler=e=>this._onRadioChange(e),this._slotChangeBound=()=>this._syncRadios(),this._onGroupFocus=e=>{if(e.target!==this._slotWrapper)return;const t=this._radios.find(i=>i.checked);t?(this._focusIndex=this._radios.indexOf(t),this._focusOn(this._focusIndex)):this._focusFirst()},this._onGroupBlur=()=>{this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))},this._internals=this.attachInternals()}get disabled(){return this._disabled}set disabled(e){this._disabled=g(e),this._updateRadioDisabledState()}get value(){return this._value}set value(e){var t;this._value!==e&&(this._value=e,this._updateSelectedFromValue(),(t=this._internals)==null||t.setFormValue(String(this._value)))}get focusIndex(){return this._focusIndex}set focusIndex(e){this._focusIndex=B(e,-1),this._focusOn(this._focusIndex)}get tabindex(){return this.disabled?-1:this._tabindex}set tabindex(e){this._tabindex=B(e,0)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this._changeHandler),this.addEventListener("focus",this._onGroupFocus),this.addEventListener("blur",this._onGroupBlur)}disconnectedCallback(){var e;(e=this._slot)==null||e.removeEventListener("slotchange",this._slotChangeBound),this.removeEventListener("change",this._changeHandler),this.removeEventListener("focus",this._onGroupFocus),this.removeEventListener("blur",this._onGroupBlur),super.disconnectedCallback()}firstUpdated(){var e;(e=this._slot)==null||e.addEventListener("slotchange",this._slotChangeBound),this._syncRadios()}updated(e){super.updated(e),(e.has("value")||e.has("name")||e.has("disabled"))&&(this._updateSelectedFromValue(),this._updateRadioDisabledState(),this._updateRadioNames())}_syncRadios(){var i;const e=this._slot,t=((i=e==null?void 0:e.assignedElements)==null?void 0:i.call(e))??[];this._radios=t.filter(n=>{var o;return n instanceof HTMLElement&&((o=n.tagName)==null?void 0:o.toLowerCase())==="swim-radio"}),this._updateRadioNames(),this._updateRadioDisabledState(),this._updateSelectedFromValue()}_updateRadioNames(){const e=this.name||this.id;this._radios.forEach(t=>{t.name=e,t.isInGroup=!0})}_updateRadioDisabledState(){this._radios.forEach(e=>{e.groupDisabled=this._disabled})}_updateSelectedFromValue(){this._radios.forEach(e=>{e.checked=this._value===e.value})}_onRadioChange(e){var n;const t=e.target;if(!t||((n=t.tagName)==null?void 0:n.toLowerCase())!=="swim-radio")return;const i=e.detail;this._value!==i&&(this._value=i,this._updateSelectedFromValue(),this._internals.setFormValue(String(this._value)),this.dispatchEvent(new CustomEvent("change",{detail:this._value,bubbles:!0,composed:!0})))}_focusFirst(){if(!(this.disabled||!this._radios.length)){for(let e=0;e<this._radios.length;e++)if(!this._radios[e].disabled){this._focusIndex=e,this._focusOn(e);return}}}_focusOn(e){this.disabled||e<0||e>=this._radios.length||this._radios[e].focus()}_selectIndex(e){if(this.disabled||e<0||e>=this._radios.length)return;const t=this._radios[e];t.disabled||(this.value=t.value)}_focusIn(e){if(this.disabled||!this._radios.length)return;const t=this._radios.length;for(let i=1;i<=t;i++){const n=Us(this._focusIndex+e*i,t);if(!this._radios[n].disabled){this._focusIndex=n,this._focusOn(n);return}}}_onKeydown(e){switch(e.key){case"ArrowLeft":case"ArrowUp":e.preventDefault(),e.stopPropagation(),this._focusIn(-1),this._selectIndex(this._focusIndex);break;case"ArrowRight":case"ArrowDown":e.preventDefault(),e.stopPropagation(),this._focusIn(1),this._selectIndex(this._focusIndex);break}}render(){return l`
      <div
        class="swim-radio-group__slot"
        role="radiogroup"
        tabindex="${this.tabindex}"
        aria-disabled="${this.disabled?"true":"false"}"
        @keydown="${this._onKeydown}"
      >
        <slot></slot>
      </div>
    `}};ee.styles=[$,Ms];ee.formAssociated=!0;$e([V("slot")],ee.prototype,"_slot",2);$e([V(".swim-radio-group__slot")],ee.prototype,"_slotWrapper",2);$e([a({type:String})],ee.prototype,"id",2);$e([a({type:Boolean,reflect:!0})],ee.prototype,"disabled",1);$e([a({type:String})],ee.prototype,"value",1);$e([a({type:String})],ee.prototype,"name",2);$e([a({type:Number})],ee.prototype,"focusIndex",1);$e([a({type:Number})],ee.prototype,"tabindex",1);ee=$e([y("swim-radio-group")],ee);const Ws=f`
  :host {
    display: inline-block;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) .swim-toggle__track,
  :host([disabled]) .swim-toggle__text {
    cursor: not-allowed;
  }

  .swim-toggle {
    display: inline-flex;
    align-items: center;
    margin-top: var(--spacing-8);
    margin-bottom: var(--spacing-16);
  }

  .swim-toggle__input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
    pointer-events: none;
  }

  .swim-toggle__roving {
    outline: none;
  }

  .swim-toggle__roving:focus-visible {
    outline: 2px solid var(--blue-200);
    outline-offset: 2px;
  }

  .swim-toggle__track {
    position: relative;
    display: inline-block;
    height: 14px;
    width: 36px;
    background: var(--grey-900);
    border-radius: 100px;
    cursor: pointer;
    transition: background 0.3s ease;
    vertical-align: middle;
    margin-bottom: 3px;
    user-select: none;
  }

  .swim-toggle__track[aria-checked='true'] {
    background: var(--blue-700);
  }

  .swim-toggle__thumb {
    position: absolute;
    left: 0;
    top: -3px;
    display: block;
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background: var(--grey-400);
    box-shadow: 0 3px 3px var(--grey-900);
    content: '';
    transition: left 0.3s ease, background 0.3s ease;
  }

  .swim-toggle__track[aria-checked='true'] .swim-toggle__thumb {
    left: 16px;
    background: var(--blue-500);
  }

  .swim-toggle__icon {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  /* Check icon when on: nudge tick to the left (thumb is on right) */
  .swim-toggle__icon--on {
    justify-content: flex-start;
    padding-left: 2px;
  }

  /* X icon when off: nudge cross to the right (thumb is on left) */
  .swim-toggle__icon--off {
    justify-content: flex-end;
    padding-right: 2px;
  }

  /* Constrain swim-icon so it centers vertically in the 14px track; override inline-block/baseline */
  .swim-toggle__icon swim-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    vertical-align: middle;
    block-size: 14px;
    min-inline-size: 14px;
    box-sizing: border-box;
  }

  .swim-toggle__icon--on swim-icon {
    opacity: 0.5;
    color: var(--white);
    font-size: 9px;
    padding: 2.5px 3.5px;
  }

  .swim-toggle__icon--off swim-icon {
    opacity: 0.7;
    color: var(--grey-400);
    font-size: 7px;
    font-weight: 900;
    padding: 3.5px 4.5px;
  }

  .swim-toggle__text {
    cursor: pointer;
    padding-left: 5px;
    color: var(--grey-100);
    font-size: var(--font-size-m);
    line-height: var(--font-line-height-200);
    margin: 0;
  }
`;var Gs=Object.defineProperty,Ks=Object.getOwnPropertyDescriptor,ge=(e,t,i,n)=>{for(var o=n>1?void 0:n?Ks(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Gs(t,i,o),o};const Xs={fromAttribute:e=>e!=="false"&&e!=="",toAttribute:e=>e?"true":"false"};let Ys=0,Y=class extends _{constructor(){super(),this.id=`swim-toggle-${++Ys}`,this.name="",this.label="",this._checked=!1,this._disabled=!1,this._required=!1,this._showIcons=!0,this._tabindex=0,this._internals=this.attachInternals()}get checked(){return this._checked}set checked(e){const t=g(e);this._checked!==t&&(this._checked=t,this._syncFormValue())}get disabled(){return this._disabled}set disabled(e){this._disabled=g(e)}get required(){return this._required}set required(e){this._required=g(e)}get showIcons(){return this._showIcons}set showIcons(e){this._showIcons=e!=null?g(e):!0}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=B(e,0)}connectedCallback(){super.connectedCallback(),this._syncFormValue()}updated(e){super.updated(e),(e.has("checked")||e.has("_checked"))&&this._syncFormValue()}focus(e){var t;(t=this._roving)==null||t.focus(e)}_syncFormValue(){var t;this._internals.setFormValue(this._checked?"on":""),this.required&&!this._checked?this._internals.setValidity({valueMissing:!0},"This field is required"):this._internals.setValidity({});const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".swim-toggle__input");e&&(e.checked=this._checked,e.required=this.required)}_onClick(e){e.preventDefault(),!this.disabled&&this._toggle()}_onKeydown(e){e.key!==" "&&e.key!=="Enter"||(e.preventDefault(),!this.disabled&&this._toggle())}_toggle(){this.checked=!this.checked,this._emitChange()}_emitChange(){this.dispatchEvent(new CustomEvent("change",{detail:{stopPropagation:()=>{},timeStamp:Date.now(),target:{checked:this._checked}},bubbles:!0,composed:!0}))}_onFocus(e){this.dispatchEvent(new FocusEvent("focus",{...e,bubbles:!0,composed:!0}))}_onBlur(e){this.dispatchEvent(new FocusEvent("blur",{...e,bubbles:!0,composed:!0}))}_onInputChange(e){const t=e.target;this._checked!==t.checked&&(this._checked=t.checked,this.requestUpdate(),this._syncFormValue(),this._emitChange())}render(){const e=`${this.id}-text`;return l`
      <div class="swim-toggle">
        <input
          class="swim-toggle__input"
          type="checkbox"
          id="${this.id}"
          name="${this.name||void 0}"
          ?checked="${this._checked}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          tabindex="-1"
          aria-hidden="true"
          @change="${this._onInputChange}"
        />
        <div
          class="swim-toggle__roving swim-toggle__track"
          part="track"
          role="switch"
          tabindex="${this.disabled?-1:this.tabindex}"
          aria-checked="${this._checked}"
          aria-disabled="${this.disabled?"true":"false"}"
          aria-labelledby="${e}"
          @click="${this._onClick}"
          @keydown="${this._onKeydown}"
          @focus="${this._onFocus}"
          @blur="${this._onBlur}"
        >
          <span class="swim-toggle__thumb" part="thumb"></span>
          ${this.showIcons?this._checked?l`<span class="swim-toggle__icon swim-toggle__icon--on" aria-hidden="true"
                  ><swim-icon font-icon="check"></swim-icon
                ></span>`:l`<span class="swim-toggle__icon swim-toggle__icon--off" aria-hidden="true"
                  ><swim-icon font-icon="x"></swim-icon
                ></span>`:""}
        </div>
        <label class="swim-toggle__text" part="text" id="${e}" for="${this.id}">
          ${this.label?l`<span>${this.label}</span>`:""}
          <slot></slot>
        </label>
      </div>
    `}};Y.styles=[$,Ws];Y.formAssociated=!0;ge([V(".swim-toggle__roving")],Y.prototype,"_roving",2);ge([a({type:String})],Y.prototype,"id",2);ge([a({type:String})],Y.prototype,"name",2);ge([a({type:String})],Y.prototype,"label",2);ge([a({type:Boolean,reflect:!0,attribute:"checked"})],Y.prototype,"checked",1);ge([a({type:Boolean,reflect:!0})],Y.prototype,"disabled",1);ge([a({type:Boolean,reflect:!0})],Y.prototype,"required",1);ge([a({type:Boolean,attribute:"show-icons",converter:Xs})],Y.prototype,"showIcons",1);ge([a({type:Number})],Y.prototype,"tabindex",1);Y=ge([y("swim-toggle")],Y);const Qs=f`
  :host {
    display: block;
    width: 100%;
    margin-bottom: 2em;
    background: var(--grey-825);
    border-radius: var(--radius-8);
    box-sizing: border-box;
  }

  .swim-section__inner {
    display: block;
    width: 100%;
  }

  .swim-section__header {
    background: var(--grey-775);
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 0;
    min-height: 44px;
    height: auto;
    line-height: 1.25;
    padding: var(--spacing-8) var(--spacing-10);
    color: var(--grey-100);
    position: relative;
    border-radius: var(--radius-8) var(--radius-8) var(--radius-0) var(--radius-0);
    box-sizing: border-box;
    overflow: hidden;
  }

  .swim-section__header-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    min-width: 0;
    overflow: hidden;
    gap: var(--spacing-16);
  }

  /* When toggle is shown (left), reserve space so title isn’t cut off */
  .swim-section__header--collapsible:not(.swim-section__header--toggle-right) .swim-section__header-content {
    padding-left: 28px;
  }

  .swim-section__header-content slot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    min-width: 0;
    gap: var(--spacing-16);
  }

  /* Custom header (e.g. swim-section-header): full-width row so title and link sit at start/end */
  .swim-section__header-content ::slotted(swim-section-header) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 0;
    gap: var(--spacing-16);
  }

  /* Slotted headings match section title: same size/weight, no extra margin */
  .swim-section__header-content ::slotted(h1),
  .swim-section__header-content ::slotted(h2),
  .swim-section__header-content ::slotted(h3),
  .swim-section__header-content ::slotted(h4) {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25;
  }

  .swim-section__header-content ::slotted(a) {
    flex-shrink: 0;
  }

  .swim-section__header.swim-section__header--collapsed {
    border-radius: var(--radius-8);
  }

  .swim-section__toggle {
    position: absolute;
    left: 0;
    top: 0;
    width: 28px;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
    color: var(--grey-100);
    overflow: hidden; /* avoid chevron glyph artifacts */
  }

  .swim-section__toggle:focus-visible {
    outline: 2px solid var(--blue-200);
    outline-offset: -2px;
    border-radius: var(--radius-2);
    z-index: 1;
  }

  .swim-section__toggle-icon {
    font-size: 0.75rem;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swim-section__toggle swim-icon {
    display: block;
    font-size: 0.75rem;
  }

  .swim-section__header a {
    color: var(--grey-100);
    text-decoration: none;
  }

  .swim-section__header a:hover,
  .swim-section__header a:focus {
    text-decoration: underline;
  }

  .swim-section__header a:visited {
    color: var(--grey-100);
  }

  .swim-section__header-title {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25;
    padding: var(--spacing-0);
    margin: var(--spacing-0);
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }

  .swim-section__header.swim-section__header--collapsible:not(.swim-section__header--toggle-right) {
    padding-left: 0; /* space for toggle is from header-content padding-left */
  }

  .swim-section__header.swim-section__header--header-toggle {
    cursor: pointer;
  }

  .swim-section__header.swim-section__header--header-toggle:focus-visible {
    outline: 2px solid var(--blue-200);
    border-radius: var(--radius-2);
    outline-offset: 1px;
  }

  .swim-section__header.swim-section__header--toggle-right.swim-section__header--collapsible {
    padding: var(--spacing-0) var(--spacing-20) var(--spacing-0) var(--spacing-16);
  }

  .swim-section__header.swim-section__header--toggle-right .swim-section__toggle {
    left: auto;
    right: 0;
    width: 28px;
  }

  .swim-section__header--empty {
    height: 0;
    min-height: 0;
    padding: 0;
    overflow: hidden;
    border: none;
    border-radius: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }

  .swim-section__content {
    display: block;
    box-sizing: border-box;
  }

  /* Appearance: minimal */
  :host([appearance='minimal']) {
    background: transparent;
  }

  :host([appearance='minimal']) .swim-section__header {
    background: transparent;
  }

  /* Appearance: outline */
  :host([appearance='outline']) .swim-section__header,
  :host([appearance='outline']) .swim-section__content {
    background: none;
    border: 1px solid var(--grey-600);
  }

  :host([appearance='outline']) .swim-section__header {
    border-radius: var(--radius-8) var(--radius-8) var(--radius-0) var(--radius-0);
  }

  :host([appearance='outline']) .swim-section__header.swim-section__header--collapsed {
    border-radius: var(--radius-8);
  }

  :host([appearance='outline']) .swim-section__content {
    border-top: 0;
    border-radius: var(--radius-0) var(--radius-0) var(--radius-8) var(--radius-8);
  }

  /* Appearance: light */
  :host([appearance='light']) .swim-section__header,
  :host([appearance='light']) .swim-section__content {
    border: 2px solid var(--grey-700);
  }

  :host([appearance='light']) .swim-section__header {
    background: var(--grey-700);
    border-radius: var(--radius-8) var(--radius-8) var(--radius-0) var(--radius-0);
  }

  :host([appearance='light']) .swim-section__header.swim-section__header--collapsed {
    border-radius: var(--radius-8);
  }

  :host([appearance='light']) .swim-section__content {
    background: var(--grey-775);
    border-radius: var(--radius-0) var(--radius-0) var(--radius-8) var(--radius-8);
  }
`,Zs=[$,Qs];var Ro=(e=>(e.Legacy="legacy",e.Outline="outline",e.Light="light",e.Minimal="minimal",e))(Ro||{}),Ht=(e=>(e.Left="left",e.Right="right",e.None="none",e))(Ht||{}),Js=Object.defineProperty,er=Object.getOwnPropertyDescriptor,ae=(e,t,i,n)=>{for(var o=n>1?void 0:n?er(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Js(t,i,o),o};const tr={fromAttribute:e=>e!=="false"&&e!=="",toAttribute:e=>e?"true":"false"},No={fromAttribute:e=>e!==null&&e!=="false",toAttribute:e=>e?"true":"false"};let go=0,Q=class extends _{constructor(){super(...arguments),this._id=`section-${++go}`,this._sectionCollapsed=!1,this._sectionCollapsible=!0,this._headerToggle=!1,this.sectionTitle="",this.padding="1.8em",this.appearance=Ro.Legacy,this.togglePosition=Ht.Left,this._hasHeaderSlot=!1,this._headerSlotChangeBound=()=>this._checkHeaderSlot()}get id(){return this._id}set id(e){this._id=e||`section-${++go}`}get sectionCollapsed(){return this._sectionCollapsed}set sectionCollapsed(e){const t=e!=null?g(e):!1;this._sectionCollapsed!==t&&(this._sectionCollapsed=t)}get sectionCollapsible(){return this._sectionCollapsible}set sectionCollapsible(e){const t=e!=null?g(e):!0;this._sectionCollapsible!==t&&(this._sectionCollapsible=t)}get headerToggle(){return this._headerToggle}set headerToggle(e){const t=e!=null?g(e):!1;this._headerToggle!==t&&(this._headerToggle=t)}get _contentId(){return`${this.id}-content`}firstUpdated(){var t,i;this._checkHeaderSlot();const e=((i=(t=this.renderRoot)==null?void 0:t.querySelector)==null?void 0:i.call(t,'slot[name="header"]'))??this._headerSlot;e&&(this._headerSlotForCleanup=e,e.addEventListener("slotchange",this._headerSlotChangeBound))}disconnectedCallback(){this._headerSlotForCleanup&&(this._headerSlotForCleanup.removeEventListener("slotchange",this._headerSlotChangeBound),this._headerSlotForCleanup=void 0),super.disconnectedCallback()}_checkHeaderSlot(){var t,i;const e=((i=(t=this.renderRoot)==null?void 0:t.querySelector)==null?void 0:i.call(t,'slot[name="header"]'))??this._headerSlot;if(e){const o=e.assignedNodes({flatten:!0}).some(s=>{var r;return s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE&&(((r=s.textContent)==null?void 0:r.trim())??"").length>0});this._hasHeaderSlot!==o&&(this._hasHeaderSlot=o)}}_headerIsEmpty(){var e;return!((e=this.sectionTitle)!=null&&e.trim())&&!this._hasHeaderSlot}_onToggle(e){if(e==null||e.stopPropagation(),!this.sectionCollapsible)return;const t=!this.sectionCollapsed;this.sectionCollapsed=t,this.dispatchEvent(new CustomEvent("toggle",{detail:t,bubbles:!0,composed:!0}))}_onHeaderKeydown(e){e.key!==" "&&e.key!=="Enter"||!this.headerToggle||!this.sectionCollapsible||(e.preventDefault(),this._onToggle(e))}_onHeaderClick(){this.headerToggle&&this.sectionCollapsible&&this._onToggle()}render(){var s;const e=this.sectionCollapsible,t=e&&this.togglePosition!==Ht.None,i=this.togglePosition===Ht.Right,n=["swim-section__header",this.sectionCollapsed?"swim-section__header--collapsed":"",e?"swim-section__header--collapsible":"",this.headerToggle?"swim-section__header--header-toggle":"",i?"swim-section__header--toggle-right":""].filter(Boolean).join(" "),o=this._headerIsEmpty();return l`
      <div class="swim-section__inner">
        <header
          class="${n}${o?" swim-section__header--empty":""}"
          role="${this.headerToggle&&e&&!o?"button":"presentation"}"
          tabindex="${this.headerToggle&&e&&!o?0:-1}"
          aria-expanded="${o?void 0:this.sectionCollapsed?"false":"true"}"
          aria-controls="${this._contentId}"
          @click="${this._onHeaderClick}"
          @keydown="${this._onHeaderKeydown}"
        >
          ${t&&!o?l`
                <button
                  type="button"
                  class="swim-section__toggle"
                  title="Toggle Content Visibility"
                  aria-controls="${this._contentId}"
                  aria-expanded="${this.sectionCollapsed?"false":"true"}"
                  @click="${this._onToggle}"
                  @keydown="${r=>{(r.key===" "||r.key==="Enter")&&(r.preventDefault(),this._onToggle(r))}}"
                >
                  <swim-icon
                    class="swim-section__toggle-icon"
                    font-icon="${this.sectionCollapsed?"chevron-bold-right":"chevron-bold-down"}"
                    aria-hidden="true"
                  ></swim-icon>
                </button>
              `:u}
          <div class="swim-section__header-content">
            ${(s=this.sectionTitle)!=null&&s.trim()?l`<h1 class="swim-section__header-title">${this.sectionTitle}</h1>`:u}
            <slot name="header"></slot>
          </div>
        </header>
        ${this.sectionCollapsed?u:l`
              <div
                id="${this._contentId}"
                class="swim-section__content"
                style="padding: ${this.padding}"
                role="region"
                aria-labelledby="${o?"":void 0}"
              >
                <slot></slot>
              </div>
            `}
      </div>
    `}};Q.styles=Zs;ae([a({type:String,reflect:!0})],Q.prototype,"id",1);ae([a({reflect:!0,attribute:"section-collapsed",converter:No})],Q.prototype,"sectionCollapsed",1);ae([a({reflect:!0,attribute:"section-collapsible",converter:tr})],Q.prototype,"sectionCollapsible",1);ae([a({reflect:!0,attribute:"header-toggle",converter:No})],Q.prototype,"headerToggle",1);ae([a({type:String,reflect:!0,attribute:"section-title"})],Q.prototype,"sectionTitle",2);ae([a({type:String})],Q.prototype,"padding",2);ae([a({type:String,reflect:!0})],Q.prototype,"appearance",2);ae([a({type:String,reflect:!0,attribute:"toggle-position"})],Q.prototype,"togglePosition",2);ae([w()],Q.prototype,"_hasHeaderSlot",2);ae([V('slot[name="header"]')],Q.prototype,"_headerSlot",2);Q=ae([y("swim-section")],Q);const ir=f`
  :host {
    display: contents;
  }
`;var or=Object.getOwnPropertyDescriptor,nr=(e,t,i,n)=>{for(var o=n>1?void 0:n?or(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(o)||o);return o};let hi=class extends _{render(){return l`<slot></slot>`}};hi.styles=ir;hi=nr([y("swim-section-header")],hi);const sr=2,rr=4,ar=16,lr=f`
  :host {
    --slider-track-height: ${sr}px;
    --slider-fill-height: ${rr}px;
    --slider-thumb-size: ${ar}px;
    display: inline-block;
  }

  :host([disabled]) {
    pointer-events: none;
    opacity: 0.6;
  }

  .swim-slider__inner {
    margin: 1em auto;
    position: relative;
    display: inline-block;
  }

  .swim-slider__inputs {
    position: relative;
    min-width: 12.5em;
    height: var(--slider-thumb-size);
  }

  .swim-slider__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    appearance: none;
    background-color: transparent;
    margin: 0;
    cursor: pointer;
  }

  .swim-slider__input:focus {
    outline: none;
  }

  .swim-slider__input:focus-visible {
    outline: 2px solid var(--blue-200);
    outline-offset: 2px;
  }

  .swim-slider__input::-webkit-slider-runnable-track {
    cursor: pointer;
    color: transparent;
    background: transparent;
    border-color: transparent;
    appearance: none;
  }

  .swim-slider__input::-moz-range-track {
    cursor: pointer;
    color: transparent;
    background: transparent;
    border-color: transparent;
    appearance: none;
  }

  .swim-slider__input::-ms-track {
    cursor: pointer;
    color: transparent;
    background: transparent;
    border-color: transparent;
    appearance: none;
  }

  .swim-slider__input::-webkit-slider-thumb {
    border: none;
    width: var(--slider-thumb-size);
    height: var(--slider-thumb-size);
    appearance: none;
    position: relative;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    z-index: 301;
    color: transparent;
  }

  .swim-slider__input::-moz-range-thumb {
    border: none;
    width: var(--slider-thumb-size);
    height: var(--slider-thumb-size);
    appearance: none;
    position: relative;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    z-index: 302;
    transform: scale(1);
  }

  .swim-slider__input::-ms-thumb {
    border: none;
    width: var(--slider-thumb-size);
    height: var(--slider-thumb-size);
    appearance: none;
    position: relative;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    z-index: 302;
    transform: scale(1);
  }

  .swim-slider__track {
    position: absolute;
    background-color: var(--blue-400);
    width: 100%;
    height: var(--slider-track-height);
    top: calc(var(--slider-thumb-size) * 0.5 - var(--slider-track-height) * 0.5);
    pointer-events: none;
    opacity: 0.3;
  }

  .swim-slider__thumb {
    position: absolute;
    background-color: var(--blue-400);
    height: var(--slider-thumb-size);
    width: var(--slider-thumb-size);
    border-radius: calc(var(--slider-thumb-size) * 0.5);
    pointer-events: none;
    z-index: 100;
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--blue-400) 30%, transparent);
    transition: box-shadow 0.3s ease-in-out;
    top: 0;
  }

  .swim-slider__thumb--active {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--blue-400) 30%, transparent);
  }

  .swim-slider__ticks {
    position: absolute;
    display: block;
    top: 0;
    width: 100%;
    height: 3px;
    opacity: 0.3;
  }

  .swim-slider__tick {
    position: absolute;
    border: none;
    height: 100%;
    width: 2px;
    background-color: var(--blue-400);
  }

  .swim-slider--filled .swim-slider__fill {
    background-repeat: no-repeat;
    background-image: linear-gradient(var(--blue-400), var(--blue-400));
    position: absolute;
    border-radius: 0;
    z-index: 99;
    pointer-events: none;
    height: var(--slider-fill-height);
    left: 0;
    top: calc(50% - var(--slider-fill-height) * 0.5);
    width: 100%;
  }

  .swim-slider--vertical {
    display: inline-block;
    height: initial;
    min-height: 12.5em;
    width: var(--slider-thumb-size);
  }

  .swim-slider--vertical .swim-slider__inner {
    transform: translate(0%, -100%) rotate(-90deg) translate(-100%, 0);
    transform-origin: top left;
  }
`;var cr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,R=(e,t,i,n)=>{for(var o=n>1?void 0:n?dr(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&cr(t,i,o),o};let hr=0,O=class extends _{constructor(){super(),this.id=`swim-slider-${++hr}`,this._min=0,this._max=100,this._step=1,this.orientation="horizontal",this._filled=!1,this._multiple=!1,this._disabled=!1,this._showTicks=!1,this.ariaLabel="",this._values=[0],this._active=[],this._internals=this.attachInternals()}get min(){return this._min}set min(e){this._min=B(e,0)}get max(){return this._max}set max(e){this._max=B(e,100)}get step(){return this._step}set step(e){this._step=B(e,1)}get filled(){return this._filled}set filled(e){this._filled=g(e)}get multiple(){return this._multiple}set multiple(e){this._multiple=g(e)}get disabled(){return this._disabled}set disabled(e){this._disabled=g(e)}get showTicks(){return this._showTicks}set showTicks(e){this._showTicks=g(e)}get tickStep(){return this._tickStep??this._step}set tickStep(e){this._tickStep=e!=null?B(e,this._step):void 0}get value(){return this._values.length?this.multiple?[...this._values].sort((e,t)=>e-t).join(","):String(this._values[0]):String(this._min)}set value(e){const t=e!=null?String(e):"",n=(t?t.split(",").map(s=>B(s.trim(),this._min)):[this._min]).map(s=>Math.max(this._min,Math.min(this._max,s)));let o;this.multiple?o=n.length>=2?n:n.length===1?[n[0],this._max]:[this._min,this._max]:o=n.slice(0,1),(o.length!==this._values.length||o.some((s,r)=>s!==this._values[r]))&&(this._values=o,this._syncFormValue())}connectedCallback(){super.connectedCallback(),(this._values.length===0||this._values.length===1&&this._values[0]===0&&this._min!==0)&&(this._values=this.multiple?[this._min,this._max]:[this._min],this._syncFormValue())}updated(e){super.updated(e),(e.has("value")||e.has("min")||e.has("max"))&&this._syncFormValue()}_syncFormValue(){this._internals.setFormValue(this.value)}get _percents(){const e=this._max-this._min||1;return this._values.map(t=>Math.round(100*(Math.max(this._min,Math.min(this._max,t))-this._min)/e))}get _thumbs(){return this._percents.map(e=>({left:`calc(${e}% - ${e/100}em)`}))}get _fill(){if(!this.filled)return null;const e=this._percents,t=this.multiple?Math.min(...e):0,n=(this.multiple?Math.max(...e):e[0])-t;return{left:`${t}%`,width:`${n}%`}}get _tickStepValue(){return this._tickStep??this._step}get _ticks(){if(!this.showTicks)return[];const e=this._tickStepValue,t=[];let i=this._min;for(;i<=this._max;)t.push(i),i+=e;const n=this._max-this._min||1;return t.map(o=>{const s=100*(o-this._min)/n;return{left:`calc(${s}% - ${s/100-.5}em)`}})}_setValue(e,t){const i=B(e,this._min),n=Math.max(this._min,Math.min(this._max,i));if(this._values[t]!==n){const o=[...this._values];o[t]=n,this._values=o,this._syncFormValue(),this._emitChange()}}_onChange(e){this._emitChange()}_emitChange(){const e=this.value,t=this.multiple?this._percents.join(","):String(this._percents[0]);this.dispatchEvent(new CustomEvent("change",{detail:{value:this.multiple?e:Number(e),percent:t},bubbles:!0,composed:!0}))}_setActive(e,t){const i=[...this._active];i[e]=t,this._active=i}_ensureValuesLength(){this.multiple&&this._values.length<2?this._values=[this._min,this._max]:!this.multiple&&this._values.length>1&&(this._values=[this._values[0]])}willUpdate(e){this._ensureValuesLength()}firstUpdated(){this._ensureValuesLength()}_onRangeInput(e,t){const i=e.target.value;this._setValue(Number(i),t)}render(){const e=this.orientation==="vertical";return l`
      <div
        class="swim-slider ${e?"swim-slider--vertical":""} ${this.filled?"swim-slider--filled":""} ${this.multiple?"swim-slider--multiple":""}"
        role="group"
        aria-label="${this.ariaLabel||void 0}"
      >
        <div class="swim-slider__inner">
          ${this.showTicks?l`
                <div class="swim-slider__ticks" aria-hidden="true">
                  ${this._ticks.map(t=>l`<div class="swim-slider__tick" style="left: ${t.left}"></div>`)}
                </div>
              `:""}
          <div class="swim-slider__inputs">
            <div class="swim-slider__track" part="track" aria-hidden="true"></div>
            ${this._fill?l`
                  <span
                    class="swim-slider__fill"
                    part="fill"
                    style="left: ${this._fill.left}; width: ${this._fill.width}"
                    aria-hidden="true"
                  ></span>
                `:""}
            ${this._values.map((t,i)=>{const n=this._thumbs[i],o=this._active[i],s=`${this.id}-${i}`,r=this.ariaLabel?`${this.ariaLabel}${this.multiple?` (thumb ${i+1})`:""}`:void 0;return l`
                <input
                  type="range"
                  class="swim-slider__input ${i%2===1?"swim-slider__input--odd":""} ${o?"swim-slider__input--active":""}"
                  id="${s}"
                  aria-valuemin="${this._min}"
                  aria-valuemax="${this._max}"
                  aria-valuenow="${t}"
                  aria-label="${r||void 0}"
                  .value="${String(t)}"
                  min="${this._min}"
                  max="${this._max}"
                  step="${this._step}"
                  ?disabled="${this.disabled}"
                  @input="${c=>this._onRangeInput(c,i)}"
                  @change="${this._onChange}"
                  @mouseenter="${()=>this._setActive(i,!0)}"
                  @mouseleave="${()=>this._setActive(i,!1)}"
                  @focus="${()=>this._setActive(i,!0)}"
                  @blur="${()=>this._setActive(i,!1)}"
                />
                <div
                  class="swim-slider__thumb ${o?"swim-slider__thumb--active":""}"
                  style="${n?`left: ${n.left}`:""}"
                  aria-hidden="true"
                  part="thumb"
                ></div>
              `})}
          </div>
        </div>
      </div>
    `}};O.styles=[$,lr];O.formAssociated=!0;R([a({type:String})],O.prototype,"id",2);R([a({type:Number})],O.prototype,"min",1);R([a({type:Number})],O.prototype,"max",1);R([a({type:Number})],O.prototype,"step",1);R([a({type:String,reflect:!0})],O.prototype,"orientation",2);R([a({type:Boolean,reflect:!0})],O.prototype,"filled",1);R([a({type:Boolean,reflect:!0})],O.prototype,"multiple",1);R([a({type:Boolean,reflect:!0})],O.prototype,"disabled",1);R([a({type:Boolean,attribute:"show-ticks"})],O.prototype,"showTicks",1);R([a({type:Number,attribute:"tick-step"})],O.prototype,"tickStep",1);R([a({type:String,attribute:"aria-label"})],O.prototype,"ariaLabel",2);R([a({type:String})],O.prototype,"value",1);R([w()],O.prototype,"_values",2);R([w()],O.prototype,"_active",2);O=R([y("swim-slider")],O);const ur=f`
  :host {
    overflow: hidden;
    box-sizing: border-box;
    min-height: 0;
  }
`,pr=[$,ur];function Vo(e){const[t,i,n]=e;return`${t} ${i} ${n}`}function Ye(e,t,i){const n=i.split(" ");return n.length===3?n:[e,t,i]}var gr=Object.defineProperty,br=Object.getOwnPropertyDescriptor,yt=(e,t,i,n)=>{for(var o=n>1?void 0:n?br(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&gr(t,i,o),o};const at="1 1 1e-9px";let Me=class extends _{constructor(){super(...arguments),this._areaBasis=at,this.shouldAdjustMaxMin=!1,this.initialFlexParts=Ye("1","1",at),this.currentFlexParts=Ye("1","1",at)}get areaBasis(){return this._areaBasis}set areaBasis(e){this._areaBasis!==e&&(this._areaBasis=e||at,this._applyBasis())}connectedCallback(){super.connectedCallback(),this._applyBasis()}updated(){this.style.flex=Vo(this.currentFlexParts),this.shouldAdjustMaxMin&&this.currentFlexParts[2]?(this.style.minWidth=this.currentFlexParts[2],this.style.maxWidth=this.currentFlexParts[2]):(this.style.minWidth="",this.style.maxWidth="")}updateBasis(e){this.currentFlexParts[2]=e,this.requestUpdate()}_applyBasis(){const e=this._areaBasis||at,[t,i,n]=Ye("1","1",e);this.currentFlexParts=[t,i,n],this.initialFlexParts=[t,i,n],!this.minBasis&&i==="0"&&(this.minBasis=n),!this.maxBasis&&t==="0"&&(this.maxBasis=n),this.requestUpdate()}render(){return l`<slot></slot>`}};Me.styles=pr;yt([a({type:String,attribute:"area-basis"})],Me.prototype,"areaBasis",1);yt([a({type:String,attribute:"min-basis"})],Me.prototype,"minBasis",2);yt([a({type:String,attribute:"max-basis"})],Me.prototype,"maxBasis",2);yt([a({type:Boolean,attribute:"should-adjust-max-min"})],Me.prototype,"shouldAdjustMaxMin",2);Me=yt([y("swim-split-area")],Me);const mr=f`
  :host {
    position: relative;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  .swim-split-handle__grip {
    line-height: 0;
    font-size: 32px;
    position: absolute;
    display: block;
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;
    color: var(--grey-400);
    cursor: inherit;
  }

  .swim-split-handle__grip:hover {
    color: var(--grey-200);
  }

  .swim-split-handle__grip:focus {
    outline: none;
  }

  .swim-split-handle__grip:focus-visible {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
  }

  :host([direction='row']) .swim-split-handle__grip {
    top: 50%;
    left: 50%;
    cursor: col-resize;
    transform: translate(-50%, -50%);
  }

  :host([direction='column']) .swim-split-handle__grip {
    left: 50%;
    cursor: row-resize;
    top: -3px;
    transform: translateX(-50%) rotate(270deg);
  }
`,fr=[$,mr];var Xe=(e=>(e.Row="row",e.Column="column",e))(Xe||{}),_r=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,$i=(e,t,i,n)=>{for(var o=n>1?void 0:n?vr(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&_r(t,i,o),o};const Ft="0 0 15px";let vt=class extends _{constructor(){super(...arguments),this._handleBasis=Ft,this.direction=Xe.Row,this.currentFlexParts=Ye("0","0",Ft),this._boundMouseUp=this._onMouseUp.bind(this),this._boundMouseMove=this._onMouseMove.bind(this)}get handleBasis(){return this._handleBasis}set handleBasis(e){this._handleBasis!==e&&(this._handleBasis=e||Ft,this.currentFlexParts=Ye("0","0",this._handleBasis),this.requestUpdate())}connectedCallback(){super.connectedCallback(),this.currentFlexParts=Ye("0","0",this._handleBasis||Ft)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mouseup",this._boundMouseUp,!0),document.removeEventListener("mousemove",this._boundMouseMove,!0)}updated(){this.style.flex=Vo(this.currentFlexParts)}_onMouseDown(e){e.preventDefault(),document.addEventListener("mouseup",this._boundMouseUp,!0),document.addEventListener("mousemove",this._boundMouseMove,!0),this.dispatchEvent(new CustomEvent("dragstart",{detail:e,bubbles:!0,composed:!0}))}_onMouseMove(e){this.dispatchEvent(new CustomEvent("drag",{detail:e,bubbles:!0,composed:!0}))}_onMouseUp(e){document.removeEventListener("mouseup",this._boundMouseUp,!0),document.removeEventListener("mousemove",this._boundMouseMove,!0),this.dispatchEvent(new CustomEvent("dragend",{detail:e,bubbles:!0,composed:!0}))}_onDblClick(e){this.dispatchEvent(new CustomEvent("dblclick",{detail:e,bubbles:!0,composed:!0}))}render(){return l`
      <button
        type="button"
        class="swim-split-handle__grip"
        aria-label="Resize split"
        @mousedown="${this._onMouseDown}"
        @dblclick="${this._onDblClick}"
      >
        <swim-icon font-icon="split-handle"></swim-icon>
      </button>
    `}};vt.styles=fr;$i([a({type:String,attribute:"handle-basis"})],vt.prototype,"handleBasis",1);$i([a({type:String,reflect:!0})],vt.prototype,"direction",2);vt=$i([y("swim-split-handle")],vt);const xr=f`
  :host {
    display: flex;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  :host([direction='row']) {
    flex-direction: row;
  }

  :host([direction='column']) {
    flex-direction: column;
  }

  slot {
    display: contents;
  }
`,wr=[$,xr];function et(e){const t=String(e).indexOf("calc")>-1;return String(e).indexOf("%")>-1&&!t}function ce(e){return typeof e=="string"?Number(e.replace(/%/g,"").replace(/px/g,"").trim()):e}function qo(e,t,i,n,o,s){let r=e?et(e)?ce(e):ce(e)/s:0,c=t?et(t)?ce(t):ce(t)/s:100;return r=Math.max(r,n==="0"?o:0),c=Math.min(c,i==="0"?o:100),[r,c]}function bo(e,t,i){const[n,o,s]=e.currentFlexParts,r=et(s),c=ce(s),d=e.initialFlexParts[2],p=et(d)?ce(d):ce(d)/i,v=r?c*i:c;let h=v+t,b=h/i;const[m,C]=qo(e.minBasis,e.maxBasis,n,o,p,i);return b=Math.max(b,m),b=Math.min(b,C),h=b*i,e.updateBasis(r?b+"%":h+"px"),h-v}var yr=Object.defineProperty,$r=Object.getOwnPropertyDescriptor,ki=(e,t,i,n)=>{for(var o=n>1?void 0:n?$r(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&yr(t,i,o),o};let xt=class extends _{constructor(){super(...arguments),this.direction=Xe.Row,this._areas=[],this._handles=[],this._handleListeners=new Map,this._onSlotChange=()=>{this._collectAreasAndHandles(),this._removeHandleListeners(),this._attachHandleListeners()}}connectedCallback(){super.connectedCallback(),this.addEventListener("slotchange",this._onSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._onSlotChange),this._removeHandleListeners()}updated(e){e.has("direction")&&this._handles.forEach(t=>{t.direction=this.direction})}firstUpdated(){requestAnimationFrame(()=>{this._collectAreasAndHandles(),this._attachHandleListeners()})}_collectAreasAndHandles(){if(!this.slotEl)return;const e=this.slotEl.assignedElements({flatten:!0});this._areas=e.filter(t=>{var i;return((i=t.tagName)==null?void 0:i.toLowerCase())==="swim-split-area"}),this._handles=e.filter(t=>{var i;return((i=t.tagName)==null?void 0:i.toLowerCase())==="swim-split-handle"}),this._handles.forEach(t=>{t.direction=this.direction})}_attachHandleListeners(){this._handles.forEach(e=>{const t=n=>{const o=n.detail;o&&this._onDrag(o)},i=()=>this._onDblClick();this._handleListeners.set(e,{drag:t,dblclick:i}),e.addEventListener("drag",t),e.addEventListener("dblclick",i)})}_removeHandleListeners(){this._handles.forEach(e=>{const t=this._handleListeners.get(e);t&&(e.removeEventListener("drag",t.drag),e.removeEventListener("dblclick",t.dblclick),this._handleListeners.delete(e))})}_resize(e){const n=(this.direction===Xe.Row?this.clientWidth:this.clientHeight)/100,o=this._areas;if(o.length===0)return;const[s,...r]=o;let c=e;c=bo(s,c,n),r.forEach(d=>{c+=bo(d,-c,n)})}_onDrag(e){const t=this.direction===Xe.Row?e.movementX:e.movementY;this._resize(t)}_onDblClick(){const i=(this.direction===Xe.Row?this.clientWidth:this.clientHeight)/100,o=this._areas[0];if(!o)return;const[s,r,c]=o.currentFlexParts,d=et(c),p=ce(c),h=(d?p*i:p)/i,b=o.initialFlexParts[2],m=et(b)?ce(b):ce(b)/i,[C,E]=qo(o.minBasis,o.maxBasis,s,r,m,i),j=h-C,le=E-h,ze=(j<le?le:-j)*i;this._resize(ze)}render(){return l`<slot></slot>`}};xt.styles=wr;ki([a({type:String,reflect:!0})],xt.prototype,"direction",2);ki([V("slot")],xt.prototype,"slotEl",2);xt=ki([y("swim-split")],xt);const kr=f`
  ${$}

  @keyframes swim-progress-spinner--rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .swim-progress-spinner__container {
    display: inline-flex;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: 0 0 10px 0 var(--spinner-color);
    position: relative;
  }

  .swim-progress-spinner__svg {
    display: block;
  }

  .swim-progress-spinner__circle {
    fill: transparent;
    transition: 0.1s stroke-dashoffset;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    stroke: var(--spinner-color);
  }

  .swim-progress-spinner__icon-in-progress,
  .swim-progress-spinner__icon-complete,
  .swim-progress-spinner__icon-failure {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  /* Size and color for slotted or property-driven swim-icon in center */
  .swim-progress-spinner__icon-in-progress swim-icon,
  .swim-progress-spinner__icon-complete swim-icon,
  .swim-progress-spinner__icon-failure swim-icon {
    font-size: 40px;
    color: var(--spinner-color);
  }

  .swim-progress-spinner__icon-failure swim-icon {
    color: var(--color-error, var(--red-500));
  }

  .swim-progress-spinner__label {
    margin-top: var(--spacing-24, 24px);
  }

  .swim-progress-spinner__label h4 {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-2xl);
    line-height: 30px;
    text-align: center;
    color: var(--white);
    margin: 0;
  }

  /* Indeterminate: rotating circle */
  :host([mode='indeterminate']) .swim-progress-spinner__circle {
    animation: swim-progress-spinner--rotate 1s linear infinite;
  }
`;var Ke=(e=>(e.Indeterminate="indeterminate",e.Determinate="determinate",e))(Ke||{}),ve=(e=>(e.Default="default",e.Icon="icon",e))(ve||{}),Sr=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,q=(e,t,i,n)=>{for(var o=n>1?void 0:n?Cr(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Sr(t,i,o),o};const Er=50,Ir=100,ui=100,Rt=ui/2,Ar=Rt*2*Math.PI,Br="cloud-upload",zr="check",Tr="x";let F=class extends _{constructor(){super(...arguments),this.mode=Ke.Indeterminate,this.color="var(--blue-500)",this.failStatusColor="var(--red-500)",this.appearance=ve.Default,this.inProgressIconName="",this.completeIconName="",this.failIconName="",this._isFailure=!1,this._value=0,this._total=100,this._diameter=100,this._strokeWidth=3,this._boundSlotChange=()=>this.requestUpdate()}get isFailure(){return this._isFailure}set isFailure(e){this._isFailure=g(e)}get value(){return this._value}set value(e){const t=B(e,0);this._value!==t&&(this._value=t)}get total(){return this._total}set total(e){const t=B(e,100);this._total!==t&&(this._total=t)}get diameter(){return this._diameter}set diameter(e){const t=B(e,100);this._diameter!==t&&(this._diameter=t)}get strokeWidth(){return this._strokeWidth}set strokeWidth(e){const t=B(e,3);this._strokeWidth!==t&&(this._strokeWidth=t)}get circumference(){return Ar}get modeValue(){return this.mode===Ke.Determinate||this.isComplete?this.value:Er}get modeTotal(){return this.mode===Ke.Determinate||this.isComplete?this.total:Ir}get percentage(){return 100/this.modeTotal*this.modeValue}get isComplete(){return this.value>=this.total&&this.total>0}get spinnerColor(){return this.isComplete&&this.isFailure?this.failStatusColor:this.color}get strokeDasharray(){return`${this.circumference} ${this.circumference}`}get strokeDashoffset(){return this.circumference-this.percentage/100*this.circumference}hasSlotContent(e){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(`slot[name="${e}"]`);return!!(t!=null&&t.assignedNodes().length)}connectedCallback(){super.connectedCallback(),this.addEventListener("slotchange",this._boundSlotChange)}disconnectedCallback(){this.removeEventListener("slotchange",this._boundSlotChange),super.disconnectedCallback()}get effectiveInProgressIcon(){return this.hasSlotContent("in-progress-icon")?"":this.inProgressIconName||(this.appearance===ve.Icon?Br:"")}get effectiveCompleteIcon(){return this.hasSlotContent("complete-icon")?"":this.completeIconName||(this.appearance===ve.Icon?zr:"")}get effectiveFailIcon(){return this.hasSlotContent("fail-icon")?"":this.failIconName||(this.appearance===ve.Icon?Tr:"")}render(){const e=this.appearance===ve.Icon&&!this.isComplete&&(this.effectiveInProgressIcon||this.hasSlotContent("in-progress-icon")),t=this.appearance===ve.Icon&&this.isComplete&&!this.isFailure&&(this.effectiveCompleteIcon||this.hasSlotContent("complete-icon")),i=this.appearance===ve.Icon&&this.isComplete&&this.isFailure&&(this.effectiveFailIcon||this.hasSlotContent("fail-icon"));return l`
      <div
        class="swim-progress-spinner__container ${this.appearance===ve.Icon?"swim-progress-spinner__container--icon":""}"
        part="container"
        style="--spinner-color: ${this.spinnerColor}"
        role="progressbar"
        aria-valuenow="${this.mode===Ke.Determinate?this.value:u}"
        aria-valuemin="0"
        aria-valuemax="${this.mode===Ke.Determinate?this.total:u}"
        aria-label="Progress"
      >
        <svg
          class="swim-progress-spinner__svg"
          viewBox="0 0 ${ui} ${ui}"
          width="${this.diameter}"
          height="${this.diameter}"
          aria-hidden="true"
          focusable="false"
        >
          <circle
            class="swim-progress-spinner__circle"
            stroke-width="${this.strokeWidth}"
            stroke-dasharray="${this.strokeDasharray}"
            stroke-dashoffset="${this.strokeDashoffset}"
            r="${Rt}"
            cx="${Rt}"
            cy="${Rt}"
          ></circle>
        </svg>

        ${e?l`
              <div class="swim-progress-spinner__icon-in-progress">
                ${this.hasSlotContent("in-progress-icon")?l`<slot name="in-progress-icon"></slot>`:l`<swim-icon font-icon="${this.effectiveInProgressIcon}"></swim-icon>`}
              </div>
            `:t?l`
              <div class="swim-progress-spinner__icon-complete">
                ${this.hasSlotContent("complete-icon")?l`<slot name="complete-icon"></slot>`:l`<swim-icon font-icon="${this.effectiveCompleteIcon}"></swim-icon>`}
              </div>
            `:i?l`
              <div class="swim-progress-spinner__icon-failure">
                ${this.hasSlotContent("fail-icon")?l`<slot name="fail-icon"></slot>`:l`<swim-icon font-icon="${this.effectiveFailIcon}"></swim-icon>`}
              </div>
            `:u}
      </div>

      ${this.spinnerLabel?l`
            <div class="swim-progress-spinner__label" part="label">
              ${!this.isComplete&&this.spinnerLabel.inProgressLabel?l`<h4>${this.spinnerLabel.inProgressLabel}</h4>`:this.isComplete&&!this.isFailure&&this.spinnerLabel.completeLabel?l`<h4>${this.spinnerLabel.completeLabel}</h4>`:this.isComplete&&this.isFailure&&this.spinnerLabel.failLabel?l`<h4>${this.spinnerLabel.failLabel}</h4>`:u}
            </div>
          `:u}
    `}};F.styles=kr;q([a({type:String,reflect:!0})],F.prototype,"mode",2);q([a({type:String})],F.prototype,"color",2);q([a({attribute:"fail-status-color",type:String})],F.prototype,"failStatusColor",2);q([a({type:String,reflect:!0})],F.prototype,"appearance",2);q([a({type:String,attribute:"in-progress-icon-name"})],F.prototype,"inProgressIconName",2);q([a({type:String,attribute:"complete-icon-name"})],F.prototype,"completeIconName",2);q([a({type:String,attribute:"fail-icon-name"})],F.prototype,"failIconName",2);q([a({type:Boolean,reflect:!0,attribute:"is-failure"})],F.prototype,"isFailure",1);q([a({attribute:!1})],F.prototype,"spinnerLabel",2);q([a({type:Number})],F.prototype,"value",1);q([a({type:Number})],F.prototype,"total",1);q([a({type:Number})],F.prototype,"diameter",1);q([a({attribute:"stroke-width",type:Number})],F.prototype,"strokeWidth",1);F=q([y("swim-progress-spinner")],F);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pi extends vi{constructor(t){if(super(t),this.it=u,t.type!==Ce.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this._t=void 0,this.it=t;if(t===J)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}pi.directiveName="unsafeHTML",pi.resultType=1;const Pr=_i(pi),Lr=f`
  :host {
    display: inline-block;
  }

  .swim-tooltip__trigger {
    display: inline-block;
    cursor: inherit;
  }

  .swim-tooltip__panel {
    position: fixed;
    z-index: 5000;
    display: block;
    font-weight: normal;
    opacity: 0;
    max-width: 600px;
    overflow-wrap: anywhere;
    border-radius: var(--radius-4);
    pointer-events: auto;
  }

  .swim-tooltip__panel--animate {
    opacity: 1;
    transition: opacity 0.3s, transform 0.3s;
    transform: translate3d(0, 0, 0);
  }

  .swim-tooltip__panel--narrow {
    max-width: 300px;
    text-align: center;
  }

  /* Placement transform (initial offset before animate) */
  .swim-tooltip__panel--position-right {
    transform: translate3d(10px, 0, 0);
  }

  .swim-tooltip__panel--position-left {
    transform: translate3d(-10px, 0, 0);
  }

  .swim-tooltip__panel--position-top {
    transform: translate3d(0, -10px, 0);
  }

  .swim-tooltip__panel--position-bottom {
    transform: translate3d(0, 10px, 0);
  }

  .swim-tooltip__panel--animate.swim-tooltip__panel--position-right,
  .swim-tooltip__panel--animate.swim-tooltip__panel--position-left,
  .swim-tooltip__panel--animate.swim-tooltip__panel--position-top,
  .swim-tooltip__panel--animate.swim-tooltip__panel--position-bottom {
    transform: translate3d(0, 0, 0);
  }

  /* Caret */
  .swim-tooltip__caret {
    position: absolute;
    z-index: 5001;
    width: 0;
    height: 0;
  }

  .swim-tooltip__caret--position-left {
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 7px solid var(--swim-tooltip-caret-bg, var(--grey-200));
  }

  .swim-tooltip__caret--position-top {
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid var(--swim-tooltip-caret-bg, var(--grey-200));
  }

  .swim-tooltip__caret--position-right {
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 7px solid var(--swim-tooltip-caret-bg, var(--grey-200));
  }

  .swim-tooltip__caret--position-bottom {
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid var(--swim-tooltip-caret-bg, var(--grey-200));
  }

  /* Type: tooltip (compact) */
  .swim-tooltip__panel--type-tooltip {
    color: var(--grey-700);
    background: var(--grey-200);
    font-size: var(--font-size-xs, 12px);
    padding: var(--spacing-4, 4px);
    text-align: center;
  }

  /* Type: popover */
  .swim-tooltip__panel--type-popover {
    background: var(--grey-200);
    color: var(--grey-700);
    box-shadow: var(--shadow-2);
    font-size: 13px;
    padding: var(--spacing-10, 10px);
  }

  .swim-tooltip__content {
    display: block;
  }
`,Or=[$,Lr];var L=(e=>(e.top="top",e.bottom="bottom",e.left="left",e.right="right",e))(L||{}),he=(e=>(e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.center="center",e))(he||{}),jo=(e=>(e.popover="popover",e.tooltip="tooltip",e))(jo||{}),xe=(e=>(e.all="all",e.focus="focus",e.click="click",e.mouseover="mouseover",e))(xe||{});const ue=7;function Wt(e,t,i){return i===he.left?(e.left??0)-ue:i===he.right?(e.left??0)+(e.width??0)-(t.width??0)+ue:(e.left??0)+(e.width??0)/2-(t.width??0)/2}function Si(e,t,i){return i===he.top?(e.top??0)-ue:i===he.bottom?(e.top??0)+(e.height??0)-(t.height??0)+ue:(e.top??0)+(e.height??0)/2-(t.height??0)/2}function mo(e,t,i){let n=Wt(e,t,i);return n+(t.width??0)>window.innerWidth&&(n=window.innerWidth-(t.width??0)),n}function fo(e,t,i){let n=Si(e,t,i);return n+(t.height??0)>window.innerHeight&&(n=window.innerHeight-(t.height??0)),n}function Dr(e,t,i,n,o){return i===L.right?Wt(e,t,n)+(t.width??0)+o>window.innerWidth:i===L.left?Wt(e,t,n)-o<0:i===L.top?(e.top??0)-(t.height??0)-o<0:i===L.bottom?Si(e,t,n)+(t.height??0)+o>window.innerHeight:!1}function Fr(e,t,i,n,o){return Dr(i,t,e,o,n)?e===L.right?L.left:e===L.left?L.right:e===L.top?L.bottom:L.top:e}function Mr(e,t,i,n,o){let s=0,r=0;return e===L.right?(r=(i.left??0)+(i.width??0)+n,s=fo(i,t,o)):e===L.left?(r=(i.left??0)-(t.width??0)-n,s=fo(i,t,o)):e===L.top?(s=(i.top??0)-(t.height??0)-n,r=mo(i,t,o)):(s=(i.top??0)+(i.height??0)+n,r=mo(i,t,o)),{top:s,left:r}}function _o(e,t,i,n){let o;n===he.left?o=(e.width??0)/2-(i.width??0)/2+ue:n===he.right?o=(t.width??0)-(e.width??0)/2-(i.width??0)/2-ue:o=(t.width??0)/2-(i.width??0)/2;const s=Wt(e,t,n);return s+(t.width??0)>window.innerWidth&&(o+=s+(t.width??0)-window.innerWidth),o}function vo(e,t,i,n){let o;n===he.top?o=(e.height??0)/2-(i.height??0)/2+ue:n===he.bottom?o=(t.height??0)-(e.height??0)/2-(i.height??0)/2-ue:o=(t.height??0)/2-(i.height??0)/2;const s=Si(e,t,n);return s+(t.height??0)>window.innerHeight&&(o+=s+(t.height??0)-window.innerHeight),o}function Hr(e,t,i,n,o){let s=0,r=0;return e===L.right?(r=-ue,s=vo(i,t,n,o)):e===L.left?(r=t.width??0,s=vo(i,t,n,o)):e===L.top?(s=t.height??0,r=_o(i,t,n,o)):(s=-ue,r=_o(i,t,n,o)),{top:s,left:r}}var Rr=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,P=(e,t,i,n)=>{for(var o=n>1?void 0:n?Nr(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Rr(t,i,o),o};let z=class extends _{constructor(){super(...arguments),this.content="",this.placement=L.top,this.alignment=he.center,this.type=jo.popover,this.showEvent=xe.all,this._spacing=10,this._showCaret=!0,this._disabled=!1,this._closeOnClickOutside=!0,this._closeOnMouseLeave=!0,this._hideTimeout=300,this._showTimeout=100,this.cssClass="",this._open=!1,this._panelTop=0,this._panelLeft=0,this._effectivePlacement=L.top,this._caretTop=0,this._caretLeft=0,this._animate=!1,this._triggerRef=null,this._panelRef=null,this._caretRef=null,this._boundDocumentClick=null,this._openFromClick=!1,this._tooltipId=`swim-tooltip-${Math.random().toString(36).slice(2,11)}`,this._throttledPosition=()=>{this._throttleTimeout==null&&(this._throttleTimeout=window.setTimeout(()=>{this._throttleTimeout=void 0,this._open&&this._position()},100))},this._panelForHideListeners=null,this._panelMouseEnterBound=()=>this._clearHideTimer(),this._panelMouseLeaveBound=e=>{var i;const t=e.relatedTarget;t&&((i=this._triggerRef)!=null&&i.contains(t))||this.hide()},this._onTriggerFocus=()=>{this._listensFocus&&this.show()},this._onTriggerBlur=()=>{this._listensFocus&&this.hide(!0)},this._onTriggerMouseEnter=()=>{this._listensHover&&this.show()},this._onTriggerMouseLeave=e=>{var n;const t=e.relatedTarget,i=this._panelRef??((n=this.shadowRoot)==null?void 0:n.querySelector(".swim-tooltip__panel"));i!=null&&i.contains(t)||(this._listensHover&&this.closeOnMouseLeave&&this.hide(),this._listensClick&&this.hide())},this._onPanelMouseLeave=()=>{this.closeOnMouseLeave&&this.hide()},this._onTriggerClick=()=>{if(this.showEvent===xe.mouseover){this.hide(!0);return}this._listensClick&&(this._openFromClick?this.hide(!0):(this._openFromClick=!0,this.show(!0)))}}get spacing(){return this._spacing}set spacing(e){this._spacing=B(e,10)}get showCaret(){return this._showCaret}set showCaret(e){this._showCaret=g(e)}get disabled(){return this._disabled}set disabled(e){this._disabled=g(e)}get closeOnClickOutside(){return this._closeOnClickOutside}set closeOnClickOutside(e){this._closeOnClickOutside=g(e)}get closeOnMouseLeave(){return this._closeOnMouseLeave}set closeOnMouseLeave(e){this._closeOnMouseLeave=g(e)}get hideTimeout(){return this._hideTimeout}set hideTimeout(e){this._hideTimeout=B(e,300)}get showTimeout(){return this._showTimeout}set showTimeout(e){this._showTimeout=B(e,100)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._throttledPosition)}disconnectedCallback(){window.removeEventListener("resize",this._throttledPosition),this._throttleTimeout!=null&&(window.clearTimeout(this._throttleTimeout),this._throttleTimeout=void 0),this._clearShowTimer(),this._clearHideTimer(),this._removeDocumentClick(),this._removePanelHideListeners(),super.disconnectedCallback()}_hasContentSlot(){return!!this.querySelector('[slot="content"]')}get _listensFocus(){return this.showEvent===xe.all||this.showEvent===xe.focus}get _listensHover(){return this.showEvent===xe.all||this.showEvent===xe.mouseover}get _listensClick(){return this.showEvent===xe.all||this.showEvent===xe.click}show(e=!1){if(this._open||this.disabled)return;this._clearShowTimer(),this._clearHideTimer();const t=()=>{this._open||this.disabled||!(this._hasContentSlot||this.content!=null&&this.content!=="")||(this._open=!0,this._effectivePlacement=this.placement,requestAnimationFrame(()=>{this._position(),requestAnimationFrame(()=>{this._animate=!0,this._addHideListeners()})}),this.dispatchEvent(new CustomEvent("show",{detail:!0,bubbles:!0})))};e?t():this._showTimer=window.setTimeout(t,this.showTimeout)}hide(e=!1){if(!this._open)return;this._clearShowTimer(),this._clearHideTimer();const t=()=>{this._open&&(this._open=!1,this._animate=!1,this._openFromClick=!1,this._removeDocumentClick(),this._removePanelHideListeners(),this.dispatchEvent(new CustomEvent("hide",{detail:!0,bubbles:!0})))};e?t():this._hideTimer=window.setTimeout(t,this.hideTimeout)}_clearShowTimer(){this._showTimer!=null&&(window.clearTimeout(this._showTimer),this._showTimer=void 0)}_clearHideTimer(){this._hideTimer!=null&&(window.clearTimeout(this._hideTimer),this._hideTimer=void 0)}_removeDocumentClick(){this._boundDocumentClick&&(document.removeEventListener("click",this._boundDocumentClick,!0),this._boundDocumentClick=null)}_position(){var c,d,p;const e=this._triggerRef??((c=this.shadowRoot)==null?void 0:c.querySelector(".swim-tooltip__trigger")),t=this._panelRef??((d=this.shadowRoot)==null?void 0:d.querySelector(".swim-tooltip__panel")),i=this._caretRef??((p=this.shadowRoot)==null?void 0:p.querySelector(".swim-tooltip__caret"));if(!e||!t)return;const n=e.getBoundingClientRect();if(!n.height&&!n.width)return;const o=t.getBoundingClientRect();this._effectivePlacement=Fr(this.placement,o,n,this.spacing,this.alignment);const{top:s,left:r}=Mr(this._effectivePlacement,o,n,this.spacing,this.alignment);if(this._panelTop=s,this._panelLeft=r,this.showCaret&&i){const v=i.getBoundingClientRect(),h=Hr(this._effectivePlacement,o,n,v,this.alignment);this._caretTop=h.top,this._caretLeft=h.left}}_removePanelHideListeners(){this._panelForHideListeners&&(this._panelForHideListeners.removeEventListener("mouseenter",this._panelMouseEnterBound),this._panelForHideListeners.removeEventListener("mouseleave",this._panelMouseLeaveBound),this._panelForHideListeners=null)}_addHideListeners(){var t;const e=this._panelRef??((t=this.shadowRoot)==null?void 0:t.querySelector(".swim-tooltip__panel"));e&&(this._removePanelHideListeners(),this._panelForHideListeners=e,e.addEventListener("mouseenter",this._panelMouseEnterBound),this.closeOnMouseLeave&&e.addEventListener("mouseleave",this._panelMouseLeaveBound),this.closeOnClickOutside&&(this._boundDocumentClick=i=>{var o;const n=i.target;e.contains(n)||(o=this._triggerRef)!=null&&o.contains(n)||this.hide(!0)},setTimeout(()=>document.addEventListener("click",this._boundDocumentClick,!0),0)))}firstUpdated(){var e,t,i;this._triggerRef=(e=this.shadowRoot)==null?void 0:e.querySelector(".swim-tooltip__trigger"),this._panelRef=(t=this.shadowRoot)==null?void 0:t.querySelector(".swim-tooltip__panel"),this._caretRef=(i=this.shadowRoot)==null?void 0:i.querySelector(".swim-tooltip__caret")}updated(e){this._open&&(e.has("placement")||e.has("alignment")||e.has("spacing"))&&this._position()}render(){const e=this._hasContentSlot(),t=e||this.content!=null&&this.content!=="",i=["swim-tooltip__panel",`swim-tooltip__panel--type-${this.type}`,`swim-tooltip__panel--position-${this._effectivePlacement}`,this._animate?"swim-tooltip__panel--animate":"",this.cssClass.includes("narrow")?"swim-tooltip__panel--narrow":""].filter(Boolean).join(" ");return l`
      <div
        part="trigger"
        class="swim-tooltip__trigger"
        aria-describedby="${this._open&&t?this._tooltipId:u}"
        aria-expanded="${this._listensClick?this._open?"true":"false":u}"
        @focusin="${this._onTriggerFocus}"
        @focusout="${this._onTriggerBlur}"
        @mouseenter="${this._onTriggerMouseEnter}"
        @mouseleave="${this._onTriggerMouseLeave}"
        @click="${this._onTriggerClick}"
      >
        <slot></slot>
      </div>

      ${this._open&&t?l`
            <div
              part="panel"
              id="${this._tooltipId}"
              class="${i}"
              style="top: ${this._panelTop}px; left: ${this._panelLeft}px;"
              role="tooltip"
              aria-hidden="false"
              @mouseenter="${()=>this._clearHideTimer()}"
              @mouseleave="${this._onPanelMouseLeave}"
            >
              ${this.showCaret?l`
                    <span
                      part="caret"
                      class="swim-tooltip__caret swim-tooltip__caret--position-${this._effectivePlacement}"
                      style="top: ${this._caretTop}px; left: ${this._caretLeft}px;"
                    ></span>
                  `:""}
              <div part="content" class="swim-tooltip__content">
                ${e?l`<slot name="content"></slot>`:l`${Pr(this.content)}`}
              </div>
            </div>
          `:""}
    `}};z.styles=Or;P([a({type:String})],z.prototype,"content",2);P([a({type:String,reflect:!0,attribute:"placement"})],z.prototype,"placement",2);P([a({type:String,reflect:!0,attribute:"alignment"})],z.prototype,"alignment",2);P([a({type:String,reflect:!0,attribute:"type"})],z.prototype,"type",2);P([a({type:String,attribute:"show-event"})],z.prototype,"showEvent",2);P([a({type:Number,attribute:"spacing"})],z.prototype,"spacing",1);P([a({type:Boolean,attribute:"show-caret",converter:{fromAttribute:e=>e!=="false",toAttribute:e=>e?"":"false"}})],z.prototype,"showCaret",1);P([a({type:Boolean,reflect:!0})],z.prototype,"disabled",1);P([a({type:Boolean,attribute:"close-on-click-outside"})],z.prototype,"closeOnClickOutside",1);P([a({type:Boolean,attribute:"close-on-mouse-leave"})],z.prototype,"closeOnMouseLeave",1);P([a({type:Number,attribute:"hide-timeout"})],z.prototype,"hideTimeout",1);P([a({type:Number,attribute:"show-timeout"})],z.prototype,"showTimeout",1);P([a({type:String,attribute:"css-class"})],z.prototype,"cssClass",2);P([w()],z.prototype,"_open",2);P([w()],z.prototype,"_panelTop",2);P([w()],z.prototype,"_panelLeft",2);P([w()],z.prototype,"_effectivePlacement",2);P([w()],z.prototype,"_caretTop",2);P([w()],z.prototype,"_caretLeft",2);P([w()],z.prototype,"_animate",2);z=P([y("swim-tooltip")],z);const Vr=40,qr=2,jr=f`
  :host {
    --swim-navbar-bar-size: ${Vr}px;
    --swim-navbar-bar-thickness: ${qr}px;
    display: inline-flex;
    align-items: center;
    min-height: 50px;
    position: relative;
    background-color: var(--grey-825);
    box-sizing: border-box;
  }

  .swim-navbar__nav-items {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .swim-navbar__bar-track {
    min-height: var(--swim-navbar-bar-thickness);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .swim-navbar__bar {
    position: absolute;
    width: var(--swim-navbar-bar-size);
    height: var(--swim-navbar-bar-thickness);
    background-color: var(--blue-500);
    transition: transform 300ms cubic-bezier(0.35, 0, 0.25, 1);
  }

  .swim-navbar__bar--bottom {
    bottom: 0;
  }

  .swim-navbar__bar--top {
    top: 0;
  }

  :host([bar-at-top]) .swim-navbar__bar-track {
    top: 0;
    bottom: auto;
  }
`,Ur=f`
  :host {
    display: flex;
    font-size: 15pt;
    color: var(--grey-400);
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    padding: var(--spacing-8) 10px var(--spacing-0) 10px;
    box-sizing: border-box;
  }

  :host(:focus) {
    outline: none;
  }

  :host(:focus-visible) {
    outline: 2px solid var(--blue-400);
    outline-offset: 2px;
    border-radius: var(--radius-2);
  }

  :host(:hover),
  :host(.swim-navbar-item--active) {
    color: var(--blue-400);
  }
`;var Wr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,Qt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Gr(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Wr(t,i,o),o};let He=class extends _{constructor(){super(...arguments),this._active=0,this._total=0,this._index=0,this._clickBound=()=>this._handleClick()}get active(){return this._active}set active(e){const t=B(e,0);if(this._active!==t){const i=this._active;this._active=t,this.requestUpdate("active",i)}}get total(){return this._total}set total(e){this._total=B(e,0)}get index(){return this._index}set index(e){const t=B(e,0);if(this._index!==t){const i=this._index;this._index=t,this.requestUpdate("index",i)}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._clickBound)}disconnectedCallback(){this.removeEventListener("click",this._clickBound),super.disconnectedCallback()}render(){const e=this._active===this._index;return l`
      <div
        class="swim-navbar-item ${e?"swim-navbar-item--active":""}"
        role="tab"
        aria-selected="${e}"
        tabindex="${e?0:-1}"
        @keydown="${this._handleKeyDown}"
      >
        <slot></slot>
      </div>
    `}setActive(){this._active!==this._index&&(this._active=this._index,this.requestUpdate(),this.dispatchEvent(new CustomEvent("active-change",{detail:this._index,bubbles:!0,composed:!0})))}_handleClick(){this.setActive()}_handleKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.setActive())}};He.styles=[$,Ur];Qt([a({type:Number})],He.prototype,"active",1);Qt([a({type:Number})],He.prototype,"total",1);Qt([a({type:Number})],He.prototype,"index",1);He=Qt([y("swim-navbar-item")],He);var Kr=Object.defineProperty,Xr=Object.getOwnPropertyDescriptor,$t=(e,t,i,n)=>{for(var o=n>1?void 0:n?Xr(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Kr(t,i,o),o};const Yr=40;let Re=class extends _{constructor(){super(...arguments),this._barAtTop=!1,this._active=0,this._navItems=[],this._slotChangeBound=()=>this._syncFromSlot(),this._activeChangeBound=e=>this._onItemActiveChange(e)}get barAtTop(){return this._barAtTop}set barAtTop(e){this._barAtTop=g(e)}get active(){return this._active}set active(e){const t=B(e,0);t!==this._active&&!isNaN(t)&&t>=0&&(!this._navItems.length||t<this._navItems.length)&&(this._active=t,this._syncItems(),this.dispatchEvent(new CustomEvent("active-change",{detail:this._active,bubbles:!0,composed:!0})))}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>this._syncFromSlot())}firstUpdated(){var t;this._syncFromSlot();const e=this._slotEl??((t=this.shadowRoot)==null?void 0:t.querySelector("slot"));e&&e.addEventListener("slotchange",this._slotChangeBound)}disconnectedCallback(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");e&&e.removeEventListener("slotchange",this._slotChangeBound),this._navItems.forEach(i=>{i.removeEventListener("active-change",this._activeChangeBound)}),super.disconnectedCallback()}goTo(e){const t=B(e,-1);if(t>=0&&t<this._navItems.length&&t!==this._active){const i=this._navItems[t];i&&i.setActive()}}_syncFromSlot(){var n;const e=this._slotEl??((n=this.shadowRoot)==null?void 0:n.querySelector("slot"));let t=(e==null?void 0:e.assignedElements({flatten:!0}))??[];t.length===0&&(t=Array.from(this.children));const i=t.filter(o=>o instanceof He);this._navItems.forEach(o=>{o.removeEventListener("active-change",this._activeChangeBound)}),this._navItems=i,i.forEach(o=>{o.addEventListener("active-change",this._activeChangeBound)}),this._syncItems()}_syncItems(){const e=this._active,t=this._navItems.length;this._navItems.forEach((i,n)=>{i.index=n,i.total=t,i.active=e})}_onItemActiveChange(e){const t=e.detail;typeof t!="number"||t===this._active||t>=0&&t<this._navItems.length&&(this._active=t,this._syncItems(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("active-change",{detail:this._active,bubbles:!0,composed:!0})))}_getBarTransform(){const e=this._navItems.filter((t,i)=>i<this._active).length;return`translateX(${Yr*e}px)`}render(){const e=this._barAtTop;return l`
      <div class="swim-navbar__nav-items" part="nav-items" role="tablist">
        <slot></slot>
      </div>
      <div class="swim-navbar__bar-track" part="bar-track">
        <div
          class="swim-navbar__bar ${e?"swim-navbar__bar--top":"swim-navbar__bar--bottom"}"
          part="bar"
          style="transform: ${this._getBarTransform()}"
        ></div>
      </div>
    `}};Re.styles=[$,jr];$t([V("slot")],Re.prototype,"_slotEl",2);$t([a({type:Boolean,reflect:!0,attribute:"bar-at-top"})],Re.prototype,"barAtTop",1);$t([a({type:Number})],Re.prototype,"active",1);$t([w()],Re.prototype,"_navItems",2);Re=$t([y("swim-navbar")],Re);const Qr=[$,f`
    :host {
      display: block;
    }

    .swim-list__headers-container {
      padding-inline: var(--spacing-16);
      margin-inline: var(--spacing-16);
      display: grid;
      gap: var(--spacing-16);
      align-items: center;
    }

    .swim-list__headers-container--scrollable {
      margin-right: 1.75rem;
    }

    .swim-list__header-cell {
      color: var(--white);
      font-size: 14px;
      font-weight: var(--font-weight-bold);
      line-height: 22px;
    }

    .swim-list__divider {
      border-top: 1px solid var(--grey-600);
      border-bottom: 1px solid var(--grey-600);
      opacity: 0.75;
      margin: 0.75rem 0 0.5rem 0;
    }

    .swim-list__rows-container {
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }

    .swim-list__row {
      background-color: var(--grey-800);
      border: 1px solid var(--grey-600);
      border-radius: var(--radius-4);
      display: grid;
      align-items: center;
      height: 40px;
      margin: 0.25rem 1rem 0 1rem;
      padding-inline: var(--spacing-16);
      position: relative;
      gap: var(--spacing-16);
      box-sizing: border-box;
    }

    .swim-list__row::before {
      content: '';
      width: 3px;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      border-top-left-radius: var(--radius-4);
      border-bottom-left-radius: var(--radius-4);
    }

    .swim-list__row--error::before {
      background-color: var(--red-500);
    }

    .swim-list__row--success::before {
      background-color: var(--green-500);
    }

    .swim-list__row--warning::before {
      background-color: var(--orange-400);
    }

    .swim-list__cell {
      color: var(--grey-050);
      font-size: var(--font-size-m);
      line-height: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `];var dt=(e=>(e.Error="error",e.Success="success",e.Warning="warning",e))(dt||{}),Zr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,be=(e,t,i,n)=>{for(var o=n>1?void 0:n?Jr(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Zr(t,i,o),o};const xo=44;let te=class extends _{constructor(){super(...arguments),this.columnLayout="",this.dataSource=[],this.defaultRowStatus=dt.Error,this.headerLabels=[],this.columns=[],this._hasScrollbar=!1,this._page=1,this._rowsContainer=null,this._scrollBound=e=>this._emitScrollChanges(e)}get height(){return this._height}set height(e){this._height=e===void 0?void 0:B(e)}connectedCallback(){super.connectedCallback()}firstUpdated(){var e;this._rowsContainer=((e=this.renderRoot)==null?void 0:e.querySelector(".swim-list__rows-container"))??null,this._rowsContainer&&(this._rowsContainer.addEventListener("scroll",this._scrollBound),requestAnimationFrame(()=>{var t;if(this._updateScrollbarState(),(t=this.paginationConfig)!=null&&t.index&&this.paginationConfig.index>1&&this.paginationConfig.pageSize>0){this._page=this.paginationConfig.index;const i=xo*(this.paginationConfig.pageSize*(this._page-1));this._rowsContainer.scrollTo({top:i})}}))}disconnectedCallback(){this._rowsContainer&&(this._rowsContainer.removeEventListener("scroll",this._scrollBound),this._rowsContainer=null),super.disconnectedCallback()}updated(e){(e.has("dataSource")||e.has("height"))&&this._updateScrollbarState()}_updateScrollbarState(){this._rowsContainer&&(this._hasScrollbar=this._rowsContainer.scrollHeight>this._rowsContainer.clientHeight)}_emitScrollChanges(e){var o;const i=e.target.scrollTop;this.dispatchEvent(new CustomEvent("scroll",{detail:i,bubbles:!0}));const n=(o=this.paginationConfig)==null?void 0:o.pageSize;if(n){const s=Math.floor(i/xo),r=Math.floor(s/n)+1;r!==this._page&&(this._page=r,this.dispatchEvent(new CustomEvent("page-change",{detail:r,bubbles:!0})))}}_getGridStyle(){const e=Math.max(this.headerLabels.length,this.columns.length,1);return this.columnLayout&&this.columnLayout.trim()?this.columnLayout.trim():`repeat(${e}, 1fr)`}_getRowStatus(e){const t=e.status;return t===dt.Error||t===dt.Success||t===dt.Warning?t:this.defaultRowStatus}_getCellValue(e,t,i){if(t==="$index")return`${i+1}.`;const n=e[t];return n==null?"":String(n)}render(){const e=this._getGridStyle(),t=Math.max(this.headerLabels.length,this.columns.length,1),i=this.headerLabels.length>=t?this.headerLabels.slice(0,t):[...this.headerLabels,...Array(t-this.headerLabels.length).fill("")];return l`
      <div
        class="swim-list__headers-container ${this._hasScrollbar?"swim-list__headers-container--scrollable":""}"
        style="grid-template-columns: ${e}"
      >
        ${i.map(n=>l`<span class="swim-list__header-cell">${n}</span>`)}
      </div>
      <hr class="swim-list__divider" />
      <div class="swim-list__rows-container" style=${this._height!==void 0?`height: ${this._height}px`:""}>
        ${this.dataSource.map((n,o)=>{const s=this._getRowStatus(n);return l`
            <div class="swim-list__row swim-list__row--${s}" style="grid-template-columns: ${e}">
              ${this.columns.map(r=>l` <span class="swim-list__cell">${this._getCellValue(n,r,o)}</span> `)}
            </div>
          `})}
      </div>
    `}};te.styles=Qr;be([a({type:String,attribute:"column-layout"})],te.prototype,"columnLayout",2);be([a({type:Array,attribute:!1})],te.prototype,"dataSource",2);be([a({type:Number})],te.prototype,"height",1);be([a({attribute:!1})],te.prototype,"paginationConfig",2);be([a({type:String,attribute:"default-row-status",reflect:!0})],te.prototype,"defaultRowStatus",2);be([a({type:Array,attribute:!1})],te.prototype,"headerLabels",2);be([a({type:Array,attribute:!1})],te.prototype,"columns",2);be([w()],te.prototype,"_hasScrollbar",2);be([w()],te.prototype,"_page",2);te=be([y("swim-list")],te);const Ci=f`
  /* Only set standard scrollbar props in browsers that don't support -webkit-scrollbar.
   * Chrome 121+ disables ::-webkit-scrollbar (and thumb :hover) when scrollbar-color/width are set. */
  @supports not selector(::-webkit-scrollbar) {
    .swim-scroll,
    .swim-scroll-overlay,
    .swim-scroll-muted,
    .swim-scroll * {
      scrollbar-width: thin;
      scrollbar-color: rgb(80, 92, 117) transparent;
    }
  }

  /* Base: make element scrollable so scrollbar styling applies (matches overlay/muted) */
  .swim-scroll {
    overflow: auto;
    overflow: overlay;
  }

  .swim-scroll::-webkit-scrollbar,
  .swim-scroll-overlay::-webkit-scrollbar,
  .swim-scroll-muted::-webkit-scrollbar,
  .swim-scroll *::-webkit-scrollbar {
    width: 13px;
    height: 13px;
  }

  /* Track: transparent (matches ngx-ui scrollbars.scss) */
  .swim-scroll::-webkit-scrollbar-track,
  .swim-scroll-overlay::-webkit-scrollbar-track,
  .swim-scroll-muted::-webkit-scrollbar-track,
  .swim-scroll *::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
    margin: 0;
  }

  .swim-scroll::-webkit-scrollbar-corner,
  .swim-scroll-overlay::-webkit-scrollbar-corner,
  .swim-scroll-muted::-webkit-scrollbar-corner,
  .swim-scroll *::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  .swim-scroll::-webkit-scrollbar-thumb,
  .swim-scroll-overlay::-webkit-scrollbar-thumb,
  .swim-scroll-muted::-webkit-scrollbar-thumb,
  .swim-scroll *::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }

  .swim-scroll::-webkit-scrollbar-button,
  .swim-scroll::-webkit-scrollbar-track-piece,
  .swim-scroll::-webkit-scrollbar-corner,
  .swim-scroll::-webkit-resizer,
  .swim-scroll-overlay::-webkit-scrollbar-button,
  .swim-scroll-overlay::-webkit-scrollbar-track-piece,
  .swim-scroll-overlay::-webkit-scrollbar-corner,
  .swim-scroll-overlay::-webkit-resizer,
  .swim-scroll-muted::-webkit-scrollbar-button,
  .swim-scroll-muted::-webkit-scrollbar-track-piece,
  .swim-scroll-muted::-webkit-scrollbar-corner,
  .swim-scroll-muted::-webkit-resizer,
  .swim-scroll *::-webkit-scrollbar-button,
  .swim-scroll *::-webkit-scrollbar-track-piece,
  .swim-scroll *::-webkit-scrollbar-corner,
  .swim-scroll *::-webkit-resizer {
    display: none;
  }

  /* Default & overlay: thumb 50% opacity (rest), full opacity on hover (matches ngx-ui). */
  /* Use literal rgba for default so scrollbar pseudo-elements always get a distinct rest state. */
  .swim-scroll::-webkit-scrollbar-thumb,
  .swim-scroll *::-webkit-scrollbar-thumb,
  .swim-scroll-overlay::-webkit-scrollbar-thumb {
    background-color: rgba(80, 92, 117, 0.5);
  }

  .swim-scroll::-webkit-scrollbar-thumb:hover,
  .swim-scroll *::-webkit-scrollbar-thumb:hover,
  .swim-scroll-overlay::-webkit-scrollbar-thumb:hover {
    background-color: rgb(80, 92, 117);
  }

  /* Overlay: scrollbars hidden until hover */
  .swim-scroll-overlay {
    overflow: auto;
    overflow: overlay;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  .swim-scroll-overlay::-webkit-scrollbar {
    display: none;
  }

  .swim-scroll-overlay:hover::-webkit-scrollbar {
    display: initial;
  }

  /* Muted: thumb 30% → 50% on container hover → 100% on thumb hover (matches ngx-ui). Literal rgba for reliability. */
  .swim-scroll-muted {
    overflow: auto;
    overflow: overlay;
  }

  .swim-scroll-muted::-webkit-scrollbar-thumb {
    background-color: rgba(80, 92, 117, 0.3);
  }

  .swim-scroll-muted:hover::-webkit-scrollbar-thumb {
    background-color: rgba(80, 92, 117, 0.5);
  }

  .swim-scroll-muted:hover::-webkit-scrollbar-thumb:hover {
    background-color: rgb(80, 92, 117);
  }
`,ea=[$,Ci,f`
    :host {
      --swim-dialog-bg: var(--grey-800);
      --swim-dialog-header-color: var(--grey-100);
      --swim-dialog-body-color: var(--grey-200);
    }

    .swim-dialog {
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      inset: 0;
      width: 100%;
      height: 100vh;
      pointer-events: none;
      z-index: var(--swim-dialog-z, 991);
    }

    /* Matches ngx-overlay: black at 80% opacity when active */
    .swim-dialog__backdrop {
      position: absolute;
      inset: 0;
      background-color: var(--black);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.1s ease-in;
    }

    .swim-dialog.swim-dialog--open .swim-dialog__backdrop {
      opacity: 0.8;
    }

    .swim-dialog__content {
      pointer-events: auto;
      position: relative;
      border-radius: var(--radius-8);
      box-shadow: var(--shadow-3);
      background: var(--swim-dialog-bg);
      padding: 1.4rem;
      min-width: 250px;
      font-size: var(--font-size-m);
      color: var(--swim-dialog-body-color);
      animation-fill-mode: forwards;
      opacity: 0;
      transform: scale3d(1.2, 1.2, 1);
      transition: opacity 0.2s ease-out, transform 0.2s ease-out;
      z-index: calc(var(--swim-dialog-z, 991) + 1);
    }

    .swim-dialog.swim-dialog--open .swim-dialog__content {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }

    .swim-dialog__content--large,
    .swim-dialog__content--medium {
      padding: var(--spacing-0);
      width: calc(100vw - 120px);
      background-color: transparent;
    }

    .swim-dialog__content--large {
      height: calc(100vh - 120px);
      max-height: calc(100vh - 120px);
      border-radius: var(--radius-64);
      display: flex;
      flex-direction: column;
    }

    .swim-dialog__content--large .swim-dialog__body {
      flex: 1 1 auto;
      min-height: 0;
      max-height: none;
    }

    .swim-dialog__content--medium {
      height: auto;
      min-height: 340px;
      max-height: 75vh;
      max-width: 900px;
      border-radius: var(--radius-64);
      display: flex;
      flex-direction: column;
    }

    .swim-dialog__content--medium .swim-dialog__body {
      flex: 1 1 auto;
      min-height: 0;
      max-height: none;
    }

    .swim-dialog__close {
      position: absolute;
      font-size: var(--font-size-s);
      color: var(--grey-400);
      right: 1rem;
      top: 1rem;
      background: none;
      border: none;
      padding: 0.25rem;
      cursor: pointer;
      line-height: 1;
      border-radius: var(--radius-4);
    }

    .swim-dialog__close:hover,
    .swim-dialog__close:active {
      color: var(--white);
    }

    .swim-dialog__close:focus-visible {
      outline: 2px solid var(--blue-500);
      outline-offset: 2px;
    }

    .swim-dialog__header {
      margin: 0 0 1.4rem 0;
    }

    .swim-dialog__title,
    .swim-dialog__header h1,
    .swim-dialog__header h2 {
      font-size: 1.8rem;
      font-weight: 400;
      margin: 0 0 1.4rem 0;
      color: var(--swim-dialog-header-color);
    }

    .swim-dialog__content--medium .swim-dialog__header,
    .swim-dialog__content--large .swim-dialog__header {
      border-top-left-radius: var(--radius-64);
      border-top-right-radius: var(--radius-64);
    }

    .swim-dialog__body {
      margin: 0;
      max-height: calc(100vh - 12rem);
      min-height: 0;
    }

    .swim-dialog__footer {
      text-align: right;
      margin-top: 1.4rem;
    }

    .swim-dialog__footer .btn,
    .swim-dialog__footer swim-button {
      margin-left: var(--spacing-4);
    }

    /* Full screen variant (class="swim-dialog--full-screen" on host or wrapper) */
    :host(.swim-dialog--full-screen) .swim-dialog,
    .swim-dialog.swim-dialog--full-screen {
      width: 100vw;
      height: 100%;
      overflow-y: auto;
    }

    :host(.swim-dialog--full-screen) .swim-dialog__content,
    .swim-dialog.swim-dialog--full-screen .swim-dialog__content {
      box-shadow: none;
      width: 100%;
      min-height: 100vh;
    }

    :host(.swim-dialog--full-screen) .swim-dialog__close,
    .swim-dialog.swim-dialog--full-screen .swim-dialog__close {
      right: 1rem;
      top: 2rem;
    }

    /* Wizard / custom header-footer variant (class="wizard" on root) - style slotted header/footer */
    .swim-dialog.wizard .swim-dialog__content {
      padding: var(--spacing-0);
      background: var(--grey-725);
    }

    .swim-dialog.wizard .swim-dialog__body slot::slotted(.swim-dialog__header) {
      padding: 1.4rem;
      background: var(--grey-750);
      border-top-left-radius: var(--radius-16);
      border-top-right-radius: var(--radius-16);
      margin: 0;
      display: block;
    }

    .swim-dialog.wizard .swim-dialog__body slot::slotted(.swim-dialog__footer) {
      padding: 1.4rem;
      margin-top: 0;
      display: block;
    }
  `];var ht=(e=>(e.Regular="regular",e.Medium="medium",e.Large="large",e))(ht||{}),ta=Object.defineProperty,ia=Object.getOwnPropertyDescriptor,N=(e,t,i,n)=>{for(var o=n>1?void 0:n?ia(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&ta(t,i,o),o};let D=class extends _{constructor(){super(...arguments),this.dialogTitle="",this.content="",this.class="",this.cssClass="",this.format=ht.Regular,this.showBackdrop=!0,this._closeButton=!0,this._visible=!1,this._zIndex=991,this._contentId=`swim-dialog-content-${Math.random().toString(36).slice(2,11)}`,this._titleId=`swim-dialog-title-${Math.random().toString(36).slice(2,11)}`,this._previousActiveElement=null}get title(){return this.dialogTitle}set title(e){e&&(this.dialogTitle=e)}get closeButton(){return this._closeButton}set closeButton(e){this._closeButton=g(e)}get visible(){return this._visible}set visible(e){const t=g(e);this._visible!==t&&(this._visible=t,t?(this._previousActiveElement=typeof document<"u"?document.activeElement:null,this.dispatchEvent(new CustomEvent("open",{bubbles:!0}))):(this._restoreFocus(),this.dispatchEvent(new CustomEvent("close",{detail:void 0,bubbles:!0}))))}get zIndex(){return this._zIndex}set zIndex(e){this._zIndex=B(e,991)}get _contentzIndex(){return this.zIndex+1}get _canClose(){return this.beforeClose?this.beforeClose():!0}_restoreFocus(){this._previousActiveElement&&typeof this._previousActiveElement.focus=="function"&&this._previousActiveElement.focus(),this._previousActiveElement=null}show(){this.visible=!0}hide(){this._canClose&&(this.visible=!1)}firstUpdated(){this.visible&&this._contentEl&&this._contentEl.focus({preventScroll:!0})}updated(e){e.has("visible")&&this.visible&&this._contentEl&&requestAnimationFrame(()=>{var t;(t=this._contentEl)==null||t.focus({preventScroll:!0})})}render(){if(!this.visible)return u;const e=this.format===ht.Regular||this.format==="regular",t=this.format===ht.Large||this.format==="large",i=this.format===ht.Medium||this.format==="medium",n=["swim-dialog__content",this.cssClass,t?"swim-dialog__content--large":"",i?"swim-dialog__content--medium":""].filter(Boolean).join(" "),o=this.class.includes("swim-dialog--full-screen"),s=["swim-dialog","swim-dialog--open",this.class,o?"swim-scroll":""].filter(Boolean).join(" ");return l`
      <div class="${s}" style="--swim-dialog-z: ${this.zIndex}" role="presentation">
        ${this.showBackdrop?l`<div class="swim-dialog__backdrop" aria-hidden="true"></div>`:u}
        <div
          part="content"
          class="${n}"
          style="z-index: ${this._contentzIndex}"
          tabindex="-1"
          role="dialog"
          aria-modal="true"
          aria-labelledby="${this.dialogTitle?this._titleId:u}"
          id="${this._contentId}"
        >
          ${e?l`
                ${this.closeButton?l`
                      <button
                        part="close-button"
                        type="button"
                        class="swim-dialog__close"
                        aria-label="Close dialog"
                        @click="${this.hide}"
                      >
                        <swim-icon font-icon="x"></swim-icon>
                      </button>
                    `:u}
                ${this.dialogTitle?l`
                      <div class="swim-dialog__header">
                        <h2 id="${this._titleId}" class="swim-dialog__title">${this.dialogTitle}</h2>
                      </div>
                    `:u}
                <div class="swim-dialog__body swim-scroll">
                  <slot></slot>
                  ${this.content?l`<div>${this.content}</div>`:u}
                </div>
              `:l`
                <div class="swim-dialog__body swim-scroll">
                  <slot></slot>
                  ${this.content?l`<div>${this.content}</div>`:u}
                </div>
              `}
        </div>
      </div>
    `}};D.styles=ea;N([a({type:String,attribute:"dialog-title"})],D.prototype,"dialogTitle",2);N([a({type:String})],D.prototype,"title",1);N([a({type:String})],D.prototype,"content",2);N([a({type:String})],D.prototype,"class",2);N([a({type:String,attribute:"css-class"})],D.prototype,"cssClass",2);N([a({type:String,reflect:!0})],D.prototype,"format",2);N([a({type:Boolean,attribute:"show-backdrop",reflect:!0,converter:{fromAttribute:e=>e===null?!0:e!=="false"&&e!=="0",toAttribute:e=>e?"":"false"}})],D.prototype,"showBackdrop",2);N([a({type:Boolean,attribute:"close-button"})],D.prototype,"closeButton",1);N([a({type:Boolean,reflect:!0})],D.prototype,"visible",1);N([a({type:Number})],D.prototype,"zIndex",1);N([a({attribute:!1})],D.prototype,"beforeClose",2);N([w()],D.prototype,"_contentId",2);N([w()],D.prototype,"_titleId",2);N([V(".swim-dialog__content")],D.prototype,"_contentEl",2);D=N([y("swim-dialog")],D);const oa=[$,f`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      --swim-format-dialog-bg: var(--grey-800);
      --swim-format-header-height-large: 90px;
      --swim-format-header-height-medium: 60px;
      --swim-format-footer-height: 4rem;
      --swim-format-body-padding: 2rem;
      --swim-format-border: 2px solid var(--grey-700);
    }

    .format-dialog-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      max-height: var(--swim-format-max-height, 75vh);
      background: var(--swim-format-dialog-bg);
      box-shadow: 0 0 100px rgba(0, 0, 0, 0.25);
      border-radius: var(--radius-16);
      overflow: hidden;
    }

    :host([format='large']) .format-dialog-container {
      --swim-format-max-height: calc(100vh - 7.25rem);
      --swim-format-header-height: var(--swim-format-header-height-large);
    }

    :host([format='medium']) .format-dialog-container {
      --swim-format-max-height: 75vh;
      --swim-format-header-height: var(--swim-format-header-height-medium);
      --swim-format-body-max-height: calc(var(--swim-format-max-height) - var(--swim-format-header-height));
    }

    .format-dialog-container__header {
      flex: 0 0 var(--swim-format-header-height, 90px);
      height: var(--swim-format-header-height, 90px);
      min-height: var(--swim-format-header-height, 90px);
      border-bottom: var(--swim-format-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 var(--swim-format-body-padding);
      padding-right: 2.5rem;
      gap: 1.5rem;
      overflow: visible;
    }

    /* Match ngx-large-format-dialog-header-title__wrapper: flex 0 0 20%, height 100%, justify-content center */
    .format-dialog-container__header-title {
      display: flex;
      flex-direction: column;
      gap: 2px;
      flex: 0 0 20%;
      height: 100%;
      min-width: 0;
      max-width: 50%;
      justify-content: center;
    }

    .format-dialog-container__header-title--with-subtitle {
      align-items: flex-start;
    }

    .format-dialog-container__header-title h1 {
      margin: 0;
      color: var(--white);
      font-size: var(--swim-format-title-size, 1.75rem);
      font-weight: 400;
      line-height: var(--swim-format-title-line, 2rem);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .format-dialog-container__header-title h4 {
      margin: 0;
      color: var(--grey-250);
      font-size: var(--font-size-m);
      line-height: 1.5;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    :host([format='medium']) .format-dialog-container__header-title h1 {
      --swim-format-title-size: 1.375rem;
      --swim-format-title-line: 1.625rem;
    }

    .format-dialog-container__header-action {
      flex: 0 0 auto;
      max-width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .format-dialog-container__header-action__button {
      background: none;
      border: none;
      color: var(--grey-400);
      font-size: 0.8125rem;
      line-height: 1;
      padding: 0.25rem 0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .format-dialog-container__header-action__button swim-icon {
      flex-shrink: 0;
      font-size: 1em;
      line-height: 0;
    }

    .format-dialog-container__header-action__button:hover {
      color: var(--white);
    }

    .format-dialog-container__header-action__button:focus-visible {
      outline: 2px solid var(--blue-500);
      outline-offset: 2px;
    }

    .format-dialog-container__body {
      flex: 1 1 auto;
      min-height: 215px;
      padding: 0 var(--swim-format-body-padding);
      color: var(--grey-200);
    }

    :host([format='medium']) .format-dialog-container__body {
      max-height: var(--swim-format-body-max-height, auto);
    }

    .format-dialog-container__footer {
      flex: 0 0 var(--swim-format-footer-height);
      height: var(--swim-format-footer-height);
      min-height: var(--swim-format-footer-height);
      border-top: var(--swim-format-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--swim-format-footer-gap, 0.5rem);
      padding: 0.75rem 2rem;
      box-sizing: border-box;
    }
  `];var na=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,qe=(e,t,i,n)=>{for(var o=n>1?void 0:n?sa(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&na(t,i,o),o};let ye=class extends _{constructor(){super(...arguments),this.format="large",this.dialogTitle="",this.dialogSubtitle="",this.dialogActionTitle="Close",this.dialogDirtyActionTitle="Cancel",this.dirty=!1}_onCloseOrCancel(){this.dispatchEvent(new CustomEvent("close-or-cancel",{detail:this.dirty,bubbles:!0,composed:!0}))}render(){const e=["format-dialog-container__header-title","format-dialog-container__header-title--with-subtitle"].join(" ");return l`
      <main class="format-dialog-container">
        <header class="format-dialog-container__header">
          <div class="format-dialog-container__header-title ${e}">
            <h1>${this.dialogTitle}</h1>
            ${this.dialogSubtitle?l`<h4>${this.dialogSubtitle}</h4>`:u}
          </div>
          <div class="format-dialog-container__header-action">
            <button
              type="button"
              class="format-dialog-container__header-action__button"
              aria-label="${this.dirty?this.dialogDirtyActionTitle:this.dialogActionTitle}"
              @click="${this._onCloseOrCancel}"
            >
              <swim-icon font-icon="x"></swim-icon>
              ${this.dirty?this.dialogDirtyActionTitle:this.dialogActionTitle}
            </button>
          </div>
        </header>
        <section class="format-dialog-container__body swim-scroll">
          <slot></slot>
        </section>
        <footer class="format-dialog-container__footer">
          <slot name="footer"></slot>
        </footer>
      </main>
    `}};ye.styles=[Ci,oa];qe([a({type:String,reflect:!0})],ye.prototype,"format",2);qe([a({type:String,attribute:"dialog-title"})],ye.prototype,"dialogTitle",2);qe([a({type:String,attribute:"dialog-subtitle"})],ye.prototype,"dialogSubtitle",2);qe([a({type:String,attribute:"dialog-action-title"})],ye.prototype,"dialogActionTitle",2);qe([a({type:String,attribute:"dialog-dirty-action-title"})],ye.prototype,"dialogDirtyActionTitle",2);qe([a({type:Boolean,reflect:!0})],ye.prototype,"dirty",2);ye=qe([y("swim-large-format-dialog-content")],ye);const ra=[$,f`
    :host {
      --swim-format-footer-gap: 0.5rem;
    }

    .format-dialog-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--swim-format-footer-gap);
      width: 100%;
      height: 100%;
    }
  `];var aa=Object.defineProperty,la=Object.getOwnPropertyDescriptor,Uo=(e,t,i,n)=>{for(var o=n>1?void 0:n?la(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&aa(t,i,o),o};let Gt=class extends _{constructor(){super(...arguments),this.format="large"}render(){return l` <div class="format-dialog-footer"><slot></slot></div> `}};Gt.styles=ra;Uo([a({type:String,reflect:!0})],Gt.prototype,"format",2);Gt=Uo([y("swim-large-format-dialog-footer")],Gt);const ca=["3d-rotate","action","action-close","action-maximize","action-maximize-inverse","action-minimize","action-outline","action-outline-small","add-circle","add-circle-filled","add-circle-medium","add-circle-thin","add-edge","add-new","add-node","advanced-pie","alert","app-store","app-workspaces","applet","applets","application","apps","area-chart","arrow-bold-circle-left","arrow-bold-circle-right","arrow-bold-down","arrow-bold-left","arrow-bold-right","arrow-bold-up","arrow-down","arrow-input","arrow-output","arrow-right","arrow-right-down-medium","arrow-right-medium","arrow-tail-left","arrow-tail-right","arrow-tail-solid-left","arrow-tail-solid-right","arrow-tail-subright","arrow-up","asset-outline","asset-outline-small","assets","attachment","automation","automation-alternate","back-arrow","back-arrow-filled","bars","bell","bell-alarm","bold","bolt","branch-node","branch-node-vert","broom","browser-size","bug","builder","builder-outline","button-push-outline","button-push-outline-large","button-push-outline-small","calendar","calendar-clock","calender-clock","cards","center-align","chart-area","chart-bar-bar","chart-bubble","chart-donut","chart-full-stacked-area","chart-heat","chart-horz-full-stack-bar","chart-number-card","chart-pie","chart-pie-grid","chart-scatter","chart-spider","chart-stacked-area","chart-vert-bar","chart-vert-bar2","chart-vert-stacked-bar","check","check-filled","check-filled-sm","check-square-filled","checklist","chevron-bold-down","chevron-bold-left","chevron-bold-right","chevron-bold-up","circle","circle-filled","circles","circuit-board","clipboard","clock","cloud-download","cloud-upload","code","cog","collapse","commandline","comments","component","component-create","condition","copy","copy-app","copy-filled","credit-card","dashboard","dashboard-outline","database","debug","devil","disable","document","documentation","domain","dots-horz","dots-vert","dots-vert-round","double-down","double-left","double-right","double-up","downgrade","downgrade-horizontal","download-outline","download-outline-large","download-outline-small","drag","edit","edit-app","edit-outline","edit-outline-large","edit-outline-small","email","enrich-small","escalate","events-outline","events-outline-small","expand","explore","export","export-filled","export-outline","export-outline-large","export-outline-small","eye","eye-disabled","eye-hidden","field-created-by","field-created-date","field-date","field-double-select","field-dynamic","field-edited-by","field-edited-date","field-grid","field-html","field-json","field-list","field-list-small","field-lists","field-multiselect","field-number","field-numeric","field-richtext","field-single-select","field-singleline","field-text","field-textarea","field-textual","field-users","filter","filter-bar","find-page","flame","folder","folder-closed-small","folder-open-small","folders","font","format-indent-decrease","format-indent-increase","formula","forward-arrow","forward-arrow-filled","full-align","gauge","gear","gear-small","gear-square","globe","graph","graph-alt1","grid-view","hand","handle","heat","helper","history","horz-bar-graph-grouped","horz-stacked-bar","html-code","icon-chart-bar-horizontal","icon-chart-horz-bar","import-outline","import-outline-large","import-outline-small","info-filled","info-filled-2","info-filled-small","ingest-small","inspect","integration","integrations","ip","italic","key","key-outline","key-outline-small","keyboard","keyboard-return","layer","left-align","library","line-chart","line-graph","linear-gauge","link","list","list-1","list-view","loading","locate-filled","locate-outline","locate-outline-large","location","lock","lock-sm","mail","mail-1","map","marketplace","menu","mfa","mic","minus","money","mouse-hold","multi-line","new-app","notation-arrow-down-left","notation-arrow-up","numbered-list","open","orchestration","paragraph","pause","pause-circle","percent-gauge","phone","photo","pie-chart","pin","plane","play","play-circle","playbook-outline","playbook-outline-small","plugin","plugin-outline","plugin-outline-small","plus","plus-bold","prev","printer","profile","profile-filled","promote","promote-horizontal","question","question-filled","question-filled-sm","radio-button","redo","redo-all","reference","reference-grid","reference-multi","reference-single","reference-tree","refresh","refresh-circle","refresh-small","remove","remove-edge","remove-node","remove-users","repeat","replace","reports","reports-outline","resize","right-align","rocket","rotate","rule-outline","runner","runs-outline","runs-outline-small","sankey","save","save-outline","save-outline-large","save-outline-small","screen","screen-1","search","section","select-all","select-user","select-users","sensor-outline","sensor-outline-small","server","shield","shrink","skip","slide-left","slide-right","sliders","smartphone","smiley-frown","snapshot","solution","sort-ascending","sort-descending","spaces","spaces-list","spaces-outline","spaces-outline-large","speedometer","split-handle","square","square-filled","star","star-filled","stars","stopwatch","superscript","swap","switch","system-diagnostics","system-diagnostics-2","table","tabs","tag-filled","tags-outline","target","task-outline","thumb-down-filled","thumb-down-outline","thumb-down-outline-large","thumb-up-filled","thumb-up-outline","thumb-up-outline-large","tracking-id","transfer","trash","tree","tree-collapse","tree-expand","trend-down","trend-level","trend-up","trending","underline","undo","undo-all","unlink","upload-outline","upload-outline-large","upload-outline-small","user","user-add","user-circle","user-groups","users","version","vert-bar-graph-grouped","vert-full-stack-bar","view-code","view-designer","view-split","wand","warning-filled","warning-filled-sm","warning-thin","web-api","webhook-outline","webhook-outline-large","webhook-outline-small","widget","worker","workflow","workflow-alternate","workflow-alternate-large","workflow-alternate-small","workspaces","workstation","wrench","x","x-filled","x-small"];function wo(e){return new Promise(t=>setTimeout(t,e))}function da(e){return new Promise((t,i)=>setTimeout(()=>i(new Error("Failed")),e))}const Z=[{type:"Malware",date:"1/1/2025",origin:"China"},{type:"DDOS",date:"1/5/2025",origin:"China"},{type:"DDOS",date:"1/5/2025",origin:"Russia"},{type:"XSS",date:"1/6/2025",origin:"North Korea"},{type:"DDOS",date:"1/6/2025",origin:"North Korea"},{type:"Ransomware",date:"1/8/2025",origin:"China"},{type:"DDOS",date:"1/9/2025",origin:"China"},{type:"SQL injection",date:"1/10/2025",origin:"North Korea"},{type:"Malware",date:"1/11/2025",origin:"Russia"},{type:"DDOS",date:"1/11/2025",origin:"Russia"}],lt=["Attack Type","Date of Attack","Origin of Attack"],ct=["type","date","origin"],ha=[{type:"Malware",date:"1/1/2025",origin:"China",status:"error"},{type:"DDOS",date:"1/5/2025",origin:"China",status:"warning"},{type:"DDOS",date:"1/5/2025",origin:"Russia",status:"warning"},{type:"XSS",date:"1/6/2025",origin:"North Korea",status:"success"},{type:"DDOS",date:"1/6/2025",origin:"North Korea",status:"warning"},{type:"Ransomware",date:"1/8/2025",origin:"China",status:"error"},{type:"DDOS",date:"1/9/2025",origin:"China",status:"warning"},{type:"SQL injection",date:"1/10/2025",origin:"North Korea",status:"success"},{type:"Malware",date:"1/11/2025",origin:"Russia",status:"error"},{type:"XSS",date:"1/11/2025",origin:"Russia",status:"success"}],yo=[...Z,...Z,...Z,...Z,...Z,...Z,...Z,...Z,...Z],Wo=["buttons","input","select","checkbox","radio","toggle","slider","tabs","button-group","button-toggle","card","progress-spinner","section","split","navbar","tooltip","list","dialog","scrollbars","icons"],Go=new Set(Wo),ua=Wo[0],$o=new Map;async function pa(e){const t=$o.get(e);if(t)return t;const i=await fetch(`/sections/${e}.html`);if(!i.ok)throw new Error(`Failed to load section: ${e}`);const n=await i.text();return $o.set(e,n),n}function li(){const e=window.location.hash.slice(1).toLowerCase();return Go.has(e)?e:ua}async function ci(e){const t=document.getElementById("page-sections");if(t)try{const i=await pa(e);t.innerHTML=i,fa()}catch(i){console.error("Failed to load section:",e,i),t.innerHTML=`<p class="section-desc">Failed to load section: ${e}</p>`}}function ga(){const e=document.getElementById("iconsPreview");if(!e)return;for(const i of ca){const n=document.createElement("li");n.dataset.iconName=i;const o=document.createElement("swim-icon");o.setAttribute("font-icon",i);const s=document.createElement("span");s.className="icon-name",s.textContent=`ngx-icon ngx-${i}`,n.appendChild(o),n.appendChild(s),e.appendChild(n)}const t=document.getElementById("iconSearch");t&&(t.addEventListener("input",()=>{const i=t.value.trim().toLowerCase();e.querySelectorAll("li").forEach(n=>{const o=(n.dataset.iconName??"").toLowerCase();n.classList.toggle("icon-search-hidden",i.length>0&&!o.includes(i))})}),t.addEventListener("keydown",i=>{i.key==="Escape"&&(t.value="",e.querySelectorAll("li").forEach(n=>n.classList.remove("icon-search-hidden")),t.blur())}))}function ba(){const e=[{name:"Breach",value:"breach"},{name:"DDOS",value:"ddos"},{name:"Physical",value:"physical"}],t=[{name:"Apple",value:"apple"},{name:"Banana",value:"banana"},{name:"Orange",value:"orange"},{name:"Grape",value:"grape"},{name:"Mango",value:"mango"},{name:"Pineapple",value:"pineapple"},{name:"Strawberry",value:"strawberry"},{name:"Watermelon",value:"watermelon"}],i=document.getElementById("basicSelect");i&&(i.options=e);const n=document.getElementById("requiredSelect");n&&(n.options=e);const o=document.getElementById("legacySelect");o&&(o.options=t);const s=document.getElementById("fillSelect");s&&(s.options=t);const r=document.getElementById("smallSelect");r&&(r.options=t);const c=document.getElementById("mediumSelect");c&&(c.options=t);const d=document.getElementById("largeSelect");d&&(d.options=t);const p=[{name:"Red",value:"red"},{name:"Blue",value:"blue"},{name:"Green",value:"green"},{name:"Yellow",value:"yellow"},{name:"Purple",value:"purple"},{name:"Orange",value:"orange"},{name:"Pink",value:"pink"},{name:"Brown",value:"brown"}],v=document.getElementById("multiSelect");v&&(v.options=p);const h=[{name:"United States",value:"us"},{name:"United Kingdom",value:"uk"},{name:"Canada",value:"ca"},{name:"Australia",value:"au"},{name:"Germany",value:"de"},{name:"France",value:"fr"},{name:"Italy",value:"it"},{name:"Spain",value:"es"},{name:"Japan",value:"jp"},{name:"China",value:"cn"},{name:"India",value:"in"},{name:"Brazil",value:"br"},{name:"Mexico",value:"mx"},{name:"Argentina",value:"ar"},{name:"South Africa",value:"za"}],b=document.getElementById("filterableSelect");b&&(b.options=h);const m=document.getElementById("noFilterSelect");m&&(m.options=t);const C=document.getElementById("normalSelect");C&&(C.options=t);const E=document.getElementById("withValueSelect");E&&(E.options=[{name:"Option 1",value:"option1"},{name:"Option 2",value:"option2"},{name:"Option 3",value:"option3"}]);const j=document.getElementById("disabledSelect");j&&(j.options=t,j.value="apple");const le=document.getElementById("noClearSelect");le&&(le.options=t);const me=[{name:"Technology",value:"tech"},{name:"Business",value:"business"},{name:"Science",value:"science"},{name:"Arts",value:"arts"},{name:"Sports",value:"sports"}],ze=document.getElementById("formSelect1");ze&&(ze.options=me);const kt=[{name:"Important",value:"important"},{name:"Urgent",value:"urgent"},{name:"Featured",value:"featured"},{name:"Archive",value:"archive"},{name:"Review",value:"review"}],ot=document.getElementById("formSelect2");ot&&(ot.options=kt)}function ma(){const e=document.getElementById("listBasic");e&&(e.dataSource=Z,e.headerLabels=lt,e.columns=ct,e.defaultRowStatus="error");const t=document.getElementById("listColumnLayout");t&&(t.dataSource=Z,t.headerLabels=lt,t.columns=ct,t.columnLayout="3fr 2fr 1fr",t.defaultRowStatus="error");const i=document.getElementById("listPagination"),n=document.getElementById("listPaginationPage");i&&(i.dataSource=yo,i.headerLabels=lt,i.columns=ct,i.columnLayout="1fr 1fr 1fr",i.height=400,i.paginationConfig={pageSize:10},i.defaultRowStatus="error",i.addEventListener("page-change",d=>{n&&(n.textContent=String(d.detail??1))}),n&&(n.textContent="1"));const o=document.getElementById("listPaginationPage5"),s=document.getElementById("listPaginationPage5Value");o&&(o.dataSource=yo,o.headerLabels=["No.","Attack Type","Date of Attack","Origin of Attack"],o.columns=["$index","type","date","origin"],o.columnLayout="5rem 1fr 1fr 1fr",o.height=400,o.paginationConfig={index:5,pageSize:10},o.defaultRowStatus="error",o.addEventListener("page-change",d=>{s&&(s.textContent=String(d.detail??5))}),s&&(s.textContent="5"));const r=document.getElementById("listWithStatus");r&&(r.dataSource=ha,r.headerLabels=lt,r.columns=ct);const c=document.getElementById("listNoStatus");c&&(c.dataSource=Z,c.headerLabels=lt,c.columns=ct,c.defaultRowStatus="error")}function fa(){const e=document.getElementById("successBtn");e&&e.addEventListener("click",()=>{e.promise=wo(1e3)});const t=document.getElementById("failBtn");t&&t.addEventListener("click",()=>{t.promise=da(1e3)});const i=document.getElementById("slowBtn");i&&i.addEventListener("click",()=>{i.promise=wo(5e3)});const n=document.getElementById("demoForm");if(n){const A=n.querySelector('swim-button[type="submit"]'),T=n.querySelector('swim-button[type="reset"]');A&&A.addEventListener("click",M=>{M.preventDefault(),n.requestSubmit()}),T&&T.addEventListener("click",M=>{M.preventDefault(),n.reset()}),n.addEventListener("submit",M=>{M.preventDefault();const H=document.getElementById("nameInput"),fe=document.getElementById("emailInput"),ie=document.getElementById("ageInput"),Ue=(H==null?void 0:H.value)??"",We=(fe==null?void 0:fe.value)??"",Ot=(ie==null?void 0:ie.value)??"";console.log("Form submitted!",{name:Ue,email:We,age:Ot}),alert(`Form submitted!
Name: ${Ue}
Email: ${We}
Age: ${Ot}`)})}ba();const o=document.getElementById("selectableCardDemo"),s=document.getElementById("cardSelectedValue");o&&s&&o.addEventListener("select",A=>{s.textContent=String(A.detail??!1)});const r=document.getElementById("outlineCardDemo");r&&r.addEventListener("outline-click",()=>console.log("Outline clicked"));const c=document.getElementById("checkboxDemoEvent"),d=document.getElementById("checkboxDemoChecked"),p=document.getElementById("checkboxDemoEventName");c&&d&&p&&(c.addEventListener("checked-change",A=>{d.textContent=String(A.detail),p.textContent="checked-change"}),c.addEventListener("change",()=>{p.textContent="change"}),c.addEventListener("focus",()=>{p.textContent="focus"}),c.addEventListener("blur",()=>{p.textContent="blur"}),d.textContent=String(c.checked));const v=document.getElementById("radioSingleValue"),h=["radioSeasonSpring","radioSeasonSummer","radioSeasonFall","radioSeasonWinter"];h.forEach(A=>{const T=document.getElementById(A);T&&v&&T.addEventListener("change",M=>{const H=M.detail;h.forEach(fe=>{const ie=document.getElementById(fe);ie&&(ie.checked=ie.value===H)}),v.textContent=String(H??"")})});const b=document.getElementById("radioGroupDemo"),m=document.getElementById("radioGroupValue");b&&m&&(m.textContent=String(b.value??"—"),b.addEventListener("change",A=>{m.textContent=String(A.detail??"—")}));const C=document.getElementById("progressSpinnerWithLabel");C&&(C.spinnerLabel={inProgressLabel:"Loading...",completeLabel:"Complete!",failLabel:"Failed"});const E=document.getElementById("progressSpinnerConfigurable"),j=document.getElementById("progressSpinnerConfigurableCode"),le=["progressSpinnerValue","progressSpinnerTotal","progressSpinnerDiameter","progressSpinnerStrokeWidth","progressSpinnerColor","progressSpinnerMode","progressSpinnerCompleteStatus","progressSpinnerShowIcon"];function me(){var Ki;if(!E)return;const A=document.getElementById("progressSpinnerValue"),T=document.getElementById("progressSpinnerTotal"),M=document.getElementById("progressSpinnerDiameter"),H=document.getElementById("progressSpinnerStrokeWidth"),fe=document.getElementById("progressSpinnerColor"),ie=document.getElementById("progressSpinnerMode"),Ue=document.getElementById("progressSpinnerCompleteStatus"),We=document.getElementById("progressSpinnerShowIcon"),Ot=(A==null?void 0:A.value)??"35",ti=(T==null?void 0:T.value)??"100",Vi=(M==null?void 0:M.value)??"100",qi=(H==null?void 0:H.value)??"5",ji=(fe==null?void 0:fe.value)??"lime",Ui=(ie==null?void 0:ie.value)??"indeterminate",Dt=(Ue==null?void 0:Ue.value)??"success",Wi=(We==null?void 0:We.checked)!==!1,Gi=Dt==="fail"||Dt==="success"?ti:Ot;if(E.value=Number(Gi),E.total=Number(ti),E.diameter=Number(Vi),E.strokeWidth=Number(qi),E.color=ji,E.setAttribute("mode",Ui),E.isFailure=Dt==="fail",E.appearance=Wi?"icon":"default",(Ki=E.requestUpdate)==null||Ki.call(E),j){const Ko=Dt==="fail"?`
  is-failure`:"";j.textContent=`<swim-progress-spinner
  mode="${Ui}"
  value="${Gi}"
  total="${ti}"
  diameter="${Vi}"
  stroke-width="${qi}"
  color="${ji}"
  appearance="${Wi?"icon":"default"}"${Ko}
  aria-label="...">
</swim-progress-spinner>`}}if(E){const A=document.getElementById("progressSpinnerMode");A&&A.addEventListener("change",()=>setTimeout(me,0)),le.forEach(M=>{const H=document.getElementById(M);H&&H!==A&&(H.addEventListener("input",me),H.addEventListener("change",me))}),A&&A.addEventListener("input",me);const T=document.getElementById("progressSpinnerShowIcon");T&&T.addEventListener("change",me),me()}const ze=document.getElementById("sliderDemoEvent"),kt=document.getElementById("sliderDemoValue"),ot=document.getElementById("sliderDemoPercent");ze&&kt&&ot&&ze.addEventListener("change",A=>{const T=A.detail;kt.textContent=String((T==null?void 0:T.value)??""),ot.textContent=String((T==null?void 0:T.percent)??"")});const je=document.getElementById("toggleDemoEvent"),Zt=document.getElementById("toggleDemoChecked"),St=document.getElementById("toggleDemoEventName");je&&Zt&&St&&(je.addEventListener("change",()=>{Zt.textContent=String(je.checked),St.textContent="change"}),je.addEventListener("focus",()=>{St.textContent="focus"}),je.addEventListener("blur",()=>{St.textContent="blur"}),Zt.textContent=String(je.checked));const Ei=document.getElementById("seasonToggleGroup"),Ii=document.getElementById("seasonValue");Ei&&Ii&&Ei.addEventListener("value-change",A=>{Ii.textContent=String(A.detail??"")});const Ct=document.getElementById("disabledGroupDemo"),Jt=document.getElementById("toggleGroupDisabledBtn");Ct&&Jt&&Jt.addEventListener("click",()=>{Ct.disabled=!Ct.disabled,Jt.textContent=Ct.disabled?"Enable group":"Disable group"}),ga(),ma();const Ai=document.getElementById("dialogContentOpen"),Et=document.getElementById("dialogContentDemo");Ai&&Et&&(Ai.addEventListener("click",()=>{Et.visible=!0}),Et.addEventListener("close",()=>{Et.visible=!1}));const Bi=document.getElementById("dialogComponentToggle"),nt=document.getElementById("dialogComponentDemo");Bi&&nt&&(Bi.addEventListener("click",()=>{nt.visible=!nt.visible}),nt.addEventListener("close",()=>{nt.visible=!1}));const zi=document.getElementById("dialogWizardOpen"),It=document.getElementById("dialogWizardDemo");zi&&It&&(zi.addEventListener("click",()=>{It.visible=!0}),It.addEventListener("close",()=>{It.visible=!1}));const ke=document.getElementById("dialogWizardTabs"),Ti=document.getElementById("dialogWizardPrev"),Pi=document.getElementById("dialogWizardNext");Ti&&(ke!=null&&ke.prev)&&Ti.addEventListener("click",()=>ke.prev()),Pi&&(ke!=null&&ke.next)&&Pi.addEventListener("click",()=>ke.next());const Li=document.getElementById("dialogFullScreenOpen"),At=document.getElementById("dialogFullScreenDemo");Li&&At&&(Li.addEventListener("click",()=>{At.visible=!0}),At.addEventListener("close",()=>{At.visible=!1}));const Oi=document.getElementById("dialogLargeFormatOpen"),Bt=document.getElementById("dialogLargeFormatDemo");Oi&&Bt&&(Oi.addEventListener("click",()=>{Bt.visible=!0}),Bt.addEventListener("close-or-cancel",()=>{Bt.visible=!1}));const Di=document.getElementById("dialogMediumFormatOpen"),zt=document.getElementById("dialogMediumFormatDemo");Di&&zt&&(Di.addEventListener("click",()=>{zt.visible=!0}),zt.addEventListener("close-or-cancel",()=>{zt.visible=!1}));const Fi=document.getElementById("dialogMediumContentOpen"),Tt=document.getElementById("dialogMediumContentDemo");Fi&&Tt&&(Fi.addEventListener("click",()=>{Tt.visible=!0}),Tt.addEventListener("close-or-cancel",()=>{Tt.visible=!1}));const Mi=document.getElementById("dialogMediumFooterOpen"),Pt=document.getElementById("dialogMediumFooterDemo");Mi&&Pt&&(Mi.addEventListener("click",()=>{Pt.visible=!0}),Pt.addEventListener("close-or-cancel",()=>{Pt.visible=!1}));const Hi=document.getElementById("dialogMediumFooterContentOpen"),Lt=document.getElementById("dialogMediumFooterContentDemo");Hi&&Lt&&(Hi.addEventListener("click",()=>{Lt.visible=!0}),Lt.addEventListener("close-or-cancel",()=>{Lt.visible=!1}));const Ri=document.getElementById("navbarGoToFourthBtn"),ei=document.getElementById("navbarTopDemo");Ri&&ei&&"goTo"in ei&&Ri.addEventListener("click",()=>ei.goTo(3));const Ni=document.getElementById("selectForm");Ni&&Ni.addEventListener("submit",A=>{A.preventDefault();const T=document.getElementById("formSelect1"),M=document.getElementById("formSelect2");console.log("Select Form submitted!"),alert(`Form submitted!
Category: ${T.value}
Tags: ${JSON.stringify(M.value)}`)})}async function _a(){document.querySelectorAll('.sub-nav-item[href^="#"]').forEach(r=>{r.addEventListener("click",c=>{const d=r.getAttribute("href");if(!d||d==="#")return;const p=d.slice(1).toLowerCase();Go.has(p)&&(c.preventDefault(),window.location.hash!==d?window.location.hash=p:ci(p))})}),window.addEventListener("hashchange",()=>{const r=li();e(r),ci(r)});function e(r){const c=r??li();document.querySelectorAll(".sub-nav-item.active, .nav-item.active").forEach(d=>d.classList.remove("active")),document.querySelectorAll(`.sub-nav-item[href="#${c}"], .nav-item[href="#${c}"]`).forEach(d=>d.classList.add("active"))}const t=li();window.location.hash.slice(1).toLowerCase()!==t&&history.replaceState(null,"",`#${t}`),e(t),await ci(t);const i=document.getElementById("navSearch"),n=document.querySelectorAll(".nav-item-container"),o=document.querySelectorAll(".sub-nav-item");function s(){if(!i)return;const r=i.value.trim().toLowerCase();o.forEach(c=>{var p;const d=((p=c.textContent)==null?void 0:p.trim().toLowerCase())??"";c.classList.toggle("nav-search-hidden",r.length>0&&!d.includes(r))}),n.forEach(c=>{var m;const d=c.querySelector(".nav-item-label"),p=((m=d==null?void 0:d.textContent)==null?void 0:m.trim().toLowerCase())??"",v=c.querySelectorAll(".sub-nav-item:not(.nav-search-hidden)").length,h=r.length===0||p.includes(r),b=v>0;c.classList.toggle("nav-search-hidden",r.length>0&&!h&&!b)})}i&&(i.addEventListener("input",s),i.addEventListener("keydown",r=>{r.key==="Escape"&&(i.value="",s(),i.blur())})),console.log("✨ @swimlane/lit-ui demo loaded successfully!")}document.addEventListener("DOMContentLoaded",()=>{const e=Ci.styleSheet;e&&(document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]),_a()});
