import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import bg from "./assets/bg.jpeg";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bg}
        style={styles.background}
        resizeMode="contain"
      >
        <View style={styles.map}>
          <View style={styles.circle} />

          <View style={styles.cross}>
            <View style={styles.crossLine} />
            <View style={[styles.crossLine, styles.crossLineReversed]} />
          </View>
        </View>
      </ImageBackground>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#242D34",
  },
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  map: {
    borderWidth: 1,
    borderColor: "white",
    width: "80%",
    aspectRatio: 1 
  },
  circle: {
    position: "absolute",
    left: 2 * 108,
    top: 2 * 108,
    width: 75,
    height: 75,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderWidth: 10,
    borderColor: "white",
  },
  cross: {
    // backgroundColor: "red",
    position: "absolute",
    width: 75,
    height: 75
  },
  crossLine: {
    position: "absolute",
    left: 32.5,
    width: 10,
    height: 75,
    backgroundColor: "white",
    transform: [{ rotate: "45deg" }],
  },
  crossLineReversed: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
});
