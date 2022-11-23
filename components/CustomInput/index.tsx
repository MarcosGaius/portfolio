import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form/dist/types";

interface ICustomInputProps {
  label: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  isSubmitted: boolean;
}

export default function CustomInput({ label, placeholder, name, register, errors, isSubmitted }: ICustomInputProps) {
  return (
    <div className="flex flex-col gap-0.5 w-full">
      <label htmlFor={name}>{label}</label>
      <div className="flex flex-col bg-white outline-none focus-within:outline-cyan-300 focus-within:outline-1 transition-all">
        <div className="font-semibold text-xs px-2 pt-2">
          {errors[name] ? (
            <p className="text-red-500">{errors[name]?.message!.toString()} ❌</p>
          ) : isSubmitted ? (
            <p className="text-green-600 text-opacity-60">Campo correto! ✅</p>
          ) : (
            <p className="text-black text-opacity-60">Insira o(a) {label.toLocaleLowerCase()} abaixo.</p>
          )}
        </div>
        <input
          placeholder={placeholder}
          className="bg-white px-2 pb-2 w-full text-black text-opacity-80 outline-none border-none "
          {...register(name)}
        />
      </div>
    </div>
  );
}
