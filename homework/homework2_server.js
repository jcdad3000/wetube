import express from 'express'

const app = express()

const URLLogger = (req, res, next) => {
  console.log(`PATH : ${req.path}`)
  next()
}

const timeLogger = (req, res, next) => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDay()

  console.log(`Time : ${year}.${month}.${day}`)
  next()
}

const securityLogger = (req, res, next) => {
  if (req.protocol === 'https') {
    console.log('secure')
  } else {
    console.log('insecure')
  }
  next()
}

const protectorMiddleware = (req, res, next) => {
  if (req.path === '/protected') {
    return res.send('Do not Allowed')
  }

  next()
}

app.use(URLLogger, timeLogger, securityLogger, protectorMiddleware)
app.get('/', (req, res) => res.send('<h1>Home</h1>'))
app.get('/protected', (req, res) => res.send('<h1>Protected</h1>'))

// Codesandbox gives us a PORT :)
app.listen(process.env.PORT, () => `Listening!✅`)
