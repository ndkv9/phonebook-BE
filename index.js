const express = require('express')
const app = express()

app.use(express.json())

let persons = [
	{
		name: 'Arto Hellas',
		number: '040-123456',
		id: 1,
	},
	{
		name: 'Ada Lovelace',
		number: '39-44-5323523',
		id: 2,
	},
	{
		name: 'Dan Abramov',
		number: '12-43-234345',
		id: 3,
	},
	{
		name: 'Mary Poppendieck',
		number: '39-23-6423122',
		id: 4,
	},
]

const generateId = () => {
	return Math.floor(Math.random() * Math.floor(1000000))
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

app.get('/', (req, res) => {
	res.send('<h3>Welcome!</h3>')
})

app.get('/api/persons', (req, res) => {
	res.json(persons)
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

const PORT = 3001
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
