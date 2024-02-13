//routes/UserRoute.js
import express from "express";
const UserRouter = express.Router();
import {
  getPatients, getPatientsAktif,
  createPatient, getPatient,
  deletePatient, updatePatient
} from '../controller/UserController.js';
UserRouter.route('/')

  // 1,7. find all Data User which email contains "dua2@gmail.com"
  .get(getPatients)
  // 6. find all aktif Data User
  .post(createPatient);
UserRouter.route('/aktif')
  // 2. get Data User by id
  .get(getPatientsAktif)
UserRouter.route('/:id')
  // 3. add new Data User
  .get(getPatient)
  // 4. update Data User by id
  .put(updatePatient)
  // 5. remove Data User by id
  .delete(deletePatient);

export default UserRouter;
