import { useRouter } from "next/router";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form/dist/types";

interface ICustomTextAreaProps {
  label: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  isSubmitted: boolean;
}

export default function CustomTextArea({ label, placeholder, name, register, errors, isSubmitted }: ICustomTextAreaProps) {
  const { locale } = useRouter();
  const correctMessage = locale === "en" ? "Correct field! ✅" : "Campo correto! ✅";
  const labelMessage =
    locale === "en" ? `Insert the ${label.toLocaleLowerCase()} bellow.` : `Insira o(a) ${label.toLocaleLowerCase()} abaixo.`;

  return (
    <div className="flex flex-col gap-0.5 w-full">
      <label htmlFor={name}>{label}</label>
      <div className="flex flex-col bg-white outline-none focus-within:outline-cyan-300 focus-within:outline-1 transition-all">
        <div className="font-semibold text-xs px-2 pt-2 ">
          {errors[name] ? (
            <p className="text-red-500 ">{errors[name]?.message!.toString()} ❌</p>
          ) : isSubmitted ? (
            <p className="text-green-600 text-opacity-60">{correctMessage}</p>
          ) : (
            <p className="text-black text-opacity-60">{labelMessage}</p>
          )}
        </div>
        <textarea
          placeholder={placeholder}
          className="bg-white px-2 pb-2 w-full text-black text-opacity-80 outline-none border-none"
          rows={6}
          {...register(name)}
        />
      </div>
    </div>
  );
}
