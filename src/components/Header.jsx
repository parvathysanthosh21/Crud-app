import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
         <Link to={'/'} style={{textDecoration:'none'}}>
              <i className="fa-solid fa-note-sticky fs-4"></i>{' '}
                StickyNotes
         </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header