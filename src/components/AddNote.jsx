import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';
import { useState } from 'react';


const AddNote = (props) => {

    const context = useContext(NoteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"", description:"", tag:""});
    const onClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"", description:"", tag:""});
        props.showAlert("Note Added Successfully","info");
    };

    const onChange = (e)=>{
        setNote({...note, [e.target.name]:e.target.value})
    };

  return (
    <div className='container'>
      <h1>
        Add a Note
      </h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" value={note.title} onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange}/>
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={onClick}>Add Note</button>
      </form>

    </div>
  )
}

export default AddNote
