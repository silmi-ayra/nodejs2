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
