
import './App.css'

function App() {
  

  return (
    <>

<div className="card">
  <h1 className='developer an'>Developer Profile</h1>


  <section className='section1'>
    <h2 className='basic'>Basic Info</h2>
    <p><strong>Name:</strong> CyberDude</p>
    <p><strong>Role:</strong> Frontend Developer</p>
  </section>

  <section className='section2'>
    <h2 className='skill'>Skills: </h2>
    <ul>
      <li>HTML,</li>
      <li>CSS,</li>
      <li>JavaScript,</li>
      <li>React,</li>
    </ul>
  </section>

  
  <section >	
    <h2 className='title an' >Projects</h2>

    <div className="project an ">
      <h3 className='fontblod'>Portfolio Website</h3>
      <p>Personal portfolio built using React.</p>
      <span>Status: Completed</span>
    </div>

    <div className="project an">
      <h3 className='fontblod'>Task Manager</h3>
      <p>A simple task management app.</p>
      <span>Status: In Progress</span>
    </div>

    
  </section>
</div>





    </>
  )
}

export default App
