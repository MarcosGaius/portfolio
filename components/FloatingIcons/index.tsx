import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export default function FloatingIcons() {
  return (
    <div className="hidden lg:flex flex-col fixed z-30 left-0 h-screen justify-center items-center ml-7 gap-6 after:content[''] after:h-1/5 after:w-px after:bg-white after:bg-opacity-75 before:content[''] before:h-1/5 before:w-px before:bg-white before:bg-opacity-75">
      <a
        href="https://github.com/MarcosGaius"
        target="_blank"
        rel="noreferrer"
        className="text-white text-opacity-75 hover:text-opacity-100"
        about="Link para o GitHub do Marcos Gaius"
      >
        <AiFillGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/marcos-gaius/"
        target="_blank"
        rel="noreferrer"
        className="text-white text-opacity-75 hover:text-opacity-100"
        about="Link para o Linkedin do Marcos Gaius"
      >
        <AiFillLinkedin size={30} />
      </a>
      <a
        href="mailto:gaiusmarcos@protonmail.com"
        target="_blank"
        rel="noreferrer"
        className="text-white text-opacity-75 hover:text-opacity-100"
        about="Link para o e-mail do Marcos Gaius"
      >
        <AiFillMail size={30} />
      </a>
    </div>
  );
}
