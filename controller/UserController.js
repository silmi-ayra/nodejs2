//controller/UserController

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

// 1, 7. Find all Data User which email contains "dua2@gmail.com"
export const getPatients = (req, res) => {
  if (req.query.email === undefined) {
    res.status(HttpStatus.OK.code)
      .send(ResponseServer(HttpStatus.OK.code, HttpStatus.OK.status, "get all Data User", []));
  } else {
    res.status(HttpStatus.OK.code)
      .send(ResponseServer(HttpStatus.OK.code, HttpStatus.OK.status, `get all Data User, email : ${req.query.email}`, []));
  }
}
// 6. Find all aktif Data User
export const getPatientsAktif = (req, res) => {
  res.status(HttpStatus.OK.code)
    .send(ResponseServer(HttpStatus.OK.code, HttpStatus.OK.status, " find all aktif Data User", []));
}
// 3. Add new Data User
export const createPatient = (req, res) => {
  res.status(HttpStatus.OK.code)
    .send(ResponseServer(HttpStatus.OK.code, HttpStatus.OK.status, "add new Data User", req.body));
}
// 2. Get Data User by id
export const getPatient = (req, res) => {
  res.status(HttpStatus.OK.code)
    .send(ResponseServer(HttpStatus.OK.code, HttpStatus.OK.status, `get Data User : ${req.params.id}`, []));
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
