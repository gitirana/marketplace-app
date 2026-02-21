import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerScheme, type RegisterFormData } from "./register.scheme"

export const useRegisterViewModel = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      confirmPassword: "",
      email: "",
      name: "",
      password: "",
      phone: ""
    }
  })


  const onSubmit = handleSubmit(({ }) => { })

  return {
    control, errors, onSubmit
  }
}