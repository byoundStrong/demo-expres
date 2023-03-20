import expres from 'express'
const app = expres()

import cors from 'cors'
app.use(cors({
    origin: '*',
}))

app.get('/', (req, res) => {
    console.log("have request!")
    res.send('Hello World')
})
app.listen(process.env.PORT || 3000)