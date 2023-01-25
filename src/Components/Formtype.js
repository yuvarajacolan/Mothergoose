import React from 'react'
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

const Formtype = () => {
    const [startdate, setStartDate] = React.useState(null);
    const [enddate, setEndDate] = React.useState(null);
  return (
    <div style={{marginTop:'20px'}}>
         <Container maxWidth="md" alignItems="center">
         <Card sx={{ minWidth: 275 }}>
              <CardContent>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
       <Stack direction="row" spacing={4} 
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       justifyContent="center">
       <DatePicker
        label="From Date"
        value={startdate}
        onChange={(newValue) => {
            setStartDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
        <DatePicker
        label="To Date"
        value={enddate}
        onChange={(newValue) => {
            setEndDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
        </Stack>

        <Stack direction="row" spacing={4} sx={{marginTop:'20px'}} justifyContent="center">
      <TextField id="outlined-basic" label="MG Patient_Id" variant="outlined" />
      <TextField id="outlined-basic" label="Provider" variant="outlined" />
      <TextField id="outlined-basic" label="Enter You ZIP code" variant="outlined" />
      
      </Stack>
    
 
    
         
    </LocalizationProvider>
    </CardContent>
    </Card>
    </Container>
   
    </div>
  )
}

export default Formtype
