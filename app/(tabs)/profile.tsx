import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';


export default function ProfileScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const cameraRef = useRef<any>(null);

  
  // --- DASHBOARD MODE ---
  return (
    <SafeAreaView >
 
    </SafeAreaView>
  );
}

//SYSTEM THEMING STYLE SHEETS
const styles = StyleSheet.create({})
