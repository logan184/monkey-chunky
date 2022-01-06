import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import {SafeAreaProvider } from 'react-native-safe-area-context';
import db from './localdb';
import PhonicSoundButton from './components/phonicSoundButton';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSound: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
        
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <Image  
         style={styles.tinyLogo}
         source={require('./assets/monkey.png')}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks });
            this.setState({ phonicSound: db[this.state.text].phones });
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {
            this.state.chunks.map((item, index) =>{
              return(
                <PhonicSoundButton 
                wordChunk = {
                  this.state.chunks[index]
                }

                soundChunk = {
                  this.state.phonicSound[index]
                }

                pressButtonIndex = {index} 
                >

                </PhonicSoundButton>
              )
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  tinyLogo: {
   width:"25%",
    height: 250,
    textAlign:'center',
    marginHorizontal: "auto",
    marginVertical:20
  },
  chunkButton: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  },
  chunkTextColor: {
    color: "white"
  }
});
