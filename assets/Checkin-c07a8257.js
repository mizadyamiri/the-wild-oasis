import{s as C,j as e,u as F,a as N,_ as x,r as u,S as R,H as g,B as p}from"./index-cab59af1.js";import{u as z,B as G,a as H,b as M}from"./ButtonText-667592a1.js";import{R as b}from"./Row-bda89bde.js";import{u as Q}from"./useMoveBack-9525ecbe.js";import{l as h}from"./helpers-8b07904d.js";import{u as _}from"./apiBookings-8f843812.js";import{u as q}from"./useMutation-b62fbd9b.js";import{a as A}from"./useSettings-90a1d175.js";import"./Flag-8fae4170.js";import"./isToday-3d4d0b36.js";import"./isSameDay-888f4dbf.js";import"./iconBase-62ef8db6.js";const D=C.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;function B({checked:s,onChange:o,disabled:t=!1,id:i,children:r}){return e.jsxs(D,{children:[e.jsx("input",{type:"checkbox",id:i,checked:s,onChange:o,disabled:t}),e.jsx("label",{htmlFor:t?"":i,children:r})]})}function T(){const s=F(),o=N(),{mutate:t,isLoading:i}=q({mutationFn:({bookingId:r,breakfast:c})=>_(r,{status:"checked-in",isPaid:!0,...c}),onSuccess:r=>{x.success(`Booking #${r.id} successfully checked in`),s.invalidateQueries({active:!0}),o("/")},onError:()=>x.error("there was an error while checking in")});return{checkin:t,isCheckingIn:i}}const j=C.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;function W(){const[s,o]=u.useState(!1),[t,i]=u.useState(!1),{booking:r,isLoading:c,error:y}=z(),{settings:v,isLoading:P}=A();u.useEffect(()=>o((r==null?void 0:r.isPaid)??!1),[r]);const f=Q(),{checkin:k,isCheckingIn:m}=T();if(c||P)return e.jsx(R,{});if(y)return e.jsx(b,{type:"horizontal",children:e.jsx(g,{as:"h1",children:"booking not found 😖"})});const{id:n,guests:S,totalPrice:d,numGuests:w,hasBreakfast:E,numNights:I}=r,a=v.breakfastPrice*I*w;function L(){s&&k(t?{bookingId:n,breakfast:{hasBreakfast:!0,extrasPrice:a,totalPrice:d+a}}:{bookingId:n,breakfast:{}})}return e.jsxs(e.Fragment,{children:[e.jsxs(b,{type:"horizontal",children:[e.jsxs(g,{as:"h1",children:["Check in booking #",n]}),e.jsx(G,{onClick:f,children:"← Back"})]}),e.jsx(H,{booking:r}),!E&&e.jsx(j,{children:e.jsxs(B,{checked:t,onChange:()=>{i(l=>!l),o(!1)},children:["Want to add breakfast for ",h(a)," ?"]})}),e.jsx(j,{children:e.jsxs(B,{checked:s,onChange:()=>o(l=>!l),disabled:s||m,id:"confirm",children:["I confirm that ",S.fullName," has paid the total amout of"," ",t?h(d+a):h(d),"."]})}),e.jsxs(M,{children:[e.jsxs(p,{onClick:L,disabled:!s||m,children:["Check in booking #",n]}),e.jsx(p,{variation:"secondary",onClick:f,children:"Back"})]})]})}function te(){return e.jsx(W,{})}export{te as default};
