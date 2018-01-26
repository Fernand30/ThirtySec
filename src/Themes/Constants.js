import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { StatusBar, Platform } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const width = responsiveWidth(100)
const height = responsiveHeight(100)
const tabwidth = responsiveWidth(100)/3
const Constants = {
    Navbar_Height : 45,
    Statusbar_Height : STATUSBAR_HEIGHT,
    MARGIN: responsiveWidth(1),
    FONT: responsiveFontSize(0.1),
    TABWIDTH: tabwidth,
    TABHEIGHT: tabwidth/125*60,
    WIDTH: width,
    HEIGHT: height,
    SELECTTABHEIGHT: tabwidth/125*68,
}

export default Constants;
