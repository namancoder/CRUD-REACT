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
import { addUser } from "../Service/api";
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
      await addUser(user);
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
      />
      <FormControlLabel control={<Switch />} label="MongoDB" />
      <Button variant="contained" onClick={() => addUserDetails()}>
        Add
      </Button>
    </FormGroup>
  );
};

export default AddContact;
