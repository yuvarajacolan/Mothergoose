import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BadgeIcon from "@mui/icons-material/Badge";
import Graph from "./Graph";
import Navbar from "./Navbar";


const Formtype = () => {
  const [startdate, setStartDate] = React.useState(null);
  const [enddate, setEndDate] = React.useState(null);
  return (
    <>
    <Navbar />
      <div > 
        <div className="bg-img">
          <div className="col-lg-5 divcenter">
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
                      onChange={(newValue) => {
                        setStartDate(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          InputProps={{
                            endAdornment: <CalendarMonthIcon />,
                          }}
                          className="datePick"
                        />
                      )}
                    />
                    <DatePicker
                      label="To Date"
                      value={enddate}
                      className="datePick"
                      onChange={(newValue) => {
                        setEndDate(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          InputProps={{
                            endAdornment: <CalendarMonthIcon />,
                          }}
                        />
                      )}
                    />
                  </Stack>
                  <Stack direction="row" spacing={4} sx={{ marginTop: "20px" }}>
                    <TextField
                      id="outlined-basic"
                      label="MG Patient Id"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <BadgeIcon />,
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Provider"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <PersonIcon />,
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Enter You ZIP code"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <LocationOnIcon />,
                      }}
                    />
                  </Stack>
                  <Stack direction="row" spacing={4} sx={{ marginTop: "20px" }}>
                    <TextField
                      id="outlined-basic"
                      label="Insurance Payer"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <PersonIcon />,
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="State"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <LocationOnIcon />,
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Mode of Delivery"
                      variant="outlined"
                      select
                      sx={{ width: "30%" }}
                    />
                  </Stack>
                  <div class="col-sm-4 col-md-4" style={{ margin: "auto" }}>
                    <a class="dedcription-btn" href="#">
                      <span class="name-descripeion">Find</span>
                      <div class="btn-icon">
                        <i class="fa-solid fa-magnifying-glass-arrow-right"></i>{" "}
                      </div>
                    </a>
                  </div>
                </LocalizationProvider>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Graph />
    
    </>
  );
};

export default Formtype;
