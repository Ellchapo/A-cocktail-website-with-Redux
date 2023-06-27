import React from 'react'
import { Link } from 'react-router-dom'
import {FaCocktail} from 'react-icons/fa'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchCocktails } from '../Redux/features/cocktailSlice';
const Header = () => {
  const searchTerm = useRef();
 const dispatch= useDispatch();

  const changeHandler = ()=>{
    const searchText = searchTerm.current.value;
    dispatch(fetchSearchCocktails({searchText}));
  };
  const onSubmitHandler = (e)=>{
     e.preventDefault()
  };
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><FaCocktail color='purple'/>Cocktails</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/needhelp">Need Help</Link>
        </li>
      </ul>
      <form onSubmit={onSubmitHandler} className="d-flex" role="search">
        <input className="form-control me-2"
         type="search" placeholder="Search" 
         aria-label="Search"
         onChange={changeHandler}
         ref={searchTerm}
          />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header