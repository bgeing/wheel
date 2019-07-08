import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Animated,
    Easing
} from 'react-native';
import WinnerBanner from "./component/WinnerBanner";
import ResultModal from "./component/ResultModal";


export default class App extends React.Component {

    state = {
        angle: new Animated.Value(0),
        enabled: true,
        light: 0,
        modalOpen: false,
        res: 0
    };

    componentDidMount() {
        setInterval(this._toggleLight.bind(this), 500);
    }

    openModal = () => {
        this.setState({
            modalOpen: true
        })
    };

    closeModal = () => {
        this.setState({
            modalOpen: false,
            angle: new Animated.Value(0),
            enabled: true
        })
    };

    _toggleLight = () => {
        this.setState({
            light: this.state.light === 0 ? 1 : 0
        })
    };

    getResult = () => {
        // Todo: Async request
        return Math.floor(Math.random() * 6);
    };

    spin = async () => {
        if (this.state.enabled) {
            let res = await this.getResult();
            this.setState({
                enabled: false,
                res
            }, () => {
                Animated.sequence([
                    Animated.timing(this.state.angle, {
                        toValue: 1,
                        duration: 5000,
                        easing: Easing.in,
                        useNativeDriver: true
                    }),
                ]).start(() => {
                    setTimeout(this.openModal.bind(this), 1000);
                })
            });
        }
    };

    _renderWheel = () => {
        return (
            <ImageBackground source={require('./static/images/bg.png')} style={styles.container}>
                <View>
                    <Image source={require('./static/images/slogn.png')} style={styles.slogan}/>
                </View>
                <Image source={require('./static/images/piaofu.png')} style={styles.float}/>
                <WinnerBanner/>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('./static/images/panbg.png')} style={styles.wheelBg}/>
                    {
                        this.state.light === 0 ?
                            <Image source={require('./static/images/deng1.png')} style={styles.light}/> :
                            <Image source={require('./static/images/deng2.png')} style={styles.light}/>
                    }
                    <Animated.View style={[styles.wheelContainer, {
                        transform: [
                            {
                                rotate: this.state.angle.interpolate({
                                    inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                                    outputRange: ['0deg', '180deg', '360deg', '720deg', '1080deg', '1800deg', '2520deg', '3060deg', '3420deg', '3600deg', `${3600 + this.state.res * 60}deg`]
                                })
                            }
                        ]
                    }]}>
                        <Image source={require('./static/images/panneiquan.png')} style={styles.wheel}/>
                    </Animated.View>
                    <TouchableOpacity style={styles.playBtnContainer} onPress={this.spin}>
                        <Image source={require('./static/images/choujiangbt.png')} style={styles.playBtn}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.submitContainer}>
                    <TouchableHighlight>
                        <Image source={require('./static/images/button.png')} style={styles.submit}/>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                {this._renderWheel()}
                <ResultModal isOpen={this.state.modalOpen} closeModal={this.closeModal} point={10}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    slogan: {
        width: 200,
        height: 152,
        zIndex: 1
    },
    float: {
        position: 'absolute',
        width: '100%',
        height: 220,
        zIndex: 1,
        top: 135
    },
    wheelBg: {
        width: 320,
        height: 320
    },
    submitContainer: {
        marginTop: 20
    },
    light: {
        position: 'absolute',
        width: 310,
        height: 310,
        zIndex: 1
    },
    wheelContainer: {
        position: 'absolute',
    },
    wheel: {
        width: 300,
        height: 300
    },
    playBtnContainer: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
    playBtn: {
        marginTop: 10,
        marginLeft: 10,
        width: 250,
        height: 242
    },
    submit: {
        width: 250,
        height: 62.5
    }
});
