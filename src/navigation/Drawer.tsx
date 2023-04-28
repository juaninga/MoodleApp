import React from 'react';
import { View} from "react-native";

interface DrawerProps {}

const Drawer = (props) => {
  console.log({ props});
  return <View style={{flex: 1, backgroundColor: 'green'}}>
  </View>
};

export default Drawer;
