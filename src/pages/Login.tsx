import { useState } from "react"
import DB from "../components/UserData"

const Login = () => {
    const [username, setUsername] = useState('')

    const user = new DB

    const addUser = () => {
        user.addUser({username})
    }

    return (
        <>
            <div>
                <h1>Welcome to Personal Finance Tracker</h1>
                <span>Here, your data is secured, and your expenses are transparent.</span>

                <form action="">
                    <div>
                        <label htmlFor="username">Enter your name</label>
                        <input onChange={(e)=> setUsername(e.target.value)} type="text" id='username' />
                    </div>

                    <button onClick={()=> addUser()}>Continue</button>
                </form>
            </div>
        </>
    )
}

export default Login