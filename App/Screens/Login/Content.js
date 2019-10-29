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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
    };
  }

  async componentDidMount() {
    const {getLocations, setLoading} = this.props;

    setLoading(true);
    await getLocations('34.0432108', '-118.267463');
    setLoading(false);
  }

  render() {
    const {loading} = this.props;
    const {userEmail, userPassword} = this.state;
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
          {/* <Text
            style={Fonts.style.bold(Colors.light, Fonts.size.medium, 'center')}>
            {'WELCOME TO THE'}
          </Text>

          <Image source={Images.welcome} style={styles.logo} />
          <Text
            style={Fonts.style.regular(
              Colors.light,
              Fonts.size.small,
              'center',
            )}>
            {'by Johnatan Botero'}
          </Text>

          <MyTextInput
            pHolder={'Email'}
            text={userEmail}
            onChangeText={text => this.setState({userEmail: text})}
            secureText={false}
            textContent={'emailAddress'}
            autoCapitalize={'none'}
          />
          <MyTextInput
            pHolder={'Password'}
            text={userPassword}
            onChangeText={text => this.setState({userPassword: text})}
            secureText={true}
            textContent={'password'}
            autoCapitalize={'none'}
          />
          <TouchableOpacity
            onPress={() => {
              console.log('questions', this.props.questions);
            }}
            style={styles.btnContainer}>
            <Text
              style={Fonts.style.bold(
                Colors.light,
                Fonts.size.medium,
                'center',
              )}>
              {'Login'}
            </Text>
          </TouchableOpacity> */}
          <View style={styles.headerContainer}>
            <Text
              style={Fonts.style.bold(
                Colors.light,
                Fonts.size.medium,
                'center',
              )}>
              {'WELCOME TO THE'}
            </Text>

            <Image source={Images.welcome} style={styles.logo} />
            <Text
              style={Fonts.style.regular(
                Colors.light,
                Fonts.size.small,
                'center',
              )}>
              {'by Johnatan Botero'}
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <Text
              style={Fonts.style.regular(
                Colors.light,
                Fonts.size.h6,
                'center',
              )}>
              {'Sign In'}
            </Text>
            <MyTextInput
              pHolder={'Email'}
              text={userEmail}
              onChangeText={text => this.setState({userEmail: text})}
              secureText={false}
              textContent={'emailAddress'}
              autoCapitalize={'none'}
            />
            <MyTextInput
              pHolder={'Password'}
              text={userPassword}
              onChangeText={text => this.setState({userPassword: text})}
              secureText={true}
              textContent={'password'}
              autoCapitalize={'none'}
            />
            <TouchableOpacity
              onPress={() => {
                this.props.getPlaces('whas');
              }}
              style={styles.btnContainer}>
              <Text
                style={Fonts.style.bold(
                  Colors.light,
                  Fonts.size.medium,
                  'center',
                )}>
                {'Login'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() => {
                console.log('questions', this.props.questions);
              }}
              style={styles.btnRegisterLogin}>
              <Text
                style={Fonts.style.bold(
                  Colors.light,
                  Fonts.size.medium,
                  'center',
                )}>
                {'Create an Account'}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        {loading && <View style={styles.loading} />}
      </LinearGradient>
    );
  }
}
