import { Text, TouchableOpacity, View } from "react-native"
import type { useRegisterViewModel } from "./useRegister.viewModel"
import type { FC } from "react"

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({ onSubmit }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Registro</Text>

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}