import mainProjectImage from "../../public/images/main_project.jpg";
import kenzieBurguerImage from "../../public/images/kenzie_burguer.jpg";
import onFlowImage from "../../public/images/onflow.jpg"
import nuKenzieImage from "../../public/images/nukenzie.jpg"
import kenzieHubImage from "../../public/images/kenziehub.jpg"
import mdtImage from "../../public/images/mdt.jpg"
import portfolioImage from "../../public/images/portfolio.jpg"
import spsImage from "../../public/images/sps_api.jpg"

export const mainProject = {
  title: "🔥 colecionavel.digital",
  description:
    "A colecionavel.digital é um projeto em construção que fornece a criação de coleções de NFTs via pix com facilitação de integração no Instagram. Sou responsável pelo desenvolvimento da aplicação e do respectivo contrato inteligente. Mais informações, como Whitepaper e Roadmap, se encontram no link.",
  image: mainProjectImage,
  links: {
    github: "",
    custom: "",
  },
};

export const otherProjects = [
  {
    title: "Kenzie Burguer",
    image: kenzieBurguerImage,
    links: {
      github: "https://github.com/MarcosGaius/KenzieBurguer-ReactJS",
      custom: "https://kenzie-burguer-react-js.vercel.app/",
    },
    id: 1,
  },
  {
    title: "OnFlow",
    image: onFlowImage,
    links: {
      github: "https://github.com/orgs/M3-7-Project/repositories",
      custom: "https://music-project-lemon.vercel.app",
    },
    id: 2,
  },
  {
    title: "API SPS",
    image: spsImage,
    links: {
      github: "https://github.com/orgs/Project-SPS/repositories",
      custom: "https://sps-api-documentation-vsm6.vercel.app/",
    },
    id: 3,
  },
  {
    title: "Portfólio",
    image: portfolioImage,
    links: {
      github: "https://github.com/MarcosGaius/portfolio",
      custom: "teste.com",
    },
    id: 4,
  },
  {
    title: "MDT",
    image: mdtImage,
    links: {
      github: "https://github.com/MarcosGaius/mdt_nerolinuxius",
      custom: "https://github.com/MarcosGaius/mdt_nerolinuxius#readme",
    },
    id: 5,
  },
  {
    title: "Kenzie Hub",
    image: kenzieHubImage,
    links: {
      github: "https://github.com/MarcosGaius/KenzieHub-ReactJS",
      custom: "https://kenzie-hub-react-js.vercel.app/",
    },
    id: 6,
  },
  {
    title: "Nu Kenzie",
    image: nuKenzieImage,
    links: {
      github: "https://github.com/MarcosGaius/NuKenzie-ReactJS",
      custom: "https://nu-kenzie-react-js.vercel.app",
    },
    id: 7,
  },
];
