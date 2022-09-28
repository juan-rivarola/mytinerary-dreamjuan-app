import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cities from '../Screens/Cities';

const Stack = createNativeStackNavigator();

function MyStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cities" component={Cities} />
        </Stack.Navigator>
    )
}
export default MyStackScreen