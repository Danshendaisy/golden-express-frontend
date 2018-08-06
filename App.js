import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button,
  RefreshControl,
  Image,
  ScrollView
} from 'react-native';
 // Version can be specified in package.json
import { Ionicons } from '@expo/vector-icons';
import {Header, Icon} from 'react-native-elements';

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import styles from './Components/Styles'
import RegisterScreen from './Components/RegisterScreen'
import LoginScreen from './Components/LoginScreen'
import ResultScreen from './Components/ResultScreen'
import GroceryListScreen from './Components/GroceryListScreen'
import HorizontalMealScroll from './Components/HorizontalMealScroll'
import SearchScreen from './Components/SearchScreen'
import CheckoutScreen from './Components/CheckoutScreen'
import FeedbackScreen from './Components/FeedbackScreen'
import CategoriesScreen from './Components/CategoriesScreen'
import CartScreen from './Components/CartScreen'
import HomeNavigator from './Components/HomeNavigator'
import CategoriesNavigator from './Components/CategoriesNavigator'
import SearchNavigator from './Components/SearchNavigator'

const Tabs = TabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-home' size={30} color={tintColor} />,
      tabBarLabel:'Home',
      header:null,

      headerStyle: {
        backgroundColor: "white",
      }    }
  },
  Categories: {
    screen: CategoriesNavigator,
    navigationOptions: {
      tabBarIcon:({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />,
      tabBarLabel:'Category',
      header:null,
      headerStyle: {
        backgroundColor: "white",
      }
    }
  },

  Search: {
    screen: SearchNavigator,
    navigationOptions: {
      tabBarIcon:({ tintColor }) => <Ionicons name='ios-search' size={30} color={tintColor} />,
      tabBarLabel:'Search',
      header:null,

      headerStyle: {
        backgroundColor: "white",
      },
    }
  },
  Result: {
    screen: ResultScreen,
    navigationOptions: {
      tabBarIcon:({ tintColor }) => <Ionicons name='ios-list' size={30} color={tintColor} />,
      tabBarLabel:'Browse'
    }
  },
  GroceryList: {
    screen: GroceryListScreen,
    navigationOptions: {
      tabBarIcon:({ tintColor }) => <Ionicons name='ios-basket' size={30} color={tintColor} />,
      tabBarLabel:'Grocery'
    }
  },
  Cart: {
    screen: CartScreen,
    headerMode:'none',
    navigationOptions: {
      tabBarIcon:({ tintColor }) => <Ionicons name='ios-basket' size={30} color={tintColor} />,
      tabBarLabel:'Cart',
    }
  }

},
{initialRouteName:'Home',
  navigationOptions: {
    headerRight:  <Header
      backgroundColor='transparent'
      rightComponent={
      <TouchableOpacity>
        <Icon
        name='shopping-cart'
        color='blue'
        onPress={()=>{}}/>
        </TouchableOpacity>}
    />
  }
}
)
const MainNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    }
  },
  Register: {
    screen: RegisterScreen,
  },
  Checkout: {
    screen: CheckoutScreen,
  },
  Feedback: {
    screen: FeedbackScreen
  },
  Try: {
    screen: Tabs
  },
},
{
  headerMode: 'float',
  navigationOptions: {
    headerLeft: null,

 }})
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    );
  }
}
// const screens = {
//   Login: {
//     screen: LoginScreen,
//   },
//   Register: {
//     screen: RegisterScreen,
//   },
//   BrowseGrocery: {
//     screen: BrowseGroceryScreen,
//   },
//   GroceryList: {
//     screen: GroceryListScreen,
//   },
//   Search: {
//     screen: SearchScreen,
//   },
//   Home: {
//     screen: HomeScreen,
//   },
//   Checkout: {
//     screen: CheckoutScreen,
//   },
//   Feedback: {
//     screen: FeedbackScreen
//   },
//   Categories: {
//     screen: CategoriesScreen
//   }
// }
// const Home = StackNavigator(screens, {initialRouteName: 'Home'} )
// const Search = StackNavigator(screens,{initialRouteName: 'Search'} )
// const BrowseGrocery = StackNavigator(screens, {initialRouteName: 'BrowseGrocery'})
// const GroceryList = StackNavigator(screens, {initialRouteName: 'GroceryList'})
// const Categories = StackNavigator(screens, {initialRouteName: 'Categories'})
// export default TabNavigator(
//   {
//     Categories: { screen: Categories },
//     Home: { screen: HomeScreen },
//     Search: { screen: Search },
//     BrowseGrocery: { screen: BrowseGrocery },
//     GroceryList: { screen: GroceryList }
//   },
//   {
//     // navigationOptions: ({ navigation }) => ({
//     //   tabBarIcon: ({ focused, tintColor }) => {
//     //     const { routeName } = navigation.state;
//     //     let iconName;
//     //     if (routeName === 'Home') {
//     //       iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//     //     } else if (routeName === 'Search') {
//     //       iconName = `ios-options${focused ? '' : '-outline'}`;
//     //     }
//     //     else if (routeName === 'BrowseGrocery') {
//     //       iconName = `ios-options${focused ? '' : '-outline'}`;
//     //     }
//     //     else if (routeName === 'GroceryList') {
//     //       iconName = `ios-options${focused ? '' : '-outline'}`;
//     //     }
//     //
//     //
//     //     // You can return any component that you like here! We usually use an
//     //     // icon component from react-native-vector-icons
//     //     return <Ionicons name={iconName} size={25} color={tintColor} />;
//     //   },
//     // }),
//     // tabBarComponent: TabBarBottom,
//     // tabBarPosition: 'bottom',
//     // tabBarOptions: {
//     //   activeTintColor: 'tomato',
//     //   inactiveTintColor: 'gray',
//     // },
//     // animationEnabled: true,
//     // swipeEnabled: false,
//     order: ['Categories', 'Search', 'BrowseGrocery','GroceryList','Home']
//   }
// );
