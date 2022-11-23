import Image from "next/image";
import marcusAureliusPic from "../../public/images/marcus_aurelius.png";
import Text from "../Text";

export default function Footer() {
  return (
    <footer className="bg-[#00080E] flex flex-col items-center gap-y-20 md:gap-y-0 pt-10 px-4 md:px-0 text-center">
      <div className="flex flex-col items-center">
        <Text className="text-2xl font-oswald font-light">
          Marcos<span className="text-secondary-blue">Gaius</span>
        </Text>
        <Text className="text-white text-opacity-50">2022 - Desenvolvido por Marcos Gaius</Text>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start w-full gap-y-10 md:gap-y-0 gap-x-5 lg:gap-x-20">
        <Image src={marcusAureliusPic} alt="Foto do Imperador Romano Marco Aurélio" width={250} height={250} />
        <div className="flex flex-col gap-2 place-self-center text-center md:text-start">
          <Text weight="semibold" className="text-2xl">
            “Every man is worth just so much as the things about which he busies himself.”
          </Text>
          <Text className="justify-self-start">― Marcus Aurelius</Text>
        </div>
      </div>
    </footer>
  );
}
