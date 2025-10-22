import { Box } from "@/src/ui/components/Box"
import { Text } from "@/src/ui/components/Text"
import { ScrollView, useWindowDimensions } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { City } from "../../domain/city/City"
import { useGetRelatedCities } from "../../domain/city/useCases/useGetRelatedCities"
import { CityCard } from "../components/CityCard"
import { useAppTheme } from "../theme/useAppTheme"

type Props = Pick<City, 'id'>

export function CityDetailsRelatedCities({ id }: Props) {
  const { data: cities } = useGetRelatedCities(id)

  const { spacing } = useAppTheme()
  const { bottom } = useSafeAreaInsets()
  const { width } = useWindowDimensions()

  const cardWidth = width * 0.7
  const cardHeight = cardWidth * 0.9
  return (
    <Box style={{ paddingBottom: bottom }}>
      <Text variant="title22" mb="s16" paddingHorizontal="padding">
        Veja Também
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: spacing.s16,
          paddingHorizontal: spacing.padding
        }}
      >
        {cities?.map((city) => (
          <CityCard
            key={city.id}
            cityPreview={city}
            style={{ width: cardWidth, height: cardHeight }}
          />
        ))}
      </ScrollView>
    </Box>
  )
}
