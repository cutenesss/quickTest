import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ScrollableTabView, {
  ScrollableTabBar
} from 'react-native-scrollable-tab-view';
import MainImage from '../component/MainImage';
import MainDoc from '../component/MainDoc';
import Header from '../component/Header';
import CustomTabBar from '../component/CustomTabBar';

class screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToDoc = (item) => {
    this.props.navigation.navigate('docDetail', { item: item })
  }

  goToAlbum = () => {
    this.props.navigation.navigate("AlbumDetail");
  }

  goToImg = () => {
    this.props.navigation.navigate("ImgDetail");
  }

  renderTabBar = () => {
    return (
      <CustomTabBar />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          txt={'Thư viện'}
        />
        <ScrollableTabView
          initialPage={0}
          renderTabBar={this.renderTabBar}
          tabBarInactiveTextColor={'black'}
          tabBarUnderlineStyle={styles.tabBarUnder}
          locked={true}
          tabBarActiveTextColor={'green'}
        >
          <MainImage
            tabLabel={'Hình ảnh'}
            goToAlbum={this.goToAlbum}
            goToImg={this.goToImg}
          />
          <MainDoc
            tabLabel={'Tài liệu'}
            goToDoc={this.goToDoc}
          />
        </ScrollableTabView>
      </View>
    );
  }
}

export default screen1;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {

  },
  tabBarUnder: {
    backgroundColor:'white'
  },
});
