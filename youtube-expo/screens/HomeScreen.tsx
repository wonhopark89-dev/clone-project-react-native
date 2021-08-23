import React from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {Entypo} from '@expo/vector-icons';

const styles = StyleSheet.create({
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9, // normal video ratio
  },
  timeContainer: {
    backgroundColor: '#00000099',
    height: 25,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  time: {
    color: 'white',
    fontWeight: 'bold',
  },
  videoCard: {},
  titleRow: {
    flexDirection: 'row',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  middleContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  subTitle: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '500',
  },
});

const HomeScreen = () => {
  return (
    <View>
      {/*{Video Component}*/}

      <View style={styles.videoCard}>
        {/*Thumbnail*/}
        <View>
          <Image
            style={styles.thumbnail}
            source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail2.jpeg'}}
          />
          <View style={styles.timeContainer}>
            <Text style={styles.time}>16:11</Text>
          </View>
        </View>
        {/*Title row*/}
        <View style={styles.titleRow}>
          {/*Avatar*/}
          <Image style={styles.avatar} source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}} />
          {/*Middle container: Title, subTitle, etc*/}
          <View style={styles.middleContainer}>
            <Text style={styles.title} numberOfLines={2}>
              SDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDFSDF
            </Text>
            <Text style={styles.subTitle}>creator Name 2m 2 months ago</Text>
          </View>
          {/*Icon*/}
          <Entypo name={'dots-three-vertical'} size={16} color={'white'} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
