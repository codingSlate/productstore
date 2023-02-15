import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({onSearch, cartItemCount}) {
    const [searchQuery, setSearchQuery] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        if(searchQuery.trim().length){
            onSearch(searchQuery.trim())
        }
        setSearchQuery('')
    }

  return (
    <header className="header">
        <nav className='nav'>
            <div className="logo-container">
                <Link to="/">Logo</Link>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    name="search" 
                    placeholder='Search item' 
                    value={searchQuery}
                    onChange={e=>setSearchQuery(e.target.value)}
                    />
                    <button type='submit' >Search</button>
                </form>
            </div>
            <div className="cart-container">
                <Link to="/cart">Cart
                    {
                        cartItemCount > 0 && <span>{cartItemCount > 10 ? '10+' : cartItemCount}</span>
                    }
                </Link>
            </div>
        </nav>
    </header>
  )
}
