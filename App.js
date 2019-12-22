import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[style.containerStyle]}>
        <View ref={ref => (this._ref = ref)} style={[style.removableViewStyle]}>
          <Text style={[style.instructionStyle]}>
            Click me to remove me.... Please
          </Text>
          <TouchableOpacity>
            <Text style={[style.gotItButtonStyle]}>Ok. Got it</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  removableViewStyle: {
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
  },

  instructionStyle: {
    fontSize: 16,
    paddingTop: 16,
  },

  gotItButtonStyle: {
    marginTop: 10,
    color: 'red',
    width: 100,
    paddingBottom: 10,
  },
});
