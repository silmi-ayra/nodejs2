PELAJARAN NODE JS

1. Membuat Repository di github : nodejs2

git@github.com:silmi-ayra/nodejs2.git

```
echo "# nodejs2" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:silmi-ayra/nodejs2.git
git push -u origin main

git remote add origin git@github.com:silmi-ayra/nodejs2.git
git branch -M main
git push -u origin main
```

2. Membuat Perispan Folder

```
mkdir nodejs2
cd nodejs2
npm init -y
npm i express cors ip
npm i nodemon -D
```

3. Update Package.json

```
{
  "name": "api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "ip": "^1.1.8"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
```

4. Running Server Index.js

```
//index.js
import express from "express";
import ip from "ip";

const app = express();
const PORT = 3500;

app.listen(PORT, () => console.log(`Server running on: ${ip.address()}: ${PORT}`))
```

5. Tambahkan .gitignore

```
node_modules
build
npm-debug.log
.nyc
.env
.DS_Store
```

6. Cara push ke github brach pelajaran 1

```
git config --global user.name “silmi”
git config --global user.email “silmi.ayra@gmail.com”

git init
git add .
git commit -m "jalankan server"
git branch -M pelajaran1
git remote add origin git@github.com-silmi:silmi-ayra/nodejs2.git
git push -u origin pelajaran1
```

7. Membuat branch pelajaran2

```
git branch -M pelajaran2
git checkout pelajaran2
git branch

git add .
git commit -m "response string"
git push -u origin pelajaran2
```

8. Response String

```
const app = express();

//GET RESPONSE => STRING
app.get('/', (req, res, next) => {
  res.send('Response tanpa Router')
})
app.use(express.json())

const PORT = 3500

app.listen(PORT, () => console.log(`Server running on: ${ip.address()}: ${PORT}`))
```

9. Membuat Request.rest

```
#### 0. Response Server
GET http://localhost:3500/
```

10. Membuat Branch Pelajaran3

```
git branch -M pelajaran3
git checkout pelajaran3
git branch

git add .
git commit -m "response object"
git push -u origin pelajaran3
```

11. Response Qbject

```
//ROUTER => GET RESPONSE => OBJECT
const dtuser1 = {
  email: "satu1@gmail.com",
  password: "123456789",
}
router.get('/', (req, res, next) => {
  res.json({
    message: 'GET Data User Sukses',
    data: dtuser1
  })
})
// ROUTER => GET RESPONSE => STRING
router.post('/', (req, res, next) => {
  res.json({
    message: 'POST Data User Sukses',
    data: req.body
  })
})
app.use("/dtuser", router)
```

12. Membuat Request.rest

```
// request.rest
### GET /
GET http://localhost:3500/

### GET /dtuser
GET http://localhost:3500/dtuser

### POST /
POST http://localhost:3500/dtuser
content-type: application/json

{
  "email": "dua2@gmail.com",
  "password": "asdfghj"
}
```

14. Membuat Branch Pelajaran4

```
git branch -M pelajaran4
git checkout pelajaran4
git branch

git add .
git commit -m "route"
git push -u origin pelajaran4
```

15. Membuat Tabel

```
//models/SiswaModelDm.js
let dbUser = [
  {
    id: 1,
    email: "satu1@gmail.com",
    password: "123456789",
    aaktif: true
  }, {
    id: 2,
    email: "dua2@gmail.com",
    password: "abcdefg",
    aaktif: false
  }, {
    id: 3,
    email: "tiga3@gmail.com",
    password: "asdiloveufgh",
    aaktif: true
  }
]

// 1. Find all Data User
export const getdbUserAll = () => {
  return dbUser
}
```

16. Route

```
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
```

17. Mengubah Index.js

```
//index.js
import express from "express";
import ip from "ip";
import UserRouter from "./routes/UserRoute.js";
const app = express();

//GET RESPONSE => STRING
app.get('/', (req, res, next) => {
  res.send('Response tanpa Router')
})
app.use(express.json())

app.use("/dtuser", UserRouter)

const PORT = 3500

app.listen(PORT, () => console.log(`Server running on: ${ip.address()}: ${PORT}`))
```

18. Membuat Request.rest

```
// request.rest
###
GET http://localhost:3500/

### 1. Get all Data User
GET http://localhost:3500/dtuser

### 2. Get Data User by id
GET http://localhost:3500/dtuser/2

### 3. Add new Data User
POST http://localhost:3500/dtuser
content-type: application/json

{
  "email": "empat4@gmail.com",
  "password": "asdfghj"
}

### 4. Update Data User by id
PUT http://localhost:3500/dtuser/3
content-type: application/json

{
  "email": "tiga3@gmail.com",
  "password": "asdfghj"
}

### 5. Remove Data User by id
DELETE http://localhost:3500/dtuser/2

### 6. Find all aktif Data User
GET http://localhost:3500/dtuser/aktif

### 7. Find all aktif Data User which email contains "dua2@gmail.com"
GET http://localhost:3500/dtuser?email=dua2@gmail.com
```

19. Membuat Branch Pelajaran5

```
git branch -M pelajaran5
git checkout pelajaran5
git branch

git add .
git commit -m "controller"
git push -u origin pelajaran5
```

20. Controller

```
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
```

21. Refactoring route

```
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
```

22. Membuat Branch Pelajaran6

```
git branch -M pelajaran6
git checkout pelajaran6
git branch

git add .
git commit -m "mockup data > Get All data"
git push -u origin pelajaran6
```

23. Model mockup data (dummy) => READ ALL DATA

```
//controller/UserController
import { getdbUserAll } from "../models/UserModelDm.js";

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
```

24. Membuat Branch Pelajaran7

```
git branch -M pelajaran7
git checkout pelajaran7
git branch

git add .
git commit -m "mockup data > Get data by id"
git push -u origin pelajaran7
```

25. Model mockup data (dummy) => GET DATA/id

```
//controller/UserController
import { getdbUserAll, getdbUserId } from "../models/UserModelDm.js";
.............................
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

//models/SiswaModelDm.js
// 2. Get Data User bi id
export const getdbUserId = (id) => {
  return dbUser.find((dbUser) =>
    dbUser.id === parseInt(id))
}
```

26. Membuat Branch Pelajaran8

```
git branch -M pelajaran8
git checkout pelajaran8
git branch

git add .
git commit -m "mockup data > add data"
git push -u origin pelajaran8
```

27. Model mockup data (dummy) => CREATE DATA

```
//models/SiswaModelDm.js
// 3. add new Data User
export const createdbUser = (dataUser) => {
  const id = uuid()
  dbUser.push({ ...dataUser, id, aktif: true });
  return id
}

//controller/UserController
import { getdbUserAll, getdbUserId, createdbUser } from "../models/UserModelDm.js";
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
```
