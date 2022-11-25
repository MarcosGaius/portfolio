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

export default function Home() {
  const typewriteRef = useRef(null);
  const isIntersecting = useIntersectionObserver(typewriteRef);

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
        <title>Marcos Gaius: Desenvolvedor FullStack</title>
        <meta
          name="description"
          content="Olá! Me chamo Marcos Gaius e sou desenvolvedor full-stack. Aqui você poderá conhecer tanto eu quanto meu trabalho melhor!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Marcos Gaius - Desenvolvedor FullStack" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Olá! Me chamo Marcos Gaius e sou desenvolvedor full-stack. Aqui você poderá conhecer tanto eu quanto meu trabalho melhor!"
        />
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
                  Aprender é minha <span className="text-secondary-blue">paixão</span>
                </h2>
                <div className="flex flex-col gap-6 text-lg opacity-80">
                  <Text weight="semibold">
                    Minha máxima pessoal é fazer o <strong>melhor</strong> que posso ao que me proponho. Então espere muito esforço e
                    dedicação nas minhas incumbências. Com isso, criação e estudo fazem parte da minha rotina, e na programação encontrei o{" "}
                    <strong>balanço perfeito</strong>!
                  </Text>
                  <Text weight="semibold">
                    Minha jornada com programação começou por volta dos meus 13 anos mexendo com plugins para Minecraft! A partir de 2020
                    começei a dedicar maior parte do meu tempo na área.
                  </Text>
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
              <span>Atualmente, sou desenvolvedor&nbsp;</span>
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
                    Em 2017 conheci o Bitcoin, e com isso, nasceu meu grande <strong>apreço</strong> por todo o ecossistema de{" "}
                    <strong>blockchains, web3 e relacionados.</strong>
                  </Text>
                  <Text weight="semibold">
                    Por volta de 2021, percebi a <strong>revolução</strong> que o novo paradigma da web3 irá trazer e, assim, passei a
                    alinhar meu gosto pela programação com isso.
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

//i18n - add atributo lang
