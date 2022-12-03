import { motion, Variants } from "framer-motion";
import Text from "../Text";
import { ITech, techList } from "./data";
import { useTranslation } from "react-i18next";

export default function TechList() {
  const { t } = useTranslation();

  const opacityVariants: Variants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const opacityItemVariants: Variants = {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="bg-dark-blue flex flex-col justify-center items-center gap-10 py-16">
      <Text weight="normal" className="text-xl">
        {t("techs_title")}
      </Text>
      <motion.ul
        className="w-3/4 lg:w-2/4 flex flex-wrap gap-6 justify-center"
        variants={opacityVariants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {techList.map((tech: ITech) => (
          <motion.li key={tech.name} variants={opacityItemVariants}>
            <i className={`${tech.icon} text-6xl`} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
