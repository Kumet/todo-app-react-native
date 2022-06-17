import {useState} from 'react'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../types/types'
import {useSelector} from 'react-redux'
import {selectUser} from '../slices/userSlice'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {db} from '../firebaseConfig'


type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'CreateTag'>
}

export const useCreateTag = ({navigation}: Props) => {
    const user = useSelector(selectUser)
    const [name, setName] = useState('')
    const [createErr, setCreateErr] = useState('')

    const createTag = async () => {
        if (name !== '') {
            setCreateErr('')
            try {
                await addDoc(collection(db, 'users', user.uid, 'tags'), {
                    name,
                    createAt: serverTimestamp(),
                })
                setName('')
                navigation.goBack()
            } catch (err: any) {
                setName('')
                setCreateErr(err.measure)
            }
        }
    }
    return {
        name,
        setName,
        createErr,
        createTag
    }
}