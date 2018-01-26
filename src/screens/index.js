import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  Platform,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Colors, Fonts, Images, Constants } from '../Themes';

import Home from './tabScreens/home'

export default class Main extends React.Component{
  constructor() {
    super();
    this.state=({
      selectedTab1:true,
      selectedTab2:false,
      selectedTab3:false,
    })
  }

  tabbar(index){
    if(index == 1){
      this.setState({ selectedTab1: true,selectedTab2: false,selectedTab3: false })
    }else if(index == 2){
      this.setState({ selectedTab1: false,selectedTab2: true,selectedTab3: false })
    }else if(index == 3){
      this.setState({ selectedTab1: false,selectedTab2: false,selectedTab3: true })
    }
  }
  
  render() {
      return (
            <View style={styles.container}>
                <Image source={Images.commonbackground} style={styles.backgroundImage}/>
                <View style={styles.absoluteView}>
                    <View style={styles.statusbar}/>
                    <View style={styles.container}>
                      <Home />
                    </View>
                    <View style={styles.tabbar}>
                      <TouchableOpacity onPress={this.tabbar.bind(this,1)} activeOpacity={0.8} style={styles.tabButton}>
                        {(this.state.selectedTab1)?<Image source={Images.selecttab1} style={styles.selecttabImage}/>:<Image source={Images.tab1} style={styles.tabImage}/>}
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this.tabbar.bind(this,2)} activeOpacity={0.8} style={styles.tabButton}>
                        {(this.state.selectedTab2)?<Image source={Images.selecttab2} style={styles.selecttabImage}/>:<Image source={Images.tab2} style={styles.tabImage}/>}
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this.tabbar.bind(this,3)} activeOpacity={0.8} style={styles.tabButton}>
                        {(this.state.selectedTab3)?<Image source={Images.selecttab2} style={styles.selecttabImage}/>:<Image source={Images.tab2} style={styles.tabImage}/>}
                      </TouchableOpacity>
                    </View>
                </View>    
            </View>
         );
   }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
  },
  statusbar:{
    backgroundColor:Colors.status,
    height: Constants.Statusbar_Height
  },
  tabbar:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end'
  },
  backgroundImage:{
    width: Constants.WIDTH,
    height: Constants.HEIGHT
  },
  tabButton:{
    flex:1
  },
  tabImage:{
    width: Constants.TABWIDTH,
    height: Constants.TABHEIGHT,
  },
  selecttabImage:{
    width: Constants.TABWIDTH,
    height: Constants.SELECTTABHEIGHT,
  },
  absoluteView:{
    position: 'absolute',
    top:0,
    left:0,
    width: Constants.WIDTH,
    height: Constants.HEIGHT
  }
})
module.exports = Main;
