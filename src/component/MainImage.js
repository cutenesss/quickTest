import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { img, img2 } from '../data';

class MainImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { goToAlbum, goToImg } = this.props;
        return (
            <ScrollView >
                <Text style={styles.title}>Album</Text>
                <View style={styles.alb}>
                    {
                        img.map(
                            (item, index) => {
                                return (
                                    <TouchableOpacity
                                        style={styles.touchAlb1}
                                        key={index}
                                        onPress={goToImg}
                                    >
                                        <Image style={styles.imgAlb1} source={item.src} />
                                        <View style={styles.back1} />
                                        <View style={styles.back2} />
                                        <Text style={styles.txtAlb1} numberOfLines={1}>{item.txt}</Text>
                                        <Text style={styles.numAlb1}>{item.num}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        )
                    }
                </View>
                <TouchableOpacity
                    style={styles.touch1}
                    onPress={goToAlbum}
                >
                    <Text style={styles.txt1}>Xem tất cả>>></Text>
                </TouchableOpacity>
                <Text style={styles.title2}>Tất cả ảnh</Text>
                <Image style={styles.img2} source={img2[0]} />
                <View style={styles.alb2}>
                    {
                        img2.map(
                            (item, index) => {
                                return (
                                    <View
                                        style={styles.viewAlb2}
                                        key={index}
                                    >
                                        <Image style={styles.imgAlb2} source={item} />
                                    </View>
                                )
                            }
                        )
                    }
                </View>
            </ScrollView>
        );
    }
}

export default MainImage;
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 10
    },
    alb: {
        flexDirection: 'row',
        height: 130,
        width: "100%",
        marginBottom: 20
    },
    touchAlb1: {
        height: 110,
        width: 110,
        marginLeft: 7
    },
    imgAlb1: {
        height: 100,
        width: 100,
        zIndex: 2
    },
    back1: {
        height: 100,
        width: 100,
        zIndex: 1,
        position: 'absolute',
        borderWidth: 2,
        borderColor: 'gray',
        marginLeft: 5,
        marginTop: 5
    },
    back2: {
        height: 100,
        width: 100,
        zIndex: 0,
        position: 'absolute',
        borderWidth: 2,
        borderColor: 'gray',
        marginTop: 10,
        marginLeft: 10
    },
    txtAlb1: {
        marginTop: 10,
        fontSize: 15,
        width: 120
    },
    numAlb1: {
        fontSize: 15,
        width: '100%',
        alignSelf: 'center'
    },
    touch1: {
        height: 50,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 35,
        paddingTop: 20
    },
    txt1: { fontSize: 18 },
    title2: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    img2: {
        width: "89%",
        height: 200,
        marginLeft: 20,
        marginRight: 20
    },
    alb2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 20,
        marginTop: 7
    },
    viewAlb2: {
        height: 82,
        width: 82
    },
    imgAlb2: {
        height: 75,
        width: 75
    }
});