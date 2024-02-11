//routes/UserRoute.js
import express from "express";

const UserRouter = express.Router();
// 1,7. find all Data User which email contains "dua2@gmail.com"
UserRouter.get('/', (req, res, next) => {
  if (req.query.email === undefined) {
    res.json({ metadata: 'get all Data User' })
  } else {
    res.json({ metadata: `get all Data User,email : ${req.query.email}` })
  }
})
// 6. find all aktif Data User
UserRouter.get('/aktif', (req, res, next) => {
  res.json({ metadata: 'get all Data User AKTIF' })
})
// 2. get Data User by id
UserRouter.get('/:id', (req, res, next) => {
  res.json({ metadata: `get Data User by id : ${req.params.id}` })
})
// 3. add new Data User
UserRouter.post('/', (req, res, next) => {
  res.json({ metadata: "add new Data User", data: req.body })
})
// 4. update Data User by id
UserRouter.put('/:id', (req, res, next) => {
  res.json({
    metadata: `update Data User by id : 
${req.params.id}`, data: req.body
  })
})
// 5. remove Data User by id
UserRouter.delete('/:id', (req, res, next) => {
  res.json({ metadata: `remove Data User by id : ${req.params.id}` })
})
export default UserRouter;
