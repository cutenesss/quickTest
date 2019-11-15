import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { detailDoc } from '../data';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalView from '../component/ModalView'
import Header from '../component/Header';

class docDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    showModal = () => {
        this.setState({ visible: true })
    }

    hideModal = () => {
        this.setState({ visible: false })
    }

    goBack = () => {
        this.props.navigation.goBack()
    }

    render() {
        let item = this.props.navigation.getParam('item')
        return (
            <View style={styles.container}>
                <Header
                    onPress={this.goBack}
                    txt={item}
                />
                {
                    detailDoc.map(
                        (item, index) => {
                            return (
                                <View key={index}>
                                    <TouchableOpacity
                                        style={styles.touch}
                                        onPress={this.showModal}
                                    >
                                        <Icon
                                            name="ios-document"
                                            size={30}
                                            color='black'
                                            style={styles.icon}
                                        />
                                        <Text style={styles.txt}>{item}</Text>
                                    </TouchableOpacity>
                                    <View style={styles.cross} />
                                </View>
                            )
                        }
                    )
                }
                <ModalView
                    visible={this.state.visible}
                    hideModal={this.hideModal}
                />
            </View>
        );
    }
}

export default docDetail;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    touch: {
        justifyContent: 'space-between',
        height: 50, width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginLeft: 40
    },
    txt: {
        fontSize: 20,
        width: '100%',
        marginLeft: 10
    },
    cross: {
        height: 1,
        backgroundColor: 'gray',
        marginLeft: 40,
        marginRight: 40
    }
});