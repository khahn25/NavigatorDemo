import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen2 = ({ navigation }) => {
    const userData = navigation.getParam('userData', {}); // Default to an empty object if not provided

  return (
    <View>
      <Text>This is Screen 2</Text>
      <Button
        title={ userData.name }
        onPress={() => navigation.navigate('MainScreen3')}
      />
    </View>
  );
};

export default Screen2;
