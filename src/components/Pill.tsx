import { Pressable, PressableProps } from "react-native"
import { Box, BoxProps } from "./Box"
import { Icon, IconName } from "./Icon"
import { Text } from "./Text"

export type PillProps = {
  label: string
  iconName: IconName
  active: boolean
  onPress: PressableProps["onPress"]
}

/**
 * this is the height of the pill, it's used to calculate the marginTop of the CityDetailsHeader
 */
export const PILL_HEIGHT = 16 + 16 + 4

export function Pill({ label, iconName, active, onPress }: PillProps) {
  return (
    <Pressable onPress={onPress}>
      <Box {...boxProps} backgroundColor={active ? "gray1" : "transparent"}>
        <Icon name={iconName} size={16} color={active ? "primary" : "gray2"} />
        <Text ml="s4" variant="text12">
          {label}
        </Text>
      </Box>
    </Pressable>
  )
}

const boxProps: BoxProps = {
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "rounded",
  borderWidth: 2,
  borderColor: "gray1",
  paddingVertical: "s8",
  paddingHorizontal: "s12",
}
