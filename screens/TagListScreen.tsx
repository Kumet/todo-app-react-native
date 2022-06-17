import React, {FC} from 'react'
import tw from 'tailwind-rn'
import {useDispatch, useSelector} from 'react-redux'
import {logout, selectUser} from '../slices/userSlice'
import {auth} from '../firebaseConfig'
import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import {IconButton} from '../components/IconButton'
import {Title} from '../components/Title'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../types/types'

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'TagList'>
}


export const TagListScreen: FC<Props> = ({navigation}) => {
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
            <Title first="Tag" last="List"/>
            <TouchableOpacity style={tw('mt-2')} onPress={() => navigation.navigate('CreateTag')}>
                <MaterialCommunityIcons name="tag-plus" size={40} color="#5f9ea0"/>
            </TouchableOpacity>
            <Text>{user.email}</Text>
            <IconButton name="logout" color="blue" size={20} onPress={signOut}/>
        </SafeAreaView>
    )
}