import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Header from '../../../components/header';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../../../components/input-field';
import { ThemeStore } from '../../../mobx/theme';
import Button from '../../../components/button';

interface IProps {}

const ValidateEmailScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();

    const {
      register,
      handleSubmit,
      control,
      getValues,
      formState: { errors },
    } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async(data: any)=> {
      setIsLoading(true);
      // await signIn(navigation, getValues().email, getValues().password)
      //     .then((user) => {
      //         dispatch(loginSuccess(user));
      //     });
      setIsLoading(false);
      console.log(getValues());
    };

  return (
    <SafeAreaView style={styles.viewContainer}>
      <Header
        renderLeftButton={true}
        renderRightButton={false}
        leftButtonType='BACK'
        title=''
        onPressLeftButton={() => {navigation.goBack()}}
      />

      <Text style={styles.txtTitle}>Enter the 6-digit code</Text>
      <Text style={styles.txtSub}>This extra step shows it’s really you trying to sign in</Text>
      
      <View style={styles.viewFormContainer}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
          <InputField
              title=''
              inputMode='numeric'
              value={value}
              onChangeText={value => onChange(value)}
              onBlur={onBlur}
          />
          )}
          name='code'
          rules={{
              required: true,
          }}
        />
        {errors.code && <Text>Validate code is required.</Text>}

      </View>

      <View style={styles.viewOption}>
        <Text
          style={styles.txtOption}
          onPress={() => {}}
        >Resend validate code?</Text>
      </View>

      <View style={styles.viewButtonGroup}>
        <Button
          title='SUBMIT'
          onPress={() => {}}
        />

        <Button
          title='I need help'
          type='solid'
          onPress={() => {}}
        />
      </View>

    </SafeAreaView>
  )
}

export default ValidateEmailScreen    