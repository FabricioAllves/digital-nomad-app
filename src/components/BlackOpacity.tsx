import { Box } from "./Box"

export function BlackOpacity() {
  return (
    <Box
      height="100%"
      width="100%"
      backgroundColor="midnightBlack"
      opacity={0.25}
      position="absolute"
    />
  )
}
