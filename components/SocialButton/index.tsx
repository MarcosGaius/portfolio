import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Text from "../Text";

interface ISocialButtonProps {
  media: "github" | "email" | "linkedin";
  size?: number;
  href: string;
}

export default function SocialButton({ media, size, href }: ISocialButtonProps) {
  const mediaInfo = {
    github: {
      icon: <AiFillGithub size={size ? size : "30"} />,
      name: "GitHub",
    },
    email: {
      icon: <AiFillMail size={size ? size : "30"} />,
      name: "E-mail",
    },
    linkedin: {
      icon: <AiFillLinkedin size={size ? size : "30"} />,
      name: "Linkedin",
    },
  };

  return (
    <a className="flex items-center gap-2 border-2 px-2 py-1 hover:bg-white hover:text-black" href={href} rel="noreferrer" target="_blank">
      {mediaInfo[media].icon}
      <Text>{mediaInfo[media].name}</Text>
    </a>
  );
}
