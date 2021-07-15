const notes = [
    {
        id: 1,
        subject: "arrays and objects",
        date: "July 15th",
        feeling: "not too bad",
        timeSpent: "2 hours",
    },
]

const js2 = {
    id: 2,
    subject: "pushing into arrays",
    date: "July 15th",
    feeling: "pretty good",
    timeSpent: "1 hour", 
}

const js3 = {
    id: 3,
    subject: "interpolated strings",
    date: "July 15th",
    feeling: "very good",
    timeSpent: "30 minutes",
}

// const js4 = {
//     id: 4,
// }

// const js5 = {
//     id: 5,
// }

notes.push(js2)
notes.push(js3)
// notes.push(js4)
// notes.push(js5)

for (const note of notes) {
    console.log(`Note ${note.id}`);
    console.log(note.date);
    console.log(`I learned ${note.subject}.
I spent ${note.timeSpent} working on it.
I felt ${note.feeling}.
 ------------
`)
}