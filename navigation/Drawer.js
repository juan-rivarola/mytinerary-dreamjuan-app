import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Screens/Welcome'
import Cities from '../Screens/Cities'
import User from '../Screens/User'
import NewCity from '../Screens/NewCity'
import Details from '../Screens/Details'
import Itinerary from '../components/Itinerary'
import Comments from '../components/Comments'
import MyStackScreen from './Stack';

const DrawerNav = createDrawerNavigator()

export default function Drawer(){
    return(<>
        <DrawerNav.Navigator>
            <DrawerNav.Screen name='Home' component={Welcome} />
            <DrawerNav.Screen name='Cities' component={Cities}/>
            <DrawerNav.Screen name='New City' component={NewCity}/>
            <DrawerNav.Screen name='Profile' component={User}/>
            <DrawerNav.Screen name=' ' component={Details} />
        </DrawerNav.Navigator>
    </>
    )
}