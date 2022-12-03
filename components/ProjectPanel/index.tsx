import { mainProject } from "./data";
import Image from "next/image";
import Text from "../Text";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Link from "next/link";
import IconButton from "../IconButton";
import ImageSlider from "../ImageSlider";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

interface IProjectPanelProps {
  id: string;
}

export default function ProjectPanel({ id }: IProjectPanelProps) {
  const { t } = useTranslation();
  const { locale } = useRouter();

  const projectDescription = locale === "en" ? mainProject.description.en : mainProject.description.pt;

  return (
    <div
      className="flex flex-col items-center gap-20 bg-dark-blue py-10 px-5 md:p-14 lg:p-20 rounded-3xl border border-accent-blue drop-shadow-blue-sm"
      id={id}
    >
      <div className="flex flex-col w-full">
        <h2 className="font-sans text-3xl font-bold m-auto">{t("projects_title")}</h2>
        <div className="flex flex-col">
          <h3 className="text-xl mb-3 mt-5">{mainProject.title}</h3>
          <div className="overflow-hidden rounded-2xl mb-10 w-full">
            <Link href={mainProject.links.custom} target="_blank">
              <Image
                src={mainProject.image}
                alt="Imagem do projeto colecionvel.digital"
                className="hover:scale-105 transition-all object-fill w-full"
              />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-0 md:gap-x-10">
            <div className="flex flex-col gap-3 pmd:gap-5">
              <IconButton href={mainProject.links.github}>
                <FiGithub size={30} />
              </IconButton>
              <IconButton href={mainProject.links.custom}>
                <FiExternalLink size={30} />
              </IconButton>
            </div>
            <Text className="text-xl text-center md:text-right opacity-90">{projectDescription}</Text>
          </div>
        </div>
      </div>
      <ImageSlider title={t("other_projects_title")} />
    </div>
  );
}
