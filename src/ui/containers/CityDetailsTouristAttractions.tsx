import { Box } from "@/src/ui/components/Box"
import { Text } from "@/src/ui/components/Text"
import { Accordion } from "../components/Accordion"
import { City } from "@/src/domain/city/City"

type Props = Pick<City, 'touristAttractions'>
export function CityDetailsTouristAttractions({ touristAttractions }: Props) {
  return (
    <Box padding="padding">
      <Text variant="title22" mb="s8">Pontos turísticos</Text>
      <Box gap="s8">
        {touristAttractions.map((attraction) => (
          <Accordion
            key={attraction.id}
            title={attraction.name}
            description={attraction.description}
          />
        ))}
      </Box>
    </Box>
  )
}
