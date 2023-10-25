import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Langingpage() {
  const NavigateByUrl =useNavigate()
  return (
    <> 
      <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
    <Col
    ></Col>
    <Col lg={5}>
      <h3 >Welcome To <span style={{color:'#78c2ad'}}>StickyNotes</span></h3>
      <p style={{textAlign:'justify'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos placeat, pariatur sequi eius iste aliquid facilis commodi harum est, aut ipsum? Aliquid reiciendis natus soluta impedit laudantium quibusdam, quod quisquam.
      </p>
      <button onClick={()=>NavigateByUrl('/home')} className='mt-5 btn btn-primary'>Explore</button>
    </Col>
    <Col></Col>
    <Col lg={5}>
    <img className='img-fluid' src="https://img1.picmix.com/output/stamp/normal/7/5/2/8/2468257_47ec2.gif" alt="landing" />
    </Col>
  </Row>

  <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
    <h3 style={{color:'#78c2ad',fontWeight:'bolder'}}>Features</h3>
    <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100 ">
    <Card style={{ width: '18rem' }}>
      <Card.Img width={"300px"} height={'300px'} variant="top" src="https://media3.giphy.com/media/S3KhNnHajzZ4voJKYP/giphy.gif?cid=6c09b952g5tdsc9ig3sx1fuwqvdsqo6wa5h7gar7cyzsndyc&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
      <Card.Body>
        <Card.Title style={{color:'#78c2ad'}}>Create Notes</Card.Title>
        <Card.Text style={{color:'#78c2ad'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img width={"300px"} height={'300px'} variant="top" src="https://media1.giphy.com/media/L2KBJGEui1IJZyCLlK/giphy.gif?cid=6c09b952vb6dwwi8eo5oc2v0mt9rp8g74767ts4k7frdmcwp&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" />
      <Card.Body>
        <Card.Title style={{color:'#78c2ad'}}>Store Notes</Card.Title>
        <Card.Text style={{color:'#78c2ad'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img width={"300px"} height={'300px'} variant="top" src="https://i.gifer.com/origin/e0/e0ea055299e92297b2ec0ef1c80696bf_w200.gif" />
      <Card.Body>
        <Card.Title style={{color:'#78c2ad'}}>Update Notes</Card.Title>
        <Card.Text style={{color:'#78c2ad'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  </div>
  </>
  )
}

export default Langingpage