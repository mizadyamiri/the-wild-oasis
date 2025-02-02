import{s as p,a as g,j as e,S as h,H as x,B as n}from"./index-cab59af1.js";import{u as j}from"./useDeleteBooking-beddaf48.js";import{u as B}from"./useMoveBack-9525ecbe.js";import{u as f,B as C,a as b,b as v}from"./ButtonText-667592a1.js";import{u as y,T as D}from"./useCheckout-edfa00b5.js";import{R as T}from"./Row-bda89bde.js";import{E,M as t,C as H}from"./Empty-da7425d2.js";import"./apiBookings-8f843812.js";import"./helpers-8b07904d.js";import"./iconBase-62ef8db6.js";import"./useMutation-b62fbd9b.js";import"./Flag-8fae4170.js";import"./isToday-3d4d0b36.js";import"./isSameDay-888f4dbf.js";const M=p.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;function N(){const{booking:s,isLoading:d}=f(),{checkout:l,isCheckOut:u}=y(),{deleteBooking:m,isDeletingBooking:r}=j(),a=B(),c=g(),k={unconfirmed:"blue","checked-in":"green","checked-out":"silver"};if(d|r)return e.jsx(h,{});if(!s)return e.jsx(E,{resource:"booking"});const{status:o,id:i}=s;return e.jsxs(e.Fragment,{children:[e.jsxs(T,{type:"horizontal",children:[e.jsxs(M,{children:[e.jsxs(x,{as:"h1",children:["Booking #",i]}),e.jsx(D,{type:k[o],children:o.replace("-"," ")})]}),e.jsx(C,{onClick:a,children:"← Back"})]}),e.jsx(b,{booking:s}),e.jsxs(v,{children:[o==="unconfirmed"&&e.jsx(n,{onClick:()=>c(`/checkin/${i}`),children:"Check in"}),o==="checked-in"&&e.jsx(n,{onClick:()=>l(i),disabled:u,children:"Check out"}),e.jsxs(t,{children:[e.jsx(t.Open,{opens:"delete",children:e.jsx(n,{variation:"danger",children:"Delete booking"})}),e.jsx(t.Window,{name:"delete",children:e.jsx(H,{resourceName:"booking",disabled:r,onConfirm:()=>m(i,{onSuccess:()=>c("/bookings")})})})]}),e.jsx(n,{variation:"secondary",onClick:a,children:"Back"})]})]})}function K(){return e.jsx(N,{})}export{K as default};
