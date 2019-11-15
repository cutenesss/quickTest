import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { menu } from '../data'

class ModalFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { visible, hideModal } = this.props;
        return (
            <Modal
                transparent={true}
                animationType='slide'
                visible={visible}
            >
                <View style={styles.container}>
                    <View style={{
                        flexDirection: 'row',
                        height: 125,
                        backgroundColor: 'white',
                        borderRadius: 15
                    }}
                    >
                        {
                            menu.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={{ justifyContent: 'center', width: 75, alignItems: 'center'}}
                                        onPress={()=>alert('click')}
                                    >
                                        <View
                                            style={styles.icon}
                                        >
                                            <Icons name={item.icon} size={item.size} color='white' />
                                        </View>
                                        <Text> {item.title} </Text>
                                    </TouchableOpacity>

                                )
                            })
                        }
                    </View>
                    <TouchableOpacity
                        onPress={hideModal}
                        style={{
                            width: '100%',
                            height: 50,
                            backgroundColor: 'white',
                            marginTop: 10,
                            zIndex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: '500', color: 'blue' }}>Hủy</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.viewAround}
                    onPress={hideModal}
                />
            </Modal>
        )
    }
}

export default ModalFilter;
const styles = StyleSheet.create({
    container: {
        width: '92%',
        height: 130,
        marginRight: 15,
        marginTop: 500,
        marginLeft: 15,
        zIndex: 1
    },
    icon: {
        width: 55,
        height: 55,
        backgroundColor: '#599af4',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewAround: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 0,
        position: 'absolute'
    },
    title: {
        width: '65%',
        alignSelf: 'center',
        fontSize: 23
    },
});