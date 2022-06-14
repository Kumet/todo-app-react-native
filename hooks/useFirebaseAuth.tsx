import {useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,} from 'firebase/auth'
import {auth} from '../firebaseConfig'


export const userFirebaseAuth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const [authErr, setAuthErr] = useState('')

    const login = async () => {
        try {
            setAuthErr('')
            if (email !== '' && password !== '') {
                await signInWithEmailAndPassword(auth, email, password)
            }
        } catch (err: any) {
            setAuthErr(err.message)
            setEmail('')
            setPassword('')
        }
    }

    const register = async () => {
        try {
            setAuthErr('')
            if (email !== '' && password !== '') {
                await createUserWithEmailAndPassword(auth, email, password)
            }

        } catch (err: any) {
            setAuthErr(err.message)
            setEmail('')
            setPassword('')
        }
    }

    const toggleMode = () => {
        setIsLogin(!isLogin)
        setAuthErr('')
    }

    return {
        isLogin,
        email,
        password,
        authErr,
        setEmail,
        setPassword,
        login,
        register,
        toggleMode
    }

}