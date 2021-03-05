import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';

import {Video} from 'expo-av';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {UserInterfaceIdiom} from 'expo-constants';

const Post = ({post}) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [paused, setPaused] = React.useState(true);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: post.videoUri,
            }}
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
                  uri: post.user.imageUri,
                }}
              />
              <View style={styles.iconContainer}>
                <AntDesign name={'heart'} size={35} color="white" />
                <Text style={styles.statsLabel}>{post.likes}</Text>
              </View>
              <View style={styles.iconContainer}>
                <FontAwesome name={'commenting'} size={35} color="white" />
                <Text style={styles.statsLabel}>{post.comments}</Text>
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
                  uri: post.songImage,
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
