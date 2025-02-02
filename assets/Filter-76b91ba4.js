import{s as t,A as n,f as i,j as s}from"./index-cab59af1.js";const u=t.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`,v=t.button`
  background-color: var(--color-grey-0);
  border: none;

  ${e=>e.active&&n`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;function g({filterField:e,options:o}){const[a,l]=i(),c=a.get(e)||o[0].value;function d(r){a.set(e,r),a.get("page")&&a.set("page",1),l(a)}return s.jsx(u,{children:o.map(r=>s.jsx(v,{onClick:()=>d(r.value),active:r.value===c,children:r.lable},r.value))})}export{g as F};
