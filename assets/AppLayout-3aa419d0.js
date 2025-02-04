import{s as l,u as M,a as F,l as C,j as e,b as T,c as _,N as q,d as H,r as S,B as w,e as u,S as L,O as z}from"./index-438dd456.js";import{H as O,a as U,b as E,c as J,d as R,e as W,f as K,g as Y,h as $,t as D,i as x,s as Q}from"./helpers-166c3b16.js";import{u as V}from"./useMutation-5e0b73ac.js";import{S as X,L as Z}from"./Logo-1305a897.js";import{a as aa}from"./addDays-45d3bb2a.js";import{i as v}from"./isToday-1a768889.js";import"./iconBase-26a71e31.js";import"./isSameDay-4bcdd5eb.js";const I=l.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;function ea(){const t=M(),s=F(),{mutate:i,isLoading:r}=V({mutationFn:C,onSuccess:()=>{t.removeQueries(),s("/login",{replace:!0})}});return{logout:i,isLoading:r}}function ta(){const{logout:t,isLoading:s}=ea();return e.jsx(I,{disabled:s,onClick:t,children:s?e.jsx(X,{}):e.jsx(O,{})})}function ia(){const{isDarkMode:t,toggleDarkMode:s}=T();return e.jsx(I,{onClick:s,children:t?e.jsx(U,{}):e.jsx(E,{})})}const na=l.ul`
  display: flex;
  gap: 0.4 rem;
`;function sa(){const t=F();return e.jsxs(na,{children:[e.jsx("li",{children:e.jsx(I,{onClick:()=>t("/account"),children:e.jsx(J,{})})}),e.jsx("li",{children:e.jsx(ia,{})}),e.jsx("li",{children:e.jsx(ta,{})})]})}const ra=l.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`,oa=l.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;function la(){const{user:t}=_(),{fullName:s,avatar:i}=t.user_metadata,r="/the-wild-oasis/default-user.jpg";return e.jsxs(ra,{children:[e.jsx(oa,{src:i||r,alt:`Avatar of ${s}`}),e.jsx("span",{children:s})]})}const da=l.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: end;
`;function ca(){return e.jsxs(da,{children:[e.jsx(la,{}),e.jsx(sa,{})]})}const ua=l.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,h=l(q)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;function ma(){return e.jsx("nav",{children:e.jsxs(ua,{children:[e.jsx("li",{children:e.jsxs(h,{to:"/dashboard",children:[e.jsx(R,{})," ",e.jsx("span",{children:"Home"})]})}),e.jsx("li",{children:e.jsxs(h,{to:"/bookings",children:[e.jsx(W,{})," ",e.jsx("span",{children:"Bookings"})]})}),e.jsx("li",{children:e.jsxs(h,{to:"/cabins",children:[e.jsx(K,{})," ",e.jsx("span",{children:"Cabins"})]})}),e.jsx("li",{children:e.jsxs(h,{to:"/users",children:[e.jsx(Y,{})," ",e.jsx("span",{children:"Users"})]})}),e.jsx("li",{children:e.jsxs(h,{to:"/settings",children:[e.jsx($,{})," ",e.jsx("span",{children:"Setting"})]})})]})})}function ga(t,s,i){const r=D(t,i==null?void 0:i.in);if(isNaN(s))return x((i==null?void 0:i.in)||t,NaN);if(!s)return r;const d=r.getDate(),o=x((i==null?void 0:i.in)||t,r.getTime());o.setMonth(r.getMonth()+s+1,0);const n=o.getDate();return d>=n?o:(r.setFullYear(o.getFullYear(),o.getMonth(),d),r)}function fa(t,s,i){const{years:r=0,months:d=0,weeks:o=0,days:n=0,hours:p=0,minutes:g=0,seconds:y=0}=s,f=D(t,i==null?void 0:i.in),b=d||r?ga(f,d+r*12):f,m=n||o?aa(b,n+o*7):b,G=g+p*60,A=(y+G*60)*1e3;return x((i==null?void 0:i.in)||t,+m+A)}function k(t){return+D(t)>Date.now()}function j(t){return+D(t)<Date.now()}function a(t,s=!1){const i=fa(new Date,{days:t});return s||i.setUTCHours(0,0,0,0),i.toISOString().slice(0,-1)}const ha=[{created_at:a(-20,!0),startDate:a(0),endDate:a(7),cabinId:1,guestId:2,hasBreakfast:!0,observations:"I have a gluten allergy and would like to request a gluten-free breakfast.",isPaid:!1,numGuests:1},{created_at:a(-33,!0),startDate:a(-23),endDate:a(-13),cabinId:1,guestId:3,hasBreakfast:!0,observations:"",isPaid:!0,numGuests:2},{created_at:a(-27,!0),startDate:a(12),endDate:a(18),cabinId:1,guestId:4,hasBreakfast:!1,observations:"",isPaid:!1,numGuests:2},{created_at:a(-45,!0),startDate:a(-45),endDate:a(-29),cabinId:2,guestId:5,hasBreakfast:!1,observations:"",isPaid:!0,numGuests:2},{created_at:a(-2,!0),startDate:a(15),endDate:a(18),cabinId:2,guestId:6,hasBreakfast:!0,observations:"",isPaid:!0,numGuests:2},{created_at:a(-5,!0),startDate:a(33),endDate:a(48),cabinId:2,guestId:7,hasBreakfast:!0,observations:"",isPaid:!1,numGuests:2},{created_at:a(-65,!0),startDate:a(-25),endDate:a(-20),cabinId:3,guestId:8,hasBreakfast:!0,observations:"",isPaid:!0,numGuests:4},{created_at:a(-2,!0),startDate:a(-2),endDate:a(0),cabinId:3,guestId:9,hasBreakfast:!1,observations:"We will be bringing our small dog with us",isPaid:!0,numGuests:3},{created_at:a(-14,!0),startDate:a(-14),endDate:a(-11),cabinId:3,guestId:10,hasBreakfast:!0,observations:"",isPaid:!0,numGuests:4},{created_at:a(-30,!0),startDate:a(-4),endDate:a(8),cabinId:4,guestId:11,hasBreakfast:!0,observations:"",isPaid:!0,numGuests:4},{created_at:a(-1,!0),startDate:a(12),endDate:a(17),cabinId:4,guestId:12,hasBreakfast:!0,observations:"",isPaid:!1,numGuests:4},{created_at:a(-3,!0),startDate:a(18),endDate:a(19),cabinId:4,guestId:13,hasBreakfast:!1,observations:"",isPaid:!0,numGuests:1},{created_at:a(0,!0),startDate:a(14),endDate:a(21),cabinId:5,guestId:14,hasBreakfast:!0,observations:"",isPaid:!1,numGuests:5},{created_at:a(-6,!0),startDate:a(-6),endDate:a(-4),cabinId:5,guestId:15,hasBreakfast:!0,observations:"",isPaid:!0,numGuests:4},{created_at:a(-4,!0),startDate:a(-4),endDate:a(-1),cabinId:5,guestId:16,hasBreakfast:!1,observations:"",isPaid:!0,numGuests:6},{created_at:a(-3,!0),startDate:a(0),endDate:a(11),cabinId:6,guestId:17,hasBreakfast:!1,observations:"We will be checking in late, around midnight. Hope that's okay :)",isPaid:!0,numGuests:6},{created_at:a(-16,!0),startDate:a(-16),endDate:a(-9),cabinId:6,guestId:18,hasBreakfast:!0,observations:"I will need a rollaway bed for one of the guests",isPaid:!0,numGuests:4},{created_at:a(-18,!0),startDate:a(-4),endDate:a(-1),cabinId:6,guestId:19,hasBreakfast:!0,observations:"",isPaid:!0,numGuests:6},{created_at:a(-2,!0),startDate:a(17),endDate:a(23),cabinId:7,guestId:20,hasBreakfast:!1,observations:"",isPaid:!1,numGuests:8},{created_at:a(-7,!0),startDate:a(40),endDate:a(50),cabinId:7,guestId:21,hasBreakfast:!0,observations:"",isPaid:!0,numGuests:7},{created_at:a(-55,!0),startDate:a(32),endDate:a(37),cabinId:7,guestId:22,hasBreakfast:!0,observations:"",isPaid:!0,numGuests:6},{created_at:a(-8,!0),startDate:a(-5),endDate:a(0),cabinId:8,guestId:1,hasBreakfast:!0,observations:"My wife has a gluten allergy so I would like to request a gluten-free breakfast if possible",isPaid:!0,numGuests:9},{created_at:a(0,!0),startDate:a(0),endDate:a(5),cabinId:8,guestId:23,hasBreakfast:!0,observations:"I am celebrating my anniversary, can you arrange for any special amenities or decorations?",isPaid:!0,numGuests:10},{created_at:a(-10,!0),startDate:a(10),endDate:a(13),cabinId:8,guestId:24,hasBreakfast:!1,observations:"",isPaid:!0,numGuests:7}],c=`${H}/storage/v1/object/public/cabin-images/`,B=[{name:"001",maxCapacity:2,regularPrice:250,discount:0,image:c+"cabin-001.jpg",description:"Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub."},{name:"002",maxCapacity:2,regularPrice:350,discount:25,image:c+"cabin-002.jpg",description:"Escape to the serenity of nature and indulge in luxury in our cozy cabin 002. Perfect for couples, this cabin offers a secluded and intimate retreat in the heart of a picturesque forest. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace and a fully-equipped kitchen. The luxurious bedroom features a plush king-size bed and spa-like shower. Relax on the private deck with hot tub and take in the beauty of nature."},{name:"003",maxCapacity:4,regularPrice:300,discount:0,image:c+"cabin-003.jpg",description:"Experience luxury family living in our medium-sized wooden cabin 003. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings."},{name:"004",maxCapacity:4,regularPrice:500,discount:50,image:c+"cabin-004.jpg",description:"Indulge in the ultimate luxury family vacation in this medium-sized cabin 004. Designed for families of up to 4, this cabin offers a sumptuous retreat for the discerning traveler. Inside, the cabin boasts of opulent interiors crafted from the finest quality wood, a comfortable living area, a fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-inspired en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub."},{name:"005",maxCapacity:6,regularPrice:350,discount:0,image:c+"cabin-005.jpg",description:"Enjoy a comfortable and cozy getaway with your group or family in our spacious cabin 005. Designed to accommodate up to 6 people, this cabin offers a secluded retreat in the heart of nature. Inside, the cabin features warm and inviting interiors crafted from quality wood, a living area with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. Step outside to your private deck and take in the natural surroundings while relaxing in your own hot tub."},{name:"006",maxCapacity:6,regularPrice:800,discount:100,image:c+"cabin-006.jpg",description:"Experience the epitome of luxury with your group or family in our spacious wooden cabin 006. Designed to comfortably accommodate up to 6 people, this cabin offers a lavish retreat in the heart of nature. Inside, the cabin features opulent interiors crafted from premium wood, a grand living area with fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-like en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub."},{name:"007",maxCapacity:8,regularPrice:600,discount:100,image:c+"cabin-007.jpg",description:"Accommodate your large group or multiple families in the spacious and grand wooden cabin 007. Designed to comfortably fit up to 8 people, this cabin offers a secluded retreat in the heart of beautiful forests and mountains. Inside, the cabin features warm and inviting interiors crafted from quality wood, multiple living areas with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings."},{name:"008",maxCapacity:10,regularPrice:1400,discount:0,image:c+"cabin-008.jpg",description:"Experience the epitome of luxury and grandeur with your large group or multiple families in our grand cabin 008. This cabin offers a lavish retreat that caters to all your needs and desires. The cabin features an opulent design and boasts of high-end finishes, intricate details and the finest quality wood throughout. Inside, the cabin features multiple grand living areas with fireplaces, a formal dining area, and a gourmet kitchen that is a chef's dream. The bedrooms are designed for ultimate comfort and luxury, with plush beds and en-suite spa-inspired bathrooms. Step outside and immerse yourself in the beauty of nature from your private deck, featuring a luxurious hot tub and ample seating areas for ultimate relaxation and enjoyment."}],pa=[{fullName:"Jonas Schmedtmann",email:"hello@jonas.io",nationality:"Portugal",nationalID:"3525436345",countryFlag:"https://flagcdn.com/pt.svg"},{fullName:"Jonathan Smith",email:"johnsmith@test.eu",nationality:"Great Britain",nationalID:"4534593454",countryFlag:"https://flagcdn.com/gb.svg"},{fullName:"Jonatan Johansson",email:"jonatan@example.com",nationality:"Finland",nationalID:"9374074454",countryFlag:"https://flagcdn.com/fi.svg"},{fullName:"Jonas Mueller",email:"jonas@example.eu",nationality:"Germany",nationalID:"1233212288",countryFlag:"https://flagcdn.com/de.svg"},{fullName:"Jonas Anderson",email:"anderson@example.com",nationality:"Bolivia (Plurinational State of)",nationalID:"0988520146",countryFlag:"https://flagcdn.com/bo.svg"},{fullName:"Jonathan Williams",email:"jowi@gmail.com",nationality:"United States of America",nationalID:"633678543",countryFlag:"https://flagcdn.com/us.svg"},{fullName:"Emma Watson",email:"emma@gmail.com",nationality:"United Kingdom",nationalID:"1234578901",countryFlag:"https://flagcdn.com/gb.svg"},{fullName:"Mohammed Ali",email:"mohammedali@yahoo.com",nationality:"Egypt",nationalID:"987543210",countryFlag:"https://flagcdn.com/eg.svg"},{fullName:"Maria Rodriguez",email:"maria@gmail.com",nationality:"Spain",nationalID:"1098765321",countryFlag:"https://flagcdn.com/es.svg"},{fullName:"Li Mei",email:"li.mei@hotmail.com",nationality:"China",nationalID:"102934756",countryFlag:"https://flagcdn.com/cn.svg"},{fullName:"Khadija Ahmed",email:"khadija@gmail.com",nationality:"Sudan",nationalID:"1023457890",countryFlag:"https://flagcdn.com/sd.svg"},{fullName:"Gabriel Silva",email:"gabriel@gmail.com",nationality:"Brazil",nationalID:"109283465",countryFlag:"https://flagcdn.com/br.svg"},{fullName:"Maria Gomez",email:"maria@example.com",nationality:"Mexico",nationalID:"108765421",countryFlag:"https://flagcdn.com/mx.svg"},{fullName:"Ahmed Hassan",email:"ahmed@gmail.com",nationality:"Egypt",nationalID:"1077777777",countryFlag:"https://flagcdn.com/eg.svg"},{fullName:"John Doe",email:"johndoe@gmail.com",nationality:"United States",nationalID:"3245908744",countryFlag:"https://flagcdn.com/us.svg"},{fullName:"Fatima Ahmed",email:"fatima@example.com",nationality:"Pakistan",nationalID:"1089999363",countryFlag:"https://flagcdn.com/pk.svg"},{fullName:"David Smith",email:"david@gmail.com",nationality:"Australia",nationalID:"44450960283",countryFlag:"https://flagcdn.com/au.svg"},{fullName:"Marie Dupont",email:"marie@gmail.com",nationality:"France",nationalID:"06934233728",countryFlag:"https://flagcdn.com/fr.svg"},{fullName:"Ramesh Patel",email:"ramesh@gmail.com",nationality:"India",nationalID:"9875412303",countryFlag:"https://flagcdn.com/in.svg"},{fullName:"Fatimah Al-Sayed",email:"fatimah@gmail.com",nationality:"Kuwait",nationalID:"0123456789",countryFlag:"https://flagcdn.com/kw.svg"},{fullName:"Nina Williams",email:"nina@hotmail.com",nationality:"South Africa",nationalID:"2345678901",countryFlag:"https://flagcdn.com/za.svg"},{fullName:"Taro Tanaka",email:"taro@gmail.com",nationality:"Japan",nationalID:"3456789012",countryFlag:"https://flagcdn.com/jp.svg"},{fullName:"Abdul Rahman",email:"abdul@gmail.com",nationality:"Saudi Arabia",nationalID:"4567890123",countryFlag:"https://flagcdn.com/sa.svg"},{fullName:"Julie Nguyen",email:"julie@gmail.com",nationality:"Vietnam",nationalID:"5678901234",countryFlag:"https://flagcdn.com/vn.svg"},{fullName:"Sara Lee",email:"sara@gmail.com",nationality:"South Korea",nationalID:"6789012345",countryFlag:"https://flagcdn.com/kr.svg"},{fullName:"Carlos Gomez",email:"carlos@yahoo.com",nationality:"Colombia",nationalID:"7890123456",countryFlag:"https://flagcdn.com/co.svg"},{fullName:"Emma Brown",email:"emma@gmail.com",nationality:"Canada",nationalID:"8901234567",countryFlag:"https://flagcdn.com/ca.svg"},{fullName:"Juan Hernandez",email:"juan@yahoo.com",nationality:"Argentina",nationalID:"4343433333",countryFlag:"https://flagcdn.com/ar.svg"},{fullName:"Ibrahim Ahmed",email:"ibrahim@yahoo.com",nationality:"Nigeria",nationalID:"2345678009",countryFlag:"https://flagcdn.com/ng.svg"},{fullName:"Mei Chen",email:"mei@gmail.com",nationality:"Taiwan",nationalID:"3456117890",countryFlag:"https://flagcdn.com/tw.svg"}];async function ya(){const{error:t}=await u.from("guests").delete().gt("id",0);t&&console.log(t.message)}async function ba(){const{error:t}=await u.from("cabins").delete().gt("id",0);t&&console.log(t.message)}async function N(){const{error:t}=await u.from("bookings").delete().gt("id",0);t&&console.log(t.message)}async function va(){const{error:t}=await u.from("guests").insert(pa);t&&console.log(t.message)}async function Da(){const{error:t}=await u.from("cabins").insert(B);t&&console.log(t.message)}async function P(){const{data:t}=await u.from("guests").select("id").order("id"),s=t.map(n=>n.id),{data:i}=await u.from("cabins").select("id").order("id"),r=i.map(n=>n.id),d=ha.map(n=>{const p=B.at(n.cabinId-1),g=Q(n.endDate,n.startDate),y=g*(p.regularPrice-p.discount),f=n.hasBreakfast?g*15*n.numGuests:0,b=y+f;let m;return j(new Date(n.endDate))&&!v(new Date(n.endDate))&&(m="checked-out"),(k(new Date(n.startDate))||v(new Date(n.startDate)))&&(m="unconfirmed"),(k(new Date(n.endDate))||v(new Date(n.endDate)))&&j(new Date(n.startDate))&&!v(new Date(n.startDate))&&(m="checked-in"),{...n,numNights:g,cabinPrice:y,extrasPrice:f,totalPrice:b,guestId:s.at(n.guestId-1),cabinId:r.at(n.cabinId-1),status:m}});console.log(d);const{error:o}=await u.from("bookings").insert(d);o&&console.log(o.message)}function xa(){const[t,s]=S.useState(!1);async function i(){s(!0),await N(),await ya(),await ba(),await va(),await Da(),await P(),s(!1)}async function r(){s(!0),await N(),await P(),s(!1)}return e.jsxs("div",{style:{marginTop:"auto",backgroundColor:"#e0e7ff",padding:"8px",borderRadius:"5px",textAlign:"center",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("h3",{style:{color:"#333"},children:"SAMPLE DATA"}),e.jsx(w,{onClick:i,disabled:t,children:"Upload ALL"}),e.jsx(w,{onClick:r,disabled:t,children:"Upload bookings ONLY"})]})}const Ia=l.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;function wa(){return e.jsxs(Ia,{children:[e.jsx(Z,{}),e.jsx(ma,{}),e.jsx(xa,{})]})}const ka=l.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`,ja=l.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`,Na=l.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;function _a(){return e.jsxs(ka,{children:[e.jsx(ca,{}),e.jsx(wa,{}),e.jsx(ja,{children:e.jsx(Na,{children:e.jsx(S.Suspense,{fallback:e.jsx(L,{}),children:e.jsx(z,{})})})})]})}export{_a as default};
