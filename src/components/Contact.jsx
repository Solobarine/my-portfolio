import { useEffect, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  // Status of sent mail
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [text, setText] = useState()
  const [sender_email, setSenderEmail] = useState()
  const [mail, setMail] = useState()

  const service_id = 'service_s62lyh9'
  const template_id = 'template_qbwjj3f'
  const public_key = 'aY2gQTpkebRglB2IJ'

  const message = {
    email: sender_email,
    mail,
  }

  console.log(message)
  // console.log(sender_email, mail);

  useEffect(() => {
    switch (status) {
      case 'idle':
        setText('Send')
        break
      case 'pending':
        setText('Sending')
        break
      case 'success':
        setText('Mail Sent')
        break
      case 'failed':
        setText('Send')
        setError('Failed to Send')
        break
      default:
        setText('Send')
    }
  }, [status])

  const send_mail = (e) => {
    e.preventDefault()
    console.log(message)
    setStatus('pending')
    emailjs.send(service_id, template_id, {}, public_key)
    .then(response => {
      console.log(response.text);
      setStatus('success')
    }, err => {
      console.log(err)
      setStatus('failed')
    })
  }
  return (
    <section id="contact">
      <form action="">
        <h2>Contact Me</h2>
        <input
         onChange={(e) => setSenderEmail(e.target.value)}
          value={sender_email} type="email"
           placeholder="Enter your Email"/>
        <textarea 
          onChange={(e) => setMail(e.target.value)}
         value={mail} name="mail" id="message"
          placeholder="Write your message"></textarea>
        {(error) && <p id="form_error">{error}</p>}
        <input onClick={send_mail} type="submit" value={text}/>
      </form>
    </section>
  )
}

export default Contact
