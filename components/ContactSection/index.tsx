import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidator } from "../../validators/form";
import { FieldValues } from "react-hook-form/dist/types";
import CustomInput from "../CustomInput";
import CustomTextArea from "../CustomTextArea";
import SocialButton from "../SocialButton";
import { ISendEmail } from "../../interfaces/email.interfaces";
import { sendEmailService } from "../../services/api";
import { AxiosError } from "axios";
import { toast, UpdateOptions } from "react-toastify";
import { useMemo, useState } from "react";

interface IContactSectionProps {
  id: string;
}

export default function ContactSection({ id }: IContactSectionProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitted },
    reset,
  } = useForm({ resolver: yupResolver(formValidator) });

  const [isRequesting, setIsRequesting] = useState(false);

  const submitForm = async (data: FieldValues) => {
    const formattedData: ISendEmail = {
      fromEmail: data.email,
      message: data.message,
      senderName: data.name,
    };

    setIsRequesting(true);

    const loadingToast = toast.loading("Enviando email...");
    const emailRes = await sendEmailService(formattedData);

    setIsRequesting(false);
    toast.dismiss(loadingToast);

    if (emailRes instanceof AxiosError) {
      switch (emailRes.response?.status) {
        case 400:
          toast.error("Verifique os campos e tente novamente");
          break;
        case 500:
          toast.error("Erro no servidor");
          break;
        default:
          toast.error("Erro desconhecido (servidor)");
      }
      return;
    } else if (emailRes instanceof Error) {
      console.error(emailRes);
      toast.error("Erro desconhecido");
    }

    toast.success("E-mail enviado com sucesso!");
    reset();
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
          className={
            isRequesting
              ? "bg-slate-400 font-bold text-xl p-2 transition-all duration-300 mt-2 text-dark-blue"
              : "bg-gradient-to-r from-cyan-600 to-cyan-400 font-bold text-xl p-2 hover:brightness-110 transition-all duration-300 mt-2 text-dark-blue"
          }
          disabled={isRequesting ? true : false}
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
