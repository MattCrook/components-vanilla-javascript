// What if we had more than one student? Below example:
const students = [
  {
    name: "Chris Miller",
    subject: "History",
    info: "Failed last exam",
    score: 59
  },
  {
    name: "Courtney Seward",
    subject: "History",
    info: "Has completed all homework",
    score: 91
  },
  {
    name: "Garrett Ward",
    subject: "History",
    info: "Wonderful at helping other students",
    score: 88
  },
  {
    name: "John Dulaney",
    subject: "History",
    info: "Has never missed a class or exam",
    score: 92
  },
  {
    name: "Greg Lawrence",
    subject: "History",
    info: "Sub-par performance all around",
    score: 64
  },
  {
    name: "Leah Duvic",
    subject: "History",
    info: "Wonderful student",
    score: 97
  },
  {
    name: "Jesse Page",
    subject: "History",
    info: "Smokes too much. Distracting.",
    score: 76
  },
  {
    name: "Kevin Haggerty",
    subject: "History",
    info: "Falls asleep in class",
    score: 79
  },
  {
    name: "Max Wolf",
    subject: "History",
    info: "Talks too much",
    score: 83
  },
  {
    name: "Lissa Goforth",
    subject: "History",
    info: "Asks pointless, unrelated questions",
    score: 78
  },
  {
    name: "Tyler Bowman",
    subject: "History",
    info: "When was the last time he attended class?",
    score: 48
  },
  {
    name: "Ray Medrano",
    subject: "History",
    info: "Needs to contribute to in-class discussions",
    score: 95
  }
];

// Created function so that the 10 passing students names are green and 2 failing are red using the score property.
/*
const createStudentComponent = (name, subject, info, score) => {
    return `
      <div class="student">
        <h1 class="xx-large ${score < 60 ? 'failing' : 'passing'}">${name}</h1>
          <section class="bordered dashed section--padded">${subject}</section>
              <aside class="pushRight">${info}</aside>
              <section>${score}</section>
      </div>
      `
  };

const studentContainer = document.querySelector('#container');
  for (const student of students)
    studentContainer.innerHTML += createStudentComponent(
      student.name,
      student.subject,
      student.info,
      student.score
      );
console.log(studentContainer);

// Refactor to pass studentContainer an Object:
const createStudentComponent = ({ name, subject, info, score }) => {
    return `
    <div class="student">
      <h1 class="xx-large ${score < 60 ? 'failing' : 'passing'}">${name}</h1>
        <section class="bordered dashed section--padded">${subject}</section>
            <aside class="pushRight">${info}</aside>
            <section>${score}</section>
    </div>
    `
};

const studentContainer = document.querySelector("#container");
students.forEach(student => {
  studentContainer.innerHTML += createStudentComponent(student);
});
*/

// write functions that build sub components for the larger student component.
function h1(name) {
    return `
    <h1 class="xx-large">${name}
    </h1>
    `
}

function section(subject) {
    return `
    <section class="bordered dashed section--padded">${subject}
    </section>
    `
}

function aside(info) {
    return `
    <aside class="pushRight">${info}
    </aside>
    `
}

const createStudentComponent = ({ name, subject, info, score }) => {
    return `
      <div class="student">
      ${h1(name)}
      ${section(subject)}
      ${aside(info)}
      <section>${score}</section>
      </div>
      `
};
const studentContainer = document.querySelector("#container");
students.forEach(student => {
  studentContainer.innerHTML += createStudentComponent(student);
});
