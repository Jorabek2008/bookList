import React, { useState } from 'react'
import "../styles/home.css"
import Navbar from '../components/Navbar'
import CreateBook from '../components/CreateBook'
import AddBook from '../components/AddBook'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Books from './../components/Books';

function Admin() {
  const [addBook, setAddBook] = useState(false)
    function addFunck(){
        setAddBook(prev => !prev)
    }
  return (
    <div className='wrapper-home relative'>
    <ToastContainer />
    {addBook ? <AddBook addBook={addFunck} /> : ''}
        <div className='mx-auto px-[50px]'>
            <Navbar />
            <CreateBook addBook={addFunck} />
            <Books />
        </div>
    </div>
  )
}

export default Admin