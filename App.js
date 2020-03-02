import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppContainer from "./src/AppContainer";
import Constants from "expo-constants";

export default function App(props) {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        paddingTop: Constants.statusBarHeight
      }}
    >
      <AppContainer />
    </ScrollView>
  );
}
