import React, { useContext } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import NoteContext from '../context/notes/NoteContext';


const Noteitem = (props) => {

  const context = useContext(NoteContext);
  const {deleteNote} = context;

    const {note, updateNote} = props;

    const style = {
      cursor:"pointer"
    };

  return (
    <div className='col-md-3'>
        <div className="card my-2">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <AiFillDelete className='mx-2' onClick={()=>{deleteNote(note._id); props.showAlert("Note deleted successfully","danger")}} style={style}/>
                <FaEdit style={style} onClick={()=>{updateNote(note)}}/>
            </div>
        </div>
    </div>
  )
}

export default Noteitem
