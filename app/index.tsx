import { SafeAreaView, StyleSheet } from "react-native";
import DragonBallCharacters from "./DragonBallCharacters";
import ApiDataFetcher from "./ApiDataFetcher";
import InputInteraction from "./InputIntereaction";

export default function Index() {
  return (
      <SafeAreaView style={styles.container}>
        {/* <DragonBallCharacters /> */}
        {/* <ApiDataFetcher /> */}
        <InputInteraction />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
