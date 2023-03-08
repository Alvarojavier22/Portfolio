import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


const Contact = () => {
  
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
       setLetterClass('text-animate-hover')
   }, 3000)
  }, [])
  
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'outlook',
        'service_6fcrv77',
        refForm.current,

    )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
    )
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
            />
          </h1>
          <p>
            I am interested in freelance oportunities - especially ambitious or <br/>
            large projects. However, if you have other request or question, <br/>
            don't hesitate to contact me using below form either. <br/>
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    className="text"
                    type='text'
                    placeholder="Name"
                    required 
                    />
                </li>
                <li className="half">
                  <input
                    className="email"
                    type='email'
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className='flat-button'
                    value="SEND"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Alvaro Chagas,
          <br />
          Brazil, RS
          <br />
          Vivaldino Maciel 165, 97574080 <br />
          Santana Do Livramento <br />
          <span>alvarojavierchagas@hotmail.com</span>
        </div>
        <div className='map-wrap'>
        <MapContainer center={[-30.90052, -55.53217]} zoom={17}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-30.90052, -55.53217]}>
            <Popup>Alvaro lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact