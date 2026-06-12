import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";
import { router, Href } from "expo-router";

interface StartButtonProps {
  title?: string;
  route?: Href;
  style?: ViewStyle;
  onPress?: () => void;
}

function StartButton({ title = "Start", route = "/section", style, onPress }: StartButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, style, pressed && styles.pressed]}
      onPress={onPress || (() => router.push(route))}
    >
      <Text style={styles.txt}>{title}</Text>
    </Pressable>
  );
}

export default StartButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#E9647E",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 48,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#E9647E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  pressed: { opacity: 0.8, transform: [{ scale: 0.96 }] },
  txt: { color: "#FFF", fontSize: 18, fontWeight: "bold", letterSpacing: 0.5 },
});

