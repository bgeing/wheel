import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class App extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bubble1} />
                <View style={styles.bubble2} />
                <View style={styles.bubble3} />
                <View>
                    <Text style={styles.title}>Winning Record</Text>
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>time</Text>
                        <Text style={styles.headerTitle}>Prize</Text>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.row}>
                            <Text style={styles.time}>{"June 20,2019 22:43"}</Text>
                            <Text style={styles.value}>{"0.01CAIC"}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.time}>{"June 20,2019 22:43"}</Text>
                            <Text style={styles.value}>{"0.01CAIC"}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9745dd',
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    bubble1: {
        position: 'absolute',
        backgroundColor: 'rgb(254, 100, 141)',
        width: 150,
        height: 150,
        top: -60,
        left: -60,
        borderRadius: 75
    },
    bubble2: {
        position: 'absolute',
        backgroundColor: 'rgba(254, 170, 133, 0.5)',
        width: 80,
        height: 80,
        top: 30,
        left: 30,
        borderRadius: 40
    },
    bubble3: {
        position: 'absolute',
        backgroundColor: '#df54f1',
        width: 90,
        height: 90,
        top: -30,
        right: -30,
        borderRadius: 45
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        color: '#fff',
        marginTop: 80
    },
    listContainer: {
        backgroundColor: '#fff',
        flex: 1,
        width: '80%',
        marginTop: 15,
        marginBottom: 50,
        borderRadius: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginLeft: 15,
        marginRight: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        maxHeight: 50
    },
    headerTitle: {
        fontSize: 20,
        color: '#333',
        marginTop: 15,
        marginBottom: 15
    },
    list: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 15,
        paddingBottom: 15
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        maxHeight: 40
    },
    time: {
        fontSize: 18,
        color: '#999'
    },
    value: {
        fontSize: 18,
        color: '#000'
    }
});

export default App;