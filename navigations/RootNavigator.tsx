import React, {FC} from 'react'
import {useAuthState} from '../hooks/useAuthState'
import {ActivityIndicator, SafeAreaView} from 'react-native'
import tw from 'tailwind-rn'
import {NavigationContainer} from '@react-navigation/native'
import {TagStackNavigator} from './TagStackNavigator'
import {AuthStackNavigator} from './AuthStackNavigator'

export const RootNavigator: FC = () => {
    const {user, isLoading} = useAuthState()


    if (isLoading) {
        return (
            <SafeAreaView style={tw('flex-1 items-center justify-center')}>
                <ActivityIndicator size="large" color="gray"/>
            </SafeAreaView>
        )
    }
    return (
        <NavigationContainer>
            {user?.uid ? <TagStackNavigator/> : <AuthStackNavigator/>}
        </NavigationContainer>
    )
}