import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Colors, Images, Fonts, Metrics} from '../../Themes';

import MyTextInput from '../../Components/MyTextInput';

import styles from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: '',
      showFinder: false,
    };
  }

  async callLocations(lat, long) {
    const {getPlaces, setLoading} = this.props;
    setLoading(true);
    await getPlaces(lat, long);
    setLoading(false);
  }

  async callGetCities(str) {
    const {setLoading, getCities, cities} = this.props;

    setLoading(true);
    await getCities(str);
    console.log('cities', cities);

    setLoading(false);
  }

  render() {
    const {loading, cities} = this.props;
    const {userLocation, showFinder} = this.state;
    return (
      <LinearGradient
        style={styles.container}
        colors={Colors.backgroundGradient}
        start={{x: 0, y: 0.0}}
        end={{x: 0, y: 1.0}}>
        <KeyboardAvoidingView
          // style={{position: 'absolute', flex: 1}}
          behavior="padding"
          enabled>
          <View style={{position: 'absolute', flex: 1}}></View>
          <View style={styles.headerContainer}>
            <Text style={Fonts.style.bold(Colors.light, Fonts.size.h4, 'left')}>
              {'Discover Restaurants\nin your City'}
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
              <TouchableOpacity
                style={styles.iconLocation}
                onPress={() => {
                  this.callGetCities(userLocation);

                  this.setState({showFinder: true});
                  Keyboard.dismiss();
                }}>
                <Image
                  source={
                    userLocation === ''
                      ? Images.navigation
                      : Images.magnifyingGlass
                  }
                  style={styles.navigationIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.containerCities}>
              <View style={styles.containerCity}>
                {showFinder &&
                  cities.length > 0 &&
                  cities.map(item => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          this.callLocations(item.latitude, item.longitude);
                          this.setState({
                            userLocation: item.city_name,
                            showFinder: false,
                          });
                        }}
                        key={item.entity_id}
                        style={styles.itemCity}>
                        <Text
                          style={Fonts.style.bold(
                            Colors.dark,
                            Fonts.size.small,
                            'left',
                          )}>
                          {item.city_name} - {item.country_name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
              </View>
            </View>
            <Text
              style={Fonts.style.regular(
                Colors.light,
                Fonts.size.small,
                'left',
              )}>
              {'Enter the name of a city or active your current location'}
            </Text>
          </View>
          <View style={styles.contentContainer}></View>
          <View style={styles.footerContainer}></View>
        </KeyboardAvoidingView>

        {loading && <View style={styles.loading} />}
      </LinearGradient>
    );
  }
}
