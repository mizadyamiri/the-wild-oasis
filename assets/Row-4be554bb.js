import{s as a,A as t}from"./index-4abb2cda.js";const i=a.div`
  display: flex;

  ${e=>e.type==="horizontal"&&t`
      justify-content: space-between;
      align-items: center;
    `};

  ${e=>e.type==="vertical"&&t`
      flex-direction: column;
      gap: 1.6rem;
    `};
`;i.defaultProps={type:"vertical"};export{i as R};
