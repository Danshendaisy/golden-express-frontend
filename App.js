import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';


// class MyInfo extends React.Component{
//   static navigationOptions ={ title: 'MyInfo'}
//   constructor(props)
//   {
//     super(props)
//     this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {Calories:"", HistoricCalories:""}
//
//   }
//
//
// }

class CustomizeScreen extends React.Component{
  static navigationOptions = {
    title: 'MyInfo'
  };
  constructor(props)
  {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {name:"",ingredient:[], recipe:""}
  }
//run the coponoennt and have it fetch the data
//each ingredient has i\ts own page that displays what it looks like
//how to make an image, where do i source
//user gives quantities
//algo updates quantiies with respect to recipe and user's desires
  componentDidMount()
  {

    fetch(url,{method:'POST',body:{}}).then(resp=>
      resp.json())
      .then(resp=>
      {
        this.setState({})
      }).catch(err=>{console.log(err)})

  }
//function this.split(''), then upload every ingredient into ingredients
//separate every ingreident with a comma
//recipe

  render()
  {
    return (
//insert search inhjujk
//takes the daily meals
//insert a list view that takes meallist
      <View>
        <TextInput></TextInput>


    </View>
    //....more imasges

    )
  }
}
class MyInfoScreen extends React.Component{
  static navigationOptions = {
    title: 'MyInfo'
  };
  constructor(props)
  {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {meals:"",pastMeals:"", name:"", calories:"", age:""}
  }
//run the coponoennt and have it fetch the data
//each ingredient has i\ts own page that displays what it looks like
//how to make an image, where do i source
//user gives quantities
//algo updates quantiies with respect to recipe and user's desires
  componentDidMount()
  {

    fetch(url).then(resp=>
      resp.json())
      .then(resp=>
      {
        this.setState({})
      }).catch(err=>{console.log(err)})

  }

  render()
  {
    return (
//insert search inhjujk
//takes the daily meals
//insert a list view that takes meallist
      <View>
        <ListView></ListView>


    </View>
    //....more imasges

    )
  }
}
class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'Home'
  };
  constructor(props)
  {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {MealList:"",MyMeals:""}
  }
//run the coponoennt and have it fetch the data
//each ingredient has i\ts own page that displays what it looks like
//how to make an image, where do i source
//user gives quantities
//algo updates quantiies with respect to recipe and user's desires
  componentDidMount()
  {
    //fetch meallist
    //display top Meals
    //fetch recommended meals
    //create alogirthm that displays certain meals


  }

  render()
  {
    return (
//insert search inhjujk
//takes the daily meals
//insert a list view that takes meallist
      <View>
        <Input></Input>


    </View>
    //....more imasges

    )
  }
}

//scroll horizontally disply horizontally

class MealScreen extends React.Component{
  static navigationOptions = {
    title: 'Meal'
  };
  constructor(props)
  {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {nutrition:"",name:""}
  }
//run the coponoennt and have it fetch the data
//each ingredient has i\ts own page that displays what it looks like
//how to make an image, where do i source
//user gives quantities
//algo updates quantiies with respect to recipe and user's desires
  componentDidMount()
  {


  }

  render()
  {
    return (

// insert in views  <Recipe name = this.props.name></>
      <View>

    </View>
    //....more imasges

    )
  }
}

//where can we load the database
//should we load data during rendeirng
//how do you load data beforehand so you don't ahve to load data
//how do you navigage to a certain page or class if you have multiple of the same classes
// connect a specific image to a class of meal/recipe/ingredient

class  RecipeScreen extends React.Component{
  static navigationOptions = {
    title: 'Recipe'
  };
  constructor(props)
  {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {name: this.props.name, ingredients: this.ds.cloneWithRows([]), instructions: "",}
  }

  componentDidMount()
  {
    //API =>this.props.name=>searches for ingredients and instructors
    this.setState({ingredients: this.ds.cloneWithRows()})
  }

