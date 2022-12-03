import { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import ContactSection from "../components/ContactSection";
import FloatingIcons from "../components/FloatingIcons";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectPanel from "../components/ProjectPanel";
import TechList from "../components/TechList";
import Text from "../components/Text";
import Typewriter from "typewriter-effect";
import { Trans, useTranslation } from "react-i18next";

export default function Home() {
  const typewriteRef = useRef(null);
  const isIntersecting = useIntersectionObserver(typewriteRef);
  const { t } = useTranslation();

  const fromRightAnimationVariant: Variants = {
    initial: { x: "-100%" },
    visible: { x: 0 },
  };

  const fromLeftAnimationVariant: Variants = {
    initial: { x: "100%" },
    visible: { x: 0 },
  };

  return (
    <>
      <Head>
        <title>{t("meta_title")}</title>
        <meta name="description" content={t("meta_description")!} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={t("og_meta_title")!} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={t("og_meta_description")!} />
      </Head>

      <Header />

      <main>
        <FloatingIcons />
        <Banner />

        <section id="about">
          <div className="py-24 px-4 md:px-10 lg:px-24">
            <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0">
              <motion.div
                className="w-full md:w-2/4 text-center md:text-start flex flex-col gap-10"
                initial="initial"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                variants={fromRightAnimationVariant}
              >
                <h2 className="text-3xl font-bold">
                  <Trans i18nKey="about_me_title">
                    Aprender é <span className="text-secondary-blue">paixão</span>
                  </Trans>
                </h2>
                <div className="flex flex-col gap-6 text-lg opacity-80">
                  <Text weight="semibold">
                    <Trans i18nKey="about_me_content.first" />
                  </Text>
                  <Text weight="semibold">{t("about_me_content.second")}</Text>
                </div>
              </motion.div>
              <motion.div
                className="w-full md:w-2/4 flex justify-end"
                initial="initial"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                variants={fromLeftAnimationVariant}
              >
                <Image
                  src="/images/developer_illustration.svg"
                  alt="Ilustração de um Desenvolvedor usando o computador com fundo remetendo à blockchain e Ethereum"
                  width="500"
                  height="500"
                  className="-scale-x-100"
                />
              </motion.div>
            </div>

            <h2
              className="flex flex-wrap justify-center text-center md:justify-start md:text-start text-3xl font-bold mt-20 drop-shadow-blue-sm"
              ref={typewriteRef}
            >
              <span>{t("about_me_stack")}&nbsp;</span>
              <span className="text-secondary-blue">
                {isIntersecting && <Typewriter onInit={(typewriter) => typewriter.changeDelay(70).typeString("Full-Stack").start()} />}
              </span>
            </h2>
          </div>

          <TechList />

          <div className="py-24 px-4 md:px-10 lg:px-24 flex flex-col gap-24">
            <div className="w-full flex flex-col md:flex-row-reverse gap-10 md:gap-0">
              <motion.div
                className="w-full md:w-2/4 text-center md:text-right flex flex-col gap-10"
                initial="initial"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                variants={fromLeftAnimationVariant}
              >
                <h2 className="text-3xl font-bold">👷 We are all gonna make it</h2>
                <div className="flex flex-col gap-6 text-lg opacity-80">
                  <Text weight="semibold">
                    <Trans i18nKey="about_me_crypto.first" />
                  </Text>
                  <Text weight="semibold">
                    <Trans i18nKey="about_me_crypto.second" />
                  </Text>
                </div>
              </motion.div>
              <motion.div
                className="w-full md:w-2/4 flex justify-start"
                initial="initial"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                variants={fromRightAnimationVariant}
              >
                <Image
                  src="/images/crypto_illustration.svg"
                  alt="Ilustração de uma pessoa carregando Bitcoins físicos em um carrinho de mão"
                  width="500"
                  height="500"
                  className="-scale-x-100"
                />
              </motion.div>
            </div>

            <ProjectPanel id="projects" />

            <ContactSection id="contact" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
