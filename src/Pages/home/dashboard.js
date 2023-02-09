import React, { lazy, Suspense, useEffect, useState } from "react";
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
import dynamic from "next/dynamic";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { patientBarAction } from "redux/slice/userSlice";
import {
  postPatientBarChatApi,
  postPatientEnrolledBarChatApi,
  postPatientAlcoholUsedPieChartApi,
  postPatientPieChartApi,
  postPatientSmokeUsedPieChartApi,
  postPatientAgeDeliveryBarChartApi,
  postPatientAgeGroupDeliveryPieChartApi,
  postPatientHealthInsurancePieChartApi,
  postPatientStressedPieChartApi,
  postPatientLackOfTransportationsPieChartApi,
} from "redux/action/userAction";
import LoaderState from "<prefix>/Components/Loader";

const Bargraph = dynamic(() => import("../../components/Bargraph"), {
  ssr: false,
});
const PieChart = dynamic(() => import("../../components/PieChart"), {
  ssr: false,
});

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const patientBarResponse = useSelector(
    (state) => state.user.patientBarChartinfo
  );
  const patientEnrolledBarResponse = useSelector(
    (state) => state.user.patientEnrolledBarChartinfo
  );

  const patientAgeDeliveryResponse = useSelector(
    (state) => state.user.patientAgeDeliveryBarChartinfo
  );
  const patientLackOfTransportationsPieResponse = useSelector(
    (state) => state.user.patientLackOfTransportationsPieChartinfo
  );
  const patientLackOfTransportationsPieChartisLoading = useSelector(
    (state) => state.user.patientLackOfTransportationsPieChartisLoading
  );

  const patientAlcoholUsedPieResponse = useSelector(
    (state) => state.user.patientAlcoholUsedPieChartinfo
  );
  const PatientPieResponse = useSelector(
    (state) => state.user.patientEnrolledPieChartinfo
  );
  const PatientSmokeUsedPieResponse = useSelector(
    (state) => state.user.patientSmokeUsedPieChartinfo
  );
  const PatientAgeGroupDeliveryPieResponse = useSelector(
    (state) => state.user.patientAgeGroupDeliveryPieChartinfo
  );
  const PatientHealthInsurancePieResponse = useSelector(
    (state) => state.user.patientHealthInsurancePieChartinfo
  );
  const PatientStressedPieResponse = useSelector(
    (state) => state.user.patientStressedPieChartinfo
  );
  const [startdate, setStartDate] = React.useState(null);
  const [enddate, setEndDate] = React.useState(null);
  const [PatientBarChat, setPatientBarChat] = useState([]);
  const [patientEnrolledBarChat, setpatientEnrolledBarChat] = useState([]);
  const [PatientAgeDelivertBarChat, setPatientAgeDelivertBarChat] = useState(
    []
  );
  const [
    patientLackOfTransportationsPieChart,
    setpatientLackOfTransportationsPieChart,
  ] = useState([]);
  const [patientAlcoholUsedPieChart, setpatientAlcoholUsedPieChart] = useState(
    []
  );
  const [patientPieChart, setpatientPieChart] = useState([]);
  const [patientSmokePieChart, setPatientSmokePieChart] = useState([]);
  const [patientAgeGroupDeliveryPieChart, setPatientAgeGroupDeliveryPieChart] =
    useState([]);
  const [patientHealthInsurancePieChart, setpatientHealthInsurancePieChart] =
    useState([]);
  const [patientStressedPieChart, setPatientStressedPieResponse] = useState([]);

  useEffect(() => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    var priorDate = new Date(new Date().setDate(date.getDate() - 30));
    let Pday = priorDate.getDate();
    let Pmonth = priorDate.getMonth() + 1;
    let Pyear = priorDate.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    let PriorDatevalue = `${Pyear}-${Pmonth}-${Pday}`;
    setStartDate(PriorDatevalue);
    setEndDate(currentDate);
  }, []);

  const _onFindPress = () => {
    const reqBody = {
      fromDate: startdate,
      toDate: enddate,
    };
    dispatch(postPatientBarChatApi(reqBody));
    dispatch(postPatientEnrolledBarChatApi(reqBody));
    dispatch(postPatientAlcoholUsedPieChartApi(reqBody));
    dispatch(postPatientPieChartApi(reqBody));
    dispatch(postPatientSmokeUsedPieChartApi(reqBody));
    dispatch(postPatientAgeDeliveryBarChartApi(reqBody));
    dispatch(postPatientAgeGroupDeliveryPieChartApi(reqBody));
    dispatch(postPatientHealthInsurancePieChartApi(reqBody));
    dispatch(postPatientStressedPieChartApi(reqBody));
    dispatch(postPatientLackOfTransportationsPieChartApi(reqBody));
  };

  useEffect(() => {
    let dataPoints = [];
    if (patientBarResponse?.data) {
      patientBarResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          label: item,
          y: patientBarResponse?.data?.datasets[0]?.data[i],
        });
      });
      setPatientBarChat(dataPoints);
    }
  }, [patientBarResponse]);

  useEffect(() => {
    let dataPoints = [];
    if (patientEnrolledBarResponse?.data) {
      patientEnrolledBarResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          label: item,
          y: patientEnrolledBarResponse?.data?.datasets[0]?.data[i],
        });
      });
      setpatientEnrolledBarChat(dataPoints);
    }
  }, [patientEnrolledBarResponse]);

  useEffect(() => {
    let dataPoints = [];
    if (patientAgeDeliveryResponse?.data) {
      patientAgeDeliveryResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          label: item,
          y: patientAgeDeliveryResponse?.data?.datasets[0]?.data[i],
        });
      });
      setPatientAgeDelivertBarChat(dataPoints);
    }
  }, [patientAgeDeliveryResponse]);

  useEffect(() => {
    let dataPoints = [];
    if (patientLackOfTransportationsPieResponse?.data) {
      patientLackOfTransportationsPieResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          name: item,
          y: patientLackOfTransportationsPieResponse?.data?.datasets[0]?.data[
            i
          ],
        });
      });

      setpatientLackOfTransportationsPieChart(dataPoints);
    }
  }, [patientLackOfTransportationsPieResponse]);

  useEffect(() => {
    let dataPoints = [];
    if (patientAlcoholUsedPieResponse?.data) {
      patientAlcoholUsedPieResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          name: item,
          y: patientAlcoholUsedPieResponse?.data?.datasets[0]?.data[i],
        });
      });

      setpatientAlcoholUsedPieChart(dataPoints);
    }
  }, [patientAlcoholUsedPieResponse]);
  useEffect(() => {
    let dataPoints = [];
    if (PatientPieResponse?.data) {
      PatientPieResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          name: item,
          y: PatientPieResponse?.data?.datasets[0]?.data[i],
        });
      });

      setpatientPieChart(dataPoints);
    }
  }, [PatientPieResponse]);
  useEffect(() => {
    let dataPoints = [];
    if (PatientSmokeUsedPieResponse?.data) {
      PatientSmokeUsedPieResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          name: item,
          y: PatientSmokeUsedPieResponse?.data?.datasets[0]?.data[i],
        });
      });

      setPatientSmokePieChart(dataPoints);
    }
  }, [PatientSmokeUsedPieResponse]);
  useEffect(() => {
    let dataPoints = [];
    if (PatientAgeGroupDeliveryPieResponse?.data) {
      PatientAgeGroupDeliveryPieResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          name: item,
          y: PatientAgeGroupDeliveryPieResponse?.data?.datasets[0]?.data[i],
        });
      });
      setPatientAgeGroupDeliveryPieChart(dataPoints);
    }
  }, [PatientAgeGroupDeliveryPieResponse]);
  useEffect(() => {
    let dataPoints = [];
    if (PatientHealthInsurancePieResponse?.data) {
      PatientHealthInsurancePieResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          name: item,
          y: PatientHealthInsurancePieResponse?.data?.datasets[0]?.data[i],
        });
      });

      setpatientHealthInsurancePieChart(dataPoints);
    }
  }, [PatientHealthInsurancePieResponse]);

  useEffect(() => {
    let dataPoints = [];
    if (PatientStressedPieResponse?.data) {
      PatientStressedPieResponse?.data.labels?.map((item, i) => {
        dataPoints.push({
          name: item,
          y: PatientStressedPieResponse?.data?.datasets[0]?.data[i],
        });
      });

      setPatientStressedPieResponse(dataPoints);
    }
  }, [PatientStressedPieResponse]);

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
      _onFindPress();
      console.log(values, "====");
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
     
                    <TextField
                      id="date"
                      label="From Date"
                      type="date"
                      value={startdate}
                      defaultValue= {startdate}
                      sx={{ width: 220 }}
                      onChange={(newValue) => {
                       
                        console.log("sss", newValue.target.value);
                        setStartDate( newValue.target.value);

                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                               <TextField
                      id="date"
                      label="To Date"
                      type="date"
                      value={enddate}
                      defaultValue= {enddate}
                      sx={{ width: 220 }}
                      onChange={(newValue) => {
                       
                        console.log("sss", newValue.target.value);
                        setEndDate( newValue.target.value);

                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Stack>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 6 }}
                    sx={{ marginTop: "20px", width: "100%" }}
                  >
                    <TextField
                      error={Boolean(
                        formik.touched.patientID && formik.errors.patientID
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
                        formik.touched.provider && formik.errors.provider
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
                        formik.touched.zipcode && formik.errors.zipcode
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
                        formik.touched.state && formik.errors.state
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
                    <a
                      className="dedcription-btn"
                      href="#"
                      onClick={formik.handleSubmit}
                    >
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
      <div className="row" style={{ width: "100%" }}>
        <div className="col-lg-6">
          <div className="card">
            <Bargraph
              {...props}
              title={patientAgeDeliveryResponse?.title}
              datasets={PatientAgeDelivertBarChat}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <PieChart
              {...props}
              title={PatientStressedPieResponse?.title}
              datasets={patientStressedPieChart}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="row" style={{ width: "100%" }}>
        <div className="col-lg-6">
          <div className="card">
            <PieChart
              {...props}
              title={patientAlcoholUsedPieResponse?.title}
              datasets={patientAlcoholUsedPieChart}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <PieChart
              {...props}
              title={PatientPieResponse?.title}
              datasets={patientPieChart}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="row" style={{ width: "100%" }}>
        <div className="col-lg-6">
          <div className="card">
            <PieChart
              {...props}
              title={PatientSmokeUsedPieResponse?.title}
              datasets={patientSmokePieChart}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <Bargraph
              {...props}
              title={patientEnrolledBarResponse?.title}
              datasets={patientEnrolledBarChat}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="row" style={{ width: "100%" }}>
        <div className="col-lg-6">
          <div className="card">
            <Bargraph
              {...props}
              title={patientBarResponse?.title}
              datasets={PatientBarChat}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <PieChart
              {...props}
              title={patientLackOfTransportationsPieResponse?.title}
              datasets={patientLackOfTransportationsPieChart}
            />

            {/* <Bargraph {...props} title = {patientAgeDeliveryResponse?.title} datasets = {PatientAgeDelivertBarChat} /> */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="row" style={{ width: "100%" }}>
        <div className="col-lg-6">
          <div className="card">
            <PieChart
              {...props}
              title={PatientAgeGroupDeliveryPieResponse?.title}
              datasets={patientAgeGroupDeliveryPieChart}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <PieChart
              {...props}
              title={PatientHealthInsurancePieResponse?.title}
              datasets={patientHealthInsurancePieChart}
            />
          </div>
        </div>
        {patientLackOfTransportationsPieChartisLoading ? <LoaderState /> : ""}
      </div>
    </>
  );
};

export default Dashboard;
