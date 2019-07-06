import React from 'react';
import {
    StyleSheet,
    View,
    Text as RNText,
    Dimensions,
    ImageBackground,
    Image,
    Animated
} from 'react-native';

class WinnerBanner extends React.Component {

    render() {
        return (
            <ImageBackground source={require('../static/images/wenzi_bg.png')} style={styles.container}>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 35,
        marginBottom: 50
    },
});


export default WinnerBanner;