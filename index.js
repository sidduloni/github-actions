import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => {
    return res.json({ msg: 'Hello from automated CI/CD deployment v2\n' })
})

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`)
})