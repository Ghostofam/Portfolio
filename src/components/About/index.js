import "./index.scss"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngular, faCss3, faHtml5, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons"
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders'

const About = () =>{
    const str = 'About Me'
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
          clearTimeout(timeoutId); // Clear the timeout when the component unmounts
        };
      }, []);

    return(
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={[...str]}
                        idx={15}
                    />
                </h1>
                <p>
                I am a graduate in Computer Science from National University of Sciences and Technology. With a strong passion for web development and a keen focus on creating impactful solutions and enhancing user experiences, I am excited to embark on a journey of innovation and technological advancement. My strengths lie in my proficiency with 
                JavaScript, my adept problem-solving skills, and my unwavering dedication to self-improvement and hard work.

                </p>
                <p>
                A key trait that sets me apart is my dedication to staying current with the ever-evolving landscape of web technologies.
                My ability to quickly grasp new concepts and technologies ensures that I can adapt to changing requirements and deliver 
                innovative solutions.I am a self-driven individual with a strong work ethic.
                </p>
                <p>
                I am comfortable working independently and at my own pace, which often leads to higher productivity and the ability 
                to dive deep into complex problems. My commitment to excellence pushes me to consistently exceed expectations and 
                contribute positively to any team I am a part of.    
                </p>                
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFd818" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faPython} color="#4584B6" />
                    </div>
                </div>
            </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default About;