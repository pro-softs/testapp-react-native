import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../../screens/styles.js';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.17;
const slideWidth = (IS_IOS) ? wp(75): wp(85);
const itemHorizontalMargin = wp(1);

export const sliderWidth = viewportWidth ;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 0;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 0,
        borderRadius: 20,
    },
    shadow: {
        position: 'relative',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
        elevation: 5,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        borderRadius: 5,
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    image: {
        marginHorizontal: 20,
        marginVertical: 25,
    },
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        borderRadius: entryBorderRadius,
        backgroundColor: 'white'
    },
    radiusMaskEven: {
        backgroundColor: colors.black
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 30 - entryBorderRadius,
        paddingBottom: 30,
        paddingRight: 30,
        backgroundColor: 'white',
        borderBottomRightRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
        paddingLeft: 20,
        flex: 2
    },
    textContainerEven: {
        backgroundColor: colors.black
    },
    title: {
        color: colors.black,
        fontSize: 14,
        fontWeight: 'normal',
        letterSpacing: 0.5
    },
    titleEven: {
        color: 'white'
    },
    subtitle: {
        marginTop: 6,
        color: colors.gray,
        fontSize: 8,
        fontStyle: 'italic'
    },
    subtitleEven: {
        color: 'rgba(255, 255, 255, 0.7)'
    }
});
