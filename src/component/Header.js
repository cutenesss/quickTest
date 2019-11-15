import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let {onPress, txt} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.touch}
                    onPress={onPress}
                >
                    <Icon
                        name="ios-arrow-round-back"
                        size={30}
                        color='black'
                    />
                </TouchableOpacity>
                <Text style={styles.title}> {txt} </Text>
            </View>
        );
    }
}

export default Header;
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e5e5e5',
    },
    title: {
        width: '72%',
        alignSelf: 'center',
        fontSize: 27,
        fontWeight: '500'
    },
    touch:{ 
        marginLeft: 20 
    },
});