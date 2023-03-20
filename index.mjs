import expres from 'express'
const app = expres()

import { PornHub } from 'pornhub.js'

import cors from 'cors'
app.use(cors({
    origin: '*',
}))

app.get('/', (req, res) => {
    (async function () {
        const pornhub = new PornHub()
    
        const result = await pornhub.searchVideo('tokyo hot')
        console.log(result.data[0]) 
        
      res.send(result.data[0]);
     })()
})
app.listen(process.env.PORT || 3000)