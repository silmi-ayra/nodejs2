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
  // 2. add new Data User
  .get(getPatient)
  // 3. find all aktif Data User
  .post(createPatient)
UserRouter.route('/aktif')
  // 4. remove Data User by id
  .delete(deletePatient)
  // 5. update Data User by id
  .put(updatePatient)
  // 6. get Data User by id
  .get(getPatientsAktif)
UserRouter.route('/:id')

export default UserRouter;
