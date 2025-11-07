import React from 'react'

const Add = () => {
  return (
    <>
        <form className='d-flex flex-column' action="">
            <input name='date' type="date" placeholder='enter date' />
            <input name='type' type="text" placeholder='enter type' />
            <input name='amount' type="number" placeholder='enter amount'/>
            <input name='category' type="text" placeholder='enter category'/>
            <input name='reason' type="text" placeholder='enter reason'/>
            <button>Add +</button>
        </form>
    </>
  )
}

export default Add