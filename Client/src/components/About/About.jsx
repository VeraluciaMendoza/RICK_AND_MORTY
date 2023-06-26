import imageLinkedin from '../../assets/linkedin.png';


export default function About(props) {
  return (
    <div>
      <h2>About me...</h2>
      <p>My name is...</p>
      <a target="blank" href="https://www.linkedin.com/in/veraluciamendozamejia/">
        <div>
          <p>Find me on linkedin</p>
          <img src={imageLinkedin} alt="Linkedin logo"/>
        </div>
      </a>
    </div>
  )
}