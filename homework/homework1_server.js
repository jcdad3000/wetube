import express from 'express'

const PORT = 4055
const app = express()

app.get('/', (req, res) => {
  return res.send('<h1>This is route page</h1>')
})
app.get('/about', (req, res) => {
  return res.send('<h1>This is about page</h1>')
})
app.get('/contact', (req, res) => {
  return res.send('<h1>This is contact page</h1>')
})
app.get('/login', (req, res) => {
  return res.send('<h1>This is login page</h1>')
})
app.listen(PORT, () => console.log('hello'))
