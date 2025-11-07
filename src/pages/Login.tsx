import { useState } from "react"


const Login = () => {
    const [username, setUsername] = useState('')

    const addUser = () => {
        
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

                    <button onClick={(e)=> addUser(e)}>Continue</button>
                </form>
            </div>
        </>
    )
}

export default Login