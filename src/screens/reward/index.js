import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  Platform,
  Switch
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Colors, Fonts, Images, Constants } from '../../Themes';
import * as Progress from 'react-native-progress';
import Modal from 'react-native-modal'

export default class Reward extends React.Component{
  constructor() {
    super();
    this.state=({
      progressVal:0,
      isModalVisible: false,
      switchValue: false,
    })
  }

  componentDidMount() {
     
  }

  playReward(){ 
    this._interval = setInterval( () => { 
      this.setState({
        progressVal: this.state.progressVal+0.05
      })
      
    }, 1000);
  }

  render() {
    
        return (
              <View style={styles.container}>
                <Image source={Images.beautifulbackground} style={styles.backgroundImage}/>
                <View style={styles.absoluteView}>
                  <View style={styles.statusbar}/>
                  <Text style={styles.redbigText}>
                    Hvala vam!
                  </Text>
                  <Text style={styles.redText}>
                    vasa donacijia je prihvacena.
                  </Text>
                 <View style={styles.rowView}>
                    <View style={styles.eachView}>
                      <Text style={styles.smallredText}>Pozovi{'\n'}prijatelja</Text>
                      <TouchableOpacity>
                       <Image source={Images.treeicon} style={styles.iconImage}/>
                      </TouchableOpacity> 
                    </View>
                    <View style={styles.lineView}/>
                    <View style={styles.eachView}>
                      <Text style={styles.smallredText}>Doniraj{'\n'}ponovo</Text>
                      <TouchableOpacity onPress={this.playReward.bind(this)}>
                        <Image source={Images.hearticon} style={styles.iconImage}/>
                      </TouchableOpacity>  
                    </View>
                    <View style={styles.lineView}/>
                    <View style={styles.eachView}>
                      <Text style={styles.smallredText}>Podseti{'\n'}me sutura</Text>
                       <Switch
                          style={{marginTop:Constants.MARGIN*10}}
                          value={this.state.switchValue}
                          onValueChange={(val) => this.setState({switchValue: val})}
                          disabled={false}
                          thumbTintColor={Colors.haung}
                          tintColor={Colors.haung}
                          removeClippedSubviews= {true}
                          accessibilityComponentType='button'
                        />
                    </View>
                 </View>
                  <View style={styles.redCircle}/>
                  <Progress.Bar style={styles.progress} progress={this.state.progressVal} width={Constants.WIDTH- Constants.MARGIN*20} color={Colors.haung} unfilledColor={Colors.progress} 
                     borderWidth={0} height= {Constants.MARGIN*2} animationType='timing'/>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>U redu</Text>
                  </TouchableOpacity>
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
    height: Constants.Statusbar_Height,
  },
  backgroundImage:{
    width: Constants.WIDTH,
    height: Constants.HEIGHT
  },
  absoluteView:{
    position: 'absolute',
    top:0,
    left:0,
    width: Constants.WIDTH,
    height: Constants.HEIGHT
  },
  redbigText:{
    marginTop: Constants.MARGIN*20,
    textAlign: 'center',
    fontSize: Constants.FONT*40,
    color: Colors.haung
  },
  redText:{
    marginTop: Constants.MARGIN*1,
    textAlign: 'center',
    fontSize: Constants.FONT*29,
    color: Colors.haung
  },
  smallredText:{
    marginTop: Constants.MARGIN*1,
    textAlign: 'center',
    fontSize: Constants.FONT*20,
    color: Colors.haung
  },
  iconImage:{
    marginTop: Constants.MARGIN*5,
    width: Constants.WIDTH/6,
    height: Constants.WIDTH/6,
  },
  button:{
    marginTop: Constants.MARGIN*10,
    alignSelf: 'center',
    height: Constants.WIDTH/8,
    borderRadius: Constants.WIDTH/16,
    width: Constants.WIDTH - Constants.MARGIN*20,
    backgroundColor: Colors.haung,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    color:'white',
    fontSize: Constants.FONT*25,
  },
  eachView:{
    flex:1,
    alignItems:'center',
    paddingVertical: Constants.MARGIN,
  },
  lineView:{
    width: 1,
    backgroundColor: Colors.haung,
  },
  rowView:{
    marginTop:Constants.MARGIN*25,
    flexDirection:'row',
    paddingHorizontal: Constants.MARGIN*10,
    justifyContent:'space-between',
  },
  redCircle:{
    width: Constants.WIDTH/8,
    height: Constants.WIDTH/8,
    borderRadius: Constants.WIDTH/16,
    borderWidth: 3,
    borderColor: Colors.red,
    alignSelf: 'center',
    marginTop: Constants.MARGIN*20
  },
  progress:{
    marginTop:Constants.MARGIN*5,
    alignSelf:'center'
  },
  modalView:{
    width: Constants.WIDTH/2,
    height: Constants.WIDTH/5,
    borderRadius: 5,
    paddingTop: 5,
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor:'white'
  },
  next:{
    marginTop: 10,
  },
  reward: {
    fontSize: Constants.FONT*20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
})
module.exports = Reward;
