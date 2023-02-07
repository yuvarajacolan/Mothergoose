import React from "react";
import mgimg from "../../assets/images/newedwer.jpg";
import mguserimg from "../../assets/images/loginimg.png";
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
    navigate("/formpage");
  };
  const navigate = useNavigate();
  return (
    <div style={{backgroundColor:'#e8f7fe'}}>
      <div class="container">
        <div class="img">
          <img src={mgimg} alt="#" />
        </div>
        <div class="login-content">
          <form action="index.html">
            <Card sx={{ minWidth: 275,padding:"20px",backgroundColor:"#f2faff" }}>
              <CardContent>
                <img src={mguserimg} alt="#" />
                <h2 class="title" style={{fontSize:'18px'}}>LOG In</h2>
                <div>
                 
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
                
                  <Box>
                    <TextField
                      fullWidth
                      id="standard-basic"
                      label="Password"
                      variant="standard"
                    />
                  </Box>
                </div>
                <div class="col-sm-8 col-md-8" style={{ margin: "auto" }}>
                    <a class="dedcription-btn" href="#" onClick={rdnav}>
                      <span class="name-descripeion">Login</span>
                      <div class="btn-icon">
                        <i class="fa-solid fa-magnifying-glass-arrow-right"></i>{" "}
                      </div>
                    </a>
                  </div>
                {/* <input
                  type="submit"
                  class="btn"
                  value="Login"
                  
                /> */}
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
