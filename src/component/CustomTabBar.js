import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
const PhoneWidth = Dimensions.get('window').width;
const Button = (props) => {
    return (
        <TouchableOpacity {...props} activeOpacity={0.95}>
            {props.children}
        </TouchableOpacity>
    )
};
class CustomTabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderTab(name, page, isTabActive, onPressHandler) {
        const textColor = isTabActive ? 'white' : 'black';
        const backgroundColor = isTabActive ? '#ff6161' : 'white';
        return <Button
            style={{flex: 1, height: 40, backgroundColor, borderRadius: 14}}
            key={name}
            accessible={true}
            accessibilityLabel={name}
            accessibilityTraits='button'
            onPress={() => onPressHandler(page)}
        >
            <View style={[styles.tab]}>
                <Text style={[{color: textColor, },]}>
                    {name}
                </Text>
            </View>
        </Button>;
    }

    render() {
        return (
            <View style={styles.tabBarBox}>
                <View style={ {flexDirection: 'row',width:200, marginLeft: 20}}>
                    {this.props.tabs.map((name, page) => {
                        const isTabActive = this.props.activeTab === page;
                        const renderTab = this.props.renderTab || this.renderTab;
                        return renderTab(name, page, isTabActive, this.props.goToPage);
                    })}
                </View>
            </View>
        );
    }

}

export default CustomTabBar;
const styles = StyleSheet.create({
    tabBarBox: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    iconBox: {
        margin: 15
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabs: {
        borderRadius: 2,
        borderColor: '#0086E5',
        borderWidth: 1,
        width: PhoneWidth / 3,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
    },
});