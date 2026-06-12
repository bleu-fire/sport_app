import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import type { LucideIcon } from "lucide-react-native";

interface CardProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({ children, style, icon: Icon }) => {
  return (
    <View style={[styles.card, style]}>
      {Icon && (
        <View style={styles.iconContainer}>
          <Icon size={32} color="#E9647E" />
        </View>
      )}
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#001a2c",
    borderRadius: 16,
    padding: 20,
    // Shadow for Android
    elevation: 8,
    width: "100%",

    alignSelf: "center",
    alignItems: "center",
    
  },
  iconContainer: {
    marginBottom: 12,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "flex-start",
  },

});

