import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cpit4fc', 'template_2e6wxgt', form.current, 'GirRR51io6R1lb6_S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section>
        <div className="container">
            <h2>Contact Us</h2>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Full Name' name='user_name' required/>
                <br />
                <input type="email" placeholder='Email' name='user_email' required/>
                <br />
                <input type="text" placeholder='Subject' name='subject' required/>
                <br />
                <textarea name="message"  cols="30" rows="10"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact