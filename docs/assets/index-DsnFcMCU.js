var T=Object.defineProperty;var F=(t,e,n)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var $=(t,e,n)=>(F(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function b(){}function z(t){return t()}function C(){return Object.create(null)}function E(t){t.forEach(z)}function A(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function V(t){return Object.keys(t).length===0}function f(t,e){t.appendChild(e)}function W(t,e,n){t.insertBefore(e,n||null)}function S(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function Y(t){return document.createTextNode(t)}function O(){return Y(" ")}function P(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function q(t){return function(e){return e.preventDefault(),t.call(this,e)}}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function K(t){return Array.from(t.childNodes)}function R(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let B;function v(t){B=t}const y=[],k=[];let w=[];const j=[],U=Promise.resolve();let L=!1;function G(){L||(L=!0,U.then(I))}function N(t){w.push(t)}const M=new Set;let g=0;function I(){if(g!==0)return;const t=B;do{try{for(;g<y.length;){const e=y[g];g++,v(e),J(e.$$)}}catch(e){throw y.length=0,g=0,e}for(v(null),y.length=0,g=0;k.length;)k.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];M.has(n)||(M.add(n),n())}w.length=0}while(y.length);for(;j.length;)j.pop()();L=!1,M.clear(),v(t)}function J(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}function Q(t){const e=[],n=[];w.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),w=e}const X=new Set;function Z(t,e){t&&t.i&&(X.delete(t),t.i(e))}function tt(t,e,n){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),N(()=>{const o=t.$$.on_mount.map(z).filter(A);t.$$.on_destroy?t.$$.on_destroy.push(...o):E(o),t.$$.on_mount=[]}),s.forEach(N)}function et(t,e){const n=t.$$;n.fragment!==null&&(Q(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){t.$$.dirty[0]===-1&&(y.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(t,e,n,r,s,o,l=null,c=[-1]){const a=B;v(t);const i=t.$$={fragment:null,ctx:[],props:o,update:b,not_equal:s,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:C(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};l&&l(i.root);let m=!1;if(i.ctx=n?n(t,e.props||{},(u,d,...x)=>{const _=x.length?x[0]:d;return i.ctx&&s(i.ctx[u],i.ctx[u]=_)&&(!i.skip_bound&&i.bound[u]&&i.bound[u](_),m&&nt(t,u)),d}):[],i.update(),m=!0,E(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){const u=K(e.target);i.fragment&&i.fragment.l(u),u.forEach(S)}else i.fragment&&i.fragment.c();e.intro&&Z(t.$$.fragment),tt(t,e.target,e.anchor),I()}v(a)}class ot{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){et(this,1),this.$destroy=b}$on(e,n){if(!A(n))return b;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!V(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const st="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(st);const it="/assets/background-_-BFg4T0.jpg";function ut(t){let e,n,r,s,o,l,c,a,i,m,u,d,x;return{c(){e=p("main"),n=p("div"),r=p("h1"),r.textContent="Will You Be My Valentines",s=O(),o=p("div"),l=p("form"),c=p("button"),c.textContent="Yes",a=O(),i=p("button"),i.textContent="No",m=O(),u=p("div"),u.innerHTML='<img src="/cute.gif" alt="cutbears"/>',h(r,"class","svelte-1sbppzh"),h(c,"type","button"),h(c,"class","button svelte-1sbppzh"),h(i,"type","button"),h(i,"class","button svelte-1sbppzh"),h(n,"class","main svelte-1sbppzh"),h(u,"class","yes svelte-1sbppzh"),R(e,"background-image","url("+it+")"),h(e,"class","svelte-1sbppzh")},m(_,D){W(_,e,D),f(e,n),f(n,r),f(n,s),f(n,o),f(o,l),f(l,c),f(l,a),f(l,i),t[5](i),t[6](n),f(e,m),f(e,u),t[7](u),d||(x=[P(c,"click",t[4]),P(i,"click",q(t[3]))],d=!0)},p:b,i:b,o:b,d(_){_&&S(e),t[5](null),t[6](null),t[7](null),d=!1,E(x)}}}function lt(t,e,n){let r,s,o;function l(){let u=Math.abs(Math.floor(Math.random()*window.innerWidth-95)),d=Math.abs(Math.floor(Math.random()*window.innerHeight-65));n(0,r.style.position="absolute",r),n(0,r.style.left=u+"px",r),n(0,r.style.top=d+"px",r)}function c(){n(1,s.style.display="none",s),n(2,o.style.display="flex",o),n(2,o.style.justifyContent="center",o),n(2,o.style.alignItems="center",o),n(2,o.style.flexDirection="column",o),n(2,o.style.margin="auto",o)}function a(u){k[u?"unshift":"push"](()=>{r=u,n(0,r)})}function i(u){k[u?"unshift":"push"](()=>{s=u,n(1,s)})}function m(u){k[u?"unshift":"push"](()=>{o=u,n(2,o)})}return[r,s,o,l,c,a,i,m]}class ct extends ot{constructor(e){super(),rt(this,e,lt,ut,H,{})}}new ct({target:document.getElementById("app")});
