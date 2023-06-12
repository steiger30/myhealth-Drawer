import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { RadioButton } from "react-native-paper";
import { global } from "../../../theme/global"
import { v4 as uuidv4 } from 'react-native-uuid';
import { VacinaService } from "../../../service/vacina-service/vacina.service";



const FormVacina = (props) => {

  const [formValues, setFormValues] = useState({
    id: "3",
    dataVac: "",
    vacina: "",
    proxDose: "",
    comprovante: "",
    proxVac: "",

  });

  const handleInputChange = (field, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [field]: value,
    }));
  };

  const handleSave = () => {
    formValues.id = uuidv4();
    const { id, dataVac, vacina, proxDose, comprovante, proxVac } = formValues;

    if (id && dataVac && vacina && proxDose && comprovante && proxVac) {
      const vacinaService = new VacinaService();
      vacinaService.post(formValues);
    }
  };
  const handleEdit = () => {
    const { id, dataVac, vacina, proxDose, comprovante, proxVac } = formValues;

    if (id && dataVac && vacina && proxDose && comprovante && proxVac) {
      const vacinaService = new VacinaService();
      vacinaService.put(id, formValues);
    }
  };
  const handleClose = () => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.container.TextInput}>
        <View style={styles.container.input}>
          <Text style={[global.labelInput, styles.text.textInput]}>
            Data de vascinação
          </Text>
          <TextInput
            style={[global.input, global.dataInputWidth]}
            onChangeText={(value) => handleInputChange("dataVac", value)}
          />
        </View>
        <View style={styles.container.input}>
          <Text style={[global.labelInput, styles.text.textInput]}>
            Vacina
          </Text>
          <TextInput
            style={[global.input, global.inputWidth]}
            onChangeText={(value) => handleInputChange("vacina", value)}
          />
        </View>

        <View style={styles.container.input}>
          <Text style={[global.labelInput, styles.text.textInput]}>
            Dose
          </Text>
          <RadioButton.Group
            onValueChange={(value) => handleInputChange("dose", value)}
            value={formValues.dose}>
            <View style={[styles.input, { paddingLeft: 0, flexDirection: "column" }]}>
              <View style={{ flexDirection: "row" }}>

                <View style={styles.container.radio}>
                  <Text style={[global.labelInput]}>
                    1a. dose
                  </Text>
                  <RadioButton
                    value="1 dose"
                  />
                </View>
                <View style={styles.container.radio}>
                  <Text style={[global.labelInput]}>
                    2a. dose
                  </Text>
                  <RadioButton value="2 dose" />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.container.radio}>
                  <Text style={[global.labelInput]}>
                    3a. dose
                  </Text>
                  <RadioButton value="3 dose" />
                </View>
                <View style={styles.container.radio}>
                  <Text style={[global.labelInput]}>
                    Dose única
                  </Text>
                  <RadioButton value="3 dose" />
                </View>
              </View>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.container.input}>
          <Text style={[global.labelInput, styles.text.textInput]}>
            Comprovante
          </Text>
          <View style={styles.container.button}>
            <TouchableOpacity
              style={[global.btnBlue, global.button, styles.Hbutton]}
            >
              <Text style={[global.button.text]}>
                Selecionar imagem...
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container.input}>
          <Text style={[global.labelInput, styles.text.textInput]}>
            Próxima vacinação
          </Text>
          <TextInput
            style={[global.input, global.dataInputWidth]}
            onChangeText={(value) => handleInputChange("proxVac", value)}
          />
        </View>
      </View >
      {
        props.editar ?
          <View style={styles.container.buttonEdit}>
            <TouchableOpacity
              style={[global.button, global.btnGreen]}
              onPress={handleEdit}
            >
              <Text style={global.button.text}>
                Editar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[global.button, global.btnRed, { marginTop: 50 }]}
              onPress={handleSave}
            >
              <Text style={global.button.text}>
                Excluir
              </Text>
            </TouchableOpacity>
          </View> :
          <View style={styles.container.button}>
            <TouchableOpacity
              style={[global.button, global.btnGreen]}
              onPress={handleSave}
            >
              <Text style={global.button.text}>
                Cadastrar
              </Text>
            </TouchableOpacity>
          </View>
      }

    </View >
  )
}
export default FormVacina