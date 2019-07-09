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
import { isIphoneX } from "./lib/is-iphone-x";
import axios from 'axios';

const PHONE_PREFIX = [
    "134", "135", "136", "137", "138", "139", "147", "150", "151", "152", "157", "158", "159", "182", "187", "188",
    "130", "131", "132", "133", "155", "156", "185", "186", "153", "180", "189"
];
const REWARD = ["0.01", "0.01", "0.1", "0.1", "0.5", "0.5", "1", "5", "10"];

export default class App extends React.Component {

    state = {
        angle: new Animated.Value(0),
        enabled: true,
        light: 0,
        modalOpen: false,
        res: 0,
        phone: "",
        amount: 1
    };

    componentDidMount() {
        setInterval(this._toggleLight.bind(this), 500);
        setInterval(this.setRandomRewardData.bind(this), 2000);
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

    getAngle = () => {
        switch (this.state.res) {
            case "0.01":
                return 0;
            case "10":
                return 60;
            case "5":
                return 120;
            case "1":
                return 180;
            case "0.5":
                return 240;
            case "0.1":
                return 300;
            default:
                return 0;
        }
    };

    getResult = async () => {
        // Todo: Async request
        let res = await axios.post('18.162.114.41:80/api/v1/gameinfo/get_draw_result', {
            requestID: "1234567890",
            appID: "",
            userID: "abcd1234",
            token: "abcefghijklmnopqrstuvewxyz"
        });
        return res.data;
    };

    setRandomRewardData = () => {
        let phone = PHONE_PREFIX[Math.floor(Math.random() * PHONE_PREFIX.length)] + "****" + ("0000" + Math.floor(Math.random() * 10000)).substr(-4);
        let reward = REWARD[Math.floor(Math.random() * REWARD.length)];
        this.setState({
            phone,
            reward
        })
    };

    spin = async () => {
        if (this.state.enabled) {
            let res = this.getResult();

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
                <TouchableOpacity style={{
                    position: 'absolute',
                    top: isIphoneX() ? 30 : 0,
                    right: 30
                }}>
                    <Image source={require('./static/images/Rule.png')} style={styles.ruleBtn}/>
                </TouchableOpacity>
                <View>
                    <Image source={require('./static/images/slogn.png')} style={styles.slogan}/>
                </View>
                <Image source={require('./static/images/piaofu.png')} style={styles.float}/>
                <WinnerBanner phone={this.state.phone} reward={this.state.reward}/>
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
                                    outputRange: ['0deg', '180deg', '360deg', '720deg', '1080deg', '1800deg', '2520deg', '3060deg', '3420deg', '3600deg', `${3600 + this.getAngle()}deg`]
                                })
                            }
                        ]
                    }]}>
                        <Image source={require('./static/images/panneiquan.png')} style={styles.wheel}/>
                    </Animated.View>
                    <TouchableOpacity style={styles.playBtnContainer} onPress={this.spin}
                                      activeOpacity={this.state.enabled ? 0.5 : 1}>
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
    ruleBtn: {
        width: 60,
        height: 50
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
