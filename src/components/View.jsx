import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CartNote from './CartNote'
import { getAllnotes } from '../services/allAPI'
import { useEffect } from 'react'
import { useState } from 'react'
function View({uploadNoteResponce}) {
  const [allNotes, setAllNotes] = useState([])
  const [deleteNoteStatus,setdeleteNoteStatus] = useState(false)
  const [updateTheNote,setUpdateTheNote] = useState("")
  
  const getallUploadedNotes = async () => {
    const { data } = await getAllnotes()
    setAllNotes(data);
  }
  useEffect(() => {
    getallUploadedNotes()
  }, [uploadNoteResponce,deleteNoteStatus,updateTheNote])
  console.log(allNotes);
  return (
    <>
      <Row>
        {
          allNotes.length>0?
          allNotes.map(note=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <CartNote displayData={note} setdeleteNoteStatus={setdeleteNoteStatus} setUpdateTheNote={setUpdateTheNote}/>
          </Col>
          ))
        :
          <p className='fs-3 text-primary'>No Notes are uploded</p>
        }
      </Row>
    </>
  )
}

export default View