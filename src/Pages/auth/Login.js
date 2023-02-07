import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { router } from "next/router";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
  </Box>
);

const Login = () => {
  const rdnav = () => {
    // navigate("/formpage");
    router.push("/home/dashboard")
  };
  return (
    <div style={{backgroundColor:'#e8f7fe'}}>
      <div className="container">
        <div className="img">
            <img src={"../assets/images/newedwer.jpg"} alt="#" />
        </div>
        <div className="login-content">
          <form action="index.html">
            <Card sx={{ minWidth: 275,padding:"20px",backgroundColor:"#f2faff" }}>
              <CardContent>
                <img src={"../assets/images/loginimg.png"} alt="#" />
                <h2 className="title" style={{fontSize:'18px'}}>LOG In</h2>
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
                <div className="col-sm-8 col-md-8" style={{ margin: "auto" }}>
                    <a className="dedcription-btn" href="#" onClick={rdnav}>
                      <span className="name-descripeion">Login</span>
                      <div className="btn-icon">
                        <i className="fa-solid fa-magnifying-glass-arrow-right"></i>{" "}
                      </div>
                    </a>
                  </div>
                {/* <input
                  type="submit"
                  className="btn"
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
