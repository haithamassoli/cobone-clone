/* eslint-disable */

// import NetInfo from '@react-native-community/netinfo';
import {Dimensions} from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

// export const isConnected = async () => {
//   const connectionStatus = await NetInfo.fetch();
//   return connectionStatus.isConnected;
// };
