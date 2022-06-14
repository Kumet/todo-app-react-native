import React, {FC} from 'react'
import {GestureResponderEvent, TouchableOpacity} from 'react-native'
import tw from 'tailwind-rn'
import {AntDesign} from '@expo/vector-icons'


type Props = {
    name: any
    color: string
    size: number
    onPress: (e: GestureResponderEvent) => void
}


export const IconButton: FC<Props> = ({name, color, size, onPress}) => (
    <TouchableOpacity style={tw(`items-center`)} onPress={onPress}>
        <AntDesign name={name} size={size} color={color} />
    </TouchableOpacity>
)