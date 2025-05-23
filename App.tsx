import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./app/navigation";
import "./global.css";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
