import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text className="font-bold text-2xl text-center"></Text>
    </SafeAreaView>
  );
}
