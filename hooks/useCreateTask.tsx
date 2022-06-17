import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../types/types'
import {useDispatch, useSelector} from 'react-redux'
import {selectUser} from '../slices/userSlice'
import {resetEditedTask, selectEditedTask, selectTag, setEditedTask} from '../slices/todoSlice'
import {useState} from 'react'
import {db} from '../firebaseConfig'

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'CreateTask'>
}

export const useCreateTask = ({navigation}: Props) => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const tag = useSelector(selectTag)
    const editedTask = useSelector(selectEditedTask)
    const [createErr, setCreateErr] = useState('')

    const resetInput = () => {
        dispatch(resetEditedTask())
    }
    const onChangeTask = (txt: string) => {
        dispatch(setEditedTask({...editedTask, title: txt}))
    }

    const createTask = async () => {
        setCreateErr('')
        if (editedTask?.title !== '') {
            try {
                await addDoc(
                    collection(db, 'users', user.uid, 'tags', tag.id, 'tasks'),
                    {
                        title: editedTask.title,
                        completed: false,
                        createdAt: serverTimestamp()
                    }
                )
                dispatch(resetEditedTask())
                navigation.goBack()
            } catch (err: any) {
                dispatch(resetEditedTask())
                setCreateErr(err.message)
            }
        }
    }
    return {
        onChangeTask,
        editedTask,
        createErr,
        createTask,
        resetInput
    }
}