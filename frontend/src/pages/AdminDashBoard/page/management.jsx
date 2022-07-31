import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Search from '../../../assets/img/search.png';
import { Component } from "react";
import adminService from '../../../service/admin';
import signInService from '../../../service/signIn';

import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const ariaLabel = { 'aria-label': 'description' };


class Managemant extends  Component{
        constructor(props){
          super(props)
          this.state = {
            AdminFormData:{
              admin_Id:'',
              type:'',
              userName:'',
              password:'',
                  // userLogin:{
                  //     user_Id:'',
                  //     type:'',
                  //     user_Name:'',
                  //     password:''
                      
                  //   }
            },
            adminData:[],

            SignInFormData:{
              user_Id:'',
              user_Name:'',
              password:'',
            },
            data:[]


        }
        }

        deleteAdmin = async (id) =>{
          let params = {
            admin_Id: id

          }

          let res = await adminService.deleteAdmin(params)

          if(res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            this.loadData();
         } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
         }

        }


        exampleForMap = () =>{
          this.state.data.map((value,index) =>{
            console.log(value.index)
          });
        }
      
        loadData = async () =>{
          console.log("load method Calling")
          let res =await adminService.GetAdmin();
          console.log("admin data " + res.data.data);
        
          if(res.status === 200){
             this.setState({
            data :res.data.data
            });
          }
          console.log(this.state.data);
      
          this.exampleForMap();
         }
      
         componentDidMount() { 
          this.loadData();
       }



      //  ---------------------user------------------------


      deleteSignIn = async (id) =>{
        let params = {
          user_Id: id

        }

        let res = await signInService.deleteSignIn(params)

        if(res.status === 200) {
          this.setState({
              alert: true,
              message: res.data.message,
              severity: 'success'
          });
          this.loadSignInData();
       } else {
          this.setState({
              alert: true,
              message: res.data.message,
              severity: 'error'
          });
       }

      }



      
      loadSignInData = async () =>{
        console.log("load method Calling")
        let res =await signInService.GetSignIn();
        console.log("SignInData " + res.data.data);
      
        if(res.status === 200){
           this.setState({
          data :res.data.data
          });
        }
        console.log(this.state.data);
    
        this.exampleForMap();
       }
    
       componentDidMount() { 
        this.loadSignInData();
        
     }
    




        
      render(){
        return (  
          <>

          {/* ------------------------User -------------------------------------- */}
          
              <section>
              <div>
                <div style={{position: "absolute",left:"600px",top:"118px",zIndex:"2",color:"black"}}>
              <Typography variant="h5" noWrap component="div" >
                     Management Information
                    </Typography>
                    <Typography variant="h6" noWrap component="div" style={{position: "relative",left:"380px",top:"18px",color:"gray"}}>
                     Admin Details
                    </Typography>
                    <Typography variant="h6" noWrap component="div" style={{position: "relative",left:"-250px",top:"-20px",color:"gray"}}>
                     User Details
                    </Typography>
                    </div>
                    <Input placeholder="Search" inputProps={ariaLabel} style={{position: "absolute",left:"70%",top:"110px",width:"25%"}}/>
                    <img src={Search}style={{position: "absolute",left:"1230px",top:"110px",width:"2%"}}/>
    
              <TableContainer component={Paper} style={{width:"40%",left:"30px",position:"relative",top:"130px"}}>
              <Table sx={{ minWidth: 100 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                      <StyledTableCell>UserId</StyledTableCell>
                      {/* <StyledTableCell align="right">Type</StyledTableCell> */}
                      <StyledTableCell align="right">UserName</StyledTableCell>
                      <StyledTableCell align="right">Password</StyledTableCell>
                       <StyledTableCell align="right">Action</StyledTableCell>
                      
                  </TableRow>
                </TableHead>
                <TableBody>
                  

                {
                        this.state.data.map((row) => (
                          <TableRow>
                          <TableCell>{row.user_Id}</TableCell>
                          <StyledTableCell align="right">{row.user_Name}</StyledTableCell>
                          <StyledTableCell align="right">{row.password}</StyledTableCell>
                          {/* <StyledTableCell align="right">{row.password}</StyledTableCell> */}
                          {/* <StyledTableCell align="right">{row.user_Id}</StyledTableCell> */}
                          
                          
                          <StyledTableCell align="right">

                          <Tooltip title="Delete"><IconButton
                                              onClick={() => {
                                                  this.deleteSignIn(row.user_Id)
                                              }}
                                          ><DeleteIcon color="error" /></IconButton>
                                          </Tooltip>

                                          {/* <Tooltip title="Edit"><IconButton
                                              onClick={() => {
                                                  console.log("edit icon clicked!")
                                                  this.updateRentalRate(row);
                                              }}
                                          ><EditIcon color='primary'/></IconButton>
                                          </Tooltip> */}
                          </StyledTableCell>
                        </TableRow>
                        ))

                 
                }

                </TableBody>
              </Table>
            </TableContainer>
                    </div>
                </section>
          
          
          
          
          {/* ------------------------Admin-------------------------------------- */}
                  <section>
                  <div>
                  
                    <div style={{position: "absolute",left:"9250px",top:"-500px",zIndex:"2",color:"black"}}>
                  <Typography variant="h5" noWrap component="div" style={{position: "relative",left:"2px",top:"5px",zIndex:"5"}}>
                        Admin Details
                        </Typography>
                        </div>
                        
                        <TableContainer component={Paper} style={{width:"40%",left:"650px",position:"relative",top:"73px"}}>
              <Table sx={{ minWidth: 100 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                              <StyledTableCell align="right">Type</StyledTableCell>
                              <StyledTableCell align="right">UserName</StyledTableCell>
                              <StyledTableCell align="right">Password</StyledTableCell>
                              {/* <StyledTableCell align="right">UserId</StyledTableCell> */}
                              <StyledTableCell align="right">Action</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                  
                    {
                        this.state.data.map((row) => (
                          <TableRow>
                          <TableCell>{row.admin_Id}</TableCell>
                          <StyledTableCell align="right">{row.type}</StyledTableCell>
                          <StyledTableCell align="right">{row.userName}</StyledTableCell>
                          <StyledTableCell align="right">{row.password}</StyledTableCell>
                          {/* <StyledTableCell align="right">{row.user_Id}</StyledTableCell> */}
                          {/* console.log(row.admin); */}
                          
                          
                          <StyledTableCell align="right">

                          <Tooltip title="Delete"><IconButton
                                              onClick={() => {
                                                  this.deleteAdmin(row.admin_Id)
                                              }}
                                          ><DeleteIcon color="error" /></IconButton>
                                          </Tooltip>

                                          {/* <Tooltip title="Edit"><IconButton
                                              onClick={() => {
                                                  console.log("edit icon clicked!")
                                                  this.updateRentalRate(row);
                                              }}
                                          ><EditIcon color='primary'/></IconButton>
                                          </Tooltip> */}
                          </StyledTableCell>
                        </TableRow>
                        ))

                 
                }

                  
                        </TableBody>
                      </Table>
                      </TableContainer>
                            </div>
                        </section>
          
              </>
        );

      }

  }
  export default Managemant;
