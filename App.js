import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imgBg}>
        <Image
          style={styles.img}
          source={require("./assets/shopping-bags.png")}
        />
        <Text style={styles.logoText}>Tade's Shop</Text>
      </View>
      <TextInput style={styles.inputs} placeholder="Phone Number" />
      <TextInput style={styles.inputs} placeholder="Password" />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#78FF86",
    alignItems: "center",
    justifyContent: "center",
  },
  imgBg: {
    marginBottom: 122,
    // height: 80,
    // width: 80,
  },
  img: {
    marginLeft: 25,
  },
  logoText: {
    fontSize: 24,
    lineHeight: 24,
    color: "#fff",
  },
  inputs: {
    width: 320,
    height: 45,
    borderRadius: 10,
    marginBottom: 21,
    backgroundColor: "white",
  },
});
