import {
  FormControlLabel,
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  Checkbox,
  Switch,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { addUser, addFirebaseUser } from "../Service/api";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "&  > *": { marginTop: 20 },
  },
});

const initalUser = {
  name: "",
  email: "",
  phone: "",
  age: "",
};

const AddContact = () => {
  const [user, setUser] = useState(initalUser);
  const { name, email, phone, age } = user;
  const classes = useStyles();

  const [toggleLocal, setToggleLocal] = useState(true);
  const toggleCheckedLocal = function () {
    setToggleLocal((toggle) => !toggle);
  };

  const [toggleFirebase, setToggleFirebase] = useState(false);
  const toggleCheckedFirebase = function () {
    setToggleFirebase((toggle) => !toggle);
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    console.log(user);

    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    if (
      user.age.length === 0 ||
      user.name.length === 0 ||
      user.email.length === 0 ||
      user.phone.length === 0
    ) {
      alert("Please fill all the fields");
    } else {
      if (toggleLocal) await addUser(user);
      if (toggleFirebase) await addFirebaseUser(user);
      navigate("/");
    }
  };

  const navigate = useNavigate();
  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add Contact</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={email} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
      </FormControl>
      <FormControl>
        <InputLabel>Age</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="age" value={age} />
      </FormControl>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Local Storage"
        onChange={() => toggleCheckedLocal()}
      />
      <FormControlLabel
        control={<Switch />}
        label="Firebase"
        onChange={() => toggleCheckedFirebase()}
      />
      <Button variant="contained" onClick={() => addUserDetails()}>
        Add
      </Button>
    </FormGroup>
  );
};

export default AddContact;
