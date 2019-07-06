import React from "react";
import {TouchableOpacity, Text, Image, View, StyleSheet} from "react-native";
import Modal from "react-native-modal";

export default class ResultModal extends React.Component {

    render() {
        return (
            <Modal isVisible={this.props.isOpen} style={styles.modal}>
                <View style={styles.container}>
                    <Image source={require('../static/images/pop_suisui.png')} style={styles.decorator}/>
                    <Image source={require('../static/images/pop_coin.png')} style={styles.coin}/>
                    <Text style={styles.text}>Congratulations!</Text>
                    <TouchableOpacity style={styles.submitContainer} onPress={this.props.closeModal}>
                        <Image source={require('../static/images/pop_bg.png')} style={styles.button}/>
                        <View style={styles.btnTextContainer}>
                            <Text style={styles.info}>You've got </Text>
                            <Text style={styles.earn}>10</Text>
                            <Text style={styles.info}> CAICs</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: 300,
        height: 330,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    decorator: {
        position: 'absolute',
        top: 20,
        width: 250,
        height: 61.9
    },
    coin: {
        width: 120,
        height: 117,
        marginTop: 50
    },
    text: {
        fontSize: 24
    },
    submitContainer: {
        position: 'relative',
        marginTop: 30
    },
    button: {
        width: 245,
        height: 70
    },
    btnTextContainer: {
        width: 245,
        height: 70,
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 20,

    },
    info: {
        color: '#fff',
        fontSize: 16
    },
    earn: {
        color: '#fff',
        fontSize: 40,
        marginTop: 10
    }
});