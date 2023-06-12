import { View, Text } from "react-native";
import { global } from "../../../theme/global"
import { styles } from "./style"

const CardProximaVacinas = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.header} >BCC</Text>
      <Text style={styles.footer}>20/09/2022</Text>
    </View>
  )
}

export default CardProximaVacinas;