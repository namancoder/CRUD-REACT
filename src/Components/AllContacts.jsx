import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Button,
  Switch,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Service/api";
import { makeStyles } from "@material-ui/styles";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "&  > *": { backgroundColor: "#2F2FA2", fontSize: "20px", color: "white" },
  },
  row: {
    "&  > *": { fontSize: "20px" },
  },
});

const AllContacts = () => {
  const [users, setUsers] = useState([]);
  const [firebaseusers, setFirebaseUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const [toggle, setToggle] = useState(true);
  const toggleChecked = function () {
    setToggle((toggle) => !toggle);
    getAllUsers();
    getAllFirebaseUsers();
  };

  const classes = useStyles();
  useEffect(() => {
    getAllUsers();
    getAllFirebaseUsers();
  }, []);

  const getAllFirebaseUsers = async () => {
    const firedata = await getDocs(usersCollectionRef);
    //console.log(firedata.docs[0].data().age);
    setFirebaseUsers(
      firedata.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  const getAllUsers = async () => {
    const r = await getUsers();
    console.log(r.data);
    setUsers(r.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const deleteFirebaseUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };
  return (
    <div>
      <Typography variant="h3" style={{ margin: 10 }}>
        {toggle && "Firebase Storage"}
        {!toggle && "Local Storage"}
      </Typography>
      {toggle && (
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => toggleChecked()}
                >
                  Change Storage
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {firebaseusers.map((user) => (
              <TableRow className={classes.row}>
                <TableCell key={user.id}>{user.id}</TableCell>
                <TableCell key={user.name}>{user.name}</TableCell>
                <TableCell key={user.email}>{user.email}</TableCell>
                <TableCell key={user.phone}>{user.phone}</TableCell>
                <TableCell key={user.age}>{user.age}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => deleteFirebaseUser(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {!toggle && (
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => toggleChecked()}
                >
                  Change Storage
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow className={classes.row}>
                <TableCell key={user.id}>{user.id}</TableCell>
                <TableCell key={user.name}>{user.name}</TableCell>
                <TableCell key={user.email}>{user.email}</TableCell>
                <TableCell key={user.phone}>{user.phone}</TableCell>
                <TableCell key={user.age}>{user.age}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteUserData(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default AllContacts;
