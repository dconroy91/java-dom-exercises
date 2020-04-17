// write some code to pront a student component to dom

// document.querySelector(".student-container").innerHTML += `
// <article> 
//        <h3>blah blah blah</h3>
//        </article>`


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
]

function studentComponent(student) {
    return `
        <article>
            <h1>${student.name}</h1>
            <div>${student.subject}</div>
            <div>${student.info}</div>
            <div>${student.score}</div>
            
        </article>
    `
}


// let studentString = ""
// for (let i = 0; i < students.length; i++) {
//     if (students[i].score >= 60) {
//         students[i].score = "Passing"
//     } else {
//         students[i].score = "Failing"
//     }
//     studentString = studentComponent(
//         students[i].name,
//         students[i].subject,
//         students[i].info,
//         students[i].score

// document.querySelector("#container").innerHTML += studentString;


for (let i = 0; i < students.length; i++) {
    let studentString = ""
    if (students[i].score >= 60) {
        studentString = `<div class="student">
        <h1 class="xx-large passing">${students[i].name}</h1>
        <section class="bordered dashed section--padded">Subject</section>
        <aside class="pushRight">Additional information</aside>
    </div>`

    } else {
        studentString = `<div class="student">
        <h1 class="xx-large failing">${students[i].name}</h1>
        <section class="bordered dashed section--padded">Subject</section>
        <aside class="pushRight">Additional information</aside>
    </div>`

    }
    document.querySelector("#container").innerHTML += studentString;
}

studentComponent(student[i])


const createStudentComponent = (student) => `
    <div id="student">
        ${element("h1", student.name, "xx-large passing")}
        ${element("section", student.subject, "bordered dashed section--padded")}
        ${element("aside", student.info, "pushRight")}
    </div>