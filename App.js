import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import bg from "./assets/bg.jpeg";

export default function App() {
  const [gameMap, setGameMap] = useState([
    ["o", "", "x"], // 1st row
    ["", "x", ""], // 2nd row
    ["o", "", "o"], // 3rd row
  ]);

  const onPress = (row, col) => {
    console.warn(row, col);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bg}
        style={styles.background}
        resizeMode="contain"
      >
        <View style={styles.map}>
          {gameMap.map((row, rowInd) => (
            <View key={rowInd} style={styles.row}>
              {row.map((cell, colInd) => (
                <Pressable
                  key={colInd}
                  onPress={() => onPress(rowInd, colInd)}
                  style={styles.cell}
                >
                  {cell === "o" && <View style={styles.circle} />}
                  {cell === "x" && (
                    <View style={styles.cross}>
                      <View style={styles.crossLine} />
                      <View
                        style={[styles.crossLine, styles.crossLineReversed]}
                      />
                    </View>
                  )}
                </Pressable>
              ))}
            </View>
          ))}
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
    aspectRatio: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    // borderColor: "yellow",
    // borderWidth: 1,
    padding: 5,
    // backgroundColor: 'green'
  },
  cell: {
    width: 100,
    height: 100,
    flex: 1,
    // borderColor: "red",
    // borderWidth: 2,
  },
  circle: {
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
    flex: 1,
  },
  crossLine: {
    position: "absolute",
    left: "48%",
    width: 10,
    height: "100%",
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
