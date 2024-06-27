const express = require(`express`)
const morgan = require(`morgan`)
const cors = require(`cors`)
const { productos } = require("./bd.js")
const app = express()
const PORT = 3000

app.use(express.json())
app.use(morgan(`dev`))
app.use(cors())

app.listen(PORT, () => {
    console.log("Se inicio el servidor")
})

//Devuelve la lista completa 

app.get('/', (req, res) => {
    res.json(productos)
})

//Devuelve un único producto según el id

app.get('/products/:id', (req, res) => {
    const { id } = req.params
    const prod = productos.find(prod => prod.id == id)
    res.json(prod)
})

//agregar un nuevo producto

app.post('/products', (req, res) => {
    const { nombre, precio } = req.body
    const id = productos.length + 1
    productos.push({ id, nombre, precio })
    res.send('Se ha agregado un nuevo producto.')
})

//actualizar  producto

app.put('/products/:id', (req, res) => {
    const { nombre, precio } = req.body;
    const id = req.params.id;
    productos.forEach(prod => {
        if (prod.id == id) {
            prod.nombre = nombre;
            prod.precio = precio;
        }
    });
    res.send('Se actualizo correctamente')
}) 

//eliminar un producto por su id

app.delete('/products/:id', (req, res) => {
    const { id } = req.params
    productos.forEach((prod, index) => {
        if (prod.id == id) {
            productos.splice(index, 1)
        }
    })
    res.send('El producto fue eliminado.')
})



