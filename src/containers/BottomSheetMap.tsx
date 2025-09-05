import { useWindowDimensions } from "react-native";
import MapView from "react-native-maps";
import { BottomSheet, BottomSheetProps } from "../components/BottomSheet";
import { IconButton } from "../components/IconButton";
import { useAppTheme } from "../theme/useAppTheme";
import { City } from "../types";
import { Box } from "../components/Box";

type BottomSheetMapProps = Omit<BottomSheetProps, 'children'> & {
  location: City['location'];
}

export function BottomSheetMap({
  location,
  ...bottomSheetProps
}: BottomSheetMapProps) {
  const { height } = useWindowDimensions()
  const { borderRadii, spacing } = useAppTheme()
  return (
    <BottomSheet {...bottomSheetProps}> 
      <Box position="absolute"zIndex={99} top={spacing.padding} right={spacing.padding}>
        <IconButton IconName="Close" onPress={bottomSheetProps.onPress} />
      </Box>
      <MapView
        style={{
          width: "100%",
          height: height * 0.7,
          borderRadius: borderRadii.default,
        }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.2,
        }}
      />
    
    </BottomSheet>
  )
}