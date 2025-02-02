import{s as u,u as a,_ as o}from"./index-04b7707c.js";import{u as c}from"./apiBookings-2cbde9c9.js";import{u as n}from"./useMutation-5ff00217.js";const m=u.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${e=>e.type}-700);
  background-color: var(--color-${e=>e.type}-100);
`;function h(){const e=a(),{mutate:r,isLoading:s}=n({mutationFn:t=>c(t,{status:"checked-out"}),onSuccess:t=>{o.success(`Booking #${t.id} successfully checked out`),e.invalidateQueries({active:!0})},onError:()=>o.error("there was an error while checking out")});return{checkout:r,isCheckOut:s}}export{m as T,h as u};
