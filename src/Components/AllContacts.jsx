import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Service/api";
import { makeStyles } from "@material-ui/styles";

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

  const classes = useStyles();
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const r = await getUsers();
    console.log(r.data);
    setUsers(r.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Age</TableCell>
          <TableCell></TableCell>
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
  );
};

export default AllContacts;
