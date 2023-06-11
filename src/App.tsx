import styled from "@emotion/native";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

const Container = styled.View({
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
});

const App = () => {
  return (
    <Container>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  );
};

export default App;
