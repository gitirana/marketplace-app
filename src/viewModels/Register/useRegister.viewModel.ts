import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerScheme, type RegisterFormData } from "./register.scheme"
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation"
import { useUserStore } from "../../shared/store/user-store"

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation()
  const { logout, refreshToken, setSession, token, updateTokens, user } = useUserStore()

  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      confirmPassword: "123123123",
      email: "teste3@email.com",
      name: "Teste",
      password: "123123123",
      phone: "11111111111"
    }
  })


  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData

    const mutationResponse = await userRegisterMutation.mutateAsync(registerData);
    setSession({
      refreshToken: mutationResponse.refreshToken,
      token: mutationResponse.token,
      user: mutationResponse.user
    })

    console.log("user", user)
  })

  return {
    control, errors, onSubmit
  }
}