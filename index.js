require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const app = express()

morgan.token('body', (req, res) => {
	return JSON.stringify(req.body)
})

app.use(express.json())
app.use(morgan(':method :url :status - :response-time ms :body'))
app.use(cors())
app.use(express.static('build'))

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' })
}

app.post('/api/persons', (req, res) => {
	const body = req.body

	if (!body.name || !body.number) {
		return res.status(400).json({
			error: 'missing name or number',
		})
	}

	if (persons.map(person => person.name).includes(body.name)) {
		return res.status(400).json({ error: 'name must be unique' })
	}

	const person = {
		name: body.name,
		number: body.number,
		id: generateId(),
	}

	persons = persons.concat(person)

	res.json(person)
})

// fetching all phonebook entries
app.get('/api/persons', (req, res) => {
	Person.find({}).then(persons => res.json(persons))
})

app.get('/info', (req, res) => {
	res.send(`<p>Phonebook has info for ${persons.length} people</p>
  ${new Date().toString()}
  `)
})

app.get('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	const person = persons.find(person => person.id === id)

	if (!person) {
		res.status(404).end()
	}

	res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	const personToDelete = persons.find(person => person.id === id)
	persons = persons.filter(p => p.id !== personToDelete.id)

	res.status(204).end()
})

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
