
let card = document.createElement('div');
card.className = "card";

let h11el = document.createElement('h1');
h11el.textContent ="Developer Profile";

let comment1el = document.createComment('Basic Info ')

let section1El = document.createElement('section');

let h21el = document.createElement('h2');
h21el.textContent="Basic Info";


let p1el = document.createElement('p');
let strong1el = document.createElement('strong');
strong1el.textContent ='Name:';
p1el.appendChild(strong1el);
p1el.append("CyberDude");

let p2el = document.createElement('p');
let strong2el = document.createElement('strong');
strong2el.textContent ='Role:';
p2el.appendChild(strong2el);
p2el.append("Frontend Developer");

section1El.append(h21el, p1el, p2el);


let comment2el = document.createComment('Skills');

let section2El = document.createElement('section');


let h22el = document.createElement('h2');
h22el.textContent = "Skills ";

let ul1el = document.createElement('ul');

let li1el  = document.createElement('li');
li1el.textContent = "HTML";

let li2el  = document.createElement('li');
li2el.textContent = "CSS";

let li3el  = document.createElement('li');
li3el.textContent = "JavaScript";

let li4el  = document.createElement('li');
li4el.textContent = "React";


ul1el.append(li1el, li2el, li3el, li4el);
section2El.append(h22el, ul1el);


let comment3el = document.createComment('Projects');

let section3El = document.createElement('section');

// project card div 1
let h23el = document.createElement('h2');
h23el.textContent = "Projects";

let div1el = document.createElement('div');
div1el.className="Project";


let h31el = document.createElement('h3');
h31el.textContent="Portfolio Website";

let p3el = document.createElement('p');
p3el.textContent ='Personal portfolio built using React.';


let span1el = document.createElement('span');
span1el.textContent = "Status: Completed";

div1el.append(h31el, p3el, span1el);


// project card div 2
let div2el = document.createElement('div');
div2el.className="Project";


let h32el = document.createElement('h3');
h32el.textContent="Task Manager";

let p4el = document.createElement('p');
p4el.textContent ='A simple task management app.';


let span2el = document.createElement('span');
span2el.textContent = "Status: In Progress";



div2el.append(h32el, p4el, span2el);

section3El.append(h23el, div1el, div2el);


card.append(h11el,comment1el,section1El,comment2el,section2El,comment3el,section3El);
document.body.appendChild(card);

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

