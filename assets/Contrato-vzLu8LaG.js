import{G as w,r,u as v,j as e,l as N,c as B}from"./index-D-xuSui1.js";const I="_contratoPage_1tqgi_3",A="_content_1tqgi_13",k="_section1_1tqgi_21",q="_innerContainer_1tqgi_29",T="_descriptionContainer_1tqgi_35",E="_productIdea_1tqgi_36",R="_mainSlogan_1tqgi_60",S="_conectaCon_1tqgi_61",D="_quieres_1tqgi_62",z="_section2_1tqgi_96",L="_aboutDisplayer_1tqgi_103",G="_productAssets_1tqgi_104",H="_cardsContainer_1tqgi_125",M="_landAssetCard_1tqgi_133",P="_landHoveredImage_1tqgi_148",U="_sec2Tittles_1tqgi_170",W="_hireSection_1tqgi_195",F="_hireTextContainer_1tqgi_198",J="_hireImageContainer_1tqgi_210",O="_startNowButton_1tqgi_220",V="_hireImg_1tqgi_233",t={contratoPage:I,content:A,section1:k,innerContainer:q,descriptionContainer:T,productIdea:E,mainSlogan:R,conectaCon:S,quieres:D,section2:z,aboutDisplayer:L,productAssets:G,cardsContainer:H,landAssetCard:M,landHoveredImage:P,sec2Tittles:U,hireSection:W,hireTextContainer:F,hireImageContainer:J,startNowButton:O,hireImg:V},$="_topBar_16605_4",Z="_stylesWrapper_16605_14",Y="_landBarTittleContainer_16605_24",Q="_lanBarActionsContainer_16605_36",X="_landBarJoinContainer_16605_63",K="_landLogInButton_16605_83",ee="_landSignInButton_16605_94",te="_menuIcon_16605_105",ae="_overlay_16605_113",ne="_active_16605_123",oe="_hireButton_16605_142",se="_workButton_16605_143",o={topBar:$,stylesWrapper:Z,landBarTittleContainer:Y,lanBarActionsContainer:Q,landBarJoinContainer:X,landLogInButton:K,landSignInButton:ee,menuIcon:te,overlay:ae,active:ne,hireButton:oe,workButton:se};function ie(s){return w({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(s)}function re(s){return w({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(s)}const ce=({goWantToWork:s,goWantToHire:a,currentSection:d})=>{const[n,c]=r.useState(!1),u=r.useRef(null),l=r.useRef(null),[p,f]=r.useState("/home");r.useEffect(()=>{const i=localStorage.getItem("User");i!==""&&i!==null&&f("/searched")},[]);const g=v(),m=()=>{c(!n)};return r.useEffect(()=>{var i,h;if(n){(i=u.current)==null||i.focus();const _=j=>{j.key==="Escape"&&c(!1)};return document.addEventListener("keydown",_),()=>{document.removeEventListener("keydown",_)}}else(h=l.current)==null||h.focus()},[n]),e.jsxs("div",{className:o.topBar,children:[e.jsxs("div",{className:o.stylesWrapper,children:[e.jsxs("div",{className:o.landBarTittleContainer,style:{display:"flex"},children:[e.jsx("img",{src:N,style:{width:"110px"}}),e.jsx("h1",{children:"CONTRATO-GT"})]}),e.jsxs("div",{className:"".concat(o.lanBarActionsContainer," ").concat(n?o.active:""),children:[d=="hire"?e.jsx("p",{}):e.jsx("p",{}),e.jsx("p",{className:o.hireButton,onClick:a,style:d=="hire"?{textDecoration:"underline"}:{textDecoration:"none"},children:"QUIERO CONTRATAR"}),e.jsx("p",{className:o.workButton,onClick:s,style:d=="work"?{textDecoration:"underline"}:{textDecoration:"none"},children:"QUIERO TRABAJAR"})]}),e.jsxs("div",{className:"".concat(o.landBarJoinContainer," ").concat(n?o.active:""),children:[e.jsx("button",{className:o.landLogInButton,onClick:()=>{g.push(p)},"aria-label":"Iniciar Sesión",children:"INICIAR SESION"}),e.jsx("button",{className:o.landSignInButton,onClick:()=>g.push("/register"),"aria-label":"Registrar",children:"REGISTRAR"})]}),e.jsx("div",{className:o.menuIcon,onClick:m,"aria-label":n?"Cerrar menú":"Abrir menú",role:"button",tabIndex:0,onKeyPress:i=>{(i.key==="Enter"||i.key===" ")&&m()},ref:l,children:n?e.jsx(re,{}):e.jsx(ie,{})})]}),n&&e.jsx("div",{className:o.overlay,onClick:m,"aria-hidden":"true"})]})},de="_cyContainer_17wt4_1",le={cyContainer:de},ge=()=>{const s=r.useRef(null);return r.useEffect(()=>{let a;const d=()=>{if(a){const n=window.innerWidth,c=n<768?50:(n<1024,100);a.nodes().forEach(u=>{u.style({width:c,height:c})}),a.fit(a.elements(),20),a.center()}};if(s.current){const n=[{data:{id:"node1",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXScHBJuu8WDDVVN2e5h1pGYBAIcVsF8CRYw&s"}},{data:{id:"node2",imageUrl:"https://haiilo.com/wp-content/uploads/2022/12/emmanuel-ikwuegbu-zWOgsj3j0wA-unsplash-1024x684.jpg"}},{data:{id:"node3",imageUrl:"https://images4.fanpop.com/image/photos/23900000/Felicia-Day-Random-Portrait-felicia-day-23983020-1131-1599.jpg"}},{data:{id:"node4",imageUrl:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80"}},{data:{id:"node5",imageUrl:"https://i.seadn.io/s/raw/files/8c8784d64b65d81993a2d86308114f78.jpg?auto=format&dpr=1&w=1000"}},{data:{id:"node6",imageUrl:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80"}},{data:{id:"node7",imageUrl:"https://www.beaconjournal.com/gcdn/presto/2021/05/12/NABJ/6f48888a-98f3-46cb-ae5b-ad8d06c6b8c5-IMG_Mark_J_Price_Photo_1_1_.JPG?width=660&height=908&fit=crop&format=pjpg&auto=webp"}}],c=[{data:{source:"node1",target:"node2"}},{data:{source:"node2",target:"node3"}},{data:{source:"node3",target:"node4"}},{data:{source:"node3",target:"node5"}},{data:{source:"node6",target:"node2"}},{data:{source:"node6",target:"node7"}},{data:{source:"node2",target:"node1"}},{data:{source:"node5",target:"node1"}},{data:{source:"node4",target:"node7"}},{data:{source:"node7",target:"node1"}}];a=B({container:s.current,elements:[...n,...c],style:[{selector:"node",style:{"background-color":"white","background-image":"data(imageUrl)","background-fit":"cover","background-clip":"node","border-color":"black","border-width":3,width:80,height:80,label:"data(label)","text-valign":"bottom",color:"black","font-size":"14px",shape:"ellipse","transition-property":"width height border-width shadow-blur shadow-color shadow-opacity opacity","transition-duration":300}},{selector:"node:hover",style:{width:130,height:130,"border-color":"black",opacity:.8}},{selector:"edge",style:{width:2,"line-color":"black","target-arrow-color":"#FF4136","target-arrow-shape":"triangle","curve-style":"bezier"}}],layout:{name:"circle",animate:!0,animationDuration:1e3},userZoomingEnabled:!1,userPanningEnabled:!1,zoomingEnabled:!1,panningEnabled:!1}),d(),window.addEventListener("resize",d),a.nodes().grabify(),a.on("drag","node",u=>{const l=u.target,p=l.position(),f=l.width(),g=l.height(),m=f/2,i=g/2,h=a.extent(),_=h.x1+m,j=h.y1+i,C=h.x2-m,y=h.y2-i;let x=p.x,b=p.y;x<_&&(x=_),x>C&&(x=C),b<j&&(b=j),b>y&&(b=y),l.position({x,y:b})})}return()=>{a&&(a.destroy(),window.removeEventListener("resize",d))}},[]),e.jsx("div",{ref:s,className:le.cyContainer})},ue=()=>{const[s,a]=r.useState("https://img.freepik.com/foto-gratis/primer-plano-carpintero-masculino-que-mide-tablon-madera-largo-regla_23-2147945070.jpg?t=st=1730428246~exp=1730431846~hmac=6d2c22cbe30a912f8f2249e2be04384b934c76eccfd289a52c692c9b58440861&w=1380"),[d]=r.useState(!1),[n,c]=r.useState("hire"),u=v(),l=()=>{c("work")},p=()=>{c("hire")},f=[{title:"¿Qué es?",content:"Una red de contactos es un grupo de personas conectadas entre sí, con quienes puedes hablar acerca trabajadores  para garantizar servicios de calidad.",imageUrl:"https://img.freepik.com/foto-gratis/mujer-trabajando-taller_23-2148836020.jpg?t=st=1730428286~exp=1730431886~hmac=7aeea776419d683454190fce9ed1bc60c1dbbf3c2d41af3bf7f091fe05875b1b&w=2000"},{title:"¿Cómo Funciona?",content:"Los usuarios agregan a su red profesionales con los que ya han trabajado. Así, la confianza fluye entre amigos, garantizando la calidad del oficio.",imageUrl:"https://img.freepik.com/foto-gratis/sonriente-joven-guapo-chico-limpieza-camiseta-guantes-que-muestran-gesto-llamada-telefonica-aislado-pared-verde_141793-103385.jpg?t=st=1730428372~exp=1730431972~hmac=29077ee323145844419f1a3b524dbc1bf4cea0bb967136c92fbc15f752b52f44&w=1800"},{title:"Construye tu Red",content:"A  medida que recomiendas y contratas, tu red crece. Cuantos más amigos confíen en un profesional, más oportunidades tendrás de contratar con seguridad.",imageUrl:"https://img.freepik.com/foto-gratis/joven-camiseta-naranja-guantes-goma-gesticulando-mano-haciendo-gesto-dinero-mirando-camara-sonrisa-segura-pie-sobre-fondo-amarillo_141793-23946.jpg?t=st=1730428413~exp=1730432013~hmac=209ebe25fc56be2ae12bc615e0e63e382a5d41690533aee293d67f0974401f81&w=1800"},{title:"A un solo click",content:"Puedes agregar a una persona a tu red de confianza desde su perfil, presionando el boton de “Agregar persona” y listo. Tan fácil como dar un click",imageUrl:"https://img.freepik.com/foto-gratis/empleado-repartidor-uniforme-camiseta-blanco-gorra-roja-mirando-camara-sonriendo-feliz-positivamente-mostrando-pulgares-arriba-pie-sobre-fondo-azul_141793-140378.jpg?t=st=1730428435~exp=1730432035~hmac=d00b5e89037947d16650c32ca40bee59214ff1bb16b94095deac0aad91a3c619&w=1800"}];return e.jsxs("div",{className:t.contratoPage,children:[e.jsx(ce,{goWantToHire:p,goWantToWork:l,currentSection:n}),e.jsx("div",{className:t.content,children:n=="hire"?e.jsxs("section",{children:[e.jsx("section",{className:t.section1,children:e.jsxs("div",{className:t.innerContainer,children:[e.jsxs("div",{className:t.descriptionContainer,children:[e.jsx("p",{className:t.mainSlogan,children:"Encuentra El experto Que tus amigos ya Confian."}),e.jsx("p",{className:t.conectaCon,children:"Conectate Con Profesionales De Confianza Recomendados Por Tu Propia Red."})]}),e.jsx("div",{className:t.productIdea,children:e.jsx(ge,{})})]})}),e.jsx("section",{className:t.section2,children:e.jsxs("div",{className:t.innerContainer,children:[e.jsxs("div",{className:t.aboutDisplayer,children:[e.jsx("h2",{className:t.sec2Tittles,children:"Construye Tu Propia"}),e.jsx("h1",{className:t.sec2Tittles,children:"RED"}),e.jsx("h1",{className:t.sec2Tittles,children:"DE"}),e.jsx("h1",{className:t.sec2Tittles,children:"CONFIANZA"}),e.jsx("div",{className:t.cardsContainer,children:f.map((g,m)=>e.jsxs("div",{className:t.landAssetCard,onMouseEnter:()=>a(g.imageUrl),onMouseLeave:()=>a("https://img.freepik.com/foto-gratis/primer-plano-carpintero-masculino-que-mide-tablon-madera-largo-regla_23-2147945070.jpg?t=st=1730428246~exp=1730431846~hmac=6d2c22cbe30a912f8f2249e2be04384b934c76eccfd289a52c692c9b58440861&w=1380"),children:[e.jsx("h1",{children:g.title}),e.jsx("p",{children:g.content})]},m))})]}),e.jsx("div",{className:t.productAssets,children:s&&e.jsx("img",{src:s,alt:"Product Asset",className:"".concat(t.landHoveredImage," ").concat(d?t.visible:"")})})]})})]}):e.jsx("section",{className:t.hireSection,children:e.jsxs("div",{className:t.innerContainer,children:[e.jsxs("div",{className:t.hireTextContainer,children:[e.jsx("p",{className:t.mainSlogan,style:{marginLeft:"25px",textAlign:"center",marginBottom:"40px"},children:"¡Encuentra El Trabajo"}),e.jsx("p",{className:t.mainSlogan,style:{marginLeft:"25px",textAlign:"center"},children:"Que Estás buscando!"}),e.jsx("p",{className:t.quieres,style:{marginLeft:"9%",textAlign:"center"},children:"Trabaja de manera independiente para las personas que desees. ¡Sé tu propio jefe!"}),e.jsx("button",{onClick:()=>u.push("/register"),className:t.startNowButton,children:"¡EMPEZAR AHORA!"})]}),e.jsx("div",{className:t.hireImageContainer,children:e.jsx("img",{className:t.hireImg,src:"https://st.depositphotos.com/1000816/3025/i/450/depositphotos_30251097-stock-photo-business-people-shaking-hands.jpg"})})]})})})]})};export{ue as default};
