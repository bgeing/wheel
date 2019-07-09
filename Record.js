import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class Record extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            history: []
        }
    }

    componentDidMount() {
        axios.post('18.162.114.41:80/api/v1/gameinfo/get_draw_history', {
            requestID: "1234567890",
            appID: "",
            userID: "abcd1234",
            token: "abcefghijklmnopqrstuvewxyz"
        })
            .then(res => {
                this.setState({
                    history: res.data.history
                })
            });
    }

    getDate = (timestamp) => {
        let date = new Date(timestamp);
        let month = date.getMonth() + 1,
            day = date.getDate(),
            year = date.getFullYear(),
            hour = "0" + date.getHours(),
            minute = "0" + data.getMinutes();
        return `${month} ${day},${year} ${hour.substr(-2)}:${minute.substr(-2)}}`;
    };

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
                        {
                            this.state.history.map((item, index) => {
                                return (
                                    <View style={styles.row} key={index}>
                                        <Text style={styles.time}>{this.getDate(item.drawTime)}</Text>
                                        <Text style={styles.value}>{`${item.drawPrize}CAIC`}</Text>
                                    </View>
                                )
                            })
                        }
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

export default Record;