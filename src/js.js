import React from "react";
import './App.css';
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
   React.createElement("div",{ className: "card" },
   React.createElement("h1", { className:"developer an"}, "Developer Profile"),

  // Section 1 container
    React.createElement( "section",{className:"section1"},
    React.createElement("h2", {className:"basic"}, "Basic Info"),
    React.createElement( "p",null,React.createElement("strong", null, "Name:")," CyberDude"),
    React.createElement("p",null,React.createElement("strong", null, "Role:")," Frontend Developer")
  ),

  // Skills container 
  React.createElement( "section",{className:"section2"},
    React.createElement("h2", null, "Skills"),
    React.createElement("ul",null,
    React.createElement("li", null, "HTML"),
    React.createElement("li", null, "CSS"),
    React.createElement("li", null, "JavaScript"),
    React.createElement("li", null, "React")
    )
  ),
 
  // Projects first container
    React.createElement("section",{className:"section3"},
    React.createElement("h2", {className:"title an"}, "Projects"),
    React.createElement("div",{ className: "project an" },
    React.createElement("h3", {className:"fontblod"}, "Portfolio Website"),
    React.createElement("p",null,"Personal portfolio built using React."),
    React.createElement("span", null, "Status: Completed")
    ),

    // project two container
      React.createElement("div",{ className: "project an" },
      React.createElement("h3", {className:"fontblod"}, "Task Manager"),
      React.createElement("p",null, "A simple task management app."),
      React.createElement("span", null, "Status: In Progress")
    )
  )
)
)

 
// <div class="card">
//   <h1>Developer Profile</h1>

//   <!-- Basic Info -->
//   <section>
//     <h2>Basic Info</h2>
//     <p><strong>Name:</strong> CyberDude</p>
//     <p><strong>Role:</strong> Frontend Developer</p>
//   </section>

//   <!-- Skills -->
//   <section>
//     <h2>Skills</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//     </ul>
//   </section>



//   <!-- Projects -->
//   <section>
//     <h2>Projects</h2>

//     <div class="project">
//       <h3>Portfolio Website</h3>
//       <p>Personal portfolio built using React.</p>
//       <span>Status: Completed</span>
//     </div>

//     <div class="project">
//       <h3>Task Manager</h3>
//       <p>A simple task management app.</p>
//       <span>Status: In Progress</span>
//     </div>
//   </section>
// </div>

