import React from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import styles from './styles';

type VideoListItemProps = {
  video: {
    id: string;
    createdAt: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    duration: number;
    user: {
      name: string;
      image?: string;
    };
    views: number;
  };
};

const VideoListItem = (props: VideoListItemProps) => {
  const {video} = props;
  return (
    <View>
      {/*{Video Component}*/}

      <View style={styles.videoCard}>
        {/*Thumbnail*/}
        <View>
          <Image style={styles.thumbnail} source={{uri: video.thumbnail}} />
          <View style={styles.timeContainer}>
            <Text style={styles.time}>{video.duration}</Text>
          </View>
        </View>
        {/*Title row*/}
        <View style={styles.titleRow}>
          {/*Avatar*/}
          <Image style={styles.avatar} source={{uri: video.user.image}} />
          {/*Middle container: Title, subTitle, etc*/}
          <View style={styles.middleContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {video.title}
            </Text>
            <Text style={styles.subTitle}>
              {video.user.name} {video.views} {video.createdAt}
            </Text>
          </View>
          {/*Icon*/}
          <Entypo name={'dots-three-vertical'} size={16} color={'white'} />
        </View>
      </View>
    </View>
  );
};

export default VideoListItem;
