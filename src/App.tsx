import { useLayoutEffect, useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {

  const [isUser, setIsUser] = useState(true)

  const storedUser = localStorage.getItem('i-user');
  const user = storedUser && JSON.parse(storedUser);

  useLayoutEffect(() => {
    if (!user || !user.username) {
      setIsUser(false)
    } else {
      setIsUser(true)
    }
  }, [])

  return (
    <>
      {
        isUser ?
          <>
            <Dashboard />
          </> :
          <>
            <Login />
          </>
      }
    </>
  )
}

export default App
