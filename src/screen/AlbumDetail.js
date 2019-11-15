import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { img } from '../data';

class AlbumDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    goToImg=()=>{
        this.props.navigation.navigate("ImgDetail");
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={{ marginLeft: 20 }}
                        onPress={this.goBack}
                    >
                        <Icon
                            name="ios-arrow-round-back"
                            size={30}
                            color='black'
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}> Thư viện </Text>
                </View>
                <View style={{ height: 130, width: "100%", marginTop: 40 }}>
                    {
                        img.map(
                            (item, index) => {
                                return (
                                    <TouchableOpacity 
                                        style={{ height: 110, width: 110, marginLeft: 20, marginBottom: 25, flexDirection: 'row' }} 
                                        key={index}
                                        onPress={this.goToImg}
                                    >
                                        <Image style={{ height: 100, width: 100, zIndex: 2 }} source={item.src} />
                                        <View style={{ height: 100, width: 100, zIndex: 1, position: 'absolute', borderWidth: 2, borderColor: 'gray', marginLeft: 5, marginTop: 5 }} />
                                        <View style={{ height: 100, width: 100, zIndex: 0, position: 'absolute', borderWidth: 2, borderColor: 'gray', marginTop: 10, marginLeft: 10 }} />
                                        <View style={{ marginLeft: 30, justifyContent: 'center' }}>
                                            <Text style={{ marginTop: 10, fontSize: 15, width: 120 }} numberOfLines={1}>{item.txt}</Text>
                                            <Text style={{ fontSize: 15, width: '100%', alignSelf: 'center' }}>{item.num}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        )
                    }
                </View>
            </View>
        );
    }
}

export default AlbumDetail;
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    },
    title: {
        width: '65%',
        alignSelf: 'center',
        fontSize: 23
    },
});