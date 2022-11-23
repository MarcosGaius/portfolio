import { Menu } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useCurrentHeight } from "../../hooks/useCurrentHeight";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion, Variants } from "framer-motion";

export default function Header() {
  const BASE_HEADER_CLASS =
    "flex justify-between items-center px-4 md:px-10 lg:px-24 py-6 font-sans fixed w-screen z-50 transition-all duration-300";

  const dropdownAnimationVariants: Variants = {
    visible: {
      x: 0,
    },
    hidden: {
      x: 500,
    },
  };

  const childrenAnimationVariants: Variants = {
    visible: {
      x: 0,
    },
    hidden: {
      x: 200,
    },
  };

  const [viewportHeight, setViewportHeight] = useState<number>(0);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const height = useCurrentHeight();

  useEffect(() => {
    setShowDropdown(window.innerWidth <= 768);
    setViewportHeight(window.innerHeight);

    const handleResize = () => {
      setShowDropdown(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (showDropdown) {
    return (
      <header
        className={
          viewportHeight !== 0 && viewportHeight <= height
            ? `${BASE_HEADER_CLASS} bg-[#00080E] bg-opacity-50`
            : `${BASE_HEADER_CLASS} bg-transparent`
        }
      >
        <p className="text-2xl font-oswald font-light">
          Marcos<span className="text-secondary-blue">Gaius</span>
        </p>

        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className="flex bg-accent-blue rounded-sm w-8 h-8 p-0.5">
                <BiMenu className="w-full h-full" />
              </Menu.Button>
              <AnimatePresence>
                {open && (
                  <motion.div
                    key="dropdown"
                    variants={dropdownAnimationVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ type: "spring", bounce: 0, staggerChildren: 0.1 }}
                    className="absolute top-0 left-0"
                  >
                    <Menu.Items className="absolute z-50 bg-[#00080E] w-screen h-screen top-0 left-0" static>
                      <nav className="flex flex-col gap-4 w-full h-full p-6 font-semibold text-xl">
                        <Menu.Item>
                          <button className="w-9 h-9 hover:rotate-[360deg] transition-all duration-200 self-end mb-10">
                            <IoMdClose className="w-full h-full" />
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          <motion.a
                            href="#"
                            className=" hover:text-secondary-blue"
                            transition={{ duration: 0.3, type: "tween" }}
                            variants={childrenAnimationVariants}
                          >
                            Início
                          </motion.a>
                        </Menu.Item>
                        <Menu.Item>
                          <motion.a
                            href="#about"
                            className="hover:text-secondary-blue"
                            transition={{ duration: 0.3, type: "tween" }}
                            variants={childrenAnimationVariants}
                          >
                            Sobre mim
                          </motion.a>
                        </Menu.Item>
                        <Menu.Item>
                          <motion.a
                            href="#projects"
                            className="hover:text-secondary-blue"
                            transition={{ duration: 0.3, type: "tween" }}
                            variants={childrenAnimationVariants}
                          >
                            Projetos
                          </motion.a>
                        </Menu.Item>
                        <Menu.Item>
                          <motion.a
                            href="#contact"
                            className="hover:text-secondary-blue"
                            transition={{ duration: 0.3, type: "tween" }}
                            variants={childrenAnimationVariants}
                          >
                            Contato
                          </motion.a>
                        </Menu.Item>
                      </nav>
                    </Menu.Items>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </Menu>
      </header>
    );
  }

  return (
    <header
      className={
        viewportHeight !== 0 && viewportHeight <= height
          ? `${BASE_HEADER_CLASS} bg-[#00080E] bg-opacity-50`
          : `${BASE_HEADER_CLASS} bg-transparent`
      }
    >
      <p className="text-2xl font-oswald font-light">
        Marcos<span className="text-secondary-blue">Gaius</span>
      </p>
      <nav className="flex space-x-6 text-base">
        <a href="#" className="uppercase hover:text-secondary-blue">
          Início
        </a>
        <a href="#about" className="uppercase hover:text-secondary-blue">
          Sobre mim
        </a>
        <a href="#projects" className="uppercase hover:text-secondary-blue">
          Projetos
        </a>
        <a href="#contact" className="uppercase hover:text-secondary-blue">
          Contato
        </a>
      </nav>
      <a className="bg-accent-blue px-3 py-2 rounded-lg font-semibold hover:bg-secondary-blue transition-transform" href="#contact">
        Vamos conversar
      </a>
    </header>
  );
}
