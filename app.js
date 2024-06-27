const express = require(`express`)
const morgan = require(`morgan`)
const cors = require(`cors`)

const app = express()
const PORT = 3000

app.use(express.json())
app.use(morgan(`dev`))
app.use(cors())

app.listen(PORT, () =>{
    console.log("Se inicio el servidor")
} )