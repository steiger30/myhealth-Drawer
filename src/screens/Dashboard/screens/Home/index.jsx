import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { styles } from "./style";
import CardVacinas from "../../../../components/Card/vacinas";
import { global } from "../../../../theme/global";
import { getVaccine } from "../../../../service/vacina-service/vacina.service";
import { useEffect, useState } from "react";


const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    getVacinas();
  }, []);


  function getVacinas() {
    getVaccine().then((res) => {
      console.log(JSON.stringify(res));
      setData(res);
    }).catch((error) => {
      console.error('Erro ao obter vacinas:', error);
    });
    console.log(JSON.stringify(data));
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
      <View style={styles.container}>
        <View style={styles.container.pesquisa}>
          <View style={styles.inputContainer}>
            <Icon name="search" size={20} color="gray" style={styles.icon} />
            <TextInput
              style={[styles.input, global.input]}
              placeholder="PESQUISAR VACINA..."
            />
          </View>
          <View style={styles.container.cards}>
            {data.map((item) => (

              <TouchableOpacity
              key={item.id}
                onPress={() => navigation.navigate('EditarVacina', { id: item.id })}
              >
                <CardVacinas vacina={item.nome} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.container.btn}>
          <TouchableOpacity
            style={[global.button, global.btnGreen]}
            onPress={() => navigation.navigate('Adicionar')}
          >
            <Text style={global.button.text}>
              Nova vacina
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;
