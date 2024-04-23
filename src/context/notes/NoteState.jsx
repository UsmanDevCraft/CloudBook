import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

  const host = "https://cloud-book-backend-eta.vercel.app"

    const notesInitial = [];

      const [notes, setNotes] = useState(notesInitial)


  //get all note function
  const getNote = async ()=>{
    //API call
    const response = await fetch(`${host}/api/note/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json)
    };


      
    //add a note function
    const addNote = async (title, description, tag)=>{
      //API call
      const response = await fetch(`${host}/api/note/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token'),
        },
        body: JSON.stringify({title, description, tag}),
      });
      //add note code
      const note = await response.json();
      setNotes(notes.concat(note));
      };


      //delete a note function
      const deleteNote = async (id)=>{
        //API Call
        const response = await fetch(`${host}/api/note/deletenote/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.getItem('token'),
          },
        });
        const json = response.json();

        //delete function
        const newNote = notes.filter((note)=>{return note._id!==id});
        setNotes(newNote);
      };



      //edit a note function
      const editNote = async (id, title, description, tag) => {

        //API call
        const response = await fetch(`${host}/api/note/updatenote/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.getItem('token'),
          },
          body: JSON.stringify({title, description, tag}),
        });
        const json = response.json();

        let newNote = JSON.parse(JSON.stringify(notes));
        //edit code
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if (element._id === id) {
            newNote[index].title = title;
            newNote[index].description = description;
            newNote[index].tag = tag;
            break;
          }
        }
        setNotes(newNote)
      };


    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNote}}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState;