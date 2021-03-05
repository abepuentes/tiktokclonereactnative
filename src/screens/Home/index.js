import React from 'react';
import {View} from 'react-native';
import Post from '../../components/Post';

const POST = {
  id: 'p1',
  user: {
    id: 'u1',
    username: 'daviddobrik',
    imageUri:
      'https://wwd.com/wp-content/uploads/2020/10/AE4A7501.jpg?crop=366px%2C407px%2C1303px%2C870px&resize=640%2C415',
  },
  description: 'hahahah oh boy @borat',
  songName: 'NF - The search',
  songImage:
    'https://wwd.com/wp-content/uploads/2020/10/AE4A7501.jpg?crop=366px%2C407px%2C1303px%2C870px&resize=640%2C415',
  likes: 3,
  comments: 19.4,
  shares: 101.1,
  videoUri:
    'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
};

const Home = () => {
  return (
    <View>
      <Post post={POST} />
    </View>
  );
};

export default Home;
