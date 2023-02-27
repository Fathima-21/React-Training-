import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";


const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  console.log(isSignup);
  const[inpust,setInpust]=useState({
    name:"",
    email:"",
    password:"",
  })
  const handleChange=(e)=>{
    setInpust((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value
    }))

  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(inpust);
  }
  const resetState=()=>{
    setIsSignup(!isSignup)
    setInpust({name: "",email: "",password: ""})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup? "Signup":"Login"}
          </Typography>
         {isSignup &&(<TextField
            onChange={handleChange}
            name="name"
            value={inpust.name}
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="name"
          />)}
          <TextField
             onChange={handleChange}
            name="email"
            value={inpust.email}
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="email"
          />
          <TextField
             onChange={handleChange}
            name="password"
            value={inpust.password}
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="password"
          />
          <Button type="submit" variant="contained" color="warning">
            {isSignup ? "SignUp":"Login"}
          </Button>
          <br />
          <Button variant="contained" onClick={resetState}>
          Change to  {isSignup? "Login": "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
