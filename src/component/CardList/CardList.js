import React from 'react';
import styles from './CardList.style';
import { View, Image } from 'react-native';
import Sound from 'react-native-sound';
import aSound from '../../assets/audio/animal/a.wav';
import Svg, { SvgUri } from 'react-native-svg';
// import A from '../../assets/img/a.svg';

const CardList = () => {

  Sound.setCategory('Playback');

  const whoosh = new Sound(aSound, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

    // Play the sound with an onEnd callback
    whoosh.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });

  return (
    <View style={styles.letterContainer}>
      {/*<A width={100} height={100}/>*/}
      {/*<SvgUri uri={'../../assets/img/a.svg'}/>*/}
      {/*<Image />*/}
      {/*<A width={300} height={300}/>*/}
      <Image
        style={styles.letterImage}
        source={{ uri: '../../assets/img/a.svg'}}
      />
      {/*<Image style={styles.letterImage} source={{ uri: '../../assets/img/a.svg'}}/>*/}
      {/*<Image style={styles.letterImage} source={{ uri: '../../assets/img/a.svg'}}/>*/}
      {/*<Image style={styles.letterImage} source={{ uri: '../../assets/img/a.svg'}}/>*/}
    </View>
  );
};



export default CardList;
