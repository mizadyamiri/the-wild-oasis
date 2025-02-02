import{r as s,s as a,j as r,k as u,H as m,B as l}from"./index-04b7707c.js";import{B as p}from"./helpers-ae8581a2.js";function f(e,n=!0){const o=s.useRef();return s.useEffect(()=>{const t=i=>{o.current&&!o.current.contains(i.target)&&e()};return document.addEventListener("click",t,n),()=>document.removeEventListener("click",t,n)},[e,n]),o}const x=a.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`,h=a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`,v=a.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`,c=s.createContext();function d({children:e}){const[n,o]=s.useState(""),t=()=>o(""),i=o;return r.jsx(c.Provider,{value:{openName:n,close:t,open:i},children:e})}function g({children:e,opens:n}){const{open:o}=s.useContext(c);return s.cloneElement(e,{onClick:()=>o(n)})}function b({children:e,name:n}){const{openName:o,close:t}=s.useContext(c),i=f(t);return n!==o?null:u.createPortal(r.jsx(h,{children:r.jsxs(x,{ref:i,children:[r.jsx(v,{onClick:t,children:r.jsx(p,{})}),r.jsx("div",{children:s.cloneElement(e,{onCloseModal:t})})]})}),document.body)}d.Open=g;d.Window=b;const y=a.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;function C({resourceName:e,onConfirm:n,disabled:o,onCloseModal:t}){return r.jsxs(y,{children:[r.jsxs(m,{as:"h3",children:["Delete ",e]}),r.jsxs("p",{children:["Are you sure you want to delete this ",e," permanently? This action cannot be undone."]}),r.jsxs("div",{children:[r.jsx(l,{onClick:t,variation:"secondary",disabled:o,children:"Cancel"}),r.jsx(l,{onClick:n,variation:"danger",disabled:o,children:"Delete"})]})]})}function E({resource:e}){return r.jsxs("p",{children:["No ",e," could be found."]})}export{C,E,d as M,f as u};
