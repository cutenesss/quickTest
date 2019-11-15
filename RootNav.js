import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import docDetail from './src/screen/docDetail';
import ImgDetail from './src/screen/ImgDetail';
import AlbumDetail from './src/screen/AlbumDetail';
import screen1 from './src/screen/screen1';

const makeRoot = createStackNavigator(
  {
    screen1:{
      screen: screen1
    },
    docDetail: {
      screen: docDetail
    },
    AlbumDetail: {
      screen: AlbumDetail
    },
    ImgDetail: {
      screen: ImgDetail
    }
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(makeRoot);