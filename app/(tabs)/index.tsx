import { Pressable, Text, View, StyleSheet } from "react-native";
import { Heart, Flame, Timer, Footprints } from "lucide-react-native";
import Card from "@/components/Card";
import StartButton from "@/components/Button";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Cycleprogress from '@/components/Cycleprogress'

export default function Index() {
  
  const upperItems = [
    { id: "1", icon: Heart, title: "Distance", subtitle:`${0}  |  Km` },
    { id: "2", icon: Timer, title: "avg/pace", subtitle: `${0}   | min/Km` },
    { id: "3", icon: Flame, title: "Enrgy", subtitle: `${0} | Enrgy/bum` },
    { id: "4", icon: Footprints, title: "Steps", subtitle: `${0}`},
  ];

  const firstRow = upperItems.slice(0, 2);
  const secondRow = upperItems.slice(2, 4);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cycleContainer}>
        <Cycleprogress />
      </View>


      <View style={styles.row}>
        {firstRow.map((item) => (
          <View key={item.id} style={styles.halfItem}>
            <Pressable>
            <Card icon={item.icon}>
                <Text style={styles.textPrimary}>{item.title}</Text>
                <Text style={styles.textSecondary}>{item.subtitle}</Text>
              </Card>
            </Pressable>
        </View>
        ))}
      </View>


      <View style={styles.row}>
        {secondRow.map((item) => (
          <View key={item.id} style={styles.halfItem}>
            <Pressable>
              <Card icon={item.icon}>
                <Text style={styles.textPrimary}>{item.title}</Text>
                <Text style={styles.textSecondary}>{item.subtitle}</Text>
              </Card>
            </Pressable>
      </View>
        ))}
      </View>

      {/* button */}
      <View style={styles.buttonWrapper}>
        <StartButton
          title="let's Start"
          onPress={() => {
           router.push('/section')
          }}
        />
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
  cycleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    alignItems: "center",
    marginTop: 10,
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

