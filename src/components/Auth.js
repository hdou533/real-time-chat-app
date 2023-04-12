import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'

import Cookies from 'universal-cookie'
const cookie = new Cookies()

export const Auth = () => {

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            cookie.set('auth-token', result.user.refreshToken)
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <div>
            <p>
                Sign In with Google to continue
            </p>
            <button onClick={signInWithGoogle}>
                Sign in with Google
            </button>
        </div>
    )
}