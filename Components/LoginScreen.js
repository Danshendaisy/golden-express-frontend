import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button,
  AsyncStorage,
  ImageBackground
} from 'react-native';
import styles from './Styles';
import {Input,Icon} from 'react-native-elements';
const BG_IMG = require('../assets/Fruity.jpg')


class LoginScreen extends React.Component {
  static navigationOptions ={
    title: 'Login'
  };

  constructor() {
    super();
    this.state = {
      message:''
    }
  }

  async componentDidMount() {
    await AsyncStorage.removeItem('token', (err, token)=> {console.log('removed token', token)}); //logout

    // let token = await AsyncStorage.getItem('token', (err, token)=> {console.log('got token', token)});
    // if (token) {
    //   this.props.navigation.navigate('Drawer')//for debugging
    // }

  }

  press() {
    fetch('https://golden-express.herokuapp.com/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
      * make sure to check for responseJson.success! */
      console.log(responseJson)
      if (responseJson.success) {
        AsyncStorage.setItem('token',responseJson.token)
        this.props.navigation.navigate('Drawer')//for debugging
      }
      else {
        this.setState({message: `Error: ${responseJson.message}`})
      }
    })
    .catch((err) => {
      /* do something if there was an error with fetching */
      console.log('error', err)
      this.setState({message: err})
    });

  }

  register() {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
            source={BG_IMG}
            style={[styles.bgImage, {opacity:0.75}]}
            >
        <Text>{this.state.message}</Text>

        <Text style={[styles.textBig,{color:'rgba(225, 225, 225, .89)'}]}>WELCOME</Text>
        <View style={styles.inputContainer}>
         <TextInput

          style={styles.Logininput}
          placeholder="Username"
          placeholderTextColor='rgba(225, 225, 225, .89)'
          onChangeText={(text) => this.setState({username: text})}
        />
       </View>
       <View style={styles.inputContainer}>
        <TextInput
          style={styles.Logininput}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor='rgba(225, 225, 225, .89)'
          borderColor='white'
          borderStyle='solid'
          onChangeText={(text) => this.setState({password: text})}
        />
        </View>
        <TouchableOpacity onPress={ () => {this.press()} } style={[styles.button, styles.buttonGreen]}>
          <Text style={styles.buttonLabel}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.register()} }>
          <Text style={styles.buttonLabel} borderColor='white'
          borderStyle='solid'>Register</Text>
        </TouchableOpacity>
      </ImageBackground>
      </View>
    )
  }
}

export default LoginScreen;
