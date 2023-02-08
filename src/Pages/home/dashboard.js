import React, { lazy, Suspense, useEffect } from 'react'
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BadgeIcon from "@mui/icons-material/Badge";
import Navbar from "<prefix>/components/Navbar";
import dynamic from 'next/dynamic'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { patientBarAction } from 'redux/slice/userSlice';
import { postPatientBarChatApi,postPatientEnrolledBarChatApi,postPatientAlcoholUsedPieChartApi, postPatientPieChartApi } from 'redux/action/userAction';


const Bargraph = dynamic(() => import("../../components/Bargraph"), { ssr: false });
const PieChart = dynamic(() => import("../../components/PieChart"), { ssr: false });



const Dashboard = () => {
    const dispatch = useDispatch();

    const [startdate, setStartDate] = React.useState(null);
    const [enddate, setEndDate] = React.useState(null);

    React.useEffect(() => {
        const reqBody = {
            "fromDate": "2022-02-01",
            "toDate": "2023-01-31"
        }
        console.log("HELLO WROLD", reqBody)
        // dispatch(postPatientBarChatApi(reqBody))
        // dispatch(postPatientEnrolledBarChatApi(reqBody))
       // dispatch(postPatientAlcoholUsedPieChartApi(reqBody))
        dispatch(postPatientPieChartApi(reqBody))




    }, [])

    const formik = useFormik({
        // enableReinitialize: true,
        initialValues: {
            startdate: "",
            enddate: "",
            patientID: "",
            provider: "",
            zipcode: "",
            insurancepayer: "",
            state: "",
        },
        validationSchema: Yup.object({
            // startdate: Yup.string().required("startdate is required"),
            // enddate: Yup.string().required("enddate is required"),
            patientID: Yup.string().required("patientID is required"),
            provider: Yup.string().required("provider is required"),
            zipcode: Yup.string().required("zipcode is required"),
            insurancepayer: Yup.string().required("insurancepayer is required"),
            state: Yup.string().required("state is required"),
        }),
        onSubmit: (values) => {
            // dispatch(signInApi(values));
            console.log(values, "====")
        },
    });
    return (
        <>
            <Navbar />
            <div>
                <div className="bg-img">

                    <div className="col-lg-5 col-md-8 col-xs-12 divcenter">

                        <Card
                            sx={{
                                minWidth: 275,
                                borderRadius: "10px",
                                boxShadow: "rgb(0 0 0 / 24%) 0px 3px 8px",
                                alignSelf: "left",
                                backgroundColor: "#fffdff",
                            }}
                        >
                            <h2
                                style={{
                                    fontWeight: "600",
                                    fontSize: "2rem",
                                    textAlign: "center",
                                    margin: "0.5rem 1rem",
                                    color: "#46adef",
                                }}
                            >
                                Mother Goose{" "}
                            </h2>
                            <h4
                                style={{
                                    textAlign: "center",
                                    color: "grey",
                                    fontSize: "16px",
                                    margin: "0.5rem 1rem",
                                }}
                            >
                                Please fill the details to find your report{" "}
                            </h4>
                            <CardContent>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack direction="row" spacing={4}>
                                        <DatePicker
                                            label="From Date"
                                            value={startdate}
                                            // value={formik.values.startdate}
                                            // onChange={formik.handleChange}
                                            name="startdate"
                                            type="date"
                                            // error={Boolean(
                                            //     formik.touched.startdate &&
                                            //     formik.errors.startdate
                                            // )}
                                            fullWidth
                                            // helpertext={
                                            //     formik.touched.startdate &&
                                            //     formik.errors.startdate
                                            // }
                                            // onBlur={formik.handleBlur}
                                            onChange={(newValue) => {
                                                setStartDate(newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    // InputProps={{
                                                    //   endAdornment: <CalendarMonthIcon />,
                                                    // }}
                                                    className="datePick"
                                                />
                                            )}
                                        />
                                        <DatePicker
                                            label="To Date"
                                            //value={formik.values.enddate}
                                            //onChange={formik.handleChange}
                                            name="enddate"
                                            type="date"
                                            // onBlur={formik.handleBlur}
                                            error={Boolean(
                                                formik.touched.enddate &&
                                                formik.errors.enddate
                                            )}
                                            // fullWidth
                                            // helpertext={
                                            //     formik.touched.enddate &&
                                            //     formik.errors.enddate
                                            // }
                                            value={enddate}
                                            className="datePick"
                                            onChange={(newValue) => {
                                                setEndDate(newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                // InputProps={{
                                                //   endAdornment: <CalendarMonthIcon />,
                                                // }}
                                                />
                                            )}
                                        />
                                    </Stack>
                                    <Stack
                                        direction={{ xs: "column", sm: "row" }}
                                        spacing={{ xs: 1, sm: 2, md: 6 }}
                                        sx={{ marginTop: "20px", width: "100%" }}
                                    >
                                        <TextField
                                            error={Boolean(
                                                formik.touched.patientID &&
                                                formik.errors.patientID
                                            )}
                                            fullWidth
                                            // helpertext={
                                            //     formik.touched.patientID &&
                                            //     formik.errors.patientID
                                            // }
                                            id="outlined-basic"
                                            label="MG Patient Id"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <BadgeIcon />,
                                            }}
                                            sx={{ width: "100%" }}
                                            name="patientID"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            type="text"
                                            value={formik.values.patientID}
                                        />
                                        <TextField
                                            error={Boolean(
                                                formik.touched.provider &&
                                                formik.errors.provider
                                            )}
                                            fullWidth
                                            // helpertext={
                                            //     formik.touched.provider &&
                                            //     formik.errors.provider
                                            // }
                                            name="provider"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            type="text"
                                            value={formik.values.provider}
                                            id="outlined-basic"
                                            label="Provider"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <PersonIcon />,
                                            }}
                                            sx={{ width: "100%" }}
                                        />
                                        <TextField
                                            error={Boolean(
                                                formik.touched.zipcode &&
                                                formik.errors.zipcode
                                            )}
                                            fullWidth
                                            // helpertext={
                                            //     formik.touched.zipcode &&
                                            //     formik.errors.zipcode
                                            // }
                                            name="zipcode"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            type="text"
                                            value={formik.values.zipcode}
                                            id="outlined-basic"
                                            label="Enter You ZIP code"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <LocationOnIcon />,
                                            }}
                                            sx={{ width: "100%" }}
                                        />
                                    </Stack>
                                    <Stack
                                        direction={{ xs: "column", sm: "row" }}
                                        spacing={{ xs: 1, sm: 2, md: 6 }}
                                        sx={{ marginTop: "20px", width: "100%" }}
                                    >
                                        <TextField
                                            error={Boolean(
                                                formik.touched.insurancepayer &&
                                                formik.errors.insurancepayer
                                            )}
                                            fullWidth
                                            // helpertext={
                                            //     formik.touched.insurancepayer &&
                                            //     formik.errors.insurancepayer
                                            // }
                                            name="insurancepayer"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            type="text"
                                            value={formik.values.insurancepayer}
                                            id="outlined-basic"
                                            label="Insurance Payer"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <PersonIcon />,
                                            }}
                                            sx={{ width: "100%" }}
                                        />
                                        <TextField
                                            error={Boolean(
                                                formik.touched.state &&
                                                formik.errors.state
                                            )}
                                            fullWidth
                                            // helpertext={
                                            //     formik.touched.state &&
                                            //     formik.errors.state
                                            // }
                                            name="state"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            type="text"
                                            value={formik.values.state}
                                            id="outlined-basic"
                                            label="State"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <LocationOnIcon />,
                                            }}
                                            sx={{ width: "100%" }}
                                        />
                                        {/* <TextField
                                             id="outlined-basic"
                                             label="Mode of Delivery"
                                             variant="outlined"
                                             select
                                             sx={{ width: "100%" }}
                                            /> */}
                                    </Stack>
                                    <div className="col-sm-4 col-md-4" style={{ margin: "auto" }}>
                                        <a className="dedcription-btn" href="#" onClick={formik.handleSubmit}>
                                            <span className="name-descripeion">Find</span>
                                            <div className="btn-icon">
                                                <i className="fa-solid fa-magnifying-glass-arrow-right"></i>{" "}
                                            </div>
                                        </a>
                                    </div>
                                </LocalizationProvider>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />

            <br />
            <br />
            <div className="row" style={{ width: "100%" }}>
                <div className="col-lg-6">
                    <div className="card">
                        <PieChart />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <PieChart />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="row" style={{ width: "100%" }}>
                <div className="col-lg-6">
                    <div className="card">
                        <PieChart />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <PieChart />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="row" style={{ width: "100%" }}>
                <div className="col-lg-6">
                    <div className="card">
                        <Bargraph />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <Bargraph />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="row" style={{ width: "100%" }}>
                <div className="col-lg-6">
                    <div className="card">
                        <PieChart />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <PieChart />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
