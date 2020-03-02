import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import { Badge, Card, ProgressBar, Avatar, Title, Paragraph } from 'react-native-paper';

import styles from "./styles";

const CustomHeader = ({ navigation }) => (
  <View style={{flex: 1}}>
    <Card style={{height: 80}}>
      <Card.Content>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
                onPress={() => {
                  navigation.goBack(null)}}
            >
            <Avatar.Icon style={{backgroundColor: '#fff', fontColor: 'black'}} size={40} icon="arrow-left" />
          </TouchableOpacity>
          <Avatar.Icon size={40} icon="ninja" />
          <Title style={{fontSize: 18, flex: 1, marginLeft: 10, flexWrap: 'wrap'}}>Singapore airlines</Title>
        </View>
      </Card.Content>
    </Card>
  </View>
);

export default CustomHeader;
