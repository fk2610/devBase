import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

import Home from '../containers/Home';
import Person from '../containers/Person';

import manageTabNavigatorVisibility from '../utils/NavigationUtils';

export default createStackNavigator(
  {
    Home,
    Person,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.DefaultTransition,
    },
    navigationOptions: (navigation) => manageTabNavigatorVisibility(navigation, 1),
  },
);
