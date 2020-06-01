import React from 'react';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import Count from './todo.js'
 

function Header(props){


    return(
       <header>
           <h1>To-Do List React App</h1>
           <p>Completed: {props.completed}</p>
           <p>Incomplete: {props.incomplete}</p>
       </header>
    )
}







export default Header;