import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import {useSelector} from 'react-redux'
import {selectTag} from '../slices/todoSlice'


export const TaskListScreen = () => {
    const tag = useSelector(selectTag)
    return (
        <SafeAreaView>
            <Text>Task List</Text>
            <Text>{tag.name}</Text>
        </SafeAreaView>
    )
}