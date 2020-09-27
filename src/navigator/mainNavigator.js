import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList113106Navigator from '../features/NotificationList113106/navigator';
import Settings113105Navigator from '../features/Settings113105/navigator';
import Settings113097Navigator from '../features/Settings113097/navigator';
import UserProfile113095Navigator from '../features/UserProfile113095/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList113106: { screen: NotificationList113106Navigator },
Settings113105: { screen: Settings113105Navigator },
Settings113097: { screen: Settings113097Navigator },
UserProfile113095: { screen: UserProfile113095Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
