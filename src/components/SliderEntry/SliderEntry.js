import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './SliderEntry.style';
import { ProgressBar, Colors, Card } from 'react-native-paper';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    render () {
        const { data: { text, progress } } = this.props;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              >
                <View style={styles.shadow} />
                <View style={[styles.textContainer]}>
                    <Text
                      style={[styles.title]}
                    >
                        { text }
                    </Text>
                    <ProgressBar style={{marginTop: 20, backgroundColor:'white', borderColor:'rgba(105,	169,	248, 1)', borderWidth:1, borderRadius: 10, height: 7}} progress={0.6} color='rgba(105,	169,	248, 1)'	 />
                </View>
            </TouchableOpacity>
        );
    }
}
