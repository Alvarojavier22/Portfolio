import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGit, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
       setLetterClass('text-animate-hover')
   }, 3000)
}, [])

  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
      <h1>
      <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'L', 'V', 'A', 'R', 'O', ' ', ' ', 'J', 'A', 'V', 'I', 'E', 'R']}
            idx={20}
          />
      </h1>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm very ambitious full-stack developer looking for a role in <br/>
          established IT company with the opportunity to work with the latest <br/>
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quietly confident, naturally curious, and perpetually working on <br/>
          improving my chops one problem at a time.
        </p>
        <p>
          If I need to define myself in one sentence that would be a family <br/>
          person, animals lover, football fanatic, and tech-obsessed.
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face2'>
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className='face1'>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faGit} color="#EC4D28" />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faJava} color="#f89820" />
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About