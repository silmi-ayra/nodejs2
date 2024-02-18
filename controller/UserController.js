//controller/UserController
import { getdbUserAll, getdbUserId, createdbUser } from "../models/UserModelDm.js";

const HttpStatus = {
  OK: { code: 200, status: 'OK' },
  CREATED: { code: 201, status: 'CREATED' },
  NO_CONTENT: { code: 204, status: 'NO_CONTENT' },
  BAD_REQUEST: { code: 400, status: 'BAD_REQUEST' },
  NOT_FOUND: { code: 404, status: 'NOT_FOUND' },
  INTERNAL_SERVER_ERROR: { code: 500, status: 'INTERNAL_SERVER_ERROR' }
};

function ResponseServer(statusCode, httpStatus, message, data) {
  return ({
    timeStamp: new Date().toLocaleString(),
    response: data,
    metaData: {
      status: httpStatus,
      code: statusCode,
      message
    }
  })
}

// 1 find all Data User 
export const getPatients = (req, res) => {
  try {
    //1. Get all Data User
    const data = getdbUserAll()
    console.log(data);
    //1a. Jika Data Kosong
    if (!data || data.length === 0) {
      return res.status(HttpStatus.OK.code)
        .send(ResponseServer(HttpStatus.NO_CONTENT.code, HttpStatus.NO_CONTENT.status, "tidak ada Data User", data));
    }
    //1b. Jika Terdapat Isi Data
    return res.status(HttpStatus.OK.code)
      .send(ResponseServer(HttpStatus.OK.code, HttpStatus.OK.status, "get all Data User", data));
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
      .send(ResponseServer(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status, `Error occurred ${error.message}`));
  }
}

// 2. Get Data User by id
export const getPatient = (req, res) => {
  console.log("req by id");
  try {
    const data = getdbUserId(req.params.id)
    console.log(data);
    //2a. Jika Data Kosong
    if (!data || data.length === 0) {
      return res.status(HttpStatus.OK.code)
        .send(ResponseServer(HttpStatus.NO_CONTENT.code, HttpStatus.NO_CONTENT.status, "tidak ada Data User", data));
    }
    //2b. Jika Terdapat Isi Data
    return res.status(HttpStatus.OK.code)
      .send(ResponseServer(HttpStatus.OK.code, HttpStatus.OK.status, "get Data User by ID", data));
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
      .send(ResponseServer(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status, `Error occurred ${error.message}`));
  }
}

// 3. add new Data User
export const createPatient = (req, res) => {
  const dataUser = req.body;
  if (!dataUser.email || !dataUser.password) {
    return res.status(HttpStatus.BAD_REQUEST.code)
      .send(ResponseServer(HttpStatus.BAD_REQUEST.code, HttpStatus.BAD_REQUEST.status, "Anda mengirimkan data yang salah", null));
  }
  try {
    const data = createdbUser(dataUser)
    console.log(data, typeof (data), data.length);
    res.status(HttpStatus.CREATED.code)
      .send(ResponseServer(HttpStatus.CREATED.code, HttpStatus.CREATED.status, 'Data User Created', data));
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
      .send(ResponseServer(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status, `Error occurred ${error.message}`));
  }
}

// 6. Find all aktif Data User
export const getPatientsAktif = (req, res) => {
  res.status(HttpStatus.OK.code)
    .send(ResponseServer(HttpStatus.OK.code, HttpStatus.OK.status, " find all aktif Data User", []));
}
// 5. Remove Data User by id
export const deletePatient = (req, res) => {
  res.status(HttpStatus.OK.code)
    .send(ResponseServer(HttpStatus.OK.code, HttpStatus.OK.status, `remove Data User : ${req.params.id}`, []));
}
// 4. Update Data User by id
export const updatePatient = (req, res) => {
  res.status(HttpStatus.OK.code)
    .send(ResponseServer(HttpStatus.OK.code, HttpStatus.OK.status, `update Data User : ${req.params.id}`, req.body));
}
