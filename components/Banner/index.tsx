import Image from "next/image";
import bannerImage from "../../public/images/banner_pic.jpg";
import ParticlesBackground from "../Particles";
import Text from "../Text";
import { useTranslation, Trans } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();

  return (
    <section className="h-screen w-screen flex justify-center items-center">
      <Image alt="" src={bannerImage} className="object-cover blur-sm opacity-30 h-full absolute" />
      <div className="flex flex-col justify-center items-center gap-1 w-full h-screen p-4 text-center md:p-0 z-10">
        <h1 className="font-titillium font-bold text-5xl">
          <Trans i18nKey="presentation_title">
            Hi! I&apos;m<span className="bg-gradient-to-l from-cyan-500 to-cyan-300 bg-clip-text text-transparent">Marcos Gaius</span>
          </Trans>
        </h1>
        <Text className="text-xl opacity-80 mt-0.5" weight="normal">
          {t("presentation_subtitle")}
        </Text>
        <a href="#contact" className="bg-accent-blue px-10 py-3 rounded-lg transition-all hover:bg-secondary-blue mt-10">
          <Text weight="bold">{t("cta_contact_me")}</Text>
        </a>
      </div>
      <ParticlesBackground />
    </section>
  );
}
