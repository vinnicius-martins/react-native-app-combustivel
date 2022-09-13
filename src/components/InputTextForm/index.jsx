import { StyleSheet, Text, TextInput } from "react-native";

const InputTextForm = props => {
  let style = styles.label
  if (props.style)
    style = [styles.label, props.style];

  return(
    <>
      <Text style={style}>{props.text}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </>
  )
}

const styles = StyleSheet.create({
  label: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    borderRadius: 3,
    fontSize: 20,
    paddingLeft: 12,
  },
})

export default InputTextForm