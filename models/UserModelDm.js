//models/SiswaModelDm.js
import { v4 as uuid } from 'uuid';

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

// 2. Get Data User bi id
export const getdbUserId = (id) => {
  return dbUser.find((dbUser) =>
    dbUser.id === parseInt(id))
}

// 3. add new Data User
export const createdbUser = (dataUser) => {
  const id = uuid()
  dbUser.push({ ...dataUser, id, aktif: true });
  return id
}

// 4. Delete Data User by is
export const deldbUserId = (id) => {
  dbUser = dbUser.filter((dbUser) => dbUser.id !== id)
  return dbUser
}

// 5. update Data User
export const updatedbUser = (id, dataUser) => {
  dbUser = dbUser.map(dbUser => {
    if (dbUser.id == id) {
      dbUser.nama = dataUser.nama;
    }
    return dbUser;
  })
  return dbUser
}

// 6. Find All Aktif Data User
export const getdbUserAktif = () => {
  return dbUser.filter((dbUser) => dbUser.aktif === true)
}