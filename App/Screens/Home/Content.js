import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Colors, Images, Fonts} from '../../Themes';

import MyTextInput from '../../Components/MyTextInput';

import styles from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: '',
    };
  }

  async componentDidMount() {
    const {getLocations, setLoading} = this.props;

    setLoading(true);
    await getLocations('34.0432108', '-118.267463');
    setLoading(false);
  }

  render() {
    const {loading, navigation} = this.props;
    const {userLocation} = this.state;
    return (
      <LinearGradient
        style={styles.container}
        colors={Colors.backgroundGradient}
        start={{x: 0, y: 0.0}}
        end={{x: 0, y: 1.0}}>
        <KeyboardAvoidingView
          style={styles.containerItems}
          behavior="padding"
          enabled>
          <View style={styles.headerContainer}>
            <Text style={Fonts.style.bold(Colors.light, Fonts.size.h4, 'left')}>
              {'Discover Restauratnes\nin your City'}
            </Text>
            <View style={styles.locationContainer}>
              <MyTextInput
                pHolder={'New York, New Yersey, Los Angeles, etc...'}
                text={userLocation}
                onChangeText={text => this.setState({userLocation: text})}
                secureText={false}
                textContent={'name'}
                autoCapitalize={'words'}
              />
              <View style={styles.iconLocation}>
                <Image
                  source={
                    userLocation == ''
                      ? Images.navigation
                      : Images.magnifyingGlass
                  }
                  style={styles.navigationIcon}></Image>
              </View>
            </View>
          </View>
          <View style={styles.contentContainer}></View>
          <View style={styles.footerContainer}></View>
        </KeyboardAvoidingView>

        {loading && <View style={styles.loading} />}
      </LinearGradient>
    );
  }
}
