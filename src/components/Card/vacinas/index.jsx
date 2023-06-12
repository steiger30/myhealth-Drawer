import { View, Text, Image } from "react-native"
import { global } from "../../../theme/global"
import { styles } from "./style"

const CardVacinas = ({vacina }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.vacina}>Febre amarela</Text>
      <View
        style={[global.btnBlue, styles.dose]}
      >
        <Text
          style={global.button.text}
        >
          {vacina}
        </Text>
      </View>
      <Text style={styles.dataAplicada}>11/06/2022</Text>
      <Image
        source={require('../../../../assets/img/comprovante.png')}
        style={styles.imgVacina}
      />
      <View style={styles.container.TextproxVacina}>
        <Text style={styles.proxVacina}>Próxima dose em: 11/10/2023</Text>
      </View>
    </View>
  )
}

export default CardVacinas