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
import { useTranslation } from "react-i18next";

interface IContactSectionProps {
  id: string;
}

export default function ContactSection({ id }: IContactSectionProps) {
  const { t } = useTranslation();

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

    const loadingToast = toast.loading(t("toast_loading"));
    const emailRes = await sendEmailService(formattedData);

    setIsRequesting(false);
    toast.dismiss(loadingToast);

    if (emailRes instanceof AxiosError) {
      switch (emailRes.response?.status) {
        case 400:
          toast.error(t("toast_error_400"));
          break;
        case 500:
          toast.error(t("toast_error_500"));
          break;
        default:
          toast.error(t("toast_error_sv"));
      }
      return;
    } else if (emailRes instanceof Error) {
      console.error(emailRes);
      toast.error(t("toast_error_cl"));
    }

    toast.success(t("toast_success"));
    reset();
  };

  return (
    <div className="flex flex-col items-center gap-14 py-10" id={id}>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-blue-100 font-semibold text-center">{t("contact_title")}</h2>
        <div>
          <h3 className="text-5xl font-bold text-cyan-400 drop-shadow-cyan-sm text-center">{t("contact_subtitle")}</h3>
          <div className="after:content-[''] flex w-full h-0.5 bg-white mt-2"></div>
        </div>
      </div>
      <form className="flex flex-col gap-4 w-full md:w-3/4 lg:w-1/2" onSubmit={handleSubmit(submitForm)}>
        <CustomInput
          label={t("contact_name_field.label")}
          name="name"
          placeholder={t("contact_name_field.placeholder")}
          register={register}
          errors={errors}
          isSubmitted={isSubmitted}
        />
        <CustomInput
          label={t("contact_email_field.label")}
          name="email"
          placeholder={t("contact_email_field.placeholder")}
          register={register}
          errors={errors}
          isSubmitted={isSubmitted}
        />
        <CustomTextArea
          label={t("contact_message_field.label")}
          name="message"
          placeholder={t("contact_message_field.placeholder")}
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
          {t("contact_button")}
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
