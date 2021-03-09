import React, {useEffect} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Storage} from 'aws-amplify';

import {Video} from 'expo-av';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = ({post}) => {
  const video = React.useRef(null);
  const [isLiked, setIsLiked] = React.useState(false);
  const [curPost, setCurPost] = React.useState(post);
  const [status, setStatus] = React.useState({});
  const [paused, setPaused] = React.useState(true);
  const [videoUri, setVideoUri] = React.useState('');

  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setCurPost({...curPost, likes: curPost.likes + likesToAdd});
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const getVideoUri = async () => {
      if (post.videoUri.startsWith('http')) {
        setVideoUri(post.videoUri);
      }
      setVideoUri(await Storage.get(post.videoUri));
    };

    getVideoUri();
  }, [post.videoUri]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            ref={video}
            style={styles.video}
            source={{uri: videoUri}}
            shouldPlay={paused}
            resizeMode="cover"
            isLooping
            onPlaybackStatusUpdate={(status2) => setStatus(() => status2)}
          />
          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <Image
                style={styles.profilePicture}
                source={{
                  uri: videoUri,
                }}
              />
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={onLikePress}>
                <AntDesign
                  name={'heart'}
                  size={35}
                  color={isLiked ? 'red' : 'white'}
                />
                <Text style={styles.statsLabel}>{curPost.likes}</Text>
              </TouchableOpacity>
              <View style={styles.iconContainer}>
                <FontAwesome name={'commenting'} size={35} color="white" />
                <Text style={styles.statsLabel}>{post.comments.content}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Fontisto name={'share-a'} size={28} color="white" />
                <Text style={styles.statsLabel}>{post.shares}</Text>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>@{post.user.username}</Text>
                <Text style={styles.description}>{post.description}</Text>
                <View style={styles.songRow}>
                  <Entypo name={'beamed-note'} size={16} color="white" />
                  <Text style={styles.songName}>{post.songName}</Text>
                </View>
              </View>
              <Image
                style={styles.songImage}
                source={{
                  uri: post.song.imageUri,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
