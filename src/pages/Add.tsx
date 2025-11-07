import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DB from '../components/UserData'

const Add = () => {
    const [date, setDate] = useState('')
    const [type, setType] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [reason, setReason] = useState('')

    const user = new DB

    const addTrac = user.addTransaction()
  return (
    <>
        <form className='d-flex flex-column' action="">
            <input name='date' type="date" placeholder='enter date' />
            <input name='type' type="text" placeholder='enter type' />
            <input name='amount' type="number" placeholder='enter amount'/>
            <input name='category' type="text" placeholder='enter category'/>
            <input name='reason' type="text" placeholder='enter reason'/>
            <button onClick={()=>addTrac()}>Add +</button>
        </form>
        <Link to={'/'}>Go back</Link>
    </>
  )
}

export default Add