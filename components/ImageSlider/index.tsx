import Image from "next/image";
import { otherProjects } from "../ProjectPanel/data";
import Text from "../Text";
import IconButton from "../IconButton";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface IImageSliderProps {
  title: string;
}

export default function ImageSlider({ title }: IImageSliderProps) {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex justify-between items-center">
        <Text weight="semibold" className="text-xl">
          {title}
        </Text>
      </div>
      <ul className="flex gap-4 overflow-auto">
        {otherProjects.map((project) => (
          <li key={project.id} className="flex min-w-[200px] w-[200px] h-[200px] md:min-w-[300px] md:w-[300px] md:h-[300px] relative group">
            <div className="z-20 flex flex-col justify-between p-3 w-full">
              <Text className="self-center text-xl bg-accent-blue px-2" weight="bold">
                {project.title}
              </Text>
              <div className="flex gap-2">
                <IconButton href={project.links.github}>
                  <FiGithub size={30} />
                </IconButton>
                <IconButton href={project.links.custom}>
                  <FiExternalLink size={30} />
                </IconButton>
              </div>
            </div>
            <div className="absolute w-full h-full overflow-hidden rounded-lg ">
              <div className="bg-black absolute z-10 w-full h-full rounded-lg opacity-30"></div>
              <Image
                src={project.image}
                alt={project.title}
                className="flex w-full object-cover absolute z-0 rounded-lg group-hover:scale-125 transition-all"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
