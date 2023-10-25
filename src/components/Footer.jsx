import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ width: '100%', height: '300px',color:'#78c2ad'}} className='d-flex flex-column justify-content-center align-items-center'>
      <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
        <div className="website" style={{width:'400px'}}>
          <h4  style={{color:'#78c2ad'}} ><i className="fa-solid fa-note-sticky fs-4"></i> StickyNotes</h4>
          <h5 style={{color:'#78c2ad'}} >Designed and built with all the love in the world by the StickyNotes team with the help of our contributors.</h5>
          <h5  style={{color:'#78c2ad'}} >
            Code licensed StickyNotes, docs CC BY 3.0. </h5>
           <p> Currently v5.3.2.</p>
         
        </div>
        <div className="links d-flex flex-column ">
          <h4  style={{color:'#78c2ad'}} >Links</h4>
          <Link to={'/'} style={{textDecoration:'none'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none'}}>Home</Link>
        </div>
        <div className="contact">
          <h4  style={{color:'#78c2ad'}} >Contact Us</h4>
          <div className="sub d-flex">
            <input type="text" className='form-control'placeholder='Enter your E-mail id'/>
            <button className='btn btn-primary ms-3'>Subscribe</button>
          </div>
<div className='icons fs-4 d-flex justify-content-evenly mt-3'>
            <Link to={'/'} style={{textDecoration:'none'}}><i class="fa-brands fa-twitter"></i></Link>
            <Link to={'/'} style={{textDecoration:'none'}}><i class="fa-brands fa-instagram"></i></Link>
            <Link to={'/'} style={{textDecoration:'none'}}><i class="fa-brands fa-facebook"></i></Link>
            <Link to={'/'} style={{textDecoration:'none'}}><i class="fa-brands fa-linkedin"></i></Link>
</div>
        </div>

      </div>
      <p>Copyright 2023 StickNotes.Build with React</p>
    </div>
  )
}

export default Footer