import React,{useState,useEffect} from 'react'
import {TextField,Grid,Container,Button,Typography,FormControl,InputLabel,Select,MenuItem} from "@mui/material";
import {} from "@mui/icons-material";
import { DataGrid } from '@mui/x-data-grid';
import {api_key,API_ID,FULL_API} from "../const";
import axios from 'axios';

export default function Index(props:any) {
    // var i = props;
    const [state,setState]=useState<any>(null);
    const columns= [
      { field: 'id', headerName: 'ID', width: 70 },
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
    useEffect( ()=>{
      (async ()=>{
        const data = await axios.get(FULL_API());
        var res=data.data;
        var temp:any[] =[];
        res.near_earth_objects.forEach((value:any,index:any)=>{
          temp.push(value.neo_reference_id);
        });

        setIds(temp);
      })();
     

    },[])
    return (
      <>
     <Grid container justifyContent={"center"} style={{marginTop:"10%"}} data-testid="all">
         <Grid item xs={3}>
         <Typography variant="h3" component="h4" style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
  NASA API
</Typography>
                 <div>
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
                 
                 </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"2%"}}>
            <Button variant="contained" style={{marginRight:"10%"}} onClick={async (e)=>{
              const data = await axios.get(API_ID(state));
              setState("");
              var res_data=data.data;
            setRow([{
              id:res_data.id,
              neo_reference_id:res_data.neo_reference_id,
              name:res_data.name,
              designation:res_data.designation,
              link:res_data.links.self,

            }])

            }}>View</Button>
            <Button variant="contained" onClick={async (e)=>{
              const data = await axios.get(API_ID(ids[Math.floor(Math.random() * 10)]));
              setState("");
              var res_data=data.data;
            setRow([{
              id:res_data.id,
              neo_reference_id:res_data.neo_reference_id,
              name:res_data.name,
              designation:res_data.designation,
              link:res_data.links.self,

            }])
            }}>Random</Button>
            </div>


        
           
             
         </Grid>
    
    </Grid> 
    <div style={{height:100,display:"flex",flexDirection:"row",justifyContent:"center",marginLeft:"10%",marginRight:"10%",marginTop:"2%"}}>
           <DataGrid style={{display:"inline"}} rowsPerPageOptions={[5]} rows={rows} columns={columns} pageSize={5}></DataGrid>
         </div>
      </>
        
    )
}
