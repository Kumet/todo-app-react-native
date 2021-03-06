import {deleteDoc, doc} from 'firebase/firestore'
import {useSelector} from 'react-redux'
import {selectUser} from '../slices/userSlice'
import {useState} from 'react'
import {db} from '../firebaseConfig'


export const useDeleteTag = () => {
    const user = useSelector(selectUser)
    const [deleteErr, setDeleteErr] = useState('')
    const deleteTag = async (idx: string) => {
        setDeleteErr('')
        try {
            await deleteDoc(doc(db, 'users', user.uid, 'tags', idx))
        } catch (err: any) {
            setDeleteErr(err.message)
        }
    }
    return {
        deleteTag,
        deleteErr
    }
}