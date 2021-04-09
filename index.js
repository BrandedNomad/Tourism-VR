import React from 'react';
import {
  AppRegistry,
  NativeModules,
  StyleSheet,
  VrButton,
  Text,
  View,
  Image,
  asset
} from 'react-360';

const surfaceModule = NativeModules.surfaceModule

class InfoPanel extends React.Component{
  state = {
    img: {
      name:'info.png',
      width:100,
      height:100
    }
  }

  render(){
    let {img} = this.state;

    return(
      <View style={styles.displayPanel}>
        <Image source={asset(`${img.name}`)} style={{width: img.width, height:img.height}}/>
      </View>
    )
  }

}

class Tourism_VR extends React.Component {
  render() {
    return (
      <View>
        <Image source={asset('poland.png')} style={{width:500, height:300}}/>
        <View styel={styles.attractionBox}>
          <VrButton
              onClick={()=>{
                surfaceModule.start()
              }}
          >
            <Text style={styles.attractionText}>
              Welcome to Beautiful Gdansk, Poland! Click Here!
            </Text>
          </VrButton>
        </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('InfoPanel',()=> InfoPanel);
AppRegistry.registerComponent('Tourism_VR', () => Tourism_VR);
