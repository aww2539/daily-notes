const notes = [
    {
        id: 1,
        subject: "arrays and objects",
        date: "July 15th",
        feeling: "so far so good",
        timeSpent: "2 hours",
    },
]

const js2 = {
    id: 2,
    subject: "pushing into arrays",
    date: "July 15th",
    feeling: "moving along well",
    timeSpent: "1 hour", 
}

const js3 = {
    id: 3,
    subject: "interpolated strings",
    date: "July 15th",
    feeling: "very good",
    timeSpent: "30 minutes",
}

const js4 = {
    id: 4,
}

const js5 = {
    id: 5,
}

notes.push(js2)
notes.push(js3)

for (const note of notes) {
    console.log(note.subject);
    console.log(note.date);
    console.log(note.timeSpent);
    console.log(`On ${note.date}, I learned ${note.subject} in about ${note.timeSpent}.`)
    console.log('')
}