import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddEntry from "./components/AddEntry";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'

export default function App() {
  return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
            <History />
        </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
