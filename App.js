import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const App = () => {
  const [VisibleModal, setModalVisible] = useState(false);
  return (

    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        visible={VisibleModal}

        onRequestClose={() => {
          Alert.alert('U Succesfully hide it bro.');
          setModalVisible(!VisibleModal);
        }}>

        <View style={styles.centeredView}>
          
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Whoaa u idiot. U have been hacked now!!!!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!VisibleModal)}>
              <Text style={styles.textStyle}>Hide it!!!!</Text>
            </Pressable>
          </View>

        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Press This button</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  
  },
  modalView: {
    margin: 20,
    backgroundColor: 'purple',
    padding: 35,
    alignItems: 'center',
  },

  button: {
    padding: 10,
    elevation: 2,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});

export default App;