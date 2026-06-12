import { Pressable, Text, View, StyleSheet } from "react-native";
import { Heart, Flame, Timer } from "lucide-react-native";
import Card from "@/components/Card";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Section() {


  return (
  <SafeAreaView style={styles.container}>
      <View>
       
      </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: "#24366d",
    padding: 20,
    marginTop: 30,
    gap: 20,
  },
  row: {
    flexDirection: "row",
    gap: 20,
  },
  halfItem: {
    flex: 1,
  },

  //  Typography 
  textPrimary: {
    fontSize: 18,
     fontWeight: "bold", 
    marginBottom: 8,
    color: "#FFFFFF",
    },
  textSecondary: {
    fontSize: 14,
     color: "#BDC5E9",
    textAlign: "center",
  },
});
