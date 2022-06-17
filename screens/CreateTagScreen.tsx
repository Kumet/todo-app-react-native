import React, {FC} from 'react'
import tw from 'tailwind-rn'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../types/types'
import {useCreateTag} from '../hooks/useCreateTag'
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import {Title} from '../components/Title'
import {InputField} from '../components/InputField'
import {IconButton} from '../components/IconButton'


type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'CreateTag'>
}

export const CreateTagScreen: FC<Props> = ({navigation}) => {
    const {name, setName, createErr, createTag} = useCreateTag({navigation})
    return (
        <SafeAreaView style={tw('flex-1 bg-gray-100 items-center')}>
            <View style={tw('flex-row px-4 justify-between w-full')}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="close" size={25} color="gray"/>
                </TouchableOpacity>
                <View/>
            </View>
            <Title first="New" last="tag"/>
            <InputField
                autoFocus
                leftIcon="tag"
                placeholder="Tag name"
                value={name}
                onChangeText={(text: string) => setName(text)}/>
            <IconButton name="plus" color="gray" size={20} onPress={createTag}/>
            {createErr !== '' && (
                <Text style={tw('text-red-500 my-3 font-semibold')}>{createErr}</Text>
            )}
        </SafeAreaView>
    )
}