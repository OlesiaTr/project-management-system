"use strict";(self.webpackChunkproject_management_system=self.webpackChunkproject_management_system||[]).push([[2547],{2547:(O,v,E)=>{E.r(v),E.d(v,{startTapClick:()=>I});var u=E(9397);const I=s=>{let e,p,c,o=10*-m,r=0;const P=s.getBoolean("animated",!0)&&s.getBoolean("rippleEffect",!0),f=new WeakMap,L=t=>{o=(0,u.v)(t),R(t)},A=()=>{c&&clearTimeout(c),c=void 0,e&&(b(!1),e=void 0)},D=t=>{e||w(k(t),t)},R=t=>{w(void 0,t)},w=(t,n)=>{if(t&&t===e)return;c&&clearTimeout(c),c=void 0;const{x:d,y:a}=(0,u.p)(n);if(e){if(f.has(e))throw new Error("internal error");e.classList.contains(l)||g(e,d,a),b(!0)}if(t){const S=f.get(t);S&&(clearTimeout(S),f.delete(t)),t.classList.remove(l);const _=()=>{g(t,d,a),c=void 0};h(t)?_():c=setTimeout(_,y)}e=t},g=(t,n,d)=>{if(r=Date.now(),t.classList.add(l),!P)return;const a=M(t);null!==a&&(C(),p=a.addRipple(n,d))},C=()=>{void 0!==p&&(p.then(t=>t()),p=void 0)},b=t=>{C();const n=e;if(!n)return;const d=T-Date.now()+r;if(t&&d>0&&!h(n)){const a=setTimeout(()=>{n.classList.remove(l),f.delete(n)},T);f.set(n,a)}else n.classList.remove(l)},i=document;i.addEventListener("ionGestureCaptured",A),i.addEventListener("touchstart",t=>{o=(0,u.v)(t),D(t)},!0),i.addEventListener("touchcancel",L,!0),i.addEventListener("touchend",L,!0),i.addEventListener("pointercancel",A,!0),i.addEventListener("mousedown",t=>{if(2===t.button)return;const n=(0,u.v)(t)-m;o<n&&D(t)},!0),i.addEventListener("mouseup",t=>{const n=(0,u.v)(t)-m;o<n&&R(t)},!0)},k=s=>{if(void 0===s.composedPath)return s.target.closest(".ion-activatable");{const o=s.composedPath();for(let r=0;r<o.length-2;r++){const e=o[r];if(!(e instanceof ShadowRoot)&&e.classList.contains("ion-activatable"))return e}}},h=s=>s.classList.contains("ion-activatable-instant"),M=s=>{if(s.shadowRoot){const o=s.shadowRoot.querySelector("ion-ripple-effect");if(o)return o}return s.querySelector("ion-ripple-effect")},l="ion-activated",y=100,T=150,m=2500}}]);