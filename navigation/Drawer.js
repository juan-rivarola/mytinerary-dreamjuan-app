import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Welcome from '../Screens/Welcome'
import Cities from '../Screens/Cities'

const DrawerNav = createDrawerNavigator()

export default function Drawer(){
    return(
        <DrawerNav.Navigator>
            <DrawerNav.Screen name='Home' component={Welcome} />
            <DrawerNav.Screen name='Cities' component={Cities}/>
        </DrawerNav.Navigator>
    )
}