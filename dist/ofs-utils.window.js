(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{Fun:()=>r,Obj:()=>n,Str:()=>c,exists:()=>i});class r{static getFunctionName(t){let e=t.toString().match(/function+\s{1,}([a-zA-Z_0-9\$]*)/);return null!==e?e[1]:null}static getConstructorName(t){"Function"===t.constructor.name&&(t=new t);let e=null;return null!==(e=this.getFunctionName(t.constructor))?e:null}static construct(t,e){return new(t.bind.apply(t,[null].concat(e)))}static get factory(){return r.construct.bind(null,Function)}static fromString(t){let e=t.replace(/\n/g,"").replace(/[\s]{2,}/g,"");if(null!==(e=e.match(/^function+[\s]{1,}[a-zA-Z0-9_]*\(([a-zA-Z0-9_\s,]*)\)+\s?\{+(.*)\}+$/)))return r.factory([].concat(e[1],e[2]));let n=t.match(new RegExp(`^Native::(${Object.keys(this.natives).join("|")})+$`));return null!==n?this.natives[n[1]]:null}static toString(t){if("function"!=typeof t)return t;let e=null;return null!=(e=t.toString()).match(/.*\[native code\].*/)?`Native::${this.getFunctionName(t)}`:e}static get natives(){return{Array,ArrayBuffer,Boolean,Buffer,ArrayBuffer,Date,Number,Object,String,Function}}}class n{static getTypeOf(t){return Object.prototype.toString.call(t).slice(8,-1)}static isOfType(t,e){return this.getTypeOf(t)===r.getFunctionName(e)||t instanceof e}static objectToQuery(t={}){let e=[],r=Object.keys(t);for(let n of((t,e,r)=>{let n=[],c=0<e,i=c?e+1:e-1;for(let t=0;c?t<i:t>i;c?t++:t--)n.push(t);return n})(0,r.length-1))e[n]=[r[n],t[r[n]]];return e.map(((t,e)=>t.join("="))).join("&")}static queryToObject(t){let e={};return decodeURIComponent(t).replace("?","").split("&").forEach(((t,r)=>{let n;if(2===(n=t.split("=")).length)return e[n[0]]=n[1]})),e}}class c{static capitalize(t){return null===t?"":("string"!=typeof t&&(t=t.toString()),t.split(/[\s]{1,}/).map((t=>`${t.charAt(0).toUpperCase()}${t.slice(1)}`)).join(" "))}static stripNull(t){return void 0===t?"":t.replace(/\0/g,"")}static regexEscape(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}}const i=t=>null!=t;window["ofs-utils"]=e})();