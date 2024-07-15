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

const LoginScreen: React.FC<IProps>  = () => {

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
      navigation.navigate('Home');
      setIsLoading(false);
      // console.log(getValues());
    };

  return (
    <SafeAreaView style={styles.viewContainer}>
      <Header
        renderLeftButton={true}
        renderRightButton={false}
        leftButtonType='CANCEL'
        title=''
        onPressLeftButton={() => {}}
      />

      <Text style={styles.txtTitle}>Sign in to 
        <Text style={[styles.txtTitle, {color: ThemeStore.theme.PrimaryColor}]}> CAAPP</Text>
      </Text>
      
      <View style={styles.viewFormContainer}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
          <InputField
              title='Email'
              inputMode='email'
              value={value}
              onChangeText={value => onChange(value)}
              onBlur={onBlur}
          />
          )}
          name='email'
          rules={{
              required: true,
          }}
        />
        {errors.email && <Text>Email is required.</Text>}

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InputField
                title='Password'
                inputMode='text'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                isPassword
            />
            )}
            name='password'
            rules={{
                required: true,
            }}
        />
        {errors.password && <Text>Password is required.</Text>}
      </View>

      <View style={styles.viewOption}>
        <Text
          style={styles.txtOption}
          onPress={() => {}}
        >Forgot password?</Text>

        <Text
          style={styles.txtOption}
          onPress={() => {
            navigation.navigate('ValidateEmail')
          }}
        >Privacy policy</Text>
      </View>

      <View style={styles.viewButtonGroup}>
        <Button
          title='SIGN IN'
          onPress={handleSubmit(onSubmit)}
        />
      </View>

    </SafeAreaView>
  )
}

export default LoginScreen    