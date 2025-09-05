import { Box, BoxProps } from "./Box"

export function Divider(props: BoxProps) {
  return (
    <Box marginVertical="s24" {...props}>
      <Box alignSelf="center" height={1} width="100%" backgroundColor="gray1" />
    </Box>
  )
}
