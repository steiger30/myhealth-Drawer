import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { global } from "../../theme/global"

const RecuperarSenha = () => {
  const [value, setValue] = useState("first");
  const handlePress = () => { };
  return (
    <View style={styles.container}>
      <View style={styles.container.TextInput}>
        <View style={styles.container.input}>
          <Text style={global.labelInput}>
            E-mail
          </Text>
          <TextInput
            style={[global.input, styles.inputWidth ]}
          />
        </View>
      </View>
      <View style={styles.container.button}>
        <TouchableOpacity
          style={[global.button, global.btnGreen]}
          onPress={handlePress}
        >
          <Text style={global.button.text}>
            Recuperar senha
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RecuperarSenha;
