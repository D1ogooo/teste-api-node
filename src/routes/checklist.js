const express = require('express')
const Checklist = require('../routes/models/checklist')
const router = express.Router()

router.get('/', (req, res) => {
  console.log("Rota GET")
  res.send()
})

router.post('/', async(req,res) => {
 let { name } = req.body
  try {
  let Created = Checklist.create({name})
  console.log("Adicionado ao banco com sucesso!")
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', (req, res) => {
  console.log(req.params)
  res.status(200).send(req.params.id)
})

router.put('/:id', async (req, res) => {
  let { name } = req.body

  try {
    let checklist = await Checklist.findByIdAndUpdate(req.params.id, { name }, { new: true })
  } catch (error) {
    res.status(422).json(error)
  }
})
router.delete('/:id', (req, res) => {
  console.log(req.body)
  res.send(`DELETE ID: ${req.params.id}`)
})

module.exports = router