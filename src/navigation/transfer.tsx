import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import TransferScreen from '../screens/transfer';
import CompleteScreen from '../screens/transfer/complete';

export type TransferStackParamList = {
  TransferTop: undefined;
  Complete: { chainId: number; txHash: string };
};

type AccountScreens = keyof TransferStackParamList;

export type TransferNavigationProp<T extends AccountScreens> = NativeStackNavigationProp<
  TransferStackParamList,
  T
>;

export type TransferRouteProp<T extends AccountScreens> = RouteProp<TransferStackParamList, T>;

const TransferStack = createNativeStackNavigator<TransferStackParamList>();

const Navigation: React.VFC = () => {
  return (
    <TransferStack.Navigator initialRouteName="TransferTop">
      <TransferStack.Screen
        name="TransferTop"
        component={TransferScreen}
        options={{ headerShown: false }}
      />
      <TransferStack.Screen
        name="Complete"
        component={CompleteScreen}
        options={{ headerShown: false }}
      />
    </TransferStack.Navigator>
  );
};

export default Navigation;
