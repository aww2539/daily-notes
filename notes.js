const notes = [
    {
        id: 1,
        subject: "Arrays and Objects",
        date: "July 15th",
        feeling: "So far so good",
        timeSpect: "2 hours",
    },
]

const js2 = {
    id: 1,
    subject: "Pushing into arrays",
    date: "July 15th",
    feeling: "Moving along well",
    timeSpect: "1 hour", 
}

notes.push(js2)

for (const note of notes) {
    console.log(note.subject);
    console.log(note.date);
    console.log(note.feeling);
    console.log('')
}