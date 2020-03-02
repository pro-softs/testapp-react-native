import React, { useState } from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from 'react-navigation-hooks';

import { SwipeListView } from 'react-native-swipe-list-view';

const DATA = [
  "Allison from court hasn't responded in 3 days. Follow up?",
  "Have you sent the signed NDA to Singapore airlines?",
  "Prepare for meeting tomorrow with Carl from Singapore airlines",
  "Finish debrief for yesterday's meeting with Sam from Nestle"
]

const rowTranslateAnimatedValues = {};
Array(4)
    .fill('')
    .forEach((_, i) => {
        rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
    });

export default function SwipeToDelete(props) {
    const {clickable} = props;

    const navigation = useNavigation();
    const [listData, setListData] = useState(
        Array(4)
            .fill('')
            .map((_, i) => ({ key: `${i}`, pic: '', text: DATA[i] }))
    );

    const onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        if (
            value < -Dimensions.get('window').width &&
            !this.animationIsRunning
        ) {
            this.animationIsRunning = true;
            Animated.timing(rowTranslateAnimatedValues[key], {
                toValue: 0,
                duration: 200,
            }).start(() => {
                const newData = [...listData];
                const prevIndex = listData.findIndex(item => item.key === key);
                newData.splice(prevIndex, 1);
                setListData(newData);
                this.animationIsRunning = false;
            });
        }
    };

    const renderItem = data => (
        <Animated.View
            style={[
                styles.rowFrontContainer,
                {
                    height: rowTranslateAnimatedValues[
                        data.item.key
                    ].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 85],
                    }),
                },
            ]}
        >
            <TouchableHighlight
                onPress={() => {
                  if(clickable)
                    navigation.navigate('About')}}
                underlayColor={'#AAA'}
            >
            <Card style={{height: 80, padding: 6}}>
              <Card.Content>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                  <Avatar.Icon size={40} icon="folder" />
                  <Paragraph style={{marginLeft: 10}}>{data.item.text}</Paragraph>
                </View>
              </Card.Content>
            </Card>
          </TouchableHighlight>
        </Animated.View>
    );

    const renderHiddenItem = () => (
        <View>
        </View>
    );

    return (
        <View style={styles.container}>
            <SwipeListView
                disableRightSwipe
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-Dimensions.get('window').width}
                onSwipeValueChange={onSwipeValueChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      paddingLeft: 10,
      paddingRight: 10,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 100,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        height: 100
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});
