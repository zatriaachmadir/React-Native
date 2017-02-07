/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: {
        nama: '',
        asal: '',
      },
    };
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onNamaLengkapChange = this.onNamaLengkapChange.bind(this);
    this.onAsalChange = this.onAsalChange.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
  }
  onNamaLengkapChange(text) {
    this.state.data.nama = text;
  }
  onAsalChange(text) {
    this.state.data.asal = text;
  }
  onSubmitClick() {
    this.setState({show: true});
  }
  onCloseClick() {
    this.setState({show: false});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.color}>Belajar React</Text>
        </View>
        <View style={styles.isi}>
          <TextInput onChangeText={this.onNamaLengkapChange} placeholder="Nama Lengkap" />
          <TextInput onChangeText={this.onAsalChange} placeholder="Asal Sekolah" />
        </View>
        <View style={styles.tombol}>
          <Button title="Submit" onPress={this.onSubmitClick} color="blue" />
        </View>

        {this.state.show &&
          <View style={styles.footer}>
            <Text style={styles.content}>Nama: {this.state.data.nama}</Text>
            <Text style={styles.content}>Asal: {this.state.data.asal}</Text>
          <Button onPress={this.onCloseClick} title="Close"/>
          </View>
        }

    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    padding: 12,
    backgroundColor: 'blue',
  },
  color: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  isi: {
    padding: 8,
  },
  tombol: {
    padding: 20,
  },
  footer: {
    padding: 10,
    color: 'yellow',
  },
  content: {
    margin: 10,
    fontSize: 20,
  }
});

AppRegistry.registerComponent('NewProject', () => NewProject);
