
const corsMiddleware = require('./middleware/cors.middleware')

app.use(corsMiddleware)
    
const CONTACTS = [
    {id: v4(),
    name: 'Александр',
    value: '+7-999-999-00-43',
    marked: false
    }
]
app.use(express.json())
//GET
app.get('api/contacts', (req, res) => {
    try {res.status(200).json(CONTACTS)}
    catch(e) {
        console.log(e)
    }
    
})

//POST
app.post('api/contacts', (req, res) => {
    const contact = {...req.body, id: v4(), marked: false}
    CONTACTS.push(contact)
    res.status(201).json(contact)
})
//DELETE
app.delete('api/contacts/:id', (req, res) => {
    CONTACTS = CONTACTS.filter(c => c.id !== req.params.id)
    res.status(200).json({message: 'Контакт был удален'})
})
//PUT 
app.delete('api/contacts/:id', (req, res) => {
    const idx = CONTACTS.findIndex(c => c.id === req.params.id)
    CONTACTS[idx] = req.body
    res.json(CONTACTS.idx)
})



app.use(express.static(path.resolve(__dirname, 'client')))
app.use(express.json())


app.listen(3003, () => console.log('Server has been started on port 3003...'))