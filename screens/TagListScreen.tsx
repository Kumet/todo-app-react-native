import React, {FC} from 'react'
import tw from 'tailwind-rn'
import {ActivityIndicator, FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import {Title} from '../components/Title'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList, Tag} from '../types/types'
import {useGetTags} from '../hooks/useGetTags'
import {TagCard} from '../components/TagCard'


type Item = {
    item: Omit<Tag, 'createdAt'>
}

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'TagList'>
}


export const TagListScreen: FC<Props> = ({navigation}) => {
    const {tags, getErr, isLoading} = useGetTags()
    const tagsKeyExtractor = (item: Omit<Tag, 'createdAt'>) => item.id
    const tagRenderItem = ({item}: Item) => (<TagCard id={item.id} name={item.name}/>)

    if (isLoading) {
        return (
            <SafeAreaView style={tw('flex-1 items-center justify-center')}>
                <ActivityIndicator size="large" color="gray"/>
                {getErr !== '' && (
                    <Text style={tw('text-red-500 my-3 font-semibold')}>{getErr}</Text>
                )}
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView style={tw('flex-1 bg-gray-100 items-center')}>
            <Title first="Tag" last="List"/>
            <TouchableOpacity style={tw('mt-2')} onPress={() => navigation.navigate('CreateTag')}>
                <MaterialCommunityIcons name="tag-plus" size={40} color="#5f9ea0"/>
            </TouchableOpacity>
            <Text style={tw('text-gray-700 mt-2 mb-5')}>Add tag</Text>
            <View style={tw('flex-1 m-2')}>
                <FlatList
                    data={tags}
                    renderItem={tagRenderItem}
                    keyExtractor={tagsKeyExtractor}
                    keyboardShouldPersistTaps="always"/>
            </View>
        </SafeAreaView>
    )
}