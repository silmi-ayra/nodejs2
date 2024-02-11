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
