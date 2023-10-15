import bluehome from "./component/blueHome";
import bluechonmau from "./component/blueChonMau";
import redhome from "./component/redHome";
import redchonmau from "./component/redChonMau";

import blackchonmau from "./component/blackChonMau";
import blackhome from "./component/blackHome";
import silverchonmau from "./component/silverChonMau";
import silverhome from "./component/silverHome";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (


    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="bluehome" component={bluehome} />
        <Stack.Screen name="bluechonmau" component={bluechonmau} />
        <Stack.Screen name="redhome" component={redhome} />
        <Stack.Screen name="redchonmau" component={redchonmau} />
        <Stack.Screen name="blackhome" component={blackhome} />
        <Stack.Screen name="blackchonmau" component={blackchonmau} />
        <Stack.Screen name="silverhome" component={silverhome} />
        <Stack.Screen name="silverchonmau" component={silverchonmau} />
      </Stack.Navigator>
    </NavigationContainer>

    // <>
    //   {/* <Screen1/> */}
    //   {/* <Screen2/> */}
    //   <redhome/>
    // </>
  );
}