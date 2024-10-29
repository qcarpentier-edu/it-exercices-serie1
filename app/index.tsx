import { SafeAreaView, StyleSheet } from "react-native";
import DragonBallCharacters from "./DragonBallCharacters";
import ApiDataFetcher from "./ApiDataFetcher";

export default function Index() {
  return (
      <SafeAreaView style={styles.container}>
        {/* <DragonBallCharacters /> */}
        <ApiDataFetcher />
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
