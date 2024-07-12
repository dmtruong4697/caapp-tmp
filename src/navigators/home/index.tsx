import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import ChatListScreen from '../../screens/chat/chat-list';
import { ThemeStore } from '../../mobx/theme';
import FriendListScreen from '../../screens/friend/friend-list';
import FriendRequestScreen from '../../screens/friend/friend-request';
import SettingScreen from '../../screens/setting/setting';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {

    const {t} = useTranslation();

    const screenOptions = {
        tabBarStyle:{
            height: 58,
            paddingBottom: 10,
            paddingTop: 10,
        },

        tabBarItemStyle:{
        },

        tabBarHideOnKeyboard: true,
      };

    return (
        <Tab.Navigator
            {...{ screenOptions }}
        >
            <Tab.Screen 
                name="ChatList" 
                component={ChatListScreen} 
                options={{
                    tabBarLabel: t("hn-dashboard"),
                    headerShown: false,
                    tabBarActiveTintColor: ThemeStore.theme.PrimaryColor,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarIcon: ({focused}) => (
                        (focused)?
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/home-active.png')}/>
                        :
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/home-inactive.png')}/>
                    ),
                }}
            />

            <Tab.Screen 
                name="FriendList" 
                component={FriendListScreen} 
                options={{
                    tabBarLabel: t("hn-transactions"),
                    headerShown: false,
                    tabBarActiveTintColor: ThemeStore.theme.PrimaryColor,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarIcon: ({focused}) => (
                        (focused)?
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/wallet-active.png')}/>
                        :
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/wallet-inactive.png')}/>
                    ),
                }}
            />

            <Tab.Screen 
                name="FriendRequest" 
                component={FriendRequestScreen} 
                options={{
                    tabBarLabel: t("hn-budgets"),
                    headerShown: false,
                    tabBarActiveTintColor: ThemeStore.theme.PrimaryColor,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarIcon: ({focused}) => (
                        (focused)?
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/money-active.png')}/>
                        :
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/money-inactive.png')}/>
                    ),
                }}
            />

            <Tab.Screen 
                name="Setting" 
                component={SettingScreen} 
                options={{
                    tabBarLabel: t("hn-menu"),
                    headerShown: false,
                    tabBarActiveTintColor: ThemeStore.theme.PrimaryColor,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarIcon: ({focused}) => (
                        (focused)?
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/menu-active.png')}/>
                        :
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/menu-inactive.png')}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
  }
  
  export default HomeNavigator