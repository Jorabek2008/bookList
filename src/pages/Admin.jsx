import React, { useState } from 'react'
import "../styles/home.css"
import Navbar from '../components/Navbar'
import CreateBook from '../components/CreateBook'
import AddBook from '../components/AddBook'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admin() {
  const [addBook, setAddBook] = useState(false)
    function addFunck(){
        setAddBook(prev => !prev)
    }
  return (
    <div className='wrapper-home relative'>
    <ToastContainer />
    {addBook ? <AddBook addBook={addFunck} /> : ''}
        <div className='container mx-auto'>
            <Navbar />
            <CreateBook addBook={addFunck} />
        </div>
    </div>
  )
}

export default Admin