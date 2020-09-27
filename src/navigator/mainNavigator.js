import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings113149Navigator from '../features/Settings113149/navigator';
import UserProfile113135Navigator from '../features/UserProfile113135/navigator';
import Tutorial113134Navigator from '../features/Tutorial113134/navigator';
import NotificationList113106Navigator from '../features/NotificationList113106/navigator';
import Settings113105Navigator from '../features/Settings113105/navigator';
import Settings113097Navigator from '../features/Settings113097/navigator';
import UserProfile113095Navigator from '../features/UserProfile113095/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings113149: { screen: Settings113149Navigator },
UserProfile113135: { screen: UserProfile113135Navigator },
Tutorial113134: { screen: Tutorial113134Navigator },
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
