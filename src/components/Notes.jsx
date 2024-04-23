import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Notes = (props) => {

  const history = useHistory();

    const context = useContext(NoteContext);
    const {notes, getNote, editNote} = context;
    const [note, setNote] = useState({id:"" ,etitle:"", edescription:"", etag:""});

    const ref = useRef(null);
    const refClose = useRef(null);

    const updateNote = (currentNote) => {
      ref.current.click()
      setNote({
        id: currentNote._id,
        etitle: currentNote.title,
        edescription: currentNote.description,
        etag: currentNote.tag
      });
    };

    const onClick = (e)=>{
        // e.preventDefault()
        editNote(note.id, note.etitle, note.edescription, note.etag);
        ref.current.click();
        props.showAlert("Note updated successfully","info");
    };

    const onChange = (e)=>{
        setNote({...note, [e.target.name]:e.target.value})
    };

    useEffect(()=>{
      if (localStorage.getItem('token')) {
        getNote();
      } else {
        history.push('/login');
      };
    }, []);

  return (
    <>
    <AddNote showAlert={props.showAlert}/>
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" onChange={onChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">Tag</label>
              <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange}/>
            </div>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={onClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
    <div className="container">
    <div className='row'>
      <h1 className='my-2'>Your Notes</h1>
      <div className="container mx-2">
      {notes.length===0 && 'No Notes Available To Show'}
      </div>
      {notes.map((note)=>{
        return <Noteitem showAlert={props.showAlert} note={note} updateNote={updateNote} />
      })}
    </div>
    </div>
    </>
  )
}

export default Notes
