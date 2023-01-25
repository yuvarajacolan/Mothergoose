import React from "react";
import mgimg from "../../assets/images/newedwer.jpg";
import mguserimg from "../../assets/images/wom.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    
  </Box>
);

const Login = () => {
  const rdnav = () => {
    navigate("/navbar");
  };
  const navigate = useNavigate();
  return (
    <div>
      <div class="container">
        <div class="img">
          <img src={mgimg} alt="#" />
        </div>
        <div class="login-content">
          <form action="index.html">
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <img src={mguserimg} alt="#" />

                <h2 class="title">Log In</h2>
                <div>
                  <div class="i">
                    <i class="fas fa-user"></i>
                  </div>
                  <Box>
                    <TextField
                      fullWidth
                      id="standard-basic"
                      label="User name"
                      variant="standard"
                    />
                  </Box>
                </div>
                <div style={{ marginTop: "12px" }}>
                  <div class="i">
                    <i class="fas fa-user"></i>
                  </div>
                  <Box>
                    <TextField
                      fullWidth
                      id="standard-basic"
                      label="Password"
                      variant="standard"
                    />
                  </Box>
                </div>
                <input
                  type="submit"
                  class="btn"
                  value="Login"
                  onClick={rdnav}
                />
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
