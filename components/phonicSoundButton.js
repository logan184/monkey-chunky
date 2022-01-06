import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Audio from "expo-av"

export default class PhonicSoundButton extends React.Component{
    constructor(){
        super();
        this.state = {
            pressButtonIndex: "empty"
        }
    }

    playSound = async(soundChunk) =>{
        var soundLink = 'https://curriculum.whitehatjr.com/Visual+Project+Asset/PRO_VD/Phones/phones/' + soundChunk + '.mp3';
        await Audio.Sound.createAsync(
        {
            uri: soundLink
        },
        {
            shouldPlay: true
        }
        );
    }
    render(){
        return(
            <View>
                <TouchableOpacity
                onPress = {

                    () =>{
                    this.setState({
                        pressButtonIndex: this.state.pressButtonIndex
                    })
                    this.playSound(
                        this.props.soundChunk
                    )
                    }
                }
                >
                    <Text>
                    {
                        this.props.wordChunk
                    }
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}