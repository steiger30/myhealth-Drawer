import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CardProximaVacinas from "../../../../../components/Card/ProximasVacinas";
import { styles } from "./style"
import { global } from "../../../../../theme/global";
const ProximasVacinas = () => {
  return (
    <View style={styles.container} >
      <View style={styles.container.card} >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
          <CardProximaVacinas />
          {/* <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas />
          <CardProximaVacinas /> */}

        </ScrollView>
      </View>
      <View style={styles.container.button}>
        <TouchableOpacity
          style={[global.button, global.btnGreen, styles.buttonW]}

        >
          <Text style={global.button.text}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProximasVacinas;