import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15} />
                </h1>
                <p>
                    Basically i'm a computer science student. But, apart from that i'm an explorer. Not gonna lie, a passionate one. I always try to excel in every little thing i do to fix myself at the peak of my work. I love to learn new things about technology and i am  with this field.
                </p>
                <p>
                    My favourite quote about life is, "The Greatest threat to success is not failure but boredom."
                </p>
                <p>
                    Apart from this, i just love to play outdoor sports. Football and lawn tennis are my favourite games. So yes, i am a sports addict too!
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
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>

                </div>
            </div>

        </div>

        <Loader type="pacman"/>

        </>
    );
}

export default About