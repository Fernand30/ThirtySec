import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  Platform
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Colors, Fonts, Images, Constants } from '../../Themes';
import * as Progress from 'react-native-progress';
import Modal from 'react-native-modal'

export default class Login extends React.Component{
  constructor() {
    super();
    this.state=({
      progressVal:0,
      isModalVisible: false,
    })
  }

  componentDidMount() {
     
  }

  playReward(){ 
    this._interval = setInterval( () => { 
      this.setState({
        progressVal: this.state.progressVal+0.05
      })
      if(this.state.progressVal>=1) this.goModal();
    }, 1000);
  }

  goModal(){
    clearInterval(this._interval);
    this.setState({isModalVisible:true})
  }

  goReward(){
    this.setState({isModalVisible:false})
    Actions.reward()
  }

  render() {
    
        return (
              <View style={styles.container}>
                  <Text style={styles.blackText}>
                    Ime aplikacije
                  </Text>
                  <Text style={styles.redText}>
                    Donirajte Vasih 30 Sekundi
                  </Text>
                  <TouchableOpacity onPress={this.goModal.bind(this)} style={styles.button}>
                    <Image source={Images.hearticon} style={styles.heart}/>
                  </TouchableOpacity>
                  <View style={styles.redCircle}/>
                  <Progress.Bar style={styles.progress} progress={0.3} width={Constants.WIDTH-60} color={Colors.haung} unfilledColor={Colors.progress} 
                     borderWidth={0} height= {Constants.MARGIN*2} animationType='timing'/>

                  <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modalView}>
                      <Text style={styles.reward}>Do you want Reward{'\n'}Page?</Text>
                      <Text style={styles.next} onPress={this.goReward.bind(this)}>next</Text>
                    </View>
                  </Modal>   
              </View>
           );
   }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
  },
  blackText:{
    marginTop: Constants.MARGIN*10,
    marginLeft: Constants.MARGIN*10,
    fontSize: Constants.FONT*25
  },
  redText:{
    marginTop: Constants.MARGIN*35,
    textAlign: 'center',
    fontSize: Constants.FONT*28,
    color: '#eb5043'
  },
  heart:{
    width: Constants.WIDTH/3,
    height: Constants.WIDTH/3,
  },
  button:{
    marginTop: Constants.MARGIN*10,
    alignSelf: 'center',
    width: Constants.WIDTH/3,
    height: Constants.WIDTH/3,
  },
  redCircle:{
    width: Constants.WIDTH/8,
    height: Constants.WIDTH/8,
    borderRadius: Constants.WIDTH/16,
    borderWidth: 3,
    borderColor: Colors.red,
    alignSelf: 'center',
    marginTop: Constants.MARGIN*30
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
module.exports = Login;
