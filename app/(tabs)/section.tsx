import { Pressable, Text, View, StyleSheet } from "react-native";
import { Heart, Flame, Timer, Play, Pause, RotateCcw } from "lucide-react-native";
import Card from "@/components/Card";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect, useRef } from "react";

export default function Section() {
return(
  <View style={styles.container}>
    <Text>
      helloo
    </Text>
  </View>
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

  // Timer
  timerDisplay: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginVertical: 16,
    fontVariant: ["tabular-nums"],
  },
  timerButtons: {
    flexDirection: "row",
    gap: 12,
  },
  timerBtn: {
    padding: 12,
    borderRadius: 12,
    minWidth: 48,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  startBtn: {
    backgroundColor: "#2e507d",
  },
  pauseBtn: {
    backgroundColor: "#17aff5",
  },
  resetBtn: {
    backgroundColor: "#be39be",
  },
  timerBtnText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

