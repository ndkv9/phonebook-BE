const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('<h3>Welcome!</h3>')
})

const PORT = 3001
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
