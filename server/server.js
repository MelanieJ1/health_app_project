const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())

const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router.js')

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('health_data')
    const medicationsCollection = db.collection('medications')
    const medicalImagesCollection = db.collection('medicalImages')
    const medicalResultsCollection = db.collection('medicalResults')
    const medicationsRouter = createRouter(medicationsCollection)
    const medicalImagesRouter = createRouter(medicalImagesCollection)
    const medicalResultsRouter = createRouter(medicalResultsCollection)
    app.use('/api/medications', medicationsRouter);
    app.use('/api/images', medicalImagesRouter);
    app.use('/api/results', medicalResultsRouter);
  })
  .catch(console.err)

app.listen(9000, function () {
  console.log(`Listening on port ${this.address().port}`)
})