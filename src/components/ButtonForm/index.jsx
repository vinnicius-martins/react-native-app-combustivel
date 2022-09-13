import { Text, TouchableOpacity } from "react-native"

const ButtonForm = props => {
  return (
    <>
      <TouchableOpacity onPress={props.onPress} style={props.buttonStyle}>
        <Text style={props.textStyle}>{props.text}</Text>
      </TouchableOpacity>
    </>
  )
}

export default ButtonForm