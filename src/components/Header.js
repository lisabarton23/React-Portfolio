import React from 'react';

const Header =(props)=>{
    console.log(props)
    return(
        <header>
        {props.children}
        </header>
    );


}
export default Header;