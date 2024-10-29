import { SafeAreaView, StyleSheet } from "react-native";
import DragonBallCharacters from "./DragonBallCharacters";

export default function Index() {
  return (
      <SafeAreaView style={styles.container}>
        <DragonBallCharacters />
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
