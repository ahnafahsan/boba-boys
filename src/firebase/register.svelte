<script>
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { userAuth } from "../global";
    import { auth } from "./config";

    export const register = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(user => {
            $userAuth.set(user);
        }).catch(error => {
            console.log(error);
        })
    }
</script>