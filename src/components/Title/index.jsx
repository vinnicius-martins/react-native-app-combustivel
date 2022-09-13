import { Image, StyleSheet, Text } from "react-native"

const Title = props => {
  let style
  if (props.style) {
    style = [styles.title, props.style]
  } else {
    style = styles.title
  }

  return(
    <>
      <Image source={props.image} />
      <Text style={style}>{props.text}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    marginTop: 30,
  },
});

export default Title