import Loader from "react-loaders";
import "./index.scss"
import { useEffect,useRef,useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () =>{
    const str = "Contact Me"
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
          clearTimeout(timeoutId); // Clear the timeout when the component unmounts
        };
      }, []);

      const sendEmail = (e) =>{
         e.preventDefault()
         emailjs
            .sendForm(
                'service_5mlox2v',
                'template_ivnvtph',
                refForm.current,
                'qGiuFcdy_MBC03iiI'
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
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={[...str]} 
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance and job opportunities,
                        If you have any questions, kindly contact me using
                        the form below.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Syed Aqeel Abbas,
                    <br />
                    Pakistan,
                    <br />
                    Lane 3 Gulistan Colony, <br />
                    Rawalpindi <br />
                    <span>aqeelabbas84@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[33.57037,73.09197]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[33.57037,73.09197]}>
                            <Popup>Aqeel lives here, come over for a cup of tea :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;