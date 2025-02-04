import{u as g,a as p,o as x,_ as h,s as l,j as e,r as u,B as j,H as f}from"./index-438dd456.js";import{u as v}from"./useMutation-5e0b73ac.js";import{F as y,I as c}from"./Form-b2b8dfd7.js";import{S as L,L as b}from"./Logo-1305a897.js";import"./iconBase-26a71e31.js";function w(){const o=g(),s=p(),{mutate:r,isLoading:i}=v({mutationFn:({email:t,password:n})=>x(t,n),onSuccess:t=>{o.setQueryData(["user"],t.user),s("/dashboard",{replace:!0})},onError:t=>{console.log("ERROR",t),h.error("Provided email or password are incorrect")}});return{login:r,isLoading:i}}const S=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`,E=l.label`
  font-weight: 500;
`,F=l.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function d({label:o,error:s,children:r}){return e.jsxs(S,{children:[o&&e.jsx(E,{htmlFor:r.props.id,children:o}),r,s&&e.jsx(F,{children:s})]})}function R(){const[o,s]=u.useState("mojtabaEz@felan.com"),[r,i]=u.useState("RNdKM$mivWgQr6X"),{login:t,isLoading:n}=w();function m(a){a.preventDefault(),!(!o||!r)&&t({email:o,password:r},{onSettled:()=>{s(""),i("")}})}return e.jsxs(y,{onSubmit:m,children:[e.jsx(d,{label:"Email address",children:e.jsx(c,{type:"email",id:"email",autoComplete:"username",value:o,disabled:n,onChange:a=>s(a.target.value)})}),e.jsx(d,{label:"Password",children:e.jsx(c,{type:"password",id:"password",autoComplete:"current-password",value:r,disabled:n,onChange:a=>i(a.target.value)})}),e.jsx(d,{children:e.jsx(j,{size:"large",disabled:n,children:n?e.jsx(L,{}):"Login"})})]})}const C=l.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;function D(){return e.jsxs(C,{children:[e.jsx(b,{}),e.jsx(f,{as:"h4",children:"Log in to your account"}),e.jsx(R,{})]})}export{D as default};
