import { z } from "zod";

export const validationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  phone: z.string(),
  subject: z.string().min(1, "Subject is required"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message is too short"),
});

export type ContactFormInputs = z.infer<typeof validationSchema>;

export interface IErrorMessages {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const validateField = (
  field: keyof ContactFormInputs,
  value: string,
  setErrorMessages: React.Dispatch<React.SetStateAction<IErrorMessages>>,
) => {
  let fieldSchema;
  switch (field) {
    case "name":
      fieldSchema = z.string().min(1, "Name is required");
      break;
    case "email":
      fieldSchema = z.string().email("Email is invalid");
      break;
    case "phone":
      fieldSchema = z.string();
      break;
    case "subject":
      fieldSchema = z.string().min(1, "Subject is required");
      break;
    case "message":
      fieldSchema = z
        .string()
        .min(1, "Message is required")
        .min(10, "Message is too short");
      break;
    default:
      return;
  }

  const result = fieldSchema.safeParse(value);

  if (!result.success) {
    setErrorMessages((prev: IErrorMessages) => ({
      ...prev,
      [field]: result.error.issues[0]?.message || "",
    }));
  } else {
    setErrorMessages((prev: IErrorMessages) => ({ ...prev, [field]: "" }));
  }
};
