import React from 'react';

const Header =(props)=>{
    console.log(props)
    return(
        <header>
           <h1> Lisa Barton</h1>  
        {props.children}
        </header>
    );


}
export default Header;