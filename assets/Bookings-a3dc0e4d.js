import{s as c,a as P,j as e,u as M,f as S,g as T,S as D,H as q}from"./index-4abb2cda.js";import{u as F,T as H}from"./useCheckout-5b832d89.js";import{u as A}from"./useDeleteBooking-0111a421.js";import{o as R,l as E,p as N,q as O,r as z,u as L,v as Q,w as $}from"./helpers-0e9b145c.js";import{T as u,M as l,a as G,S as K}from"./TableOperations-8a234292.js";import{M as y,C as U,E as _}from"./Empty-330f4f95.js";import{i as V}from"./isToday-3134cd30.js";import{f as k,c as b,P as f}from"./apiBookings-6e9d72e2.js";import{F as W}from"./Filter-d83ced50.js";import{R as Z}from"./Row-4be554bb.js";import"./useMutation-c78d2ea2.js";import"./iconBase-817fdcd9.js";import"./isSameDay-d44129be.js";const J=c.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`,w=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`,X=c.div`
  font-family: "Sono";
  font-weight: 500;
`;function Y({booking:{id:n,created_at:t,startDate:o,endDate:s,numNights:a,numGuests:h,totalPrice:d,status:r,guests:{fullName:i,email:m},cabins:{name:x}}}){const{checkout:g,isCheckOut:p}=F(),{deleteBooking:j,isDeletingBooking:ie}=A(),v=P(),B={unconfirmed:"blue","checked-in":"green","checked-out":"silver"};return e.jsxs(u.Row,{children:[e.jsx(J,{children:x}),e.jsxs(w,{children:[e.jsx("span",{children:i}),e.jsx("span",{children:m})]}),e.jsxs(w,{children:[e.jsxs("span",{children:[V(new Date(o))?"Today":R(o)," ","→ ",a," night stay"]}),e.jsxs("span",{children:[k(new Date(o),"MMM dd yyyy")," —"," ",k(new Date(s),"MMM dd yyyy")]})]}),e.jsx(H,{type:B[r],children:r.replace("-"," ")}),e.jsx(X,{children:E(d)}),e.jsxs(y,{children:[e.jsxs(l.Menu,{children:[e.jsx(l.Toggle,{id:n}),e.jsxs(l.List,{id:n,children:[e.jsx(l.Button,{icon:e.jsx(N,{}),onClick:()=>v(`/bookings/${n}`),children:"See details"}),r==="unconfirmed"&&e.jsx(l.Button,{icon:e.jsx(O,{}),onClick:()=>v(`/checkin/${n}`),children:"Check in"}),r==="checked-in"&&e.jsx(l.Button,{icon:e.jsx(z,{}),onClick:()=>g(n),disabled:p,children:"Check out"}),e.jsx(y.Open,{opens:"delete",children:e.jsx(l.Button,{icon:e.jsx(L,{}),children:"Delete booking"})})]})]}),e.jsx(y.Window,{name:"delete",children:e.jsx(U,{resourceName:"booking",onConfirm:()=>j(n)})})]})]})}function I(){const n=M(),[t]=S(),o=t.get("status"),s=!o||o==="all"?null:{field:"status",value:o},a=t.get("sortBy")||"startDate-desc",[h,d]=a.split("-"),r={field:h,direction:d},i=t.get("page")?+t.get("page"):1,{isLoading:m,data:{data:x,count:g}={},error:p}=T({queryKey:["bookings",s,r,i],queryFn:()=>b({filter:s,sortBy:r,page:i})}),j=Math.ceil(g/f);return i<j&&n.prefetchQuery({queryKey:["bookings",s,r,i+1],queryFn:()=>b({filter:s,sortBy:r,page:i+1})}),i>1&&n.prefetchQuery({queryKey:["bookings",s,r,i-1],queryFn:()=>b({filter:s,sortBy:r,page:i-1})}),{bookings:x,count:g,isLoading:m,error:p}}const ee=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,se=c.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`,ne=c.div`
  display: flex;
  gap: 0.6rem;
`,C=c.button`
  background-color: ${n=>n.active?" var(--color-brand-600)":"var(--color-grey-50)"};
  color: ${n=>n.active?" var(--color-brand-50)":"inherit"};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;function re({count:n}){const[t,o]=S(),s=t.get("page")?+t.get("page"):1,a=Math.ceil(n/f);function h(){const r=s===a?s:s+1;t.set("page",r),o(t)}function d(){const r=s===1?s:s-1;t.set("page",r),o(t)}return a<=1?null:e.jsxs(ee,{children:[e.jsxs(se,{children:["Showing ",e.jsx("span",{children:(s-1)*f+1})," to"," ",e.jsxs("span",{children:[s===a?n:s*f," "]}),"of ",e.jsx("span",{children:n})," results."]}),e.jsxs(ne,{children:[e.jsxs(C,{onClick:d,disabled:s===1,children:[e.jsx(Q,{})," ",e.jsx("span",{children:"Previous"})]}),e.jsxs(C,{onClick:h,disabled:s===a,children:[e.jsx("span",{children:"Next"}),e.jsx($,{})]})]})]})}function te(){const{bookings:n,isLoading:t,count:o}=I();return t?e.jsx(D,{}):n.length?e.jsx(l,{children:e.jsxs(u,{columns:"0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem",children:[e.jsxs(u.Header,{children:[e.jsx("div",{children:"Cabin"}),e.jsx("div",{children:"Guest"}),e.jsx("div",{children:"Dates"}),e.jsx("div",{children:"Status"}),e.jsx("div",{children:"Amount"}),e.jsx("div",{})]}),e.jsx(u.Body,{data:n,render:s=>e.jsx(Y,{booking:s},s.id)}),e.jsx(u.Footer,{children:e.jsx(re,{count:o})})]})}):e.jsx(_,{resource:"bookings"})}function oe(){return e.jsxs(G,{children:[e.jsx(W,{filterField:"status",options:[{value:"all",lable:"All"},{value:"checked-out",lable:"Checked out"},{value:"checked-in",lable:"Checked in"},{value:"unconfirmed",lable:"Unconfirmed"}]}),e.jsx(K,{options:[{value:"startDate-desc",lable:"Sort by date (recent first)"},{value:"startDate-asc",lable:"Sort by date (earlier first)"},{value:"totalPrice-desc",lable:"Sort by amount (high first)"},{value:"totalPrice-asc",lable:"Sort by amount (low first)"}]})]})}function be(){return e.jsxs(e.Fragment,{children:[e.jsxs(Z,{type:"horizontal",children:[e.jsx(q,{as:"h1",children:"All bookings"}),e.jsx(oe,{})]}),e.jsx(te,{})]})}export{be as default};
