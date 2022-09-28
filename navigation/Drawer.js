import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Welcome from '../Screens/Welcome'
import Cities from '../Screens/Cities'
import User from '../Screens/User'
import NewCity from '../Screens/NewCity'

const DrawerNav = createDrawerNavigator()

export default function Drawer(){
    return(
        <DrawerNav.Navigator>
            <DrawerNav.Screen name='Home' component={Welcome} />
            <DrawerNav.Screen name='Cities' component={Cities}/>
            <DrawerNav.Screen name='New City' component={NewCity}/>
            <DrawerNav.Screen name='Profile' component={User}/>
        </DrawerNav.Navigator>
    )
}