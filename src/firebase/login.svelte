<script>
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { userAuth } from "../global";
    import { auth } from "./config";

    export const login = async (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            $userAuth.set(user)
        })
        .catch(error => {
            console.log(error)
        })
    }
</script>