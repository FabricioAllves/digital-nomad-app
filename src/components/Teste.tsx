import { TouchableOpacity } from "react-native";
import { Box } from "./Box";
import { Text } from "./Text";

type Props = {
  onHandleClick: () => void;
};

export const Teste = ({ onHandleClick }: Props) => {

  console.log("Teste--");
  return (
    <Box>
      {/* <Text>Teste</Text>
      <TouchableOpacity onPress={onHandleClick}>
        <Text>Click</Text>
      </TouchableOpacity> */}
    </Box>
  );
};
