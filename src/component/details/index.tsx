import React,{useState,useEffect} from 'react'
import { Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {useParams} from "react-router-dom";
import { FULL_API,API_ID } from '../const';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate  } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
export default function Index() {
    const [ids,setIds]=useState<any[]>([]);
    const [state,setState]=useState<any>(null);
    const [rows,setRow]=useState<any[]>([]);
    const navigate = useNavigate()
    const param = useParams();
    useEffect(()=>{
        (async ()=>{
            try{
            const data = await axios.get(API_ID(param.id));
            //   setState("");
              var res_data=data.data;
            setRow([{
              id:res_data.id,
              neo_reference_id:res_data.neo_reference_id,
              name:res_data.name,
              designation:res_data.designation,
              link:res_data.links.self,

            }])
        }
        catch(e){
            toast.error("id is not valid", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                setTimeout(()=>{
                    navigate("/")
                },5000)
        }
        
            // setIds(temp);
          })();
    },[]);
   
    const columns= [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'neo_reference_id', headerName: 'neo_reference_id', width: 100 },
        { field: 'name', headerName: 'name', width: 100 },
        {
          field: 'designation',
          headerName: 'designation',
          
          width: 100,
        },
        {
          field: 'link',
          headerName: 'Link',
  
          
          width: 100,
        }
          
      ];
    return (
        <div>
           <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"3%"}}>
                <Typography variant="h3">
                    API
                </Typography>
                </div>
            <div style={{height:30,width:"95%",margin:"1%",display:"flex",flexDirection:"row",justifyContent:"center"}}>
            
            <DataGrid  pageSize={5}
        rowsPerPageOptions={[5]} rows={rows} columns={columns}></DataGrid>
            </div>
            <ToastContainer position="top-right" />
        </div>
    )
}
