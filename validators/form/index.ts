import * as yup from "yup";
import i18n from "../../services/i18n";

export const formValidator = yup.object().shape({
  name: yup.string().required(i18n.t("error_required_name")!),
  email: yup.string().email(i18n.t("error_invalid_email")!).required(i18n.t("error_required_email")!),
  message: yup.string().required(i18n.t("error_required_message")!),
});
