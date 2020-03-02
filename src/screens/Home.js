import React, { useState, useEffect, Component } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import {
  Button,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  FlatList
} from "react-native";
import { Badge, Card, ProgressBar, Avatar, Title, Paragraph } from 'react-native-paper';
import SwipeToDelete from '../components/swipe_to_delete';

import styles from "./styles";

import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../components/SliderEntry/SliderEntry.style';
import SliderEntry from '../components/SliderEntry/SliderEntry';
import CustomHeader from "../components/CustomHeader/CustomHeader";

const IS_ANDROID = Platform.OS === 'android';

const SLIDER_1_FIRST_ITEM = 1;

const ENTRIES1 = [
  {
    text: "Your commissions this quarter total $32,400. You could make $14,200 more from your pipeline.",
    progress: 80
  },
  {
    text: "Your commissions this quarter total $32,400. You could make $14,200 more from your pipeline.",
    progress: 80
  },
  {
    text: "Your commissions this quarter total $32,400. You could make $14,200 more from your pipeline.",
    progress: 80
  }
]

const DATA = [
  {
    'text': 'Courts',
    'progress': 0.4
  },
  {
    'text': 'Nestle',
    'progress': 0.8
  },
  {
    'text': 'Singapore airlines',
    'progress': 0.2
  },
  {
    'text': '',
    'progress': 0
  }
]

export default class Home extends Component {
  _renderItem ({item, index}) {
      return <SliderEntry data={item} />
  }

  render() {
    return (
      <ScrollView style={{paddingTop: 20, flex: 1,  backgroundColor: 'rgba(224,238,253,1.0)' }}>
        <Text style={styles.title}>
          How you're doing?
        </Text>
        <View style={{height: 180}}>
          <Carousel
              ref={c => this._slider1Ref = c}
              data={ENTRIES1}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages={true}
              firstItem={SLIDER_1_FIRST_ITEM}
              inactiveSlideScale={1}
              inactiveSlideOpacity={0.7}
              // inactiveSlideShift={20}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
            />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.title}>
            Things to do
          </Text>
          <Badge style={{marginLeft: -40, backgroundColor: 'white', fontWeight: 'bold', color: 'black'}}>3</Badge>
        </View>
        <SwipeToDelete clickable={true}/>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.title}>
            Deals and leads
          </Text>
          <Badge style={{marginLeft: -10,  backgroundColor: 'white', fontWeight: 'bold', color: 'black'}}>3</Badge>
        </View>
        <FlatList
          style={{paddingBottom: 30, marginTop: 20, paddingLeft: 10, paddingRight: 10}}
          data={DATA}
          renderItem={({ item }) => (
            <View style={{flex: 1,  justifyContent: 'center', flexDirection: 'column', margin: 2 }}>
              {
                item.text == '' ? null :
                  <Card style={{height: 80}}>
                    <Card.Content>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Avatar.Icon size={40} icon="folder" />
                        <Paragraph style={{flex: 1, marginLeft: 10, flexWrap: 'wrap'}}>{item.text}</Paragraph>
                        <ProgressBar style={{transform: [{ rotate: '-90deg'}],  width: 40, backgroundColor:'white', borderColor:'rgba(105,	169,	248, 1)', borderWidth:1, borderRadius: 6, height: 7}} progress={item.progress} color='rgba(105,	169,	248, 1)'	 />
                      </View>
                    </Card.Content>
                  </Card>
              }
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  }
}
