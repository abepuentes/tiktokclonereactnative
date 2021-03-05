import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import Post from '../../components/Post';

import POSTS from '../../../data/posts';

const Home = () => {
  return (
    <View>
      <FlatList
        data={POSTS}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 75}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;
