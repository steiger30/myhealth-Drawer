import FormVacina from "../../../../../components/form/Vacina";
import { useRoute } from '@react-navigation/native';
const EditarVacina = () => {

  const route = useRoute();
  const { id } = route.params;
  console.log(id)
  return (
    <>
      <FormVacina editar={true} />
    </>
  )
}

export default EditarVacina;