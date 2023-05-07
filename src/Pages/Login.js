import React,{useState} from "react" 
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import FirebaseApp from "../Firebase";
const auth = getAuth(FirebaseApp);

const Login=()=>{
    const[email, setEmail] = useState("")
    const[password,setPassword] = useState("")
    
    function LoginUser(){
        signInWithEmailAndPassword(auth, email, password )
        .then(value => console.log("user created", value))
        .catch(error => console.log("error", error))
    }


     return(
        <div>
            <h1> Login Screen </h1>
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

             <button onClick={LoginUser}> Login </button>


        </div>

     )
}

export default Login