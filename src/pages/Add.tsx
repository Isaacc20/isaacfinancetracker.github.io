import React from 'react'

const Add = () => {
  return (
    <>
        <form className='d-flex flex-column' action="">
            <input name='date' type="date" placeholder='enter date' />
            <input name='text' type="text" placeholder='enter type' />
            <input name='number' type="number" placeholder='enter amount'/>
            <input name='text' type="text" placeholder='enter category'/>
            <input name='text' type="text" placeholder='enter category'/>
            <button>Add +</button>
        </form>
    </>
  )
}

export default Add