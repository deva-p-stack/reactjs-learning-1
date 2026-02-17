import React from "react";
import { createRoot } from "react-dom/client";



createRoot(document.getElementById("root")).render(

React.createElement("div",{ className: "card" },

  
  React.createElement("h1", null, "Developer Profile"),

 

  // Section 1
  React.createElement( "section",null,
    React.createElement("h2", null, "Basic Info"),
    React.createElement( "p",null,React.createElement("strong", null, "Name:")," CyberDude"),
    React.createElement("p",null,React.createElement("strong", null, "Role:")," Frontend Developer")
  ),

  // Skills
  React.createElement( "section",null,
    React.createElement("h2", null, "Skills"),
    React.createElement("ul",null,
    React.createElement("li", null, "HTML"),
    React.createElement("li", null, "CSS"),
    React.createElement("li", null, "JavaScript"),
    React.createElement("li", null, "React")
    )
  ),

  // Projects
  React.createElement("section",null,
    React.createElement("h2", null, "Projects"),
    React.createElement("div",{ className: "project" },
    React.createElement("h3", null, "Portfolio Website"),
    React.createElement("p",null,"Personal portfolio built using React."),
    React.createElement("span", null, "Status: Completed")
    ),

    React.createElement("div",{ className: "project" },
      React.createElement("h3", null, "Task Manager"),
      React.createElement("p",null, "A simple task management app."),
      React.createElement("span", null, "Status: In Progress")
    )
  )
)
)

 