
import './dashBoard.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Component } from "react";

import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';


const top100Films = [
  { label: 'Empty' },
  ];

  const car = [
    { label: 'Empty' },
    ];

class Home extends Component {
    constructor(props){
      super(props);
    }
    
  render(){
    return (

      <>

{/* {/-------------------------------- payment details section --------------------------------------/} */}

<section>
        <div id="dashboardReectangle1">
        <Typography variant="h6" noWrap component="div" style={{position: "absolute",left:"28px",top:"25px"}}>
           Payment Details
          </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Booking ID" />}
              style={{position: "relative",top:"13px",backgroundColor:"transparent",color:"white",left:"240px",zIndex:"1",width:"25%",borderRadius:"7px",}}/>

        <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={car}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Car No" />}
              style={{position: "relative",top:"-43px",borderRadius:"7px",backgroundColor:"transparent",color:"white",left:"395px",zIndex:"1",width:"25%"}}/>

              <TextField id="outlined-basic" label="Payment ID" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="currently KM" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success" style={{position: "relative",top:"-25px",left:"35px",width:"20%",backgroundColor:"Green"}}>Save</Button>
              <TextField id="outlined-basic" label="Ride KM" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Total KM" variant="outlined" style={{position: "relative",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success"style={{position: "relative",top:"-25px",backgroundColor:"Blue",left:"35px",width:"20%",zIndex:"1"}}>Update</Button>
              <TextField id="outlined-basic" label="Status" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Total Price" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success"style={{position: "relative",top:"-25px",backgroundColor:"red",left:"35px",width:"20%"}}>Delete</Button>
        </div>
  </section>

{/* 

{/--------------------------------   Car details section --------------------------------------/} */}


  
  <section id="dashboardReectangle2">
    <div>

    <Typography variant="h6" noWrap component="div" style={{position: "absolute",left:"28px",top:"25px"}}>
           Add Car Details
          </Typography>
    <TextField id="outlined-basic" label="Register ID" variant="outlined" style={{position: "relative",top:"13px",backgroundColor:"transparent",color:"white",left:"240px",zIndex:"1",width:"25%"}}/>
              
        <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={car}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Rate ID" />}
              style={{position: "relative",top:"-43px",borderRadius:"7px",backgroundColor:"transparent",color:"white",left:"395px",zIndex:"1",width:"25%"}}/>

              <TextField id="outlined-basic" label="Brand" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Type" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success" style={{position: "relative",top:"27px",left:"35px",width:"20%",backgroundColor:"Green"}}>Save</Button>
              <TextField id="outlined-basic" label="Passenger" variant="outlined" style={{position: "relative",top:"-35px",borderRadius:"7px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Transmission Type" variant="outlined" style={{position: "relative",top:"-35px",borderRadius:"7px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/><br/>
             
             
              {/*  */}
              
              <TextField id="outlined-basic" label="Fuel" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"17%"}}/>
              <TextField id="outlined-basic" label="Color" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"17%"}}/>
              <TextField id="outlined-basic" label="Loss Damage Price" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-35px",backgroundColor:"white",color:"white",left:"31px",zIndex:"1",width:"35%"}}/>
              <Button variant="contained" color="success"style={{position: "relative",top:"-25px",backgroundColor:"red",left:"44px",width:"20%"}}>Delete</Button>
              
              
              
    </div>
      

  </section>




{/* {/--------------------------------  Rental rate details section --------------------------------------/} */}

  <section id="dashboardReectangle3">
    <div>
    <Typography variant="h6" noWrap component="div" style={{position: "absolute",left:"28px",top:"25px"}}>
           Rental Rate Details
          </Typography>
          <TextField id="outlined-basic" label="Rate ID" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"13px",backgroundColor:"transparent",color:"white",left:"240px",zIndex:"1",width:"25%"}}/>
          <TextField id="outlined-basic" label="Type" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"13px",backgroundColor:"transparent",color:"white",left:"240px",zIndex:"1",width:"25%"}}/>
       
          <div id="driverBtn">
                  <Button variant="contained" color="success" style={{position: "absolute",top:"90px",backgroundColor:"green",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Save</Button><br/><br/>
                  <Button variant="contained" color="success"style={{position: "absolute",top:"150px",backgroundColor:"blue",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Update</Button><br/><br/>
                  <Button variant="contained" color="success"style={{position: "absolute",top:"200px",backgroundColor:"red",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Delete</Button>
              </div>
  
          <TextField id="outlined-basic" label="Brand" variant="outlined" style={{position: "relative",top:"-70px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Daily Rate" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-70px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Free KM Day" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-70px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Free KM Month" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-70px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/><br/>
              <TextField id="outlined-basic" label="Monthly Rate" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-70px",backgroundColor:"white",color:"white",left:"20px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Price Per Extra KM" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-70px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>  

              
              
   
   
    </div>
  </section>



{/* {/--------------------------------  Driver details section --------------------------------------/} */}

  <section id="dashboardReectangle4">
    
      
    <Typography variant="h6" noWrap component="div" style={{position: "absolute",left:"28px",top:"25px",zIndex:"2"}}>
           Add Driver Details
          </Typography>
    
            <div id="driverBtn">
                  <Button variant="contained" color="success" style={{position: "absolute",top:"110px",backgroundColor:"green",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Save</Button><br/><br/>
                  <Button variant="contained" color="success"style={{position: "absolute",top:"170px",backgroundColor:"blue",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Update</Button><br/><br/>
                  <Button variant="contained" color="success"style={{position: "absolute",top:"230px",backgroundColor:"red",color:"white",right:"-10px",zIndex:"1",width:"20%"}}>Delete</Button>
              </div>
        
              <TextField id="outlined-basic" label="Driver NIC" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-25px",margin:"5px",backgroundColor:"white",color:"white",left:"13px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="License No" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-25px",margin:"5px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Name" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-25px",margin:"5px",backgroundColor:"white",color:"white",left:"13px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Address" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-25px",margin:"5px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/><br/>
              <TextField id="outlined-basic" label="Contact No" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-25px",margin:"5px",backgroundColor:"white",color:"white",left:"13px",zIndex:"1",width:"35%"}}/>
              <TextField id="outlined-basic" label="Salary" variant="outlined" style={{position: "relative",borderRadius:"7px",top:"-25px",margin:"5px",backgroundColor:"white",color:"white",left:"25px",zIndex:"1",width:"35%"}}/>  

  
  </section>
       
       </>

    );

}
}

export default Home;
