import { Pressable, PressableProps } from "react-native"
import { useAppTheme } from "../theme/useAppTheme"
import { Box } from "./Box"
import { Icon, IconName } from "./Icon"

type IconButtonProps = {
  IconName: IconName
  onPress: PressableProps["onPress"]
  color?: string
}

export function IconButton({ IconName, onPress }: IconButtonProps) {
  const { boxShadows } = useAppTheme()
  return (
    <Pressable onPress={onPress}>
      <Box
        backgroundColor="primary"
        width={50}
        height={50}
        borderRadius="rounded"
        alignItems="center"
        justifyContent="center"
        style={{
          boxShadow: boxShadows.primary,
        }}
      >
        <Icon name={IconName} color="pureWhite" />
      </Box>
    </Pressable>
  )
}
