import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/button';
import InputField from '../../../components/input-field';

interface IProps {}

const ChatListScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.viewContainer}>
        <InputField
            title='Password'
            isPassword
            placeHolder='password'
        />
    </SafeAreaView>
  )
}

export default ChatListScreen    