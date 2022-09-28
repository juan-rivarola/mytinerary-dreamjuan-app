import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cities from '../Screens/Cities';
import Details from '../Screens/Details';

const Stack = createNativeStackNavigator();

function MyStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cities" component={Cities} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}
export default MyStackScreen