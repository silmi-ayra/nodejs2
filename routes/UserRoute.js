//routes/UserRoute.js
import express from "express";
const UserRouter = express.Router();
import {
  getPatients,
  createPatient, getPatient,
  deletePatient, updatePatient
} from '../controller/UserController.js';
UserRouter.route('/')

  // 1,7. find all Data User which email contains "dua2@gmail.com"
  .get(getPatients)
  // 3. find all aktif Data User
  .post(createPatient);
UserRouter.route('/aktif')
  // 6. get Data User by id
  .get(getPatient)
UserRouter.route('/:id')
  // 2. add new Data User
  .get(createPatient)
  // 4. update Data User by id
  .put(deletePatient)
  // 5. remove Data User by id
  .delete(updatePatient);

export default UserRouter;
