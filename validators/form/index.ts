import * as yup from "yup";

export const formValidator = yup.object().shape({
  name: yup.string().required("Nome é um campo obrigatório."),
  email: yup.string().email("E-mail inválido, verifique o texto inserido.").required("E-mail é um campo obrigatório"),
  message: yup.string().required("Mensagem é um campo obrigatório."),
});
