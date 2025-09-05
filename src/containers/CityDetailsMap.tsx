import { Box } from "@/src/components/Box"
import { Text } from "@/src/components/Text"
import MapView from 'react-native-maps'
import { City } from "../types"
import { useAppTheme } from "../theme/useAppTheme"

type Props = Pick<City, 'location'>

export function CityDetailsMap({ location }: Props) {
  const { colors, borderRadii } = useAppTheme();
  return (
    <Box padding="padding">
      <Text variant="title22" mb="s16">Mapa</Text>
      <MapView
        style={{
          width: '100%',
          height: 200,
          borderRadius: borderRadii.default,
        }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Box>
  )
}
