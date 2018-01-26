import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router,Scene,} from 'react-native-router-flux'
import {Colors, Fonts, Images, Metrics, Constants } from './Themes';

import Reward from './screens/reward/index';
import Home from './screens/';
global.flag = 0;


const Routes = () => (

  <Router hideNavBar={true}>
    <Scene key = "root">
      <Scene key = "home" component = {Home} hideNavBar={true} {...this.props} initial/>
      <Scene key = "reward" component = {Reward} hideNavBar={true} panHandlers={null} />
    </Scene>
 </Router>


);

export default Routes