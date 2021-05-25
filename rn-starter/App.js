import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import componentsscreen from "./src/screens/ComponentsScreen";
import displayname from "./src/screens/exe1";
import ListScreen from "./src/screens/listscreen";
import Friendlist from "./src/screens/exce2";
import ImageScreen from "./src/screens/ImageScreen";
import Counterscreen from "./src/screens/counterscreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: componentsscreen,
    Displynme: displayname,
    ListDisplay: ListScreen,
    FriendDisplay: Friendlist,
    Imagesc: ImageScreen,
    Counter: Counterscreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
