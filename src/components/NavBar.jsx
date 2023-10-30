import React from 'react';
import {connect} from "react-redux"
import { useState } from "react"
import{NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom';
function NavBar({dispatch,searchInput}) {
    const[toggle, setToggle] = useState (true)  ;
    const handleInput = e=>{
      dispatch({
        type:"SEARCH_INPUT",
        payload:e.target.value
      })
    }
  return (
    <nav className={toggle ? '' : 'navBarColor'}>
        <div className="nav-options">      
          <Link className='logo' to="/" id={toggle ? '' : 'heading'}>KhaledMovie</Link>
        <NavLink to=""  style={({isActive})=>{return{color:isActive ? '#fff' : '#EE9B00'}}}>
          <span id={toggle ? 'Movies' : 'MoviesLight'}>Filmlər</span>
          </NavLink>
          <NavLink to="/TvShows" style={({isActive})=>{return{color:isActive ? '#fff' : '#EE9B00'}}}>
        <span id={toggle ? 'Movies' : 'MoviesLight'}>Tv Seriallar</span>
        </NavLink>
        <NavLink to="/Trending" style={({isActive})=>{return{color:isActive ? '#fff' : '#EE9B00'}}}>
        <span id={toggle ? 'Movies' : 'MoviesLight'}>Gündəmdə olanlar</span>
        </NavLink>
        <NavLink to="/Filter" style={({isActive})=>{return{color:isActive ? '#fff' : '#EE9B00'}}}>
        <span id={toggle ? 'Movies' : 'MoviesLight'}>Filter</span>
        </NavLink>
        <NavLink to="/Pricing" style={({isActive})=>{return{color:isActive ? '#fff' : '#EE9B00'}}}  >
        <span id={toggle ? 'Movies' : 'MoviesLight'}>Satın alma</span>
        </NavLink>
        </div>
        <div className="input-group">         
        <input type="text"placeholder="Film axtar" value={searchInput} onChange={handleInput} />
        <i id='search' style={{ fontSize: "21px", color: "green" }} className="fa-solid fa-magnifying-glass"></i>
        <div id="Color-switcher" onClick={()=>setToggle(!toggle)}>
            <div id={toggle ? 'Color-switcher-mover' :'Color-switcher-moved'}></div>       
        </div>
        </div>
    </nav>
  )
}

const t =a=>a
export default connect(t)(NavBar)