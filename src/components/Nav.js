import React from 'react';
// import { Link } from 'react-router-dom'; find in activity 19
const styles ={
nav:{
justifyContent: 'flex-end', 
justifyContent: 'space-between',
fontSize: '25px'
}

}

const Navbar =()=>{
    return(
        <nav style ={styles.nav}>
             <ul >
         <li><a href ="#aboutMe" >About Me</a></li>
<li><a href="#work" >Work</a></li>
<li><a href="#contactMe">Contact Me</a></li>
<li><a href ="#contactMe">Resume</a></li>
</ul>
            
        </nav>
    )
}
export default Navbar;