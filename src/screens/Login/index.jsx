import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { global } from "../../theme/global"
import { getVaccine, putVaccinem, deleteVaccine } from "../../service/vacina-service/vacina.service"
const img = { uri: "https://i.imgur.com/J31PLgZ.jpg" }

const Login = () => {

  const navigation = useNavigation();
  const handlePress = () => { };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={img}
        style={styles.imageBackground}
        opacity={0.09}
      >

        <View style={styles.container.text}>
          <Text
            style={[styles.text.title, global.textColorBlue]}
          >
            MyHealth
          </Text>
        </View>


        <View style={styles.container.text}>
          <Text
            style={[styles.text.paragraph, global.textColorBlue]}
          >
            Controle as suas vacinas e fique seguro
          </Text>
        </View>



        <View style={styles.container.TextInput}>
          <View style={styles.container.input}>
            <Text style={global.labelInput}>
              E-mail
            </Text>
            <TextInput
              style={[global.input, styles.inputWidth]}
            />
          </View>
          <View style={[styles.container.input, { marginTop: 20 }]}>
            <Text
              style={global.labelInput}
            >
              Senha
            </Text>
            <TextInput
              style={[global.input, styles.inputWidth]}
            />
          </View>
        </View>


        <View style={styles.container.button}>
          <TouchableOpacity
            style={[global.button, styles.entrar]}
            onPress={() => navigation.navigate('Dashboard')}
          >
            <Text style={global.button.text} >
              Entrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[global.button, styles.newConta]}
            onPress={() => navigation.navigate('NovaConta')}
          >
            <Text
              style={global.button.text}
            >
              Criar minha conta
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[global.button, styles.esqueciSenha]}
            onPress={() => navigation.navigate('RecuperarSenha')}
          >
            <Text
              style={global.button.text}
            >
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
