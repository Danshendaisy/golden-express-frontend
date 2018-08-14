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
  RefreshControl,
  Image,
  ScrollView,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';
import styles from './Styles';
import {Header, Icon} from 'react-native-elements';
import groceryItems from '../public/Inventory/Fresh_Meat'
import { Ionicons } from '@expo/vector-icons';
import _ from 'underscore'
const MEAT = {cat: 'Meat', src: require('../assets/Meat.png')}
const PRODUCE = {cat: 'Produce', src: require('../assets/Produce.png')}
const SEAFOOD = {cat: 'Seafood', src: require('../assets/Seafood.png')}
const DAIRY = {cat: 'Dairy', src: require('../assets/Dairy.png')}
const FROZEN = {cat: 'Frozen', src: require('../assets/Frozen.png')}
const PRESERVED = {cat: 'Preserved', src: require('../assets/Preserved.png')}
const BEVERAGES = {cat: 'Beverage', src: require('../assets/Beverages.png')}
const SNACKS = {cat: 'Snacks', src: require('../assets/Snacks.png')}
const NOODLES = {cat: 'Noodles', src: require('../assets/Noodles.png')}
const SPICES = {cat: 'Spices', src: require('../assets/Spices.png')}


class CategoriesScreen extends React.Component {
  //Location  Favorites,foods,home, history, search?
  static navigationOptions =({navigation}) => {
    const {state} = navigation
    return {
    title: <Text> Categories </Text>,
    headerRight: <TouchableOpacity style={{marginRight:10}}>
        <Icon
        name='shopping-cart'
        color='blue'
        onPress={()=>{state.params.cart()}}/>
      </TouchableOpacity>
    }

  };

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      disabled:false
    }
    this.browseAisle = this.browseAisle.bind(this)
  }

  componentDidMount() {
    const {setParams} = this.props.navigation;
    setParams({cart: this.props.screenProps.cart})
    this.setState({items: this.ds.cloneWithRows(groceryItems)})
  }

  browseAisle (aisle) {
    console.log('clicked');
    fetch('https://golden-express.herokuapp.com/browse' + `?aisle=${aisle.toLowerCase()}`)
    .then((resp) => resp.json())
    .then(resp => {
      console.log('hitting',resp);
      this.props.navigation.navigate({key:'Result', routeName:'Result', params: {groceryItems: resp.items, aisle: aisle}})
    })
    .then(res => this.setState({disabled:false}))
  }

  createCategory (cat1,cat2) {
    let browseAisle = _.throttle(this.browseAisle, 1000, {trailing: false}).bind(this);
    return  (
      <View style={{flex:1, justifyContent:'flex-start', alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
        <TouchableOpacity activeOpacity={0.75} onPress={()=>{browseAisle(cat1.cat)}}>
          <Image source={cat1.src} style={{height: 170,width: 170, marginLeft: 12, marginRight: 5, marginTop: 10,flex: 1}}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.75} onPress={()=>{browseAisle(cat2.cat)}}>
          <Image source={cat2.src} style={{height: 170,width: 170, marginRight: 12, marginLeft:5, marginTop: 10,flex: 1}}/>
        </TouchableOpacity>
      </View>
    )
  }



  render() {
    return (

      <ScrollView style={{flex:1}}>
        <View style={{height:12}}/>
        {this.createCategory(MEAT,PRODUCE)}
        {this.createCategory(SEAFOOD,DAIRY)}
        {this.createCategory(FROZEN,PRESERVED)}
        {this.createCategory(BEVERAGES,SNACKS)}
        {this.createCategory(NOODLES,SPICES)}
      <View style={{height:12}}/>
</ScrollView>

)
}
}

export default CategoriesScreen;
