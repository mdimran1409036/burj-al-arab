import { useState } from "react"
import useAuth from "./useAuth"
import useFirebase from "./useFirebase"

const useRegister =()=>{
    const { passwordRegister, error} =useAuth()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) =>  {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        passwordRegister(name,email,password)
        
    }
    return{
        error,
        handleName,
        handleEmail, 
        handlePassword,
        handleSubmit
    }
}
export default useRegister;