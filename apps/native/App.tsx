import { AppRegistry, StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";

const App = () => {
  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: "https://github.com/kwhong95" }}
    />
  );
};

AppRegistry.registerComponent("main", () => App);

export default App;
