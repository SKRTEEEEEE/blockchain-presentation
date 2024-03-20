import { HomeIcon,  Github, Mail, Link, PackageSearch, ZoomIn, Bitcoin, UserRoundSearch } from "lucide-react";
import { IoBusinessOutline } from "react-icons/io5";

export const socialNetworks = [
    {
        id: 3,
        logo: <Github  size={30} strokeWidth={1} />,
        src: "https://github.com/SKRTEEEEEE",
    },
    {
        id: 1,
        logo: <UserRoundSearch size={30} strokeWidth={1} />,
        src: "https://profile-skrt.vercel.app/",
    },
    {
        id: 2,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:adanreh.m@gmail.com",
    },

];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <IoBusinessOutline 
        size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 3,
        title: "Target",
        icon: <PackageSearch size={25} color="#fff" strokeWidth={1} />,
        link: "/link",
        
    },
    {
        id: 4,
        title: "Book",
        icon: < Link   size={25} color="#fff" strokeWidth={1} />,
        link: "/functions",
    },
    {
        id: 5,
        title: "De-Fi",
        icon: <Bitcoin size={25} color="#fff" strokeWidth={1} />,
        link: "/defi",
    },
    {
        id: 5,
        title: "Code",
        icon: <ZoomIn  size={25} color="#fff" strokeWidth={1} />,
        link: "/code",
    },
];

export const dataStudiesPage = [
    {
        id: 1,
        title: "Contratos inteligentes",
        description: 
            "Los contratos inteligentes son programas informáticos auto ejecutables que se ejecutan en la blockchain cuando se cumplen ciertas condiciones predefinidas. Las empresas pueden utilizar contratos inteligentes para automatizar procesos comerciales, lo que reduce la necesidad de intermediarios y minimiza los errores humanos.",
    },
    {
        id: 2,
        title: "Registro y seguimiento de activos",
        description: "Permite crear registros inmutables y transparentes de activos como productos, materias primas, propiedad intelectual, etc. Esto puede ayudar a rastrear la procedencia de los productos, garantizar la autenticidad, combatir la falsificación...",
    },
    {
        id: 3,
        title: "Gestión de la cadena de suministro",
        description: "Mejora la transparencia y la trazabilidad en la cadena de suministro al permitir que las empresas y los consumidores rastreen el origen y el recorrido de los productos.",
    },
    {
        id: 4,
        title: "Gestión de identidad y autenticación",
        description: "Proporciona un registro seguro y verificable de identidades, para gestionar la identidad digital de los clientes, empleados y otros actores dentro de una empresa. Ayudando a prevenir el fraude y mejorando la seguridad en línea.",
    },
    {
        id: 5,
        title: "Finanzas y pagos",
        description: "Simplifican y agilizan los procesos de pago, eliminando la necesidad de intermediarios como bancos y reduciendo los costos de transacción. Se pueden utilizar para facilitar pagos transfronterizos, micropagos, remesas internacionales, como medio de inversion, etc...",
    },
    {
        id: 6,
        title: "Gestión de derechos de autor y propiedad intelectual",
        description: "Registra y protege los derechos de autor y la propiedad intelectual de manera segura y transparente. Esto puede ayudarle a proteger sus activos digitales y garantizar una compensación justa por su trabajo.",
    },
];

