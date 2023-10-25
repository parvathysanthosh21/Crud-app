import { Button, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react'
import { uploadNote } from '../services/allAPI';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function Add({setUploadNoteResponce}) {
  const [note,setNote] = useState({
    id:"",caption:"",notes:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = async()=>{
    const {id,caption,notes} = note
    if(!id || !caption || !notes){
      toast.warning("please fill the form")
    }else{
     const responce =  await uploadNote(note)
      console.log(responce);
      if(responce.status>=200 && responce.status<300){
        alert(`${responce.data.caption} note uploaded`)
        setUploadNoteResponce(responce.data)
        handleClose()
      }else{
        console.log(responce);
      }
    }
  }
  return (
   <>
      <div className='d-flex align-items-center'>
        <h5  style={{color:'#78c2ad'}}>Upload Your Notes</h5>
        <button onClick={handleShow} style={{color:'#78c2ad'}} className='btn'><i className="fa-solid fa-circle-plus fs-4"></i></button>
      </div>
      <Modal show={show} onHide={handleClose}backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title  style={{color:'#78c2ad'}}>Upload Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border border-primary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text " placeholder="Enter Video ID" onChange={(e)=>setNote({...note,id:e.target.value})}/>
       </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control 
                type="text"
                placeholder="Enter Note Heading"
                autoFocus
                onChange={(e)=>setNote({...note,caption:e.target.value})}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Control as="textarea" rows={3} 
              placeholder='Type Your Notes'
              onChange={(e)=>setNote({...note,notes:e.target.value})}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer 
      position='top-center'
      autoClose={2000}
      />
   </>
  )
}

export default Add