  render()
  {
    return (<View><ListView
      dataSource={this.state.meals}
      renderRow={(meal) =><View><Text style={{fontSize:45, color:'black'}}>From: {meal.from.username}</Text><View>
      <Text style={{fontSize:20, color:'black'}}>To: {meal.to.username}</Text></View>
      <View>
      <Text style={{fontSize:20, color:'black'}}>Message: {meal.body}</Text>
    </View>
    <View>
      <Text style={{fontSize:20, color:'black'}}>When: {meal.timestamp}</Text></View></View>}
    />
    <ListView
      dataSource={this.state.meals}
      renderRow={(meal) =><View><Text style={{fontSize:45, color:'black'}}>From: {meal.from.username}</Text><View>
      <Text style={{fontSize:20, color:'black'}}>To: {meal.to.username}</Text></View></View>}
    />
</View>)
  }


}
class MealListScreen extends React.Component{
  //Location  Favorites,foods,home, history, search?
  static navigationOptions ={
    title:'MealList',
  };
  constructor(props)
  {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {meals: this.ds.cloneWithRows([])}
  }

  componentDidMount()
  {
    fetch(url,{method:'GET'})
    .then(resp=>resp.json())
    .then(resp=>
      {if (resp.success)
      {
        this.setState({meals: this.ds.cloneWithRows(resp.meals)})
        //meals is the array that is returned, might have to be digested
      }}
    )
    .catch(err=>{console.log(err)})

    //a string is passed into meal from a list in the database
  }
  //display components for every meal with the object passed in as the prop <Meal>
  render()
  {
    <View style ={{flex:1}}>
      <ListView
        dataSource={this.state.meals}
        renderRow={(meal) =><View><Text style={{fontSize:45, color:'black'}}>From: {meal.from.username}</Text><View>
        <Text style={{fontSize:20, color:'black'}}>To: {meal.to.username}</Text></View>
        <View>
        <Text style={{fontSize:20, color:'black'}}>Message: {meal.body}</Text>
      </View>
      <View>
        <Text style={{fontSize:20, color:'black'}}>When: {meal.timestamp}</Text></View></View>}
      />

    </View>
  }
}

