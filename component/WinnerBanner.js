import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
} from 'react-native';

class WinnerBanner extends React.Component {

    render() {
        return (
            <ImageBackground source={require('../static/images/wenzi_bg.png')} style={styles.container}>
                <View style={styles.banner}>
                    <Text style={styles.phone}>{this.props.phone}</Text>
                    <Text style={styles.reward}>{` Just picked ${this.props.reward} CIACs!`}</Text>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 35,
        marginBottom: 50,
    },
    banner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    phone: {
        fontSize: 16,
        color: '#fff'
    },
    reward: {
        fontSize: 16,
        color: '#ffcd00'
    }
});


export default WinnerBanner;