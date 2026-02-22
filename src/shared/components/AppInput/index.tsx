import { Pressable, Text, TextInput, TouchableOpacity, View, type TextInputProps } from "react-native"
import { appInputVariants, type AppInputVariantsProps } from "./input.variants"
import { Ionicons } from "@expo/vector-icons"
import type { FC } from "react"

export interface AppInputProps extends TextInputProps, AppInputVariantsProps {
  label?: string;
  leftIcon?: keyof typeof Ionicons
  rightIcon?: keyof typeof Ionicons
  containerClassName?: string;
  mask?: (value: string) => void | string;
}

export const AppInput: FC<AppInputProps> = ({ label, leftIcon, rightIcon, containerClassName, mask, className, ...textInputProps }) => {
  const styles = appInputVariants({})

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>Label</Text>

      <Pressable className={styles.wrapper()}>
        <Ionicons size={22} name="person" />

        <TextInput className={styles.input({ className })} {...textInputProps} />

        <TouchableOpacity>
          <Ionicons size={22} name="eye-off-outline" />
        </TouchableOpacity>
      </Pressable>
    </View>
  )
}