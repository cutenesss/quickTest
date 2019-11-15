import React, { Component } from 'react';
import { View, StyleSheet, Image} from 'react-native';
import {img2} from '../data';
import Header from '../component/Header';

class ImgDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    goBack=()=>{
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{}}>
                <Header
                    onPress={this.goBack}
                    txt={'Thư viện'}
                />
                <View style={styles.listImg}>
                    {
                        img2.map(
                            (item, index) => {
                                return (
                                    <View style={styles.viewItem} key={index}>
                                        <Image style={styles.img} source={item} />
                                    </View>
                                )
                            }
                        )
                    }
                </View>
            </View>
        );
    }
}

export default ImgDetail;
const styles = StyleSheet.create({
    container: { 
        flex: 1 
    },
    listImg:{ 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        marginLeft: 20 
    },
    viewItem:{ 
        height: 80, 
        width: 80, 
        padding: 2 
    },
    img:{ 
        height: 70, 
        width: 70, 
        padding: 5 
    }
});