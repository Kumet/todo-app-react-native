import React from 'react'
import tw from 'tailwind-rn'
import {useDispatch, useSelector} from 'react-redux'
import {logout, selectUser} from '../slices/userSlice'
import {auth} from '../firebaseConfig'
import {Alert, SafeAreaView, Text, View} from 'react-native'
import {IconButton} from '../components/IconButton'

export const TagListScreen = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const signOut = async () => {
        try {
            await auth.signOut()
            dispatch(logout())
        } catch {
            Alert.alert('Logout error')
        }
    }
    return (
        <SafeAreaView style={tw('flex-1 mt-5 items-center')}>
            <Text>{user.email}</Text>
            <IconButton name="logout" color="blue" size={20} onPress={signOut}/>
        </SafeAreaView>
    )
}