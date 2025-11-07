import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DB from './components/UserData'

const Add = () => {
    const navigate = useNavigate()
    const [date, setDate] = useState('')
    const [type, setType] = useState<'credit' | 'debit'>('credit')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [reason, setReason] = useState('')

    const user = new DB

    const transaction = {
        date,
        type,
        amount,
        category,
        reason
    }

    const addTrac = () => {
        user.addTransaction(transaction)
        navigate('/')
    }

    const changeType = (type: string) => {
        if (type === 'credit') {
            setType(type)
        } else if (type === 'debit') {
            setType(type)
        }
    }

    return (
        <>
            <form className='d-flex flex-column' action="">
                <div>
                    <input onChange={(e) => setDate(e.target.value)} name='date' type="date" placeholder='enter date' />
                    <select onChange={(e) => changeType(e.target.value)} name="type" id="">
                        <option value="">Select Transaction Type</option>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                    </select>
                    <input onChange={(e) => setAmount(+e.target.value)} name='amount' type="number" placeholder='enter amount' />
                    <input onChange={(e) => setCategory(e.target.value)} name='category' type="text" placeholder='enter category' />
                    <input onChange={(e) => setReason(e.target.value)} name='reason' type="text" placeholder='enter reason' />
                </div>
                <button onClick={() => addTrac()}>Add +</button>
            </form>
            <Link to={'/'}>Go back</Link>
        </>
    )
}

export default Add