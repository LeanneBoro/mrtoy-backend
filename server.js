

import express from 'express'
import cookieParser from 'cookie-parser'



const app = express()


app.use(express.static('public'))
app.use(cookieParser())
app.use(express.json())
// app.use(cors(corsOptions))





const PORT = 3030
app.listen(PORT, () =>
    console.log(`Server listening on port http://127.0.0.1:${PORT}/`)
)
