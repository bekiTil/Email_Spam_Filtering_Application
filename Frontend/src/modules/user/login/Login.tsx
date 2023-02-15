import { Button, TextField } from "@material-ui/core";
import Image from "next/image";

import styled from "styled-components";
import { useState } from "react";
import { signin } from "api/authentication";
import { useDispatch,useSelector } from "react-redux";
import { login } from "stores/userSlice";



const Login = () => {
  const dispatch = useDispatch()
  // const { signInGoogle } = useStore().userStore;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: any) => {
    signin(email, password)
    .then((data)=> {
      
      console.log(data)
    
    return data.json() })
    .then((data) => {
      console.log(data)
      if (data.ok){

      
      dispatch(
        login({
          user: data.data.username,
          password: data.data.password,
          loggedIn: true,
        })
      
      )
      }
    });
    e.preventDefault();
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <Image
          src="/images/brand.jpg"
          alt="brand"
          objectFit="contain"
          width={355}
          height={200}
        />

        <TextField
          margin="normal"
          fullWidth
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          margin="normal"
          fullWidth
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Sign In
          </Button>
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Login;

const StyledWrapper = styled.div`
  background-color: #f2f2f2;
  display: grid;
  place-items: center;
  height: 100vh;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