export const serviceData = [
    {
        image: "/compromiso.png",
        title: "Aumento del compromiso",
        description: "Los juegos y herramientas interactivas mantendrán a los usuarios comprometidos con la marca, ya que buscarán participar en las actividades relacionadas con sus NFTs.",
    },
    {
        image: "/competencia.png",
        title: "Diferenciación de la competencia",
        description: "La integración de juegos y herramientas interactivas en los NFTs destacará la marca frente a la competencia, ofreciendo una experiencia única y atractiva.",
    },
    {
        image: "/fidelizacion-clientes.png",
        title: "Finalización de clientes",
        description: "Los usuarios se sentirán más apegados a la marca al disfrutar de actividades entretenidas a través de sus NFTs, lo que aumentará la fidelidad hacia los productos reales asociados..",
    },
    {
        image: "/visibilidad.png",
        title: "Mayor visibilidad de la marca",
        description: "Al ofrecer una experiencia interactiva, la marca ganará mayor visibilidad en plataformas digitales, lo que atraerá a nuevos clientes potenciales.",
    },
    {
        image: "/ingresos-ad.png",
        title: "Generación de ingresos adicionales",
        description: "La implementación de juegos y herramientas interactivas puede abrir nuevas oportunidades de ingresos a través de la venta de productos virtuales relacionados con los NFTs. ",
    },
    {
        image: "/potencial-interes.png",
        title: "Potencial viral",
        description: "Los juegos y herramientas interactivas pueden ser compartidos en redes sociales, generando interés y viralidad en torno a la marca y sus productos asociados.",
    },
    {
        image: "/fidelizacion-clientes.png",
        title: "Experiencia de usuario mejorada",
        description: "Los usuarios disfrutarán de una experiencia más enriquecedora al interactuar con sus NFTs a través de juegos y herramientas, lo que potenciará su satisfacción.",
    },
    {
        image: "/comunidad.png",
        title: "Ampliación de la comunidad",
        description: "La implementación de actividades interactivas atraerá a nuevos miembros a la comunidad de usuarios de los NFTs, fortaleciendo la red de seguidores de la marca.",
    },
    {
        image: "/posicionamiento.png",
        title: "Posicionamiento como marca innovadora",
        description: "La adopción de tecnologías como los NFTs con funciones adicionales posicionará a la marca como innovadora y a la vanguardia en su industria.",
    },
    {
        image: "/colaboraciones.png",
        title: "Oportunidades de colaboración",
        description: "La integración abrirá oportunidades de colaboración con desarrolladores de juegos, aplicaciones, blockchains existentes, etc... Enriqueciendo la oferta de la marca y mejorando en engangment.",
    },
];
export const formasComunesData = [
    {
        image: "/compromiso.png",
        title: "Venta publica",
        description: "Los compradores interesados pueden adquirirlos a cambio de una cantidad de criptomoneda o moneda fiduciaria establecida previamente",
    },
    {
        image: "/competencia.png",
        title: "Subasta",
        description: "Subasta en la que los interesados pueden pujar, con duración determinada, continuar hasta que se alcanza un precio mínimo, o se cumplen ciertas condiciones",
    },
    {
        image: "/fidelizacion-clientes.png",
        title: "Gradual",
        description: "Liberación en intervalos de tiempo predefinidos. Genera expectación y mantiene el interés de la audiencia a lo largo del tiempo.",
    },
    {
        image: "/visibilidad.png",
        title: "Lotes",
        description: "Liberación en lotes más pequeños. Permite control sobre la distribución y la demanda, así como la posibilidad de ajustar la estrategia en función de la respuesta inicial del mercado.",
    },
    {
        image: "/ingresos-ad.png",
        title: "Objetivos",
        description: "Liberación gradual o en etapas, vinculadas al logro de ciertos objetivos predefinidos. Incentiva la participación de la comunidad y promueve el compromiso.",
    },

   
];

export const defiSection = [
    {
        id: 1,
        name: "Aceptación de Pagos con Criptoactivos",
        description:
            "Permite a los clientes realizar transacciones utilizando criptomonedas como Bitcoin, Ethereum y muchas otras.",
        imageUrl: "/cryptopay.png",
       
    },
    {
        id: 2,
        name: "Aceptación de Pagos con Criptoactivos",
        description:
            "Proporciona una forma rápida, segura y transparente de procesar pagos.",
        imageUrl: "/cryptopay.png",
       
    },
    {
        id: 3,
        name: "Aceptación de Pagos con Criptoactivos",
        description:
            "Atrae a los entusiastas de las criptomonedas y a aquellos que buscan una forma alternativa de pago.",
        imageUrl: "/cryptopay.png",
       
    },
    {
        id: 4,
        name: "Aceptación de Pagos con NFTs",
        description:
            "Permite a los clientes pagar con NFTs exclusivos de su empresa o empresas las cuales le interesados.",
        imageUrl: "/nftspay.png",
       
    },
    {
        id: 5,
        name: "Aceptación de Pagos con NFTs",
        description:
            "Atrae a coleccionistas y entusiastas de los NFTs, y motiva al publico a utilizar vuestros servicios y estar mas vinculado y motivo al usar vuestra marca.",
        imageUrl: "/nftspay.png",
       
    },
    {
        id: 6,
        name: "Aceptación de Pagos con NFTs",
        description:
            "Permite coleccionar arte digital, el cual por razones artísticas o comerciales le interese a su marca.",
        imageUrl: "/nftspay.png",
       
    },
   
];
export const importanciaLiberacionData = [
    {
        
        title: "Exclusividad y escasez",
        description:
            "Un sistema de liberación cuidadosamente planificado puede crear una sensación de exclusividad y escasez alrededor de tus NFTs o tokens. Aumentando su atractivo para los coleccionistas y los seguidores de tu marca, ya que saben que están adquiriendo algo único y limitado. Dependiendo del sistema de liberación que elijas, puedes agregar valor a tu contenido digital.",
        image: "/cryptopay.png",
       
    },
    {
        
        title: "Fidelización audiencia",
        description:
            "Al implementar un sistema de liberación que involucre a tu audiencia de manera activa, como a través de concursos, sorteos o eventos especiales, puedes fomentar la participación y la fidelización de tus seguidores. Esto ayuda a mantener su interés en tu marca a largo plazo.",
        image: "/cryptopay.png",
       
    },
   
    {
        
        title: "Control y distribución",
        description:
            "La elección del sistema de liberación te permite tener un mayor control sobre la distribución de tus NFTs o tokens. Esto es importante para garantizar que tus activos digitales lleguen a las manos adecuadas y se utilicen de manera que refuercen los valores y la identidad de tu marca.",
        image: "/cryptopay.png",
       
    },
   
    {
        
        title: "Innovación y creatividad",
        description:
            "La variedad de sistemas de liberación disponibles te brinda la oportunidad de ser innovador y creativo en la forma en que presentas y distribuyes tus NFTs o tokens. Esto puede generar interés adicional por parte de tu audiencia y destacarte entre la multitud.",
        image: "/cryptopay.png",
       
    },
   
   
   

   
];