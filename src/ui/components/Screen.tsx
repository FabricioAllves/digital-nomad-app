import { PropsWithChildren } from "react"
import { Box, BoxProps } from "./Box"
import { ScrollView, View } from "react-native";

export function Screen({
  children,
  scrollable = false,
  ...props
}: PropsWithChildren & BoxProps & { scrollable?: boolean }) {
  const Container = scrollable ? ScrollView : View;
  return (
    <Box
      flex={1}
      backgroundColor="background"
      paddingHorizontal="padding"
      {...props}
    >
      <Container>
        {children}
      </Container>
    </Box>
  )
}
