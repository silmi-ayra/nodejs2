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
export const getPatiens = (req, res) => {
  if (req.query.email === undefined) {
  }
}
// 6. Find all aktif Data User
// 3. Add new Data User
// 2. Get Data Pasien by id
// 5. Remove Data User by id
// 4. Update Data User by id