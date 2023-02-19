import Head from 'next/head'
import React from 'react'


const Navbar = (prop) => {

return(

<div className="navBar">

<Head> 

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital@1&display=swap');
</style>

  <div className="navBar-true">

    <nav className="NavBar">
      <h2 className="Logo"> De-Tour </h2>

      <ul className='Props'> 
       <li> <a href="#"> </a> About </li> 
       <li> <a href="#"> </a> Team </li> 
      </ul>

        <button className="Button" type="Button"> Register </button>

     </nav>


    </div>


  </Head>

</div>




  )
}

export default Navbar