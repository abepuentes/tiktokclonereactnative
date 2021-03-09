import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeButton from './homeButton';
import CreatePost from '../screens/CreatePost';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeButton} />
        <Stack.Screen
          options={{headerShown: true, title: 'Create Post'}}
          name="CreatePost"
          component={CreatePost}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
