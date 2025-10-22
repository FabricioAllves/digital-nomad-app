import { useTheme } from "@shopify/restyle"
import { Theme } from "./theme"

export const useAppTheme = () => {
  const theme = useTheme<Theme>()
  return theme
}
