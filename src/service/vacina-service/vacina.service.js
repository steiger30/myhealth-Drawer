import {
  addDoc,
  collection,
  updateDoc,
  doc,
  deleteDoc,
  query,
  onSnapshot,
  getDocs
} from "firebase/firestore";
import { db, storage } from "../../auth/firebase";

const collect = collection(db, "usuarios");
const q = query(collection(db, "usuarios"));

async function getVaccine() {
  const usuarios = [];

  const snapshot = await getDocs(q);

  snapshot.forEach((doc) => {
    usuarios.push({
      id: doc.id,
      nome: doc.data().nome,
      sexo: doc.data().sexo,
      dataNasc: doc.data().dataNascimento,
    });
  });
  
  console.log("Documento: " + JSON.stringify(usuarios));
  return usuarios;
}

function postVaccine(documento) {
  addDoc(collect, documento)
    .then((refDoc) => {
      console.log("Documento inserido com sucesso: " + JSON.stringify(refDoc));
    })
    .catch((error) => {
      console.log("Error: " + JSON.stringify(error));
    });
}

function putVaccine(idDocumento, documento) {
  const refDoc = doc(db, "usuarios", idDocumento);
  updateDoc(refDoc, documento)
    .then(() => {
      console.log("Documento atualizado com sucesso!!!");
      props.navigation.pop();
    })
    .catch((error) => {
      console.log("Erro ao atualizar o documento: " + JSON.stringify(error));
    });
}
function deleteVaccine(idDocumento) {
  const refDoc = doc(db, "usuarios", idDocumento);

  deleteDoc(refDoc)
    .then(() => {
      console.log("Documento excluído com sucesso!!!");
      props.navigation.pop();
    })
    .catch((error) => {
      console.log("Erro ao excluir o documento: " + error);
    });
}

export { getVaccine, postVaccine, putVaccine, deleteVaccine };
