import React from 'react'

const AddItems = ({addItem, setNewItem, handleButton}) => {
  return (
    <form className='addForm' onSubmit={handleButton}>
        <label htmlFor="addItem"> Manda </label>
        <input
            autoFocus
            id='manda'
            type="text"
            placeholder='Add Item'
            required
            value={addItem.manda}
            onChange={(e) => setNewItem({...addItem, manda: e.target.value})}
            /><br></br>
        <label htmlFor="addItem"> Me </label>
        <input
            autoFocus
            id='other'
            type="text"
            placeholder='Add Item'
            required
            value={addItem.other}
            onChange={(e) => setNewItem({...addItem, other: e.target.value})}
            /><br></br>
            <button  type='submit'
            aria-label='Add Item' onClick={handleButton} disabled ={false} >Click For Post
            </button>
    </form>
  )
}

export default AddItems