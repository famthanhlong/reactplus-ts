import * as yup from "yup";

export const schemaRegister = yup
  .object({
    name: yup
      .string()
      .min(8, "Name is too short - should be 8 chars minium")
      .max(20)
      .required("Name is required field!"),
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is required field!"),
    password: yup
      .string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .required("Password is required field!"),
  })
  .required();
export const schemaLogin = yup
  .object({
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is required field!"),
    password: yup
      .string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .required("Password is required field!"),
  })
  .required();
