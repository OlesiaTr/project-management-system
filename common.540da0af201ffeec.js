"use strict";(self.webpackChunkproject_management_system=self.webpackChunkproject_management_system||[]).push([[8592],{6022:(C,w,v)=>{v.d(w,{c:()=>a});var h=v(9816),m=v(7864),l=v(1898);const a=(s,n)=>{let e,t;const d=(r,g,p)=>{if(typeof document>"u")return;const _=document.elementFromPoint(r,g);_&&n(_)?_!==e&&(i(),u(_,p)):i()},u=(r,g)=>{e=r,t||(t=e);const p=e;(0,h.w)(()=>p.classList.add("ion-activated")),g()},i=(r=!1)=>{if(!e)return;const g=e;(0,h.w)(()=>g.classList.remove("ion-activated")),r&&t!==e&&e.click(),e=void 0};return(0,l.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>d(r.currentX,r.currentY,m.a),onMove:r=>d(r.currentX,r.currentY,m.b),onEnd:()=>{i(!0),(0,m.h)(),t=void 0}})}},3982:(C,w,v)=>{v.d(w,{E:()=>u,a:()=>h});const h=i=>{try{if(i instanceof e)return i.value;if(!a()||"string"!=typeof i||""===i)return i;if(i.includes("onload="))return"";const r=document.createDocumentFragment(),g=document.createElement("div");r.appendChild(g),g.innerHTML=i,n.forEach(c=>{const f=r.querySelectorAll(c);for(let o=f.length-1;o>=0;o--){const E=f[o];E.parentNode?E.parentNode.removeChild(E):r.removeChild(E);const M=l(E);for(let L=0;L<M.length;L++)m(M[L])}});const p=l(r);for(let c=0;c<p.length;c++)m(p[c]);const _=document.createElement("div");_.appendChild(r);const y=_.querySelector("div");return null!==y?y.innerHTML:_.innerHTML}catch(r){return console.error(r),""}},m=i=>{if(i.nodeType&&1!==i.nodeType)return;if(typeof NamedNodeMap<"u"&&!(i.attributes instanceof NamedNodeMap))return void i.remove();for(let g=i.attributes.length-1;g>=0;g--){const p=i.attributes.item(g),_=p.name;if(!s.includes(_.toLowerCase())){i.removeAttribute(_);continue}const y=p.value,c=i[_];(null!=y&&y.toLowerCase().includes("javascript:")||null!=c&&c.toLowerCase().includes("javascript:"))&&i.removeAttribute(_)}const r=l(i);for(let g=0;g<r.length;g++)m(r[g])},l=i=>null!=i.children?i.children:i.childNodes,a=()=>{var i;const g=null===(i=window?.Ionic)||void 0===i?void 0:i.config;return!g||(g.get?g.get("sanitizerEnabled",!0):!0===g.sanitizerEnabled||void 0===g.sanitizerEnabled)},s=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"];class e{constructor(r){this.value=r}}const u=!1},2225:(C,w,v)=>{v.d(w,{g:()=>h});const h=(n,e,t,d,u)=>l(n[1],e[1],t[1],d[1],u).map(i=>m(n[0],e[0],t[0],d[0],i)),m=(n,e,t,d,u)=>u*(3*e*Math.pow(u-1,2)+u*(-3*t*u+3*t+d*u))-n*Math.pow(u-1,3),l=(n,e,t,d,u)=>s((d-=u)-3*(t-=u)+3*(e-=u)-(n-=u),3*t-6*e+3*n,3*e-3*n,n).filter(r=>r>=0&&r<=1),s=(n,e,t,d)=>{if(0===n)return((n,e,t)=>{const d=e*e-4*n*t;return d<0?[]:[(-e+Math.sqrt(d))/(2*n),(-e-Math.sqrt(d))/(2*n)]})(e,t,d);const u=(3*(t/=n)-(e/=n)*e)/3,i=(2*e*e*e-9*e*t+27*(d/=n))/27;if(0===u)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-u),-Math.sqrt(-u)];const r=Math.pow(i/2,2)+Math.pow(u/3,3);if(0===r)return[Math.pow(i/2,.5)-e/3];if(r>0)return[Math.pow(-i/2+Math.sqrt(r),1/3)-Math.pow(i/2+Math.sqrt(r),1/3)-e/3];const g=Math.sqrt(Math.pow(-u/3,3)),p=Math.acos(-i/(2*Math.sqrt(Math.pow(-u/3,3)))),_=2*Math.pow(g,1/3);return[_*Math.cos(p/3)-e/3,_*Math.cos((p+2*Math.PI)/3)-e/3,_*Math.cos((p+4*Math.PI)/3)-e/3]}},5062:(C,w,v)=>{v.d(w,{i:()=>h});const h=m=>m&&""!==m.dir?"rtl"===m.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},6602:(C,w,v)=>{v.r(w),v.d(w,{startFocusVisible:()=>a});const h="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],a=s=>{let n=[],e=!0;const t=s?s.shadowRoot:document,d=s||document.body,u=y=>{n.forEach(c=>c.classList.remove(h)),y.forEach(c=>c.classList.add(h)),n=y},i=()=>{e=!1,u([])},r=y=>{e=l.includes(y.key),e||u([])},g=y=>{if(e&&void 0!==y.composedPath){const c=y.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));u(c)}},p=()=>{t.activeElement===d&&u([])};return t.addEventListener("keydown",r),t.addEventListener("focusin",g),t.addEventListener("focusout",p),t.addEventListener("touchstart",i),t.addEventListener("mousedown",i),{destroy:()=>{t.removeEventListener("keydown",r),t.removeEventListener("focusin",g),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",i),t.removeEventListener("mousedown",i)},setFocus:u}}},2509:(C,w,v)=>{v.d(w,{c:()=>h});const h=s=>{const n=s;let e;return{hasLegacyControl:()=>{if(void 0===e){const d=void 0!==n.label||m(n),u=n.hasAttribute("aria-label")||n.hasAttribute("aria-labelledby")&&null===n.shadowRoot;e=!0===n.legacy||!d&&!u}return e}}},m=s=>null!==s.shadowRoot&&!!(l.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||a.includes(s.tagName)&&""!==s.textContent),l=["ION-RANGE"],a=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(C,w,v)=>{v.d(w,{a:()=>a,b:()=>s,c:()=>l,d:()=>e,h:()=>n});const h={getEngine(){var t;const d=window;return d.TapticEngine||(null===(t=d.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&d.Capacitor.Plugins.Haptics},available(){var t;const d=window;return!!this.getEngine()&&("web"!==(null===(t=d.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const d=this.getEngine();if(!d)return;const u=this.isCapacitor()?t.style.toUpperCase():t.style;d.impact({style:u})},notification(t){const d=this.getEngine();if(!d)return;const u=this.isCapacitor()?t.style.toUpperCase():t.style;d.notification({style:u})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},m=()=>h.available(),l=()=>{m()&&h.selection()},a=()=>{m()&&h.selectionStart()},s=()=>{m()&&h.selectionChanged()},n=()=>{m()&&h.selectionEnd()},e=t=>{m()&&h.impact(t)}},7366:(C,w,v)=>{v.d(w,{a:()=>h,b:()=>g,c:()=>e,d:()=>p,e:()=>O,f:()=>n,g:()=>_,h:()=>l,i:()=>m,j:()=>E,k:()=>M,l:()=>t,m:()=>i,n:()=>y,o:()=>u,p:()=>s,q:()=>a,r:()=>o,s:()=>L,t:()=>r,u:()=>c,v:()=>f,w:()=>d});const h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8986:(C,w,v)=>{v.d(w,{I:()=>n,a:()=>u,b:()=>s,c:()=>g,d:()=>_,f:()=>i,g:()=>d,i:()=>t,p:()=>p,r:()=>y,s:()=>r});var h=v(5861),m=v(9397),l=v(1178);const s="ion-content",n=".ion-content-scroll-host",e=`${s}, ${n}`,t=c=>"ION-CONTENT"===c.tagName,d=function(){var c=(0,h.Z)(function*(f){return t(f)?(yield new Promise(o=>(0,m.c)(f,o)),f.getScrollElement()):f});return function(o){return c.apply(this,arguments)}}(),u=c=>c.querySelector(n)||c.querySelector(e),i=c=>c.closest(e),r=(c,f)=>t(c)?c.scrollToTop(f):Promise.resolve(c.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),g=(c,f,o,E)=>t(c)?c.scrollByPoint(f,o,E):Promise.resolve(c.scrollBy({top:o,left:f,behavior:E>0?"smooth":"auto"})),p=c=>(0,l.b)(c,s),_=c=>{if(t(c)){const o=c.scrollY;return c.scrollY=!1,o}return c.style.setProperty("overflow","hidden"),!0},y=(c,f)=>{t(c)?c.scrollY=f:c.style.removeProperty("overflow")}},9240:(C,w,v)=>{v.d(w,{g:()=>m});var h=v(1178);const m=(a,s,n)=>{const e=null==a?0:a.toString().length,t=l(e,s);if(void 0===n)return t;try{return n(e,s)}catch(d){return(0,h.a)("Exception in provided `counterFormatter`.",d),t}},l=(a,s)=>`${a} / ${s}`},5234:(C,w,v)=>{v.r(w),v.d(w,{KEYBOARD_DID_CLOSE:()=>m,KEYBOARD_DID_OPEN:()=>h,copyVisualViewport:()=>f,keyboardDidClose:()=>p,keyboardDidOpen:()=>r,keyboardDidResize:()=>g,resetKeyboardAssist:()=>e,setKeyboardClose:()=>i,setKeyboardOpen:()=>u,startKeyboardAssist:()=>t,trackViewportChanges:()=>c});const h="ionKeyboardDidShow",m="ionKeyboardDidHide";let a={},s={},n=!1;const e=()=>{a={},s={},n=!1},t=o=>{d(o),o.visualViewport&&(s=f(o.visualViewport),o.visualViewport.onresize=()=>{c(o),r()||g(o)?u(o):p(o)&&i(o)})},d=o=>{o.addEventListener("keyboardDidShow",E=>u(o,E)),o.addEventListener("keyboardDidHide",()=>i(o))},u=(o,E)=>{_(o,E),n=!0},i=o=>{y(o),n=!1},r=()=>!n&&a.width===s.width&&(a.height-s.height)*s.scale>150,g=o=>n&&!p(o),p=o=>n&&s.height===o.innerHeight,_=(o,E)=>{const L=new CustomEvent(h,{detail:{keyboardHeight:E?E.keyboardHeight:o.innerHeight-s.height}});o.dispatchEvent(L)},y=o=>{const E=new CustomEvent(m);o.dispatchEvent(E)},c=o=>{a=Object.assign({},s),s=f(o.visualViewport)},f=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},9852:(C,w,v)=>{v.d(w,{c:()=>m});var h=v(3457);const m=l=>{let a,s,n;const e=()=>{a=()=>{n=!0,l&&l(!0)},s=()=>{n=!1,l&&l(!1)},null==h.w||h.w.addEventListener("keyboardWillShow",a),null==h.w||h.w.addEventListener("keyboardWillHide",s)};return e(),{init:e,destroy:()=>{null==h.w||h.w.removeEventListener("keyboardWillShow",a),null==h.w||h.w.removeEventListener("keyboardWillHide",s),a=s=void 0},isKeyboardVisible:()=>n}}},7741:(C,w,v)=>{v.d(w,{S:()=>m});const m={bubbles:{dur:1e3,circles:9,fn:(l,a,s)=>{const n=l*a/s-l+"ms",e=2*Math.PI*a/s;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(l,a,s)=>{const n=a/s,e=l*n-l+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,a)=>({r:6,style:{left:9-9*a+"px","animation-delay":-110*a+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,a,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*a+(a<s/2?180:-180)}deg)`,"animation-delay":l*a/s-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,a,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*a+(a<s/2?180:-180)}deg)`,"animation-delay":l*a/s-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,a,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":l*a/s-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,a,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":l*a/s-l+"ms"}})}}},7135:(C,w,v)=>{v.r(w),v.d(w,{createSwipeBackGesture:()=>s});var h=v(9397),m=v(5062),l=v(1898);v(4349);const s=(n,e,t,d,u)=>{const i=n.ownerDocument.defaultView;let r=(0,m.i)(n);const p=o=>r?-o.deltaX:o.deltaX;return(0,l.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(r=(0,m.i)(n),(o=>{const{startX:M}=o;return r?M>=i.innerWidth-50:M<=50})(o)&&e()),onStart:t,onMove:o=>{const M=p(o)/i.innerWidth;d(M)},onEnd:o=>{const E=p(o),M=i.innerWidth,L=E/M,O=(o=>r?-o.velocityX:o.velocityX)(o),b=O>=0&&(O>.2||E>M/2),x=(b?1-L:L)*M;let D=0;if(x>5){const T=x/Math.abs(O);D=Math.min(T,540)}u(b,L<=0?.01:(0,h.l)(0,L,.9999),D)}})}}}]);