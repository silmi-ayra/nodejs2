//routes/UserRoute.js
import express from "express";
const UserRouter = express.Router();
import {
  getPatients,
  createPatient, getPatient,
  deletePatient, updatePatient, getPatientsAktif
} from '../controller/UserController.js';
UserRouter.route('/')

  // 1. find all Data User which email contains "dua2@gmail.com"
  .get(getPatients)
  // 3. find all aktif Data User
  .post(createPatient);
UserRouter.route('/aktif')
  // 6. get Data User by id
  .get(getPatientsAktif)
UserRouter.route('/:id')
  // 2. add new Data User
  .get(getPatient)
  // 4. update Data User by id
  .put(updatePatient)
  // 5. remove Data User by id
  .delete(deletePatient);

export default UserRouter;
