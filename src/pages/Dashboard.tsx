import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()

    const storedUser = localStorage.getItem('i-user');
    const user = storedUser ? JSON.parse(storedUser) : { username: '' };

    return (
        <>
            <div>
                <h1>Welcome {user.username}</h1>

                <button onClick={navigate('/add-transaction')}>Add transaction</button>

                <table>
                    <thead>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Reason</th>
                    </thead>
                    <tbody>
                        {
                            user.map(el: any, i:number) => (
                            <>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dashboard