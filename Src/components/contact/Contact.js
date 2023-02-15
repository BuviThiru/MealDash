import './contact.css'
import React,{useRef} from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

function Contacts() {
  const form = useRef();
  const sendEmail =(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_1sfivlv','template_95120a9',form.current,'ZEAxYiw_dfrhqw321')
    e.target.reset()
    alert("Message sent Sucessfully!! Thank you ")
  }


  return (
    <section id='contacts'>    
        
      <div className=' contact-container'> 
      <h2 className='contact-us'>Contact Us</h2>          
        <form ref={form} onSubmit ={sendEmail} className="form-container">
          <input type='text' name='name' placeholder='Your Name' required/>
          <input type= 'email' name='email' placeholder='Your email-Id' required/>
          <textarea type='message' name='message' placeholder='Your Message' required></textarea>
          <button type='submit' className='contact-button'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contacts