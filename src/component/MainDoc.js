import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { doc } from '../data';

class MainDoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { goToDoc } = this.props;
        return (
            <ScrollView>
                <View style={styles.findView}>
                    <Icon
                        name="ios-search"
                        size={30}
                        color='#fff'
                        style={styles.findIcon}
                    />
                    <TextInput
                        style={styles.findTxt}
                        defaultValue={'Tìm tài liệu'}
                    />
                </View>
                {
                    doc.map(
                        (item, index) => {
                            return (
                                <View key={index}>
                                    <TouchableOpacity
                                        style={styles.list}
                                        onPress={() => goToDoc(item)}
                                    >
                                        <Icon
                                            name="ios-folder"
                                            size={30}
                                            color='black'
                                            style={styles.iconList}
                                        />
                                        <Text style={styles.txtList}>{item}</Text>
                                    </TouchableOpacity>
                                    <View style={styles.cross} />
                                </View>
                            )
                        }
                    )
                }
            </ScrollView>
        );
    }
}

export default MainDoc;
const styles = StyleSheet.create({
    findView: {
        flexDirection: 'row',
        backgroundColor: 'gray',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 4,
        alignItems: 'center'
    },
    findIcon: {
        marginLeft: 10
    },
    findTxt: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft: 10,
        borderRadius: 3,
        width: '75%',
        marginRight: 10,
        alignSelf: 'center'
    },
    list: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        width: '100%',
        flexDirection: 'row'
    },
    iconList:{ 
        marginLeft: 40 
    },
    txtList: {
        fontSize: 20,
        width: '100%',
        marginLeft: 10
    },
    cross: {
        height: 1,
        backgroundColor: 'gray',
        marginLeft: 80,
        marginRight: 40
    }
});