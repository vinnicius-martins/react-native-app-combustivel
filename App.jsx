import { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Modal } from "react-native";
import ButtonForm from "./src/components/ButtonForm";
import InputTextForm from './src/components/InputTextForm'
import Title from "./src/components/Title"
import ResultModal from "./src/components/ResultModal";

const BACKGROUND_COLOR = "#212121";
const BUTTON_COLOR = "#EF4130";
const MESSAGE_COLOR = "#30ef5a";

export default function App() {
  const [alcoolValue, setAlcoolValue] = useState(0)
  const [alcoolInput, setAlcoolInput] = useState("")

  const [gasolinaValue, setGasolinaValue] = useState(0)
  const [gasolinaInput, setGasolinaInput] = useState("")

  const [modalVisibility, setModalVisibility] = useState(false)

  useEffect(() => {
    if (alcoolInput === '') {
      setAlcoolValue(0)
    } else {
      setAlcoolValue(Number(alcoolInput))
    }
  }, [alcoolInput])

  useEffect(() => {
    if (gasolinaInput === '') {
      setGasolinaValue(0)
    } else {
      setGasolinaValue(Number(gasolinaInput))
    }
  }, [gasolinaInput])

  const openModal = () => setModalVisibility(true)
  const closeModal = () => setModalVisibility(false)

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={BACKGROUND_COLOR} barStyle={"light-content"} />

      <View style={styles.titleContainer}>
        <Title image={require("./src/img/logo.png")} text="Qual a melhor opção?" />
      </View>

      <View style={styles.formContainer}>
        <InputTextForm
          text="Álcool (preço por litro):"
          value={alcoolInput}
          onChangeText={(currentText) => setAlcoolInput(currentText.replace(',', '.'))}
        />

        <InputTextForm
          style={{ marginTop: 15 }}
          text="Gasolina (preço por litro):"
          value={gasolinaInput}
          onChangeText={(currentText) => setGasolinaInput(currentText.replace(',', '.'))}
        />

        <ButtonForm
          text="Calcular"
          buttonStyle={styles.buttonPrimary}
          textStyle={styles.buttonText}
          onPress={openModal}
        />

        <Modal visible={modalVisibility} animationType='slide'>
          <View style={styles.modalView}>
            <ResultModal
              data={[alcoolValue, gasolinaValue]}
              buttonFunc={closeModal}
            />
          </View>
        </Modal>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 70,
  },
  buttonPrimary: {
    height: 45,
    backgroundColor: BUTTON_COLOR,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  modalView: {
    flex:1,
  }
});
