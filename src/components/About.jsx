import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'


const About = () => {

  const a = useContext(NoteContext);

  return (
    <div className='container my-5'>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Our Mission</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            At <code>CloudBook</code>, we believe that capturing ideas and insights should be effortless and accessible anytime, anywhere. Our mission is to empower individuals to harness the power of their thoughts by providing a secure and user-friendly platform for note-taking.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Your Digital Companion</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Whether you're a student, professional, or creative thinker, <code>CloudBook</code> is your digital companion for capturing, organizing, and retrieving your ideas with ease.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Seamless Signup and Login</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            With a seamless signup and login process, <code>CloudBook</code> ensures that your notes are securely stored and readily accessible whenever inspiration strikes.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <strong>Intuitive Interface</strong>
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Our intuitive interface allows you to create, edit, and categorize your notes effortlessly, enabling you to stay organized and focused on what matters most.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            <strong>Privacy and Security</strong>
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Here at <code>CloudBook</code>, we prioritize your privacy and security. Rest assured that your data is encrypted and protected, giving you the peace of mind to jot down your thoughts without worry.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            <strong>Join Our Community</strong>
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Join the <code>CloudBook</code> community today and unlock the full potential of your ideas. Let <code>CloudBook</code> be your trusted companion in your journey towards productivity and creativity.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
