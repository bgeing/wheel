import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Animated,
    Easing
} from 'react-native';

function Rules() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.mainTitle}>Rules of Activity</Text>
            </View>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Activity time</Text>
                    <View style={[styles.titleBorder, {width: 110}]}/>
                </View>
                <Text style={styles.content}>June 30, 2019 to August 30, 2010</Text>
            </View>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Activity object</Text>
                    <View style={[styles.titleBorder, {width: 125}]}/>
                </View>
                <Text style={styles.content}>When you were born, you were crying.....</Text>
            </View>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Activity content</Text>
                    <View style={[styles.titleBorder, {width: 135}]}/>
                </View>
                <Text style={styles.content}>When you were born, you were crying.....When you were born, you were crying.....</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 25,
        marginRight: 25
    },
    mainTitle: {
        fontSize: 30,
        fontWeight: "600",
        marginTop: 30,
        marginBottom: 15
    },
    titleContainer: {
        marginTop: 30,
        marginBottom: 25
    },
    title: {
        fontSize: 20
    },
    titleBorder: {
        position: 'absolute',
        height: 8,
        bottom: 0,
        backgroundColor: 'rgba(246, 228, 255, 0.7)',
        zIndex: -1
    },
    content: {
        color: '#4B4B4B',
        fontSize: 16
    }
})

export default Rules;