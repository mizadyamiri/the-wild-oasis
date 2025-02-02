import{R as M}from"./index-cab59af1.js";var fe=e=>e.type==="checkbox",ee=e=>e instanceof Date,L=e=>e==null;const Ze=e=>typeof e=="object";var D=e=>!L(e)&&!Array.isArray(e)&&Ze(e)&&!ee(e),gr=e=>D(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,hr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,vr=(e,s)=>e.has(hr(s)),_r=e=>{const s=e.constructor&&e.constructor.prototype;return D(s)&&s.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function R(e){let s;const t=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Te&&(e instanceof Blob||a))&&(t||D(e)))if(s=t?[]:{},!t&&!_r(e))s=e;else for(const l in e)e.hasOwnProperty(l)&&(s[l]=R(e[l]));else return e;return s}var Fe=e=>Array.isArray(e)?e.filter(Boolean):[],w=e=>e===void 0,d=(e,s,t)=>{if(!s||!D(e))return t;const a=Fe(s.split(/[,[\].]+?/)).reduce((l,n)=>L(l)?l:l[n],e);return w(a)||a===e?w(e[s])?t:e[s]:a},W=e=>typeof e=="boolean",pe=e=>/^\w*$/.test(e),er=e=>Fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),V=(e,s,t)=>{let a=-1;const l=pe(s)?[s]:er(s),n=l.length,y=n-1;for(;++a<n;){const h=l[a];let B=t;if(a!==y){const q=e[h];B=D(q)||Array.isArray(q)?q:isNaN(+l[a+1])?{}:[]}if(h==="__proto__"||h==="constructor"||h==="prototype")return;e[h]=B,e=e[h]}return e};const He={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};M.createContext(null);var br=(e,s,t,a=!0)=>{const l={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(l,n,{get:()=>{const y=n;return s._proxyFormState[y]!==P.all&&(s._proxyFormState[y]=!a||P.all),t&&(t[y]=!0),e[y]}});return l},O=e=>D(e)&&!Object.keys(e).length,Fr=(e,s,t,a)=>{t(e);const{name:l,...n}=e;return O(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(y=>s[y]===(!a||P.all))},ge=e=>Array.isArray(e)?e:[e];function Ar(e){const s=M.useRef(e);s.current=e,M.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var $=e=>typeof e=="string",Vr=(e,s,t,a,l)=>$(e)?(a&&s.watch.add(e),d(t,e,l)):Array.isArray(e)?e.map(n=>(a&&s.watch.add(n),d(t,n))):(a&&(s.watchAll=!0),t),xr=(e,s,t,a,l)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:l||!0}}:{},$e=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),je=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const oe=(e,s,t,a)=>{for(const l of t||Object.keys(e)){const n=d(e,l);if(n){const{_f:y,...h}=n;if(y){if(y.refs&&y.refs[0]&&s(y.refs[0],l)&&!a)return!0;if(y.ref&&s(y.ref,y.name)&&!a)return!0;if(oe(h,s))break}else if(D(h)&&oe(h,s))break}}};var wr=(e,s,t)=>{const a=ge(d(e,t));return V(a,"root",s[t]),V(e,t,a),e},Le=e=>e.type==="file",H=e=>typeof e=="function",ve=e=>{if(!Te)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},he=e=>$(e),Oe=e=>e.type==="radio",_e=e=>e instanceof RegExp;const Ke={value:!1,isValid:!1},Ye={value:!0,isValid:!0};var rr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?Ye:{value:e[0].value,isValid:!0}:Ye:Ke}return Ke};const ze={isValid:!1,value:null};var tr=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,ze):ze;function Ge(e,s,t="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||W(e)&&!e)return{type:t,message:he(e)?e:"",ref:s}}var se=e=>D(e)&&!_e(e)?e:{value:e,message:""},Je=async(e,s,t,a,l)=>{const{ref:n,refs:y,required:h,maxLength:B,minLength:q,min:x,max:b,pattern:ce,validate:G,name:C,valueAsNumber:Ae,mount:j,disabled:J}=e._f,F=d(s,C);if(!j||J)return{};const K=y?y[0]:n,Y=_=>{a&&K.reportValidity&&(K.setCustomValidity(W(_)?"":_||""),K.reportValidity())},k={},re=Oe(n),de=fe(n),X=re||de,te=(Ae||Le(n))&&w(n.value)&&w(F)||ve(n)&&n.value===""||F===""||Array.isArray(F)&&!F.length,N=xr.bind(null,C,t,k),ye=(_,A,m,p=z.maxLength,I=z.minLength)=>{const U=_?A:m;k[C]={type:_?p:I,message:U,ref:n,...N(_?p:I,U)}};if(l?!Array.isArray(F)||!F.length:h&&(!X&&(te||L(F))||W(F)&&!F||de&&!rr(y).isValid||re&&!tr(y).isValid)){const{value:_,message:A}=he(h)?{value:!!h,message:h}:se(h);if(_&&(k[C]={type:z.required,message:A,ref:K,...N(z.required,A)},!t))return Y(A),k}if(!te&&(!L(x)||!L(b))){let _,A;const m=se(b),p=se(x);if(!L(F)&&!isNaN(F)){const I=n.valueAsNumber||F&&+F;L(m.value)||(_=I>m.value),L(p.value)||(A=I<p.value)}else{const I=n.valueAsDate||new Date(F),U=ne=>new Date(new Date().toDateString()+" "+ne),ie=n.type=="time",ue=n.type=="week";$(m.value)&&F&&(_=ie?U(F)>U(m.value):ue?F>m.value:I>new Date(m.value)),$(p.value)&&F&&(A=ie?U(F)<U(p.value):ue?F<p.value:I<new Date(p.value))}if((_||A)&&(ye(!!_,m.message,p.message,z.max,z.min),!t))return Y(k[C].message),k}if((B||q)&&!te&&($(F)||l&&Array.isArray(F))){const _=se(B),A=se(q),m=!L(_.value)&&F.length>+_.value,p=!L(A.value)&&F.length<+A.value;if((m||p)&&(ye(m,_.message,A.message),!t))return Y(k[C].message),k}if(ce&&!te&&$(F)){const{value:_,message:A}=se(ce);if(_e(_)&&!F.match(_)&&(k[C]={type:z.pattern,message:A,ref:n,...N(z.pattern,A)},!t))return Y(A),k}if(G){if(H(G)){const _=await G(F,s),A=Ge(_,K);if(A&&(k[C]={...A,...N(z.validate,A.message)},!t))return Y(A.message),k}else if(D(G)){let _={};for(const A in G){if(!O(_)&&!t)break;const m=Ge(await G[A](F,s),K,A);m&&(_={...m,...N(A,m.message)},Y(m.message),t&&(k[C]=_))}if(!O(_)&&(k[C]={ref:K,..._},!t))return k}}return Y(!0),k};function Dr(e,s){const t=s.slice(0,-1).length;let a=0;for(;a<t;)e=w(e)?a++:e[s[a++]];return e}function kr(e){for(const s in e)if(e.hasOwnProperty(s)&&!w(e[s]))return!1;return!0}function E(e,s){const t=Array.isArray(s)?s:pe(s)?[s]:er(s),a=t.length===1?e:Dr(e,t),l=t.length-1,n=t[l];return a&&delete a[n],l!==0&&(D(a)&&O(a)||Array.isArray(a)&&kr(a))&&E(e,t.slice(0,-1)),e}var ke=()=>{let e=[];return{get observers(){return e},next:l=>{for(const n of e)n.next&&n.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(n=>n!==l)}}),unsubscribe:()=>{e=[]}}},Se=e=>L(e)||!Ze(e);function Q(e,s){if(Se(e)||Se(s))return e===s;if(ee(e)&&ee(s))return e.getTime()===s.getTime();const t=Object.keys(e),a=Object.keys(s);if(t.length!==a.length)return!1;for(const l of t){const n=e[l];if(!a.includes(l))return!1;if(l!=="ref"){const y=s[l];if(ee(n)&&ee(y)||D(n)&&D(y)||Array.isArray(n)&&Array.isArray(y)?!Q(n,y):n!==y)return!1}}return!0}var sr=e=>e.type==="select-multiple",mr=e=>Oe(e)||fe(e),me=e=>ve(e)&&e.isConnected,ir=e=>{for(const s in e)if(H(e[s]))return!0;return!1};function be(e,s={}){const t=Array.isArray(e);if(D(e)||t)for(const a in e)Array.isArray(e[a])||D(e[a])&&!ir(e[a])?(s[a]=Array.isArray(e[a])?[]:{},be(e[a],s[a])):L(e[a])||(s[a]=!0);return s}function ur(e,s,t){const a=Array.isArray(e);if(D(e)||a)for(const l in e)Array.isArray(e[l])||D(e[l])&&!ir(e[l])?w(s)||Se(t[l])?t[l]=Array.isArray(e[l])?be(e[l],[]):{...be(e[l])}:ur(e[l],L(s)?{}:s[l],t[l]):t[l]=!Q(e[l],s[l]);return t}var ae=(e,s)=>ur(e,s,be(s)),nr=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:a})=>w(e)?e:s?e===""?NaN:e&&+e:t&&$(e)?new Date(e):a?a(e):e;function Ee(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Le(s)?s.files:Oe(s)?tr(e.refs).value:sr(s)?[...s.selectedOptions].map(({value:t})=>t):fe(s)?rr(e.refs).value:nr(w(s.value)?e.ref.value:s.value,e)}var Er=(e,s,t,a)=>{const l={};for(const n of e){const y=d(s,n);y&&V(l,n,y._f)}return{criteriaMode:t,names:[...e],fields:l,shouldUseNativeValidation:a}},le=e=>w(e)?e:_e(e)?e.source:D(e)?_e(e.value)?e.value.source:e.value:e;const Qe="AsyncFunction";var Sr=e=>!!e&&!!e.validate&&!!(H(e.validate)&&e.validate.constructor.name===Qe||D(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===Qe)),Tr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Xe(e,s,t){const a=d(e,t);if(a||pe(t))return{error:a,name:t};const l=t.split(".");for(;l.length;){const n=l.join("."),y=d(s,n),h=d(e,n);if(y&&!Array.isArray(y)&&t!==n)return{name:t};if(h&&h.type)return{name:n,error:h};l.pop()}return{name:t}}var pr=(e,s,t,a,l)=>l.isOnAll?!1:!t&&l.isOnTouch?!(s||e):(t?a.isOnBlur:l.isOnBlur)?!e:(t?a.isOnChange:l.isOnChange)?e:!0,Lr=(e,s)=>!Fe(d(e,s)).length&&E(e,s);const Or={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function Cr(e={}){let s={...Or,...e},t={submitCount:0,isDirty:!1,isLoading:H(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},a={},l=D(s.defaultValues)||D(s.values)?R(s.defaultValues||s.values)||{}:{},n=s.shouldUnregister?{}:R(l),y={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},B,q=0;const x={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:ke(),array:ke(),state:ke()},ce=$e(s.mode),G=$e(s.reValidateMode),C=s.criteriaMode===P.all,Ae=r=>i=>{clearTimeout(q),q=setTimeout(r,i)},j=async r=>{if(!s.disabled&&(x.isValid||r)){const i=s.resolver?O((await X()).errors):await N(a,!0);i!==t.isValid&&b.state.next({isValid:i})}},J=(r,i)=>{!s.disabled&&(x.isValidating||x.validatingFields)&&((r||Array.from(h.mount)).forEach(u=>{u&&(i?V(t.validatingFields,u,i):E(t.validatingFields,u))}),b.state.next({validatingFields:t.validatingFields,isValidating:!O(t.validatingFields)}))},F=(r,i=[],u,c,f=!0,o=!0)=>{if(c&&u&&!s.disabled){if(y.action=!0,o&&Array.isArray(d(a,r))){const g=u(d(a,r),c.argA,c.argB);f&&V(a,r,g)}if(o&&Array.isArray(d(t.errors,r))){const g=u(d(t.errors,r),c.argA,c.argB);f&&V(t.errors,r,g),Lr(t.errors,r)}if(x.touchedFields&&o&&Array.isArray(d(t.touchedFields,r))){const g=u(d(t.touchedFields,r),c.argA,c.argB);f&&V(t.touchedFields,r,g)}x.dirtyFields&&(t.dirtyFields=ae(l,n)),b.state.next({name:r,isDirty:_(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else V(n,r,i)},K=(r,i)=>{V(t.errors,r,i),b.state.next({errors:t.errors})},Y=r=>{t.errors=r,b.state.next({errors:t.errors,isValid:!1})},k=(r,i,u,c)=>{const f=d(a,r);if(f){const o=d(n,r,w(u)?d(l,r):u);w(o)||c&&c.defaultChecked||i?V(n,r,i?o:Ee(f._f)):p(r,o),y.mount&&j()}},re=(r,i,u,c,f)=>{let o=!1,g=!1;const v={name:r};if(!s.disabled){const S=!!(d(a,r)&&d(a,r)._f&&d(a,r)._f.disabled);if(!u||c){x.isDirty&&(g=t.isDirty,t.isDirty=v.isDirty=_(),o=g!==v.isDirty);const T=S||Q(d(l,r),i);g=!!(!S&&d(t.dirtyFields,r)),T||S?E(t.dirtyFields,r):V(t.dirtyFields,r,!0),v.dirtyFields=t.dirtyFields,o=o||x.dirtyFields&&g!==!T}if(u){const T=d(t.touchedFields,r);T||(V(t.touchedFields,r,u),v.touchedFields=t.touchedFields,o=o||x.touchedFields&&T!==u)}o&&f&&b.state.next(v)}return o?v:{}},de=(r,i,u,c)=>{const f=d(t.errors,r),o=x.isValid&&W(i)&&t.isValid!==i;if(s.delayError&&u?(B=Ae(()=>K(r,u)),B(s.delayError)):(clearTimeout(q),B=null,u?V(t.errors,r,u):E(t.errors,r)),(u?!Q(f,u):f)||!O(c)||o){const g={...c,...o&&W(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...g},b.state.next(g)}},X=async r=>{J(r,!0);const i=await s.resolver(n,s.context,Er(r||h.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return J(r),i},te=async r=>{const{errors:i}=await X(r);if(r)for(const u of r){const c=d(i,u);c?V(t.errors,u,c):E(t.errors,u)}else t.errors=i;return i},N=async(r,i,u={valid:!0})=>{for(const c in r){const f=r[c];if(f){const{_f:o,...g}=f;if(o){const v=h.array.has(o.name),S=f._f&&Sr(f._f);S&&x.validatingFields&&J([c],!0);const T=await Je(f,n,C,s.shouldUseNativeValidation&&!i,v);if(S&&x.validatingFields&&J([c]),T[o.name]&&(u.valid=!1,i))break;!i&&(d(T,o.name)?v?wr(t.errors,T,o.name):V(t.errors,o.name,T[o.name]):E(t.errors,o.name))}!O(g)&&await N(g,i,u)}}return u.valid},ye=()=>{for(const r of h.unMount){const i=d(a,r);i&&(i._f.refs?i._f.refs.every(u=>!me(u)):!me(i._f.ref))&&Ve(r)}h.unMount=new Set},_=(r,i)=>!s.disabled&&(r&&i&&V(n,r,i),!Q(Ce(),l)),A=(r,i,u)=>Vr(r,h,{...y.mount?n:w(i)?l:$(r)?{[r]:i}:i},u,i),m=r=>Fe(d(y.mount?n:l,r,s.shouldUnregister?d(l,r,[]):[])),p=(r,i,u={})=>{const c=d(a,r);let f=i;if(c){const o=c._f;o&&(!o.disabled&&V(n,r,nr(i,o)),f=ve(o.ref)&&L(i)?"":i,sr(o.ref)?[...o.ref.options].forEach(g=>g.selected=f.includes(g.value)):o.refs?fe(o.ref)?o.refs.length>1?o.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(f)?!!f.find(v=>v===g.value):f===g.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(g=>g.checked=g.value===f):Le(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||b.values.next({name:r,values:{...n}})))}(u.shouldDirty||u.shouldTouch)&&re(r,f,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&ne(r)},I=(r,i,u)=>{for(const c in i){const f=i[c],o=`${r}.${c}`,g=d(a,o);(h.array.has(r)||D(f)||g&&!g._f)&&!ee(f)?I(o,f,u):p(o,f,u)}},U=(r,i,u={})=>{const c=d(a,r),f=h.array.has(r),o=R(i);V(n,r,o),f?(b.array.next({name:r,values:{...n}}),(x.isDirty||x.dirtyFields)&&u.shouldDirty&&b.state.next({name:r,dirtyFields:ae(l,n),isDirty:_(r,o)})):c&&!c._f&&!L(o)?I(r,o,u):p(r,o,u),je(r,h)&&b.state.next({...t}),b.values.next({name:y.mount?r:void 0,values:{...n}})},ie=async r=>{y.mount=!0;const i=r.target;let u=i.name,c=!0;const f=d(a,u),o=()=>i.type?Ee(f._f):gr(r),g=v=>{c=Number.isNaN(v)||ee(v)&&isNaN(v.getTime())||Q(v,d(n,u,v))};if(f){let v,S;const T=o(),Z=r.type===He.BLUR||r.type===He.FOCUS_OUT,cr=!Tr(f._f)&&!s.resolver&&!d(t.errors,u)&&!f._f.deps||pr(Z,d(t.touchedFields,u),t.isSubmitted,G,ce),we=je(u,h,Z);V(n,u,T),Z?(f._f.onBlur&&f._f.onBlur(r),B&&B(0)):f._f.onChange&&f._f.onChange(r);const De=re(u,T,Z,!1),dr=!O(De)||we;if(!Z&&b.values.next({name:u,type:r.type,values:{...n}}),cr)return x.isValid&&(s.mode==="onBlur"?Z&&j():j()),dr&&b.state.next({name:u,...we?{}:De});if(!Z&&we&&b.state.next({...t}),s.resolver){const{errors:qe}=await X([u]);if(g(T),c){const yr=Xe(t.errors,a,u),We=Xe(qe,a,yr.name||u);v=We.error,u=We.name,S=O(qe)}}else J([u],!0),v=(await Je(f,n,C,s.shouldUseNativeValidation))[u],J([u]),g(T),c&&(v?S=!1:x.isValid&&(S=await N(a,!0)));c&&(f._f.deps&&ne(f._f.deps),de(u,S,v,De))}},ue=(r,i)=>{if(d(t.errors,i)&&r.focus)return r.focus(),1},ne=async(r,i={})=>{let u,c;const f=ge(r);if(s.resolver){const o=await te(w(r)?r:f);u=O(o),c=r?!f.some(g=>d(o,g)):u}else r?(c=(await Promise.all(f.map(async o=>{const g=d(a,o);return await N(g&&g._f?{[o]:g}:g)}))).every(Boolean),!(!c&&!t.isValid)&&j()):c=u=await N(a);return b.state.next({...!$(r)||x.isValid&&u!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:u}:{},errors:t.errors}),i.shouldFocus&&!c&&oe(a,ue,r?f:h.mount),c},Ce=r=>{const i={...y.mount?n:l};return w(r)?i:$(r)?d(i,r):r.map(u=>d(i,u))},Ne=(r,i)=>({invalid:!!d((i||t).errors,r),isDirty:!!d((i||t).dirtyFields,r),error:d((i||t).errors,r),isValidating:!!d(t.validatingFields,r),isTouched:!!d((i||t).touchedFields,r)}),ar=r=>{r&&ge(r).forEach(i=>E(t.errors,i)),b.state.next({errors:r?t.errors:{}})},Ue=(r,i,u)=>{const c=(d(a,r,{_f:{}})._f||{}).ref,f=d(t.errors,r)||{},{ref:o,message:g,type:v,...S}=f;V(t.errors,r,{...S,...i,ref:c}),b.state.next({name:r,errors:t.errors,isValid:!1}),u&&u.shouldFocus&&c&&c.focus&&c.focus()},lr=(r,i)=>H(r)?b.values.subscribe({next:u=>r(A(void 0,i),u)}):A(r,i,!0),Ve=(r,i={})=>{for(const u of r?ge(r):h.mount)h.mount.delete(u),h.array.delete(u),i.keepValue||(E(a,u),E(n,u)),!i.keepError&&E(t.errors,u),!i.keepDirty&&E(t.dirtyFields,u),!i.keepTouched&&E(t.touchedFields,u),!i.keepIsValidating&&E(t.validatingFields,u),!s.shouldUnregister&&!i.keepDefaultValue&&E(l,u);b.values.next({values:{...n}}),b.state.next({...t,...i.keepDirty?{isDirty:_()}:{}}),!i.keepIsValid&&j()},Re=({disabled:r,name:i,field:u,fields:c,value:f})=>{if(W(r)&&y.mount||r){const o=r?void 0:w(f)?Ee(u?u._f:d(c,i)._f):f;(r||!r&&!w(o))&&V(n,i,o),re(i,o,!1,!1,!0)}},xe=(r,i={})=>{let u=d(a,r);const c=W(i.disabled)||W(s.disabled);return V(a,r,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:r}},name:r,mount:!0,...i}}),h.mount.add(r),u?Re({field:u,disabled:W(i.disabled)?i.disabled:s.disabled,name:r,value:i.value}):k(r,!0,i.value),{...c?{disabled:i.disabled||s.disabled}:{},...s.progressive?{required:!!i.required,min:le(i.min),max:le(i.max),minLength:le(i.minLength),maxLength:le(i.maxLength),pattern:le(i.pattern)}:{},name:r,onChange:ie,onBlur:ie,ref:f=>{if(f){xe(r,i),u=d(a,r);const o=w(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,g=mr(o),v=u._f.refs||[];if(g?v.find(S=>S===o):o===u._f.ref)return;V(a,r,{_f:{...u._f,...g?{refs:[...v.filter(me),o,...Array.isArray(d(l,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),k(r,!1,void 0,o)}else u=d(a,r,{}),u._f&&(u._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(vr(h.array,r)&&y.action)&&h.unMount.add(r)}}},Me=()=>s.shouldFocusError&&oe(a,ue,h.mount),or=r=>{W(r)&&(b.state.next({disabled:r}),oe(a,(i,u)=>{const c=d(a,u);c&&(i.disabled=c._f.disabled||r,Array.isArray(c._f.refs)&&c._f.refs.forEach(f=>{f.disabled=c._f.disabled||r}))},0,!1))},Be=(r,i)=>async u=>{let c;if(u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist()),s.disabled){i&&await i({...t.errors},u);return}let f=R(n);if(b.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:g}=await X();t.errors=o,f=g}else await N(a);if(E(t.errors,"root"),O(t.errors)){b.state.next({errors:{}});try{await r(f,u)}catch(o){c=o}}else i&&await i({...t.errors},u),Me(),setTimeout(Me);if(b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(t.errors)&&!c,submitCount:t.submitCount+1,errors:t.errors}),c)throw c},fr=(r,i={})=>{d(a,r)&&(w(i.defaultValue)?U(r,R(d(l,r))):(U(r,i.defaultValue),V(l,r,R(i.defaultValue))),i.keepTouched||E(t.touchedFields,r),i.keepDirty||(E(t.dirtyFields,r),t.isDirty=i.defaultValue?_(r,R(d(l,r))):_()),i.keepError||(E(t.errors,r),x.isValid&&j()),b.state.next({...t}))},Ie=(r,i={})=>{const u=r?R(r):l,c=R(u),f=O(r),o=f?l:c;if(i.keepDefaultValues||(l=u),!i.keepValues){if(i.keepDirtyValues){const g=new Set([...h.mount,...Object.keys(ae(l,n))]);for(const v of Array.from(g))d(t.dirtyFields,v)?V(o,v,d(n,v)):U(v,d(o,v))}else{if(Te&&w(r))for(const g of h.mount){const v=d(a,g);if(v&&v._f){const S=Array.isArray(v._f.refs)?v._f.refs[0]:v._f.ref;if(ve(S)){const T=S.closest("form");if(T){T.reset();break}}}}a={}}n=s.shouldUnregister?i.keepDefaultValues?R(l):{}:R(o),b.array.next({values:{...o}}),b.values.next({values:{...o}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!x.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!s.shouldUnregister,b.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:f?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!Q(r,l)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:f?{}:i.keepDirtyValues?i.keepDefaultValues&&n?ae(l,n):t.dirtyFields:i.keepDefaultValues&&r?ae(l,r):i.keepDirty?t.dirtyFields:{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Pe=(r,i)=>Ie(H(r)?r(n):r,i);return{control:{register:xe,unregister:Ve,getFieldState:Ne,handleSubmit:Be,setError:Ue,_executeSchema:X,_getWatch:A,_getDirty:_,_updateValid:j,_removeUnmounted:ye,_updateFieldArray:F,_updateDisabledField:Re,_getFieldArray:m,_reset:Ie,_resetDefaultValues:()=>H(s.defaultValues)&&s.defaultValues().then(r=>{Pe(r,s.resetOptions),b.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:or,_subjects:b,_proxyFormState:x,_setErrors:Y,get _fields(){return a},get _formValues(){return n},get _state(){return y},set _state(r){y=r},get _defaultValues(){return l},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ne,register:xe,handleSubmit:Be,watch:lr,setValue:U,getValues:Ce,reset:Pe,resetField:fr,clearErrors:ar,unregister:Ve,setError:Ue,setFocus:(r,i={})=>{const u=d(a,r),c=u&&u._f;if(c){const f=c.refs?c.refs[0]:c.ref;f.focus&&(f.focus(),i.shouldSelect&&H(f.select)&&f.select())}},getFieldState:Ne}}function Br(e={}){const s=M.useRef(void 0),t=M.useRef(void 0),[a,l]=M.useState({isDirty:!1,isValidating:!1,isLoading:H(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:H(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Cr(e),formState:a});const n=s.current.control;return n._options=e,Ar({subject:n._subjects.state,next:y=>{Fr(y,n._proxyFormState,n._updateFormState,!0)&&l({...n._formState})}}),M.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),M.useEffect(()=>{if(n._proxyFormState.isDirty){const y=n._getDirty();y!==a.isDirty&&n._subjects.state.next({isDirty:y})}},[n,a.isDirty]),M.useEffect(()=>{e.values&&!Q(e.values,t.current)?(n._reset(e.values,n._options.resetOptions),t.current=e.values,l(y=>({...y}))):n._resetDefaultValues()},[e.values,n]),M.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),M.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),M.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),s.current.formState=br(a,n),s.current}export{Br as u};
