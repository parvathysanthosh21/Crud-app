import React from 'react'
import Add from '../components/Add';
import View from '../components/View';
import { useState } from 'react';
function Home() {
  const [uploadNoteResponce,setUploadNoteResponce] = useState({})
  return (
    <>
   <div className="mt-5 mb-5 container d-flex align-items-center justify-content-between">
    <div className="add-notes">
      <Add setUploadNoteResponce={setUploadNoteResponce}/>
    </div>
   </div>

   <div className="mt-5 mb-5 container-fluid d-flex align-items-center justify-content-between w-100">
    <div className="all-notes ">
      <h4>All Notes</h4>
      <View uploadNoteResponce={uploadNoteResponce}/>
    </div>
   </div>
    </>
  )
}

export default Home