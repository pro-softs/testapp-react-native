import React, { useState, useEffect } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import {
  Button,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import SwipeToDelete from '../components/swipe_to_delete';

// import DateTimePicker from "@react-native-community/datetimepicker";

import CustomHeader from "../components/CustomHeader/CustomHeader";

export default function About(props) {
  return (
    <ScrollView style={{flex: 1,  backgroundColor: 'rgba(224,238,253,1.0)' }}>
      <CustomHeader navigation={props.navigation}/>
      <SwipeToDelete clickable={false}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
