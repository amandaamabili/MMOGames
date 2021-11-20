import { Button, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { styled } from '@mui/styles';





 const Containerhome = styled(Container)({
 
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  

});
 

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #B85252 30%, #F58840 90%)',
  border: 0,
  borderRadius: 50,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: '#EADEDE',
  height: 48,
  width: '20%',
  padding: '0 30px',
 
});


export const Home = () => {
  const navigate = useNavigate();

  return (

    
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: `#000000`,
        color: "#EADEDE",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textTransform: "uppercase",
        fontSize: "2rem",
      }}

    >
     
      <Containerhome>
      
      <MyButton color="primary" variant="contained" size="large" onClick={() => navigate("/games")}>
          ENTRAR
        </MyButton>
        <h1 style={{
          color: "#F58840",
          fontSize: "3.5rem",
        }}>Seja bem vindo ao DevInMMO</h1>
       
       <p style={{
          color: "#EADEDE",
          alignItems: "center",
        }}>Um sistema desenvolvido para você !</p>
        
        
      </Containerhome>

   
    </div>
  );
};
