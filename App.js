import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import LandingView from './views/LandingView';
import LoginView from './views/LoginView';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterView from './views/RegisterView';
import {useDispatch, useSelector} from 'react-redux';

import {setUser} from './redux/actions/userAction';
import DashboardView from './views/DashboardView';

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log(user);
    auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
        setIsLoggedIn(true);
      } else {
        dispatch(setUser(null));
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Dashboard" component={DashboardView} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={LandingView} />
            <Stack.Screen name="Login" component={LoginView} />
            <Stack.Screen name="Register" component={RegisterView} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f6f8b',
  },
});
