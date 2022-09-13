import { StyleSheet, Text, TextInput, View } from "react-native";
import Title from "../Title";
import ButtonForm from "../ButtonForm";

const BACKGROUND_COLOR = "#212121";
const BUTTON_COLOR = "#EF4130";
const MESSAGE_COLOR = "#30ef5a";

const ResultModal = props => {

  const [alcoolValue, gasolinaValue] = props.data

  const bestBuy = () => (alcoolValue / gasolinaValue <= 0.7) ? 'álcool' : 'gasolina'

  return(
    <View style={styles.container}>
      <Title
        style={{color: MESSAGE_COLOR}}
        text={`Compensa usar ${bestBuy()}`}
        image={require('../../img/gas.png')}
      />
      <Text style={styles.secondaryText}>Com os preços:</Text>
      <Text style={styles.descriptionText}>Álcool: R$ {alcoolValue.toFixed(2).replace('.', ',')}</Text>
      <Text style={[styles.descriptionText, {marginBottom: 15}]}>Gasolina: R$ {gasolinaValue.toFixed(2).replace('.', ',')}</Text>
      <ButtonForm
        text="Calcular novamente"
        buttonStyle={styles.buttonSecondary}
        textStyle={styles.buttonText}
        onPress={props.buttonFunc}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSecondary: {
    height: 45,
    borderColor: BUTTON_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: BUTTON_COLOR,
    fontWeight: "bold",
    fontSize: 20,
  },
  secondaryText: {
    marginTop: 35,
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  descriptionText: {
    marginTop: 15,
    color: "white",
    fontSize: 17,
  },
})

export default ResultModal