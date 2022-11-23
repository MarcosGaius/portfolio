import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidator } from "../../validators/form";
import { FieldValues } from "react-hook-form/dist/types";
import CustomInput from "../CustomInput";
import CustomTextArea from "../CustomTextArea";
import SocialButton from "../SocialButton";

interface IContactSectionProps {
  id: string;
}

export default function ContactSection({ id }: IContactSectionProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitted },
  } = useForm({ resolver: yupResolver(formValidator) });

  const submitForm = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center gap-14 py-10" id={id}>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-blue-100 font-semibold text-center">Posso te ajudar?</h2>
        <div>
          <h3 className="text-5xl font-bold text-cyan-400 drop-shadow-cyan-sm text-center">Então, vamos conversar!</h3>
          <div className="after:content-[''] flex w-full h-0.5 bg-white mt-2"></div>
        </div>
      </div>
      <form className="flex flex-col gap-4 w-full md:w-3/4 lg:w-1/2" onSubmit={handleSubmit(submitForm)}>
        <CustomInput label="Nome" name="name" placeholder="Seu nome" register={register} errors={errors} isSubmitted={isSubmitted} />
        <CustomInput label="E-mail" name="email" placeholder="Seu e-mail" register={register} errors={errors} isSubmitted={isSubmitted} />
        <CustomTextArea
          label="Mensagem"
          name="message"
          placeholder="Sua mensagem"
          register={register}
          errors={errors}
          isSubmitted={isSubmitted}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-600 to-cyan-400 font-bold text-xl p-2 hover:brightness-110 transition-all duration-300 mt-2 text-dark-blue"
        >
          Enviar mensagem
        </button>
      </form>
      <div className="flex flex-wrap justify-center gap-4 md:gap-10">
        <SocialButton media="github" href="https://github.com/MarcosGaius" />
        <SocialButton media="linkedin" href="https://www.linkedin.com/in/marcos-gaius/" />
        <SocialButton media="email" href="mailto:gaiusmarcos@protonmail.com" />
      </div>
    </div>
  );
}
