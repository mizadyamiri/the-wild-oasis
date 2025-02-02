import{u as g,a as p,o as x,_ as h,s as l,j as e,r as d,B as j,H as f}from"./index-4abb2cda.js";import{u as y}from"./useMutation-c78d2ea2.js";import{F as v,I as c}from"./Form-5e376b2e.js";import{S as L,L as b}from"./Logo-994f2872.js";import"./iconBase-817fdcd9.js";function w(){const o=g(),s=p(),{mutate:r,isLoading:i}=y({mutationFn:({email:t,password:n})=>x(t,n),onSuccess:t=>{o.setQueryData(["user"],t.user),s("/dashboard",{replace:!0})},onError:t=>{console.log("ERROR",t),h.error("Provided email or password are incorrect")}});return{login:r,isLoading:i}}const S=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`,E=l.label`
  font-weight: 500;
`,F=l.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function u({label:o,error:s,children:r}){return e.jsxs(S,{children:[o&&e.jsx(E,{htmlFor:r.props.id,children:o}),r,s&&e.jsx(F,{children:s})]})}function C(){const[o,s]=d.useState(""),[r,i]=d.useState(""),{login:t,isLoading:n}=w();function m(a){a.preventDefault(),!(!o||!r)&&t({email:o,password:r},{onSettled:()=>{s(""),i("")}})}return e.jsxs(v,{onSubmit:m,children:[e.jsx(u,{label:"Email address",children:e.jsx(c,{type:"email",id:"email",autoComplete:"username",value:o,disabled:n,onChange:a=>s(a.target.value)})}),e.jsx(u,{label:"Password",children:e.jsx(c,{type:"password",id:"password",autoComplete:"current-password",value:r,disabled:n,onChange:a=>i(a.target.value)})}),e.jsx(u,{children:e.jsx(j,{size:"large",disabled:n,children:n?e.jsx(L,{}):"Login"})})]})}const R=l.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;function I(){return e.jsxs(R,{children:[e.jsx(b,{}),e.jsx(f,{as:"h4",children:"Log in to your account"}),e.jsx(C,{})]})}export{I as default};
