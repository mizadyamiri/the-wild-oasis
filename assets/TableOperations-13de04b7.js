import{s,r as i,j as r,k as x,f as y}from"./index-b1bbfbe0.js";import{z as f,A as v}from"./helpers-23771c98.js";import{u as b}from"./Empty-caabc2a7.js";const w=s.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`,h=s.div`
  display: grid;
  grid-template-columns: ${e=>e.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`,j=s(h)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`,S=s(h)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`,C=s.section`
  margin: 0.4rem 0;
`,k=s.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`,B=s.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`,p=i.createContext();function u({columns:e,children:o}){return r.jsx(p.Provider,{value:{columns:e},children:r.jsx(w,{role:"table",children:o})})}function P({children:e}){const{columns:o}=i.useContext(p);return r.jsx(j,{role:"row",columns:o,as:"header",children:e})}function T({children:e}){const{columns:o}=i.useContext(p);return r.jsx(S,{role:"row",columns:o,children:e})}function E({data:e,render:o}){return e.length===0?r.jsx(B,{children:"No data to show"}):r.jsx(C,{children:e.map(o)})}u.Header=P;u.Row=T;u.Body=E;u.Footer=k;const R=s.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,z=s.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`,L=s.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${e=>e.position.x}px;
  top: ${e=>e.position.y}px;
`,M=s.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`,g=i.createContext();function m({children:e}){const[o,n]=i.useState(""),[a,t]=i.useState(null),l=()=>n(""),c=n;return r.jsx(g.Provider,{value:{openId:o,close:l,open:c,position:a,setPosition:t},children:e})}function H({id:e}){const{openId:o,close:n,open:a,setPosition:t}=i.useContext(g);function l(c){c.stopPropagation();const d=c.target.closest("button").getBoundingClientRect();t({x:window.innerWidth-d.width-d.x,y:d.y+d.height+8}),o===""||o!==e?a(e):n()}return r.jsx(z,{onClick:l,children:r.jsx(f,{})})}function I({children:e,id:o}){const{openId:n,position:a,close:t}=i.useContext(g),l=b(t,!1);return i.useEffect(()=>{const c=v(t,1e3);return document.querySelector("main").addEventListener("scroll",c),()=>document.querySelector("main").removeEventListener("scroll",c)},[t]),n!==o?null:x.createPortal(r.jsx(L,{position:a,ref:l,children:e}),document.body)}function $({children:e,icon:o,onClick:n}){const{close:a}=i.useContext(g);function t(){n==null||n(),a()}return r.jsx("li",{children:r.jsxs(M,{onClick:t,children:[o," ",e]})})}m.Menu=R;m.Toggle=H;m.List=I;m.Button=$;const O=s.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${e=>e.type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;function q({options:e,value:o,onChange:n,...a}){return r.jsx(O,{value:o,onChange:n,...a,children:e.map(t=>r.jsx("option",{value:t.value,children:t.lable},t.value))})}function N({options:e}){const[o,n]=y(),a=o.get("sortBy")||"";function t(l){o.set("sortBy",l.target.value),n(o)}return r.jsx(q,{options:e,type:"white",value:a,onChange:t})}const V=s.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;export{m as M,N as S,u as T,V as a};
