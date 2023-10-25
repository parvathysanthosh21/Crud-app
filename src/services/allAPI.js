import { serverURl } from "./serverURL"
import { commonApi } from "./commonAPI"


// upload

export const uploadNote = async (reqBody)=>{
    // add component return to add
    return await commonApi("POST",`${serverURl}/notes`,reqBody)
}

// get a video from json

export const getAllnotes = async ()=>{
    // get all vedio and return to cartnotes
    return await commonApi("GET",`${serverURl}/notes`,"")
}
// get all video from json

export const getANotes = async (id)=>{
    // get all vedio and return to view
    return await commonApi("GET",`${serverURl}/notes/${id}`,"")
}

// delete a video

export const deleteANote = async (id)=>{
    return await commonApi("DELETE",`${serverURl}/notes/${id}`,{})
}

export const updateNote = async (Body,id)=>{
    return await commonApi("PUT", `${serverURl}/notes/${id}`,Body)
}
