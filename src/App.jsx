import './App.css'
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className='background'>
      <div className='navbar'>
        <ul className='nav-list'>
          <li className='nav-list-item'><a href='#about' className='nav-list-item'>About</a></li>
          <li className='nav-list-item'><a href='#projects' className='nav-list-item'>Projects</a></li>
          <li className='nav-list-item'><a href='#contact' className='nav-list-item'>Contact</a></li>
        </ul>
      </div>
      <div className='upper-space'></div>
      <div className = "hero">
        <img src="/background.png" alt="Your Name" className="hero-img" />
        <div className='background-circle'>
          <img src="/myPhoto.png" alt="Saurav" className="hero-mid-photo" />
        </div>
        <img src="/myPhoto.png" alt="Saurav" className="hero-photo" />
        <div className = 'hero-text'>
          <label className='hero-starter'>Hello, I'm</label><br/> 
          <label className = 'hero-name'>Saurav Singh</label><br/>
          <label className='hero-ender'>Computer Engineer</label>
        </div>
      </div>
      
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App