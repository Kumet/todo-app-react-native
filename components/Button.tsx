import React, {FC} from 'react'
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native'
import tw from 'tailwind-rn'

type Props = {
    title: string
    bgColor?: string
    titleColor?: string
    onPress: (e: GestureResponderEvent) => void
}


export const Button: FC<Props> = (
    {
        title,
        bgColor = 'bg-gray-500',
        titleColor = 'text-white',
        onPress,
    }) => (

    <TouchableOpacity
        style={tw(`mb-4 mx-3 rounded-3xl w-11/12 ${bgColor}`)}
        onPress={onPress}
    >
        <Text style={tw(`text-center text-lg font-semibold p-2 ${titleColor}`)}>
            {title}
        </Text>

    </TouchableOpacity>
)