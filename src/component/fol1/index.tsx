import React,{useState,useEffect} from 'react'
import {TextField,Grid,Container,Button,Typography,FormControl,InputLabel,Select,MenuItem} from "@mui/material";
import {} from "@mui/icons-material";
import { DataGrid } from '@mui/x-data-grid';
import {api_key,API_ID,FULL_API} from "../const";
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Index(props:any) {
    // var i = props;
    const [state,setState]=useState<any>("");
    const columns= [
      { field: 'id', headerName: 'ID', width: 100 },
      { field: 'neo_reference_id', headerName: 'neo_reference_id', width: 130 },
      { field: 'name', headerName: 'name', width: 130 },
      {
        field: 'designation',
        headerName: 'designation',
        
        width: 90,
      },
      {
        field: 'link',
        headerName: 'Link',

        
        width: 160,
      }
        
    ];
    
    
    const [rows,setRow]=useState<any[]>([]);
    const [ids,setIds]=useState<any[]>([]);
    const navigate = useNavigate()
    // useEffect(()=>{
    //   (async ()=>{
    //     const data = await axios.get(FULL_API());
    //     var res=data.data;
    //     console.log(res)
    //     var temp:any[] =[];
    //     res.near_earth_objects.forEach((value:any,index:any)=>{
    //       temp.push(value.neo_reference_id);
    //     });

    //     setIds(temp);
    //   })();
     

    // },[])
    return (
      <>
     <Grid container justifyContent={"center"} style={{marginTop:"10%"}} data-testid="all">
         <Grid item lg={3} md={3} xs={10}>
         <Typography variant="h4" component="h4" style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
  NASA API
</Typography>
                 {/* <div>
                 <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">ID</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
   
    label="ID"
    onChange={(e)=>{
      setState(e.target.value);
    }}
  >
   {ids.map((value,index)=>{
     return (<MenuItem value={value}>{value}</MenuItem>)
   })}
  </Select>
</FormControl>
                 
                 </div> */}
                 <div>
                   <TextField label="Enter Id" onChange={(e)=>{
                     setState(e.target.value);
                   }} fullWidth>

                   </TextField>
                 </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"2%"}}>
            <Button variant="contained" style={{marginRight:"10%"}} onClick={async (e)=>{
            //   const data = await axios.get(API_ID(state));
            //   setState("");
            //   var res_data=data.data;
            // setRow([{
            //   id:res_data.id,
            //   neo_reference_id:res_data.neo_reference_id,
            //   name:res_data.name,
            //   designation:res_data.designation,
            //   link:res_data.links.self,

            // }])
            if (state==""){
              toast.error("enter id first", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            }
            else{
           navigate("/details/"+state.toString())
            }
            }}>View</Button>
            <Button variant="contained" onClick={async (e)=>{
            //   const data = await axios.get(API_ID(ids[Math.floor(Math.random() * 10)]));
            //   setState("");
            //   var res_data=data.data;
            // setRow([{
            //   id:res_data.id,
            //   neo_reference_id:res_data.neo_reference_id,
            //   name:res_data.name,
            //   designation:res_data.designation,
            //   link:res_data.links.self,

            // }])
            // 2000433
            navigate("/details/"+(Math.random()*10000000).toString().split(".")[0])
            }}>Random</Button>
            </div>


        
           
             
         </Grid>
    
    </Grid> 
    <ToastContainer position="top-right" />
    {/* <div style={{height:100,display:"flex",flexDirection:"row",justifyContent:"center",marginLeft:"10%",marginRight:"10%",marginTop:"2%"}}>
           <DataGrid style={{display:"inline"}} rowsPerPageOptions={[5]} rows={rows} columns={columns} pageSize={5}></DataGrid>
         </div> */}
      </>
        
    )
}
