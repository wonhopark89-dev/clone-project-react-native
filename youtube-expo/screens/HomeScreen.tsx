import React from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import VideoListItem from '../components/VideoListItem';
import videos from '../assets/data/videos.json';

const HomeScreen = () => {
  return (
    <View>
      {/* items... */}
      {videos.map((item, index) => (
        <VideoListItem key={index} video={item} />
      ))}
      {/*<VideoListItem video={videos[0]} />*/}
    </View>
  );
};

export default HomeScreen;
