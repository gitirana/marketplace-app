import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native"
import { appInputVariants } from "./input.variants"
import { Ionicons } from "@expo/vector-icons"

export const AppInput = () => {
  const styles = appInputVariants({})

  return (
    <View className={styles.container()}>
      <Text className={styles.label()}>Label</Text>

      <Pressable className={styles.wrapper()}>
        <Ionicons size={22} name="person" />

        <TextInput className={styles.input()} />

        <TouchableOpacity>
          <Ionicons size={22} name="eye-off-outline" />
        </TouchableOpacity>
      </Pressable>
    </View>
  )
}