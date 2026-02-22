import { Text, TouchableOpacity, View } from "react-native"
import type { useRegisterViewModel } from "./useRegister.viewModel"
import type { FC } from "react"
import { AppInput } from "../../shared/components/AppInput"

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({ onSubmit }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <AppInput />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}