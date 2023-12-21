const express = require('express')
const app     = express()

let persons = [
    {
        id: 1,
        content: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        content: "Ada Lovelace",
        number: "39-44-5343532"
    },
    {
        id: 3,
        content: "Dan Abramov",
        number: "12-34-234345"
    },
    {
        id: 4,
        content: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h4>Osa3<h4>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, respomse) => {
    const currentDate   = new Date()
    const phonebookSize = persons.length

    respomse.send(`<p>Phonebook has info for ${phonebookSize} people</p><p>${currentDate}</p>`)

})

app.get('/api/persons/:id', (request, response) => {
    const personId = Number(request.params.id)
    const person   = persons.find(person => person.id === personId)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})