import React,{useState} from "react" 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FirebaseApp from "../Firebase";
const auth = getAuth(FirebaseApp);

const SignUp=()=>{
    const[email, setEmail] = useState("")
    const[password,setPassword] = useState("")
    
    function signUpUser(){
        createUserWithEmailAndPassword(auth, email, password )
        .then(value => console.log("user created", value))
        .catch(error => console.log("error", error))
    }


     return(
        <div>
            <h1> SignIn Screen </h1>
             <input 
               type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
             />

              <input 
               type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
             />    

             <button onClick={signUpUser}> Signup </button>


        </div>

     )
}

export default SignUp