import { useState } from "react"
import { TextInput, TextInputProps } from "react-native"
import { useAppTheme } from "../theme/useAppTheme"
import { Box, BoxProps } from "./Box"
import { IconButton } from "./IconButton"

type SearchInputProps = {} & Pick<
  TextInputProps,
  "placeholder" | "value" | "onChangeText"
>

export function SearchInput({
  placeholder,
  value,
  onChangeText,
}: SearchInputProps) {
  const { colors, textVariants } = useAppTheme()
  const [isFocused, setIsFocused] = useState(false)

  function onPressIconButton() {
    if (value!.length > 0) {
      onChangeText?.("")
    }
  }

  return (
    <Box
      {...boxProps}
      style={{
        borderColor: isFocused ? colors.primary : colors.gray1,
        borderWidth: 2,
      }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          ...textVariants.text16,
          color: colors.text,
          height: "100%",
          width: "100%",
          flexShrink: 1,
        }}
      />
      <IconButton
        IconName={value!.length > 0 ? "Close" : "Search-outline"}
        onPress={onPressIconButton}
      />
    </Box>
  )
}

const boxProps: BoxProps = {
  flexDirection: "row",
  padding: "s12",
  alignItems: "center",
  paddingLeft: "s16",
  justifyContent: "space-between",
  backgroundColor: "gray1",
  height: 70,
  borderRadius: "rounded",
}
