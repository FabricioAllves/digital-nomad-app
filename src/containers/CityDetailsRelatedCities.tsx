import { Box } from "@/src/components/Box"
import { Text } from "@/src/components/Text"
import { ScrollView, useWindowDimensions } from "react-native"
import { CityCard } from "../components/CityCard"
import { useRelatedCities } from "../data/useRelatedCities"
import { City } from "../types"
import { useAppTheme } from "../theme/useAppTheme"
import { useSafeAreaInsets } from "react-native-safe-area-context"

type Props = Pick<City, 'relatedCitiesIds'>

export function CityDetailsRelatedCities({ relatedCitiesIds }: Props) {
  const cities = useRelatedCities(relatedCitiesIds)

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
        {cities.map((city) => (
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
