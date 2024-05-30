(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();const K="/assets/logo-D8ahvfvj.png",R=()=>{const e=document.createElement("header");return e.innerHTML=`  
    <img class="logo" src="${K}" alt="Logo de la página">
    <h1>El Chat de los Anillos</h1> 
    `,e};let T={},z="";const F=e=>{z=e},P=e=>{if(typeof e!="object")throw new Error("Las rutas deben ser un objeto.");if(!e["/error"])throw new Error("Debes definir una ruta /error en tus rutas.");T=e},_=e=>{const a=new URLSearchParams(e);return Object.fromEntries(a)},G=(e,a={})=>{z.innerHTML="";const r=(T[e]||T["/error"])(a);z.appendChild(r)},S=(e,a={})=>{const n=Object.keys(a).map(o=>`${o}=${a[o]}`).join("&"),r=`${e}?${n}`;window.history.pushState({},"",r),G(e,a)},$=e=>{const a=window.location.search,n=_(a);G(e,n)},V=()=>{const e=document.createElement("div");return e.classList.add("hero-container"),e.innerHTML=`  
    <div class="hero">
      <h1>¡Embárcate en la <br> búsqueda del anillo!</h1> 
      <h2>La aventura y la magia te esperan en cada rincón.</h2>
    </div>

    <h2>¿Qué diría Frodo si...?</h2>

    <h3>¿Quieres chatear con todos los personajes de la saga? Inicia el chat grupal y descubre sus singulares respuestas.</h3>

    <button id="BtnChatGrupal">Iniciar chat ahora</button>

    <p class="linea"></p>
  `,e.querySelector("#BtnChatGrupal").addEventListener("click",()=>{S("/ChatGrupal")}),e},f=[{id:"frodo_bolson",name:"Frodo Bolsón",shortDescription:"Portador del Anillo Único",description:"Frodo Bolsón, un hobbit de la Comarca, es elegido para llevar el Anillo Único a Mordor y destruirlo en el Monte del Destino. A pesar de su modesta estatura, muestra una valentía extraordinaria y una determinación inquebrantable en su peligroso viaje. Su carga lo lleva al borde de la desesperación, pero su amistad con Sam y el apoyo de sus compañeros lo guían en su difícil tarea, enfrentando peligros inimaginables para salvar a la Tierra Media de la oscuridad que amenaza con consumirla. ",imageUrl:"assets/Frodo.jpg",facts:{race:"Hobbit",age:33,height:"1.5m",yearOfBirth:2968}},{id:"sam_gamyi",name:"Sam Gamyi",shortDescription:"Fiel compañero de Frodo",description:"Sam Gamyi, leal compañero de Frodo, demuestra una valentía y lealtad inquebrantables en su viaje para destruir el Anillo Único. Como jardinero de la Comarca, inicialmente se une a Frodo como su cocinero, pero su papel se vuelve crucial cuando se convierte en el soporte emocional y físico de Frodo en los momentos más oscuros. Su coraje y sacrificio son ejemplares, y su amor por su hogar y sus amigos lo impulsan a superar desafíos aparentemente insuperables en su búsqueda para salvar a la Tierra Media.",imageUrl:"assets/sam.jpg",facts:{race:"Hobbit",age:38,height:"1.4m",yearOfBirth:2980}},{id:"gandalf",name:"Gandalf",shortDescription:"El mago gris",description:"Gandalf, conocido como el Mago Gris, es una figura venerada y poderosa en la Tierra Media. Su sabiduría y habilidades mágicas lo convierten en un guía esencial para la Comunidad del Anillo en su lucha contra las fuerzas oscuras de Sauron. Aunque puede parecer distante y enigmático, Gandalf tiene un profundo amor por los pueblos libres y está dispuesto a arriesgar todo por su protección. Su papel como mentor y estratega es crucial en la guerra contra la oscuridad, y su sacrificio final en la batalla contra el Balrog es un acto de pura valentía y devoción.",imageUrl:"assets/gandalf.jpg",facts:{race:"Maia",age:2019,height:"2.1m",yearOfBirth:1e3}},{id:"aragorn",name:"Aragorn",shortDescription:"El heredero de Isildur",description:"Aragorn, también conocido como Strider, es un guerrero noble y valiente, destinado a reclamar su derecho como rey de Gondor. Heredero de Isildur, lleva consigo la carga de una gran responsabilidad y un legado de honor y coraje. Aunque inicialmente renuente a asumir su destino, Aragorn se convierte en un líder indiscutible de la Comunidad del Anillo, guiándola con sabiduría y determinación en su búsqueda para destruir el Anillo Único y derrotar a Sauron. Su valentía y compasión lo convierten en un héroe legendario en la historia de la Tierra Media.",imageUrl:"assets/aragorn.jpg",facts:{race:"Hombre",age:87,height:"1.86m",yearOfBirth:2931}},{id:"legolas",name:"Legolas",shortDescription:"El arquero elfo",description:"Legolas, un elfo de bosque del reino de Mirkwood, es un arquero experto y ágil guerrero. Miembro de la Comunidad del Anillo, su destreza con el arco y su agudeza visual son inigualables, haciendo de él un aliado valioso en la lucha contra las fuerzas de Sauron. Aunque a menudo se muestra reservado y serio, Legolas demuestra un profundo respeto por sus compañeros de viaje y una lealtad inquebrantable hacia su causa. Su habilidad para percibir el peligro y su habilidad en la batalla lo convierten en un activo invaluable en la misión para salvar a la Tierra Media.",imageUrl:"assets/legolas.jpg",facts:{race:"Elfo",age:2931,height:"1.83m",yearOfBirth:87}},{id:"gimli",name:"Gimli",shortDescription:"El enano de Erebor",description:"Un enano de la Montaña Solitaria, es un guerrero valiente y un amigo leal. Su amor por la herencia de su pueblo lo impulsan a unirse a la Comunidad del Anillo en su peligroso viaje. Aunque a menudo se encuentra en desacuerdo con Legolas debido a la rivalidad entre elfos y enanos, Gimli demuestra un respeto profundo por sus compañeros y una disposición para sacrificar todo en la lucha contra el mal. Su fuerza y su coraje son legendarios, y su amistad con Legolas es una prueba de que lazos inquebrantables pueden formarse incluso en los momentos más oscuros.",imageUrl:"assets/gimli.jpg",facts:{race:"Enano",age:139,height:"1.45m",yearOfBirth:2879}},{id:"boromir",name:"Boromir",shortDescription:"Hijo de Gondor",description:"Boromir, un valiente guerrero de Gondor, es un miembro de la Comunidad del Anillo con un corazón noble pero atormentado por la sombra del poder. Lucha con la tentación de usar el Anillo Único para proteger a su pueblo, pero su determinación y coraje son innegables. Aunque cae en la tentación y enfrenta su destino trágico, su sacrificio final por sus compañeros y su arrepentimiento son un recordatorio de la fuerza del espíritu humano y la redención. Su legado perdura como un símbolo de la lucha contra el mal y la búsqueda de redención.",imageUrl:"assets/boromirdel.jpg",facts:{race:"Hombre",age:41,height:"1.83m",yearOfBirth:2978}},{id:"arwen",name:"Arwen",shortDescription:"La estrella vespertina",description:"Arwen Undómiel, una elfa noble de la estirpe de los Noldor, es conocida por su belleza y su amor por Aragorn. Su decisión de renunciar a la inmortalidad por amor es un acto de valentía y sacrificio que la define como una de las figuras más poderosas y nobles de la Tierra Media. Aunque su papel en la trama principal puede ser secundario, su influencia y su conexión con Aragorn son fundamentales para el éxito de la Comunidad del Anillo y la restauración de la paz en la Tierra Media. ",imageUrl:"assets/arwen .jpg",facts:{race:"Elfo",age:2921,height:"1.70m",yearOfBirth:241}},{id:"saruman",name:"Saruman",shortDescription:"El mago traidor",description:"Saruman el Blanco, líder de los Istari, se corrompe por el deseo de poder y se alía con Sauron en su búsqueda del Anillo Único. Una vez respetado como sabio consejero y protector de la Tierra Media, su caída en la oscuridad lo convierte en un enemigo temible. Su traición a sus compañeros magos y su papel en la guerra contra los pueblos libres lo hacen un adversario formidable. Sin embargo, su soberbia y ambición eventualmente lo conducen a su propia destrucción, demostrando que incluso los más poderosos pueden caer ante la tentación.",imageUrl:"assets/saruman.jpg",facts:{race:"Maia",age:2019,height:"2.1m",yearOfBirth:1e3}},{id:"sauron",name:"Sauron",shortDescription:"El Señor Oscuro",description:"Sauron, el principal antagonista de la trilogía, es un antiguo Maia corrompido que busca recuperar su poder forjando un nuevo Anillo Único. Conocido como el Señor Oscuro, su influencia se extiende sobre la Tierra Media, sembrando terror y destrucción dondequiera que vaya. Su deseo de dominación lo lleva a cometer atrocidades inimaginables, manipulando a aquellos que lo rodean en su búsqueda de dominación total. Su única debilidad es el mismo Anillo que desea poseer, y su obsesión lo consume hasta su eventual derrota. ",imageUrl:"assets/sauron.jpg",facts:{race:"Maia",age:2019,height:"3.2m",yearOfBirth:1e3}},{id:"gollum",name:"Gollum",shortDescription:"Antiguo poseedor del Anillo Único",description:"Gollum, anteriormente conocido como Sméagol, fue corrompido por el Anillo Único y se convirtió en una criatura deforme y obsesionada con recuperar su posesión. Una vez un hobbit inocente, su lucha interna entre su antiguo yo y su alter ego, Gollum, lo consume. Su relación con el Anillo es tanto su perdición como su redención, ya que lo impulsa a traicionar a Frodo y Sam para recuperar su precioso. Sin embargo, su papel en la destrucción del Anillo finalmente le otorga la redención que tanto anhelaba, demostrando que incluso los más oscuros pueden encontrar la luz.",imageUrl:"assets/gollum.jpg",facts:{race:"Hobbit",age:589,height:"0.8m",yearOfBirth:2430}},{id:"treebeard",name:"Treebeard",shortDescription:"El pastor de los árboles",description:"También conocido como Barbárbol, es el líder de los Ents, antiguas criaturas que protegen los bosques de la Tierra Media. Conocido por su sabiduría y su profundo amor por la naturaleza es un defensor apasionado de su hogar, decidido a protegerlo de la destrucción causada por Saruman y sus aliados. Su paciencia y su habilidad para ver el panorama completo lo convierten en un aliado valioso para la Comunidad del Anillo en su lucha contra la oscuridad. Su voz se alza como un eco de los antiguos tiempos, recordando a todos la importancia de proteger y preservar la Tierra Media.",imageUrl:"assets/treebeard.jpg",facts:{race:"Ent",age:3872,height:"4.2m",yearOfBirth:990}},{id:"shadowfax",name:"Shadowfax",shortDescription:"El Señor de los Caballos",description:"Shadowfax es un caballo noble y veloz, conocido como el Señor de los Caballos, leal a Gandalf y capaz de llevarlo a grandes velocidades. Criado en las praderas de Rohan, Shadowfax es más que un mero corcel; es un símbolo de libertad y poderío. Su inteligencia y su conexión con Gandalf son incomparables, y su papel en la lucha contra las fuerzas de la oscuridad es crucial. Montado por el mago en sus misiones más peligrosas, Shadowfax demuestra una valentía y un coraje dignos de elogio, inspirando a aquellos que lo rodean con su nobleza y gracia.",imageUrl:"assets/shadowfax.jpg",facts:{race:"Caballo",age:30,height:"1.7m",yearOfBirth:1994}},{id:"nazgul",name:"Nazgûl",shortDescription:"Los Nueve Espectros del Anillo",description:"Los Nazgûl, también conocidos como los Nueve Espectros del Anillo, son los antiguos reyes humanos corrompidos por los Anillos de Poder de Sauron. Ahora esclavos de la voluntad del Señor Oscuro, estos espectros aterradores son sus más temidos servidores, encargados de cazar y capturar al Portador del Anillo. Montados en sus dragones alados y envueltos en sombras, los Nazgûl son una presencia ominosa que infunde terror en el corazón de quienes los encuentran. Su única debilidad es la luz del día y el coraje de aquellos que se atreven a enfrentarlos en la batalla.",imageUrl:"assets/nazgul.jpg",facts:{race:"Hombre",age:"Desconocida",height:"Variable",yearOfBirth:"Desconocido"}},{id:"wargs",name:"Wargs",shortDescription:"Bestias lobunas",description:"Los Wargs son criaturas lobunas inteligentes y feroces, utilizadas por los Uruk-hai y otros servidores de Sauron en la guerra contra los pueblos libres. Dotados de una astucia natural y una ferocidad implacable, los Wargs son temidos por su capacidad para acechar en las sombras y atacar con rapidez y brutalidad. Montados por jinetes orcos, estas bestias son utilizadas como instrumentos de terror y destrucción, sembrando el caos y la desolación a su paso. Su presencia en el campo de batalla es un recordatorio constante del poder oscuro que amenaza con engullir a la Tierra Media.",imageUrl:"assets/wargos_720.jpg",facts:{race:"Criatura",age:"Desconocida",height:"Variable",yearOfBirth:"Desconocido"}},{id:"balrog",name:"Balrog",shortDescription:"El demonio de las sombras",description:"Los Balrogs son antiguos espíritus de fuego y sombra, criaturas temibles que sirven a Morgoth y que fueron despertadas por Sauron en la Tercera Edad. Conocidos por su inmensa fuerza y su habilidad para manipular el fuego, los Balrogs son enemigos mortales capaces de sembrar el caos y la destrucción dondequiera que vayan. El Balrog de Moria, enfrentado por Gandalf en una batalla legendaria, es un recordatorio del poder oscuro que yace en las profundidades de la Tierra Media, una fuerza que debe ser enfrentada con valentía y determinación.",imageUrl:"assets/balrog.jpeg",facts:{race:"Maia",age:"Desconocida",height:"Variable",yearOfBirth:"Desconocido"}},{id:"shelob",name:"Shelob",shortDescription:"La araña gigante",description:"Shelob es una antigua araña gigante que habita en los túneles de Cirith Ungol y es temida por su veneno y su astucia. Conocida como el Terror de las Oscuridades, Shelob es una criatura solitaria y retorcida, cuya única pasión es la caza y la devoración de sus presas. Su guarida, un laberinto de túneles y telarañas, es un lugar de pesadilla que pocos se atreven a explorar. Atrapando a sus víctimas en su red mortal, Shelob se deleita en su sufrimiento antes de consumirlas, una pesadilla viviente en la sombra de la Tierra Media.",imageUrl:"assets/shelob_720.jpg",facts:{race:"Criatura",age:"Desconocida",height:"Variable",yearOfBirth:"Desconocido"}},{id:"mouth_of_sauron",name:"Boca de Sauron",shortDescription:"El heraldo del Señor Oscuro",description:"La Boca de Sauron es el portavoz y heraldo del Señor Oscuro, que negocia con la Compañía del Anillo en la Puerta Negra antes de la Batalla de Morannon. Una figura ominosa y siniestra, la Boca de Sauron es una manifestación de la corrupción y el mal que emana de Mordor. Su presencia inspira terror y desesperación, y sus palabras están llenas de engaño y manipulación. Como representante de Sauron, su propósito es sembrar discordia y desconfianza entre los enemigos del Señor Oscuro, socavando su determinación y esperanza antes de la batalla final.",imageUrl:"assets/boca_de_sauron_720.jpg",facts:{race:"Hombre",age:"Desconocida",height:"Variable",yearOfBirth:"Desconocido"}},{id:"faramir",name:"Faramir",shortDescription:"Hijo de Denethor",description:"Faramir es el hijo menor de Denethor II, el Senescal de Gondor, y es conocido por su sabiduría, nobleza y valentía en la batalla. A diferencia de su hermano Boromir, Faramir demuestra compasión y comprensión, resistiendo la tentación del Anillo Único cuando lo encuentra. Como capitán de los Rangers de Ithilien, protege las fronteras de Gondor de las incursiones de los enemigos de Mordor. Su amor por su pueblo y su determinación para protegerlo lo convierten en un líder respetado y admirado, un símbolo de esperanza en tiempos de oscuridad.",imageUrl:"assets/faramir_720.jpg",facts:{race:"Hombre",age:37,height:"1.83m",yearOfBirth:2983}},{id:"eowyn",name:"Eowyn",shortDescription:"La dama de Rohan",description:"Éowyn es la sobrina del rey Théoden de Rohan y se disfraza de hombre para unirse a la batalla y derrotar al Rey Brujo de Angmar. Cansada de la vida confinada de las mujeres de Rohan, anhela la gloria de la batalla y la oportunidad de demostrar su valentía. Su encuentro con el Rey Brujo en la batalla de Pelennor Fields es legendario, ya que es ella quien finalmente lo derrota. Su coraje y determinación la convierten en un símbolo de la fuerza femenina y la resistencia en un mundo dominado por la guerra y la adversidad.",imageUrl:"assets/eowyn_720.jpg",facts:{race:"Hombre",age:25,height:"1.68m",yearOfBirth:2995}},{id:"denethor",name:"Denethor",shortDescription:"El Senescal de Gondor",description:"Denethor II es el último Senescal de Gondor antes del regreso del rey legítimo. Gobierna con mano dura y cae en la desesperación ante la guerra. Consumido por el pesar y la pérdida, su mente se oscurece y se vuelve cada vez más irracional. Aunque es un líder competente en tiempos de paz, su incapacidad para enfrentar la creciente amenaza de Mordor lo lleva a tomar decisiones desesperadas y destructivas, causando la división y el sufrimiento dentro de su propio reino. Su caída en la locura es un recordatorio sombrío del poder corruptor del miedo y la desesperación.",imageUrl:"assets/denethor_720.jpg",facts:{race:"Hombre",age:89,height:"1.83m",yearOfBirth:2901}},{id:"bilbo_bolson",name:"Bilbo Bolsón",shortDescription:"El antiguo portador del Anillo",description:"Bilbo Bolsón es un hobbit que encontró el Anillo Único durante su aventura con los enanos para reclamar Erebor. Aunque inicialmente lo ve como un simple tesoro, su encuentro con Gollum y la influencia del Anillo lo cambian para siempre. A medida que envejece, su conexión con el Anillo lo lleva a sentir el peso de su poder y su maldición, y eventualmente decide dejarlo a Frodo, comenzando así la misión para destruirlo. A pesar de su papel modesto en la trama principal, Bilbo es un símbolo de coraje y determinación en tiempos de gran adversidad.",imageUrl:"assets/bilbo_720.jpg",facts:{race:"Hobbit",age:131,height:"1.2m",yearOfBirth:2890}},{id:"elrond",name:"Elrond",shortDescription:"Señor de Rivendel",description:"Elrond Medio Elfo es el Señor de Rivendel y un sabio consejero. Ayuda a la Comunidad del Anillo en su misión para destruir el Anillo Único. Conocido por su paciencia y sabiduría, Elrond posee un profundo conocimiento de la historia y el destino de la Tierra Media. Su influencia se extiende mucho más allá de los límites de Rivendel, ya que es respetado y admirado por pueblos de todas las razas. Como guardián de uno de los Últimos Hogares Seguros, su papel en la lucha contra Sauron es fundamental para el destino de toda la Tierra Media.",imageUrl:"assets/elrond_720.jpg",facts:{race:"Elfo",age:"Desconocida",height:"Variable",yearOfBirth:"Desconocido"}},{id:"galadriel",name:"Galadriel",shortDescription:"La dama de Lórien",description:"Galadriel es una poderosa elfa y la señora de Lothlórien, conocida por su sabiduría, belleza y habilidades mágicas. Aunque su papel en la trama principal puede parecer secundario, su influencia y su conexión con el destino de la Tierra Media son fundamentales. Como portadora de uno de los Tres Anillos de los Elfos, Galadriel posee un poder incomparable, pero su sabiduría y compasión son igualmente impresionantes. Su papel como guía y protectora de la Comunidad del Anillo en Lothlórien es esencial para su éxito en la misión para destruir el Anillo Único y derrotar a Sauron.",imageUrl:"assets/galadriel_720.jpg",facts:{race:"Elfo",age:"Desconocida",height:"Variable",yearOfBirth:"Desconocido"}}],O=e=>{const a=document.createElement("ul");return e.forEach(n=>{const r=document.createElement("li"),o=document.createElement("img"),t=document.createElement("h3"),u=document.createElement("p"),c=document.createElement("h4"),b=document.createElement("button");b.classList.add("Info");const g=document.createElement("button");g.classList.add("ChatIndividual"),r.classList.add("item"),o.src=n.imageUrl,t.textContent=n.name,u.textContent=n.shortDescription;const d=`<strong>Raza:</strong> <span class="race-color">${n.facts.race}</span><br> 
    <strong>Edad:</strong> <span class="age-color">${n.facts.age}</span><br>
    <strong>Estatura:</strong> <span class="height-color">${n.facts.height}</span><br>
    <strong>Año de nacimiento:</strong> <span class="year-color">${n.facts.yearOfBirth}</span>`;c.innerHTML=d,b.textContent="Ver Info",g.textContent="Chatear",r.setAttribute("itemtype","actors"),r.setAttribute("itemscope",""),t.setAttribute("itemprop","name"),u.setAttribute("itemprop","description"),c.setAttribute("itemprop","details"),b.setAttribute("itemprop","details"),g.setAttribute("itemprop","details");const p=document.createElement("div");p.classList.add("item-buttons-container"),p.appendChild(b),p.appendChild(g),r.appendChild(o),r.appendChild(t),r.appendChild(u),r.appendChild(c),r.appendChild(p),a.appendChild(r),b.addEventListener("click",()=>{const i=document.createElement("div");i.classList.add("info-modal-container");const s=document.createElement("div");s.classList.add("info-modal-content"),s.innerHTML=`
        <span class="close-btn">&times;</span>
        <img src="${n.imageUrl}" alt="${n.name}">
        <div class="info-details">
          <h2>${n.name}</h2>
          <h3>${n.shortDescription}</h3>
          <strong>Raza:</strong> <span class="race-color">${n.facts.race}</span><br> 
          <strong>Edad:</strong> <span class="age-color">${n.facts.age}</span><br>
          <strong>Estatura:</strong> <span class="height-color">${n.facts.height}</span><br>
          <strong>Año de nacimiento:</strong> <span class="year-color">${n.facts.yearOfBirth}</span> <br>
          <p>${n.description}</p>
          <div class="btn-container">
          <button class="btn-close-modal">Volver al listado</button>  
          <button class="btn-chat">Chatear</button>
          </div>
        </div>
      `,i.appendChild(s),document.body.appendChild(i),s.querySelector(".close-btn").addEventListener("click",()=>{E(i)}),s.querySelector(".btn-chat").addEventListener("click",()=>{E(i),S("/ChatIndividual",{id:n.id})}),s.querySelector(".btn-close-modal").addEventListener("click",()=>{E(i)})}),g.addEventListener("click",()=>{const i=`modal-container-individual-${n.id}`,s=document.createElement("div");s.id=i,s.classList.add("modal-container");const l=document.createElement("div");l.classList.add("modal-content"),l.innerHTML=`
        <span class="close-btn">&times;</span>
        <p><strong>Haz nuevas amistades en la Tierra Media</strong><br>
        <br>
        Ingresa tu API KEY y comienza a chatear con ${n.name}.</p>
        <input type="text" id="individualApiKeyInput" placeholder="API Key">
        <button id="submitIndividualApiKeyBtn">Enviar</button>
      `,s.appendChild(l),document.body.appendChild(s),l.querySelector(".close-btn").addEventListener("click",()=>{E(s)}),l.querySelector("#submitIndividualApiKeyBtn").addEventListener("click",()=>{const m=l.querySelector("#individualApiKeyInput").value;localStorage.setItem("individualApiKey",m),E(s),S("/ChatIndividual",{id:n.id})}),s.addEventListener("click",m=>{m.target===s&&E(s)})})}),a},E=e=>{e&&document.body.removeChild(e)},N=(e,a,n)=>{let r=[];return r=e.filter(o=>o.facts[a]===n),r},W=(e,a,n)=>{let r=[];return r=e.filter(o=>{if(n.split(" ").length===2){const t=n.split(" ");return o.facts[a]>=t[0]&&o.facts[a]<=t[1]}if(n==="100")return o.facts[a]<=n;if(n==="2000")return o.facts[a]>=n&&o.facts[a]<=4e3;if(n==="Desconocida")return o.facts[a]===n}),r},Y=(e,a,n)=>{if(n==="asc")return e.sort((r,o)=>r[a]<o[a]?-1:r[a]>o[a]?1:0);if(n==="desc")return e.sort((r,o)=>r[a]<o[a]?1:r[a]>o[a]?-1:0)},Q=e=>{const a=e.filter(o=>typeof o.facts.age=="number");if(a.length===0)return 0;const r=a.map(o=>o.facts.age).reduce((o,t)=>o+t,0);return Math.floor(r/a.length)},X=()=>{const e=document.createElement("div");e.innerHTML=`
  <h4>Explora el universo épico de El Señor de los Anillos</h4>
  <h5>Encuentra a tus personajes y descubre curiosidades sobre ellos.</h5>
  <div class="barraBuscar">
      <input id="search-bar" type="search" placeholder="Buscar">
  </div>
  <div class="filtros">
    <label for="select-race"></label>
    <select id="select-race" name="select-race" data-testid="select-filter">
        <option value="raza">Raza</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Maia">Maia</option>
        <option value="Hombre">Hombre</option>
        <option value="Elfo">Elfo</option>
        <option value="Enano">Enano</option>
        <option value="Ent">Ent</option>
        <option value="Caballo">Caballo</option>
        <option value="Criatura">Criatura</option>
    </select>
    <label for="select-age"></label>
    <select id="select-age" name="select-age" data-testid="select-filter2">
        <option value="Edad">Edad</option>
        <option value="100">Menos de 100 años</option>
        <option value="100 999">Entre 100 y 999 años</option>
        <option value="2000">2000 años o más</option>
        <option value="Desconocida">Desconocido</option>
    </select>
    <label for="select-sort"></label>
    <select id="select-sort" name="name" itemprop="name" data-testid="select-sort">
      <option value="orden">Orden</option>
      <option value="asc" name="asc">Ascendente</option>
      <option value="desc" name="desc">Descendente</option>
    </select>
    <button id="limpiar" data-testid="button-clear">Limpiar filtros</button>
  </div>
  <div class="contenedor-botones">
    <button id="mostrar" class="mostrar">Mostrar promedio de edades</button>
  </div>
  <div class="conten-estadisticas hidden"></div>
  <ul id="root"></ul>
  `;let a=[...f];function n(){const d=document.querySelector("#select-race").value,p=document.querySelector("#select-age").value,i=document.querySelector("#select-sort").value,s=document.querySelector("#search-bar").value;a=[...f],d!=="raza"&&(a=N(a,"race",d)),p!=="Edad"&&(a=W(a,"age",p)),s&&(a=a.filter(l=>l.name.toLowerCase().includes(s.toLowerCase()))),i!=="orden"&&(a=Y(a,"name",i)),r()}function r(){if(o.innerHTML="",a.length===0)return g();const d=O(a);o.appendChild(d)}const o=e.querySelector("#root");o&&(o.innerHTML=O(f).innerHTML);const t=e.querySelector("#search-bar");t.addEventListener("input",()=>{n()});const u=e.querySelector("#select-race"),c=e.querySelector("#select-age"),b=e.querySelector("#select-sort");u.addEventListener("change",()=>{n()}),c.addEventListener("change",()=>{n()}),b.addEventListener("change",()=>{n()}),e.querySelector('[data-testid="button-clear"]').addEventListener("click",function(){u.value="raza",c.value="Edad",b.value="orden",t.value="",a=[...f],r();const d=e.querySelector(".conten-estadisticas");d.innerHTML="",d.classList.remove("visible")}),r(),e.querySelector("#mostrar").addEventListener("click",function(){const d=e.querySelector(".conten-estadisticas"),p=Q(a);d.innerHTML=`
        <div><span class="frase-edad">La edad promedio de los personajes es</span></div>
        <div><span class="edad-promedio">${p}</span></div>
        <div><span class="años">años</span></div>
    `,d.classList.add("visible")});function g(){o.innerHTML="";const d=document.createElement("p");d.innerHTML=`No se encontraron personajes que coincidan con tus criterios. <br>
    Prueba con otros términos de búsqueda o ajusta los filtros para encontrar a tus personajes favoritos.
    `,d.classList.add("empty-state"),o.appendChild(d)}return e},J=()=>{const e=document.createElement("footer");return e.innerHTML=`  
    <div class="footerDetails">
    <footer>
      <div class="details"><strong>Dirección </strong> En algún lugar de la Tierra Media</div>
      <div class="details"><strong>Contacto</strong> 1600 - LA COMARCA</div>
      <div class="details"><strong>Email</strong> lacomarca@elseñordelosanillos.com</div>
      <br>
      <div class="details">© 2024 Laboratoria. All Rights Reserved - Silvia Pineda </div>
    </footer>
    </div>
    `,e},Z=()=>{const e=document.createElement("div"),a=R();e.appendChild(a);const n=V();e.appendChild(n);const r=X();e.appendChild(r);const o=J();return e.appendChild(o),e},ee=()=>{const e=document.createElement("div");return e.classList.add("not-found"),e.innerHTML=`
    <div class="overlay">
      <p>Te has desviado del sendero, viajero. <br>
      Regresa a la <a href="/">Comarca</a> y continúa tu aventura.</p>
      <button id="button-goHome">Regresar</button>
    </div>
    <img class="error-image" src="data/img/error-image.png">
  `,e.querySelector("#button-goHome").addEventListener("click",()=>{window.location.href="index.html"}),e},ae=()=>{const e=document.createElement("div");e.className="viewError";const a=ee();return e.appendChild(a),e},M=()=>localStorage.getItem("apikey"),oe=e=>{localStorage.setItem("apikey",e)},k=(e,a)=>{const n=[];if(Array.isArray(a))for(let o=0;o<a.length;o++){const t=r(a[o]);n.push(t)}else{const o=r(a);n.push(o)}function r(o){const t=M(),u={model:"gpt-3.5-turbo",messages:[{role:"user",content:`${e}`},{role:"system",content:`Responde en primera persona como si fuera este personaje del Señor de los Anillos:${o}`}],temperature:.7};return fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(u)}).then(c=>c.json()).then(c=>c.choices).catch(c=>{throw c})}return Promise.all(n).then(o=>o).catch(o=>{throw o})};let x=!1;const U=()=>{if(!x){const e=document.createElement("div");e.classList.add("modal-container");const a=document.createElement("div");a.classList.add("modal-content"),a.innerHTML=`
      <span class="cerrarX">&times;</span>
      <p><strong>Desbloquea la Tierra Media</strong><br><br>
      Ingresa tu API KEY y forja amistades en esta épica conversación.
      </p>
      <input type="text" id="apiKeyInput" placeholder="API Key"><br>
      <button id="submitApiKeyBtn">Enviar</button>
    `,e.appendChild(a),document.body.appendChild(e);const n=a.querySelector("#apiKeyInput");a.querySelector(".cerrarX").addEventListener("click",()=>{w(e)}),a.querySelector("#submitApiKeyBtn").addEventListener("click",()=>{const t=n.value;t===""?alert("Debes ingresar una ApiKey válida"):(oe(t),w(e),x=!0)}),e.addEventListener("click",t=>{t.target===e&&w(e)})}},w=e=>{e&&e.remove()},ne=()=>{const e=document.createElement("div");e.classList.add("chat-body","chat-groupal");const a=document.createElement("div");a.classList.add("header-container");const n=document.createElement("button"),r=document.createElement("img");r.src="data/img/chevron-left.svg",n.appendChild(r),n.classList.add("back-button"),a.appendChild(n);const o=document.createElement("h1");o.textContent="Chismorreos de la Tierra Media",a.appendChild(o),e.appendChild(a),n.addEventListener("click",()=>{S("/")});const t=document.createElement("div");t.innerHTML=`
    <p class="linea"></p>
    `,e.appendChild(t);const u=[];for(let i=0;i<f.length;i++)u.push(f[i].id);const c=document.createElement("div");c.classList.add("chat-container"),e.appendChild(c);const b=document.createElement("div");b.innerHTML=`
    <p class="linea"></p>
    `,e.appendChild(b);const g=document.createElement("form");g.classList.add("input-Container"),e.appendChild(g);const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("placeholder","Escribe un mensaje..."),d.classList.add("message-input"),g.appendChild(d);const p=document.createElement("button");return p.textContent="Enviar",p.classList.add("button-Send"),g.appendChild(p),M()||U(),p.addEventListener("click",async i=>{if(i.preventDefault(),!M()){U();return}const s=document.createElement("div");s.classList.add("user-message-container");const l=document.createElement("div");l.classList.add("message-bubble");const h=document.createElement("p");h.textContent=d.value,l.appendChild(h),s.appendChild(l),c.appendChild(s);const v=d.value;d.value="";const m=document.createElement("div");m.classList.add("writing-container");const j=document.createElement("p");j.classList.add("writing"),j.textContent="24 personas de la Comarca están escribiendo...";const y=document.createElement("img");y.src="/data/img/Group-Typing.svg",y.style.border="none",y.style.width="90px",y.style.height="90px",y.alt="Imagen de personas escribiendo",m.appendChild(y),m.appendChild(j),c.appendChild(m);try{const I=M(),C=await k(v,u,I);c.removeChild(m),C.forEach((L,D)=>{const A=document.createElement("div");A.classList.add("response-message");const q=document.createElement("img");q.classList.add("imageCharacter"),q.src=f[D].imageUrl,q.alt=f[D].name;const B=document.createElement("div");B.classList.add("message-text-container");const H=document.createElement("p");H.innerHTML=`<span style="font-weight: bold;">${f[D].name}:</span> ${L[0].message.content}`,B.appendChild(H),A.appendChild(q),A.appendChild(B),c.appendChild(A)})}catch{c.removeChild(m);const C=document.createElement("div");C.classList.add("error-message");const L=document.createElement("p");L.textContent="Habla, amigo y entra... surgió un problema, por favor revisa tu Api Key para acceder",C.appendChild(L),c.appendChild(C),d.value=""}c.style.overflowY="auto"}),e},re=e=>{const a=e.id,n=f.find(i=>i.id===a),r=document.createElement("div");r.classList.add("chat-body","chat-individual"),r.innerHTML=`
  <section class="first-chat">
  <a id="back-home"> <img class="back-img" src="data/img/chevron-left.svg" alt="back"></a>

  <div>
    <p class="character-name">${n.name}</p>
    <p class="linea"></p>
  </div>
</section>
<div id="text-container" class="text-container"></div>
<p class="linea"></p>

<form class="flex-Input">
  <input id="input-message" class="message-input" type="text" placeholder="Escribe un mensaje...">
  <button id="send-message" class="button-Send" type="submit">Enviar</button>
</form>
      
  `,r.querySelector("#back-home").addEventListener("click",()=>{S("/")});const t=r.querySelector("#text-container"),u=r.querySelector("#send-message"),c=r.querySelector("#input-message");function b(i){const s=document.createElement("div");s.classList.add("user-message");const l=document.createElement("div");return l.classList.add("message-bubble"),l.textContent=i,s.appendChild(l),s}function g(i){const s=document.createElement("div");s.classList.add("ia-message");const l=document.createElement("img");l.classList.add("character-image"),l.src=`${n.imageUrl}`,l.alt=`Imagen de ${n.name}`;const h=document.createElement("div");return h.classList.add("message-bubble"),h.textContent=i,s.appendChild(l),s.appendChild(h),s}function d(i){const s=document.createElement("div");s.classList.add("writing-container");const l=document.createElement("p");l.classList.add("writing"),l.textContent=`${i.name} está escribiendo...`;const h=document.createElement("img");return h.src=`${i.imageUrl}`,h.alt=`Imagen de ${i.name} escribiendo`,s.appendChild(h),s.appendChild(l),s}async function p(){const i=c.value;c.value="";const s=b(i);t.appendChild(s),t.scrollTop=t.scrollHeight;const l=d(n);t.appendChild(l),t.scrollTop=t.scrollHeight;try{const v=(await k(i,a))[0][0].message.content,m=g(v);t.appendChild(m),t.removeChild(l),t.scrollTop=t.scrollHeight}catch{const v=document.createElement("div");v.classList.add("error-message");const m=document.createElement("div");m.classList.add("message-bubble"),m.textContent="Habla, amigo y entra... surgió un problema, por favor revisa tu Api Key para acceder",v.appendChild(m),t.appendChild(v),t.removeChild(l)}}return u.addEventListener("click",i=>{i.preventDefault(),p()}),r},te=document.getElementById("root"),se={"/":Z,"/error":ae,"/ChatGrupal":ne,"/ChatIndividual":re};P(se);F(te);document.addEventListener("DOMContentLoaded",()=>{$(window.location.pathname)});window.addEventListener("popstate",()=>{$(window.location)});
