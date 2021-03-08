/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import Navigation from './src/navigation';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Auth, API, graphOperation, graphqlOperation} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';
import {createUser} from './src/graphql/mutations';
import {getUser} from './src/graphql/queries';

const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
];

const getRandomImage = () => {
  return randomImages[Math.floor(Math.random() + randomImages.length)];
};

function App() {
  useEffect(() => {
    const fetchUser = async () => {
      // get currently authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      if (!userInfo) {
        return;
      }

      // check if the user exist in database
      const me = await API.graphql(
        graphqlOperation(getUser, {id: userInfo.attributes.sub}),
      );
      if (me.data.getUser) {
        console.log('User already exists in database');
        return;
      }

      // if it doesn't (it's newly registered user)
      // then, create a new use in database
      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        imageUri: getRandomImage(),
      };

      await API.graphql(graphqlOperation(createUser, {input: newUser}));
    };

    fetchUser();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Navigation />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default withAuthenticator(App);
