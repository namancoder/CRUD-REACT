import axios from "axios";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const url = "http://127.0.0.1:3003/users";
const usersCollectionRef = collection(db, "users");

export const getUsers = async () => {
  return await axios.get(url);
};

export const addUser = async (user) => {
  return await axios.post(url, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export const addFirebaseUser = async (user) => {
  await addDoc(usersCollectionRef, {
    name: user.name,
    age: user.age,
    email: user.email,
    phone: user.phone,
  });
};
