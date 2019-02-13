import React from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import {Platform} from 'react-native';
import {DrawerButton} from '../components/Header';
import Home from '../screens/Home';
import Addnew from '../screens/Addnew';

const LeftDrawerButton =({navigation}) =>{
    if(Platform.OS  === 'android'){
        return <DrawerButton onPress={() => navigation.toggleDrawer()}/>
    }
    return null;
}

export const HomeSatck = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions:(props) => ({
            title: 'Home',
            headerLeft:<LeftDrawerButton {...props}/>,
        }),
    }
});

export const AddNewSatck = StackNavigator({
    Addnew: {
        screen: Addnew,
        navigationOptions:(props) => ({
            title: 'AddNew',
            headerLeft:<LeftDrawerButton {...props}/>,
        }),
    }
});

export const Tabs = TabNavigator({
    Home: {
        screen: HomeSatck,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => <Icon name='ios-list' size={35} color={tintColor}/>
        }
    },
    Addnew: {
        screen: AddNewSatck,
        navigationOptions: {
            tabBarLabel: 'Add New',
            tabBarIcon: ({tintColor}) => <Icon name='ios-list' size={35} color={tintColor}/>
        }
    }
});




export const Drawer = DrawerNavigator({
    Home: {
        screen: HomeSatck,
        navigationOptions: {
            drawerLabel: 'Home',
        }
    },
    Addnew: {
        screen: AddNewSatck,
        navigationOptions: {
            drawerLabel: 'Add New'
        }
    }
})