class  MessageScreen extends React.Component{
  static navigationOptions ={
    title:'Messages',
  };
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   this.state = {dataSource: this.ds.cloneWithRows([]),
}
  }

  componentDidMount()
  {
    fetch('https://hohoho-backend.herokuapp.com/messages',{
      method:'GET'})
      .then(resp=>resp.json())
      .then(respJson=>{
        if (respJson.success)
        {
          console.log(respJson)
          this.setState({dataSource:this.ds.cloneWithRows(respJson.messages)})
        }
        //
      })
      .catch(err=>{
        console.log('Error' + err)
      })
    }
  render()
  {
    return (<View style={{backgroundColor:'gold',flex:1, justifyContent:'center',alignItems:'center'}}><ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) =><View><Text style={{fontSize:45, color:'black'}}>From: {rowData.from.username}</Text><View>
      <Text style={{fontSize:20, color:'black'}}>To: {rowData.to.username}</Text></View>
      <View>
      <Text style={{fontSize:20, color:'black'}}>Message: {rowData.body}</Text>
    </View>
    <View>
      <Text style={{fontSize:20, color:'black'}}>When: {rowData.timestamp}</Text></View></View>}
    /></View>)
  }
}
//Screens
class UserScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Users',
    headerRight: <Button title='Messages' onPress={ () => {navigation.state.params.onRightPress()} } />
  });
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows([]),
    };
    this.onRightPress = this.onRightPress.bind(this);
  }

  onRightPress()
  {
    this.props.navigation.navigate('Messages');
  }
  componentDidMount()
  {
    this.props.navigation.setParams({
      onRightPress: this.onRightPress
    })

    fetch('https://hohoho-backend.herokuapp.com/users', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
      * make sure to check for responseJson.success! */
      console.log(responseJson)
      if (responseJson.success)
      {
        this.setState({dataSource:this.ds.cloneWithRows(responseJson.users)})
      }

    })
    .catch((err) => {
      /* do something if there was an error with fetching */
      console.log(err)
      this.setState({message:err})
    });
  }
  touchUser(user)
  {
    fetch('https://hohoho-backend.herokuapp.com/messages', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        to: user._id,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
      * make sure to check for responseJson.success! */
      console.log(responseJson)
      if (responseJson.success)
      {
        Alert.alert(
          'Success','LOL'
          ,
          [{text: `Your HoHoHo to ${user.username} has been sent!`}] // Button
        )
      }

      else {
        Alert.alert(
          'Fail','LOL'
          ,
          [{text: `Your HoHoHo to ${user.username} has not been sent!`}] // Button
        )

      }

    })
    .catch((err) => {
      /* do something if there was an error with fetching */
      console.log(err)
      this.setState({message:err})
    });

  }
  render()
  {
    return (<View style={{backgroundColor:'gold',flex:1, justifyContent:'center',alignItems:'center'}}><ListView
  dataSource={this.state.dataSource}
  renderRow={(rowData) =><TouchableOpacity onPress={this.touchUser.bind(this,rowData)}> <Text style={{fontSize:45, color:'black'}}>{rowData.username}</Text></TouchableOpacity>}
/></View>)
  }
}
class LoginScreen extends React.Component {
  static navigationOptions ={
    title: 'Login'
  };
  constructor()
  {
    super();
    this.state ={
      message:''
    }
  }
  press() {
    fetch('https://hohoho-backend.herokuapp.com/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
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
      if (responseJson.success)
      {
        this.props.navigation.navigate('Users')
      }

    })
    .catch((err) => {
      /* do something if there was an error with fetching */
      console.log(err)
      this.setState({message:err})
    });

  }
  register() {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.message}</Text>

        <Text style={styles.textBig}>Login to HoHoHo!</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter your username"
          onChangeText={(text) => this.setState({username: text})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Enter your password"
          onChangeText={(text) => this.setState({password: text})}
        />
        <TouchableOpacity onPress={ () => {this.press()} } style={[styles.button, styles.buttonGreen]}>
          <Text style={styles.buttonLabel}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.register()} }>
          <Text style={styles.buttonLabel}>Tap to Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class RegisterScreen extends React.Component {
  constructor()
  {
    super()
    this.state= {}

  }
  static navigationOptions = {
    title: 'Register'
  };

  register()
  {
    fetch('https://hohoho-backend.herokuapp.com/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
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
       this.props.navigation.navigate('Login')

    })
    .catch((err) => {
      /* do something if there was an error with fetching */
      console.log(err)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textBig}>Register</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter your username"
          onChangeText={(text) => this.setState({username: text})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Enter your password"
          onChangeText={(text) => this.setState({password: text})}
        />
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.register()} }>
          <Text style={styles.buttonLabel}>Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


//Navigator
export default StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
  Users: {
    screen: UserScreen,
  },
  Messages:{
    screen:MessageScreen,
  },
  MealList:{
    screen: MealListScreen,
  },
  Recipe:{
    screen: RecipeScreen,
  },
  Meal:{
    screen: MealScreen,
  },
  Home:{
    screen:HomeScreen,
  },
  MyInfo:{
    screen:MyInfoScreen,
  }
}, {initialRouteName: 'Login'});


//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerFull: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textBig: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5
  },
  buttonRed: {
    backgroundColor: '#FF585B',
  },
  buttonBlue: {
    backgroundColor: '#0074D9',
  },
  buttonGreen: {
    backgroundColor: '#2ECC40'
  },
  buttonLabel: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white'
  }
});

// fetch('https://hohoho-backend.herokuapp.com/register', {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     username: this.state.username,
//     password: this.state.password,
//   })
// })
// .then((response) => response.json())
// .then((responseJson) => {
//   /* do something with responseJson and go back to the Login view but
//    * make sure to check for responseJson.success! */
//    console.log(responseJson)
//    this.navigation.navigate('Login')
// })
// .catch((err) => {
//   /* do something if there was an error with fetching */
//   console.log(err)
// });
