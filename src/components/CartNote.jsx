import React, { useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import { deleteANote, updateNote } from '../services/allAPI';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function CartNote({displayData,setdeleteNoteStatus,setUpdateTheNote}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // deleting a Note
  const removeNote = async (id)=>{
    const response = await deleteANote(id)
    setdeleteNoteStatus(true)
  }
  const [modalshow, setModalShow] = useState(false);

  const handleMOdalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);
  
  const [updateDetail, setUpdateDetail] = useState({
    id:displayData?.id, caption:displayData?.caption, notes:displayData?.notes
  })

  // upload
  const handleUpload = async()=>{
    const {id,caption,notes} = updateDetail
    if(!id || !caption || !notes){
      toast.warning("please fill the form")
    }else{
     const responce =  await updateNote(updateDetail,id)
      if(responce.status>=200 && responce.status<300){
        alert(`${responce.data.caption} note updated`)

        setUpdateDetail({
          id:displayData?.id,caption:displayData?.caption,notes:displayData?.notes
        })
        setUpdateTheNote(true)
        handleMOdalClose()
      }else{
        console.log(responce);
        toast.error("cannot perform this operation...")
      }
    }
  }
  return (
    <>
    <Card style={{ width: '18rem'}} className='shadow mb-2'>
      <Card.Body>
        <Card.Title>
          <h6 onClick={handleShow}>{displayData?.caption}</h6>
        </Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
       <div className='d-flex justify-content-between align-items-center'>
          <button onClick={()=>removeNote(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
          <button onClick={handleModalShow} className='btn'><i class="fa-solid fa-pen text-primary"></i></button>
       </div>
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'#78c2ad'}}>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{displayData?.notes}</Modal.Body>
        
      </Modal>

      <Modal show={modalshow} onHide={handleMOdalClose}backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title  style={{color:'#78c2ad'}}>Edit Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border border-primary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control  defaultValue={displayData?.id}  type="text " placeholder="Enter Video ID" onChange={(e)=>setUpdateDetail({...updateDetail,id:e.target.value})}/>
       </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control  defaultValue={displayData?.caption} 
                type="text"
                placeholder="Enter Note Heading"
                autoFocus
                onChange={(e)=>setUpdateDetail({...updateDetail,caption:e.target.value})}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Control as="textarea" rows={3}  defaultValue={displayData?.notes} 
              placeholder='Type Your Notes'
              onChange={(e)=>setUpdateDetail({...updateDetail,notes:e.target.value})}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleMOdalClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">
            Save Changes
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

export default CartNote