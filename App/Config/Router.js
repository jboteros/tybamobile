import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import Login from '../Screens/Login';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
    navigationOptions: {
      cardStack: {
        gesturesEnabled: false,
      },
      tabBarVisible: false,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
