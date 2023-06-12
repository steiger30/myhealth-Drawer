import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { RadioButton } from "react-native-paper";
import { global } from "../../theme/global"

const CriarConta = () => {
  const [value, setValue] = useState("first");
  const handlePress = () => { };
  return (
    <View style={styles.container}>
      <View style={styles.container.TextInput}>
        <View style={styles.container.input}>
          <Text style={[global.labelInput, styles.text.textInput]}>
            Nome completo
          </Text>
          <TextInput
            style={[global.input, global.inputWidth]}
          />
        </View>

        <View style={styles.container.input}>
          <Text style={[global.labelInput, styles.text.textInput]}>
            Sexo
          </Text>
          <RadioButton.Group onValueChange={setValue} value={value}>
            <View style={[styles.input, { paddingLeft: 0 }]}>
              <View style={styles.container.radio}>
                <Text style={[global.labelInput]}>
                  Masculino
                </Text>
                <RadioButton
                  value="first"
                />
              </View>
              <View style={styles.container.radio}>
                <Text style={[global.labelInput]}>
                  Feminino
                </Text>
                <RadioButton value="second" />
              </View>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.container.input}>
          <Text style={[global.labelInput, styles.text.textInput]}>
            Data nascimento
          </Text>
          <TextInput
            style={[global.input, global.dataInputWidth]}
          />
        </View>
        <View style={styles.container.input}>
          <Text style={[global.labelInput, styles.text.textInput]}>
            E-mail
          </Text>
          <TextInput
            style={[global.input, global.inputWidth]}
          />
        </View>
        <View style={styles.container.input}>
          <Text style={[global.labelInput, styles.text.textInput]}>
            Senha
          </Text>
          <TextInput
            style={[global.input, global.inputWidth]}
          />
        </View>
        <View style={styles.container.input}>
          <Text style={[global.labelInput, styles.text.textInput]}>
            Repetir senha
          </Text>
          <TextInput
            style={[global.input, global.inputWidth]}
          />
        </View>
      </View>
      <View style={styles.container.button}>
        <TouchableOpacity
          style={[global.button,global.btnGreen]}
          onPress={handlePress}
        >
          <Text style={global.button.text}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CriarConta;
