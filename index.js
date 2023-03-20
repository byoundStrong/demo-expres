import expres from 'express'
const app = expres()

import cors from 'cors'
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})