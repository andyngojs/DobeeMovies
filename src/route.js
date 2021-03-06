import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import PlaylistScreen from './screens/PlaylistScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import InforappScreen from './screens/InforappScreen';
import PlaylistItem from './screens/PlaylistItem';
import Movies from './screens/Movies';
import RegisterScreen from './screens/RegisterScreen';

const HomeStack = createStackNavigator(
    {
     HomeScreen: HomeScreen,
     DetailScreen: DetailScreen
    }, 
   {
     defaultNavigationOptions: {
       headerShown: true,
       headerTitle: false,
       headerTransparent: true,
     },
   }
);

const AuthorStack = createStackNavigator(
    {
        ProfileScreen: ProfileScreen,
        InforappScreen: InforappScreen,
    },
    {
        defaultNavigationOptions: {
           headerShown: true,
            headerTitle: false, 
            headerTransparent: true,
        },    
    },
);

const PlaylistStack = createStackNavigator(
    {
        PlaylistScreen: PlaylistScreen,
        PlaylistItem: PlaylistItem,
        Movies: Movies,
    },
    {
        defaultNavigationOptions: {
            headerShown: true,
            headerTitle: false, 
            headerTransparent: true,
         },  
    },
);

const RegisterStack = createStackNavigator(
    {
        LoginScreen: LoginScreen,
        RegisterScreen: RegisterScreen,
    },
    {
        defaultNavigationOptions: {
            headerShown: true,
            headerTitle: false, 
            headerTransparent: true,
         },  
    }
);

const BottomNav = createBottomTabNavigator({
     HomeStack: {
         screen: HomeStack,
         navigationOptions: {
             tabBarLabel: 'Trang Chủ',
         }
     },
     Playlist: {
        screen: PlaylistStack,
        navigationOptions: {
            tabBarLabel: 'Danh Sách Phát',
        }
     },
     Profile: {
        screen: AuthorStack,
        navigationOptions: {
            tabBarLabel: 'Cá Nhân',
        }
     }
}, 
   {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
            case 'HomeStack': {
                iconName = 'home';
                break;
            }
            case 'Playlist': {
                iconName = 'th-list';
                break;
            }
            case 'Profile': {
                iconName = 'user-circle';
                break;
            }
            default: {
                iconName = 'heart';
            }
        }
        return <FontAwesome5 name={iconName} size={20} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#001F45',
      inactiveTintColor: '#5A7B8D',
      style: {paddingVertical: 10},
      labelStyle: {
          fontFamily: 'Roboto-Relugar',
          fontSize: 11,
      },
    },
   }
);

const SwitchNav = createSwitchNavigator({
    LoginScreen: RegisterStack,
    RegisterScreen: RegisterStack,
    DashBoard: BottomNav,
    InforappScreen: AuthorStack,
    DetailsPlaylist: PlaylistStack,
    Movies: PlaylistStack,
})

const MainContainer = createAppContainer(SwitchNav);
export default MainContainer;
