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

// create new entry that is saved to the DB
app.post('/api/persons', (req, res) => {
	const body = req.body

	if (!body.name || !body.number) {
		return res.status(400).json({
			error: 'missing name or number',
		})
	}

	const person = new Person({
		name: body.name,
		number: body.number,
	})

	person.save().then(savedPerson => res.json(savedPerson))
})

// fetching all phonebook entries from DB
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

// delete phonebook entry from DB base on its id
app.delete('/api/persons/:id', (req, res, next) => {
	const id = req.params.id
	Person.findByIdAndRemove(id)
		.then(result => res.status(204).end())
		.catch(err => next(err))
})

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
