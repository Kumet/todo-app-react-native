import React, {FC} from 'react'
import tw from 'tailwind-rn'
import {Text, View} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import {userFirebaseAuth} from '../hooks/useFirebaseAuth'
import {Button} from '../components/Button'
import {InputField} from '../components/InputField'
import {IconButton} from '../components/IconButton'


export const AuthScreen: FC = () => {
    const {
        isLogin,
        email,
        password,
        authErr,
        setEmail,
        setPassword,
        login,
        register,
        toggleMode,
    } = userFirebaseAuth()

    return (
        <View style={[tw('flex-1 pt-16 items-center'), {backgroundColor: '#008b8b'}]}>
            <FontAwesome name="tasks" size={50} color="white"/>
            <Text style={tw('text-2xl text-white font-semibold mt-2 mb-5')}>
                {isLogin ? 'Login' : 'SignUp'}
            </Text>
            <InputField
                leftIcon="email"
                placeholder="Enter email"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus
                value={email}
                onChangeText={(text: string) => setEmail(text)}
            />
            <InputField
                leftIcon="lock"
                placeholder="Enter password"
                secureTextEntry
                textContentType="password"
                value={password}
                onChangeText={(text: string) => setPassword(text)}
            />
            {authErr !== '' && (
                <Text style={tw('text-yellow-300 my-3 font-semibold')}>{authErr}</Text>
            )}
            <Button title={isLogin ? 'Login' : 'Register'} onPress={isLogin ? login : register}/>
            <Text style={tw('text-white mb-3 text-base')}>
                {isLogin ? 'Create new account ?' : 'Login ?'}
            </Text>
            <IconButton name="retweet" color="#fff" size={24} onPress={toggleMode}/>
        </View>
    )
}
