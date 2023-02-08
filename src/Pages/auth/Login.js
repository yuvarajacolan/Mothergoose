import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { router } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { signInApi } from "redux/action/authAction";
import { useFormik } from "formik";


// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//   </Box>
// );

const Login = () => {
  const dispatch = useDispatch();

  // const rdnav = () => {
  //   // navigate("/formpage");
  //   router.push("/home/dashboard")
  // };

  const loginFunction = () => {
    const reqBody = {
      username: "mg_admin",
      password: "Admin@123"
    }
    console.log("HELLO WROLD", reqBody)
    dispatch(signInApi(reqBody))
  }


  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: yup.object({
      userName: yup.string().required("Name is required"),
      password: yup
        .string()
        .required('Please Enter your password')
        // .matches(passRegExp,"Enter strong password")
        // .matches(passRegExp, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
    }),
    // onSubmit: (data) => {
    //   let newData = {
    //     user_name: data.fullName,
    //     password: data.password
    //   }
    //   console.log("==>", newData)
    //   loginPress(newData)

    //   // dispatch(LoginApiFun(newData));
    //   router.push("/auth/fingerprint");
    
    // },
  });

  const HelloWorld = () => {
    console.log("HELLO WORLD")
  }
  return (
    <div style={{ backgroundColor: '#e8f7fe' }}>
      <div className="container">
        <div className="img">
          <img src="/assets/images/newedwer.jpg" alt="#sdsdsd" />
        </div>
        <div className="login-content">
          <form >
            <Card sx={{ minWidth: 275, padding: "20px", backgroundColor: "#f2faff" }}>
              <CardContent>
                <img src="/assets/images/loginimg.png" alt="TOP IMAGE" />
                <h2 className="title" style={{ fontSize: '18px' }}>LOG In</h2>
                <div>
                  <Box>
                    <TextField
                      fullWidth
                      id="standard-basic"
                      label="User name"
                      variant="standard"
                      value={formik.values.userName}
                      onChange={formik.handleChange}
                      helperText={formik.touched.userName ? formik.errors.userName : null}
                      error={formik.touched.userName ? formik.errors.userName : null}
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
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      helperText={formik.touched.password ? formik.errors.password : null}
                      error={formik.touched.password ? formik.errors.password : null}
                    />
                  </Box>
                </div>
                <div className="col-sm-8 col-md-8" style={{ margin: "auto" }}>
                  <a className="dedcription-btn" href="#" onClick={()=>loginFunction()}>
                    <span  className="name-descripeion">Login</span>
                    <div className="btn-icon">
                      <i className="fa-solid fa-magnifying-glass-arrow-right"></i>{" "}
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </form>   
        </div>
      </div>
    </div>
  );
};

export default Login;
